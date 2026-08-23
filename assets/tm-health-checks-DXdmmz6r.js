const e={id:"tm-health-checks",title:"Health Checks",difficulty:"intermediate",estimatedMinutes:15,tldr:["Health checks monitor the availability and health of backend servers by sending periodic probes.","Types: TCP (port open), HTTP (200 OK), HTTPS (SSL + HTTP), custom (application-specific endpoint).","Components: check interval, timeout, healthy/unhealthy thresholds, health check endpoint.","Used by: load balancers, service mesh, orchestrators (K8s), DNS failover, circuit breakers."],laymanDefinition:"Health checks are like a parent checking on their kids every 30 minutes. They knock on the door (probe). If the kid answers 'I'm fine' (HTTP 200), all good. If no answer for 3 tries, they enter the room (remove from rotation). They keep checking even after removal (recovery detection).",deepDive:[{heading:"Health Check Types",text:"TCP: checks port is open (telnet). Simple, no app logic validation. HTTP: GET /health, expects 200. Validates the HTTP server is running. HTTPS: HTTP + TLS check. Custom: checks specific app logic (DB connection, cache, disk space). HTTP is most common."},{heading:"Health Check Parameters",text:"Interval: how often (5-30s). Timeout: max wait for response (2-5s). Healthy threshold: consecutive successes to mark healthy (2-3). Unhealthy threshold: consecutive failures to mark unhealthy (2-5). Grace period: delay first check after startup."},{heading:"Liveness vs Readiness (K8s)",text:"Liveness: is the app alive? If fails → restart container. Readiness: is the app ready to serve? If fails → remove from Service endpoints. Startup: for slow-starting apps. Liveness checks restart unhealthy apps. Readiness checks route traffic only to ready pods."},{heading:"Health Check Best Practices",text:"Dedicated /health endpoint separate from business logic. Check critical dependencies (DB, cache). Keep it fast (<1s). Log health check failures separately. Set appropriate thresholds — too sensitive = flapping, too lenient = slow detection. Use gRPC health check for microservices."}],interviewAnswer:"Health checks are essential for automated failure detection. Use HTTP health checks with a /health endpoint. Check real dependencies but keep checks fast. Distinguish liveness (restart) from readiness (traffic). Set thresholds to avoid flapping. Monitor health check status and trends.",interviewQuestions:[{question:"What is a health check?",answer:"Periodic probe to verify a server is functioning correctly."},{question:"What is a TCP health check?",answer:"Checks if a TCP port is open — no application logic."},{question:"What is an HTTP health check?",answer:"Makes HTTP request, expects 200 OK — validates the web server."},{question:"What is a custom health check?",answer:"Application-specific endpoint checking DB, cache, disk, etc."},{question:"What is unhealthy threshold?",answer:"Consecutive failures before marking server unhealthy."},{question:"What is K8s liveness probe?",answer:"Determines if pod should be restarted."},{question:"What is K8s readiness probe?",answer:"Determines if pod should receive traffic."},{question:"What is flapping?",answer:"Server repeatedly transitioning between healthy/unhealthy."},{question:"What is a grace period?",answer:"Delay before first health check after startup."},{question:"What is gRPC health check?",answer:"gRPC health checking protocol for microservices."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Health Checks</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Probe</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">GET /health every 10s</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="160" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="270" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Health Checker</text><text x="270" y="54" text-anchor="middle" font-size="9" fill="#ddd">200 OK → healthy</text><line x1="350" y1="48" x2="380" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="390" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="440" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server</text><text x="440" y="54" text-anchor="middle" font-size="9" fill="#ddd">/health endpoint</text><rect x="10" y="70" width="170" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="95" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">2 failed: unhealthy</text><text x="95" y="89" text-anchor="middle" font-size="9" fill="#ddd">Remove from LB</text><rect x="190" y="70" width="160" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="270" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3 success: healthy</text><text x="270" y="89" text-anchor="middle" font-size="9" fill="#ddd">Add back to LB</text><text x="240" y="115" font-size="9" fill="#666" text-anchor="middle">Health Checks: Periodic probes detect failures. Un</text><text x="240" y="208" font-size="9" fill="#666" text-anchor="middle">healthy servers removed from rotation.</text></svg>',codeExamples:[{title:"Nginx Health Checks (Active)",useCase:"Active HTTP checks.",code:`upstream backend {
  server backend1:3000;
  server backend2:3000;

  # Active health checks (nginx plus)
  health_check interval=10s fails=3 passes=2;
}

server {
  location / { proxy_pass http://backend; }
}`,description:"Nginx active health checks with interval and threshold configuration."},{title:"Kubernetes Health Probes",useCase:"Liveness + Readiness.",code:`apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: app
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          periodSeconds: 5
          failureThreshold: 3`,description:"K8s liveness (restart) + readiness (traffic) probes."},{title:"Custom Health Endpoint (Node)",useCase:"App-level check.",code:`app.get("/health", async (req, res) => {
  const checks = {
    status: "healthy",
    timestamp: new Date().toISOString()
  };
  try {
    await db.query("SELECT 1");
    checks.database = "ok";
  } catch (e) {
    checks.database = "error";
    checks.status = "unhealthy";
  }
  const status = checks.status === "healthy" ? 200 : 503;
  res.status(status).json(checks);
});`,description:"Custom health endpoint checks database connectivity."},{title:"AWS NLB Health Check Config",useCase:"LB health check.",code:`resource "aws_lb_target_group" "app" {
  port = 80
  protocol = "HTTP"
  health_check {
    enabled = true
    path = "/health"
    interval = 30
    timeout = 5
    healthy_threshold = 2
    unhealthy_threshold = 3
    matcher = "200"
  }
}`,description:"AWS NLB health check configuration."}],mcqQuestions:[{question:"What does an HTTP health check do?",options:["Checks port is open","GET /health expecting 200","Ping server","Check DNS"],answer:1,explanation:"HTTP health check sends GET and expects 200 OK."},{question:"What does unhealthy threshold control?",options:["How often to check","Failures before marking unhealthy","Timeout duration","Response size"],answer:1,explanation:"Consecutive failures before marking unhealthy."},{question:"K8s liveness probe failure leads to?",options:["Pod restart","Traffic removal","Scaling up","Alerting"],answer:0,explanation:"Liveness failure = restart container."},{question:"K8s readiness probe failure leads to?",options:["Pod restart","Traffic removal","Node drain","Pod deletion"],answer:1,explanation:"Readiness failure = remove from Service endpoints."},{question:"What is flapping?",options:["Pod crashing","Server toggling healthy/unhealthy","Network partition","DNS error"],answer:1,explanation:"Flapping = rapid transitions between healthy/unhealthy."},{question:"Best health check endpoint design?",options:["Return static page","Check critical dependencies","Return random data","Heavy computation"],answer:1,explanation:"Health endpoint should verify critical dependencies."}]};export{e as tm_health_checks};
