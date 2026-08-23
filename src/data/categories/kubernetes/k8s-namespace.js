export const k8s_namespace = {
  "id": "k8s-namespace",
  "title": "Namespace",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-namespace.json",
  "interviewAnswer": "A Namespace partitions a cluster into virtual clusters for multi-tenancy, isolation, and resource management. Names provide scope for names, RBAC, and resource quotas. Four defaults: default, kube-system, kube-public, kube-node-lease.",
  "tldr": [
    "Virtual clusters within a physical cluster",
    "Resource names unique per namespace, reusable across namespaces",
    "Cluster-scoped: Nodes, PVs, ClusterRoles, StorageClasses",
    "Support ResourceQuota and LimitRange for resource governance"
  ],
  "deepDive": [
    {
      "heading": "Isolation",
      "text": "Names isolate: names (no conflicts), RBAC (per-namespace roles), quotas, DNS (service.namespace.svc.cluster.local). Network isolation needs NetworkPolicy."
    },
    {
      "heading": "Resource Quotas",
      "text": "ResourceQuota: aggregate limits (CPU, memory, object counts). LimitRange: default/min/max per container. Prevent resource starvation."
    },
    {
      "heading": "Common Use Cases",
      "text": "Namespace applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a Namespace?",
      "answer": "Virtual cluster providing scope and isolation for resources."
    },
    {
      "question": "Resources NOT namespaced?",
      "answer": "Nodes, PVs, Namespaces, ClusterRoles, StorageClasses, CRDs."
    },
    {
      "question": "Cross-namespace Service access?",
      "answer": "<service>.<namespace>.svc.cluster.local."
    },
    {
      "question": "Namespace deletion effect?",
      "answer": "All resources in the namespace are deleted."
    },
    {
      "question": "Namespace — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Namespace — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Namespace — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Namespace — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Namespace — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Namespace — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "NOT namespaced?",
      "options": [
        "Pod",
        "Service",
        "Node",
        "ConfigMap"
      ],
      "answer": 2,
      "explanation": "Nodes are cluster-scoped."
    },
    {
      "question": "Default namespaces count?",
      "options": [
        "1",
        "2",
        "4",
        "5"
      ],
      "answer": 2,
      "explanation": "Four default namespaces."
    },
    {
      "question": "ResourceQuota enforces?",
      "options": [
        "Per-container",
        "Per-namespace aggregate",
        "Cluster-wide"
      ],
      "answer": 1,
      "explanation": "Per-namespace aggregate limits."
    },
    {
      "question": "Cross-namespace DNS?",
      "options": [
        "<svc>.<ns>.svc.cluster.local",
        "<ns>.<svc>.svc.cluster.local"
      ],
      "answer": 0,
      "explanation": "<service>.<namespace>.svc.cluster.local"
    },
    {
      "question": "Namespace — How to ensure reliability?",
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
      "question": "Namespace — What helps team collaboration?",
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
      "question": "Namespace — What reduces errors most?",
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
      "question": "Namespace — What improves speed?",
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
      "question": "Namespace — What is key for monitoring?",
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
      "question": "Namespace — What ensures quality?",
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
      "title": "Create Namespace",
      "useCase": "Environment isolation",
      "code": "kubectl create namespace dev\nkubectl get namespaces",
      "description": "Creates and lists namespaces."
    },
    {
      "title": "Set Namespace Context",
      "useCase": "Default namespace",
      "code": "kubectl config set-context --current --namespace=dev",
      "description": "Changes default namespace."
    },
    {
      "title": "Apply ResourceQuota",
      "useCase": "Limit resources",
      "code": "kubectl create quota dev-quota --namespace=dev --hard=pods=10,cpu=4,memory=8Gi",
      "description": "Sets dev namespace limits."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A Namespace partitions a cluster into virtual clusters for multi-tenancy, isolation, and resource management. Names provide scope for names, RBAC, and resource quotas. Four defaults: default, kube-system, kube-public, kube-node-lease.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Namespace</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Namespace</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Virtual clusters within a physical cluster</text></svg>"
};
