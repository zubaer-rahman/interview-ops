export const github_actions_advanced = {
  "id": "github-actions-advanced",
  "title": "GitHub Actions Advanced",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Advanced Actions features: matrix builds, caching, artifacts, environments, custom actions, reusable workflows.",
    "Matrix strategy runs jobs across multiple OS/versions in parallel. Caching speeds up dependencies. Artifacts share files between jobs.",
    "Adopting GitHub Actions Advanced leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "GitHub Actions Advanced works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Advanced Actions is like having a full factory automation system. You can run tests on Windows, Mac, and Linux simultaneously (matrix), save downloaded packages so they don't re-download every time (caching), pass build results between stages (artifacts), and create your own custom robots (custom actions).",
  "deepDive": [
    {
      "heading": "Matrix Strategy",
      "text": "matrix.os: [ubuntu-latest, windows-latest, macos-latest]. matrix.node: [16, 18, 20]. Creates NxM job combinations. Exclude specific combinations: exclude: - os: windows node: 16. Include for additional configurations."
    },
    {
      "heading": "Caching",
      "text": "actions/cache@v4: cache dependencies by hash of lockfile. Keys: key: ${{ runner.os }}-node-${{ hashFiles(\\'**/package-lock.json\\') }}. Restore keys for partial matches. Cache npm, pip, Maven, Gradle, Docker layers."
    },
    {
      "heading": "Artifacts and Environments",
      "text": "actions/upload-artifact@v4: share build outputs between jobs. actions/download-artifact@v4: download in later jobs. Environments: deployment environments with protection rules. Review required before deployment to production environment."
    },
    {
      "heading": "Custom Actions and Reusable Workflows",
      "text": "Docker container action: Dockerfile with custom logic. JavaScript action: Node.js action. Composite action: combine multiple steps. Reusable workflows: call one workflow from another using workflow_call trigger."
    }
  ],
  "interviewAnswer": "Advanced Actions features: matrix builds, caching, artifacts, environments, custom actions, reusable workflows.",
  "interviewQuestions": [
    {
      "question": "What is a matrix build?",
      "answer": "Testing across multiple OS and version combinations in parallel, generating NxM job combinations."
    },
    {
      "question": "How does caching work in Actions?",
      "answer": "actions/cache saves and restores files (like node_modules) based on a key derived from lockfile hash."
    },
    {
      "question": "What are reusable workflows?",
      "answer": "Workflows that can be called from other workflows, avoiding duplication."
    },
    {
      "question": "GitHub Actions Advanced — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitHub Actions Advanced — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitHub Actions Advanced — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitHub Actions Advanced — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitHub Actions Advanced — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitHub Actions Advanced — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitHub Actions Advanced — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitHub Actions Advanced</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Matrix</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Multi-OS + versions</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Speed up deps</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Artifacts</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Share files between jobs</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Environments</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deploy with approval</text><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Advanced Actions: Matrix builds, caching, artifact</text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s, environments, custom actions, reusable workflow</text><text x=\"240\" y=\"199\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s.</text></svg>",
  "codeExamples": [
    {
      "title": "Matrix Workflow",
      "useCase": "Test across OS and Node versions.",
      "code": "jobs:\n  test:\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node: [16, 18, 20]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node }}",
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
      "question": "What is the purpose of actions/cache?",
      "options": [
        "Store build artifacts",
        "Speed up workflows by caching dependencies",
        "Cache Git history",
        "Store environment variables"
      ],
      "answer": 1,
      "explanation": "actions/cache speeds up workflows by saving and restoring dependencies (like node_modules) based on a cache key."
    },
    {
      "question": "GitHub Actions Advanced — What is the recommended approach?",
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
      "question": "GitHub Actions Advanced — What should be prioritized?",
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
      "question": "GitHub Actions Advanced — What is important for security?",
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
      "question": "GitHub Actions Advanced — How to ensure reliability?",
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
      "question": "GitHub Actions Advanced — What helps team collaboration?",
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
      "question": "GitHub Actions Advanced — What reduces errors most?",
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
      "question": "GitHub Actions Advanced — What improves speed?",
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
      "question": "GitHub Actions Advanced — What is key for monitoring?",
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
      "question": "GitHub Actions Advanced — What ensures quality?",
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
