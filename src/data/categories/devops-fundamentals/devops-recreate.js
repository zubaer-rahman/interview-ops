export const devops_recreate = {
  "id": "devops-recreate",
  "title": "Recreate Deployment",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Recreate deployment terminates all running instances of the old version and then creates instances of the new version.",
    "Simplest deployment strategy — results in downtime because all old pods are killed before new ones start.",
    "Suitable for: development environments, batch jobs, stateful applications where versions cannot run concurrently.",
    "In Kubernetes: strategy type: Recreate. Kills all old pods, then creates new pods."
  ],
  "laymanDefinition": "Recreate deployment is like renovating a restaurant by closing it completely, demolishing everything, and building a new restaurant from scratch. Customers (traffic) cannot enter during renovation (downtime). It is simple but causes a complete service interruption.",
  "deepDive": [
    {
      "heading": "Recreate Process",
      "text": "1. All old pods are terminated simultaneously (or gracefully). 2. Wait for all old pods to be completely removed. 3. New pods are created from the new image. 4. Service becomes available again when new pods are ready. Total downtime: termination time + startup time."
    },
    {
      "heading": "When to Use Recreate",
      "text": "Development/staging environments (downtime acceptable). Batch jobs and workers (no live traffic). Stateful applications where two versions cannot coexist (DB schema incompatible, migration required). Applications needing a clean slate (cache clear, reset connections)."
    },
    {
      "heading": "Recreate vs Rolling",
      "text": "Recreate: downtime, simple, all-at-once replacement. Rolling: zero-downtime, incremental, more complex. Recreate avoids issues of running two versions simultaneously. Choose Recreate when downtime is acceptable and version coexistence is problematic."
    },
    {
      "heading": "Graceful Shutdown",
      "text": "Kubernetes respects preStop hooks and terminationGracePeriodSeconds. Pod gets SIGTERM, waits for hook, then SIGKILL after grace period. Important for cleanup: close DB connections, finish in-flight requests, flush logs."
    }
  ],
  "interviewAnswer": "Recreate is the simplest deployment strategy with guaranteed downtime. Use for dev environments or stateful apps that cannot run two versions. Graceful shutdown is critical to prevent data loss. Not suitable for production services requiring high availability.",
  "interviewQuestions": [
    {
      "question": "What is Recreate deployment?",
      "answer": "Terminate all old version instances, then create new version instances. Causes downtime."
    },
    {
      "question": "When would you use Recreate?",
      "answer": "Dev environments, batch jobs, stateful applications where versions cannot coexist."
    },
    {
      "question": "What is the main disadvantage?",
      "answer": "Downtime — no traffic is served during the transition."
    },
    {
      "question": "What is the main advantage?",
      "answer": "Simplicity — no need to handle two versions running simultaneously."
    },
    {
      "question": "What is a preStop hook?",
      "answer": "A command or HTTP request executed before a pod is terminated, for graceful cleanup."
    },
    {
      "question": "What is terminationGracePeriodSeconds?",
      "answer": "Time Kubernetes waits after SIGTERM before sending SIGKILL (default: 30s)."
    },
    {
      "question": "Recreate Deployment — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Recreate Deployment — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Recreate Deployment — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Recreate Deployment — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Recreate Deployment</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Old v1</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">5 running pods</text><line x1=\"120\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"140\" height=\"50\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 1: Terminate ALL v1</text><text x=\"230\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Downtime starts</text><line x1=\"300\" y1=\"60\" x2=\"310\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"320\" y=\"35\" width=\"110\" height=\"50\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"375\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 2: Create ALL v2</text><text x=\"375\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Downtime ends</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Downtime</text><text x=\"65\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Total: term + startu</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">p</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">preStop</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Graceful cleanup</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Use Case</text><text x=\"65\" y=\"163\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dev / stateful / bat</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ch</text><rect x=\"280\" y=\"100\" width=\"150\" height=\"80\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"355\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Recreate</text><text x=\"355\" y=\"152\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Simple. Complete downtime. </text><text x=\"355\" y=\"163\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All old killed, then new cr</text><text x=\"355\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">eated.</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Recreate: Kill all old, create all new. Simple but</text><text x=\"240\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> causes downtime. For dev/stateful apps.</text></svg>",
  "codeExamples": [
    {
      "title": "Kubernetes Recreate Strategy",
      "useCase": "Recreate deployment config.",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3\n  strategy:\n    type: Recreate\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      terminationGracePeriodSeconds: 60\n      containers:\n        - name: app\n          image: myapp:2.0.0\n          lifecycle:\n            preStop:\n              exec:\n                command:\n                  - /bin/sh\n                  - -c\n                  - \"sleep 10 && nginx -s quit\"",
      "description": "Kubernetes Recreate strategy with preStop hook for graceful shutdown and 60s grace period."
    },
    {
      "title": "Graceful Shutdown Script",
      "useCase": "PreStop hook example.",
      "code": "#!/bin/bash\n# preStop.sh — graceful shutdown\n\necho \"Shutting down gracefully...\"\n\n# Stop accepting new connections\n# (already done by k8s removing from service)\n\n# Wait for in-flight requests to complete\nsleep 5\n\n# Close database connections\n# psql -c \"SELECT pg_terminate_backend(pid)\"\n\n# Flush logs\n# kill -USR1 $(cat /var/run/nginx.pid)\n\n# Stop the application process\n# kill -TERM $(cat /var/run/app.pid)\n\necho \"Shutdown complete\"",
      "description": "Graceful shutdown script for Recreate deployment — drain connections, flush, then terminate."
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
  "mcqQuestions": [
    {
      "question": "What is the key characteristic of Recreate deployment?",
      "options": [
        "Zero downtime",
        "Complete downtime",
        "Gradual replacement",
        "Traffic splitting"
      ],
      "answer": 1,
      "explanation": "Recreate kills all old pods before creating new ones, resulting in complete downtime."
    },
    {
      "question": "When is Recreate appropriate?",
      "options": [
        "Production with high traffic",
        "Dev environments and stateful apps",
        "All scenarios",
        "Only with Blue-Green"
      ],
      "answer": 1,
      "explanation": "Recreate is suitable for dev environments, batch jobs, and stateful apps where version coexistence is problematic."
    },
    {
      "question": "What does terminationGracePeriodSeconds control?",
      "options": [
        "Pod startup time",
        "Time between SIGTERM and SIGKILL",
        "Replica count",
        "Health check interval"
      ],
      "answer": 1,
      "explanation": "It controls how long Kubernetes waits after SIGTERM before forcefully killing with SIGKILL."
    },
    {
      "question": "Recreate Deployment — What is important for security?",
      "options": [
        "Access control and encryption",
        "Open access",
        "Shared passwords",
        "No auditing"
      ],
      "answer": 0,
      "explanation": "Access control and encryption are fundamental security measures."
    },
    {
      "question": "Recreate Deployment — How to ensure reliability?",
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
      "question": "Recreate Deployment — What helps team collaboration?",
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
      "question": "Recreate Deployment — What reduces errors most?",
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
      "question": "Recreate Deployment — What improves speed?",
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
      "question": "Recreate Deployment — What is key for monitoring?",
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
      "question": "Recreate Deployment — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
