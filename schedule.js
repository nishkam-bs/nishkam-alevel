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
  application_course_v1:[400,'Application course','application-course.html'],models_course_v1:[500,'Models course','models-course.html'],paper3_course_v1:[600,'Paper 3 course','paper3-course.html']};

/* UK clocks: BST from the last Sunday in March to the last Sunday in October */
function lastSunday(y,m){const d=new Date(Date.UTC(y,m+1,0));d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d;}
function ukOffsetHours(y,m,d){const t=Date.UTC(y,m,d,12);const s=lastSunday(y,2).getTime()+3600000,e=lastSunday(y,9).getTime()+3600000;return t>=s&&t<e?1:0;}
function deadline(due){const [y,m,d]=due.split('-').map(Number);return Date.UTC(y,m-1,d,23,59,59)-ukOffsetHours(y,m-1,d)*3600000;}
function releaseOf(due){const w=(window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).find(x=>x.due===due);return w?w.release:null;}
const fmtDay=due=>new Date(due+'T12:00:00Z').toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',timeZone:'UTC'});

function labFor(marks){return marks===25?'marker.html':marks===9||marks===12?'nine_marker_lab.html':'open_essay_lab.html';}
function describe(it){
  if(it.kind==='exam'){const e=EX[it.ref];if(!e)return{title:it.ref,sub:'',link:'#'};
    return {title:`Paper ${e.paper} ${e.label}, Q${e.num} (${e.marks} marks)`,sub:e.q,needs:e.paper>1?`You need the ${e.label} Paper ${e.paper} ${e.paper===3?'case study insert':'paper (case study and appendices)'}.`:(/figure|table|diagram|appendix|chart/i.test(e.needs||'')?`Look at ${e.needs.replace(/^the /i,'')} in the ${e.label} Paper 1.`:''),
      link:`${e.lab}?q=${encodeURIComponent(e.id)}`,marks:e.marks,paper:e.paper};}
  if(it.kind==='course'){const c=COURSES[it.ref]||[0,it.title||it.ref,'courses.html'];return {title:it.title||c[1],sub:'Pass every stage.',link:c[2]};}
  if(it.kind==='question')return {title:`Set question (${it.marks} marks)`,sub:it.title,needs:it.detail||'',link:`${labFor(+it.marks)}?q=${encodeURIComponent(it.id)}`,marks:+it.marks};
  return {title:it.title||'Task',sub:it.detail||'',link:'#'};
}
/* ctx: {marks:{ref:firstTime}, passes:{stage:firstTime}, store:{'course:key':state}, excused:Set(schedId)} */
function status(it,ctx,now){
  now=now||Date.now();const dl=deadline(it.due);
  if(ctx.excused&&ctx.excused.has(it.id))return {s:'excused'};
  let t=null,done=false;
  if(it.kind==='exam'||it.kind==='question'){const ref=it.kind==='exam'?it.ref:it.id;const x=ctx.marks&&ctx.marks[ref];if(x){done=true;t=Date.parse(x);}}
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
function weeks(items){const s=new Set((items||[]).map(i=>i.due));(window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).forEach(w=>s.add(w.due));return [...s].sort();}
function currentDue(items,now){now=now||Date.now();return weeks(items).find(d=>deadline(d)>=now)||weeks(items).slice(-1)[0];}
function lastDue(items,now){now=now||Date.now();return weeks(items).filter(d=>deadline(d)<now).slice(-1)[0]||null;}
function weekInfo(due){return (window.SCHED_PLAN&&SCHED_PLAN.weeks||[]).find(w=>w.due===due)||{due,note:''};}
window.Sched={EX,COURSES,deadline,describe,status,ctxFrom,weeks,currentDue,lastDue,weekInfo,fmtDay,labFor,releaseOf};
})();
