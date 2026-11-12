/* =====================================================================
   Teacher tracker: the assessment schedule.
   "This week" snapshot, Friday detentions, the whole season, and
   editing the schedule (add questions, courses or your own question).
   Uses TR (course-tracker.html), EXAMS, SCHED_PLAN and Sched.
   ===================================================================== */
(function(){
"use strict";
const S=window.Sched,$=(s,r)=>(r||document).querySelector(s),$$=(s,r)=>[...(r||document).querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let root=null,view={page:'week',due:null},cacheFor=null,cache=null;

const css=`
.sc-top{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px}
.sc-top .sp{flex:1}
.sc-card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px;box-shadow:var(--shadow);margin-bottom:20px}
.sc-card h2{font-size:1.3rem;margin-bottom:8px}
.sc-grid{border-collapse:collapse;font-size:.82rem;width:auto}
.sc-grid th,.sc-grid td{padding:5px 6px;border-bottom:1px solid var(--line);text-align:center;white-space:nowrap}
.sc-grid th.q{writing-mode:vertical-rl;transform:rotate(180deg);height:120px;font-weight:600;color:var(--fg);vertical-align:bottom;max-width:40px}
.sc-grid td.l,.sc-grid th.l{text-align:left}
.c{display:inline-block;min-width:26px;padding:3px 4px;border-radius:5px;font:600 .72rem "IBM Plex Mono",monospace;cursor:pointer}
.c.done{background:var(--ok-soft);color:var(--ok)}.c.late{background:var(--amber-soft);color:var(--amber)}.c.missing{background:var(--end-soft);color:var(--end)}.c.todo{color:var(--muted);background:var(--bg2)}.c.excused{color:var(--muted);text-decoration:line-through}
.det{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.det li{border-bottom:1px solid var(--line);padding-bottom:8px}
.det .why{color:var(--muted);font-size:.84rem}
.wk-list{display:grid;gap:10px}
.wk-row{border:1px solid var(--line);border-radius:12px;padding:12px 14px}
.wk-row .h{display:flex;gap:10px;flex-wrap:wrap;align-items:baseline}
.wk-row .h b{font-size:1rem}
.it{display:flex;gap:8px;align-items:flex-start;border-top:1px solid var(--line);padding:7px 0;font-size:.88rem}
.it .tx{flex:1}
.it .tx span{color:var(--muted)}
.sc-form{display:grid;gap:12px}
.sc-form label.f{font-size:.8rem;font-weight:600;color:var(--muted);display:block;margin-bottom:4px}
.sc-form .row{display:flex;gap:12px;flex-wrap:wrap}
.sc-form .row>div{flex:1 1 160px}
.sc-form input,.sc-form select,.sc-form textarea{margin:0;width:100%}
.sc-form textarea{border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--fg);padding:9px 11px;font:15px "IBM Plex Sans",sans-serif;min-height:80px}
.chk{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:.88rem}
.chk label{display:flex;gap:6px;align-items:center}
.chk input{width:auto}
.lnk{border:0;background:none;color:var(--fg);font:inherit;font-weight:600;cursor:pointer;padding:0;text-decoration:underline;text-underline-offset:2px}
.pill{font-size:.78rem;padding:2px 8px;border-radius:999px;background:var(--bg2);color:var(--muted)}
@media print{body *{visibility:hidden}#detPrint,#detPrint *{visibility:visible}#detPrint{position:absolute;left:0;top:0;width:100%}}`;

/* ---------- data ---------- */
function data(){
  const d=TR.data;if(cacheFor===d&&cache)return cache;
  const items=(d.sched||[]).slice().sort((a,b)=>a.due.localeCompare(b.due)||(a.sort||0)-(b.sort||0));
  const students=(d.accounts||[]).slice().sort((a,b)=>a.name.localeCompare(b.name)).map(a=>{
    const u=a.username;
    const ex=(d.excuses||[]).filter(x=>x.username===u).map(x=>x.sched_id);
    const ctx=S.ctxFrom((d.marks||[]).filter(m=>m.exam===u),(d.rows||[]).filter(r=>r.exam===u),(d.store||{})[u]||{},ex);
    const mine=items.filter(it=>it.who==='all'||(Array.isArray(it.who)&&it.who.includes(u)));
    const st={};mine.forEach(it=>{st[it.id]=S.status(it,ctx);});
    return {u,name:a.name,first:a.name.split(' ')[0],items:mine,st};
  });
  const cnt={};students.forEach(s=>{cnt[s.first]=(cnt[s.first]||0)+1;});students.forEach(s=>{if(cnt[s.first]>1)s.first=s.name;});
  cacheFor=d;cache={items,students};return cache;
}
const shortLabel=it=>{if(it.kind==='exam'){const e=S.EX[it.ref];return e?`P${e.paper} ${e.year==='2020N'?'N20':e.year.slice(2)} Q${e.num} (${e.marks})`:it.ref;}
  if(it.kind==='choice'){const os=String(it.ref).split(',').map(id=>S.EX[id]).filter(Boolean);if(!os.length)return it.ref;const e=os[0];return `P${e.paper} ${e.year==='2020N'?'N20':e.year.slice(2)} Q${os.map(o=>o.num).join('/')} (${e.marks})`;}
  if(it.kind==='course')return (S.COURSES[it.ref]||[0,it.title])[1].replace(' course','');return `Set Q (${it.marks})`;};
const LETTER={done:'✓',late:'L',missing:'✗',todo:'·',excused:'E'};
const TITLE={done:'Done on time',late:'Done after the deadline',missing:'Not done by the deadline',todo:'Not done yet',excused:'Excused'};

/* ---------- this week ---------- */
function renderWeek(){
  const {items,students}=data();
  if(!items.length){root.innerHTML=`<div class="sc-card"><h2>No schedule yet</h2><p class="muted">Load the plan: every past paper question from June 2017 to June 2026 (179 questions) and the seven courses, spread over 15 weeks from 1 December to 28 April in line with the school calendar. You can change anything afterwards.</p><button class="btn" id="scLoad">Load the plan</button> <span class="muted" id="scMsg"></span></div>`;
    $('#scLoad').onclick=loadPlan;return;}
  const dues=S.weeks(items).filter(d=>items.some(i=>i.due===d));
  const due=view.due&&dues.includes(view.due)?view.due:(S.currentDue(items)||dues[0]);
  const wk=items.filter(i=>i.due===due),info=S.weekInfo(due),idx=dues.indexOf(due);
  const last=S.lastDue(items);
  const now=Date.now(),passed=S.deadline(due)<now;
  /* detentions for the most recent deadline */
  const det=last?students.map(s=>({s,miss:s.items.filter(i=>i.due===last&&s.st[i.id].s==='missing')})).filter(x=>x.miss.length):[];
  /* season totals up to now */
  const tot=students.map(s=>{const past=s.items.filter(i=>S.deadline(i.due)<now);const c={done:0,late:0,missing:0,excused:0};past.forEach(i=>{c[s.st[i.id].s]=(c[s.st[i.id].s]||0)+1;});
    const weeksMissed=new Set(past.filter(i=>s.st[i.id].s==='missing').map(i=>i.due)).size;return {s,c,past:past.length,weeksMissed};});
  root.innerHTML=`
  <div class="sc-top"><button class="btn ghost" id="scPrev" ${idx<=0?'disabled':''}>Previous week</button><button class="btn ghost" id="scNext" ${idx>=dues.length-1?'disabled':''}>Next week</button>
    <button class="btn ghost" id="scNow">This week</button><span class="sp"></span><button class="btn" id="scEdit">Edit the schedule</button></div>
  <div class="stats">
    <div class="card stat"><b>${esc(S.fmtDay(due))}</b><span>deadline, 11:59pm · week ${idx+1} of ${dues.length}</span></div>
    <div class="card stat"><b>${wk.length}</b><span>pieces of work this week</span></div>
    <div class="card stat"><b>${students.filter(s=>wk.every(i=>!s.st[i.id]||['done','late','excused'].includes(s.st[i.id].s))).length} / ${students.length}</b><span>students with everything done</span></div>
    <div class="card stat"><b>${det.length}</b><span>detentions from the last deadline${last?` (${esc(S.fmtDay(last))})`:''}</span></div>
  </div>
  ${info.note?`<p class="muted" style="margin:-6px 0 14px">${esc(info.note)}</p>`:''}
  <div class="sc-card" id="detPrint"><h2>Friday detentions${last?`: deadline ${esc(S.fmtDay(last))}`:''}</h2>
    ${!last?'<p class="muted">No deadline has passed yet.</p>':det.length?`<ul class="det">${det.map(x=>`<li><b>${esc(x.s.name)}</b> <span class="why">${x.miss.length} missing</span><div class="why">${x.miss.map(i=>esc(shortLabel(i))).join(' · ')}</div></li>`).join('')}</ul>`:'<p class="muted">Everyone met the deadline.</p>'}
    ${det.length?`<div style="margin-top:12px;display:flex;gap:10px"><button class="btn ghost" id="detCopy">Copy the list</button><button class="btn ghost" id="detPrintBtn">Print</button></div>`:''}</div>
  <div class="sc-card"><h2>Week ${idx+1}: due ${esc(S.fmtDay(due))}</h2><p class="muted" style="margin:0 0 10px;font-size:.85rem">Click a cell to excuse a student (for example if they were absent), or click again to undo.${passed?'':' The deadline has not passed yet.'}</p>
    <div class="tablewrap"><table class="sc-grid"><thead><tr><th class="l">Student</th><th>Done</th>${wk.map(i=>`<th class="q" title="${esc(S.describe(i).sub||'')}">${esc(shortLabel(i))}</th>`).join('')}</tr></thead><tbody>
    ${students.map(s=>{const mine=wk.filter(i=>s.st[i.id]);const dn=mine.filter(i=>['done','late','excused'].includes(s.st[i.id].s)).length;
      return `<tr><td class="l">${esc(s.name)}</td><td>${dn}/${mine.length}</td>${wk.map(i=>{const x=s.st[i.id];if(!x)return '<td class="muted">–</td>';
        return `<td><span class="c ${x.s}" data-u="${esc(s.u)}" data-i="${esc(i.id)}" title="${TITLE[x.s]}${x.t?' · '+new Date(x.t).toLocaleString('en-GB',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):''}">${LETTER[x.s]}</span></td>`;}).join('')}</tr>`;}).join('')}
    </tbody></table></div>
    <div class="legend"><span><span class="c done">✓</span> on time</span><span><span class="c late">L</span> late</span><span><span class="c missing">✗</span> missed</span><span><span class="c todo">·</span> not yet</span><span><span class="c excused">E</span> excused</span></div></div>
  <div class="sc-card"><h2>The season so far</h2><p class="muted" style="margin:0 0 10px;font-size:.85rem">Every deadline that has passed.</p>
    <div class="tablewrap"><table><thead><tr><th class="l">Student</th><th>On time</th><th>Late</th><th>Missed</th><th>Excused</th><th>Weeks with a detention</th></tr></thead><tbody>
    ${tot.sort((a,b)=>b.c.missing-a.c.missing||a.s.name.localeCompare(b.s.name)).map(x=>`<tr><td class="l">${esc(x.s.name)}</td><td>${x.c.done}</td><td>${x.c.late}</td><td>${x.c.missing?`<span class="cell a">${x.c.missing}</span>`:0}</td><td>${x.c.excused}</td><td>${x.weeksMissed}</td></tr>`).join('')}
    </tbody></table></div></div>
  ${coursesCard(items,students)}`;
  $('#scPrev').onclick=()=>{view.due=dues[idx-1];render();};
  $('#scNext').onclick=()=>{view.due=dues[idx+1];render();};
  $('#scNow').onclick=()=>{view.due=null;render();};
  $('#scEdit').onclick=()=>{view={page:'edit',due};render();scrollTo({top:0});};
  const txt=()=>`Detentions - deadline ${S.fmtDay(last)}\n`+det.map(x=>`${x.s.name}: ${x.miss.map(shortLabel).join(', ')}`).join('\n');
  const c=$('#detCopy');if(c)c.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(txt());c.textContent='Copied';};
  const p=$('#detPrintBtn');if(p)p.onclick=()=>window.print();
  $$('.c[data-i]',root).forEach(el=>el.onclick=async()=>{
    const u=el.dataset.u,id=el.dataset.i,on=!el.classList.contains('excused');
    let note='';if(on){note=prompt('Excuse this student from this piece of work? Add a note if you like (e.g. absent).','Absent');if(note===null)return;}
    try{await TR.api('/sched/excuse',{token:TR.token,id,username:u,on,note});await TR.reload();}catch(e){alert(e.message);}
  });
}
function coursesCard(items,students){
  const cs=items.filter(i=>i.kind==='course');if(!cs.length)return '';
  return `<div class="sc-card"><h2>Courses</h2><div class="tablewrap"><table class="sc-grid"><thead><tr><th class="l">Student</th>${cs.map(i=>`<th class="q" style="height:150px" title="Due ${esc(S.fmtDay(i.due))}">${esc(shortLabel(i))} (${esc(S.fmtDay(i.due).replace(/^\w+ /,''))})</th>`).join('')}</tr></thead><tbody>
    ${students.map(s=>`<tr><td class="l">${esc(s.name)}</td>${cs.map(i=>{const x=s.st[i.id];return x?`<td><span class="c ${x.s}" title="${TITLE[x.s]}">${LETTER[x.s]}</span></td>`:'<td>–</td>';}).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}

/* ---------- editing ---------- */
function renderEdit(){
  const {items,students}=data();
  const dues=S.weeks(items);
  root.innerHTML=`
  <div class="sc-top"><button class="btn ghost" id="edBack">Back to this week</button><span class="sp"></span><button class="btn ghost" id="edPlan">Update to the latest plan</button></div>
  <p class="muted" id="edPlanMsg" style="margin:-8px 0 12px;font-size:.85rem"></p>
  <div class="sc-card"><h2>Add work</h2><div class="sc-form">
    <div class="row"><div><label class="f">Type</label><select id="adKind"><option value="exam">A past paper question</option><option value="question">My own question</option><option value="course">A course</option></select></div>
      <div><label class="f">Due (Wednesday 11:59pm)</label><select id="adDue">${dues.map(d=>`<option value="${d}" ${d===view.due?'selected':''}>${esc(S.fmtDay(d))}</option>`).join('')}<option value="other">Another date...</option></select></div></div>
    <div id="adExam"><div class="row"><div><label class="f">Paper</label><select id="adPaper"><option value="1">Paper 1</option><option value="2">Paper 2</option><option value="3">Paper 3</option></select></div>
      <div><label class="f">Series</label><select id="adYear"></select></div></div>
      <label class="f" style="margin-top:8px">Question</label><select id="adQ"></select><p class="muted" id="adQtxt" style="font-size:.85rem;margin:6px 0 0"></p></div>
    <div id="adOwn" hidden><label class="f">Question</label><textarea id="adText" placeholder="Write the question as students should see it"></textarea>
      <div class="row" style="margin-top:8px"><div><label class="f">Marks</label><select id="adMarks"><option>9</option><option>12</option><option>16</option><option>20</option><option>24</option><option>25</option></select></div>
      <div><label class="f">Note for students (optional)</label><input type="text" id="adNote" placeholder="e.g. use the case study from Tuesday's lesson"></div></div></div>
    <div id="adCourse" hidden><label class="f">Course</label><select id="adC">${Object.entries(S.COURSES).map(([k,c])=>`<option value="${k}">${esc(c[1])}</option>`).join('')}</select></div>
    <div><label class="f">Who</label><div class="chk"><label><input type="radio" name="adWho" value="all" checked> The whole class</label><label><input type="radio" name="adWho" value="some"> Some students</label></div>
      <div class="chk" id="adStudents" hidden style="margin-top:6px">${students.map(s=>`<label><input type="checkbox" value="${esc(s.u)}"> ${esc(s.name)}</label>`).join('')}</div></div>
    <div><button class="btn" id="adGo">Add to the schedule</button> <span class="muted" id="adMsg"></span></div>
  </div></div>
  <div class="sc-card"><h2>The whole schedule</h2><p class="muted" style="margin:0 0 10px;font-size:.85rem">Change a due date with the date box, or remove an item. Students see changes straight away.</p><div class="wk-list">
  ${dues.filter(d=>items.some(i=>i.due===d)).map((d,n)=>{const xs=items.filter(i=>i.due===d),w=S.weekInfo(d);
    return `<div class="wk-row"><div class="h"><b>Week ${n+1}: due ${esc(S.fmtDay(d))}</b><span class="pill">${xs.length} items</span>${w.note?`<span class="muted" style="font-size:.84rem">${esc(w.note)}</span>`:''}</div>
    ${xs.map(i=>{const ds=S.describe(i);if(ds.choice)ds.sub=ds.choice.map(o=>o.title+': '+o.sub).join('  |  ');return `<div class="it"><div class="tx">${esc(ds.title)}${i.who!=='all'?` <span>· ${Array.isArray(i.who)?i.who.length:0} students</span>`:''}<br><span>${esc(String(ds.sub||'').slice(0,160))}</span></div>
      <input type="date" value="${i.due}" data-move="${esc(i.id)}" style="width:auto;margin:0;padding:4px 6px;font-size:13px"><button class="lnk" data-del="${esc(i.id)}" style="font-weight:400">Remove</button></div>`;}).join('')}</div>`;}).join('')}
  </div></div>`;
  $('#edBack').onclick=()=>{view={page:'week',due:view.due};render();};
  $('#edPlan').onclick=async()=>{
    const planIds=new Set(SCHED_PLAN.items.map(i=>i.id));
    const fromPlan=id=>/^e-P\d-\d{4}N?-[\d.]+$/.test(id)||/^ch-/.test(id)||/^c-[a-z0-9_]+_v1$/.test(id);
    const old=items.filter(i=>fromPlan(i.id)&&!planIds.has(i.id));
    if(!confirm(`Replace the planned work with the latest plan? ${old.length} old planned items will be removed and the new plan saved. Questions and courses you added yourself are kept, and so are students' marks.`))return;
    const b=$('#edPlan');b.disabled=true;$('#edPlanMsg').textContent='Updating...';
    try{for(let k=0;k<old.length;k+=100)await TR.api('/sched/delete',{token:TR.token,ids:old.slice(k,k+100).map(i=>i.id)});
      const its=SCHED_PLAN.items.map(i=>Object.assign({who:'all'},i));for(let k=0;k<its.length;k+=100)await TR.api('/sched/save',{token:TR.token,items:its.slice(k,k+100)});
      await TR.reload();}catch(e){alert(e.message);b.disabled=false;}
  };
  const kind=()=>$('#adKind').value;
  $('#adKind').onchange=()=>{$('#adExam').hidden=kind()!=='exam';$('#adOwn').hidden=kind()!=='question';$('#adCourse').hidden=kind()!=='course';};
  $$('input[name=adWho]').forEach(r=>r.onchange=()=>{$('#adStudents').hidden=$('input[name=adWho]:checked').value!=='some';});
  const years=()=>{const p=+$('#adPaper').value;const ys=[...new Set((window.EXAMS||[]).filter(e=>e.paper===p).map(e=>e.year))];$('#adYear').innerHTML=ys.map(y=>`<option value="${y}">${y==='2020N'?'November 2020':'June '+y}</option>`).join('');qs();};
  const qs=()=>{const p=+$('#adPaper').value,y=$('#adYear').value;$('#adQ').innerHTML=(window.EXAMS||[]).filter(e=>e.paper===p&&e.year===y).map(e=>`<option value="${e.id}">Q${e.num} (${e.marks} marks)${items.some(i=>i.kind==='exam'&&i.ref===e.id)?' - already scheduled':''}</option>`).join('');qt();};
  const qt=()=>{const e=S.EX[$('#adQ').value];$('#adQtxt').textContent=e?e.q:'';};
  $('#adPaper').onchange=years;$('#adYear').onchange=qs;$('#adQ').onchange=qt;years();
  $('#adGo').onclick=async()=>{
    let due=$('#adDue').value;
    if(due==='other'){due=prompt('Due date (YYYY-MM-DD). The deadline is 11:59pm on that day.','');if(!due||!/^\d{4}-\d{2}-\d{2}$/.test(due))return;}
    const who=$('input[name=adWho]:checked').value==='all'?'all':$$('#adStudents input:checked').map(c=>c.value);
    if(who!=='all'&&!who.length){$('#adMsg').textContent='Choose at least one student.';return;}
    const it={due,who,sort:50+items.filter(i=>i.due===due).length};
    if(kind()==='exam'){it.kind='exam';it.ref=$('#adQ').value;it.id='e-'+it.ref+(items.some(i=>i.id==='e-'+it.ref)?'-'+Date.now().toString(36):'');}
    else if(kind()==='course'){it.kind='course';it.ref=$('#adC').value;it.title=S.COURSES[it.ref][1];it.id='c-'+it.ref+'-'+Date.now().toString(36);}
    else{const t=$('#adText').value.trim();if(!t){$('#adMsg').textContent='Write the question first.';return;}it.kind='question';it.title=t;it.marks=+$('#adMarks').value;it.detail=$('#adNote').value.trim();it.id='q-'+Date.now().toString(36);}
    $('#adGo').disabled=true;
    try{await TR.api('/sched/save',{token:TR.token,items:[it]});view.due=due;const tx=$('#adText');if(tx)tx.value='';await TR.reload();$('#adMsg')&&($('#adMsg').textContent='Added.');}catch(e){alert(e.message);}
    const g=$('#adGo');if(g)g.disabled=false;
  };
  $$('[data-del]',root).forEach(b=>b.onclick=async()=>{if(!confirm('Remove this from the schedule for everyone?'))return;try{await TR.api('/sched/delete',{token:TR.token,id:b.dataset.del});await TR.reload();}catch(e){alert(e.message);}});
  $$('[data-move]',root).forEach(inp=>inp.onchange=async()=>{const it=items.find(i=>i.id===inp.dataset.move);if(!it||!inp.value)return;
    try{await TR.api('/sched/save',{token:TR.token,items:[Object.assign({},it,{due:inp.value})]});await TR.reload();}catch(e){alert(e.message);}});
}
async function loadPlan(){
  const b=$('#scLoad');b.disabled=true;$('#scMsg').textContent='Loading...';
  try{const items=SCHED_PLAN.items.map(i=>Object.assign({who:'all'},i));
    for(let k=0;k<items.length;k+=100)await TR.api('/sched/save',{token:TR.token,items:items.slice(k,k+100)});
    await TR.reload();}catch(e){$('#scMsg').textContent=e.message;b.disabled=false;}
}

function render(){if(!root)return;if(view.page==='edit')renderEdit();else renderWeek();}
let cssDone=false;
window.SchedView={render(el){if(!cssDone){const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);cssDone=true;}root=el;
  if(view.page==='edit'&&$('#adText',root)&&$('#adText',root).value)return;render();}};
})();
