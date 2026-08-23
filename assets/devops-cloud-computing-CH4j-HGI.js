const e={id:"devops-cloud-computing",title:"Cloud Computing",difficulty:"beginner",estimatedMinutes:15,tldr:["Cloud computing delivers computing services (servers, storage, databases, networking, software) over the internet (the cloud).","Three service models: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service).","Three deployment models: public cloud (AWS/Azure/GCP), private cloud (on-premises), hybrid cloud (combination).","Key benefits: pay-as-you-go pricing, elastic scaling, global reach, reduced capital expenditure, managed services."],laymanDefinition:"Cloud computing is like using a utility company instead of generating your own electricity. Instead of building a power plant (buying servers), you pay for electricity as you use it (pay-as-you-go). You can use more or less without installing new generators (elastic scaling). The utility company handles maintenance (managed services).",deepDive:[{heading:"IaaS (Infrastructure as a Service)",text:"Provides virtualized computing resources over the internet. Examples: AWS EC2, Google Compute Engine, Azure VMs. You manage OS, runtime, and applications. Provider manages hardware, virtualization, and networking. Maximum control and flexibility. Best for lift-and-shift migrations."},{heading:"PaaS (Platform as a Service)",text:"Provides platform to develop, run, and manage applications without infrastructure complexity. Examples: AWS Elastic Beanstalk, Google App Engine, Heroku. Provider manages OS, runtime, scaling. You focus on code. Faster development, less operational overhead. Best for web apps and APIs."},{heading:"SaaS (Software as a Service)",text:"Ready-to-use software delivered over the internet. Examples: Gmail, Salesforce, Slack, Microsoft 365. Provider manages everything. Users just use the application. No installation, maintenance, or upgrades. Pay per user per month. Best for end-user productivity tools."},{heading:"Public vs Private vs Hybrid Cloud",text:"Public: shared infrastructure, multi-tenant, lowest cost. Private: dedicated infrastructure, single tenant, highest control. Hybrid: mix of public and private, workloads can move between them. Community: shared by several organizations with common concerns. Multi-cloud: using multiple public cloud providers."},{heading:"Cloud Computing Benefits",text:"Agility: provision resources in minutes. Elasticity: scale up/down automatically. Cost: pay only for what you use (opex vs capex). Reliability: multiple data centers, global reach. Security: shared responsibility model. Managed services reduce operational burden."}],interviewAnswer:"Cloud computing is the foundation of modern DevOps. Choose the right service model (IaaS/PaaS/SaaS) based on control needs. Leverage elasticity for cost optimization. Understand the shared responsibility model: cloud provider secures the cloud infrastructure, you secure your data and applications.",interviewQuestions:[{question:"What is cloud computing?",answer:"Delivering computing services over the internet with pay-as-you-go pricing and elastic scaling."},{question:"What are the three cloud service models?",answer:"IaaS (Infrastructure), PaaS (Platform), SaaS (Software)."},{question:"What is IaaS?",answer:"Virtualized computing resources — you manage OS and apps, provider manages hardware."},{question:"What is PaaS?",answer:"Platform for developing and running apps without managing infrastructure."},{question:"What is SaaS?",answer:"Ready-to-use software delivered over the internet. Provider manages everything."},{question:"What is the difference between public and private cloud?",answer:"Public: shared multi-tenant infrastructure. Private: dedicated single-tenant infrastructure."},{question:"What is the shared responsibility model?",answer:"Provider secures the cloud infrastructure. Customer secures data, applications, and access within the cloud."},{question:"What is elasticity in cloud computing?",answer:"The ability to automatically scale resources up or down based on demand."},{question:"What is the difference between capex and opex?",answer:"Capex: upfront capital expenditure (buying servers). Opex: ongoing operational expenditure (pay-as-you-go cloud)."},{question:"What is multi-cloud?",answer:"Using multiple public cloud providers (e.g., AWS + Azure) for redundancy, best-of-breed, or avoiding vendor lock-in."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Cloud Computing</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">IaaS</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Infrastructure</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">PaaS</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Platform</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">SaaS</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Software</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="150" height="90" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="235" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cloud Computing</text><text x="235" y="97" text-anchor="middle" font-size="9" fill="#ddd">IaaS, PaaS, SaaS — services</text><text x="235" y="108" text-anchor="middle" font-size="9" fill="#ddd"> delivered over the interne</text><text x="235" y="119" text-anchor="middle" font-size="9" fill="#ddd">t.</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Public Cloud</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">Multi-tenant</text><rect x="10" y="160" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Private Cloud</text><text x="65" y="179" text-anchor="middle" font-size="9" fill="#ddd">Single-tenant</text><rect x="320" y="35" width="160" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="400" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cloud Benefits</text><text x="400" y="162" text-anchor="middle" font-size="9" fill="#ddd">Elasticity, pay-as-you-go, gl</text><text x="400" y="173" text-anchor="middle" font-size="9" fill="#ddd">obal reach, managed services,</text><text x="400" y="184" text-anchor="middle" font-size="9" fill="#ddd"> reliability.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Cloud Computing: IaaS, PaaS, SaaS models. Public/p</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">rivate/hybrid deployment. Elastic, pay-as-you-go i</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">nfrastructure.</text></svg>',codeExamples:[{title:"Provisioning EC2 Instance",useCase:"Launch a virtual server.",code:`# Launch an EC2 instance via CLI
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-12345678 \\
  --subnet-id subnet-12345678 \\
  --tag-specifications
    "ResourceType=instance,
     Tags=[{Key=Name,Value=WebServer}]"`,description:"Launching an EC2 instance using AWS CLI with basic configuration."},{title:"Deploying to PaaS (Heroku)",useCase:"Deploy app without managing servers.",code:`# Deploy a Node.js app to Heroku

# Login
heroku login

# Create app
heroku create my-node-app

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=postgres://...

# Deploy
git push heroku main

# Scale
heroku ps:scale web=2

# View logs
heroku logs --tail`,description:"Deploying a Node.js application to Heroku PaaS without managing servers."},{title:"Cloud Cost Estimation",useCase:"Estimate cloud costs.",code:`# AWS Pricing Calculator concepts

Cost factors for EC2:
  - Instance type (t3.medium = $0.0416/hr)
  - Operating system (Windows costs more)
  - Storage (EBS: gp3 $0.08/GB-month)
  - Data transfer ($0.09/GB out)
  - Reserved instances (1yr = 40% savings)

Example: t3.medium web server
  Compute: 730 hrs * $0.0416 = $30.37/mo
  Storage: 50GB gp3 = $4.00/mo
  Data out: 100GB = $9.00/mo
  Total: ~$43.37/mo per instance`,description:"Understanding cloud cost factors and estimating monthly costs for AWS resources."},{title:"Shared Responsibility Model",useCase:"Security responsibilities.",code:`# Shared Responsibility Model

AWS RESPONSIBILITY (Security OF the Cloud)
  - Physical data centers
  - Network infrastructure
  - Hypervisor
  - Global infrastructure

CUSTOMER RESPONSIBILITY (Security IN the Cloud)
  IaaS:
    - OS patches and updates
    - Application security
    - Network ACLs and firewalls
    - Data encryption
  PaaS:
    - Application code security
    - Data access policies
    - User authentication
  SaaS:
    - User access management
    - Data classification
    - Compliance requirements`,description:"Shared responsibility model mapping what cloud provider vs customer secures."},{title:"Auto Scaling Group Setup",useCase:"Elastic scaling example.",code:`# Create launch template
aws ec2 create-launch-template \\
  --launch-template-name web-template \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t3.micro

# Create auto scaling group
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name web-asg \\
  --launch-template
    "LaunchTemplateName=web-template,Version=$Default" \\
  --min-size 2 --max-size 10 \\
  --desired-capacity 2 \\
  --vpc-zone-identifier subnet-xxx,subnet-yyy`,description:"AWS Auto Scaling group configuration for elastic capacity management."}],mcqQuestions:[{question:"What are the three cloud service models?",options:["IaaS, PaaS, SaaS","Public, Private, Hybrid","AWS, Azure, GCP","Compute, Storage, Network"],answer:0,explanation:"IaaS, PaaS, and SaaS are the three service models."},{question:"What does PaaS provide?",options:["Virtual machines","Platform to develop and run apps","Ready-to-use software","Only storage"],answer:1,explanation:"PaaS provides a platform for developing and running applications without managing infrastructure."},{question:"What is the shared responsibility model?",options:["Provider controls everything","Customer controls everything","Shared security responsibilities","No security responsibility"],answer:2,explanation:"Provider secures the cloud, customer secures their data and applications."},{question:"What is elasticity?",options:["Fixed resource allocation","Auto-scaling based on demand","Manual capacity planning","Reducing costs"],answer:1,explanation:"Elasticity automatically scales resources up or down based on demand."},{question:"What is the difference between capex and opex?",options:["Capex is upfront, opex is ongoing","Both are the same","Capex is cloud, opex is on-premises","Capex is cheaper"],answer:0,explanation:"Capex = upfront capital expenditure. Opex = ongoing operational expenditure."},{question:"Which cloud model provides the most control?",options:["SaaS","PaaS","IaaS","Serverless"],answer:2,explanation:"IaaS provides the most control over OS, runtime, and configuration."},{question:"Cloud Computing — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Cloud Computing — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Cloud Computing — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Cloud Computing — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_cloud_computing};
