export const k8s_nginx_url_rewrite = {
  "id": "k8s-nginx-url-rewrite",
  "title": "URL Rewrite",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-nginx-url-rewrite.json",
  "interviewAnswer": "NGINX URL rewriting modifies request URIs before proxying. Supports regex capture groups, flags (last, break, redirect, permanent), and conditional rewrites. In Kubernetes Ingress, use rewrite-target annotation for path stripping.",
  "tldr": [
    "rewrite directive: regex replacement with flags",
    "Flags: last (exit, re-evaluate), break (exit), redirect (302), permanent (301)",
    "Capture groups: $1, $2, etc.",
    "Ingress: rewrite-target annotation for path stripping"
  ],
  "deepDive": [
    {
      "heading": "Rewrite Syntax",
      "text": "rewrite ^/api/(.*) /$1 break; — strips /api prefix. rewrite ^/old-path/(.*) /new-path/$1 permanent; — permanent redirect. rewrite ^ https://$server_name$request_uri? permanent; — HTTPS redirect. Flags: last (try next location), break (stop), redirect (302 temp), permanent (301)."
    },
    {
      "heading": "Ingress Path Rewriting",
      "text": "NGINX Ingress: nginx.ingress.kubernetes.io/rewrite-target: /$2. Ingress path: /api(/|$)(.*). This captures /api/users to /users, stripping /api prefix. Use capture groups ($1, $2) in both path and rewrite-target."
    },
    {
      "heading": "Common Use Cases",
      "text": "URL Rewrite applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "NGINX rewrite?",
      "answer": "Modifies request URI using regex replacement."
    },
    {
      "question": "Rewrite flags?",
      "answer": "last (exit + re-evaluate), break (exit), redirect (302), permanent (301)."
    },
    {
      "question": "Capture group syntax?",
      "answer": "(regex) -> $1, $2, $3 in replacement."
    },
    {
      "question": "Ingress path rewrite?",
      "answer": "rewrite-target annotation strips path prefixes."
    },
    {
      "question": "URL Rewrite — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "URL Rewrite — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "URL Rewrite — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "URL Rewrite — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "URL Rewrite — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "URL Rewrite — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Rewrite flag not valid?",
      "options": [
        "last",
        "break",
        "redirect",
        "continue"
      ],
      "answer": 3
    },
    {
      "question": "Permanent redirect status?",
      "options": [
        "302",
        "301",
        "307"
      ],
      "answer": 1
    },
    {
      "question": "Rewrite stops processing?",
      "options": [
        "last (re-evaluates)",
        "break (stops)",
        "Both"
      ],
      "answer": 2
    },
    {
      "question": "Ingress rewrite annotation?",
      "options": [
        "rewrite-target",
        "uri-rewrite",
        "path-rewrite"
      ],
      "answer": 0
    },
    {
      "question": "URL Rewrite — How to ensure reliability?",
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
      "question": "URL Rewrite — What helps team collaboration?",
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
      "question": "URL Rewrite — What reduces errors most?",
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
      "question": "URL Rewrite — What improves speed?",
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
      "question": "URL Rewrite — What is key for monitoring?",
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
      "question": "URL Rewrite — What ensures quality?",
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
      "title": "Add Rewrite Rule",
      "useCase": "Strip /api prefix",
      "code": "kubectl annotate ingress my-ingress nginx.ingress.kubernetes.io/rewrite-target=\"/$2\"",
      "description": "Rewrites /api/users to /users."
    },
    {
      "title": "Use Capture Groups",
      "useCase": "Complex rewrites",
      "code": "kubectl annotate ingress my-ingress nginx.ingress.kubernetes.io/server-snippet=\"rewrite ^/app/(.*) /$1 break;\"",
      "description": "Custom rewrite in server context."
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
  "laymanDefinition": "NGINX URL rewriting modifies request URIs before proxying. Supports regex capture groups, flags (last, break, redirect, permanent), and conditional rewrites. In Kubernetes Ingress, use rewrite-target annotation for path stripping.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">URL Rewrite</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">URL Rewrite</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">rewrite directive: regex replacement with flags</text></svg>"
};
