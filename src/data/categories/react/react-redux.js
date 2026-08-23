export const react_redux = {
  "id": "react-redux",
  "title": "React Redux",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Redux is a predictable state container with a single store, actions, and reducers.",
    "The store holds the entire app state as a plain JS object. Actions are dispatched to trigger state changes.",
    "Reducers are pure functions that take current state and an action, and return the new state.",
    "React-Redux provides useSelector to read state and useDispatch to dispatch actions."
  ],
  "laymanDefinition": "Redux is like a bank vault. The vault (store) contains all the money (state). To get money, you fill out a withdrawal form (action) and hand it to the teller (dispatch). The teller follows the bank's rules (reducer) to update the vault. Any bank branch (component) can submit forms and see the vault balance, but no one can just grab money from the vault directly.",
  "deepDive": [
    {
      "heading": "The Three Principles",
      "text": "1. Single source of truth: one store for entire app state. 2. State is read-only: only changed by dispatching actions. 3. Changes are made by pure functions (reducers): given current state and action, return new state."
    },
    {
      "heading": "Actions and Action Creators",
      "text": "Action: a plain object with a type property (string) and optional payload: { type: 'INCREMENT', payload: 1 }. Action creators are functions that return action objects, making actions reusable and testable."
    },
    {
      "heading": "Reducers",
      "text": "Pure functions: (state, action) => newState. Never mutate state - return new objects. Use switch statements on action.type. Combine multiple reducers via combineReducers."
    },
    {
      "heading": "React-Redux Hooks",
      "text": "useSelector(selectorFn) - subscribes to store, returns selected state slice. useDispatch() - returns dispatch function. Components re-render only when their selected state changes."
    },
    {
      "heading": "Middleware (Redux Thunk)",
      "text": "Middleware intercepts dispatched actions before they reach the reducer. Redux Thunk enables async actions: action creators return a function (instead of an object) that receives dispatch and can dispatch multiple actions (like REQUEST, SUCCESS, FAILURE)."
    }
  ],
  "interviewAnswer": "Redux is a predictable state management library with a single store, immutable state updates via pure reducers, and action-based state changes. React-Redux connects React components via useSelector (read state) and useDispatch (dispatch actions). Reducers must be pure. Async operations use middleware like Redux Thunk. DevTools enable time-travel debugging.",
  "interviewQuestions": [
    {
      "question": "What are the three principles of Redux?",
      "answer": "1. Single source of truth (one store). 2. State is read-only (actions only). 3. Changes via pure functions (reducers)."
    },
    {
      "question": "What is an action?",
      "answer": "A plain JS object with a type property (string) and optional payload describing what changed."
    },
    {
      "question": "What is a reducer?",
      "answer": "A pure function (state, action) => newState. Never mutates state, always returns a new object."
    },
    {
      "question": "How does useSelector work?",
      "answer": "Takes a selector function that extracts data from the store. Component re-renders only when the selected value changes."
    },
    {
      "question": "What is middleware?",
      "answer": "Intercepts dispatches before they reach the reducer. Thunk enables async actions returning functions."
    },
    {
      "question": "Why must reducers be pure?",
      "answer": "Predictability: same input always produces same output. Enables time-travel debugging and easy testing."
    },
    {
      "question": "What is combineReducers?",
      "answer": "Utility that combines multiple reducer functions into a single reducer, each managing its own slice of state."
    },
    {
      "question": "How does Redux handle async operations?",
      "answer": "Via middleware (Thunk/Saga). Thunk: action creator returns (dispatch) => { fetch().then(dispatch) }."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrRx\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Redux Data Flow</text><rect x=\"40\" y=\"55\" width=\"180\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"130\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">React Component</text><text x=\"130\" y=\"95\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">useSelector + useDispatch</text><line x1=\"220\" y1=\"85\" x2=\"290\" y2=\"65\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrRx)\"/><text x=\"255\" y=\"58\" fill=\"#f87171\" font-size=\"9\" text-anchor=\"middle\">dispatch(action)</text><line x1=\"220\" y1=\"85\" x2=\"290\" y2=\"105\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrRx)\"/><text x=\"255\" y=\"118\" fill=\"#6c9fff\" font-size=\"9\" text-anchor=\"middle\">state via selector</text><rect x=\"290\" y=\"55\" width=\"180\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"380\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Action</text><text x=\"380\" y=\"95\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">{ type, payload }</text><line x1=\"470\" y1=\"85\" x2=\"540\" y2=\"85\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrRx)\"/><rect x=\"540\" y=\"55\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"600\" y=\"78\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Reducer</text><text x=\"600\" y=\"95\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">(state, action)</text><line x1=\"600\" y1=\"115\" x2=\"600\" y2=\"165\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrRx)\"/><rect x=\"250\" y=\"165\" width=\"200\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"188\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Store</text><text x=\"350\" y=\"205\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Single state tree</text><line x1=\"350\" y1=\"225\" x2=\"130\" y2=\"275\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrRx)\"/><text x=\"240\" y=\"260\" fill=\"#6c9fff\" font-size=\"9\" text-anchor=\"middle\">Updated state flows back to component</text><rect x=\"40\" y=\"275\" width=\"180\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"130\" y=\"298\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Component Re-renders</text><text x=\"130\" y=\"315\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Unidirectional data flow</text></svg>",
  "codeExamples": [
    {
      "title": "Redux Counter Example",
      "useCase": "Basic Redux setup",
      "code": "// Action types\nconst INCREMENT = 'INCREMENT';\nconst DECREMENT = 'DECREMENT';\n\n// Action creators\nconst increment = (amount) => ({ type: INCREMENT, payload: amount });\nconst decrement = (amount) => ({ type: DECREMENT, payload: amount });\n\n// Reducer\nfunction counterReducer(state = { count: 0 }, action) {\n  switch (action.type) {\n    case INCREMENT: return { ...state, count: state.count + action.payload };\n    case DECREMENT: return { ...state, count: state.count - action.payload };\n    default: return state;\n  }\n}\n\n// Store\nconst store = createStore(counterReducer);\n\n// Component\nfunction Counter() {\n  const count = useSelector(state => state.count);\n  const dispatch = useDispatch();\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch(increment(1))}>+</button>\n      <button onClick={() => dispatch(decrement(1))}>-</button>\n    </div>\n  );\n}",
      "description": "Component reads state via useSelector and dispatches actions via useDispatch. Reducer returns new state immutably."
    },
    {
      "title": "Async Thunk Action",
      "useCase": "API data fetching with Redux",
      "code": "// Thunk action creator\nfunction fetchUser(id) {\n  return async (dispatch) => {\n    dispatch({ type: 'FETCH_USER_REQUEST' });\n    try {\n      const res = await fetch('/api/users/' + id);\n      const data = await res.json();\n      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });\n    } catch (err) {\n      dispatch({ type: 'FETCH_USER_FAILURE', payload: err.message });\n    }\n  };\n}\n\n// Component\nfunction UserProfile({ userId }) {\n  const dispatch = useDispatch();\n  const { user, loading, error } = useSelector(state => state.user);\n\n  useEffect(() => { dispatch(fetchUser(userId)); }, [userId]);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  return <div>{user.name}</div>;\n}",
      "description": "Thunk middleware enables async actions. The thunk dispatches REQUEST, then SUCCESS or FAILURE based on fetch outcome."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What are the three Redux principles?",
      "options": [
        "Store, component, props",
        "Single store, read-only state, pure reducers",
        "Actions, effects, selectors",
        "Provider, consumer, context"
      ],
      "answer": 1,
      "explanation": "One store, immutable actions, pure reducers."
    },
    {
      "question": "What is an action?",
      "options": [
        "A function",
        "A plain object with type",
        "A reducer",
        "A component"
      ],
      "answer": 1,
      "explanation": "Action is a plain object with type."
    },
    {
      "question": "What does a reducer return?",
      "options": [
        "Mutated state",
        "New state object",
        "Old state",
        "undefined"
      ],
      "answer": 1,
      "explanation": "Reducer returns new state object."
    },
    {
      "question": "How does useSelector work?",
      "options": [
        "Directly returns store state",
        "Takes selector, returns selected slice, triggers re-render on change",
        "Dispatch action",
        "Create store"
      ],
      "answer": 1,
      "explanation": "Selector extracts and subscribes to state slice."
    },
    {
      "question": "What does middleware do?",
      "options": [
        "Intercepts dispatches",
        "Creates store",
        "Renders components",
        "Manages props"
      ],
      "answer": 0,
      "explanation": "Middleware intercepts before reducer."
    },
    {
      "question": "Why must reducers be pure?",
      "options": [
        "Performance",
        "Predictability and testability",
        "Bundle size",
        "Security"
      ],
      "answer": 1,
      "explanation": "Pure functions enable predictable state and debugging."
    }
  ]
};
