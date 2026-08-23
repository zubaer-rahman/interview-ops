const e={id:"git-code-review",title:"Code Review",difficulty:"intermediate",estimatedMinutes:15,tldr:["Code review is the systematic examination of source code by peers to find bugs improve code quality and share knowledge.","Reviews catch bugs early reduce technical debt enforce coding standards and spread domain knowledge across the team.","Types: formal inspection (structured meetings) lightweight (over-the-shoulder) tool-assisted (PR-based comments) and pair programming (real-time).","Best practices: review in small batches focus on logic not formatting be constructive and specific and prioritize understanding over criticism."],laymanDefinition:"Code review is like having a second chef taste your soup before serving. You taste it and think it is perfect. Another chef tastes it and says Needs more salt. They are not criticizing you they are making the soup better. Everyone learns what good soup tastes like. Over time the whole team makes better soup.",deepDive:[{heading:"What to Look for in Code Review",text:"Correctness: does the code work as intended. Design: is it well-structured and maintainable. Security: are there vulnerabilities (injection XSS auth issues). Performance: are there obvious inefficiencies. Testing: are tests adequate and meaningful. Documentation: are complex parts explained."},{heading:"Review Etiquette",text:"Be respectful: critique the code not the author. Be specific: explain why something is a problem and suggest alternatives. Be timely: review within 24 hours. Focus on what matters: logic > style. Use conventions consistently. Approve when satisfied request changes when needed comment when asking questions."},{heading:"Review Velocity",text:"Goal: review within 24 hours. Blocking: PRs waiting for review slows the team. Strategies: designate reviewers per area of expertise use auto-assign rotate reviewers enforce review SLAs. Small PRs are reviewed faster than large ones."},{heading:"Automated vs Human Review",text:"Let tools handle: formatting (Prettier) linting (ESLint) type checking (TypeScript) security scanning (Snyk). Humans focus on: logic correctness design decisions edge cases test quality and domain-specific concerns. Automated checks must pass before human review saves time."},{heading:"Security-Focused Code Review",text:"Check for: SQL injection (parameterized queries) XSS (output encoding) authentication/authorization flaws (RBAC) CSRF protection insecure data storage (encryption) dependency vulnerabilities (known CVEs) rate limiting and input validation. Security review is critical for auth payment and data handling code."}],interviewAnswer:"Code review is about team improvement not personal criticism. Focus on correctness design and security. Let automated tools handle formatting. Review promptly within 24 hours. Be specific constructive and respectful. Use checklists to ensure consistency. Review is a skill that improves with practice.",interviewQuestions:[{question:"What is code review?",answer:"Systematic examination of source code by peers to find bugs improve quality and share knowledge."},{question:"What are the main goals of code review?",answer:"Catch bugs improve code quality share knowledge enforce standards and reduce technical debt."},{question:"How quickly should reviews happen?",answer:"Within 24 hours. Fast reviews keep the team moving and prevent blocked PRs."},{question:"What should automated tools check?",answer:"Formatting linting type checking and security scanning. Humans focus on logic and design."},{question:"What is the difference between commenting and requesting changes?",answer:"Comment: asking a question or suggesting an option. Request changes: blocking issue that must be addressed."},{question:"How do you handle disagreement in code review?",answer:"Discuss respectfully. Use data and evidence. Escalate if necessary. Remember the goal is the best outcome for the project."},{question:"What is a code review checklist?",answer:"A list of common items to verify: correctness security testing edge cases error handling documentation."},{question:"How do you review security in code?",answer:"Check for injection auth bypass data exposure CSRF and dependency vulnerabilities."},{question:"What is the optimal PR size for review?",answer:"Under 400 lines. Larger PRs have exponentially more bugs per line."},{question:"What is over-the-shoulder review?",answer:"One developer looks at another developer screen discussing code in real-time. Informal and fast."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Code Review</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Author</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Submits PR</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Reviewer</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Reads code</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Feedback</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Comments changes</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Author Updates</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Address feedback</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Approve</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">PR approved</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Merge</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Changes integrated</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Code Review</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Peer review for quality. Focus on </text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">logic design and security. Automat</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ed tools for formatting.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Code Review: Peer examination of code. Catch bugs </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">improve quality share knowledge. Review within 24 </text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">hours.</text></svg>',codeExamples:[{title:"Code Review Checklist",useCase:"Systematic review process.",code:`# Code Review Checklist

## Functionality
- Does the code work as described?
- Are edge cases handled?
- Is error handling appropriate?

## Design
- Is the code well-structured?
- Does it follow SOLID principles?
- Are there appropriate abstractions?

## Security
- Is user input validated/sanitized?
- Are SQL queries parameterized?
- Is authentication enforced?
- Are secrets properly handled?

## Testing
- Are tests meaningful?
- Do tests cover edge cases?
- Do tests actually test the change?`,description:"Systematic checklist ensures consistent and thorough code reviews."},{title:"Review Comments Best Practices",useCase:"How to write good review comments.",code:`# Good: Specific and helpful
# "This endpoint is missing authentication.
# Consider adding the @authenticate middleware
# similar to other endpoints in this controller."

# Better with suggestion:
# "Suggestion: use Optional chaining to simplify
#  const user = await getUser(id);
#  if (!user) return null;
#  return user.profile.email;
# becomes:
#  return (await getUser(id))?.profile?.email;"

# Avoid: Vague or personal
# "This is wrong."  (unhelpful)
# "You always do this wrong." (personal)
# "Fix this." (no explanation)

# Use conventional comments:
# "nitpick: consider renaming for clarity"
# "issue: this will fail if input is null"
# "thought: have you considered using X?"`,description:"Constructive review comments are specific helpful and focus on the code not the author."},{title:"Auto-Assign Reviewers (CODEOWNERS)",useCase:"Automate reviewer assignment.",code:`# .github/CODEOWNERS
# Automatically assigns reviewers based on file paths

# Default reviewers for all files
* @team-lead @senior-dev

# Frontend code reviewers
/src/components/ @frontend-team
/src/styles/ @frontend-team

# Backend code reviewers
/src/api/ @backend-team
/src/models/ @backend-team

# Critical files: require specific review
/src/config/security.js @security-officer
/package.json @tech-lead

# Documentation
*.md @docs-team

# Infrastructure
/deploy/ @devops-team
Dockerfile @devops-team`,description:"CODEOWNERS auto-assigns reviewers based on changed files ensuring the right people review."},{title:"Semantic PR Review (AI-Assisted)",useCase:"Enhanced review with automation.",code:`# GitHub Actions: AI code review
name: AI Code Review
on: pull_request
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: AI Review
        uses: openai/code-review-action@v1
        with:
          openai-api-key: \${{ secrets.OPENAI_API_KEY }}
          github-token: \${{ secrets.GITHUB_TOKEN }}

# Also use static analysis tools:
# - CodeQL: security analysis
# - SonarQube: code quality
# - DeepSource: automated review

# These tools find issues before
# human review saving reviewer time`,description:"AI-assisted and static analysis tools augment human review by catching common issues automatically."},{title:"Reviewing Tests in PR",useCase:"Evaluate test quality during review.",code:`# Questions to ask when reviewing tests:

# 1. Does the test test the change?
#    (not unrelated functionality)

# 2. Are edge cases covered?
#    - Empty inputs
#    - Null/undefined values
#    - Maximum values
#    - Network errors

# 3. Are there integration tests?
#    Unit test: function works in isolation
#    Integration: components work together

# 4. Are tests deterministic?
#    (no random data that fails intermittently)

# 5. Is the test readable?
#    AAA pattern: Arrange Act Assert
#    test('should return user when found', () => {
#      // Arrange
#      const id = '123';
#      // Act
#      const result = getUser(id);
#      // Assert
#      expect(result.id).toBe(id);
#    });`,description:"Test review ensures meaningful coverage and reliable CI results."}],mcqQuestions:[{question:"What is code review?",options:["Running automated tests","Peer examination of source code","Writing documentation","Deploying to production"],answer:1,explanation:"Code review is systematic peer examination of code for bugs quality and knowledge sharing."},{question:"What should automated tools handle?",options:["Logic correctness","Formatting and linting","Design decisions","Edge case handling"],answer:1,explanation:"Automated tools handle formatting linting type checking and security scanning."},{question:"How fast should reviews happen?",options:["Within a week","Within 24 hours","Within an hour","No deadline"],answer:1,explanation:"Reviews should happen within 24 hours to keep the team moving."},{question:"What is the optimal PR size for review?",options:["Under 100 lines","Under 400 lines","Under 1000 lines","Any size"],answer:1,explanation:"PRs under 400 lines are optimal for effective review."},{question:"What does CODEOWNERS do?",options:["Tracks code ownership","Auto-assigns reviewers","Locks files","Generates documentation"],answer:1,explanation:"CODEOWNERS auto-assigns reviewers based on which files are changed in a PR."},{question:"What should human reviewers focus on?",options:["Code formatting","Logic design and security","Variable naming","Comment style"],answer:1,explanation:"Humans focus on logic correctness design decisions security and domain concerns."},{question:"Code Review — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Code Review — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Code Review — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Code Review — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_code_review};
