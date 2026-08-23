export const rest_operator = {
  "title": "JavaScript Rest Operator",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "The <strong>rest operator</strong> (<code>...</code>) collects multiple elements into a <strong>single array</strong> — used in function parameters and destructuring.",
    "Rest parameters (<code>function(...args)</code>) collect all remaining arguments into a real <strong>Array</strong> (unlike the array-like <code>arguments</code> object).",
    "In destructuring, rest collects remaining properties: <code>const [a, ...rest] = arr</code> or <code>const {x, ...rest} = obj</code>.",
    "The rest operator must be the <strong>last</strong> parameter/destructuring element — there can be only one rest element per pattern."
  ],
  "laymanDefinition": "Imagine you're packing for a trip. You have a large suitcase and you're putting items in it one by one. The rest operator is like saying 'take all these remaining items and put them in this suitcase.' When you have a function call like log('a', 'b', 'c', 'd') and the function says function log(...items), the rest operator collects all four arguments into an array called items. It's the opposite of the spread operator — spread takes things out, rest gathers things in.",
  "deepDive": [
    {
      "heading": "Rest Parameters — Variadic Functions",
      "text": "Rest parameters allow a function to accept any number of arguments as an array: <code>function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }</code>. Unlike the <code>arguments</code> object (which is array-like and lacks Array methods), rest parameters are a real Array — you can use map, filter, reduce, etc. directly."
    },
    {
      "heading": "Rest Parameters vs the arguments Object",
      "list": [
        "<strong>Rest parameters</strong>: Real Array, has all Array methods, can be named, only includes parameters after the rest syntax.",
        "<strong>arguments object</strong>: Array-like (not a real Array), has only .length and indexed access, includes ALL parameters including named ones, available only in non-arrow functions.",
        "Rest parameters are preferred in modern JavaScript — they're more flexible and work with arrow functions."
      ]
    },
    {
      "heading": "Rest in Array Destructuring",
      "text": "In array destructuring, rest collects remaining elements: <code>const [first, second, ...rest] = [1, 2, 3, 4, 5]</code> gives <code>first=1, second=2, rest=[3,4,5]</code>. Rest must be the last element. You can skip elements: <code>const [, , ...rest] = arr</code> skips the first two and collects the rest."
    },
    {
      "heading": "Rest in Object Destructuring",
      "text": "In object destructuring, rest collects remaining properties into a new object: <code>const { name, age, ...details } = user</code>. This is useful for picking specific properties while keeping the rest together. The rest object is a plain object with the remaining own enumerable properties."
    },
    {
      "heading": "Rest Operator Rules and Limitations",
      "list": [
        "Rest must be the <strong>last</strong> parameter or destructuring element.",
        "Only <strong>one</strong> rest element allowed per pattern.",
        "Rest parameters are <strong>not</strong> counted in <code>fn.length</code> (the arity excludes rest).",
        "Rest in object destructuring creates a new plain object with remaining own enumerable properties.",
        "Rest in array destructuring always produces an array (empty array if no remaining elements)."
      ]
    }
  ],
  "interviewAnswer": "The rest operator (...) collects multiple elements into a single array or object. In function parameters, it creates a real Array of remaining arguments — replacing the older arguments object. In array destructuring, it collects remaining elements into an array. In object destructuring, it collects remaining properties into a new object. Rest must always be the last element, and only one rest per pattern. Rest is the counterpart of spread: spread unpacks iterables, while rest gathers individual elements into a collection.",
  "interviewQuestions": [
    {
      "question": "What does the rest operator do in function parameters?",
      "answer": "It collects all remaining arguments into a real Array: function log(...items) { console.log(items); }. log(1, 2, 3) → items = [1, 2, 3]. Unlike arguments, it's a true Array."
    },
    {
      "question": "What is the difference between rest parameters and the arguments object?",
      "answer": "Rest parameters are a real Array with all Array methods. The arguments object is array-like (not a real Array) and lacks methods like map/filter/reduce. Rest parameters also only capture parameters after the rest syntax, while arguments captures all."
    },
    {
      "question": "Can you have multiple rest parameters in one function?",
      "answer": "No. Only one rest parameter is allowed, and it must be the last parameter: function(a, ...rest) is valid. function(...a, b) or function(...a, ...b) are invalid."
    },
    {
      "question": "How do you use rest in array destructuring?",
      "answer": "const [first, second, ...rest] = [1, 2, 3, 4, 5]. Here first=1, second=2, rest=[3, 4, 5]. Rest must be the last element and collects remaining elements into an array."
    },
    {
      "question": "How do you use rest in object destructuring?",
      "answer": "const { name, ...details } = { name: 'Alice', age: 30, city: 'NY' }. Here name='Alice', details={ age: 30, city: 'NY' }. Picks 'name' and collects the rest into a new object."
    },
    {
      "question": "What does fn.length return for a function with rest parameters?",
      "answer": "fn.length counts only the parameters before the rest parameter. The rest parameter itself is not counted. function(a, b, ...rest) has length 2."
    },
    {
      "question": "Does rest work with arrow functions?",
      "answer": "Yes. Arrow functions support rest parameters: const sum = (...nums) => nums.reduce((a, b) => a + b, 0). Arrow functions do NOT have the arguments object, making rest even more important."
    },
    {
      "question": "What happens if there are no remaining elements when using rest?",
      "answer": "In array destructuring, rest becomes an empty array []. In object destructuring, rest becomes an empty object {}."
    },
    {
      "question": "How do you use rest to omit properties from an object?",
      "answer": "const { password, ssn, ...safeUser } = user. This extracts password and ssn, and safeUser contains all remaining properties. Useful for removing sensitive data before sending to client."
    },
    {
      "question": "What is the difference between spread and rest?",
      "answer": "Both use ... but serve opposite purposes. Spread unpacks an iterable into individual elements (used in arrays, objects, function calls). Rest collects individual elements into an array/object (used in parameters, destructuring)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Rest Operator (...) Flow</text><rect x=\"60\" y=\"70\" width=\"260\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"190\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">function sum(...numbers)</text><text x=\"190\" y=\"112\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Rest collects all args into 'numbers' array</text><line x1=\"320\" y1=\"97\" x2=\"370\" y2=\"97\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"345\" y=\"87\" fill=\"#fbbf24\" font-size=\"11\">call</text><rect x=\"370\" y=\"65\" width=\"270\" height=\"65\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"505\" y=\"88\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">sum(1, 2, 3, 4, 5)</text><text x=\"505\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">numbers = [1, 2, 3, 4, 5] (real Array)</text><line x1=\"505\" y1=\"130\" x2=\"505\" y2=\"160\" stroke=\"#e5c07b\" stroke-width=\"2\"/><rect x=\"80\" y=\"160\" width=\"540\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"183\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\">Destructuring: const [first, ...rest] = [1, 2, 3, 4]</text><text x=\"350\" y=\"202\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">first = 1, rest = [2, 3, 4]</text><text x=\"350\" y=\"280\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Rest collects individual elements into an array/object</text></svg>",
  "codeExamples": [
    {
      "title": "Rest Parameters in Functions",
      "useCase": "Variadic function arguments",
      "code": "// Sum any number of arguments\nfunction sum(...numbers) {\n  return numbers.reduce(function(total, n) {\n    return total + n;\n  }, 0);\n}\n\nconsole.log(sum(1, 2));          // 3\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\nconsole.log(sum());              // 0 (empty array)\n\n// With named parameters before rest\nfunction introduce(greeting, ...names) {\n  return names.map(function(name) {\n    return greeting + ', ' + name + '!';\n  });\n}\n\nconsole.log(introduce('Hello', 'Alice', 'Bob', 'Charlie'));\n// ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']\n\n// Rest vs arguments comparison:\nfunction oldWay() {\n  // arguments is array-like — must convert to Array\n  var args = Array.prototype.slice.call(arguments);\n  return args.reduce(function(a, b) { return a + b; });\n}\n\nfunction newWay(...args) {\n  // args is a real Array already\n  return args.reduce(function(a, b) { return a + b; });\n}",
      "description": "Rest parameters collect all arguments into a real Array. Named parameters before rest capture specific arguments; rest captures the rest."
    },
    {
      "title": "Rest in Array Destructuring",
      "useCase": "Extracting first elements and collecting the rest",
      "code": "const numbers = [10, 20, 30, 40, 50];\n\n// Extract first two, collect the rest\nconst [first, second, ...rest] = numbers;\nconsole.log(first);  // 10\nconsole.log(second); // 20\nconsole.log(rest);   // [30, 40, 50]\n\n// Skip elements with rest\nconst [head, , , ...tail] = numbers;\nconsole.log(head); // 10\nconsole.log(tail); // [40, 50]\n\n// Empty rest (no remaining elements)\nconst [a, b, c, d, e, ...empty] = numbers;\nconsole.log(empty); // []\n\n// Practical: first and rest pattern\nfunction processItems([first, ...rest]) {\n  console.log('Processing first:', first);\n  console.log('Remaining:', rest.length, 'items');\n  return [first, ...rest.map(function(item) { return item * 2; })];\n}\n\nconsole.log(processItems([1, 2, 3]));\n// Processing first: 1\n// Remaining: 2 items\n// [1, 4, 6]",
      "description": "Rest in array destructuring collects remaining elements into a new array. Combined with destructuring, it enables elegant head/tail patterns."
    },
    {
      "title": "Rest in Object Destructuring (Picking Properties)",
      "useCase": "Omitting sensitive or unwanted properties",
      "code": "const user = {\n  id: 42,\n  name: 'Alice',\n  email: 'alice@example.com',\n  password: 'secret123',\n  ssn: '123-45-6789',\n  role: 'admin',\n  preferences: { theme: 'dark' }\n};\n\n// Extract specific properties, collect the rest\nconst { password, ssn, ...safeUser } = user;\n\nconsole.log(password);  // 'secret123'\nconsole.log(ssn);       // '123-45-6789'\nconsole.log(safeUser);\n// { id: 42, name: 'Alice', email: 'alice@example.com', role: 'admin', preferences: { theme: 'dark' } }\n\n// The rest object is a plain object with remaining properties\nconsole.log(Object.keys(safeUser)); // ['id', 'name', 'email', 'role', 'preferences']\n\n// Merging with defaults after picking\nconst { name, ...details } = user;\nconst defaultDetails = { role: 'user', active: true };\nconst merged = { ...defaultDetails, ...details };\nconsole.log(merged);\n// { role: 'admin', active: true, id: 42, email: ..., ssn: ..., ... }",
      "description": "Object rest destructuring is perfect for extracting specific properties and keeping the rest. Commonly used for sanitizing data."
    },
    {
      "title": "Rest with Arrow Functions and Callbacks",
      "useCase": "Flexible callback signatures",
      "code": "// Arrow function with rest\nconst multiply = (multiplier, ...numbers) =>\n  numbers.map(function(n) { return n * multiplier; });\n\nconsole.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]\nconsole.log(multiply(10, 5, 6));      // [50, 60]\n\n// Rest in array method callbacks\nconst results = [1, 2, 3, 4, 5].map(function(element, index, ...rest) {\n  console.log('Extra args:', rest); // rest is always empty for map\n  return element * 2;\n});\n\n// Practical: event handler with extra args\nfunction createLogger(prefix) {\n  return function(...messages) {\n    console.log('[' + prefix + ']', ...messages);\n  };\n}\n\nconst info = createLogger('INFO');\nconst error = createLogger('ERROR');\n\ninfo('Server started', 'on port 3000');\n// [INFO] Server started on port 3000\nerror('Connection failed', 'retrying...');\n// [ERROR] Connection failed retrying...",
      "description": "Rest parameters work with arrow functions. Combined with closure patterns, they enable flexible logging and callback utilities."
    },
    {
      "title": "Rest with Dynamic Argument Forwarding",
      "useCase": "Wrapping/decorating functions",
      "code": "function withLogging(fn) {\n  return function(...args) {\n    console.log('Calling:', fn.name || 'anonymous', 'with:', args);\n    const result = fn.apply(this, args);\n    console.log('Result:', result);\n    return result;\n  };\n}\n\nconst add = function(a, b) { return a + b; };\nconst loggedAdd = withLogging(add);\n\nconsole.log(loggedAdd(3, 4));\n// Calling: add with: [3, 4]\n// Result: 7\n// 7\n\n// Rest + spread for forwarding\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment(...args) {\n      count++;\n      console.log('Count:', count, 'Args:', args);\n      return count;\n    },\n    getCount() { return count; }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();         // Count: 1 Args: []\ncounter.increment('reset');  // Count: 2 Args: ['reset']\ncounter.increment(1, 2, 3);  // Count: 3 Args: [1, 2, 3]",
      "description": "Rest parameters enable clean function wrappers. Combined with spread, they allow perfect argument forwarding — a core pattern in middleware and decorators."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does function(...args) collect?",
      "options": [
        "The first argument only",
        "All arguments as a real Array",
        "No arguments",
        "The arguments as an object"
      ],
      "answer": 1,
      "explanation": "The rest parameter collects all remaining arguments into a real Array, unlike the array-like arguments object."
    },
    {
      "question": "What will this return? const [a, ...b] = [1, 2, 3]; console.log(b);",
      "options": [
        "[1, 2, 3]",
        "[2, 3]",
        "2",
        "[1]"
      ],
      "answer": 1,
      "explanation": "a gets 1 (the first element), and b collects the remaining elements: [2, 3]."
    },
    {
      "question": "Can there be multiple rest parameters in one function?",
      "options": [
        "Yes, as many as needed",
        "No, only one rest parameter is allowed",
        "Yes, but they must be adjacent",
        "Only if the function is an arrow function"
      ],
      "answer": 1,
      "explanation": "Only one rest parameter is allowed per function, and it must be the last parameter."
    },
    {
      "question": "What is the difference between rest and the arguments object?",
      "options": [
        "They are identical",
        "Rest is a real Array; arguments is array-like",
        "Arguments is an Array; rest is array-like",
        "Rest only works in arrow functions"
      ],
      "answer": 1,
      "explanation": "Rest parameters create a real Array with all Array methods. The arguments object is array-like (only length and indexed access)."
    },
    {
      "question": "What happens when you destructure an empty array with rest? const [...rest] = []",
      "options": [
        "rest is null",
        "rest is []",
        "rest is undefined",
        "TypeError"
      ],
      "answer": 1,
      "explanation": "If there are no remaining elements, rest becomes an empty array: []."
    },
    {
      "question": "What does { name, ...rest } = { name: 'A', age: 10, city: 'B' } produce?",
      "options": [
        "rest = { age: 10, city: 'B' }",
        "rest = ['age', 'city']",
        "rest = { name: 'A' }",
        "rest = 'A'"
      ],
      "answer": 0,
      "explanation": "name gets 'A', and rest collects the remaining properties into a new object: { age: 10, city: 'B' }."
    },
    {
      "question": "What does fn.length return for function(a, b, ...rest) {}?",
      "options": [
        "0",
        "2",
        "3",
        "Infinity"
      ],
      "answer": 1,
      "explanation": "fn.length counts parameters up to (but not including) the rest parameter. So function(a, b, ...rest) has length 2."
    },
    {
      "question": "Can rest parameters be used in arrow functions?",
      "options": [
        "No, arrow functions don't support rest",
        "Yes, arrow functions support rest parameters",
        "Only if the arrow function has a block body",
        "Only with a single parameter"
      ],
      "answer": 1,
      "explanation": "Arrow functions fully support rest parameters: const sum = (...nums) => nums.reduce((a, b) => a + b)."
    },
    {
      "question": "What is the output? const { x, ...y } = { x: 1, z: 3 }; console.log(y);",
      "options": [
        "{ x: 1, z: 3 }",
        "{ z: 3 }",
        "[z: 3]",
        "undefined"
      ],
      "answer": 1,
      "explanation": "x extracts the x property (1). y collects the remaining property z into a new object: { z: 3 }."
    },
    {
      "question": "What is a practical use of rest in object destructuring?",
      "options": [
        "Sorting objects",
        "Omitting sensitive properties from an object",
        "Increasing object size",
        "Freezing objects"
      ],
      "answer": 1,
      "explanation": "Rest in object destructuring is commonly used to extract specific properties (like password, ssn) while keeping the remaining safe properties together."
    }
  ]
};
