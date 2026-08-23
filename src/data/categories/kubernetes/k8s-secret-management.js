export const k8s_secret_management = {
  "id": "k8s-secret-management",
  "title": "Secret Management",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "file": "k8s-secret-management.json",
  "interviewAnswer": "Secret management covers lifecycle: creation, rotation, revocation, and secure delivery. Best practices: use external secret stores (Vault, AWS Secrets Manager), enable encryption at rest, use RBAC, avoid Secrets in image layers.",
  "tldr": [
    "External secret stores: Vault, AWS Secrets Manager, Azure Key Vault",
    "Secrets Store CSI Driver mounts external secrets directly into Pods",
    "Enable encryption at rest and RBAC for access control",
    "Avoid secrets in environment variables (use volume mounts)"
  ],
  "deepDive": [
    {
      "heading": "External Secret Stores",
      "text": "Secrets Store CSI Driver: mounts from Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager directly into Pods. External Secrets Operator: syncs secrets from external stores to Kubernetes Secrets."
    },
    {
      "heading": "Best Practices",
      "text": "Use volume mounts instead of env vars (env vars visible in /proc, logs). Enable encryption at rest. Use RBAC: get/list on Secrets. Rotate regularly. Avoid putting secrets in image layers — use imagePullSecrets. Use Sealed Secrets or Helm Secrets for GitOps."
    },
    {
      "heading": "Common Use Cases",
      "text": "Secret Management applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Secret management best practices?",
      "answer": "External stores, encryption at rest, RBAC, volume mounts, rotation."
    },
    {
      "question": "Secrets Store CSI Driver?",
      "answer": "Mounts external secrets directly into Pods, keeping them out of etcd."
    },
    {
      "question": "Why volume mounts over env vars?",
      "answer": "Env vars visible in /proc, logs, crash reports. Volumes have restricted permissions."
    },
    {
      "question": "External Secrets Operator?",
      "answer": "Syncs secrets from external providers to native Kubernetes Secrets."
    },
    {
      "question": "Secret Management — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Secret Management — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Secret Management — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Secret Management — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Secret Management — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Secret Management — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "CSI Driver mounts?",
      "options": [
        "Kubernetes Secrets",
        "External secrets directly",
        "ConfigMaps"
      ],
      "answer": 1
    },
    {
      "question": "Volume mount advantage?",
      "options": [
        "Faster",
        "More secure/restricted perms",
        "Auto-update"
      ],
      "answer": 1
    },
    {
      "question": "Sealed Secrets for?",
      "options": [
        "Encryption at rest",
        "GitOps-safe secret storage",
        "Auto-rotation"
      ],
      "answer": 1
    },
    {
      "question": "Secret exposure risk?",
      "options": [
        "Only when deleted",
        "In env, logs, /proc",
        "Never exposed"
      ],
      "answer": 1
    },
    {
      "question": "Secret Management — How to ensure reliability?",
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
      "question": "Secret Management — What helps team collaboration?",
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
      "question": "Secret Management — What reduces errors most?",
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
      "question": "Secret Management — What improves speed?",
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
      "question": "Secret Management — What is key for monitoring?",
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
      "question": "Secret Management — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ],
  "codeExamples": [
    {
      "title": "Install CSI Driver",
      "useCase": "External secret store",
      "code": "helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts;\nhelm install csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver",
      "description": "Installs CSI driver for external secrets."
    },
    {
      "title": "Use External Secrets Operator",
      "useCase": "Sync from AWS",
      "code": "kubectl apply -f external-secret.yaml",
      "description": "Syncs SecretStore to Kubernetes Secret."
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
  "laymanDefinition": "Secret management covers lifecycle: creation, rotation, revocation, and secure delivery. Best practices: use external secret stores (Vault, AWS Secrets Manager), enable encryption at rest, use RBAC, avoid Secrets in image layers.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Secret Management</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Secret Management</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">External secret stores: Vault, AWS Secrets Manager</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">, Azure Key Vault</text></svg>"
};
