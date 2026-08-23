export const github_actions_reusable = {
  "id": "github-actions-reusable",
  "title": "Reusable Workflows",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Reusable workflows allow you to call one workflow from another, avoiding duplication across repositories.",
    "Called via the uses keyword in a job: uses: owner/repo/.github/workflows/workflow.yml@ref.",
    "The called workflow must have on: workflow_call trigger. Inputs and secrets are passed explicitly.",
    "Reusable Workflows works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Reusable workflows are like function calls for your CI/CD. Instead of copying the same CI workflow into every repo in your organization, you define it once and call it from each repo. Changes to the central workflow automatically apply everywhere.",
  "deepDive": [
    {
      "heading": "Calling Workflow",
      "text": "Caller job: uses: org/repo/.github/workflows/ci.yml@v1. Must specify with: for inputs and secrets: inherit or secrets: for secrets. Called workflow: on: workflow_call: inputs: (define inputs) secrets: (define secrets). Called workflow on any branch or tag."
    },
    {
      "heading": "Inputs & Secrets",
      "text": "Inputs: on: workflow_call: inputs: name: description: required: type: string. Secrets: on: workflow_call: secrets: pass-to-secret: required: true. Pass: with: name: value and secrets: inherit or secrets: MY_SECRET."
    },
    {
      "heading": "Limitations",
      "text": "Nested calls: max 4 levels deep. Secrets: must be explicitly declared in called workflow. Cannot call workflows from private repos in public repos (unless same owner). Matrix: cannot pass matrix strategy to called workflow (unfold matrix in caller)."
    },
    {
      "heading": "Use Cases",
      "text": "Standard CI pipeline shared across all repos. Deployment workflow called with environment as input. Security scan workflow with shared configuration. Notification workflow for pipeline results."
    }
  ],
  "interviewAnswer": "Reusable workflows allow you to call one workflow from another, avoiding duplication across repositories.",
  "interviewQuestions": [
    {
      "question": "What are reusable workflows?",
      "answer": "Workflows that can be called from other workflows using the workflow_call trigger."
    },
    {
      "question": "How to pass secrets to a reusable workflow?",
      "answer": "Declare in called workflow\\'s on.workflow_call.secrets and pass with secrets: inherit or secrets: MY_SECRET."
    },
    {
      "question": "What is the nesting limit for reusable workflows?",
      "answer": "A maximum of 4 levels of nested workflow calls."
    },
    {
      "question": "Reusable Workflows — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Reusable Workflows — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Reusable Workflows — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Reusable Workflows — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Reusable Workflows — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Reusable Workflows — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Reusable Workflows — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Reusable Workflows</text><rect x=\"10\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"90\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Repo A Workflow</text><text x=\"90\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Calls shared CI</text><line x1=\"170\" y1=\"48\" x2=\"190\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"200\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"280\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shared CI Workflow</text><text x=\"280\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Defined once</text><rect x=\"200\" y=\"65\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"280\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Repo B Workflow</text><text x=\"280\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Calls shared CI</text><text x=\"240\" y=\"130\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Reusable Workflows: Call workflows from other repo</text><text x=\"240\" y=\"142\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s. workflow_call trigger. Inputs and secrets passe</text><text x=\"240\" y=\"154\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">d explicitly.</text></svg>",
  "codeExamples": [
    {
      "title": "Call Reusable Workflow",
      "useCase": "Caller workflow.",
      "code": "jobs:\n  ci:\n    uses: my-org/shared-workflows/.github/workflows/ci.yml@v1\n    with:\n      node-version: 20\n    secrets: inherit",
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
      "question": "What trigger is required for reusable workflows?",
      "options": [
        "workflow_dispatch",
        "workflow_call",
        "workflow_run",
        "repository_dispatch"
      ],
      "answer": 1,
      "explanation": "Reusable workflows must specify on: workflow_call to be callable from other workflows."
    },
    {
      "question": "Reusable Workflows — What is the recommended approach?",
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
      "question": "Reusable Workflows — What should be prioritized?",
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
      "question": "Reusable Workflows — What is important for security?",
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
      "question": "Reusable Workflows — How to ensure reliability?",
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
      "question": "Reusable Workflows — What helps team collaboration?",
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
      "question": "Reusable Workflows — What reduces errors most?",
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
      "question": "Reusable Workflows — What improves speed?",
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
      "question": "Reusable Workflows — What is key for monitoring?",
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
      "question": "Reusable Workflows — What ensures quality?",
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
