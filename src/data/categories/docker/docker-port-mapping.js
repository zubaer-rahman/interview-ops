export const docker_port_mapping = {
  "id": "docker-port-mapping",
  "title": "Port Mapping",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Port mapping exposes container ports to the host, making containerized services accessible from outside Docker.",
    "Port Mapping is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Port Mapping leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Port Mapping works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Port mapping is like opening a door between container and outside world. -p 8080:80 means \"forward host port 8080 to container port 80.\"",
  "deepDive": [
    {
      "heading": "Port Mapping Syntax",
      "text": "-p <host-port>:<container-port> (TCP). /udp for UDP. /sctp for SCTP. -p <ip>:<host>:<container> (bind IP). -p 8080-8090:8080-8090 (ranges). -P publishes all exposed ports to random host ports."
    },
    {
      "heading": "Port Mapping Details",
      "text": "Host port must be unique. Container port can be same across containers. docker port <container> shows mappings. Kernel iptables NAT forwards traffic."
    },
    {
      "heading": "Common Use Cases",
      "text": "Port Mapping applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Port mapping exposes container ports to the host, making containerized services accessible from outside Docker.",
  "interviewQuestions": [
    {
      "question": "How to map port 80 to 8080?",
      "answer": "docker run -p 8080:80 nginx."
    },
    {
      "question": "What does -P do?",
      "answer": "Publishes all container ports (from EXPOSE) to random high-numbered host ports."
    },
    {
      "question": "Port Mapping — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Port Mapping — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Port Mapping — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Port Mapping — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Port Mapping — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Port Mapping — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Port Mapping — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Port Mapping — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Port Mapping</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Port Mapping: -p host:container. Exposes container</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s to network. -P publishes all exposed ports.</text></svg>",
  "codeExamples": [
    {
      "title": "Port Mapping",
      "useCase": "",
      "code": "docker run -d -p 8080:80 -p 443:443 nginx",
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
      "question": "Port Mapping — What is the recommended approach?",
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
      "question": "Port Mapping — What should be prioritized?",
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
      "question": "Port Mapping — What is important for security?",
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
      "question": "Port Mapping — How to ensure reliability?",
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
      "question": "Port Mapping — What helps team collaboration?",
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
      "question": "Port Mapping — What reduces errors most?",
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
      "question": "Port Mapping — What improves speed?",
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
      "question": "Port Mapping — What is key for monitoring?",
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
      "question": "Port Mapping — What ensures quality?",
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
