export const tm_session_affinity = {
  "id": "tm-session-affinity",
  "title": "Session Affinity",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Session affinity (sticky sessions) ensures all requests from a client during a session go to the same backend server.",
    "Useful for stateful applications where session data is stored locally on the server.",
    "Implemented via: cookie-based (JSESSIONID), IP hash, header-based affinity.",
    "Trade-off: reduces load balancing effectiveness — some servers get more load than others."
  ],
  "laymanDefinition": "Session affinity is like a patient seeing the same doctor at a clinic. After your first visit, the receptionist always sends you to Dr. Smith (the same doctor) so they remember your history. This is helpful but means Dr. Smith might get more patients than Dr. Jones.",
  "deepDive": [
    {
      "heading": "What is Session Affinity",
      "text": "Session affinity ensures a client\\'s requests go to the same backend server for the duration of their session. This is typically done by creating a mapping between the client (via cookie, IP, or header) and a specific server. The mapping has a TTL after which it expires and a new server may be selected."
    },
    {
      "heading": "Cookie-Based Affinity",
      "text": "Load balancer sets a cookie (e.g., AWS ALB\\'s AWSALB) with the target server encoded. Client sends cookie on subsequent requests. Load balancer reads cookie and routes to the same server. Cookie TTL determines stickiness duration."
    },
    {
      "heading": "IP Hash Affinity",
      "text": "Client IP is hashed to determine the target server. Same IP = same hash = same server. No cookie needed. Problem: many users behind one NAT (corporate) all hash to the same server. Not recommended for most use cases."
    },
    {
      "heading": "Header-Based Affinity",
      "text": "Uses a custom header (X-Client-ID, X-User-ID) for stickiness. Application sets the header once. More granular than IP hash. Works even when clients change IPs (mobile users)."
    },
    {
      "heading": "Session Affinity vs Distributed Sessions",
      "text": "Session affinity: simpler, server stores session locally, server crash loses session. Distributed sessions: session stored in external store (Redis, memcached), any server can handle request, no affinity needed. Prefer distributed sessions for resilience."
    }
  ],
  "interviewAnswer": "Session affinity is a simple approach for state management — use cookie-based affinity for most cases. Set reasonable cookie TTL (hours). Prefer distributed sessions (Redis) for resilience over server-local sessions.",
  "interviewQuestions": [
    {
      "question": "What is session affinity?",
      "answer": "All requests from a client go to the same backend server during a session."
    },
    {
      "question": "How does cookie-based affinity work?",
      "answer": "Load balancer sets a cookie identifying the backend. Client sends cookie on subsequent requests."
    },
    {
      "question": "Problem with IP hash?",
      "answer": "Users behind same NAT all hash to same server — uneven load distribution."
    },
    {
      "question": "What is JSESSIONID?",
      "answer": "A cookie used by Java servlets for session affinity."
    },
    {
      "question": "Session affinity vs distributed sessions?",
      "answer": "Affinity: simple, server-local state. Distributed: external store (Redis), any server can handle."
    },
    {
      "question": "When to avoid session affinity?",
      "answer": "When high availability is critical — server crash loses all sessions on that server."
    },
    {
      "question": "What TTL for affinity cookie?",
      "answer": "Hours typically. Too short: affinity breaks mid-session. Too long: can\\'t rebalance."
    },
    {
      "question": "What is a session?",
      "answer": "A sequence of requests from the same client within a time window."
    },
    {
      "question": "How do cloud LBs implement affinity?",
      "answer": "AWS ALB: stickiness cookie. GCP LB: cookie-based. Azure: ARR affinity cookie."
    },
    {
      "question": "Does session affinity work with WebSockets?",
      "answer": "Yes, but WebSocket connections are typically long-lived and naturally stick to one server."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Session Affinity</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client A</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">First request</text><line x1=\"140\" y1=\"48\" x2=\"180\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Load Balancer</text><text x=\"270\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sticky? → Hash IP → Server 2</text><line x1=\"350\" y1=\"48\" x2=\"380\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"390\" y=\"35\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"435\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server 1</text><text x=\"435\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No affinity</text><rect x=\"390\" y=\"70\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"435\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server 2</text><text x=\"435\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Client A → stick</text><rect x=\"10\" y=\"70\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"95\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cookie: AWSALB=server2</text><text x=\"95\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cookie-based</text><rect x=\"10\" y=\"105\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"95\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IP Hash: 192.168.1.5→srv2</text><text x=\"95\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">IP-based</text><text x=\"240\" y=\"160\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Session Affinity: Route same client to same server</text><text x=\"240\" y=\"253\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> for session continuity.</text></svg>",
  "codeExamples": [
    {
      "title": "NGINX IP Hash",
      "useCase": "IP-based affinity.",
      "code": "upstream backend {\n  ip_hash;\n  server backend1:3000;\n  server backend2:3000;\n  server backend3:3000;\n}\n\nserver { location / { proxy_pass http://backend; } }",
      "description": "NGINX ip_hash ensures same client IP goes to same backend."
    },
    {
      "title": "AWS ALB Sticky Sessions",
      "useCase": "Cookie-based affinity.",
      "code": "resource \"aws_lb_target_group\" \"app\" {\n  name = \"app-tg\"\n  port = 80\n  protocol = \"HTTP\"\n  stickiness {\n    type = \"lb_cookie\"\n    cookie_duration_seconds = 86400\n    enabled = true\n  }\n}",
      "description": "AWS ALB target group with cookie-based stickiness enabled."
    },
    {
      "title": "HAProxy Cookie Affinity",
      "useCase": "Cookie-based.",
      "code": "backend app\n  balance roundrobin\n  cookie SERVERID insert indirect nocache\n  server web1 10.0.1.1:80 check cookie s1\n  server web2 10.0.2.1:80 check cookie s2",
      "description": "HAProxy inserts a cookie to track which server handled the request."
    },
    {
      "title": "Node.js Session Affinity Middleware",
      "useCase": "Header-based.",
      "code": "app.use((req, res, next) => {\n  const userId = req.headers[\"x-user-id\"];\n  if (userId) {\n    const serverIdx = hashCode(userId) % serverCount;\n    req.targetServer = servers[serverIdx];\n  }\n  next();\n});",
      "description": "Application-level affinity based on user ID header hash."
    },
    {
      "title": "Traefik Stickiness",
      "useCase": "Cookie-based.",
      "code": "http:\n  services:\n    app:\n      loadBalancer:\n        stickiness:\n          cookie:\n            name: traefik-session\n            httpOnly: true",
      "description": "Traefik sticky sessions via cookie configuration."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is session affinity?",
      "options": [
        "Routing all client requests to same server",
        "Distributing across all servers",
        "Health checking",
        "SSL termination"
      ],
      "answer": 0,
      "explanation": "Session affinity keeps a client on one server."
    },
    {
      "question": "How does cookie-based affinity work?",
      "options": [
        "Server sets cookie with backend ID",
        "Client IP hashes",
        "Header routing",
        "Random assignment"
      ],
      "answer": 0,
      "explanation": "Cookie stores target server ID."
    },
    {
      "question": "Problem with IP hash affinity?",
      "options": [
        "Too many cookies",
        "NAT causes uneven distribution",
        "Slow performance",
        "No SSL support"
      ],
      "answer": 1,
      "explanation": "Users behind one NAT all go to same server."
    },
    {
      "question": "What is JSESSIONID?",
      "options": [
        "Java session cookie",
        "IP hash",
        "Load balancer config",
        "SSL cert"
      ],
      "answer": 0,
      "explanation": "Java servlet session cookie."
    },
    {
      "question": "When to prefer distributed sessions?",
      "options": [
        "Single server",
        "High availability needed",
        "Small apps",
        "Static sites"
      ],
      "answer": 1,
      "explanation": "Distributed sessions survive server crashes."
    },
    {
      "question": "What is the main trade-off of session affinity?",
      "options": [
        "Better security",
        "Uneven load distribution",
        "Faster performance",
        "Lower cost"
      ],
      "answer": 1,
      "explanation": "Some servers get more load than others."
    }
  ]
};
