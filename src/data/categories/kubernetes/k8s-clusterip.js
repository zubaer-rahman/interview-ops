export const k8s_clusterip = {
  "id": "k8s-clusterip",
  "title": "ClusterIP",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-clusterip.json",
  "interviewAnswer": "ClusterIP is the default Service type, providing an internal virtual IP reachable within the cluster. Ideal for microservice communication. Traffic distributed to Pod backends via kube-proxy (iptables or IPVS). DNS: service.namespace.svc.cluster.local.",
  "tldr": [
    "Default Service type — internal virtual IP only",
    "Stable IP for Pod-to-Pod communication",
    "DNS: <service>.<namespace>.svc.cluster.local",
    "Not accessible from outside the cluster"
  ],
  "deepDive": [
    {
      "heading": "VIP Implementation",
      "text": "kube-proxy watches Services and EndpointSlices. Modes: iptables (default, random selection), IPVS (faster, more algorithms), userspace (legacy). ClusterIP range set by --service-cluster-ip-range on kube-apiserver."
    },
    {
      "heading": "DNS Resolution",
      "text": "CoreDNS resolves service.namespace.svc.cluster.local to ClusterIP. Same-namespace: just service name works. Headless Services (clusterIP: None) return Pod IPs instead of VIP."
    },
    {
      "heading": "Common Use Cases",
      "text": "ClusterIP applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is ClusterIP?",
      "answer": "Default Service type with internal virtual IP for cluster-internal access."
    },
    {
      "question": "How is ClusterIP implemented?",
      "answer": "kube-proxy with iptables (default) or IPVS."
    },
    {
      "question": "Can ClusterIP be accessed externally?",
      "answer": "No. Use NodePort, LoadBalancer, or Ingress."
    },
    {
      "question": "Cross-namespace DNS?",
      "answer": "<service>.<namespace>.svc.cluster.local"
    },
    {
      "question": "ClusterIP — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "ClusterIP — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "ClusterIP — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "ClusterIP — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "ClusterIP — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "ClusterIP — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Default Service type?",
      "options": [
        "NodePort",
        "ClusterIP",
        "LoadBalancer"
      ],
      "answer": 1
    },
    {
      "question": "ClusterIP accessible from?",
      "options": [
        "Outside cluster",
        "Inside cluster only",
        "Anywhere"
      ],
      "answer": 1
    },
    {
      "question": "kube-proxy default mode?",
      "options": [
        "IPVS",
        "iptables",
        "userspace"
      ],
      "answer": 1
    },
    {
      "question": "ClusterIP range configured on?",
      "options": [
        "kubelet",
        "kube-apiserver",
        "kube-controller-manager"
      ],
      "answer": 1
    },
    {
      "question": "ClusterIP — How to ensure reliability?",
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
      "question": "ClusterIP — What helps team collaboration?",
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
      "question": "ClusterIP — What reduces errors most?",
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
      "question": "ClusterIP — What improves speed?",
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
      "question": "ClusterIP — What is key for monitoring?",
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
      "question": "ClusterIP — What ensures quality?",
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
      "useCase": "Expose deployment internally",
      "code": "kubectl expose deployment web --port=80 --target-port=8080",
      "description": "Creates ClusterIP Service."
    },
    {
      "title": "Access via DNS",
      "useCase": "Test DNS resolution",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup web-service",
      "description": "Resolves Service DNS."
    },
    {
      "title": "List Services",
      "useCase": "View cluster services",
      "code": "kubectl get services",
      "description": "Shows ClusterIP, ports, endpoints."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "ClusterIP is the default Service type, providing an internal virtual IP reachable within the cluster. Ideal for microservice communication. Traffic distributed to Pod backends via kube-proxy (iptables or IPVS). DNS: service.namespace.svc.cluster.local.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ClusterIP</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ClusterIP</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Default Service type — internal virtual IP only</text></svg>"
};
