/* =====================================================================
   nishkam-tracker  –  student sign-in and progress tracking
   Paste this whole file into the nishkam-tracker Worker in Cloudflare.

   Needs (Settings → Bindings / Variables and Secrets):
     D1 bindings:  DB_ALEVEL, DB_GCSE, DB_NEWALEVEL   (any not yet made are simply unavailable)
     Secrets:      SESSION_SECRET, TEACHER_PASSWORD

   Nothing personal lives in the website code. Names exist only in D1 and
   are only ever returned to the teacher dashboard. Passwords are stored
   as PBKDF2 hashes and are shown once, when created or reset.
   ===================================================================== */

const SITES = { alevel: 'DB_ALEVEL', gcse: 'DB_GCSE', newalevel: 'DB_NEWALEVEL' };
const ORIGIN_OK = /^https:\/\/(nishkam-bs\.github\.io|([a-z0-9-]+\.)*alevelnishkam\.workers\.dev|nishkam[a-z0-9-]*\.pages\.dev)$/;
const STUDENT_DAYS = 300;          // a student stays signed in on a device for this long
const TEACHER_HOURS = 8;
const PBKDF2_ITER = 100000;        // Cloudflare's maximum

const ADJ = ['amber','bold','brave','bright','brisk','calm','clever','copper','coral','crisp','dawn','eager','early','fair','fast','fresh','gentle','golden','grand','green','happy','honest','jade','keen','kind','lively','lucky','lunar','maple','mellow','merry','mild','misty','neat','noble','olive','proud','quick','quiet','rapid','ruby','rustic','sage','sandy','sharp','silver','smooth','snowy','solar','steady','still','stone','sunny','swift','tidy','topaz','true','velvet','vivid','warm','wild','windy','wise','young'];
const NOUN = ['acorn','badger','beacon','birch','bison','brook','canyon','cedar','comet','condor','crane','delta','dolphin','eagle','falcon','fern','finch','fjord','fox','glacier','harbour','hawk','heron','island','jaguar','kestrel','lagoon','lantern','lark','lynx','maple','meadow','meteor','moose','orbit','osprey','otter','panda','pebble','pine','planet','prairie','quartz','raven','reef','ridge','river','robin','salmon','summit','swallow','thistle','tiger','tulip','valley','violet','walrus','willow','wolf','wren','yacht','zebra','canoe','harp'];

/* ---------- helpers ---------- */
const enc = new TextEncoder();
const b64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
const now = () => Date.now();
const iso = () => new Date().toISOString();
const rnd = n => { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; };
const pick = list => list[rnd(list.length)];
const clip = (v, n) => String(v == null ? '' : v).slice(0, n);

function cors(req) {
  const o = req.headers.get('Origin') || '';
  return {
    'Access-Control-Allow-Origin': ORIGIN_OK.test(o) ? o : 'https://nishkam-bs.github.io',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}
class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
const fail = (status, msg) => { throw new HttpError(status, msg); };

async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function sign(env, payload) {
  const body = b64u(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(env.SESSION_SECRET), enc.encode(body));
  return body + '.' + b64u(sig);
}
async function verify(env, token) {
  if (typeof token !== 'string' || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(env.SESSION_SECRET), fromB64u(sig), enc.encode(body));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(fromB64u(body)));
    return p.exp > now() ? p : null;
  } catch (e) { return null; }
}
async function hashPw(pw, saltB64) {
  const salt = saltB64 ? fromB64u(saltB64) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PBKDF2_ITER }, key, 256);
  return { hash: b64u(bits), salt: b64u(salt) };
}
async function sameText(env, a, b) {   // constant-time comparison via HMAC
  const k = await hmacKey(env.SESSION_SECRET);
  const [x, y] = await Promise.all([crypto.subtle.sign('HMAC', k, enc.encode(String(a))), crypto.subtle.sign('HMAC', k, enc.encode(String(b)))]);
  const u = new Uint8Array(x), v = new Uint8Array(y);
  let d = 0; for (let i = 0; i < u.length; i++) d |= u[i] ^ v[i];
  return d === 0;
}
const newPassword = () => `${pick(NOUN)}-${10 + rnd(90)}-${pick(ADJ)}-${pick(NOUN)}`;
async function newUsername(db) {
  for (let i = 0; i < 30; i++) {
    const u = `${pick(ADJ)}-${pick(NOUN)}-${10 + rnd(90)}`;
    if (!(await db.prepare('SELECT 1 FROM students WHERE username=?').bind(u).first())) return u;
  }
  fail(500, 'Could not create a unique username. Try again.');
}
function dbFor(env, site) {
  const name = SITES[site || 'alevel'];
  if (!name) fail(400, 'Unknown site.');
  if (!env[name]) fail(503, 'This site\'s database is not connected yet.');
  return env[name];
}

/* ---------- throttling (teacher sign-in, per IP) ---------- */
async function throttled(db, k) {
  const r = await db.prepare('SELECT fails, until FROM throttle WHERE k=?').bind(k).first();
  return r && r.until > now();
}
async function noteFail(db, k, max, mins) {
  const r = await db.prepare('SELECT fails FROM throttle WHERE k=?').bind(k).first();
  const f = (r ? r.fails : 0) + 1;
  await db.prepare('INSERT INTO throttle(k,fails,until) VALUES(?,?,?) ON CONFLICT(k) DO UPDATE SET fails=excluded.fails, until=excluded.until')
    .bind(k, f >= max ? 0 : f, f >= max ? now() + mins * 60000 : 0).run();
}

/* ---------- auth guards ---------- */
async function student(env, body) {
  const p = await verify(env, body.token);
  if (!p || p.r !== 's') fail(401, 'Please sign in again.');
  const db = dbFor(env, p.s);
  const s = await db.prepare('SELECT username, ver, active FROM students WHERE username=?').bind(p.u).first();
  if (!s || !s.active || s.ver !== p.v) fail(401, 'Please sign in again.');
  return { db, username: s.username };
}
async function teacher(env, body) {
  const p = await verify(env, body.token);
  if (!p || p.r !== 't') fail(401, 'Please sign in again.');
  return dbFor(env, body.site);
}

/* ---------- routes ---------- */
const routes = {
  async '/login'(env, body) {
    const db = dbFor(env, body.site);
    const u = clip(body.username, 60).trim().toLowerCase(), pw = clip(body.password, 100).trim().toLowerCase();
    if (!u || !pw) fail(400, 'Enter your username and password.');
    const s = await db.prepare('SELECT * FROM students WHERE username=?').bind(u).first();
    if (!s) { await hashPw(pw); fail(401, 'Username or password not recognised.'); }
    if (s.locked_until > now()) fail(429, 'Too many tries. Wait 15 minutes, or ask your teacher.');
    if (!s.active) fail(403, 'This account has been switched off. Speak to your teacher.');
    const { hash } = await hashPw(pw, s.pw_salt);
    if (!(await sameText(env, hash, s.pw_hash))) {
      const f = s.fails + 1;
      await db.prepare('UPDATE students SET fails=?, locked_until=? WHERE username=?')
        .bind(f >= 10 ? 0 : f, f >= 10 ? now() + 15 * 60000 : 0, u).run();
      fail(401, 'Username or password not recognised.');
    }
    await db.prepare('UPDATE students SET fails=0, locked_until=0, last_login=? WHERE username=?').bind(iso(), u).run();
    const token = await sign(env, { r: 's', s: body.site || 'alevel', u, v: s.ver, exp: now() + STUDENT_DAYS * 86400000 });
    return { token, username: u, name: String(s.name).split(' ')[0] };
  },

  async '/progress'(env, body) {
    const { db, username } = await student(env, body);
    const { results } = await db.prepare('SELECT stage, MAX(score) AS best, MAX(passed) AS passed FROM course_log WHERE username=? GROUP BY stage').bind(username).all();
    const best = {}, passed = {};
    results.forEach(r => { best[r.stage] = r.best; if (r.passed) passed[r.stage] = true; });
    return { best, passed };
  },

  async '/log'(env, body) {
    const { db, username } = await student(env, body);
    const stage = parseInt(body.stage, 10);
    if (!(stage > 0 && stage < 10000)) fail(400, 'Bad stage.');
    const missed = Array.isArray(body.missed) ? body.missed.slice(0, 60).map(m => clip(m, 200)) : [];
    await db.prepare('INSERT INTO course_log(t,username,stage,stage_title,score,total,passed,seconds,missed,answer) VALUES(?,?,?,?,?,?,?,?,?,?)')
      .bind(iso(), username, stage, clip(body.stageTitle, 200), parseInt(body.score, 10) || 0, parseInt(body.total, 10) || 0,
        body.passed ? 1 : 0, Math.min(parseInt(body.seconds, 10) || 0, 86400), JSON.stringify(missed), clip(body.answer, 12000)).run();
    return { ok: true };
  },

  async '/mark'(env, body) {
    const { db, username } = await student(env, body);
    if (!body.tool) fail(400, 'Missing tool.');
    await db.prepare('INSERT INTO marks(t,username,tool,question,mark,level,well,improve,answer) VALUES(?,?,?,?,?,?,?,?,?)')
      .bind(iso(), username, clip(body.tool, 60), clip(body.question, 500), clip(body.mark, 20), clip(body.level, 60),
        clip(body.well, 1200), clip(body.improve, 1200), clip(body.answer, 12000)).run();
    return { ok: true };
  },

  async '/teacher'(env, body, req) {
    const db = env.DB_ALEVEL || env.DB_GCSE || env.DB_NEWALEVEL;
    if (!db || !env.TEACHER_PASSWORD || !env.SESSION_SECRET) fail(503, 'The tracker is not fully set up yet.');
    const k = 'teacher:' + (req.headers.get('CF-Connecting-IP') || 'x');
    if (await throttled(db, k)) fail(429, 'Too many tries. Wait 15 minutes.');
    if (!(await sameText(env, clip(body.password, 200), env.TEACHER_PASSWORD))) { await noteFail(db, k, 8, 15); fail(401, 'Wrong password.'); }
    return { token: await sign(env, { r: 't', exp: now() + TEACHER_HOURS * 3600000 }) };
  },

  async '/dashboard'(env, body) {
    const db = await teacher(env, body);
    const [st, cl, mk] = await db.batch([
      db.prepare('SELECT username, name, active, created, last_login FROM students ORDER BY name'),
      db.prepare('SELECT * FROM course_log ORDER BY id'),
      db.prepare('SELECT * FROM marks ORDER BY id DESC')
    ]);
    const roster = {}, nameOf = {};
    st.results.forEach(s => { nameOf[s.username] = s.name; if (s.active) roster[s.username] = s.name; });
    const nm = u => nameOf[u] || '(removed account)';
    return {
      roster,
      students: st.results,
      rows: cl.results.map(r => ({ t: r.t, exam: r.username, name: nm(r.username), stage: r.stage, stageTitle: r.stage_title, score: r.score, total: r.total, passed: !!r.passed, seconds: r.seconds, missed: JSON.parse(r.missed || '[]'), answer: r.answer || '' })),
      marks: mk.results.map(m => ({ t: m.t, exam: m.username, name: nm(m.username), tool: m.tool, question: m.question || '', mark: m.mark || '', level: m.level || '', well: m.well || '', improve: m.improve || '', answer: m.answer || '' }))
    };
  },

  async '/students/add'(env, body) {
    const db = await teacher(env, body);
    const names = (Array.isArray(body.names) ? body.names : []).map(n => clip(n, 80).replace(/\s+/g, ' ').trim()).filter(Boolean);
    if (!names.length) fail(400, 'Add at least one name.');
    if (names.length > 60) fail(400, 'Add up to 60 students at a time.');
    const created = [];
    for (const name of names) {
      const username = await newUsername(db), password = newPassword(), { hash, salt } = await hashPw(password);
      await db.prepare('INSERT INTO students(username,name,pw_hash,pw_salt,created) VALUES(?,?,?,?,?)').bind(username, name, hash, salt, iso()).run();
      created.push({ name, username, password });
    }
    return { created };
  },

  async '/students/reset'(env, body) {
    const db = await teacher(env, body);
    const s = await db.prepare('SELECT username, name FROM students WHERE username=?').bind(clip(body.username, 60)).first();
    if (!s) fail(404, 'Student not found.');
    const password = newPassword(), { hash, salt } = await hashPw(password);
    await db.prepare('UPDATE students SET pw_hash=?, pw_salt=?, ver=ver+1, fails=0, locked_until=0, active=1 WHERE username=?').bind(hash, salt, s.username).run();
    return { name: s.name, username: s.username, password };
  },

  async '/students/active'(env, body) {
    const db = await teacher(env, body);
    await db.prepare('UPDATE students SET active=?, ver=ver+1 WHERE username=?').bind(body.active ? 1 : 0, clip(body.username, 60)).run();
    return { ok: true };
  },

  async '/students/rename'(env, body) {
    const db = await teacher(env, body);
    const name = clip(body.name, 80).replace(/\s+/g, ' ').trim();
    if (!name) fail(400, 'Enter a name.');
    await db.prepare('UPDATE students SET name=? WHERE username=?').bind(name, clip(body.username, 60)).run();
    return { ok: true };
  },

  async '/students/remove'(env, body) {
    const db = await teacher(env, body);
    const u = clip(body.username, 60);
    await db.batch([
      db.prepare('DELETE FROM course_log WHERE username=?').bind(u),
      db.prepare('DELETE FROM marks WHERE username=?').bind(u),
      db.prepare('DELETE FROM students WHERE username=?').bind(u)
    ]);
    return { ok: true };
  },

  async '/wipe'(env, body) {
    const db = await teacher(env, body);
    if (body.confirm !== 'DELETE EVERYTHING') fail(400, 'Type DELETE EVERYTHING to confirm.');
    await db.batch(['course_log', 'marks', 'students'].map(t => db.prepare('DELETE FROM ' + t)));
    return { ok: true };
  }
};

export default {
  async fetch(req, env) {
    const h = cors(req);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: h });
    const json = (d, status = 200) => new Response(JSON.stringify(d), { status, headers: { ...h, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
    const path = new URL(req.url).pathname.replace(/\/+$/, '');
    const route = routes[path];
    if (req.method !== 'POST' || !route) return json({ error: 'Not found' }, 404);
    try {
      if (!env.SESSION_SECRET) fail(503, 'The tracker is not fully set up yet.');
      const text = await req.text();
      if (text.length > 100000) fail(413, 'Too much data.');
      let body; try { body = JSON.parse(text || '{}'); } catch (e) { fail(400, 'Bad request.'); }
      return json(await route(env, body, req));
    } catch (e) {
      if (e instanceof HttpError) return json({ error: e.message }, e.status);
      return json({ error: 'Something went wrong on the server.' }, 500);
    }
  }
};
