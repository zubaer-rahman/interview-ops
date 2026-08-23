export const sql_pattern_matching = {
  "id": "sql-pattern-matching",
  "title": "Advanced Pattern Matching",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "PostgreSQL offers multiple pattern matching methods: LIKE (basic), SIMILAR TO (regex-like), POSIX regex (~), and full-text search.",
    "LIKE: % (any sequence), _ (single char). ILIKE is case-insensitive LIKE.",
    "SIMILAR TO: SQL standard with regex features: | (OR), * (quantifier), [chars] (character class).",
    "POSIX Regular Expressions: ~ (matches), ~* (case-insensitive), !~ (not matches), !~* (not matches, case-insensitive)."
  ],
  "laymanDefinition": "Pattern matching in SQL ranges from simple wildcards to full regular expressions. LIKE is like searching for a file with *.txt — simple and fast. SIMILAR TO adds OR and quantifiers. POSIX regex is the full power of regular expressions — like grep inside your database.",
  "deepDive": [
    {
      "heading": "LIKE and ILIKE",
      "text": "LIKE \\'prefix%\\' — starts with. LIKE \\'%suffix\\' — ends with. LIKE \\'%contains%\\' — contains anywhere. LIKE \\'A_\\' — two chars starting with A. ILIKE — case-insensitive version. Backslash escapes special chars. All patterns are full-string matches."
    },
    {
      "heading": "SIMILAR TO",
      "text": "Intermediate between LIKE and regex. Supports: | (alternation), * (0+ repetitions), + (1+), ? (0 or 1), [a-z] (character class), [^a-z] (negation). Must match entire string (like LIKE). Example: SIMILAR TO \\'(abc|def)%\\' starts with abc or def."
    },
    {
      "heading": "POSIX Regex (~ Operator)",
      "text": "~ \\'pattern\\' — matches (case-sensitive). ~* \\'pattern\\' — matches (case-insensitive). !~ \\'pattern\\' — does not match. !~* \\'pattern\\' — does not match (case-insensitive). Partial match (unlike LIKE which requires full match)."
    },
    {
      "heading": "Regex Functions",
      "text": "REGEXP_MATCH(string, pattern) — returns first match as text[]. REGEXP_MATCHES — returns all matches. REGEXP_REPLACE — substitution. REGEXP_SPLIT_TO_TABLE — split into rows. REGEXP_SPLIT_TO_ARRAY — split into array."
    },
    {
      "heading": "Performance Considerations",
      "text": "LIKE with prefix pattern (\\'abc%\\') can use B-tree index. ILIKE and regex patterns can use GIN or GiST indexes with pg_trgm extension. SIMILAR TO is typically slower than LIKE or regex. Avoid heavy regex on large unindexed tables."
    }
  ],
  "interviewAnswer": "Use LIKE for simple wildcard matching (it is the fastest and can use indexes). Use POSIX regex (~) for complex patterns. Use SIMILAR TO mainly for SQL standard compliance — it bridges LIKE and regex. Consider pg_trgm extension for fuzzy search at scale.",
  "interviewQuestions": [
    {
      "question": "What does LIKE \\'A%\\' match?",
      "answer": "Any string starting with A. % matches any sequence of characters."
    },
    {
      "question": "What is ILIKE?",
      "answer": "PostgreSQL-specific case-insensitive version of LIKE. Same syntax, but ignores case."
    },
    {
      "question": "What does _ match in LIKE?",
      "answer": "A single character. LIKE \\'A_B\\' matches any 3-char string starting with A and ending with B."
    },
    {
      "question": "What is SIMILAR TO?",
      "answer": "SQL standard pattern matching with simple regex features like |, *, +, and character classes."
    },
    {
      "question": "What does the ~ operator do?",
      "answer": "POSIX regex match. ~ \\'^A.*B$\\' matches strings starting with A and ending with B."
    },
    {
      "question": "What is the difference between LIKE and ~?",
      "answer": "LIKE requires full string match. ~ is a partial match (use ^ and $ for full match). LIKE has limited wildcards; ~ supports full regex."
    },
    {
      "question": "How do you do case-insensitive regex?",
      "answer": "Use ~* (tilde asterisk). !~* for negated case-insensitive match."
    },
    {
      "question": "What does REGEXP_REPLACE do?",
      "answer": "Replaces regex matches with replacement text. REGEXP_REPLACE(\\'abc123\\', \\'[0-9]\\', \\'\\', \\'g\\') removes digits."
    },
    {
      "question": "How do you split a string into rows?",
      "answer": "REGEXP_SPLIT_TO_TABLE(string, delimiter_pattern) — splits string and returns each part as a row."
    },
    {
      "question": "What extension improves regex performance?",
      "answer": "pg_trgm (trigram) extension enables GiST/GIN indexes for fast LIKE and regex queries."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Advanced Pattern Matching</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LIKE/ILIKE</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Basic wildcard</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SIMILAR TO</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Simple regex</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">~ Operator</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Full regex</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">REGEXP_*</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Functions</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pg_trgm</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Index fuzzy</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pattern Matching</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">LIKE, SIMILAR TO, POSIX regex, and regex </text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">functions for text pattern matching.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Pattern Matching: LIKE, SIMILAR TO, POSIX Regex — </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">from simple wildcards to full regex.</text></svg>",
  "codeExamples": [
    {
      "title": "LIKE Basics",
      "useCase": "Common LIKE patterns.",
      "code": "SELECT name FROM employees WHERE name LIKE 'A%';    -- starts with A\nSELECT name FROM employees WHERE name LIKE '%son';  -- ends with son\nSELECT name FROM employees WHERE name LIKE '%mith%'; -- contains mith\nSELECT name FROM employees WHERE name LIKE 'A_';     -- A + 1 char\nSELECT name FROM employees WHERE name ILIKE 'alice%'; -- case-insensitive",
      "description": "Common LIKE patterns for different matching scenarios."
    },
    {
      "title": "SIMILAR TO Examples",
      "useCase": "Regex-like patterns.",
      "code": "SELECT email FROM users\nWHERE email SIMILAR TO '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';\n\nSELECT name FROM products\nWHERE name SIMILAR TO '(Pro|Ultra|Max)%';",
      "description": "SIMILAR TO with character classes and alternation for email validation."
    },
    {
      "title": "POSIX Regex for Complex Patterns",
      "useCase": "Full regex power.",
      "code": "-- Valid email format (partial match)\nSELECT email FROM users\nWHERE email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';\n\n-- Phone numbers (various formats)\nSELECT phone FROM contacts\nWHERE phone ~ '^\\(?[0-9]{3}\\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$';\n\n-- Case-insensitive search\nSELECT * FROM articles WHERE body ~* 'database';",
      "description": "POSIX regex for complex validation and search patterns."
    },
    {
      "title": "REGEXP_REPLACE and REGEXP_SPLIT",
      "useCase": "Text transformation.",
      "code": "-- Remove all non-numeric characters\nSELECT REGEXP_REPLACE(phone, '[^0-9]', '', 'g') AS clean_phone\nFROM contacts;\n\n-- Split comma-separated values into rows\nSELECT REGEXP_SPLIT_TO_TABLE('apple,banana,cherry', ',') AS fruit;\n\n-- Extract all numbers from text\nSELECT REGEXP_MATCHES('Order #123: $45.99', '[0-9]+', 'g') AS nums;",
      "description": "Regex functions for data cleaning, splitting, and extraction."
    },
    {
      "title": "pg_trgm for Fuzzy Search",
      "useCase": "Efficient fuzzy matching.",
      "code": "CREATE EXTENSION IF NOT EXISTS pg_trgm;\n\n-- Create GiST index for fuzzy search\nCREATE INDEX idx_names_trgm ON users\nUSING GIST (name gist_trgm_ops);\n\n-- Similarity search\nSELECT *, similarity(name, 'Jonhson') AS sim\nFROM users\nWHERE name % 'Jonhson'  -- % operator means similar enough\nORDER BY sim DESC;\n\n-- Also speeds up:\nSELECT * FROM users WHERE name LIKE '%mith%'; -- with index",
      "description": "pg_trgm extension enables fast fuzzy text search and wildcard queries at scale."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does % match in LIKE?",
      "options": [
        "One character",
        "Any sequence of characters",
        "A digit",
        "A word"
      ],
      "answer": 1,
      "explanation": "% matches any sequence of characters (including zero)."
    },
    {
      "question": "What operator does POSIX regex matching?",
      "options": [
        "~~",
        "~",
        ":=",
        "##"
      ],
      "answer": 1,
      "explanation": "~ is the POSIX regex match operator in PostgreSQL."
    },
    {
      "question": "What is ILIKE?",
      "options": [
        "Case-sensitive LIKE",
        "Case-insensitive LIKE",
        "Indexed LIKE",
        "Inverse LIKE"
      ],
      "answer": 1,
      "explanation": "ILIKE is the case-insensitive version of LIKE."
    },
    {
      "question": "What extension enables fuzzy search?",
      "options": [
        "pg_trgm",
        "pg_fuzzy",
        "pg_search",
        "pg_similar"
      ],
      "answer": 0,
      "explanation": "pg_trgm provides trigram-based similarity search and GiST/GIN index support."
    },
    {
      "question": "What function extracts all regex matches?",
      "options": [
        "REGEXP_MATCH",
        "REGEXP_MATCHES",
        "REGEXP_EXTRACT",
        "REGEXP_FIND"
      ],
      "answer": 1,
      "explanation": "REGEXP_MATCHES returns all matches (with g flag) as multiple rows."
    },
    {
      "question": "What is SIMILAR TO?",
      "options": [
        "SQL standard regex",
        "Like LIKE with more features",
        "PostgreSQL only",
        "Same as ~ operator"
      ],
      "answer": 1,
      "explanation": "SIMILAR TO is SQL standard with OR, quantifiers, and character classes."
    }
  ]
};
