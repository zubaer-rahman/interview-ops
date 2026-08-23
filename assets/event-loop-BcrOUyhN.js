const e={title:"Event Loop",difficulty:"advanced",estimatedMinutes:35,tldr:["The <strong>Event Loop</strong> is the mechanism that enables JavaScript's non-blocking, asynchronous concurrency model despite being single-threaded.","It continuously checks if the <strong>Call Stack</strong> is empty; if so, it dequeues callbacks from the <strong>Microtask Queue</strong> first (draining it entirely), then from the <strong>Macrotask Queue</strong> (one at a time).","JavaScript has one Call Stack and one Event Loop per execution environment (e.g., browser tab).","The loop order: <strong>1) Sync code on Call Stack → 2) Drain Microtask Queue → 3) One Macrotask → 4) Re-render UI (if needed) → Repeat</strong>"],laymanDefinition:"Imagine a single chef in a kitchen (the Call Stack). Orders come in — some are quick (synchronous) like pouring water, others take time (asynchronous) like baking a cake. Instead of standing still waiting for the cake to bake, the chef puts a timer on and starts working on the next order. When the timer rings (callback ready), the chef doesn't stop immediately — he finishes his current task first, then checks a 'high priority' board (Microtask Queue), handles those, then checks a 'regular' board (Macrotask Queue). The Event Loop is the system that tells the chef when to check these boards. It keeps the kitchen running smoothly without ever blocking.",deepDive:[{heading:"Why JavaScript Needs an Event Loop",text:"JavaScript is <strong>single-threaded</strong> — it has one Call Stack and one thread of execution. If the stack had to wait for network requests, file reads, or timers, the entire program would freeze. The Event Loop allows JavaScript to offload blocking operations to the browser APIs (Web APIs) or Node.js APIs, and then handle the results asynchronously when the stack is clear."},{heading:"The Event Loop Phases (Browser)",text:"<strong>1. Call Stack:</strong> Execute synchronous code until the stack is empty.<br/><strong>2. Microtask Queue (drain entirely):</strong> Execute all Promise.then/catch/finally callbacks, queueMicrotask, and MutationObserver callbacks. If a microtask adds more microtasks, they are also executed before moving on.<br/><strong>3. Rendering (browser):</strong> Update the DOM, apply CSS styles, and paint the UI (if needed).<br/><strong>4. Macrotask Queue (one task):</strong> Execute the oldest macrotask (setTimeout, setInterval, I/O, UI events).<br/><strong>5. Repeat</strong> — go back to step 1."},{heading:"Microtasks vs Macrotasks Priority",text:"Microtasks have higher priority than macrotasks. After every synchronous task, the Event Loop <strong>drains the entire Microtask Queue</strong> before processing even a single macrotask. This means if a microtask queues another microtask, the macrotask queue is delayed until all microtasks are processed. This is why Promise-based code executes before setTimeout callbacks, even when the timeout is 0ms."},{heading:"Event Loop in Node.js",text:"Node.js's Event Loop has <strong>six phases</strong>: (1) <strong>Timers</strong> — executes setTimeout/setInterval callbacks. (2) <strong>Pending I/O</strong> — executes I/O callbacks deferred from the previous cycle. (3) <strong>Idle/Prepare</strong> — internal use. (4) <strong>Poll</strong> — retrieve new I/O events. (5) <strong>Check</strong> — executes setImmediate callbacks. (6) <strong>Close</strong> — executes close event callbacks. Between each phase, the microtask queue is drained."}],interviewAnswer:"The Event Loop is the concurrency model that allows JavaScript, despite being single-threaded, to handle asynchronous operations without blocking. It works by continuously monitoring the Call Stack. When the stack is empty, the Event Loop first processes the entire Microtask Queue (Promise callbacks, queueMicrotask), then processes one Macrotask (setTimeout, setInterval, I/O callbacks), then potentially re-renders the UI, and repeats. Microtasks always have priority over macrotasks. This model is why Promise.then() executes before setTimeout(() => {}, 0). Understanding the Event Loop is essential for writing predictable asynchronous JavaScript code.",interviewQuestions:[{question:"What is the Event Loop in JavaScript?",answer:"The Event Loop is a mechanism that enables JavaScript's non-blocking concurrency model. It continuously checks if the Call Stack is empty. If so, it processes callbacks from the Microtask Queue (entirely), then processes one callback from the Macrotask Queue, then optionally re-renders the UI, and repeats. It allows JavaScript to perform asynchronous operations without blocking the single thread."},{question:"What is the difference between microtasks and macrotasks in the Event Loop?",answer:"<strong>Microtasks</strong> (Promise.then/catch/finally, queueMicrotask, MutationObserver) are processed immediately after the current synchronous operation and the entire queue is drained before any macrotask. <strong>Macrotasks</strong> (setTimeout, setInterval, I/O, UI events) are processed one at a time per Event Loop iteration. Microtasks have higher priority. This is why Promise callbacks run before setTimeout callbacks."},{question:"Will setTimeout(callback, 0) execute immediately?",answer:"No. setTimeout(callback, 0) schedules the callback in the Macrotask Queue with a minimum delay of 0ms (browsers enforce a minimum of 4ms for nested timeouts). The callback only executes after: (1) All synchronous code on the Call Stack completes. (2) The entire Microtask Queue is drained. (3) The Event Loop picks the callback from the Macrotask Queue. So it will always run after Promise-based callbacks and other synchronous code."},{question:"What is the output of: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);",answer:"Output: <strong>1, 4, 3, 2</strong>. Explanation: 1 and 4 are synchronous (run immediately). The setTimeout callback goes to the Macrotask Queue. The Promise.then callback goes to the Microtask Queue. After synchronous code completes, the Microtask Queue is drained first (logs 3), then one Macrotask is processed (logs 2)."},{question:"Can the Event Loop be blocked? How?",answer:"Yes. A long-running synchronous operation blocks the Event Loop because the Call Stack cannot be emptied. Examples: infinite loops, heavy computation, or synchronous AJAX calls. While the stack is blocked, no callbacks (microtasks or macrotasks) can execute, and the UI cannot re-render. This is why heavy computations should be offloaded to Web Workers or broken into chunks with setTimeout."},{question:"What is the difference between the browser Event Loop and Node.js Event Loop?",answer:"Both follow the same microtask/macrotask priority principle. The browser Event Loop has a rendering step (requestAnimationFrame, style calculation, paint) between microtask and macrotask processing. Node.js's Event Loop has six phases: Timers, Pending I/O, Idle/Prepare, Poll, Check (setImmediate), and Close. Between each phase, the microtask queue (nextTick and Promise callbacks) is drained. Node.js also has process.nextTick() which has higher priority than Promise microtasks."},{question:"What happens if a microtask queues another microtask?",answer:"The new microtask is added to the Microtask Queue and will be executed in the same microtask drain cycle. This can lead to <strong>microtask starvation</strong> — if microtasks continuously queue new microtasks, the Macrotask Queue never gets processed, effectively starving it. This can make UI updates and other macrotasks wait indefinitely."},{question:"What is the role of 'requestAnimationFrame' in the Event Loop?",answer:"requestAnimationFrame (rAF) callbacks are scheduled to run <strong>before</strong> the browser's rendering step but <strong>after</strong> macrotasks. rAF is specifically designed for visual updates and animations. The browser batches all rAF callbacks, runs them, then performs style calculation and paint. This makes rAF more efficient than using setTimeout for animations."},{question:"How does the Event Loop handle multiple tabs/windows?",answer:"Each browser tab or window runs its own Event Loop instance with its own Call Stack, Microtask Queue, and Macrotask Queue. They are completely isolated. Shared data between tabs (via localStorage, BroadcastChannel, etc.) is synchronized at the browser level, not the Event Loop level."},{question:"What is 'stack overflow' in the context of the Event Loop?",answer:"A stack overflow is unrelated to the Event Loop — it occurs when the Call Stack exceeds its limit due to excessive function calls (usually infinite recursion). The Event Loop pauses executing new callbacks until the Call Stack has space. However, a stack overflow is an error that propagates up the stack and, if not caught, terminates the current execution context without affecting the Event Loop's ability to process future callbacks."}],diagramSvg:'<svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="480" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">JavaScript Event Loop</text><!-- Call Stack --><rect x="30" y="65" width="180" height="200" rx="8" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="120" y="90" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">CALL STACK</text><rect x="45" y="105" width="150" height="22" rx="3" fill="#222639"/><text x="55" y="121" fill="#e8eaed" font-size="8" font-family="monospace">console.log(4)</text><rect x="45" y="131" width="150" height="22" rx="3" fill="#222639"/><text x="55" y="147" fill="#e8eaed" font-size="8" font-family="monospace">(anonymous)</text><rect x="45" y="157" width="150" height="22" rx="3" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1"/><text x="55" y="173" fill="#34d399" font-size="8" font-family="monospace">Global EC (always at bottom)</text><text x="120" y="210" text-anchor="middle" fill="#9aa0b0" font-size="9">push on call</text><text x="120" y="225" text-anchor="middle" fill="#9aa0b0" font-size="9">pop on return</text><text x="120" y="240" text-anchor="middle" fill="#f87171" font-size="9">Synchronous only</text><!-- Arrow: stack empty check --><line x1="210" y1="160" x2="255" y2="160" stroke="#9aa0b0" stroke-width="1.5" stroke-dasharray="4" marker-end="url(#arrow)"/><text x="232" y="154" fill="#9aa0b0" font-size="8" text-anchor="middle">Stack empty?</text><!-- Microtask Queue --><rect x="260" y="65" width="180" height="200" rx="8" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="350" y="90" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">MICROTASK QUEUE</text><text x="350" y="108" text-anchor="middle" fill="#9aa0b0" font-size="9">(Priority: HIGH)</text><rect x="275" y="120" width="150" height="18" rx="3" fill="rgba(251,191,36,0.1)"/><text x="285" y="134" fill="#fbbf24" font-size="8">Promise.then(callback)</text><rect x="275" y="142" width="150" height="18" rx="3" fill="rgba(251,191,36,0.1)"/><text x="285" y="156" fill="#fbbf24" font-size="8">queueMicrotask(fn)</text><rect x="275" y="164" width="150" height="18" rx="3" fill="rgba(251,191,36,0.1)"/><text x="285" y="178" fill="#fbbf24" font-size="8">MutationObserver</text><text x="350" y="210" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Drained ENTIRELY</text><text x="350" y="230" text-anchor="middle" fill="#fbbf24" font-size="9">before any macrotask</text><text x="350" y="250" text-anchor="middle" fill="#9aa0b0" font-size="8">(can microtask-starve)</text><!-- Macrotask Queue --><rect x="490" y="65" width="180" height="200" rx="8" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="580" y="90" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">MACROTASK QUEUE</text><text x="580" y="108" text-anchor="middle" fill="#9aa0b0" font-size="9">(Priority: LOW)</text><rect x="505" y="120" width="150" height="18" rx="3" fill="rgba(52,211,153,0.1)"/><text x="515" y="134" fill="#34d399" font-size="8">setTimeout(fn, 100)</text><rect x="505" y="142" width="150" height="18" rx="3" fill="rgba(52,211,153,0.1)"/><text x="515" y="156" fill="#34d399" font-size="8">setInterval(fn, 1000)</text><rect x="505" y="164" width="150" height="18" rx="3" fill="rgba(52,211,153,0.1)"/><text x="515" y="178" fill="#34d399" font-size="8">I/O callbacks</text><text x="580" y="210" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">One per iteration</text><text x="580" y="230" text-anchor="middle" fill="#34d399" font-size="9">after microtasks done</text><!-- Step labels --><rect x="30" y="290" width="640" height="180" rx="8" fill="#1a1d28" stroke="var(--border)"/><text x="350" y="315" text-anchor="middle" fill="#e8eaed" font-size="12" font-weight="bold">Event Loop Iteration Steps</text><text x="50" y="345" fill="#6c9fff" font-size="11" font-weight="bold">Step 1:</text><text x="120" y="345" fill="#e8eaed" font-size="11">Execute all synchronous code on the Call Stack</text><text x="50" y="370" fill="#fbbf24" font-size="11" font-weight="bold">Step 2:</text><text x="120" y="370" fill="#e8eaed" font-size="11">Drain the ENTIRE Microtask Queue (Promise callbacks, etc.)</text><text x="50" y="395" fill="#34d399" font-size="11" font-weight="bold">Step 3:</text><text x="120" y="395" fill="#e8eaed" font-size="11">Take ONE macrotask from the Macrotask Queue and execute it</text><text x="50" y="420" fill="#a78bfa" font-size="11" font-weight="bold">Step 4:</text><text x="120" y="420" fill="#e8eaed" font-size="11">(Browser) Re-render UI if needed (style + layout + paint)</text><text x="50" y="448" fill="#9aa0b0" font-size="11">Then repeat from Step 1 (check Call Stack, etc.)</text></svg>',codeExamples:[{title:"Event Loop Order: Synchronous, Micro, Macro",useCase:"Understanding execution priority",code:`console.log('1 - sync');

setTimeout(() => {
  console.log('2 - macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - microtask (Promise.then)');
});

queueMicrotask(() => {
  console.log('4 - microtask (queueMicrotask)');
});

console.log('5 - sync');

// Output:
// 1 - sync
// 5 - sync
// 3 - microtask (Promise.then)
// 4 - microtask (queueMicrotask)
// 2 - macrotask (setTimeout)`,description:"Synchronous code runs first (1, 5). Then the entire Microtask Queue is drained (3, 4) — Promises and queueMicrotask have equal priority. Finally, one macrotask is processed (2)."},{title:"Microtask Starvation Example",useCase:"When microtasks block macrotasks",code:`function starve() {
  let count = 0;

  function doMicrotask() {
    console.log('Microtask:', ++count);
    if (count < 5) {
      // Queue another microtask before the current one finishes
      queueMicrotask(doMicrotask);
    }
  }

  setTimeout(() => {
    console.log('Macrotask finally runs!');
  }, 0);

  queueMicrotask(doMicrotask);
}

starve();
// Output:
// Microtask: 1
// Microtask: 2
// Microtask: 3
// Microtask: 4
// Microtask: 5
// Macrotask finally runs!

// The setTimeout callback is delayed until ALL microtasks complete`,description:"When microtasks continuously queue new microtasks, the Microtask Queue is never fully emptied, so macrotasks (and UI rendering) are delayed. This is called microtask starvation."},{title:"Blocking the Event Loop with Heavy Computation",useCase:"Avoiding UI freezes",code:`// BAD: blocks the Event Loop for seconds
function heavyComputation() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Busy wait - blocks everything!
    Math.sqrt(Math.random());
  }
  console.log('Done');
}

// Click handlers, animations, etc. are blocked for 5 seconds

// GOOD: break work into chunks using setTimeout
function chunkedComputation(iterations, chunk = 1000) {
  let i = 0;

  function doChunk() {
    for (let j = 0; j < chunk && i < iterations; j++, i++) {
      Math.sqrt(Math.random());
    }
    if (i < iterations) {
      // Yield to Event Loop so UI can update
      setTimeout(doChunk, 0);
    } else {
      console.log('Done with chunks');
    }
  }

  doChunk();
}

// BEST: use Web Worker for truly heavy work
// const worker = new Worker('heavy-worker.js');`,description:"Long-running synchronous operations block the Event Loop, freezing the UI. Break work into chunks with setTimeout, or use Web Workers for parallel execution without blocking the main thread."},{title:"Event Loop in Node.js: process.nextTick vs Promise",useCase:"Node.js-specific microtask behavior",code:`// In Node.js, process.nextTick has priority over Promise microtasks
console.log('1 - sync');

Promise.resolve().then(() => {
  console.log('2 - Promise microtask');
});

process.nextTick(() => {
  console.log('3 - nextTick (higher priority microtask)');
});

setTimeout(() => {
  console.log('4 - macrotask');
}, 0);

console.log('5 - sync');

// Node.js Output:
// 1 - sync
// 5 - sync
// 3 - nextTick (higher priority microtask)
// 2 - Promise microtask
// 4 - macrotask

// In browsers, Promise and queueMicrotask have the same priority.
// In Node.js, nextTick queue is checked BEFORE Promise microtasks.`,description:"Node.js has its own microtask phase ordering. The nextTick queue is drained before the Promise microtask queue, even though both are 'microtasks'. This is an important distinction when writing Node.js applications."},{title:"await and the Event Loop",useCase:"How async/await interacts with the loop",code:`async function asyncFunction() {
  console.log('A - inside async (sync part)');

  await Promise.resolve();
  // The code after await is wrapped in a microtask callback

  console.log('C - after await (microtask)');
}

console.log('1 - sync');

asyncFunction();

console.log('2 - sync');

setTimeout(() => console.log('3 - macrotask'), 0);

Promise.resolve().then(() => console.log('4 - Promise microtask'));

console.log('5 - sync');

// Output:
// 1 - sync
// A - inside async (sync part)
// 2 - sync
// 5 - sync
// C - after await (microtask)
// 4 - Promise microtask
// 3 - macrotask

// 'await' splits the function: the part before await is sync,
// the part after await is a microtask continuation.`,description:"async/await doesn't change the Event Loop. The code before the first 'await' runs synchronously. The code after 'await' is scheduled as a microtask. This is why 'C' logs after all synchronous code but before setTimeout."}],mcqQuestions:[{question:"What is the correct execution order? setTimeout(() => console.log('A'), 0); Promise.resolve().then(() => console.log('B')); console.log('C');",options:["A, B, C","C, A, B","C, B, A","A, C, B"],answer:2,explanation:"C is synchronous (executes first). B is a microtask (executes after sync code, before macrotasks). A is a macrotask (executes last). Output: C, B, A."},{question:"How many macrotasks does the Event Loop process per iteration?",options:["All of them","The entire Macrotask Queue","Exactly one","As many as the microtask queue allows"],answer:2,explanation:"The Event Loop processes exactly ONE macrotask per iteration (after draining the entire Microtask Queue). This ensures fairness and prevents macrotask starvation."},{question:"What happens if a microtask queues another microtask?",options:["The new microtask waits for the next Event Loop iteration","The new microtask is executed in the same microtask drain cycle","An error is thrown","The new microtask becomes a macrotask"],answer:1,explanation:"The Microtask Queue is drained entirely in one cycle. If a microtask adds another microtask, it is executed immediately in the same cycle, potentially starving macrotasks."},{question:"In the browser, when does UI rendering occur in the Event Loop?",options:["Before every microtask","After macrotasks, before the next iteration","Synchronously with every DOM change","In a separate thread"],answer:1,explanation:"UI rendering occurs after the current macrotask completes and before the next Event Loop iteration. The browser batches DOM changes and applies them during the render step."},{question:"What is the minimum timeout value for nested setTimeout calls (>= 5th level) in browsers?",options:["0ms","4ms","10ms","100ms"],answer:1,explanation:"HTML5 spec requires that nested setTimeout calls (level 5+) have a minimum delay of 4ms. This prevents malicious code from starving the Event Loop with tiny timeouts."},{question:"Which of the following is true about the Event Loop?",options:["JavaScript has multiple Call Stacks","Microtasks are processed before macrotasks","setTimeout(0) runs before synchronous code","The Event Loop runs in a separate thread"],answer:1,explanation:"Microtasks (Promise callbacks, queueMicrotask) are always processed before macrotasks (setTimeout, setInterval, I/O). This is a fundamental rule of the Event Loop."},{question:"What Node.js microtask has higher priority than Promise callbacks?",options:["setTimeout","process.nextTick","setImmediate","fs.readFile"],answer:1,explanation:"In Node.js, the process.nextTick queue is drained before the Promise microtask queue, giving nextTick callbacks the highest priority among asynchronous callbacks."},{question:"What happens to the Event Loop while a synchronous while loop runs for 5 seconds?",options:["Microtasks still execute","The Event Loop is completely blocked","Macrotasks still execute","UI continues to update"],answer:1,explanation:"The Call Stack cannot be emptied until the while loop finishes. Since the Event Loop can only process callbacks when the stack is empty, everything is blocked — microtasks, macrotasks, and UI rendering."},{question:"What is the role of requestAnimationFrame in the Event Loop?",options:["It runs in the Microtask Queue","It runs before the browser render step, after macrotasks","It runs synchronously with setTimeout","It bypasses the Event Loop entirely"],answer:1,explanation:"requestAnimationFrame callbacks are scheduled to run before the browser's rendering step but after the current macrotask is processed. This makes them ideal for smooth, synchronized animations."},{question:"What will this log? console.log('1'); setTimeout(() => console.log('2'), 0); queueMicrotask(() => console.log('3')); console.log('4');",options:["1, 2, 3, 4","1, 4, 3, 2","1, 4, 2, 3","4, 1, 3, 2"],answer:1,explanation:"Synchronous code (1, 4) runs first. Then microtasks (queueMicrotask logs 3) are drained. Then macrotasks (setTimeout logs 2). Output: 1, 4, 3, 2."}]};export{e as event_loop};
