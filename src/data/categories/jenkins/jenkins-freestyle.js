export const jenkins_freestyle = {
  "id": "jenkins-freestyle",
  "title": "Freestyle Jobs",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Freestyle jobs are the simplest Jenkins job type — configured entirely through the web UI with general-purpose build steps.",
    "Best for: simple builds, quick setup, UI-friendly configuration, non-developer users.",
    "Limitations: no Pipeline-as-Code, limited branching, harder to version-control.",
    "Freestyle Jobs works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "A Freestyle job is like following a simple checklist: Check out code (SCM), Build (run shell command), Test (run more commands), and Report (archive artifacts). Everything is configured visually in the UI — no coding required. Great for simple tasks.",
  "deepDive": [
    {
      "heading": "Freestyle Configuration",
      "text": "General: name, description, discard old builds. SCM: Git repository URL, credentials, branch. Build Triggers: schedule, SCM polling, webhook. Build Environment: timestamps, withAnt, withMaven. Build Steps: Execute shell, Invoke Maven, Invoke Gradle, Windows Batch. Post-build: archive, publish test results, deploy, email."
    },
    {
      "heading": "Use Cases",
      "text": "Simple build scripts. Scheduled tasks (cleanup, reports). Quick prototypes and experiments. Teams preferring UI configuration. Integration tests with simple steps. Freestyle + plugin = basic pipeline."
    },
    {
      "heading": "Limitations",
      "text": "No Pipeline-as-Code (config not in SCM). Single branch only (no multi-branch). Limited conditional logic. Harder to reproduce. Build steps not reusable. For modern CD, prefer Pipeline jobs."
    }
  ],
  "interviewAnswer": "Freestyle jobs are the simplest Jenkins job type — configured entirely through the web UI with general-purpose build steps.",
  "interviewQuestions": [
    {
      "question": "What is a Freestyle job?",
      "answer": "A simple Jenkins job configured entirely through the web UI."
    },
    {
      "question": "When to use Freestyle vs Pipeline?",
      "answer": "Freestyle for simple tasks and quick setup. Pipeline for complex, production CI/CD with Pipeline-as-Code."
    },
    {
      "question": "What is a key limitation of Freestyle jobs?",
      "answer": "No Pipeline-as-Code — the job configuration is not stored in source control."
    },
    {
      "question": "Freestyle Jobs — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Freestyle Jobs — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Freestyle Jobs — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Freestyle Jobs — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Freestyle Jobs — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Freestyle Jobs — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Freestyle Jobs — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Freestyle Jobs</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">UI Config</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fill in the form</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build Steps</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Execute shell</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Post-Build</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Archive + notify</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Freestyle Jobs: Simple UI-based jobs. Good for qui</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ck tasks. Limited branching. Pipeline jobs recomme</text><text x=\"240\" y=\"164\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nded for CD.</text></svg>",
  "codeExamples": [
    {
      "title": "Freestyle Shell Step",
      "useCase": "Execute shell command build step.",
      "code": "# Build and test\nnpm ci\nnpm run build\nnpm test",
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
      "question": "What is the main limitation of Freestyle jobs?",
      "options": [
        "Difficult to configure",
        "No Pipeline-as-Code",
        "No build triggers",
        "Expensive"
      ],
      "answer": 1,
      "explanation": "Freestyle jobs cannot define the pipeline as code. The configuration is only in JENKINS_HOME, not in SCM."
    },
    {
      "question": "Freestyle Jobs — What is the recommended approach?",
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
      "question": "Freestyle Jobs — What should be prioritized?",
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
      "question": "Freestyle Jobs — What is important for security?",
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
      "question": "Freestyle Jobs — How to ensure reliability?",
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
      "question": "Freestyle Jobs — What helps team collaboration?",
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
      "question": "Freestyle Jobs — What reduces errors most?",
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
      "question": "Freestyle Jobs — What improves speed?",
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
      "question": "Freestyle Jobs — What is key for monitoring?",
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
      "question": "Freestyle Jobs — What ensures quality?",
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
