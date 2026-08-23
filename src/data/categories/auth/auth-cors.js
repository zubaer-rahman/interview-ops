export const auth_cors = {
  "id": "auth-cors",
  "title": "CORS (Cross-Origin Resource Sharing)",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "CORS is a browser security mechanism that controls which origins can access resources on your server.",
    "Same-Origin Policy (SOP): browsers block JavaScript from making requests to a different origin (protocol + domain + port) than the page's origin.",
    "CORS relaxes SOP by allowing servers to specify which origins are permitted via HTTP headers (Access-Control-Allow-Origin).",
    "CORS is enforced by the browser — it does NOT protect the server from malicious requests. Non-browser clients (curl, server-to-server) are unaffected."
  ],
  "laymanDefinition": "CORS is like your apartment building's visitor policy. The doorman (browser) checks every visitor. By default, only residents (same origin) can enter. CORS is the \"approved visitors list\" — you tell the doorman \"my friend from building B (other origin) is allowed to visit my apartment.\"",
  "deepDive": [
    {
      "heading": "Same-Origin Policy",
      "text": "Origin = protocol (https) + domain (api.example.com) + port (443). Two URLs with different origins cannot read each other\\'s resources. SOP prevents evil.com from reading your bank.com data. Important: SOP blocks reading (response), not writing (request). POST requests still go through."
    },
    {
      "heading": "CORS Headers",
      "text": "Access-Control-Allow-Origin: which origins are allowed (* or specific). Access-Control-Allow-Methods: allowed HTTP methods. Access-Control-Allow-Headers: allowed request headers. Access-Control-Allow-Credentials: whether cookies/auth allowed. Access-Control-Max-Age: cache preflight duration. Access-Control-Expose-Headers: headers exposed to JS."
    },
    {
      "heading": "Simple vs Preflight Requests",
      "text": "Simple: GET, HEAD, POST with standard content types (text/plain, application/x-www-form-urlencoded, multipart/form-data). No custom headers. Preflight: anything else. Browser sends OPTIONS preflight request before the actual request. Server must respond with allowed methods/headers."
    },
    {
      "heading": "CORS with Credentials",
      "text": "Cross-origin requests that include cookies or HTTP authentication require: Access-Control-Allow-Credentials: true. Access-Control-Allow-Origin must be a specific origin (NOT *). Client must set credentials: \\'include\\' (fetch) or withCredentials: true (XHR)."
    },
    {
      "heading": "CORS Security Considerations",
      "text": "CORS is client-side only — does not prevent server-to-server attacks. Avoid Access-Control-Allow-Origin: * if credentials are involved. Use specific origin lists in production. Validate Origin header server-side. CORS misconfiguration is a common security issue: too permissive origins expose APIs."
    }
  ],
  "interviewAnswer": "CORS is about controlled access. Be as specific as possible with allowed origins. Use credentials mode carefully — requires specific origin (not *). Understand preflight to avoid performance issues. Remember: CORS protects clients, not servers. Use authentication/authorization for server-side protection.",
  "interviewQuestions": [
    {
      "question": "What is CORS?",
      "answer": "Cross-Origin Resource Sharing — a browser mechanism controlling cross-origin resource access via HTTP headers."
    },
    {
      "question": "What is Same-Origin Policy?",
      "answer": "A browser security feature that blocks JavaScript from making requests to a different origin than the page."
    },
    {
      "question": "What defines an origin?",
      "answer": "Protocol (https) + Domain (example.com) + Port (443). All three must match for same origin."
    },
    {
      "question": "What is a preflight request?",
      "answer": "An OPTIONS request sent by the browser before complex cross-origin requests to check if the server permits them."
    },
    {
      "question": "What is the difference between simple and preflight requests?",
      "answer": "Simple: GET/POST with standard content-type, no custom headers. Preflight: everything else (requires OPTIONS check)."
    },
    {
      "question": "What does Access-Control-Allow-Origin: * do?",
      "answer": "Allows any origin to access the resource. Cannot be used with credentials (cookies)."
    },
    {
      "question": "When do you need withCredentials?",
      "answer": "When sending cookies or HTTP authentication in cross-origin requests. Server must set specific Allow-Origin."
    },
    {
      "question": "Does CORS protect the server?",
      "answer": "No. CORS is enforced by the browser only. Server-to-server or curl requests bypass CORS."
    },
    {
      "question": "How do you handle CORS in development?",
      "answer": "Use a proxy in dev server (webpack-dev-server, vite). Or configure CORS middleware with permissive dev settings."
    },
    {
      "question": "What is a common CORS misconfiguration?",
      "answer": "Setting Access-Control-Allow-Origin to * when credentials are needed, or using a regex incorrectly on the Origin header."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CORS (Cross-Origin Resource Sharing)</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Browser</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">myapp.com</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API Server</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">api.example.com</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Preflight</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">OPTIONS request</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CORS Headers</text><text x=\"65\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Allow-Origin, Method</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s, Headers</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Credentials</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cookies allowed</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Specific Origin</text><text x=\"65\" y=\"163\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Not wildcard for cre</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ds</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CORS</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cross-Origin Resource Sharing: ser</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ver tells browser which origins ar</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">e allowed. SOP + CORS headers.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CORS: Browser security mechanism controlling cross</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">-origin API access using HTTP headers.</text></svg>",
  "codeExamples": [
    {
      "title": "CORS Middleware (Express — cors package)",
      "useCase": "Standard CORS configuration.",
      "code": "const cors = require('cors');\n\n// Development: allow all origins\napp.use(cors()); // Access-Control-Allow-Origin: *\n\n// Production: specific origins\napp.use(cors({\n  origin: ['https://myapp.com', 'https://admin.myapp.com'],\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n  credentials: true,\n  maxAge: 86400 // cache preflight for 24h\n}));\n\n// Per-route configuration:\napp.get('/api/public', cors(), (req, res) => {\n  // Public API — any origin allowed\n});\n\napp.post('/api/orders',\n  cors({ origin: 'https://myapp.com', credentials: true }),\n  (req, res) => {\n    // Authenticated — specific origin\n  }\n);",
      "description": "CORS middleware configuration for dev (permissive) and prod (specific origins)."
    },
    {
      "title": "Custom CORS Middleware (Express)",
      "useCase": "Manual CORS header handling.",
      "code": "const allowedOrigins = [\n  'https://myapp.com',\n  'https://admin.myapp.com'\n];\n\napp.use((req, res, next) => {\n  const origin = req.headers.origin;\n\n  // Allow specific origins\n  if (allowedOrigins.includes(origin)) {\n    res.setHeader('Access-Control-Allow-Origin', origin);\n    res.setHeader('Access-Control-Allow-Credentials', 'true');\n  }\n\n  res.setHeader('Access-Control-Allow-Methods',\n    'GET, POST, PUT, DELETE, OPTIONS'\n  );\n  res.setHeader('Access-Control-Allow-Headers',\n    'Content-Type, Authorization'\n  );\n  res.setHeader('Access-Control-Max-Age', '86400');\n\n  // Handle preflight\n  if (req.method === 'OPTIONS') {\n    return res.status(204).end();\n  }\n\n  next();\n});",
      "description": "Custom CORS middleware for fine-grained origin control with preflight handling."
    },
    {
      "title": "Dynamic Origin Validation",
      "useCase": "Validate against a whitelist.",
      "code": "const cors = require('cors');\n\nconst whitelist = [\n  'https://myapp.com',\n  /.myapp.com$/\n];\n\nconst corsOptions = {\n  origin: (origin, callback) => {\n    // Allow requests with no origin (server-to-server)\n    if (!origin) return callback(null, true);\n\n    const allowed = whitelist.some(entry => {\n      if (entry instanceof RegExp) {\n        return entry.test(origin);\n      }\n      return entry === origin;\n    });\n\n    if (allowed) {\n      callback(null, true);\n    } else {\n      callback(new Error('Not allowed by CORS'));\n    }\n  },\n  credentials: true\n};\n\napp.use(cors(corsOptions));",
      "description": "Dynamic CORS origin validation with support for regex patterns and subdomains."
    },
    {
      "title": "CORS with Credentials (Fetch + Express)",
      "useCase": "Send cookies cross-origin.",
      "code": "// Client-side (fetch with credentials)\nfetch('https://api.example.com/orders', {\n  credentials: 'include', // send cookies\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n\n// Alternative: Axios\n// axios.get('https://api.example.com/orders',\n//   { withCredentials: true }\n// );\n\n// Server-side (must have specific origin)\napp.use(cors({\n  origin: 'https://myapp.com', // NOT *\n  credentials: true // set cookie header\n}));\n\n// Without credentials: true, browser blocks\n// the response due to CORS policy",
      "description": "Cross-origin requests with credentials require specific origin and credentials: true on both sides."
    },
    {
      "title": "Proxy CORS for Development",
      "useCase": "Avoid CORS in development.",
      "code": "// vite.config.js — proxy API requests\nexport default {\n  server: {\n    proxy: {\n      '/api': {\n        target: 'http://localhost:3000',\n        changeOrigin: true\n      }\n    }\n  }\n};\n\n// webpack-dev-server proxy\n// devServer: {\n//   proxy: {\n//     '/api': 'http://localhost:3000'\n//   }\n// }\n\n// Frontend calls /api/users (same origin)\n// Dev server proxies to http://localhost:3000/api/users\n// No CORS needed — same origin in browser",
      "description": "Use a proxy in development to avoid CORS issues entirely — the browser sees same-origin requests."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does CORS stand for?",
      "options": [
        "Cross-Origin Resource Sharing",
        "Cross-Site Scripting",
        "Cross-Origin Request Security",
        "Content Security Policy"
      ],
      "answer": 0,
      "explanation": "CORS = Cross-Origin Resource Sharing."
    },
    {
      "question": "What defines a web origin?",
      "options": [
        "Protocol + Domain + Port",
        "Domain only",
        "URL path",
        "IP address"
      ],
      "answer": 0,
      "explanation": "Origin = protocol (https) + domain (example.com) + port (443)."
    },
    {
      "question": "What is a preflight request?",
      "options": [
        "The actual request",
        "An OPTIONS check before the request",
        "A redirect to the origin",
        "A cookie validation"
      ],
      "answer": 1,
      "explanation": "Preflight is an OPTIONS request to check server permissions before the actual request."
    },
    {
      "question": "What header specifies allowed origins?",
      "options": [
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Headers",
        "Access-Control-Max-Age"
      ],
      "answer": 1,
      "explanation": "Access-Control-Allow-Origin specifies which origins can access the resource."
    },
    {
      "question": "When must Access-Control-Allow-Origin be specific (not *)?",
      "options": [
        "Always",
        "When using credentials",
        "For GET requests",
        "For same-origin requests"
      ],
      "answer": 1,
      "explanation": "Wildcard (*) cannot be used with credentials. A specific origin is required."
    },
    {
      "question": "Does CORS protect the server from malicious requests?",
      "options": [
        "Yes",
        "No, only the browser enforces CORS",
        "Depends on configuration",
        "Only for POST"
      ],
      "answer": 1,
      "explanation": "CORS is browser-enforced only. Server-to-server or curl requests bypass it completely."
    }
  ]
};
