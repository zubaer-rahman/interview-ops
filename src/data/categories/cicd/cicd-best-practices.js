export const cicd_best_practices = {
  "id": "cicd-best-practices",
  "title": "CI/CD Best Practices",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "CI/CD best practices ensure pipelines are fast, reliable, secure, and maintainable.",
    "Key principles: fail fast, pipeline as code, idempotent stages, test in prod-like environments, immutable artifacts.",
    "Continuously improve the pipeline — treat it like product code.",
    "Following CI/CD best practices ensures pipelines are fast, reliable, secure, and maintainable."
  ],
  "laymanDefinition": "CI/CD best practices are like the rules of the road for your pipeline. They keep everything running smoothly: fail fast when something breaks, test in environments that mirror production, make builds reproducible, and treat your pipeline configuration with the same care as your application code.",
  "deepDive": [
    {
      "heading": "Pipeline Design",
      "text": "Fail fast: run quickest, most important checks first. Pipeline as code: version-controlled, reviewable, auditable. Idempotent: same commit always produces same result. Small, focused stages: one responsibility per stage. Parallelism: run independent tasks concurrently."
    },
    {
      "heading": "Security",
      "text": "Never hardcode credentials — use secrets management. Least privilege: pipelines access only what they need. Scan dependencies for vulnerabilities. Sign artifacts. Audit pipeline changes. Branch protection on main."
    },
    {
      "heading": "Reliability",
      "text": "Pin dependency versions (lock files). Use clean install commands (npm ci, pip install --require-hashes). Deterministic builds: same input = same output. Ephemeral agents: fresh environment per build. Cache strategically, but test without cache periodically."
    },
    {
      "heading": "Speed",
      "text": "Optimize dependency caching. Run tests in parallel. Split large test suites. Use fast, focused test suites. Build only what changed (monorepo tools). Use appropriate runner sizes. Cancel redundant builds (e.g., only latest commit)."
    },
    {
      "heading": "Maintainability",
      "text": "Use shared pipeline libraries (reusable steps). Document pipeline structure. Add pipeline tests (test the tests). Review pipeline changes like code. Monitor pipeline performance (duration, flakiness). Regular cleanup of old artifacts."
    }
  ],
  "interviewAnswer": "CI/CD best practices ensure pipelines are fast, reliable, secure, and maintainable.",
  "interviewQuestions": [
    {
      "question": "What does \"fail fast\" mean in CI/CD?",
      "answer": "Run the quickest, most important checks first to provide immediate feedback on failures."
    },
    {
      "question": "Why should pipelines be idempotent?",
      "answer": "Same commit should always produce the same result, regardless of when or how many times it runs."
    },
    {
      "question": "What is the benefit of ephemeral build agents?",
      "answer": "Fresh environment per build eliminates configuration drift and ensures consistency."
    },
    {
      "question": "CI/CD Best Practices — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "CI/CD Best Practices — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "CI/CD Best Practices — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "CI/CD Best Practices — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "CI/CD Best Practices — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "CI/CD Best Practices — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "CI/CD Best Practices — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CI/CD Best Practices</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fail Fast</text><text x=\"65\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Quickest checks firs</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">t</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Idempotent</text><text x=\"65\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Same input = same ou</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tput</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Secure</text><text x=\"65\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Secrets, least privi</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">lege</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fast</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parallel, caching</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CI/CD Best Practices: Fail fast, idempotent builds</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, security, speed, maintainability. Pipeline as co</text><text x=\"240\" y=\"194\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">de.</text></svg>",
  "codeExamples": [
    {
      "title": "Pipeline Checklist",
      "useCase": "Key CI/CD practices.",
      "code": "# Fast feedback: lint first\n# Idempotent: lock files + clean install\n# Secure: secrets management\n# Maintainable: shared libraries",
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
      "question": "What makes a pipeline idempotent?",
      "options": [
        "Running once",
        "Same commit always produces same result",
        "Fast execution",
        "Parallel stages"
      ],
      "answer": 1,
      "explanation": "Idempotence means the same commit always produces the same build output, regardless of when or how many times it runs."
    },
    {
      "question": "CI/CD Best Practices — What is the recommended approach?",
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
      "question": "CI/CD Best Practices — What should be prioritized?",
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
      "question": "CI/CD Best Practices — What is important for security?",
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
      "question": "CI/CD Best Practices — How to ensure reliability?",
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
      "question": "CI/CD Best Practices — What helps team collaboration?",
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
      "question": "CI/CD Best Practices — What reduces errors most?",
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
      "question": "CI/CD Best Practices — What improves speed?",
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
      "question": "CI/CD Best Practices — What is key for monitoring?",
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
      "question": "CI/CD Best Practices — What ensures quality?",
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
