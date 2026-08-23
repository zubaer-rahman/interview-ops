export const devops_sre = {
  "id": "devops-sre",
  "title": "SRE (Site Reliability Engineering)",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "SRE applies software engineering principles to operations and infrastructure problems.",
    "Originated at Google (2003). SRE teams are software engineers who design and build operational systems.",
    "Core concepts: SLOs, SLIs, error budgets, toil elimination, automation, blameless postmortems.",
    "SRE differs from traditional Ops: SREs are engineers who code, not sysadmins. They automate themselves out of manual work."
  ],
  "laymanDefinition": "SRE is like having an engineer who builds self-cleaning houses instead of a janitor. The SRE writes software that monitors, fixes, and improves the house automatically. If something breaks, they build a robot to fix it forever.",
  "deepDive": [
    {
      "heading": "SLOs, SLIs, Error Budgets",
      "text": "SLI: quantitative measure (latency p99, error rate). SLO: target value (p99 < 200ms, 99.9% availability). Error Budget: allowable unreliability (100% - SLO). If budget is available, deploy risky changes. If depleted, stop deployments until reliability improves."
    },
    {
      "heading": "Toil Elimination",
      "text": "Toil: manual, repetitive, automatable ops work (restarts, manual deploys, non-urgent alerts). SREs spend < 50% on toil. Rest is engineering to eliminate toil. Every toil task gets an automation ticket."
    },
    {
      "heading": "Blameless Postmortems",
      "text": "Focus on what happened and why, not who. No blame. Action items are system improvements. Postmortems shared broadly. Culture of learning from failure."
    },
    {
      "heading": "SRE vs DevOps",
      "text": "SRE: specific role/team with SLOs and error budgets. DevOps: broader cultural movement. SRE implements DevOps principles with specific practices. Google: \"SRE is what happens when you ask a software engineer to design an operations team.\""
    }
  ],
  "interviewAnswer": "SRE applies engineering to ops. Define SLOs and error budgets. Automate toil. Blameless postmortems. < 50% time on toil. Reliability is a feature — manage it like one.",
  "interviewQuestions": [
    {
      "question": "What is SRE?",
      "answer": "Site Reliability Engineering — applying software engineering to operations and infrastructure."
    },
    {
      "question": "What is an SLO?",
      "answer": "Service Level Objective — target value for a reliability metric (e.g., 99.9% availability)."
    },
    {
      "question": "What is an error budget?",
      "answer": "Allowable unreliability (100% - SLO). If depleted, deployments stop until reliability improves."
    },
    {
      "question": "What is toil?",
      "answer": "Manual, repetitive, automatable ops work. SREs spend < 50% time on toil."
    },
    {
      "question": "What is the difference between SRE and DevOps?",
      "answer": "SRE is a specific role with SLOs/error budgets. DevOps is a broader cultural movement."
    },
    {
      "question": "SRE (Site Reliability Engineering) — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "SRE (Site Reliability Engineering) — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "SRE (Site Reliability Engineering) — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "SRE (Site Reliability Engineering) — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "SRE (Site Reliability Engineering) — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">SRE (Site Reliability Engineering)</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SLI</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Latency, error rate</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SLO</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">99.9% availability</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Error Budget</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">0.1% = 8.7h/year</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Automation</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kill toil</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Postmortem</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Blameless learning</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SRE</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Software engineering for ops. SLOs</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, error budgets, toil elimination,</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> blameless.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SRE: Engineering applied to operations. SLO-driven</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, error budgets, automation, blameless postmortems</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "SLO Monitoring Rules (Prometheus)",
      "useCase": "SLI-based alerting.",
      "code": "groups:\n  - name: slo-alerts\n    rules:\n      - record: job:latency:p99\n        expr: histogram_quantile(0.99,\n          rate(http_duration_seconds_bucket[5m]))\n      - record: job:error_budget_burn\n        expr: (1 - job:availability:ratio) / (1 - 0.999)\n      - alert: ErrorBudgetDepleted\n        expr: error_budget_burn > 2\n        for: 1h\n        labels: { severity: critical }\n        annotations: { summary: \"Budget depleted\" }",
      "description": "Prometheus rules for SLI, error budget burn rate, and SLO-based alerting."
    },
    {
      "title": "Incident Response Runbook",
      "useCase": "SRE incident process.",
      "code": "# Incident Runbook: Service Degraded\n## Severity: SEV2\n1. ACKNOWLEDGE: Acknowledge alert in PagerDuty\n2. TRIAGE: Check Grafana, recent deploys, error logs\n3. MITIGATE: Rollback if recent deploy, scale if traffic\n4. RESOLVE: Confirm fix, update PagerDuty\n5. POSTMORTEM: Schedule within 48h, write timeline\n\n# Severity levels\nSEV1: Critical user-facing outage\nSEV2: Major degradation\nSEV3: Minor non-urgent issue",
      "description": "SRE incident response runbook with acknowledge, triage, mitigate, resolve, and postmortem."
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
      "question": "What does SRE stand for?",
      "options": [
        "Site Reliability Engineering",
        "Software Release Engineering",
        "System Resource Engineering",
        "Site Runtime Environment"
      ],
      "answer": 0,
      "explanation": "SRE = Site Reliability Engineering."
    },
    {
      "question": "What is an error budget?",
      "options": [
        "Budget for hiring",
        "Allowable unreliability (100% - SLO)",
        "Infrastructure budget",
        "Team budget"
      ],
      "answer": 1,
      "explanation": "Error budget = 100% - SLO. It represents the allowable unreliability."
    },
    {
      "question": "How much time on toil?",
      "options": [
        "No limit",
        "< 50%",
        "> 80%",
        "Exactly 50%"
      ],
      "answer": 1,
      "explanation": "SREs should spend no more than 50% of time on toil; the rest is engineering to eliminate it."
    },
    {
      "question": "SRE (Site Reliability Engineering) — What is important for security?",
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
      "question": "SRE (Site Reliability Engineering) — How to ensure reliability?",
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
      "question": "SRE (Site Reliability Engineering) — What helps team collaboration?",
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
      "question": "SRE (Site Reliability Engineering) — What reduces errors most?",
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
      "question": "SRE (Site Reliability Engineering) — What improves speed?",
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
      "question": "SRE (Site Reliability Engineering) — What is key for monitoring?",
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
      "question": "SRE (Site Reliability Engineering) — What ensures quality?",
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
