export const devops_hybrid_cloud = {
  "id": "devops-hybrid-cloud",
  "title": "Hybrid Cloud",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Hybrid cloud is a computing environment that combines on-premises infrastructure (private cloud) with public cloud services, allowing data and applications to be shared between them.",
    "Key drivers: regulatory compliance (data residency requirements), low-latency workloads (on-premises processing), legacy system integration, burst capacity (cloud for peak demand), and gradual cloud migration.",
    "Connectivity options: AWS Direct Connect (dedicated private connection), VPN (encrypted internet tunnel), Transit Gateway (hub connecting on-premises and VPCs), and Storage Gateway (hybrid storage).",
    "Hybrid cloud requires consistent management, security, and networking across environments. Tools like AWS Outposts, Azure Stack, and Google Anthos extend cloud services to on-premises locations."
  ],
  "laymanDefinition": "Hybrid cloud is like a company with both a local warehouse (on-premises) and an on-demand logistics network (public cloud). Everyday inventory stays in the local warehouse for quick access (low-latency workloads). During holiday rushes, the logistics network handles overflow (cloud burst). Sensitive items stay in the locked local vault (compliance data). A secure trucking route (Direct Connect) connects both locations. The company uses the same inventory management system (consistent tools) for both locations.",
  "deepDive": [
    {
      "heading": "Hybrid Cloud Connectivity",
      "text": "Direct Connect: dedicated, private, high-bandwidth connection from on-premises to AWS. 1 Gbps or 10 Gbps. Lower cost than internet for large data volumes. Consistent network performance. VPN: encrypted tunnel over the internet. Site-to-Site VPN (IPsec). Quick to set up, lower bandwidth, variable performance. Transit Gateway: hub connecting multiple VPCs and on-premises networks via Direct Connect or VPN. Centralized routing, transitive connectivity, simplified management."
    },
    {
      "heading": "Hybrid Storage Solutions",
      "text": "AWS Storage Gateway: hybrid cloud storage with on-premises caching. File Gateway: S3 files accessed via NFS/SMB. Volume Gateway: iSCSI block storage with cloud backup. Tape Gateway: virtual tape library for backup. AWS Snow Family: Edge (compute + storage for edge locations), Snowball (data transfer), Snowmobile (exabyte-scale). Amazon EFS File Sync: sync on-premises files to EFS. FSx for Windows File Server: managed Windows file server with hybrid access."
    },
    {
      "heading": "Hybrid Compute and Containers",
      "text": "AWS Outposts: fully managed AWS infrastructure on-premises. Run EC2, ECS, EKS, RDS locally. Consistent AWS experience. Azure Stack: Azure services on-premises. Google Anthos: consistent Kubernetes platform across on-premises and clouds. Amazon ECS Anywhere: run ECS tasks on external instances. Amazon EKS Hybrid Nodes: connect on-premises nodes to EKS cluster. VMware Cloud on AWS: run VMware workloads on AWS hardware."
    },
    {
      "heading": "Hybrid Identity and Security",
      "text": "AWS IAM Identity Center (SSO): single sign-on across AWS accounts and on-premises apps. Active Directory integration: AWS Managed Microsoft AD, AD Connector, or on-premises AD via AD Trust. AWS Directory Service: connect on-premises AD to AWS workloads. Security: consistent security groups, network ACLs, AWS Network Firewall, and third-party firewall integration. Encryption: VPN IPsec tunnels, Direct Connect private VLANs, TLS for data in transit."
    },
    {
      "heading": "Hybrid Cloud Management and Monitoring",
      "text": "AWS Systems Manager: manage on-premises and cloud instances from single console. Run Command, Patch Manager, Inventory, Session Manager. CloudWatch: collect metrics and logs from hybrid environments. CloudWatch Agent: install on on-premises servers. AWS Config: track configuration changes across hybrid resources. CloudTrail: audit API activity. Third-party tools: Datadog, New Relic, Splunk for unified monitoring across on-premises and cloud."
    }
  ],
  "interviewAnswer": "Hybrid cloud enables organizations to maintain on-premises infrastructure while leveraging cloud benefits. Use Direct Connect for reliable connectivity. Use Storage Gateway for hybrid storage. Use Systems Manager for unified management. Use AWS Outposts for consistent cloud experience on-premises. For containers, use ECS Anywhere or EKS Hybrid Nodes. Plan for network latency, data transfer costs, and operational complexity of managing dual environments.",
  "interviewQuestions": [
    {
      "question": "What is hybrid cloud?",
      "answer": "A computing environment combining on-premises infrastructure with public cloud services."
    },
    {
      "question": "What is AWS Direct Connect?",
      "answer": "A dedicated private network connection from on-premises to AWS."
    },
    {
      "question": "What is the difference between Direct Connect and VPN?",
      "answer": "Direct Connect: dedicated, private, high-bandwidth. VPN: encrypted tunnel over internet, quicker to set up."
    },
    {
      "question": "What is AWS Transit Gateway?",
      "answer": "A hub connecting multiple VPCs and on-premises networks with transitive routing."
    },
    {
      "question": "What is AWS Outposts?",
      "answer": "Fully managed AWS infrastructure and services running in your on-premises data center."
    },
    {
      "question": "What is AWS Storage Gateway?",
      "answer": "Hybrid cloud storage service with on-premises caching and cloud backup."
    },
    {
      "question": "What is ECS Anywhere?",
      "answer": "Run Amazon ECS tasks on external (on-premises or other cloud) instances."
    },
    {
      "question": "What is AWS Systems Manager?",
      "answer": "A unified management tool for both on-premises and cloud instances."
    },
    {
      "question": "Why use hybrid cloud?",
      "answer": "Compliance, low-latency workloads, legacy integration, burst capacity, gradual migration."
    },
    {
      "question": "What is VMware Cloud on AWS?",
      "answer": "Run VMware vSphere workloads on AWS bare-metal hardware with consistent VMware tools."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Hybrid Cloud</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">On-Premises</text><text x=\"60\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Private data cente</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Public Cloud</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">AWS services</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Connectivity</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Direct Connect/VPN</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hybrid Cloud</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">On-premises + cloud</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Outposts</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cloud on-premises</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Gateway</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hybrid storage</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hybrid Cloud</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">On-premises + public cloud. Dire</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ct Connect, Outposts, Storage Ga</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">teway, Systems Manager, Transit </text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Gateway.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Hybrid Cloud: On-premises + cloud integration. Dir</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ect Connect, Outposts, Storage Gateway, Systems Ma</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nager.</text></svg>",
  "codeExamples": [
    {
      "title": "Hybrid DNS Resolution",
      "useCase": "Resolve DNS across environments.",
      "code": "# Hybrid DNS with Route 53 Resolver\n# Resolves on-premises and cloud DNS names\n\nresource \"aws_route53_resolver_endpoint\" \"inbound\" {\n  name                 = \"onprem-to-aws\"\n  direction            = \"INBOUND\"\n  security_group_ids   = [aws_security_group.resolver.id]\n\n  ip_address {\n    subnet_id = aws_subnet.private_1.id\n  }\n  ip_address {\n    subnet_id = aws_subnet.private_2.id\n  }\n}\n\n# On-premises DNS forwards requests for *.aws.example.com\n# to the Route 53 Resolver inbound endpoint IPs\n\n# AWS DNS forwards requests for *.corp.example.com\n# to on-premises DNS servers via outbound endpoint\n\nresource \"aws_route53_resolver_endpoint\" \"outbound\" {\n  name                 = \"aws-to-onprem\"\n  direction            = \"OUTBOUND\"\n  security_group_ids   = [aws_security_group.resolver.id]\n\n  ip_address {\n    subnet_id = aws_subnet.private_1.id\n  }\n}",
      "description": "Route 53 Resolver for hybrid DNS resolution between on-premises and AWS environments."
    },
    {
      "title": "AWS Systems Manager Hybrid Setup",
      "useCase": "Manage on-premises instances.",
      "code": "# Install SSM Agent on on-premises server\n$ sudo yum install -y https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/linux_amd64/amazon-ssm-agent.rpm\n$ sudo systemctl start amazon-ssm-agent\n$ sudo systemctl enable amazon-ssm-agent\n\n# Register on-premises instance with Systems Manager\n# Create activation code (in AWS Console → Systems Manager → Hybrid Activation)\n\n$ sudo amazon-ssm-agent -register \\\n  --code \"activation-code\" \\\n  --id \"activation-id\" \\\n  --region \"us-east-1\"\n\n# Verify registration (from AWS CLI)\naws ssm describe-instance-information \\\n  --filters \"Key=ResourceType,Values=ManagedInstance\"\n\n# Now you can run commands on-premises:\naws ssm send-command \\\n  --instance-ids \"mi-1234567890abcdef0\" \\\n  --document-name \"AWS-RunShellScript\" \\\n  --parameters \"commands=df -h; free -m\"",
      "description": "AWS Systems Manager hybrid activation for managing on-premises servers alongside EC2 instances."
    },
    {
      "title": "Storage Gateway for Hybrid Backup",
      "useCase": "On-premises backup to cloud.",
      "code": "# Deploy Storage Gateway as VM in on-premises hypervisor\n# Download OVA/VMX from AWS Console\n\n# Configure File Gateway\n# 1. Activate gateway (from AWS Console)\n# 2. Create file share (NFS or SMB)\n# 3. Mount on-premises:\n$ mount -t nfs -o nfsvers=4.1 <gateway-ip>:/share-name /mnt/cloud-files\n\n# Configure Tape Gateway for backup\n# 1. Create virtual tape library (VTL)\n# 2. Backup software connects via iSCSI\n# 3. Data backed up to S3/Glacier\n\n# Cloud-side S3 bucket stores all data\n# On-premises cache provides low-latency access\n# Data is encrypted in transit and at rest\n\n# Sync on-premises files to cloud\n$ aws s3 sync /mnt/cloud-files s3://my-backup-bucket/\n\n# Monitor cache health\naws storage-gateway describe-cache \\\n  --gateway-arn arn:aws:storagegateway:us-east-1:123456:gateway/sgw-xxx",
      "description": "Storage Gateway (File Gateway and Tape Gateway) for hybrid cloud backup with on-premises caching."
    },
    {
      "title": "AWS Outposts Configuration",
      "useCase": "Run AWS services on-premises.",
      "code": "# Outposts rack compute and storage configuration\n# Ordered via AWS Console with specific configuration\n\n# Key specifications:\n# - 1U or 2U server, or 42U rack\n# - Up to 96 vCPUs per server\n# - Up to 768 GB RAM per server\n# - Local NVMe SSD storage\n# - 1/10/25/100 Gbps networking\n\n# AWS services available on Outposts:\n# - EC2 (instances run locally)\n# - EBS (local SSDs)\n# - ECS (containers locally)\n# - EKS (Kubernetes locally)\n# - RDS (managed database locally)\n# - S3 (object storage locally)\n\n# Outposts is connected to AWS region via\n# Direct Connect or VPN for management plane\n# Control plane: AWS region (API calls)\n# Data plane: local (low-latency)\n\n# Launch EC2 on Outposts\naws ec2 run-instances \\\n  --image-id ami-xxx \\\n  --instance-type m5.large \\\n  --placement GroupName=outpost-rack-1 \\\n  --outpost-arn arn:aws:outposts:us-east-1:123456:outpost/op-xxx",
      "description": "AWS Outposts configuration for running EC2, EBS, ECS, EKS, RDS, and S3 services on-premises."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is hybrid cloud?",
      "options": [
        "Only public cloud",
        "Combination of on-premises and public cloud",
        "Only on-premises",
        "Multiple public clouds"
      ],
      "answer": 1,
      "explanation": "Hybrid cloud combines on-premises infrastructure with public cloud services."
    },
    {
      "question": "What is AWS Direct Connect?",
      "options": [
        "VPN connection",
        "Dedicated private network connection from on-premises to AWS",
        "Internet-based connection",
        "Satellite connection"
      ],
      "answer": 1,
      "explanation": "Direct Connect provides a dedicated, private, high-bandwidth connection."
    },
    {
      "question": "What is AWS Outposts?",
      "options": [
        "Cloud region",
        "AWS infrastructure running in your data center",
        "Storage service",
        "Compute service"
      ],
      "answer": 1,
      "explanation": "Outposts brings native AWS infrastructure to on-premises data centers."
    },
    {
      "question": "What is Storage Gateway?",
      "options": [
        "Compute service",
        "Hybrid cloud storage with on-premises caching",
        "Database service",
        "Monitoring service"
      ],
      "answer": 1,
      "explanation": "Storage Gateway integrates on-premises storage with AWS cloud storage."
    },
    {
      "question": "What is the primary benefit of hybrid cloud?",
      "options": [
        "Lower cloud costs",
        "Run sensitive workloads on-premises while using cloud for elasticity",
        "Simpler architecture",
        "Faster internet"
      ],
      "answer": 1,
      "explanation": "Hybrid cloud enables compliance, low-latency, and legacy integration while leveraging cloud elasticity."
    },
    {
      "question": "What is Transit Gateway?",
      "options": [
        "A container service",
        "A hub connecting VPCs and on-premises networks",
        "A storage service",
        "A compute service"
      ],
      "answer": 1,
      "explanation": "Transit Gateway acts as a central hub for network connectivity across VPCs and on-premises."
    },
    {
      "question": "Hybrid Cloud — What reduces errors most?",
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
      "question": "Hybrid Cloud — What improves speed?",
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
      "question": "Hybrid Cloud — What is key for monitoring?",
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
      "question": "Hybrid Cloud — What ensures quality?",
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
