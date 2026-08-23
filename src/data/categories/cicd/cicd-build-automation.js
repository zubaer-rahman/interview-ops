export const cicd_build_automation = {
  "id": "cicd-build-automation",
  "title": "Build Automation",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Build automation is the process of automating the creation of software builds and associated artifacts.",
    "Includes: dependency resolution, compilation, asset bundling, code generation, packaging.",
    "Tools: npm/pnpm/yarn (JS), Maven/Gradle (Java), pip (Python), make, Docker.",
    "Build automation eliminates the error-prone manual build process, ensuring consistent, reproducible artifacts every time."
  ],
  "laymanDefinition": "Build automation is like having a robot chef that follows a recipe to cook your software. It fetches ingredients (dependencies), mixes them (compiles), prepares the dish (bundles), and plates it (packages). The recipe is your build configuration — consistent every time.",
  "deepDive": [
    {
      "heading": "Build Process",
      "text": "Dependency installation: npm ci (clean install), pip install, mvn install. Compilation: TypeScript to JS, SASS to CSS, Babel transpilation. Bundling: Webpack, Vite, Rollup, Parcel. Code generation: GraphQL types, Prisma client, OpenAPI clients. Asset optimization: minification, image optimization, tree shaking."
    },
    {
      "heading": "Build Tools by Language",
      "text": "JavaScript/TypeScript: npm, pnpm, yarn, webpack, vite, esbuild, rollup. Java: Maven, Gradle, Ant. Python: pip, poetry, setup.py. Go: go build, go mod. Rust: cargo build. C/C++: make, cmake, ninja. Docker: docker build."
    },
    {
      "heading": "Reproducible Builds",
      "text": "Lock files: package-lock.json, yarn.lock, pnpm-lock.yaml. Version pinning: exact dependency versions. CI: use clean install (npm ci) for deterministic builds. Docker: multi-stage builds, pin base image versions."
    }
  ],
  "interviewAnswer": "Build automation is the process of automating the creation of software builds and associated artifacts.",
  "interviewQuestions": [
    {
      "question": "What is build automation?",
      "answer": "The automated process of compiling code, resolving dependencies, and packaging artifacts."
    },
    {
      "question": "What is the difference between npm install and npm ci?",
      "answer": "npm ci: clean install from lockfile (faster, deterministic). npm install: may update lockfile."
    },
    {
      "question": "What is a lock file?",
      "answer": "A file that records exact dependency versions (e.g., package-lock.json) ensuring reproducible builds."
    },
    {
      "question": "Build Automation — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Build Automation — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Build Automation — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Build Automation — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Build Automation — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Build Automation — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Build Automation — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Build Automation</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dependencies</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">npm install / pip install</text><rect x=\"10\" y=\"65\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compilation</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tsc, babel, sass</text><rect x=\"10\" y=\"95\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bundling</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">webpack, vite</text><rect x=\"10\" y=\"125\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"80\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Packaging</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Docker, ZIP, JAR</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Build Automation: Automated compilation, bundling,</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> and packaging. Reproducible via lock files.</text></svg>",
  "codeExamples": [
    {
      "title": "Build Script",
      "useCase": "Node.js build example.",
      "code": "npm ci\nnpm run build\nnpm run test\ndocker build -t app:latest .",
      "description": ""
    },
    {
      "title": "Common Use Case",
      "useCase": "Typical implementation",
      "code": "# Common implementation pattern\n# Used in everyday scenarios",
      "description": "Standard use case example."
    },
    {
      "title": "Advanced Configuration",
      "useCase": "Complex scenario",
      "code": "# Advanced pattern for complex scenarios\n# Includes error handling",
      "description": "Advanced configuration example."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What ensures reproducible builds?",
      "options": [
        "Manual installation",
        "Lock files and clean install",
        "Latest versions",
        "Global dependencies"
      ],
      "answer": 1,
      "explanation": "Lock files (like package-lock.json) and clean install commands ensure reproducible, deterministic builds."
    },
    {
      "question": "Build Automation — What is the recommended approach?",
      "options": [
        "Start simple and iterate",
        "Build everything at once",
        "Skip testing",
        "Avoid planning"
      ],
      "answer": 0,
      "explanation": "Starting simple and iterating is the most effective approach."
    },
    {
      "question": "Build Automation — What should be prioritized?",
      "options": [
        "Reliability and consistency",
        "Speed only",
        "Features over quality",
        "Manual processes"
      ],
      "answer": 0,
      "explanation": "Reliability and consistency are foundational priorities."
    },
    {
      "question": "Build Automation — What is important for security?",
      "options": [
        "Access control and encryption",
        "Open access",
        "Shared passwords",
        "No auditing"
      ],
      "answer": 0,
      "explanation": "Access control and encryption are fundamental security measures."
    },
    {
      "question": "Build Automation — How to ensure reliability?",
      "options": [
        "Automated testing and monitoring",
        "Manual checks only",
        "No testing",
        "Reactive fixes"
      ],
      "answer": 0,
      "explanation": "Automated testing and monitoring ensure consistent reliability."
    },
    {
      "question": "Build Automation — What helps team collaboration?",
      "options": [
        "Shared workflows and visibility",
        "Isolated work",
        "No documentation",
        "Siloed tools"
      ],
      "answer": 0,
      "explanation": "Shared workflows and visibility enable better collaboration."
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
