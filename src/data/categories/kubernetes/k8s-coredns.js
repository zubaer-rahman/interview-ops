export const k8s_coredns = {
  "id": "k8s-coredns",
  "title": "CoreDNS",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-coredns.json",
  "interviewAnswer": "CoreDNS is the default DNS server for Kubernetes, replacing kube-dns. It is a flexible, extensible DNS server written in Go. Configurable via Corefile with plugins for DNS resolution, caching, health checking, Prometheus metrics, and more.",
  "tldr": [
    "Default cluster DNS (replaces kube-dns)",
    "Configurable via Corefile with plugin chain",
    "Plugins: kubernetes, prometheus, forward, cache, health, loop",
    "Deployed as Deployment (replicas: 2) in kube-system"
  ],
  "deepDive": [
    {
      "heading": "Corefile Configuration",
      "text": "Example: .:53 { errors, health {lameduck 5s}, kubernetes cluster.local {pods insecure, ttl 30}, prometheus :9153, forward . /etc/resolv.conf {max_concurrent 1000}, cache 30, loop, reload 30, loadbalance }."
    },
    {
      "heading": "Scaling",
      "text": "CoreDNS is deployed with 2 replicas by default. For large clusters (>1000 services), increase replicas and CPU limits. Autoscaling: cluster-proportional-autoscaler adjusts replicas based on node/core count."
    },
    {
      "heading": "Common Use Cases",
      "text": "CoreDNS applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is CoreDNS?",
      "answer": "Default Kubernetes DNS server, extensible via plugins."
    },
    {
      "question": "Configuration format?",
      "answer": "Corefile with plugin chain (bind, forward, kubernetes, cache)."
    },
    {
      "question": "Key plugins?",
      "answer": "kubernetes (service discovery), forward (upstream), cache (TTL), prometheus (metrics)."
    },
    {
      "question": "Default replicas?",
      "answer": "2, auto-scaled for large clusters."
    },
    {
      "question": "CoreDNS — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "CoreDNS — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "CoreDNS — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "CoreDNS — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "CoreDNS — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "CoreDNS — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "CoreDNS replaces?",
      "options": [
        "kube-dns",
        "Unbound",
        "BIND"
      ],
      "answer": 0
    },
    {
      "question": "Corefile format?",
      "options": [
        "YAML",
        "Custom config language",
        "JSON"
      ],
      "answer": 1
    },
    {
      "question": "Kubernetes plugin does?",
      "options": [
        "Service discovery",
        "Caching",
        "Forwarding"
      ],
      "answer": 0
    },
    {
      "question": "Forward plugin does?",
      "options": [
        "Upstream DNS",
        "Service discovery",
        "Metrics"
      ],
      "answer": 0
    },
    {
      "question": "CoreDNS — How to ensure reliability?",
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
      "question": "CoreDNS — What helps team collaboration?",
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
      "question": "CoreDNS — What reduces errors most?",
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
      "question": "CoreDNS — What improves speed?",
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
      "question": "CoreDNS — What is key for monitoring?",
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
      "question": "CoreDNS — What ensures quality?",
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
      "title": "Edit CoreDNS Config",
      "useCase": "Customize DNS",
      "code": "kubectl edit configmap coredns -n kube-system",
      "description": "Modifies Corefile."
    },
    {
      "title": "Restart CoreDNS",
      "useCase": "Apply config changes",
      "code": "kubectl rollout restart -n kube-system deployment/coredns",
      "description": "Restarts to pick up config."
    },
    {
      "title": "Check CoreDNS Autoscaling",
      "useCase": "Verify scaling",
      "code": "kubectl get hpa -n kube-system",
      "description": "Shows CoreDNS HPA."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "CoreDNS is the default DNS server for Kubernetes, replacing kube-dns. It is a flexible, extensible DNS server written in Go. Configurable via Corefile with plugins for DNS resolution, caching, health checking, Prometheus metrics, and more.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CoreDNS</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CoreDNS</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Default cluster DNS (replaces kube-dns)</text></svg>"
};
