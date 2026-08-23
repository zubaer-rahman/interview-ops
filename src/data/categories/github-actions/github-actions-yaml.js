export const github_actions_yaml = {
  "id": "github-actions-yaml",
  "title": "Workflow YAML Syntax",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "GitHub Actions workflows use YAML (YAML Ain't Markup Language) for configuration — a human-readable data serialization format.",
    "Key YAML concepts: indentation (spaces, not tabs), key-value pairs, lists, nested objects, multi-line strings.",
    "Actions YAML uses specific keywords: name, on, jobs, runs-on, steps, uses, run, with, env, if, needs.",
    "Workflow YAML Syntax works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Workflow YAML is like filling out a structured form for GitHub. Every line has meaning: indentation shows hierarchy, dashes start lists, colons separate keys from values. Getting indentation wrong is the most common mistake — YAML uses spaces, never tabs.",
  "deepDive": [
    {
      "heading": "YAML Basics",
      "text": "Scalars: strings (with/without quotes), numbers, booleans. Lists (arrays): items start with dash and space. Dictionaries (objects): key: value pairs. Nested: indent with 2 spaces. Multi-line: | (literal block) or > (folded block). Comments: #. Anchors: & and * for reusing values."
    },
    {
      "heading": "Workflow Keywords",
      "text": "name: workflow display name. run-name: workflow run name (dynamic). on: trigger events. env: global environment variables. defaults: default settings. concurrency: cancel/queue control. permissions: job permissions. jobs: map of job IDs. timeout-minutes: max run time."
    },
    {
      "heading": "Common Pitfalls",
      "text": "Tabs vs spaces (always use spaces). Wrong indentation level. Missing colons. Incorrect boolean values (true/false lowercase in some contexts). Special characters in strings (quote them). Mismatched quotes. Overly long lines."
    }
  ],
  "interviewAnswer": "GitHub Actions workflows use YAML (YAML Ain't Markup Language) for configuration — a human-readable data serialization format.",
  "interviewQuestions": [
    {
      "question": "What is YAML?",
      "answer": "A human-readable data serialization format used for GitHub Actions workflow configuration."
    },
    {
      "question": "What is the most common YAML mistake?",
      "answer": "Using tabs instead of spaces for indentation. YAML requires spaces."
    },
    {
      "question": "How to write a multi-line string in YAML?",
      "answer": "Use | (literal block, preserves newlines) or > (folded block, wraps lines)."
    },
    {
      "question": "Workflow YAML Syntax — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Workflow YAML Syntax — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Workflow YAML Syntax — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Workflow YAML Syntax — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Workflow YAML Syntax — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Workflow YAML Syntax — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Workflow YAML Syntax — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Workflow YAML Syntax</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">name: CI</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Workflow name</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">on: [push]</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Trigger event</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">jobs:</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Job definitions</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">  build:</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Job ID</text><rect x=\"10\" y=\"155\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"80\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">    steps:</text><text x=\"80\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Step list</text><text x=\"240\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">YAML: Indentation-based format. Spaces only. Synta</text><text x=\"240\" y=\"202\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">x: name, on, jobs, steps. Most common error: tabs </text><text x=\"240\" y=\"214\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">instead of spaces.</text></svg>",
  "codeExamples": [
    {
      "title": "YAML Example",
      "useCase": "Workflow with common syntax.",
      "code": "name: Deploy\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build",
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
      "question": "What indentation is used in YAML?",
      "options": [
        "Tabs",
        "Spaces (usually 2)",
        "4 spaces only",
        "No indentation"
      ],
      "answer": 1,
      "explanation": "YAML uses spaces for indentation (traditionally 2 spaces). Tabs are NOT allowed."
    },
    {
      "question": "Workflow YAML Syntax — What is the recommended approach?",
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
      "question": "Workflow YAML Syntax — What should be prioritized?",
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
      "question": "Workflow YAML Syntax — What is important for security?",
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
      "question": "Workflow YAML Syntax — How to ensure reliability?",
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
      "question": "Workflow YAML Syntax — What helps team collaboration?",
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
      "question": "Workflow YAML Syntax — What reduces errors most?",
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
      "question": "Workflow YAML Syntax — What improves speed?",
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
      "question": "Workflow YAML Syntax — What is key for monitoring?",
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
      "question": "Workflow YAML Syntax — What ensures quality?",
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
