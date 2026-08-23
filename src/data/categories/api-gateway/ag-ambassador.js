export const ag_ambassador = {
  "id": "ag-ambassador",
  "title": "Ambassador",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Ambassador (CNCF project) is a Kubernetes-native API Gateway built on Envoy Proxy, designed for cloud-native microservices.",
    "Ambassador uses declarative config through Kubernetes CRDs — no separate config files needed.",
    "Key resources: Mapping (route), Module (global config), Filter (auth/transform), RateLimit, AuthService, TracingService, DevPortal.",
    "Ambassador integrates with service meshes and supports gRPC, WebSocket, OpenAPI, and external auth natively."
  ],
  "laymanDefinition": "Ambassador is like a building concierge in a smart apartment complex (Kubernetes). Instead of a separate rulebook, the concierge reads instructions posted on each apartment door (Kubernetes CRDs). When a delivery arrives (API request), the concierge checks instructions, verifies ID (auth), and routes to the correct apartment.",
  "deepDive": [
    {
      "heading": "Ambassador Architecture",
      "text": "Runs as a K8s deployment with Envoy Proxy as data plane. Agent watches K8s resources and updates Envoy config via xDS APIs. Key CRDs: Mapping (route rules), Module (HTTP settings), Filter (auth/transform), RateLimitService, AuthService."
    },
    {
      "heading": "Ambassador Mappings",
      "text": "Mapping CRDs define how requests route to services. Key fields: prefix (URL), host (domain), service (backend), rewrite, method, headers, timeout, cors. Can reference Filters and RateLimits."
    },
    {
      "heading": "Auth in Ambassador",
      "text": "External auth: AuthService CRD points to external HTTP service, returns 200 (allow) or 401/403 (deny). Built-in Filters: JWT (JWKS-based), OAuth2, Basic Auth. No external service needed for these."
    },
    {
      "heading": "Rate Limiting",
      "text": "RateLimitService CRD configures an external rate limit service. RateLimit CRD defines label-based limits. Supports per-user, per-IP, per-route domains with configurable limits."
    }
  ],
  "interviewAnswer": "Ambassador is the best choice for Kubernetes-native environments. Use Mappings for routing, Filters for auth, RateLimits for traffic control. CRD-based config is ideal for GitOps. Works well with service meshes. Strong alternative to Kong for cloud-native.",
  "interviewQuestions": [
    {
      "question": "What is Ambassador?",
      "answer": "K8s-native API Gateway on Envoy Proxy, using CRDs for declarative config."
    },
    {
      "question": "What does a Mapping define?",
      "answer": "Route rules: URL prefix, host, backend service, rewrite, methods, timeouts, CORS."
    },
    {
      "question": "How does Ambassador handle auth?",
      "answer": "Via AuthService (external HTTP) or built-in Filters (JWT, OAuth2, Basic Auth)."
    },
    {
      "question": "What proxy does Ambassador use?",
      "answer": "Envoy Proxy — high-performance C++ proxy from Lyft."
    },
    {
      "question": "How does Ambassador configure itself?",
      "answer": "Watches K8s CRDs (Mappings, Filters, RateLimits) and updates Envoy via xDS."
    },
    {
      "question": "Difference between Ambassador and Kong?",
      "answer": "Ambassador is K8s-native (CRD-based). Kong is platform-agnostic with REST admin API."
    },
    {
      "question": "What is an AuthService CRD?",
      "answer": "Defines external HTTP service that validates auth for incoming requests."
    },
    {
      "question": "Can Ambassador route gRPC?",
      "answer": "Yes, via the grpc flag in Mappings."
    },
    {
      "question": "What is the Filter CRD?",
      "answer": "Defines request/response transformations: JWT validation, header mods, OAuth."
    },
    {
      "question": "What is DevPortal CRD?",
      "answer": "Serves an API documentation portal from OpenAPI specs and markdown."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Ambassador</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">External</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ambassador</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Envoy Proxy</text><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mapping</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Route rule</text><line x1=\"110\" y1=\"83\" x2=\"140\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AuthService</text><text x=\"200\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">External auth</text><line x1=\"250\" y1=\"83\" x2=\"280\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RateLimit</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Traffic control</text><line x1=\"110\" y1=\"118\" x2=\"140\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">k8s Service</text><text x=\"200\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ambassador API Gateway</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">K8s-native on Envoy. CRD-based Map</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">pings, Filters, AuthService, RateL</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">imits.</text></svg>",
  "codeExamples": "<text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Ambassador: K8s-native API Gateway on Envoy. Confi</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">gured via CRDs: Mappings, Filters, AuthService.</text>",
  "mcqQuestions": [
    {
      "title": "Basic Mapping CRD",
      "useCase": "Route external traffic.",
      "code": "apiVersion: getambassador.io/v3alpha1\nkind: Mapping\nmetadata:\n  name: user-service-mapping\nspec:\n  hostname: \"*\"\n  prefix: /api/users/\n  service: user-service:3000\n  rewrite: /\n  timeout_ms: 30000\n  cors:\n    origins:\n    - https://myapp.com\n    methods: GET, POST, PUT, DELETE",
      "description": "Ambassador Mapping CRD for routing to a K8s service."
    },
    {
      "title": "AuthService (External Auth)",
      "useCase": "Delegate auth.",
      "code": "apiVersion: getambassador.io/v3alpha1\nkind: AuthService\nmetadata:\n  name: external-auth\nspec:\n  auth_service: auth-service:8000\n  proto: http\n  timeout_ms: 5000\n  allowed_headers:\n    - Authorization\n    - Cookie\n    - X-User-ID",
      "description": "AuthService delegates auth to an external HTTP service."
    },
    {
      "title": "JWT Filter",
      "useCase": "Built-in JWT validation.",
      "code": "apiVersion: getambassador.io/v3alpha1\nkind: Filter\nmetadata:\n  name: jwt-filter\nspec:\n  JWT:\n    issuer: https://auth.example.com\n    audiences:\n    - my-api\n    jwksURI: https://auth.example.com/.well-known/jwks.json\n    forward_token: true\n---\napiVersion: getambassador.io/v3alpha1\nkind: Mapping\nmetadata:\n  name: secure-mapping\nspec:\n  prefix: /api/secure/\n  service: secure-service:4000\n  filters:\n  - name: jwt-filter",
      "description": "JWT Filter with JWKS URI for key rotation."
    },
    {
      "title": "Rate Limiting CRD",
      "useCase": "Label-based limits.",
      "code": "apiVersion: getambassador.io/v3alpha1\nkind: RateLimit\nmetadata:\n  name: user-rate-limit\nspec:\n  domain: ambassador\n  descriptors:\n    - key: user-label\n      value: \"default\"\n      rate_per_unit: 100\n      unit: minute\n---\napiVersion: getambassador.io/v3alpha1\nkind: RateLimitService\nmetadata:\n  name: ratelimit-svc\nspec:\n  service: \"edge-stack:8081\"\n  proto: grpc\n  timeout_ms: 100",
      "description": "Label-based rate limiting with per-descriptor limits."
    },
    {
      "question": "Ambassador — How to ensure reliability?",
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
      "question": "Ambassador — What helps team collaboration?",
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
      "question": "Ambassador — What reduces errors most?",
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
      "question": "Ambassador — What improves speed?",
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
      "question": "Ambassador — What is key for monitoring?",
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
      "question": "Ambassador — What ensures quality?",
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
