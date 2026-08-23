export const express_routing = {
  "id": "express-routing",
  "title": "Routing",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "Routing refers to how an application responds to client requests at particular endpoints (URIs) and specific HTTP methods (GET, POST, PUT, PATCH, DELETE).",
    "Express provides app.get(), app.post(), app.put(), app.patch(), app.delete(), and app.all() methods for defining routes.",
    "Route parameters named segments prefixed with colon (:) capture values from the URL and make them available via req.params.",
    "Express.Router creates modular, mountable route handlers that can be organized into separate files for better code organization."
  ],
  "laymanDefinition": "Routing is like a reception desk directing visitors to the right department. Each URL and request type (method) has a specific handler that processes it and returns the appropriate response.",
  "deepDive": [
    {
      "heading": "Route Methods and Paths",
      "text": "Express supports all HTTP methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. Route paths can be strings, string patterns, or regular expressions. Methods are chainable: app.route(\\'/path\\').get(handler).post(handler) for cleaner code on the same path with different methods."
    },
    {
      "heading": "Route Parameters",
      "text": "Route parameters are named URL segments defined with a colon: /users/:userId/books/:bookId. Values are captured in req.params: { userId: \\'123\\', bookId: \\'456\\' }. Parameters can only contain alphanumeric characters and underscores. Multiple parameters in a single path are supported."
    },
    {
      "heading": "Query Parameters",
      "text": "Query parameters from the URL query string (?key=value) are available via req.query. Express parses the query string into an object. Multiple values for the same key become arrays. Access defaults with fallback: req.query.name || \\'default\\'."
    },
    {
      "heading": "Express.Router",
      "text": "Express.Router creates modular route handlers. Define routes in separate files (routes/users.js) using router.get(), router.post(), etc. Export the router and mount it in the main app with app.use(\\'/prefix\\', router). Supports middleware at the router level for scoped functionality."
    },
    {
      "heading": "Route Organization",
      "text": "Organize routes by resource (users, products, orders) in separate files. Use route files that export routers. Group related routes using app.use() prefixes. For larger apps, consider controllers to separate route definitions from business logic. Route ordering matters - more specific routes should come before parameterized ones."
    }
  ],
  "interviewAnswer": "Express routing is intuitive and flexible. Route parameters capture dynamic URL segments, query parameters handle optional filters, and Express.Router enables modular organization of route handlers.",
  "interviewQuestions": [
    {
      "question": "What is routing in Express?",
      "answer": "Routing defines how Express responds to client requests at specific endpoints (URLs) with specific HTTP methods. Each route can have one or more handler functions that process the request and send a response."
    },
    {
      "question": "How do you define a route in Express?",
      "answer": "Use app.METHOD(PATH, HANDLER) where METHOD is an HTTP method (get, post, put, delete), PATH is the URL path, and HANDLER is a callback function that receives req and res. Example: app.get(\\'/\\', (req, res) => res.send(\\'Hello\\'))."
    },
    {
      "question": "What are route parameters?",
      "answer": "Route parameters are named URL segments defined with a colon prefix. For example, /users/:userId captures the userId value from the URL. The captured values are available in req.params."
    },
    {
      "question": "How do you access query parameters?",
      "answer": "Query parameters are available via req.query. For a URL like /search?q=express&page=2, req.query returns { q: \\'express\\', page: \\'2\\' }. Express automatically parses the query string."
    },
    {
      "question": "What is Express.Router?",
      "answer": "Express.Router is a class that creates modular, mountable route handlers. It acts like a mini Express application with its own middleware and routing. Routers can be exported and mounted in the main app using app.use()."
    },
    {
      "question": "How do you organize routes in Express?",
      "answer": "Create separate route files (routes/users.js, routes/products.js) using Express.Router. Mount them in the main app: app.use(\\'/users\\', userRouter), app.use(\\'/products\\', productRouter). For larger apps, add controllers to separate business logic from route definitions."
    },
    {
      "question": "How does route matching work?",
      "answer": "Express matches routes in the order they are defined. More specific routes should be defined before parameterized routes to avoid conflicts. Express routes are case-sensitive by default (can be changed with app.enable(\\'case sensitive routing\\'))."
    },
    {
      "question": "What is app.all() used for?",
      "answer": "app.all(\\'/path\\', handler) matches all HTTP methods for the specified path. It is useful for global middleware, authentication checks, or logging that should apply to all methods on a specific path."
    },
    {
      "question": "Can you chain route handlers?",
      "answer": "Yes, Express supports chaining multiple handlers for a single route: app.get(\\'/path\\', handler1, handler2, handler3). Handlers execute in sequence if each calls next() instead of sending a response. This is useful for validation, authentication, and then the main handler."
    },
    {
      "question": "How do you handle 404 in Express?",
      "answer": "Define a catch-all middleware after all routes: app.use((req, res) => res.status(404).send(\\'Not Found\\')). This runs when no route matches the request path. It should be the last middleware before error handlers."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Routing</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GET /users</text><rect x=\"10\" y=\"85\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"70\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users/:id</text><text x=\"70\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GET /users/:id</text><rect x=\"10\" y=\"130\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"70\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users/:id</text><text x=\"70\" y=\"158\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">POST /users/:id</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"103\" x2=\"160\" y2=\"103\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"148\" x2=\"160\" y2=\"148\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"240\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"240\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">getUser</text><rect x=\"170\" y=\"85\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"240\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"240\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">getUserById</text><rect x=\"170\" y=\"130\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"240\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"240\" y=\"158\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">createUser</text><text x=\"240\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Routing: URL path + HTTP method maps to handler functions.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Route Methods",
      "useCase": "Different HTTP methods on the same path.",
      "code": "app.get('/users', getAllUsers);\napp.get('/users/:id', getUserById);\napp.post('/users', createUser);\napp.put('/users/:id', updateUser);\napp.delete('/users/:id', deleteUser);",
      "description": "Standard CRUD routes for a users resource with route parameters for ID."
    },
    {
      "title": "Route Parameters",
      "useCase": "Accessing URL parameters.",
      "code": "app.get('/users/:userId/books/:bookId', (req, res) => {\n  const { userId, bookId } = req.params;\n  res.json({ userId, bookId });\n});",
      "description": "Multiple route parameters captured from the URL path."
    },
    {
      "title": "Query Parameters",
      "useCase": "Handling optional query strings.",
      "code": "app.get('/search', (req, res) => {\n  const { q, page = 1, limit = 10 } = req.query;\n  if (!q) return res.status(400).send('Search query required');\n  res.json({ q, page, limit });\n});",
      "description": "Query parameters provide optional filters with default values."
    },
    {
      "title": "Express.Router Module",
      "useCase": "Creating a modular route file.",
      "code": "const router = require('express').Router();\nrouter.get('/', getAllUsers);\nrouter.get('/:id', getUserById);\nrouter.post('/', createUser);\nmodule.exports = router;",
      "description": "Exporting a router to be mounted in the main app."
    },
    {
      "title": "Chained Route Handlers",
      "useCase": "Middleware applied to a specific route.",
      "code": "app.post('/users', validateUser, sanitizeInput, createUser);\nasync function validateUser(req, res, next) {\n  if (!req.body.email) return res.status(400).send('Email required');\n  next();\n}",
      "description": "Multiple handler functions execute in sequence for a single route."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How do you define a route parameter in Express?",
      "options": [
        ":param",
        "{param}",
        "<param>",
        "param"
      ],
      "answer": 0,
      "explanation": "Route parameters are defined with a colon prefix (/:param)."
    },
    {
      "question": "Where are route parameter values stored?",
      "options": [
        "req.query",
        "req.params",
        "req.body",
        "req.data"
      ],
      "answer": 1,
      "explanation": "Route parameter values are available in req.params."
    },
    {
      "question": "What Express class creates modular route handlers?",
      "options": [
        "express.Module",
        "express.Router",
        "express.Handler",
        "express.Route"
      ],
      "answer": 1,
      "explanation": "Express.Router creates modular, mountable route handlers."
    },
    {
      "question": "Which method matches all HTTP methods on a path?",
      "options": [
        "app.match()",
        "app.all()",
        "app.every()",
        "app.any()"
      ],
      "answer": 1,
      "explanation": "app.all() matches GET, POST, PUT, DELETE, and all other methods."
    },
    {
      "question": "How do you access query string parameters?",
      "options": [
        "req.params",
        "req.query",
        "req.body",
        "req.data"
      ],
      "answer": 1,
      "explanation": "Query string parameters are available via req.query."
    },
    {
      "question": "What should be placed before parameterized routes?",
      "options": [
        "Other parameterized routes",
        "More specific static routes",
        "Error handlers",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "More specific static routes should be defined before parameterized routes."
    }
  ]
};
