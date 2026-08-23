export const mern_state_management = {
  "id": "mern-state-management",
  "title": "MERN State Management",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "State management in MERN covers both frontend (React state) and backend (session/token state).",
    "React state options: useState (local), useReducer (complex), Context API (global), Redux/Zustand (large apps).",
    "Server state (API data): React Query/TanStack Query for caching, refetching, and syncing with the server.",
    "Backend state: JWT for stateless auth, Redis for caching/sessions, MongoDB for persistent data."
  ],
  "laymanDefinition": "State management is like a restaurant's order system. The waiter's notepad (useState) tracks one table's order. The manager's board (Context/Redux) shows all tables. The kitchen screen (React Query) syncs with the computer system (server) to show order status. The pantry inventory (Redis) caches what ingredients are available without checking the main storage (MongoDB).",
  "deepDive": [
    {
      "heading": "Local State (useState/useReducer)",
      "text": "useState: simple values, form inputs, toggles. useReducer: complex state logic, multiple sub-values, next state depends on previous. useState example: const [count, setCount] = useState(0). useReducer: const [state, dispatch] = useReducer(reducer, initialState)."
    },
    {
      "heading": "Global State (Context API)",
      "text": "React.createContext + Provider + useContext. Good for: theme, auth user, language/locale. Avoid: frequently updating data (re-renders all consumers). Split contexts to avoid unnecessary re-renders. AuthContext: provides user, login, logout. ThemeContext: provides theme, toggleTheme."
    },
    {
      "heading": "Server State (React Query)",
      "text": "TanStack Query manages server data: caching, background refetching, pagination, optimistic updates. useQuery: fetch data with key and fetcher function. useMutation: create/update/delete with automatic cache invalidation. Devtools for debugging. Reduces boilerplate vs manual fetch + useState + useEffect."
    },
    {
      "heading": "Redux/Zustand for Large Apps",
      "text": "Redux Toolkit: slices, createAsyncThunk for async actions, createSelector for memoization. Zustand: simpler API, no providers, create store with set function. Both solve: predictable state updates, devtools, middleware (persist, immer). Choose Zustand for simplicity, Redux for large team standards."
    },
    {
      "heading": "Backend State Patterns",
      "text": "JWT: stateless user session state. Redis: caching expensive queries, session store, rate limiting counters. MongoDB: persistent application data. Server-side state reduces frontend complexity � compute on backend, send ready-to-use data."
    }
  ],
  "interviewAnswer": "Choose state management based on scope: useState for component state, Context for global app state, React Query for server data, Redux/Zustand for complex client state. Avoid over-engineering � start simple and add complexity as needed. Cache server data with React Query to minimize API calls.",
  "interviewQuestions": [
    {
      "question": "What are the React state management options?",
      "answer": "useState (local), useContext (global), useReducer (complex), Redux/Zustand (large apps), React Query (server state)."
    },
    {
      "question": "What is React Query used for?",
      "answer": "Server state management: caching API data, background refetching, pagination, optimistic updates, and cache invalidation."
    },
    {
      "question": "What is the difference between useState and useReducer?",
      "answer": "useState for simple values. useReducer for complex state with multiple sub-values where next state depends on previous."
    },
    {
      "question": "When should you use Context API?",
      "answer": "For truly global state that changes infrequently: auth user, theme, language. Not for frequently changing data."
    },
    {
      "question": "What is Redux Toolkit?",
      "answer": "The modern, recommended way to write Redux. Includes createSlice, createAsyncThunk, createSelector, and RTK Query."
    },
    {
      "question": "What is Zustand?",
      "answer": "A small, fast state management library with a simple API. No providers needed. Good alternative to Redux for smaller apps."
    },
    {
      "question": "What is the purpose of caching server state?",
      "answer": "Reduce API calls, provide instant data on screen, refetch in background to keep data fresh, handle offline gracefully."
    },
    {
      "question": "How does React Query handle cache invalidation?",
      "answer": "queryClient.invalidateQueries([\"key\"]) marks cached queries as stale and triggers refetch."
    },
    {
      "question": "What is optimistic update?",
      "answer": "Updating the UI immediately before the server confirms, then reverting if the request fails. Provides instant feedback."
    },
    {
      "question": "How do you share state between components?",
      "answer": "Lift state up to common ancestor with props, use Context API, or use state management library (Redux/Zustand)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">MERN State Management</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">useState</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Local state</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">useContext</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Global state</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">React Query</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Server state</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redux/Zustand</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Complex state</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redis</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend cache</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MERN State Management</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">React: useState, Context, React Query, Re</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">dux. Backend: JWT, Redis, MongoDB. Choose</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> by scope and complexity.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">State Management: From local useState to global Re</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">dux. Cache server data with React Query.</text></svg>",
  "codeExamples": [
    {
      "title": "React Query Setup",
      "useCase": "Server state management with caching.",
      "code": "import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';\nimport { ReactQueryDevtools } from '@tanstack/react-query-devtools';\nimport api from '../services/api';\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 5 * 60 * 1000,\n      cacheTime: 10 * 60 * 1000,\n      retry: 1,\n      refetchOnWindowFocus: false\n    }\n  }\n});\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <YourApp />\n      <ReactQueryDevtools />\n    </QueryClientProvider>\n  );\n}\n\nfunction ItemsList() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ['items'],\n    queryFn: () => api.get('/items').then(r => r.data),\n  });\n  if (isLoading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n  return data.map(item => <div key={item._id}>{item.name}</div>);\n}",
      "description": "React Query setup with QueryClientProvider and a basic fetch query."
    },
    {
      "title": "useMutation with Optimistic Update",
      "useCase": "Optimistic UI updates.",
      "code": "import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nfunction useCreateItem() {\n  const queryClient = useQueryClient();\n\n  return useMutation({\n    mutationFn: (newItem) => api.post('/items', newItem),\n    onMutate: async (newItem) => {\n      await queryClient.cancelQueries(['items']);\n      const previous = queryClient.getQueryData(['items']);\n      queryClient.setQueryData(['items'], (old) => [...old, newItem]);\n      return { previous };\n    },\n    onError: (err, newItem, context) => {\n      queryClient.setQueryData(['items'], context.previous);\n    },\n    onSettled: () => queryClient.invalidateQueries(['items']),\n  });\n}",
      "description": "useMutation with optimistic update and automatic rollback on error."
    },
    {
      "title": "Zustand Store",
      "useCase": "Simple global state management.",
      "code": "import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nconst useCartStore = create(\n  persist(\n    (set, get) => ({\n      items: [],\n      total: 0,\n      addItem: (item) =>\n        set((state) => ({\n          items: [...state.items, item],\n          total: state.total + item.price,\n        })),\n      removeItem: (id) =>\n        set((state) => ({\n          items: state.items.filter(i => i._id !== id),\n          total: state.items.filter(i => i._id !== id).reduce((s, i) => s + i.price, 0),\n        })),\n      clearCart: () => set({ items: [], total: 0 }),\n    }),\n    { name: 'cart-storage' }\n  )\n);\n\nfunction Cart() {\n  const { items, total, addItem, removeItem } = useCartStore();\n  return (\n    <div>\n      {items.map(item => (\n        <div key={item._id}>{item.name} - <button onClick={() => removeItem(item._id)}>Remove</button></div>\n      ))}\n      <div>Total: ${total}</div>\n    </div>\n  );\n}",
      "description": "Zustand store with persist middleware for cart state management."
    },
    {
      "title": "Context API for Auth",
      "useCase": "Global auth state with Context.",
      "code": "import { createContext, useContext, useReducer } from 'react';\n\nconst AuthContext = createContext();\n\nconst initialState = { user: null, token: null, loading: true };\n\nfunction authReducer(state, action) {\n  switch (action.type) {\n    case 'LOGIN':\n      return { ...state, user: action.payload.user, token: action.payload.token, loading: false };\n    case 'LOGOUT':\n      return { ...state, user: null, token: null, loading: false };\n    case 'SET_LOADING':\n      return { ...state, loading: action.payload };\n    default:\n      return state;\n  }\n}\n\nexport function AuthProvider({ children }) {\n  const [state, dispatch] = useReducer(authReducer, initialState);\n  return (\n    <AuthContext.Provider value={{ ...state, dispatch }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nexport const useAuth = () => useContext(AuthContext);",
      "description": "Auth state management with Context API and useReducer for predictable state transitions."
    },
    {
      "title": "Redis Backend Caching",
      "useCase": "Cache API responses for performance.",
      "code": "const redis = require('redis');\nconst client = redis.createClient({ url: process.env.REDIS_URL });\n\nconst cacheMiddleware = (duration) => {\n  return async (req, res, next) => {\n    const key = `cache:${req.originalUrl}`;\n    const cached = await client.get(key);\n    if (cached) {\n      return res.json(JSON.parse(cached));\n    }\n    const originalJson = res.json.bind(res);\n    res.json = (body) => {\n      client.setEx(key, duration, JSON.stringify(body));\n      originalJson(body);\n    };\n    next();\n  };\n};\n\nrouter.get('/items', cacheMiddleware(300), getItems);",
      "description": "Redis caching middleware for Express API responses with configurable TTL."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is React Query primarily used for?",
      "options": [
        "Animations",
        "Server state management",
        "Form validation",
        "CSS styling"
      ],
      "answer": 1,
      "explanation": "React Query manages server state: caching, refetching, and syncing with the backend."
    },
    {
      "question": "What is the simplest React state hook?",
      "options": [
        "useReducer",
        "useState",
        "useContext",
        "useRef"
      ],
      "answer": 1,
      "explanation": "useState is the simplest hook for local component state."
    },
    {
      "question": "When should you use Context API?",
      "options": [
        "For all state",
        "For infrequently changing global state",
        "For form inputs",
        "For animation state"
      ],
      "answer": 1,
      "explanation": "Context API is best for global state that changes infrequently like auth and theme."
    },
    {
      "question": "What does staleTime configure in React Query?",
      "options": [
        "How long before data is considered stale",
        "Cache expiration",
        "Retry delay",
        "Refetch interval"
      ],
      "answer": 0,
      "explanation": "staleTime determines how long data is considered fresh before a background refetch."
    },
    {
      "question": "What library is simpler than Redux for global state?",
      "options": [
        "MobX",
        "Zustand",
        "Flux",
        "Recoil"
      ],
      "answer": 1,
      "explanation": "Zustand provides a simpler API than Redux with no providers needed."
    },
    {
      "question": "What does optimistic update mean?",
      "options": [
        "Slower updates",
        "Update UI before server confirms",
        "Skip validation",
        "Cache only"
      ],
      "answer": 1,
      "explanation": "Optimistic updates show the result immediately and revert if the server request fails."
    },
    {
      "question": "MERN State Management — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "MERN State Management — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "MERN State Management — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "MERN State Management — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
