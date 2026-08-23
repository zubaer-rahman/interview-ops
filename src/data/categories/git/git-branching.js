export const git_branching = {
  "id": "git-branching",
  "title": "Branching Strategies",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Branching strategy defines how teams create name use and delete branches to organize parallel development work.",
    "Key concepts: branch naming conventions (feature/ bugfix/ hotfix/) branch lifecycle (create to work to merge to delete) protected branches.",
    "Good branching reduces merge conflicts enables parallel work supports CI/CD and provides clear audit trail of changes.",
    "Strategies: long-lived branches for environments (develop staging main) and short-lived branches for features and fixes."
  ],
  "laymanDefinition": "Branching is like a tree of ideas. The trunk (main) is the stable reality. Branches are what if experiments what if we add a login screen what if we fix this bug what if we redesign the UI. Each branch grows independently then gets grafted back to the trunk when ready.",
  "deepDive": [
    {
      "heading": "Branch Naming Conventions",
      "text": "Standard prefixes: feature/add-login bugfix/fix-header hotfix/security-patch release/v1.2 chore/update-deps. Separators: slash (/) for category hyphen (-) for description. Include ticket number: feature/JIRA-123-checkout. Consistent naming enables automation (CI triggers branch cleanup)."
    },
    {
      "heading": "Protected Branches",
      "text": "Branches that cannot be directly pushed to. Require PR reviews and passing CI. Typically: main develop staging production. Settings: require pull request require approvals (1-2) dismiss stale reviews require status checks require up-to-date branches include administrators."
    },
    {
      "heading": "Short-Lived vs Long-Lived Branches",
      "text": "Short-lived: feature branches (hours-days). Merged quickly fewer conflicts faster integration. Long-lived: main develop staging (weeks-months). Represent environments or release trains. Best practice: minimize long-lived branches beyond what environments require."
    },
    {
      "heading": "Branch Deletion Strategy",
      "text": "Delete feature branches after merge (both local and remote). Git: git branch -d feature-xyz && git push origin --delete feature-xyz. Automate with branch cleanup on PR merge. Exceptions: release branches preserved for LTS support hotfix branches for audit."
    },
    {
      "heading": "Git Bisect Friendly History",
      "text": "Good branching creates a clean commit graph that git bisect can navigate. Merge commits mark integration points. Linear history (rebase/squash) is easier to bisect. Bad: deeply nested merge bubbles. Good: structured merges at clear boundaries."
    }
  ],
  "interviewAnswer": "Consistent branching is the foundation of collaborative Git. Use clear naming conventions. Protect main and deployment branches. Delete branches after merge. Prefer short-lived branches. The branching strategy should serve the team delivery cadence not complicate it.",
  "interviewQuestions": [
    {
      "question": "What is a branching strategy?",
      "answer": "A convention for naming creating using and deleting branches to organize parallel development."
    },
    {
      "question": "What are protected branches?",
      "answer": "Branches with restrictions: require PR reviews and CI status checks before merging."
    },
    {
      "question": "What is a good branch naming convention?",
      "answer": "category/description: feature/login bugfix/fix-header hotfix/security-issue."
    },
    {
      "question": "Should you delete branches after merge?",
      "answer": "Yes. Delete both local (git branch -d) and remote (git push origin --delete)."
    },
    {
      "question": "What is the difference between short-lived and long-lived branches?",
      "answer": "Short-lived (hours-days): feature branches. Long-lived (weeks-months): main develop staging."
    },
    {
      "question": "What is a release branch?",
      "answer": "A branch for stabilizing a release. Typically branched from develop merged to main and develop."
    },
    {
      "question": "How do you prevent direct pushes to main?",
      "answer": "Configure branch protection rules in GitHub/GitLab/Bitbucket. Require PRs and approvals."
    },
    {
      "question": "What is a feature branch?",
      "answer": "A branch for developing a specific feature branched from develop or main."
    },
    {
      "question": "How do you handle multiple concurrent features?",
      "answer": "Each feature in its own branch. Merge conflicts resolved during PR/integration."
    },
    {
      "question": "What is the purpose of branch naming conventions?",
      "answer": "Organization automation (CI/CD triggers) team communication and audit trails."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Branching Strategies</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branch Naming</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">feature/login</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Protected Branch</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Requires PR + CI</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Short-Lived</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hours to days</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Long-Lived</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Environments</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Delete After</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Clean up merged</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branching Strategies</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Naming protection lifecycle and cleanup c</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">onventions for collaboration.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Branching Strategies: Naming conventions branch pr</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">otection lifecycle management and cleanup practice</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s.</text></svg>",
  "codeExamples": [
    {
      "title": "Branch Protection (GitHub CLI)",
      "useCase": "Configure protected branch.",
      "code": "# Protect main branch via GitHub API/CLI\ngh api repos/:owner/:repo/branches/main/protection \\\n  --method PUT \\\n  -f required_status_checks.strict=true \\\n  -f required_status_checks.contexts[]=\"continuous-integration\" \\\n  -f enforce_admins=true \\\n  -f required_pull_request_reviews.required_approving_review_count=2 \\\n  -f restrictions.users[]=\"admin-team\"\n\n# Or use GitHub UI: Settings > Branches > Add rule\n# Pattern: main develop release/*",
      "description": "Branch protection enforces PRs reviews and CI checks before merging."
    },
    {
      "title": "Branch Cleanup Script",
      "useCase": "Delete merged branches.",
      "code": "#!/bin/bash\n# Delete local branches merged into main\ngit branch --merged main | grep -v \"*|main|develop\" | xargs -n 1 git branch -d\n\n# List remote merged branches\ngit branch -r --merged origin/main | grep -v \"origin/main|origin/develop\"\n\n# Delete remote merged branches\ngit branch -r --merged origin/main | grep -v \"origin/main|origin/develop\" |\n  sed 's/origin///' | xargs -I {} git push origin --delete {}\n\n# Automate via CI on PR merge\necho \"::warning::Feature branch cleanup recommended\"",
      "description": "Automated cleanup of merged branches keeps the repository tidy."
    },
    {
      "title": "Branch from Issue (GitHub CLI)",
      "useCase": "Create branch linked to issue.",
      "code": "# Create branch from issue\ngh issue view 42 --json number title labels\n\n# Create and switch to feature branch\nISSUE_NUMBER=42\nISSUE_TITLE=$(gh issue view $ISSUE_NUMBER --json title -q .title)\nBRANCH_NAME=\"feature/$(echo $ISSUE_TITLE |\n  sed 's/[^a-zA-Z0-9]/-/g' |\n  tr '[:upper:]' '[:lower:]' | cut -c1-50)\"\n\ngit checkout -b \"$BRANCH_NAME\" main\ngit push -u origin \"$BRANCH_NAME\"\n\n# Create PR linked to issue\ngh pr create --fill --issue $ISSUE_NUMBER",
      "description": "Automate branch creation from issues with standardized naming."
    },
    {
      "title": "Branching Diagram Generation",
      "useCase": "Visualize branch structure.",
      "code": "# Show branch graph\ngit log --graph --oneline --all --decorate\n\n# Pretty graph with aliases\ngit config --global alias.tree \"log --graph --oneline --all --decorate --simplify-by-decoration\"\ngit tree\n\n# Show branches with last commit\ngit branch -v\n\n# Show merged/unmerged branches\ngit branch --merged main\ngit branch --no-merged main\n\n# Visualize with tools:\n# gitk --all\n# git log --graph --format=\"%C(auto)%h %d %s\"",
      "description": "Visualize branch structure for audit and understanding."
    },
    {
      "title": "Branch Lifecycle Hooks",
      "useCase": "Automate branch events.",
      "code": "#!/bin/bash\n# .git/hooks/post-checkout (on branch switch)\nPREV_HEAD=$1\nNEW_HEAD=$2\nIS_BRANCH_SWITCH=$3\n\nif [ \"$IS_BRANCH_SWITCH\" = \"1\" ]; then\n  BRANCH=$(git rev-parse --abbrev-ref HEAD)\n  echo \"Switched to branch: $BRANCH\"\n  \n  # Run post-checkout tasks\n  if [ -f \"Makefile\" ]; then\n    make install-deps 2>/dev/null || true\n  fi\nfi",
      "description": "Git hooks automate tasks on branch checkout helping enforce conventions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a good branch prefix for a new feature?",
      "options": [
        "release/",
        "feature/",
        "hotfix/",
        "bugfix/"
      ],
      "answer": 1,
      "explanation": "feature/ is the standard prefix for feature branches."
    },
    {
      "question": "What does a protected branch require?",
      "options": [
        "Direct push",
        "Pull request and approvals",
        "Email notification",
        "Manual backup"
      ],
      "answer": 1,
      "explanation": "Protected branches require PRs reviews and CI checks no direct pushes."
    },
    {
      "question": "When should you delete a branch?",
      "options": [
        "Before creating it",
        "After merging to main/develop",
        "After pushing once",
        "Never"
      ],
      "answer": 1,
      "explanation": "Delete branches after they are merged to keep the repository clean."
    },
    {
      "question": "What is a short-lived branch?",
      "options": [
        "A branch that lasts months",
        "A branch that lasts hours to days",
        "A branch never merged",
        "A branch for documentation"
      ],
      "answer": 1,
      "explanation": "Short-lived branches (feature branches) are merged within hours to days."
    },
    {
      "question": "How do you prevent pushes to main?",
      "options": [
        "Branch protection rules",
        "Delete main branch",
        "Make repo read-only",
        "Use .gitignore"
      ],
      "answer": 0,
      "explanation": "Branch protection rules enforce PR-based workflow on main/develop branches."
    },
    {
      "question": "What does git branch -d do?",
      "options": [
        "Creates a branch",
        "Deletes a merged branch",
        "Renames a branch",
        "Lists branches"
      ],
      "answer": 1,
      "explanation": "git branch -d deletes a branch that has been merged (safe delete)."
    },
    {
      "question": "Branching Strategies — What reduces errors most?",
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
      "question": "Branching Strategies — What improves speed?",
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
      "question": "Branching Strategies — What is key for monitoring?",
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
      "question": "Branching Strategies — What ensures quality?",
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
