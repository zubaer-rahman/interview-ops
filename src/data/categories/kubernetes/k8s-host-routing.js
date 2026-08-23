export const k8s_host_routing = {
  "id": "k8s-host-routing",
  "title": "Host Routing",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-host-routing.json",
  "interviewAnswer": "Host routing directs traffic based on the HTTP Host header, enabling multiple domains on a single Ingress. Each host can have different backend services and TLS configurations.",
  "tldr": [
    "Routes traffic by HTTP Host header",
    "Multiple hosts per Ingress, each with different rules",
    "Wildcard hosts: *.example.com",
    "Host precedence: exact match > wildcard > catch-all"
  ],
  "deepDive": [
    {
      "heading": "Configuration",
      "text": "spec.rules[].host: \"api.example.com\". Multiple rules for multiple hosts. Wildcard: \"*.example.com\" matches all subdomains. Default backend: routes unmatched hosts."
    },
    {
      "heading": "Host Precedence",
      "text": "Exact host match first (api.example.com). Then wildcard match (*.example.com). Then default backend (catch-all). Rules evaluated in order. Highest specificity wins."
    },
    {
      "heading": "Common Use Cases",
      "text": "Host Routing applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is host routing?",
      "answer": "Routing traffic based on HTTP Host header."
    },
    {
      "question": "Host field in Ingress?",
      "answer": "spec.rules[].host: domain name for routing."
    },
    {
      "question": "Wildcard format?",
      "answer": "*.example.com matches any subdomain."
    },
    {
      "question": "Precedence order?",
      "answer": "Exact > wildcard > default backend."
    },
    {
      "question": "Host Routing — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Host Routing — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Host Routing — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Host Routing — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Host Routing — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Host Routing — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Host routing uses?",
      "options": [
        "URL path",
        "HTTP Host header",
        "Query parameter"
      ],
      "answer": 1
    },
    {
      "question": "Wildcard prefix?",
      "options": [
        "*",
        "?.",
        "wild."
      ],
      "answer": 0
    },
    {
      "question": "Catch-all config?",
      "options": [
        "defaultBackend",
        "catchAll",
        "fallback"
      ],
      "answer": 0
    },
    {
      "question": "Precedence winner?",
      "options": [
        "Exact",
        "Wildcard",
        "Default"
      ],
      "answer": 0
    },
    {
      "question": "Host Routing — How to ensure reliability?",
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
      "question": "Host Routing — What helps team collaboration?",
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
      "question": "Host Routing — What reduces errors most?",
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
      "question": "Host Routing — What improves speed?",
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
      "question": "Host Routing — What is key for monitoring?",
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
      "question": "Host Routing — What ensures quality?",
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
      "title": "Multi-host Ingress",
      "useCase": "Route multiple domains",
      "code": "kubectl create ingress multi --rule=\"api.example.com/*=api:80\" --rule=\"www.example.com/*=web:80\"",
      "description": "Routes two hosts to different services."
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
  "laymanDefinition": "Host routing directs traffic based on the HTTP Host header, enabling multiple domains on a single Ingress. Each host can have different backend services and TLS configurations.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Host Routing</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Host Routing</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Routes traffic by HTTP Host header</text></svg>"
};
