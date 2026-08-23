export const sql_set_operations = {
  "id": "sql-set-operations",
  "title": "Set Operations (UNION, INTERSECT, EXCEPT)",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Set operations combine results from two or more queries into a single result set.",
    "UNION combines results and removes duplicates. UNION ALL combines results keeping all duplicates.",
    "INTERSECT returns rows common to both queries. EXCEPT returns rows from first query not in second.",
    "All set operations require same number of columns with compatible data types in all queries."
  ],
  "laymanDefinition": "Set operations are like combining two guest lists. UNION gives you everyone on both lists (no repeats). INTERSECT gives you people on BOTH lists. EXCEPT gives you people on the first list but NOT the second.",
  "deepDive": [
    {
      "heading": "UNION vs UNION ALL",
      "text": "UNION: SELECT a UNION SELECT b — combines results, removes duplicates (slower, requires sort). UNION ALL: combines results, keeps duplicates (faster, no sort). Use UNION ALL when duplicates are acceptable or impossible."
    },
    {
      "heading": "INTERSECT",
      "text": "SELECT a INTERSECT SELECT b — returns rows present in both queries. Can use INTERSECT ALL to keep duplicates. Performance: typically slower than EXISTS or IN for simple cases but more readable."
    },
    {
      "heading": "EXCEPT (MINUS)",
      "text": "SELECT a EXCEPT SELECT b — returns rows in first query not in second. EXCEPT ALL keeps duplicates. Called MINUS in Oracle. Useful for finding missing records: which customers have not placed orders?"
    },
    {
      "heading": "Order and Column Requirements",
      "text": "All queries must have same number of columns. Column data types must be compatible (PostgreSQL is strict about type matching). Column names come from the first query. ORDER BY applies to final result, placed after the last query."
    },
    {
      "heading": "Use Cases",
      "text": "UNION: combining monthly sales tables. INTERSECT: finding common customers across regions. EXCEPT: identifying orphan records, validating data integrity, finding unused products."
    }
  ],
  "interviewAnswer": "Set operations are essential for combining data from similar structures. UNION ALL is preferred for performance when duplicates are acceptable. INTERSECT and EXCEPT offer cleaner alternatives to complex JOIN and subquery patterns.",
  "interviewQuestions": [
    {
      "question": "What does UNION do?",
      "answer": "Combines results from two queries and removes duplicate rows. UNION ALL keeps all duplicates."
    },
    {
      "question": "What is the difference between UNION and UNION ALL?",
      "answer": "UNION removes duplicates (slower). UNION ALL keeps all rows (faster). Use UNION ALL unless you need deduplication."
    },
    {
      "question": "What does INTERSECT return?",
      "answer": "Rows that appear in both query results. Like an INNER JOIN on the entire row."
    },
    {
      "question": "What does EXCEPT return?",
      "answer": "Rows from the first query that are not in the second query. Like a LEFT JOIN with NULL check."
    },
    {
      "question": "What are the requirements for set operations?",
      "answer": "Same number of columns in all queries. Compatible data types. ORDER BY only at the end."
    },
    {
      "question": "What happens if column types mismatch?",
      "answer": "PostgreSQL will error. Some databases attempt implicit type conversion. Always ensure consistent types."
    },
    {
      "question": "How do you ORDER BY with UNION?",
      "answer": "Place ORDER BY at the end of the combined statement. Column names from the first query are used."
    },
    {
      "question": "Is UNION ALL faster than UNION?",
      "answer": "Yes. UNION ALL does not perform deduplication sorting. Use UNION ALL when duplicates are not a concern."
    },
    {
      "question": "Can you use more than two queries in set operations?",
      "answer": "Yes. Chain them: SELECT a UNION SELECT b UNION SELECT c."
    },
    {
      "question": "What is the alternative to INTERSECT?",
      "answer": "SELECT DISTINCT a.* FROM table1 a JOIN table2 b ON a.id = b.id. INTERSECT is cleaner when comparing entire rows."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Set Operations (UNION, INTERSECT, EXCEPT)</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">UNION</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Combine dedup</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">UNION ALL</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Combine all</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">INTERSECT</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Common rows</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EXCEPT</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">First only</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"125\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Set Operations</text><text x=\"270\" y=\"143\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Combine, intersect, and subtract query r</text><text x=\"270\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">esults like mathematical sets.</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Set Operations: UNION, INTERSECT, EXCEPT for combi</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ning query results.</text></svg>",
  "codeExamples": [
    {
      "title": "UNION Example",
      "useCase": "Combine employee and contractor names.",
      "code": "SELECT name, email FROM employees\nUNION\nSELECT name, email FROM contractors\nORDER BY name;",
      "description": "Unified directory of employees and contractors (no duplicates)."
    },
    {
      "title": "UNION ALL for Performance",
      "useCase": "Combine monthly sales tables.",
      "code": "SELECT 'Jan' AS month, * FROM sales_jan\nUNION ALL\nSELECT 'Feb', * FROM sales_feb\nUNION ALL\nSELECT 'Mar', * FROM sales_mar\nORDER BY amount DESC;",
      "description": "UNION ALL is faster when combining disjoint data (no duplicates possible)."
    },
    {
      "title": "INTERSECT for Common Records",
      "useCase": "Customers who bought from both stores.",
      "code": "SELECT customer_id FROM store1_orders\nINTERSECT\nSELECT customer_id FROM store2_orders;",
      "description": "Finds customers who have ordered from both store locations."
    },
    {
      "title": "EXCEPT to Find Missing Records",
      "useCase": "Unordered products.",
      "code": "SELECT id, name FROM products\nEXCEPT\nSELECT p.id, p.name FROM products p\nJOIN order_items oi ON p.id = oi.product_id;",
      "description": "Finds products that have never been ordered."
    },
    {
      "title": "Multiple Set Operations",
      "useCase": "Complex data comparison.",
      "code": "SELECT user_id FROM active_users\nINTERSECT\nSELECT user_id FROM premium_users\nEXCEPT\nSELECT user_id FROM cancelled_users;",
      "description": "Active premium users who have not cancelled their subscription."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which set operation keeps duplicates?",
      "options": [
        "UNION",
        "UNION ALL",
        "INTERSECT",
        "EXCEPT"
      ],
      "answer": 1,
      "explanation": "UNION ALL keeps all rows including duplicates."
    },
    {
      "question": "Which returns rows common to both queries?",
      "options": [
        "UNION",
        "UNION ALL",
        "INTERSECT",
        "EXCEPT"
      ],
      "answer": 2,
      "explanation": "INTERSECT returns rows present in both result sets."
    },
    {
      "question": "What is the column requirement for set operations?",
      "options": [
        "Same names",
        "Same number and compatible types",
        "Same data",
        "Same indexes"
      ],
      "answer": 1,
      "explanation": "All queries must return the same number of columns with compatible data types."
    },
    {
      "question": "Where does ORDER BY go?",
      "options": [
        "After first query",
        "At end of combined statement",
        "After each query",
        "Before UNION"
      ],
      "answer": 1,
      "explanation": "ORDER BY applies to the final result, placed after the last query."
    },
    {
      "question": "Which is faster?",
      "options": [
        "UNION",
        "UNION ALL",
        "Same",
        "Depends on indexes"
      ],
      "answer": 1,
      "explanation": "UNION ALL is faster because it skips the deduplication sort step."
    },
    {
      "question": "Which operator is called MINUS in Oracle?",
      "options": [
        "UNION",
        "INTERSECT",
        "EXCEPT",
        "EXCLUDE"
      ],
      "answer": 2,
      "explanation": "EXCEPT is called MINUS in Oracle databases."
    }
  ]
};
