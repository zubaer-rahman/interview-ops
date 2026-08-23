export const nextjs_app_router = {
  "id": "nextjs-app-router",
  "title": "App Router",
  "difficulty": "intermediate",
  "estimatedMinutes": 30,
  "tldr": [
    "The App Router is the new routing paradigm introduced in Next.js 13, built on React Server Components and nested layouts.",
    "Uses a file-system based routing where folders define route segments and special files (page.js, layout.js, loading.js, error.js) define the UI for each segment.",
    "Supports nested layouts, loading states (suspense boundaries), error boundaries, and parallel routes out of the box.",
    "All components in the App Router are Server Components by default, improving initial page load performance."
  ],
  "laymanDefinition": "The App Router is like a filing cabinet where every folder is a URL path, and each folder can contain specific files that tell Next.js what to show, how to load data, and how to handle errors.",
  "deepDive": [
    {
      "heading": "File-System Routing Convention",
      "text": "In the App Router, the directory structure directly maps to URL paths. Each folder represents a route segment, and special files define the behavior: page.js (public UI), layout.js (shared wrapper), loading.js (loading fallback), error.js (error boundary), and not-found.js (404 page). This convention eliminates manual route configuration."
    },
    {
      "heading": "Nested Layouts and Templates",
      "text": "Layouts wrap child routes and persist across navigations, avoiding re-renders. Multiple layouts can be nested hierarchically. Templates (template.js) are similar but remount on every navigation, useful for animations or state that should reset per route. Layouts can fetch data and share it with their children."
    },
    {
      "heading": "Loading and Error Boundaries",
      "text": "The App Router automatically wraps page segments in React Suspense boundaries when loading.js is provided. Error boundaries (error.js) catch errors in the segment and its children, showing fallback UI. Both can be nested at any level for granular control."
    },
    {
      "heading": "Parallel and Intercepting Routes",
      "text": "Parallel routes (defined with @folder convention) render multiple independent views in the same layout simultaneously, useful for dashboards. Intercepting routes (defined with (.)folder) intercept navigation from a matching parent route, enabling patterns like modals that work with URL sharing."
    },
    {
      "heading": "Route Groups and Private Folders",
      "text": "Route groups (folders wrapped in parentheses like (marketing)) organize routes without affecting the URL path. Private folders (prefixed with _) exclude a folder and its children from routing entirely. Both help maintain a clean project structure without impacting the public URL structure."
    }
  ],
  "interviewAnswer": "The App Router revolutionizes Next.js routing by embracing React Server Components, nested layouts, and file-system conventions. It reduces boilerplate, improves performance through automatic code splitting and suspense boundaries, and provides a more intuitive mental model compared to the Pages Router. Key advantages include automatic streaming, granular error handling, and co-located data fetching within components.",
  "interviewQuestions": [
    {
      "question": "What is the App Router in Next.js?",
      "answer": "The App Router is the modern routing system in Next.js 13+, built on React Server Components. It uses a file-system based routing convention where folders define URL path segments and special files (page.js, layout.js, loading.js, etc.) define the UI for each segment. It supports nested layouts, streaming, error boundaries, and server components by default."
    },
    {
      "question": "How does the App Router differ from the Pages Router?",
      "answer": "The App Router uses a new file convention (page.js, layout.js) instead of index.js. It supports nested layouts that persist across navigations, automatic loading boundaries with loading.js, error boundaries with error.js, and Server Components by default. The Pages Router uses _app.js, _document.js, and getServerSideProps/getStaticProps which are replaced by more intuitive patterns in the App Router."
    },
    {
      "question": "What special files are used in the App Router?",
      "answer": "page.js (route UI), layout.js (shared wrapper), loading.js (loading fallback), error.js (error boundary), not-found.js (404 page), template.js (re-mounting layout), default.js (parallel route fallback), and route.js (API routes). Each can be nested at any route segment level."
    },
    {
      "question": "How do nested layouts work in the App Router?",
      "answer": "Layouts are defined by placing layout.js files in route folders. They wrap child routes and persist across navigations, meaning the layout does not re-render when the user navigates between sibling pages. Layouts can fetch data independently using async component functions, and the data persists across navigations within the layout."
    },
    {
      "question": "What are parallel routes in the App Router?",
      "answer": "Parallel routes are defined using the @folder convention (e.g., @analytics, @team). They allow rendering multiple independent views within the same layout simultaneously. Each parallel route segment can have its own loading and error states. They are useful for dashboards, multi-panel views, and complex UI compositions."
    },
    {
      "question": "What are intercepting routes?",
      "answer": "Intercepting routes allow you to load a route from another part of the application within the current context. They use the (.) convention: (.) matches same level, (..) matches one level up, (..)(..) matches two levels up, (...) matches from the root. This is commonly used for modals that display content from another route while preserving the URL."
    },
    {
      "question": "How does data fetching work in the App Router?",
      "answer": "Data fetching is done using async Server Components with the fetch() API. Next.js extends fetch with automatic caching and revalidation. You can use cache() for memoization across components and revalidate data on demand using revalidatePath() or revalidateTag(). The App Router eliminates the need for getServerSideProps and getStaticProps."
    },
    {
      "question": "What are route groups in the App Router?",
      "answer": "Route groups are folders wrapped in parentheses (e.g., (marketing), (shop)). They organize routes logically without affecting the URL path. For example, (marketing)/about/page.js maps to /about, not /marketing/about. They are useful for organizing multiple layouts and segments without polluting the URL structure."
    },
    {
      "question": "How does the App Router handle metadata?",
      "answer": "The App Router supports the Metadata API, which allows defining metadata (title, description, Open Graph, etc.) using exported metadata objects or generateMetadata() functions in page.js and layout.js files. Metadata is automatically injected into the HTML head and supports both static and dynamic generation based on route parameters."
    },
    {
      "question": "What is the difference between a layout and a template in the App Router?",
      "answer": "A layout (layout.js) persists across navigations and does not re-mount. A template (template.js) creates a new instance on each navigation, causing all children to re-mount. Templates are useful for animations that should trigger on every navigation or for components that need to reset state per route (e.g., page-level scroll positions)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">App Router</text><rect x=\"10\" y=\"40\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products</text><text x=\"60\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Catalog</text><rect x=\"120\" y=\"40\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"170\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/[id]</text><text x=\"170\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Detail</text><rect x=\"230\" y=\"40\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"280\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">layout.js</text><text x=\"280\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Layout</text><rect x=\"340\" y=\"40\" width=\"80\" height=\"40\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"380\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">page.js</text><text x=\"380\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Page</text><rect x=\"430\" y=\"40\" width=\"60\" height=\"40\" rx=\"4\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1\"/><text x=\"460\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">error.js</text><text x=\"460\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Error</text><line x1=\"110\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"230\" y1=\"60\" x2=\"230\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"110\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"60\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">@sidebar</text><text x=\"60\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parallel</text><rect x=\"120\" y=\"110\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"170\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">@feed</text><text x=\"170\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parallel</text><rect x=\"230\" y=\"110\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"280\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">(.)photo</text><text x=\"280\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Intercept</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">App Router: File-system based routing with nested layouts, parallel routes, and intercepting routes.</text></svg>",
  "codeExamples": [
    {
      "title": "Defining a Route with page.js",
      "useCase": "When you need to create a new public page at a specific URL path.",
      "code": "// app/products/page.js\nexport default function ProductsPage() {\n  return <div>Products List</div>\n}",
      "description": "Creates a route at /products with a Server Component that renders the products list."
    },
    {
      "title": "Nested Layout",
      "useCase": "When you want a shared header/nav that persists across pages in a section.",
      "code": "// app/shop/layout.js\nexport default function ShopLayout({ children }) {\n  return (\n    <section>\n      <nav>Shop Navigation</nav>\n      {children}\n    </section>\n  );\n}",
      "description": "Wraps all shop routes with a shared navigation that does not re-render on page changes."
    },
    {
      "title": "Loading UI with loading.js",
      "useCase": "When you want to show a loading spinner immediately while the page loads.",
      "code": "// app/products/loading.js\nexport default function Loading() {\n  return <div className=\"spinner\">Loading products...</div>\n}",
      "description": "Automatically wraps the products page in a Suspense boundary, showing this fallback immediately."
    },
    {
      "title": "Error Boundary with error.js",
      "useCase": "When you need to catch errors gracefully in a specific route segment.",
      "code": "// app/products/error.js\n\"use client\";\nexport default function Error({ error, reset }) {\n  return (\n    <div>\n      <h2>Something went wrong!</h2>\n      <button onClick={reset}>Try again</button>\n    </div>\n  );\n}",
      "description": "Catches errors in the products segment and provides a reset button to retry. Note error.js must be a Client Component."
    },
    {
      "title": "Parallel Routes with @folder",
      "useCase": "When you want to render a dashboard with independent panels.",
      "code": "// app/dashboard/@analytics/page.js\nexport default function Analytics() {\n  return <div>Analytics Panel</div>\n}\n\n// app/dashboard/layout.js\nexport default function Dashboard({ children, analytics, team }) {\n  return (\n    <div className=\"dashboard\">\n      {children}\n      <aside>{analytics}</aside>\n      <aside>{team}</aside>\n    </div>\n  );\n}",
      "description": "Renders analytics and team panels independently, each with their own loading/error states."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What special file is used to define a public route UI in the App Router?",
      "options": [
        "page.js",
        "index.js",
        "route.js",
        "view.js"
      ],
      "answer": 0,
      "explanation": "page.js is the special file that defines the public UI for a route segment in the App Router."
    },
    {
      "question": "How do layouts differ from pages in the App Router?",
      "options": [
        "Layouts re-render on every navigation",
        "Layouts persist across navigations",
        "Layouts can only be used at the root",
        "Layouts replace page.js entirely"
      ],
      "answer": 1,
      "explanation": "Layouts persist across navigations and do not re-render when switching between sibling pages."
    },
    {
      "question": "What convention is used for parallel routes in the App Router?",
      "options": [
        "(folder)",
        "@folder",
        "_folder",
        "[folder]"
      ],
      "answer": 1,
      "explanation": "Parallel routes use the @folder naming convention (e.g., @analytics, @team)."
    },
    {
      "question": "Which file convention creates an automatic Suspense boundary?",
      "options": [
        "error.js",
        "loading.js",
        "template.js",
        "not-found.js"
      ],
      "answer": 1,
      "explanation": "loading.js is automatically wrapped in a Suspense boundary by Next.js."
    },
    {
      "question": "What is the purpose of route groups (parentheses folders)?",
      "options": [
        "They create URL segments",
        "They organize routes without affecting the URL",
        "They enable API routes",
        "They disable caching"
      ],
      "answer": 1,
      "explanation": "Route groups organize related routes without adding their folder name to the URL path."
    },
    {
      "question": "What must error.js export to be valid?",
      "options": [
        "A Server Component",
        "A Client Component (\"use client\")",
        "An async function",
        "A metadata object"
      ],
      "answer": 1,
      "explanation": "error.js must be a Client Component because it uses the reset prop and interactivity for the retry button."
    }
  ]
};
