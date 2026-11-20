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
 },
 /* KAT MCQ paper sheets and cash flow and profit pack, marked 19 Nov 2026, with follow-up sets */
 {
  "id": "seed-2026-11-19-jeeval",
  "match": "jeeval",
  "work": {
   "id": "w-jeeval-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "These questions are on the parts of the cash flow and profit pack you lost marks on: negative balances, building a forecast month by month, profit against cash, what counts in operating profit and profit for the year, mark-ups and grossing up for tax. Write the formula down first each time.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A shop has an opening balance of £1800. In the month its cash inflows are £22 400 and its cash outflows are £27 150. Calculate its closing balance.",
      "answer": -2950,
      "unit": "£",
      "working": "Net cash flow = 22 400 – 27 150 = –4750. Closing = 1800 + (–4750) = –£2950.",
      "hint": "Work out the net cash flow first, then add it to the opening balance. The answer can be negative."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Fenwick Garden Care has an opening balance of £4000 on 1 January. Its cash inflows for January, February and March are £15 000, £12 000 and £18 000. Its cash outflows are £16 500, £14 200 and £15 100. Calculate its closing balance at the end of March.",
      "answer": 3200,
      "unit": "£",
      "working": "Net cash flows: –1500, –2200, +2900. Closing balances: Jan £2500, Feb £300, Mar £3200. Each month's closing balance is the next month's opening balance.",
      "hint": "Do it one month at a time. January's closing balance becomes February's opening balance."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Mason Tiles gets 30% of each month's sales in cash in the month of sale and the other 70% one month later. Sales were £20 000 in December, £24 000 in January and £30 000 in February. Calculate its cash inflow from sales in February.",
      "answer": 25800,
      "unit": "£",
      "working": "30% of February sales = £9000. 70% of January sales = £16 800. Total = £25 800. December sales are paid in January, so they are not part of February.",
      "hint": "February's cash comes from two months: some of February's sales and the rest of January's."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its profit for June.",
      "answer": 7000,
      "unit": "£",
      "working": "Profit uses sales made, not cash received: 45 000 – 38 000 = £7000. (Its net cash flow would be 31 000 – 38 000 = –£7000.)",
      "hint": "Profit: sales made in the month. Cash flow: cash actually received."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its net cash flow for June.",
      "answer": -7000,
      "unit": "£",
      "working": "Net cash flow uses cash received: 31 000 – 38 000 = –£7000. The business made a profit of £7000 but cash fell.",
      "hint": "Only count money that actually came in during June."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "Data for Kestrel Freight (£000): revenue 3200, cost of sales 1900, administration expenses 420, selling costs 260, interest paid 75, tax 90. Calculate its operating profit in £.",
      "answer": 620000,
      "unit": "£",
      "working": "Gross profit = 3200 – 1900 = 1300. Operating profit = 1300 – 420 – 260 = 620, so £620 000. Interest and tax come after operating profit.",
      "hint": "Interest is not an operating expense. Stop before interest and tax."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Using the Kestrel Freight data (£000: revenue 3200, cost of sales 1900, administration 420, selling costs 260, interest 75, tax 90), calculate the profit for the year margin. Give your answer to two decimal places.",
      "answer": 14.219,
      "unit": "%",
      "working": "Operating profit 620 – interest 75 – tax 90 = 455. 455 ÷ 3200 × 100 = 14.219% = 14.22%.",
      "hint": "Profit for the year = operating profit – finance costs – tax."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A gift shop sets its prices by adding 40% to the cost of sales. Its revenue last year was £350 000. Calculate its gross profit margin to two decimal places.",
      "answer": 28.571,
      "unit": "%",
      "working": "Revenue = cost × 1.4, so cost of sales = 350 000 ÷ 1.4 = £250 000. Gross profit = £100 000. Margin = 100 000 ÷ 350 000 × 100 = 28.57%, not 40%.",
      "hint": "A 40% mark-up is on cost. The margin is gross profit as a percentage of revenue, so it is lower than 40%."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Corner Kitchen sold 3500 meals last month at an average of £12. Food costs (cost of sales) are 35% of revenue. Its other costs for the month were £16 800. Calculate its operating profit margin.",
      "answer": 25,
      "unit": "%",
      "working": "Revenue = £42,000. Cost of sales = £14,700. Gross profit = £27,300. Operating profit = 27,300 – 16 800 = £10,500. 10,500 ÷ 42,000 × 100 = 25%.",
      "hint": "Profit goes on top of the fraction, revenue underneath. A margin is never bigger than 100%."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "A business made a profit for the year of £60 000 after paying tax at 25% of its profit before tax. Calculate its profit before tax.",
      "answer": 80000,
      "unit": "£",
      "working": "Profit for the year is 75% of profit before tax, so PBT = 60 000 ÷ 0.75 = £80 000. Check: 25% of 80 000 = 20 000; 80 000 – 20 000 = 60 000.",
      "hint": "Do not take 25% of £60 000. £60 000 is what is left after tax, so it is 75% of the figure you want."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-jeeval",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "48/74",
    "level": "",
    "well": "Credit sales timing (Q4), gross profit margin (Q5), working back from a margin (Q8, Q9), percentage change and margins (Q11), the overdraft question (Q13), Q14 and all six missing forecast figures (Q16) were right.",
    "improve": "Negative balances: Q1(b) and Q3 had sign errors. Build forecasts month by month (Q2). Profit uses sales made, not cash received (Q12b). Operating profit leaves out interest; profit for the year then takes off finance costs and tax (Q6, Q7). Mark-up (Q15) and grossing up for tax (Q20) need practice. Q19: remember the opening balance."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-karam",
  "match": "karam",
  "work": {
   "id": "w-karam-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "Full marks on the cash flow and profit pack, so this is a stretch set: a harder forecast, a longer working-back question, and the ratio and investment appraisal calculations that came up on the KAT practice.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Dale Engineering had revenue of £900 000, an operating profit margin of 8% and operating expenses (not including cost of sales) of £225 000. Calculate its cost of sales.",
      "answer": 603000,
      "unit": "£",
      "working": "Operating profit = 8% × 900 000 = £72,000. Gross profit = 72,000 + 225 000 = £297,000. Cost of sales = 900 000 – 297,000 = £603,000.",
      "hint": "Find operating profit, add back the operating expenses to get gross profit, then take gross profit off revenue."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A gift shop sets its prices by adding 40% to the cost of sales. Its revenue last year was £350 000. Calculate its gross profit margin to two decimal places.",
      "answer": 28.571,
      "unit": "%",
      "working": "Revenue = cost × 1.4, so cost of sales = 350 000 ÷ 1.4 = £250 000. Gross profit = £100 000. Margin = 100 000 ÷ 350 000 × 100 = 28.57%, not 40%.",
      "hint": "A 40% mark-up is on cost. The margin is gross profit as a percentage of revenue, so it is lower than 40%."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has current assets of £300 000 and current liabilities of £200 000. It uses £40 000 of cash to pay some of its suppliers (payables). Calculate its new current ratio to two decimal places.",
      "answer": 1.625,
      "unit": ":1",
      "working": "Current assets fall to £260 000 and current liabilities fall to £160 000. 260 ÷ 160 = 1.625, so 1.63 : 1.",
      "hint": "Paying suppliers with cash changes both figures."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-karam",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "74/74",
    "level": "",
    "well": "Full marks (74/74). Every step was set out clearly, including the forecast with credit sales and the tax gross-up, which you corrected yourself.",
    "improve": "Nothing lost. Keep setting out multi-step questions the same way."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-pravneet",
  "match": "pravneet",
  "work": {
   "id": "w-pravneet-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "You only dropped marks on Q7 in the cash flow and profit pack, so this set starts with the income statement order (operating profit, then finance costs and tax) and then stretches you on harder forecasts and ratios.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "Data for Kestrel Freight (£000): revenue 3200, cost of sales 1900, administration expenses 420, selling costs 260, interest paid 75, tax 90. Calculate its operating profit in £.",
      "answer": 620000,
      "unit": "£",
      "working": "Gross profit = 3200 – 1900 = 1300. Operating profit = 1300 – 420 – 260 = 620, so £620 000. Interest and tax come after operating profit.",
      "hint": "Interest is not an operating expense. Stop before interest and tax."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Using the Kestrel Freight data (£000: revenue 3200, cost of sales 1900, administration 420, selling costs 260, interest 75, tax 90), calculate the profit for the year margin. Give your answer to two decimal places.",
      "answer": 14.219,
      "unit": "%",
      "working": "Operating profit 620 – interest 75 – tax 90 = 455. 455 ÷ 3200 × 100 = 14.219% = 14.22%.",
      "hint": "Profit for the year = operating profit – finance costs – tax."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has current assets of £300 000 and current liabilities of £200 000. It uses £40 000 of cash to pay some of its suppliers (payables). Calculate its new current ratio to two decimal places.",
      "answer": 1.625,
      "unit": ":1",
      "working": "Current assets fall to £260 000 and current liabilities fall to £160 000. 260 ÷ 160 = 1.625, so 1.63 : 1.",
      "hint": "Paying suppliers with cash changes both figures."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-pravneet",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "72/74",
    "level": "",
    "well": "Everything except Q7 was right, including both forecasts and the tax gross-up.",
    "improve": "Q7: finance costs come after operating profit. You took them off twice and left the answer box blank. Write MCQ answers as a letter (Q18)."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-prabhleen",
  "match": "prabhleen",
  "work": {
   "id": "w-prabhleen-kat-1911",
   "title": "Follow-up: cash flow, profit and KAT gaps",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow, profit and KAT gaps",
    "intro": "This set covers both the cash flow and profit pack and the KAT multiple-choice quiz. The biggest gaps on the quiz were investment appraisal and ratios (Unit 3.7: 2 out of 10), elasticity and reverse percentages. On the pack, watch which way up the fraction goes and keep the minus signs. Work every calculation out on paper before typing the answer.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Penny Lane Cycles has an opening balance of £3000 and an overdraft limit of £6000. Its net cash flows for the next four months are (£4000), (£3500), (£2000) and £5000. Calculate by how much the overdraft limit is exceeded in the worst month.",
      "answer": 500,
      "unit": "£",
      "working": "Closing balances: –£1000, –£4500, –£6500, –£1500. The lowest is –£6500 in month 3, against a limit of –£6000, so the limit is exceeded by £500.",
      "hint": "Work out each month's closing balance, find the lowest, and compare it with –£6000."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Corner Kitchen sold 3500 meals last month at an average of £12. Food costs (cost of sales) are 35% of revenue. Its other costs for the month were £16 800. Calculate its operating profit margin.",
      "answer": 25,
      "unit": "%",
      "working": "Revenue = £42,000. Cost of sales = £14,700. Gross profit = £27,300. Operating profit = 27,300 – 16 800 = £10,500. 10,500 ÷ 42,000 × 100 = 25%.",
      "hint": "Profit goes on top of the fraction, revenue underneath. A margin is never bigger than 100%."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.2.2c",
      "skill": "quant",
      "q": "Launching a new service costs £40 000. There is a 0.7 chance of a pay-off of £100 000 and a 0.3 chance of a pay-off of £10 000. Calculate the net gain.",
      "answer": 33000,
      "unit": "£",
      "working": "Expected value = 70 000 + 3000 = £73 000. Net gain = 73 000 – 40 000 = £33 000.",
      "hint": "Net gain = expected value – cost."
     },
     {
      "type": "mcq",
      "topic": "3.2.2b",
      "skill": "knowledge",
      "q": "A student can either take a Saturday job paying £60, help at a family shop for £45, or revise. She chooses to revise. What is the opportunity cost?",
      "options": [
       "£105",
       "£15",
       "£60",
       "£45"
      ],
      "answer": 2,
      "explain": "Opportunity cost is the next best alternative given up, which is the £60 job. You do not add the alternatives together, because she could only have done one."
     },
     {
      "type": "calc",
      "topic": "3.3.2e",
      "skill": "quant",
      "q": "A product earns revenue of £200 000. The business cuts its price by 10%. The price elasticity of demand is –1.8. Calculate the new revenue.",
      "answer": 212400,
      "unit": "£",
      "working": "Quantity rises by 1.8 × 10% = 18%. New revenue = 200 000 × 0.9 × 1.18 = £212 400.",
      "hint": "Apply both changes: price × 0.9 and quantity × 1.18."
     },
     {
      "type": "calc",
      "topic": "3.3.2f",
      "skill": "quant",
      "q": "A business sells 12 000 units a year. The income elasticity of demand is –0.8. Real incomes rise by 4%. Calculate the new sales in units.",
      "answer": 11616,
      "unit": "units",
      "working": "Change in demand = –0.8 × 4% = –3.2%. 12 000 × 0.968 = 11 616 units.",
      "hint": "Negative YED: incomes up, demand down."
     },
     {
      "type": "calc",
      "topic": "3.3.2c",
      "skill": "quant",
      "q": "A business's revenue rose by 8% this year to £648 000. Calculate last year's revenue.",
      "answer": 600000,
      "unit": "£",
      "working": "648 000 ÷ 1.08 = £600 000. Check: 600 000 × 1.08 = 648 000.",
      "hint": "Divide by 1.08. Do not take 8% off this year's figure."
     },
     {
      "type": "calc",
      "topic": "3.5.2b",
      "skill": "quant",
      "q": "A business budgeted for revenue of £180 000 and costs of £140 000. Actual revenue was 5% above budget and actual costs were 10% above budget. Calculate the profit variance. Give an adverse variance as a negative number.",
      "answer": -5000,
      "unit": "£",
      "working": "Budgeted profit £40 000. Actual = 189 000 – 154 000 = £35 000. Variance = –£5000 (adverse).",
      "hint": "Profit lower than budget = adverse."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £80 000. Its net returns are £25 000, £30 000, £35 000 and £30 000 over four years. Calculate its average rate of return (ARR).",
      "answer": 12.5,
      "unit": "%",
      "working": "Total returns £120 000 – cost £80 000 = £40 000 profit. Average per year = £10 000. ARR = 10 000 ÷ 80 000 × 100 = 12.5%.",
      "hint": "Take off the initial cost before you average."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £50 000. Net cash flows are £20 000 in Year 1, £18 000 in Year 2 and £24 000 in Year 3, spread evenly through each year. Calculate the payback period in months.",
      "answer": 30,
      "unit": "months",
      "working": "After 2 years: £38 000. Still needed: £12 000. 12 000 ÷ 24 000 × 12 = 6 months. Payback = 2 years 6 months = 30 months.",
      "hint": "Find what is still needed after Year 2, then divide by the Year 3 cash flow (not Year 2's)."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has current assets of £300 000 and current liabilities of £200 000. It uses £40 000 of cash to pay some of its suppliers (payables). Calculate its new current ratio to two decimal places.",
      "answer": 1.625,
      "unit": ":1",
      "working": "Current assets fall to £260 000 and current liabilities fall to £160 000. 260 ÷ 160 = 1.625, so 1.63 : 1.",
      "hint": "Paying suppliers with cash changes both figures."
     },
     {
      "type": "calc",
      "topic": "3.7.5a",
      "skill": "quant",
      "q": "A UK firm sells a product to the USA for £80 and keeps its sterling price the same. The exchange rate changes from £1 = $1.30 to £1 = $1.20. Calculate the new price in dollars.",
      "answer": 96,
      "unit": "$",
      "working": "£80 × 1.20 = $96 (it was $104). The pound has weakened, so UK exports are cheaper abroad.",
      "hint": "To turn pounds into dollars, multiply by the exchange rate."
     },
     {
      "type": "mcq",
      "topic": "3.8.1b",
      "skill": "knowledge",
      "q": "A coffee chain introduces a loyalty app so that its existing customers buy its existing drinks more often. According to Ansoff, this is:",
      "options": [
       "market penetration.",
       "diversification.",
       "product development.",
       "market development."
      ],
      "answer": 0,
      "explain": "Existing products, existing customers: market penetration."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-prabhleen",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "63/74",
    "level": "",
    "well": "Both forecasts (Q2, Q19), the profit margins (Q5–Q7), Q9, Q11, Q12 and Q14 were right.",
    "improve": "Check which way up the fraction goes: profit ÷ revenue (Q10, Q17). Keep minus signs and brackets on negative figures (Q1, Q16). The two parts of a cash inflow are added, not subtracted (Q4). Q8: place value. Q13(b) was left blank. Q20: work up the income statement by adding expenses back, not taking them off."
   }
  ],
  "catmcq": {
   "answers": "BCCDDBABDDBACBACCAACCADDCBDCAACCBBCDACBDCABCBDBDACCACCCBDBADABCDACAAACBDDBACACAB",
   "t": "2026-11-19T14:00:00.000Z",
   "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
  }
 },
 {
  "id": "seed-2026-11-19-sukhchain",
  "match": "sukhchain",
  "work": {
   "id": "w-sukhchain-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "Very strong pack. This set checks the two places you slipped (rearranging with negatives and the overdraft question) and then stretches you on longer forecasts, working back and ratios.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Penny Lane Cycles has an opening balance of £3000 and an overdraft limit of £6000. Its net cash flows for the next four months are (£4000), (£3500), (£2000) and £5000. Calculate by how much the overdraft limit is exceeded in the worst month.",
      "answer": 500,
      "unit": "£",
      "working": "Closing balances: –£1000, –£4500, –£6500, –£1500. The lowest is –£6500 in month 3, against a limit of –£6000, so the limit is exceeded by £500.",
      "hint": "Work out each month's closing balance, find the lowest, and compare it with –£6000."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A gift shop sets its prices by adding 40% to the cost of sales. Its revenue last year was £350 000. Calculate its gross profit margin to two decimal places.",
      "answer": 28.571,
      "unit": "%",
      "working": "Revenue = cost × 1.4, so cost of sales = 350 000 ÷ 1.4 = £250 000. Gross profit = £100 000. Margin = 100 000 ÷ 350 000 × 100 = 28.57%, not 40%.",
      "hint": "A 40% mark-up is on cost. The margin is gross profit as a percentage of revenue, so it is lower than 40%."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-sukhchain",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "72/74",
    "level": "",
    "well": "All the profit and margin questions, both forecasts and the tax gross-up were right.",
    "improve": "Two arithmetic slips (Q13 October, Q14). Q3: the answer was right but the rearranging had a sign error, so check by putting your answer back in."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-sanchipreet",
  "match": "sanchipreet",
  "work": {
   "id": "w-sanchipreet-kat-1911",
   "title": "Follow-up: cash flow, profit and KAT gaps",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow, profit and KAT gaps",
    "intro": "Very strong on both the pack and the KAT quiz (79/80). This set targets the tax gross-up from Q20, careful copying in multi-step margins, the one quiz question you missed (correlation), and some stretch questions.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "A business made a profit for the year of £60 000 after paying tax at 25% of its profit before tax. Calculate its profit before tax.",
      "answer": 80000,
      "unit": "£",
      "working": "Profit for the year is 75% of profit before tax, so PBT = 60 000 ÷ 0.75 = £80 000. Check: 25% of 80 000 = 20 000; 80 000 – 20 000 = 60 000.",
      "hint": "Do not take 25% of £60 000. £60 000 is what is left after tax, so it is 75% of the figure you want."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Corner Kitchen sold 3500 meals last month at an average of £12. Food costs (cost of sales) are 35% of revenue. Its other costs for the month were £16 800. Calculate its operating profit margin.",
      "answer": 25,
      "unit": "%",
      "working": "Revenue = £42,000. Cost of sales = £14,700. Gross profit = £27,300. Operating profit = 27,300 – 16 800 = £10,500. 10,500 ÷ 42,000 × 100 = 25%.",
      "hint": "Profit goes on top of the fraction, revenue underneath. A margin is never bigger than 100%."
     },
     {
      "type": "mcq",
      "topic": "3.3.2d",
      "skill": "knowledge",
      "q": "Sales of umbrellas and sales of hot drinks at a station both rise on rainy days. Which statement is correct?",
      "options": [
       "Buying umbrellas causes people to buy hot drinks.",
       "There is no correlation.",
       "There is a positive correlation, but that does not prove one causes the other.",
       "There is a negative correlation."
      ],
      "answer": 2,
      "explain": "Both rise together, so the correlation is positive. A third factor (rain) drives both, which shows why correlation does not prove causation."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Dale Engineering had revenue of £900 000, an operating profit margin of 8% and operating expenses (not including cost of sales) of £225 000. Calculate its cost of sales.",
      "answer": 603000,
      "unit": "£",
      "working": "Operating profit = 8% × 900 000 = £72,000. Gross profit = 72,000 + 225 000 = £297,000. Cost of sales = 900 000 – 297,000 = £603,000.",
      "hint": "Find operating profit, add back the operating expenses to get gross profit, then take gross profit off revenue."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-sanchipreet",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "71/74",
    "level": "",
    "well": "All the cash flow questions, including the full forecast, and all the margin questions were right.",
    "improve": "Q20: profit for the year is 75% of profit before tax, so divide by 0.75, not 1.25. Q10: revenue was copied as 146 000. Show working every time, even when you can do it in your head."
   }
  ],
  "catmcq": {
   "answers": "BCCDABABDDABCBACDAACBDADABDCABCCABDDACBACABCDBBDACCACBCBDAADBCDACBDBACBDDBACACDD",
   "t": "2026-11-19T14:00:00.000Z",
   "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
  }
 },
 {
  "id": "seed-2026-11-19-anhadvir",
  "match": "anhadvir",
  "work": {
   "id": "w-anhadvir-kat-1911",
   "title": "Follow-up: cash flow, profit and KAT gaps",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow, profit and KAT gaps",
    "intro": "Strong on both. This set goes back over the KAT quiz questions you missed (dividend units, opportunity cost, break-even and contribution, delayering, cash flow methods, ARR and exchange rates) and the Q11 slip on the pack, where you answered for revenue instead of operating profit.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A business's operating profit rose from £84 000 to £96 600, while its revenue rose from £700 000 to £840 000. Calculate the percentage change in operating profit.",
      "answer": 15,
      "unit": "%",
      "working": "(96 600 – 84 000) ÷ 84 000 × 100 = 15%. (Revenue rose by 20%, which is not what was asked.)",
      "hint": "Read the question: it asks about operating profit, not revenue."
     },
     {
      "type": "calc",
      "topic": "3.1.2c",
      "skill": "quant",
      "q": "A plc has 25 million shares and pays total dividends of £3 million. Calculate the dividend per share in pence.",
      "answer": 12,
      "unit": "p",
      "working": "£3 000 000 ÷ 25 000 000 = £0.12 = 12p.",
      "hint": "Check your units: £0.12 is 12p."
     },
     {
      "type": "mcq",
      "topic": "3.2.2b",
      "skill": "knowledge",
      "q": "A student can either take a Saturday job paying £60, help at a family shop for £45, or revise. She chooses to revise. What is the opportunity cost?",
      "options": [
       "£45",
       "£15",
       "£105",
       "£60"
      ],
      "answer": 3,
      "explain": "Opportunity cost is the next best alternative given up, which is the £60 job. You do not add the alternatives together, because she could only have done one."
     },
     {
      "type": "mcq",
      "topic": "3.5.2d",
      "skill": "analysis",
      "q": "A business raises its selling price by £2 and its variable cost per unit rises by £5. Fixed costs stay the same. What happens to its break-even output?",
      "options": [
       "It cannot be worked out",
       "It stays the same",
       "It falls",
       "It rises"
      ],
      "answer": 3,
      "explain": "Contribution per unit falls by £3, so more units are needed to cover the same fixed costs. Break-even rises."
     },
     {
      "type": "mcq",
      "topic": "3.6.3b",
      "skill": "knowledge",
      "q": "A business removes one layer of middle management but keeps the same number of staff. What is the most likely effect?",
      "options": [
       "There are more levels of hierarchy",
       "Decisions are more centralised",
       "Spans of control get narrower",
       "Spans of control get wider"
      ],
      "answer": 3,
      "explain": "With fewer managers for the same number of staff, each remaining manager has more people reporting to them, so spans widen."
     },
     {
      "type": "mcq",
      "topic": "3.5.4a",
      "skill": "analysis",
      "q": "Which of the following improves cash flow but is likely to reduce profit?",
      "options": [
       "Raising the price of a product with inelastic demand",
       "Debt factoring",
       "Selling more products at a higher price",
       "Cutting wastage"
      ],
      "answer": 1,
      "explain": "The factor pays most of the invoice value straight away (better cash flow), but charges a fee, so profit falls."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £80 000. Its net returns are £25 000, £30 000, £35 000 and £30 000 over four years. Calculate its average rate of return (ARR).",
      "answer": 12.5,
      "unit": "%",
      "working": "Total returns £120 000 – cost £80 000 = £40 000 profit. Average per year = £10 000. ARR = 10 000 ÷ 80 000 × 100 = 12.5%.",
      "hint": "Take off the initial cost before you average."
     },
     {
      "type": "calc",
      "topic": "3.7.5a",
      "skill": "quant",
      "q": "A UK firm sells a product to the USA for £80 and keeps its sterling price the same. The exchange rate changes from £1 = $1.30 to £1 = $1.20. Calculate the new price in dollars.",
      "answer": 96,
      "unit": "$",
      "working": "£80 × 1.20 = $96 (it was $104). The pound has weakened, so UK exports are cheaper abroad.",
      "hint": "To turn pounds into dollars, multiply by the exchange rate."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-anhadvir",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "72/74",
    "level": "",
    "well": "Everything except Q11(a) was right, including both forecasts and the tax gross-up.",
    "improve": "Q11(a) asked for the percentage change in operating profit. You worked out the change in revenue. Underline what the question asks for."
   }
  ],
  "catmcq": {
   "answers": "BCADABAADDABCBACCAACBDADCBDCABCCABDDACBACABCDBBDDDCACBCBDACDACDACBDAACBDDBACACDD",
   "t": "2026-11-19T14:00:00.000Z",
   "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
  }
 },
 {
  "id": "seed-2026-11-19-jeevan",
  "match": "jeevan",
  "work": {
   "id": "w-jeevan-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "This set is mostly cash flow: building a forecast month by month, credit sales, negative balances, profit against cash and the overdraft limit. It finishes with grossing up for tax (Q20) and rounding to two decimal places.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Fenwick Garden Care has an opening balance of £4000 on 1 January. Its cash inflows for January, February and March are £15 000, £12 000 and £18 000. Its cash outflows are £16 500, £14 200 and £15 100. Calculate its closing balance at the end of March.",
      "answer": 3200,
      "unit": "£",
      "working": "Net cash flows: –1500, –2200, +2900. Closing balances: Jan £2500, Feb £300, Mar £3200. Each month's closing balance is the next month's opening balance.",
      "hint": "Do it one month at a time. January's closing balance becomes February's opening balance."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Mason Tiles gets 30% of each month's sales in cash in the month of sale and the other 70% one month later. Sales were £20 000 in December, £24 000 in January and £30 000 in February. Calculate its cash inflow from sales in February.",
      "answer": 25800,
      "unit": "£",
      "working": "30% of February sales = £9000. 70% of January sales = £16 800. Total = £25 800. December sales are paid in January, so they are not part of February.",
      "hint": "February's cash comes from two months: some of February's sales and the rest of January's."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its profit for June.",
      "answer": 7000,
      "unit": "£",
      "working": "Profit uses sales made, not cash received: 45 000 – 38 000 = £7000. (Its net cash flow would be 31 000 – 38 000 = –£7000.)",
      "hint": "Profit: sales made in the month. Cash flow: cash actually received."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its net cash flow for June.",
      "answer": -7000,
      "unit": "£",
      "working": "Net cash flow uses cash received: 31 000 – 38 000 = –£7000. The business made a profit of £7000 but cash fell.",
      "hint": "Only count money that actually came in during June."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Penny Lane Cycles has an opening balance of £3000 and an overdraft limit of £6000. Its net cash flows for the next four months are (£4000), (£3500), (£2000) and £5000. Calculate by how much the overdraft limit is exceeded in the worst month.",
      "answer": 500,
      "unit": "£",
      "working": "Closing balances: –£1000, –£4500, –£6500, –£1500. The lowest is –£6500 in month 3, against a limit of –£6000, so the limit is exceeded by £500.",
      "hint": "Work out each month's closing balance, find the lowest, and compare it with –£6000."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "A business made a profit for the year of £60 000 after paying tax at 25% of its profit before tax. Calculate its profit before tax.",
      "answer": 80000,
      "unit": "£",
      "working": "Profit for the year is 75% of profit before tax, so PBT = 60 000 ÷ 0.75 = £80 000. Check: 25% of 80 000 = 20 000; 80 000 – 20 000 = 60 000.",
      "hint": "Do not take 25% of £60 000. £60 000 is what is left after tax, so it is 75% of the figure you want."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
      "answer": 1125000,
      "unit": "£",
      "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
      "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Using the Kestrel Freight data (£000: revenue 3200, cost of sales 1900, administration 420, selling costs 260, interest 75, tax 90), calculate the operating profit margin. Give your answer to two decimal places.",
      "answer": 19.375,
      "unit": "%",
      "working": "Operating profit = 620. 620 ÷ 3200 × 100 = 19.375% = 19.38% to 2 d.p.",
      "hint": "Operating profit ÷ revenue × 100. Round only at the end."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-jeevan",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "60/74",
    "level": "",
    "well": "The profit and margin questions (Q5, Q7–Q10, Q14–Q17) were mostly right, with clear working.",
    "improve": "Q2: start with January and carry each closing balance forward. Q12(b) and Q13(b) were not done in your own work. Q19: finish the forecast (outflows, net cash flow and balances). Q20: tax is 25% of profit before tax, so divide by 0.75. Round to two decimal places when asked (Q6b)."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-tandrika",
  "match": "tandrika",
  "work": {
   "id": "w-tandrika-kat-1911",
   "title": "Follow-up: cash flow and profit",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow and profit",
    "intro": "Start with the cash flow basics: net cash flow = inflows – outflows, and closing balance = opening balance + net cash flow. The set then builds up to a three-month forecast, credit sales, profit against cash, and working back from a margin. Use the clue on any question you are stuck on.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A shop has an opening balance of £1800. In the month its cash inflows are £22 400 and its cash outflows are £27 150. Calculate its closing balance.",
      "answer": -2950,
      "unit": "£",
      "working": "Net cash flow = 22 400 – 27 150 = –4750. Closing = 1800 + (–4750) = –£2950.",
      "hint": "Work out the net cash flow first, then add it to the opening balance. The answer can be negative."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "A business starts the month with an overdraft (an opening balance of –£2500). Its net cash flow for the month is –£1800. Calculate its closing balance.",
      "answer": -4300,
      "unit": "£",
      "working": "Closing = –2500 + (–1800) = –£4300. Adding a negative makes the balance more negative.",
      "hint": "Adding a negative number makes the balance more negative."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Fenwick Garden Care has an opening balance of £4000 on 1 January. Its cash inflows for January, February and March are £15 000, £12 000 and £18 000. Its cash outflows are £16 500, £14 200 and £15 100. Calculate its closing balance at the end of March.",
      "answer": 3200,
      "unit": "£",
      "working": "Net cash flows: –1500, –2200, +2900. Closing balances: Jan £2500, Feb £300, Mar £3200. Each month's closing balance is the next month's opening balance.",
      "hint": "Do it one month at a time. January's closing balance becomes February's opening balance."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Mason Tiles gets 30% of each month's sales in cash in the month of sale and the other 70% one month later. Sales were £20 000 in December, £24 000 in January and £30 000 in February. Calculate its cash inflow from sales in February.",
      "answer": 25800,
      "unit": "£",
      "working": "30% of February sales = £9000. 70% of January sales = £16 800. Total = £25 800. December sales are paid in January, so they are not part of February.",
      "hint": "February's cash comes from two months: some of February's sales and the rest of January's."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its profit for June.",
      "answer": 7000,
      "unit": "£",
      "working": "Profit uses sales made, not cash received: 45 000 – 38 000 = £7000. (Its net cash flow would be 31 000 – 38 000 = –£7000.)",
      "hint": "Profit: sales made in the month. Cash flow: cash actually received."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its net cash flow for June.",
      "answer": -7000,
      "unit": "£",
      "working": "Net cash flow uses cash received: 31 000 – 38 000 = –£7000. The business made a profit of £7000 but cash fell.",
      "hint": "Only count money that actually came in during June."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Penny Lane Cycles has an opening balance of £3000 and an overdraft limit of £6000. Its net cash flows for the next four months are (£4000), (£3500), (£2000) and £5000. Calculate by how much the overdraft limit is exceeded in the worst month.",
      "answer": 500,
      "unit": "£",
      "working": "Closing balances: –£1000, –£4500, –£6500, –£1500. The lowest is –£6500 in month 3, against a limit of –£6000, so the limit is exceeded by £500.",
      "hint": "Work out each month's closing balance, find the lowest, and compare it with –£6000."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "Data for Kestrel Freight (£000): revenue 3200, cost of sales 1900, administration expenses 420, selling costs 260, interest paid 75, tax 90. Calculate its operating profit in £.",
      "answer": 620000,
      "unit": "£",
      "working": "Gross profit = 3200 – 1900 = 1300. Operating profit = 1300 – 420 – 260 = 620, so £620 000. Interest and tax come after operating profit.",
      "hint": "Interest is not an operating expense. Stop before interest and tax."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A retailer has a gross profit margin of 45%. Its cost of sales last year was £165 000. Calculate its revenue.",
      "answer": 300000,
      "unit": "£",
      "working": "If gross profit is 45% of revenue, cost of sales is 55% of revenue. Revenue = 165 000 ÷ 0.55 = £300 000.",
      "hint": "Cost of sales is not 45% of revenue. What percentage is it?"
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A gift shop sets its prices by adding 40% to the cost of sales. Its revenue last year was £350 000. Calculate its gross profit margin to two decimal places.",
      "answer": 28.571,
      "unit": "%",
      "working": "Revenue = cost × 1.4, so cost of sales = 350 000 ÷ 1.4 = £250 000. Gross profit = £100 000. Margin = 100 000 ÷ 350 000 × 100 = 28.57%, not 40%.",
      "hint": "A 40% mark-up is on cost. The margin is gross profit as a percentage of revenue, so it is lower than 40%."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "A business made a profit for the year of £60 000 after paying tax at 25% of its profit before tax. Calculate its profit before tax.",
      "answer": 80000,
      "unit": "£",
      "working": "Profit for the year is 75% of profit before tax, so PBT = 60 000 ÷ 0.75 = £80 000. Check: 25% of 80 000 = 20 000; 80 000 – 20 000 = 60 000.",
      "hint": "Do not take 25% of £60 000. £60 000 is what is left after tax, so it is 75% of the figure you want."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "Corner Kitchen sold 3500 meals last month at an average of £12. Food costs (cost of sales) are 35% of revenue. Its other costs for the month were £16 800. Calculate its operating profit margin.",
      "answer": 25,
      "unit": "%",
      "working": "Revenue = £42,000. Cost of sales = £14,700. Gross profit = £27,300. Operating profit = 27,300 – 16 800 = £10,500. 10,500 ÷ 42,000 × 100 = 25%.",
      "hint": "Profit goes on top of the fraction, revenue underneath. A margin is never bigger than 100%."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-tandrika",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "37/74",
    "level": "",
    "well": "The margin questions were good: Q5, Q7, Q10, Q17 and the MCQ (Q18) were right, and four of the six missing forecast figures (Q16).",
    "improve": "Cash flow basics first: net cash flow and closing balance (Q1, Q2, Q3). Credit sales timing (Q4, Q19). Profit uses sales made; cash flow uses cash received (Q12). Interest is not an operating cost (Q6). Q4 and Q20 were not attempted."
   }
  ]
 },
 {
  "id": "seed-2026-11-19-avleen-kaur",
  "match": "avleen kaur",
  "work": {
   "id": "w-avleen-kaur-kat-1911",
   "title": "Follow-up: cash flow, profit and KAT gaps",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow, profit and KAT gaps",
    "intro": "This set covers the cash flow pack and the KAT quiz. On the quiz you left 25 questions blank, so many of these are on topics you skipped: investment appraisal, ratios, break-even, decision trees and elasticity. Have a go at every question. A blank always scores 0.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Fenwick Garden Care has an opening balance of £4000 on 1 January. Its cash inflows for January, February and March are £15 000, £12 000 and £18 000. Its cash outflows are £16 500, £14 200 and £15 100. Calculate its closing balance at the end of March.",
      "answer": 3200,
      "unit": "£",
      "working": "Net cash flows: –1500, –2200, +2900. Closing balances: Jan £2500, Feb £300, Mar £3200. Each month's closing balance is the next month's opening balance.",
      "hint": "Do it one month at a time. January's closing balance becomes February's opening balance."
     },
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Hartley Print's closing balance at the end of May was –£3600. Its net cash flow in May was +£2100. Calculate its opening balance for May.",
      "answer": -5700,
      "unit": "£",
      "working": "Closing = opening + net cash flow, so opening = closing – net cash flow = –3600 – 2100 = –£5700. Check: –5700 + 2100 = –3600.",
      "hint": "Rearrange: opening = closing – net cash flow. Be careful with the minus signs."
     },
     {
      "type": "calc",
      "topic": "3.5.1c",
      "skill": "quant",
      "q": "Data for Kestrel Freight (£000): revenue 3200, cost of sales 1900, administration expenses 420, selling costs 260, interest paid 75, tax 90. Calculate its operating profit in £.",
      "answer": 620000,
      "unit": "£",
      "working": "Gross profit = 3200 – 1900 = 1300. Operating profit = 1300 – 420 – 260 = 620, so £620 000. Interest and tax come after operating profit.",
      "hint": "Interest is not an operating expense. Stop before interest and tax."
     },
     {
      "type": "calc",
      "topic": "3.5.1b",
      "skill": "quant",
      "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its profit for June.",
      "answer": 7000,
      "unit": "£",
      "working": "Profit uses sales made, not cash received: 45 000 – 38 000 = £7000. (Its net cash flow would be 31 000 – 38 000 = –£7000.)",
      "hint": "Profit: sales made in the month. Cash flow: cash actually received."
     },
     {
      "type": "calc",
      "topic": "3.1.1c",
      "skill": "quant",
      "q": "A business's total costs were 80% of its revenue, and it made a profit of £36 000. Calculate its revenue.",
      "answer": 180000,
      "unit": "£",
      "working": "Profit is 20% of revenue, so revenue = 36 000 ÷ 0.2 = £180 000.",
      "hint": "What percentage of revenue is the profit?"
     },
     {
      "type": "calc",
      "topic": "3.5.2d",
      "skill": "quant",
      "q": "A product breaks even at 4000 units. Fixed costs are £60 000 and the variable cost is £11 per unit. Calculate the selling price.",
      "answer": 26,
      "unit": "£",
      "working": "Contribution = 60 000 ÷ 4000 = £15. Price = 15 + 11 = £26.",
      "hint": "Find contribution per unit first, then add the variable cost back on."
     },
     {
      "type": "calc",
      "topic": "3.6.2",
      "skill": "quant",
      "q": "A business had 80 staff at the start of the year and 120 at the end. 18 staff left during the year. Calculate its labour turnover.",
      "answer": 18,
      "unit": "%",
      "working": "Average staff = (80 + 120) ÷ 2 = 100. Labour turnover = 18 ÷ 100 × 100 = 18%.",
      "hint": "Use the average number of staff."
     },
     {
      "type": "calc",
      "topic": "3.7.8a",
      "skill": "quant",
      "q": "A project costs £50 000. Net cash flows are £20 000 in Year 1, £18 000 in Year 2 and £24 000 in Year 3, spread evenly through each year. Calculate the payback period in months.",
      "answer": 30,
      "unit": "months",
      "working": "After 2 years: £38 000. Still needed: £12 000. 12 000 ÷ 24 000 × 12 = 6 months. Payback = 2 years 6 months = 30 months.",
      "hint": "Find what is still needed after Year 2, then divide by the Year 3 cash flow (not Year 2's)."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £4.5 million and non-current liabilities of £1.5 million. Its ROCE is 9%. Calculate its operating profit.",
      "answer": 540000,
      "unit": "£",
      "working": "Capital employed = 4.5m + 1.5m = £6m. Operating profit = 9% × 6m = £540 000.",
      "hint": "Capital employed includes non-current liabilities."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A business has current assets of £300 000 and current liabilities of £200 000. It uses £40 000 of cash to pay some of its suppliers (payables). Calculate its new current ratio to two decimal places.",
      "answer": 1.625,
      "unit": ":1",
      "working": "Current assets fall to £260 000 and current liabilities fall to £160 000. 260 ÷ 160 = 1.625, so 1.63 : 1.",
      "hint": "Paying suppliers with cash changes both figures."
     },
     {
      "type": "calc",
      "topic": "3.5.2d",
      "skill": "quant",
      "q": "A product sells for £40 and has variable costs of £25 per unit. Fixed costs are £90 000. At its current output it makes a profit of £30 000. Calculate its margin of safety in units.",
      "answer": 2000,
      "unit": "units",
      "working": "Contribution = £15. Break-even = 90 000 ÷ 15 = 6000 units. Current output = (90 000 + 30 000) ÷ 15 = 8000. Margin of safety = 2000 units (or profit ÷ contribution = 30 000 ÷ 15).",
      "hint": "Margin of safety is in units, not pounds."
     },
     {
      "type": "calc",
      "topic": "3.7.8b",
      "skill": "quant",
      "q": "A machine costs £60 000. It will bring in net returns of £35 000 at the end of Year 1 and £35 000 at the end of Year 2. The discount factors are 0.909 (Year 1) and 0.826 (Year 2). Calculate the net present value.",
      "answer": 725,
      "unit": "£",
      "working": "PV = 35 000 × 0.909 + 35 000 × 0.826 = £60,725. NPV = 60,725 – 60 000 = £725.",
      "hint": "Discount each year, add them up, then take off the cost."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "calc",
      "topic": "3.3.2f",
      "skill": "quant",
      "q": "A business sells 12 000 units a year. The income elasticity of demand is –0.8. Real incomes rise by 4%. Calculate the new sales in units.",
      "answer": 11616,
      "unit": "units",
      "working": "Change in demand = –0.8 × 4% = –3.2%. 12 000 × 0.968 = 11 616 units.",
      "hint": "Negative YED: incomes up, demand down."
     },
     {
      "type": "calc",
      "topic": "3.2.2c",
      "skill": "quant",
      "q": "Launching a new service costs £40 000. There is a 0.7 chance of a pay-off of £100 000 and a 0.3 chance of a pay-off of £10 000. Calculate the net gain.",
      "answer": 33000,
      "unit": "£",
      "working": "Expected value = 70 000 + 3000 = £73 000. Net gain = 73 000 – 40 000 = £33 000.",
      "hint": "Net gain = expected value – cost."
     },
     {
      "type": "mcq",
      "topic": "3.6.4b",
      "skill": "knowledge",
      "q": "According to Herzberg, which of these is most likely to motivate an employee?",
      "options": [
       "More responsibility for planning their own work",
       "Better canteen food",
       "A newer office",
       "A pay rise"
      ],
      "answer": 0,
      "explain": "Responsibility is a motivator. Pay, conditions and the working environment are hygiene factors: improving them removes dissatisfaction but does not motivate."
     },
     {
      "type": "mcq",
      "topic": "3.7.6b",
      "skill": "knowledge",
      "q": "Which statement best describes the stakeholder concept?",
      "options": [
       "Managers try to maximise returns for shareholders only.",
       "Managers take account of the interests of all stakeholder groups when making decisions.",
       "Every stakeholder group gets exactly what it wants.",
       "Stakeholders own the business."
      ],
      "answer": 1,
      "explain": "The stakeholder concept means considering the interests of all stakeholders. Their needs often conflict, so they cannot all be satisfied at once."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-avleen-kaur",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "65/74",
    "level": "",
    "well": "All the profit, margin and working-back questions (Q7–Q11, Q15, Q17, Q20) and both long forecasts (Q16, Q19) were right.",
    "improve": "Opening balances: Q2 left out the £1500 and Q3 took away a negative instead of rearranging. Q6: interest is not an operating cost. Q12(a): profit uses sales made, not cash received."
   }
  ],
  "catmcq": {
   "answers": "-C-B-B-BD-A-CBA--AACB-ADCBDCABCC-BDDA--AB-BD-B-D--DA-B-BDAADBD-B-BAB--BD-BA-ACDD",
   "t": "2026-11-19T14:00:00.000Z",
   "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
  }
 },
 {
  "id": "seed-2026-11-19-rashmeet",
  "match": "rashmeet",
  "work": {
   "id": "w-rashmeet-kat-1911",
   "title": "Follow-up: cash flow, profit and KAT gaps",
   "due": "2026-11-23",
   "spec": {
    "title": "Follow-up: cash flow, profit and KAT gaps",
    "intro": "This set covers the three-month forecast you left out (Q19 on the pack) and the KAT quiz questions you missed, several of which were knowledge questions on leadership, stakeholders, segmentation, correlation and quality.\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
    "items": [
     {
      "type": "calc",
      "topic": "3.5.2c",
      "skill": "quant",
      "q": "Brook Lane Nursery has an opening balance of £1500 on 1 January. 40% of each month's sales are paid in cash in the month; the other 60% are paid one month later. December sales were £18 000. Sales for January, February and March are £20 000, £25 000 and £32 000. Costs of £21 000 are paid each month. A bank loan of £8000 will be received in February. Calculate the closing balance at the end of March.",
      "answer": 15100,
      "unit": "£",
      "working": "Inflows: Jan 8000 + 10 800 = £18800; Feb 10 000 + 12 000 + 8000 loan = £30000; Mar 12 800 + 15 000 = £27800. Outflows £21 000 each month. Closing balances: Jan £-700, Feb £8300, Mar £15100.",
      "hint": "Set it out as a table: inflows, outflows, net cash flow, opening and closing balance for each month. Remember December's sales are partly paid in January."
     },
     {
      "type": "calc",
      "topic": "3.5.2f",
      "skill": "quant",
      "q": "A business's operating profit rose from £84 000 to £96 600, while its revenue rose from £700 000 to £840 000. Calculate the percentage change in operating profit.",
      "answer": 15,
      "unit": "%",
      "working": "(96 600 – 84 000) ÷ 84 000 × 100 = 15%. (Revenue rose by 20%, which is not what was asked.)",
      "hint": "Read the question: it asks about operating profit, not revenue."
     },
     {
      "type": "calc",
      "topic": "3.1.2c",
      "skill": "quant",
      "q": "A plc has 25 million shares and pays total dividends of £3 million. Calculate the dividend per share in pence.",
      "answer": 12,
      "unit": "p",
      "working": "£3 000 000 ÷ 25 000 000 = £0.12 = 12p.",
      "hint": "Check your units: £0.12 is 12p."
     },
     {
      "type": "calc",
      "topic": "3.1.1c",
      "skill": "quant",
      "q": "A business's total costs were 80% of its revenue, and it made a profit of £36 000. Calculate its revenue.",
      "answer": 180000,
      "unit": "£",
      "working": "Profit is 20% of revenue, so revenue = 36 000 ÷ 0.2 = £180 000.",
      "hint": "What percentage of revenue is the profit?"
     },
     {
      "type": "calc",
      "topic": "3.5.2d",
      "skill": "quant",
      "q": "A product sells for £40 and has variable costs of £25 per unit. Fixed costs are £90 000. At its current output it makes a profit of £30 000. Calculate its margin of safety in units.",
      "answer": 2000,
      "unit": "units",
      "working": "Contribution = £15. Break-even = 90 000 ÷ 15 = 6000 units. Current output = (90 000 + 30 000) ÷ 15 = 8000. Margin of safety = 2000 units (or profit ÷ contribution = 30 000 ÷ 15).",
      "hint": "Margin of safety is in units, not pounds."
     },
     {
      "type": "calc",
      "topic": "3.6.3b",
      "skill": "quant",
      "q": "A business has a managing director at the top and 3 levels of hierarchy in total. Every manager, including the MD, has a span of control of 5. How many people work in the business?",
      "answer": 31,
      "unit": "people",
      "working": "1 + 5 + 25 = 31.",
      "hint": "Count every level, including the MD."
     },
     {
      "type": "calc",
      "topic": "3.7.2b",
      "skill": "quant",
      "q": "A company has total equity of £9 million and non-current liabilities of £3 million. It takes out a further £3 million long-term loan. Calculate its new gearing.",
      "answer": 40,
      "unit": "%",
      "working": "New non-current liabilities = £6m. Capital employed = 9m + 6m = £15m. Gearing = 6 ÷ 15 × 100 = 40%.",
      "hint": "Gearing = non-current liabilities ÷ (total equity + non-current liabilities). Both go up with the loan."
     },
     {
      "type": "mcq",
      "topic": "3.2.1b",
      "skill": "knowledge",
      "q": "A manager asks her team for their views, discusses the options with them and then lets the group decide together. This is:",
      "options": [
       "paternalistic leadership.",
       "laissez-faire leadership.",
       "autocratic leadership.",
       "democratic leadership."
      ],
      "answer": 3,
      "explain": "The team takes part in the decision, so it is democratic. Paternalistic leaders still make the decision themselves; laissez-faire leaders leave staff to get on with it."
     },
     {
      "type": "mcq",
      "topic": "3.2.3b",
      "skill": "knowledge",
      "q": "On a stakeholder map, a group that has low power but high interest should be:",
      "options": [
       "monitored with minimum effort.",
       "managed closely.",
       "kept satisfied.",
       "kept informed."
      ],
      "answer": 3,
      "explain": "Low power, high interest = keep informed. High power, low interest = keep satisfied. High power, high interest = manage closely."
     },
     {
      "type": "mcq",
      "topic": "3.7.6b",
      "skill": "knowledge",
      "q": "Which statement best describes the stakeholder concept?",
      "options": [
       "Managers take account of the interests of all stakeholder groups when making decisions.",
       "Managers try to maximise returns for shareholders only.",
       "Stakeholders own the business.",
       "Every stakeholder group gets exactly what it wants."
      ],
      "answer": 0,
      "explain": "The stakeholder concept means considering the interests of all stakeholders. Their needs often conflict, so they cannot all be satisfied at once."
     },
     {
      "type": "mcq",
      "topic": "3.3.2d",
      "skill": "knowledge",
      "q": "Sales of umbrellas and sales of hot drinks at a station both rise on rainy days. Which statement is correct?",
      "options": [
       "There is a positive correlation, but that does not prove one causes the other.",
       "There is no correlation.",
       "There is a negative correlation.",
       "Buying umbrellas causes people to buy hot drinks."
      ],
      "answer": 0,
      "explain": "Both rise together, so the correlation is positive. A third factor (rain) drives both, which shows why correlation does not prove causation."
     },
     {
      "type": "mcq",
      "topic": "3.3.3a",
      "skill": "knowledge",
      "q": "A gym offers cheaper membership to people living within two miles, and a loyalty discount to members who visit at least 12 times a month. Which two methods of segmentation are used?",
      "options": [
       "Geographic and behavioural",
       "Demographic and income",
       "Geographic and demographic",
       "Income and behavioural"
      ],
      "answer": 0,
      "explain": "Where people live is geographic. How often they visit (usage) is behavioural."
     },
     {
      "type": "mcq",
      "topic": "3.4.4a",
      "skill": "knowledge",
      "q": "Which of these is an example of quality assurance rather than quality control?",
      "options": [
       "Removing faulty products before they are packed",
       "Testing a sample of finished goods each day",
       "Inspecting every tenth product at the end of the line",
       "Training workers to check their own work at every stage"
      ],
      "answer": 3,
      "explain": "Quality assurance builds quality into each stage to prevent faults. The other three detect faults after the product is made, which is quality control."
     }
    ]
   }
  },
  "marks": [
   {
    "qid": "seed-cf-rashmeet",
    "t": "2026-11-19T14:00:00.000Z",
    "tool": "calcpractice",
    "question": "Cash flow and profit calculations (20 questions, 74 marks)",
    "mark": "66/74",
    "level": "",
    "well": "Nearly every profit and margin question was right, along with Q16 and Q20.",
    "improve": "Q19 (three-month forecast with credit sales) was not attempted. Q11(a): 15.8% with no working; the answer is 14.58%. Show working on every calculation."
   }
  ],
  "catmcq": {
   "answers": "BCABABABDDABBBCDDAACBDADBBDBABCCABDAACBACCBCDBBDACCACBCBDBADBCDAABDBACBDDBACACDD",
   "t": "2026-11-19T14:00:00.000Z",
   "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
  }
 },
{
 "id": "seed-2026-11-19-sanam",
 "match": "sanam",
 "work": {
  "id": "w-sanam-kat-1911",
  "title": "Follow-up: cash flow and profit",
  "due": "2026-11-23",
  "spec": {
   "title": "Follow-up: cash flow and profit",
   "intro": "Good pack overall, with clear working and strong margins. This set is on the parts you dropped: building a forecast from January onwards (Q2), comparing balances with an overdraft limit (Q13b), what counts in operating profit, rounding to two decimal places, and grossing up for tax (Q20, which you did not attempt).\n\nType numbers only: no £ signs or commas needed. Use a minus sign for negative figures. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.5.2c",
     "skill": "quant",
     "q": "Fenwick Garden Care has an opening balance of £4000 on 1 January. Its cash inflows for January, February and March are £15 000, £12 000 and £18 000. Its cash outflows are £16 500, £14 200 and £15 100. Calculate its closing balance at the end of March.",
     "answer": 3200,
     "unit": "£",
     "working": "Net cash flows: –1500, –2200, +2900. Closing balances: Jan £2500, Feb £300, Mar £3200. Each month's closing balance is the next month's opening balance.",
     "hint": "Do it one month at a time. January's closing balance becomes February's opening balance."
    },
    {
     "type": "calc",
     "topic": "3.5.2c",
     "skill": "quant",
     "q": "Mason Tiles gets 30% of each month's sales in cash in the month of sale and the other 70% one month later. Sales were £20 000 in December, £24 000 in January and £30 000 in February. Calculate its cash inflow from sales in February.",
     "answer": 25800,
     "unit": "£",
     "working": "30% of February sales = £9000. 70% of January sales = £16 800. Total = £25 800. December sales are paid in January, so they are not part of February.",
     "hint": "February's cash comes from two months: some of February's sales and the rest of January's."
    },
    {
     "type": "calc",
     "topic": "3.5.2c",
     "skill": "quant",
     "q": "Penny Lane Cycles has an opening balance of £3000 and an overdraft limit of £6000. Its net cash flows for the next four months are (£4000), (£3500), (£2000) and £5000. Calculate by how much the overdraft limit is exceeded in the worst month.",
     "answer": 500,
     "unit": "£",
     "working": "Closing balances: –£1000, –£4500, –£6500, –£1500. The lowest is –£6500 in month 3, against a limit of –£6000, so the limit is exceeded by £500.",
     "hint": "Work out each month's closing balance, find the lowest, and compare it with –£6000."
    },
    {
     "type": "calc",
     "topic": "3.5.1c",
     "skill": "quant",
     "q": "Data for Kestrel Freight (£000): revenue 3200, cost of sales 1900, administration expenses 420, selling costs 260, interest paid 75, tax 90. Calculate its operating profit in £.",
     "answer": 620000,
     "unit": "£",
     "working": "Gross profit = 3200 – 1900 = 1300. Operating profit = 1300 – 420 – 260 = 620, so £620 000. Interest and tax come after operating profit.",
     "hint": "Interest is not an operating expense. Stop before interest and tax."
    },
    {
     "type": "calc",
     "topic": "3.5.2f",
     "skill": "quant",
     "q": "Using the Kestrel Freight data (£000: revenue 3200, cost of sales 1900, administration 420, selling costs 260, interest 75, tax 90), calculate the operating profit margin. Give your answer to two decimal places.",
     "answer": 19.375,
     "unit": "%",
     "working": "Operating profit = 620. 620 ÷ 3200 × 100 = 19.375% = 19.38% to 2 d.p.",
     "hint": "Operating profit ÷ revenue × 100. Round only at the end."
    },
    {
     "type": "calc",
     "topic": "3.5.1c",
     "skill": "quant",
     "q": "A business made a profit for the year of £60 000 after paying tax at 25% of its profit before tax. Calculate its profit before tax.",
     "answer": 80000,
     "unit": "£",
     "working": "Profit for the year is 75% of profit before tax, so PBT = 60 000 ÷ 0.75 = £80 000. Check: 25% of 80 000 = 20 000; 80 000 – 20 000 = 60 000.",
     "hint": "Do not take 25% of £60 000. £60 000 is what is left after tax, so it is 75% of the figure you want."
    },
    {
     "type": "calc",
     "topic": "3.5.2f",
     "skill": "quant",
     "q": "Redfern Labs wants a profit for the year of £90 000. Tax will be 20% of profit before tax, finance costs will be £15 000, other operating expenses £210 000 and the gross profit margin 30%. Calculate the revenue it needs.",
     "answer": 1125000,
     "unit": "£",
     "working": "PBT = 90 000 ÷ 0.8 = £112,500. Operating profit = 112,500 + 15 000 = £127,500. Gross profit = 127,500 + 210 000 = £337,500. Revenue = 337,500 ÷ 0.30 = £1,125,000.",
     "hint": "Work up the income statement from the bottom: add back tax (divide by 0.8), then finance costs, then operating expenses, then divide by the margin."
    },
    {
     "type": "calc",
     "topic": "3.5.1b",
     "skill": "quant",
     "q": "Orchard Office Supplies sells on 60 days' credit. In June it made sales of £45 000. It received £31 000 in cash from April's sales. All of June's costs, £38 000, were paid in June. Calculate its net cash flow for June.",
     "answer": -7000,
     "unit": "£",
     "working": "Net cash flow uses cash received: 31 000 – 38 000 = –£7000. The business made a profit of £7000 but cash fell.",
     "hint": "Only count money that actually came in during June."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-cf-sanam",
   "t": "2026-11-19T14:00:00.000Z",
   "tool": "calcpractice",
   "question": "Cash flow and profit calculations (20 questions, 74 marks)",
   "mark": "64/74",
   "level": "",
   "well": "Margins (Q5, Q7–Q11, Q17), the missing forecast figures (Q16) and the full forecast with credit sales and a loan (Q19) were right.",
   "improve": "Q2: start with January and carry each closing balance forward (the working skipped January). Q6: the working left out distribution costs; give margins to two decimal places when asked. Q12(b): extra zero. Q13(b): compare the lowest balance with the £10 000 limit. Q20 was not attempted."
  }
 ]
},
 /* KAT MCQ paper sheets for Karam and Sanam, marked 19 Nov 2026 */
{
 "id": "seed-2026-11-19-karam-kat",
 "match": "karam",
 "catmcq": {
  "answers": "BCCDABAADDAACBACDAACBDADCBDCABCCABDDACBACABCDBBDACCACBCBDAADBCDACBDBACBDDBACACDD",
  "t": "2026-11-19T14:00:00.000Z",
  "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
 },
 "work": {
  "id": "w-karam-kat2-1911",
  "title": "KAT quiz: the two you missed",
  "due": "2026-11-23",
  "spec": {
   "title": "KAT quiz: the two you missed",
   "intro": "78 out of 80 on the KAT quiz. You missed Q8 (minimum wage) and Q12 (working backwards from an expected value). These four questions go over both. For the decision trees, check your answer by working the expected value forwards.\n\nType numbers only: no £ signs or commas needed. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.2.2c",
     "skill": "quant",
     "q": "A decision has two possible outcomes, with pay-offs of £80 000 and £20 000. The expected value is £56 000. Calculate the probability of the £80 000 outcome. Give your answer as a decimal.",
     "answer": 0.6,
     "unit": "",
     "working": "Let p be the probability of £80 000. 80 000p + 20 000(1 – p) = 56 000, so 60 000p = 36 000 and p = 0.6. Check: 0.6 × 80 000 + 0.4 × 20 000 = 48 000 + 8000 = 56 000.",
     "hint": "The two probabilities add up to 1. Write the expected value as an equation and solve for p."
    },
    {
     "type": "calc",
     "topic": "3.2.2c",
     "skill": "quant",
     "q": "A project has a 0.25 chance of a pay-off of £150 000. Otherwise it earns a lower pay-off. The expected value is £75 000. Calculate the lower pay-off.",
     "answer": 50000,
     "unit": "£",
     "working": "0.25 × 150 000 = 37 500. The other probability is 0.75, so 0.75 × pay-off = 75 000 – 37 500 = 37 500. Pay-off = 37 500 ÷ 0.75 = £50 000.",
     "hint": "Take the known part of the expected value away first, then divide by the other probability."
    },
    {
     "type": "mcq",
     "topic": "3.7.4b",
     "skill": "analysis",
     "q": "The government makes a large increase in the national minimum wage. Which business is most likely to see demand for its products rise?",
     "options": [
      "A discount clothing retailer whose customers are mostly on low pay",
      "A luxury car dealer",
      "A firm that sells factory machinery to other businesses",
      "A private jet charter company"
     ],
     "answer": 0,
     "explain": "The minimum wage rise gives low-paid workers more income, so businesses that sell to them gain demand. This is the second half of the KAT question: the supermarket's costs rise, but so does demand from low-paid shoppers."
    },
    {
     "type": "mcq",
     "topic": "3.7.4b",
     "skill": "analysis",
     "q": "A care home employs mostly minimum-wage staff and cannot raise its fees. After a large rise in the minimum wage, what is most likely to happen to its profit?",
     "options": [
      "It falls, because costs rise and revenue does not",
      "It rises, because staff will spend more",
      "It stays the same, because wages are a fixed cost",
      "It rises, because demand for care goes up"
     ],
     "answer": 0,
     "explain": "Wages are a large cost for the care home. With fees fixed, revenue stays the same while costs go up, so profit falls."
    }
   ]
  }
 }
},
{
 "id": "seed-2026-11-19-sanam-kat",
 "match": "sanam",
 "catmcq": {
  "answers": "BCCDADABDDABCBACDAACBDADCBDCABCCABDDCCBACABCDBBDACCACBABDDADBCDACBDBACBDDAACACDD",
  "t": "2026-11-19T14:00:00.000Z",
  "how": "Paper answer sheet, handed in during the lesson and marked by the teacher"
 },
 "work": {
  "id": "w-sanam-kat2-1911",
  "title": "KAT quiz: the five you missed",
  "due": "2026-11-23",
  "spec": {
   "title": "KAT quiz: the five you missed",
   "intro": "75 out of 80 on the KAT quiz. Four of the five you missed were knowledge questions: social enterprise, what changes capacity utilisation, Herzberg and Porter's cost leadership. The other was the span of control calculation, where a level was missed out. Read each option carefully before choosing.\n\nType numbers only: no £ signs or commas needed. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "mcq",
     "topic": "3.1.2b",
     "skill": "knowledge",
     "q": "Which of these best describes a social enterprise?",
     "options": [
      "A business that trades to make money and uses most of its profit for social or environmental aims",
      "A charity that is not allowed to make a profit",
      "An organisation owned and run by the government",
      "A business that must share all of its profit among its customers"
     ],
     "answer": 0,
     "explain": "A social enterprise can make a profit. What matters is that the profit is mainly used for its social or environmental aims. It does not have to be a charity. On the KAT, statement 1 was true."
    },
    {
     "type": "mcq",
     "topic": "3.4.2",
     "skill": "analysis",
     "q": "Demand for a manufacturer's products stays the same. Which action would increase its capacity utilisation?",
     "options": [
      "Selling one of its production lines while keeping output the same",
      "Leasing a second factory",
      "Buying faster machines that raise its maximum output",
      "Moving some production to a subcontractor"
     ],
     "answer": 0,
     "explain": "Capacity utilisation = output ÷ maximum capacity. Selling a production line cuts maximum capacity while output stays the same, so utilisation rises. Extra machines raise capacity, so utilisation falls."
    },
    {
     "type": "calc",
     "topic": "3.4.2",
     "skill": "quant",
     "q": "A factory has a maximum capacity of 24 000 units a month. Last month it produced 18 000 units. It then sells some machinery, cutting maximum capacity to 20 000 units, and output stays at 18 000. Calculate the new capacity utilisation (%).",
     "answer": 90,
     "unit": "%",
     "working": "18 000 ÷ 20 000 × 100 = 90%. Before, it was 18 000 ÷ 24 000 × 100 = 75%.",
     "hint": "Output ÷ maximum capacity × 100."
    },
    {
     "type": "mcq",
     "topic": "3.6.4b",
     "skill": "knowledge",
     "q": "According to Herzberg, which of these is most likely to motivate an employee?",
     "options": [
      "A pay rise",
      "Better canteen food",
      "More responsibility for planning their own work",
      "A newer office"
     ],
     "answer": 2,
     "explain": "Responsibility is a motivator. Pay, conditions and the working environment are hygiene factors: improving them removes dissatisfaction but does not motivate."
    },
    {
     "type": "calc",
     "topic": "3.6.3b",
     "skill": "quant",
     "q": "A business has a managing director at the top and 4 levels of hierarchy in total, including the managing director. Every manager, including the managing director, has a span of control of 3. How many people work in the business?",
     "answer": 40,
     "unit": "people",
     "working": "Level 1: 1. Level 2: 3. Level 3: 9. Level 4: 27. Total = 1 + 3 + 9 + 27 = 40.",
     "hint": "Write each level down on its own line, starting with the managing director, and count 4 lines."
    },
    {
     "type": "mcq",
     "topic": "3.8.2a",
     "skill": "knowledge",
     "q": "A business follows a cost leadership strategy. Which statement is correct?",
     "options": [
      "It aims to have the lowest costs in the industry, and may charge prices close to its rivals' to earn higher margins",
      "It must charge the lowest prices in the market",
      "It aims to make its product clearly different from rivals' products",
      "It only sells to a small niche of customers"
     ],
     "answer": 0,
     "explain": "Cost leadership is about having the lowest costs, not the lowest price. A cost leader can price close to rivals and make a bigger margin. On the KAT, statement 2 was false."
    }
   ]
  }
 }
},
 /* HR calculations pack (labour turnover, productivity, employee costs), marked 20 Nov 2026, with follow-up sets */
{
 "id": "seed-2026-11-20-hr-tandrika",
 "match": "tandrika",
 "work": {
  "id": "w-tandrika-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "These questions go back over the HR calculations you lost marks on. Write the formula down first every time, then put the numbers in. Check which way up the fraction goes: leavers or employee costs go on top. Use the clue on any question you are stuck on.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A packing firm employs 40 full-time staff and 20 part-time staff who each work half the hours of a full-timer. Last month they packed 30 000 boxes. Calculate labour productivity per full-time equivalent (FTE) employee.",
     "answer": 600.0,
     "unit": "boxes per FTE",
     "working": "FTE = 40 + (20 × 0.5) = 50. 30 000 ÷ 50 = 600 boxes per FTE.",
     "hint": "Count each part-timer as half a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "On each shift, 15 workers work for 7.5 hours and are paid £12.80 per hour. The shift produces 3600 units. Calculate the labour cost per unit in pence.",
     "answer": 40.0,
     "unit": "p",
     "working": "Labour cost per shift = 15 × 7.5 × £12.80 = £1440. £1440 ÷ 3600 = £0.40 = 40p.",
     "hint": "Include the hours. Then turn pounds into pence (× 100)."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Data for a recruitment agency (£000): revenue 5200, salaries 1300, employer National Insurance 156, employer pension contributions 104, rent 400. Calculate employee costs as a percentage of turnover.",
     "answer": 30.0,
     "unit": "%",
     "working": "Employee costs = 1300 + 156 + 104 = 1560. 1560 ÷ 5200 × 100 = 30%.",
     "hint": "Employee costs include NI and pensions, not rent."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's employee costs were £1 260 000, which was 35% of its turnover. Calculate its turnover.",
     "answer": 3600000.0,
     "unit": "£",
     "working": "1 260 000 = 0.35 × turnover, so turnover = 1 260 000 ÷ 0.35 = £3 600 000.",
     "hint": "Divide by 0.35. Turnover must be bigger than employee costs."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's turnover was £3 600 000 and it sells one product at £45. How many units did it sell?",
     "answer": 80000.0,
     "unit": "units",
     "working": "£3 600 000 ÷ £45 = 80 000 units.",
     "hint": "Turnover = price × quantity."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "60 production staff currently make 7200 units a week. A new order means the business must make 10 000 units a week. Training will raise labour productivity by 10%. How many extra staff are needed?",
     "answer": 16,
     "unit": "staff",
     "working": "Productivity = 7200 ÷ 60 = 120. New = 120 × 1.1 = 132. 10 000 ÷ 132 = 75.8, so 76 staff. Extra = 76 − 60 = 16.",
     "hint": "Round the staff needed up, then take away the current staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A school employed 250 staff a year ago. 215 of them are still employed today. Calculate the labour retention rate.",
     "answer": 86.0,
     "unit": "%",
     "working": "215 ÷ 250 × 100 = 86%.",
     "hint": "Retention = staff still there ÷ staff a year ago × 100."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A firm has 300 staff now and wants a labour retention rate of 92% over the next year. How many of the 300 must still be employed in a year's time?",
     "answer": 276.0,
     "unit": "staff",
     "working": "0.92 × 300 = 276.",
     "hint": "Retention target × current staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "In 2025, 18 staff left from an average of 150. In 2026, 24 left from an average of 160. Calculate the percentage change in labour turnover.",
     "answer": 25.0,
     "unit": "%",
     "working": "2025: 18 ÷ 150 = 12%. 2026: 24 ÷ 160 = 15%. (15 − 12) ÷ 12 × 100 = +25%.",
     "hint": "Percentage change, not the change in percentage points."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-tandrika",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "33/73",
   "level": "",
   "well": "Right: labour turnover, FTE productivity, leavers from a turnover rate, units sold, % change in productivity, working back to employees, turnover with joiners and leavers, calls per agent per hour, the multiple-choice question.",
   "improve": "Q2: used 210 (start figure) not the average of 230: 21.9%. Q3a: gave the FTE answer (700) for (a); (a) wanted all 42 staff: 600. Q4: £2499.20 right, then divided by 200 instead of by 4400. Q5: salaries only (26.4%): left out NI and pension. Q7: 18 000 × 2.40 written as 4320 (should be 43 200); answer 1000 not supported. Q8a: multiplied 840 000 by 0.28 instead of dividing. Q9: no method: answer 6. Q10a: fraction upside down (160 ÷ 136). Q10b: used 9% (0.09) instead of 90%: 164. Q11: left out occupancy and the 30 nights, and put revenue over employee costs (upside down). Q12b: gave 2.5% (the change in percentage points), not the % change (14.29%). Q13: no method. Q14b: divided 30.9 by 5. Q16b: not attempted. Q17b: found the target (5040) but did not take away 4620. Q18a: Leeds only. Q18b: Leeds only. Q20a: not attempted. Q20b: not attempted."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-avleen-kaur",
 "match": "avleen kaur",
 "work": {
  "id": "w-avleen-kaur-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "This set covers the HR questions you lost marks on in your own work: averaging staff numbers, pence, employee costs including NI and pensions, retention, the hotel question and finishing multi-step answers with a final figure.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "9 operatives each work an 8-hour shift at £13.50 per hour and produce 2400 parts. Calculate the labour cost per part in pence, to one decimal place.",
     "answer": 40.5,
     "unit": "p",
     "working": "9 × 8 × £13.50 = £972. £972 ÷ 2400 = £0.405 = 40.5p.",
     "hint": "Total labour cost ÷ units, then × 100 for pence."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Data for a recruitment agency (£000): revenue 5200, salaries 1300, employer National Insurance 156, employer pension contributions 104, rent 400. Calculate employee costs as a percentage of turnover.",
     "answer": 30.0,
     "unit": "%",
     "working": "Employee costs = 1300 + 156 + 104 = 1560. 1560 ÷ 5200 × 100 = 30%.",
     "hint": "Employee costs include NI and pensions, not rent."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A school employed 250 staff a year ago. 215 of them are still employed today. Calculate the labour retention rate.",
     "answer": 86.0,
     "unit": "%",
     "working": "215 ÷ 250 × 100 = 86%.",
     "hint": "Retention = staff still there ÷ staff a year ago × 100."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Before automation 50 staff made 140 000 units; after, 40 staff make 155 000 units. Calculate the percentage change in labour productivity, to two decimal places.",
     "answer": 38.3929,
     "unit": "%",
     "working": "Before: 2800. After: 3875. (3875 − 2800) ÷ 2800 × 100 = +38.39%.",
     "hint": "Productivity for each, then percentage change."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-avleen-kaur",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "56/73",
   "level": "",
   "well": "Right: labour turnover, labour productivity, FTE productivity, leavers from a turnover rate, employees from labour cost per unit, turnover from employee costs %, units sold, the staffing plan, the retention target and more.",
   "improve": "Q2: added the two staff figures (460) but did not divide by 2: 10%. Q4: £0.568 not converted to pence. Q5: salaries only (26.38%): left out NI and pension. Q10a: only done afterwards in purple pen. Q11: occupancy and revenue (£259 200) right; employee costs and the % only added afterwards in purple. Q13: all the steps, but no final answer (£46 750). Q14a: only done afterwards in purple pen. Q16b: only done afterwards (purple/green). Q20a: only done afterwards in purple pen."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-jeeval",
 "match": "jeeval",
 "work": {
  "id": "w-jeeval-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "This set goes over the HR questions where your method went wrong: FTE staff, pence, working back from a percentage, the staffing plan, retention, percentage change and working back to employees. Write the formula first, then rearrange it.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A packing firm employs 40 full-time staff and 20 part-time staff who each work half the hours of a full-timer. Last month they packed 30 000 boxes. Calculate labour productivity per full-time equivalent (FTE) employee.",
     "answer": 600.0,
     "unit": "boxes per FTE",
     "working": "FTE = 40 + (20 × 0.5) = 50. 30 000 ÷ 50 = 600 boxes per FTE.",
     "hint": "Count each part-timer as half a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "On each shift, 15 workers work for 7.5 hours and are paid £12.80 per hour. The shift produces 3600 units. Calculate the labour cost per unit in pence.",
     "answer": 40.0,
     "unit": "p",
     "working": "Labour cost per shift = 15 × 7.5 × £12.80 = £1440. £1440 ÷ 3600 = £0.40 = 40p.",
     "hint": "Include the hours. Then turn pounds into pence (× 100)."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Data for a recruitment agency (£000): revenue 5200, salaries 1300, employer National Insurance 156, employer pension contributions 104, rent 400. Calculate employee costs as a percentage of turnover.",
     "answer": 30.0,
     "unit": "%",
     "working": "Employee costs = 1300 + 156 + 104 = 1560. 1560 ÷ 5200 × 100 = 30%.",
     "hint": "Employee costs include NI and pensions, not rent."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's employee costs were £1 260 000, which was 35% of its turnover. Calculate its turnover.",
     "answer": 3600000.0,
     "unit": "£",
     "working": "1 260 000 = 0.35 × turnover, so turnover = 1 260 000 ÷ 0.35 = £3 600 000.",
     "hint": "Divide by 0.35. Turnover must be bigger than employee costs."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "60 production staff currently make 7200 units a week. A new order means the business must make 10 000 units a week. Training will raise labour productivity by 10%. How many extra staff are needed?",
     "answer": 16,
     "unit": "staff",
     "working": "Productivity = 7200 ÷ 60 = 120. New = 120 × 1.1 = 132. 10 000 ÷ 132 = 75.8, so 76 staff. Extra = 76 − 60 = 16.",
     "hint": "Round the staff needed up, then take away the current staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A school employed 250 staff a year ago. 215 of them are still employed today. Calculate the labour retention rate.",
     "answer": 86.0,
     "unit": "%",
     "working": "215 ÷ 250 × 100 = 86%.",
     "hint": "Retention = staff still there ÷ staff a year ago × 100."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "In 2025, 18 staff left from an average of 150. In 2026, 24 left from an average of 160. Calculate the percentage change in labour turnover.",
     "answer": 25.0,
     "unit": "%",
     "working": "2025: 18 ÷ 150 = 12%. 2026: 24 ÷ 160 = 15%. (15 − 12) ÷ 12 × 100 = +25%.",
     "hint": "Percentage change, not the change in percentage points."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Weekly data for a manufacturer: total costs £210 000, profit £30 000, labour costs are 30% of turnover, labour cost per unit £2.40, labour productivity 150 units per employee. Calculate the number of employees.",
     "answer": 200.0,
     "unit": "employees",
     "working": "Turnover = £210 000 + £30 000 = £240 000. Labour costs = 0.3 × £240 000 = £72 000. Output = £72 000 ÷ £2.40 = 30 000. Employees = 30 000 ÷ 150 = 200.",
     "hint": "Work back one step at a time."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-jeeval",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "48/73",
   "level": "",
   "well": "Right: labour turnover, turnover with start and end staff, labour productivity, leavers from a turnover rate, employees from labour cost per unit, the retention target, the hotel occupancy question, % change in productivity, net benefit of the retention scheme and more.",
   "improve": "Q3b: no FTE method in your own work (700 added afterwards). Q4: right method, but gave 56.8% instead of 56.8p. Q5: found employee costs of 1125 but no % in your own work. Q8a: wrote 840 000 = 28% but did not divide by 0.28. Q8b: only done afterwards in purple. Q9: 200, 220 and 55 staff all right, but did not take away the 48 already employed. Q10a: added staff figures instead of 136 ÷ 160: 71.4%. Q12b: gave 2.5% (percentage points) not the % change (14.29%). Q14a: set up algebra but no answer. Q15: took profit away from costs (£110 000) instead of adding it; then right on your own figure but stopped at output, not employees. Q16a: added leavers and joiners over the start figure: 50%. Q16b: 40 ÷ 60: not the retention formula. Q20b: divided cost per employee by the number of employees; labour cost per unit = total labour cost ÷ output."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-dilshhan",
 "match": "dilshhan",
 "work": {
  "id": "w-dilshhan-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Your booklet had answers but no working at all. In the exam most calculation marks are for the working, so for every question here write each step on paper before you type the answer. If you are not sure where to start, use the clue.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A packing firm employs 40 full-time staff and 20 part-time staff who each work half the hours of a full-timer. Last month they packed 30 000 boxes. Calculate labour productivity per full-time equivalent (FTE) employee.",
     "answer": 600.0,
     "unit": "boxes per FTE",
     "working": "FTE = 40 + (20 × 0.5) = 50. 30 000 ÷ 50 = 600 boxes per FTE.",
     "hint": "Count each part-timer as half a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "On each shift, 15 workers work for 7.5 hours and are paid £12.80 per hour. The shift produces 3600 units. Calculate the labour cost per unit in pence.",
     "answer": 40.0,
     "unit": "p",
     "working": "Labour cost per shift = 15 × 7.5 × £12.80 = £1440. £1440 ÷ 3600 = £0.40 = 40p.",
     "hint": "Include the hours. Then turn pounds into pence (× 100)."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Data for a recruitment agency (£000): revenue 5200, salaries 1300, employer National Insurance 156, employer pension contributions 104, rent 400. Calculate employee costs as a percentage of turnover.",
     "answer": 30.0,
     "unit": "%",
     "working": "Employee costs = 1300 + 156 + 104 = 1560. 1560 ÷ 5200 × 100 = 30%.",
     "hint": "Employee costs include NI and pensions, not rent."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's employee costs were £1 260 000, which was 35% of its turnover. Calculate its turnover.",
     "answer": 3600000.0,
     "unit": "£",
     "working": "1 260 000 = 0.35 × turnover, so turnover = 1 260 000 ÷ 0.35 = £3 600 000.",
     "hint": "Divide by 0.35. Turnover must be bigger than employee costs."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "24 agents on a 7-hour shift handled 3360 calls. The target is 22 calls per agent per hour. How many more calls per shift are needed to hit the target?",
     "answer": 336,
     "unit": "calls",
     "working": "Target = 24 × 7 × 22 = 3696. 3696 − 3360 = 336 more.",
     "hint": "Work out the target total, then take away actual calls."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-dilshhan",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "50/73",
   "level": "",
   "well": "Right: labour turnover, turnover with start and end staff, labour productivity, leavers from a turnover rate, employees from labour cost per unit, units sold, the staffing plan, retention, the retention target and more.",
   "improve": "Answers only, with no working anywhere in the booklet; most match the solutions exactly. Q3b: 600 again: the FTE figure is 700. Q4: 57p with no working (56.8p). Q5: 27.9%: wrong, no working. Q8a: £300 000: place value (£3 000 000). Q11: 35.85%: wrong, no working (34.84%). Q17a: not attempted. Q17b: not attempted. Q18a: not attempted. Q18b: not attempted. Q20b: not attempted."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-sukhchain",
 "match": "sukhchain",
 "work": {
  "id": "w-sukhchain-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Nearly full marks. This short set checks rounding to two decimal places (Q14) and then stretches you with longer HR questions.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Weekly data for a manufacturer: total costs £210 000, profit £30 000, labour costs are 30% of turnover, labour cost per unit £2.40, labour productivity 150 units per employee. Calculate the number of employees.",
     "answer": 200.0,
     "unit": "employees",
     "working": "Turnover = £210 000 + £30 000 = £240 000. Labour costs = 0.3 × £240 000 = £72 000. Output = £72 000 ÷ £2.40 = 30 000. Employees = 30 000 ÷ 150 = 200.",
     "hint": "Work back one step at a time."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A bakery employs 18 full-time staff and 12 part-time staff who each work 60% of full-time hours. Weekly output is 9720 loaves. Calculate labour productivity per FTE employee. Give your answer to two decimal places.",
     "answer": 385.7143,
     "unit": "loaves per FTE",
     "working": "FTE = 18 + (12 × 0.6) = 25.2. 9720 ÷ 25.2 = 385.71 loaves per FTE.",
     "hint": "Each part-timer counts as 0.6 of a full-timer."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-sukhchain",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "72/73",
   "level": "",
   "well": "Everything except Q14a was right.",
   "improve": "Q14a: 29.4%: the question asked for two decimal places (29.43%)."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-rashmeet",
 "match": "rashmeet",
 "work": {
  "id": "w-rashmeet-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Strong booklet. This set goes over the three places you slipped (FTE staff, labour cost per unit the right way up, and leavers from a turnover rate) and then two longer questions.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A bakery employs 18 full-time staff and 12 part-time staff who each work 60% of full-time hours. Weekly output is 9720 loaves. Calculate labour productivity per FTE employee. Give your answer to two decimal places.",
     "answer": 385.7143,
     "unit": "loaves per FTE",
     "working": "FTE = 18 + (12 × 0.6) = 25.2. 9720 ÷ 25.2 = 385.71 loaves per FTE.",
     "hint": "Each part-timer counts as 0.6 of a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "On each shift, 15 workers work for 7.5 hours and are paid £12.80 per hour. The shift produces 3600 units. Calculate the labour cost per unit in pence.",
     "answer": 40.0,
     "unit": "p",
     "working": "Labour cost per shift = 15 × 7.5 × £12.80 = £1440. £1440 ÷ 3600 = £0.40 = 40p.",
     "hint": "Include the hours. Then turn pounds into pence (× 100)."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A call centre has an average of 280 staff. Its labour turnover last year was 12.5%. How many staff left during the year?",
     "answer": 35.0,
     "unit": "staff",
     "working": "12.5 = leavers ÷ 280 × 100, so leavers = 0.125 × 280 = 35.",
     "hint": "Rearrange: leavers = turnover rate × average staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-rashmeet",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "66/73",
   "level": "",
   "well": "Everything except Q3b, Q4, Q6, Q14a was right.",
   "improve": "Q3b: divided only part of the output by the 30 full-timers (560); FTE = 30 + 6 = 36, so 700. Q4: £2499.20 right, then 4400 ÷ 2499.20 (upside down): 176p instead of 56.8p. Q6: 1400 staff in your own work; 0.15 × 340 = 51 only added afterwards. Q14a: 29.4%: the question asked for two decimal places (29.43%)."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-sanchipreet",
 "match": "sanchipreet",
 "work": {
  "id": "w-sanchipreet-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Very strong. The one gap was labour cost per unit after automation, where you need total labour cost (staff × cost each) before dividing by output. The rest is stretch.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Before automation 50 staff made 140 000 units; after, 40 staff make 155 000 units. Calculate the percentage change in labour productivity, to two decimal places.",
     "answer": 38.3929,
     "unit": "%",
     "working": "Before: 2800. After: 3875. (3875 − 2800) ÷ 2800 × 100 = +38.39%.",
     "hint": "Productivity for each, then percentage change."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A bakery employs 18 full-time staff and 12 part-time staff who each work 60% of full-time hours. Weekly output is 9720 loaves. Calculate labour productivity per FTE employee. Give your answer to two decimal places.",
     "answer": 385.7143,
     "unit": "loaves per FTE",
     "working": "FTE = 18 + (12 × 0.6) = 25.2. 9720 ÷ 25.2 = 385.71 loaves per FTE.",
     "hint": "Each part-timer counts as 0.6 of a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-sanchipreet",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "71/73",
   "level": "",
   "well": "Everything except Q20b was right.",
   "improve": "Q20b: before: £2 325 000 total right, but did not finish (£12.92); after: divided one employee's cost by output instead of 60 × £33 500 (£10.15)."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-pravneet",
 "match": "pravneet",
 "work": {
  "id": "w-pravneet-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "You lost marks only on Q14, which you left until the class went through it. This set starts with two questions like Q14 (prices and costs changing together), then some stretch.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Labour costs rise by 4% and output rises by 2%. Calculate the percentage change in labour cost per unit, to two decimal places.",
     "answer": 1.9608,
     "unit": "%",
     "working": "1.04 ÷ 1.02 = 1.0196, so labour cost per unit rises by 1.96%.",
     "hint": "Labour cost per unit = labour costs ÷ output, so divide the two multipliers."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Weekly data for a manufacturer: total costs £210 000, profit £30 000, labour costs are 30% of turnover, labour cost per unit £2.40, labour productivity 150 units per employee. Calculate the number of employees.",
     "answer": 200.0,
     "unit": "employees",
     "working": "Turnover = £210 000 + £30 000 = £240 000. Labour costs = 0.3 × £240 000 = £72 000. Output = £72 000 ÷ £2.40 = 30 000. Employees = 30 000 ÷ 150 = 200.",
     "hint": "Work back one step at a time."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-pravneet",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "69/73",
   "level": "",
   "well": "Everything except Q14a, Q14b was right.",
   "improve": "Q14a: not done in your own work (only added afterwards in pink). Q14b: not done in your own work (only added afterwards in pink)."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-sanam",
 "match": "sanam",
 "work": {
  "id": "w-sanam-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "This set covers the HR questions you lost marks on: FTE staff, pence, working back from employee costs as a percentage, the hotel question, the retention scheme, prices and costs changing together, retention with joiners and labour cost per unit.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A packing firm employs 40 full-time staff and 20 part-time staff who each work half the hours of a full-timer. Last month they packed 30 000 boxes. Calculate labour productivity per full-time equivalent (FTE) employee.",
     "answer": 600.0,
     "unit": "boxes per FTE",
     "working": "FTE = 40 + (20 × 0.5) = 50. 30 000 ÷ 50 = 600 boxes per FTE.",
     "hint": "Count each part-timer as half a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "On each shift, 15 workers work for 7.5 hours and are paid £12.80 per hour. The shift produces 3600 units. Calculate the labour cost per unit in pence.",
     "answer": 40.0,
     "unit": "p",
     "working": "Labour cost per shift = 15 × 7.5 × £12.80 = £1440. £1440 ÷ 3600 = £0.40 = 40p.",
     "hint": "Include the hours. Then turn pounds into pence (× 100)."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's employee costs were £1 260 000, which was 35% of its turnover. Calculate its turnover.",
     "answer": 3600000.0,
     "unit": "£",
     "working": "1 260 000 = 0.35 × turnover, so turnover = 1 260 000 ÷ 0.35 = £3 600 000.",
     "hint": "Divide by 0.35. Turnover must be bigger than employee costs."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's turnover was £3 600 000 and it sells one product at £45. How many units did it sell?",
     "answer": 80000.0,
     "unit": "units",
     "working": "£3 600 000 ÷ £45 = 80 000 units.",
     "hint": "Turnover = price × quantity."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-sanam",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "49/73",
   "level": "",
   "well": "Right: labour turnover, turnover with start and end staff, labour productivity, employee costs %, leavers from a turnover rate, employees from labour cost per unit, the staffing plan, the retention target, % change in productivity and more.",
   "improve": "Q3b: not attempted (FTE = 30 + 6 = 36; 25 200 ÷ 36 = 700). Q4: £2499.20 ÷ 4400 right, but wrote 0.56 pence: it is £0.568, so 56.8p. Q8a: multiplied by 0.72 instead of dividing 840 000 by 0.28. Q8b: not attempted. Q10a: right formula (136 ÷ 160) but wrote 80% (85%). Q11: occupancy applied, but left out the 30 nights and used one employee's pay instead of 42 × £2150. Q13: found £5250 and 72 leavers, but not the 99 current leavers, the saving or the net benefit. Q14a: used 1.3 instead of 1.03 for the 3% rise. Q14b: percentage change worked out with the wrong figures. Q16a: averaged start staff and joiners (130); average = (200 + 220) ÷ 2 = 210. Q16b: not the retention formula. Q20b: divided one employee's cost by total output; need total labour cost (75 × £31 000) ÷ output."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-prabhleen",
 "match": "prabhleen",
 "work": {
  "id": "w-prabhleen-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "This set goes back over the HR questions you lost marks on, especially working backwards: finding leavers from a rate, turnover from a percentage, staff needed for a target and employees from labour costs. Check each step: multiply or divide?\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A call centre has an average of 280 staff. Its labour turnover last year was 12.5%. How many staff left during the year?",
     "answer": 35.0,
     "unit": "staff",
     "working": "12.5 = leavers ÷ 280 × 100, so leavers = 0.125 × 280 = 35.",
     "hint": "Rearrange: leavers = turnover rate × average staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's employee costs were £1 260 000, which was 35% of its turnover. Calculate its turnover.",
     "answer": 3600000.0,
     "unit": "£",
     "working": "1 260 000 = 0.35 × turnover, so turnover = 1 260 000 ÷ 0.35 = £3 600 000.",
     "hint": "Divide by 0.35. Turnover must be bigger than employee costs."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A brewery's turnover was £3 600 000 and it sells one product at £45. How many units did it sell?",
     "answer": 80000.0,
     "unit": "units",
     "working": "£3 600 000 ÷ £45 = 80 000 units.",
     "hint": "Turnover = price × quantity."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "60 production staff currently make 7200 units a week. A new order means the business must make 10 000 units a week. Training will raise labour productivity by 10%. How many extra staff are needed?",
     "answer": 16,
     "unit": "staff",
     "working": "Productivity = 7200 ÷ 60 = 120. New = 120 × 1.1 = 132. 10 000 ÷ 132 = 75.8, so 76 staff. Extra = 76 − 60 = 16.",
     "hint": "Round the staff needed up, then take away the current staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Weekly data for a manufacturer: total costs £210 000, profit £30 000, labour costs are 30% of turnover, labour cost per unit £2.40, labour productivity 150 units per employee. Calculate the number of employees.",
     "answer": 200.0,
     "unit": "employees",
     "working": "Turnover = £210 000 + £30 000 = £240 000. Labour costs = 0.3 × £240 000 = £72 000. Output = £72 000 ÷ £2.40 = 30 000. Employees = 30 000 ÷ 150 = 200.",
     "hint": "Work back one step at a time."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "24 agents on a 7-hour shift handled 3360 calls. The target is 22 calls per agent per hour. How many more calls per shift are needed to hit the target?",
     "answer": 336,
     "unit": "calls",
     "working": "Target = 24 × 7 × 22 = 3696. 3696 − 3360 = 336 more.",
     "hint": "Work out the target total, then take away actual calls."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Before automation 50 staff made 140 000 units; after, 40 staff make 155 000 units. Calculate the percentage change in labour productivity, to two decimal places.",
     "answer": 38.3929,
     "unit": "%",
     "working": "Before: 2800. After: 3875. (3875 − 2800) ÷ 2800 × 100 = +38.39%.",
     "hint": "Productivity for each, then percentage change."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-prabhleen",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "55/73",
   "level": "",
   "well": "Right: labour turnover, turnover with start and end staff, labour productivity, FTE productivity, labour cost per unit in pence, employee costs %, employees from labour cost per unit, turnover from employee costs %, units sold and more.",
   "improve": "Q6: multiplied 15 × 340 (5100): the rate is 15%, so 0.15 × 340 = 51. Q9: 200 and 220 right, then divided 220 by 12 000 instead of 12 000 ÷ 220 = 54.5, so 55 staff, 7 extra. Q11: 2700 nights and £259 200 right; employee costs should be 42 × £2150 = £90 300, not 2150 × 30. Q13: £5250 right; leavers are 0.22 × 450 = 99 and 0.16 × 450 = 72, not 450 ÷ 0.22. Q14a: set up £100 and £30 but did not go on: new turnover £105, new costs £30.90. Q14b: not answered (3%). Q15: right until 30 000 units, then multiplied by 120 instead of dividing (250 employees). Q16b: 185 ÷ 200 right but left as 0.925: multiply by 100 for 92.5%. Q17b: added 4620 to 5040 instead of taking it away (420). Q20a: 2400 and 3300 right, but % change wrong: (3300 − 2400) ÷ 2400 × 100 = 37.5%."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-jeevan",
 "match": "jeevan",
 "work": {
  "id": "w-jeevan-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "This set covers the HR questions you did not finish in your own work: averaging staff numbers (divide by 2), FTE staff, employee costs %, prices and costs changing together, retention and the call centre target.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Lindon Hotels had 180 staff on 1 January and 220 staff on 31 December. During the year, 30 staff left. Calculate labour turnover for the year. Give your answer to one decimal place.",
     "answer": 15.0,
     "unit": "%",
     "working": "Average staff = (180 + 220) ÷ 2 = 200. 30 ÷ 200 × 100 = 15.0%.",
     "hint": "Work out the average number of staff first."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A garden centre had 150 staff at the start of the year and 170 at the end. 36 staff left during the year. Calculate labour turnover. Give your answer to one decimal place.",
     "answer": 22.5,
     "unit": "%",
     "working": "Average staff = (150 + 170) ÷ 2 = 160. 36 ÷ 160 × 100 = 22.5%.",
     "hint": "Leavers ÷ average staff × 100. Do not add the two staff figures without halving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A packing firm employs 40 full-time staff and 20 part-time staff who each work half the hours of a full-timer. Last month they packed 30 000 boxes. Calculate labour productivity per full-time equivalent (FTE) employee.",
     "answer": 600.0,
     "unit": "boxes per FTE",
     "working": "FTE = 40 + (20 × 0.5) = 50. 30 000 ÷ 50 = 600 boxes per FTE.",
     "hint": "Count each part-timer as half a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Data for a recruitment agency (£000): revenue 5200, salaries 1300, employer National Insurance 156, employer pension contributions 104, rent 400. Calculate employee costs as a percentage of turnover.",
     "answer": 30.0,
     "unit": "%",
     "working": "Employee costs = 1300 + 156 + 104 = 1560. 1560 ÷ 5200 × 100 = 30%.",
     "hint": "Employee costs include NI and pensions, not rent."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A leisure chain had 300 staff on 1 January. During the year 50 staff left, of whom 20 had joined during that same year. Calculate the labour retention rate for the year.",
     "answer": 90.0,
     "unit": "%",
     "working": "Leavers from the original 300 = 50 − 20 = 30. Still employed = 300 − 30 = 270. 270 ÷ 300 × 100 = 90%.",
     "hint": "Only count leavers who were there at the start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "24 agents on a 7-hour shift handled 3360 calls. The target is 22 calls per agent per hour. How many more calls per shift are needed to hit the target?",
     "answer": 336,
     "unit": "calls",
     "working": "Target = 24 × 7 × 22 = 3696. 3696 − 3360 = 336 more.",
     "hint": "Work out the target total, then take away actual calls."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-jeevan",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "58/73",
   "level": "",
   "well": "Right: labour turnover, labour productivity, labour cost per unit in pence, leavers from a turnover rate, employees from labour cost per unit, turnover from employee costs %, units sold, the staffing plan, retention and more.",
   "improve": "Q2: added 210 + 250 but did not divide by 2 (average 230): 10%. Q3b: not done in your own work (only added afterwards in teal). Q5: employee costs £1 125 000 right; the % only added afterwards. Q14a: not done in your own work. Q14b: not done in your own work. Q16a: divided by 260 (start + joiners) instead of the average 210; the 19% does not follow from your working. Q16b: found 15 leavers from the start group but gave 7.5% (the loss): retention = 185 ÷ 200 = 92.5%. Q17b: not done in your own work."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-anhadvir",
 "match": "anhadvir",
 "work": {
  "id": "w-anhadvir-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Strong booklet. This set checks the two places you lost marks: finishing the net benefit by taking off the scheme cost, and giving money answers to the nearest penny.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "After automation, 40 staff each cost £31 000 a year and output is 155 000 units. Calculate labour cost per unit, to the nearest penny.",
     "answer": 8.0,
     "unit": "£",
     "working": "40 × £31 000 = £1 240 000. £1 240 000 ÷ 155 000 = £8.00.",
     "hint": "Total labour cost ÷ output. The answer is in pounds."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Employee costs are 25% of turnover. Next year prices rise by 8%, the same volume is sold and employee costs rise by 4%. Calculate employee costs as a percentage of turnover next year, to two decimal places.",
     "answer": 24.0741,
     "unit": "%",
     "working": "Turnover £100 → £108. Employee costs £25 → £26. 26 ÷ 108 × 100 = 24.07%.",
     "hint": "Pick £100 of turnover to start."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-anhadvir",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "70/73",
   "level": "",
   "well": "Everything except Q13, Q20b was right.",
   "improve": "Q13: stopped at the saving (£141 750): the net benefit takes off the £95 000 scheme cost (£46 750). Q20b: right method, but the question asked for the nearest penny: £12.92 and £10.15 (not £12.9 and £10.2)."
  }
 ]
},
{
 "id": "seed-2026-11-20-hr-karam",
 "match": "karam",
 "work": {
  "id": "w-karam-hr-2011",
  "title": "Follow-up: HR calculations",
  "due": "2026-11-27",
  "spec": {
   "title": "Follow-up: HR calculations",
   "intro": "Full marks. These are longer stretch questions on the same topics.\n\nType numbers only: no £ signs or commas. Round to 2 decimal places unless the question says otherwise.",
   "items": [
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A bakery employs 18 full-time staff and 12 part-time staff who each work 60% of full-time hours. Weekly output is 9720 loaves. Calculate labour productivity per FTE employee. Give your answer to two decimal places.",
     "answer": 385.7143,
     "unit": "loaves per FTE",
     "working": "FTE = 18 + (12 × 0.6) = 25.2. 9720 ÷ 25.2 = 385.71 loaves per FTE.",
     "hint": "Each part-timer counts as 0.6 of a full-timer."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "60 production staff currently make 7200 units a week. A new order means the business must make 10 000 units a week. Training will raise labour productivity by 10%. How many extra staff are needed?",
     "answer": 16,
     "unit": "staff",
     "working": "Productivity = 7200 ÷ 60 = 120. New = 120 × 1.1 = 132. 10 000 ÷ 132 = 75.8, so 76 staff. Extra = 76 − 60 = 16.",
     "hint": "Round the staff needed up, then take away the current staff."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "A warehouse has 600 staff and labour turnover of 18%. Each leaver costs £2900 to replace and £1100 to train. A £110 000 retention scheme would cut turnover to 12%. Calculate the net benefit of the scheme.",
     "answer": 34000.0,
     "unit": "£",
     "working": "Cost per leaver = £4000. Leavers 108 → 72, so 36 fewer. Saving = 36 × £4000 = £144 000. Net benefit = £144 000 − £110 000 = £34 000.",
     "hint": "Take the cost of the scheme off the saving."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "Labour costs rise by 4% and output rises by 2%. Calculate the percentage change in labour cost per unit, to two decimal places.",
     "answer": 1.9608,
     "unit": "%",
     "working": "1.04 ÷ 1.02 = 1.0196, so labour cost per unit rises by 1.96%.",
     "hint": "Labour cost per unit = labour costs ÷ output, so divide the two multipliers."
    },
    {
     "type": "calc",
     "topic": "3.6.2",
     "skill": "quant",
     "q": "An 80-room hotel had an average occupancy of 65% in July (31 nights) at £110 per room per night. It has 28 employees costing £2300 each a month. Calculate employee costs as a percentage of turnover for July, to two decimal places.",
     "answer": 36.3185,
     "unit": "%",
     "working": "Room nights = 80 × 0.65 × 31 = 1612. Turnover = 1612 × £110 = £177 320. Employee costs = 28 × £2300 = £64 400. 64 400 ÷ 177 320 × 100 = 36.32%.",
     "hint": "Occupancy and the number of nights both matter."
    }
   ]
  }
 },
 "marks": [
  {
   "qid": "seed-hr-karam",
   "t": "2026-11-20T09:00:00.000Z",
   "tool": "calcpractice",
   "question": "HR data: labour turnover, labour retention, labour productivity and employee costs as a percentage of turnover (20 questions, 73 marks)",
   "mark": "73/73",
   "level": "",
   "well": "Full marks (73/73). Every step was set out clearly.",
   "improve": "Nothing lost."
  }
 ]
}
];
