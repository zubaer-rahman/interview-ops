export const k8s_nginx_reverse_proxy = {
  "id": "k8s-nginx-reverse-proxy",
  "title": "Reverse Proxy",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-nginx-reverse-proxy.json",
  "interviewAnswer": "NGINX reverse proxy forwards client requests to backend servers, providing load balancing, caching, SSL termination, and header manipulation. In Kubernetes, the Ingress Controller acts as a reverse proxy for cluster services.",
  "tldr": [
    "Forwards client requests to backend servers",
    "Load balancing between backends (round robin, least_conn, ip_hash)",
    "SSL termination, header manipulation, caching",
    "Kubernetes Ingress Controller = reverse proxy with dynamic config"
  ],
  "deepDive": [
    {
      "heading": "Reverse Proxy Directives",
      "text": "proxy_pass http://backend; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto $scheme; proxy_redirect off; proxy_buffering on; proxy_cache my_cache;"
    },
    {
      "heading": "Kubernetes Integration",
      "text": "NGINX Ingress Controller generates reverse proxy configuration from Ingress resources. Upstream backends are ClusterIP Services. Dynamic reload without dropping connections. Health checks via nginx.ingress.kubernetes.io/server-snippet."
    },
    {
      "heading": "Common Use Cases",
      "text": "Reverse Proxy applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Reverse proxy function?",
      "answer": "Forwards client requests to backend servers with load balancing and SSL."
    },
    {
      "question": "Common proxy headers?",
      "answer": "X-Real-IP, X-Forwarded-For, X-Forwarded-Proto, Host."
    },
    {
      "question": "NGINX Ingress as reverse proxy?",
      "answer": "Yes — generates proxy config from Ingress resources."
    },
    {
      "question": "proxy_pass directive?",
      "answer": "Specifies backend server URL to forward requests to."
    },
    {
      "question": "Reverse Proxy — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Reverse Proxy — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Reverse Proxy — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Reverse Proxy — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Reverse Proxy — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Reverse Proxy — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Reverse proxy does?",
      "options": [
        "Serve files",
        "Forward to backends",
        "DNS resolution"
      ],
      "answer": 1
    },
    {
      "question": "X-Forwarded-For preserves?",
      "answer": "Client original IP through proxies."
    },
    {
      "question": "NGINX Ingress backends?",
      "options": [
        "Pod IPs direct",
        "ClusterIP Services",
        "External DNS"
      ],
      "answer": 1
    },
    {
      "question": "proxy_bufferring?",
      "options": [
        "On by default",
        "Off by default",
        "Requires setting"
      ],
      "answer": 0
    },
    {
      "question": "Reverse Proxy — How to ensure reliability?",
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
      "question": "Reverse Proxy — What helps team collaboration?",
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
      "question": "Reverse Proxy — What reduces errors most?",
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
      "question": "Reverse Proxy — What improves speed?",
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
      "question": "Reverse Proxy — What is key for monitoring?",
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
      "question": "Reverse Proxy — What ensures quality?",
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
  "laymanDefinition": "NGINX reverse proxy forwards client requests to backend servers, providing load balancing, caching, SSL termination, and header manipulation. In Kubernetes, the Ingress Controller acts as a reverse proxy for cluster services.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Reverse Proxy</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Reverse Proxy</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Forwards client requests to backend servers</text></svg>"
};
