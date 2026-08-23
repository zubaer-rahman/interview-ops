const e={id:"react-useeffect",title:"React useEffect",difficulty:"intermediate",estimatedMinutes:20,tldr:["useEffect lets you perform side effects in functional components: data fetching, subscriptions, DOM manipulation, timers.","useEffect runs after the browser paints (after render, not during).","The dependency array controls when the effect runs: [] on mount only, [deps] on mount and when deps change.","The optional cleanup function runs before re-execution and on unmount to prevent memory leaks."],laymanDefinition:"useEffect is like a after-party cleanup crew. After the party (render) is over and guests have left (paint), the cleanup crew arrives to handle things: they might call for more pizza (fetch data), set up decorations for the next party (start a timer), or clean up last time's mess (remove event listeners). They get the address (dependency array) so they know which parties to attend. If the party changes (deps change), they clean up the old setup and set up the new one.",deepDive:[{heading:"Effect Basics",text:"useEffect(setup, dependencies?). The setup function runs after the browser paints. If no dependency array, runs after every render. If [], runs only on mount. If [a, b], runs on mount and when a or b change."},{heading:"Cleanup Function",text:"Return a function from the effect: useEffect(() => { subscribe(); return () => { unsubscribe(); }; }, []). The cleanup runs before re-execution and on unmount. Essential for subscriptions, timers, and event listeners."},{heading:"Fetching Data with useEffect",text:"Standard pattern: useState for data/loading/error, useEffect to fetch, with cleanup flag to avoid setState on unmounted component. Use async function inside or .then(). Dependencies should include all reactive values."},{heading:"Common Pitfalls",text:"1. Missing dependency array causes infinite loops. 2. Missing cleanup causes memory leaks. 3. Stale closures: using state without dependencies. 4. Object/array dependencies cause re-runs on every render (use stable references)."}],interviewAnswer:"useEffect performs side effects after render. The setup function runs after paint; the cleanup runs before re-execution or unmount. The dependency array controls execution: []=mount only, [deps]=mount+change, undefined=every render. Always include all reactive values in deps (use exhaustive-deps lint rule). Cleanup is essential for subscriptions, timers, and listeners to prevent memory leaks.",interviewQuestions:[{question:"What is useEffect for?",answer:"Side effects in functional components: data fetching, subscriptions, timers, DOM manipulation, logging."},{question:"When does useEffect run?",answer:"After the browser paints (after render). Not during render."},{question:"What do different dependency arrays mean?",answer:"[] = run on mount only. [a, b] = run on mount and when a/b change. undefined = run after every render."},{question:"What is the cleanup function?",answer:"The function returned from the effect. Runs before re-execution and on unmount. Cleans up subscriptions, timers, listeners."},{question:"Why do I need cleanup?",answer:"Prevents memory leaks: removes event listeners, clears timers, aborts fetch requests, unsubscribes from observables."},{question:"How to fetch data with useEffect?",answer:"useState for state, useEffect with []. Use cleanup flag to avoid setState on unmounted component."},{question:"What is the exhaustive-deps rule?",answer:"ESLint rule that warns when dependencies are missing from the dependency array. Ensures effects stay in sync."},{question:"What happens if you omit the dependency array?",answer:"Effect runs after every render. Usually causes infinite loops if the effect triggers a re-render."}],diagramSvg:'<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="max-width:700px;"><defs><marker id="arrEff" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="350" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">useEffect Lifecycle</text><rect x="40" y="55" width="290" height="50" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="185" y="75" fill="#6c9fff" font-size="12" font-weight="bold" text-anchor="middle">Component Renders</text><text x="185" y="92" fill="#9aa0b0" font-size="10" text-anchor="middle">Function executes, JSX returned</text><line x1="185" y1="105" x2="185" y2="135" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrEff)"/><rect x="40" y="135" width="290" height="50" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="185" y="155" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Browser Paints</text><text x="185" y="172" fill="#9aa0b0" font-size="10" text-anchor="middle">React commits to DOM</text><line x1="185" y1="185" x2="185" y2="215" stroke="#34d399" stroke-width="2" marker-end="url(#arrEff)"/><rect x="40" y="215" width="290" height="50" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="185" y="235" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">useEffect Runs (after paint)</text><text x="185" y="252" fill="#9aa0b0" font-size="10" text-anchor="middle">Fetch / Subscribe / Timer / DOM</text><rect x="370" y="55" width="290" height="190" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="515" y="78" fill="#e5c07b" font-size="12" font-weight="bold" text-anchor="middle">When Dependencies Change</text><rect x="385" y="90" width="260" height="35" rx="3" fill="#2a2f45"/><text x="515" y="112" fill="#e8eaed" font-size="10" text-anchor="middle">Cleanup runs (unsubscribe)</text><rect x="385" y="130" width="260" height="35" rx="3" fill="#2a2f45"/><text x="515" y="152" fill="#e8eaed" font-size="10" text-anchor="middle">Component Re-renders</text><rect x="385" y="170" width="260" height="35" rx="3" fill="#2a2f45"/><text x="515" y="192" fill="#e8eaed" font-size="10" text-anchor="middle">Effect re-runs with new deps</text><rect x="370" y="260" width="290" height="100" rx="6" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="515" y="283" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">On Unmount</text><rect x="385" y="295" width="260" height="35" rx="3" fill="#2a2f45"/><text x="515" y="317" fill="#e8eaed" font-size="10" text-anchor="middle">Cleanup runs one last time</text><rect x="385" y="335" width="260" height="18" rx="3" fill="#2a2f45"/><text x="515" y="348" fill="#e8eaed" font-size="9" text-anchor="middle">Component removed from DOM</text></svg>',codeExamples:[{title:"Data Fetching with Cleanup",useCase:"Preventing memory leaks",code:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch('/api/users/' + userId)
      .then(res => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then(data => {
        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.error(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`,description:"Cleanup sets cancelled=true. If userId changes or component unmounts before fetch completes, setState is skipped - prevents memory leaks and React warnings."},{title:"Timer with Cleanup",useCase:"setInterval with proper cleanup",code:`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: clear interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty array: only on mount

  return <div>Elapsed: {seconds}s</div>;
}

// Without cleanup, the interval keeps running
// after component unmounts (memory leak)
// With cleanup, interval is cleared when
// component unmounts or deps change`,description:"Without cleanup, setInterval continues after unmount (memory leak + state update on unmounted component). Cleanup with clearInterval fixes this."}],mcqQuestions:[{question:"What is useEffect for?",options:["Computing values","Side effects after render","Rendering JSX","Styling"],answer:1,explanation:"useEffect handles side effects after paint."},{question:"When does useEffect run?",options:["During render","Before render","After browser paints","On every import"],answer:2,explanation:"Runs after browser paint."},{question:"What does [] dependency mean?",options:["Run after every render","Run only on mount","Never run","Run only on state change"],answer:1,explanation:"[] = runs once on mount."},{question:"What is the cleanup function for?",options:["Optimization","Preventing memory leaks","Improving speed","Styling"],answer:1,explanation:"Cleanup prevents memory leaks."},{question:"What if no dependency array provided?",options:["Runs once only","Runs after every render","Never runs","Runs only on unmount"],answer:1,explanation:"No array = runs after every render."},{question:"What does exhaustive-deps lint rule check?",options:["Variable names","Missing deps in dependency array","Code formatting","Import order"],answer:1,explanation:"Warns about missing dependencies."}]};export{e as react_useeffect};
