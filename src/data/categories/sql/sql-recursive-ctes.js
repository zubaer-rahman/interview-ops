export const sql_recursive_ctes = {
  "id": "sql-recursive-ctes",
  "title": "Recursive CTEs",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Recursive CTEs are CTEs that reference themselves, enabling traversal of hierarchical or graph-structured data.",
    "A recursive CTE has two parts: anchor member (initial result set) and recursive member (references the CTE itself).",
    "The recursive member repeatedly executes until it returns no rows. UNION ALL combines results from all iterations.",
    "Use cases: organizational charts, category trees, bill of materials, graph traversal, number generation."
  ],
  "laymanDefinition": "A recursive CTE is like starting with one person in a family tree, finding their children, then finding their children's children, and so on until there are no more generations. Each step builds on the previous one.",
  "deepDive": [
    {
      "heading": "Anatomy of Recursive CTE",
      "text": "WITH RECURSIVE cte AS (anchor UNION ALL SELECT ... FROM cte WHERE ...) SELECT * FROM cte. Anchor: the starting point. Recursive member: joins back to CTE. Termination: when recursive member returns no rows."
    },
    {
      "heading": "Anchor Member",
      "text": "The first SELECT in a recursive CTE. Runs once to produce the initial result set. Typically a WHERE clause that identifies root nodes: WHERE parent_id IS NULL or WHERE level = 1."
    },
    {
      "heading": "Recursive Member",
      "text": "The second SELECT (after UNION ALL) that references the CTE name. Joins the CTE with the source table to find the next level. Must use UNION ALL (not UNION). Must eventually return no rows to terminate."
    },
    {
      "heading": "Hierarchical Data Patterns",
      "text": "Org charts: anchor = CEO, recursive = direct reports. Category trees: anchor = root categories, recursive = subcategories. File systems: anchor = root directory, recursive = subdirectories."
    },
    {
      "heading": "MAXRECURSION Option",
      "text": "SQL Server: OPTION (MAXRECURSION n) limits recursion depth (default 100). PostgreSQL: no explicit limit but will error on infinite recursion. MySQL: cte_max_recursion_depth system variable. Always add depth tracking for safety."
    }
  ],
  "interviewAnswer": "Recursive CTEs are the standard SQL way to handle tree and graph data. They replace recursive functions and procedural code with a declarative, set-based approach.",
  "interviewQuestions": [
    {
      "question": "What is a recursive CTE?",
      "answer": "A CTE that references itself to process hierarchical data. Defined with WITH RECURSIVE and contains anchor + recursive members."
    },
    {
      "question": "What are the two parts of a recursive CTE?",
      "answer": "Anchor member: initial query. Recursive member: references the CTE and adds next levels. UNION ALL combines them."
    },
    {
      "question": "How does a recursive CTE terminate?",
      "answer": "When the recursive member returns zero rows, the recursion stops. A WHERE clause in the recursive member controls termination."
    },
    {
      "question": "What is the difference between UNION and UNION ALL in recursive CTEs?",
      "answer": "UNION ALL is required. UNION would attempt deduplication, which breaks the recursion logic and may cause infinite loops."
    },
    {
      "question": "Can you track depth in a recursive CTE?",
      "answer": "Yes. Add depth + 1 AS depth in the recursive member to track the current recursion level."
    },
    {
      "question": "What happens with infinite recursion?",
      "answer": "PostgreSQL limits by work_mem and will error. SQL Server has MAXRECURSION (default 100). MySQL has cte_max_recursion_depth."
    },
    {
      "question": "Can recursive CTEs handle graphs with cycles?",
      "answer": "Yes, by tracking visited nodes using arrays or path columns. Add a cycle detection column to prevent infinite loops."
    },
    {
      "question": "What is a common use case?",
      "answer": "Org charts, category trees, folder structures, travel routes, dependency graphs, generating sequences of numbers/dates."
    },
    {
      "question": "How do you find all descendants?",
      "answer": "Recursive CTE starting from a parent, joining children recursively until no more children found."
    },
    {
      "question": "How do you find the path from root to node?",
      "answer": "Use a path column: CAST(node_name AS TEXT) AS path for anchor, and cte.path || \\' > \\' || t.node_name for recursive member."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Recursive CTEs</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Anchor</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Root rows</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Recurse</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Next level</text><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"290\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"340\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">UNION ALL</text><text x=\"340\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Combine levels</text><line x1=\"290\" y1=\"60\" x2=\"290\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"390\" y1=\"48\" x2=\"420\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"95\" width=\"280\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"150\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stop when no more rows</text><text x=\"150\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Termination</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Recursive CTEs: Anchor + Recursive member for hier</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">archical data traversal.</text></svg>",
  "codeExamples": [
    {
      "title": "Org Chart Traversal",
      "useCase": "Employee reporting hierarchy.",
      "code": "WITH RECURSIVE org_chart AS (\n  SELECT id, name, manager_id, 1 AS level\n  FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, oc.level + 1\n  FROM employees e\n  JOIN org_chart oc ON e.manager_id = oc.id\n)\nSELECT * FROM org_chart ORDER BY level, name;",
      "description": "Traverses from CEO (no manager) down through all reporting levels."
    },
    {
      "title": "Category Tree with Path",
      "useCase": "Nested categories with breadcrumb.",
      "code": "WITH RECURSIVE cat_tree AS (\n  SELECT id, name, parent_id,\n    name::TEXT AS path, 1 AS level\n  FROM categories WHERE parent_id IS NULL\n  UNION ALL\n  SELECT c.id, c.name, c.parent_id,\n    ct.path || ' > ' || c.name,\n    ct.level + 1\n  FROM categories c\n  JOIN cat_tree ct ON c.parent_id = ct.id\n)\nSELECT * FROM cat_tree ORDER BY path;",
      "description": "Builds full path for each category like \"Electronics > Computers > Laptops\"."
    },
    {
      "title": "Number Series Generation",
      "useCase": "Generate date range.",
      "code": "WITH RECURSIVE dates AS (\n  SELECT '2024-01-01'::DATE AS dt\n  UNION ALL\n  SELECT dt + INTERVAL '1 day'\n  FROM dates WHERE dt < '2024-01-31'\n)\nSELECT * FROM dates;",
      "description": "Generates all dates in January 2024 without a calendar table."
    },
    {
      "title": "Cycle Detection",
      "useCase": "Handle circular references safely.",
      "code": "WITH RECURSIVE traverse AS (\n  SELECT id, name, manager_id,\n    ARRAY[id] AS visited, 1 AS level\n  FROM employees WHERE id = 1\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id,\n    t.visited || e.id, t.level + 1\n  FROM employees e\n  JOIN traverse t ON e.manager_id = t.id\n  WHERE NOT e.id = ANY(t.visited)\n)\nSELECT * FROM traverse ORDER BY level;",
      "description": "Uses array tracking to prevent infinite loops in cyclic data."
    },
    {
      "title": "Dependency Resolution",
      "useCase": "Find all prerequisites.",
      "code": "WITH RECURSIVE deps AS (\n  SELECT id, name, 0 AS depth\n  FROM courses WHERE id = 'ADV-SQL'\n  UNION ALL\n  SELECT c.id, c.name, d.depth + 1\n  FROM prerequisites p\n  JOIN deps d ON p.course_id = d.id\n  JOIN courses c ON p.prereq_id = c.id\n)\nSELECT * FROM deps ORDER BY depth DESC;",
      "description": "Finds all prerequisite courses for Advanced SQL in dependency order."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the anchor member?",
      "options": [
        "First query that runs once",
        "Recursive part",
        "Termination condition",
        "Final SELECT"
      ],
      "answer": 0,
      "explanation": "The anchor runs once to produce the initial result set."
    },
    {
      "question": "What combines anchor and recursive results?",
      "options": [
        "UNION",
        "UNION ALL",
        "JOIN",
        "MERGE"
      ],
      "answer": 1,
      "explanation": "UNION ALL combines results without deduplication."
    },
    {
      "question": "When does a recursive CTE stop?",
      "options": [
        "Fixed iterations",
        "No more rows from recursive member",
        "Timeout",
        "MAXRECURSION error"
      ],
      "answer": 1,
      "explanation": "Recursion stops when the recursive member returns zero rows."
    },
    {
      "question": "Which clause must recursive CTEs use?",
      "options": [
        "WITH RECURSIVE",
        "WITH ITERATE",
        "RECURSIVE CTE",
        "WITH LOOP"
      ],
      "answer": 0,
      "explanation": "WITH RECURSIVE is the required syntax."
    },
    {
      "question": "What prevents infinite recursion in PostgreSQL?",
      "options": [
        "MAXRECURSION",
        "work_mem",
        "No safeguard",
        "Automatic limit"
      ],
      "answer": 2,
      "explanation": "PostgreSQL does not have MAXRECURSION — it relies on work_mem to eventually error."
    },
    {
      "question": "Can you track depth in a recursive CTE?",
      "options": [
        "Yes",
        "No",
        "Only in anchor",
        "Only in SQL Server"
      ],
      "answer": 0,
      "explanation": "Add a level counter column incremented in the recursive member."
    }
  ]
};
