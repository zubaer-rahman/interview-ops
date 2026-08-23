const e={title:"Call Stack",difficulty:"beginner",estimatedMinutes:15,tldr:["The <strong>Call Stack</strong> is a LIFO (Last In, First Out) data structure that tracks function calls in a program.","Each function invocation pushes a <strong>stack frame</strong> (execution context) onto the top of the stack.","When a function returns, its frame is <strong>popped</strong> off the stack and execution resumes in the previous frame.","The Call Stack has a fixed size (approx 10k-15k frames). Exceeding it causes a <strong>Stack Overflow</strong>."],laymanDefinition:"Imagine a stack of sticky notes. You start with one note at the bottom (your main program). Whenever you call a function, you write it on a new sticky note and place it on top. You can only work on the top note. When you finish that task, you throw away that note and go back to working on the one below it. The Call Stack works exactly like this — it keeps track of where you are in the program. When a function calls another function, the new function goes on top. When it finishes, it's removed and you resume where you left off.",deepDive:[{heading:"LIFO: Last In, First Out",text:"The Call Stack operates on a LIFO basis. The last function that was called (pushed onto the stack) is the first one to complete and be removed (popped off). This ensures that function execution happens in the correct order. The Global Execution Context is always at the bottom of the stack."},{heading:"Stack Frames",text:"Each entry on the Call Stack is called a <strong>stack frame</strong>. A stack frame contains: the function's execution context (its variables, parameters, and scope chain), the return address (where to continue execution after the function returns), and the function's arguments. The size of each frame depends on the number of local variables and the depth of the scope chain."},{heading:"Blowing the Stack: Stack Overflow",text:"The Call Stack has a finite size determined by the JavaScript engine (typically around 10,000 to 50,000 frames depending on the browser). When the stack exceeds this limit, a <strong>RangeError: Maximum call stack size exceeded</strong> is thrown. This most commonly occurs with infinite recursion (a function that calls itself without a base case) or very deep recursion."},{heading:"Call Stack and Asynchronous Code",text:"The Call Stack only handles synchronous code execution. When an asynchronous operation (like setTimeout, fetch, or a Promise) is encountered, its callback is not executed on the Call Stack immediately. Instead, it is moved to a <strong>task queue</strong> (macrotask or microtask queue). The Event Loop constantly checks if the Call Stack is empty; if it is, it dequeues tasks from the queues and pushes them onto the Call Stack for execution."}],interviewAnswer:"The Call Stack is a LIFO data structure used by JavaScript engines to track function execution. When a function is called, a new stack frame containing its execution context is pushed onto the top of the stack. When the function returns, its frame is popped off and execution resumes in the previous frame. The Global Execution Context sits at the bottom and is popped only when the program ends. The Call Stack has a limited capacity — exceeding it causes a stack overflow error. Asynchronous callbacks are not executed directly on the Call Stack; they are queued and processed by the Event Loop only when the stack is empty.",interviewQuestions:[{question:"What is the Call Stack and how does it work?",answer:"The Call Stack is a LIFO (Last In, First Out) data structure that tracks the execution of function calls. When a function is invoked, its execution context is pushed onto the stack. When it returns, it is popped off. The currently executing function is always at the top of the stack."},{question:"What information is stored in a stack frame?",answer:"A stack frame contains: (1) the function's execution context (local variables, parameters, and scope chain), (2) the return address (where to resume execution after the function returns), and (3) the function's arguments. Some engines also store additional metadata for debugging and error handling."},{question:"What is a stack overflow and how does it occur?",answer:"A stack overflow occurs when the Call Stack exceeds its maximum capacity. This typically happens with infinite recursion or extremely deep recursion. The JavaScript engine throws a <code>RangeError: Maximum call stack size exceeded</code>. For example: <pre><code>function recurse() { recurse(); } recurse(); // Stack overflow</code></pre>"},{question:"How does the Call Stack interact with asynchronous code?",answer:"The Call Stack only handles synchronous execution. When an async operation completes (e.g., setTimeout fires), its callback is placed in a task queue, not directly on the Call Stack. The Event Loop checks if the Call Stack is empty; if it is, it takes the first callback from the queue and pushes it onto the Call Stack for execution."},{question:"What is the difference between the Call Stack and the Memory Heap?",answer:"The <strong>Call Stack</strong> stores function execution contexts (stack frames) in a structured LIFO order. It is fast, size-limited, and used for synchronous execution. The <strong>Memory Heap</strong> is a large, unstructured pool of memory where objects, arrays, and closures are allocated. It is slower, nearly unlimited in practice, and managed by garbage collection."},{question:"How can you cause a stack overflow without recursion?",answer:"While recursion is the most common cause, stack overflow can also happen with excessively deep call chains (e.g., deeply nested function calls), very large functions with many local variables (each frame is larger), or infinite loops combined with function calls. In practice, infinite recursion is by far the most common cause."},{question:"What is the typical maximum size of the Call Stack in JavaScript?",answer:"The maximum Call Stack size varies by engine: V8 (Chrome/Node.js) allows around 10,000-15,000 frames, SpiderMonkey (Firefox) around 20,000-30,000, and JavaScriptCore (Safari) around 40,000-50,000. The exact number depends on the memory available and the size of each frame."},{question:"What happens to the Call Stack during a 'try/catch' block?",answer:"When an error is thrown inside a try block, the Call Stack unwinds — frames are popped off — until it reaches a matching catch block in the nearest enclosing scope. If no catch is found, the stack continues unwinding until it reaches the Global Execution Context, which causes an uncaught error. This is why 'try/catch' can be expensive for deeply nested calls."},{question:"Can you inspect the Call Stack programmatically?",answer:"Yes. You can use <code>console.trace()</code> to print the Call Stack to the console. The <code>Error().stack</code> property also returns a stack trace string. In Node.js, the <code>console.trace()</code> method is available. These are invaluable for debugging complex call chains."},{question:"How does 'tail call optimization' affect the Call Stack?",answer:"Tail Call Optimization (TCO) is a technique where, if a function's last action is a call to another function (the tail call), the engine can reuse the current stack frame instead of creating a new one. This prevents stack overflow in recursive functions. ES6 specifies TCO in strict mode, but not all engines implement it (V8 does not, SpiderMonkey does)."}],diagramSvg:'<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="430" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Call Stack in Action</text><text x="350" y="60" text-anchor="middle" fill="#9aa0b0" font-size="11">LIFO - Last In, First Out</text><!-- Code being executed --><rect x="30" y="80" width="280" height="340" rx="8" fill="#1a1d28" stroke="var(--border)"/><text x="170" y="105" text-anchor="middle" fill="#e8eaed" font-size="12" font-weight="bold">Code Execution</text><text x="45" y="130" fill="#abb2bf" font-size="10" font-family="monospace">function multiply(a, b) {</text><text x="55" y="148" fill="#98c379" font-size="10" font-family="monospace">return a * b;</text><text x="45" y="166" fill="#abb2bf" font-size="10" font-family="monospace">}</text><text x="45" y="190" fill="#abb2bf" font-size="10" font-family="monospace">function square(n) {</text><text x="55" y="208" fill="#98c379" font-size="10" font-family="monospace">return multiply(n, n);</text><text x="45" y="226" fill="#abb2bf" font-size="10" font-family="monospace">}</text><text x="45" y="250" fill="#abb2bf" font-size="10" font-family="monospace">function main() {</text><text x="55" y="268" fill="#e5c07b" font-size="10" font-family="monospace">const result = square(5);</text><text x="55" y="286" fill="#e8eaed" font-size="10" font-family="monospace">console.log(result);</text><text x="45" y="304" fill="#abb2bf" font-size="10" font-family="monospace">}</text><text x="45" y="330" fill="#d19a66" font-size="10" font-family="monospace">main();  // Execution starts here</text><!-- Call Stack visualization --><rect x="350" y="80" width="320" height="340" rx="8" fill="#1a1d28" stroke="var(--border)"/><text x="510" y="105" text-anchor="middle" fill="#e8eaed" font-size="12" font-weight="bold">Call Stack (LIFO)</text><!-- Step 1: Global --><rect x="370" y="120" width="280" height="55" rx="4" fill="#222639" stroke="#6c9fff" stroke-width="1"/><text x="510" y="140" text-anchor="middle" fill="#6c9fff" font-size="10" font-weight="bold">GLOBAL EXECUTION CONTEXT</text><text x="510" y="158" text-anchor="middle" fill="#9aa0b0" font-size="9">main() called -> push square(5)</text><text x="385" y="172" fill="#5f6578" font-size="8">(always at bottom)</text><!-- Step 2: main() --><rect x="370" y="190" width="280" height="28" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/><text x="510" y="209" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">main()</text><!-- Step 3: square() --><rect x="370" y="228" width="280" height="28" rx="4" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1"/><text x="510" y="247" text-anchor="middle" fill="#34d399" font-size="10" font-family="monospace">square(n = 5)</text><!-- Step 4: multiply() - TOP --><rect x="370" y="266" width="280" height="28" rx="4" fill="rgba(248,113,113,0.12)" stroke="#f87171" stroke-width="2"/><text x="510" y="285" text-anchor="middle" fill="#f87171" font-size="10" font-family="monospace">multiply(a = 5, b = 5)  <- TOP</text><!-- Arrow pointing to top --><line x1="510" y1="298" x2="510" y2="315" stroke="#f87171" stroke-width="1.5" marker-end="url(#arrow)"/><text x="520" y="325" fill="#f87171" font-size="9">Currently executing</text><!-- Step 5: return (popping) --><rect x="370" y="345" width="280" height="55" rx="4" fill="#222639" stroke="#34d399" stroke-width="1" stroke-dasharray="3"/><text x="510" y="365" text-anchor="middle" fill="#34d399" font-size="10">After multiply returns:</text><text x="385" y="385" fill="#9aa0b0" font-size="9">multiply popped -> square returns 25</text><text x="385" y="398" fill="#9aa0b0" font-size="9">square popped -> main logs 25 -> done</text></svg>',codeExamples:[{title:"Visualizing Stack Frames with console.trace()",useCase:"Debugging call chains",code:`function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.trace('Stack trace:');
  // Prints:
  // Stack trace:
  //   third
  //   second
  //   first
  //   (anonymous)
}

first();`,description:"console.trace() prints the current Call Stack. The most recent call is listed first. This is invaluable for understanding how execution reached a particular point in the code."},{title:"Stack Overflow from Infinite Recursion",useCase:"Understanding stack limits",code:`function recurse(depth = 1) {
  console.log('Depth:', depth);
  try {
    recurse(depth + 1);
  } catch (e) {
    console.log('Max depth reached:', depth);
    console.log('Error:', e.message);
  }
}

recurse();
// Output:
// Depth: 1
// Depth: 2
// ... (until ~10,000)
// Max depth reached: 10473
// Error: Maximum call stack size exceeded`,description:"Each recursive call pushes a new frame onto the Call Stack. When the stack limit is exceeded, a RangeError is thrown. Wrapping the recursive call in try/catch allows graceful handling."},{title:"Call Stack Unwinding with Error Propagation",useCase:"Error handling and stack traces",code:`function A() {
  B();
}

function B() {
  C();
}

function C() {
  throw new Error('Something went wrong in C');
}

try {
  A();
} catch (err) {
  console.log(err.message);
  console.log(err.stack);
  // Stack trace:
  // at C (file.js:X:Y)
  // at B (file.js:X:Y)
  // at A (file.js:X:Y)
  // at (anonymous) (file.js:X:Y)
}

console.log('Program continues...');  // This still runs`,description:"When an error is thrown, the Call Stack unwinds until a catch block is found. The stack trace shows the path execution took, with the error origin at the top."},{title:"Recursive Factorial with and without Tail Call",useCase:"Stack optimization patterns",code:`// Standard recursion - builds up stack frames
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
  // Not tail-call: needs to multiply result after return
}

console.log(factorial(5));  // 120

// Tail-call recursive (with helper)
function factorialTCO(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTCO(n - 1, n * acc);
  // Tail-call: returns directly, no computation after
}

console.log(factorialTCO(5));  // 120

// Iterative - no stack concerns
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}`,description:"Standard recursion creates N stack frames. If TCO is supported, the tail-call version reuses a single frame. The iterative version uses no extra frames and is typically preferred for production code."},{title:"Call Stack and the Event Loop",useCase:"Synchronous vs asynchronous execution",code:`console.log('Start');  // Stack: [global, log]

setTimeout(() => {
  console.log('Timeout callback');
}, 0);
// Timer starts, callback goes to Macrotask Queue
// NOT on the Call Stack yet

Promise.resolve().then(() => {
  console.log('Promise callback');
});
// .then() callback goes to Microtask Queue
// NOT on the Call Stack yet

console.log('End');  // Stack: [global, log]

// Call Stack empty now
// Event Loop: check Microtask Queue first
// -> 'Promise callback'
// Event Loop: then check Macrotask Queue
// -> 'Timeout callback'

// Output:
// Start
// End
// Promise callback
// Timeout callback`,description:"Synchronous code runs immediately on the Call Stack. Async callbacks (setTimeout, Promise.then) are queued and only execute when the Call Stack is empty. This is the core of JavaScript's concurrency model."}],mcqQuestions:[{question:"What data structure does the Call Stack use?",options:["FIFO (First In, First Out)","LIFO (Last In, First Out)","Priority Queue","Binary Tree"],answer:1,explanation:"The Call Stack uses LIFO — the last function pushed onto the stack is the first one to be popped off when it returns."},{question:"What is a stack frame?",options:["A single line of code","The execution context of a function call on the stack","The global object","A closure's memory allocation"],answer:1,explanation:"A stack frame represents one function's execution context on the Call Stack, containing its variables, parameters, and return address."},{question:"What causes 'Maximum call stack size exceeded'?",options:["Too many variables in a function","Infinite recursion or excessively deep call chains","Too many event listeners","Memory leak in closures"],answer:1,explanation:"This error occurs when the number of stack frames exceeds the engine's limit, most commonly due to infinite recursion or very deep recursive calls."},{question:"Where does the Global Execution Context sit on the Call Stack?",options:["At the top","At the bottom","In the middle","It is not on the Call Stack"],answer:1,explanation:"The Global Execution Context is always at the bottom of the Call Stack. It is pushed when the script starts and popped only when the program terminates."},{question:"What happens to the Call Stack when an error is thrown inside a function with no try/catch?",options:["Only the current frame is removed","The stack unwinds until it reaches the global context or a catch block","The stack freezes for debugging","All frames above the error are moved to the heap"],answer:1,explanation:"When an uncaught error occurs, the Call Stack unwinds — frames are popped one by one — until the engine reaches either a matching catch block or the Global Execution Context."},{question:"Why does setTimeout(callback, 0) NOT execute the callback immediately?",options:["The timer needs time to start","The callback must wait for the Call Stack to be empty","setTimeout always has a 1ms minimum delay","The callback is executed in a different thread"],answer:1,explanation:"Even with 0ms delay, the callback goes to the Macrotask Queue. It only executes when the Event Loop finds the Call Stack empty, after all synchronous code and microtasks are done."},{question:"What is the typical maximum stack depth in V8 (Chrome/Node.js)?",options:["100-200 frames","1,000-2,000 frames","10,000-15,000 frames","1,000,000+ frames"],answer:2,explanation:"V8 typically allows about 10,000-15,000 stack frames before throwing a stack overflow error. The exact number depends on available memory and frame size."},{question:"What is the difference between synchronous and asynchronous code regarding the Call Stack?",options:["Both execute the same way on the stack","Sync code executes directly on the stack; async callbacks wait in queues until the stack is empty","Async code has its own separate stack","Sync code uses the heap instead of the stack"],answer:1,explanation:"Synchronous code runs immediately on the Call Stack. Asynchronous callbacks are queued in task queues (microtask or macrotask) and only execute when the Event Loop detects the Call Stack is empty."},{question:"Which of the following would cause a stack overflow?",options:["An infinite for loop","A function calling itself without a base case","A while(true) loop","An array with 1 million elements"],answer:1,explanation:"Infinite loops (for/while) do not use the Call Stack — they run synchronously in a single frame. Recursion without a base case pushes new frames indefinitely, causing stack overflow."},{question:"What is tail call optimization (TCO)?",options:["Making function names shorter","Reusing the current stack frame when a function's last action is calling another function","Caching function results","Inlining small functions for performance"],answer:1,explanation:"TCO allows the engine to reuse the current stack frame for a tail call (a function call that is the last action of the enclosing function), preventing stack growth in recursive patterns."}]};export{e as call_stack};
