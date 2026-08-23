export const macro_task_queue = {
  "title": "Macro Task Queue",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "The <strong>Macrotask Queue</strong> (also called Task Queue or Callback Queue) holds callbacks from <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code> (Node), I/O operations, and <strong>UI events</strong> (clicks, keypresses, etc.).",
    "The Event Loop processes <strong>one macrotask per iteration</strong> — after draining the entire Microtask Queue.",
    "Between macrotask processing, the browser may <strong>re-render the UI</strong> (style calculation, layout, paint).",
    "Macrotasks have <strong>lower priority</strong> than microtasks. Even <code>setTimeout(cb, 0)</code> waits for all microtasks to complete first."
  ],
  "laymanDefinition": "The Macrotask Queue is your regular to-do list. When you receive a notification (like a message alert or a timer going off), you don't drop everything immediately. You finish your current task first, then handle all your priority tasks (microtasks), and THEN pick up one item from this regular list. After handling that one item, you check for priority tasks again before picking up the next regular task. This is why setTimeout and click handlers don't interrupt the current running code — they wait in line.",
  "deepDive": [
    {
      "heading": "What Feeds the Macrotask Queue?",
      "text": "The Macrotask Queue receives callbacks from: (1) <strong>Timers</strong> — setTimeout, setInterval. (2) <strong>I/O</strong> — file system operations (Node.js), network requests. (3) <strong>UI Events</strong> — clicks, keypresses, mouse events, focus events (in browsers). (4) <strong>setImmediate</strong> (Node.js only). (5) <strong>requestAnimationFrame</strong> — though this has special handling before the render step."
    },
    {
      "heading": "One Macrotask Per Iteration",
      "text": "The Event Loop processes exactly <strong>one</strong> macrotask per iteration. After executing that macrotask, it checks the Microtask Queue (drains it entirely), potentially re-renders the UI, and then picks the next macrotask. This 'one per iteration' rule ensures fairness — no single macrotask type can monopolize the Event Loop."
    },
    {
      "heading": "Macrotask Prioritization (Browser-Specific)",
      "text": "While the spec says one macrotask per iteration, browsers internally have different macrotask sources with different priorities. For example, user interaction events (clicks, keypresses) may be prioritized over setTimeout callbacks in some browsers. This is an optimization to make UI interactions feel more responsive."
    },
    {
      "heading": "Macrotasks and UI Rendering",
      "text": "Between processing macrotasks, the browser checks if a re-render is needed. If the DOM was modified, styles were changed, or an animation frame is due, the browser performs style calculation, layout, and paint. This is why heavy DOM manipulation in a macrotask can cause layout thrashing — the browser re-renders between macrotasks, not during them."
    }
  ],
  "interviewAnswer": "The Macrotask Queue holds callbacks from timers (setTimeout, setInterval), I/O operations, UI events (clicks, keypresses), and setImmediate (Node.js). The Event Loop processes exactly one macrotask per iteration, only after the Microtask Queue has been completely drained. Between macrotasks, the browser may re-render the UI. Macrotasks have lower priority than microtasks — even setTimeout with 0ms delay will not execute until all microtasks are processed. Understanding the distinction between microtasks and macrotasks is crucial for predicting JavaScript execution order.",
  "interviewQuestions": [
    {
      "question": "What types of callbacks go into the Macrotask Queue?",
      "answer": "The Macrotask Queue receives: setTimeout and setInterval callbacks, I/O callbacks (file reads, network requests), UI event callbacks (click, keypress, mousedown, etc.), setImmediate (Node.js), and requestAnimationFrame (special handling before render)."
    },
    {
      "question": "How many macrotasks does the Event Loop process per iteration?",
      "answer": "Exactly one. After processing one macrotask, the Event Loop drains the entire Microtask Queue, potentially re-renders the UI, and then processes the next macrotask. This one-per-iteration rule ensures fairness across different task sources."
    },
    {
      "question": "What is the difference between how the Microtask Queue and Macrotask Queue are processed?",
      "answer": "The Microtask Queue is <strong>drained entirely</strong> (all tasks) each time it is checked. The Macrotask Queue is processed <strong>one task at a time</strong> per Event Loop iteration. Microtasks always have priority — if a macrotask queues a microtask, that microtask runs before the next macrotask."
    },
    {
      "question": "Can a macrotask queue a microtask? What happens?",
      "answer": "Yes. When a macrotask callback runs, it can queue microtasks (e.g., resolve a Promise, call queueMicrotask). Those microtasks are executed <strong>immediately</strong> after the current macrotask completes, before the Event Loop picks the next macrotask. This is the mechanism by which Promise reactions become 'asynchronous but as soon as possible'."
    },
    {
      "question": "What happens to the Macrotask Queue during a long synchronous operation?",
      "answer": "Macrotasks accumulate in the queue. All pending macrotasks remain queued until the synchronous operation completes and the microtask queue is drained. Once the Event Loop resumes, it processes all accumulated microtasks, then the next macrotask. The delay can cause timer inaccuracies — a setTimeout of 100ms may actually fire after 500ms if the Event Loop was blocked."
    },
    {
      "question": "Are UI event callbacks (like click) macrotasks?",
      "answer": "Yes. UI event callbacks are macrotasks. When a user clicks a button, the click event is queued in the Macrotask Queue. However, some browsers prioritize user interaction events over timer callbacks to maintain responsiveness. This means a click handler might execute before a setTimeout that was queued earlier."
    },
    {
      "question": "How does setImmediate differ from setTimeout in Node.js?",
      "answer": "setImmediate callbacks are executed in the 'Check' phase of Node.js's Event Loop, which occurs immediately after the 'Poll' phase. setTimeout callbacks are executed in the 'Timers' phase, which comes first. setImmediate is specifically designed to run callbacks as soon as possible after I/O events, making it more efficient than setTimeout(fn, 0) for deferring execution until the next iteration."
    },
    {
      "question": "What is the minimum delay for setTimeout in browsers?",
      "answer": "The HTML5 spec specifies a minimum delay of 4ms for nested setTimeout calls (level 5+). For the first 4 levels, the minimum is 0ms (though browsers may enforce a small minimum). In practice, most browsers enforce at least 1-2ms even for the first call. These minimums exist to prevent timer-based CPU exhaustion."
    },
    {
      "question": "Can you have multiple Macrotask Queues?",
      "answer": "Yes, conceptually. The HTML spec defines multiple macrotask sources (timers, I/O, UI events), and browsers may maintain separate queues for different sources with different priorities. For example, user interaction tasks may have a separate, higher-priority queue than timer tasks. However, the fundamental rule of 'one task per iteration' still applies."
    },
    {
      "question": "How does 'debouncing' relate to the Macrotask Queue?",
      "answer": "Debouncing uses setTimeout (which queues a macrotask) to delay the execution of a function until after a specified quiet period. Each new invocation cancels the previous pending macrotask and schedules a new one. This pattern prevents functions from being called too frequently. Throttling is similar but ensures at most one call per specified interval by checking whether a macrotask is already pending."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"380\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Macrotask Queue — Event Loop Integration</text><text x=\"350\" y=\"60\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">One macrotask per iteration, after microtasks are drained</text><!-- Left: Call Stack + Microtask --><rect x=\"30\" y=\"80\" width=\"200\" height=\"270\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"105\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">1. Call Stack + Microtasks</text><text x=\"45\" y=\"130\" fill=\"#e8eaed\" font-size=\"10\">Execute synchronous code</text><text x=\"45\" y=\"150\" fill=\"#fbbf24\" font-size=\"10\">⬇ Drain ALL microtasks</text><text x=\"45\" y=\"175\" fill=\"#9aa0b0\" font-size=\"10\">(Promise callbacks,</text><text x=\"45\" y=\"193\" fill=\"#9aa0b0\" font-size=\"10\"> queueMicrotask,</text><text x=\"45\" y=\"211\" fill=\"#9aa0b0\" font-size=\"10\"> MutationObserver)</text><rect x=\"45\" y=\"235\" width=\"170\" height=\"95\" rx=\"5\" fill=\"#222639\" stroke=\"var(--border)\"/><text x=\"130\" y=\"257\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\" font-weight=\"bold\">Stack Empty Check</text><text x=\"60\" y=\"278\" fill=\"#9aa0b0\" font-size=\"9\">Event Loop asks:</text><text x=\"60\" y=\"296\" fill=\"#e8eaed\" font-size=\"9\">\"Is stack empty?\"</text><text x=\"60\" y=\"314\" fill=\"#e8eaed\" font-size=\"9\">Yes -> Process next step</text><!-- Arrow to Macrotask --><line x1=\"230\" y1=\"200\" x2=\"260\" y2=\"200\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"245\" y=\"194\" fill=\"#34d399\" font-size=\"9\">stack empty</text><!-- Right: Macrotask Queue --><rect x=\"265\" y=\"80\" width=\"200\" height=\"270\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"365\" y=\"105\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">2. Macrotask Queue</text><!-- Queue items --><rect x=\"280\" y=\"120\" width=\"170\" height=\"30\" rx=\"4\" fill=\"rgba(52,211,153,0.1)\" stroke=\"#34d399\" stroke-width=\"1\"/><text x=\"365\" y=\"140\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\">click event handler</text><rect x=\"280\" y=\"158\" width=\"170\" height=\"30\" rx=\"4\" fill=\"rgba(52,211,153,0.1)\" stroke=\"#34d399\" stroke-width=\"1\"/><text x=\"365\" y=\"178\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\">setInterval callback</text><rect x=\"280\" y=\"196\" width=\"170\" height=\"30\" rx=\"4\" fill=\"rgba(52,211,153,0.1)\" stroke=\"#34d399\" stroke-width=\"1\"/><text x=\"365\" y=\"216\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\" font-weight=\"bold\">→ setTimeout(fn, 0)</text><rect x=\"280\" y=\"234\" width=\"170\" height=\"30\" rx=\"4\" fill=\"rgba(52,211,153,0.1)\" stroke=\"#34d399\" stroke-width=\"1\"/><text x=\"365\" y=\"254\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\">I/O callback (fs.read)</text><text x=\"365\" y=\"290\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Take ONE from front</text><text x=\"365\" y=\"308\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Execute it</text><text x=\"365\" y=\"326\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"10\">Back to check microtasks!</text><!-- Right: Render --><rect x=\"500\" y=\"80\" width=\"170\" height=\"270\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"585\" y=\"105\" text-anchor=\"middle\" fill=\"#a78bfa\" font-size=\"12\" font-weight=\"bold\">3. UI Render (Browser)</text><text x=\"515\" y=\"135\" fill=\"#e8eaed\" font-size=\"10\">Style calculation</text><text x=\"515\" y=\"158\" fill=\"#e8eaed\" font-size=\"10\">Layout (reflow)</text><text x=\"515\" y=\"181\" fill=\"#e8eaed\" font-size=\"10\">Paint</text><text x=\"515\" y=\"204\" fill=\"#e8eaed\" font-size=\"10\">Compositing</text><text x=\"585\" y=\"240\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Not every iteration!</text><text x=\"585\" y=\"258\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Only when needed</text><text x=\"585\" y=\"276\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">(~60fps target)</text><text x=\"585\" y=\"310\" text-anchor=\"middle\" fill=\"#a78bfa\" font-size=\"10\" font-weight=\"bold\">⬆ Back to step 1</text></svg>",
  "codeExamples": [
    {
      "title": "One Macrotask Per Iteration in Action",
      "useCase": "Understanding macrotask batching",
      "code": "console.log('1 - sync');\n\nsetTimeout(() => {\n  console.log('2 - macrotask A');\n}, 0);\n\nsetTimeout(() => {\n  console.log('3 - macrotask B');\n}, 0);\n\n// Schedule a microtask that will run BETWEEN the two macrotasks\nPromise.resolve().then(() => {\n  console.log('4 - microtask (runs between A and B)');\n});\n\nsetTimeout(() => {\n  console.log('5 - macrotask C');\n}, 0);\n\nconsole.log('6 - sync');\n\n// Output:\n// 1 - sync\n// 6 - sync\n// 4 - microtask (runs between A and B)\n// 2 - macrotask A\n// 4 - microtask (runs between A and B)\n// 3 - macrotask B\n// 4 - microtask (runs between A and B)\n// 5 - macrotask C\n\n// Wait, that's not right. Let me trace more carefully:\n// Actually the microtask was queued ONCE before any macrotask\n// So it runs ONCE after sync but before macrotask A:\n// 1, 6, 4, 2, 3, 5",
      "description": "The microtask (4) runs after all sync code but before the first macrotask. Then each macrotask (2, 3, 5) runs one per Event Loop iteration. The Promise.then only queues a single microtask, so it runs only once."
    },
    {
      "title": "Measuring Timer Accuracy with Event Loop Blocking",
      "useCase": "Timer drift under load",
      "code": "const start = Date.now();\n\n// Schedule a timer for 100ms\nsetTimeout(() => {\n  const actualDelay = Date.now() - start;\n  console.log(`Expected: 100ms, Actual: ${actualDelay}ms`);\n}, 100);\n\n// Block the Event Loop for 500ms\nconst blockStart = Date.now();\nwhile (Date.now() - blockStart < 500) {\n  // Busy wait\n}\n\nconsole.log('Event Loop was blocked for 500ms');\n\n// Output:\n// Event Loop was blocked for 500ms\n// Expected: 100ms, Actual: ~500ms (or more!)\n\n// The timer callback was queued at 100ms but couldn't execute\n// until the Event Loop was unblocked at 500ms.\n// Timers are NOT guaranteed to be precise — they specify\n// the MINIMUM delay, not an exact delay.",
      "description": "Timers are not precise. They specify the minimum delay before execution. If the Event Loop is blocked when the timer fires, the callback waits in the Macrotask Queue until the stack is empty. Always account for possible timer drift in production code."
    },
    {
      "title": "setTimeout vs setInterval Behavior",
      "useCase": "Understanding timer differences",
      "code": "// setTimeout: executes ONCE after delay\nlet timeoutId = setTimeout(() => {\n  console.log('Executed once after 1 second');\n}, 1000);\n\n// Cancelling a timeout\nclearTimeout(timeoutId); // Nothing happens\n\n// setInterval: executes REPEATEDLY every delay\nlet count = 0;\nconst intervalId = setInterval(() => {\n  count++;\n  console.log(`Interval execution #${count}`);\n  \n  if (count >= 3) {\n    clearInterval(intervalId);\n    console.log('Interval cleared');\n  }\n}, 500);\n\n// Important: setInterval doesn't account for callback execution time\n// If the callback takes 200ms and interval is 500ms:\n// Wait 500ms -> execute (200ms) -> wait 500ms from START of previous -> execute\n// This can cause overlapping executions if callback takes longer than interval!\n\n// Safer: recursive setTimeout\nfunction safeInterval(fn, delay) {\n  function wrapper() {\n    fn();\n    setTimeout(wrapper, delay);\n  }\n  setTimeout(wrapper, delay);\n}\n// This ensures the delay starts AFTER the callback completes",
      "description": "setTimeout runs once; setInterval runs repeatedly. Recursive setTimeout is often preferred over setInterval because it waits for the callback to complete before starting the next timer, preventing overlapping executions."
    },
    {
      "title": "UI Events Are Macrotasks: Click Handler Timing",
      "useCase": "Understanding event handler execution order",
      "code": "// In the browser:\n\ndocument.getElementById('btn').addEventListener('click', () => {\n  console.log('1 - click handler (macrotask)');\n  \n  Promise.resolve().then(() => {\n    console.log('2 - microtask queued by click handler');\n  });\n});\n\ndocument.getElementById('btn').addEventListener('click', () => {\n  console.log('3 - second click handler (same macrotask?)');\n});\n\n// When user clicks the button:\n// 1. Click event is queued in Macrotask Queue\n// 2. Event Loop processes it (stack empty, microtasks clear)\n// 3. First handler runs: logs '1 - click handler'\n// 4. Second handler runs: logs '3 - second click handler'\n// 5. Microtask from step 3 runs: logs '2 - microtask...'\n//\n// NOTE: Multiple handlers for the SAME event are in ONE macrotask!\n// They run sequentially without microtask check in between.",
      "description": "UI event callbacks are macrotasks. Multiple handlers for the same event are grouped into a single macrotask. Microtasks queued by event handlers execute after all handlers for that event complete, before the next macrotask."
    },
    {
      "title": "setImmediate in Node.js vs setTimeout(fn, 0)",
      "useCase": "Node.js-specific macrotask API",
      "code": "// Node.js only\nconst fs = require('fs');\n\n// setTimeout(cb, 0) - runs in 'Timers' phase\nsetTimeout(() => {\n  console.log('1 - setTimeout (Timers phase)');\n}, 0);\n\n// setImmediate - runs in 'Check' phase (after I/O)\nsetImmediate(() => {\n  console.log('2 - setImmediate (Check phase)');\n});\n\n// Inside an I/O callback, setImmediate ALWAYS runs before setTimeout\nfs.readFile(__filename, () => {\n  setTimeout(() => {\n    console.log('3 - setTimeout inside I/O');\n  }, 0);\n  \n  setImmediate(() => {\n    console.log('4 - setImmediate inside I/O (wins over setTimeout)');\n  });\n});\n\n// Outside I/O, the order is non-deterministic (depends on phase timing)\n// But inside I/O: setImmediate (4) always runs before setTimeout (3)",
      "description": "In Node.js, setImmediate callbacks run in the 'Check' phase, which occurs right after the 'Poll' phase (I/O callbacks). Inside an I/O callback, setImmediate always beats setTimeout(fn, 0) because setTimeout is in the earlier 'Timers' phase which already passed."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How many macrotasks does the Event Loop process per iteration?",
      "options": [
        "All of them",
        "Exactly one",
        "All that were queued before the last render",
        "Depends on the browser"
      ],
      "answer": 1,
      "explanation": "The Event Loop processes exactly ONE macrotask per iteration. After that, it returns to drain the Microtask Queue before picking the next macrotask."
    },
    {
      "question": "What happens when you call setTimeout with 0ms delay?",
      "options": [
        "The callback executes immediately",
        "The callback is queued in the Macrotask Queue and runs after sync code and all microtasks",
        "The callback runs before synchronous code",
        "The callback is ignored"
      ],
      "answer": 1,
      "explanation": "setTimeout(cb, 0) queues the callback in the Macrotask Queue. It runs after all synchronous code AND after the entire Microtask Queue is drained."
    },
    {
      "question": "Which of the following is NOT a macrotask source?",
      "options": [
        "setTimeout",
        "Promise.then",
        "setInterval",
        "UI event (click)"
      ],
      "answer": 1,
      "explanation": "Promise.then callbacks are microtasks, not macrotasks. setTimeout, setInterval, and UI events are all macrotask sources."
    },
    {
      "question": "If a macrotask queues a microtask, when does that microtask execute?",
      "options": [
        "During the next macrotask",
        "Immediately after the current macrotask, before the next macrotask",
        "After all macrotasks are done",
        "In a separate thread"
      ],
      "answer": 1,
      "explanation": "Microtasks queued by a macrotask are executed immediately after the current macrotask completes, before the Event Loop picks the next macrotask."
    },
    {
      "question": "What is the minimum delay enforced for nested setTimeout calls in browsers?",
      "options": [
        "0ms",
        "4ms",
        "10ms",
        "100ms"
      ],
      "answer": 1,
      "explanation": "The HTML5 spec enforces a minimum 4ms delay for nested setTimeout calls (level 5+). This prevents timer-based CPU exhaustion attacks."
    },
    {
      "question": "What happens to a setTimeout callback if the Event Loop is blocked for 3 seconds?",
      "options": [
        "It executes immediately when the delay expires, even if blocked",
        "It waits in the Macrotask Queue until the stack is empty",
        "It is cancelled",
        "It runs in a background thread"
      ],
      "answer": 1,
      "explanation": "The timer fires after its delay, but the callback waits in the Macrotask Queue. It only executes when the Call Stack is empty and all microtasks are drained."
    },
    {
      "question": "How do multiple event handlers for the same event execute?",
      "options": [
        "Each handler is a separate macrotask",
        "All handlers for the event execute as a single macrotask",
        "The first handler is a microtask, the rest are macrotasks",
        "They execute in random order"
      ],
      "answer": 1,
      "explanation": "Multiple event listeners for the same event are dispatched as part of a single macrotask. They run sequentially, and microtasks queued by them run after all handlers complete."
    },
    {
      "question": "In Node.js, in which Event Loop phase does setImmediate run?",
      "options": [
        "Timers phase",
        "Check phase",
        "Poll phase",
        "Close phase"
      ],
      "answer": 1,
      "explanation": "setImmediate callbacks run in the 'Check' phase of Node.js's Event Loop, which occurs immediately after the 'Poll' phase. This is why setImmediate often beats setTimeout(fn, 0) inside I/O callbacks."
    },
    {
      "question": "What will this log? setTimeout(() => console.log('A'), 0); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');",
      "options": [
        "D, C, A, B",
        "D, A, B, C",
        "D, C, B, A",
        "C, D, A, B"
      ],
      "answer": 0,
      "explanation": "D is sync. C is a microtask (runs after sync, before macrotasks). A and B are macrotasks (run one per iteration). Output: D, C, A, B."
    },
    {
      "question": "What is a key difference between browser and Node.js macrotask handling?",
      "options": [
        "Node.js does not have macrotasks",
        "Browsers have a UI render step between macrotasks; Node.js does not",
        "setTimeout only works in browsers",
        "Macrotasks are processed randomly in Node.js"
      ],
      "answer": 1,
      "explanation": "Browsers perform UI rendering (style, layout, paint) between macrotasks. Node.js has no rendering step but has additional phases (Timers, I/O, Poll, Check, Close) with different macrotask sources."
    }
  ]
};
