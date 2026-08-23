export const tm_api_gateway = {
  "id": "tm-api-gateway",
  "title": "API Gateway",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "An API Gateway is a single entry point for all client requests that handles routing, composition, and cross-cutting concerns.",
    "It sits between clients and microservices, providing: request routing, authentication, rate limiting, logging, caching, and response transformation.",
    "Popular API Gateways: Kong, AWS API Gateway, NGINX Plus, Apigee, Zuul (Netflix), Traefik, Ambassador, KrakenD.",
    "API Gateways reduce client complexity � clients talk to one endpoint instead of many microservices directly."
  ],
  "laymanDefinition": "An API Gateway is like a mall directory and concierge desk combined. Shoppers (clients) don't need to know each store's location. They ask the concierge (\"I need shoes\") and the concierge directs them to the right store, checks if they have a membership card (auth), and even bundles items from multiple stores (composition).",
  "deepDive": [
    {
      "heading": "API Gateway vs Reverse Proxy",
      "text": "Both sit in front of servers and route requests. API Gateway adds API-specific features: authentication/authorization, rate limiting per API key, request/response transformation, API versioning, circuit breaking, service discovery integration, and API analytics. Reverse proxy is more general-purpose."
    },
    {
      "heading": "Request Routing and Composition",
      "text": "Route requests to appropriate microservices based on path, headers, or query params. Aggregate responses from multiple services (backend for frontend pattern). Transform request/response formats (XML to JSON, protocol translation). Serve different API versions with different backend targets."
    },
    {
      "heading": "Cross-Cutting Concerns",
      "text": "Authentication: validate JWT, API keys, OAuth tokens before requests reach services. Rate limiting: per client, per endpoint, per plan. Logging: structured request/response logging. Caching: cache responses to reduce backend load. Monitoring: metrics, tracing, alerting."
    },
    {
      "heading": "API Gateway Patterns",
      "text": "Gateway Routing: simple proxy to services. Gateway Aggregation: combine multiple service responses. Gateway Offloading: handle auth, SSL, rate limiting at gateway. Backend for Frontend (BFF): separate gateway per client type (web, mobile, IoT) with tailored responses."
    }
  ],
  "interviewAnswer": "An API Gateway is the central control point for your microservices API. It handles auth, rate limiting, routing, and aggregation � keeping services simple and clients happy. Choose based on your stack: Kong (open source, plugin-rich), AWS API Gateway (serverless), Traefik (cloud-native/Kubernetes).",
  "interviewQuestions": [
    {
      "question": "What is an API Gateway?",
      "answer": "A single entry point for APIs that handles routing, authentication, rate limiting, aggregation, and other cross-cutting concerns."
    },
    {
      "question": "What is the difference between API Gateway and reverse proxy?",
      "answer": "API Gateway adds API-specific features (auth, rate limiting per key, transformation, versioning) on top of reverse proxy functionality."
    },
    {
      "question": "What is request aggregation?",
      "answer": "The gateway combines responses from multiple microservices into a single response to reduce client requests."
    },
    {
      "question": "What is Backend for Frontend (BFF)?",
      "answer": "Separate API Gateway per client type � each BFF provides an API tailored to a specific client\\'s needs."
    },
    {
      "question": "What features can an API Gateway offload?",
      "answer": "Authentication, SSL termination, rate limiting, caching, request validation, logging, metrics."
    },
    {
      "question": "What is Kong?",
      "answer": "An open-source API Gateway built on NGINX with a plugin architecture for auth, rate limiting, logging, etc."
    },
    {
      "question": "What is a service mesh vs API Gateway?",
      "answer": "Service mesh handles inter-service communication (East-West). API Gateway handles external-to-service communication (North-South)."
    },
    {
      "question": "How does an API Gateway handle versioning?",
      "answer": "Route based on URL path (/v1/, /v2/) or header (Accept: application/vnd.api+json;version=2)."
    },
    {
      "question": "What is a gateway timeout?",
      "answer": "When a backend service takes too long to respond, the gateway returns 504 Gateway Timeout."
    },
    {
      "question": "How does an API Gateway scale?",
      "answer": "Horizontally � multiple gateway instances behind a load balancer. Stateless configuration (database-backed)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">API Gateway</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Clients</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Web / Mobile / IoT</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"180\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"240\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API Gateway</text><text x=\"240\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kong / AWS / Traefik</text><line x1=\"330\" y1=\"48\" x2=\"360\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"120\" x2=\"150\" y2=\"140\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"425\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth Service</text><text x=\"425\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">JWT / OAuth</text><rect x=\"370\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"425\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Users Service</text><text x=\"425\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CRUD</text><rect x=\"370\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"425\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Orders Service</text><text x=\"425\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Transactions</text><rect x=\"370\" y=\"140\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"425\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Products Service</text><text x=\"425\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Catalog</text><rect x=\"10\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"75\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth + Rate Limit</text><text x=\"75\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cross-cutting</text><rect x=\"10\" y=\"105\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Aggregation</text><text x=\"75\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compose responses</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">API Gateway: Single entry point routing to microse</text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rvices with auth, rate limiting, and aggregation.</text></svg>",
  "codeExamples": [
    {
      "title": "Kong API Gateway Config",
      "useCase": "Declarative Kong configuration.",
      "code": "_format_version: \"3.0\"\nservices:\n  - name: user-service\n    url: http://users-api:3000\n    routes:\n      - name: user-routes\n        paths: [\"/users\"]\n        methods: [\"GET\", \"POST\"]\n\n  - name: order-service\n    url: http://orders-api:3001\n    routes:\n      - name: order-routes\n        paths: [\"/orders\"]\n        plugins:\n          - name: rate-limiting\n            config:\n              minute: 60\n              policy: local\n          - name: key-auth",
      "description": "Kong declarative configuration with services, routes, and plugin policies."
    },
    {
      "title": "Express API Gateway (express-gateway)",
      "useCase": "Node.js API Gateway.",
      "code": "# gateway.config.yml\nhttp:\n  port: 8080\napiEndpoints:\n  api:\n    host: localhost\n    paths: [\"/api/*\"]\nserviceEndpoints:\n  userService:\n    urls: [\"http://localhost:3001\"]\n  orderService:\n    urls: [\"http://localhost:3002\"]\npolicies:\n  - proxy\n  - rate-limiter\npipelines:\n  default:\n    apiEndpoints:\n      - api\n    policies:\n      - rate-limiter:\n          config:\n            rateLimitBy: ip\n            max: 100\n      - proxy:\n          - action:\n              serviceEndpoint: userService\n              changeOrigin: true",
      "description": "Express Gateway configuration with rate limiting and proxy policies."
    },
    {
      "title": "AWS API Gateway Terraform",
      "useCase": "Cloud API Gateway setup.",
      "code": "resource \"aws_api_gateway_rest_api\" \"api\" {\n  name = \"MyAPI\"\n}\n\nresource \"aws_api_gateway_resource\" \"users\" {\n  rest_api_id = aws_api_gateway_rest_api.api.id\n  parent_id   = aws_api_gateway_rest_api.api.root_resource_id\n  path_part   = \"users\"\n}\n\nresource \"aws_api_gateway_method\" \"users_get\" {\n  rest_api_id   = aws_api_gateway_rest_api.api.id\n  resource_id   = aws_api_gateway_resource.users.id\n  http_method   = \"GET\"\n  authorization = \"COGNITO_USER_POOLS\"\n  authorizer_id = aws_api_gateway_authorizer.cognito.id\n}",
      "description": "AWS API Gateway with Cognito authentication and Lambda integration."
    },
    {
      "title": "API Gateway Rate Limiting (Kong Plugin)",
      "useCase": "Per-client rate limits.",
      "code": "plugins:\n  - name: rate-limiting\n    service: user-service\n    config:\n      second: null\n      minute: 30\n      hour: 1000\n      policy: redis  # cluster-friendly\n      fault_tolerant: true\n      hide_client_headers: false\n      redis_host: redis-cluster\n      redis_port: 6379\n\n  - name: key-auth  # require API key\n    service: user-service\n    config:\n      key_names: [\"X-API-Key\"]\n      hide_credentials: true",
      "description": "Kong rate limiting with Redis backend for distributed rate limit tracking."
    },
    {
      "title": "KrakenD API Gateway",
      "useCase": "High-performance gateway config.",
      "code": "// KrakenD with aggregation endpoint\nconst krakendConfig = {\n  version: 3,\n  endpoints: [{\n    endpoint: \"/user-details/{id}\",\n    method: \"GET\",\n    backend: [\n      { url_pattern: \"/users/{id}\", host: [\"http://user-svc:3000\"] },\n      { url_pattern: \"/orders?user_id={id}\", host: [\"http://order-svc:3001\"], group: \"orders\" }\n    ],\n    output_encoding: \"json\"\n  }],\n  extra_config: {\n    \"github_com/devopsfaith/krakend/ratelimit\": { max: 50, strategy: \"ip\" }\n  }\n}",
      "description": "KrakenD aggregation endpoint combining user and order data from separate services."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the primary role of an API Gateway?",
      "options": [
        "Database management",
        "Single entry point for APIs",
        "Code compilation",
        "File storage"
      ],
      "answer": 1,
      "explanation": "API Gateway is a single entry point routing requests to appropriate microservices."
    },
    {
      "question": "What does BFF stand for?",
      "options": [
        "Backend For Frontend",
        "Best Friend Forever",
        "Buffer Forward Function",
        "Binary File Format"
      ],
      "answer": 0,
      "explanation": "Backend For Frontend � separate API Gateway per client type."
    },
    {
      "question": "Which API Gateway is built on NGINX?",
      "options": [
        "Traefik",
        "Kong",
        "Zuul",
        "KrakenD"
      ],
      "answer": 1,
      "explanation": "Kong is built on NGINX with a plugin architecture."
    },
    {
      "question": "What pattern combines multiple service responses?",
      "options": [
        "Gateway Routing",
        "Gateway Aggregation",
        "Gateway Offloading",
        "Edge Gateway"
      ],
      "answer": 1,
      "explanation": "Gateway Aggregation combines multiple service responses into one."
    },
    {
      "question": "What is North-South traffic?",
      "options": [
        "Service-to-service",
        "External-to-service",
        "Database traffic",
        "Cache traffic"
      ],
      "answer": 1,
      "explanation": "North-South traffic enters from outside the cluster (external client to service)."
    },
    {
      "question": "What does an API Gateway NOT typically do?",
      "options": [
        "Authentication",
        "Rate limiting",
        "Data storage",
        "Request transformation"
      ],
      "answer": 2,
      "explanation": "API Gateways handle routing and cross-cutting concerns, not persistent data storage."
    }
  ]
};
