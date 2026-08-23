export const garbage_collection = {
  "title": "Garbage Collection",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "JavaScript engines use <strong>automatic garbage collection</strong> to free memory that is no longer reachable.",
    "The primary algorithm is <strong>Mark-and-Sweep</strong>: the engine traces from <strong>roots</strong> (global object, local variables) and marks reachable objects, then sweeps unreachable ones.",
    "An object is eligible for GC when it is <strong>unreachable</strong> — no references from roots or other reachable objects exist.",
    "Common <strong>memory leak</strong> patterns: global variables, forgotten timers/closures, detached DOM nodes, and cached data without cleanup."
  ],
  "laymanDefinition": "Imagine a city where garbage trucks automatically visit every building. They start at the mayor's office (the root) and follow all roads, marking every building they can reach. Any building they couldn't reach is abandoned and gets demolished. You don't need to call for trash pickup — the system handles it automatically. But if you accidentally build a road from your house to your neighbor's and your neighbor's house is still reachable, your junk stays around even if you didn't want it anymore. That's garbage collection: automatic, but you can accidentally prevent it with unintended references.",
  "deepDive": [
    {
      "heading": "Mark-and-Sweep Algorithm",
      "text": "The mark-and-sweep algorithm has two phases. In the mark phase, the GC starts from root references (global object, currently executing function's local variables, DOM tree) and traverses all reachable objects, 'marking' them. In the sweep phase, unmarked objects are considered unreachable and their memory is reclaimed. Modern engines enhance this with generational collection, incremental marking, and concurrent sweeping."
    },
    {
      "heading": "Reachability — The Key Concept",
      "text": "An object is reachable if it can be accessed by traversing references from the roots. Roots include: global object, currently executing function's local variables and parameters, variables on the call stack, and the DOM tree (in browsers). If an object is not reachable through any chain of references, it is garbage. Circular references between unreachable objects are handled correctly — if neither can be reached from roots, both are collected."
    },
    {
      "heading": "Generational Collection",
      "text": "Modern engines use generational collection based on the observation that most objects die young. Objects are allocated in a 'nursery' (young generation). Objects that survive multiple GC cycles are promoted to the 'old generation.' The nursery is collected frequently (minor GC), while the old generation is collected less often (major GC). This optimizes for the common case where objects are short-lived."
    },
    {
      "heading": "Common Memory Leak Patterns",
      "text": "1) Accidental global variables: assigning to an undeclared variable creates a global property. 2) Forgotten timers/callbacks: setInterval that references an object prevents its GC. 3) Detached DOM elements: JavaScript variables holding references to removed DOM elements. 4) Closures capturing large objects: a closure that references an outer scope prevents those variables from being GC'd. 5) Event listeners not removed: listeners on elements that are removed. 6) Growing caches without limits."
    },
    {
      "heading": "GC and WeakMap/WeakSet",
      "text": "WeakMap and WeakSet use weak references — they don't prevent GC of their keys. If a key object is only referenced by a WeakMap/WeakSet, it can be collected. This is the primary mechanism for preventing memory leaks in caching and object-tagging scenarios."
    }
  ],
  "interviewAnswer": "JavaScript uses automatic garbage collection based on the mark-and-sweep algorithm. The GC starts from root references (global object, local variables, DOM tree), marks all reachable objects, and collects unmarked ones. Modern engines use generational collection (nursery for young objects, old generation for survivors), incremental marking (to avoid long pauses), and concurrent sweeping. Memory leaks occur when objects remain reachable unintentionally — common causes: global variables, forgotten timers/intervals, detached DOM nodes still referenced in JS, closures holding large data, event listeners not cleaned up, and unbounded caches. WeakMap/WeakSet help prevent leaks by not preventing GC of their keys. The delete operator removes properties but doesn't trigger GC — it just makes the property unreachable.",
  "interviewQuestions": [
    {
      "question": "How does JavaScript garbage collection work?",
      "answer": "JavaScript uses automatic mark-and-sweep GC. It marks all reachable objects from root references, then sweeps away unmarked (unreachable) objects."
    },
    {
      "question": "What are root references in GC?",
      "answer": "Roots include the global object, local variables in currently executing functions, parameters on the call stack, and the DOM tree (in browsers)."
    },
    {
      "question": "Can the JavaScript GC handle circular references?",
      "answer": "Yes. Modern mark-and-sweep GC traces reachability from roots. A circular reference between two unreachable objects is collected because neither can be reached from roots."
    },
    {
      "question": "What is a common cause of memory leaks?",
      "answer": "Accidental global variables, forgotten timers/intervals, detached DOM node references, closures holding large object references, and unbounded caches."
    },
    {
      "question": "How do closures cause memory leaks?",
      "answer": "A closure retains references to its outer scope's variables. If the closure persists (e.g., as an event listener), the entire scope chain is retained, preventing GC of referenced objects."
    },
    {
      "question": "How does delete work with GC?",
      "answer": "delete removes a property from an object, making that reference unreachable. It doesn't directly trigger GC — GC runs automatically when needed."
    },
    {
      "question": "What is generational collection?",
      "answer": "Objects are allocated in a nursery (young generation). Those surviving GC cycles are promoted to the old generation. Nursery is collected frequently; old generation less often."
    },
    {
      "question": "How does WeakMap help with memory leaks?",
      "answer": "WeakMap holds weak references to keys. If a key object has no other references, it can be GC'd even though it's in the WeakMap. The entry is auto-removed."
    },
    {
      "question": "Can you manually trigger garbage collection?",
      "answer": "In most environments, no — the engine decides when to run GC. In Node.js with --expose-gc, you can call global.gc(). In browsers, performance.memory exists but not direct GC control."
    },
    {
      "question": "What tools can help detect memory leaks?",
      "answer": "Browser DevTools Memory/Heap profiler, Chrome's Performance tab (record memory), Node.js --inspect with Chrome DevTools, and process.memoryUsage() in Node."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Mark-and-Sweep Garbage Collection</text><rect x=\"30\" y=\"65\" width=\"200\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"130\" y=\"94\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">ROOTS</text><text x=\"130\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">global, locals, DOM</text><line x1=\"230\" y1=\"90\" x2=\"280\" y2=\"90\" stroke=\"var(--border)\" stroke-width=\"1.5\"/><rect x=\"280\" y=\"65\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"360\" y=\"88\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\">Object A</text><text x=\"360\" y=\"105\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">REACHABLE ✓</text><line x1=\"390\" y1=\"115\" x2=\"440\" y2=\"140\" stroke=\"var(--border)\" stroke-width=\"1\"/><rect x=\"440\" y=\"130\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"520\" y=\"153\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\">Object B</text><text x=\"520\" y=\"170\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">REACHABLE ✓</text><line x1=\"250\" y1=\"90\" x2=\"280\" y2=\"200\" stroke=\"var(--border)\" stroke-width=\"1\" stroke-dasharray=\"4\"/><rect x=\"200\" y=\"200\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e64745\" stroke-width=\"1.5\"/><text x=\"280\" y=\"223\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"12\">Object C</text><text x=\"280\" y=\"240\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"10\">UNREACHABLE ✗</text><text x=\"360\" y=\"290\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">Mark Phase: trace from roots → mark reachable</text><text x=\"360\" y=\"315\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">Sweep Phase: collect unmarked (unreachable) objects</text></svg>",
  "codeExamples": [
    {
      "title": "Reachability Demo",
      "useCase": "Understanding what keeps objects alive",
      "code": "// Object is reachable — NOT GC'd\nlet user = { name: 'Alice', data: new Array(10000) };\n// The object is reachable from 'user' variable (root)\n\n// Object becomes unreachable — eligible for GC\nuser = null;\n// Now the object has no references from roots\n// Next GC cycle will reclaim it\n\n// Circular references — still collected\nfunction demoCircular() {\n  const objA = {};\n  const objB = {};\n  objA.ref = objB;\n  objB.ref = objA;\n  // After function ends, both objA and objB go out of scope\n  // Neither is reachable from roots — both collected\n  // Modern GC handles circular refs correctly!\n}\n\ndemoCircular();\n// objA and objB were collected after function returned\n\n// Multiple references — one keeps it alive\nlet shared = { data: 'important' };\nlet ref1 = shared;\nlet ref2 = shared;\n\nref1 = null; // Object still reachable via ref2\nref2 = null; // Now object is unreachable — eligible for GC\nconsole.log('References cleared, object eligible for GC');",
      "description": "An object is reachable if any chain of references from roots leads to it. Setting all references to null makes it eligible for GC."
    },
    {
      "title": "Memory Leak — Accidental Global Variable",
      "useCase": "Identifying and fixing global variable leaks",
      "code": "// LEAK: accidental global\nfunction processData() {\n  // No 'let', 'const', or 'var' — becomes global!\n  hugeData = new Array(1000000).fill('leak');\n  // This creates window.hugeData in browsers\n  // global.hugeData in Node.js\n}\n\nprocessData();\n// hugeData persists globally — never GC'd!\n\n// FIX: always declare variables\nfunction processDataFixed() {\n  const data = new Array(1000000).fill('no leak');\n  // data goes out of scope after function returns\n  // Eligible for GC!\n  return data;\n}\n\n// LEAK: 'this' in global context\nfunction leakyFunction() {\n  this.leaky = new Array(100000).fill('leak');\n  // In non-strict mode, 'this' is the global object\n}\n\nleakyFunction();\nconsole.log(window.leaky); // Leaked!\n\n// FIX: use 'use strict'\nfunction safeFunction() {\n  'use strict';\n  // this is undefined — would throw error\n  // this.safe = 'data'; // TypeError!\n}",
      "description": "Undeclared variables become global properties, persisting for the application lifetime. Always declare with let/const/var."
    },
    {
      "title": "Memory Leak — Detached DOM Elements",
      "useCase": "DOM references preventing garbage collection",
      "code": "// LEAK: holding references to removed DOM elements\nconst elements = [];\n\nfunction addElement() {\n  const div = document.createElement('div');\n  div.textContent = 'Temporary';\n  document.body.appendChild(div);\n  elements.push(div); // Storing reference\n}\n\n// Even after removing from DOM:\nfunction removeElements() {\n  for (const el of elements) {\n    document.body.removeChild(el);\n  }\n  // elements[] still holds references — NOT GC'd!\n  // Memory leak: elements persist indefinitely\n}\n\n// FIX: clean up references\nfunction removeElementsFixed() {\n  while (elements.length) {\n    const el = elements.pop();\n    document.body.removeChild(el);\n    // el reference is removed from array\n    // el can now be GC'd\n  }\n}\n\n// Modern approach: use WeakSet/WeakMap\nconst trackedElements = new WeakSet();\n\nfunction trackElement(el) {\n  trackedElements.add(el);\n  // Does NOT prevent GC of el\n  // When el is removed from DOM and all refs gone,\n  // WeakSet entry auto-clears\n}",
      "description": "DOM references stored in JavaScript arrays or objects prevent GC even after elements are removed from the DOM tree."
    },
    {
      "title": "Memory Leak — Closures and Timers",
      "useCase": "Forgotten timers and closure scope leaks",
      "code": "// LEAK: timer holding reference\nfunction startTimer() {\n  const hugeData = new Array(1000000).fill('timer leak');\n\n  setInterval(function() {\n    console.log('Timer tick');\n    // Closure references hugeData\n    // Timer keeps the closure alive\n    // hugeData is never GC'd\n  }, 1000);\n}\n\nstartTimer();\n// hugeData persists as long as interval runs!\n// Even after the function returns\n\n// FIX: clear the timer when done\nfunction startTimerFixed() {\n  const hugeData = new Array(1000000).fill('ok');\n\n  const timerId = setInterval(function() {\n    console.log('Tick');\n  }, 1000);\n\n  // Store timerId and clear when component unmounts\n  return function cleanup() {\n    clearInterval(timerId);\n    // Now closure and hugeData can be GC'd\n  };\n}\n\nconst cleanup = startTimerFixed();\n// Later: cleanup(); // Stops timer, allows GC\n\n// LEAK: closure over large object\nfunction createLeakyHandler() {\n  const largeConfig = { /* lots of data */ };\n\n  document.getElementById('btn').addEventListener('click', function() {\n    console.log('clicked');\n    // This closure captures largeConfig\n    // Event listener keeps it alive indefinitely\n  });\n}\n\n// FIX: only capture what's needed\nfunction createFixedHandler() {\n  const btn = document.getElementById('btn');\n  const handler = function() {\n    console.log('clicked');\n  };\n\n  btn.addEventListener('click', handler);\n\n  // Return cleanup function\n  return function() {\n    btn.removeEventListener('click', handler);\n  };\n}",
      "description": "Timers and event listeners create closures that keep their outer scope alive. Always clean up timers and remove listeners."
    },
    {
      "title": "Detecting and Debugging Memory Leaks",
      "useCase": "Using tools to identify leaks",
      "code": "// In Node.js:\nconst mem = process.memoryUsage();\nconsole.log('RSS:', mem.rss / 1024 / 1024, 'MB');\nconsole.log('Heap Total:', mem.heapTotal / 1024 / 1024, 'MB');\nconsole.log('Heap Used:', mem.heapUsed / 1024 / 1024, 'MB');\n\n// Memory leak detection pattern\nconst leaks = [];\n\nfunction detectLeak() {\n  // In Chrome DevTools:\n  // 1. Go to Memory tab\n  // 2. Take a heap snapshot\n  // 3. Perform actions\n  // 4. Take another snapshot\n  // 5. Compare — look for objects that shouldn't persist\n\n  // Manual check: watch memory growth\n  const used = process.memoryUsage().heapUsed;\n  console.log('Heap used:', Math.round(used / 1024 / 1024) + 'MB');\n}\n\n// Testing for closure leaks\nfunction createLeak() {\n  const big = new Array(1000000).fill('X');\n  return function() {\n    return 'closure captures big array: ' + big.length;\n  };\n}\n\n// Check if closure retains scope\nconst leakyFn = createLeak();\n// big array is still alive because leakyFn holds the closure\n\n// Good practice: nullify references when done\nleakyFn = null;\n// Now the closure and big array are eligible for GC\n\n// Using Chrome Performance tab:\n// 1. Record memory allocation timeline\n// 2. Look for sawtooth pattern (GC working)\n// 3. Steady upward trend = likely leak\n// 4. Heap snapshots show retainers\n\n// Best practices:\n// - Avoid global state\n// - Clean up timers/intervals\n// - Remove event listeners\n// - Use WeakMap/WeakSet for caches\n// - Implement cache size limits\n// - Nullify large references when done",
      "description": "Use Node.js process.memoryUsage() or Chrome DevTools Heap Snapshots to detect memory leaks. Look for retained objects in snapshots."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How does JavaScript garbage collection work?",
      "options": [
        "Reference counting",
        "Mark-and-sweep from root references",
        "Manual memory management",
        "Automatic reference counting"
      ],
      "answer": 1,
      "explanation": "JavaScript uses mark-and-sweep: start from roots, mark all reachable objects, collect unmarked (unreachable) ones."
    },
    {
      "question": "What is a root reference in GC?",
      "options": [
        "The first object created",
        "Global object, local variables, DOM tree",
        "The main function only",
        "Object with the most properties"
      ],
      "answer": 1,
      "explanation": "Roots include the global object, currently executing local variables, call stack variables, and the DOM tree (browsers)."
    },
    {
      "question": "Can circular references cause memory leaks in modern JS?",
      "options": [
        "Yes, circular refs are never collected",
        "No, mark-and-sweep handles circular refs",
        "Only between DOM elements",
        "Only in older browsers"
      ],
      "answer": 1,
      "explanation": "Modern mark-and-sweep GC handles circular references. If neither object is reachable from roots, both are collected."
    },
    {
      "question": "What is a common cause of memory leaks?",
      "options": [
        "Using strict mode",
        "Accidental global variables",
        "Using let instead of var",
        "Arrow functions"
      ],
      "answer": 1,
      "explanation": "Undeclared variables become global properties and persist for the application lifetime, preventing GC."
    },
    {
      "question": "How do closures potentially cause memory leaks?",
      "options": [
        "They always cause leaks",
        "They retain references to their outer scope, which can keep large objects alive",
        "They create circular references",
        "They block the event loop"
      ],
      "answer": 1,
      "explanation": "A closure retains its outer scope's variables. If the closure persists (e.g., event listener), those variables stay alive."
    },
    {
      "question": "Can you manually trigger garbage collection?",
      "options": [
        "Yes, with gc() in all environments",
        "No, the engine controls GC timing",
        "Only in Node.js with --expose-gc",
        "With delete operator"
      ],
      "answer": 2,
      "explanation": "You can trigger GC in Node.js with --expose-gc flag (then call global.gc()). Browsers don't expose direct GC control."
    },
    {
      "question": "How does WeakMap help prevent memory leaks?",
      "options": [
        "It automatically removes entries when keys are GC'd",
        "It stores data on disk",
        "It compresses values",
        "It limits cache size"
      ],
      "answer": 0,
      "explanation": "WeakMap uses weak references for keys — if no other references exist, the key and its entry are GC'd."
    },
    {
      "question": "What happens when an object becomes unreachable?",
      "options": [
        "It's immediately deleted",
        "It becomes eligible for GC on the next cycle",
        "It throws an error",
        "It's moved to disk"
      ],
      "answer": 1,
      "explanation": "Unreachable objects are eligible for GC but are not collected until the engine runs its next GC cycle."
    },
    {
      "question": "What tool can help detect memory leaks in the browser?",
      "options": [
        "Console.log",
        "Chrome DevTools Memory/Heap profiler",
        "CSS inspector",
        "Network tab"
      ],
      "answer": 1,
      "explanation": "Chrome DevTools Memory panel with heap snapshots can identify objects that are retained unexpectedly."
    },
    {
      "question": "What is generational garbage collection?",
      "options": [
        "Collecting objects by age group",
        "Collecting every 10 seconds",
        "Collecting only strings",
        "Manual generation management"
      ],
      "answer": 0,
      "explanation": "Generational collection separates objects by age: young (nursery) collected frequently, old (survivors) collected less often."
    }
  ]
};
