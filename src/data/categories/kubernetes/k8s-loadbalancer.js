export const k8s_loadbalancer = {
  "id": "k8s-loadbalancer",
  "title": "LoadBalancer",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-loadbalancer.json",
  "interviewAnswer": "LoadBalancer provisions a cloud load balancer (AWS ELB, Azure LB, GCP TCP LB) with a public IP. Built on NodePort + ClusterIP. Standard for production HTTP/S services, though Ingress is preferred for L7 routing.",
  "tldr": [
    "Provisions cloud provider load balancer with public IP",
    "Built on NodePort + ClusterIP underneath",
    "Each Service gets its own LB (cost consideration)",
    "Supports internal LB via annotations"
  ],
  "deepDive": [
    {
      "heading": "Cloud Integration",
      "text": "cloud-controller-manager provisions LB via cloud API. Annotations: service.beta.kubernetes.io/aws-load-balancer-type (nlb, alb), internal (internal LB). Health check: LB targets nodes; NodePort Service responds."
    },
    {
      "heading": "Limitations",
      "text": "One LB per Service (costly with many services). No HTTP routing (L4). Use Ingress for L7 + TLS. ExternalTrafficPolicy: Local preserves client IP but may cause imbalanced distribution."
    },
    {
      "heading": "Common Use Cases",
      "text": "LoadBalancer applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is LoadBalancer?",
      "answer": "Provisions cloud LB with public IP for external access."
    },
    {
      "question": "How is it built?",
      "answer": "On NodePort + ClusterIP. Cloud controller provisions the LB."
    },
    {
      "question": "When LoadBalancer vs Ingress?",
      "answer": "LoadBalancer for L4 (non-HTTP). Ingress for L7 with routing and TLS."
    },
    {
      "question": "Why careful with many LBs?",
      "answer": "Each Service gets its own cloud LB, which is costly."
    },
    {
      "question": "LoadBalancer — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "LoadBalancer — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "LoadBalancer — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "LoadBalancer — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "LoadBalancer — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "LoadBalancer — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "LoadBalancer is L?",
      "options": [
        "L4 (Transport)",
        "L7 (Application)",
        "L3 (Network)"
      ],
      "answer": 0
    },
    {
      "question": "Cloud controller provisions?",
      "options": [
        "Ingress controller",
        "Load balancer",
        "DNS records"
      ],
      "answer": 1
    },
    {
      "question": "Annotation for AWS NLB?",
      "options": [
        "nlb-type",
        "aws-load-balancer-type",
        "elb-type"
      ],
      "answer": 1
    },
    {
      "question": "Cost implication?",
      "options": [
        "Free",
        "One LB per Service",
        "Shared LB"
      ],
      "answer": 1
    },
    {
      "question": "LoadBalancer — How to ensure reliability?",
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
      "question": "LoadBalancer — What helps team collaboration?",
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
      "question": "LoadBalancer — What reduces errors most?",
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
      "question": "LoadBalancer — What improves speed?",
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
      "question": "LoadBalancer — What is key for monitoring?",
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
      "question": "LoadBalancer — What ensures quality?",
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
      "title": "Create LoadBalancer",
      "useCase": "Expose to internet",
      "code": "kubectl expose deployment web --type=LoadBalancer --port=80",
      "description": "Creates cloud LB."
    },
    {
      "title": "Get External IP",
      "useCase": "Find public endpoint",
      "code": "kubectl get svc web -o wide",
      "description": "Shows EXTERNAL-IP."
    },
    {
      "title": "Internal LB",
      "useCase": "Private load balancer",
      "code": "kubectl annotate svc web service.beta.kubernetes.io/aws-load-balancer-internal=\"true\"",
      "description": "Makes LB internal."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "LoadBalancer provisions a cloud load balancer (AWS ELB, Azure LB, GCP TCP LB) with a public IP. Built on NodePort + ClusterIP. Standard for production HTTP/S services, though Ingress is preferred for L7 routing.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">LoadBalancer</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LoadBalancer</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Provisions cloud provider load balancer with publi</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">c IP</text></svg>"
};
