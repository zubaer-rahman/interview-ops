export const practice_react = {
  "id": "practice-react",
  "title": "React Coding Challenges",
  "difficulty": "advanced",
  "estimatedMinutes": 40,
  "tldr": [
    "Build these from scratch: custom hooks (useLocalStorage, useDebounce, useIntersectionObserver), compound components, render props pattern.",
    "State management challenges: implement a mini-Redux with useReducer + Context, build a shopping cart with proper state architecture.",
    "Performance challenges: memoize expensive computations, implement virtualization for long lists, optimize re-renders with useMemo/useCallback.",
    "Form handling: controlled vs uncontrolled, validation, dynamic form fields, multi-step forms with state persistence.",
    "Testing: write component tests with React Testing Library focusing on behavior, mock API calls with msw, test error states and edge cases."
  ],
  "laymanDefinition": "React coding challenges are like being asked to build specific furniture pieces from scratch rather than assembling IKEA kits. Anyone can use a ready-made hook or component library, but interviewers want to see if you understand the underlying mechanics. Can you build a custom hook that syncs state with localStorage? Can you implement a tab component using the compound components pattern? Can you create a mini state management system using just useReducer and Context? These challenges prove you understand React deeply, not just how to use it.",
  "deepDive": [
    {
      "heading": "Custom Hooks: Reusable Logic",
      "text": "Custom hooks extract component logic into reusable functions. useLocalStorage: sync state with localStorage. useDebounce: delay value updates for search inputs. useIntersectionObserver: trigger when element enters viewport. useMediaQuery: responsive breakpoints. useInterval: declarative setInterval that respects dependencies. usePrevious: track previous value. The rule: prefix with \"use\", only call hooks at top level, don't call hooks inside conditions or loops. Custom hooks compose: one hook can call another hook."
    },
    {
      "heading": "Compound Components Pattern",
      "text": "A parent component manages implicit state and shares it with child components via Context. Use cases: Tabs (TabList, Tab, TabPanels), Accordion, Select, Form controls. Pattern: parent creates context with state + setters, children use useContext to access and modify state. Children are flexible — they render whatever JSX is passed, but get behavior from context. Example: <Tabs><TabList><Tab>One</Tab><Tab>Two</Tab></TabList><TabPanels><Panel>Content 1</Panel><Panel>Content 2</Panel></TabPanels></Tabs>."
    },
    {
      "heading": "State Management Architecture",
      "text": "For complex state (e.g., shopping cart): (1) Normalize state — store as entities map + IDs array. (2) Use useReducer for related state transitions. (3) Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, APPLY_COUPON. (4) Selectors: derived data (subtotal, tax, total, item count). (5) Split contexts: CartContext for data, CartDispatchContext for actions (avoids unnecessary re-renders). (6) Persist cart to localStorage with effect. Test reducer logic as a pure function."
    },
    {
      "heading": "Performance Optimization",
      "text": "(1) React.memo — prevent re-render when props haven't changed (shallow comparison). (2) useMemo — memoize expensive computations (reselect-style selectors). (3) useCallback — memoize callbacks passed to memoized children. (4) useTransition — mark non-urgent state updates. (5) Virtualization — render only visible items in long lists (react-window, react-virtuoso). (6) Code splitting — React.lazy + Suspense for route-level chunks. (7) Avoid: creating new objects/arrays in render, inline arrow functions in props of memoized children."
    },
    {
      "heading": "Error Boundaries and Edge Cases",
      "text": "Error boundaries catch rendering errors in child components. Implement with componentDidCatch or a reusable ErrorBoundary wrapper. Test error states: simulate API failure, invalid props, missing context. Edge cases: empty state (no data to display), loading state (skeleton/spinner), error state (retry button), partial data (some fields missing), race conditions (stale closures in useEffect cleanup), memory leaks (unsubscribed listeners, unclosed WebSockets)."
    }
  ],
  "interviewAnswer": "For React coding challenges, focus on: (1) Custom hooks — build useLocalStorage, useDebounce, useIntersectionObserver from scratch. (2) Compound components — implement Tabs or Accordion without external libraries. (3) State management — use useReducer + Context to create a mini state management system. (4) Performance — React.memo, useMemo, useCallback, virtualization with react-window. (5) Testing — RTL with msw for API mocking, test loading/error/success states. (6) Edge cases — empty states, race conditions, memory leaks, error boundaries. Write clean, TypeScript-friendly code with proper error handling.",
  "interviewQuestions": [
    {
      "question": "Implement a useLocalStorage custom hook.",
      "answer": "function useLocalStorage(key, initialValue) { const [value, setValue] = useState(() => { try { const item = localStorage.getItem(key); return item !== null ? JSON.parse(item) : initialValue; } catch { return initialValue; } }); useEffect(() => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.error('localStorage error', e); } }, [key, value]); return [value, setValue]; }. Handle SSR (no localStorage), JSON parse errors, quota exceeded."
    },
    {
      "question": "Implement a compound Tabs component.",
      "answer": "Create TabContext. Tabs component provides context with activeTab and setActiveTab. Tab reads context, sets activeTab on click. TabPanel reads context, renders only when active. Pattern: export { Tabs, Tab, TabPanel } as compound components. Parent manages state, children consume via useContext. Flexible API allows any rendering structure."
    },
    {
      "question": "Build a search input with debounce (300ms).",
      "answer": "function useDebounce(value, delay) { const [debounced, setDebounced] = useState(value); useEffect(() => { const timer = setTimeout(() => setDebounced(value), delay); return () => clearTimeout(timer); }, [value, delay]); return debounced; }. Usage: const debouncedQuery = useDebounce(query, 300); useEffect(() => { fetchResults(debouncedQuery); }, [debouncedQuery]);"
    },
    {
      "question": "Implement a mini-Redux with useReducer + Context.",
      "answer": "Create a Provider that holds useReducer(state, reducer). Create two contexts: StateContext and DispatchContext. Export useDispatch() and useSelector(selector) hooks. useSelector subscribes to state changes and returns selected slice. Provider wraps the app. This gives Redux-like architecture without the library."
    },
    {
      "question": "Build a controlled form with validation.",
      "answer": "State: { values, errors, touched }. Validation function returns errors object. onChange: update values, validate field, update errors. onSubmit: validate all, if no errors, submit. Show errors only after first blur (touched field). Use useReducer for complex forms. Handle async validation (email uniqueness) with debounce. Dynamic fields: store as array in state, add/remove with index."
    },
    {
      "question": "Implement a simple virtualized list (render only visible items).",
      "answer": "Track scroll position. Calculate which items are in the visible viewport. Render only those items + a small buffer above and below. Maintain the total height of the list via a spacer div. On scroll, recalculate visible range. Basic formula: startIdx = Math.floor(scrollTop / rowHeight); endIdx = Math.min(startIdx + visibleCount + buffer, items.length). In production: use react-window or react-virtuoso."
    },
    {
      "question": "Handle a race condition in useEffect data fetching.",
      "answer": "Use an abort controller or a local flag: useEffect(() => { let cancelled = false; fetchData().then(data => { if (!cancelled) setData(data); }).catch(err => { if (!cancelled) setError(err); }); return () => { cancelled = true; }; }, [id]);. Cleaner: AbortController — signal.abort() cancels the fetch. Cancel the effect when component unmounts or dependencies change before the async operation completes."
    },
    {
      "question": "Build a reusable ErrorBoundary component.",
      "answer": "class ErrorBoundary extends React.Component { state = { hasError: false, error: null }; static getDerivedStateFromError(error) { return { hasError: true, error }; } componentDidCatch(error, info) { logErrorToService(error, info); } render() { if (this.state.hasError) return this.props.fallback || <h1>Something went wrong</h1>; return this.props.children; } }. Usage: <ErrorBoundary fallback={<ErrorScreen />}><MyComponent /></ErrorBoundary>."
    },
    {
      "question": "How would you optimize a slow component that renders a large list?",
      "answer": "(1) Virtualization: only render visible rows (react-window). (2) React.memo: prevent re-render when props haven't changed. (3) useMemo: memoize row computations. (4) Stable callbacks: avoid recreating event handlers on each render. (5) Key: stable, unique keys per item (index only as last resort). (6) Windowing: use FixedSizeList for uniform heights, VariableSizeList for dynamic."
    },
    {
      "question": "Implement an accordion using compound components.",
      "answer": "Accordion context provides { openIndex, setOpenIndex, allowMultiple }. AccordionItem reads context, renders header (clickable, calls setOpenIndex) and content (visible only when openIndex matches). For allowMultiple: keep a Set of open indices. Basic: single open (toggle). Advanced: multiple open + close all option. Animation: CSS max-height transition or framer-motion AnimatePresence."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:650px;\"><defs><marker id=\"rcArr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0,8 3,0 6\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"325\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Component Architecture Patterns</text><rect x=\"40\" y=\"55\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. Custom Hooks: useLocalStorage()</text><rect x=\"350\" y=\"55\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"480\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. Compound: &lt;Tabs&gt;&lt;Tab&gt;</text><rect x=\"40\" y=\"110\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"135\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. Render Props: DataProvider</text><rect x=\"350\" y=\"110\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"480\" y=\"135\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. HOC: withAuth(), withLogger()</text><rect x=\"40\" y=\"165\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"170\" y=\"190\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">5. Context + useReducer = Mini-Redux</text><rect x=\"350\" y=\"165\" width=\"260\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"480\" y=\"190\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">6. Error Boundary: catch + fallback</text><rect x=\"40\" y=\"230\" width=\"570\" height=\"35\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"325\" y=\"252\" fill=\"#f87171\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Key: Test behavior, not implementation | Handle loading/error/empty/success states | Memoize wisely</text></svg>",
  "codeExamples": [
    {
      "title": "Mini-Redux with useReducer + Context",
      "useCase": "State management without external libraries",
      "code": "const StoreContext = createContext();\nconst DispatchContext = createContext();\n\nfunction StoreProvider({ reducer, initialState, children }) {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <DispatchContext.Provider value={dispatch}>\n      <StoreContext.Provider value={state}>\n        {children}\n      </StoreContext.Provider>\n    </DispatchContext.Provider>\n  );\n}\n\nfunction useDispatch() {\n  return useContext(DispatchContext);\n}\n\nfunction useSelector(selector) {\n  const state = useContext(StoreContext);\n  return selector(state);\n}\n\n// Usage:\nconst cartReducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_ITEM\":\n      return { ...state,\n        items: [...state.items, action.payload] };\n    case \"REMOVE_ITEM\":\n      return { ...state,\n        items: state.items.filter(i => i.id !== action.id) };\n    default: return state;\n  }\n};\n\nfunction Cart() {\n  const items = useSelector(s => s.items);\n  const dispatch = useDispatch();\n  return items.map(item =>\n    <div key={item.id}>\n      {item.name}\n      <button onClick={() =>\n        dispatch({ type: \"REMOVE_ITEM\", id: item.id })}>×</button>\n    </div>\n  );\n}",
      "description": "Split contexts (state vs dispatch) prevent unnecessary re-renders. Components only re-render when their selected state changes."
    },
    {
      "title": "Compound Tabs Component",
      "useCase": "Flexible tab UI without external library",
      "code": "const TabsContext = createContext();\n\nfunction Tabs({ defaultTab, children }) {\n  const [activeTab, setActiveTab] = useState(defaultTab);\n  return (\n    <TabsContext.Provider value={{ activeTab, setActiveTab }}>\n      {children}\n    </TabsContext.Provider>\n  );\n}\n\nfunction Tab({ id, children }) {\n  const { activeTab, setActiveTab } = useContext(TabsContext);\n  return (\n    <button\n      className={activeTab === id ? \"active\" : \"\"}\n      onClick={() => setActiveTab(id)}\n    >\n      {children}\n    </button>\n  );\n}\n\nfunction TabPanel({ id, children }) {\n  const { activeTab } = useContext(TabsContext);\n  if (activeTab !== id) return null;\n  return <div className=\"tab-panel\">{children}</div>;\n}\n\n// Usage:\n<Tabs defaultTab=\"profile\">\n  <Tab id=\"profile\">Profile</Tab>\n  <Tab id=\"settings\">Settings</Tab>\n  <TabPanel id=\"profile\"><UserProfile /></TabPanel>\n  <TabPanel id=\"settings\"><SettingsForm /></TabPanel>\n</Tabs>",
      "description": "Compound components share implicit state via Context. Parent provides state + setters, children consume them. Flexible, declarative API."
    },
    {
      "title": "Intersection Observer Custom Hook",
      "useCase": "Lazy loading and infinite scroll",
      "code": "function useIntersectionObserver(\n  ref, { threshold = 0, rootMargin = \"0px\", enabled = true } = {}\n) {\n  const [isIntersecting, setIsIntersecting] = useState(false);\n\n  useEffect(() => {\n    if (!enabled || !ref.current) return;\n\n    const observer = new IntersectionObserver(\n      ([entry]) => setIsIntersecting(entry.isIntersecting),\n      { threshold, rootMargin }\n    );\n\n    observer.observe(ref.current);\n    return () => observer.disconnect();\n  }, [ref, threshold, rootMargin, enabled]);\n\n  return isIntersecting;\n}\n\n// Usage: infinite scroll\nfunction Feed() {\n  const sentinelRef = useRef();\n  const isVisible = useIntersectionObserver(\n    sentinelRef, { rootMargin: \"100px\" }\n  );\n\n  useEffect(() => {\n    if (isVisible && !loading) loadMore();\n  }, [isVisible]);\n\n  return (\n    <div>\n      {posts.map(p => <Post key={p.id} post={p} />)}\n      <div ref={sentinelRef} />\n    </div>\n  );\n}",
      "description": "Custom hook encapsulates IntersectionObserver logic. The sentinel div triggers when scrolled into view, enabling infinite scroll."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does useLocalStorage hook need to handle?",
      "options": [
        "Only string values",
        "JSON serialization/deserialization, SSR, parse errors, quota exceeded",
        "Only in component state",
        "Requires Redux"
      ],
      "answer": 1,
      "explanation": "useLocalStorage must handle: JSON parse errors, SSR (no localStorage), quota exceeded exceptions, and sync across tabs."
    },
    {
      "question": "Which pattern uses Context to share implicit state between parent and children?",
      "options": [
        "Render Props",
        "Higher-Order Component",
        "Compound Components",
        "Custom Hooks"
      ],
      "answer": 2,
      "explanation": "Compound components share state via Context. Parent manages state, children consume it."
    },
    {
      "question": "What is the main advantage of splitting state and dispatch into separate contexts?",
      "options": [
        "Smaller bundle size",
        "Prevents unnecessary re-renders (components using dispatch don't re-render on state change)",
        "Faster initial render",
        "Better TypeScript support"
      ],
      "answer": 1,
      "explanation": "Components that only dispatch actions don't need to re-render when state changes. Separate contexts prevent this."
    },
    {
      "question": "Which React feature prevents re-render when props haven't changed?",
      "options": [
        "useMemo",
        "useCallback",
        "React.memo",
        "useRef"
      ],
      "answer": 2,
      "explanation": "React.memo wraps a component to skip re-rendering if props are equal (shallow comparison)."
    },
    {
      "question": "What does the cleanup function in useEffect prevent?",
      "options": [
        "Memory leaks (unsubscribed listeners, stale closures)",
        "Slow renders",
        "Bundle size increase",
        "TypeScript errors"
      ],
      "answer": 0,
      "explanation": "Cleanup prevents memory leaks by unsubscribing, canceling timers, aborting fetches, and disconnecting observers."
    },
    {
      "question": "What is the purpose of an Error Boundary?",
      "options": [
        "Handle async errors",
        "Catch rendering errors in child components and show fallback UI",
        "Validate props",
        "Optimize performance"
      ],
      "answer": 1,
      "explanation": "Error boundaries catch errors during rendering, lifecycle methods, and constructors in the child tree below them."
    }
  ]
};
