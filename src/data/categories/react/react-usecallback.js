export const react_usecallback = {
  "id": "react-usecallback",
  "title": "React useCallback",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "useCallback returns a memoized version of a callback function that only changes when dependencies change.",
    "Its primary purpose is to prevent unnecessary re-renders of child components wrapped in React.memo.",
    "useCallback(fn, deps) is semantically equivalent to useMemo(() => fn, deps).",
    "Do not use useCallback for inline event handlers in the same component - the optimization only helps when passing callbacks to memoized children."
  ],
  "laymanDefinition": "useCallback is like giving someone your business card instead of rewriting your phone number on a napkin every time you meet. The function itself stays the same (same reference in memory) until its dependencies change. This matters because React.memo checks if props changed by reference - if you pass an inline arrow function as a prop, it is a new function reference every render, so React.memo sees a \"change\" every time and re-renders the child unnecessarily. useCallback keeps the reference stable so React.memo can actually skip renders. Like useMemo, do not add useCallback everywhere - only where profiling shows it helps.",
  "deepDive": [
    {
      "heading": "The Referential Identity Problem",
      "text": "Every time a React component re-renders, all inline functions defined in the component body are recreated as new function objects in memory. Consider: <Child onClick={() => handleClick(id)} />. The arrow function is a new function reference on every render. If Child is wrapped in React.memo, it sees the onClick prop change on every parent render and cannot skip re-rendering. useCallback solves this by returning the same function reference (identity) across renders as long as dependencies have not changed. The function is only recreated when its closure variables actually change. This is the core reason useCallback exists - not to make the component faster directly, but to enable React.memo on children to work effectively."
    },
    {
      "heading": "useCallback in the Component Lifecycle",
      "text": "During the render phase, useCallback checks its dependency array using Object.is comparison. If all dependencies are unchanged, it returns the previously memoized function reference. If any dependency changed, it stores and returns the new function. The old function becomes eligible for garbage collection (assuming no other references). A critical subtlety: if the callback uses state values from a closure, those values are captured at the time the callback was created. With stale closures, the callback may reference outdated state. Proper dependency management via exhaustive-deps lint rule is essential. React 18s automatic batching does not change useCallback behavior."
    },
    {
      "heading": "Common Misconceptions and Overuse",
      "text": "The most common mistake is wrapping every event handler in useCallback, assuming it is a free optimization. In reality: (1) useCallback adds overhead - the dependency comparison runs on every render. (2) For handlers used on native DOM elements (<button onClick={handler}>), React.memo on DOM elements is irrelevant. (3) For handlers passed to non-memoized children, useCallback provides zero benefit because the child re-renders anyway. (4) The dependency array must be correct - omitting a dependency can cause the callback to reference stale values, leading to subtle bugs. (5) If the callback does expensive work internally, useMemo on the result is more appropriate than useCallback on the function."
    },
    {
      "heading": "useCallback vs useMemo for Functions",
      "text": "useCallback(fn, deps) is exactly equivalent to useMemo(() => fn, deps). The React team added useCallback as syntactic sugar because memoizing functions is such a common pattern (passing callbacks to children). Use useCallback when you want to memoize a function reference. Use useMemo when you want to memoize a computed value (object, array, primitive). A common pattern: useCallback for callbacks, useMemo for data objects. Both hooks share the same internal implementation - useCallback is literally implemented as useMemo in React's source code."
    },
    {
      "heading": "Best Practices for Production Use",
      "text": "(1) Always pair useCallback with React.memo on the receiving child - without React.memo, useCallback provides no rendering benefit. (2) Use the exhaustive-deps lint rule to catch missing dependencies. (3) In custom hooks, always return memoized callbacks via useCallback so consumers can memoize effectively. (4) For callbacks used in useEffect dependencies, useCallback helps prevent unnecessary effect re-runs. (5) In React 18 with automatic batching, multiple state updates inside a callback are batched automatically - useCallback does not affect this. (6) Consider using useEvent (React 18 experimental) or useMemoizedFn (from ahooks) for callbacks that should always have a stable identity regardless of dependencies."
    }
  ],
  "interviewAnswer": "useCallback memoizes a function reference between re-renders. It is equivalent to useMemo(() => fn, deps) and exists to enable React.memo child components to skip re-rendering when the function identity is the only thing that changed. Without useCallback, every render creates a new function reference, making React.memo ineffective for children that receive callbacks. The optimization only provides value when: (1) the receiving child is wrapped in React.memo, AND (2) the function is recreated on every render unnecessarily. Do not wrap every handler in useCallback - profile first. Incorrect dependency arrays cause stale closures, caught by the exhaustive-deps lint rule.",
  "interviewQuestions": [
    {
      "question": "What problem does useCallback solve?",
      "answer": "It preserves the reference identity of a function between renders so that React.memo-wrapped child components can detect that the callback prop hasnt actually changed and skip re-rendering. Without useCallback, every render creates a new function object, defeating React.memo."
    },
    {
      "question": "How is useCallback implemented internally?",
      "answer": "useCallback(fn, deps) is identical to useMemo(() => fn, deps). React specialized it as a separate hook for developer convenience and readability. Internally, both store the memoized value in the hooks list of the fiber node and compare dependencies with Object.is on each render."
    },
    {
      "question": "Does useCallback prevent the function from being recreated?",
      "answer": "Yes and no. The function expression still runs on every render (because it is in the component body). But the OLD function reference is reused from the cache if dependencies have not changed. The new function object created during render is discarded. This is why the function body captures closure values at render time."
    },
    {
      "question": "What is the only scenario where useCallback provides a rendering performance benefit?",
      "answer": "When the callback is passed as a prop to a child component wrapped in React.memo. Without React.memo, the child re-renders regardless of prop identity. With React.memo and stable callback references, the child's render can be skipped entirely."
    },
    {
      "question": "What happens if you use useCallback without a dependency array?",
      "answer": "useCallback(fn) with no array runs the callback creation every render and returns a new function each time - it provides zero memoization. With an empty array useCallback(fn, []), the function reference is stable forever but captures the initial closure values, which is usually incorrect for callbacks that use state or props."
    },
    {
      "question": "How does useCallback interact with useEffect?",
      "answer": "If a callback is listed as a dependency of useEffect, wrapping it in useCallback prevents the effect from re-running on every render. Without useCallback, the effect sees a new callback reference on every render and re-runs unnecessarily."
    },
    {
      "question": "Can useCallback cause stale closures?",
      "answer": "Yes. If you omit a state variable from the dependency array, the callback captures the value at the time it was last memoized (not the current value). This leads to bugs where the callback uses outdated state. The exhaustive-deps lint rule catches this."
    },
    {
      "question": "What is the performance cost of adding useCallback unnecessarily?",
      "answer": "(1) The dependecy array comparison runs on every render (Object.is on each element). (2) Extra memory allocation for the memoization cache. (3) React must store and manage additional hook state in the fiber. For most handlers, the cost of creating a new function is negligible compared to these overheads."
    },
    {
      "question": "In concurrent mode, does useCallback behave differently?",
      "answer": "No. useCallback behaves identically in concurrent mode. However, because renders can be interrupted, the memoized function reference from an interrupted render is discarded in favor of the previous committed render's reference. This ensures consistency."
    },
    {
      "question": "What is the recommended alternative to useCallback for custom hooks?",
      "answer": "Custom hooks should always wrap returned functions in useCallback so consumers can use React.memo effectively. Libraries like ahooks provide useMemoizedFn which always returns a stable reference while always calling the latest function body, combining the best of both approaches."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">useCallback Mechanism</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"72.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Component Render</text><text x=\"130\" y=\"89.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">New inline function created</text><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"125\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"142.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">useCallback Check</text><text x=\"130\" y=\"159.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Object.is on deps array</text><line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"195\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"195\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"75\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Unchanged?</text><text x=\"75\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Return cached fn ref</text><rect x=\"140\" y=\"195\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"185\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Changed?</text><text x=\"185\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Return NEW fn ref</text><text x=\"60\" y=\"260\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"start\">Child memo sees stable ref => skip render</text><text x=\"185\" y=\"260\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"start\">Child memo sees new ref => re-render</text></svg>",
  "codeExamples": [
    {
      "title": "Preventing Unnecessary Child Renders with useCallback",
      "useCase": "Without useCallback, the child re-renders on every keystroke in the parent form",
      "code": "const SubmitButton = React.memo(({ onPress, label }) => {\n  console.log(\"SubmitButton render\");\n  return <button onClick={onPress}>{label}</button>;\n});\n\nfunction RegistrationForm() {\n  const [name, setName] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n\n  const handleSubmit = useCallback(() => {\n    console.log(\"Submit with:\", { name, email });\n    api.register({ name, email });\n  }, [name, email]);\n\n  return (\n    <div>\n      <input value={name} onChange={e => setName(e.target.value)} />\n      <input value={email} onChange={e => setEmail(e.target.value)} />\n      <SubmitButton onPress={handleSubmit} label=\"Register\" />\n    </div>\n  );\n}",
      "description": "Without useCallback, every keystroke creates a new handleSubmit function, causing SubmitButton to re-render despite React.memo. With useCallback, the reference changes only when name or email change."
    },
    {
      "title": "Stable Callback in a Custom Hook with useCallback",
      "useCase": "Custom hooks should return memoized functions for consumer optimization",
      "code": "function useDebouncedValue(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  const clear = useCallback(() => {\n    setDebounced(value);\n  }, [value]);\n\n  return [debounced, useCallback(() => setDebounced(\"\"), [])];\n}\n\nfunction SearchPage() {\n  const [query, setQuery] = useState(\"\");\n  const [debounced, clearSearch] = useDebouncedValue(query, 300);\n\n  useEffect(() => {\n    if (debounced) fetch(\"/search?q=\" + debounced);\n  }, [debounced]);\n\n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} />\n      <ClearButton onClear={clearSearch} />\n    </div>\n  );\n}",
      "description": "The useDebouncedValue hook wraps returned functions in useCallback so that the consuming component can pass them to memoized children without causing extra renders."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is useCallback(fn, deps) equivalent to?",
      "options": [
        "useEffect(() => fn, deps)",
        "useMemo(() => fn, deps)",
        "useRef(fn)",
        "useState(() => fn)"
      ],
      "answer": 1,
      "explanation": "useCallback is syntax sugar over useMemo(() => fn, deps). Both return a memoized reference."
    },
    {
      "question": "Which condition is necessary for useCallback to improve render performance?",
      "options": [
        "The function must do expensive work",
        "The child component must be wrapped in React.memo",
        "The function must have no dependencies",
        "The function must be async"
      ],
      "answer": 1,
      "explanation": "useCallback only helps when the child receiving the callback is wrapped in React.memo, allowing the child to detect that the callback reference is stable and skip re-rendering."
    },
    {
      "question": "What happens if a dependency is missing from the useCallback array?",
      "options": [
        "The callback always uses the latest value anyway",
        "The callback captures a stale value from when it was last memoized",
        "React throws a warning but auto-fixes it",
        "The dependency is inferred automatically"
      ],
      "answer": 1,
      "explanation": "Missing dependencies cause stale closures where the callback references outdated state. The exhaustive-deps lint rule catches this."
    },
    {
      "question": "What is the overhead of adding useCallback unnecessarily?",
      "options": [
        "No overhead - it is always free",
        "Dependency comparison on every render + memory for cache + hook state management",
        "It slows down the first render only",
        "It only affects production builds"
      ],
      "answer": 1,
      "explanation": "Every useCallback call adds Object.is comparison of each dependency on every render, plus memory overhead for the cache. The cost is small but nonzero."
    },
    {
      "question": "Does useCallback prevent the function body from being evaluated on every render?",
      "options": [
        "No, the function expression still evaluates every render to produce the new function object. useCallback just discards it if deps unchanged",
        "Yes, the function body is skipped entirely when deps are unchanged",
        "It depends on the JavaScript engine",
        "Only in strict mode"
      ],
      "answer": 1,
      "explanation": "The function expression (e.g., () => handleClick()) runs every render as part of normal JS execution. useCallback only decides whether to return the old or new function reference."
    },
    {
      "question": "When is the most effective use case for useCallback?",
      "options": [
        "When the callback is passed to a native DOM element",
        "When the callback is passed to a memoized child and the callback depends on props/state",
        "When the callback is used in setTimeout",
        "When the callback is async"
      ],
      "answer": 1,
      "explanation": "The ideal scenario: a React.memo child receives a callback that depends on changing state, and without useCallback would cause the child to re-render on every parent render."
    }
  ]
};
