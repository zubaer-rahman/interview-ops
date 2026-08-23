export const k8s_externalname = {
  "id": "k8s-externalname",
  "title": "ExternalName",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-externalname.json",
  "interviewAnswer": "ExternalName maps a Service to an external DNS CNAME instead of Pods. No ClusterIP, no selector, no proxying — just a DNS record. Useful for abstracting external dependencies (databases, APIs) behind consistent internal names.",
  "tldr": [
    "Maps Service name to an external DNS CNAME",
    "No ClusterIP, no Pod selector, no proxying",
    "Provides abstraction for external dependencies",
    "Useful for migrating from external to internal services"
  ],
  "deepDive": [
    {
      "heading": "How It Works",
      "text": "spec.type: ExternalName, spec.externalName: <external-dns>. CoreDNS returns CNAME pointing to external DNS. No kube-proxy rules created. Clients resolve Service DNS and get redirected to external service."
    },
    {
      "heading": "Use Cases",
      "text": "Transition from external DB (RDS) to internal (StatefulSet) — same Service name, change type. External API abstraction. Multi-cloud: abstract cloud-specific endpoints behind ExternalName."
    },
    {
      "heading": "Common Use Cases",
      "text": "ExternalName applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is ExternalName?",
      "answer": "DNS CNAME alias for external services, no proxy or ClusterIP."
    },
    {
      "question": "Does ExternalName have a ClusterIP?",
      "answer": "No. Returns CNAME instead."
    },
    {
      "question": "Use case?",
      "answer": "Abstract external dependencies behind a consistent Service name."
    },
    {
      "question": "Switch to internal?",
      "answer": "Change type from ExternalName to ClusterIP and add selector."
    },
    {
      "question": "ExternalName — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "ExternalName — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "ExternalName — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "ExternalName — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "ExternalName — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "ExternalName — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "ExternalName returns?",
      "options": [
        "ClusterIP",
        "CNAME",
        "Pod IPs"
      ],
      "answer": 1
    },
    {
      "question": "ExternalName has?",
      "options": [
        "Labels",
        "Selector",
        "ClusterIP",
        "None of these"
      ],
      "answer": 3
    },
    {
      "question": "ExternalName field?",
      "options": [
        "externalDNS",
        "externalName",
        "cname"
      ],
      "answer": 1
    },
    {
      "question": "ExternalName is for?",
      "options": [
        "Internal routing",
        "External service alias",
        "Load balancing"
      ],
      "answer": 1
    },
    {
      "question": "ExternalName — How to ensure reliability?",
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
      "question": "ExternalName — What helps team collaboration?",
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
      "question": "ExternalName — What reduces errors most?",
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
      "question": "ExternalName — What improves speed?",
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
      "question": "ExternalName — What is key for monitoring?",
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
      "question": "ExternalName — What ensures quality?",
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
      "title": "Create ExternalName",
      "useCase": "Alias external DB",
      "code": "kubectl apply -f externalname-svc.yaml",
      "description": "Maps my-db to RDS endpoint."
    },
    {
      "title": "Test ExternalName",
      "useCase": "Verify DNS",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup my-db",
      "description": "Resolves to external CNAME."
    },
    {
      "title": "Update Target",
      "useCase": "Change endpoint",
      "code": "kubectl patch svc my-db -p '{\"spec\":{\"externalName\":\"new-db.example.com\"}}'",
      "description": "Points to new external endpoint."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "ExternalName maps a Service to an external DNS CNAME instead of Pods. No ClusterIP, no selector, no proxying — just a DNS record. Useful for abstracting external dependencies (databases, APIs) behind consistent internal names.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ExternalName</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ExternalName</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Maps Service name to an external DNS CNAME</text></svg>"
};
