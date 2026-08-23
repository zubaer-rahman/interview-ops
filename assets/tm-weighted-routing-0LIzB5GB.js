const e={id:"tm-weighted-routing",title:"Weighted Routing",difficulty:"intermediate",estimatedMinutes:15,tldr:["Weighted routing distributes traffic across multiple backends according to assigned weights (percentages).","Weights define the proportion of traffic each target receives. Total can sum to 100 or any value.","Use cases: canary releases, A/B testing, gradual migrations, multi-region traffic distribution.","Supported by: DNS (Route 53 weighted records), load balancers (weighted target groups), service mesh (Istio, Envoy)."],laymanDefinition:"Weighted routing is like a school dividing students into classes. 50% go to Class A, 30% to Class B, 20% to Class C. The weights can change each semester. If a new teacher joins, you adjust: 40% A, 30% B, 30% C.",deepDive:[{heading:"How Weighted Routing Works",text:"Each target gets a weight (integer). Total weight = sum of all weights. Probability of hitting target = target weight / total weight. Random selection weighted by probability. Stateless: each request is independent. For session consistency, combine with session affinity."},{heading:"DNS Weighted Routing (Route 53)",text:"Multiple records with same name/type, different set_identifier and weight. DNS resolver returns weighted random IP. Works at DNS level — affected by caching and TTL. Not all clients get exact weights due to DNS caching."},{heading:"Traffic Splitting vs Weighted Routing",text:"Often used interchangeably. Weighted routing is the mechanism. Traffic splitting is the use case. Weighted: assigning proportions to different targets. Canary: specific use case of weighted routing for gradual rollouts."},{heading:"Weighted Routing Best Practices",text:"Use integer weights for simplicity. Monitor actual traffic distribution vs intended (stats). Be aware of DNS caching effects. Combine with health checks. For precise control, use application/LB level not DNS. Gradual weight adjustments."}],interviewAnswer:"Weighted routing is the foundation for canary releases and A/B testing. Use at DNS level for regional distribution, LB level for canary, service mesh for precise control. Monitor actual vs intended distribution. Start with small weight changes.",interviewQuestions:[{question:"What is weighted routing?",answer:"Distributing traffic by assigned weights (percentages)."},{question:"How is target selected?",answer:"Random weighted selection: probability = target weight / total weight."},{question:"What is sum of weights?",answer:"Total of all weights. Can be 100 or any value."},{question:"Use cases?",answer:"Canary releases, A/B testing, gradual migrations, regional distribution."},{question:"DNS weighted routing limitation?",answer:"DNS caching affects distribution accuracy."},{question:"What is a weight?",answer:"Integer value determining proportion of traffic to a target."},{question:"Weighted vs traffic splitting?",answer:"Weighted is the mechanism. Traffic splitting is the use case."},{question:"Can weights change dynamically?",answer:"Yes — adjust weights to gradually shift traffic."},{question:"What if one target has weight 0?",answer:"It receives no traffic unless all other targets are unhealthy."},{question:"How to monitor weighted distribution?",answer:"Compare actual request counts per target vs expected ratios."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Weighted Routing</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">All Traffic</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">100 requests/s</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="140" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="260" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Weighted Router</text><text x="260" y="54" text-anchor="middle" font-size="9" fill="#ddd">weights: 50 / 30 / 20</text><line x1="330" y1="48" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="60" x2="190" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="82" x2="190" y2="105" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Backend A</text><text x="430" y="54" text-anchor="middle" font-size="9" fill="#ddd">50% (50 req/s)</text><rect x="380" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="430" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Backend B</text><text x="430" y="89" text-anchor="middle" font-size="9" fill="#ddd">30% (30 req/s)</text><rect x="380" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="430" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Backend C</text><text x="430" y="124" text-anchor="middle" font-size="9" fill="#ddd">20% (20 req/s)</text><text x="240" y="155" font-size="9" fill="#666" text-anchor="middle">Weighted Routing: Traffic distributed according to</text><text x="240" y="248" font-size="9" fill="#666" text-anchor="middle"> assigned weights. Flexible, precise control.</text></svg>',codeExamples:[{title:"Route 53 Weighted Routing",useCase:"DNS weighted records.",code:`resource "aws_route53_record" "v1" {
  zone_id = aws_route53_zone.main.zone_id
  name = "app.example.com"
  type = "A"
  set_identifier = "v1"
  weight = 90
  ttl = 60
  records = ["192.0.2.1"]
}

resource "aws_route53_record" "v2" {
  set_identifier = "v2"
  weight = 10
  records = ["203.0.113.1"]
}

# 90% to v1, 10% to v2`,description:"Route 53 weighted records: 90% v1, 10% v2."},{title:"Istio Weighted Routing via VirtualService",useCase:"Service mesh weights.",code:`apiVersion: networking.istio.io/v1beta1
kind: VirtualService
spec:
  hosts: [my-service]
  http:
  - route:
    - destination:
        host: my-service
        subset: v1
      weight: 80
    - destination:
        host: my-service
        subset: v2
      weight: 20
    - destination:
        host: my-service
        subset: v3
      weight: 0`,description:"Istio weighted routing with subsets."},{title:"NGINX Weighted Load Balancing",useCase:"Server weights.",code:`upstream backend {
  server backend1.example.com weight=5;
  server backend2.example.com weight=3;
  server backend3.example.com weight=2;
}

# Out of 10 requests:
# backend1: 5, backend2: 3, backend3: 2
# NGINX uses weighted round-robin`,description:"NGINX weighted upstream servers."},{title:"Traefik Weighted Round Robin",useCase:"WRR service.",code:`http:
  services:
    app:
      weighted:
        services:
        - name: app-v1
          weight: 80
        - name: app-v2
          weight: 20`,description:"Traefik weighted round robin service."},{title:"Gradual Weight Migration (Script)",useCase:"Progressive weight shift.",code:`#!/bin/bash
# Gradual canary: shift 10% every 5 minutes
WEIGHTS=(10 20 30 40 50 60 70 80 90 100)
for w in "\${WEIGHTS[@]}"; do
  canary_weight=$w
  stable_weight=$((100 - w))
  echo "Canary: $canary_weight%, Stable: $stable_weight%"
  # Update Route 53 / Istio weights
  ./update-weights.sh --canary $canary_weight
  sleep 300
done
echo "Migration complete: 100% canary"`,description:"Script for gradual weight-based traffic migration."}],mcqQuestions:[{question:"What determines proportion in weighted routing?",options:["Server speed","Weight value","Response time","CPU load"],answer:1,explanation:"Weights determine traffic proportion."},{question:"Limitation of DNS weighted routing?",options:["Slow DNS propagation","Caching skews distribution","Not secure","Expensive"],answer:1,explanation:"DNS caching causes actual distribution to differ from intended."},{question:"Weighted routing is ___? ___ is the use case.",options:["Traffic splitting","Load balancing","Mechanism / Use case","DNS / HTTP"],answer:2,explanation:"Weighted routing is the mechanism; traffic splitting is the use case."},{question:"How to monitor weighted distribution?",options:["Compare request counts vs expected ratios","Check log files","Ping servers","Check SSL certs"],answer:0,explanation:"Monitor actual request distribution vs intended weights."},{question:"What tool supports weighted routing?",options:["Istio VirtualService","Docker compose","Cron","Git"],answer:0,explanation:"Istio VirtualService supports weighted routing."},{question:"What weight means a target gets no traffic?",options:["weight=1","weight=0","weight=-1","weight=100"],answer:1,explanation:"weight=0 means no traffic unless all others unhealthy."}]};export{e as tm_weighted_routing};
