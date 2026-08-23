export const k8s_nginx_https = {
  "id": "k8s-nginx-https",
  "title": "HTTPS",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-nginx-https.json",
  "interviewAnswer": "HTTPS configuration in NGINX involves enabling SSL, redirecting HTTP to HTTPS, and configuring secure defaults. HTTP-to-HTTPS redirect uses return 301 or rewrite. HSTS ensures browsers always use HTTPS.",
  "tldr": [
    "Listen on port 443 with SSL, redirect port 80 to 443",
    "HTTP-to-HTTPS: return 301 https://$host$request_uri",
    "HSTS: Strict-Transport-Security header",
    "In Kubernetes: Ingress TLS section + cert-manager"
  ],
  "deepDive": [
    {
      "heading": "HTTP to HTTPS Redirect",
      "text": "server { listen 80; server_name example.com; return 301 https://$server_name$request_uri; }. Or use: if ($scheme != \"https\") { return 301 https://$host$request_uri; }. In NGINX Ingress: nginx.ingress.kubernetes.io/force-ssl-redirect: \"true\"."
    },
    {
      "heading": "In-Kubernetes HTTPS",
      "text": "Ingress TLS: spec.tls with secretName. cert-manager: Certificate CRD with ClusterIssuer. NGINX Ingress auto-configures HTTPS from TLS Secrets. HTTP-to-HTTPS redirect via annotation. HSTS via nginx.ingress.kubernetes.io/hsts."
    },
    {
      "heading": "Common Use Cases",
      "text": "HTTPS applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "HTTP to HTTPS redirect?",
      "answer": "return 301 https://$host$request_uri on port 80."
    },
    {
      "question": "Kubernetes HTTPS?",
      "answer": "Ingress TLS section referencing a TLS Secret."
    },
    {
      "question": "NGINX Ingress HTTPS redirect?",
      "answer": "force-ssl-redirect: \"true\" annotation."
    },
    {
      "question": "HSTS in NGINX Ingress?",
      "answer": "hsts annotation (enabled by default)."
    },
    {
      "question": "HTTPS — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "HTTPS — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "HTTPS — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "HTTPS — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "HTTPS — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "HTTPS — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "HTTPS port?",
      "options": [
        "80",
        "443",
        "8443"
      ],
      "answer": 1
    },
    {
      "question": "Redirect code?",
      "options": [
        "200",
        "301",
        "302",
        "307"
      ],
      "answer": 1
    },
    {
      "question": "HTTPS in K8s requires?",
      "options": [
        "TLS Secret + Ingress TLS",
        "Only Ingress",
        "Only Secret"
      ],
      "answer": 0
    },
    {
      "question": "HSTS max-age unit?",
      "options": [
        "Minutes",
        "Days",
        "Seconds"
      ],
      "answer": 2
    },
    {
      "question": "HTTPS — How to ensure reliability?",
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
      "question": "HTTPS — What helps team collaboration?",
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
      "question": "HTTPS — What reduces errors most?",
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
      "question": "HTTPS — What improves speed?",
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
      "question": "HTTPS — What is key for monitoring?",
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
      "question": "HTTPS — What ensures quality?",
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
      "title": "Force HTTPS in Ingress",
      "useCase": "HTTP->HTTPS redirect",
      "code": "kubectl annotate ingress my-ingress nginx.ingress.kubernetes.io/force-ssl-redirect=\"true\"",
      "description": "Redirects HTTP to HTTPS."
    },
    {
      "title": "Enable HSTS",
      "useCase": "Security header",
      "code": "kubectl annotate ingress my-ingress nginx.ingress.kubernetes.io/hsts=\"true\"",
      "description": "Enables HSTS."
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
  "laymanDefinition": "HTTPS configuration in NGINX involves enabling SSL, redirecting HTTP to HTTPS, and configuring secure defaults. HTTP-to-HTTPS redirect uses return 301 or rewrite. HSTS ensures browsers always use HTTPS.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">HTTPS</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTTPS</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Listen on port 443 with SSL, redirect port 80 to 4</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">43</text></svg>"
};
