export const github_api = {
  "id": "github-api",
  "title": "GitHub API & Webhooks",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "GitHub provides a comprehensive REST API and GraphQL API for interacting with all GitHub features programmatically.",
    "Webhooks allow real-time notifications when events occur in your repository, sending HTTP POST payloads to a configured URL.",
    "Both APIs and webhooks enable integration with external services, CI/CD tools, and custom automation.",
    "GitHub API & Webhooks works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "The GitHub API lets you programmatically do anything you can do on GitHub: create issues, merge PRs, manage repos, etc. Webhooks are like automated phone calls — GitHub calls your server when something happens (new issue, push, PR). This is how CI/CD services know to start building when you push code.",
  "deepDive": [
    {
      "heading": "REST API",
      "text": "https://api.github.com/ — base URL. Versioned via Accept header or URL path (v3). Endpoints: /repos/:owner/:repo, /issues, /pulls, /actions, /releases. Pagination: Link header (page/per_page params). Rate limiting: 5000 req/hr (authenticated), 60 req/hr (unauthenticated)."
    },
    {
      "heading": "GraphQL API",
      "text": "https://api.github.com/graphql — single endpoint. Query exactly what you need (no over-fetching). Mutations: create/update/delete resources. Nested queries: fetch related data in one request. Rate limiting: based on point cost, not request count. Use GitHub GraphQL Explorer for experimentation."
    },
    {
      "heading": "Webhooks",
      "text": "Events: push, pull_request, issues, release, etc. Payload: JSON body with event details. Delivery: POST to configured URL with specific headers (X-GitHub-Event, X-Hub-Signature). Secret token for payload verification. Ping event on initial setup. Retry on failure."
    },
    {
      "heading": "Authentication",
      "text": "Personal Access Token (PAT): classic or fine-grained. OAuth App token: for applications on behalf of users. GitHub App token: installation-based with specific permissions. JWT: for GitHub App authentication. Best practice: use fine-grained PATs with minimal scopes."
    }
  ],
  "interviewAnswer": "GitHub provides a comprehensive REST API and GraphQL API for interacting with all GitHub features programmatically.",
  "interviewQuestions": [
    {
      "question": "What are the two GitHub API types?",
      "answer": "REST API (api.github.com) and GraphQL API (api.github.com/graphql)."
    },
    {
      "question": "What is a webhook?",
      "answer": "An HTTP POST callback triggered by GitHub events, sending event details to a configured URL."
    },
    {
      "question": "How to authenticate with the GitHub API?",
      "answer": "Personal Access Token, OAuth token, or GitHub App token. Include in Authorization header."
    },
    {
      "question": "GitHub API & Webhooks — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitHub API & Webhooks — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitHub API & Webhooks — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitHub API & Webhooks — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitHub API & Webhooks — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitHub API & Webhooks — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitHub API & Webhooks — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitHub API & Webhooks</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">REST API</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">api.github.com</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GraphQL API</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Flexible queries</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Webhooks</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Event callbacks</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitHub CLI</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">gh tool</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GitHub API & Webhooks: REST and GraphQL APIs for a</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">utomation. Webhooks for real-time event notificati</text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ons.</text></svg>",
  "codeExamples": [
    {
      "title": "API Examples",
      "useCase": "REST API calls.",
      "code": "curl -H \"Authorization: Bearer TOKEN\" https://api.github.com/repos/user/repo\ngh api repos/:owner/:repo/issues",
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
      "question": "What is the rate limit for authenticated REST API requests?",
      "options": [
        "60/hr",
        "1000/hr",
        "5000/hr",
        "Unlimited"
      ],
      "answer": 2,
      "explanation": "Authenticated requests have a rate limit of 5000 requests per hour. Unauthenticated: 60/hr."
    },
    {
      "question": "GitHub API & Webhooks — What is the recommended approach?",
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
      "question": "GitHub API & Webhooks — What should be prioritized?",
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
      "question": "GitHub API & Webhooks — What is important for security?",
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
      "question": "GitHub API & Webhooks — How to ensure reliability?",
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
      "question": "GitHub API & Webhooks — What helps team collaboration?",
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
      "question": "GitHub API & Webhooks — What reduces errors most?",
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
      "question": "GitHub API & Webhooks — What improves speed?",
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
      "question": "GitHub API & Webhooks — What is key for monitoring?",
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
      "question": "GitHub API & Webhooks — What ensures quality?",
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
