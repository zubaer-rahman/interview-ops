export const jenkins_shared_libraries = {
  "id": "jenkins-shared-libraries",
  "title": "Jenkins Shared Libraries",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Shared Libraries allow you to define reusable pipeline code in a separate repository and share it across multiple Jenkinsfiles.",
    "Jenkins Shared Libraries is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Jenkins Shared Libraries leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Jenkins Shared Libraries works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Shared libraries are like a toolkit for your pipelines. Instead of writing the same deployment code in every project, you write it once in a shared library, and each project just calls the shared functions. Change once, update everywhere.",
  "deepDive": [
    {
      "heading": "Library Structure",
      "text": "Repository root: vars/ (global variables/functions), src/ (Groovy classes). Global variables: vars/deploy.groovy defines deploy() function. Classes: src/org/team/Utils.groovy. test/ for unit tests. Resources/ for external files."
    },
    {
      "heading": "Using Libraries",
      "text": "@Library('my-lib@v1.2') _: import library at specific version. @Library('my-lib') import org.team.Utils: import class. In Pipeline: deploy(stage: 'prod'). Load multiple: @Library('lib1 lib2') _. Global libraries configured in Manage Jenkins."
    },
    {
      "heading": "Common Use Cases",
      "text": "Jenkins Shared Libraries applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Shared Libraries allow you to define reusable pipeline code in a separate repository and share it across multiple Jenkinsfiles.",
  "interviewQuestions": [
    {
      "question": "What is a Shared Library?",
      "answer": "Reusable pipeline code in a separate repository shared across projects."
    },
    {
      "question": "How to version Shared Libraries?",
      "answer": "Use Git tags: @Library('my-lib@v1.2') _. Load at specific tag, branch, or commit."
    },
    {
      "question": "Jenkins Shared Libraries — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Jenkins Shared Libraries — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkins Shared Libraries — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkins Shared Libraries — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkins Shared Libraries — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkins Shared Libraries — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkins Shared Libraries — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkins Shared Libraries — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkins Shared Libraries</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Shared Libraries: Reusable pipeline code. vars/ fo</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">r functions, src/ for classes. Version-controlled </text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">with Git tags.</text></svg>",
  "codeExamples": [
    {
      "title": "Shared Library Function",
      "useCase": "",
      "code": "// vars/buildApp.groovy: def call() { sh 'npm ci && npm run build' }",
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
      "question": "Jenkins Shared Libraries — What is the recommended approach?",
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
      "question": "Jenkins Shared Libraries — What should be prioritized?",
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
      "question": "Jenkins Shared Libraries — What is important for security?",
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
      "question": "Jenkins Shared Libraries — How to ensure reliability?",
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
      "question": "Jenkins Shared Libraries — What helps team collaboration?",
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
      "question": "Jenkins Shared Libraries — What reduces errors most?",
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
      "question": "Jenkins Shared Libraries — What improves speed?",
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
      "question": "Jenkins Shared Libraries — What is key for monitoring?",
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
      "question": "Jenkins Shared Libraries — What ensures quality?",
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
