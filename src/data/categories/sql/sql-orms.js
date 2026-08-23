export const sql_orms = {
  "id": "sql-orms",
  "title": "ORMs & SQL",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Object-Relational Mappers (ORMs) bridge the gap between object-oriented programming and relational databases.",
    "Popular ORMs: Sequelize (Node.js), Prisma (Node.js), TypeORM (TypeScript), Django ORM (Python), Entity Framework (.NET).",
    "ORMs handle: connection pooling, query generation, migration management, relationship mapping, and type casting.",
    "ORMs are great for CRUD but can produce inefficient queries for complex operations. Know when to drop to raw SQL."
  ],
  "laymanDefinition": "An ORM is like having a translator between two people who speak different languages. Your application speaks objects (JavaScript/Python classes), the database speaks tables and rows. The ORM translates: save this object → INSERT, find by id → SELECT, update fields → UPDATE.",
  "deepDive": [
    {
      "heading": "How ORMs Work",
      "text": "Model class maps to table. Class instances map to rows. Properties map to columns. Methods like find(), create(), update() generate SQL. Relationships defined with belongsTo, hasMany decorators. Query builder builds SQL programmatically."
    },
    {
      "heading": "ORM Advantages",
      "text": "Productivity: write application code, not SQL. Type safety: TypeScript/type-checking. Migration management: version-controlled schema changes. Relationship loading: eager/lazy loading with simple method calls. Connection management built-in."
    },
    {
      "heading": "ORM Disadvantages",
      "text": "N+1 query problem (if lazy loading). Inefficient queries (loading too much data). Complex queries are hard to express. Hidden performance costs (SELECT * by default). Learning SQL is still necessary to debug ORM-generated queries."
    },
    {
      "heading": "When to Use Raw SQL",
      "text": "Complex aggregations and window functions. Bulk operations. Reporting queries. Full-text search. Recursive CTEs. Performance-critical paths. Any query where you need specific index usage or query plan."
    },
    {
      "heading": "Common ORM Patterns",
      "text": "Eager loading: .include() or JOIN (prevents N+1). Batch operations: bulk create/update. Transactions: database-level ACID. Raw queries: .query() or .raw() for complex SQL. Pagination: built-in .paginate() or manual limit/offset."
    }
  ],
  "interviewAnswer": "ORMs are essential for productivity but are not a replacement for SQL knowledge. Use ORMs for 80% of queries (simple CRUD). Use raw SQL for the 20% that are complex or performance-critical. Always check the actual SQL that your ORM generates.",
  "interviewQuestions": [
    {
      "question": "What is an ORM?",
      "answer": "Object-Relational Mapper — bridges application objects with database tables by auto-generating SQL from code."
    },
    {
      "question": "What are popular Node.js ORMs?",
      "answer": "Sequelize (oldest, mature), Prisma (modern, type-safe), TypeORM (TypeScript-first), Knex (query builder)."
    },
    {
      "question": "What is the N+1 problem in ORMs?",
      "answer": "Loading parent objects triggers N child queries (one per parent). Solved by eager loading (.include() or JOIN)."
    },
    {
      "question": "Why might an ORM be inefficient?",
      "answer": "SELECT * by default, loading unnecessary columns. Generating multiple queries instead of JOINs. Not using indexes optimally."
    },
    {
      "question": "When should you use raw SQL instead of ORM?",
      "answer": "Complex aggregations, window functions, recursive CTEs, bulk operations, reporting queries."
    },
    {
      "question": "What does eager loading do?",
      "answer": "Loads related data in a single query using JOINs, preventing the N+1 problem."
    },
    {
      "question": "What is a migration in ORM context?",
      "answer": "Version-controlled schema changes. Migrations are code files that describe table creation, alteration, and seeding."
    },
    {
      "question": "What is a query builder?",
      "answer": "A programmatic API for constructing SQL queries (like Knex). More control than ORM but less verbose than raw SQL."
    },
    {
      "question": "Does every ORM support raw SQL?",
      "answer": "Yes. All major ORMs provide a way to execute raw SQL for complex queries."
    },
    {
      "question": "Should you learn SQL if you use an ORM?",
      "answer": "Absolutely. Debugging ORM issues requires understanding the generated SQL. Complex queries need raw SQL. Performance tuning requires knowledge of indexes and query plans."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ORMs & SQL</text><rect x=\"10\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ORM Layer</text><text x=\"70\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App <-> DB</text><line x1=\"130\" y1=\"48\" x2=\"160\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CRUD</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto SQL</text><rect x=\"170\" y=\"65\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Complex</text><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Raw SQL</text><rect x=\"170\" y=\"95\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">N+1</text><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Eager load</text><rect x=\"10\" y=\"95\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"70\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Migration</text><text x=\"70\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Schema versions</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"290\" y1=\"78\" x2=\"320\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"290\" y1=\"108\" x2=\"320\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"150\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"405\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ORMs & SQL</text><text x=\"405\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ORMs for productivity. Raw </text><text x=\"405\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SQL for performance. Know b</text><text x=\"405\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">oth.</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ORMs & SQL: Understanding ORM-generated SQL and kn</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">owing when to drop to raw queries.</text></svg>",
  "codeExamples": [
    {
      "title": "Sequelize Example",
      "useCase": "Node.js ORM in action.",
      "code": "// Model definition\nconst User = sequelize.define('User', {\n  name: DataTypes.STRING,\n  email: { type: DataTypes.STRING, unique: true },\n  salary: DataTypes.DECIMAL(10,2)\n});\n\n// ORM generates:\n// CREATE TABLE \"Users\" (\n//   id SERIAL PRIMARY KEY,\n//   name VARCHAR(255),\n//   email VARCHAR(255) UNIQUE,\n//   salary DECIMAL(10,2),\n//   createdAt TIMESTAMPTZ,\n//   updatedAt TIMESTAMPTZ\n// );",
      "description": "Sequelize model definition and the SQL it generates."
    },
    {
      "title": "Prisma Example",
      "useCase": "Modern type-safe ORM.",
      "code": "// Schema (schema.prisma)\nmodel User {\n  id    Int     @id @default(autoincrement())\n  name  String\n  posts Post[]\n}\n\nmodel Post {\n  id      Int  @id @default(autoincrement())\n  title   String\n  userId  Int\n  user    User @relation(fields: [userId], references: [id])\n}\n\n// Query with eager loading:\n// const users = await prisma.user.findMany({\n//   include: { posts: true }\n// });\n// Generates: SELECT u.*, p.* FROM User u LEFT JOIN Post p ...",
      "description": "Prisma schema and eager loading prevents N+1 queries."
    },
    {
      "title": "N+1 vs Eager Loading",
      "useCase": "Critical ORM pattern.",
      "code": "// BAD: N+1 queries\nconst orders = await Order.findAll(); // 1 query\nfor (const order of orders) {\n  const customer = await order.getCustomer(); // N queries!\n}\n// Total: 1 + N queries (slow!)\n\n// GOOD: Eager loading\nconst orders = await Order.findAll({\n  include: [Customer]  // LEFT JOIN, 1 query\n});\n// Total: 1 query (fast!)",
      "description": "Eager loading prevents the N+1 problem by using JOINs."
    },
    {
      "title": "Raw SQL in ORM",
      "useCase": "When ORM is not enough.",
      "code": "// Prisma raw query\nconst result = await prisma.$queryRaw`\n  SELECT department, COUNT(*) as count,\n    AVG(salary) as avg_salary\n  FROM employees\n  GROUP BY department\n  HAVING COUNT(*) > 5\n  ORDER BY avg_salary DESC\n`;\n\n// TypeORM raw query\nconst result = await connection.query(`\n  WITH ranked AS (\n    SELECT *, ROW_NUMBER() OVER (\n      PARTITION BY dept_id ORDER BY salary DESC\n    ) AS rn FROM employees\n  ) SELECT * FROM ranked WHERE rn <= 3\n`);",
      "description": "Raw SQL in ORMs for complex queries like aggregations and window functions."
    },
    {
      "title": "Migration Example",
      "useCase": "Version-controlled schema.",
      "code": "// Migration file (Sequelize)\nmodule.exports = {\n  up: async (queryInterface, Sequelize) => {\n    await queryInterface.createTable('Tasks', {\n      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },\n      title: { type: Sequelize.STRING, allowNull: false },\n      status: { type: Sequelize.ENUM('todo', 'done') },\n      userId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Users', key: 'id' },\n        onDelete: 'CASCADE'\n      }\n    });\n  },\n  down: async (queryInterface) => {\n    await queryInterface.dropTable('Tasks');\n  }\n};",
      "description": "Migrations provide version-controlled, reversible schema changes."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does ORM stand for?",
      "options": [
        "Object-Relational Mapping",
        "Object-Relational Model",
        "Object-Resource Mapper",
        "Online Relational Manager"
      ],
      "answer": 0,
      "explanation": "ORM stands for Object-Relational Mapping."
    },
    {
      "question": "What problem does eager loading solve?",
      "options": [
        "Slow queries",
        "N+1 queries",
        "Connection pooling",
        "Type safety"
      ],
      "answer": 1,
      "explanation": "Eager loading with .include() or JOIN prevents N+1 query problems."
    },
    {
      "question": "When should you use raw SQL over ORM?",
      "options": [
        "Simple CRUD",
        "Complex aggregations/window functions",
        "Model definitions",
        "Migration creation"
      ],
      "answer": 1,
      "explanation": "Use raw SQL for complex queries like aggregations, window functions, and recursive CTEs."
    },
    {
      "question": "What is a migration?",
      "options": [
        "Schema versioning",
        "Data backup",
        "Query optimization",
        "Connection management"
      ],
      "answer": 0,
      "explanation": "Migrations are version-controlled, reversible schema changes."
    },
    {
      "question": "Which is a modern type-safe ORM for Node.js?",
      "options": [
        "Sequelize",
        "Prisma",
        "Mongoose",
        "Knex"
      ],
      "answer": 1,
      "explanation": "Prisma is a modern type-safe ORM for Node.js and TypeScript."
    },
    {
      "question": "Why should you learn SQL if you use an ORM?",
      "options": [
        "No need",
        "To debug and optimize ORM queries",
        "ORMs are always perfect",
        "SQL is obsolete"
      ],
      "answer": 1,
      "explanation": "Understanding SQL is essential for debugging ORM-generated queries and writing efficient raw queries."
    }
  ]
};
