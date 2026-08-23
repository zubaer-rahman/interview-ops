export const k8s_lb_internal = {
  "id": "k8s-lb-internal",
  "title": "Internal Load Balancer",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-lb-internal.json",
  "interviewAnswer": "An internal load balancer distributes traffic within a VPC or private network, not exposing it to the internet. Used for private microservices, databases, and internal APIs. Cloud providers support internal LBs via annotations.",
  "tldr": [
    "Private load balancer within VPC (not internet-facing)",
    "AWS: annotation service.beta.kubernetes.io/aws-load-balancer-internal: \"true\"",
    "Azure: LoadBalancer with internal annotation",
    "GCP: Internal Load Balancer via annotation"
  ],
  "deepDive": [
    {
      "heading": "Configuration",
      "text": "AWS: service.beta.kubernetes.io/aws-load-balancer-internal: \"true\" or \"0.0.0.0/0\". Internal LB gets private IP from subnet. Azure: LoadBalancer with service.beta.kubernetes.io/azure-load-balancer-internal: \"true\". GCP: networking.gke.io/load-balancer-type: \"Internal\"."
    },
    {
      "heading": "Use Cases",
      "text": "Internal microservice communication across separate namespaces. Database access from other services. API gateway for internal services. Service-to-service communication requiring stable internal IP."
    },
    {
      "heading": "Common Use Cases",
      "text": "Internal Load Balancer applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is internal LB?",
      "answer": "Private load balancer within VPC, not internet-facing."
    },
    {
      "question": "AWS annotation?",
      "answer": "service.beta.kubernetes.io/aws-load-balancer-internal: \"true\""
    },
    {
      "question": "Use case?",
      "answer": "Internal microservices, databases, private APIs."
    },
    {
      "question": "Internal LB gets?",
      "answer": "Private IP from subnet, not public IP."
    },
    {
      "question": "Internal Load Balancer — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Internal Load Balancer — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Internal Load Balancer — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Internal Load Balancer — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Internal Load Balancer — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Internal Load Balancer — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Internal LB is?",
      "options": [
        "Internet-facing",
        "VPC-private",
        "Both"
      ],
      "answer": 1
    },
    {
      "question": "AWS internal LB annotation?",
      "options": [
        "internal-lb",
        "load-balancer-internal",
        "aws-load-balancer-internal"
      ],
      "answer": 2
    },
    {
      "question": "GCP internal LB?",
      "options": [
        "load-balancer-type: Internal",
        "internal: true",
        "private: true"
      ],
      "answer": 0
    },
    {
      "question": "Internal LB exposes?",
      "options": [
        "Public IP",
        "Private IP",
        "Both"
      ],
      "answer": 1
    },
    {
      "question": "Internal Load Balancer — How to ensure reliability?",
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
      "question": "Internal Load Balancer — What helps team collaboration?",
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
      "question": "Internal Load Balancer — What reduces errors most?",
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
      "question": "Internal Load Balancer — What improves speed?",
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
      "question": "Internal Load Balancer — What is key for monitoring?",
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
      "question": "Internal Load Balancer — What ensures quality?",
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
      "title": "Create Internal LB",
      "useCase": "Private load balancer",
      "code": "kubectl annotate service my-svc service.beta.kubernetes.io/aws-load-balancer-internal=\"true\"",
      "description": "Makes LB internal."
    },
    {
      "title": "Create Internal LB on Azure",
      "useCase": "Azure private LB",
      "code": "kubectl annotate service my-svc service.beta.kubernetes.io/azure-load-balancer-internal=\"true\"",
      "description": "Makes Azure LB internal."
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
  "laymanDefinition": "An internal load balancer distributes traffic within a VPC or private network, not exposing it to the internet. Used for private microservices, databases, and internal APIs. Cloud providers support internal LBs via annotations.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Internal Load Balancer</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Internal Load Balancer</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Private load balancer within VPC (not internet-fac</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ing)</text></svg>"
};
