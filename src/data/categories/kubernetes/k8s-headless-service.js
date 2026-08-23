export const k8s_headless_service = {
  "id": "k8s-headless-service",
  "title": "Headless Service",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-headless-service.json",
  "interviewAnswer": "A Headless Service (clusterIP: None) returns all ready Pod IPs via DNS instead of a single VIP. Required by StatefulSets for stable network identities. Pod DNS: pod-name.service.namespace.svc.cluster.local.",
  "tldr": [
    "clusterIP: None — no VIP, no load balancing",
    "DNS returns A records for all ready Pod IPs",
    "Required by StatefulSet for stable identities",
    "SRV records provide port, protocol, hostname"
  ],
  "deepDive": [
    {
      "heading": "DNS Records",
      "text": "Standard: DNS returns single ClusterIP. Headless (with selector): returns all ready Pod IPs. Headless (no selector): returns ExternalName or custom endpoints. SRV: _<port>._<proto>.<svc>.<ns>.svc.cluster.local"
    },
    {
      "heading": "StatefulSet Integration",
      "text": "StatefulSet requires Headless Service with same name as serviceName field. Each Pod gets DNS: pod-name.service-name.ns.svc.cluster.local. Ordinal names enable individual Pod addressing (e.g., Cassandra seed nodes)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Headless Service applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Headless Service?",
      "answer": "No ClusterIP (clusterIP: None). DNS returns Pod IPs directly."
    },
    {
      "question": "Required by?",
      "answer": "StatefulSets for stable Pod identities."
    },
    {
      "question": "DNS vs ClusterIP?",
      "answer": "ClusterIP: one IP. Headless: all ready Pod IPs."
    },
    {
      "question": "SRV records?",
      "answer": "Yes, provide port, protocol, hostname for each Pod."
    },
    {
      "question": "Headless Service — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Headless Service — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Headless Service — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Headless Service — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Headless Service — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Headless Service — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Headless uses?",
      "options": [
        "clusterIP: None",
        "clusterIP: \"\"",
        "clusterIP: 0.0.0.0"
      ],
      "answer": 0
    },
    {
      "question": "StatefulSet requires?",
      "options": [
        "ClusterIP",
        "Headless Service",
        "LoadBalancer"
      ],
      "answer": 1
    },
    {
      "question": "Headless DNS returns?",
      "options": [
        "Virtual IP",
        "All Pod IPs",
        "Service IP"
      ],
      "answer": 1
    },
    {
      "question": "SRV records provide?",
      "options": [
        "Port + hostname",
        "IP + port",
        "Pod name"
      ],
      "answer": 0
    },
    {
      "question": "Headless Service — How to ensure reliability?",
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
      "question": "Headless Service — What helps team collaboration?",
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
      "question": "Headless Service — What reduces errors most?",
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
      "question": "Headless Service — What improves speed?",
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
      "question": "Headless Service — What is key for monitoring?",
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
      "question": "Headless Service — What ensures quality?",
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
      "title": "Create Headless Service",
      "useCase": "Direct Pod access",
      "code": "kubectl apply -f headless-svc.yaml",
      "description": "Creates clusterIP: None Service."
    },
    {
      "title": "Query DNS",
      "useCase": "List Pod IPs",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup <service>",
      "description": "Returns all Pod IPs."
    },
    {
      "title": "Pod DNS",
      "useCase": "Individual Pod address",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup my-pod-0.web-svc",
      "description": "Resolves specific Pod."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A Headless Service (clusterIP: None) returns all ready Pod IPs via DNS instead of a single VIP. Required by StatefulSets for stable network identities. Pod DNS: pod-name.service.namespace.svc.cluster.local.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Headless Service</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Headless Service</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">clusterIP: None — no VIP, no load balancing</text></svg>"
};
