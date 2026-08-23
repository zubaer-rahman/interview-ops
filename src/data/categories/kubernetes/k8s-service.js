export const k8s_service = {
  "id": "k8s-service",
  "title": "Service",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-service.json",
  "interviewAnswer": "A Service provides stable network endpoints for Pods. Since Pods have changing IPs, Services give fixed virtual IPs and DNS names. Types: ClusterIP (internal), NodePort (external on node IP), LoadBalancer (cloud LB), ExternalName (DNS alias). kube-proxy implements routing on every node.",
  "tldr": [
    "Stable virtual IP and DNS decoupling from ephemeral Pod IPs",
    "Types: ClusterIP (default), NodePort (30000-32767), LoadBalancer (cloud), ExternalName (DNS CNAME)",
    "Label selectors discover Pod backends via EndpointSlices",
    "DNS: <service>.<namespace>.svc.cluster.local via CoreDNS"
  ],
  "deepDive": [
    {
      "heading": "Service Types",
      "text": "ClusterIP: internal virtual IP. NodePort: static port on every node. LoadBalancer: provisions cloud LB. Headless (clusterIP: None): returns all Pod IPs directly for StatefulSet."
    },
    {
      "heading": "Traffic Routing",
      "text": "Random distribution to Ready Pods. SessionAffinity: ClientIP for stickiness. ExternalTrafficPolicy: Cluster (may SNAT) or Local (preserves source IP, routes to local Pods only)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Service applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a Service?",
      "answer": "Stable IP/DNS decoupling clients from Pod IPs, routing to healthy backends."
    },
    {
      "question": "Service types?",
      "answer": "ClusterIP, NodePort, LoadBalancer, ExternalName, Headless."
    },
    {
      "question": "How does a Service find Pods?",
      "answer": "Label selectors. Controller watches Pods, updates EndpointSlices."
    },
    {
      "question": "NodePort port range?",
      "answer": "30000-32767 by default."
    },
    {
      "question": "Service — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Service — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Service — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Service — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Service — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Service — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Default Service type?",
      "options": [
        "NodePort",
        "ClusterIP",
        "LoadBalancer",
        "ExternalName"
      ],
      "answer": 1,
      "explanation": "ClusterIP is default."
    },
    {
      "question": "NodePort default range?",
      "options": [
        "1024-65535",
        "30000-32767",
        "20000-30000"
      ],
      "answer": 1,
      "explanation": "30000-32767."
    },
    {
      "question": "Provisions cloud LB?",
      "options": [
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "ExternalName"
      ],
      "answer": 2,
      "explanation": "LoadBalancer provisions cloud LB."
    },
    {
      "question": "Headless DNS returns?",
      "options": [
        "Single VIP",
        "All ready Pod IPs",
        "Cloud LB hostname"
      ],
      "answer": 1,
      "explanation": "Returns IPs of all ready Pods."
    },
    {
      "question": "Service — How to ensure reliability?",
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
      "question": "Service — What helps team collaboration?",
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
      "question": "Service — What reduces errors most?",
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
      "question": "Service — What improves speed?",
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
      "question": "Service — What is key for monitoring?",
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
      "question": "Service — What ensures quality?",
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
      "title": "Create ClusterIP Service",
      "useCase": "Internal exposure",
      "code": "kubectl expose deployment web --port=80 --target-port=8080",
      "description": "Exposes Deployment internally."
    },
    {
      "title": "Create NodePort",
      "useCase": "External access",
      "code": "kubectl expose deployment web --type=NodePort --port=80",
      "description": "Exposes externally via node port."
    },
    {
      "title": "Test Service DNS",
      "useCase": "Verify discovery",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup web-service",
      "description": "Tests DNS resolution."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A Service provides stable network endpoints for Pods. Since Pods have changing IPs, Services give fixed virtual IPs and DNS names. Types: ClusterIP (internal), NodePort (external on node IP), LoadBalancer (cloud LB), ExternalName (DNS alias). kube-proxy implements routing on every node.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Service</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Stable virtual IP and DNS decoupling from ephemera</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">l Pod IPs</text></svg>"
};
