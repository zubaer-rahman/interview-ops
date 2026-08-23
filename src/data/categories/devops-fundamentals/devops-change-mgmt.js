export const devops_change_mgmt = {
  "id": "devops-change-mgmt",
  "title": "Change Management",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Change management in DevOps is the process of controlling and managing changes to IT systems, applications, and infrastructure.",
    "Traditional ITIL change management is slow and bureaucratic (Change Advisory Board meetings). DevOps change management emphasizes automation, peer review, and continuous verification.",
    "Key changes in DevOps: pre-approved standard changes (CI/CD), automated policy enforcement, smaller/frequent changes, peer review via PRs, monitoring-based verification.",
    "DevOps change management reduces risk through frequency — small, frequent changes are easier to review, test, and rollback than large, infrequent ones."
  ],
  "laymanDefinition": "Traditional change management is like getting a committee to approve any change to your house — paint color, new furniture, even changing a lightbulb needs sign-off. DevOps change management is like having building codes (automated policies) — you can repaint your room any time, as long as you follow the rules, and the inspector (CI) checks after you're done.",
  "deepDive": [
    {
      "heading": "Traditional vs DevOps Change Management",
      "text": "Traditional: CAB (Change Advisory Board) approvals, change windows (weekend nights), large releases, manual procedures, paper trails. DevOps: automated approvals from CI/CD, no change windows (continuous), small frequent releases, PR-based review, infrastructure as code, automated compliance checks."
    },
    {
      "heading": "Standard vs Normal Changes",
      "text": "Standard: low-risk, pre-approved (config changes, dependency updates, routine deployments). Go through CI/CD automatically. Normal: higher risk, may need manual approval (architecture changes, database schema changes, security policy changes). DevOps philosophy: make as many changes \"standard\" as possible."
    },
    {
      "heading": "Automated Change Management",
      "text": "CI/CD pipeline: any change passing pipeline = approved for deployment. Policy as Code: OPA/Kyverno enforce policies automatically. Git: every change is tracked, auditable, and reversible. Peer review: PRs ensure at least one person reviews each change. Monitoring: detects change-related issues automatically."
    },
    {
      "heading": "Change Management Best Practices",
      "text": "Make changes small and frequent. Automate everything possible. Use peer review for every change. Monitor changes for impact. Document changes in Git (commit messages). Have automated rollback. Track change metrics: deployment frequency, change failure rate, MTTR. Use feature flags for risky changes."
    },
    {
      "heading": "Change Failure Rate (DORA Metric)",
      "text": "Percentage of changes that result in degraded service or require remediation. Elite performers: 0-5%. Low performers: 16-30%. DevOps change management aims to reduce this through automation, testing, and small changes. Not all changes should be equal — high-risk changes get more scrutiny."
    }
  ],
  "interviewAnswer": "DevOps change management is about automation, not bureaucracy. Make changes small and frequent. Use PRs for peer review. Let CI/CD be the approval process. Use policy as code for guardrails. Monitor every change. The goal is to enable velocity while maintaining safety through automation.",
  "interviewQuestions": [
    {
      "question": "What is change management in DevOps?",
      "answer": "Controlling and managing changes to IT systems with automation, peer review, and continuous verification."
    },
    {
      "question": "How is DevOps change management different from traditional?",
      "answer": "DevOps: automated, continuous, small changes, PR-based. Traditional: CAB approvals, change windows, large releases."
    },
    {
      "question": "What is a standard change?",
      "answer": "A low-risk, pre-approved change that can go through CI/CD automatically without manual approval."
    },
    {
      "question": "What is change failure rate?",
      "answer": "A DORA metric measuring the percentage of changes that cause degraded service or require remediation."
    },
    {
      "question": "How does Git help change management?",
      "answer": "Every change is tracked, auditable, reversible. Commits document who changed what and why."
    },
    {
      "question": "What is the goal of DevOps change management?",
      "answer": "Enable velocity while maintaining safety through automation, not slow down changes with bureaucracy."
    },
    {
      "question": "Change Management — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Change Management — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Change Management — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Change Management — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Change Management</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Standard Changes</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pre-approved, CI/CD</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Normal Changes</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">May need approval</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Peer Review</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">PRs for every change</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Policy as Code</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated guardrails</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monitoring</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Detect change impact</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Change Management</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">DevOps: small, frequent, automated</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, reviewed. Traditional: slow, bur</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">eaucratic, large releases.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Change Management: Controlled, automated changes. </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Small + frequent = safe. PRs + CI/CD + monitoring.</text></svg>",
  "codeExamples": [
    {
      "title": "PR-Based Change Approval",
      "useCase": "GitHub branch protection.",
      "code": "# .github/CODEOWNERS — required reviewers\n* @team-leads\nsrc/db/* @db-admins\ninfra/* @platform-team\nsecurity/* @security-team\n\n# GitHub branch protection rules (UI)\n# - Require PR for main branch\n# - Require at least 1 review\n# - Require status checks (CI passes)\n# - Require up-to-date branches\n# - Require linear history\n# - Include administrators\n\n# These rules ensure every change is:\n# 1. Reviewed by peers\n# 2. Validated by CI\n# 3. Approved by code owners for sensitive files\n# 4. Traceable in Git history",
      "description": "Branch protection rules enforce peer review and CI validation for every code change."
    },
    {
      "title": "Automated Change Logging",
      "useCase": "Track all changes automatically.",
      "code": "# Track changes via Git commits\n# Every commit = a recorded change\n\n# Generate change summary for compliance\ngit log --oneline --since=\"2024-01-01\"\n\n# Show all changes to a specific file\ngit log --oneline -- src/config/database.ts\n\n# Show who approved each PR\ngh pr list --state merged --search \"merged:>2024-01-01\"\n  --json number,title,author,mergedAt,reviews\n\n# Audit trail for compliance:\n# - Who made the change (committer)\n# - Who reviewed (PR reviewers)\n# - What changed (diff)\n# - When (timestamp)\n# - Why (commit message)\n# - Pipeline status (CI passing)",
      "description": "Git and GitHub provide complete audit trail for change management compliance."
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
      "question": "What is a key difference between DevOps and traditional change management?",
      "options": [
        "DevOps is slower",
        "DevOps uses automation and small frequent changes",
        "Traditional is faster",
        "No difference"
      ],
      "answer": 1,
      "explanation": "DevOps change management uses automation, small frequent changes, and peer review instead of bureaucratic approvals."
    },
    {
      "question": "What is a standard change?",
      "options": [
        "Any change to production",
        "Low-risk, pre-approved change",
        "Emergency hotfix",
        "Database migration"
      ],
      "answer": 1,
      "explanation": "A standard change is low-risk and pre-approved to go through CI/CD without manual approval."
    },
    {
      "question": "What DORA metric is related to change management?",
      "options": [
        "Deployment frequency",
        "Change failure rate",
        "Lead time",
        "MTTR"
      ],
      "answer": 1,
      "explanation": "Change failure rate measures the percentage of changes causing degraded service or requiring remediation."
    },
    {
      "question": "Change Management — What is important for security?",
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
      "question": "Change Management — How to ensure reliability?",
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
      "question": "Change Management — What helps team collaboration?",
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
      "question": "Change Management — What reduces errors most?",
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
      "question": "Change Management — What improves speed?",
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
      "question": "Change Management — What is key for monitoring?",
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
      "question": "Change Management — What ensures quality?",
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
