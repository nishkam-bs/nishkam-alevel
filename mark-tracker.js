/* =====================================================================
   Saves marking-tool results to the teacher tracker.
   Uses the same sign-in as the courses (exam number, stored in epc_auth),
   and the same tracker Worker. No student data is written in this file.
   ===================================================================== */
(function(){
"use strict";
const API='https://nishkam-tracker.alevelnishkam.workers.dev';
const HOLIDAY_CODE='Chains26';
const ON=/github\.io$/.test(location.hostname);
const QKEY='ntrack_pending';
let auth=null,waiting=null,mountEl=null;
try{auth=JSON.parse(localStorage.getItem('epc_auth')||'null');}catch(e){}

const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pending=()=>{try{return JSON.parse(localStorage.getItem(QKEY)||'[]');}catch(e){return [];}};
const setPending=q=>{try{localStorage.setItem(QKEY,JSON.stringify(q.slice(-20)));}catch(e){}};

async function api(path,body){
  const r=await fetch(API+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const d=await r.json().catch(()=>({}));
  if(!r.ok){const e=new Error(d.error||'Something went wrong');e.status=r.status;throw e;}
  return d;
}

const css=`.ntk{border:1px solid rgba(127,127,127,.28);border-radius:12px;padding:12px 14px;margin:0 0 14px;font-size:14px;line-height:1.5;background:rgba(127,127,127,.06)}
.ntk.alert{border-color:#b7791f;background:rgba(183,121,31,.12)}
.ntk form{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}
.ntk input{flex:1 1 160px;min-width:0;padding:8px 10px;border-radius:8px;border:1px solid rgba(127,127,127,.4);font:inherit;background:transparent;color:inherit}
.ntk button{padding:8px 14px;border-radius:999px;border:0;cursor:pointer;font:600 13px inherit;background:#17202e;color:#fff}
.ntk button.link{background:none;color:inherit;text-decoration:underline;padding:0 0 0 6px;font-weight:400}
.ntk .err{color:#c8463c;font-size:13px;margin-top:6px}
.ntk .ok{color:#2f8a4a}`;

function render(msg,cls,into){
  if(!ON||!mountEl)return;
  let box=document.getElementById('ntkBox');
  if(!box){box=document.createElement('div');box.id='ntkBox';box.className='ntk';box.setAttribute('aria-live','polite');mountEl.parentNode.insertBefore(box,mountEl);}
  if(into&&box.parentNode!==into)into.prepend(box);
  box.className='ntk'+(cls?' '+cls:'');
  if(auth){
    box.innerHTML=`Signed in as <b>${esc(auth.name)}</b>. Your marks are saved for your teacher.${msg?` <span class="ok">${esc(msg)}</span>`:''}<button class="link" type="button" id="ntkOut">Not you?</button>`;
    document.getElementById('ntkOut').onclick=()=>{auth=null;try{localStorage.removeItem('epc_auth');}catch(e){}render();};
  }else{
    box.innerHTML=`${msg?`<b>${esc(msg)}</b><br>`:''}Sign in with your exam number so your marks are saved for your teacher.
      <form id="ntkForm"><input id="ntkExam" inputmode="numeric" autocomplete="off" placeholder="Exam number" aria-label="Exam number"><button type="submit">Sign in</button></form><div class="err" id="ntkErr"></div>`;
    document.getElementById('ntkForm').onsubmit=async e=>{e.preventDefault();
      const btn=e.target.querySelector('button'),err=document.getElementById('ntkErr');btn.disabled=true;err.textContent='';
      try{const d=await api('/login',{exam:document.getElementById('ntkExam').value.trim(),code:HOLIDAY_CODE});
        auth={token:d.token,name:d.name,exam:d.exam};try{localStorage.setItem('epc_auth',JSON.stringify(auth));}catch(x){}
        if(waiting){const q=pending();q.push(waiting);setPending(q);waiting=null;}
        render();flush();
      }catch(x){err.textContent=x.message==='Failed to fetch'?'Could not connect. Check your internet and try again.':x.message;btn.disabled=false;}};
  }
}

async function flush(){
  if(!ON||!auth)return;
  const q=pending();if(!q.length)return;
  const left=[];let saved=0;
  for(const row of q){
    try{await api('/mark',Object.assign({},row,{token:auth.token}));saved++;}
    catch(x){
      if(x.status===401){auth=null;try{localStorage.removeItem('epc_auth');}catch(e){}left.push(row);render('Please sign in again to save your mark.','alert');}
      else if(x.status===400){/* bad data: drop it */}
      else left.push(row);
    }
  }
  setPending(left);
  if(saved&&auth)render('Mark saved.');
}

window.NTrack={
  init(sel){if(!ON)return;const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    mountEl=typeof sel==='string'?document.querySelector(sel):sel;render();flush();},
  mark(r){
    if(!ON)return;
    const row={tool:r.tool,question:String(r.question||'').slice(0,500),mark:String(r.mark==null?'':r.mark).slice(0,20),level:String(r.level||'').slice(0,60),
      well:String(r.well||'').slice(0,1200),improve:String(r.improve||'').slice(0,1200),answer:String(r.answer||'').slice(0,12000)};
    if(!auth){waiting=row;const into=r.panel?document.querySelector(r.panel):null;render('Your mark has not been saved yet.','alert',into);return;}
    const q=pending();q.push(row);setPending(q);flush();
  }
};
})();
