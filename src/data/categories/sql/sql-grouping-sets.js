export const sql_grouping_sets = {
  "id": "sql-grouping-sets",
  "title": "GROUPING SETS, ROLLUP & CUBE",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "GROUPING SETS allow multiple GROUP BY queries in a single statement, returning combined results.",
    "ROLLUP generates hierarchical subtotals from the most detailed to the grand total level.",
    "CUBE generates subtotals for all possible combinations of grouping columns.",
    "These are advanced reporting features, fully supported in PostgreSQL and SQL Server, partially in MySQL."
  ],
  "laymanDefinition": "ROLLUP is like getting subtotals in a spreadsheet — department totals, then company total. CUBE is like every possible subtotal combination — by department, by status, by both, and grand total.",
  "deepDive": [
    {
      "heading": "GROUPING SETS",
      "text": "GROUP BY GROUPING SETS ((col1), (col2), ()) — runs three groupings: by col1, by col2, and grand total. More efficient than UNION ALL of separate GROUP BY queries. Each grouping set can have multiple columns."
    },
    {
      "heading": "ROLLUP",
      "text": "GROUP BY ROLLUP (col1, col2) — generates subtotals at each level: (col1, col2), (col1), (). Hierarchy: col1 → col1+col2 → grand total. Useful for hierarchical data: year → month → day reports."
    },
    {
      "heading": "CUBE",
      "text": "GROUP BY CUBE (col1, col2) — generates all possible subtotal combinations: (col1, col2), (col1), (col2), (). N columns = 2^N grouping sets. Can be expensive for many columns."
    },
    {
      "heading": "GROUPING() Function",
      "text": "GROUPING(column) returns 1 if the row is a subtotal for that column (NULL means aggregated), 0 for detail rows. Essential for distinguishing NULL in data from NULL representing subtotals."
    },
    {
      "heading": "Use Cases",
      "text": "Financial reports needing multiple aggregation levels. Sales dashboards: by region, by product, by both, total. Inventory summaries. Any report requiring drill-down with totals."
    }
  ],
  "interviewAnswer": "ROLLUP, CUBE, and GROUPING SETS are powerful reporting features that produce multiple levels of aggregation in a single query, avoiding multiple UNION queries.",
  "interviewQuestions": [
    {
      "question": "What is GROUPING SETS?",
      "answer": "A GROUP BY variant that specifies multiple groupings in one query. More efficient than UNION of separate GROUP BY queries."
    },
    {
      "question": "What does ROLLUP do?",
      "answer": "Generates hierarchical subtotals. GROUP BY ROLLUP (a, b) produces totals at (a,b), (a), and () levels."
    },
    {
      "question": "What does CUBE do?",
      "answer": "Generates subtotals for all combinations. GROUP BY CUBE (a, b) produces (a,b), (a), (b), and ()."
    },
    {
      "question": "What is the GROUPING() function?",
      "answer": "Returns 1 if a row is a subtotal for that column. Helps distinguish true NULLs from subtotal NULLs."
    },
    {
      "question": "How is ROLLUP different from CUBE?",
      "answer": "ROLLUP generates only hierarchical subtotals (top-down). CUBE generates all possible combinations."
    },
    {
      "question": "How many groupings does CUBE of N columns produce?",
      "answer": "2^N grouping sets. CUBE (a, b, c) produces 8 groupings."
    },
    {
      "question": "Can you use WHERE with ROLLUP?",
      "answer": "Yes. WHERE filters rows before the rollup aggregation."
    },
    {
      "question": "What databases support GROUPING SETS?",
      "answer": "PostgreSQL, SQL Server, Oracle fully support. MySQL has partial support for ROLLUP but not CUBE or GROUPING SETS."
    },
    {
      "question": "How is ROLLUP used in reporting?",
      "answer": "Sales reports by year → quarter → month. Employee counts by department → location → total."
    },
    {
      "question": "What is the alternative without GROUPING SETS?",
      "answer": "Multiple GROUP BY queries combined with UNION ALL. Less efficient and more verbose."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GROUPING SETS, ROLLUP & CUBE</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GROUP BY</text><text x=\"75\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Basic grouping</text><line x1=\"140\" y1=\"55\" x2=\"170\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GROUPING SETS</text><text x=\"245\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Specific groupings</text><line x1=\"310\" y1=\"53\" x2=\"340\" y2=\"53\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"415\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ROLLUP</text><text x=\"415\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hierarchical totals</text><rect x=\"180\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"245\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CUBE</text><text x=\"245\" y=\"104\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All combinations</text><rect x=\"350\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"415\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GROUPING()</text><text x=\"415\" y=\"104\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Identify subtotals</text><text x=\"240\" y=\"155\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GROUPING SETS / ROLLUP / CUBE: Multiple aggregatio</text><text x=\"240\" y=\"167\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">n levels in one query.</text></svg>",
  "codeExamples": [
    {
      "title": "ROLLUP Example",
      "useCase": "Department subtotals + grand total.",
      "code": "SELECT department, status, COUNT(*) AS count\nFROM employees\nGROUP BY ROLLUP (department, status)\nORDER BY department, status;",
      "description": "Counts employees by dept+status, dept subtotal, and grand total."
    },
    {
      "title": "CUBE Example",
      "useCase": "All combination totals.",
      "code": "SELECT department, status, COUNT(*) AS count\nFROM employees\nGROUP BY CUBE (department, status);",
      "description": "Counts for all combinations: (dept,status), (dept), (status), and total."
    },
    {
      "title": "GROUPING SETS",
      "useCase": "Specific groupings only.",
      "code": "SELECT department, status, COUNT(*) AS count\nFROM employees\nGROUP BY GROUPING SETS ((department), (status), ());",
      "description": "Three groupings: by dept, by status, and grand total only."
    },
    {
      "title": "GROUPING() Function",
      "useCase": "Identify subtotal rows.",
      "code": "SELECT\n  department,\n  status,\n  COUNT(*) AS count,\n  GROUPING(department) AS is_dept_total,\n  GROUPING(status) AS is_status_total\nFROM employees\nGROUP BY ROLLUP (department, status);",
      "description": "GROUPING() returns 1 when the column is part of a subtotal row."
    },
    {
      "title": "ROLLUP with ORDER BY",
      "useCase": "Controlling sort order.",
      "code": "SELECT\n  EXTRACT(YEAR FROM order_date) AS year,\n  EXTRACT(MONTH FROM order_date) AS month,\n  SUM(amount) AS total_sales\nFROM orders\nGROUP BY ROLLUP (year, month)\nORDER BY year, month NULLS LAST;",
      "description": "Monthly and yearly sales with grand total."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does ROLLUP generate?",
      "options": [
        "All combinations",
        "Hierarchical subtotals",
        "Specific groupings",
        "No subtotals"
      ],
      "answer": 1,
      "explanation": "ROLLUP creates hierarchical subtotals."
    },
    {
      "question": "How many groupings for CUBE (a,b,c)?",
      "options": [
        "3",
        "6",
        "8",
        "9"
      ],
      "answer": 2,
      "explanation": "CUBE with 3 columns = 2^3 = 8 groupings."
    },
    {
      "question": "What does GROUPING() function do?",
      "options": [
        "Counts rows",
        "Identifies subtotal rows",
        "Groups data",
        "Orders results"
      ],
      "answer": 1,
      "explanation": "GROUPING() identifies subtotal rows (returns 1)."
    },
    {
      "question": "Which is more efficient than multiple UNION GROUP BY?",
      "options": [
        "ROLLUP",
        "GROUPING SETS",
        "CUBE",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "All are more efficient than multiple UNION queries."
    },
    {
      "question": "Does MySQL fully support CUBE?",
      "options": [
        "Yes",
        "No",
        "Partial",
        "Depends on version"
      ],
      "answer": 1,
      "explanation": "MySQL does not support CUBE or GROUPING SETS."
    },
    {
      "question": "What is the hierarchy for ROLLUP (a,b)?",
      "options": [
        "(a) then (a,b)",
        "(a,b) then (a) then ()",
        "(a), (b), ()",
        "(a,b) only"
      ],
      "answer": 1,
      "explanation": "ROLLUP produces (a,b), then (a), then grand total ()."
    }
  ]
};
