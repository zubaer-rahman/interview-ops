export const devops_culture = {
  "id": "devops-culture",
  "title": "DevOps Culture",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "DevOps culture is the set of behaviors, values, and practices that enable the DevOps transformation in an organization.",
    "Core values: collaboration, automation, measurement, sharing, trust, blamelessness, and continuous improvement.",
    "DevOps culture replaces \"throw it over the wall\" mentality with shared ownership of the entire application lifecycle.",
    "Key cultural shifts: devs handle operations, ops influence design, failures are learning opportunities, experimentation is encouraged."
  ],
  "laymanDefinition": "DevOps culture is like a sports team where everyone plays both offense and defense. In traditional IT, developers throw the ball (code) over the wall to operations who then try to run with it. In DevOps culture, everyone is on the same field, wearing the same jersey, and responsible for both scoring and defending.",
  "deepDive": [
    {
      "heading": "Blameless Postmortems",
      "text": "When something fails, the focus is on \"what broke\" not \"who broke it\". Root cause analysis of systems and processes, not individuals. Document what happened, why, and what to change. Share learnings broadly. No disciplinary action for honest mistakes. This encourages reporting issues without fear."
    },
    {
      "heading": "Shared Ownership",
      "text": "Developers are on-call for their code. Operations has input on architecture. Everyone shares the pager. \"You build it, you run it\" (Amazon principle). Shared ownership means no handoffs. Teams own services end-to-end from development through production."
    },
    {
      "heading": "Psychological Safety",
      "text": "Team members feel safe to take risks and admit mistakes. Experimentation is encouraged — not all experiments succeed. Failure is treated as a learning opportunity. New ideas are welcomed. Questions are encouraged. This is the foundation of high-performing DevOps teams."
    },
    {
      "heading": "Continuous Improvement Culture",
      "text": "Kaizen (Japanese: \"change for better\"). Small incremental improvements daily. Retrospectives after incidents and releases. Regular feedback loops. Metrics-driven improvement. Culture of learning: training, conferences, internal knowledge sharing. Experimentation with new tools and processes."
    }
  ],
  "interviewAnswer": "DevOps culture is the foundation of all DevOps practices. Without the right culture, tools and automation alone cannot transform an organization. Focus on blamelessness, shared ownership, psychological safety, and continuous improvement. The best DevOps tooling cannot fix a broken culture.",
  "interviewQuestions": [
    {
      "question": "What is DevOps culture?",
      "answer": "Behaviors, values, and practices enabling DevOps: collaboration, blamelessness, shared ownership, and continuous improvement."
    },
    {
      "question": "What is a blameless postmortem?",
      "answer": "An incident review focusing on system/process failures, not individual blame. Learn from failures without punishment."
    },
    {
      "question": "What does \"you build it, you run it\" mean?",
      "answer": "Developers are responsible for their code in production, including on-call and incident response."
    },
    {
      "question": "What is psychological safety?",
      "answer": "Team members feel safe to take risks, admit mistakes, and ask questions without fear of negative consequences."
    },
    {
      "question": "What is Kaizen?",
      "answer": "Japanese philosophy of continuous improvement through small, incremental changes."
    },
    {
      "question": "Is culture or tools more important in DevOps?",
      "answer": "Culture. Tools support the culture but cannot replace it. The best tools with a bad culture will fail."
    },
    {
      "question": "DevOps Culture — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "DevOps Culture — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "DevOps Culture — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "DevOps Culture — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DevOps Culture</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collaboration</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dev + Ops together</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Blameless</text><text x=\"65\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fix process, not peo</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ple</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shared Ownership</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build it, run it</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Safety</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Experiment freely</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Improvement</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kaizen daily</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DevOps Culture</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Collaboration, blamelessness, shar</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ed ownership, psychological safety</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, continuous improvement.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DevOps Culture: The foundation of all DevOps pract</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ices. Trust, safety, collaboration, and learning.</text></svg>",
  "codeExamples": [
    {
      "title": "Blameless Postmortem Template",
      "useCase": "Structured incident review.",
      "code": "---\ntitle: Postmortem Template\n---\n\n## Summary\n- Date: YYYY-MM-DD\n- Severity: SEV1/SEV2/SEV3\n- Duration: X hours X minutes\n- Services affected:\n\n## What happened\n- Timeline of events\n- When was it detected\n- How was it resolved\n\n## Root Cause\n- Not who, but what and why\n\n## Action Items\n- [ ] Prevent recurrence\n- [ ] Improve detection\n- [ ] Improve mitigation\n\n## Lessons Learned\n- What went well\n- What went wrong\n- What to improve\n\n## Blameless Statement\nThis was a system/process failure, not a people failure.",
      "description": "Blameless postmortem template focusing on system causes, not individual blame."
    },
    {
      "title": "Team Working Agreement",
      "useCase": "DevOps culture contract.",
      "code": "# DevOps Team Working Agreement\n\n1. We deploy to production daily\n2. We own our code end-to-end\n3. We automate everything we can\n4. We share on-call rotation\n5. We review code before merging\n6. We write tests for every change\n7. We monitor what we deploy\n8. We respond to alerts within 5 min\n9. We run blameless postmortems\n10. We improve something every sprint",
      "description": "Team working agreement codifying DevOps cultural principles into daily practices."
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
      "question": "What is the focus of blameless postmortems?",
      "options": [
        "Who caused the failure",
        "What system/process failed",
        "Which team to blame",
        "How to punish mistakes"
      ],
      "answer": 1,
      "explanation": "Blameless postmortems focus on system and process failures, not individuals."
    },
    {
      "question": "What does \"you build it, you run it\" mean?",
      "options": [
        "Developers only build",
        "Developers own code in production",
        "Operations runs everything",
        "Only senior devs handle production"
      ],
      "answer": 1,
      "explanation": "Developers are responsible for their code from development through production, including on-call."
    },
    {
      "question": "What is the foundation of high-performing DevOps teams?",
      "options": [
        "Expensive tools",
        "Psychological safety",
        "More managers",
        "Longer release cycles"
      ],
      "answer": 1,
      "explanation": "Psychological safety — team members feel safe to take risks and admit mistakes — is the foundation of high performance."
    },
    {
      "question": "DevOps Culture — What is important for security?",
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
      "question": "DevOps Culture — How to ensure reliability?",
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
      "question": "DevOps Culture — What helps team collaboration?",
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
      "question": "DevOps Culture — What reduces errors most?",
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
      "question": "DevOps Culture — What improves speed?",
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
      "question": "DevOps Culture — What is key for monitoring?",
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
      "question": "DevOps Culture — What ensures quality?",
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
