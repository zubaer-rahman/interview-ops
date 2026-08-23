export const jenkins_jobs = {
  "id": "jenkins-jobs",
  "title": "Jenkins Jobs",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "A Jenkins job is a configurable task that performs work: building code, running tests, deploying applications.",
    "Job types: Freestyle (general purpose), Pipeline (Jenkinsfile-based), Multibranch Pipeline (auto-per-branch), Folder, and more.",
    "Jobs are stored as XML config files in JENKINS_HOME/jobs/.",
    "Jenkins Jobs works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A Jenkins job is like a recipe for something Jenkins should do: \"Check out code from GitHub, run npm install, run tests, and if tests pass, deploy to production.\" Jobs can be triggered manually, on a schedule, or by code changes.",
  "deepDive": [
    {
      "heading": "Job Configuration",
      "text": "General: project name, description, parameters, throttle builds. Source Code Management: Git, SVN, or none. Build Triggers: schedule, SCM polling, webhook, upstream. Build Environment: delete workspace, timestamps, SSH agent. Build Steps: run shell, invoke Maven/Gradle, etc. Post-build Actions: archive artifacts, publish test reports, deploy, notify."
    },
    {
      "heading": "Job Types",
      "text": "Freestyle: simple, configure via UI. Pipeline: define as code (Jenkinsfile). Multibranch Pipeline: auto-creates jobs per branch. Folder: organize jobs. Organization Folder: scan GitHub/GitLab for repos."
    },
    {
      "heading": "Job Statuses",
      "text": "Not Built: never run. Scheduled: waiting for executor. Building: currently running. Success: completed without errors. Unstable: passed but has test failures. Failed: build or test errors. Aborted: manually cancelled. Disabled: will not run."
    }
  ],
  "interviewAnswer": "A Jenkins job is a configurable task that performs work: building code, running tests, deploying applications.",
  "interviewQuestions": [
    {
      "question": "What is a Jenkins job?",
      "answer": "A configurable task that performs CI/CD operations like building, testing, and deploying."
    },
    {
      "question": "How are jobs stored?",
      "answer": "As XML configuration files in JENKINS_HOME/jobs/ directory."
    },
    {
      "question": "What job type should be used for modern CI/CD?",
      "answer": "Pipeline jobs (declarative Jenkinsfile in SCM)."
    },
    {
      "question": "Jenkins Jobs — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Jenkins Jobs — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Jenkins Jobs — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Jenkins Jobs — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Jenkins Jobs — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Jenkins Jobs — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Jenkins Jobs — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jenkins Jobs</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Job Config</text><text x=\"65\" y=\"32\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">General + SCM + Trig</text><text x=\"65\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">gers + Steps + Post-</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">build</text><text x=\"240\" y=\"80\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jenkins Jobs: Configurable tasks. Freestyle (simpl</text><text x=\"240\" y=\"92\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">e), Pipeline (as code), Multibranch (per-branch). </text><text x=\"240\" y=\"104\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">XML-stored.</text></svg>",
  "codeExamples": [
    {
      "title": "Job Config (XML)",
      "useCase": "Basic job configuration.",
      "code": "<project>\n  <description>My Pipeline</description>\n</project>",
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
      "question": "What file format does Jenkins use to store jobs?",
      "options": [
        "JSON",
        "YAML",
        "XML",
        "Properties"
      ],
      "answer": 2,
      "explanation": "Jobs are stored as XML configuration files in JENKINS_HOME/jobs/."
    },
    {
      "question": "Jenkins Jobs — What is the recommended approach?",
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
      "question": "Jenkins Jobs — What should be prioritized?",
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
      "question": "Jenkins Jobs — What is important for security?",
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
      "question": "Jenkins Jobs — How to ensure reliability?",
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
      "question": "Jenkins Jobs — What helps team collaboration?",
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
      "question": "Jenkins Jobs — What reduces errors most?",
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
      "question": "Jenkins Jobs — What improves speed?",
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
      "question": "Jenkins Jobs — What is key for monitoring?",
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
      "question": "Jenkins Jobs — What ensures quality?",
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
