export const github_actions_secrets = {
  "id": "github-actions-secrets",
  "title": "Secrets",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Secrets are encrypted environment variables that store sensitive information (API keys, tokens, passwords) for use in workflows.",
    "Secrets are stored at repository, environment, or organization level. They are masked in workflow logs.",
    "Reference: ${{ secrets.SECRET_NAME }}. Never hardcode secrets in workflow files.",
    "Secrets works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Secrets are like locked safes for your passwords. You put the password in the safe (GitHub Secrets), and your workflow can open it and use it without ever showing the password. If someone reads the logs, the secret appears as ***.",
  "deepDive": [
    {
      "heading": "Secret Levels",
      "text": "Repository: Settings > Secrets and variables > Actions. Available to all workflows in repo. Environment: Settings > Environments > Environment > Secrets. Only available in jobs targeting that environment. Organization: Settings > Secrets. Available to selected repos."
    },
    {
      "heading": "Using Secrets",
      "text": "Access: ${{ secrets.MY_SECRET }}. In actions: with: password: ${{ secrets.PASSWORD }}. In scripts: run: echo ${{ secrets.TOKEN }} | docker login. Masking: automatically hidden in logs (***). Can be used in: environment variables, action inputs, shell commands."
    },
    {
      "heading": "Best Practices",
      "text": "Never use default values for secrets in workflows. Use environment-level secrets for environment-specific values. Rotate secrets regularly. Remove unused secrets. Use OpenID Connect (OIDC) instead of static secrets for cloud providers. Audit secret usage."
    },
    {
      "heading": "Limitations",
      "text": "Max 100 secrets per repo. Secret size limit: 48KB. Secrets are not available in forked PRs (security). Use pull_request_target for forked PRs needing secrets. Not available in reusable workflows unless explicitly declared."
    }
  ],
  "interviewAnswer": "Secrets are encrypted environment variables that store sensitive information (API keys, tokens, passwords) for use in workflows.",
  "interviewQuestions": [
    {
      "question": "What are GitHub Actions secrets?",
      "answer": "Encrypted environment variables for sensitive data (API keys, tokens) used in workflows."
    },
    {
      "question": "How are secrets protected in logs?",
      "answer": "They are automatically masked — appearing as *** in log output."
    },
    {
      "question": "Are secrets available in workflows triggered from forks?",
      "answer": "No — for security reasons, secrets are not passed to workflows triggered by forked repositories."
    },
    {
      "question": "Secrets — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Secrets — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Secrets — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Secrets — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Secrets — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Secrets — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Secrets — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Secrets</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Repository</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Repo-level secrets</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Environment</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Per-environment</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Organization</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Org-wide secrets</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Workflow</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">${{ secrets.X }}</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Secrets: Encrypted sensitive values. Repository, e</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nvironment, or organization level. Auto-masked in </text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">logs. Max 48KB.</text></svg>",
  "codeExamples": [
    {
      "title": "Using Secrets",
      "useCase": "Access secrets in workflows.",
      "code": "steps:\n  - name: Login to Docker\n    run: echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin",
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
      "question": "What environment provides secrets to workflows from forks?",
      "options": [
        "Secrets are NOT available from forks",
        "push",
        "pull_request_target",
        "workflow_dispatch"
      ],
      "answer": 2,
      "explanation": "pull_request_target runs in the context of the base repo (has access to secrets) but is safer than pull_request for forked PRs."
    },
    {
      "question": "Secrets — What is the recommended approach?",
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
      "question": "Secrets — What should be prioritized?",
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
      "question": "Secrets — What is important for security?",
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
      "question": "Secrets — How to ensure reliability?",
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
      "question": "Secrets — What helps team collaboration?",
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
      "question": "Secrets — What reduces errors most?",
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
      "question": "Secrets — What improves speed?",
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
      "question": "Secrets — What is key for monitoring?",
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
      "question": "Secrets — What ensures quality?",
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
