export const k8s_dynamic_provisioning = {
  "id": "k8s-dynamic-provisioning",
  "title": "Dynamic Provisioning",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-dynamic-provisioning.json",
  "interviewAnswer": "Dynamic provisioning automatically creates PVs when PVCs request storage, using StorageClass-defined provisioners. Eliminates need for manual PV creation. Supports cloud volumes (EBS, PD, Azure Disk), NFS, and many more.",
  "tldr": [
    "PVs created automatically on PVC request via StorageClass",
    "Provisioner: ebs.csi.aws.com, pd.csi.storage.gke.io, disk.csi.azure.com",
    "volumeBindingMode: Immediate or WaitForFirstConsumer",
    "Default StorageClass via annotation is-default-class"
  ],
  "deepDive": [
    {
      "heading": "Provisioning Flow",
      "text": "PVC created -> controller watches -> StorageClass identified -> provisioner creates storage -> PV created -> PVC bound. Immediate: PV created regardless of Pod. WaitForFirstConsumer: delays until Pod scheduled (zone-aware)."
    },
    {
      "heading": "Configuration",
      "text": "StorageClass parameters: type (gp3, io2), zone, fsType (ext4, xfs), iopsPerGB, encrypted. reclaimPolicy: Delete (default) or Retain. allowVolumeExpansion: true enables PVC resize."
    },
    {
      "heading": "Common Use Cases",
      "text": "Dynamic Provisioning applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is dynamic provisioning?",
      "answer": "Automatic PV creation when PVC requests storage via StorageClass."
    },
    {
      "question": "Provisioner?",
      "answer": "CSI driver like ebs.csi.aws.com, disk.csi.azure.com."
    },
    {
      "question": "WaitForFirstConsumer?",
      "answer": "Delays provisioning until Pod is scheduled for zone alignment."
    },
    {
      "question": "Default StorageClass?",
      "answer": "Annotated with is-default-class: \"true\"."
    },
    {
      "question": "Dynamic Provisioning — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Dynamic Provisioning — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Dynamic Provisioning — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Dynamic Provisioning — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Dynamic Provisioning — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Dynamic Provisioning — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Dynamic PV created by?",
      "options": [
        "Admin",
        "StorageClass provisioner",
        "kubelet"
      ],
      "answer": 1
    },
    {
      "question": "WaitForFirstConsumer does?",
      "options": [
        "Binds immediately",
        "Defers to Pod scheduling",
        "Skips provisioning"
      ],
      "answer": 1
    },
    {
      "question": "Default reclaimPolicy?",
      "options": [
        "Retain",
        "Delete",
        "Recycle"
      ],
      "answer": 1
    },
    {
      "question": "allowVolumeExpansion enables?",
      "options": [
        "Volume cloning",
        "PVC resize",
        "Snapshots"
      ],
      "answer": 1
    },
    {
      "question": "Dynamic Provisioning — How to ensure reliability?",
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
      "question": "Dynamic Provisioning — What helps team collaboration?",
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
      "question": "Dynamic Provisioning — What reduces errors most?",
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
      "question": "Dynamic Provisioning — What improves speed?",
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
      "question": "Dynamic Provisioning — What is key for monitoring?",
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
      "question": "Dynamic Provisioning — What ensures quality?",
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
      "title": "Create Default StorageClass",
      "useCase": "Set default provisioner",
      "code": "kubectl annotate storageclass fast storageclass.kubernetes.io/is-default-class=true",
      "description": "Marks as default."
    },
    {
      "title": "Create PVC with Dynamic",
      "useCase": "Auto-provision",
      "code": "kubectl create pvc dynamic-pvc --storage-class=fast --access-modes=ReadWriteOnce --storage=10Gi",
      "description": "Triggers dynamic PV creation."
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
  "laymanDefinition": "Dynamic provisioning automatically creates PVs when PVCs request storage, using StorageClass-defined provisioners. Eliminates need for manual PV creation. Supports cloud volumes (EBS, PD, Azure Disk), NFS, and many more.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Dynamic Provisioning</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dynamic Provisioning</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">PVs created automatically on PVC request via Stora</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">geClass</text></svg>"
};
