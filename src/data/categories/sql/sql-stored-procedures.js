export const sql_stored_procedures = {
  "id": "sql-stored-procedures",
  "title": "Stored Procedures & Functions",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Stored procedures and functions are database-side programs written in SQL or procedural languages (PL/pgSQL).",
    "Stored procedures can perform transactions and do not return values. Functions must return a value and are used in SQL expressions.",
    "PostgreSQL uses CREATE FUNCTION for both functions and procedures (CREATE PROCEDURE added in PG 11).",
    "Benefits: performance (reduced network), security (encapsulation), reusability (write once, use everywhere)."
  ],
  "laymanDefinition": "A stored procedure is like a macro or script saved in the database. Instead of sending five separate SQL statements, you send one CALL and the database does all five steps internally. It reduces network traffic and centralizes logic.",
  "deepDive": [
    {
      "heading": "Functions vs Procedures",
      "text": "Functions: CREATE FUNCTION, must return a value, used in SELECT/WHERE/expressions, cannot use transactions. Procedures: CREATE PROCEDURE, may return multiple result sets, called with CALL, can use transactions (PostgreSQL 11+)."
    },
    {
      "heading": "PL/pgSQL Language",
      "text": "PostgreSQL\\'s procedural language. Syntax: $$ DECLARE ... BEGIN ... END; $$ LANGUAGE plpgsql. Supports variables, IF/ELSE, LOOP, WHILE, FOR, EXCEPTION handling, cursors, and dynamic SQL."
    },
    {
      "heading": "Parameters",
      "text": "IN — input only (default). OUT — output only, like a return value. INOUT — both input and output. Parameters can have DEFAULT values. Named parameter syntax: func_name(param => value)."
    },
    {
      "heading": "Exception Handling",
      "text": "BEGIN ... EXCEPTION WHEN condition THEN ... END; — catch errors within a block. RAISE statement for custom error messages. GET DIAGNOSTICS for error details. Prevents transaction abortion from non-critical errors."
    },
    {
      "heading": "Security: SQL Injection",
      "text": "Use parameterized queries (EXECUTE ... USING) instead of string concatenation in dynamic SQL. Set SECURITY DEFINER or SECURITY INVOKER to control execution privileges. Always validate input."
    }
  ],
  "interviewAnswer": "Stored procedures and functions are powerful for encapsulating business logic in the database. Use them for complex multi-step operations, data validation, and scheduled tasks. PostgreSQL's PL/pgSQL is the most mature procedural extension.",
  "interviewQuestions": [
    {
      "question": "What is the difference between a function and a procedure?",
      "answer": "Functions return a value and can be used in SQL expressions. Procedures can use transactions and are called with CALL."
    },
    {
      "question": "What is PL/pgSQL?",
      "answer": "PostgreSQL\\'s procedural language for writing functions and procedures. Supports variables, control structures, and error handling."
    },
    {
      "question": "How do you return a value from a function?",
      "answer": "Use RETURN value; The function declares RETURNS type in its signature."
    },
    {
      "question": "Can stored procedures use transactions?",
      "answer": "Yes, in PostgreSQL 11+ with CREATE PROCEDURE. Procedures can use COMMIT and ROLLBACK. Functions cannot."
    },
    {
      "question": "What are OUT parameters?",
      "answer": "Output parameters that act like additional return values. Defined in the parameter list with OUT keyword."
    },
    {
      "question": "How do you handle errors in PL/pgSQL?",
      "answer": "Using BEGIN ... EXCEPTION WHEN ... THEN ... END blocks within the function body."
    },
    {
      "question": "What is SECURITY DEFINER?",
      "answer": "The function runs with the privileges of its owner, not the caller. Used for privilege escalation."
    },
    {
      "question": "What is dynamic SQL in PostgreSQL?",
      "answer": "EXECUTE \\'SELECT * FROM \\' || table_name — constructing and running SQL strings. Use EXECUTE ... USING for parameterized dynamic SQL."
    },
    {
      "question": "How do you prevent SQL injection in dynamic SQL?",
      "answer": "Always use EXECUTE ... USING for parameters. Never concatenate user input into SQL strings."
    },
    {
      "question": "Can you call a function from a SELECT?",
      "answer": "Yes. SELECT function_name(args); Functions are first-class SQL expressions."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Stored Procedures & Functions</text><rect x=\"10\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CREATE FUNCTION</text><text x=\"70\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Returns value</text><rect x=\"10\" y=\"65\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"70\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CREATE PROCEDURE</text><text x=\"70\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CALL only</text><rect x=\"10\" y=\"95\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"70\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">PL/pgSQL</text><text x=\"70\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Procedural lang</text><rect x=\"10\" y=\"125\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"70\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EXCEPTION</text><text x=\"70\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Error handling</text><line x1=\"130\" y1=\"48\" x2=\"160\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"78\" x2=\"160\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"108\" x2=\"160\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"138\" x2=\"160\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"35\" width=\"210\" height=\"130\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stored Programs</text><text x=\"275\" y=\"148\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Database-side logic: functions, proced</text><text x=\"275\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ures, and PL/pgSQL programming.</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Stored Procedures: Server-side logic for encapsula</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tion, performance, and reusability.</text></svg>",
  "codeExamples": [
    {
      "title": "Creating a Function",
      "useCase": "Calculate annual salary.",
      "code": "CREATE FUNCTION get_annual_salary(emp_id INT)\nRETURNS DECIMAL AS $$\nDECLARE\n  sal DECIMAL;\nBEGIN\n  SELECT salary * 12 INTO sal FROM employees WHERE id = emp_id;\n  RETURN sal;\nEND;\n$$ LANGUAGE plpgsql;\n\n-- Usage:\nSELECT get_annual_salary(5);",
      "description": "Creates a function that calculates and returns annual salary."
    },
    {
      "title": "Stored Procedure with Transaction",
      "useCase": "Transfer between accounts.",
      "code": "CREATE PROCEDURE transfer_funds(\n  from_id INT, to_id INT, amount DECIMAL\n) LANGUAGE plpgsql AS $$\nBEGIN\n  COMMIT; -- end any existing transaction\n  BEGIN; -- start new transaction\n  UPDATE accounts SET balance = balance - amount WHERE id = from_id;\n  UPDATE accounts SET balance = balance + amount WHERE id = to_id;\n  COMMIT;\nEXCEPTION\n  WHEN OTHERS THEN\n    ROLLBACK;\n    RAISE NOTICE 'Transfer failed: %', SQLERRM;\nEND;\n$$;\n\nCALL transfer_funds(1, 2, 100.00);",
      "description": "Procedure with transaction management and error handling."
    },
    {
      "title": "Function with OUT Parameters",
      "useCase": "Return multiple values.",
      "code": "CREATE FUNCTION get_emp_stats(dept_id INT,\n  OUT avg_sal DECIMAL,\n  OUT max_sal DECIMAL,\n  OUT emp_count INT\n) LANGUAGE plpgsql AS $$\nBEGIN\n  SELECT AVG(salary), MAX(salary), COUNT(*)\n  INTO avg_sal, max_sal, emp_count\n  FROM employees WHERE dept_id = dept_id;\nEND;\n$$;\n\nSELECT * FROM get_emp_stats(3);",
      "description": "OUT parameters return multiple values from a single function call."
    },
    {
      "title": "Trigger Function Example",
      "useCase": "Audit log on update.",
      "code": "CREATE FUNCTION log_employee_changes()\nRETURNS TRIGGER AS $$\nBEGIN\n  INSERT INTO audit_log(table_name, record_id, old_data, new_data)\n  VALUES ('employees', OLD.id,\n    ROW(OLD.name, OLD.salary)::TEXT,\n    ROW(NEW.name, NEW.salary)::TEXT);\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;",
      "description": "Trigger function that logs changes to an audit table."
    },
    {
      "title": "Dynamic SQL with EXECUTE",
      "useCase": "Safe dynamic table access.",
      "code": "CREATE FUNCTION get_count(tbl TEXT, col TEXT, val TEXT)\nRETURNS INT LANGUAGE plpgsql AS $$\nDECLARE\n  cnt INT;\nBEGIN\n  EXECUTE format(\n    'SELECT COUNT(*) FROM %I WHERE %I = %L',\n    tbl, col, val\n  ) INTO cnt;\n  RETURN cnt;\nEND;\n$$;\n\nSELECT get_count('employees', 'department', 'Engineering');",
      "description": "Dynamic SQL using EXECUTE with format() for safe identifier quoting."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which can use transactions?",
      "options": [
        "Functions",
        "Procedures",
        "Both",
        "Neither"
      ],
      "answer": 1,
      "explanation": "Procedures (PostgreSQL 11+) can use transactions. Functions cannot."
    },
    {
      "question": "What language is native to PostgreSQL for procedures?",
      "options": [
        "PL/SQL",
        "PL/pgSQL",
        "T-SQL",
        "PL/SQL Plus"
      ],
      "answer": 1,
      "explanation": "PL/pgSQL is PostgreSQL\\'s procedural language."
    },
    {
      "question": "What keyword returns a value from a function?",
      "options": [
        "RESULT",
        "RETURN",
        "OUTPUT",
        "SEND"
      ],
      "answer": 1,
      "explanation": "RETURN sends the value back from a function."
    },
    {
      "question": "What does SECURITY DEFINER do?",
      "options": [
        "Runs as caller",
        "Runs as owner",
        "Runs as DBA",
        "Runs as PUBLIC"
      ],
      "answer": 1,
      "explanation": "SECURITY DEFINER runs the function with the owner\\'s privileges."
    },
    {
      "question": "How do you call a procedure?",
      "options": [
        "SELECT",
        "CALL",
        "EXEC",
        "RUN"
      ],
      "answer": 1,
      "explanation": "CALL invokes a stored procedure."
    },
    {
      "question": "What prevents SQL injection in dynamic SQL?",
      "options": [
        "EXECUTE",
        "EXECUTE ... USING",
        "format()",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "EXECUTE ... USING and format() with %I prevent SQL injection."
    }
  ]
};
