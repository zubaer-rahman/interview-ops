export const sql_create_alter_drop_table = {
  "id": "sql-create-alter-drop-table",
  "title": "CREATE, ALTER & DROP Table",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "CREATE TABLE defines a new table structure with columns, data types, and constraints.",
    "ALTER TABLE modifies an existing table: add/drop columns, modify types, add/drop constraints.",
    "DROP TABLE permanently deletes the table and its data. TRUNCATE removes all rows but keeps the table structure.",
    "RENAME TABLE renames a table. Use IF EXISTS variants to avoid errors."
  ],
  "laymanDefinition": "Creating a table is like designing a spreadsheet template. ALTER is like adding or removing columns later. DROP is shredding the whole spreadsheet.",
  "deepDive": [
    {
      "heading": "CREATE TABLE Syntax",
      "text": "CREATE TABLE tablename (column1 type constraints, column2 type constraints, table constraints);. Supports: DEFAULT values, column constraints, table-level constraints. Use IF NOT EXISTS to skip existing tables."
    },
    {
      "heading": "ALTER TABLE Operations",
      "text": "Add column: ALTER TABLE t ADD COLUMN c TYPE. Drop column: ALTER TABLE t DROP COLUMN c. Modify type: ALTER TABLE t ALTER COLUMN c TYPE newtype. Rename column: ALTER TABLE t RENAME COLUMN old TO new. Add constraint: ALTER TABLE t ADD CONSTRAINT pk PRIMARY KEY (id)."
    },
    {
      "heading": "DROP TABLE vs TRUNCATE",
      "text": "DROP TABLE deletes the table structure and data permanently. TRUNCATE TABLE removes all rows but keeps the table structure (faster than DELETE for all rows). TRUNCATE cannot be rolled back in some databases. DROP requires CASCADE if other objects depend on the table."
    },
    {
      "heading": "RENAME TABLE",
      "text": "PostgreSQL: ALTER TABLE old RENAME TO new. MySQL: RENAME TABLE old TO new. SQL Server: sp_rename. Cannot rename across databases."
    },
    {
      "heading": "Temporary Tables",
      "text": "CREATE TEMPORARY TABLE tmp (...) — table exists only for the session. Automatically dropped on session end. Useful for intermediate results. PostgreSQL also supports UNLOGGED tables for faster writes (no WAL logging, not crash-safe)."
    }
  ],
  "interviewAnswer": "CREATE, ALTER, DROP, and TRUNCATE are essential DDL operations. Understanding the differences between DROP and TRUNCATE is critical for data management.",
  "interviewQuestions": [
    {
      "question": "How do you create a table in SQL?",
      "answer": "CREATE TABLE table_name (column1 datatype constraints, column2 datatype constraints, ...);"
    },
    {
      "question": "How do you add a column?",
      "answer": "ALTER TABLE table_name ADD COLUMN column_name datatype;"
    },
    {
      "question": "How do you drop a column?",
      "answer": "ALTER TABLE table_name DROP COLUMN column_name;"
    },
    {
      "question": "What is the difference between DROP and TRUNCATE?",
      "answer": "DROP deletes the table structure and data. TRUNCATE removes all rows but keeps the structure. TRUNCATE is faster and cannot be filtered."
    },
    {
      "question": "What is a temporary table?",
      "answer": "A table that exists only for the database session. Automatically dropped when the session ends. Created with CREATE TEMPORARY TABLE."
    },
    {
      "question": "How do you rename a table?",
      "answer": "PostgreSQL: ALTER TABLE old_name RENAME TO new_name. MySQL: RENAME TABLE old_name TO new_name."
    },
    {
      "question": "What is IF NOT EXISTS in CREATE TABLE?",
      "answer": "Prevents an error if the table already exists. Creates only if not present."
    },
    {
      "question": "Can you add a primary key after creating a table?",
      "answer": "Yes: ALTER TABLE t ADD PRIMARY KEY (id);"
    },
    {
      "question": "What does CASCADE do in DROP TABLE?",
      "answer": "Automatically drops objects that depend on the table (views, foreign keys). Without CASCADE, DROP fails if dependencies exist."
    },
    {
      "question": "What is TRUNCATE vs DELETE without WHERE?",
      "answer": "TRUNCATE is faster, uses less transaction log, resets auto-increment counters. DELETE can be rolled back and triggers row-level triggers."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CREATE, ALTER & DROP Table</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CREATE TABLE</text><text x=\"75\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">New structure</text><line x1=\"140\" y1=\"55\" x2=\"170\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ALTER TABLE</text><text x=\"245\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Modify columns</text><line x1=\"310\" y1=\"53\" x2=\"340\" y2=\"53\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"415\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DROP TABLE</text><text x=\"415\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Delete structure</text><rect x=\"180\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"245\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">TRUNCATE</text><text x=\"245\" y=\"104\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Remove rows</text><rect x=\"180\" y=\"125\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"245\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RENAME</text><text x=\"245\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rename table</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Table DDL: CREATE, ALTER, DROP, TRUNCATE, and RENA</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ME operations.</text></svg>",
  "codeExamples": [
    {
      "title": "Create Table with Constraints",
      "useCase": "Full definition.",
      "code": "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  price DECIMAL(10,2) CHECK (price >= 0),\n  category VARCHAR(50) DEFAULT 'General',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
      "description": "Creates products table with various constraints and defaults."
    },
    {
      "title": "ALTER TABLE Add/Drop Column",
      "useCase": "Modify table structure.",
      "code": "ALTER TABLE products ADD COLUMN description TEXT;\nALTER TABLE products DROP COLUMN description;\nALTER TABLE products ALTER COLUMN price TYPE NUMERIC(12,2);",
      "description": "Adds, drops, and modifies column types."
    },
    {
      "title": "DROP vs TRUNCATE",
      "useCase": "Key difference demo.",
      "code": "-- Removes all rows, keeps structure\nTRUNCATE TABLE products;\n\n-- Removes table and all data permanently\nDROP TABLE products;\n\n-- Drop with CASCADE (handles dependencies)\nDROP TABLE products CASCADE;",
      "description": "TRUNCATE removes data only. DROP removes everything."
    },
    {
      "title": "RENAME Table",
      "useCase": "Rename examples.",
      "code": "-- PostgreSQL\nALTER TABLE products RENAME TO inventory;\n\n-- MySQL\nRENAME TABLE products TO inventory;",
      "description": "Renames the table in PostgreSQL and MySQL syntax."
    },
    {
      "title": "Temporary Table",
      "useCase": "Session-specific table.",
      "code": "CREATE TEMPORARY TABLE temp_results AS\nSELECT department, AVG(salary) as avg_salary\nFROM employees\nGROUP BY department;\n\nSELECT * FROM temp_results; -- auto-dropped on session end",
      "description": "Creates a temporary table for intermediate results."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which command deletes the table structure?",
      "options": [
        "TRUNCATE",
        "DROP",
        "DELETE",
        "REMOVE"
      ],
      "answer": 1,
      "explanation": "DROP deletes the table structure. TRUNCATE only removes rows."
    },
    {
      "question": "Which command removes all rows but keeps structure?",
      "options": [
        "DROP",
        "TRUNCATE",
        "DELETE",
        "CLEAR"
      ],
      "answer": 1,
      "explanation": "TRUNCATE removes all rows, keeps the table."
    },
    {
      "question": "How do you add a column?",
      "options": [
        "ADD COLUMN",
        "ALTER TABLE ADD",
        "ALTER TABLE ADD COLUMN",
        "INSERT COLUMN"
      ],
      "answer": 2,
      "explanation": "ALTER TABLE ... ADD COLUMN adds a column."
    },
    {
      "question": "What does CASCADE do in DROP TABLE?",
      "options": [
        "Drops dependencies automatically",
        "Prevents drop",
        "Backs up table",
        "Renames table"
      ],
      "answer": 0,
      "explanation": "CASCADE drops dependent objects."
    },
    {
      "question": "When is a temporary table dropped?",
      "options": [
        "On commit",
        "On session end",
        "On transaction end",
        "Manually"
      ],
      "answer": 1,
      "explanation": "Temporary tables are dropped when the session ends."
    },
    {
      "question": "Which operation is faster for removing all rows?",
      "options": [
        "DELETE FROM",
        "TRUNCATE",
        "DROP",
        "Both same"
      ],
      "answer": 1,
      "explanation": "TRUNCATE is faster than DELETE FROM for removing all rows."
    }
  ]
};
