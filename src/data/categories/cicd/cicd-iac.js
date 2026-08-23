export const cicd_iac = {
  "id": "cicd-iac",
  "title": "Infrastructure as Code in CI/CD",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Infrastructure as Code (IaC) manages infrastructure (servers, networks, databases) through machine-readable definition files, not manual processes.",
    "IaC in CI/CD: validate, plan, and apply infrastructure changes automatically as part of the pipeline.",
    "Tools: Terraform, Pulumi, AWS CDK, CloudFormation, Ansible, Kubernetes manifests.",
    "Infrastructure as Code in CI/CD enables automated, reproducible, and auditable infrastructure provisioning."
  ],
  "laymanDefinition": "IaC is like having a blueprint for your house instead of telling the builder step by step. You define the whole infrastructure in files: \"I want a server, a database, this firewall rule.\" The CI/CD pipeline reads the blueprint and builds it automatically. Changes to the blueprint trigger infrastructure updates.",
  "deepDive": [
    {
      "heading": "IaC Pipeline Stages",
      "text": "Validate: syntax check, format check (terraform fmt). Plan: show what will change (terraform plan). Security scan: check for misconfigurations (tfsec, checkov, terrascan). Apply: make changes (terraform apply). Destroy: teardown preview environments."
    },
    {
      "heading": "State Management",
      "text": "Terraform state: records real-world infrastructure. Store state remotely (S3, Terraform Cloud, Consul). State locking: prevent concurrent changes. Sensitive data: state may contain secrets (encrypt it). State versioning: track changes over time."
    },
    {
      "heading": "Preview Environments",
      "text": "Temporary environments per PR/branch. Terraform workspace per feature branch. Destroy on PR merge/close. Great for review apps. Database: seed with test data. Cost: spin down when not in use."
    },
    {
      "heading": "GitOps",
      "text": "Git as single source of truth for infrastructure. Pull-based deployment (Argo CD, Flux). Sync: desired state in Git = actual state in cluster. Drift detection: auto-remediate configuration drift."
    }
  ],
  "interviewAnswer": "Infrastructure as Code (IaC) manages infrastructure (servers, networks, databases) through machine-readable definition files, not manual processes.",
  "interviewQuestions": [
    {
      "question": "What is Infrastructure as Code?",
      "answer": "Managing infrastructure through version-controlled definition files instead of manual processes."
    },
    {
      "question": "What are the three stages of IaC pipeline?",
      "answer": "Validate (syntax), Plan (preview changes), Apply (make changes)."
    },
    {
      "question": "What is GitOps?",
      "answer": "Using Git as the single source of truth for infrastructure, with automated sync to the actual environment."
    },
    {
      "question": "Infrastructure as Code in CI/CD — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Infrastructure as Code in CI/CD — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Infrastructure as Code in CI/CD</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IaC Files</text><text x=\"60\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Terraform, K8s YAM</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">L</text><line x1=\"110\" y1=\"48\" x2=\"120\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"130\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"180\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Plan</text><text x=\"180\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Validate + preview</text><line x1=\"230\" y1=\"48\" x2=\"240\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"250\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"300\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Apply</text><text x=\"300\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Provision infra</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">IaC in CI/CD: Validate, plan, then apply infrastru</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">cture changes automatically. GitOps for pull-based</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> sync.</text></svg>",
  "codeExamples": [
    {
      "title": "Terraform Pipeline",
      "useCase": "Plan and apply in CI.",
      "code": "terraform fmt -check\nterraform init\nterraform plan -out=tfplan\nterraform apply tfplan",
      "description": ""
    },
    {
      "title": "Common Use Case",
      "useCase": "Typical implementation",
      "code": "# Common implementation pattern\n# Used in everyday scenarios",
      "description": "Standard use case example."
    },
    {
      "title": "Advanced Configuration",
      "useCase": "Complex scenario",
      "code": "# Advanced pattern for complex scenarios\n# Includes error handling",
      "description": "Advanced configuration example."
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
      "question": "What is the purpose of terraform plan?",
      "options": [
        "Apply changes immediately",
        "Show what changes will be made without applying",
        "Delete infrastructure",
        "Format config files"
      ],
      "answer": 1,
      "explanation": "terraform plan previews the changes Terraform will make without actually applying them."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What is the recommended approach?",
      "options": [
        "Start simple and iterate",
        "Build everything at once",
        "Skip testing",
        "Avoid planning"
      ],
      "answer": 0,
      "explanation": "Starting simple and iterating is the most effective approach."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What should be prioritized?",
      "options": [
        "Reliability and consistency",
        "Speed only",
        "Features over quality",
        "Manual processes"
      ],
      "answer": 0,
      "explanation": "Reliability and consistency are foundational priorities."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What is important for security?",
      "options": [
        "Access control and encryption",
        "Open access",
        "Shared passwords",
        "No auditing"
      ],
      "answer": 0,
      "explanation": "Access control and encryption are fundamental security measures."
    },
    {
      "question": "Infrastructure as Code in CI/CD — How to ensure reliability?",
      "options": [
        "Automated testing and monitoring",
        "Manual checks only",
        "No testing",
        "Reactive fixes"
      ],
      "answer": 0,
      "explanation": "Automated testing and monitoring ensure consistent reliability."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What helps team collaboration?",
      "options": [
        "Shared workflows and visibility",
        "Isolated work",
        "No documentation",
        "Siloed tools"
      ],
      "answer": 0,
      "explanation": "Shared workflows and visibility enable better collaboration."
    },
    {
      "question": "Infrastructure as Code in CI/CD — What reduces errors most?",
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
      "question": "Infrastructure as Code in CI/CD — What improves speed?",
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
      "question": "Infrastructure as Code in CI/CD — What is key for monitoring?",
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
      "question": "Infrastructure as Code in CI/CD — What ensures quality?",
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
