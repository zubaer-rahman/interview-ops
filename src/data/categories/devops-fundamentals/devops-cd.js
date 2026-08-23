export const devops_cd = {
  "id": "devops-cd",
  "title": "Continuous Delivery",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Continuous Delivery (CD) is the practice of keeping your codebase deployable at any moment by automating the release process.",
    "CD extends CI: after CI builds and tests pass, CD automates deployment to staging environments and prepares the release.",
    "Key difference from Continuous Deployment: CD requires manual approval for production deployment; Continuous Deployment goes all the way automatically.",
    "CD ensures every change that passes CI is potentially releasable — the release decision is a business choice, not a technical hurdle."
  ],
  "laymanDefinition": "Continuous Delivery is like having a car that is always washed, fueled, and ready to drive. The car (code) is prepared automatically after every checkup (CI). But the actual trip (deployment to production) requires a human to say \"let's go.\" The car is always ready — you just need to decide when to leave.",
  "deepDive": [
    {
      "heading": "CD Pipeline Stages after CI",
      "text": "CI completes → Artifact stored in repository (Nexus, Artifactory, Docker Hub). Deploy to staging: automated, full environment. Integration tests: automated against staging. Performance tests: load testing, stress testing. Security scan: SAST, DAST, dependency scanning. Release approval: manual or automatic gating. Deploy to production: automated deploy with guardrails."
    },
    {
      "heading": "Release Automation",
      "text": "Versioning: semantic versioning (major.minor.patch). Changelog: auto-generated from commits. Release notes: auto-generated with links to issues/PRs. Tagging: git tag with version. Artifact promotion: move through environments (dev → staging → prod). Deployment: blue-green, canary, or rolling."
    },
    {
      "heading": "CD Best Practices",
      "text": "Automate everything after CI. Keep staging identical to production. Use feature flags to decouple deployment from release. Practice \"dark launches\" — deploy invisible features. Implement smoke tests as deployment verification. Have a rollback plan for every release. Monitor deployment health metrics."
    },
    {
      "heading": "CD Prerequisites",
      "text": "Comprehensive automated test suite. Fast, reliable CI pipeline. Configuration management (environment-specific configs outside code). Database migration automation. Infrastructure as Code. Monitoring and logging in place. Rollback automation. Feature flags for risky changes."
    }
  ],
  "interviewAnswer": "Continuous Delivery means your code is always ready to go to production. The CI pipeline proves it works; CD makes it available. A person decides when to press \"go.\" This decouples the technical readiness from the business decision to release.",
  "interviewQuestions": [
    {
      "question": "What is Continuous Delivery?",
      "answer": "The practice of keeping codebase always deployable by automating the release process up to production deployment."
    },
    {
      "question": "What is the difference between Continuous Delivery and Continuous Deployment?",
      "answer": "CD requires manual approval for production deploy. Continuous Deployment is fully automated through production."
    },
    {
      "question": "What happens after CI in a CD pipeline?",
      "answer": "Artifact stored, deployed to staging, integration tests run, security scanned, release prepared for approval."
    },
    {
      "question": "What is a deployment approval gate?",
      "answer": "A manual or automated check that must pass before deploying to production. Common in CD (not Continuous Deployment)."
    },
    {
      "question": "What is artifact promotion?",
      "answer": "Moving a verified artifact through environments: dev → staging → production, promoting only after passing each stage."
    },
    {
      "question": "What tools support CD pipelines?",
      "answer": "Spinnaker, ArgoCD, Jenkins, GitLab CI/CD, GitHub Actions, GoCD, Harness."
    },
    {
      "question": "Continuous Delivery — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Continuous Delivery — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Continuous Delivery — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Continuous Delivery — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Continuous Delivery</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI Complete</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build + test pass</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Artifact Store</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nexus / Docker Hub</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy Staging</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated deploy</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Integration Tests</text><text x=\"215\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">+ Security + Perf</text><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Release Approval</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Manual gate</text><line x1=\"120\" y1=\"118\" x2=\"150\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"215\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy Prod</text><text x=\"215\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated + guardrai</text><text x=\"215\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ls</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"130\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Continuous Delivery</text><text x=\"385\" y=\"137\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Always deployable. CI → staging → </text><text x=\"385\" y=\"148\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">approval → production. Human decid</text><text x=\"385\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">es when to release.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Continuous Delivery: Keep code always deployable. </text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CI automates quality; CD automates readiness. Huma</text><text x=\"240\" y=\"224\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">n approves release.</text></svg>",
  "codeExamples": [
    {
      "title": "CD Pipeline with Manual Approval (GitHub Actions)",
      "useCase": "Deploy with environment approval.",
      "code": "name: Continuous Delivery\non:\n  push:\n    branches: [main]\n\njobs:\n  ci:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci && npm test && npm run build\n      - uses: actions/upload-artifact@v3\n        with:\n          name: build\n          path: dist/\n\n  deploy-staging:\n    needs: ci\n    runs-on: ubuntu-latest\n    environment: staging\n    steps:\n      - run: ./deploy-staging.sh\n\n  deploy-production:\n    needs: deploy-staging\n    runs-on: ubuntu-latest\n    environment: production\n    # Requires manual approval (GitHub Environments)\n    steps:\n      - run: ./deploy-production.sh",
      "description": "CD pipeline with CI, staging deploy, and production deploy requiring manual approval via GitHub Environments."
    },
    {
      "title": "Release Readiness Checklist",
      "useCase": "Automated checks before release.",
      "code": "# Release Readiness Checklist (automated)\n\n# [auto] All CI tests pass?\n# [auto] Code coverage >= 80%?\n# [auto] Security scan passed?\n# [auto] No critical vulnerabilities?\n# [auto] Integration tests pass on staging?\n# [auto] Performance tests within limits?\n# [manual] Product owner approved?\n# [manual] Release notes reviewed?\n# [auto] Database migrations ready?\n# [auto] Rollback plan exists?\n# [auto] Feature flags configured?\n\n# All checks must pass for deployment",
      "description": "Automated and manual checks as release readiness gates in a CD pipeline."
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
      "question": "What is the key difference between CD and Continuous Deployment?",
      "options": [
        "CD is faster",
        "CD requires manual approval for production",
        "CD has no testing",
        "CD is only for staging"
      ],
      "answer": 1,
      "explanation": "Continuous Delivery has a manual approval gate for production; Continuous Deployment is fully automated."
    },
    {
      "question": "What is artifact promotion?",
      "options": [
        "Deleting old artifacts",
        "Moving artifacts through environments after validation",
        "Creating new artifacts",
        "Versioning artifacts"
      ],
      "answer": 1,
      "explanation": "Artifact promotion moves verified builds through dev → staging → production environments."
    },
    {
      "question": "What is a prerequisite for CD?",
      "options": [
        "No tests needed",
        "Comprehensive automated test suite",
        "Manual deployment only",
        "Weekly releases"
      ],
      "answer": 1,
      "explanation": "A comprehensive automated test suite is essential for CD to ensure every build is releasable."
    },
    {
      "question": "Continuous Delivery — What is important for security?",
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
      "question": "Continuous Delivery — How to ensure reliability?",
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
      "question": "Continuous Delivery — What helps team collaboration?",
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
      "question": "Continuous Delivery — What reduces errors most?",
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
      "question": "Continuous Delivery — What improves speed?",
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
      "question": "Continuous Delivery — What is key for monitoring?",
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
      "question": "Continuous Delivery — What ensures quality?",
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
