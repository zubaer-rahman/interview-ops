export const devops_cloud_security = {
  "id": "devops-cloud-security",
  "title": "Cloud Security",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Cloud security encompasses policies, technologies, and controls protecting cloud-based systems, data, and infrastructure from threats, following the shared responsibility model.",
    "Shared responsibility model: AWS secures the cloud (physical data centers, hardware, virtualization). Customers secure what is in the cloud (data, applications, IAM, network config, OS patches).",
    "Key domains: IAM (identity and access management), detective controls (monitoring, logging), infrastructure protection (network security, encryption), data protection (encryption at rest/transit), incident response (forensics, containment), and compliance (regulatory requirements).",
    "AWS security services: IAM, Organizations/SCPs, GuardDuty (threat detection), Security Hub (compliance), WAF (web application firewall), Shield (DDoS protection), KMS (encryption), Macie (data discovery), and Inspector (vulnerability scanning)."
  ],
  "laymanDefinition": "Cloud security is like securing a vacation home you rent. The rental company (AWS) is responsible for the building structure, doors, windows, and neighborhood safety (security OF the cloud). You are responsible for locking the doors, setting the alarm, keeping valuables in the safe, and not sharing the access code with strangers (security IN the cloud). If a window is broken, the rental company fixes it. If you leave the door open and someone walks in, that is your responsibility.",
  "deepDive": [
    {
      "heading": "Identity and Access Management (IAM)",
      "text": "IAM is the foundation of AWS security. Users: individual people (long-term credentials). Groups: collections of users with shared permissions. Roles: assume by users, services, or federated identities (temporary credentials). Policies: JSON documents defining permissions — AWS-managed or customer-managed. Least privilege: grant only required permissions. Password policy: enforce complexity, rotation. MFA: require multi-factor for all users. Access Analyzer: identify resources shared with external entities."
    },
    {
      "heading": "Infrastructure Protection",
      "text": "Security groups: instance-level firewalls (allow rules only, stateful). Network ACLs: subnet-level firewalls (allow and deny rules, stateless). AWS WAF: web application firewall protecting against SQL injection, XSS, and OWASP Top 10 threats. AWS Shield: DDoS protection (Standard — free, Advanced — $3000/month + data transfer). Network Firewall: managed firewall with intrusion prevention (IPS), stateful inspection. VPC security: private subnets, flow logs, VPN/Direct Connect encryption."
    },
    {
      "heading": "Data Protection and Encryption",
      "text": "Encryption at rest: S3 (SSE-S3, SSE-KMS, SSE-C), EBS (encrypted volumes), RDS (encrypted instances), DynamoDB (encrypted tables), KMS (managed key creation and rotation). Encryption in transit: TLS/SSL for all data in motion, ACM (Certificate Manager) for SSL/TLS certificates. Key management: AWS KMS for most services, CloudHSM for FIPS 140-2 Level 3 compliance. Secrets management: AWS Secrets Manager (automated rotation, fine-grained access), Parameter Store (hierarchical, SecureString parameter type)."
    },
    {
      "heading": "Detection and Monitoring",
      "text": "CloudTrail: records all API activity (who did what, when, from where). CloudWatch: metrics, logs, alarms. GuardDuty: intelligent threat detection using ML — analyzes CloudTrail, VPC Flow Logs, DNS logs. Security Hub: aggregated security findings across AWS services (GuardDuty, Inspector, Macie) with compliance standards (CIS, PCI DSS, SOC 2). Config: resource configuration tracking and compliance rules. Detective: investigation and root cause analysis of security events."
    },
    {
      "heading": "Incident Response and Compliance",
      "text": "Incident response: prepare (incident response plan, tools, team), identify (detection via GuardDuty, Security Hub), contain (isolate resources, revoke access), eradicate (remove threat, patch), recover (restore from clean backup). Forensics: use AWS D FR (Digital Forensics and Response) tools or third-party. Compliance: know your requirements (SOC 2, PCI DSS, HIPAA, GDPR). Artifact: download AWS compliance reports. Audit Manager: automate evidence collection. Well-Architected Security Pillar: design principles, best practices, and review questions."
    }
  ],
  "interviewAnswer": "Cloud security follows the shared responsibility model. Start with IAM — implement least privilege and MFA. Encrypt data at rest and in transit. Use detective controls: CloudTrail, GuardDuty, Security Hub. Protect infrastructure with security groups, WAF, and Shield. Implement incident response capabilities. Use Compliance standards (CIS, PCI DSS) in Security Hub. Regularly review the Well-Architected Security Pillar. Security is everyone's responsibility, not just the security team's.",
  "interviewQuestions": [
    {
      "question": "What is the shared responsibility model?",
      "answer": "AWS secures the cloud infrastructure. Customers secure data, applications, and configurations in the cloud."
    },
    {
      "question": "What is IAM?",
      "answer": "Identity and Access Management — managing users, groups, roles, and permissions in AWS."
    },
    {
      "question": "What is the principle of least privilege?",
      "answer": "Grant only the permissions required to perform a task — nothing more."
    },
    {
      "question": "What is AWS GuardDuty?",
      "answer": "A threat detection service using ML to analyze CloudTrail, VPC Flow Logs, and DNS logs."
    },
    {
      "question": "What is AWS WAF?",
      "answer": "Web Application Firewall protecting against SQL injection, XSS, and OWASP Top 10 threats."
    },
    {
      "question": "What is the difference between security groups and NACLs?",
      "answer": "Security groups: stateful, allow-only, instance-level. NACLs: stateless, allow+deny, subnet-level."
    },
    {
      "question": "What is AWS KMS?",
      "answer": "Key Management Service — managed creation, rotation, and access control of encryption keys."
    },
    {
      "question": "What is AWS Security Hub?",
      "answer": "A central dashboard aggregating security findings from GuardDuty, Inspector, Macie, and third-party tools."
    },
    {
      "question": "What is CloudTrail?",
      "answer": "A service that records all API activity in your AWS account for auditing and security analysis."
    },
    {
      "question": "What is AWS Shield?",
      "answer": "A managed DDoS protection service — Standard (free) and Advanced ($3000/month + data transfer)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cloud Security</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IAM</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Identity + Access</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Encryption</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data protection</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monitoring</text><text x=\"60\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GuardDuty, CloudTr</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ail</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Security</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Shared responsibility</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compliance</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SOC, PCI, HIPAA</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Incident</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Response plan</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Security</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Shared responsibility: IAM, encr</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">yption, threat detection, WAF, S</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hield, compliance, incident resp</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">onse.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cloud Security: Shared responsibility. IAM, encryp</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tion, GuardDuty, WAF, Shield, Security Hub, compli</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ance, incident response.</text></svg>",
  "codeExamples": [
    {
      "title": "IAM Least Privilege Policy",
      "useCase": "Grant minimal permissions.",
      "code": "# iam-policy.json — Least privilege for S3 read-only\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:GetObject\",\n        \"s3:ListBucket\"\n      ],\n      \"Resource\": [\n        \"arn:aws:s3:::my-app-data-bucket\",\n        \"arn:aws:s3:::my-app-data-bucket/*\"\n      ],\n      \"Condition\": {\n        \"IpAddress\": {\n          \"aws:SourceIp\": \"203.0.113.0/24\"\n        }\n      }\n    },\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": \"*\",\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"BoolIfExists\": {\n          \"aws:MultiFactorAuthPresent\": \"false\"\n        }\n      }\n    }\n  ]\n}",
      "description": "IAM policy with least privilege — read-only S3 access restricted to office IP, with MFA requirement."
    },
    {
      "title": "GuardDuty Threat Detection Setup",
      "useCase": "Enable intelligent threat detection.",
      "code": "# Enable GuardDuty (via CLI)\naws guardduty create-detector --enable --finding-publishing-frequency FIFTEEN_MINUTES\n\n# GuardDuty findings examples:\n# - Discovery:S3/MaliciousIPCaller (unusual S3 access)\n# - CryptoCurrency:EC2/BitcoinTool.B (mining detection)\n# - Backdoor:EC2/C&CActivity.B (command & control)\n# - UnauthorizedAccess:EC2/SSHBruteForce (brute force)\n# - Policy:IAMUser/RootCredentialUsage (root key used)\n\n# Automated response with EventBridge + Lambda\n# EventBridge rule matches GuardDuty findings\n# Lambda function auto-remediates, e.g.:\n# - Isolate compromised instance (security group change)\n# - Rotate IAM credentials\n# - Take EBS snapshot for forensics\n# - Notify security team via SNS\n\n# Sample EventBridge rule\n{\n  \"source\": [\"aws.guardduty\"],\n  \"detail-type\": [\"GuardDuty Finding\"],\n  \"detail\": {\n    \"severity\": [4, 7, 8, 9, 10],\n    \"type\": [\"Backdoor*\", \"CryptoCurrency*\", \"UnauthorizedAccess*\"]\n  }\n}",
      "description": "AWS GuardDuty configuration with automated incident response using EventBridge and Lambda for high-severity findings."
    },
    {
      "title": "S3 Bucket Security Configuration",
      "useCase": "Secure S3 bucket setup.",
      "code": "# Secure S3 bucket configuration (all at once)\naws s3api create-bucket --bucket my-secure-bucket --region us-east-1\n\n# Block all public access\naws s3api put-public-access-block \\\n  --bucket my-secure-bucket \\\n  --public-access-block-configuration \\\n  \"BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true\"\n\n# Enable encryption (SSE-KMS)\naws s3api put-bucket-encryption \\\n  --bucket my-secure-bucket \\\n  --server-side-encryption-configuration\n  \"{\\\"Rules\\\":[{\\\"ApplyServerSideEncryptionByDefault\\\":{\\\"SSEAlgorithm\\\":\\\"aws:kms\\\",\\\"KMSMasterKeyID\\\":\\\"alias/s3-key\\\"}}]}\"\n\n# Enable versioning\naws s3api put-bucket-versioning \\\n  --bucket my-secure-bucket \\\n  --versioning-configuration Status=Enabled\n\n# Enable access logging\naws s3api put-bucket-logging \\\n  --bucket my-secure-bucket \\\n  --bucket-logging-status\n  \"{\\\"LoggingEnabled\\\":{\\\"TargetBucket\\\":\\\"my-log-bucket\\\",\\\"TargetPrefix\\\":\\\"s3-access-logs/\\\"}}\"\n\n# Enable Object Lock (WORM)\naws s3api put-object-lock-configuration \\\n  --bucket my-secure-bucket \\\n  --object-lock-configuration ObjectLockEnabled=Enabled,Rule={DefaultRetention={Mode=GOVERNANCE,Days=365}}",
      "description": "Comprehensive S3 security: block public access, enable encryption, versioning, logging, and Object Lock."
    },
    {
      "title": "AWS WAF Web ACL Configuration",
      "useCase": "Protect web application.",
      "code": "# WAF Web ACL with OWASP rules (via AWS CLI)\n# Create Web ACL\naws wafv2 create-web-acl \\\n  --name \"app-web-acl\" \\\n  --scope REGIONAL \\\n  --default-action Allow={} \\\n  --description \"WAF for web application\" \\\n  --rules file://waf-rules.json\n\n# waf-rules.json — Core rule set\n[\n  {\n    \"Name\": \"AWS-AWSManagedRulesCommonRuleSet\",\n    \"Priority\": 1,\n    \"Statement\": {\n      \"ManagedRuleGroupStatement\": {\n        \"VendorName\": \"AWS\",\n        \"Name\": \"AWSManagedRulesCommonRuleSet\"\n      }\n    },\n    \"OverrideAction\": { \"None\": {} },\n    \"VisibilityConfig\": {\n      \"SampledRequestsEnabled\": true,\n      \"CloudWatchMetricsEnabled\": true,\n      \"MetricName\": \"AWSCommonRules\"\n    }\n  },\n  {\n    \"Name\": \"RateLimit\",\n    \"Priority\": 2,\n    \"Statement\": {\n      \"RateBasedStatement\": {\n        \"Limit\": 2000,\n        \"AggregateKeyType\": \"IP\"\n      }\n    },\n    \"Action\": { \"Block\": {} }\n  }\n]\n\n# Also include: SQL injection, XSS, and IP reputation rule sets",
      "description": "AWS WAF Web ACL with AWS managed OWASP rules and rate limiting protection for web applications."
    },
    {
      "title": "Security Incident Response Runbook",
      "useCase": "Automated incident response.",
      "code": "# Incident Response Automation (EventBridge + Step Functions)\n\n# Step 1: GuardDuty detects finding (severity >= 7)\n# Step 2: EventBridge triggers Step Function\n# Step 3: Step Function executes:\n\n# Step Function definition (pseudo-code):\n# {\n#   \"StartAt\": \"IsolateInstance\",\n#   \"States\": {\n#     \"IsolateInstance\": {\n#       \"Type\": \"Task\",\n#       \"Resource\": \"arn:aws:lambda:isolate-instance\",\n#       \"Parameters\": {\n#         \"InstanceId.$\": \"$.detail.resource.instanceDetails.instanceId\"\n#       },\n#       \"Next\": \"TakeSnapshot\"\n#     },\n#     \"TakeSnapshot\": {\n#       \"Type\": \"Task\",\n#       \"Resource\": \"arn:aws:lambda:take-ebs-snapshot\",\n#       \"Next\": \"RotateCredentials\"\n#     },\n#     \"RotateCredentials\": {\n#       \"Type\": \"Task\",\n#       \"Resource\": \"arn:aws:lambda:rotate-instance-role\",\n#       \"Next\": \"NotifyTeam\"\n#     },\n#     \"NotifyTeam\": {\n#       \"Type\": \"Task\",\n#       \"Resource\": \"arn:aws:lambda:send-sns-notification\",\n#       \"End\": true\n#     }\n#   }\n# }",
      "description": "Automated security incident response workflow using EventBridge, Step Functions, and Lambda functions for isolation, forensics, and notification."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the shared responsibility model?",
      "options": [
        "AWS is responsible for everything",
        "Customer is responsible for everything",
        "AWS secures cloud infrastructure, customer secures what is in the cloud",
        "No shared responsibility"
      ],
      "answer": 2,
      "explanation": "AWS secures the cloud, customers secure their data and applications."
    },
    {
      "question": "What is the principle of least privilege?",
      "options": [
        "Grant all permissions",
        "Grant only necessary permissions",
        "Grant no permissions",
        "Grant admin access"
      ],
      "answer": 1,
      "explanation": "Least privilege grants only the permissions needed for the task."
    },
    {
      "question": "What does AWS GuardDuty detect?",
      "options": [
        "Cost anomalies",
        "Threats using ML analysis of CloudTrail, VPC Flow Logs, and DNS",
        "Performance issues",
        "Database errors"
      ],
      "answer": 1,
      "explanation": "GuardDuty uses ML to detect threats across AWS accounts and workloads."
    },
    {
      "question": "What is the difference between security groups and NACLs?",
      "options": [
        "Same thing",
        "Security groups are stateful and allow-only; NACLs are stateless with allow+deny",
        "NACLs are stateful",
        "Security groups are at subnet level"
      ],
      "answer": 1,
      "explanation": "Security groups: stateful, allow-only, instance-level. NACLs: stateless, allow+deny, subnet-level."
    },
    {
      "question": "What is AWS WAF?",
      "options": [
        "Database service",
        "Web application firewall protecting against OWASP threats",
        "Compute service",
        "Monitoring service"
      ],
      "answer": 1,
      "explanation": "WAF protects web applications from SQL injection, XSS, and other threats."
    },
    {
      "question": "What is AWS Security Hub?",
      "options": [
        "A compute service",
        "Central dashboard for security findings and compliance",
        "A storage service",
        "A networking service"
      ],
      "answer": 1,
      "explanation": "Security Hub aggregates findings from GuardDuty, Inspector, Macie, and third-party tools."
    },
    {
      "question": "Cloud Security — What reduces errors most?",
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
      "question": "Cloud Security — What improves speed?",
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
      "question": "Cloud Security — What is key for monitoring?",
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
      "question": "Cloud Security — What ensures quality?",
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
