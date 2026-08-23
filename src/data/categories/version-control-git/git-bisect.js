export const git_bisect = {
  "id": "git-bisect",
  "title": "Git Bisect",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "git bisect uses binary search to find the exact commit that introduced a bug.",
    "You mark commits as \"good\" (working) or \"bad\" (broken), and Git narrows down the range by halving the search space each step.",
    "With N commits, bisect finds the bad commit in ~log2(N) steps. For 1024 commits, only ~10 checks needed.",
    "Bisect Workflow: git bisect start: begin."
  ],
  "laymanDefinition": "git bisect is like playing \"hot and cold\" but using binary search. You say \"this commit is good\" and \"this commit is bad.\" Git picks a commit halfway in between. You test it and say good or bad. Git halves again. After ~10 rounds, Git finds the exact commit where the bug was introduced.",
  "deepDive": [
    {
      "heading": "Bisect Workflow",
      "text": "git bisect start: begin. git bisect bad HEAD: mark current as bad. git bisect good v1.0: mark known good commit. Git checks out a commit halfway. Test and: git bisect good or git bisect bad. Repeat until Git identifies the first bad commit. git bisect reset: end session."
    },
    {
      "heading": "Automated Bisect",
      "text": "git bisect run <script>: automate testing. Provide a script that exits 0 (good) or non-0 (bad). Git automatically runs the script on each commit. Example: git bisect run npm test. Perfect for CI regression detection. Set up: npm test exits 1 if test fails (bug present), 0 if passes (bug absent)."
    },
    {
      "heading": "Workflow Integration",
      "text": "Understanding how Git Bisect fits into the broader Git workflow helps teams establish effective version control practices, code review processes, and release management strategies."
    }
  ],
  "interviewAnswer": "git bisect uses binary search to find the exact commit that introduced a bug.",
  "interviewQuestions": [
    {
      "question": "What does git bisect do?",
      "answer": "Binary search through commit history to find the exact commit that introduced a bug."
    },
    {
      "question": "How many steps to check 2048 commits?",
      "answer": "~11 steps (log2(2048) = 11). Each step halves the search space."
    },
    {
      "question": "How to automate bisect?",
      "answer": "git bisect run <script> — provide a script that exits 0 for good, non-0 for bad."
    },
    {
      "question": "Git Bisect — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Bisect — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Bisect — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Bisect — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Bisect — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Bisect — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Bisect — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Bisect</text><rect x=\"10\" y=\"35\" width=\"300\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">git bisect start</text><text x=\"160\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Begin binary search</text><rect x=\"10\" y=\"65\" width=\"240\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"130\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">~log2(N) steps to find bug</text><text x=\"130\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">N=1024 -> ~10 checks</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Bisect: Binary search for the commit that intr</text><text x=\"240\" y=\"132\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">oduced a bug. Efficient debugging.</text></svg>",
  "codeExamples": [
    {
      "title": "Bisect Example",
      "useCase": "Find bug by binary search.",
      "code": "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.0\n# test, then repeat:\ngit bisect good\n# or:\ngit bisect bad\ngit bisect reset",
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
      "question": "What is the time complexity of git bisect?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n log n)",
        "O(1)"
      ],
      "answer": 1,
      "explanation": "git bisect uses binary search — O(log n) where n is the number of commits in the range."
    },
    {
      "question": "Git Bisect — What is the recommended approach?",
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
      "question": "Git Bisect — What should be prioritized?",
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
      "question": "Git Bisect — What is important for security?",
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
      "question": "Git Bisect — How to ensure reliability?",
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
      "question": "Git Bisect — What helps team collaboration?",
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
      "question": "Git Bisect — What reduces errors most?",
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
      "question": "Git Bisect — What improves speed?",
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
      "question": "Git Bisect — What is key for monitoring?",
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
      "question": "Git Bisect — What ensures quality?",
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
