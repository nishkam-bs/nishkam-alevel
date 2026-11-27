/* =====================================================================
   Assessment schedule: shared logic for the student schedule page and
   the teacher tracker. Needs exam-bank.js.
   Deadline: Wednesday 11:59pm, UK time.
   ===================================================================== */
(function(){
"use strict";
const EX={};(window.EXAMS||[]).forEach(e=>{EX[e.id]=e;});
const COURSES={endpoint_course_v1:[0,'Start Point/End Point course','start-end-point-course.html'],judgement_course_v1:[100,'Judgement course','judgement-course.html'],
  calc_course_v1:[200,'Calculations course','calculations-course.html'],concepts_course_v1:[300,'Concept Confusions course','concepts-course.html'],
  application_course_v1:[400,'Application course','application-course.html'],models_course_v1:[500,'Models course','models-course.html'],paper3_course_v1:[600,'Paper 3 course','paper3-course.html'],
  rt31_course_v1:[700,'Rules and Traps: Unit 3.1','rt-3-1.html'],
  rt34_course_v1:[1000,'Rules and Traps: Unit 3.4','rt-3-4.html'],
  rt33_course_v1:[900,'Rules and Traps: Unit 3.3','rt-3-3.html'],
  rt32_course_v1:[800,'Rules and Traps: Unit 3.2','rt-3-2.html']};

/* UK clocks: BST from the last Sunday in March to the last Sunday in October */
function lastSunday(y,m){const d=new Date(Date.UTC(y,m+1,0));d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d;}
function ukOffsetHours(y,m,d){const t=Date.UTC(y,m,d,12);const s=lastSunday(y,2).getTime()+3600000,e=lastSunday(y,9).getTime()+3600000;return t>=s&&t<e?1:0;}
function deadline(due){const [y,m,d]=due.split('-').map(Number);return Date.UTC(y,m-1,d,23,59,59)-ukOffsetHours(y,m-1,d)*3600000;}
function releaseOf(due){const w=(window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).find(x=>x.due===due);return w?w.release:null;}
const fmtDay=due=>new Date(due+'T12:00:00Z').toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',timeZone:'UTC'});

/* where a case study starts, when the paper has pages students might think are missing */
const PAGE={'P2-2019-02.1':'The WeRide case study starts on page 10. Question 1 has no data in the published paper, so ignore it.','P2-2019-02.2':'The WeRide case study starts on page 10. Question 1 has no data in the published paper, so ignore it.',
  'P2-2019-03.1':'Question 1 has no data in the published paper, so ignore it.','P2-2019-03.2':'Question 1 has no data in the published paper, so ignore it.','P2-2019-03.3':'Question 1 has no data in the published paper, so ignore it.'};
function labFor(marks){return marks===25?'marker.html':marks===9||marks===12?'nine_marker_lab.html':'open_essay_lab.html';}
function describe(it){
  if(it.kind==='exam'){const e=EX[it.ref];if(!e)return{title:it.ref,sub:'',link:'#'};
    return {title:`Paper ${e.paper} ${e.label}, Q${e.num} (${e.marks} marks)`,sub:e.q,needs:e.paper>1?`You need the ${e.label} Paper ${e.paper} ${e.paper===3?'case study insert':'paper (case study and appendices)'}.`+(PAGE[e.id]?' '+PAGE[e.id]:''):(/figure|table|diagram|appendix|chart/i.test(e.needs||'')?`Look at ${e.needs.replace(/^the /i,'')} in the ${e.label} Paper 1.`:''),
      link:`${e.lab}?q=${encodeURIComponent(e.id)}`,marks:e.marks,paper:e.paper};}
  if(it.kind==='choice'){const opts=String(it.ref).split(',').map(id=>EX[id]).filter(Boolean);if(!opts.length)return{title:it.ref,sub:'',link:'#'};const e=opts[0];
    return {title:`Choose one: Paper ${e.paper} ${e.label} (${e.marks} marks)`,sub:'Answer one of these. You can do more if you want.',choice:opts.map(o=>({title:`Q${o.num}`,sub:o.q,link:`${o.lab}?q=${encodeURIComponent(o.id)}`})),
      needs:e.paper>1?`You need the ${e.label} Paper ${e.paper} paper (case study and appendices).`+(PAGE[e.id]?' '+PAGE[e.id]:''):'',marks:e.marks,paper:e.paper};}
  if(it.kind==='quiz'){const mcq=/^mcq/.test(it.ref);return {title:it.title||(mcq?'20 multiple-choice questions':'10 calculations'),
    sub:mcq?'Half from past papers, half new. Click an answer and you see straight away whether it is right, with the explanation.':'Half from past papers, half new. Click an answer and the worked solution appears underneath.',link:`weekly.html?set=${encodeURIComponent(it.ref)}`};}
  if(it.kind==='drill'){const p3=/^p3/.test(it.ref);return {title:it.title||(p3?'Paper 3 case drill':'Paper 2 data drill'),
    sub:p3?'About 25 minutes: match the insert to all six questions, choose the calculations, pick the data and work them out. All clicking, no writing.':'About 15 minutes: choose the calculations, work them out, then say what the numbers mean. All clicking apart from typing your answers.',link:`drill.html?d=${encodeURIComponent(it.ref)}`};}
  if(it.kind==='conclusion'){const q=window.CBANK&&CBANK.byId[it.ref];return {title:'Conclusion Lab'+(q?': '+q.src:''),sub:(q?q.q+' ':'')+'The two paragraphs are written for you. Write the conclusion, then have a second go after the feedback.',link:'conclusion-lab.html?q='+encodeURIComponent('CL:'+it.ref)};}
  if(it.kind==='course'){const c=COURSES[it.ref]||[0,it.title||it.ref,'courses.html'];return {title:it.title||c[1],sub:'Pass every stage.',link:c[2]};}
  if(it.kind==='redraft')return {title:'Redraft: '+(it.title||'the part where you lost marks'),sub:it.detail||'',link:'redraft.html'};
  if(it.kind==='follow')return {title:'Follow-up: '+(it.title||'practice'),sub:'A short set on a topic that has come up more than once in your work.',link:'practice.html#w='+encodeURIComponent(it.ref)};
  if(it.kind==='question')return {title:`Set question (${it.marks} marks)`,sub:it.title,needs:it.detail||'',link:`${labFor(+it.marks)}?q=${encodeURIComponent(it.id)}`,marks:+it.marks};
  return {title:it.title||'Task',sub:it.detail||'',link:'#'};
}
/* ctx: {marks:{ref:firstTime}, passes:{stage:firstTime}, store:{'course:key':state}, excused:Set(schedId)} */
function status(it,ctx,now){
  now=now||Date.now();const dl=deadline(it.due);
  if(ctx.excused&&ctx.excused.has(it.id))return {s:'excused'};
  let t=null,done=false;
  if(it.kind==='exam'||it.kind==='question'||it.kind==='conclusion'){const ref=it.kind==='exam'?it.ref:it.kind==='conclusion'?'CL:'+it.ref:it.id;const x=ctx.marks&&ctx.marks[ref];if(x){done=true;t=Date.parse(x);}}
  else if(it.kind==='choice'){String(it.ref).split(',').forEach(r=>{const x=ctx.marks&&ctx.marks[r];if(x){const tt=Date.parse(x);if(!done||tt<t)t=tt;done=true;}});}
  else if(it.kind==='redraft'||it.kind==='follow'){if(it.doneAt){done=true;t=Date.parse(it.doneAt)||null;}}
  else if(it.kind==='quiz'||it.kind==='drill'){const q=(ctx.store||{})[it.kind+':'+it.ref];if(q&&q.done){done=true;t=Date.parse(q.done)||null;}}
  else if(it.kind==='course'){
    const c=COURSES[it.ref];if(c){const st=(ctx.store||{})['course:'+it.ref]||{};let latest=0,all=true;
      for(let s=1;s<=10;s++){const p=ctx.passes&&ctx.passes[c[0]+s];if(p){latest=Math.max(latest,Date.parse(p));}else if(st.passed&&st.passed[s]){/* passed before tracking: counts as on time */}else{all=false;break;}}
      if(all){done=true;t=latest||null;}}
  }
  if(done)return {s:t&&t>dl?'late':'done',t};
  return {s:now>dl?'missing':'todo'};
}
function ctxFrom(marksRows,attemptRows,store,excusedIds){
  const marks={},passes={};
  (marksRows||[]).forEach(m=>{if(m.ref&&(!marks[m.ref]||m.t<marks[m.ref]))marks[m.ref]=m.t;});
  (attemptRows||[]).forEach(a=>{if(a.passed&&(!passes[a.stage]||a.t<passes[a.stage]))passes[a.stage]=a.t;});
  return {marks,passes,store:store||{},excused:new Set(excusedIds||[])};
}
/* redrafts and follow-ups from /sched/mine (or the dashboard) as schedule items */
const RD_SKILL={endpoint:'reaching the end point',analysis:'analysis',application:'using the case',evaluation:'evaluation',judgement:'judgement',models:'using models',
  conceptual_accuracy:'getting the concept right',question_focus:'answering the question',introduction:'introduction',conclusion:'conclusion'};
function extraItems(redrafts,follows){
  const out=[];
  (redrafts||[]).filter(r=>r.due).forEach(r=>out.push({id:'rd:'+r.id,due:r.due,kind:'redraft',title:(RD_SKILL[r.skill]||'where you lost marks')+(r.tool?` (${r.tool})`:''),detail:r.problem||'',doneAt:r.submitted||null,sort:900}));
  (follows||[]).filter(f=>f.due).forEach(f=>out.push({id:'fu:'+f.id,due:String(f.due).slice(0,10),kind:'follow',ref:f.work_id,title:f.title||'',doneAt:f.status==='done'?(f.done_at||f.due):null,sort:950}));
  return out;
}
function weeks(items){const s=new Set((items||[]).map(i=>i.due));(window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).forEach(w=>s.add(w.due));return [...s].sort();}
function currentDue(items,now){now=now||Date.now();return weeks(items).find(d=>deadline(d)>=now)||weeks(items).slice(-1)[0];}
function lastDue(items,now){now=now||Date.now();return weeks(items).filter(d=>deadline(d)<now).slice(-1)[0]||null;}
function weekInfo(due){return (window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).find(w=>w.due===due)||{due,note:''};}
window.Sched={EX,COURSES,deadline,describe,status,ctxFrom,extraItems,RD_SKILL,weeks,currentDue,lastDue,weekInfo,fmtDay,labFor,releaseOf};
})();
