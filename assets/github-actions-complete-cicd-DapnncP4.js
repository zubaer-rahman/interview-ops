const e={id:"github-actions-complete-cicd",title:"Complete CI/CD Pipeline with GitHub Actions",difficulty:"advanced",estimatedMinutes:45,tldr:["A complete CI/CD pipeline in GitHub Actions covers the full lifecycle: code commit, build, test, security scan, deploy, and monitor.","The pipeline uses matrix builds for cross-platform testing, caching for speed, secrets for security, and environments for deployment control.","Key stages: Checkout, Install dependencies, Lint, Unit tests, Integration tests, Security scan, Build, Upload artifacts, Deploy to staging, E2E tests, Deploy to production, Notify team.","Environment protection rules ensure deployments require approval for production. Artifacts pass build outputs between jobs.","The entire pipeline is defined in a single .github/workflows/ci-cd.yml file, making it version-controlled, reviewable, and reproducible."],laymanDefinition:"A complete CI/CD pipeline with GitHub Actions is like an automated factory assembly line for your software. When a developer pushes code, the pipeline automatically: checks code quality, runs tests, builds the application, scans for security issues, deploys to staging for validation, and finally deploys to production with manual approval gates. Every step is visible, auditable, and automated.",deepDive:[{heading:"Pipeline Architecture",text:"The pipeline is organized into sequential and parallel jobs connected by the needs keyword. Build and lint run in parallel first. Tests depend on build. Security scan runs in parallel with tests. Deploy to staging depends on tests passing. E2E tests validate the staging deployment. Production deploy awaits manual approval via environment protection rules. Artifacts share build outputs between jobs."},{heading:"Stage 1: Quality & Build",text:"On every push and PR: Checkout code with actions/checkout@v4. Install dependencies with npm ci (fast, deterministic). Run linter with npm run lint. Run unit tests with npm test. Build the application. Upload build artifacts with actions/upload-artifact@v4. Cache node_modules with actions/cache@v4 for faster subsequent runs."},{heading:"Stage 2: Testing & Security",text:"Integration tests run against real dependencies (service containers for databases). Security scanning with CodeQL or third-party actions. Dependency vulnerability check with npm audit or Dependabot. SAST (Static Application Security Testing) for code vulnerabilities. Secrets scanning to prevent credential leaks."},{heading:"Stage 3: Deployment",text:"Staging deployment: automatic on successful tests. Uses environment with branch restriction (develop only). Smoke tests verify the deployment. E2E tests with Playwright or Cypress against staging URL. Production deployment: requires manual approval from designated reviewers via environment protection rules. Deployment URL shown in GitHub UI for easy access."},{heading:"Monitoring & Notifications",text:"Slack/Discord/email notifications on pipeline status. Deployment status badges in README. GitHub Deployment dashboard tracks all deployments. Rollback trigger via workflow_dispatch with previous version. Alerts on failure with links to failing step logs."},{heading:"CI/CD Workflow YAML",text:"The workflow file defines all jobs with their dependencies. Uses strategy matrix for Node.js versions 18 and 20 on ubuntu-latest. Environment production has required reviewers (2 people) and 10-minute wait timer. Secrets passed via GitHub Secrets for Docker registry, cloud credentials, and notification tokens."}],interviewAnswer:"A complete CI/CD pipeline in GitHub Actions covers the full lifecycle: code commit, build, test, security scan, deploy, and monitor.",interviewQuestions:[{question:"What are the main stages of a complete CI/CD pipeline?",answer:"Code quality (lint, unit tests), build, security scan, integration tests, deploy to staging, E2E tests, deploy to production, notify team."},{question:"How are artifacts shared between jobs?",answer:"Use actions/upload-artifact in the build job and actions/download-artifact in dependent jobs. Artifacts persist across jobs in the same workflow run."},{question:"What is the purpose of environment protection rules?",answer:"They enforce governance: required reviewers must approve production deployments, wait timer staggers traffic, and branch restriction limits which branches can deploy."},{question:"How does the pipeline handle different Node.js versions?",answer:"Using strategy matrix: matrix.node [18, 20] runs the same job across both versions in parallel."},{question:"What notifications does the pipeline send?",answer:"Slack/Discord messages on success, failure, and deployment status. Some teams also send email alerts for production failures."},{question:"Complete CI/CD Pipeline with GitHub Actions — What are common troubleshooting steps?",answer:"Troubleshooting involves checking logs, verifying configuration, and testing incrementally."},{question:"Complete CI/CD Pipeline with GitHub Actions — What security considerations apply here?",answer:"Security considerations include access control, encryption of sensitive data, and audit logging."},{question:"Complete CI/CD Pipeline with GitHub Actions — What best practices should be followed?",answer:"Best practices include version control, automation, monitoring, and thorough documentation."},{question:"Complete CI/CD Pipeline with GitHub Actions — How does this affect team collaboration?",answer:"It supports collaboration through shared visibility, standardized processes, and clear workflows."},{question:"Complete CI/CD Pipeline with GitHub Actions — What metrics indicate successful implementation?",answer:"Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Complete CI/CD Pipeline with GitHub Actions</text><rect x="10" y="20" width="150" height="22" rx="5" fill="#6f42c1" stroke="#6f42c1" stroke-width="1.5"/><text x="85" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Push/PR Code</text><text x="85" y="36" text-anchor="middle" font-size="9" fill="#ddd">Trigger event</text><line x1="160" y1="31" x2="175" y2="31" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="185" y="10" width="140" height="22" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="255" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Quality</text><text x="255" y="26" text-anchor="middle" font-size="9" fill="#ddd">Lint + Unit tests</text><rect x="185" y="35" width="140" height="22" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="255" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Build</text><text x="255" y="51" text-anchor="middle" font-size="9" fill="#ddd">npm ci + build</text><line x1="325" y1="21" x2="340" y2="21" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="350" y="10" width="140" height="22" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="420" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Security Scan</text><text x="420" y="26" text-anchor="middle" font-size="9" fill="#ddd">CodeQL + audit</text><line x1="325" y1="46" x2="340" y2="46" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="185" y="65" width="140" height="22" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="255" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Integration Tests</text><text x="255" y="81" text-anchor="middle" font-size="9" fill="#ddd">Service containers</text><line x1="325" y1="76" x2="340" y2="76" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="350" y="65" width="140" height="22" rx="5" fill="#20c997" stroke="#20c997" stroke-width="1.5"/><text x="420" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy Staging</text><text x="420" y="81" text-anchor="middle" font-size="9" fill="#ddd">Auto on success</text><line x1="490" y1="76" x2="505" y2="76" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="185" y="95" width="160" height="22" rx="5" fill="#fd7e14" stroke="#fd7e14" stroke-width="1.5"/><text x="265" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">E2E Tests</text><text x="265" y="111" text-anchor="middle" font-size="9" fill="#ddd">Playwright/Cypress</text><line x1="345" y1="106" x2="360" y2="106" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="185" y="125" width="160" height="22" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="265" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy Production</text><text x="265" y="141" text-anchor="middle" font-size="9" fill="#ddd">Manual approval</text><line x1="345" y1="136" x2="360" y2="136" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="185" y="155" width="160" height="22" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Notify</text><text x="265" y="171" text-anchor="middle" font-size="9" fill="#ddd">Slack/Email</text><text x="100" y="195" font-size="9" fill="#666" text-anchor="middle">Complete CI/CD Pipeline: Quality → Build → Test → </text><text x="100" y="207" font-size="9" fill="#666" text-anchor="middle">Security → Stage → E2E → Production → Notify. Ever</text><text x="100" y="219" font-size="9" fill="#666" text-anchor="middle">y step automated with governance gates.</text></svg>',codeExamples:[{title:"Complete Workflow YAML",useCase:"Full CI/CD pipeline definition.",code:`name: Complete CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: "20"

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
      - uses: actions/cache@v4
        with:
          path: ~/.npm
          key: \${{ runner.os }}-npm-\${{ hashFiles("**/package-lock.json") }}
      - run: npm ci
      - run: npm run lint
      - run: npm test

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3

  build:
    runs-on: ubuntu-latest
    needs: [quality]
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build-output
          path: dist/

  test-e2e:
    runs-on: ubuntu-latest
    needs: [build]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:e2e

  deploy-staging:
    runs-on: ubuntu-latest
    needs: [build, security, test-e2e]
    if: github.ref == "refs/heads/develop"
    environment:
      name: staging
      url: https://staging.example.com
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: build-output
      - run: ./deploy.sh staging

  deploy-production:
    runs-on: ubuntu-latest
    needs: [deploy-staging]
    if: github.ref == "refs/heads/main"
    environment:
      name: production
      url: https://app.example.com
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: build-output
      - run: ./deploy.sh production

  notify:
    runs-on: ubuntu-latest
    needs: [deploy-production, deploy-staging]
    if: always()
    steps:
      - name: Slack Notification
        run: |
          if [ "\${{ job.status }}" = "success" ]; then
            echo "Deployment succeeded"
          else
            echo "Deployment failed"
          fi`,description:"Complete CI/CD workflow demonstrating all stages from code push to production deployment with security scanning and notifications."},{title:"Common Use Case",useCase:"Typical implementation",code:`# Common implementation pattern
# Used in everyday scenarios`,description:"Standard use case example."},{title:"Advanced Configuration",useCase:"Complex scenario",code:`# Advanced pattern for complex scenarios
# Includes error handling`,description:"Advanced configuration example."},{title:"Integration Pattern",useCase:"Tool integration",code:`# Integration with other tools
# Shows how components connect`,description:"Integration example with related tools."}],mcqQuestions:[{question:"What is the purpose of the needs keyword in jobs?",options:["Runs all jobs in parallel","Defines job dependencies and execution order","Skips jobs randomly","Duplicates jobs"],answer:1,explanation:"The needs keyword creates a dependency graph — a job only runs after all its specified dependencies complete successfully. This defines the pipeline execution order."},{question:"What is the benefit of using environment protection rules for production?",options:["Faster deployments","Required approvals prevent unauthorized deployments","Reduces server costs","Increases test coverage"],answer:1,explanation:"Environment protection rules ensure governance: required reviewers must approve, which prevents accidental or unauthorized production deployments."},{question:"What does the services keyword provide in a job?",options:["Installs system packages","Runs service containers (like databases) for testing","Deploys to cloud","Manages secrets"],answer:1,explanation:"The services keyword runs Docker containers alongside the job, commonly used for databases (PostgreSQL, MySQL) needed during integration tests."},{question:"What is the purpose of actions/upload-artifact?",options:["Cache dependencies","Share build outputs between jobs","Deploy to production","Run tests"],answer:1,explanation:"upload-artifact saves files (like build output) that can be downloaded in subsequent jobs using download-artifact, enabling cross-job data sharing."},{question:"What happens when a job uses if: always()?",options:["Runs only on success","Runs regardless of previous job statuses","Never runs","Runs only on failure"],answer:1,explanation:"if: always() ensures a job runs no matter what — useful for cleanup and notification steps that must execute even after failures."},{question:"Complete CI/CD Pipeline with GitHub Actions — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Complete CI/CD Pipeline with GitHub Actions — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Complete CI/CD Pipeline with GitHub Actions — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Complete CI/CD Pipeline with GitHub Actions — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Complete CI/CD Pipeline with GitHub Actions — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as github_actions_complete_cicd};
