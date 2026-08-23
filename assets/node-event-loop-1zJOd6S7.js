const e={id:"node-event-loop",title:"Node.js Event Loop",difficulty:"advanced",estimatedMinutes:30,tldr:["The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel when possible.","It operates in six phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks.","process.nextTick() and Promise callbacks are handled in special microtask queues between each phase.","Understanding the event loop is critical for debugging performance issues, ordering, and preventing callback starvation."],laymanDefinition:'The event loop is like a busy airport control tower that coordinates all incoming and outgoing flights. The controller (event loop) continuously checks: "Are there any planes waiting to land? (timers), Any messages from other towers? (callbacks), Any fuel requests? (check)." Between each check, the controller handles urgent radio messages (nextTick) and runway status updates (Promise resolutions) because these are time-sensitive. The controller NEVER goes to sleep - they keep cycling through the checklist, handling each type of task in order. This constant cycling ensures every task gets attention within a predictable timeframe.',deepDive:[{heading:"Event Loop Phases Overview",text:'The event loop has six phases, each with its own queue: (1) Timers - executes callbacks from setTimeout() and setInterval(). The timer specifies a minimum threshold, not a guaranteed execution time. (2) Pending callbacks - executes I/O callbacks deferred to the next loop iteration. (3) Idle/Prepare - internal use by libuv. (4) Poll - retrieves new I/O events, executes I/O callbacks (almost all callbacks except timers, close, and setImmediate). If the poll queue is empty, the loop checks for setImmediate callbacks or waits for new I/O events. (5) Check - setImmediate() callbacks execute here. (6) Close callbacks - close event callbacks (socket.on("close")). The loop cycles through phases in order, and a phase runs until its queue is empty or a maximum number of callbacks is processed.'},{heading:"Microtasks: process.nextTick() and Promise Callbacks",text:"Microtasks are not part of any event loop phase. They are processed between each phase and between each callback within a phase. process.nextTick() has higher priority than Promise callbacks. The nextTick queue is processed in its entirety at each interrupt point before moving to the Promise microtask queue. This means process.nextTick() can starve the event loop if called recursively (nextTick recursion prevents the loop from reaching the poll phase). Promises (and queueMicrotask()) are processed after nextTick but before the next phase. The event loop will not proceed to the next phase until both microtask queues are empty. This is why Promise.resolve().then() runs before setTimeout(fn, 0) - the Promise microtask is processed in the nextTick/microtask checkpoint between timer callbacks."},{heading:"setTimeout(fn, 0) vs setImmediate() vs process.nextTick()",text:'These three defer execution but at different priorities: (1) process.nextTick() - highest priority, runs before the next event loop phase. Executes after the current operation but before any I/O. (2) Promise.then() - runs after nextTick but before the next phase. (3) setImmediate() - runs in the "check" phase of the NEXT iteration, after the poll phase. (4) setTimeout(fn, 0) - runs in the "timers" phase of the next iteration. In practice: setImmediate() fires before setTimeout(fn, 0) in I/O callbacks (because the check phase comes after poll). Outside I/O callbacks, the order is non-deterministic (depends on loop startup). Always use setImmediate() when you mean "run as soon as possible after I/O callbacks". Use process.nextTick() sparingly - it can starve the event loop.'},{heading:"The Poll Phase and I/O Callbacks",text:"The poll phase is the most important phase. It: (1) Calculates how long to block and wait for new I/O events. If there are setImmediate() callbacks scheduled, it does NOT block (moves to check phase). If there are timer callbacks ready, it calculates the time until the earliest timer and blocks for that duration. (2) Processes events in the poll queue (I/O callbacks) one by one. (3) If the queue is empty, checks for setImmediate() callbacks (go to check phase), or timer callbacks (go to timers phase), or blocks waiting for new events. The poll phase is where most application code runs - all I/O callbacks (file reads, network requests, database queries) execute here. Blocking the poll phase with CPU-intensive work prevents new I/O from being processed."},{heading:"Event Loop Blocking and Starvation",text:"When the event loop is blocked, all phases stall: (1) CPU-intensive operations block the loop - synchronous loops, large JSON.parse, heavy crypto operations. (2) Nested process.nextTick() calls starve the loop - the loop never reaches the poll phase. (3) Long-running timer callbacks delay subsequent timers. (4) Recursive synchronous operations without setImmediate() or nextTick() break the loop. Detection: use setTimeout() with a large delay to measure actual vs expected delay. Solution: (1) Offload CPU work to Worker Threads. (2) Break large operations with setImmediate() or nextTick(). (3) Use async iteration for large arrays. (4) Monitor with process.hrtime() or performance.now(). (5) Use --prof flag for event loop profiling."}],interviewAnswer:"The event loop has six phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Microtasks (nextTick, Promise callbacks) run between phases. process.nextTick() has highest priority, then Promise.then(), then the next phase. setImmediate() runs in the check phase (after poll). setTimeout(fn, 0) runs in the timers phase (before poll). The poll phase processes I/O callbacks and is where most app code executes. Blocking the poll phase with CPU work stalls the loop. Microtask recursion (nextTick inside nextTick) starves the loop. Always use setImmediate() over nextTick() for deferring work.",interviewQuestions:[{question:"What are the six phases of the Node.js event loop?",answer:'(1) Timers - setTimeout/setInterval. (2) Pending callbacks - I/O callbacks deferred. (3) Idle/Prepare - internal. (4) Poll - I/O callbacks. (5) Check - setImmediate. (6) Close callbacks - socket.on("close").'},{question:"What is the difference between process.nextTick() and setImmediate()?",answer:"process.nextTick() runs before the next event loop phase (highest priority microtask). setImmediate() runs in the check phase, after the poll phase, on the next iteration. Use setImmediate() for deferring work; use nextTick() sparingly."},{question:"What order do timers and setImmediate execute in an I/O callback?",answer:"In an I/O callback: setImmediate() fires BEFORE setTimeout(fn, 0). The check phase (setImmediate) comes right after the poll phase (where I/O callbacks run). Timers fire in the next iteration's timers phase."},{question:"What is the poll phase and what happens there?",answer:"The poll phase retrieves new I/O events and executes I/O callbacks. It can block waiting for events if no timers or setImmediate callbacks are pending. This is where file reads, network requests, and database operations execute their callbacks."},{question:"How can process.nextTick() starve the event loop?",answer:"If nextTick() is called recursively (a nextTick schedules another nextTick), the microtask queue never empties. Since microtasks are processed before the next phase, the event loop never reaches the poll phase to process I/O, effectively starving all I/O operations."},{question:"What is the relationship between Promises and process.nextTick()?",answer:"Both are microtasks. process.nextTick() has higher priority and runs before Promise callbacks. The event loop processes the entire nextTick queue, then the entire Promise microtask queue, before moving to the next event loop phase."},{question:"Why is setTimeout(fn, 0) not exactly 0ms?",answer:"The minimum delay is 1ms (clamped by libuv/timers). Even with 0ms, the callback fires only after the event loop reaches the timers phase, which may be delayed by other phases. It is a minimum threshold, not a guaranteed execution time."},{question:"How does libuv determine how long to block in the poll phase?",answer:"If there are setImmediate() callbacks, poll does not block. If there are timer callbacks ready, poll calculates the earliest timer and blocks until that timer. Otherwise, poll blocks waiting for new I/O events."},{question:"What happens if a timer callback takes 100ms?",answer:"The timer callback executes during the timers phase. While it runs, the event loop is blocked - no I/O can be processed, no other timers can fire, no setImmediate callbacks execute. This delays everything by at least 100ms."},{question:"How do you measure event loop lag?",answer:"Use a high-resolution timer: record the time at the start of a setInterval, then measure the actual delay. var expected = Date.now() + 1000; setTimeout(function() { var lag = Date.now() - expected; }, 1000). Also use process.hrtime() for nanosecond precision."}],diagramSvg:'<svg viewBox="0 0 720 350" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="720" height="350" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Node.js Event Loop Phases</text><rect x="30" y="55" width="200" height="40" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">1. Timers</text><text x="130" y="89" text-anchor="middle" font-size="9" fill="#ddd">setTimeout, setInterval</text><line x1="130" y1="95" x2="130" y2="115" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="30" y="115" width="200" height="40" rx="5" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="130" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">2. Pending</text><text x="130" y="149" text-anchor="middle" font-size="9" fill="#ddd">I/O callbacks deferred</text><line x1="130" y1="155" x2="130" y2="175" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="30" y="175" width="200" height="40" rx="5" fill="#1a1d28" stroke="#9aa0b0" stroke-width="1.5"/><text x="130" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3. Idle/Prepare</text><text x="130" y="209" text-anchor="middle" font-size="9" fill="#ddd">Internal libuv use</text><line x1="130" y1="215" x2="130" y2="235" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="30" y="235" width="200" height="40" rx="5" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="130" y="251" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">4. Poll</text><text x="130" y="269" text-anchor="middle" font-size="9" fill="#ddd">I/O callbacks (most code)</text><line x1="130" y1="275" x2="130" y2="295" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="30" y="295" width="200" height="40" rx="5" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="130" y="311" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">5. Check</text><text x="130" y="329" text-anchor="middle" font-size="9" fill="#ddd">setImmediate callbacks</text><line x1="130" y1="335" x2="130" y2="348" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="30" y="348" width="200" height="40" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="364" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">6. Close</text><text x="130" y="382" text-anchor="middle" font-size="9" fill="#ddd">socket.on("close")</text></svg>',codeExamples:[{title:"Event Loop Phase Order Demonstration",useCase:"Visualize the execution order of different deferral mechanisms",code:`console.log("1. sync - start");

setTimeout(function() {
  console.log("2. setTimeout(fn, 0)");
}, 0);

setImmediate(function() {
  console.log("3. setImmediate");
});

process.nextTick(function() {
  console.log("4. process.nextTick");
});

Promise.resolve().then(function() {
  console.log("5. Promise.then");
});

console.log("6. sync - end");

// Output (non-I/O context, order may vary between setTimeout/setImmediate):
// 1. sync - start
// 6. sync - end
// 4. process.nextTick
// 5. Promise.then
// 3. setImmediate
// 2. setTimeout(fn, 0)`,description:"Synchronous code runs first. Then microtasks: process.nextTick() before Promise.then(). Then setImmediate() and setTimeout() - in non-I/O context, their order depends on loop startup timing. In I/O callbacks, setImmediate always fires before setTimeout."},{title:"Event Loop Starvation with process.nextTick()",useCase:"Demonstrate how recursive nextTick blocks I/O",code:`var fs = require("fs");

function recursiveNextTick() {
  process.nextTick(recursiveNextTick);
}

recursiveNextTick();

// This file read will NEVER complete
fs.readFile(__filename, function(err, data) {
  console.log("File read complete!");
});

setTimeout(function() {
  console.log("This timeout will never fire either");
}, 1000);

// Fix: use setImmediate instead of process.nextTick for recursion
function safeRecursion() {
  setImmediate(safeRecursion); // Allows I/O to be processed
}

// Correct deferral pattern:
function processLargeArray(items, callback) {
  var i = 0;
  function next() {
    if (i >= items.length) { callback(); return; }
    processItem(items[i]);
    i++;
    setImmediate(next); // yield to event loop after each item
  }
  next();
}`,description:"Recursive process.nextTick() never lets the event loop reach the poll phase, so I/O callbacks never execute. setImmediate() allows the loop to process pending I/O between iterations. This is the correct pattern for deferring work without starvation."},{title:"setTimeout vs setImmediate in I/O Callback",useCase:"Deterministic ordering inside I/O callbacks",code:`var fs = require("fs");

fs.readFile(__filename, function() {
  console.log("1. I/O callback (poll phase)");

  setTimeout(function() {
    console.log("2. setTimeout - next timers phase");
  }, 0);

  setImmediate(function() {
    console.log("3. setImmediate - next check phase");
  });

  process.nextTick(function() {
    console.log("4. nextTick - before next phase");
  });

  Promise.resolve().then(function() {
    console.log("5. Promise.then - after nextTick");
  });
});

// Output is ALWAYS deterministic inside I/O:
// 1. I/O callback (poll phase)
// 4. process.nextTick
// 5. Promise.then
// 3. setImmediate (check phase, IMMEDIATELY after poll)
// 2. setTimeout (next loop iteration, timers phase)`,description:"Inside I/O callbacks (poll phase), the order is deterministic: microtasks (nextTick > Promise), then setImmediate (check phase - same iteration), then setTimeout (timer phase - next iteration). This is because check phase comes right after poll phase."},{title:"Measuring Event Loop Lag",useCase:"Detect and measure how much the event loop is blocked",code:`function measureLag(sampleSize) {
  if (sampleSize === undefined) sampleSize = 10;
  var samples = [];
  var last = Date.now();

  function tick() {
    var now = Date.now();
    var elapsed = now - last;
    last = now;
    samples.push(elapsed);

    if (samples.length >= sampleSize) {
      var max = Math.max.apply(null, samples);
      var avg = samples.reduce(function(s, v) { return s + v; }, 0) / samples.length;
      console.log("Lag - avg: " + avg.toFixed(2) + "ms, max: " + max + "ms");
      console.log("Samples:", samples.join(", "));
      return;
    }

    setImmediate(tick);
  }

  setImmediate(tick);
}

measureLag(5);`,description:"This measures event loop lag by scheduling setImmediate() callbacks and measuring the time between them. Higher values indicate the event loop was blocked between callbacks. In production, use tools like the perf_hooks module or monitoring services."},{title:"Preventing Event Loop Blocking with setImmediate",useCase:"Break CPU-intensive work into chunks",code:`var fs = require("fs");

// BAD: blocks the event loop for all entries
function processAllFiles(files) {
  files.forEach(function(file) {
    var data = fs.readFileSync(file);
    var result = heavyComputation(data);
    fs.writeFileSync(file + ".out", result);
  });
}

// GOOD: yield to event loop between files
function processFilesAsync(files, cb) {
  var index = 0;
  var results = [];

  function next() {
    if (index >= files.length) {
      cb(null, results);
      return;
    }

    var file = files[index];
    index++;

    fs.readFile(file, function(err, data) {
      if (err) { cb(err); return; }
      // Yield to event loop after each file
      setImmediate(function() {
        results.push(heavyComputation(data));
        setImmediate(next);
      });
    });
  }

  setImmediate(next);
}

function heavyComputation(data) {
  // Simulate CPU work
  var start = Date.now();
  while (Date.now() - start < 10) {}
  return data.length;
}`,description:"The async version uses setImmediate() to yield to the event loop between iterations. This allows I/O callbacks (incoming requests, data arriving) to be processed. Without yielding, a large file list blocks the event loop for the entire duration, making the server unresponsive."}],mcqQuestions:[{question:"What is the correct order of event loop phases?",options:["Timers, Poll, Check, Close, Pending, Idle","Timers, Pending, Idle/Prepare, Poll, Check, Close","Poll, Check, Close, Timers, Pending, Idle","Check, Close, Timers, Poll, Pending, Idle"],answer:1,explanation:"The six phases in order: timers, pending callbacks, idle/prepare, poll, check, close callbacks."},{question:"Which has the highest priority among deferral mechanisms?",options:["setTimeout(fn, 0)","setImmediate()","process.nextTick()","Promise.resolve().then()"],answer:2,explanation:"process.nextTick() has the highest priority - it runs before the next event loop phase, before Promise microtasks."},{question:"What happens if process.nextTick() is called recursively?",options:["The event loop handles it efficiently","It starves the event loop - I/O never gets processed","Node.js limits recursion to 1000","It throws a stack overflow error"],answer:1,explanation:"Recursive nextTick prevents the loop from reaching the poll phase. I/O callbacks, timers, and setImmediate never execute. Use setImmediate instead."},{question:"In an I/O callback, which fires first: setImmediate or setTimeout(fn, 0)?",options:["setTimeout(fn, 0)","setImmediate","Non-deterministic","Depends on CPU load"],answer:1,explanation:"In I/O callbacks (poll phase), setImmediate fires in the check phase (same iteration), while setTimeout fires in the timers phase (next iteration)."},{question:"What does the poll phase do when no timers or setImmediate callbacks are pending?",options:["Exits immediately","Blocks waiting for new I/O events","Throws an error","Runs garbage collection"],answer:1,explanation:"The poll phase blocks waiting for new I/O events if there are no timers or setImmediate callbacks. This is Node.js efficient idle behavior."},{question:"What mechanism would you use for the HIGHEST priority deferred execution?",options:["setTimeout(fn, 0)","setImmediate()","process.nextTick()","queueMicrotask()"],answer:2,explanation:"process.nextTick() has the highest priority. It runs before Promise microtasks and before the next event loop phase. However, use it sparingly to avoid starving the loop."}]};export{e as node_event_loop};
