export const devops_iac = {
  "id": "devops-iac",
  "title": "Infrastructure as Code",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "IaC is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than manual processes or interactive configuration tools.",
    "Infrastructure is defined in configuration files that are version-controlled, reviewed, and tested like application code — enabling repeatability and consistency.",
    "Tools: Terraform (multi-cloud, declarative, HCL), CloudFormation (AWS-native, JSON/YAML), Pulumi (multi-cloud, general-purpose languages), Ansible (configuration management, agentless).",
    "Two approaches: declarative (what — Terraform, CloudFormation) specifies desired state; imperative (how — Ansible, Chef, Puppet) specifies exact steps. Declarative is preferred for provisioning."
  ],
  "laymanDefinition": "IaC is like having a detailed, version-controlled blueprint for building a house instead of telling the builder what to do step by step. The blueprint (configuration file) specifies the desired result: three bedrooms, two bathrooms, kitchen here. The builder (Terraform) figures out how to achieve it. If you want changes, you update the blueprint, not shout instructions. Every version of the blueprint is saved, so you can always revert to a previous design.",
  "deepDive": [
    {
      "heading": "Declarative vs Imperative IaC",
      "text": "Declarative: specify desired state — tool handles the how. Idempotent: running twice produces same result. Terraform example: resource \"aws_instance\" \"web\" { ami = \"ami-123\" }. Imperative: specify exact steps — tool executes commands in order. Ansible example: - name: install nginx; yum: name=nginx state=present. Declarative is preferred for infrastructure provisioning as it prevents configuration drift."
    },
    {
      "heading": "IaC Benefits",
      "text": "Consistency: same configuration produces same environment every time. Speed: provision infrastructure in minutes instead of days. Version control: all changes tracked, reviewed, and auditable. Repeatability: recreate environments identically (dev, staging, prod). Self-documentation: configuration files describe the infrastructure. Collaboration: code reviews, pull requests, team ownership of infrastructure."
    },
    {
      "heading": "State Management",
      "text": "State file maps configuration to real-world infrastructure. Terraform state (terraform.tfstate) contains resource metadata and dependencies. State must be stored securely — never in Git. Remote state backends: S3 + DynamoDB (locking), Terraform Cloud, Azure Storage, GCS. Locking prevents concurrent modifications. State file contains sensitive data (passwords, IPs) — encrypt at rest and in transit."
    },
    {
      "heading": "IaC Best Practices",
      "text": "Version control everything: infrastructure code alongside application code. Use modules/components for reusable patterns. Implement code review process for infrastructure changes. Test infrastructure changes (Terratest, TaskCat, InSpec). Keep state files secure (backend encryption, access controls). Parameterize environments (dev/staging/prod) with variables. Use consistent naming conventions and tags. Avoid hardcoding values."
    },
    {
      "heading": "Immutable Infrastructure",
      "text": "Replace servers entirely instead of updating in-place. Golden images: bake configurations into machine images (AMIs, container images). Packer builds images. Terraform deploys them. Benefits: no configuration drift, consistent across environments, easy rollback (redeploy old image), simplified debugging (image state is known). Pattern: Packer → AMI → Terraform → Launch Template → Auto Scaling Group."
    }
  ],
  "interviewAnswer": "IaC is a foundational DevOps practice. Use declarative IaC (Terraform) for infrastructure provisioning. Use configuration management (Ansible) for software configuration on servers. Version control everything. Implement code review for infrastructure. Use remote state with locking. Build immutable infrastructure with Packer + Terraform. Always test infrastructure changes before applying to production.",
  "interviewQuestions": [
    {
      "question": "What is Infrastructure as Code?",
      "answer": "Managing and provisioning infrastructure through machine-readable definition files in version control."
    },
    {
      "question": "What is the difference between declarative and imperative IaC?",
      "answer": "Declarative: specify desired state, tool achieves it. Imperative: specify exact steps to execute."
    },
    {
      "question": "What is Terraform?",
      "answer": "Hashicorp declarative multi-cloud IaC tool using HCL (HashiCorp Configuration Language)."
    },
    {
      "question": "What is Terraform state?",
      "answer": "A file mapping Terraform configuration to real-world infrastructure resources."
    },
    {
      "question": "Why should state be stored remotely?",
      "answer": "For team collaboration, locking, and security. Never store state in Git."
    },
    {
      "question": "What is idempotency in IaC?",
      "answer": "Running the same configuration multiple times produces the same result — no unintended side effects."
    },
    {
      "question": "What is configuration drift?",
      "answer": "When actual infrastructure state differs from the defined configuration due to manual changes."
    },
    {
      "question": "What is immutable infrastructure?",
      "answer": "Replacing servers entirely instead of updating them in-place. Uses golden images."
    },
    {
      "question": "What is Packer?",
      "answer": "HashiCorp tool for building identical machine images (AMIs, container images) from a single source configuration."
    },
    {
      "question": "What is Terratest?",
      "answer": "A Go library for writing automated tests for Terraform modules and infrastructure code."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Infrastructure as Code</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Define</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Write config files</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Plan</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Preview changes</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Apply</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Provision infra</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IaC</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Infrastructure as Code</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">State</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Resource mapping</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Modules</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reusable patterns</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IaC Benefits</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Consistent, repeatable, version-</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">controlled infrastructure. Decla</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rative config, state management,</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> immutable deployments.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">IaC: Infrastructure managed as code. Declarative c</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">onfigs, version control, state management, immutab</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">le infrastructure.</text></svg>",
  "codeExamples": [
    {
      "title": "Terraform Basic Configuration",
      "useCase": "AWS EC2 with Terraform.",
      "code": "# main.tf — Terraform configuration for AWS\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\nresource \"aws_instance\" \"web\" {\n  ami                    = \"ami-0c55b159cbfafe1f0\"\n  instance_type          = \"t2.micro\"\n  vpc_security_group_ids = [aws_security_group.web.id]\n\n  tags = {\n    Name = \"web-server\"\n    Environment = \"production\"\n  }\n}\n\nresource \"aws_security_group\" \"web\" {\n  name        = \"web-server-sg\"\n  description = \"Allow HTTP and SSH\"\n\n  ingress {\n    from_port   = 80\n    to_port     = 80\n    protocol    = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n\n  ingress {\n    from_port   = 22\n    to_port     = 22\n    protocol    = \"tcp\"\n    cidr_blocks = [\"10.0.0.0/8\"]\n  }\n}",
      "description": "Basic Terraform configuration for an AWS EC2 instance with security group."
    },
    {
      "title": "Terraform Remote State with S3",
      "useCase": "Team state management.",
      "code": "# backend.tf — Remote state configuration\nterraform {\n  backend \"s3\" {\n    bucket         = \"my-terraform-state-bucket\"\n    key            = \"production/network/terraform.tfstate\"\n    region         = \"us-east-1\"\n    dynamodb_table = \"terraform-state-lock\"\n    encrypt        = true\n  }\n}\n\n# DynamoDB table for state locking\nresource \"aws_dynamodb_table\" \"terraform_lock\" {\n  name         = \"terraform-state-lock\"\n  billing_mode = \"PAY_PER_REQUEST\"\n  hash_key     = \"LockID\"\n\n  attribute {\n    name = \"LockID\"\n    type = \"S\"\n  }\n}",
      "description": "Terraform remote state backend with S3 storage and DynamoDB locking for team collaboration."
    },
    {
      "title": "Terraform Modules",
      "useCase": "Reusable infrastructure components.",
      "code": "# modules/vpc/main.tf — Reusable VPC module\nvariable \"vpc_cidr\" {\n  description = \"CIDR block for VPC\"\n  type        = string\n}\n\nvariable \"environment\" {\n  description = \"Environment name\"\n  type        = string\n}\n\nresource \"aws_vpc\" \"main\" {\n  cidr_block           = var.vpc_cidr\n  enable_dns_hostnames = true\n\n  tags = {\n    Name        = \"vpc-${var.environment}\"\n    Environment = var.environment\n  }\n}\n\noutput \"vpc_id\" {\n  value = aws_vpc.main.id\n}\n\n# Usage:\n# module \"vpc\" {\n#   source      = \"./modules/vpc\"\n#   vpc_cidr    = \"10.0.0.0/16\"\n#   environment = \"production\"\n# }",
      "description": "Reusable Terraform VPC module with variables and outputs for multi-environment use."
    },
    {
      "title": "Packer Image Builder",
      "useCase": "Build AMIs with Packer.",
      "code": "# packer.pkr.hcl — Build a custom AMI\npacker {\n  required_plugins {\n    amazon = {\n      version = \">= 1.0.0\"\n      source  = \"github.com/hashicorp/amazon\"\n    }\n  }\n}\n\nsource \"amazon-ebs\" \"web\" {\n  ami_name      = \"web-server-{{timestamp}}\"\n  instance_type = \"t2.micro\"\n  region        = \"us-east-1\"\n  source_ami    = \"ami-0c55b159cbfafe1f0\"\n  ssh_username  = \"ec2-user\"\n\n  tags = {\n    Name = \"web-server-ami\"\n  }\n}\n\nbuild {\n  sources = [\"source.amazon-ebs.web\"]\n\n  provisioner \"shell\" {\n    inline = [\n      \"sudo yum update -y\",\n      \"sudo yum install -y httpd\",\n      \"sudo systemctl enable httpd\",\n    ]\n  }\n}",
      "description": "Packer configuration for building a custom Amazon Machine Image with web server software pre-installed."
    },
    {
      "title": "CI/CD for Terraform",
      "useCase": "Automate Terraform in pipeline.",
      "code": "# .github/workflows/terraform.yml\nname: Terraform CI/CD\non:\n  push:\n    branches: [main]\n  pull_request:\n    paths: [\"infra/**\"]\n\njobs:\n  terraform:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v2\n        with:\n          terraform_version: 1.6.0\n\n      - name: Terraform Init\n        run: terraform init\n        working-directory: ./infra\n\n      - name: Terraform Format Check\n        run: terraform fmt -check\n        working-directory: ./infra\n\n      - name: Terraform Validate\n        run: terraform validate\n        working-directory: ./infra\n\n      - name: Terraform Plan\n        run: terraform plan\n        working-directory: ./infra\n\n      - name: Terraform Apply\n        if: github.ref == \"refs/heads/main\" && github.event_name == \"push\"\n        run: terraform apply -auto-approve\n        working-directory: ./infra",
      "description": "GitHub Actions pipeline for Terraform with format check, validation, plan, and automated apply on merge to main."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the difference between declarative and imperative IaC?",
      "options": [
        "Declarative specifies how, imperative specifies what",
        "Declarative specifies desired state, imperative specifies steps",
        "Both are the same",
        "Declarative is older"
      ],
      "answer": 1,
      "explanation": "Declarative: what you want. Imperative: how to achieve it."
    },
    {
      "question": "Why should Terraform state never be stored in Git?",
      "options": [
        "State is too large",
        "State may contain sensitive data and is not suitable for version control",
        "Git does not support JSON",
        "State is binary"
      ],
      "answer": 1,
      "explanation": "State may contain secrets (passwords, IPs) and should be stored securely in a remote backend."
    },
    {
      "question": "What is Terraform used for?",
      "options": [
        "Configuration management",
        "Infrastructure provisioning",
        "Monitoring",
        "CI/CD"
      ],
      "answer": 1,
      "explanation": "Terraform is primarily an infrastructure provisioning tool (IaC)."
    },
    {
      "question": "What is idempotency?",
      "options": [
        "Running once produces result",
        "Running multiple times produces same result",
        "Running fails on second attempt",
        "Running requires manual approval"
      ],
      "answer": 1,
      "explanation": "Idempotency means applying the same configuration multiple times produces the same result."
    },
    {
      "question": "What is configuration drift?",
      "options": [
        "Intentionally changing configuration",
        "When actual state differs from desired configuration",
        "Configuration that works correctly",
        "Automated configuration updates"
      ],
      "answer": 1,
      "explanation": "Drift occurs when manual changes make actual infrastructure differ from defined configuration."
    },
    {
      "question": "What tool builds machine images for immutable infrastructure?",
      "options": [
        "Terraform",
        "Packer",
        "Ansible",
        "CloudFormation"
      ],
      "answer": 1,
      "explanation": "Packer builds identical machine images (AMIs) for immutable infrastructure deployments."
    },
    {
      "question": "Infrastructure as Code — What reduces errors most?",
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
      "question": "Infrastructure as Code — What improves speed?",
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
      "question": "Infrastructure as Code — What is key for monitoring?",
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
      "question": "Infrastructure as Code — What ensures quality?",
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
