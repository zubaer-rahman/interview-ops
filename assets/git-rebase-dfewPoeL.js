const e={id:"git-rebase",title:"Git Rebase",difficulty:"intermediate",estimatedMinutes:20,tldr:["Git rebase rewrites commit history by applying commits from one branch onto the tip of another creating a linear history.","Unlike merge (creates a merge commit) rebase replays each commit one by one. The result is a clean linear history without merge bubbles.","Interactive rebase (git rebase -i) allows squashing reordering editing dropping and rewording commits. Powerful but dangerous on shared branches.","Golden rule: never rebase commits that have been pushed to a shared branch. Rebase only local/feature branches before merging."],laymanDefinition:"Rebase is like rewriting the history of a movie. You have a rough cut (your branch) with scenes in a messy order. Interactive rebase lets you reorder scenes combine similar shots (squash) delete unneeded footage and retitle scenes. But once you have shown the movie to others (pushed) changing the order confuses everyone.",deepDive:[{heading:"Rebase vs Merge",text:"Rebase: linear history no merge commits cleaner log. Rewrites commit SHAs. Merge: preserves branch topology keeps original commit order and SHAs. Rule of thumb: rebase for feature branches before merging merge for shared integration branches."},{heading:"Interactive Rebase Operations",text:"pick: use commit as-is. reword: change commit message. edit: stop to amend commit (content or message). squash: combine with previous commit merge messages. fixup: like squash but discard this commit message. drop: remove commit. exec: run shell command. break: stop at this point."},{heading:"Rebase Workflow",text:"git checkout feature-branch && git rebase main: takes all feature commits and replays them on top of main current tip. Resolve conflicts per commit. After successful rebase: git checkout main && git merge feature-branch (fast-forward). Result: linear history."},{heading:"Rebase Conflicts",text:"Unlike merge (one big conflict resolution) rebase resolves conflicts per commit. Each commit is applied in order. If commit A conflicts: resolve git add git rebase --continue. If stuck: git rebase --abort. If skip: git rebase --skip. Per-commit resolution makes debugging easier."},{heading:"Rebase Recovery (Rebase Dangers)",text:"If you accidentally rebase a pushed branch: git rebase --abort (if still in progress). If completed: git reflog to find the old commit git reset --hard ORIG_HEAD or git checkout -b recovery <old-sha>. For shared branches: force push is destructive communicate with team first."}],interviewAnswer:"Use rebase to keep feature branch history clean before merging. Never rebase shared branches. Interactive rebase is a powerful tool for curating commit history. Resolve conflicts per commit during rebase. If unsure use merge it is safer. Reflog is your safety net for recovery.",interviewQuestions:[{question:"What is git rebase?",answer:"Rewrites commit history by applying commits from one branch onto the tip of another. Creates linear history."},{question:"What is the difference between rebase and merge?",answer:"Rebase: linear history rewrites SHAs. Merge: preserves branch topology adds merge commit."},{question:"What is the golden rule of rebasing?",answer:"Never rebase commits that have been pushed to a shared branch. Rebase only local feature branches."},{question:"What is interactive rebase?",answer:"git rebase -i opens an editor to pick reword edit squash fixup or drop commits."},{question:"How do you resolve conflicts during rebase?",answer:"Conflicts are resolved per commit. Fix file git add git rebase --continue. Abort with git rebase --abort."},{question:"What does squash do in interactive rebase?",answer:"Combines a commit with the previous one. Both commit messages are merged into one."},{question:"What does fixup do vs squash?",answer:"Fixup combines without keeping the commit message. Squash combines and merges messages."},{question:"How do you recover from a bad rebase?",answer:"git reflog to find the old commit SHA. git reset --hard <old-sha> or create a branch from it."},{question:"When should you prefer merge over rebase?",answer:"For shared branches when you want to preserve exact history or when the rebase would cause excessive conflict resolution."},{question:"What happens to commit SHAs after rebase?",answer:"They change. Each commit is a new commit object with a new SHA even if the content is the same."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Rebase</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Feature Branch</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Commit A Commit B</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Main Tip</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Latest main</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Rebase</text><text x="65" y="78" text-anchor="middle" font-size="9" fill="#ddd">Replay commits on ma</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">in tip</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Linear History</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">A B on top of main</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Interactive</text><text x="65" y="113" text-anchor="middle" font-size="9" fill="#ddd">-i: squash reword dr</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">op</text><rect x="10" y="135" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Conflict</text><text x="65" y="154" text-anchor="middle" font-size="9" fill="#ddd">Resolve per commit</text><rect x="10" y="165" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="181" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Merge</text><text x="65" y="173" text-anchor="middle" font-size="9" fill="#ddd">Fast-forward after r</text><text x="65" y="184" text-anchor="middle" font-size="9" fill="#ddd">ebase</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Rebase</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Rewrite commits onto another branc</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">h. Clean linear history. Interacti</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ve mode for curation.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Rebase: Reapply commits on a new base. Linear </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">history. Interactive commit curation. Never rebase</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle"> shared branches.</text></svg>',codeExamples:[{title:"Basic Rebase Workflow",useCase:"Rebase feature branch onto main.",code:`# Start on feature branch
git checkout feature/login

# Rebase onto main
git rebase main
>> Applying: Add login form
>> Applying: Add validation logic
>> Applying: Add OAuth handler

# If conflict occurs:
# 1. Fix conflicts in file
# 2. git add <file>
# 3. git rebase --continue
# Or: git rebase --abort

# After successful rebase
git checkout main
git merge feature/login
# Fast-forward merge linear history`,description:"Standard rebase workflow: rebase feature onto main resolve conflicts per commit then merge."},{title:"Interactive Rebase (Squash Commits)",useCase:"Clean up before PR.",code:`# Rebase last 4 commits interactively
git rebase -i HEAD~4

# Editor opens:
# pick a1b2c3d Add login form
# pick e4f5g6h Fix typo in login
# pick i7j8k9l Add validation
# pick m0n1o2p Fix validation bug

# Change to:
# pick a1b2c3d Add login form
# fixup e4f5g6h Fix typo in login
# squash i7j8k9l Add validation
# fixup m0n1o2p Fix validation bug

# Save and exit. Result: 2 clean commits:
# a1b2c3d Add login form
# i7j8k9l Add validation (with test fixes squashed)`,description:"Interactive rebase squashes fixup commits into meaningful feature commits before PR."},{title:"Rebase with --onto",useCase:"Rebase onto a different base.",code:`# Scenario: feature-b was branched from feature-a
# But feature-a is not ready; we want feature-b on main

# Before:
# main -- A -- B
#          \\
#           C -- D (feature-a)
#                 \\
#                  E -- F (feature-b)

# Rebase feature-b directly onto main
git rebase --onto main feature-a feature-b

# After:
# main -- A -- B -- E -- F (feature-b)
#          \\
#           C -- D (feature-a)

# Or shorter:
git checkout feature-b
git rebase --onto main feature-a`,description:"git rebase --onto allows selective rebasing onto a different base branch."},{title:"Avoid Rebase on Shared Branches",useCase:"Why not to rebase pushed branches.",code:`# What happens when you rebase a shared branch:

# Alice pulls feature/xyz (commit A B C)
# Alice rebases onto updated main:
git checkout feature/xyz
git rebase main  # A B C (new SHAs!)
git push --force-with-lease

# Bob already has A B C locally
# Bob pulls: Git sees divergence
# Bob Git says:
# hint: you have divergent branches

# Bob options (all bad):
# git pull --rebase (rewrites again)
# git reset --hard (loses work)
# Manual fix required

# SAFE: use merge on shared branches
# OR: team agreement on a single owner`,description:"Rebasing shared branches causes divergence for other developers. Use merge instead."},{title:"Rebase and Auto-Squash",useCase:"Automatically squash fixup commits.",code:`# Commit fixup commits with --fixup
git commit --fixup a1b2c3d
# Creates "fixup! Add login form" commit

# Later rebase with --autosquash
git rebase -i --autosquash HEAD~10
# Automatically moves fixup commits
# next to their target commits
# and marks them as fixup

# One-liner:
git commit --fixup <target-sha>
git rebase -i --autosquash <base>

# Enable automatic autosquash:
git config --global rebase.autosquash true`,description:"--fixup and --autosquash automate the squash workflow for related commits."}],mcqQuestions:[{question:"What does rebase do?",options:["Creates a merge commit","Reapplies commits on a new base","Deletes old commits","Stages all files"],answer:1,explanation:"Rebase replays commits from one branch onto the tip of another."},{question:"What is the golden rule of rebasing?",options:["Always rebase main","Never rebase shared branches","Rebase every hour","Only rebase with --force"],answer:1,explanation:"Never rebase commits that have been pushed to a shared branch."},{question:"What does interactive rebase allow?",options:["Only fast-forward","Squash reword drop reorder commits","Delete remote branches","Create new branches"],answer:1,explanation:"Interactive rebase (git rebase -i) allows full commit history curation."},{question:"How do you resolve conflicts during rebase?",options:["One big conflict resolution","Per commit then git rebase --continue","Skip conflicted commits","Delete conflicted files"],answer:1,explanation:"Rebase resolves conflicts per commit fix add continue."},{question:"What happens to commit SHAs after a rebase?",options:["They stay the same","They change (new commits)","They are deleted","They get encrypted"],answer:1,explanation:"Rebase creates new commit objects with new SHAs even for identical content."},{question:"What is the difference between squash and fixup?",options:["Squash keeps message fixup discards it","Fixup keeps message squash discards","They are the same","Fixup deletes the commit"],answer:0,explanation:"Squash merges commit messages; fixup discards the squashed commit message."},{question:"Git Rebase — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Rebase — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Rebase — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Rebase — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_rebase};
