export const sql_select_filtering = {
  "id": "sql-select-filtering",
  "title": "SELECT & Filtering",
  "difficulty": "beginner",
  "estimatedMinutes": 25,
  "tldr": [
    "SELECT retrieves data from one or more tables. WHERE filters rows based on conditions.",
    "DISTINCT removes duplicate rows from results. ORDER BY sorts results ascending (ASC) or descending (DESC).",
    "Aliases (AS) rename columns or tables in query results for clarity.",
    "LIMIT and OFFSET control row count and pagination. FETCH (SQL standard) and TOP (SQL Server) are alternatives."
  ],
  "laymanDefinition": "SELECT is like asking a specific question from your filing cabinet. WHERE narrows down which files you look at, ORDER BY arranges them, and LIMIT gives you just the first few.",
  "deepDive": [
    {
      "heading": "SELECT Clause",
      "text": "SELECT column1, column2 FROM table — returns only specified columns. SELECT * returns all columns (avoid in production — wastes bandwidth, breaks if schema changes). SELECT expressions: SELECT UPPER(name), salary * 1.1 FROM employees."
    },
    {
      "heading": "WHERE Clause",
      "text": "Filters rows before grouping/sorting. Operators: =, <>, <, >, <=, >=. Combine with AND, OR, NOT. Use parentheses to group conditions. Performance tip: index columns used in WHERE."
    },
    {
      "heading": "DISTINCT",
      "text": "SELECT DISTINCT column FROM table — returns unique values, removing duplicates. SELECT DISTINCT col1, col2 — unique combinations. Alternative to GROUP BY for simple deduplication."
    },
    {
      "heading": "ORDER BY",
      "text": "ORDER BY column1 ASC, column2 DESC — sorts results. ASC (default) for ascending, DESC for descending. Can order by column position (ORDER BY 1, 2) but use column names for clarity. NULLS FIRST / NULLS LAST controls NULL placement."
    },
    {
      "heading": "LIMIT / OFFSET / FETCH / TOP",
      "text": "LIMIT n — first n rows (PostgreSQL, MySQL). LIMIT n OFFSET m — skip m, take n. FETCH FIRST n ROWS ONLY — SQL standard. FETCH NEXT n ROWS ONLY AFTER m ROWS. TOP n — SQL Server. OFFSET is inefficient for large pagination (use keyset pagination)."
    }
  ],
  "interviewAnswer": "SELECT with WHERE, ORDER BY, DISTINCT, and LIMIT is the most common SQL query pattern. Mastering filtering and sorting is essential before moving to joins and aggregations.",
  "interviewQuestions": [
    {
      "question": "What does SELECT do?",
      "answer": "Retrieves data from database tables. Specifies which columns to return."
    },
    {
      "question": "How do you filter rows in SQL?",
      "answer": "Use WHERE clause with conditions: WHERE column = value, WHERE column > value, WHERE column IN (list)."
    },
    {
      "question": "What does DISTINCT do?",
      "answer": "Removes duplicate rows from the result set. Returns only unique values."
    },
    {
      "question": "How do you sort results?",
      "answer": "ORDER BY column ASC (ascending) or DESC (descending). Can sort by multiple columns."
    },
    {
      "question": "What is the difference between LIMIT and OFFSET?",
      "answer": "LIMIT restricts the number of rows. OFFSET skips a number of rows before returning. Used together for pagination."
    },
    {
      "question": "What is a column alias?",
      "answer": "Renaming a column in query output using AS: SELECT name AS employee_name FROM employees;"
    },
    {
      "question": "What does NULLS LAST do?",
      "answer": "In ORDER BY, places NULL values after non-NULL values. NULLS FIRST places them first."
    },
    {
      "question": "What is the difference between WHERE and HAVING?",
      "answer": "WHERE filters rows before grouping. HAVING filters groups after aggregation."
    },
    {
      "question": "How do you select unique combinations of two columns?",
      "answer": "SELECT DISTINCT col1, col2 FROM table; Returns unique pairs."
    },
    {
      "question": "What is keyset pagination?",
      "answer": "Pagination using WHERE id > last_seen_id ORDER BY id LIMIT n — more efficient than OFFSET for large datasets."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SELECT & Filtering</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SELECT</text><text x=\"75\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">col1, col2</text><line x1=\"140\" y1=\"55\" x2=\"170\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">FROM</text><text x=\"245\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">table_name</text><line x1=\"310\" y1=\"50\" x2=\"340\" y2=\"50\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"415\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WHERE</text><text x=\"415\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">condition</text><rect x=\"180\" y=\"75\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"245\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ORDER BY</text><text x=\"245\" y=\"99\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sort column</text><rect x=\"180\" y=\"115\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"245\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LIMIT n</text><text x=\"245\" y=\"139\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">restrict rows</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SELECT: Retrieve, filter, sort, and limit data fro</text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">m tables.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic SELECT",
      "useCase": "Simple query examples.",
      "code": "SELECT first_name, last_name, salary\nFROM employees;",
      "description": "Selects specific columns from employees table."
    },
    {
      "title": "WHERE with Multiple Conditions",
      "useCase": "Complex filtering.",
      "code": "SELECT name, salary, department\nFROM employees\nWHERE department = 'Engineering'\n  AND salary > 60000\n  OR (department = 'Sales' AND salary > 50000);",
      "description": "Combines AND/OR for complex filtering conditions."
    },
    {
      "title": "DISTINCT and ORDER BY",
      "useCase": "Unique values sorted.",
      "code": "SELECT DISTINCT department\nFROM employees\nORDER BY department ASC;",
      "description": "Returns unique departments in alphabetical order."
    },
    {
      "title": "LIMIT with OFFSET for Pagination",
      "useCase": "Page-based pagination.",
      "code": "SELECT name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 10 OFFSET 20; -- Page 3 (rows 21-30)",
      "description": "Returns page 3 of employees sorted by salary (10 per page)."
    },
    {
      "title": "Aliases",
      "useCase": "Renaming columns and tables.",
      "code": "SELECT\n  name AS employee_name,\n  salary * 12 AS annual_salary\nFROM employees AS e\nWHERE e.department = 'Engineering';",
      "description": "Renames columns and uses table alias e."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which clause filters rows?",
      "options": [
        "SELECT",
        "WHERE",
        "ORDER BY",
        "LIMIT"
      ],
      "answer": 1,
      "explanation": "WHERE filters rows based on conditions."
    },
    {
      "question": "What does DISTINCT remove?",
      "options": [
        "Columns",
        "Duplicate rows",
        "NULL values",
        "Indexes"
      ],
      "answer": 1,
      "explanation": "DISTINCT removes duplicate rows from results."
    },
    {
      "question": "Which clause sorts results?",
      "options": [
        "GROUP BY",
        "ORDER BY",
        "SORT BY",
        "HAVING"
      ],
      "answer": 1,
      "explanation": "ORDER BY sorts query results."
    },
    {
      "question": "What does LIMIT 10 OFFSET 20 do?",
      "options": [
        "First 10 rows",
        "Skip 20, take 10",
        "Last 10 rows",
        "Skip 10, take 20"
      ],
      "answer": 1,
      "explanation": "Skips 20 rows then returns 10."
    },
    {
      "question": "How do you rename a column in output?",
      "options": [
        "AS clause",
        "RENAME keyword",
        "ALIAS keyword",
        "NAME keyword"
      ],
      "answer": 0,
      "explanation": "Use column_name AS alias_name."
    },
    {
      "question": "What is the default sort direction?",
      "options": [
        "ASC",
        "DESC",
        "No default",
        "Depends on column"
      ],
      "answer": 0,
      "explanation": "Default ORDER BY direction is ASC (ascending)."
    }
  ]
};
