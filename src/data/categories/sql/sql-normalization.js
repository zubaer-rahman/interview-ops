export const sql_normalization = {
  "id": "sql-normalization",
  "title": "Database Normalization",
  "difficulty": "intermediate",
  "estimatedMinutes": 30,
  "tldr": [
    "Normalization organizes database schema to reduce data redundancy and improve data integrity.",
    "1NF: each cell contains a single value, each column has a unique name, rows are unique.",
    "2NF: 1NF + every non-key column is fully functionally dependent on the entire primary key.",
    "3NF: 2NF + no transitive dependencies (non-key column depends on another non-key column)."
  ],
  "laymanDefinition": "Normalization is like organizing a messy desk. 1NF is making sure each drawer has one type of item. 2NF is making sure items in a drawer actually belong there (not just because of the desk). 3NF is making sure nothing depends on something that could move.",
  "deepDive": [
    {
      "heading": "First Normal Form (1NF)",
      "text": "Each column has a single atomic value (no arrays or comma-separated lists). Each column has a unique name. All entries in a column are the same type. Each row is unique (has a primary key). Table: Student | Courses (CS101,CS102) → split to Student | Course."
    },
    {
      "heading": "Second Normal Form (2NF)",
      "text": "Must be 1NF. Every non-key column must depend on the entire primary key (for composite keys). If a table has PK (StudentID, CourseID) and column Instructor depends only on CourseID, it violates 2NF. Solution: split into separate tables."
    },
    {
      "heading": "Third Normal Form (3NF)",
      "text": "Must be 2NF. No transitive dependencies: a non-key column depends on another non-key column. Example: Order → CustomerID → CustomerName violates 3NF because CustomerName depends on CustomerID, not directly on Order. Solution: separate Customers table."
    },
    {
      "heading": "Boyce-Codd Normal Form (BCNF)",
      "text": "Stricter version of 3NF. Every determinant must be a candidate key. Every functional dependency X → Y, X must be a superkey. Resolves anomalies that 3NF misses when there are overlapping candidate keys."
    },
    {
      "heading": "Denormalization",
      "text": "Intentionally adding redundancy for performance. Common in data warehouses (star schema). Benefits: fewer JOINs, faster reads. Costs: data inconsistency risk, more storage, more complex writes. Trade-off decision based on read/write patterns."
    }
  ],
  "interviewAnswer": "Normalization up to 3NF is standard practice for transactional databases. BCNF handles edge cases. Denormalization is a deliberate optimization for read-heavy workloads like data warehouses.",
  "interviewQuestions": [
    {
      "question": "What is database normalization?",
      "answer": "The process of organizing schema to reduce redundancy and dependency by dividing tables and defining relationships."
    },
    {
      "question": "What is 1NF?",
      "answer": "First Normal Form: atomic values, unique column names, same type per column, unique rows with primary key."
    },
    {
      "question": "What is 2NF?",
      "answer": "Second Normal Form: 1NF + every non-key column fully depends on the entire primary key (no partial dependency)."
    },
    {
      "question": "What is 3NF?",
      "answer": "Third Normal Form: 2NF + no transitive dependencies (non-key column depends only on the primary key)."
    },
    {
      "question": "What is a transitive dependency?",
      "answer": "When column A determines column B, and B determines column C. C depends on B, not directly on the primary key."
    },
    {
      "question": "What is BCNF?",
      "answer": "Boyce-Codd Normal Form: every determinant is a candidate key. Stricter than 3NF."
    },
    {
      "question": "What is denormalization?",
      "answer": "Intentionally adding redundancy for read performance. Common in data warehouses and reporting systems."
    },
    {
      "question": "What are the benefits of normalization?",
      "answer": "Reduces data redundancy, improves data integrity, simplifies maintenance, prevents update/insert/delete anomalies."
    },
    {
      "question": "What are the costs of normalization?",
      "answer": "More tables, more JOINs, potentially slower reads. Complex queries with many JOINs can impact performance."
    },
    {
      "question": "Is it always good to normalize to 3NF?",
      "answer": "For OLTP (transactional) systems, yes generally. For OLAP (analytical/reporting) systems, denormalization is often beneficial."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Database Normalization</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">1NF</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Atomic values</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">2NF</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Full key dep</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">3NF</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No transitive</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">BCNF</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Every det = key</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Denormal</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Perf tradeoff</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Normalization</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Organize schema to reduce redundancy and</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> improve integrity step by step.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Normalization: 1NF → 2NF → 3NF — reducing redundan</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">cy at each level.</text></svg>",
  "codeExamples": [
    {
      "title": "Unnormalized to 1NF",
      "useCase": "Remove repeating groups.",
      "code": "-- Unnormalized:\nCREATE TABLE student_courses (\n  student_name VARCHAR(100),\n  courses TEXT -- comma separated: \"CS101,CS102\"\n);\n\n-- 1NF: atomic values\nCREATE TABLE student_courses_1nf (\n  student_name VARCHAR(100),\n  course_code VARCHAR(10),\n  PRIMARY KEY (student_name, course_code)\n);",
      "description": "Split comma-separated courses into individual rows for 1NF."
    },
    {
      "title": "1NF to 2NF Example",
      "useCase": "Remove partial dependency.",
      "code": "-- 1NF (violates 2NF):\n-- PK: (student_id, course_id)\n-- course_name depends only on course_id (partial)\n\n-- 2NF: split into two tables\nCREATE TABLE enrollments (\n  student_id INT, course_id INT,\n  grade CHAR(1),\n  PRIMARY KEY (student_id, course_id)\n);\n\nCREATE TABLE courses (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  instructor VARCHAR(100)\n);",
      "description": "Partial dependency (course_name on course_id only) is resolved by extracting a courses table."
    },
    {
      "title": "2NF to 3NF",
      "useCase": "Remove transitive dependency.",
      "code": "-- 2NF (violates 3NF):\n-- order_id PK, customer_id, customer_name, order_total\n-- customer_name depends on customer_id, not order_id (transitive)\n\n-- 3NF:\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  order_total DECIMAL(10,2)\n);\n\nCREATE TABLE customers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);",
      "description": "Transitive dependency (customer_name → customer_id) resolved by separate customers table."
    },
    {
      "title": "Normalization in Practice",
      "useCase": "Complete example.",
      "code": "-- Start: one big table with redundancy\nCREATE TABLE raw_orders (\n  order_id INT, customer_name VARCHAR(100),\n  customer_email VARCHAR(100),\n  product_name VARCHAR(100),\n  product_price DECIMAL,\n  quantity INT, order_date DATE\n);\n\n-- Normalized (3NF) schema:\n-- customers(id, name, email)\n-- products(id, name, price)\n-- orders(id, customer_id, order_date)\n-- order_items(order_id, product_id, quantity)",
      "description": "Transforming a denormalized table into a normalized 3NF schema with four tables."
    },
    {
      "title": "Denormalization for Reporting",
      "useCase": "Star schema example.",
      "code": "-- Data warehouse star schema (denormalized)\nCREATE TABLE fact_sales (\n  sale_id INT,\n  date_id INT REFERENCES dim_date(id),\n  product_id INT REFERENCES dim_product(id),\n  customer_id INT REFERENCES dim_customer(id),\n  quantity INT,\n  amount DECIMAL(10,2)\n);\n\n-- Dimension tables are denormalized for fast queries\nCREATE TABLE dim_product (\n  id INT PRIMARY KEY,\n  name VARCHAR(100), category, brand, supplier\n);",
      "description": "Star schema uses controlled denormalization for analytical query performance."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which normal form requires atomic values?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
      ],
      "answer": 0,
      "explanation": "1NF requires atomic (single) values in each cell."
    },
    {
      "question": "What does 2NF remove?",
      "options": [
        "Duplicate rows",
        "Partial dependencies",
        "Transitive dependencies",
        "NULL values"
      ],
      "answer": 1,
      "explanation": "2NF removes partial dependencies on composite keys."
    },
    {
      "question": "What does 3NF remove?",
      "options": [
        "Partial dependencies",
        "Transitive dependencies",
        "Atomic values",
        "Foreign keys"
      ],
      "answer": 1,
      "explanation": "3NF removes transitive dependencies (non-key → non-key)."
    },
    {
      "question": "What is a typical use for denormalization?",
      "options": [
        "OLTP systems",
        "Data warehouses",
        "Every application",
        "Mobile apps"
      ],
      "answer": 1,
      "explanation": "Denormalization is common in data warehouses and reporting databases."
    },
    {
      "question": "Which normal form is stricter than 3NF?",
      "options": [
        "4NF",
        "BCNF",
        "DKNF",
        "5NF"
      ],
      "answer": 1,
      "explanation": "Boyce-Codd Normal Form (BCNF) is stricter than 3NF."
    },
    {
      "question": "What is a transitive dependency?",
      "options": [
        "A depends on B, B depends on PK",
        "C depends on B, B depends on A",
        "A depends on PK through B",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "Transitive: non-key column depends on another non-key column."
    }
  ]
};
