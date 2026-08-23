export const devops_platform_engineering = {
  "id": "devops-platform-engineering",
  "title": "Platform Engineering",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Platform Engineering builds and maintains internal developer platforms (IDPs) providing self-service capabilities for dev teams.",
    "The platform abstracts infrastructure complexity, providing developers golden paths to deploy and manage applications.",
    "Components: CI/CD pipelines, infrastructure automation, service catalog, developer portals (Backstage), observability, security.",
    "DevOps is culture; platform engineering builds tools that enable that culture at scale."
  ],
  "laymanDefinition": "Platform engineering is like building a supermarket instead of every chef growing their own food. Devs can \"pick up\" pre-configured services: PostgreSQL, Redis, Kubernetes namespace — all self-service, all compliant.",
  "deepDive": [
    {
      "heading": "Internal Developer Platform (IDP)",
      "text": "Self-service layer on top of infrastructure. Components: provisioning (Terraform), CI/CD, service catalog (Backstage), secrets, monitoring, cost tracking. IDP is the product; developers are the customers."
    },
    {
      "heading": "Golden Path",
      "text": "The recommended, well-supported way to build and deploy services. Standardized tooling, templates, workflows. Reduces decision fatigue. Ensures best practices are followed automatically."
    },
    {
      "heading": "Backstage (Spotify)",
      "text": "Open-source developer portal. Software catalog, templates (scaffold new services), plugins (CI/CD, monitoring, docs), techdocs. Unifies all dev tools into a single interface."
    },
    {
      "heading": "Platform as a Product",
      "text": "Treat platform as a product: understand developer pain points, define SLIs/SLOs, gather feedback, iterate. Platform adoption is voluntary — make it better than alternatives."
    }
  ],
  "interviewAnswer": "Platform engineering builds the internal tools that make DevOps scalable. Treat the platform as a product. Use Backstage for the developer portal. Build golden paths. Abstract complexity. Platform engineering and DevOps are complementary.",
  "interviewQuestions": [
    {
      "question": "What is Platform Engineering?",
      "answer": "Building internal developer platforms providing self-service capabilities for development teams."
    },
    {
      "question": "What is an IDP?",
      "answer": "Internal Developer Platform — a self-service layer on top of infrastructure abstracting complexity for developers."
    },
    {
      "question": "What is a Golden Path?",
      "answer": "The recommended, standardized way to build and deploy services with best practices built in."
    },
    {
      "question": "What is Backstage?",
      "answer": "An open-source developer portal platform by Spotify with software catalog, templates, and plugins."
    },
    {
      "question": "What does \"platform as a product\" mean?",
      "answer": "Treating the internal platform as a product with users, feedback loops, and continuous improvement."
    },
    {
      "question": "Platform Engineering — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Platform Engineering — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Platform Engineering — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Platform Engineering — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Platform Engineering — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Platform Engineering</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">IDP</text><text x=\"65\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Self-service platfor</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">m</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Golden Path</text><text x=\"65\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Standardized workflo</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ws</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backstage</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Developer portal</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Templates</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Scaffold services</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Catalog</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All services tracked</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Platform Engineering</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build IDPs. Self-service golden pa</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ths. Platform as a product. Backst</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">age. DevOps at scale.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Platform Engineering: Building IDPs for self-servi</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ce, golden paths, and DevOps at scale.</text></svg>",
  "codeExamples": [
    {
      "title": "Backstage Software Template",
      "useCase": "Scaffold a new service.",
      "code": "apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: node-service\n  title: Node.js Microservice\nspec:\n  owner: platform-team\n  parameters:\n    - title: Service Details\n      required: [name, owner]\n      properties:\n        name:\n          title: Service Name\n          type: string\n        owner:\n          title: Team\n          type: string\n  steps:\n    - id: template\n      name: Scaffold\n      action: fetch:template\n      input:\n        url: ./templates/node-service\n        values:\n          name: ${{ parameters.name }}\n    - id: publish\n      name: Publish to GitHub\n      action: publish:github\n      input:\n        repoUrl: github.com?owner=${{ parameters.owner }}",
      "description": "Backstage template scaffolding a new Node.js microservice with CI/CD and catalog registration."
    },
    {
      "title": "Platform Mission Statement",
      "useCase": "IDP vision.",
      "code": "# Internal Developer Platform — Mission\n## Vision\nDevelopers build, deploy, and operate services without leaving their IDE.\n## Principles\n- Self-service over tickets\n- Golden paths over unlimited flexibility\n- Automation over manual processes\n- Observability as default\n- Security baked in\n## Success Metrics\n- Onboard new service: < 1 hour\n- Dev satisfaction: NPS > 50\n- Platform uptime: 99.99%",
      "description": "Platform team mission defining IDP vision, principles, and success metrics."
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
      "question": "What is Platform Engineering?",
      "options": [
        "Managing cloud infra",
        "Building IDPs for self-service",
        "Writing app code",
        "Managing DBs"
      ],
      "answer": 1,
      "explanation": "Platform Engineering builds Internal Developer Platforms providing self-service capabilities."
    },
    {
      "question": "What is a Golden Path?",
      "options": [
        "Most secure path",
        "Standardized way to build/deploy",
        "Migration strategy",
        "Testing approach"
      ],
      "answer": 1,
      "explanation": "A Golden Path is the recommended, standardized workflow for building and deploying services."
    },
    {
      "question": "What is Backstage?",
      "options": [
        "CI/CD tool",
        "Open-source developer portal by Spotify",
        "Monitoring tool",
        "Container runtime"
      ],
      "answer": 1,
      "explanation": "Backstage is an open-source developer portal for software catalog, templates, and self-service."
    },
    {
      "question": "Platform Engineering — What is important for security?",
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
      "question": "Platform Engineering — How to ensure reliability?",
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
      "question": "Platform Engineering — What helps team collaboration?",
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
      "question": "Platform Engineering — What reduces errors most?",
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
      "question": "Platform Engineering — What improves speed?",
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
      "question": "Platform Engineering — What is key for monitoring?",
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
      "question": "Platform Engineering — What ensures quality?",
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
