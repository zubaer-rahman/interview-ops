const e={id:"sd-event-driven",title:"Event-Driven Architecture",difficulty:"advanced",estimatedMinutes:20,tldr:["Event-driven architecture (EDA) is a design pattern where services communicate by producing and consuming events — state changes published as messages.","Core components: Event Producers (publish events), Event Bus/Broker (Kafka, EventBridge), Event Consumers (subscribe and react), Event Store (persist event history).","Benefits: loose coupling, scalability, real-time processing, audit trail (event store), extensibility (add consumers without modifying producers).","Patterns: Event Notification (simple pub/sub), Event-Carried State Transfer (event carries full data), Event Sourcing (event store as source of truth), CQRS (separate read/write models)."],laymanDefinition:"Event-driven architecture is like a city's public announcement system. When something happens (sports game ends → fans leave), an announcement (event) goes out. Multiple systems react: traffic lights adjust, subway adds trains, bars prepare for crowds. The game organizers (producer) don't need to know about traffic, transit, or bars — they just announce. New listeners can react without contacting the stadium.",deepDive:[{heading:"Event-Driven vs Request-Driven",text:"Request-driven: service A calls service B synchronously (HTTP/gRPC). Tight coupling, A waits for B, cascading failures. Event-driven: A publishes event, B consumes asynchronously. A doesn\\'t know about B. Loose coupling, better resilience, but eventual consistency. Choose based on consistency requirements."},{heading:"Event Sourcing",text:"Store all state changes as an append-only event log. Current state = fold/reduce over all events. Benefits: complete audit trail, temporal queries (state at any point in time), event replay, debugging. Drawbacks: event schema evolution, query complexity (need snapshots), learning curve."},{heading:"CQRS (Command Query Responsibility Segregation)",text:"Separate models for writes (commands) and reads (queries). Write model: validates and persists events (event store). Read model: denormalized projections optimized for queries (materialized views, Elasticsearch). Sync via events. Benefits: optimized read/write independently, scale separately."},{heading:"Event Processing Patterns",text:"Simple: consumer processes event immediately. Windowed: aggregate events over time (count per min). Pattern matching: detect sequences (fraud detection). Enrichment: combine with other data. Split: fan-out to multiple consumers. Filter: route based on event attributes."}],interviewAnswer:"Use EDA for loosely coupled, scalable systems. Prefer Kafka for high-throughput event streaming. Event sourcing with CQRS for systems needing audit trails (financial, compliance). Be aware of eventual consistency — not suitable for transactions requiring immediate consistency. Monitor event processing lag.",interviewQuestions:[{question:"What is event-driven architecture?",answer:"Services communicate via events — producers publish, consumers react. Loose coupling."},{question:"Event-driven vs request-driven?",answer:"EDA: async, decoupled, eventual consistency. Request-driven: sync, coupled, strong consistency."},{question:"What is event sourcing?",answer:"Store all state changes as append-only event log — current state from replaying events."},{question:"What is CQRS?",answer:"Separate read and write models — commands (writes) vs queries (reads)."},{question:"What is an event bus?",answer:"The backbone/broker connecting producers and consumers (Kafka, EventBridge)."},{question:"What are benefits of EDA?",answer:"Loose coupling, scalability, real-time processing, audit trail, extensibility."},{question:"What are challenges?",answer:"Eventual consistency, debugging complexity, event schema evolution, duplicate events."},{question:"What is an idempotent consumer?",answer:"Processing same event twice has same effect. Critical for at-least-once delivery."},{question:"What is event replay?",answer:"Re-processing historical events to rebuild state or debug."},{question:"What is exactly-once processing?",answer:"Each event processed exactly once. Requires idempotent producer + consumer + transactional broker."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Event-Driven Architecture</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Producer</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Service A</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Event Bus</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Kafka/EventBridge</text><line x1="200" y1="77" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="80" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="50" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Consumer</text><text x="50" y="111" text-anchor="middle" font-size="9" fill="#ddd">Service X</text><rect x="100" y="85" width="80" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="140" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Consumer</text><text x="140" y="111" text-anchor="middle" font-size="9" fill="#ddd">Service Y</text><rect x="190" y="85" width="80" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="230" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Consumer</text><text x="230" y="111" text-anchor="middle" font-size="9" fill="#ddd">Service Z</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Event Store</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Persist all events</text><rect x="150" y="125" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="200" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Event Stream</text><text x="200" y="151" text-anchor="middle" font-size="9" fill="#ddd">Ordered log</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Event-Driven</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Producers → Event Bus → Consumers. Loose coupling, eventual consistency. Event Sourci</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">ng + CQRS.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Event-Driven: Producers publish events to bus. Con</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">sumers react. Loose coupling, eventual consistency</text><text x="240" y="279" font-size="9" fill="#666" text-anchor="middle">, event sourcing.</text></svg>',codeExamples:[{title:"Event Producer and Consumer",useCase:"Kafka event publishing.",code:`// Producer — publishes order events
class OrderService {
  async createOrder(data) {
    const order = await db.query("INSERT INTO orders ... RETURNING *");
    const event = {
      eventType: "OrderCreated",
      timestamp: new Date().toISOString(),
      data: { orderId: order.id, userId: data.userId, amount: data.total, items: data.items },
      metadata: { version: 1, correlationId: crypto.randomUUID() },
    };
    await kafkaProducer.send({ topic: "order-events", messages: [{ key: String(order.id), value: JSON.stringify(event) }] });
    return order;
  }
}
// Consumer — reacts to order events
const consumer = kafka.consumer({ groupId: "inventory-group" });
await consumer.run({ eachMessage: async ({ message }) => {
  const event = JSON.parse(message.value.toString());
  if (event.eventType === "OrderCreated") {
    await inventoryService.reserveStock(event.data.items);
  }
}});`,description:"Event producer and consumer with Kafka — loose coupling through events."},{title:"Event Sourcing with PostgreSQL",useCase:"Events as source of truth.",code:`-- Events table
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  aggregate_type VARCHAR(50) NOT NULL,  -- "order"
  aggregate_id VARCHAR(50) NOT NULL,    -- "order-123"
  event_type VARCHAR(50) NOT NULL,      -- "OrderCreated"
  event_data JSONB NOT NULL,
  version INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(aggregate_type, aggregate_id, version)
);
-- Append event
INSERT INTO events (aggregate_type, aggregate_id, event_type, event_data, version)
VALUES ("order", "order-123", "OrderCreated", '{"userId":42,"amount":99.99}', 1);
-- Rebuild state
SELECT event_data FROM events WHERE aggregate_type="order" AND aggregate_id="order-123" ORDER BY version;`,description:"Event sourcing with PostgreSQL — events as source of truth."},{title:"CQRS with Separate Read/Write",useCase:"Separate read model.",code:`// Write model (Command)
class OrderCommandHandler {
  async createOrder(command) {
    // Validate and emit event
    const event = { type: "OrderCreated", orderId: command.id, userId: command.userId, amount: command.amount, items: command.items };
    await eventStore.append("order", command.id, event);
    await eventBus.publish("order-events", event);
  }
}
// Read model (Query) — updated by event consumer
class OrderReadModel {
  constructor() {
    eventBus.subscribe("order-events", async (event) => {
      if (event.type === "OrderCreated") {
        await db.query("INSERT INTO order_summary (id, user_id, amount, item_count, status) VALUES ($1,$2,$3,$4,$5)",
          [event.orderId, event.userId, event.amount, event.items.length, "pending"]);
      }
    });
  }
  async getOrders(userId) {
    return db.query("SELECT * FROM order_summary WHERE user_id=$1", [userId]);
  }
}`,description:"CQRS: separate command (write) and query (read) models, synced via events."},{title:"Idempotent Event Consumer",useCase:"Handle duplicates safely.",code:`async function handleEvent(event) {
  // Check if already processed (idempotency key)
  const processed = await redis.setnx("processed:" + event.id, "1", "EX", 86400);
  if (!processed) return; // already processed, skip
  // Process event
  try {
    if (event.type === "PaymentReceived") {
      await db.query("UPDATE orders SET status=$1 WHERE id=$2", ["paid", event.orderId]);
    }
  } catch (err) {
    // Release lock on failure — will retry
    await redis.del("processed:" + event.id);
    throw err;
  }
}`,description:"Idempotent consumer — prevents duplicate event processing."}],mcqQuestions:[{question:"EDA provides?",options:["Tight coupling","Loose coupling","Synchronous calls","Strong consistency"],answer:1,explanation:"Loose coupling via asynchronous events."},{question:"Event sourcing stores?",options:["Current state only","All state changes as event log","Only errors","Aggregated data"],answer:1,explanation:"Append-only log of all state changes."},{question:"CQRS separates?",options:["Frontend and backend","Read and write models","Database and cache","Producer and consumer"],answer:1,explanation:"Separate read (query) and write (command) models."},{question:"Kafka is commonly used as?",options:["Database","Event bus/broker","Load balancer","Web server"],answer:1,explanation:"Event bus/broker for event-driven architectures."},{question:"Main challenge in EDA?",options:["Performance","Eventual consistency","Storage","Documentation"],answer:1,explanation:"Eventual consistency — data may be stale for a period."},{question:"Idempotent consumer prevents?",options:["Slow processing","Duplicate processing","Memory leaks","Data loss"],answer:1,explanation:"Idempotency prevents duplicate event processing issues."},{question:"Event-Driven Architecture — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Event-Driven Architecture — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Event-Driven Architecture — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Event-Driven Architecture — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_event_driven};
