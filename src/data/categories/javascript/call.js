export const call = {
  "title": "call()",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "<code>call()</code> is a method on all functions that calls the function with a specified <code>this</code> value and arguments provided <strong>individually</strong> (comma-separated).",
    "It allows you to <strong>borrow methods</strong> from one object and use them on another, and to explicitly control what <code>this</code> refers to.",
    "Syntax: <code>fn.call(thisArg, arg1, arg2, ...)</code> — the function is invoked <strong>immediately</strong>.",
    "<code>call()</code> is similar to <code>apply()</code>, but <code>apply()</code> takes arguments as an <strong>array</strong>."
  ],
  "laymanDefinition": "Imagine you have a friend who is really good at fixing bikes. You don't know how to fix your own bike. With call(), it's like saying, 'Hey, bike-fixer friend, come over to my house and use my tools to fix my bike.' Your friend (the function) has a skill (the code), but you're saying 'Do it on my bike (this object) instead of yours.' More practically, call() lets you take a method from one object and run it 'as if' it belonged to a different object, passing in the arguments one by one.",
  "deepDive": [
    {
      "heading": "How call() Works Internally",
      "text": "When fn.call(thisArg, ...args) is called, the JavaScript engine internally performs a [[Call]] operation on fn. The thisArg becomes the 'this' value for the function execution. The remaining arguments are spread into the function's parameter list. If thisArg is null or undefined, 'this' defaults to the global object (or undefined in strict mode). If thisArg is a primitive, it is wrapped in its object wrapper (e.g., a string becomes a String object)."
    },
    {
      "heading": "Method Borrowing Pattern",
      "text": "One of the most powerful uses of call() is borrowing methods. For example, array methods can be called on array-like objects (like the arguments object, NodeLists, or any object with length and numeric properties). Array.prototype.slice.call(arguments, 0) converts the arguments object to a real array. Similarly, Object.prototype.toString.call(obj) gives the reliable [[Class]] tag like '[object Array]'."
    },
    {
      "heading": "call() vs Direct Invocation",
      "text": "A direct function call fn() is equivalent to fn.call(undefined) in non-strict mode or fn.call(undefined) in strict mode (where 'this' is actually undefined). The key difference is that call() gives you explicit control over 'this'. Without call(), you rely on implicit binding (how the function is called), which may not always give you the desired 'this'."
    },
    {
      "heading": "Primitive thisArg Boxing",
      "text": "When you pass a primitive value as thisArg to call(), JavaScript wraps it in the corresponding object type. For example, call('hello') boxes the string to a String object. This is why you can borrow methods that expect object 'this' values even when you only have primitives. However, in strict mode, primitives are not boxed — they are passed as-is, which may cause TypeErrors."
    },
    {
      "heading": "call() for Inheritance (Super Calls)",
      "text": "In constructor functions, call() is used to call the parent constructor with the current instance's 'this'. This enables constructor stealing: Parent.call(this, ...args) inside Child constructor sets up Parent's properties on the Child instance. This pattern was common before ES6 classes, where super() handles this automatically."
    }
  ],
  "interviewAnswer": "call() is a function method that immediately invokes the function with a specified 'this' value and arguments passed individually. Its primary use cases are: 1) Explicitly setting 'this' — overriding the default binding rules. 2) Method borrowing — using methods from one object on another object (e.g., Array.prototype.slice.call(arguments)). 3) Constructor chaining — calling a parent constructor from a child constructor. 4) Reliable type checking — Object.prototype.toString.call(val) for precise type detection. The key characteristic of call() is that arguments are passed as a comma-separated list (unlike apply() which uses an array). It's essential to understand call() for mastering 'this' binding, method borrowing, and working with array-like objects.",
  "interviewQuestions": [
    {
      "question": "What does call() do?",
      "answer": "call() invokes a function with a given 'this' value and arguments passed individually (comma-separated). Syntax: fn.call(thisArg, arg1, arg2, ...). It's used for explicit 'this' binding and method borrowing."
    },
    {
      "question": "What is the difference between call() and apply()?",
      "answer": "Both call() and apply() invoke a function immediately with a specified 'this'. The difference is in how arguments are passed: call() takes arguments as a comma-separated list (fn.call(obj, 1, 2, 3)), while apply() takes arguments as an array (fn.apply(obj, [1, 2, 3]))."
    },
    {
      "question": "How do you convert the arguments object to an array using call()?",
      "answer": "Array.prototype.slice.call(arguments) converts the array-like 'arguments' object into a real array. The arguments object has numeric indices and a length property, so slice() can operate on it. In modern JavaScript, Array.from() or the spread operator (...arguments) are preferred."
    },
    {
      "question": "What is method borrowing? Give an example.",
      "answer": "Method borrowing is taking a method from one object and using it on another object with call(): <code>const arrLike = { 0: 'a', 1: 'b', length: 2 };\nconst arr = Array.prototype.slice.call(arrLike, 0);\nconsole.log(arr); // ['a', 'b']</code>"
    },
    {
      "question": "How do you use call() for constructor chaining?",
      "answer": "In constructor functions, call() is used to invoke a parent constructor on the current instance: <code>function Parent(name) { this.name = name; }\nfunction Child(name, age) {\n  Parent.call(this, name); // Parent runs on Child instance\n  this.age = age;\n}\nconst c = new Child('Alice', 10);\nconsole.log(c.name); // 'Alice'</code>"
    },
    {
      "question": "What happens if you pass null or undefined as the thisArg to call()?",
      "answer": "In non-strict mode, null or undefined causes 'this' to default to the global object (window in browsers). In strict mode, 'this' remains null or undefined — it is not coerced to the global object."
    },
    {
      "question": "How can call() be used for reliable type checking?",
      "answer": "Object.prototype.toString.call(value) returns a string like '[object Array]', '[object Object]', '[object Function]', etc. This is more reliable than typeof because it distinguishes between arrays, objects, and null. For example, Object.prototype.toString.call([]) returns '[object Array]'."
    },
    {
      "question": "Can call() be used on methods that don't exist on the target object?",
      "answer": "Yes. call() simply invokes a function with a specified 'this'. The function doesn't need to be a method of the target object. The target object is used as 'this' inside the function body. If the function accesses properties that don't exist on the target, they will be undefined."
    },
    {
      "question": "How does call() handle primitive thisArg values?",
      "answer": "In non-strict mode, primitive values (string, number, boolean) are 'boxed' — converted to their object wrappers (String, Number, Boolean). In strict mode, primitives are used as-is. For example, fn.call('hello') passes a String object as 'this' in non-strict mode, but the primitive string 'hello' in strict mode."
    },
    {
      "question": "What is the performance implication of using call()?",
      "answer": "call() has a small performance cost compared to direct invocation because it involves additional argument handling and 'this' resolution. However, modern JavaScript engines heavily optimize call() and apply() with inline caching. The performance difference is negligible for most applications. The main cost is when call() is used in hot loops or with very large argument lists."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrow\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#6c9fff\"/></marker><linearGradient id=\"g1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#2a2f45\"/><stop offset=\"100%\" style=\"stop-color:#1a1d28\"/></linearGradient></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"380\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"16\" font-weight=\"bold\">Function.prototype.call() — Flow</text><!-- Function box --><rect x=\"60\" y=\"65\" width=\"220\" height=\"80\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"170\" y=\"90\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">fn (any function)</text><text x=\"170\" y=\"110\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">fn.call(thisArg, a, b, c)</text><text x=\"170\" y=\"130\" text-anchor=\"middle\" fill=\"#aaa\" font-size=\"11\">Call the function...</text><!-- Arrow --><line x1=\"280\" y1=\"105\" x2=\"340\" y2=\"105\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"310\" y=\"95\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\">.call()</text><!-- Right side boxes --><rect x=\"340\" y=\"65\" width=\"300\" height=\"80\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"490\" y=\"85\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">Effect on Function Execution</text><text x=\"490\" y=\"108\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">1. this = thisArg (explicit)</text><text x=\"490\" y=\"128\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">2. params: (a, b, c) as given</text><line x1=\"350\" y1=\"155\" x2=\"350\" y2=\"185\" stroke=\"#98c379\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"80\" y=\"185\" width=\"560\" height=\"80\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"360\" y=\"207\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"13\" font-weight=\"bold\">Example: greet.call(alice, 'Hello', '!')</text><text x=\"360\" y=\"227\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">1. this inside greet = alice object</text><text x=\"360\" y=\"245\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">2. greet receives: greeting='Hello', punctuation='!'</text><line x1=\"360\" y1=\"265\" x2=\"360\" y2=\"295\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"295\" width=\"440\" height=\"50\" rx=\"25\" fill=\"url(#g1)\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"360\" y=\"320\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"14\">Immediate: function is invoked RIGHT NOW</text></svg>",
  "codeExamples": [
    {
      "title": "Basic call() Usage",
      "useCase": "Explicit this Binding",
      "code": "const alice = { name: 'Alice' };\nconst bob   = { name: 'Bob' };\n\nfunction greet(greeting) {\n  return `${greeting}, ${this.name}!`;\n}\n\nconsole.log(greet.call(alice, 'Hello')); // 'Hello, Alice!'\nconsole.log(greet.call(bob, 'Hi'));      // 'Hi, Bob!'\n\n// Without call() — this is undefined/global:\n// console.log(greet('Hello')); // 'Hello, undefined!' or error",
      "description": "call() lets us pass different 'this' values to the same function. The function can be used with any object that has a 'name' property."
    },
    {
      "title": "Method Borrowing: Array Methods on Array-Like Objects",
      "useCase": "Converting Array-Like to Array",
      "code": "function sum() {\n  // 'arguments' is array-like, not a real array\n  // We borrow slice from Array.prototype\n  const args = Array.prototype.slice.call(arguments, 0);\n  \n  // Now args is a real array with all array methods\n  return args.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\n\n// Also works with NodeLists and HTMLCollections:\n// const divs = document.querySelectorAll('div');\n// const divArray = Array.prototype.slice.call(divs);",
      "description": "call() enables method borrowing. Array.prototype methods work on any array-like object with length and numeric indices."
    },
    {
      "title": "Constructor Chaining with call()",
      "useCase": "Inheritance Pattern",
      "code": "function Animal(type) {\n  this.type = type;\n  this.isAlive = true;\n}\n\nfunction Dog(name, breed) {\n  // Call parent constructor on 'this' instance\n  Animal.call(this, 'mammal');\n  \n  this.name = name;\n  this.breed = breed;\n}\n\nconst dog = new Dog('Buddy', 'Golden Retriever');\nconsole.log(dog.type);    // 'mammal' (set by Animal.call)\nconsole.log(dog.name);    // 'Buddy'\nconsole.log(dog.isAlive); // true",
      "description": "Animal.call(this, 'mammal') runs the Animal constructor on the new Dog instance, setting up inherited properties. This is constructor stealing."
    },
    {
      "title": "Reliable Type Detection with toString.call()",
      "useCase": "Accurate Type Checking",
      "code": "function getType(value) {\n  return Object.prototype.toString.call(value).slice(8, -1);\n}\n\nconsole.log(getType([]));           // 'Array'\nconsole.log(getType({}));           // 'Object'\nconsole.log(getType('hello'));      // 'String'\nconsole.log(getType(42));           // 'Number'\nconsole.log(getType(null));         // 'Null'\nconsole.log(getType(undefined));    // 'Undefined'\nconsole.log(getType(function(){})); // 'Function'\nconsole.log(getType(new Date()));   // 'Date'\n\n// More reliable than typeof:\n// typeof []        → 'object' (wrong)\n// typeof null      → 'object' (wrong!)",
      "description": "Object.prototype.toString.call() returns precise type strings like '[object Array]'. This is more accurate than typeof for arrays, null, and other objects."
    },
    {
      "title": "call() with Math Methods on Custom Objects",
      "useCase": "Borrowing Built-in Methods",
      "code": "const customObj = {\n  0: 10,\n  1: 20,\n  2: 30,\n  length: 3\n};\n\n// Borrow Math.max on array-like object\nconst maxVal = Math.max.call(null, ...Array.from(customObj));\nconsole.log(maxVal); // 30\n\n// More practically: borrow .push on array-like\nconst arrLike = { 0: 'a', 1: 'b', length: 2 };\nArray.prototype.push.call(arrLike, 'c');\nconsole.log(arrLike); // { 0: 'a', 1: 'b', 2: 'c', length: 3 }\n\n// But prefer modern alternatives:\n// const realArr = Array.from(customObj);\n// const realMax = Math.max(...realArr);",
      "description": "call() works with any function, including built-ins. You can borrow methods like push or Math.max to work with custom objects. However, modern ES6+ features often provide cleaner alternatives."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does call() do?",
      "options": [
        "Creates a new function bound to this",
        "Immediately invokes a function with specified this and comma-separated args",
        "Calls a function asynchronously",
        "Returns a new array"
      ],
      "answer": 1,
      "explanation": "call() immediately invokes the function with a specified 'this' value and arguments passed as a comma-separated list."
    },
    {
      "question": "What is the difference between call() and apply()?",
      "options": [
        "call() is faster than apply()",
        "call() takes arguments individually, apply() takes an array",
        "call() does not accept thisArg, apply() does",
        "There is no difference"
      ],
      "answer": 1,
      "explanation": "Both invoke the function immediately. call() takes arguments as a comma-separated list (fn.call(obj, 1, 2)), while apply() takes them as an array (fn.apply(obj, [1, 2]))."
    },
    {
      "question": "What will the following log? function f() { console.log(this.x); } const obj = { x: 1 }; f.call(obj);",
      "options": [
        "undefined",
        "1",
        "window.x",
        "ReferenceError"
      ],
      "answer": 1,
      "explanation": "call() sets 'this' to obj inside the function, so this.x is obj.x which is 1."
    },
    {
      "question": "What does Array.prototype.slice.call(arguments) do?",
      "options": [
        "Returns the first argument",
        "Converts the arguments object to a real array",
        "Calls slice on each element",
        "Returns the arguments as a string"
      ],
      "answer": 1,
      "explanation": "This borrows Array.prototype.slice and calls it with the arguments object as 'this'. Since arguments is array-like, slice() converts it to a real array."
    },
    {
      "question": "What happens when you pass null as thisArg to call() in non-strict mode?",
      "options": [
        "It throws a TypeError",
        "'this' becomes the global object",
        "'this' becomes null",
        "The function is not called"
      ],
      "answer": 1,
      "explanation": "In non-strict mode, null or undefined as thisArg causes 'this' to default to the global object (window in browsers)."
    },
    {
      "question": "How do you use call() for constructor chaining?",
      "options": [
        "Child.call(Parent, args)",
        "Parent.call(this, args)",
        "Parent.call(Child, args)",
        "call(Parent, this, args)"
      ],
      "answer": 1,
      "explanation": "Parent.call(this, ...args) inside a Child constructor runs the Parent constructor on the current Child instance, setting up inherited properties on this."
    },
    {
      "question": "What is method borrowing?",
      "options": [
        "Copying all methods of an object",
        "Using a method from one object on another via call/apply",
        "Creating a new method on an object",
        "Deleting a method from an object"
      ],
      "answer": 1,
      "explanation": "Method borrowing is the pattern of taking a method from one object (like Array.prototype.slice) and calling it on another object (like arguments) using call() or apply()."
    },
    {
      "question": "What will this return? Object.prototype.toString.call([]);",
      "options": [
        "'[object Array]'",
        "'array'",
        "'[object Object]'",
        "'Array'"
      ],
      "answer": 0,
      "explanation": "Object.prototype.toString.call() returns a string in the format '[object Type]'. For arrays, it returns '[object Array]'."
    },
    {
      "question": "Does call() modify the original function?",
      "options": [
        "Yes, it permanently changes this",
        "No, the original function is unchanged",
        "Only in strict mode",
        "It depends on the arguments"
      ],
      "answer": 1,
      "explanation": "call() does not modify the function. It only controls the 'this' value for that particular invocation."
    },
    {
      "question": "How do you call a function with multiple arguments using call()?",
      "options": [
        "fn.call(obj, ...args)",
        "fn.call(obj, arg1, arg2, arg3)",
        "fn.call(obj, [arg1, arg2, arg3])",
        "Both A and B"
      ],
      "answer": 1,
      "explanation": "call() requires arguments to be passed individually (comma-separated). To pass an array of arguments, use apply() or the spread operator with call()."
    }
  ]
};
