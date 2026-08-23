export const devops_aws_ec2 = {
  "id": "devops-aws-ec2",
  "title": "AWS EC2",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Amazon EC2 (Elastic Compute Cloud) provides scalable virtual servers in the AWS cloud, allowing you to launch instances with custom configurations.",
    "Instance types: general purpose (t3, m5), compute optimized (c5), memory optimized (r5, x1), storage optimized (i3, d2), and GPU (p3, g4) for different workload needs.",
    "Key features: AMIs (pre-configured templates), security groups (virtual firewalls), key pairs (SSH access), EBS volumes (persistent storage), Elastic IPs (static IP addresses).",
    "Pricing models: On-Demand (pay per hour/second), Reserved (1-3 year commitment, up to 72% savings), Spot (up to 90% discount, can be interrupted), and Dedicated Hosts (physical server isolation)."
  ],
  "laymanDefinition": "EC2 is like renting a car instead of buying one. You pick the type (compact car = t3.micro, SUV = m5.large, sports car = c5.2xlarge) based on your trip. You pay by the hour (On-Demand), get a discount for renting a month (Reserved), or grab a last-minute deal that might get cancelled (Spot). You can customize it with accessories (AMI) and set rules for who can drive (security groups).",
  "deepDive": [
    {
      "heading": "Instance Types and Families",
      "text": "General purpose (t3, m5): balanced CPU/memory for web servers and small databases. Compute optimized (c5, c6g): CPU-heavy for batch processing and gaming. Memory optimized (r5, x1): large datasets and in-memory caches. Storage optimized (i3, d2): high I/O for data warehousing. GPU (p3, g4): ML training and rendering. Each family has sizes from nano to 24xlarge."
    },
    {
      "heading": "Security Groups and Networking",
      "text": "Security groups act as virtual firewalls controlling inbound/outbound traffic. Rules are allow-only, stateful, and evaluated collectively. Default: deny all inbound, allow all outbound. Best practice: least privilege — only open required ports (22/SSH, 80/HTTP, 443/HTTPS). Key pairs: store private key securely, never share. Use EC2 Instance Connect or Systems Manager Session Manager instead of SSH for better security."
    },
    {
      "heading": "EBS (Elastic Block Store)",
      "text": "Persistent block storage volumes attached to EC2 instances. Volume types: gp3 (general purpose SSD, baseline 3000 IOPS), io2 (provisioned IOPS up to 256K), st1 (throughput optimized HDD), sc1 (cold HDD). Snapshots: point-in-time backups stored in S3, incremental, shared across regions. AMI: combines root volume snapshot with launch permissions. Lifecycle Manager automates snapshot schedules."
    },
    {
      "heading": "Auto Scaling and Load Balancing",
      "text": "Auto Scaling Groups (ASG): maintain desired instance count, scale based on metrics (CPU, memory, custom). Launch template defines instance configuration. ELB (Elastic Load Balancing): distributes traffic across instances. Types: ALB (HTTP/HTTPS, path-based routing), NLB (TCP/UDP, ultra-low latency), CLB (legacy). Health checks: ELB pings /health endpoint, ASG replaces unhealthy instances."
    },
    {
      "heading": "EC2 Pricing and Cost Optimization",
      "text": "On-Demand: no commitment, highest cost, ideal for short-term workloads. Reserved Instances: 1 or 3 year term, standard (72% off) or convertible (54% off, change attributes). Savings Plans: flexible discount ($/hour commitment) across instance families. Spot Instances: up to 90% discount, AWS can reclaim with 2-minute warning. Use Spot for fault-tolerant, stateless workloads. Instance Scheduler: stop/start on schedule to save costs."
    }
  ],
  "interviewAnswer": "EC2 is the foundational compute service on AWS. Choose the right instance type for your workload. Use security groups for network security. Implement Auto Scaling for elasticity. Combine Reserved Instances or Savings Plans with Spot for optimal cost. Use AMIs for consistent, fast instance launches. Always test in a VPC with proper subnet configuration.",
  "interviewQuestions": [
    {
      "question": "What is Amazon EC2?",
      "answer": "Elastic Compute Cloud — virtual servers in the AWS cloud with customizable configurations."
    },
    {
      "question": "What are the main EC2 instance families?",
      "answer": "General purpose, compute optimized, memory optimized, storage optimized, and GPU instances."
    },
    {
      "question": "What is the difference between On-Demand, Reserved, and Spot instances?",
      "answer": "On-Demand: pay per hour, no commitment. Reserved: 1-3 year commitment, up to 72% discount. Spot: up to 90% discount, can be interrupted."
    },
    {
      "question": "What is a security group?",
      "answer": "A virtual firewall that controls inbound and outbound traffic for EC2 instances."
    },
    {
      "question": "What is an EBS volume?",
      "answer": "Persistent block storage that can be attached to EC2 instances for data persistence."
    },
    {
      "question": "What is an AMI?",
      "answer": "Amazon Machine Image — a pre-configured template for launching EC2 instances with specific software and settings."
    },
    {
      "question": "What is an Auto Scaling Group?",
      "answer": "A group of EC2 instances that automatically scales based on defined policies and health checks."
    },
    {
      "question": "What types of load balancers does AWS offer?",
      "answer": "ALB (Application Layer), NLB (Network Layer), and CLB (Classic — legacy)."
    },
    {
      "question": "What is an Elastic IP?",
      "answer": "A static public IPv4 address that can be associated with an EC2 instance for consistent addressing."
    },
    {
      "question": "What is the difference between gp3 and io2 EBS volumes?",
      "answer": "gp3: general purpose SSD with baseline 3000 IOPS. io2: provisioned IOPS up to 256K for mission-critical applications."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">AWS EC2</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EC2 Instance</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Virtual server</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EBS Volume</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Persistent storage</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security Group</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Firewall rules</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"120\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EC2</text><text x=\"210\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Elastic Compute Cloud</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auto Scaling</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Elasticity</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ELB</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Load balancer</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AWS EC2</text><text x=\"385\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Virtual servers in the cloud. Inst</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ance families, EBS, security group</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s, auto scaling, load balancing, p</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ricing models.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">AWS EC2: Scalable virtual servers. Instances, EBS,</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> security groups, auto scaling, ELB, pricing.</text></svg>",
  "codeExamples": [
    {
      "title": "Launching EC2 Instance with User Data",
      "useCase": "Launch a web server instance.",
      "code": "# Launch EC2 with user data script\naws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --instance-type t2.micro \\\n  --key-name my-key \\\n  --security-group-ids sg-123 \\\n  --subnet-id subnet-456 \\\n  --user-data file://user-data.sh \\\n  --tag-specifications\n    \"ResourceType=instance,Tags=[{Key=Name,Value=WebServer}]\"\n\n# User data script (passed as file):\n#!/bin/bash\nyum update -y\nyum install -y httpd\nsystemctl start httpd\nsystemctl enable httpd\necho '<h1>Hello from EC2</h1>' > /var/www/html/index.html",
      "description": "Launching an EC2 instance with a user data script that installs and starts Apache web server."
    },
    {
      "title": "Auto Scaling with CloudWatch Alarm",
      "useCase": "Scale based on CPU.",
      "code": "# Create scale-out policy\naws autoscaling put-scaling-policy \\\n  --auto-scaling-group-name my-asg \\\n  --policy-name scale-out \\\n  --scaling-adjustment 2 \\\n  --adjustment-type ChangeInCapacity\n\n# Create CloudWatch alarm for scale-out\naws cloudwatch put-metric-alarm \\\n  --alarm-name high-cpu \\\n  --metric-name CPUUtilization \\\n  --namespace AWS/EC2 \\\n  --statistic Average \\\n  --period 300 \\\n  --threshold 70 \\\n  --comparison-operator GreaterThanThreshold \\\n  --dimensions Name=AutoScalingGroupName,Value=my-asg \\\n  --alarm-actions arn:aws:autoscaling:...:policy/scale-out",
      "description": "Auto Scaling policy with CloudWatch alarm that adds instances when CPU exceeds 70%."
    },
    {
      "title": "EBS Snapshot Lifecycle Policy",
      "useCase": "Automated backup management.",
      "code": "# Create DLM lifecycle policy\naws dlm create-lifecycle-policy \\\n  --description \"EBS snapshot backup\" \\\n  --state ENABLED \\\n  --policy-details '{\n    \"ResourceTypes\": [\"VOLUME\"],\n    \"TargetTags\": [{\"Key\": \"Backup\", \"Value\": \"true\"}],\n    \"Schedules\": [{\n      \"Name\": \"DailySnapshots\",\n      \"CopyTags\": true,\n      \"TagsToAdd\": [{\"Key\": \"Type\", \"Value\": \"Automated\"}],\n      \"CreateRule\": {\"Interval\": 12, \"IntervalUnit\": \"HOURS\"},\n      \"RetainRule\": {\"Count\": 14}\n    }]\n  }'",
      "description": "Data Lifecycle Manager policy for automated EBS snapshots with retention rules."
    },
    {
      "title": "EC2 Instance Connect Configuration",
      "useCase": "Secure SSH without key management.",
      "code": "# Install EC2 Instance Connect on an instance\n# Requires: ec2-instance-connect package\n\n# AWS CLI command to push SSH key\naws ec2-instance-connect send-ssh-public-key \\\n  --instance-id i-1234567890abcdef0 \\\n  --availability-zone us-east-1a \\\n  --instance-os-user ec2-user \\\n  --ssh-public-key file://~/.ssh/id_rsa.pub\n\n# Then SSH normally\nssh ec2-user@instance-ip\n\n# Or use SSH over Systems Manager (no public IP needed)\naws ssm start-session \\\n  --target i-1234567890abcdef0",
      "description": "EC2 Instance Connect and Systems Manager Session Manager for secure access without managing SSH keys."
    },
    {
      "title": "Reserved Instance Report",
      "useCase": "Track RI usage and savings.",
      "code": "# Check RI utilization via AWS CLI\naws ce get-reservation-utilization \\\n  --time-period Start=2024-01-01,End=2024-01-31 \\\n  --granularity MONTHLY\n\n# List available reserved instances\naws ec2 describe-reserved-instances \\\n  --filters \"Name=state,Values=active\"\n\n# Get EC2 instance count by type\naws ec2 describe-instances \\\n  --query 'Reservations[*].Instances[*].[InstanceType,State.Name]' \\\n  --output text | sort | uniq -c | sort -rn",
      "description": "CLI commands to track Reserved Instance utilization and savings."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which EC2 pricing model offers the largest discount?",
      "options": [
        "On-Demand",
        "Reserved",
        "Spot",
        "Dedicated Host"
      ],
      "answer": 2,
      "explanation": "Spot instances offer up to 90% discount but can be interrupted."
    },
    {
      "question": "What does EBS stand for?",
      "options": [
        "Elastic Block Store",
        "Elastic Backup Service",
        "EC2 Block Storage",
        "Elastic Byte Storage"
      ],
      "answer": 0,
      "explanation": "EBS = Elastic Block Store — persistent block storage for EC2."
    },
    {
      "question": "Which EC2 instance family is best for CPU-intensive workloads?",
      "options": [
        "t3 (general purpose)",
        "c5 (compute optimized)",
        "r5 (memory optimized)",
        "i3 (storage optimized)"
      ],
      "answer": 1,
      "explanation": "C5 instances are compute optimized with high CPU-to-memory ratios."
    },
    {
      "question": "How do security group rules work?",
      "options": [
        "Deny rules first, then allow",
        "Only allow rules, stateful",
        "Only deny rules",
        "Allow and deny rules both evaluated"
      ],
      "answer": 1,
      "explanation": "Security groups are allow-only and stateful — return traffic is automatically allowed."
    },
    {
      "question": "What is the difference between ALB and NLB?",
      "options": [
        "ALB is Layer 7, NLB is Layer 4",
        "ALB is Layer 4, NLB is Layer 7",
        "Both are Layer 7",
        "Both are Layer 4"
      ],
      "answer": 0,
      "explanation": "ALB operates at Layer 7 (HTTP/HTTPS). NLB operates at Layer 4 (TCP/UDP)."
    },
    {
      "question": "What is the 2-minute warning for Spot instances?",
      "options": [
        "Time before Spot price changes",
        "Time before instance is reclaimed",
        "Time to launch replacement",
        "Time before billing cycle ends"
      ],
      "answer": 1,
      "explanation": "AWS gives a 2-minute warning before reclaiming a Spot instance."
    },
    {
      "question": "AWS EC2 — What reduces errors most?",
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
      "question": "AWS EC2 — What improves speed?",
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
      "question": "AWS EC2 — What is key for monitoring?",
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
      "question": "AWS EC2 — What ensures quality?",
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
