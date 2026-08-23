const e={id:"git-ci-cd-pipeline",title:"CI/CD Pipeline",difficulty:"intermediate",estimatedMinutes:20,tldr:["CI/CD (Continuous Integration/Continuous Delivery) automates the building testing and deployment of code changes.","Continuous Integration: automatically build and test every code change. Catch bugs early. Every commit to main must be deployable.","Continuous Delivery: automatically deploy to staging/manual approval to production. Continuous Deployment: automatically deploy to production after tests pass.","Core pipeline stages: Source (code push) to Build (compile/bundle) to Test (unit/integration/e2e) to Security Scan to Deploy (staging/production)."],laymanDefinition:"CI/CD is like a car manufacturing assembly line. You put raw materials (code) at one end. The conveyor belt runs automatically: first the frame is assembled (build) then quality checks (tests) then safety inspection (security) then it rolls off ready (deploy). Each station must pass before moving to the next. If a station fails the whole line stops.",deepDive:[{heading:"Continuous Integration (CI)",text:"Every push triggers automated build and tests. CI servers: GitHub Actions GitLab CI Jenkins CircleCI. CI must be: fast (<10 min) reliable (no flaky tests) and comprehensive (lint test build). Benefits: catch bugs immediately reduce merge conflicts enforce quality gates."},{heading:"Continuous Delivery (CD)",text:"CI + automated deployment to staging. Production deployment requires manual approval. Build artifacts are versioned and stored. Rollback capability: deploy previous version if issues. CD ensures every change is potentially releasable. Common in enterprise environments with compliance requirements."},{heading:"Continuous Deployment",text:"CI + fully automated deployment to production. Every commit that passes all stages goes live. Requires: high test coverage (>80%) comprehensive monitoring feature flags for gradual rollout and automated rollback. GitOps pattern: Git repository is the single source of truth for deployment state."},{heading:"Pipeline Stages in Detail",text:"1. Source: checkout code. 2. Install: dependencies (npm ci pip install). 3. Lint: code style (ESLint Prettier). 4. Build: compile bundle (webpack tsc). 5. Test: unit integration e2e. 6. Security: SAST dependency scan container scan. 7. Package: Docker image artifact. 8. Deploy: staging to production."},{heading:"Pipeline Security",text:"Secrets management: use CI/CD secrets (GitHub Actions secrets vault). Never hardcode secrets in pipeline config. Signed commits: verify PR commits are signed. SBOM: generate software bill of contents. Supply chain: verify dependency integrity (lock files checksums). Least privilege: CI tokens with minimal permissions."}],interviewAnswer:"CI/CD automates the path from commit to production. Start with CI: build and test every push. Add CD: automate deployment to staging with manual production gate. Evolve to continuous deployment when you have confidence in tests and monitoring. Pipeline security is critical: manage secrets properly and verify supply chain integrity.",interviewQuestions:[{question:"What is CI/CD?",answer:"Continuous Integration/Continuous Delivery automated build test and deployment pipeline."},{question:"What is Continuous Integration?",answer:"Automatically building and testing every code change. Ensures every commit is integrated and verified."},{question:"What is the difference between CD and Continuous Deployment?",answer:"CD: automated deploy to staging manual approval for production. Continuous Deployment: fully automated to production."},{question:"What are the core pipeline stages?",answer:"Source to Install to Lint to Build to Test to Security to Deploy."},{question:"What is a build artifact?",answer:"The packaged output of the build stage: Docker image compiled binary or deployment package."},{question:"How do you handle secrets in CI/CD?",answer:"Use CI/CD secrets management (encrypted variables). Never hardcode secrets in pipeline YAML."},{question:"What is a flaky test?",answer:"A test that sometimes passes and sometimes fails without code changes. Undermines CI reliability."},{question:"What is GitOps?",answer:"A pattern where Git is the single source of truth for deployment state. Changes are made via PRs."},{question:"What is the benefit of fast CI?",answer:"Fast feedback. Developers know immediately if their change broke something. Target: <10 minutes."},{question:"What is a rollback strategy?",answer:"Ability to revert to a previous deployment version if the current deployment has issues."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">CI/CD Pipeline</text><rect x="10" y="35" width="100" height="20" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Push</text><text x="60" y="49" text-anchor="middle" font-size="9" fill="#ddd">Code</text><rect x="120" y="35" width="80" height="20" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="160" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Build</text><text x="160" y="49" text-anchor="middle" font-size="9" fill="#ddd">Compile</text><rect x="210" y="35" width="80" height="20" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="250" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Test</text><text x="250" y="49" text-anchor="middle" font-size="9" fill="#ddd">Verify</text><rect x="300" y="35" width="80" height="20" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="340" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Security</text><text x="340" y="49" text-anchor="middle" font-size="9" fill="#ddd">Scan</text><rect x="390" y="35" width="90" height="20" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="435" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy</text><text x="435" y="49" text-anchor="middle" font-size="9" fill="#ddd">Release</text><line x1="110" y1="45" x2="120" y2="45" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="200" y1="45" x2="210" y2="45" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="290" y1="45" x2="300" y2="45" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="380" y1="45" x2="390" y2="45" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="470" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="245" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CI/CD Pipeline</text><text x="245" y="89" text-anchor="middle" font-size="9" fill="#ddd">Automated build test security scan deploy. Every commit verified.</text><rect x="10" y="105" width="150" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="85" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CI: Build + Test</text><text x="85" y="124" text-anchor="middle" font-size="9" fill="#ddd">Fast feedback <10 min</text><rect x="170" y="105" width="150" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="245" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CD: Staging</text><text x="245" y="124" text-anchor="middle" font-size="9" fill="#ddd">Manual approval gate</text><rect x="330" y="105" width="150" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="405" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Continuous Deploy</text><text x="405" y="124" text-anchor="middle" font-size="9" fill="#ddd">Fully automated</text><rect x="10" y="140" width="470" height="40" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="245" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pipeline: Source to Build to Test to Security to Deploy. Artifacts versioned. Rollback enabled.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">CI/CD Pipeline: Automate build test security and d</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">eployment. Fast feedback reliable releases.</text></svg>',codeExamples:[{title:"GitHub Actions CI Pipeline",useCase:"Build and test workflow.",code:`name: CI
on:
  push:
    branches: [main develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [16 18 20]

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v3`,description:"GitHub Actions CI pipeline: lint build test across Node.js versions with caching."},{title:"Multi-Stage Docker Build",useCase:"Optimized build pipeline.",code:`# Dockerfile with multi-stage build
# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node" "dist/server.js"]`,description:"Multi-stage Docker build produces smaller secure production images."},{title:"Pipeline with Deployment Gates",useCase:"Staged deployment with approvals.",code:`name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm ci && npm test

  deploy-staging:
    needs: [test]
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - run: ./deploy.sh staging

  e2e-tests:
    needs: [deploy-staging]
    runs-on: ubuntu-latest
    steps:
      - run: npm run test:e2e -- --url https://staging.example.com

  deploy-production:
    needs: [e2e-tests]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: ./deploy.sh production`,description:"Staged deployment with environment gates: test to staging to e2e to production."},{title:"CI/CD Secrets Management",useCase:"Secure pipeline configuration.",code:`# GitHub Actions: set secrets via CLI or UI
# gh secret set DOCKER_PASSWORD
# gh secret set AWS_ACCESS_KEY_ID
# gh secret set SLACK_WEBHOOK_URL

# Use secrets in workflow:
steps:
  - name: Login to Docker Hub
    uses: docker/login-action@v2
    with:
      username: \${{ secrets.DOCKER_USERNAME }}
      password: \${{ secrets.DOCKER_PASSWORD }}

  - name: Configure AWS
    run: |
      aws configure set aws_access_key_id
        \${{ secrets.AWS_ACCESS_KEY_ID }}
      aws configure set aws_secret_access_key
        \${{ secrets.AWS_SECRET_ACCESS_KEY }}

# NEVER hardcode secrets in YAML:
# BAD: password: mypassword123
# GOOD: password: \${{ secrets.PASSWORD }}`,description:"Secrets management in CI/CD: encrypted variables never hardcoded in pipeline config."},{title:"Rollback Strategy in Pipeline",useCase:"Automated rollback on failure.",code:`name: Deploy with Rollback
on: push branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: |
          # Save current version for rollback
          PREV_VERSION=$(cat version.txt)
          echo "PREV_VERSION=$PREV_VERSION" >> $GITHUB_ENV

      - run: ./deploy.sh

      - name: Health Check
        run: |
          for i in {1..12}; do
            STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://app.example.com/health)
            if [ "$STATUS" = "200" ]; then
              echo "Health check passed"
              exit 0
            fi
            sleep 5
          done
          echo "Health check failed rolling back"
          ./rollback.sh $PREV_VERSION
          exit 1`,description:"Health check with automatic rollback on deployment failure."}],mcqQuestions:[{question:"What does CI stand for?",options:["Code Integration","Continuous Integration","Computer Interface","Code Inspection"],answer:1,explanation:"CI = Continuous Integration: automatically building and testing every code change."},{question:"What is the difference between CD and Continuous Deployment?",options:["Same thing","CD deploys to staging Continuous Deployment goes to production","CD is manual","Continuous Deployment is slower"],answer:1,explanation:"CD typically has a manual production gate; Continuous Deployment is fully automated."},{question:"What is a build artifact?",options:["Source code","The packaged output of the build stage","A git commit","A test result"],answer:1,explanation:"A build artifact is the output: Docker image binary or deployment package."},{question:"How should secrets be handled in CI/CD?",options:["Hardcoded in YAML","Encrypted CI/CD secrets","In the source code","In documentation"],answer:1,explanation:"Secrets must use encrypted CI/CD secret variables never hardcoded."},{question:"What is a flaky test?",options:["A consistently passing test","A test that intermittently fails","An untested feature","A slow test"],answer:1,explanation:"Flaky tests pass/fail unpredictably undermining CI reliability."},{question:"What is the recommended CI time target?",options:["< 1 minute","< 10 minutes","< 1 hour","< 1 day"],answer:1,explanation:"Fast CI (<10 minutes) provides quick feedback to developers."},{question:"CI/CD Pipeline — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"CI/CD Pipeline — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"CI/CD Pipeline — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"CI/CD Pipeline — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_ci_cd_pipeline};
