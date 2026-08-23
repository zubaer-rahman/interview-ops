const e={id:"git-reset",title:"Git Reset",difficulty:"intermediate",estimatedMinutes:15,tldr:["Git reset moves the current branch pointer backward or forward to a specific commit optionally modifying the staging area and working directory.","Three modes: --soft (only moves HEAD) --mixed (moves HEAD + resets staging area default) --hard (moves HEAD + resets staging + working directory).","Reset is destructive on uncommitted work (--hard) and on commits no longer referenced (dangling commits can be recovered via reflog).","Use reset for local branch cleanup unstaging files and discarding local changes. Never use reset on shared branches (rewrites history)."],laymanDefinition:"Git reset is like adjusting a VCR tape to a specific timestamp. --soft is like moving the tape position (HEAD) but leaving the picture (working dir) and loading tray (staging) untouched. --mixed also ejects the tape (unstages). --hard rewinds ejects and forgets everything after that point like it never happened.",deepDive:[{heading:"Reset Modes",text:"--soft: HEAD now points to target commit. Staging area and working directory are unchanged. All changes from reset point to current state become staged. --mixed (default): HEAD moves staging area matches HEAD working directory unchanged. Changes become unstaged. --hard: HEAD moves staging and working directory match HEAD. Uncommitted changes are lost."},{heading:"Reset vs Checkout",text:"git reset moves branch pointers. git checkout switches branches (and can restore files). Reset operates on the current branch. Checkout switches to a different branch. Both can restore specific files but have different effects on HEAD. Reset --hard <commit> is the most dangerous it discards working directory changes."},{heading:"Soft Reset Use Cases",text:'Combine multiple commits into one: git reset --soft HEAD~3 then git commit -m "Squashed feature". Uncommit but keep changes staged: git reset --soft HEAD~1. Adjust commit base: reset --soft to a different commit. Safe because working directory is untouched no data loss.'},{heading:"Mixed Reset (Default) Use Cases",text:"Unstage files: git reset (defaults to --mixed HEAD). Uncommit and unstage: git reset --mixed HEAD~1. Unstage selective: git reset HEAD -- filename. Most common reset for everyday use changes remain in working directory."},{heading:"Hard Reset and Recovery",text:"git reset --hard HEAD~3: discards last 3 commits and all uncommitted changes. DANGEROUS. Recovery: git reflog to find the old HEAD SHA. git reset --hard <sha> to restore. Or git checkout -b recovered <sha> to create a branch. Reflog keeps history for ~90 days (git gc prunes it)."}],interviewAnswer:"Reset is powerful but dangerous. Use --soft to merge commits. Use --mixed (default) to unstage. Use --hard sparingly. Never reset shared branches. Recovery is possible via reflog but not guaranteed. For undoing shared history use revert. For local changes reset is the right tool.",interviewQuestions:[{question:"What is git reset?",answer:"Moves the current branch pointer to a specified commit optionally modifying staging and working directory."},{question:"What are the three reset modes?",answer:"--soft (HEAD only) --mixed (HEAD + staging default) --hard (HEAD + staging + working directory)."},{question:"What does --soft do?",answer:"Moves HEAD only. Staging and working directory unchanged. Changes become staged."},{question:"What does --mixed do?",answer:"Moves HEAD and resets staging area. Working directory unchanged. Changes become unstaged. Default mode."},{question:"What does --hard do?",answer:"Moves HEAD resets staging area and overwrites working directory. Uncommitted changes lost."},{question:"What is the default reset mode?",answer:"--mixed (if no mode specified)."},{question:"Can you recover from git reset --hard?",answer:"Yes via git reflog. Find the old HEAD SHA and reset to it."},{question:"Why should you never reset shared branches?",answer:"Reset rewrites history causing divergence for other developers who have the old history."},{question:"What is git reset HEAD -- filename?",answer:"Unstages the file (removes from staging area) but keeps working directory changes."},{question:"How do you uncommit the last commit but keep changes?",answer:"git reset --soft HEAD~1 (keeps changes staged) or git reset HEAD~1 (keeps changes unstaged)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Reset</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Original</text><text x="65" y="43" text-anchor="middle" font-size="9" fill="#ddd">Commit A to B to C (</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">HEAD)</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">--soft</text><text x="215" y="43" text-anchor="middle" font-size="9" fill="#ddd">HEAD to A changes st</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">aged</text><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">--mixed</text><text x="65" y="78" text-anchor="middle" font-size="9" fill="#ddd">HEAD to A changes un</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">staged</text><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">--hard</text><text x="65" y="113" text-anchor="middle" font-size="9" fill="#ddd">HEAD to A changes LO</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">ST</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Reflog</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Recovery possible</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Reset</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Move branch pointer with 3 modes: </text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">--soft --mixed --hard. Dangerous o</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">n shared branches.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Reset: Move HEAD pointer. --soft (keep staged)</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> --mixed (unstage) --hard (discard all).</text></svg>',codeExamples:[{title:"Reset Modes Comparison",useCase:"Visual difference between modes.",code:`# Initial state:
# Commit A -- Commit B -- Commit C (HEAD)
# Modified: src/index.js (unstaged)
# Staged: src/utils.js

# --soft: HEAD to Commit A
git reset --soft HEAD~2
# HEAD to Commit A
# Staged: src/utils.js + src/index.js
# Working: src/index.js (modified)

# --mixed (default): HEAD to Commit A
git reset --mixed HEAD~1
# HEAD to Commit B
# Staged: (empty)
# Working: src/index.js (modified)

# --hard: HEAD to Commit A
git reset --hard HEAD~1
# HEAD to Commit B
# Working: clean (index.js changes LOST)`,description:"Comparison of --soft --mixed and --hard reset modes."},{title:"Soft Reset for Squash Commits",useCase:"Combine multiple commits.",code:`# Before: 3 messy commits
git log --oneline -5
# d3f4g5h fix typo
# b2c3d4e add test
# a1b2c3d add feature

# Squash into one commit
git reset --soft HEAD~3
git commit -m "feat: add login feature with tests"

# After: 1 clean commit
git log --oneline -3
# x1y2z3w feat: add login feature with tests

# All changes from 3 commits are now in 1 commit
# Working directory unchanged safe`,description:"Soft reset combines multiple commits into one without losing changes."},{title:"Unstage Files with Mixed Reset",useCase:"Remove files from staging.",code:`# Accidentally staged all files
git add .
git status
# Changes staged: 10 files

# Unstage everything (keep changes)
git reset
# Equivalent to: git reset --mixed HEAD

# Unstage specific file
git reset HEAD -- src/config.js

# Now config.js changes are unstaged
# but still in working directory

# Uncommit last commit but keep changes
git reset HEAD~1
# HEAD moves back 1 changes are unstaged
# Ready to re-commit with corrections`,description:"Mixed reset unstages files while keeping working directory changes intact."},{title:"Recover from Hard Reset",useCase:"Find lost commits via reflog.",code:`# DANGER: accidentally did hard reset
git reset --hard HEAD~5
# Lost 5 commits and uncommitted work

# RECOVERY: find the commit
git reflog
# abc123 HEAD@{0}: reset: moving to HEAD~5
# def456 HEAD@{1}: commit: feat: add payment
# ghi789 HEAD@{2}: commit: fix: validation

# Restore to the lost state
git reset --hard HEAD@{1}
# Or: git reset --hard def456

# Alternative: create branch first
git checkout -b recovery-branch HEAD@{1}
# Now inspect and merge back to main`,description:"Reflog recovery from accidental hard reset find and restore lost commits."},{title:"Reset Detached HEAD",useCase:"Fix detached HEAD state.",code:`# You checked out an old commit
git checkout v1.0
# You are in detached HEAD state

# Make changes and commit
echo "fix" >> README.md
git add .
git commit -m "fix: readme update"

# Now you want to keep this on a branch
git checkout -b hotfix/v1.0-patch
# OR: create branch without switching
git branch hotfix/v1.0-patch

# If you want to discard:
git checkout main
# Detached HEAD changes are lost
# (can recover from reflog within ~90 days)`,description:"Create a branch from detached HEAD to save work done outside any branch."}],mcqQuestions:[{question:"What is the default reset mode?",options:["--soft","--mixed","--hard","--keep"],answer:1,explanation:"--mixed is the default mode for git reset."},{question:"What does git reset --soft do?",options:["Discards all changes","Moves HEAD keeps staging and working dir","Resets staging only","Deletes files"],answer:1,explanation:"--soft moves HEAD but leaves staging and working directory unchanged."},{question:"What is the safest reset mode?",options:["--hard","--mixed","--soft","All are equally safe"],answer:2,explanation:"--soft is safest as it only moves HEAD without modifying staging or working directory."},{question:"How do you recover from git reset --hard?",options:["Cannot recover","Use git reflog to find lost commits","Re-download from remote","Recreate from memory"],answer:1,explanation:"git reflog shows past HEAD positions for recovery."},{question:"Why never reset shared branches?",options:["It is slower","It rewrites history breaking other devs","It requires internet","It costs money"],answer:1,explanation:"Reset rewrites history. Other developers repos will diverge and require force-sync."},{question:"What does git reset HEAD -- filename do?",options:["Deletes the file","Unstages the file","Commits the file","Stages the file"],answer:1,explanation:"Resets the file in the staging area to match HEAD (unstages it)."},{question:"Git Reset — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Reset — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Reset — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Reset — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_reset};
