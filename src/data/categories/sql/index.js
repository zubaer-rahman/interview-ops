// Auto-generated index for sql

export const sql = {
    id: "sql",
    tag: "SQL",
    name: "SQL",
    icon: "🗄️",
    color: "#336791",
    description: "Relational databases, queries, normalization, and optimization",
    topics: [
    {
      id: "sql-database-basics",
      title: "Database Basics",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-database-basics.js').then(m => m.sql_database_basics)
    },
    {
      id: "sql-create-database",
      title: "CREATE & DROP Database",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./sql-create-database.js').then(m => m.sql_create_database)
    },
    {
      id: "sql-create-alter-drop-table",
      title: "CREATE, ALTER & DROP Table",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-create-alter-drop-table.js').then(m => m.sql_create_alter_drop_table)
    },
    {
      id: "sql-constraints",
      title: "Constraints",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-constraints.js').then(m => m.sql_constraints)
    },
    {
      id: "sql-crud",
      title: "CRUD Operations",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-crud.js').then(m => m.sql_crud)
    },
    {
      id: "sql-select-filtering",
      title: "SELECT & Filtering",
      difficulty: "beginner",
      estimatedMinutes: 25,
      content: () => import('./sql-select-filtering.js').then(m => m.sql_select_filtering)
    },
    {
      id: "sql-where-operators",
      title: "WHERE Operators",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-where-operators.js').then(m => m.sql_where_operators)
    },
    {
      id: "sql-aggregate-functions",
      title: "Aggregate Functions",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-aggregate-functions.js').then(m => m.sql_aggregate_functions)
    },
    {
      id: "sql-group-by",
      title: "GROUP BY & HAVING",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-group-by.js').then(m => m.sql_group_by)
    },
    {
      id: "sql-grouping-sets",
      title: "GROUPING SETS, ROLLUP & CUBE",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./sql-grouping-sets.js').then(m => m.sql_grouping_sets)
    },
    {
      id: "sql-joins",
      title: "Joins (INNER, LEFT, RIGHT, FULL, CROSS)",
      difficulty: "intermediate",
      estimatedMinutes: 30,
      content: () => import('./sql-joins.js').then(m => m.sql_joins)
    },
    {
      id: "sql-subqueries",
      title: "Subqueries & EXISTS",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-subqueries.js').then(m => m.sql_subqueries)
    },
    {
      id: "sql-ctes",
      title: "CTEs (Common Table Expressions)",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-ctes.js').then(m => m.sql_ctes)
    },
    {
      id: "sql-recursive-ctes",
      title: "Recursive CTEs",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./sql-recursive-ctes.js').then(m => m.sql_recursive_ctes)
    },
    {
      id: "sql-window-functions",
      title: "Window Functions",
      difficulty: "advanced",
      estimatedMinutes: 35,
      content: () => import('./sql-window-functions.js').then(m => m.sql_window_functions)
    },
    {
      id: "sql-set-operations",
      title: "Set Operations (UNION, INTERSECT, EXCEPT)",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-set-operations.js').then(m => m.sql_set_operations)
    },
    {
      id: "sql-indexes",
      title: "Indexes",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-indexes.js').then(m => m.sql_indexes)
    },
    {
      id: "sql-views",
      title: "Views & Materialized Views",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-views.js').then(m => m.sql_views)
    },
    {
      id: "sql-transactions",
      title: "Transactions & ACID",
      difficulty: "intermediate",
      estimatedMinutes: 30,
      content: () => import('./sql-transactions.js').then(m => m.sql_transactions)
    },
    {
      id: "sql-string-functions",
      title: "String Functions",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-string-functions.js').then(m => m.sql_string_functions)
    },
    {
      id: "sql-date-functions",
      title: "Date/Time Functions",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-date-functions.js').then(m => m.sql_date_functions)
    },
    {
      id: "sql-conditional-expressions",
      title: "Conditional Expressions",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-conditional-expressions.js').then(m => m.sql_conditional_expressions)
    },
    {
      id: "sql-stored-procedures",
      title: "Stored Procedures & Functions",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./sql-stored-procedures.js').then(m => m.sql_stored_procedures)
    },
    {
      id: "sql-triggers",
      title: "Triggers",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./sql-triggers.js').then(m => m.sql_triggers)
    },
    {
      id: "sql-normalization",
      title: "Database Normalization",
      difficulty: "intermediate",
      estimatedMinutes: 30,
      content: () => import('./sql-normalization.js').then(m => m.sql_normalization)
    },
    {
      id: "sql-json",
      title: "JSON & JSONB",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./sql-json.js').then(m => m.sql_json)
    },
    {
      id: "sql-full-text-search",
      title: "Full-Text Search",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./sql-full-text-search.js').then(m => m.sql_full_text_search)
    },
    {
      id: "sql-explain",
      title: "Query Optimization & EXPLAIN",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./sql-explain.js').then(m => m.sql_explain)
    },
    {
      id: "sql-injection",
      title: "SQL Injection & Prevention",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-injection.js').then(m => m.sql_injection)
    },
    {
      id: "sql-backup-restore",
      title: "Backup & Restore",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-backup-restore.js').then(m => m.sql_backup_restore)
    },
    {
      id: "sql-users-permissions",
      title: "Users, Roles & Permissions",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-users-permissions.js').then(m => m.sql_users_permissions)
    },
    {
      id: "sql-upsert",
      title: "UPSERT & MERGE",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-upsert.js').then(m => m.sql_upsert)
    },
    {
      id: "sql-sequences",
      title: "Sequences & Identity",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./sql-sequences.js').then(m => m.sql_sequences)
    },
    {
      id: "sql-data-types",
      title: "Data Types Deep Dive",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-data-types.js').then(m => m.sql_data_types)
    },
    {
      id: "sql-partitioning",
      title: "Table Partitioning",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./sql-partitioning.js').then(m => m.sql_partitioning)
    },
    {
      id: "sql-pivot",
      title: "PIVOT & Crosstab Queries",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./sql-pivot.js').then(m => m.sql_pivot)
    },
    {
      id: "sql-er-diagrams",
      title: "ER Diagrams & Database Design",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-er-diagrams.js').then(m => m.sql_er_diagrams)
    },
    {
      id: "sql-null-handling",
      title: "NULL Handling & Three-Valued Logic",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-null-handling.js').then(m => m.sql_null_handling)
    },
    {
      id: "sql-lateral-joins",
      title: "LATERAL Joins",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./sql-lateral-joins.js').then(m => m.sql_lateral_joins)
    },
    {
      id: "sql-locking-concurrency",
      title: "Locking & Concurrency",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-locking-concurrency.js').then(m => m.sql_locking_concurrency)
    },
    {
      id: "sql-pattern-matching",
      title: "Advanced Pattern Matching",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-pattern-matching.js').then(m => m.sql_pattern_matching)
    },
    {
      id: "sql-pagination",
      title: "Pagination Strategies",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-pagination.js').then(m => m.sql_pagination)
    },
    {
      id: "sql-anti-patterns",
      title: "SQL Anti-Patterns",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./sql-anti-patterns.js').then(m => m.sql_anti_patterns)
    },
    {
      id: "sql-db-comparison",
      title: "PostgreSQL vs MySQL vs SQL Server",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./sql-db-comparison.js').then(m => m.sql_db_comparison)
    },
    {
      id: "sql-orms",
      title: "ORMs & SQL",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-orms.js').then(m => m.sql_orms)
    },
    {
      id: "sql-migrations",
      title: "Database Migration & Version Control",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./sql-migrations.js').then(m => m.sql_migrations)
    }
    ]
};
