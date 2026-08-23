export const sql_backup_restore = {
  "id": "sql-backup-restore",
  "title": "Backup & Restore",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "PostgreSQL backup tools: pg_dump (single database, custom/plain/tar format), pg_dumpall (all databases, globals).",
    "pg_dump creates consistent snapshots without blocking reads. For zero-downtime backups, use pg_basebackup or replication.",
    "pg_restore restores from custom/directory/tar format. psql runs plain SQL dumps. Point-in-time recovery (PITR) uses WAL archives.",
    "Backup strategies: full weekly + daily incremental + continuous WAL archiving for PITR."
  ],
  "laymanDefinition": "Database backups are like insurance for your data. pg_dump is like taking a photo of your database at a specific moment. WAL archiving is like keeping a detailed diary of every single change — allowing you to \"rewind\" to any point in time.",
  "deepDive": [
    {
      "heading": "pg_dump (Logical Backup)",
      "text": "pg_dump -d dbname > backup.sql — plain SQL. pg_dump -Fc -d dbname > backup.dump — custom format (compressed, restorable selectively). pg_dump -Fd -d dbname backup_dir — directory format (parallel)."
    },
    {
      "heading": "pg_dumpall",
      "text": "pg_dumpall > all.sql — dumps all databases plus global objects (roles, tablespaces). pg_dumpall --globals-only > globals.sql — roles and tablespaces only. Restore with psql -f all.sql postgres."
    },
    {
      "heading": "pg_restore",
      "text": "pg_restore -d dbname backup.dump — restore custom format. --clean — drop existing objects before restore. --jobs=n — parallel restore. -t table — restore single table. -l — list contents."
    },
    {
      "heading": "Physical Backup and PITR",
      "text": "pg_basebackup — takes physical copy of entire cluster. Enable WAL archiving: archive_mode=on, archive_command. Restore: configure restore_command, create recovery.signal. Replay WAL to desired point in time (PITR)."
    },
    {
      "heading": "Backup Automation",
      "text": "cron job for pg_dump. pgBackRest or barman for enterprise backup management. Test restores regularly. 3-2-1 rule: 3 copies, 2 media types, 1 offsite."
    }
  ],
  "interviewAnswer": "Regular backups and tested restore procedures are non-negotiable for production databases. Logical backups (pg_dump) are portable and human-readable. Physical backups (pg_basebackup + WAL) enable PITR and faster restores for large databases.",
  "interviewQuestions": [
    {
      "question": "What does pg_dump do?",
      "answer": "Creates a logical backup of a single PostgreSQL database. Can output plain SQL, custom, directory, or tar format."
    },
    {
      "question": "What is the difference between pg_dump and pg_dumpall?",
      "answer": "pg_dump backs up a single database. pg_dumpall backs up all databases and global objects (roles, tablespaces)."
    },
    {
      "question": "What is the -Fc format in pg_dump?",
      "answer": "Custom format — compressed, supports selective restore, parallel restore. Recommended for most backups."
    },
    {
      "question": "How do you restore a custom format dump?",
      "answer": "pg_restore -d dbname backup.dump. With --clean to drop existing objects first."
    },
    {
      "question": "What is PITR?",
      "answer": "Point-in-Time Recovery — the ability to restore a database to any moment in time using base backup + WAL archives."
    },
    {
      "question": "What is WAL archiving?",
      "answer": "Continuous archiving of Write-Ahead Log (WAL) files that record every database change. Required for PITR."
    },
    {
      "question": "How do you restore a plain SQL dump?",
      "answer": "psql -d dbname -f backup.sql. Plain SQL dumps are universal but can only restore the entire database."
    },
    {
      "question": "What is pg_basebackup?",
      "answer": "Creates a physical base backup of the entire PostgreSQL cluster. Used for replication and PITR setup."
    },
    {
      "question": "How often should you backup?",
      "answer": "Full backup weekly, incremental daily, continuous WAL archiving. Regular restore testing is more important than backup frequency."
    },
    {
      "question": "What is the 3-2-1 backup rule?",
      "answer": "3 copies of data, 2 different media types, 1 copy offsite."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Backup & Restore</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pg_dump</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logical backup</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pg_dumpall</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All databases</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pg_restore</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Restore dump</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WAL Archive</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Continuous</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">PITR</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Point-in-time</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backup & Restore</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logical and physical backups, WAL archiv</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ing, and PITR strategies.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Backup & Restore: pg_dump, pg_restore, WAL archivi</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ng, and Point-in-Time Recovery.</text></svg>",
  "codeExamples": [
    {
      "title": "pg_dump Examples",
      "useCase": "Common backup commands.",
      "code": "# Plain SQL format (portable)\npg_dump -h localhost -U postgres mydb > mydb_backup.sql\n\n# Custom format (compressed, selective restore)\npg_dump -Fc -h localhost -U postgres mydb > mydb_backup.dump\n\n# Directory format (parallel dump)\npg_dump -Fd -j 4 -h localhost -U postgres mydb -f mydb_backup_dir/",
      "description": "Different pg_dump formats for different needs."
    },
    {
      "title": "pg_restore Examples",
      "useCase": "Restoring backups.",
      "code": "# Restore entire custom dump\npg_restore -d mydb --clean mydb_backup.dump\n\n# Restore single table\npg_restore -d mydb -t employees mydb_backup.dump\n\n# List contents of a dump\npg_restore -l mydb_backup.dump\n\n# Parallel restore\npg_restore -d mydb -j 4 mydb_backup.dump",
      "description": "Selective restore and parallel restore with pg_restore."
    },
    {
      "title": "WAL Archiving Setup",
      "useCase": "Configure for PITR.",
      "code": "# postgresql.conf\nwal_level = replica\narchive_mode = on\narchive_command = 'cp %p /archive/%f'\n\n# Take base backup\npg_basebackup -D /backup/base -Ft -z\n\n# Recovery: create recovery.signal in data directory\n# and set restore_command = 'cp /archive/%f %p'\n# in postgresql.conf",
      "description": "WAL archiving setup for continuous backup and point-in-time recovery."
    },
    {
      "title": "Automated Backup Script",
      "useCase": "Simple cron backup routine.",
      "code": "#!/bin/bash\nBACKUP_DIR=\"/backups/$(date +%Y-%m-%d)\"\nmkdir -p $BACKUP_DIR\n\n# Full backup\npg_dump -Fc mydb > $BACKUP_DIR/mydb.dump\n\n# Globals only\npg_dumpall --globals-only > $BACKUP_DIR/globals.sql\n\n# Remove backups older than 30 days\nfind /backups/* -mtime +30 -exec rm -rf {} \\;",
      "description": "Automated daily backup script with rotation."
    },
    {
      "title": "Testing Restores",
      "useCase": "Verify backup integrity.",
      "code": "# Create a test database\ncreatedb test_restore\n\n# Restore into test database\npg_restore -d test_restore mydb_backup.dump\n\n# Verify data integrity\npsql -d test_restore -c \"SELECT COUNT(*) FROM employees;\"\npsql -d test_restore -c \"SELECT * FROM employees ORDER BY id DESC LIMIT 5;\"\n\n# Drop test database\ndropdb test_restore",
      "description": "Regular restore testing is essential — a backup is only as good as its last successful restore."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does pg_dump do?",
      "options": [
        "Backs up a single database",
        "Backs up all databases",
        "Restores a backup",
        "Creates a new database"
      ],
      "answer": 0,
      "explanation": "pg_dump creates a logical backup of one database."
    },
    {
      "question": "What format supports selective restore?",
      "options": [
        "Plain SQL",
        "Custom (-Fc)",
        "Tar",
        "All formats"
      ],
      "answer": 1,
      "explanation": "Custom format supports restoring individual tables selectively."
    },
    {
      "question": "What enables point-in-time recovery?",
      "options": [
        "pg_dump",
        "WAL archiving",
        "pg_dumpall",
        "Regular backups"
      ],
      "answer": 1,
      "explanation": "WAL archiving enables PITR by recording every change."
    },
    {
      "question": "What command creates custom format backup?",
      "options": [
        "pg_dump -Fc",
        "pg_dump -Fp",
        "pg_dumpall",
        "pg_basebackup"
      ],
      "answer": 0,
      "explanation": "pg_dump -Fc creates custom format backup."
    },
    {
      "question": "What does pg_restore --clean do?",
      "options": [
        "Removes old backups",
        "Drops existing objects before restore",
        "Cleans temporary files",
        "Optimizes database"
      ],
      "answer": 1,
      "explanation": "--clean drops existing database objects before restoring."
    },
    {
      "question": "How do you restore a plain SQL dump?",
      "options": [
        "pg_restore",
        "psql -f",
        "pg_dump -r",
        "psql -r"
      ],
      "answer": 1,
      "explanation": "Use psql -f backup.sql to restore a plain SQL dump."
    }
  ]
};
