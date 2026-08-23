const e={id:"git-release-mgmt",title:"Release Management",difficulty:"intermediate",estimatedMinutes:15,tldr:["Release management is the process of planning scheduling and controlling software builds through different stages to production.","Key elements: semantic versioning (MAJOR.MINOR.PATCH) release branches release notes changelogs and version bumping in CI/CD.","Release lifecycle: feature development to release branch to QA/stabilization to production release to hotfix if needed. Each release is tagged and immutable.","Tools: GitHub Releases GitLab Releases semantic-release (automated) release-drafter (auto-changelog). Releases should be automated version-bump merge to main and tag."],laymanDefinition:"Release management is like a train schedule. Features are passengers waiting at the station (develop branch). Every two weeks a train (release branch) departs. Tickets are checked (QA testing). Passengers who miss the train wait for the next one. Sometimes an emergency express train (hotfix) runs on a special schedule. Each train has a unique number (version tag).",deepDive:[{heading:"Semantic Versioning (SemVer)",text:"MAJOR: breaking changes (v2.0.0). MINOR: new features backward compatible (v1.1.0). PATCH: bug fixes backward compatible (v1.0.1). Pre-release: v1.0.0-beta.1 v1.0.0-rc.1. Build metadata: v1.0.0+build.456. Version defined in package.json or equivalent."},{heading:"Release Branch Strategy",text:"Git Flow: release/v1.2 branched from develop. Only bug fixes and release tasks (no new features). Merged to main (tagged) and develop. GitHub Flow: no release branches. Tag on main after merge. Trunk-Based: release branches from main for stabilization."},{heading:"Changelog Generation",text:"Conventional commits enable automated changelog. feat: adds to Features section. fix: adds to Bug Fixes. breaking changes: highlighted. Tools: conventional-changelog release-drafter semantic-release. Format: Keep a Changelog. Each release links to diff and release notes."},{heading:"Release Automation (semantic-release)",text:"Fully automated release process. Analyzes commits since last release. Determines next version (major/minor/patch). Generates changelog. Creates Git tag. Publishes to npm/registry. Creates GitHub Release. Requires conventional commit format."},{heading:"Hotfix Management",text:"Hotfix branch from main (or production tag). Fix the critical bug. Merge back to main (tag new patch version). Merge back to develop (if using Git Flow). Hotfixes skip the normal release cycle. Version bump: patch version (v1.0.1). Hotfixes should be rare; they indicate release process improvement needed."}],interviewAnswer:"Release management brings predictability to shipping software. Use semantic versioning. Automate version bumps and changelogs with conventional commits and semantic-release. Use release branches for stabilization. Hotfixes should be rare. A good release process reduces stress and increases confidence in deployments.",interviewQuestions:[{question:"What is release management?",answer:"Planning scheduling and controlling software builds through stages to production."},{question:"What is semantic versioning?",answer:"MAJOR.MINOR.PATCH: breaking changes new features backward compatible bug fixes backward compatible."},{question:"What is a release branch?",answer:"A branch for stabilizing a release. Only bug fixes and release tasks. Merged to main and develop."},{question:"What are release notes?",answer:"Documentation accompanying a release listing features fixes and breaking changes."},{question:"What is semantic-release?",answer:"An automated release tool that determines version generates changelog creates tag and publishes."},{question:"What is a changelog?",answer:"A curated list of notable changes for each version of a project."},{question:"What is a hotfix?",answer:"An urgent fix for a production issue. Branched from main merged back and tagged as patch version."},{question:"What triggers a MAJOR version bump?",answer:"Breaking changes that are not backward compatible."},{question:"What triggers a MINOR version bump?",answer:"New features that are backward compatible."},{question:"What triggers a PATCH version bump?",answer:"Bug fixes that are backward compatible."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Release Management</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Feature Dev</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Develop branch</text><line x1="110" y1="48" x2="130" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="140" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="190" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Release Branch</text><text x="190" y="54" text-anchor="middle" font-size="9" fill="#ddd">Stabilize QA</text><line x1="240" y1="48" x2="260" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tag v1.0.0</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Immutable marker</text><rect x="140" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="190" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deploy Prod</text><text x="190" y="89" text-anchor="middle" font-size="9" fill="#ddd">Release to users</text><rect x="10" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Changelog</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">Document changes</text><rect x="140" y="105" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="190" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Hotfix</text><text x="190" y="124" text-anchor="middle" font-size="9" fill="#ddd">Patch production</text><rect x="260" y="35" width="220" height="150" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="370" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Release Management</text><text x="370" y="157" text-anchor="middle" font-size="9" fill="#ddd">Semantic versioning release branches cha</text><text x="370" y="168" text-anchor="middle" font-size="9" fill="#ddd">ngelogs hotfixes. Automated with semanti</text><text x="370" y="179" text-anchor="middle" font-size="9" fill="#ddd">c-release and conventional commits.</text><text x="100" y="210" font-size="9" fill="#666" text-anchor="middle">Release Management: Plan schedule control releases</text><text x="100" y="222" font-size="9" fill="#666" text-anchor="middle">. Semantic versioning release branches changelogs </text><text x="100" y="234" font-size="9" fill="#666" text-anchor="middle">hotfix automation.</text></svg>',codeExamples:[{title:"Semantic Release Configuration",useCase:"Automated release setup.",code:`// release.config.js
module.exports = {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ["@semantic-release/npm", { npmPublish: true }],
    "@semantic-release/github",
    ["@semantic-release/git", {
      assets: ['package.json', 'CHANGELOG.md'],
      message: "chore(release): \${nextRelease.version} [skip ci]"
    }]
  ]
};

# CI step:
# npx semantic-release`,description:"semantic-release config: analyzes commits bumps version generates changelog creates tag and GitHub release."},{title:"Changelog Generation (conventional-changelog)",useCase:"Auto-generate changelog.",code:`# Install conventional-changelog-cli
# npm install -g conventional-changelog-cli

# Generate changelog from conventional commits
conventional-changelog -p angular -i CHANGELOG.md -s

# Output format:
# # Changelog
# 
# ## [1.2.0] - 2024-03-15
# 
# ### Features
# * add payment gateway ([a1b2c3d])
# * add search functionality ([b2c3d4e])
# 
# ### Bug Fixes
# * fix login timeout ([c3d4e5f])
# * fix memory leak ([d4e5f6g])
# 
# ### Breaking Changes
# * upgrade to API v2 ([e5f6g7h])

# Use release-drafter for GitHub:
# .github/release-drafter.yml`,description:"conventional-changelog generates release notes automatically from conventional commit messages."},{title:"GitHub Release Workflow",useCase:"Automated release on tag push.",code:`name: Create Release
on:
  push:
    tags:
      - "v*"

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4

      - name: Generate release notes
        id: notes
        run: |
          PREV_TAG=$(git describe --tags --abbrev=0 HEAD^ 2>/dev/null || echo '')
          NOTES=$(conventional-changelog -p angular)
          echo "notes<<EOF" >> $GITHUB_OUTPUT
          echo "$NOTES" >> $GITHUB_OUTPUT
          echo "EOF" >> $GITHUB_OUTPUT

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v1
        with:
          body: \${{ steps.notes.outputs.notes }}
          draft: false
          prerelease: \${{ contains(github.ref, '-') }}`,description:"GitHub Actions workflow that creates a release with auto-generated notes when a version tag is pushed."},{title:"Release Branch Workflow (Git Flow)",useCase:"Manage release branches.",code:`# Start a release
git checkout develop
git checkout -b release/v1.2.0

# Stabilize (only bug fixes)
git commit -m "fix: correct payment calculation"
git commit -m "fix: update API rate limit"

# Version bump in release branch
echo "v1.2.0" > VERSION
git add VERSION
git commit -m "chore: bump version to 1.2.0"

# Merge to main and tag
git checkout main
git merge --no-ff release/v1.2.0
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.2.0

# Delete release branch
git branch -d release/v1.2.0`,description:"Git Flow release branch workflow: branch stabilize merge to main tag and merge back to develop."},{title:"Hotfix Workflow",useCase:"Emergency production fix.",code:`# From main (or production tag)
git checkout main
git checkout -b hotfix/critical-security

# Fix the critical bug
git commit -m "fix: patch SQL injection vulnerability"

# Merge to main and tag patch
git checkout main
git merge --no-ff hotfix/critical-security
git tag -a v1.0.1 -m "Hotfix v1.0.1"
git push origin main --tags

# If using Git Flow merge to develop too
git checkout develop
git merge --no-ff hotfix/critical-security

# The hotfix version bump is a PATCH
# v1.0.0 -> v1.0.1 (not v1.1.0)`,description:"Hotfix workflow: branch from main fix merge to main tag patch version and merge back to develop."}],mcqQuestions:[{question:"What is semantic versioning?",options:["Random version numbers","MAJOR.MINOR.PATCH with meaning","Date-based versions","Build numbers only"],answer:1,explanation:"SemVer defines version meaning: MAJOR (breaking) MINOR (feature) PATCH (fix)."},{question:"What is a release branch?",options:["Branch for daily work","Stabilization branch before release","Branch for experiments","Branch for documentation"],answer:1,explanation:"Release branch stabilizes a release with only bug fixes before merging to main."},{question:"What does semantic-release do?",options:["Manual release process","Automated version bump changelog tag release","Code formatting","Test runner"],answer:1,explanation:"semantic-release fully automates the release process from commit analysis to publishing."},{question:"What triggers a MAJOR version?",options:["Bug fixes","Breaking changes","New features","Documentation updates"],answer:1,explanation:"MAJOR version increments when backward-incompatible changes are introduced."},{question:"What is a hotfix?",options:["A new feature","An urgent production bug fix","A code refactor","A version upgrade"],answer:1,explanation:"Hotfix is an urgent fix for a production issue branched from main and tagged as patch."},{question:"What should release notes include?",options:["Only version number","Features fixes and breaking changes","Full commit log","Random updates"],answer:1,explanation:"Release notes should summarize features bug fixes and breaking changes for the release."},{question:"Release Management — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Release Management — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Release Management — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Release Management — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as git_release_mgmt};
