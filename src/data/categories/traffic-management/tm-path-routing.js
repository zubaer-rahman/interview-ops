export const tm_path_routing = {
  "id": "tm-path-routing",
  "title": "Path Routing",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Path routing directs requests to different handlers or services based on the URL path component.",
    "Example: GET /users ? user service, GET /orders ? order service, GET /products ? product service.",
    "It is the most common and intuitive routing strategy � the URL path tells you what resource is being requested.",
    "Path routing is supported by every web framework, reverse proxy, API gateway, and ingress controller."
  ],
  "laymanDefinition": "Path routing is like a museum map. The map says Gallery A: Paintings, Gallery B: Sculptures, Cafe. Visitors follow the signs based on what they want to see. Similarly, /users takes you to the users section, /orders to the orders section.",
  "deepDive": [
    {
      "heading": "Static vs Dynamic Paths",
      "text": "Static: exact path match (/about, /contact). Dynamic: path parameters (/users/:id, /posts/:postId/comments/:commentId). Static paths are simpler and faster. Dynamic paths extract variables from the URL. Most frameworks support both with path parameters using :param or {param} syntax."
    },
    {
      "heading": "Path Parameters vs Query Parameters",
      "text": "Path parameters identify a specific resource: /users/42 (user with ID 42). Query parameters filter or modify: /users?status=active&page=2. Path params are required for resource identity. Query params are optional and used for filtering, pagination, sorting."
    },
    {
      "heading": "Path Routing in Microservices",
      "text": "API Gateway maps paths to services: /api/users/* ? user-service, /api/orders/* ? order-service. Subdomain routing (users.api.example.com) is an alternative. Path prefix stripping: gateway strips /api/users before forwarding to user-service."
    },
    {
      "heading": "Wildcard and Catch-All Routes",
      "text": "Wildcard: /files/* matches /files/any/path. Catch-all: /* matches everything (usually for SPA fallback or 404 handling). Pattern matching: /users/*/settings matches any user\\'s settings page."
    }
  ],
  "interviewAnswer": "Path routing is the foundation of RESTful API design. Use path parameters for resource identity, query parameters for filtering. In microservices, the API Gateway maps URL paths to backend services. Design paths hierarchically and consistently.",
  "interviewQuestions": [
    {
      "question": "What is path routing?",
      "answer": "Directing requests based on the URL path component � the most common routing strategy."
    },
    {
      "question": "What is a dynamic path parameter?",
      "answer": "A variable part of the URL path that captures a value: /users/:id captures the user ID."
    },
    {
      "question": "What is the difference between path and query parameters?",
      "answer": "Path params identify resources (/users/42). Query params filter/modify (/users?status=active)."
    },
    {
      "question": "What is a wildcard route?",
      "answer": "A route pattern that matches any path segment: /files/* matches /files/anything."
    },
    {
      "question": "How do API Gateways handle path routing?",
      "answer": "Gateway maps paths to services: /api/users ? user-service, optionally stripping the prefix."
    },
    {
      "question": "What is a catch-all route?",
      "answer": "A route matching all paths � used as a 404 handler or SPA fallback."
    },
    {
      "question": "How does Express.js define path parameters?",
      "answer": "Using colon prefix: app.get(\\'/users/:id\\', handler)."
    },
    {
      "question": "What is the difference between /users and /users/:id?",
      "answer": "/users is a collection resource. /users/:id is a specific resource instance."
    },
    {
      "question": "What is path prefix stripping?",
      "answer": "Removing the path prefix before forwarding � /api/users becomes /users when sent to backend."
    },
    {
      "question": "Why is consistent path design important?",
      "answer": "Consistent paths (plural nouns, lowercase, hyphens) make APIs intuitive and predictable."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Path Routing</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GET /users</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">List users</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"235\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Path Router</text><text x=\"235\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Match /users ? User Handler</text><line x1=\"320\" y1=\"48\" x2=\"350\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"360\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Service</text><text x=\"420\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Database</text><rect x=\"10\" y=\"70\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"90\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users/:id</text><text x=\"90\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic parameter</text><rect x=\"10\" y=\"105\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"90\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users/*/settings</text><text x=\"90\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wildcard</text><rect x=\"10\" y=\"140\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"90\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/users?status=active</text><text x=\"90\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query param</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Path Routing: Route requests by URL path � static </text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">paths, dynamic parameters, wildcards, query params</text><text x=\"240\" y=\"209\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "Express Path Routing",
      "useCase": "Path parameters.",
      "code": "app.get('/about', (req, res) => { res.send('About page'); });\napp.get('/users/:userId', (req, res) => {\n  const id = req.params.userId;\n  res.json({ userId: id });\n});\napp.get('/posts/:postId/comments/:commentId', (req, res) => {\n  const { postId, commentId } = req.params;\n  res.json({ postId, commentId });\n});\napp.get('/files/*', (req, res) => {\n  const filePath = req.params[0];\n  res.sendFile(filePath);\n});",
      "description": "Express.js path routing with dynamic parameters, multiple params, and wildcards."
    },
    {
      "title": "Nginx Path-Based Routing",
      "useCase": "Route by path.",
      "code": "server {\n  listen 80;\n  location /api/users { proxy_pass http://user-service:3000; }\n  location /api/orders { proxy_pass http://order-service:3001; }\n  location /api/products { proxy_pass http://product-service:3002; }\n  location /static { root /var/www/static; expires 30d; }\n}",
      "description": "Nginx path-based routing to different upstream services."
    },
    {
      "title": "React Router Path Routing",
      "useCase": "Client-side routing.",
      "code": "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nfunction App() { return (\n  <BrowserRouter>\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n      <Route path=\"/users\" element={<UserList />} />\n      <Route path=\"/users/:id\" element={<UserDetail />} />\n      <Route path=\"*\" element={<NotFound />} />\n    </Routes>\n  </BrowserRouter>\n); }",
      "description": "React Router client-side routing with path parameters and catch-all."
    },
    {
      "title": "Kubernetes Ingress Path Routing",
      "useCase": "Path-based ingress.",
      "code": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /api/users(/|$)(.*)\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: user-service\n            port:\n              number: 80",
      "description": "Kubernetes Ingress path-based routing with regex path capture."
    },
    {
      "title": "FastAPI Path Routing",
      "useCase": "Python path routing.",
      "code": "from fastapi import FastAPI\napp = FastAPI()\n@app.get(\"/\")\nasync def root(): return {'message': 'Hello'}\n@app.get(\"/users/{user_id}\")\nasync def get_user(user_id: int): return {'user_id': user_id}\n@app.get(\"/search\")\nasync def search(q: str = None, limit: int = 10):\n  return {'query': q, 'limit': limit}",
      "description": "FastAPI path routing with type-annotated path parameters."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What identifies a specific resource in a URL?",
      "options": [
        "Query parameters",
        "Path parameters",
        "Headers",
        "Body"
      ],
      "answer": 1,
      "explanation": "Path parameters identify specific resources (/users/42)."
    },
    {
      "question": "What syntax does Express use for path parameters?",
      "options": [
        ":param",
        "{param}",
        "<param>",
        "$param"
      ],
      "answer": 0,
      "explanation": "Express uses colon prefix: /users/:id."
    },
    {
      "question": "What is a catch-all route used for?",
      "options": [
        "Performance",
        "404 handling",
        "Authentication",
        "Caching"
      ],
      "answer": 1,
      "explanation": "Catch-all routes handle undefined paths � often used as 404 handlers."
    },
    {
      "question": "What is path prefix stripping?",
      "options": [
        "Removing query params",
        "Removing path prefix before forwarding",
        "Adding path prefix",
        "Encrypting the path"
      ],
      "answer": 1,
      "explanation": "Path prefix stripping removes the API prefix (/api) before proxying."
    },
    {
      "question": "Where should filtering parameters go?",
      "options": [
        "Path",
        "Query string",
        "Headers",
        "Body"
      ],
      "answer": 1,
      "explanation": "Query parameters are used for filtering, pagination, and sorting."
    },
    {
      "question": "What does /users/:id/comments/:commentId contain?",
      "options": [
        "One param",
        "Two params",
        "Three params",
        "No params"
      ],
      "answer": 1,
      "explanation": "Two path parameters: id and commentId."
    }
  ]
};
