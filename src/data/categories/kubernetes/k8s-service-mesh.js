export const k8s_service_mesh = {
  "id": "k8s-service-mesh",
  "title": "Service Mesh",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "file": "k8s-service-mesh.json",
  "interviewAnswer": "A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It provides traffic management, security, observability, and reliability features without modifying application code. Implementations: Istio, Linkerd, Consul Connect, Kuma.",
  "tldr": [
    "Dedicated infrastructure layer for service communication",
    "Features: mTLS, traffic routing, telemetry, circuit breaking",
    "Sidecar proxy pattern (Envoy, linkerd-proxy)",
    "No application code changes required"
  ],
  "deepDive": [
    {
      "heading": "Service Mesh Benefits",
      "text": "Security: automatic mTLS encryption, certificate rotation. Observability: metrics (Prometheus), tracing (Jaeger), service graphs (Kiali). Traffic control: canary, blue-green, circuit breaking, retries, timeout. Policy: access control, rate limiting."
    },
    {
      "heading": "Service Mesh Components",
      "text": "Data plane: proxies alongside each service (sidecars intercept traffic). Control plane: manages proxy configuration, certificates, telemetry aggregation. Ingress gateway: external traffic entry point. Egress gateway: controlled external traffic exit."
    },
    {
      "heading": "Common Use Cases",
      "text": "Service Mesh applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a service mesh?",
      "answer": "Infrastructure layer for service-to-service communication management."
    },
    {
      "question": "Sidecar proxy role?",
      "answer": "Intercepts all traffic, handles mTLS, routing, telemetry."
    },
    {
      "question": "Control plane role?",
      "answer": "Manages proxy configuration, certificates, telemetry."
    },
    {
      "question": "Service mesh benefits?",
      "answer": "Zero-code mTLS, traffic routing, observability, reliability."
    },
    {
      "question": "Service Mesh — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Service Mesh — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Service Mesh — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Service Mesh — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Service Mesh — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Service Mesh — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Sidecar intercepts?",
      "options": [
        "Only ingress",
        "All traffic",
        "Only HTTP"
      ],
      "answer": 1
    },
    {
      "question": "Ingress gateway?",
      "options": [
        "Internal routing",
        "External traffic entry",
        "DNS resolution"
      ],
      "answer": 1
    },
    {
      "question": "mTLS provides?",
      "options": [
        "Encryption only",
        "Encryption + identity",
        "Identity only"
      ],
      "answer": 1
    },
    {
      "question": "Popular mesh implementation?",
      "options": [
        "Istio",
        "Calico",
        "CoreDNS",
        "kube-proxy"
      ],
      "answer": 0
    },
    {
      "question": "Service Mesh — How to ensure reliability?",
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
      "question": "Service Mesh — What helps team collaboration?",
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
      "question": "Service Mesh — What reduces errors most?",
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
      "question": "Service Mesh — What improves speed?",
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
      "question": "Service Mesh — What is key for monitoring?",
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
      "question": "Service Mesh — What ensures quality?",
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
      "title": "Choose Service Mesh",
      "useCase": "Select based on needs",
      "code": "# Istio: Full-featured, enterprise\n# Linkerd: Lightweight, simple\n# Consul: HashiCorp ecosystem\n# Kuma: CNCF, multi-cluster",
      "description": "Evaluate features vs complexity."
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
  "laymanDefinition": "A service mesh is a dedicated infrastructure layer for managing service-to-service communication. It provides traffic management, security, observability, and reliability features without modifying application code. Implementations: Istio, Linkerd, Consul Connect, Kuma.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Service Mesh</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service Mesh</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Dedicated infrastructure layer for service communi</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">cation</text></svg>"
};
