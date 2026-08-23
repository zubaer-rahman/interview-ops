export const docker_env = {
  "id": "docker-env",
  "title": "ENV Instruction",
  "difficulty": "beginner",
  "estimatedMinutes": 5,
  "tldr": [
    "ENV sets environment variables in the image that persist in containers created from it.",
    "ENV Instruction is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting ENV Instruction leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "ENV Instruction works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "ENV is like writing permanent config into the image. ENV NODE_ENV=production means every container has it set. Override at runtime with docker run -e.",
  "deepDive": [
    {
      "heading": "ENV Details",
      "text": "ENV <key>=<value> set one var. ENV <key>=<value> <key2>=<value2> set multiple. ENV vs ARG: ENV persists at runtime, ARG is build-time only."
    },
    {
      "heading": "Best Practices",
      "text": "Set defaults with ENV. Override per environment at runtime. Do NOT use ENV for secrets (use Docker secrets or runtime env vars)."
    },
    {
      "heading": "Common Use Cases",
      "text": "ENV Instruction applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "ENV sets environment variables in the image that persist in containers created from it.",
  "interviewQuestions": [
    {
      "question": "What does ENV do?",
      "answer": "Sets environment variables that persist in the image and are available in containers."
    },
    {
      "question": "ENV vs ARG difference?",
      "answer": "ENV persists in image (runtime). ARG is build-time only."
    },
    {
      "question": "ENV Instruction — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "ENV Instruction — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "ENV Instruction — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "ENV Instruction — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "ENV Instruction — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "ENV Instruction — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "ENV Instruction — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "ENV Instruction — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ENV Instruction</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ENV: Set env vars in image. Override with -e. Do n</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ot use for secrets.</text></svg>",
  "codeExamples": [
    {
      "title": "ENV Example",
      "useCase": "",
      "code": "ENV NODE_ENV=production PORT=3000\nEXPOSE $PORT",
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
      "question": "ENV Instruction — What is the recommended approach?",
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
      "question": "ENV Instruction — What should be prioritized?",
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
      "question": "ENV Instruction — What is important for security?",
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
      "question": "ENV Instruction — How to ensure reliability?",
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
      "question": "ENV Instruction — What helps team collaboration?",
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
      "question": "ENV Instruction — What reduces errors most?",
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
      "question": "ENV Instruction — What improves speed?",
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
      "question": "ENV Instruction — What is key for monitoring?",
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
      "question": "ENV Instruction — What ensures quality?",
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
