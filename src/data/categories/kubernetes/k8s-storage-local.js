export const k8s_storage_local = {
  "id": "k8s-storage-local",
  "title": "Local Storage",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-storage-local.json",
  "interviewAnswer": "Local storage uses local SSDs or disks attached to individual nodes. Provides high performance but data is tied to the node. Use for high-performance databases, caching, or temporary data where data loss is acceptable.",
  "tldr": [
    "Uses local node-attached disks (high performance)",
    "Data tied to the node — Pod cannot migrate with data",
    "Requires PV with nodeAffinity for scheduling",
    "Use for high-throughput read-heavy workloads"
  ],
  "deepDive": [
    {
      "heading": "Local PV",
      "text": "Static provisioning: admin creates PV with local path and nodeAffinity. Scheduler must ensure Pod runs on the correct node. WaitForFirstConsumer binding mode delays binding until Pod scheduled."
    },
    {
      "heading": "Limitations",
      "text": "Data tied to node. Node failure = data loss (unless replicated at application level). No dynamic provisioning. Manual recovery needed. Use with StatefulSet and strict node constraints."
    },
    {
      "heading": "Common Use Cases",
      "text": "Local Storage applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is local storage in K8s?",
      "answer": "Node-attached disks providing high performance with data locality constraints."
    },
    {
      "question": "How is PV tied to node?",
      "answer": "nodeAffinity in PV spec ensures correct node scheduling."
    },
    {
      "question": "Use cases?",
      "answer": "High-performance databases, caching, ephemeral high-throughput data."
    },
    {
      "question": "Limitation?",
      "answer": "Data tied to node. Node failure = data loss (unless app replicates)."
    },
    {
      "question": "Local Storage — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Local Storage — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Local Storage — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Local Storage — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Local Storage — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Local Storage — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Local PV binding mode?",
      "options": [
        "Immediate",
        "WaitForFirstConsumer",
        "Both supported"
      ],
      "answer": 1
    },
    {
      "question": "Local PV is?",
      "options": [
        "Dynamically provisioned",
        "Manually created by admin",
        "Auto-discovered"
      ],
      "answer": 1
    },
    {
      "question": "Node failure effect?",
      "options": [
        "Data persists elsewhere",
        "Data lost",
        "Data auto-migrates"
      ],
      "answer": 1
    },
    {
      "question": "Recommended for?",
      "options": [
        "Stateful HA databases",
        "High-throughput cache",
        "Long-term storage"
      ],
      "answer": 1
    },
    {
      "question": "Local Storage — How to ensure reliability?",
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
      "question": "Local Storage — What helps team collaboration?",
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
      "question": "Local Storage — What reduces errors most?",
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
      "question": "Local Storage — What improves speed?",
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
      "question": "Local Storage — What is key for monitoring?",
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
      "question": "Local Storage — What ensures quality?",
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
      "title": "Create Local PV",
      "useCase": "Use node SSD",
      "code": "kubectl apply -f local-pv.yaml",
      "description": "Creates PV with nodeAffinity."
    },
    {
      "title": "Create Local PVC",
      "useCase": "Request local storage",
      "code": "kubectl apply -f local-pvc.yaml",
      "description": "PVC binds to local PV."
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
  "laymanDefinition": "Local storage uses local SSDs or disks attached to individual nodes. Provides high performance but data is tied to the node. Use for high-performance databases, caching, or temporary data where data loss is acceptable.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Local Storage</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Local Storage</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Uses local node-attached disks (high performance)</text></svg>"
};
