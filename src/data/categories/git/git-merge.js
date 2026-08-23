export const git_merge = {
  "id": "git-merge",
  "title": "Git Merge",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Git merge integrates changes from one branch into another combining the development histories of both branches.",
    "Three-way merge: Git finds the common ancestor of two branches and applies changes from both sides. Conflicts arise when the same lines changed differently.",
    "Fast-forward merge: when the target branch has not diverged Git simply moves the pointer forward (no merge commit). Use --no-ff to force a merge commit.",
    "Conflict resolution: manually edit conflicted files mark as resolved with git add and complete the merge with git commit or git merge --continue."
  ],
  "laymanDefinition": "Git merge is like merging two rivers into one. If both rivers flowed from the same source and one has moved ahead (fast-forward) you just follow the advanced river. If they diverged around an island (branching) you create a new combined channel (merge commit). Sometimes the waters clash that is a merge conflict.",
  "deepDive": [
    {
      "heading": "Three-Way Merge Algorithm",
      "text": "Git identifies the merge base (common ancestor commit). It creates two diff hunks: base to branch A and base to branch B. Then applies both diffs to create the result. If both diffs modify the same lines differently you get a conflict. Git uses the longest common subsequence algorithm."
    },
    {
      "heading": "Fast-Forward Merge",
      "text": "When target branch (main) has not moved since the source branch (feature) was created Git can simply advance main pointer to feature tip. No merge commit. Use git merge --no-ff to always create a merge commit for history preservation."
    },
    {
      "heading": "Recursive Merge Strategy",
      "text": "Default for non-fast-forward merges. When there are multiple merge bases (common ancestors) Git merges them first to create a virtual ancestor then performs the three-way merge. Handles criss-cross merge scenarios with multiple possible ancestors."
    },
    {
      "heading": "Conflict Resolution Strategies",
      "text": "Accept ours: keep current branch version (--ours). Accept theirs: keep incoming branch version (--theirs). Manual: edit file remove conflict markers (<<<<<<< ======= >>>>>>>). Merge tools: vimdiff VS Code meld Beyond Compare. After resolving: git add file && git merge --continue."
    },
    {
      "heading": "Merge Drivers",
      "text": "Custom merge drivers for specific file types. .gitattributes: *.pdf merge=binary. Configured in .git/config. Useful for: lock files compiled outputs auto-generated code. Git also supports: union merge (combine both changes) subtree merge (merge subproject into subdirectory)."
    }
  ],
  "interviewAnswer": "Merging is the core of Git collaboration. Understand the three-way merge algorithm. Use --no-ff to preserve feature branch history. Resolve conflicts carefully test after conflict resolution. Configure merge drivers for binary/specialized files. Practice conflict resolution it becomes easier with experience.",
  "interviewQuestions": [
    {
      "question": "What is git merge?",
      "answer": "Integrates changes from one branch into another combining development histories."
    },
    {
      "question": "What is a three-way merge?",
      "answer": "Merge using common ancestor + two branch tips. Git finds base creates diffs from base to each branch applies both."
    },
    {
      "question": "What is a fast-forward merge?",
      "answer": "When target branch has not diverged Git simply advances the pointer. No merge commit."
    },
    {
      "question": "What is a merge conflict?",
      "answer": "When two branches modified the same lines differently. Git cannot automatically resolve. Manual intervention needed."
    },
    {
      "question": "How do you resolve a merge conflict?",
      "answer": "Edit conflicted files remove >>> <<< markers git add file git merge --continue."
    },
    {
      "question": "What does --no-ff do?",
      "answer": "Forces a merge commit even when fast-forward is possible. Preserves branch history."
    },
    {
      "question": "What is the merge base?",
      "answer": "The common ancestor commit of two branches. Git computes diffs from this base."
    },
    {
      "question": "How do you abort a merge?",
      "answer": "git merge --abort. Returns to pre-merge state."
    },
    {
      "question": "What is a recursive merge?",
      "answer": "Default strategy for non-FF merges. Handles multiple merge bases by creating a virtual ancestor."
    },
    {
      "question": "What is git mergetool?",
      "answer": "Launches a visual merge tool (vimdiff VS Code meld) to resolve conflicts interactively."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Merge</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branch A</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Feature work</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branch B</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Main branch</text><line x1=\"50\" y1=\"90\" x2=\"50\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"80\" y1=\"90\" x2=\"80\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"120\" width=\"75\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"47.5\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Base</text><text x=\"47.5\" y=\"128\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Common ancest</text><text x=\"47.5\" y=\"139\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">or</text><rect x=\"95\" y=\"120\" width=\"75\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"132.5\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Merge</text><text x=\"132.5\" y=\"128\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Three-way com</text><text x=\"132.5\" y=\"139\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">bine</text><rect x=\"10\" y=\"155\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"90\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Result</text><text x=\"90\" y=\"163\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Combined history + merge comm</text><text x=\"90\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">it</text><line x1=\"170\" y1=\"48\" x2=\"200\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"170\" y1=\"78\" x2=\"200\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"50\" y1=\"145\" x2=\"50\" y2=\"155\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"80\" y1=\"145\" x2=\"80\" y2=\"155\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"210\" y=\"35\" width=\"170\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"295\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Merge</text><text x=\"295\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Three-way merge: base + branch</text><text x=\"295\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> A + branch B to merged result</text><text x=\"295\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">. Conflicts need manual resolu</text><text x=\"295\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tion.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Merge: Integrate branches via three-way merge.</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> Fast-forward merge commits and conflict resolutio</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">n.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Git Merge Commands",
      "useCase": "Common merge operations.",
      "code": "# Merge feature into main\ngit checkout main\ngit pull origin main\ngit merge feature/login\n\n# Force merge commit (no fast-forward)\ngit merge --no-ff feature/login\n\n# Merge with custom message\ngit merge --no-ff -m \"feat: integrate login feature\" feature/login\n\n# Abort merge\ngit merge --abort\n\n# Check merge status\ngit status\ngit merge --continue  # after resolving conflicts",
      "description": "Essential merge commands: merging fast-forward control abort and continue."
    },
    {
      "title": "Resolving Merge Conflicts",
      "useCase": "Manual conflict resolution workflow.",
      "code": "# Attempt merge conflict occurs\ngit merge feature/login\n>> Auto-merge failed; fix conflicts then commit\n\n# View conflicted files\ngit status\n# both modified: src/auth.js\n\n# Open file conflict markers:\n# <<<<<<< HEAD\n#   const timeout = 5000;\n# =======\n#   const timeout = 10000;\n# >>>>>>> feature/login\n\n# Edit file to resolve\n# const timeout = 7500; // compromise\n\n# Mark as resolved\ngit add src/auth.js\n\n# Complete merge\ngit merge --continue\n# or: git commit -m \"Merge feature/login into main\"",
      "description": "Resolve merge conflicts by editing files removing markers and completing the merge."
    },
    {
      "title": "Merge with Strategy Options",
      "useCase": "Advanced merge strategies.",
      "code": "# Our strategy (keep current branch)\ngit merge -Xours feature/branch\n# Keeps current branch version on conflicts\n\n# Their strategy (keep incoming)\ngit merge -Xtheirs feature/branch\n# Keeps incoming branch version on conflicts\n\n# Recursive with patience (better diffs)\ngit merge -Xpatience feature/branch\n# Slower but produces cleaner merge results\n\n# Squash merge (combine all into one commit)\ngit merge --squash feature/branch\ngit commit -m \"feat: add login feature\"\n\n# Verify merge\ngit log --oneline --graph -5\ngit diff --stat main@{1} main",
      "description": "Advanced merge strategies for specific conflict resolution needs."
    },
    {
      "title": "Merge Queue (GitHub Merge Queue)",
      "useCase": "Automated merge ordering.",
      "code": "# GitHub Merge Queue merges PRs in order\n# Ensures each PR passes CI after merging\n# with current main not at PR creation time\n\n# Enable in repo settings:\n# Settings > Branches > Branch protection >\n# \"Require merge queue\"\n\n# Workflow:\n# 1. PR approved + CI passes\n# 2. Add to merge queue (via UI or label)\n# 3. Queue creates a temporary branch\n#    merging all queued PRs in order\n# 4. CI runs on combined merge\n# 5. If passes merged to main",
      "description": "Merge queues ensure each PR merges cleanly against the latest main state."
    },
    {
      "title": "Automated Merge Conflict Detection (CI)",
      "useCase": "Prevent conflicting PRs.",
      "code": "# CI job: check if PR branch can merge cleanly\n\nname: Merge Check\non: pull_request\njobs:\n  check-merge:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: |\n          git fetch origin main\n          if ! git merge-base --is-ancestor\n            origin/main HEAD; then\n            echo \"Branch needs rebase on main\"\n            exit 1\n          fi\n      - run: |\n          git merge --no-commit origin/main\n          if [ $? -ne 0 ]; then\n            git merge --abort\n            echo \"Merge conflict detected resolve locally\"\n            exit 1\n          fi\n          git merge --abort",
      "description": "CI checks detect merge conflicts early in the PR workflow."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a three-way merge?",
      "options": [
        "Two branches merging directly",
        "Merge using common ancestor and two tips",
        "Merging three branches at once",
        "Deleting old branches"
      ],
      "answer": 1,
      "explanation": "Three-way merge uses the common ancestor and both branch tips to create the merge."
    },
    {
      "question": "What causes a merge conflict?",
      "options": [
        "Both branches modified same lines differently",
        "A file was deleted",
        "The repository is corrupted",
        "Git is out of memory"
      ],
      "answer": 0,
      "explanation": "Conflicts occur when the same lines are modified in both branches."
    },
    {
      "question": "What does --no-ff do?",
      "options": [
        "No fast-forward",
        "Force merge commit",
        "No file changes",
        "Fast-forward only"
      ],
      "answer": 1,
      "explanation": "--no-ff forces a merge commit even when fast-forward is possible."
    },
    {
      "question": "How do you abort a merge?",
      "options": [
        "git merge --stop",
        "git merge --abort",
        "git reset --merge",
        "git checkout main"
      ],
      "answer": 1,
      "explanation": "git merge --abort returns to the pre-merge state."
    },
    {
      "question": "What is the default merge strategy?",
      "options": [
        "Ours",
        "Recursive",
        "Octopus",
        "Subtree"
      ],
      "answer": 1,
      "explanation": "Recursive is the default strategy for non-fast-forward merges."
    },
    {
      "question": "What does git merge --squash do?",
      "options": [
        "Squashes commits into one",
        "Deletes the source branch",
        "Adds squash game",
        "Compresses the repo"
      ],
      "answer": 0,
      "explanation": "Squash merge combines all feature branch commits into a single commit."
    },
    {
      "question": "Git Merge — What reduces errors most?",
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
      "question": "Git Merge — What improves speed?",
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
      "question": "Git Merge — What is key for monitoring?",
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
      "question": "Git Merge — What ensures quality?",
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
