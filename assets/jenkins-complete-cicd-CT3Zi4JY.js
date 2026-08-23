const e={id:"jenkins-complete-cicd",title:"Complete CI/CD Pipeline with Jenkins",difficulty:"advanced",estimatedMinutes:45,tldr:["A complete Jenkins CI/CD pipeline demonstrates the full software delivery lifecycle: code commit, build, test, security scan, deploy to staging, E2E validation, deploy to production, and monitoring.","The pipeline uses a Declarative Jenkinsfile with multiple stages, agents (label-based), parallel execution, post-build actions, and credentials management.","Key components: Multibranch Pipeline (auto-creates per branch), Shared Library (reusable deployment logic), Blue Ocean (visual pipeline view), environment-specific configurations, and integration with SonarQube, Nexus, Docker, and Kubernetes.","Pipeline durability ensures builds survive master restarts. Artifacts archived for audit trail. Test results tracked over time. Security integrated via credential masking and plugin ecosystem.","The entire pipeline is defined as code in the Jenkinsfile, version-controlled alongside the application code, reviewed in pull requests, and shared across teams via Shared Libraries."],laymanDefinition:"A complete Jenkins CI/CD pipeline is like an automated software factory. When a developer pushes code, Jenkins automatically: checks out the code, runs static analysis (SonarQube), builds with Maven/Gradle, runs unit and integration tests, packages the application as a Docker image, pushes to Nexus artifact repository, deploys to Kubernetes staging, runs E2E tests, and after manual approval, deploys to production with Blue-Green strategy — all visible in Blue Ocean's beautiful pipeline visualization.",deepDive:[{heading:"Pipeline Architecture Overview",text:"The complete pipeline is defined in a Declarative Jenkinsfile with these stages: Checkout (SCM), Code Quality (SonarQube analysis), Build (Maven/Gradle), Unit Tests, Integration Tests (with service containers), Security Scan (OWASP plugin), Package (Docker image build), Publish (push to Nexus/Docker registry), Deploy to Staging (Kubernetes), E2E Tests (Selenium/Playwright), Deploy to Production (Blue-Green with manual approval), Health Check, and Notify (Slack/Email). Uses shared libraries for deployment and notification logic. Multibranch Pipeline creates branches automatically."},{heading:"Stage 1: Quality & Build",text:"The pipeline starts with code checkout from SCM (Git). SonarQube analysis runs quality gates (code coverage > 80%, no critical bugs). Build with Maven or Gradle (compilation, test execution, packaging). Unit test results published with JUnit plugin. Integration tests use Docker containers for databases (PostgreSQL, Redis). OWASP Dependency Check plugin analyzes vulnerabilities in dependencies."},{heading:"Stage 2: Artifact & Docker",text:"After successful build and tests, the pipeline packages the application as a Docker image using the Docker Pipeline plugin (docker.build()). The image is tagged with the build number and commit SHA. Image pushed to a private Docker registry (Nexus or Docker Hub). The JAR/WAR artifact is also archived and published to Nexus Repository for traceability."},{heading:"Stage 3: Deploy to Staging",text:"Staging deployment uses Kubernetes plugin to apply Kubernetes manifests. Blue-Green deployment strategy: new version (green) deployed alongside current (blue). Smoke tests validate the green deployment. If tests pass, traffic switches to green. Jenkins credentials securely store kubeconfig and registry credentials. Environment-specific configuration via ConfigMap and Secrets."},{heading:"Stage 4: Production Deployment",text:"Production deployment uses Blue-Green strategy for zero-downtime. Manual approval step pauses the pipeline — designated reviewers must approve via Jenkins UI. Post-deployment health checks (HTTP endpoint /health) verify the application responds correctly. Rollback capability: if health check fails, pipeline automatically switches back to blue (previous version)."},{heading:"Monitoring & Notifications",text:"Build status published to Slack/Email via Notification plugin. Blue Ocean provides visual pipeline view. Build trends and test result graphs visible on Jenkins dashboard. Performance metrics tracked over time. Deployment history in Blue Ocean. Automatic rollback triggers on production health check failure."}],interviewAnswer:"A complete Jenkins CI/CD pipeline demonstrates the full software delivery lifecycle: code commit, build, test, security scan, deploy to staging, E2E validation, deploy to production, and monitoring.",interviewQuestions:[{question:"What is the overall architecture of the complete Jenkins CI/CD pipeline?",answer:"Multibranch Pipeline with Declarative Jenkinsfile. Stages: Code Quality → Build → Test → Security → Docker → Deploy Staging → E2E → Deploy Production → Notify. Uses shared libraries, Blue Ocean, and integrates with SonarQube, Nexus, Docker, Kubernetes."},{question:"How does Jenkins ensure zero-downtime deployments?",answer:"Using Blue-Green deployment strategy: deploy new version alongside current, test it, then switch traffic. If the new version fails health checks, automatically roll back to the previous version."},{question:"How are build artifacts managed in the pipeline?",answer:"JAR/WAR artifacts archived via archiveArtifacts step and published to Nexus Repository. Docker images tagged with build number and commit SHA, pushed to private Docker registry. Artifacts traceable per build."},{question:"What role does SonarQube play in the pipeline?",answer:"SonarQube performs static code analysis on every commit. Quality gates enforce standards: minimum 80% code coverage, no critical vulnerabilities, no duplicated blocks. Build fails if quality gate is not met."},{question:"How does Blue Ocean enhance the pipeline experience?",answer:"Blue Ocean provides a visual, intuitive pipeline editor, real-time pipeline visualization with colored stage blocks, one-click log access per stage, and a beautiful dashboard showing pipeline status across all branches."},{question:"Complete CI/CD Pipeline with Jenkins — What are common troubleshooting steps?",answer:"Troubleshooting involves checking logs, verifying configuration, and testing incrementally."},{question:"Complete CI/CD Pipeline with Jenkins — What security considerations apply here?",answer:"Security considerations include access control, encryption of sensitive data, and audit logging."},{question:"Complete CI/CD Pipeline with Jenkins — What best practices should be followed?",answer:"Best practices include version control, automation, monitoring, and thorough documentation."},{question:"Complete CI/CD Pipeline with Jenkins — How does this affect team collaboration?",answer:"It supports collaboration through shared visibility, standardized processes, and clear workflows."},{question:"Complete CI/CD Pipeline with Jenkins — What metrics indicate successful implementation?",answer:"Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Complete CI/CD Pipeline with Jenkins</text><rect x="10" y="15" width="160" height="22" rx="5" fill="#6f42c1" stroke="#6f42c1" stroke-width="1.5"/><text x="90" y="31" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">SCM Checkout</text><text x="90" y="31" text-anchor="middle" font-size="9" fill="#ddd">Git clone source code</text><line x1="170" y1="26" x2="185" y2="26" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="5" width="140" height="22" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="265" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Code Quality</text><text x="265" y="21" text-anchor="middle" font-size="9" fill="#ddd">SonarQube analysis</text><line x1="335" y1="16" x2="350" y2="16" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="30" width="140" height="22" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="265" y="46" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Build & Test</text><text x="265" y="46" text-anchor="middle" font-size="9" fill="#ddd">Maven/Gradle + JUnit</text><line x1="335" y1="41" x2="350" y2="41" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="55" width="140" height="22" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="265" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Security Scan</text><text x="265" y="71" text-anchor="middle" font-size="9" fill="#ddd">OWASP Dependency Check</text><line x1="335" y1="66" x2="350" y2="66" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="80" width="140" height="22" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="265" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Package Docker</text><text x="265" y="96" text-anchor="middle" font-size="9" fill="#ddd">docker.build + push</text><line x1="335" y1="91" x2="350" y2="91" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="105" width="140" height="22" rx="5" fill="#20c997" stroke="#20c997" stroke-width="1.5"/><text x="265" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy Staging</text><text x="265" y="121" text-anchor="middle" font-size="9" fill="#ddd">Kubernetes Blue-Green</text><line x1="335" y1="116" x2="350" y2="116" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="130" width="140" height="22" rx="5" fill="#fd7e14" stroke="#fd7e14" stroke-width="1.5"/><text x="265" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">E2E Tests</text><text x="265" y="146" text-anchor="middle" font-size="9" fill="#ddd">Playwright/Selenium</text><line x1="335" y1="141" x2="350" y2="141" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="155" width="140" height="22" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="265" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Approve Prod</text><text x="265" y="171" text-anchor="middle" font-size="9" fill="#ddd">Manual approval gate</text><line x1="335" y1="166" x2="350" y2="166" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="195" y="180" width="140" height="22" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="196" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy Production</text><text x="265" y="196" text-anchor="middle" font-size="9" fill="#ddd">Blue-Green with rollback</text><text x="100" y="210" font-size="9" fill="#666" text-anchor="middle">Complete Jenkins CI/CD Pipeline: Code → Quality → </text><text x="100" y="222" font-size="9" fill="#666" text-anchor="middle">Build → Security → Docker → Stage → E2E → Prod. Ev</text><text x="100" y="234" font-size="9" fill="#666" text-anchor="middle">ery stage automated with governance and rollback.</text></svg>',codeExamples:[{title:"Complete Jenkinsfile",useCase:"Full Declarative Pipeline for CI/CD.",code:`pipeline {
    agent any

    parameters {
        choice(name: "ENV", choices: ["staging", "production"], description: "Target environment")
    }

    environment {
        DOCKER_REGISTRY = credentials("docker-registry")
        KUBECONFIG = credentials("kube-config")
        SONAR_TOKEN = credentials("sonar-token")
    }

    stages {
        stage("Code Quality") {
            steps {
                withSonarQubeEnv("SonarQube") {
                    sh "mvn sonar:sonar -Dsonar.token=$SONAR_TOKEN"
                }
            }
        }

        stage("Build & Test") {
            parallel {
                stage("Unit Tests") {
                    steps { sh "mvn test" }
                    post { success { junit "**/target/surefire-reports/*.xml" } }
                }
                stage("Integration Tests") {
                    steps { sh "mvn verify -P integration" }
                }
                stage("Security Scan") {
                    steps { dependencyCheck additionalArguments: "-f XML" }
                }
            }
        }

        stage("Package & Publish") {
            steps {
                sh "mvn package -DskipTests"
                sh "docker build -t $DOCKER_REGISTRY/app:\${BUILD_NUMBER} ."
                sh "docker push $DOCKER_REGISTRY/app:\${BUILD_NUMBER}"
                archiveArtifacts artifacts: "target/*.jar"
            }
        }

        stage("Deploy Staging") {
            when { branch "develop" }
            steps {
                sh "kubectl set image deployment/app-staging app=$DOCKER_REGISTRY/app:\${BUILD_NUMBER}"
            }
        }

        stage("E2E Tests") {
            steps {
                sh "npm run test:e2e"
            }
        }

        stage("Approve Production") {
            when { branch "main" }
            input {
                message "Deploy to production?"
                ok "Deploy"
                submitter "admin,tech-lead"
            }
            steps { echo "Approved!" }
        }

        stage("Deploy Production") {
            when { branch "main" }
            steps {
                sh "kubectl set image deployment/app-prod-blue app=$DOCKER_REGISTRY/app:\${BUILD_NUMBER}"
                sh "kubectl patch service app-prod -p '{\\"spec\\":{\\"selector\\":{\\"version\\":\\"blue\\"}}}'"
            }
        }

        stage("Health Check") {
            steps {
                script {
                    try {
                        sh "curl -f http://app-prod/health || exit 1"
                    } catch (Exception e) {
                        echo "Health check failed! Rolling back..."
                        sh "kubectl patch service app-prod -p '{\\"spec\\":{\\"selector\\":{\\"version\\":\\"green\\"}}}'"
                        currentBuild.result = "UNSTABLE"
                    }
                }
            }
        }
    }

    post {
        success {
            slackSend(color: "good", message: "Pipeline succeeded: \${env.BUILD_URL}")
        }
        failure {
            slackSend(color: "danger", message: "Pipeline failed: \${env.BUILD_URL}")
        }
        always {
            cleanWs()
        }
    }
}`,description:"Complete Declarative Jenkinsfile with all CI/CD stages including parallel execution, manual approval for production, Blue-Green deployment, health checks with automatic rollback, and Slack notifications."},{title:"Common Use Case",useCase:"Typical implementation",code:`# Common implementation pattern
# Used in everyday scenarios`,description:"Standard use case example."},{title:"Advanced Configuration",useCase:"Complex scenario",code:`# Advanced pattern for complex scenarios
# Includes error handling`,description:"Advanced configuration example."},{title:"Integration Pattern",useCase:"Tool integration",code:`# Integration with other tools
# Shows how components connect`,description:"Integration example with related tools."}],mcqQuestions:[{question:"What is the purpose of the input step in the Jenkinsfile?",options:["Runs tests","Pauses pipeline for manual approval","Deploys automatically","Sends notifications"],answer:1,explanation:"The input step pauses pipeline execution and waits for a user to approve (or reject) before continuing. Used here for production deployment approval."},{question:"How does the health check stage handle failures?",options:["Ignores them","Fails the build immediately","Rolls back to previous version","Retries automatically"],answer:2,explanation:"If the health check curl command fails, the catch block executes a rollback by patching the Kubernetes service selector back to the green (previous) version."},{question:"What is the benefit of Blue-Green deployment in the pipeline?",options:["Faster builds","Zero-downtime deployments with easy rollback","Less code to write","Cheaper infrastructure"],answer:1,explanation:"Blue-Green deployment runs both old (green) and new (blue) versions simultaneously. Traffic switches only after validation. Rollback is instant by switching back to green."},{question:"What does the parallel block in the Build & Test stage achieve?",options:["Runs stages sequentially","Runs unit tests, integration tests, and security scan simultaneously","Deploys to multiple environments","Builds multiple branches"],answer:1,explanation:"The parallel block runs all three stages (Unit Tests, Integration Tests, Security Scan) concurrently, reducing total pipeline execution time."},{question:"What is the purpose of withSonarQubeEnv in the pipeline?",options:["Deploys SonarQube server","Configures SonarQube connection using predefined Jenkins global configuration","Installs SonarQube plugin","Generates SonarQube reports"],answer:1,explanation:"withSonarQubeEnv selects a configured SonarQube server from Jenkins global configuration, setting the necessary environment variables (SONAR_HOST_URL, SONAR_AUTH_TOKEN) for analysis."},{question:"Complete CI/CD Pipeline with Jenkins — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Complete CI/CD Pipeline with Jenkins — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Complete CI/CD Pipeline with Jenkins — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Complete CI/CD Pipeline with Jenkins — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Complete CI/CD Pipeline with Jenkins — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as jenkins_complete_cicd};
