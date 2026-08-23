export const react_zustand = {
  "id": "react-zustand",
  "title": "Zustand State Management",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Zustand is a lightweight, minimal state management library for React with a simple hook-based API.",
    "No boilerplate: no providers, no reducers, no actions — just a store created via create().",
    "Stores return a hook that gives direct access to state and setter functions.",
    "Built-in support for middleware (persist, devtools, immer) and selectors for performance."
  ],
  "laymanDefinition": "Zustand is like a shared whiteboard in an office. Anyone (component) can walk up and write or erase something directly without filling out forms (actions) or going through a receptionist (reducer). The whiteboard is always visible to everyone, and changes appear instantly. Unlike Redux which is like a bank vault requiring official forms, Zustand is like a shared notebook — fast, simple, and direct.",
  "deepDive": [
    {
      "heading": "Creating a Store",
      "text": "Zustand stores are created with create(callback) where the callback receives set and get. The set function merges state (like React setState). The store returns a custom hook. Example: const useStore = create((set, get) => ({ count: 0, increment: () => set(state => ({ count: state.count + 1 })) })). No Provider wrapper needed — the hook is used directly in any component. Multiple stores are created by calling create() multiple times, each independent."
    },
    {
      "heading": "Using Store in Components",
      "text": "Components access store state by calling the store hook: const count = useStore(state => state.count). Selector functions enable fine-grained subscriptions — the component only re-renders when the selected slice changes. Without a selector, the entire store is subscribed. You can also destructure multiple values: const { count, increment } = useStore(). For equality, Zustand uses Object.is by default, or you can pass a custom equality function."
    },
    {
      "heading": "Async Actions and Middleware",
      "text": "Async actions are straightforward — just use async/await inside the store: fetchUsers: async () => { set({ loading: true }); const data = await api.getUsers(); set({ users: data, loading: false }); }. Middleware wraps the store: persist (localStorage/AsyncStorage), immer (mutable syntax), devtools (Redux DevTools), and subscribeWithSelector. Example: const useStore = create(persist(devtools(storeLogic), { name: \"app-state\" }))."
    },
    {
      "heading": "Zustand vs Context vs Redux",
      "text": "Context API re-renders ALL consumers when any value changes, requiring manual splitting. Redux has heavy boilerplate (actions, reducers, dispatch). Zustand provides selector-based subscriptions (no extra re-renders), zero boilerplate, and no provider nesting. For small-to-medium apps, Zustand is often the best choice. For large enterprise apps with complex async workflows and multiple teams, Redux Toolkit's structure and devtools may still be preferred. Zustand bundles to ~1KB minified vs Redux Toolkit's ~12KB."
    },
    {
      "heading": "Advanced Patterns",
      "text": "Slices pattern: split large stores into multiple slice files and combine them. Computed values: derive state outside the store using useMemo or selector functions. Actions outside React: call store.getState() or store.setState() directly. Subscriptions: useStore.subscribe(listener) for external integrations. Immer middleware enables mutable syntax: set(produce(state => { state.count++ }))."
    }
  ],
  "interviewAnswer": "Zustand is a lightweight state management library for React that provides a hook-based API with no boilerplate. Stores are created via create() and return a custom hook. Components subscribe to specific state slices via selectors, preventing unnecessary re-renders. Zustand supports middleware (persist, devtools, immer), async actions, and multiple independent stores. Unlike Context, Zustand provides selector-based subscriptions. Unlike Redux, it requires no action types, reducers, or Provider wrappers. Zustand is ideal for small-to-medium apps where simplicity matters.",
  "interviewQuestions": [
    {
      "question": "How is Zustand different from Redux?",
      "answer": "Zustand has no boilerplate: no action types, no reducers, no Provider wrapper. Stores are created with create() and used directly as hooks. State updates use direct setters instead of dispatch. Selectors provide fine-grained subscriptions. Bundle size is ~1KB vs Redux Toolkit's ~12KB."
    },
    {
      "question": "How do selectors work in Zustand?",
      "answer": "The store hook accepts a selector function: useStore(state => state.count). The component only re-renders when the selected value changes. This is similar to Redux's useSelector but built directly into the store. No selector = subscribe to entire store."
    },
    {
      "question": "How do you handle async operations in Zustand?",
      "answer": "Async functions are defined directly in the store using set(): fetchUsers: async () => { set({ loading: true }); const data = await api.get(); set({ users: data, loading: false }); }. No middleware needed for basic async."
    },
    {
      "question": "What middleware does Zustand support?",
      "answer": "persist (localStorage/AsyncStorage), immer (mutable syntax), devtools (Redux DevTools integration), subscribeWithSelector, and redux (compatible with Redux middleware). Middleware wraps the store: create(persist(devtools(store)))"
    },
    {
      "question": "How do you handle multiple slices/domains with Zustand?",
      "answer": "Option 1: create multiple independent stores (recommended). Option 2: use the slices pattern — define each slice as a function that receives set/get and returns its state + actions, then combine them into one store."
    },
    {
      "question": "How does Zustand prevent unnecessary re-renders?",
      "answer": "Through selector-based subscriptions. A component that uses useStore(state => state.count) only re-renders when count changes. Other state changes in the same store do not trigger re-render. Zustand uses Object.is for equality by default."
    },
    {
      "question": "Can Zustand be used outside React?",
      "answer": "Yes. store.getState() and store.setState() work outside React components. This is useful for integrating with non-React code, router transitions, or event handlers. store.subscribe(listener) enables external subscriptions."
    },
    {
      "question": "What is the Immer middleware in Zustand?",
      "answer": "Allows mutable update syntax while maintaining immutability: set(produce(state => { state.items.push(newItem) })). This simplifies updates to deeply nested state without spread operators."
    },
    {
      "question": "How does Zustand compare to Context API?",
      "answer": "Context re-renders ALL consumers when the context value changes. Zustand provides selector-based subscriptions — only components consuming the changed slice re-render. Zustand also avoids Provider nesting and works outside React."
    },
    {
      "question": "How do you test Zustand stores?",
      "answer": "Stores are plain functions — test them directly: create store, call actions, assert state. No component wrapping needed. For component tests, render the component normally — Zustand integrates naturally with React Testing Library."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 320\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:650px;\"><defs><marker id=\"zArr\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"630\" height=\"300\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"325\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Zustand Architecture</text><rect x=\"40\" y=\"55\" width=\"150\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"115\" y=\"83\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Component A</text><rect x=\"250\" y=\"55\" width=\"150\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"325\" y=\"83\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Component B</text><rect x=\"460\" y=\"55\" width=\"150\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"535\" y=\"83\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Component C</text><line x1=\"115\" y1=\"105\" x2=\"115\" y2=\"145\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#zArr)\"/><line x1=\"325\" y1=\"105\" x2=\"325\" y2=\"145\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#zArr)\"/><line x1=\"535\" y1=\"105\" x2=\"535\" y2=\"145\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#zArr)\"/><rect x=\"40\" y=\"150\" width=\"570\" height=\"80\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"325\" y=\"175\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Zustand Store (single or multiple)</text><text x=\"325\" y=\"195\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">create((set, get) =&gt; ({ state, actions }))</text><text x=\"325\" y=\"215\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Selectors: useStore(s =&gt; s.count) — fine-grained subscriptions</text><line x1=\"115\" y1=\"230\" x2=\"115\" y2=\"260\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#zArr)\"/><line x1=\"535\" y1=\"230\" x2=\"535\" y2=\"260\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#zArr)\"/><rect x=\"40\" y=\"260\" width=\"570\" height=\"30\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"325\" y=\"280\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Middleware: persist (localStorage) | devtools | immer | subscribeWithSelector</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Zustand Counter",
      "useCase": "Simple state with direct access",
      "code": "import { create } from \"zustand\";\n\nconst useCounterStore = create((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 })),\n  reset: () => set({ count: 0 })\n}));\n\nfunction Counter() {\n  const count = useCounterStore((s) => s.count);\n  const { increment, decrement, reset } = useCounterStore();\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}",
      "description": "No Provider needed. Store hook used directly. Selector ensures minimal re-renders."
    },
    {
      "title": "Async Store with API Fetch",
      "useCase": "Data fetching with loading state",
      "code": "import { create } from \"zustand\";\n\nconst useUserStore = create((set) => ({\n  user: null,\n  loading: false,\n  error: null,\n  fetchUser: async (id) => {\n    set({ loading: true, error: null });\n    try {\n      const res = await fetch(`/api/users/${id}`);\n      const data = await res.json();\n      set({ user: data, loading: false });\n    } catch (err) {\n      set({ error: err.message, loading: false });\n    }\n  },\n}));\n\nfunction UserProfile({ userId }) {\n  const { user, loading, error, fetchUser } = useUserStore();\n  useEffect(() => { fetchUser(userId); }, [userId]);\n  if (loading) return <Spinner />;\n  if (error) return <Error msg={error} />;\n  return <div>{user.name}</div>;\n}",
      "description": "Async actions are defined directly in the store. No middleware needed for basic async."
    },
    {
      "title": "Persist Middleware",
      "useCase": "Save state to localStorage",
      "code": "import { create } from \"zustand\";\nimport { persist } from \"zustand/middleware\";\n\nconst useAuthStore = create(\n  persist(\n    (set) => ({\n      token: null,\n      user: null,\n      login: async (email, password) => {\n        const res = await authApi.login(email, password);\n        set({ token: res.token, user: res.user });\n      },\n      logout: () => set({ token: null, user: null }),\n    }),\n    { name: \"auth-storage\" } // localStorage key\n  )\n);",
      "description": "persist middleware automatically syncs store state to localStorage. On reload, state is rehydrated."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Zustand's create() return?",
      "options": [
        "A provider component",
        "A custom hook",
        "A reducer",
        "A context object"
      ],
      "answer": 1,
      "explanation": "create() returns a custom hook that provides direct access to store state and actions."
    },
    {
      "question": "How do selectors help performance?",
      "options": [
        "They cache API responses",
        "Component only re-renders when selected value changes",
        "They memoize all functions",
        "They reduce bundle size"
      ],
      "answer": 1,
      "explanation": "Selector-based subscriptions ensure components only re-render when their specific slice of state changes."
    },
    {
      "question": "Which Zustand middleware saves state to localStorage?",
      "options": [
        "devtools",
        "persist",
        "immer",
        "subscribeWithSelector"
      ],
      "answer": 1,
      "explanation": "persist middleware automatically saves and rehydrates state from localStorage."
    },
    {
      "question": "Does Zustand require a Provider wrapper?",
      "options": [
        "Yes, always",
        "No, never",
        "Only for TypeScript",
        "Only for async"
      ],
      "answer": 1,
      "explanation": "Zustand does NOT require any Provider. The store hook is used directly in components."
    },
    {
      "question": "How does Zustand handle async actions?",
      "options": [
        "Requires Redux Thunk",
        "Async functions defined directly in the store using set()",
        "Requires Saga middleware",
        "Async is not supported"
      ],
      "answer": 1,
      "explanation": "Async actions are plain async functions inside the store definition that call set() on completion."
    },
    {
      "question": "What is the bundle size advantage of Zustand over Redux Toolkit?",
      "options": [
        "10x smaller (~1KB vs ~12KB)",
        "Same size",
        "Larger",
        "No difference"
      ],
      "answer": 0,
      "explanation": "Zustand is approximately 1KB minified vs Redux Toolkit at approximately 12KB."
    },
    {
      "question": "How do you create multiple independent state domains?",
      "options": [
        "Use combineReducers",
        "Create multiple stores via separate create() calls",
        "Use Provider nesting",
        "Use createContext"
      ],
      "answer": 1,
      "explanation": "Each create() call creates an independent store. Multiple stores are recommended for separate domains."
    }
  ]
};
