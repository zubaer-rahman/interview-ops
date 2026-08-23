export const k8s_network_policy = {
  "id": "k8s-network-policy",
  "title": "Network Policy",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-network-policy.json",
  "interviewAnswer": "Network Policy specifies how Pods communicate. It is a Pod-level firewall controlling ingress and egress based on labels, IP blocks, and ports. Requires a CNI plugin supporting Network Policy (Calico, Cilium).",
  "tldr": [
    "Pod-level firewall for ingress and egress traffic",
    "Selectors: podSelector, namespaceSelector, ipBlock",
    "Requires CNI with Network Policy support",
    "Default: all traffic allowed. Adding a policy restricts."
  ],
  "deepDive": [
    {
      "heading": "Policy Rules",
      "text": "podSelector targets Pods. Ingress rules: from (ipBlock, namespaceSelector, podSelector) with ports. Egress rules: to destinations with ports. policyTypes: [\"Ingress\", \"Egress\"]. Empty from/to = all allowed."
    },
    {
      "heading": "Default Deny Patterns",
      "text": "Deny all ingress: empty podSelector: {} with no ingress rules. Deny all egress: empty podSelector with no egress rules. Allow specific: add targeted from/to rules."
    },
    {
      "heading": "Common Use Cases",
      "text": "Network Policy applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Network Policy?",
      "answer": "Pod-level firewall controlling ingress/egress traffic."
    },
    {
      "question": "When does it take effect?",
      "answer": "Only with CNI plugin supporting it (Calico, Cilium)."
    },
    {
      "question": "Default behavior?",
      "answer": "All traffic allowed. Adding any policy restricts to defined rules."
    },
    {
      "question": "How to isolate a namespace?",
      "answer": "Default-deny policy with podSelector: {} and no ingress rules."
    },
    {
      "question": "Network Policy — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Network Policy — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Network Policy — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Network Policy — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Network Policy — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Network Policy — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Network Policy requires?",
      "options": [
        "kube-proxy",
        "CNI with policy support",
        "Ingress controller"
      ],
      "answer": 1
    },
    {
      "question": "Default traffic?",
      "options": [
        "All denied",
        "All allowed",
        "Mixed"
      ],
      "answer": 1
    },
    {
      "question": "Not a valid peer?",
      "options": [
        "podSelector",
        "namespaceSelector",
        "nodeSelector",
        "ipBlock"
      ],
      "answer": 2
    },
    {
      "question": "Allow specific namespace?",
      "options": [
        "namespaceSelector with matchLabels",
        "ipBlock",
        "Both"
      ],
      "answer": 0
    },
    {
      "question": "Network Policy — How to ensure reliability?",
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
      "question": "Network Policy — What helps team collaboration?",
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
      "question": "Network Policy — What reduces errors most?",
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
      "question": "Network Policy — What improves speed?",
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
      "question": "Network Policy — What is key for monitoring?",
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
      "question": "Network Policy — What ensures quality?",
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
      "title": "Deny All Ingress",
      "useCase": "Isolate Pods",
      "code": "kubectl apply -f deny-all.yaml",
      "description": "Default-deny ingress policy."
    },
    {
      "title": "Allow Specific",
      "useCase": "Allow from frontend",
      "code": "kubectl apply -f allow-frontend.yaml",
      "description": "Allows ingress from frontend Pods."
    },
    {
      "title": "View Policies",
      "useCase": "List rules",
      "code": "kubectl get networkpolicies",
      "description": "Lists all NetworkPolicies."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "Network Policy specifies how Pods communicate. It is a Pod-level firewall controlling ingress and egress based on labels, IP blocks, and ports. Requires a CNI plugin supporting Network Policy (Calico, Cilium).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Network Policy</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Network Policy</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Pod-level firewall for ingress and egress traffic</text></svg>"
};
