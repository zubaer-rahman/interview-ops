export const express_architecture = {
  "id": "express-architecture",
  "title": "Express Architecture",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Express is a minimal, unopinionated Node.js web framework that provides a robust set of features for web and mobile applications.",
    "Built on top of Node.js HTTP module, Express adds middleware-based architecture, routing, and request/response handling abstractions.",
    "Follows a single-threaded, event-driven model using the request-response cycle with middleware functions that process requests in sequence.",
    "Its minimal core is extended through middleware packages, making it highly flexible and customizable for various application needs."
  ],
  "laymanDefinition": "Express is like a basic kitchen that provides the essential tools (stove, sink, counter) but lets you add your own appliances (middleware) as needed. It does not force a specific way of cooking (unopinionated).",
  "deepDive": [
    {
      "heading": "Core Architecture",
      "text": "Express is built around the concept of middleware - functions that have access to the request object, response object, and the next middleware function in the application\\'s request-response cycle. Each middleware can modify the request/response, end the cycle, or call the next middleware. The app is essentially a pipeline of middleware functions."
    },
    {
      "heading": "Application Object",
      "text": "The express() function creates an Express application object that represents the entire application. This object provides methods for routing (app.get, app.post), middleware configuration (app.use), settings (app.set), and starting the server (app.listen). The application object is the central organizing unit of an Express app."
    },
    {
      "heading": "Request and Response Objects",
      "text": "Express extends Node.js native request and response objects with additional methods and properties. req.params, req.query, req.body provide access to request data. res.json(), res.send(), res.render(), res.redirect() provide convenient response methods. These extended objects are passed through the middleware chain."
    },
    {
      "heading": "Middleware Pipeline",
      "text": "Middleware functions are executed in the order they are added to the application. Each middleware receives req, res, and next. It can modify req/res, send a response, or call next() to pass control to the next middleware. Error-handling middleware has four parameters (err, req, res, next) and catches errors passed via next(err)."
    },
    {
      "heading": "Configuration and Settings",
      "text": "Express supports application-level settings via app.set() and app.get(). Environment-based configuration (NODE_ENV) controls behavior like view caching, error formatting, and stack traces. The app can be configured to trust proxy headers, set view engines, and customize other behaviors without modifying application code."
    }
  ],
  "interviewAnswer": "Express architecture is fundamentally middleware-based. Understanding the middleware pipeline, how request/response objects flow through it, and how to structure applications using the Express application object is essential for building robust server-side applications with Node.js.",
  "interviewQuestions": [
    {
      "question": "What is Express.js architecture?",
      "answer": "Express follows a middleware-based architecture. The application is a pipeline of middleware functions that process incoming requests sequentially. Each middleware can modify the request and response objects, terminate the request-response cycle, or pass control to the next middleware. Express is minimal and unopinionated, allowing developers to structure applications as needed."
    },
    {
      "question": "How does the middleware pipeline work?",
      "answer": "Middleware functions are executed in the order they are registered using app.use() or route-specific methods. Each middleware receives req, res, and next. It processes the request, optionally modifies req/res, and either sends a response or calls next() to pass control to the next middleware. If no middleware sends a response, the request hangs."
    },
    {
      "question": "What is the Express application object?",
      "answer": "The application object is created by calling express(). It represents the Express application and provides methods for routing (get, post, put, delete), middleware registration (use), settings (set, get, enable, disable), and server startup (listen). It is the central organizing object."
    },
    {
      "question": "How does Express extend Node.js request/response objects?",
      "answer": "Express adds properties like req.params (route parameters), req.query (query string), req.body (parsed request body), req.path, req.hostname, req.ip. Response methods include res.json(), res.send(), res.status(), res.redirect(), res.render(), res.set(). These make common web development tasks more convenient."
    },
    {
      "question": "What is the purpose of app.use()?",
      "answer": "app.use() mounts middleware at a specified path or globally. Middleware mounted with app.use() runs for every request matching the path (or all requests if no path specified). It is used for application-level middleware like logging, parsing, authentication, and error handling."
    },
    {
      "question": "How does Express handle errors?",
      "answer": "Express has built-in error handling. Errors in middleware are passed to error-handling middleware using next(err). Error-handling middleware has four parameters (err, req, res, next) and is defined last in the middleware chain. It can format and send error responses."
    },
    {
      "question": "What is the significance of calling next()?",
      "answer": "next() passes control to the next middleware function in the pipeline. Without calling next(), the request hangs and eventually times out. next() can be called without arguments to proceed normally, or with an argument (like new Error()) to trigger error-handling middleware."
    },
    {
      "question": "How does Express compare to other Node.js frameworks?",
      "answer": "Express is minimal and unopinionated compared to frameworks like Koa (which uses async/await natively), Fastify (which focuses on performance and schema validation), or NestJS (which provides an Angular-like structured architecture). Express has the largest ecosystem and community."
    },
    {
      "question": "What is the typical folder structure for an Express app?",
      "answer": "Common structure: app.js or server.js as entry point, routes/ for route definitions, controllers/ for business logic, middleware/ for custom middleware, models/ for data models, config/ for configuration, views/ for templates, and public/ for static files. Express does not enforce any specific structure."
    },
    {
      "question": "How do you configure an Express app for production?",
      "answer": "Set NODE_ENV=production (hides stack traces, enables caching), use a process manager like PM2, implement logging with morgan/winston, add compression (compression middleware), set security headers (helmet), configure rate limiting, use environment variables for configuration, and run behind a reverse proxy (nginx)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Express Architecture</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"75\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Request In</text><text x=\"75\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP</text><line x1=\"140\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"245\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 1</text><text x=\"245\" y=\"63\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logging</text><rect x=\"180\" y=\"80\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"245\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 2</text><text x=\"245\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parsing</text><rect x=\"180\" y=\"125\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"245\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware 3</text><text x=\"245\" y=\"153\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth</text><line x1=\"180\" y1=\"70\" x2=\"180\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"180\" y1=\"115\" x2=\"180\" y2=\"125\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"310\" y1=\"92\" x2=\"340\" y2=\"92\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"60\" width=\"120\" height=\"65\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"410\" y=\"76\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"410\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Response</text><line x1=\"180\" y1=\"160\" x2=\"180\" y2=\"175\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"175\" width=\"130\" height=\"20\" rx=\"4\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1\"/><text x=\"245\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Error Handler</text><text x=\"245\" y=\"203\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">4 params</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Express Architecture: Middleware pipeline processes requests sequentially.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Express App",
      "useCase": "Creating a simple Express server.",
      "code": "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello World'));\napp.listen(3000, () => console.log('Server running on port 3000'));",
      "description": "Creates an Express app with a single route and starts the server."
    },
    {
      "title": "Application Settings",
      "useCase": "Configuring Express settings.",
      "code": "const express = require('express');\nconst app = express();\napp.set('view engine', 'ejs');\napp.set('trust proxy', true);\napp.enable('case sensitive routing');\nconsole.log(app.get('view engine')); // 'ejs'",
      "description": "Sets view engine, proxy trust, and case-sensitive routing options."
    },
    {
      "title": "Using app.use()",
      "useCase": "Mounting middleware globally.",
      "code": "const express = require('express');\nconst app = express();\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(express.static('public'));\napp.use('/api', require('./routes/api'));",
      "description": "Registers body parsing and static file middleware at the application level."
    },
    {
      "title": "NODE_ENV Configuration",
      "useCase": "Environment-based behavior.",
      "code": "const app = express();\nif (app.get('env') === 'production') {\n  app.set('trust proxy', 1);\n  // Disable stack traces in errors\n} else {\n  app.use(require('morgan')('dev'));\n}\nconsole.log('Environment:', app.get('env'));",
      "description": "Checks NODE_ENV to conditionally apply production-specific configuration."
    },
    {
      "title": "Structuring with Express.Router",
      "useCase": "Modular route organization.",
      "code": "const express = require('express');\nconst app = express();\nconst userRouter = require('./routes/users');\nconst productRouter = require('./routes/products');\napp.use('/users', userRouter);\napp.use('/products', productRouter);",
      "description": "Organizes routes into separate modules using Express.Router, mounted at specific paths."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the central organizing object in Express?",
      "options": [
        "Middleware",
        "Application object",
        "Router object",
        "Request object"
      ],
      "answer": 1,
      "explanation": "The application object (created by express()) is the central organizing unit."
    },
    {
      "question": "What happens if no middleware sends a response?",
      "options": [
        "Express sends default response",
        "Request hangs until timeout",
        "Error is thrown",
        "next() is called automatically"
      ],
      "answer": 1,
      "explanation": "Without a response, the request hangs and eventually times out."
    },
    {
      "question": "How many parameters does error-handling middleware have?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 2,
      "explanation": "Error-handling middleware has four parameters: err, req, res, next."
    },
    {
      "question": "What does app.set() do?",
      "options": [
        "Sets route handlers",
        "Configures application settings",
        "Sets middleware",
        "Sets response headers"
      ],
      "answer": 1,
      "explanation": "app.set() allows configuring Express application settings like view engine and proxy trust."
    },
    {
      "question": "How does middleware pass control to the next function?",
      "options": [
        "return",
        "next()",
        "continue()",
        "done()"
      ],
      "answer": 1,
      "explanation": "Calling next() passes control to the next middleware in the pipeline."
    },
    {
      "question": "Which npm package extends Express with additional features?",
      "options": [
        "express-settings",
        "express-validator",
        "helmet",
        "express-core"
      ],
      "answer": 2,
      "explanation": "helmet is a middleware package that adds security headers to Express responses."
    }
  ]
};
