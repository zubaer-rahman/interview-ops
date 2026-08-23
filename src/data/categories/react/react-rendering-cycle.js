export const react_rendering_cycle = {
  "id": "react-rendering-cycle",
  "title": "React Rendering Cycle",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Rendering in React has three phases: Render (create VDOM), Reconciliation (diff VDOM), Commit (apply DOM changes).",
    "The render phase is pure and can be interrupted (in concurrent mode) - it creates a new VDOM tree.",
    "Reconciliation compares the new VDOM with the previous VDOM using the key-based diffing algorithm.",
    "The commit phase applies DOM mutations synchronously and runs lifecycle methods and effects."
  ],
  "laymanDefinition": "React's rendering cycle is like renovating a house with blueprints. First, React draws the new blueprints (Render phase - creates a virtual representation of the UI). Then it compares the new blueprints with the old ones to find differences (Reconciliation - like finding which rooms changed). Finally, it physically changes only the rooms that are different (Commit phase - updates the real DOM). The magic is that React figures out the minimal set of changes needed and batches them efficiently. In React 18, React can even pause the blueprint drawing if something more urgent comes in (concurrent mode), ensuring the app stays responsive.",
  "deepDive": [
    {
      "heading": "Phase 1: Render Phase (Creating the VDOM)",
      "text": "The render phase starts when a state update, prop change, or context change triggers a re-render. React calls the component function to produce React elements (the Virtual DOM). This phase is \"pure\" - it must have no side effects (no API calls, no DOM mutations). React may call the component function multiple times for the same render in development (StrictMode). In concurrent mode, the render phase can be interrupted by higher-priority updates and resumed later. If React detects no change (via bailout from memo/useMemo/shouldComponentUpdate), it skips the subtree entirely. The output of the render phase is a fiber tree (React internal representation), not the actual DOM."
    },
    {
      "heading": "Phase 2: Reconciliation (The Diffing Algorithm)",
      "text": "Reconciliation is the process of comparing the new VDOM tree with the previous one. React uses a heuristic O(n) algorithm based on two assumptions: (1) Different element types produce different trees (replacing <div> with <span> tears down the subtree). (2) Keys identify stable elements across renders. The algorithm: (a) If the element type changed (div -> span), destroy the old tree and build a new one. (b) If the type is the same, update the existing DOM element with changed props/attributes. (c) For lists, use keys to determine which items changed position, were added, or removed. The key prop is critical for list reconciliation - use stable, unique, and predictable keys (item IDs), avoiding array indices."
    },
    {
      "heading": "Phase 3: Commit Phase (DOM Mutations and Effects)",
      "text": "After reconciliation produces a list of DOM mutations (insertions, deletions, updates), the commit phase applies them synchronously. This phase is not interruptible - it must complete atomically. The commit phase has sub-steps: (a) Before mutation - getSnapshotBeforeUpdate runs. (b) Mutation - React applies DOM changes (insert, update, remove nodes). (c) Layout effects - useLayoutEffect callbacks fire synchronously (before paint). (d) Passive effects - useEffect callbacks are scheduled to fire after paint. The commit phase is where side effects are safe because the DOM is available and React has finished all computations."
    },
    {
      "heading": "Batching and Scheduling",
      "text": "React batches state updates for efficiency: (1) In React 17 and earlier, updates in event handlers (onClick, onChange) are batched. (2) React 18 adds automatic batching for all updates (setTimeout, Promises, native events) - multiple setState calls in the same microtask produce a single render. (3) Scheduling: React prioritizes updates based on their type (user input > network response > data prefetch). Lane priorities in the scheduler determine which updates to process first. (4) In concurrent mode, React can interrupt a low-priority render to process a high-priority input update, then resume the low-priority render. This ensures the app stays responsive during large renders."
    },
    {
      "heading": "Concurrent Mode and the Rendering Cycle",
      "text": "React 18s concurrent mode fundamentally changes the render phase: (1) Rendering is interruptible - React can pause, yield to the browser, and resume. (2) Multiple renders can be in progress simultaneously (different priority levels). (3) Aborted renders are discarded - their DOM mutations never commit. (4) useTransition marks updates as low-priority, allowing React to show stale UI while preparing new content. (5) useDeferredValue defers re-rendering for non-urgent parts of the tree. (6) The render phase remains pure (no side effects) - this is crucial because aborted renders would leak side effects otherwise. Concurrent mode preserves all existing React patterns - it only affects scheduling, not component logic."
    }
  ],
  "interviewAnswer": "React's rendering cycle has three phases: Render (pure, creates VDOM, can be interrupted in concurrent mode), Reconciliation (O(n) key-based diffing algorithm), and Commit (synchronous DOM mutations + layout effects + passive effects). The render phase must be pure with no side effects (this is critical for concurrent mode where renders can be aborted). React batches state updates automatically in React 18 for all contexts. Keys are essential for efficient list reconciliation - use stable IDs, avoid array indices. Concurrent mode adds prioritization: urgent updates (user input) interrupt non-urgent renders.",
  "interviewQuestions": [
    {
      "question": "What are the three phases of React rendering?",
      "answer": "(1) Render phase - creates VDOM (pure, interruptible). (2) Reconciliation - diffs old and new VDOM using keys. (3) Commit phase - applies DOM mutations (synchronous, not interruptible) and runs effects."
    },
    {
      "question": "Why must the render phase be pure?",
      "answer": "Because React may call component functions multiple times (StrictMode), interrupt renders in concurrent mode, or discard aborted renders. Side effects during render would cause bugs like double API calls or inconsistent state."
    },
    {
      "question": "How does React achieve O(n) reconciliation?",
      "answer": "By making two assumptions: (1) Different element types produce different trees (full teardown). (2) Keys identify stable children across renders. This avoids a full tree diff (which would be O(n^3))."
    },
    {
      "question": "What is the role of keys in reconciliation?",
      "answer": "Keys help React identify which list items changed position, were added, or removed. Stable keys (item IDs) allow React to preserve component state and avoid unnecessary unmounts/remounts when the list order changes."
    },
    {
      "question": "What happens in the commit phase?",
      "answer": "React applies DOM mutations synchronously (insert, update, remove). Then runs useLayoutEffect (before paint) and schedules useEffect (after paint). The commit phase is not interruptible."
    },
    {
      "question": "What is batching in React?",
      "answer": "Batching groups multiple state updates into a single re-render for performance. React 18 added automatic batching - all updates (event handlers, timeouts, Promises, native events) are batched. Previously only event handler updates were batched."
    },
    {
      "question": "How does concurrent mode make rendering interruptible?",
      "answer": "React splits rendering into small units of work and yields to the browser between units. The scheduler prioritizes updates (user input > data fetching). A higher-priority update interrupts a lower-priority render, which is discarded."
    },
    {
      "question": "What is the difference between useLayoutEffect and useEffect in the cycle?",
      "answer": "useLayoutEffect runs synchronously in the commit phase BEFORE the browser paints. useEffect runs asynchronously AFTER paint. useLayoutEffect blocks paint; useEffect does not."
    },
    {
      "question": "What is the fiber architecture?",
      "answer": "Fiber is Reacts internal data structure representing a unit of work. Each component instance has a fiber node. The fiber tree enables incremental rendering: React can pause, resume, and prioritize work at the fiber (component) level."
    },
    {
      "question": "How does React bail out of rendering a subtree?",
      "answer": "If React.memo, shouldComponentUpdate, or useMemo indicates no change, React skips the subtree during reconciliation. The child component function is not called, and the existing VDOM is reused. This is the primary performance optimization mechanism."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 350\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Rendering Cycle</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"70\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. Trigger</text><text x=\"130\" y=\"87\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">State/prop/context change</text><line x1=\"130\" y1=\"95\" x2=\"130\" y2=\"115\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"115\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"130\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. Render Phase</text><text x=\"130\" y=\"147\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Create VDOM (pure, interruptible)</text><line x1=\"130\" y1=\"155\" x2=\"130\" y2=\"175\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"175\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"190\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. Reconciliation</text><text x=\"130\" y=\"207\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Diff VDOM, find changes</text><line x1=\"130\" y1=\"215\" x2=\"130\" y2=\"235\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"235\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"250\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. Commit Phase</text><text x=\"130\" y=\"267\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Apply DOM mutations (sync)</text><line x1=\"130\" y1=\"275\" x2=\"130\" y2=\"295\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"30\" y=\"295\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"310\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">5. Effects</text><text x=\"130\" y=\"327\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">useLayoutEffect -> useEffect</text></svg>",
  "codeExamples": [
    {
      "title": "Understanding Reconciliation with Keys",
      "useCase": "Demonstrates how keys affect list re-rendering behavior",
      "code": "function TodoList() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: \"Learn React\", done: false },\n    { id: 2, text: \"Build project\", done: false },\n  ]);\n\n  const addFirst = () => {\n    setTodos([{ id: Date.now(), text: \"New first\", done: false }, ...todos]);\n  };\n\n  return (\n    <ul>\n      {todos.map(todo => (\n        // GOOD: key={todo.id} - stable identity\n        // BAD: key={index} - items shift, React remounts everything\n        <li key={todo.id}>\n          <Checkbox checked={todo.done} />\n          <span>{todo.text}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}",
      "description": "With key={id}, adding an item at the beginning only inserts one new <li> - existing items keep their state. With key={index}, every item gets a new key, causing React to remount all <li> elements and lose input selections/scroll positions."
    },
    {
      "title": "Profiling Re-renders with React DevTools",
      "useCase": "Identify unnecessary renders and optimize",
      "code": "// 1. Wrap expensive subtree in React.memo\nconst ExpensiveList = React.memo(function ExpensiveList({ items }) {\n  console.log(\"ExpensiveList render\");\n  return items.map(item => <SlowItem key={item.id} data={item} />);\n});\n\n// 2. Use useMemo for computed data\nfunction Dashboard({ rawData }) {\n  const processed = useMemo(() => {\n    return rawData.filter(d => d.active).map(transform);\n  }, [rawData]);\n\n  // 3. Use useCallback for stable callbacks\n  const handleClick = useCallback((id) => {\n    setSelected(id);\n  }, []);\n\n  return (\n    <div>\n      <ExpensiveList items={processed} onItemClick={handleClick} />\n    </div>\n  );\n}\n\n// 4. Use React DevTools Profiler to:\n// - Record interactions and see which components re-rendered\n// - Check render timing (ms per component)\n// - Identify \"why did this render?\" tooltip",
      "description": "The React DevTools Profiler records renders and shows: which components re-rendered, why (props/state/context), and how long they took. This data-driven approach identifies actual optimization opportunities instead of guessing."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the correct order of React rendering phases?",
      "options": [
        "Commit -> Reconciliation -> Render",
        "Render -> Reconciliation -> Commit",
        "Render -> Commit -> Reconciliation",
        "Reconciliation -> Render -> Commit"
      ],
      "answer": 1,
      "explanation": "Render phase creates VDOM, Reconciliation diffs it, Commit phase applies DOM mutations."
    },
    {
      "question": "Which phase can be interrupted in concurrent mode?",
      "options": [
        "Commit phase",
        "Render phase",
        "Both phases",
        "Neither phase"
      ],
      "answer": 1,
      "explanation": "The render phase is interruptible in concurrent mode. The commit phase is always synchronous and not interruptible."
    },
    {
      "question": "What happens if a component returns the same element type but different props?",
      "options": [
        "React destroys and recreates the DOM node",
        "React updates the existing DOM node with the new props",
        "React ignores the change",
        "React throws an error"
      ],
      "answer": 1,
      "explanation": "Same element type + key = same DOM node. React updates only the changed attributes/properties on the existing node."
    },
    {
      "question": "What is the time complexity of Reacts reconciliation algorithm?",
      "options": [
        "O(n^2)",
        "O(n)",
        "O(log n)",
        "O(n^3)"
      ],
      "answer": 1,
      "explanation": "React's heuristic algorithm achieves O(n) by assuming element type stability and using keys, avoiding O(n^3) full tree diff."
    },
    {
      "question": "Which mechanism allows React to skip rendering a subtree entirely?",
      "options": [
        "Key prop",
        "React.memo or shouldComponentUpdate",
        "Ref forwarding",
        "Error boundaries"
      ],
      "answer": 1,
      "explanation": "React.memo (function) and shouldComponentUpdate (class) let React bail out of rendering the entire subtree if props have not changed."
    },
    {
      "question": "In React 18, which updates are batched?",
      "options": [
        "Only event handler updates",
        "All updates (event handlers, timeouts, Promises, native events)",
        "Only concurrent mode updates",
        "Only useTransition updates"
      ],
      "answer": 1,
      "explanation": "React 18 introduced automatic batching for all updates. Multiple setState calls anywhere in the same microtask produce a single render."
    }
  ]
};
