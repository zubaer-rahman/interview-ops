export const jenkins_distributed = {
  "id": "jenkins-distributed",
  "title": "Distributed Builds",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Distributed builds run jobs across multiple agents simultaneously to improve throughput and leverage different environments.",
    "Distributed Builds is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting Distributed Builds leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "Distributed Builds works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Distributed builds are like having multiple workers in a factory instead of one. While one worker builds your app, another runs tests, and a third deploys. Everything happens in parallel, finishing faster.",
  "deepDive": [
    {
      "heading": "Topology",
      "text": "Single master with multiple agents. Agents on different machines, OS, clouds. Cloud agents: auto-provisioned (AWS EC2, Azure, Kubernetes). Agent pools for different build types. Load balancing across agents."
    },
    {
      "heading": "Distribution Strategies",
      "text": "Label-based: specific agents for specific jobs. Load-based: least-loaded agent gets next job. Custom: use queue for custom assignment. Cloud bursting: automatically spin up cloud agents when on-premise agents are busy."
    },
    {
      "heading": "Common Use Cases",
      "text": "Distributed Builds applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "Distributed builds run jobs across multiple agents simultaneously to improve throughput and leverage different environments.",
  "interviewQuestions": [
    {
      "question": "What is a distributed build?",
      "answer": "Running builds across multiple agents for parallelism and environment diversity."
    },
    {
      "question": "How to auto-scale agents in cloud?",
      "answer": "Install Kubernetes plugin or Amazon EC2 plugin. Configure agent templates. Jenkins auto-provisions."
    },
    {
      "question": "Distributed Builds — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Distributed Builds — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Distributed Builds — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Distributed Builds — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Distributed Builds — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Distributed Builds — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Distributed Builds — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Distributed Builds — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Distributed Builds</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Distributed Builds: Multi-agent, multi-OS. Cloud a</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">uto-scaling. Load balancing and label-based target</text><text x=\"240\" y=\"124\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ing.</text></svg>",
  "codeExamples": [
    {
      "title": "Cloud Agent Config",
      "useCase": "",
      "code": "Amazon EC2 plugin: AMI template, security group, instance type. Jenkins spins up on demand.",
      "description": ""
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
  "mcqQuestions": [
    {
      "question": "Question?",
      "options": [
        "Answer A",
        "Answer B",
        "Answer C",
        "Answer D"
      ],
      "answer": 1,
      "explanation": "Explanation."
    },
    {
      "question": "Distributed Builds — What is the recommended approach?",
      "options": [
        "Start simple and iterate",
        "Build everything at once",
        "Skip testing",
        "Avoid planning"
      ],
      "answer": 0,
      "explanation": "Starting simple and iterating is the most effective approach."
    },
    {
      "question": "Distributed Builds — What should be prioritized?",
      "options": [
        "Reliability and consistency",
        "Speed only",
        "Features over quality",
        "Manual processes"
      ],
      "answer": 0,
      "explanation": "Reliability and consistency are foundational priorities."
    },
    {
      "question": "Distributed Builds — What is important for security?",
      "options": [
        "Access control and encryption",
        "Open access",
        "Shared passwords",
        "No auditing"
      ],
      "answer": 0,
      "explanation": "Access control and encryption are fundamental security measures."
    },
    {
      "question": "Distributed Builds — How to ensure reliability?",
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
      "question": "Distributed Builds — What helps team collaboration?",
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
      "question": "Distributed Builds — What reduces errors most?",
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
      "question": "Distributed Builds — What improves speed?",
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
      "question": "Distributed Builds — What is key for monitoring?",
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
      "question": "Distributed Builds — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
