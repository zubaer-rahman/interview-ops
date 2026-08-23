export const ag_kong = {
  "id": "ag-kong",
  "title": "Kong",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Kong is an open-source API Gateway built on NGINX and OpenResty, providing traffic control, security, analytics, and plugin extensibility.",
    "Kong offers OSS (Community) and Enterprise editions. It operates in DB-mode (PostgreSQL/Cassandra) or DB-less (declarative config) mode.",
    "Core concepts: Routes (match requests), Services (backend targets), Upstreams (load balancing), Consumers (auth entities), and Plugins (extensions).",
    "Plugins cover auth (Key Auth, JWT, OAuth2), security (CORS, IP Restriction, Rate Limiting), traffic control, and observability (Prometheus, Datadog)."
  ],
  "laymanDefinition": "Kong is like a smart security checkpoint at a corporate building. Every visitor (API request) passes through Kong. It checks their badge (auth), looks up their destination (routing), limits visitors (rate limiting), logs visits (logging), and directs them to the right office (backend).",
  "deepDive": [
    {
      "heading": "Kong Architecture",
      "text": "Kong runs on NGINX + OpenResty (Lua). Two processes: Kong (admin API + management) and OpenResty (proxy runtime). PostgreSQL in DB-mode. DB-less uses declarative YAML/JSON. Enterprise adds Kong Manager UI, Dev Portal, Vitals analytics."
    },
    {
      "heading": "Routes, Services, Upstreams",
      "text": "Route: URL matching (paths, hosts, methods). Service: backend API abstraction. Upstream: load balancing group with health checks, circuit breakers, weighted round-robin across multiple targets."
    },
    {
      "heading": "Kong Plugin System",
      "text": "Plugins run in lifecycle phases: rewrite, access (auth), header_filter, body_filter, log, timer. Custom plugins in Lua. Order: auth first, then rate-limit, transform, log. Precedence: global > consumer > route > service."
    },
    {
      "heading": "Authentication Plugins",
      "text": "Key Auth: API key in header/query/body. Basic Auth: base64 credentials. JWT: RSA/HMAC validation. OAuth2: authorization code flow. HMAC Auth: request signing. LDAP Auth: enterprise directory. Session: cookie-based."
    }
  ],
  "interviewAnswer": "Kong is the most popular open-source API gateway. It excels at plugin extensibility and supports DB-mode for dynamic routing and DB-less for GitOps. Use for microservices API management, rate limiting, auth centralization, and observability.",
  "interviewQuestions": [
    {
      "question": "What is Kong?",
      "answer": "An open-source API Gateway on NGINX/OpenResty with plugin-based extensibility for traffic control, security, and observability."
    },
    {
      "question": "What are the two Kong deployment modes?",
      "answer": "DB-mode (PostgreSQL for dynamic config) and DB-less mode (declarative YAML/JSON, no database)."
    },
    {
      "question": "What are Kong Routes, Services, Upstreams?",
      "answer": "Route: URL matching rules. Service: backend API abstraction. Upstream: load balancing group with health checks."
    },
    {
      "question": "What plugin lifecycle phases does Kong support?",
      "answer": "rewrite, access (auth), header_filter, body_filter, log, timer."
    },
    {
      "question": "What does Enterprise add over OSS?",
      "answer": "Kong Manager UI, Dev Portal, Vitals analytics, and enterprise-grade plugins."
    },
    {
      "question": "Can Kong work without a database?",
      "answer": "Yes, DB-less mode uses a declarative config file. Config is static until file reload."
    },
    {
      "question": "What database does Kong support?",
      "answer": "PostgreSQL (recommended) or Cassandra (legacy, deprecated in newer versions)."
    },
    {
      "question": "What are Kong Consumers?",
      "answer": "Entities representing users or applications for auth, rate limiting, and ACL plugin configs."
    },
    {
      "question": "What is the plugin order of execution?",
      "answer": "Global first, then consumer-level, route-level, then service-level plugins."
    },
    {
      "question": "What proxy does Kong use?",
      "answer": "NGINX + OpenResty (Lua scripting engine for NGINX)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Kong</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">API Consumer</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kong</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">API Gateway</text><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">URL Match</text><line x1=\"110\" y1=\"83\" x2=\"140\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Plugins</text><text x=\"200\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth->RateLimit->L</text><text x=\"200\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">og</text><line x1=\"250\" y1=\"83\" x2=\"280\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend</text><line x1=\"110\" y1=\"118\" x2=\"140\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Upstream</text><text x=\"200\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">LB+Health</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kong API Gateway</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">NGINX+OpenResty. Routes,Services,P</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">lugins. DB or DB-less. OSS+Enterpr</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ise.</text></svg>",
  "codeExamples": "<text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Kong: Open-source API Gateway on NGINX/OpenResty. </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Plugin-based, DB or DB-less modes.</text>",
  "mcqQuestions": [
    {
      "title": "Kong Declarative Config (DB-less)",
      "useCase": "Kong config via YAML.",
      "code": "# kong.yml — declarative config\n_format_version: \"3.0\"\nservices:\n  - name: user-service\n    url: http://users-api:3000\n    routes:\n      - name: user-route\n        paths:\n          - /users\n        methods:\n          - GET\n        plugins:\n          - name: key-auth\n          - name: rate-limiting\n            config:\n              minute: 60\nconsumers:\n  - username: my-app\n    keyauth_credentials:\n      - key: abc123-secret-key",
      "description": "Declarative Kong config for DB-less mode — ideal for GitOps."
    },
    {
      "title": "Kong Admin API (Create Service)",
      "useCase": "REST API to configure Kong.",
      "code": "# Create a Service\ncurl -s -X POST http://localhost:8001/services \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"order-service\",\"url\":\"http://orders-api:4000\"}'\n# Create a Route\ncurl -s -X POST http://localhost:8001/services/order-service/routes \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"order-route\",\"paths\":[\"/orders\"],\"methods\":[\"GET\",\"POST\"]}'\n# List services\ncurl -s http://localhost:8001/services | jq .",
      "description": "Kong Admin API for dynamic service and route creation."
    },
    {
      "title": "Kong Plugin: Rate Limiting",
      "useCase": "Rate limiting plugin.",
      "code": "# Enable rate limiting on a route\ncurl -s -X POST http://localhost:8001/routes/order-route/plugins \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"rate-limiting\",\"config\":{\"minute\":30,\"hour\":1000,\"policy\":\"redis\",\"redis_host\":\"redis-cluster\",\"redis_port\":6379}}'\n# Response headers: X-RateLimit-Limit-minute, X-RateLimit-Remaining-minute",
      "description": "Rate limiting plugin with Redis-backed distributed counting."
    },
    {
      "title": "Kong Upstream with Health Checks",
      "useCase": "Load balancing with health checks.",
      "code": "# Create Upstream\ncurl -s -X POST http://localhost:8001/upstreams \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"orders-upstream\",\"algorithm\":\"round-robin\",\"healthchecks\":{\"active\":{\"type\":\"http\",\"http_path\":\"/health\",\"healthy\":{\"interval\":5,\"successes\":1},\"unhealthy\":{\"interval\":5,\"http_failures\":3}}}}'\n# Add targets\ncurl -s -X POST http://localhost:8001/upstreams/orders-upstream/targets \\\n  -d '{\"target\":\"10.0.1.10:4000\",\"weight\":100}'\ncurl -s -X POST http://localhost:8001/upstreams/orders-upstream/targets \\\n  -d '{\"target\":\"10.0.1.11:4000\",\"weight\":50}'",
      "description": "Kong upstream with active health checks and weighted targets."
    },
    {
      "question": "Kong — How to ensure reliability?",
      "options": [
        "Automated testing and monitoring",
        "Manual checks only",
        "No testing",
        "Reactive fixes"
      ],
      "answer": 0,
      "explanation": "Automated testing and monitoring ensure consistent reliability."
    },
    {
      "question": "Kong — What helps team collaboration?",
      "options": [
        "Shared workflows and visibility",
        "Isolated work",
        "No documentation",
        "Siloed tools"
      ],
      "answer": 0,
      "explanation": "Shared workflows and visibility enable better collaboration."
    },
    {
      "question": "Kong — What reduces errors most?",
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
      "question": "Kong — What improves speed?",
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
      "question": "Kong — What is key for monitoring?",
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
      "question": "Kong — What ensures quality?",
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
