export const sql_injection = {
  "id": "sql-injection",
  "title": "SQL Injection & Prevention",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "SQL injection is a code injection technique where attackers insert malicious SQL into application queries.",
    "Common payloads: ' OR 1=1 --, ' UNION SELECT ... --, ' DROP TABLE users --",
    "Prevention: parameterized queries (prepared statements), input validation, least privilege, escaping.",
    "SQL injection is the #1 vulnerability in web applications according to OWASP Top 10."
  ],
  "laymanDefinition": "SQL injection is like a thief tricking your digital doorman. Instead of saying \"I'm John from apartment 3B\", they say \"I'm John from apartment 3B OR I'm a resident anyway\". The OR condition makes the check always pass. Parameterized queries are like requiring a key card — no tricks allowed.",
  "deepDive": [
    {
      "heading": "How SQL Injection Works",
      "text": "Input: \\' OR 1=1; -- becomes: SELECT * FROM users WHERE email = \\'\\' OR 1=1; --\\' . The -- comments out the rest. Returns all users. UNION injection: \\' UNION SELECT username, password FROM admins -- extracts data from other tables."
    },
    {
      "heading": "Parameterized Queries (Prepared Statements)",
      "text": "Separates SQL code from data. Placeholders: $1, $2 (PostgreSQL), ? (MySQL). Driver safely escapes values. Example (Node.js/pg): client.query(\\'SELECT * FROM users WHERE email = $1\\', [userInput]). Data can never be interpreted as SQL."
    },
    {
      "heading": "ORM Protection",
      "text": "Sequelize, TypeORM, Prisma, Knex use parameterized queries by default. But raw queries and $raw in WHERE filters can bypass protection. Never concatenate user input into raw query strings even within ORMs."
    },
    {
      "heading": "Additional Defenses",
      "text": "Input validation: whitelist allowed characters, reject suspicious patterns. Least privilege: application DB user should only have needed permissions (no DROP TABLE). WAF (Web Application Firewall) can detect and block injection attempts."
    },
    {
      "heading": "Stored Procedure Safety",
      "text": "Stored procedures can help if they use parameterized internal queries. But procedures with EXECUTE (dynamic SQL) are vulnerable if they concatenate input. Always use EXECUTE ... USING for parameterized dynamic SQL."
    }
  ],
  "interviewAnswer": "SQL injection is entirely preventable. Never concatenate user input into SQL strings. Use parameterized queries for all database operations. This single practice eliminates the vast majority of SQL injection vulnerabilities.",
  "interviewQuestions": [
    {
      "question": "What is SQL injection?",
      "answer": "An attack where malicious SQL code is inserted into application queries through user input, potentially exposing or destroying data."
    },
    {
      "question": "How does parameterized query prevent injection?",
      "answer": "Separates SQL code from data. User input is treated as data values, never executable SQL."
    },
    {
      "question": "What is the most common SQL injection payload?",
      "answer": "\\' OR 1=1 -- bypasses authentication by making the WHERE clause always true."
    },
    {
      "question": "Are ORMs safe from SQL injection?",
      "answer": "ORMs use parameterized queries by default. But raw queries and bypass methods can still be vulnerable."
    },
    {
      "question": "What is least privilege?",
      "answer": "Database users should have only the minimum permissions needed. The app user should not have DROP TABLE or administrative access."
    },
    {
      "question": "What does the -- do in SQL injection?",
      "answer": "Comments out the rest of the SQL query, preventing syntax errors from the injected payload."
    },
    {
      "question": "Can stored procedures prevent SQL injection?",
      "answer": "Only if they use parameterized queries internally. Dynamic SQL within procedures (EXECUTE with concatenation) is still vulnerable."
    },
    {
      "question": "What is blind SQL injection?",
      "answer": "Injection where the attacker does not see error messages. They infer information through true/false responses (boolean-based) or timing delays (time-based)."
    },
    {
      "question": "What is second-order SQL injection?",
      "answer": "Malicious input is stored in the database, then executed later when retrieved and used in another query without proper escaping."
    },
    {
      "question": "How do you test for SQL injection?",
      "answer": "Input special characters (\\', \", ;, --). Error messages revealing SQL syntax suggest vulnerability. Automated tools: SQLMap, OWASP ZAP."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SQL Injection & Prevention</text><rect x=\"10\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Input: ' OR 1=1--</text><text x=\"70\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Malicious payload</text><line x1=\"130\" y1=\"48\" x2=\"160\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Parameterized</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Safe query</text><line x1=\"170\" y1=\"60\" x2=\"170\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"70\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Validation</text><text x=\"70\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Input check</text><rect x=\"10\" y=\"105\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Least Priv</text><text x=\"70\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Min perms</text><line x1=\"130\" y1=\"83\" x2=\"160\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"118\" x2=\"160\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"75\" width=\"120\" height=\"50\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Escaping</text><text x=\"230\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data > Code</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"160\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SQL Injection Prevention</text><text x=\"390\" y=\"167\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parameterized queries + input va</text><text x=\"390\" y=\"178\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">lidation + least privilege = def</text><text x=\"390\" y=\"189\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ense in depth.</text><text x=\"240\" y=\"225\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SQL Injection: Code injection attack. Prevention v</text><text x=\"240\" y=\"237\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ia parameterized queries and defense in depth.</text></svg>",
  "codeExamples": [
    {
      "title": "Vulnerable vs Safe (Node.js/pg)",
      "useCase": "Compare bad vs good.",
      "code": "// VULNERABLE — NEVER DO THIS:\nconst sql = `SELECT * FROM users WHERE email = '${userInput}'`;\nconst result = await client.query(sql);\n\n// SAFE — parameterized query:\nconst sql = 'SELECT * FROM users WHERE email = $1';\nconst result = await client.query(sql, [userInput]);",
      "description": "String interpolation vs parameterized query — the difference between vulnerable and safe."
    },
    {
      "title": "Python/psycopg2 Example",
      "useCase": "Parameterized in Python.",
      "code": "import psycopg2\n\n# VULNERABLE:\ncur.execute(f\"SELECT * FROM users WHERE email = '{user_input}'\")\n\n# SAFE — parameterized:\ncur.execute(\"SELECT * FROM users WHERE email = %s\", (user_input,))",
      "description": "Python psycopg2 parameterized query with %s placeholder."
    },
    {
      "title": "SQL Injection in Action",
      "useCase": "How authentication is bypassed.",
      "code": "-- Normal query:\nSELECT * FROM users WHERE email = 'alice@x.com' AND password = 'secret123';\n\n-- Injection: Login with email:\n  ' OR 1=1 --\n\n-- Query becomes:\nSELECT * FROM users WHERE email = '' OR 1=1 --' AND password = 'anything';\n\n-- 1=1 is always true, -- comments out password check\n-- Returns first user — logged in as that user!",
      "description": "Classic authentication bypass using OR 1=1 injection."
    },
    {
      "title": "Union-Based Injection",
      "useCase": "Extracting data from other tables.",
      "code": "-- Vulnerable query:\nSELECT name, price FROM products WHERE id = ' + userInput\n\n-- Injection: id = 1 UNION SELECT username, password FROM admins\n\n-- Query becomes:\nSELECT name, price FROM products WHERE id = 1\nUNION\nSELECT username, password FROM admins;\n\n-- Returns product data + admin credentials!",
      "description": "UNION injection extracts data from unrelated tables."
    },
    {
      "title": "Input Validation Defense",
      "useCase": "Whitelist approach.",
      "code": "// Whitelist validation (Node.js):\nfunction validateUserId(input) {\n  const num = parseInt(input, 10);\n  if (isNaN(num) || num < 1) {\n    throw new Error(\"Invalid user ID\");\n  }\n  return num;\n}\n\n// Safe query with validated input:\nconst id = validateUserId(req.params.id);\nconst result = await client.query(\"SELECT * FROM users WHERE id = $1\", [id]);",
      "description": "Input validation as an additional defense layer beyond parameterization."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is SQL injection?",
      "options": [
        "A performance issue",
        "A code injection attack",
        "A data type error",
        "A connection problem"
      ],
      "answer": 1,
      "explanation": "SQL injection is a code injection attack through malicious input."
    },
    {
      "question": "What is the primary prevention?",
      "options": [
        "Input validation",
        "Parameterized queries",
        "Encryption",
        "Firewalls"
      ],
      "answer": 1,
      "explanation": "Parameterized queries (prepared statements) are the primary defense."
    },
    {
      "question": "What does \\' OR 1=1 -- do?",
      "options": [
        "Returns no rows",
        "Makes WHERE always true",
        "Deletes the table",
        "Shows an error"
      ],
      "answer": 1,
      "explanation": "OR 1=1 makes the condition always true; -- comments out the rest."
    },
    {
      "question": "Can ORMs be vulnerable?",
      "options": [
        "Never",
        "Only raw queries can be",
        "Always safe",
        "Depends on database"
      ],
      "answer": 1,
      "explanation": "ORMs are safe by default but raw queries and some bypasses can be vulnerable."
    },
    {
      "question": "What is least privilege?",
      "options": [
        "Minimum permissions needed",
        "Maximum permissions",
        "No permissions",
        "Admin access"
      ],
      "answer": 0,
      "explanation": "Least privilege means the minimum permissions necessary for the application."
    },
    {
      "question": "What does -- do in SQL?",
      "options": [
        "Comments out rest of query",
        "Ends the query",
        "Adds condition",
        "Drops table"
      ],
      "answer": 0,
      "explanation": "-- is a SQL comment that removes the rest of the query."
    }
  ]
};
