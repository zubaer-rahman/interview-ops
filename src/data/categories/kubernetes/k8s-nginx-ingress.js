export const k8s_nginx_ingress = {
  "id": "k8s-nginx-ingress",
  "title": "NGINX Ingress",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-nginx-ingress.json",
  "interviewAnswer": "NGINX Ingress Controller is the most popular choice, using NGINX as the reverse proxy. Features: path/host routing, TLS termination, rate limiting, authentication, canary, custom annotations. Configures nginx.conf dynamically.",
  "tldr": [
    "Most popular Ingress Controller using NGINX reverse proxy",
    "Annotations for customization: rewrite, cors, rate-limit, auth",
    "Supports TCP/UDP Services via --tcp-services-configmap",
    "Canary deployments via nginx.ingress.kubernetes.io/canary"
  ],
  "deepDive": [
    {
      "heading": "Annotations",
      "text": "Rewrite: nginx.ingress.kubernetes.io/rewrite-target. CORS: enable-cors, cors-* headers. Rate limit: limit-rps, limit-connections. Auth: basic-auth, oauth, oidc. SSL: force-ssl-redirect, ssl-passthrough. Session: affinity (cookie)."
    },
    {
      "heading": "Canary with NGINX",
      "text": "Annotations: canary: \"true\", canary-weight (0-100), canary-by-header, canary-by-cookie. Weighted traffic split between primary and canary backends without replica manipulation."
    },
    {
      "heading": "Common Use Cases",
      "text": "NGINX Ingress applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is NGINX Ingress?",
      "answer": "Most popular Ingress Controller using NGINX as reverse proxy."
    },
    {
      "question": "How to customize?",
      "answer": "Annotations on the Ingress resource."
    },
    {
      "question": "Canary support?",
      "answer": "Via canary annotations for weighted traffic splitting."
    },
    {
      "question": "TCP/UDP Services?",
      "answer": "Via --tcp-services-configmap and --udp-services-configmap."
    },
    {
      "question": "NGINX Ingress — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "NGINX Ingress — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "NGINX Ingress — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "NGINX Ingress — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "NGINX Ingress — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "NGINX Ingress — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Rewrite annotation?",
      "options": [
        "rewrite-target",
        "url-rewrite",
        "path-rewrite"
      ],
      "answer": 0
    },
    {
      "question": "Canary weight annotation?",
      "options": [
        "canary-weight",
        "traffic-weight",
        "canary-traffic"
      ],
      "answer": 0
    },
    {
      "question": "Rate limit annotation?",
      "options": [
        "limit-rps",
        "rate-limit",
        "throttle"
      ],
      "answer": 0
    },
    {
      "question": "Session affinity uses?",
      "options": [
        "Header",
        "Cookie",
        "IP"
      ],
      "answer": 1
    },
    {
      "question": "NGINX Ingress — How to ensure reliability?",
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
      "question": "NGINX Ingress — What helps team collaboration?",
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
      "question": "NGINX Ingress — What reduces errors most?",
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
      "question": "NGINX Ingress — What improves speed?",
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
      "question": "NGINX Ingress — What is key for monitoring?",
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
      "question": "NGINX Ingress — What ensures quality?",
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
      "title": "Create NGINX Ingress",
      "useCase": "Route with host",
      "code": "kubectl create ingress web --rule=\"example.com/*=web:80\"",
      "description": "Routes example.com to web service."
    },
    {
      "title": "Rewrite Rule",
      "useCase": "Path rewrite",
      "code": "kubectl annotate ingress web nginx.ingress.kubernetes.io/rewrite-target=/",
      "description": "Rewrites paths."
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
  "laymanDefinition": "NGINX Ingress Controller is the most popular choice, using NGINX as the reverse proxy. Features: path/host routing, TLS termination, rate limiting, authentication, canary, custom annotations. Configures nginx.conf dynamically.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">NGINX Ingress</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NGINX Ingress</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Most popular Ingress Controller using NGINX revers</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">e proxy</text></svg>"
};
