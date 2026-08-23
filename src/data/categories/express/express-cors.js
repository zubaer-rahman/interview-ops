export const express_cors = {
  "id": "express-cors",
  "title": "CORS",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "CORS (Cross-Origin Resource Sharing) is a security mechanism that controls which origins, methods, and headers are allowed when browsers make cross-origin requests.",
    "Express CORS middleware (cors package) configures Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, and Access-Control-Allow-Credentials headers.",
    "CORS errors occur when a frontend from one origin (e.g., http://localhost:3000) tries to access an API from a different origin (e.g., http://localhost:5000) without proper headers.",
    "Configuration: specific origin for production, wildcard (*) for public APIs, credentials support for cookies/authorization headers, and preflight (OPTIONS) handling."
  ],
  "laymanDefinition": "CORS is like a guest list for a party. The server (bouncer) checks the browser's ID (origin) against the allowed list. If the origin is not on the list, the browser refuses to share any data from the server.",
  "deepDive": [
    {
      "heading": "Same-Origin vs Cross-Origin",
      "text": "Same-origin: same protocol (https), host (example.com), port (443). Different port, host, or protocol = cross-origin. Browsers block cross-origin requests by default for security (prevents one site from reading another site\\'s data). CORS selectively relaxes these restrictions."
    },
    {
      "heading": "Simple vs Preflight Requests",
      "text": "Simple requests: GET, HEAD, POST with content types text/plain, multipart/form-data, application/x-www-form-urlencoded. No custom headers. Preflight requests: all other requests send an OPTIONS preflight to check permissions before the actual request. CORS middleware handles both."
    },
    {
      "heading": "CORS Headers",
      "text": "Access-Control-Allow-Origin (allowed origins), Access-Control-Allow-Methods (GET, POST, PUT, DELETE, etc.), Access-Control-Allow-Headers (custom headers like Authorization, Content-Type), Access-Control-Allow-Credentials (cookies/auth), Access-Control-Max-Age (cache preflight), Access-Control-Expose-Headers (client-accessible response headers)."
    },
    {
      "heading": "Credentials and Cookies",
      "text": "For cross-origin cookies and auth: set credentials: true in CORS config and withCredentials: true in fetch/axios. Access-Control-Allow-Origin must be a specific origin (not *) when using credentials. Cookies must have SameSite=None and Secure."
    },
    {
      "heading": "CORS for Production",
      "text": "Use specific origins (not *) for production. Use environment variables: const allowedOrigins = process.env.CORS_ORIGIN?.split(\\',\\') || [\\'http://localhost:3000\\']. Set multi-origin whitelist for staging/ prod. Handle OPTIONS preflight correctly."
    }
  ],
  "interviewAnswer": "CORS is a browser security mechanism that Express apps must configure correctly to serve frontend clients. Use specific origins in production, enable credentials when needed, and understand the simple vs preflight distinction.",
  "interviewQuestions": [
    {
      "question": "What is CORS and why is it needed?",
      "answer": "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls cross-origin HTTP requests. It is needed because browsers block cross-origin requests by default (Same-Origin Policy). CORS headers tell the browser which origins are allowed to access resources."
    },
    {
      "question": "How does express CORS middleware work?",
      "answer": "The cors npm package intercepts responses and adds appropriate Access-Control-* headers. It handles simple requests (headers added to response) and preflight requests (responds to OPTIONS with allowed methods/headers). Configure via options object or per-route."
    },
    {
      "question": "What is a preflight request?",
      "answer": "A preflight request is an OPTIONS request sent by the browser before the actual cross-origin request. It asks the server which methods, headers, and origins are allowed. The server responds with CORS headers. The actual request is sent only if the preflight succeeds."
    },
    {
      "question": "What are common CORS configuration options?",
      "answer": "origin (allowed origins, or function for dynamic check), methods (allowed HTTP methods: GET, POST, PUT, DELETE, etc.), allowedHeaders (custom headers: Content-Type, Authorization), credentials (enable cookies/auth), maxAge (seconds to cache preflight)."
    },
    {
      "question": "How do you enable credentials with CORS?",
      "answer": "Set credentials: true in cors options and withCredentials: true in client fetch. Access-Control-Allow-Origin must be a specific origin (not *). Cookies must have SameSite=None and Secure. Only needed for authenticated cross-origin requests."
    },
    {
      "question": "How do you allow multiple origins?",
      "answer": "Use a function: origin: function(origin, callback) { const allowed = [\\'https://site1.com\\', \\'https://site2.com\\']; if (!origin || allowed.includes(origin)) callback(null, true); else callback(new Error(\\'Not allowed by CORS\\')); }."
    },
    {
      "question": "What is the difference between * and specific origins?",
      "answer": "* allows any origin (public APIs). Specific origins restrict access to listed domains. Specific origins are required for credentials: true. Production APIs typically use specific origins. Development often uses * or environment-based configuration."
    },
    {
      "question": "How do you handle CORS with Express subdomain APIs?",
      "answer": "Use dynamic origin check: origin: (origin, cb) => { const host = new URL(origin).hostname; cb(null, host.endsWith(\\'.example.com\\') || ALLOWED.includes(origin)); }. Allows subdomains and specific origins."
    },
    {
      "question": "How do you test CORS configuration?",
      "answer": "Use curl to check headers: curl -H \"Origin: http://example.com\" -I http://localhost:3000/api. Check for Access-Control-Allow-Origin in response. Browser dev tools network tab shows CORS errors. Use online CORS testers or options endpoint check."
    },
    {
      "question": "How does CORS relate to security?",
      "answer": "CORS is NOT authentication. It only controls which origins can read responses. Any origin can still send requests (POST data). Authentication and authorization are separate. CORS with credentials exposes cookies to allowed origins only."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CORS</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Browser</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">http://localhost:3000</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Preflight</text><text x=\"260\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">OPTIONS</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"95\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"260\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Actual Request</text><text x=\"260\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GET /api</text><line x1=\"330\" y1=\"113\" x2=\"360\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"70\" width=\"100\" height=\"50\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"420\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CORS Config</text><text x=\"420\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Access-Control-*</text><line x1=\"370\" y1=\"50\" x2=\"370\" y2=\"40\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"160\" width=\"140\" height=\"25\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"80\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response</text><text x=\"80\" y=\"188\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Headers Set</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CORS: Browser sends Origin, server responds with Access-Control-Allow-Origin headers.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic CORS for All Origins",
      "useCase": "Simple configuration for public APIs.",
      "code": "const cors = require('cors');\napp.use(cors()); // Allow all origins (public API)",
      "description": "Enables CORS for all origins with default settings. Suitable for public APIs."
    },
    {
      "title": "Specific Origin with Options",
      "useCase": "Restrict to specific frontend.",
      "code": "const corsOptions = {\n  origin: 'https://myapp.example.com',\n  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n  credentials: true,\n  maxAge: 3600\n};\napp.use(cors(corsOptions));",
      "description": "Restricts to specific origin, allows standard methods and auth headers, enables credentials."
    },
    {
      "title": "Dynamic Origin Function",
      "useCase": "Allow multiple origins with fallback.",
      "code": "const allowed = ['https://app.example.com', 'https://staging.example.com'];\napp.use(cors({\n  origin: (origin, cb) => {\n    if (!origin || allowed.includes(origin)) return cb(null, true);\n    cb(new Error('Not allowed by CORS'));\n  },\n  credentials: true\n}));",
      "description": "Dynamic origin check allows multiple specific origins. No origin check for same-origin or non-browser requests."
    },
    {
      "title": "Per-Route CORS",
      "useCase": "Different CORS for different routes.",
      "code": "const cors = require('cors');\n\napp.get('/public', cors(), publicHandler);\napp.get('/api/users', cors({ origin: 'https://dashboard.example.com' }), usersHandler);\napp.options('/api/users', cors()); // Handle preflight",
      "description": "Public endpoints use open CORS, sensitive endpoints use restricted CORS."
    },
    {
      "title": "CORS with Auth and Cookies",
      "useCase": "Enabling cross-origin credentials.",
      "code": "app.use(cors({\n  origin: 'https://myapp.example.com',\n  credentials: true\n}));\n\n// Client-side (fetch):\nfetch('https://api.example.com/user', {\n  credentials: 'include'\n});",
      "description": "Enables cookies and auth headers cross-origin. Origin must be specific (not *). Client must set credentials: include."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What header does CORS add to specify allowed origins?",
      "options": [
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Credentials"
      ],
      "answer": 1,
      "explanation": "Access-Control-Allow-Origin specifies which origins can access the resource."
    },
    {
      "question": "What HTTP method is used for preflight requests?",
      "options": [
        "GET",
        "POST",
        "OPTIONS",
        "HEAD"
      ],
      "answer": 2,
      "explanation": "Preflight requests use the OPTIONS method to check permissions before the actual request."
    },
    {
      "question": "What is required when using credentials: true?",
      "options": [
        "Wildcard origin (*)",
        "Specific origin (not *)",
        "No origin header",
        "Any origin"
      ],
      "answer": 1,
      "explanation": "When credentials are enabled, a specific origin must be specified (not wildcard)."
    },
    {
      "question": "What npm package enables CORS in Express?",
      "options": [
        "helmet",
        "cors",
        "express-cors",
        "cors-handler"
      ],
      "answer": 1,
      "explanation": "The cors package provides Express middleware for configuring CORS headers."
    },
    {
      "question": "What is a simple CORS request?",
      "options": [
        "Any request with custom headers",
        "GET, HEAD, POST with standard content types",
        "PUT requests",
        "DELETE requests"
      ],
      "answer": 1,
      "explanation": "Simple requests are GET, HEAD, POST with standard content types and no custom headers."
    },
    {
      "question": "What does maxAge control?",
      "options": [
        "Cookie expiry",
        "How long preflight is cached",
        "Request timeout",
        "Session duration"
      ],
      "answer": 1,
      "explanation": "maxAge specifies how many seconds the browser can cache the preflight response."
    }
  ]
};
