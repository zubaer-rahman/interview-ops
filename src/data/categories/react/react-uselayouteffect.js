export const react_uselayouteffect = {
  "id": "react-uselayouteffect",
  "title": "React useLayoutEffect",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "useLayoutEffect runs synchronously after DOM mutations but before the browser paints, unlike useEffect which runs after paint.",
    "Use useLayoutEffect when you need to read layout from the DOM and synchronously re-render before the user sees a visual flash.",
    "It blocks the browser from painting until the callback completes, so avoid expensive computations inside it.",
    "On the server, useLayoutEffect produces a warning because there is no browser DOM - use useEffect or an isomorphic pattern instead."
  ],
  "laymanDefinition": "useLayoutEffect is like a last-minute decorator who works between the time furniture is placed (DOM mutations) and when guests enter (browser paint). They can measure the room dimensions and quickly adjust decorations before anyone sees the room. useEffect, by contrast, works after guests have left - any adjustments they make will be visible as a flicker. Use useLayoutEffect when you need measurements or positions to be correct from the very first frame the user sees. Common examples: positioning a tooltip next to a button, measuring element dimensions for a layout calculation, or syncing scroll positions.",
  "deepDive": [
    {
      "heading": "When to Use useLayoutEffect vs useEffect",
      "text": "useLayoutEffect fires synchronously after all DOM mutations are committed but before the browser has a chance to paint. useEffect fires asynchronously after the paint cycle completes. The rule of thumb: use useEffect by default for all side effects (data fetching, subscriptions, logging, analytics). Only reach for useLayoutEffect when you see a visual problem - typically a flash, flicker, or layout jump. Specific scenarios that demand useLayoutEffect: reading element dimensions (getBoundingClientRect, offsetHeight), measuring scroll positions, positioning absolutely-positioned elements like tooltips or dropdowns relative to a trigger, and synchronously applying scroll restoration. Every useLayoutEffect callback blocks the paint, so if it does heavy computation, the user sees a blank frame. Always measure whether useEffect actually causes a visual problem before upgrading to useLayoutEffect."
    },
    {
      "heading": "The Flash Problem Explained",
      "text": "Consider a tooltip component that measures a target button and positions itself above it. With useEffect: component renders -> browser paints (user sees tooltip at default 0,0 position -> bad) -> useEffect runs -> setState with new position -> component re-renders -> browser paints again (user sees tooltip at correct position). The intermediate paint at 0,0 is the flash. With useLayoutEffect: component renders -> DOM is committed -> useLayoutEffect runs synchronously (before paint) -> setState updates position -> component re-renders -> browser paints once (user sees tooltip at correct position from the start). No flash. The same principle applies to scroll listeners, resize observers, and any case where DOM measurements drive visual output."
    },
    {
      "heading": "Performance Implications and Best Practices",
      "text": "Because useLayoutEffect blocks the paint, it directly impacts perceived performance. If your callback takes 50ms, the user sees a blank screen for 50ms before anything appears. Best practices: (1) Keep useLayoutEffect callbacks extremely lightweight - do heavy computation elsewhere. (2) If you only need to read from the DOM but not write synchronously, use useEffect. (3) Consider using ResizeObserver or IntersectionObserver callbacks instead of useLayoutEffect for measurement. (4) If you need both async and sync behavior, split into two effects. (5) Profile with React DevTools to confirm useLayoutEffect is not a bottleneck. React 18s automatic batching can help reduce re-renders triggered by useLayoutEffect."
    },
    {
      "heading": "Server-Side Rendering and Isomorphic Patterns",
      "text": "useLayoutEffect does not run on the server because there is no browser DOM or paint cycle. React logs a warning in the console when it detects useLayoutEffect during SSR. To handle this: (1) Use useEffect instead of useLayoutEffect for effects that do not require synchronous DOM access. (2) Use an isomorphic wrapper that checks the environment: if (typeof window === \"undefined\") return useEffect(fn, deps); else return useLayoutEffect(fn, deps);. (3) Libraries like react-popper and react-virtualized use this pattern to safely handle SSR. (4) In Next.js, you can use dynamic imports with ssr: false for components that must use useLayoutEffect. (5) Alternatively, use the useIsomorphicLayoutEffect pattern from popular open-source libraries that implements this check."
    },
    {
      "heading": "useLayoutEffect in the React 18 Concurrent World",
      "text": "With React 18s concurrent mode, useLayoutEffect behaves the same way but with an important nuance: it guarantees that its callback runs before the browser paints the committed render, even if that render was interrupted and resumed. This makes useLayoutEffect the safest choice for imperative DOM mutations that must be visible synchronously. Note that useLayoutEffect cannot be used with Suspense data fetching in the same way as useEffect - the synchronous nature means it does not participate in the suspend/resume lifecycle. In practice, this rarely matters because layout effects are typically for DOM manipulation, not data side effects."
    }
  ],
  "interviewAnswer": "useLayoutEffect runs synchronously after DOM mutations but before the browser paints. Its primary purpose is to read layout information (element dimensions, scroll positions) and apply synchronous visual updates without causing a visible flicker or layout jump. By default, you should always prefer useEffect because useLayoutEffect blocks the paint and can degrade perceived performance if the callback is expensive. Common use cases include tooltip positioning, scroll restoration, and measuring DOM elements. useLayoutEffect does not run on the server and produces a console warning; use an isomorphic pattern with environment detection for SSR-compatible code. In React 18 concurrent mode, useLayoutEffect guarantees its callback executes before paint even after render interruptions.",
  "interviewQuestions": [
    {
      "question": "What is the fundamental difference between useLayoutEffect and useEffect?",
      "answer": "useLayoutEffect fires synchronously after DOM mutations are committed but before the browser paints. useEffect fires asynchronously after the browser completes its paint cycle. This means useLayoutEffect runs during the commit phase while useEffect runs during the passive effect phase, which occurs after painting."
    },
    {
      "question": "Can you describe a concrete scenario where useLayoutEffect is necessary and useEffect would cause a problem?",
      "answer": "A tooltip component that measures a trigger button and positions itself accordingly. With useEffect: the tooltip renders at default position (0,0), the browser paints (user sees flash), useEffect reads button dimensions, setState updates position, component re-renders, browser paints again at correct position. The intermediate paint at 0,0 is the flash. useLayoutEffect eliminates this by running before the first paint."
    },
    {
      "question": "What happens if you use useLayoutEffect in a server-side rendered application?",
      "answer": "React logs a warning because there is no browser DOM on the server. The effect does not execute at all during SSR. To handle this, implement the useIsomorphicLayoutEffect pattern: check typeof window and use useEffect on the server, useLayoutEffect in the browser."
    },
    {
      "question": "How does useLayoutEffect impact performance compared to useEffect?",
      "answer": "useLayoutEffect blocks the browser paint. If the callback is expensive (say 100ms of computation), the user sees a blank screen for that duration. useEffect does not block paint. Therefore, useLayoutEffect should only contain lightweight synchronous DOM operations."
    },
    {
      "question": "In the React rendering lifecycle, where exactly does useLayoutEffect fit?",
      "answer": "After React commits DOM mutations (render phase -> commit phase -> DOM updated) but before the browser performs its paint cycle. It runs after all synchronous DOM mutations are applied. useEffect comes after paint, during the passive effect phase."
    },
    {
      "question": "Can useLayoutEffect be used for data fetching?",
      "answer": "Technically yes, but it is strongly discouraged. Data fetching is asynchronous and should not block paint. Data fetching also does not require synchronous DOM access. useEffect is the correct place for data fetching."
    },
    {
      "question": "What is the relationship between useLayoutEffect and the browsers requestAnimationFrame?",
      "answer": "useLayoutEffect runs synchronously before paint. requestAnimationFrame runs right before the next paint cycle begins. useLayoutEffect runs earlier in the pipeline, which is why it can prevent the flash - it executes before the browser starts compositing the frame."
    },
    {
      "question": "How does React 18s automatic batching affect useLayoutEffect?",
      "answer": "If you call setState multiple times inside useLayoutEffect, React 18 batches them into a single synchronous re-render before paint. This means you can make multiple state updates inside useLayoutEffect and only cause one synchronous re-render + one paint, improving performance."
    },
    {
      "question": "What happens if you forgot to provide a dependency array to useLayoutEffect?",
      "answer": "Like useEffect, the effect runs after every render. Depending on what the effect does, this can cause infinite re-render loops (if it triggers state updates that cause re-renders). Always provide the correct dependencies."
    },
    {
      "question": "How do you test components that use useLayoutEffect?",
      "answer": "Use the act() utility from React Testing Library or @testing-library/react. This ensures all layout effects are flushed before assertions. You can also mock useLayoutEffect to behave like useEffect in tests if synchronous behavior is not needed."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 350\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">useLayoutEffect vs useEffect Timeline</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"72.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. Render Phase</text><text x=\"130\" y=\"89.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">React calls component, computes VDOM</text><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"125\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"142.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. Commit Phase</text><text x=\"130\" y=\"159.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">React applies DOM mutations</text><line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"195\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"195\" width=\"200\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. useLayoutEffect</text><text x=\"130\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Synchronous, before paint</text><line x1=\"130\" y1=\"245\" x2=\"130\" y2=\"270\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"270\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"287.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. Browser Paints</text><text x=\"130\" y=\"304.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">User sees the frame</text><line x1=\"130\" y1=\"315\" x2=\"130\" y2=\"330\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"330\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"347.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">5. useEffect</text><text x=\"130\" y=\"364.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Async, after paint</text><text x=\"250\" y=\"175\" fill=\"#f59e0b\" font-size=\"11\" text-anchor=\"start\">useLayoutEffect path:</text><text x=\"250\" y=\"192\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">no extra paint before corrections</text><text x=\"250\" y=\"295\" fill=\"#f87171\" font-size=\"11\" text-anchor=\"start\">useEffect path:</text><text x=\"250\" y=\"312\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">may cause intermediate paint flash</text></svg>",
  "codeExamples": [
    {
      "title": "Positioning a Dropdown with useLayoutEffect",
      "useCase": "Prevents menu from appearing in wrong position",
      "code": "function DropdownMenu({ triggerRef, items, isOpen }) {\n  const [position, setPosition] = useState({ top: 0, left: 0 });\n  const menuRef = useRef(null);\n\n  useLayoutEffect(() => {\n    if (!isOpen || !triggerRef.current || !menuRef.current) return;\n\n    const triggerRect = triggerRef.current.getBoundingClientRect();\n    const menuRect = menuRef.current.getBoundingClientRect();\n    const viewportWidth = window.innerWidth;\n    const viewportHeight = window.innerHeight;\n\n    let top = triggerRect.bottom + 4;\n    let left = triggerRect.left;\n\n    if (left + menuRect.width > viewportWidth) {\n      left = viewportWidth - menuRect.width - 8;\n    }\n\n    if (top + menuRect.height > viewportHeight) {\n      top = triggerRect.top - menuRect.height - 4;\n    }\n\n    setPosition({ top, left });\n  }, [isOpen, triggerRef]);\n\n  if (!isOpen) return null;\n\n  return ReactDOM.createPortal(\n    <ul ref={menuRef} style={{\n      position: \"fixed\", top: position.top, left: position.left,\n      background: \"#fff\", border: \"1px solid #ddd\",\n      borderRadius: \"4px\", boxShadow: \"0 4px 12px rgba(0,0,0,0.15)\",\n      zIndex: 1000, listStyle: \"none\", minWidth: \"160px\"\n    }}>\n      {items.map((item, i) => (\n        <li key={i} style={{ padding: \"8px 16px\", cursor: \"pointer\" }}>{item}</li>\n      ))}\n    </ul>,\n    document.body\n  );\n}",
      "description": "This dropdown measures the trigger button and the menu itself, positions the menu before the first paint, clamps to viewport boundaries, and renders via portal. With useEffect, the user might briefly see the menu at (0,0) before it jumps to the correct position."
    },
    {
      "title": "Scroll Restoration with useLayoutEffect",
      "useCase": "Maintain scroll position across navigation",
      "code": "function useScrollRestoration(key) {\n  const scrollPositions = useRef({});\n\n  useEffect(() => {\n    return () => {\n      scrollPositions.current[key] = window.scrollY;\n    };\n  }, [key]);\n\n  useLayoutEffect(() => {\n    const saved = scrollPositions.current[key];\n    if (saved !== undefined) {\n      window.scrollTo(0, saved);\n    }\n  }, [key]);\n\n  return { scrollPositions };\n}\n\nfunction ProductListPage() {\n  useScrollRestoration(\"product-list\");\n  const [products, setProducts] = useState([]);\n\n  useEffect(() => {\n    fetch(\"/api/products\").then(r => r.json()).then(setProducts);\n  }, []);\n\n  return (\n    <div>\n      {products.map(p => (\n        <Link key={p.id} to={\"/product/\" + p.id}>\n          <div className=\"product-card\"><h3>{p.name}</h3><p>${p.price}</p></div>\n        </Link>\n      ))}\n    </div>\n  );\n}",
      "description": "Without useLayoutEffect, scroll restoration would happen after paint, causing a visible jump from the top of the page to the saved position. useLayoutEffect restores the position before the user sees anything."
    }
  ],
  "mcqQuestions": [
    {
      "question": "When does useLayoutEffect fire in the React lifecycle?",
      "options": [
        "Before DOM mutations",
        "After DOM mutations, before browser paint",
        "After browser paint",
        "On every state change regardless of render"
      ],
      "answer": 1,
      "explanation": "useLayoutEffect runs synchronously after DOM mutations are committed but before the browser has a chance to paint."
    },
    {
      "question": "What visual artifact does useLayoutEffect prevent that useEffect can cause?",
      "options": [
        "Memory leaks",
        "Visual flicker or layout jump",
        "Infinite loops",
        "Network errors"
      ],
      "answer": 1,
      "explanation": "When you read DOM layout and update state in useEffect, a stale paint occurs before the correction. useLayoutEffect applies corrections before the first paint, eliminating the flicker."
    },
    {
      "question": "What is the recommended default between useEffect and useLayoutEffect?",
      "options": [
        "Always use useLayoutEffect",
        "Always use useEffect by default",
        "Use useLayoutEffect for data fetching",
        "They are interchangeable"
      ],
      "answer": 1,
      "explanation": "React documentation explicitly recommends defaulting to useEffect because useLayoutEffect blocks the paint and can hurt perceived performance."
    },
    {
      "question": "What happens when you use useLayoutEffect during server-side rendering?",
      "options": [
        "It works normally",
        "React logs a warning and skips it",
        "It throws an error",
        "It crashes the server"
      ],
      "answer": 1,
      "explanation": "useLayoutEffect does not run on the server because there is no browser DOM. React logs a warning in development mode."
    },
    {
      "question": "Which type of operation specifically requires useLayoutEffect?",
      "options": [
        "Data fetching from an API",
        "Synchronous DOM measurement (getBoundingClientRect)",
        "Setting up a timer interval",
        "Subscribing to a WebSocket"
      ],
      "answer": 1,
      "explanation": "Synchronous DOM measurement that drives visual positioning requires useLayoutEffect to prevent the flash between the initial incorrect position and the corrected position."
    },
    {
      "question": "How does useLayoutEffect impact perceived performance?",
      "options": [
        "It always improves performance",
        "It blocks the paint, so expensive callbacks delay the users first view",
        "It has no impact on performance",
        "It runs asynchronously so it never blocks"
      ],
      "answer": 1,
      "explanation": "useLayoutEffect is synchronous and blocks the browser paint. If the callback takes 50ms, the user sees nothing for 50ms."
    }
  ]
};
