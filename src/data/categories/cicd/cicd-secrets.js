export const cicd_secrets = {
  "id": "cicd-secrets",
  "title": "Secrets Management in CI/CD",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Secrets management involves securely storing and using sensitive data (API keys, passwords, tokens) in CI/CD pipelines.",
    "Secrets should never be hardcoded in code, committed to repos, or exposed in pipeline logs.",
    "Solutions: built-in CI/CD secrets, HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Doppler.",
    "Secrets management in CI/CD ensures sensitive credentials are never exposed in code, configs, or logs."
  ],
  "laymanDefinition": "Secrets management is like a secure vault for your passwords. Instead of writing the vault combination on a sticky note (hardcoding in code), you store it in a secure vault and only authorized processes can retrieve it at runtime. The pipeline can use it without knowing what it is.",
  "deepDive": [
    {
      "heading": "Built-in Secrets",
      "text": "GitHub Actions: Settings → Secrets → Actions. Referenced as ${{ secrets.MY_SECRET }}. Encrypted at rest, masked in logs. Organization secrets for shared use. Environment secrets for environment-specific."
    },
    {
      "heading": "External Secret Managers",
      "text": "HashiCorp Vault: dynamic secrets, leasing, revocation. AWS Secrets Manager: automatic rotation, IAM integration. Azure Key Vault: Azure AD authentication. Doppler: multi-cloud secret management. External secrets operator for Kubernetes."
    },
    {
      "heading": "Best Practices",
      "text": "Never commit secrets to Git. Use .env in .gitignore for local dev. In CI: use built-in secrets or integrate Vault. Rotate secrets regularly. Least privilege: grant minimum access. Audit secret access. Mask secrets in logs. Scan for committed secrets (git secrets, truffleHog)."
    },
    {
      "heading": "Secret Scanning",
      "text": "Pre-commit hooks: detect secrets before commit (git-secrets, detect-secrets). CI scanning: truffleHog, Gitleaks in pipeline. GitHub secret scanning: automatic detection. Remediation: rotate leaked secrets immediately."
    }
  ],
  "interviewAnswer": "Secrets management involves securely storing and using sensitive data (API keys, passwords, tokens) in CI/CD pipelines.",
  "interviewQuestions": [
    {
      "question": "How are secrets stored in GitHub Actions?",
      "answer": "In Settings → Secrets → Actions. Referenced as ${{ secrets.NAME }}."
    },
    {
      "question": "What is HashiCorp Vault?",
      "answer": "A secret management tool for storing, accessing, and rotating secrets with dynamic secrets and leasing."
    },
    {
      "question": "What should you do if a secret is leaked?",
      "answer": "Immediately rotate/revoke the secret and scan for unauthorized access."
    },
    {
      "question": "Secrets Management in CI/CD — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Secrets Management in CI/CD — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Secrets Management in CI/CD — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Secrets Management in CI/CD — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Secrets Management in CI/CD — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Secrets Management in CI/CD — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Secrets Management in CI/CD — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Secrets Management in CI/CD</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Code</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">NO hardcoded secrets</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Secret Manager</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Encrypted storage</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pipeline</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">${{ secrets.KEY }}</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Secrets: Never in code. Use CI/CD built-in secrets</text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> or external managers (Vault, AWS Secrets Manager)</text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "GitHub Actions Secrets",
      "useCase": "Use secrets in workflows.",
      "code": "steps:\n  - run: echo ${{ secrets.DEPLOY_KEY }} | docker login --username --password-stdin",
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
      "question": "How are GitHub Actions secrets masked?",
      "options": [
        "They are visible in logs",
        "They are automatically masked in log output",
        "They cannot be used",
        "They expire after 1 hour"
      ],
      "answer": 1,
      "explanation": "GitHub Actions automatically masks secrets in log output, replacing them with ***."
    },
    {
      "question": "Secrets Management in CI/CD — What is the recommended approach?",
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
      "question": "Secrets Management in CI/CD — What should be prioritized?",
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
      "question": "Secrets Management in CI/CD — What is important for security?",
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
      "question": "Secrets Management in CI/CD — How to ensure reliability?",
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
      "question": "Secrets Management in CI/CD — What helps team collaboration?",
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
      "question": "Secrets Management in CI/CD — What reduces errors most?",
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
      "question": "Secrets Management in CI/CD — What improves speed?",
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
      "question": "Secrets Management in CI/CD — What is key for monitoring?",
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
      "question": "Secrets Management in CI/CD — What ensures quality?",
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
