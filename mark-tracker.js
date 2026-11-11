/* =====================================================================
   Essay tools: saves the student's unfinished answer to their account
   (so they can carry on from any device) and sends marked answers to
   the teacher tracker. Uses the one sign-in from account.js.
   No student data is written in this file.
   ===================================================================== */
(function(){
"use strict";
const A=window.Acct;
if(!A){window.NTrack={init(){},mark(){}};return;}
const PAGE=location.pathname.split('/').pop().replace(/\.html$/,'')||'index';
const DKEY='draft:'+PAGE;
let bar=null,ta=null,timer=null;

/* the question the student has picked, where the page keeps it */
function question(){
  const out={};
  try{if(typeof selQ!=='undefined'&&selQ!==null)out.sel=selQ;}catch(e){}
  if(window._cq)out.cq=window._cq;
  if(window._cm)out.cm=window._cm;
  return out;
}
function snapshot(){
  if(!ta)return;
  const d=Object.assign({text:ta.value},question());
  const old=A.get(DKEY)||{};
  if(old.text===d.text&&old.sel===d.sel&&old.cq===d.cq)return;
  A.set(DKEY,d);
}
function later(){clearTimeout(timer);timer=setTimeout(snapshot,800);}

function restore(){
  const d=A.get(DKEY);
  if(!ta||!d||!d.text||ta.value.trim())return;
  ta.value=d.text;ta.dispatchEvent(new Event('input',{bubbles:true}));
  try{
    if(typeof d.sel==='number'&&d.sel>=0){
      let b=document.querySelector(`.qopt[data-i="${d.sel}"]`);
      if(!b){['yearFilter','paperFilter'].forEach(id=>{const s=document.getElementById(id);if(s&&[...s.options].some(o=>o.value==='all')){s.value='all';s.dispatchEvent(new Event('change',{bubbles:true}));}});
        b=document.querySelector(`.qopt[data-i="${d.sel}"]`);}
      if(b)b.click();
    }else if(d.cq){
      const q=document.getElementById('customQ'),m=document.getElementById('customMarks'),u=document.getElementById('useCustom');
      if(q)q.value=d.cq;if(m&&d.cm)m.value=d.cm;if(u)u.click();
    }
  }catch(e){}
  const note=document.createElement('p');
  note.style.cssText='font-size:13px;opacity:.75;margin:6px 0 0';
  note.innerHTML='Your unfinished answer has been brought back. <button type="button" style="font:inherit;background:none;border:0;padding:0;text-decoration:underline;cursor:pointer;color:inherit">Start a new one</button>';
  note.querySelector('button').onclick=()=>{ta.value='';ta.dispatchEvent(new Event('input',{bubbles:true}));A.set(DKEY,{text:''});note.remove();};
  ta.insertAdjacentElement('afterend',note);
}

window.NTrack={
  init(sel){
    ta=typeof sel==='string'?document.querySelector(sel):sel;
    const top=document.querySelector('main')||document.getElementById('mainContent');
    bar=A.bar(top||ta,{inside:!!top,text:'Sign in once on the home page and your answers and marks are saved to your account.'});
    if(ta){
      ta.addEventListener('input',later);
      document.addEventListener('click',e=>{if(e.target.closest('.qopt,#useCustom'))setTimeout(snapshot,0);});
      addEventListener('pagehide',snapshot);
      restore();
      A.ready.then(restore);
      A.onChange(k=>{if(k.includes(DKEY))restore();});
    }
  },
  mark(r){
    const row={tool:r.tool,question:String(r.question||'').slice(0,500),mark:String(r.mark==null?'':r.mark).slice(0,20),level:String(r.level||'').slice(0,60),
      well:String(r.well||'').slice(0,1200),improve:String(r.improve||'').slice(0,1200),answer:String(r.answer||'').slice(0,12000)};
    A.send('/mark',row);
    if(A.on&&!A.user){
      const panel=r.panel&&document.querySelector(r.panel);
      if(panel&&!panel.querySelector('.nk-bar'))A.bar(panel,{inside:true,alert:'Your mark is saved on this device. Sign in on the home page and it will be added to your account.'});
    }
  }
};
})();
