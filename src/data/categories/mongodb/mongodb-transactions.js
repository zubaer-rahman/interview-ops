export const mongodb_transactions = {
  "id": "mongodb-transactions",
  "title": "Transactions",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Transactions allow multiple read and write operations to be executed atomically across multiple documents and collections.",
    "Multi-document transactions are available in replica sets (MongoDB 4.0+) and sharded clusters (MongoDB 4.2+).",
    "Transactions follow similar semantics to relational database transactions: ACID (Atomicity, Consistency, Isolation, Durability).",
    "Use transactions for financial operations, inventory management, and any multi-step operations requiring atomicity."
  ],
  "laymanDefinition": "A transaction is like a bank transfer. Either all steps happen (money leaves account A AND arrives in account B), or none of them happen. You never want half a transfer.",
  "deepDive": [
    {
      "heading": "ACID Properties",
      "text": "Atomicity: all operations commit or none. Consistency: data remains valid. Isolation: concurrent transactions don\\'t interfere (snapshot isolation). Durability: committed changes persist. MongoDB provides document-level atomicity by default; transactions extend this to multi-document operations."
    },
    {
      "heading": "Transaction API",
      "text": "Session-based: const session = client.startSession(); session.startTransaction(); ... operations use session parameter ... session.commitTransaction() or session.abortTransaction(). Always wrap in try/catch/finally with session.endSession()."
    },
    {
      "heading": "Transaction Limitations",
      "text": "Max 1000 write operations per transaction. Max 60 seconds idle time. Max 15 minutes total duration. Operations must target existing collections. Index creation not allowed. Not all DDL operations permitted."
    },
    {
      "heading": "Retry Logic",
      "text": "Transactions may fail with transient errors (WriteConflict, LockTimeout). Implement retry logic: catch TransientTransactionError and retry the entire transaction. Exponential backoff recommended. MongoClient has auto-retry for certain errors."
    },
    {
      "heading": "When to Use Transactions",
      "text": "Financial transfers (debit + credit must both succeed). Order fulfillment (reserve stock + create order). Multi-collection updates that must be atomic. Inventory management. Avoid transactions for single-document operations (already atomic)."
    }
  ],
  "interviewAnswer": "Transactions bring ACID guarantees to multi-document operations in MongoDB. Use them when you need atomicity across documents, but rely on document-level atomicity for simpler cases.",
  "interviewQuestions": [
    {
      "question": "What is a MongoDB transaction?",
      "answer": "A set of operations executed atomically across multiple documents and collections. All succeed or all fail (rollback)."
    },
    {
      "question": "What ACID properties do transactions provide?",
      "answer": "Atomicity (all-or-nothing), Consistency (valid state), Isolation (snapshot isolation), Durability (committed changes persist)."
    },
    {
      "question": "When were transactions introduced?",
      "answer": "Multi-document transactions: MongoDB 4.0 (replica sets), MongoDB 4.2 (sharded clusters)."
    },
    {
      "question": "How do you start a transaction?",
      "answer": "Create a session, call startTransaction(), perform operations with session parameter, then commitTransaction() or abortTransaction()."
    },
    {
      "question": "What is the max operations per transaction?",
      "answer": "1000 write operations. Read operations are not counted toward this limit."
    },
    {
      "question": "What are transient transaction errors?",
      "answer": "Temporary errors like WriteConflict or LockTimeout. Retry the entire transaction with exponential backoff."
    },
    {
      "question": "When should you NOT use transactions?",
      "answer": "Single-document operations (already atomic). Batch operations where partial success is acceptable. Long-running transactions (max 60s idle)."
    },
    {
      "question": "What is the idle timeout?",
      "answer": "60 seconds. If a transaction is idle for 60 seconds, it is automatically aborted."
    },
    {
      "question": "How does isolation work?",
      "answer": "Snapshot isolation: reads within a transaction see a consistent snapshot of data as of the transaction start time."
    },
    {
      "question": "Can transactions create collections?",
      "answer": "No. Target collections must exist before the transaction starts. Create collections outside transactions."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Transactions</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Session Start</text><text x=\"80\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">startSession()</text><line x1=\"150\" y1=\"55\" x2=\"180\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Begin</text><text x=\"260\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">startTransaction()</text><line x1=\"190\" y1=\"70\" x2=\"190\" y2=\"90\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"95\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"260\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Operations</text><text x=\"260\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reads + Writes</text><line x1=\"330\" y1=\"78\" x2=\"370\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"380\" y=\"65\" width=\"100\" height=\"50\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"430\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Commit/Abort</text><text x=\"430\" y=\"87\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">commitTransaction(</text><text x=\"430\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">) / abortTransacti</text><text x=\"430\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">on()</text><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Transactions: ACID guarantees for multi-document o</text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">perations.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Transaction",
      "useCase": "Transfer money between accounts.",
      "code": "const session = client.startSession();\ntry {\n  session.startTransaction();\n  await db.collection('accounts').updateOne({ _id: fromId }, { $inc: { balance: -100 } }, { session });\n  await db.collection('accounts').updateOne({ _id: toId }, { $inc: { balance: 100 } }, { session });\n  await session.commitTransaction();\n} catch (err) {\n  await session.abortTransaction();\n  console.log('Transaction aborted:', err);\n} finally {\n  await session.endSession();\n}",
      "description": "Atomic fund transfer: both accounts updated or neither."
    },
    {
      "title": "Transaction with Retry",
      "useCase": "Handle transient errors.",
      "code": "async function runWithRetry(fn) {\n  for (let attempt = 0; attempt < 3; attempt++) {\n    try { return await fn(); }\n    catch (err) { if (err.errorLabels?.includes('TransientTransactionError')) continue; throw err; }\n  }\n}\nawait runWithRetry(() => transferFunds(fromId, toId, 100));",
      "description": "Retries transaction on transient errors up to 3 times."
    },
    {
      "title": "Snapshot Read",
      "useCase": "Consistent reads in transaction.",
      "code": "const session = client.startSession();\nsession.startTransaction({ readConcern: { level: \"snapshot\" }, writeConcern: { w: \"majority\" } });\nconst balance = await db.collection('accounts').findOne({ _id: accountId }, { session });\nconsole.log('Balance at transaction start:', balance);\nawait session.commitTransaction();",
      "description": "Snapshot read provides consistent view from transaction start."
    },
    {
      "title": "Abort on Error",
      "useCase": "Rollback on validation failure.",
      "code": "const session = client.startSession();\nsession.startTransaction();\ntry {\n  await db.collection('orders').insertOne(order, { session });\n  await db.collection('inventory').updateOne({ sku }, { $inc: { stock: -1 } }, { session });\n  if (newStock < 0) throw new Error('Insufficient stock');\n  await session.commitTransaction();\n} catch (err) {\n  await session.abortTransaction();\n}",
      "description": "Aborts transaction if business rule (stock check) fails."
    },
    {
      "title": "Transactional Output",
      "useCase": "Multiple outputs atomic.",
      "code": "const session = client.startSession();\nsession.startTransaction();\nconst { insertedId: orderId } = await db.collection('orders').insertOne(orderData, { session });\nawait db.collection('audit').insertOne({ action: \"order_created\", orderId }, { session });\nawait db.collection('metrics').updateOne({ date }, { $inc: { orderCount: 1 } }, { upsert: true, session });\nawait session.commitTransaction();",
      "description": "Creates order, audit entry, and updates metrics atomically."
    }
  ],
  "mcqQuestions": [
    {
      "question": "When were transactions added?",
      "options": [
        "MongoDB 3.6",
        "MongoDB 4.0",
        "MongoDB 4.4",
        "MongoDB 5.0"
      ],
      "answer": 1,
      "explanation": "Multi-document transactions in MongoDB 4.0 (replica sets)."
    },
    {
      "question": "Max operations per transaction?",
      "options": [
        "500",
        "1000",
        "5000",
        "10000"
      ],
      "answer": 1,
      "explanation": "Max 1000 write operations per transaction."
    },
    {
      "question": "What happens after 60s idle?",
      "options": [
        "Paused",
        "Auto-aborted",
        "Continued",
        "Warned"
      ],
      "answer": 1,
      "explanation": "Transaction auto-aborted after 60 seconds idle."
    },
    {
      "question": "What isolation level is used?",
      "options": [
        "Read uncommitted",
        "Snapshot",
        "Serializable",
        "Read committed"
      ],
      "answer": 1,
      "explanation": "Snapshot isolation for consistent reads."
    },
    {
      "question": "Can transactions create collections?",
      "options": [
        "Yes",
        "No",
        "Only with admin",
        "Only in sharded"
      ],
      "answer": 1,
      "explanation": "Target collections must pre-exist."
    },
    {
      "question": "What error label triggers retry?",
      "options": [
        "NetworkError",
        "TransientTransactionError",
        "DuplicateKey",
        "Timeout"
      ],
      "answer": 1,
      "explanation": "TransientTransactionError indicates retryable error."
    }
  ]
};
