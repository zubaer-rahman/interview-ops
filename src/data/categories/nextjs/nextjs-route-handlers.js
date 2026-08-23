export const nextjs_route_handlers = {
  "id": "nextjs-route-handlers",
  "title": "Route Handlers",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Route Handlers allow creating API endpoints within Next.js using route.js files in the App Router directory.",
    "Support all HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS) via exported async functions named after the method.",
    "Route Handlers are server-only and do not increase client bundle size, making them ideal for form submissions, webhooks, and internal API calls.",
    "Support dynamic routes (route groups), middleware integration, cookies/headers access, streaming responses, and request body parsing."
  ],
  "laymanDefinition": "Route Handlers are like having a mini backend server built into your frontend project. You create files with special names and export functions for GET, POST, etc., and Next.js automatically turns them into API endpoints.",
  "deepDive": [
    {
      "heading": "Route Handler Basics",
      "text": "Create a route.js file in the app directory. Export async functions named after HTTP methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. Each function receives a Request object and returns a Response or NextResponse. Route Handlers are server-only and cannot be used in Client Components."
    },
    {
      "heading": "Request and Response Handling",
      "text": "Route Handlers receive the standard Web Request API. Parse JSON with request.json(), read form data with request.formData(), access headers with request.headers, and get query parameters from the URL. Responses use the standard Web Response API or NextResponse for convenience methods."
    },
    {
      "heading": "Dynamic Route Handlers",
      "text": "Create route handlers in dynamic route folders: app/api/items/[id]/route.js. Access route parameters via the second argument: export async function GET(request, { params }) { ... }. Supports catch-all routes ([...slug]) and optional catch-all routes ([[...slug]])."
    },
    {
      "heading": "Middleware and Authentication",
      "text": "Route Handlers integrate with Next.js middleware (middleware.js) for authentication, rate limiting, and request preprocessing. They can access cookies (via request.cookies or next/headers) and headers (via request.headers or headers() from next/headers)."
    },
    {
      "heading": "Streaming and Edge Runtime",
      "text": "Route Handlers support streaming responses using the Web Streams API. They can run on the Edge Runtime for low-latency global responses or the Node.js Runtime for full Node.js API access. The runtime is selected automatically based on used APIs or explicit configuration."
    }
  ],
  "interviewAnswer": "Route Handlers provide a first-class API layer within Next.js applications, eliminating the need for a separate backend server for many use cases. They are ideal for form handling, webhook endpoints, API proxies, and server-side business logic.",
  "interviewQuestions": [
    {
      "question": "What are Route Handlers in Next.js?",
      "answer": "Route Handlers are API endpoints defined by route.js files in the App Router directory. Each exported HTTP method function (GET, POST, PUT, etc.) handles requests to that route. They are server-only, do not affect client bundle size, and work with the standard Web Request/Response API."
    },
    {
      "question": "How do you create a GET Route Handler?",
      "answer": "Create a route.js file and export an async function named GET: export async function GET(request) { return Response.json({ message: \"Hello\" }) }. The function receives the incoming Request object and must return a Response or NextResponse."
    },
    {
      "question": "How do you access route parameters in handlers?",
      "answer": "Dynamic route parameters are available in the second argument: export async function GET(request, { params }) { const id = params.id }. The params object matches the dynamic segment names defined by the folder structure (e.g., [id] provides params.id)."
    },
    {
      "question": "How do you parse request bodies?",
      "answer": "Use the Request API methods: request.json() for JSON bodies, request.formData() for form data, request.text() for plain text. These return Promises that resolve to the parsed body. Always validate and type-check parsed data before use."
    },
    {
      "question": "Can Route Handlers access cookies?",
      "answer": "Yes, via the cookies() function from next/headers: import { cookies } from \"next/headers\"; const cookieStore = cookies(); const token = cookieStore.get(\"token\"). Alternatively, use request.cookies for read-only access."
    },
    {
      "question": "What runtimes do Route Handlers support?",
      "answer": "Route Handlers support both the Edge Runtime (fast, globally distributed, limited Node.js APIs) and the Node.js Runtime (full Node.js API access, filesystem, databases). The runtime is selected automatically or can be forced with export const runtime = \"edge\" or \"nodejs\"."
    },
    {
      "question": "How do Route Handlers differ from API Routes in the Pages Router?",
      "answer": "Route Handlers (App Router) use route.js files and the Web Request/Response API. API Routes (Pages Router) use pages/api/ files and Express-like req/res objects. Route Handlers support Edge Runtime, streaming, and better typing."
    },
    {
      "question": "Can Route Handlers be called from Client Components?",
      "answer": "Yes, Client Components can call Route Handlers via fetch() just like any external API. Route Handlers are essentially internal API endpoints. This is the recommended pattern for form submissions and server actions that need explicit API endpoints."
    },
    {
      "question": "How do you handle CORS in Route Handlers?",
      "answer": "Set CORS headers in the Response object: return new Response(null, { headers: { \"Access-Control-Allow-Origin\": \"*\", \"Access-Control-Allow-Methods\": \"GET, POST, PUT, DELETE\" } }). For preflight requests, export an OPTIONS handler."
    },
    {
      "question": "How do you implement error handling in Route Handlers?",
      "answer": "Use try-catch blocks and return appropriate HTTP status codes. Return Response.json({ error: message }, { status: 400 }) for client errors and Response.json({ error: \"Internal Server Error\" }, { status: 500 }) for server errors. Use NextResponse for convenience methods like NextResponse.redirect()."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Route Handlers</text><rect x=\"10\" y=\"40\" width=\"100\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Request</text><text x=\"60\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"110\" y1=\"58\" x2=\"130\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"40\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"205\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">route.js</text><text x=\"205\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GET / POST handler</text><line x1=\"270\" y1=\"58\" x2=\"290\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"300\" y=\"40\" width=\"100\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"350\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Logic</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Process</text><line x1=\"300\" y1=\"75\" x2=\"300\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"295\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response.json()</text><text x=\"295\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">JSON Response</text><rect x=\"10\" y=\"105\" width=\"100\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Headers/Cookies</text><text x=\"60\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Route Handlers: API endpoints defined by route.js in the App Router directory.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic GET Route Handler",
      "useCase": "When you need a simple API endpoint.",
      "code": "// app/api/hello/route.js\nexport async function GET() {\n  return Response.json({ message: \"Hello World\" });\n}",
      "description": "Creates a GET endpoint at /api/hello that returns JSON."
    },
    {
      "title": "POST Handler with Body Parsing",
      "useCase": "When handling form submissions or webhook payloads.",
      "code": "// app/api/contact/route.js\nexport async function POST(request) {\n  const body = await request.json();\n  const { name, email } = body;\n  return Response.json({ success: true, name }, { status: 201 });\n}",
      "description": "Parses JSON request body and returns a 201 response."
    },
    {
      "title": "Dynamic Route Handler",
      "useCase": "When you need CRUD operations on a resource.",
      "code": "// app/api/items/[id]/route.js\nexport async function GET(request, { params }) {\n  const item = await db.findItem(params.id);\n  if (!item) return Response.json({ error: \"Not found\" }, { status: 404 });\n  return Response.json(item);\n}\n\nexport async function DELETE(request, { params }) {\n  await db.deleteItem(params.id);\n  return new Response(null, { status: 204 });\n}",
      "description": "Handles GET and DELETE for a specific item by ID, with 404 handling."
    },
    {
      "title": "Route Handler with Headers and Cookies",
      "useCase": "When you need authentication context.",
      "code": "import { cookies, headers } from \"next/headers\";\n\nexport async function GET() {\n  const cookieStore = cookies();\n  const token = cookieStore.get(\"auth-token\");\n  const headersList = headers();\n  const referer = headersList.get(\"referer\");\n  return Response.json({ token, referer });\n}",
      "description": "Accesses server-side cookies and request headers using next/headers utilities."
    },
    {
      "title": "CORS-Enabled Route Handler",
      "useCase": "When your API needs to be called from external origins.",
      "code": "export async function GET() {\n  return Response.json({ data: \"public\" }, {\n    headers: {\n      \"Access-Control-Allow-Origin\": \"*\",\n      \"Access-Control-Allow-Methods\": \"GET, OPTIONS\"\n    }\n  });\n}\n\nexport async function OPTIONS() {\n  return new Response(null, {\n    headers: {\n      \"Access-Control-Allow-Origin\": \"*\",\n      \"Access-Control-Allow-Methods\": \"GET, OPTIONS\"\n    }\n  });\n}",
      "description": "Handles CORS preflight requests and adds CORS headers to the response."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What file defines Route Handlers in the App Router?",
      "options": [
        "api.js",
        "route.js",
        "handler.js",
        "endpoint.js"
      ],
      "answer": 1,
      "explanation": "Route Handlers are defined in route.js files within the app directory."
    },
    {
      "question": "How do you access route parameters in a Route Handler?",
      "options": [
        "From request.params",
        "From the second function argument params",
        "From global params object",
        "From URL query string"
      ],
      "answer": 1,
      "explanation": "Parameters are available in the second argument: GET(request, { params })."
    },
    {
      "question": "What API should you use to parse a JSON request body?",
      "options": [
        "request.body",
        "request.json()",
        "JSON.parse(request)",
        "request.text()"
      ],
      "answer": 1,
      "explanation": "request.json() parses the JSON body and returns a Promise."
    },
    {
      "question": "Which import provides cookie access in Route Handlers?",
      "options": [
        "next/server",
        "next/cookies",
        "next/headers",
        "next/request"
      ],
      "answer": 2,
      "explanation": "cookies() is imported from next/headers for server-side cookie access."
    },
    {
      "question": "How do you set the runtime to Edge for a Route Handler?",
      "options": [
        "export const runtime = \"edge\"",
        "export const edge = true",
        "Set edgeRuntime in config",
        "Use edge.js extension"
      ],
      "answer": 0,
      "explanation": "Export export const runtime = \"edge\" to use the Edge Runtime."
    },
    {
      "question": "What does the OPTIONS handler do in a Route Handler?",
      "options": [
        "Handles PUT requests",
        "Handles CORS preflight requests",
        "Handles DELETE requests",
        "Handles redirect requests"
      ],
      "answer": 1,
      "explanation": "The OPTIONS handler responds to CORS preflight requests from browsers."
    }
  ]
};
