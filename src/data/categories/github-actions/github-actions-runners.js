export const github_actions_runners = {
  "id": "github-actions-runners",
  "title": "Runners",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Runners are the virtual machines or containers that execute GitHub Actions jobs.",
    "GitHub-hosted runners: Ubuntu, Windows, macOS provided by GitHub (free minutes, then pay-as-you-go).",
    "Runners are selected using the runs-on keyword in job definitions.",
    "Runners works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A runner is the computer that runs your workflow. When a workflow triggers, GitHub spins up a fresh virtual machine (runner), runs your jobs on it, and then destroys it. You can use GitHub's computers (GitHub-hosted) or your own (self-hosted).",
  "deepDive": [
    {
      "heading": "GitHub-Hosted Runners",
      "text": "Ubuntu: ubuntu-latest (22.04), ubuntu-24.04, ubuntu-22.04, ubuntu-20.04. Windows: windows-latest (2022), windows-2022, windows-2019. macOS: macos-latest (14), macos-14, macos-13. Each has pre-installed software (Node, Python, Docker, etc.). 2-core CPU, 7GB RAM default (larger sizes available)."
    },
    {
      "heading": "Runner Sizing",
      "text": "Standard: 2-core, 7GB RAM, 14GB SSD. Large (paid): 4-core/16GB, 8-core/32GB, 16-core/64GB. Use larger runners for: resource-intensive builds, Docker builds, parallel test execution. Pricing: per-minute for larger runners (Linux ~$0.008/min for 4-core)."
    },
    {
      "heading": "Runner Selection",
      "text": "runs-on: ubuntu-latest (always latest version). runs-on: [self-hosted, linux, x64, gpu] (label matching for self-hosted). Label groups: OS labels, architecture labels, custom labels. Runner can be selected by multiple labels."
    }
  ],
  "interviewAnswer": "Runners are the virtual machines or containers that execute GitHub Actions jobs.",
  "interviewQuestions": [
    {
      "question": "What is a GitHub Actions runner?",
      "answer": "A virtual machine that executes workflow jobs. GitHub-hosted (managed) or self-hosted (your infrastructure)."
    },
    {
      "question": "What OS options are available for GitHub-hosted runners?",
      "answer": "Ubuntu Linux, Windows Server, macOS."
    },
    {
      "question": "How to select a specific runner size?",
      "answer": "Runs on standard by default. Use runs-on: ubuntu-latest-4core for larger sizes (paid plans)."
    },
    {
      "question": "Runners — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Runners — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Runners — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Runners — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Runners — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Runners — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Runners — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Runners</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ubuntu</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linux runner</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Windows</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Windows runner</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">macOS</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mac runner</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Self-Hosted</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Your hardware</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Runners: VMs executing jobs. GitHub-hosted (Ubuntu</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, Windows, macOS) or self-hosted. Selected via run</text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s-on.</text></svg>",
  "codeExamples": [
    {
      "title": "Runner Selection",
      "useCase": "Choose runner types.",
      "code": "jobs:\n  build:\n    runs-on: ubuntu-latest\n  test-win:\n    runs-on: windows-latest\n  deploy:\n    runs-on: [self-hosted, production]",
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
      "question": "What does runs-on: ubuntu-latest select?",
      "options": [
        "Latest Ubuntu version available",
        "Ubuntu 20.04",
        "A specific commit",
        "Any Linux"
      ],
      "answer": 0,
      "explanation": "ubuntu-latest points to the latest stable Ubuntu version provided by GitHub Actions."
    },
    {
      "question": "Runners — What is the recommended approach?",
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
      "question": "Runners — What should be prioritized?",
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
      "question": "Runners — What is important for security?",
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
      "question": "Runners — How to ensure reliability?",
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
      "question": "Runners — What helps team collaboration?",
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
      "question": "Runners — What reduces errors most?",
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
      "question": "Runners — What improves speed?",
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
      "question": "Runners — What is key for monitoring?",
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
      "question": "Runners — What ensures quality?",
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
