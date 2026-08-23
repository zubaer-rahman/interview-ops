export const k8s_hpa = {
  "id": "k8s-hpa",
  "title": "Horizontal Pod Autoscaler (HPA)",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "file": "k8s-hpa.json",
  "interviewAnswer": "HPA automatically scales the number of Pods based on observed metrics (CPU, memory, custom metrics, external metrics). Target must be scalable (Deployment, StatefulSet). Cycles every 15s with configurable stabilization windows.",
  "tldr": [
    "Automatically adjusts replica count based on metrics",
    "Metrics: CPU, memory, custom (Prometheus), external (SQS, Pub/Sub)",
    "Stabilization window prevents flapping (default 5 min scale-down)",
    "Algorithm: desiredReplicas = ceil(currentReplicas * (currentMetric / desiredMetric))"
  ],
  "deepDive": [
    {
      "heading": "Metrics Types",
      "text": "ResourceMetric: uses metrics-server for CPU/memory per Pod. PodMetric: custom per-Pod metrics from Prometheus adapter. ObjectMetric: per-object (Ingress requests/second). ExternalMetric: from external systems (AWS SQS queue depth)."
    },
    {
      "heading": "Scaling Algorithm",
      "text": "desiredReplicas = ceil[currentReplicas * (currentMetricValue / desiredMetricValue)]. Averaging period: default 15s for CPU, 60s for memory. Scale-up is faster, scale-down uses stabilization window. behavior field allows custom policies: stabilizationWindowSeconds, selectPolicy (Max, Min, Disabled)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Horizontal Pod Autoscaler (HPA) applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is HPA?",
      "answer": "Automatically scales replicas based on observed metrics."
    },
    {
      "question": "Supported metrics?",
      "answer": "CPU, memory, custom (Prometheus), external (SQS, Pub/Sub)."
    },
    {
      "question": "Scale-down stabilization?",
      "answer": "Default 5 minutes to prevent flapping."
    },
    {
      "question": "How is desired replicas calculated?",
      "answer": "ceil(currentReplicas * currentMetric / desiredMetric)."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "HPA target must be?",
      "options": [
        "Any resource",
        "Scalable (Deployment, StatefulSet)",
        "Pod only"
      ],
      "answer": 1
    },
    {
      "question": "Scale-down stabilization default?",
      "options": [
        "1 min",
        "3 min",
        "5 min"
      ],
      "answer": 2
    },
    {
      "question": "HPA requires?",
      "options": [
        "kubelet",
        "metrics-server or adapter",
        "CoreDNS"
      ],
      "answer": 1
    },
    {
      "question": "HPA behavior field?",
      "options": [
        "policies",
        "stabilizationWindow",
        "Both"
      ],
      "answer": 2
    },
    {
      "question": "Horizontal Pod Autoscaler (HPA) — How to ensure reliability?",
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
      "question": "Horizontal Pod Autoscaler (HPA) — What helps team collaboration?",
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
      "question": "Horizontal Pod Autoscaler (HPA) — What reduces errors most?",
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
      "question": "Horizontal Pod Autoscaler (HPA) — What improves speed?",
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
      "question": "Horizontal Pod Autoscaler (HPA) — What is key for monitoring?",
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
      "question": "Horizontal Pod Autoscaler (HPA) — What ensures quality?",
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
      "title": "Create HPA",
      "useCase": "CPU-based autoscaling",
      "code": "kubectl autoscale deployment web --cpu-percent=50 --min=3 --max=10",
      "description": "HPA scales web between 3-10 replicas."
    },
    {
      "title": "View HPA Status",
      "useCase": "Check current metrics",
      "code": "kubectl get hpa -w",
      "description": "Watches HPA metrics and target."
    },
    {
      "title": "Custom Metrics HPA",
      "useCase": "Scale on request rate",
      "code": "kubectl apply -f hpa-custom.yaml",
      "description": "HPA with Prometheus custom metric."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "HPA automatically scales the number of Pods based on observed metrics (CPU, memory, custom metrics, external metrics). Target must be scalable (Deployment, StatefulSet). Cycles every 15s with configurable stabilization windows.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Horizontal Pod Autoscaler (HPA)</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Horizontal Pod Autoscaler (HPA)</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Automatically adjusts replica count based on metri</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">cs</text></svg>"
};
