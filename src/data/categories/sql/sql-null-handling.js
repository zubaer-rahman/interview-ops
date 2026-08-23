export const sql_null_handling = {
  "id": "sql-null-handling",
  "title": "NULL Handling & Three-Valued Logic",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "NULL represents missing or unknown data in SQL. It is not a value — it is the absence of a value.",
    "Three-valued logic: comparisons with NULL return UNKNOWN (neither TRUE nor FALSE). WHERE filters out rows where the condition is UNKNOWN.",
    "NULL is not equal to NULL. NULL = NULL returns UNKNOWN, not TRUE. Use IS NULL to check for NULL.",
    "Aggregate functions (except COUNT(*)) ignore NULLs. String concatenation with NULL returns NULL (in most databases)."
  ],
  "laymanDefinition": "NULL is like an empty box in a storage unit. You cannot tell if the box is empty by comparing it to another empty box — \"is this empty box the same as that empty box?\" has no meaningful answer. You need to check each box individually with IS NULL.",
  "deepDive": [
    {
      "heading": "NULL = NULL is Not TRUE",
      "text": "NULL = NULL evaluates to UNKNOWN, not TRUE. NULL <> NULL also evaluates to UNKNOWN. This is the most common source of SQL bugs. Use IS NULL / IS NOT NULL for NULL checks. Use IS DISTINCT FROM (PostgreSQL) for NULL-safe equality comparison."
    },
    {
      "heading": "Three-Valued Logic Truth Tables",
      "text": "TRUE AND UNKNOWN = UNKNOWN. FALSE AND UNKNOWN = FALSE. TRUE OR UNKNOWN = TRUE. FALSE OR UNKNOWN = UNKNOWN. NOT UNKNOWN = UNKNOWN. WHERE clause includes rows only where the condition evaluates to TRUE."
    },
    {
      "heading": "NULL in WHERE Clauses",
      "text": "WHERE column = NULL returns no rows (because NULL = NULL is UNKNOWN). WHERE column <> NULL also returns no rows. WHERE column IS NULL correctly finds NULL rows. Always use IS NULL/NOT NULL for NULL checks."
    },
    {
      "heading": "NULL in Aggregates",
      "text": "COUNT(*) counts all rows including NULLs. COUNT(column) counts non-NULL values. SUM, AVG, MIN, MAX ignore NULLs. AVG of all NULLs returns NULL. Use COALESCE: AVG(COALESCE(column, 0)) to handle NULLs."
    },
    {
      "heading": "NULL in Expressions",
      "text": "NULL + 5 = NULL. NULL || \\'text\\' = NULL (PostgreSQL). CONCAT ignores NULLs (standard SQL). CASE WHEN NULL THEN ... END — the WHEN condition is NULL, which is UNKNOWN, so it falls to ELSE. IN with NULL: NULL IN (1,2,3) returns UNKNOWN."
    }
  ],
  "interviewAnswer": "NULL handling is one of the most important and misunderstood SQL concepts. Every SQL developer should understand three-valued logic, IS NULL vs = NULL, and how NULLs behave in WHERE, JOIN, aggregation, and expressions.",
  "interviewQuestions": [
    {
      "question": "What is NULL in SQL?",
      "answer": "A marker indicating missing or unknown data. It is not a value — it represents the absence of a value."
    },
    {
      "question": "Why does NULL = NULL return UNKNOWN?",
      "answer": "NULL represents unknown. Comparing two unknown values has no meaningful result. SQL uses three-valued logic: TRUE, FALSE, UNKNOWN."
    },
    {
      "question": "How do you check for NULL?",
      "answer": "Use IS NULL or IS NOT NULL. Never use = NULL or <> NULL."
    },
    {
      "question": "What is IS DISTINCT FROM?",
      "answer": "A PostgreSQL operator that treats NULL as a comparable value. NULL IS DISTINCT FROM NULL is FALSE, unlike NULL = NULL which is UNKNOWN."
    },
    {
      "question": "How do aggregate functions handle NULLs?",
      "answer": "COUNT(*) includes NULLs. COUNT(column) excludes NULLs. SUM, AVG, MIN, MAX ignore NULLs."
    },
    {
      "question": "What happens when NULL appears in a WHERE clause?",
      "answer": "Rows where the WHERE condition evaluates to UNKNOWN (from NULL comparisons) are excluded. Only TRUE rows are included."
    },
    {
      "question": "What does NULL + 5 return?",
      "answer": "NULL. Any arithmetic with NULL yields NULL. Use COALESCE to provide a default."
    },
    {
      "question": "What does NOT IN with NULL subquery return?",
      "answer": "If the subquery returns any NULL, NOT IN returns no rows. Use NOT EXISTS instead for safe NULL handling."
    },
    {
      "question": "How does CASE handle NULL?",
      "answer": "CASE WHEN NULL THEN ... is UNKNOWN, so it falls to the next WHEN or ELSE. Use WHEN expr IS NULL THEN ... for explicit NULL handling."
    },
    {
      "question": "What is COALESCE?",
      "answer": "Returns the first non-NULL argument. COALESCE(NULL, 5, 10) returns 5. Useful for providing default values for NULL columns."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">NULL Handling & Three-Valued Logic</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">= NULL?</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">UNKNOWN</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IS NULL</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Correct check</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AND/OR</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">3VL logic</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">COALESCE</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Default val</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NOT IN</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">NULL trap</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NULL & Three-Valued Logic</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">NULL is not a value. Understand three-val</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ued logic to avoid the #1 SQL bug.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">NULL Handling: Three-valued logic, IS NULL, COALES</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CE, and the NULL pitfalls to avoid.</text></svg>",
  "codeExamples": [
    {
      "title": "NULL = NULL Trap",
      "useCase": "Demonstrating the issue.",
      "code": "-- Create test data\nCREATE TABLE test (id INT, name TEXT);\nINSERT INTO test VALUES (1, 'Alice'), (2, NULL);\n\n-- This returns NO rows:\nSELECT * FROM test WHERE name = NULL;\n\n-- This also returns NO rows:\nSELECT * FROM test WHERE name <> NULL;\n\n-- This correctly finds NULL rows:\nSELECT * FROM test WHERE name IS NULL; -- returns id=2\n\n-- This finds non-NULL rows:\nSELECT * FROM test WHERE name IS NOT NULL; -- returns id=1",
      "description": "Demonstrates why = NULL never works and IS NULL is required."
    },
    {
      "title": "NOT IN vs NOT EXISTS",
      "useCase": "The NULL trap.",
      "code": "-- NOT IN with NULL in subquery returns nothing:\nSELECT * FROM employees\nWHERE dept_id NOT IN (\n  SELECT id FROM departments WHERE status = 'inactive'\n);\n-- If any dept id is NULL, this returns 0 rows!\n\n-- Safe alternative with NOT EXISTS:\nSELECT * FROM employees e\nWHERE NOT EXISTS (\n  SELECT 1 FROM departments d\n  WHERE d.id = e.dept_id AND d.status = 'inactive'\n);",
      "description": "NOT IN with NULL subquery returns no rows — use NOT EXISTS instead."
    },
    {
      "title": "COALESCE and NULLIF",
      "useCase": "Practical NULL handling.",
      "code": "-- COALESCE: first non-NULL value\nSELECT\n  name,\n  COALESCE(phone, email, 'No contact') AS contact,\n  COALESCE(salary, 0) AS salary\nFROM employees;\n\n-- NULLIF: create NULL when equal\nSELECT\n  department,\n  SUM(salary) / NULLIF(COUNT(*), 0) AS avg_salary\nFROM employees\nGROUP BY department;",
      "description": "COALESCE provides defaults; NULLIF prevents division by zero."
    },
    {
      "title": "IS DISTINCT FROM",
      "useCase": "NULL-safe comparison (PostgreSQL).",
      "code": "-- Regular comparison (NULL unsafe):\nSELECT * FROM products WHERE price = 100; -- misses NULL prices\n\n-- NULL-safe comparison:\nSELECT * FROM products WHERE price IS NOT DISTINCT FROM 100;\n-- Returns rows where price = 100 OR price IS NULL\n\n-- Opposite:\nSELECT * FROM products WHERE price IS DISTINCT FROM 100;\n-- Returns rows where price <> 100 AND price IS NOT NULL",
      "description": "IS DISTINCT FROM treats NULL as a comparable value."
    },
    {
      "title": "NULL in JOIN Conditions",
      "useCase": "How NULLs affect JOINs.",
      "code": "-- INNER JOIN with NULL FK:\nSELECT e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id;\n-- Employees with NULL dept_id are EXCLUDED\n\n-- LEFT JOIN shows NULL dept:\nSELECT e.name, d.department_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.id;\n-- NULL dept_id shows department_name as NULL",
      "description": "INNER JOIN silently drops rows with NULL foreign keys; LEFT JOIN preserves them."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does NULL = NULL evaluate to?",
      "options": [
        "TRUE",
        "FALSE",
        "UNKNOWN",
        "NULL"
      ],
      "answer": 2,
      "explanation": "NULL = NULL evaluates to UNKNOWN in three-valued logic."
    },
    {
      "question": "How do you correctly check for NULL?",
      "options": [
        "= NULL",
        "IS NULL",
        "== NULL",
        "EQUALS NULL"
      ],
      "answer": 1,
      "explanation": "Use IS NULL to check for NULL values."
    },
    {
      "question": "Which aggregate includes NULLs?",
      "options": [
        "COUNT(column)",
        "COUNT(*)",
        "SUM",
        "AVG"
      ],
      "answer": 1,
      "explanation": "COUNT(*) counts all rows including NULLs."
    },
    {
      "question": "What does COALESCE(NULL, 5, 10) return?",
      "options": [
        "NULL",
        "5",
        "10",
        "Error"
      ],
      "answer": 1,
      "explanation": "COALESCE returns the first non-NULL value, which is 5."
    },
    {
      "question": "What happens with NOT IN if the subquery has NULL?",
      "options": [
        "Works normally",
        "Returns no rows",
        "Errors",
        "Ignores NULL"
      ],
      "answer": 1,
      "explanation": "NOT IN with NULL in the subquery returns zero rows."
    },
    {
      "question": "What PostgreSQL operator is NULL-safe?",
      "options": [
        "<=>",
        "IS DISTINCT FROM",
        "===",
        "IS NOT"
      ],
      "answer": 1,
      "explanation": "IS DISTINCT FROM treats NULL as a comparable value."
    }
  ]
};
