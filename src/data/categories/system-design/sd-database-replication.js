export const sd_database_replication = {
  "id": "sd-database-replication",
  "title": "Database Replication",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Replication copies data from one database (primary) to one or more replicas to increase read throughput, provide failover, and ensure durability.",
    "Types: Single-primary (one primary for writes, many replicas for reads — most common), Multi-primary (multiple write nodes — conflict resolution needed), Cascading (replica can be source for another).",
    "Modes: Synchronous (commit waits for replica confirmation — strong consistency, higher latency), Asynchronous (primary commits without waiting — faster, possible data loss on failover).",
    "Uses: read scaling (replicas handle SELECTs), high availability (failover if primary fails), disaster recovery (replica in another region), analytics (replica for heavy queries)."
  ],
  "laymanDefinition": "Replication is like a newspaper printing press. The primary press (primary DB) is the master — all articles are finalized here. Copies (replicas) are sent to distribution centers. Most readers get their paper from a local center (read replica) — faster than going to the main press. If the main press breaks down, a distribution center can take over (failover), though there may be a gap in the latest edition (data loss).",
  "deepDive": [
    {
      "heading": "Single-Primary Replication",
      "text": "One primary for writes, one or more replicas for reads. Primary streams WAL (Write-Ahead Log) to replicas. Replicas apply changes. Reads can go to replicas to offload primary. Application must separate read/write connections. Failover: promote replica to primary (manual or automated)."
    },
    {
      "heading": "Synchronous vs Asynchronous",
      "text": "Synchronous: primary waits for N replicas to confirm write. Strong consistency (no data loss on failover). Higher write latency. Minimum 2 replicas recommended. Asynchronous: primary commits immediately, replica catches up eventually. Fast writes. Possible data loss (seconds of writes) if primary fails before replication."
    },
    {
      "heading": "Replication Lag",
      "text": "Time between write on primary and appearance on replica. Causes: network latency, replica too slow, high write volume on primary. Effects: stale reads on replicas. Mitigation: read-your-writes consistency (read from primary after write), monitor lag (seconds_behind_master)."
    },
    {
      "heading": "Failover Process",
      "text": "Detection: primary health check fails (no heartbeat, connection timeout). Promotion: pick replica with most up-to-date data. DNS update or VIP move to new primary. Split-brain prevention: STONITH (Shoot The Other Node In The Head) — ensure old primary is down. Automated failover tools: Patroni, Orchestrator, AWS RDS Multi-AZ."
    }
  ],
  "interviewAnswer": "Use single-primary with async replicas for most workloads. Synchronous for critical data (financial). Monitor replication lag. Use read replicas to offload primary — separate read/write connection paths in code. Test failover process regularly. Aurora and RDS Multi-AZ simplify replication management.",
  "interviewQuestions": [
    {
      "question": "What is replication?",
      "answer": "Copying data from primary database to replicas for read scaling, HA, and durability."
    },
    {
      "question": "Single-primary vs multi-primary?",
      "answer": "Single-primary: one write node, many read replicas. Multi-primary: multiple write nodes (conflict resolution needed)."
    },
    {
      "question": "Synchronous replication?",
      "answer": "Primary waits for replica ack before commit. Strong consistency, higher write latency."
    },
    {
      "question": "Asynchronous replication?",
      "answer": "Primary commits immediately. Fast writes, potential data loss on failover."
    },
    {
      "question": "What is replication lag?",
      "answer": "Time difference between write on primary and appearance on replica."
    },
    {
      "question": "What is failover?",
      "answer": "Promoting a replica to primary when the primary fails."
    },
    {
      "question": "What is WAL?",
      "answer": "Write-Ahead Log — PostgreSQL/Binary log (MySQL) streamed to replicas for replay."
    },
    {
      "question": "What is read-your-writes consistency?",
      "answer": "After writing, read from primary to ensure you see your own write."
    },
    {
      "question": "What is split-brain?",
      "answer": "Two nodes both believing they are primary. Prevent with STONITH or quorum."
    },
    {
      "question": "What is Patroni?",
      "answer": "PostgreSQL HA tool — manages replication, automated failover, and primary election."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Database Replication</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Writes</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Primary</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read+Write</text><line x1=\"200\" y1=\"77\" x2=\"170\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replica 1</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read-only</text><rect x=\"120\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"170\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replica 2</text><text x=\"170\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read-only</text><rect x=\"230\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replica N</text><text x=\"280\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read-only</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WAL Stream</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Async/Sync</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replication</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Primary → Replicas. Read scaling, HA, failover. Async (fast) vs Sync (consistent). Mo</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nitor lag.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Replication: Copy data from primary to replicas. S</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">cale reads, failover. Sync vs async.</text></svg>",
  "codeExamples": [
    {
      "title": "PostgreSQL Streaming Replication",
      "useCase": "Primary-replica setup.",
      "code": "# postgresql.conf (primary)\nwal_level = replica\nmax_wal_senders = 5\nwal_keep_size = 1024  # MB\n# On replica: pg_hba.conf\nhost replication replicator primary_ip/32 md5\n# On replica: create standby.signal\n# postgresql.conf (replica)\nprimary_conninfo = host=primary_ip port=5432 user=replicator password=repl_pass\nhot_standby = on\n# Promote replica to primary:\npg_ctl promote -D /var/lib/postgresql/data",
      "description": "PostgreSQL streaming replication configuration."
    },
    {
      "title": "Read/Write Splitting in App",
      "useCase": "Separate read and write connections.",
      "code": "const { Pool } = require(\"pg\");\nconst pools = {\n  write: new Pool({ host: \"primary.db\", port: 5432, database: \"app\" }),\n  read: new Pool({ host: \"replica.db\", port: 5432, database: \"app\" }),\n};\nasync function getUser(id, isWrite) {\n  const pool = isWrite ? pools.write : pools.read;\n  return pool.query(\"SELECT * FROM users WHERE id=$1\", [id]);\n}\nasync function createUser(data) {\n  // Writes always go to primary\n  const result = await pools.write.query(\n    \"INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *\",\n    [data.name, data.email]\n  );\n  // Read-after-write: read from primary\n  return getUser(result.rows[0].id, true);\n}",
      "description": "Read/write splitting in application code."
    },
    {
      "title": "MySQL Group Replication",
      "useCase": "Multi-primary setup.",
      "code": "# my.cnf (each node)\n[mysqld]\nplugin-load=group_replication.so\ngroup_replication_group_name=\"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\"\ngroup_replication_start_on_boot=off\ngroup_replication_bootstrap_group=off\ngroup_replication_local_address=\"10.0.1.10:33061\"\ngroup_replication_group_seeds=\"10.0.1.10:33061,10.0.1.11:33061,10.0.1.12:33061\"\ngroup_replication_single_primary_mode=ON\n# Bootstrap first node:\nSET GLOBAL group_replication_bootstrap_group=ON;\nSTART GROUP_REPLICATION;\nSET GLOBAL group_replication_bootstrap_group=OFF;",
      "description": "MySQL Group Replication for multi-primary setups."
    },
    {
      "title": "Failover with Patroni (PostgreSQL)",
      "useCase": "Automated HA.",
      "code": "# patroni.yml\nscope: myapp\nnamespace: /db/\nname: pg-primary\nrestapi:\n  listen: 0.0.0.0:8008\n  connect_address: 10.0.1.10:8008\nconsul:\n  host: 10.0.1.20:8500\npostgresql:\n  listen: 0.0.0.0:5432\n  connect_address: 10.0.1.10:5432\n  data_dir: /data/pgdata\n  pg_hba:\n    - \"host replication replicator 10.0.0.0/8 md5\"\n    - \"host all all 0.0.0.0/0 md5\"\n  replication:\n    username: replicator\n    password: repl_pass\n    network: 10.0.0.0/8\n  parameters:\n    wal_level: replica\n    hot_standby: \"on\"\n    max_connections: 200",
      "description": "Patroni configuration for automated PostgreSQL failover."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Primary database handles?",
      "options": [
        "Reads only",
        "Writes (and possibly reads)",
        "Backups only",
        "Analytics"
      ],
      "answer": 1,
      "explanation": "Primary handles writes. Replicas handle reads."
    },
    {
      "question": "Synchronous replication ensures?",
      "options": [
        "Fast writes",
        "No data loss on failover",
        "Lower latency",
        "Less network"
      ],
      "answer": 1,
      "explanation": "No data loss — primary waits for replica ack."
    },
    {
      "question": "Replication lag causes?",
      "options": [
        "Faster reads",
        "Stale data on replicas",
        "More writes",
        "Better consistency"
      ],
      "answer": 1,
      "explanation": "Replicas may serve stale data."
    },
    {
      "question": "What is failover?",
      "options": [
        "Adding more data",
        "Promoting replica on primary failure",
        "Restarting DB",
        "Rebuilding indexes"
      ],
      "answer": 1,
      "explanation": "Promote replica to primary when primary fails."
    },
    {
      "question": "Read-your-writes pattern?",
      "options": [
        "Read from replica after write",
        "Read from primary after write",
        "Read from cache",
        "Write to both"
      ],
      "answer": 1,
      "explanation": "Read from primary after writing to ensure visibility."
    },
    {
      "question": "What is WAL?",
      "options": [
        "Write-Ahead Log for replication",
        "Database index",
        "Connection pool",
        "Query cache"
      ],
      "answer": 0,
      "explanation": "Write-Ahead Log streamed to replicas."
    },
    {
      "question": "Database Replication — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "Database Replication — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "Database Replication — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "Database Replication — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
