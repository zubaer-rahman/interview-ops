export const react_server_components = {
  "id": "react-server-components",
  "title": "React Server Components",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "React Server Components (RSC) are components that run and render on the server, sending only the resulting HTML/UI to the client.",
    "RSCs can directly access databases, file systems, and backend APIs without exposing sensitive logic to the client.",
    "Server Components can fetch data at the component level without useEffect, SWR, or React Query — just async/await directly.",
    "RSCs reduce client-side JavaScript bundle size because their dependencies never ship to the browser."
  ],
  "laymanDefinition": "React Server Components are like a chef who prepares the complex parts of a meal in the kitchen (server) and only sends the finished dish to the dining table (client). The diner never sees the raw ingredients, the chef's recipes, or the cooking process. They just see the beautiful plated dish. Regular client components are like a DIY meal kit — the ingredients and instructions are sent to the table, and the diner cooks it themselves. Server Components make apps faster by doing the heavy lifting on the server.",
  "deepDive": [
    {
      "heading": "What Are Server Components?",
      "text": "Server Components are React components that execute exclusively on the server. They can be async, directly access databases, read files, and call internal APIs. The result is serialized as a special format (RSC payload) and streamed to the client. Server Components never re-render on the client — they have no state, no effects, no browser APIs. This dramatically reduces client-side JavaScript. In Next.js, Server Components are the default in the App Router — every component is a Server Component unless you add \"use client\" directive."
    },
    {
      "heading": "Server Components vs Client Components",
      "text": "Server Components: run on server, async, direct DB/FS access, no state/effects, smaller bundle. Client Components: run in browser, useState/useEffect, browser APIs, interactivity. The \"use client\" directive marks the boundary. Server Components can import and render Client Components. Client Components cannot import Server Components (but can receive Server Components as children via props or composition patterns). The key optimization: keep expensive dependencies (markdown parsers, date libraries) in Server Components — they never ship to the client."
    },
    {
      "heading": "Data Fetching in Server Components",
      "text": "Server Components can use async/await directly at the component level: async function Page() { const posts = await db.query(\"SELECT * FROM posts\"); return <PostList posts={posts} />; }. No useEffect, no SWR, no loading state boilerplate. The server suspends while the data fetches, then streams the result. This eliminates the waterfall problem where a component fetches, renders, then its child fetches — all fetching happens in parallel on the server. Data fetching is secure — credentials stay on the server."
    },
    {
      "heading": "Performance and Bundle Size Benefits",
      "text": "Server Components reduce client bundle size because their dependencies (libraries, utilities) never ship to the browser. Example: a markdown parser used in a Server Component is not included in the client bundle. The RSC payload is a compact binary format. Combined with streaming, the client can progressively render content as it arrives. Server Components also eliminate the need for API endpoints for internal data — the component fetches directly from the database. This simplifies the architecture and reduces network round trips."
    },
    {
      "heading": "Limitations and Caveats",
      "text": "Server Components cannot: use state/effects, handle user interactions, access browser APIs, use context (for now), use hooks. They run once per request (or once during build for SSG). The \"use client\" boundary is explicit — components that need interactivity must be split. Caching considerations: data in Server Components can be cached with Next.js's fetch cache or React's cache() function. Error handling uses error boundaries in Client Components wrapping Server Components."
    }
  ],
  "interviewAnswer": "React Server Components run and render on the server, sending only the resulting UI to the client. They reduce the client bundle by keeping dependencies server-side. Server Components can be async and directly access databases/file systems without exposing credentials. They enable component-level data fetching without useEffect or external data libraries. The \"use client\" directive marks client boundaries. Server Components have no state, effects, or browser APIs — they are for static/derived content. Next.js App Router uses Server Components by default. Key benefits: zero client bundle impact for server logic, direct data access, parallel data fetching, and streaming.",
  "interviewQuestions": [
    {
      "question": "What are React Server Components?",
      "answer": "Components that run exclusively on the server, producing a serialized RSC payload sent to the client. They have no state, effects, or browser APIs, and can directly access server-side resources."
    },
    {
      "question": "How do you mark a component as a Client Component?",
      "answer": "Add \"use client\" directive at the top of the file. Every component without this directive is a Server Component by default in Next.js App Router."
    },
    {
      "question": "How does data fetching work in Server Components?",
      "answer": "Direct async/await at the component level: async function Page() { const data = await db.query(...); return <View data={data} />; }. No hooks, no loading states, no waterfall."
    },
    {
      "question": "What is the bundle size benefit of Server Components?",
      "answer": "Dependencies imported only in Server Components are never included in the client bundle. A markdown parser, date library, or utility used solely in server code has zero cost for the client."
    },
    {
      "question": "Can Server Components use hooks or state?",
      "answer": "No. Server Components cannot use useState, useEffect, useContext, or any React hooks. They cannot handle events or browser interactions. Use Client Components for interactivity."
    },
    {
      "question": "How do Server Components relate to Next.js App Router?",
      "answer": "In Next.js App Router, all components are Server Components by default. Adding \"use client\" at the top of a file makes it a Client Component. This is the recommended approach for new Next.js apps."
    },
    {
      "question": "Can Server Components import Client Components?",
      "answer": "Yes. Server Components can import and render Client Components. Client Components can receive Server Components as children (via composition), but cannot import them directly."
    },
    {
      "question": "How does caching work with Server Components?",
      "answer": "Server Components run per request (dynamic) or once at build time (static). Next.js provides fetch caching: fetch(url, { cache: \"force-cache\" }) or { next: { revalidate: 60 } }. React's cache() function deduplicates requests during a render pass."
    },
    {
      "question": "How do you handle errors in Server Components?",
      "answer": "Wrap Server Components in Client Component error boundaries. The error boundary must be a Client Component that catches errors during rendering of its Server Component children."
    },
    {
      "question": "What is the RSC payload format?",
      "answer": "A compact binary/JSON format that represents the rendered tree. It can be streamed to the client progressively. The client merges the RSC payload with existing Client Component state to produce the final UI."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 320\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:650px;\"><defs><marker id=\"sArr\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"630\" height=\"300\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"325\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Server Components Architecture</text><rect x=\"30\" y=\"55\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">🔵 Server (Node.js)</text><text x=\"160\" y=\"100\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Server Components run here</text><text x=\"160\" y=\"115\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Direct DB, FS, API access</text><text x=\"160\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Async fetch, no client JS cost</text><line x1=\"290\" y1=\"105\" x2=\"350\" y2=\"105\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#sArr)\"/><text x=\"320\" y=\"95\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">RSC payload</text><rect x=\"350\" y=\"55\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"480\" y=\"80\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">🟢 Client (Browser)</text><text x=\"480\" y=\"100\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Client Components with \"use client\"</text><text x=\"480\" y=\"115\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">State, effects, interactivity</text><text x=\"480\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Receives serialized RSC result</text><rect x=\"30\" y=\"180\" width=\"580\" height=\"100\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"320\" y=\"205\" fill=\"#f87171\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Key Principles</text><text x=\"320\" y=\"225\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">1. Server Components: no state, no effects, no browser APIs — pure rendering from server data</text><text x=\"320\" y=\"242\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">2. \"use client\" marks the boundary — everything else is Server Component by default (Next.js App Router)</text><text x=\"320\" y=\"259\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">3. Server Components can import Client Components; Client Components cannot import Server Components</text></svg>",
  "codeExamples": [
    {
      "title": "Server Component Data Fetching",
      "useCase": "Direct database access without hooks",
      "code": "// This is a Server Component (no \"use client\" directive)\nasync function BlogPage() {\n  const posts = await db.query(`\n    SELECT id, title, excerpt, created_at\n    FROM posts\n    ORDER BY created_at DESC\n    LIMIT 10\n  `);\n\n  return (\n    <div>\n      <h1>Latest Posts</h1>\n      {posts.map(post => (\n        <article key={post.id}>\n          <h2>{post.title}</h2>\n          <p>{post.excerpt}</p>\n          <small>{post.created_at.toLocaleDateString()}</small>\n        </article>\n      ))}\n    </div>\n  );\n}",
      "description": "Server Component fetches data directly from the database. No API endpoint, no useEffect, no loading state. The component is async — it suspends while the query runs, then streams the result."
    },
    {
      "title": "Client Component Interactivity",
      "useCase": "Interactive parts use \"use client\"",
      "code": "\"use client\";\n\nimport { useState } from \"react\";\n\nfunction LikeButton({ postId, initialLikes }) {\n  const [likes, setLikes] = useState(initialLikes);\n  const [liked, setLiked] = useState(false);\n\n  async function handleLike() {\n    const res = await fetch(\"/api/like\", {\n      method: \"POST\",\n      body: JSON.stringify({ postId }),\n    });\n    const data = await res.json();\n    setLikes(data.likes);\n    setLiked(true);\n  }\n\n  return (\n    <button onClick={handleLike} disabled={liked}>\n      {liked ? `${likes} ❤️` : `${likes} 🤍`}\n    </button>\n  );\n}",
      "description": "Client Component handles interactivity (state, effects, events). Server Component passes initial data as props."
    },
    {
      "title": "Server + Client Composition",
      "useCase": "Best practice for mixing both",
      "code": "// Server Component (parent)\nasync function PostPage({ params }) {\n  const post = await db.query(\"SELECT * FROM posts WHERE id = $1\", [params.id]);\n  const comments = await db.query(\"SELECT * FROM comments WHERE post_id = $1\", [params.id]);\n\n  return (\n    <article>\n      <h1>{post.title}</h1>\n      <div>{post.content}</div>\n      {/* Server Component renders Client Component */}\n      <LikeButton postId={post.id} initialLikes={post.likes} />\n      <CommentList initialComments={comments} postId={post.id} />\n    </article>\n  );\n}\n\n// Client Component with \"use client\"\n\"use client\";\nfunction CommentList({ initialComments, postId }) {\n  const [comments, setComments] = useState(initialComments);\n  // ... interactivity logic\n}",
      "description": "Server Component handles data fetching. Client Components handle interactivity. Composition pattern: Server Component wraps Client Components with initial data as props."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a React Server Component?",
      "options": [
        "A component that renders on the server and sends only the resulting UI to the client",
        "A component that runs in the browser",
        "A component that is pre-rendered at build time",
        "A component that cannot have props"
      ],
      "answer": 0,
      "explanation": "Server Components run on the server, producing a serialized payload sent to the client."
    },
    {
      "question": "How do you mark a component as a Client Component?",
      "options": [
        "Add \"use server\" directive",
        "Add \"use client\" directive",
        "No special marking needed",
        "Import from \"react-dom\""
      ],
      "answer": 1,
      "explanation": "\"use client\" at the top of the file marks the client boundary."
    },
    {
      "question": "Can Server Components use hooks?",
      "options": [
        "Yes, all hooks",
        "No, no hooks or state",
        "Only useState",
        "Only useEffect"
      ],
      "answer": 1,
      "explanation": "Server Components cannot use any hooks, state, effects, or browser APIs."
    },
    {
      "question": "How does data fetching work in Server Components?",
      "options": [
        "useEffect hook",
        "Direct async/await at component level",
        "React Query",
        "SWR"
      ],
      "answer": 1,
      "explanation": "Server Components can be async and use direct async/await for data fetching without hooks."
    },
    {
      "question": "What is the bundle size benefit of RSC?",
      "options": [
        "Dependencies used only in Server Components are not included in the client bundle",
        "No benefit",
        "Smaller HTML files",
        "Faster CSS loading"
      ],
      "answer": 0,
      "explanation": "Dependencies imported only in Server Components have zero cost for the client bundle."
    },
    {
      "question": "Can Client Components import Server Components?",
      "options": [
        "Yes, directly",
        "No, but can receive them as children via composition",
        "Only with \"use server\" directive",
        "Only in development"
      ],
      "answer": 1,
      "explanation": "Client Components cannot import Server Components directly but can receive them as children."
    },
    {
      "question": "What is the default in Next.js App Router?",
      "options": [
        "All components are Client Components",
        "All components are Server Components",
        "Must explicitly choose each component",
        "Components are hybrid"
      ],
      "answer": 1,
      "explanation": "In Next.js App Router, all components are Server Components by default unless marked with \"use client\"."
    }
  ]
};
