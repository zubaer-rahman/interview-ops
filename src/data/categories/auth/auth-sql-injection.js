export const auth_sql_injection = {
  "id": "auth-sql-injection",
  "title": "SQL Injection",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "SQL injection is a code injection technique where an attacker inserts malicious SQL into application queries.",
    "Attack vectors: unsanitized user input concatenated into SQL queries. Classic: ' OR '1'='1 bypasses authentication.",
    "Impact: data theft, data modification, authentication bypass, privilege escalation, complete database compromise.",
    "Prevention: parameterized queries (prepared statements) 100% of the time. Never concatenate user input into SQL."
  ],
  "laymanDefinition": "SQL injection is like a con artist talking to a security guard who follows instructions literally. The con artist says \"I'm authorized — just check the list and say yes to anyone whose name ends with 'OR 1=1'\". The guard reads it literally and lets everyone in.",
  "deepDive": [
    {
      "heading": "How SQL Injection Works",
      "text": "Vulnerable: \"SELECT * FROM users WHERE email=\\'\" + email + \"\\'\". Input: admin@x.com\\' OR \\'1\\'=\\'1. Query becomes: SELECT * FROM users WHERE email=\\'admin@x.com\\' OR \\'1\\'=\\'1\\'. Returns all users — authentication bypass. UNION SELECT can exfiltrate other tables."
    },
    {
      "heading": "Parameterized Queries (The Fix)",
      "text": "Use placeholders ($1, $2 in PostgreSQL; ? in MySQL). Database driver treats parameters as data, not executable SQL. Query structure is fixed. Example: db.query(\"SELECT * FROM users WHERE email = $1\", [email]). SQL injection is impossible with parameterized queries."
    },
    {
      "heading": "Advanced SQL Injection Techniques",
      "text": "Blind SQL injection: no error output — infer data through true/false responses (boolean-based) or timing delays (time-based). Out-of-band: database sends data to external server (DNS/HTTP). Second-order: injected data stored, then executed later when retrieved."
    },
    {
      "heading": "ORM Safety Misconceptions",
      "text": "ORMs (Sequelize, TypeORM, Prisma) use parameterized queries by default — safe. But raw queries, $queryRaw, or .executeRawUnsafe can be vulnerable. Always use parameterized versions. Some ORM features (literal, raw WHERE) may bypass protection if used incorrectly."
    },
    {
      "heading": "Database-Specific Protections",
      "text": "PostgreSQL: pg-promise, node-postgres support parameterized queries. MySQL: mysql2 supports ? placeholders. SQL Server: @param placeholders. All drivers support parameterized queries. Stored procedures can help IF they use parameterized internal queries. Least privilege DB user accounts limit damage."
    }
  ],
  "interviewAnswer": "SQL injection is 100% preventable. Always use parameterized queries — there is no excuse for concatenating user input into SQL. Use an ORM for safety but know its raw query APIs. Apply least privilege to database accounts. Use a WAF for defense in depth. Test with SQLmap during security audits.",
  "interviewQuestions": [
    {
      "question": "What is SQL injection?",
      "answer": "A code injection technique where malicious SQL is inserted into application queries through user input."
    },
    {
      "question": "What is the primary prevention?",
      "answer": "Parameterized queries (prepared statements). Database driver treats input as data, not SQL."
    },
    {
      "question": "What does \\' OR \\'1\\'=\\'1 do?",
      "answer": "Bypasses authentication by making the WHERE clause always true. Returns all users."
    },
    {
      "question": "What is blind SQL injection?",
      "answer": "No error output — attacker infers data through true/false responses or time delays."
    },
    {
      "question": "Are ORMs safe from SQL injection?",
      "answer": "ORMs are safe by default but raw queries or unsafe APIs ($queryRaw, executeRaw) can be vulnerable."
    },
    {
      "question": "What is second-order SQL injection?",
      "answer": "Malicious data is stored in the database and later executed in a different query context."
    },
    {
      "question": "What is UNION-based SQL injection?",
      "answer": "Using UNION to append results from other tables — exfiltrates data beyond the intended query."
    },
    {
      "question": "What database user permissions should be used?",
      "answer": "Least privilege — only the permissions needed (SELECT, INSERT for most app users)."
    },
    {
      "question": "Can stored procedures prevent SQL injection?",
      "answer": "Only if they use parameterized queries internally. Dynamic SQL in stored procedures is still vulnerable."
    },
    {
      "question": "What tool is used to test for SQL injection?",
      "answer": "SQLmap — automated SQL injection detection and exploitation tool."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SQL Injection</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Input</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">' OR '1'='1</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Vulnerable Query</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">String concatenation</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SQL Injection</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data breach!</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Param Query</text><text x=\"65\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SELECT * FROM users </text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">WHERE email = $1</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ORM</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Safe by default</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Least Privilege</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Limited DB user</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SQL Injection</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Injection through unsanitized inpu</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">t. Prevent with parameterized quer</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ies 100% of the time.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SQL Injection: Malicious SQL through user input. 1</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">00% preventable with parameterized queries.</text></svg>",
  "codeExamples": [
    {
      "title": "Vulnerable vs Safe Query",
      "useCase": "Never concatenate user input.",
      "code": "// VULNERABLE — NEVER DO THIS\napp.get('/user', async (req, res) => {\n  const id = req.query.id;\n  const result = await db.query(\n    \"SELECT * FROM users WHERE id = '\" + id + \"'\",\n  );\n  // Input: 1; DROP TABLE users; --\n  // Executes: SELECT * FROM users WHERE id = '1';\n  //           DROP TABLE users; --'\n});\n\n// SAFE — ALWAYS USE PARAMETERIZED\napp.get('/user', async (req, res) => {\n  const id = req.query.id;\n  const result = await db.query(\n    \"SELECT * FROM users WHERE id = $1\",\n    [id]  // treated as data, not SQL\n  );\n  // Input: 1; DROP TABLE users; --\n  // Searches for id = literal string:\n  // \"1; DROP TABLE users; --\"\n});",
      "description": "Parameterized queries treat input as data, making SQL injection impossible."
    },
    {
      "title": "Blind SQL Injection (Boolean-Based)",
      "useCase": "Infer data without output.",
      "code": "// Attacker sends true/false tests:\n?id=1 AND SUBSTRING((SELECT password FROM users WHERE id=1),1,1)='a'\n\n// If page loads normally → first char is 'a'\n// If page errors → not 'a'\n\n// Automate with SQLmap:\n// sqlmap -u \"http://site.com/user?id=1\" --dbs\n\n// Prevention (same as always):\ndb.query(\"SELECT * FROM users WHERE id = $1\", [id]);\n// ORM: User.findByPk(id);",
      "description": "Blind SQL injection infers data character-by-character through true/false responses."
    },
    {
      "title": "ORM Safe Usage (Prisma)",
      "useCase": "Avoid raw query vulnerabilities.",
      "code": "// SAFE — Prisma standard queries\nconst user = await prisma.user.findUnique({\n  where: { email: userInput }\n});\n\n// SAFE — Parameterized raw query\nconst users = await prisma.$queryRaw(\n  Prisma.sql`SELECT * FROM users WHERE email = ${userInput}`\n);\n\n// VULNERABLE — String interpolation in raw\nconst users = await prisma.$queryRawUnsafe(\n  `SELECT * FROM users WHERE email = '${userInput}'`\n); // SQL injection possible!\n\n// SAFE alternative to $queryRawUnsafe:\nconst users = await prisma.$queryRawUnsafe(\n  'SELECT * FROM users WHERE email = $1',\n  userInput\n);",
      "description": "ORMs are safe by default but raw query APIs can be misused — always use parameterized versions."
    },
    {
      "title": "Least Privilege DB User",
      "useCase": "Limit damage from injection.",
      "code": "-- Create app user with minimal permissions\nCREATE USER app_user WITH PASSWORD 'secure_password';\n\n-- Grant only what the app needs\nGRANT SELECT, INSERT, UPDATE ON orders TO app_user;\nGRANT SELECT, INSERT, UPDATE ON products TO app_user;\nGRANT SELECT ON users TO app_user; -- read-only\n\n-- NEVER grant:\n-- DROP TABLE, DROP DATABASE, CREATE USER\n-- ALTER TABLE, TRUNCATE\n-- SUPERUSER privileges\n\n-- Even if SQL injection succeeds,\n-- attacker cannot DROP tables or CREATE users\n\n-- Separate read-only connection for reports:\nCREATE USER report_user WITH PASSWORD 'report_pass';\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO report_user;",
      "description": "Least privilege database accounts limit what an attacker can do even with SQL injection."
    },
    {
      "title": "SQL Injection via LIKE Operator",
      "useCase": "Escape special characters.",
      "code": "// SAFE — parameterized query handles most cases\nconst result = await db.query(\n  \"SELECT * FROM products WHERE name ILIKE '%' || $1 || '%'\",\n  [searchTerm]\n);\n\n// But LIKE wildcards (% _) are still interpreted\n// Search for \"___\" matches all 3-char names\n\n// Escape LIKE special characters:\nfunction escapeLike(input) {\n  return input.replace(/[%_]/g, '\\\\$&');\n}\n\nconst safe = escapeLike(searchTerm);\nconst result = await db.query(\n  \"SELECT * FROM products WHERE name ILIKE '%' || $1 || '%'\",\n  [safe]\n);",
      "description": "Even with parameterized queries, LIKE wildcards need escaping to prevent unexpected matches."
    },
    {
      "title": "SQL Injection Detection (Logging)",
      "useCase": "Detect injection attempts.",
      "code": "// Log suspicious queries for monitoring\nfunction logQuery(sql, params) {\n  const suspicious = [\n    /'\\s*OR\\s*['\"]?\\d/i,\n    /'\\s*AND\\s*['\"]?\\d/i,\n    /UNION\\s+ALL?\\s+SELECT/i,\n    /DROP\\s+TABLE/i,\n    /--\\s*$/m,\n    /\\bSLEEP\\b/i,\n    /\\bWAITFOR\\b/i\n  ];\n\n  const isThreat = suspicious.some(\n    r => r.test(sql) || params?.some(\n      p => typeof p === 'string' && r.test(p)\n    )\n  );\n\n  if (isThreat) {\n    console.warn('SQL injection attempt detected:', {\n      sql, params, ip: req.ip\n    });\n  }\n}",
      "description": "Log suspicious query patterns to detect and respond to SQL injection attempts."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the primary SQL injection prevention?",
      "options": [
        "Input validation",
        "Parameterized queries",
        "Encryption",
        "Firewall"
      ],
      "answer": 1,
      "explanation": "Parameterized queries are the definitive prevention — database treats input as data, not SQL."
    },
    {
      "question": "What does \\' OR \\'1\\'=\\'1 do?",
      "options": [
        "Deletes a table",
        "Makes condition always true",
        "Inserts a row",
        "Updates a column"
      ],
      "answer": 1,
      "explanation": "It makes the WHERE clause always true, potentially returning all rows or bypassing authentication."
    },
    {
      "question": "What is blind SQL injection?",
      "options": [
        "Injection that returns no data directly",
        "Injection with visible errors",
        "Only for NoSQL",
        "Authentication bypass only"
      ],
      "answer": 0,
      "explanation": "Blind SQL injection infers data through true/false or time-based responses."
    },
    {
      "question": "Can ORMs be vulnerable to SQL injection?",
      "options": [
        "No, never",
        "Yes, with raw queries",
        "Only in MySQL",
        "Only SELECT queries"
      ],
      "answer": 1,
      "explanation": "ORMs are safe by default but raw query APIs can introduce vulnerabilities."
    },
    {
      "question": "What is the best database user permission model?",
      "options": [
        "Superuser",
        "Least privilege",
        "Read-write all",
        "No permissions"
      ],
      "answer": 1,
      "explanation": "Least privilege limits damage — app user gets only needed permissions."
    },
    {
      "question": "What tool automates SQL injection testing?",
      "options": [
        "nmap",
        "SQLmap",
        "Wireshark",
        "Burp Suite"
      ],
      "answer": 1,
      "explanation": "SQLmap is the standard automated SQL injection detection and exploitation tool."
    }
  ]
};
