export const github_code_reviews = {
  "id": "github-code-reviews",
  "title": "Code Reviews",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Code reviews are systematic examinations of code changes by other developers before merging.",
    "GitHub review features: inline comments, line-specific feedback, suggested changes, approval/rejection.",
    "Review types: single comment (general), approve (looks good), request changes (must fix).",
    "Code Reviews works alongside other modern tools and platforms to support end-to-end software delivery processes."
  ],
  "laymanDefinition": "Code review is like having a colleague proofread your work before submitting it. They can comment on specific lines, suggest improvements, catch bugs, and approve or request changes. It's a quality gate that catches issues early and spreads knowledge across the team.",
  "deepDive": [
    {
      "heading": "Review Workflow",
      "text": "Open PR → Request reviewers → Reviewers get notified → Reviewer examines diff → Leave comments/approve/reject → Author addresses feedback → Re-review if needed → Merge. Review assignments: manual, CODEOWNERS auto-assign, team reviews."
    },
    {
      "heading": "Review Types",
      "text": "Approve: changes are ready to merge. Comment: general feedback without blocking. Request changes: must be addressed before merge. Dismiss: admin can dismiss a review. Re-request review: after addressing feedback."
    },
    {
      "heading": "Best Practices",
      "text": "Review within 24 hours. Be specific and constructive. Explain why, not just what. Use \"nit\" for minor style suggestions. Approve with confidence or request changes. Automate style/lint checks. Review in small batches. Focus on logic, not formatting."
    }
  ],
  "interviewAnswer": "Code reviews are systematic examinations of code changes by other developers before merging.",
  "interviewQuestions": [
    {
      "question": "What are the three review types?",
      "answer": "Approve, Comment, Request Changes."
    },
    {
      "question": "What is CODEOWNERS?",
      "answer": "A file that defines individuals or teams responsible for code in specific paths, auto-requesting their review."
    },
    {
      "question": "What is a \"nit\" in code review?",
      "answer": "A minor, non-blocking suggestion (e.g., style preference, naming)."
    },
    {
      "question": "Code Reviews — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Code Reviews — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Code Reviews — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Code Reviews — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Code Reviews — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Code Reviews — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Code Reviews — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Code Reviews</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Author</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Opens PR</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Reviewer</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Examines diff</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Feedback</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Comments/suggestions</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Author</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Addresses feedback</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Merge</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Changes approved</text><text x=\"240\" y=\"150\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Code Reviews: Systematic examination of code chang</text><text x=\"240\" y=\"162\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">es. Quality gate and knowledge sharing.</text></svg>",
  "codeExamples": [
    {
      "title": "Review PR via CLI",
      "useCase": "Review and approve.",
      "code": "gh pr checkout 42\ngh pr review --approve\ngh pr review -r \"Please fix typo\"",
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
      "question": "What does CODEOWNERS do?",
      "options": [
        "Tracks code ownership",
        "Auto-requests reviews from specific users/teams",
        "Prevents commits",
        "Generates reports"
      ],
      "answer": 1,
      "explanation": "CODEOWNERS auto-assigns review requests to individuals or teams responsible for specific files/directories."
    },
    {
      "question": "Code Reviews — What is the recommended approach?",
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
      "question": "Code Reviews — What should be prioritized?",
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
      "question": "Code Reviews — What is important for security?",
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
      "question": "Code Reviews — How to ensure reliability?",
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
      "question": "Code Reviews — What helps team collaboration?",
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
      "question": "Code Reviews — What reduces errors most?",
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
      "question": "Code Reviews — What improves speed?",
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
      "question": "Code Reviews — What is key for monitoring?",
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
      "question": "Code Reviews — What ensures quality?",
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
