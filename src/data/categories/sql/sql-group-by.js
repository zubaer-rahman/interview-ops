export const sql_group_by = {
  "id": "sql-group-by",
  "title": "GROUP BY & HAVING",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "GROUP BY groups rows that have the same values in specified columns, enabling aggregate calculations per group.",
    "HAVING filters groups after aggregation, similar to how WHERE filters rows before aggregation.",
    "GROUP BY columns must appear in SELECT (unless aggregated). SELECT can only have GROUP BY columns and aggregate functions.",
    "GROUP BY works with COUNT, SUM, AVG, MIN, MAX to compute per-group statistics."
  ],
  "laymanDefinition": "GROUP BY is like sorting items into buckets by category. Once sorted, you can count items in each bucket, find the average weight, or calculate the total value per bucket.",
  "deepDive": [
    {
      "heading": "GROUP BY Basics",
      "text": "SELECT department, COUNT(*) FROM employees GROUP BY department. Groups employees by department and counts per group. GROUP BY collapses groups — one row per unique combination of grouping columns."
    },
    {
      "heading": "GROUP BY Rules",
      "text": "SELECT can only include: columns in GROUP BY clause, aggregate functions, or expressions based on those. PostgreSQL is stricter than MySQL about this rule (MySQL allows non-aggregated columns not in GROUP BY — can lead to unexpected results)."
    },
    {
      "heading": "HAVING vs WHERE",
      "text": "WHERE filters individual rows before grouping. HAVING filters groups after aggregation. WHERE cannot use aggregate functions. HAVING can. Order: WHERE → GROUP BY → HAVING → ORDER BY."
    },
    {
      "heading": "Multiple Columns in GROUP BY",
      "text": "GROUP BY col1, col2 — groups on unique combinations. Example: GROUP BY department, status groups by department and status together, creating subgroups."
    },
    {
      "heading": "GROUP BY with Expressions",
      "text": "Group by computed values: GROUP BY EXTRACT(YEAR FROM order_date), GROUP BY UPPER(city). Can alias the expression in SELECT and use in GROUP BY (PostgreSQL: GROUP BY alias, MySQL: use expression)."
    }
  ],
  "interviewAnswer": "GROUP BY with HAVING is the standard pattern for grouped aggregations. Understanding the difference between WHERE and HAVING filtering is crucial.",
  "interviewQuestions": [
    {
      "question": "What does GROUP BY do?",
      "answer": "Groups rows with same values in specified columns, enabling per-group aggregate calculations."
    },
    {
      "question": "What is the difference between WHERE and HAVING?",
      "answer": "WHERE filters rows before grouping. HAVING filters groups after aggregation. WHERE cannot use aggregate functions."
    },
    {
      "question": "What columns can appear in SELECT with GROUP BY?",
      "answer": "Only GROUP BY columns, aggregate functions, or expressions based on those columns."
    },
    {
      "question": "Can you GROUP BY multiple columns?",
      "answer": "Yes. GROUP BY col1, col2 groups on unique combinations of both columns."
    },
    {
      "question": "What happens if you omit GROUP BY but use an aggregate?",
      "answer": "The aggregate applies to all rows, returning a single row."
    },
    {
      "question": "Can you use aliases in GROUP BY?",
      "answer": "PostgreSQL supports GROUP BY alias. MySQL requires the full expression."
    },
    {
      "question": "How do you filter before grouping?",
      "answer": "Use WHERE before GROUP BY. WHERE processes individual rows, not groups."
    },
    {
      "question": "How do you filter after grouping?",
      "answer": "Use HAVING after GROUP BY. HAVING checks conditions on aggregate results."
    },
    {
      "question": "What is the execution order of clauses?",
      "answer": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."
    },
    {
      "question": "Can HAVING use non-aggregated columns?",
      "answer": "Yes, if they appear in GROUP BY. HAVING department = \\'Engineering\\' is valid if GROUP BY department."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GROUP BY & HAVING</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Raw Data</text><text x=\"80\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All rows</text><line x1=\"150\" y1=\"55\" x2=\"180\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"35\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"260\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WHERE</text><text x=\"260\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Filter rows</text><line x1=\"190\" y1=\"65\" x2=\"190\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"85\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"260\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GROUP BY</text><text x=\"260\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Group rows</text><line x1=\"330\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"190\" y1=\"115\" x2=\"190\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"135\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"260\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HAVING</text><text x=\"260\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Filter groups</text><line x1=\"330\" y1=\"150\" x2=\"360\" y2=\"150\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"35\" width=\"110\" height=\"150\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"425\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Result</text><text x=\"425\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">One row per group wi</text><text x=\"425\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">th aggregate values.</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GROUP BY & HAVING: Group rows, apply aggregates, f</text><text x=\"240\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ilter groups.</text></svg>",
  "codeExamples": [
    {
      "title": "GROUP BY with COUNT",
      "useCase": "Employees per department.",
      "code": "SELECT department, COUNT(*) AS employee_count\nFROM employees\nGROUP BY department\nORDER BY employee_count DESC;",
      "description": "Counts employees per department, sorted by count descending."
    },
    {
      "title": "GROUP BY with Multiple Aggregates",
      "useCase": "Salary stats per dept.",
      "code": "SELECT\n  department,\n  COUNT(*) AS count,\n  ROUND(AVG(salary), 2) AS avg_salary,\n  MAX(salary) AS max_salary\nFROM employees\nGROUP BY department;",
      "description": "Multiple aggregates per department."
    },
    {
      "title": "HAVING to Filter Groups",
      "useCase": "Departments with high avg salary.",
      "code": "SELECT department, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 70000;",
      "description": "Filters groups where average salary exceeds 70000."
    },
    {
      "title": "WHERE + GROUP BY + HAVING",
      "useCase": "Complete pipeline.",
      "code": "SELECT department, AVG(salary) AS avg_salary\nFROM employees\nWHERE hire_date > '2020-01-01'\nGROUP BY department\nHAVING AVG(salary) > 50000\nORDER BY avg_salary DESC;",
      "description": "Filters recent hires, groups, filters groups, orders."
    },
    {
      "title": "GROUP BY Multiple Columns",
      "useCase": "Subtotals per combination.",
      "code": "SELECT department, status, COUNT(*) AS count\nFROM employees\nGROUP BY department, status\nORDER BY department, status;",
      "description": "Groups by department and status together — unique combinations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does GROUP BY do?",
      "options": [
        "Filters rows",
        "Groups rows for aggregation",
        "Orders results",
        "Limits rows"
      ],
      "answer": 1,
      "explanation": "GROUP BY groups rows for per-group aggregation."
    },
    {
      "question": "Which filters groups after aggregation?",
      "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "GROUP FILTER"
      ],
      "answer": 1,
      "explanation": "HAVING filters groups after aggregation."
    },
    {
      "question": "Can HAVING use aggregate functions?",
      "options": [
        "Yes",
        "No",
        "Only COUNT",
        "Only SUM"
      ],
      "answer": 0,
      "explanation": "HAVING can use aggregate functions like AVG, COUNT, SUM."
    },
    {
      "question": "What columns are allowed in SELECT with GROUP BY?",
      "options": [
        "Any column",
        "GROUP BY columns + aggregates",
        "Only aggregates",
        "Only GROUP BY columns"
      ],
      "answer": 1,
      "explanation": "Only GROUP BY columns and aggregate functions."
    },
    {
      "question": "What comes after GROUP BY in execution order?",
      "options": [
        "WHERE",
        "HAVING",
        "ORDER BY",
        "FROM"
      ],
      "answer": 1,
      "explanation": "Execution order: WHERE → GROUP BY → HAVING → ORDER BY."
    },
    {
      "question": "What does GROUP BY col1, col2 do?",
      "options": [
        "Groups on col1 only",
        "Groups on unique pairs",
        "Two separate groups",
        "Errors"
      ],
      "answer": 1,
      "explanation": "Groups rows on unique combinations of col1 and col2."
    }
  ]
};
