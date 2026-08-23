export const nextjs_csr = {
  "id": "nextjs-csr",
  "title": "Client-Side Rendering",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "Client-Side Rendering (CSR) renders the page entirely in the browser using JavaScript, with Next.js serving a minimal HTML shell and React handling all rendering.",
    "In Next.js, CSR is achieved using \"use client\" components, useEffect for data fetching, or data fetching libraries like SWR and TanStack Query.",
    "CSR provides a rich, app-like experience after the initial load, with instant navigations and full interactivity.",
    "Downsides include slower initial load times, poorer SEO (empty HTML shell), and reliance on client JavaScript execution."
  ],
  "laymanDefinition": "CSR is like ordering a flat-pack furniture kit: you get a minimal box (HTML shell) and assembly instructions (JavaScript), and you build everything on-site (in the browser) using your own tools.",
  "deepDive": [
    {
      "heading": "How CSR Works in Next.js",
      "text": "The server sends a minimal HTML document with a <div id=\"root\"> and script tags. The browser downloads and executes the JavaScript bundle. React renders the UI in the browser, fetching data as needed. After the initial load, navigations are instant because no server round-trip is needed."
    },
    {
      "heading": "CSR vs SSR Trade-offs",
      "text": "CSR has slower initial load (JavaScript must download and execute) but faster subsequent navigations. SSR has faster initial HTML delivery but requires server round-trips for every navigation. CSR is better for authenticated dashboards and apps where SEO is not critical."
    },
    {
      "heading": "Data Fetching in CSR",
      "text": "CSR components use React hooks like useEffect, useSWR, or TanStack Query to fetch data client-side. Loading states, error handling, and optimistic updates are managed in the browser. Data can be cached client-side using SWR or React Query for improved performance."
    },
    {
      "heading": "SEO Implications of CSR",
      "text": "CSR pages serve an empty HTML shell to search engines, which may not index content properly. Use Next.js metadata API for basic SEO tags, but content-heavy pages benefit from SSR or SSG. Hybrid approaches use SSR for initial load and CSR for subsequent client-side navigation."
    },
    {
      "heading": "Performance Optimization for CSR",
      "text": "Minimize bundle size with code splitting, lazy loading, and dynamic imports. Use React.memo and useMemo to prevent unnecessary re-renders. Implement virtual scrolling for long lists. Use service workers for offline support and caching."
    }
  ],
  "interviewAnswer": "CSR is a valid choice for authenticated applications, dashboards, and tools where SEO is not a priority. Next.js supports CSR through \"use client\" components and client-side data fetching. The key is choosing the right rendering strategy for each page based on content type and user needs.",
  "interviewQuestions": [
    {
      "question": "What is Client-Side Rendering in Next.js?",
      "answer": "CSR renders the page entirely in the browser. The server sends a minimal HTML shell with JavaScript bundles. React takes over in the browser, rendering components, fetching data, and managing UI state. The initial load is slower, but subsequent navigations are instant."
    },
    {
      "question": "How do you create a Client Component in Next.js?",
      "answer": "Add \"use client\" at the top of the component file. This marks the component and its children as client-side rendered. Client Components can use React hooks, browser APIs, event handlers, and state management. They can be imported by Server Components."
    },
    {
      "question": "How does data fetching work in CSR?",
      "answer": "Data is fetched client-side using useEffect with fetch, or libraries like SWR and TanStack Query. These hooks manage loading states, caching, revalidation, and error handling. Data is fetched after the component mounts in the browser."
    },
    {
      "question": "What are the advantages of CSR?",
      "answer": "Fast subsequent navigations with no server round-trips, rich interactivity with client-side state management, reduced server load, ability to use browser APIs, and simpler deployment as static files."
    },
    {
      "question": "What are the disadvantages of CSR?",
      "answer": "Slow initial load (JavaScript download + parse + execute), poor SEO (empty HTML shell), reliance on client device performance, potential for flash of unstyled content, and JavaScript required for basic content visibility."
    },
    {
      "question": "How does CSR affect SEO in Next.js?",
      "answer": "CSR pages have minimal HTML content, so search engines may not index the actual page content. Next.js provides metadata API for basic tags, but for content-heavy pages, SSR, SSG, or ISR are preferred. Use dynamic rendering to serve SSR to bots and CSR to users."
    },
    {
      "question": "Can you mix CSR with SSR in Next.js?",
      "answer": "Yes, Next.js supports mixed rendering. A page can have a Server Component shell that handles SEO-critical content and metadata, with Client Components embedded for interactive sections. This hybrid approach is the recommended pattern in the App Router."
    },
    {
      "question": "What is the role of \"use client\" directive?",
      "answer": "The \"use client\" directive marks the boundary between server and client code. Components marked with \"use client\" are rendered on the client and can use hooks, event handlers, and browser APIs. All components imported into a Client Component also become client-rendered."
    },
    {
      "question": "How do you optimize CSR performance in Next.js?",
      "answer": "Use dynamic imports with next/dynamic for code splitting, lazy load below-the-fold components, use SWR/React Query for caching, implement virtual scrolling for lists, use React.memo for expensive renders, and minimize bundle size with tree shaking."
    },
    {
      "question": "When should you choose CSR over SSR?",
      "answer": "Choose CSR for authenticated dashboards, admin panels, tools with complex interactivity, real-time applications, and internal tools where SEO is not needed. Choose SSR/SSG for public content, e-commerce product pages, blogs, and any page that needs search engine visibility."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Client-Side Rendering</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"40\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Server sends HTML shell</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Minimal</text><line x1=\"150\" y1=\"60\" x2=\"170\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"40\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Browser loads JS</text><text x=\"250\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bundle</text><line x1=\"320\" y1=\"60\" x2=\"340\" y2=\"60\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">React hydrates &</text><text x=\"410\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">renders UI</text><line x1=\"350\" y1=\"80\" x2=\"350\" y2=\"100\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"110\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"290\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">useEffect / SWR</text><text x=\"290\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch Data</text><rect x=\"10\" y=\"110\" width=\"140\" height=\"40\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"80\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User sees content</text><text x=\"80\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interactive</text><text x=\"250\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CSR: Minimal HTML served, JavaScript renders content in the browser.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Client Component",
      "useCase": "When you need a component with user interaction.",
      "code": "\"use client\";\nimport { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n}",
      "description": "The \"use client\" directive enables hooks and event handlers. This component runs entirely in the browser."
    },
    {
      "title": "Client-Side Data Fetching",
      "useCase": "When you need to fetch data after page load.",
      "code": "\"use client\";\nimport { useState, useEffect } from \"react\";\n\nexport default function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  useEffect(() => {\n    fetch(`/api/users/${userId}`).then(r => r.json()).then(setUser);\n  }, [userId]);\n  if (!user) return <div>Loading...</div>;\n  return <div>{user.name}</div>;\n}",
      "description": "Fetches user data client-side when the component mounts or userId changes."
    },
    {
      "title": "Using SWR for CSR",
      "useCase": "When you want automatic caching and revalidation.",
      "code": "\"use client\";\nimport useSWR from \"swr\";\n\nconst fetcher = (url) => fetch(url).then(r => r.json());\n\nexport default function Dashboard() {\n  const { data, error, isLoading } = useSWR(\"/api/dashboard\", fetcher);\n  if (isLoading) return <div>Loading...</div>;\n  if (error) return <div>Error loading data</div>;\n  return <div>{data.stats}</div>;\n}",
      "description": "SWR handles caching, revalidation, and error states automatically."
    },
    {
      "title": "Dynamic Import for Code Splitting",
      "useCase": "When you want to lazy-load heavy components.",
      "code": "import dynamic from \"next/dynamic\";\n\nconst HeavyChart = dynamic(() => import(\"../components/Chart\"), {\n  ssr: false,\n  loading: () => <div>Loading chart...</div>\n});\n\nexport default function Page() {\n  return <HeavyChart />;\n}",
      "description": "The chart component is loaded only when needed, reducing initial bundle size."
    },
    {
      "title": "Hybrid Server + Client Component",
      "useCase": "When you need SEO content with interactive sections.",
      "code": "// Server Component (default)\nexport default function ProductPage({ product }) {\n  return (\n    <div>\n      <h1>{product.name}</h1>\n      <p>{product.description}</p>\n      <AddToCartButton productId={product.id} />\n    </div>\n  );\n}\n\n// Client Component for interactivity\n\"use client\";\nexport function AddToCartButton({ productId }) {\n  const addToCart = () => fetch(\"/api/cart\", { method: \"POST\", body: JSON.stringify({ productId }) });\n  return <button onClick={addToCart}>Add to Cart</button>\n}",
      "description": "SEO content is server-rendered, while the interactive button is a Client Component."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What directive marks a component as client-side only?",
      "options": [
        "\"use server\"",
        "\"use client\"",
        "\"use browser\"",
        "\"use csr\""
      ],
      "answer": 1,
      "explanation": "\"use client\" marks the component boundary for client-side rendering with full browser API access."
    },
    {
      "question": "What is the main disadvantage of CSR?",
      "options": [
        "Fast subsequent navigations",
        "Poor SEO",
        "Reduced server load",
        "Rich interactivity"
      ],
      "answer": 1,
      "explanation": "CSR pages serve minimal HTML, making content indexing by search engines difficult."
    },
    {
      "question": "Which library is commonly used for client-side data fetching with caching?",
      "options": [
        "Redux",
        "SWR",
        "Zustand",
        "MobX"
      ],
      "answer": 1,
      "explanation": "SWR provides automatic caching, revalidation, and error handling for client-side data fetching."
    },
    {
      "question": "How do you lazy-load a component in Next.js?",
      "options": [
        "React.lazy",
        "next/dynamic",
        "import()",
        "loadable()"
      ],
      "answer": 1,
      "explanation": "next/dynamic is the Next.js-specific way to lazy-load components with SSR control."
    },
    {
      "question": "What is the recommended rendering strategy for a public blog?",
      "options": [
        "CSR",
        "SSR or SSG",
        "Only CSR",
        "No rendering needed"
      ],
      "answer": 1,
      "explanation": "Public blogs need SEO, so SSR or SSG is recommended over CSR."
    },
    {
      "question": "Can Client Components be imported into Server Components?",
      "options": [
        "No, never",
        "Yes, always",
        "Yes, but they remain client-rendered at the boundary",
        "Only with \"use server\""
      ],
      "answer": 2,
      "explanation": "Client Components can be imported by Server Components, but the boundary remains at the \"use client\" file."
    }
  ]
};
