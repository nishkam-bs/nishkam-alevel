/* =====================================================================
   The standard for extended answers on the 7132 site.
   A real answer by a Nishkam student that AQA marked 16/16
   (June 2026, Paper 2, Q02.3). Used by the essay markers, the rewrite
   ("what you could have written"), the planning tool, the teacher
   tracker's feedback report, resource maker and set work.
   It is the model for: analysis and end points (paragraph 1),
   the argument against (paragraph 2), use of models and theories,
   concluding sentences, and the conclusion.
   The student is not named anywhere on the site.
   ===================================================================== */
(function(){
"use strict";
const question="Increased government legislation in recent years has had an impact on QWV's activities. To what extent is an increase in government legislation bad for all businesses? [16 marks]";
const p1="On one hand, increased government legislation can be bad for businesses because it increases costs. This can be illustrated by the case of the British steel industry, who faced government pressure to reduce carbon emissions and non-renewable energy use, therefore increasing their operational costs significantly, especially because the steel industry is reliant on energy use. This is because they had to invest in R&D to use energy more efficiently to comply with the legislation. As a result, these costs had to be passed on to consumers, which therefore reduces the price competitiveness of the UK steel industry. This is because demand is highly price elastic, because steel is a commodity product, meaning that customers are highly price sensitive. As a result, customers switched to cheaper foreign imported steel, therefore increasing the threat of substitutes (Porter). Therefore, they lost a huge proportion of their market share, impacting their long-term market position. This shows that an increase in government legislation can be damaging for UK businesses by increasing their costs and reducing their price competitiveness.";
const p2="However, on the other hand, government legislation is not always bad for businesses because it may create opportunities for differentiation. This can be explored by Toyota's success, who developed their 'Prius Hybrid' electric car as a result of increasing environmental legislation to reduce fuel emissions. This allowed them to achieve Porter's differentiation strategy through new product development (Ansoff's Matrix). This is because they viewed the proposed legislation as an opportunity to spot a gap in the market rather than a threat. As a result, they invested in R&D to launch the electric car, therefore creating a unique selling point, as other rivals only offered traditional car models. This competitive advantage therefore allowed them to attract sales from eco-conscious customers who prioritise environmental concerns. As a result, the legislation allowed Toyota to build their long-term brand loyalty by showing environmental concern. They were also able to charge premium prices, since eco-conscious consumers were willing to pay premium prices for a car that meets their expectations, therefore making demand price inelastic. This shows that government legislation is not always bad for businesses, as it may create opportunities to differentiate.";
const conclusion="Overall, government legislation is not always bad for all businesses, as it depends on the nature of the industry and customer behaviour. For commodity industries like the steel industry, legislation increases operational costs and reduces price competitiveness because customers prioritise price over environmental concerns. For other premium industries such as car manufacturing, the rising costs can be offset by differentiating. However, it also depends on the financial capacity of a business. Businesses can benefit from government legislation if they have the finance to invest in R&D and create new products. Therefore, government legislation is not bad for all businesses; it depends on whether the costs can be passed to consumers.";
const examiner="AQA examiner's comment: Excellent response. Balanced argument, focuses on various areas of legislation. Two examples of wider context included. Developed at length. Good final evaluation. Level 4, 16/16.";
const structure=[
  "No introduction.",
  "Paragraph 1 (the argument for): 'On one hand, [the statement] because [reason].' Then 'This can be illustrated by [a real industry and business where the statement is true].' A chain where every step is explained (therefore, as a result, this is because) until it reaches the end point the question asks about. A model is used to explain a step, not just named (price elasticity, Porter's Five Forces). It ends with 'This shows that' and the words of the question.",
  "Paragraph 2 (the argument against): 'However, on the other hand, [the statement] is not always / not true for all businesses because [reason].' Then 'This can be explored by [a completely different industry and business].' The same kind of chain, with models used to explain steps (Porter's differentiation strategy, Ansoff's Matrix, price elasticity). It ends with 'This shows that' and the words of the question.",
  "Conclusion: 'Overall, [a direct answer in the words of the question], as it depends on [the deciding condition].' Then 'For [industry 1] ... because ...' and 'For [industry 2] ...', showing why the answer changes between the two. Then 'However, it also depends on [a second condition]' with a reason. It ends 'Therefore, [the words of the question]; it depends on ...'. No new arguments: the conclusion uses the two industries already analysed.",
  "Two contrasting real industries or businesses, clearly different from each other, are what make it 'all businesses' evaluation."
];
const answer=[p1,p2,conclusion].join('\n\n');
function block(opts){
  opts=opts||{};
  const parts=[`THE STANDARD TO AIM FOR. This is a real answer that AQA marked 16/16 (June 2026, Paper 2, Q02.3). It is the teacher's standard for extended answers. Use it as the model for structure, analysis chains and end points, use of models and theories, concluding sentences ("This shows that..."), and above all the conclusion. Match its standard; do not copy its examples or industries.`];
  if(opts.full!==false)parts.push(`Question: ${question}\n\nAnswer:\n${answer}\n\n${examiner}`);
  else if(opts.p1)parts.push(`A paragraph from that answer, which is the model for analysis and reaching the end point:\n${p1}`);
  parts.push('What it does:\n'+structure.map(s=>'- '+s).join('\n'));
  return parts.join('\n\n');
}
/* used by the marker: a real AQA-marked answer to calibrate against */
function anchor(){
  return `CALIBRATION ANCHOR. The answer below was marked 16/16 (Level 4) by AQA in June 2026. An answer of this quality, structure and depth gets full marks; do not hold back full marks from an answer that matches it. Use it to judge the conclusion in particular.\nQuestion: ${question}\nAnswer:\n${answer}\n${examiner}\nWhat it does:\n${structure.map(s=>'- '+s).join('\n')}`;
}
window.NSTANDARD={question,p1,p2,conclusion,answer,examiner,structure,block,anchor};
})();
