export const react_usestate = {
  "id": "react-usestate",
  "title": "React useState",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "useState is the primary hook for adding state to functional components.",
    "const [state, setState] = useState(initialValue) returns current state and a setter.",
    "Calling the setter triggers a re-render of the component.",
    "State updates are asynchronous and batched in React 18 for performance."
  ],
  "laymanDefinition": "useState is like a scoreboard with a remote control. The scoreboard displays a number (state value). The remote has buttons (setter) to change the number. When you press a button, the scoreboard updates to show the new number, and everyone watching (the UI) sees the change. You can also press the button with a note saying 'make it one more than before' (functional update) to avoid mistakes.",
  "deepDive": [
    {
      "heading": "Basic Usage",
      "text": "const [count, setCount] = useState(0). useState takes the initial value and returns an array. Destructure it to get the current value and the updater function. The initial value is only used on the first render."
    },
    {
      "heading": "Functional Updates",
      "text": "setCount(prev => prev + 1). When the new state depends on the previous state, use the functional form. This avoids bugs with stale closures when multiple updates happen in the same render cycle."
    },
    {
      "heading": "Lazy Initial State",
      "text": "useState(() => expensiveComputation()). If the initial state is expensive to compute, pass a function instead of a value. The function only runs once (on initial render), not on every re-render."
    },
    {
      "heading": "State Update Batching",
      "text": "React 18 batches all state updates (event handlers, timeouts, promises). Multiple setState calls in the same event produce a single re-render. Use functional updates when reading state within the batch."
    }
  ],
  "interviewAnswer": "useState is the fundamental hook for functional component state. It returns [currentValue, setterFunction]. The setter triggers a re-render. Use functional updates (prev => prev + 1) when new state depends on old state. Use lazy initialization for expensive computations. State updates are async and batched. Never mutate state directly - always use the setter.",
  "interviewQuestions": [
    {
      "question": "What does useState return?",
      "answer": "An array [currentValue, setterFunction]. const [count, setCount] = useState(0)."
    },
    {
      "question": "What happens when you call the setter?",
      "answer": "The component re-renders with the new state value. If the same value (by reference), React may skip the re-render."
    },
    {
      "question": "What is a functional update?",
      "answer": "setCount(prev => prev + 1). Pass a function instead of a value. Safe when new state depends on old state."
    },
    {
      "question": "When to use lazy initialization?",
      "answer": "When initial state requires expensive computation: useState(() => computeExpensiveValue()). Runs only once."
    },
    {
      "question": "Are state updates synchronous?",
      "answer": "No - they are async and batched. Multiple setState calls trigger a single re-render."
    },
    {
      "question": "What happens if you mutate state directly?",
      "answer": "React doesn't detect the change (reference hasn't changed). No re-render occurs. Always use the setter."
    },
    {
      "question": "Can useState store objects and arrays?",
      "answer": "Yes, but always replace them immutably: setUser({ ...user, name: 'New' }). Never mutate the object directly."
    },
    {
      "question": "What is the bail out condition?",
      "answer": "If the setter is called with the same value (Object.is comparison), React skips re-rendering the children."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrUS\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">useState Hook</text><rect x=\"40\" y=\"55\" width=\"620\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"75\" fill=\"#fbbf24\" font-size=\"13\" font-family=\"monospace\" font-weight=\"bold\" text-anchor=\"middle\">const [state, setState] = useState(initialValue)</text><text x=\"350\" y=\"92\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Returns array: [currentValue, setterFunction]</text><line x1=\"130\" y1=\"105\" x2=\"130\" y2=\"135\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrUS)\"/><line x1=\"570\" y1=\"105\" x2=\"570\" y2=\"135\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrUS)\"/><rect x=\"40\" y=\"135\" width=\"180\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"155\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">state (read only)</text><text x=\"130\" y=\"172\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Current value, do not mutate</text><rect x=\"480\" y=\"135\" width=\"180\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"570\" y=\"155\" fill=\"#6c9fff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">setState(newValue)</text><text x=\"570\" y=\"172\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Triggers re-render</text><line x1=\"350\" y1=\"105\" x2=\"350\" y2=\"135\" stroke=\"#e5c07b\" stroke-width=\"2\" marker-end=\"url(#arrUS)\"/><rect x=\"220\" y=\"135\" width=\"260\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"155\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">initialValue (first render only)</text><text x=\"350\" y=\"172\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Lazy init: () => expensive()</text><line x1=\"130\" y1=\"185\" x2=\"130\" y2=\"215\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrUS)\"/><line x1=\"570\" y1=\"185\" x2=\"570\" y2=\"215\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrUS)\"/><rect x=\"40\" y=\"215\" width=\"180\" height=\"50\" rx=\"6\" fill=\"#2a2f45\"/><text x=\"130\" y=\"235\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Value used in renders</text><rect x=\"480\" y=\"215\" width=\"180\" height=\"50\" rx=\"6\" fill=\"#2a2f45\"/><text x=\"570\" y=\"235\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Can pass prev =&gt; value</text></svg>",
  "codeExamples": [
    {
      "title": "Counter with useState Patterns",
      "useCase": "All useState patterns",
      "code": "function Counter() {\n  const [count, setCount] = useState(0);\n\n  // Direct update\n  const increment = () => setCount(count + 1);\n\n  // Functional update (safe in batches)\n  const incrementBy3 = () => {\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1); // count increases by 3\n  };\n\n  // Object state\n  const [user, setUser] = useState({ name: '', age: 0 });\n  const updateName = (name) => setUser(prev => ({ ...prev, name }));\n\n  // Lazy initialization\n  const [data, setData] = useState(() => {\n    const saved = localStorage.getItem('data');\n    return saved ? JSON.parse(saved) : [];\n  });\n\n  return <div>...</div>;\n}",
      "description": "Functional updates (prev => prev + 1) are safe with batching. Object state requires immutable spread. Lazy init runs once."
    },
    {
      "title": "State with Previous Value Toggle",
      "useCase": "Boolean state patterns",
      "code": "function Toggle() {\n  const [isOn, setIsOn] = useState(false);\n\n  // Toggle: always use functional form\n  const toggle = () => setIsOn(prev => !prev);\n\n  // Reset\n  const reset = () => setIsOn(false);\n\n  // Set based on some condition\n  const updateFromServer = (value) => setIsOn(value);\n\n  return (\n    <div>\n      <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}",
      "description": "Boolean state uses functional toggle: setIsOn(prev => !prev). Reset uses direct setter call."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does useState return?",
      "options": [
        "{ value, setValue }",
        "[value, setValue]",
        "A single value",
        "A promise"
      ],
      "answer": 1,
      "explanation": "Returns array [value, setter]."
    },
    {
      "question": "What triggers component re-render?",
      "options": [
        "Reading state",
        "Calling the setter",
        "Mutating state directly",
        "Declaring useState"
      ],
      "answer": 1,
      "explanation": "Setter call triggers re-render."
    },
    {
      "question": "What is a functional update?",
      "options": [
        "setCount(0)",
        "setCount(prev => prev + 1)",
        "count++",
        "count = count + 1"
      ],
      "answer": 1,
      "explanation": "Function that receives previous state."
    },
    {
      "question": "When to use lazy initialization?",
      "options": [
        "Always",
        "For expensive initial computations",
        "Never",
        "For primitive values"
      ],
      "answer": 1,
      "explanation": "Lazy init for expensive computations."
    },
    {
      "question": "Are state updates synchronous?",
      "options": [
        "Yes",
        "No, they are async and batched",
        "Only in React 18",
        "Only with functional updates"
      ],
      "answer": 1,
      "explanation": "Updates are async and batched."
    },
    {
      "question": "What happens if you mutate state directly?",
      "options": [
        "Component re-renders",
        "No re-render (reference unchanged)",
        "Error thrown",
        "Warning shown"
      ],
      "answer": 1,
      "explanation": "Direct mutation doesn't change reference."
    }
  ]
};
