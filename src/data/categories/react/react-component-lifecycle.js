export const react_component_lifecycle = {
  "id": "react-component-lifecycle",
  "title": "React Component Lifecycle",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Every React component goes through three phases: Mount (birth), Update (growth), and Unmount (death).",
    "Class components have explicit lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount.",
    "Functional components use the useEffect hook to replicate all lifecycle behaviors.",
    "The dependency array controls when effects run: [] for mount/unmount, [deps] for updates."
  ],
  "laymanDefinition": "Like a houseplant. Mounting = first pot (insert into DOM). Updating = watering/sunlight (props/state change). Unmounting = throwing away (remove from DOM). Lifecycle methods are instructions: 'when you first get it, water it' (componentDidMount).",
  "deepDive": [
    {
      "heading": "Mounting Phase",
      "text": "Constructor runs, render() returns JSX, React updates DOM, then componentDidMount runs / useEffect with [] runs after paint."
    },
    {
      "heading": "Updating Phase",
      "text": "Triggered by setState or prop changes. shouldComponentUpdate (class), render(), getSnapshotBeforeUpdate, then componentDidUpdate / useEffect with deps."
    },
    {
      "heading": "Unmounting Phase",
      "text": "componentWillUnmount (class) or useEffect cleanup (functional). Cancel requests, clear timers, remove listeners."
    },
    {
      "heading": "useEffect as Unified Lifecycle",
      "text": "useEffect(() => { effect; return () => cleanup; }, [deps]). [] = mount/unmount only. [deps] = mount + when deps change + unmount."
    }
  ],
  "interviewAnswer": "React lifecycle: Mounting (component created, inserted into DOM), Updating (re-rendered due to state/prop changes), Unmounting (removed from DOM). Class components use explicit methods; functional components use useEffect with dependency arrays. Strict Mode double-invokes effects to detect bugs.",
  "interviewQuestions": [
    {
      "question": "Three lifecycle phases?",
      "answer": "Mounting (creation + DOM insertion), Updating (re-render), Unmounting (removal)."
    },
    {
      "question": "Mounting order in class?",
      "answer": "constructor -> getDerivedStateFromProps -> render() -> componentDidMount."
    },
    {
      "question": "useEffect correspondence to lifecycle?",
      "answer": "[] = componentDidMount + componentWillUnmount. [deps] = componentDidUpdate. No array = every render."
    },
    {
      "question": "Purpose of cleanup?",
      "answer": "Cancel requests, clear timers, remove listeners, unsubscribe before unmount or re-run."
    },
    {
      "question": "shouldComponentUpdate and equivalent?",
      "answer": "Class method returning bool (skip re-render). Functional: React.memo + useMemo/useCallback."
    },
    {
      "question": "Strict Mode effects?",
      "answer": "Double-invokes in dev to detect missing cleanup and impure effects."
    },
    {
      "question": "getSnapshotBeforeUpdate used for?",
      "answer": "Captures DOM info (scroll position) before mutation, passed to componentDidUpdate."
    },
    {
      "question": "No cleanup function in useEffect?",
      "answer": "No cleanup runs. Fine for logging; bad for subscriptions/timers causing memory leaks."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 480\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrL\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"460\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Component Lifecycle Phases</text><rect x=\"40\" y=\"55\" width=\"190\" height=\"170\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"135\" y=\"78\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1. MOUNT</text><rect x=\"55\" y=\"108\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"135\" y=\"123\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Constructor / Function body</text><rect x=\"55\" y=\"134\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"135\" y=\"149\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">render() / JSX returned</text><rect x=\"55\" y=\"160\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"135\" y=\"175\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">React commits to DOM</text><rect x=\"55\" y=\"186\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"135\" y=\"201\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">componentDidMount / useEffect[]</text><rect x=\"255\" y=\"55\" width=\"190\" height=\"260\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2. UPDATE</text><rect x=\"270\" y=\"108\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"123\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">New props / setState()</text><rect x=\"270\" y=\"134\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"149\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">shouldComponentUpdate?</text><rect x=\"270\" y=\"160\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"175\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">render() / new JSX</text><rect x=\"270\" y=\"186\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"201\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">React computes diff</text><rect x=\"270\" y=\"212\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"227\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Commits to DOM</text><rect x=\"270\" y=\"264\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"350\" y=\"279\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">componentDidUpdate / useEffect[deps]</text><rect x=\"470\" y=\"55\" width=\"190\" height=\"120\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"565\" y=\"78\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3. UNMOUNT</text><rect x=\"485\" y=\"108\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"565\" y=\"123\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">componentWillUnmount</text><rect x=\"485\" y=\"134\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"565\" y=\"149\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">useEffect cleanup runs</text><rect x=\"485\" y=\"160\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"565\" y=\"175\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">State cleared, DOM removed</text></svg>",
  "codeExamples": [
    {
      "title": "useEffect for Subscriptions",
      "useCase": "Event listeners with cleanup",
      "code": "function OnlineStatus() {\n  const [isOnline, setIsOnline] = useState(navigator.onLine);\n  useEffect(() => {\n    function handleOnline() { setIsOnline(true); }\n    function handleOffline() { setIsOnline(false); }\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n  return <div>{isOnline ? 'Online' : 'Offline'}</div>;\n}",
      "description": "Listeners added on mount, removed on unmount. Without cleanup, they accumulate causing memory leaks."
    },
    {
      "title": "Class Component Lifecycle",
      "useCase": "Traditional pattern",
      "code": "class DataFetcher extends React.Component {\n  constructor(props) { super(props); this.state = { data: null, loading: true }; }\n  componentDidMount() { this.fetchData(this.props.url); }\n  componentDidUpdate(prevProps) { if (prevProps.url !== this.props.url) this.fetchData(this.props.url); }\n  componentWillUnmount() { if (this.abortController) this.abortController.abort(); }\n  async fetchData(url) {\n    this.abortController = new AbortController();\n    try {\n      const res = await fetch(url, { signal: this.abortController.signal });\n      const data = await res.json();\n      this.setState({ data, loading: false });\n    } catch (err) { if (err.name !== 'AbortError') this.setState({ error: err, loading: false }); }\n  }\n  render() { return this.state.loading ? <div>Loading...</div> : <div>{this.state.data}</div>; }\n}",
      "description": "componentDidMount fetches, componentDidUpdate compares URL, componentWillUnmount aborts pending requests."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which method fires after first render?",
      "options": [
        "constructor",
        "componentDidMount",
        "componentDidUpdate",
        "render"
      ],
      "answer": 1,
      "explanation": "componentDidMount fires after first DOM insertion."
    },
    {
      "question": "How to replicate componentWillUnmount in functional?",
      "options": [
        "Use class instead",
        "Return cleanup from useEffect",
        "Call onUnmount function",
        "Use useUnmountEffect hook"
      ],
      "answer": 1,
      "explanation": "useEffect return function runs on unmount."
    },
    {
      "question": "What does [] dependency array do?",
      "options": [
        "Runs after every render",
        "Runs only on mount, cleans up on unmount",
        "Never runs",
        "Runs only on state changes"
      ],
      "answer": 1,
      "explanation": "[] = effect runs once on mount."
    },
    {
      "question": "Correct mounting order?",
      "options": [
        "render->constructor->componentDidMount",
        "constructor->render->componentDidMount",
        "componentDidMount->render->constructor",
        "constructor->componentDidMount->render"
      ],
      "answer": 1,
      "explanation": "constructor, render, then componentDidMount."
    },
    {
      "question": "Why Strict Mode double-invokes effects?",
      "options": [
        "Bug",
        "Detect missing cleanup and impure effects",
        "Performance",
        "Test twice"
      ],
      "answer": 1,
      "explanation": "Double-invoke surfaces bugs in development."
    },
    {
      "question": "What to do in cleanup?",
      "options": [
        "Update parent state",
        "Cancel requests, clear timers, remove listeners",
        "Call setState",
        "Render farewell"
      ],
      "answer": 1,
      "explanation": "Cleanup releases resources."
    }
  ]
};
