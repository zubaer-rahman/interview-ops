export const cicd_circleci = {
  "id": "cicd-circleci",
  "title": "CircleCI",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "CircleCI is a cloud-native CI/CD platform emphasizing speed, parallelism, and Docker-native execution.",
    "Configuration via .circleci/config.yml. Jobs run in containers (Docker) or VMs.",
    "Key features: orbs (reusable configs), parallelism, caching, workflows, SSH debug.",
    "CircleCI cloud-native architecture and automatic parallelism make it one of the fastest CI/CD services."
  ],
  "laymanDefinition": "CircleCI is like a modern, cloud-first CI/CD service optimized for speed. It spins up fresh Docker containers for every build (no \"works on my machine\"), runs tests in parallel automatically, and uses orbs for reusable configuration. It's known for fast setup and execution.",
  "deepDive": [
    {
      "heading": "Configuration",
      "text": ".circleci/config.yml: pipeline definition. Jobs: units of work. Steps: run commands. Workflows: orchestrate job order. Docker: specify image for job environment. Resource class: CPU/memory size (small, medium, large). Parallelism: auto-split tests across containers."
    },
    {
      "heading": "Orbs",
      "text": "Reusable configuration packages (circleci.com/orbs). Official orbs: node, python, aws-cli, slack, browser-tools. Third-party orbs. Parameters for customization. Package your own orb for team use."
    },
    {
      "heading": "Key Features",
      "text": "SSH debug: SSH into failing job for debugging (rerun with SSH). Cache: dependency caching (save_cache, restore_cache). Workspaces: pass files between jobs in workflow. Pipelines: trigger on push, PR, schedule, API. Contexts: shared environment variables across projects."
    },
    {
      "heading": "CircleCI vs GitHub Actions",
      "text": "CircleCI: dedicated CI company, parallelism-focused, orbs ecosystem, SSD-native executors. GitHub Actions: integrated with GitHub, larger ecosystem (Marketplace), wider trigger events, no separate billing. Choose based on where your code lives and integration needs."
    }
  ],
  "interviewAnswer": "CircleCI is a cloud-native CI/CD platform emphasizing speed, parallelism, and Docker-native execution.",
  "interviewQuestions": [
    {
      "question": "What is CircleCI?",
      "answer": "A cloud-native CI/CD platform with Docker-native execution, parallelism, and orbs."
    },
    {
      "question": "What are CircleCI Orbs?",
      "answer": "Reusable configuration packages that encapsulate jobs, commands, and executors."
    },
    {
      "question": "How does CircleCI handle parallelism?",
      "answer": "Automatically splits test files across multiple containers using the parallelism setting."
    },
    {
      "question": "CircleCI — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "CircleCI — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "CircleCI — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "CircleCI — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "CircleCI — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "CircleCI — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "CircleCI — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CircleCI</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">.circleci/config.yml</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pipeline config</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Docker Container</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build environment</text><line x1=\"280\" y1=\"48\" x2=\"290\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"300\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"350\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Workflows</text><text x=\"350\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Job orchestration</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CircleCI: Cloud-native CI/CD. Docker execution, pa</text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rallelism, orbs, workflows. Fast and developer-fri</text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">endly.</text></svg>",
  "codeExamples": [
    {
      "title": "CircleCI Config",
      "useCase": "Basic config.yml.",
      "code": "version: 2.1\norbs:\n  node: circleci/node@5\njobs:\n  build:\n    docker:\n      - image: cimg/node:20.3\n    steps:\n      - checkout\n      - node/install-packages\n      - run: npm test",
      "description": ""
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
  "mcqQuestions": [
    {
      "question": "What feature allows debugging CircleCI job failures?",
      "options": [
        "Cache",
        "SSH debug rerun",
        "Orbs",
        "Workspaces"
      ],
      "answer": 1,
      "explanation": "CircleCI allows rerunning failed jobs with SSH access for interactive debugging."
    },
    {
      "question": "CircleCI — What is the recommended approach?",
      "options": [
        "Start simple and iterate",
        "Build everything at once",
        "Skip testing",
        "Avoid planning"
      ],
      "answer": 0,
      "explanation": "Starting simple and iterating is the most effective approach."
    },
    {
      "question": "CircleCI — What should be prioritized?",
      "options": [
        "Reliability and consistency",
        "Speed only",
        "Features over quality",
        "Manual processes"
      ],
      "answer": 0,
      "explanation": "Reliability and consistency are foundational priorities."
    },
    {
      "question": "CircleCI — What is important for security?",
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
      "question": "CircleCI — How to ensure reliability?",
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
      "question": "CircleCI — What helps team collaboration?",
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
      "question": "CircleCI — What reduces errors most?",
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
      "question": "CircleCI — What improves speed?",
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
      "question": "CircleCI — What is key for monitoring?",
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
      "question": "CircleCI — What ensures quality?",
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
