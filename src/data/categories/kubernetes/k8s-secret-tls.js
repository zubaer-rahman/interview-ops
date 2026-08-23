export const k8s_secret_tls = {
  "id": "k8s-secret-tls",
  "title": "TLS Secret",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-secret-tls.json",
  "interviewAnswer": "TLS Secrets store TLS certificates and private keys for HTTPS termination. Type: kubernetes.io/tls, fields: tls.crt (certificate chain), tls.key (private key). Used by Ingress controllers. cert-manager automates certificate provisioning.",
  "tldr": [
    "Type: kubernetes.io/tls — TLS cert + key",
    "Required keys: tls.crt (certificate), tls.key (private key)",
    "Used by Ingress spec.tls[].secretName for HTTPS",
    "cert-manager automates Let's Encrypt certificate issuance"
  ],
  "deepDive": [
    {
      "heading": "Certificate Validation",
      "text": "tls.crt should include full chain: server cert + intermediate CAs. Private key: PEM-encoded, unencrypted (no passphrase). Ingress controller reads from same namespace."
    },
    {
      "heading": "TLS in Ingress",
      "text": "spec.tls: [{ hosts: [domain], secretName: my-tls }]. Ingress controller terminates TLS, decrypted traffic forwarded to backend. Multiple TLS entries for multiple domains. TLS 1.2+ minimum."
    },
    {
      "heading": "Common Use Cases",
      "text": "TLS Secret applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is TLS Secret?",
      "answer": "Stores TLS certificate and private key for HTTPS termination."
    },
    {
      "question": "Required keys?",
      "answer": "tls.crt (certificate chain) and tls.key (private key)."
    },
    {
      "question": "How used?",
      "answer": "Referenced by Ingress spec.tls[].secretName."
    },
    {
      "question": "What is cert-manager?",
      "answer": "Addon that automates TLS certificate issuance and renewal."
    },
    {
      "question": "TLS Secret — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "TLS Secret — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "TLS Secret — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "TLS Secret — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "TLS Secret — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "TLS Secret — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "TLS Secret type?",
      "options": [
        "Opaque",
        "kubernetes.io/tls",
        "tls"
      ],
      "answer": 1
    },
    {
      "question": "Certificate key name?",
      "options": [
        "cert.pem",
        "tls.crt",
        "certificate"
      ],
      "answer": 1
    },
    {
      "question": "Private key must be?",
      "options": [
        "Encrypted",
        "Unencrypted PEM",
        "DER format"
      ],
      "answer": 1
    },
    {
      "question": "Ingress TLS field?",
      "options": [
        "tls.secretName",
        "tls.cert",
        "https.secret"
      ],
      "answer": 0
    },
    {
      "question": "TLS Secret — How to ensure reliability?",
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
      "question": "TLS Secret — What helps team collaboration?",
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
      "question": "TLS Secret — What reduces errors most?",
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
      "question": "TLS Secret — What improves speed?",
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
      "question": "TLS Secret — What is key for monitoring?",
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
      "question": "TLS Secret — What ensures quality?",
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
      "title": "Create TLS Secret",
      "useCase": "From PEM files",
      "code": "kubectl create secret tls my-tls --key=tls.key --cert=tls.crt",
      "description": "Creates TLS Secret."
    },
    {
      "title": "Use with Ingress",
      "useCase": "Enable HTTPS",
      "code": "kubectl create ingress secure --rule=\"example.com/*=web:80,tls=my-tls\"",
      "description": "Creates ingress with TLS."
    },
    {
      "title": "View TLS Secret",
      "useCase": "Check details",
      "code": "kubectl get secret my-tls -o yaml",
      "description": "Shows tls.crt and tls.key (base64)."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "TLS Secrets store TLS certificates and private keys for HTTPS termination. Type: kubernetes.io/tls, fields: tls.crt (certificate chain), tls.key (private key). Used by Ingress controllers. cert-manager automates certificate provisioning.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">TLS Secret</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">TLS Secret</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Type: kubernetes.io/tls — TLS cert + key</text></svg>"
};
