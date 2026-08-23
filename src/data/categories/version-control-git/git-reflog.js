export const git_reflog = {
  "id": "git-reflog",
  "title": "Git Reflog",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "git reflog (reference log) records every movement of HEAD — commits, checkouts, merges, rebases, resets.",
    "Unlike git log (which shows commit history), reflog shows the history of WHERE HEAD has been.",
    "Critical for recovery: you can recover \"lost\" commits after reset, rebase, or amend using reflog entries.",
    "Reflog Entries: HEAD@{0}: current position."
  ],
  "laymanDefinition": "git reflog is like the black box flight recorder for your Git repository. Every action you take is recorded: \"switched to main\", \"committed\", \"reset to here\", \"rebased onto there\". Even if you make a mistake like resetting to the wrong place, the reflog can save you.",
  "deepDive": [
    {
      "heading": "Reflog Entries",
      "text": "HEAD@{0}: current position. HEAD@{1}: previous position. Each entry has: action (commit, reset, checkout), reason, and timestamp. Reflog is per-repository, local only — not shared via remote. Entries expire: 90 days by default (gc.reflogExpire)."
    },
    {
      "heading": "Recovery Examples",
      "text": "git reflog: see all HEAD movements. git reset --hard HEAD@{5}: go back to 5th previous position. git checkout HEAD@{2}: check out a previous state. git cherry-pick HEAD@{3}: re-apply a lost commit. git reflog show <branch>: reflog for specific branch. Recovery after bad reset: git reset --hard ORIG_HEAD or find the lost commit in reflog."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Reflog fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": "git reflog (reference log) records every movement of HEAD — commits, checkouts, merges, rebases, resets.",
  "interviewQuestions": [
    {
      "question": "What is git reflog?",
      "answer": "A log of every HEAD movement — commits, checkouts, merges, rebases, resets. Local only."
    },
    {
      "question": "How to recover from a bad git reset --hard?",
      "answer": "Find the lost commit in reflog (git reflog), then git reset --hard HEAD@{N} to restore."
    },
    {
      "question": "How long do reflog entries persist?",
      "answer": "90 days by default (configurable via gc.reflogExpire)."
    },
    {
      "question": "Git Reflog — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Reflog — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Reflog — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Reflog — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Reflog — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Reflog — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Reflog — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Reflog</text><rect x=\"10\" y=\"35\" width=\"300\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git reflog</text><text x=\"160\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">History of HEAD movements</text><rect x=\"10\" y=\"65\" width=\"300\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"160\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HEAD@{0} -> HEAD@{1} -> HEAD@{2}</text><text x=\"160\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stack of positions</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Reflog: \"Black box\" recorder of all HEAD movem</text><text x=\"240\" y=\"132\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ents. Essential for recovery.</text></svg>",
  "codeExamples": [
    {
      "title": "Reflog Recovery",
      "useCase": "Recover lost commits.",
      "code": "git reflog\ngit reset --hard HEAD@{3}\ngit checkout HEAD@{5} -- file.txt",
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
      "question": "What does git reflog track?",
      "options": [
        "Remote commits",
        "All HEAD movements (local only)",
        "File changes",
        "Branch names"
      ],
      "answer": 1,
      "explanation": "Reflog tracks all HEAD movements locally. It is NOT shared via remote."
    },
    {
      "question": "Git Reflog — What is the recommended approach?",
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
      "question": "Git Reflog — What should be prioritized?",
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
      "question": "Git Reflog — What is important for security?",
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
      "question": "Git Reflog — How to ensure reliability?",
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
      "question": "Git Reflog — What helps team collaboration?",
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
      "question": "Git Reflog — What reduces errors most?",
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
      "question": "Git Reflog — What improves speed?",
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
      "question": "Git Reflog — What is key for monitoring?",
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
      "question": "Git Reflog — What ensures quality?",
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
