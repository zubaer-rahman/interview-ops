const e={id:"devops-iac",title:"Infrastructure as Code",difficulty:"intermediate",estimatedMinutes:20,tldr:["IaC is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than manual processes or interactive configuration tools.","Infrastructure is defined in configuration files that are version-controlled, reviewed, and tested like application code — enabling repeatability and consistency.","Tools: Terraform (multi-cloud, declarative, HCL), CloudFormation (AWS-native, JSON/YAML), Pulumi (multi-cloud, general-purpose languages), Ansible (configuration management, agentless).","Two approaches: declarative (what — Terraform, CloudFormation) specifies desired state; imperative (how — Ansible, Chef, Puppet) specifies exact steps. Declarative is preferred for provisioning."],laymanDefinition:"IaC is like having a detailed, version-controlled blueprint for building a house instead of telling the builder what to do step by step. The blueprint (configuration file) specifies the desired result: three bedrooms, two bathrooms, kitchen here. The builder (Terraform) figures out how to achieve it. If you want changes, you update the blueprint, not shout instructions. Every version of the blueprint is saved, so you can always revert to a previous design.",deepDive:[{heading:"Declarative vs Imperative IaC",text:'Declarative: specify desired state — tool handles the how. Idempotent: running twice produces same result. Terraform example: resource "aws_instance" "web" { ami = "ami-123" }. Imperative: specify exact steps — tool executes commands in order. Ansible example: - name: install nginx; yum: name=nginx state=present. Declarative is preferred for infrastructure provisioning as it prevents configuration drift.'},{heading:"IaC Benefits",text:"Consistency: same configuration produces same environment every time. Speed: provision infrastructure in minutes instead of days. Version control: all changes tracked, reviewed, and auditable. Repeatability: recreate environments identically (dev, staging, prod). Self-documentation: configuration files describe the infrastructure. Collaboration: code reviews, pull requests, team ownership of infrastructure."},{heading:"State Management",text:"State file maps configuration to real-world infrastructure. Terraform state (terraform.tfstate) contains resource metadata and dependencies. State must be stored securely — never in Git. Remote state backends: S3 + DynamoDB (locking), Terraform Cloud, Azure Storage, GCS. Locking prevents concurrent modifications. State file contains sensitive data (passwords, IPs) — encrypt at rest and in transit."},{heading:"IaC Best Practices",text:"Version control everything: infrastructure code alongside application code. Use modules/components for reusable patterns. Implement code review process for infrastructure changes. Test infrastructure changes (Terratest, TaskCat, InSpec). Keep state files secure (backend encryption, access controls). Parameterize environments (dev/staging/prod) with variables. Use consistent naming conventions and tags. Avoid hardcoding values."},{heading:"Immutable Infrastructure",text:"Replace servers entirely instead of updating in-place. Golden images: bake configurations into machine images (AMIs, container images). Packer builds images. Terraform deploys them. Benefits: no configuration drift, consistent across environments, easy rollback (redeploy old image), simplified debugging (image state is known). Pattern: Packer → AMI → Terraform → Launch Template → Auto Scaling Group."}],interviewAnswer:"IaC is a foundational DevOps practice. Use declarative IaC (Terraform) for infrastructure provisioning. Use configuration management (Ansible) for software configuration on servers. Version control everything. Implement code review for infrastructure. Use remote state with locking. Build immutable infrastructure with Packer + Terraform. Always test infrastructure changes before applying to production.",interviewQuestions:[{question:"What is Infrastructure as Code?",answer:"Managing and provisioning infrastructure through machine-readable definition files in version control."},{question:"What is the difference between declarative and imperative IaC?",answer:"Declarative: specify desired state, tool achieves it. Imperative: specify exact steps to execute."},{question:"What is Terraform?",answer:"Hashicorp declarative multi-cloud IaC tool using HCL (HashiCorp Configuration Language)."},{question:"What is Terraform state?",answer:"A file mapping Terraform configuration to real-world infrastructure resources."},{question:"Why should state be stored remotely?",answer:"For team collaboration, locking, and security. Never store state in Git."},{question:"What is idempotency in IaC?",answer:"Running the same configuration multiple times produces the same result — no unintended side effects."},{question:"What is configuration drift?",answer:"When actual infrastructure state differs from the defined configuration due to manual changes."},{question:"What is immutable infrastructure?",answer:"Replacing servers entirely instead of updating them in-place. Uses golden images."},{question:"What is Packer?",answer:"HashiCorp tool for building identical machine images (AMIs, container images) from a single source configuration."},{question:"What is Terratest?",answer:"A Go library for writing automated tests for Terraform modules and infrastructure code."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Infrastructure as Code</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Define</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Write config files</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Plan</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Preview changes</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Apply</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Provision infra</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">IaC</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Infrastructure as Code</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">State</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Resource mapping</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Modules</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Reusable patterns</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">IaC Benefits</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Consistent, repeatable, version-</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">controlled infrastructure. Decla</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">rative config, state management,</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd"> immutable deployments.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">IaC: Infrastructure managed as code. Declarative c</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">onfigs, version control, state management, immutab</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">le infrastructure.</text></svg>',codeExamples:[{title:"Terraform Basic Configuration",useCase:"AWS EC2 with Terraform.",code:`# main.tf — Terraform configuration for AWS
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami                    = "ami-0c55b159cbfafe1f0"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.web.id]

  tags = {
    Name = "web-server"
    Environment = "production"
  }
}

resource "aws_security_group" "web" {
  name        = "web-server-sg"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }
}`,description:"Basic Terraform configuration for an AWS EC2 instance with security group."},{title:"Terraform Remote State with S3",useCase:"Team state management.",code:`# backend.tf — Remote state configuration
terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "production/network/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}

# DynamoDB table for state locking
resource "aws_dynamodb_table" "terraform_lock" {
  name         = "terraform-state-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}`,description:"Terraform remote state backend with S3 storage and DynamoDB locking for team collaboration."},{title:"Terraform Modules",useCase:"Reusable infrastructure components.",code:`# modules/vpc/main.tf — Reusable VPC module
variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true

  tags = {
    Name        = "vpc-\${var.environment}"
    Environment = var.environment
  }
}

output "vpc_id" {
  value = aws_vpc.main.id
}

# Usage:
# module "vpc" {
#   source      = "./modules/vpc"
#   vpc_cidr    = "10.0.0.0/16"
#   environment = "production"
# }`,description:"Reusable Terraform VPC module with variables and outputs for multi-environment use."},{title:"Packer Image Builder",useCase:"Build AMIs with Packer.",code:`# packer.pkr.hcl — Build a custom AMI
packer {
  required_plugins {
    amazon = {
      version = ">= 1.0.0"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

source "amazon-ebs" "web" {
  ami_name      = "web-server-{{timestamp}}"
  instance_type = "t2.micro"
  region        = "us-east-1"
  source_ami    = "ami-0c55b159cbfafe1f0"
  ssh_username  = "ec2-user"

  tags = {
    Name = "web-server-ami"
  }
}

build {
  sources = ["source.amazon-ebs.web"]

  provisioner "shell" {
    inline = [
      "sudo yum update -y",
      "sudo yum install -y httpd",
      "sudo systemctl enable httpd",
    ]
  }
}`,description:"Packer configuration for building a custom Amazon Machine Image with web server software pre-installed."},{title:"CI/CD for Terraform",useCase:"Automate Terraform in pipeline.",code:`# .github/workflows/terraform.yml
name: Terraform CI/CD
on:
  push:
    branches: [main]
  pull_request:
    paths: ["infra/**"]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.6.0

      - name: Terraform Init
        run: terraform init
        working-directory: ./infra

      - name: Terraform Format Check
        run: terraform fmt -check
        working-directory: ./infra

      - name: Terraform Validate
        run: terraform validate
        working-directory: ./infra

      - name: Terraform Plan
        run: terraform plan
        working-directory: ./infra

      - name: Terraform Apply
        if: github.ref == "refs/heads/main" && github.event_name == "push"
        run: terraform apply -auto-approve
        working-directory: ./infra`,description:"GitHub Actions pipeline for Terraform with format check, validation, plan, and automated apply on merge to main."}],mcqQuestions:[{question:"What is the difference between declarative and imperative IaC?",options:["Declarative specifies how, imperative specifies what","Declarative specifies desired state, imperative specifies steps","Both are the same","Declarative is older"],answer:1,explanation:"Declarative: what you want. Imperative: how to achieve it."},{question:"Why should Terraform state never be stored in Git?",options:["State is too large","State may contain sensitive data and is not suitable for version control","Git does not support JSON","State is binary"],answer:1,explanation:"State may contain secrets (passwords, IPs) and should be stored securely in a remote backend."},{question:"What is Terraform used for?",options:["Configuration management","Infrastructure provisioning","Monitoring","CI/CD"],answer:1,explanation:"Terraform is primarily an infrastructure provisioning tool (IaC)."},{question:"What is idempotency?",options:["Running once produces result","Running multiple times produces same result","Running fails on second attempt","Running requires manual approval"],answer:1,explanation:"Idempotency means applying the same configuration multiple times produces the same result."},{question:"What is configuration drift?",options:["Intentionally changing configuration","When actual state differs from desired configuration","Configuration that works correctly","Automated configuration updates"],answer:1,explanation:"Drift occurs when manual changes make actual infrastructure differ from defined configuration."},{question:"What tool builds machine images for immutable infrastructure?",options:["Terraform","Packer","Ansible","CloudFormation"],answer:1,explanation:"Packer builds identical machine images (AMIs) for immutable infrastructure deployments."},{question:"Infrastructure as Code — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Infrastructure as Code — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Infrastructure as Code — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Infrastructure as Code — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_iac};
