export const tm_reverse_proxy = {
  "id": "tm-reverse-proxy",
  "title": "Reverse Proxy",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "A reverse proxy sits in front of backend servers, accepting client requests and forwarding them to the appropriate backend.",
    "Clients interact only with the reverse proxy, never directly with backend servers � this adds a layer of abstraction and security.",
    "Common reverse proxies: Nginx, HAProxy, Traefik, Envoy, Apache HTTP Server, Caddy.",
    "Benefits: load balancing, SSL termination, caching, compression, security filtering, rate limiting, and hiding internal topology."
  ],
  "laymanDefinition": "A reverse proxy is like a company receptionist. Visitors (clients) talk to the receptionist instead of wandering into offices. The receptionist directs them to the right department (backend server). The receptionist can also screen visitors (security), take messages (caching), and handle the mailroom (SSL termination).",
  "deepDive": [
    {
      "heading": "Forward vs Reverse Proxy",
      "text": "Forward proxy: represents the client (hides client identity). Reverse proxy: represents the server (hides server topology). Forward proxies are client-side; reverse proxies are server-side. A forward proxy helps clients access blocked content; a reverse proxy protects and optimizes backend servers."
    },
    {
      "heading": "SSL Termination",
      "text": "The reverse proxy handles TLS/SSL decryption, relieving backend servers of cryptographic overhead. Backend servers communicate with the proxy via plain HTTP on internal networks. Benefits: centralized certificate management, reduced CPU load on backends, easier certificate rotation."
    },
    {
      "heading": "Caching and Compression",
      "text": "Reverse proxy can cache frequently requested responses (static assets, API responses). Cache hit = instant response without hitting backend. Compression (gzip, brotli) reduces bandwidth. Cache invalidation strategies: TTL-based, purge on update, versioned URLs."
    },
    {
      "heading": "Security Features",
      "text": "DDoS protection: rate limiting, connection limits. Web Application Firewall (WAF): filter malicious requests. IP allow/block lists. Hide internal IP addresses (server headers). Request filtering (block SQL injection, XSS patterns). Access logging and monitoring."
    }
  ],
  "interviewAnswer": "A reverse proxy is the front door to your backend infrastructure � it handles SSL, caching, load balancing, and security filtering. Position it as the single entry point for all client traffic. Configure it to terminate TLS, cache static content, and route requests to healthy backends. Essential for any production deployment.",
  "interviewQuestions": [
    {
      "question": "What is a reverse proxy?",
      "answer": "A server that sits in front of backend servers, forwarding client requests to them and returning the responses."
    },
    {
      "question": "What is the difference between forward and reverse proxy?",
      "answer": "Forward proxy hides the client (client-side). Reverse proxy hides the server (server-side)."
    },
    {
      "question": "What is SSL termination?",
      "answer": "The reverse proxy handles TLS decryption so backend servers communicate over plain HTTP internally."
    },
    {
      "question": "What are common reverse proxy software?",
      "answer": "Nginx, HAProxy, Traefik, Envoy, Apache HTTP Server, Caddy."
    },
    {
      "question": "How does a reverse proxy improve security?",
      "answer": "Hides internal topology, filters malicious requests, rate limits, terminates SSL, provides WAF capabilities."
    },
    {
      "question": "How can a reverse proxy improve performance?",
      "answer": "Caching responses, compressing data, connection pooling, load balancing, and offloading SSL."
    },
    {
      "question": "What is the difference between reverse proxy and API gateway?",
      "answer": "API gateway adds API-specific features (routing, auth, rate limiting, API versioning) on top of reverse proxy capabilities."
    },
    {
      "question": "Can a reverse proxy cache dynamic content?",
      "answer": "Yes, with proper cache headers (Cache-Control, ETag). Dynamic content caching requires careful invalidation strategies."
    },
    {
      "question": "What is proxy buffering?",
      "answer": "The proxy reads the entire response from the backend before sending it to the client. Improves slow client performance."
    },
    {
      "question": "How does a reverse proxy handle WebSockets?",
      "answer": "Requires specific configuration to upgrade connections. Nginx: proxy_set_header Upgrade $http_upgrade."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Reverse Proxy</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser/App</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Reverse Proxy</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nginx / HAProxy / Traefik</text><line x1=\"310\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"415\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backend 1</text><text x=\"415\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App Server</text><rect x=\"350\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"415\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backend 2</text><text x=\"415\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App Server</text><rect x=\"350\" y=\"105\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"415\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backend 3</text><text x=\"415\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App Server</text><rect x=\"10\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SSL Termination</text><text x=\"75\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">TLS offload</text><rect x=\"10\" y=\"105\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"75\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Caching + WAF</text><text x=\"75\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Performance + Security</text><text x=\"240\" y=\"155\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Reverse Proxy: Single entry point handling SSL, ca</text><text x=\"240\" y=\"167\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ching, security, and routing to backend servers.</text></svg>",
  "codeExamples": [
    {
      "title": "Nginx Reverse Proxy Config",
      "useCase": "Basic reverse proxy setup.",
      "code": "server {\n  listen 80;\n  server_name api.example.com;\n\n  location / {\n    proxy_pass http://localhost:3000;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n\n    proxy_buffering on;\n    proxy_buffer_size 4k;\n    proxy_buffers 8 4k;\n  }\n}",
      "description": "Nginx reverse proxy forwarding to a Node.js backend with proper headers."
    },
    {
      "title": "Traefik Reverse Proxy (Docker)",
      "useCase": "Dynamic reverse proxy config.",
      "code": "services:\n  traefik:\n    image: traefik:v3.0\n    command:\n      - \"--providers.docker=true\"\n      - \"--entrypoints.web.address=:80\"\n      - \"--entrypoints.websecure.address=:443\"\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    volumes:\n      - \"/var/run/docker.sock:/var/run/docker.sock\"\n\n  whoami:\n    image: traefik/whoami\n    labels:\n      - \"traefik.http.routers.whoami.rule=Host(`app.example.com`)\"\n      - \"traefik.http.routers.whoami.entrypoints=web\"",
      "description": "Traefik auto-discovers services via Docker labels for dynamic reverse proxying."
    },
    {
      "title": "Caddy Reverse Proxy with Auto HTTPS",
      "useCase": "Simplest reverse proxy.",
      "code": "api.example.com {\n  reverse_proxy localhost:3000\n\n  # Auto HTTPS via Let's Encrypt\n  # Caddy handles TLS automatically\n\n  # Additional options:\n  # reverse_proxy /api/* localhost:3000\n  # reverse_proxy /static/* localhost:4000\n  # header /api Access-Control-Allow-Origin *\n}\n\n# Caddyfile is the simplest reverse proxy config\n# Caddy automatically obtains and renews TLS certs",
      "description": "Caddy provides the simplest reverse proxy configuration with automatic HTTPS."
    },
    {
      "title": "HAProxy Reverse Proxy Config",
      "useCase": "High-performance reverse proxy.",
      "code": "global\n  maxconn 4096\n\ndefaults\n  mode http\n  timeout connect 5s\n  timeout client 30s\n  timeout server 30s\n\nfrontend web_frontend\n  bind *:80\n  bind *:443 ssl crt /etc/ssl/certs/example.pem\n  default_backend app_servers\n\nbackend app_servers\n  balance roundrobin\n  server app1 10.0.0.1:3000 check\n  server app2 10.0.0.2:3000 check\n  server app3 10.0.0.3:3000 check",
      "description": "HAProxy reverse proxy with SSL termination and multiple backend servers."
    },
    {
      "title": "Reverse Proxy Caching (Nginx)",
      "useCase": "Cache configuration.",
      "code": "proxy_cache_path /var/cache/nginx levels=1:2\n  keys_zone=my_cache:10m max_size=1g\n  inactive=60m use_temp_path=off;\n\nserver {\n  location /api/ {\n    proxy_cache my_cache;\n    proxy_cache_key \"$scheme$request_method$host$request_uri\";\n    proxy_cache_valid 200 5m;\n    proxy_cache_valid 404 1m;\n    proxy_cache_use_stale error timeout updating;\n    add_header X-Cache-Status $upstream_cache_status;\n\n    proxy_pass http://backend;\n  }\n}",
      "description": "Nginx reverse proxy caching with cache status header and stale-while-revalidate."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does a reverse proxy hide?",
      "options": [
        "Client identity",
        "Server topology",
        "User passwords",
        "IP addresses of clients"
      ],
      "answer": 1,
      "explanation": "A reverse proxy hides backend server topology from clients."
    },
    {
      "question": "What is SSL termination?",
      "options": [
        "Starting SSL handshake",
        "Offloading TLS decryption to the proxy",
        "Ending SSL connections",
        "Certificate generation"
      ],
      "answer": 1,
      "explanation": "SSL termination means the proxy handles TLS decryption, offloading it from backend servers."
    },
    {
      "question": "Which is a reverse proxy?",
      "options": [
        "Squid",
        "Nginx",
        "Shadowsocks",
        "OpenVPN"
      ],
      "answer": 1,
      "explanation": "Nginx is commonly used as a reverse proxy. Squid is a forward proxy."
    },
    {
      "question": "What header tells the backend the original client IP?",
      "options": [
        "X-Forwarded-For",
        "X-Real-IP",
        "Both A and B",
        "Host"
      ],
      "answer": 2,
      "explanation": "Both X-Forwarded-For and X-Real-IP convey the original client IP."
    },
    {
      "question": "What is proxy buffering?",
      "options": [
        "Storing files on disk",
        "Reading entire response before sending to client",
        "Encrypting data",
        "Compressing responses"
      ],
      "answer": 1,
      "explanation": "Proxy buffering reads the full response from the backend before forwarding to the client."
    },
    {
      "question": "Which reverse proxy supports automatic HTTPS?",
      "options": [
        "Nginx",
        "HAProxy",
        "Caddy",
        "Apache"
      ],
      "answer": 2,
      "explanation": "Caddy automatically obtains and renews TLS certificates via Let\\'s Encrypt."
    }
  ]
};
