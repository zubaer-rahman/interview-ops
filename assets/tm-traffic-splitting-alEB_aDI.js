const e={id:"tm-traffic-splitting",title:"Traffic Splitting",difficulty:"intermediate",estimatedMinutes:15,tldr:["Traffic splitting divides incoming traffic between two or more backend versions based on configurable percentages.","Common uses: canary releases, A/B testing, blue-green deployments, gradual migrations.","Splitting can be at: DNS level, load balancer, service mesh, or application level.","Unlike load balancing (distribution for capacity), traffic splitting is about routing to different versions for testing."],laymanDefinition:"Traffic splitting is like a water pipe with two valves. 90% flows to House A (old version) and 10% to House B (new version). You can gradually turn Valve A down and Valve B up. If House B reports no leaks, you eventually send 100% to B.",deepDive:[{heading:"Traffic Splitting vs Load Balancing",text:"Load balancing: distributing load across identical servers. Traffic splitting: directing portions to different versions for testing. Load balancing uses Round Robin. Traffic splitting uses weighted percentages. Can be combined."},{heading:"Header/Cookie-Based Splitting",text:"More precise: route specific users based on headers or cookies. Example: X-Canary header ? canary. Cookie hash ? deterministic. Enables consistent user experience (same user always sees same version)."},{heading:"Traffic Mirroring (Shadowing)",text:"Send a copy of traffic to new version without affecting response. Mirrored traffic is dark � responses ignored. Used for testing with production traffic. No risk to users. Supported by Istio, Envoy, NGINX."},{heading:"Gradual Rollout Strategies",text:"Start 1% ? monitor ? 5% ? monitor ? 25% ? 50% ? 100%. Auto-rollback if error rate exceeds threshold. Canary analysis compares metrics between old and new."}],interviewAnswer:"Traffic splitting enables safe, gradual rollouts. Start small (1-5%), monitor aggressively, increase gradually. Use header/cookie-based splitting for deterministic routing. Traffic mirroring lets you test with production data risk-free.",interviewQuestions:[{question:"What is traffic splitting?",answer:"Dividing traffic between different versions by configurable percentages."},{question:"Difference between splitting and load balancing?",answer:"Splitting: different versions for testing. Balancing: identical servers for capacity."},{question:"What is traffic mirroring?",answer:"Sending a copy of production traffic to a new version without affecting live response."},{question:"What is a typical canary sequence?",answer:"1% ? 5% ? 25% ? 50% ? 100% with monitoring and auto-rollback."},{question:"How does header-based splitting work?",answer:"Requests with specific headers routed to canary version."},{question:"What is a gradual rollout?",answer:"Slowly increasing traffic percentage to new version while monitoring."},{question:"What is automated rollback?",answer:"If error rate exceeds threshold, traffic auto-redirected to stable version."},{question:"Can traffic splitting be used for A/B testing?",answer:"Yes. Route 50% to A and 50% to B, compare metrics."},{question:"What is sticky canary?",answer:"A user routed to canary stays on canary for subsequent requests."},{question:"What tools support traffic splitting?",answer:"Istio, Envoy, NGINX, HAProxy, AWS App Mesh, Linkerd, Kong."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Traffic Splitting</text><rect x="10" y="35" width="120" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="70" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">All Traffic</text><text x="70" y="54" text-anchor="middle" font-size="9" fill="#ddd">100%</text><line x1="130" y1="48" x2="160" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="170" y="35" width="140" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="240" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Traffic Splitter</text><text x="240" y="54" text-anchor="middle" font-size="9" fill="#ddd">90 / 10 split</text><line x1="310" y1="48" x2="340" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="170" y1="60" x2="170" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="350" y="35" width="130" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="415" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stable v1</text><text x="415" y="54" text-anchor="middle" font-size="9" fill="#ddd">90%</text><rect x="350" y="70" width="130" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="415" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Canary v2</text><text x="415" y="89" text-anchor="middle" font-size="9" fill="#ddd">10%</text><rect x="10" y="70" width="150" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="85" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Gradual: 1%?5%?50%?100%</text><text x="85" y="89" text-anchor="middle" font-size="9" fill="#ddd">Progressive</text><rect x="10" y="105" width="150" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="85" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auto-rollback on errors</text><text x="85" y="124" text-anchor="middle" font-size="9" fill="#ddd">Safety</text><text x="240" y="175" font-size="9" fill="#666" text-anchor="middle">Traffic Splitting: Route portions of traffic to di</text><text x="240" y="187" font-size="9" fill="#666" text-anchor="middle">fferent versions for canary and A/B testing.</text></svg>',codeExamples:[{title:"Istio VirtualService Splitting",useCase:"Weight-based canary.",code:`apiVersion: networking.istio.io/v1beta1
kind: VirtualService
spec:
  hosts: [myapp-service]
  http:
  - match:
    - headers:
        x-canary:
          exact: "true"
    route:
    - destination: { host: myapp-service, subset: v2 }
  - route:
    - destination: { host: myapp-service, subset: v1 }
      weight: 90
    - destination: { host: myapp-service, subset: v2 }
      weight: 10`,description:"Istio VirtualService splits 90/10 with header-based override."},{title:"Envoy Traffic Splitting",useCase:"Weighted clusters.",code:`route_config:
  virtual_hosts:
  - name: backend
    domains: ["*"]
    routes:
NaN
      route:
        weighted_clusters:
          clusters:
          - name: myapp-v1
            weight: 90
          - name: myapp-v2
            weight: 10`,description:"Envoy weighted cluster routing splits traffic 90/10."},{title:"NGINX Split Clients",useCase:"Mirror and split.",code:`http {
  split_clients "\${remote_addr}\${http_user_agent}" $variant {
    10%   "canary";
    *     "stable";
  }
  server {
    location / {
      proxy_pass http://stable-backend;
      mirror /mirror;
    }
    location /mirror { internal; proxy_pass http://canary-backend; }
  }
}`,description:"NGINX mirror and split_clients for canary testing."},{title:"Flagger Automated Canary",useCase:"Progressive delivery.",code:`apiVersion: flagger.app/v1beta1
kind: Canary
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  analysis:
    interval: 1m
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
    - name: request-success-rate
      threshold: 99`,description:"Flagger automates canary with metrics-based traffic promotion."},{title:"Custom Traffic Split Middleware",useCase:"App-level splitting.",code:`app.use((req, res, next) => {
  const userId = req.user?.id || req.ip;
  const hash = crypto.createHash('md5').update(String(userId)).digest('hex');
  const userPercent = parseInt(hash.slice(0,4), 16) % 100;
  req.useCanary = userPercent < parseInt(process.env.CANARY_PERCENT || '0');
  next();
});`,description:"Application-level splitting with consistent user hashing."}],mcqQuestions:[{question:"Purpose of traffic splitting?",options:["Increasing capacity","Testing new versions safely","Improving security","Reducing costs"],answer:1,explanation:"Routes traffic to different versions for safe testing."},{question:"What is traffic mirroring?",options:["Duplicating traffic to secondary version","Reflecting traffic","Caching traffic","Blocking traffic"],answer:0,explanation:"Copy of live traffic to new version without affecting responses."},{question:"Typical canary starting percentage?",options:["50%","1-5%","100%","25%"],answer:1,explanation:"Canary starts at 1-5% for safe testing."},{question:"Difference splitting vs load balancing?",options:["Different versions vs identical servers","Same thing","External vs internal","HTTP vs TCP"],answer:0,explanation:"Splitting targets different versions; balancing identical servers."},{question:"Provides automated canary analysis?",options:["Flagger","Docker","Kubernetes","Helm"],answer:0,explanation:"Flagger automates canary with metrics-based promotion."},{question:"How to ensure user sees same version?",options:["Random routing","Consistent hashing","Round Robin","Least Connections"],answer:1,explanation:"User ID hash ensures same version for same user."}]};export{e as tm_traffic_splitting};
