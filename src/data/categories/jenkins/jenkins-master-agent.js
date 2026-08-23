export const jenkins_master_agent = {
  "id": "jenkins-master-agent",
  "title": "Master-Agent Architecture",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Jenkins master-agent architecture separates management (master) from execution (agents) for scalability and security.",
    "Master-Agent Architecture is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Master-Agent Architecture leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Master-Agent Architecture works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "The master is the boss that assigns work and tracks progress. Agents are the workers that do the actual building. This separation means: the boss stays responsive while workers do heavy lifting. You can add more workers as needed.",
  "deepDive": [
    {
      "heading": "Master Responsibilities",
      "text": "Serves web UI. Manages jobs and plugins. Stores configuration (JENKINS_HOME). Schedules builds to agents. Tracks build status and history. Manages credentials. Single point of failure (HA available via plugins)."
    },
    {
      "heading": "Agent Responsibilities",
      "text": "Checkout source code. Execute build steps. Run tests. Produce artifacts. Communicate status back to master. No configuration stored locally. Ephemeral or permanent. Can run different OS than master."
    },
    {
      "heading": "Common Use Cases",
      "text": "Master-Agent Architecture applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Jenkins master-agent architecture separates management (master) from execution (agents) for scalability and security.",
  "interviewQuestions": [
    {
      "question": "Why separate master and agent?",
      "answer": "Scalability (add agents), security (agents don't need Jenkins config), resource isolation."
    },
    {
      "question": "What happens if an agent disconnects?",
      "answer": "Build may fail or pause. Config is safe on master. Pipeline is durable (resumes on reconnect)."
    },
    {
      "question": "Master-Agent Architecture — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Master-Agent Architecture — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Master-Agent Architecture — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Master-Agent Architecture — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Master-Agent Architecture — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Master-Agent Architecture — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Master-Agent Architecture — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Master-Agent Architecture — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Master-Agent Architecture</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Master-Agent: Master manages, agents execute. Scal</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">able, secure, durable. Pipeline state persists acr</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">oss restarts.</text></svg>",
  "codeExamples": [
    {
      "title": "Agent Connect",
      "useCase": "",
      "code": "java -jar agent.jar -jnlpUrl http://jenkins:8080/computer/agent/slave-agent.jnlp -secret @secret-file",
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
      "question": "Master-Agent Architecture — What is the recommended approach?",
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
      "question": "Master-Agent Architecture — What should be prioritized?",
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
      "question": "Master-Agent Architecture — What is important for security?",
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
      "question": "Master-Agent Architecture — How to ensure reliability?",
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
      "question": "Master-Agent Architecture — What helps team collaboration?",
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
      "question": "Master-Agent Architecture — What reduces errors most?",
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
      "question": "Master-Agent Architecture — What improves speed?",
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
      "question": "Master-Agent Architecture — What is key for monitoring?",
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
      "question": "Master-Agent Architecture — What ensures quality?",
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
