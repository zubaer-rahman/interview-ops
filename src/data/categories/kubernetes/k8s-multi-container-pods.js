export const k8s_multi_container_pods = {
  "id": "k8s-multi-container-pods",
  "title": "Multi-container Pods",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-multi-container-pods.json",
  "interviewAnswer": "Multi-container Pods run multiple containers sharing the same lifecycle, network, and storage. Patterns: sidecar, adapter, ambassador, init. Use when containers are tightly coupled — they must be co-located and co-scheduled.",
  "tldr": [
    "Multiple containers sharing network, storage, and lifecycle",
    "Patterns: Sidecar, Adapter, Ambassador, Init",
    "Containers communicate via localhost and shared volumes",
    "All containers start/stop together as a unit"
  ],
  "deepDive": [
    {
      "heading": "Adapter Pattern",
      "text": "Transforms main container output for external systems. Example: main app writes metrics in Prometheus format, adapter converts to Stackdriver. Benefits: main app stays clean, adapter handles integration."
    },
    {
      "heading": "Ambassador Pattern",
      "text": "Proxies external connections for the main container. Example: main app connects to localhost:3306, ambassador proxies to remote MySQL. Handles connection pooling, retries, circuit breaking transparently."
    },
    {
      "heading": "Common Use Cases",
      "text": "Multi-container Pods applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What are multi-container Pods?",
      "answer": "Multiple containers sharing network, storage, lifecycle in one Pod."
    },
    {
      "question": "When to use vs separate Pods?",
      "answer": "When tightly coupled (proxy, logging). Separate Pods for loosely coupled services."
    },
    {
      "question": "Can containers use different images?",
      "answer": "Yes. Different OS, language, tool sets in the same Pod."
    },
    {
      "question": "Ambassador pattern use?",
      "answer": "Proxy external connections with retries and circuit breaking."
    },
    {
      "question": "Multi-container Pods — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Multi-container Pods — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Multi-container Pods — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Multi-container Pods — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Multi-container Pods — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Multi-container Pods — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What do Pod containers NOT share?",
      "options": [
        "Network",
        "IPC",
        "Process namespace by default",
        "Storage"
      ],
      "answer": 2
    },
    {
      "question": "Which pattern converts output format?",
      "options": [
        "Sidecar",
        "Adapter",
        "Ambassador",
        "Init"
      ],
      "answer": 1
    },
    {
      "question": "When NOT to use multi-container?",
      "options": [
        "Logging sidecar",
        "Independent services",
        "Proxy ambassador"
      ],
      "answer": 1
    },
    {
      "question": "Containers communicate via?",
      "options": [
        "Service IP",
        "localhost",
        "External DNS"
      ],
      "answer": 1
    },
    {
      "question": "Multi-container Pods — How to ensure reliability?",
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
      "question": "Multi-container Pods — What helps team collaboration?",
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
      "question": "Multi-container Pods — What reduces errors most?",
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
      "question": "Multi-container Pods — What improves speed?",
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
      "question": "Multi-container Pods — What is key for monitoring?",
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
      "question": "Multi-container Pods — What ensures quality?",
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
      "title": "Access Specific Container",
      "useCase": "Exec into sidecar",
      "code": "kubectl exec -it multi-pod -c sidecar -- /bin/sh",
      "description": "Opens shell in one container."
    },
    {
      "title": "View Logs per Container",
      "useCase": "Debug specific container",
      "code": "kubectl logs multi-pod -c main-app",
      "description": "Shows main container logs."
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
  "laymanDefinition": "Multi-container Pods run multiple containers sharing the same lifecycle, network, and storage. Patterns: sidecar, adapter, ambassador, init. Use when containers are tightly coupled — they must be co-located and co-scheduled.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Multi-container Pods</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Multi-container Pods</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Multiple containers sharing network, storage, and </text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">lifecycle</text></svg>"
};
