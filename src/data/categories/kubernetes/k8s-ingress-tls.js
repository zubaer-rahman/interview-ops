export const k8s_ingress_tls = {
  "id": "k8s-ingress-tls",
  "title": "TLS",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-ingress-tls.json",
  "interviewAnswer": "TLS termination in Ingress enables HTTPS for services. Ingress serves TLS certificates, terminating encryption and forwarding decrypted traffic to backends. Certificate provisioning automated via cert-manager.",
  "tldr": [
    "TLS termination at Ingress Controller",
    "Certificate stored in kubernetes.io/tls Secret",
    "spec.tls.hosts + secretName per domain",
    "cert-manager automates Let's Encrypt certificates"
  ],
  "deepDive": [
    {
      "heading": "TLS Configuration",
      "text": "spec.tls: [{ hosts: [\"example.com\"], secretName: example-tls }]. Secret must be in same namespace. Certificate chain should include intermediates. Multiple TLS entries for different certs per host."
    },
    {
      "heading": "Best Practices",
      "text": "Use cert-manager for auto-renewal. Minimum TLS 1.2. Restrict cipher suites via controller annotations. HSTS annotation for security headers. HTTP-to-HTTPS redirect (force-ssl-redirect)."
    },
    {
      "heading": "Common Use Cases",
      "text": "TLS applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "How is TLS configured in Ingress?",
      "answer": "spec.tls with hosts and secretName referencing TLS Secret."
    },
    {
      "question": "What does Ingress controller do with TLS?",
      "answer": "Terminates TLS, decrypts, forwards plain HTTP to backend."
    },
    {
      "question": "What is cert-manager?",
      "answer": "Automates certificate issuance and renewal from Let's Encrypt, Venafi, etc."
    },
    {
      "question": "Minimum TLS version?",
      "answer": "TLS 1.2 recommended. Configured via controller flags or annotations."
    },
    {
      "question": "TLS — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "TLS — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "TLS — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "TLS — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "TLS — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "TLS — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "TLS field in Ingress?",
      "options": [
        "spec.tls",
        "spec.https",
        "spec.ssl"
      ],
      "answer": 0
    },
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
      "question": "cert-manager CRD for cert?",
      "options": [
        "Certificate",
        "CertRequest",
        "TLSOrder"
      ],
      "answer": 0
    },
    {
      "question": "Force HTTPS annotation?",
      "options": [
        "force-ssl-redirect",
        "https-only",
        "ssl-force"
      ],
      "answer": 0
    },
    {
      "question": "TLS — How to ensure reliability?",
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
      "question": "TLS — What helps team collaboration?",
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
      "question": "TLS — What reduces errors most?",
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
      "question": "TLS — What improves speed?",
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
      "question": "TLS — What is key for monitoring?",
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
      "question": "TLS — What ensures quality?",
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
      "title": "Create TLS Ingress",
      "useCase": "Enable HTTPS",
      "code": "kubectl create ingress secure --rule=\"example.com/*=web:80,tls=my-tls-cert\"",
      "description": "Creates ingress with TLS."
    },
    {
      "title": "Install cert-manager",
      "useCase": "Auto certificates",
      "code": "kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml",
      "description": "Installs cert-manager."
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
  "laymanDefinition": "TLS termination in Ingress enables HTTPS for services. Ingress serves TLS certificates, terminating encryption and forwarding decrypted traffic to backends. Certificate provisioning automated via cert-manager.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">TLS</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">TLS</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">TLS termination at Ingress Controller</text></svg>"
};
