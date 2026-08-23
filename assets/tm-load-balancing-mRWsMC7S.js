const e={id:"tm-load-balancing",title:"Load Balancing",difficulty:"intermediate",estimatedMinutes:20,tldr:["Load balancing distributes incoming network traffic across multiple backend servers to ensure no single server is overwhelmed.","Improves availability (redundancy), scalability (add/remove servers), and performance (distribute load).","Algorithms: Round Robin, Least Connections, IP Hash, Weighted Round Robin, Random, Least Response Time.","Load balancers can be hardware (F5 BIG-IP), software (Nginx, HAProxy), or cloud (AWS ELB, GCP LB)."],laymanDefinition:"Load balancing is like having multiple checkout lanes at a supermarket. Instead of one long line, the store manager directs customers to the shortest line (Least Connections) or sends each customer to the next available lane (Round Robin). If one checkout lane closes, customers are redirected to others.",deepDive:[{heading:"Load Balancing Algorithms",text:"Round Robin: requests distributed sequentially. Least Connections: sends to server with fewest active connections. IP Hash: hashes client IP to determine server (session persistence). Weighted: servers with higher capacity get more traffic. Least Response Time: sends to fastest-responding server. Random: simple but less balanced."},{heading:"Layer 4 vs Layer 7 Load Balancing",text:"Layer 4 (Transport): routes based on IP and TCP/UDP ports. Faster, less resource intensive. Cannot inspect HTTP headers. Layer 7 (Application): routes based on HTTP headers, cookies, paths. Slower but more intelligent routing. Modern LBs often support both."},{heading:"Health Checks",text:"Active: LB periodically pings backend servers (HTTP GET /health, TCP connect). Passive: LB monitors actual request success/failure rates. Servers failing health checks are removed from rotation. Health check configuration: interval, timeout, unhealthy threshold, healthy threshold."},{heading:"Sticky Sessions (Session Persistence)",text:"Ensures a client\\'s requests always go to the same backend server. Methods: cookie-based (LB sets cookie), IP Hash, URL-encoded session ID. Important for stateful applications. Not needed for stateless applications (store session in Redis). Inconsistent with load balancing goals � minimizes redundancy."}],interviewAnswer:"Load balancing is essential for high availability and scalability. Choose Layer 4 for raw performance (TCP/UDP), Layer 7 for intelligent routing (HTTP). Always configure health checks. Use sticky sessions only when necessary (stateless apps don't need them). Round Robin is a good default algorithm.",interviewQuestions:[{question:"What is load balancing?",answer:"Distributing incoming traffic across multiple backend servers to improve availability, scalability, and performance."},{question:"What is Round Robin?",answer:"Requests are distributed sequentially across servers in order. Simple and fair distribution."},{question:"What is Least Connections?",answer:"Sends new requests to the server with the fewest active connections. Best when request durations vary."},{question:"What is the difference between L4 and L7 load balancing?",answer:"L4 routes based on IP/port (faster). L7 routes based on HTTP content (smarter)."},{question:"What are health checks?",answer:"Periodic checks that verify backend servers are healthy. Unhealthy servers are removed from rotation."},{question:"What is a load balancer VIP?",answer:"Virtual IP � the single IP address clients connect to, which the load balancer maps to backend servers."},{question:"What is a weighted load balancing?",answer:"Servers are assigned weights. Higher-weight servers receive proportionally more traffic."},{question:"What is active-passive load balancing?",answer:"One server handles traffic; the passive server takes over only if the active fails."},{question:"What is active-active load balancing?",answer:"All servers handle traffic simultaneously. True load distribution."},{question:"What is DNS load balancing?",answer:"Multiple A records for a domain � DNS returns different IPs to different clients. Simple but no health checks."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Load Balancing</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Traffic</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="170" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="235" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Load Balancer</text><text x="235" y="54" text-anchor="middle" font-size="9" fill="#ddd">HAProxy / Nginx / ELB</text><line x1="320" y1="48" x2="350" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="90" x2="150" y2="110" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="150" y1="120" x2="150" y2="140" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="360" y="35" width="120" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="420" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server 1</text><text x="420" y="54" text-anchor="middle" font-size="9" fill="#ddd">Healthy</text><rect x="360" y="75" width="120" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="420" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server 2</text><text x="420" y="94" text-anchor="middle" font-size="9" fill="#ddd">Healthy</text><rect x="360" y="115" width="120" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="420" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server 3</text><text x="420" y="134" text-anchor="middle" font-size="9" fill="#ddd">Unhealthy removed</text><rect x="10" y="70" width="130" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="75" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Algorithm</text><text x="75" y="78" text-anchor="middle" font-size="9" fill="#ddd">Round Robin / Least Con</text><text x="75" y="89" text-anchor="middle" font-size="9" fill="#ddd">n</text><rect x="10" y="105" width="130" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="75" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Health Checks</text><text x="75" y="124" text-anchor="middle" font-size="9" fill="#ddd">Auto-remove failures</text><text x="240" y="175" font-size="9" fill="#666" text-anchor="middle">Load Balancing: Distribute traffic across servers.</text><text x="240" y="187" font-size="9" fill="#666" text-anchor="middle"> Algorithms, health checks, L4 vs L7.</text></svg>',codeExamples:[{title:"HAProxy Load Balancer Config",useCase:"L4 + L7 load balancing.",code:`global
  maxconn 4096

defaults
  mode http
  timeout connect 5s
  timeout client 30s
  timeout server 30s

frontend web
  bind *:80
  default_backend apps

backend apps
  balance roundrobin
  option httpchk GET /health
  server app1 10.0.0.1:3000 check inter 5s
  server app2 10.0.0.2:3000 check inter 5s
  server app3 10.0.0.3:3000 check inter 5s`,description:"HAProxy load balancer with Round Robin, health checks."},{title:"Nginx Load Balancing",useCase:"Upstream configuration.",code:`http {
  upstream backend {
    least_conn;  # algorithm: least connections
    server 10.0.0.1:3000 weight=3;
    server 10.0.0.2:3000;
    server 10.0.0.3:3000 backup;  # passive backup
  }

  server {
    listen 80;
    location / {
      proxy_pass http://backend;
      proxy_next_upstream error timeout;
      proxy_set_header Host $host;
    }
  }
}`,description:"Nginx upstream load balancing with Least Connections, weights, and backup server."},{title:"AWS ALB with Target Group",useCase:"Cloud load balancer.",code:`resource "aws_lb" "alb" {
  name            = "my-alb"
  internal        = false
  load_balancer_type = "application"
  security_groups = [aws_security_group.lb.id]
  subnets         = aws_subnet.public[*].id
}

resource "aws_lb_target_group" "tg" {
  name     = "app-targets"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    path                = "/health"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 3
  }
}`,description:"AWS Application Load Balancer with target group and health check configuration."},{title:"Node.js Cluster (Built-in LB)",useCase:"Multi-process Node.js.",code:`const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(\`Master \${process.pid} spawning \${numCPUs} workers\`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died. Forking...\`);
    cluster.fork();  // auto-restart
  });
} else {
  // Worker: runs application
  const app = require('./app');
  app.listen(3000);
}`,description:"Node.js cluster module distributes requests across worker processes (Round Robin on Linux)."},{title:"Consistent Hashing LB",useCase:"Minimize cache misses on resharding.",code:`const crypto = require('crypto');

class ConsistentHash {
  constructor(nodes, replicas = 100) {
    this.ring = {};
    this.keys = [];
    for (const node of nodes) {
      for (let i = 0; i < replicas; i++) {
        const hash = this._hash(\`\${node}:\${i}\`);
        this.ring[hash] = node;
        this.keys.push(hash);
      }
    }
    this.keys.sort((a, b) => a - b);
  }

  _hash(key) {
    return parseInt(crypto.createHash('md5')
      .update(key).digest('hex').slice(0, 8), 16);
  }

  getNode(key) {
    const hash = this._hash(key);
    const idx = this.keys.findIndex(k => k >= hash);
    return this.ring[this.keys[idx % this.keys.length]];
  }
}`,description:"Consistent hashing minimizes redistribution when servers are added or removed."}],mcqQuestions:[{question:"What does a load balancer distribute?",options:["Code","Traffic across servers","Data storage","User sessions"],answer:1,explanation:"Load balancers distribute incoming network traffic across backend servers."},{question:"What algorithm sends to the server with fewest connections?",options:["Round Robin","Least Connections","IP Hash","Random"],answer:1,explanation:"Least Connections sends new requests to the server with the fewest active connections."},{question:"What layer does HTTP header-based routing use?",options:["Layer 2","Layer 4","Layer 7","Layer 3"],answer:2,explanation:"Layer 7 (Application) load balancing routes based on HTTP headers, cookies, URLs."},{question:"What removes unhealthy servers from rotation?",options:["Rate limiting","Health checks","SSL termination","Weight adjustment"],answer:1,explanation:"Health checks periodically verify server health and remove unhealthy servers."},{question:"What is a backup server in load balancing?",options:["Always handles traffic","Handles traffic only when others fail","Has highest weight","Is never used"],answer:1,explanation:"A backup server is passive � it handles traffic only when primary servers are unavailable."},{question:"What technique minimizes cache misses during server changes?",options:["Round Robin","Consistent hashing","Sticky sessions","Weighted distribution"],answer:1,explanation:"Consistent hashing minimizes the number of keys that need remapping when servers are added/removed."}]};export{e as tm_load_balancing};
