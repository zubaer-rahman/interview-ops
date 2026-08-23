const e={id:"react-custom-hooks",title:"React Custom Hooks",difficulty:"intermediate",estimatedMinutes:25,tldr:["Custom hooks are JavaScript functions that use React hooks and start with 'use' (convention).","They extract reusable stateful logic from components, enabling composition without changing component hierarchy.","Custom hooks can call other hooks (built-in or custom) and return any value (state, functions, or JSX).","They are the primary replacement for HOCs and render props patterns."],laymanDefinition:"Custom hooks are like specialized kitchen appliances. Instead of chopping vegetables by hand in every recipe (repeating logic in every component), you buy a food processor (custom hook). Every time a recipe needs chopped vegetables, you use the food processor. The processor does its job independently, and you can use it in any recipe without changing how your kitchen works.",deepDive:[{heading:"What Are Custom Hooks?",text:"Functions that start with 'use' and may call other hooks. They encapsulate reusable stateful logic. Unlike HOCs or render props, custom hooks don't change your component hierarchy - they just return values your component can use."},{heading:"Rules of Custom Hooks",text:"1. Name must start with 'use' (linting rule). 2. Can call other hooks (built-in or custom). 3. Follow the Rules of Hooks: only call hooks at top level, only from React functions or custom hooks. 4. Should be composable - one hook can call another."},{heading:"Common Use Cases",text:"Form handling (useForm), window resize listener (useWindowSize), local storage sync (useLocalStorage), debounced search (useDebounce), online status (useOnlineStatus), fetch abstraction (useFetch)."},{heading:"Custom Hooks vs HOCs vs Render Props",text:"Custom hooks: simpler, no wrapper components, no nesting, direct return values. HOCs: wrap component, add props. Render props: pass function as child. Hooks are the modern React solution for code reuse."}],interviewAnswer:"Custom hooks are JavaScript functions that reuse stateful logic across components. They start with 'use', can call other hooks, and return values. Unlike HOCs or render props, they don't add wrapper components. Common uses: form handling, fetch abstraction, debounce, localStorage sync, and event listeners. Custom hooks make components thinner and logic reusable.",interviewQuestions:[{question:"What is a custom hook?",answer:"A JavaScript function starting with 'use' that calls other hooks to encapsulate reusable stateful logic."},{question:"Why the 'use' prefix?",answer:"Convention for lint rules. Linters use the prefix to detect violations of the Rules of Hooks."},{question:"Can custom hooks call other custom hooks?",answer:"Yes - custom hooks are composable. One custom hook can call another."},{question:"How do custom hooks differ from HOCs?",answer:"Custom hooks return values directly, no wrapper components. HOCs wrap the component and inject props."},{question:"What are common custom hook examples?",answer:"useForm, useFetch, useDebounce, useLocalStorage, useWindowSize, useOnlineStatus, useToggle."},{question:"Do custom hooks create new component instances?",answer:"No - they're functions. Each component that uses a hook gets its own isolated state."},{question:"Can custom hooks accept arguments?",answer:"Yes, they're regular functions. useFetch(url) passes url to the fetch logic internally."},{question:"What's the return value of a custom hook?",answer:"Any value: primitive, object, array, or tuple. Typically returns [value, setters] or { data, loading, error }."}],diagramSvg:'<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="max-width:700px;"><defs><marker id="arrH" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="680" height="360" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="350" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">Custom Hook Architecture</text><rect x="40" y="55" width="250" height="140" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="165" y="78" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Component A</text><rect x="55" y="90" width="220" height="30" rx="3" fill="#2a2f45"/><text x="165" y="109" fill="#e8eaed" font-family="monospace" font-size="10" text-anchor="middle">const { data } = useFetch(url)</text><rect x="55" y="130" width="220" height="30" rx="3" fill="#2a2f45"/><text x="165" y="149" fill="#e8eaed" font-family="monospace" font-size="10" text-anchor="middle">const { form } = useForm(initial)</text><line x1="165" y1="85" x2="165" y2="55" stroke="#6c9fff" stroke-width="1.5"/><rect x="410" y="55" width="250" height="140" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="535" y="78" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Component B</text><rect x="425" y="90" width="220" height="30" rx="3" fill="#2a2f45"/><text x="535" y="109" fill="#e8eaed" font-family="monospace" font-size="10" text-anchor="middle">const { data } = useFetch(url)</text><rect x="425" y="130" width="220" height="30" rx="3" fill="#2a2f45"/><text x="535" y="149" fill="#e8eaed" font-family="monospace" font-size="10" text-anchor="middle">const { online } = useOnlineStatus()</text><rect x="100" y="225" width="500" height="110" rx="8" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="350" y="248" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Shared Custom Hooks Library</text><rect x="115" y="260" width="150" height="30" rx="3" fill="#2a2f45"/><text x="190" y="279" fill="#e8eaed" font-size="10" text-anchor="middle">useFetch(url)</text><rect x="275" y="260" width="150" height="30" rx="3" fill="#2a2f45"/><text x="350" y="279" fill="#e8eaed" font-size="10" text-anchor="middle">useForm(initial)</text><rect x="435" y="260" width="150" height="30" rx="3" fill="#2a2f45"/><text x="510" y="279" fill="#e8eaed" font-size="10" text-anchor="middle">useOnlineStatus()</text></svg>',codeExamples:[{title:"useFetch Custom Hook",useCase:"Reusable data fetching",code:`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then(res => { if (!res.ok) throw new Error('Fetch failed'); return res.json(); })
      .then(d => { if (!cancelled) { setData(d); setLoading(false); } })
      .catch(e => { if (!cancelled) { setError(e.message); setLoading(false); } });
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

// Usage in any component:
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <List items={users} />;
}`,description:"useFetch encapsulates fetch logic, loading/error states, and cleanup. Any component can use it with one line. Each component gets its own isolated state."},{title:"useDebounce Custom Hook",useCase:"Search input optimization",code:`function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage in search:
function SearchPage() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const { data: results } = useFetch('/api/search?q=' + debouncedQuery);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Results data={results} />
    </div>
  );
}`,description:"useDebounce delays value updates. The search only fires after the user stops typing for 500ms, preventing excessive API calls."}],mcqQuestions:[{question:"What is a custom hook?",options:["React component","Function starting with 'use' that calls other hooks","Class with lifecycle","JSX element"],answer:1,explanation:"Custom hook = function + hooks."},{question:"Why must custom hooks start with 'use'?",options:["Syntax requirement","Lint convention for Rules of Hooks enforcement","Performance optimization","Bundle size"],answer:1,explanation:"Convention for lint rule detection."},{question:"Can custom hooks accept arguments?",options:["No","Yes, they're regular functions","Only objects","Only strings"],answer:1,explanation:"Custom hooks are functions, can accept any args."},{question:"What do custom hooks replace?",options:["JSX","HOCs and render props","CSS","HTML"],answer:1,explanation:"Modern replacement for HOCs/render props."},{question:"Do custom hooks share state between components?",options:["Yes, like singletons","No, each component gets isolated state","Only with useRef","Only in production"],answer:1,explanation:"Each use gets its own independent state."},{question:"Can a custom hook call another custom hook?",options:["No","Yes, hooks are composable","Only built-in hooks","Only with wrapper"],answer:1,explanation:"Custom hooks compose like functions."}]};export{e as react_custom_hooks};
