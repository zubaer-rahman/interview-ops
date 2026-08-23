export const devops_terraform = {
  "id": "devops-terraform",
  "title": "Terraform",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Terraform is an open-source Infrastructure as Code tool by HashiCorp that enables declarative provisioning and management of infrastructure across multiple cloud providers.",
    "HCL (HashiCorp Configuration Language) is the primary language. Terraform supports providers for AWS, Azure, GCP, Kubernetes, GitHub, Datadog, and hundreds of others via the Terraform Registry.",
    "Core workflow: Init (initialize providers and modules), Plan (preview changes), Apply (execute changes), Destroy (tear down resources). The plan output shows what will be created, modified, or deleted.",
    "State management: Terraform maintains a state file mapping configuration to real-world resources. Remote state backends (S3, Terraform Cloud) enable team collaboration with state locking."
  ],
  "laymanDefinition": "Terraform is like an architect who draws a detailed blueprint and then commands a robot construction crew. The blueprint (HCL config) says: build a house with three rooms, a garage, and a garden. The architect shows you a preview (plan) before construction starts. If you approve, the robot crew (Terraform engine) builds everything exactly as specified. If something changes (a wall is damaged), the crew notices the drift and restores it to blueprint specifications.",
  "deepDive": [
    {
      "heading": "Terraform Core Concepts",
      "text": "Provider: plugin for interacting with a cloud/API (aws, azurerm, google). Resource: infrastructure component (aws_instance, aws_s3_bucket). Data source: read external data without creating resources (aws_ami). Variable: parameterize configuration. Output: expose resource attributes. Module: reusable package of Terraform configurations. State: mapping file between config and real infrastructure. Backend: where state is stored."
    },
    {
      "heading": "Terraform Workflow",
      "text": "terraform init: initialize working directory, download providers and modules. terraform plan: create execution plan showing what will be created/modified/destroyed. terraform apply: execute the plan (with or without -auto-approve). terraform destroy: delete all managed resources. terraform fmt: format code according to HCL standards. terraform validate: check syntax and internal consistency. terraform state: advanced state manipulation."
    },
    {
      "heading": "Terraform Modules and Reusability",
      "text": "Modules are self-contained packages of Terraform configurations. Source: local path (./modules/vpc), registry (hashicorp/consul/aws), or Git URL. Input variables parameterize modules. Outputs expose results. Root module: top-level configuration. Child modules: called from root. Best practice: use modules for networking, compute, databases, and security groups. Registry modules are community-verified and follow best practices."
    },
    {
      "heading": "Terraform Workspaces and Environments",
      "text": "Workspaces provide multiple state files for the same configuration. Default workspace: single environment. Named workspaces: dev, staging, prod. Workspace separation: each has independent state. Use workspace in resource naming: resource \"aws_instance\" \"web\" { name = \"web-${terraform.workspace}\" }. Alternative: directory structure (envs/dev, envs/prod) with different tfvars files. Multi-environment patterns: workspaces for simple cases, directory structure for complex ones."
    },
    {
      "heading": "Terraform Advanced Features",
      "text": "Sensitive variables: mark variables as sensitive to hide in logs/output. depends_on: explicit dependency ordering. count and for_each: create multiple resources from a list/map. lifecycle meta-arguments: create_before_destroy, prevent_destroy, ignore_changes. provisioners (file, remote-exec, local-exec): last resort for actions Terraform cannot handle. Sentinel: policy-as-code for Terraform Cloud. Terratest: automated testing of Terraform modules."
    }
  ],
  "interviewAnswer": "Terraform is the most popular multi-cloud IaC tool. Follow a consistent directory structure. Use modules for reusable components. Always review plan output before applying. Store state remotely with locking. Use variables for environment differences. Implement CI/CD for Terraform with automated plan and manual apply for production. Test modules with Terratest. Use workspaces or directories to manage environments.",
  "interviewQuestions": [
    {
      "question": "What is Terraform?",
      "answer": "HashiCorp open-source IaC tool for declarative provisioning across multiple cloud providers."
    },
    {
      "question": "What is HCL?",
      "answer": "HashiCorp Configuration Language — the DSL used to define Terraform configurations."
    },
    {
      "question": "What are the core Terraform commands?",
      "answer": "init (initialize), plan (preview), apply (execute), destroy (tear down)."
    },
    {
      "question": "What is a Terraform provider?",
      "answer": "A plugin that enables Terraform to interact with a specific platform (AWS, Azure, GCP)."
    },
    {
      "question": "What is a Terraform module?",
      "answer": "A reusable package of Terraform configurations that can be called with different inputs."
    },
    {
      "question": "What is Terraform state?",
      "answer": "A mapping between configuration and real-world infrastructure. Stored in a backend."
    },
    {
      "question": "Why is terraform plan important?",
      "answer": "It shows what changes will be made before applying — safety check for infrastructure changes."
    },
    {
      "question": "What is the difference between count and for_each?",
      "answer": "count: creates N instances from a number. for_each: creates instances from a map or set of strings."
    },
    {
      "question": "What does prevent_destroy do?",
      "answer": "A lifecycle argument that prevents Terraform from destroying a resource. Useful for production databases."
    },
    {
      "question": "What is Terratest?",
      "answer": "A Go library for writing automated tests that verify Terraform modules and infrastructure behavior."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Terraform</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Init</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Download plugins</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Plan</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Preview changes</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Apply</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Execute changes</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Terraform</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Declarative IaC</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">State</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Resource map</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Modules</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reusable code</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Terraform</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hashicorp IaC: multi-cloud, decl</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">arative, HCL, state management, </text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">modules, plan/apply workflow.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Terraform: Multi-cloud IaC. Declarative HCL, plan/</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">apply workflow, state management, modules, provide</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rs.</text></svg>",
  "codeExamples": [
    {
      "title": "Terraform Multi-Resource Setup",
      "useCase": "VPC, EC2, and RDS with Terraform.",
      "code": "# main.tf — Web app infrastructure\nprovider \"aws\" {\n  region = var.region\n}\n\nmodule \"vpc\" {\n  source      = \"./modules/vpc\"\n  vpc_cidr    = \"10.0.0.0/16\"\n  environment = var.environment\n}\n\nmodule \"web\" {\n  source      = \"./modules/web\"\n  vpc_id      = module.vpc.vpc_id\n  subnet_ids  = module.vpc.public_subnet_ids\n  instance_count = var.web_instance_count\n}\n\nmodule \"database\" {\n  source        = \"./modules/database\"\n  vpc_id        = module.vpc.vpc_id\n  subnet_ids    = module.vpc.private_subnet_ids\n  db_name       = var.db_name\n  db_password   = var.db_password\n}\n\n# variables.tf\nvariable \"region\" { default = \"us-east-1\" }\nvariable \"environment\" { default = \"production\" }\nvariable \"web_instance_count\" { default = 2 }\nvariable \"db_name\" { default = \"myapp\" }\nvariable \"db_password\" { sensitive = true }",
      "description": "Terraform configuration using modules for VPC, web instances, and database with variables."
    },
    {
      "title": "Terraform Workspace Management",
      "useCase": "Environment separation with workspaces.",
      "code": "# Create and use workspaces\n$ terraform workspace new dev\n$ terraform workspace new staging\n$ terraform workspace new production\n\n# Switch between environments\n$ terraform workspace select staging\n\n# Use workspace in configurations\nresource \"aws_instance\" \"web\" {\n  instance_type = terraform.workspace == \"production\" ? \"m5.large\" : \"t3.micro\"\n\n  tags = {\n    Name        = \"web-${terraform.workspace}\"\n    Environment = terraform.workspace\n  }\n}\n\n# Apply to specific environment\n$ terraform workspace select dev\n$ terraform plan -var-file=\"envs/dev.tfvars\"\n$ terraform apply -var-file=\"envs/dev.tfvars\"",
      "description": "Terraform workspaces for multi-environment management with workspace-aware resource configuration."
    },
    {
      "title": "Terraform Provisioners",
      "useCase": "Run commands after resource creation.",
      "code": "# provisioners.tf — Post-deployment configuration\nresource \"aws_instance\" \"web\" {\n  ami           = data.aws_ami.ubuntu.id\n  instance_type = \"t3.micro\"\n\n  # Upload a configuration file\n  provisioner \"file\" {\n    source      = \"app.conf\"\n    destination = \"/tmp/app.conf\"\n\n    connection {\n      type        = \"ssh\"\n      user        = \"ubuntu\"\n      private_key = file(\"~/.ssh/id_rsa\")\n      host        = self.public_ip\n    }\n  }\n\n  # Run a remote script\n  provisioner \"remote-exec\" {\n    inline = [\n      \"sudo apt update -y\",\n      \"sudo apt install -y nginx\",\n      \"sudo systemctl start nginx\",\n    ]\n\n    connection {\n      type = \"ssh\"\n      user = \"ubuntu\"\n      private_key = file(\"~/.ssh/id_rsa\")\n      host = self.public_ip\n    }\n  }\n}",
      "description": "Terraform provisioners for file upload and remote command execution after EC2 instance creation."
    },
    {
      "title": "Terraform Data Sources",
      "useCase": "Query existing infrastructure.",
      "code": "# data-sources.tf — Read existing resources\n\n# Get the latest Ubuntu AMI\ndata \"aws_ami\" \"ubuntu\" {\n  most_recent = true\n  owners      = [\"099720109477\"]\n\n  filter {\n    name   = \"name\"\n    values = [\"ubuntu/images/hvm-ssd/ubuntu-22.04-*-server-*\"]\n  }\n\n  filter {\n    name   = \"virtualization-type\"\n    values = [\"hvm\"]\n  }\n}\n\n# Get existing VPC and subnets\ndata \"aws_vpc\" \"existing\" {\n  tags = {\n    Name = \"production-vpc\"\n  }\n}\n\ndata \"aws_subnets\" \"private\" {\n  filter {\n    name   = \"vpc-id\"\n    values = [data.aws_vpc.existing.id]\n  }\n}\n\n# Use data sources in resources\nresource \"aws_instance\" \"app\" {\n  ami           = data.aws_ami.ubuntu.id\n  subnet_id     = data.aws_subnets.private.ids[0]\n}",
      "description": "Terraform data sources to query existing AMIs, VPCs, and subnets for use in resource creation."
    },
    {
      "title": "Terraform Policy with Sentinel",
      "useCase": "Policy-as-code for compliance.",
      "code": "# sentinel.hcl — Sentinel policies for Terraform Cloud\n\n# Policy: enforce resource tags\nimport \"tfplan/v2\" as tfplan\n\n# Ensure all resources have required tags\nrequired_tags = [\"Environment\", \"Owner\", \"CostCenter\"]\n\nmain = rule {\n  all tfplan.resource_changes as _, rc {\n    rc.mode == \"destroyed\" or all required_tags as _, tag {\n      rc.change.after.tags else {} contains tag\n    }\n  }\n}\n\n# Policy: prevent large instance types in non-prod\nlarge_instances = [\"m5.4xlarge\", \"c5.4xlarge\", \"r5.4xlarge\"]\n\nrestrict_non_prod = rule {\n  all tfplan.resource_changes as _, rc {\n    rc.change.after.instance_type else \"\" not in large_instances\n  }\n}\n\n# Policy: enforce encryption\nrequire_encryption = rule {\n  all tfplan.resource_changes as _, rc {\n    rc.change.after.encrypted else true\n  }\n}",
      "description": "Sentinel policy-as-code rules enforcing resource tags, instance type restrictions, and encryption requirements."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the first command in the Terraform workflow?",
      "options": [
        "terraform plan",
        "terraform init",
        "terraform apply",
        "terraform validate"
      ],
      "answer": 1,
      "explanation": "terraform init initializes the working directory, downloading providers and modules."
    },
    {
      "question": "What does terraform plan show?",
      "options": [
        "What resources exist",
        "What changes will be made",
        "Current state",
        "Provider versions"
      ],
      "answer": 1,
      "explanation": "Plan shows the execution plan — what will be created, modified, or destroyed."
    },
    {
      "question": "What is a Terraform module?",
      "options": [
        "A single resource",
        "A reusable package of Terraform configurations",
        "A provider plugin",
        "A state file"
      ],
      "answer": 1,
      "explanation": "Modules are reusable, self-contained packages of Terraform configurations."
    },
    {
      "question": "What is the purpose of remote state?",
      "options": [
        "Faster execution",
        "Team collaboration with locking",
        "Lower cost",
        "Better syntax"
      ],
      "answer": 1,
      "explanation": "Remote state enables team collaboration with state locking to prevent concurrent modifications."
    },
    {
      "question": "What does for_each do?",
      "options": [
        "Create multiple copies with same config",
        "Create resources from a map or set",
        "Create exactly one resource",
        "Delete resources"
      ],
      "answer": 1,
      "explanation": "for_each iterates over a map or set of strings to create multiple resources."
    },
    {
      "question": "What is Terraform Cloud used for?",
      "options": [
        "Only AWS infrastructure",
        "Remote state, collaboration, policy-as-code",
        "Local development",
        "Code compilation"
      ],
      "answer": 1,
      "explanation": "Terraform Cloud provides remote state, team collaboration, Sentinel policies, and run management."
    },
    {
      "question": "Terraform — What reduces errors most?",
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
      "question": "Terraform — What improves speed?",
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
      "question": "Terraform — What is key for monitoring?",
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
      "question": "Terraform — What ensures quality?",
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
