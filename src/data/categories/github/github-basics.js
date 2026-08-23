export const github_basics = {
  "id": "github-basics",
  "title": "GitHub Basics",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "GitHub is a web-based platform for version control using Git, providing hosting, collaboration, and social coding features.",
    "Core features: repositories, pull requests, issues, actions, pages, wikis, discussions.",
    "GitHub adds a web UI, access control, and collaboration tools on top of Git.",
    "GitHub Basics works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "GitHub is like a social network for code. It hosts your Git repositories in the cloud, lets you collaborate with others, review changes, track bugs, and automate workflows. Think of it as Google Drive for developers, but much more powerful.",
  "deepDive": [
    {
      "heading": "Repository Features",
      "text": "Public repos (open source), private repos, internal repos. README.md auto-displayed on repo page. License files, contributing guidelines, issue/PR templates. Repository topics and descriptions for discoverability. GitHub Pages for hosting."
    },
    {
      "heading": "Collaboration Model",
      "text": "Fork + Pull Request model (open source). Shared repository model (teams). Code owners for auto-requesting reviews (CODEOWNERS file). Branch protection rules. Required status checks."
    },
    {
      "heading": "GitHub Ecosystem",
      "text": "GitHub Actions (CI/CD), GitHub Pages (hosting), GitHub Packages (registry), GitHub Codespaces (cloud IDE), GitHub Mobile, GitHub CLI (gh), GitHub Desktop, GitHub API, GitHub Marketplace."
    }
  ],
  "interviewAnswer": "GitHub is a web-based platform for version control using Git, providing hosting, collaboration, and social coding features.",
  "interviewQuestions": [
    {
      "question": "What is GitHub?",
      "answer": "A web-based Git repository hosting service with collaboration features like PRs, issues, and Actions."
    },
    {
      "question": "What is the fork + PR model?",
      "answer": "Fork a repo to your account, make changes, submit a pull request to the original repo for review and merge."
    },
    {
      "question": "What are GitHub Pages?",
      "answer": "Free static site hosting directly from a GitHub repository."
    },
    {
      "question": "GitHub Basics — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitHub Basics — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitHub Basics — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitHub Basics — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitHub Basics — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitHub Basics — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitHub Basics — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitHub Basics</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Repositories</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Host Git repos</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pull Requests</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Review & merge</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Actions</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CI/CD automation</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Issues</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bug tracking</text><rect x=\"160\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pages</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Static hosting</text><rect x=\"160\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Wiki</text><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Documentation</text><rect x=\"160\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Discussions</text><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Community</text><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GitHub: Web-based Git platform with collaboration,</text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> CI/CD, hosting, and social coding.</text></svg>",
  "codeExamples": [
    {
      "title": "GitHub CLI",
      "useCase": "Interact with GitHub from terminal.",
      "code": "gh repo create my-project\ngh pr create --title \"My PR\"\ngh issue list",
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
      "question": "What is the fork + PR model used for?",
      "options": [
        "Personal projects",
        "Open source contributions",
        "Enterprise deployment",
        "Database management"
      ],
      "answer": 1,
      "explanation": "The fork + PR model is the standard way to contribute to open source projects on GitHub."
    },
    {
      "question": "GitHub Basics — What is the recommended approach?",
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
      "question": "GitHub Basics — What should be prioritized?",
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
      "question": "GitHub Basics — What is important for security?",
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
      "question": "GitHub Basics — How to ensure reliability?",
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
      "question": "GitHub Basics — What helps team collaboration?",
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
      "question": "GitHub Basics — What reduces errors most?",
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
      "question": "GitHub Basics — What improves speed?",
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
      "question": "GitHub Basics — What is key for monitoring?",
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
      "question": "GitHub Basics — What ensures quality?",
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
