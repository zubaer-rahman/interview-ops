export const git_build_automation = {
  "id": "git-build-automation",
  "title": "Build Automation",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Build automation is the process of automating the compilation packaging and preparation of source code into deployable artifacts.",
    "Key tools: npm/yarn (JS) Maven/Gradle (Java) pip (Python) make (C/C++) Webpack/Vite (frontend bundling) Docker (containerization).",
    "Build outputs: compiled binaries bundled JavaScript Docker images deployment packages and versioned artifacts.",
    "Best practices: deterministic builds (same input = same output) fast incremental builds artifact versioning and reproducible builds."
  ],
  "laymanDefinition": "Build automation is like a recipe that turns ingredients into a cake automatically. You put flour eggs sugar (source code) into a machine. It mixes (compiles) bakes (bundles) and packages the cake (artifact) ready for delivery. The same recipe always produces the same cake. No manual steps no forgetting ingredients.",
  "deepDive": [
    {
      "heading": "Build Determinism and Reproducibility",
      "text": "Deterministic build: same source always produces identical output. Key for trust and debugging. Achieved by: lock files (package-lock.json) fixed tool versions (Docker) no network-dependent steps timestamp control (SOURCE_DATE_EPOCH). Reproducible builds verify integrity across different build environments."
    },
    {
      "heading": "Build Tools by Ecosystem",
      "text": "JavaScript/TypeScript: npm scripts Webpack Vite esbuild tsc Babel. Java: Maven (XML) Gradle (Groovy/Kotlin). Python: pip setuptools Poetry. Go: go build. Rust: cargo build. C/C++: make CMake. Multi-language: Bazel Nix. Docker: multi-stage builds for optimized images."
    },
    {
      "heading": "Incremental and Cache-Based Builds",
      "text": "Incremental: only rebuild changed files (fast). Tools: webpack --watch Vite (HMR) tsc --incremental. Caching: store build outputs between CI runs (npm cache Docker layer caching). Cache keys: lock file hash source file hash tool version. Trade-off: cache invalidation complexity vs build speed."
    },
    {
      "heading": "Build Artifact Management",
      "text": "Versioning: semantic version + commit SHA (myapp-1.2.3-a1b2c3d). Storage: artifact registry (Docker Hub GHCR npm registry S3). Retention: keep N latest versions tag important versions. Cleanup: automated deletion of old artifacts. SBOM: generate software bill of materials with each build."
    },
    {
      "heading": "Build Security",
      "text": "Supply chain: verify dependency integrity (lock files checksums). No secrets in build: build args should not expose secrets. Minimal base images: Alpine distroless. SBOM generation: CycloneDX SPDX. Image scanning: Trivy Grype Snyk. Signing: cosign for container images. Provenance: SLSA attestations."
    }
  ],
  "interviewAnswer": "Build automation is the foundation of CI/CD. Ensure builds are deterministic and fast. Use caching for speed. Version artifacts consistently (semver + commit SHA). Secure the build pipeline: verify dependencies scan images and sign artifacts. A reliable build pipeline enables confident deployments.",
  "interviewQuestions": [
    {
      "question": "What is build automation?",
      "answer": "Automating the compilation packaging and preparation of source code into deployable artifacts."
    },
    {
      "question": "What is a deterministic build?",
      "answer": "A build that produces identical output from the same source code regardless of when or where it is built."
    },
    {
      "question": "What are common build tools for JavaScript?",
      "answer": "npm scripts Webpack Vite esbuild tsc. For bundling: Webpack Vite. For compilation: Babel tsc esbuild."
    },
    {
      "question": "What is incremental build?",
      "answer": "Only rebuilding files that changed since the last build. Much faster than full rebuilds."
    },
    {
      "question": "What is a build artifact?",
      "answer": "The output of a build: compiled binary bundled JS Docker image or deployment package."
    },
    {
      "question": "How do you version build artifacts?",
      "answer": "Use semantic versioning combined with commit SHA: myapp-1.2.3-a1b2c3d."
    },
    {
      "question": "What is Docker layer caching?",
      "answer": "Docker caches each layer of a Dockerfile. Only layers that change are rebuilt. Speeds up builds significantly."
    },
    {
      "question": "What is an SBOM?",
      "answer": "Software Bill of Materials a list of all components and dependencies in a build. Used for vulnerability tracking."
    },
    {
      "question": "What is supply chain security?",
      "answer": "Ensuring the integrity of dependencies and build tools. Lock files checksums signed commits."
    },
    {
      "question": "What is a multi-stage Docker build?",
      "answer": "A Dockerfile with multiple FROM statements. Early stages have build tools later stages are minimal production images."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Build Automation</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Source</text><text x=\"60\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Code</text><rect x=\"120\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"170\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Install</text><text x=\"170\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dependencies</text><rect x=\"230\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"280\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compile</text><text x=\"280\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Transpile bundle</text><rect x=\"340\" y=\"35\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Package</text><text x=\"390\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Docker image</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Version</text><text x=\"60\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Semver + SHA</text><rect x=\"120\" y=\"65\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"170\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache</text><text x=\"170\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Incremental build</text><rect x=\"230\" y=\"65\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"280\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security</text><text x=\"280\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Scan + sign</text><rect x=\"340\" y=\"65\" width=\"100\" height=\"20\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"390\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Publish</text><text x=\"390\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Registry</text><rect x=\"10\" y=\"95\" width=\"430\" height=\"80\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"225\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build Automation</text><text x=\"225\" y=\"158\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deterministic build to artifact versioning to caching to security scanning. Re</text><text x=\"225\" y=\"169\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">liable reproducible secure.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Build Automation: Automate compile bundle package.</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> Deterministic incremental cached. Secure supply c</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">hain.</text></svg>",
  "codeExamples": [
    {
      "title": "Node.js Build Script (package.json)",
      "useCase": "Standard build scripts.",
      "code": "{\n  \"scripts\": {\n    \"build\": \"npm run build:ts && npm run build:vite\",\n    \"build:ts\": \"tsc --incremental\",\n    \"build:vite\": \"vite build\",\n    \"build:prod\": \"NODE_ENV=production npm run build\",\n    \"clean\": \"rm -rf dist .tsbuildinfo\",\n    \"prebuild\": \"npm run clean && npm ci\",\n    \"postbuild\": \"npm run test && npm run sbom\"\n  }\n}",
      "description": "Standard Node.js build scripts with incremental TS compilation and production optimizations."
    },
    {
      "title": "Docker Multi-Stage Build",
      "useCase": "Optimized Dockerfile.",
      "code": "# Stage 1: Build\nFROM node:20-alpine AS builder\nWORKDIR /build\nCOPY package*.json .\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Production\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /build/dist ./dist\nCOPY --from=builder /build/node_modules ./node_modules\nCOPY package.json .\nUSER node\nEXPOSE 3000\nCMD [\"node\" \"dist/server.js\"]",
      "description": "Multi-stage Docker build separates build tools from production runtime for smaller images."
    },
    {
      "title": "Build Caching in CI",
      "useCase": "Cache strategies for faster builds.",
      "code": "name: Fast Build\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n\n      # Cache npm dependencies\n      - uses: actions/cache@v3\n        with:\n          path: ~/.npm\n          key: npm-${{ hashFiles('package-lock.json') }}\n          restore-keys: npm-\n\n      # Cache TypeScript incremental build\n      - uses: actions/cache@v3\n        with:\n          path: .tsbuildinfo\n          key: tsbuild-${{ hashFiles('src/**/*.ts') }}\n\n      # Cache Docker layers\n      - uses: docker/setup-buildx-action@v2\n      - uses: docker/build-push-action@v4\n        with:\n          cache-from: type=gha\n          cache-to: type=gha,mode=max\n\n      - run: npm ci && npm run build",
      "description": "Multi-level caching: npm packages TS build info and Docker layers for fastest CI builds."
    },
    {
      "title": "Artifact Versioning Strategy",
      "useCase": "Version your build outputs.",
      "code": "# Generate version from git tag + commit\nVERSION=$(git describe --tags --always --dirty)\nCOMMIT=$(git rev-parse --short HEAD)\nBUILD_TIME=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\n\n# In Node.js: inject version at build time\necho \"{\n  \\\"version\\\": \\\"$VERSION\\\",\n  \\\"commit\\\": \\\"$COMMIT\\\",\n  \\\"buildTime\\\": \\\"$BUILD_TIME\\\"\n}\" > public/build-info.json\n\n# Tag Docker image with version\ndocker build -t myapp:$VERSION .\ndocker tag myapp:$VERSION myapp:latest\ndocker push myapp:$VERSION\ndocker push myapp:latest\n\n# Also tag with major version\nMAJOR=$(echo $VERSION | cut -d. -f1)\ndocker tag myapp:$VERSION myapp:$MAJOR.x\ndocker push myapp:$MAJOR.x",
      "description": "Version artifacts with git tag commit SHA and timestamp for traceability."
    },
    {
      "title": "SBOM Generation (CycloneDX)",
      "useCase": "Generate software bill of materials.",
      "code": "# Install CycloneDX tool\n# npm install -g @cyclonedx/bom\n\n# Generate SBOM\ncyclonedx-bom -o sbom.xml\n\n# Or as part of CI:\nname: SBOM\non: push\njobs:\n  sbom:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci\n      - name: Generate SBOM\n        uses: CycloneDX/gh-node-module-generatebom@v1\n        with:\n          path: .\n          output: ./sbom.xml\n      - name: Upload SBOM\n        uses: actions/upload-artifact@v3\n        with:\n          name: sbom\n          path: ./sbom.xml",
      "description": "SBOM generation creates a machine-readable inventory of all dependencies for vulnerability tracking."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is build automation?",
      "options": [
        "Manual compilation",
        "Automated compile package and prepare artifacts",
        "Code formatting",
        "Database migration"
      ],
      "answer": 1,
      "explanation": "Build automation compiles packages and prepares source code into deployable artifacts."
    },
    {
      "question": "What is a deterministic build?",
      "options": [
        "Random output",
        "Identical output from same source",
        "Faster build",
        "Smaller output"
      ],
      "answer": 1,
      "explanation": "Deterministic builds produce identical output from the same source every time."
    },
    {
      "question": "What does incremental build mean?",
      "options": [
        "Build everything",
        "Only rebuild changed files",
        "Build on server",
        "Build with warnings"
      ],
      "answer": 1,
      "explanation": "Incremental builds only recompile files that changed since the last build."
    },
    {
      "question": "What is the benefit of multi-stage Docker builds?",
      "options": [
        "More layers",
        "Smaller production images",
        "Faster networking",
        "More memory"
      ],
      "answer": 1,
      "explanation": "Multi-stage builds separate build tools from runtime producing smaller secure images."
    },
    {
      "question": "How should artifacts be versioned?",
      "options": [
        "Just date",
        "Semver + commit SHA",
        "Random string",
        "No versioning needed"
      ],
      "answer": 1,
      "explanation": "Artifacts should use semantic version combined with commit SHA for traceability."
    },
    {
      "question": "What is an SBOM?",
      "options": [
        "Build script",
        "Software Bill of Materials",
        "Build optimizer",
        "Source code backup"
      ],
      "answer": 1,
      "explanation": "An SBOM is a machine-readable inventory of all components and dependencies."
    },
    {
      "question": "Build Automation — What reduces errors most?",
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
      "question": "Build Automation — What improves speed?",
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
      "question": "Build Automation — What is key for monitoring?",
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
      "question": "Build Automation — What ensures quality?",
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
