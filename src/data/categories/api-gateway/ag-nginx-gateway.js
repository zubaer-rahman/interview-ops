export const ag_nginx_gateway = {
  "id": "ag-nginx-gateway",
  "title": "NGINX API Gateway",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "NGINX is a high-performance web server, reverse proxy, and load balancer that can be configured as an API Gateway.",
    "Core capabilities: request routing, SSL/TLS termination, rate limiting, authentication, caching, request/response transformation.",
    "NGINX uses declarative config: http, server, location, upstream blocks. NGINX Plus adds active health checks, JWT validation, session persistence, key-value store.",
    "NGINX excels at rate limiting (leaky bucket), SSL termination, caching (proxy_cache), and request routing with regex location matching."
  ],
  "laymanDefinition": "NGINX as an API Gateway is like a highly efficient postal sorting facility. Mail (API request) arrives, address checked (URL), postage verified (rate limit), sender ID checked (auth), sorted to correct bin (routing), delivery logged (logging). All processing at lightning speed.",
  "deepDive": [
    {
      "heading": "NGINX as Reverse Proxy",
      "text": "NGINX receives client requests and forwards to backends via proxy_pass. Benefits: single entry point, backend isolation, centralized SSL termination, response buffering, error handling. Supports WebSocket proxying via upgrade headers."
    },
    {
      "heading": "Rate Limiting with NGINX",
      "text": "limit_req_zone defines shared memory zone with rate. limit_req applies it. Leaky bucket: burst allows spikes, nodelay returns 503 immediately. Can limit by IP ($binary_remote_addr) or other variables."
    },
    {
      "heading": "Auth in NGINX",
      "text": "Basic Auth: auth_basic + htpasswd file. Subrequest auth: auth_request to external auth service. JWT (NGINX Plus): auth_jwt + auth_jwt_key_file. Client cert auth: ssl_client_certificate."
    },
    {
      "heading": "Caching for APIs",
      "text": "proxy_cache_path /data/nginx/cache keys_zone=api_cache:10m levels=1:2 max_size=1g inactive=60m. proxy_cache api_cache; proxy_cache_valid 200 1m; proxy_cache_use_stale error timeout;."
    }
  ],
  "interviewAnswer": "NGINX is the most performant API Gateway for simple to moderate traffic. It excels at rate limiting, SSL termination, caching, and routing. Config model is powerful but complex. NGINX Plus adds enterprise features. Consider Kong (on NGINX/OpenResty) for complex routing.",
  "interviewQuestions": [
    {
      "question": "What is NGINX?",
      "answer": "High-performance web server, reverse proxy, and load balancer functioning as an API Gateway."
    },
    {
      "question": "How does NGINX handle routing?",
      "answer": "Through server blocks (virtual hosts) and location blocks (URL path matching with regex)."
    },
    {
      "question": "What is proxy_pass?",
      "answer": "Directive that forwards requests to a backend server or upstream group."
    },
    {
      "question": "How does NGINX rate limiting work?",
      "answer": "Define limit_req_zone (shared memory + rate) and apply with limit_req. Leaky bucket algorithm."
    },
    {
      "question": "What does NGINX Plus add over OSS?",
      "answer": "Active health checks, JWT validation, key-value store, session persistence, extended monitoring."
    },
    {
      "question": "How to add auth in NGINX?",
      "answer": "Basic Auth (htpasswd), subrequest to auth service, client certificates, or JWT (Plus)."
    },
    {
      "question": "What is the upstream block for?",
      "answer": "Defines backend server group with load balancing (round-robin, least_conn, ip_hash)."
    },
    {
      "question": "How does NGINX handle SSL?",
      "answer": "ssl_certificate and ssl_certificate_key directives. Terminates SSL, proxies over HTTP."
    },
    {
      "question": "What is nodelay in rate limiting?",
      "answer": "Returns 503 immediately when burst exceeded instead of queuing."
    },
    {
      "question": "How does NGINX cache API responses?",
      "answer": "Define proxy_cache_path with cache zone, enable with proxy_cache."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">NGINX API Gateway</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP request</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NGINX</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reverse Proxy</text><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rate Limit</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">limit_req</text><line x1=\"110\" y1=\"83\" x2=\"140\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth</text><text x=\"200\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Basic/JWT</text><line x1=\"250\" y1=\"83\" x2=\"280\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">proxy_cache</text><line x1=\"110\" y1=\"118\" x2=\"140\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Upstream</text><text x=\"200\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">LB Backend</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NGINX API Gateway</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">High-performance reverse proxy. Ra</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">te limiting, auth, caching, SSL te</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rmination, load balancing.</text></svg>",
  "codeExamples": "<text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">NGINX: Ultra-fast reverse proxy and API Gateway. C</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">onfig-driven rate limiting, auth, caching, load ba</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lancing.</text>",
  "mcqQuestions": [
    {
      "title": "Basic NGINX API Gateway Config",
      "useCase": "Reverse proxy with routing.",
      "code": "http {\n  upstream backend {\n    server api1.example.com:3000 weight=3;\n    server api2.example.com:3000;\n  }\n  server {\n    listen 443 ssl;\n    server_name api.myapp.com;\n    ssl_certificate /etc/ssl/certs/api.crt;\n    ssl_certificate_key /etc/ssl/private/api.key;\n    location /users/ { proxy_pass http://user-service:4000; }\n    location /orders/ { proxy_pass http://backend; }\n    location /health { return 200 \"OK\"; }\n  }\n}",
      "description": "Basic NGINX API Gateway with upstream, SSL, and routing."
    },
    {
      "title": "NGINX Rate Limiting",
      "useCase": "Limit per client IP.",
      "code": "http {\n  limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;\n  server {\n    location /api/ {\n      limit_req zone=api_limit burst=20 nodelay;\n      limit_req_status 429;\n      proxy_pass http://backend;\n    }\n  }\n}",
      "description": "NGINX rate limiting with burst and nodelay."
    },
    {
      "title": "JWT Validation (NGINX Plus)",
      "useCase": "Validate JWT.",
      "code": "http {\n  auth_jwt_key_cache_ttl 600;\n  server {\n    location /api/secure/ {\n      auth_jwt \"Secure API\" token=$http_authorization;\n      auth_jwt_key_file /etc/nginx/jwks.json;\n      proxy_set_header X-User-ID $jwt_payload_sub;\n      proxy_set_header X-User-Role $jwt_payload_role;\n      proxy_pass http://backend;\n    }\n  }\n}",
      "description": "NGINX Plus JWT validation with claim extraction."
    },
    {
      "title": "NGINX Response Caching",
      "useCase": "Cache backend responses.",
      "code": "http {\n  proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=api_cache:10m max_size=1g inactive=60m;\n  server {\n    location /api/products/ {\n      proxy_cache api_cache;\n      proxy_cache_valid 200 302 5m;\n      proxy_cache_use_stale error timeout updating;\n      add_header X-Cache-Status $upstream_cache_status;\n      proxy_pass http://product-service:5000;\n    }\n  }\n}",
      "description": "NGINX response caching with stale-while-revalidate."
    },
    {
      "title": "Basic Auth with htpasswd",
      "useCase": "Simple auth.",
      "code": "# htpasswd -c /etc/nginx/.htpasswd user1\nserver {\n  location /api/admin/ {\n    auth_basic \"Admin Area\";\n    auth_basic_user_file /etc/nginx/.htpasswd;\n    proxy_pass http://admin-service:6000;\n  }\n}",
      "description": "Basic Auth and subrequest-based auth pattern."
    },
    {
      "question": "NGINX API Gateway — What helps team collaboration?",
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
      "question": "NGINX API Gateway — What reduces errors most?",
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
      "question": "NGINX API Gateway — What improves speed?",
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
      "question": "NGINX API Gateway — What is key for monitoring?",
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
      "question": "NGINX API Gateway — What ensures quality?",
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
