const e={id:"git-hooks",title:"Git Hooks",difficulty:"intermediate",estimatedMinutes:15,tldr:["Git hooks are custom scripts that run automatically at specific points in the Git lifecycle (commit push merge etc.).","Client-side hooks: pre-commit pre-push post-commit post-merge (run on developer machine). Server-side hooks: pre-receive post-receive update (run on remote repository).","Typical uses: lint checking before commits test running before push commit message validation code formatting preventing secrets in code.","Hooks are stored in .git/hooks/ but are not tracked by Git (not part of repository). Use tools like Husky to manage and share hooks with the team."],laymanDefinition:"Git hooks are like airport security checkpoints. Before your commit can board (be saved) it must pass through pre-commit security: luggage check (linting) ID verification (author check) and ticket validation (message format). Pre-push is the final boarding gate: all tests must pass before takeoff.",deepDive:[{heading:"Client-Side Hook Types",text:"pre-commit: runs before commit message is created. Can abort commit. prepare-commit-msg: runs before editor opens for commit message. commit-msg: runs after message is written (validate format). post-commit: runs after commit (notifications). pre-push: runs before push (tests). post-merge: after merge (install new deps)."},{heading:"Server-Side Hook Types",text:"pre-receive: runs on remote when push is received. Can reject entire push. update: runs for each branch being pushed. Can reject specific branches. post-receive: runs after push is accepted (CI trigger deploy notifications). Used for policy enforcement code review gates deployment triggers."},{heading:"Pre-Commit Hook Pattern",text:"Typically: stash unstaged changes to run linters/formatters on staged files to check for issues to if issues abort with message to restore unstaged changes. Tools: lint-staged runs linters only on staged files. Pre-commit frameworks: husky + lint-staged is the modern standard for Node.js."},{heading:"Commit Message Hooks",text:'commit-msg hook validates message format. Enforce: conventional commits (type(scope): message) max line length (72 chars) no WIP ticket reference required. Pattern matching: if [[ ! "$MSG" =~ ^(feat|fix|docs|chore): ]] to reject. Great for maintaining clean commit history.'},{heading:"Sharing Hooks with the Team",text:"Hooks are in .git/hooks/ (not tracked). Solution: store hooks in .githooks/ directory. Configure core.hooksPath: git config core.hooksPath .githooks. Or use Husky: manages hooks via package.json scripts auto-installs on npm install. For polyglot projects: scripts/hooks/ directory with README or install script."}],interviewAnswer:"Git hooks automate quality checks and enforce team conventions. Use Husky + lint-staged for client-side hooks. Start with pre-commit (linting) and pre-push (tests). Validate commit messages with commit-msg hook. Server-side hooks enforce policies. Keep hooks fast slow hooks frustrate developers.",interviewQuestions:[{question:"What are Git hooks?",answer:"Custom scripts that run automatically at specific Git lifecycle events (commit push merge)."},{question:"Where are hooks stored?",answer:"In .git/hooks/ (local not tracked by Git). Can be configured via core.hooksPath."},{question:"What is a pre-commit hook used for?",answer:"Running linters formatters and checks before a commit is created. Can abort on failure."},{question:"What is a pre-push hook used for?",answer:"Running tests builds or security scans before pushing to remote."},{question:"How do you share hooks with the team?",answer:"Use Husky (npm) store hooks in .githooks/ directory or use a hooks management tool."},{question:"What is the commit-msg hook?",answer:"Validates the commit message format (length conventional commit compliance ticket reference)."},{question:"What are server-side hooks?",answer:"pre-receive update post-receive run on the remote repository during push."},{question:"What is the post-receive hook used for?",answer:"CI/CD triggers deployment notifications after a push is accepted."},{question:"What is Husky?",answer:"A modern tool for managing Git hooks via package.json that auto-installs hooks on npm install."},{question:"What is the danger of slow hooks?",answer:"Developers may bypass hooks (git commit --no-verify). Keep hooks fast (<1 second)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Hooks</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">pre-commit</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Lint + format</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">commit-msg</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Validate message</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">post-commit</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Notification</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">pre-push</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Run tests</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">post-merge</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Install deps</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server Hooks</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Policy + deploy</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Hooks</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Automated scripts at Git lifecycle</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd"> events. Quality gates formatting </text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">validation.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Hooks: Automated scripts at commit/push/merge </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">events. Enforce quality conventions and policies.</text></svg>',codeExamples:[{title:"Pre-Commit Hook with Husky + lint-staged",useCase:"Modern lint-on-commit setup.",code:`# package.json
# Install: npm install --save-dev husky lint-staged

{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js ts}": ["eslint --fix" "prettier --write"],
    "*.md": ["prettier --write"]
  },
  "devDependencies": {
    "husky": "^8.0.0",
    "lint-staged": "^13.0.0"
  }
}

# Create hook:
# npx husky add .husky/pre-commit "npx lint-staged"

# .husky/pre-commit:
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged`,description:"Husky + lint-staged setup: auto-format and lint only staged files on commit."},{title:"Pre-Push Hook (Run Tests)",useCase:"Prevent pushing broken code.",code:`#!/bin/bash
# .husky/pre-push

echo "Running tests before push..."

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Push aborted."
  exit 1
fi

echo "All tests passed. Push allowed."

# To bypass: git push --no-verify
# Use sparingly only in emergencies`,description:"Pre-push hook runs tests and aborts the push if tests fail."},{title:"Commit Message Validation",useCase:"Enforce conventional commits.",code:`#!/bin/bash
# .husky/commit-msg

MSG_FILE=$1
MSG=$(cat "$MSG_FILE")

# Conventional commit pattern
PATTERN="^(feat|fix|docs|style|refactor|test|chore|ci)(\\\\(.+\\\\))?: .+"

if [[ ! "$MSG" =~ $PATTERN ]]; then
  echo "Error: Invalid commit message format"
  echo "Must match: type(scope): description"
  echo "Types: feat fix docs style refactor test chore ci"
  echo "Example: feat(login): add OAuth support"
  exit 1
fi

# Check line length
MSG_LENGTH=$(echo "$MSG" | wc -c)
if [ "$MSG_LENGTH" -gt 72 ]; then
  echo "Error: Commit message too long (>72 chars)"
  exit 1
fi`,description:"Enforce conventional commit format and line length with commit-msg hook."},{title:"Prevent Secrets in Commits",useCase:"Block secrets from being committed.",code:`#!/bin/bash
# .husky/pre-commit prevent secrets

# Check for common secret patterns
SECRET_PATTERNS=(
  "AKIA[0-9A-Z]{16}"  # AWS access key
  "ghp_[a-zA-Z0-9]{36}"  # GitHub PAT
  "-----BEGIN.*PRIVATE KEY-----"  # Private key
  "sk_live_[a-zA-Z0-9]+"  # Stripe live key
  "xox[barp]-[a-zA-Z0-9-]+"  # Slack token
)

FILES=$(git diff --cached --name-only | grep -v '^\\.env\\.example$')

for PATTERN in "\${SECRET_PATTERNS[@]}"; do
  if git diff --cached -G"$PATTERN" -- "$FILES" | grep -q "$PATTERN"; then
    echo "Error: Potential secret detected in staged files!"
    echo "Pattern: $PATTERN"
    exit 1
  fi
done`,description:"Pre-commit hook scans staged files for API keys tokens and private keys."},{title:"Post-Merge Hook (Install Dependencies)",useCase:"Auto-install after pull.",code:`#!/bin/bash
# .husky/post-merge

# Check if package.json changed
CHANGED=$(git diff HEAD@{1} HEAD --name-only)

if echo "$CHANGED" | grep -q "package.json"; then
  echo "package.json changed installing dependencies"
  npm install
fi

if echo "$CHANGED" | grep -q "composer.json"; then
  composer install
fi

if echo "$CHANGED" | grep -q "Gemfile"; then
  bundle install
fi`,description:"Post-merge hook detects dependency file changes and auto-installs."}],mcqQuestions:[{question:"What are Git hooks?",options:["Git configuration files","Scripts that run at Git events","Git command aliases","Remote repository settings"],answer:1,explanation:"Git hooks are scripts triggered by Git lifecycle events."},{question:"Where are hooks stored locally?",options:["In the repository root","In .git/hooks/","In node_modules/","In GitHub settings"],answer:1,explanation:"Hooks are in .git/hooks/ (not tracked by Git)."},{question:"What is the most common pre-commit use?",options:["Deploy to production","Run linters on staged files","Create a new branch","Delete remote branches"],answer:1,explanation:"Pre-commit hooks typically run linters and formatters on staged changes."},{question:"What tool manages hooks via package.json?",options:["npm","Husky","Webpack","Babel"],answer:1,explanation:"Husky manages Git hooks through package.json configuration."},{question:"How do you bypass hooks?",options:["git commit --force","git commit --no-verify","git commit --skip-hooks","Cannot bypass"],answer:1,explanation:"Use --no-verify (or -n) to bypass client-side hooks temporarily."},{question:"What hook validates commit messages?",options:["pre-commit","commit-msg","prepare-commit-msg","post-commit"],answer:1,explanation:"The commit-msg hook validates the commit message after it is written."},{question:"Git Hooks — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Hooks — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Hooks — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Hooks — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_hooks};
