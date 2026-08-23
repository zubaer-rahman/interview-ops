export const k8s_sidecar_containers = {
  "id": "k8s-sidecar-containers",
  "title": "Sidecar Containers",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-sidecar-containers.json",
  "interviewAnswer": "Sidecar containers support the main application container, sharing the same Pod lifecycle, network, and storage. Common patterns: logging (fluentd collecting logs), proxy (Envoy/Istio intercepting traffic), and monitoring sidecars.",
  "tldr": [
    "Helper containers alongside the main container in the same Pod",
    "Share network namespace (localhost) and volumes",
    "Logging: fluentd, filebeat forwarding app logs",
    "Proxying: Istio/Envoy sidecar for service mesh traffic management"
  ],
  "deepDive": [
    {
      "heading": "Logging Pattern",
      "text": "Main app writes logs to a shared emptyDir volume. Sidecar reads and forwards to centralized logging (Elasticsearch, CloudWatch). Sidecar can also rotate or compress logs."
    },
    {
      "heading": "Proxy Pattern (Service Mesh)",
      "text": "Istio injects an Envoy proxy sidecar that intercepts all Pod traffic via iptables rules. Handles mTLS, traffic routing, telemetry, access control. Each Pod gets its own proxy (data plane)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Sidecar Containers applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a sidecar container?",
      "answer": "Helper container in the same Pod supporting the main app."
    },
    {
      "question": "How do sidecars communicate with main?",
      "answer": "Via localhost (shared network) and shared volumes."
    },
    {
      "question": "What is the Istio sidecar?",
      "answer": "Envoy proxy injected into each Pod for mTLS, routing, telemetry."
    },
    {
      "question": "Sidecar vs init container?",
      "answer": "Sidecar runs alongside main. Init runs to completion before main starts."
    },
    {
      "question": "Sidecar Containers — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Sidecar Containers — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Sidecar Containers — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Sidecar Containers — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Sidecar Containers — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Sidecar Containers — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Sidecar is defined in which field?",
      "options": [
        "initContainers",
        "containers (alongside main)",
        "sidecars"
      ],
      "answer": 1
    },
    {
      "question": "Istio sidecar uses?",
      "options": [
        "NGINX",
        "Envoy",
        "HAProxy"
      ],
      "answer": 1
    },
    {
      "question": "Sidecars share with main?",
      "options": [
        "Nothing",
        "Network and volumes",
        "Only volumes"
      ],
      "answer": 1
    },
    {
      "question": "Logging sidecar reads from?",
      "options": [
        "Stdout",
        "Shared volume",
        "Direct connection"
      ],
      "answer": 1
    },
    {
      "question": "Sidecar Containers — How to ensure reliability?",
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
      "question": "Sidecar Containers — What helps team collaboration?",
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
      "question": "Sidecar Containers — What reduces errors most?",
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
      "question": "Sidecar Containers — What improves speed?",
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
      "question": "Sidecar Containers — What is key for monitoring?",
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
      "question": "Sidecar Containers — What ensures quality?",
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
      "title": "View Sidecar Logs",
      "useCase": "Debug sidecar",
      "code": "kubectl logs my-pod -c sidecar-container",
      "description": "Shows sidecar-specific logs."
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
  "laymanDefinition": "Sidecar containers support the main application container, sharing the same Pod lifecycle, network, and storage. Common patterns: logging (fluentd collecting logs), proxy (Envoy/Istio intercepting traffic), and monitoring sidecars.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Sidecar Containers</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sidecar Containers</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Helper containers alongside the main container in </text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">the same Pod</text></svg>"
};
