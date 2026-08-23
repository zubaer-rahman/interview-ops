export const github_actions_steps = {
  "id": "github-actions-steps",
  "title": "Steps",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Steps are individual tasks within a job. Each step runs in the same runner (shares the filesystem).",
    "Steps can be: shell commands (run:) or pre-built actions (uses:).",
    "Steps can access outputs of previous steps, set outputs, and have conditions (if).",
    "Steps works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Steps are the individual instructions in your job. \"Check out the code\" is a step. \"Install dependencies\" is a step. \"Run tests\" is a step. Steps are like items on a to-do list — they run in order, one after another, in the same environment.",
  "deepDive": [
    {
      "heading": "Step Types",
      "text": "run: execute shell commands directly in the runner. uses: use a pre-built action (from Marketplace or local repo). Uses format: owner/repo@ref (actions/checkout@v4). name: optional display name. id: step identifier for referencing outputs. working-directory: set working dir for run steps."
    },
    {
      "heading": "Step Properties",
      "text": "if: condition to run step (e.g., if: failure(), if: success(), if: always()). env: step-level environment variables. continue-on-error: true — step failure doesn\\'t fail the job. timeout-minutes: step timeout. shell: override shell (bash, pwsh, python, node)."
    },
    {
      "heading": "Step Outputs",
      "text": "Set: echo \"{key}={value}\" >> $GITHUB_OUTPUT. Access: ${{ steps.step_id.outputs.key }}. Steps share filesystem but not environment by default (use export or GITHUB_ENV)."
    }
  ],
  "interviewAnswer": "Steps are individual tasks within a job. Each step runs in the same runner (shares the filesystem).",
  "interviewQuestions": [
    {
      "question": "What is a step in GitHub Actions?",
      "answer": "An individual task in a job — either a shell command (run) or a pre-built action (uses)."
    },
    {
      "question": "How to make a step conditional?",
      "answer": "Use the if property: if: github.ref == \\'refs/heads/main\\'."
    },
    {
      "question": "How do steps share data?",
      "answer": "Via the filesystem (same working directory), step outputs ($GITHUB_OUTPUT), or environment files ($GITHUB_ENV)."
    },
    {
      "question": "Steps — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Steps — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Steps — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Steps — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Steps — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Steps — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Steps — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Steps</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 1: Checkout</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">actions/checkout@v4</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 2: Install</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">npm ci</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 3: Test</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">npm test</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Step 4: Deploy</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deploy action</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Steps: Individual tasks in a job. run: for command</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s, uses: for actions. Share filesystem. Run sequen</text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tially.</text></svg>",
  "codeExamples": [
    {
      "title": "Step Examples",
      "useCase": "Different step types.",
      "code": "steps:\n  - name: Checkout code\n    uses: actions/checkout@v4\n  - name: Install deps\n    run: npm ci\n  - name: Conditional step\n    if: github.ref == 'refs/heads/main'\n    run: echo \"Deploying...\"",
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
      "question": "What does the continue-on-error property do?",
      "options": [
        "Stops the job",
        "Continues job even if step fails",
        "Retries the step",
        "Skips the step"
      ],
      "answer": 1,
      "explanation": "continue-on-error: true allows the job to continue even if this step fails (marks as warning)."
    },
    {
      "question": "Steps — What is the recommended approach?",
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
      "question": "Steps — What should be prioritized?",
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
      "question": "Steps — What is important for security?",
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
      "question": "Steps — How to ensure reliability?",
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
      "question": "Steps — What helps team collaboration?",
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
      "question": "Steps — What reduces errors most?",
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
      "question": "Steps — What improves speed?",
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
      "question": "Steps — What is key for monitoring?",
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
      "question": "Steps — What ensures quality?",
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
