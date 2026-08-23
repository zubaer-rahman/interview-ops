export const git_deployment_automation = {
  "id": "git-deployment-automation",
  "title": "Deployment Automation",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Deployment automation is the practice of automatically releasing software changes to production environments without manual intervention.",
    "Key components: CI/CD pipeline build artifacts artifact registry deployment strategies (blue-green canary rolling) and health checks with auto-rollback.",
    "Tools: GitHub Actions GitLab CI Jenkins ArgoCD (GitOps) Terraform (infrastructure) Docker Kubernetes. Modern deployments target containers/orchestrators.",
    "Best practices: immutable infrastructure (never modify a running server replace it) infrastructure as code zero-downtime deployments and feature flags for gradual rollouts."
  ],
  "laymanDefinition": "Deployment automation is like an autopilot system for an airplane. You set the destination (production) and the autopilot handles takeoff (build) navigation (pipeline gates) landing (deploy) and even go-arounds (rollback) if conditions are unsafe. The pilot monitors but does not manually fly. Manual deployment is like flying by hand every time exhausting and error-prone.",
  "deepDive": [
    {
      "heading": "Deployment Strategies",
      "text": "Blue-Green: two identical environments switch traffic. Zero downtime. Canary: gradual traffic shift 1% 5% 10% 100%. Risk mitigation. Rolling: replace instances one by one. Good for clusters. Recreate: stop old start new. Simple but downtime. Choose based on risk tolerance and infrastructure."
    },
    {
      "heading": "Immutable Infrastructure",
      "text": "Never patch a running server. Instead build a new image and replace. Benefits: consistent environments no configuration drift easy rollback (deploy previous image). Implemented via: Docker images AMIs VM snapshots. Coupled with IaC (Terraform Pulumi CloudFormation) for full reproducibility."
    },
    {
      "heading": "Infrastructure as Code (IaC)",
      "text": "Define infrastructure in version-controlled config files. Tools: Terraform (multi-cloud) Pulumi (programmable) AWS CDK (TypeScript) Ansible (config management). Benefits: reviewable auditable repeatable. IaC + immutable infrastructure = full environment reproducibility."
    },
    {
      "heading": "Rollback Strategies",
      "text": "Automatic rollback on health check failure. Strategies: revert to previous deployment (blue-green) scale up previous canary group (canary) re-run previous CI build (rolling). Database rollbacks: backward-compatible migrations or feature flags. Always test rollback procedure."
    },
    {
      "heading": "GitOps Pattern",
      "text": "Git is the single source of truth for deployment state. Tools: ArgoCD Flux (Kubernetes). Agent in cluster syncs to desired state in Git. Changes via PR to Git repo. Benefits: audit trail review process automatic drift correction. Declarative: desired state vs actual state."
    }
  ],
  "interviewAnswer": "Deployment automation is the final frontier of CI/CD maturity. Start with simple scripts then adopt blue-green or canary deployments. Use immutable infrastructure and IaC for reproducibility. Implement health checks and auto-rollback. GitOps provides the highest level of auditability and control for Kubernetes environments.",
  "interviewQuestions": [
    {
      "question": "What is deployment automation?",
      "answer": "Automatically releasing software changes to production without manual intervention."
    },
    {
      "question": "What is blue-green deployment?",
      "answer": "Two identical environments. Switch traffic from blue (old) to green (new). Instant rollback."
    },
    {
      "question": "What is canary deployment?",
      "answer": "Gradually shift traffic to new version: 1% 5% 10% 100%. Monitor each step."
    },
    {
      "question": "What is immutable infrastructure?",
      "answer": "Never modify running servers. Build new images and replace. Configuration drift eliminated."
    },
    {
      "question": "What is Infrastructure as Code?",
      "answer": "Defining infrastructure (servers networks) in version-controlled config files."
    },
    {
      "question": "What is GitOps?",
      "answer": "Git as single source of truth for deployment state. Agent syncs cluster to desired state in Git."
    },
    {
      "question": "What is automatic rollback?",
      "answer": "Deploy health checks abort deployment and revert if checks fail."
    },
    {
      "question": "What is zero-downtime deployment?",
      "answer": "Deploying without interrupting service. Achieved via blue-green rolling or canary strategies."
    },
    {
      "question": "What is a deployment artifact?",
      "answer": "The versioned deployable unit: Docker image compiled binary or deployment package."
    },
    {
      "question": "What is a health check endpoint?",
      "answer": "A URL (e.g. /health) that returns the application status. Used by load balancers and deploy pipelines."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Deployment Automation</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compile + test</text><line x1=\"110\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"190\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Package</text><text x=\"190\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Docker image</text><line x1=\"240\" y1=\"48\" x2=\"260\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Blue-Green</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Switch traffic</text><rect x=\"140\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"190\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Canary</text><text x=\"190\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Gradual rollout</text><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Health Check</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verify deployment</text><rect x=\"140\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"190\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rollback</text><text x=\"190\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto-revert</text><rect x=\"260\" y=\"35\" width=\"220\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"370\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deployment Automation</text><text x=\"370\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated release pipeline: build to pac</text><text x=\"370\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">kage to deploy. Blue-green canary rollin</text><text x=\"370\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">g. Health checks rollback.</text><text x=\"100\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Deployment Automation: Blue-green canary rolling d</text><text x=\"100\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">eployments. Health checks auto-rollback immutable </text><text x=\"100\" y=\"234\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">infrastructure.</text></svg>",
  "codeExamples": [
    {
      "title": "Blue-Green Deployment Script",
      "useCase": "Switch traffic between environments.",
      "code": "#!/bin/bash\n# Blue-Green deployment\n\n# Variables\nBLUE_URL=\"https://blue.app.com/health\"\nGREEN_URL=\"https://green.app.com/health\"\nACTIVE_COLOR=$(cat /deploy/active-color.txt)\n\n# Deploy to inactive environment\nif [ \"$ACTIVE_COLOR\" = \"blue\" ]; then\n  NEW_COLOR=\"green\"\nelse\n  NEW_COLOR=\"blue\"\nfi\n\necho \"Deploying to $NEW_COLOR...\"\n./deploy-to.sh $NEW_COLOR\n\n# Health check the new environment\nsleep 10\nSTATUS=$(curl -s -o /dev/null -w \"%{http_code}\"\n  \"${NEW_COLOR^^}_URL\")\n\nif [ \"$STATUS\" != \"200\" ]; then\n  echo \"Health check failed rolling back\"\n  exit 1\nfi\n\n# Switch traffic\necho \"Switching traffic to $NEW_COLOR\"\necho \"$NEW_COLOR\" > /deploy/active-color.txt\n./update-load-balancer.sh $NEW_COLOR\n\necho \"Deployment to $NEW_COLOR complete\"",
      "description": "Blue-green deployment script deploys to inactive environment health checks then switches traffic."
    },
    {
      "title": "Canary Deployment with Kubernetes",
      "useCase": "Gradual rollout in K8s.",
      "code": "# Kubernetes canary deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp-canary\nspec:\n  replicas: 1  # 10% of main 10 replicas\n  selector:\n    matchLabels:\n      app: myapp\n      track: canary\n  template:\n    metadata:\n      labels:\n        app: myapp\n        track: canary\n    spec:\n      containers:\n      - name: myapp\n        image: myapp:1.2.3-canary\n        readinessProbe:\n          httpGet:\n            path: /health\n            port: 8080\n\n# Service splits traffic via label selector\n# Canary gets 1 replica = ~10% traffic\n# Monitor errors for 10 minutes\n# If OK scale canary to 10 then scale down main",
      "description": "Kubernetes canary deployment using replicas for traffic splitting between versions."
    },
    {
      "title": "Terraform IaC Example",
      "useCase": "Define infrastructure as code.",
      "code": "# main.tf - AWS infrastructure\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\nresource \"aws_ecs_cluster\" \"main\" {\n  name = \"myapp-cluster\"\n}\n\nresource \"aws_ecs_service\" \"app\" {\n  name            = \"myapp\"\n  cluster         = aws_ecs_cluster.main.id\n  task_definition = aws_ecs_task_definition.app.arn\n  desired_count   = 3\n  launch_type     = \"FARGATE\"\n\n  network_configuration {\n    subnets         = aws_subnet.private[*].id\n    security_groups = [aws_security_group.app.id]\n  }\n\n  deployment_controller {\n    type = \"CODE_DEPLOY\"  # Blue-green\n  }\n}",
      "description": "Terraform defines AWS ECS infrastructure as code for repeatable deployments."
    },
    {
      "title": "ArgoCD GitOps Application",
      "useCase": "GitOps deployment with ArgoCD.",
      "code": "# argocd-application.yaml\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/company/myapp-config.git\n    targetRevision: HEAD\n    path: k8s/production\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: production\n  syncPolicy:\n    automated:\n      prune: true  # Remove resources not in Git\n      selfHeal: true  # Revert manual changes\n    syncOptions:\n      - CreateNamespace=true\n\n# GitOps flow:\n# 1. Update k8s/production/deployment.yaml in Git\n# 2. PR review and merge to main\n# 3. ArgoCD detects drift and syncs cluster\n# 4. Cluster matches desired state in Git",
      "description": "ArgoCD Application resource defines GitOps deployment with auto-sync and self-healing."
    },
    {
      "title": "CI/CD Deployment Pipeline",
      "useCase": "Full deploy pipeline with rollback.",
      "code": "name: Deploy to Production\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    environment: production\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Build and push Docker image\n        run: |\n          docker build -t myapp:${{ github.sha }} .\n          docker push myapp:${{ github.sha }}\n\n      - name: Deploy to staging\n        run: ./deploy.sh staging ${{ github.sha }}\n\n      - name: Staging health check\n        run: |\n          for i in {1..12}; do\n            STATUS=$(curl -s -o /dev/null -w \"%{http_code}\" https://staging.myapp.com/health)\n            if [ \"$STATUS\" = \"200\" ]; then exit 0; fi\n            sleep 5\n          done\n          exit 1\n\n      - name: Promote to production\n        run: ./deploy.sh production ${{ github.sha }}\n\n      - name: Post-deploy health check\n        run: |\n          if ! curl -f https://myapp.com/health; then\n            ./rollback.sh production\n            exit 1\n          fi",
      "description": "Full deployment pipeline with staging verification and production rollout with health check."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is blue-green deployment?",
      "options": [
        "Gradual traffic shift",
        "Two environments switch traffic",
        "Replace instances one by one",
        "Stop and start"
      ],
      "answer": 1,
      "explanation": "Blue-green uses two identical environments and switches traffic between them for zero-downtime."
    },
    {
      "question": "What is canary deployment?",
      "options": [
        "Deploy all at once",
        "Gradual traffic shift to new version",
        "Two environments",
        "Manual deployment"
      ],
      "answer": 1,
      "explanation": "Canary gradually shifts traffic from old to new version monitoring each step."
    },
    {
      "question": "What is immutable infrastructure?",
      "options": [
        "Patch running servers",
        "Replace servers never modify",
        "Manual configuration",
        "Shared hosting"
      ],
      "answer": 1,
      "explanation": "Immutable infrastructure builds new images and replaces servers instead of patching running ones."
    },
    {
      "question": "What is Infrastructure as Code?",
      "options": [
        "Manual server setup",
        "Infrastructure defined in version-controlled files",
        "Graphical UI tools",
        "Shell scripts only"
      ],
      "answer": 1,
      "explanation": "IaC defines infrastructure in code enabling review repeatability and audit trails."
    },
    {
      "question": "What is GitOps?",
      "options": [
        "Git as deployment source of truth",
        "Git as backup tool",
        "Git for code only",
        "Git for documentation"
      ],
      "answer": 0,
      "explanation": "GitOps uses Git as the single source of truth for deployment state with automatic cluster sync."
    },
    {
      "question": "What triggers automatic rollback?",
      "options": [
        "Deployment complete",
        "Health check failure",
        "New PR opened",
        "Code review approved"
      ],
      "answer": 1,
      "explanation": "Automatic rollback triggers when health checks fail after deployment."
    },
    {
      "question": "Deployment Automation — What reduces errors most?",
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
      "question": "Deployment Automation — What improves speed?",
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
      "question": "Deployment Automation — What is key for monitoring?",
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
      "question": "Deployment Automation — What ensures quality?",
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
