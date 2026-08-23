export const sql_transactions = {
  "id": "sql-transactions",
  "title": "Transactions & ACID",
  "difficulty": "intermediate",
  "estimatedMinutes": 30,
  "tldr": [
    "A transaction is a unit of work that is executed as a whole — all steps succeed or all are rolled back.",
    "ACID: Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere), Durability (committed data persists).",
    "BEGIN / START TRANSACTION starts a transaction. COMMIT saves changes. ROLLBACK undoes changes since BEGIN.",
    "PostgreSQL uses auto-commit by default. MySQL uses auto-commit by default. Both support explicit transaction control."
  ],
  "laymanDefinition": "A transaction is like a bank transfer: money leaves account A and arrives at account B. If the system crashes after step 1, the entire transaction rolls back — account A gets the money back. Both steps succeed together or fail together.",
  "deepDive": [
    {
      "heading": "Transaction Control Statements",
      "text": "BEGIN / START TRANSACTION — begin. COMMIT — save all changes since BEGIN. ROLLBACK — undo all changes since BEGIN. SAVEPOINT sp_name — set a savepoint within a transaction. ROLLBACK TO SAVEPOINT — roll back to savepoint. RELEASE SAVEPOINT — discard savepoint."
    },
    {
      "heading": "Isolation Levels (ANSI Standard)",
      "text": "READ UNCOMMITTED: dirty reads allowed. READ COMMITTED: no dirty reads (PostgreSQL default). REPEATABLE READ: no dirty/non-repeatable reads. SERIALIZABLE: fully isolated (highest level, lowest concurrency)."
    },
    {
      "heading": "PostgreSQL Isolation Behavior",
      "text": "Default: READ COMMITTED. REPEATABLE READ prevents non-repeatable reads but allows phantom reads. SERIALIZABLE uses SSI (Serializable Snapshot Isolation). PostgreSQL does not support READ UNCOMMITTED (upgrades to READ COMMITTED)."
    },
    {
      "heading": "Lost Updates and Race Conditions",
      "text": "Lost update: two transactions read same value, both modify it, last commit overwrites first. Solution: SELECT ... FOR UPDATE (row-level locking). Optimistic locking: version column with increment on update."
    },
    {
      "heading": "Deadlocks",
      "text": "Transaction A locks row 1, needs row 2. Transaction B locks row 2, needs row 1. Neither can proceed. Database detects deadlocks and kills one transaction. Prevention: consistent lock ordering in application code."
    }
  ],
  "interviewAnswer": "Transaction management is critical for data integrity in multi-user systems. Understanding isolation levels helps balance consistency and performance. Always use transactions for multi-step operations that must be atomic.",
  "interviewQuestions": [
    {
      "question": "What is a transaction?",
      "answer": "A unit of work that is atomic — all changes succeed (COMMIT) or all are undone (ROLLBACK)."
    },
    {
      "question": "What does ACID stand for?",
      "answer": "Atomicity, Consistency, Isolation, Durability. The four properties of reliable database transactions."
    },
    {
      "question": "What does COMMIT do?",
      "answer": "Saves all changes made in the current transaction to the database permanently."
    },
    {
      "question": "What does ROLLBACK do?",
      "answer": "Undoes all changes made since the transaction began (or since a savepoint)."
    },
    {
      "question": "What is a dirty read?",
      "answer": "Reading uncommitted data from another transaction. Prevented by READ COMMITTED isolation level."
    },
    {
      "question": "What is the default isolation level in PostgreSQL?",
      "answer": "READ COMMITTED. Prevents dirty reads but allows non-repeatable reads."
    },
    {
      "question": "What is the highest isolation level?",
      "answer": "SERIALIZABLE. Ensures complete isolation but has the lowest concurrency."
    },
    {
      "question": "What is SELECT ... FOR UPDATE?",
      "answer": "Locks the selected rows for update, preventing other transactions from modifying them until the transaction ends."
    },
    {
      "question": "What is a deadlock?",
      "answer": "Two or more transactions waiting for each other\\'s locks. The database detects and resolves by aborting one transaction."
    },
    {
      "question": "How do you prevent deadlocks?",
      "answer": "Access resources in a consistent order across all transactions. Keep transactions short. Use appropriate isolation levels."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Transactions & ACID</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">BEGIN</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Start TX</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">COMMIT</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Save</text><rect x=\"150\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"200\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ROLLBACK</text><text x=\"200\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Undo</text><rect x=\"150\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SAVEPOINT</text><text x=\"200\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Partial undo</text><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"78\" x2=\"280\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"108\" x2=\"280\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"290\" y=\"35\" width=\"190\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ACID Properties</text><text x=\"385\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Atomicity, Consistency, Isolation,</text><text x=\"385\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Durability — reliable transaction</text><text x=\"385\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s.</text><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Transactions: ACID-compliant units of work for rel</text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">iable data operations.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Transaction",
      "useCase": "Money transfer between accounts.",
      "code": "BEGIN;\n\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- If both succeed:\nCOMMIT;\n\n-- If anything fails:\nROLLBACK;",
      "description": "Atomic transfer — both updates commit or both roll back."
    },
    {
      "title": "Savepoints",
      "useCase": "Partial rollback within transaction.",
      "code": "BEGIN;\nINSERT INTO audit_log (action) VALUES ('step 1');\nSAVEPOINT sp1;\nINSERT INTO audit_log (action) VALUES ('step 2');\n\n-- Oops, step 2 was wrong:\nROLLBACK TO SAVEPOINT sp1;\nINSERT INTO audit_log (action) VALUES ('step 2 corrected');\nCOMMIT;",
      "description": "Savepoints allow rolling back part of a transaction without aborting entirely."
    },
    {
      "title": "Row-Level Locking",
      "useCase": "Prevent race conditions.",
      "code": "BEGIN;\n\n-- Lock the inventory row:\nSELECT quantity FROM products WHERE id = 10\nFOR UPDATE;\n\n-- Check and update safely:\nUPDATE products SET quantity = quantity - 1\nWHERE id = 10 AND quantity > 0;\n\nCOMMIT;",
      "description": "SELECT FOR UPDATE prevents lost updates in concurrent environments."
    },
    {
      "title": "Isolation Level Demonstration",
      "useCase": "Setting isolation level.",
      "code": "-- Set isolation for current transaction:\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nSELECT SUM(balance) FROM accounts WHERE user_id = 5;\nUPDATE accounts SET balance = balance * 1.05 WHERE user_id = 5;\n\nCOMMIT;",
      "description": "SERIALIZABLE isolation ensures the SELECT result is consistent with the UPDATE."
    },
    {
      "title": "Deadlock Detection",
      "useCase": "PostgreSQL deadlock handling.",
      "code": "-- Session 1:\nBEGIN; UPDATE accounts SET balance = 0 WHERE id = 1;\n\n-- Session 2:\nBEGIN; UPDATE accounts SET balance = 0 WHERE id = 2;\n\n-- Session 1:\nUPDATE accounts SET balance = 100 WHERE id = 2; -- waits\n\n-- Session 2:\nUPDATE accounts SET balance = 100 WHERE id = 1;\n-- One session gets: ERROR: deadlock detected\n-- The other session succeeds",
      "description": "PostgreSQL automatically detects and resolves deadlocks."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does COMMIT do?",
      "options": [
        "Undoes changes",
        "Saves changes permanently",
        "Starts a transaction",
        "Locks tables"
      ],
      "answer": 1,
      "explanation": "COMMIT permanently saves all changes in the current transaction."
    },
    {
      "question": "What does ACID stand for?",
      "options": [
        "Auto-Commit Isolation Durability",
        "Atomicity Consistency Isolation Durability",
        "Atomic Consistency Isolation Data",
        "All Committed Integrity Data"
      ],
      "answer": 1,
      "explanation": "ACID: Atomicity, Consistency, Isolation, Durability."
    },
    {
      "question": "What is the default isolation in PostgreSQL?",
      "options": [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
      ],
      "answer": 1,
      "explanation": "READ COMMITTED is the PostgreSQL default."
    },
    {
      "question": "What prevents dirty reads?",
      "options": [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "READ COMMITTED and higher prevent dirty reads."
    },
    {
      "question": "What does SELECT FOR UPDATE do?",
      "options": [
        "Locks selected rows",
        "Creates a view",
        "Updates selected rows",
        "Deletes old data"
      ],
      "answer": 0,
      "explanation": "SELECT FOR UPDATE locks rows for update, preventing concurrent modifications."
    },
    {
      "question": "What is a deadlock?",
      "options": [
        "Slow query",
        "Two TX waiting on each other",
        "Locked table",
        "Out of memory"
      ],
      "answer": 1,
      "explanation": "Deadlock occurs when transactions wait for locks held by each other."
    }
  ]
};
