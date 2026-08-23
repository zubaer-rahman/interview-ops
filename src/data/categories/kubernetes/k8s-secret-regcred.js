export const k8s_secret_regcred = {
  "id": "k8s-secret-regcred",
  "title": "Docker Registry Secret",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-secret-regcred.json",
  "interviewAnswer": "Registry Secrets (kubernetes.io/dockerconfigjson) store credentials for private registries (Docker Hub, ECR, GCR, ACR). Used via imagePullSecrets in Pod spec or added to ServiceAccount for automatic use.",
  "tldr": [
    "Type: kubernetes.io/dockerconfigjson",
    "Referenced in Pod: spec.imagePullSecrets",
    "Can be added to ServiceAccount for all Pods in namespace",
    "ECR needs token refresh (12-hour expiry)"
  ],
  "deepDive": [
    {
      "heading": "Creating",
      "text": "kubectl create secret docker-registry regcred --docker-server=<server> --docker-username=<user> --docker-password=<pass>. Or from existing Docker config: --from-file=.dockerconfigjson=<path> --type=kubernetes.io/dockerconfigjson."
    },
    {
      "heading": "Using",
      "text": "Per-Pod: spec.imagePullSecrets: [{name: regcred}]. Default for namespace: kubectl patch sa default -p '{\"imagePullSecrets\":[{\"name\":\"regcred\"}]}'. ECR: needs ecr-credential helper or periodic refresh."
    },
    {
      "heading": "Common Use Cases",
      "text": "Docker Registry Secret applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is dockerconfigjson?",
      "answer": "Registry credentials for private image authentication."
    },
    {
      "question": "Pod field for registry auth?",
      "answer": "spec.imagePullSecrets: [{name: regcred}]"
    },
    {
      "question": "Add to ServiceAccount?",
      "answer": "kubectl patch sa default -p '{\"imagePullSecrets\":[{\"name\":\"regcred\"}]}'"
    },
    {
      "question": "ECR special handling?",
      "answer": "12-hour token expiry. Use ecr-credential helper or cron job."
    },
    {
      "question": "Docker Registry Secret — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Docker Registry Secret — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Docker Registry Secret — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Docker Registry Secret — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Docker Registry Secret — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Docker Registry Secret — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Registry Secret type?",
      "options": [
        "Opaque",
        "dockerconfigjson",
        "registry"
      ],
      "answer": 1
    },
    {
      "question": "Pod field?",
      "options": [
        "imagePullSecrets",
        "registrySecrets",
        "containerSecrets"
      ],
      "answer": 0
    },
    {
      "question": "ECR token expiry?",
      "options": [
        "1 hour",
        "12 hours",
        "24 hours"
      ],
      "answer": 1
    },
    {
      "question": "Default for namespace via?",
      "options": [
        "Namespace config",
        "ServiceAccount",
        "Cluster admission"
      ],
      "answer": 1
    },
    {
      "question": "Docker Registry Secret — How to ensure reliability?",
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
      "question": "Docker Registry Secret — What helps team collaboration?",
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
      "question": "Docker Registry Secret — What reduces errors most?",
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
      "question": "Docker Registry Secret — What improves speed?",
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
      "question": "Docker Registry Secret — What is key for monitoring?",
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
      "question": "Docker Registry Secret — What ensures quality?",
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
      "title": "Create Registry Secret",
      "useCase": "Docker Hub auth",
      "code": "kubectl create secret docker-registry regcred --docker-username=<user> --docker-password=<pass>",
      "description": "Creates registry auth Secret."
    },
    {
      "title": "Add to ServiceAccount",
      "useCase": "Default for namespace",
      "code": "kubectl patch serviceaccount default -p '{\"imagePullSecrets\":[{\"name\":\"regcred\"}]}'",
      "description": "All Pods get registry access."
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
  "laymanDefinition": "Registry Secrets (kubernetes.io/dockerconfigjson) store credentials for private registries (Docker Hub, ECR, GCR, ACR). Used via imagePullSecrets in Pod spec or added to ServiceAccount for automatic use.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Docker Registry Secret</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Docker Registry Secret</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Type: kubernetes.io/dockerconfigjson</text></svg>"
};
