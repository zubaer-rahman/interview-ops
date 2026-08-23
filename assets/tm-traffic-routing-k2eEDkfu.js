const e={id:"tm-traffic-routing",title:"Traffic Routing",difficulty:"intermediate",estimatedMinutes:15,tldr:["Traffic routing directs incoming requests to the appropriate backend service based on rules and conditions.","Routes can be based on: URL path, HTTP method, headers, query parameters, client IP, user agent, or custom conditions.","Enables: blue-green deployments, canary releases, A/B testing, multi-tenant routing, and geographical routing.","Implementations: API Gateways (Kong, AWS), service mesh (Istio, Linkerd), ingress controllers (Nginx Ingress, Traefik)."],laymanDefinition:"Traffic routing is like a city's traffic management system. Instead of every car going to the same road, traffic lights and signs (routing rules) direct delivery trucks to the industrial area, commuters to residential zones, and emergency vehicles to the nearest hospital � all based on the vehicle's characteristics (headers, URL, origin).",deepDive:[{heading:"Routing Rules and Conditions",text:"Path-based: /api/users ? user service, /api/orders ? order service. Method-based: GET ? read replica, POST ? write master. Header-based: X-Region header ? specific regional deployment. Query-based: ?version=v2 ? v2 service. Client IP: whitelist/blacklist. Weight-based: 90% v1, 10% v2."},{heading:"Route Matching Priority",text:"Most specific path wins. Pattern: /users/:id matches before /users/*. Regex routes evaluate in order � first match wins. Exact match > prefix match > regex match. Headers and query params evaluated after path match. Default/fallback route catches unmatched requests."},{heading:"Dynamic vs Static Routing",text:"Static: routing rules defined at startup, require restart to change. Simple, predictable. Dynamic: routing rules can be changed at runtime without restart (e.g., via API or database). Enables progressive delivery, feature flags, and A/B testing without redeployment."},{heading:"Routing in Microservices",text:"API Gateway handles external ? internal routing (North-South). Service mesh handles internal ? internal routing (East-West). Service discovery integrates with routing for dynamic backend selection. Circuit breakers and retries are part of routing resilience."}],interviewAnswer:"Traffic routing is the brain of your architecture � directing each request to the right service. Combine path, header, and weight-based rules for flexible deployments. Use dynamic routing for progressive delivery (canary, blue-green). Service mesh enables sophisticated internal routing for microservices.",interviewQuestions:[{question:"What is traffic routing?",answer:"Directing incoming requests to appropriate backend services based on rules and conditions."},{question:"What types of routing rules exist?",answer:"Path-based, header-based, query-based, method-based, weight-based, IP-based, and custom conditions."},{question:"What is weight-based routing?",answer:"Distributing traffic across services by percentage weights � used for canary deployments and A/B testing."},{question:"What is the difference between static and dynamic routing?",answer:"Static: rules fixed at startup. Dynamic: rules can change at runtime without restart."},{question:"What is North-South vs East-West routing?",answer:"North-South: external to internal (API Gateway). East-West: internal service to service (Service Mesh)."},{question:"What is the specific-over-generic rule?",answer:"More specific routes take priority over generic ones. /users/:id matches before /users/*."},{question:"What is header-based routing used for?",answer:"A/B testing (X-Experiment header), multi-tenant (X-Tenant-ID), API versioning (Accept header)."},{question:"How does service discovery integrate with routing?",answer:"Router queries service registry to find healthy backend instances. Enables dynamic scaling."},{question:"What is a fallback route?",answer:"A default route that catches requests not matching any specific rule � returns 404 or redirects."},{question:"What is the difference between routing and load balancing?",answer:"Routing determines which service to send to. Load balancing distributes within that service\\'s instances."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Traffic Routing</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Incoming request</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="170" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="235" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Traffic Router</text><text x="235" y="43" text-anchor="middle" font-size="9" fill="#ddd">Gateway / Service Mesh / Ingre</text><text x="235" y="54" text-anchor="middle" font-size="9" fill="#ddd">ss</text><line x1="320" y1="48" x2="350" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="82" x2="150" y2="105" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="108" x2="150" y2="130" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="360" y="35" width="120" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="420" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Path /api/users</text><text x="420" y="54" text-anchor="middle" font-size="9" fill="#ddd">Users Service</text><rect x="360" y="75" width="120" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="420" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Header X-v2</text><text x="420" y="94" text-anchor="middle" font-size="9" fill="#ddd">Canary v2</text><rect x="360" y="115" width="120" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="420" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Weight 10%</text><text x="420" y="134" text-anchor="middle" font-size="9" fill="#ddd">A/B Test</text><rect x="10" y="70" width="130" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="75" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Rules Engine</text><text x="75" y="89" text-anchor="middle" font-size="9" fill="#ddd">Path + Header + Weight</text><rect x="10" y="105" width="130" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="75" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Service Registry</text><text x="75" y="124" text-anchor="middle" font-size="9" fill="#ddd">Discover backends</text><text x="240" y="175" font-size="9" fill="#666" text-anchor="middle">Traffic Routing: Direct requests to services based</text><text x="240" y="187" font-size="9" fill="#666" text-anchor="middle"> on path, headers, weights, and conditions.</text></svg>',codeExamples:[{title:"Nginx Ingress Routing Rules",useCase:"Kubernetes ingress routing.",code:`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /users
        pathType: Prefix
        backend:
          service:
            name: user-service
            port:
              number: 80
      - path: /orders
        pathType: Prefix
        backend:
          service:
            name: order-service
            port:
              number: 80`,description:"Kubernetes Ingress routes path-based traffic to different backend services."},{title:"Header-Based Routing (Traefik)",useCase:"Route by HTTP header.",code:`# Traefik dynamic routing config
http:
  routers:
    stable:
      rule: "Host(\`app.example.com\`) && Headers(\`X-Release\`, \`stable\`)"
      service: app-v1
    canary:
      rule: "Host(\`app.example.com\`) && Headers(\`X-Release\`, \`canary\`)"
      service: app-v2
    default:
      rule: "Host(\`app.example.com\`)"
      service: app-v1

  services:
    app-v1:
      loadBalancer:
        servers:
          - url: "http://10.0.0.1:3000"
    app-v2:
      loadBalancer:
        servers:
          - url: "http://10.0.0.2:3000"`,description:"Header-based routing with Traefik � direct traffic based on X-Release header value."},{title:"Weight-Based Routing (Istio)",useCase:"Canary traffic splitting.",code:`apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: app-routing
spec:
  hosts:
  - app-service
  http:
  - route:
    - destination:
        host: app-service
        subset: v1
      weight: 90
    - destination:
        host: app-service
        subset: v2
      weight: 10
---
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: app-subsets
spec:
  host: app-service
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2`,description:"Istio VirtualService splits traffic 90/10 between two versions of a service."},{title:"Query-Based Routing (Express)",useCase:"Route by query parameter.",code:`app.use((req, res, next) => {
  const version = req.query['api-version'];

  if (version === 'v2') {
    // Rewrite path to v2 handler
    req.url = '/v2' + req.path;
  }
  next();
});

app.get('/v1/users', v1Handler);
app.get('/v2/users', v2Handler);`,description:"Query-parameter-based routing to support API versioning."},{title:"Dynamic Routing with Redis",useCase:"Change routes without restart.",code:`// Route store in Redis
async function getRoute(path) {
  const route = await redis.hget("routes", path);
  return route ? JSON.parse(route) : null;
}

// Dynamic route middleware
app.use(async (req, res, next) => {
  const route = await getRoute(req.path);
  if (route) {
    req.targetService = route.service;
    req.targetPort = route.port;
    // Proxy to dynamic target
    return proxy.web(req, res, {
      target: \`http://\${route.service}:\${route.port}\`
    });
  }
  next();  // fall through to static routes
});

// Update route at runtime:
redis.hset("routes", "/api/users", JSON.stringify({
  service: "user-svc-v2",
  port: 3000
}));`,description:"Redis-backed dynamic routing � update routes at runtime without application restart."}],mcqQuestions:[{question:"What is path-based routing?",options:["Routing by HTTP method","Routing by URL path","Routing by client IP","Routing by response time"],answer:1,explanation:"Path-based routing directs requests based on the URL path component."},{question:"What is weight-based routing used for?",options:["Load balancing","Canary deployments","SSL termination","Caching"],answer:1,explanation:"Weight-based routing distributes traffic by percentage for canary releases and A/B testing."},{question:"What is North-South traffic?",options:["Service to service","External to internal","Cluster to database","Cache to app"],answer:1,explanation:"North-South refers to external client traffic entering the system."},{question:"What enables dynamic routing?",options:["Config file","Runtime rule store","Code recompile","Docker restart"],answer:1,explanation:"Dynamic routing uses a runtime data store (Redis, database, API) for live rule updates."},{question:"What is the most specific route matching rule?",options:["Longest path wins","Regex match first","First defined wins","Last defined wins"],answer:0,explanation:"Most specific (longest) path match takes priority."},{question:"Which tool is used for service mesh routing?",options:["Nginx","Istio","HAProxy","AWS ELB"],answer:1,explanation:"Istio provides sophisticated East-West traffic routing for service mesh architectures."}]};export{e as tm_traffic_routing};
