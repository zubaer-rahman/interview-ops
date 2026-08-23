export const sql_database_basics = {
  "id": "sql-database-basics",
  "title": "Database Basics",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "A database is an organized collection of structured data, managed by a Database Management System (DBMS).",
    "RDBMS (Relational DBMS) stores data in tables with rows and columns, enforcing relationships via foreign keys.",
    "SQL (Structured Query Language) is the standard language for querying and managing relational databases.",
    "Popular RDBMS: PostgreSQL, MySQL, SQL Server, Oracle, SQLite. PostgreSQL is the most advanced open-source option."
  ],
  "laymanDefinition": "A database is like a digital filing cabinet. An RDBMS is a cabinet where files are stored in structured folders (tables), each with labeled columns, and you can link information between folders using references.",
  "deepDive": [
    {
      "heading": "DBMS vs RDBMS",
      "text": "DBMS stores data as files with no relationships. RDBMS stores data in tables with defined relationships via foreign keys. RDBMS supports ACID transactions, normalization, and complex queries with JOINs. DBMS is simpler (e.g., XML store), RDBMS is more powerful and widely used."
    },
    {
      "heading": "SQL Data Types",
      "text": "Numeric: INT, SMALLINT, BIGINT, DECIMAL(p,s), FLOAT, REAL. Character: CHAR(n), VARCHAR(n), TEXT. Date/Time: DATE, TIME, TIMESTAMP, INTERVAL. Binary: BLOB, BYTEA. Special: BOOLEAN, UUID, JSON, JSONB, ARRAY (PostgreSQL uses type-specific data types)."
    },
    {
      "heading": "Tables Structure",
      "text": "Tables consist of rows (records) and columns (fields). Each column has a defined data type and optional constraints. The schema defines the table structure. Tables can be linked through primary key / foreign key relationships."
    },
    {
      "heading": "SQL Sublanguages",
      "text": "DDL (Data Definition Language): CREATE, ALTER, DROP. DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE. DCL (Data Control Language): GRANT, REVOKE. TCL (Transaction Control Language): BEGIN, COMMIT, ROLLBACK."
    },
    {
      "heading": "PostgreSQL vs MySQL",
      "text": "PostgreSQL: advanced features (JSONB, full-text search, window functions, CTEs), stricter SQL standards compliance, extensible via extensions, better for complex queries and analytics. MySQL: faster for simple read-heavy workloads, widespread in LAMP stack, simpler replication."
    }
  ],
  "interviewAnswer": "Understanding database fundamentals—RDBMS concepts, SQL data types, and table structure—is essential before diving into SQL. Choose PostgreSQL for features or MySQL for simplicity.",
  "interviewQuestions": [
    {
      "question": "What is the difference between DBMS and RDBMS?",
      "answer": "DBMS stores data as files with no relationships. RDBMS stores data in tables with relationships via foreign keys, supports ACID, normalization, and SQL queries."
    },
    {
      "question": "What are common SQL data types?",
      "answer": "INT, VARCHAR(n), TEXT, DECIMAL(p,s), DATE, TIMESTAMP, BOOLEAN, UUID, JSON, JSONB. Types vary slightly between databases."
    },
    {
      "question": "What is a table in SQL?",
      "answer": "A table is a collection of related data organized in rows (records) and columns (fields). Each column has a data type and optional constraints."
    },
    {
      "question": "What are the four SQL sublanguages?",
      "answer": "DDL (schema definition), DML (data manipulation), DCL (access control), TCL (transaction control)."
    },
    {
      "question": "What is the difference between PostgreSQL and MySQL?",
      "answer": "PostgreSQL has more advanced features (JSONB, full-text search, CTEs, window functions) and stricter SQL compliance. MySQL is simpler and faster for basic read-heavy workloads."
    },
    {
      "question": "What is a primary key?",
      "answer": "A column or set of columns that uniquely identifies each row in a table. Must be unique and NOT NULL."
    },
    {
      "question": "What is a foreign key?",
      "answer": "A column that references a primary key in another table, establishing a relationship and enforcing referential integrity."
    },
    {
      "question": "What is a schema in SQL?",
      "answer": "A schema is a named collection of database objects (tables, views, functions). It organizes objects and controls access."
    },
    {
      "question": "What is NULL in SQL?",
      "answer": "NULL represents missing or unknown data. It is not the same as 0 or empty string. Comparisons with NULL use IS NULL, not = NULL."
    },
    {
      "question": "What is the difference between CHAR and VARCHAR?",
      "answer": "CHAR(n) is fixed-length (padded with spaces). VARCHAR(n) is variable-length (up to n). VARCHAR uses less space for variable-length data."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Database Basics</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RDBMS</text><text x=\"75\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Tables + Relations</text><line x1=\"140\" y1=\"55\" x2=\"170\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SQL</text><text x=\"245\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query Language</text><line x1=\"310\" y1=\"53\" x2=\"340\" y2=\"53\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"415\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Tables</text><text x=\"415\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rows x Columns</text><rect x=\"180\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"245\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DDL</text><text x=\"245\" y=\"104\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CREATE/ALTER/DROP</text><rect x=\"180\" y=\"120\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"245\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DML</text><text x=\"245\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SELECT/INSERT/UPDATE</text><rect x=\"180\" y=\"160\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"245\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DCL</text><text x=\"245\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GRANT/REVOKE</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Database Basics: RDBMS organizes data in tables wi</text><text x=\"240\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">th SQL for queries.</text></svg>",
  "codeExamples": [
    {
      "title": "Create a Database",
      "useCase": "Create and use a database.",
      "code": "CREATE DATABASE company;\n\\c company; -- PostgreSQL: connect to database\nUSE company; -- MySQL: select database",
      "description": "Creates a database named company and connects to it."
    },
    {
      "title": "Create a Table",
      "useCase": "Define table structure.",
      "code": "CREATE TABLE employees (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  salary DECIMAL(10,2) DEFAULT 0,\n  department VARCHAR(50),\n  hired_at DATE DEFAULT CURRENT_DATE\n);",
      "description": "Creates employees table with various column types and constraints."
    },
    {
      "title": "Insert Sample Data",
      "useCase": "Add rows to table.",
      "code": "INSERT INTO employees (name, email, salary, department)\nVALUES ('Alice', 'alice@example.com', 75000, 'Engineering');",
      "description": "Inserts a row into the employees table."
    },
    {
      "title": "Basic SELECT Query",
      "useCase": "Query data from table.",
      "code": "SELECT name, salary, department\nFROM employees\nWHERE salary > 50000\nORDER BY salary DESC;",
      "description": "Selects names and salaries for employees earning >50k, sorted descending."
    },
    {
      "title": "Update and Delete",
      "useCase": "Modify and remove data.",
      "code": "UPDATE employees SET salary = 80000 WHERE id = 1;\nDELETE FROM employees WHERE id = 1;",
      "description": "Updates salary then deletes the employee record."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does RDBMS stand for?",
      "options": [
        "Relational Database Management System",
        "Random Database Management System",
        "Remote Database Management System",
        "Relational Data Model System"
      ],
      "answer": 0,
      "explanation": "RDBMS stands for Relational Database Management System."
    },
    {
      "question": "Which SQL sublanguage handles data manipulation?",
      "options": [
        "DDL",
        "DML",
        "DCL",
        "TCL"
      ],
      "answer": 1,
      "explanation": "DML (Data Manipulation Language) handles SELECT, INSERT, UPDATE, DELETE."
    },
    {
      "question": "What is a primary key?",
      "options": [
        "A unique identifier for rows",
        "A foreign reference",
        "A data type",
        "An index type"
      ],
      "answer": 0,
      "explanation": "Primary key uniquely identifies each row."
    },
    {
      "question": "Which data type is variable-length string?",
      "options": [
        "CHAR",
        "VARCHAR",
        "TEXT",
        "STRING"
      ],
      "answer": 1,
      "explanation": "VARCHAR is variable-length, CHAR is fixed-length."
    },
    {
      "question": "What does NULL represent?",
      "options": [
        "Zero",
        "Empty string",
        "Missing/unknown data",
        "False"
      ],
      "answer": 2,
      "explanation": "NULL represents missing or unknown data."
    },
    {
      "question": "Which database has advanced JSONB support?",
      "options": [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "SQL Server"
      ],
      "answer": 1,
      "explanation": "PostgreSQL excels with JSONB support for JSON operations."
    }
  ]
};
