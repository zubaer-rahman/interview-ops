export const docker_what_is_docker = {
  "id": "docker-what-is-docker",
  "title": "What is Docker?",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Docker is a platform for developing, shipping, and running applications inside lightweight, portable containers.",
    "What is Docker? is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting What is Docker? leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "What is Docker? works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Docker is like a shipping container for your app. It packages your application with everything it needs (code, runtime, libraries) into a standard unit that runs consistently on any machine.",
  "deepDive": [
    {
      "heading": "Containerization Concept",
      "text": "Containers are isolated environments that share the host OS kernel. Unlike VMs, they do not include a guest OS, making them lightweight (megabytes vs gigabytes). Containers start in seconds and use fewer resources. Docker standardizes container creation and management across dev, test, and production."
    },
    {
      "heading": "Docker Ecosystem",
      "text": "Docker Engine: core runtime that builds and runs containers. Docker Hub: cloud-based registry for sharing images. Docker Compose: multi-container orchestration. Docker Desktop: GUI for desktop containers. Docker Swarm: native clustering and orchestration."
    },
    {
      "heading": "Common Use Cases",
      "text": "What is Docker? applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Docker is a platform for developing, shipping, and running applications inside lightweight, portable containers.",
  "interviewQuestions": [
    {
      "question": "What is Docker?",
      "answer": "A platform for developing, shipping, and running applications in lightweight containers."
    },
    {
      "question": "How is Docker different from a VM?",
      "answer": "Containers share the host OS kernel (no guest OS), making them smaller and faster to start than VMs."
    },
    {
      "question": "What is Docker? — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "What is Docker? — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "What is Docker? — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "What is Docker? — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "What is Docker? — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "What is Docker? — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "What is Docker? — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "What is Docker? — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">What is Docker?</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Docker: Container platform for app packaging and d</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">eployment. Lightweight, portable, consistent acros</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s environments.</text></svg>",
  "codeExamples": [
    {
      "title": "Hello Docker",
      "useCase": "",
      "code": "docker run hello-world",
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
      "question": "What is Docker? — What is the recommended approach?",
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
      "question": "What is Docker? — What should be prioritized?",
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
      "question": "What is Docker? — What is important for security?",
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
      "question": "What is Docker? — How to ensure reliability?",
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
      "question": "What is Docker? — What helps team collaboration?",
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
      "question": "What is Docker? — What reduces errors most?",
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
      "question": "What is Docker? — What improves speed?",
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
      "question": "What is Docker? — What is key for monitoring?",
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
      "question": "What is Docker? — What ensures quality?",
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
