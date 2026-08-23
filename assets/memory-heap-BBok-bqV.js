const e={title:"Memory Heap",difficulty:"beginner",estimatedMinutes:15,tldr:["The <strong>Memory Heap</strong> is a large, unstructured region of memory where objects, arrays, functions, and closures are stored.","Unlike the Call Stack (structured LIFO), the Heap has no order — objects are allocated and freed as needed.","Heap memory is managed by JavaScript's <strong>Garbage Collector</strong> (GC), which automatically frees memory that is no longer reachable.","Common GC algorithms: <strong>Mark-and-Sweep</strong> (V8, SpiderMonkey) and <strong>Reference Counting</strong>."],laymanDefinition:"Imagine a giant warehouse where you can store anything — furniture, boxes, equipment — and you can place them anywhere there's space. This is the Memory Heap. Unlike the Call Stack (which is like a neat stack of trays), the Heap is messy and disorganized. When you create objects or arrays in JavaScript, they're stored in the Heap. When you no longer need something, a cleaning crew (the Garbage Collector) periodically walks through the warehouse, finds items that nobody is using anymore, and throws them away to make room for new things.",deepDive:[{heading:"Stack vs Heap: What Goes Where?",text:"<strong>Primitive values</strong> (numbers, strings, booleans, null, undefined, symbols) are stored directly on the Call Stack as values. <strong>Reference values</strong> (objects, arrays, functions) are stored in the Heap, and a reference (pointer) to them is stored on the Call Stack. When you assign an object to a variable, the variable holds a reference to the object's location in the Heap, not the object itself."},{heading:"Garbage Collection: Mark-and-Sweep",text:"V8 (Chrome/Node.js) uses a generational garbage collector based on Mark-and-Sweep. Algorithm: 1) The GC starts from root references (global object, Call Stack local variables). 2) It traverses all references from these roots, <strong>marking</strong> every object it reaches. 3) Any object that was not marked is <strong>swept</strong> (freed) because it is unreachable. This runs periodically and during idle time to minimize performance impact."},{heading:"Memory Leaks in the Heap",text:"A memory leak occurs when objects are no longer needed but remain reachable, preventing garbage collection. Common causes: (1) <strong>Global variables</strong> — accidental globals are never freed. (2) <strong>Forgotten timers/callbacks</strong> — setInterval with a reference to DOM nodes. (3) <strong>Closures</strong> — capturing large objects in a closure scope. (4) <strong>Detached DOM nodes</strong> — removing DOM elements but keeping JS references. (5) <strong>Event listeners</strong> — not removing listeners when elements are removed."},{heading:"V8 Heap Structure: New Space and Old Space",text:"V8 divides the Heap into generations. <strong>New Space (Young Generation):</strong> Small (1-8 MB), where new objects are allocated. GC runs frequently here (Scavenge algorithm). Most objects die young. <strong>Old Space (Old Generation):</strong> Objects that survive multiple GC cycles are promoted here. GC runs less frequently but takes longer (Mark-Sweep-Compact). This generational approach optimizes for the fact that most objects have a short lifespan."}],interviewAnswer:"The Memory Heap is JavaScript's unstructured memory pool where all reference-type values (objects, arrays, closures, functions) are stored. Primitive values live on the Call Stack. Heap memory is managed automatically by the Garbage Collector, which primarily uses Mark-and-Sweep: it starts from root references and marks all reachable objects, then frees unmarked ones. V8 uses generational collection — young objects in New Space are collected frequently with Scavenge, while survivors are promoted to Old Space where Mark-Sweep-Compact runs less often. Common heap memory leaks include global variables, forgotten closures, detached DOM references, and uncleaned event listeners.",interviewQuestions:[{question:"What is the difference between the Stack and the Heap in JavaScript?",answer:"The <strong>Stack</strong> stores primitive values and references to objects in a structured LIFO format. It is fast, small, and automatically managed by function calls/returns. The <strong>Heap</strong> stores actual objects, arrays, and functions. It is larger, slower to allocate, and managed by the Garbage Collector. Stack memory is freed when a function returns; Heap memory is freed when objects become unreachable."},{question:"How does JavaScript's Garbage Collector work?",answer:"JavaScript uses automatic garbage collection, primarily through the <strong>Mark-and-Sweep</strong> algorithm. The GC starts from root references (global object, local variables on the stack) and traverses all reachable objects, marking them. Objects that are not marked are considered unreachable and their memory is freed (swept). V8 enhances this with generational collection: frequent, fast collections in the young generation and infrequent, full collections in the old generation."},{question:"What is a memory leak in JavaScript and how do you prevent one?",answer:"A memory leak is when memory that is no longer needed is not freed because there is still a reference keeping it alive. Prevention: (1) Avoid accidental globals by using strict mode and declaring variables with let/const. (2) Clear timers/intervals with clearInterval/clearTimeout. (3) Remove event listeners when DOM elements are removed. (4) Nullify references to large objects when done. (5) Avoid retaining large data in closures unnecessarily. Use Chrome DevTools Memory tab to detect leaks."},{question:"What is the difference between 'mark-and-sweep' and 'reference counting'?",answer:"<strong>Mark-and-Sweep:</strong> Starts from roots and marks all reachable objects. Unmarked objects are freed. This correctly handles circular references. <strong>Reference Counting:</strong> Tracks how many references point to each object. When the count drops to zero, the object is freed. This fails with circular references (two objects referencing each other but no external references). Modern engines use Mark-and-Sweep exclusively."},{question:"What are the V8 Heap's 'New Space' and 'Old Space'?",answer:"<strong>New Space (Young Generation):</strong> 1-8 MB, where most objects are initially allocated. GC runs frequently using the Scavenge algorithm (fast, only collects this space). Objects that survive two GC cycles are promoted. <strong>Old Space (Old Generation):</strong> Where long-lived objects live. GC runs less frequently using Mark-Sweep-Compact (slower but more thorough). This generational approach is based on the observation that most objects die young."},{question:"Are primitive values stored on the Heap or the Stack?",answer:"Primitive values (string, number, boolean, null, undefined, symbol, bigint) are stored directly on the <strong>Call Stack</strong> as values, not references. However, strings that are very large may be stored in the Heap and a reference placed on the Stack. Modern engines optimize this internally. The key point: primitives are value types, objects are reference types."},{question:"What happens to Heap memory when a function returns?",answer:"The function's <strong>stack frame</strong> is popped from the Call Stack. If the function created objects in the Heap and no external references to those objects exist, they become unreachable and will be collected by the GC on its next sweep. If references to those objects are stored in global variables, closures, or returned from the function, they remain alive in the Heap."},{question:"How can you detect memory leaks in JavaScript?",answer:"Use browser DevTools: (1) <strong>Performance tab</strong> — record and look for growing heap usage with no GC drops. (2) <strong>Memory tab</strong> — take heap snapshots and compare them to find objects that should have been freed. (3) <strong>Timeline</strong> — watch for continuous allocation without deallocation. In Node.js, use <code>--inspect</code> flag with Chrome DevTools or the <code>process.memoryUsage()</code> API."},{question:"What objects are considered 'roots' for garbage collection?",answer:"Roots are the starting points for GC's reachability analysis: (1) The <strong>global object</strong> (window/globalThis). (2) <strong>Local variables</strong> and <strong>parameters</strong> on all active Call Stack frames. (3) <strong>Active closures</strong> — variables referenced by closures on the stack. (4) <strong>DOM elements</strong> referenced from the DOM tree. Any object reachable from these roots (via property references, array elements, etc.) is considered alive."},{question:"Does assigning null to a variable free its heap memory immediately?",answer:"No. Assigning <code>null</code> removes one reference to the object, but does NOT immediately free memory. The object becomes eligible for garbage collection only when there are zero references pointing to it. The actual memory reclamation happens during the next GC cycle, which runs at engine-determined intervals. This is why it's called 'garbage <strong>collection</strong>' not 'garbage <strong>deletion</strong>'. The GC decides when to run."}],diagramSvg:`<svg viewBox="0 0 700 460" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="440" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Memory Management: Stack vs Heap</text><!-- Stack side --><rect x="30" y="65" width="300" height="180" rx="8" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="180" y="90" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">CALL STACK</text><text x="180" y="108" text-anchor="middle" fill="#9aa0b0" font-size="10">Stores primitives + references to heap objects</text><rect x="50" y="122" width="260" height="28" rx="4" fill="#222639" stroke="var(--border)"/><text x="65" y="141" fill="#e8eaed" font-size="10" font-family="monospace">const name = 'Alice';     // primitive on stack</text><rect x="50" y="156" width="260" height="28" rx="4" fill="#222639" stroke="var(--border)"/><text x="65" y="175" fill="#e8eaed" font-size="10" font-family="monospace">const age = 30;            // primitive on stack</text><rect x="50" y="190" width="260" height="28" rx="4" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="1"/><text x="65" y="209" fill="#34d399" font-size="10" font-family="monospace">const user = ---------------->  REFERENCE</text><!-- Arrow from stack to heap --><line x1="310" y1="210" x2="370" y2="210" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)"/><text x="340" y="204" fill="#34d399" font-size="9">pointer</text><!-- Heap side --><rect x="370" y="65" width="300" height="370" rx="8" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="520" y="90" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">MEMORY HEAP</text><text x="520" y="108" text-anchor="middle" fill="#9aa0b0" font-size="10">Stores objects, arrays, functions, closures</text><!-- Objects in heap --><rect x="390" y="122" width="260" height="50" rx="4" fill="#222639" stroke="var(--border)"/><text x="405" y="142" fill="#e8eaed" font-size="10" font-family="monospace">Object { name: 'Alice',</text><text x="405" y="160" fill="#e8eaed" font-size="10" font-family="monospace">  age: 30, city: 'NYC' }</text><rect x="390" y="182" width="260" height="50" rx="4" fill="#222639" stroke="var(--border)"/><text x="405" y="202" fill="#e8eaed" font-size="10" font-family="monospace">Array [ '🍎', '🍊', '🍋' ]</text><rect x="390" y="242" width="260" height="50" rx="4" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1" stroke-dasharray="3"/><text x="405" y="262" fill="#f87171" font-size="10" font-family="monospace">UNREACHABLE OBJECT</text><text x="405" y="280" fill="#f87171" font-size="10">(no references -> GC will sweep)</text><rect x="390" y="305" width="260" height="110" rx="4" fill="rgba(167,139,250,0.06)" stroke="#a78bfa" stroke-width="1"/><text x="520" y="325" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">Garbage Collection (Mark-Sweep)</text><text x="405" y="348" fill="#9aa0b0" font-size="9">1. Start from ROOTS (global, stack)</text><text x="405" y="366" fill="#9aa0b0" font-size="9">2. MARK all reachable objects</text><text x="405" y="384" fill="#9aa0b0" font-size="9">3. SWEEP unmarked objects</text><text x="405" y="402" fill="#9aa0b0" font-size="9">4. COMPACT to reduce fragmentation</text></svg>`,codeExamples:[{title:"Stack vs Heap: Primitive vs Reference Assignment",useCase:"Understanding value vs reference behavior",code:`// Primitives (Stack) - copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// Objects (Heap) - copied by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (changed!)
console.log(obj2.value); // 20

// The variable holds a REFERENCE to the heap object
// Both obj1 and obj2 point to the SAME object on the heap

// Creating a true copy (new heap allocation)
let obj3 = { ...obj1 }; // shallow copy
obj3.value = 30;
console.log(obj1.value); // 20 (unchanged)
console.log(obj3.value); // 30`,description:"Primitives are stored directly on the stack and copied by value. Objects are stored on the heap and variables hold references (pointers) to them. This is why mutating an object through one variable affects all references to that object."},{title:"Memory Leak from Accidental Global Variables",useCase:"Common leak source",code:`function createLeak() {
  // Accidentally creates global variable (no 'let'/'const'/'var')
  leaked = new Array(1000000).fill('leak');
  // Assigns to global object (window.leaked)
}

createLeak();
// After function returns, 'leaked' is still on the global object
// => NEVER garbage collected

// Fix: Always use strict mode
'use strict';
function noLeak() {
  leaked = 'will throw ReferenceError'; // Error in strict mode
}

// Or always declare with let/const:
function safeFunction() {
  const data = new Array(1000).fill('safe');
  // data is local - eligible for GC after function returns
}`,description:"Without strict mode, assigning to an undeclared variable creates a property on the global object. Global properties are never garbage collected. Using strict mode ('use strict') prevents this by throwing a ReferenceError."},{title:"Memory Leak from Forgotten Closures",useCase:"Closures retaining large data",code:`function createLeakyHandler() {
  const largeData = new Array(100000).fill('data');
  // largeData is captured by the closure below

  document.getElementById('btn').addEventListener('click', function() {
    console.log('Button clicked');
    // This closure keeps largeData alive FOREVER
    // even if we never use largeData here
  });
}

// Fix: nullify references after use, or avoid capturing unnecessary data
function createFixedHandler() {
  const largeData = new Array(100000).fill('data');
  // Use largeData synchronously
  processData(largeData);

  document.getElementById('btn').addEventListener('click', function() {
    console.log('Button clicked');
    // No reference to largeData here
  });

  // largeData can now be GC'd (no closure references it)
}

// Alternative: explicitly null the reference
function createExplicitHandler() {
  let largeData = new Array(100000).fill('data');

  const handler = function() {
    console.log('Button clicked');
  };

  document.getElementById('btn').addEventListener('click', handler);
  largeData = null; // Remove the reference
  // Now largeData can be GC'd even though the closure exists
}`,description:"Closures capture the entire scope, not just the variables they use. If a closure references a function that contains a large object, that object stays in memory as long as the closure exists. Minimize closure scope and nullify large references when done."},{title:"Detached DOM Tree Memory Leak",useCase:"DOM reference leaks",code:`function createDetachedNodes() {
  const container = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'Click';
  container.appendChild(button);

  // Removes from DOM but keeps JS reference
  document.body.appendChild(container);

  // Later, we remove from DOM
  document.body.removeChild(container);
  // BUT: 'container' variable still holds a reference
  // => container and button are DETACHED but NOT GC'd

  // The DOM tree in memory: container -> button
  // Neither is in the document, but both are reachable via JS
}

// Fix: nullify the reference when removing
function fixDetachedNodes() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  document.body.removeChild(container);
  // container = null; // Now eligible for GC
}`,description:"Detached DOM nodes are elements that are removed from the document but still referenced by JavaScript variables. The entire subtree of a detached node remains in memory. Always nullify references to removed DOM elements."},{title:"WeakMap for Safe Object Associations",useCase:"Memory-safe caching with WeakMap",code:`// BAD: Map keeps references alive forever
const cache = new Map();
function process(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = expensiveComputation(obj);
  cache.set(obj, result);
  return result;
}
// cache prevents GC of any obj passed to process()

// GOOD: WeakMap allows GC when object is no longer referenced
const weakCache = new WeakMap();
function processWeak(obj) {
  if (weakCache.has(obj)) {
    return weakCache.get(obj);
  }
  const result = expensiveComputation(obj);
  weakCache.set(obj, result);
  return result;
}
// When 'obj' goes out of scope, the entry is automatically
// removed from weakCache by the GC

// WeakMaps hold 'weak' references - they don't prevent GC
// Perfect for caches, metadata, and private data associations`,description:"WeakMap holds weak references to its keys, meaning it does not prevent garbage collection. When a key object is no longer referenced elsewhere, the entry is automatically removed from the WeakMap. This is ideal for caches and metadata to avoid memory leaks."}],mcqQuestions:[{question:"Where is the object stored in this code? const obj = { name: 'Test' };",options:["On the Call Stack","On the Memory Heap","In the CPU Register","In the File System"],answer:1,explanation:"Objects are always stored on the Heap. The variable 'obj' on the stack holds a reference (pointer) to the object's location on the heap."},{question:"What does the Garbage Collector use as starting points for reachability analysis?",options:["All objects in memory","Root references (global object, stack variables)","All function declarations","Only the global object"],answer:1,explanation:"The GC starts from root references: the global object, local variables on the Call Stack, and active closure references. It then traverses all references from these roots."},{question:"Which of the following would cause a memory leak?",options:["Declaring variables with let","Using const","Accidentally assigning to an undeclared variable","Using strict mode"],answer:2,explanation:"Assigning to an undeclared variable creates a property on the global object, which is never garbage collected. This is a common source of memory leaks."},{question:"What is the difference between Map and WeakMap regarding memory?",options:["Map is faster than WeakMap","WeakMap allows its keys to be garbage collected; Map does not","Map stores values on the stack","WeakMap can only store strings as keys"],answer:1,explanation:"WeakMap holds weak references to its keys. If a key object has no other references, it can be GC'd, and the WeakMap entry is automatically removed. Map holds strong references, preventing GC."},{question:"When does JavaScript's Garbage Collector run?",options:["Only when the program ends","At engine-determined intervals (during idle time, allocations, etc.)","Immediately when a variable goes out of scope","Only when manually called via gc()"],answer:1,explanation:"The GC runs automatically at intervals determined by the engine, typically triggered when memory is allocated and during idle time. It is not tied to variable scope or program termination."},{question:"What happens to heap-allocated objects when a function returns?",options:["They are immediately freed","They become eligible for GC if no longer reachable","They are moved to the stack","They are automatically deleted"],answer:1,explanation:"When a function returns, its stack frame is popped. Objects in the heap that were only referenced by that function's local variables become unreachable and are eligible for GC."},{question:"What is the Mark-and-Sweep algorithm?",options:["A sorting algorithm","A garbage collection algorithm that marks reachable objects and sweeps unmarked ones","A DOM manipulation technique","A way to optimize function calls"],answer:1,explanation:"Mark-and-Sweep starts from root references, marks all reachable objects, then sweeps (frees) unmarked objects. It correctly handles circular references, unlike reference counting."},{question:"What are V8's 'New Space' and 'Old Space'?",options:["Two types of variables","Generations in V8's generational heap: young objects (New) and survivors (Old)","Two separate JavaScript engines","Stack and Heap"],answer:1,explanation:"V8 uses generational GC. New Space holds recently created objects (collected frequently). Survivors are promoted to Old Space (collected less often). This optimizes for the fact that most objects die young."},{question:"What is a detached DOM node memory leak?",options:["A DOM element that is too large","A DOM element removed from the document but still referenced by JavaScript","A DOM element with too many event listeners","A DOM element that was never added to the document"],answer:1,explanation:"When a DOM node is removed from the document but a JavaScript variable still holds a reference to it, the entire node and its subtree remain in memory. This is a common memory leak in web applications."},{question:"Does assigning null to an object variable free memory immediately?",options:["Yes, instantly","No, it only removes one reference. The object becomes eligible for GC on the next GC cycle","No, null has no effect on memory","Yes, but only for arrays"],answer:1,explanation:"Setting a variable to null removes one reference to the object. The object is freed only when there are zero references AND the GC runs its next cycle. Memory is not freed immediately."}]};export{e as memory_heap};
