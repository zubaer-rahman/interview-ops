export const k8s_tolerations = {
  "id": "k8s-tolerations",
  "title": "Tolerations",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-tolerations.json",
  "interviewAnswer": "Tolerations allow Pods to be scheduled on Nodes with matching taints. Operator: Equal (exact key+value) or Exists (key only). TolerationSeconds limits time tolerating NoExecute. Paired with taints for dedicated hardware or control plane workloads.",
  "tldr": [
    "Pod property enabling scheduling on tainted Nodes",
    "Equal operator: exact key+value match. Exists: key only",
    "tolerationSeconds: duration before NoExecute eviction",
    "DaemonSets include tolerations for control plane nodes"
  ],
  "deepDive": [
    {
      "heading": "Toleration Fields",
      "text": "key, value, operator (Equal or Exists), effect, tolerationSeconds. Exists operator matches any value (just key+effect). Equal requires exact value. effect can match all if omitted. tolerationSeconds: for NoExecute, Pod stays this long before eviction."
    },
    {
      "heading": "Default Tolerations",
      "text": "Added by kubelet: node.kubernetes.io/not-ready (300s), node.kubernetes.io/unreachable (300s), node.kubernetes.io/memory-pressure (NoSchedule), node.kubernetes.io/disk-pressure (NoSchedule). Pods can override."
    },
    {
      "heading": "Common Use Cases",
      "text": "Tolerations applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a toleration?",
      "answer": "Pod property enabling scheduling on tainted Nodes."
    },
    {
      "question": "Equal vs Exists?",
      "answer": "Equal = exact key+value. Exists = key matches regardless of value."
    },
    {
      "question": "tolerationSeconds?",
      "answer": "Duration a Pod tolerates a NoExecute taint before eviction."
    },
    {
      "question": "No tolerance for NoExecute?",
      "answer": "Immediate eviction from the tainted node."
    },
    {
      "question": "Tolerations — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Tolerations — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Tolerations — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Tolerations — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Tolerations — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Tolerations — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Toleration operator for any value?",
      "options": [
        "Equal",
        "Exists",
        "Any"
      ],
      "answer": 1
    },
    {
      "question": "tolerationSeconds applies to?",
      "options": [
        "NoSchedule",
        "PreferNoSchedule",
        "NoExecute"
      ],
      "answer": 2
    },
    {
      "question": "Default toleration for not-ready?",
      "options": [
        "No",
        "Yes, 300s",
        "Yes, infinite"
      ],
      "answer": 1
    },
    {
      "question": "DaemonSet toleration for master?",
      "options": [
        "Exists effect NoSchedule",
        "Equal gpu=true",
        "Both"
      ],
      "answer": 0
    },
    {
      "question": "Tolerations — How to ensure reliability?",
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
      "question": "Tolerations — What helps team collaboration?",
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
      "question": "Tolerations — What reduces errors most?",
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
      "question": "Tolerations — What improves speed?",
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
      "question": "Tolerations — What is key for monitoring?",
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
      "question": "Tolerations — What ensures quality?",
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
      "title": "Schedule on Control Plane",
      "useCase": "Run on master node",
      "code": "kubectl create deployment debug --image=busybox -- sh -c \"sleep 3600\"",
      "description": "May need toleration added via YAML."
    },
    {
      "title": "View Toleration Config",
      "useCase": "Inspect Pod tolerations",
      "code": "kubectl describe pod my-pod | grep -A 10 Tolerations",
      "description": "Shows all tolerations."
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
  "laymanDefinition": "Tolerations allow Pods to be scheduled on Nodes with matching taints. Operator: Equal (exact key+value) or Exists (key only). TolerationSeconds limits time tolerating NoExecute. Paired with taints for dedicated hardware or control plane workloads.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Tolerations</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Tolerations</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Pod property enabling scheduling on tainted Nodes</text></svg>"
};
