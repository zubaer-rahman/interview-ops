export const nextjs_middleware = {
  "id": "nextjs-middleware",
  "title": "Middleware",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Middleware in Next.js runs code before a request is completed, allowing redirects, rewrites, authentication checks, and header manipulation at the edge.",
    "Defined in a single middleware.ts file at the project root, executing for every matching route before the page or API route responds.",
    "Middleware runs on the Edge Runtime for low-latency global execution, processing requests before they reach the application server.",
    "Supports conditional matching via the config.matcher array, regex patterns, and early returns for performance optimization."
  ],
  "laymanDefinition": "Middleware is like a security checkpoint at the entrance of a building. Before anyone reaches their destination, they pass through where guards can check IDs (authentication), redirect people to the right entrance, or add stamps (headers).",
  "deepDive": [
    {
      "heading": "Middleware Fundamentals",
      "text": "Middleware is defined in middleware.ts at the root of the project (same level as app/ or pages/). It exports a default async function that receives NextRequest and returns NextResponse or undefined. Middleware runs for every route that matches the config.matcher patterns before the route handler executes."
    },
    {
      "heading": "Authentication and Authorization",
      "text": "Middleware is commonly used for authentication by checking cookies, session tokens, or JWT. If unauthenticated, redirect to login. If unauthorized, show 403. Middleware can also check for specific headers or IP-based access control before the page renders."
    },
    {
      "heading": "Redirects and Rewrites",
      "text": "Middleware can perform server-side redirects (301/302) using NextResponse.redirect() and internal rewrites using NextResponse.rewrite(). Rewrites are invisible to the user but change which page handles the request. This is useful for A/B testing, localization, or legacy URL support."
    },
    {
      "heading": "Header and Cookie Manipulation",
      "text": "Middleware can set, modify, or delete request and response headers. It can set cookies, modify cache headers, or add security headers (CSP, HSTS). These modifications happen at the edge before the request reaches the application server."
    },
    {
      "heading": "Config and Matching",
      "text": "The config.matcher array specifies which routes trigger the middleware. Matchers can use exact paths, prefix patterns, or regex. Middleware should be as specific as possible to avoid unnecessary edge function invocations. Use negative lookaheads in regex to exclude specific paths like static files."
    }
  ],
  "interviewAnswer": "Middleware provides a powerful layer for request preprocessing at the edge. It is ideal for authentication, redirection, header manipulation, and A/B testing. The key is keeping middleware fast and specific, since it runs on every matched request.",
  "interviewQuestions": [
    {
      "question": "What is Middleware in Next.js?",
      "answer": "Middleware is a function that runs before a request completes, allowing you to modify the response, redirect, rewrite, or check authentication. It is defined in a single middleware.ts file at the project root and runs on the Edge Runtime for low-latency execution."
    },
    {
      "question": "Where is the middleware file placed?",
      "answer": "Middleware is placed at the root of the project, alongside the app/ or pages/ directories, not inside them. The file must be named middleware.ts (or .js) and export a default function."
    },
    {
      "question": "How do you specify which routes trigger middleware?",
      "answer": "Use the config.matcher export: export const config = { matcher: [\"/dashboard/:path*\", \"/api/:path*\"] }. Matchers can use path patterns, regex, or be omitted to match all routes. Be as specific as possible for performance."
    },
    {
      "question": "What runtime does middleware use?",
      "answer": "Middleware runs on the Edge Runtime, which is based on the Web API standards. It has limited Node.js API access but provides fast, globally distributed execution. You cannot use Node.js-specific modules like fs or path in middleware."
    },
    {
      "question": "How do you implement authentication in middleware?",
      "answer": "Check for auth tokens in cookies or headers. If missing, redirect to login: export function middleware(request) { const token = request.cookies.get(\"token\"); if (!token) return NextResponse.redirect(new URL(\"/login\", request.url)) }."
    },
    {
      "question": "Can middleware access the database?",
      "answer": "Middleware has limited capabilities and cannot directly access databases using typical drivers. Use middleware for lightweight checks (token validation, header inspection). For database-dependent logic, use Route Handlers or API routes."
    },
    {
      "question": "What is the difference between redirect and rewrite in middleware?",
      "answer": "redirect sends a 307/308 response telling the browser to go to a different URL. rewrite internally changes which route handles the request without the browser knowing. Rewrites are useful for A/B testing, localization, or proxying."
    },
    {
      "question": "How do you exclude certain paths from middleware?",
      "answer": "Use negative lookaheads in the matcher regex or exclude specific paths. For example: matcher: [\"/((?!api/auth|_next/static|favicon.ico).*)\"] excludes auth routes, static files, and favicon."
    },
    {
      "question": "Can middleware modify the response?",
      "answer": "Yes, middleware can set response headers, cookies, and even return a custom response. Use NextResponse.next() to continue with modifications, NextResponse.redirect() to redirect, or NextResponse.rewrite() to internally rewrite."
    },
    {
      "question": "How does middleware affect performance?",
      "answer": "Middleware runs on every matched request, so it should be lightweight. Avoid heavy computations, large library imports, or network requests in middleware. Use specific matchers to minimize the number of requests that trigger middleware execution."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Middleware</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Request</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Incoming</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">middleware.ts</text><text x=\"230\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check Auth</text><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redirect to /login</text><text x=\"70\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unauthorized</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Page / API Route</text><text x=\"390\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Proceed</text><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"290\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Set Headers</text><text x=\"290\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cookies/CSP</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Middleware: Runs at the edge before request reaches the application server.</text></svg>",
  "codeExamples": [
    {
      "title": "Authentication Middleware",
      "useCase": "When you need to protect dashboard routes.",
      "code": "// middleware.ts\nimport { NextResponse } from \"next/server\";\nimport type { NextRequest } from \"next/server\";\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get(\"session\");\n  if (!token) {\n    return NextResponse.redirect(new URL(\"/login\", request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = { matcher: [\"/dashboard/:path*\"] };",
      "description": "Redirects unauthenticated users to /login when accessing /dashboard/* routes."
    },
    {
      "title": "Middleware with Header Modification",
      "useCase": "When you need to add security headers to all responses.",
      "code": "export function middleware(request) {\n  const response = NextResponse.next();\n  response.headers.set(\"X-Frame-Options\", \"DENY\");\n  response.headers.set(\"X-Content-Type-Options\", \"nosniff\");\n  response.headers.set(\"Referrer-Policy\", \"strict-origin-when-cross-origin\");\n  return response;\n}",
      "description": "Adds security headers to every response before it reaches the browser."
    },
    {
      "title": "Middleware for Localization",
      "useCase": "When you need to detect user locale and redirect.",
      "code": "import { match } from \"@formatjs/intl-localematcher\";\nimport Negotiator from \"negotiator\";\n\nexport function middleware(request) {\n  const headers = { \"accept-language\": request.headers.get(\"accept-language\") || \"\" };\n  const languages = new Negotiator({ headers }).languages();\n  const defaultLocale = \"en\";\n  const locale = match(languages, [\"en\", \"fr\", \"es\"], defaultLocale);\n  if (!request.nextUrl.pathname.startsWith(\"/\" + locale)) {\n    return NextResponse.redirect(new URL(\"/\" + locale + request.nextUrl.pathname, request.url));\n  }\n}",
      "description": "Detects browser language and redirects to the appropriate locale prefix."
    },
    {
      "title": "Excluding Static Files from Middleware",
      "useCase": "When you want middleware to only run on matching routes.",
      "code": "export const config = {\n  matcher: [\n    \"/((?!api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)\",\n  ],\n};",
      "description": "Regex pattern that excludes auth API routes, static files, and common assets from middleware."
    },
    {
      "title": "Middleware for A/B Testing",
      "useCase": "When you want to route users to different page versions.",
      "code": "export function middleware(request) {\n  const variant = Math.random() > 0.5 ? \"a\" : \"b\";\n  const url = request.nextUrl.clone();\n  url.pathname = `/ab-test/${variant}${url.pathname}`;\n  return NextResponse.rewrite(url);\n}",
      "description": "Randomly assigns users to variant A or B by rewriting the request path."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Where is the middleware file located?",
      "options": [
        "Inside app/",
        "At the project root",
        "Inside pages/",
        "In the config/ folder"
      ],
      "answer": 1,
      "explanation": "middleware.ts is placed at the root of the project, next to app/ and pages/."
    },
    {
      "question": "What runtime does middleware use?",
      "options": [
        "Node.js Runtime",
        "Edge Runtime",
        "Browser Runtime",
        "Serverless Runtime"
      ],
      "answer": 1,
      "explanation": "Middleware runs on the Edge Runtime for fast, globally distributed execution."
    },
    {
      "question": "How do you redirect in middleware?",
      "options": [
        "NextResponse.redirect()",
        "response.redirect()",
        "router.push()",
        "window.location"
      ],
      "answer": 0,
      "explanation": "Use NextResponse.redirect() to send a redirect response from middleware."
    },
    {
      "question": "What does the config.matcher do?",
      "options": [
        "Defines middleware variables",
        "Specifies which routes trigger middleware",
        "Sets response headers",
        "Configures database connections"
      ],
      "answer": 1,
      "explanation": "config.matcher specifies route patterns that trigger middleware execution."
    },
    {
      "question": "Can middleware access the filesystem?",
      "options": [
        "Yes, fully",
        "No, limited Edge Runtime",
        "Yes, with fs module",
        "Only read-only"
      ],
      "answer": 1,
      "explanation": "Middleware runs on Edge Runtime which has limited Node.js API access, no filesystem."
    },
    {
      "question": "What is the difference between rewrite and redirect?",
      "options": [
        "Rewrite changes URL in browser",
        "Rewrite changes internal handler without browser knowing",
        "They are the same",
        "Redirect is client-side"
      ],
      "answer": 1,
      "explanation": "Rewrites internally change which handler serves the request without the browser being aware."
    }
  ]
};
