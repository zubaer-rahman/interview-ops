export const k8s_init_containers = {
  "id": "k8s-init-containers",
  "title": "Init Containers",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-init-containers.json",
  "interviewAnswer": "Init containers run to completion before app containers start. They run sequentially, each must succeed before the next starts. Used for setup: database migrations, waiting for dependencies, file permission setup, configuration generation.",
  "tldr": [
    "Run to completion before app containers, sequentially",
    "Can use different images and tools than app containers",
    "Share volumes with app containers for data passing",
    "Failed init container causes Pod to restart it"
  ],
  "deepDive": [
    {
      "heading": "Configuration",
      "text": "Defined in spec.initContainers with same schema as containers. Each must complete with exit 0. Init containers can use busybox or alpine while app runs Java — reducing app image size."
    },
    {
      "heading": "Use Cases",
      "text": "Database migration (alembic/prisma migrate before app starts). Wait-for: loop until dependency service is reachable. Permission setup: chown/chmod on shared volumes. Config generation: create config files from templates."
    },
    {
      "heading": "Common Use Cases",
      "text": "Init Containers applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What are init containers?",
      "answer": "Run to completion before app containers, sequentially, for setup tasks."
    },
    {
      "question": "What happens if init container fails?",
      "answer": "Pod restarts the init container based on restartPolicy."
    },
    {
      "question": "Why use init containers vs postStart?",
      "answer": "Init containers run sequentially, complete before app starts. postStart has no completion guarantee."
    },
    {
      "question": "Can init containers have different resources?",
      "answer": "Yes. They have their own resource requests/limits and image."
    },
    {
      "question": "Init Containers — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Init Containers — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Init Containers — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Init Containers — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Init Containers — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Init Containers — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Init containers run?",
      "options": [
        "In parallel",
        "Sequentially",
        "After app containers"
      ],
      "answer": 1
    },
    {
      "question": "Init container use case?",
      "options": [
        "Serving requests",
        "Database migration",
        "Load balancing"
      ],
      "answer": 1
    },
    {
      "question": "Pod phase during init?",
      "options": [
        "Running",
        "Pending (\"Init:N\")",
        "Succeeded"
      ],
      "answer": 1
    },
    {
      "question": "Init container spec field?",
      "options": [
        "containers",
        "initContainers",
        "setupContainers"
      ],
      "answer": 1
    },
    {
      "question": "Init Containers — How to ensure reliability?",
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
      "question": "Init Containers — What helps team collaboration?",
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
      "question": "Init Containers — What reduces errors most?",
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
      "question": "Init Containers — What improves speed?",
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
      "question": "Init Containers — What is key for monitoring?",
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
      "question": "Init Containers — What ensures quality?",
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
      "title": "Check Init Status",
      "useCase": "Monitor init progress",
      "code": "kubectl get pod my-pod",
      "description": "Shows init container phase."
    },
    {
      "title": "View Init Container Logs",
      "useCase": "Debug init failures",
      "code": "kubectl logs my-pod -c init-mydb --previous",
      "description": "Shows logs from previous init attempt."
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
  "laymanDefinition": "Init containers run to completion before app containers start. They run sequentially, each must succeed before the next starts. Used for setup: database migrations, waiting for dependencies, file permission setup, configuration generation.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Init Containers</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Init Containers</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Run to completion before app containers, sequentia</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">lly</text></svg>"
};
