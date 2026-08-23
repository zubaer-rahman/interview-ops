export const closures = {
  "title": "Closures",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "A <strong>closure</strong> is a function that <strong>remembers</strong> the variables from its lexical scope even after the outer function has returned.",
    "Closures are created every time a function is defined inside another function and the inner function references variables from the outer function.",
    "They enable <strong>data privacy</strong>, <strong>function factories</strong>, <strong>currying</strong>, and <strong>callback preservation</strong>.",
    "Closures are <strong>not</strong> a feature you explicitly create -- they are a natural behavior of JavaScript's lexical scoping."
  ],
  "laymanDefinition": "Imagine you have a backpack. When you leave your house, you put a few items in it -- a snack, a phone charger, a book. Even after you leave your house far behind, you still have those items with you. A closure is like that backpack for a function. A function can carry variables from its birthplace (where it was defined) with it, even after the birthplace has been destroyed or is no longer accessible. This means a function can remember and use variables from the place it was created, long after that place is gone.",
  "deepDive": [
    {
      "heading": "Lexical Scoping: The Foundation",
      "text": "JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location in the source code. When a function is defined, it captures a reference to its outer environment -- specifically, the variable environment of the enclosing function or global scope."
    },
    {
      "heading": "How Closures Work Internally",
      "text": "Every JavaScript function has an internal property called [[Environment]] that stores a reference to the environment in which the function was created. When the function executes, it creates a new execution context with its own variable environment, but it also retains a link to the outer environment via [[Environment]]. This chain of environment records forms the scope chain. A closure is formed when an inner function maintains a reference to variables from an outer scope that would otherwise have been garbage collected."
    },
    {
      "heading": "The Relationship Between Closures and Garbage Collection",
      "text": "Normally, when a function finishes executing, its local variables are eligible for garbage collection. However, if an inner function holds a reference to those variables (via closure), the JavaScript engine must keep those variables alive in memory. This is why closures can cause memory leaks if not used carefully -- the referenced variables cannot be garbage collected as long as the closure exists."
    },
    {
      "heading": "Common Use Cases",
      "list": [
        "<strong>Data Privacy / Module Pattern:</strong> Encapsulate private variables that cannot be accessed from outside the function.",
        "<strong>Function Factories:</strong> Create functions with preset arguments or behaviors.",
        "<strong>Event Handlers & Callbacks:</strong> Preserve state across asynchronous operations.",
        "<strong>Currying & Partial Application:</strong> Transform functions that take multiple arguments into a sequence of functions.",
        "<strong>Memoization:</strong> Cache function results based on arguments."
      ]
    },
    {
      "heading": "Closures in Loops: The Classic Pitfall",
      "text": "The most famous closure bug occurs when creating functions inside a loop using var (function-scoped). Each iteration shares the same variable binding, so by the time the callback runs, the loop variable has already reached its final value. The fix is to use let (block-scoped, creates a new binding per iteration) or wrap the closure in an IIFE that captures the current value."
    }
  ],
  "interviewAnswer": "A closure is the combination of a function bundled together with references to its lexical environment. In JavaScript, every function has access to variables from its outer scope even after the outer function has returned. This happens because functions carry an internal reference to the environment in which they were created, called [[Environment]]. Closures are fundamental to JavaScript because they enable data encapsulation, function factories, partial application, and stateful callbacks. For example, when a function is returned from another function, it retains access to the outer function's variables -- that is a closure in action. Understanding closures is essential for writing secure, modular, and efficient JavaScript code.",
  "interviewQuestions": [
    {
      "question": "What is a closure in JavaScript? Provide a code example.",
      "answer": "A closure is a function that retains access to its lexical scope even when executed outside that scope. <strong>Example:</strong><br/><br/><pre><code>function outer(x) {\n  return function inner(y) {\n    return x + y;\n  };\n}\nconst add5 = outer(5);\nconsole.log(add5(3)); // 8\n</code></pre><br/>Here, <code>inner</code> closes over <code>x</code> from <code>outer</code>'s scope. Even after <code>outer</code> has returned, <code>add5</code> retains access to <code>x = 5</code>."
    },
    {
      "question": "How do closures relate to the module pattern?",
      "answer": "The module pattern uses closures to create private variables and expose only a public API. <strong>Example:</strong><br/><br/><pre><code>const Counter = (function() {\n  let count = 0; // private variable\n  return {\n    increment() { count++; },\n    decrement() { count--; },\n    getCount() { return count; }\n  };\n})();\nCounter.increment();\nconsole.log(Counter.getCount()); // 1\nconsole.log(Counter.count); // undefined\n</code></pre><br/>The <code>count</code> variable is only accessible via the returned methods because those methods form closures over the IIFE's scope."
    },
    {
      "question": "What is the closure loop problem and how do you fix it?",
      "answer": "When using <code>var</code> inside a loop, all callbacks share the same variable binding, so they all see the final value. <strong>Problem:</strong><br/><br/><pre><code>for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n} // logs 3, 3, 3\n</code></pre><br/><strong>Fix 1 -- Use <code>let</code> (block scoping):</strong><br/><br/><pre><code>for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n} // logs 0, 1, 2\n</code></pre><br/><strong>Fix 2 -- IIFE wrapper:</strong><br/><br/><pre><code>for (var i = 0; i < 3; i++) {\n  ((j) => setTimeout(() => console.log(j), 100))(i);\n} // logs 0, 1, 2\n</code></pre>"
    },
    {
      "question": "Can closures cause memory leaks? How?",
      "answer": "Yes, closures can cause memory leaks when they unintentionally retain references to large objects that should be garbage collected. If a closure maintains a reference to a large data structure or DOM element, that data cannot be freed until the closure itself is released. <strong>Example of a leak:</strong><br/><br/><pre><code>function setupHandler() {\n  const largeData = new Array(1000000).fill('x');\n  document.getElementById('btn').onclick = function() {\n    console.log('clicked'); // closure over largeData\n  };\n}\n</code></pre><br/>The click handler's closure keeps <code>largeData</code> alive as long as the DOM element exists. <strong>Fix:</strong> Nullify the reference when no longer needed: <code>largeData = null</code>."
    },
    {
      "question": "Explain the difference between a closure and a regular function.",
      "answer": "A regular function with no free variables (variables from an outer scope) behaves the same regardless of where it is called. A closure, by contrast, captures and retains access to variables from its defining scope. This means a closure's behavior depends not just on its arguments but also on the captured lexical state. In practice, all functions in JavaScript are closures because they always have access to the global scope -- but the term 'closure' usually refers to functions that close over non-global, non-parameter variables from an enclosing function scope."
    },
    {
      "question": "How does JavaScript handle closure creation under the hood (engine level)?",
      "answer": "When a function is parsed, the JavaScript engine creates a function object with an internal [[Environment]] slot that references the current lexical environment. When the inner function is later invoked, its execution context's outer environment reference is set to [[Environment]], forming the scope chain. Variables referenced in the inner function are allocated on the heap rather than the stack (a process called 'heap allocation' or 'closure allocation') so they persist after the outer function returns. Modern engines use optimization techniques like 'local variable allocation analysis' to determine which variables need to live on the heap and which can stay on the stack."
    },
    {
      "question": "What is a 'function factory' and how do closures enable it?",
      "answer": "A function factory is a function that returns a new function with specific behavior configured by the factory's arguments. Closures make this possible because the returned function retains access to the factory's arguments. <strong>Example:</strong><br/><br/><pre><code>function multiply(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\nconst double = multiply(2);\nconst triple = multiply(3);\nconsole.log(double(5)); // 10\nconsole.log(triple(5)); // 15\n</code></pre><br/><code>factor</code> is captured by each returned function via closure."
    },
    {
      "question": "How do closures work with async/await and promises?",
      "answer": "Closures are essential for preserving state in asynchronous code. A callback passed to <code>.then()</code> or defined inside an <code>async</code> function captures variables from its surrounding scope. <strong>Example:</strong><br/><br/><pre><code>function fetchUser(id) {\n  const baseUrl = 'https://api.example.com';\n  return fetch(`${baseUrl}/users/${id}`)\n    .then(res => res.json())\n    .then(data => {\n      console.log(`User ${id}:`, data); // `id` is captured via closure\n    });\n}\n</code></pre><br/>The <code>id</code> parameter and <code>baseUrl</code> are available inside the promise chain because each <code>.then</code> callback forms a closure over the <code>fetchUser</code> scope."
    },
    {
      "question": "What is the difference between a closure and a higher-order function?",
      "answer": "A <strong>higher-order function</strong> is a function that either takes a function as an argument or returns a function. A <strong>closure</strong> is a function that retains access to its lexical scope. The two concepts often overlap -- a function factory (a higher-order function) returns a closure. However, not all higher-order functions involve closures (e.g., <code>Array.prototype.map</code> is a higher-order function but the callback may not close over anything). And not all closures are created by higher-order functions -- closures can occur in nested function definitions even without explicit returning."
    },
    {
      "question": "How do closures behave with 'this' binding?",
      "answer": "Closures capture the <strong>lexical scope</strong> (variables), not the <strong>this</strong> binding. The value of <code>this</code> inside a closure depends on how the function is called, not where it is defined. This is a common source of bugs: <br/><br/><pre><code>const obj = {\n  name: 'MyObj',\n  logName: function() {\n    return function() {\n      console.log(this.name); // undefined (or global name)\n    };\n  }\n};\nobj.logName()();\n</code></pre><br/><strong>Fix:</strong> Use an arrow function (which captures <code>this</code> lexically), or capture <code>this</code> in a variable: <code>const self = this</code>."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 480\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrow\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#6c9fff\"/></marker><linearGradient id=\"boxGrad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#2a2f45\"/><stop offset=\"100%\" style=\"stop-color:#1a1d28\"/></linearGradient><linearGradient id=\"boxGrad2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#222639\"/><stop offset=\"100%\" style=\"stop-color:#1a1d28\"/></linearGradient></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"460\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><!-- Outer scope --><rect x=\"40\" y=\"40\" width=\"340\" height=\"180\" rx=\"8\" fill=\"url(#boxGrad1)\" stroke=\"#6c9fff\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><text x=\"210\" y=\"68\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold>outer() -- Execution Context (Lexical Environment)</text><!-- Variable in outer --><rect x=\"65\" y=\"86\" width=\"290\" height=\"36\" rx=\"4\" fill=\"#2a2f45\" stroke=\"var(--border)\"/><text x=\"75\" y=\"110\" fill=\"#e8eaed\" font-size=\"13\" font-family=\"monospace\">let x = 10;</text><!-- Inner function definition --><rect x=\"65\" y=\"140\" width=\"290\" height=\"60\" rx=\"4\" fill=\"rgba(108,159,255,0.06)\" stroke=\"#6c9fff\" stroke-width=\"1\"/><text x=\"75\" y=\"162\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">function inner(y) {</text><text x=\"85\" y=\"182\" fill=\"#98c379\" font-size=\"12\" font-family=\"monospace\">return x + y;</text><text x=\"75\" y=\"198\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">}</text><!-- Arrow: inner closes over x --><line x1=\"210\" y1=\"200\" x2=\"210\" y2=\"260\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"4\" marker-end=\"url(#arrow)\"/><text x=\"220\" y=\"240\" fill=\"#fbbf24\" font-size=\"11\">[[Environment]] -> outer's scope</text><!-- Closure after outer returns --><rect x=\"40\" y=\"265\" width=\"340\" height=\"100\" rx=\"8\" fill=\"url(#boxGrad2)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"293\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold>After outer() returns</text><text x=\"60\" y=\"320\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">const add5 = outer(5);</text><text x=\"60\" y=\"340\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">add5(3)  ->  8</text><text x=\"60\" y=\"358\" fill=\"#9aa0b0\" font-size=\"11\">inner still has x=5 via closure</text><!-- Right side: memory diagram --><rect x=\"420\" y=\"40\" width=\"260\" height=\"400\" rx=\"8\" fill=\"url(#boxGrad1)\" stroke=\"var(--border)\"/><text x=\"550\" y=\"68\" text-anchor=\"middle\" fill=\"#a78bfa\" font-size=\"13\" font-weight=\"bold\">Memory / Heap Retention</text><rect x=\"440\" y=\"86\" width=\"220\" height=\"60\" rx=\"4\" fill=\"#2a2f45\" stroke=\"var(--border)\"/><text x=\"450\" y=\"108\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">function outer()</text><text x=\"450\" y=\"128\" fill=\"#9aa0b0\" font-size=\"11\">Created -> executed -> popped off stack</text><line x1=\"550\" y1=\"146\" x2=\"550\" y2=\"170\" stroke=\"#6c9fff\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"440\" y=\"172\" width=\"220\" height=\"80\" rx=\"4\" fill=\"rgba(108,159,255,0.06)\" stroke=\"#6c9fff\" stroke-width=\"1\"/><text x=\"450\" y=\"194\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">Returned closure</text><text x=\"450\" y=\"214\" fill=\"#9aa0b0\" font-size=\"11\">inner() + [[Environment]]</text><text x=\"450\" y=\"234\" fill=\"#9aa0b0\" font-size=\"11\">-> keeps x alive on HEAP</text><line x1=\"550\" y1=\"252\" x2=\"550\" y2=\"276\" stroke=\"#fbbf24\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"440\" y=\"278\" width=\"220\" height=\"60\" rx=\"4\" fill=\"rgba(251,191,36,0.06)\" stroke=\"#fbbf24\" stroke-width=\"1\"/><text x=\"450\" y=\"300\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">Heap: x = 5</text><text x=\"450\" y=\"320\" fill=\"#9aa0b0\" font-size=\"11\">NOT garbage collected</text><line x1=\"550\" y1=\"338\" x2=\"550\" y2=\"362\" stroke=\"#34d399\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"440\" y=\"364\" width=\"220\" height=\"55\" rx=\"4\" fill=\"#2a2f45\" stroke=\"var(--border)\"/><text x=\"450\" y=\"386\" fill=\"#e8eaed\" font-size=\"12\" font-family=\"monospace\">add5 = reference to closure</text><text x=\"450\" y=\"406\" fill=\"#9aa0b0\" font-size=\"11\">x persists until add5 is GC'd</text><!-- Conclusion label --><rect x=\"100\" y=\"400\" width=\"220\" height=\"36\" rx=\"18\" fill=\"rgba(52,211,153,0.12)\" stroke=\"rgba(52,211,153,0.3)\"/><text x=\"210\" y=\"423\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\"> Closures keep variables alive on heap</text></svg><div class=\"diagram-caption\">Visualization of a closure: outer() executes, returns inner(), but inner retains access to x via [[Environment]]. Blue dashed box shows outer's scope; yellow section shows the closure persisting in memory.</div>",
  "codeExamples": [
    {
      "title": "Data Privacy via Closure (Module Pattern)",
      "useCase": "Encapsulation & Security",
      "code": "function createBankAccount(initialBalance) {\n  let balance = initialBalance; // private\n\n  return {\n    deposit(amount) {\n      if (amount > 0) balance += amount;\n      return balance;\n    },\n    withdraw(amount) {\n      if (amount > 0 && amount <= balance) {\n        balance -= amount;\n        return amount;\n      }\n      return 0;\n    },\n    getBalance() { return balance; }\n  };\n}\n\nconst account = createBankAccount(1000);\naccount.deposit(500);\nconsole.log(account.getBalance()); // 1500\nconsole.log(account.balance);      // undefined (private!)",
      "description": "The balance variable is encapsulated within the closure. No external code can directly modify it -- it can only be accessed via the returned methods. This is the foundation of data hiding in JavaScript."
    },
    {
      "title": "Function Factory: Configurable Multipliers",
      "useCase": "Code Reuse",
      "code": "function createMultiplier(factor) {\n  return (value) => value * factor;\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\nconst tax = createMultiplier(1.08);\n\nconsole.log(double(10));      // 20\nconsole.log(triple(10));      // 30\nconsole.log(tax(100));        // 108",
      "description": "Each returned arrow function closes over its own 'factor' variable. This demonstrates how closures enable function factories -- creating customized functions with preset behavior."
    },
    {
      "title": "Closures in Async Operations (Callback State Preservation)",
      "useCase": "Async State Management",
      "code": "function fetchWithRetry(url, maxRetries) {\n  let attempt = 0;\n\n  function tryFetch() {\n    attempt++;\n    return fetch(url)\n      .then(res => {\n        if (!res.ok && attempt < maxRetries) {\n          console.log(`Retry ${attempt}/${maxRetries}`);\n          return tryFetch(); // recursive call, keeps closure\n        }\n        return res;\n      })\n      .catch(() => {\n        if (attempt < maxRetries) return tryFetch();\n        throw new Error(`Failed after ${maxRetries} attempts`);\n      });\n  }\n\n  return tryFetch();\n}\n\nfetchWithRetry('https://api.example.com/data', 3)\n  .then(data => console.log('Success:', data))\n  .catch(err => console.error(err));",
      "description": "The 'attempt' variable is captured by the inner tryFetch function via closure. Each recursive call increments and checks the same 'attempt' variable across multiple invocations."
    },
    {
      "title": "Currying with Closures",
      "useCase": "Partial Application / FP",
      "code": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function(...nextArgs) {\n        return curried.apply(this, args.concat(nextArgs));\n      };\n    }\n  };\n}\n\nconst sum = (a, b, c) => a + b + c;\nconst curriedSum = curry(sum);\n\nconsole.log(curriedSum(1)(2)(3));       // 6\nconsole.log(curriedSum(1, 2)(3));       // 6\nconsole.log(curriedSum(1, 2, 3));       // 6",
      "description": "Each call to 'curried' returns a new closure that remembers the arguments collected so far. Once all arguments are collected (args.length >= fn.length), the original function is invoked."
    },
    {
      "title": "Closure-Based Memoization (Caching)",
      "useCase": "Performance Optimization",
      "code": "function memoize(fn) {\n  const cache = new Map(); // private cache via closure\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      console.log('Cache hit:', key);\n      return cache.get(key);\n    }\n    console.log('Cache miss:', key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst fibonacci = memoize(function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n});\n\nconsole.log(fibonacci(40)); // Computed fast via memoization",
      "description": "The 'cache' Map is private to the returned function via closure. The memoized fibonacci function reuses cached results, reducing time complexity from O(2^n) to O(n)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What will the following code log? const fns = []; for (var i = 0; i < 3; i++) { fns.push(() => console.log(i)); } fns.forEach(fn => fn());",
      "options": [
        "0, 1, 2",
        "3, 3, 3",
        "undefined, undefined, undefined",
        "1, 2, 3"
      ],
      "answer": 1,
      "explanation": "Using 'var' creates a single function-scoped binding for 'i'. All closures reference the same variable, which has value 3 after the loop ends."
    },
    {
      "question": "Which of the following correctly fixes the closure-in-loop problem?",
      "options": [
        "Replace 'var' with 'const' in the loop header",
        "Replace 'var' with 'let' in the loop header",
        "Use a regular function instead of an arrow function",
        "Declare 'i' outside the loop"
      ],
      "answer": 1,
      "explanation": "Using 'let' creates a new block-scoped binding for each iteration, so each closure captures a different 'i' value."
    },
    {
      "question": "In the module pattern, what makes the inner variables private?",
      "options": [
        "The 'private' keyword",
        "TypeScript interfaces",
        "Closures over the IIFE scope",
        "The '#' symbol before variable names"
      ],
      "answer": 2,
      "explanation": "The IIFE creates a new scope. Returned methods form closures over that scope, making the variables accessible only to those methods and not to external code."
    },
    {
      "question": "You have a large array that a closure references. When can it be garbage collected?",
      "options": [
        "Immediately after the outer function returns",
        "When the closure function itself is garbage collected",
        "When the array is set to null inside the closure",
        "After the next garbage collection cycle regardless"
      ],
      "answer": 1,
      "explanation": "The large array is kept alive as long as the closure exists and holds a reference to it. Only when the closure is no longer referenced can both be garbage collected."
    },
    {
      "question": "What does the following code return? function outer() { let x = 10; return function inner() { return x; }; } const fn = outer(); console.log(fn());",
      "options": [
        "undefined",
        "10",
        "null",
        "ReferenceError"
      ],
      "answer": 1,
      "explanation": "The inner function forms a closure over 'x'. Even though outer() has returned, inner() retains access to x via its [[Environment]] reference."
    },
    {
      "question": "Which statement best describes the relationship between closures and the execution context stack?",
      "options": [
        "Closed-over variables remain on the execution context stack",
        "Closed-over variables are moved from the stack to the heap",
        "The entire outer execution context remains on the stack",
        "Closures create a new stack frame"
      ],
      "answer": 1,
      "explanation": "When the engine detects that variables are referenced by inner functions, it allocates them on the heap instead of the stack so they persist after the outer function returns."
    },
    {
      "question": "What will be logged? const obj = { name: 'Alice', greet: function() { return () => this.name; } }; console.log(obj.greet()());",
      "options": [
        "undefined",
        "Alice",
        "'' (empty string)",
        "Window (global object)"
      ],
      "answer": 1,
      "explanation": "Arrow functions capture 'this' lexically from their enclosing scope. Here, 'this' refers to 'obj' because greet() is called as a method."
    },
    {
      "question": "A function that returns a new function with some arguments pre-filled is an example of:",
      "options": [
        "Recursion",
        "Closure + Partial Application",
        "Event Delegation",
        "Prototypal Inheritance"
      ],
      "answer": 1,
      "explanation": "The outer function's arguments are captured via closure by the returned function, enabling partial application or currying."
    },
    {
      "question": "Why does the following NOT create a closure? function add(a, b) { return a + b; }",
      "options": [
        "It uses parameters, not outer variables",
        "It does not return a function or use nested functions",
        "Both a and b",
        "It uses the 'function' keyword"
      ],
      "answer": 1,
      "explanation": "A closure requires an inner function that references variables from an outer function's scope. This is a simple function with no nesting."
    },
    {
      "question": "In React, closures are commonly used to:",
      "options": [
        "Style components",
        "Preserve values in useEffect callbacks and event handlers",
        "Create JSX elements",
        "Define CSS classes"
      ],
      "answer": 1,
      "explanation": "React hooks like useEffect and useCallback rely on closures to capture props, state, and other values at the time of render."
    }
  ]
};
