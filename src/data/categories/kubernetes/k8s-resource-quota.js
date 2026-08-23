export const k8s_resource_quota = {
  "id": "k8s-resource-quota",
  "title": "ResourceQuota",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-resource-quota.json",
  "interviewAnswer": "ResourceQuota limits aggregate resource consumption per Namespace. Prevents a namespace from exhausting cluster resources. Limits: compute (CPU, memory), storage (PVCs), and object counts (Pods, Services).",
  "tldr": [
    "Namespace-level aggregate resource limits",
    "Compute: requests.cpu, requests.memory, limits.cpu, limits.memory",
    "Object counts: count/pods, count/services, count/configmaps",
    "Scopes: BestEffort, NotTerminating, Terminating"
  ],
  "deepDive": [
    {
      "heading": "Quota Scopes",
      "text": "BestEffort: Pods with only BestEffort QoS. NotBestEffort: Burstable or Guaranteed. Terminating: activeDeadlineSeconds >= 0. NotTerminating: no deadline. scopeSelector for AND logic."
    },
    {
      "heading": "Enforcement",
      "text": "Validated on resource creation. Exhausted = 403 Forbidden. Must exist before resources to enforce."
    },
    {
      "heading": "Common Use Cases",
      "text": "ResourceQuota applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is ResourceQuota?",
      "answer": "Namespace-level aggregate resource and object count limits."
    },
    {
      "question": "Exhausted quota?",
      "answer": "403 Forbidden on resource creation."
    },
    {
      "question": "BestEffort scope?",
      "answer": "Applies to Pods without resource requests/limits."
    },
    {
      "question": "Limited resources?",
      "answer": "CPU, memory, storage, PVCs, object counts."
    },
    {
      "question": "ResourceQuota — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "ResourceQuota — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "ResourceQuota — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "ResourceQuota — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "ResourceQuota — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "ResourceQuota — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "BestEffort scope?",
      "options": [
        "NotTerminating",
        "BestEffort",
        "Terminating"
      ],
      "answer": 1
    },
    {
      "question": "Exhausted quota returns?",
      "options": [
        "200 OK",
        "403 Forbidden",
        "429 Too Many"
      ],
      "answer": 1
    },
    {
      "question": "Count of Pods uses?",
      "options": [
        "count/pods",
        "podsCount",
        "count: pods"
      ],
      "answer": 0
    },
    {
      "question": "Quota scope?",
      "options": [
        "Cluster",
        "Namespace",
        "Node"
      ],
      "answer": 1
    },
    {
      "question": "ResourceQuota — How to ensure reliability?",
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
      "question": "ResourceQuota — What helps team collaboration?",
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
      "question": "ResourceQuota — What reduces errors most?",
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
      "question": "ResourceQuota — What improves speed?",
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
      "question": "ResourceQuota — What is key for monitoring?",
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
      "question": "ResourceQuota — What ensures quality?",
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
      "title": "Create ResourceQuota",
      "useCase": "Limit namespace",
      "code": "kubectl create quota my-quota --hard=cpu=4,memory=8Gi,pods=10",
      "description": "Creates compute and Pod count limits."
    },
    {
      "title": "View Quota",
      "useCase": "Check usage",
      "code": "kubectl get resourcequotas",
      "description": "Shows limits and current usage."
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
  "laymanDefinition": "ResourceQuota limits aggregate resource consumption per Namespace. Prevents a namespace from exhausting cluster resources. Limits: compute (CPU, memory), storage (PVCs), and object counts (Pods, Services).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ResourceQuota</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ResourceQuota</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Namespace-level aggregate resource limits</text></svg>"
};
