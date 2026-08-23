export const k8s_ingress = {
  "id": "k8s-ingress",
  "title": "Ingress",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-ingress.json",
  "interviewAnswer": "Ingress exposes HTTP/HTTPS routes from outside the cluster to Services. An Ingress Controller must be deployed (NGINX, Traefik, etc.). Supports host/path routing, TLS termination, and default backends.",
  "tldr": [
    "L7 (HTTP/HTTPS) routing to Services",
    "Requires Ingress controller (not built-in)",
    "Host-based and path-based routing rules",
    "TLS termination with Secrets"
  ],
  "deepDive": [
    {
      "heading": "Routing Rules",
      "text": "Host-based: api.example.com routes to api Service. Path-based: /api/* routes to backend. Longest matching path wins. Wildcard hosts (*.example.com) supported."
    },
    {
      "heading": "TLS Termination",
      "text": "spec.tls: [{ hosts: [\"example.com\"], secretName: example-tls }]. Secret must be in same namespace. cert-manager automates Let's Encrypt certificates."
    },
    {
      "heading": "Common Use Cases",
      "text": "Ingress applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Ingress?",
      "answer": "L7 routing rules for HTTP/HTTPS traffic to Services."
    },
    {
      "question": "Ingress vs LoadBalancer?",
      "answer": "Ingress: L7, host/path routing, TLS. LoadBalancer: L4."
    },
    {
      "question": "Default backend?",
      "answer": "Fallback Service for unmatched requests."
    },
    {
      "question": "Ingress controller examples?",
      "answer": "NGINX, Traefik, HAProxy, AWS ALB, GCE."
    },
    {
      "question": "Ingress — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Ingress — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Ingress — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Ingress — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Ingress — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Ingress — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Ingress layer?",
      "options": [
        "L4",
        "L7",
        "L3"
      ],
      "answer": 1
    },
    {
      "question": "Ingress without controller?",
      "options": [
        "Works",
        "Does not work",
        "Limited"
      ],
      "answer": 1
    },
    {
      "question": "Default backend serves?",
      "options": [
        "Matched hosts",
        "Unmatched requests",
        "All traffic"
      ],
      "answer": 1
    },
    {
      "question": "TLS source?",
      "options": [
        "ConfigMap",
        "Secret",
        "Ingress annotation"
      ],
      "answer": 1
    },
    {
      "question": "Ingress — How to ensure reliability?",
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
      "question": "Ingress — What helps team collaboration?",
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
      "question": "Ingress — What reduces errors most?",
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
      "question": "Ingress — What improves speed?",
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
      "question": "Ingress — What is key for monitoring?",
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
      "question": "Ingress — What ensures quality?",
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
      "title": "Create Ingress",
      "useCase": "Expose service",
      "code": "kubectl create ingress my-ingress --rule=\"example.com/*=my-svc:80\"",
      "description": "Creates simple Ingress rule."
    },
    {
      "title": "Add TLS",
      "useCase": "Enable HTTPS",
      "code": "kubectl create ingress secure --rule=\"example.com/*=my-svc:80,tls=my-tls\"",
      "description": "Adds TLS termination."
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
  "laymanDefinition": "Ingress exposes HTTP/HTTPS routes from outside the cluster to Services. An Ingress Controller must be deployed (NGINX, Traefik, etc.). Supports host/path routing, TLS termination, and default backends.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Ingress</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ingress</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">L7 (HTTP/HTTPS) routing to Services</text></svg>"
};
