export const github_gists = {
  "id": "github-gists",
  "title": "GitHub Gists",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Gists are simple, shareable code snippets that can be created from any GitHub account.",
    "Public gists appear in search and Discover; secret gists are hidden (URL-only access).",
    "Gists support: multiple files, revisions, embedding, cloning as Git repos, comments, and forking.",
    "GitHub Gists works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A Gist is like a sticky note for code. Need to share a quick code snippet with someone? Paste it in a Gist. It gets its own URL, syntax highlighting, and can be embedded in blog posts. Secret gists are private by obscurity (only people with the URL can see them).",
  "deepDive": [
    {
      "heading": "Gist Features",
      "text": "Markdown support (.md files render). Embed in websites via script tag. Clone as Git repo: git clone https://gist.github.com/hash.git. Revisions: full edit history. Comments: discussion on snippets. Forks: others can fork your gist."
    },
    {
      "heading": "Use Cases",
      "text": "Sharing code snippets in discussions/forums. Pastebin alternative. Quick configuration sharing. Code examples for documentation. Bug reproduction code. Mini project templates. API request examples."
    },
    {
      "heading": "Gist vs Repository",
      "text": "Gist: simple, single/multi-file snippets, no PRs, no issues, no Actions, no wiki. Repository: full project, PRs, issues, Actions, wiki, Pages, security features. Use gists for sharing small code examples; use repos for projects."
    }
  ],
  "interviewAnswer": "Gists are simple, shareable code snippets that can be created from any GitHub account.",
  "interviewQuestions": [
    {
      "question": "What is a GitHub Gist?",
      "answer": "A simple way to share code snippets with syntax highlighting, version history, and embedding."
    },
    {
      "question": "What is the difference between public and secret gist?",
      "answer": "Public: visible in search, Discover, trending. Secret: URL-only access, not searchable (but not encrypted)."
    },
    {
      "question": "Can gists be cloned?",
      "answer": "Yes — each gist is a Git repository that can be cloned (https://gist.github.com/hash.git)."
    },
    {
      "question": "GitHub Gists — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitHub Gists — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitHub Gists — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitHub Gists — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitHub Gists — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitHub Gists — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitHub Gists — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitHub Gists</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Create Gist</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Paste code snippet</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Share URL</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Send to others</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Embed</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"><script> tag</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Clone</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Git repo</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GitHub Gists: Simple code snippets. Public or secr</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">et. Embed, clone, fork, comment. Perfect for shari</text><text x=\"240\" y=\"164\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ng small code examples.</text></svg>",
  "codeExamples": [
    {
      "title": "Create Gist via CLI",
      "useCase": "Quick snippet sharing.",
      "code": "gh gist create index.js --public\ngh gist list\ngh gist view <id>",
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
      "question": "Are secret gists truly private?",
      "options": [
        "Yes, fully encrypted",
        "No, URL-only (not searchable but not encrypted)",
        "Only enterprise users",
        "Only for paid accounts"
      ],
      "answer": 1,
      "explanation": "Secret gists are not truly private — they are accessible by anyone with the URL and not encrypted. Do not put secrets in gists."
    },
    {
      "question": "GitHub Gists — What is the recommended approach?",
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
      "question": "GitHub Gists — What should be prioritized?",
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
      "question": "GitHub Gists — What is important for security?",
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
      "question": "GitHub Gists — How to ensure reliability?",
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
      "question": "GitHub Gists — What helps team collaboration?",
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
      "question": "GitHub Gists — What reduces errors most?",
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
      "question": "GitHub Gists — What improves speed?",
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
      "question": "GitHub Gists — What is key for monitoring?",
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
      "question": "GitHub Gists — What ensures quality?",
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
