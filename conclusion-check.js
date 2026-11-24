/* =====================================================================
   Conclusion Lab: teacher check of the marker.
   Open conclusion-lab.html?check=1 to run a set of conclusions written
   at known levels through the marker and compare the level it gives
   with the level expected. Nothing is saved or sent to the tracker.
   ===================================================================== */
(function(){
"use strict";
if(new URLSearchParams(location.search).get('check')!=='1')return;

/* [question id, expected lowest level, expected highest level, conclusion] */
const SET=[
['P2-2022-03.6',4,4,`Reliability isn't the most important factor for every business, because it depends on how much stock the business holds. A car maker using JIT like Toyota has almost no buffer stock, so one late delivery stops the line while fixed costs still have to be paid, which costs far more than paying a bit extra for a dependable supplier. Primark can order early and hold extra stock, so it can cope with a less reliable supplier, and low prices matter more because its customers buy on price. It also depends on strategy, as a luxury brand would put quality first. So reliability is the most important factor only for businesses that run with very little stock.`],
['P2-2022-03.6',2,3,`In conclusion, reliability is important for some businesses like Toyota because they use JIT, but for others like Primark price is more important. Therefore it depends on the business. Overall reliability is not the most important factor for all businesses.`],
['P2-2022-03.6',1,2,`Overall I think reliability is the most important factor because if suppliers are late the business cannot make products and customers will go elsewhere. Also businesses could use more suppliers so that if one is late they have another one.`],
['P2-2020N-01.4',4,4,`I would recommend Drake goes ahead. The ARR of 12% is 4 points above the 8% cost of borrowing, so even if all £20m is borrowed the hotel pays for itself and lifts ROCE above the current 4%, which is what Mary was hired to do. Gearing is high, but the loan only moves it from 62.2% to about 63.8%, and the chance of a boost from overseas growth (30%) is bigger than the chance of a stronger pound (20%). The main thing it depends on is whether Mary's figures are reliable, so the board should check her forecasts first.`],
['P2-2020N-01.4',2,3,`Overall Drake should go ahead because the ARR is 12% and the NPV is £25m which are good. However the gearing is 62.2% which is high so it is risky. It depends on the economy. I recommend they go ahead.`],
['P2-2020N-01.4',1,2,`Drake should not go ahead because there are lots of risks such as the exchange rate and high gearing and Mary might not know what she is doing as she was a marketing manager. They should stay as budget hotels.`],
['P1-2024-24',5,5,`Lean production does not always lower unit costs, but it usually does once it is up and running. The savings from holding less stock and from kaizen are real, as Toyota shows, but they rely completely on suppliers delivering on time. When the chip shortage hit, JLR had no buffer stock, so its factories stood idle while fixed costs carried on and unit costs rose. So the key factor is how reliable the supply chain is, and secondly the time period, because training and changing the culture cost money before the savings arrive. Therefore lean lowers unit costs in the long run for businesses with dependable suppliers, but "always" is wrong.`],
['P1-2024-24',2,3,`In conclusion lean production can lower unit costs because of less stock and kaizen like Toyota, but it can also raise costs if suppliers are late like JLR. So overall it does not always lower unit costs. It depends on the business.`],
['P1-2024-24',1,2,`I think lean production always lowers unit costs because it gets rid of waste and Toyota is very successful.`],
['P3-2023-05',4,5,`The loan is not too big a risk. Even with the extra £25,000 of interest, operating profit of £250,000 covers interest over five times, and the current ratio of 2.05 means Logger can pay its short-term debts. Gearing rising to 47.4% sounds a lot but it is still under 50% and demand is at a record high. The risk mainly depends on demand growing enough to use the extra capacity, as the facility will only be 40% used at first while fixed costs double. Since demand has grown for years without promotion, I think the risk is acceptable, although it is more than Bodhi would usually take.`],
['P3-2023-05',2,3,`Overall I think Logger Boards should build the new facility because demand is growing and they need more space. The loan is risky because gearing goes up to 47.4% but they can afford it.`],
['P3-2023-05',1,2,`The loan is too big a risk because Bodhi is risk averse and the business could go bankrupt if they cannot pay it back.`],
['P3-2020N-06',4,5,`A commitment to CSR doesn't cut profit for every business; what decides it is whether customers will pay for it. A budget supermarket's shoppers buy on price, so CSR is just a cost it can't pass on and profit falls. Lush's customers buy partly because of its values, so CSR lets it charge more and protects profit. Sunport shows both sides: its 9.4% margin against rivals' 12% suggests CSR has cost it profit, but European food shoppers rank recyclable packaging second only to taste, so dropping it could lose sales there. So CSR lowers profit for businesses that compete on price, but not for those whose customers value it.`],
['P3-2020N-06',2,3,`In conclusion CSR can decrease profit because of higher costs like Sunport having a lower margin than rivals, but it can also increase profit like Lush. So it depends on the business. Overall it does not decrease profit for all businesses.`],
['P3-2020N-06',1,2,`Overall CSR decreases profit because it costs a lot of money and shareholders want profit, so Elaine is right to cut it.`]
];

function panel(){
  const main=document.querySelector('main');
  const box=document.createElement('div');box.className='card mt';box.id='calBox';
  box.innerHTML=`<h3>Check the marker</h3><p class="tiny">Runs ${SET.length} conclusions written at known levels through the marker. Nothing is saved. It takes a few minutes.</p>
    <div class="row mt"><button class="btn btn-p" id="calRun" type="button">Run the check</button><span class="tiny" id="calSum"></span></div><div id="calOut" class="mt"></div>`;
  main.prepend(box);
  document.getElementById('calRun').onclick=run;
}

async function run(){
  const btn=document.getElementById('calRun'),out=document.getElementById('calOut'),sum=document.getElementById('calSum');
  btn.disabled=true;out.innerHTML='<div class="calrow"><b>Question</b><b>Expected</b><b>Given</b><b>Result</b><b>Marker summary</b></div>';
  let inRange=0,close=0,done=0;
  for(const [id,lo,hi,text] of SET){
    const q=CBANK.byId[id],max=CBANK.TYPES[q.type].levels;
    const row=document.createElement('div');row.className='calrow';
    row.innerHTML=`<span>${esc(id)}</span><span>${lo===hi?lo:lo+'–'+hi} of ${max}</span><span>…</span><span></span><span class="tiny"></span>`;
    out.appendChild(row);
    try{
      state={q,attempt:1,first:null,second:null};
      let fb=await NMark.markJSON({model:MODEL,max_tokens:2500,temperature:0,system:systemPrompt(q),messages:[{role:'user',content:[{type:'text',text:userText(text,false)}]}]});
      fb=clean(fb,max);
      const ok=fb.level>=lo&&fb.level<=hi,near=!ok&&(fb.level===lo-1||fb.level===hi+1);
      if(ok)inRange++;else if(near)close++;
      row.children[2].textContent=fb.level;
      row.children[3].innerHTML=ok?'<b style="color:var(--green)">As expected</b>':near?'<b style="color:#946200">One level out</b>':'<b style="color:var(--red)">Wrong</b>';
      row.children[4].textContent=fb.summary||'';
    }catch(e){row.children[2].textContent='error';row.children[4].textContent=e.message;}
    done++;sum.textContent=`${done} of ${SET.length} done: ${inRange} as expected, ${close} one level out.`;
  }
  state=null;btn.disabled=false;
}
panel();
})();
