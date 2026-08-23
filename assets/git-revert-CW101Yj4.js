const e={id:"git-revert",title:"Git Revert",difficulty:"intermediate",estimatedMinutes:10,tldr:["Git revert creates a new commit that undoes the changes from a previous commit. The history remains intact no rewriting.","Unlike git reset (moves branch pointer rewrites history) revert is safe for shared branches because it adds a new commit rather than deleting history.","Revert a single commit: git revert <sha>. Revert a range: git revert <old>..<new>. Revert a merge: git revert -m 1 <merge-sha>.","Revert is the recommended way to undo changes on public/shared branches. It preserves the full commit history and is safe for collaboration."],laymanDefinition:"Git revert is like a time machine that adds a new event to undo a past event rather than erasing the past. If you baked a cake (commit) and it turns out terrible revert adds a remove cake from kitchen event to the timeline. The original bake cake event is still in the history you can see it. Reset would be erasing the memory of baking entirely.",deepDive:[{heading:"How Revert Works",text:"Revert computes the inverse diff of the target commit and applies it as a new commit. If commit A added 10 lines revert A creates a commit that removes those 10 lines. If commit A removed a file revert A restores it (if no conflicting changes). The original commit remains in history."},{heading:"Reverting a Single Commit",text:'git revert <sha>. Opens editor for commit message (default: "Revert <commit-title>"). Works on any commit not just HEAD. No-edit: git revert --no-edit <sha>. No-commit: git revert -n <sha> (stage changes but don commit allows combining multiple reverts).'},{heading:"Reverting a Merge Commit",text:"Merge commits have two parents. git revert -m 1 <merge-sha> reverts to the state of parent 1 (the branch you were on). -m 2 reverts to parent 2 (the branch you merged). Without -m git refuses to revert a merge (ambiguous)."},{heading:"Revert Conflicts",text:"If later commits modified the same code revert may conflict. Resolution is like a normal merge conflict: edit git add git revert --continue. Or abort: git revert --abort. To skip a conflicted revert: git revert --skip."},{heading:"Revert vs Reset vs Restore",text:"Revert: safe for public history creates new commit. Reset: moves branch pointer rewrites history (use only on local/unpushed branches). Restore: restores working tree/index files (new Git 2.23+). For public/shared branches always use revert."}],interviewAnswer:"Use revert for undoing changes on shared branches it preserves history and is safe for collaboration. Revert works by creating a new commit that undoes the target commit. Handle revert of merge commits with -m to specify the parent. Revert conflicts resolve like normal conflicts. Never use reset on public branches.",interviewQuestions:[{question:"What is git revert?",answer:"Creates a new commit that undoes the changes from a previous commit. History is preserved."},{question:"How does revert differ from reset?",answer:"Revert: new commit safe for shared branches. Reset: moves branch pointer rewrites history."},{question:"How do you revert a specific commit?",answer:"git revert <commit-sha>. Opens editor for commit message."},{question:"How do you revert a merge commit?",answer:"git revert -m 1 <merge-sha>. -m specifies which parent to revert to."},{question:"Can revert cause conflicts?",answer:"Yes if later commits modified the same code. Resolve like a normal conflict."},{question:"How do you abort a revert?",answer:"git revert --abort. Returns to pre-revert state."},{question:"What is the default revert commit message?",answer:'"Revert <original commit title>". The original commit is referenced by SHA.'},{question:"How do you revert without opening an editor?",answer:"git revert --no-edit <sha>. Uses the default revert message."},{question:"Can you revert multiple commits at once?",answer:"Yes: git revert --no-commit <old>..<new> then commit once. Or revert each individually."},{question:"Why should you use revert instead of reset on public branches?",answer:"Revert is safe for collaboration (adds history). Reset rewrites history breaking other developers repositories."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Revert</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit A</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Original change</text><line x1="110" y1="48" x2="130" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="140" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="190" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit B</text><text x="190" y="54" text-anchor="middle" font-size="9" fill="#ddd">More changes</text><line x1="240" y1="48" x2="260" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Revert A</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">UNDO commit A</text><rect x="10" y="100" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit C</text><text x="60" y="119" text-anchor="middle" font-size="9" fill="#ddd">New revert commit</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Safe</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">History unchanged</text><rect x="140" y="70" width="250" height="100" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Revert</text><text x="265" y="153" text-anchor="middle" font-size="9" fill="#ddd">Creates a new commit that undoes a previous c</text><text x="265" y="164" text-anchor="middle" font-size="9" fill="#ddd">ommit. Safe for shared branches.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Revert: Undo past commits safely by creating a</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> new inverse commit. Preserves full history.</text></svg>',codeExamples:[{title:"Basic Revert Commands",useCase:"Undo commits safely.",code:`# Revert a single commit
git log --oneline -5
# a1b2c3d Add login form
# e4f5g6h Fix login validation

git revert a1b2c3d
# Opens editor: Revert "Add login form"
# Creates new commit undoing a1b2c3d

# Revert without editing message
git revert --no-edit a1b2c3d

# Revert but do not commit (stage changes)
git revert -n a1b2c3d
# Make additional changes then commit
git commit -m "fix: revert login form and adjust tests"

# Revert multiple commits (oldest first)
git revert --no-edit a1b2c3d e4f5g6h`,description:"Basic revert commands for undoing specific commits with various options."},{title:"Reverting a Merge Commit",useCase:"Safely undo a merge.",code:`# Find the merge commit
git log --oneline --merges -5
# m0n1o2p Merge feature/login into main

# Revert to parent 1 (what main was before merge)
git revert -m 1 m0n1o2p --no-edit

# Revert to parent 2 (what feature/login was)
git revert -m 2 m0n1o2p

# Why -m is needed:
# Merge commit has 2 parents:
# Parent 1: main (the branch you were on)
# Parent 2: feature/login (the merged branch)
# -m 1 means undo to main previous state

# After revert you can re-merge later
# (the reverted merge is still in history)`,description:"Revert merge commits using -m to specify which parent to revert to."},{title:"Revert With Conflicts",useCase:"Resolve conflicts during revert.",code:`# Revert causes conflict
git revert a1b2c3d
# error: could not revert a1b2c3d...
# hint: after resolving the conflicts
# hint: mark them with "git add"

# Check status to see conflicted files
git status
# both modified: src/auth.js

# Open and resolve conflict
# Edit file remove >>> <<< markers

# Mark as resolved
git add src/auth.js

# Complete revert
git revert --continue

# Or abort revert entirely
git revert --abort`,description:"Handle revert conflicts by resolving files and completing the revert."},{title:"Revert Already Reverted",useCase:"Re-apply a reverted commit.",code:`# Scenario: you reverted a commit
# but now want to re-apply it

# Option 1: revert the revert
git revert <revert-commit-sha>
# Creates a commit that re-applies the original

# Option 2: cherry-pick the original commit
git cherry-pick <original-commit-sha>
# Re-applies the original commit on current branch

# Option 3: rebase and drop the revert
# (only if branch is local/unpushed)
git rebase -i HEAD~5
# Delete the revert commit line`,description:"Revert a revert or cherry-pick to re-apply changes that were previously reverted."},{title:"Revert and Continue (No-Commit)",useCase:"Combine multiple reverts into one commit.",code:`# Stage multiple reverts without committing
git revert -n a1b2c3d
git revert -n e4f5g6h
git revert -n i7j8k9l

# All changes are staged but not committed
git status
# Changes staged: 3 reverts applied

# Combine into a single commit
git commit -m "fix: revert login validation and OAuth changes"

# Useful for:
# - Reverting a whole feature
# - Atomic revert of multiple related commits
# - Cleaner history than individual revert commits`,description:"Use --no-commit (-n) to stage multiple reverts before committing them together."}],mcqQuestions:[{question:"What does git revert do?",options:["Deletes a commit","Creates a new commit that undoes changes","Moves branch pointer","Rewrites history"],answer:1,explanation:"Revert creates a new inverse commit safe for shared history."},{question:"How is revert different from reset?",options:["Revert rewrites history","Revert adds a new commit reset moves pointer","They are the same","Reset is safer for shared branches"],answer:1,explanation:"Revert adds history (safe) reset rewrites history (unsafe for shared branches)."},{question:"What flag reverts a merge commit?",options:["-m (parent number)","-p (parent)","--merge","-f (force)"],answer:0,explanation:"-m specifies which parent to revert to: -m 1 or -m 2."},{question:"What happens if a revert causes conflicts?",options:["Revert is automatically aborted","Resolve conflicts and git revert --continue","The commit is skipped","Git force-reverts anyway"],answer:1,explanation:"Handle revert conflicts like merge conflicts: resolve add continue."},{question:"How do you revert without opening an editor?",options:["git revert --silent","git revert --no-edit","git revert --quiet","git revert --auto"],answer:1,explanation:"--no-edit uses the default revert message without opening an editor."},{question:"Why use revert instead of reset on main?",options:["Faster operation","History is preserved for collaboration","Smaller repository size","No conflicts possible"],answer:1,explanation:"Revert creates a new commit (preserves history) which is safe for shared branches."},{question:"Git Revert — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Revert — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Revert — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Revert — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_revert};
