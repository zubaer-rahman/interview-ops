export const jenkins_plugins = {
  "id": "jenkins-plugins",
  "title": "Jenkins Plugins",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Jenkins has over 1,800 plugins that integrate with virtually every CI/CD tool, platform, and service.",
    "Jenkins Plugins is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Jenkins Plugins leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Jenkins Plugins works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Plugins are like apps for Jenkins. Need to deploy to AWS? Install the AWS plugin. Need Slack notifications? Install Slack plugin. Need to build Docker images? Install Docker plugin. Plugins add new capabilities to Jenkins.",
  "deepDive": [
    {
      "heading": "Plugin Categories",
      "text": "Build Tools: Maven, Gradle, npm, MSBuild. SCM: Git, SVN, GitHub, Bitbucket. Pipelines: Pipeline, Multibranch, Blue Ocean. Notifications: Email, Slack, PagerDuty. Authentication: LDAP, SAML, GitHub OAuth. Cloud: Docker, Kubernetes, EC2. Analysis: SonarQube, Checkstyle, FindBugs. Artifacts: Nexus, Artifactory, S3."
    },
    {
      "heading": "Plugin Management",
      "text": "Manage Jenkins > Plugin Manager. Tabs: Updates (pending updates), Available (browse install), Installed (currently installed), Advanced (upload plugin). Automatic updates: configure update site. Dependency resolution: plugins auto-install dependencies."
    },
    {
      "heading": "Common Use Cases",
      "text": "Jenkins Plugins applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Jenkins has over 1,800 plugins that integrate with virtually every CI/CD tool, platform, and service.",
  "interviewQuestions": [
    {
      "question": "How to install a Jenkins plugin?",
      "answer": "Manage Jenkins > Plugin Manager > Available tab > search > Install."
    },
    {
      "question": "What happens when a plugin is updated?",
      "answer": "Jenkins may restart. Some plugins need restart to activate. Schedule maintenance windows."
    },
    {
      "question": "Jenkins Plugins — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Jenkins Plugins — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkins Plugins — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkins Plugins — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkins Plugins — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkins Plugins — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkins Plugins — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkins Plugins — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkins Plugins</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jenkins Plugins: 1800+ integrations. Install via P</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lugin Manager. Some require restart.</text></svg>",
  "codeExamples": [
    {
      "title": "Plugin Install CLI",
      "useCase": "",
      "code": "java -jar jenkins-cli.jar -s http://localhost:8080 install-plugin git docker",
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
      "question": "Jenkins Plugins — What is the recommended approach?",
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
      "question": "Jenkins Plugins — What should be prioritized?",
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
      "question": "Jenkins Plugins — What is important for security?",
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
      "question": "Jenkins Plugins — How to ensure reliability?",
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
      "question": "Jenkins Plugins — What helps team collaboration?",
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
      "question": "Jenkins Plugins — What reduces errors most?",
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
      "question": "Jenkins Plugins — What improves speed?",
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
      "question": "Jenkins Plugins — What is key for monitoring?",
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
      "question": "Jenkins Plugins — What ensures quality?",
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
