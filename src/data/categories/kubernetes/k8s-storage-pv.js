export const k8s_storage_pv = {
  "id": "k8s-storage-pv",
  "title": "Persistent Volumes",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-storage-pv.json",
  "interviewAnswer": "Persistent Volumes (PVs) provide cluster-wide storage with lifecycle independent of Pods. Access modes: RWO, ROX, RWX. Reclaim: Retain (manual), Delete (auto). Static (admin creates) or dynamic (StorageClass).",
  "tldr": [
    "Cluster-wide storage with Pod-independent lifecycle",
    "Access modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
    "Reclaim policies: Retain (manual), Delete (auto-delete)",
    "Static (admin) or dynamic (StorageClass) provisioning"
  ],
  "deepDive": [
    {
      "heading": "PV Lifecycle",
      "text": "Phases: Available, Bound, Released, Failed. Dynamic via StorageClass creates PVs on PVC request. Static: admin pre-creates PVs matching PVC requirements."
    },
    {
      "heading": "StorageClass",
      "text": "Defines provisioner, parameters (disk type, IOPS), reclaimPolicy. volumeBindingMode: Immediate or WaitForFirstConsumer. allowVolumeExpansion enables PVC resizing."
    },
    {
      "heading": "Common Use Cases",
      "text": "Persistent Volumes applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a PV?",
      "answer": "Cluster storage with independent lifecycle. Admin-provisioned or dynamically created."
    },
    {
      "question": "PV access modes?",
      "answer": "ReadWriteOnce (RWO), ReadOnlyMany (ROX), ReadWriteMany (RWX)."
    },
    {
      "question": "PV reclaim policies?",
      "answer": "Retain (manual), Delete (auto-delete)."
    },
    {
      "question": "What is a StorageClass?",
      "answer": "Template for dynamic PV provisioning with provisioner and parameters."
    },
    {
      "question": "Persistent Volumes — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Persistent Volumes — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Persistent Volumes — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Persistent Volumes — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Persistent Volumes — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Persistent Volumes — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Multi-node read-write?",
      "options": [
        "ReadWriteOnce",
        "ReadOnlyMany",
        "ReadWriteMany"
      ],
      "answer": 2
    },
    {
      "question": "Auto-deletes PV?",
      "options": [
        "Retain",
        "Delete",
        "Recycle"
      ],
      "answer": 1
    },
    {
      "question": "Dynamic PV by?",
      "options": [
        "kube-controller-manager",
        "StorageClass provisioner",
        "kubelet"
      ],
      "answer": 1
    },
    {
      "question": "PVC-deleted phase?",
      "options": [
        "Available",
        "Bound",
        "Released",
        "Failed"
      ],
      "answer": 2
    },
    {
      "question": "Persistent Volumes — How to ensure reliability?",
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
      "question": "Persistent Volumes — What helps team collaboration?",
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
      "question": "Persistent Volumes — What reduces errors most?",
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
      "question": "Persistent Volumes — What improves speed?",
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
      "question": "Persistent Volumes — What is key for monitoring?",
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
      "question": "Persistent Volumes — What ensures quality?",
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
      "title": "Create Static PV",
      "useCase": "Manual provisioning",
      "code": "kubectl apply -f pv.yaml",
      "description": "Creates static PV."
    },
    {
      "title": "Create StorageClass",
      "useCase": "Dynamic provisioning",
      "code": "kubectl apply -f storage-class.yaml",
      "description": "Creates StorageClass."
    },
    {
      "title": "List PVs",
      "useCase": "View storage resources",
      "code": "kubectl get pv",
      "description": "Lists all PVs."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "Persistent Volumes (PVs) provide cluster-wide storage with lifecycle independent of Pods. Access modes: RWO, ROX, RWX. Reclaim: Retain (manual), Delete (auto). Static (admin creates) or dynamic (StorageClass).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Persistent Volumes</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Persistent Volumes</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Cluster-wide storage with Pod-independent lifecycl</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">e</text></svg>"
};
