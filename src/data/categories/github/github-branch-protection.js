export const github_branch_protection = {
  "id": "github-branch-protection",
  "title": "Branch Protection Rules",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Branch protection rules enforce workflows on specific branches, preventing direct pushes and requiring PR reviews.",
    "Require pull request reviews before merging. Require status checks to pass. Require up-to-date branches. Restrict who can push.",
    "Best practice: protect main/develop branches. Never allow direct commits to protected branches.",
    "Branch Protection Rules works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Branch protection is like a security guard for your main branch. It enforces rules: \"Nobody can push directly. All changes must go through a PR. At least one person must approve. All tests must pass. The branch must be up to date.\" This prevents accidents and ensures quality.",
  "deepDive": [
    {
      "heading": "Protection Rules",
      "text": "Require PR review: 1+ approvals required. Dismiss stale reviews: outdated approvals removed when new commits pushed. Require approval of most recent reviewable push. Require status checks: CI/tests must pass. Require branches up to date. Require conversation resolution. Include administrators."
    },
    {
      "heading": "Advanced Rules",
      "text": "Require signed commits. Require linear history (no merge commits). Require deployment success (GitHub Deployments). Lock branch: make read-only. Restrict push access: specific users/teams. Allow force pushes: restrict to specific users. Allow deletions."
    },
    {
      "heading": "Status Checks",
      "text": "CI checks: GitHub Actions, Jenkins, Travis. Context labels: \"continuous-integration/jenkins\". Required checks must pass before merge. Checks can be: pending (running), success, failure, error, cancelled. A failed check blocks merging."
    }
  ],
  "interviewAnswer": "Branch protection rules enforce workflows on specific branches, preventing direct pushes and requiring PR reviews.",
  "interviewQuestions": [
    {
      "question": "What does branch protection enforce?",
      "answer": "Rules like required PR reviews, passing status checks, up-to-date branches, and restricted push access."
    },
    {
      "question": "Can admins bypass branch protection?",
      "answer": "By default, Include Administrators applies protection rules to admins too (can be disabled)."
    },
    {
      "question": "What happens if a required status check fails?",
      "answer": "The merge button is disabled until the check passes."
    },
    {
      "question": "Branch Protection Rules — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Branch Protection Rules — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Branch Protection Rules — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Branch Protection Rules — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Branch Protection Rules — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Branch Protection Rules — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Branch Protection Rules — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Branch Protection Rules</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Require PR Review</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">1+ approvals</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Status Checks</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CI must pass</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Up-to-Date</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Branch must be current</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Restrict Push</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Specific users only</text><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Branch Protection: Enforce workflows on branches. </text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Prevent direct pushes. Require reviews and checks.</text></svg>",
  "codeExamples": [
    {
      "title": "Branch Protection (API)",
      "useCase": "Configure via GitHub CLI.",
      "code": "gh api repos/:owner/:repo/branches/main/protection --method PUT --input protection.json",
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
      "question": "What happens when a required status check fails?",
      "options": [
        "PR is automatically closed",
        "Merge button is disabled",
        "Branch is deleted",
        "PR can still be merged"
      ],
      "answer": 1,
      "explanation": "Failed required status checks disable the merge button until they pass."
    },
    {
      "question": "Branch Protection Rules — What is the recommended approach?",
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
      "question": "Branch Protection Rules — What should be prioritized?",
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
      "question": "Branch Protection Rules — What is important for security?",
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
      "question": "Branch Protection Rules — How to ensure reliability?",
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
      "question": "Branch Protection Rules — What helps team collaboration?",
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
      "question": "Branch Protection Rules — What reduces errors most?",
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
      "question": "Branch Protection Rules — What improves speed?",
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
      "question": "Branch Protection Rules — What is key for monitoring?",
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
      "question": "Branch Protection Rules — What ensures quality?",
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
