export const k8s_deployment_strategy = {
  "id": "k8s-deployment-strategy",
  "title": "Deployment Strategy",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-deployment-strategy.json",
  "interviewAnswer": "Deployment strategies determine how new Pods replace old ones. RollingUpdate (default, zero-downtime) and Recreate (kill all, then create, causes downtime). Canary and Blue-Green are manual patterns, not built-in strategies.",
  "tldr": [
    "RollingUpdate: incremental, zero-downtime, default",
    "Recreate: kill all old, then create new, downtime expected",
    "maxSurge/maxUnavailable control RollingUpdate behavior",
    "Canary and Blue-Green are manual patterns"
  ],
  "deepDive": [
    {
      "heading": "RollingUpdate Details",
      "text": "maxSurge (default 25%) extra Pods above desired. maxUnavailable (default 25%) Pods that can be down. Round up. Example: 10 replicas, maxSurge=3, maxUnavailable=3. During update: 10-13 total Pods, 7-10 available."
    },
    {
      "heading": "Recreate Strategy",
      "text": "Kills all existing Pods before creating new ones. Simple, resource-efficient (no extra capacity), but downtime. Suitable for dev/test or batch systems where downtime acceptable. Also for systems with incompatible volumes."
    },
    {
      "heading": "Common Use Cases",
      "text": "Deployment Strategy applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Kubernetes deployment strategies?",
      "answer": "RollingUpdate (incremental) and Recreate (kill all then create)."
    },
    {
      "question": "What strategy causes downtime?",
      "answer": "Recreate — all old Pods killed before new ones start."
    },
    {
      "question": "Canary deployment?",
      "answer": "Manual pattern: expose new version to subset of users."
    },
    {
      "question": "How to change strategy?",
      "answer": "Update spec.strategy.type in Deployment manifest."
    },
    {
      "question": "Deployment Strategy — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Deployment Strategy — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Deployment Strategy — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Deployment Strategy — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Deployment Strategy — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Deployment Strategy — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Default deployment strategy?",
      "options": [
        "Recreate",
        "RollingUpdate",
        "Canary"
      ],
      "answer": 1
    },
    {
      "question": "Recreate causes?",
      "options": [
        "Zero-downtime",
        "Downtime",
        "No impact"
      ],
      "answer": 1
    },
    {
      "question": "Canary is?",
      "options": [
        "Built-in strategy",
        "Manual pattern",
        "Third-party tool"
      ],
      "answer": 1
    },
    {
      "question": "RollingUpdate parameter?",
      "options": [
        "strategy",
        "maxSurge",
        "updateConfig"
      ],
      "answer": 1
    },
    {
      "question": "Deployment Strategy — How to ensure reliability?",
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
      "question": "Deployment Strategy — What helps team collaboration?",
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
      "question": "Deployment Strategy — What reduces errors most?",
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
      "question": "Deployment Strategy — What improves speed?",
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
      "question": "Deployment Strategy — What is key for monitoring?",
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
      "question": "Deployment Strategy — What ensures quality?",
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
      "title": "Recreate Strategy",
      "useCase": "Simple update with downtime",
      "code": "kubectl apply -f deployment-recreate.yaml",
      "description": "Uses Recreate strategy."
    },
    {
      "title": "Check Strategy",
      "useCase": "View Deployment strategy",
      "code": "kubectl get deployment nginx -o yaml | grep strategy",
      "description": "Shows current strategy."
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
  "laymanDefinition": "Deployment strategies determine how new Pods replace old ones. RollingUpdate (default, zero-downtime) and Recreate (kill all, then create, causes downtime). Canary and Blue-Green are manual patterns, not built-in strategies.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Deployment Strategy</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deployment Strategy</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">RollingUpdate: incremental, zero-downtime, default</text></svg>"
};
