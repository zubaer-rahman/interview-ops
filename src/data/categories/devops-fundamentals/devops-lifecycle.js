export const devops_lifecycle = {
  "id": "devops-lifecycle",
  "title": "DevOps Lifecycle",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "The DevOps lifecycle is a continuous loop of phases that governs how software moves from idea to production and back.",
    "Phases: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → Feedback → (back to Plan).",
    "Unlike traditional linear SDLC, the DevOps lifecycle is infinite and continuous, with feedback loops at every stage.",
    "Each phase has specific tools and practices: Jira (Plan), Git (Code), Jenkins/GitHub Actions (Build/Test), Docker/K8s (Deploy), Prometheus (Monitor)."
  ],
  "laymanDefinition": "The DevOps lifecycle is like a perpetual motion machine for software. Imagine a factory that takes raw ideas, turns them into products, ships them, watches how customers use them, and sends improvement notes back to the design team — all automatically, all the time.",
  "deepDive": [
    {
      "heading": "Plan Phase",
      "text": "Define requirements, prioritize work, plan sprints. Tools: Jira, Confluence, Trello, Aha!. Practices: user stories, backlog grooming, sprint planning. Output: prioritized, estimated work items ready for development."
    },
    {
      "heading": "Code, Build, Test Phase",
      "text": "Code: developers write and commit code (Git). Build: compile code, resolve dependencies (Maven, npm, Gradle). Test: automated unit, integration, and security tests (Jest, JUnit, Selenium). This is where CI runs — every commit triggers build + test."
    },
    {
      "heading": "Release, Deploy, Operate Phase",
      "text": "Release: approve and prepare for production (change management, feature flags). Deploy: push to production (blue-green, canary, rolling). Operate: keep the application running (Kubernetes, Docker, logging)."
    },
    {
      "heading": "Monitor and Feedback Phase",
      "text": "Monitor: track metrics, logs, traces (Prometheus, Grafana, ELK, Datadog). Feedback: alerts, dashboards, incident response, postmortems. Feedback loops back to Plan — improvements feed into the next iteration. Continuous improvement is built into the cycle."
    }
  ],
  "interviewAnswer": "The DevOps lifecycle is an infinite loop: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → Feedback → back to Plan. Each phase feeds into the next, and feedback loops ensure continuous improvement. Automation is key at every stage.",
  "interviewQuestions": [
    {
      "question": "What are the phases of the DevOps lifecycle?",
      "answer": "Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → Feedback."
    },
    {
      "question": "How is the DevOps lifecycle different from traditional SDLC?",
      "answer": "It is continuous (infinite loop), not linear. Feedback loops connect every phase."
    },
    {
      "question": "What happens in the Monitor phase?",
      "answer": "Track metrics, logs, traces. Set up alerts. Incident response. Gather feedback for improvement."
    },
    {
      "question": "What is the purpose of feedback loops?",
      "answer": "To continuously improve by feeding observations from later phases back into planning and development."
    },
    {
      "question": "What phase handles CI (Continuous Integration)?",
      "answer": "Code, Build, Test — every commit triggers automated build and tests."
    },
    {
      "question": "What tools are used in the Monitor phase?",
      "answer": "Prometheus, Grafana, ELK Stack, Datadog, New Relic, Sentry."
    },
    {
      "question": "DevOps Lifecycle — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "DevOps Lifecycle — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "DevOps Lifecycle — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "DevOps Lifecycle — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DevOps Lifecycle</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Plan</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Requirements</text><rect x=\"115\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"165\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Code</text><text x=\"165\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Git</text><rect x=\"220\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build</text><text x=\"270\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compile</text><rect x=\"325\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"375\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Test</text><text x=\"375\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated</text><line x1=\"110\" y1=\"48\" x2=\"115\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"215\" y1=\"48\" x2=\"220\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"48\" x2=\"325\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Release</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Approve</text><rect x=\"115\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"165\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy</text><text x=\"165\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Push to prod</text><rect x=\"220\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Operate</text><text x=\"270\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Run</text><rect x=\"325\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"375\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monitor</text><text x=\"375\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Metrics</text><line x1=\"110\" y1=\"78\" x2=\"115\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"215\" y1=\"78\" x2=\"220\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"78\" x2=\"325\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"425\" y1=\"78\" x2=\"10\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"100\" width=\"415\" height=\"30\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"217.5\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Feedback Loop</text><text x=\"217.5\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Continuous improvement from monitoring back to planning</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DevOps Lifecycle: Infinite loop of Plan → Code → B</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">uild → Test → Release → Deploy → Operate → Monitor</text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> → Feedback.</text></svg>",
  "codeExamples": [
    {
      "title": "Lifecycle Diagram as Code",
      "useCase": "Mermaid DevOps lifecycle.",
      "code": "```mermaid\ngraph LR\n  Plan --> Code\n  Code --> Build\n  Build --> Test\n  Test --> Release\n  Release --> Deploy\n  Deploy --> Operate\n  Operate --> Monitor\n  Monitor -->|Feedback| Plan\n```\n\n# Embedded in documentation\n# Shows the infinite loop nature",
      "description": "Mermaid diagram representing the DevOps lifecycle as an infinite loop."
    },
    {
      "title": "Lifecycle Toolchain Mapping",
      "useCase": "Tools per phase.",
      "code": "# DevOps Lifecycle Toolchain\n\n# Plan:     Jira, Confluence, Notion, Asana\n# Code:     Git, GitHub, GitLab, Bitbucket\n# Build:    Jenkins, GitHub Actions, CircleCI\n# Test:     Jest, JUnit, Selenium, SonarQube\n# Release:  Artifactory, Nexus, feature flags\n# Deploy:   Docker, Kubernetes, Terraform, Ansible\n# Operate:  K8s, Docker Swarm, ECS, EKS\n# Monitor:  Prometheus, Grafana, ELK, Datadog\n# Feedback: PagerDuty, OpsGenie, Statuspage",
      "description": "Mapping of common tools to each phase of the DevOps lifecycle."
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
      "question": "What is the first phase of the DevOps lifecycle?",
      "options": [
        "Code",
        "Plan",
        "Deploy",
        "Monitor"
      ],
      "answer": 1,
      "explanation": "Plan is the first phase — requirements and prioritization before any code is written."
    },
    {
      "question": "How is the DevOps lifecycle different from traditional SDLC?",
      "options": [
        "Same thing",
        "It is continuous, not linear",
        "It has fewer phases",
        "It has more phases"
      ],
      "answer": 1,
      "explanation": "The DevOps lifecycle is an infinite continuous loop, unlike the linear traditional SDLC."
    },
    {
      "question": "What connects the Monitor phase back to Plan?",
      "options": [
        "Alerts",
        "Feedback loops",
        "Dashboards",
        "Incidents"
      ],
      "answer": 1,
      "explanation": "Feedback loops from monitoring drive improvements back into planning."
    },
    {
      "question": "DevOps Lifecycle — What is important for security?",
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
      "question": "DevOps Lifecycle — How to ensure reliability?",
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
      "question": "DevOps Lifecycle — What helps team collaboration?",
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
      "question": "DevOps Lifecycle — What reduces errors most?",
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
      "question": "DevOps Lifecycle — What improves speed?",
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
      "question": "DevOps Lifecycle — What is key for monitoring?",
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
      "question": "DevOps Lifecycle — What ensures quality?",
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
