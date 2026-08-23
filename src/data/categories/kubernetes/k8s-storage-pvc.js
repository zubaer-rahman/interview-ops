export const k8s_storage_pvc = {
  "id": "k8s-storage-pvc",
  "title": "Persistent Volume Claims",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-storage-pvc.json",
  "interviewAnswer": "PVCs are storage requests specifying size, access mode, and StorageClass. Binds to matching PV or triggers dynamic provisioning. Pods reference PVCs as volumes. Data persists beyond Pod deletion.",
  "tldr": [
    "Storage request: size, access mode, StorageClass",
    "Binds to matching PV or triggers dynamic provisioning",
    "Data persists beyond Pod deletion",
    "volumeClaimTemplates auto-create per-replica PVCs in StatefulSets"
  ],
  "deepDive": [
    {
      "heading": "PVC Binding",
      "text": "Matches on storageClassName, access modes, capacity. Selectors for specific PVs. pvc-protection finalizer prevents in-use deletion."
    },
    {
      "heading": "PVC Protection",
      "text": "kubernetes.io/pvc-protection finalizer prevents deletion while Pods use it. PVC stays Terminating until Pods deleted."
    },
    {
      "heading": "Common Use Cases",
      "text": "Persistent Volume Claims applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a PVC?",
      "answer": "Storage request binding to matching PV or triggering dynamic provisioning."
    },
    {
      "question": "Pod uses PVC how?",
      "answer": "volumes[].persistentVolumeClaim.claimName reference."
    },
    {
      "question": "No matching PV?",
      "answer": "Stays Pending until PV available or dynamic provisioned."
    },
    {
      "question": "PVC protection?",
      "answer": "Finalizer prevents deletion while Pods use the PVC."
    },
    {
      "question": "Persistent Volume Claims — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Persistent Volume Claims — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Persistent Volume Claims — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Persistent Volume Claims — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Persistent Volume Claims — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Persistent Volume Claims — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "PVC binds to?",
      "options": [
        "Node",
        "Pod",
        "PersistentVolume",
        "StorageClass"
      ],
      "answer": 2
    },
    {
      "question": "No matching PV?",
      "options": [
        "Deleted",
        "Pending",
        "Error"
      ],
      "answer": 1
    },
    {
      "question": "In-use deletion prevented by?",
      "options": [
        "RBAC",
        "pvc-protection finalizer",
        "Admission controller"
      ],
      "answer": 1
    },
    {
      "question": "Auto-creates PVCs in StatefulSets?",
      "options": [
        "statefulSetSpec",
        "volumeClaimTemplates",
        "storageTemplate"
      ],
      "answer": 1
    },
    {
      "question": "Persistent Volume Claims — How to ensure reliability?",
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
      "question": "Persistent Volume Claims — What helps team collaboration?",
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
      "question": "Persistent Volume Claims — What reduces errors most?",
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
      "question": "Persistent Volume Claims — What improves speed?",
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
      "question": "Persistent Volume Claims — What is key for monitoring?",
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
      "question": "Persistent Volume Claims — What ensures quality?",
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
      "title": "Create PVC",
      "useCase": "Request storage",
      "code": "kubectl create pvc my-pvc --storage-class=fast --access-modes=ReadWriteOnce --storage=5Gi",
      "description": "Creates PVC request."
    },
    {
      "title": "Use in Deployment",
      "useCase": "Mount storage",
      "code": "kubectl set volume deployment/web --add --name=data --mount-path=/data --type=persistentVolumeClaim --claim-name=my-pvc",
      "description": "Adds PVC volume."
    },
    {
      "title": "Check PVC Status",
      "useCase": "Verify binding",
      "code": "kubectl get pvc",
      "description": "Shows binding status."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "PVCs are storage requests specifying size, access mode, and StorageClass. Binds to matching PV or triggers dynamic provisioning. Pods reference PVCs as volumes. Data persists beyond Pod deletion.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Persistent Volume Claims</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Persistent Volume Claims</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Storage request: size, access mode, StorageClass</text></svg>"
};
