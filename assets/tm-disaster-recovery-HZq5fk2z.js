const e={id:"tm-disaster-recovery",title:"Disaster Recovery",difficulty:"advanced",estimatedMinutes:25,tldr:["Disaster Recovery (DR) is the process of restoring IT infrastructure and systems after a catastrophic failure (natural disaster, cyberattack, human error).","DR strategies: Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active-Active.","Key metrics: RTO (how fast to recover), RPO (how much data can you lose).","DR involves not just technology but also processes, people, and testing."],laymanDefinition:"Disaster recovery is like having a fire escape plan for your office building. You hope you never need it, but if a fire happens (disaster), everyone knows how to get out safely (RTO) and you have backups of important documents off-site (RPO). You practice the drill twice a year.",deepDive:[{heading:"Backup & Restore",text:"Cheapest DR strategy. Regularly backup data and configurations to separate location. On disaster, provision new infrastructure + restore from backup. Highest RTO (hours to days) and RPO (up to 24 hours). Suitable for non-critical systems."},{heading:"Pilot Light",text:"Core services (database, DNS) run in DR region with minimal compute. On disaster, scale up compute to full capacity. Data is replicated continuously. RTO: minutes to hours. RPO: seconds to minutes."},{heading:"Warm Standby",text:"DR region runs with scaled-down but fully functional copy of production. All services running but at reduced capacity. On disaster, scale up to full capacity. RTO: minutes. RPO: seconds. More expensive than Pilot Light."},{heading:"Multi-Site Active-Active",text:"Multiple regions run production workloads simultaneously. Traffic routed via DNS/load balancer. Instant failover — DR is continuous. Most expensive but lowest RTO (seconds) and RPO (near-zero). Complex: data replication, conflict resolution."},{heading:"DR Testing and Automation",text:"Tabletop exercises: review runbooks with team. Walkthrough: simulate disaster step-by-step. Full failover test: actually fail over to DR site. Automated DR orchestration using tools like AWS Systems Manager, Terraform, or custom scripts."}],interviewAnswer:"DR strategy is a business decision balancing cost vs recovery speed. Backup & Restore for non-critical. Pilot Light for moderate. Warm Standby for important. Active-Active for critical. Automate DR testing. Document runbooks. Practice regularly. RTO and RPO define your strategy.",interviewQuestions:[{question:"What is Disaster Recovery?",answer:"Process of restoring systems after a catastrophic failure."},{question:"What is RTO?",answer:"Recovery Time Objective — time to restore service."},{question:"What is RPO?",answer:"Recovery Point Objective — maximum data loss (time)."},{question:"Cheapest DR strategy?",answer:"Backup & Restore."},{question:"Most expensive DR strategy?",answer:"Multi-Site Active-Active."},{question:"What is Pilot Light?",answer:"Core services running minimal in DR region. Scale up on disaster."},{question:"What is Warm Standby?",answer:"Full services at reduced capacity in DR region. Scale up on disaster."},{question:"What is a DR runbook?",answer:"Documented step-by-step procedure for executing DR."},{question:"How often should DR be tested?",answer:"At least annually. Critical systems: bi-annually or quarterly."},{question:"What is a tabletop exercise?",answer:"Team walks through DR scenario discussing steps without actual failover."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Disaster Recovery</text><rect x="10" y="35" width="150" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="85" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Backup & Restore</text><text x="85" y="54" text-anchor="middle" font-size="9" fill="#ddd">$: Hours RTO, 24h RPO</text><rect x="10" y="65" width="150" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="85" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pilot Light</text><text x="85" y="84" text-anchor="middle" font-size="9" fill="#ddd">$$: Minutes RTO, sec RPO</text><rect x="10" y="95" width="150" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="85" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Warm Standby</text><text x="85" y="114" text-anchor="middle" font-size="9" fill="#ddd">$$$: Minutes RTO, sec RPO</text><rect x="10" y="125" width="150" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="85" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Active-Active</text><text x="85" y="144" text-anchor="middle" font-size="9" fill="#ddd">$$$$: Seconds RTO, 0 RPO</text><rect x="180" y="35" width="160" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="260" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Disaster Strikes</text><text x="260" y="54" text-anchor="middle" font-size="9" fill="#ddd">Region outage / Cyberattack</text><line x1="340" y1="48" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="80" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DR Region</text><text x="430" y="109" text-anchor="middle" font-size="9" fill="#ddd">Failover & restore</text><text x="240" y="170" font-size="9" fill="#666" text-anchor="middle">Disaster Recovery: Choose strategy based on RTO/RP</text><text x="240" y="263" font-size="9" fill="#666" text-anchor="middle">O requirements. Test regularly.</text></svg>',codeExamples:[{title:"AWS DR Strategies Whitepaper",useCase:"Backup & Restore.",code:`# 1. Backup: S3 cross-region replication
aws s3 sync s3://primary-bucket s3://dr-bucket
# 2. AMI backups
aws ec2 create-image --instance-id i-123
# 3. RDS snapshots to DR region
aws rds copy-db-snapshot --source-region us-east-1
# 4. On disaster: restore from backup
aws ec2 run-instances --image-id ami-xxx`,description:"Backup & Restore DR: copy data to DR region, restore on disaster."},{title:"Terraform Pilot Light",useCase:"Pilot Light infra as code.",code:`module "pilot_light" {
  source = "./modules/pilot-light"
  primary_region = "us-east-1"
  dr_region = "us-west-2"
  # Minimal: RDS replica, small EC2, DNS
  db_instance_class = "db.t3.micro"
  app_instance_class = "t3.nano"
  # Scale up on failover
}

# Failover: update Terraform variables and apply`,description:"Pilot Light: minimal DR infra, scale up on disaster."},{title:"Active-Active Multi-Region (Route 53 + Aurora)",useCase:"Active-Active DR.",code:`# Route 53 latency-based routing
resource "aws_route53_record" "app" {
  latency_routing_policy { region = "us-east-1" }
  set_identifier = "us-east-1"
  alias { name = aws_lb.us-east-1.dns_name }
}

# Aurora Global Database
resource "aws_rds_cluster" "global" {
  global_cluster_identifier = "aurora-global"
  engine = "aurora-mysql"
  # Writes to primary, reads from secondary
}`,description:"Active-Active with Route 53 latency routing and Aurora Global Database."},{title:"DR Runbook Template",useCase:"Documentation.",code:`# Disaster Recovery Runbook
# Service: Payment API
# RTO: 15 min | RPO: 5 min

## 1. Detect
  - PagerDuty alert: Service unreachable > 5 min

## 2. Assess
  - Check AWS Health Dashboard
  - Verify if region-wide outage

## 3. Failover
  - Run: terraform apply -var="region=us-west-2"
  - Update Route 53 DNS
  - Verify health endpoint

## 4. Validate
  - Run smoke tests
  - Verify metrics
  - Notify stakeholders`,description:"DR runbook template with RTO/RPO, detection, failover steps."}],mcqQuestions:[{question:"What is the cheapest DR strategy?",options:["Active-Active","Backup & Restore","Pilot Light","Warm Standby"],answer:1,explanation:"Backup & Restore is cheapest but slowest."},{question:"What is Pilot Light?",options:["Full DR infra","Minimal core infra in DR","No DR","Manual failover"],answer:1,explanation:"Pilot Light maintains minimal core services in DR region."},{question:"What does RPO of 0 mean?",options:["No data loss","Instant recovery","No cost","No testing"],answer:0,explanation:"RPO=0 means zero data loss."},{question:"What is an Active-Active DR cost?",options:["Lowest","Highest","Moderate","Free"],answer:1,explanation:"Active-Active is most expensive DR strategy."},{question:"What is a tabletop exercise?",options:["Live failover test","Team discussion of DR scenario","Infrastructure rebuild","Database restore"],answer:1,explanation:"Tabletop: team walks through DR scenario verbally."},{question:"Tool for DR automation?",options:["AWS Systems Manager","Excel","Manual scripts","Email"],answer:0,explanation:"AWS Systems Manager automates DR procedures."}]};export{e as tm_disaster_recovery};
