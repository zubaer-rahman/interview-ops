const e={id:"practice-javascript",title:"JavaScript Coding Challenges",difficulty:"intermediate",estimatedMinutes:35,tldr:["Master polyfills: implement your own Promise.all, Array.map, Array.filter, Array.reduce, Function.bind.","Understand closures and their practical uses: module pattern, memoization, currying, event handlers in loops.","Event loop phases: timers → I/O callbacks → idle → poll → check (setImmediate) → close callbacks. Microtasks (Promise.then) run between phases.","Deep vs shallow copy: structuredClone() for deep cloning, spread operator for shallow. Watch for circular references.","Debouncing and throttling are essential for performance optimization — know when to use each."],laymanDefinition:"JavaScript coding challenges test your understanding of how the language actually works under the hood. It's like being an auto mechanic who needs to know not just how to drive a car (write code) but how the engine works (closures, event loop, prototypal inheritance). Interviewers ask you to implement Array.map from scratch to prove you understand what .map actually does — not just that you can use it. These questions separate developers who truly understand JS from those who just copy-paste from Stack Overflow.",deepDive:[{heading:"Polyfills: Implementing Array Methods",text:"Array.map: create new array, call callback on each element with (element, index, array), return new array. Array.filter: create new array, push elements where callback returns truthy. Array.reduce: accumulator starts with initialValue or first element, callback runs for each element. Function.bind: returns new function with fixed this and partial args. Promise.all: returns a promise that resolves when all input promises resolve, or rejects on first rejection. Implement each without using the built-in method."},{heading:"Closures in Practice",text:'A closure is a function that retains access to its outer scope even after the outer function has returned. Practical uses: (1) Module pattern — encapsulate private variables with public API. (2) Memoization — cache function results. (3) Currying — transform multi-argument functions into chained single-argument functions. (4) Event handlers in loops — the classic "var in loop" bug is solved by closures (IIFE or let). (5) Factory functions — create functions with preset configuration.'},{heading:"Event Loop Deep Dive",text:"Call stack: synchronous execution. Web APIs: setTimeout, fetch, DOM events (run in browser threads). Task queue (macrotasks): setTimeout callbacks, setInterval, I/O. Microtask queue: Promise.then/catch/finally, queueMicrotask, MutationObserver. Event loop: (1) Execute all synchronous code. (2) Process all microtasks (clear the microtask queue). (3) Process one macrotask. (4) Re-render UI if needed. (5) Repeat. This explains why setTimeout(0) doesn't run immediately — it's a macrotask and waits for microtasks."},{heading:"Async/Await and Error Handling",text:"async function returns a Promise. await pauses execution until the promise settles. Error handling: try/catch around await, or .catch() on the returned promise. Multiple awaits: sequential (slow) vs Promise.all (parallel). Common pitfall: forgetting await inside loops — use for...of with await, or Promise.allSettled for parallel with partial failure. Top-level await: available in modules. Always handle promise rejections — unhandled rejections crash Node.js."},{heading:"Prototypal Inheritance vs Classes",text:"JavaScript uses prototypal inheritance: objects inherit from other objects via [[Prototype]]. The `new` keyword: (1) creates empty object, (2) sets prototype, (3) calls constructor with `this` bound, (4) returns object. Class syntax is syntactic sugar over prototypes. Understand: Object.create(), constructor.prototype, __proto__, instanceof, hasOwnProperty(). Interview trick: implement `new` operator from scratch: function myNew(Constructor, ...args) { const obj = Object.create(Constructor.prototype); const result = Constructor.apply(obj, args); return typeof result === 'object' && result !== null ? result : obj; }."}],interviewAnswer:"For JavaScript interviews, master: (1) Polyfills — implement map, filter, reduce, bind, Promise.all from scratch. (2) Closures — module pattern, memoization, currying, var/let loop behavior. (3) Event loop — microtask vs macrotask ordering, explain Promise.then vs setTimeout order. (4) Async/await — error handling, Promise.all vs allSettled, sequential vs parallel. (5) Prototypal inheritance — implement `new`, understand `this` binding, Object.create. (6) Debounce vs throttle — implement both from scratch. Write clean code with proper error handling and edge case coverage.",interviewQuestions:[{question:"Implement Array.prototype.map from scratch.",answer:"Array.prototype.myMap = function(callback, thisArg) { const result = []; for (let i = 0; i < this.length; i++) { if (i in this) result.push(callback.call(thisArg, this[i], i, this)); } return result; }. Handle sparse arrays with `in` operator."},{question:"Implement Function.prototype.bind.",answer:"Function.prototype.myBind = function(thisArg, ...boundArgs) { const fn = this; return function(...args) { return fn.apply(thisArg, [...boundArgs, ...args]); }; }. Handle new operator: if called with `new`, ignore thisArg."},{question:"Implement a debounce function.",answer:"function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; }. Leading edge option: invoke immediately then suppress subsequent calls within window."},{question:"Implement a throttle function.",answer:"function throttle(fn, limit) { let inThrottle; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }. Trailing edge: ensure last call executes after limit."},{question:"Implement Promise.all.",answer:"Promise.myAll = function(promises) { return new Promise((resolve, reject) => { const results = new Array(promises.length); let remaining = promises.length; if (remaining === 0) resolve(results); promises.forEach((p, i) => Promise.resolve(p).then(val => { results[i] = val; if (--remaining === 0) resolve(results); }, reject)); }); }. Handles non-promise values with Promise.resolve."},{question:"Explain the output of: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);",answer:"Output: 1, 4, 3, 2. Explanation: 1 and 4 are synchronous. Promise.then is a microtask (runs before next macrotask). setTimeout(0) is a macrotask (runs after microtasks are cleared)."},{question:"Implement deep clone (handle circular references).",answer:"function deepClone(obj, map = new WeakMap()) { if (obj === null || typeof obj !== 'object') return obj; if (map.has(obj)) return map.get(obj); const clone = Array.isArray(obj) ? [] : {}; map.set(obj, clone); for (const key of Object.keys(obj)) clone[key] = deepClone(obj[key], map); return clone; }. WeakMap tracks circular references. For production: structuredClone()."},{question:'Explain "this" binding rules.',answer:"(1) Default: global (or undefined in strict mode). (2) Implicit: obj.method() → obj. (3) Explicit: call, apply, bind. (4) New: new Constructor() → new instance. (5) Arrow: inherits this from enclosing scope (lexical). Priority: new > explicit > implicit > default."},{question:"Implement an EventEmitter (pub/sub) class.",answer:"class EventEmitter { constructor() { this.events = {}; } on(event, listener) { (this.events[event] ||= []).push(listener); return () => this.off(event, listener); } off(event, listener) { if (!this.events[event]) return; this.events[event] = this.events[event].filter(l => l !== listener); } emit(event, ...args) { (this.events[event] || []).forEach(l => l(...args)); } once(event, listener) { const wrapper = (...args) => { listener(...args); this.off(event, wrapper); }; this.on(event, wrapper); } }."},{question:"Implement a memoization function.",answer:"function memoize(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn.apply(this, args); cache.set(key, result); return result; }; }. For recursive functions (like Fibonacci), the memoized version must call the memoized wrapper, not itself. Use WeakMap for object keys."}],diagramSvg:'<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;"><defs><marker id="jsArr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="580" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="300" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">JavaScript Event Loop</text><rect x="30" y="55" width="180" height="50" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="120" y="78" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Call Stack</text><text x="120" y="93" fill="#9aa0b0" font-size="9" text-anchor="middle">Synchronous code</text><line x1="210" y1="80" x2="270" y2="80" stroke="#f87171" stroke-width="2"/><text x="240" y="70" fill="#f87171" font-size="8" text-anchor="middle">1 macrotask</text><rect x="270" y="55" width="150" height="50" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="345" y="73" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Render (ui)</text><text x="345" y="93" fill="#9aa0b0" font-size="9" text-anchor="middle">Browser paint</text><line x1="420" y1="80" x2="480" y2="80" stroke="#fbbf24" stroke-width="2"/><text x="450" y="70" fill="#fbbf24" font-size="8" text-anchor="middle">microtasks</text><rect x="480" y="55" width="100" height="50" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="530" y="78" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Microtasks</text><text x="530" y="93" fill="#9aa0b0" font-size="9" text-anchor="middle">Promise.then</text><rect x="30" y="130" width="550" height="40" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="305" y="155" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Macrotask Queue: setTimeout, setInterval, I/O, DOM events</text><rect x="30" y="180" width="550" height="40" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="305" y="205" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Microtask Queue: Promise callbacks, queueMicrotask, MutationObserver</text><rect x="30" y="235" width="550" height="35" rx="6" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="305" y="257" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Order: 1 Call Stack → 2 Clear Microtasks → 3 One Macrotask → 4 Render → Repeat</text></svg>',codeExamples:[{title:"EventEmitter Implementation",useCase:"Pub/sub pattern from scratch",code:`class EventEmitter {
  constructor() {
    this._events = new Map();
  }
  on(event, listener) {
    if (!this._events.has(event)) {
      this._events.set(event, []);
    }
    this._events.get(event).push(listener);
    return () => this.off(event, listener);
  }
  off(event, listenerToRemove) {
    if (!this._events.has(event)) return;
    const filtered = this._events.get(event)
      .filter(l => l !== listenerToRemove);
    if (filtered.length === 0) this._events.delete(event);
    else this._events.set(event, filtered);
  }
  emit(event, ...args) {
    if (!this._events.has(event)) return false;
    this._events.get(event).forEach(l => l(...args));
    return true;
  }
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// Usage
const ee = new EventEmitter();
const off = ee.on("data", d => console.log(d));
ee.emit("data", "hello"); // logs "hello"
off();
ee.emit("data", "world"); // nothing logged`,description:"EventEmitter implements the observer pattern. on() returns an unsubscribe function for easy cleanup. once() auto-removes after first emit."},{title:"Currying with Placeholder Support",useCase:"Advanced currying similar to lodash",code:`const _ = Symbol("placeholder");

function curry(fn, arity = fn.length, ...args) {
  return function(...nextArgs) {
    const merged = [];
    let argsIdx = 0, nextIdx = 0;
    while (argsIdx < args.length || nextIdx < nextArgs.length) {
      const a = argsIdx < args.length ? args[argsIdx] : _;
      const n = nextIdx < nextArgs.length ? nextArgs[nextIdx] : _;
      if (a !== _ && a !== undefined) {
        merged.push(a);
        argsIdx++;
      } else if (n !== _ && n !== undefined) {
        merged.push(n);
        nextIdx++;
      } else { break; }
    }
    const remaining = [...merged, ...nextArgs.slice(nextIdx)];
    if (remaining.length >= arity
        && remaining.filter(a => a === _).length === 0) {
      return fn(...remaining);
    }
    return curry(fn, arity, ...remaining);
  };
}

// Usage:
const add = curry((a, b, c) => a + b + c);
add(1, 2, 3); // 6
add(1)(2)(3); // 6`,description:"Currying transforms a multi-argument function into a sequence of unary functions. Placeholder support enables skipping arguments."},{title:"Promise Pool: Limit Concurrency",useCase:"Run N async tasks with max concurrency",code:`async function promisePool(tasks, limit) {
  const results = [];
  const executing = new Set();

  for (const [index, task] of tasks.entries()) {
    const promise = Promise.resolve().then(() => task());
    results[index] = promise;
    executing.add(promise);

    const cleanup = () => executing.delete(promise);
    promise.then(cleanup, cleanup);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

// Usage: process 100 URLs with 5 concurrent connections
const urls = Array.from({length: 100}, (_, i) =>
  () => fetch(\`https://api.example.com/item/\${i}\`)
);
const responses = await promisePool(urls, 5);`,description:"Promise pool limits concurrent execution. When limit is reached, race() waits for any task to complete before starting the next."}],mcqQuestions:[{question:"What is the output of: setTimeout(() => console.log(1), 0); Promise.resolve().then(() => console.log(2)); console.log(3);",options:["3, 1, 2","3, 2, 1","1, 2, 3","2, 3, 1"],answer:1,explanation:"Promise.then (microtask) runs before setTimeout (macrotask). Synchronous code runs first."},{question:"Which method creates a new array by applying a function to each element?",options:["filter()","map()","reduce()","forEach()"],answer:1,explanation:"map() creates a new array with transformed elements. filter() selects, reduce() aggregates, forEach() iterates."},{question:"What does the `new` keyword do?",options:["Calls a function","Creates object, sets prototype, binds this, returns object","Copies an object","Declares a variable"],answer:1,explanation:"new: creates empty object, sets [[Prototype]], calls constructor with this bound, returns the object."},{question:"Which of these is a microtask source?",options:["setTimeout","Promise.then","setInterval","DOM event listener"],answer:1,explanation:"Promise callbacks are microtasks. setTimeout, setInterval, and DOM events are macrotasks."},{question:"What is the primary use case for debounce?",options:["Limit execution rate (e.g., scroll handler)","Delay execution until after a pause (e.g., search input)","Parallel execution","Error handling"],answer:1,explanation:"Debounce: wait for a pause before executing (search input). Throttle: limit rate (scroll handler)."},{question:"How does structuredClone() handle circular references?",options:["Throws an error","Returns undefined for circular refs","Handles them correctly via internal reference tracking","Creates infinite recursion"],answer:2,explanation:"structuredClone() uses an internal reference map to handle circular references correctly."}]};export{e as practice_javascript};
