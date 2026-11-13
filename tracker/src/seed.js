/* Work set and results logged by Mr Kerrisk, 13 Nov 2026. Each entry is added once to the matching student account. */
export default [
 {
  "id": "seed-2026-11-13-tandrika",
  "match": "tandrika",
  "work": {
   "id": "w-tandrika-calc-1311",
   "title": "Calculations: your gaps from the 50-question booklet",
   "due": "2026-11-19",
   "spec": {
    "title": "Calculations: your gaps from the 50-question booklet",
    "intro": "These 30 questions are aimed at the calculations you lost marks on in the 50-question booklet. Work them out on paper with your notes, then type in your final number. Each question has a clue if you are stuck.\n\nThings to have in your head before you start:\n- Elasticity: % change in quantity = elasticity x % change in price (or income). Then go one step further: new revenue = new price x new quantity.\n- Reverse percentages: if a figure already includes an 8% rise, divide by 1.08 to get back to the original. If something falls by 6%, multiply by 0.94.\n- Mark-up = profit / cost. Margin = profit / selling price.\n- Operating expenses = gross profit - operating profit.\n- Inventory turnover and labour turnover both use an AVERAGE: (start + end) / 2.\n- Capacity utilisation = actual output / maximum output x 100. Build the maximum from the figures you are given.\n- Reorder level = (daily usage x lead time) + buffer.\n- A fall from 15% to 12% is 3 percentage points, which is a 20% fall.\n\nType numbers only: no £ signs or commas needed. Use a minus sign where a question asks for one. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "Brightwell Bakery sells 4,000 loaves a week at £2.50. The price elasticity of demand is -0.6. It raises its price by 8%. Calculate its new weekly revenue.",
      "answer": 10281.6,
      "unit": "£",
      "working": "Quantity falls 0.6 x 8% = 4.8%, so 4,000 x 0.952 = 3,808. New price £2.50 x 1.08 = £2.70. Revenue = 3,808 x £2.70 = £10,281.60.",
      "hint": "Two steps: find the new quantity AND the new price, then multiply them. Do not stop at the quantity."
     },
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "A product has a price elasticity of demand of -1.5. The business cuts its price by 10%. Calculate the percentage change in sales revenue.",
      "answer": 3.5,
      "unit": "%",
      "working": "Quantity rises 1.5 x 10% = 15%. Revenue = 0.90 x 1.15 = 1.035, so revenue rises by 3.5%.",
      "hint": "Revenue = price x quantity. Write the new price as 0.90 and the new quantity as 1 + the % rise, then multiply."
     },
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "A product has a price elasticity of demand of -2.5. The business raises its price by 4%. Calculate the percentage change in sales revenue. Put a minus sign in front if revenue falls.",
      "answer": -6.4,
      "unit": "%",
      "working": "Quantity falls 2.5 x 4% = 10%. Revenue = 1.04 x 0.90 = 0.936, a fall of 6.4%.",
      "hint": "Same method as the last one. Elastic demand: what happens to revenue when price goes up?"
     },
     {
      "type": "calc",
      "topic": "3.3.2f",
      "skill": "quant",
      "q": "Value Foods sells 50,000 packs a month of an own-brand product with an income elasticity of demand of -0.8. Incomes fall by 2.5%. Calculate the new monthly sales in packs.",
      "answer": 51000.0,
      "unit": "packs",
      "working": "% change in demand = -0.8 x -2.5% = +2%. 50,000 x 1.02 = 51,000 packs.",
      "hint": "Multiply YED by the % change in income. Watch the signs: a negative times a negative is positive."
     },
     {
      "type": "calc",
      "topic": "3.3.2f",
      "skill": "quant",
      "q": "A holiday company has sales revenue of £600,000 a month. Its income elasticity of demand is +1.6 and incomes are forecast to rise by 2%. Prices stay the same. Calculate the forecast monthly revenue.",
      "answer": 619200.0,
      "unit": "£",
      "working": "% change in demand = 1.6 x 2% = 3.2%. £600,000 x 1.032 = £619,200.",
      "hint": "Find the % change in demand first, then apply it to the revenue."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "Harlow Garden Centre's revenue this year is £5.94m. This is 8% higher than last year. Calculate last year's revenue in £m.",
      "answer": 5.5,
      "unit": "£m",
      "working": "This year = last year x 1.08, so last year = £5.94m / 1.08 = £5.5m.",
      "hint": "This year's figure already includes the 8%. Divide by 1.08. Taking 8% off £5.94m gives the wrong answer."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "This year a market was worth £24.2m after growing by 10%. Last year, Kestrel Ltd had a 12.5% share of the market. Calculate Kestrel's revenue last year in £m.",
      "answer": 2.75,
      "unit": "£m",
      "working": "Last year's market = £24.2m / 1.1 = £22m. Kestrel = 12.5% x £22m = £2.75m.",
      "hint": "First work out how big the market was last year. Then take 12.5% of that."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "StreamBox has 1.6 million subscribers paying £8.99 a month. It raises the price to £9.99 and expects to lose 6% of its subscribers. Calculate the change in monthly revenue. Put a minus sign in front if it falls.",
      "answer": 640960.0,
      "unit": "£",
      "working": "Subscribers = 1.6m x 0.94 = 1.504m. New revenue = 1.504m x £9.99 = £15,024,960. Old = 1.6m x £8.99 = £14,384,000. Change = +£640,960.",
      "hint": "Losing 6% means multiply by 0.94. Do not divide by 1.06."
     },
     {
      "type": "calc",
      "topic": "3.3.4d",
      "skill": "quant",
      "q": "A shop buys a jacket for £36 and adds a mark-up of 25%. Calculate the gross profit margin on the jacket.",
      "answer": 20.0,
      "unit": "%",
      "working": "Price = £36 x 1.25 = £45. Profit = £9. Margin = 9 / 45 x 100 = 20%.",
      "hint": "Mark-up is profit over COST. Margin is profit over SELLING PRICE. Find the price first."
     },
     {
      "type": "calc",
      "topic": "3.3.4d",
      "skill": "quant",
      "q": "A product costs £27 to make. The business wants a gross profit margin of 40%. Calculate the selling price.",
      "answer": 45.0,
      "unit": "£",
      "working": "If the margin is 40%, cost is 60% of the price. Price = £27 / 0.60 = £45.",
      "hint": "Cost is what is left of the price after the margin. What % of the price is that?"
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Northgate Retail has revenue of £8.5m, a gross profit margin of 38% and an operating profit margin of 9%. Calculate its operating expenses in £m.",
      "answer": 2.47,
      "unit": "£m",
      "working": "Gross profit = 38% x £8.5m = £3.23m. Operating profit = 9% x £8.5m = £0.765m. Operating expenses = £3.23m - £0.765m = £2.465m.",
      "hint": "Operating expenses are the gap between gross profit and operating profit. They are not the same as operating profit."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A business has revenue of £650,000, cost of sales of £390,000 and an operating profit margin of 12%. Calculate its operating expenses.",
      "answer": 182000.0,
      "unit": "£",
      "working": "Gross profit = £260,000. Operating profit = 12% x £650,000 = £78,000. Operating expenses = £260,000 - £78,000 = £182,000.",
      "hint": "Gross profit first, then operating profit, then take one from the other."
     },
     {
      "type": "calc",
      "topic": "3.7.2c",
      "skill": "quant",
      "q": "Ashby Hardware's cost of sales is £720,000. Inventory was £85,000 at the start of the year and £95,000 at the end. Calculate inventory turnover.",
      "answer": 8.0,
      "unit": "times",
      "working": "Average inventory = (£85,000 + £95,000) / 2 = £90,000. Inventory turnover = £720,000 / £90,000 = 8 times.",
      "hint": "Use cost of sales, not revenue, and use AVERAGE inventory."
     },
     {
      "type": "calc",
      "topic": "3.7.2c",
      "skill": "quant",
      "q": "A business has cost of sales of £540,000 and an inventory turnover of 6 times. Inventory at the start of the year was £100,000. Calculate inventory at the end of the year.",
      "answer": 80000.0,
      "unit": "£",
      "working": "Average inventory = £540,000 / 6 = £90,000. Opening + closing = £180,000, so closing = £80,000.",
      "hint": "Work backwards: average inventory first. The average is (opening + closing) / 2."
     },
     {
      "type": "calc",
      "topic": "3.6.2",
      "skill": "quant",
      "q": "A call centre had 240 staff at the start of the year and 260 at the end. 30 staff left during the year. Calculate labour turnover.",
      "answer": 12.0,
      "unit": "%",
      "working": "Average staff = (240 + 260) / 2 = 250. Labour turnover = 30 / 250 x 100 = 12%.",
      "hint": "Divide by the AVERAGE number of staff, not the number at the start."
     },
     {
      "type": "calc",
      "topic": "3.6.2",
      "skill": "quant",
      "q": "A care home had 180 staff at the start of the year and 200 at the end. Its labour turnover was 10%. How many staff left during the year?",
      "answer": 19.0,
      "unit": "staff",
      "working": "Average staff = 190. 10% x 190 = 19 staff.",
      "hint": "Labour turnover = leavers / average staff x 100. Rearrange it."
     },
     {
      "type": "calc",
      "topic": "3.4.2",
      "skill": "quant",
      "q": "A factory has 4 machines. Each makes 150 units an hour. The factory runs 8 hours a day, 5 days a week. Last week it made 19,200 units. Calculate capacity utilisation.",
      "answer": 80.0,
      "unit": "%",
      "working": "Capacity = 4 x 150 x 8 x 5 = 24,000 units. 19,200 / 24,000 x 100 = 80%.",
      "hint": "Build the maximum capacity first by multiplying everything that sets it."
     },
     {
      "type": "calc",
      "topic": "3.4.2",
      "skill": "quant",
      "q": "The factory in the last question increases its capacity by 25%. Output rises by 10% from 19,200 units. Calculate the new capacity utilisation.",
      "answer": 70.4,
      "unit": "%",
      "working": "New capacity = 24,000 x 1.25 = 30,000. New output = 19,200 x 1.1 = 21,120. 21,120 / 30,000 x 100 = 70.4%.",
      "hint": "Both the top and the bottom of the fraction change."
     },
     {
      "type": "calc",
      "topic": "3.4.3a",
      "skill": "quant",
      "q": "A gym has fixed costs of £48,000 a month and can serve up to 2,000 members a month. The variable cost of each member is £14. Calculate the average cost per member when it runs at 80% capacity utilisation.",
      "answer": 44.0,
      "unit": "£",
      "working": "Members = 80% x 2,000 = 1,600. Fixed cost per member = £48,000 / 1,600 = £30. Average cost = £30 + £14 = £44.",
      "hint": "Spread the fixed costs over the members it actually has, not the maximum."
     },
     {
      "type": "calc",
      "topic": "3.4.5b",
      "skill": "quant",
      "q": "A shop uses 250 units of a product each day. Its supplier takes 4 days to deliver. It keeps a buffer inventory of 600 units. Calculate the reorder level.",
      "answer": 1600.0,
      "unit": "units",
      "working": "Reorder level = (250 x 4) + 600 = 1,600 units.",
      "hint": "Enough to last the lead time, plus the buffer."
     },
     {
      "type": "calc",
      "topic": "3.4.5b",
      "skill": "quant",
      "q": "Using the shop in the last question, each delivery arrives just as inventory falls to the buffer level and takes inventory up to 3,100 units. How many days are there between deliveries?",
      "answer": 10.0,
      "unit": "days",
      "working": "Each delivery adds 3,100 - 600 = 2,500 units. 2,500 / 250 a day = 10 days.",
      "hint": "How much is used between the top of the chart and the buffer line?"
     },
     {
      "type": "calc",
      "topic": "3.10.3b",
      "skill": "quant",
      "q": "A project has these activities, in weeks: A 3 (start); B 5 (after A); C 4 (after A); D 6 (after B); E 2 (after C); F 3 (after D and E). Calculate the minimum time to complete the project.",
      "answer": 17.0,
      "unit": "weeks",
      "working": "Path A-B-D-F = 3 + 5 + 6 + 3 = 17. Path A-C-E-F = 3 + 4 + 2 + 3 = 12. The longest path is 17 weeks.",
      "hint": "List each route from start to finish and add up the durations. The longest route sets the time."
     },
     {
      "type": "calc",
      "topic": "3.10.3b",
      "skill": "quant",
      "q": "Using the project in the last question, calculate the total float on activity E.",
      "answer": 5.0,
      "unit": "weeks",
      "working": "E can start at week 7 (A 3 + C 4). F must start by week 14 (17 - 3), so E must finish by 14. Float = 14 - 7 - 2 = 5 weeks.",
      "hint": "Total float = latest finish - earliest start - duration."
     },
     {
      "type": "calc",
      "topic": "3.10.3b",
      "skill": "quant",
      "q": "Using the same project, activity C is delayed by 6 weeks. Calculate the new minimum time to complete the project.",
      "answer": 18.0,
      "unit": "weeks",
      "working": "C now takes 10 weeks. A-C-E-F = 3 + 10 + 2 + 3 = 18, longer than A-B-D-F (17). New minimum time = 18 weeks.",
      "hint": "Do not just add 6 weeks to the old total. Recheck which path is now the longest."
     },
     {
      "type": "calc",
      "topic": "3.5.2b",
      "skill": "quant",
      "q": "A branch budgeted revenue of £620,000 and costs of £480,000. Actual revenue was £655,000 and actual costs were £532,000. Calculate the profit variance. Put a minus sign in front if it is adverse.",
      "answer": -17000.0,
      "unit": "£",
      "working": "Budgeted profit = £140,000. Actual profit = £123,000. Profit variance = £17,000 adverse.",
      "hint": "Work out budgeted profit and actual profit separately. Actual lower than budget is adverse."
     },
     {
      "type": "calc",
      "topic": "3.7.5a",
      "skill": "quant",
      "q": "A UK firm imports parts costing $36,000. The exchange rate falls from £1 = $1.50 to £1 = $1.20. Calculate the percentage change in the cost of the parts in pounds.",
      "answer": 25.0,
      "unit": "%",
      "working": "Before: $36,000 / 1.50 = £24,000. After: $36,000 / 1.20 = £30,000. Change = +25%.",
      "hint": "To turn dollars into pounds, divide by the rate. Fewer dollars to the pound means imports cost more."
     },
     {
      "type": "calc",
      "topic": "3.7.5a",
      "skill": "quant",
      "q": "A UK firm sells a product for £80 in Germany. The exchange rate rises from £1 = €1.15 to £1 = €1.25 and the firm keeps its price at £80. Calculate the new price in euros.",
      "answer": 100.0,
      "unit": "€",
      "working": "£80 x 1.25 = €100.",
      "hint": "To turn pounds into euros, multiply by the rate."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A business's operating profit margin fell from 15% to 12%. By what percentage did the margin fall? Give a percentage, not percentage points, with a minus sign in front.",
      "answer": -20.0,
      "unit": "%",
      "working": "The fall is 3 percentage points. As a percentage: -3 / 15 x 100 = -20%.",
      "hint": "A change from 15 to 12 is 3 percentage points. The question wants that change as a % of the original 15."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "The UK pet food market grew from £3.2bn to £3.68bn over three years. Calculate the percentage growth over the three years.",
      "answer": 15.0,
      "unit": "%",
      "working": "(3.68 - 3.2) / 3.2 x 100 = 15%.",
      "hint": "Change divided by the original value. Do not divide by 3."
     },
     {
      "type": "calc",
      "topic": "3.5.2d",
      "skill": "quant",
      "q": "A product sells for £20 with a variable cost of £8. 5,000 are sold a month. Price elasticity of demand is -1.2. The business cuts the price by 10%. Calculate the change in total monthly contribution. Put a minus sign in front if it falls.",
      "answer": -4000.0,
      "unit": "£",
      "working": "Quantity rises 1.2 x 10% = 12%, to 5,600. New contribution = (£18 - £8) x 5,600 = £56,000. Old = £12 x 5,000 = £60,000. Change = -£4,000.",
      "hint": "Sales go up, but each unit now brings in less contribution. Work out both totals and compare."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-tk-0",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Calculation MCQs (50 questions) - overall",
    "mark": "34/50",
    "level": "",
    "well": "Break-even, contribution and margin of safety all right (5/5). Payback, ARR, NPV and decision trees all right. ROCE, gearing, current ratio, receivables and payables days all right.",
    "improve": "Answers copied onto the grid did not always match the circles on the pages (grid scored 32/50, pages 34/50). Check the grid against each page. About 20 questions had no working at all."
   },
   {
    "qid": "seed-tk-1",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Break-even output, contribution per unit and margin of safety",
    "mark": "5/5",
    "level": "",
    "well": "All five break-even questions right, including profit at a target output and break-even after a rise in fixed costs.",
    "improve": "Keep showing contribution per unit as a separate line."
   },
   {
    "qid": "seed-tk-2",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "ROCE, gearing, current ratio, receivables days and payables days",
    "mark": "6/6",
    "level": "",
    "well": "All ratio questions right, including the effect of changes on ROCE and gearing.",
    "improve": "Write the formula down before putting numbers in."
   },
   {
    "qid": "seed-tk-3",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Payback, average rate of return, net present value and decision trees",
    "mark": "5/5",
    "level": "",
    "well": "Investment appraisal and decision trees all right, including the changed probability.",
    "improve": "None on these questions."
   },
   {
    "qid": "seed-tk-4",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Price elasticity of demand and income elasticity of demand calculations",
    "mark": "2/4",
    "level": "",
    "well": "Calculated PED from price and quantity changes correctly.",
    "improve": "Stopped at the change in quantity instead of working out the change in revenue (new price x new quantity). Got the sign wrong on a YED question."
   },
   {
    "qid": "seed-tk-5",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Profit margins, operating expenses, mark-up and margin",
    "mark": "2/5",
    "level": "",
    "well": "Operating profit margin from revenue, cost of sales and operating expenses was right.",
    "improve": "Treated operating profit as operating expenses. Mixed up mark-up and margin. Percentage points and percentage change need practice."
   },
   {
    "qid": "seed-tk-6",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Market share, market growth, percentage change and reverse percentages",
    "mark": "2/5",
    "level": "",
    "well": "Forecast revenue from market growth and market share was right.",
    "improve": "Reverse percentages: divide by 1.1 to find last year. Losing 5% of customers means x 0.95, not / 1.05. Left the 3-year market growth blank."
   },
   {
    "qid": "seed-tk-7",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Capacity utilisation and labour productivity",
    "mark": "2/4",
    "level": "",
    "well": "Labour productivity change was right.",
    "improve": "Build maximum capacity from machines x rate x hours. Average cost at 75% capacity must spread fixed costs over the actual output."
   },
   {
    "qid": "seed-tk-8",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Inventory turnover, inventory control chart and reorder level",
    "mark": "2/4",
    "level": "",
    "well": "Read the reorder quantity, lead time and daily usage from the chart correctly.",
    "improve": "Inventory turnover must use average inventory. Reorder level = usage x lead time + buffer (left blank)."
   },
   {
    "qid": "seed-tk-9",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Labour turnover, retention and employee costs as a percentage of turnover",
    "mark": "3/4",
    "level": "",
    "well": "Retention, employee costs and labour cost per unit were right.",
    "improve": "Labour turnover uses average staff, not staff at the start of the year."
   },
   {
    "qid": "seed-tk-10",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Network analysis: critical path and total float",
    "mark": "2/3",
    "level": "",
    "well": "Critical path and float were right.",
    "improve": "When an activity is delayed, recheck which path is longest instead of adding the delay to the total."
   },
   {
    "qid": "seed-tk-11",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Variances, cash flow forecasts, net cash flow and exchange rates",
    "mark": "3/5",
    "level": "",
    "well": "Closing balance and net cash flow from a deposit were right. Exchange rate effect on an export price was right.",
    "improve": "Profit variance: arithmetic slip led to favourable instead of adverse. An import cost rises when the pound weakens: check the sign."
   }
  ]
 },
 {
  "id": "seed-2026-11-13-prabhleen",
  "match": "prabhleen",
  "work": {
   "id": "w-prabhleen-calc-1311",
   "title": "Calculations: next steps after Set 2",
   "due": "2026-11-19",
   "spec": {
    "title": "Calculations: next steps after Set 2",
    "intro": "Set 2 went well: 153 out of 185, up from 105 out of 163, and you can now work ratios backwards confidently. These 30 questions push you further on the areas where marks slipped: decision trees where there is another option to compare against, cash flow over more than one month, payback, and multi-part questions you did not finish. A few are topics we have not practised yet: elasticity and revenue, ARR, reverse percentages, HR data, exchange rates and network analysis.\n\nWork each one out on paper with your notes, then type in your final number. There is a clue under each question if you need it.\n\nThings to have in your head before you start:\n- Elasticity: % change in quantity = elasticity x % change in price (or income). Then work out the new revenue or profit. Do not stop at the quantity.\n- Reverse percentages: if a figure is after a 15% fall, divide by 0.85.\n- ARR: (total inflows - cost) / years / cost x 100. Take the cost off first.\n- Payback in months: whole years x 12, then amount still needed / that year's inflow x 12.\n- Decision trees: net gain = expected value - the cost of that option. Then compare with the other option.\n- Cash flow over two months: finish the first month, and use its closing balance as the next opening balance, even if it is negative.\n- Gearing = NCL / (total equity + NCL) x 100. A new loan changes the top and the bottom.\n\nType numbers only: no £ signs or commas needed. Use a minus sign where a question asks for one. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "Ridgeway Ltd sells 12,000 units a month at £15. Price elasticity of demand is -0.4. It raises its price by 12%. Calculate its new monthly revenue.",
      "answer": 191923.2,
      "unit": "£",
      "working": "Quantity falls 0.4 x 12% = 4.8%, to 11,424. Price = £16.80. Revenue = £191,923.20.",
      "hint": "New quantity and new price, then multiply."
     },
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "A product sells for £40 with a variable cost of £22. Fixed costs are £90,000 a month and 8,000 units are sold a month. Price elasticity of demand is -1.8. The business cuts its price by 5%. Calculate the change in monthly profit. Put a minus sign in front if it falls.",
      "answer": -4480.0,
      "unit": "£",
      "working": "Quantity rises 1.8 x 5% = 9%, to 8,720. New profit = (£38 - £22) x 8,720 - £90,000 = £49,520. Old profit = £18 x 8,000 - £90,000 = £54,000. Change = -£4,480.",
      "hint": "Revenue rising does not mean profit rises. Use contribution per unit x units - fixed costs, before and after."
     },
     {
      "type": "calc",
      "topic": "3.3.2f",
      "skill": "quant",
      "q": "A luxury car dealer sells 25,000 cars a year. Income elasticity of demand is +2.4. Incomes fall by 1.5%. Calculate the new annual sales.",
      "answer": 24100.0,
      "unit": "cars",
      "working": "% change in demand = 2.4 x -1.5% = -3.6%. 25,000 x 0.964 = 24,100 cars.",
      "hint": "Positive YED and falling incomes: which way does demand go?"
     },
     {
      "type": "calc",
      "topic": "3.1.1c",
      "skill": "quant",
      "q": "After a 15% fall, a business's profit this year is £357,000. Calculate last year's profit.",
      "answer": 420000.0,
      "unit": "£",
      "working": "This year = last year x 0.85. Last year = £357,000 / 0.85 = £420,000.",
      "hint": "Do not add 15% back on. Divide by what is left after the fall."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "Fernhill plc's revenue this year is £4.68m, which is an 18% share of its market. The market grew by 4% this year. Calculate the size of the market last year in £m.",
      "answer": 25.0,
      "unit": "£m",
      "working": "Market this year = £4.68m / 0.18 = £26m. Last year = £26m / 1.04 = £25m.",
      "hint": "Two steps: market size this year from the share, then reverse the 4% growth."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £250,000 and lasts 5 years. Total net cash inflows over the 5 years are £340,000. Calculate the average rate of return.",
      "answer": 7.2,
      "unit": "%",
      "working": "Total profit = £340,000 - £250,000 = £90,000. Per year = £18,000. ARR = 18,000 / 250,000 x 100 = 7.2%.",
      "hint": "Take off the initial cost FIRST, then divide by the number of years, then divide by the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A machine costs £180,000. Net cash inflows are £50,000, £60,000, £70,000 and £60,000 over its 4-year life. Calculate the average rate of return. Give your answer to 2 decimal places.",
      "answer": 8.33,
      "unit": "%",
      "working": "Total inflows = £240,000. Profit = £60,000. Per year = £15,000. ARR = 15,000 / 180,000 x 100 = 8.33%.",
      "hint": "Same three steps as the last question."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "Project X costs £150,000. Net cash inflows are £40,000 in year 1, £50,000 in year 2, £60,000 in year 3 and £45,000 in year 4. Calculate the payback period in months.",
      "answer": 36.0,
      "unit": "months",
      "working": "Cumulative: -110,000, -60,000, 0 at the end of year 3. Payback = exactly 3 years = 36 months.",
      "hint": "Keep a running total. Check carefully when it reaches zero."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £210,000. Net cash inflows are £70,000, £60,000, £50,000 and £80,000 in years 1 to 4. Calculate the payback period in months.",
      "answer": 40.5,
      "unit": "months",
      "working": "After 3 years £180,000 is paid back. £30,000 is still needed out of year 4's £80,000. 30,000 / 80,000 x 12 = 4.5 months. Payback = 40.5 months.",
      "hint": "Find the year it pays back in, then work out the months: amount still needed / that year's inflow x 12."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "An investment costs £120,000. Net cash inflows are £45,000, £50,000 and £55,000 in years 1 to 3. The discount factors at 8% are 0.926, 0.857 and 0.794. Calculate the net present value.",
      "answer": 8190.0,
      "unit": "£",
      "working": "Present values: £41,670 + £42,850 + £43,670 = £128,190. NPV = £128,190 - £120,000 = £8,190.",
      "hint": "Multiply each year's flow by its factor, add them, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.2.2c",
      "skill": "quant",
      "q": "Launching a product costs £90,000. Success has a probability of 0.65 and brings revenue of £260,000. Failure brings revenue of £40,000. The alternative is to invest the £90,000 for a guaranteed return of £12,000. By how much is the expected net gain from launching higher than the alternative?",
      "answer": 81000.0,
      "unit": "£",
      "working": "Expected value = 0.65 x 260,000 + 0.35 x 40,000 = £183,000. Net gain = £183,000 - £90,000 = £93,000. Difference = £93,000 - £12,000 = £81,000.",
      "hint": "Net gain = expected value - the cost of that option. The £12,000 is the other option's gain, not a cost to take off first."
     },
     {
      "type": "calc",
      "topic": "3.2.2c",
      "skill": "quant",
      "q": "A launch costs £100,000. Without research, success has a probability of 0.5 (revenue £300,000) and failure brings £60,000. Research costs £20,000 and raises the probability of success to 0.75. Calculate how much the research adds to the expected net gain.",
      "answer": 40000.0,
      "unit": "£",
      "working": "Without: 0.5 x 300,000 + 0.5 x 60,000 - 100,000 = £80,000. With: 0.75 x 300,000 + 0.25 x 60,000 - 120,000 = £120,000. Research adds £40,000.",
      "hint": "With research the total cost is £120,000. Work out both net gains, then compare."
     },
     {
      "type": "calc",
      "topic": "3.2.2c",
      "skill": "quant",
      "q": "Option A costs £80,000. Success brings revenue of £250,000 and failure brings £50,000. Option B has an expected net gain of £50,000. What probability of success would make Option A's expected net gain exactly equal to Option B's? Give it as a decimal, for example 0.35.",
      "answer": 0.4,
      "unit": "",
      "working": "p x 250,000 + (1 - p) x 50,000 - 80,000 = 50,000. 200,000p + 50,000 = 130,000. p = 0.4.",
      "hint": "Call the probability p, so failure is (1 - p). Set up the net gain and make it equal to £50,000."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A business has an opening balance of £3,000 in January. January inflows are £18,000 and outflows are £24,500. February outflows are £19,000. It wants a closing balance of at least £2,000 at the end of February. Calculate the minimum cash inflows needed in February.",
      "answer": 24500.0,
      "unit": "£",
      "working": "January closing = 3,000 + 18,000 - 24,500 = -£3,500. February: -3,500 + inflows - 19,000 = 2,000, so inflows = £24,500.",
      "hint": "Finish January first. Its closing balance is February's opening balance, and it is negative."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A business ends March with a closing balance of £6,400. March inflows were £21,000 and outflows £26,300. February's net cash flow was -£4,200. Calculate the opening balance for February.",
      "answer": 15900.0,
      "unit": "£",
      "working": "March opening = 6,400 - 21,000 + 26,300 = £11,700, which is February's closing. February opening = 11,700 + 4,200 = £15,900.",
      "hint": "Work back one month at a time: opening = closing - net cash flow."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A builder agrees a £36,000 job. The customer pays a 30% deposit in May and the rest in July. Materials of £14,000 are paid in May and labour of £9,000 in June. Calculate the net cash flow from the job in May. Put a minus sign in front if negative.",
      "answer": -3200.0,
      "unit": "£",
      "working": "May inflow = 30% x £36,000 = £10,800. Outflow = £14,000. Net cash flow = -£3,200.",
      "hint": "Only count money that actually comes in or goes out in May."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has total equity of £600,000 and non-current liabilities of £250,000. It repays £50,000 of its long-term loan and issues £100,000 of new shares. Calculate the new gearing ratio.",
      "answer": 22.22,
      "unit": "%",
      "working": "NCL = £200,000. Equity = £700,000. Gearing = 200,000 / 900,000 x 100 = 22.2%.",
      "hint": "Change both NCL and equity, then use gearing = NCL / (equity + NCL) x 100."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has total equity of £450,000 and non-current liabilities of £150,000. How much new long-term borrowing would raise its gearing to exactly 40%?",
      "answer": 150000.0,
      "unit": "£",
      "working": "(150,000 + x) / (600,000 + x) = 0.4. 150,000 + x = 240,000 + 0.4x. 0.6x = 90,000. x = £150,000.",
      "hint": "The new loan goes on the top AND the bottom of the gearing fraction. Call it x and solve."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has gearing of 40%, non-current liabilities of £320,000 and ROCE of 15%. Calculate its operating profit.",
      "answer": 120000.0,
      "unit": "£",
      "working": "Capital employed = £320,000 / 0.4 = £800,000. Operating profit = 15% x £800,000 = £120,000.",
      "hint": "Use gearing to find capital employed first."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has operating profit of £96,000, total equity of £500,000 and non-current liabilities of £300,000. It takes a new £200,000 loan and invests it, raising operating profit by £18,000. Calculate the new ROCE.",
      "answer": 11.4,
      "unit": "%",
      "working": "New capital employed = £1,000,000. New operating profit = £114,000. ROCE = 11.4%.",
      "hint": "The loan increases capital employed as well as profit."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "Current assets are £84,000 (cash £20,000, inventory £34,000, receivables £30,000). Current liabilities are £48,000 (payables £36,000, overdraft £12,000). The business buys £9,000 of inventory on credit, sells inventory that cost £6,000 for £10,000 cash, then uses £12,000 of cash to clear the overdraft. Calculate the new current ratio (the number before :1).",
      "answer": 1.89,
      "unit": ":1",
      "working": "Current assets = 84,000 + 9,000 - 6,000 + 10,000 - 12,000 = £85,000. Current liabilities = 48,000 + 9,000 - 12,000 = £45,000. Ratio = 1.89:1.",
      "hint": "Take each transaction in turn and write down what happens to current assets and current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2c",
      "skill": "quant",
      "q": "A business has revenue of £1,095,000. It cuts its receivables days from 45 to 30. Calculate how much cash this releases.",
      "answer": 45000.0,
      "unit": "£",
      "working": "Receivables fall by 15 days of revenue: £1,095,000 x 15 / 365 = £45,000.",
      "hint": "Work out receivables at 45 days and at 30 days, or go straight to the 15-day difference."
     },
     {
      "type": "calc",
      "topic": "3.7.2c",
      "skill": "quant",
      "q": "A business has cost of sales of £960,000 and an inventory turnover of 8 times. Opening inventory was £130,000. Calculate closing inventory.",
      "answer": 110000.0,
      "unit": "£",
      "working": "Average inventory = £960,000 / 8 = £120,000. Opening + closing = £240,000. Closing = £110,000.",
      "hint": "Average inventory = cost of sales / inventory turnover."
     },
     {
      "type": "calc",
      "topic": "3.6.2",
      "skill": "quant",
      "q": "A business had 320 staff at the start of the year and 280 at the end. Labour turnover was 15%. How many staff left during the year?",
      "answer": 45.0,
      "unit": "staff",
      "working": "Average staff = 300. 15% x 300 = 45.",
      "hint": "Labour turnover uses average staff."
     },
     {
      "type": "calc",
      "topic": "3.6.2",
      "skill": "quant",
      "q": "A hotel group employs 85 staff on an average salary of £26,000. Its revenue is £5.2m. Calculate employee costs as a percentage of turnover.",
      "answer": 42.5,
      "unit": "%",
      "working": "Employee costs = 85 x £26,000 = £2,210,000. 2,210,000 / 5,200,000 x 100 = 42.5%.",
      "hint": "Turnover here means revenue."
     },
     {
      "type": "calc",
      "topic": "3.4.2",
      "skill": "quant",
      "q": "A factory can make 18,000 units a month and runs at 75% capacity utilisation. It wins a contract for another 3,600 units a month and increases its capacity by 20%. Calculate the new capacity utilisation. Give your answer to 2 decimal places.",
      "answer": 79.17,
      "unit": "%",
      "working": "Current output = 13,500. New output = 17,100. New capacity = 21,600. 17,100 / 21,600 x 100 = 79.17%.",
      "hint": "Find current output from the 75% first."
     },
     {
      "type": "calc",
      "topic": "3.7.5a",
      "skill": "quant",
      "q": "A UK firm imports a component costing $54,000. The exchange rate falls from £1 = $1.35 to £1 = $1.20. Calculate the percentage change in its cost in pounds.",
      "answer": 12.5,
      "unit": "%",
      "working": "Before: £40,000. After: £45,000. Change = +12.5%.",
      "hint": "Dollars to pounds: divide by the rate."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A business has revenue of £2.4m, a gross profit margin of 42% and operating expenses of £780,000. Calculate its operating profit margin.",
      "answer": 9.5,
      "unit": "%",
      "working": "Gross profit = £1,008,000. Operating profit = £228,000. OPM = 228,000 / 2,400,000 x 100 = 9.5%.",
      "hint": "Gross profit from the margin, then take off operating expenses."
     },
     {
      "type": "calc",
      "topic": "3.5.2d",
      "skill": "quant",
      "q": "A product sells for £45 with a variable cost of £27. Fixed costs are £162,000. Fixed costs rise by 10% and the variable cost rises by £3. Calculate the new break-even output.",
      "answer": 11880.0,
      "unit": "units",
      "working": "New fixed costs = £178,200. New contribution = £45 - £30 = £15. Break-even = 178,200 / 15 = 11,880 units.",
      "hint": "Both the fixed costs and the contribution per unit change."
     },
     {
      "type": "calc",
      "topic": "3.10.3b",
      "skill": "quant",
      "q": "A project has these activities, in weeks: A 4 (start); B 3 (after A); C 6 (after A); D 5 (after B); E 1 (after C); F 4 (after D and E). Activity C is delayed by 3 weeks. Calculate the new minimum time to complete the project.",
      "answer": 18.0,
      "unit": "weeks",
      "working": "Before: A-B-D-F = 16, A-C-E-F = 15. After the delay C takes 9: A-C-E-F = 4 + 9 + 1 + 4 = 18 weeks.",
      "hint": "C had 1 week of float, so a 3-week delay pushes the project back. Recheck the longest path."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-pn-0",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Calculation Practice Set 2 - overall",
    "mark": "153/185",
    "level": "",
    "well": "Big improvement from Set 1 (105/163). Working backwards from receivables days, payables days, ROCE and gearing is now secure. Current ratio after transactions all correct.",
    "improve": "Marks lost mainly for missing working on multi-step questions and for parts of questions left unfinished (36b, 42b, 28c)."
   },
   {
    "qid": "seed-pn-1",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Working backwards from ratios: receivables days, payables days, ROCE, gearing",
    "mark": "12/12",
    "level": "",
    "well": "Every rearranged ratio answer was correct.",
    "improve": "Write the rearranging step down every time, especially for gearing."
   },
   {
    "qid": "seed-pn-2",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Current ratio after transactions",
    "mark": "14/14",
    "level": "",
    "well": "Every transaction was handled correctly, including the bad debt and the long-term loan.",
    "improve": "On the multi-transaction question, show each change to current assets and current liabilities."
   },
   {
    "qid": "seed-pn-3",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Gearing from balance sheet data",
    "mark": "8/8",
    "level": "",
    "well": "Picked out NCL and total equity correctly and gearing before and after was right.",
    "improve": "Explain why gearing changed when asked (part c was left blank)."
   },
   {
    "qid": "seed-pn-4",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Mark-up and margin pricing",
    "mark": "6/6",
    "level": "",
    "well": "Selling price from mark-up and from margin both right.",
    "improve": "Show the margin working (cost / 0.70) rather than just the answer."
   },
   {
    "qid": "seed-pn-5",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow forecasts: working backwards",
    "mark": "4/5",
    "level": "",
    "well": "Minimum inflows, outflows and opening balance worked back correctly.",
    "improve": "Left the February minimum inflows blank. Carry January's closing balance into February."
   },
   {
    "qid": "seed-pn-6",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Break-even output and margin of safety",
    "mark": "7/7",
    "level": "",
    "well": "Break-even from margin of safety, contribution from margin of safety and MOS % all right.",
    "improve": "Write final answers on the answer lines, not only in the working."
   },
   {
    "qid": "seed-pn-7",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Decision trees and expected net gain",
    "mark": "2/3",
    "level": "",
    "well": "Three-option and market research trees were right.",
    "improve": "Net gain = expected value - cost of that option. The £8,000 alternative return is compared afterwards, not taken off. Part (b) left blank."
   },
   {
    "qid": "seed-pn-8",
    "t": "2026-11-13T15:30:00.000Z",
    "tool": "calcpractice",
    "question": "Mixed: operating profit margin, NPV, capacity utilisation, labour productivity, variances, payback period, ratios",
    "mark": "16/17",
    "level": "",
    "well": "NPV at two rates, variances, capacity utilisation and labour productivity all right.",
    "improve": "Payback for Project X was given as 3 years 3 months; it pays back at exactly 3 years. Label which project each working belongs to."
   }
  ]
 }
];
