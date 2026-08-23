export const sd_monolithic = {
  "id": "sd-monolithic",
  "title": "Monolithic Architecture",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "A monolith is a single deployable application where all features share one codebase, database, and deployment unit.",
    "Simpler to develop, test, deploy, and operate than microservices. No network overhead, no distributed complexity.",
    "Challenges: scales as a whole (waste resources), becomes entangled over time, slows development as team grows, technology lock-in.",
    "Best for: startups, small teams, simple CRUD apps, early-stage products. Many successful companies started monolithic then split."
  ],
  "laymanDefinition": "A monolith is like a single-family home. Everything under one roof — kitchen, bedrooms, bathroom, living room. Easy to build and live in. But when your family grows (team expands), everyone trips over each other. You can't renovate the kitchen without disturbing the bedroom. Eventually you might build separate units (microservices).",
  "deepDive": [
    {
      "heading": "Monolith Structure",
      "text": "Single codebase: all features in one project. Single database: all tables in one DB. Single deployment: one artifact (WAR, JAR, Docker). Shared memory: in-process function calls (fast). Request lifecycle enters, processes, and responds within same process."
    },
    {
      "heading": "When Monolith Works",
      "text": "Small team (< 10 devs). Simple domain (CRUD, CMS, blog). Early product stage (validating market). Low traffic requirements. Time to market is critical. Team co-located. No need for polyglot technology. Monolith is underrated for 90% of projects."
    },
    {
      "heading": "Monolith to Microservices Migration",
      "text": "Strangler Fig pattern: gradually replace monolith features with microservices. Route requests to new or old. Extract bounded contexts. Create seams. Feature flags. Parallel run. Database decomposition last — hardest step."
    },
    {
      "heading": "Modular Monolith Alternative",
      "text": "Compromise: separate code into modules/packages with clear interfaces, single deployment. Benefits of monorepo + modularity. Easier to extract services later. Strict module boundaries enforced by build tools (public API, internal implementation)."
    }
  ],
  "interviewAnswer": "Monolith is the right starting point for most projects. Don't start with microservices — you don't know your service boundaries yet. Keep it modular, use good engineering practices. Extract to microservices only when the monolith's pain exceeds the microservices complexity cost.",
  "interviewQuestions": [
    {
      "question": "What is a monolith?",
      "answer": "Single deployable application with all features in one codebase, one database, one deployment unit."
    },
    {
      "question": "What are advantages?",
      "answer": "Simple development, no network overhead, easy testing, fast deployment, atomic operations."
    },
    {
      "question": "Disadvantages?",
      "answer": "Scales as whole, code entanglement, slow development as team grows, tech lock-in."
    },
    {
      "question": "When to use monolith?",
      "answer": "Small teams, early-stage, simple domains, time to market priority, low scale requirements."
    },
    {
      "question": "What is the Strangler Fig pattern?",
      "answer": "Gradually replace monolith features with microservices feature by feature."
    },
    {
      "question": "What is a modular monolith?",
      "answer": "Separate modules with clear interfaces but single deployment — best of both worlds."
    },
    {
      "question": "When to migrate to microservices?",
      "answer": "Team > 10-15 devs, deployment bottlenecks, need independent scaling, clear domain boundaries."
    },
    {
      "question": "What is a bounded context?",
      "answer": "Domain-driven design concept — clear boundary around a subdomain with its own model and language."
    },
    {
      "question": "What is the biggest migration challenge?",
      "answer": "Database decomposition — splitting monolith DB into service-specific databases."
    },
    {
      "question": "Can a monolith scale?",
      "answer": "Yes — vertical scaling, caching, read replicas, CDN. Handles millions of users in many cases."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Monolithic Architecture</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP request</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monolith App</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Single process</text><line x1=\"200\" y1=\"77\" x2=\"60\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Controller</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Route request</text><line x1=\"110\" y1=\"101\" x2=\"150\" y2=\"101\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"200\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Business logic</text><line x1=\"200\" y1=\"117\" x2=\"60\" y2=\"123\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Repository</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data access</text><line x1=\"110\" y1=\"141\" x2=\"150\" y2=\"141\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">PostgreSQL</text><text x=\"200\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Single DB</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monolith</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Single codebase + DB + deploy unit. Simple dev, horizontal scale limited. Extract ser</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">vices when team grows.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Monolithic Architecture: Single deployable unit. S</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">imple dev but scales as one piece. Extract service</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s when needed.</text></svg>",
  "codeExamples": [
    {
      "title": "Express Monolith Structure",
      "useCase": "Single app structure.",
      "code": "myapp/\n├── package.json\n├── server.js              # Entry point\n├── config/\n│   └── index.js           # DB, Redis, env config\n├── models/\n│   ├── User.js\n│   └── Order.js\n├── routes/\n│   ├── auth.js\n│   ├── users.js\n│   └── orders.js\n├── controllers/\n│   ├── authController.js\n│   ├── userController.js\n│   └── orderController.js\n├── services/\n│   ├── authService.js\n│   ├── paymentService.js\n│   └── emailService.js\n├── middleware/\n│   ├── auth.js\n│   └── validation.js\n└── db/\n    ├── migrations/\n    └── seeds/",
      "description": "Folder structure for a modular monolithic Node.js app."
    },
    {
      "title": "Modular Monolith with Express Router",
      "useCase": "Separate modules, single deploy.",
      "code": "// server.js — single entry point\nconst express = require(\"express\");\nconst app = express();\n// Mount modules as routers\napp.use(\"/api/users\", require(\"./modules/users\"));\napp.use(\"/api/orders\", require(\"./modules/orders\"));\napp.use(\"/api/products\", require(\"./modules/products\"));\napp.listen(3000);\n// modules/users/index.js\nconst router = require(\"express\").Router();\nconst userService = require(\"./userService\");\nrouter.get(\"/:id\", async (req, res) => {\n  res.json(await userService.getById(req.params.id));\n});\nmodule.exports = router;",
      "description": "Modular monolith — separate route modules, single deployment."
    },
    {
      "title": "Strangler Fig Pattern Migration",
      "useCase": "Gradual extraction.",
      "code": "// Existing monolith route\napp.use(\"/api/orders\", legacyOrderRouter);\n// New microservice endpoint\napp.use(\"/api/v2/orders\", async (req, res) => {\n  // Proxy to new microservice\n  const response = await fetch(\"http://orders-svc:3000/api/orders\" + req.path, {\n    method: req.method,\n    body: JSON.stringify(req.body),\n    headers: { \"Content-Type\": \"application/json\" }\n  });\n  res.status(response.status).json(await response.json());\n});\n// Nginx can also split traffic:\n// location /api/orders { proxy_pass http://monolith; }\n// location /api/v2/orders { proxy_pass http://orders-svc; }",
      "description": "Strangler Fig — route new requests to microservices while old still runs."
    },
    {
      "title": "Scaling a Monolith",
      "useCase": "Vertical + cache + replicas.",
      "code": "# docker-compose.yml for scaled monolith\nversion: \"3.8\"\nservices:\n  app:\n    build: .\n    ports: [\"3000\"]\n    deploy:\n      replicas: 3  # scale horizontally\n    environment:\n      - REDIS_URL=redis://redis:6379\n      - DATABASE_URL=postgres://user:pass@db:5432/app\n  redis:\n    image: redis:7-alpine\n  db:\n    image: postgres:15\n    deploy:\n      replicas: 1  # primary\n  db-replica:\n    image: postgres:15\n    deploy:\n      replicas: 2  # read replicas\n    environment:\n      - REPLICATION=true",
      "description": "Horizontal scaling of stateless monolith with read replicas."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Monolith vs microservices?",
      "options": [
        "Monolith simpler for small teams",
        "Microservices always better",
        "Same complexity",
        "Monolith can't scale"
      ],
      "answer": 0,
      "explanation": "Monolith is simpler for small teams and early stage."
    },
    {
      "question": "Strangler Fig pattern?",
      "options": [
        "Refactor all at once",
        "Gradual feature replacement",
        "Delete old code",
        "Duplicate everything"
      ],
      "answer": 1,
      "explanation": "Gradually replace monolith features with microservices."
    },
    {
      "question": "Modular monolith?",
      "options": [
        "No modules",
        "Modules, single deployment",
        "Multiple deployments",
        "No database"
      ],
      "answer": 1,
      "explanation": "Separate modules with clear interfaces, single deploy."
    },
    {
      "question": "Scale monolith horizontally?",
      "options": [
        "Impossible",
        "Yes, stateless + LB",
        "Only vertically",
        "Only in cloud"
      ],
      "answer": 1,
      "explanation": "Yes, with stateless design and load balancer."
    },
    {
      "question": "Biggest microservices migration challenge?",
      "options": [
        "Code rewrite",
        "Database decomposition",
        "Team training",
        "Deployment config"
      ],
      "answer": 1,
      "explanation": "Database decomposition is the hardest step."
    },
    {
      "question": "Monolith recommended for?",
      "options": [
        "Large teams",
        "Startups",
        "High scale",
        "Global apps"
      ],
      "answer": 1,
      "explanation": "Startups and small teams benefit most."
    },
    {
      "question": "Monolithic Architecture — What reduces errors most?",
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
      "question": "Monolithic Architecture — What improves speed?",
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
      "question": "Monolithic Architecture — What is key for monitoring?",
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
      "question": "Monolithic Architecture — What ensures quality?",
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
