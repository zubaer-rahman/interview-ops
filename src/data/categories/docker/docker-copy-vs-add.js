export const docker_copy_vs_add = {
  "id": "docker-copy-vs-add",
  "title": "COPY vs ADD",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "COPY and ADD both copy files from the build context into the image. ADD has extra features: tar extraction and URL support.",
    "COPY vs ADD is an essential concept that helps teams automate and streamline their development workflows effectively.",
    "Adopting COPY vs ADD leads to faster deployments, lower failure rates, and quicker recovery when issues arise.",
    "COPY vs ADD works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "COPY is simple and predictable: copy files from project into image. ADD also auto-extracts tar archives and downloads URLs. Best practice: use COPY unless you need ADD extras.",
  "deepDive": [
    {
      "heading": "COPY",
      "text": "COPY <src> <dest>: copy files from context to image. --chown=<user>:<group> set ownership. --from=<stage> copy from previous build stage. Multiple sources. Wildcards supported."
    },
    {
      "heading": "ADD",
      "text": "ADD <src> <dest>: all COPY features plus: auto-extract local tar.gz, URL download. Use COPY for files, ADD only when tar extraction or URL download is specifically needed."
    },
    {
      "heading": "Common Use Cases",
      "text": "COPY vs ADD applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewAnswer": "COPY and ADD both copy files from the build context into the image. ADD has extra features: tar extraction and URL support.",
  "interviewQuestions": [
    {
      "question": "When to use COPY vs ADD?",
      "answer": "Always prefer COPY (transparent, predictable). Use ADD for tar extraction or URL download only."
    },
    {
      "question": "How to copy from a previous stage?",
      "answer": "COPY --from=<stage-name> <source> <dest> in multi-stage builds."
    },
    {
      "question": "COPY vs ADD — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "COPY vs ADD — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "COPY vs ADD — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "COPY vs ADD — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "COPY vs ADD — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "COPY vs ADD — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "COPY vs ADD — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "COPY vs ADD — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">COPY vs ADD</text><text x=\"240\" y=\"100\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">COPY vs ADD: COPY for simple file copy. ADD for ta</text><text x=\"240\" y=\"112\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">r extraction and URL download. Prefer COPY.</text></svg>",
  "codeExamples": [
    {
      "title": "COPY Example",
      "useCase": "",
      "code": "COPY . .\nCOPY --from=builder /app/dist /usr/share/nginx/html",
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
      "question": "COPY vs ADD — What is the recommended approach?",
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
      "question": "COPY vs ADD — What should be prioritized?",
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
      "question": "COPY vs ADD — What is important for security?",
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
      "question": "COPY vs ADD — How to ensure reliability?",
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
      "question": "COPY vs ADD — What helps team collaboration?",
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
      "question": "COPY vs ADD — What reduces errors most?",
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
      "question": "COPY vs ADD — What improves speed?",
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
      "question": "COPY vs ADD — What is key for monitoring?",
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
      "question": "COPY vs ADD — What ensures quality?",
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
