export const docker_complete_cicd = {
  "id": "docker-complete-cicd",
  "title": "Complete CI/CD Pipeline with Docker",
  "difficulty": "advanced",
  "estimatedMinutes": 45,
  "tldr": [
    "A complete Docker CI/CD pipeline covers the full lifecycle: code commit, image build, security scan, push to registry, deploy, monitor, and rollback.",
    "The pipeline uses GitHub Actions or Jenkins to build Docker images with layer caching, scan for vulnerabilities, push to registry, deploy containers, and verify health.",
    "Key components: Dockerfile with multi-stage builds, Docker Compose for local dev, CI/CD for automated builds, container registry, deployment automation, health checks, monitoring.",
    "Docker layer caching in CI/CD reduces build times by 50-80%. Each build produces a tagged image that is traceable to a Git commit for audit and rollback.",
    "The entire pipeline is defined as code: Dockerfile, docker-compose.yml, CI/CD config, and deployment scripts are version-controlled together."
  ],
  "laymanDefinition": "A complete Docker CI/CD pipeline is like an automated factory for building and shipping container images. When a developer pushes code, the pipeline automatically: builds the Docker image with layer caching, scans for vulnerabilities with Docker Scout, pushes the image to a registry, deploys to staging, runs smoke tests, and after approval, deploys to production with zero-downtime rolling updates.",
  "deepDive": [
    {
      "heading": "Pipeline Stages",
      "text": "The pipeline has these stages: Checkout (code from Git), Build (docker build with cache), Security Scan (Docker Scout or Trivy), Push to Registry (Docker Hub, ECR, GCR), Deploy Staging (docker compose up or kubectl), Smoke Tests (verify endpoints), Approve Production (manual gate), Deploy Production (rolling update), Health Check (verify deployment), Notify (Slack/email)."
    },
    {
      "heading": "Build Optimization",
      "text": "Layer caching is critical in CI/CD: use docker build --cache-from to reuse layers from previously built images. Order Dockerfile for maximum cache: base image, system deps, app deps, source code. Use GitHub Actions cache action or Jenkins Docker cache plugin. Multi-stage builds keep final images small. Build only what changed (monorepo: build only affected services)."
    },
    {
      "heading": "Deployment Strategies",
      "text": "Rolling update: gradually replace old containers with new ones (zero-downtime). Blue-Green: run old and new simultaneously, switch traffic. Canary: route small % of traffic to new version, monitor, then full rollout. Docker Compose: docker compose up -d with new image tag. Kubernetes: kubectl set image with rolling update strategy."
    },
    {
      "heading": "Monitoring & Rollback",
      "text": "Container health checks (HEALTHCHECK) verify app readiness. Log monitoring: docker logs or centralized logging. Metric monitoring: Prometheus/Grafana for container metrics. Rollback: docker compose up -d with previous image tag or kubectl rollout undo. Automated rollback on health check failure."
    },
    {
      "heading": "Complete CI/CD Workflow",
      "text": "The CI/CD workflow file defines the entire pipeline. Each step is a discrete action. Secrets (registry credentials, cloud keys) are securely injected. Image tags include commit SHA and build number for full traceability. Notifications alert the team on pipeline status. All code is in version control for auditability."
    }
  ],
  "interviewAnswer": "A complete Docker CI/CD pipeline covers the full lifecycle: code commit, image build, security scan, push to registry, deploy, monitor, and rollback.",
  "interviewQuestions": [
    {
      "question": "What are the main stages of a Docker CI/CD pipeline?",
      "answer": "Checkout, Build (with cache), Security Scan, Push to Registry, Deploy Staging, Smoke Tests, Approve Prod, Deploy Production, Health Check, Notify."
    },
    {
      "question": "How is layer caching used in CI/CD?",
      "answer": "docker build --cache-from <previous-image> reuses cached layers. Dockerfile order optimized for cache. CI cache actions persist layers between builds."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What are the key features to understand?",
      "answer": "Key features include automation capabilities, integration options, and support for modern practices."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Complete CI/CD Pipeline with Docker</text><text x=\"10\" y=\"15\" font-size=\"22\" fill=\"#6f42c1\" text-anchor=\"start\">160</text><line x1=\"170\" y1=\"26\" x2=\"185\" y2=\"26\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"5\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"265\" y=\"21\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Docker Build</text><text x=\"265\" y=\"10\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Layer caching, multi-stag</text><text x=\"265\" y=\"21\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">e</text><line x1=\"335\" y1=\"16\" x2=\"350\" y2=\"16\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"30\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"265\" y=\"46\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security Scan</text><text x=\"265\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Docker Scout/Trivy</text><line x1=\"335\" y1=\"41\" x2=\"350\" y2=\"41\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"55\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"265\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Push Registry</text><text x=\"265\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Docker Hub, ECR, GCR</text><line x1=\"335\" y1=\"66\" x2=\"350\" y2=\"66\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"80\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"265\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy Staging</text><text x=\"265\" y=\"96\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">docker compose up</text><line x1=\"335\" y1=\"91\" x2=\"350\" y2=\"91\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"105\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#20c997\" stroke=\"#20c997\" stroke-width=\"1.5\"/><text x=\"265\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Smoke Tests</text><text x=\"265\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Health check endpoints</text><line x1=\"335\" y1=\"116\" x2=\"350\" y2=\"116\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"130\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#fd7e14\" stroke=\"#fd7e14\" stroke-width=\"1.5\"/><text x=\"265\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Approve Prod</text><text x=\"265\" y=\"146\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Manual approval gate</text><line x1=\"335\" y1=\"141\" x2=\"350\" y2=\"141\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"195\" y=\"155\" width=\"140\" height=\"22\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"265\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy Production</text><text x=\"265\" y=\"160\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rolling update, zero-down</text><text x=\"265\" y=\"171\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">time</text><text x=\"100\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Complete Docker CI/CD Pipeline: Code -> Build -> S</text><text x=\"100\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">can -> Push -> Stage -> Test -> Approve -> Prod -></text><text x=\"100\" y=\"219\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> Notify. Every step automated with security and go</text><text x=\"100\" y=\"231\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">vernance.</text></svg>",
  "codeExamples": [
    {
      "title": "Complete CI/CD Workflow",
      "useCase": "Full GitHub Actions workflow for Docker CI/CD.",
      "code": "name: Docker CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n\nenv:\n  REGISTRY: ghcr.io\n  IMAGE_NAME: myapp\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v3\n\n      - name: Cache Docker layers\n        uses: actions/cache@v4\n        with:\n          path: /tmp/.buildx-cache\n          key: ${{ runner.os }}-buildx-${{ hashFiles(\"**/package-lock.json\") }}\n          restore-keys: ${{ runner.os }}-buildx-\n\n      - name: Login to Registry\n        uses: docker/login-action@v3\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Build and push\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }},${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest\n          cache-from: type=local,src=/tmp/.buildx-cache\n          cache-to: type=local,dest=/tmp/.buildx-cache\n\n      - name: Scan image\n        run: docker scout quickview ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\n\n      - name: Deploy to staging\n        run: |\n          docker compose -f docker-compose.staging.yml up -d\n          docker compose -f docker-compose.staging.yml exec -T app ./health-check.sh\n\n      - name: Deploy to production\n        if: github.ref == \"refs/heads/main\"\n        run: |\n          docker service update --image ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} myapp_web\n          sleep 10\n          curl -f http://app.example.com/health || (docker service rollback myapp_web && exit 1)\n\n      - name: Notify\n        if: always()\n        run: echo \"Pipeline completed with status ${{ job.status }}\"",
      "description": "Complete GitHub Actions workflow for Docker CI/CD with layer caching, security scanning, staging deploy, production rolling update with health check and auto-rollback."
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
      "question": "What does docker build --cache-from do?",
      "options": [
        "Skips Dockerfile entirely",
        "Uses a previously built image as cache source for faster builds",
        "Downloads from registry only",
        "Disables all caching"
      ],
      "answer": 1,
      "explanation": "--cache-from tells Docker to use a previously built image as a cache source, making subsequent builds faster by reusing unchanged layers."
    },
    {
      "question": "What is the purpose of the health check step after deployment?",
      "options": [
        "Deploy faster",
        "Verify the new version is working correctly, triggering rollback on failure",
        "Build the image",
        "Scan for vulnerabilities"
      ],
      "answer": 1,
      "explanation": "The health check verifies the deployment is working. If it fails, the pipeline rolls back to the previous version automatically, ensuring zero-downtime deployments."
    },
    {
      "question": "What deployment strategy gradually replaces old containers with new ones?",
      "options": [
        "Blue-Green",
        "Canary",
        "Rolling update",
        "Recreate"
      ],
      "answer": 2,
      "explanation": "Rolling update gradually replaces old containers with new ones, maintaining service availability throughout the process."
    },
    {
      "question": "What is the benefit of Docker layer caching in CI/CD?",
      "options": [
        "Slower builds",
        "Reduces build time by reusing unchanged layers",
        "Larger images",
        "More disk usage"
      ],
      "answer": 1,
      "explanation": "Layer caching reuses unchanged image layers from previous builds, reducing build time by 50-80% and saving bandwidth."
    },
    {
      "question": "What does the docker scout quickview command do?",
      "options": [
        "Builds the image",
        "Scans the image for vulnerabilities",
        "Pushes to registry",
        "Deploys the image"
      ],
      "answer": 1,
      "explanation": "Docker Scout quickview scans the image for known vulnerabilities (CVEs) and provides a summary of security issues."
    },
    {
      "question": "Complete CI/CD Pipeline with Docker — What helps team collaboration?",
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
      "question": "Complete CI/CD Pipeline with Docker — What reduces errors most?",
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
      "question": "Complete CI/CD Pipeline with Docker — What improves speed?",
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
      "question": "Complete CI/CD Pipeline with Docker — What is key for monitoring?",
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
      "question": "Complete CI/CD Pipeline with Docker — What ensures quality?",
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
