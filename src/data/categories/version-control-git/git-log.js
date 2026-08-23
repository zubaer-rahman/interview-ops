export const git_log = {
  "id": "git-log",
  "title": "Git Log",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "git log shows the commit history of the current branch, displaying commits in reverse chronological order.",
    "Supports powerful filtering: by author, date, file, message, and more.",
    "Common flags: --oneline (compact), --graph (branch visualization), --all (all branches), --decorate (show refs).",
    "Formatting Options: git log --oneline: one line per commit (short hash + message)."
  ],
  "laymanDefinition": "git log is like a diary of your project. Every commit is an entry with: who made it, when, what they changed, and a message explaining why. You can flip through the diary, search for specific entries, and see how the story of your project unfolded.",
  "deepDive": [
    {
      "heading": "Formatting Options",
      "text": "git log --oneline: one line per commit (short hash + message). git log --stat: show changed files and line counts. git log --patch (-p): show full diffs. git log --graph: ASCII graph of branch structure. git log --format=\"%h %an %s\": custom format. %h=hash, %an=author, %s=subject."
    },
    {
      "heading": "Filtering Options",
      "text": "git log --author=\"name\": filter by author. git log --since=\"2 weeks ago\": date filter. git log --grep=\"fix\": search commit messages. git log -- <file>: show commits touching a file. git log -S\"function()\": show commits that changed a specific string (pickaxe). git log --merges: only merge commits."
    },
    {
      "heading": "Range and Revision",
      "text": "git log main..feature: commits in feature not in main. git log --since=\"2024-01-01\" --until=\"2024-12-31\": date range. git log -5: show last 5 commits. git log --follow <file>: show history of renamed file."
    }
  ],
  "interviewAnswer": "git log shows the commit history of the current branch, displaying commits in reverse chronological order.",
  "interviewQuestions": [
    {
      "question": "What does git log show?",
      "answer": "Commit history in reverse chronological order with hash, author, date, and message."
    },
    {
      "question": "How to see branch graph in log?",
      "answer": "git log --graph --oneline --all --decorate shows ASCII branch structure."
    },
    {
      "question": "How to find commits that changed a specific function?",
      "answer": "git log -S\"functionName\" (pickaxe search) finds commits that added/removed the string."
    },
    {
      "question": "Git Log — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Log — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Log — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Log — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Log — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Log — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Log — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Log</text><rect x=\"10\" y=\"35\" width=\"200\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"110\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git log --oneline</text><text x=\"110\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compact commit list</text><rect x=\"10\" y=\"65\" width=\"200\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"110\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git log --graph</text><text x=\"110\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Branch visualization</text><rect x=\"10\" y=\"95\" width=\"200\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"110\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git log --author=\"name\"</text><text x=\"110\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Filter by author</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Log: Powerful commit history viewer with exten</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">sive filtering and formatting.</text></svg>",
  "codeExamples": [
    {
      "title": "Log Commands",
      "useCase": "View commit history.",
      "code": "git log --oneline --graph --all --decorate\ngit log --since=\"2 weeks ago\" --author=\"ayaz\"\ngit log -p -5",
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
      "question": "What flag shows branch graph in git log?",
      "options": [
        "--stat",
        "--graph",
        "--patch",
        "--decorate"
      ],
      "answer": 1,
      "explanation": "--graph shows ASCII branch visualization in the log output."
    },
    {
      "question": "Git Log — What is the recommended approach?",
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
      "question": "Git Log — What should be prioritized?",
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
      "question": "Git Log — What is important for security?",
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
      "question": "Git Log — How to ensure reliability?",
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
      "question": "Git Log — What helps team collaboration?",
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
      "question": "Git Log — What reduces errors most?",
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
      "question": "Git Log — What improves speed?",
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
      "question": "Git Log — What is key for monitoring?",
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
      "question": "Git Log — What ensures quality?",
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
