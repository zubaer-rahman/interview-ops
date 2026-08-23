export const k8s_persistent_volume = {
  "id": "k8s-persistent-volume",
  "title": "Persistent Volume",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-persistent-volume.json",
  "interviewAnswer": "A PersistentVolume (PV) is cluster storage with lifecycle independent of Pods. Abstracted from consumption via PVCs. Access modes: RWO, ROX, RWX. Reclaim: Retain, Delete, Recycle. Statically or dynamically provisioned.",
  "tldr": [
    "Cluster-wide storage with Pod-independent lifecycle",
    "Access modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany",
    "Reclaim policies: Retain (manual), Delete (auto-delete), Recycle (deprecated)",
    "Static (admin creates) or dynamic (StorageClass provisions)"
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
      "text": "Persistent Volume applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
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
      "answer": "Retain (manual), Delete (auto-delete), Recycle (deprecated)."
    },
    {
      "question": "What is a StorageClass?",
      "answer": "Defines provisioner, parameters, and reclaim policy for dynamic PV provisioning."
    },
    {
      "question": "Persistent Volume — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Persistent Volume — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Persistent Volume — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Persistent Volume — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Persistent Volume — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Persistent Volume — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Multiple nodes read-write?",
      "options": [
        "ReadWriteOnce",
        "ReadOnlyMany",
        "ReadWriteMany"
      ],
      "answer": 2,
      "explanation": "ReadWriteMany allows multi-node read-write."
    },
    {
      "question": "Auto-deletes PV?",
      "options": [
        "Retain",
        "Delete",
        "Recycle"
      ],
      "answer": 1,
      "explanation": "Delete policy auto-removes PV and storage."
    },
    {
      "question": "Dynamic PV provisioning by?",
      "options": [
        "kube-controller-manager",
        "StorageClass provisioner",
        "kubelet"
      ],
      "answer": 1,
      "explanation": "StorageClass provisioner creates PVs."
    },
    {
      "question": "PVC-deleted phase?",
      "options": [
        "Available",
        "Bound",
        "Released",
        "Failed"
      ],
      "answer": 2,
      "explanation": "Released phase."
    },
    {
      "question": "Persistent Volume — How to ensure reliability?",
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
      "question": "Persistent Volume — What helps team collaboration?",
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
      "question": "Persistent Volume — What reduces errors most?",
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
      "question": "Persistent Volume — What improves speed?",
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
      "question": "Persistent Volume — What is key for monitoring?",
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
      "question": "Persistent Volume — What ensures quality?",
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
      "useCase": "View resources",
      "code": "kubectl get pv\nkubectl get pvc",
      "description": "Lists all PVs and PVCs."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A PersistentVolume (PV) is cluster storage with lifecycle independent of Pods. Abstracted from consumption via PVCs. Access modes: RWO, ROX, RWX. Reclaim: Retain, Delete, Recycle. Statically or dynamically provisioned.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Persistent Volume</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Persistent Volume</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Cluster-wide storage with Pod-independent lifecycl</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">e</text></svg>"
};
