const e={id:"ag-traefik",title:"Traefik",difficulty:"intermediate",estimatedMinutes:15,tldr:["Traefik is a cloud-native reverse proxy and API Gateway that auto-discovers services from Docker, Kubernetes, Consul, and more.","Key concepts: EntryPoints (ports), Routers (request matching), Middlewares (processing chain), Services (backends).","Traefik auto-discovers from Docker labels, K8s Ingress/CRDs, Consul, etcd — no manual config needed.","Built-in middlewares: RateLimit, CircuitBreaker, Retry, BasicAuth, ForwardAuth, Headers, IPWhiteList, RedirectRegex, Compress."],laymanDefinition:"Traefik is like an airport air traffic controller that knows every plane (service). When a flight (API request) comes in, the controller directs it to the correct gate (service). If a gate closes (service failure), traffic reroutes automatically. New planes discovered automatically.",deepDive:[{heading:"Auto Service Discovery",text:"Traefik watches provider APIs: K8s (Ingress/CRD/Service), Docker (container labels), Consul/etcd (KV stores). New service deployed = Traefik auto-creates routers and updates LB — no config reload needed."},{heading:"Routers and Middlewares",text:"Router matches by host, path, method, headers, query params. Routes to Service through Middleware chain: RateLimit -> Retry -> ForwardAuth -> AddHeader -> Service. Middlewares reusable across routers."},{heading:"TCP and UDP Support",text:"TCP and UDP routing beyond HTTP. TCP routers match by SNI and port. Ideal for databases, gRPC, WebSockets. TCP middlewares: IPWhiteList, RateLimit."},{heading:"Dashboard and Metrics",text:"Built-in dashboard at :8080. Routers, services, middlewares, health. Metrics: Prometheus, Datadog, InfluxDB, StatsD, OpenTelemetry. Access logs in JSON or common format."}],interviewAnswer:"Traefik is the easiest API Gateway for auto-discovery environments. Minimal config on K8s or Docker. Clean middleware chain model. Built-in dashboard and metrics. Best for simple to moderate setups; consider Kong for complex enterprise needs.",interviewQuestions:[{question:"What is Traefik?",answer:"Cloud-native reverse proxy with auto-discovery from Docker, K8s, Consul, and more."},{question:"Main concepts?",answer:"EntryPoints (ports), Routers (matching), Middlewares (processing), Services (backends)."},{question:"How does Traefik discover services?",answer:"Auto from Docker labels, K8s CRDs/Ingress, Consul, etcd."},{question:"What is a Middleware?",answer:"Request/response processing: rate limiting, auth, headers, redirect, retry, circuit breaker."},{question:"Does Traefik support TCP?",answer:"Yes, with SNI matching for databases, gRPC, WebSockets."},{question:"How does Traefik handle SSL?",answer:"Automatic Let\\'s Encrypt via ACME. Wildcard and custom certs."},{question:"v1 vs v2 difference?",answer:"v2: TCP/UDP routing, middleware CRDs, redesigned config."},{question:"Metrics providers?",answer:"Prometheus, Datadog, InfluxDB, StatsD, OpenTelemetry."},{question:"Canary deployments?",answer:"Yes, via weighted round-robin with traffic splitting."},{question:"Dashboard?",answer:"Web UI at :8080 showing routers, services, middlewares, health."}],diagramSvg:`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Traefik</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">api.myapp.com</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">EntryPoint</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">Port 443</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Router</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Host+Path match</text><line x1="110" y1="83" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="200" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Middlewares</text><text x="200" y="78" text-anchor="middle" font-size="9" fill="#ddd">RateLimit->Auth->R</text><text x="200" y="89" text-anchor="middle" font-size="9" fill="#ddd">etry</text><line x1="250" y1="83" x2="280" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="90" x2="150" y2="110" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Service</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">Backend</text><line x1="110" y1="118" x2="140" y2="118" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="105" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="200" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Discovery</text><text x="200" y="124" text-anchor="middle" font-size="9" fill="#ddd">Docker/k8s/Consul</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Traefik API Gateway</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Auto-discovery. EntryPoints,Router</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">s,Middlewares,Services. Let's Encr</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ypt, dashboard.</text></svg>`,codeExamples:'<text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Traefik: Cloud-native reverse proxy with auto-disc</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">overy. Routers+Middlewares+Services.</text>',mcqQuestions:[{title:"Traefik Docker Labels",useCase:"Docker label config.",code:`version: "3.8"
services:
  whoami:
    image: traefik/whoami
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.whoami.rule=Host(\`api.myapp.com\`) && PathPrefix(\`/whoami\`)"
      - "traefik.http.routers.whoami.entrypoints=web-secure"
      - "traefik.http.routers.whoami.tls=true"
      - "traefik.http.services.whoami.loadbalancer.server.port=80"
      - "traefik.http.middlewares.rate-limit.ratelimit.average=100"
      - "traefik.http.routers.whoami.middlewares=rate-limit@docker"`,description:"Traefik Docker labels for routing, TLS, rate limiting."},{title:"Traefik K8s IngressRoute",useCase:"CRD with canary.",code:`apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: api-ingress
spec:
  entryPoints:
    - web-secure
  routes:
    - kind: Rule
      match: Host(\`api.myapp.com\`) && PathPrefix(\`/users\`)
      services:
        - name: user-service
          port: 3000
          weight: 80
        - name: user-service-v2
          port: 3000
          weight: 20
      middlewares:
        - name: rate-limit
  tls:
    certResolver: letsencrypt`,description:"K8s IngressRoute with canary (80/20) traffic split."},{title:"Traefik Static Config (traefik.yml)",useCase:"Server-level config.",code:`entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: web-secure
          scheme: https
  web-secure:
    address: ":443"
providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
  kubernetesCRD:
    enabled: true
certificatesResolvers:
  letsencrypt:
    acme:
      email: admin@myapp.com
      storage: /certs/acme.json
      httpChallenge:
        entryPoint: web
metrics:
  prometheus:
    addEntryPointsLabels: true`,description:"Traefik static config with Let\\'s Encrypt and auto-discovery."},{title:"ForwardAuth Middleware",useCase:"External auth.",code:`apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: forward-auth
spec:
  forwardAuth:
    address: "http://auth-service:8000/validate"
    trustForwardHeader: true
    authResponseHeaders:
      - X-Auth-User
      - X-Auth-Role`,description:"ForwardAuth delegates auth to external service."},{title:"Rate Limiting Middleware",useCase:"Traffic control.",code:`apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: rate-limit
spec:
  rateLimit:
    average: 100
    burst: 200
    period: 1m`,description:"Rate limiting middleware."},{question:"Traefik — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Traefik — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Traefik — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Traefik — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Traefik — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as ag_traefik};
