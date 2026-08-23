const t={id:"git-bisect",title:"Git Bisect",difficulty:"advanced",estimatedMinutes:15,tldr:["Git bisect uses binary search to find the specific commit that introduced a bug. It automates the good/bad testing process.","You mark a known good commit (before bug) and a known bad commit (after bug). Bisect checks out commits in the middle for you to test.","Each step: test the current commit (manually or with a script) mark git bisect good or bad. Bisect narrows down until it finds the first bad commit.","Automated: git bisect run <script> runs a script at each step and uses exit code (0 = good 1-127 = bad 125 = skip) to determine result."],laymanDefinition:"Git bisect is like finding the day your fridge broke by halving your calendar. You know the fridge worked on Jan 1 (good) and it is broken today (bad). Check halfway: Jan 15. If working good half is eliminated. Check Mar 1. If broken bad half. In ~4 steps you find the exact day without checking every single day.",deepDive:[{heading:"Binary Search Algorithm",text:"Bisect uses true binary search O(log n). 1000 commits to ~10 steps. 10000 commits to ~14 steps. Start: mark one commit good one bad. Git checks out the midpoint. You test and mark good/bad. Bisect halves the range each iteration. It converges to the exact commit that introduced the bug."},{heading:"Manual Bisect Workflow",text:"git bisect start to git bisect good <sha> to git bisect bad <sha> to git checks out midpoint to test to git bisect good/bad to repeat to git bisect reset when done. Visualize progress: git bisect visualize shows the remaining commit range in gitk/log."},{heading:"Automated Bisect (git bisect run)",text:"Script must return exit code 0 (good) or non-zero (bad) 125 (cannot test skip). Example: git bisect run npm test. Or: git bisect run ./test.sh. The script should be deterministic and quick. Automating bisect makes finding the bad commit effortless."},{heading:"Bisect Strategies",text:"Wide range first: mark exact boundaries if known. Step size: bisect automatically computes. Skip commits that cannot be tested: git bisect skip (or exit 125 in script). Resume: git bisect replay <logfile>. Visualize: git bisect log for audit trail."},{heading:"Bisect with Fixed Bug",text:"If the bad commit cannot be reproduced (flakey test environment-specific) bisect may give false positives. Best practices: write a deterministic test script. Run the script multiple times at the found commit to confirm. Check merge commits: bisect may point to a merge if the bug entered via merge."}],interviewAnswer:"Git bisect is the most efficient tool for finding the source of a bug. Automate with git bisect run and a test script. Start with a wide range and narrow down. Always git bisect reset when done. For flakey tests mark 125 to skip. Bisect is invaluable for regression debugging.",interviewQuestions:[{question:"What is git bisect?",answer:"A binary search tool to find the commit that introduced a bug."},{question:"How does bisect work?",answer:"Mark a good commit (before bug) and a bad commit (after bug). Git binary searches by checking out midpoints."},{question:"How many steps for 1000 commits?",answer:"About 10 steps (log2(1000) ~ 10)."},{question:"What does git bisect run do?",answer:"Automates bisect with a script. Exit code 0 = good non-zero = bad 125 = skip."},{question:"How do you exit bisect?",answer:"git bisect reset. Returns HEAD to the original position."},{question:"What does exit code 125 mean in bisect run?",answer:"Cannot test this commit (skip it). Used for flakey tests or broken builds."},{question:"Can bisect skip commits?",answer:"Yes: git bisect skip or exit 125 in automated run."},{question:"How do you see bisect progress?",answer:"git bisect visualize shows remaining commits in gitk. git bisect log shows the full bisect history."},{question:"What happens when bisect finds multiple commits?",answer:"Bisect finds the first bad commit. If there are multiple bad commits in sequence it finds the first one."},{question:"What is a skip strategy in bisect?",answer:"If a commit cannot be built/tested skip it. Bisect will choose a different commit in the range."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Bisect</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Good</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">v1.0 (works)</text><line x1="110" y1="48" x2="130" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="140" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="190" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Midpoint</text><text x="190" y="54" text-anchor="middle" font-size="9" fill="#ddd">Test here</text><line x1="240" y1="48" x2="260" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="270" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="320" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Bad</text><text x="320" y="54" text-anchor="middle" font-size="9" fill="#ddd">v1.1 (broken)</text><rect x="10" y="70" width="130" height="30" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="75" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Step 2</text><text x="75" y="94" text-anchor="middle" font-size="9" fill="#ddd">Narrow range</text><rect x="10" y="110" width="130" height="30" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="75" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Step 3</text><text x="75" y="134" text-anchor="middle" font-size="9" fill="#ddd">Further narrow</text><rect x="10" y="150" width="130" height="30" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="75" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Found!</text><text x="75" y="174" text-anchor="middle" font-size="9" fill="#ddd">First bad commit</text><rect x="160" y="70" width="220" height="30" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="270" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Binary Search: O(log n)</text><text x="270" y="83" text-anchor="middle" font-size="9" fill="#ddd">1000 commits to ~10 steps. Test midpoint</text><text x="270" y="94" text-anchor="middle" font-size="9" fill="#ddd"> each iteration.</text><rect x="160" y="115" width="220" height="60" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="270" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Automated: git bisect run <script></text><text x="270" y="169" text-anchor="middle" font-size="9" fill="#ddd">Exit 0 = good 1-127 = bad 125 = skip</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Bisect: Binary search for the commit that intr</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">oduced a bug. Manual or automated with git bisect </text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">run.</text></svg>',codeExamples:[{title:"Manual Bisect Workflow",useCase:"Find bug commit step by step.",code:`# Start bisect
git bisect start

# Mark known good and bad
git bisect good v1.0
git bisect bad HEAD
# Bisecting: 342 revisions left to test

# Git checks out midpoint test it
# Test manually...

# If the bug is NOT present:
git bisect good
# Bisecting: 171 revisions left to test

# If the bug IS present:
git bisect bad
# Bisecting: 85 revisions left to test

# Repeat until found:
# abc123def456 is the first bad commit

# Exit bisect mode
git bisect reset`,description:"Manual bisect workflow: mark good/bad commits test midpoints bisect finds the first bad commit."},{title:"Automated Bisect with Test Script",useCase:"Let bisect run tests automatically.",code:`# Create a test script (test-bug.sh)
#!/bin/bash
npm ci --silent
npx playwright test tests/login.spec.js
# Exit code: 0 = good (bug fixed) non-zero = bad (bug present)

# Make executable
chmod +x test-bug.sh

# Run automated bisect
git bisect start
git bisect good v1.0
git bisect bad HEAD
git bisect run ./test-bug.sh

# Bisect runs the script at each commit
# Output:
# running ./test-bug.sh
# ... test output ...
# abc123def456 is the first bad commit

git bisect reset`,description:"Automated bisect with git bisect run executes a test script at each commit."},{title:"Skip Unbuildable Commits",useCase:"Handle commits that cannot be tested.",code:`#!/bin/bash
# test-with-skip.sh exit 125 for unbuildable commits

if ! npm ci --silent 2>/dev/null; then
  echo "Dependencies cannot be installed skipping"
  exit 125  # tell bisect to skip this commit
fi

if ! npm run build 2>/dev/null; then
  echo "Build failed skipping"
  exit 125
fi

npm test
# exit code 0 = good non-zero = bad

# Run bisect with skip-aware script
git bisect start HEAD v1.0
git bisect run ./test-with-skip.sh`,description:"Use exit 125 to skip commits that cannot be built or tested."},{title:"Bisect with Merge Commits",useCase:"Handle merge commits in bisect.",code:`# Bisect can point to merge commits
# Use --first-parent to avoid merge islands

# Bisect following only first parent
git bisect start --first-parent
git bisect good v1.0
git bisect bad HEAD

# Or skip merge commits manually
git bisect skip

# Verify the found commit:
git show <bad-commit> --stat
git log --oneline <bad-commit>~1..<bad-commit>

# Check if the bug was introduced by a merge:
git log --first-parent <bad-commit>~1..<bad-commit>`,description:"--first-parent avoids bisecting into merged branches keeping the search linear."},{title:"Bisect Log and Replay",useCase:"Save and restore bisect state.",code:`# Save the current bisect session
git bisect log > bisect-log.txt

# Later (or on another machine) replay it
git bisect replay bisect-log.txt
# Re-executes all the good/bad marks

# View bisect state
git bisect visualize
# Shows remaining commits in gitk

# Check bisect status
git bisect status
# Shows current bisect state`,description:"Bisect log/replay allows saving and sharing bisect sessions for collaboration."}],mcqQuestions:[{question:"What algorithm does git bisect use?",options:["Linear search","Binary search","Hash lookup","Bubble sort"],answer:1,explanation:"Git bisect uses binary search (O(log n)) to find the first bad commit."},{question:"How many bisect steps for ~1000 commits?",options:["~100","~50","~10","~3"],answer:2,explanation:"log2(1000) ~ 10 steps. Binary search halves the range each time."},{question:"How do you automate bisect?",options:["git bisect auto","git bisect run <script>","git bisect auto-run","git bisect go"],answer:1,explanation:"git bisect run automates bisect using a test script."},{question:"What does exit code 125 mean in bisect run?",options:["Good commit","Bad commit","Skip this commit","Abort bisect"],answer:2,explanation:"Exit 125 tells git bisect to skip the current commit (cannot test)."},{question:"How do you exit bisect mode?",options:["git bisect end","git bisect reset","git bisect stop","git bisect quit"],answer:1,explanation:"git bisect reset exits bisect and returns HEAD to its original position."},{question:"What is the benefit of bisect over manual searching?",options:["Easier to type","Logarithmically fewer steps","More accurate","Works offline"],answer:1,explanation:"Bisect finds the bad commit in O(log n) steps instead of O(n)."},{question:"Git Bisect — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Bisect — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Bisect — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Bisect — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{t as git_bisect};
