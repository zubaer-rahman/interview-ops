export const react_usememo = {
  "id": "react-usememo",
  "title": "React useMemo",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "useMemo caches the result of an expensive computation between re-renders, recomputing only when dependencies change.",
    "It is a performance optimization, not a semantic guarantee - React may discard cached values under memory pressure.",
    "Only use useMemo for computationally expensive operations (O(n^2) or worse), not for trivial calculations.",
    "Overusing useMemo for every value can actually harm performance due to the overhead of dependency comparison."
  ],
  "laymanDefinition": "useMemo is like a notepad where you jot down the answer to a hard math problem so you don't have to solve it again unless the numbers change. When your component re-renders, instead of recalculating expensive values (like filtering a thousand items or computing a complex number), React checks the notepad and reuses the previous result if nothing changed. The key insight is that useMemo does not make the first calculation faster - it only saves time on subsequent re-renders when dependencies are unchanged. Use it sparingly: only when you have measured or can prove a computation is expensive enough to warrant the caching overhead.",
  "deepDive": [
    {
      "heading": "How useMemo Works Internally",
      "text": "useMemo stores the result of the factory function in a memoization cache associated with the component fiber. On the initial render, it calls the factory function, stores the result, and returns it. On subsequent renders, it compares each dependency from the current render with the previous render using Object.is comparison. If all dependencies are equal, it returns the cached value without calling the factory function. If any dependency changed, it re-executes the factory, caches the new result, and returns it. React may evict cached values during the commit phase if component memory pressure is high - this is implementation-defined and should not be relied upon for correctness. Use useMemo only when the computation is genuinely expensive and you have confirmed it via profiling."
    },
    {
      "heading": "When to Actually Use useMemo",
      "text": "The React docs recommend using useMemo only in these scenarios: (1) Skipping expensive recalculations - when a computation takes more than 1ms or processes large datasets (arrays with thousands of items). (2) Preserving referential equality for child component optimization - when passing objects or arrays as props to a memo()-ized child component. Without useMemo, every render creates a new object reference, causing the child to re-render even if the values are identical. (3) Skipping re-renders of expensive children when combined with React.memo. (4) Avoiding cascading effects - when a computed value is passed as a dependency to useEffect, preventing unnecessary effect re-runs. Profile first, optimize second - do not add useMemo preemptively."
    },
    {
      "heading": "The Cost-Benefit Analysis of Memoization",
      "text": "Every useMemo call has a cost: (1) Memory cost - the cached value persists until dependencies change or the component unmounts. (2) CPU cost - dependency array comparison runs on every render using Object.is on each element. For arrays with many dependencies, this comparison itself can be significant. (3) Code complexity cost - the dependency array must be maintained correctly, and stale closures are a common bug. The benefit only outweighs these costs when: the computation is expensive (O(n^2) or worse with n > 100), or the computed value preserves referential stability for downstream memoized components. Rule of thumb: if the computation takes less than 0.5ms, useMemo adds more overhead than it saves."
    },
    {
      "heading": "useMemo with React.memo Integration",
      "text": "The most common and effective use of useMemo is in combination with React.memo. Consider: <ExpensiveChild data={filteredData} />. If filteredData is computed with useMemo, the reference stays stable across renders where the source data hasnt changed. React.memo on ExpensiveChild can then skip re-rendering entirely. Without useMemo, every parent render creates a new filteredData array (even with identical contents), causing ExpensiveChild to re-render on every parent render. This pattern is especially important for large lists (FlatList, virtualization), chart components, and any component that does significant work on render. Profile before and after to confirm the optimization is effective."
    },
    {
      "heading": "Common Pitfalls and Anti-Patterns",
      "text": "(1) Using useMemo for primitive values - memoizing const x = a + b is pure overhead. (2) Dependency array mismatches - lint rules with exhaustive-deps catch this, but developers often omit dependencies incorrectly. (3) Assuming useMemo guarantees the function wont re-run - React may discard cache under memory pressure. (4) Nesting useMemo too deeply in component trees - prefer extracting expensive computations to hooks or selectors. (5) Memoizing inline styles or class names - these are cheap to compute. (6) Using useMemo as a mental crutch for premature optimization - measure first with React DevTools Profiler."
    }
  ],
  "interviewAnswer": "useMemo is a React hook that memoizes the result of a computation between re-renders. It takes a factory function and a dependency array, re-executing the factory only when dependencies change. Use useMemo only for genuinely expensive computations (processing large arrays, complex math, data transformations) or to preserve referential equality for props passed to React.memo-wrapped children. The default should be to compute values without memoization and only add useMemo after profiling confirms it is beneficial. React may discard cached values under memory pressure, so useMemo should never be relied upon for correctness - only for performance. Common anti-patterns include memoizing trivial calculations, incorrect dependency arrays, and premature optimization without profiling.",
  "interviewQuestions": [
    {
      "question": "What problem does useMemo solve?",
      "answer": "It prevents expensive recalculations on every render by caching the result from the previous render and returning it when dependencies have not changed. This reduces the CPU cost of re-rendering components that perform heavy data processing."
    },
    {
      "question": "How does useMemo differ from useCallback?",
      "answer": "useMemo memoizes the result of calling a function (the return value). useCallback memoizes the function itself (the reference). useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). useCallback is preferred when passing callbacks to memoized children."
    },
    {
      "question": "Can useMemo guarantee that the computation wont re-run?",
      "answer": "No. React may discard cached values under memory pressure or during certain reconciliation scenarios. useMemo is strictly a performance optimization and should not be used to ensure a side effect runs only once - use useEffect for side effects."
    },
    {
      "question": "What is the most common legitimate use case for useMemo?",
      "answer": "Preserving referential equality of objects/arrays passed as props to React.memo-wrapped children. Without useMemo, the child re-renders on every parent render because each render creates a new array/object reference, even with identical values."
    },
    {
      "question": "How should you decide whether a computation is expensive enough for useMemo?",
      "answer": "Profile with React DevTools Profiler. If a component re-renders frequently and a specific computation takes more than 1ms or processes thousands of items, useMemo can help. As a heuristic, if the computation is O(n) or faster with small n, useMemo is unnecessary overhead."
    },
    {
      "question": "What happens if you omit a value from the dependency array?",
      "answer": "The useMemo hook will not re-execute when that value changes, returning a stale result. This is caught by the react-hooks/exhaustive-deps ESLint rule. The dependency array must include every reactive value (props, state, derived values) used inside the factory function."
    },
    {
      "question": "How does useMemo interact with concurrent mode in React 18?",
      "answer": "In concurrent mode, useMemo behaves identically. However, because renders can be interrupted and discarded, the memoization cache persists across render attempts for the same pending render. Once a render commits, the cache is updated with the final values."
    },
    {
      "question": "What is the performance cost of using useMemo unnecessarily?",
      "answer": "(1) Memory allocation for the cached value. (2) Object.is comparison of each dependency on every render. (3) Extra function call overhead. For a trivial calculation like const double = useMemo(() => x * 2, [x]), the overhead of useMemo exceeds the cost of the computation itself."
    },
    {
      "question": "Can useMemo be used for functions?",
      "answer": "Indirectly - useMemo can return a function, but useCallback is the idiomatic choice for memoizing functions. useCallback provides cleaner syntax: useCallback(fn, deps) vs useMemo(() => fn, deps)."
    },
    {
      "question": "How do you test a component that uses useMemo?",
      "answer": "Use React Testing Library with act(). useMemo behavior is transparent to tests - the component works identically with or without memoization, just potentially slower. Test correctness, not memoization. To test that memoization works, check that child components are not re-rendered (use jest.spyOn on the child render or check refs)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">useMemo Flow Diagram</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"75\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Factory Function Called</text><text x=\"130\" y=\"92\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">expensiveComputation(data)</text><line x1=\"130\" y1=\"105\" x2=\"130\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"125\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"142.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Check Dependencies</text><text x=\"130\" y=\"159.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Object.is comparison</text><line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"195\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"195\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"75\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Same?</text><text x=\"75\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Return cached value</text><rect x=\"140\" y=\"195\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"185\" y=\"215\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Changed?</text><text x=\"185\" y=\"232\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Recompute & cache</text><text x=\"60\" y=\"260\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Same dependencies => skip work</text><text x=\"185\" y=\"260\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Changed deps => recompute</text><line x1=\"120\" y1=\"220\" x2=\"120\" y2=\"180\" stroke=\"34\" stroke-width=\"2\" marker-end=\"url(#a)\"/><line x1=\"120\" y1=\"220\" x2=\"140\" y2=\"220\" stroke=\"34\" stroke-width=\"2\" marker-end=\"url(#a)\"/></svg>",
  "codeExamples": [
    {
      "title": "Filtering a Large List with useMemo",
      "useCase": "Avoids re-filtering 10000 items on every render",
      "code": "function ProductList({ products, searchTerm, category }) {\n  const filteredProducts = useMemo(() => {\n    console.log(\"Filtering\", products.length, \"items...\");\n    return products.filter(p => {\n      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());\n      const matchesCategory = !category || p.category === category;\n      return matchesSearch && matchesCategory;\n    });\n  }, [products, searchTerm, category]);\n\n  return (\n    <ul>\n      {filteredProducts.map(p => (\n        <li key={p.id}>{p.name} - ${p.price}</li>\n      ))}\n    </ul>\n  );\n}",
      "description": "Without useMemo, every keystroke in the search box re-filters all 10000 items. useMemo skips filtering when only unrelated state changes (like a button toggle elsewhere in the component)."
    },
    {
      "title": "Preserving Referential Equality with React.memo",
      "useCase": "Prevents unnecessary re-renders of an expensive chart",
      "code": "const SalesChart = React.memo(function SalesChart({ data, options }) {\n  useEffect(() => { /* renders chart using D3/Chart.js */ });\n  return <div ref={chartRef} />;\n});\n\nfunction Dashboard({ rawSales }) {\n  const chartData = useMemo(() => ({\n    labels: rawSales.map(r => r.date),\n    values: rawSales.map(r => r.amount),\n    total: rawSales.reduce((s, r) => s + r.amount, 0)\n  }), [rawSales]);\n\n  const chartOptions = useMemo(() => ({\n    responsive: true, maintainAspectRatio: false,\n    scales: { y: { beginAtZero: true } }\n  }), []);\n\n  return <SalesChart data={chartData} options={chartOptions} />;\n}",
      "description": "Without useMemo, chartData and chartOptions get new references on every render, causing SalesChart to re-render and re-render the chart even though nothing changed. useMemo ensures stable references so React.memo can skip rendering."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does useMemo return?",
      "options": [
        "A memoized function",
        "A memoized value (result of computation)",
        "A memoized component",
        "A memoized effect"
      ],
      "answer": 1,
      "explanation": "useMemo returns the result of calling the factory function, cached until dependencies change."
    },
    {
      "question": "When should you use useMemo?",
      "options": [
        "For every computed value",
        "Only for expensive computations confirmed by profiling",
        "Never - it is deprecated",
        "Only for JSX elements"
      ],
      "answer": 1,
      "explanation": "React recommends profiling first and using useMemo only when a computation is genuinely expensive. Preemptive memoization adds overhead."
    },
    {
      "question": "What is useMemo(fn, []) equivalent to?",
      "options": [
        "useEffect(fn, [])",
        "useCallback(fn, [])",
        "useRef(fn())",
        "useState(fn())"
      ],
      "answer": 1,
      "explanation": "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). So useCallback is just a specialization of useMemo for functions."
    },
    {
      "question": "If a dependency array element is an object, when will useMemo recompute?",
      "options": [
        "When any property of the object changes",
        "When the object reference changes (Object.is)",
        "Never for objects",
        "Always on every render"
      ],
      "answer": 1,
      "explanation": "useMemo uses Object.is comparison, which for objects means reference equality. Mutating an object property does not trigger recomputation - only a new object reference does."
    },
    {
      "question": "Can useMemo be used to skip re-rendering a child component?",
      "options": [
        "Yes, directly",
        "No, useMemo alone does not skip child renders - it only memoizes values passed to children. Combine with React.memo on the child to skip renders",
        "Yes, automatically for all children",
        "Only with class components"
      ],
      "answer": 1,
      "explanation": "useMemo prevents re-computation of values, but the child still re-renders unless it is wrapped in React.memo and receives stable props."
    },
    {
      "question": "What does the exhaustive-deps ESLint rule catch with useMemo?",
      "options": [
        "Missing dependencies that cause stale closures",
        "Undefined variables in the component",
        "Missing semicolons",
        "Unused import statements"
      ],
      "answer": 1,
      "explanation": "The react-hooks/exhaustive-deps rule ensures the dependency array includes every reactive value used inside the factory function. Missing dependencies lead to stale computed values."
    }
  ]
};
