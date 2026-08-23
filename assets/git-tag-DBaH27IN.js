const t={id:"git-tag",title:"Git Tags",difficulty:"beginner",estimatedMinutes:10,tldr:["Git tags are references that point to specific commits typically used to mark release points (v1.0 v2.0 v1.0.1-rc1).","Two types: lightweight (just a pointer to a commit) and annotated (stored as full objects with message author date GPG signature).","Annotated tags are recommended for releases: they include the tagger name email date message and can be GPG-signed for verification.","Tags are not automatically pushed to remote. Must explicitly push: git push origin --tags or git push origin <tag-name>."],laymanDefinition:"Git tags are like sticky notes on a timeline. You mark important points: Version 1.0 released here Version 1.1 released here. Annotated tags are sticky notes with detailed notes attached. Lightweight tags are just a colored dot. You can go back to any tagged point easily.",deepDive:[{heading:"Lightweight vs Annotated Tags",text:'Lightweight: git tag v1.0. Just a name pointing to a commit. No metadata. Annotated: git tag -a v1.0 -m "Release v1.0". Stored as a full Git object with message date tagger optional GPG signature. Always use annotated tags for releases.'},{heading:"Tag Naming Conventions",text:"Semantic versioning: v1.2.3 (major.minor.patch). Pre-release: v1.2.3-rc1 v1.2.3-beta. Version prefix: v (v1.0) or no prefix (1.0). Leading v is conventional. Build metadata: v1.2.3+build.456. Suffix: v1.2.3-lts. Consistency within project is most important."},{heading:"GPG-Signed Tags",text:'Annotated tags can be GPG-signed: git tag -s v1.0 -m "Release v1.0". Provides cryptographic verification that the tag was created by you. Verification: git tag -v v1.0. Requires GPG key setup. Signed tags ensure release authenticity.'},{heading:"Tag Operations",text:'Create: git tag -a v1.0 -m "Release". List: git tag git tag -l "v1.*". Show: git show v1.0. Delete local: git tag -d v1.0. Delete remote: git push --delete origin v1.0. Push: git push origin v1.0 git push origin --tags. Checkout: git checkout v1.0 (detached HEAD).'},{heading:"Tags in CI/CD",text:"Tags trigger release pipelines. GitHub Actions: on push tags. GitLab CI: only: tags. Semantic versioning from tags: git describe --tags --abbrev=0. Auto-build on tag push. Tags vs branches for releases: tags are immutable branches can move. Always tag after release merge to main."}],interviewAnswer:"Use annotated tags for all releases. Follow semantic versioning (v1.2.3). GPG-sign tags for security. Push tags explicitly they do not auto-push with commits. Tags are immutable references once set they should not be deleted or moved unless absolutely necessary.",interviewQuestions:[{question:"What is a Git tag?",answer:"A reference pointing to a specific commit typically used to mark release points."},{question:"What are the two types of Git tags?",answer:"Lightweight (just a pointer) and Annotated (full object with message author date signature)."},{question:"Which tag type should you use for releases?",answer:"Annotated tags (-a flag) they include metadata and can be GPG-signed."},{question:"How do you push tags to remote?",answer:"git push origin <tag-name> or git push origin --tags (pushes all tags)."},{question:"How do you delete a local tag?",answer:"git tag -d v1.0"},{question:"How do you delete a remote tag?",answer:"git push --delete origin v1.0 or git push origin :refs/tags/v1.0"},{question:"What is a GPG-signed tag?",answer:"An annotated tag signed with a GPG key for cryptographic verification of authenticity."},{question:"How do you list all tags matching a pattern?",answer:'git tag -l "v1.*"'},{question:"Can tags be moved?",answer:"Technically yes (git tag -f) but tags should be treated as immutable. Avoid moving release tags."},{question:"What happens when you checkout a tag?",answer:"You enter detached HEAD state. To make changes create a branch from the tag."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Git Tags</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit A</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Base code</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit B</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Bug fixes</text><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="65" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit C</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Features</text><line x1="50" y1="90" x2="50" y2="100" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="170" y="80" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="220" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tag: v1.0</text><text x="220" y="88" text-anchor="middle" font-size="9" fill="#ddd">Annotated release </text><text x="220" y="99" text-anchor="middle" font-size="9" fill="#ddd">tag</text><rect x="10" y="110" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Commit D</text><text x="65" y="129" text-anchor="middle" font-size="9" fill="#ddd">Hotfix</text><line x1="50" y1="135" x2="50" y2="145" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="170" y="125" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="220" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tag: v1.0.1</text><text x="220" y="144" text-anchor="middle" font-size="9" fill="#ddd">Patch release</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Git Tags</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Immutable markers on commits. Anno</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">tated tags for releases. Semantic </text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">versioning.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Git Tags: Mark release points. Annotated tags for </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">releases. Semantic versioning. GPG signing for aut</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">henticity.</text></svg>',codeExamples:[{title:"Creating and Managing Tags",useCase:"Annotated and lightweight tags.",code:`# Lightweight tag (just a pointer)
git tag v1.0-light

# Annotated tag (recommended)
git tag -a v1.0 -m "Release version 1.0"

# Annotated tag with GPG signature
git tag -s v1.0 -m "Release v1.0 signed"

# Tag a specific commit (not HEAD)
git tag -a v1.0-rc1 a1b2c3d -m "RC 1"

# Push a specific tag
git push origin v1.0

# Push all tags
git push origin --tags

# Verify GPG signature on tag
git tag -v v1.0`,description:"Create push and verify tags. Always use annotated tags for releases."},{title:"Semantic Versioning with Tags",useCase:"SemVer convention for tags.",code:`# Semantic versioning format
# MAJOR.MINOR.PATCH (e.g. v2.1.3)

# MAJOR: breaking changes
git tag -a v2.0.0 -m "Breaking: restructured API"

# MINOR: new features (backward compatible)
git tag -a v1.1.0 -m "Feat: add search functionality"

# PATCH: bug fixes (backward compatible)
git tag -a v1.0.1 -m "Fix: resolve memory leak"

# Pre-release suffix
git tag -a v2.0.0-beta.1 -m "Beta release"
git tag -a v2.0.0-rc.1 -m "Release candidate"

# Get current version from tags
git describe --tags --abbrev=0
# v2.1.3`,description:"Semantic versioning with tags: MAJOR.MINOR.PATCH with pre-release suffixes."},{title:"Tags in CI/CD Pipeline",useCase:"Automated release on tag push.",code:`# GitHub Actions: release on tag push
name: Release
on:
  push:
    tags:
      - "v*"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Extract version from tag
        run: echo "VERSION=\${GITHUB_REF#refs/tags/}" >> $GITHUB_ENV
      - name: Build and publish
        run: |
          npm version from-git --no-git-tag-version
          npm publish`,description:"CI/CD pipeline triggered by tag pushes for automated releases."},{title:"Auto-Tagging in CI",useCase:"Automatically create release tags.",code:`# Auto-create tag after release merge
#!/bin/bash
# Get current version from package.json
VERSION=$(node -p "require('./package.json').version")

# Check if tag already exists
if git rev-parse "v$VERSION" >/dev/null 2>&1; then
  echo "Tag v$VERSION already exists"
else
  git tag -a "v$VERSION" -m "Release v$VERSION"
  git push origin "v$VERSION"
fi

# GitHub Actions: auto-tag on main merge
# - run: if git merge-base --is-ancestor HEAD origin/main; then
#         ./scripts/auto-tag.sh
#       fi`,description:"Automated tag creation from package version during CI."},{title:"Tag-Based Versioning with Git Describe",useCase:"Get current version from tags.",code:`# git describe generates a human-readable version
git describe --tags
# v1.0-5-gabc1234
# ^tag  ^commits since tag  ^current commit

# Without commit suffix (nearest tag)
git describe --tags --abbrev=0
# v1.0

# With --match for specific patterns
git describe --tags --match "v[0-9]*"
# v1.0-5-gabc1234

# In Node.js for versioning
const { execSync } = require('child_process');
const version = execSync('git describe --tags --abbrev=0')
  .toString().trim();
console.log(version); // v1.0`,description:"Git describe generates a unique version string from tags and commit count."}],mcqQuestions:[{question:"What is a Git tag?",options:["A branch that moves","A reference to a specific commit","A type of merge","A remote URL"],answer:1,explanation:"A tag is an immutable reference pointing to a specific commit."},{question:"What is the difference between lightweight and annotated tags?",options:["Lightweight has metadata","Annotated has author date message","Lightweight is signed","No difference"],answer:1,explanation:"Annotated tags store metadata (message tagger date) and can be signed."},{question:"How do you create an annotated tag?",options:["git tag v1.0",'git tag -a v1.0 -m "message"',"git tag --annotate v1.0","git tag -m v1.0"],answer:1,explanation:"Use git tag -a for annotated tags."},{question:"How do you push a tag to remote?",options:["git push","git push origin v1.0","Tags auto-push","git push --all"],answer:1,explanation:"Tags must be explicitly pushed: git push origin <tag-name>."},{question:"What command lists all tags?",options:["git branch","git tag","git list","git show-tags"],answer:1,explanation:"git tag lists all tags. Use -l for pattern matching."},{question:"What is the recommended tag format for releases?",options:["v1.0 (annotated)","release-1 (lightweight)","R1.0",'just "1"'],answer:0,explanation:"Use annotated tags with semantic versioning format (v1.2.3)."},{question:"Git Tags — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Git Tags — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Git Tags — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Git Tags — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{t as git_tag};
