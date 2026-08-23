export const sql_partitioning = {
  "id": "sql-partitioning",
  "title": "Table Partitioning",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Table partitioning divides a large table into smaller, more manageable pieces called partitions, improving query performance and data management.",
    "Partition methods: RANGE (by date range), LIST (by discrete values), HASH (by hash of a column).",
    "Partition pruning: the query planner skips irrelevant partitions based on the WHERE clause, dramatically reducing I/O.",
    "PostgreSQL supports declarative partitioning (PG 10+) with sub-partitioning and partition maintenance operations."
  ],
  "laymanDefinition": "Table partitioning is like organizing a giant filing cabinet by year. Instead of searching through 10 years of documents, you open the 2024 drawer. Partition pruning means the database only looks in relevant partitions, making queries much faster.",
  "deepDive": [
    {
      "heading": "RANGE Partitioning",
      "text": "PARTITION BY RANGE (created_at). Partitions: FOR VALUES FROM (\\'2024-01-01\\') TO (\\'2024-04-01\\'). Best for time-series data: logs, transactions, historical data. Supports automatic partition creation with pg_partman extension."
    },
    {
      "heading": "LIST Partitioning",
      "text": "PARTITION BY LIST (region). Partitions: FOR VALUES IN (\\'US\\'), FOR VALUES IN (\\'EU\\'). Best for data with discrete categories: regions, departments, status values. Each partition holds matching values."
    },
    {
      "heading": "HASH Partitioning",
      "text": "PARTITION BY HASH (id). Partitions: FOR VALUES WITH (MODULUS 4, REMAINDER 0). Distributes data evenly across N partitions. Best for load balancing and when no natural partition key exists."
    },
    {
      "heading": "Partition Pruning",
      "text": "Automatic: query planner examines WHERE clause and accesses only matching partitions. EXPLAIN shows \"Partitions: excluded=3\" for a 4-partition table when 3 are skipped. Critical for performance on large partitioned tables."
    },
    {
      "heading": "Partition Maintenance",
      "text": "CREATE TABLE ... PARTITION OF — attach new partition. DROP TABLE partition_name — drop old partition (fast, no vacuum). ALTER TABLE ... DETACH PARTITION — detach then drop. REINDEX each partition separately."
    }
  ],
  "interviewAnswer": "Table partitioning is essential for managing large tables (100M+ rows). It improves query performance via partition pruning, enables fast data deletion (DROP PARTITION), and simplifies data lifecycle management.",
  "interviewQuestions": [
    {
      "question": "What is table partitioning?",
      "answer": "Dividing a large table into smaller physical pieces (partitions) while maintaining a single logical table interface."
    },
    {
      "question": "What are the three partitioning methods?",
      "answer": "RANGE (date ranges), LIST (value lists), HASH (hash distribution)."
    },
    {
      "question": "What is partition pruning?",
      "answer": "The query planner automatically skips partitions that do not match the WHERE conditions, reducing I/O."
    },
    {
      "question": "What is RANGE partitioning best for?",
      "answer": "Time-series data: logs, transactions, sensor data, audit tables. Common: monthly or yearly partitions."
    },
    {
      "question": "What is LIST partitioning best for?",
      "answer": "Discrete categories: regions (\\'US\\', \\'EU\\', \\'APAC\\'), status values, departments."
    },
    {
      "question": "What is HASH partitioning best for?",
      "answer": "Even data distribution when no natural partition key exists. Good for load balancing."
    },
    {
      "question": "How do you add a new partition?",
      "answer": "CREATE TABLE partition_name PARTITION OF main_table FOR VALUES FROM (x) TO (y);"
    },
    {
      "question": "How do you remove old data?",
      "answer": "DROP TABLE partition_name; — much faster than DELETE from a non-partitioned table."
    },
    {
      "question": "Can partitions be indexed?",
      "answer": "Yes. Indexes are created per partition. In PG 11+, indexes on parent are automatically created on new partitions."
    },
    {
      "question": "What are the limitations of partitioning?",
      "answer": "No cross-partition foreign keys. Unique indexes must include the partition key. No global indexes (each partition indexed separately)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Table Partitioning</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RANGE</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Date ranges</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LIST</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Categories</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HASH</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distribution</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pruning</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Skip parts</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Maintenance</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Add/drop</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Table Partitioning</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Split large tables into smaller pieces f</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">or performance and manageability.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Table Partitioning: RANGE, LIST, HASH — partition </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">pruning for faster queries on large tables.</text></svg>",
  "codeExamples": [
    {
      "title": "RANGE Partitioning by Month",
      "useCase": "Time-series data management.",
      "code": "CREATE TABLE orders (\n  id INT, order_date DATE, amount DECIMAL, customer_id INT\n) PARTITION BY RANGE (order_date);\n\nCREATE TABLE orders_2024_q1 PARTITION OF orders\n  FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');\n\nCREATE TABLE orders_2024_q2 PARTITION OF orders\n  FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');\n\nCREATE TABLE orders_2024_q3 PARTITION OF orders\n  FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');\n\nCREATE TABLE orders_2024_q4 PARTITION OF orders\n  FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');",
      "description": "Creates quarterly partitions for orders table. Queries by date range only scan relevant partitions."
    },
    {
      "title": "LIST Partitioning by Region",
      "useCase": "Categorical data.",
      "code": "CREATE TABLE customers (\n  id INT, name TEXT, region TEXT, signup_date DATE\n) PARTITION BY LIST (region);\n\nCREATE TABLE customers_us PARTITION OF customers\n  FOR VALUES IN ('US', 'CA', 'MX');\n\nCREATE TABLE customers_eu PARTITION OF customers\n  FOR VALUES IN ('UK', 'DE', 'FR', 'IT');\n\nCREATE TABLE customers_apac PARTITION OF customers\n  FOR VALUES IN ('JP', 'CN', 'IN', 'AU');\n\n-- Query: WHERE region = 'DE' only scans eu partition",
      "description": "LIST partitioning separates data by geographic region for regional data isolation."
    },
    {
      "title": "HASH Partitioning",
      "useCase": "Even data distribution.",
      "code": "CREATE TABLE events (\n  id INT, event_data TEXT, created_at TIMESTAMPTZ\n) PARTITION BY HASH (id);\n\nCREATE TABLE events_0 PARTITION OF events\n  FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE events_1 PARTITION OF events\n  FOR VALUES WITH (MODULUS 4, REMAINDER 1);\nCREATE TABLE events_2 PARTITION OF events\n  FOR VALUES WITH (MODULUS 4, REMAINDER 2);\nCREATE TABLE events_3 PARTITION OF events\n  FOR VALUES WITH (MODULUS 4, REMAINDER 3);",
      "description": "HASH partitioning distributes data evenly across 4 partitions for load balancing."
    },
    {
      "title": "Partition Pruning in Action",
      "useCase": "Verify with EXPLAIN.",
      "code": "EXPLAIN SELECT * FROM orders\nWHERE order_date >= '2024-06-01' AND order_date < '2024-07-01';\n\n-- Output shows only q2 partition scanned:\n-- Seq Scan on orders_2024_q2 ...\n--   Filter: (order_date >= '2024-06-01'::date)\n-- Other partitions: excluded (pruned)",
      "description": "EXPLAIN shows partition pruning in action — only relevant partitions are scanned."
    },
    {
      "title": "Managing Partitions",
      "useCase": "Adding and dropping partitions.",
      "code": "-- Add a new partition for next quarter\nCREATE TABLE orders_2025_q1 PARTITION OF orders\n  FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');\n\n-- Drop old data (fast, no vacuum)\nDROP TABLE orders_2023_q1;\n\n-- Detach partition for archival\nALTER TABLE orders DETACH PARTITION orders_2023_q2;\n-- Can now move the detached table to archive storage",
      "description": "Efficient data lifecycle management with partition add, drop, and detach operations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is table partitioning?",
      "options": [
        "Indexing strategy",
        "Splitting tables into smaller pieces",
        "Joining tables",
        "Caching strategy"
      ],
      "answer": 1,
      "explanation": "Partitioning divides a large table into smaller physical partitions."
    },
    {
      "question": "Which method is best for time-series?",
      "options": [
        "LIST",
        "RANGE",
        "HASH",
        "KEY"
      ],
      "answer": 1,
      "explanation": "RANGE partitioning is ideal for time-series data by date ranges."
    },
    {
      "question": "What is partition pruning?",
      "options": [
        "Deleting partitions",
        "Skipping irrelevant partitions",
        "Creating partitions",
        "Merging partitions"
      ],
      "answer": 1,
      "explanation": "Partition pruning skips partitions that do not match the query WHERE clause."
    },
    {
      "question": "Which method distributes data evenly?",
      "options": [
        "RANGE",
        "LIST",
        "HASH",
        "KEY"
      ],
      "answer": 2,
      "explanation": "HASH partitioning distributes data evenly across a fixed number of partitions."
    },
    {
      "question": "How do you remove old data efficiently?",
      "options": [
        "DELETE FROM",
        "DROP PARTITION",
        "TRUNCATE",
        "VACUUM"
      ],
      "answer": 1,
      "explanation": "DROP TABLE on a partition is much faster than DELETE from a large table."
    },
    {
      "question": "What is a limitation of partitioning?",
      "options": [
        "No indexes allowed",
        "No cross-partition FKs",
        "Slow queries",
        "No INSERT allowed"
      ],
      "answer": 1,
      "explanation": "Foreign keys cannot reference a partitioned table (no cross-partition FKs)."
    }
  ]
};
