export const git_cherry_pick = {
  "id": "git-cherry-pick",
  "title": "Git Cherry-Pick",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Git cherry-pick applies a specific commit (or commits) from one branch onto the current branch creating a new commit with the same changes.",
    "Useful for: backporting bug fixes to release branches selectively porting features picking specific changes without merging entire branches.",
    "Cherry-pick creates a new SHA even if the changes are identical it is a copy not a move. The original commit remains in its branch.",
    "Conflicts can occur during cherry-pick resolved similarly to merge/rebase conflicts. Multiple cherry-picks can be combined with -n."
  ],
  "laymanDefinition": "Cherry-pick is like picking individual apples from a neighbor tree without bringing the whole branch. Your neighbor has a tree (branch) with 10 apples (commits). You see one perfect apple (a bug fix) and want it in your basket. You reach over the fence and pick just that one apple the rest stay on the tree.",
  "deepDive": [
    {
      "heading": "Cherry-Pick Mechanics",
      "text": "Cherry-pick computes the diff of the target commit and applies it as a new commit on the current branch. It uses the same three-way merge logic as merge. The commit message is copied (can be modified with -x to append source SHA or -n to skip commit). Author information is preserved by default."
    },
    {
      "heading": "Cherry-Pick Use Cases",
      "text": "Backport: apply a bug fix from main to a release/v1.0 branch. Hotfix: apply a fix from a development branch to a production hotfix. Selective feature porting: bring specific features without merging the entire branch. Undo/redo: revert a revert by cherry-picking the original commit."
    },
    {
      "heading": "Cherry-Pick Multiple Commits",
      "text": "git cherry-pick A B C (cherry-pick three commits in order). git cherry-pick A..C (range: commits after A up to and including C). git cherry-pick --stdin < commits.txt (read SHAs from file). Cherry-pick processes commits in order applying each as a separate commit. For conflicts: resolve per commit."
    },
    {
      "heading": "Cherry-Pick with -x",
      "text": "Adding -x appends \"(cherry picked from commit <sha>)\" to the commit message. This creates an audit trail showing where the change originated. Recommended for backports and releases. Without -x the new commit has no reference to the original SHA."
    },
    {
      "heading": "Cherry-Pick Conflicts",
      "text": "If the same code was modified differently in the target branch cherry-pick conflicts. Resolution: edit file git add git cherry-pick --continue. Abort: git cherry-pick --abort. Skip: git cherry-pick --skip. For multiple cherry-picks conflict pauses the sequence resolve and continue for the rest."
    }
  ],
  "interviewAnswer": "Cherry-pick is essential for selective commit porting. Use -x for audit trail on backports. Conflicts resolve per commit. For multiple cherry-picks fix conflicts and continue. Cherry-pick does NOT move the original commit it creates a copy. For entire branches prefer merge or rebase.",
  "interviewQuestions": [
    {
      "question": "What is git cherry-pick?",
      "answer": "Applies a specific commit from one branch onto the current branch creating a new commit copy."
    },
    {
      "question": "When would you use cherry-pick?",
      "answer": "Backporting bug fixes to release branches selective feature porting hotfix application."
    },
    {
      "question": "Does cherry-pick create a new SHA?",
      "answer": "Yes. Even if changes are identical it creates a new commit object with a new SHA."
    },
    {
      "question": "What does -x do in cherry-pick?",
      "answer": "Appends \"(cherry picked from commit <sha>)\" to the commit message for audit trail."
    },
    {
      "question": "How do you cherry-pick multiple commits?",
      "answer": "git cherry-pick <sha1> <sha2> <sha3> or git cherry-pick <old>..<new>."
    },
    {
      "question": "How do you resolve cherry-pick conflicts?",
      "answer": "Edit conflicting files git add git cherry-pick --continue."
    },
    {
      "question": "How do you abort a cherry-pick?",
      "answer": "git cherry-pick --abort. Returns to pre-cherry-pick state."
    },
    {
      "question": "Can you cherry-pick a merge commit?",
      "answer": "Yes with -m <parent-number> flag to specify which parent to follow."
    },
    {
      "question": "Is the original author preserved in cherry-pick?",
      "answer": "Yes by default. Author name email and date are preserved from the original commit."
    },
    {
      "question": "What is the difference between cherry-pick and rebase?",
      "answer": "Cherry-pick copies specific commits. Rebase replays all commits from one branch onto another."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Cherry-Pick</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branch A</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Commits X Y Z</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Branch B (current)</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Commits A B</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pick X</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Copy commit X</text><rect x=\"150\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"200\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pick Z</text><text x=\"200\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Copy commit Z</text><rect x=\"150\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"200\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Result</text><text x=\"200\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">A B X Z</text><rect x=\"260\" y=\"35\" width=\"220\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"370\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Cherry-Pick</text><text x=\"370\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Selectively apply specific commits from </text><text x=\"370\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">one branch to another. New SHAs preserve</text><text x=\"370\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">d.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Cherry-Pick: Apply specific commits from one b</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ranch to another. Selective creates copies. Use -x</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> for audit trail.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Cherry-Pick",
      "useCase": "Pick a single commit.",
      "code": "# Find the commit to cherry-pick\ngit log --oneline feature/login\n# a1b2c3d Add OAuth login\n# b2c3d4e Add validation\n# c3d4e5f Add login form\n\n# Switch to target branch\ngit checkout release/v1.0\n\n# Cherry-pick the OAuth commit only\ngit cherry-pick a1b2c3d\n\n# With -x for audit trail\ngit cherry-pick -x a1b2c3d\n# Message: Add OAuth login\n# (cherry picked from commit a1b2c3d...)\n\n# Cherry-pick without committing\ngit cherry-pick -n a1b2c3d\n# Stages changes you commit manually",
      "description": "Basic cherry-pick to apply a single commit to another branch with optional -x."
    },
    {
      "title": "Cherry-Pick Multiple Commits",
      "useCase": "Apply a range of commits.",
      "code": "# Apply multiple specific commits\ngit cherry-pick a1b2c3d b2c3d4e c3d4e5f\n# Applies in order: a1 b2 c3 to 3 new commits\n\n# Apply a range (after A up to C)\ngit cherry-pick a1b2c3d..c3d4e5f\n# Applies b2 and c3 (exclusive of a1)\n\n# Apply inclusive range\ngit cherry-pick a1b2c3d^..c3d4e5f\n# Applies a1 b2 and c3 (inclusive of a1)\n\n# Combine into one commit with -n\ngit cherry-pick -n a1b2c3d b2c3d4e c3d4e5f\ngit commit -m \"backport: OAuth login fixes\"",
      "description": "Cherry-pick multiple commits by listing SHAs using range syntax or combining with -n."
    },
    {
      "title": "Cherry-Pick a Merge Commit",
      "useCase": "Pick changes from a merge.",
      "code": "# Find the merge commit\ngit log --oneline --merges -3\n# m0n1o2p Merge feature/payment into main\n\n# Cherry-pick following parent 1 (main side)\ngit cherry-pick -m 1 -x m0n1o2p\n\n# Cherry-pick following parent 2 (feature side)\ngit cherry-pick -m 2 -x m0n1o2p\n\n# Without -m cherry-pick rejects merge commits\n# because it does not know which parent to follow",
      "description": "Cherry-pick a merge commit by specifying which parent to follow with -m."
    },
    {
      "title": "Cherry-Pick Sequence with Conflict",
      "useCase": "Handle conflicts in sequence.",
      "code": "# Cherry-pick multiple commits\ngit cherry-pick a1b2c3d b2c3d4e c3d4e5f\n\n# Conflict on b2c3d4e:\n# Fix the conflicted file\ngit add src/file.js\n\n# Continue the cherry-pick sequence\ngit cherry-pick --continue\n# b2c3d4e committed; proceeding to c3d4e5f\n\n# If you want to abort the whole sequence:\ngit cherry-pick --abort\n\n# If you want to skip a problematic commit:\ngit cherry-pick --skip",
      "description": "Cherry-pick pauses on conflicts and resumes with --continue."
    },
    {
      "title": "Cherry-Pick Range from Log",
      "useCase": "Select commits interactively.",
      "code": "# Use git log to find commits by date/author\ngit log --author=\"John\" --oneline -10\n# a1b2c3d feat: add payment gateway\n# b2c3d4e fix: payment timeout\n\n# Cherry-pick specific commits by range\ngit cherry-pick a1b2c3d^..b2c3d4e\n\n# Or use interactive selection with fzf\n# git log --oneline | fzf --multi | awk '{print $1}' | xargs git cherry-pick\n\n# Cherry-pick from another branch without switching\ngit cherry-pick main~2 main~1",
      "description": "Select and cherry-pick commits interactively or by range."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is git cherry-pick?",
      "options": [
        "Moves a branch",
        "Applies a specific commit to current branch",
        "Deletes a commit",
        "Merges two branches"
      ],
      "answer": 1,
      "explanation": "Cherry-pick applies a specific commit from one branch onto the current branch."
    },
    {
      "question": "Does cherry-pick create a new SHA?",
      "options": [
        "No it reuses the same SHA",
        "Yes always creates a new SHA",
        "Depends on -x flag",
        "Only if conflicts occur"
      ],
      "answer": 1,
      "explanation": "Cherry-pick always creates a new commit object with a new SHA."
    },
    {
      "question": "What does -x do in cherry-pick?",
      "options": [
        "Executes a script",
        "Appends source SHA to message",
        "Extracts changes",
        "Excludes files"
      ],
      "answer": 1,
      "explanation": "-x appends \"(cherry picked from commit <sha>)\" for audit trail."
    },
    {
      "question": "How do you cherry-pick a merge commit?",
      "options": [
        "Use -m to specify parent",
        "Cannot cherry-pick merges",
        "Use --merge flag",
        "Use -p flag"
      ],
      "answer": 0,
      "explanation": "Use -m <parent-number> to specify which parent to follow."
    },
    {
      "question": "What happens if a cherry-pick conflicts?",
      "options": [
        "It aborts automatically",
        "It pauses resolve and continue",
        "It skips the commit",
        "It force-applies"
      ],
      "answer": 1,
      "explanation": "Cherry-pick pauses on conflicts resolve with --continue."
    },
    {
      "question": "Is the original author preserved?",
      "options": [
        "No",
        "Yes by default",
        "Only with -x",
        "Only with -a"
      ],
      "answer": 1,
      "explanation": "Cherry-pick preserves author name email and date by default."
    },
    {
      "question": "Git Cherry-Pick — What reduces errors most?",
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
      "question": "Git Cherry-Pick — What improves speed?",
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
      "question": "Git Cherry-Pick — What is key for monitoring?",
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
      "question": "Git Cherry-Pick — What ensures quality?",
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
