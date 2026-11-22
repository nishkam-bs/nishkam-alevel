/* =====================================================================
   Automatic follow-up (runs on the student's home page and schedule).

   When a gap shows up in at least two different kinds of work (for
   example a course and a marked answer), the student is given a short
   follow-up set on that topic: a refresher or recap first, then four
   questions. Rules:
     - one follow-up at a time, and the same topic not again within a week
     - every question is checked by a second, independent examiner pass;
       anything it disagrees with is dropped, and if fewer than three
       questions survive nothing is sent
     - calculation topics use the hand-checked refresher decks
   It shows on the student's schedule and in the teacher's This week view.
   No student data is kept in this file.
   ===================================================================== */
(function(){
"use strict";
const Ac=window.Acct;if(!Ac||!Ac.on)return;
const EVERY=6*3600000;        /* look at most every 6 hours on one device */
const LKEY='nk_fu_at';

function load(src){return new Promise((res,rej)=>{if(document.querySelector(`script[data-fu="${src}"]`))return res();const s=document.createElement('script');s.src=src;s.dataset.fu=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
async function libs(){
  if(!window.TAXO)await load('taxonomy.js');
  if(!window.Analysis)await load('analysis.js');
  if(!window.NSTANDARD)await load('standards.js').catch(()=>{});
  if(!window.WorkGen)await load('workgen.js');
  if(!window.REFRESH)await load('refreshers.js').catch(()=>{});
}
function due(){try{return Date.now()-(+localStorage.getItem(LKEY)||0)>EVERY;}catch(e){return true;}}
function stamp(){try{localStorage.setItem(LKEY,String(Date.now()));}catch(e){}}

/* what has gone wrong on this topic, in the student's own feedback */
function about(d,topic){
  const A=window.Analysis,lines=[];
  (d.marks||[]).forEach(m=>{String(m.improve||'').split(/\s\/\s|;|\n|(?<=\.)\s+(?=[A-Z])/).forEach(sg=>{sg=sg.trim();if(sg.length>15&&A.topicsIn(sg,2).includes(topic))lines.push(sg);});});
  return [...new Set(lines)].slice(0,4).join('\n');
}
/* calculation topics and the hand-checked refresher deck for each */
const DECK={'3.2.2c':'decision','3.3.2c':'market','3.3.2d':'correl','3.3.2e':'ped','3.3.2f':'yed','3.4.3a':'capacity','3.4.3b':'hr','3.4.5b':'inventory',
  '3.5.1c':'margins','3.5.2b':'budgets','3.5.2c':'budgets','3.5.2d':'breakeven','3.5.2e':'breakeven','3.5.2f':'margins','3.6.2':'hr',
  '3.7.2b':'ratios','3.7.2c':'efficiency','3.7.8a':'invest','3.7.8b':'invest','3.10.3b':'cpa'};
function deckFor(topic){const R=window.REFRESH,k=DECK[topic];return k&&R&&R.DECKS&&R.DECKS[k]?k:'';}

async function run(){
  if(!Ac.user||!due())return;
  stamp();
  let d;try{d=await Ac.call('/follow/mine');}catch(e){return;}
  const work=Object.fromEntries((d.work||[]).map(w=>[w.id,w]));
  if((d.follows||[]).some(f=>work[f.work_id]&&work[f.work_id].status!=='done'))return;   /* one at a time */
  await libs();
  const A=window.Analysis,W=window.WorkGen;
  const a=A.analyse(d);
  const day=86400000,now=Date.now();
  const recentTopic=t=>(d.follows||[]).some(f=>f.topic===t&&now-Date.parse(f.created)<7*day);
  const closedLately=t=>(d.follows||[]).some(f=>f.topic===t&&now-Date.parse(f.created)<21*day&&A.followState(f,work[f.work_id],a.ev).s==='closed');
  const g=A.confirmed(a).find(x=>!recentTopic(x.id)&&!closedLately(x.id));
  if(!g)return;
  const deck=deckFor(g.id),ab=about(d,g.id);
  let spec;
  try{
    spec=await W.generate({topics:[g.id],counts:deck?{mcq:2,calc:2}:{mcq:3,short:1},title:`Follow-up: ${g.title}`,
      about:`About ${Math.round(g.score*100)}% right on this topic so far, across ${A.kindsText(g)}.${ab?`\nFrom their feedback:\n${ab}`:''}`,
      note:'This is a short follow-up on one topic the student keeps losing marks on. Target the specific misunderstanding. Keep each question short.'});
    if(!deck)spec.recap=await W.recap(g.id,ab).catch(()=>'');
    spec=await W.verify(spec);
  }catch(e){return;}
  if(!spec.items||spec.items.length<3)return;   /* not enough questions passed the check: try again another time */
  spec.title=`Follow-up: ${g.title}`;spec.topic=g.id;if(deck)spec.deck=deck;
  try{
    await Ac.call('/follow/create',{topic:g.id,kinds:Object.keys(g.kinds||{}),before:g.score,deck,spec,why:`Shows up in ${A.kindsText(g)} (about ${Math.round(g.score*100)}% right).`});
    try{sessionStorage.removeItem('nk_sched');}catch(e){}
    if(Ac.refreshSchedule)Ac.refreshSchedule().catch(()=>{});
    note(g);
  }catch(e){}
}
function note(g){
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const n=document.createElement('div');
  n.setAttribute('role','status');
  n.style.cssText='position:fixed;left:50%;bottom:20px;transform:translateX(-50%);max-width:min(520px,92vw);background:#1e3a5f;color:#fff;padding:14px 18px;border-radius:10px;font:15px/1.5 "IBM Plex Sans",sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25);z-index:9999';
  n.innerHTML=`A short follow-up on <b>${e(g.title)}</b> has been added to your homework. It's on a topic that has come up more than once in your work. <a href="schedule.html" style="color:#fff">Open my schedule</a> <button type="button" style="margin-left:8px;background:none;border:1px solid rgba(255,255,255,.5);color:#fff;border-radius:6px;padding:2px 8px;cursor:pointer">OK</button>`;
  n.querySelector('button').onclick=()=>n.remove();
  document.body.appendChild(n);
}
(Ac.ready||Promise.resolve()).then(()=>setTimeout(run,4000));
})();
