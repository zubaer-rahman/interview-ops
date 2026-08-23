export const practice_sql = {
  "id": "practice-sql",
  "title": "SQL Practice Problems",
  "difficulty": "intermediate",
  "estimatedMinutes": 35,
  "tldr": [
    "Master JOINs: INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN — and when each applies.",
    "Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), SUM() OVER(PARTITION BY ... ORDER BY ...).",
    "Common table expressions (CTEs) with WITH clause simplify complex queries dramatically.",
    "Indexing strategy: B-tree for equality and range queries, composite indexes for multi-column filters, covering indexes to avoid table lookups.",
    "Query planning: use EXPLAIN ANALYZE to find sequential scans, missing indexes, and sort operations."
  ],
  "laymanDefinition": "SQL practice is like learning to ask a librarian very specific questions about a massive library. Instead of saying \"give me all books,\" you learn to say \"give me the titles of books published after 2020 by authors who have at least 3 books in the fantasy genre, sorted by popularity, and only show the top 10.\" Each clause (JOIN, WHERE, GROUP BY, HAVING, ORDER BY) is like a filter the librarian applies. Window functions are like asking \"for each book, show how it ranks compared to other books by the same author.\"",
  "deepDive": [
    {
      "heading": "JOIN Fundamentals",
      "text": "INNER JOIN: only matching rows from both tables (most common). LEFT JOIN: all rows from left table, NULLs for non-matching right. RIGHT JOIN: opposite. FULL OUTER JOIN: all rows from both, NULLs where no match. CROSS JOIN: Cartesian product (every row × every row). SELF JOIN: join a table to itself (aliases required) — useful for hierarchical data (employees and managers). The key: always specify the JOIN condition with ON — omitting it creates a CROSS JOIN."
    },
    {
      "heading": "Window Functions",
      "text": "Window functions perform calculations across a set of rows related to the current row without collapsing them like GROUP BY. ROW_NUMBER() — unique sequential number per partition. RANK() — same rank for ties, skips numbers. DENSE_RANK() — same rank for ties, no skip. LAG(column, offset) — access previous row's value. LEAD() — access next row's value. SUM() OVER(PARTITION BY dept ORDER BY salary) — running total per department. Frame clause: ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW."
    },
    {
      "heading": "Subqueries and CTEs",
      "text": "Subquery: nested query inside SELECT, FROM, WHERE, or HAVING. Correlated subquery: references outer query (runs per row — can be slow). EXISTS vs IN: EXISTS is faster for large result sets (stops on first match). WITH (CTE): define named temporary result sets for cleaner, more maintainable queries. Recursive CTEs: for hierarchical data (org charts, category trees). WITH RECURSIVE cte AS (anchor UNION ALL recursive) enables querying tree structures without application-level recursion."
    },
    {
      "heading": "Indexing Strategy",
      "text": "B-tree indexes: default, good for equality and range queries (=, >, <, BETWEEN, LIKE without leading %). Composite indexes: column order matters — put most selective column first (highest cardinality). Covering indexes: include all columns needed by a query so only the index is accessed (no table lookup). Partial indexes: WHERE clause on index (e.g., WHERE status = 'active') — smaller, faster for specific queries. Indexes speed reads but slow writes — don't over-index."
    },
    {
      "heading": "Query Optimization",
      "text": "Use EXPLAIN ANALYZE before optimizing. Red flags: Sequential Scan on large tables (missing index), Nested Loop with many rows (should use Hash Join or Merge Join), Sort operations on large datasets, Temporary files (work_mem too low). Optimizations: (1) Add indexes on JOIN and WHERE columns. (2) Avoid SELECT * — only fetch needed columns. (3) Use EXISTS instead of IN for subqueries. (4) Avoid functions on indexed columns in WHERE (WHERE YEAR(date) = 2023 → WHERE date >= '2023-01-01' AND date < '2024-01-01')."
    }
  ],
  "interviewAnswer": "For SQL interviews, master INNER/LEFT JOINs, GROUP BY with HAVING, window functions (ROW_NUMBER, RANK, LAG), and CTEs. Common patterns: find duplicates (GROUP BY + HAVING COUNT > 1), top N per group (window function + WHERE rank <= N), running totals (SUM OVER ORDER BY), date range queries (BETWEEN, date_trunc), and hierarchical queries (recursive CTEs). For optimization: EXPLAIN ANALYZE, add indexes on JOIN/WHERE columns, prefer EXISTS over IN for large subquery results. Write readable, well-formatted SQL with consistent capitalization and indentation.",
  "interviewQuestions": [
    {
      "question": "Write a query to find the second highest salary from an Employee table.",
      "answer": "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee). Or with window: SELECT DISTINCT salary FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rk FROM Employee) WHERE rk = 2. Handle ties with DENSE_RANK."
    },
    {
      "question": "Find employees who earn more than their manager.",
      "answer": "SELECT e.name FROM Employee e JOIN Employee m ON e.manager_id = m.id WHERE e.salary > m.salary. Self-join with aliases. Edge case: CEO with no manager (manager_id IS NULL) excluded by INNER JOIN."
    },
    {
      "question": "Write a query to find departments with more than 5 employees.",
      "answer": "SELECT d.name, COUNT(e.id) as emp_count FROM Department d JOIN Employee e ON d.id = e.dept_id GROUP BY d.id, d.name HAVING COUNT(e.id) > 5. HAVING filters after GROUP BY, WHERE filters before."
    },
    {
      "question": "Find the top 3 products by sales in each category.",
      "answer": "SELECT category, product, total_sales FROM (SELECT c.name as category, p.name as product, SUM(od.quantity * od.price) as total_sales, ROW_NUMBER() OVER(PARTITION BY c.id ORDER BY SUM(od.quantity * od.price) DESC) rn FROM Category c JOIN Product p ON c.id = p.category_id JOIN OrderDetail od ON p.id = od.product_id GROUP BY c.id, c.name, p.id, p.name) ranked WHERE rn <= 3."
    },
    {
      "question": "Find all dates with more than 100 orders.",
      "answer": "SELECT DATE(order_date) as order_day, COUNT(*) as order_count FROM Orders GROUP BY DATE(order_date) HAVING COUNT(*) > 100. Use DATE() to truncate timestamp to day."
    },
    {
      "question": "Find customers who haven't ordered in the last 90 days.",
      "answer": "SELECT c.* FROM Customer c LEFT JOIN Orders o ON c.id = o.customer_id AND o.order_date >= DATEADD(day, -90, GETDATE()) WHERE o.id IS NULL. LEFT JOIN + IS NULL = anti-join pattern."
    },
    {
      "question": "Calculate a running total of sales by date.",
      "answer": "SELECT order_date, amount, SUM(amount) OVER(ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total FROM Orders. Window function SUM OVER ORDER BY."
    },
    {
      "question": "Find duplicate email addresses in a Users table.",
      "answer": "SELECT email, COUNT(*) FROM Users GROUP BY email HAVING COUNT(*) > 1. To delete duplicates: use ROW_NUMBER() OVER(PARTITION BY email ORDER BY id) and delete rows with rn > 1."
    },
    {
      "question": "Write a query to pivot rows to columns (e.g., monthly sales as columns).",
      "answer": "SELECT product, SUM(CASE WHEN MONTH(order_date)=1 THEN amount END) as Jan, SUM(CASE WHEN MONTH(order_date)=2 THEN amount END) as Feb FROM Sales GROUP BY product. Alternatively: CROSSTAB from tablefunc extension."
    },
    {
      "question": "Find the difference between current and previous month sales for each product.",
      "answer": "SELECT product_id, month, sales, LAG(sales) OVER(PARTITION BY product_id ORDER BY month) as prev_sales, sales - LAG(sales) OVER(PARTITION BY product_id ORDER BY month) as diff FROM monthly_sales. LAG accesses previous row's value."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:600px;\"><defs><marker id=\"sqArr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0,8 3,0 6\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"580\" height=\"260\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"300\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">SQL Query Execution Order</text><rect x=\"80\" y=\"55\" width=\"440\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"78\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. FROM → JOIN → ON (Tables &amp; Joins)</text><rect x=\"80\" y=\"97\" width=\"440\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"120\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. WHERE (Row Filter)</text><rect x=\"80\" y=\"139\" width=\"440\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"162\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. GROUP BY → Aggregations</text><rect x=\"80\" y=\"181\" width=\"440\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"204\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. HAVING (Group Filter)</text><rect x=\"80\" y=\"223\" width=\"440\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"246\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">5. SELECT → DISTINCT → ORDER BY → LIMIT</text></svg>",
  "codeExamples": [
    {
      "title": "Window Functions: Top N Per Group",
      "useCase": "Find top 3 products by revenue per category",
      "code": "WITH ranked_products AS (\n  SELECT\n    c.name AS category,\n    p.name AS product,\n    SUM(od.quantity * od.unit_price) AS revenue,\n    ROW_NUMBER() OVER (\n      PARTITION BY c.id\n      ORDER BY SUM(od.quantity * od.unit_price) DESC\n    ) AS rn\n  FROM categories c\n  JOIN products p ON p.category_id = c.id\n  JOIN order_details od ON od.product_id = p.id\n  GROUP BY c.id, c.name, p.id, p.name\n)\nSELECT category, product, revenue\nFROM ranked_products\nWHERE rn <= 3\nORDER BY category, rn;",
      "description": "ROW_NUMBER() OVER(PARTITION BY category ORDER BY revenue DESC) gives rank per category. CTE simplifies the outer query."
    },
    {
      "title": "Recursive CTE: Org Chart",
      "useCase": "Employee hierarchy tree",
      "code": "WITH RECURSIVE org_chart AS (\n  -- Anchor: top-level managers\n  SELECT id, name, manager_id, 1 AS level,\n         CAST(name AS VARCHAR(500)) AS path\n  FROM employees\n  WHERE manager_id IS NULL\n  UNION ALL\n  -- Recursive: their reports\n  SELECT e.id, e.name, e.manager_id,\n         oc.level + 1,\n         CAST(oc.path || ' → ' || e.name AS VARCHAR(500))\n  FROM employees e\n  JOIN org_chart oc ON e.manager_id = oc.id\n)\nSELECT level, path\nFROM org_chart\nORDER BY path;",
      "description": "Recursive CTE walks the employee-manager hierarchy. Anchor query gets roots (no manager), recursive step joins children."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which SQL clause filters rows after GROUP BY?",
      "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "LIMIT"
      ],
      "answer": 1,
      "explanation": "HAVING filters grouped results (after aggregation). WHERE filters individual rows (before aggregation)."
    },
    {
      "question": "What does ROW_NUMBER() OVER(PARTITION BY dept ORDER BY salary DESC) do?",
      "options": [
        "Groups employees by department",
        "Assigns a unique rank to each employee within their department, ordered by salary descending",
        "Calculates average salary per department",
        "Filters top salaries"
      ],
      "answer": 1,
      "explanation": "ROW_NUMBER() assigns a unique sequential number per partition."
    },
    {
      "question": "Which JOIN returns all rows from the left table?",
      "options": [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "CROSS JOIN"
      ],
      "answer": 1,
      "explanation": "LEFT JOIN returns all rows from the left table with NULLs where no match in right."
    },
    {
      "question": "What is the purpose of EXPLAIN ANALYZE?",
      "options": [
        "Format query output",
        "Show query execution plan with actual times",
        "Compress query results",
        "Validate JSON"
      ],
      "answer": 1,
      "explanation": "EXPLAIN ANALYZE shows the execution plan with actual timing and row counts for query optimization."
    },
    {
      "question": "Which index type is the default in PostgreSQL?",
      "options": [
        "Hash",
        "B-tree",
        "GiST",
        "GIN"
      ],
      "answer": 1,
      "explanation": "B-tree is the default index type, good for equality and range queries."
    },
    {
      "question": "What does LAG(column, 1) OVER(ORDER BY date) return?",
      "options": [
        "The next row's value",
        "The previous row's value in the ordered sequence",
        "The first row's value",
        "NULL for all rows"
      ],
      "answer": 1,
      "explanation": "LAG accesses the previous row's value within the window frame. LEAD accesses the next row."
    }
  ]
};
