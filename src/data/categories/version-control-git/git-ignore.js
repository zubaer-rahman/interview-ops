export const git_ignore = {
  "id": "git-ignore",
  "title": "Git Ignore",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    ".gitignore tells Git which files to ignore — they won't be tracked, staged, or committed.",
    "Common ignores: node_modules/, .env, build artifacts, IDE configs, OS files, logs.",
    "Patterns: * (wildcard), ! (negation), / (directory), # (comment).",
    "Pattern Examples: node_modules/: ignore directory."
  ],
  "laymanDefinition": ".gitignore is like a \"do not file\" list for your filing cabinet. You tell Git: ignore these files. Ideal for generated files, secrets, dependencies, and environment-specific configs.",
  "deepDive": [
    {
      "heading": "Pattern Examples",
      "text": "node_modules/: ignore directory. *.log: ignore all log files. !important.log: track this despite *.log rule. /build: ignore build in root only. .env: ignore environment files. dist/, .next/, coverage/: build outputs. .DS_Store, Thumbs.db: OS files. .vscode/, .idea/: IDE configs."
    },
    {
      "heading": "Global Gitignore",
      "text": "~/.config/git/ignore: global ignore for your machine. git config --global core.excludesFile. Useful for OS files (.DS_Store) and editor files across all repos."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Ignore fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": ".gitignore tells Git which files to ignore — they won't be tracked, staged, or committed.",
  "interviewQuestions": [
    {
      "question": "What is .gitignore?",
      "answer": "A file telling Git which files and directories to ignore (not track)."
    },
    {
      "question": "What should always be in .gitignore?",
      "answer": "node_modules/, .env, build artifacts, OS files (.DS_Store), IDE configs."
    },
    {
      "question": "Git Ignore — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Git Ignore — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Ignore — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Ignore — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Ignore — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Ignore — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Ignore — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Ignore — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Ignore</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">.gitignore</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ignore rules</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"75\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ignored Files</text><text x=\"215\" y=\"82\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">node_modules/, .env,</text><text x=\"215\" y=\"93\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> *.log, build/, .DS_</text><text x=\"215\" y=\"104\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Store</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Ignore: Specify files Git should not track. Es</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">sential for security and cleanliness.</text></svg>",
  "codeExamples": [
    {
      "title": "Sample .gitignore",
      "useCase": "Common ignore rules.",
      "code": "node_modules/\n.env\n*.log\ndist/\n.DS_Store\n.vscode/\n.idea/",
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
      "question": "What should NOT be in .gitignore?",
      "options": [
        "node_modules/",
        ".env",
        "package.json",
        "*.log"
      ],
      "answer": 2,
      "explanation": "package.json should be tracked; the others should be ignored."
    },
    {
      "question": "Git Ignore — What is the recommended approach?",
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
      "question": "Git Ignore — What should be prioritized?",
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
      "question": "Git Ignore — What is important for security?",
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
      "question": "Git Ignore — How to ensure reliability?",
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
      "question": "Git Ignore — What helps team collaboration?",
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
      "question": "Git Ignore — What reduces errors most?",
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
      "question": "Git Ignore — What improves speed?",
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
      "question": "Git Ignore — What is key for monitoring?",
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
      "question": "Git Ignore — What ensures quality?",
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
