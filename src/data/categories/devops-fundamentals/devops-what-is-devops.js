export const devops_what_is_devops = {
  "id": "devops-what-is-devops",
  "title": "What is DevOps",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle.",
    "Goals: faster delivery, higher quality, reduced failure rate, improved collaboration between teams.",
    "DevOps emphasizes automation, continuous delivery, monitoring, and shared ownership of the entire application lifecycle.",
    "DevOps is a cultural and professional movement, not a tool or role — it changes how organizations deliver software."
  ],
  "laymanDefinition": "DevOps is like a restaurant where the chefs (developers) and waitstaff (operations) work as one team instead of separate groups. The chefs see what customers are saying, and the waitstaff understand how the kitchen works. Together, they serve better food faster and fix problems immediately when they arise.",
  "deepDive": [
    {
      "heading": "The DevOps Philosophy",
      "text": "Break down silos between Dev and Ops teams. Shared responsibility for the entire lifecycle from development through production. Automate everything possible. Measure everything. Learn from failures. Iterate rapidly. The Three Ways: Flow (fast left-to-right), Feedback (fast right-to-left), Continuous Learning."
    },
    {
      "heading": "Key DevOps Metrics",
      "text": "Deployment Frequency: how often you deploy to production. Lead Time: time from commit to production. Change Failure Rate: percentage of deployments causing failures. Mean Time to Recovery (MTTR): time to recover from failures. These four metrics define the DORA DevOps capabilities."
    },
    {
      "heading": "CALMS Framework",
      "text": "Culture: collaboration, shared responsibility. Automation: eliminate manual processes. Lean: optimize flow, reduce waste. Measurement: data-driven decisions. Sharing: knowledge and feedback across teams. CALMS assesses DevOps maturity in organizations."
    }
  ],
  "interviewAnswer": "DevOps is a cultural and technical movement to deliver value faster and more reliably. Focus on the Three Ways: flow, feedback, and learning. Automate everything. Measure the four key DORA metrics. Break down team silos. DevOps is not a tool or a role — it is a collaborative approach to software delivery.",
  "interviewQuestions": [
    {
      "question": "What is DevOps?",
      "answer": "A set of practices combining Dev and Ops to shorten the development lifecycle and deliver high-quality software continuously."
    },
    {
      "question": "What are the four key DORA metrics?",
      "answer": "Deployment Frequency, Lead Time, Change Failure Rate, Mean Time to Recovery (MTTR)."
    },
    {
      "question": "What is the CALMS framework?",
      "answer": "Culture, Automation, Lean, Measurement, Sharing — assesses DevOps maturity."
    },
    {
      "question": "Is DevOps a tool or a role?",
      "answer": "No. DevOps is a cultural and professional movement combining practices, not a specific tool or job title."
    },
    {
      "question": "What are the Three Ways of DevOps?",
      "answer": "Flow (fast left-to-right), Feedback (fast right-to-left), Continuous Learning and Experimentation."
    },
    {
      "question": "What does DevOps emphasize?",
      "answer": "Automation, continuous delivery, monitoring, collaboration, and shared ownership."
    },
    {
      "question": "What is DevOps — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "What is DevOps — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "What is DevOps — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "What is DevOps — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">What is DevOps</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dev</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Developers build</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ops</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Operations run</text><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Automation</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CI/CD pipelines</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monitoring</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Metrics & alerts</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collaboration</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Shared ownership</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Continuous</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Delivery + Learning</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DevOps</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dev + Ops = faster, reliable deliv</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ery. Culture, automation, measurem</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ent, sharing.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DevOps: Practices combining Dev and Ops to deliver</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> value faster with higher quality.</text></svg>",
  "codeExamples": [
    {
      "title": "DevOps Pipeline Overview",
      "useCase": "CI/CD pipeline stages.",
      "code": "# Typical DevOps pipeline stages\n# Code → Build → Test → Package → Deploy → Monitor\n\n# .github/workflows/devops-pipeline.yml\nname: DevOps Pipeline\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Install dependencies\n        run: npm ci\n      - name: Run tests\n        run: npm test\n      - name: Build\n        run: npm run build\n      - name: Deploy\n        run: ./deploy.sh",
      "description": "A simple CI/CD pipeline automating the build, test, and deploy process."
    },
    {
      "title": "DevOps Culture Manifesto",
      "useCase": "Cultural principles.",
      "code": "# DevOps cultural principles\n# Instead of silos → collaboration\n# Instead of manual → automation\n# Instead of fear of change → embrace change\n# Instead of blame → blameless postmortems\n# Instead of big releases → small frequent deploys\n# Instead of hero culture → shared ownership\n# Instead of separate tools → integrated toolchain\n\n# Key behaviors:\n# - Devs handle their own deployments\n# - Ops provides self-service platforms\n# - Everyone monitors production\n# - Experimentation is encouraged\n# - Fail fast, learn faster",
      "description": "DevOps culture emphasizes collaboration, automation, shared responsibility, and blameless learning."
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
      "question": "What does DevOps combine?",
      "options": [
        "Design and Development",
        "Development and Operations",
        "Testing and Deployment",
        "Security and Compliance"
      ],
      "answer": 1,
      "explanation": "DevOps combines Development (Dev) and Operations (Ops)."
    },
    {
      "question": "Which is NOT a DORA metric?",
      "options": [
        "Deployment Frequency",
        "Lead Time",
        "Code Coverage",
        "MTTR"
      ],
      "answer": 2,
      "explanation": "Code Coverage is not one of the four DORA metrics."
    },
    {
      "question": "What does CALMS stand for?",
      "options": [
        "Culture, Automation, Lean, Measurement, Sharing",
        "Code, Analyze, Learn, Monitor, Secure",
        "CI/CD, Agile, Lean, Metrics, Security",
        "Collaborate, Automate, Log, Monitor, Scale"
      ],
      "answer": 0,
      "explanation": "CALMS = Culture, Automation, Lean, Measurement, Sharing."
    },
    {
      "question": "What is DevOps — What is important for security?",
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
      "question": "What is DevOps — How to ensure reliability?",
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
      "question": "What is DevOps — What helps team collaboration?",
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
      "question": "What is DevOps — What reduces errors most?",
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
      "question": "What is DevOps — What improves speed?",
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
      "question": "What is DevOps — What is key for monitoring?",
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
      "question": "What is DevOps — What ensures quality?",
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
