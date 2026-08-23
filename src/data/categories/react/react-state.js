export const react_state = {
  "id": "react-state",
  "title": "React State",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "State is data that changes over time within a component. When state changes, the component re-renders.",
    "useState is the primary hook: const [value, setValue] = useState(initial).",
    "State updates are asynchronous and batched in React 18+.",
    "State should be treated as immutable - always replace it, never mutate directly."
  ],
  "laymanDefinition": "State is like a sports scoreboard. The scoreboard shows current score. When a team scores, someone updates the number. The audience (UI) sees the new score. If the operator scribbled without pressing 'update' (setState), the audience wouldn't see the change.",
  "deepDive": [
    {
      "heading": "What is State?",
      "text": "State represents data that changes over time and affects rendering. Unlike props (from outside, read-only), state is internal and can be updated by the component."
    },
    {
      "heading": "useState Hook",
      "text": "useState(initial) returns [value, setter]. State persists across renders via fiber node. Setter can take new value or function: setCount(c => c + 1)."
    },
    {
      "heading": "Async and Batched Updates",
      "text": "setState does not update immediately. React batches multiple setState calls within an event handler into a single update. React 18 extends batching to timeouts and promises."
    },
    {
      "heading": "Immutability",
      "text": "Treat state as immutable. For objects/arrays, create a new copy instead of mutating: setUsers([...users, newUser]) or setUser({ ...user, name: 'New' })."
    }
  ],
  "interviewAnswer": "State is mutable data owned by a component. useState returns [value, setter] where the setter triggers re-render. State updates are async and batched. Never mutate state directly - always create new copies. The functional update form (setCount(c => c + 1)) is preferred when new state depends on old state.",
  "interviewQuestions": [
    {
      "question": "What is state in React?",
      "answer": "Data that changes over time within a component. When state updates, the component re-renders."
    },
    {
      "question": "How does useState work?",
      "answer": "useState(initial) returns [currentValue, setterFunction]. State persists across renders via fiber node."
    },
    {
      "question": "Are state updates synchronous?",
      "answer": "No - they are asynchronous. Multiple setState calls are batched into one update for performance."
    },
    {
      "question": "What is the functional update form?",
      "answer": "setCount(prev => prev + 1). Preferred when new state depends on previous state, avoids stale closures."
    },
    {
      "question": "How to update objects/arrays in state?",
      "answer": "Create new copies: setUsers([...users, newUser]) or setUser({ ...user, name: 'New' }). Never mutate directly."
    },
    {
      "question": "What is automatic batching?",
      "answer": "React 18 batches state updates across all contexts (event handlers, timeouts, promises), not just React events."
    },
    {
      "question": "What happens if you mutate state directly?",
      "answer": "React won't detect the change because the reference hasn't changed. No re-render occurs."
    },
    {
      "question": "Can you have multiple state variables?",
      "answer": "Yes, call useState multiple times for independent values. Use useReducer for complex state objects."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 360\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrS\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"340\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">State Update Lifecycle</text><rect x=\"40\" y=\"55\" width=\"620\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1. Event triggers setState(newValue)</text><line x1=\"350\" y1=\"100\" x2=\"350\" y2=\"128\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrS)\"/><rect x=\"40\" y=\"128\" width=\"620\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"350\" y=\"148\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2. React batches the update (async)</text><text x=\"350\" y=\"164\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Multiple setState calls in same handler are batched</text><line x1=\"350\" y1=\"173\" x2=\"350\" y2=\"200\" stroke=\"#e5c07b\" stroke-width=\"2\" marker-end=\"url(#arrS)\"/><rect x=\"40\" y=\"200\" width=\"620\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"220\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3. Component re-renders with new state</text><text x=\"350\" y=\"236\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">New VDOM tree is created and diffed</text><line x1=\"350\" y1=\"245\" x2=\"350\" y2=\"272\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrS)\"/><rect x=\"40\" y=\"272\" width=\"620\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"350\" y=\"292\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">4. DOM updated with minimal mutations</text><text x=\"350\" y=\"308\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Commit phase applies patches to real DOM</text></svg>",
  "codeExamples": [
    {
      "title": "useState with Different Data Types",
      "useCase": "State management patterns",
      "code": "function StateExamples() {\n  const [count, setCount] = useState(0);\n  const [user, setUser] = useState({ name: '', age: 0 });\n  const [items, setItems] = useState([]);\n\n  // Primitive: direct replacement\n  const increment = () => setCount(c => c + 1);\n\n  // Object: spread to preserve other fields\n  const updateName = (name) => setUser(u => ({ ...u, name }));\n\n  // Array: spread or concat for immutable update\n  const addItem = (item) => setItems(i => [...i, item]);\n\n  return <div>...</div>;\n}",
      "description": "Always create new copies for objects/arrays. Use functional updates (prev => new) for correctness."
    },
    {
      "title": "State vs Props Example",
      "useCase": "Understanding ownership",
      "code": "function Parent() {\n  const [count, setCount] = useState(0); // state owned here\n  return (\n    <div>\n      <p>Parent count: {count}</p>\n      <Child count={count} onIncrement={() => setCount(c => c + 1)} />\n    </div>\n  );\n}\nfunction Child({ count, onIncrement }) {\n  // count is a prop here - read-only\n  return <button onClick={onIncrement}>Child: {count}</button>;\n}",
      "description": "State lives in Parent (the owner). Child receives count as a prop (read-only) and calls onIncrement to request changes."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is state?",
      "options": [
        "Data from parent",
        "Internal mutable data that triggers re-render on change",
        "CSS styling",
        "Component name"
      ],
      "answer": 1,
      "explanation": "State is internal data that causes re-render when changed."
    },
    {
      "question": "What does useState return?",
      "options": [
        "A single value",
        "An array [value, setter]",
        "An object {value, setter}",
        "A tuple"
      ],
      "answer": 1,
      "explanation": "Returns [currentValue, setterFunction]."
    },
    {
      "question": "Are state updates synchronous?",
      "options": [
        "Yes, immediately",
        "No, async and batched",
        "Only in classes",
        "Only in production"
      ],
      "answer": 1,
      "explanation": "Updates are async and batched for performance."
    },
    {
      "question": "How to update object state immutably?",
      "options": [
        "Direct mutation",
        "setUser({ ...user, name: 'New' })",
        "setUser(user)",
        "user.name = 'New'"
      ],
      "answer": 1,
      "explanation": "Spread operator creates new object copy."
    },
    {
      "question": "What is functional update?",
      "options": [
        "setCount(0)",
        "setCount(c => c + 1)",
        "count++",
        "count = count + 1"
      ],
      "answer": 1,
      "explanation": "(prev => new) form uses previous state."
    },
    {
      "question": "What happens if you mutate state directly?",
      "options": [
        "Component re-renders",
        "No re-render (reference unchanged)",
        "Error thrown",
        "State resets"
      ],
      "answer": 1,
      "explanation": "Direct mutation doesn't change reference, no re-render."
    }
  ]
};
