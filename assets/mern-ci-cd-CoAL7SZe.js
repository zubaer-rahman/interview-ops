const e={id:"mern-ci-cd",title:"MERN CI/CD Pipeline",difficulty:"advanced",estimatedMinutes:20,tldr:["CI/CD for MERN automates testing, building, and deployment using GitHub Actions, GitLab CI, or similar tools.","Continuous Integration: lint, test, build on every push/PR. Continuous Deployment: auto-deploy to staging, manual gate to production.","Pipeline stages: Install deps ? Lint ? Test (unit/integration/E2E) ? Build ? Security scan ? Deploy to staging ? E2E ? Deploy to production.","Environment-specific configs: .env.staging, .env.production. Secrets managed via CI/CD platform (GitHub Secrets)."],laymanDefinition:"MERN CI/CD is like an automated factory assembly line. When a new part (code) arrives at the factory (push to GitHub), it automatically goes through quality checks (tests), gets assembled (build), inspected for defects (security scan), sent to the showroom (staging), and finally delivered to customers (production) � all with minimal human intervention.",deepDive:[{heading:"GitHub Actions Workflow",text:"Define .github/workflows/ci-cd.yml. Triggers: push to main/develop, pull requests. Jobs: install (npm ci), lint (npm run lint), test (npm test), build (npm run build), security (npm audit). Each job runs in a clean Ubuntu environment. Cache node_modules with actions/cache for speed."},{heading:"Testing in CI",text:"Run unit tests with Jest (npm test). Run integration tests with MongoDB Memory Server (no external DB needed). Run E2E tests with Cypress (needs build). Services: use GitHub Actions service containers for MongoDB in integration tests. Fail the pipeline if any test fails."},{heading:"Building and Deploying",text:"Build React: npm run build (produces build/ folder). Artifact: upload build/ with actions/upload-artifact. Deploy to staging: use Render/GitHub Pages/Heroku deploy actions. Manual approval for production: environment protection rules. Deployment: download artifact and deploy."},{heading:"Secrets and Environment Management",text:"Store secrets in GitHub Secrets: MONGO_URI, JWT_SECRET, API keys. Access in workflow: ${{ secrets.MONGO_URI }}. Environment-specific configs: use env fields in deployment job. Never hardcode secrets in workflow files. Rotate secrets periodically."},{heading:"Quality Gates",text:"Code quality: ESLint + Prettier check. Test coverage: minimum 80% threshold. Security: npm audit (fail on high severity). Build: must compile without errors. PR checks: all checks must pass before merge. Required reviewers for production deployments."}],interviewAnswer:"CI/CD automates the MERN delivery pipeline. GitHub Actions is the most common CI/CD platform. Run linting, testing, building, and security scanning on every push. Deploy to staging automatically. Require manual approval for production. Cache dependencies for faster builds. Store secrets securely in the CI/CD platform.",interviewQuestions:[{question:"What is CI/CD?",answer:"Continuous Integration (auto-test on push) and Continuous Deployment (auto-deploy after tests pass)."},{question:"What CI/CD platform is commonly used with MERN?",answer:"GitHub Actions � integrated with GitHub repos, free for public repos, supports all MERN workflows."},{question:"What are the typical CI pipeline stages?",answer:"Install ? Lint ? Test ? Build ? Security scan. Deploy stages follow after CI passes."},{question:"How do you cache npm dependencies in CI?",answer:"actions/cache with key based on package-lock.json hash. Restores node_modules from cache."},{question:"How do you run MongoDB in CI?",answer:"Use GitHub Actions services: mongo:7 container. Or use MongoDB Memory Server in integration tests."},{question:"What is a deployment artifact?",answer:"The built application files (build/ folder for React). Uploaded with upload-artifact, downloaded in deploy job."},{question:"How do you handle environment variables in CI/CD?",answer:"Store in GitHub Secrets, access with ${{ secrets.NAME }}, pass to deployment environment."},{question:"What is the purpose of a staging environment?",answer:"A production-like environment for final testing before production deployment."},{question:"How do you protect production deployments?",answer:"Environment protection rules: require reviewers, wait for checks, limit to specific branches."},{question:"What should cause a pipeline to fail?",answer:"Lint errors, test failures, build errors, high-severity security vulnerabilities, low test coverage."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN CI/CD Pipeline</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Push Code</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Trigger CI/CD</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Install/Lint</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">npm ci + lint</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Test</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Unit + Integration</text><line x1="110" y1="83" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="200" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Build</text><text x="200" y="89" text-anchor="middle" font-size="9" fill="#ddd">npm run build</text><line x1="150" y1="95" x2="150" y2="115" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Security</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">npm audit</text><line x1="110" y1="118" x2="140" y2="118" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="105" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="200" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy</text><text x="200" y="124" text-anchor="middle" font-size="9" fill="#ddd">Staging/Production</text><rect x="270" y="35" width="210" height="150" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="375" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CI/CD Pipeline</text><text x="375" y="157" text-anchor="middle" font-size="9" fill="#ddd">Push ? Lint ? Test ? Build ? Security </text><text x="375" y="168" text-anchor="middle" font-size="9" fill="#ddd">? Deploy. Automated quality gates, man</text><text x="375" y="179" text-anchor="middle" font-size="9" fill="#ddd">ual production approval.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">CI/CD: Automate testing and deployment. GitHub Act</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ions, staging environment, production gates, secre</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ts management.</text></svg>',codeExamples:[{title:"GitHub Actions CI Workflow",useCase:"Complete CI/CD pipeline YAML.",code:`name: MERN CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20'

jobs:
  ci:
    runs-on: ubuntu-latest
    services:
      mongo:
        image: mongo:7
        ports:
          - 27017:27017
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
      - uses: actions/cache@v4
        with:
          path: ~/.npm
          key: \${{ runner.os }}-npm-\${{ hashFiles('**/package-lock.json') }}
      - run: npm ci
      - run: npm run lint
      - run: npm test
        env:
          MONGO_URI: mongodb://localhost:27017/test
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: client/build/

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high

  deploy-staging:
    needs: [ci, security]
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'Deploying to staging...'

  deploy-production:
    needs: [ci, security]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: echo 'Deploying to production...'`,description:"Complete GitHub Actions workflow with CI, security scanning, and environment-gated deployments."},{title:"Testing in CI (Jest)",useCase:"Configure Jest for CI environment.",code:`// jest.config.js for CI
module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

// package.json
// "test:ci": "jest --ci --coverage --maxWorkers=2"`,description:"Jest configuration for CI with coverage thresholds to enforce code quality."},{title:"Environment-Specific Configs",useCase:"Manage configs per environment.",code:`// config/index.js
const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    mongoUri: 'mongodb://localhost:27017/mern-dev',
    corsOrigin: 'http://localhost:5173'
  },
  staging: {
    mongoUri: process.env.MONGO_URI,
    corsOrigin: 'https://staging.myapp.com'
  },
  production: {
    mongoUri: process.env.MONGO_URI,
    corsOrigin: 'https://myapp.com'
  }
};

module.exports = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,
  ...configs[env]
};`,description:"Environment-specific configuration with sensible defaults for each stage."},{title:"Pre-commit Hooks (Husky)",useCase:"Enforce quality before commit.",code:`// .husky/pre-commit
npm run lint-staged

// .husky/pre-push
npm test

// package.json
// "lint-staged": {
//   "*.js": ["eslint --fix", "prettier --write"],
//   "*.{json,md}": ["prettier --write"]
// }

# Install:
# npx husky-init
# npm install
# npx husky add .husky/pre-commit 'npm run lint-staged'`,description:"Husky pre-commit and pre-push hooks for code quality enforcement before CI."},{title:"Docker CI/CD with GitHub Actions",useCase:"Build and push Docker images.",code:`docker-build:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Build Docker image
      run: |
        docker build -t mern-app:\${{ github.sha }} ./server
    - name: Tag and push to registry
      run: |
        docker tag mern-app:\${{ github.sha }}
          ghcr.io/\${{ github.repository }}:latest
        echo "\${{ secrets.GITHUB_TOKEN }}" |
          docker login ghcr.io -u $ --password-stdin
        docker push ghcr.io/\${{ github.repository }}:latest`,description:"Docker image build and push to GitHub Container Registry in CI/CD pipeline."}],mcqQuestions:[{question:"What CI/CD platform is commonly used with MERN?",options:["Jenkins","GitHub Actions","Travis CI","CircleCI"],answer:1,explanation:"GitHub Actions is the most common due to tight GitHub integration and free tiers."},{question:"What does the install step do in CI?",options:["Build React","Run npm ci to install dependencies","Run tests","Deploy to production"],answer:1,explanation:"The install step runs npm ci (clean install) to install dependencies from package-lock.json."},{question:"How do you speed up CI pipelines?",options:["Skip tests","Use Docker","Cache dependencies with actions/cache","Use larger runners"],answer:2,explanation:"Caching node_modules with actions/cache significantly reduces install time."},{question:"What is a quality gate in CI/CD?",options:["A door","A condition that must pass before proceeding","A deployment target","A test framework"],answer:1,explanation:"Quality gates are conditions (lint pass, tests pass, coverage threshold) that must be met to proceed."},{question:"What is the staging environment for?",options:["Production traffic","Pre-production testing","Development only","Backup"],answer:1,explanation:"Staging is a production-like environment for final testing before production deployment."},{question:"How do you protect production deployments?",options:["No protection needed","Environment protection rules with required reviewers","Deploy on every push","Use root access"],answer:1,explanation:"Environment protection rules require manual approval and pass checks before production deployment."},{question:"MERN CI/CD Pipeline — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN CI/CD Pipeline — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN CI/CD Pipeline — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN CI/CD Pipeline — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_ci_cd};
