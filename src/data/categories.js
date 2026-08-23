export const CATEGORIES = [
  {
    "id": "nextjs",
    "name": "Next.js",
    "tag": "NEX",
    "topics": [
      {
        "id": "nextjs-app-router",
        "title": "App Router",
        "tldr": "The App Router is the new routing paradigm introduced in Next.js 13, built on React Server Components and nested layouts. Uses a file-system based routing where folders define route segments and special files (page.js, layout.js, loading.js, error.js) define the UI for each segment. Supports nested layouts, loading states (suspense boundaries), error boundaries, and parallel routes out of the box. All components in the App Router are Server Components by default, improving initial page load performance.",
        "layman": "The App Router is like a filing cabinet where every folder is a URL path, and each folder can contain specific files that tell Next.js what to show, how to load data, and how to handle errors.",
        "deepDive": "**File-System Routing Convention**: In the App Router, the directory structure directly maps to URL paths. Each folder represents a route segment, and special files define the behavior: page.js (public UI), layout.js (shared wrapper), loading.js (loading fallback), error.js (error boundary), and not-found.js (404 page). This convention eliminates manual route configuration.\n\n**Nested Layouts and Templates**: Layouts wrap child routes and persist across navigations, avoiding re-renders. Multiple layouts can be nested hierarchically. Templates (template.js) are similar but remount on every navigation, useful for animations or state that should reset per route. Layouts can fetch data and share it with their children.\n\n**Loading and Error Boundaries**: The App Router automatically wraps page segments in React Suspense boundaries when loading.js is provided. Error boundaries (error.js) catch errors in the segment and its children, showing fallback UI. Both can be nested at any level for granular control.\n\n**Parallel and Intercepting Routes**: Parallel routes (defined with @folder convention) render multiple independent views in the same layout simultaneously, useful for dashboards. Intercepting routes (defined with (.)folder) intercept navigation from a matching parent route, enabling patterns like modals that work with URL sharing.\n\n**Route Groups and Private Folders**: Route groups (folders wrapped in parentheses like (marketing)) organize routes without affecting the URL path. Private folders (prefixed with _) exclude a folder and its children from routing entirely. Both help maintain a clean project structure without impacting the public URL structure.",
        "qa": [
          {
            "q": "What is the App Router in Next.js?",
            "a": "The App Router is the modern routing system in Next.js 13+, built on React Server Components. It uses a file-system based routing convention where folders define URL path segments and special files (page.js, layout.js, loading.js, etc.) define the UI for each segment. It supports nested layouts, streaming, error boundaries, and server components by default."
          },
          {
            "q": "How does the App Router differ from the Pages Router?",
            "a": "The App Router uses a new file convention (page.js, layout.js) instead of index.js. It supports nested layouts that persist across navigations, automatic loading boundaries with loading.js, error boundaries with error.js, and Server Components by default. The Pages Router uses _app.js, _document.js, and getServerSideProps/getStaticProps which are replaced by more intuitive patterns in the App Router."
          },
          {
            "q": "What special files are used in the App Router?",
            "a": "page.js (route UI), layout.js (shared wrapper), loading.js (loading fallback), error.js (error boundary), not-found.js (404 page), template.js (re-mounting layout), default.js (parallel route fallback), and route.js (API routes). Each can be nested at any route segment level."
          },
          {
            "q": "How do nested layouts work in the App Router?",
            "a": "Layouts are defined by placing layout.js files in route folders. They wrap child routes and persist across navigations, meaning the layout does not re-render when the user navigates between sibling pages. Layouts can fetch data independently using async component functions, and the data persists across navigations within the layout."
          },
          {
            "q": "What are parallel routes in the App Router?",
            "a": "Parallel routes are defined using the @folder convention (e.g., @analytics, @team). They allow rendering multiple independent views within the same layout simultaneously. Each parallel route segment can have its own loading and error states. They are useful for dashboards, multi-panel views, and complex UI compositions."
          },
          {
            "q": "What are intercepting routes?",
            "a": "Intercepting routes allow you to load a route from another part of the application within the current context. They use the (.) convention: (.) matches same level, (..) matches one level up, (..)(..) matches two levels up, (...) matches from the root. This is commonly used for modals that display content from another route while preserving the URL."
          },
          {
            "q": "How does data fetching work in the App Router?",
            "a": "Data fetching is done using async Server Components with the fetch() API. Next.js extends fetch with automatic caching and revalidation. You can use cache() for memoization across components and revalidate data on demand using revalidatePath() or revalidateTag(). The App Router eliminates the need for getServerSideProps and getStaticProps."
          },
          {
            "q": "What are route groups in the App Router?",
            "a": "Route groups are folders wrapped in parentheses (e.g., (marketing), (shop)). They organize routes logically without affecting the URL path. For example, (marketing)/about/page.js maps to /about, not /marketing/about. They are useful for organizing multiple layouts and segments without polluting the URL structure."
          },
          {
            "q": "How does the App Router handle metadata?",
            "a": "The App Router supports the Metadata API, which allows defining metadata (title, description, Open Graph, etc.) using exported metadata objects or generateMetadata() functions in page.js and layout.js files. Metadata is automatically injected into the HTML head and supports both static and dynamic generation based on route parameters."
          },
          {
            "q": "What is the difference between a layout and a template in the App Router?",
            "a": "A layout (layout.js) persists across navigations and does not re-mount. A template (template.js) creates a new instance on each navigation, causing all children to re-mount. Templates are useful for animations that should trigger on every navigation or for components that need to reset state per route (e.g., page-level scroll positions)."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// app/products/page.js\nexport default function ProductsPage() {\n  return <div>Products List</div>\n}",
          "title": "Defining a Route with page.js",
          "description": "Creates a route at /products with a Server Component that renders the products list."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">App Router</text><rect x=\"10\" y=\"40\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products</text><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Catalog</text><rect x=\"120\" y=\"40\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"170\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/[id]</text><text x=\"170\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Detail</text><rect x=\"230\" y=\"40\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"280\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">layout.js</text><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Layout</text><rect x=\"340\" y=\"40\" width=\"80\" height=\"40\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"380\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">page.js</text><text x=\"380\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Page</text><rect x=\"430\" y=\"40\" width=\"60\" height=\"40\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"460\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">error.js</text><text x=\"460\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Error</text><line x1=\"110\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"230\" y1=\"60\" x2=\"230\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"110\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"60\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">@sidebar</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parallel</text><rect x=\"120\" y=\"110\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"170\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">@feed</text><text x=\"170\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parallel</text><rect x=\"230\" y=\"110\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">(.)photo</text><text x=\"280\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Intercept</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">App Router: File-system based routing with nested </text><text x=\"250\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">layouts, parallel routes, and intercepting routes.</text></svg>"
        }
      },
      {
        "id": "nextjs-pages-router",
        "title": "Pages Router",
        "tldr": "The Pages Router is Next.js' original routing system, using a file-system convention where files in the pages/ directory map directly to URL routes. Supports dynamic routes with bracket syntax ([id].js), catch-all routes ([...slug].js), and optional catch-all routes ([[...slug]].js). Uses getServerSideProps, getStaticProps, and getStaticPaths for data fetching at the page level. The _app.js file wraps all pages, _document.js customizes the HTML document structure, and API routes are defined in pages/api/.",
        "layman": "The Pages Router is like a filing system where every file you put in the \"pages\" folder automatically becomes a webpage, and the file name determines the website address.",
        "deepDive": "**File-System Routing Basics**: In the Pages Router, any .js, .jsx, .ts, or .tsx file inside the pages/ directory automatically becomes a route. The file path relative to pages/ determines the URL path. For example, pages/about.js maps to /about, and pages/blog/index.js maps to /blog. Index files (index.js) represent the root of their directory.\n\n**Dynamic Routes and Catch-All Routes**: Dynamic routes use square brackets: [id].js maps to /1, /abc, etc. Catch-all routes use [...slug].js and match any number of path segments, returning them as an array. Optional catch-all routes use [[...slug]].js and match even without the parameter. These patterns enable flexible URL structures for content-driven sites.\n\n**Data Fetching Methods**: The Pages Router provides three main data fetching functions: getStaticProps (build-time data fetching for SSG), getServerSideProps (request-time data fetching for SSR), and getStaticPaths (specifying dynamic paths to pre-render for SSG). These functions run on the server side only and inject props into the page component.\n\n**Custom App and Document**: _app.js (pages/_app.js) initializes all pages, allowing global styles, layout components, and persistent state. _document.js (pages/_document.js) customizes the HTML document structure (html, head, body tags) and is only rendered on the server. _document.js is used for custom fonts, meta tags, and third-party scripts that must be in the <head>.\n\n**API Routes**: API routes are defined in pages/api/ and allow building backend endpoints within the Next.js application. Each file in pages/api/ exports a handler function that receives req and res objects. API routes support middleware patterns, CORS configuration, and dynamic API routes using bracket syntax.",
        "qa": [
          {
            "q": "How does file-system routing work in the Pages Router?",
            "a": "Each file in the pages/ directory automatically becomes a route. The file path relative to pages/ maps to the URL path. For example, pages/about.js becomes /about, pages/blog/[id].js becomes /blog/:id. Index files (index.js) represent the root of their directory."
          },
          {
            "q": "What is the difference between getStaticProps and getServerSideProps?",
            "a": "getStaticProps runs at build time and fetches data once, used for static generation (SSG). getServerSideProps runs on every request, used for server-side rendering (SSR). getStaticProps returns props that are cached and served to all users, while getServerSideProps returns fresh data on each request."
          },
          {
            "q": "How do dynamic routes work in the Pages Router?",
            "a": "Dynamic routes use square brackets in file names: [param].js captures a single segment, [...slug].js captures multiple segments, [[...slug]].js captures multiple segments optionally. The dynamic parameters are available via the router.query object in the page component."
          },
          {
            "q": "What is the purpose of _app.js?",
            "a": "_app.js is the root component that wraps every page. It is used to persist layout between navigations, inject global CSS, keep state when navigating, and pass global props to pages. It receives Component (the active page) and pageProps (data fetched by getStaticProps/getServerSideProps)."
          },
          {
            "q": "What is the purpose of _document.js?",
            "a": "_document.js customizes the HTML document structure. It is only rendered server-side and is used to set the lang attribute, inject custom fonts, add external scripts to <head>, and modify the initial HTML structure. It runs before client-side JavaScript hydrates."
          },
          {
            "q": "How do API routes work in the Pages Router?",
            "a": "API routes are files in pages/api/ that export a handler function: export default function handler(req, res) { ... }. They receive Express-like req and res objects. Dynamic API routes use bracket syntax (pages/api/[id].js). API routes do not increase client-side bundle size."
          },
          {
            "q": "What is getStaticPaths used for?",
            "a": "getStaticPaths is used with getStaticProps to specify which dynamic routes should be pre-rendered at build time. It returns an object with paths (array of parameter objects) and fallback (false, true, or \"blocking\"). fallback: true enables on-demand generation of paths not specified at build time."
          },
          {
            "q": "How do you handle 404 pages in the Pages Router?",
            "a": "Create a pages/404.js file to display a custom 404 page. Next.js automatically serves this page for any unmatched routes. It is statically generated at build time."
          },
          {
            "q": "Can the Pages Router and App Router coexist?",
            "a": "Yes, both routers can coexist in the same project. Pages Router uses pages/ directory and App Router uses app/ directory. Routes in pages/ take precedence over app/ for the same URL. This is useful for incremental migration from Pages Router to App Router."
          },
          {
            "q": "How do middleware and redirects work in the Pages Router?",
            "a": "Middleware can be defined in middleware.js at the project root. next.config.js supports redirects, rewrites, and headers. The Pages Router does not have built-in middleware files at the page level; instead, you use higher-order component patterns or getServerSideProps for middleware-like logic."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// pages/about.js\nexport default function About() {\n  return <h1>About Us</h1>\n}",
          "title": "Basic Page Route",
          "description": "This creates a route at /about automatically without any configuration."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Pages Router</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"50\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/</text><text x=\"50\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dir</text><rect x=\"10\" y=\"90\" width=\"80\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"50\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/about.js</text><text x=\"50\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">/about</text><rect x=\"10\" y=\"140\" width=\"80\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"50\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">pages/blog/[id].js</text><text x=\"50\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">/blog/:id</text><line x1=\"90\" y1=\"60\" x2=\"100\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"90\" y1=\"110\" x2=\"100\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"110\" y=\"40\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"160\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getStaticProps</text><text x=\"160\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SSG</text><rect x=\"110\" y=\"90\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"160\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getServerSideProps</text><text x=\"160\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SSR</text><rect x=\"110\" y=\"140\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getStaticPaths</text><text x=\"160\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Paths</text><rect x=\"230\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"290\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">_app.js</text><text x=\"290\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wrapper</text><rect x=\"230\" y=\"90\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"290\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">_document.js</text><text x=\"290\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTML</text><rect x=\"230\" y=\"140\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"290\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">api/</text><text x=\"290\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend</text><text x=\"250\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Pages Router: File-system routing with SSR, SSG, a</text><text x=\"250\" y=\"202\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nd API routes.</text></svg>"
        }
      },
      {
        "id": "nextjs-ssr",
        "title": "Server-Side Rendering",
        "tldr": "Server-Side Rendering (SSR) generates the full HTML for a page on the server for each request, sending a fully-rendered page to the client. In Next.js, SSR is achieved via getServerSideProps in the Pages Router or by using dynamic = \"force-dynamic\" in the App Router. SSR improves SEO by providing fully-rendered HTML to search engine crawlers and reduces time-to-first-contentful-paint. Trade-offs include higher server load, longer response times under high traffic, and no ability to cache the full HTML across users without additional configuration.",
        "layman": "SSR is like a restaurant that cooks your meal fresh every time you order. The kitchen (server) prepares the entire dish (HTML page) from scratch when you place your order (request), ensuring it is always hot and customized.",
        "deepDive": "**How SSR Works**: When a request hits a Next.js server for an SSR page, the server executes getServerSideProps (Pages Router) or the async Server Component (App Router) on each request. Data is fetched, React renders the page to HTML on the server, and the fully-rendered HTML is sent to the client. The client then hydrates the HTML to make it interactive.\n\n**SSR in the Pages Router vs App Router**: In the Pages Router, SSR is explicit via getServerSideProps which runs on every request. In the App Router, SSR is implicit: Server Components render on the server by default, and you opt into static rendering. To force SSR, you use dynamic = \"force-dynamic\" export, or use cookies(), headers(), or searchParams() which opt the segment into dynamic rendering.\n\n**Performance Considerations**: SSR pages have higher server response times because HTML is generated per request. Use streaming (App Router) to send HTML progressively. Implement CDN caching with s-maxage and stale-while-revalidate headers for non-personalized content. Monitor server CPU load as complex pages increase rendering time.\n\n**SEO Benefits of SSR**: Search engine crawlers receive fully-rendered HTML, ensuring all content is indexed. SSR eliminates the need for Googlebot to execute JavaScript, which can be unreliable. Dynamic meta tags, Open Graph data, and structured data are all present in the initial HTML response, improving social sharing and search result snippets.\n\n**Hydration and Interactivity**: After SSR HTML is delivered, React hydrates the page on the client, attaching event handlers and making the page interactive. Hydration must match the server-rendered HTML exactly; mismatches cause errors. The App Router improves on this with selective hydration and progressive enhancement.",
        "qa": [
          {
            "q": "What is Server-Side Rendering in Next.js?",
            "a": "SSR generates the complete HTML for a page on the server for each incoming request. The server fetches data, executes React components, and produces full HTML that is sent to the client. The client then hydrates the HTML to make it interactive. SSR provides SEO benefits and faster initial content display."
          },
          {
            "q": "How do you implement SSR in the Pages Router?",
            "a": "Export an async getServerSideProps function from the page component. This function runs on every request, receives the context object (params, req, res, query, etc.), and returns props that are passed to the page component at render time."
          },
          {
            "q": "How do you implement SSR in the App Router?",
            "a": "In the App Router, Server Components render on the server by default. To ensure dynamic rendering (SSR-like behavior) on every request, export const dynamic = \"force-dynamic\" from the segment, or use cookies(), headers(), or searchParams() which automatically opt into dynamic rendering. No explicit data fetching function is needed."
          },
          {
            "q": "What are the performance implications of SSR?",
            "a": "SSR increases server response time because HTML is generated per request. This increases server CPU usage. Benefits include faster time-to-content for users and better SEO. Mitigations include HTTP caching headers (s-maxage), CDN caching, React streaming (App Router), and selective data fetching to minimize blocking."
          },
          {
            "q": "How does SSR affect SEO?",
            "a": "SSR benefits SEO because search engine crawlers receive fully-rendered HTML with all content present. This ensures content is indexed even if crawlers do not execute JavaScript. Meta tags, Open Graph data, and structured data are all included in the initial server response."
          },
          {
            "q": "What is hydration in the context of SSR?",
            "a": "Hydration is the process where React attaches event listeners and state to the server-rendered HTML on the client. It makes the static HTML interactive. React expects the client-side render tree to match the server-rendered HTML exactly; differences cause hydration errors."
          },
          {
            "q": "How does caching work with SSR pages?",
            "a": "SSR pages can be cached using HTTP response headers. Set Cache-Control: s-maxage=60, stale-while-revalidate=300 for CDN caching. Avoid caching personalized content. Next.js does not cache SSR pages by default; caching must be configured in the hosting platform or via custom server."
          },
          {
            "q": "What is the difference between SSR and SSG?",
            "a": "SSR generates HTML on every request (dynamic). SSG generates HTML once at build time (static). SSR is better for frequently changing data. SSG is better for content that does not change often and benefits from fast load times. ISR bridges the gap by allowing periodic revalidation of static pages."
          },
          {
            "q": "Can you use SSR with getStaticProps?",
            "a": "No, getStaticProps is for SSG/ISR. A page can export either getServerSideProps (SSR) or getStaticProps (SSG/ISR), not both. Trying to export both will cause a build error."
          },
          {
            "q": "What happens if getServerSideProps throws an error?",
            "a": "If getServerSideProps throws an error, Next.js shows a 500 error page in production. In development, it shows the error overlay. Use try-catch blocks in getServerSideProps to handle errors gracefully and return a notFound or redirect object instead of crashing."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "export async function getServerSideProps(context) {\n  const { params, req, query } = context;\n  const data = await fetch(`https://api.example.com/data`).then(r => r.json());\n  return { props: { data } };\n}\n\nexport default function Page({ data }) {\n  return <div>{data.title}</div>\n}",
          "title": "SSR with getServerSideProps",
          "description": "Fetches fresh data on every request and passes it as props to the page. The context object provides access to params, query, req, res, and preview data."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Server-Side Rendering</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Request</text><text x=\"70\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"130\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"220\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getServerSideProps</text><text x=\"220\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch Data</text><line x1=\"280\" y1=\"60\" x2=\"300\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"370\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Render to HTML</text><text x=\"370\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Server</text><line x1=\"430\" y1=\"60\" x2=\"450\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"110\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"70\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTML Response</text><text x=\"70\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">to Client</text><line x1=\"130\" y1=\"130\" x2=\"160\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"110\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"230\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hydration</text><text x=\"230\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">JS Bundle</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SSR: Full HTML generated server-side per request, </text><text x=\"250\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">then hydrated client-side.</text></svg>"
        }
      },
      {
        "id": "nextjs-csr",
        "title": "Client-Side Rendering",
        "tldr": "Client-Side Rendering (CSR) renders the page entirely in the browser using JavaScript, with Next.js serving a minimal HTML shell and React handling all rendering. In Next.js, CSR is achieved using \"use client\" components, useEffect for data fetching, or data fetching libraries like SWR and TanStack Query. CSR provides a rich, app-like experience after the initial load, with instant navigations and full interactivity. Downsides include slower initial load times, poorer SEO (empty HTML shell), and reliance on client JavaScript execution.",
        "layman": "CSR is like ordering a flat-pack furniture kit: you get a minimal box (HTML shell) and assembly instructions (JavaScript), and you build everything on-site (in the browser) using your own tools.",
        "deepDive": "**How CSR Works in Next.js**: The server sends a minimal HTML document with a <div id=\"root\"> and script tags. The browser downloads and executes the JavaScript bundle. React renders the UI in the browser, fetching data as needed. After the initial load, navigations are instant because no server round-trip is needed.\n\n**CSR vs SSR Trade-offs**: CSR has slower initial load (JavaScript must download and execute) but faster subsequent navigations. SSR has faster initial HTML delivery but requires server round-trips for every navigation. CSR is better for authenticated dashboards and apps where SEO is not critical.\n\n**Data Fetching in CSR**: CSR components use React hooks like useEffect, useSWR, or TanStack Query to fetch data client-side. Loading states, error handling, and optimistic updates are managed in the browser. Data can be cached client-side using SWR or React Query for improved performance.\n\n**SEO Implications of CSR**: CSR pages serve an empty HTML shell to search engines, which may not index content properly. Use Next.js metadata API for basic SEO tags, but content-heavy pages benefit from SSR or SSG. Hybrid approaches use SSR for initial load and CSR for subsequent client-side navigation.\n\n**Performance Optimization for CSR**: Minimize bundle size with code splitting, lazy loading, and dynamic imports. Use React.memo and useMemo to prevent unnecessary re-renders. Implement virtual scrolling for long lists. Use service workers for offline support and caching.",
        "qa": [
          {
            "q": "What is Client-Side Rendering in Next.js?",
            "a": "CSR renders the page entirely in the browser. The server sends a minimal HTML shell with JavaScript bundles. React takes over in the browser, rendering components, fetching data, and managing UI state. The initial load is slower, but subsequent navigations are instant."
          },
          {
            "q": "How do you create a Client Component in Next.js?",
            "a": "Add \"use client\" at the top of the component file. This marks the component and its children as client-side rendered. Client Components can use React hooks, browser APIs, event handlers, and state management. They can be imported by Server Components."
          },
          {
            "q": "How does data fetching work in CSR?",
            "a": "Data is fetched client-side using useEffect with fetch, or libraries like SWR and TanStack Query. These hooks manage loading states, caching, revalidation, and error handling. Data is fetched after the component mounts in the browser."
          },
          {
            "q": "What are the advantages of CSR?",
            "a": "Fast subsequent navigations with no server round-trips, rich interactivity with client-side state management, reduced server load, ability to use browser APIs, and simpler deployment as static files."
          },
          {
            "q": "What are the disadvantages of CSR?",
            "a": "Slow initial load (JavaScript download + parse + execute), poor SEO (empty HTML shell), reliance on client device performance, potential for flash of unstyled content, and JavaScript required for basic content visibility."
          },
          {
            "q": "How does CSR affect SEO in Next.js?",
            "a": "CSR pages have minimal HTML content, so search engines may not index the actual page content. Next.js provides metadata API for basic tags, but for content-heavy pages, SSR, SSG, or ISR are preferred. Use dynamic rendering to serve SSR to bots and CSR to users."
          },
          {
            "q": "Can you mix CSR with SSR in Next.js?",
            "a": "Yes, Next.js supports mixed rendering. A page can have a Server Component shell that handles SEO-critical content and metadata, with Client Components embedded for interactive sections. This hybrid approach is the recommended pattern in the App Router."
          },
          {
            "q": "What is the role of \"use client\" directive?",
            "a": "The \"use client\" directive marks the boundary between server and client code. Components marked with \"use client\" are rendered on the client and can use hooks, event handlers, and browser APIs. All components imported into a Client Component also become client-rendered."
          },
          {
            "q": "How do you optimize CSR performance in Next.js?",
            "a": "Use dynamic imports with next/dynamic for code splitting, lazy load below-the-fold components, use SWR/React Query for caching, implement virtual scrolling for lists, use React.memo for expensive renders, and minimize bundle size with tree shaking."
          },
          {
            "q": "When should you choose CSR over SSR?",
            "a": "Choose CSR for authenticated dashboards, admin panels, tools with complex interactivity, real-time applications, and internal tools where SEO is not needed. Choose SSR/SSG for public content, e-commerce product pages, blogs, and any page that needs search engine visibility."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "\"use client\";\nimport { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n}",
          "title": "Basic Client Component",
          "description": "The \"use client\" directive enables hooks and event handlers. This component runs entirely in the browser."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Client-Side Rendering</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server sends HTML shell</text><text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Minimal</text><line x1=\"150\" y1=\"60\" x2=\"170\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Browser loads JS</text><text x=\"250\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bundle</text><line x1=\"320\" y1=\"60\" x2=\"340\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">React hydrates &</text><text x=\"410\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">renders UI</text><line x1=\"350\" y1=\"80\" x2=\"350\" y2=\"100\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"110\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"290\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">useEffect / SWR</text><text x=\"290\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch Data</text><rect x=\"10\" y=\"110\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"80\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User sees content</text><text x=\"80\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interactive</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CSR: Minimal HTML served, JavaScript renders conte</text><text x=\"250\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nt in the browser.</text></svg>"
        }
      },
      {
        "id": "nextjs-ssg",
        "title": "Static Site Generation",
        "tldr": "Static Site Generation (SSG) pre-renders pages at build time, producing static HTML files that can be served instantly from a CDN. In the Pages Router, SSG is achieved via getStaticProps. In the App Router, Static Generation is the default behavior when no dynamic functions are used. SSG provides the fastest possible load times since HTML is pre-built and does not require server processing at request time. Best for content that does not change frequently: blogs, documentation, marketing pages, and e-commerce product pages with stable data.",
        "layman": "SSG is like printing a book: you write all the content, print it (build), and then anyone can read it instantly without waiting for pages to be written on the spot.",
        "deepDive": "**How SSG Works in Next.js**: At build time (next build), Next.js executes getStaticProps (Pages Router) or runs Server Components (App Router) for each page, generates the HTML, and saves it as static .html files. These files are served directly from a CDN or web server without any server-side processing.\n\n**SSG in the Pages Router**: Export getStaticProps from a page to opt into SSG. The function runs at build time, fetches data, and returns props. For dynamic routes, getStaticPaths specifies which paths to pre-render. The fallback option controls behavior for paths not specified at build time.\n\n**SSG in the App Router**: In the App Router, all pages are statically rendered by default unless they use dynamic functions (cookies(), headers(), searchParams()) or export const dynamic = \"force-dynamic\". Static pages are rendered at build time and cached. Data fetching with fetch() is automatically cached.\n\n**Incremental Static Regeneration (ISR)**: ISR extends SSG by allowing pages to be re-rendered after build time without rebuilding the entire site. Set revalidate in getStaticProps or use next.revalidate in fetch() options. Pages are served from cache while being regenerated in the background.\n\n**SSG Performance and Caching**: SSG pages can be aggressively cached at CDN edge nodes because they are identical for all users. This results in near-instant page loads regardless of geographic location. SSG significantly reduces server load and hosting costs compared to SSR.",
        "qa": [
          {
            "q": "What is Static Site Generation in Next.js?",
            "a": "SSG pre-renders pages into static HTML at build time. These HTML files are served directly to users without server-side processing on each request. This results in the fastest possible page loads and excellent SEO."
          },
          {
            "q": "How do you implement SSG in the Pages Router?",
            "a": "Export an async getStaticProps function from the page. This function runs at build time, fetches data, and returns props. For dynamic routes, also export getStaticPaths to specify which paths to pre-render."
          },
          {
            "q": "How does SSG work in the App Router?",
            "a": "In the App Router, static generation is the default. Pages are pre-rendered at build time unless they use dynamic functions like cookies(), headers(), or searchParams(). Data fetching with fetch() is automatically cached and deduplicated."
          },
          {
            "q": "What is the build-time execution context for getStaticProps?",
            "a": "getStaticProps runs during next build on the server. It has access to the params for dynamic routes, preview mode, and the full Node.js API. It cannot access request-time data like cookies (unless using preview mode) or query parameters."
          },
          {
            "q": "What is the fallback option in getStaticPaths?",
            "a": "fallback determines behavior for paths not generated at build time. false: show 404. true: generate on first request and cache. \"blocking\": generate on first request without a loading state (SSR-like)."
          },
          {
            "q": "How does SSG benefit SEO?",
            "a": "SSG produces complete HTML at build time, so search engine crawlers receive fully-rendered pages with all content. Static HTML loads instantly, improving Core Web Vitals scores. Pages can be indexed immediately without JavaScript execution."
          },
          {
            "q": "What are the limitations of SSG?",
            "a": "Build time increases with the number of pages. Dynamic or user-specific content cannot use SSG. Content updates require a rebuild (or ISR). Large sites may need incremental builds. Not suitable for authenticated pages or real-time data."
          },
          {
            "q": "How does SSG handle environment variables?",
            "a": "Environment variables used in getStaticProps are resolved at build time. Public environment variables (NEXT_PUBLIC_) are inlined into the JavaScript bundle. Server-only environment variables are only available during build and are not exposed to the client."
          },
          {
            "q": "Can you use SSG with API routes?",
            "a": "Yes, API routes are separate from SSG. API routes run server-side on each request. SSG generates static HTML pages. A page can use SSG while its data source is an API route that runs dynamically."
          },
          {
            "q": "How do you debug SSG build issues?",
            "a": "Check the build output for errors. Use console.log in getStaticProps during build. Verify that data sources are accessible at build time. For ISR revalidation issues, check the revalidate interval and ensure CDN respects cache headers."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "export async function getStaticProps() {\n  const data = await fetch(\"https://cms.example.com/pages/home\").then(r => r.json());\n  return { props: { content: data } };\n}\n\nexport default function Home({ content }) {\n  return <div><h1>{content.title}</h1><div>{content.body}</div></div>\n}",
          "title": "SSG with getStaticProps",
          "description": "Fetches CMS data at build time and generates a static HTML page."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Static Site Generation</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">next build</text><text x=\"70\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Build Time</text><line x1=\"130\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">getStaticProps</text><text x=\"230\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch Data</text><line x1=\"290\" y1=\"60\" x2=\"320\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Generate HTML</text><text x=\"390\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Static Files</text><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"100\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"110\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"300\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Cache</text><text x=\"300\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Served Globally</text><line x1=\"150\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#999\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"110\" width=\"130\" height=\"40\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Request</text><text x=\"75\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Instant Load</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">SSG: Pages pre-built at build time, served statica</text><text x=\"250\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lly from CDN for instant loads.</text></svg>"
        }
      },
      {
        "id": "nextjs-isr",
        "title": "Incremental Static Regeneration",
        "tldr": "ISR allows static pages to be updated after build time without rebuilding the entire site, combining the performance of SSG with the freshness of SSR. Implement ISR by setting the revalidate property in getStaticProps (Pages Router) or using next.revalidate in fetch() options (App Router). ISR serves cached pages while regenerating updated HTML in the background, ensuring zero downtime during updates. On-Demand ISR (revalidatePath / revalidateTag) provides instant invalidation triggered by CMS webhooks or admin actions.",
        "layman": "ISR is like a library that keeps popular books ready on the shelf (cached) while occasionally checking if new editions exist and swapping them in without closing the library.",
        "deepDive": "**How ISR Works**: When a page is first built, HTML is generated and cached. On subsequent requests within the revalidate window, the cached page is served instantly. When the revalidate window expires, the cached page is still served, but Next.js triggers a background regeneration. Once the new HTML is ready, it replaces the cached version atomically.\n\n**ISR in the Pages Router**: Set revalidate in the return object of getStaticProps. The value is the maximum number of seconds between regenerations. For example, revalidate: 60 means the page regenerates at most once per 60 seconds. Dynamic routes also need getStaticPaths with the appropriate fallback strategy.\n\n**ISR in the App Router**: Use the next.revalidate option in fetch() to set the cache duration for a specific data fetch. Alternatively, use the cache() function with next: { revalidate } options. On-Demand ISR is achieved via revalidatePath() and revalidateTag() imported from next/cache.\n\n**On-Demand ISR**: On-Demand ISR uses revalidatePath(\"/path\") to invalidate a specific route or revalidateTag(\"tag\") to invalidate all routes using a specific fetch tag. These are typically called from API routes triggered by CMS webhooks. This eliminates the need to wait for time-based revalidation.\n\n**ISR Performance and Caching Strategies**: ISR strikes a balance between build-time generation and dynamic rendering. Use short revalidate times (10-60s) for news sites, longer times (3600+) for marketing pages, and On-Demand ISR for CMS-driven content. ISR works well with CDN caching and stale-while-revalidate headers.",
        "qa": [
          {
            "q": "What is Incremental Static Regeneration?",
            "a": "ISR enables static pages to be updated after deployment without rebuilding the entire site. Pages are served from cache while fresh HTML is generated in the background. When regeneration completes, the new version replaces the cached one atomically, ensuring zero downtime."
          },
          {
            "q": "How do you implement ISR in the Pages Router?",
            "a": "Add a revalidate property to the object returned by getStaticProps. The value is the number of seconds between potential regenerations. For example, return { props: { data }, revalidate: 60 } regenerates at most once per minute."
          },
          {
            "q": "How do you implement ISR in the App Router?",
            "a": "In the App Router, use the next.revalidate option in fetch(): fetch(url, { next: { revalidate: 60 } }). For On-Demand ISR, use revalidatePath() to invalidate a path or revalidateTag() to invalidate by tag, imported from next/cache."
          },
          {
            "q": "What is On-Demand ISR?",
            "a": "On-Demand ISR allows instant invalidation of cached pages without waiting for time-based revalidation. It uses revalidatePath(\"/path\") or revalidateTag(\"tag\") functions, typically called from API routes triggered by CMS webhooks, admin actions, or content updates."
          },
          {
            "q": "What happens during the revalidation window?",
            "a": "During the revalidation window, cached HTML is served immediately. After the window expires, the first request triggers a background regeneration while still serving the stale cached page. The new HTML replaces the cached version once regeneration completes."
          },
          {
            "q": "How does ISR handle high traffic?",
            "a": "ISR handles high traffic well because most requests are served from cache. During regeneration, only one process (per page) performs the regeneration while all other requests receive the cached version. This prevents thundering herd problems."
          },
          {
            "q": "What are the downsides of ISR?",
            "a": "Pages can serve stale content within the revalidation window. Build complexity increases compared to pure SSG. Not suitable for real-time data or highly personalized content. The first request after revalidation expiry may be slow (generation in background)."
          },
          {
            "q": "How do you debug ISR issues?",
            "a": "Check the server logs for regeneration errors. Verify that data sources are accessible during regeneration. Monitor the revalidate time and ensure it matches expectations. Use the Next.js build output to confirm which pages are using ISR. Add console.log in getStaticProps during regeneration."
          },
          {
            "q": "Can ISR work with dynamic routes?",
            "a": "Yes, ISR works with dynamic routes. Use getStaticPaths with fallback: true or \"blocking\" combined with revalidate in getStaticProps. The fallback strategy determines how non-prebuilt paths are handled on first request."
          },
          {
            "q": "What is the difference between revalidate and On-Demand ISR?",
            "a": "Time-based revalidate regenerates at fixed intervals (e.g., every 60 seconds). On-Demand ISR regenerates instantly when triggered (e.g., via CMS webhook). On-Demand ISR is more efficient for content that updates unpredictably, while time-based is simpler for predictable schedules."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "export async function getStaticProps() {\n  const data = await fetch(\"https://cms.example.com/posts/latest\");\n  const posts = await data.json();\n  return { props: { posts }, revalidate: 3600 };\n}",
          "title": "ISR with Time-Based Revalidation",
          "description": "Regenerates the page at most once per hour while serving cached content between regenerations."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Incremental Static Regeneration</text><rect x=\"10\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Build: SSG</text><text x=\"60\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Static HTML</text><line x1=\"110\" y1=\"58\" x2=\"130\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"190\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">revalidate:60</text><text x=\"190\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache Window</text><line x1=\"240\" y1=\"58\" x2=\"260\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"270\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"320\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Expired</text><text x=\"320\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stale Served</text><line x1=\"270\" y1=\"75\" x2=\"270\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"280\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Background</text><text x=\"280\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Regenerate</text><line x1=\"330\" y1=\"58\" x2=\"350\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"360\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fresh HTML</text><text x=\"410\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Replaces Cache</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ISR: Serve cached static pages, regenerate in back</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ground when stale.</text></svg>"
        }
      },
      {
        "id": "nextjs-metadata-api",
        "title": "Metadata API",
        "tldr": "The Metadata API in Next.js allows defining HTML head metadata (title, description, Open Graph, Twitter cards, etc.) using exported objects or generateMetadata functions. Metadata can be defined statically via an exported metadata object or dynamically via an async generateMetadata function that receives route params and search params. Metadata is automatically deduplicated and merged following the hierarchy: parent layouts can define defaults with metadataBase and generateMetadata can override specific fields. Supports Open Graph, Twitter cards, robots.txt, alternate languages, icons/manifests, and other standard <head> meta tags.",
        "layman": "The Metadata API is like a dashboard where you fill in forms (title, description, social media preview) for each page, and Next.js automatically updates the browser tab name, search results, and social sharing cards.",
        "deepDive": "**Static Metadata**: Export a metadata object from any layout.js or page.js file. The object contains fields like title, description, openGraph, twitter, robots, alternates, and icons. Metadata defined in layout.js applies to all child pages and can be overridden by child metadata exports.\n\n**Dynamic Metadata with generateMetadata**: Export an async generateMetadata function that receives { params, searchParams } and returns a metadata object. This enables dynamic metadata based on route parameters, fetched data, or request-time conditions. The function runs on every request for dynamic pages.\n\n**Metadata Field Types**: Key fields include: title (string or template object with absolute and default), description, openGraph (url, title, description, images, siteName, locale), twitter (card, title, description, images), robots (index, follow), alternates (canonical, languages), icons, manifest, and other meta tags.\n\n**Metadata Inheritance and Merging**: Metadata is inherited from parent layouts. A layout defines default metadata that applies to all child routes. Child pages can override specific fields. The metadataBase field sets the base URL for resolving relative paths in metadata. The title field supports template patterns like \"%s | Site Name\".\n\n**File-Based Metadata**: Next.js also supports file-based metadata through convention: favicon.ico, opengraph-image.png, twitter-image.png, robots.txt, sitemap.xml, and manifest.json can be placed in the app directory and are automatically served. These complement the Metadata API object approach.",
        "qa": [
          {
            "q": "What is the Metadata API in Next.js?",
            "a": "The Metadata API allows defining HTML head metadata by exporting metadata objects or generateMetadata functions from layout.js and page.js files. It supports title, description, Open Graph, Twitter cards, robots directives, canonical URLs, and more."
          },
          {
            "q": "How do you define static metadata?",
            "a": "Export a metadata object from layout.js or page.js: export const metadata = { title: \"Page Title\", description: \"Page description\" }. This object can include nested openGraph, twitter, and other metadata groups."
          },
          {
            "q": "How do you define dynamic metadata?",
            "a": "Export an async generateMetadata function that receives { params, searchParams }: export async function generateMetadata({ params }) { const post = await fetchPost(params.slug); return { title: post.title, description: post.excerpt } }."
          },
          {
            "q": "What is the title template feature?",
            "a": "The title.template field in layout.js defines a template for child page titles. For example, { title: { template: \"%s | My Site\", default: \"My Site\" } } transforms child titles like \"About\" into \"About | My Site\"."
          },
          {
            "q": "How does metadata inheritance work?",
            "a": "Metadata defined in a layout.js applies to all child routes. Child pages can override specific fields. If a child only defines title, the parent\\'s description is inherited. This hierarchical merging reduces duplication while allowing per-page customization."
          },
          {
            "q": "What is metadataBase used for?",
            "a": "metadataBase sets the base URL for resolving relative paths in metadata fields. For example, metadataBase: new URL(\"https://example.com\") makes og:image: \"/og.png\" resolve to \"https://example.com/og.png\". It should match your production domain."
          },
          {
            "q": "How do you add Open Graph metadata?",
            "a": "Include an openGraph field in the metadata object: { openGraph: { title: \"OG Title\", description: \"OG Description\", images: [{ url: \"/og.png\", width: 1200, height: 630 }] } }. Next.js generates the appropriate meta tags."
          },
          {
            "q": "What file-based metadata does Next.js support?",
            "a": "Convention-based files: favicon.ico (root), opengraph-image.png (per-route), twitter-image.png (per-route), robots.txt (root), sitemap.xml (root), manifest.json (root). These files are automatically served and can supplement the Metadata API."
          },
          {
            "q": "How does metadata work with client-side navigation?",
            "a": "When navigating between routes client-side, Next.js updates the document head using the new page\\'s metadata. The title and meta tags are updated dynamically without a full page reload."
          },
          {
            "q": "Can you use generateMetadata with ISR or SSG pages?",
            "a": "Yes, generateMetadata runs during the build process for SSG pages and during revalidation for ISR pages. For dynamic metadata, it runs on the server during generation, not on the client."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "export const metadata = {\n  title: \"About Us\",\n  description: \"Learn about our company mission and team.\",\n  openGraph: {\n    title: \"About Us | My Company\",\n    images: [\"/about-og.png\"]\n  }\n};",
          "title": "Static Metadata Export",
          "description": "Defines static metadata that does not change between requests."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Metadata API</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">layout.js metadata</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Defaults</text><line x1=\"150\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">page.js metadata</text><text x=\"250\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Overrides</text><line x1=\"320\" y1=\"58\" x2=\"340\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Head Tags</text><text x=\"410\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Generated</text><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"260\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"320\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Open Graph</text><text x=\"320\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Social Cards</text><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">generateMetadata</text><text x=\"70\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Metadata API: Hierarchical metadata with static an</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">d dynamic generation.</text></svg>"
        }
      },
      {
        "id": "nextjs-route-handlers",
        "title": "Route Handlers",
        "tldr": "Route Handlers allow creating API endpoints within Next.js using route.js files in the App Router directory. Support all HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS) via exported async functions named after the method. Route Handlers are server-only and do not increase client bundle size, making them ideal for form submissions, webhooks, and internal API calls. Support dynamic routes (route groups), middleware integration, cookies/headers access, streaming responses, and request body parsing.",
        "layman": "Route Handlers are like having a mini backend server built into your frontend project. You create files with special names and export functions for GET, POST, etc., and Next.js automatically turns them into API endpoints.",
        "deepDive": "**Route Handler Basics**: Create a route.js file in the app directory. Export async functions named after HTTP methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. Each function receives a Request object and returns a Response or NextResponse. Route Handlers are server-only and cannot be used in Client Components.\n\n**Request and Response Handling**: Route Handlers receive the standard Web Request API. Parse JSON with request.json(), read form data with request.formData(), access headers with request.headers, and get query parameters from the URL. Responses use the standard Web Response API or NextResponse for convenience methods.\n\n**Dynamic Route Handlers**: Create route handlers in dynamic route folders: app/api/items/[id]/route.js. Access route parameters via the second argument: export async function GET(request, { params }) { ... }. Supports catch-all routes ([...slug]) and optional catch-all routes ([[...slug]]).\n\n**Middleware and Authentication**: Route Handlers integrate with Next.js middleware (middleware.js) for authentication, rate limiting, and request preprocessing. They can access cookies (via request.cookies or next/headers) and headers (via request.headers or headers() from next/headers).\n\n**Streaming and Edge Runtime**: Route Handlers support streaming responses using the Web Streams API. They can run on the Edge Runtime for low-latency global responses or the Node.js Runtime for full Node.js API access. The runtime is selected automatically based on used APIs or explicit configuration.",
        "qa": [
          {
            "q": "What are Route Handlers in Next.js?",
            "a": "Route Handlers are API endpoints defined by route.js files in the App Router directory. Each exported HTTP method function (GET, POST, PUT, etc.) handles requests to that route. They are server-only, do not affect client bundle size, and work with the standard Web Request/Response API."
          },
          {
            "q": "How do you create a GET Route Handler?",
            "a": "Create a route.js file and export an async function named GET: export async function GET(request) { return Response.json({ message: \"Hello\" }) }. The function receives the incoming Request object and must return a Response or NextResponse."
          },
          {
            "q": "How do you access route parameters in handlers?",
            "a": "Dynamic route parameters are available in the second argument: export async function GET(request, { params }) { const id = params.id }. The params object matches the dynamic segment names defined by the folder structure (e.g., [id] provides params.id)."
          },
          {
            "q": "How do you parse request bodies?",
            "a": "Use the Request API methods: request.json() for JSON bodies, request.formData() for form data, request.text() for plain text. These return Promises that resolve to the parsed body. Always validate and type-check parsed data before use."
          },
          {
            "q": "Can Route Handlers access cookies?",
            "a": "Yes, via the cookies() function from next/headers: import { cookies } from \"next/headers\"; const cookieStore = cookies(); const token = cookieStore.get(\"token\"). Alternatively, use request.cookies for read-only access."
          },
          {
            "q": "What runtimes do Route Handlers support?",
            "a": "Route Handlers support both the Edge Runtime (fast, globally distributed, limited Node.js APIs) and the Node.js Runtime (full Node.js API access, filesystem, databases). The runtime is selected automatically or can be forced with export const runtime = \"edge\" or \"nodejs\"."
          },
          {
            "q": "How do Route Handlers differ from API Routes in the Pages Router?",
            "a": "Route Handlers (App Router) use route.js files and the Web Request/Response API. API Routes (Pages Router) use pages/api/ files and Express-like req/res objects. Route Handlers support Edge Runtime, streaming, and better typing."
          },
          {
            "q": "Can Route Handlers be called from Client Components?",
            "a": "Yes, Client Components can call Route Handlers via fetch() just like any external API. Route Handlers are essentially internal API endpoints. This is the recommended pattern for form submissions and server actions that need explicit API endpoints."
          },
          {
            "q": "How do you handle CORS in Route Handlers?",
            "a": "Set CORS headers in the Response object: return new Response(null, { headers: { \"Access-Control-Allow-Origin\": \"*\", \"Access-Control-Allow-Methods\": \"GET, POST, PUT, DELETE\" } }). For preflight requests, export an OPTIONS handler."
          },
          {
            "q": "How do you implement error handling in Route Handlers?",
            "a": "Use try-catch blocks and return appropriate HTTP status codes. Return Response.json({ error: message }, { status: 400 }) for client errors and Response.json({ error: \"Internal Server Error\" }, { status: 500 }) for server errors. Use NextResponse for convenience methods like NextResponse.redirect()."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// app/api/hello/route.js\nexport async function GET() {\n  return Response.json({ message: \"Hello World\" });\n}",
          "title": "Basic GET Route Handler",
          "description": "Creates a GET endpoint at /api/hello that returns JSON."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Route Handlers</text><rect x=\"10\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Request</text><text x=\"60\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"110\" y1=\"58\" x2=\"130\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"40\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"205\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">route.js</text><text x=\"205\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">GET / POST handler</text><line x1=\"270\" y1=\"58\" x2=\"290\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"300\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"350\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Logic</text><text x=\"350\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Process</text><line x1=\"300\" y1=\"75\" x2=\"300\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"295\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response.json()</text><text x=\"295\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">JSON Response</text><rect x=\"10\" y=\"105\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Headers/Cookies</text><text x=\"60\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Route Handlers: API endpoints defined by route.js </text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">in the App Router directory.</text></svg>"
        }
      },
      {
        "id": "nextjs-server-components",
        "title": "Server Components",
        "tldr": "React Server Components (RSC) are components that render exclusively on the server, sending only the resulting HTML to the client. In Next.js, all components in the App Router are Server Components by default, reducing client-side JavaScript bundle size significantly. Server Components can directly access databases, filesystems, and backend services without exposing sensitive logic to the client. They cannot use React hooks, browser APIs, event handlers, or state management, making them ideal for data fetching and static content rendering.",
        "layman": "Server Components are like kitchen prep chefs who prepare all the ingredients (fetch data, query databases) before the food goes to the dining area (browser). The diners only see the finished dish (HTML), not the kitchen tools (server code).",
        "deepDive": "**What Are Server Components**: Server Components are React components that run exclusively on the server during rendering. They are the default in Next.js App Router. They reduce client bundle size because their code, dependencies, and imported libraries never reach the browser. They can use Node.js APIs directly (database queries, filesystem access).\n\n**Benefits of Server Components**: Reduced JavaScript bundle size (server-only code is excluded), direct backend access (no API layer needed for data fetching), automatic code splitting (only client components are bundled), improved initial page load (HTML is pre-rendered), and better SEO (complete HTML is served).\n\n**Limitations and Constraints**: Server Components cannot use useState, useEffect, useContext, useReducer, or any React hooks. They cannot use browser APIs (window, document, localStorage). They cannot handle user interactions (onClick, onChange). They cannot use context providers or event handlers. These features require Client Components.\n\n**Data Fetching in Server Components**: Server Components can use async/await directly in the component function. They can fetch data from databases, APIs, or filesystems. The App Router automatically deduplicates fetch requests and caches responses. Data fetching is done at the component level, eliminating prop drilling for data.\n\n**Server Component Composition**: Server Components can import and render Client Components, creating a seamless hybrid. Data can be passed from Server Components to Client Components as props. The boundary between server and client is clearly marked by the \"use client\" directive. Server Components can also be passed as children to Client Components.",
        "qa": [
          {
            "q": "What are React Server Components?",
            "a": "Server Components are React components that run and render exclusively on the server. They never send their JavaScript code to the client; only the rendered HTML output is sent. This reduces bundle size and enables direct access to server-side resources like databases."
          },
          {
            "q": "How are Server Components different from Client Components?",
            "a": "Server Components run on the server, have no client-side interactivity, and reduce bundle size. Client Components run in the browser, support hooks and event handlers, and increase bundle size. In the App Router, all components are Server Components by default."
          },
          {
            "q": "What can Server Components do that Client Components cannot?",
            "a": "Server Components can directly access databases, read from the filesystem, use environment variables (non-NEXT_PUBLIC_), access backend services, and perform CPU-intensive computations without affecting client performance. They can also keep sensitive logic (API keys, business logic) server-side."
          },
          {
            "q": "What are the limitations of Server Components?",
            "a": "Server Components cannot use React hooks (useState, useEffect, useContext, etc.), browser APIs (window, document), event handlers (onClick, onSubmit), or create React context. They are rendered only on the server and do not re-render on the client."
          },
          {
            "q": "How do you fetch data in Server Components?",
            "a": "Use async/await directly in the component: export default async function Page() { const data = await fetch(\"https://api.example.com/data\"); return <div>{data.title}</div> }. Next.js automatically deduplicates and caches fetch requests."
          },
          {
            "q": "How do you add interactivity to Server Components?",
            "a": "Server Components cannot be interactive. To add interactivity, import and render a Client Component (marked with \"use client\") from within a Server Component. The Client Component handles event handlers, state, and browser APIs while the Server Component handles data fetching and layout."
          },
          {
            "q": "What happens when a Server Component re-renders?",
            "a": "Server Components only render on the server. When data changes, the component re-renders on the server, and the new HTML is sent to the client. Client-side state and UI are preserved during this process. Client Components nested inside Server Components maintain their state across re-renders."
          },
          {
            "q": "How does the Server Component pattern improve performance?",
            "a": "By rendering on the server, Server Components eliminate the need to download, parse, and execute JavaScript for data fetching and rendering logic. This reduces the bundle size, improves Time to Interactive, and reduces the device resources required."
          },
          {
            "q": "Can Server Components use CSS-in-JS libraries?",
            "a": "Most CSS-in-JS libraries require client-side JavaScript execution and cannot be used directly in Server Components. Use CSS Modules, Tailwind CSS, or other zero-runtime CSS solutions with Server Components. Some libraries like styled-components have experimental server-side support."
          },
          {
            "q": "How do Server Components handle authentication?",
            "a": "Server Components can check authentication by reading cookies or session tokens server-side. They can conditionally render content based on auth state. For interactive auth flows (login forms, redirects), use Client Components wrapped by Server Components that provide the initial auth state."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// app/page.js — Server Component by default\nexport default async function Home() {\n  const res = await fetch(\"https://api.example.com/posts\");\n  const posts = await res.json();\n  return (\n    <ul>\n      {posts.map(p => <li key={p.id}>{p.title}</li>)}\n    </ul>\n  );\n}",
          "title": "Async Server Component for Data Fetching",
          "description": "Fetches posts directly in the component without useEffect, loading state, or API route."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Server Components</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Component</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Runs on Server</text><line x1=\"150\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Direct DB/API</text><text x=\"250\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch Data</text><line x1=\"320\" y1=\"58\" x2=\"340\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTML Output</text><text x=\"410\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">to Client</text><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Component</text><text x=\"300\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interactive (useState)</text><line x1=\"230\" y1=\"123\" x2=\"180\" y2=\"123\" stroke=\"#999\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"80\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Component</text><text x=\"80\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No JS bundle</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Server Components: Server-rendered by default, red</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">uce JS bundle, direct backend access.</text></svg>"
        }
      },
      {
        "id": "nextjs-client-components",
        "title": "Client Components",
        "tldr": "Client Components are React components that render on the client browser, enabling interactivity through hooks, event handlers, and browser APIs. Marked with the \"use client\" directive at the top of the file, creating a clear boundary between server and client code. All components imported into a Client Component file also become part of the client bundle, making the placement of the \"use client\" directive strategically important. Client Components can be rendered server-side during the initial page load (SSR) but are hydrated and become interactive on the client.",
        "layman": "Client Components are like interactive touchscreens in a museum: the content may be prepared by the server, but the buttons, animations, and real-time updates all happen on your device.",
        "deepDive": "**The \"use client\" Directive**: Adding \"use client\" at the top of a file marks it and all its imports as Client Components. This directive creates the server-client boundary. All React hooks (useState, useEffect, useRef, useCallback, useMemo, useContext) and event handlers are only available in Client Components.\n\n**Server-Side Rendering of Client Components**: Client Components are pre-rendered on the server during initial page load, producing static HTML. After the JavaScript loads, React hydrates the component, making it interactive. This means Client Components get both SSR benefits (fast initial HTML) and client interactivity.\n\n**Bundle Size Considerations**: Client Components increase the JavaScript bundle size. Strategically place the \"use client\" directive at the lowest possible level to minimize the client bundle. Server Components that contain no client logic should remain server-only. Use dynamic imports with ssr: false for rarely-used client components.\n\n**Composition Patterns**: Best practice: Server Components handle data fetching and static rendering, passing data as props to Client Components. Client Components handle interactivity. Use the children prop pattern to pass Server Component output into Client Component wrappers. Avoid importing Server Components into Client Components.\n\n**Third-Party Library Usage**: Many React libraries (UI components, charts, form libraries) require client-side JavaScript. Wrap third-party client libraries in Client Components. Server Components can import and render these client wrappers. Some newer libraries offer both server and client exports.",
        "qa": [
          {
            "q": "What are Client Components in Next.js?",
            "a": "Client Components are components that render on the client browser. They support React hooks, event handlers, browser APIs, and state management. They are marked with the \"use client\" directive and can be server-side rendered during initial load for SEO benefits."
          },
          {
            "q": "How do you create a Client Component?",
            "a": "Add \"use client\" as the first line of the file. This marks the component and all its direct imports as client-side. Then you can use React hooks, event handlers, and browser APIs. The component will be pre-rendered on the server and hydrated on the client."
          },
          {
            "q": "What is the server-client boundary?",
            "a": "The server-client boundary is defined by the \"use client\" directive. Everything above the boundary (server-side) is rendered on the server. Everything below the boundary (the Client Component and its imports) is rendered on the client. This boundary determines what code goes into the client bundle."
          },
          {
            "q": "Can Client Components be server-side rendered?",
            "a": "Yes, Client Components are pre-rendered on the server during the initial page load. This produces static HTML that is sent to the client. After the JavaScript bundle loads, React hydrates the HTML, attaching event handlers and making it interactive."
          },
          {
            "q": "How do you minimize client bundle size with Client Components?",
            "a": "Place the \"use client\" directive at the lowest possible component level. Keep data fetching and static rendering in Server Components. Use dynamic imports with next/dynamic for client components that are not immediately visible. Pass Server Components as children to Client Components using the children prop."
          },
          {
            "q": "What happens when you import a Server Component into a Client Component?",
            "a": "If you import a Server Component directly into a Client Component, the Server Component becomes a Client Component too (it loses its server-side capabilities). Use the composition pattern: pass Server Components as children or props to Client Components instead of importing them."
          },
          {
            "q": "How do you use third-party UI libraries in the App Router?",
            "a": "Third-party UI components that use hooks or browser APIs must be wrapped in Client Components. Create a wrapper file with \"use client\", import the library, and re-export it. Server Components can then import and render this client wrapper."
          },
          {
            "q": "What hooks are available in Client Components?",
            "a": "All React hooks: useState, useEffect, useRef, useCallback, useMemo, useReducer, useContext, useImperativeHandle, useLayoutEffect, useDebugValue, useId, useSyncExternalStore, useTransition, useDeferredValue. Custom hooks that use these hooks are also available."
          },
          {
            "q": "Can Client Components use environment variables?",
            "a": "Client Components can only access environment variables prefixed with NEXT_PUBLIC_. Server-only environment variables are not available in Client Components. Use NEXT_PUBLIC_ prefix for values that need to be accessed client-side."
          },
          {
            "q": "How do you handle loading states in Client Components?",
            "a": "Use React hooks like useState for loading state, useEffect for data fetching with loading indicators, or libraries like SWR/TanStack Query that provide built-in loading states. For suspense-based loading, wrap Client Components in Suspense boundaries defined in Server Components."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "\"use client\";\nimport { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n}",
          "title": "Basic Client Component with State",
          "description": "A simple interactive counter using useState hook."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Client Components</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">\"use client\"</text><text x=\"70\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Directive</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Bundle</text><text x=\"230\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Includes JS</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hydration</text><text x=\"390\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">on Client</text><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"295\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Interactive</text><text x=\"295\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">useState/onClick</text><rect x=\"10\" y=\"105\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Pre-render</text><text x=\"75\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Initial HTML</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Client Components: Browser-rendered with hooks, in</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">teractivity, and browser API access.</text></svg>"
        }
      },
      {
        "id": "nextjs-dynamic-routes",
        "title": "Dynamic Routes",
        "tldr": "Dynamic Routes in Next.js allow creating parameterized URLs using bracket syntax in folder names, supporting both the App Router and Pages Router. Single dynamic segments use [slug] syntax, catch-all segments use [...slug], and optional catch-all segments use [[...slug]]. Dynamic route parameters are accessible via the params prop in page components or the second argument in route handlers. generateStaticParams (App Router) or getStaticPaths (Pages Router) defines which dynamic paths are pre-rendered at build time for SSG/ISR.",
        "layman": "Dynamic Routes are like URL templates with blank fields. For example, /products/[id] means any product ID works: /products/1, /products/abc, or /products/blue-shirt all map to the same template.",
        "deepDive": "**Dynamic Route Syntax**: In the App Router, dynamic routes use folder-level bracket notation: app/products/[id]/page.js creates /products/1, /products/abc. Catch-all: app/posts/[...slug]/page.js matches /posts/a/b/c. Optional catch-all: app/posts/[[...slug]]/page.js also matches /posts.\n\n**Accessing Dynamic Parameters**: In the App Router, page components receive params as a prop: export default function Page({ params }) { return <div>{params.id}</div> }. In the Pages Router, use the router.query object or getServerSideProps/getStaticProps context.params.\n\n**generateStaticParams for Static Generation**: In the App Router, export async function generateStaticParams() to specify which dynamic paths to pre-render at build time. Returns an array of objects with the dynamic parameter values. Combine with revalidation for ISR.\n\n**Dynamic Routes in Route Handlers**: Route Handlers support dynamic parameters: app/api/products/[id]/route.js. Access params in the second argument: export async function GET(request, { params }). Supports catch-all patterns for flexible API endpoints.\n\n**Matching and Precedence**: Next.js resolves route conflicts by specificity: static routes take precedence over dynamic routes. More specific dynamic routes (e.g., [slug] vs [...slug]) take precedence over less specific ones. The order of definition does not matter; the framework determines the best match.",
        "qa": [
          {
            "q": "What are Dynamic Routes in Next.js?",
            "a": "Dynamic Routes allow parts of the URL to be variable, defined using bracket syntax in folder names. For example, app/blog/[slug]/page.js creates a route that matches /blog/any-slug-value. The captured value is available as the params prop."
          },
          {
            "q": "What is the difference between [slug] and [...slug]?",
            "a": "[slug] matches a single URL segment (e.g., /blog/hello). [...slug] matches one or more segments (e.g., /blog/2024/01/hello). [...slug] captures segments as an array. Use [slug] for single parameters and [...slug] for nested paths."
          },
          {
            "q": "What is an optional catch-all route?",
            "a": "[[...slug]] matches with or without the parameter. For example, app/[[...slug]]/page.js matches /, /a, /a/b. The params.slug is undefined for the root and an array for deeper paths. Useful for documentation or category hierarchies with optional nesting."
          },
          {
            "q": "How do you access dynamic route parameters?",
            "a": "In App Router pages: export default function Page({ params }) { params.id }. In Route Handlers: export async function GET(request, { params }). In Pages Router: use router.query.id or getServerSideProps context.params."
          },
          {
            "q": "What is generateStaticParams?",
            "a": "generateStaticParams is the App Router equivalent of getStaticPaths. It defines which dynamic paths are pre-rendered at build time. Returns an array of objects: [{ slug: \"post-1\" }, { slug: \"post-2\" }]. Used with static or ISR rendering strategies."
          },
          {
            "q": "How does route resolution work with conflicting routes?",
            "a": "Static routes take precedence over dynamic routes. Among dynamic routes, more specific patterns take precedence. For example, /products/create (static) wins over /products/[id] (dynamic). The framework automatically handles precedence without explicit ordering."
          },
          {
            "q": "Can you have multiple dynamic segments in one route?",
            "a": "Yes, you can have multiple dynamic segments: app/[category]/[product]/page.js matches /electronics/phone-1. Each segment captures its respective value in params: { category: \"electronics\", product: \"phone-1\" }."
          },
          {
            "q": "How do dynamic routes work with ISR?",
            "a": "Dynamic routes can use ISR by combining generateStaticParams with fetch options like next: { revalidate: 60 } or by using revalidatePath for On-Demand ISR. Pages not specified in generateStaticParams use fallback behavior."
          },
          {
            "q": "How do you get query parameters in dynamic routes?",
            "a": "Query parameters are available via searchParams in the App Router: export default function Page({ params, searchParams }). In the Pages Router, use router.query or getServerSideProps context.query."
          },
          {
            "q": "What happens if a dynamic route parameter is missing?",
            "a": "For required dynamic segments ([slug]), the route only matches if the segment is present in the URL. For optional catch-all routes ([[...slug]]), both the root and nested paths match. Missing required parameters result in a 404."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// app/products/[id]/page.js\nexport default function ProductPage({ params }) {\n  return <h1>Product {params.id}</h1>\n}",
          "title": "Single Dynamic Segment",
          "description": "Creates /products/1, /products/abc, etc. The id parameter is available via params.id."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Dynamic Routes</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">app/products/[id]/page.js</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic File</text><line x1=\"150\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/123</text><text x=\"250\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">URL Match</text><line x1=\"320\" y1=\"58\" x2=\"340\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"400\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">params.id=123</text><text x=\"400\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Captured Value</text><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">generateStaticParams</text><text x=\"300\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pre-render Paths</text><rect x=\"10\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"80\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">/products/[...slug]</text><text x=\"80\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Catch-all</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Dynamic Routes: Bracket syntax for parameterized U</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">RLs with flexible matching patterns.</text></svg>"
        }
      },
      {
        "id": "nextjs-middleware",
        "title": "Middleware",
        "tldr": "Middleware in Next.js runs code before a request is completed, allowing redirects, rewrites, authentication checks, and header manipulation at the edge. Defined in a single middleware.ts file at the project root, executing for every matching route before the page or API route responds. Middleware runs on the Edge Runtime for low-latency global execution, processing requests before they reach the application server. Supports conditional matching via the config.matcher array, regex patterns, and early returns for performance optimization.",
        "layman": "Middleware is like a security checkpoint at the entrance of a building. Before anyone reaches their destination, they pass through where guards can check IDs (authentication), redirect people to the right entrance, or add stamps (headers).",
        "deepDive": "**Middleware Fundamentals**: Middleware is defined in middleware.ts at the root of the project (same level as app/ or pages/). It exports a default async function that receives NextRequest and returns NextResponse or undefined. Middleware runs for every route that matches the config.matcher patterns before the route handler executes.\n\n**Authentication and Authorization**: Middleware is commonly used for authentication by checking cookies, session tokens, or JWT. If unauthenticated, redirect to login. If unauthorized, show 403. Middleware can also check for specific headers or IP-based access control before the page renders.\n\n**Redirects and Rewrites**: Middleware can perform server-side redirects (301/302) using NextResponse.redirect() and internal rewrites using NextResponse.rewrite(). Rewrites are invisible to the user but change which page handles the request. This is useful for A/B testing, localization, or legacy URL support.\n\n**Header and Cookie Manipulation**: Middleware can set, modify, or delete request and response headers. It can set cookies, modify cache headers, or add security headers (CSP, HSTS). These modifications happen at the edge before the request reaches the application server.\n\n**Config and Matching**: The config.matcher array specifies which routes trigger the middleware. Matchers can use exact paths, prefix patterns, or regex. Middleware should be as specific as possible to avoid unnecessary edge function invocations. Use negative lookaheads in regex to exclude specific paths like static files.",
        "qa": [
          {
            "q": "What is Middleware in Next.js?",
            "a": "Middleware is a function that runs before a request completes, allowing you to modify the response, redirect, rewrite, or check authentication. It is defined in a single middleware.ts file at the project root and runs on the Edge Runtime for low-latency execution."
          },
          {
            "q": "Where is the middleware file placed?",
            "a": "Middleware is placed at the root of the project, alongside the app/ or pages/ directories, not inside them. The file must be named middleware.ts (or .js) and export a default function."
          },
          {
            "q": "How do you specify which routes trigger middleware?",
            "a": "Use the config.matcher export: export const config = { matcher: [\"/dashboard/:path*\", \"/api/:path*\"] }. Matchers can use path patterns, regex, or be omitted to match all routes. Be as specific as possible for performance."
          },
          {
            "q": "What runtime does middleware use?",
            "a": "Middleware runs on the Edge Runtime, which is based on the Web API standards. It has limited Node.js API access but provides fast, globally distributed execution. You cannot use Node.js-specific modules like fs or path in middleware."
          },
          {
            "q": "How do you implement authentication in middleware?",
            "a": "Check for auth tokens in cookies or headers. If missing, redirect to login: export function middleware(request) { const token = request.cookies.get(\"token\"); if (!token) return NextResponse.redirect(new URL(\"/login\", request.url)) }."
          },
          {
            "q": "Can middleware access the database?",
            "a": "Middleware has limited capabilities and cannot directly access databases using typical drivers. Use middleware for lightweight checks (token validation, header inspection). For database-dependent logic, use Route Handlers or API routes."
          },
          {
            "q": "What is the difference between redirect and rewrite in middleware?",
            "a": "redirect sends a 307/308 response telling the browser to go to a different URL. rewrite internally changes which route handles the request without the browser knowing. Rewrites are useful for A/B testing, localization, or proxying."
          },
          {
            "q": "How do you exclude certain paths from middleware?",
            "a": "Use negative lookaheads in the matcher regex or exclude specific paths. For example: matcher: [\"/((?!api/auth|_next/static|favicon.ico).*)\"] excludes auth routes, static files, and favicon."
          },
          {
            "q": "Can middleware modify the response?",
            "a": "Yes, middleware can set response headers, cookies, and even return a custom response. Use NextResponse.next() to continue with modifications, NextResponse.redirect() to redirect, or NextResponse.rewrite() to internally rewrite."
          },
          {
            "q": "How does middleware affect performance?",
            "a": "Middleware runs on every matched request, so it should be lightweight. Avoid heavy computations, large library imports, or network requests in middleware. Use specific matchers to minimize the number of requests that trigger middleware execution."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// middleware.ts\nimport { NextResponse } from \"next/server\";\nimport type { NextRequest } from \"next/server\";\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get(\"session\");\n  if (!token) {\n    return NextResponse.redirect(new URL(\"/login\", request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = { matcher: [\"/dashboard/:path*\"] };",
          "title": "Authentication Middleware",
          "description": "Redirects unauthenticated users to /login when accessing /dashboard/* routes."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Middleware</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Request</text><text x=\"70\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Incoming</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">middleware.ts</text><text x=\"230\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check Auth</text><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redirect to /login</text><text x=\"70\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unauthorized</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Page / API Route</text><text x=\"390\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Proceed</text><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"290\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Set Headers</text><text x=\"290\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cookies/CSP</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Middleware: Runs at the edge before request reache</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s the application server.</text></svg>"
        }
      },
      {
        "id": "nextjs-server-actions",
        "title": "Server Actions",
        "tldr": "Server Actions are async functions that run on the server but can be called directly from Client Components, eliminating API route boilerplate for mutations. Defined with \"use server\" directive at file level (marking all exports) or inline within a Server Component function body. Server Actions support progressive enhancement: forms work without JavaScript, and the action receives FormData automatically. Integrate with caching via revalidatePath and revalidateTag for automatic cache invalidation after mutations.",
        "layman": "Server Actions are like having a direct phone line from your browser to the server database. Instead of going through an operator (API route), you dial directly and the server handles everything.",
        "deepDive": "**What Are Server Actions**: Server Actions are functions that run on the server but are callable from Client Components and forms. Defined with \"use server\", they handle database mutations, file operations, and business logic. They return data or trigger cache revalidation, and can be used with React hooks like useActionState.\n\n**Form Actions and Progressive Enhancement**: Pass a Server Action to a form\\'s action prop. The form works without JavaScript (progressive enhancement). The action receives FormData automatically. After submission, Next.js merges the response with the client UI. This eliminates manual form state management.\n\n**Calling from Event Handlers**: Import a Server Action and call it directly: onClick={() => myAction(data)}. The action runs server-side and returns a Promise. Use startTransition for pending states. Actions can receive FormData, JSON, or primitive arguments.\n\n**Cache Integration**: Inside the action, call revalidatePath(\"/path\") or revalidateTag(\"tag\") to invalidate caches. Next.js re-renders affected routes with fresh data. Actions can also return values that update the client UI immediately.\n\n**Security**: Always validate permissions inside the action (server-side). Never trust client-side checks. Server Action code is never exposed to the client; only a secure reference ID is included in the bundle. Use env vars for secrets.",
        "qa": [
          {
            "q": "What are Server Actions in Next.js?",
            "a": "Server Actions are async functions marked with \"use server\" that execute on the server but can be invoked from Client Components, form actions, or event handlers. They eliminate the need for separate API routes for mutations."
          },
          {
            "q": "How do you define a Server Action?",
            "a": "Add \"use server\" at the top of a file (making all exports server actions) or inline inside a Server Component function. The action is an async function that receives FormData or arguments and returns a result."
          },
          {
            "q": "How do Server Actions work with forms?",
            "a": "Pass the action to the form action prop. It receives FormData automatically. The form works without JS (progressive enhancement). Use useActionState for loading states and validation feedback."
          },
          {
            "q": "How do you invalidate cache from a Server Action?",
            "a": "Call revalidatePath(\"/path\") to invalidate a specific route or revalidateTag(\"tag\") to invalidate all routes using a fetch tag. These are imported from next/cache."
          },
          {
            "q": "What is progressive enhancement in Server Actions?",
            "a": "Forms with Server Actions work even with JavaScript disabled. Without JS, a traditional POST is made. With JS, the action runs via fetch. This ensures forms are functional everywhere."
          },
          {
            "q": "What hooks integrate with Server Actions?",
            "a": "useActionState (React 19+) provides action state and pending status. useFormStatus provides the pending state of the parent form. Both integrate seamlessly with Server Actions."
          },
          {
            "q": "Are Server Actions exposed to the client?",
            "a": "No. Only a secure reference ID is in the client bundle. The actual code stays server-side, preventing sensitive logic leakage."
          },
          {
            "q": "Can Server Actions be called from Server Components?",
            "a": "Yes, Server Actions can be imported and called from Server Components too. This is useful for initial data seeding or server-side triggers."
          },
          {
            "q": "What are the limitations of Server Actions?",
            "a": "POST-only, cannot be cached at the edge, not for data fetching (use Server Components instead), and authentication must be checked inside the action."
          },
          {
            "q": "How do you handle validation in Server Actions?",
            "a": "Validate inputs inside the action and return error objects. Use try-catch for database errors. Return structured responses with success/error fields for the client to handle."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "\"use server\";\nexport async function submitContact(prevState, formData) {\n  await saveToDB({ name: formData.get(\"name\"), email: formData.get(\"email\") });\n  revalidatePath(\"/contact\");\n  return { success: true };\n}",
          "title": "Server Action with Form",
          "description": "Saves form data to database and revalidates the contact page."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Server Actions</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"70\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Form/onClick</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"235\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">\"use server\"</text><text x=\"235\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Action</text><line x1=\"300\" y1=\"58\" x2=\"330\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"340\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"400\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Database</text><text x=\"400\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mutation</text><line x1=\"340\" y1=\"75\" x2=\"340\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"295\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">revalidatePath</text><text x=\"295\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache</text><rect x=\"10\" y=\"105\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response</text><text x=\"75\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">to Client</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Server Actions: Server functions callable from cli</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ent, with cache integration.</text></svg>"
        }
      },
      {
        "id": "nextjs-image-optimization",
        "title": "Image Optimization",
        "tldr": "Next.js Image Optimization via next/image auto-resizes, converts to modern formats (WebP/AVIF), lazy-loads, and generates responsive srcsets. The Image component extends HTML img with automatic optimization, requiring width/height (or fill) for layout stability (CLS prevention). Images are optimized on-demand at request time and cached, happening once per image regardless of page count. Remote images need remotePatterns config in next.config.js for security; local images auto-optimize during build.",
        "layman": "Next.js Image Optimization is like having a professional photo editor built in. Every image is auto-resized, converted to the best format, and only loaded when visible.",
        "deepDive": "**The Image Component**: Import Image from next/image. Key props: src, width/height (required for CLS prevention), alt (accessibility), priority (skip lazy loading for above-fold images), placeholder (blur|empty), quality (1-100), sizes (responsive breakpoints). The fill prop makes the image fill its positioned parent.\n\n**Auto-Optimization**: Images are resized to rendered dimensions, converted to WebP/AVIF based on browser support, lazy-loaded by default, and quality-optimized. Optimization happens on first request and is cached.\n\n**Remote Images**: Configure remotePatterns in next.config.js: { images: { remotePatterns: [{ protocol: \"https\", hostname: \"cdn.example.com\" }] } }. Remote images must specify width/height or use fill.\n\n**Responsive Images**: The sizes prop generates appropriate srcset entries. Example: sizes=\"(max-width: 768px) 100vw, 50vw\". Users download only the size their viewport needs.\n\n**Performance Impact**: Improves LCP via priority loading for hero images. Prevents CLS by requiring explicit dimensions. Lazy loading below-fold images saves bandwidth. Automatic format conversion reduces file size.",
        "qa": [
          {
            "q": "What is next/image?",
            "a": "The built-in Image component that auto-optimizes images: resizing, format conversion, lazy loading, srcset generation, and blur placeholders. Imported from next/image."
          },
          {
            "q": "What props are required?",
            "a": "src (path/URL), alt (accessibility), and either width+height or fill (with positioned parent)."
          },
          {
            "q": "How do you configure remote images?",
            "a": "Add remotePatterns in next.config.js: images: { remotePatterns: [{ protocol: \"https\", hostname: \"example.com\" }] }"
          },
          {
            "q": "What formats does next/image convert to?",
            "a": "WebP and AVIF, based on browser Accept headers. Falls back to original format if modern formats are unsupported."
          },
          {
            "q": "What does the priority prop do?",
            "a": "Skips lazy loading for above-fold images critical for LCP. Use sparingly."
          },
          {
            "q": "How does the fill prop work?",
            "a": "Makes image fill its parent container. Parent must have position: relative and defined dimensions."
          },
          {
            "q": "What is blurDataURL?",
            "a": "A tiny base64-encoded preview shown as placeholder while the full image loads. Use placeholder=\"blur\". Auto-generated for local images."
          },
          {
            "q": "What does the sizes prop do?",
            "a": "Defines rendered width at different viewports, generating corresponding srcset entries. Prevents downloading oversized images."
          },
          {
            "q": "How does next/image affect Core Web Vitals?",
            "a": "Improves LCP (priority loading), prevents CLS (required dimensions), saves bandwidth (lazy loading, format conversion)."
          },
          {
            "q": "How do you set image quality?",
            "a": "quality prop, 1-100. Default 75. Lower values (50-60) for thumbnails, higher (80-90) for product photos."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "import Image from \"next/image\";\nimport hero from \"../public/hero.jpg\";\nexport default function Hero() {\n  return <Image src={hero} alt=\"Hero\" priority />\n}",
          "title": "Local Image",
          "description": "Local images auto-detect width/height and blurDataURL."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Image Optimization</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\"><Image></text><text x=\"70\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Component</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auto Resize</text><text x=\"230\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Responsive</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WebP/AVIF</text><text x=\"390\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Convert</text><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"290\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lazy Load</text><text x=\"290\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">On Scroll</text><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cached</text><text x=\"70\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Optimized</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Image: Auto resizing, format conversion, lazy load</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ing, and caching.</text></svg>"
        }
      },
      {
        "id": "nextjs-caching",
        "title": "Caching",
        "tldr": "Next.js has a multi-layered caching system: Full Route Cache (HTML), Data Cache (fetch results), Router Cache (client RSC payloads), and React Cache (request dedup). Full Route Cache stores static HTML at build time, served from CDN instantly. Data Cache persists fetch() results across deployments with time-based or on-demand revalidation. Router Cache caches RSC payloads client-side for instant back/forward navigation. React Cache deduplicates fetch calls within a single render pass. Each layer is independently configurable: use no-store, dynamic, revalidate, or revalidateTag/revalidatePath to control behavior.",
        "layman": "Next.js caching is like a multi-level warehouse: the fastest items are at the front counter (Router Cache), daily stock is in the main hall (Data Cache), and the full inventory is in the basement (Full Route Cache).",
        "deepDive": "**Full Route Cache**: Stores rendered HTML at build time for static routes. Served from CDN with zero server processing. Pages using cookies(), headers(), or searchParams skip this layer. Controlled by export const dynamic.\n\n**Data Cache**: Stores fetch() responses. Persists across deploys. Revalidates via next.revalidate in fetch options (time-based) or revalidateTag/revalidatePath (on-demand). Controlled by cache option in fetch().\n\n**Router Cache (Client Cache)**: In-memory cache of RSC payloads. Prefetches visible links. Enables instant client-side transitions. Duration controlled by Cache-Control header (30s default for static pages). Cleared on full reload.\n\n**React Cache (Request Dedup)**: React.cache() memoizes async functions within one render pass. If two components fetch the same URL, one request is made. Automatic for fetch() in Next.js. Extend to DB queries with React.cache().\n\n**Cache Configuration**: Opt out of Data Cache: fetch(url, { cache: \"no-store\" }). Opt out of Full Route Cache: export const dynamic = \"force-dynamic\" or use dynamic functions. On-Demand ISR: revalidatePath() or revalidateTag().",
        "qa": [
          {
            "q": "What are the four cache layers?",
            "a": "Full Route Cache (HTML at build time), Data Cache (fetch results), Router Cache (client-side RSC), React Cache (render-pass dedup)."
          },
          {
            "q": "What is the Full Route Cache?",
            "a": "Stores static HTML at build time, served from CDN. Skipped for dynamic pages (those using cookies, headers, searchParams, or force-dynamic)."
          },
          {
            "q": "What is the Data Cache?",
            "a": "Persists fetch() responses across requests and deployments. Revalidated via next.revalidate (time-based) or revalidatePath/revalidateTag (on-demand)."
          },
          {
            "q": "What is the Router Cache?",
            "a": "Client-side in-memory cache of RSC payloads. Prefetches links for instant navigation. Duration set by Cache-Control header."
          },
          {
            "q": "How to opt out of Data Cache?",
            "a": "fetch(url, { cache: \"no-store\" }) or fetch(url, { next: { revalidate: 0 } })."
          },
          {
            "q": "How to opt out of Full Route Cache?",
            "a": "Use cookies(), headers(), or searchParams in the page, or export const dynamic = \"force-dynamic\"."
          },
          {
            "q": "What is React.cache() for?",
            "a": "Memoizes function calls within a single render pass. Prevents duplicate DB queries when multiple components fetch the same data."
          },
          {
            "q": "How long does Router Cache last?",
            "a": "Static pages: 30s default. Dynamic pages: 0s (no cache). Cleared on full page reload."
          },
          {
            "q": "How does On-Demand ISR work?",
            "a": "Call revalidatePath(\"/path\") or revalidateTag(\"tag\") from Server Actions or Route Handlers. Instantly invalidates cache for matched routes."
          },
          {
            "q": "How to debug caching issues?",
            "a": "Check build output (static vs dynamic). Use console.log in revalidation. Check DevTools network tab. Review Cache-Control headers in responses."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "export default async function Page() {\n  const data = await fetch(\"https://api.example.com/data\", { cache: \"no-store\" });\n  return <div>{await data.text()}</div>\n}",
          "title": "Opt Out Data Cache",
          "description": "cache: \"no-store\" bypasses Data Cache entirely."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Caching</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Full Route</text><text x=\"75\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTML (CDN)</text><rect x=\"10\" y=\"80\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"75\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Data Cache</text><text x=\"75\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fetch()</text><rect x=\"10\" y=\"125\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"75\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Router Cache</text><text x=\"75\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Client RSC</text><rect x=\"10\" y=\"170\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"186\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">React Cache</text><text x=\"75\" y=\"199\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dedup</text><line x1=\"140\" y1=\"53\" x2=\"170\" y2=\"53\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"98\" x2=\"170\" y2=\"98\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"143\" x2=\"170\" y2=\"143\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"140\" y1=\"188\" x2=\"170\" y2=\"188\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"200\" height=\"170\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Control</text><text x=\"280\" y=\"199\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">revalidate / no-store / dynamic</text><text x=\"250\" y=\"225\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Caching: Four independent cache layers for HTML, d</text><text x=\"250\" y=\"237\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ata, client navigation, and request dedup.</text></svg>"
        }
      },
      {
        "id": "nextjs-streaming",
        "title": "Streaming",
        "tldr": "Streaming allows sending HTML progressively from the server to the client as it is rendered, improving perceived performance and Time to First Byte. In the App Router, streaming is automatic when using Suspense boundaries with async Server Components inside. Streaming eliminates the \"all-or-nothing\" problem of SSR where the page blocks until all data is fetched, sending static shell content immediately. Works with the Edge Runtime for globally distributed streaming with low latency.",
        "layman": "Streaming is like a buffet where food is brought out as it is cooked rather than waiting for every dish to be ready before anyone can eat. You start with soup (the page shell), then get the main course (content) as it finishes.",
        "deepDive": "**How Streaming Works**: The server sends the HTML shell immediately while continuing to render async components. As each Suspense boundary resolves, its HTML is streamed to the client. React progressively hydrates streamed content. The user sees content loading in order, not all at once.\n\n**Streaming with Suspense**: Wrap async Server Components in Suspense boundaries. Each boundary can have its own fallback (loading spinner, skeleton). The boundary content streams in when ready. Multiple boundaries can stream in parallel, independent of each other.\n\n**Streaming Benefits**: Faster Time to First Byte (shell is immediate), progressive content delivery (users see content as it arrives), independent loading per section (one slow query doesnt block the whole page), and better Core Web Vitals (FCP improves significantly).\n\n**Streaming vs SSR**: Traditional SSR sends the complete page after all data is fetched. Streaming sends HTML in chunks as each component resolves. Streaming eliminates the \"request waterfall\" where all data must be fetched before any HTML is sent.\n\n**Streaming and SEO**: Streamed content is fully indexed by search engines. Googlebot processes streamed HTML as it arrives. The initial shell includes metadata and key content for indexing. Streaming does not negatively impact SEO.",
        "qa": [
          {
            "q": "What is Streaming in Next.js?",
            "a": "Streaming sends HTML from server to client progressively as it renders. The page shell is sent immediately, and async content streams in as Suspense boundaries resolve. This improves perceived performance and FCP."
          },
          {
            "q": "How do you implement streaming?",
            "a": "Wrap async Server Components in Suspense boundaries. Each boundary streams independently when its data is ready. Next.js App Router handles streaming automatically when Suspense is used."
          },
          {
            "q": "What are the benefits of streaming?",
            "a": "Instant page shell, progressive content loading, independent section loading (one slow query does not block others), improved FCP and LCP, and better user perceived performance."
          },
          {
            "q": "How is streaming different from SSR?",
            "a": "SSR sends the complete HTML after all data fetches complete. Streaming sends HTML in chunks as components resolve. Streaming eliminates the all-or-nothing blocking of traditional SSR."
          },
          {
            "q": "Does streaming affect SEO?",
            "a": "No, streaming does not negatively impact SEO. Googlebot processes streamed HTML as it arrives. Metadata and key content in the initial shell are indexed normally."
          },
          {
            "q": "Can you use streaming with the Pages Router?",
            "a": "No, streaming is only available in the App Router. The Pages Router uses traditional SSR. Migrate to the App Router to leverage streaming."
          },
          {
            "q": "How does streaming work with loading.js?",
            "a": "loading.js creates an automatic Suspense boundary for a route segment. The loading component is shown immediately, and the page content streams in when ready. It is the simplest way to add streaming."
          },
          {
            "q": "What happens to streamed content hydration?",
            "a": "React progressively hydrates streamed HTML as it arrives. Each chunk is hydrated independently without waiting for the full stream. This means interactive elements become usable as soon as their chunk arrives."
          },
          {
            "q": "What runtime is required for streaming?",
            "a": "Streaming works with both the Node.js Runtime and the Edge Runtime. Edge Runtime provides globally distributed streaming with lower latency for the initial shell."
          },
          {
            "q": "How do you handle errors in streaming?",
            "a": "Use error.js for error boundaries at the route segment level. If a streamed component throws, the error boundary for that segment replaces the streamed content with the error fallback UI."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "import { Suspense } from \"react\";\n\nasync function SlowPosts() {\n  const posts = await fetch(\"https://api.example.com/posts\");\n  return (await posts.json()).map(p => <div key={p.id}>{p.title}</div>);\n}\n\nexport default function Page() {\n  return (\n    <div>\n      <h1>My Blog</h1>\n      <Suspense fallback={<div>Loading posts...</div>}>\n        <SlowPosts />\n      </Suspense>\n    </div>\n  );\n}",
          "title": "Basic Streaming with Suspense",
          "description": "The heading renders immediately; posts stream in when fetched."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Streaming</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server starts</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sends shell</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Suspense A</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Queries data</text><rect x=\"190\" y=\"90\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"260\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Suspense B</text><text x=\"260\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Queries data</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"90\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"330\" y1=\"58\" x2=\"360\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"330\" y1=\"108\" x2=\"360\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"100\" height=\"85\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stream</text><text x=\"420\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Chunks sent</text><line x1=\"370\" y1=\"125\" x2=\"370\" y2=\"145\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"155\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"295\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"295\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Renders progressively</text><text x=\"250\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Streaming: HTML sent progressively as Suspense bou</text><text x=\"250\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ndaries resolve, improving FCP and perceived load.</text></svg>"
        }
      },
      {
        "id": "nextjs-authentication",
        "title": "Authentication in Next.js",
        "tldr": "Authentication in Next.js involves securing pages, API routes, and Server Actions using middleware, session tokens, JWT, or third-party providers (NextAuth.js / Auth.js). Middleware is the primary layer for protecting routes, checking authentication before the page renders and redirecting unauthenticated users. Server Components handle auth by reading session cookies or tokens server-side, conditionally rendering content based on auth state. Client Components handle interactive auth flows (login forms, social login buttons) and display user-specific UI based on session status.",
        "layman": "Authentication is like having a membership card system: middleware is the bouncer at the door checking cards, Server Components are the employees who check your card before serving you, and Client Components are the interactive kiosks where you sign up for a new card.",
        "deepDive": "**Authentication with Middleware**: Middleware checks auth tokens/cookies before the request reaches the page. Use NextResponse.redirect() to send unauthenticated users to login. Use matcher config to protect specific route patterns. Middleware runs at the edge for low-latency auth checks.\n\n**Server-Side Auth in Server Components**: Read session cookies or tokens using cookies() from next/headers. Fetch user data from database or auth provider. Conditionally render content based on auth state. Server Components handle the data side of auth without exposing logic to the client.\n\n**Client-Side Auth**: Use Client Components for login forms, social login buttons, and auth UI. Use React context or state management for client-side auth state. Call Server Actions or Route Handlers for login/logout operations. Display user-specific UI based on session.\n\n**Third-Party Auth Providers (Auth.js)**: Auth.js (formerly NextAuth.js) provides built-in providers (Google, GitHub, email, credentials). Configure in a Route Handler. Use middleware for session checks. Provides useSession hook for client-side auth state and getServerSession for server-side.\n\n**JWT vs Database Sessions**: JWT: stateless, stored in cookies, no DB lookup on each request, good for performance, harder to revoke. Database sessions: stateful, stored in DB, easy to revoke, requires DB lookup on each request, good for apps needing session management.",
        "qa": [
          {
            "q": "How do you protect routes in Next.js?",
            "a": "Use middleware to check authentication before the request reaches the page. Middleware runs at the edge and can redirect unauthenticated users. Use matcher config to specify protected routes."
          },
          {
            "q": "How does middleware handle authentication?",
            "a": "Middleware checks for session cookies or tokens. If missing, redirects to login. If present and valid, allows the request to proceed. Middleware is the most efficient auth layer because it runs before rendering."
          },
          {
            "q": "How do Server Components handle auth?",
            "a": "Read session cookies with cookies() from next/headers. Fetch full user data server-side. Conditionally render content or redirect. Server Components keep auth logic secure and server-side."
          },
          {
            "q": "How do Client Components handle auth?",
            "a": "Display login forms, social login buttons, and user profile UI. Use Auth.js useSession hook for client-side auth state. Call Server Actions for login/logout. Display different UI based on session status."
          },
          {
            "q": "What is Auth.js (NextAuth.js)?",
            "a": "A complete authentication library for Next.js supporting multiple providers (Google, GitHub, email, credentials). Provides middleware helpers, Server Component helpers (getServerSession), and Client Component hooks (useSession)."
          },
          {
            "q": "What is the difference between JWT and database sessions?",
            "a": "JWT: stateless, stored in cookie, no DB required, faster, harder to revoke. Database sessions: stored in DB, easy to revoke, requires DB query on each request, more secure for sensitive apps."
          },
          {
            "q": "How do you handle login form submissions?",
            "a": "Use a Server Action that validates credentials, creates a session, and sets cookies. The form uses progressive enhancement. On success, redirect to the protected page. On failure, return validation errors."
          },
          {
            "q": "How do you implement role-based access control?",
            "a": "In middleware, check user role from session. In Server Components, check role before rendering. In Route Handlers, verify permissions. Use a higher-order component pattern or auth utility functions."
          },
          {
            "q": "How does OAuth work in Next.js?",
            "a": "Configure OAuth provider (Google, GitHub) in Auth.js. The provider redirects to their consent screen. On success, they redirect back to a callback URL. Auth.js handles the OAuth flow and creates a session."
          },
          {
            "q": "How do you handle auth in API routes and Route Handlers?",
            "a": "In Routes Handlers, use getServerSession from Auth.js or read auth tokens from cookies/Authorization header. Validate permissions before processing the request. Return 401 for unauthorized, 403 for forbidden."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// middleware.ts\nimport { NextResponse } from \"next/server\";\n\nexport function middleware(request) {\n  const token = request.cookies.get(\"session\");\n  if (!token) {\n    return NextResponse.redirect(new URL(\"/login\", request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = { matcher: [\"/dashboard/:path*\"] };",
          "title": "Auth Middleware",
          "description": "Redirects unauthenticated users from /dashboard/* to /login."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Authentication in Next.js</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Middleware</text><text x=\"70\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check Token</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server Component</text><text x=\"230\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch User</text><rect x=\"170\" y=\"90\" width=\"120\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"230\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Component</text><text x=\"230\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Login UI</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"290\" y1=\"108\" x2=\"320\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"140\" height=\"85\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"400\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth.js</text><text x=\"400\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">getServerSession / useSes</text><text x=\"400\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sion</text><line x1=\"330\" y1=\"125\" x2=\"330\" y2=\"145\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"155\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"300\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Protected Page</text><text x=\"300\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Content</text><text x=\"250\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Authentication: Middleware for route protection, S</text><text x=\"250\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">erver Components for auth logic, Client Components</text><text x=\"250\" y=\"234\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> for login UI.</text></svg>"
        }
      },
      {
        "id": "nextjs-deployment-vercel",
        "title": "Deployment on Vercel",
        "tldr": "Vercel is the official deployment platform for Next.js, providing automatic builds, serverless functions, edge functions, ISR, and global CDN distribution. Deploy by connecting a Git repository (GitHub, GitLab, Bitbucket) to Vercel, with automatic deployments on every push to the default branch. Preview Deployments are created for every pull request, allowing testing before merging to production. Environment variables, custom domains, analytics, and logs are managed through the Vercel Dashboard or vercel.json configuration.",
        "layman": "Vercel is like a self-publishing platform for websites. You connect your code repository, and Vercel automatically builds, optimizes, and hosts your site worldwide, creating preview versions for every change before it goes live.",
        "deepDive": "**Deployment Process**: Connect your Git repository to Vercel. Vercel automatically detects Next.js, sets up the build command (next build), and configures the output directory. Every push to the production branch triggers a deployment. Preview deployments are created for non-production branches.\n\n**Serverless Functions**: API routes and Route Handlers are automatically deployed as serverless functions. Each endpoint scales independently based on demand. Serverless functions have cold starts (mitigated by the Edge Runtime for low-latency use cases). Node.js and Edge runtimes are supported.\n\n**ISR and Cache Management**: ISR pages are revalidated by Vercel\\'s edge network. On-demand ISR (revalidatePath) triggers instant regeneration. The Vercel Data Cache stores fetch() results. Cache headers can be customized for CDN behavior.\n\n**Environment Variables**: Configure environment variables in the Vercel Dashboard or .env files. Production, Preview, and Development environments can have different values. NEXT_PUBLIC_ variables are inlined into client bundles. Sensitive variables are encrypted at rest.\n\n**Monitoring and Analytics**: Vercel provides built-in analytics (page views, web vitals), function logs, and error tracking. Speed Insights measures real-user performance. Analytics are privacy-friendly and cookie-free. Logs can be viewed per deployment or streamed to external services.",
        "qa": [
          {
            "q": "How do you deploy a Next.js app to Vercel?",
            "a": "Push your code to a Git repository (GitHub, GitLab, Bitbucket), import the repository in Vercel, and Vercel automatically detects Next.js and configures the build. Deployments are automatic on every push to the production branch."
          },
          {
            "q": "What are Preview Deployments?",
            "a": "Preview Deployments are created for every pull request and non-production branch. They provide a unique URL for testing changes before merging to production. Preview Deployments include serverless functions and environment variables."
          },
          {
            "q": "How does Vercel handle API routes?",
            "a": "API routes and Route Handlers are automatically deployed as serverless functions. Each endpoint scales independently. Functions have configurable memory, timeout, and region settings. Edge functions provide globally distributed execution."
          },
          {
            "q": "How does ISR work on Vercel?",
            "a": "ISR pages are cached on Vercel\\'s edge network. Revalidation is triggered by time-based or on-demand methods. The Vercel Data Cache stores fetch() responses. ISR works seamlessly without additional Vercel-specific configuration."
          },
          {
            "q": "How do you configure environment variables on Vercel?",
            "a": "Set environment variables in the Vercel Dashboard under Project Settings > Environment Variables. Separate values for Production, Preview, and Development. Variables prefixed with NEXT_PUBLIC_ are available client-side."
          },
          {
            "q": "What is vercel.json?",
            "a": "A configuration file at the project root for customizing Vercel behavior: build commands, headers, redirects, rewrites, function regions, and cron jobs. Overrides automatic detection and framework defaults."
          },
          {
            "q": "How does Vercel handle custom domains?",
            "a": "Add custom domains in the Vercel Dashboard under Domains. Vercel automatically provisions SSL certificates via Let\\'s Encrypt. Supports apex domains (example.com), subdomains (app.example.com), and wildcard domains (*.example.com)."
          },
          {
            "q": "What analytics does Vercel provide?",
            "a": "Web Analytics: page views, unique visitors, top pages. Speed Insights: real-user Core Web Vitals (LCP, CLS, INP). Both are privacy-friendly, cookie-free, and GDPR-compliant. Enable in the Vercel Dashboard."
          },
          {
            "q": "How do you debug production issues on Vercel?",
            "a": "Use Vercel Logs (Runtime Logs and Build Logs). Check function execution logs for errors. Use Speed Insights for performance issues. Set up error monitoring with third-party services (Sentry, Datadog). Enable Vercel Integrations for external monitoring."
          },
          {
            "q": "How does Vercel handle serverless function cold starts?",
            "a": "Cold starts occur when a function has not been invoked recently. Mitigations: use Edge Runtime (near-zero cold starts), increase function memory allocation, use cron jobs to keep functions warm, or implement function concurrency settings."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "{\n  \"buildCommand\": \"next build\",\n  \"outputDirectory\": \".next\",\n  \"installCommand\": \"npm install\",\n  \"regions\": [\"iad1\", \"sfo1\"],\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        { \"key\": \"X-Frame-Options\", \"value\": \"DENY\" }\n      ]\n    }\n  ]\n}",
          "title": "vercel.json Configuration",
          "description": "Configures build settings, serverless function regions, and custom response headers."
        },
        "diagram": {
          "svg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Deployment on Vercel</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Git Push</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Code trigger</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Vercel Build</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">next build</text><line x1=\"330\" y1=\"58\" x2=\"360\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Deploy</text><text x=\"420\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Serverless</text><line x1=\"370\" y1=\"75\" x2=\"370\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"300\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Global</text><rect x=\"10\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"80\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Preview</text><text x=\"80\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">PR URL</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Vercel: Automatic Git-integrated deployment with s</text><text x=\"250\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">erverless functions, ISR, and global CDN.</text></svg>"
        }
      }
    ]
  },
  {
    "id": "js",
    "name": "JavaScript Core",
    "tag": "JS",
    "topics": [
      {
        "id": "js-closures",
        "title": "Closures",
        "tldr": "A closure is a function bundled with references to the variables from the scope it was created in — even after that outer scope has finished running.",
        "layman": "Think of it like a backpack: when a function is created, it packs up the variables sitting around it and carries that backpack wherever it goes — even after the room it was made in is long gone.",
        "diagram": {
          "steps": [
            "Outer function runs",
            "Inner function is defined inside it",
            "Outer function returns",
            "Inner function still holds the outer variables"
          ]
        },
        "deepDive": "When a function is defined inside another function, it keeps a live link to its parent's variable bindings rather than a snapshot of their values. This is what lets a counter factory hand back an `increment` function that still remembers and can mutate its own private `count`, without that count leaking into global scope. Closures are the mechanism behind module patterns, memoization caches, and event handlers that need to remember context — but they're also a common source of accidental memory retention if a closure outlives its usefulness while still holding a reference to a large object.",
        "qa": [
          {
            "q": "Why does a closure keep working after the outer function returns?",
            "a": "Because JS keeps the outer function's variable environment alive in memory as long as any inner function still references it — the garbage collector can't reclaim it early."
          },
          {
            "q": "What's the classic closure-in-a-loop bug?",
            "a": "Using `var` in a loop that creates callbacks — all callbacks share the same single binding, so they all see the final loop value. Switching to `let` creates a fresh binding per iteration."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "function makeCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    value: () => count,\n  };\n}\n\nconst counter = makeCounter();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.value()); // 2 — private state, no globals"
        }
      },
      {
        "id": "js-event-loop",
        "title": "The Event Loop",
        "tldr": "JavaScript runs on a single thread, but the event loop lets it stay non-blocking by handing off async work and running callbacks once the call stack is clear.",
        "layman": "JS is a single chef who can't cook two dishes at once, but keeps an order queue — finishing what's on the counter before grabbing the next ticket.",
        "diagram": {
          "steps": [
            "Call stack runs sync code",
            "Async work handed off",
            "Microtask queue drains completely",
            "One macrotask runs, then repeat"
          ]
        },
        "deepDive": "The call stack executes synchronous code first. Async operations (timers, network calls, promises) are delegated to the browser or Node APIs, and when they finish, their callbacks are queued rather than run immediately. The event loop's job is simple: once the call stack is empty, drain the microtask queue (promises, queueMicrotask) completely before pulling a single task from the macrotask queue (setTimeout, I/O, UI events). This ordering is why a `Promise.resolve().then()` always fires before a `setTimeout(fn, 0)`, even though both are scheduled for 'as soon as possible.'",
        "qa": [
          {
            "q": "Why does a resolved promise callback run before a setTimeout(0) callback?",
            "a": "Microtasks (promises) are fully drained before the event loop pulls the next macrotask (timers), regardless of which was scheduled first."
          },
          {
            "q": "What happens if a synchronous function takes 5 seconds to run?",
            "a": "Everything blocks — no renders, no timers, no I/O callbacks — because there's only one call stack and it's occupied the whole time."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "console.log(\"1: sync\");\n\nsetTimeout(() => console.log(\"2: macrotask\"), 0);\n\nPromise.resolve().then(() => console.log(\"3: microtask\"));\n\nconsole.log(\"4: sync\");\n\n// Output order: 1, 4, 3, 2"
        }
      },
      {
        "id": "js-prototypes",
        "title": "Prototypal Inheritance",
        "tldr": "Every JS object has an internal link to another object — its prototype — and property lookups walk up this chain until they find a match or hit `null`.",
        "layman": "It's like asking a relative for something you don't own — if you don't have it yourself, you check one level up the family tree, and keep going until someone has it.",
        "diagram": {
          "steps": [
            "Look on the object itself",
            "Not found — check its prototype",
            "Still not found — check further up",
            "Found, or the chain ends at null"
          ]
        },
        "deepDive": "Unlike classical inheritance, where a class is a blueprint, JS objects inherit directly from other live objects. `class` syntax is sugar over this same prototype chain — under the hood, methods you define on a class body are attached to `ClassName.prototype`, and every instance's internal `[[Prototype]]` points there. This is why adding a method to a prototype after instances already exist still makes it available on those instances — they don't own a copy, they look it up dynamically at call time.",
        "qa": [
          {
            "q": "What's the practical difference between an own property and an inherited one?",
            "a": "`Object.hasOwnProperty()` only returns true for properties set directly on the object itself, not ones found further up the prototype chain."
          },
          {
            "q": "Does `class` in JS create a fundamentally different inheritance model?",
            "a": "No — it's syntactic sugar over the same prototype chain; `instanceof` and method lookup still walk `[[Prototype]]` links underneath."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "function Animal(name) { this.name = name; }\nAnimal.prototype.speak = function () {\n  return `${this.name} makes a sound.`;\n};\n\nconst dog = new Animal(\"Rex\");\nconsole.log(dog.speak()); // \"Rex makes a sound.\"\nconsole.log(dog.hasOwnProperty(\"speak\")); // false — it's inherited"
        }
      }
    ]
  },
  {
    "id": "react",
    "name": "React",
    "tag": "React",
    "topics": [
      {
        "id": "react-hooks",
        "title": "Hooks & Render Lifecycle",
        "tldr": "Hooks let function components hold state and side effects across renders, relying on stable call order rather than a class instance to track identity.",
        "layman": "Hooks are sticky notes stuck to a component in a fixed order — React reads them off in exactly that order every render, so shuffling the notes mixes up which one holds what.",
        "diagram": {
          "steps": [
            "Render #1: hooks registered in order",
            "State/effects tied to that slot index",
            "Render #2: same call order expected",
            "React matches each hook to the right slot"
          ]
        },
        "deepDive": "React associates each `useState` or `useEffect` call with a slot in an internal list, matched purely by the order hooks are called in — not by name. That's why hooks can't live inside conditionals or loops: change the call order between renders and React attaches the wrong stored state to the wrong hook. `useEffect` callbacks run after the DOM has been painted, and React compares the dependency array by reference between renders to decide whether to re-run the effect or skip it.",
        "qa": [
          {
            "q": "Why can't hooks be called conditionally?",
            "a": "React matches hook state to hooks by call order, not by name — a conditional hook call shifts every subsequent hook's slot and corrupts state on that render."
          },
          {
            "q": "What causes a useEffect to re-run when you didn't expect it to?",
            "a": "A new object, array, or function literal in the dependency array — these are recreated every render and fail reference equality even if their contents look the same."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "function SearchBox({ query }) {\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    let cancelled = false;\n    fetchResults(query).then((data) => {\n      if (!cancelled) setResults(data);\n    });\n    return () => { cancelled = true; }; // avoid stale-response race\n  }, [query]);\n\n  return <ResultsList items={results} />;\n}"
        }
      },
      {
        "id": "react-reconciliation",
        "title": "Reconciliation & Keys",
        "tldr": "React compares the new element tree to the previous one and patches only what changed — `key` is how it tracks which list item is which across renders.",
        "layman": "Keys are name tags at a reunion — without them, React can only guess who moved by seat position, and might mix up two people who just swapped chairs.",
        "diagram": {
          "steps": [
            "New element tree is built",
            "Compared against the previous tree",
            "Keys match old items to new ones",
            "Only the changed nodes get patched"
          ]
        },
        "deepDive": "Rather than diffing at the level of arbitrary tree edits, React uses a heuristic diffing algorithm: elements of different types are treated as entirely new subtrees, and same-type elements are compared prop-by-prop and updated in place. For lists, React needs a stable identity per item to know whether an element moved, was added, or was removed — that's the entire purpose of `key`. Using array index as a key works only if the list never reorders or has items inserted/removed from the middle; otherwise state gets attached to the wrong row after a reorder.",
        "qa": [
          {
            "q": "Why is using array index as a key risky?",
            "a": "If items are reordered or removed, the index-to-item mapping shifts, so React may reuse a DOM node (and any local state on it) for the wrong logical item."
          },
          {
            "q": "What's the fix for stale state after reordering a keyed list?",
            "a": "Use a stable, unique identifier from the data itself (like a database id) instead of the array index."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// Fragile — breaks on reorder/insert\ntodos.map((todo, i) => <TodoRow key={i} todo={todo} />);\n\n// Stable — survives reorder/insert\ntodos.map((todo) => <TodoRow key={todo.id} todo={todo} />);"
        }
      },
      {
        "id": "react-state-patterns",
        "title": "State Management Patterns",
        "tldr": "Not all state belongs in the same place — the right pattern depends on whether state is local, shared across siblings, or genuinely global to the app.",
        "layman": "It's about picking the right-sized box for your stuff — don't rent a warehouse (a global store) just to hold one sock (a single component's toggle).",
        "diagram": {
          "steps": [
            "Is state needed by one component?",
            "Yes — keep it local with useState",
            "No, siblings need it too?",
            "Lift to shared parent, or use Context"
          ]
        },
        "deepDive": "The most common mistake is reaching for a global store before it's needed. Local `useState` covers most component-owned state. When two sibling components need the same value, lifting it to their nearest common parent is usually enough — no library required. Context is well-suited to low-frequency, broadly-read values like theme or auth, but re-renders every consumer on change, so it's a poor fit for fast-changing state like form input on every keystroke. Dedicated state libraries earn their keep when state is genuinely global, updated from many places, and needs to avoid the re-render cost of Context.",
        "qa": [
          {
            "q": "When does Context become a performance problem?",
            "a": "When it wraps state that changes frequently — every component consuming that context re-renders on each change, regardless of whether it uses the specific value that changed."
          },
          {
            "q": "What's a sign that state should be lifted rather than left local?",
            "a": "Two sibling components need to stay in sync — if one can't know about a change the other made, the state belongs in their common parent instead."
          }
        ],
        "code": {
          "lang": "javascript",
          "snippet": "// Lifted state — no library needed for two siblings\nfunction Parent() {\n  const [filter, setFilter] = useState(\"all\");\n  return (\n    <>\n      <FilterBar value={filter} onChange={setFilter} />\n      <TaskList filter={filter} />\n    </>\n  );\n}"
        }
      }
    ]
  },
  {
    "id": "sysdesign",
    "name": "System Design",
    "tag": "Sys",
    "topics": [
      {
        "id": "sd-load-balancing",
        "title": "Load Balancing",
        "tldr": "A load balancer spreads incoming requests across multiple servers so no single instance becomes a bottleneck or a single point of failure.",
        "layman": "It's a host directing guests to whichever checkout line is shortest, instead of making everyone pile up at register one.",
        "diagram": {
          "steps": [
            "Request arrives",
            "Balancer checks instance health",
            "Routes to the least-loaded healthy node",
            "Response returned to the client"
          ]
        },
        "deepDive": "Beyond simple round-robin, most production balancers route by least-connections (send traffic to whichever backend has the fewest active requests) or by weighted capacity when servers aren't identical. Health checks are what make a load balancer resilient rather than just distributive — it needs to detect a failing instance and stop routing to it before users see errors. At the architecture level, load balancers also enable rolling deploys: new instances join the pool, old ones drain their in-flight connections and leave, with zero downtime from the user's perspective.",
        "qa": [
          {
            "q": "Round-robin vs least-connections — when does the difference matter?",
            "a": "When request durations vary a lot. Round-robin can pile slow requests onto one server; least-connections adapts to real-time load instead of just taking turns."
          },
          {
            "q": "How does a load balancer support zero-downtime deploys?",
            "a": "New instances register once healthy, traffic gradually shifts to them, and old instances are drained of in-flight requests before being removed from the pool."
          }
        ],
        "code": {
          "lang": "text",
          "snippet": "Client\n  |\n  v\n[Load Balancer] --health checks--> instance A (healthy)\n  |--- 40% ------------------------> instance B (healthy)\n  |--- 40% ------------------------> instance C (unhealthy, skipped)\n  '--- 20% ------------------------> instance D (healthy)"
        }
      },
      {
        "id": "sd-caching",
        "title": "Caching Strategies",
        "tldr": "Caching trades a bit of staleness for a lot of speed — the right strategy depends on how fresh the data needs to be and who's responsible for updating it.",
        "layman": "It's keeping frequently-used spices on the counter instead of walking to the pantry every time — faster, but you have to remember to restock when they run low.",
        "diagram": {
          "steps": [
            "Read request comes in",
            "Check the cache first",
            "Hit — return the cached value",
            "Miss — read the database, then populate the cache"
          ]
        },
        "deepDive": "Cache-aside is the most common pattern: the app checks the cache first, and on a miss, reads from the database and writes the result back to the cache. Write-through keeps the cache always consistent by writing to cache and database together, at the cost of slightly slower writes. The hardest part of caching isn't storing data, it's invalidation — deciding when cached data has gone stale and needs to be evicted or refreshed, especially when multiple services can write to the same underlying data.",
        "qa": [
          {
            "q": "What's the main risk of cache-aside?",
            "a": "A window where the database has changed but the cache hasn't been invalidated yet, so reads can return stale data until the next miss or explicit invalidation."
          },
          {
            "q": "Why is cache invalidation considered hard?",
            "a": "Because it requires knowing exactly which cached entries are affected by a given write, especially across services — over-invalidate and you lose the benefit, under-invalidate and you serve stale data."
          }
        ],
        "code": {
          "lang": "text",
          "snippet": "read(key):\n  if cache.has(key): return cache.get(key)      # hit\n  value = db.query(key)                         # miss\n  cache.set(key, value, ttl=300)\n  return value"
        }
      },
      {
        "id": "sd-sharding",
        "title": "Database Sharding",
        "tldr": "Sharding splits one large dataset across multiple databases so no single machine has to hold or serve all of it.",
        "layman": "Instead of one giant filing cabinet, you split files across several smaller cabinets by last name — fast to search one, slower if you ever need to search all of them at once.",
        "diagram": {
          "steps": [
            "Compute shard key from the request",
            "Route to the owning shard",
            "That shard processes the query locally",
            "Result is returned to the caller"
          ]
        },
        "deepDive": "A shard key determines which physical database a given row lives on — for example, splitting users by `user_id % N` across N databases. The upside is horizontal scalability: each shard handles a fraction of total load. The downside is that queries spanning multiple shards (like a global search across all users) become expensive, since they must fan out to every shard and merge results. Choosing a shard key is mostly about picking an access pattern to optimize for, since it's very costly to change later — a poor choice creates 'hot shards' that get disproportionate traffic.",
        "qa": [
          {
            "q": "What makes a shard key choice hard to change later?",
            "a": "Resharding means physically moving data between databases while the system stays live, which is a large, risky migration — not a config change."
          },
          {
            "q": "Why do cross-shard queries hurt performance?",
            "a": "The query has to be sent to every shard, and results merged and often re-sorted afterward, instead of a single database doing the work locally."
          }
        ],
        "code": {
          "lang": "text",
          "snippet": "shard_id = hash(user_id) % NUM_SHARDS\n\nuser_id=4821 -> hash -> % 4 -> shard 1\nuser_id=9310 -> hash -> % 4 -> shard 2\n# Query for one user: hits exactly one shard\n# Query across all users: must fan out to all 4"
        }
      }
    ]
  },
  {
    "id": "db",
    "name": "Databases",
    "tag": "DB",
    "topics": [
      {
        "id": "db-indexing",
        "title": "SQL Indexing",
        "tldr": "An index is a separate sorted structure that lets the database find rows without scanning the whole table — at the cost of extra storage and slower writes.",
        "layman": "It's the index at the back of a textbook — instead of reading every page to find a term, you jump straight to the page listed.",
        "diagram": {
          "steps": [
            "Query filters on a column",
            "Index is checked (B-tree)",
            "Jump straight to matching rows",
            "Rows returned — full scan avoided"
          ]
        },
        "deepDive": "Without an index, a `WHERE` clause forces a full table scan — checking every row. A B-tree index on that column lets the database jump almost directly to matching rows in logarithmic time. The trade-off is real: every insert or update also has to update every index on that table, and indexes take disk space. This is why indexing every column isn't free — it's a deliberate choice based on which columns are actually filtered or joined on frequently, weighed against write-heavy workload cost.",
        "qa": [
          {
            "q": "Why not just index every column?",
            "a": "Each index adds overhead to every write (insert/update/delete) and consumes storage, so indexes should be chosen based on actual query patterns, not applied blindly."
          },
          {
            "q": "What's a composite index and when does column order matter?",
            "a": "An index across multiple columns, useful when queries filter on that exact combination. Column order matters because the index can only be used efficiently as a left-to-right prefix match."
          }
        ],
        "code": {
          "lang": "sql",
          "snippet": "-- Full table scan without an index on email\nSELECT * FROM users WHERE email = 'a@example.com';\n\nCREATE INDEX idx_users_email ON users(email);\n-- Now the same query does an index lookup instead"
        }
      },
      {
        "id": "db-acid",
        "title": "ACID Transactions",
        "tldr": "ACID describes the guarantees a database transaction makes: Atomicity, Consistency, Isolation, and Durability — the contract that keeps concurrent writes safe.",
        "layman": "It's the rulebook that keeps a bank transfer honest — money never vanishes mid-transfer, and two people can't spend the same dollar at the same instant.",
        "diagram": {
          "steps": [
            "Transaction begins",
            "Multiple writes staged",
            "All succeed — commit",
            "Any fail — rollback entirely"
          ]
        },
        "deepDive": "Atomicity means a transaction's operations happen entirely or not at all — a bank transfer never leaves money deducted from one account without arriving in the other. Consistency ensures a transaction moves the database from one valid state to another, respecting constraints. Isolation controls how concurrent transactions see each other's uncommitted changes — different isolation levels (read committed, repeatable read, serializable) trade correctness guarantees for throughput. Durability means once a transaction commits, it survives a crash — typically guaranteed by writing to a durable log before acknowledging the commit.",
        "qa": [
          {
            "q": "What real-world problem does Atomicity solve?",
            "a": "It prevents a multi-step operation (like a funds transfer) from being left half-done if a crash or error happens partway through."
          },
          {
            "q": "Why would an app choose a weaker isolation level than serializable?",
            "a": "Stricter isolation reduces concurrency by locking more aggressively; weaker levels allow more parallel throughput at the cost of certain anomalies like non-repeatable reads."
          }
        ],
        "code": {
          "lang": "sql",
          "snippet": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- both updates succeed together, or neither does"
        }
      },
      {
        "id": "db-normalization",
        "title": "Normalization",
        "tldr": "Normalization organizes tables to eliminate redundant data, so a fact is stored in exactly one place and updates can't drift out of sync.",
        "layman": "Instead of writing a friend's phone number on every party invite, you keep one contact card and reference it — update it once, and it's right everywhere.",
        "diagram": {
          "steps": [
            "Identify repeated data",
            "Split it into its own table",
            "Reference it by a key/id",
            "Update happens in exactly one place"
          ]
        },
        "deepDive": "Each normal form fixes a specific kind of redundancy. First normal form requires atomic columns — no comma-separated lists stuffed into one field. Second and third normal form remove columns that depend on only part of a key, or on another non-key column, pushing them into their own table instead. The trade-off is query complexity: a fully normalized schema needs more joins to reassemble a full picture, which is why read-heavy systems sometimes deliberately denormalize specific tables for speed, accepting the redundancy in exchange for fewer joins.",
        "qa": [
          {
            "q": "What problem does normalization directly prevent?",
            "a": "Update anomalies — where the same fact is duplicated in multiple rows and an update only changes some of them, leaving the data inconsistent."
          },
          {
            "q": "Why would a team deliberately denormalize part of a schema?",
            "a": "To avoid expensive joins on hot read paths, trading some redundancy and update complexity for significantly faster reads."
          }
        ],
        "code": {
          "lang": "sql",
          "snippet": "-- Denormalized: customer_name repeated on every order row\norders(order_id, customer_name, customer_email, total)\n\n-- Normalized: customer data lives in one place\ncustomers(customer_id, name, email)\norders(order_id, customer_id, total)"
        }
      }
    ]
  },
  {
    "id": "devops",
    "name": "DevOps",
    "tag": "Ops",
    "topics": [
      {
        "id": "devops-docker",
        "title": "Docker Fundamentals",
        "tldr": "A Docker container packages an app with everything it needs to run, isolated from the host — so 'it works on my machine' becomes 'it works in the container, everywhere.'",
        "layman": "It's a lunchbox that packs the food and the container together, so it tastes the same wherever you open it — not just the recipe, but the exact ingredients too.",
        "diagram": {
          "steps": [
            "Dockerfile defines the steps",
            "Image is built in layers",
            "Container is started from the image",
            "Runs isolated — same behavior everywhere"
          ]
        },
        "deepDive": "An image is a read-only, layered snapshot built from a Dockerfile — each instruction (install a package, copy files) adds a cached layer, which is why reordering a Dockerfile to put rarely-changing steps first speeds up rebuilds. A container is a running instance of that image with its own isolated filesystem view and process namespace, but it shares the host's kernel — unlike a full virtual machine, which virtualizes hardware and runs its own kernel. That shared-kernel model is what makes containers dramatically lighter and faster to start than VMs.",
        "qa": [
          {
            "q": "What's the core difference between a container and a VM?",
            "a": "A container shares the host OS kernel and isolates only the process/filesystem view, while a VM virtualizes hardware and runs a full separate OS — making VMs heavier but more isolated."
          },
          {
            "q": "Why does Dockerfile instruction order affect build speed?",
            "a": "Docker caches each layer; if an early layer changes, every layer after it must rebuild — so stable steps (like installing dependencies) should come before frequently-changing ones (like copying app code)."
          }
        ],
        "code": {
          "lang": "dockerfile",
          "snippet": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci                 # cached unless package.json changes\nCOPY . .                   # changes often — kept last\nCMD [\"node\", \"server.js\"]"
        }
      },
      {
        "id": "devops-cicd",
        "title": "CI/CD Pipelines",
        "tldr": "Continuous Integration catches problems by testing every change automatically; Continuous Delivery/Deployment automates getting a passing change safely into production.",
        "layman": "It's an assembly line with a quality inspector at every station, instead of only checking the finished product at the very end.",
        "diagram": {
          "steps": [
            "Code is pushed",
            "Automated build & tests run",
            "Pass — deployable artifact produced",
            "Deploy step ships it to production"
          ]
        },
        "deepDive": "CI means every push triggers an automated build and test run, so integration problems surface within minutes instead of being discovered weeks later when branches finally merge. CD extends that automation further: Continuous Delivery means every passing build is deployable at the push of a button, while Continuous Deployment goes one step further and ships automatically with no human approval gate. The real value of a mature pipeline isn't just running tests — it's making the feedback loop fast enough that developers trust and actually wait for it, rather than working around it.",
        "qa": [
          {
            "q": "What's the practical difference between Continuous Delivery and Continuous Deployment?",
            "a": "Delivery stops at 'ready to deploy, needs a human to press the button'; Deployment removes that manual gate and ships automatically once checks pass."
          },
          {
            "q": "Why is pipeline speed itself considered a design goal?",
            "a": "If a pipeline is too slow, developers start batching changes or skipping it locally, which defeats the fast-feedback purpose CI is meant to provide."
          }
        ],
        "code": {
          "lang": "yaml",
          "snippet": "on: [push]\njobs:\n  test:\n    steps:\n      - run: npm ci\n      - run: npm test\n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - run: ./deploy.sh"
        }
      },
      {
        "id": "devops-orchestration",
        "title": "Container Orchestration",
        "tldr": "An orchestrator like Kubernetes keeps a fleet of containers running as declared — restarting failures, scaling replicas, and routing traffic to healthy instances.",
        "layman": "It's a manager who notices an empty seat on the floor and immediately assigns someone else to cover it — without waiting for a human to notice.",
        "diagram": {
          "steps": [
            "Desired state declared",
            "Orchestrator watches the cluster",
            "Detects drift — a crash or lost node",
            "Reschedules to match the desired state"
          ]
        },
        "deepDive": "Instead of manually deciding which server runs which container, you declare a desired state ('run 3 replicas of this image, exposed on port 80') and the orchestrator continuously reconciles the live cluster toward that state. If a container crashes, it's restarted automatically; if a node dies, its workloads are rescheduled elsewhere. This declarative, self-healing model is the core value proposition over manually running `docker run` on individual machines — the system actively works to correct drift from the desired state rather than requiring a human to notice and fix it.",
        "qa": [
          {
            "q": "What does 'declarative' mean in this context?",
            "a": "You describe the desired end state (replica count, image version) rather than the exact steps to get there — the orchestrator figures out and continuously enforces how."
          },
          {
            "q": "How does orchestration handle a crashed container differently than plain Docker?",
            "a": "Plain Docker does nothing on its own; an orchestrator detects the container no longer matches the desired replica count and starts a replacement automatically."
          }
        ],
        "code": {
          "lang": "yaml",
          "snippet": "apiVersion: apps/v1\nkind: Deployment\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n        - name: web\n          image: myapp:1.4.0\n# Kubernetes keeps exactly 3 healthy pods running, always"
        }
      }
    ]
  },
  {
    "id": "git",
    "name": "Git & Version Control",
    "tag": "Git",
    "topics": [
      {
        "id": "git-branching",
        "title": "Branching Strategies",
        "tldr": "A branching strategy is a team's agreed convention for how features, fixes, and releases move through the repository — trunk-based and Git-flow are the two common poles.",
        "layman": "It's the difference between everyone editing one shared document constantly (trunk-based) versus each person drafting separately and merging on a schedule (Git-flow).",
        "diagram": {
          "steps": [
            "Work starts on a branch",
            "Changes are committed over time",
            "Branch is merged or rebased into main",
            "History reflects the team's chosen strategy"
          ]
        },
        "deepDive": "Trunk-based development keeps everyone merging small, frequent changes into a single main branch, often behind feature flags, favoring speed and minimizing long-lived divergence. Git-flow uses longer-lived branches (develop, release, feature, hotfix) with more structure, which suits teams shipping on a slower, more formal release cadence. The right choice depends less on which is 'better' and more on deployment frequency and team size — trunk-based struggles without strong test automation, while Git-flow's extra ceremony can slow down teams that deploy many times a day.",
        "qa": [
          {
            "q": "Why does trunk-based development depend heavily on test automation?",
            "a": "Changes merge to main frequently and often deploy quickly, so there's no long-lived branch acting as a safety buffer — broken code reaches everyone almost immediately without solid automated checks."
          },
          {
            "q": "When does Git-flow's extra structure make sense?",
            "a": "For teams with scheduled, less frequent releases who benefit from an explicit staging/release branch to stabilize before shipping."
          }
        ],
        "code": {
          "lang": "text",
          "snippet": "Trunk-based:\nmain ---o---o---o---o---o---o---> (small, frequent merges)\n\nGit-flow:\nmain    ---------o-----------o--->\ndevelop -o--o--o--o--o--o--o--o-->\nfeature      \\--o--o--/"
        }
      },
      {
        "id": "git-merge-rebase",
        "title": "Merge vs Rebase",
        "tldr": "Merge preserves exact history by adding a new commit that ties two branches together; rebase rewrites history by replaying your commits on top of another branch.",
        "layman": "Merge keeps a note saying 'today two paths crossed'; rebase quietly rewrites the story as if your part happened right after, in one clean line.",
        "diagram": {
          "steps": [
            "Two branches diverge",
            "Merge: combine with a merge commit",
            "Rebase: replay commits on top instead",
            "Choice depends on whether the branch is shared"
          ]
        },
        "deepDive": "A merge commit has two parents and keeps the branch's original commits untouched — the history shows exactly what happened, including the fact that two lines of work diverged and came back together. Rebase instead takes your commits and reapplies them one by one on top of the target branch, producing a linear history with no merge commit, but at the cost of rewriting commit hashes. That rewriting is exactly why rebasing a branch that others have already pulled from is risky — their local history no longer matches, causing painful divergence.",
        "qa": [
          {
            "q": "Why is rebasing a shared/public branch considered dangerous?",
            "a": "Rebase rewrites commit hashes; anyone who already has the old commits will have a history that conflicts with the rewritten one, causing confusing duplicate commits or forced pushes."
          },
          {
            "q": "What's the main visual/practical benefit of rebase over merge?",
            "a": "A clean, linear history with no merge commits, which makes `git log` and `git bisect` easier to follow — at the cost of losing the literal record of when branches diverged."
          }
        ],
        "code": {
          "lang": "bash",
          "snippet": "# Merge — keeps both histories, adds a merge commit\ngit checkout main\ngit merge feature-branch\n\n# Rebase — replays your commits on top of main, linear history\ngit checkout feature-branch\ngit rebase main"
        }
      },
      {
        "id": "git-conflicts",
        "title": "Resolving Merge Conflicts",
        "tldr": "A conflict happens when Git can't automatically reconcile two changes to the same lines — resolving it means manually deciding what the final code should be.",
        "layman": "It's two people editing the same paragraph of a shared doc at the same time — someone has to sit down and decide which sentence wins.",
        "diagram": {
          "steps": [
            "Two branches edit the same lines",
            "Merge or rebase is attempted",
            "Git can't auto-resolve — conflict marked",
            "Human edits, stages, and commits"
          ]
        },
        "deepDive": "Git tracks changes line by line; when two branches touch the same lines differently, it can't guess which version is correct, so it pauses and marks the file with conflict markers showing both versions side by side. Resolving means editing the file to the intended final state, removing the markers, and staging the file to tell Git the conflict is resolved. Conflicts are far more manageable when commits are small and frequent — large, long-lived branches that drift far from main accumulate conflict surface area exponentially, not linearly.",
        "qa": [
          {
            "q": "Why do conflict markers appear at all instead of Git picking a version?",
            "a": "Git can only auto-merge when changes don't overlap on the same lines; overlapping edits require human judgment about intent, which Git can't infer."
          },
          {
            "q": "Why do small, frequent commits reduce conflict pain?",
            "a": "Less code diverges between merges, so there's a smaller surface area where two branches could have touched the same lines differently."
          }
        ],
        "code": {
          "lang": "text",
          "snippet": "<<<<<<< HEAD\nconst timeout = 3000;\n=======\nconst timeout = 5000;\n>>>>>>> feature-branch\n\n# Resolve by choosing/combining, then:\ngit add config.js\ngit commit"
        }
      }
    ]
  }
];
