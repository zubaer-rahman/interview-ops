export const sql_conditional_expressions = {
  "id": "sql-conditional-expressions",
  "title": "Conditional Expressions",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Conditional expressions enable if-then-else logic within SQL queries without procedural code.",
    "CASE is the most versatile conditional expression with two syntaxes: simple CASE (equality) and searched CASE (arbitrary conditions).",
    "COALESCE returns the first non-NULL value from a list. NULLIF returns NULL if two values are equal.",
    "GREATEST and LEAST return the maximum/minimum value from a list of expressions."
  ],
  "laymanDefinition": "CASE is like a switch statement in programming — it lets you transform values based on conditions. COALESCE is a safety net that catches NULLs and replaces them with defaults. NULLIF is the opposite — it creates NULLs intentionally.",
  "deepDive": [
    {
      "heading": "CASE Syntax Variants",
      "text": "Simple CASE: CASE column WHEN value1 THEN result1 WHEN value2 THEN result2 ELSE default END. Searched CASE: CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE default END. Searched allows any boolean expression, ranges, and subqueries."
    },
    {
      "heading": "COALESCE and IFNULL",
      "text": "COALESCE(val1, val2, val3, ...) — returns first non-NULL. Takes multiple arguments, any data type. IFNULL(val1, val2) — two-argument version (MySQL). COALESCE is standard SQL."
    },
    {
      "heading": "NULLIF",
      "text": "NULLIF(val1, val2) — returns NULL if val1 = val2, otherwise returns val1. Useful for preventing division by zero: NULLIF(denominator, 0). Also used to convert specific values to NULL for aggregate functions."
    },
    {
      "heading": "GREATEST and LEAST",
      "text": "GREATEST(val1, val2, val3) — returns the largest value. LEAST returns the smallest. Works with numbers, strings, dates. NULLs cause NULL return (use COALESCE within)."
    },
    {
      "heading": "CASE in Different Clauses",
      "text": "CASE in SELECT transforms output. CASE in WHERE creates conditional filters. CASE in ORDER BY customizes sort order. CASE in GROUP BY creates conditional groupings. CASE in UPDATE provides conditional values."
    }
  ],
  "interviewAnswer": "Conditional expressions bring programming logic to SQL. CASE is the workhorse, COALESCE handles NULLs elegantly, and NULLIF prevents division errors. Master these to write more flexible and robust queries.",
  "interviewQuestions": [
    {
      "question": "What is the searched CASE expression?",
      "answer": "CASE WHEN condition THEN result ... END. Allows any boolean conditions, not just equality."
    },
    {
      "question": "What is the difference between simple and searched CASE?",
      "answer": "Simple CASE checks equality against a single expression. Searched CASE evaluates independent boolean conditions."
    },
    {
      "question": "What does COALESCE do?",
      "answer": "Returns the first non-NULL argument. Takes 2+ arguments of compatible types."
    },
    {
      "question": "What does NULLIF do?",
      "answer": "Returns NULL if both arguments are equal. Otherwise returns the first argument."
    },
    {
      "question": "How do you prevent division by zero?",
      "answer": "Use: value / NULLIF(denominator, 0). Returns NULL instead of error when denominator is 0."
    },
    {
      "question": "What does GREATEST do?",
      "answer": "Returns the maximum value from a list of expressions. Opposite of LEAST."
    },
    {
      "question": "Can CASE be used in WHERE?",
      "answer": "Yes. WHERE CASE WHEN condition THEN true ELSE false END. But often a simpler boolean expression works better."
    },
    {
      "question": "Can CASE be used in ORDER BY?",
      "answer": "Yes. ORDER BY CASE WHEN department = \\'Engineering\\' THEN 1 ELSE 2 END — custom sort order."
    },
    {
      "question": "Can CASE be used in GROUP BY?",
      "answer": "Yes. GROUP BY CASE WHEN salary > 100000 THEN \\'High\\' WHEN salary > 50000 THEN \\'Medium\\' ELSE \\'Low\\' END."
    },
    {
      "question": "What happens if no ELSE in CASE?",
      "answer": "The CASE expression returns NULL when no condition matches. Always include ELSE for safety."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Conditional Expressions</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CASE</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">If-then-else</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">COALESCE</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">First non-NULL</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NULLIF</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Create NULL</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GREATEST</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Max value</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LEAST</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Min value</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Conditional Expressions</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CASE, COALESCE, NULLIF — programming logi</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">c and NULL handling in SQL.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Conditional Expressions: CASE, COALESCE, NULLIF fo</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">r flexible SQL logic.</text></svg>",
  "codeExamples": [
    {
      "title": "Searched CASE for Bucketing",
      "useCase": "Salary categories.",
      "code": "SELECT\n  name, salary,\n  CASE\n    WHEN salary > 100000 THEN 'High'\n    WHEN salary > 60000 THEN 'Medium'\n    WHEN salary > 0 THEN 'Low'\n    ELSE 'Unknown'\n  END AS salary_bracket\nFROM employees\nORDER BY salary DESC;",
      "description": "Categorizes salaries into brackets using searched CASE."
    },
    {
      "title": "COALESCE for Default Values",
      "useCase": "Replace NULL with defaults.",
      "code": "SELECT\n  name,\n  COALESCE(phone, 'No phone on file') AS phone,\n  COALESCE(bonus, 0) AS bonus,\n  COALESCE(manager_id, 0) AS manager_id\nFROM employees;",
      "description": "COALESCE provides fallback values for NULL columns."
    },
    {
      "title": "NULLIF to Prevent Division by Zero",
      "useCase": "Safe percentage calculation.",
      "code": "SELECT\n  department,\n  COUNT(*) AS total,\n  SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female,\n  ROUND(SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END)\n    / NULLIF(COUNT(*), 0)::DECIMAL * 100, 2) AS female_pct\nFROM employees\nGROUP BY department;",
      "description": "NULLIF prevents division by zero, returning NULL instead of an error."
    },
    {
      "title": "CASE in ORDER BY",
      "useCase": "Custom sort order for status.",
      "code": "SELECT name, status, created_at\nFROM tasks\nORDER BY\n  CASE status\n    WHEN 'critical' THEN 1\n    WHEN 'high' THEN 2\n    WHEN 'medium' THEN 3\n    WHEN 'low' THEN 4\n    ELSE 5\n  END,\n  created_at DESC;",
      "description": "Custom sorting logic using CASE in ORDER BY clause."
    },
    {
      "title": "GREATEST and LEAST",
      "useCase": "Find extremes across columns.",
      "code": "SELECT\n  student_name,\n  GREATEST(math, science, english) AS best_score,\n  LEAST(math, science, english) AS worst_score\nFROM exam_scores;",
      "description": "GREATEST and LEAST find max/min across multiple columns per row."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which expression returns first non-NULL?",
      "options": [
        "IFNULL",
        "COALESCE",
        "NULLIF",
        "CASE"
      ],
      "answer": 1,
      "explanation": "COALESCE returns the first non-NULL argument."
    },
    {
      "question": "When does NULLIF return NULL?",
      "options": [
        "Always",
        "When arguments are equal",
        "When first is NULL",
        "When second is NULL"
      ],
      "answer": 1,
      "explanation": "NULLIF returns NULL when both arguments are equal."
    },
    {
      "question": "What is the ELSE value if omitted in CASE?",
      "options": [
        "0",
        "NULL",
        "False",
        "Empty string"
      ],
      "answer": 1,
      "explanation": "CASE without ELSE returns NULL when no condition matches."
    },
    {
      "question": "Can CASE be used in ORDER BY?",
      "options": [
        "Yes",
        "No",
        "Only in SELECT",
        "Only in WHERE"
      ],
      "answer": 0,
      "explanation": "CASE can be used in SELECT, WHERE, ORDER BY, GROUP BY, and HAVING."
    },
    {
      "question": "What does GREATEST(1, 5, 3) return?",
      "options": [
        "1",
        "3",
        "5",
        "9"
      ],
      "answer": 2,
      "explanation": "GREATEST returns the maximum value from the list (5)."
    },
    {
      "question": "How do you safely divide in SQL?",
      "options": [
        "value / 0",
        "value / COALESCE(denom, 1)",
        "value / NULLIF(denom, 0)",
        "DIVIDE(value, denom)"
      ],
      "answer": 2,
      "explanation": "NULLIF(denom, 0) returns NULL when denom is 0, preventing division by zero errors."
    }
  ]
};
