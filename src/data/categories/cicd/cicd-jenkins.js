export const cicd_jenkins = {
  "id": "cicd-jenkins",
  "title": "Jenkins",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Jenkins is an open-source automation server for CI/CD with a vast plugin ecosystem (1800+ plugins).",
    "Pipeline defined as code (Jenkinsfile) using Declarative or Scripted pipeline syntax.",
    "Key concepts: Master/Agent architecture, Jobs, Stages, Steps, Plugins, Shared Libraries.",
    "Jenkins plugin ecosystem and Pipeline DSL make it the most extensible CI/CD automation server."
  ],
  "laymanDefinition": "Jenkins is the veteran of CI/CD tools — it's been around the longest and has a plugin for almost everything. It's like a customizable Swiss Army knife: more complex to set up than modern cloud alternatives, but extremely flexible and battle-tested.",
  "deepDive": [
    {
      "heading": "Architecture",
      "text": "Master (Controller): manages jobs, schedules builds, serves UI. Agents (Nodes): execute build jobs. Can run on different machines/containers. Agents can be: permanent (always on) or ephemeral (per-build containers). Distributed builds across multiple agents."
    },
    {
      "heading": "Jenkinsfile Pipeline",
      "text": "Declarative: structured syntax (pipeline { agent any; stages { stage { steps } } }). Scripted: full Groovy flexibility. Both checked into repo (Pipeline as Code). Stages: organize build phases. Steps: individual commands. Post: actions after pipeline (always, success, failure)."
    },
    {
      "heading": "Plugins",
      "text": "Source control: Git, GitHub, Bitbucket. Build: Maven, Gradle, npm, Docker. Test: JUnit, xUnit, TestNG. Notifications: Slack, Email, PagerDuty. Artifacts: Nexus, Artifactory. Infrastructure: Docker, Kubernetes, Terraform. Credentials: encrypted storage."
    },
    {
      "heading": "Shared Libraries",
      "text": "Reusable pipeline code across repos. Loaded from Git repo. Global vars, steps, utilities. Version controlled. Reduces duplication. Example: pipelineLibrary { myLib } from github.com/org/jenkins-lib.git."
    }
  ],
  "interviewAnswer": "Jenkins is an open-source automation server for CI/CD with a vast plugin ecosystem (1800+ plugins).",
  "interviewQuestions": [
    {
      "question": "What is Jenkins?",
      "answer": "An open-source CI/CD automation server with extensive plugin ecosystem."
    },
    {
      "question": "What is a Jenkinsfile?",
      "answer": "A Groovy-based pipeline definition file stored in the repository (Pipeline as Code)."
    },
    {
      "question": "What is the Jenkins master-agent architecture?",
      "answer": "Master manages jobs; agents execute builds. Agents can be permanent or ephemeral (containers)."
    },
    {
      "question": "Jenkins — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkins — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkins — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkins — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkins — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkins — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkins — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkins</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkins Master</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Job management</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent 1</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ubuntu build</text><rect x=\"180\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent 2</text><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Windows build</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jenkins: Open-source CI/CD automation. Master/Agen</text><text x=\"240\" y=\"132\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">t architecture, 1800+ plugins, Pipeline as Code wi</text><text x=\"240\" y=\"144\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">th Groovy.</text></svg>",
  "codeExamples": [
    {
      "title": "Declarative Jenkinsfile",
      "useCase": "Basic pipeline example.",
      "code": "pipeline {\n    agent any\n    stages {\n        stage('Build') { steps { sh 'npm ci && npm run build' } }\n        stage('Test') { steps { sh 'npm test' } }\n        stage('Deploy') { steps { sh 'docker push app:latest' } }\n    }\n    post { failure { mail to: 'team@co', subject: \"Build failed\" } }\n}",
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
      "question": "What is a Jenkins Shared Library?",
      "options": [
        "A plugin store",
        "Reusable pipeline code across repos",
        "A Docker registry",
        "A monitoring tool"
      ],
      "answer": 1,
      "explanation": "Shared Libraries allow reusable pipeline code (steps, functions) to be shared across multiple repositories."
    },
    {
      "question": "Jenkins — What is the recommended approach?",
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
      "question": "Jenkins — What should be prioritized?",
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
      "question": "Jenkins — What is important for security?",
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
      "question": "Jenkins — How to ensure reliability?",
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
      "question": "Jenkins — What helps team collaboration?",
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
      "question": "Jenkins — What reduces errors most?",
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
      "question": "Jenkins — What improves speed?",
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
      "question": "Jenkins — What is key for monitoring?",
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
      "question": "Jenkins — What ensures quality?",
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
