/* =====================================================================
   AQA A-level Business (7132) specification content, by topic.
   Taken from the AQA specification (version for exams from 2025) and
   checked against the past papers and mark schemes 2017-2026.
   Used by set work, follow-ups and the question checker so that every
   question stays on the specification and only the specification.
   ===================================================================== */
(function(){
"use strict";
const SCOPE={
"3.1.1a":"why businesses exist; the relationship between mission and objectives; why businesses set objectives",
"3.1.1b":"objectives: profit, growth, survival, cash flow, social and ethical",
"3.1.1c":"the measurement and importance of profit: revenue (turnover, sales), fixed costs, variable costs, total costs, profit",
"3.1.2a":"sole traders, private limited companies, public limited companies; unlimited and limited liability; ordinary share capital; reasons for choosing and changing business form",
"3.1.2b":"private sector and public sector organisations; non-profit organisations; social enterprises; reasons for changing form; the effects of ownership on mission and objectives",
"3.1.2c":"the role of shareholders and why they invest; market capitalisation; dividends; influences on share price and the significance of share price changes",
"3.1.3a":"how the external environment affects costs and demand: competition and market conditions",
"3.1.3b":"how the external environment affects costs and demand: incomes, interest rates, demographic factors, environmental issues and fair trade",
"3.2.1a":"the distinction between management and leadership; types of management and leadership; the effectiveness of different styles",
"3.2.1b":"leadership styles: autocratic, paternalistic, democratic, laissez-faire; influences on the style used",
"3.2.1c":"the Tannenbaum Schmidt continuum",
"3.2.2a":"scientific (data-based) decision making and intuition; the value of each",
"3.2.2b":"risk, reward, uncertainty and opportunity cost; influences on decisions: mission, objectives, ethics, the external environment including competition, resource constraints",
"3.2.2c":"decision trees: expected values and net gains; the value of decision trees",
"3.2.3a":"stakeholder needs; overlapping and conflicting needs of stakeholders; the importance of stakeholders",
"3.2.3b":"stakeholder mapping (by power and interest); how to manage it: communication and consultation",
"3.3.1":"marketing objectives: sales volume and sales value, market size, market and sales growth, market share, brand loyalty; internal and external influences on marketing objectives",
"3.3.2a":"the value of primary and secondary market research",
"3.3.2b":"qualitative and quantitative data; sampling: random, stratified, quota; the value of sampling",
"3.3.2c":"calculating market size, market and sales growth, market share",
"3.3.2d":"interpreting marketing data: correlation, confidence intervals, extrapolation",
"3.3.2e":"interpreting price elasticity of demand and its effect on revenue; influences on it; its value (students are not required to calculate it)",
"3.3.2f":"interpreting income elasticity of demand; influences on it; its value (students are not required to calculate it)",
"3.3.3a":"segmentation: demographic, geographic, income, behaviour; the value of segmentation",
"3.3.3b":"targeting: niche and mass marketing; positioning using market mapping; the value of targeting and positioning",
"3.3.4a":"the 7Ps: product, price, promotion, place, people, process, physical environment; an integrated mix; the marketing mix for consumer and business-to-business markets",
"3.3.4b":"product decisions: the product life cycle and extension strategies; new product development",
"3.3.4c":"product portfolio analysis using the Boston Matrix",
"3.3.4d":"pricing decisions and influences on them; pricing strategies including price skimming and penetration pricing",
"3.3.4e":"promotion decisions; branding; the use of social media and viral marketing",
"3.3.4f":"place (distribution) decisions including multi-channel distribution; people, process and physical environment decisions",
"3.3.4g":"digital marketing and e-commerce",
"3.4.1":"operational objectives: costs, quality, speed of response and flexibility, environmental objectives, added value; internal and external influences on them",
"3.4.2":"calculating labour productivity, unit costs (average costs), capacity and capacity utilisation; interpreting operations data",
"3.4.3a":"under-utilisation and over-utilisation of capacity and how to deal with them",
"3.4.3b":"increasing efficiency and labour productivity; choosing the optimal mix of resources: labour intensive and capital intensive",
"3.4.3c":"using technology to improve operational efficiency",
"3.4.3d":"lean production: just in time compared with just in case; benefits and difficulties",
"3.4.4a":"quality assurance and quality control",
"3.4.4b":"methods of improving quality; the benefits and difficulties of improving quality; the consequences of poor quality",
"3.4.5a":"matching supply to demand: outsourcing, temporary and part-time employees, producing to order",
"3.4.5b":"inventory control charts: lead time, re-order levels, re-order quantities, buffer stock; managing inventory",
"3.4.5c":"influences on the choice of suppliers; managing the supply chain; the value of outsourcing",
"3.5.1a":"the value of setting financial objectives: return on investment, revenue, costs, profit, cash flow",
"3.5.1b":"the distinction between cash flow and profit",
"3.5.1c":"the distinction between gross profit, operating profit and profit for the year",
"3.5.2a":"constructing and analysing budgets; the value of budgeting",
"3.5.2b":"variance analysis: adverse and favourable variances",
"3.5.2c":"constructing and analysing cash flow forecasts; analysing the timings of cash inflows and outflows, including payables and receivables",
"3.5.2d":"break-even output, contribution per unit, total contribution",
"3.5.2e":"constructing and interpreting break-even charts; margin of safety; the effects of changes in price, output and costs; the value of break-even analysis",
"3.5.2f":"analysing profitability: gross profit margin, profit from operations (operating profit) margin, profit for the year margin",
"3.5.3a":"internal and external sources of finance; the advantages and disadvantages of each for short-term and long-term uses",
"3.5.3b":"sources: debt factoring, overdrafts, retained profits, share capital, loans, venture capital, crowd funding",
"3.5.4a":"methods of improving cash flow and the difficulties of doing so",
"3.5.4b":"methods of improving profits and profitability and the difficulties of doing so",
"3.6.1a":"HR objectives: employee engagement and involvement, talent development, training, diversity, alignment of values, number, skills and location of employees; internal and external influences",
"3.6.1b":"soft and hard HR approaches",
"3.6.2":"calculating and interpreting labour turnover, labour productivity, employee costs as a percentage of turnover, labour cost per unit; using HR data for decisions",
"3.6.3a":"organisational structures: functional, product based, regional and matrix",
"3.6.3b":"authority, span of control, hierarchy, delegation, centralisation and decentralisation; influences on organisational design; the value of changing design",
"3.6.3c":"human resource flow: human resource plans, recruitment, training, redeployment, redundancy",
"3.6.4a":"the benefits of motivated and engaged employees; Taylor's approach to motivation",
"3.6.4b":"Maslow's hierarchy of needs; Herzberg's two-factor theory (hygiene factors and motivators)",
"3.6.4c":"financial methods of motivation: piece rate, commission, salary schemes, performance-related pay",
"3.6.4d":"non-financial methods of motivation: empowerment, team working, flexible working, job enrichment, job rotation; influences on the choice of method",
"3.6.5a":"employee involvement in decision making: individual and collective methods; employee representation: trade unions and works councils",
"3.6.5b":"influences on the relationship between employers and employees; managing communication; the value of good employer-employee relations",
"3.7.1a":"mission, corporate objectives, functional objectives and strategy; influences on the mission; the distinction between strategy and tactics; links between mission, corporate objectives and strategy; the impact of strategic decisions on functional decisions",
"3.7.1b":"internal and external influences on corporate objectives and decisions and on functional objectives and decisions, including pressures for short-termism and business ownership; the value of SWOT analysis",
"3.7.2a":"assessing financial performance using balance sheets and income statements",
"3.7.2b":"financial ratios: return on capital employed (profitability), current ratio (liquidity), gearing",
"3.7.2c":"efficiency ratios: payables days, receivables days, inventory turnover; the value of financial ratios when assessing performance, over time or against other businesses",
"3.7.3a":"analysing non-financial data (operations, human resources, marketing) over time or against other businesses; core competences; short-term and long-term performance; the value of different measures of performance",
"3.7.3b":"Elkington's Triple Bottom Line (profit, people, planet)",
"3.7.4a":"political change: government policy on enterprise, the role of regulators, infrastructure, the environment and international trade",
"3.7.4b":"legal change: the law on competition, the labour market and the environment",
"3.7.5a":"economic change: GDP, inflation, exchange rates; interpreting economic data",
"3.7.5b":"economic change: taxation, fiscal and monetary policy, interest rates, the move to greater openness and protectionism in trade",
"3.7.6a":"social change: demographic change, population movements (migration), consumer lifestyle and buying behaviour, the growth of online businesses",
"3.7.6b":"corporate social responsibility; the stakeholder versus shareholder concept; Carroll's corporate social responsibility pyramid; pressures for socially responsible behaviour",
"3.7.6c":"technological change and its impact on functional areas and strategy",
"3.7.7":"Porter's five forces: buyer power, supplier power, threat of new entrants, threat of substitutes, competitive rivalry; how and why they change; how they shape strategy and profits",
"3.7.8a":"investment appraisal: payback and average rate of return (calculation and interpretation)",
"3.7.8b":"investment appraisal: net present value (calculation and interpretation)",
"3.7.8c":"factors influencing investment decisions: investment criteria, non-financial factors, risk and uncertainty",
"3.8.1a":"the reasons for choosing a market and product: strategic direction",
"3.8.1b":"Ansoff's matrix: market penetration, market development, new product development, diversification; the value of the matrix",
"3.8.2a":"Porter's generic strategies: low cost, differentiation, focus",
"3.8.2b":"positioning; competitive advantage and how to maintain it",
"3.9.1a":"organic and external growth; the reasons for and problems of growth",
"3.9.1b":"retrenchment; the impact of changes in scale",
"3.9.1c":"economies and diseconomies of scale; economies of scope; synergy; overtrading",
"3.9.1d":"mergers and takeovers; ventures; franchising; vertical (backward and forward), horizontal and conglomerate integration",
"3.9.2a":"product and process innovation; the pressures for and value of innovation",
"3.9.2b":"ways of becoming innovative: kaizen, research and development, intrapreneurship, benchmarking; protecting innovation: patents and copyright",
"3.9.3a":"globalisation and emerging economies; reasons for targeting, operating in and trading with international markets",
"3.9.3b":"methods of entering international markets: exporting, licensing, alliances, direct investment; factors influencing the choice of market",
"3.9.3c":"offshoring and reshoring; managing international business: multinationals, local responsiveness versus cost reduction",
"3.9.4":"digital technology: automation, e-commerce, big data, data mining; the value of digital technology",
"3.10.1a":"the causes and types of change: internal and external, incremental and disruptive; the value of change",
"3.10.1b":"Lewin's force field analysis",
"3.10.1c":"the value of a flexible organisation: restructuring, delayering, flexible employment contracts, organic versus mechanistic structures, knowledge and information management",
"3.10.1d":"barriers to change; Kotter and Schlesinger's reasons for resistance to change and ways of overcoming it",
"3.10.2":"the importance of organisational culture; Handy's power, role, task and person cultures; influences on culture; reasons for and problems of changing culture",
"3.10.3a":"the value of strategic implementation: leadership, communication, organisational structure",
"3.10.3b":"network analysis: network diagrams, the critical path, total float; the value of network analysis",
"3.10.4a":"difficulties of strategic decisions and implementing them; planned versus emergent strategy; strategic drift; evaluating strategic performance",
"3.10.4b":"the value of strategic planning and contingency planning; crisis management"
};
/* things that are not on the 7132 specification (or were removed for exams from 2025) */
const NOT_ON_SPEC=["the acid test (quick) ratio","interest cover","debt to equity","Bowman's strategic clock","the Blake Mouton grid","Hackman and Oldham","Kaplan and Norton's balanced scorecard","Greiner's model","Bartlett and Ghoshal","Hofstede","McGregor's Theory X and Theory Y","Mayo","Vroom","McClelland","Mintzberg","the cultural web","Gantt charts","free float","PESTLE","total quality management","zero defects","ISO 9001","quality circles","batch, flow and job production","zero-based budgeting","trade credit as a source of finance","sale and leaseback as a source of finance","job enlargement","profit sharing","fringe benefits","psychographic segmentation","SMART objectives","sensitivity analysis","the experience curve","mass customisation","enterprise resource planning (ERP)"];
const NOT_RE=/acid[\s-]*test|quick ratio|interest cover|debt[\s-]*to[\s-]*equity|strategic clock|bowman|blake[\s-]*mouton|hackman|balanced scorecard|kaplan|greiner|bartlett|ghoshal|hofstede|mcgregor|theory x|theory y|\bmayo\b|hawthorne|vroom|mcclelland|mintzberg|cultural web|gantt|free float|pestle|total quality management|\btqm\b|zero defects|iso 9001|quality circle|zero[\s-]*based budget|job enlargement|psychographic|\bsmart objectives?\b|sensitivity analysis|experience curve|mass customi[sz]ation|enterprise resource planning/i;
window.SPEC7132={SCOPE,NOT_ON_SPEC,NOT_RE,scope:id=>SCOPE[id]||''};
})();
/* every AI call on the site (question writing, flashcards, feedback, resources) gets the same
   specification check added to its instructions */
(function(){
  const S=window.SPEC7132;if(!S||!window.fetch||window.__specWrapped)return;window.__specWrapped=true;
  const GUARD='\n\nSPECIFICATION CHECK (AQA A-level Business 7132). Only use content that is on the 7132 specification, in the specification\'s own terms. Do not ask about, recommend or teach any of these, which are not on the specification: '+S.NOT_ON_SPEC.join('; ')+'. If a student uses one of them, say briefly that it is not on the specification, but do not take marks off for sound business reasoning. If an older AQA question names one of them, answer it using the specification content that covers the same idea.';
  const orig=window.fetch.bind(window);
  window.fetch=function(url,opts){
    try{
      if(typeof url==='string'&&url.indexOf('nishkam-marker.alevelnishkam.workers.dev')>=0&&opts&&typeof opts.body==='string'){
        const b=JSON.parse(opts.body);
        if(b&&b.model&&Array.isArray(b.messages)){
          if(typeof b.system==='string')b.system+=GUARD;
          else if(!b.system){const m=b.messages[0];
            if(m&&typeof m.content==='string')m.content+=GUARD;
            else if(m&&Array.isArray(m.content))m.content.push({type:'text',text:GUARD.trim()});}
          opts=Object.assign({},opts,{body:JSON.stringify(b)});
        }
      }
    }catch(e){}
    return orig(url,opts);
  };
})();
