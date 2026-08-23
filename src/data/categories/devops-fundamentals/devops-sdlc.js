export const devops_sdlc = {
  "id": "devops-sdlc",
  "title": "SDLC (Software Development Lifecycle)",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "SDLC is the process of planning, creating, testing, and deploying software. It defines the stages software goes through from concept to retirement.",
    "Traditional SDLC models: Waterfall (linear), V-Model, Spiral, Iterative. Modern: Agile, DevOps-enabled SDLC.",
    "SDLC phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance.",
    "DevOps transforms SDLC by making it continuous (not linear), automated (not manual), and feedback-driven at every stage."
  ],
  "laymanDefinition": "SDLC is like the blueprint for building a house. First you plan (requirements), then you draw (design), then you build (implementation), then you inspect (testing), then you move in (deployment), and you maintain it forever (maintenance). DevOps makes this house-building continuous — like adding rooms while living in it.",
  "deepDive": [
    {
      "heading": "Waterfall Model",
      "text": "Sequential: each phase completes before next starts. Requirements → Design → Implementation → Testing → Deployment → Maintenance. No going back. Good for: regulated industries, clear requirements, small projects. Bad for: changing requirements, complex projects. Rarely used alone today."
    },
    {
      "heading": "Agile/DevOps SDLC",
      "text": "Continuous loop, not linear. Requirements evolve throughout. Design is incremental. Implementation is iterative. Testing is automated and continuous. Deployment is frequent (daily). Maintenance is proactive (monitoring). Feedback feeds back into requirements. This is the modern approach."
    },
    {
      "heading": "DevOps-Enabled SDLC Benefits",
      "text": "Faster time to market: from months to hours. Higher quality: automated testing catches issues early. Lower risk: small, frequent deployments. Better feedback: monitoring data informs improvements. Lower costs: automation reduces manual effort. Happier teams: less firefighting, more innovation."
    },
    {
      "heading": "SDLC Phases in DevOps Context",
      "text": "Requirements: user stories, acceptance criteria, compliance needs. Design: architecture reviews, security review, capacity planning. Implementation: Git, pair programming, code reviews. Testing: CI pipeline, unit, integration, e2e, security, performance. Deployment: automated pipeline, blue-green, canary. Maintenance: monitoring, incident response, updates."
    }
  ],
  "interviewAnswer": "SDLC is the process framework for building software. Traditional models (Waterfall) are linear. Modern DevOps-enabled SDLC is continuous, automated, and feedback-driven. Understanding SDLC helps you see where DevOps practices apply at each stage.",
  "interviewQuestions": [
    {
      "question": "What is SDLC?",
      "answer": "Software Development Lifecycle — the process of planning, creating, testing, and deploying software from concept to retirement."
    },
    {
      "question": "What are the traditional SDLC phases?",
      "answer": "Requirements → Design → Implementation → Testing → Deployment → Maintenance."
    },
    {
      "question": "What is the Waterfall model?",
      "answer": "A linear SDLC where each phase must complete before the next begins. No going back to previous phases."
    },
    {
      "question": "How does DevOps change SDLC?",
      "answer": "Makes it continuous (not linear), automated (not manual), and feedback-driven at every stage."
    },
    {
      "question": "What is the Agile/DevOps SDLC?",
      "answer": "A continuous loop where requirements evolve, development is iterative, testing is automated, and deployment is frequent."
    },
    {
      "question": "What are the benefits of DevOps-enabled SDLC?",
      "answer": "Faster delivery, higher quality, lower risk, better feedback, lower costs, happier teams."
    },
    {
      "question": "SDLC (Software Development Lifecycle) — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "SDLC (Software Development Lifecycle) — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "SDLC (Software Development Lifecycle) — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "SDLC (Software Development Lifecycle) — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SDLC (Software Development Lifecycle)</text><rect x=\"10\" y=\"35\" width=\"85\" height=\"18\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"52.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Requirements</text><text x=\"52.5\" y=\"47\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">What to build</text><line x1=\"95\" y1=\"44\" x2=\"100\" y2=\"44\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"110\" y=\"35\" width=\"75\" height=\"18\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"147.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Design</text><text x=\"147.5\" y=\"47\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">How to build</text><line x1=\"185\" y1=\"44\" x2=\"190\" y2=\"44\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"200\" y=\"35\" width=\"95\" height=\"18\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"247.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Implementation</text><text x=\"247.5\" y=\"47\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Write code</text><line x1=\"295\" y1=\"44\" x2=\"300\" y2=\"44\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"35\" width=\"70\" height=\"18\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"345\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Testing</text><text x=\"345\" y=\"36\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verify quali</text><text x=\"345\" y=\"47\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ty</text><line x1=\"380\" y1=\"44\" x2=\"385\" y2=\"44\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"58\" width=\"85\" height=\"18\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"52.5\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deployment</text><text x=\"52.5\" y=\"70\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Release to prod</text><line x1=\"95\" y1=\"67\" x2=\"100\" y2=\"67\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"110\" y=\"58\" width=\"85\" height=\"18\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"152.5\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Maintenance</text><text x=\"152.5\" y=\"70\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Monitor + fix</text><line x1=\"195\" y1=\"67\" x2=\"10\" y2=\"44\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"300\" height=\"20\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"160\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DevOps: Continuous. Automated. Feedback-driven.</text><rect x=\"10\" y=\"115\" width=\"400\" height=\"30\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"210\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SDLC + DevOps</text><text x=\"210\" y=\"128\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Traditional SDLC is linear. DevOps makes it an automated, continuous, fe</text><text x=\"210\" y=\"139\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">edback-driven loop.</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SDLC: Software Development Lifecycle. DevOps trans</text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">forms it from linear to continuous.</text></svg>",
  "codeExamples": [
    {
      "title": "SDLC Phases with DevOps Automation",
      "useCase": "Automation at each phase.",
      "code": "# SDLC Phase → DevOps Automation\n\n# Requirements → Jira/Notion (tracking)\n#   Auto-linking commits to tickets\n\n# Design → Architecture Decision Records (ADR)\n#   Auto-review with linters\n\n# Implementation → Git Hooks, pre-commit\n#   Auto-format, auto-lint on commit\n\n# Testing → CI Pipeline\n#   Auto-run tests on every PR\n\n# Deployment → CD Pipeline\n#   Auto-deploy on merge to main\n\n# Maintenance → Monitoring + Alerting\n#   Auto-alert on error thresholds",
      "description": "Mapping DevOps automation to each phase of the SDLC."
    },
    {
      "title": "SDLC Model Comparison",
      "useCase": "Waterfall vs Agile vs DevOps.",
      "code": "+-------------------+-------------------+-------------------+\n| Aspect           | Waterfall         | Agile             |\n| DevOps SDLC      |                   |                   |\n+-------------------+-------------------+-------------------+\n| Approach         | Linear sequential | Iterative         |\n| Continuous loop  |                   |                   |\n| Change tolerance | Low (late=bad)    | High (welcome)    |\n| Very high        |                   |                   |\n| Delivery         | One big release   | Multiple releases |\n| Continuous       |                   |                   |\n| Testing          | End of cycle      | Every iteration   |\n| Automated always |                   |                   |\n| Feedback         | Post-release      | Sprint reviews    |\n| Real-time monitor |                   |                   |\n| Risk             | High (all at end) | Lower (frequent)  |\n| Lowest (automated)|                   |                   |\n+-------------------+-------------------+-------------------+",
      "description": "Comparison of Waterfall, Agile, and DevOps SDLC models showing progression toward continuous delivery."
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
      "question": "What are the traditional SDLC phases?",
      "options": [
        "Plan, Do, Check, Act",
        "Requirements, Design, Implementation, Testing, Deployment, Maintenance",
        "Code, Build, Test, Deploy",
        "Dev, Ops, QA, Security"
      ],
      "answer": 1,
      "explanation": "Traditional SDLC phases are Requirements → Design → Implementation → Testing → Deployment → Maintenance."
    },
    {
      "question": "How does DevOps change SDLC?",
      "options": [
        "More documentation",
        "Continuous and automated instead of linear and manual",
        "Fewer phases",
        "Slower process"
      ],
      "answer": 1,
      "explanation": "DevOps transforms SDLC into a continuous, automated, feedback-driven process."
    },
    {
      "question": "What is the Waterfall model?",
      "options": [
        "Iterative development",
        "Sequential phases without going back",
        "Continuous delivery",
        "Agile framework"
      ],
      "answer": 1,
      "explanation": "Waterfall is a linear sequential model where each phase completes before the next begins."
    },
    {
      "question": "SDLC (Software Development Lifecycle) — What is important for security?",
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
      "question": "SDLC (Software Development Lifecycle) — How to ensure reliability?",
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
      "question": "SDLC (Software Development Lifecycle) — What helps team collaboration?",
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
      "question": "SDLC (Software Development Lifecycle) — What reduces errors most?",
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
      "question": "SDLC (Software Development Lifecycle) — What improves speed?",
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
      "question": "SDLC (Software Development Lifecycle) — What is key for monitoring?",
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
      "question": "SDLC (Software Development Lifecycle) — What ensures quality?",
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
