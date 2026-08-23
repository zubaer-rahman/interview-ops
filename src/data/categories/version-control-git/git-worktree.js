export const git_worktree = {
  "id": "git-worktree",
  "title": "Git Worktree",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "git worktree allows you to check out multiple branches simultaneously in different directories.",
    "Unlike git stash or git switch, worktrees let you work on multiple features at the same time without context switching.",
    "Each worktree is a full working directory linked to the same .git directory — changes in any worktree affect the shared object database.",
    "Worktree Commands: git worktree add <path> <branch>: create new worktree."
  ],
  "laymanDefinition": "git worktree is like having multiple desks for different projects. You can have one branch open on desk A, another on desk B, and switch between them instantly by walking to the other desk. No stashing, no committing work-in-progress, no context switching. All desks share the same filing cabinet (.git).",
  "deepDive": [
    {
      "heading": "Worktree Commands",
      "text": "git worktree add <path> <branch>: create new worktree. git worktree list: show all worktrees. git worktree remove <path>: remove worktree. git worktree prune: clean up removed worktree references. git worktree add -b <new-branch> <path> main: create worktree with new branch based on main."
    },
    {
      "heading": "Use Cases",
      "text": "Hotfixes: work on a hotfix in a separate worktree while main worktree has feature code. Code review: review PR branch in a separate worktree. Long-running tasks: run tests on one branch while coding on another. Parallel features: work on multiple feature branches simultaneously. No need to stash, commit WIP, or use temporary branches."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Worktree fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": "git worktree allows you to check out multiple branches simultaneously in different directories.",
  "interviewQuestions": [
    {
      "question": "What is git worktree?",
      "answer": "A feature allowing multiple branches to be checked out simultaneously in separate directories, sharing the same .git folder."
    },
    {
      "question": "How is worktree better than git stash for multi-tasking?",
      "answer": "Worktrees allow truly parallel work without stashing, committing WIP, or switching context. Each worktree is independent."
    },
    {
      "question": "Do worktrees share the same object database?",
      "answer": "Yes — all worktrees share the same .git directory. Commits in any worktree are visible to all others."
    },
    {
      "question": "Git Worktree — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Worktree — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Worktree — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Worktree — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Worktree — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Worktree — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Worktree — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Worktree</text><rect x=\"10\" y=\"35\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"85\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Main Worktree</text><text x=\"85\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Main branch</text><rect x=\"10\" y=\"65\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"85\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">feature-worktree</text><text x=\"85\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Feature branch work</text><rect x=\"10\" y=\"95\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"85\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">hotfix-worktree</text><text x=\"85\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hotfix branch work</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Worktree: Check out multiple branches simultan</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">eously in separate directories. No context switchi</text><text x=\"240\" y=\"164\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ng.</text></svg>",
  "codeExamples": [
    {
      "title": "Worktree Commands",
      "useCase": "Multiple working trees.",
      "code": "git worktree add ../hotfix hotfix/bug\ngit worktree list\ngit worktree remove ../hotfix",
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
      "question": "What is the main benefit of git worktree?",
      "options": [
        "It is faster than git switch",
        "It lets you work on multiple branches simultaneously without stashing",
        "It creates new repositories",
        "It improves network performance"
      ],
      "answer": 1,
      "explanation": "Worktrees enable parallel work on multiple branches without stashing or committing WIP."
    },
    {
      "question": "Git Worktree — What is the recommended approach?",
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
      "question": "Git Worktree — What should be prioritized?",
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
      "question": "Git Worktree — What is important for security?",
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
      "question": "Git Worktree — How to ensure reliability?",
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
      "question": "Git Worktree — What helps team collaboration?",
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
      "question": "Git Worktree — What reduces errors most?",
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
      "question": "Git Worktree — What improves speed?",
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
      "question": "Git Worktree — What is key for monitoring?",
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
      "question": "Git Worktree — What ensures quality?",
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
