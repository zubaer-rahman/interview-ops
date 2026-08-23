export const k8s_rollback = {
  "id": "k8s-rollback",
  "title": "Rollback",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-rollback.json",
  "interviewAnswer": "Rollback reverts a Deployment to a previous revision. Kubernetes maintains ControllerRevision objects for each Deployment. Rollbacks scale up the old ReplicaSet and scale down the new one. Only Pod template changes create new revisions.",
  "tldr": [
    "kubectl rollout undo deployment/<name>",
    "--to-revision flag for specific revision",
    "revisionHistoryLimit controls retained revisions (default 10)",
    "Scaling does NOT create a new revision"
  ],
  "deepDive": [
    {
      "heading": "Revision History",
      "text": "Each Pod template change creates a new ControllerRevision. Scaling does NOT create a revision. revisionHistoryLimit (default 10) controls retention. Rollback sets template to previous revision, triggering a new rollout (creates rev N+1)."
    },
    {
      "heading": "Rollback Details",
      "text": "kubectl rollout undo reverts to previous revision. --to-revision=1 goes to initial. Rollback is scale up old RS, scale down new RS. Revision 1 is the initial deployment state."
    },
    {
      "heading": "Common Use Cases",
      "text": "Rollback applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "How to rollback?",
      "answer": "kubectl rollout undo deployment/<name>."
    },
    {
      "question": "Rollback to specific revision?",
      "answer": "kubectl rollout undo deployment/<name> --to-revision=N."
    },
    {
      "question": "Does scaling create a revision?",
      "answer": "No. Only Pod template changes create revisions."
    },
    {
      "question": "revisionHistoryLimit default?",
      "answer": "10 revisions retained."
    },
    {
      "question": "Rollback — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Rollback — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Rollback — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Rollback — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Rollback — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Rollback — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Rollback command?",
      "options": [
        "kubectl revert",
        "kubectl rollout undo",
        "kubectl rollback"
      ],
      "answer": 1
    },
    {
      "question": "Does scaling create revision?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": 1
    },
    {
      "question": "revisionHistoryLimit default?",
      "options": [
        "3",
        "10",
        "20"
      ],
      "answer": 1
    },
    {
      "question": "Rollback creates new revision?",
      "options": [
        "Yes (creates rev N+1)",
        "No (restores old rev directly)"
      ],
      "answer": 0
    },
    {
      "question": "Rollback — How to ensure reliability?",
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
      "question": "Rollback — What helps team collaboration?",
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
      "question": "Rollback — What reduces errors most?",
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
      "question": "Rollback — What improves speed?",
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
      "question": "Rollback — What is key for monitoring?",
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
      "question": "Rollback — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ],
  "codeExamples": [
    {
      "title": "Rollback to Previous",
      "useCase": "Undo last change",
      "code": "kubectl rollout undo deployment/nginx",
      "description": "Rolls back to previous revision."
    },
    {
      "title": "Rollback to Specific Rev",
      "useCase": "Target specific revision",
      "code": "kubectl rollout undo deployment/nginx --to-revision=2",
      "description": "Rolls back to revision 2."
    },
    {
      "title": "View History",
      "useCase": "List revisions",
      "code": "kubectl rollout history deployment/nginx",
      "description": "Shows all revisions."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "Rollback reverts a Deployment to a previous revision. Kubernetes maintains ControllerRevision objects for each Deployment. Rollbacks scale up the old ReplicaSet and scale down the new one. Only Pod template changes create new revisions.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Rollback</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rollback</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">kubectl rollout undo deployment/<name></text></svg>"
};
