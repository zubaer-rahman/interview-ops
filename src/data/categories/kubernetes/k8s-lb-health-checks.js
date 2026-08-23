export const k8s_lb_health_checks = {
  "id": "k8s-lb-health-checks",
  "title": "Health Checks",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-lb-health-checks.json",
  "interviewAnswer": "Health checks ensure traffic is only sent to healthy Pods. Kubernetes uses readiness probes (for traffic routing) and liveness probes (for container restart). Cloud LBs use their own health checks against NodePort.",
  "tldr": [
    "Readiness probe: controls Service traffic routing",
    "Liveness probe: controls container restart",
    "Cloud LB health checks against NodePort",
    "Readiness = traffic, Liveness = restart"
  ],
  "deepDive": [
    {
      "heading": "Kubernetes Probes",
      "text": "Readiness: if fails, Pod removed from Service endpoints. Liveness: if fails, container restart. Startup: delays liveness/readiness for slow-starting containers. Probe types: HTTP GET, TCP, gRPC, Exec (command)."
    },
    {
      "heading": "Cloud LB Health Checks",
      "text": "Cloud LB checks NodePort on each node. If node fails health check, removed from LB pool. AWS: ELB health check on NodePort path. GCP: health check on NodePort. ExternalTrafficPolicy=Local: health check reflects Pod health (not just node)."
    },
    {
      "heading": "Common Use Cases",
      "text": "Health Checks applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Kubernetes health checks?",
      "answer": "Readiness probe (traffic routing), liveness probe (restart)."
    },
    {
      "question": "Readiness fails -> ?",
      "answer": "Pod removed from Service endpoints, no traffic routed."
    },
    {
      "question": "Liveness fails -> ?",
      "answer": "Container restarted by kubelet."
    },
    {
      "question": "Cloud LB health check?",
      "answer": "Checks NodePort on each node; unhealthy nodes removed."
    },
    {
      "question": "Health Checks — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Health Checks — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Health Checks — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Health Checks — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Health Checks — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Health Checks — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Readiness controls?",
      "options": [
        "Restart",
        "Traffic routing",
        "Image pull"
      ],
      "answer": 1
    },
    {
      "question": "Liveness controls?",
      "options": [
        "Traffic",
        "Restart",
        "Scheduling"
      ],
      "answer": 1
    },
    {
      "question": "Probe types?",
      "options": [
        "HTTP, TCP, Exec",
        "HTTP, ICMP, DNS",
        "TCP, UDP, HTTP"
      ],
      "answer": 0
    },
    {
      "question": "Startup probe for?",
      "options": [
        "Slow containers",
        "Fast containers",
        "Batch jobs"
      ],
      "answer": 0
    },
    {
      "question": "Health Checks — How to ensure reliability?",
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
      "question": "Health Checks — What helps team collaboration?",
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
      "question": "Health Checks — What reduces errors most?",
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
      "question": "Health Checks — What improves speed?",
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
      "question": "Health Checks — What is key for monitoring?",
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
      "question": "Health Checks — What ensures quality?",
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
      "title": "Add Readiness Probe",
      "useCase": "Health-based routing",
      "code": "kubectl set probe deployment/web --readiness --get-url=http://:8080/healthz",
      "description": "Adds HTTP readiness probe."
    },
    {
      "title": "Add Liveness Probe",
      "useCase": "Auto-restart on failure",
      "code": "kubectl set probe deployment/web --liveness --get-url=http://:8080/healthz",
      "description": "Adds HTTP liveness probe."
    },
    {
      "title": "Check Probe Status",
      "useCase": "View probe results",
      "code": "kubectl describe pod web-pod | grep -A 5 -i \"readiness|liveness\"",
      "description": "Shows probe configuration and status."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "Health checks ensure traffic is only sent to healthy Pods. Kubernetes uses readiness probes (for traffic routing) and liveness probes (for container restart). Cloud LBs use their own health checks against NodePort.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Health Checks</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Health Checks</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Readiness probe: controls Service traffic routing</text></svg>"
};
