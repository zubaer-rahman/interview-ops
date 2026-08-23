export const k8s_auto_scaling = {
  "id": "k8s-auto-scaling",
  "title": "Auto Scaling",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "file": "k8s-auto-scaling.json",
  "interviewAnswer": "Auto scaling combines HPA (Pod-level), VPA (container resources), and Cluster Autoscaler (node-level) for comprehensive elasticity. Together, they adapt the entire cluster to workload demands automatically.",
  "tldr": [
    "HPA: Pod count scaling based on metrics",
    "VPA: Container resource adjustments",
    "Cluster Autoscaler: Node count scaling",
    "Best practice: HPA + CA together, VPA on non-HPA workloads"
  ],
  "deepDive": [
    {
      "heading": "Scaling Layers",
      "text": "Pod-level: HPA changes replicas. Container-level: VPA changes resources. Node-level: CA adds/removes nodes. CA works with HPA (Pods pending due to resource shortage). VPA and HPA on same metric = conflict (use VPA for sidecars, HPA for main)."
    },
    {
      "heading": "Configuration",
      "text": "HPA: metrics, min/max replicas, behavior (stabilization, policies). CA: min/max size per node group, scale-down delay, unneeded time. VPA: updateMode, resourcePolicy (min/max allowed). Metrics sources: metrics-server, Prometheus adapter."
    },
    {
      "heading": "Common Use Cases",
      "text": "Auto Scaling applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Kubernetes auto scaling layers?",
      "answer": "HPA (Pods), VPA (container resources), CA (nodes)."
    },
    {
      "question": "HPA + CA together?",
      "answer": "Yes, they complement each other. CA handles node-level, HPA handles Pod-level."
    },
    {
      "question": "VPA + HPA on same metric?",
      "answer": "Conflict. VPA adjusts resources, HPA adjusts replicas — incompatible."
    },
    {
      "question": "Metrics-server provides?",
      "answer": "Resource metrics (CPU/memory) for HPA and VPA recommender."
    },
    {
      "question": "Auto Scaling — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Auto Scaling — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Auto Scaling — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Auto Scaling — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Auto Scaling — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Auto Scaling — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Auto scaling NOT supported by?",
      "options": [
        "HPA",
        "VPA",
        "CA",
        "Kubelet"
      ],
      "answer": 3
    },
    {
      "question": "Metrics-server provides?",
      "options": [
        "Custom metrics",
        "Resource metrics",
        "External metrics"
      ],
      "answer": 1
    },
    {
      "question": "VPA + HPA on same metric?",
      "options": [
        "Compatible",
        "Incompatible",
        "Recommended"
      ],
      "answer": 1
    },
    {
      "question": "CA handles?",
      "options": [
        "Pod count",
        "Node count",
        "Container resources"
      ],
      "answer": 1
    },
    {
      "question": "Auto Scaling — How to ensure reliability?",
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
      "question": "Auto Scaling — What helps team collaboration?",
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
      "question": "Auto Scaling — What reduces errors most?",
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
      "question": "Auto Scaling — What improves speed?",
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
      "question": "Auto Scaling — What is key for monitoring?",
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
      "question": "Auto Scaling — What ensures quality?",
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
      "title": "Full Auto Scaling Setup",
      "useCase": "Configure all layers",
      "code": "kubectl autoscale deployment web --cpu-percent=50 --min=3 --max=10;\nkubectl apply -f vpa.yaml;\n# Cluster Autoscaler deployed separately per cloud",
      "description": "Sets up HPA + VPA for app."
    },
    {
      "title": "Common Use Case",
      "useCase": "Typical implementation",
      "code": "# Common implementation pattern\n# Used in everyday scenarios",
      "description": "Standard use case example."
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
  "laymanDefinition": "Auto scaling combines HPA (Pod-level), VPA (container resources), and Cluster Autoscaler (node-level) for comprehensive elasticity. Together, they adapt the entire cluster to workload demands automatically.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Auto Scaling</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auto Scaling</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">HPA: Pod count scaling based on metrics</text></svg>"
};
