export const devops_continuous_deployment = {
  "id": "devops-continuous-deployment",
  "title": "Continuous Deployment",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Continuous Deployment is the practice of automatically deploying every change that passes the CI/CD pipeline to production without manual intervention.",
    "Every commit that passes all automated tests, security scans, and quality gates is automatically released to users.",
    "This requires extreme confidence in the automated pipeline: tests, monitoring, rollback, and feature flags must be rock-solid.",
    "Continuous Deployment is the most advanced stage of CI/CD maturity — achieved only by organizations with mature DevOps practices."
  ],
  "laymanDefinition": "Continuous Deployment is like a self-driving car that takes itself to the garage for maintenance automatically. The mechanic (automated pipeline) checks everything, fixes issues, and puts the car back on the road — all without anyone making a phone call. You just wake up to a better car every morning.",
  "deepDive": [
    {
      "heading": "Continuous Deployment Pipeline",
      "text": "Commit → CI (build + test) → Security scan → Deploy to staging → Integration tests → Deploy to production → Smoke tests → Monitor. NO manual approval. Entire process in minutes. Every step has automated rollback if checks fail. Feature flags control feature exposure, not deployment."
    },
    {
      "heading": "Safety Mechanisms for Continuous Deployment",
      "text": "Feature flags: deploy invisible code, enable for users gradually. Canary releases: deploy to 1% of users, gradually increase. Automated rollback: revert if error rate spikes. Deployment freeze: block deploys during sensitive periods. Ring deployment: deploy to internal users → beta → 1% → 10% → 100%. Circuit breakers: stop deployment if metrics go red."
    },
    {
      "heading": "Prerequisites for Continuous Deployment",
      "text": "Comprehensive test suite (unit, integration, e2e, security, performance). Mature monitoring and alerting. Automated rollback capability. Feature flag infrastructure. Blameless culture for deployment failures. Small, frequent commits. Staging/prod parity. Database change automation. Zero-downtime deployment strategy."
    },
    {
      "heading": "Companies Using Continuous Deployment",
      "text": "Netflix: thousands of deployments daily via Spinnaker. Amazon: deploys every 11.7 seconds on average. Etsy: 50+ deployments per day. Facebook: multiple daily deploys. Google: trunk-based development with automated deployment. These companies invest heavily in testing, monitoring, and rollback automation."
    }
  ],
  "interviewAnswer": "Continuous Deployment is the pinnacle of automation — every commit that passes your pipeline goes to production automatically. It requires extreme confidence in your testing, monitoring, and rollback capabilities. Feature flags decouple deployment from release. Start with CD for low-risk services, expand gradually.",
  "interviewQuestions": [
    {
      "question": "What is Continuous Deployment?",
      "answer": "Every change that passes the automated pipeline is deployed to production without manual intervention."
    },
    {
      "question": "How is Continuous Deployment different from Continuous Delivery?",
      "answer": "Continuous Deployment has no manual approval gate. CD goes to prod automatically. Delivery requires human approval."
    },
    {
      "question": "What safety mechanisms are needed for Continuous Deployment?",
      "answer": "Feature flags, canary releases, automated rollback, ring deployment, circuit breakers, deployment freezes."
    },
    {
      "question": "What is a prerequisite for Continuous Deployment?",
      "answer": "Comprehensive tests, mature monitoring, automated rollback, feature flags, blameless culture, small frequent commits."
    },
    {
      "question": "What companies practice Continuous Deployment?",
      "answer": "Netflix, Amazon, Etsy, Facebook, Google. They deploy many times daily with confidence."
    },
    {
      "question": "How do you start with Continuous Deployment?",
      "answer": "Start with low-risk services, implement feature flags, build automated rollback, monitor everything, expand gradually."
    },
    {
      "question": "Continuous Deployment — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Continuous Deployment — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Continuous Deployment — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Continuous Deployment — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Continuous Deployment</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Commit</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Code pushed</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto build + test</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security Scan</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto pass/fail</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Staging Tests</text><text x=\"215\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Integration + perf</text><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Production</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto deploy</text><rect x=\"10\" y=\"135\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Smoke Tests</text><text x=\"65\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verify + monitor</text><line x1=\"120\" y1=\"118\" x2=\"150\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"148\" x2=\"150\" y2=\"148\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"290\" y=\"35\" width=\"190\" height=\"130\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Continuous Deployment</text><text x=\"385\" y=\"137\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No manual gates. Every commit → pr</text><text x=\"385\" y=\"148\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">oduction automatically. Requires e</text><text x=\"385\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">xtreme pipeline confidence.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Continuous Deployment: Fully automated from commit</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> to production. Maximum velocity, maximum trust in</text><text x=\"240\" y=\"224\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> pipeline.</text></svg>",
  "codeExamples": [
    {
      "title": "Continuous Deployment Flow",
      "useCase": "Fully automated pipeline.",
      "code": "# Continuous Deployment: No manual approval\n\nname: Continuous Deployment\non:\n  push:\n    branches: [main]\n\njobs:\n  test-and-build:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm ci && npm test && npm run build\n\n  deploy-canary:\n    needs: test-and-build\n    runs-on: ubuntu-latest\n    steps:\n      - run: ./deploy-canary.sh # 1% traffic\n      - run: ./smoke-test.sh\n      - run: ./monitor-metrics.sh\n\n  deploy-full:\n    needs: deploy-canary\n    # Auto-promotes if canary healthy\n    steps:\n      - run: ./deploy-full.sh # 100% traffic\n\n  post-deploy:\n    needs: deploy-full\n    steps:\n      - run: ./run-smoke-tests.sh\n      - run: ./notify-team.sh",
      "description": "Continuous Deployment pipeline with canary, auto-promotion, and post-deploy verification — no manual gates."
    },
    {
      "title": "Simple Deploy Script with Rollback",
      "useCase": "Safeguard for auto-deploy.",
      "code": "#!/bin/bash\n# deploy-with-rollback.sh\n\nAPP=\"my-service\"\nVERSION=$1\nROLLBACK_VERSION=$(cat previous-version.txt)\n\necho \"Deploying $APP version $VERSION...\"\n\n# Deploy new version\nkubectl set image deployment/$APP $APP=$APP:$VERSION\n\n# Wait for rollout\nkubectl rollout status deployment/$APP --timeout=5m\n\n# Check health endpoint\nif curl -f http://myapp.com/health; then\n  echo \"Deploy successful!\"\n  echo $VERSION > previous-version.txt\nelse\n  echo \"Health check failed! Rolling back...\"\n  kubectl rollout undo deployment/$APP\n  exit 1\nfi",
      "description": "Automated deployment script with health check and automatic rollback on failure."
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
      "question": "What is the key difference between Continuous Deployment and Continuous Delivery?",
      "options": [
        "Deployment frequency",
        "Manual approval gate",
        "Test coverage",
        "Build speed"
      ],
      "answer": 1,
      "explanation": "Continuous Deployment has no manual approval gate — every passing change goes to production automatically."
    },
    {
      "question": "What is essential for safe Continuous Deployment?",
      "options": [
        "Long release cycles",
        "Feature flags + automated rollback",
        "Manual testing",
        "Weekly deployments"
      ],
      "answer": 1,
      "explanation": "Feature flags and automated rollback are essential safety mechanisms for Continuous Deployment."
    },
    {
      "question": "What is a ring deployment?",
      "options": [
        "Deploying to all users at once",
        "Gradually expanding deployment from internal to 100% of users",
        "Deploying only on weekends",
        "Manual deployment in phases"
      ],
      "answer": 1,
      "explanation": "Ring deployment rolls out gradually: internal → beta → 1% → 10% → 100% of users."
    },
    {
      "question": "Continuous Deployment — What is important for security?",
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
      "question": "Continuous Deployment — How to ensure reliability?",
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
      "question": "Continuous Deployment — What helps team collaboration?",
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
      "question": "Continuous Deployment — What reduces errors most?",
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
      "question": "Continuous Deployment — What improves speed?",
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
      "question": "Continuous Deployment — What is key for monitoring?",
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
      "question": "Continuous Deployment — What ensures quality?",
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
