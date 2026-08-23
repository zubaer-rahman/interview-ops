export const sd_distributed_transactions = {
  "id": "sd-distributed-transactions",
  "title": "Distributed Transactions",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Distributed transactions coordinate operations across multiple databases, services, or queues to maintain consistency.",
    "Two approaches: ACID (traditional — 2PC, XA) and BASE/BEST (modern — Saga, eventual consistency). ACID is hard in distributed systems. Saga is more practical.",
    "2PC (Two-Phase Commit): Coordinator asks all participants to prepare (phase 1) → if all yes, commit (phase 2). Blocking protocol — if coordinator fails, participants wait (blocked). Not suitable for long-running transactions.",
    "Saga: sequence of local transactions with compensating actions. If step fails, run compensating actions for all completed steps. Choreography (events) or Orchestration (coordinator). Eventual consistency.",
    "Idempotency: each operation must be safe to retry. Exactly-once processing requires idempotent operations + deduplication."
  ],
  "laymanDefinition": "Distributed transactions are like online shopping where ordering, payment, and shipping are handled by different companies. Saga = order goes through, if payment fails, cancel order (compensation). 2PC = all companies must commit before any proceeds — if phone line drops, everyone waits frozen. Saga is like booking a trip: book flight → if hotel fails → cancel flight.",
  "deepDive": [
    {
      "heading": "Two-Phase Commit (2PC)",
      "text": "Phase 1 (Prepare): coordinator asks all participants to prepare — can you commit? Participants write prepare log, respond yes/no. Phase 2 (Commit): if all yes → coordinator sends commit. If any no → coordinator sends abort. Blocking: participant waits for coordinator decision after prepare. Coordinator failure = blocked resources."
    },
    {
      "heading": "Saga Pattern",
      "text": "Sequence of transactions T1, T2, ..., Tn with compensations C1, C2, ..., Cn. If Tk fails, run Ck-1, ..., C1. Choreography: each service publishes events triggering next step. Orchestration: Saga coordinator tells services what to do. Choreography is simpler (no coordinator), orchestrator has coordination logic in one place."
    },
    {
      "heading": "Idempotency and Deduplication",
      "text": "Idempotent operation: performing it multiple times has same effect as once. Implementation: idempotency key (client-generated unique key). Server checks if key already processed → skip. Deduplication store: Redis set with TTL, DB unique constraint, in-memory cache. Essential for at-least-once delivery."
    },
    {
      "heading": "Compensating Transactions",
      "text": "Each step in Saga must have a compensating action that semantically undoes it. Examples: Payment step → compensation is refund. Order step → compensation is cancel order. Email step → compensation is... can\\'t unsend email (don\\'t make email a Saga step). Compensations must be idempotent too."
    }
  ],
  "interviewAnswer": "Use 2PC only if strong consistency is mandatory and participants are within same domain (not across organizations). Use Saga for most distributed transactions — eventual consistency is acceptable for most business processes. Always design idempotent operations. Test Saga failure scenarios (chaos engineering).",
  "interviewQuestions": [
    {
      "question": "What is 2PC?",
      "answer": "Two-Phase Commit — prepare phase + commit/abort phase. Blocking protocol."
    },
    {
      "question": "What is the blocking problem in 2PC?",
      "answer": "If coordinator fails after prepare, participants wait indefinitely (blocked)."
    },
    {
      "question": "What is a Saga?",
      "answer": "Sequence of local transactions with compensating actions on failure."
    },
    {
      "question": "Choreography vs Orchestration Saga?",
      "answer": "Choreography: events between services. Orchestration: central coordinator."
    },
    {
      "question": "What is a compensating transaction?",
      "answer": "Action that semantically undoes a previous transaction (e.g., cancel order)."
    },
    {
      "question": "Why idempotency?",
      "answer": "At-least-once delivery means same message may be processed multiple times. Idempotency prevents side effects."
    },
    {
      "question": "What is exactly-once processing?",
      "answer": "Each operation processed exactly once. Requires idempotent producer + consumer + deduplication."
    },
    {
      "question": "What is XA?",
      "answer": "Distributed transaction standard for coordinating DBs, queues, and other resources via 2PC."
    },
    {
      "question": "What is the BASE acronym?",
      "answer": "Basically Available, Soft state, Eventual consistency — alternative to ACID for distributed systems."
    },
    {
      "question": "What is Outbox Pattern?",
      "answer": "Write event to local DB within same transaction as business operation. Separate process publishes events from outbox. Ensures atomicity + reliable publication."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Distributed Transactions</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Request</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Saga Coordinator</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Orchestrator</text><line x1=\"200\" y1=\"77\" x2=\"140\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"50\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 1</text><text x=\"50\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Order</text><rect x=\"100\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"140\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 2</text><text x=\"140\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Payment</text><rect x=\"190\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 3</text><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Shipping</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compensation</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rollback</text><rect x=\"150\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"200\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Event Bus</text><text x=\"200\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Choreography</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Distributed Transactions</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">2PC (blocking) vs Saga (eventual consistency). Idempotency, compensating transactions</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, outbox pattern.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Distributed Transactions: 2PC (strong, blocking) v</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s Saga (eventual, compensating). Idempotent operat</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ions.</text></svg>",
  "codeExamples": [
    {
      "title": "Saga Orchestration Pattern",
      "useCase": "Coordinator manages steps.",
      "code": "class SagaOrchestrator {\n  async createOrder(data) {\n    const sagaId = crypto.randomUUID();\n    const steps = [\n      { name: \"createOrder\", action: () => orderService.create(data), compensate: () => orderService.cancel(data.id) },\n      { name: \"reservePayment\", action: () => paymentService.reserve(data.amount, data.userId), compensate: () => paymentService.release(data.amount, data.userId) },\n      { name: \"updateInventory\", action: () => inventoryService.reserve(data.items), compensate: () => inventoryService.release(data.items) },\n      { name: \"sendConfirmation\", action: () => emailService.send(data.userId, \"Order confirmed\"), compensate: () => {} },\n    ];\n    const executed = [];\n    for (const step of steps) {\n      try {\n        await step.action();\n        executed.push(step);\n        await sagaStore.append(sagaId, { step: step.name, status: \"completed\" });\n      } catch (err) {\n        // Compensate all completed steps in reverse order\n        for (const done of executed.reverse()) {\n          await done.compensate();\n          await sagaStore.append(sagaId, { step: done.name, status: \"compensated\" });\n        }\n        throw new Error(\"Saga failed — compensated\");\n      }\n    }\n  }\n}",
      "description": "Saga orchestration with compensating actions on failure."
    },
    {
      "title": "Outbox Pattern",
      "useCase": "Reliable event publication.",
      "code": "-- Step 1: Write business data + event in same DB transaction\nBEGIN;\nINSERT INTO orders (id, user_id, amount, status) VALUES (123, 42, 99.99, \"created\");\nINSERT INTO outbox (id, aggregate_type, aggregate_id, event_type, payload)\n  VALUES (gen_random_uuid(), \"order\", 123, \"OrderCreated\", '{\"orderId\":123,\"userId\":42,\"amount\":99.99}');\nCOMMIT;\n-- Step 2: Background process publishes outbox events\nconst rows = await db.query(\"SELECT * FROM outbox ORDER BY id LIMIT 100\");\nfor (const row of rows) {\n  try {\n    await kafkaProducer.send({ topic: \"order-events\", messages: [{ value: row.payload }] });\n    await db.query(\"DELETE FROM outbox WHERE id=$1\", [row.id]);\n  } catch (err) {\n    // retry on next poll\n  }\n}",
      "description": "Outbox pattern — write event to DB within same transaction, publish separately."
    },
    {
      "title": "Idempotency with Idempotency Key",
      "useCase": "Prevent duplicate processing.",
      "code": "// Client sends idempotency key\nasync function createPayment(amount, idempotencyKey) {\n  const response = await fetch(\"/api/payments\", {\n    method: \"POST\",\n    body: JSON.stringify({ amount }),\n    headers: { \"Idempotency-Key\": idempotencyKey },\n  });\n  return response.json();\n}\n// Server checks idempotency\nasync function handlePayment(req, res) {\n  const key = req.headers[\"idempotency-key\"];\n  // Check if already processed\n  const existing = await redis.get(\"idempotent:\" + key);\n  if (existing) return res.json(JSON.parse(existing)); // return cached result\n  // Process payment\n  const result = await processPayment(req.body);\n  // Cache result with TTL (e.g., 24h)\n  await redis.setex(\"idempotent:\" + key, 86400, JSON.stringify(result));\n  res.json(result);\n}",
      "description": "Idempotency key pattern — client retry-safe API."
    },
    {
      "title": "Two-Phase Commit (Conceptual)",
      "useCase": "XA transaction flow.",
      "code": "// Conceptual 2PC flow\nPhase 1 — PREPARE:\nCoordinator → Participant A: PREPARE\nCoordinator → Participant B: PREPARE\nParticipant A → Coordinator: YES (or NO)\nParticipant B → Coordinator: YES (or NO)\nPhase 2 — COMMIT/ABORT:\nIf ALL YES:\n  Coordinator → All: COMMIT\n  Participants → Coordinator: ACK\nIf ANY NO:\n  Coordinator → All: ABORT\n  Participants → Coordinator: ACK\n// Blocking problem:\n// If coordinator crashes after PREPARE responses,\n// participants hold locks waiting for decision.\n// Recovery: coordinator must log decisions to durable storage.",
      "description": "Two-Phase Commit flow — prepare then commit or abort."
    }
  ],
  "mcqQuestions": [
    {
      "question": "2PC is what type of protocol?",
      "options": [
        "Non-blocking",
        "Blocking",
        "Eventual",
        "Asynchronous"
      ],
      "answer": 1,
      "explanation": "2PC is blocking — participants may wait indefinitely."
    },
    {
      "question": "Saga pattern provides?",
      "options": [
        "Strong consistency",
        "Eventual consistency",
        "No consistency",
        "Immediate consistency"
      ],
      "answer": 1,
      "explanation": "Saga provides eventual consistency with compensation."
    },
    {
      "question": "Compensating transaction?",
      "options": [
        "Retry failed step",
        "Undo completed steps",
        "Log error",
        "Ignore failure"
      ],
      "answer": 1,
      "explanation": "Compensation semantically undoes a completed step."
    },
    {
      "question": "Idempotency key ensures?",
      "options": [
        "Unique requests",
        "Same result on retry",
        "Fast processing",
        "Ordered processing"
      ],
      "answer": 1,
      "explanation": "Idempotent operations produce same result when retried."
    },
    {
      "question": "Outbox pattern solves?",
      "options": [
        "Slow queries",
        "Atomic DB write + event publish",
        "Data loss",
        "Network issues"
      ],
      "answer": 1,
      "explanation": "Ensures DB write and event publication are atomic."
    },
    {
      "question": "Saga orchestration uses?",
      "options": [
        "Events between services",
        "Central coordinator",
        "Database replication",
        "Load balancer"
      ],
      "answer": 1,
      "explanation": "Orchestrator coordinates all Saga steps."
    },
    {
      "question": "Distributed Transactions — What reduces errors most?",
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
      "question": "Distributed Transactions — What improves speed?",
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
      "question": "Distributed Transactions — What is key for monitoring?",
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
      "question": "Distributed Transactions — What ensures quality?",
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
