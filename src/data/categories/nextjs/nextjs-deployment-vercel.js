export const nextjs_deployment_vercel = {
  "id": "nextjs-deployment-vercel",
  "title": "Deployment on Vercel",
  "difficulty": "beginner",
  "estimatedMinutes": 25,
  "tldr": [
    "Vercel is the official deployment platform for Next.js, providing automatic builds, serverless functions, edge functions, ISR, and global CDN distribution.",
    "Deploy by connecting a Git repository (GitHub, GitLab, Bitbucket) to Vercel, with automatic deployments on every push to the default branch.",
    "Preview Deployments are created for every pull request, allowing testing before merging to production.",
    "Environment variables, custom domains, analytics, and logs are managed through the Vercel Dashboard or vercel.json configuration."
  ],
  "laymanDefinition": "Vercel is like a self-publishing platform for websites. You connect your code repository, and Vercel automatically builds, optimizes, and hosts your site worldwide, creating preview versions for every change before it goes live.",
  "deepDive": [
    {
      "heading": "Deployment Process",
      "text": "Connect your Git repository to Vercel. Vercel automatically detects Next.js, sets up the build command (next build), and configures the output directory. Every push to the production branch triggers a deployment. Preview deployments are created for non-production branches."
    },
    {
      "heading": "Serverless Functions",
      "text": "API routes and Route Handlers are automatically deployed as serverless functions. Each endpoint scales independently based on demand. Serverless functions have cold starts (mitigated by the Edge Runtime for low-latency use cases). Node.js and Edge runtimes are supported."
    },
    {
      "heading": "ISR and Cache Management",
      "text": "ISR pages are revalidated by Vercel\\'s edge network. On-demand ISR (revalidatePath) triggers instant regeneration. The Vercel Data Cache stores fetch() results. Cache headers can be customized for CDN behavior."
    },
    {
      "heading": "Environment Variables",
      "text": "Configure environment variables in the Vercel Dashboard or .env files. Production, Preview, and Development environments can have different values. NEXT_PUBLIC_ variables are inlined into client bundles. Sensitive variables are encrypted at rest."
    },
    {
      "heading": "Monitoring and Analytics",
      "text": "Vercel provides built-in analytics (page views, web vitals), function logs, and error tracking. Speed Insights measures real-user performance. Analytics are privacy-friendly and cookie-free. Logs can be viewed per deployment or streamed to external services."
    }
  ],
  "interviewAnswer": "Vercel provides the best deployment experience for Next.js applications with automatic optimizations, global distribution, and zero-config setup. Understanding the deployment process, environment variables, and monitoring capabilities is essential for production Next.js applications.",
  "interviewQuestions": [
    {
      "question": "How do you deploy a Next.js app to Vercel?",
      "answer": "Push your code to a Git repository (GitHub, GitLab, Bitbucket), import the repository in Vercel, and Vercel automatically detects Next.js and configures the build. Deployments are automatic on every push to the production branch."
    },
    {
      "question": "What are Preview Deployments?",
      "answer": "Preview Deployments are created for every pull request and non-production branch. They provide a unique URL for testing changes before merging to production. Preview Deployments include serverless functions and environment variables."
    },
    {
      "question": "How does Vercel handle API routes?",
      "answer": "API routes and Route Handlers are automatically deployed as serverless functions. Each endpoint scales independently. Functions have configurable memory, timeout, and region settings. Edge functions provide globally distributed execution."
    },
    {
      "question": "How does ISR work on Vercel?",
      "answer": "ISR pages are cached on Vercel\\'s edge network. Revalidation is triggered by time-based or on-demand methods. The Vercel Data Cache stores fetch() responses. ISR works seamlessly without additional Vercel-specific configuration."
    },
    {
      "question": "How do you configure environment variables on Vercel?",
      "answer": "Set environment variables in the Vercel Dashboard under Project Settings > Environment Variables. Separate values for Production, Preview, and Development. Variables prefixed with NEXT_PUBLIC_ are available client-side."
    },
    {
      "question": "What is vercel.json?",
      "answer": "A configuration file at the project root for customizing Vercel behavior: build commands, headers, redirects, rewrites, function regions, and cron jobs. Overrides automatic detection and framework defaults."
    },
    {
      "question": "How does Vercel handle custom domains?",
      "answer": "Add custom domains in the Vercel Dashboard under Domains. Vercel automatically provisions SSL certificates via Let\\'s Encrypt. Supports apex domains (example.com), subdomains (app.example.com), and wildcard domains (*.example.com)."
    },
    {
      "question": "What analytics does Vercel provide?",
      "answer": "Web Analytics: page views, unique visitors, top pages. Speed Insights: real-user Core Web Vitals (LCP, CLS, INP). Both are privacy-friendly, cookie-free, and GDPR-compliant. Enable in the Vercel Dashboard."
    },
    {
      "question": "How do you debug production issues on Vercel?",
      "answer": "Use Vercel Logs (Runtime Logs and Build Logs). Check function execution logs for errors. Use Speed Insights for performance issues. Set up error monitoring with third-party services (Sentry, Datadog). Enable Vercel Integrations for external monitoring."
    },
    {
      "question": "How does Vercel handle serverless function cold starts?",
      "answer": "Cold starts occur when a function has not been invoked recently. Mitigations: use Edge Runtime (near-zero cold starts), increase function memory allocation, use cron jobs to keep functions warm, or implement function concurrency settings."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Deployment on Vercel</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Push</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Code trigger</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Vercel Build</text><text x=\"260\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">next build</text><line x1=\"330\" y1=\"58\" x2=\"360\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"100\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy</text><text x=\"420\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Serverless</text><line x1=\"370\" y1=\"75\" x2=\"370\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"300\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Global</text><rect x=\"10\" y=\"105\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"80\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Preview</text><text x=\"80\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">PR URL</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Vercel: Automatic Git-integrated deployment with serverless functions, ISR, and global CDN.</text></svg>",
  "codeExamples": [
    {
      "title": "vercel.json Configuration",
      "useCase": "Custom build and routing config.",
      "code": "{\n  \"buildCommand\": \"next build\",\n  \"outputDirectory\": \".next\",\n  \"installCommand\": \"npm install\",\n  \"regions\": [\"iad1\", \"sfo1\"],\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        { \"key\": \"X-Frame-Options\", \"value\": \"DENY\" }\n      ]\n    }\n  ]\n}",
      "description": "Configures build settings, serverless function regions, and custom response headers."
    },
    {
      "title": "Environment Variables",
      "useCase": "Setting env vars per environment.",
      "code": "# .env.local (local development)\nDATABASE_URL=\"postgres://localhost:5432/mydb\"\nNEXT_PUBLIC_API_URL=\"http://localhost:3000\"\n\n# Vercel Dashboard (production)\nDATABASE_URL=\"postgres://prod:password@prod-host:5432/mydb\"\nNEXT_PUBLIC_API_URL=\"https://example.com\"",
      "description": "Different values for local, preview, and production environments."
    },
    {
      "title": "Custom Domain Setup",
      "useCase": "Add a custom domain.",
      "code": "// Vercel Dashboard > Domains\n// Add: example.com\n// Add: www.example.com\n\n// DNS Configuration (DNS provider)\n// A record: example.com -> 76.76.21.21\n// CNAME: www.example.com -> cname.vercel-dns.com",
      "description": "Vercel automatically provisions SSL and handles DNS routing."
    },
    {
      "title": "Preview Deployment URL",
      "useCase": "Accessing PR previews.",
      "code": "// Each PR gets a unique URL:\n// https://my-app-git-feature-branch-username.vercel.app\n\n// Or custom preview domain:\n// https://feature-branch.my-domain.com",
      "description": "Preview deployments provide sandboxed URLs for testing changes."
    },
    {
      "title": "Analytics Integration",
      "useCase": "Enable analytics.",
      "code": "// Vercel Dashboard > Analytics > Enable\n\n// OR via vercel.json:\n{ \"analytics\": { \"speedInsights\": true, \"webAnalytics\": true } }",
      "description": "Enables privacy-friendly analytics and real-user speed metrics."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What triggers a production deployment on Vercel?",
      "options": [
        "Manual only",
        "Push to default branch",
        "Weekly schedule",
        "Build button"
      ],
      "answer": 1,
      "explanation": "Pushing to the default branch (main/master) triggers automatic production deployment."
    },
    {
      "question": "What are Preview Deployments?",
      "options": [
        "Production deployments",
        "Per-PR deployments for testing",
        "Staging only",
        "Local builds"
      ],
      "answer": 1,
      "explanation": "Preview Deployments are created for each pull request with a unique URL."
    },
    {
      "question": "How does Vercel handle API routes?",
      "options": [
        "As static files",
        "As serverless functions",
        "As edge workers",
        "Not supported"
      ],
      "answer": 1,
      "explanation": "API routes are automatically deployed as serverless functions."
    },
    {
      "question": "Where do you configure environment variables?",
      "options": [
        ".env file only",
        "Vercel Dashboard",
        "next.config.js",
        "vercel.json"
      ],
      "answer": 1,
      "explanation": "Environment variables are configured in the Vercel Dashboard under Project Settings."
    },
    {
      "question": "What is vercel.json used for?",
      "options": [
        "Package management",
        "Build and routing configuration",
        "Database setup",
        "Authentication"
      ],
      "answer": 1,
      "explanation": "vercel.json customizes build commands, headers, redirects, and function configuration."
    },
    {
      "question": "What SSL support does Vercel provide?",
      "options": [
        "Manual SSL only",
        "Automatic Let's Encrypt SSL",
        "No SSL",
        "Paid SSL only"
      ],
      "answer": 1,
      "explanation": "Vercel automatically provisions and renews SSL certificates via Let\\'s Encrypt."
    }
  ]
};
