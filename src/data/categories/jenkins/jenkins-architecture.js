export const jenkins_architecture = {
  "id": "jenkins-architecture",
  "title": "Jenkins Architecture",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Jenkins is an open-source automation server with a master-agent (controller-agent) architecture.",
    "Master (Controller): manages jobs, schedules builds, serves UI, stores configurations. Agents: execute build jobs on separate machines.",
    "Jenkins uses a plugin ecosystem with 1800+ plugins for integration with almost any tool.",
    "Jenkins Architecture works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Jenkins architecture is like a manager (master) directing workers (agents). The manager assigns tasks, tracks progress, and provides reports. Workers do the actual work on their own machines. The manager stores all blueprints (configs) and history (build logs).",
  "deepDive": [
    {
      "heading": "Master (Controller)",
      "text": "Central coordination point. Schedules builds, monitors agents, serves web UI, stores configuration in XML files. Single point of failure without HA. Typically runs on its own server. JENKINS_HOME directory stores all data."
    },
    {
      "heading": "Agents (Nodes)",
      "text": "Execute build jobs assigned by master. Can run on different OS, hardware, or containers. Connect to master via TCP (JNLP) or SSH. Each agent has labels for job targeting. Ephemeral agents for cloud/container environments."
    },
    {
      "heading": "Plugin Architecture",
      "text": "Plugins extend Jenkins functionality. Installed via Plugin Manager. Types: Build tools (Maven, Gradle), SCM (Git, SVN), Pipeline (workflow), Notifications (Slack, Email), Authentication (LDAP, SAML). Plugin dependencies managed automatically."
    }
  ],
  "interviewAnswer": "Jenkins is an open-source automation server with a master-agent (controller-agent) architecture.",
  "interviewQuestions": [
    {
      "question": "What are the two main components of Jenkins architecture?",
      "answer": "Master (controller) manages jobs; agents execute builds on separate machines."
    },
    {
      "question": "What is JENKINS_HOME?",
      "answer": "The directory where Jenkins stores all configuration, job definitions, build logs, and plugins."
    },
    {
      "question": "How do agents connect to the master?",
      "answer": "Via TCP (JNLP protocol) or SSH connection."
    },
    {
      "question": "Jenkins Architecture — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkins Architecture — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkins Architecture — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkins Architecture — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkins Architecture — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkins Architecture — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkins Architecture — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkins Architecture</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkins Master</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Job management</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent 1</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linux builds</text><rect x=\"180\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent 2</text><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Windows builds</text><rect x=\"180\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent 3</text><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">macOS builds</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jenkins Architecture: Master manages jobs, agents </text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">execute builds. Plugin ecosystem. JENKINS_HOME sto</text><text x=\"240\" y=\"164\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">res all config.</text></svg>",
  "codeExamples": [
    {
      "title": "Jenkins CLI",
      "useCase": "Basic Jenkins commands.",
      "code": "java -jar jenkins.war\nhttp://localhost:8080\ncat ~/.jenkins/config.xml",
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
      "question": "What is JENKINS_HOME?",
      "options": [
        "Jenkins installation directory",
        "Configuration and data storage directory",
        "Plugin directory",
        "Log directory"
      ],
      "answer": 1,
      "explanation": "JENKINS_HOME stores all Jenkins configuration, jobs, build logs, and plugins."
    },
    {
      "question": "Jenkins Architecture — What is the recommended approach?",
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
      "question": "Jenkins Architecture — What should be prioritized?",
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
      "question": "Jenkins Architecture — What is important for security?",
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
      "question": "Jenkins Architecture — How to ensure reliability?",
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
      "question": "Jenkins Architecture — What helps team collaboration?",
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
      "question": "Jenkins Architecture — What reduces errors most?",
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
      "question": "Jenkins Architecture — What improves speed?",
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
      "question": "Jenkins Architecture — What is key for monitoring?",
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
      "question": "Jenkins Architecture — What ensures quality?",
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
