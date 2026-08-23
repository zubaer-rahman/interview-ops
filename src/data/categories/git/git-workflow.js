export const git_workflow = {
  "id": "git-workflow",
  "title": "Git Workflows",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "A Git workflow is a convention for how teams use branches, commits, and merges to collaborate on code.",
    "Common workflows: Git Flow (feature/release/hotfix branches), GitHub Flow (feature branch + PR to main), GitLab Flow (environment branches).",
    "Choose a workflow based on team size, release frequency, and deployment strategy. Simple workflows suit small teams; complex ones suit regulated releases.",
    "Key practices: feature branches for isolated work, pull requests for code review, protected branches for main/stable, and semantic commit messages."
  ],
  "laymanDefinition": "Git workflows are like kitchen organization systems. Git Flow is a professional kitchen with stations for prep (feature), plating (release), and emergency (hotfix). GitHub Flow is a home kitchen: make your dish (branch), taste it (review), then serve (merge). GitLab Flow is meal-prep: stages for dev, staging, production.",
  "deepDive": [
    {
      "heading": "Git Flow",
      "text": "Classic workflow with main, develop, feature, release, and hotfix branches. Feature branches branch from develop. Release branches prepare a release. Hotfix branches fix production from main. Complex but thorough suitable for scheduled releases and maintenance versions."
    },
    {
      "heading": "GitHub Flow",
      "text": "Simpler: main branch is always deployable. Create feature branches from main. Open PR for review and testing. Merge to main and deploy. No develop branch. No release branches. Suitable for continuous deployment and small teams."
    },
    {
      "heading": "GitLab Flow",
      "text": "Environment branches: main/staging/production. Feature branches merge to main. Promote commits from main to staging to production via merge or cherry-pick. Supports environment-based promotion. Good for projects with multiple environments and compliance needs."
    },
    {
      "heading": "Trunk-Based Development",
      "text": "Short-lived feature branches (hours/days). Frequent merges to main (trunk). Feature flags for incomplete work. Less merge conflicts faster CI continuous integration. Requires disciplined team and good test coverage."
    },
    {
      "heading": "Choosing a Workflow",
      "text": "Git Flow: scheduled releases multiple versions large teams. GitHub Flow: continuous deployment startup/small team SaaS. GitLab Flow: multiple environments compliance gates. Trunk-Based: CI/CD DevOps maturity fast iterations."
    }
  ],
  "interviewAnswer": "Choose the simplest workflow that meets your needs. Start with GitHub Flow or trunk-based development. Only adopt Git Flow if you need strict release management. The workflow is a tool not a rule adapt it to your team cadence and deployment strategy.",
  "interviewQuestions": [
    {
      "question": "What is a Git workflow?",
      "answer": "A convention for how teams use branches commits and merges to collaborate on code."
    },
    {
      "question": "What is Git Flow?",
      "answer": "A workflow with main develop feature release and hotfix branches. Complex suitable for scheduled releases."
    },
    {
      "question": "What is GitHub Flow?",
      "answer": "A simpler workflow: feature branches PRs to main deploy after merge. Suitable for continuous deployment."
    },
    {
      "question": "What is trunk-based development?",
      "answer": "Short-lived feature branches frequent merges to main feature flags. Fast CI fewer merge conflicts."
    },
    {
      "question": "Which workflow is best for SaaS continuous deployment?",
      "answer": "GitHub Flow or trunk-based development simple fast continuous."
    },
    {
      "question": "What is a hotfix branch?",
      "answer": "A branch from main to fix a production issue quickly. Merged back to main and develop."
    },
    {
      "question": "What is a release branch?",
      "answer": "A branch from develop to prepare a release. Only bug fixes and release tasks. Merged to main and develop."
    },
    {
      "question": "What is the main branch?",
      "answer": "The production-ready branch. Always reflects the current production state. Typically protected."
    },
    {
      "question": "What is a feature branch?",
      "answer": "A branch for developing a specific feature. Isolated from other changes until merged via PR."
    },
    {
      "question": "Should you use Git Flow or GitHub Flow?",
      "answer": "Git Flow for scheduled releases and complex projects. GitHub Flow for simple CD pipelines."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Workflows</text><rect x=\"10\" y=\"35\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"55\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Flow</text><text x=\"55\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Complex</text><rect x=\"10\" y=\"65\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"55\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitHub Flow</text><text x=\"55\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Simple CD</text><rect x=\"10\" y=\"95\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"55\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GitLab Flow</text><text x=\"55\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Environments</text><rect x=\"10\" y=\"125\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"55\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Trunk-Based</text><text x=\"55\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Feature flags</text><rect x=\"10\" y=\"155\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"55\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Main</text><text x=\"55\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deployable</text><line x1=\"100\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"78\" x2=\"130\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"108\" x2=\"130\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"138\" x2=\"130\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"168\" x2=\"130\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"240\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"260\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Workflows</text><text x=\"260\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Conventions for branching merging and relea</text><text x=\"260\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sing code collaboratively.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Workflows: Git Flow GitHub Flow GitLab Flow Tr</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">unk-Based. Choose by team size and release cadence</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "Git Flow Branch Setup",
      "useCase": "Initialize Git Flow branches.",
      "code": "# Initialize repository\ngit init\ngit checkout -b develop  # develop branch from main\n\n# Feature branch\ngit checkout -b feature/login develop\n# work on feature...\ngit checkout develop\ngit merge --no-ff feature/login\n\n# Release branch\ngit checkout -b release/v1.0 develop\n# bump version fix bugs...\ngit checkout main\ngit merge --no-ff release/v1.0\ngit tag -a v1.0 -m \"Release v1.0\"\ngit checkout develop\ngit merge --no-ff release/v1.0\n\n# Hotfix branch\ngit checkout -b hotfix/crash-fix main\n# fix bug...\ngit checkout main\ngit merge --no-ff hotfix/crash-fix\ngit tag -a v1.0.1 -m \"Hotfix v1.0.1\"\ngit checkout develop\ngit merge --no-ff hotfix/crash-fix",
      "description": "Git Flow branch management with feature release and hotfix branches."
    },
    {
      "title": "GitHub Flow (PR Based)",
      "useCase": "Simple continuous deployment workflow.",
      "code": "# On main branch\ngit checkout main\ngit pull origin main\n\n# Create feature branch\ngit checkout -b feature/add-payment\n\n# Work and commit\ngit add .\ngit commit -m \"Add payment processing\"\ngit push -u origin feature/add-payment\n\n# Open Pull Request on GitHub\n# Team reviews CI runs tests\n# Merge via PR (squash or merge commit)\n\n# After merge delete branch\ngit branch -d feature/add-payment\ngit push origin --delete feature/add-payment",
      "description": "GitHub Flow: feature branch PR review merge to main deploy."
    },
    {
      "title": "Trunk-Based with Feature Flags",
      "useCase": "Continuous integration pattern.",
      "code": "# Short-lived branch (hours)\ngit checkout -b feat-dark-mode\n\n# Work behind feature flag\n// Code: if (featureFlags.isEnabled('dark_mode')) {\n//   applyDarkMode();\n// }\n\ngit add .\ngit commit -m \"Add dark mode behind feature flag\"\ngit checkout main\ngit pull origin main\ngit merge feat-dark-mode\ngit push origin main\n\n# Enable feature in production gradually\n# featureFlags.enable(\"dark_mode\" user_percentage=10)\n\n# Remove branch remove flag later\ngit branch -d feat-dark-mode",
      "description": "Trunk-based development with feature flags for incomplete or experimental features."
    },
    {
      "title": "Merge Strategy: Squash vs Rebase vs Merge",
      "useCase": "Choose based on team practice.",
      "code": "# Merge commit (preserves history)\ngit checkout main\ngit merge --no-ff feature-branch\n# Creates a merge commit with full branch history\n\n# Squash (clean linear history)\ngit merge --squash feature-branch\ngit commit -m \"Add feature XYZ\"\n# Single commit with all changes combined\n\n# Rebase (linear history without merge commits)\ngit checkout feature-branch\ngit rebase main\ngit checkout main\ngit merge feature-branch\n# Fast-forward clean linear history",
      "description": "Squash keeps history clean merge preserves context rebase creates linear history."
    },
    {
      "title": "Git Workflow CLI Automation",
      "useCase": "Scripted workflow enforcement.",
      "code": "#!/bin/bash\n# Enforce branch naming convention\nBRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)\n\nif [[ ! \"$BRANCH_NAME\" =~ ^(feature|bugfix|hotfix|release)/ ]]; then\n  echo \"Error: Branch must start with feature/ bugfix/ hotfix/ or release/\"\n  exit 1\nfi\n\n# Enforce commit message format\nCOMMIT_MSG_FILE=$1\nCOMMIT_MSG=$(cat \"$COMMIT_MSG_FILE\")\n\nif [[ ! \"$COMMIT_MSG\" =~ ^(feat|fix|docs|chore|refactor|test|ci): ]]; then\n  echo \"Error: Commit must start with feat: fix: docs: etc.\"\n  exit 1\nfi",
      "description": "Automation scripts enforce branch naming and commit message conventions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a Git workflow?",
      "options": [
        "Version control software",
        "Convention for branching and merging",
        "A type of Git command",
        "File storage system"
      ],
      "answer": 1,
      "explanation": "A Git workflow defines how teams use branches commits and merges to collaborate."
    },
    {
      "question": "Which workflow has develop release and hotfix branches?",
      "options": [
        "GitHub Flow",
        "Git Flow",
        "Trunk-Based",
        "GitLab Flow"
      ],
      "answer": 1,
      "explanation": "Git Flow uses main develop feature release and hotfix branches."
    },
    {
      "question": "What is the simplest workflow for CD?",
      "options": [
        "Git Flow",
        "GitHub Flow",
        "GitLab Flow",
        "None"
      ],
      "answer": 1,
      "explanation": "GitHub Flow (feature branch PR to main to deploy) is simplest for continuous deployment."
    },
    {
      "question": "What enables trunk-based development for incomplete features?",
      "options": [
        "Long-lived branches",
        "Feature flags",
        "Separate repositories",
        "Manual deployments"
      ],
      "answer": 1,
      "explanation": "Feature flags allow merging incomplete features to main without affecting users."
    },
    {
      "question": "What is a hotfix branch?",
      "options": [
        "Branch for new features",
        "Branch from main for production fixes",
        "Branch for experiments",
        "Branch for documentation"
      ],
      "answer": 1,
      "explanation": "Hotfix branches branch from main to fix production issues quickly."
    },
    {
      "question": "What does --no-ff do in git merge?",
      "options": [
        "Fast-forward only",
        "Forces merge commit even if fast-forward possible",
        "No file changes",
        "Skip commit hooks"
      ],
      "answer": 1,
      "explanation": "--no-ff creates a merge commit to preserve branch history."
    },
    {
      "question": "Git Workflows — What reduces errors most?",
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
      "question": "Git Workflows — What improves speed?",
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
      "question": "Git Workflows — What is key for monitoring?",
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
      "question": "Git Workflows — What ensures quality?",
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
