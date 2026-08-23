export const express_request_lifecycle = {
  "id": "express-request-lifecycle",
  "title": "Request Lifecycle",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "The Express request lifecycle describes the complete path of an HTTP request from arrival to response, including all middleware and handler execution.",
    "Request enters Express, passes through the middleware chain in registration order, reaches the matching route handler, and the response flows back through the middleware stack.",
    "Understanding the lifecycle is crucial for debugging, performance optimization, and correctly ordering middleware like body parsers before routes and error handlers last.",
    "The lifecycle includes: request parsing -> middleware chain -> route matching -> handler execution -> response generation -> middleware (response phase) -> send to client."
  ],
  "laymanDefinition": "The request lifecycle is like a package traveling through a sorting facility. It goes through multiple conveyor belts (middleware) in a specific order, gets sorted to the right destination (route), is processed (handler), and then the response travels back through the belts in reverse.",
  "deepDive": [
    {
      "heading": "Request Arrival and Parsing",
      "text": "The HTTP request hits the Express server. Node.js parses headers and creates the IncomingMessage (req) and ServerResponse (res) objects. Express extends these with its own properties and methods. Body parsing middleware (express.json(), express.urlencoded()) reads the stream and populates req.body."
    },
    {
      "heading": "Middleware Chain Execution",
      "text": "Registered middleware executes in order of registration (first to last). Each middleware can: modify req/res, call next() to continue, call next(err) for errors, or send a response to end the cycle. Middleware without a path runs for all requests; middleware with a path runs only for matching paths."
    },
    {
      "heading": "Route Matching and Handler Execution",
      "text": "Express matches the request path and method against registered routes. The first matching route handler executes. Route handlers are just middleware that typically send a response. If no route matches, Express falls through to the 404 handler (or default \"Cannot GET /\" response)."
    },
    {
      "heading": "Response Generation and Send",
      "text": "Route handlers generate responses using res.json(), res.send(), res.render(), res.redirect(), etc. These methods set appropriate headers and send the response body. After sending, the response phase begins where middleware can still modify the response via res.on(\\'finish\\') listeners."
    },
    {
      "heading": "Response Phase and Cleanup",
      "text": "After response is sent, Express triggers res.on(\\'finish\\') and res.on(\\'close\\') events. Middleware that wrapped res.end() can execute cleanup code. The connection may be kept alive for HTTP/1.1 or closed. Error handling middleware catches any errors from any phase."
    }
  ],
  "interviewAnswer": "The Express request lifecycle is a linear pipeline: request arrives -> middleware chain runs -> route handler executes -> response is sent -> response phase runs. Understanding this flow is essential for proper middleware ordering, debugging, and performance optimization.",
  "interviewQuestions": [
    {
      "question": "What is the Express request lifecycle?",
      "answer": "The lifecycle is: 1) Request arrives and is parsed, 2) Middleware chain executes in registration order, 3) Route handler matches and executes, 4) Response is generated and sent, 5) Response phase runs (finish/close events). Each middleware can pass control with next() or end the cycle by sending a response."
    },
    {
      "question": "In what order does middleware execute?",
      "answer": "Middleware executes in the exact order it is registered using app.use() or router.use(). First registered runs first. Middleware with path prefixes only runs for matching paths. Order matters: body parsers before routes, logging early, error handlers last."
    },
    {
      "question": "What happens if no route matches?",
      "answer": "If no route matches the request path and method, Express falls through all middleware and routes. The default behavior is to send a 404 response with \"Cannot GET /path\" (HTML). Custom 404 middleware should be added after all routes: app.use((req, res) => res.status(404).send(\\'Not Found\\'))."
    },
    {
      "question": "What is the difference between next() and next(err)?",
      "answer": "next() passes control to the next middleware in the chain. next(err) skips all remaining regular middleware and jumps directly to the first error-handling middleware (4 parameters). This is how errors propagate in Express."
    },
    {
      "question": "When does body parsing happen?",
      "answer": "Body parsing middleware (express.json(), express.urlencoded()) must be registered before routes that need the parsed body. It reads the request stream, parses it, and populates req.body. Without it, req.body is undefined. It should come early in the middleware chain."
    },
    {
      "question": "How does the response flow back?",
      "answer": "After the route handler sends a response (res.json(), etc.), Express sends headers and body to the client. The response phase begins: res.on(\\'finish\\') fires when headers are sent, res.on(\\'close\\') fires when connection closes. Middleware that wrapped res.end() can run cleanup code here."
    },
    {
      "question": "What is the purpose of res.on(\\'finish\\')?",
      "answer": "res.on(\\'finish\\') fires when the response headers are sent to the OS. It is used for logging, metrics, and cleanup. It fires after the response is sent but before the connection closes. Unlike close, it fires even on successful responses."
    },
    {
      "question": "How does Express handle async route handlers?",
      "answer": "In Express 4, async route handlers must manually catch errors and call next(err) (or use express-async-errors). In Express 5, async errors are automatically caught and passed to error middleware. Unhandled promise rejections in Express 4 can crash the process."
    },
    {
      "question": "What is the difference between req and res lifecycle?",
      "answer": "req lifecycle: created by Node.js -> extended by Express -> populated by middleware -> consumed by route handler. res lifecycle: created by Node.js -> extended by Express -> built up by route handler -> sent to client -> finish/close events. They are independent but coordinated."
    },
    {
      "question": "Why does middleware order matter?",
      "answer": "Middleware executes in registration order. A middleware that sends a response stops the chain. Body parsers must run before routes that read req.body. Auth middleware must run before protected routes. Error handlers must be last. Logging should be early. Order determines behavior."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Request Lifecycle</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Request</text><text x=\"75\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Incoming</text><line x1=\"140\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"30\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 1</text><text x=\"250\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logging</text><rect x=\"180\" y=\"80\" width=\"140\" height=\"30\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"250\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 2</text><text x=\"250\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Body Parse</text><rect x=\"180\" y=\"120\" width=\"140\" height=\"30\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"250\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 3</text><text x=\"250\" y=\"148\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth</text><line x1=\"180\" y1=\"70\" x2=\"180\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"180\" y1=\"110\" x2=\"180\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"78\" x2=\"350\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"95\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"135\" x2=\"350\" y2=\"135\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"360\" y=\"65\" width=\"120\" height=\"100\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"420\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"420\" y=\"93\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Response</text><line x1=\"360\" y1=\"165\" x2=\"330\" y2=\"165\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"175\" width=\"140\" height=\"20\" rx=\"4\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1\"/><text x=\"250\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Error Handler</text><text x=\"250\" y=\"203\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">next(err)</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Request Lifecycle: Parse -> Middleware Chain -> Route Handler -> Response -> Cleanup.</text></svg>",
  "codeExamples": [
    {
      "title": "Middleware Order Example",
      "useCase": "Correct ordering of middleware.",
      "code": "const app = express();\napp.use(morgan('combined'));        // 1. Logging (early)\napp.use(express.json());            // 2. Body parsing (before routes)\napp.use(cors());                    // 3. CORS\napp.use(helmet());                  // 4. Security headers\napp.use(authMiddleware);            // 5. Auth (before protected routes)\napp.use('/api', apiRouter);         // 6. Routes\napp.use(notFoundHandler);           // 7. 404 (after routes)\napp.use(errorHandler);              // 8. Error handler (last)",
      "description": "Middleware order: logging -> body parsing -> CORS -> security -> auth -> routes -> 404 -> error handler."
    },
    {
      "title": "Wrapping res.end for Metrics",
      "useCase": "Capturing response timing.",
      "code": "function responseTime(req, res, next) {\n  const start = process.hrtime.bigint();\n  const originalEnd = res.end;\n  res.end = function(chunk, encoding, callback) {\n    const duration = Number(process.hrtime.bigint() - start) / 1e6;\n    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration.toFixed(2)}ms`);\n    return originalEnd.call(res, chunk, encoding, callback);\n  };\n  next();\n}",
      "description": "Wraps res.end to measure and log response time after the response is sent."
    },
    {
      "title": "Async Handler Wrapper",
      "useCase": "Auto-catch async errors in Express 4.",
      "code": "const asyncHandler = fn => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get('/users', asyncHandler(async (req, res) => {\n  const users = await User.findAll();\n  res.json(users);\n}));",
      "description": "Wraps async route handlers to automatically catch promise rejections and forward to error middleware."
    },
    {
      "title": "Finish Event for Cleanup",
      "useCase": "Running code after response is sent.",
      "code": "app.use((req, res, next) => {\n  res.on('finish', () => {\n    console.log('Response sent:', res.statusCode);\n    // Cleanup: close db connections, release locks\n  });\n  next();\n});",
      "description": "Uses res.on(\\'finish\\') to run cleanup code after the response headers are sent."
    },
    {
      "title": "Error Propagation",
      "useCase": "How errors flow through the lifecycle.",
      "code": "app.get('/error', (req, res, next) => {\n  throw new Error('Sync error');  // Caught by Express\n});\napp.get('/async-error', asyncHandler(async (req, res) => {\n  throw new Error('Async error'); // Caught by wrapper\n}));\napp.use((err, req, res, next) => {\n  res.status(500).json({ error: err.message });\n});",
      "description": "Sync throws and async rejections (with wrapper) both reach error-handling middleware."
    }
  ],
  "mcqQuestions": [
    {
      "question": "In what order does Express execute middleware?",
      "options": [
        "Reverse registration",
        "Registration order",
        "Alphabetical",
        "Random"
      ],
      "answer": 1,
      "explanation": "Middleware executes in the exact order it is registered."
    },
    {
      "question": "What happens when next(err) is called?",
      "options": [
        "Continues normal chain",
        "Jumps to error handler",
        "Stops all processing",
        "Restarts middleware"
      ],
      "answer": 1,
      "explanation": "next(err) skips all regular middleware and goes to error-handling middleware."
    },
    {
      "question": "Where should body parsers be registered?",
      "options": [
        "After routes",
        "Before routes",
        "At the end",
        "Order does not matter"
      ],
      "answer": 1,
      "explanation": "Body parsers must be registered before routes that need req.body."
    },
    {
      "question": "What event fires after response headers are sent?",
      "options": [
        "close",
        "finish",
        "end",
        "complete"
      ],
      "answer": 1,
      "explanation": "res.on(\\'finish\\') fires when headers are sent to the OS."
    },
    {
      "question": "What is the default 404 response in Express?",
      "options": [
        "JSON",
        "HTML with Cannot GET",
        "Empty",
        "Redirect"
      ],
      "answer": 1,
      "explanation": "Default 404 is an HTML page saying \"Cannot GET /path\"."
    },
    {
      "question": "How does Express 5 handle async errors differently?",
      "options": [
        "Manual catch required",
        "Auto-catches async errors",
        "Ignores async errors",
        "Throws sync errors"
      ],
      "answer": 1,
      "explanation": "Express 5 automatically catches promise rejections from async handlers."
    }
  ]
};
