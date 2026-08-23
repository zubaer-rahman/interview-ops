export const react_hydration = {
  "id": "react-hydration",
  "title": "React Hydration",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Hydration is the process where React attaches event listeners and state to server-rendered HTML, making it interactive.",
    "ReactDOM.hydrateRoot() in React 18 replaces ReactDOM.hydrate() for attaching to pre-rendered HTML.",
    "Hydration mismatches occur when server HTML differs from the first client render - React attempts to reconcile but logs warnings.",
    "Streaming SSR in React 18 enables selective hydration - components hydrate as their content streams in."
  ],
  "laymanDefinition": "Hydration is like taking a photograph of a finished house (server-side rendered HTML) and then moving real furniture and people into it (making it interactive with JavaScript). The server sends HTML that looks complete (the photo), but the buttons do not work and nothing responds to clicks. Hydration is the process of attaching all the JavaScript event handlers, state, and logic to that static HTML so it becomes a living, interactive app. React walks through the server-rendered DOM tree, matches it to components, and attaches event listeners without recreating the DOM from scratch. This gives the user a fast initial paint (they see content immediately) while the JavaScript loads and hydrates.",
  "deepDive": [
    {
      "heading": "How Hydration Works",
      "text": "When the server sends HTML (from renderToString or renderToPipeableStream), ReactDOM.hydrateRoot() takes over. It traverses the existing DOM tree and matches DOM nodes to React components. For each node, React attaches event listeners and initializes state without recreating the DOM element. This is fundamentally different from client-only rendering where React creates all DOM elements from scratch. Hydration is a one-time operation - after hydration completes, React switches to regular client-side rendering for subsequent updates. The key constraint: the server-rendered HTML must exactly match the first client render output. If there is a mismatch (different text, different attributes), React must reconcile the difference, which involves replacing parts of the DOM tree and can cause layout shifts or flickers."
    },
    {
      "heading": "Hydration Mismatches: Causes and Solutions",
      "text": "Common causes of hydration mismatches: (1) Browser-only APIs - using window, document, localStorage during server render. (2) Dynamic timestamps or random values - Date.now(), Math.random(), or uuid generation produce different values on server vs client. (3) Different data - API responses may differ between server and client. (4) CSS-in-JS - server-rendered class names differ from client-rendered ones. (5) Browser extensions modifying the DOM. Solutions: (1) Use useEffect for browser-only code - the initial render matches the server. (2) Suppress hydration warnings with suppressHydrationWarning for intentional differences (timestamps). (3) Use next/dynamic or lazy loading with ssr:false for components that must differ. (4) Use consistent CSS-in-JS configuration (ExtractCritical for Emotion, styled-components ServerStyleSheet). (5) Ensure API data is consistent (serialize data in the HTML and hydrate from it)."
    },
    {
      "heading": "Streaming SSR and Selective Hydration (React 18)",
      "text": "React 18 introduces streaming SSR via renderToPipeableStream. The server sends HTML in chunks as components render. Suspense boundaries define streaming points - each boundary streams independently. Selective hydration: React can hydrate components as their HTML arrives, without waiting for the full page. This means: (1) The page shell hydrates first, making the header and navigation interactive. (2) Below-the-fold content hydrates later when its chunk arrives. (3) The user can interact with already-hydrated parts while other parts are still loading. (4) Priority is given to hydrating visible content first (hydration is prioritized like rendering). (5) This dramatically improves Time to Interactive (TTI) for complex pages. The same Suspense boundaries used for code splitting double as streaming boundaries."
    },
    {
      "heading": "ReactDOM.hydrateRoot() API (React 18)",
      "text": "React 18 replaces ReactDOM.hydrate() with ReactDOM.hydrateRoot(): ReactDOM.hydrateRoot(document.getElementById(\"root\"), <App />). Differences: (1) hydrateRoot does not take a callback - use useEffect instead. (2) hydrateRoot returns a Root object with render() and unmount() methods. (3) hydrateRoot supports concurrent features like transitions and Suspense. (4) The root can be updated with root.render(<NewApp />) for updates. (5) There is no hydrate() in React 18 - it was removed. Migration: replace ReactDOM.hydrate(element, container, callback) with ReactDOM.hydrateRoot(container, element). The callback pattern changes to useEffect in the root component."
    },
    {
      "heading": "Hydration Performance Optimization",
      "text": "(1) Minimize hydration work - hydrate only once and avoid unnecessary tree walks. Each extra DOM node increases hydration time. (2) Lazy hydrate non-critical components - use libraries like react-lazily or custom IntersectionObserver-based hydration for below-the-fold content. (3) Partial hydration (islands architecture) - only hydrate interactive components on a mostly static page. Frameworks like Astro, Fresh, and Qwik use this approach. (4) Progressive hydration - hydrate sections in order of user interaction priority (navbar first, main content second, footer last). (5) Avoid hydration regressions - use lint rules to catch common mismatch patterns. (6) Measure hydration time with Performance Observer API or React Profiler. (7) For large lists, virtualize both server and client rendering to reduce hydration DOM size."
    }
  ],
  "interviewAnswer": "Hydration attaches React event handlers and state to server-rendered HTML, making it interactive without recreating the DOM. ReactDOM.hydrateRoot() in React 18 traverses the existing DOM tree, matches nodes to components, and attaches listeners. Hydration mismatches occur when server HTML differs from client render - caused by browser APIs, timestamps, or inconsistent data. React 18's streaming SSR with selective hydration hydrates components as their HTML streams, improving TTI. Minimize hydration overhead with lazy hydration for non-critical components.",
  "interviewQuestions": [
    {
      "question": "What is hydration?",
      "answer": "Hydration is the process where React takes over server-rendered HTML and attaches event listeners, state, and interactivity without recreating the DOM. It makes a static HTML page into a fully interactive React app."
    },
    {
      "question": "What is the difference between ReactDOM.hydrate() and ReactDOM.hydrateRoot()?",
      "answer": "hydrateRoot is the React 18 replacement. hydrateRoot does not accept a callback, supports concurrent features, and returns a Root object. hydrate() is removed in React 18. Migration: replace hydrate() with hydrateRoot()."
    },
    {
      "question": "What causes a hydration mismatch?",
      "answer": "Differences between server-rendered HTML and first client render output. Common causes: browser APIs (window, document), dynamic values (Date.now(), Math.random()), different API data, CSS-in-JS class name differences, browser extensions modifying the DOM."
    },
    {
      "question": "How do you fix hydration mismatches intentionally?",
      "answer": "Use suppressHydrationWarning attribute on the element. This tells React to skip the mismatch check for that specific element. Use sparingly - only for truly unavoidable differences like timestamps."
    },
    {
      "question": "What is selective hydration?",
      "answer": "React 18 feature where components hydrate as their content streams from the server, rather than waiting for the full page. Suspense boundaries define hydration points. Already-hydrated components are interactive while others still load."
    },
    {
      "question": "How does streaming SSR work with hydration?",
      "answer": "The server sends HTML in chunks via renderToPipeableStream. Each Suspense boundary streams independently. As each chunk arrives, React can hydrate that portion of the page selectively without waiting for the full stream."
    },
    {
      "question": "What is the islands architecture?",
      "answer": "An approach where only interactive \"islands\" of components are hydrated on a mostly static page. Non-interactive content remains as static HTML without JavaScript. Frameworks: Astro, Fresh, Qwik. This minimizes hydration work."
    },
    {
      "question": "How do you lazy hydrate components?",
      "answer": "Use IntersectionObserver-based hydration: hydrate a component only when it scrolls into the viewport. Libraries like react-lazily or custom hooks detect visibility and trigger hydration. Reduces initial hydration work for below-the-fold content."
    },
    {
      "question": "What is the relationship between Suspense and hydration?",
      "answer": "Suspense boundaries act as hydration boundaries in React 18 streaming SSR. Each Suspense boundary streams independently and hydrates independently. Nested Suspense enables progressive hydration with granular loading states."
    },
    {
      "question": "How do you measure hydration performance?",
      "answer": "Use Performance Observer (performance.mark/measure), React DevTools Profiler (records hydration commit), or custom timing with useEffect. Key metrics: time to interactive (TTI), first input delay (FID), and hydration DOM size."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"260\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Hydration Process</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"72.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Server Sends HTML</text><text x=\"130\" y=\"89.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Static HTML with content</text><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"120\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"120\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"135\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Browser Renders HTML</text><text x=\"130\" y=\"152\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">User sees content immediately</text><line x1=\"130\" y1=\"160\" x2=\"130\" y2=\"180\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"180\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"197.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">hydrateRoot()</text><text x=\"130\" y=\"214.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">React attaches to existing DOM</text></svg>",
  "codeExamples": [
    {
      "title": "React 18 Hydration with Streaming SSR",
      "useCase": "Complete setup for a streaming SSR app",
      "code": "// Server (Node.js with Express):\nimport { renderToPipeableStream } from \"react-dom/server\";\nimport App from \"./App\";\n\napp.get(\"/\", (req, res) => {\n  res.setHeader(\"Content-Type\", \"text/html\");\n  res.write('<div id=\"root\">');\n  const { pipe } = renderToPipeableStream(<App />, {\n    onShellReady() {\n      pipe(res);\n    },\n    onError(err) {\n      console.error(err);\n    }\n  });\n  res.write('</div><script src=\"/bundle.js\"></script>');\n});\n\n// Client:\nimport { hydrateRoot } from \"react-dom/client\";\nimport App from \"./App\";\n\nhydrateRoot(document.getElementById(\"root\"), <App />);\n\n// App with Suspense boundaries for streaming:\nfunction App() {\n  return (\n    <html lang=\"en\">\n      <head><title>My App</title></head>\n      <body>\n        <Navbar />\n        <Suspense fallback={<MainSkeleton />}>\n          <MainContent />\n        </Suspense>\n        <Suspense fallback={<SidebarSkeleton />}>\n          <Sidebar />\n        </Suspense>\n      </body>\n    </html>\n  );\n}",
      "description": "The server streams HTML. The client calls hydrateRoot once. Suspense boundaries in App become streaming points - each boundary's HTML streams independently. React hydrates each section when its chunk arrives."
    },
    {
      "title": "Common Hydration Mismatch Pattern and Fix",
      "useCase": "Avoiding hydration issues with browser-only content",
      "code": "// BAD: Causes hydration mismatch\nfunction TimeDisplay() {\n  return <p>Current time: {new Date().toLocaleTimeString()}</p>;\n}\n\n// GOOD: Match server render, update on client\nfunction TimeDisplay() {\n  const [time, setTime] = useState(null);\n\n  useEffect(() => {\n    setTime(new Date().toLocaleTimeString());\n    const interval = setInterval(() => {\n      setTime(new Date().toLocaleTimeString());\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  // Server and first client render: show placeholder\n  // After hydration, useEffect updates to real time\n  return <p>Current time: {time ?? \"loading...\"}</p>;\n}\n\n// BAD: Browser API during render\nfunction WindowSize() {\n  const width = window.innerWidth; // crashes on server!\n  return <p>Width: {width}</p>;\n}\n\n// GOOD: Use useEffect for browser code\nfunction WindowSize() {\n  const [width, setWidth] = useState(1024); // sensible default\n\n  useEffect(() => {\n    setWidth(window.innerWidth);\n    const handle = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handle);\n    return () => window.removeEventListener(\"resize\", handle);\n  }, []);\n\n  return <p>Width: {width}px</p>;\n}",
      "description": "The time and window width examples show the pattern: render the same thing on server and client first render, then use useEffect to update with the real value on the client. This avoids hydration mismatch while still providing correct interactive values."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does hydration do?",
      "options": [
        "Renders React on the server",
        "Attaches event listeners and state to server-rendered HTML without recreating the DOM",
        "Creates new DOM elements from scratch",
        "Removes server-rendered content"
      ],
      "answer": 1,
      "explanation": "Hydration walks the existing DOM tree, matches nodes to components, and attaches interactivity without recreating the DOM."
    },
    {
      "question": "What is the React 18 API for hydration?",
      "options": [
        "ReactDOM.hydrate()",
        "ReactDOM.hydrateRoot()",
        "ReactDOM.createRoot()",
        "ReactDOM.render()"
      ],
      "answer": 1,
      "explanation": "ReactDOM.hydrateRoot(container, element) is the React 18 API. hydrate() is removed in React 18."
    },
    {
      "question": "What causes a hydration mismatch?",
      "options": [
        "The server has different React version",
        "Server HTML differs from the first client render output",
        "The client has no internet",
        "The bundle is too large"
      ],
      "answer": 1,
      "explanation": "Any difference between server-rendered HTML and the first client render output causes a mismatch warning. React may need to replace parts of the DOM tree to fix the mismatch."
    },
    {
      "question": "What is selective hydration?",
      "options": [
        "Choosing which components to hydrate",
        "Hydrating components as their content streams from the server, one Suspense boundary at a time",
        "Hydrating only on mobile devices",
        "Hydrating in the background"
      ],
      "answer": 1,
      "explanation": "Selective hydration allows components to hydrate independently as their streaming HTML arrives, without waiting for the full page."
    },
    {
      "question": "How do you fix an intentional hydration mismatch?",
      "options": [
        "Ignore the warning",
        "Use suppressHydrationWarning on the element",
        "Wrap the component in an error boundary",
        "Use React.memo"
      ],
      "answer": 1,
      "explanation": "suppressHydrationWarning tells React to skip the mismatch check for that specific element. Use only for unavoidable differences."
    },
    {
      "question": "What is the islands architecture pattern?",
      "options": [
        "Only interactive components are hydrated; static content remains as HTML without JavaScript",
        "Every element is hydrated",
        "No JavaScript is used at all",
        "All components are server-only"
      ],
      "answer": 1,
      "explanation": "In islands architecture, non-interactive content is pure HTML without JS. Only interactive \"islands\" (buttons, forms, widgets) are hydrated, minimizing JS payload."
    }
  ]
};
