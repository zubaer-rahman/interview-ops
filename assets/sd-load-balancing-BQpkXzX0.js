const e={id:"sd-load-balancing",title:"Load Balancing",difficulty:"intermediate",estimatedMinutes:20,tldr:["A load balancer distributes incoming traffic across multiple backend servers to ensure availability, scalability, and fault tolerance.","Algorithms: Round Robin (simple, equal distribution), Least Connections (send to least busy), IP Hash (stickiness), Weighted (unequal capacity), Random.","Types: Layer 4 (TCP/UDP — faster, no content awareness), Layer 7 (HTTP/HTTPS — content-aware routing, SSL termination, headers).","Health checks: active (periodic ping/HTTP) and passive (monitor response failures). Draining: stop sending to server before removal."],laymanDefinition:'A load balancer is like a restaurant host who seats customers at available tables. Round Robin: "next table in rotation." Least Connections: "the nearly empty section." IP Hash: "same waiter serves same table every time." Health check: "that table is dirty, skip it." Without the host, one section gets overwhelmed while another is empty.',deepDive:[{heading:"Load Balancing Algorithms",text:"Round Robin: distributes sequentially — simple but ignores server load. Least Connections: sends to server with fewest active connections — good for variable request times. IP Hash: hashes client IP to select server — enables session stickiness. Weighted: servers get proportion of traffic based on capacity. Random: statistically same as RR."},{heading:"Layer 4 vs Layer 7",text:"L4 (TCP): operates at transport layer, forwards packets based on IP + port. Faster, less CPU, no content inspection. Cannot do content-based routing (path, headers, cookies). L7 (HTTP/HTTPS): operates at application layer, terminates SSL, inspects content. Can route by URL path, host header, cookies. More features, more resource intensive."},{heading:"Health Checks and Failover",text:"Active: LB pings /health endpoint every N seconds (e.g., 5s interval, 2s timeout, 3 failures = unhealthy). Passive: LB monitors response status (e.g., 3 consecutive 5xx = unhealthy). Graceful shutdown: server tells LB to drain before stopping. Failover: traffic automatically routed to healthy servers."},{heading:"Sticky Sessions (Session Affinity)",text:"LB routes same client to same server. Uses: cookie (LB sets cookie with server ID), IP hash (client IP → server), header (custom header value). Problem: uneven load distribution, server failure loses sessions. Better: use external session store (Redis) and stateless design."}],interviewAnswer:"Use L4 LB for simple TCP traffic, L7 for HTTP APIs needing content-based routing. Prefer round-robin or least-connections for algorithms. Always configure health checks. Avoid sticky sessions — use stateless design with external session store. Use DNS load balancing as the first level, then LB per region.",interviewQuestions:[{question:"What does a load balancer do?",answer:"Distributes incoming traffic across multiple backend servers for availability and scalability."},{question:"L4 vs L7 load balancer?",answer:"L4: TCP level, fast, no content awareness. L7: HTTP level, can route by path/headers/cookies."},{question:"Round Robin vs Least Connections?",answer:"RR: sequential, equal distribution. LC: sends to least busy server."},{question:"What is a health check?",answer:"Periodic check (ping/HTTP) to verify server is healthy. Unhealthy servers are removed from rotation."},{question:"What is draining?",answer:"Stop sending new connections to server being removed, let existing requests finish."},{question:"Why avoid sticky sessions?",answer:"Uneven load, loss on server failure. Use external session store (Redis) instead."},{question:"What is IP Hash?",answer:"Algorithm that maps client IP to server — ensures same client goes to same server."},{question:"What is DNS load balancing?",answer:"Multiple A records for same domain, DNS round-robins. Simple first level of LB."},{question:"What is weighted load balancing?",answer:"Servers receive traffic proportional to their capacity (weight)."},{question:"What is a reverse proxy?",answer:"Sits in front of servers, can do LB, caching, SSL termination, compression (e.g., Nginx, HAProxy)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Load Balancing</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Request</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Load Balancer</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Distribute</text><line x1="200" y1="77" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="80" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="50" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server</text><text x="50" y="111" text-anchor="middle" font-size="9" fill="#ddd">Instance 1</text><rect x="100" y="85" width="80" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="140" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server</text><text x="140" y="111" text-anchor="middle" font-size="9" fill="#ddd">Instance 2</text><rect x="190" y="85" width="80" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="230" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server</text><text x="230" y="111" text-anchor="middle" font-size="9" fill="#ddd">Instance N</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Health Check</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">/health</text><rect x="150" y="125" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="200" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Algorithm</text><text x="200" y="151" text-anchor="middle" font-size="9" fill="#ddd">RR/LC/IP Hash</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Load Balancing</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">L4 (TCP) or L7 (HTTP). RR, LC, IP Hash. Health checks, draining. Stateless design pre</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">ferred over sticky sessions.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Load Balancing: Distribute traffic across servers.</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle"> L4/L7, RR/LC algorithms, health checks.</text></svg>',codeExamples:[{title:"Nginx L7 Load Balancer",useCase:"HTTP load balancing.",code:`http {
  upstream backend {
    least_conn;  # or: round_robin(default), ip_hash, weight
    server api1.example.com weight=3 max_fails=3 fail_timeout=30s;
    server api2.example.com weight=2;
    server api3.example.com backup;  # backup only
  }
  server {
    listen 443 ssl;
    server_name api.myapp.com;
    location / {
      proxy_pass http://backend;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_next_upstream error timeout invalid_header http_500;
    }
  }
}`,description:"Nginx L7 HTTP load balancer with least_conn and health checks."},{title:"HAProxy L4 Load Balancer",useCase:"TCP load balancing.",code:`global
  log /dev/log local0
  maxconn 4096
defaults
  log global
  mode tcp
  timeout connect 5000ms
  timeout client 50000ms
  timeout server 50000ms
frontend api_frontend
  bind *:443
  default_backend api_backend
backend api_backend
  balance roundrobin
  option tcp-check
  server api1 10.0.1.10:3000 check inter 5s fall 3 rise 2
  server api2 10.0.1.11:3000 check inter 5s fall 3 rise 2
  server api3 10.0.1.12:3000 check inter 5s fall 3 rise 2`,description:"HAProxy L4 TCP load balancer with health checks."},{title:"Health Check Endpoint",useCase:"Express health check.",code:`app.get("/health", async (req, res) => {
  const health = {
    status: "ok", timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  };
  try {
    await db.query("SELECT 1");
    health.db = "connected";
  } catch (err) {
    health.db = "error";
    health.status = "degraded";
  }
  try {
    await redis.ping();
    health.redis = "connected";
  } catch (err) {
    health.redis = "error";
    health.status = "degraded";
  }
  const statusCode = health.status === "ok" ? 200 : 503;
  res.status(statusCode).json(health);
});`,description:"Comprehensive health check endpoint for load balancer."},{title:"DNS Load Balancing with Route53",useCase:"Multi-region.",code:`# AWS Route53 DNS routing
# Simple routing: multiple A records
api.example.com. A 10.0.1.10
api.example.com. A 10.0.1.11
api.example.com. A 10.0.1.12
# Weighted routing:
api.example.com. A 10.0.1.10 weight 50
api.example.com. A 10.0.1.11 weight 30
api.example.com. A 10.0.1.12 weight 20
# Latency-based:
api.example.com. A 10.0.1.10 region us-east-1
api.example.com. A 10.0.2.10 region eu-west-1
api.example.com. A 10.0.3.10 region ap-southeast-1`,description:"DNS load balancing with AWS Route53 weighted and latency-based routing."}],mcqQuestions:[{question:"L4 load balancer operates at?",options:["Application layer","Transport layer","Network layer","Session layer"],answer:1,explanation:"L4 operates at TCP/UDP transport layer."},{question:"Which algorithm has session stickiness?",options:["Round Robin","Least Connections","IP Hash","Weighted"],answer:2,explanation:"IP Hash maps client IP to same server."},{question:"What does a health check do?",options:["Balance traffic","Verify server health","Cache content","Encrypt traffic"],answer:1,explanation:"Verifies server is healthy before sending traffic."},{question:"Purpose of draining?",options:["Speed up","Let requests finish before removal","Reset connections","Cache warmup"],answer:1,explanation:"Allow existing requests to complete."},{question:"Why stateless over sticky sessions?",options:["More secure","Better load distribution + fault tolerance","Faster","Cheaper"],answer:1,explanation:"Even load distribution, survive server failure."},{question:"What is proxy_next_upstream?",options:["Nginx retry on failure","HAProxy config","Round robin variant","Caching directive"],answer:0,explanation:"Nginx retries failed request on next upstream."},{question:"Load Balancing — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Load Balancing — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Load Balancing — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Load Balancing — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_load_balancing};
