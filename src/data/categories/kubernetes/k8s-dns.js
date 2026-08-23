export const k8s_dns = {
  "id": "k8s-dns",
  "title": "DNS",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-dns.json",
  "interviewAnswer": "DNS in Kubernetes provides service discovery through CoreDNS. Pods get A/AAAA records for Services, SRV records for named ports, and reverse DNS lookup. Pod DNS: <pod-ip>.<namespace>.pod.cluster.local.",
  "tldr": [
    "CoreDNS (replaces kube-dns) provides DNS-based service discovery",
    "Service DNS: <svc>.<ns>.svc.cluster.local",
    "Pod DNS: <pod-ip>.<ns>.pod.cluster.local",
    "SRV records: _<port-name>._<proto>.<svc>.<ns>.svc.cluster.local"
  ],
  "deepDive": [
    {
      "heading": "CoreDNS Configuration",
      "text": "ConfigMap: coredns in kube-system. Plugins: kubernetes (service discovery), prometheus (metrics), forward (upstream DNS), loop (detect loops), cache (TTL). Cluster domain: cluster.local (configurable)."
    },
    {
      "heading": "DNS Resolution",
      "text": "Pods /etc/resolv.conf: nameserver <cluster-dns-ip>, search domains: <ns>.svc.cluster.local, svc.cluster.local, cluster.local. So just <svc> works in same namespace. ndots:5 controls when search domains are tried."
    },
    {
      "heading": "Common Use Cases",
      "text": "DNS applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Kubernetes DNS implementation?",
      "answer": "CoreDNS — deployed as Deployment in kube-system."
    },
    {
      "question": "Service DNS format?",
      "answer": "<svc>.<ns>.svc.cluster.local"
    },
    {
      "question": "Pod DNS format?",
      "answer": "<pod-ip>.<ns>.pod.cluster.local"
    },
    {
      "question": "ndots:5 meaning?",
      "answer": "If domain has <5 dots, search domains tried first."
    },
    {
      "question": "DNS — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "DNS — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "DNS — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "DNS — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "DNS — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "DNS — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Kubernetes DNS pod?",
      "options": [
        "kube-dns",
        "CoreDNS",
        "Unbound"
      ],
      "answer": 1
    },
    {
      "question": "Service FQDN?",
      "options": [
        "svc.ns.svc.cluster.local",
        "ns.svc.cluster.local",
        "svc.ns.cluster.local"
      ],
      "answer": 0
    },
    {
      "question": "Search domains include?",
      "options": [
        "ns.svc.cluster.local",
        "svc.cluster.local",
        "Both"
      ],
      "answer": 2
    },
    {
      "question": "CoreDNS ConfigMap?",
      "options": [
        "coredns",
        "corefile",
        "dns-config"
      ],
      "answer": 0
    },
    {
      "question": "DNS — How to ensure reliability?",
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
      "question": "DNS — What helps team collaboration?",
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
      "question": "DNS — What reduces errors most?",
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
      "question": "DNS — What improves speed?",
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
      "question": "DNS — What is key for monitoring?",
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
      "question": "DNS — What ensures quality?",
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
      "title": "Test DNS Resolution",
      "useCase": "Verify CoreDNS",
      "code": "kubectl run test --image=busybox --rm -it -- nslookup kubernetes",
      "description": "Resolves kubernetes service."
    },
    {
      "title": "Check CoreDNS Config",
      "useCase": "View DNS config",
      "code": "kubectl get configmap coredns -n kube-system -o yaml",
      "description": "Shows CoreDNS Corefile."
    },
    {
      "title": "Check CoreDNS Logs",
      "useCase": "Debug DNS issues",
      "code": "kubectl logs -n kube-system -l k8s-app=kube-dns",
      "description": "Shows DNS query logs."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "DNS in Kubernetes provides service discovery through CoreDNS. Pods get A/AAAA records for Services, SRV records for named ports, and reverse DNS lookup. Pod DNS: <pod-ip>.<namespace>.pod.cluster.local.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DNS</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DNS</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">CoreDNS (replaces kube-dns) provides DNS-based ser</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">vice discovery</text></svg>"
};
