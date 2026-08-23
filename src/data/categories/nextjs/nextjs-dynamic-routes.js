export const nextjs_dynamic_routes = {
  "id": "nextjs-dynamic-routes",
  "title": "Dynamic Routes",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Dynamic Routes in Next.js allow creating parameterized URLs using bracket syntax in folder names, supporting both the App Router and Pages Router.",
    "Single dynamic segments use [slug] syntax, catch-all segments use [...slug], and optional catch-all segments use [[...slug]].",
    "Dynamic route parameters are accessible via the params prop in page components or the second argument in route handlers.",
    "generateStaticParams (App Router) or getStaticPaths (Pages Router) defines which dynamic paths are pre-rendered at build time for SSG/ISR."
  ],
  "laymanDefinition": "Dynamic Routes are like URL templates with blank fields. For example, /products/[id] means any product ID works: /products/1, /products/abc, or /products/blue-shirt all map to the same template.",
  "deepDive": [
    {
      "heading": "Dynamic Route Syntax",
      "text": "In the App Router, dynamic routes use folder-level bracket notation: app/products/[id]/page.js creates /products/1, /products/abc. Catch-all: app/posts/[...slug]/page.js matches /posts/a/b/c. Optional catch-all: app/posts/[[...slug]]/page.js also matches /posts."
    },
    {
      "heading": "Accessing Dynamic Parameters",
      "text": "In the App Router, page components receive params as a prop: export default function Page({ params }) { return <div>{params.id}</div> }. In the Pages Router, use the router.query object or getServerSideProps/getStaticProps context.params."
    },
    {
      "heading": "generateStaticParams for Static Generation",
      "text": "In the App Router, export async function generateStaticParams() to specify which dynamic paths to pre-render at build time. Returns an array of objects with the dynamic parameter values. Combine with revalidation for ISR."
    },
    {
      "heading": "Dynamic Routes in Route Handlers",
      "text": "Route Handlers support dynamic parameters: app/api/products/[id]/route.js. Access params in the second argument: export async function GET(request, { params }). Supports catch-all patterns for flexible API endpoints."
    },
    {
      "heading": "Matching and Precedence",
      "text": "Next.js resolves route conflicts by specificity: static routes take precedence over dynamic routes. More specific dynamic routes (e.g., [slug] vs [...slug]) take precedence over less specific ones. The order of definition does not matter; the framework determines the best match."
    }
  ],
  "interviewAnswer": "Dynamic Routes are a core feature of Next.js routing, enabling everything from blog posts to e-commerce product pages. Understanding the different bracket syntax patterns and when to use each is essential for building flexible, content-driven applications.",
  "interviewQuestions": [
    {
      "question": "What are Dynamic Routes in Next.js?",
      "answer": "Dynamic Routes allow parts of the URL to be variable, defined using bracket syntax in folder names. For example, app/blog/[slug]/page.js creates a route that matches /blog/any-slug-value. The captured value is available as the params prop."
    },
    {
      "question": "What is the difference between [slug] and [...slug]?",
      "answer": "[slug] matches a single URL segment (e.g., /blog/hello). [...slug] matches one or more segments (e.g., /blog/2024/01/hello). [...slug] captures segments as an array. Use [slug] for single parameters and [...slug] for nested paths."
    },
    {
      "question": "What is an optional catch-all route?",
      "answer": "[[...slug]] matches with or without the parameter. For example, app/[[...slug]]/page.js matches /, /a, /a/b. The params.slug is undefined for the root and an array for deeper paths. Useful for documentation or category hierarchies with optional nesting."
    },
    {
      "question": "How do you access dynamic route parameters?",
      "answer": "In App Router pages: export default function Page({ params }) { params.id }. In Route Handlers: export async function GET(request, { params }). In Pages Router: use router.query.id or getServerSideProps context.params."
    },
    {
      "question": "What is generateStaticParams?",
      "answer": "generateStaticParams is the App Router equivalent of getStaticPaths. It defines which dynamic paths are pre-rendered at build time. Returns an array of objects: [{ slug: \"post-1\" }, { slug: \"post-2\" }]. Used with static or ISR rendering strategies."
    },
    {
      "question": "How does route resolution work with conflicting routes?",
      "answer": "Static routes take precedence over dynamic routes. Among dynamic routes, more specific patterns take precedence. For example, /products/create (static) wins over /products/[id] (dynamic). The framework automatically handles precedence without explicit ordering."
    },
    {
      "question": "Can you have multiple dynamic segments in one route?",
      "answer": "Yes, you can have multiple dynamic segments: app/[category]/[product]/page.js matches /electronics/phone-1. Each segment captures its respective value in params: { category: \"electronics\", product: \"phone-1\" }."
    },
    {
      "question": "How do dynamic routes work with ISR?",
      "answer": "Dynamic routes can use ISR by combining generateStaticParams with fetch options like next: { revalidate: 60 } or by using revalidatePath for On-Demand ISR. Pages not specified in generateStaticParams use fallback behavior."
    },
    {
      "question": "How do you get query parameters in dynamic routes?",
      "answer": "Query parameters are available via searchParams in the App Router: export default function Page({ params, searchParams }). In the Pages Router, use router.query or getServerSideProps context.query."
    },
    {
      "question": "What happens if a dynamic route parameter is missing?",
      "answer": "For required dynamic segments ([slug]), the route only matches if the segment is present in the URL. For optional catch-all routes ([[...slug]]), both the root and nested paths match. Missing required parameters result in a 404."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Dynamic Routes</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">app/products/[id]/page.js</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic File</text><line x1=\"150\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/123</text><text x=\"250\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">URL Match</text><line x1=\"320\" y1=\"58\" x2=\"340\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"100\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"400\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">params.id=123</text><text x=\"400\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Captured Value</text><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">generateStaticParams</text><text x=\"300\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pre-render Paths</text><rect x=\"10\" y=\"105\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"80\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/[...slug]</text><text x=\"80\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Catch-all</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Dynamic Routes: Bracket syntax for parameterized URLs with flexible matching patterns.</text></svg>",
  "codeExamples": [
    {
      "title": "Single Dynamic Segment",
      "useCase": "When creating a product detail page.",
      "code": "// app/products/[id]/page.js\nexport default function ProductPage({ params }) {\n  return <h1>Product {params.id}</h1>\n}",
      "description": "Creates /products/1, /products/abc, etc. The id parameter is available via params.id."
    },
    {
      "title": "Catch-All Dynamic Route",
      "useCase": "When building a documentation section with nested pages.",
      "code": "// app/docs/[...slug]/page.js\nexport default function DocPage({ params }) {\n  return <h1>Docs / {params.slug.join(\" / \")}</h1>\n}",
      "description": "Matches /docs/getting-started, /docs/guides/advanced, etc. slug is an array of segments."
    },
    {
      "title": "generateStaticParams with Dynamic Routes",
      "useCase": "When pre-building known blog posts.",
      "code": "export async function generateStaticParams() {\n  const posts = await fetch(\"https://api.example.com/posts\").then(r => r.json());\n  return posts.map(p => ({ slug: p.slug }));\n}\n\nexport default async function PostPage({ params }) {\n  const post = await fetch(`https://api.example.com/posts/${params.slug}`);\n  const data = await post.json();\n  return <h1>{data.title}</h1>\n}",
      "description": "Pre-builds all blog posts at build time using their slugs as dynamic parameters."
    },
    {
      "title": "Dynamic Route with Multiple Segments",
      "useCase": "When building a nested category/product URL structure.",
      "code": "// app/[category]/[product]/page.js\nexport default function ProductPage({ params }) {\n  return <div>Category: {params.category}, Product: {params.product}</div>\n}",
      "description": "Matches /electronics/phone-1, /clothing/shirt, etc. Both segments are captured."
    },
    {
      "title": "Dynamic Route with Search Params",
      "useCase": "When filtering or paginating on a dynamic page.",
      "code": "// app/products/[category]/page.js\nexport default function ProductsPage({ params, searchParams }) {\n  const page = searchParams.page || \"1\";\n  return <div>Category: {params.category}, Page: {page}</div>\n}",
      "description": "Accesses both dynamic params and query string parameters (e.g., /products/electronics?page=2)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What syntax creates a single dynamic route segment?",
      "options": [
        "[param]",
        "[...param]",
        "[[...param]]",
        "<param>"
      ],
      "answer": 0,
      "explanation": "Single bracket notation [param] captures one URL segment."
    },
    {
      "question": "What does [...slug] match in a dynamic route?",
      "options": [
        "Only the root path",
        "One or more URL segments",
        "Exactly one segment",
        "No segments"
      ],
      "answer": 1,
      "explanation": "Catch-all [...slug] matches one or more URL segments as an array."
    },
    {
      "question": "Which function pre-defines dynamic paths for SSG in the App Router?",
      "options": [
        "getStaticPaths",
        "generateStaticParams",
        "generatePaths",
        "preBuildPaths"
      ],
      "answer": 1,
      "explanation": "generateStaticParams returns an array of parameter objects for build-time pre-rendering."
    },
    {
      "question": "How do you access dynamic parameters in a Route Handler?",
      "options": [
        "From request.params",
        "From the second argument { params }",
        "From URL query",
        "From request body"
      ],
      "answer": 1,
      "explanation": "Route handlers receive params in the second argument: GET(request, { params })."
    },
    {
      "question": "When does a static route conflict with a dynamic route?",
      "options": [
        "Always conflicts",
        "Never conflicts",
        "Static takes precedence",
        "Dynamic takes precedence"
      ],
      "answer": 2,
      "explanation": "Static routes take precedence over dynamic routes in route resolution."
    },
    {
      "question": "What does [[...slug]] match?",
      "options": [
        "Only root",
        "Root and multiple segments",
        "Only one segment",
        "No paths"
      ],
      "answer": 1,
      "explanation": "Optional catch-all matches both the root path and nested paths."
    }
  ]
};
