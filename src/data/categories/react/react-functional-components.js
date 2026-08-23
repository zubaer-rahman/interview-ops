export const react_functional_components = {
  "id": "react-functional-components",
  "title": "React Functional Components",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Functional components are plain JavaScript functions that accept props and return JSX.",
    "With hooks (useState, useEffect), functional components can manage state and side effects.",
    "They are simpler, more concise, and easier to test than class components.",
    "Functional components are the modern standard for React development since React 16.8."
  ],
  "laymanDefinition": "Think of functional components as LEGO instruction cards. Each card says 'Here are pieces (props), here's what to build (JSX).' Before hooks, you needed complex machines (classes). Now each card can also say 'remember this color' (useState) or 'fetch these pieces' (useEffect).",
  "deepDive": [
    {
      "heading": "What Is a Functional Component?",
      "text": "A JavaScript function that accepts props and returns JSX. No this, no render() method, no lifecycle methods - the function IS the render."
    },
    {
      "heading": "Hooks - The Game Changer",
      "text": "React 16.8 introduced hooks: useState for state, useEffect for side effects, useContext for context. Hooks enable stateful logic reuse without classes."
    },
    {
      "heading": "Functional vs Class Components",
      "text": "Functional: less boilerplate, no this binding, easier testing, composition over inheritance. React recommends functional components for all new code."
    },
    {
      "heading": "Pure Functional Components",
      "text": "Should be pure functions of props - same props always return same UI. Side effects go in useEffect, not the function body."
    }
  ],
  "interviewAnswer": "Functional components are JS functions that accept props and return JSX. With hooks (useState, useEffect, useReducer), they manage state and side effects, equivalent to class components with less boilerplate. Modern React exclusively uses functional components with hooks.",
  "interviewQuestions": [
    {
      "question": "What is a functional component?",
      "answer": "A JS function taking props and returning JSX. With hooks, manages state and side effects."
    },
    {
      "question": "Advantages over class components?",
      "answer": "Less boilerplate, no this binding, easier testing, hooks enable logic reuse, better tree-shaking, smaller bundles."
    },
    {
      "question": "Can functional components have state?",
      "answer": "Yes, via useState: const [count, setCount] = useState(0). Also useReducer for complex state."
    },
    {
      "question": "How do they handle side effects?",
      "answer": "useEffect: useEffect(() => { fetch('/api/data').then(setData); }, []);"
    },
    {
      "question": "Why called stateless originally?",
      "answer": "Before 16.8, they couldn't manage state. Hooks made them fully featured."
    },
    {
      "question": "How to optimize against re-renders?",
      "answer": "React.memo, useMemo, useCallback, useRef, proper dependency arrays."
    },
    {
      "question": "What happens on re-render?",
      "answer": "Entire function re-executes. Hooks persist state via fiber node."
    },
    {
      "question": "Can they throw errors?",
      "answer": "Yes, caught by error boundaries. Hooks must be called before the throw."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrFC\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Functional Component Lifecycle with Hooks</text><rect x=\"40\" y=\"55\" width=\"290\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"185\" y=\"75\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1. Component Mounts</text><line x1=\"185\" y1=\"105\" x2=\"185\" y2=\"135\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrFC)\"/><rect x=\"40\" y=\"135\" width=\"290\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"185\" y=\"155\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2. useEffect (after render)</text><line x1=\"185\" y1=\"175\" x2=\"185\" y2=\"205\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrFC)\"/><rect x=\"40\" y=\"205\" width=\"290\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"185\" y=\"225\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3. State/Props Change</text><line x1=\"185\" y1=\"245\" x2=\"185\" y2=\"275\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrFC)\"/><rect x=\"40\" y=\"275\" width=\"290\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"185\" y=\"295\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">4. useEffect Cleanup + Re-run</text><line x1=\"185\" y1=\"315\" x2=\"185\" y2=\"340\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrFC)\"/><rect x=\"40\" y=\"340\" width=\"290\" height=\"28\" rx=\"4\" fill=\"#2a2f45\" stroke=\"#f87171\" stroke-width=\"1\"/><text x=\"185\" y=\"359\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Unmount: useEffect cleanup runs</text><rect x=\"370\" y=\"55\" width=\"290\" height=\"310\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"515\" y=\"78\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Available Hooks</text><rect x=\"385\" y=\"95\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"115\" fill=\"#6c9fff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useState() - Local state</text><rect x=\"385\" y=\"135\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"155\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useEffect() - Side effects</text><rect x=\"385\" y=\"175\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"195\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useContext() - Context access</text><rect x=\"385\" y=\"215\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"235\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useReducer() - Complex state</text><rect x=\"385\" y=\"255\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"275\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useMemo() - Memoized values</text><rect x=\"385\" y=\"295\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"315\" fill=\"#98c379\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useCallback() - Memoized functions</text><rect x=\"385\" y=\"335\" width=\"260\" height=\"34\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"355\" fill=\"#6c9fff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useRef() - Mutable references</text></svg>",
  "codeExamples": [
    {
      "title": "Counter with useState",
      "useCase": "Local state",
      "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}",
      "description": "useState returns state variable and setter. Each setter call triggers re-render."
    },
    {
      "title": "Props with Defaults",
      "useCase": "Reusable component",
      "code": "function Greeting({ name, greeting = 'Hello' }) {\n  return <div className=\"greeting\"><span>{greeting}, {name}!</span></div>;\n}\n<Greeting name=\"Alice\" />  // Hello, Alice!\n<Greeting name=\"Bob\" greeting=\"Hi\" />  // Hi, Bob!",
      "description": "Destructure props with defaults. Component is pure function of props."
    },
    {
      "title": "Data Fetching Pattern",
      "useCase": "Async data with loading/error",
      "code": "function UserData({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    let cancelled = false;\n    fetch('/api/users/' + userId)\n      .then(res => res.json())\n      .then(data => { if (!cancelled) { setUser(data); setLoading(false); } });\n    return () => { cancelled = true; };\n  }, [userId]);\n  if (loading) return <div>Loading...</div>;\n  return <div>{user.name}</div>;\n}",
      "description": "Cleanup flag prevents setState on unmounted component."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a functional component?",
      "options": [
        "Class extending Component",
        "JS function taking props returning JSX",
        "DOM manipulator",
        "CSS-in-JS"
      ],
      "answer": 1,
      "explanation": "Plain JS function with props and JSX return."
    },
    {
      "question": "How do functional components manage state?",
      "options": [
        "Cannot manage state",
        "useState hook",
        "this.state",
        "Constructor"
      ],
      "answer": 1,
      "explanation": "useState adds state to functional components."
    },
    {
      "question": "What replaces lifecycle methods?",
      "options": [
        "Nothing",
        "useEffect hook",
        "Same as class components",
        "useState"
      ],
      "answer": 1,
      "explanation": "useEffect covers mount/update/unmount."
    },
    {
      "question": "Benefit over class components?",
      "options": [
        "Faster",
        "Less boilerplate, no this, hooks reuse",
        "Support inheritance",
        "Can use jQuery"
      ],
      "answer": 1,
      "explanation": "Simpler code with hooks."
    },
    {
      "question": "When do they re-render?",
      "options": [
        "Browser refresh",
        "Props/state changes or parent re-render",
        "Explicit call only",
        "Every second"
      ],
      "answer": 1,
      "explanation": "Re-render on state, props, or parent change."
    },
    {
      "question": "Can they throw errors?",
      "options": [
        "No",
        "Yes, hooks before throw",
        "Only wrapped in try",
        "Throwing ignored"
      ],
      "answer": 1,
      "explanation": "Errors caught by boundaries; hooks unconditional."
    }
  ]
};
