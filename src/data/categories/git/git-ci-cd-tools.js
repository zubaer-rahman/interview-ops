export const git_ci_cd_tools = {
  "id": "git-ci-cd-tools",
  "title": "CI/CD Tools",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "CI/CD tools automate the software delivery pipeline from code commit to production deployment.",
    "Popular tools: GitHub Actions (integrated with GitHub) GitLab CI/CD (integrated with GitLab) Jenkins (self-hosted extensible) CircleCI (cloud-based fast).",
    "Selection criteria: integration with your Git platform ease of use scalability pricing and plugin ecosystem.",
    "Modern trends: GitHub Actions dominates for GitHub-hosted projects due to tight integration and large marketplace of actions."
  ],
  "laymanDefinition": "CI/CD tools are like different brands of coffee machines. GitHub Actions is a Nespresso: integrated easy clean pods (actions). Jenkins is a professional espresso machine: powerful customizable but requires expertise to maintain. CircleCI is a pour-over: fast good results but needs more setup. Choose the one that fits your kitchen (team) and coffee (project).",
  "deepDive": [
    {
      "heading": "GitHub Actions",
      "text": "Integrated CI/CD for GitHub repos. YAML-based workflows. Extensive marketplace: 10,000+ actions. Free for public repos. Matrix builds: test across OS/node versions. Self-hosted runners available. Key features: environment protection rules artifact storage and workflow reuse."
    },
    {
      "heading": "GitLab CI/CD",
      "text": "Integrated with GitLab. .gitlab-ci.yml configuration. Auto DevOps: pre-configured pipelines. Built-in container registry and Kubernetes integration. Review Apps: ephemeral environments per MR. Unique: security scanning (SAST DAST) and container scanning built-in."
    },
    {
      "heading": "Jenkins",
      "text": "Self-hosted highly extensible Java-based CI/CD. Massive plugin ecosystem (1000+). Pipeline as Code (Jenkinsfile with Declarative or Scripted syntax). Master/agent architecture. Great for complex enterprise needs. Challenges: maintenance overhead plugin compatibility Java dependency."
    },
    {
      "heading": "CircleCI",
      "text": "Cloud-first CI/CD focused on speed. Orbs: reusable configuration packages. Resource classes: customize CPU/memory per job. SSH debug mode. Parallelism: split tests across containers. Cache: intelligent dependency caching. Pricing based on credits (compute time)."
    },
    {
      "heading": "Tool Selection Guidance",
      "text": "Use GitHub Actions if you are on GitHub. Use GitLab CI/CD if you are on GitLab. Use Jenkins if you need self-hosted or have complex enterprise requirements. Use CircleCI for performance-optimized cloud CI. Avoid: running your own CI server unless you have dedicated DevOps resources."
    }
  ],
  "interviewAnswer": "Choose the CI/CD tool that integrates best with your Git platform and team. GitHub Actions is the most popular choice for GitHub projects. Avoid maintaining your own CI server unless necessary. Focus on pipeline reliability and speed over feature count. A simple fast pipeline is better than a complex slow one.",
  "interviewQuestions": [
    {
      "question": "What is the most popular CI/CD tool for GitHub?",
      "answer": "GitHub Actions tightly integrated with a large marketplace of pre-built actions."
    },
    {
      "question": "What is Jenkins?",
      "answer": "A self-hosted extensible CI/CD server with a massive plugin ecosystem. Requires maintenance."
    },
    {
      "question": "What are GitHub Actions?",
      "answer": "YAML-based CI/CD workflows integrated into GitHub with a marketplace of reusable actions."
    },
    {
      "question": "What are GitLab CI/CD orbs?",
      "answer": "Reusable configuration packages for CircleCI. Similar to GitHub Actions but for CircleCI."
    },
    {
      "question": "What is Auto DevOps in GitLab?",
      "answer": "Pre-configured CI/CD pipeline that automatically detects your application type and sets up builds tests and deploys."
    },
    {
      "question": "What is a self-hosted runner?",
      "answer": "A CI/CD runner you host on your own infrastructure rather than using the cloud-hosted service."
    },
    {
      "question": "What is matrix build?",
      "answer": "Running the same CI job across multiple OS/version combinations (e.g. Node 16 18 20 on Ubuntu Windows macOS)."
    },
    {
      "question": "What is a CI/CD orb?",
      "answer": "A reusable package of CircleCI configuration that encapsulates jobs commands and executors."
    },
    {
      "question": "What is the advantage of cloud CI over self-hosted?",
      "answer": "No maintenance faster setup automatic scaling and updates. Self-hosted gives more control."
    },
    {
      "question": "What is the main disadvantage of Jenkins?",
      "answer": "Maintenance overhead: need to manage plugins server updates and security patches."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CI/CD Tools</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitHub Actions</text><text x=\"60\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GitHub integrated</text><rect x=\"120\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"170\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitLab CI/CD</text><text x=\"170\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Built-in</text><rect x=\"230\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"280\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkins</text><text x=\"280\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Self-hosted</text><rect x=\"340\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CircleCI</text><text x=\"390\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cloud fast</text><rect x=\"10\" y=\"65\" width=\"125\" height=\"20\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"72.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitHub Actions</text><text x=\"72.5\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Marketplace YAML</text><rect x=\"145\" y=\"65\" width=\"125\" height=\"20\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"207.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitLab CI/CD</text><text x=\"207.5\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto DevOps</text><rect x=\"280\" y=\"65\" width=\"125\" height=\"20\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"342.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jenkins</text><text x=\"342.5\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Plugins customizable</text><rect x=\"415\" y=\"65\" width=\"75\" height=\"20\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"452.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CircleCI</text><text x=\"452.5\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Orbs speed</text><rect x=\"10\" y=\"100\" width=\"470\" height=\"70\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"245\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI/CD Tools</text><text x=\"245\" y=\"153\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GitHub Actions GitLab CI Jenkins CircleCI. Choose based on Git platform and team need</text><text x=\"245\" y=\"164\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CI/CD Tools: GitHub Actions GitLab CI Jenkins Circ</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">leCI. Pick the right tool for your platform and sc</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ale.</text></svg>",
  "codeExamples": [
    {
      "title": "GitHub Actions Workflow",
      "useCase": "Example CI workflow.",
      "code": "name: Node.js CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [18.x 20.x]\n\n    steps:\n      - uses: actions/checkout@v4\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node-version }}\n      - run: npm ci\n      - run: npm run build --if-present\n      - run: npm test",
      "description": "Standard GitHub Actions workflow for Node.js CI with matrix build."
    },
    {
      "title": "GitLab CI/CD Pipeline",
      "useCase": "Example .gitlab-ci.yml.",
      "code": "stages:\n  - test\n  - build\n  - deploy\n\ncache:\n  paths:\n    - node_modules/\n\nunit-test:\n  stage: test\n  image: node:20-alpine\n  script:\n    - npm ci\n    - npm test\n  artifacts:\n    reports:\n      junit: junit.xml\n\nbuild:\n  stage: build\n  image: docker:latest\n  services:\n    - docker:dind\n  script:\n    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .\n    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA",
      "description": "GitLab CI/CD pipeline with test build and stages."
    },
    {
      "title": "Jenkins Pipeline (Jenkinsfile)",
      "useCase": "Declarative Jenkins pipeline.",
      "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Checkout') {\n            steps {\n                checkout scm\n            }\n        }\n        stage('Install') {\n            steps {\n                sh 'npm ci'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh 'npm test'\n            }\n            post {\n                always {\n                    junit 'junit.xml'\n                }\n            }\n        }\n        stage('Build') {\n            steps {\n                sh 'npm run build'\n            }\n        }\n        stage('Deploy') {\n            steps {\n                sh './deploy.sh'\n            }\n        }\n    }\n    post {\n        failure {\n            mail to: 'team@example.com' subject: 'Pipeline failed'\n        }\n    }\n}",
      "description": "Declarative Jenkins pipeline with stages and post-build actions."
    },
    {
      "title": "CircleCI Config",
      "useCase": "Example .circleci/config.yml.",
      "code": "version: 2.1\norbs:\n  node: circleci/node@5.0\n\njobs:\n  build-and-test:\n    docker:\n      - image: cimg/node:20.0\n    steps:\n      - checkout\n      - node/install-packages:\n          pkg-manager: npm\n      - run:\n          name: Run tests\n          command: npm test\n      - run:\n          name: Build\n          command: npm run build\n\nworkflows:\n  build-and-test:\n    jobs:\n      - build-and-test\n      - deploy:\n          requires:\n            - build-and-test\n          filters:\n            branches:\n              only: main",
      "description": "CircleCI configuration with orbs for reusable config and workflow orchestration."
    },
    {
      "title": "Multi-Cloud CI Matrix",
      "useCase": "Test across environments.",
      "code": "name: Multi-Platform CI\non: [push pull_request]\n\njobs:\n  test:\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        os: [ubuntu-latest windows-latest macos-latest]\n        node: [16 18 20]\n        exclude:\n          - os: windows-latest\n            node: 16\n\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm ci\n      - run: npm test\n\n# Matrix runs 3 OS x 3 Node = 9 jobs\n# Exclude reduces to 8 (no node 16 on Windows)",
      "description": "Matrix CI testing across operating systems and Node.js versions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which CI/CD tool is most popular for GitHub?",
      "options": [
        "Jenkins",
        "GitHub Actions",
        "CircleCI",
        "GitLab CI"
      ],
      "answer": 1,
      "explanation": "GitHub Actions is the most popular choice for GitHub-hosted repositories."
    },
    {
      "question": "What is Jenkins?",
      "options": [
        "Cloud CI service",
        "Self-hosted CI/CD server",
        "Git hosting",
        "Package manager"
      ],
      "answer": 1,
      "explanation": "Jenkins is a self-hosted extensible CI/CD server with a large plugin ecosystem."
    },
    {
      "question": "What are GitHub Actions?",
      "options": [
        "Git commands",
        "YAML CI/CD workflows",
        "Browser extensions",
        "Code formatters"
      ],
      "answer": 1,
      "explanation": "GitHub Actions are YAML-based CI/CD workflows with a marketplace of reusable actions."
    },
    {
      "question": "What is the main advantage of cloud CI?",
      "options": [
        "More control",
        "No maintenance automatic scaling",
        "Cheaper",
        "More secure"
      ],
      "answer": 1,
      "explanation": "Cloud CI requires no infrastructure maintenance and scales automatically."
    },
    {
      "question": "What does matrix build test?",
      "options": [
        "Database schemas",
        "Multiple OS/version combinations",
        "UI layouts",
        "Network latency"
      ],
      "answer": 1,
      "explanation": "Matrix builds test across combinations of operating systems and runtime versions."
    },
    {
      "question": "What is Jenkins Pipeline as Code?",
      "options": [
        "Jenkinsfile in repo",
        "Visual pipeline editor",
        "CLI configuration",
        "XML config files"
      ],
      "answer": 0,
      "explanation": "Jenkins Pipeline as Code uses a Jenkinsfile stored in the repository."
    },
    {
      "question": "CI/CD Tools — What reduces errors most?",
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
      "question": "CI/CD Tools — What improves speed?",
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
      "question": "CI/CD Tools — What is key for monitoring?",
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
      "question": "CI/CD Tools — What ensures quality?",
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
