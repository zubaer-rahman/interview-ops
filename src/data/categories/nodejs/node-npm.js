export const node_npm = {
  "id": "node-npm",
  "title": "npm (Node Package Manager)",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "npm is the default package manager for Node.js, used for installing, managing, and publishing packages. It comes bundled with Node.js.",
    "The package.json file defines a project's metadata, dependencies, scripts, and configuration. It is the central file for any Node.js project.",
    "npm installs packages in node_modules following a nested dependency tree (pre-v3) or a flat-as-possible tree (v3+ with deduplication).",
    "npm scripts (npm run build, npm test) provide a way to define and run project-specific commands without global installations."
  ],
  "laymanDefinition": "npm is like an app store for JavaScript code. When you need functionality in your project (like a date formatting library or an HTTP client), you type npm install <package-name> and npm downloads it from the public registry at registry.npmjs.org into a node_modules folder in your project. It also creates or updates a package.json file that lists all your project's dependencies - like a shopping list saying \"my project needs React version 18, Express version 4, and Lodash version 4.\" This way, anyone else who wants to run your project can just type npm install and get all the same packages.",
  "deepDive": [
    {
      "heading": "package.json Structure and Fields",
      "text": "package.json is the manifest file for Node.js projects. Essential fields: (1) name - package name (lowercase, no spaces, hyphens allowed). (2) version - semver (1.2.3). (3) description - brief description. (4) main - entry point (index.js default). (5) scripts - custom commands (npm run <script>). (6) dependencies - packages needed at runtime. (7) devDependencies - packages needed only during development (testing, building). (8) peerDependencies - packages that must be installed by the consumer (plugins). (9) optionalDependencies - packages that are optional (install failure does not block). (10) bundleDependencies - packages bundled with the published package. (11) engines - Node.js and npm version requirements. (12) type - \"module\" or \"commonjs\". (13) exports - ESM entry points. (14) private: true - prevents accidental publish. (15) workspaces - monorepo support. Semantic versioning (semver): ~1.2.3 (patch changes), ^1.2.3 (minor changes), 1.2.3 (exact), * (any)."
    },
    {
      "heading": "npm Install and Dependency Resolution",
      "text": "npm install <package> - installs a package and adds to dependencies. npm install --save-dev (or -D) adds to devDependencies. npm install --global (-g) installs globally. npm install (no args) installs everything from package-lock.json. npm ci - clean install from lockfile (faster, no updates). Dependency resolution: npm v3+ uses a flat node_modules structure where possible, with nested node_modules for conflicting versions. npm v7+ uses the \"audit\" and \"dedupe\" improved algorithms. Package-lock.json: locks exact versions for reproducibility. npm v7+ also supports yarn.lock. Shrinkwrap: npm shrinkwrap creates a locked dependency tree. npm pack: creates a tarball for offline installation. npm cache: stores downloaded packages (~/.npm). Global vs local: local installs in project node_modules, global in system prefix (npm root -g). Only CLI tools should be installed globally."
    },
    {
      "heading": "npm Scripts and Lifecycle Hooks",
      "text": "npm scripts are defined in package.json scripts field. Predefined scripts: (1) npm start - runs start script. (2) npm stop - runs stop script. (3) npm test - runs test script. (4) npm restart - runs stop + start. (5) npm version - creates a version commit and tag. (6) npm publish - publishes to registry. Lifecycle hooks: pre/post hooks for any script. Example: \"prebuild\" runs before \"build\", \"postbuild\" after. npm run env - shows script environment variables. PATH: npm adds node_modules/.bin to PATH during scripts, so local binaries work without global install. Script arguments: pass via --: npm run test -- --coverage. Cross-platform: use packages like cross-env, rimraf (cross-platform rm -rf). npm exec (npx): runs a command from a local or remote package: npx create-react-app my-app. npx was introduced in npm v5.2."
    },
    {
      "heading": "Package Publishing and Versioning",
      "text": "npm publish - publishes the package to the registry. Prerequisites: (1) npm adduser or npm login. (2) npm version [major|minor|patch] bumps version and creates git tag. (3) .npmignore or .gitignore controls what is published. (4) package.json \"files\" field specifies publishable files. npm unpublish - removes a published version (24 hour window, or limited to 72 hours). npm deprecate - marks a version as deprecated with a warning message. npm dist-tag - manage distribution tags (latest, beta, next). Scoped packages: @scope/package-name (useful for organizations). Private packages: npm private packages require a paid npm account. npm access - control package visibility. OTP (One-Time Password): npm publish --otp=123456 for 2FA. package-lock.json version 2 (npm v7+): includes package integrity hashes for security."
    },
    {
      "heading": "npm Security and Best Practices",
      "text": "(1) npm audit - scans dependencies for known vulnerabilities. (2) npm audit fix - automatically fixes vulnerable packages (may introduce breaking changes). (3) npm audit fix --force - updates major versions if needed. (4) npm outdated - shows available updates. (5) npm update - updates packages within semver range. (6) npm fund - shows funding information for dependencies. (7) Integrity checks: package-lock.json includes SHA hashes (subresource integrity). (8) Signatures: npm v7+ supports package signing. (9) Security best practices: (a) Regularly run npm audit. (b) Use npm ci in CI/CD (reproducible installs). (c) Pin versions in production (use lockfile). (d) Review package source before using. (e) Use npm vet (npm v10+) for package validation. (f) Avoid publishing secrets. (g) Use .npmrc for registry configuration. (h) Configure 2FA for publishing accounts. (i) Use npm token for CI authentication."
    }
  ],
  "interviewAnswer": "npm is the default Node.js package manager. Key files: package.json (metadata, scripts, dependencies), package-lock.json (exact version locking). npm install <pkg> adds to dependencies; --save-dev for dev deps. npm scripts (start, test, build) provide command shortcuts with PATH including node_modules/.bin. npx runs packages without installing. npm ci for clean installs in CI. npm audit checks vulnerabilities. Package resolution: flat node_modules with nesting for conflicting versions. Publishing: npm version + npm publish. Use .npmignore or \"files\" field to control publish content. Best practices: use lockfile, run audit, use npm ci in CI, pin versions for production.",
  "interviewQuestions": [
    {
      "question": "What is the difference between dependencies and devDependencies?",
      "answer": "dependencies are required at runtime (express, lodash). devDependencies are only needed during development (testing libraries, build tools, TypeScript). npm install --production or NODE_ENV=production only installs dependencies."
    },
    {
      "question": "What is package-lock.json and why is it important?",
      "answer": "package-lock.json locks exact dependency versions (including sub-dependencies) for reproducible builds. It ensures every install gets the same dependency tree. Always commit it to version control. npm ci uses it for deterministic installs."
    },
    {
      "question": "What is the difference between npm install and npm ci?",
      "answer": "npm install reads package.json and updates package-lock.json if needed. npm ci reads only package-lock.json, installs exact versions, and fails if lockfile is missing or out of sync. npm ci is faster and should be used in CI/CD."
    },
    {
      "question": "How does npx differ from npm install -g?",
      "answer": "npx executes a command from a package without globally installing it. It can run packages that are not even installed (downloads temporarily). npm install -g permanently installs the package globally. npx is better for one-off commands."
    },
    {
      "question": "What is the node_modules resolution algorithm?",
      "answer": "npm installs packages in a flat-as-possible node_modules tree. Dependencies are hoisted to the top level when they do not conflict. When multiple versions of the same package are needed, the newer version is hoisted and older versions are nested in the dependent's node_modules folder."
    },
    {
      "question": "What is the purpose of npm audit?",
      "answer": "npm audit scans the dependency tree for known security vulnerabilities. It reports severity levels (critical, high, moderate, low) and suggests fixes. npm audit fix automatically installs compatible updates. Use it as part of CI/CD pipelines."
    },
    {
      "question": "How do you publish a package to npm?",
      "answer": "(1) npm login. (2) Update version with npm version [patch|minor|major]. (3) npm publish. Use .npmignore to exclude files. For scoped packages: npm publish --access public. Configure 2FA for security."
    },
    {
      "question": "What are npm workspaces?",
      "answer": "Workspaces support monorepos by allowing multiple packages in a single repository. Defined in root package.json: \"workspaces\": [\"packages/*\"]. npm install installs all workspace packages and symlinks them. Enables shared dependencies and cross-package scripts."
    },
    {
      "question": "What is semantic versioning (semver)?",
      "answer": "semver: MAJOR.MINOR.PATCH. MAJOR - breaking changes. MINOR - new features (backwards compatible). PATCH - bug fixes (backwards compatible). npm uses semver: ^1.2.3 (allow minor/patch), ~1.2.3 (allow patch only), 1.2.3 (exact), * (any version)."
    },
    {
      "question": "How do you update outdated packages?",
      "answer": "npm outdated shows available updates. npm update updates within semver range. npm install <pkg>@latest updates to the latest version. Use npm-check-updates or npx npm-check-updates -u for major version bumps."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"260\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">npm Package Management Flow</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">package.json</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Project manifest</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">npm install</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Install dependencies</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">node_modules</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Installed packages</text></svg>",
  "codeExamples": [
    {
      "title": "package.json with Scripts and Configuration",
      "useCase": "Comprehensive package.json example",
      "code": "{\n  \"name\": \"my-express-app\",\n  \"version\": \"1.2.3\",\n  \"description\": \"A sample Express application\",\n  \"main\": \"src/index.js\",\n  \"type\": \"commonjs\",\n  \"private\": true,\n  \"scripts\": {\n    \"start\": \"node src/index.js\",\n    \"dev\": \"node --watch src/index.js\",\n    \"test\": \"mocha tests/*.test.js\",\n    \"test:coverage\": \"c8 npm test\",\n    \"lint\": \"eslint src/ tests/\",\n    \"build\": \"mkdirp dist && cpy src/**/*.js dist/\",\n    \"prebuild\": \"echo Building...\",\n    \"postbuild\": \"echo Build complete!\",\n    \"prepublishOnly\": \"npm test && npm run lint\",\n    \"version\": \"echo Bumped to $npm_package_version\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\",\n    \"lodash\": \"^4.17.21\",\n    \"morgan\": \"^1.10.0\"\n  },\n  \"devDependencies\": {\n    \"mocha\": \"^10.0.0\",\n    \"c8\": \"^8.0.0\",\n    \"eslint\": \"^8.0.0\"\n  },\n  \"engines\": {\n    \"node\": \">=18.0.0\",\n    \"npm\": \">=9.0.0\"\n  }\n}",
      "description": "package.json defines the project. scripts: start (run app), dev (with watch mode), test (with coverage), lint. pre/post hooks run before/after scripts. engines specify Node.js/npm version requirements. private:true prevents accidental publish."
    },
    {
      "title": "npm Script Usage and Cross-Platform Commands",
      "useCase": "Run and chain npm scripts effectively",
      "code": "// Terminal commands:\n\n// npm start - runs the \"start\" script\n// npm test - runs the \"test\" script\n// npm run dev - runs the \"dev\" script\n\n// Chain scripts: \"pre\" and \"post\" hooks\n// npm run build\n// 1. Runs \"prebuild\" (if defined)\n// 2. Runs \"build\"\n// 3. Runs \"postbuild\" (if defined)\n\n// Pass arguments:\n// npm run test -- --grep \"auth\"\n// The -- passes remaining args to the script\n\n// Environment variables in scripts:\n// \"start:prod\": \"NODE_ENV=production node app.js\"\n// Cross-platform: use cross-env package\n// \"start:prod\": \"cross-env NODE_ENV=production node app.js\"\n\n// npm bin directory in scripts:\n// npm adds node_modules/.bin to PATH during scripts\n// So you can run:\n// \"test\": \"mocha tests/\"  // without global mocha install\n\n// Commonly used in scripts:\n// \"clean\": \"rimraf dist/\"\n// \"build\": \"mkdirp dist && babel src -d dist\"\n// \"dev\": \"nodemon src/index.js\"\n// \"typecheck\": \"tsc --noEmit\"\n\n// npm run env - shows all env vars available to scripts\n// $npm_package_name = package name\n// $npm_package_version = package version\n// These are available as environment variables",
      "description": "npm scripts provide command shortcuts with automatic PATH including local binaries. pre/post hooks enable lifecycle automation. Use cross-env for cross-platform environment variables. npm run env shows available script environment variables."
    },
    {
      "title": "npm Install Strategies and Lockfile Management",
      "useCase": "Different install strategies explained",
      "code": "// Clean install (for CI/CD)\n// npm ci\n// - Deletes node_modules\n// - Installs from package-lock.json only\n// - Fails if lockfile is missing or out of sync\n// - Faster than npm install (~2x)\n\n// Regular install (for development)\n// npm install\n// - Reads package.json\n// - Updates package-lock.json if needed\n// - Installs from registry\n\n// Install specific version\n// npm install lodash@4.17.21\n\n// Install latest version\n// npm install lodash@latest\n\n// Install globally\n// npm install -g nodemon\n\n// Install as dev dependency\n// npm install -D mocha\n\n// Install as optional dependency\n// npm install -O csv-parser\n\n// Install without saving to package.json\n// npm install --no-save temp-package\n\n// Install from a git repository\n// npm install https://github.com/user/repo.git\n\n// Install from a local path\n// npm install ./local-package\n\n// Audit for vulnerabilities\n// npm audit\n\n// Auto-fix vulnerabilities\n// npm audit fix\n\n// Show outdated packages\n// npm outdated",
      "description": "Different install strategies serve different purposes: npm ci for reproducible builds, npm install for development. npm audit ensures security. npm outdated shows available updates. Git and local path installs enable development on dependencies."
    },
    {
      "title": "Creating and Publishing a Package",
      "useCase": "Publish a package to npm registry",
      "code": "// 1. Create package.json\n// npm init -y\n\n// 2. Login to npm\n// npm login\n\n// 3. Configure package.json for publishing\n{\n  \"name\": \"@my-scope/hello-world\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A simple hello world package\",\n  \"main\": \"index.js\",\n  \"files\": [\"index.js\", \"README.md\"],\n  \"keywords\": [\"hello\", \"world\", \"demo\"],\n  \"license\": \"MIT\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/user/hello-world.git\"\n  },\n  \"bugs\": {\n    \"url\": \"https://github.com/user/hello-world/issues\"\n  },\n  \"homepage\": \"https://github.com/user/hello-world#readme\"\n}\n\n// 4. Create .npmignore (or use .gitignore)\n// .npmignore:\n// tests/\n// src/\n// .git/\n\n// 5. Bump version\n// npm version patch  // 1.0.0 -> 1.0.1\n// npm version minor  // 1.0.1 -> 1.1.0\n// npm version major  // 1.1.0 -> 2.0.0\n\n// 6. Publish\n// npm publish\n\n// For scoped packages (public):\n// npm publish --access public\n\n// 7. Manage distribution tags\n// npm dist-tag add @my-scope/hello-world@1.0.0 beta\n// npm dist-tag ls @my-scope/hello-world\n\n// 8. Deprecate a version\n// npm deprecate @my-scope/hello-world@\"1.0.0\" \"Critical bug fixed in 1.0.1\"",
      "description": "Publishing workflow: initialize, login, configure, version bump, publish. Use .npmignore to exclude files. npm version creates a git tag. dist-tag manages release channels (latest, beta, next). deprecate warns users about problematic versions."
    },
    {
      "title": "npm Workspaces for Monorepos",
      "useCase": "Manage multiple packages in a single repository",
      "code": "// Root package.json\n{\n  \"private\": true,\n  \"workspaces\": [\n    \"packages/*\",\n    \"apps/*\"\n  ],\n  \"scripts\": {\n    \"test\": \"npm run test --workspaces\",\n    \"build\": \"npm run build --workspace=@myapp/core\",\n    \"lint\": \"npx eslint packages/*/src\"\n  }\n}\n\n// Directory structure:\n// root/\n//   package.json (workspaces config)\n//   packages/\n//     core/\n//       package.json (@myapp/core)\n//     utils/\n//       package.json (@myapp/utils)\n//   apps/\n//     web/\n//       package.json (@myapp/web, depends on @myapp/core)\n\n// Install all workspace dependencies:\n// npm install (from root)\n\n// Run script in specific workspace:\n// npm run build --workspace=packages/core\n\n// Run script in all workspaces:\n// npm test --workspaces\n\n// Add dependency to a specific workspace:\n// npm install lodash --workspace=packages/core\n\n// Workspace benefits:\n// - Shared node_modules (hoisted dependencies)\n// - Local packages are symlinked\n// - Single lockfile\n// - Cross-package script coordination\n// - Consistent versioning across packages",
      "description": "npm workspaces enable monorepo management. Multiple packages share a single node_modules and lockfile. Local packages are symlinked for development. Workspace-specific scripts coordinate builds across packages. Tools like Lerna and Nx extend workspace capabilities."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What file locks exact dependency versions?",
      "options": [
        "package.json",
        "package-lock.json",
        "npm-shrinkwrap.json",
        ".npmrc"
      ],
      "answer": 1,
      "explanation": "package-lock.json locks exact versions of all dependencies and sub-dependencies for reproducible builds."
    },
    {
      "question": "What is the difference between npm install and npm ci?",
      "options": [
        "They are identical",
        "npm ci installs from lockfile only, fails if out of sync",
        "npm ci is slower but safer",
        "npm ci installs global packages"
      ],
      "answer": 1,
      "explanation": "npm ci uses only package-lock.json (deletes node_modules first), fails if lockfile is missing or out of sync. Recommended for CI/CD."
    },
    {
      "question": "Which command checks for security vulnerabilities?",
      "options": [
        "npm check",
        "npm audit",
        "npm security",
        "npm scan"
      ],
      "answer": 1,
      "explanation": "npm audit scans dependencies for known vulnerabilities. npm audit fix auto-updates vulnerable packages."
    },
    {
      "question": "What does npm run test -- --coverage do?",
      "options": [
        "Runs test with coverage flag",
        "Passes --coverage to the test script",
        "Errors because of extra args",
        "Enables debug mode"
      ],
      "answer": 1,
      "explanation": "The -- passes remaining arguments to the script. npm run test -- --coverage passes --coverage to the test command defined in package.json."
    },
    {
      "question": "How do you install a package as a dev dependency?",
      "options": [
        "npm install -D package",
        "npm install --dev package",
        "npm install package --save-dev",
        "Both A and C"
      ],
      "answer": 3,
      "explanation": "npm install -D package and npm install package --save-dev both add to devDependencies."
    },
    {
      "question": "What does npx do?",
      "options": [
        "Installs packages globally",
        "Executes a package command without permanent install",
        "Removes packages",
        "Updates npm itself"
      ],
      "answer": 1,
      "explanation": "npx executes a command from a local or remote npm package without permanently installing it. Useful for one-off commands like create-react-app."
    }
  ]
};
