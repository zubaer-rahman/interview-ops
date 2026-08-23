export const devops_cloud_migration = {
  "id": "devops-cloud-migration",
  "title": "Cloud Migration",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Cloud migration is the process of moving an organization's digital assets — applications, data, and workloads — from on-premises infrastructure to the cloud.",
    "The 6 Rs migration strategies: Rehost (lift-and-shift — move as-is), Replatform (lift-tinker-and-shift — minor cloud optimizations), Refactor/Re-architect (rebuild for cloud-native), Repurchase (move to SaaS), Retire (decommission), Retain (keep on-premises).",
    "Migration phases: Assess (discovery and planning), Mobilize (pilot and build foundation), Migrate (bulk workload migration). AWS Migration Acceleration Program (MAP) provides tools, best practices, and funding.",
    "Key considerations: total cost of ownership (TCO) analysis, security and compliance requirements, data transfer costs, network latency, application dependencies, and team skill gaps."
  ],
  "laymanDefinition": "Cloud migration is like moving a family from a house they have lived in for 20 years to a new home. You first take inventory of everything you own (discovery), decide what to keep, sell, or throw away (6 Rs). Some furniture fits perfectly as-is (rehost), some needs minor assembly (replatform), and some rooms need complete renovation (refactor). You might move delicate items carefully over several trips (phased migration) or hire professional movers to handle everything at once (big bang).",
  "deepDive": [
    {
      "heading": "The 6 Rs of Migration",
      "text": "Rehost (lift-and-shift): move applications as-is to cloud VMs. Fastest migration, minimal changes, but limited cloud benefits. Replatform: make minor cloud optimizations (managed database, load balancer) without changing core architecture. Refactor/Re-architect: rebuild applications using cloud-native services (serverless, containers). Maximum benefits but highest effort. Repurchase: replace with SaaS (Salesforce, Workday). Retire: decommission unused applications. Retain: keep some workloads on-premises for compliance or technical reasons."
    },
    {
      "heading": "Migration Assessment and Planning",
      "text": "Discovery: inventory all applications, servers, databases, and dependencies using tools like AWS Migration Evaluator, Azure Migrate. Dependency mapping: identify application dependencies (network, database, authentication). TCO analysis: compare on-premises vs cloud costs including compute, storage, network, labor, and power. Wave planning: group applications into migration waves based on complexity, dependencies, and business priority. Foundational infrastructure: landing zone, networking, security, identity foundation."
    },
    {
      "heading": "Landing Zone and Foundation",
      "text": "Landing zone: well-architected, multi-account AWS foundation. AWS Control Tower: automated landing zone setup. Organizations: multi-account structure with governance. Account structure: security (audit, log archive), infrastructure (network, shared services), workloads (dev, staging, prod per application). Networking: transit gateway for connectivity, Direct Connect or VPN for hybrid connectivity. Security: AWS SSO/IAM Identity Center, guardrails (SCPs), encryption, logging (CloudTrail, Config)."
    },
    {
      "heading": "Migration Patterns and Tools",
      "text": "Server migration: AWS Application Migration Service (MGN) — continuous replication, automated conversion. Database migration: AWS Database Migration Service (DMS) — minimal downtime, heterogeneous (Oracle to Aurora) or homogeneous. Data transfer: AWS Snowball (petabyte-scale physical device), DataSync (online), S3 Transfer Acceleration. Hybrid: Storage Gateway (file gateway, volume gateway, tape gateway) for hybrid storage. Containers: Dockerize and run on ECS/EKS as a replatform step."
    },
    {
      "heading": "Post-Migration Optimization",
      "text": "Right-sizing: analyze resource utilization and adjust instance types/sizes. Auto-scaling: implement scaling policies based on demand patterns. Cost optimization: Reserved Instances, Savings Plans, Spot instances. Performance optimization: CloudFront CDN, RDS read replicas, ElastiCache. Security hardening: review security groups, IAM roles, encryption. Monitoring: CloudWatch dashboards, alarms, logs. Well-Architected Framework review: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability."
    }
  ],
  "interviewAnswer": "Cloud migration is a journey, not a one-time event. Start with a thorough assessment and TCO analysis. Use the 6 Rs framework to choose the right strategy for each application. Build a solid landing zone foundation first. Use AWS MGN for server migration and DMS for databases. Optimize after migration — right-sizing, auto-scaling, Reserved Instances. Regularly review with the Well-Architected Framework.",
  "interviewQuestions": [
    {
      "question": "What is cloud migration?",
      "answer": "Moving digital assets (applications, data, workloads) from on-premises to cloud infrastructure."
    },
    {
      "question": "What are the 6 Rs of migration?",
      "answer": "Rehost, Replatform, Refactor, Repurchase, Retire, Retain."
    },
    {
      "question": "What is rehost (lift-and-shift)?",
      "answer": "Moving applications as-is to cloud VMs. Fastest migration, minimal cloud benefit."
    },
    {
      "question": "What is the difference between rehost and refactor?",
      "answer": "Rehost moves as-is. Refactor rebuilds using cloud-native services for maximum benefit."
    },
    {
      "question": "What is a landing zone?",
      "answer": "A well-architected, multi-account cloud foundation with networking, security, and governance."
    },
    {
      "question": "What is AWS Application Migration Service (MGN)?",
      "answer": "AWS service for automated server migration with continuous replication and conversion."
    },
    {
      "question": "What is AWS DMS?",
      "answer": "Database Migration Service — migrates databases with minimal downtime, including heterogeneous migrations."
    },
    {
      "question": "What is AWS Snowball?",
      "answer": "A physical data transport device for petabyte-scale data transfer to AWS."
    },
    {
      "question": "What is TCO analysis in migration?",
      "answer": "Total Cost of Ownership comparison between on-premises and cloud including all cost factors."
    },
    {
      "question": "What is the Well-Architected Framework?",
      "answer": "AWS framework for reviewing cloud architectures across six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cloud Migration</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Assess</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Discovery + TCO</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mobilize</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Landing zone</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Migrate</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wave execution</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Migration</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cloud migration journey</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Optimize</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Right-size + cost</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Operate</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">WAF review</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Migration</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">6 Rs framework: rehost, replatfo</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rm, refactor, repurchase, retire</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, retain. Landing zone, MGN, DMS</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, optimization.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cloud Migration: 6 Rs strategy. Assess, mobilize, </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">migrate, optimize. Landing zone, MGN, DMS, WAF rev</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">iew.</text></svg>",
  "codeExamples": [
    {
      "title": "Migration Wave Planning",
      "useCase": "Organize migration in waves.",
      "code": "# Migration Wave Plan Template\n\nWave 1: Foundation (Weeks 1-4)\n  - Set up landing zone (Control Tower)\n  - Configure networking (Transit Gateway, Direct Connect)\n  - Implement security (SSO, GuardDuty, CloudTrail)\n  - Enable cost management (Budgets, Cost Explorer)\n\nWave 2: Low-hanging fruit (Weeks 5-8)\n  - Rehost dev/test environments\n  - Migrate internal tools (wiki, CI/CD)\n  - Decommission redundant servers\n\nWave 3: Core applications (Weeks 9-16)\n  - Replatform web applications (load balancers, RDS)\n  - Rehost legacy databases (DMS to RDS)\n  - Containerize new development (ECS/EKS)\n\nWave 4: Critical workloads (Weeks 17-24)\n  - Refactor flagship applications for cloud-native\n  - Implement DR (multi-region, backup)\n  - Optimize costs (Reserved Instances, Savings Plans)\n\nPost-Migration:\n  - Well-Architected Framework review\n  - Continuous optimization",
      "description": "Phased cloud migration wave plan covering foundation, quick wins, core apps, and critical workloads."
    },
    {
      "title": "AWS DMS for Database Migration",
      "useCase": "Migrate database with minimal downtime.",
      "code": "# Step 1: Create replication instance\naws dms create-replication-instance \\\n  --replication-instance-identifier my-dms \\\n  --replication-instance-class dms.t3.medium \\\n  --allocated-storage 50\n\n# Step 2: Create source and target endpoints\naws dms create-endpoint \\\n  --endpoint-identifier source-oracle \\\n  --endpoint-type source \\\n  --engine-name oracle \\\n  --oracle-settings ServerName=10.0.0.5,Port=1521\n\naws dms create-endpoint \\\n  --endpoint-identifier target-aurora \\\n  --endpoint-type target \\\n  --engine-name aurora \\\n  --aurora-settings ServerName=my-cluster.cluster-xxx.us-east-1.rds.amazonaws.com\n\n# Step 3: Create and start replication task\naws dms create-replication-task \\\n  --replication-task-identifier oracle-to-aurora \\\n  --source-endpoint-arn arn:aws:dms:...source-oracle\n  --target-endpoint-arn arn:aws:dms:...target-aurora\n  --replication-instance-arn arn:aws:dms:...my-dms\n  --migration-type full-load-and-cdc",
      "description": "AWS DMS configuration for migrating an Oracle database to Amazon Aurora with ongoing replication."
    },
    {
      "title": "Cloud Migration TCO Analysis",
      "useCase": "Compare on-premises vs cloud costs.",
      "code": "# TCO Comparison: On-premises vs Cloud\n\nOn-premises costs (3-year TCO):\n  Server hardware:     $150,000\n  Storage (SAN):       $80,000\n  Networking:          $30,000\n  Power/cooling:       $60,000\n  Facilities:          $40,000\n  IT staff (3 years):  $450,000\n  Software licenses:   $100,000\n  TOTAL:               $910,000\n\nAWS costs (3-year, equivalent capacity):\n  EC2 (Reserved):      $120,000\n  EBS storage:         $40,000\n  RDS (Managed DB):    $60,000\n  Data transfer:       $20,000\n  Support:             $30,000\n  Managed services:    $50,000\n  Staff (cloud ops):   $250,000\n  TOTAL:               $570,000\n\nSavings: $340,000 (37%) + intangible benefits\n(elasticity, agility, global reach, innovation speed)",
      "description": "TCO analysis comparing on-premises vs AWS costs over 3 years including hardware, staff, and operational expenses."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is rehost (lift-and-shift)?",
      "options": [
        "Rebuilding for cloud-native",
        "Moving applications as-is to cloud VMs",
        "Replacing with SaaS",
        "Decommissioning"
      ],
      "answer": 1,
      "explanation": "Rehost moves applications to cloud without modification — fastest path."
    },
    {
      "question": "What is the main benefit of refactoring?",
      "options": [
        "Fastest migration",
        "Maximum cloud benefits (scalability, resilience, cost)",
        "Lowest effort",
        "No changes needed"
      ],
      "answer": 1,
      "explanation": "Refactoring rebuilds applications using cloud-native services for maximum benefit."
    },
    {
      "question": "What is a landing zone?",
      "options": [
        "Airport area",
        "Well-architected multi-account cloud foundation",
        "Database migration tool",
        "Cost analysis tool"
      ],
      "answer": 1,
      "explanation": "Landing zone is the foundational cloud setup with networking, security, and governance."
    },
    {
      "question": "What is AWS Application Migration Service (MGN)?",
      "options": [
        "Email service",
        "Automated server migration with continuous replication",
        "Content delivery",
        "Monitoring service"
      ],
      "answer": 1,
      "explanation": "MGN automates server migration with continuous replication and automated conversion."
    },
    {
      "question": "What does the 6 Rs framework help with?",
      "options": [
        "Selecting the right migration strategy per application",
        "Pricing cloud services",
        "Managing cloud security",
        "Training staff"
      ],
      "answer": 0,
      "explanation": "The 6 Rs provide a decision framework for choosing migration strategies."
    },
    {
      "question": "What is AWS Snowball used for?",
      "options": [
        "Small data transfers",
        "Petabyte-scale physical data transport",
        "Database migration",
        "Server migration"
      ],
      "answer": 1,
      "explanation": "Snowball is a physical device for transferring large amounts of data to AWS."
    },
    {
      "question": "Cloud Migration — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "Cloud Migration — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "Cloud Migration — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "Cloud Migration — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
