export const cicd_rollback = {
  "id": "cicd-rollback",
  "title": "Rollback Strategies",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Rollback is the process of reverting a deployment to a previous known-good version when issues are detected.",
    "Strategies: instant (blue-green), gradual (canary rollback), git revert + redeploy, database rollback.",
    "Key: rollbacks should be automated, tested, and fast (ideally sub-minute).",
    "Automated rollback strategies ensure failed deployments are handled gracefully with minimal user disruption."
  ],
  "laymanDefinition": "Rollback is like an \"undo\" button for deployments. If a new version causes errors, you immediately switch back to the last working version. A good rollback strategy is essential — not \"if\" something will go wrong, but \"when.\"",
  "deepDive": [
    {
      "heading": "Rollback Methods",
      "text": "Blue-green switch: flip traffic back to previous environment (instant). Container rollback: kubectl rollout undo deployment/myapp. Git revert: revert commit + redeploy. Database: schema rollback scripts or backup restore. Feature flag: turn off problematic feature (no deploy needed)."
    },
    {
      "heading": "Automated Rollback",
      "text": "Health check failures auto-trigger rollback. Metrics degradation (error rate > 1%). Timeout: if new version unhealthy after X minutes. Pipeline: automated revert + deploy. Break glass: manual emergency button. Rollback history: keep last N versions."
    },
    {
      "heading": "Database Rollback",
      "text": "Backward-compatible migrations: add before remove. Versioned migrations: each DB change is reversible. Flyway, Liquibase: support undo (but dangerous). Blue-green with shared DB: both versions must work. Golden rule: never roll back a database schema change automatically — write a forward fix instead."
    },
    {
      "heading": "Pitfalls",
      "text": "Schema changes make rollback hard. Data migrations can\\'t be reverted (data loss). Cached data may reference new schema. External APIs may not support rollback. Rollback should be a regular deployment of previous version (not a special process)."
    }
  ],
  "interviewAnswer": "Rollback is the process of reverting a deployment to a previous known-good version when issues are detected.",
  "interviewQuestions": [
    {
      "question": "What is the fastest rollback method?",
      "answer": "Blue-green switch: instant traffic flip to previous environment."
    },
    {
      "question": "What is the golden rule of database rollbacks?",
      "answer": "Don\\'t automate schema rollbacks — write forward fixes instead. Backward-compatible changes only."
    },
    {
      "question": "What is kubectl rollout undo?",
      "answer": "Kubernetes command to revert a Deployment to the previous revision."
    },
    {
      "question": "Rollback Strategies — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Rollback Strategies — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Rollback Strategies — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Rollback Strategies — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Rollback Strategies — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Rollback Strategies — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Rollback Strategies — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Rollback Strategies</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy V2</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">New version goes live</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Issue Detected</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Errors, latency spike</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rollback V1</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Revert to previous</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Rollback: Revert to previous version on failure. B</text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lue-green = instant. DB rollbacks need special car</text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">e.</text></svg>",
  "codeExamples": [
    {
      "title": "K8s Rollback",
      "useCase": "Kubernetes rollout undo.",
      "code": "kubectl rollout undo deployment/myapp\nkubectl rollout status deployment/myapp",
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
      "question": "What is the recommended approach for database rollbacks?",
      "options": [
        "Automated schema rollback",
        "Write forward fix instead of reverting schema",
        "Restore from backup",
        "Ignore the issue"
      ],
      "answer": 1,
      "explanation": "Instead of rolling back schema changes (which can cause data loss), write forward-fix migrations to correct issues."
    },
    {
      "question": "Rollback Strategies — What is the recommended approach?",
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
      "question": "Rollback Strategies — What should be prioritized?",
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
      "question": "Rollback Strategies — What is important for security?",
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
      "question": "Rollback Strategies — How to ensure reliability?",
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
      "question": "Rollback Strategies — What helps team collaboration?",
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
      "question": "Rollback Strategies — What reduces errors most?",
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
      "question": "Rollback Strategies — What improves speed?",
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
      "question": "Rollback Strategies — What is key for monitoring?",
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
      "question": "Rollback Strategies — What ensures quality?",
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
