export const cicd_gitlab = {
  "id": "cicd-gitlab",
  "title": "GitLab CI/CD",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "GitLab CI/CD is a built-in CI/CD system in GitLab, configured via .gitlab-ci.yml in the repository root.",
    "Runners execute jobs: GitLab-hosted (SaaS) or self-managed. Jobs run in isolated environments (containers, VMs).",
    "Key concepts: stages, jobs, artifacts, environments, variables, cache, multi-project pipelines.",
    "GitLab CI/CD integrated platform provides a seamless DevOps experience from code to deployment."
  ],
  "laymanDefinition": "GitLab CI/CD is like having your DevOps platform all in one place. Git, CI/CD, registry, and monitoring are integrated — no need to piece together different tools. The pipeline is defined in a .gitlab-ci.yml file in your repo, making it version-controlled like code.",
  "deepDive": [
    {
      "heading": "GitLab CI YAML",
      "text": "Stages: define order (build, test, deploy). Jobs: belong to stages, run in parallel within same stage. Script: shell commands to execute. Only/except: rules for when to run. Variables: CI/CD variables (key-value). Cache: shared between jobs. Artifacts: job outputs for later stages."
    },
    {
      "heading": "Runners",
      "text": "GitLab-hosted: managed by GitLab (limited minutes on free tier). Self-managed: install gitlab-runner on your own infrastructure. Specific: assigned to specific projects. Shared: available to all projects in group. Group: assigned to groups. Tags: select runner by tag."
    },
    {
      "heading": "Advanced Features",
      "text": "Multi-project pipelines: trigger downstream projects. Parent-child pipelines: dynamic pipeline generation. Review apps: per-branch preview environments. Auto DevOps: automatic CI/CD for common stacks. Dependencies: pass artifacts between jobs. Needs: DAG for parallel execution."
    },
    {
      "heading": "GitLab vs Jenkins",
      "text": "GitLab: integrated (single vendor), simpler, SaaS option, containers-native. Jenkins: more flexible, more plugins, mature, complex. Choose GitLab for simplicity + integration, Jenkins for complex enterprise needs."
    }
  ],
  "interviewAnswer": "GitLab CI/CD is a built-in CI/CD system in GitLab, configured via .gitlab-ci.yml in the repository root.",
  "interviewQuestions": [
    {
      "question": "What file configures GitLab CI/CD?",
      "answer": ".gitlab-ci.yml in the repository root."
    },
    {
      "question": "What is a GitLab Runner?",
      "answer": "An agent that executes CI/CD jobs. Can be GitLab-hosted (SaaS) or self-managed."
    },
    {
      "question": "What are GitLab Review Apps?",
      "answer": "Per-branch preview environments that spin up automatically for each MR."
    },
    {
      "question": "GitLab CI/CD — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "GitLab CI/CD — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "GitLab CI/CD — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "GitLab CI/CD — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "GitLab CI/CD — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "GitLab CI/CD — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "GitLab CI/CD — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">GitLab CI/CD</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">.gitlab-ci.yml</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pipeline config</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitLab Runners</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Execute jobs</text><rect x=\"180\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"250\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Artifacts</text><text x=\"250\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Share between stages</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GitLab CI/CD: Built-in CI/CD with .gitlab-ci.yml. </text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Runners, artifacts, environments, multi-project pi</text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">pelines.</text></svg>",
  "codeExamples": [
    {
      "title": ".gitlab-ci.yml",
      "useCase": "Basic pipeline example.",
      "code": "stages: [build, test, deploy]\nbuild:\n  stage: build\n  script: npm ci && npm run build\n  artifacts: paths: [dist/]",
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
      "question": "Where does GitLab CI/CD configuration live?",
      "options": [
        "Jenkinsfile",
        ".gitlab-ci.yml",
        "Dockerfile",
        "config.yml"
      ],
      "answer": 1,
      "explanation": "GitLab CI/CD is configured via .gitlab-ci.yml stored in the repository root."
    },
    {
      "question": "GitLab CI/CD — What is the recommended approach?",
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
      "question": "GitLab CI/CD — What should be prioritized?",
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
      "question": "GitLab CI/CD — What is important for security?",
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
      "question": "GitLab CI/CD — How to ensure reliability?",
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
      "question": "GitLab CI/CD — What helps team collaboration?",
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
      "question": "GitLab CI/CD — What reduces errors most?",
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
      "question": "GitLab CI/CD — What improves speed?",
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
      "question": "GitLab CI/CD — What is key for monitoring?",
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
      "question": "GitLab CI/CD — What ensures quality?",
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
