export const sql_window_functions = {
  "id": "sql-window-functions",
  "title": "Window Functions",
  "difficulty": "advanced",
  "estimatedMinutes": 35,
  "tldr": [
    "Window functions perform calculations across a set of rows related to the current row, without collapsing rows like GROUP BY.",
    "OVER clause defines the window (partition, order, frame). PARTITION BY divides rows into groups. ORDER BY orders rows within each partition.",
    "Ranking: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(n). Value: LEAD(), LAG(), FIRST_VALUE(), LAST_VALUE(). Aggregate: SUM(), AVG() as window functions.",
    "Window functions are evaluated after WHERE and GROUP BY but before ORDER BY and LIMIT."
  ],
  "laymanDefinition": "A window function is like giving each person in a line a number based on their height WITHOUT making them leave the line. GROUP BY would make them form separate lines by category. Window functions keep everyone in place while still calculating group statistics.",
  "deepDive": [
    {
      "heading": "OVER and PARTITION BY",
      "text": "OVER () — window covers entire result set. OVER (PARTITION BY dept_id) — separate window per department. PARTITION BY divides rows into groups where the function operates independently. Without PARTITION BY, the function applies to all rows."
    },
    {
      "heading": "Ranking Functions",
      "text": "ROW_NUMBER() — unique sequential number per row (ties get different numbers). RANK() — same rank for ties, skips numbers. DENSE_RANK() — same rank for ties, no gaps. NTILE(n) — divides rows into n buckets."
    },
    {
      "heading": "Window ORDER BY",
      "text": "OVER (ORDER BY salary) — cumulative/windowed order. Changes behavior of aggregate window functions: SUM(salary) OVER (ORDER BY id) gives running total. For ranking functions, ORDER BY determines the ranking order."
    },
    {
      "heading": "Frame Specification",
      "text": "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW — default frame for ORDER BY aggregates. RANGE vs ROWS: RANGE includes peers (same ORDER BY value). ROWS is strict row positions. Frame options: UNBOUNDED PRECEDING, n PRECEDING, CURRENT ROW."
    },
    {
      "heading": "LEAD and LAG",
      "text": "LAG(column, n, default) — access previous row value. LEAD(column, n, default) — access next row value. Default n is 1. Default is used when no previous/next row exists. Useful for comparing current value to previous/next: month-over-month growth."
    }
  ],
  "interviewAnswer": "Window functions are arguably the most powerful SQL feature for analytical queries. They enable running totals, moving averages, rankings, period-over-period comparisons, and much more without self-joins or subqueries.",
  "interviewQuestions": [
    {
      "question": "What is a window function?",
      "answer": "A function that performs calculations across a set of rows related to the current row, preserving individual row identity."
    },
    {
      "question": "What does PARTITION BY do?",
      "answer": "Divides rows into groups where the window function operates independently. Like GROUP BY but without collapsing rows."
    },
    {
      "question": "What is the difference between ROW_NUMBER, RANK, and DENSE_RANK?",
      "answer": "ROW_NUMBER: unique sequential (ties get different numbers). RANK: ties share rank, gaps. DENSE_RANK: ties share rank, no gaps."
    },
    {
      "question": "What does LEAD() do?",
      "answer": "Accesses the value of the next row in the window order. LAG() accesses the previous row."
    },
    {
      "question": "What is a frame in window functions?",
      "answer": "Defines the set of rows within the window for calculations. ROWS BETWEEN start AND end. Default: RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW."
    },
    {
      "question": "What is the difference between ROWS and RANGE?",
      "answer": "ROWS: strict physical row positions. RANGE: logical range including peers (rows with same ORDER BY value)."
    },
    {
      "question": "Can you use aggregate functions as window functions?",
      "answer": "Yes. SUM(salary) OVER (PARTITION BY dept_id) gives department total alongside each row."
    },
    {
      "question": "What is a running total?",
      "answer": "SUM(column) OVER (ORDER BY date) — cumulative sum ordered by date."
    },
    {
      "question": "What is a moving average?",
      "answer": "AVG(column) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) — 7-day moving average."
    },
    {
      "question": "Can window functions be used in WHERE?",
      "answer": "No. Window functions are evaluated after WHERE. Use a subquery or CTE to filter on window function results."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Window Functions</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ROW_NUMBER</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sequential</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RANK/DENSE</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ranking</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LEAD/LAG</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Prev/Next</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SUM/AVG</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Aggregate</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NTILE</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Buckets</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Window Functions</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Analytical calculations across related r</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ows without collapsing data.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Window Functions: ROW_NUMBER, RANK, LEAD/LAG, aggr</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">egates — all with OVER clause.</text></svg>",
  "codeExamples": [
    {
      "title": "Ranking Employees by Salary",
      "useCase": "Top earners per department.",
      "code": "SELECT\n  name, department, salary,\n  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn,\n  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rk,\n  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dr\nFROM employees\nORDER BY department, rn;",
      "description": "Compares ROW_NUMBER, RANK, and DENSE_RANK on department salary data."
    },
    {
      "title": "Running Total and Moving Average",
      "useCase": "Cumulative sales.",
      "code": "SELECT\n  order_date, amount,\n  SUM(amount) OVER (ORDER BY order_date) AS running_total,\n  AVG(amount) OVER (ORDER BY order_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg_7d\nFROM orders\nORDER BY order_date;",
      "description": "Running total and 7-day moving average of order amounts."
    },
    {
      "title": "LEAD and LAG for Comparison",
      "useCase": "Month-over-month growth.",
      "code": "SELECT\n  month, total_sales,\n  LAG(total_sales, 1) OVER (ORDER BY month) AS prev_month,\n  ROUND((total_sales - LAG(total_sales, 1) OVER (ORDER BY month))\n    / LAG(total_sales, 1) OVER (ORDER BY month) * 100, 2)\n    AS growth_pct\nFROM monthly_sales\nORDER BY month;",
      "description": "Calculates month-over-month sales growth percentage."
    },
    {
      "title": "NTILE for Percentiles",
      "useCase": "Divide employees into quartiles.",
      "code": "SELECT\n  name, salary,\n  NTILE(4) OVER (ORDER BY salary DESC) AS quartile\nFROM employees\nORDER BY salary DESC;",
      "description": "NTILE(4) divides employees into 4 salary quartiles."
    },
    {
      "title": "First and Last Values",
      "useCase": "Salary range per department.",
      "code": "SELECT\n  department, name, salary,\n  FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) AS highest_paid,\n  LAST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC\n    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_paid\nFROM employees\nORDER BY department, salary DESC;",
      "description": "Shows highest and lowest paid employee name per department."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which function gives unique sequential numbers?",
      "options": [
        "RANK",
        "ROW_NUMBER",
        "DENSE_RANK",
        "NTILE"
      ],
      "answer": 1,
      "explanation": "ROW_NUMBER gives unique sequential numbers with no ties."
    },
    {
      "question": "What does PARTITION BY do?",
      "options": [
        "Groups rows",
        "Orders rows",
        "Limits rows",
        "Filters rows"
      ],
      "answer": 0,
      "explanation": "PARTITION BY divides rows into independent groups."
    },
    {
      "question": "What does LAG() return?",
      "options": [
        "Next row value",
        "Previous row value",
        "First row value",
        "Current row value"
      ],
      "answer": 1,
      "explanation": "LAG() accesses the value from the previous row."
    },
    {
      "question": "What is the default frame with ORDER BY?",
      "options": [
        "All rows",
        "Current row only",
        "UNBOUNDED PRECEDING TO CURRENT ROW",
        "Previous 10 rows"
      ],
      "answer": 2,
      "explanation": "Default frame with ORDER BY is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW."
    },
    {
      "question": "Can window functions be used in WHERE?",
      "options": [
        "Yes",
        "No",
        "Only with aggregates",
        "Only with ranking"
      ],
      "answer": 1,
      "explanation": "Window functions execute after WHERE, so they cannot be used directly in WHERE."
    },
    {
      "question": "What does NTILE(10) do?",
      "options": [
        "Top 10",
        "Deciles",
        "10 rows",
        "10 partitions"
      ],
      "answer": 1,
      "explanation": "NTILE(10) divides rows into 10 approximately equal buckets (deciles)."
    }
  ]
};
