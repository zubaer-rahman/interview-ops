export const k8s_lb_layer4 = {
  "id": "k8s-lb-layer4",
  "title": "Layer 4 Load Balancer",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-lb-layer4.json",
  "interviewAnswer": "Layer 4 load balancing operates at the transport layer (TCP/UDP). It forwards traffic based on IP and port, without inspecting HTTP headers. Used for databases, message queues, and any non-HTTP protocol.",
  "tldr": [
    "Operates at TCP/UDP transport layer",
    "Forwards based on IP:port, no HTTP inspection",
    "Used for: MySQL, Redis, Kafka, gRPC, WebSockets",
    "Lower latency than L7 but less intelligent routing"
  ],
  "deepDive": [
    {
      "heading": "L4 vs L7",
      "text": "L4: TCP/UDP forwarding, no header inspection, lower latency, works with any protocol. L7: HTTP/HTTPS aware, header routing, TLS termination, higher latency, HTTP-only."
    },
    {
      "heading": "Kubernetes L4 Options",
      "text": "Service type LoadBalancer (cloud LB, L4). NodePort (L4). kube-proxy (iptables/IPVS, L4 forwarding). HAProxy Ingress (L4 + L7). NGINX Ingress (primarily L7 with L4 via TCP configmap)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Layer 4 Load Balancer applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is L4 load balancing?",
      "answer": "TCP/UDP transport layer forwarding based on IP:port."
    },
    {
      "question": "L4 vs L7?",
      "answer": "L4: any protocol, lower latency. L7: HTTP-aware, TLS, path routing."
    },
    {
      "question": "Use cases?",
      "answer": "MySQL, Redis, Kafka, gRPC, WebSockets."
    },
    {
      "question": "Kubernetes L4 options?",
      "answer": "LoadBalancer Service, NodePort, kube-proxy."
    },
    {
      "question": "Layer 4 Load Balancer — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Layer 4 Load Balancer — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Layer 4 Load Balancer — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Layer 4 Load Balancer — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Layer 4 Load Balancer — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Layer 4 Load Balancer — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "L4 operates at?",
      "options": [
        "Application (L7)",
        "Transport (L4)",
        "Network (L3)"
      ],
      "answer": 1
    },
    {
      "question": "L4 forwarding based on?",
      "options": [
        "HTTP headers",
        "IP + port",
        "URL path"
      ],
      "answer": 1
    },
    {
      "question": "L4 works with?",
      "options": [
        "HTTP only",
        "Any TCP/UDP protocol",
        "HTTP + WebSocket"
      ],
      "answer": 1
    },
    {
      "question": "L4 latency?",
      "options": [
        "Higher than L7",
        "Lower than L7",
        "Same"
      ],
      "answer": 1
    },
    {
      "question": "Layer 4 Load Balancer — How to ensure reliability?",
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
      "question": "Layer 4 Load Balancer — What helps team collaboration?",
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
      "question": "Layer 4 Load Balancer — What reduces errors most?",
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
      "question": "Layer 4 Load Balancer — What improves speed?",
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
      "question": "Layer 4 Load Balancer — What is key for monitoring?",
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
      "question": "Layer 4 Load Balancer — What ensures quality?",
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
      "title": "Create L4 Service",
      "useCase": "TCP load balancer",
      "code": "kubectl expose deployment mysql --type=LoadBalancer --port=3306",
      "description": "Creates L4 LB for MySQL."
    },
    {
      "title": "NodePort L4",
      "useCase": "Simple TCP access",
      "code": "kubectl expose deployment redis --type=NodePort --port=6379",
      "description": "Creates NodePort for Redis."
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
  "laymanDefinition": "Layer 4 load balancing operates at the transport layer (TCP/UDP). It forwards traffic based on IP and port, without inspecting HTTP headers. Used for databases, message queues, and any non-HTTP protocol.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Layer 4 Load Balancer</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Layer 4 Load Balancer</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Operates at TCP/UDP transport layer</text></svg>"
};
