export const sql_views = {
  "id": "sql-views",
  "title": "Views & Materialized Views",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "A view is a saved SQL query that acts like a virtual table. It does not store data itself — it runs the query each time.",
    "Views simplify complex queries, provide security (hide columns/rows), and create a logical data layer.",
    "Materialized views (PostgreSQL) store the query result physically, enabling fast reads but requiring refresh.",
    "Updatable views allow INSERT/UPDATE/DELETE through the view under certain conditions."
  ],
  "laymanDefinition": "A view is like a saved search filter on your email. Instead of typing the search every time, you save it as a Smart Folder. Every time you open it, it shows current results. A materialized view is like taking a screenshot of the results — instant to view but outdated until refreshed.",
  "deepDive": [
    {
      "heading": "Creating Views",
      "text": "CREATE VIEW view_name AS SELECT ... — creates a virtual table. Simple views can be updated. WITH CHECK OPTION prevents inserting rows that would not be visible through the view. Views can reference other views (view chaining)."
    },
    {
      "heading": "Updatable Views",
      "text": "Simple views on a single table without aggregates, DISTINCT, GROUP BY, or set operations are automatically updatable. WITH LOCAL/CASCADED CHECK OPTION controls whether inserts/updates must satisfy the view WHERE condition."
    },
    {
      "heading": "Materialized Views (PostgreSQL)",
      "text": "CREATE MATERIALIZED VIEW mv AS SELECT ... WITH DATA — stores query results physically. Faster reads than regular views. Must be refreshed: REFRESH MATERIALIZED VIEW mv. CONCURRENTLY option allows reads during refresh."
    },
    {
      "heading": "View Use Cases",
      "text": "Security: expose only specific columns (hide salary column). Simplification: complex JOINs become simple FROM view. Consistency: standardize query patterns. Migration: views maintain backward compatibility when schemas change."
    },
    {
      "heading": "Performance Considerations",
      "text": "Regular views have no performance benefit — they inline the query. Nested views can be slow (multiple layers of inlining). Materialized views are fast but stale. Indexes can be created on materialized views for maximum speed."
    }
  ],
  "interviewAnswer": "Views are a powerful tool for encapsulation, security, and simplicity. Use regular views as query shortcuts and security layers. Use materialized views for expensive queries that don't need real-time data.",
  "interviewQuestions": [
    {
      "question": "What is a view?",
      "answer": "A saved SQL query that behaves like a virtual table. Does not store data — executes the query each time it is accessed."
    },
    {
      "question": "What is the difference between a view and a materialized view?",
      "answer": "Regular view runs the query each time (no storage). Materialized view stores results physically (faster reads, stale data possible)."
    },
    {
      "question": "Can you insert data through a view?",
      "answer": "Yes, for simple views on a single table without aggregates, DISTINCT, GROUP BY, or set operations."
    },
    {
      "question": "What does WITH CHECK OPTION do?",
      "answer": "Prevents INSERT or UPDATE operations that would create rows not visible in the view."
    },
    {
      "question": "How do you refresh a materialized view?",
      "answer": "REFRESH MATERIALIZED VIEW view_name. In PostgreSQL, CONCURRENTLY option allows reads during refresh."
    },
    {
      "question": "What are the security benefits of views?",
      "answer": "Grant access to views without granting access to underlying tables. Expose only necessary columns (hide sensitive data)."
    },
    {
      "question": "Can views improve performance?",
      "answer": "Regular views do not improve performance — they just inline the query. Materialized views can significantly improve read performance."
    },
    {
      "question": "Can a view reference another view?",
      "answer": "Yes. Views can be chained. Be careful — deep nesting becomes hard to debug and can perform poorly."
    },
    {
      "question": "What happens when you DROP a table referenced by a view?",
      "answer": "The view becomes invalid. Any query using it will error until the table is recreated or the view is dropped."
    },
    {
      "question": "Can you create indexes on a view?",
      "answer": "On regular views: no (they are virtual). On materialized views: yes, indexes can be created for faster queries."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Views & Materialized Views</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CREATE VIEW</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Saved query</text><line x1=\"140\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Query View</text><text x=\"245\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Virtual table</text><line x1=\"180\" y1=\"60\" x2=\"180\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"75\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MATERIALIZED</text><text x=\"75\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stored result</text><line x1=\"140\" y1=\"83\" x2=\"170\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"245\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">REFRESH</text><text x=\"245\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Update data</text><rect x=\"320\" y=\"35\" width=\"160\" height=\"90\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"400\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Views vs Materialized</text><text x=\"400\" y=\"97\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query shortcut vs cached resu</text><text x=\"400\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">lt. Trade-off: freshness vs s</text><text x=\"400\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">peed.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Views: Virtual tables for query simplification, se</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">curity, and data abstraction.</text></svg>",
  "codeExamples": [
    {
      "title": "Creating a Simple View",
      "useCase": "Encapsulate complex query.",
      "code": "CREATE VIEW employee_details AS\nSELECT e.name, e.salary, d.department_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id\nWHERE e.status = 'active';\n\n-- Use the view like a table:\nSELECT * FROM employee_details ORDER BY salary DESC;",
      "description": "Creates a simplified view of active employees with department names."
    },
    {
      "title": "Updatable View with CHECK OPTION",
      "useCase": "Controlled data entry.",
      "code": "CREATE VIEW engineering_employees AS\nSELECT id, name, salary, dept_id\nFROM employees\nWHERE dept_id = 3\nWITH CHECK OPTION;\n\n-- This INSERT is allowed:\nINSERT INTO engineering_employees (name, salary, dept_id)\nVALUES ('John', 75000, 3);\n\n-- This INSERT is rejected by CHECK OPTION:\nINSERT INTO engineering_employees (name, salary, dept_id)\nVALUES ('Jane', 80000, 5); -- dept_id 5 not visible",
      "description": "WITH CHECK OPTION ensures data integrity through the view."
    },
    {
      "title": "Materialized View",
      "useCase": "Expensive query caching.",
      "code": "CREATE MATERIALIZED VIEW monthly_sales_summary AS\nSELECT\n  DATE_TRUNC('month', order_date) AS month,\n  product_id,\n  COUNT(*) AS orders,\n  SUM(amount) AS total_sales\nFROM orders\nGROUP BY month, product_id\nWITH DATA;\n\n-- Refresh periodically:\nREFRESH MATERIALIZED VIEW monthly_sales_summary;",
      "description": "Stores pre-computed monthly sales for instant dashboard queries."
    },
    {
      "title": "Indexing a Materialized View",
      "useCase": "Maximize materialized view speed.",
      "code": "CREATE INDEX idx_mv_month_product\nON monthly_sales_summary(month, product_id);\n\n-- Now this query runs extremely fast:\nSELECT * FROM monthly_sales_summary\nWHERE month = '2024-01-01' AND product_id = 5;",
      "description": "Materialized views support indexes like regular tables."
    },
    {
      "title": "View for Security",
      "useCase": "Hide sensitive columns.",
      "code": "CREATE VIEW public_employee_info AS\nSELECT id, name, department, email\nFROM employees;\n\n-- Grant access without exposing salary:\nGRANT SELECT ON public_employee_info TO hr_readers;",
      "description": "Exposes only non-sensitive employee information to specific roles."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a view?",
      "options": [
        "A stored result set",
        "A saved query",
        "A temporary table",
        "A copy of data"
      ],
      "answer": 1,
      "explanation": "A view is a saved SQL query that acts like a virtual table."
    },
    {
      "question": "How does a materialized view differ?",
      "options": [
        "Faster queries",
        "Stores data physically",
        "Is automatically updated",
        "Cannot be indexed"
      ],
      "answer": 1,
      "explanation": "Materialized views store query results as a physical table."
    },
    {
      "question": "What command refreshes a materialized view?",
      "options": [
        "UPDATE MATERIALIZED VIEW",
        "REFRESH MATERIALIZED VIEW",
        "REBUILD VIEW",
        "RECALC VIEW"
      ],
      "answer": 1,
      "explanation": "REFRESH MATERIALIZED VIEW updates the stored data."
    },
    {
      "question": "What does WITH CHECK OPTION prevent?",
      "options": [
        "SQL injection",
        "Invalid data entry",
        "Duplicate rows",
        "Slow queries"
      ],
      "answer": 1,
      "explanation": "WITH CHECK OPTION prevents entering data invisible through the view."
    },
    {
      "question": "Can you index a regular view?",
      "options": [
        "Yes",
        "No",
        "Only in PostgreSQL",
        "Only materialized views"
      ],
      "answer": 1,
      "explanation": "Regular views are virtual — they cannot be indexed."
    },
    {
      "question": "What happens when underlying table is dropped?",
      "options": [
        "View still works",
        "View becomes invalid",
        "View auto-drops",
        "Data is preserved"
      ],
      "answer": 1,
      "explanation": "The view becomes invalid when its underlying table is dropped."
    }
  ]
};
