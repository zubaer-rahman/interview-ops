const e={id:"git-submodule",title:"Git Submodules",difficulty:"intermediate",estimatedMinutes:15,tldr:["Git submodules allow you to include one Git repository as a subdirectory of another Git repository while keeping their histories separate.","Useful for: shared libraries common components external dependencies you manage or splitting a monolith while maintaining connections.","Submodules track a specific commit in the external repo not a branch. The parent repo pins the submodule version (detached HEAD in submodule).","Challenges: complexity of updates need to manually track submodule commits cloning requires --recurse-submodules switching branches can be tricky."],laymanDefinition:"Git submodules are like a bookshelf in your house. Your house (parent repo) has a designated spot for a specific book (submodule). The book is a separate entity with its own edition author and content. The bookshelf just says I expect the 3rd edition here. If someone updates the book you must consciously decide to update your shelf reference.",deepDive:[{heading:"How Submodules Work",text:"Parent repo stores a reference (commit SHA) to the submodule repo in .gitmodules and .git/config. git submodule update checks out the pinned commit in the submodule directory. Submodule is in detached HEAD state. Changes to submodule must be committed separately in both repos."},{heading:"Adding and Cloning Submodules",text:"Add: git submodule add https://github.com/user/lib.git lib/. Cloning a project with submodules: git clone --recurse-submodules <url>. If already cloned: git submodule update --init --recursive. The --recursive flag handles nested submodules."},{heading:"Updating Submodules",text:"Pull latest from submodule remote branch: cd lib && git pull origin main. Then commit the new submodule reference in parent repo. Or: git submodule update --remote [submodule-name] fetches latest commit from the branch specified in .gitmodules. Always commit the parent reference update."},{heading:"Submodule Workflows",text:"Consuming: use submodules at fixed versions update intentionally. Contributing: fork submodule make changes push update parent reference. Developing together: work on parent and submodule simultaneously using --recurse-submodules for git commands. Status: git submodule status shows pinned commit."},{heading:"Submodule Alternatives",text:"Package managers: npm pip Maven (better for most dependencies). Git subtree: merges external repo into your repo (no detached HEAD). Git worktree: multiple working directories of same repo. Monorepo: single repo for all code. For most modern projects package managers are preferred over submodules."}],interviewAnswer:"Use submodules sparingly. For most dependencies use a package manager. Submodules add complexity: detached HEAD manual updates clone friction. If you use them document the workflow use --recurse-submodules in CI and consider Git subtree as a simpler alternative for tightly coupled projects.",interviewQuestions:[{question:"What is a Git submodule?",answer:"A reference to another Git repository embedded as a subdirectory keeping the histories independent."},{question:"How does a parent repo track a submodule?",answer:"By storing a specific commit SHA of the submodule repo. The submodule is at a pinned version."},{question:"How do you clone a repo with submodules?",answer:"git clone --recurse-submodules <url> or git clone then git submodule update --init --recursive."},{question:"How do you update a submodule to latest?",answer:"cd submodule && git pull origin main then commit the updated reference in the parent repo."},{question:"What state is a submodule in?",answer:"Detached HEAD it checks out the pinned commit not a branch."},{question:"What is .gitmodules?",answer:"A file in the parent repo that stores the mapping of submodule paths to URLs."},{question:"What is the difference between submodule and subtree?",answer:"Submodule: separate repo reference. Subtree: merges external code into your repo (no external reference needed)."},{question:"How do you add a submodule?",answer:"git submodule add <repository-url> <path>"},{question:"Does git submodule update --remote follow a branch?",answer:"Yes it pulls the latest commit from the branch specified in .gitmodules (default: main/master)."},{question:"What is a common submodule pitfall?",answer:"Forgetting to push the submodule changes before pushing the parent reference update breaking the parent for others."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Submodules</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Parent Repo</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Your application</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Submodule</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">External library</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">.gitmodules</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">URL + path mapping</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pinned Commit</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">abc123def456</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Update</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">New commit ref</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Submodules</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Embed external repos as subdirecto</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">ries. Separate histories. Pinned c</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ommits.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Submodules: Embed external repos at pinned com</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">mits. Useful for shared libraries complex dependen</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">cies.</text></svg>',codeExamples:[{title:"Adding and Cloning Submodules",useCase:"Basic submodule operations.",code:`# Add a submodule
git submodule add https://github.com/company/utils.git src/utils
# Creates .gitmodules and clones src/utils

# Check .gitmodules contents
cat .gitmodules
# [submodule "src/utils"]
#   path = src/utils
#   url = https://github.com/company/utils.git

# Clone a project with submodules
git clone --recurse-submodules https://github.com/company/app.git

# If you already cloned without --recurse-submodules
git submodule update --init --recursive`,description:"Adding a submodule and cloning projects that use submodules."},{title:"Updating Submodules",useCase:"Pull latest from submodule.",code:`# Method 1: manual update
cd src/utils
git checkout main
git pull origin main
cd ../..
git add src/utils
git commit -m "chore: update utils submodule"

# Method 2: automatic update
git submodule update --remote src/utils
# Fetches latest from branch in .gitmodules
git add src/utils
git commit -m "chore: update utils submodule"

# Update all submodules at once
git submodule update --remote
git add .
git commit -m "chore: update all submodules"`,description:"Update submodules to their latest commits using manual or --remote approach."},{title:"Working on Submodule Changes",useCase:"Develop and push submodule changes.",code:`# Work on parent and submodule together
# Start: parent depends on old commit in utils

cd src/utils
git checkout main
git pull origin main

# Make changes in submodule
echo "function newFeature() {}" >> index.js
git add .
git commit -m "feat: add newFeature"
git push origin main

# Go back to parent
cd ../..
git add src/utils
git commit -m "feat: integrate newFeature from utils"

# IMPORTANT: push parent AFTER submodule push
# Otherwise others get broken parent reference`,description:"Workflow for developing submodule and updating parent reference."},{title:"Submodule in CI/CD",useCase:"Handle submodules in pipelines.",code:`# GitHub Actions with submodules
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: recursive
          token: \${{ secrets.GH_PAT }}
      - run: npm ci
      - run: npm test

# For private submodules use PAT or SSH key:
# - uses: actions/checkout@v3
#   with:
#     submodules: recursive
#     ssh-key: \${{ secrets.SSH_PRIVATE_KEY }}`,description:"CI/CD pipeline configuration for repositories with submodules."},{title:"Submodule Branch Tracking",useCase:"Follow a specific branch.",code:`# Configure submodule to track a branch
git config -f .gitmodules submodule.src/utils.branch main

# Or during initial add:
git submodule add -b main https://github.com/company/utils.git src/utils

# Now update --remote follows the branch
git submodule update --remote src/utils
# Fetches latest commit on main branch

# .gitmodules will have:
# [submodule "src/utils"]
#   path = src/utils
#   url = https://github.com/company/utils.git
#   branch = main`,description:"Configure submodules to track a branch for automatic updates with --remote."}],mcqQuestions:[{question:"What is a Git submodule?",options:["A built-in Git library","An embedded repo reference","A Git command alias","A remote backup"],answer:1,explanation:"A submodule embeds another Git repository at a pinned commit."},{question:"How does a parent repo track a submodule?",options:["By branch name","By commit SHA","By tag name","By file content hash"],answer:1,explanation:"The parent repo stores the specific commit SHA of the submodule."},{question:"How do you clone a repo with submodules?",options:["git clone --recursive","git clone --all","git clone --deep","git clone --full"],answer:0,explanation:"Use git clone --recurse-submodules or git submodule update --init after cloning."},{question:"What state is a submodule checked out to?",options:["On main branch","Detached HEAD","On develop branch","On a tag"],answer:1,explanation:"Submodules are checked out in detached HEAD state at the pinned commit."},{question:"What file stores submodule configuration?",options:[".gitignore",".gitmodules",".gitattributes","package.json"],answer:1,explanation:".gitmodules stores the URL and path mapping for submodules."},{question:"What is the main risk with submodules?",options:["Security vulnerabilities","Out-of-sync references breaking builds","Slow performance","Disk space usage"],answer:1,explanation:"If submodule changes are pushed before the parent updates its reference others get broken builds."},{question:"Git Submodules — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Submodules — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Submodules — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Submodules — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_submodule};
