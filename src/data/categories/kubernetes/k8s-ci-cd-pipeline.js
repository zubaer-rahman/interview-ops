export const k8s_ci_cd_pipeline = {
  "id": "k8s-ci-cd-pipeline",
  "title": "Kubernetes CI/CD Pipeline",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "file": "k8s-ci-cd-pipeline.json",
  "interviewAnswer": "A Kubernetes CI/CD pipeline automates building, testing, and deploying containerized applications. Tools: Jenkins, GitLab CI, ArgoCD, Helm. GitOps: ArgoCD syncs desired state from Git. Canary/BlueGreen via Flagger or Argo Rollouts.",
  "tldr": [
    "CI/CD pipelines build images and deploy to Kubernetes",
    "ArgoCD / Flux enable GitOps: Git repo = desired cluster state",
    "Helm / Kustomize manage Kubernetes manifests as packages",
    "Canary deployments via Flagger or Argo Rollouts with metrics-based promotion"
  ],
  "deepDive": [
    {
      "heading": "Pipeline Stages",
      "text": "Code commit -> build image -> push registry -> update manifests -> deploy to staging -> run tests -> promote to production (manual or automatic). Image tagging: commit SHA or semantic version for traceability."
    },
    {
      "heading": "GitOps with ArgoCD",
      "text": "ArgoCD watches Git repo for manifest changes. Syncs desired state to cluster. Auto-heals drift. Supports canary (Argo Rollouts), multi-cluster, SSO. Application CRD defines source repo, target namespace, sync policy."
    },
    {
      "heading": "Common Use Cases",
      "text": "Kubernetes CI/CD Pipeline applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is GitOps?",
      "answer": "Git repo is the single source of truth. Tools like ArgoCD sync cluster state to match Git."
    },
    {
      "question": "Helm vs Kustomize?",
      "answer": "Helm: package manager with templates and values. Kustomize: native Kubernetes overlay patching."
    },
    {
      "question": "How to do canary in CI/CD?",
      "answer": "Flagger or Argo Rollouts with metrics analysis before full promotion."
    },
    {
      "question": "Image tagging strategy?",
      "answer": "Commit SHA or semantic version for immutable, traceable deployments."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Kubernetes CI/CD Pipeline — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "GitOps tool?",
      "options": [
        "Jenkins",
        "ArgoCD",
        "GitLab CI"
      ],
      "answer": 1
    },
    {
      "question": "Helm uses?",
      "options": [
        "Templates + values.yaml",
        "Overlay patches",
        "Shell scripts"
      ],
      "answer": 0
    },
    {
      "question": "ArgoCD watches?",
      "options": [
        "Container registry",
        "Git repository",
        "Jenkins"
      ],
      "answer": 1
    },
    {
      "question": "Flagger does?",
      "options": [
        "Build images",
        "Canary promotion",
        "Git operations"
      ],
      "answer": 1
    },
    {
      "question": "Kubernetes CI/CD Pipeline — How to ensure reliability?",
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
      "question": "Kubernetes CI/CD Pipeline — What helps team collaboration?",
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
      "question": "Kubernetes CI/CD Pipeline — What reduces errors most?",
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
      "question": "Kubernetes CI/CD Pipeline — What improves speed?",
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
      "question": "Kubernetes CI/CD Pipeline — What is key for monitoring?",
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
      "question": "Kubernetes CI/CD Pipeline — What ensures quality?",
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
      "title": "ArgoCD App",
      "useCase": "GitOps deployment",
      "code": "argocd app create my-app --repo https://github.com/me/my-app --path k8s --dest-server https://kubernetes.default.svc --dest-namespace default",
      "description": "Creates ArgoCD Application."
    },
    {
      "title": "Trigger ArgoCD Sync",
      "useCase": "Manual sync",
      "code": "argocd app sync my-app",
      "description": "Syncs ArgoCD app with Git."
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
  "laymanDefinition": "A Kubernetes CI/CD pipeline automates building, testing, and deploying containerized applications. Tools: Jenkins, GitLab CI, ArgoCD, Helm. GitOps: ArgoCD syncs desired state from Git. Canary/BlueGreen via Flagger or Argo Rollouts.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Kubernetes CI/CD Pipeline</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kubernetes CI/CD Pipeline</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">CI/CD pipelines build images and deploy to Kuberne</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">tes</text></svg>"
};
