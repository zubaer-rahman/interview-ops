export const jenkins_scripted = {
  "id": "jenkins-scripted",
  "title": "Scripted Pipeline",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Scripted Pipeline uses full Groovy syntax with node { } blocks. More flexible but more complex.",
    "Scripted Pipeline is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Scripted Pipeline leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Scripted Pipeline works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Scripted Pipeline is like writing a program. You have full control with if/else, loops, try/catch, and custom functions. It is more powerful but harder to maintain than Declarative.",
  "deepDive": [
    {
      "heading": "Structure",
      "text": "node { stage('Build') { ... } }. node defines where to run. stage organizes phases. Full Groovy: variables, functions, conditionals. try/catch/finally for error handling. Parallel execution with parallel { }."
    },
    {
      "heading": "Scripted Features",
      "text": "def variable = value: Groovy variables. for/each loops. error handling with try/catch. Parallel: parallel { stage('A') { ... } stage('B') { ... } }. timeout and retry steps. Custom functions. Shared library imports."
    },
    {
      "heading": "Common Use Cases",
      "text": "Scripted Pipeline applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Scripted Pipeline uses full Groovy syntax with node { } blocks. More flexible but more complex.",
  "interviewQuestions": [
    {
      "question": "What block defines execution node in Scripted Pipeline?",
      "answer": "node { } block."
    },
    {
      "question": "How to run stages in parallel in Scripted Pipeline?",
      "answer": "parallel { stage('A') { ... } stage('B') { ... } }."
    },
    {
      "question": "Scripted Pipeline — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Scripted Pipeline — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Scripted Pipeline — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Scripted Pipeline — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Scripted Pipeline — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Scripted Pipeline — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Scripted Pipeline — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Scripted Pipeline — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Scripted Pipeline</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Scripted Pipeline: Full Groovy flexibility. node, </text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">stage, try/catch, parallel. Powerful but more comp</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lex.</text></svg>",
  "codeExamples": [
    {
      "title": "Scripted Pipeline",
      "useCase": "",
      "code": "node { stage('Build') { sh 'make' }; stage('Test') { sh 'make test' } }",
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
      "question": "Scripted Pipeline — What is the recommended approach?",
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
      "question": "Scripted Pipeline — What should be prioritized?",
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
      "question": "Scripted Pipeline — What is important for security?",
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
      "question": "Scripted Pipeline — How to ensure reliability?",
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
      "question": "Scripted Pipeline — What helps team collaboration?",
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
      "question": "Scripted Pipeline — What reduces errors most?",
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
      "question": "Scripted Pipeline — What improves speed?",
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
      "question": "Scripted Pipeline — What is key for monitoring?",
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
      "question": "Scripted Pipeline — What ensures quality?",
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
