const e={id:"git-pull-request",title:"Pull Requests",difficulty:"beginner",estimatedMinutes:15,tldr:["A Pull Request (PR) is a request to merge changes from one branch into another typically from a feature branch into main.","PRs enable code review discussion and automated CI checks before changes are merged. They are the standard collaboration mechanism in Git platforms.","PR lifecycle: create from branch to add reviewers to run CI to address feedback to approve to merge (squash/rebase/merge) to delete branch.","Best practices: small focused PRs (<400 lines) descriptive titles and descriptions link to issues request specific reviewers and update from target branch."],laymanDefinition:"A Pull Request is like asking a chef to taste your dish before adding it to the menu. You cook your dish (feature) in a separate kitchen (branch). You bring it to the chef and say Please pull my dish into the menu (main). The chef tastes it (code review) checks the recipe (CI) and either approves or asks for changes (feedback).",deepDive:[{heading:"PR Description Best Practices",text:"Title: conventional commit format (feat: add payment). Description: what why and how. Include screenshots for UI changes. Link related issues: Closes #123. Checklist for tasks. Template: use PR templates (.github/PULL_REQUEST_TEMPLATE.md) for consistency."},{heading:"Code Review in PRs",text:"Purpose: catch bugs improve code quality share knowledge and ensure consistency. Review types: functionality (does it work) design (is it well-structured) style (naming conventions) testing (are tests adequate). Best practices: review within 24 hours focus on logic not formatting be constructive not critical."},{heading:"PR Size and Scope",text:"Best PR size: <400 lines changed. Larger PRs are harder to review (cognitive load). Split large features into multiple PRs. Each PR should do ONE thing (single responsibility). Exceptions: refactoring across many files (but explain in description). Use draft PRs for work-in-progress."},{heading:"CI/CD Integration with PRs",text:"CI runs on every PR: lint tests build security scan. Status checks must pass before merge. Required checks: minimum test coverage no lint errors no security vulnerabilities. Merge gates: require CI pass require X approvals require up-to-date branch."},{heading:"Merge Methods for PRs",text:"Squash merge: all commits become one commit (clean history). Merge commit: preserves all individual commits and branch structure. Rebase merge: rebases commits onto target then fast-forwards (linear history). Choose based on team convention: squash is most common for GitHub Flow."}],interviewAnswer:"PRs are the backbone of collaborative development. Write clear descriptions link to issues and keep PRs small (<400 lines). Review code constructively and promptly. Configure CI checks as merge requirements. Choose a merge method that matches your workflow. Delete branches after merge to keep the repo clean.",interviewQuestions:[{question:"What is a Pull Request?",answer:"A request to merge changes from one branch into another enabling code review and CI checks."},{question:"What are the benefits of PRs?",answer:"Code review knowledge sharing automated CI checks change tracking and collaboration."},{question:"What is a good PR size?",answer:"Under 400 lines changed. Smaller PRs are easier to review and less likely to have bugs."},{question:"What should a PR description include?",answer:"What changed why it changed how it was tested and links to related issues."},{question:"What is a draft PR?",answer:"A PR marked as work-in-progress. Cannot be merged. Used for early feedback."},{question:"How do you request a PR review?",answer:"Add reviewers via GitHub/GitLab UI. Use @mentions or auto-assign based on code ownership."},{question:"What is the recommended CI check for PRs?",answer:"Lint tests build security scan and minimum test coverage percentage."},{question:"What merge methods are available?",answer:"Squash merge merge commit and rebase merge. Squash is most common for clean history."},{question:"How do you update a PR branch?",answer:"git merge main or git rebase main in the feature branch then force push."},{question:"What happens after a PR is merged?",answer:"The feature branch should be deleted. CI/CD deploys if configured for the target branch."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Pull Requests</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Create Branch</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Feature work</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Open PR</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Describe changes</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CI Checks</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Lint test build</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Code Review</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Approve changes</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Merge</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Squash/merge/rebase</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Delete Branch</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Clean up</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pull Requests</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Code review and CI before merging.</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd"> Small focused PRs. Clear descript</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ions.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Pull Requests: Request to merge branches. Code rev</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">iew CI checks collaboration. Keep PRs small and fo</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">cused.</text></svg>',codeExamples:[{title:"Creating a PR (GitHub CLI)",useCase:"Create PR from command line.",code:`# Create a feature branch and push
git checkout -b feat/add-search
git add .
git commit -m "feat: add search functionality"
git push -u origin feat/add-search

# Create PR
gh pr create --fill --reviewer @team-lead --label enhancement
# --fill: use commit title+body as PR title+body

# Or with more options:
gh pr create \\
  --title "feat: add search functionality" \\
  --body "Implements full-text search using Elasticsearch" \\
  --base main \\
  --reviewer alice bob \\
  --assignee @me \\
  --label enhancement

# View PR in browser
gh pr view --web`,description:"Create PRs from CLI using GitHub CLI with reviewers labels and descriptions."},{title:"PR Description Template",useCase:"Standardized PR descriptions.",code:`# .github/PULL_REQUEST_TEMPLATE.md

## Description
Brief description of the changes.

## Type of Change
- [ ] feat: new feature
- [ ] fix: bug fix
- [ ] refactor: code restructuring
- [ ] test: adding tests
- [ ] chore: maintenance

## How Has This Been Tested?
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Related Issues
Closes #123

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/passed
- [ ] Documentation updated`,description:"PR template ensures consistent descriptions and helps reviewers understand changes."},{title:"Automated PR Checks (CI)",useCase:"Required checks before merge.",code:`name: PR Checks
on: pull_request
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run lint
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm test
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm audit --audit-level=high`,description:"CI pipeline runs lint tests build and security checks on every PR."},{title:"Auto-Merge PRs",useCase:"Automatically merge when conditions met.",code:`# GitHub: Enable auto-merge on PR
# gh pr merge --auto --squash

# Or via GitHub UI:
# PR page > Enable auto-merge > Choose method

# Auto-merge requirements:
# 1. Required reviews approved
# 2. All CI status checks pass
# 3. Branch is up to date with target
# 4. No merge conflicts

# Once all conditions met GitHub
# automatically merges the PR

# Useful for:
# - Dependabot PRs (auto-merge minor upgrades)
# - Automated releases
# - Team with fast review turnaround`,description:"Auto-merge reduces manual overhead for PRs that meet all requirements."},{title:"PR Labels and Milestones",useCase:"Organize and prioritize PRs.",code:`# Create labels for PR management
# gh label create --color 0e8a16 --description "New feature" enhancement
# gh label create --color d73a4a --description "Bug fix" bug
# gh label create --color 0075ca --description "Documentation" docs

# Common PR labels:
# - enhancement: new features
# - bug: bug fixes
# - breaking-change: requires attention
# - needs-review: ready for review
# - work-in-progress: draft PR
# - dependencies: Dependabot/automated

# Assign milestone for release tracking
# gh pr edit 42 --milestone "v2.0"

# View PRs by label
# gh pr list --label enhancement --state open`,description:"Labels and milestones organize PRs by type priority and release target."}],mcqQuestions:[{question:"What is a Pull Request?",options:["A server-side Git command","A request to merge branches with review","A type of Git branch","A Git configuration file"],answer:1,explanation:"A PR requests merging changes from one branch into another with code review and CI."},{question:"What is a good PR size?",options:["Under 50 lines","Under 400 lines","Over 1000 lines","Any size is fine"],answer:1,explanation:"PRs under 400 lines are easier to review and have fewer bugs."},{question:"What should a PR description include?",options:["Only the title","What why and how plus test info","No description needed","Random text"],answer:1,explanation:"PR descriptions should explain what changed why and how it was tested."},{question:"What is a draft PR?",options:["Unfinished PR for early feedback","A PR ready to merge","A closed PR","A PR with no description"],answer:0,explanation:"Draft PRs are work-in-progress and cannot be merged."},{question:"What merge method keeps the cleanest history?",options:["Merge commit","Squash merge","Rebase merge","All are the same"],answer:1,explanation:"Squash merge combines all commits into one creating the cleanest history."},{question:"What are required checks in PRs?",options:["Optional suggestions","CI checks that must pass before merge","Personal preferences","Browser compatibility tests"],answer:1,explanation:"Required CI checks must pass before a PR can be merged."},{question:"Pull Requests — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Pull Requests — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Pull Requests — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Pull Requests — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_pull_request};
