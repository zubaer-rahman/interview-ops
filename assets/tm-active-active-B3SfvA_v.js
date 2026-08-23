const e={id:"tm-active-active",title:"Active-Active",difficulty:"advanced",estimatedMinutes:20,tldr:["Active-Active (multi-region/multi-site) runs production workloads simultaneously in two or more locations.","All regions actively serve traffic — no idle standby. Traffic distributed via DNS/load balancer.","Benefits: full resource utilization, instant failover (no standby), lower latency for global users.","Challenges: data replication, conflict resolution, higher complexity and cost."],laymanDefinition:"Active-Active is like having two identical grocery stores in different neighborhoods. Both serve customers simultaneously (both active). If one store has a fire, customers just go to the other store (instant failover). Both stores need to have the same inventory (data replication).",deepDive:[{heading:"Traffic Distribution",text:"DNS-based: Route 53 latency/geo routing distributes traffic. Load balancer-based: Anycast routes to nearest region. Application-level: client SDK picks nearest region. Goal: evenly distribute load across regions."},{heading:"Database Replication",text:"The hardest part of Active-Active. Synchronous: strong consistency, higher latency. Asynchronous: eventual consistency, lower latency. Conflict resolution: last-writer-wins, CRDTs, application-level merging. Aurora Global Database: one writer, multiple readers."},{heading:"Conflict Resolution Strategies",text:"Last Write Wins (LWW): simplest, timestamp-based. May lose data. CRDTs (Conflict-Free Replicated Data Types): automatic merging. Application-level: detect and resolve conflicts in business logic. Use case determines strategy: inventory (CRDT), user profile (LWW), financial (synchronous)."},{heading:"Active-Active vs Active-Passive",text:"Active-Active: all regions serve traffic, full utilization, instant failover, complex data replication. Active-Passive: one active, one standby, lower cost, simpler data replication, slower failover (standby promotion)."}],interviewAnswer:"Active-Active is the gold standard for global HA. Use for critical, latency-sensitive applications. Invest in data replication strategy. Start with Active-Passive for databases, Active-Active for stateless compute. Test conflict resolution paths. Monitor replication lag.",interviewQuestions:[{question:"What is Active-Active?",answer:"Multiple regions actively serving traffic simultaneously."},{question:"Main benefit?",answer:"Instant failover — no standby to activate."},{question:"Main challenge?",answer:"Data replication and conflict resolution."},{question:"How is traffic distributed?",answer:"DNS latency/geo routing, Anycast, client SDK."},{question:"What is conflict resolution?",answer:"Handling concurrent writes to different regions for the same data."},{question:"What is LWW?",answer:"Last Writer Wins — simplest conflict resolution (timestamp-based)."},{question:"What are CRDTs?",answer:"Data structures that automatically merge concurrent changes without conflicts."},{question:"Active-Active vs Active-Passive?",answer:"AA: all active, full utilization, complex replication. AP: one active, one standby, simpler."},{question:"What is Aurora Global Database?",answer:"AWS multi-region DB — one writer region, multiple reader regions."},{question:"What is replication lag?",answer:"Delay between data being written in one region and available in another."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Active-Active</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">US-East</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Serving</text><line x1="110" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="170" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="245" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DNS / Load Balancer</text><text x="245" y="54" text-anchor="middle" font-size="9" fill="#ddd">Route 53 / Anycast</text><line x1="330" y1="48" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">EU-West</text><text x="430" y="54" text-anchor="middle" font-size="9" fill="#ddd">Serving</text><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Asia</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Serving</text><line x1="110" y1="82" x2="150" y2="82" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="170" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="245" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Data Replication</text><text x="245" y="89" text-anchor="middle" font-size="9" fill="#ddd">Aurora Global / CRDTs</text><line x1="330" y1="82" x2="370" y2="82" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="70" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="430" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shared DB</text><text x="430" y="89" text-anchor="middle" font-size="9" fill="#ddd">Global data</text><text x="240" y="120" font-size="9" fill="#666" text-anchor="middle">Active-Active: All regions serve traffic simultane</text><text x="240" y="213" font-size="9" fill="#666" text-anchor="middle">ously. Data replication keeps them in sync.</text></svg>',codeExamples:[{title:"Multi-Region Active-Active (Route 53 + ALB)",useCase:"Traffic distribution.",code:`resource "aws_route53_record" "app" {
  latency_routing_policy { region = "us-east-1" }
  set_identifier = "us-east"
  alias {
    name = aws_lb.us-east.dns_name
    zone_id = aws_lb.us-east.zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "app-eu" {
  latency_routing_policy { region = "eu-west-1" }
  set_identifier = "eu-west"
  alias {
    name = aws_lb.eu-west.dns_name
    zone_id = aws_lb.eu-west.zone_id
  }
}`,description:"Route 53 latency routing distributes traffic to nearest region."},{title:"Aurora Global Database",useCase:"Multi-region DB.",code:`resource "aws_rds_global_cluster" "global" {
  global_cluster_identifier = "aurora-global"
  engine = "aurora-mysql"
  database_name = "myapp"
}

# Primary region cluster
resource "aws_rds_cluster" "primary" {
  global_cluster_identifier = aws_rds_global_cluster.global.id
  engine = "aurora-mysql"
  master_username = "admin"
}

# Secondary region cluster
resource "aws_rds_cluster" "secondary" {
  global_cluster_identifier = aws_rds_global_cluster.global.id
  engine = "aurora-mysql"
  source_region = "us-east-1"
}`,description:"Aurora Global Database: primary for writes, secondary for reads."},{title:"CRDT Example (Automerge)",useCase:"Conflict resolution.",code:`const { from } = require("@automerge/automerge");

let doc = from({ items: [], counter: 0 });
// User A adds item in US-East
doc = Automerge.change(doc, "add item", d => {
  d.items.push("apple");
  d.counter++;
});
// User B adds item in EU-West simultaneously
// CRDT automatically merges both changes
// Both "apple" and "banana" are in the list
// counter = 2`,description:"Automerge CRDT automatically merges concurrent edits without conflicts."},{title:"Kubernetes Multi-Cluster (KubeFed)",useCase:"K8s Active-Active.",code:`apiVersion: types.kubefed.io/v1beta1
kind: FederatedDeployment
spec:
  template:
    spec:
      replicas: 5
  placement:
    clusters:
    - name: us-east
    - name: eu-west
    - name: ap-southeast
  overrides:
  - clusterName: us-east
    replicas: 3
  - clusterName: eu-west
    replicas: 2`,description:"KubeFed deploys the same app across multiple Kubernetes clusters."}],mcqQuestions:[{question:"What is Active-Active?",options:["One active one standby","All regions serve traffic","Backup only","Manual failover"],answer:1,explanation:"All regions actively serve traffic."},{question:"Main challenge?",options:["Cost","Data replication and conflicts","Latency","Security"],answer:1,explanation:"Data replication between regions is the main challenge."},{question:"What is LWW?",options:["Last Written Word","Last Writer Wins","Long Write Window","Lightweight Write"],answer:1,explanation:"Last Writer Wins — timestamp-based conflict resolution."},{question:"What are CRDTs?",options:["Conflict-free data types","CRUD operations","Cache types","DNS records"],answer:0,explanation:"CRDTs automatically merge concurrent changes."},{question:"How is traffic distributed?",options:["DNS only","DNS / Anycast / Client SDK","Manual","VPN"],answer:1,explanation:"DNS, Anycast, or client SDK distribute traffic."},{question:"Aurora Global Database has?",options:["One writer, multiple readers","Multiple writers","Single region only","No replication"],answer:0,explanation:"Aurora Global: one primary writer region, multiple reader regions."}]};export{e as tm_active_active};
