export const k8s_lb_least_connections = {
  "id": "k8s-lb-least-connections",
  "title": "Least Connections",
  "difficulty": "intermediate",
  "estimatedMinutes": 5,
  "file": "k8s-lb-least-connections.json",
  "interviewAnswer": "Least Connections routing sends new connections to the Pod with the fewest active connections. Helps balance load when request processing times vary. Available with IPVS mode (lc algorithm).",
  "tldr": [
    "Sends new connections to Pod with fewest active connections",
    "IPVS mode: lc (least connection) algorithm",
    "Better for variable-length requests",
    "Not available in iptables mode (random only)"
  ],
  "deepDive": [
    {
      "heading": "When to Use",
      "text": "Variable processing times: some requests take 1ms, others 1s. Round robin would overload the Pod that gets the slow request. Least connections ensures each Pod has a fair share of concurrent work."
    },
    {
      "heading": "IPVS Algorithms",
      "text": "lc: least connection (fewest active). wlc: weighted least connection (consider server weight). sed: shortest expected delay. nq: never queue (fastest first). dh/sed/nq available only in IPVS mode."
    },
    {
      "heading": "Common Use Cases",
      "text": "Least Connections applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is least connections?",
      "answer": "Routes to Pod with fewest active connections."
    },
    {
      "question": "When to use?",
      "answer": "Variable request processing times."
    },
    {
      "question": "Available in which mode?",
      "answer": "IPVS mode only (not iptables)."
    },
    {
      "question": "IPVS algorithm code?",
      "answer": "lc (least connection)."
    },
    {
      "question": "Least Connections — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Least Connections — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Least Connections — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Least Connections — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Least Connections — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Least Connections — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Least connections uses?",
      "options": [
        "iptables",
        "IPVS (lc)",
        "Userspace"
      ],
      "answer": 1
    },
    {
      "question": "Best for?",
      "options": [
        "Uniform requests",
        "Variable-length requests",
        "Static content"
      ],
      "answer": 1
    },
    {
      "question": "wlc adds?",
      "options": [
        "Hashing",
        "Weighted consideration",
        "Timeout"
      ],
      "answer": 1
    },
    {
      "question": "sed algorithm?",
      "options": [
        "Shortest expected delay",
        "Source hash",
        "Destination hash"
      ],
      "answer": 0
    },
    {
      "question": "Least Connections — How to ensure reliability?",
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
      "question": "Least Connections — What helps team collaboration?",
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
      "question": "Least Connections — What reduces errors most?",
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
      "question": "Least Connections — What improves speed?",
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
      "question": "Least Connections — What is key for monitoring?",
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
      "question": "Least Connections — What ensures quality?",
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
      "title": "Basic Setup",
      "useCase": "Initial configuration",
      "code": "# Basic configuration example\n# This shows the fundamental setup",
      "description": "Basic setup example for beginners."
    },
    {
      "title": "Common Use Case",
      "useCase": "Typical implementation",
      "code": "# Common implementation pattern\n# Used in everyday scenarios",
      "description": "Standard use case example."
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
  "laymanDefinition": "Least Connections routing sends new connections to the Pod with the fewest active connections. Helps balance load when request processing times vary. Available with IPVS mode (lc algorithm).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Least Connections</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Least Connections</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Sends new connections to Pod with fewest active co</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">nnections</text></svg>"
};
