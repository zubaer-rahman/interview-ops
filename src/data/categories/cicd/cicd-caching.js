export const cicd_caching = {
  "id": "cicd-caching",
  "title": "Pipeline Caching",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Pipeline caching stores frequently accessed data between pipeline runs to speed up execution.",
    "What to cache: package manager dependencies (node_modules, ~/.m2, vendor/bundle), Docker layers, build outputs.",
    "Cache key strategy: use lockfile hash for dependency cache, OS + version for toolchain cache.",
    "Intelligent dependency caching cuts build times significantly by avoiding redundant downloads."
  ],
  "laymanDefinition": "Pipeline caching is like keeping your frequently used tools on your workbench instead of putting them away in the closet after every project. If you caches npm packages between builds, each build doesn't have to re-download them — just check if the package.json changed.",
  "deepDive": [
    {
      "heading": "Cache Types",
      "text": "Dependency cache: npm cache, pip cache, Maven local repo, Bundler, Go module cache. Docker cache: Docker layers, BuildKit cache. Build cache: compiled outputs, webpack cache, Gradle cache. Tools cache: SDKs (Go, .NET, Java), Python versions."
    },
    {
      "heading": "Cache Key Strategy",
      "text": "Primary key: hash of lockfile (e.g., package-lock.json). Restore keys: fallback to partial match (e.g., os-node- prefix). Invalidation: change key when dependencies change. Cache hit: restores dependencies (no download). Cache miss: downloads fresh, saves for next run."
    },
    {
      "heading": "Best Practices",
      "text": "Cache immutable dependencies only (lockfile-based). Set appropriate cache size limits. Clean cache periodically. Use CI-native caching when available. Keep cache keys precise enough to avoid stale caches. Separate caches per OS (different binaries)."
    }
  ],
  "interviewAnswer": "Pipeline caching stores frequently accessed data between pipeline runs to speed up execution.",
  "interviewQuestions": [
    {
      "question": "What is pipeline caching?",
      "answer": "Storing dependencies and build outputs between pipeline runs to avoid re-downloading/re-building."
    },
    {
      "question": "What makes a good cache key?",
      "answer": "A hash of the lockfile (e.g., hashFiles(\\'**/package-lock.json\\')). Changes when dependencies change, invalidating cache."
    },
    {
      "question": "What should NOT be cached?",
      "answer": "Mutable outputs, environment-specific files, large rarely-used data."
    },
    {
      "question": "Pipeline Caching — How do you get started with this concept?",
      "answer": "Getting started involves understanding the basics, setting up a proof of concept, and iterating."
    },
    {
      "question": "Pipeline Caching — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Pipeline Caching — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Pipeline Caching — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Pipeline Caching — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Pipeline Caching — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Pipeline Caching — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Pipeline Caching</text><rect x=\"10\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">First Run</text><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache miss, download</text><line x1=\"150\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache Saved</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Store dependencies</text><line x1=\"320\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Next Run</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache hit, restore</text><text x=\"240\" y=\"110\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Pipeline Caching: Store deps between runs. Use loc</text><text x=\"240\" y=\"122\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">kfile hash as cache key. Faster pipelines, less ne</text><text x=\"240\" y=\"134\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">twork use.</text></svg>",
  "codeExamples": [
    {
      "title": "Cache in Actions",
      "useCase": "Cache npm dependencies.",
      "code": "- uses: actions/cache@v4\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}",
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
      "question": "What causes a cache miss?",
      "options": [
        "Running pipeline twice",
        "Lockfile changed (different hash)",
        "Time of day",
        "Number of jobs"
      ],
      "answer": 1,
      "explanation": "Cache misses when the cache key doesn\\'t match — typically when the lockfile hash changes (dependencies added/updated)."
    },
    {
      "question": "Pipeline Caching — What is the recommended approach?",
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
      "question": "Pipeline Caching — What should be prioritized?",
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
      "question": "Pipeline Caching — What is important for security?",
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
      "question": "Pipeline Caching — How to ensure reliability?",
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
      "question": "Pipeline Caching — What helps team collaboration?",
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
      "question": "Pipeline Caching — What reduces errors most?",
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
      "question": "Pipeline Caching — What improves speed?",
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
      "question": "Pipeline Caching — What is key for monitoring?",
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
      "question": "Pipeline Caching — What ensures quality?",
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
