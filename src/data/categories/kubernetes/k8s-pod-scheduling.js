export const k8s_pod_scheduling = {
  "id": "k8s-pod-scheduling",
  "title": "Pod Scheduling",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-pod-scheduling.json",
  "interviewAnswer": "Pod scheduling assigns Pods to Nodes based on constraints, resources, and policies. The kube-scheduler evaluates Nodes for feasibility and scores them. Key mechanisms: nodeSelector, nodeName, affinity/anti-affinity, taints/tolerations, and priority.",
  "tldr": [
    "kube-scheduler: Filter (feasible) -> Score (rank) -> Bind",
    "nodeSelector: simple label-based node filtering",
    "nodeName: bypasses scheduler, directly assigns to specific Node",
    "Unschedulable Pod stays Pending with failure events"
  ],
  "deepDive": [
    {
      "heading": "Scheduling Cycle",
      "text": "Filter (Predicates): node conditions, resource adequacy, ports, hostname, volume zone. Score (Priorities): ranks by resource availability (LeastRequestedPriority, BalancedResourceAllocation) and spread (SelectorSpreading). Bind: writes Pod to Node binding."
    },
    {
      "heading": "Node Resources",
      "text": "kubelet reports allocatable resources (capacity - system overhead). Scheduler checks Pod requests <= Node allocatable. Extended resources (GPU, FPGA) managed similarly. Resource fragmentation minimized by balanced scoring."
    },
    {
      "heading": "Common Use Cases",
      "text": "Pod Scheduling applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Pod scheduling?",
      "answer": "Process of assigning Pods to Nodes based on constraints, resources, and scoring."
    },
    {
      "question": "Filter vs Score phase?",
      "answer": "Filter finds feasible Nodes. Score ranks them to pick the best."
    },
    {
      "question": "What does nodeName do?",
      "answer": "Directly assigns Pod to a Node, bypassing the scheduler."
    },
    {
      "question": "No feasible Node?",
      "answer": "Pod stays Pending with scheduling failure events."
    },
    {
      "question": "Pod Scheduling — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Pod Scheduling — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Pod Scheduling — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Pod Scheduling — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Pod Scheduling — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Pod Scheduling — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Scheduling phase order?",
      "options": [
        "Score-Filter-Bind",
        "Filter-Score-Bind",
        "Bind-Filter-Score"
      ],
      "answer": 1
    },
    {
      "question": "Bypasses scheduler?",
      "options": [
        "nodeSelector",
        "nodeName",
        "affinity"
      ],
      "answer": 1
    },
    {
      "question": "Unschedulable Pod phase?",
      "options": [
        "Running",
        "Failed",
        "Pending"
      ],
      "answer": 2
    },
    {
      "question": "Scheduler is part of?",
      "options": [
        "kubelet",
        "Control Plane",
        "Worker Node"
      ],
      "answer": 1
    },
    {
      "question": "Pod Scheduling — How to ensure reliability?",
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
      "question": "Pod Scheduling — What helps team collaboration?",
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
      "question": "Pod Scheduling — What reduces errors most?",
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
      "question": "Pod Scheduling — What improves speed?",
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
      "question": "Pod Scheduling — What is key for monitoring?",
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
      "question": "Pod Scheduling — What ensures quality?",
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
      "title": "Force to Node",
      "useCase": "Bypass scheduler",
      "code": "kubectl run nginx --image=nginx --restart=Never --overrides='{\"spec\":{\"nodeName\":\"worker-1\"}}'",
      "description": "Directly assigns to worker-1."
    },
    {
      "title": "Check Pending Reason",
      "useCase": "Debug unscheduled Pod",
      "code": "kubectl describe pod my-pod | grep -A 5 Events",
      "description": "Shows scheduling failure events."
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
  "laymanDefinition": "Pod scheduling assigns Pods to Nodes based on constraints, resources, and policies. The kube-scheduler evaluates Nodes for feasibility and scores them. Key mechanisms: nodeSelector, nodeName, affinity/anti-affinity, taints/tolerations, and priority.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Pod Scheduling</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pod Scheduling</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">kube-scheduler: Filter (feasible) -> Score (rank) </text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">-> Bind</text></svg>"
};
