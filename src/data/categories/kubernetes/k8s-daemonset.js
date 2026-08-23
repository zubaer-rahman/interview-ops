export const k8s_daemonset = {
  "id": "k8s-daemonset",
  "title": "DaemonSet",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-daemonset.json",
  "interviewAnswer": "A DaemonSet runs one Pod per Node. As Nodes join, Pods are added. As Nodes are removed, Pods are garbage collected. Used for log collection (Fluentd), monitoring (Node Exporter), networking (kube-proxy, Calico), and storage (CSI).",
  "tldr": [
    "One Pod per Node, auto-added on Node join",
    "Scheduling: nodeSelector, affinity, taints/tolerations",
    "RollingUpdate strategy for updating DaemonSets",
    "Used for cluster infrastructure: monitoring, logging, networking"
  ],
  "deepDive": [
    {
      "heading": "Scheduling",
      "text": "Default: runs on every Node. nodeSelector restricts. Affinity: advanced selection. Tolerations: allow scheduling on control-plane nodes. updateStrategy: RollingUpdate (default) with maxSurge=1, maxUnavailable=1."
    },
    {
      "heading": "Use Cases",
      "text": "Logging: Fluentd/Filebeat per node. Monitoring: Prometheus Node Exporter. Networking: Calico, Flannel, kube-proxy as DaemonSets. Storage: CSI driver daemons. Device plugins: GPU, FPGA."
    },
    {
      "heading": "Common Use Cases",
      "text": "DaemonSet applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a DaemonSet?",
      "answer": "Runs one Pod per Node. Pods added/removed as Nodes join/leave."
    },
    {
      "question": "Which nodes run the Pod?",
      "answer": "All matching nodes (nodeSelector, affinity, tolerations)."
    },
    {
      "question": "Use cases?",
      "answer": "Monitoring, logging, networking, storage, device plugins."
    },
    {
      "question": "Default update strategy?",
      "answer": "RollingUpdate (or OnDelete)."
    },
    {
      "question": "DaemonSet — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "DaemonSet — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "DaemonSet — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "DaemonSet — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "DaemonSet — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "DaemonSet — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "DaemonSet runs on?",
      "options": [
        "One node",
        "All matching nodes",
        "Control plane"
      ],
      "answer": 1
    },
    {
      "question": "Use case?",
      "options": [
        "Web servers",
        "Node monitoring",
        "Databases"
      ],
      "answer": 1
    },
    {
      "question": "Default update strategy?",
      "options": [
        "Recreate",
        "RollingUpdate",
        "OnDelete"
      ],
      "answer": 1
    },
    {
      "question": "Needs toleration for?",
      "options": [
        "Worker nodes",
        "Control plane nodes",
        "All nodes"
      ],
      "answer": 1
    },
    {
      "question": "DaemonSet — How to ensure reliability?",
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
      "question": "DaemonSet — What helps team collaboration?",
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
      "question": "DaemonSet — What reduces errors most?",
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
      "question": "DaemonSet — What improves speed?",
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
      "question": "DaemonSet — What is key for monitoring?",
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
      "question": "DaemonSet — What ensures quality?",
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
      "title": "List DaemonSets",
      "useCase": "View cluster daemons",
      "code": "kubectl get daemonsets --all-namespaces",
      "description": "Lists all DaemonSets."
    },
    {
      "title": "Check DaemonSet Status",
      "useCase": "Verify node coverage",
      "code": "kubectl describe daemonset fluentd",
      "description": "Shows desired/current/ready."
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
  "laymanDefinition": "A DaemonSet runs one Pod per Node. As Nodes join, Pods are added. As Nodes are removed, Pods are garbage collected. Used for log collection (Fluentd), monitoring (Node Exporter), networking (kube-proxy, Calico), and storage (CSI).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DaemonSet</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DaemonSet</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">One Pod per Node, auto-added on Node join</text></svg>"
};
