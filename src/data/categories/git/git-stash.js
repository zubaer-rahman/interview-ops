export const git_stash = {
  "id": "git-stash",
  "title": "Git Stash",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Git stash temporarily saves uncommitted changes (modified tracked files and staged changes) so you can work on something else.",
    "Stash takes your working directory and staging area changes and saves them on a stack of unfinished changes. Your working directory becomes clean.",
    "Common use: switching branches without committing half-finished work pulling remote changes or trying a quick experiment.",
    "Stash operations: git stash (save) git stash pop (apply + drop) git stash apply (keep on stack) git stash list git stash drop."
  ],
  "laymanDefinition": "Git stash is like putting your bookmarks in a drawer while you clean your desk. You are reading chapter 5 (working on feature X) but need to answer the door (switch to urgent bug fix). You put a bookmark (stash) in your book set it aside answer the door then come back and resume from the bookmark.",
  "deepDive": [
    {
      "heading": "What Git Stash Saves",
      "text": "Modified tracked files (unstaged changes). Staged changes (the index). Untracked files (with -u or --include-untracked). Ignored files (with -a or --all). New files (created but not tracked). Stash does NOT save: new branches new commits or the working tree for untracked/ignored files unless specified."
    },
    {
      "heading": "Stash Stack Management",
      "text": "Stashes are stored on a stack (LIFO). Latest stash is stash@{0}. List all: git stash list. Apply specific: git stash apply stash@{2}. Drop: git stash drop stash@{1}. Clear all: git stash clear. Create branch from stash: git stash branch new-branch stash@{0}."
    },
    {
      "heading": "Stash Partial Changes",
      "text": "Interactive stash: git stash -p (patch mode) lets you select which hunks to stash. Keep staged changes: git stash --keep-index (stashes only unstaged changes). Stash specific file: git stash push -m \"wip\" -- filename. Create stash from a specific commit: not directly supported (use git format-patch instead)."
    },
    {
      "heading": "Stash Use Cases",
      "text": "1. Urgent bug fix: stash feature work switch to main fix bug switch back pop stash. 2. Pull conflicts: stash local changes pull pop stash (may have conflicts). 3. Experiment: stash try approach if fails drop stash if works pop stash. 4. Rebase preparation: stash before rebase if you have uncommitted changes."
    },
    {
      "heading": "Stash Limitations and Alternatives",
      "text": "Stash is local-only cannot be pushed/shared. Not ideal for long-term storage (use feature branches). Large stashes can be confusing (use descriptive messages: git stash push -m \"WIP: login form validation\"). Alternative for complex workflows: commit on a temporary branch instead of stashing."
    }
  ],
  "interviewAnswer": "Stash is perfect for short-term interruptions. Use descriptive messages (git stash push -m \"message\"). For complex or long-term work-in-progress create a temporary branch instead. Stash has limitations: local-only stack-based no easy diffing between stashes. Practice the difference between pop and apply.",
  "interviewQuestions": [
    {
      "question": "What is git stash?",
      "answer": "Temporarily saves uncommitted changes to a stack cleaning the working directory for other tasks."
    },
    {
      "question": "What does git stash save?",
      "answer": "Modified tracked files and staged changes. Untracked files with -u flag."
    },
    {
      "question": "What is the difference between stash pop and stash apply?",
      "answer": "Pop: applies and removes from stack. Apply: applies but keeps on stack."
    },
    {
      "question": "How do you list stashes?",
      "answer": "git stash list. Shows stack with stash@{0} stash@{1} etc."
    },
    {
      "question": "How do you stash untracked files?",
      "answer": "git stash -u or git stash --include-untracked."
    },
    {
      "question": "What is the most recent stash?",
      "answer": "stash@{0} (top of the stack)."
    },
    {
      "question": "How do you apply a specific stash?",
      "answer": "git stash apply stash@{2}."
    },
    {
      "question": "How do you clear all stashes?",
      "answer": "git stash clear. Be careful this is permanent."
    },
    {
      "question": "Can you push a stash to remote?",
      "answer": "No. Stashes are local-only. Use branches for shared work-in-progress."
    },
    {
      "question": "What is git stash -p?",
      "answer": "Patch mode interactively select hunks to stash. Useful for partial stashing."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Git Stash</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Working Dir</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Uncommitted changes</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stash Stack</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">stash@{0} stash@{1}</text><line x1=\"120\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Clean Dir</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Switch branches</text><line x1=\"120\" y1=\"102\" x2=\"150\" y2=\"102\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pop/Apply</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Restore changes</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Drop</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Remove from stack</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Clear</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Remove all stashes</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Stash</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Temporarily save uncommitted chang</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">es. Stack-based. Perfect for inter</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ruptions.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Git Stash: Save uncommitted work temporarily. Swit</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ch branches pop later. Stack-based management.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Stash Operations",
      "useCase": "Save and restore stashes.",
      "code": "# Save uncommitted changes\ngit stash\n# Working directory is now clean\n\n# Save with message\ngit stash push -m \"WIP: login validation\"\n\n# Apply most recent stash and remove from stack\ngit stash pop\n\n# Apply most recent stash without removing\ngit stash apply\n\n# Apply specific stash\ngit stash apply stash@{1}\n\n# List all stashes\ngit stash list\n# stash@{0}: WIP: login validation\n# stash@{1}: WIP: header fix",
      "description": "Core stash commands: save pop apply list. Use messages for clarity."
    },
    {
      "title": "Stashing Untracked and All Files",
      "useCase": "Include new/ignored files.",
      "code": "# Stash including untracked files\ngit stash -u\n# or: git stash --include-untracked\n\n# Stash ALL files (including ignored)\ngit stash -a\n# or: git stash --all\n\n# Check what a stash contains\ngit stash show stash@{0}\ngit stash show -p stash@{0}\n\n# Example workflow:\necho \"config.local\" >> .gitignore\ngit stash -a # saves everything\ngit stash list",
      "description": "Use -u for untracked files -a for all files including ignored ones."
    },
    {
      "title": "Stash Branch (Recovery)",
      "useCase": "Create branch from stash.",
      "code": "# If you pop a stash and it conflicts:\ngit stash pop\n# Auto-merge failed to conflicts\n\n# Better: create a branch from the stash\n# This recreates the original commit state\ngit stash branch recovery-branch stash@{0}\n# Creates branch applies stash drops stash\n\n# Now you have a proper branch to work on\ngit add .\ngit commit -m \"Restore stashed work\"\n\n# Useful when:\n# - Stash conflicts with current branch\n# - You forgot what branch the stash was from",
      "description": "git stash branch creates a branch from a stash for clean recovery."
    },
    {
      "title": "Stash Across Branches",
      "useCase": "Managing multiple contexts.",
      "code": "# On feature/login branch\ngit stash push -m \"half-done login form\"\n\n# Switch to bugfix\ngit checkout main\ngit checkout -b bugfix/crash-fix\n# Fix the bug...\ngit add .\ngit commit -m \"fix: prevent crash on empty input\"\n\n# Switch back to feature\ngit checkout feature/login\n\n# Restore stashed work\ngit stash pop\n\n# If stashed work was on different base\n# you may get conflicts (resolve normally)\n\n# Alternative: apply and keep stash until resolved\ngit stash apply  # then resolve commit git stash drop",
      "description": "Stash enables context switching between branches without losing uncommitted work."
    },
    {
      "title": "Interactive Stash (Patch Mode)",
      "useCase": "Selective stashing.",
      "code": "# Interactive stash select hunks\ngit stash -p\n\n# Git shows each change hunk:\n# diff --git a/src/auth.js b/src/auth.js\n# @@ -10 5 +10 8 @@\n#  console.log(\"init\");\n# +const debug = true;  to proposed change\n# Stash this hunk? [y n q a d / j J g e ?]\n\n# Keep staged changes stash unstaged only\ngit stash --keep-index\n# Staged changes remain in working directory\n# Unstaged changes go to stash\n\n# Stash specific file\ngit stash push -m \"config changes\" -- src/config.js",
      "description": "Patch mode allows stashing specific changes while keeping others in the working directory."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does git stash do?",
      "options": [
        "Commits changes",
        "Saves changes temporarily",
        "Deletes changes",
        "Pushes to remote"
      ],
      "answer": 1,
      "explanation": "Stash temporarily saves uncommitted changes on a stack."
    },
    {
      "question": "What is the difference between pop and apply?",
      "options": [
        "Pop applies and removes apply keeps",
        "Pop keeps apply removes",
        "No difference",
        "Pop is for remote apply is local"
      ],
      "answer": 0,
      "explanation": "Pop removes from stack after applying; apply keeps it on the stack."
    },
    {
      "question": "How do you stash untracked files?",
      "options": [
        "git stash -u",
        "git stash --all",
        "git stash -p",
        "Cannot stash untracked"
      ],
      "answer": 0,
      "explanation": "Use git stash -u or --include-untracked for untracked files."
    },
    {
      "question": "What is stash@{0}?",
      "options": [
        "The oldest stash",
        "The most recent stash",
        "A specific file",
        "An error message"
      ],
      "answer": 1,
      "explanation": "stash@{0} is the top (most recent) item on the stash stack."
    },
    {
      "question": "Can you share stashes with your team?",
      "options": [
        "Yes via git push",
        "No stashes are local",
        "Only with GitHub",
        "Via email"
      ],
      "answer": 1,
      "explanation": "Stashes are local-only and cannot be pushed to a remote repository."
    },
    {
      "question": "How do you clear all stashes?",
      "options": [
        "git stash drop",
        "git stash clear",
        "git stash remove",
        "git stash delete"
      ],
      "answer": 1,
      "explanation": "git stash clear removes all stashes from the stack permanently."
    },
    {
      "question": "Git Stash — What reduces errors most?",
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
      "question": "Git Stash — What improves speed?",
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
      "question": "Git Stash — What is key for monitoring?",
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
      "question": "Git Stash — What ensures quality?",
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
