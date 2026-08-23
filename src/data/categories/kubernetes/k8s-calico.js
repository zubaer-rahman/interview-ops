export const k8s_calico = {
  "id": "k8s-calico",
  "title": "Calico",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-calico.json",
  "interviewAnswer": "Calico is the most popular CNI plugin providing BGP-based networking and full NetworkPolicy support. It uses BGP to route Pod IPs between nodes without encapsulation (or with IPIP for non-routable networks).",
  "tldr": [
    "BGP-based networking (no overlay by default, high performance)",
    "Full NetworkPolicy support (Kubernetes + extended Calico policies)",
    "IPIP encapsulation for cloud environments without BGP",
    "Supports eBPF mode (Cilium integration) for even better performance"
  ],
  "deepDive": [
    {
      "heading": "Calico Modes",
      "text": "BGP: nodes peer and exchange Pod routes directly (no encapsulation). IPIP: packets encapsulated (slight overhead) for environments where BGP not possible. eBPF: using eBPF dataplane for high-performance networking and security."
    },
    {
      "heading": "Calico NetworkPolicy",
      "text": "Calico extends Kubernetes NetworkPolicy with: GlobalNetworkPolicy (cluster-wide), GlobalNetworkSet (IP whitelists), ordered policy tiers (security, platform, application), deny rules, and action: Log, Allow, Deny, Pass."
    },
    {
      "heading": "Common Use Cases",
      "text": "Calico applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Calico?",
      "answer": "Most popular CNI plugin with BGP routing and full NetworkPolicy."
    },
    {
      "question": "Default routing mode?",
      "answer": "BGP — nodes exchange Pod routes directly without overlay."
    },
    {
      "question": "Calico vs Kubernetes NetworkPolicy?",
      "answer": "Calico extends with GlobalNetworkPolicy, ordered tiers, Log action."
    },
    {
      "question": "eBPG mode?",
      "answer": "Replaces iptables with eBPF for higher performance."
    },
    {
      "question": "Calico — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Calico — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Calico — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Calico — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Calico — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Calico — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Calico routing?",
      "options": [
        "Overlay only",
        "BGP (no overlay by default)",
        "Host networking"
      ],
      "answer": 1
    },
    {
      "question": "IPIP mode?",
      "options": [
        "No encapsulation",
        "Encapsulation for BGP-less envs",
        "Full mesh"
      ],
      "answer": 1
    },
    {
      "question": "GlobalNetworkPolicy scope?",
      "options": [
        "Namespace",
        "Cluster-wide",
        "Node-specific"
      ],
      "answer": 1
    },
    {
      "question": "Calico action types?",
      "options": [
        "Allow/Deny only",
        "Allow/Deny/Log/Pass",
        "Allow/Deny/Reject"
      ],
      "answer": 1
    },
    {
      "question": "Calico — How to ensure reliability?",
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
      "question": "Calico — What helps team collaboration?",
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
      "question": "Calico — What reduces errors most?",
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
      "question": "Calico — What improves speed?",
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
      "question": "Calico — What is key for monitoring?",
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
      "question": "Calico — What ensures quality?",
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
      "title": "Check Calico Status",
      "useCase": "Verify Calico health",
      "code": "kubectl get pods -n calico-system;\nkubectl calicoctl get nodes",
      "description": "Shows Calico components and BGP peers."
    },
    {
      "title": "Calico NetworkPolicy",
      "useCase": "Extended policy",
      "code": "kubectl apply -f calico-network-policy.yaml",
      "description": "Creates Calico GlobalNetworkPolicy."
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
  "laymanDefinition": "Calico is the most popular CNI plugin providing BGP-based networking and full NetworkPolicy support. It uses BGP to route Pod IPs between nodes without encapsulation (or with IPIP for non-routable networks).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Calico</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Calico</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">BGP-based networking (no overlay by default, high </text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">performance)</text></svg>"
};
