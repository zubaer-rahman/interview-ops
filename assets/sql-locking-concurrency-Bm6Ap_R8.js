const e={id:"sql-locking-concurrency",title:"Locking & Concurrency",difficulty:"intermediate",estimatedMinutes:25,tldr:["PostgreSQL uses Multi-Version Concurrency Control (MVCC) — each transaction sees a snapshot of data as of when it started.","Row-level locks: FOR UPDATE (write lock), FOR NO KEY UPDATE, FOR SHARE (read lock), FOR KEY SHARE.","SKIP LOCKED skips rows locked by other transactions — useful for job queues. NOWAIT errors immediately if row is locked.","Deadlocks occur when two transactions wait for each other's locks. PostgreSQL detects and resolves them automatically."],laymanDefinition:"Locking is like a bathroom key at a restaurant. When you use the bathroom (update a row), you lock the door (row lock). Others wait. MVCC is like a window that shows the bathroom as it was when you entered — even if someone else changes it later, you still see the old state until you leave.",deepDive:[{heading:"MVCC (Multi-Version Concurrency Control)",text:"Each transaction sees a snapshot of data at its start time. Readers never block writers; writers never block readers. Old row versions remain visible to concurrent transactions that started before the change. Cleaned up by VACUUM."},{heading:"Row-Level Lock Types",text:"FOR UPDATE — strongest lock, prevents other transactions from updating, deleting, or locking the row. FOR NO KEY UPDATE — weaker than FOR UPDATE (allows other FOR KEY SHARE locks). FOR SHARE — read lock, prevents writes. FOR KEY SHARE — weakest, allows NO KEY UPDATE."},{heading:"SKIP LOCKED and NOWAIT",text:"SELECT ... FOR UPDATE SKIP LOCKED — skip rows locked by others, only return available rows. Perfect for job queues. SELECT ... FOR UPDATE NOWAIT — error immediately if any selected row is locked (no waiting)."},{heading:"Deadlock Detection",text:"PostgreSQL checks for deadlock cycles every deadlock_timeout (default 1 second). When detected, one transaction is aborted with ERROR: deadlock detected. The aborted transaction can be retried. Prevention: consistent lock ordering."},{heading:"Advisory Locks",text:"pg_advisory_lock(key) — application-level locks not tied to rows. pg_try_advisory_lock — non-blocking attempt. Useful for coordinating across transactions or applications. Session-level or transaction-level variants."}],interviewAnswer:"PostgreSQL's MVCC means SELECT queries never block writes and writes never block SELECTs. Row-level locking with FOR UPDATE is for explicit coordination. SKIP LOCKED is ideal for queue systems. Always design for the lowest lock level that ensures correctness.",interviewQuestions:[{question:"What is MVCC?",answer:"Multi-Version Concurrency Control — each transaction sees a consistent snapshot. Readers don\\'t block writers."},{question:"What does FOR UPDATE do?",answer:"Locks selected rows exclusively. Other transactions cannot UPDATE, DELETE, or lock the rows until the lock is released."},{question:"What is the difference between FOR UPDATE and FOR SHARE?",answer:"FOR UPDATE is an exclusive write lock. FOR SHARE is a shared read lock — other transactions can also read-lock but cannot write-lock."},{question:"What does SKIP LOCKED do?",answer:"Skips rows that are already locked by other transactions, returning only available rows."},{question:"What does NOWAIT do?",answer:"Returns an error immediately if any selected row is locked, instead of waiting for the lock to be released."},{question:"What causes a deadlock?",answer:"Two or more transactions each holding locks that the others need. PostgreSQL detects and resolves by aborting one transaction."},{question:"How do you prevent deadlocks?",answer:"Access tables in a consistent order across all transactions. Keep transactions short. Use the lowest lock level needed."},{question:"What is an advisory lock?",answer:"An application-level lock not tied to specific rows. Useful for coordinating access to shared resources across transactions."},{question:"Does SELECT block INSERT?",answer:"No. Under MVCC, SELECT reads a snapshot. INSERT adds new rows. Readers and writers do not block each other."},{question:"What is the default lock timeout?",answer:"PostgreSQL has no default lock timeout — it waits indefinitely. Set lock_timeout in postgresql.conf or per session."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Locking & Concurrency</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MVCC</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Snapshots</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">FOR UPDATE</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Write lock</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">FOR SHARE</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Read lock</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">SKIP LOCKED</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Queue</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deadlock</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Detection</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="220" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="270" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Locking & Concurrency</text><text x="270" y="173" text-anchor="middle" font-size="9" fill="#ddd">MVCC, row locks, SKIP LOCKED, and deadlo</text><text x="270" y="184" text-anchor="middle" font-size="9" fill="#ddd">ck handling in PostgreSQL.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Locking & Concurrency: MVCC, FOR UPDATE, SKIP LOCK</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ED, and deadlock prevention.</text></svg>',codeExamples:[{title:"FOR UPDATE with SKIP LOCKED",useCase:"Job queue worker.",code:`-- Worker picks next available job (queue pattern)
BEGIN;

SELECT id, payload FROM job_queue
WHERE status = 'pending'
ORDER BY created_at ASC
LIMIT 1
FOR UPDATE SKIP LOCKED;

-- If row found, update status
UPDATE job_queue SET status = 'processing',
  started_at = NOW()
WHERE id = <selected_id>;

COMMIT;

-- SKIP LOCKED ensures workers don't fight over the same job`,description:"Concurrent job queue with SKIP LOCKED — each worker gets a unique job."},{title:"Locking for Inventory",useCase:"Prevent overselling.",code:`BEGIN;

-- Lock the product row
SELECT quantity FROM products WHERE id = 10
FOR UPDATE;

-- Check stock
-- quantity = 5

-- Decrement safely
UPDATE products SET quantity = quantity - 1
WHERE id = 10 AND quantity > 0;

-- Insert order
INSERT INTO orders (product_id, quantity)
VALUES (10, 1);

COMMIT;`,description:"FOR UPDATE prevents two concurrent buyers from purchasing the last item."},{title:"NOWAIT for Immediate Feedback",useCase:"Fail fast if locked.",code:`-- Try to lock, error immediately if locked
SELECT * FROM employees WHERE id = 5
FOR UPDATE NOWAIT;

-- If another transaction holds a lock:
-- ERROR: could not obtain lock on row in relation "employees"
-- Application catches this and retries later`,description:"NOWAIT provides immediate feedback instead of waiting for potentially long-held locks."},{title:"Advisory Lock for Application Coordinatio",useCase:"Cross-session locking.",code:`-- Lock application resource
SELECT pg_advisory_lock(12345);

-- Critical section
UPDATE accounts SET balance = balance + 100 WHERE id = 1;

-- Release lock
SELECT pg_advisory_unlock(12345);

-- Non-blocking version:
SELECT pg_try_advisory_lock(12345);
-- Returns true if lock acquired, false if already locked`,description:"Advisory locks coordinate access across transactions without row-level locking."},{title:"Deadlock Example",useCase:"How deadlocks happen.",code:`-- Transaction A:
BEGIN;
UPDATE accounts SET balance = 0 WHERE id = 1;
-- (holds lock on account 1)

-- Transaction B:
BEGIN;
UPDATE accounts SET balance = 0 WHERE id = 2;
-- (holds lock on account 2)

-- Transaction A:
UPDATE accounts SET balance = 100 WHERE id = 2;
-- (waits for B's lock on account 2)

-- Transaction B:
UPDATE accounts SET balance = 100 WHERE id = 1;
-- (waits for A's lock on account 1)
-- DEADLOCK! PostgreSQL kills one transaction`,description:"Classic deadlock scenario. Prevention: always lock accounts in the same order."}],mcqQuestions:[{question:"What does MVCC stand for?",options:["Multi-Value Consistency Check","Multi-Version Concurrency Control","Multi-View Consistent Copy","Main Version Control Cache"],answer:1,explanation:"MVCC stands for Multi-Version Concurrency Control."},{question:"What does FOR UPDATE do?",options:["Read lock","Write (exclusive) lock","Table lock","Schema lock"],answer:1,explanation:"FOR UPDATE acquires an exclusive write lock on selected rows."},{question:"What does SKIP LOCKED skip?",options:["Locked tables","Locked rows","NULL values","Indexes"],answer:1,explanation:"SKIP LOCKED returns only unlocked rows, skipping those with locks."},{question:"How does PostgreSQL handle deadlocks?",options:["Ignores them","Detects and aborts one transaction","Waits forever","Rolls back both"],answer:1,explanation:"PostgreSQL detects deadlocks automatically and aborts one transaction."},{question:"What lock level allows concurrent reads?",options:["FOR UPDATE","FOR SHARE","FOR NO KEY UPDATE","All of the above"],answer:1,explanation:"FOR SHARE allows other transactions to also take FOR SHARE locks."},{question:"What type of lock is not tied to rows?",options:["Row lock","Table lock","Advisory lock","Page lock"],answer:2,explanation:"Advisory locks are application-level locks not associated with specific rows."}]};export{e as sql_locking_concurrency};
