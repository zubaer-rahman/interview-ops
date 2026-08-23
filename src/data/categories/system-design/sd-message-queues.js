export const sd_message_queues = {
  "id": "sd-message-queues",
  "title": "Message Queues",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Message queues enable asynchronous communication between services by decoupling producers (senders) from consumers (receivers) via a buffer.",
    "Benefits: decoupling, load leveling (smooth traffic spikes), fault tolerance (queue persists if consumer down), scalability (add consumers), async processing.",
    "Key concepts: producer (sends messages), consumer (receives), queue/topic (buffer), broker (server running queue), exchange/routing (directing messages), binding (queue subscription).",
    "Models: point-to-point (one message, one consumer — queue), pub/sub (one message, many consumers — topic). At-least-once, at-most-once, exactly-once delivery semantics."
  ],
  "laymanDefinition": "Message queues are like a restaurant order counter. Customers (producers) place orders and leave. Cooks (consumers) pick orders from the counter when ready. If a cook is slow, orders still pile up safely. If the restaurant gets busy, add more cooks. The counter (queue) decouples ordering from cooking — customers don't wait for food preparation.",
  "deepDive": [
    {
      "heading": "RabbitMQ vs Kafka",
      "text": "RabbitMQ: broker-based, routing flexibility (exchanges, bindings), push-based. Good for task queues, RPC, complex routing. Kafka: log-based, append-only log partitions, pull-based. High throughput, replay capability. Good for event streaming, data pipelines, audit logs."
    },
    {
      "heading": "Delivery Semantics",
      "text": "At-most-once: send, don\\'t retry. Fast, may lose messages. At-least-once: send, retry on failure, consumer idempotent. Standard choice. Exactly-once: deduplication at consumer + transactional producer. Hardest, highest overhead. Most systems use at-least-once with idempotent consumers."
    },
    {
      "heading": "Message Ordering",
      "text": "Single queue/partition: ordered. Multiple partitions: no global order. Kafka: order within partition by key. RabbitMQ: order in single queue. For ordered processing: route related messages to same partition/queue with same partition key (e.g., order_id)."
    },
    {
      "heading": "Dead Letter Queues",
      "text": "Messages that fail processing go to DLQ after max retries. Analyze DLQ for systemic issues. Redrive: reprocess messages after fixing bug. Monitor DLQ depth — alert if growing. Important for reliability — prevents message loss."
    }
  ],
  "interviewAnswer": "Use RabbitMQ for complex routing, task distribution, RPC. Use Kafka for high-throughput event streaming, data pipelines, log aggregation. Always configure dead letter queues. Make consumers idempotent (at-least-once). Monitor queue depth and consumer lag. Set message TTL. Handle poison pills (bad messages that keep failing).",
  "interviewQuestions": [
    {
      "question": "What is a message queue?",
      "answer": "Asynchronous communication buffer — producers send, consumers receive. Decouples services."
    },
    {
      "question": "RabbitMQ vs Kafka?",
      "answer": "RabbitMQ: broker, routing, push. Kafka: log, high throughput, pull, replay."
    },
    {
      "question": "What is at-least-once delivery?",
      "answer": "Message may be delivered more than once. Consumer must be idempotent."
    },
    {
      "question": "What is a dead letter queue?",
      "answer": "Queue for messages that failed processing after max retries."
    },
    {
      "question": "What is consumer lag?",
      "answer": "How far behind consumers are from the latest message."
    },
    {
      "question": "Point-to-point vs pub/sub?",
      "answer": "P2P: one consumer gets message. Pub/sub: all subscribers get a copy."
    },
    {
      "question": "What is a message broker?",
      "answer": "The server/service running the message queue (RabbitMQ, Kafka, SQS)."
    },
    {
      "question": "What is idempotency?",
      "answer": "Processing the same message multiple times has the same effect as once."
    },
    {
      "question": "What is a poison pill?",
      "answer": "A bad message that causes the consumer to fail repeatedly (goes to DLQ)."
    },
    {
      "question": "What is backpressure?",
      "answer": "When producer is faster than consumer — queue acts as buffer (load leveling)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Message Queues</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Producer</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Service A</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Queue/Broker</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">RabbitMQ/Kafka</text><line x1=\"200\" y1=\"77\" x2=\"170\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Consumer 1</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Service X</text><rect x=\"120\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"170\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Consumer 2</text><text x=\"170\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Service Y</text><rect x=\"230\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DLQ</text><text x=\"280\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Failed msgs</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Exchange</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Routing</text><rect x=\"150\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"200\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Partition</text><text x=\"200\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ordered log</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Message Queue</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Async decoupling. RabbitMQ (routing) vs Kafka (streaming). At-least-once, idempotent,</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> DLQ.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Message Queues: Async decoupling. RabbitMQ for rou</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ting, Kafka for streaming. DLQ, idempotent consume</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rs.</text></svg>",
  "codeExamples": [
    {
      "title": "RabbitMQ Producer/Consumer",
      "useCase": "Send and receive.",
      "code": "// Producer\nconst amqp = require(\"amqplib\");\nasync function send() {\n  const conn = await amqp.connect(\"amqp://localhost\");\n  const ch = await conn.createChannel();\n  const queue = \"task_queue\";\n  await ch.assertQueue(queue, { durable: true });\n  ch.sendToQueue(queue, Buffer.from(JSON.stringify({ task: \"process_order\", id: 123 })),\n    { persistent: true });\n  console.log(\"Sent\");\n}\n// Consumer\nconst conn = await amqp.connect(\"amqp://localhost\");\nconst ch = await conn.createChannel();\nawait ch.assertQueue(\"task_queue\", { durable: true });\nch.prefetch(1); // process one at a time\nch.consume(\"task_queue\", async (msg) => {\n  const data = JSON.parse(msg.content.toString());\n  try { await processTask(data); ch.ack(msg); }\n  catch (err) { ch.nack(msg); } // retry or DLQ\n}, { noAck: false });",
      "description": "RabbitMQ producer and consumer with manual acknowledgment."
    },
    {
      "title": "Kafka Producer/Consumer",
      "useCase": "High-throughput streaming.",
      "code": "// Producer\nconst { Kafka } = require(\"kafkajs\");\nconst kafka = new Kafka({ brokers: [\"kafka:9092\"] });\nconst producer = kafka.producer();\nawait producer.connect();\nawait producer.send({\n  topic: \"order-events\",\n  messages: [{\n    key: \"order-123\",\n    value: JSON.stringify({ type: \"order_created\", orderId: 123, amount: 99.99 }),\n  }],\n});\n// Consumer\nconst consumer = kafka.consumer({ groupId: \"order-processor\" });\nawait consumer.connect();\nawait consumer.subscribe({ topic: \"order-events\", fromBeginning: true });\nawait consumer.run({\n  eachMessage: async ({ topic, partition, message }) => {\n    const event = JSON.parse(message.value.toString());\n    await processEvent(event);\n  },\n});",
      "description": "Kafka producer and consumer for event streaming."
    },
    {
      "title": "AWS SQS with Visibility Timeout",
      "useCase": "Cloud message queue.",
      "code": "const { SQS } = require(\"@aws-sdk/client-sqs\");\nconst sqs = new SQS({ region: \"us-east-1\" });\n// Producer\nasync function sendMessage(body) {\n  return sqs.sendMessage({\n    QueueUrl: \"https://sqs.us-east-1.amazonaws.com/123456/MyQueue\",\n    MessageBody: JSON.stringify(body),\n    DelaySeconds: 0,\n  });\n}\n// Consumer\nasync function pollMessages() {\n  const data = await sqs.receiveMessage({\n    QueueUrl: \"https://sqs.us-east-1.amazonaws.com/123456/MyQueue\",\n    MaxNumberOfMessages: 10,\n    VisibilityTimeout: 30,\n    WaitTimeSeconds: 20,\n  });\n  for (const msg of data.Messages || []) {\n    try {\n      await process(JSON.parse(msg.Body));\n      await sqs.deleteMessage({ QueueUrl, ReceiptHandle: msg.ReceiptHandle });\n    } catch (err) { /* will reappear after visibility timeout */ }\n  }\n}",
      "description": "AWS SQS with visibility timeout for reliable message processing."
    },
    {
      "title": "Dead Letter Queue Configuration",
      "useCase": "Handle failed messages.",
      "code": "// RabbitMQ DLQ setup\nconst ch = await conn.createChannel();\nawait ch.assertQueue(\"main_queue\", {\n  durable: true,\n  arguments: {\n    \"x-dead-letter-exchange\": \"dlx\",\n    \"x-dead-letter-routing-key\": \"dlq\",\n    \"x-message-ttl\": 86400000, // 1 day TTL\n    \"x-max-retries\": 3,\n  },\n});\nawait ch.assertQueue(\"dlq\", { durable: true });\nawait ch.bindQueue(\"dlq\", \"dlx\", \"dlq\");\n// Kafka DLQ: produce failed messages to \"order-events-dlq\" topic\nasync function processOrDLQ(event, error) {\n  if (event.retryCount >= 3) {\n    await producer.send({ topic: \"order-events-dlq\", messages: [{ value: JSON.stringify({ event, error: error.message }) }] });\n  } else {\n    event.retryCount = (event.retryCount || 0) + 1;\n    await producer.send({ topic: \"order-events\", messages: [{ value: JSON.stringify(event) }] });\n  }\n}",
      "description": "DLQ configuration for handling failed messages after max retries."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Message queues provide?",
      "options": [
        "Synchronous calls",
        "Async decoupling",
        "Direct connections",
        "Faster code"
      ],
      "answer": 1,
      "explanation": "Asynchronous decoupling between services."
    },
    {
      "question": "RabbitMQ uses which model?",
      "options": [
        "Log-based",
        "Broker-based routing",
        "File-based",
        "Stream-based"
      ],
      "answer": 1,
      "explanation": "Broker with exchanges and bindings."
    },
    {
      "question": "At-least-once requires?",
      "options": [
        "Faster network",
        "Idempotent consumers",
        "More queues",
        "Less memory"
      ],
      "answer": 1,
      "explanation": "Consumer must handle duplicate messages."
    },
    {
      "question": "Dead letter queue stores?",
      "options": [
        "All messages",
        "Failed messages",
        "Processed messages",
        "Archived messages"
      ],
      "answer": 1,
      "explanation": "Messages that failed after max retries."
    },
    {
      "question": "Consumer lag indicates?",
      "options": [
        "Queue depth",
        "How far behind consumer is",
        "Producer speed",
        "Network health"
      ],
      "answer": 1,
      "explanation": "Difference between latest and consumed offset."
    },
    {
      "question": "Idempotency means?",
      "options": [
        "Unique messages",
        "Same result from duplicate processing",
        "Fast processing",
        "Ordered processing"
      ],
      "answer": 1,
      "explanation": "Processing same message twice has same effect as once."
    },
    {
      "question": "Message Queues — What reduces errors most?",
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
      "question": "Message Queues — What improves speed?",
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
      "question": "Message Queues — What is key for monitoring?",
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
      "question": "Message Queues — What ensures quality?",
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
