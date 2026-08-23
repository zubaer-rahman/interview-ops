export const micro_task_queue = {
  "title": "Micro Task Queue",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "The <strong>Microtask Queue</strong> holds callbacks from Promises (<code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>), <code>queueMicrotask()</code>, and <code>MutationObserver</code>.",
    "Microtasks are processed <strong>after</strong> the current synchronous operation completes and <strong>before</strong> any macrotask or UI rendering.",
    "The Microtask Queue is <strong>drained entirely</strong> in each Event Loop iteration — if a microtask adds another microtask, it runs in the same cycle.",
    "Microtasks enable JavaScript to handle Promise resolutions <strong>immediately</strong> after synchronous code, without waiting for macrotasks."
  ],
  "laymanDefinition": "The Microtask Queue is like a priority mailbox. When you receive an important letter (a Promise resolves), you don't throw it in the regular pile — you put it in a special 'high priority' box. As soon as you finish your current task, you check this box and handle ALL the letters in it before doing anything else (like reading the newspaper or taking a break). This is why Promise callbacks run before setTimeout callbacks — they go in this priority box.",
  "deepDive": [
    {
      "heading": "What Feeds the Microtask Queue?",
      "text": "The Microtask Queue receives callbacks from: (1) <strong>Promise</strong> reactions — <code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>. (2) <strong>queueMicrotask()</strong> — explicitly queue a microtask. (3) <strong>MutationObserver</strong> — DOM mutation callbacks. (4) <strong>await</strong> continuations — after an <code>await</code>, the rest of the async function is scheduled as a microtask."
    },
    {
      "heading": "Microtask Drain Behavior",
      "text": "When the Event Loop checks the Microtask Queue, it does NOT just take one callback. It processes ALL callbacks currently in the queue, PLUS any callbacks that are added while processing. This means if a microtask callback queues another microtask, that new microtask is executed in the same cycle. The queue is only considered 'drained' when it is completely empty."
    },
    {
      "heading": "Microtask Starvation",
      "text": "Because microtasks are drained entirely before any macrotask, a recursive microtask scheduler (a microtask that keeps queueing more microtasks) can prevent macrotasks from ever executing. This is called 'microtask starvation'. It's rare in practice but important to understand. The browser may eventually detect this and throw an error, but it's best to avoid unbounded microtask recursion."
    },
    {
      "heading": "Microtasks vs Macrotasks: Key Differences",
      "text": "<strong>Microtasks:</strong> Processed after every macrotask, entire queue drained per cycle. Higher priority. Used for Promise reactions and async/await continuations. <strong>Macrotasks:</strong> Processed one per Event Loop iteration. Lower priority. Used for setTimeout, setInterval, I/O, and UI events."
    }
  ],
  "interviewAnswer": "The Microtask Queue is a high-priority queue in JavaScript's Event Loop that holds callbacks from Promise resolutions, queueMicrotask, and MutationObserver. After each synchronous operation on the Call Stack completes, the Event Loop drains the entire Microtask Queue (including any microtasks queued during draining) before processing a single macrotask or rendering the UI. This ensures that Promise-based asynchronous operations are handled promptly and predictably. Understanding microtasks is essential for mastering the timing of asynchronous operations in JavaScript.",
  "interviewQuestions": [
    {
      "question": "What goes into the Microtask Queue?",
      "answer": "The Microtask Queue receives: Promise .then()/.catch()/.finally() callbacks, queueMicrotask() callbacks, MutationObserver callbacks, and async function continuations after 'await'. These are all 'high-priority' asynchronous callbacks that should execute before any macrotask."
    },
    {
      "question": "How is the Microtask Queue different from the Macrotask Queue?",
      "answer": "The Microtask Queue is drained <strong>entirely</strong> after every synchronous operation and before any macrotask. The Macrotask Queue is processed <strong>one task at a time</strong> per Event Loop iteration. Microtasks have higher priority. If both queues have pending callbacks, all microtasks run before the first macrotask."
    },
    {
      "question": "What happens if a microtask callback throws an error?",
      "answer": "If a microtask throws an uncaught error, it propagates to the global error handler (window.onerror or process.on('uncaughtException')). The error does NOT prevent the Event Loop from continuing to drain the rest of the Microtask Queue. However, unhandled Promise rejections are an exception — they generate a warning but don't crash the process in modern environments."
    },
    {
      "question": "Can you create a microtask without using Promises?",
      "answer": "Yes, using <code>queueMicrotask(fn)</code>, which is available in modern browsers and Node.js. Also, <code>MutationObserver</code> callbacks are microtasks. In older environments, you could use <code>Promise.resolve().then(fn)</code> as a polyfill."
    },
    {
      "question": "When does the Microtask Queue NOT get drained?",
      "answer": "The Microtask Queue is NOT drained when the Call Stack is actively executing synchronous code. It is only checked when the stack is empty. If synchronous code runs for 10 seconds (e.g., a while loop), microtasks wait in the queue and are all processed immediately after the loop finishes."
    },
    {
      "question": "Are all Promise callbacks microtasks?",
      "answer": "Yes. Promise <code>.then()</code>, <code>.catch()</code>, and <code>.finally()</code> callbacks are always scheduled as microtasks. The Promise constructor's executor function (the callback passed to <code>new Promise(fn)</code>) runs synchronously, not as a microtask. Only the reaction callbacks (then/catch/finally) are microtasks."
    },
    {
      "question": "What is an example of microtask starvation?",
      "answer": "A microtask that queues itself recursively: <pre><code>function starve() {\n  queueMicrotask(() => {\n    console.log('microtask');\n    starve(); // queues another microtask\n  });\n}\nstarve();\nsetTimeout(() => console.log('macrotask'), 0);\n// The setTimeout callback NEVER runs</code></pre>This keeps the Microtask Queue non-empty forever, so macrotasks are never processed."
    },
    {
      "question": "How does 'await' interact with the Microtask Queue?",
      "answer": "When an async function hits <code>await</code>, the function is suspended and the rest of the function body is scheduled as a microtask. This means the code after <code>await</code> executes after all synchronous code but before any macrotask. If the awaited value is already a resolved Promise, the continuation is still a microtask (not synchronous)."
    },
    {
      "question": "What is the processing order inside the Microtask Queue?",
      "answer": "The Microtask Queue is a FIFO (First In, First Out) queue. Callbacks are processed in the order they were queued. If a microtask queues another microtask, the new one goes to the back of the queue and will be processed before the Event Loop checks the Macrotask Queue."
    },
    {
      "question": "How does MutationObserver use the Microtask Queue?",
      "answer": "MutationObserver callbacks are scheduled as microtasks, batched together. All DOM mutations that occurred since the last microtask check are reported in a single callback. This is more efficient than firing a callback per mutation. The callback runs after synchronous code but before macrotasks — which is why DOM changes made via Promise callbacks may not be visually rendered yet when the MutationObserver fires."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Microtask Queue — Processing Order</text><!-- Header --><rect x=\"40\" y=\"60\" width=\"620\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"var(--border)\"/><text x=\"350\" y=\"85\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">After synchronous code completes, Event Loop drains ENTIRE Microtask Queue before any macrotask or render</text><!-- Queue items --><rect x=\"40\" y=\"120\" width=\"140\" height=\"36\" rx=\"4\" fill=\"rgba(251,191,36,0.12)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"143\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">Promise 1</text><rect x=\"195\" y=\"120\" width=\"140\" height=\"36\" rx=\"4\" fill=\"rgba(251,191,36,0.12)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"265\" y=\"143\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">queueMicrotask</text><rect x=\"350\" y=\"120\" width=\"140\" height=\"36\" rx=\"4\" fill=\"rgba(251,191,36,0.12)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"420\" y=\"143\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">Promise 2</text><rect x=\"505\" y=\"120\" width=\"140\" height=\"36\" rx=\"4\" fill=\"rgba(251,191,36,0.12)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"575\" y=\"143\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">MutationObs</text><!-- Arrow pointing down to processing --><line x1=\"110\" y1=\"160\" x2=\"110\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"265\" y1=\"160\" x2=\"265\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"575\" y1=\"160\" x2=\"575\" y2=\"200\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"350\" y=\"188\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">FIFO Processing Order</text><!-- Processing area --><rect x=\"40\" y=\"205\" width=\"620\" height=\"55\" rx=\"6\" fill=\"rgba(52,211,153,0.06)\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"350\" y=\"228\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">Processing... (drain entirely)</text><text x=\"60\" y=\"250\" fill=\"#9aa0b0\" font-size=\"10\">1. Execute Promise 1 .then()  -->  2. Execute queueMicrotask(fn)  -->  3. Execute Promise 2 .then()  -->  4. Execute MutationObserver</text><!-- If new microtask queued --><rect x=\"40\" y=\"280\" width=\"620\" height=\"60\" rx=\"6\" fill=\"rgba(248,113,113,0.06)\" stroke=\"#f87171\" stroke-width=\"1\" stroke-dasharray=\"3\"/><text x=\"350\" y=\"302\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"10\" font-weight=\"bold\">If a microtask queues ANOTHER microtask...</text><text x=\"60\" y=\"322\" fill=\"#f87171\" font-size=\"10\">It goes to the BACK of the Microtask Queue and is ALSO processed in the same drain cycle.</text><text x=\"60\" y=\"338\" fill=\"#f87171\" font-size=\"10\">Macrotasks are blocked until microtask queue is COMPLETELY empty.</text></svg>",
  "codeExamples": [
    {
      "title": "Using queueMicrotask Directly",
      "useCase": "Explicit microtask scheduling",
      "code": "console.log('Start');\n\n// Schedule a microtask explicitly\nqueueMicrotask(() => {\n  console.log('Microtask: runs after sync, before macrotasks');\n});\n\nsetTimeout(() => {\n  console.log('Macrotask: runs after microtasks');\n}, 0);\n\nconsole.log('End');\n\n// Output:\n// Start\n// End\n// Microtask: runs after sync, before macrotasks\n// Macrotask: runs after microtasks",
      "description": "queueMicrotask() directly schedules a callback in the Microtask Queue. It's a cleaner alternative to Promise.resolve().then(fn) for cases where you just need a microtask without a Promise."
    },
    {
      "title": "All Microtasks Drain Before Macrotasks",
      "useCase": "Multiple microtask types ordering",
      "code": "setTimeout(() => console.log('1 - macrotask'), 0);\n\nPromise.resolve().then(() => {\n  console.log('2 - Promise.then');\n});\n\nqueueMicrotask(() => {\n  console.log('3 - queueMicrotask');\n});\n\n// Microtasks that queue more microtasks\nPromise.resolve().then(() => {\n  console.log('4 - Promise.then that queues another');\n  queueMicrotask(() => {\n    console.log('5 - nested microtask still in same cycle');\n  });\n});\n\nconsole.log('6 - sync');\n\n// Output:\n// 6 - sync\n// 2 - Promise.then\n// 3 - queueMicrotask\n// 4 - Promise.then that queues another\n// 5 - nested microtask still in same cycle\n// 1 - macrotask\n\n// Note: 5 runs BEFORE 1, proving the entire microtask queue is drained",
      "description": "All microtasks run to completion before the first macrotask. Even nested microtasks (queued by other microtasks) are processed in the same cycle. The setTimeout callback only runs after the microtask queue is completely empty."
    },
    {
      "title": "Microtask vs Macrotask Error Handling",
      "useCase": "Error propagation differences",
      "code": "// Microtask error\nqueueMicrotask(() => {\n  throw new Error('Microtask error');\n});\n\n// Macrotask error\nsetTimeout(() => {\n  throw new Error('Macrotask error');\n}, 0);\n\nconsole.log('Sync code runs');\n\n// Both errors are caught by window.onerror or process.on('uncaughtException')\n// But the microtask error will be detected FIRST (before setTimeout)\n// However, if a microtask error goes unhandled:\n// - Node.js: process.on('unhandledRejection') for Promise, \n//   process.on('uncaughtException') for queueMicrotask\n// - Browser: window.onerror for both\n\n// Fix microtask errors with try/catch:\nqueueMicrotask(() => {\n  try {\n    throw new Error('Caught error');\n  } catch (e) {\n    console.log('Handled:', e.message);\n  }\n});",
      "description": "Errors in microtasks propagate to the global error handler, just like macrotasks. However, microtask errors surface earlier because microtasks run before macrotasks. Always use try/catch inside microtasks for proper error handling."
    },
    {
      "title": "MutationObserver Uses Microtasks",
      "useCase": "Observing DOM changes synchronously",
      "code": "// Create an observer\nconst observer = new MutationObserver((mutations) => {\n  console.log('Mutation observed:', mutations.length, 'changes');\n  console.log('This runs as a MICROTASK');\n});\n\n// Start observing\ntarget = document.getElementById('target');\nobserver.observe(target, { childList: true });\n\n// Make a change\ntarget.textContent = 'New text';\n// MutationObserver callback is scheduled as a microtask\n\nconsole.log('After mutation (sync)');\n\nPromise.resolve().then(() => {\n  console.log('Promise.then (also microtask)');\n});\n\nsetTimeout(() => {\n  console.log('setTimeout (macrotask)');\n}, 0);\n\n// Output:\n// After mutation (sync)\n// Mutation observed: 1 changes\n// Promise.then (also microtask)\n// setTimeout (macrotask)\n\n// Note: MutationObserver and Promise.then are in the same microtask queue\n// Their relative order depends on which was queued first",
      "description": "MutationObserver callbacks are microtasks, queued after the synchronous code that caused the mutation completes. They share the Microtask Queue with Promise callbacks, so all process before any setTimeouts."
    },
    {
      "title": "Await Continuation is a Microtask",
      "useCase": "Understanding async/await timing",
      "code": "async function demo() {\n  console.log('1 - async function starts (sync)');\n  \n  await Promise.resolve();\n  // The rest of this function is a MICROTASK continuation\n  \n  console.log('3 - after await (microtask)');\n}\n\ndemo();\n\nconsole.log('2 - sync after calling demo');\n\nsetTimeout(() => {\n  console.log('5 - setTimeout (macrotask)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('4 - Promise.then (microtask)');\n});\n\nconsole.log('2.5 - more sync');\n\n// Output:\n// 1 - async function starts (sync)\n// 2 - sync after calling demo\n// 2.5 - more sync\n// 3 - after await (microtask)\n// 4 - Promise.then (microtask)\n// 5 - setTimeout (macrotask)",
      "description": "After 'await', the rest of the async function body is scheduled as a microtask. That's why code after await always runs after all synchronous code but before any setTimeout callbacks."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which APIs add callbacks to the Microtask Queue?",
      "options": [
        "setTimeout",
        "Promise.then, queueMicrotask, MutationObserver",
        "setInterval",
        "addEventListener"
      ],
      "answer": 1,
      "explanation": "Promise.then/catch/finally, queueMicrotask, and MutationObserver all schedule callbacks in the Microtask Queue. setTimeout/setInterval and event listeners use the Macrotask Queue."
    },
    {
      "question": "What is the Event Loop's rule for processing the Microtask Queue?",
      "options": [
        "One microtask per iteration",
        "Drain the entire queue before any macrotask",
        "Process microtasks after macrotasks",
        "Microtasks run in a separate thread"
      ],
      "answer": 1,
      "explanation": "The Microtask Queue is drained entirely — all pending microtasks are processed — before the Event Loop processes a single macrotask or re-renders the UI."
    },
    {
      "question": "What will this log? queueMicrotask(() => console.log('A')); setTimeout(() => console.log('B'), 0); console.log('C');",
      "options": [
        "A, B, C",
        "C, A, B",
        "C, B, A",
        "A, C, B"
      ],
      "answer": 1,
      "explanation": "C is synchronous. A is a microtask (runs after sync, before macrotasks). B is a macrotask (runs last). Output: C, A, B."
    },
    {
      "question": "If a microtask queues another microtask, when does the second one run?",
      "options": [
        "In the next Event Loop iteration",
        "Immediately, in the same microtask drain cycle",
        "After the next macrotask",
        "Never — it's ignored"
      ],
      "answer": 1,
      "explanation": "The Microtask Queue is drained continuously until empty. If a microtask queues another microtask, it runs in the same cycle before any macrotask is processed."
    },
    {
      "question": "What method allows you to explicitly queue a microtask without using Promises?",
      "options": [
        "setTimeout(fn, 0)",
        "queueMicrotask(fn)",
        "setImmediate(fn)",
        "requestAnimationFrame(fn)"
      ],
      "answer": 1,
      "explanation": "queueMicrotask(fn) explicitly queues a function in the Microtask Queue. It's available in modern browsers and Node.js. The polyfill is Promise.resolve().then(fn)."
    },
    {
      "question": "Which of the following is NOT a microtask source?",
      "options": [
        "Promise.resolve().then(fn)",
        "queueMicrotask(fn)",
        "new MutationObserver(fn)",
        "setInterval(fn, 100)"
      ],
      "answer": 3,
      "explanation": "setInterval callbacks go to the Macrotask Queue, not the Microtask Queue. The other three are all microtask sources."
    },
    {
      "question": "What is microtask starvation?",
      "options": [
        "When microtasks are never queued",
        "When microtasks keep queuing new microtasks, preventing macrotasks from executing",
        "When the microtask queue is empty",
        "When a macrotask runs before microtasks"
      ],
      "answer": 1,
      "explanation": "Microtask starvation occurs when microtasks continuously queue new microtasks, keeping the Microtask Queue non-empty indefinitely and preventing macrotasks from ever being processed."
    },
    {
      "question": "When does the code after 'await' execute in the Event Loop?",
      "options": [
        "Synchronously, immediately",
        "As a microtask, after all sync code",
        "As a macrotask, after setTimeout",
        "In the next frame"
      ],
      "answer": 1,
      "explanation": "After 'await', the rest of the async function is scheduled as a microtask. It executes after all synchronous code but before any macrotask callbacks."
    },
    {
      "question": "Does the Promise constructor's executor function run synchronously or as a microtask?",
      "options": [
        "As a microtask",
        "Synchronously",
        "As a macrotask",
        "It depends on the browser"
      ],
      "answer": 1,
      "explanation": "The executor function passed to new Promise(fn) runs synchronously. Only the reaction callbacks (.then, .catch, .finally) are scheduled as microtasks."
    },
    {
      "question": "What will this code log? setTimeout(() => console.log('A'), 0); Promise.resolve().then(() => console.log('B')); Promise.resolve().then(() => { queueMicrotask(() => console.log('C')); }); console.log('D');",
      "options": [
        "D, B, A, C",
        "D, B, C, A",
        "D, A, B, C",
        "B, D, C, A"
      ],
      "answer": 1,
      "explanation": "D is sync. B and C's outer .then are microtasks. C's queueMicrotask is a nested microtask that also runs in the same cycle. A is the macrotask. Output: D, B, C, A."
    }
  ]
};
