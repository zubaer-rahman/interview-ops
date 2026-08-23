const e={title:"JavaScript Higher Order Functions",difficulty:"intermediate",estimatedMinutes:25,tldr:["A <strong>Higher Order Function (HOF)</strong> is a function that either takes one or more functions as arguments, <strong>returns a function</strong>, or both.","HOFs enable <strong>abstraction</strong>, <strong>code reuse</strong>, and <strong>functional programming</strong> patterns like composition and currying.","Examples: <code>Array.map()</code>, <code>Array.filter()</code>, <code>Array.reduce()</code>, <code>setTimeout()</code>, <code>addEventListener()</code>.","Closures and HOFs are closely related — when a HOF returns a function, the returned function has access to the HOF's variables via closure."],laymanDefinition:"Imagine you own a factory. A higher order function is like a machine that either takes other machines as input or produces new machines as output. For example, a 'packing machine' might accept a 'wrapping machine' (function as argument) and use it to wrap products. Or you might have a 'machine creator' that builds and returns new machines (returns a function). These are more powerful than regular machines because they work WITH other machines to create complex processes.",deepDive:[{heading:"Functions as First-Class Citizens",text:"In JavaScript, functions are first-class citizens — they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This is the foundation for higher order functions. Languages where functions are not first-class (like older C) cannot easily implement HOFs."},{heading:"HOFs That Accept Functions (Callbacks)",text:"The most common HOF pattern is accepting a callback function. Array methods (map, filter, reduce, forEach) are classic examples. The HOF controls when and how the callback is called — it may call it once per array element, transform its return value, or use it to determine logic. Event listeners (addEventListener) are another example: the HOF (addEventListener) stores the callback and calls it when the event fires."},{heading:"HOFs That Return Functions (Closures)",text:"A HOF can return a new function, creating a closure. The returned function retains access to the HOF's variables even after the HOF has finished executing. Examples: <code>function multiplyBy(x) { return (y) => x * y; }</code>. The returned function remembers x. This is the basis for currying, partial application, and function factories."},{heading:"Common Built-in HOFs in JavaScript",list:["<strong>Array.prototype</strong>: map(), filter(), reduce(), forEach(), find(), some(), every(), sort().","<strong>Function.prototype</strong>: bind(), call(), apply() — though these are less commonly called HOFs.","<strong>Global:</strong> setTimeout(), setInterval(), Promise.then(), Promise.catch().","<strong>Custom:</strong> Debounce, throttle, once, memoize, pipe, compose."]},{heading:"Function Composition with HOFs",text:"Higher Order Functions enable function composition — combining multiple functions to create more complex ones. A simple compose function: <code>const compose = (f, g) => (x) => f(g(x))</code>. More advanced: <code>const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)</code>. This creates data pipelines where the output of each function feeds into the next."}],interviewAnswer:"A Higher Order Function (HOF) is a function that takes one or more functions as arguments, returns a function, or both. JavaScript treats functions as first-class citizens, enabling this pattern. Common HOFs include Array methods (map, filter, reduce, forEach), event listeners (addEventListener), timers (setTimeout, setInterval), and Promise methods. HOFs enable abstraction, code reuse, function composition, and functional programming patterns like currying and memoization. A HOF returning a function creates a closure over its variables. Key interview topics: implementing HOFs like debounce/throttle/once, understanding how map/filter/reduce work, and composing functions with pipe/compose.",interviewQuestions:[{question:"What is a Higher Order Function?",answer:"A function that either takes one or more functions as arguments, returns a function, or both. Example: Array.map takes a callback (function argument). Function.bind returns a new function."},{question:"What is the difference between a callback and a HOF?",answer:"A callback is a function passed as an argument. A HOF is the function that receives or returns a function. In arr.map(callback), map is the HOF and callback is the callback function."},{question:"What makes a function a first-class citizen?",answer:"A first-class citizen can be: assigned to a variable, passed as an argument, returned from a function, and stored in data structures. JavaScript functions are first-class, which enables HOFs."},{question:"What are examples of built-in HOFs?",answer:"Array.map, Array.filter, Array.reduce, Array.forEach, Array.find, Array.some, Array.every, setTimeout, setInterval, addEventListener, Promise.then, Promise.catch, Function.bind."},{question:"How does a HOF create a closure?",answer:"When a HOF returns a function, the returned function retains access to the HOF's variables via closure. Example: function multiplyBy(x) { return (y) => x * y; } — the returned arrow function closes over x."},{question:"What is function composition with HOFs?",answer:"Combining multiple functions into a pipeline: const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x). This creates a HOF that accepts functions and returns a new composed function."},{question:"How do you implement a 'once' HOF?",answer:"function once(fn) { let called = false; return function(...args) { if (called) return; called = true; return fn.apply(this, args); }; }. The HOF returns a function that only allows one call."},{question:"What is difference between declarative and imperative with HOFs?",answer:"Imperative: for-loop with manual index tracking. Declarative: arr.filter(x => x > 0). HOFs enable declarative code that focuses on WHAT to do, not HOW to do it."},{question:"Can HOFs improve performance?",answer:"Not inherently, but they enable optimization patterns like memoization (caching results), debouncing (limiting frequency), and lazy evaluation. The primary benefit is code clarity and reusability."},{question:"How do you implement a simple debounce HOF?",answer:"function debounce(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; }. The HOF takes a function and returns a debounced version."}],diagramSvg:'<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Higher Order Functions</text><rect x="40" y="70" width="280" height="100" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="180" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">HOF — Takes Function as Argument</text><text x="180" y="115" text-anchor="middle" fill="#98c379" font-size="10">function map(arr, fn) { ... }</text><text x="180" y="135" text-anchor="middle" fill="#9aa0b0" font-size="10">arr = [1, 2, 3], fn = x =&gt; x * 2</text><text x="180" y="155" text-anchor="middle" fill="#9aa0b0" font-size="10">→ [2, 4, 6]</text><rect x="360" y="70" width="300" height="100" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="510" y="93" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">HOF — Returns Function</text><text x="510" y="115" text-anchor="middle" fill="#e5c07b" font-size="10">function multiplyBy(x) {</text><text x="510" y="135" text-anchor="middle" fill="#e5c07b" font-size="10">return (y) =&gt; x * y;</text><text x="510" y="155" text-anchor="middle" fill="#9aa0b0" font-size="10">}  const double = multiplyBy(2);</text><text x="350" y="240" fill="#e8eaed" font-size="12" font-weight="bold">Key Built-in HOFs</text><text x="350" y="265" fill="#9aa0b0" font-size="11">Array: map, filter, reduce, forEach, find, some, every</text><text x="350" y="285" fill="#9aa0b0" font-size="11">Other: setTimeout, addEventListener, Promise.then, .bind()</text></svg>',codeExamples:[{title:"HOF That Takes a Function — Custom Array Map",useCase:"Understanding how map works internally",code:`// Custom map — a HOF that takes a callback
function customMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, function(n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// Using the built-in map (also a HOF)
const tripled = numbers.map(function(n) {
  return n * 3;
});
console.log(tripled); // [3, 6, 9, 12]

// Arrow function version
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]`,description:"customMap is a HOF that takes an array and a function (callback). It calls the callback for each element, building a new array. The built-in Array.map works the same way."},{title:"HOF That Returns a Function — Function Factory",useCase:"Creating specialized functions",code:`// HOF that returns a new function (closure)
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

// Create specialized functions
const double = multiplyBy(2);
const triple = multiplyBy(3);
const tenTimes = multiplyBy(10);

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(tenTimes(5)); // 50

// Practical: API URL builder
function createApiClient(baseUrl) {
  return function(endpoint) {
    return fetch(baseUrl + endpoint)
      .then(function(r) { return r.json(); });
  };
}

const githubApi = createApiClient('https://api.github.com');
githubApi('/users/octocat').then(function(data) {
  console.log(data.login); // 'octocat'
});

// Practical: prefix logger
function createLogger(prefix) {
  return function(message) {
    console.log('[' + prefix + '] ' + message);
  };
}

const infoLog = createLogger('INFO');
const errorLog = createLogger('ERROR');
infoLog('Server started');   // [INFO] Server started
errorLog('Connection lost'); // [ERROR] Connection lost`,description:"A HOF returning a function creates a closure over its parameters. This enables creating specialized functions from a general one — a core functional programming pattern."},{title:"HOF: Function Composition (pipe)",useCase:"Building data transformation pipelines",code:`// pipe — HOF that takes multiple functions and composes them
function pipe(...functions) {
  return function(initialValue) {
    return functions.reduce(function(acc, fn) {
      return fn(acc);
    }, initialValue);
  };
}

// compose (right-to-left)
function compose(...functions) {
  return function(initialValue) {
    return functions.reduceRight(function(acc, fn) {
      return fn(acc);
    }, initialValue);
  };
}

// Small reusable functions
const add1 = x => x + 1;
const double = x => x * 2;
const toString = x => 'Result: ' + x;

// Compose them
const processNumber = pipe(add1, double, toString);
console.log(processNumber(5)); // 'Result: 12'
// Step by step: 5 → 6 (add1) → 12 (double) → 'Result: 12' (toString)

// compose (right-to-left)
const processNumberRTL = compose(toString, double, add1);
console.log(processNumberRTL(5)); // 'Result: 12'
// Same result because compose is RTL: add1(5)=6, double(6)=12, toString(12)

// Practical: data processing pipeline
const data = [1, 2, 3, 4, 5, 6];
const processData = pipe(
  arr => arr.filter(n => n % 2 === 0),  // keep evens
  arr => arr.map(n => n * 10),           // multiply by 10
  arr => arr.reduce((sum, n) => sum + n, 0) // sum
);
console.log(processData(data)); // (2+4+6)*10 = 120`,description:"pipe/compose are HOFs that accept multiple functions and return a new composed function. Data flows through each function in sequence. This is a fundamental functional programming pattern."},{title:"HOF: Memoization (Caching)",useCase:"Optimizing expensive function calls",code:`// memoize — HOF that caches results
function memoize(fn) {
  var cache = new Map();

  return function(...args) {
    var key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Cache hit for:', key);
      return cache.get(key);
    }

    console.log('Computing for:', key);
    var result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Expensive function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version
const memoFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoFib(n - 1) + memoFib(n - 2);
});

console.log(memoFib(40)); // 102334155 (fast!)
// Without memoization, this would be extremely slow

// Practical: memoize API calls
const fetchUser = memoize(async function(userId) {
  var response = await fetch('/api/users/' + userId);
  return response.json();
});

fetchUser(1).then(function(u) { console.log('Got user'); });
// fetchUser(1) // Second call returns cached result — no network request`,description:"A memoize HOF wraps an expensive function with caching. The returned function checks the cache before calling the original function. Cache keys are typically the arguments serialized to string."},{title:"Practical HOF: once, debounce, throttle",useCase:"Real-world HOF patterns",code:`// once — ensures function is called only once
function once(fn) {
  var called = false;
  var result;
  return function(...args) {
    if (called) return result;
    called = true;
    result = fn.apply(this, args);
    return result;
  };
}

var initialize = once(function() {
  console.log('Initializing... (runs once)');
  return { ready: true };
});

console.log(initialize()); // 'Initializing...' + { ready: true }
console.log(initialize()); // { ready: true } (no log)

// debounce — delays execution until after a pause
function debounce(fn, delay) {
  var timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// throttle — limits execution rate
function throttle(fn, limit) {
  var inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(function() { inThrottle = false; }, limit);
    }
  };
}

// These are all HOFs: they take a function and return
// a new function with enhanced behavior`,description:"once, debounce, and throttle are practical HOFs. They wrap a function to add behavior: limiting calls (once), delaying execution (debounce), or rate-limiting (throttle)."}],mcqQuestions:[{question:"What is a Higher Order Function?",options:["A function that returns a number","A function that takes or returns another function","A function with multiple parameters","A function that calls itself"],answer:1,explanation:"A HOF is a function that takes one or more functions as arguments, returns a function, or both."},{question:"Which of these is a Higher Order Function?",options:["function add(a, b) { return a + b; }","Array.prototype.map","const x = 5","if (true) { }"],answer:1,explanation:"Array.map is a HOF because it takes a callback function as an argument. The other options are not HOFs."},{question:"What does a HOF that returns a function create?",options:["A callback","A closure","A promise","An iteration"],answer:1,explanation:"When a HOF returns a function, the returned function forms a closure over the HOF's variables."},{question:"Which of these is NOT a HOF?",options:["setTimeout","Array.filter","Math.max","Function.bind"],answer:2,explanation:"Math.max is a regular function that takes values and returns the max. It does NOT take or return a function."},{question:"Why are functions called 'first-class citizens' in JavaScript?",options:["Because they run first","Because they can be assigned, passed, and returned like any value","Because they have priority","Because they execute immediately"],answer:1,explanation:"Functions are first-class citizens because they can be assigned to variables, passed as arguments, returned from functions, and stored in data structures."},{question:"What is the 'once' HOF pattern?",options:["A function that runs indefinitely","A HOF that ensures the wrapped function runs only once","A function that runs once per second","A function with a single parameter"],answer:1,explanation:"The 'once' HOF wraps a function so it executes only on the first call and returns the cached result for subsequent calls."},{question:"What does pipe(...fns) do?",options:["Creates a pipeline where data flows left-to-right through functions","Creates multiple copies of a function","Pauses function execution","Measures function performance"],answer:0,explanation:"pipe is a HOF that composes functions left-to-right. The output of each function becomes the input to the next."},{question:"Is addEventListener a Higher Order Function?",options:["Yes, it takes a callback function as an argument","No, it only works with strings","Only in React","Only in Node.js"],answer:0,explanation:"addEventListener is a HOF because it accepts a function (the event handler) as its second argument."},{question:"What does the memoize HOF do?",options:["Saves results to a file","Caches function results based on arguments","Creates documentation","Optimizes loops"],answer:1,explanation:"Memoize caches the results of expensive function calls and returns the cached result when the same arguments occur again."},{question:"What enables HOFs in JavaScript?",options:["Prototypal inheritance","Functions being first-class citizens","The event loop","Type coercion"],answer:1,explanation:"HOFs are possible because JavaScript treats functions as first-class citizens — they can be passed as arguments and returned from other functions."}]};export{e as higher_order_functions};
