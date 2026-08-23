export const github_actions_composite = {
  "id": "github-actions-composite",
  "title": "Composite Actions",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Composite actions allow you to combine multiple workflow steps into a single reusable action.",
    "Composite actions are defined in an action.yml file with a runs.using: \"composite\" section.",
    "Composite actions can contain: run steps, uses steps (even other composite actions), inputs, outputs.",
    "Composite Actions works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A composite action is like creating a macro for your workflow. If you always do the same 5 steps (checkout, install, lint, test, build), you can bundle them into one reusable action. Then any workflow just uses my-actions/setup@v1 instead of repeating all 5 steps.",
  "deepDive": [
    {
      "heading": "Composite Action Structure",
      "text": "action.yml: name, description, inputs (optional), outputs (optional). runs: using: \"composite\" and steps: keyword. Steps are defined like workflow steps. Uses composite actions can use other actions. Inputs accessible via ${{ inputs.name }}. Outputs via ${{ steps.id.outputs.key }} and echo to $GITHUB_OUTPUT."
    },
    {
      "heading": "Composite vs Workflow",
      "text": "Composite: called from within a job (one step). More flexible, can use inputs/outputs. Workflow: entire pipeline of jobs. Composite actions reduce duplication within a job. Reusable workflows orchestrate across jobs."
    },
    {
      "heading": "Best Practices",
      "text": "Name composite actions descriptively. Document inputs and outputs. Version with tags. Use shell: bash explicitly in run steps. Keep focused — one responsibility. Test composite actions in isolation. Publish to Marketplace or use local path (./.github/actions/my-action)."
    }
  ],
  "interviewAnswer": "Composite actions allow you to combine multiple workflow steps into a single reusable action.",
  "interviewQuestions": [
    {
      "question": "What is a composite action?",
      "answer": "An action that bundles multiple workflow steps into a single reusable unit."
    },
    {
      "question": "Where is a composite action defined?",
      "answer": "In an action.yml file with runs.using: \"composite\" at the root or in .github/actions/."
    },
    {
      "question": "How to use a local composite action?",
      "answer": "uses: ./.github/actions/my-action (relative path from repo root)."
    },
    {
      "question": "Composite Actions — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Composite Actions — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Composite Actions — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Composite Actions — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Composite Actions — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Composite Actions — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Composite Actions — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Composite Actions</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Workflow</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Calls composite action</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Composite Action</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bundled steps</text><rect x=\"180\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"250\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 1: Checkout</text><text x=\"250\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nested step</text><rect x=\"180\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"250\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 2: Install</text><text x=\"250\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nested step</text><text x=\"240\" y=\"150\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Composite Actions: Bundle multiple steps into one </text><text x=\"240\" y=\"162\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">reusable action. Defined in action.yml. Inputs/out</text><text x=\"240\" y=\"174\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">puts supported.</text></svg>",
  "codeExamples": [
    {
      "title": "Composite action.yml",
      "useCase": "Composite action definition.",
      "code": "name: \"Setup Node App\"\ndescription: \"Checkout, install, lint\"\ninputs:\n  node-version:\n    required: true\n    default: \"20\"\nruns:\n  using: \"composite\"\n  steps:\n    - uses: actions/checkout@v4\n    - uses: actions/setup-node@v4\n      with:\n        node-version: ${{ inputs.node-version }}\n    - run: npm ci && npm run lint\n      shell: bash",
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
      "question": "What keyword defines a composite action?",
      "options": [
        "runs.using: \"docker\"",
        "runs.using: \"composite\"",
        "type: composite",
        "kind: composite"
      ],
      "answer": 1,
      "explanation": "Composite actions use runs.using: \"composite\" in action.yml."
    },
    {
      "question": "Composite Actions — What is the recommended approach?",
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
      "question": "Composite Actions — What should be prioritized?",
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
      "question": "Composite Actions — What is important for security?",
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
      "question": "Composite Actions — How to ensure reliability?",
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
      "question": "Composite Actions — What helps team collaboration?",
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
      "question": "Composite Actions — What reduces errors most?",
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
      "question": "Composite Actions — What improves speed?",
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
      "question": "Composite Actions — What is key for monitoring?",
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
      "question": "Composite Actions — What ensures quality?",
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
