export const git_stash = {
  "id": "git-stash",
  "title": "Git Stash",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "tldr": [
    "git stash temporarily saves changes that are not ready to be committed, cleaning the working directory.",
    "Useful when you need to switch branches but have uncommitted work.",
    "Stashes are stored on a stack (LIFO) and can be applied to any branch.",
    "Stash Commands: git stash: save changes (tracked files)."
  ],
  "laymanDefinition": "git stash is like putting your current work in a drawer when you need to clear your desk temporarily. Later, you can take it out of the drawer and continue exactly where you left off. You can have multiple drawers (stash stack).",
  "deepDive": [
    {
      "heading": "Stash Commands",
      "text": "git stash: save changes (tracked files). git stash push -m \"message\": save with description. git stash -u: stash untracked files too. git stash list: view all stashes. git stash apply: apply latest stash (keeps in stack). git stash pop: apply and remove from stack. git stash drop: remove stash without applying. git stash clear: remove all stashes."
    },
    {
      "heading": "Stash Use Cases",
      "text": "Switch branches mid-work: stash changes, switch, work, switch back, pop stash. Pull changes: stash local changes, pull, pop stash. Experiment: stash, try something, apply or drop. Multi-task: multiple stashes for different tasks."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Stash fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": "git stash temporarily saves changes that are not ready to be committed, cleaning the working directory.",
  "interviewQuestions": [
    {
      "question": "What does git stash do?",
      "answer": "Temporarily saves uncommitted changes and cleans the working directory."
    },
    {
      "question": "What is the difference between stash apply and stash pop?",
      "answer": "apply keeps the stash in the stack; pop removes it after applying."
    },
    {
      "question": "Git Stash — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Git Stash — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Stash — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Stash — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Stash — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Stash — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Stash — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Stash — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Stash</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Working Dir</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Uncommitted changes</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git stash</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Saved in stack</text><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git stash pop</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Restore changes</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Stash: Temporarily save changes. Switch branch</text><text x=\"240\" y=\"132\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">es freely, restore later.</text></svg>",
  "codeExamples": [
    {
      "title": "Stash Commands",
      "useCase": "Save and restore stashes.",
      "code": "git stash push -m \"WIP: login form\"\ngit stash list\ngit stash pop\ngit stash drop stash@{1}",
      "description": "Common stash operations."
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
      "question": "What is the difference between stash apply and pop?",
      "options": [
        "No difference",
        "Apply keeps stash; pop removes it",
        "Pop keeps stash; apply removes",
        "Pop is for untracked"
      ],
      "answer": 1,
      "explanation": "git stash apply keeps the stash; git stash pop removes it after applying."
    },
    {
      "question": "Git Stash — What is the recommended approach?",
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
      "question": "Git Stash — What should be prioritized?",
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
      "question": "Git Stash — What is important for security?",
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
      "question": "Git Stash — How to ensure reliability?",
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
      "question": "Git Stash — What helps team collaboration?",
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
      "question": "Git Stash — What reduces errors most?",
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
      "question": "Git Stash — What improves speed?",
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
      "question": "Git Stash — What is key for monitoring?",
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
      "question": "Git Stash — What ensures quality?",
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
