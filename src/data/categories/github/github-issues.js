export const github_issues = {
  "id": "github-issues",
  "title": "GitHub Issues",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "GitHub Issues track bugs, feature requests, tasks, and discussions related to a repository.",
    "Each issue has: title, description, assignees, labels, milestone, project, comments, and reactions.",
    "Issues integrate with PRs, projects, and can be automated via Actions and GitHub Apps.",
    "GitHub Issues works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "GitHub Issues is like a to-do list and bug tracker combined. You create cards for things that need to be done — bug reports, feature requests, questions. Each card can be assigned to someone, labeled, put in a milestone, and linked to a specific PR that fixes it.",
  "deepDive": [
    {
      "heading": "Issue Components",
      "text": "Labels: bug, enhancement, question, help wanted, good first issue (customizable). Milestones: group issues for a release/version. Assignees: who is working on it. Projects: kanban board organization. Issue templates: bug report, feature request, custom forms."
    },
    {
      "heading": "Issue Best Practices",
      "text": "Search before creating (avoid duplicates). Use descriptive titles. Follow issue templates. Link related issues (#123). Reference commits/PRs. Use labels for categorization. Close with reason. Automate with Actions."
    },
    {
      "heading": "Issue References",
      "text": "Fixes #123 — auto-closes issue when PR merges. Resolves, Closes, Fixes are keywords. Refs #123 — links without closing. Mention @user for attention. Commit message: \"Fixes #123: description\" auto-closes."
    }
  ],
  "interviewAnswer": "GitHub Issues track bugs, feature requests, tasks, and discussions related to a repository.",
  "interviewQuestions": [
    {
      "question": "What are GitHub Issues?",
      "answer": "Items for tracking bugs, feature requests, tasks, and discussions within a repository."
    },
    {
      "question": "How to auto-close an issue with a PR?",
      "answer": "Include \"Fixes #123\" or \"Closes #123\" in the PR description or commit message."
    },
    {
      "question": "What is a milestone in Issues?",
      "answer": "A way to group issues and PRs for a specific release or sprint."
    },
    {
      "question": "GitHub Issues — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitHub Issues — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitHub Issues — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitHub Issues — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitHub Issues — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitHub Issues — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitHub Issues — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitHub Issues</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Open Issue</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Report bug/feature</text><line x1=\"120\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"205\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Add Labels</text><text x=\"205\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Categorize</text><rect x=\"150\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"205\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Assign</text><text x=\"205\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Who owns it</text><rect x=\"150\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"205\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Milestone</text><text x=\"205\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Track progress</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">PR Fixes #123</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto-close on merge</text><text x=\"240\" y=\"150\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GitHub Issues: Track bugs, features, and tasks. In</text><text x=\"240\" y=\"162\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tegrate with PRs and projects for full workflow ma</text><text x=\"240\" y=\"174\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nagement.</text></svg>",
  "codeExamples": [
    {
      "title": "Create Issue via CLI",
      "useCase": "Create and list issues.",
      "code": "gh issue create --title \"Bug: login fails\" --label bug\ngh issue list --assignee @me",
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
      "question": "What keyword auto-closes an issue when a PR merges?",
      "options": [
        "Refs #123",
        "Fixes #123",
        "See #123",
        "Issue #123"
      ],
      "answer": 1,
      "explanation": "\"Fixes #123\" (or \"Closes\"/\"Resolves\") auto-closes the referenced issue when the PR merges."
    },
    {
      "question": "GitHub Issues — What is the recommended approach?",
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
      "question": "GitHub Issues — What should be prioritized?",
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
      "question": "GitHub Issues — What is important for security?",
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
      "question": "GitHub Issues — How to ensure reliability?",
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
      "question": "GitHub Issues — What helps team collaboration?",
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
      "question": "GitHub Issues — What reduces errors most?",
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
      "question": "GitHub Issues — What improves speed?",
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
      "question": "GitHub Issues — What is key for monitoring?",
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
      "question": "GitHub Issues — What ensures quality?",
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
