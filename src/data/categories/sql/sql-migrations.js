export const sql_migrations = {
  "id": "sql-migrations",
  "title": "Database Migration & Version Control",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Database migrations are version-controlled scripts that evolve the database schema over time in a reproducible way.",
    "Migrations solve: shared schema across environments, team collaboration on schema changes, rollback capability, and deployment automation.",
    "Tools: node-pg-migrate, Flyway (Java), Alembic (Python), ActiveRecord Migrations (Rails), golang-migrate.",
    "Best practice: one migration per change, always test both up and down, never modify existing migrations."
  ],
  "laymanDefinition": "Migrations are like Git for your database schema. Just as you commit code changes incrementally, you create migration files for each schema change. \"Up\" applies the change, \"down\" reverts it. This means you can reproduce any version of your schema at any point in time.",
  "deepDive": [
    {
      "heading": "Migration Structure",
      "text": "Each migration has: up function (apply change) and down function (revert change). Naming: YYYYMMDDHHMMSS_description.sql or versioned numbers (001_create_users.sql). Tools track which migrations have been applied using a migrations table."
    },
    {
      "heading": "Migration Workflow",
      "text": "Create migration → review → apply to dev → test → apply to staging → apply to production. Never modify an applied migration (create a new one to fix). Always test down before deploying up (ensures rollback works)."
    },
    {
      "heading": "Common Migration Types",
      "text": "CREATE/ALTER/DROP TABLE. Add/drop columns. Add/drop indexes. Add/drop constraints (FK, UNIQUE). Data migrations (backfill, transform). Seed data (reference data, test data)."
    },
    {
      "heading": "Database Version Table",
      "text": "Tools create a schema_migrations (or _migrations) table that records which migrations have been applied. Columns: version (unique ID), name, applied_at (timestamp), checksum. This table must never be modified manually."
    },
    {
      "heading": "Migration Safety",
      "text": "Always have a tested down migration. Avoid locking large tables — use CONCURRENTLY for indexes. Test on a copy of production data. Have a rollback plan. For zero-downtime deployments: expand → migrate → contract pattern."
    }
  ],
  "interviewAnswer": "Database migrations are essential for professional software development. They make schema changes repeatable, reviewable, and reversible. The investment in a good migration workflow pays back enormously in reduced deployment stress and incident recovery time.",
  "interviewQuestions": [
    {
      "question": "What is a database migration?",
      "answer": "A version-controlled, reversible script that changes the database schema."
    },
    {
      "question": "Why use migrations?",
      "answer": "Reproducible schema across environments. Team collaboration. Rollback capability. Deployment automation."
    },
    {
      "question": "What is the up function?",
      "answer": "Applies the migration — creates tables, adds columns, creates indexes, etc."
    },
    {
      "question": "What is the down function?",
      "answer": "Reverts the migration — drops tables, removes columns, drops indexes."
    },
    {
      "question": "Should you modify an applied migration?",
      "answer": "Never. Create a new migration to fix issues. Applied migrations are immutable history."
    },
    {
      "question": "What is a data migration?",
      "answer": "A migration that transforms existing data — backfilling new columns, splitting fields, correcting values."
    },
    {
      "question": "What is a seed migration?",
      "answer": "Populates reference data: countries, status values, admin users."
    },
    {
      "question": "What is the expand-migrate-contract pattern?",
      "answer": "Zero-downtime migration: add new column (expand), migrate data gradually, remove old column (contract)."
    },
    {
      "question": "What tool is commonly used with Node.js?",
      "answer": "node-pg-migrate, Knex.js migrations, Sequelize migrations, Prisma migrations."
    },
    {
      "question": "How do you test a migration?",
      "answer": "Apply up, verify schema/data, apply down, verify schema is restored. Test on a copy of production data."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Database Migration & Version Control</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Up</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Apply change</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Down</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Revert</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Test</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verify both</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Environments</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Immutable</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Never modify</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Migrations & Versioning</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Version-controlled, reversible, and test</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">able schema evolution.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Database Migrations: Version-controlled schema cha</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nges with up/down for reproducibility.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Migration (node-pg-migrate)",
      "useCase": "Create users table.",
      "code": "exports.up = (pgm) => {\n  pgm.createTable('users', {\n    id: 'id', // serial primary key\n    name: { type: 'varchar(100)', notNull: true },\n    email: { type: 'varchar(255)', unique: true, notNull: true },\n    created_at: { type: 'timestamptz', default: pgm.func('now()') }\n  });\n};\n\nexports.down = (pgm) => {\n  pgm.dropTable('users');\n};",
      "description": "Basic create table migration with up (create) and down (drop)."
    },
    {
      "title": "Adding a Column Migration",
      "useCase": "Schema evolution.",
      "code": "// 002_add_salary_to_users.js\nexports.up = (pgm) => {\n  pgm.addColumn('users', {\n    salary: { type: 'decimal(10,2)', default: 0 }\n  });\n};\n\nexports.down = (pgm) => {\n  pgm.dropColumn('users', 'salary');\n};\n\n// Applied order: 001_create_users, 002_add_salary_to_users",
      "description": "Incremental schema change — adding a column in a new migration."
    },
    {
      "title": "Data Migration Example",
      "useCase": "Backfill data.",
      "code": "// 003_backfill_full_name.js\nexports.up = async (pgm) => {\n  // Backfill full_name from first_name + last_name\n  await pgm.sql(`\n    UPDATE users\n    SET full_name = TRIM(\n      COALESCE(first_name, '') || ' ' || COALESCE(last_name, '')\n    )\n    WHERE full_name IS NULL;\n  `);\n};\n\nexports.down = (pgm) => {\n  // Data migration down is often left empty or reversed\n  pgm.sql(`UPDATE users SET full_name = NULL`);\n};",
      "description": "Data migration for backfilling a new column from existing data."
    },
    {
      "title": "Migration for Index with CONCURRENTLY",
      "useCase": "Zero-downtime index.",
      "code": "// 004_add_index_concurrently.js\nexports.up = async (pgm) => {\n  // CREATE INDEX CONCURRENTLY does not lock the table\n  await pgm.sql(`\n    CREATE INDEX CONCURRENTLY idx_users_email\n    ON users (email);\n  `);\n};\n\nexports.down = async (pgm) => {\n  await pgm.sql(`\n    DROP INDEX CONCURRENTLY IF EXISTS idx_users_email;\n  `);\n};",
      "description": "CONCURRENTLY allows index creation without locking the table for writes."
    },
    {
      "title": "Migrations Table",
      "useCase": "How tools track state.",
      "code": "-- Tools create a tracking table:\nSELECT * FROM schema_migrations;\n\n-- Output:\n-- version  |        applied_at\n-- ---------+----------------------------\n-- 001      | 2024-01-15 10:00:00+00\n-- 002      | 2024-01-20 14:30:00+00\n-- 003      | 2024-02-01 09:15:00+00\n\n-- To see pending migrations:\nSELECT * FROM migrations_to_apply();\n\n-- Never manually modify this table!",
      "description": "The schema_migrations table tracks which migrations have been applied."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the up function in a migration?",
      "options": [
        "Reverts changes",
        "Applies changes",
        "Seeds data",
        "Drops tables"
      ],
      "answer": 1,
      "explanation": "The up function applies the schema change."
    },
    {
      "question": "What is the down function for?",
      "options": [
        "Reverting the change",
        "Applying again",
        "Checking status",
        "Optimizing"
      ],
      "answer": 0,
      "explanation": "The down function reverts the change made by up."
    },
    {
      "question": "Should you modify an applied migration?",
      "options": [
        "Yes",
        "No, create a new one",
        "Only the down",
        "Only for bugs"
      ],
      "answer": 1,
      "explanation": "Never modify an applied migration — create a new one to fix issues."
    },
    {
      "question": "What pattern enables zero-downtime migrations?",
      "options": [
        "Up and down",
        "Expand-migrate-contract",
        "Forward only",
        "Rolling update"
      ],
      "answer": 1,
      "explanation": "Expand-migrate-contract: add new, migrate data, remove old."
    },
    {
      "question": "What table tracks applied migrations?",
      "options": [
        "pg_tables",
        "schema_migrations",
        "applied_migrations",
        "versions"
      ],
      "answer": 1,
      "explanation": "Migration tools create a schema_migrations table."
    },
    {
      "question": "Which keyword avoids table locking when creating an index?",
      "options": [
        "ONLINE",
        "CONCURRENTLY",
        "LOCK FREE",
        "ASYNC"
      ],
      "answer": 1,
      "explanation": "CREATE INDEX CONCURRENTLY avoids table locks."
    }
  ]
};
