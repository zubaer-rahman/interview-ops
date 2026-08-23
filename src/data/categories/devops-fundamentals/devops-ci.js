export const devops_ci = {
  "id": "devops-ci",
  "title": "Continuous Integration",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Continuous Integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.",
    "Each merge triggers an automated build and test run to detect integration errors as early as possible.",
    "CI principle: \"if it hurts, do it more often\" — frequent merging reduces integration pain.",
    "Key CI practices: maintain a single source repository, automate builds, make builds self-testing, keep builds fast, commit to mainline daily."
  ],
  "laymanDefinition": "CI is like a group of cooks each preparing ingredients (code) at their own stations. Instead of combining everything at the end (and finding out the sauces are incompatible), they mix ingredients into a shared pot every few minutes and taste-test immediately. If something is wrong, only the last addition needs fixing.",
  "deepDive": [
    {
      "heading": "CI Pipeline Stages",
      "text": "Trigger: code push to repository (any branch). Stage 1 - Checkout: get latest code. Stage 2 - Install: resolve dependencies (npm install, mvn dependency:resolve). Stage 3 - Build: compile code, package artifacts. Stage 4 - Test: unit tests, integration tests, linting, code coverage. Stage 5 - Report: test results, coverage reports, quality gates."
    },
    {
      "heading": "CI Best Practices",
      "text": "Commit frequently (several times daily). Keep commits small and focused. Write tests before or with code. Fix broken builds immediately — no one commits on a red build. Use feature flags instead of branches. Run CI on every branch push. Keep build under 10 minutes. Use fast feedback mechanisms (Slack, email)."
    },
    {
      "heading": "CI vs CD vs CD",
      "text": "CI (Continuous Integration): merge and test frequently. CD (Continuous Delivery): CI + automated deployment to staging, manual approval for production. CD (Continuous Deployment): CI + automated deployment all the way to production with no manual gates. CI is prerequisite for both delivery and deployment."
    },
    {
      "heading": "CI Tools and Services",
      "text": "GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Travis CI, Bitbucket Pipelines, Azure DevOps, AWS CodePipeline. Key features: webhook triggers, parallel jobs, matrix builds, artifact storage, test reporting, cache management, secret handling."
    }
  ],
  "interviewAnswer": "CI is the foundation of all DevOps practices. Merge frequently, build automatically, test every change, fix broken builds immediately. Keep builds fast. CI catches integration issues early when they are cheap to fix. Without CI, all other DevOps practices are built on an unstable foundation.",
  "interviewQuestions": [
    {
      "question": "What is Continuous Integration?",
      "answer": "Merging code changes frequently (multiple times daily) with automated build and test on each merge."
    },
    {
      "question": "What is the main goal of CI?",
      "answer": "Detect integration errors early and fix them quickly when they are cheap to resolve."
    },
    {
      "question": "What happens when a CI build fails?",
      "answer": "The team stops other work and fixes it immediately. Never commit on a broken build."
    },
    {
      "question": "What is the difference between CI and CD?",
      "answer": "CI = frequent merge + build + test. CD = CI + automated deployment readiness."
    },
    {
      "question": "What makes a good CI pipeline?",
      "answer": "Fast (< 10 min), reliable, self-testing, clear reporting, triggers on every push."
    },
    {
      "question": "What are common CI tools?",
      "answer": "GitHub Actions, Jenkins, GitLab CI, CircleCI, Travis CI, Azure DevOps."
    },
    {
      "question": "Continuous Integration — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Continuous Integration — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Continuous Integration — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Continuous Integration — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Continuous Integration</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Developer A</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Commits code</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Developer B</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Commits code</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Developer C</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Commits code</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"85\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI Server</text><text x=\"200\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto-build + auto-</text><text x=\"200\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">test on every merg</text><text x=\"200\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">e</text><rect x=\"270\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"320\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build</text><text x=\"320\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compile + package</text><rect x=\"270\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"320\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Test</text><text x=\"320\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unit + integration</text><rect x=\"270\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"320\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Report</text><text x=\"320\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Results + artifact</text><text x=\"320\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s</text><line x1=\"250\" y1=\"48\" x2=\"270\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"78\" x2=\"270\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"108\" x2=\"270\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"390\" y=\"35\" width=\"90\" height=\"85\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"435\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Main Branch</text><text x=\"435\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Always working, </text><text x=\"435\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">always green</text><line x1=\"370\" y1=\"48\" x2=\"390\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"370\" y1=\"78\" x2=\"390\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"370\" y1=\"108\" x2=\"390\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><text x=\"240\" y=\"175\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CI: Merge frequently + build + test automatically.</text><text x=\"240\" y=\"187\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> Catch integration errors early.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic CI Pipeline (GitHub Actions)",
      "useCase": "CI on every push.",
      "code": "name: CI Pipeline\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test -- --coverage\n      - run: npm run build\n      - uses: actions/upload-artifact@v3\n        with:\n          name: build-output\n          path: dist/",
      "description": "Basic CI pipeline that runs lint, tests, and build on every push and PR."
    },
    {
      "title": "Jenkins CI Pipeline (Jenkinsfile)",
      "useCase": "Declarative CI pipeline.",
      "code": "pipeline {\n  agent any\n\n  stages {\n    stage('Checkout') {\n      steps { checkout scm }\n    }\n    stage('Install') {\n      steps { sh 'npm ci' }\n    }\n    stage('Lint') {\n      steps { sh 'npm run lint' }\n    }\n    stage('Test') {\n      steps {\n        sh 'npm test'\n        junit 'reports/*.xml'\n      }\n    }\n    stage('Build') {\n      steps { sh 'npm run build' }\n    }\n  }\n  post {\n    success {\n      archiveArtifacts 'dist/**'\n    }\n  }\n}",
      "description": "Jenkins declarative pipeline for CI with checkout, install, lint, test, and build stages."
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
      "question": "What is the main goal of CI?",
      "options": [
        "Deploy faster",
        "Catch integration errors early",
        "Automate everything",
        "Reduce costs"
      ],
      "answer": 1,
      "explanation": "CI catches integration errors early when they are cheap and easy to fix."
    },
    {
      "question": "How often should developers commit with CI?",
      "options": [
        "Once per week",
        "Several times daily",
        "Only when feature is complete",
        "Once per sprint"
      ],
      "answer": 1,
      "explanation": "CI practices recommend committing to mainline several times each day."
    },
    {
      "question": "What happens when a CI build breaks?",
      "options": [
        "Wait for next release",
        "Fix it immediately before other work",
        "Revert all changes",
        "Ignore it"
      ],
      "answer": 1,
      "explanation": "Broken CI builds should be fixed immediately. Never commit code on a broken build."
    },
    {
      "question": "Continuous Integration — What is important for security?",
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
      "question": "Continuous Integration — How to ensure reliability?",
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
      "question": "Continuous Integration — What helps team collaboration?",
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
      "question": "Continuous Integration — What reduces errors most?",
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
      "question": "Continuous Integration — What improves speed?",
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
      "question": "Continuous Integration — What is key for monitoring?",
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
      "question": "Continuous Integration — What ensures quality?",
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
