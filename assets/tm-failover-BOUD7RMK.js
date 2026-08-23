const e={id:"tm-failover",title:"Failover",difficulty:"advanced",estimatedMinutes:20,tldr:["Failover automatically switches to a standby/redundant system when the primary system fails.","Types: Active-Passive (standby takes over), Active-Active (all instances handle traffic, degraded if one fails).","Key metrics: RTO (Recovery Time Objective — how long to recover), RPO (Recovery Point Objective — data loss tolerance).","Failover levels: DNS failover, load balancer failover, database failover, region failover."],laymanDefinition:"Failover is like having a backup generator for your house. When the main power goes out, the backup generator automatically starts within seconds (RTO). The lights flicker but stay on. You might lose a few seconds of fridge cooling (RPO) but nothing significant.",deepDive:[{heading:"Health Monitoring",text:"Continuous checks to detect failures before failover triggers. Types: HTTP health checks (200 OK), TCP health checks (port open), custom health endpoints (DB connection, cache). Check interval: 5-30 seconds. Failure threshold: 2-5 consecutive failures."},{heading:"Automatic vs Manual Failover",text:"Automatic: faster (seconds), but risk of false positive. Manual: human judgment, slower (minutes), but more accurate. Hybrid: automatic detection + human confirmation for critical systems."},{heading:"DNS Failover",text:"Health checks remove unhealthy server\\'s DNS record. Low TTL (30-60s) for fast propagation. DNS-based failover is slow (TTL-based). Use for regional failover. Route 53, Cloudflare DNS, Azure DNS support health check-based failover."},{heading:"Database Failover",text:"Primary → replica promotion. Synchronous replication: no data loss (RPO=0) but higher latency. Asynchronous replication: potential data loss (RPO=seconds). Automatic failover tools: Patroni, Stolon, Orchestrator (MySQL), AWS RDS Multi-AZ."},{heading:"Failover Testing",text:"Chaos engineering: deliberately fail components to verify failover works. GameDays: scheduled failure testing. Regular drills for critical systems. Document runbooks for manual failover scenarios. Test both automatic and manual paths."}],interviewAnswer:"Failover is critical for high availability. Define RTO and RPO based on business requirements. Use health checks to detect failures. Test failover regularly (chaos engineering). Automate where possible but have manual fallback. Document runbooks. Monitor failover events.",interviewQuestions:[{question:"What is failover?",answer:"Automatic switch to standby system when primary fails."},{question:"What is RTO?",answer:"Recovery Time Objective — maximum acceptable downtime."},{question:"What is RPO?",answer:"Recovery Point Objective — maximum acceptable data loss."},{question:"Active-Passive vs Active-Active?",answer:"AP: standby takes over. AA: all serve traffic, degraded on failure."},{question:"What is DNS failover?",answer:"Health check removes failed server\\'s DNS record. Slow (TTL-bound)."},{question:"What is database failover?",answer:"Promote replica to primary on primary failure."},{question:"What is health check?",answer:"Periodic probe to verify system is functioning."},{question:"What is chaos engineering?",answer:"Deliberately introducing failures to test system resilience."},{question:"What is a runbook?",answer:"Documented procedure for handling failover and other incidents."},{question:"How to minimize false positives in auto-failover?",answer:"Use multiple health check sources, require consecutive failures, use low thresholds."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Failover</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Primary</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">Active</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="160" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="270" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Health Monitor</text><text x="270" y="54" text-anchor="middle" font-size="9" fill="#ddd">5 failures → failover</text><line x1="350" y1="48" x2="380" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="390" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="440" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Primary</text><text x="440" y="54" text-anchor="middle" font-size="9" fill="#ddd">FAILED</text><rect x="10" y="70" width="170" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="95" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">→ Failover triggered</text><text x="95" y="89" text-anchor="middle" font-size="9" fill="#ddd">Switch to standby</text><rect x="190" y="70" width="160" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="270" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Standby promoted</text><text x="270" y="89" text-anchor="middle" font-size="9" fill="#ddd">New primary</text><line x1="350" y1="80" x2="380" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="390" y="70" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="440" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Standby</text><text x="440" y="89" text-anchor="middle" font-size="9" fill="#ddd">Now Active</text><text x="240" y="120" font-size="9" fill="#666" text-anchor="middle">Failover: Health monitor detects failure → automat</text><text x="240" y="213" font-size="9" fill="#666" text-anchor="middle">ic switch to standby system.</text></svg>',codeExamples:[{title:"AWS RDS Multi-AZ Failover",useCase:"DB failover.",code:`resource "aws_db_instance" "main" {
  engine = "postgres"
  multi_az = true
  storage_type = "gp3"
  backup_retention_period = 7
  monitoring_interval = 5
}

# AWS automatically fails over to standby in
# another AZ when primary fails`,description:"AWS RDS Multi-AZ provides automatic failover to a standby in another AZ."},{title:"Route 53 Failover Routing",useCase:"DNS failover.",code:`resource "aws_route53_record" "app" {
  set_identifier = "primary"
  failover_routing_policy { type = "PRIMARY" }
  health_check_id = aws_route53_health_check.app.id
  ttl = 30
  records = ["192.0.2.1"]
}

# Secondary record
resource "aws_route53_record" "app-secondary" {
  set_identifier = "secondary"
  failover_routing_policy { type = "SECONDARY" }
  ttl = 30
  records = ["203.0.113.1"]
}`,description:"Route 53 failover routing with health check and low TTL."},{title:"Keepalived VIP Failover",useCase:"VIP failover.",code:`vrrp_instance VI_1 {
  state MASTER
  interface eth0
  virtual_router_id 51
  priority 100
  advert_int 1
  virtual_ipaddress {
    192.168.1.100
  }
  track_script {
    chk_nginx
  }
}`,description:"Keepalived virtual IP failover between two servers."},{title:"Kubernetes Pod Failover",useCase:"K8s self-healing.",code:`apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
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
            port: 8080`,description:"Kubernetes liveness and readiness probes for automatic pod failover."}],mcqQuestions:[{question:"What does RTO measure?",options:["Data loss","Recovery time","Network speed","Server count"],answer:1,explanation:"RTO = maximum acceptable downtime."},{question:"What does RPO measure?",options:["Data loss tolerance","Response time","Operating cost","Server uptime"],answer:0,explanation:"RPO = maximum acceptable data loss."},{question:"What triggers failover?",options:["Manual command","Health check failure","Time of day","Traffic spike"],answer:1,explanation:"Health check failure triggers automatic failover."},{question:"What is active-passive?",options:["Both handle traffic","Standby takes over on failure","All servers active","No redundancy"],answer:1,explanation:"Standby takes over when primary fails."},{question:"What is chaos engineering?",options:["Random server crashes","Deliberate failure testing","Security testing","Performance testing"],answer:1,explanation:"Chaos engineering tests resilience by introducing failures."},{question:"Limitation of DNS failover?",options:["Too fast","Slow propagation (TTL-bound)","Expensive","Insecure"],answer:1,explanation:"DNS failover is slow due to TTL caching."}]};export{e as tm_failover};
