export const k8s_csi_drivers = {
  "id": "k8s-csi-drivers",
  "title": "CSI Drivers",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "file": "k8s-csi-drivers.json",
  "interviewAnswer": "Container Storage Interface (CSI) enables storage vendors to develop plugins without modifying Kubernetes core. CSI drivers replace in-tree provisioners. They provide volume provisioning, attachment, mounting, snapshots, and encryption.",
  "tldr": [
    "Standard interface for storage plugins (CSI spec)",
    "Replace in-tree volume plugins",
    "Features: create/delete, attach/detach, mount/unmount",
    "Supports snapshots, cloning, resize, encryption"
  ],
  "deepDive": [
    {
      "heading": "CSI Architecture",
      "text": "External components: Driver DaemonSet (runs on every node for mount), Controller Deployment (for create/delete), attacher (for attach/detach), resizer (for volume resize), snapshotter (for snapshots). CSI Identity, Controller, Node services."
    },
    {
      "heading": "CSI Features",
      "text": "snapshotting: VolumeSnapshot and VolumeSnapshotContent CRDs. Volume cloning: clone from existing PVC. Volume expansion: resize PVC (requires allowVolumeExpansion). Topology: zone-aware provisioning. Secrets: encrypted volumes."
    },
    {
      "heading": "Common Use Cases",
      "text": "CSI Drivers applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is CSI?",
      "answer": "Standard plugin interface for storage vendors, replacing in-tree provisioners."
    },
    {
      "question": "CSI vs in-tree?",
      "answer": "CSI: external, vendor-maintained, more features. In-tree: built-in, core-maintained, limited."
    },
    {
      "question": "CSI components?",
      "answer": "Driver (DaemonSet), Controller (Deployment), attacher, resizer, snapshotter."
    },
    {
      "question": "CSI snapshot feature?",
      "answer": "VolumeSnapshot CRD for creating/restoring volume snapshots."
    },
    {
      "question": "CSI Drivers — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "CSI Drivers — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "CSI Drivers — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "CSI Drivers — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "CSI Drivers — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "CSI Drivers — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "CSI replaces?",
      "options": [
        "In-tree provisioners",
        "StorageClasses",
        "PVCs"
      ],
      "answer": 0
    },
    {
      "question": "CSI components include?",
      "options": [
        "Driver only",
        "Driver + Controller + sidecars",
        "Only sidecars"
      ],
      "answer": 1
    },
    {
      "question": "Volume snapshot CRD?",
      "options": [
        "VolumeSnapshot",
        "Snapshot",
        "VolumeBackup"
      ],
      "answer": 0
    },
    {
      "question": "Volume expansion requires?",
      "options": [
        "allowVolumeExpansion: true",
        "expandable: true",
        "resize: true"
      ],
      "answer": 0
    },
    {
      "question": "CSI Drivers — How to ensure reliability?",
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
      "question": "CSI Drivers — What helps team collaboration?",
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
      "question": "CSI Drivers — What reduces errors most?",
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
      "question": "CSI Drivers — What improves speed?",
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
      "question": "CSI Drivers — What is key for monitoring?",
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
      "question": "CSI Drivers — What ensures quality?",
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
      "title": "Install CSI Driver",
      "useCase": "EBS CSI driver",
      "code": "kubectl apply -k \"github.com/kubernetes-sigs/aws-ebs-csi-driver/deploy/kubernetes/overlays/stable/ecr\"",
      "description": "Installs EBS CSI driver."
    },
    {
      "title": "Create CSI-backed PVC",
      "useCase": "Use CSI driver",
      "code": "kubectl apply -f storageclass-csi.yaml;\nkubectl create pvc csi-pvc --storage-class=ebs-csi --storage=10Gi",
      "description": "PVC using CSI StorageClass."
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
  "laymanDefinition": "Container Storage Interface (CSI) enables storage vendors to develop plugins without modifying Kubernetes core. CSI drivers replace in-tree provisioners. They provide volume provisioning, attachment, mounting, snapshots, and encryption.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CSI Drivers</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CSI Drivers</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Standard interface for storage plugins (CSI spec)</text></svg>"
};
