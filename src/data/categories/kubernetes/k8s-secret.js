export const k8s_secret = {
  "id": "k8s-secret",
  "title": "Secret",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-secret.json",
  "interviewAnswer": "A Secret stores sensitive data: passwords, API keys, TLS certs. Base64-encoded (not encrypted by default). Enable encryption at rest for production. Types: Opaque, TLS, Docker registry. Consumed as env vars or volume mounts.",
  "tldr": [
    "Stores sensitive data with base64 encoding",
    "Types: Opaque (generic), kubernetes.io/tls, kubernetes.io/dockerconfigjson",
    "Enable encryption at rest for production security",
    "Secrets Store CSI Driver integrates external secret stores"
  ],
  "deepDive": [
    {
      "heading": "Security",
      "text": "Encryption at rest via EncryptionConfiguration (providers: aescbc, kms, secretbox). RBAC controls access. Volume mounts with restricted permissions (defaultMode: 0400) over env vars."
    },
    {
      "heading": "External Secrets",
      "text": "Secrets Store CSI Driver mounts from Vault, AWS Secrets Manager, Azure Key Vault directly into Pods, keeping secrets out of etcd."
    },
    {
      "heading": "Common Use Cases",
      "text": "Secret applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a Secret?",
      "answer": "Stores sensitive data with base64 encoding, optional encryption at rest."
    },
    {
      "question": "Are Secrets encrypted by default?",
      "answer": "No. Base64-encoded but not encrypted. Enable encryption at rest."
    },
    {
      "question": "Common Secret types?",
      "answer": "Opaque (generic), kubernetes.io/tls, kubernetes.io/dockerconfigjson."
    },
    {
      "question": "Secrets Store CSI Driver?",
      "answer": "Mounts secrets from external providers into Pods, avoiding etcd storage."
    },
    {
      "question": "Secret — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Secret — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Secret — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Secret — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Secret — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Secret — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Secret encoding?",
      "options": [
        "AES",
        "base64",
        "SHA-256",
        "Plaintext"
      ],
      "answer": 1,
      "explanation": "Base64-encoded."
    },
    {
      "question": "TLS Secret type?",
      "options": [
        "Opaque",
        "kubernetes.io/tls",
        "kubernetes.io/dockerconfigjson"
      ],
      "answer": 1,
      "explanation": "kubernetes.io/tls."
    },
    {
      "question": "Enable encryption at rest?",
      "options": [
        "kubectl encrypt",
        "--encryption-provider-config",
        "set secret.encrypted: true"
      ],
      "answer": 1,
      "explanation": "API Server --encryption-provider-config."
    },
    {
      "question": "Create Opaque Secret?",
      "options": [
        "kubectl create secret generic",
        "kubectl create secret tls",
        "kubectl create secret docker-registry"
      ],
      "answer": 0,
      "explanation": "kubectl create secret generic."
    },
    {
      "question": "Secret — How to ensure reliability?",
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
      "question": "Secret — What helps team collaboration?",
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
      "question": "Secret — What reduces errors most?",
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
      "question": "Secret — What improves speed?",
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
      "question": "Secret — What is key for monitoring?",
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
      "question": "Secret — What ensures quality?",
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
      "title": "Create Secret",
      "useCase": "Store credentials",
      "code": "kubectl create secret generic db-cred --from-literal=username=admin --from-literal=password=s3cret",
      "description": "Creates Opaque Secret."
    },
    {
      "title": "Create TLS Secret",
      "useCase": "SSL certificates",
      "code": "kubectl create secret tls my-tls --key=tls.key --cert=tls.crt",
      "description": "Creates TLS Secret for Ingress."
    },
    {
      "title": "Create Registry Secret",
      "useCase": "Private registry auth",
      "code": "kubectl create secret docker-registry regcred --docker-username=<user> --docker-password=<pass>",
      "description": "Creates Docker registry Secret."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A Secret stores sensitive data: passwords, API keys, TLS certs. Base64-encoded (not encrypted by default). Enable encryption at rest for production. Types: Opaque, TLS, Docker registry. Consumed as env vars or volume mounts.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Secret</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Secret</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Stores sensitive data with base64 encoding</text></svg>"
};
