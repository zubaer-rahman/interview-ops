export const express_helmet = {
  "id": "express-helmet",
  "title": "Helmet",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Helmet is a middleware collection that sets security-related HTTP response headers to protect Express apps from common web vulnerabilities.",
    "It includes 15+ smaller middleware functions that set headers like Content-Security-Policy, X-Frame-Options, X-XSS-Protection, Strict-Transport-Security, and X-Content-Type-Options.",
    "Helmet provides sensible defaults while allowing per-header customization for specific application needs, such as CSP directives for third-party scripts.",
    "Using Helmet is a security best practice that helps prevent clickjacking, XSS, MIME sniffing, and other common attacks with minimal configuration."
  ],
  "laymanDefinition": "Helmet is like putting armor on your Express application. It adds protective layers (security headers) that tell browsers to behave more securely when interacting with your site.",
  "deepDive": [
    {
      "heading": "What Helmet Protects Against",
      "text": "Clickjacking (X-Frame-Options), Cross-Site Scripting (X-XSS-Protection, Content-Security-Policy), MIME sniffing attacks (X-Content-Type-Options), SSL stripping (Strict-Transport-Security), referrer leakage (Referrer-Policy), permission overreach (Permissions-Policy)."
    },
    {
      "heading": "Content Security Policy (CSP)",
      "text": "CSP controls which resources can load on your page. Helmet sets Content-Security-Policy header. Configure: default-src, script-src, style-src, img-src, connect-src, font-src, frame-src. Use \\'self\\' for same-origin, specific domains for third-party resources."
    },
    {
      "heading": "Helmet Configuration Options",
      "text": "helmet() with defaults is recommended. Customize: helmet({ contentSecurityPolicy: { directives: { defaultSrc: [\"\\'self\\'\"], scriptSrc: [\"\\'self\\'\", \"example.com\"] } }, frameguard: { action: \"deny\" } }). Disable a header: contentSecurityPolicy: false."
    },
    {
      "heading": "Using CSP with Development",
      "text": "CSP can block inline scripts and eval(). Development tools may need \\'unsafe-eval\\' for source maps, \\'unsafe-inline\\' for HMR. Use reportOnly mode for testing: helmet.contentSecurityPolicy({ useDefaults: true, reportOnly: true })."
    },
    {
      "heading": "HSTS and HTTPS Enforcement",
      "text": "Strict-Transport-Security tells browsers to always use HTTPS. Helmet sets max-age (seconds), includeSubDomains, preload. Set high max-age (1 year = 31536000) for production. Use preload to submit to browser preload lists for permanent HTTPS enforcement."
    }
  ],
  "interviewAnswer": "Helmet is an essential security middleware for Express applications. Its 15+ security headers protect against a wide range of web vulnerabilities. Use default configuration for most apps, customize CSP for third-party resources.",
  "interviewQuestions": [
    {
      "question": "What is Helmet?",
      "answer": "Helmet is a collection of Express middleware functions that set security-related HTTP headers. It helps protect against common web vulnerabilities by configuring headers like Content-Security-Policy, X-Frame-Options, Strict-Transport-Security, and X-Content-Type-Options."
    },
    {
      "question": "What headers does Helmet set?",
      "answer": "Content-Security-Policy, Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy, Expect-CT, Origin-Agent-Cluster, Referrer-Policy, Strict-Transport-Security, X-Content-Type-Options, X-DNS-Prefetch-Control, X-Download-Options, X-Frame-Options, X-Permitted-Cross-Domain-Policies, X-Powered-By (removes), X-XSS-Protection."
    },
    {
      "question": "What is Content-Security-Policy?",
      "answer": "CSP is a header that controls which resources (scripts, styles, images, fonts) the browser is allowed to load. It prevents XSS attacks by restricting inline scripts and external resource origins. Configured via directives like default-src, script-src, style-src."
    },
    {
      "question": "How do you use Helmet with custom CSP?",
      "answer": "helmet({ contentSecurityPolicy: { directives: { defaultSrc: [\"\\'self\\'\"], scriptSrc: [\"\\'self\\'\", \"https://cdn.example.com\"], imgSrc: [\"\\'self\\'\", \"data:\"] } } }). Avoid \\'unsafe-inline\\' where possible."
    },
    {
      "question": "How do you test CSP without breaking your site?",
      "answer": "Use reportOnly mode: helmet({ contentSecurityPolicy: { useDefaults: true, reportOnly: true } }). This sends violations as reports (CSP-Report-Only header) instead of blocking. Check browser console for violation reports, then adjust policy."
    },
    {
      "question": "What is X-Frame-Options?",
      "answer": "X-Frame-Options prevents clickjacking by controlling whether your site can be embedded in iframes. Options: DENY (no embedding), SAMEORIGIN (only same site), ALLOW-FROM uri (deprecated). Helmet defaults to SAMEORIGIN."
    },
    {
      "question": "What is HSTS and how does Helmet configure it?",
      "answer": "HTTP Strict-Transport-Security tells browsers to always use HTTPS. helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }). Once set, browsers will refuse HTTP connections to your domain."
    },
    {
      "question": "Can you disable specific Helmet headers?",
      "answer": "Yes, pass false to the specific middleware: helmet({ frameguard: false, hsts: false }). Useful when a header conflicts with your hosting platform or specific requirements."
    },
    {
      "question": "How does Helmet remove X-Powered-By?",
      "answer": "Helmet removes the X-Powered-By: Express header by default. This prevents attackers from knowing your server technology. It is a simple but effective security measure against targeted exploitation."
    },
    {
      "question": "What is Permissions-Policy (formerly Feature-Policy)?",
      "answer": "Permissions-Policy controls which browser features your site can use: camera, microphone, geolocation, notifications, payment. Helmet sets restrictive defaults. Configure: helmet.permissionsPolicy({ features: { camera: [\"\\'self\\'\"], geolocation: [] } })."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Helmet</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Request</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Incoming</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Helmet</text><text x=\"260\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Security Headers</text><rect x=\"190\" y=\"90\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"260\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CSP</text><text x=\"260\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Content-Security-Policy</text><rect x=\"190\" y=\"140\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"260\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HSTS</text><text x=\"260\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Strict-Transport-Security</text><line x1=\"330\" y1=\"60\" x2=\"360\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"330\" y1=\"108\" x2=\"360\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"330\" y1=\"158\" x2=\"360\" y2=\"158\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"100\" height=\"150\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response</text><text x=\"420\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Secured</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Helmet: Security headers middleware protecting against XSS, clickjacking, and other web vulnerabilities.</text></svg>",
  "codeExamples": [
    {
      "title": "Default Helmet Usage",
      "useCase": "Apply all security headers with defaults.",
      "code": "const helmet = require('helmet');\napp.use(helmet()); // Apply all default security headers",
      "description": "One line adds 15+ security headers with sensible defaults. Place early in middleware chain."
    },
    {
      "title": "Custom CSP Configuration",
      "useCase": "Allow specific external sources.",
      "code": "app.use(helmet({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: [\"'self'\"],\n      scriptSrc: [\"'self'\", \"'unsafe-inline'\", 'cdn.example.com'],\n      styleSrc: [\"'self'\", \"'unsafe-inline'\"],\n      imgSrc: [\"'self'\", 'data:', '*.cloudfront.net'],\n      connectSrc: [\"'self'\", 'api.example.com'],\n      fontSrc: [\"'self'\", 'fonts.googleapis.com'],\n      objectSrc: [\"'none'\"],\n      upgradeInsecureRequests: []\n    }\n  }\n}));",
      "description": "Custom Content-Security-Policy directives controlling resources from specific domains."
    },
    {
      "title": "HSTS with Preload",
      "useCase": "Enforce HTTPS with preload.",
      "code": "app.use(helmet({\n  hsts: {\n    maxAge: 31536000, // 1 year in seconds\n    includeSubDomains: true,\n    preload: true\n  }\n}));",
      "description": "Tells browsers to always use HTTPS for one year, including subdomains. Preload for browser preload lists."
    },
    {
      "title": "Disabling Specific Headers",
      "useCase": "Remove headers that conflict.",
      "code": "app.use(helmet({\n  frameguard: false, // Allow embedding in iframes\n  hsts: false,      // HTTPS handled by hosting platform\n  crossOriginEmbedderPolicy: false, // Allow cross-origin resources\n}));",
      "description": "Disable specific headers when they conflict with your hosting provider or application requirements."
    },
    {
      "title": "CSP Report Only",
      "useCase": "Test CSP without blocking.",
      "code": "app.use(helmet({\n  contentSecurityPolicy: {\n    useDefaults: true,\n    reportOnly: true,\n    directives: {\n      reportUri: '/csp-violation-report'\n    }\n  }\n}));",
      "description": "Report-Only mode sends violation reports without blocking resources. Check browser console for violations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What class of vulnerabilities does Helmet primarily protect against?",
      "options": [
        "SQL injection",
        "XSS and clickjacking",
        "DDoS attacks",
        "CSRF"
      ],
      "answer": 1,
      "explanation": "Helmet protects against XSS, clickjacking, MIME sniffing, and other browser-based attacks via security headers."
    },
    {
      "question": "What CSP directive controls script sources?",
      "options": [
        "style-src",
        "script-src",
        "img-src",
        "connect-src"
      ],
      "answer": 1,
      "explanation": "script-src directive controls which scripts the browser is allowed to execute."
    },
    {
      "question": "What header prevents clickjacking?",
      "options": [
        "CSP",
        "X-Frame-Options",
        "HSTS",
        "X-Content-Type-Options"
      ],
      "answer": 1,
      "explanation": "X-Frame-Options prevents your site from being embedded in iframes on other sites."
    },
    {
      "question": "What does Helmet do with X-Powered-By?",
      "options": [
        "Sets it to Express",
        "Removes it",
        "Encrypts it",
        "Leaves it"
      ],
      "answer": 1,
      "explanation": "Helmet removes the X-Powered-By: Express header to hide server technology."
    },
    {
      "question": "How many seconds is 1 year for HSTS maxAge?",
      "options": [
        "86400",
        "31536000",
        "2592000",
        "604800"
      ],
      "answer": 1,
      "explanation": "31536000 seconds = 1 year, the recommended maxAge for HSTS in production."
    },
    {
      "question": "What mode allows testing CSP without blocking resources?",
      "options": [
        "Report-Only",
        "Test mode",
        "Debug mode",
        "Preview mode"
      ],
      "answer": 0,
      "explanation": "CSP Report-Only mode sends violation reports without blocking, useful for testing."
    }
  ]
};
