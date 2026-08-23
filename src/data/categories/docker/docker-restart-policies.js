export const docker_restart_policies = {
  "id": "docker-restart-policies",
  "title": "Restart Policies",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "tldr": [
    "Restart policies control whether Docker automatically restarts a container when it exits or the daemon restarts.",
    "Restart Policies is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Restart Policies leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Restart Policies works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Restart policies are like an auto-reset button. Options: no (never restart), always (always restart), unless-stopped, on-failure (only on error exit codes).",
  "deepDive": [
    {
      "heading": "Policy Options",
      "text": "--restart=no: never (default). --restart=always: always regardless of exit code. --restart=unless-stopped: unless explicitly stopped. --restart=on-failure[:max-retries]: only on non-zero exit. docker update --restart=<policy> <container>."
    },
    {
      "heading": "Policy Behavior",
      "text": "Docker daemon restart: always and unless-stopped containers start. on-failure do not. Exponential backoff between retries. docker stop respected by unless-stopped."
    },
    {
      "heading": "Common Use Cases",
      "text": "Restart Policies applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Restart policies control whether Docker automatically restarts a container when it exits or the daemon restarts.",
  "interviewQuestions": [
    {
      "question": "What policy keeps a container running?",
      "answer": "--restart=always restarts regardless of exit code or daemon restart."
    },
    {
      "question": "Always vs unless-stopped?",
      "answer": "always restarts even after docker stop. unless-stopped respects explicit stop."
    },
    {
      "question": "Restart Policies — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Restart Policies — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Restart Policies — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Restart Policies — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Restart Policies — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Restart Policies — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Restart Policies — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Restart Policies — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Restart Policies</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Restart Policies: no, always, unless-stopped, on-f</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ailure. Exponential backoff. docker update changes</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> policy.</text></svg>",
  "codeExamples": [
    {
      "title": "Restart Example",
      "useCase": "",
      "code": "docker run -d --restart=unless-stopped nginx",
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
      "question": "Question?",
      "options": [
        "Answer A",
        "Answer B",
        "Answer C",
        "Answer D"
      ],
      "answer": 1,
      "explanation": "Explanation."
    },
    {
      "question": "Restart Policies — What is the recommended approach?",
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
      "question": "Restart Policies — What should be prioritized?",
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
      "question": "Restart Policies — What is important for security?",
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
      "question": "Restart Policies — How to ensure reliability?",
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
      "question": "Restart Policies — What helps team collaboration?",
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
      "question": "Restart Policies — What reduces errors most?",
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
      "question": "Restart Policies — What improves speed?",
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
      "question": "Restart Policies — What is key for monitoring?",
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
      "question": "Restart Policies — What ensures quality?",
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
