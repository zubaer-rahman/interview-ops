export const docker_dockerfile_syntax = {
  "id": "docker-dockerfile-syntax",
  "title": "Dockerfile Syntax",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "A Dockerfile is a text file with instructions for building a Docker image. Each instruction is a command followed by arguments.",
    "Dockerfile Syntax is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Dockerfile Syntax leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Dockerfile Syntax works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Dockerfile syntax is like writing a recipe. Each line is an instruction: FROM (base), RUN (do something), COPY (add files), CMD (serve). FROM must be first. Comments start with #. Instructions conventionally UPPERCASE.",
  "deepDive": [
    {
      "heading": "Basic Instructions",
      "text": "FROM <image>: base image (required first). RUN <command>: execute command. COPY <src> <dest>: copy files. ADD: like COPY + tar extraction + URL. CMD/ENTRYPOINT: container command. WORKDIR: working directory. ENV: environment variable."
    },
    {
      "heading": "Best Practices",
      "text": "Use specific base image tags. Minimize layers (combine RUN). Use .dockerignore. Multi-stage builds. Pin package versions. Use LABEL for metadata. Use HEALTHCHECK for production."
    },
    {
      "heading": "Common Use Cases",
      "text": "Dockerfile Syntax applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "A Dockerfile is a text file with instructions for building a Docker image. Each instruction is a command followed by arguments.",
  "interviewQuestions": [
    {
      "question": "First instruction in Dockerfile?",
      "answer": "FROM specifies the base image. Must be the first instruction."
    },
    {
      "question": "What does WORKDIR do?",
      "answer": "Sets the working directory for subsequent RUN, CMD, ENTRYPOINT, COPY, ADD instructions."
    },
    {
      "question": "Dockerfile Syntax — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Dockerfile Syntax — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Dockerfile Syntax — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Dockerfile Syntax — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Dockerfile Syntax — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Dockerfile Syntax — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Dockerfile Syntax — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Dockerfile Syntax — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Dockerfile Syntax</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Dockerfile Syntax: UPPERCASE instructions, FROM fi</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rst, comments with #. Each instruction creates a l</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ayer.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Dockerfile",
      "useCase": "",
      "code": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
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
      "question": "Dockerfile Syntax — What is the recommended approach?",
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
      "question": "Dockerfile Syntax — What should be prioritized?",
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
      "question": "Dockerfile Syntax — What is important for security?",
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
      "question": "Dockerfile Syntax — How to ensure reliability?",
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
      "question": "Dockerfile Syntax — What helps team collaboration?",
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
      "question": "Dockerfile Syntax — What reduces errors most?",
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
      "question": "Dockerfile Syntax — What improves speed?",
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
      "question": "Dockerfile Syntax — What is key for monitoring?",
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
      "question": "Dockerfile Syntax — What ensures quality?",
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
