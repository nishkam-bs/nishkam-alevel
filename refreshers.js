/* =====================================================================
   Refreshers: short card decks on one calculation area each, used before
   set work, after marking and in the weekly calculations quiz. Written and
   checked by hand against the 7132 formulas used on this site; every worked
   figure has been checked.
   No student data in this file. Used by refresher.html, practice.html and
   the home page (My marks).
   ===================================================================== */
(function(){
"use strict";
const F=s=>`<div class="rf-formula">${s}</div>`;

const DECKS={
ped:{short:'price elasticity',title:'Price elasticity of demand',mins:4,match:/price elasticity|\bPED\b/i,
 cards:[
  {h:'The rule',html:`${F('PED = % change in quantity demanded ÷ % change in price')}
   <p>Quantity goes on top. Price goes on the bottom.</p>
   <p>Each % change is worked out the usual way: (new − old) ÷ old × 100.</p>
   <p>PED is usually negative, because when the price goes up, people buy less. To judge it, ignore the minus sign:</p>
   <ul><li>more than 1: <b>price elastic</b>. Quantity changes by a bigger % than price.</li><li>less than 1: <b>price inelastic</b>. Quantity changes by a smaller % than price.</li></ul>`},
  {h:'Worked example: calculating PED',type:'steps',intro:'A gym raises its monthly price from £40 to £44. Members fall from 2,000 to 1,700.',
   steps:['% change in price = (44 − 40) ÷ 40 × 100 = +10%','% change in quantity demanded = (1,700 − 2,000) ÷ 2,000 × 100 = −15%','PED = −15 ÷ +10 = −1.5','Ignoring the sign, 1.5 is more than 1, so demand is price elastic.']},
  {h:'Using PED to find the new sales',html:`${F('% change in quantity = PED × % change in price')}
   <p>When the price changes, the number sold changes too. Work out the new quantity first, then the revenue:</p>
   <ol><li>% change in quantity = PED × % change in price</li><li>New quantity</li><li>New price</li><li>Old revenue and new revenue (price × quantity)</li><li>Change in revenue = new − old</li></ol>`},
  {h:'Worked example: what happens to revenue',type:'steps',intro:'A coffee shop sells 8,000 drinks a month at £3.00. PED is −0.5. It raises the price by 10%.',
   steps:['% change in quantity = −0.5 × +10% = −5%','New quantity = 8,000 × 0.95 = 7,600 drinks','New price = £3.00 × 1.10 = £3.30','Old revenue = 8,000 × £3.00 = £24,000. New revenue = 7,600 × £3.30 = £25,080','Revenue rises by £1,080. Demand is price inelastic, so the price rise increases revenue.']},
  {h:'Common mistakes',html:`<ul><li><b>Keeping the old quantity.</b> If the price changes, the quantity changes too. Work out the new quantity before you work out revenue.</li>
   <li><b>Dividing the wrong way.</b> Price ÷ quantity gives the wrong answer (−0.67 instead of −1.5 in the gym example).</li>
   <li><b>Giving a % when the question asks for £.</b> "Calculate the change in revenue" wants a figure in pounds.</li>
   <li><b>Using the new figure as the base.</b> Always divide by the old figure.</li></ul>`}
 ],
 check:{q:'The price of a product falls by 5%. PED is −2. What happens to the quantity demanded?',options:['It rises by 10%','It falls by 10%','It rises by 2.5%','It falls by 2.5%'],answer:0,
  why:'% change in quantity = PED × % change in price = −2 × −5% = +10%. A price cut means people buy more.'}},

yed:{short:'income elasticity',title:'Income elasticity of demand',mins:3,match:/income elasticity|\bYED\b/i,
 cards:[
  {h:'The rule',html:`${F('YED = % change in quantity demanded ÷ % change in income')}
   <p>The sign matters for YED:</p>
   <ul><li><b>Positive</b>: a normal good. As incomes rise, people buy more.</li><li><b>Above +1</b>: demand rises faster than income, as it often does for luxuries.</li><li><b>Negative</b>: an inferior good. As incomes rise, people buy less, for example value ranges.</li></ul>
   <p>YED is just a number. It doesn't have a % sign.</p>`},
  {h:'Worked example: calculating YED',type:'steps',intro:'Incomes rise by 4%. A restaurant\'s bookings rise from 5,000 to 5,300.',
   steps:['% change in quantity demanded = (5,300 − 5,000) ÷ 5,000 × 100 = +6%','YED = +6 ÷ +4 = +1.5','It is positive and above 1, so bookings rise faster than income.']},
  {h:'Forecasting sales and revenue',type:'steps',intro:'A value-range biscuit sells 200,000 packs a year at £1.20. YED is −0.5. Incomes are forecast to rise by 6%. The price stays the same.',
   steps:['% change in quantity = YED × % change in income = −0.5 × +6% = −3%','New quantity = 200,000 × 0.97 = 194,000 packs','Old revenue = 200,000 × £1.20 = £240,000. New revenue = 194,000 × £1.20 = £232,800','Revenue falls by £7,200. A negative YED means a rise in income leads to fewer sales.']},
  {h:'Common mistakes',html:`<ul><li><b>Losing the sign.</b> A negative YED with rising incomes means sales fall. Say so in your answer: "falls by £7,200".</li>
   <li><b>Stopping too early.</b> The % change in quantity is not YED. Divide it by the % change in income.</li>
   <li><b>Applying the change to the wrong figure.</b> Use the latest sales figure the question gives you as the starting point.</li></ul>`}
 ],
 check:{q:'YED for a product is +2. Incomes fall by 3%. What happens to the quantity demanded?',options:['It falls by 6%','It rises by 6%','It falls by 1.5%','It rises by 1.5%'],answer:0,
  why:'% change in quantity = YED × % change in income = +2 × −3% = −6%.'}},


pts:{short:'percentage change',title:'Percentage points and percentage change',mins:2,match:/percentage point|change in (the )?market share|% change in market share/i,
 cards:[
  {h:'The rule',html:`<p>When you compare two percentages, there are two different answers:</p>
   ${F('Change in percentage points = new % − old %')}
   ${F('Percentage change = (new % − old %) ÷ old % × 100')}
   <p>Read the question to see which one it wants. "Calculate the percentage change" wants the second.</p>`},
  {h:'Worked example',type:'steps',intro:'A business\'s market share falls from 20% to 18%.',
   steps:['Change in percentage points = 18 − 20 = −2 percentage points','Percentage change = (18 − 20) ÷ 20 × 100 = −10%','So "market share fell by 2 percentage points" and "market share fell by 10%" describe the same change.']},
  {h:'Common mistakes',html:`<ul><li><b>Giving the points as a %.</b> Writing −2% when the question asks for the percentage change.</li>
   <li><b>Rounding first.</b> If a share is 13.75%, use 13.75 in the next step, not 14. Rounding early changes the answer (−6.67% instead of −8.33%).</li>
   <li><b>Turning shares into decimals halfway through.</b> Keep them as percentages all the way through.</li></ul>`}
 ],
 check:{q:'Market share rises from 12% to 15%. What is the percentage change in market share?',options:['+25%','+3%','+20%','+125%'],answer:0,
  why:'(15 − 12) ÷ 12 × 100 = +25%. The rise of 3 is in percentage points.'}},

index:{short:'index numbers',title:'Index numbers',mins:3,match:/index/i,
 cards:[
  {h:'The rule',html:`${F('Index number = figure for the year ÷ figure for the base year × 100')}
   <p>The base year is always 100. An index of 115 means 15% higher than the base year. It does not mean 15% higher than last year.</p>`},
  {h:'Worked example: making index numbers',type:'steps',intro:'Sales were £400,000 in 2022 (the base year), £430,000 in 2023 and £460,000 in 2024.',
   steps:['2022: 400,000 ÷ 400,000 × 100 = 100','2023: 430,000 ÷ 400,000 × 100 = 107.5','2024: 460,000 ÷ 400,000 × 100 = 115']},
  {h:'Using index numbers',type:'steps',intro:'Two things questions often ask:',
   steps:['Change between two years: (115 − 107.5) ÷ 107.5 × 100 = 6.98%. It is not 7.5%, because the base for this change is 2023, not 2022.','Working back: if sales in 2026 were £5m and the index was 125, base-year sales = £5m ÷ 125 × 100 = £4m.']},
  {h:'Common mistakes',html:`<ul><li><b>Treating index points as a %.</b> 126 − 112 = 14 points, but the % change is 14 ÷ 112 × 100 = 12.5%.</li>
   <li><b>Working back the wrong way.</b> Divide by the index number and multiply by 100. Don't divide by 100 or by the sales figure.</li></ul>`}
 ],
 check:{q:'A sales index rises from 120 to 132. What is the percentage change in sales?',options:['10%','12%','132%','1.1%'],answer:0,
  why:'(132 − 120) ÷ 120 × 100 = 10%. The 12 is the change in index points.'}},

market:{short:'market share calculations',title:'Market share, growth and size',mins:4,match:/market share|market growth|market size|segment|share target/i,
 cards:[
  {h:'The rules',html:`${F('Market share (%) = sales of the business ÷ total sales in the market × 100')}
   ${F('Market growth (%) = change in the size of the market ÷ original size of the market × 100')}
   ${F('Market size = sales of the business ÷ market share (as a decimal)')}
   <p>For growth, always divide by the <b>original</b> size, not the new one.</p>
   <p>Example: a business sells £30m and has a 12% share. Market size = £30m ÷ 0.12 = £250m.</p>`},
  {h:'A segment of a segment',type:'steps',intro:'A £3bn market. 40% of it is premium products. Within premium, 25% is organic.',
   steps:['Premium segment = £3bn × 0.40 = £1.2bn','Organic premium = £1.2bn × 0.25 = £300m','Taking 25% of the whole market (£750m) would be wrong. The 25% is a share of the premium segment.']},
  {h:'Hitting a share target in a growing market',type:'steps',intro:'A business sells £66m in a £500m market. The market will grow by 10%. The target is a 15% share next year.',
   steps:['Next year\'s market = £500m × 1.10 = £550m','Target sales = 15% × £550m = £82.5m','Increase needed = £82.5m − £66m = £16.5m','% increase = £16.5m ÷ £66m × 100 = 25%']},
  {h:'Common mistakes',html:`<ul><li><b>Ignoring market growth.</b> In the example above, using this year's market gives a target of £75m, which is too low.</li>
   <li><b>Comparing shares instead of sales.</b> Work out the target <b>sales</b>, then compare them with the current sales.</li>
   <li><b>Units.</b> A segment can't be bigger than the market it belongs to. Check whether your answer is in millions or billions.</li></ul>`}
 ],
 check:{q:'A market is worth £200m and will grow by 5%. A business wants a 10% share next year. What sales does it need?',options:['£21m','£20m','£10.5m','£30m'],answer:0,
  why:'Next year\'s market = £200m × 1.05 = £210m. 10% of £210m = £21m.'}},


sales:{short:'sales figures',title:'Sales volume and sales value',mins:3,match:/sales volume|sales value|average (selling )?price|per shop|by region/i,
 cards:[
  {h:'The rules',html:`<p><b>Sales volume</b> is the number of units sold. <b>Sales value</b> (revenue) is in pounds.</p>
   ${F('Sales value = selling price per unit × number of units sold')}
   ${F('Average selling price = sales value ÷ sales volume')}
   <p>Check which one the question is asking about before you start.</p>`},
  {h:'Worked example',type:'steps',intro:'In 2025 a business sold 10,000 units for £150,000. In 2026 it sold 11,000 units for £176,000.',
   steps:['% change in sales value = (176,000 − 150,000) ÷ 150,000 × 100 = 17.3%','Average price 2025 = £150,000 ÷ 10,000 = £15.00. 2026 = £176,000 ÷ 11,000 = £16.00','% change in average price = (16 − 15) ÷ 15 × 100 = 6.7%','Volume rose by 10%, so most of the growth in value came from selling more units.']},
  {h:'Common mistakes',html:`<ul><li><b>Using volume when the question asks about value.</b></li>
   <li><b>Rounding in the middle.</b> Keep the full figure (for example £19.86, not £19.90) until the final answer.</li>
   <li><b>Adding up totals.</b> Check a total before you use it in the next step.</li></ul>`}
 ],
 check:{q:'Sales value is £90,000 and sales volume is 6,000 units. What is the average selling price?',options:['£15','£1.50','£0.07','£150'],answer:0,
  why:'£90,000 ÷ 6,000 = £15 per unit.'}},

revpct:{short:'reverse percentages',title:'Reverse percentages',mins:2,match:/reverse percentage|original (price|value|figure)|before the (rise|increase|fall|cut)/i,
 cards:[
  {h:'The rule',html:`<p>If you know the figure <b>after</b> a % change and need the figure before it, divide. Don't subtract the percentage.</p>
   ${F('After a rise of x%: original = new ÷ (1 + x/100)')}
   ${F('After a fall of x%: original = new ÷ (1 − x/100)')}`},
  {h:'Worked example',type:'steps',intro:'After a 20% price rise, a product costs £60. What did it cost before?',
   steps:['A 20% rise means the new price is 120% of the old price, so new = old × 1.20','Original = £60 ÷ 1.20 = £50','Check: £50 × 1.20 = £60']},
  {h:'Common mistakes',html:`<ul><li><b>Taking the % off the new figure.</b> 20% of £60 is £12, and £60 − £12 = £48, which is wrong. The 20% was of the old price, not the new one.</li>
   <li><b>Using the wrong direction.</b> After a fall, divide by less than 1 (for example 0.75 after a 25% fall), so the original is bigger.</li></ul>`}
 ],
 check:{q:'After a 25% fall, sales are £90,000. What were sales before the fall?',options:['£120,000','£112,500','£67,500','£115,000'],answer:0,
  why:'Original = £90,000 ÷ 0.75 = £120,000. Check: £120,000 × 0.75 = £90,000.'}},

breakeven:{short:'break-even',title:'Break-even and contribution',mins:4,match:/break-?even|contribution|margin of safety|target profit/i,
 cards:[
  {h:'The rules',html:`${F('Contribution per unit = selling price − variable cost per unit')}
   ${F('Break-even output = fixed costs ÷ contribution per unit')}
   ${F('Margin of safety = actual (or planned) output − break-even output')}
   ${F('Profit = total contribution − fixed costs')}`},
  {h:'Worked example',type:'steps',intro:'Selling price £25, variable cost £15 per unit, fixed costs £40,000. The business sells 5,000 units.',
   steps:['Contribution per unit = £25 − £15 = £10','Break-even output = £40,000 ÷ £10 = 4,000 units','Margin of safety = 5,000 − 4,000 = 1,000 units','Profit = (5,000 × £10) − £40,000 = £10,000','For a target profit of £20,000: units needed = (£40,000 + £20,000) ÷ £10 = 6,000 units']},
  {h:'Common mistakes',html:`<ul><li><b>Dividing by the selling price</b> instead of the contribution per unit.</li>
   <li><b>Margin of safety in the wrong units.</b> Give it in units unless the question asks for £.</li>
   <li><b>Rounding break-even down.</b> If the answer is 4,285.7 units, the business needs 4,286 to cover its costs.</li></ul>`}
 ],
 check:{q:'Fixed costs are £30,000, the selling price is £12 and the variable cost is £7 per unit. What is break-even output?',options:['6,000 units','2,500 units','4,286 units','1,500 units'],answer:0,
  why:'Contribution per unit = £12 − £7 = £5. Break-even = £30,000 ÷ £5 = 6,000 units.'}},

margins:{short:'profit margins',title:'Profit and profit margins',mins:3,match:/profit margin|gross profit|operating profit|\bGPM\b|\bOPM\b|profit for the year/i,
 cards:[
  {h:'The rules',html:`${F('Gross profit = revenue − cost of sales')}
   ${F('Operating profit = gross profit − operating expenses')}
   ${F('Gross profit margin (%) = gross profit ÷ revenue × 100')}
   ${F('Operating profit margin (%) = operating profit ÷ revenue × 100')}
   ${F('Profit for the year = operating profit − finance costs − tax')}`},
  {h:'Worked example',type:'steps',intro:'Revenue £500,000, cost of sales £300,000, operating expenses £120,000.',
   steps:['Gross profit = £500,000 − £300,000 = £200,000','Gross profit margin = £200,000 ÷ £500,000 × 100 = 40%','Operating profit = £200,000 − £120,000 = £80,000','Operating profit margin = £80,000 ÷ £500,000 × 100 = 16%']},
  {h:'Common mistakes',html:`<ul><li><b>Dividing by costs.</b> Margins always divide by revenue.</li>
   <li><b>Mixing up the profits.</b> Operating profit margin uses operating profit, not gross profit.</li>
   <li><b>Margin against amount.</b> A higher profit doesn't always mean a higher margin. Check both.</li></ul>`}
 ],
 check:{q:'Revenue is £80,000 and operating profit is £12,000. What is the operating profit margin?',options:['15%','6.7%','85%','12%'],answer:0,
  why:'£12,000 ÷ £80,000 × 100 = 15%.'}},

ratios:{short:'financial ratios',title:'Current ratio, gearing and ROCE',mins:4,match:/current ratio|gearing|\bROCE\b|return on capital|capital employed|liquidity/i,
 cards:[
  {h:'The rules',html:`${F('Current ratio = current assets ÷ current liabilities (written as x : 1)')}
   ${F('Capital employed = total equity + non-current liabilities')}
   ${F('Gearing (%) = non-current liabilities ÷ capital employed × 100')}
   ${F('ROCE (%) = operating profit ÷ capital employed × 100')}`},
  {h:'Worked example',type:'steps',intro:'Current assets £150,000, current liabilities £100,000. Total equity £600,000, non-current liabilities £200,000. Operating profit £96,000.',
   steps:['Current ratio = £150,000 ÷ £100,000 = 1.5 : 1','Capital employed = £600,000 + £200,000 = £800,000','Gearing = £200,000 ÷ £800,000 × 100 = 25%','ROCE = £96,000 ÷ £800,000 × 100 = 12%']},
  {h:'Common mistakes',html:`<ul><li><b>Gearing over equity.</b> £200,000 ÷ £600,000 = 33.3% is wrong. Divide by capital employed.</li>
   <li><b>A new loan</b> raises non-current liabilities <b>and</b> capital employed. Change both.</li>
   <li><b>ROCE uses operating profit</b>, not gross profit or profit for the year.</li>
   <li>Write the current ratio as a ratio, for example 1.5 : 1.</li></ul>`}
 ],
 check:{q:'Total equity is £300,000, non-current liabilities are £100,000 and operating profit is £60,000. What is ROCE?',options:['15%','20%','60%','25%'],answer:0,
  why:'Capital employed = £300,000 + £100,000 = £400,000. ROCE = £60,000 ÷ £400,000 × 100 = 15%.'}},

invest:{short:'investment appraisal',title:'Payback, ARR and NPV',mins:5,match:/payback|\bARR\b|average rate of return|\bNPV\b|net present value|investment appraisal|discount factor/i,
 cards:[
  {h:'The rules',html:`${F('Payback = years before the cost is recovered + (amount still needed ÷ cash flow in the next year)')}
   ${F('Average annual profit = (total net returns − initial cost) ÷ number of years')}
   ${F('ARR (%) = average annual profit ÷ initial investment × 100')}
   ${F('NPV = total of (net cash flow × discount factor) − initial cost')}`},
  {h:'Worked example: payback and ARR',type:'steps',intro:'A project costs £100,000. Net cash flows: year 1 £30,000, year 2 £40,000, year 3 £50,000, year 4 £20,000.',
   steps:['After year 2, £70,000 is back. £30,000 is still needed.','£30,000 ÷ £50,000 = 0.6 of year 3. 0.6 × 12 = 7.2 months','Payback = 2 years and about 7 months','Total returns £140,000 − cost £100,000 = £40,000 profit. ÷ 4 years = £10,000 a year','ARR = £10,000 ÷ £100,000 × 100 = 10%']},
  {h:'Worked example: NPV',type:'steps',intro:'Same project, with discount factors at 10%: year 1 0.909, year 2 0.826, year 3 0.751, year 4 0.683.',
   steps:['Year 1: £30,000 × 0.909 = £27,270','Year 2: £40,000 × 0.826 = £33,040','Year 3: £50,000 × 0.751 = £37,550','Year 4: £20,000 × 0.683 = £13,660','Total = £111,520. NPV = £111,520 − £100,000 = £11,520. It is positive, so the project is worth more than it costs at 10%.']},
  {h:'Common mistakes',html:`<ul><li><b>Payback in decimals.</b> Turn the part year into months: 0.6 of a year is about 7 months.</li>
   <li><b>ARR without taking the cost off.</b> Average annual profit uses total returns minus the initial cost.</li>
   <li><b>Forgetting the initial cost in NPV.</b> Take it off the total of the discounted cash flows.</li></ul>`}
 ],
 check:{q:'A project costs £50,000 and brings in £20,000 a year for three years. What is the payback period?',options:['2 years 6 months','2 years 5 months','3 years','2 years 4 months'],answer:0,
  why:'After 2 years, £40,000 is back and £10,000 is still needed. £10,000 ÷ £20,000 = 0.5 of a year = 6 months.'}},

budgets:{short:'budgets',title:'Budgets, variances and cash flow',mins:3,match:/variance|budget|cash flow|closing balance|opening balance|favourable|adverse/i,
 cards:[
  {h:'The rules',html:`${F('Variance = actual figure − budgeted figure')}
   <p>Then decide whether it is <b>favourable</b> (better for profit than planned) or <b>adverse</b> (worse for profit):</p>
   <ul><li>Revenue or profit above budget: favourable. Below budget: adverse.</li><li>Costs below budget: favourable. Above budget: adverse.</li></ul>
   ${F('Net cash flow = cash inflows − cash outflows')}
   ${F('Closing balance = opening balance + net cash flow')}`},
  {h:'Worked example',type:'steps',intro:'Budgeted revenue £50,000, actual £46,000. Budgeted costs £30,000, actual £27,000.',
   steps:['Revenue variance = £46,000 − £50,000 = −£4,000. Revenue is below budget, so £4,000 adverse.','Cost variance = £27,000 − £30,000 = −£3,000. Costs are below budget, so £3,000 favourable.','Profit was £20,000 budgeted and £19,000 actual: £1,000 adverse overall.']},
  {h:'Cash flow example',type:'steps',intro:'Opening balance £5,000. Inflows £20,000. Outflows £26,000.',
   steps:['Net cash flow = £20,000 − £26,000 = −£6,000','Closing balance = £5,000 + (−£6,000) = −£1,000, so the business is overdrawn','The closing balance becomes next month\'s opening balance.']},
  {h:'Common mistakes',html:`<ul><li><b>Calling a negative cost variance adverse.</b> Spending less than planned is favourable.</li>
   <li><b>No label.</b> Always say favourable or adverse, not just the number.</li>
   <li><b>Losing the minus sign</b> on a negative closing balance.</li></ul>`}
 ],
 check:{q:'Budgeted costs are £12,000 and actual costs are £13,500. What is the variance?',options:['£1,500 adverse','£1,500 favourable','£13,500 adverse','£25,500 adverse'],answer:0,
  why:'£13,500 − £12,000 = £1,500. Costs are above budget, so it is adverse.'}},

hr:{short:'labour figures',title:'Labour turnover, productivity and employee costs',mins:3,match:/labour turnover|labour productivity|labour cost|employee costs|staff leaving|output per (employee|worker)/i,
 cards:[
  {h:'The rules',html:`${F('Labour turnover (%) = staff leaving ÷ average number of staff × 100')}
   ${F('Labour productivity = total output ÷ number of employees')}
   ${F('Labour cost per unit = total labour costs ÷ total output')}
   ${F('Employee costs as % of turnover = total wages ÷ revenue × 100')}`},
  {h:'Worked example',type:'steps',intro:'A factory starts the year with 70 staff and ends with 90. 12 leave. 30 production staff make 9,000 units. Labour costs are £45,000 and revenue is £180,000.',
   steps:['Average staff = (70 + 90) ÷ 2 = 80. Labour turnover = 12 ÷ 80 × 100 = 15%','Labour productivity = 9,000 ÷ 30 = 300 units per employee','Labour cost per unit = £45,000 ÷ 9,000 = £5','Employee costs as % of turnover = £45,000 ÷ £180,000 × 100 = 25%']},
  {h:'Common mistakes',html:`<ul><li><b>Dividing by the staff at the start or end</b> when the question gives you both. Use the average.</li>
   <li><b>Turning productivity upside down.</b> Output goes on top.</li>
   <li><b>No units.</b> Productivity is units per employee (per period).</li></ul>`}
 ],
 check:{q:'A business has 40 staff at the start of the year and 60 at the end. 8 staff leave. What is labour turnover?',options:['16%','20%','13.3%','8%'],answer:0,
  why:'Average staff = (40 + 60) ÷ 2 = 50. 8 ÷ 50 × 100 = 16%.'}},

capacity:{short:'capacity utilisation',title:'Capacity utilisation and unit costs',mins:3,match:/capacity|unit cost|cost per unit|average cost/i,
 cards:[
  {h:'The rules',html:`${F('Capacity utilisation (%) = actual output ÷ maximum possible output × 100')}
   ${F('Unit cost = total costs ÷ units of output')}
   <p>As utilisation rises, fixed costs are spread over more units, so the unit cost falls.</p>`},
  {h:'Worked example',type:'steps',intro:'Maximum output is 2,000 units a week. Fixed costs are £20,000 a week and variable cost is £3 per unit.',
   steps:['At 1,500 units: capacity utilisation = 1,500 ÷ 2,000 × 100 = 75%','Unit cost = (£20,000 + 1,500 × £3) ÷ 1,500 = £24,500 ÷ 1,500 = £16.33','At 2,000 units: unit cost = (£20,000 + 2,000 × £3) ÷ 2,000 = £26,000 ÷ 2,000 = £13.00','Rearranging: at 80% of a 5,000 maximum, output = 5,000 × 0.80 = 4,000 units']},
  {h:'Common mistakes',html:`<ul><li><b>Dividing the wrong way.</b> Actual output goes on top.</li>
   <li><b>Forgetting fixed costs</b> when working out unit cost.</li></ul>`}
 ],
 check:{q:'Maximum output is 800 units and capacity utilisation is 90%. What is actual output?',options:['720 units','889 units','710 units','80 units'],answer:0,
  why:'800 × 0.90 = 720 units.'}},

inventory:{short:'inventory control',title:'Inventory control',mins:2,match:/re-?order|buffer (stock|inventory)|lead time|inventory control/i,
 cards:[
  {h:'The rules',html:`${F('Re-order level = (lead time × daily usage) + buffer stock')}
   ${F('Re-order quantity = maximum stock − buffer stock')}
   <p>The re-order level is the stock level at which a new order is placed, so that the delivery arrives just as stock reaches the buffer.</p>`},
  {h:'Worked example',type:'steps',intro:'Lead time 4 days. Daily usage 50 units. Buffer stock 100 units. Maximum stock 900 units.',
   steps:['Re-order level = (4 × 50) + 100 = 300 units','Re-order quantity = 900 − 100 = 800 units']},
  {h:'Common mistakes',html:`<ul><li><b>Leaving out the buffer stock</b> from the re-order level.</li><li><b>Re-order quantity equal to maximum stock.</b> The buffer is still there when the delivery arrives, so take it off.</li></ul>`}
 ],
 check:{q:'Lead time is 3 days, daily usage is 40 units and buffer stock is 60 units. What is the re-order level?',options:['180 units','120 units','100 units','160 units'],answer:0,
  why:'(3 × 40) + 60 = 180 units.'}},

decision:{short:'decision trees',title:'Decision trees and expected values',mins:3,match:/decision tree|expected value|probabilit/i,
 cards:[
  {h:'The rules',html:`${F('Expected value = total of (probability × outcome) for each branch')}
   ${F('Net gain = expected value − cost of the option')}
   <p>The probabilities at each chance node must add up to 1.</p>`},
  {h:'Worked example',type:'steps',intro:'Launching a product costs £50,000. There is a 0.6 chance of £120,000 and a 0.4 chance of £30,000. Not launching gives £0.',
   steps:['Expected value = (0.6 × £120,000) + (0.4 × £30,000) = £72,000 + £12,000 = £84,000','Net gain = £84,000 − £50,000 = £34,000','£34,000 is more than £0, so on these figures the business should launch.']},
  {h:'Common mistakes',html:`<ul><li><b>Forgetting to take off the cost.</b></li><li><b>Probabilities that don't add up to 1.</b> Check each node.</li>
   <li><b>Treating the expected value as what will happen.</b> It's an average, and the real result will be one of the outcomes.</li></ul>`}
 ],
 check:{q:'There is a 0.7 chance of £40,000 and a 0.3 chance of a £10,000 loss. What is the expected value?',options:['£25,000','£31,000','£30,000','£28,000'],answer:0,
  why:'(0.7 × £40,000) + (0.3 × −£10,000) = £28,000 − £3,000 = £25,000.'}},

cpa:{short:'critical path',title:'Critical path and float',mins:3,match:/critical path|float|network|earliest start|latest finish/i,
 cards:[
  {h:'The rules',html:`${F('Float = latest finish time − earliest start time − duration')}
   <ul><li>The <b>critical path</b> is the longest path through the network. It sets the shortest time the whole project can take.</li>
   <li>Activities on the critical path have <b>zero float</b>. Any delay to them delays the whole project.</li></ul>`},
  {h:'Worked example',type:'steps',intro:'Activity C: earliest start 4 days, duration 3 days, latest finish 10 days.',
   steps:['Float = 10 − 4 − 3 = 3 days','C can be delayed by up to 3 days without delaying the project.','If its float were 0, C would be on the critical path.']},
  {h:'Common mistakes',html:`<ul><li><b>Using latest finish − earliest start</b> and forgetting to take off the duration.</li><li><b>Picking the shortest path</b> as the critical path. It's the longest.</li></ul>`}
 ],
 check:{q:'An activity has an earliest start of 6, a duration of 5 and a latest finish of 11. What is its float?',options:['0, so it is critical','5','11','1'],answer:0,
  why:'Float = 11 − 6 − 5 = 0. It has no float, so it is on the critical path.'}},

efficiency:{short:'efficiency ratios',title:'Payables days, receivables days and inventory turnover',mins:3,match:/payables days|receivables days|inventory turnover|efficiency ratio/i,
 cards:[
  {h:'The rules',html:`${F('Receivables days = receivables ÷ revenue × 365')}
   ${F('Payables days = payables ÷ cost of sales × 365')}
   ${F('Inventory turnover = cost of sales ÷ average inventory')}`},
  {h:'Worked example',type:'steps',intro:'Revenue £365,000, receivables £40,000. Cost of sales £219,000, payables £30,000, average inventory £36,500.',
   steps:['Receivables days = £40,000 ÷ £365,000 × 365 = 40 days','Payables days = £30,000 ÷ £219,000 × 365 = 50 days','Inventory turnover = £219,000 ÷ £36,500 = 6 times a year']},
  {h:'Common mistakes',html:`<ul><li><b>Payables over revenue.</b> Payables days use cost of sales.</li><li><b>Inventory turnover in days.</b> This formula gives the number of times a year.</li></ul>`}
 ],
 check:{q:'Receivables are £25,000 and revenue is £182,500. How many receivables days is that?',options:['50 days','7.3 days','73 days','20 days'],answer:0,
  why:'£25,000 ÷ £182,500 × 365 = 50 days.'}},

correl:{short:'correlation',title:'Correlation',mins:2,match:/correlation|scatter/i,
 cards:[
  {h:'Reading a scatter graph',html:`<div class="rf-svgs">${sc([[10,80],[20,70],[30,62],[40,55],[50,44],[60,38],[70,28],[80,20]],'Strong positive')}${sc([[10,70],[20,45],[30,65],[40,40],[50,62],[60,48],[70,30],[80,45]],'Weak positive')}${sc([[10,25],[20,32],[30,38],[40,48],[50,55],[60,62],[70,72],[80,78]],'Strong negative')}</div>
   <ul><li><b>Positive</b>: the points rise from left to right. <b>Negative</b>: they fall.</li><li><b>Strong</b>: the points sit close to a straight line. <b>Weak</b>: they are widely scattered.</li></ul>`},
  {h:'What it does and doesn\'t show',html:`<p>Correlation shows that two things move together. It doesn't prove that one causes the other. Other factors may be involved.</p>
   <p>With weak correlation, the factor on the x-axis is only one of several things affecting the result.</p>`}
 ],
 check:{q:'On a scatter graph the points rise from left to right but are widely spread out. Which describes it?',options:['Weak positive correlation','Strong positive correlation','Weak negative correlation','Strong negative correlation'],answer:0,
  why:'Rising from left to right means positive. Widely spread means weak.'}}
};

/* small scatter picture; y is measured from the top, so a smaller y is higher up */
function sc(pts,label){
  return `<figure class="rf-sc"><svg viewBox="0 0 100 100" role="img" aria-label="${label} correlation"><line x1="6" y1="94" x2="96" y2="94"/><line x1="6" y1="94" x2="6" y2="4"/>${pts.map(([x,y])=>`<circle cx="${x+6}" cy="${y}" r="3"/>`).join('')}</svg><figcaption>${label}</figcaption></figure>`;
}

/* which decks a piece of text is about */
function find(text){const t=String(text||'');return Object.keys(DECKS).filter(k=>DECKS[k].match.test(t));}
function names(ids){const n=ids.map(k=>DECKS[k].short);return n.length>1?n.slice(0,-1).join(', ')+' and '+n[n.length-1]:n[0]||'';}
function link(ids,back){return 'refresher.html?d='+ids.join(',')+(back?'&back='+encodeURIComponent(back):'');}

function css(){
if(!document.getElementById('rf-style')){const st=document.createElement('style');st.id='rf-style';st.textContent=`.rf-ov{position:fixed;inset:0;z-index:9998;background:rgba(10,15,25,.55);display:flex;align-items:center;justify-content:center;padding:16px}
.rf-modal{background:#fff;color:#1a1a1a;max-width:520px;width:100%;max-height:88vh;overflow:auto;border-radius:14px;padding:24px 26px;font:15px/1.55 "IBM Plex Sans",system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.rf-modal h2{font:400 1.5rem "DM Serif Display",Georgia,serif;margin:0 0 10px;color:#0E2A47}.rf-modal p{margin:0 0 12px}
.rf-modal .rf-l{display:block;text-decoration:none;border:1px solid #E5DFD2;border-radius:10px;padding:10px 14px;margin-bottom:8px;color:inherit}
.rf-modal .rf-l b{display:block}.rf-modal .rf-l span{font-size:.85rem;color:#6B6B6B}
.rf-modal .rf-l:hover{border-color:#0E2A47}
.rf-modal .rf-b{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
.rf-modal .rf-b a,.rf-modal .rf-b button{padding:10px 18px;border-radius:9px;font:600 15px "IBM Plex Sans",system-ui,sans-serif;cursor:pointer;text-decoration:none}
.rf-modal .rf-all{background:#0E2A47;color:#fff;border:0}.rf-modal .rf-no{background:transparent;color:inherit;border:1px solid #E5DFD2}
@media (prefers-color-scheme:dark){.rf-modal{background:#172133;color:#e9ecf2}.rf-modal h2{color:#cfe0f5}.rf-modal .rf-l,.rf-modal .rf-no{border-color:rgba(255,255,255,.15)}.rf-modal .rf-l span{color:#9aa4b6}.rf-modal .rf-all{background:#cfe0f5;color:#0e1420}}`;document.head.appendChild(st);}
}

/* pop-up offering refreshers. o = {heading, text, decks:[ids], back, no:'button text', onNo, onAny} */
function ask(o){
  const ids=(o.decks||[]).filter(k=>DECKS[k]).slice(0,4);if(!ids.length)return false;
  css();
  const ov=document.createElement('div');ov.className='rf-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  ov.innerHTML=`<div class="rf-modal"><h2>${e(o.heading||'Do you need a refresher?')}</h2><p>${e(o.text||'')}</p>
    ${ids.map(k=>`<a class="rf-l" href="${e(link([k],o.back))}"><b>${e(DECKS[k].title)}</b><span>About ${DECKS[k].mins} minutes: the rule, a worked example, where you went wrong, and a quick check</span></a>`).join('')}
    <div class="rf-b">${ids.length>1?`<a class="rf-all" href="${e(link(ids,o.back))}">Do all ${ids.length}</a>`:''}<button type="button" class="rf-no">${e(o.no||'No thanks')}</button></div></div>`;
  document.body.appendChild(ov);
  ov.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(o.onAny)o.onAny();}));
  ov.querySelector('.rf-no').onclick=()=>{if(o.onAny)o.onAny();ov.remove();if(o.onNo)o.onNo();};
  try{ov.querySelector('.rf-no').focus({preventScroll:true});}catch(x){}
  return true;
}

const DEFAULT=['breakeven','ratios','margins'];   /* used only when the work and the student's gaps match no refresher */
/* ---------- compulsory refresher before set work ----------
   Work a teacher sets (and the weekly question sets) stays locked until the
   student has done a refresher on the top three areas it covers. Which areas:
   ones the questions are about, the student's own weak areas first; if the
   questions match nothing, the student's weak areas; if there are none, the
   course's core calculations. Done refreshers are saved to the student's
   account (key "rfgate") so they follow them between devices. */
const GKEY='rfgate';
const Acc=()=>window.Acct;
function gateDone(id){
  if(!id)return true;
  try{const A=Acc(),m=(A&&A.get&&A.get(GKEY))||{};if(m[id])return true;}catch(e){}
  try{return !!localStorage.getItem('rfgate:'+id);}catch(e){return false;}
}
function markDone(id,ids){
  if(!id)return;
  try{localStorage.setItem('rfgate:'+id,'1');}catch(e){}
  try{const A=Acc();if(A&&A.set&&A.get){const m=Object.assign({},A.get(GKEY)||{});m[id]={t:new Date().toISOString(),d:ids||[]};
    const ks=Object.keys(m).sort((a,b)=>String(m[a].t).localeCompare(String(m[b].t)));while(ks.length>200)delete m[ks.shift()];A.set(GKEY,m);}}catch(e){}
}
try{const A=Acc();if(A&&A.merge)A.merge(GKEY,(a,b)=>Object.assign({},b||{},a||{}));}catch(e){}

function pick(items,gapText){
  const n={};
  (items||[]).forEach(it=>{
    const q=typeof it==='string'?it:[it&&it.q,it&&it.label,it&&it.case].filter(Boolean).join(' ');
    find(q).forEach(k=>{n[k]=(n[k]||0)+1;});
    const tp=it&&it.topic;if(tp)Object.keys(DECKS).forEach(k=>{if((DECKS[k].topics||[]).includes(tp))n[k]=(n[k]||0)+.5;});
  });
  const weak=find(gapText||'');
  let ids=Object.keys(n).sort((a,b)=>(weak.includes(b)?1:0)-(weak.includes(a)?1:0)||n[b]-n[a]);
  if(!ids.length)ids=weak.slice();
  if(!ids.length)ids=DEFAULT.filter(k=>DECKS[k]);
  return ids.slice(0,3);
}

/* o = {id, items, gapText, back, onLeave}. Returns {done:true} if the refresher for this
   work is done; otherwise shows the pop-up and returns {done:false, ids, href, text}. */
function gate(o){
  if(gateDone(o.id))return {done:true};
  const ids=o.ids&&o.ids.length?o.ids.filter(k=>DECKS[k]):pick(o.items,o.gapText);
  if(!ids.length)return {done:true};
  const href=link(ids,o.back)+'&gate='+encodeURIComponent(o.id);
  const list=ids.map(k=>DECKS[k].title),mins=ids.reduce((s,k)=>s+(DECKS[k].mins||3),0);
  const text=`Your refresher topics are: ${list.length>1?list.slice(0,-1).join(', ')+' and '+list[list.length-1]:list[0]}.`;
  css();
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const old=document.querySelector('.rf-ov');if(old)old.remove();
  const ov=document.createElement('div');ov.className='rf-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.innerHTML=`<div class="rf-modal"><h2>Refresher first</h2><p>Before you start this work, you need to do a short refresher. It takes about ${mins} minutes. When you finish, you come straight back to the questions.</p>
    <p><b>${e(text)}</b></p>
    ${ids.map(k=>`<div class="rf-l"><b>${e(DECKS[k].title)}</b><span>About ${DECKS[k].mins} minutes</span></div>`).join('')}
    <div class="rf-b"><a class="rf-all" href="${e(href)}">Start the refresher</a>${o.onLeave?'<button type="button" class="rf-no">Go back</button>':''}</div></div>`;
  document.body.appendChild(ov);
  const no=ov.querySelector('.rf-no');if(no)no.onclick=()=>{ov.remove();o.onLeave();};
  try{ov.querySelector('.rf-all').focus({preventScroll:true});}catch(x){}
  return {done:false,ids,href,text};
}

window.REFRESH={DECKS,find,link,ask,names,gate,gateDone,markDone,pick};
})();
