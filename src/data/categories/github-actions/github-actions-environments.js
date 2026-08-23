export const github_actions_environments = {
  "id": "github-actions-environments",
  "title": "Environments",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Environments in GitHub Actions represent deployment targets (dev, staging, production) with protection rules and configuration.",
    "Each environment can have: required reviewers, wait timer, secrets, variables, and deployment branches.",
    "Jobs target environments via the environment keyword. Deployments are tracked in the Environment dashboard.",
    "Environments works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Environments are like secure rooms for your deployments. You can say: \"Only deploy to production after a manager approves. Only deploy from the main branch. Wait 10 minutes before going live.\" Environments track every deployment with a full history.",
  "deepDive": [
    {
      "heading": "Environment Features",
      "text": "Required reviewers: 1-6 people who must approve before deployment. Wait timer: time delay before environment accepts traffic. Deployment branches: restrict which branches can deploy. Environment secrets/vars: scoped to specific environments. Protection rules are enforced in deployment jobs."
    },
    {
      "heading": "Using Environments",
      "text": "In job: environment: name: production. With URL: environment: name: production url: https://app.example.com. Deployment URL shown in GitHub UI. Environment variables: ${{{ vars.env_name.VAR }} syntax (or set in env context)."
    },
    {
      "heading": "Deployment History",
      "text": "Active deployments: currently live. Inactive: previous deployments. Viewable in Environment tab. Each deployment linked to commit, workflow run, and reviewer. Track: who deployed, when, what commit, approval status."
    }
  ],
  "interviewAnswer": "Environments in GitHub Actions represent deployment targets (dev, staging, production) with protection rules and configuration.",
  "interviewQuestions": [
    {
      "question": "What are GitHub Environments?",
      "answer": "Deployment targets with protection rules, secrets, and configuration (dev, staging, production)."
    },
    {
      "question": "What protection rules can environments have?",
      "answer": "Required reviewers, wait timer, deployment branch restrictions."
    },
    {
      "question": "How to track deployment history?",
      "answer": "Environments have a dashboard showing all deployments with commit, reviewer, and timestamp."
    },
    {
      "question": "Environments — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Environments — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Environments — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Environments — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Environments — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Environments — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Environments — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Environments</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dev</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No protections</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Staging</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Branch restriction</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Production</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Approval required</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Environments: Deployment targets with protection r</text><text x=\"240\" y=\"152\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ules. Required reviewers, wait timer, branch restr</text><text x=\"240\" y=\"164\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ictions. Full audit history.</text></svg>",
  "codeExamples": [
    {
      "title": "Environment Job",
      "useCase": "Target an environment in a job.",
      "code": "deploy-prod:\n  runs-on: ubuntu-latest\n  environment:\n    name: production\n    url: https://app.example.com\n  steps:\n    - run: ./deploy.sh",
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
      "question": "What protection rule can be added to production environment?",
      "options": [
        "Secrets",
        "Required reviewers",
        "Matrix strategy",
        "Caching"
      ],
      "answer": 1,
      "explanation": "Required reviewers forces deployments to be approved by specified people before proceeding."
    },
    {
      "question": "Environments — What is the recommended approach?",
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
      "question": "Environments — What should be prioritized?",
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
      "question": "Environments — What is important for security?",
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
      "question": "Environments — How to ensure reliability?",
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
      "question": "Environments — What helps team collaboration?",
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
      "question": "Environments — What reduces errors most?",
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
      "question": "Environments — What improves speed?",
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
      "question": "Environments — What is key for monitoring?",
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
      "question": "Environments — What ensures quality?",
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
