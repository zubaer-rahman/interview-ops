export const devops_agile_vs_devops = {
  "id": "devops-agile-vs-devops",
  "title": "Agile vs DevOps",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Agile is a software development methodology focused on iterative development, customer collaboration, and responding to change.",
    "DevOps extends Agile by bridging the gap between development and operations, focusing on the entire delivery pipeline.",
    "Agile answers \"how do we build software better?\" while DevOps answers \"how do we deliver and operate it better?\"",
    "They are complementary: Agile improves development processes, DevOps extends that to deployment and operations."
  ],
  "laymanDefinition": "Agile is like improving how a kitchen prepares meals — better recipes, faster chopping, tastier dishes. DevOps is like connecting that kitchen to the dining room with a conveyor belt — meals go from chef to customer instantly, and empty plates come back with feedback notes.",
  "deepDive": [
    {
      "heading": "Agile Principles (Agile Manifesto)",
      "text": "Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan. Twelve principles including: deliver frequently, welcome changing requirements, business and dev work together daily."
    },
    {
      "heading": "DevOps Extensions to Agile",
      "text": "Agile stops at \"working software\" delivered to operations. DevOps continues: deploy to production, monitor, operate, gather feedback, improve. DevOps adds: infrastructure as code, automated deployment, production monitoring, incident response, reliability engineering."
    },
    {
      "heading": "Key Differences",
      "text": "Agile scope: dev team focused (sprints, standups, retrospectives). DevOps scope: entire value stream (code to production to feedback). Agile metric: velocity. DevOps metric: deployment frequency, MTTR. Agile practices: Scrum, Kanban. DevOps practices: CI/CD, IaC, monitoring."
    },
    {
      "heading": "How They Work Together",
      "text": "Agile teams plan and build in sprints. DevOps automates the path from commit to production. Agile retrospectives feed into DevOps improvements. DevOps monitoring feeds back into Agile backlog. Combined: faster iterations with reliable deliveries. Best practice: DevOps-enabled Agile teams."
    }
  ],
  "interviewAnswer": "Agile and DevOps are complementary, not competing. Agile improves how you build; DevOps improves how you deliver and operate. Agile focuses on development teams; DevOps spans the entire organization. Agile without DevOps is slow delivery; DevOps without Agile is automation without direction.",
  "interviewQuestions": [
    {
      "question": "What is Agile?",
      "answer": "A software development methodology focused on iterative development, customer collaboration, and responding to change."
    },
    {
      "question": "What does DevOps add beyond Agile?",
      "answer": "Operations, deployment automation, production monitoring, incident response, and reliability engineering."
    },
    {
      "question": "What is the Agile Manifesto?",
      "answer": "Four values: individuals/interactions, working software, customer collaboration, responding to change."
    },
    {
      "question": "What is a key difference between Agile and DevOps scope?",
      "answer": "Agile focuses on dev team; DevOps spans the entire value stream from code to production."
    },
    {
      "question": "What does Agile measure?",
      "answer": "Velocity (story points per sprint). DevOps measures deployment frequency, lead time, MTTR, change failure rate."
    },
    {
      "question": "Can you do DevOps without Agile?",
      "answer": "Partially. But Agile provides the iterative development rhythm that DevOps automates and accelerates."
    },
    {
      "question": "Agile vs DevOps — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Agile vs DevOps — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Agile vs DevOps — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Agile vs DevOps — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Agile vs DevOps</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agile</text><text x=\"65\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build software bette</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Scrum/Kanban</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Iterative dev</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Velocity</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sprint metrics</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"115\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"217.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DevOps</text><text x=\"217.5\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deliver + operate be</text><text x=\"217.5\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tter</text><rect x=\"160\" y=\"65\" width=\"115\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"217.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI/CD</text><text x=\"217.5\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automate pipeline</text><rect x=\"160\" y=\"95\" width=\"115\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"217.5\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DORA Metrics</text><text x=\"217.5\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deploy freq, MTTR</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agile + DevOps</text><text x=\"385\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Complementary: Agile builds, DevOp</text><text x=\"385\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s delivers and operates. Together:</text><text x=\"385\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> fast + reliable.</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Agile vs DevOps: Agile improves development; DevOp</text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s extends to delivery and operations. Both needed.</text></svg>",
  "codeExamples": [
    {
      "title": "Agile Sprint with DevOps Pipeline",
      "useCase": "Combined workflow.",
      "code": "# Agile + DevOps combined workflow\n\n# Sprint Planning (Agile)\n# → Backlog refinement, story pointing\n\n# Daily Development (Agile + DevOps)\n# → Code → Commit → CI build → Test → Deploy to staging\n\n# Sprint Review (Agile)\n# → Demo working software\n\n# Release (DevOps)\n# → Approve → Deploy to production via pipeline\n\n# Monitor (DevOps)\n# → Track metrics, errors, user behavior\n\n# Retrospective (Agile + DevOps)\n# → What improved? What broke? What to change next sprint?\n\n# Feedback Loop\n# → Production data → Backlog → Next sprint",
      "description": "Combined Agile Sprint with DevOps pipeline showing how both methodologies work together."
    },
    {
      "title": "Agile vs DevOps Comparison",
      "useCase": "Side-by-side differences.",
      "code": "+-------------------+-------------------+-------------------+\n| Aspect           | Agile             | DevOps            |\n+-------------------+-------------------+-------------------+\n| Focus            | Development       | Full lifecycle    |\n| Team scope       | Dev team          | Dev + Ops + QA    |\n| Primary metric   | Velocity          | Deploy frequency  |\n| Time horizon     | Sprints (2 wks)   | Continuous        |\n| Key practice     | Standups          | Monitoring        |\n| Output           | Working software  | Running software  |\n| Automation       | Optional          | Essential         |\n| Infrastructure   | Dev environment   | Full IaC          |\n+-------------------+-------------------+-------------------+",
      "description": "Side-by-side comparison of Agile and DevOps across key dimensions."
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
      "question": "What does Agile focus on?",
      "options": [
        "Operations",
        "Development process",
        "Deployment",
        "Monitoring"
      ],
      "answer": 1,
      "explanation": "Agile focuses on improving the software development process."
    },
    {
      "question": "What does DevOps add beyond Agile?",
      "options": [
        "Better documentation",
        "Operations and delivery pipeline",
        "Longer sprints",
        "More meetings"
      ],
      "answer": 1,
      "explanation": "DevOps extends Agile by adding operations, deployment automation, monitoring, and incident response."
    },
    {
      "question": "What is a key DevOps metric NOT used in Agile?",
      "options": [
        "Velocity",
        "Story points",
        "Deployment frequency",
        "Sprint burndown"
      ],
      "answer": 2,
      "explanation": "Deployment frequency is a DORA metric specific to DevOps, not typically tracked in Agile alone."
    },
    {
      "question": "Agile vs DevOps — What is important for security?",
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
      "question": "Agile vs DevOps — How to ensure reliability?",
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
      "question": "Agile vs DevOps — What helps team collaboration?",
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
      "question": "Agile vs DevOps — What reduces errors most?",
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
      "question": "Agile vs DevOps — What improves speed?",
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
      "question": "Agile vs DevOps — What is key for monitoring?",
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
      "question": "Agile vs DevOps — What ensures quality?",
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
