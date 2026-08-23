export const k8s_limit_range = {
  "id": "k8s-limit-range",
  "title": "LimitRange",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-limit-range.json",
  "interviewAnswer": "LimitRange sets default, minimum, and maximum resource constraints per container/Pod in a namespace. Complement to ResourceQuota (aggregate). Applies at resource creation time. Immutable existing Pods.",
  "tldr": [
    "Default / min / max resource constraints per namespace",
    "Default requests/limits for containers without explicit values",
    "Applies at creation time only",
    "Complementary to ResourceQuota"
  ],
  "deepDive": [
    {
      "heading": "Limit Types",
      "text": "Container: default (limits), defaultRequest, min, max, maxLimitRequestRatio. Pod: min/max for Pod-level resources. maxLimitRequestRatio=3 means request=1, limit <= 3."
    },
    {
      "heading": "Enforcement",
      "text": "Admission controller validates new containers. Exceeds max or below min = rejected. No limits and no default = no enforcement. Existing Pods not checked."
    },
    {
      "heading": "Common Use Cases",
      "text": "LimitRange applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a LimitRange?",
      "answer": "Default, min, max resource constraints per container/Pod in namespace."
    },
    {
      "question": "When does it apply?",
      "answer": "At creation time. Existing resources unchanged."
    },
    {
      "question": "vs ResourceQuota?",
      "answer": "LimitRange: per-container. ResourceQuota: aggregate namespace."
    },
    {
      "question": "maxLimitRequestRatio?",
      "answer": "Max ratio of limit to request for compute resources."
    },
    {
      "question": "LimitRange — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "LimitRange — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "LimitRange — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "LimitRange — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "LimitRange — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "LimitRange — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "LimitRange applies?",
      "options": [
        "At creation only",
        "Continuously",
        "On schedule"
      ],
      "answer": 0
    },
    {
      "question": "Type for containers?",
      "options": [
        "Pod",
        "Container",
        "Node"
      ],
      "answer": 1
    },
    {
      "question": "Default field?",
      "options": [
        "request",
        "default",
        "limit"
      ],
      "answer": 1
    },
    {
      "question": "Updated LimitRange affects?",
      "options": [
        "Existing Pods",
        "New Pods only",
        "Both"
      ],
      "answer": 1
    },
    {
      "question": "LimitRange — How to ensure reliability?",
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
      "question": "LimitRange — What helps team collaboration?",
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
      "question": "LimitRange — What reduces errors most?",
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
      "question": "LimitRange — What improves speed?",
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
      "question": "LimitRange — What is key for monitoring?",
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
      "question": "LimitRange — What ensures quality?",
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
      "title": "Create LimitRange",
      "useCase": "Set defaults",
      "code": "kubectl apply -f limit-range.yaml",
      "description": "Creates default CPU/memory per container."
    },
    {
      "title": "View LimitRanges",
      "useCase": "Check constraints",
      "code": "kubectl get limitranges",
      "description": "Shows defined limits."
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
  "laymanDefinition": "LimitRange sets default, minimum, and maximum resource constraints per container/Pod in a namespace. Complement to ResourceQuota (aggregate). Applies at resource creation time. Immutable existing Pods.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">LimitRange</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LimitRange</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Default / min / max resource constraints per names</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">pace</text></svg>"
};
