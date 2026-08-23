export const sql_anti_patterns = {
  "id": "sql-anti-patterns",
  "title": "SQL Anti-Patterns",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "SQL anti-patterns are common design and query practices that seem reasonable but cause problems at scale.",
    "Anti-patterns lead to poor performance, data integrity issues, maintenance nightmares, and race conditions.",
    "Recognizing anti-patterns is a hallmark of experienced SQL developers. The goal is not just to write SQL, but to write good SQL.",
    "Most anti-patterns have well-known solutions or better alternatives."
  ],
  "laymanDefinition": "SQL anti-patterns are like bad habits in cooking — putting your knives in the dishwasher seems convenient until they get dull. SELECT * seems quick until you break the frontend by adding a column. Each anti-pattern has a better way that you learn through experience.",
  "deepDive": [
    {
      "heading": "SELECT * in Production",
      "text": "Problem: returns unnecessary columns (wasted bandwidth), breaks when schema changes (new columns may cause errors), prevents index-only scans. Solution: explicitly list needed columns. Exception: EXISTS (SELECT 1) or COUNT(*) which optimize * effectively."
    },
    {
      "heading": "Implicit Columns / SELECT DISTINCT as Band-Aid",
      "text": "Problem: writing SELECT * on a JOIN and adding DISTINCT to deduplicate — hides the underlying data issue (missing join condition or unintended cross product). Solution: specify exact columns needed and fix the join logic."
    },
    {
      "heading": "Non-Indexed Foreign Keys",
      "text": "Problem: FK columns without indexes. Every INSERT on child table checks parent (fast enough). Every DELETE on parent checks children (full table scan on child unless indexed). Solution: always index foreign key columns."
    },
    {
      "heading": "Death by a Thousand ORs",
      "text": "Problem: WHERE status = \\'x\\' OR status = \\'y\\' OR status = \\'z\\' — multiple OR conditions on the same column. Solution: use IN (status IN (\\'x\\', \\'y\\', \\'z\\')) and ensure the column is indexed."
    },
    {
      "heading": "Using Functions on Indexed Columns in WHERE",
      "text": "Problem: WHERE YEAR(date_col) = 2024 prevents index usage (function must evaluate for every row). Solution: WHERE date_col >= \\'2024-01-01\\' AND date_col < \\'2025-01-01\\' (sargable — can use index)."
    }
  ],
  "interviewAnswer": "Recognizing SQL anti-patterns comes with experience. The most common ones are easy to fix and prevent. Always measure (EXPLAIN ANALYZE) before optimizing. The biggest anti-pattern is premature optimization without understanding the actual query plan.",
  "interviewQuestions": [
    {
      "question": "What is wrong with SELECT *?",
      "answer": "Returns unnecessary columns (wasted bandwidth), prevents index-only scans, breaks on schema changes, and makes dependencies unclear."
    },
    {
      "question": "Why should you index foreign keys?",
      "answer": "DELETE on parent requires scanning child table for references. Without index, this is a full table scan. INSERT on child also checks parent."
    },
    {
      "question": "What is the problem with functions in WHERE?",
      "answer": "Functions on indexed columns prevent index usage (non-sargable). Database cannot use index because it would need to compute the function for every index entry."
    },
    {
      "question": "What is the problem with OR conditions?",
      "answer": "Multiple OR conditions on the same column are less efficient than IN. IN uses a single index lookup; OR may use multiple scans or fall back to sequential scan."
    },
    {
      "question": "What is the EAV anti-pattern?",
      "answer": "Entity-Attribute-Value: a general-purpose table (entity_id, attribute, value) instead of proper columns. Leads to complex queries, poor performance, and no type safety."
    },
    {
      "question": "What is the God Table anti-pattern?",
      "answer": "A single table with too many columns, trying to handle multiple entity types. Leads to sparse columns, confusing schema, and maintenance issues. Solution: normalize."
    },
    {
      "question": "What is the implicit column problem?",
      "answer": "Using SELECT * on JOINs and adding DISTINCT to remove duplicates masks incorrect join conditions. Always specify columns to make dependencies explicit."
    },
    {
      "question": "What is n+1 query problem?",
      "answer": "Making one query to get parent rows, then N queries to get child data for each parent. Solution: use JOIN, batch queries, or eager loading in ORMs."
    },
    {
      "question": "What is metadata tribbles?",
      "answer": "Adding columns for every new attribute without normalization. The table grows wider and wider with sparse columns. Solution: use JSONB for variable attributes or normalize."
    },
    {
      "question": "What is the rounding error anti-pattern?",
      "answer": "Using FLOAT/DOUBLE for monetary values causes rounding errors over time. Always use DECIMAL/NUMERIC for exact precision money calculations."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SQL Anti-Patterns</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SELECT *</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bad practice</text><rect x=\"10\" y=\"65\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"75\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unindexed FK</text><text x=\"75\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Slow DELETE</text><rect x=\"10\" y=\"95\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"75\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fn on col</text><text x=\"75\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No index use</text><rect x=\"10\" y=\"125\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"75\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EAV pattern</text><text x=\"75\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Complex query</text><rect x=\"10\" y=\"155\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"75\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">God Table</text><text x=\"75\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Too wide</text><line x1=\"140\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"78\" x2=\"170\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"108\" x2=\"170\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"138\" x2=\"170\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"168\" x2=\"170\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"200\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"280\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SQL Anti-Patterns</text><text x=\"280\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Common mistakes: SELECT *, unindexed</text><text x=\"280\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> FKs, non-sargable queries, EAV, and</text><text x=\"280\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> more.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SQL Anti-Patterns: Common design and query mistake</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s and their better alternatives.</text></svg>",
  "codeExamples": [
    {
      "title": "Non-Sargable Query",
      "useCase": "Fix functions in WHERE.",
      "code": "-- BAD: Function on indexed column\nSELECT * FROM orders\nWHERE EXTRACT(YEAR FROM order_date) = 2024;\n\n-- GOOD: Sargable range query\nSELECT * FROM orders\nWHERE order_date >= '2024-01-01'\n  AND order_date < '2025-01-01';\n\n-- Also bad:\nSELECT * FROM users WHERE LOWER(email) = 'alice@x.com';\n\n-- Fix: expression index\nCREATE INDEX ON users(LOWER(email));",
      "description": "Non-sargable vs sargable queries — the latter can use indexes."
    },
    {
      "title": "EAV Anti-Pattern",
      "useCase": "Entity-Attribute-Value problem.",
      "code": "-- BAD: EAV table (anti-pattern)\nCREATE TABLE product_attributes (\n  product_id INT,\n  attribute VARCHAR(50),\n  value TEXT\n);\n\n-- Query becomes painful:\nSELECT p.name, a1.value AS color, a2.value AS weight\nFROM products p\nLEFT JOIN product_attributes a1\n  ON a1.product_id = p.id AND a1.attribute = 'color'\nLEFT JOIN product_attributes a2\n  ON a2.product_id = p.id AND a2.attribute = 'weight';\n\n-- GOOD: Proper columns\nCREATE TABLE products (\n  id INT, name TEXT, color TEXT, weight DECIMAL\n);",
      "description": "EAV leads to painful pivot queries. Normalize properly."
    },
    {
      "title": "N+1 Query Problem",
      "useCase": "Avoid in application code.",
      "code": "// BAD: N+1 queries (application code)\nconst departments = await db.query(\"SELECT * FROM departments\");\nfor (const dept of departments) {\n  const employees = await db.query(\n    \"SELECT * FROM employees WHERE dept_id = \" + dept.id\n  );\n  // 1 query for departments + N for employees\n}\n\n// GOOD: Single JOIN query\nconst result = await db.query(\"\n  SELECT d.name AS dept, e.name AS emp\n  FROM departments d\n  JOIN employees e ON e.dept_id = d.id\n  ORDER BY d.name;\n\");",
      "description": "N+1 problem: one query for parents, N for children. Fix with JOIN or eager loading."
    },
    {
      "title": "Unindexed Foreign Key",
      "useCase": "Index FKs for DELETE performance.",
      "code": "-- BAD: FK without index\nCREATE TABLE orders (\n  id SERIAL PRIMARY KEY,\n  customer_id INT REFERENCES customers(id) -- no index!\n);\n\n-- DELETE FROM customers WHERE id = 5\n-- must full scan orders table to check FK reference\n\n-- GOOD: FK with index\nCREATE INDEX idx_orders_customer ON orders(customer_id);\n\n-- Now DELETE is fast (index lookup on orders)",
      "description": "Unindexed FKs cause full table scans on parent DELETE operations."
    },
    {
      "title": "Implicit DISTINCT Mask",
      "useCase": "Hidden join problem.",
      "code": "-- BAD: DISTINCT masking a join issue\nSELECT DISTINCT c.*\nFROM customers c\nJOIN orders o ON c.id = o.customer_id;\n-- DISTINCT is needed because customers appear multiple times\n-- But why? Do we actually want all customers with orders?\n\n-- GOOD: Be explicit\nSELECT c.* FROM customers c\nWHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.customer_id = c.id\n);\n\n-- Or if duplicates are expected:\nSELECT DISTINCT c.* FROM customers c\nJOIN orders o ON c.id = o.customer_id",
      "description": "DISTINCT often masks unintended row multiplication. Use EXISTS for existence checks."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is wrong with SELECT *?",
      "options": [
        "Faster queries",
        "Returns unnecessary columns",
        "Uses less memory",
        "Better for indexes"
      ],
      "answer": 1,
      "explanation": "SELECT * returns unnecessary columns and prevents index-only scans."
    },
    {
      "question": "What does non-sargable mean?",
      "options": [
        "Uses indexes",
        "Cannot use index efficiently",
        "Very fast",
        "Uses sequential scan"
      ],
      "answer": 1,
      "explanation": "Non-sargable queries cannot use indexes because of functions on indexed columns."
    },
    {
      "question": "What is the EAV anti-pattern?",
      "options": [
        "Entity-Attribute-Value design",
        "Eager loading pattern",
        "Error handling pattern",
        "Execution plan view"
      ],
      "answer": 0,
      "explanation": "EAV is a general-purpose table design that leads to complex queries."
    },
    {
      "question": "What problem does n+1 describe?",
      "options": [
        "1 + N queries for parent + children",
        "N + 1 table join",
        "N + 1 indexes",
        "1 + N columns"
      ],
      "answer": 0,
      "explanation": "N+1: one query for parents, N queries for children."
    },
    {
      "question": "What is the solution to unindexed foreign keys?",
      "options": [
        "Remove the FK",
        "Add an index",
        "Use a view",
        "Denormalize"
      ],
      "answer": 1,
      "explanation": "Always add an index on foreign key columns."
    },
    {
      "question": "Why avoid functions on indexed columns in WHERE?",
      "options": [
        "They error",
        "They prevent index usage",
        "They are slow syntax",
        "They return wrong results"
      ],
      "answer": 1,
      "explanation": "Functions on indexed columns make the query non-sargable — indexes cannot be used."
    }
  ]
};
