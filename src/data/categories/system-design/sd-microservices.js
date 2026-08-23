export const sd_microservices = {
  "id": "sd-microservices",
  "title": "Microservices Architecture",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Microservices decompose an application into small, independently deployable services, each owning its own data and exposing APIs.",
    "Each service: small team ownership, independent deployment, own database (database-per-service), communicates via HTTP/gRPC or messaging.",
    "Benefits: independent scaling, technology diversity, faster deployments, fault isolation, team autonomy.",
    "Challenges: distributed complexity (network latency, data consistency), service discovery, monitoring, testing, eventual consistency management."
  ],
  "laymanDefinition": "Microservices are like a food court instead of a single restaurant kitchen. Each stall (service) makes its own dish with its own ingredients (database) and recipes (code). Stalls can open/close independently. If the taco stand burns down, pizza still runs. But coordinating a \"full meal\" across stalls is harder.",
  "deepDive": [
    {
      "heading": "Key Principles",
      "text": "Database-per-service: each service owns its data, no sharing. API-based communication: REST, gRPC, or events. Independent deployability: deploy without coordinating. Decentralized governance: teams choose tech stack. Design for failure: circuit breakers, retries, timeouts, bulkheads."
    },
    {
      "heading": "Inter-Service Communication",
      "text": "Synchronous: REST (HTTP) or gRPC (protobuf, streaming). Simple but creates coupling, cascading failures. Asynchronous: message broker (Kafka, RabbitMQ). Decoupled, resilient. Event-driven: services publish events, others subscribe. Eventually consistent."
    },
    {
      "heading": "Service Discovery",
      "text": "Static: config files (brittle). DNS: SRV records for service lookup. Service registry: Consul, etcd, Zookeeper. Client-side discovery: service queries registry, picks instance. Server-side: LB queries registry. K8s: built-in DNS + endpoints."
    },
    {
      "heading": "Data Consistency",
      "text": "Saga pattern: sequence of local transactions with compensating actions. Choreography: each service emits events, others react. Orchestration: coordinator tells services what to do. Two-phase commit (2PC): not recommended for microservices (blocking, not available)."
    }
  ],
  "interviewAnswer": "Microservices suit complex, evolving products with multiple teams. Start monolithic, extract services when needed. Database-per-service is key. Use async communication for resilience. Embrace eventual consistency. Invest in DevOps, monitoring, and CI/CD upfront.",
  "interviewQuestions": [
    {
      "question": "What defines a microservice?",
      "answer": "Small, independently deployable service with its own database, exposing APIs."
    },
    {
      "question": "Why database-per-service?",
      "answer": "Independent schema evolution, no coupling, each service scales independently."
    },
    {
      "question": "Synchronous vs async communication?",
      "answer": "Sync: REST/gRPC, simple, coupled. Async: message broker, decoupled, resilient."
    },
    {
      "question": "What is service discovery?",
      "answer": "How services find each other by name — DNS, Consul, K8s."
    },
    {
      "question": "What is the Saga pattern?",
      "answer": "Series of local transactions with compensating actions for failure handling."
    },
    {
      "question": "What are challenges?",
      "answer": "Distributed complexity, data consistency, network latency, testing, monitoring."
    },
    {
      "question": "When NOT to use microservices?",
      "answer": "Simple CRUD app, small team, early-stage product, low scale requirements."
    },
    {
      "question": "What is an API Gateway in microservices?",
      "answer": "Single entry point routing to services, handles auth, rate limiting, aggregation."
    },
    {
      "question": "What is circuit breaker?",
      "answer": "Pattern to detect failures and prevent cascading failures — stops calling failing service."
    },
    {
      "question": "How to handle distributed tracing?",
      "answer": "Correlation ID passed across services, collected with OpenTelemetry → Jaeger/Zipkin."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Microservices Architecture</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App/Mobile</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API Gateway</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Entry point</text><line x1=\"200\" y1=\"77\" x2=\"200\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"50\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"50\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Users</text><rect x=\"100\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"140\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"140\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Orders</text><rect x=\"190\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Payments</text><rect x=\"280\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"320\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"320\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Inventory</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DB per Service</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Decoupled</text><line x1=\"60\" y1=\"157\" x2=\"40\" y2=\"163\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"160\" width=\"60\" height=\"32\" rx=\"5\" fill=\"#6f42c1\" stroke=\"#6f42c1\" stroke-width=\"1.5\"/><text x=\"40\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Queue</text><text x=\"40\" y=\"186\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kafka</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Microservices</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Small, independent services. DB-per-service. Async communication. Saga for transactio</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ns.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Microservices: Independently deployable services w</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ith their own databases. Async communication, Saga</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> pattern.</text></svg>",
  "codeExamples": [
    {
      "title": "Express Microservice",
      "useCase": "Simple REST service.",
      "code": "const express = require(\"express\");\nconst app = express();\napp.use(express.json());\n// Health check endpoint\napp.get(\"/health\", (req, res) => res.json({ status: \"ok\", service: \"orders\" }));\n// API endpoint\napp.get(\"/api/orders/:id\", async (req, res) => {\n  const order = await db.query(\"SELECT * FROM orders WHERE id=$1\", [req.params.id]);\n  if (!order) return res.status(404).json({ error: \"Not found\" });\n  res.json(order);\n});\napp.listen(3000, () => console.log(\"Orders service on :3000\"));",
      "description": "Simple microservice with health check."
    },
    {
      "title": "Service Discovery with Consul",
      "useCase": "Register and discover.",
      "code": "// Register service\nconst consul = require(\"consul\")();\nconsul.agent.service.register({\n  name: \"orders-service\",\n  address: \"10.0.1.42\",\n  port: 3000,\n  check: { http: \"http://10.0.1.42:3000/health\", interval: \"10s\" }\n}, () => {});\n// Discover service\nasync function callOrderService(orderId) {\n  const services = await consul.catalog.service.nodes(\"orders-service\");\n  const svc = services[0]; // pick first healthy instance\n  const url = `http://${svc.Address}:${svc.ServicePort}/api/orders/${orderId}`;\n  return fetch(url).then(r => r.json());\n}",
      "description": "Service registration and discovery with Consul."
    },
    {
      "title": "Saga Pattern (Choreography)",
      "useCase": "Event-driven saga.",
      "code": "// Order Service emits event\nconst event = { type: \"OrderCreated\", orderId: 123, userId: 42, amount: 99.99 };\nkafkaProducer.send({ topic: \"orders\", messages: [{ value: JSON.stringify(event) }] });\n// Payment Service subscribes\nconsumer.on(\"message\", async (msg) => {\n  const event = JSON.parse(msg.value);\n  if (event.type === \"OrderCreated\") {\n    try {\n      await processPayment(event);\n      kafkaProducer.send({ topic: \"payments\", messages: [{ value: JSON.stringify({ type: \"PaymentProcessed\", orderId: event.orderId }) }] });\n    } catch (err) {\n      kafkaProducer.send({ topic: \"payments\", messages: [{ value: JSON.stringify({ type: \"PaymentFailed\", orderId: event.orderId }) }] });\n    }\n  }\n});",
      "description": "Choreography-based Saga with Kafka events and compensating actions."
    },
    {
      "title": "Circuit Breaker with Opossum",
      "useCase": "Fault tolerance.",
      "code": "const circuitBreaker = require(\"opossum\");\nasync function callPaymentService(payment) {\n  const response = await fetch(\"http://payment-service/api/pay\", {\n    method: \"POST\", body: JSON.stringify(payment),\n    headers: { \"Content-Type\": \"application/json\" }\n  });\n  if (!response.ok) throw new Error(\"Payment failed\");\n  return response.json();\n}\nconst breaker = new circuitBreaker(callPaymentService, {\n  timeout: 5000, errorThresholdPercentage: 50, resetTimeout: 30000\n});\n// When >50% fail, circuit opens for 30s\nbreaker.fallback(() => ({ status: \"deferred\", message: \"Payment queued\" }));\nconst result = await breaker.fire(payment);",
      "description": "Circuit breaker prevents cascading failures between microservices."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Database-per-service principle?",
      "options": [
        "Shared DB",
        "Each service owns its DB",
        "Single DB for all",
        "No DB needed"
      ],
      "answer": 1,
      "explanation": "Each microservice has its own database."
    },
    {
      "question": "Saga pattern handles?",
      "options": [
        "Caching",
        "Distributed transactions",
        "Load balancing",
        "Service discovery"
      ],
      "answer": 1,
      "explanation": "Manages distributed transactions with compensating actions."
    },
    {
      "question": "What does circuit breaker prevent?",
      "options": [
        "Slow queries",
        "Cascading failures",
        "Data loss",
        "Memory leaks"
      ],
      "answer": 1,
      "explanation": "Prevents cascading failures across services."
    },
    {
      "question": "Asynchronous communication uses?",
      "options": [
        "HTTP",
        "gRPC",
        "Message broker",
        "WebSocket"
      ],
      "answer": 2,
      "explanation": "Message broker (Kafka, RabbitMQ) for async."
    },
    {
      "question": "When to start with microservices?",
      "options": [
        "Always",
        "After monolithic proves boundaries",
        "Never",
        "Only for startups"
      ],
      "answer": 1,
      "explanation": "Extract microservices from monolith when boundaries are clear."
    },
    {
      "question": "API Gateway role?",
      "options": [
        "Database access",
        "Single entry point for routing",
        "Caching",
        "Logging"
      ],
      "answer": 1,
      "explanation": "API Gateway is the single entry point for client requests."
    },
    {
      "question": "Microservices Architecture — What reduces errors most?",
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
      "question": "Microservices Architecture — What improves speed?",
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
      "question": "Microservices Architecture — What is key for monitoring?",
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
      "question": "Microservices Architecture — What ensures quality?",
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
