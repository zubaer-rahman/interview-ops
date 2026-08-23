export const git_submodule = {
  "id": "git-submodule",
  "title": "Git Submodule",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Git submodules allow you to include one Git repository inside another as a nested dependency.",
    "The parent repo stores a reference (commit hash) to the submodule, not the actual files.",
    "Useful for: shared libraries, third-party dependencies, monorepo-like structures without monorepo overhead.",
    "Submodule Commands: git submodule add <url> <path>: add submodule."
  ],
  "laymanDefinition": "Git submodule is like having a library inside your house that is actually a separate property. You have a reference card (commit hash) pointing to that library. When someone visits your house, they can look up the card and visit the exact same library. The library can be updated independently.",
  "deepDive": [
    {
      "heading": "Submodule Commands",
      "text": "git submodule add <url> <path>: add submodule. git submodule init: initialize submodule config. git submodule update: fetch and checkout referenced commit. git submodule update --remote: update to latest commit on submodule\\'s default branch. git clone --recurse-submodules <url>: clone with all submodules."
    },
    {
      "heading": "Submodule Workflow",
      "text": "Adding: git submodule add, commit. Cloning: git clone --recurse-submodules or git clone then git submodule init && git submodule update. Updating: cd submodule, git pull, cd .., git commit (to update the reference). Best Practices: Pin submodules to stable versions, document submodule workflow, consider alternatives (npm, package managers)."
    },
    {
      "heading": "Pitfalls",
      "text": "Forgetting --recurse-submodules when cloning. Detached HEAD state in submodules. Stale references (need explicit git submodule update). Complex nested submodules. Changes in submodule must be pushed separately before parent. Consider subtrees or package managers as simpler alternatives."
    }
  ],
  "interviewAnswer": "Git submodules allow you to include one Git repository inside another as a nested dependency.",
  "interviewQuestions": [
    {
      "question": "What is a Git submodule?",
      "answer": "A nested Git repository referenced by commit hash from the parent repository."
    },
    {
      "question": "How to clone a repo with submodules?",
      "answer": "git clone --recurse-submodules <url> or git submodule init && git submodule update after cloning."
    },
    {
      "question": "What is a common submodule pitfall?",
      "answer": "Forgetting --recurse-submodules when cloning — results in empty submodule directories."
    },
    {
      "question": "Git Submodule — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Git Submodule — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Git Submodule — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Git Submodule — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Git Submodule — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Git Submodule — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Git Submodule — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Submodule</text><rect x=\"10\" y=\"35\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"85\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Parent Repo</text><text x=\"85\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Contains reference commit</text><line x1=\"160\" y1=\"48\" x2=\"180\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"35\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Submodule Repo</text><text x=\"265\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Separate Git repo</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Submodule: Include external Git repos within y</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">our repo. Each submodule pinned to a specific comm</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">it.</text></svg>",
  "codeExamples": [
    {
      "title": "Submodule Commands",
      "useCase": "Manage submodules.",
      "code": "git submodule add https://github.com/user/lib.git lib\ngit clone --recurse-submodules <url>\ngit submodule update --remote",
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
      "question": "What happens when cloning a repo with submodules without --recurse-submodules?",
      "options": [
        "Submodules clone automatically",
        "Submodule directories are empty",
        "An error occurs",
        "Repo fails to clone"
      ],
      "answer": 1,
      "explanation": "Without --recurse-submodules, submodule directories are created but empty. Run git submodule init && git submodule update."
    },
    {
      "question": "Git Submodule — What is the recommended approach?",
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
      "question": "Git Submodule — What should be prioritized?",
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
      "question": "Git Submodule — What is important for security?",
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
      "question": "Git Submodule — How to ensure reliability?",
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
      "question": "Git Submodule — What helps team collaboration?",
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
      "question": "Git Submodule — What reduces errors most?",
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
      "question": "Git Submodule — What improves speed?",
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
      "question": "Git Submodule — What is key for monitoring?",
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
      "question": "Git Submodule — What ensures quality?",
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
