export const k8s_lb_round_robin = {
  "id": "k8s-lb-round-robin",
  "title": "Round Robin",
  "difficulty": "beginner",
  "estimatedMinutes": 5,
  "file": "k8s-lb-round-robin.json",
  "interviewAnswer": "Round Robin is the default load balancing algorithm in Kubernetes (via kube-proxy iptables). Each new connection is randomly routed to one of the available Pod backends with equal probability.",
  "tldr": [
    "Default algorithm in kube-proxy iptables mode",
    "Each connection randomly forwarded to Pod backend",
    "IPVS mode supports rr (round robin), lc, dh, sh, sed, nq",
    "Equal distribution over time but not per-request"
  ],
  "deepDive": [
    {
      "heading": "kube-proxy Modes",
      "text": "iptables (default): random selection from healthy endpoints. IPVS: rr (round robin), lc (least connection), dh (destination hashing), sh (source hashing), sed (shortest expected delay), nq (never queue). IPVS provides more algorithms and better performance at scale."
    },
    {
      "heading": "Limitations",
      "text": "iptables round robin is random at the connection level, not per-packet. Uneven distribution possible with short-lived connections. IPVS rr provides true round robin. SessionAffinity overrides round robin for stickiness."
    },
    {
      "heading": "Common Use Cases",
      "text": "Round Robin applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Default K8s LB algorithm?",
      "answer": "Random distribution via iptables (connection-level)."
    },
    {
      "question": "IPVS round robin?",
      "answer": "True round robin distribution between backends."
    },
    {
      "question": "Does iptables provide perfect round robin?",
      "answer": "No — random selection, can be uneven with short connections."
    },
    {
      "question": "SessionAffinity?",
      "answer": "Overrides default algorithm for client stickiness."
    },
    {
      "question": "Round Robin — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Round Robin — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Round Robin — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Round Robin — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Round Robin — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Round Robin — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Default kube-proxy mode?",
      "options": [
        "iptables (random)",
        "IPVS (rr)",
        "userspace"
      ],
      "answer": 0
    },
    {
      "question": "IPVS not a supported algorithm?",
      "options": [
        "rr",
        "lc",
        "wrr",
        "wlc"
      ],
      "answer": 2
    },
    {
      "question": "SessionAffinity uses?",
      "options": [
        "Cookie",
        "ClientIP",
        "Header"
      ],
      "answer": 1
    },
    {
      "question": "iptables distribution?",
      "options": [
        "Perfect round robin",
        "Random",
        "Least connections"
      ],
      "answer": 1
    },
    {
      "question": "Round Robin — How to ensure reliability?",
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
      "question": "Round Robin — What helps team collaboration?",
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
      "question": "Round Robin — What reduces errors most?",
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
      "question": "Round Robin — What improves speed?",
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
      "question": "Round Robin — What is key for monitoring?",
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
      "question": "Round Robin — What ensures quality?",
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
      "title": "Check kube-proxy Mode",
      "useCase": "View proxy algorithm",
      "code": "kubectl get configmap kube-proxy -n kube-system -o yaml | grep -A 2 mode",
      "description": "Shows iptables or IPVS mode."
    },
    {
      "title": "Create Session Affinity",
      "useCase": "Sticky sessions",
      "code": "kubectl patch svc my-svc -p '{\"spec\":{\"sessionAffinity\":\"ClientIP\"}}'",
      "description": "Enables sticky sessions."
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
  "laymanDefinition": "Round Robin is the default load balancing algorithm in Kubernetes (via kube-proxy iptables). Each new connection is randomly routed to one of the available Pod backends with equal probability.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Round Robin</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Round Robin</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Default algorithm in kube-proxy iptables mode</text></svg>"
};
