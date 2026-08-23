export const mern_rest_api = {
  "id": "mern-rest-api",
  "title": "REST API with MERN",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "REST API in MERN uses Express to create RESTful endpoints that React consumes via HTTP requests.",
    "Standard CRUD operations: POST (create), GET (read), PUT/PATCH (update), DELETE (delete) mapped to /api/resource.",
    "Express router organizes endpoints by resource. Controllers handle request/response logic. Mongoose models interact with MongoDB.",
    "Best practices: consistent naming (plural nouns), proper HTTP status codes, input validation, error handling middleware, pagination."
  ],
  "laymanDefinition": "A REST API is like a restaurant menu with standard ordering conventions. Each menu item (endpoint) has a specific method: GET = \"what soups do you have?\", POST = \"I want to order this\", PUT = \"change my order\", DELETE = \"cancel my order\". The waiter (Express) takes your request to the kitchen (MongoDB) and brings back the result.",
  "deepDive": [
    {
      "heading": "RESTful Resource Naming",
      "text": "Use plural nouns: /api/users, /api/items, /api/orders. Nested resources: /api/users/:userId/orders. Query parameters: /api/items?page=1&limit=10&sort=price. No verbs in URLs (/api/getItems is wrong). Use HTTP methods for actions."
    },
    {
      "heading": "HTTP Methods and Status Codes",
      "text": "GET 200 (OK), POST 201 (Created), PUT 200 (OK), DELETE 204 (No Content). Error codes: 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error). Consistent use of status codes helps clients handle responses."
    },
    {
      "heading": "Express Router Pattern",
      "text": "Define routes in separate files with express.Router(). Mount on app with app.use(\"/api/items\", itemRoutes). Routes call controller functions. Controllers use try/catch with async handlers. Error handling middleware catches unhandled errors."
    },
    {
      "heading": "Request Validation",
      "text": "Validate request body, params, and query strings. Use express-validator or Joi/Zod schemas. Validate before passing to controllers. Return 400 with detailed error messages. Never trust client input � always validate and sanitize."
    },
    {
      "heading": "Pagination and Filtering",
      "text": "Query parameters: page, limit, sort, filter. Server returns: data array, total count, page, totalPages. MongoDB: .find().skip((page-1)*limit).limit(limit).sort(). Send pagination metadata in response for client-side pagination UI."
    }
  ],
  "interviewAnswer": "REST APIs in MERN follow consistent patterns: resource-based URLs, proper HTTP methods, status codes, and layered architecture (routes ? controllers ? services ? models). Input validation is critical. Always paginate list endpoints. Use Express error handling middleware for clean error responses.",
  "interviewQuestions": [
    {
      "question": "What are the standard CRUD HTTP methods?",
      "answer": "POST (create), GET (read), PUT/PATCH (update), DELETE (delete)."
    },
    {
      "question": "What is the correct format for RESTful endpoints?",
      "answer": "Plural nouns: /api/users, /api/items/:id. Nested: /api/users/:userId/orders. No verbs in URLs."
    },
    {
      "question": "What status code is returned for a successful POST?",
      "answer": "201 Created � indicates a resource was successfully created."
    },
    {
      "question": "What is the Express Router pattern?",
      "answer": "Define routes with express.Router() in separate files, mount on app with app.use(\"/api\", router)."
    },
    {
      "question": "How do you handle errors in Express?",
      "answer": "Try/catch in controllers, pass errors to next(err), use error handling middleware at the end of middleware stack."
    },
    {
      "question": "What is the purpose of input validation?",
      "answer": "Ensure data conforms to expected format before processing. Prevents injection, type errors, and bad data."
    },
    {
      "question": "How do you implement pagination in MongoDB?",
      "answer": ".find().skip((page-1)*limit).limit(limit).sort(). Return data with total count and page metadata."
    },
    {
      "question": "What status code indicates the server encountered an error?",
      "answer": "500 Internal Server Error � generic server-side error."
    },
    {
      "question": "What is the difference between PUT and PATCH?",
      "answer": "PUT replaces the entire resource. PATCH applies partial updates."
    },
    {
      "question": "How do you structure controllers?",
      "answer": "Async functions that receive (req, res, next), extract data from request, call services/models, send response."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">REST API with MERN</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GET /items</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read all</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">POST /items</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Create</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">PUT /items/:id</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Update</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DELETE /items/:id</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Delete</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Error Handler</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Middleware</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">REST API with MERN</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Express routers, controllers, Mongoose mo</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">dels. CRUD, validation, pagination, error</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> handling.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">REST API: Resource-based endpoints with Express. C</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">RUD operations, validation, pagination, and error </text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">handling.</text></svg>",
  "codeExamples": [
    {
      "title": "Express Router and Controller",
      "useCase": "Organized route and controller pattern.",
      "code": "// routes/itemRoutes.js\nconst router = require('express').Router();\nconst { getItems, createItem } = require('../controllers/itemController');\n\nrouter.get('/', getItems);\nrouter.post('/', createItem);\nrouter.get('/:id', getItem);\nrouter.put('/:id', updateItem);\nrouter.delete('/:id', deleteItem);\n\nmodule.exports = router;\n\n// controllers/itemController.js\nconst Item = require('../models/Item');\n\nexports.getItems = async (req, res, next) => {\n  try {\n    const items = await Item.find();\n    res.json(items);\n  } catch (err) { next(err); }\n};\n\nexports.createItem = async (req, res, next) => {\n  try {\n    const item = await Item.create(req.body);\n    res.status(201).json(item);\n  } catch (err) { next(err); }\n};",
      "description": "Clean route-controller separation with error propagation."
    },
    {
      "title": "Input Validation with Express-Validator",
      "useCase": "Validate request data.",
      "code": "const { body, validationResult } = require('express-validator');\n\nconst validateItem = [\n  body('name').trim().notEmpty().withMessage('Name is required'),\n  body('price').isFloat({ min: 0 }).withMessage('Price must be positive'),\n  (req, res, next) => {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n    next();\n  }\n];\n\nrouter.post('/', validateItem, createItem);",
      "description": "Request validation middleware using express-validator."
    },
    {
      "title": "Pagination Middleware",
      "useCase": "Reusable pagination for any route.",
      "code": "const paginate = (model) => {\n  return async (req, res, next) => {\n    const page = parseInt(req.query.page) || 1;\n    const limit = parseInt(req.query.limit) || 10;\n    const skip = (page - 1) * limit;\n    const sort = req.query.sort || '-createdAt';\n\n    const [data, total] = await Promise.all([\n      model.find().sort(sort).skip(skip).limit(limit),\n      model.countDocuments()\n    ]);\n\n    res.json({\n      data,\n      pagination: {\n        page,\n        limit,\n        total,\n        totalPages: Math.ceil(total / limit)\n      }\n    });\n  };\n};\n\nrouter.get('/', paginate(Item));",
      "description": "Reusable pagination middleware that works with any Mongoose model."
    },
    {
      "title": "Error Handling Middleware",
      "useCase": "Centralized error handler.",
      "code": "// Custom error class\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\n// Async handler wrapper\nconst asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\n// Error middleware (after routes)\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    error: err.message || 'Internal Server Error',\n    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })\n  });\n});",
      "description": "Centralized error handling with custom error class and dev-friendly stack traces."
    },
    {
      "title": "API Client Setup (Axios)",
      "useCase": "React API service layer.",
      "code": "import axios from 'axios';\n\nconst api = axios.create({\n  baseURL: '/api',\n  headers: { 'Content-Type': 'application/json' },\n  timeout: 10000,\n});\n\napi.interceptors.request.use((config) => {\n  const token = localStorage.getItem('token');\n  if (token) config.headers.Authorization = `Bearer ${token}`;\n  return config;\n});\n\napi.interceptors.response.use(\n  (res) => res.data,\n  (err) => Promise.reject(err.response?.data || err)\n);\n\nexport const getItems = (params) => api.get('/items', { params });\nexport const createItem = (data) => api.post('/items', data);\nexport const updateItem = (id, data) => api.put(`/items/${id}`, data);\nexport const deleteItem = (id) => api.delete(`/items/${id}`);",
      "description": "Axios instance with auth interceptor, error handling, and typed API functions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What HTTP method creates a resource?",
      "options": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "answer": 1,
      "explanation": "POST creates a new resource and returns 201 Created."
    },
    {
      "question": "What is the correct status for a successful GET?",
      "options": [
        "201",
        "200",
        "204",
        "301"
      ],
      "answer": 1,
      "explanation": "200 OK is returned for successful GET requests."
    },
    {
      "question": "What Express pattern organizes routes?",
      "options": [
        "app.get() directly",
        "express.Router()",
        "require()",
        "module.exports"
      ],
      "answer": 1,
      "explanation": "express.Router() creates modular route handlers that can be mounted on the app."
    },
    {
      "question": "How should RESTful endpoints be named?",
      "options": [
        "Verbs like /getItems",
        "Plural nouns like /items",
        "Questions like /whatItems",
        "File extensions like /items.html"
      ],
      "answer": 1,
      "explanation": "REST endpoints use plural nouns, not verbs."
    },
    {
      "question": "What does 404 indicate?",
      "options": [
        "Success",
        "Resource not found",
        "Server error",
        "Unauthorized"
      ],
      "answer": 1,
      "explanation": "404 Not Found means the requested resource does not exist."
    },
    {
      "question": "What is the purpose of asyncHandler?",
      "options": [
        "Make synchronous code async",
        "Catch errors from async route handlers",
        "Speed up responses",
        "Log requests"
      ],
      "answer": 1,
      "explanation": "asyncHandler wraps async route handlers to catch rejected promises and forward errors."
    },
    {
      "question": "REST API with MERN — What reduces errors most?",
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
      "question": "REST API with MERN — What improves speed?",
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
      "question": "REST API with MERN — What is key for monitoring?",
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
      "question": "REST API with MERN — What ensures quality?",
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
