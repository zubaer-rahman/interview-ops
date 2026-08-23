export const react_redux_toolkit = {
  "id": "react-redux-toolkit",
  "title": "React Redux Toolkit",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Redux Toolkit (RTK) is the official, opinionated way to write Redux logic, reducing boilerplate significantly.",
    "RTK provides configureStore, createSlice, createAsyncThunk, and createSelector utilities.",
    "createSlice generates actions and reducers automatically from a 'slice' definition.",
    "RTK includes Redux Thunk and Redux DevTools by default."
  ],
  "laymanDefinition": "Redux Toolkit is like a meal prep kit vs cooking from scratch. With plain Redux, you buy individual ingredients, chop, season, and cook everything separately. With RTK, you get pre-portioned ingredients with recipe cards (createSlice) - you still cook, but much faster and with less cleanup. The result is the same meal, but RTK eliminates the tedious parts.",
  "deepDive": [
    {
      "heading": "configureStore",
      "text": "Replaces createStore with sensible defaults: combines reducers, adds middleware (Thunk by default), enables DevTools. Single call sets up the entire store: configureStore({ reducer: { counter: counterSlice.reducer } })."
    },
    {
      "heading": "createSlice",
      "text": "Takes a name, initial state, and reducers object (key-value pairs of functions). Generates action creators and reducer automatically. reducers: { increment(state) { state.value += 1 } } - uses Immer for mutable-style syntax (immutable under the hood)."
    },
    {
      "heading": "createAsyncThunk",
      "text": "Generates action types (pending/fulfilled/rejected) for async operations. Takes a type string and async function returning a promise. The reducer handles extraReducers for these action types."
    },
    {
      "heading": "createEntityAdapter",
      "text": "Utility for normalized state: provides CRUD reducers and selectors for entity collections. Manages IDs array and entities map with operations like addOne, updateOne, removeOne."
    }
  ],
  "interviewAnswer": "Redux Toolkit (RTK) is the official Redux package that eliminates boilerplate. configureStore sets up the store with defaults. createSlice generates reducers and actions with Immer-powered immutable updates. createAsyncThunk simplifies async action patterns. RTK includes Thunk, DevTools, and middleware by default, making Redux development significantly faster and less error-prone.",
  "interviewQuestions": [
    {
      "question": "What is Redux Toolkit?",
      "answer": "The official, opinionated Redux package that reduces boilerplate. Includes configureStore, createSlice, createAsyncThunk."
    },
    {
      "question": "How does createSlice work?",
      "answer": "Takes name, initialState, reducers. Generates action creators and reducer. Uses Immer for mutable update syntax."
    },
    {
      "question": "What is configureStore?",
      "answer": "Replaces createStore. Combines reducers, adds Thunk middleware, enables DevTools, all with sensible defaults."
    },
    {
      "question": "What is createAsyncThunk?",
      "answer": "Generates pending/fulfilled/rejected action types for async operations. Handles loading states automatically."
    },
    {
      "question": "How does Immer work in RTK?",
      "answer": "Allows writing mutable update syntax (state.value += 1) in reducers. Immer converts it to immutable updates under the hood."
    },
    {
      "question": "What is createEntityAdapter?",
      "answer": "Manages normalized entity state: stores IDs + entities map. Provides built-in CRUD reducers and selectors."
    },
    {
      "question": "Does RTK replace Redux?",
      "answer": "RTK is Redux - it's the recommended way to write Redux logic. It wraps Redux core with utilities."
    },
    {
      "question": "What does createSelector do?",
      "answer": "Creates memoized selector functions that only recompute when inputs change. Optimizes useSelector performance."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrRTK\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Redux Toolkit Architecture</text><rect x=\"40\" y=\"55\" width=\"620\" height=\"100\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"350\" y=\"78\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">configureStore</text><rect x=\"55\" y=\"90\" width=\"290\" height=\"50\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"200\" y=\"108\" fill=\"#e8eaed\" font-family=\"monospace\" font-size=\"10\" text-anchor=\"middle\">createSlice</text><text x=\"200\" y=\"125\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Generates actions + reducers</text><rect x=\"355\" y=\"90\" width=\"290\" height=\"50\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"500\" y=\"108\" fill=\"#e8eaed\" font-family=\"monospace\" font-size=\"10\" text-anchor=\"middle\">createAsyncThunk</text><text x=\"500\" y=\"125\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Pending/fulfilled/rejected</text><line x1=\"350\" y1=\"155\" x2=\"350\" y2=\"185\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrRTK)\"/><rect x=\"40\" y=\"185\" width=\"620\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"208\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Immer-powered reducers (mutable syntax, immutable output)</text><text x=\"350\" y=\"228\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">state.counter.value += 1 → produces new immutable state</text><line x1=\"350\" y1=\"245\" x2=\"350\" y2=\"272\" stroke=\"#e5c07b\" stroke-width=\"2\" marker-end=\"url(#arrRTK)\"/><rect x=\"40\" y=\"272\" width=\"620\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"292\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Built-in: Redux Thunk + DevTools + Middleware</text><text x=\"350\" y=\"312\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Zero-config setup, no manual middleware wiring</text></svg>",
  "codeExamples": [
    {
      "title": "Counter with Redux Toolkit",
      "useCase": "RTK basics",
      "code": "import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    decrement: (state) => { state.value -= 1; },\n    incrementByAmount: (state, action) => { state.value += action.payload; },\n  },\n});\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions;\n\nconst store = configureStore({ reducer: { counter: counterSlice.reducer } });\n\n// Component\nfunction Counter() {\n  const value = useSelector(state => state.counter.value);\n  const dispatch = useDispatch();\n  return (\n    <div>\n      <span>{value}</span>\n      <button onClick={() => dispatch(increment())}>+</button>\n      <button onClick={() => dispatch(decrement())}>-</button>\n      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>\n    </div>\n  );\n}",
      "description": "createSlice generates actions (increment, decrement, incrementByAmount) and reducer. configureStore sets up the store. Immer lets state.value += 1 work immutably."
    },
    {
      "title": "Async Thunk with createAsyncThunk",
      "useCase": "API data fetching",
      "code": "import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\n\nexport const fetchUsers = createAsyncThunk(\n  'users/fetchAll',\n  async () => { const res = await fetch('/api/users'); return res.json(); }\n);\n\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: { items: [], loading: false, error: null },\n  reducers: {},\n  extraReducers: (builder) => {\n    builder\n      .addCase(fetchUsers.pending, (state) => { state.loading = true; })\n      .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })\n      .addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });\n  },\n});\n\n// Component\nfunction UserList() {\n  const dispatch = useDispatch();\n  const { items, loading } = useSelector(state => state.users);\n  useEffect(() => { dispatch(fetchUsers()); }, []);\n  if (loading) return <div>Loading...</div>;\n  return <ul>{items.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
      "description": "createAsyncThunk automatically dispatches pending/fulfilled/rejected actions. extraReducers handles them with Immer syntax."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is Redux Toolkit?",
      "options": [
        "Alternative to Redux",
        "Official Redux with less boilerplate",
        "State management for Vue",
        "React Router"
      ],
      "answer": 1,
      "explanation": "RTK is the official Redux package reducing boilerplate."
    },
    {
      "question": "What does createSlice generate?",
      "options": [
        "Actions and reducers automatically",
        "Just reducers",
        "Just actions",
        "Middleware"
      ],
      "answer": 0,
      "explanation": "Generates both actions and reducers."
    },
    {
      "question": "How does Immer enable mutable syntax?",
      "options": [
        "It mutates state directly",
        "Converts mutable syntax to immutable updates",
        "Skips immutability",
        "Creates copies manually"
      ],
      "answer": 1,
      "explanation": "Immer translates mutable code to immutable state."
    },
    {
      "question": "What does configureStore include by default?",
      "options": [
        "Nothing",
        "Thunk middleware and DevTools",
        "Redux Saga",
        "React Router"
      ],
      "answer": 1,
      "explanation": "configureStore includes Thunk and DevTools."
    },
    {
      "question": "What is createAsyncThunk for?",
      "options": [
        "Synchronous actions",
        "Async operations with auto-generated pending/fulfilled/rejected",
        "Creating slices",
        "Combining reducers"
      ],
      "answer": 1,
      "explanation": "Simplifies async action patterns."
    },
    {
      "question": "What is createEntityAdapter?",
      "options": [
        "Manages normalized entity state with CRUD helpers",
        "Creates slices",
        "Configures store",
        "Handles routing"
      ],
      "answer": 0,
      "explanation": "Provides CRUD reducers and selectors for entities."
    }
  ]
};
