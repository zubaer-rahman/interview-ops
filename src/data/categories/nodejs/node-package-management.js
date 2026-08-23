export const node_package_management = {
  "id": "node-package-management",
  "title": "Node.js Package Management Ecosystem",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "The Node.js package ecosystem includes npm (default), Yarn (alternative by Meta), and pnpm (fast, disk-efficient). Each offers different trade-offs for speed, disk usage, and security.",
    "Package managers handle dependency resolution, version management, lockfiles, caching, and script execution for Node.js projects.",
    "Key package manager features: deterministic installs (lockfiles), offline caching, workspace/monorepo support, security auditing, and performance optimizations.",
    "The npm registry (registry.npmjs.org) is the central repository hosting over 2 million packages, used by all major package managers."
  ],
  "laymanDefinition": "Package management in Node.js is like having different supply chain systems for your project. npm is the default courier that comes with Node.js - reliable and universal. Yarn is like a faster courier that started as an improvement on npm, offering better caching and deterministic installs. pnpm is like a warehouse that stores packages in a central location and creates shortcuts - saving massive disk space when you have many projects using the same packages. All three use the same catalog (npm registry) and the same shopping lists (package.json), but they differ in how they fetch, store, and organize packages.",
  "deepDive": [
    {
      "heading": "npm vs Yarn vs pnpm - Key Differences",
      "text": "(1) npm: Default, bundled with Node.js. Uses flat node_modules with nesting for conflicts. Lockfile: package-lock.json (v2 with integrity hashes). Features: npx, workspaces, audit. Install speed: moderate. Disk usage: moderate (duplicates across projects). (2) Yarn: Created by Meta in 2016. Lockfile: yarn.lock (deterministic). Features: Plug'n'Play (no node_modules), workspaces, offline cache, resolution overrides. Install speed: fast (parallel downloads, caching). Disk usage: similar to npm. Yarn v2/v3 uses Plug'n'Play (generates a single .pnp.cjs file instead of node_modules). (3) pnpm: Created in 2017. Uses content-addressable storage - packages are stored in a global store (~/.pnpm-store) and node_modules uses hard links/symlinks. This saves massive disk space. Lockfile: pnpm-lock.yaml. Features: strict module resolution (prevents access to undeclared dependencies), workspaces, fast. Install speed: very fast. Disk usage: minimal (single copy of each package version across all projects)."
    },
    {
      "heading": "Lockfiles and Reproducible Builds",
      "text": "Lockfiles ensure that every install produces the exact same node_modules tree. (1) package-lock.json (npm) - JSON format, v2 includes integrity hashes, supported from npm v7+. (2) yarn.lock (Yarn) - YAML-like format, sorted by package name. (3) pnpm-lock.yaml (pnpm) - YAML format, compact. Lockfile contents: resolved version (not range), resolved URL, integrity hash (SHA512), sub-dependencies list. Benefits: (a) Reproducible builds - CI gets exact same versions as development. (b) Faster installs - resolve versions from lockfile instead of recalculating. (c) Security - integrity hashes verify package content. (d) Deterministic - same input produces same output. Best practices: (1) Always commit lockfiles. (2) Use npm ci / yarn install --frozen-lockfile / pnpm install --frozen-lockfile in CI. (3) Review lockfile changes in PRs to catch unexpected dependency updates."
    },
    {
      "heading": "Package Registry and Mirroring",
      "text": "The npm registry (registry.npmjs.org) is the primary package registry. Alternatives: (1) GitHub Packages - registry for packages published to GitHub. (2) Verdaccio - self-hosted npm registry. (3) Unpkg - CDN for npm packages. (4) jsDelivr - CDN for npm packages. (5) Cloudsmith - commercial private registry. Registry configuration: .npmrc file - registry=https://registry.npmjs.org/, @scope:registry=https://npm.pkg.github.com/. Authentication: npm login or NPM_TOKEN env var. Mirroring: using npm mirror for regions with poor connectivity - set registry=https://registry.npmmirror.com. Corporate registries: many companies run internal npm registries (Verdaccio, Artifactory) for security and caching. Publishing to custom registries: npm publish --registry=https://internal-registry.company.com."
    },
    {
      "heading": "Monorepo Support and Workspaces",
      "text": "Monorepo approaches: (1) npm workspaces - built-in since npm v7. \"workspaces\": [\"packages/*\"]. Shared node_modules, single lockfile. (2) Yarn workspaces - similar concept, compatible with npm workspaces. (3) pnpm workspaces - uses pnpm-workspace.yaml. Strict isolation between packages. (4) Lerna - popular tool for managing monorepos (integrates with npm/Yarn/pnpm). (5) Nx - build system with monorepo support, dependency graph, caching. (6) Turborepo - build orchestration for monorepos. (7) Rush - Microsoft's monorepo manager. Workspace benefits: shared dependencies (hoisted), single lockfile, cross-package commands (npm run test --workspaces), local package symlinks. Trade-offs: hoisting issues (package sees undeclared dependencies), version conflicts between packages. pnpm's strict mode enforces that packages can only use their declared dependencies."
    },
    {
      "heading": "Security, Supply Chain, and Best Practices",
      "text": "(1) Supply chain attacks: malicious packages targeting npm. Famous attacks: event-stream (copay bitcoin theft), ua-parser-js, eslint-scope. (2) Malware types: typosquatting (event-stream vs event-stream), dependency confusion, protestware. (3) Mitigation: (a) npm audit for vulnerability scanning. (b) npm fund to check funding sources. (c) Use Snyk, Socket.dev, or Dependabot for continuous monitoring. (d) Lockfile integrity hashes verify package content. (e) npm v9+ supports package signing. (f) npm v10+ includes npm vet for package validation. (4) Best practices: (a) Pin versions (use lockfile). (b) Review package source for critical dependencies. (c) Use fewer dependencies. (d) Regularly update dependencies. (e) Use npm ci in CI/CD. (f) Configure 2FA for npm publishing. (g) Use .npmrc for security configuration (audit-level=high). (h) Consider using pnpm for strict module isolation (prevents undeclared dependency access)."
    }
  ],
  "interviewAnswer": "The Node.js package ecosystem offers three main package managers: npm (default, bundled, flat node_modules), Yarn (fast, Plug'n'Play, yarn.lock), and pnpm (content-addressable store, disk-efficient, strict). All use the npm registry. Lockfiles (package-lock.json, yarn.lock, pnpm-lock.yaml) ensure reproducible builds by locking exact versions with integrity hashes. Monorepo support via workspaces. Security: npm audit for vulnerabilities, supply chain attack awareness (typosquatting, dependency confusion), package signing. Best practices: commit lockfiles, use frozen installs in CI, audit regularly, pin production dependencies, review dependency changes, use 2FA for publishing.",
  "interviewQuestions": [
    {
      "question": "What are the main differences between npm, Yarn, and pnpm?",
      "answer": "npm: default, flat node_modules, moderate speed, bundled with Node. Yarn: fast parallel installs, yarn.lock, Plug'n'Play mode (no node_modules). pnpm: content-addressable store (hard links), minimal disk usage, strict module isolation, pnpm-lock.yaml. All use the same npm registry."
    },
    {
      "question": "What is the advantage of pnpm's content-addressable storage?",
      "answer": "pnpm stores packages in a global store (~/.pnpm-store) and creates hard links in node_modules. If 10 projects use the same version of lodash, only one copy exists on disk. This saves significant disk space compared to npm/Yarn which duplicate packages per project."
    },
    {
      "question": "What is Yarn Plug'n'Play (PnP)?",
      "answer": "PnP is Yarn's alternative to node_modules. Instead of copying files, PnP generates a .pnp.cjs file that maps package names to their locations in the cache. This eliminates node_modules entirely, reduces install time, and improves performance. Requires compatibility from all dependencies."
    },
    {
      "question": "Why should you commit lockfiles?",
      "answer": "Lockfiles ensure reproducible builds. Without them, different machines may install different versions of dependencies (sub-dependencies may release updates). Lockfiles include integrity hashes for security. CI uses --frozen-lockfile to detect unexpected dependency changes."
    },
    {
      "question": "What is a supply chain attack in the npm ecosystem?",
      "answer": "A supply chain attack compromises a popular npm package to distribute malware to its users. Examples: event-stream (inserted malicious code to steal cryptocurrency), ua-parser-js (compromised to mine crypto). Mitigation: audit dependencies, verify package integrity, use fewer dependencies."
    },
    {
      "question": "What is dependency confusion?",
      "answer": "A security vulnerability where a private package name matches a public package on the npm registry. npm may resolve to the public package (with higher version) instead of the private one. Mitigation: use scoped packages (@company/package), configure .npmrc to scope-specific registries, use npm vet (npm 10+)."
    },
    {
      "question": "How do package managers handle monorepos?",
      "answer": "npm/Yarn/pnpm workspaces allow a single repository to contain multiple packages. They hoist shared dependencies to a root node_modules, create symlinks between workspace packages, and support cross-package scripts (npm run test --workspaces). Tools like Lerna, Nx, and Turborepo extend workspace capabilities."
    },
    {
      "question": "What is npm vet?",
      "answer": "npm vet (npm 10+) validates a package before publishing. It checks for: deprecated packages, mismatched metadata, unfilled package.json fields, missing files, and potential security issues. It helps catch problems before users encounter them."
    },
    {
      "question": "How do you choose between npm, Yarn, and pnpm?",
      "answer": "Consider: (1) npm - standard, no additional tooling needed, widely compatible. (2) Yarn - faster installs, PnP mode if compatible, strong monorepo support. (3) pnpm - best disk usage, strict dependency isolation (prevents undeclared dependency access), fastest for large projects. For new projects: pnpm is increasingly recommended. For existing: stick with what the project uses."
    },
    {
      "question": "What is the purpose of .npmrc?",
      "answer": ".npmrc configures npm behavior: registry URL, authentication tokens, proxy settings, cache location, audit level, package resolution settings. Per-project .npmrc, per-user ~/.npmrc, and global npm config. Example: registry=https://registry.npmjs.org/, @mycompany:registry=https://npm.pkg.github.com/"
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"260\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Node.js Package Manager Comparison</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">npm</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Flat node_modules, bundled</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Yarn</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Plug'n'Play, fast parallel</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pnpm</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Content-addressable, strict</text></svg>",
  "codeExamples": [
    {
      "title": "Migrating Between Package Managers",
      "useCase": "Convert a project between npm, Yarn, and pnpm",
      "code": "// Converting from npm to Yarn:\n// 1. Install Yarn: npm install -g yarn\n// 2. Generate yarn.lock: yarn import\n//    (converts package-lock.json to yarn.lock)\n// 3. Delete package-lock.json and node_modules\n// 4. Install with Yarn: yarn install\n\n// Converting from npm/Yarn to pnpm:\n// 1. Install pnpm: npm install -g pnpm\n// 2. Generate pnpm-lock.yaml: pnpm import\n// 3. Delete node_modules and lockfile\n// 4. Install with pnpm: pnpm install\n\n// Converting from Yarn to npm:\n// 1. Delete node_modules and yarn.lock\n// 2. Install with npm: npm install\n// 3. Generates package-lock.json\n\n// Running the same commands across managers:\n// npm run build   | yarn build    | pnpm build\n// npm test         | yarn test     | pnpm test\n// npm install      | yarn          | pnpm install\n// npm ci           | yarn --frozen-lockfile | pnpm install --frozen-lockfile\n// npx command      | yarn dlx command | pnpm dlx command\n\n// CI configuration examples:\n// GitHub Actions for npm:\n// - run: npm ci\n// - run: npm test\n\n// GitHub Actions for pnpm:\n// - uses: pnpm/action-setup@v2\n// - run: pnpm install\n// - run: pnpm test",
      "description": "Migrating between package managers requires generating the appropriate lockfile and reinstalling. Each manager supports import to convert from another manager's lockfile. CI configuration differs slightly between managers."
    },
    {
      "title": "Using pnpm for Monorepo with Strict Isolation",
      "useCase": "Set up a pnpm workspace with strict dependency isolation",
      "code": "// pnpm-workspace.yaml (root)\npackages:\n  - \"packages/*\"\n  - \"apps/*\"\n\n// .npmrc (root, for pnpm strict mode)\n// shamefully-hoist=false (default) - strict isolation\n// strict-peer-dependencies=true - enforce peer deps\n\n// package.json (root)\n{\n  \"private\": true,\n  \"scripts\": {\n    \"build\": \"pnpm -r build\",\n    \"test\": \"pnpm -r test\",\n    \"lint\": \"pnpm -r lint\",\n    \"changeset\": \"changeset\"\n  },\n  \"devDependencies\": {\n    \"typescript\": \"^5.0.0\"\n  }\n}\n\n// packages/core/package.json\n{\n  \"name\": \"@myapp/core\",\n  \"dependencies\": {\n    \"lodash\": \"^4.17.21\"\n  }\n}\n\n// apps/web/package.json\n{\n  \"name\": \"@myapp/web\",\n  \"dependencies\": {\n    \"@myapp/core\": \"workspace:*\",\n    \"react\": \"^18.0.0\"\n  }\n}\n\n// Commands:\n// pnpm install - installs everything\n// pnpm -r run build - runs build in all packages\n// pnpm --filter @myapp/web add axios - adds dep to specific package\n// pnpm ls - shows dependency tree\n\n// Benefits of pnpm strict mode:\n// - @myapp/web cannot access lodash directly\n//   (only @myapp/core declared it)\n// - Prevents undeclared dependency usage\n// - Catches missing dependency bugs early",
      "description": "pnpm's strict mode enforces that packages can only import what they declare in their own dependencies. This catches bugs where a package accidentally uses a hoisted dependency that is not declared in its own package.json. The workspace:* protocol links local packages."
    },
    {
      "title": "Package Publishing with Changesets",
      "useCase": "Manage versioning and changelogs in monorepos",
      "code": "// .changeset/config.json\n{\n  \"$schema\": \"https://unpkg.com/@changesets/config@2/schema.json\",\n  \"changelog\": \"@changesets/cli/changelog\",\n  \"commit\": true,\n  \"linked\": [],\n  \"access\": \"public\",\n  \"baseBranch\": \"main\",\n  \"updateInternalDependencies\": \"patch\",\n  \"ignore\": []\n}\n\n// Creating a changeset:\n// npx changeset\n// Select packages that changed\n// Choose bump type (patch, minor, major)\n// Write summary (becomes changelog entry)\n\n// Changeset file (.changeset/seven-cats-itch.md):\n// ---\n// \"@myapp/core\": minor\n// \"@myapp/web\": patch\n// ---\n//\n// Added new utility functions to core\n// Fixed web app rendering issue\n\n// Version all packages:\n// npx changeset version\n// - Reads all changeset files\n// - Bumps versions accordingly\n// - Updates changelogs\n// - Removes changeset files\n\n// Publish:\n// npx changeset publish\n// - Builds packages if needed\n// - Publishes to npm\n// - Creates git tags\n\n// CI pipeline:\n// 1. pnpm changeset version (on main)\n// 2. pnpm build\n// 3. pnpm changeset publish\n// 4. git push --tags",
      "description": "Changesets is a popular tool for monorepo versioning. Developers create changeset files describing their changes. At release time, changeset version bumps all affected packages, generates changelogs, and publishes. This provides a structured workflow for coordinated releases."
    },
    {
      "title": "Dependency Auditing and Security Scanning",
      "useCase": "Comprehensive security checks for Node.js projects",
      "code": "// npm audit example output:\n// === npm audit security report ===\n//\n// # Run  npm install lodash@4.17.20  to resolve 1 vulnerability\n// SEMVER WARNING: Recommended action is a potentially breaking change\n//\n// ┌───────────────┬──────────────────────────────────────┐\n// │ Critical      │ Prototype Pollution in lodash        │\n// ├───────────────┼──────────────────────────────────────┤\n// │ Package       │ lodash                               │\n// ├───────────────┼──────────────────────────────────────┤\n// │ Dependency    │ express > lodash                     │\n// ├───────────────┼──────────────────────────────────────┤\n// │ Patched in    │ >=4.17.20                            │\n// └───────────────┴──────────────────────────────────────┘\n\n// Automated security in CI:\n// package.json:\n\"scripts\": {\n  \"audit\": \"npm audit --audit-level=high\",\n  \"ci\": \"npm ci && npm audit --audit-level=high\"\n}\n\n// Using Snyk for continuous monitoring:\n// npx snyk test\n// npx snyk monitor (continuous monitoring)\n\n// Using Socket.dev:\n// npx socket scan\n\n// Dependabot (GitHub):\n// .github/dependabot.yml\n// version: 2\n// updates:\n//   - package-ecosystem: \"npm\"\n//     directory: \"/\"\n//     schedule:\n//       interval: \"weekly\"\n\n// npm package scoring:\n// npm uses a package score (quality, popularity, maintenance)\n// View: npm view <package>\n// npm provides the score via the registry API\n\n// Checking package signatures:\n// npm audit signatures (npm 9+)\n// Verifies installed packages are signed by authorized maintainers",
      "description": "Security scanning is crucial for Node.js projects. npm audit checks known vulnerabilities. Snyk and Socket.dev provide deeper analysis. Dependabot automates dependency updates. Package signatures verify package authenticity. CI should fail on high/critical vulnerabilities."
    },
    {
      "title": "Offline Package Installation and Caching",
      "useCase": "Work without internet access",
      "code": "// npm cache management:\n// Cache location: ~/.npm (_cacache directory)\n// npm cache ls - list cache contents (limited)\n// npm cache verify - verify and clean cache\n// npm cache clean --force - clear all cache\n\n// Install from cache (offline):\n// npm install --prefer-offline\n// npm install --offline (fail if not cached)\n\n// Pre-populate cache:\n// npm pack <package>  // downloads tarball\n// npm install <tarball>  // install from file\n\n// Yarn offline mirror:\n// yarn config set yarn-offline-mirror ./offline-mirror\n// yarn install (downloads to offline-mirror)\n// yarn install --offline (uses mirror)\n\n// pnpm store management:\n// Store location: ~/.pnpm-store (content-addressable)\n// pnpm store status - check store integrity\n// pnpm store prune - remove unused packages\n// pnpm install --offline - install from store\n\n// Verdaccio (self-hosted registry):\n// npm install -g verdaccio\n// verdaccio (starts local registry at localhost:4873)\n// npm set registry http://localhost:4873/\n// Publishes to and caches from upstream registry\n\n// Creating tarballs for air-gapped environments:\n// npm pack (creates .tgz)\n// Copy .tgz files to air-gapped machine\n// npm install ./package-1.0.0.tgz\n\n// Offline development best practices:\n// 1. Pre-download all packages (npm install once)\n// 2. Use --prefer-offline flag\n// 3. Cache registry metadata\n// 4. Use local registry (Verdaccio) for teams",
      "description": "Offline installation requires cached packages. npm cache stores downloaded packages. Yarn offline mirror provides explicit offline support. pnpm's content-addressable store naturally supports offline. Verdaccio provides a full local registry proxy with caching. For air-gapped environments, pack tarballs explicitly."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which package manager uses content-addressable storage for disk efficiency?",
      "options": [
        "npm",
        "Yarn",
        "pnpm",
        "Lerna"
      ],
      "answer": 2,
      "explanation": "pnpm stores packages in a global content-addressable store and creates hard links, sharing a single copy across all projects."
    },
    {
      "question": "What is Yarn Plug'n'Play?",
      "options": [
        "A plugin system for Yarn",
        "An alternative to node_modules using a single file mapping",
        "A new package format",
        "A caching mechanism"
      ],
      "answer": 1,
      "explanation": "PnP replaces node_modules with a .pnp.cjs file that maps package names to cache locations, eliminating file copying."
    },
    {
      "question": "Why is dependency confusion a security risk?",
      "options": [
        "Dependencies crash frequently",
        "A public package with the same name as a private one can be substituted",
        "Dependencies are confusing to read",
        "npm confuses package versions"
      ],
      "answer": 1,
      "explanation": "Dependency confusion: npm may resolve to a public malicious package with the same name as a private one. Use scoped packages (@scope/name) and .npmrc scoped registries."
    },
    {
      "question": "What is the advantage of committing lockfiles?",
      "options": [
        "Smaller repository size",
        "Reproducible builds and integrity verification",
        "Faster npm install",
        "Better code documentation"
      ],
      "answer": 1,
      "explanation": "Lockfiles lock exact versions and include integrity hashes, ensuring every install produces the same dependency tree."
    },
    {
      "question": "Which tool provides continuous dependency updates?",
      "options": [
        "npm audit",
        "Snyk",
        "Dependabot",
        "npm vet"
      ],
      "answer": 2,
      "explanation": "Dependabot (GitHub) creates PRs for dependency updates. Snyk provides vulnerability monitoring. npm audit checks on demand. npm vet validates packages before publish."
    },
    {
      "question": "What does pnpm's strict mode prevent?",
      "options": [
        "Slow installs",
        "Access to undeclared dependencies",
        "Disk space usage",
        "Version conflicts"
      ],
      "answer": 1,
      "explanation": "pnpm strict mode prevents packages from importing dependencies they did not declare in their own package.json, catching bugs from hoisted undeclared dependencies."
    }
  ]
};
