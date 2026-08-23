const e={id:"devops-cost-optimization",title:"Cloud Cost Optimization",difficulty:"intermediate",estimatedMinutes:15,tldr:["Cloud cost optimization is the practice of reducing overall cloud spending while maintaining or improving performance, security, and reliability.","The five pillars of cost optimization: Right-sizing (match resources to workload), Elasticity (scale with demand), Reserved capacity (prepay for discounts), Storage optimization (use appropriate tiers), and Eliminate waste (remove unused resources).","Key AWS tools: Cost Explorer (visualize spending), AWS Budgets (alerts), Trusted Advisor (cost checks), Compute Optimizer (right-sizing recommendations), Savings Plans (flexible pricing discounts).","Common waste sources: idle load balancers, unattached EBS volumes, unassociated Elastic IPs, over-provisioned instances, orphaned snapshots, and forgotten development environments running 24/7."],laymanDefinition:"Cloud cost optimization is like managing your monthly subscriptions. You check if you are paying for Netflix, Spotify, and cloud storage you no longer use (unused resources). You downgrade from premium to standard if you do not need premium features (right-sizing). You get an annual discount by paying upfront (Reserved Instances). You automatically pause services when you are asleep (scheduling). Without regular checks, you waste money on services you do not need.",deepDive:[{heading:"Right-Sizing and Resource Optimization",text:"Right-sizing: match instance type and size to actual workload requirements. Use AWS Compute Optimizer for ML-based recommendations. Analyze CloudWatch metrics (CPU, memory, network) over 2-week period. Look for consistently underutilized instances (< 20% CPU). Downsizing: move from m5.xlarge to m5.large if utilization supports it. Modernization: upgrade to newer generation instances (t3 vs t2) for better price-performance. Graviton (ARM) instances offer 20-40% better price-performance for compatible workloads."},{heading:"Reserved Capacity and Savings Plans",text:"Reserved Instances (RI): 1 or 3 year term, Standard (up to 72% off — fixed attributes) or Convertible (up to 54% off — change attributes). Savings Plans: flexible discount in exchange for $/hour commitment. Compute Savings Plans: apply to any EC2, Fargate, Lambda. EC2 Instance Savings Plans: apply to specific family in region. RIs are good for steady-state workloads. Savings Plans offer more flexibility. Combine with Spot for maximum savings. Use the AWS Savings Plans Recommendation report."},{heading:"Storage Cost Optimization",text:"S3 storage classes: transition objects automatically using lifecycle policies (Standard → IA → Glacier → Deep Archive). Delete incomplete multipart uploads. Enable S3 Intelligent-Tiering for unknown access patterns. EBS: delete unattached volumes, use gp3 over gp2 (better performance at lower cost), snapshot old volumes. RDS: use Aurora for better price-performance, delete old automated snapshots, rightsizing based on CloudWatch metrics. ECR: lifecycle policies to expire old container images."},{heading:"Cost Monitoring and Governance",text:"AWS Budgets: set cost and usage budgets with alerts at 50%, 80%, 90%, 100%. Cost Explorer: visualize spending by service, account, region, tag. Cost Allocation Tags: tag all resources with Environment, Project, CostCenter for granular tracking. AWS Organizations: consolidated billing for volume discounts, SCPs to restrict expensive services. Instance Scheduler: automatically stop/start instances on schedule. AWS Config: track configuration changes that impact costs. Anomaly Detection: AWS Cost Anomaly Detection for unusual spending patterns."},{heading:"Architecture Cost Optimization",text:"Serverless: Lambda, Fargate, and API Gateway reduce costs for variable workloads (no idle capacity). Spot instances: use for fault-tolerant, stateless, or batch workloads (up to 90% discount). Caching: CloudFront CDN (reduce origin requests), ElastiCache (reduce database reads). Data transfer: use CloudFront (lower egress costs than direct S3), VPC endpoints (free for S3/DynamoDB), compress data, minimize cross-region transfers. Graviton: migrate to ARM-based instances for 20-40% savings."}],interviewAnswer:"Cloud cost optimization is an ongoing practice. Right-size resources based on actual utilization. Use Reserved Instances or Savings Plans for steady-state workloads. Use lifecycle policies for storage optimization. Implement governance with budgets, tags, and SCPs. Schedule non-production resources. Use Spot instances for flexible workloads. Monitor costs weekly with Cost Explorer. Tag everything for accountability. The cloud provider makes it easy to spend money — you must make it easy to save.",interviewQuestions:[{question:"What is cloud cost optimization?",answer:"Reducing cloud spending while maintaining performance, security, and reliability."},{question:"What are the five pillars of cost optimization?",answer:"Right-sizing, elasticity, reserved capacity, storage optimization, eliminate waste."},{question:"What is right-sizing?",answer:"Matching instance type and size to actual workload requirements based on utilization metrics."},{question:"What is the difference between Reserved Instances and Savings Plans?",answer:"RIs: fixed attributes, 72% off. Savings Plans: flexible ($/hour commitment), up to 66% off."},{question:"What are Spot instances?",answer:"Discounted EC2 instances (up to 90% off) that can be reclaimed by AWS with 2-minute notice."},{question:"What is AWS Cost Explorer?",answer:"A tool for visualizing, understanding, and managing AWS costs and usage over time."},{question:"What are cost allocation tags?",answer:"Tags (Environment, Project, CostCenter) for granular cost tracking and reporting."},{question:"What is the Instance Scheduler?",answer:"An AWS solution that automatically starts and stops EC2 instances on a schedule."},{question:"What is the most common source of cloud waste?",answer:"Unused or over-provisioned resources — idle instances, unattached volumes, forgotten dev environments."},{question:"What is Graviton?",answer:"AWS ARM-based processors offering 20-40% better price-performance for compatible workloads."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Cloud Cost Optimization</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Right-size</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Match to workload</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Reserve</text><text x="60" y="73" text-anchor="middle" font-size="9" fill="#ddd">RIs + Savings Plan</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">s</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Spot</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">90% discount</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cost Optimization</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Reduce cloud spend</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Govern</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Budgets + tags</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Schedule</text><text x="60" y="168" text-anchor="middle" font-size="9" fill="#ddd">Stop/start non-pro</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">d</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cost Optimization</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Right-sizing, Reservations, Spot</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">, storage tiers, governance, sch</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">eduling, monitoring with Cost Ex</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">plorer.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Cloud Cost Optimization: Right-sizing, Reserved/Sa</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">vings Plans, Spot, storage optimization, governanc</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">e, scheduling.</text></svg>',codeExamples:[{title:"AWS Budget and Alert Setup",useCase:"Set cost budgets and alerts.",code:`# Create a cost budget with alerts
aws budgets create-budget \\
  --account-id 123456789012 \\
  --budget file://budget.json

# budget.json
{
  "BudgetName": "Monthly-Dev-Budget",
  "BudgetLimit": {
    "Amount": "5000",
    "Unit": "USD"
  },
  "CostFilters": {
    "TagKeyValue": ["Environment$dev"]
  },
  "TimeUnit": "MONTHLY",
  "BudgetType": "COST"
}

# Create budget actions (auto-stop instances if over budget)
aws budgets create-budget-action \\
  --account-id 123456789012 \\
  --budget-name "Monthly-Dev-Budget" \\
  --action-type APPLY_IAM_POLICY \\
  --execution-role-arn arn:aws:iam::123456:role/budget-action-role \\
  --action-threshold Threshold=100,Type=ABSOLUTE_VALUE \\
  --subscribers SubscriptionType=EMAIL,Address=team@company.com`,description:"AWS Budget configuration with cost filters by environment tag and automated budget actions."},{title:"Compute Optimizer Recommendations",useCase:"Get right-sizing recommendations.",code:`# Get EC2 right-sizing recommendations
aws compute-optimizer get-ec2-instance-recommendations \\
  --instance-arns arn:aws:ec2:us-east-1:123456:instance/i-xxx

# Output shows:
# - Current instance type and utilization
# - Recommended instance type
# - Estimated monthly savings
# - Performance risk (Low/Medium/High)

# Example recommendation:
# Current: t3.xlarge (4 vCPU, 16 GB) @ 15% CPU
# Recommended: t3.large (2 vCPU, 8 GB)
# Savings: $47/month (55%)
# Risk: Low (current utilization supports downsizing)

# Get Lambda function recommendations
aws compute-optimizer get-lambda-function-recommendations \\
  --function-arns arn:aws:lambda:us-east-1:123456:function:my-func

# Schedule weekly report with EventBridge + SNS`,description:"AWS Compute Optimizer recommendations for rightsizing EC2 instances and Lambda functions based on utilization."},{title:"Instance Scheduling with Lambda",useCase:"Stop/start instances on schedule.",code:`# Lambda function for instance scheduling
import boto3
import os

ec2 = boto3.client("ec2")

def handler(event, context):
    action = event.get("action", "stop")  # "stop" or "start"
    tags = [{"Key": "Schedule", "Value": os.environ["SCHEDULE_TAG"]}]

    instances = get_instances_by_tag(tags)

    if action == "stop":
        ec2.stop_instances(InstanceIds=instances)
        print(f"Stopped {len(instances)} instances")
    elif action == "start":
        ec2.start_instances(InstanceIds=instances)
        print(f"Started {len(instances)} instances")

def get_instances_by_tag(tags):
    response = ec2.describe_instances(Filters=[
        {"Name": f"tag:{tags[0][Key]}", "Values": [tags[0][Value]]},
        {"Name": "instance-state-name", "Values": ["running", "stopped"]}
    ])
    instances = []
    for reservation in response["Reservations"]:
        for instance in reservation["Instances"]:
            instances.append(instance["InstanceId"])
    return instances

# EventBridge rule: cron(0 8 ? * MON-FRI *) → start
# EventBridge rule: cron(0 20 ? * MON-FRI *) → stop`,description:"Lambda function for scheduling EC2 instances stop/start — triggered by EventBridge rules on business hours schedule."},{title:"S3 Lifecycle Policy for Cost",useCase:"Automate storage tier transitions.",code:`# S3 lifecycle policy JSON
{
  "Rules": [
    {
      "Id": "OptimizeStorageCosts",
      "Status": "Enabled",
      "Prefix": "logs/",
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" },
        { "Days": 90, "StorageClass": "GLACIER" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 730 },
      "NoncurrentVersionTransitions": [
        { "NoncurrentDays": 30, "StorageClass": "STANDARD_IA" }
      ],
      "NoncurrentVersionExpiration": { "NoncurrentDays": 90 }
    },
    {
      "Id": "CleanupIncompleteUploads",
      "Status": "Enabled",
      "Prefix": "",
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 7
      }
    }
  ]
}`,description:"S3 lifecycle policy automating storage class transitions and multi-part upload cleanup for cost optimization."},{title:"Cost Anomaly Detection Setup",useCase:"Detect unusual spending.",code:`# Enable AWS Cost Anomaly Detection
# Via AWS Console → Cost Management → Cost Anomaly Detection

# Step 1: Create a monitor
# - Monitor type: AWS Services
# - Services: EC2, S3, RDS, Lambda
# - Linked account: All

# Step 2: Configure alerting
# - Alert threshold: $100 (or 10% above expected)
# - Notification email: finance@company.com
# - Slack webhook integration (via SNS)

# Step 3: Review findings weekly
# - Anomaly detected: Unexpected 40% increase in EC2 spend
# - Root cause: Developer left 10 GPU instances running
# - Action: Stop instances, implement tighter budgets, add GPU tag alert

# Alternative: Use third-party tools
# - CloudHealth: comprehensive cost management
# - Vantage: simplified cloud cost optimization
# - CloudZero: cost per feature/team tracking`,description:"AWS Cost Anomaly Detection setup for identifying unusual spending patterns and automated alerting."}],mcqQuestions:[{question:"What is right-sizing?",options:["Increasing resources","Matching instance size to actual workload requirements","Using largest instances","Removing all resources"],answer:1,explanation:"Right-sizing matches instance types to actual utilization metrics for cost efficiency."},{question:"What offers the largest discount for consistent workloads?",options:["On-Demand","Spot instances","Reserved Instances (1yr)","Reserved Instances (3yr)"],answer:3,explanation:"3-year Reserved Instances offer the highest discount (up to 72% off) for steady-state workloads."},{question:"What are Spot instances best for?",options:["Production databases","Fault-tolerant, stateless, and batch workloads","Critical applications","Stateful services"],answer:1,explanation:"Spot instances are ideal for fault-tolerant workloads that can handle interruptions."},{question:"What is the most common source of cloud waste?",options:["Storage costs","Idle and over-provisioned resources","Data transfer","Support plans"],answer:1,explanation:"Unused or over-provisioned resources are the #1 source of cloud waste."},{question:"What does AWS Instance Scheduler do?",options:["Schedules database backups","Starts/stops EC2 instances on schedule","Schedules Lambda functions","Schedules EBS snapshots"],answer:1,explanation:"Instance Scheduler automates start/stop of EC2 instances to reduce non-production costs."},{question:"What cost-saving benefit does Graviton provide?",options:["No cost savings","20-40% better price-performance for compatible workloads","50% storage discount","Free data transfer"],answer:1,explanation:"Graviton ARM processors offer 20-40% better price-performance compared to x86 instances."},{question:"Cloud Cost Optimization — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Cloud Cost Optimization — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Cloud Cost Optimization — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Cloud Cost Optimization — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_cost_optimization};
