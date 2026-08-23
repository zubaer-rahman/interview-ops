export const k8s_nodeport = {
  "id": "k8s-nodeport",
  "title": "NodePort",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-nodeport.json",
  "interviewAnswer": "NodePort exposes a Service on a static port (30000-32767) on every Node IP. A ClusterIP is created automatically. Suitable for dev/demos. Not recommended for production — use LoadBalancer or Ingress.",
  "tldr": [
    "Static port on every Node IP (30000-32767)",
    "ClusterIP created automatically",
    "trafficPolicy: Cluster (any Pod, SNAT) or Local (same node, preserve source IP)",
    "Not recommended for production"
  ],
  "deepDive": [
    {
      "heading": "Traffic Flow",
      "text": "External -> NodeIP:NodePort -> kube-proxy iptables -> ClusterIP -> Pod. trafficPolicy: Cluster (default, routes to any Pod, may SNAT) vs Local (routes only to local Pods, preserves source IP). Local may cause uneven load."
    },
    {
      "heading": "Security",
      "text": "Nodes must be reachable externally (security groups). Consider port scanning risk. Use Ingress Controller + NodePort or LoadBalancer for production."
    },
    {
      "heading": "Common Use Cases",
      "text": "NodePort applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is NodePort?",
      "answer": "Exposes Service on static port (30000-32767) on every Node IP."
    },
    {
      "question": "Default NodePort range?",
      "answer": "30000-32767."
    },
    {
      "question": "Created automatically with NodePort?",
      "answer": "A ClusterIP Service for internal routing."
    },
    {
      "question": "trafficPolicy Local vs Cluster?",
      "answer": "Local: routes to same-node Pods, preserves source IP. Cluster: routes to any Pod."
    },
    {
      "question": "NodePort — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "NodePort — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "NodePort — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "NodePort — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "NodePort — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "NodePort — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "NodePort range?",
      "options": [
        "1024-65535",
        "30000-32767",
        "80-443"
      ],
      "answer": 1
    },
    {
      "question": "NodePort creates?",
      "options": [
        "Only NodePort",
        "ClusterIP + NodePort",
        "Only ClusterIP"
      ],
      "answer": 1
    },
    {
      "question": "Local trafficPolicy preserves?",
      "options": [
        "Destination IP",
        "Source IP",
        "Neither"
      ],
      "answer": 1
    },
    {
      "question": "NodePort for production?",
      "options": [
        "Recommended",
        "Not recommended",
        "Only option"
      ],
      "answer": 1
    },
    {
      "question": "NodePort — How to ensure reliability?",
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
      "question": "NodePort — What helps team collaboration?",
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
      "question": "NodePort — What reduces errors most?",
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
      "question": "NodePort — What improves speed?",
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
      "question": "NodePort — What is key for monitoring?",
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
      "question": "NodePort — What ensures quality?",
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
      "title": "Create NodePort",
      "useCase": "External access",
      "code": "kubectl expose deployment web --type=NodePort --port=80",
      "description": "Creates NodePort Service."
    },
    {
      "title": "Get NodePort Number",
      "useCase": "Find assigned port",
      "code": "kubectl get svc web -o jsonpath=\"{.spec.ports[0].nodePort}\"",
      "description": "Returns the NodePort number."
    },
    {
      "title": "Access Service",
      "useCase": "Test external access",
      "code": "curl http://<node-ip>:<node-port>",
      "description": "Accesses service via node and port."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "NodePort exposes a Service on a static port (30000-32767) on every Node IP. A ClusterIP is created automatically. Suitable for dev/demos. Not recommended for production — use LoadBalancer or Ingress.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">NodePort</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NodePort</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Static port on every Node IP (30000-32767)</text></svg>"
};
