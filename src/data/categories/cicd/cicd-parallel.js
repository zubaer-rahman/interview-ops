export const cicd_parallel = {
  "id": "cicd-parallel",
  "title": "Parallel Execution",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Parallel execution runs independent pipeline jobs simultaneously to reduce total pipeline duration.",
    "Strategies: matrix (multi-version), fan-out (split tests), parallel stages (independent tasks).",
    "Parallelism trades compute resources for speed — runs faster but uses more concurrent runners.",
    "Parallel execution dramatically shrinks pipeline duration, enabling faster feedback loops for developers."
  ],
  "laymanDefinition": "Parallel execution is like having multiple checkout lines at a supermarket. Instead of one line moving slowly (sequential), multiple lines run at the same time (parallel). Each line handles different items, and everything finishes faster.",
  "deepDive": [
    {
      "heading": "Matrix Strategy",
      "text": "Test across OS × version combinations. Example: ubuntu × Node 16,18,20 + windows × Node 16,18,20 = 6 parallel jobs. Useful for compatibility testing. Exclude known incompatibilities. Include additional configurations."
    },
    {
      "heading": "Parallel Stages",
      "text": "Independent stages run concurrently: lint + unit tests + security scan all at once. Dependent stages must wait: build → (lint + unit_test + security) parallel → deploy. Use dependency graphs to express relationships."
    },
    {
      "heading": "Test Splitting",
      "text": "Split large test suites across multiple jobs. By file: test_1.py runs in job A, test_2.py in job B. By timing: balance splits by historical test duration. Tools: jest --shard, pytest-xdist (distributed), playwright --shard."
    }
  ],
  "interviewAnswer": "Parallel execution runs independent pipeline jobs simultaneously to reduce total pipeline duration.",
  "interviewQuestions": [
    {
      "question": "What is a matrix build?",
      "answer": "Running identical jobs across different OS/version combinations simultaneously."
    },
    {
      "question": "What is test splitting?",
      "answer": "Dividing a large test suite across multiple parallel jobs for faster execution."
    },
    {
      "question": "What is a dependency graph in pipelines?",
      "answer": "A DAG that defines which jobs depend on which, enabling parallel execution of independent jobs."
    },
    {
      "question": "Parallel Execution — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Parallel Execution — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Parallel Execution — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Parallel Execution — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Parallel Execution — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Parallel Execution — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Parallel Execution — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Parallel Execution</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Job A: Lint</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Runs in parallel</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Job B: Unit Tests</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Runs in parallel</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Job C: Security</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Runs in parallel</text><rect x=\"10\" y=\"125\" width=\"200\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"110\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dependent: Deploy</text><text x=\"110\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Waits for A+B+C</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Parallel Execution: Matrix builds, test splitting,</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> parallel stages. Faster pipelines, more resource </text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">usage.</text></svg>",
  "codeExamples": [
    {
      "title": "Matrix Jobs",
      "useCase": "GitHub Actions matrix strategy.",
      "code": "strategy:\n  matrix:\n    os: [ubuntu-latest, windows-latest]\n    node: [16, 18, 20]\nruns-on: ${{ matrix.os }}",
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
      "question": "What is the tradeoff of parallel execution?",
      "options": [
        "Slower feedback",
        "More resources for faster execution",
        "Less test coverage",
        "Simpler debugging"
      ],
      "answer": 1,
      "explanation": "Parallel execution uses more concurrent resources (runners) but reduces total pipeline execution time."
    },
    {
      "question": "Parallel Execution — What is the recommended approach?",
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
      "question": "Parallel Execution — What should be prioritized?",
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
      "question": "Parallel Execution — What is important for security?",
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
      "question": "Parallel Execution — How to ensure reliability?",
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
      "question": "Parallel Execution — What helps team collaboration?",
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
      "question": "Parallel Execution — What reduces errors most?",
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
      "question": "Parallel Execution — What improves speed?",
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
      "question": "Parallel Execution — What is key for monitoring?",
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
      "question": "Parallel Execution — What ensures quality?",
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
