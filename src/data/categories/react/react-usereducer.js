export const react_usereducer = {
  "id": "react-usereducer",
  "title": "React useReducer",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "useReducer manages complex state logic with actions and a reducer function, similar to Redux but built into React.",
    "It is preferred over useState when state transitions depend on previous state in complex ways or when multiple state values need to update together.",
    "The reducer is a pure function (state, action) => newState that must not have side effects.",
    "useReducer enables predictable state management and makes testing state logic easier by extracting the reducer into a standalone pure function."
  ],
  "laymanDefinition": "useReducer is like having a centralized rulebook (reducer) for how state can change. Instead of directly setting state with setState, you dispatch actions that describe what happened (like \"INCREMENT\" or \"ADD_TODO\") and let the reducer decide how the state should change based on those rules. This makes state updates predictable and debuggable because all the logic lives in one function. It is most useful when state is an object with multiple fields that change together, or when the next state depends on the previous state in complex ways. Think of it as a mini Redux without the extra library.",
  "deepDive": [
    {
      "heading": "The Reducer Pattern: State, Action, Dispatch",
      "text": "useReducer follows the same pattern as Redux. The three core concepts: (1) State - a single value (often an object) representing the current state. (2) Action - an object describing what happened, typically with a type property and optional payload: { type: \"ADD_TODO\", payload: { text: \"Learn React\" } }. (3) Dispatch - a function that sends actions to the reducer: dispatch({ type: \"INCREMENT\" }). The reducer receives the current state and an action and returns the new state. The reducer must be a pure function - no side effects, no API calls, no random values. This purity makes the state transitions predictable and testable."
    },
    {
      "heading": "useReducer vs useState: When to Choose Which",
      "text": "useState is simpler and sufficient for: independent primitive values, simple toggle or counter state, and state with only one or two fields. useReducer is better for: (1) Complex state objects with multiple fields that depend on each other (e.g., a form with name, email, errors, isSubmitting). (2) State transitions that require the previous state to compute the next state. (3) State logic scattered across multiple event handlers - centralizing it in the reducer makes it manageable. (4) State that needs to be tested independently of the component. (5) State where some actions require fetching or async work (combined with useEffect). Rule of thumb: if you find yourself calling setState three or more times in a single event handler, consider useReducer."
    },
    {
      "heading": "Reducer Best Practices and Patterns",
      "text": "(1) Use action types as constants (or string literals in a switch). (2) Always return a new state object - do not mutate the previous state. (3) Use TypeScript for action types with discriminated unions for type safety. (4) Extract the reducer function outside the component for testability. (5) Use action creators (functions that return action objects) to encapsulate action shape. (6) For async workflows, dispatch actions inside useEffect: dispatch({ type: \"FETCH_START\" }) before the fetch, then dispatch({ type: \"FETCH_SUCCESS\", payload: data }) or FETCH_ERROR. (7) Use immer's produce for complex nested state updates to avoid deep cloning. (8) Keep reducers pure - no Math.random(), Date.now(), or API calls inside the reducer."
    },
    {
      "heading": "useReducer with Context for Global State",
      "text": "useReducer combined with React Context provides a lightweight state management solution without external libraries. Pattern: (1) Create a context: const CounterContext = createContext(). (2) Create a provider component that uses useReducer and passes [state, dispatch] via context. (3) Wrap the app with the provider. (4) Consumer components call useContext(CounterContext) to read state and dispatch actions. This pattern avoids prop drilling for state that many components need. Unlike Redux, it does not have middleware or devtools built in, but for medium-sized apps it is often sufficient. The context value should be memoized if performance is a concern (split into separate contexts for state and dispatch)."
    },
    {
      "heading": "Testing Reducers and useReducer Components",
      "text": "Reducer functions are pure functions, making them trivially testable: call the reducer with known state and action, assert the returned state. This is the biggest advantage over useState - the state logic can be tested without rendering components. For testing the component that uses useReducer: (1) Use React Testing Library with act() to wrap dispatches. (2) Test that dispatching an action produces the expected UI change. (3) For async reducers (dispatching in useEffect), use waitFor or findBy queries. (4) The reducer itself can be tested with plain Jest: expect(reducer(initialState, { type: \"INCREMENT\" })).toEqual({ count: 1 })."
    }
  ],
  "interviewAnswer": "useReducer is a React hook for managing complex state transitions with a reducer function and dispatched actions. It is preferable to useState when state logic is complex (multiple fields, interdependent updates), when the next state depends heavily on the previous state, or when state logic should be testable as a pure function. The reducer is always a pure function that takes (state, action) and returns newState. useReducer can be combined with React Context for lightweight global state management without Redux. The tradeoff is more boilerplate than useState, but much better predictability and testability for complex state scenarios.",
  "interviewQuestions": [
    {
      "question": "What is the difference between useState and useReducer?",
      "answer": "useState is simpler - directly sets a new value. useReducer uses a reducer function and actions to update state. useReducer is better for complex state (multiple fields, interdependent updates) while useState is better for simple independent state values."
    },
    {
      "question": "Why must a reducer be a pure function?",
      "answer": "Purity ensures predictable state transitions. If the reducer had side effects (API calls, random values, mutations), the same action on the same state could produce different results, breaking the predictability that makes useReducer valuable. Pure reducers are also testable and support time-travel debugging."
    },
    {
      "question": "What is the typical shape of an action object?",
      "answer": "An action is usually an object with a type property (string or symbol describing the action) and an optional payload property with data: { type: \"ADD_TODO\", payload: { id: 1, text: \"Learn React\" } }. Some conventions use { type, payload } from Redux, while others use { type, ...rest }."
    },
    {
      "question": "How do you handle async operations with useReducer?",
      "answer": "Async logic should not be inside the reducer. Instead, perform async work in useEffect or event handlers, then dispatch different actions based on the result: dispatch({ type: \"FETCH_START\" }), then on success dispatch({ type: \"FETCH_SUCCESS\", payload: data }), or on error dispatch({ type: \"FETCH_ERROR\", payload: error })."
    },
    {
      "question": "Can useReducer replace Redux?",
      "answer": "For medium-sized apps, useReducer with Context can replace Redux. However, Redux provides middleware (thunk, saga), DevTools, action normalization, and performance optimizations that useReducer + Context does not have. For large enterprise apps, Redux is still the standard."
    },
    {
      "question": "How do you test a reducer?",
      "answer": "Since reducers are pure functions, you call them directly with known inputs and assert outputs: expect(reducer(initialState, { type: \"INCREMENT\" })).toEqual({ count: 1 }). No component rendering needed."
    },
    {
      "question": "What is the initializer function in useReducer?",
      "answer": "useReducer accepts an optional third argument - an initializer function: useReducer(reducer, initialArg, init). The init function receives initialArg and returns the initial state. This is useful for computing initial state from props or localStorage."
    },
    {
      "question": "What happens if the reducer mutates state directly?",
      "answer": "React compares state using Object.is. If you mutate the previous state object (e.g., state.count++) instead of returning a new object, React will not detect the change and the component will not re-render. Always return a new object from the reducer."
    },
    {
      "question": "How does useReducer work with React 18 concurrent mode?",
      "answer": "useReducer works consistently in concurrent mode. dispatch from useReducer does NOT trigger an immediate re-render in concurrent mode - it schedules an update. This means reading state synchronously after dispatch might return the old state. For synchronous reads, use useRef to track the latest state."
    },
    {
      "question": "What is the performance benefit of useReducer over multiple useState calls?",
      "answer": "useReducer avoids multiple re-renders caused by sequential setState calls. A single dispatch can update multiple state fields simultaneously, resulting in one render instead of multiple renders. React 18s automatic batching already mitigates this for useState, but useReducer still provides cleaner code organization for complex updates."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">useReducer Architecture</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"72.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Component</text><text x=\"130\" y=\"89.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Triggers action via dispatch()</text><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"125\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"142.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">dispatch({ type, payload })</text><text x=\"130\" y=\"159.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Sends action to reducer</text><line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"195\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"195\" width=\"200\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Reducer Function</text><text x=\"130\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">(state, action) => newState</text><line x1=\"130\" y1=\"245\" x2=\"130\" y2=\"260\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"260\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"277.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">New State</text><text x=\"130\" y=\"294.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Component re-renders</text><text x=\"250\" y=\"78\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">User clicks, API responds, etc.</text><text x=\"250\" y=\"148\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Action describes what happened</text><text x=\"250\" y=\"222\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Pure function: no side effects</text><text x=\"250\" y=\"282\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">React detects change via Object.is</text></svg>",
  "codeExamples": [
    {
      "title": "Shopping Cart with useReducer",
      "useCase": "Multiple state fields updated atomically on each action",
      "code": "function cartReducer(state, action) {\n  switch (action.type) {\n    case \"ADD_ITEM\":\n      const existing = state.items.find(i => i.id === action.payload.id);\n      if (existing) {\n        return {\n          ...state,\n          items: state.items.map(i =>\n            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i\n          )\n        };\n      }\n      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };\n    case \"REMOVE_ITEM\":\n      return { ...state, items: state.items.filter(i => i.id !== action.payload) };\n    case \"APPLY_DISCOUNT\":\n      return { ...state, discount: action.payload };\n    default:\n      return state;\n  }\n}\n\nfunction Checkout() {\n  const [state, dispatch] = useReducer(cartReducer, { items: [], discount: 0 });\n  const total = state.items.reduce((s, i) => s + i.price * i.qty, 0) - state.discount;\n\n  return (\n    <div>\n      {state.items.map(item => (\n        <div key={item.id}>\n          <span>{item.name} x{item.qty} - ${item.price * item.qty}</span>\n          <button onClick={() => dispatch({ type: \"REMOVE_ITEM\", payload: item.id })}>x</button>\n        </div>\n      ))}\n      <p>Total: ${Math.max(0, total)}</p>\n      <button onClick={() => dispatch({ type: \"APPLY_DISCOUNT\", payload: 10 })}>Apply $10 off</button>\n    </div>\n  );\n}",
      "description": "useReducer centralizes cart logic (add, remove, discount) into a single reducer, making state transitions predictable and testable. Multiple state fields (items array, total) update together in one dispatch."
    },
    {
      "title": "Async Data Fetching with useReducer",
      "useCase": "Handle loading, success, and error states in one reducer",
      "code": "function fetchReducer(state, action) {\n  switch (action.type) {\n    case \"FETCH_START\":  return { ...state, loading: true, error: null };\n    case \"FETCH_SUCCESS\": return { ...state, loading: false, data: action.payload };\n    case \"FETCH_ERROR\":  return { ...state, loading: false, error: action.payload };\n    case \"RESET\":        return { data: null, loading: false, error: null };\n    default: return state;\n  }\n}\n\nfunction UserProfile({ userId }) {\n  const [state, dispatch] = useReducer(fetchReducer, {\n    data: null, loading: false, error: null\n  });\n\n  useEffect(() => {\n    dispatch({ type: \"FETCH_START\" });\n    fetch(\"/api/users/\" + userId)\n      .then(r => { if (!r.ok) throw new Error(\"Not found\"); return r.json(); })\n      .then(data => dispatch({ type: \"FETCH_SUCCESS\", payload: data }))\n      .catch(err => dispatch({ type: \"FETCH_ERROR\", payload: err.message }));\n  }, [userId]);\n\n  if (state.loading) return <Spinner />;\n  if (state.error) return <Error message={state.error} />;\n  if (!state.data) return null;\n  return <ProfileCard user={state.data} />;\n}",
      "description": "The reducer cleanly handles three states (loading, success, error) without complex useState logic. Each state transition is explicit and predictable."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a reducer function?",
      "options": [
        "A function that creates React components",
        "A pure function (state, action) => newState",
        "A function that handles HTTP requests",
        "A function that renders JSX"
      ],
      "answer": 1,
      "explanation": "A reducer is a pure function that takes the current state and an action and returns the new state. It must not have side effects."
    },
    {
      "question": "Which is a valid action object for useReducer?",
      "options": [
        "{ type: \"INCREMENT\" }",
        "{ action: \"INCREMENT\" }",
        "{ event: \"click\" }",
        "{ reducer: \"count\" }"
      ],
      "answer": 0,
      "explanation": "Actions conventionally have a type property describing the action. The payload property is optional."
    },
    {
      "question": "When should you prefer useReducer over useState?",
      "options": [
        "Always - useReducer is always better",
        "When state logic is complex with interdependent fields",
        "When there is only one state value",
        "Never - useState is always better"
      ],
      "answer": 1,
      "explanation": "useReducer excels when state is an object with multiple fields that update together, or when state transitions depend heavily on previous state."
    },
    {
      "question": "Can a reducer have side effects like API calls?",
      "options": [
        "Yes, reducers commonly call APIs",
        "No, reducers must be pure functions without side effects",
        "Only if wrapped in useEffect",
        "Yes, but only with async/await"
      ],
      "answer": 1,
      "explanation": "Reducers must be pure. Side effects like API calls belong in useEffect or event handlers, which then dispatch actions to the reducer with the results."
    },
    {
      "question": "What happens if you mutate state directly in a reducer?",
      "options": [
        "React automatically detects the mutation",
        "React cannot detect the change (Object.is comparison fails) and the component does not re-render",
        "React throws an error",
        "The mutation is automatically deep-cloned"
      ],
      "answer": 1,
      "explanation": "React uses Object.is to compare state. Direct mutation keeps the same reference, so React skips the re-render. Always return a new object from the reducer."
    },
    {
      "question": "How do you test a reducer?",
      "options": [
        "Using React Testing Library to render the component",
        "By calling the reducer directly as a pure function and asserting the returned state",
        "By using Enzyme to simulate dispatches",
        "Reducers cannot be tested"
      ],
      "answer": 1,
      "explanation": "Reducers are trivially testable because they are pure functions. Call reducer(state, action) and assert on the returned state. No component rendering required."
    }
  ]
};
