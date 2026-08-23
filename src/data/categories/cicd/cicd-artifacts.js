export const cicd_artifacts = {
  "id": "cicd-artifacts",
  "title": "Artifacts & Build Outputs",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Artifacts are the outputs of the build process: compiled code, packages, Docker images, reports, and binaries.",
    "Artifacts are stored, versioned, and passed between pipeline stages or consumed by downstream systems.",
    "Common registries: Docker Hub, GitHub Packages, npm registry, JFrog Artifactory, S3.",
    "Artifact management ensures every build produces a versioned, immutable package deployable to any environment."
  ],
  "laymanDefinition": "Artifacts are like the finished products coming off the assembly line. They need to be stored in a warehouse (artifact registry) with labels and version numbers. Downstream stages (deployment) or other teams can fetch specific versions from the warehouse as needed.",
  "deepDive": [
    {
      "heading": "Artifact Types",
      "text": "Containers: Docker images pushed to registry (Docker Hub, ECR, GCR). Language packages: npm packages, JARs, Python wheels, NuGet packages. Binaries: compiled executables, installers. Reports: test reports, coverage reports, lint reports. Deployment packages: ZIP/TAR archives."
    },
    {
      "heading": "Artifact Storage",
      "text": "Pipeline built-in: GitHub Actions artifacts, GitLab artifacts, Jenkins artifacts. Registry: Docker Registry (Harbor, Docker Hub), Package Registry (npm, PyPI). Cloud storage: S3, GCS, Azure Blob. Version policy: keep recent N versions, delete old ones."
    },
    {
      "heading": "Best Practices",
      "text": "Version every artifact uniquely (commit SHA or semver). Immutable artifacts: never overwrite a published version. Clean up old artifacts. Use artifact promotion (dev → staging → prod). Sign artifacts for security. Scan artifacts for vulnerabilities."
    }
  ],
  "interviewAnswer": "Artifacts are the outputs of the build process: compiled code, packages, Docker images, reports, and binaries.",
  "interviewQuestions": [
    {
      "question": "What are pipeline artifacts?",
      "answer": "Build outputs (binaries, containers, reports) stored and passed between pipeline stages."
    },
    {
      "question": "What is an artifact registry?",
      "answer": "A storage service for versioned artifacts (Docker Hub, npm registry, GitHub Packages)."
    },
    {
      "question": "What is artifact promotion?",
      "answer": "Promoting an artifact through environments: dev → staging → production after validation."
    },
    {
      "question": "Artifacts & Build Outputs — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Artifacts & Build Outputs — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Artifacts & Build Outputs — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Artifacts & Build Outputs — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Artifacts & Build Outputs — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Artifacts & Build Outputs — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Artifacts & Build Outputs — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Artifacts & Build Outputs</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build Code</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compile & package</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Artifact Registry</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Store versioned</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Consume artifacts</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Artifact Management: Store versioned build outputs</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">. Pass between stages. Registries: Docker Hub, npm</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, S3.</text></svg>",
  "codeExamples": [
    {
      "title": "Docker Artifact",
      "useCase": "Build and push image.",
      "code": "docker build -t app:${GITHUB_SHA} .\ndocker push ghcr.io/user/app:${GITHUB_SHA}",
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
      "question": "Should artifacts be overwritten?",
      "options": [
        "Yes, keep latest only",
        "No, artifacts should be immutable",
        "Only for dev builds",
        "Always"
      ],
      "answer": 1,
      "explanation": "Artifacts should be immutable — never overwrite a published version. Use unique version identifiers."
    },
    {
      "question": "Artifacts & Build Outputs — What is the recommended approach?",
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
      "question": "Artifacts & Build Outputs — What should be prioritized?",
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
      "question": "Artifacts & Build Outputs — What is important for security?",
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
      "question": "Artifacts & Build Outputs — How to ensure reliability?",
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
      "question": "Artifacts & Build Outputs — What helps team collaboration?",
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
      "question": "Artifacts & Build Outputs — What reduces errors most?",
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
      "question": "Artifacts & Build Outputs — What improves speed?",
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
      "question": "Artifacts & Build Outputs — What is key for monitoring?",
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
      "question": "Artifacts & Build Outputs — What ensures quality?",
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
