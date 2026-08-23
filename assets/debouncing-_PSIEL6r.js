const e={title:"Debouncing & Throttling",difficulty:"intermediate",estimatedMinutes:25,tldr:["<strong>Debouncing</strong> ensures a function is called only after a specified period of <strong>inactivity</strong> — it waits for a 'pause' before executing.","<strong>Throttling</strong> ensures a function is called at most once in a specified time period — it limits the <strong>execution rate</strong>.","Both techniques optimize <strong>performance</strong> by reducing how often expensive operations (API calls, DOM updates, event handlers) are executed.","Key difference: debouncing delays execution until after a pause; throttling spreads execution evenly over time."],laymanDefinition:"Debouncing is like an elevator: the doors start to close, but if someone else arrives, they open again and the timer resets. The elevator only departs after nobody has shown up for a few seconds. Throttling is like a bus schedule: the bus leaves every 10 minutes no matter what. Even if 20 people show up in one minute, the bus still only leaves every 10 minutes. Debouncing waits for a break in the action, while throttling limits how often something can happen, regardless of breaks.",deepDive:[{heading:"Debouncing: How It Works",text:"Debouncing works by maintaining a timer. Each time the event fires, the timer is reset. If the timer completes without being reset (meaning no new events occurred), the function executes. This is ideal for scenarios where you want to wait until the user has 'finished' an action — such as typing in a search box, resizing a window, or stopping scrolling. The classic debounce implementation uses setTimeout and clearTimeout."},{heading:"Throttling: How It Works",text:"Throttling ensures a function is called at most once per specified interval. There are two common implementations: leading-edge (call immediately, then ignore subsequent calls for the duration) and trailing-edge (call at the end of the interval if a call was made). The leading-edge variant is often preferred for immediate feedback (like scroll position updates), while trailing-edge is useful for batched updates (like saving state)."},{heading:"Debounce vs Throttle: When to Use Which",list:["<strong>Debounce:</strong> Search autocomplete, form validation, window resize, saving drafts — wait for the user to finish before acting.","<strong>Leading-edge throttle:</strong> Scroll position tracking, progress monitoring, animation frame updates — need immediate response but can't run every frame.","<strong>Trailing-edge throttle:</strong> Analytics logging, batched API calls, state snapshots — want to capture the last state within an interval.","<strong>Neither:</strong> Click handlers (unless preventing double-submit), mouseenter/leave (fast enough natively)."]},{heading:"Implementing Debounce with Leading Option",text:"A debounce can also be configured to execute on the leading edge (immediately on first call) and then debounce subsequent calls. This is useful when you want immediate feedback but still want to prevent rapid-fire calls. The implementation tracks both the timer and whether the function has been called yet. Leading debounce is essentially a combination of throttle (first call) and debounce (subsequent calls)."},{heading:"requestAnimationFrame as an Alternative",text:"For visual updates (animations, scroll effects), requestAnimationFrame (rAF) is often a better alternative to throttle. rAF fires roughly every 16.7ms (60fps) and automatically pauses when the tab is inactive. Throttle with a 16ms interval is similar but rAF provides better synchronization with the browser's rendering pipeline. For non-visual operations (API calls, localStorage), setTimeout-based debounce/throttle is more appropriate."}],interviewAnswer:"Debouncing and throttling are performance optimization techniques that limit how often a function executes. Debouncing delays execution until after a specified quiet period — every time the event fires, the timer resets. This is ideal for search-as-you-type, where you only want to query after the user stops typing. Throttling ensures a function executes at most once per specified interval — regardless of how many times the event fires. This is ideal for scroll handlers, where you want updates at a manageable rate like every 200ms. The key difference: debouncing waits for a pause; throttling enforces a maximum rate. Lodash provides both as _.debounce() and _.throttle(), but they are also straightforward to implement with setTimeout and clearTimeout.",interviewQuestions:[{question:"What is debouncing?",answer:"Debouncing ensures a function is called only after a specified period of inactivity. Each time the event fires, a timer resets. The function executes only after the timer completes without interruption. Example: search input that queries the API only after the user stops typing for 300ms."},{question:"What is throttling?",answer:"Throttling ensures a function is called at most once per specified time interval. No matter how many times the event fires, the function executes at most once per interval. Example: scroll event handler that updates the UI every 200ms, not on every pixel scroll."},{question:"What is the difference between debouncing and throttling?",answer:"Debouncing delays execution until after a pause in events — it resets the timer on each new event. Throttling limits execution to a fixed maximum rate — it ignores events that occur within the same interval. Debounce is for 'wait until done'; throttle is for 'limit how often'."},{question:"When would you use debounce vs throttle?",answer:"Use debounce for: search autocomplete, form validation, window resize. Use throttle for: scroll tracking, progress bars, mouse move handlers, game input. The deciding factor: debounce if you want the final state; throttle if you want intermediate updates."},{question:"How do you implement a basic debounce function?",answer:"function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; } The returned function clears the previous timer and sets a new one on each call."},{question:"How do you implement a basic throttle function?",answer:"function throttle(fn, limit) { let inThrottle; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; } The flag prevents execution until the timeout clears it."},{question:"What is leading vs trailing execution in debounce/throttle?",answer:"Leading execution runs the function immediately on the first call. Trailing execution runs the function after the delay/interval. Leading throttle: first call runs immediately, subsequent calls are limited. Trailing throttle: calls queue up and execute at the end of each interval. Leading debounce: first call runs, then subsequent calls reset the timer."},{question:"What is immediate/leading debounce and when would you use it?",answer:"Leading debounce invokes the function immediately on the first call, then debounces subsequent calls. Useful for 'save' buttons — save immediately on first click, then ignore rapid clicks: <code>const save = debounce(doSave, 1000, { leading: true });</code>"},{question:"How does requestAnimationFrame compare to throttle?",answer:"requestAnimationFrame fires roughly every 16.7ms (60fps) and synchronizes with the browser's rendering pipeline. It's ideal for visual updates because 1) it runs at the optimal refresh rate, 2) it pauses when the tab is inactive, 3) it batches multiple changes into one render. Throttle with 16ms is similar but rAF is more efficient for DOM operations."},{question:"Can debounce or throttle cause memory leaks?",answer:"Yes, if not properly managed. Timers created by setTimeout keep references to the callback function and its closure. If the debounced/throttled function is attached to a DOM element that is removed, the timer may keep the element alive (preventing garbage collection). Always cancel pending timers when cleaning up (e.g., in React's useEffect cleanup or when removing event listeners)."}],diagramSvg:`<svg viewBox="0 0 700 460" xmlns="http://www.w3.org/2000/svg" style="max-width:700px;"><defs><marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6c9fff"/></marker><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2f45"/><stop offset="100%" style="stop-color:#1a1d28"/></linearGradient></defs><rect x="10" y="10" width="680" height="440" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="350" y="37" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Debouncing vs Throttling — Timeline Comparison</text><!-- Events row --><text x="40" y="68" fill="#aaa" font-size="12" font-weight="bold">Events:</text><rect x="120" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="180" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="200" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="260" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="290" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="310" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="370" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="410" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="500" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="530" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><rect x="560" y="56" width="30" height="16" rx="3" fill="#f87171" opacity="0.8"/><text x="40" y="108" fill="#e8eaed" font-size="12" font-weight="bold">Debounce:</text><text x="120" y="108" fill="#aaa" font-size="11">timer resets on each event...</text><rect x="440" y="94" width="100" height="20" rx="10" fill="#98c379" opacity="0.9"/><text x="490" y="108" text-anchor="middle" fill="#000" font-size="11" font-weight="bold">Executes once</text><text x="40" y="148" fill="#e8eaed" font-size="12" font-weight="bold">Throttle:</text><rect x="120" y="134" width="80" height="20" rx="10" fill="#6c9fff" opacity="0.9"/><text x="160" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Exec</text><rect x="300" y="134" width="80" height="20" rx="10" fill="#6c9fff" opacity="0.9"/><text x="340" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Exec</text><rect x="500" y="134" width="80" height="20" rx="10" fill="#6c9fff" opacity="0.9"/><text x="540" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Exec</text><!-- Use case boxes --><rect x="60" y="180" width="580" height="80" rx="6" fill="url(#g1)" stroke="#98c379" stroke-width="1.5"/><text x="350" y="204" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">When to Debounce</text><text x="350" y="224" text-anchor="middle" fill="#e8eaed" font-size="12">Search autocomplete, window resize, form validation, save drafts</text><text x="350" y="244" text-anchor="middle" fill="#aaa" font-size="11">'Wait until the user finishes, then act'</text><rect x="60" y="280" width="580" height="80" rx="6" fill="url(#g1)" stroke="#6c9fff" stroke-width="1.5"/><text x="350" y="304" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">When to Throttle</text><text x="350" y="324" text-anchor="middle" fill="#e8eaed" font-size="12">Scroll tracking, mouse move, game input, progress bars, API rate limiting</text><text x="350" y="344" text-anchor="middle" fill="#aaa" font-size="11">'Act at most once per interval, no matter what'</text><rect x="120" y="390" width="480" height="35" rx="6" fill="url(#g1)" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4"/><text x="360" y="412" text-anchor="middle" fill="#fbbf24" font-size="12">Both: Use requestAnimationFrame for visual updates</text></svg>`,codeExamples:[{title:"Debounce Implementation",useCase:"Search-as-you-type Input",code:`function debounce(fn, delay) {
  let timer = null;
  
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
}

// Usage: search input
const searchInput = document.getElementById('search');
const fetchSuggestions = debounce(async (query) => {
  const results = await fetch(\`/api/search?q=\${query}\`);
  showDropdown(await results.json());
}, 300);

searchInput.addEventListener('input', (e) => {
  fetchSuggestions(e.target.value);
});
// Only fires 300ms after the user stops typing`,description:"The debounce function wraps the API call. Each keystroke resets the 300ms timer. The API call only happens after the user pauses typing."},{title:"Throttle Implementation",useCase:"Scroll Position Tracking",code:`function throttle(fn, limit) {
  let inThrottle = false;
  let lastArgs = null;
  let lastContext = null;
  
  return function(...args) {
    if (inThrottle) {
      lastArgs = args;
      lastContext = this;
      return;
    }
    
    fn.apply(this, args);
    inThrottle = true;
    
    setTimeout(() => {
      inThrottle = false;
      if (lastArgs) {
        fn.apply(lastContext, lastArgs);
        lastArgs = null;
        lastContext = null;
      }
    }, limit);
  };
}

// Usage: scroll handler
const updateScrollIndicator = throttle(() => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.getElementById('progress').style.width = \`\${scrollPercent * 100}%\`;
}, 100);

window.addEventListener('scroll', updateScrollIndicator);
// Updates at most every 100ms, not on every scroll pixel`,description:"The throttle wraps the scroll handler. No matter how fast the user scrolls, the progress bar updates at most every 100ms. The trailing edge ensures the last scroll position is captured."},{title:"Leading Debounce (Immediate)",useCase:"Save Button Double-Click Prevention",code:`function leadingDebounce(fn, delay) {
  let timer = null;
  let canCall = true;
  
  return function(...args) {
    const context = this;
    
    if (canCall) {
      fn.apply(context, args);
      canCall = false;
    }
    
    clearTimeout(timer);
    timer = setTimeout(() => {
      canCall = true;
    }, delay);
  };
}

// Usage: prevent double submit
const saveButton = document.getElementById('save');
const handleSave = leadingDebounce(async () => {
  await saveDocument();
  showToast('Saved!');
}, 2000);

saveButton.addEventListener('click', handleSave);
// First click saves immediately, then blocks for 2 seconds`,description:"Leading debounce executes immediately on the first call, then ignores subsequent calls for the delay period. Perfect for preventing accidental double-clicks on submit buttons."},{title:"Debounce with Cancel (Cleanup)",useCase:"React Component Cleanup",code:`function debounce(fn, delay) {
  let timer = null;
  
  const debounced = function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
  
  debounced.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };
  
  debounced.flush = function() {
    if (timer) {
      clearTimeout(timer);
      fn.apply(this, arguments);
      timer = null;
    }
  };
  
  return debounced;
}

// React usage:
// useEffect(() => {
//   const handleResize = debounce(() => {
//     setDimensions({ w: window.innerWidth, h: window.innerHeight });
//   }, 200);
//   
//   window.addEventListener('resize', handleResize);
//   
//   return () => {
//     handleResize.cancel(); // Cleanup! Prevents memory leak
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);`,description:"A .cancel() method allows cleanup when the debounced function is no longer needed. This prevents memory leaks from pending setTimeout callbacks in SPAs and React components."},{title:"Throttle with requestAnimationFrame",useCase:"Smooth Animation Updates",code:`function rAFThrottle(fn) {
  let scheduled = false;
  
  return function(...args) {
    if (scheduled) return;
    
    scheduled = true;
    requestAnimationFrame(() => {
      fn.apply(this, args);
      scheduled = false;
    });
  };
}

// Usage: smooth scroll-based animation
const updateParallax = rAFThrottle(() => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.parallax-layer').forEach((layer, i) => {
    const speed = (i + 1) * 0.2;
    layer.style.transform = \`translateY(\${scrolled * speed}px)\`;
  });
});

window.addEventListener('scroll', updateParallax);
// Smooth updates synced with browser's render cycle (60fps)`,description:"requestAnimationFrame-based throttle ensures updates are synchronized with the browser's rendering pipeline for smooth visual effects."}],mcqQuestions:[{question:"What is the main purpose of debouncing?",options:["To make code run faster","To delay execution until after a period of inactivity","To ensure a function runs exactly once","To prevent errors in async code"],answer:1,explanation:"Debouncing waits for a quiet period (no new events) before executing the function. This prevents rapid-fire executions."},{question:"What is the main purpose of throttling?",options:["To limit function execution to at most once per time interval","To make functions run as fast as possible","To batch multiple calls into one","To delay execution indefinitely"],answer:0,explanation:"Throttling ensures a function executes at most once per specified time interval, regardless of how many times the event fires."},{question:"Which scenario is best suited for debouncing?",options:["Scroll position tracking","Search autocomplete input","Animation frame updates","Mouse move coordinate display"],answer:1,explanation:"Search autocomplete benefits from debouncing because you want to query the API only after the user stops typing, not on every keystroke."},{question:"Which scenario is best suited for throttling?",options:["Form validation on input","Save draft on typing","Scroll-based progress bar","API search call on keyup"],answer:2,explanation:"A scroll-based progress bar needs regular updates (throttle) but not on every scroll pixel. Debounce would only update after scrolling stops."},{question:"In a basic debounce implementation, what does clearTimeout do?",options:["It cancels the previous timer, resetting the delay","It ensures the function runs immediately","It prevents memory leaks","It throttles the function"],answer:0,explanation:"clearTimeout cancels the previously set timer. This resets the delay window — the function will only execute after a fresh quiet period."},{question:"What is the difference between leading and trailing debounce?",options:["Leading fires immediately on first call, trailing fires after delay","Leading fires after delay, trailing fires immediately","Leading is for scroll, trailing is for resize","There is no difference"],answer:0,explanation:"Leading debounce executes the function immediately on the first call, then debounces subsequent calls. Trailing debounce waits for the quiet period before executing."},{question:"How does requestAnimationFrame compare to setTimeout-based throttle?",options:["rAF is always faster","rAF synchronizes with the browser's render cycle and pauses when tab is inactive","rAF cannot be cancelled","rAF runs once per second"],answer:1,explanation:"rAF fires roughly every 16.7ms (60fps) and synchronizes with the rendering pipeline. It also automatically pauses when the browser tab is in the background."},{question:"What problem can debounce/throttle cause if not cleaned up?",options:["Memory leaks from pending timers holding references","The function never runs","The page crashes","Event listeners stop working"],answer:0,explanation:"Pending setTimeout callbacks keep references to the function and its closure variables. If the component is unmounted, these prevent garbage collection."},{question:"What API is commonly used to implement debounce and throttle?",options:["fetch() and Promise","setTimeout() and clearTimeout()","Array.map() and Array.filter()","addEventListener() and removeEventListener()"],answer:1,explanation:"Debounce and throttle are typically implemented using setTimeout() to delay execution and clearTimeout() to cancel pending executions."},{question:"If you want to update a UI element on every scroll position but not more than every 100ms, which technique do you use?",options:["Debounce with 100ms delay","Throttle with 100ms limit","requestAnimationFrame without limit","No optimization needed"],answer:1,explanation:"Throttling with a 100ms limit ensures the update runs at most every 100ms, providing regular but not excessive updates during scrolling."}]};export{e as debouncing};
