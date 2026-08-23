export const jenkins_build_artifacts = {
  "id": "jenkins-build-artifacts",
  "title": "Build Artifacts",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Build artifacts are files produced by a Jenkins build: compiled binaries, packages, test reports, Docker images.",
    "Build Artifacts is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Build Artifacts leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Build Artifacts works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Artifacts are the outputs of your build. When Jenkins builds your code, it produces files like .jar, .war, .zip, test reports. Jenkins can archive these artifacts so you can download them later or pass them between build stages.",
  "deepDive": [
    {
      "heading": "Artifact Configuration",
      "text": "Post-build Action: Archive the artifacts. Files to archive: **/*.jar, dist/**, target/*.war. Exclude: **/*-sources.jar. Discard old artifacts: set retention policy (days, count). Fingerprinting: track artifact usage across builds."
    },
    {
      "heading": "Artifact Management",
      "text": "Stored in JENKINS_HOME/jobs/{job}/builds/{build}/archive/. Accessible from build page > Artifacts. Download via UI or API. Artifact Manager: S3, Nexus (plugins extend storage). Pipeline: archiveArtifacts step."
    },
    {
      "heading": "Common Use Cases",
      "text": "Build Artifacts applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Build artifacts are files produced by a Jenkins build: compiled binaries, packages, test reports, Docker images.",
  "interviewQuestions": [
    {
      "question": "How to archive artifacts in Pipeline?",
      "answer": "archiveArtifacts artifacts: '**/dist/**', fingerprint: true."
    },
    {
      "question": "Where are artifacts stored?",
      "answer": "In JENKINS_HOME/jobs/{job}/builds/{build}/archive/. Can be configured to use external storage."
    },
    {
      "question": "Build Artifacts — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Build Artifacts — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Build Artifacts — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Build Artifacts — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Build Artifacts — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Build Artifacts — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Build Artifacts — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Build Artifacts — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Build Artifacts</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Build Artifacts: Build outputs (JAR, ZIP, reports)</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">. Archived via post-build action or archiveArtifac</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ts step.</text></svg>",
  "codeExamples": [
    {
      "title": "Archive Artifacts",
      "useCase": "",
      "code": "archiveArtifacts artifacts: 'target/*.jar', onlyIfSuccessful: true",
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
      "question": "Build Artifacts — What is the recommended approach?",
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
      "question": "Build Artifacts — What should be prioritized?",
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
      "question": "Build Artifacts — What is important for security?",
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
      "question": "Build Artifacts — How to ensure reliability?",
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
      "question": "Build Artifacts — What helps team collaboration?",
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
      "question": "Build Artifacts — What reduces errors most?",
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
      "question": "Build Artifacts — What improves speed?",
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
      "question": "Build Artifacts — What is key for monitoring?",
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
      "question": "Build Artifacts — What ensures quality?",
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
