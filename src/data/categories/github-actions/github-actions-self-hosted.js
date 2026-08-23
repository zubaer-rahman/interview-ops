export const github_actions_self_hosted = {
  "id": "github-actions-self-hosted",
  "title": "Self-Hosted Runner",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Self-hosted runners are runners you install and manage on your own infrastructure (on-premise or cloud VMs).",
    "Benefits: more control (OS, hardware, software), access to internal resources, cost-effective for high usage.",
    "Considerations: security (runners execute arbitrary code), maintenance (updates, patching), scaling.",
    "Self-Hosted Runner works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A self-hosted runner is like having your own computer dedicated to running workflows. Instead of waiting for GitHub's machines, you use your own. This gives you full control over what software is installed, how powerful the machine is, and what networks it can access.",
  "deepDive": [
    {
      "heading": "Setup Process",
      "text": "Go to Settings > Actions > Runners > Add runner. Download and run the configure script on your machine. OS: Linux, Windows, macOS. Architecture: x64, ARM64. One runner per machine (but can run multiple runner services). Register with token."
    },
    {
      "heading": "Security Considerations",
      "text": "Pubic repositories: anyone can fork your repo and run workflows on your runner (dangerous!). Use only with private repos or add appropriate restrictions. Runner isolation: each job should run in clean environment (use ephemeral runners). No sensitive data in open source repos with self-hosted runners."
    },
    {
      "heading": "Scaling",
      "text": "Elastic scaling: auto-scale runner count based on job queue. Tools: actions-runner-controller (Kubernetes), terraform-aws-github-runner (AWS). Ephemeral runners: one job per runner, then destroyed. Group runners for access control. Organization/enterprise-level runners shared across repos."
    },
    {
      "heading": "Runner Groups",
      "text": "Organization runner groups: control which repos can use which runners. Enterprise runner groups: shared across organizations. Labels: tag runners with capabilities (gpu, high-mem, windows-gpu). Restrict by repo access."
    }
  ],
  "interviewAnswer": "Self-hosted runners are runners you install and manage on your own infrastructure (on-premise or cloud VMs).",
  "interviewQuestions": [
    {
      "question": "What is a self-hosted runner?",
      "answer": "A runner you install on your own infrastructure instead of using GitHub-hosted runners."
    },
    {
      "question": "What is the security risk of self-hosted runners on public repos?",
      "answer": "Anyone with repo access can execute code on your runner — only use with private repos or with strict controls."
    },
    {
      "question": "What is an ephemeral runner?",
      "answer": "A runner that runs exactly one job and is destroyed afterward — ensuring a clean environment every time."
    },
    {
      "question": "Self-Hosted Runner — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Self-Hosted Runner — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Self-Hosted Runner — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Self-Hosted Runner — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Self-Hosted Runner — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Self-Hosted Runner — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Self-Hosted Runner — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Self-Hosted Runner</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Your Server</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Install runner agent</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitHub</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Register & connect</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Execute Jobs</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Run workflows</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Self-Hosted Runners: Your infrastructure, full con</text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">trol. Security: use with private repos. Ephemeral </text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">for isolation.</text></svg>",
  "codeExamples": [
    {
      "title": "Runner Install",
      "useCase": "Add self-hosted runner.",
      "code": "# Download and configure\n./config.sh --url https://github.com/org/repo --token ABC123\n./run.sh",
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
      "question": "What is the main security concern with self-hosted runners?",
      "options": [
        "Cost",
        "Performance",
        "Anyone with repo access can execute code on your infrastructure",
        "Setup complexity"
      ],
      "answer": 2,
      "explanation": "Self-hosted runners on public repos allow anyone with repo access to run arbitrary code on your machine — significant security risk."
    },
    {
      "question": "Self-Hosted Runner — What is the recommended approach?",
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
      "question": "Self-Hosted Runner — What should be prioritized?",
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
      "question": "Self-Hosted Runner — What is important for security?",
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
      "question": "Self-Hosted Runner — How to ensure reliability?",
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
      "question": "Self-Hosted Runner — What helps team collaboration?",
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
      "question": "Self-Hosted Runner — What reduces errors most?",
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
      "question": "Self-Hosted Runner — What improves speed?",
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
      "question": "Self-Hosted Runner — What is key for monitoring?",
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
      "question": "Self-Hosted Runner — What ensures quality?",
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
