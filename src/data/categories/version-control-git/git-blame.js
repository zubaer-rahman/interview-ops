export const git_blame = {
  "id": "git-blame",
  "title": "Git Blame",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "tldr": [
    "git blame annotates each line of a file with the commit hash, author, and date that last modified it.",
    "Useful for: understanding why code exists, finding who introduced a bug, or reviewing code history per line.",
    "Output format: commit hash | author | timestamp | line number | content.",
    "Blame Commands: git blame <file>: annotate entire file."
  ],
  "laymanDefinition": "git blame is like a forensic tool for your code. It tells you who last touched each line, when, and in which commit. Like checking security footage to see who made a specific change to a document. The name \"blame\" is misleading — it's more about \"who knows about this code.\"",
  "deepDive": [
    {
      "heading": "Blame Commands",
      "text": "git blame <file>: annotate entire file. git blame -L 10,20 <file>: annotate specific line range. git blame -w <file>: ignore whitespace changes. git blame -M <file>: detect moved lines. git blame -C <file>: detect copied lines from other files."
    },
    {
      "heading": "Practical Use",
      "text": "Find regression: git blame shows the commit that last changed a buggy line. Use with git show <hash> to see full context. Understanding: see when and why a line was added. Code review: verify who reviewed a change. Use blame annotations in IDE (VS Code, IntelliJ) for inline view."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Blame fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": "git blame annotates each line of a file with the commit hash, author, and date that last modified it.",
  "interviewQuestions": [
    {
      "question": "What does git blame show?",
      "answer": "For each line in a file: the commit hash, author, and timestamp of the last modification."
    },
    {
      "question": "How to blame only specific lines?",
      "answer": "git blame -L 20,40 <file> shows lines 20-40."
    },
    {
      "question": "What does -M flag do in git blame?",
      "answer": "Detects lines that were moved within the same file (not just modified)."
    },
    {
      "question": "Git Blame — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Blame — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Blame — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Blame — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Blame — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Blame — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Blame — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Blame</text><rect x=\"10\" y=\"35\" width=\"300\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git blame app.js</text><text x=\"160\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Annotates each line</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Blame: Shows commit, author, date per line. Fi</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nd who changed what and when.</text></svg>",
  "codeExamples": [
    {
      "title": "Blame Commands",
      "useCase": "Line annotation.",
      "code": "git blame server.js -L 42,50\ngit blame --show-email index.js",
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
      "question": "What does git blame annotate per line?",
      "options": [
        "Branch name",
        "Commit hash, author, date",
        "File size",
        "Line count"
      ],
      "answer": 1,
      "explanation": "git blame shows commit hash, author, and timestamp for each line\\'s last modification."
    },
    {
      "question": "Git Blame — What is the recommended approach?",
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
      "question": "Git Blame — What should be prioritized?",
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
      "question": "Git Blame — What is important for security?",
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
      "question": "Git Blame — How to ensure reliability?",
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
      "question": "Git Blame — What helps team collaboration?",
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
      "question": "Git Blame — What reduces errors most?",
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
      "question": "Git Blame — What improves speed?",
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
      "question": "Git Blame — What is key for monitoring?",
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
      "question": "Git Blame — What ensures quality?",
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
