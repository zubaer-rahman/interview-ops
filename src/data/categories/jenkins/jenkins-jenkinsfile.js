export const jenkins_jenkinsfile = {
  "id": "jenkins-jenkinsfile",
  "title": "Jenkinsfile",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "A Jenkinsfile is a text file that defines a Jenkins Pipeline, stored in the root of a repository alongside the source code.",
    "It uses Groovy-based syntax and can be either Declarative or Scripted.",
    "Jenkinsfile enables Pipeline-as-Code: version-controlled, reviewed in PRs, shared across teams.",
    "Jenkinsfile works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "The Jenkinsfile is the single source of truth for your CI/CD pipeline. Instead of clicking in Jenkins UI, you write the pipeline in a file that lives with your code. This means: every change to the pipeline is reviewed, tested, and version-controlled like any other code.",
  "deepDive": [
    {
      "heading": "Jenkinsfile Syntax",
      "text": "Declarative: pipeline { ... } with structured sections. Scripted: node { ... } with full Groovy. Must be valid Groovy syntax. Starts with pipeline (declarative) or node (scripted). File encoding: UTF-8. File permissions: readable by Jenkins process."
    },
    {
      "heading": "Jenkinsfile Location",
      "text": "Default: Jenkinsfile in repository root. Alternate: override in Multibranch config (e.g., Jenkinsfile.prod). Script Path: configure custom filename/path in job config. Library: shared pipeline library for reusable code."
    },
    {
      "heading": "Shared Libraries",
      "text": "Global pipeline library shared across repos. @Library('my-library') import in Jenkinsfile. Versioned: load specific tag/branch. Useful for: standard build steps, deployment functions, notification helpers."
    },
    {
      "heading": "Best Practices",
      "text": "Use Declarative syntax for readability. Keep Jenkinsfile in repo root. Use shared libraries for reusable logic. Test Jenkinsfile changes in PR. Use environment() for config. Keep stages focused."
    }
  ],
  "interviewAnswer": "A Jenkinsfile is a text file that defines a Jenkins Pipeline, stored in the root of a repository alongside the source code.",
  "interviewQuestions": [
    {
      "question": "What is a Jenkinsfile?",
      "answer": "A text file containing Jenkins Pipeline definition, stored in the repository root."
    },
    {
      "question": "What Groovy syntax is used?",
      "answer": "Declarative (pipeline { }) or Scripted (node { })."
    },
    {
      "question": "How to reuse pipeline code across projects?",
      "answer": "Use Shared Libraries: @Library('my-library') _ import shared functions."
    },
    {
      "question": "Jenkinsfile — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkinsfile — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkinsfile — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkinsfile — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkinsfile — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkinsfile — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkinsfile — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkinsfile</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkinsfile</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pipeline as Code</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SCM Repo</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Version controlled</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkins</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Executes pipeline</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jenkinsfile: Pipeline definition as code in repo r</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">oot. Declarative syntax recommended. Shared librar</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ies for reuse.</text></svg>",
  "codeExamples": [
    {
      "title": "Simple Jenkinsfile",
      "useCase": "Declarative pipeline.",
      "code": "pipeline {\n    agent any\n    stages {\n        stage('Build') { steps { sh 'make' } }\n        stage('Test') { steps { sh 'make test' } }\n    }\n    post {\n        always { cleanWs() }\n    }\n}",
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
      "question": "Where is the Jenkinsfile stored?",
      "options": [
        "Jenkins server",
        "Repository root in SCM",
        "Plugin directory",
        "JENKINS_HOME"
      ],
      "answer": 1,
      "explanation": "The Jenkinsfile is stored in the repository root with the source code (Pipeline-as-Code)."
    },
    {
      "question": "Jenkinsfile — What is the recommended approach?",
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
      "question": "Jenkinsfile — What should be prioritized?",
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
      "question": "Jenkinsfile — What is important for security?",
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
      "question": "Jenkinsfile — How to ensure reliability?",
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
      "question": "Jenkinsfile — What helps team collaboration?",
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
      "question": "Jenkinsfile — What reduces errors most?",
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
      "question": "Jenkinsfile — What improves speed?",
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
      "question": "Jenkinsfile — What is key for monitoring?",
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
      "question": "Jenkinsfile — What ensures quality?",
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
