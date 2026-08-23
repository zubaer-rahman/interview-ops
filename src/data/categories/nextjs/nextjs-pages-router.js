export const nextjs_pages_router = {
  "id": "nextjs-pages-router",
  "title": "Pages Router",
  "difficulty": "beginner",
  "estimatedMinutes": 25,
  "tldr": [
    "The Pages Router is Next.js' original routing system, using a file-system convention where files in the pages/ directory map directly to URL routes.",
    "Supports dynamic routes with bracket syntax ([id].js), catch-all routes ([...slug].js), and optional catch-all routes ([[...slug]].js).",
    "Uses getServerSideProps, getStaticProps, and getStaticPaths for data fetching at the page level.",
    "The _app.js file wraps all pages, _document.js customizes the HTML document structure, and API routes are defined in pages/api/."
  ],
  "laymanDefinition": "The Pages Router is like a filing system where every file you put in the \"pages\" folder automatically becomes a webpage, and the file name determines the website address.",
  "deepDive": [
    {
      "heading": "File-System Routing Basics",
      "text": "In the Pages Router, any .js, .jsx, .ts, or .tsx file inside the pages/ directory automatically becomes a route. The file path relative to pages/ determines the URL path. For example, pages/about.js maps to /about, and pages/blog/index.js maps to /blog. Index files (index.js) represent the root of their directory."
    },
    {
      "heading": "Dynamic Routes and Catch-All Routes",
      "text": "Dynamic routes use square brackets: [id].js maps to /1, /abc, etc. Catch-all routes use [...slug].js and match any number of path segments, returning them as an array. Optional catch-all routes use [[...slug]].js and match even without the parameter. These patterns enable flexible URL structures for content-driven sites."
    },
    {
      "heading": "Data Fetching Methods",
      "text": "The Pages Router provides three main data fetching functions: getStaticProps (build-time data fetching for SSG), getServerSideProps (request-time data fetching for SSR), and getStaticPaths (specifying dynamic paths to pre-render for SSG). These functions run on the server side only and inject props into the page component."
    },
    {
      "heading": "Custom App and Document",
      "text": "_app.js (pages/_app.js) initializes all pages, allowing global styles, layout components, and persistent state. _document.js (pages/_document.js) customizes the HTML document structure (html, head, body tags) and is only rendered on the server. _document.js is used for custom fonts, meta tags, and third-party scripts that must be in the <head>."
    },
    {
      "heading": "API Routes",
      "text": "API routes are defined in pages/api/ and allow building backend endpoints within the Next.js application. Each file in pages/api/ exports a handler function that receives req and res objects. API routes support middleware patterns, CORS configuration, and dynamic API routes using bracket syntax."
    }
  ],
  "interviewAnswer": "The Pages Router provides a straightforward, file-system-based routing approach that has powered Next.js applications for years. While the App Router is now recommended for new projects, the Pages Router remains widely used and supported. Its strength lies in its simplicity and explicit data fetching methods that clearly separate server and client concerns.",
  "interviewQuestions": [
    {
      "question": "How does file-system routing work in the Pages Router?",
      "answer": "Each file in the pages/ directory automatically becomes a route. The file path relative to pages/ maps to the URL path. For example, pages/about.js becomes /about, pages/blog/[id].js becomes /blog/:id. Index files (index.js) represent the root of their directory."
    },
    {
      "question": "What is the difference between getStaticProps and getServerSideProps?",
      "answer": "getStaticProps runs at build time and fetches data once, used for static generation (SSG). getServerSideProps runs on every request, used for server-side rendering (SSR). getStaticProps returns props that are cached and served to all users, while getServerSideProps returns fresh data on each request."
    },
    {
      "question": "How do dynamic routes work in the Pages Router?",
      "answer": "Dynamic routes use square brackets in file names: [param].js captures a single segment, [...slug].js captures multiple segments, [[...slug]].js captures multiple segments optionally. The dynamic parameters are available via the router.query object in the page component."
    },
    {
      "question": "What is the purpose of _app.js?",
      "answer": "_app.js is the root component that wraps every page. It is used to persist layout between navigations, inject global CSS, keep state when navigating, and pass global props to pages. It receives Component (the active page) and pageProps (data fetched by getStaticProps/getServerSideProps)."
    },
    {
      "question": "What is the purpose of _document.js?",
      "answer": "_document.js customizes the HTML document structure. It is only rendered server-side and is used to set the lang attribute, inject custom fonts, add external scripts to <head>, and modify the initial HTML structure. It runs before client-side JavaScript hydrates."
    },
    {
      "question": "How do API routes work in the Pages Router?",
      "answer": "API routes are files in pages/api/ that export a handler function: export default function handler(req, res) { ... }. They receive Express-like req and res objects. Dynamic API routes use bracket syntax (pages/api/[id].js). API routes do not increase client-side bundle size."
    },
    {
      "question": "What is getStaticPaths used for?",
      "answer": "getStaticPaths is used with getStaticProps to specify which dynamic routes should be pre-rendered at build time. It returns an object with paths (array of parameter objects) and fallback (false, true, or \"blocking\"). fallback: true enables on-demand generation of paths not specified at build time."
    },
    {
      "question": "How do you handle 404 pages in the Pages Router?",
      "answer": "Create a pages/404.js file to display a custom 404 page. Next.js automatically serves this page for any unmatched routes. It is statically generated at build time."
    },
    {
      "question": "Can the Pages Router and App Router coexist?",
      "answer": "Yes, both routers can coexist in the same project. Pages Router uses pages/ directory and App Router uses app/ directory. Routes in pages/ take precedence over app/ for the same URL. This is useful for incremental migration from Pages Router to App Router."
    },
    {
      "question": "How do middleware and redirects work in the Pages Router?",
      "answer": "Middleware can be defined in middleware.js at the project root. next.config.js supports redirects, rewrites, and headers. The Pages Router does not have built-in middleware files at the page level; instead, you use higher-order component patterns or getServerSideProps for middleware-like logic."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Pages Router</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"50\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/</text><text x=\"50\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dir</text><rect x=\"10\" y=\"90\" width=\"80\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"50\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/about.js</text><text x=\"50\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">/about</text><rect x=\"10\" y=\"140\" width=\"80\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"50\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/blog/[id].js</text><text x=\"50\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">/blog/:id</text><line x1=\"90\" y1=\"60\" x2=\"100\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"90\" y1=\"110\" x2=\"100\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"110\" y=\"40\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"160\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getStaticProps</text><text x=\"160\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SSG</text><rect x=\"110\" y=\"90\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"160\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getServerSideProps</text><text x=\"160\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SSR</text><rect x=\"110\" y=\"140\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"160\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getStaticPaths</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Paths</text><rect x=\"230\" y=\"40\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"290\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">_app.js</text><text x=\"290\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wrapper</text><rect x=\"230\" y=\"90\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"290\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">_document.js</text><text x=\"290\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTML</text><rect x=\"230\" y=\"140\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1\"/><text x=\"290\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">api/</text><text x=\"290\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend</text><text x=\"250\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Pages Router: File-system routing with SSR, SSG, and API routes.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Page Route",
      "useCase": "When you need a simple static page.",
      "code": "// pages/about.js\nexport default function About() {\n  return <h1>About Us</h1>\n}",
      "description": "This creates a route at /about automatically without any configuration."
    },
    {
      "title": "Dynamic Route with getStaticProps",
      "useCase": "When building a blog with dynamic post URLs.",
      "code": "// pages/posts/[id].js\nexport default function Post({ post }) {\n  return <div><h1>{post.title}</h1><p>{post.body}</p></div>\n}\n\nexport async function getStaticPaths() {\n  const posts = await fetch(\"https://api.example.com/posts\").then(r => r.json());\n  return { paths: posts.map(p => ({ params: { id: p.id } })), fallback: false };\n}\n\nexport async function getStaticProps({ params }) {\n  const post = await fetch(`https://api.example.com/posts/${params.id}`).then(r => r.json());\n  return { props: { post } };\n}",
      "description": "Pre-renders all blog posts at build time using static generation with dynamic routes."
    },
    {
      "title": "Server-Side Rendering with getServerSideProps",
      "useCase": "When you need fresh data on every request, like a user dashboard.",
      "code": "// pages/dashboard.js\nexport default function Dashboard({ userData }) {\n  return <div><h1>Welcome {userData.name}</h1></div>\n}\n\nexport async function getServerSideProps() {\n  const userData = await fetch(\"https://api.example.com/user\").then(r => r.json());\n  return { props: { userData } };\n}",
      "description": "Fetches fresh data on every request and renders the page server-side."
    },
    {
      "title": "API Route",
      "useCase": "When you need a serverless backend endpoint.",
      "code": "// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: \"Hello World\" });\n}",
      "description": "Creates an API endpoint at /api/hello that returns JSON."
    },
    {
      "title": "Custom 404 Page",
      "useCase": "When you want a branded 404 page.",
      "code": "// pages/404.js\nexport default function Custom404() {\n  return <h1>404 - Page Not Found</h1>\n}",
      "description": "Automatically served for any unmatched routes."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which file in the Pages Router represents the root route?",
      "options": [
        "root.js",
        "index.js",
        "home.js",
        "main.js"
      ],
      "answer": 1,
      "explanation": "index.js at the root of pages/ maps to the homepage (/)."
    },
    {
      "question": "What is the purpose of getStaticProps?",
      "options": [
        "Fetch data on every request",
        "Fetch data at build time",
        "Fetch data client-side",
        "Fetch data from cache only"
      ],
      "answer": 1,
      "explanation": "getStaticProps fetches data at build time for static generation."
    },
    {
      "question": "How do you define a catch-all route in the Pages Router?",
      "options": [
        "[slug].js",
        "[...slug].js",
        "[...].js",
        "slug.js"
      ],
      "answer": 1,
      "explanation": "Catch-all routes use the [...slug].js naming convention."
    },
    {
      "question": "What is the fallback property in getStaticPaths used for?",
      "options": [
        "Handle form submissions",
        "Control rendering of non-prebuilt paths",
        "Set error pages",
        "Configure middleware"
      ],
      "answer": 1,
      "explanation": "fallback controls whether and how non-prebuilt dynamic paths are handled."
    },
    {
      "question": "Where are API routes defined in the Pages Router?",
      "options": [
        "pages/api/",
        "api/",
        "routes/api/",
        "server/api/"
      ],
      "answer": 0,
      "explanation": "API routes are defined in the pages/api/ directory."
    },
    {
      "question": "Which file customizes the HTML document structure?",
      "options": [
        "_app.js",
        "_document.js",
        "layout.js",
        "template.js"
      ],
      "answer": 1,
      "explanation": "_document.js customizes the HTML document structure and is only rendered server-side."
    }
  ]
};
