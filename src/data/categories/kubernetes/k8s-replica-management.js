export const k8s_replica_management = {
  "id": "k8s-replica-management",
  "title": "Replica Management",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-replica-management.json",
  "interviewAnswer": "Replica management covers scaling, self-healing, and maintaining desired replica counts. Controllers reconcile actual state to desired state. If Pods crash, replacement created. Scaling adjusts desired count.",
  "tldr": [
    "Desired vs actual state reconciliation loop",
    "Self-healing: controller replaces failed Pods automatically",
    "Scaling: update replicas field to add/remove Pods",
    "HPA adjusts spec.replicas based on metrics"
  ],
  "deepDive": [
    {
      "heading": "Reconciliation Loop",
      "text": "Controller watches (list+watch), caches state (informers). Compares desired replicas to actual Pods matching selector. Creates Pods if too few, deletes if too many. Rate-limited work queue with backoff. Leader election ensures single controller acts."
    },
    {
      "heading": "HPA Integration",
      "text": "HorizontalPodAutoscaler reads metrics (CPU, memory, custom) and adjusts spec.replicas. Target must be scalable (Deployment, StatefulSet). HPA cycles every 15s with scale-down stabilization window (default 5 min)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Replica Management applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is replica management?",
      "answer": "Maintaining desired replica count through reconciliation and self-healing."
    },
    {
      "question": "How do controllers maintain state?",
      "answer": "Reconciliation loop: watch -> compare -> act (create/delete Pods)."
    },
    {
      "question": "How does HPA relate?",
      "answer": "HPA reads metrics and adjusts spec.replicas on the target."
    },
    {
      "question": "What if a Pod crashes?",
      "answer": "Controller detects and creates a replacement."
    },
    {
      "question": "Replica Management — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Replica Management — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Replica Management — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Replica Management — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Replica Management — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Replica Management — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Reconciliation is?",
      "options": [
        "Manual",
        "Automated loop",
        "Event-driven only"
      ],
      "answer": 1
    },
    {
      "question": "HPA scale-down stabilization default?",
      "options": [
        "1 min",
        "5 min",
        "15 min"
      ],
      "answer": 1
    },
    {
      "question": "Which is NOT a controller?",
      "options": [
        "Deployment",
        "ReplicaSet",
        "Service",
        "StatefulSet"
      ],
      "answer": 2
    },
    {
      "question": "Scaling adjusts?",
      "options": [
        "spec.replicas",
        "spec.template",
        "spec.selector"
      ],
      "answer": 0
    },
    {
      "question": "Replica Management — How to ensure reliability?",
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
      "question": "Replica Management — What helps team collaboration?",
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
      "question": "Replica Management — What reduces errors most?",
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
      "question": "Replica Management — What improves speed?",
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
      "question": "Replica Management — What is key for monitoring?",
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
      "question": "Replica Management — What ensures quality?",
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
      "title": "Scale Deployment",
      "useCase": "Change replica count",
      "code": "kubectl scale deployment nginx --replicas=5",
      "description": "Scales to 5 replicas."
    },
    {
      "title": "Autoscale",
      "useCase": "HPA configuration",
      "code": "kubectl autoscale deployment nginx --cpu-percent=80 --min=3 --max=10",
      "description": "Creates HPA."
    },
    {
      "title": "Check Replica Status",
      "useCase": "Verify Pods",
      "code": "kubectl get pods -l app=nginx",
      "description": "Lists matching Pods."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "Replica management covers scaling, self-healing, and maintaining desired replica counts. Controllers reconcile actual state to desired state. If Pods crash, replacement created. Scaling adjusts desired count.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Replica Management</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replica Management</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Desired vs actual state reconciliation loop</text></svg>"
};
