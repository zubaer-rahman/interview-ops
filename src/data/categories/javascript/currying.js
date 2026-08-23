export const currying = {
  "title": "Currying",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "<strong>Currying</strong> transforms a function that takes multiple arguments into a sequence of nested functions, each taking a <strong>single</strong> argument.",
    "Currying is a core concept in <strong>functional programming</strong> that enables <strong>partial application</strong>, <strong>function composition</strong>, and <strong>higher-order abstractions</strong>.",
    "A curried function returns a new function for each argument until all arguments are collected, at which point the original function is called.",
    "Currying is <strong>not</strong> the same as partial application — partial application pre-fills some arguments, while currying transforms the function's calling convention."
  ],
  "laymanDefinition": "Imagine you are ordering a custom pizza. Normally, you'd say 'I want a large pizza with cheese and pepperoni' all in one sentence. Currying is like saying 'I want a size' — you get a 'size chooser'. Then you say 'large' — now you get a 'topping chooser'. Then you say 'cheese' — you get a 'meat chooser'. Finally you say 'pepperoni' — and the pizza is made. Each step locks in one decision and returns a new machine that accepts the next decision. Currying turns a function that takes everything at once into a chain of functions that each take one thing.",
  "deepDive": [
    {
      "heading": "Currying vs Partial Application",
      "text": "These two concepts are often confused. Currying transforms a function with N arguments into N functions each with 1 argument. Partial application pre-fills some arguments of a function, returning a function that accepts the remaining arguments. Currying is a mathematical transformation; partial application is an operation on a function. In practice, currying enables partial application — when you supply the first argument to a curried function, you get a partially applied function back."
    },
    {
      "heading": "Manual Currying Implementation",
      "text": "A curried function can be implemented manually or via a curry utility. The manual approach for a 3-argument function: function f(a) { return function(b) { return function(c) { return a + b + c; }; }; }. The general curry utility checks if the accumulated arguments meet or exceed the original function's arity (fn.length). If yes, call the function. If no, return a new function that accepts the next argument(s) and recurses."
    },
    {
      "heading": "Currying in Functional Composition",
      "text": "Currying shines when combined with function composition. In a pipeline like 'processData -> validate -> format -> display', curried functions can be partially applied with configuration, then composed together. Libraries like Ramda and lodash/fp use currying as a fundamental primitive. For example, R.map(R.add(1)) creates a function that increments every element in an array — R.add(1) is a curried function partially applied with 1."
    },
    {
      "heading": "Arity and Currying",
      "text": "A function's arity is the number of parameters it expects (fn.length). For currying to work correctly, the curry utility needs to know the target arity. Some curry implementations (like lodash) allow currying functions with any arity and terminate when all arguments are collected. Others require specifying the arity explicitly. Variadic functions (with ...rest params) cannot be curried automatically because their length is 0."
    },
    {
      "heading": "Use Cases for Currying",
      "list": [
        "<strong>Configuration Functions:</strong> Create specialized functions from general ones (e.g., const fetchWithBase = curry(fetch)(baseUrl)).",
        "<strong>Event Handlers:</strong> Pre-configure event handlers with specific parameters.",
        "<strong>Functional Composition:</strong> Transform and compose data processing pipelines.",
        "<strong>Redux Selectors:</strong> Curried selectors enable parameterized state access.",
        "<strong>Validation:</strong> Create reusable validation chains with curried validators."
      ]
    }
  ],
  "interviewAnswer": "Currying is the transformation of a function that takes multiple arguments into a sequence of functions that each take a single argument. The curried function returns a new function for each argument until all arguments are provided, at which point the original function is invoked. For example, a function f(a, b, c) becomes f(a)(b)(c). Currying is distinct from partial application: currying changes the calling convention, while partial application pre-fills arguments. In JavaScript, currying is achieved through closures — each returned function captures the accumulated arguments. Currying enables powerful functional programming patterns like function composition, reusable configuration, and parameterized callbacks. Libraries like lodash/fp and Ramda provide curry utilities, or you can implement one manually using closures and fn.length.",
  "interviewQuestions": [
    {
      "question": "What is currying in JavaScript?",
      "answer": "Currying transforms a function that takes multiple arguments into a chain of functions that each take a single argument. Example: function add(a, b, c) { return a + b + c; } becomes function curriedAdd(a) { return function(b) { return function(c) { return a + b + c; }; }; }. Called as curriedAdd(1)(2)(3) // 6."
    },
    {
      "question": "What is the difference between currying and partial application?",
      "answer": "Currying transforms a multi-argument function into a sequence of single-argument functions. Partial application pre-fills some arguments of a function, returning a new function that accepts the remaining arguments. Currying is a transformation; partial application is an operation. Currying enables partial application naturally."
    },
    {
      "question": "How does a curry utility function work?",
      "answer": "A curry utility checks if the number of collected arguments (args.length) is >= the original function's arity (fn.length). If yes, it calls the function. If no, it returns a new function that accepts more arguments, concatenates them, and recursively checks again. This uses closures to accumulate arguments."
    },
    {
      "question": "Can variadic functions be curried?",
      "answer": "Variadic functions (with ...rest params) have fn.length of 0, so automatic curry utilities cannot determine their arity. You need to explicitly specify the arity or use a different approach. For example, lodash's curry(fn, arity) accepts an optional arity parameter."
    },
    {
      "question": "How does currying enable function composition?",
      "answer": "Currying allows you to partially apply functions to create single-argument functions that can be composed with pipe/compose: <code>const add1 = curry(add)(1);\nconst double = curry(multiply)(2);\nconst add1ThenDouble = pipe(add1, double);\nadd1ThenDouble(5); // 12</code> Each curried function returns a unary function suitable for composition."
    },
    {
      "question": "What is the relationship between closures and currying?",
      "answer": "Currying is implemented using closures. Each returned function closes over the previously collected arguments. When you call curriedAdd(1), it returns a function that has 'a' captured in its closure. When you call that function with (2), it returns a function with both 'a' and 'b' captured, and so on."
    },
    {
      "question": "How do you implement a simple curry function?",
      "answer": "<code>function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function(...nextArgs) {\n        return curried.apply(this, args.concat(nextArgs));\n      };\n    }\n  };\n}</code> This returns a new function that collects arguments until enough are provided."
    },
    {
      "question": "What is an example of currying in a real library?",
      "answer": "Lodash/fp and Ramda use currying extensively. For example, in Ramda: <code>const add1 = R.add(1); // curried, returns function\nconst double = R.multiply(2);\nconst result = R.pipe(add1, double)(5); // 12\nR.map(add1, [1, 2, 3]); // [2, 3, 4]\nR.map(add1)([1, 2, 3]); // same (curried)</code> In Redux, selectors can be curried: <code>const selectItems = (state) => state.items;\nconst selectItemById = (id) => (state) => state.items[id];</code>"
    },
    {
      "question": "What is the arity problem with currying?",
      "answer": "The arity (fn.length) may not match the intended number of curried arguments if the function uses default parameters or rest params. Default parameters reset fn.length to the index of the first default parameter. Rest params make fn.length 0. The solution is to explicitly pass the arity: curry(fn, arity) or use a wrapper function with explicit parameter count."
    },
    {
      "question": "Is currying useful in production JavaScript?",
      "answer": "Currying is less common in typical production JavaScript than in functional-first languages like Haskell. However, it appears in: 1) Functional programming libraries (lodash/fp, Ramda). 2) Redux selectors and middleware configurations. 3) React higher-order components and custom hooks. 4) Validation and configuration patterns. It's a powerful tool to have in your toolbox but not a daily necessity for most JavaScript developers."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrow\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#6c9fff\"/></marker><linearGradient id=\"g1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#2a2f45\"/><stop offset=\"100%\" style=\"stop-color:#1a1d28\"/></linearGradient></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"16\" font-weight=\"bold\">Currying Transformation</text><text x=\"350\" y=\"62\" text-anchor=\"middle\" fill=\"#888\" font-size=\"12\">f(a, b, c) → f(a)(b)(c)</text><!-- Normal call --><rect x=\"60\" y=\"80\" width=\"580\" height=\"50\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"350\" y=\"100\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">Normal: add(1, 2, 3) → returns 6 immediately</text><text x=\"350\" y=\"118\" text-anchor=\"middle\" fill=\"#aaa\" font-size=\"11\">All arguments provided at once, one call</text><line x1=\"350\" y1=\"130\" x2=\"350\" y2=\"150\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"60\" y=\"150\" width=\"580\" height=\"50\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"168\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\">Step 1: curriedAdd(1) → returns function(b) that has a=1 in closure</text><text x=\"350\" y=\"188\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">Curried: add(1)(2)(3)</text><line x1=\"350\" y1=\"200\" x2=\"350\" y2=\"215\" stroke=\"#98c379\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"60\" y=\"215\" width=\"580\" height=\"50\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"350\" y=\"235\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\">Step 2: curriedAdd(1)(2) → returns function(c) that has a=1, b=2 in closure</text><text x=\"350\" y=\"253\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">Each call returns a new function (closure)</text><line x1=\"350\" y1=\"265\" x2=\"350\" y2=\"280\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"60\" y=\"280\" width=\"580\" height=\"50\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"350\" y=\"300\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"11\">Step 3: curriedAdd(1)(2)(3) → all args collected, executes, returns 6</text><text x=\"350\" y=\"318\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">Final call executes the original function</text><text x=\"350\" y=\"370\" text-anchor=\"middle\" fill=\"#888\" font-size=\"11\">Each intermediate function captures previous arguments via closure until arity is satisfied</text></svg>",
  "codeExamples": [
    {
      "title": "Manual Currying",
      "useCase": "Understanding the Mechanics",
      "code": "// Uncurried version\nfunction add(a, b, c) {\n  return a + b + c;\n}\n\n// Manually curried version\nfunction curriedAdd(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nconsole.log(add(1, 2, 3));           // 6\nconsole.log(curriedAdd(1)(2)(3));    // 6\n\n// Partial application in action:\nconst add1 = curriedAdd(1);    // returns function(b) with a=1\nconst add1And2 = add1(2);      // returns function(c) with a=1, b=2\nconsole.log(add1And2(3));      // 6",
      "description": "The manually curried version uses three nested functions. Each level closes over its argument and returns the next function. The innermost function has all three arguments in scope."
    },
    {
      "title": "Generic Curry Utility",
      "useCase": "Reusable Currying Transform",
      "code": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return function(...nextArgs) {\n      return curried.apply(this, args.concat(nextArgs));\n    };\n  };\n}\n\nconst sum = (a, b, c) => a + b + c;\nconst curriedSum = curry(sum);\n\nconsole.log(curriedSum(1)(2)(3));       // 6\nconsole.log(curriedSum(1, 2)(3));       // 6\nconsole.log(curriedSum(1)(2, 3));       // 6\nconsole.log(curriedSum(1, 2, 3));       // 6\n\n// Also works for different arities:\nconst greet = (greeting, name) => `${greeting}, ${name}!`;\nconst curriedGreet = curry(greet);\nconst sayHello = curriedGreet('Hello');\nconsole.log(sayHello('World')); // 'Hello, World!'",
      "description": "A generic curry utility checks fn.length (arity) and recursively collects arguments via closure until enough are provided."
    },
    {
      "title": "Currying for API Configuration",
      "useCase": "Creating Reusable Configured Functions",
      "code": "const fetchWith = curry(\n  (baseUrl, endpoint, options) =>\n    fetch(`${baseUrl}${endpoint}`, options)\n      .then(res => res.json())\n);\n\n// Create a pre-configured API client\nconst api = fetchWith('https://api.example.com');\n\n// Get specific endpoints\nconst getUsers = api('/users');\nconst getPosts = api('/posts');\n\n// Use them\nconst users = await getUsers({ headers: { 'Auth': 'token' } });\nconst posts = await getPosts({ headers: { 'Auth': 'token' } });\n\n// Or pre-configure authentication too\nconst authenticatedApi = api.withAuth = \n  curry(fetchWith)('https://api.example.com')('/users');\n// Then: const users = await authenticatedApi({ headers: authHeaders });",
      "description": "Currying allows creating a pre-configured API client by partially applying the base URL. Each level of currying adds more specificity."
    },
    {
      "title": "Currying with Function Composition",
      "useCase": "Building Pipelines",
      "code": "// Utility functions\nconst add = curry((a, b) => a + b);\nconst multiply = curry((a, b) => a * b);\nconst map = curry((fn, arr) => arr.map(fn));\nconst filter = curry((fn, arr) => arr.filter(fn));\n\n// Pre-configure operations\nconst add1 = add(1);\nconst double = multiply(2);\nconst isEven = x => x % 2 === 0;\n\n// Compose pipeline\nconst processNumbers = pipe(\n  filter(isEven),\n  map(add1),\n  map(double)\n);\n\nconsole.log(processNumbers([1, 2, 3, 4, 5]));\n// filter even: [2, 4]\n// add1: [3, 5]\n// double: [6, 10]\n// Result: [6, 10]",
      "description": "Curried functions create single-argument functions suitable for composition. map(add1) returns a function that adds 1 to each element — perfect for pipe()."
    },
    {
      "title": "Currying with Placeholders (Advanced)",
      "useCase": "Flexible Argument Ordering",
      "code": "// Lodash-style curry with placeholder\nfunction curryWithPlaceholder(fn) {\n  const _ = curryWithPlaceholder._ = Symbol('placeholder');\n\n  return function curried(...args) {\n    const filled = args.filter(a => a !== _).length;\n    if (filled >= fn.length && args.length >= fn.length) {\n      // Replace placeholders with actual args from\n      // previous calls — simplified for clarity\n      return fn.apply(this, args);\n    }\n    return function(...nextArgs) {\n      const merged = args.map(a => a === _ && nextArgs.length ? nextArgs.shift() : a);\n      return curried.apply(this, merged.concat(nextArgs));\n    };\n  };\n}\n\n// Usage:\nconst _ = curryWithPlaceholder._;\nconst greet3 = (a, b, c) => `${a} ${b} ${c}`;\nconst curriedG = curryWithPlaceholder(greet3);\n\n// Skip the first argument, fill later\nconst withExclamation = curriedG(_, _, '!');\nconsole.log(withExclamation('Hello', 'World')); // 'Hello World !'\n// (Simplified — real placeholder curry is more complex)",
      "description": "Advanced currying with placeholders (like lodash's curry) allows skipping arguments to be filled later, providing even more flexibility in partial application."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is currying?",
      "options": [
        "Calling a function with all its arguments at once",
        "Transforming a multi-argument function into a sequence of single-argument functions",
        "Combining multiple functions into one",
        "Calling a function asynchronously"
      ],
      "answer": 1,
      "explanation": "Currying transforms f(a, b, c) into f(a)(b)(c) — a sequence of functions each taking one argument."
    },
    {
      "question": "What is the difference between currying and partial application?",
      "options": [
        "They are the same thing",
        "Currying transforms the calling convention; partial application pre-fills arguments",
        "Partial application returns a value; currying returns a function",
        "Currying works only with anonymous functions"
      ],
      "answer": 1,
      "explanation": "Currying changes f(a,b,c) to f(a)(b)(c). Partial application takes f(a,b,c) and creates g(b,c) = f(1,b,c). Currying enables partial application."
    },
    {
      "question": "What does curriedAdd(1)(2)(3) return if add = (a,b,c) => a + b + c?",
      "options": [
        "function(c)",
        "6",
        "1 + 2 + 3 as a string",
        "undefined"
      ],
      "answer": 1,
      "explanation": "After collecting all three arguments (1, 2, 3), the curried function executes the original sum function, returning 6."
    },
    {
      "question": "What is fn.length and why is it important for currying?",
      "options": [
        "It's the function name length",
        "It's the number of parameters (arity), used to know when all arguments are collected",
        "It's the function body length in characters",
        "It's the number of closures created"
      ],
      "answer": 1,
      "explanation": "fn.length returns the number of formal parameters. A curry utility uses this to determine when all arguments have been collected."
    },
    {
      "question": "How do closures enable currying?",
      "options": [
        "Closures make functions run faster",
        "Each returned function closes over previously collected arguments",
        "Closures replace the need for arguments",
        "Closures convert the function to arrow syntax"
      ],
      "answer": 1,
      "explanation": "Each nested function in a curried chain captures the arguments from outer calls via closure, accumulating them until all are present."
    },
    {
      "question": "What will the following log? const add = curry((a,b) => a + b); const add5 = add(5); console.log(add5(3));",
      "options": [
        "8",
        "function(b)",
        "5",
        "TypeError"
      ],
      "answer": 0,
      "explanation": "add(5) returns a curried function with a=5 captured via closure. add5(3) provides b=3, so the original function executes: 5 + 3 = 8."
    },
    {
      "question": "Why can't variadic functions with rest params be automatically curried?",
      "options": [
        "They throw errors when curried",
        "Their fn.length is 0, so the curry utility cannot determine arity",
        "Rest params cannot be passed through closures",
        "Variadic functions don't accept arguments"
      ],
      "answer": 1,
      "explanation": "Function.length reports 0 for rest parameters (...args). The curry utility doesn't know how many arguments to wait for."
    },
    {
      "question": "What is function composition in relation to currying?",
      "options": [
        "Composition is unrelated to currying",
        "Currying creates unary functions that can be easily composed with pipe()",
        "Composition replaces currying",
        "Composition is a type of currying"
      ],
      "answer": 1,
      "explanation": "Curried functions can be partially applied to create unary (single-argument) functions, which can then be composed into pipelines using compose() or pipe()."
    },
    {
      "question": "In manual currying, what does each nested function return?",
      "options": [
        "The final result",
        "Another function (except the innermost)",
        "An array of arguments",
        "undefined"
      ],
      "answer": 1,
      "explanation": "Each level of nesting returns a new function that accepts the next argument. Only the innermost function (when all args are collected) returns the actual result."
    },
    {
      "question": "Which JavaScript libraries are known for using currying?",
      "options": [
        "jQuery and React",
        "Lodash/fp and Ramda",
        "Express and Axios",
        "Moment.js and Lodash (main)"
      ],
      "answer": 1,
      "explanation": "Lodash/fp and Ramda are functional programming libraries that use currying as a fundamental design principle."
    }
  ]
};
