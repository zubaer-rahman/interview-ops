export const arrow_functions = {
  "title": "JavaScript Arrow Functions",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "<strong>Arrow functions</strong> (<code>=&gt;</code>) provide a shorter syntax for writing function expressions and lexically bind the <code>this</code> value.",
    "Syntax: <code>(params) =&gt; expression</code> (implicit return) or <code>(params) =&gt; { body }</code> (explicit return).",
    "Arrow functions do <strong>not</strong> have their own <code>this</code> — they inherit <code>this</code> from the <strong>surrounding lexical scope</strong>.",
    "Arrow functions are <strong>not</strong> constructors (cannot use <code>new</code>), have no <code>arguments</code> object, and cannot be used as generators."
  ],
  "laymanDefinition": "Arrow functions are like shorthand notes compared to full sentences. Instead of writing 'function(x) { return x * 2; }', you can write 'x => x * 2'. They're shorter and more direct. But the real superpower is that arrow functions don't have their own 'this' — they borrow 'this' from the surrounding code. This is like having a child who automatically uses their parent's last name instead of creating their own. This eliminates the classic 'this' confusion in callbacks and event handlers.",
  "deepDive": [
    {
      "heading": "Arrow Function Syntax Variants",
      "text": "Arrow functions have several syntax forms: (1) <code>param => expression</code> — single parameter, implicit return. (2) <code>(param1, param2) => expression</code> — multiple params, implicit return. (3) <code>() => expression</code> — no params, implicit return. (4) <code>(...) => { statements; return value; }</code> — block body, explicit return needed. (5) <code>() => ({ key: value })</code> — returning an object literal requires wrapping in parentheses."
    },
    {
      "heading": "Lexical this Binding — The Key Feature",
      "text": "Unlike regular functions (which get their own 'this' based on how they're called), arrow functions have no 'this' of their own. They capture 'this' from the enclosing lexical scope at definition time. This eliminates the need for <code>.bind(this)</code>, <code>var self = this</code>, or <code>that = this</code> patterns. This is the primary reason arrow functions were introduced and the main reason they're preferred for callbacks."
    },
    {
      "heading": "Arrow Functions vs Regular Functions",
      "list": [
        "<strong>this:</strong> Arrow — lexical (inherits from scope). Regular — dynamic (based on call site).",
        "<strong>Constructor:</strong> Arrow — cannot use 'new' (throws TypeError). Regular — can be used as constructor.",
        "<strong>arguments:</strong> Arrow — no arguments object. Regular — has arguments object.",
        "<strong>new.target:</strong> Arrow — inherits from scope. Regular — has its own.",
        "<strong>Generator:</strong> Arrow — cannot use yield. Regular — can be a generator.",
        "<strong>Prototype:</strong> Arrow — no prototype property. Regular — has prototype."
      ]
    },
    {
      "heading": "Implicit Return and Object Literals",
      "text": "When an arrow function has a single expression in the body (no {}), the expression is implicitly returned. To return an object literal, wrap it in parentheses: <code>() => ({ key: 'value' })</code>. Without parentheses, the engine interprets {} as a block body and returns undefined. Implicit return makes arrow functions ideal for concise transformations in methods like map, filter, and reduce."
    },
    {
      "heading": "When NOT to Use Arrow Functions",
      "text": "Avoid arrow functions when: (1) You need dynamic 'this' (e.g., object methods, event handlers that need the DOM element). (2) You need the arguments object. (3) You need a constructor function. (4) You need a generator function. (5) You need to add methods to a prototype. (6) You need recursion with a named function. For these cases, use regular function expressions or declarations."
    }
  ],
  "interviewAnswer": "Arrow functions provide concise syntax and lexical 'this' binding. They inherit 'this' from the enclosing scope, eliminating the need for .bind() or self = this patterns. Arrow functions cannot be used as constructors, have no arguments object, and cannot be generators. Use them for callbacks, array methods (map, filter, reduce), and any context where lexical 'this' is desired. Avoid them for object methods (where dynamic 'this' is needed), event handlers needing event.currentTarget, constructors, and prototype methods. Arrow functions also support implicit return for single-expression bodies.",
  "interviewQuestions": [
    {
      "question": "What is an arrow function?",
      "answer": "An arrow function is a concise syntax for function expressions using =>. It lexically binds 'this' (inherits from enclosing scope) and cannot be used as a constructor. Example: const add = (a, b) => a + b."
    },
    {
      "question": "How does 'this' work in arrow functions vs regular functions?",
      "answer": "Arrow functions have no 'this' of their own — they inherit 'this' from the enclosing lexical scope. Regular functions have dynamic 'this' based on how they're called (the call site)."
    },
    {
      "question": "Can arrow functions be used as constructors?",
      "answer": "No. Arrow functions do not have a [[Construct]] internal method. Calling them with 'new' throws a TypeError: 'x is not a constructor'."
    },
    {
      "question": "Do arrow functions have the arguments object?",
      "answer": "No. Arrow functions do not have their own arguments object. If you need the arguments object, use a regular function or rest parameters (...args)."
    },
    {
      "question": "How do you return an object literal from an arrow function?",
      "answer": "Wrap the object in parentheses: const getObj = () => ({ key: 'value' }). Without parentheses, the engine treats {} as a block body and returns undefined."
    },
    {
      "question": "What is implicit return in arrow functions?",
      "answer": "If the arrow function body is a single expression without {} braces, that expression is automatically returned. const double = x => x * 2; // returns x * 2"
    },
    {
      "question": "When should you NOT use an arrow function?",
      "answer": "Avoid arrows for: object methods (need dynamic this), event handlers needing the DOM element as this, constructors, prototype methods, generator functions, and when arguments object is needed."
    },
    {
      "question": "How do you write a multi-line arrow function?",
      "answer": "Use block body with {} and explicit return: const fn = (a, b) => { const result = a + b; return result; };"
    },
    {
      "question": "What is the syntax for an arrow function with no parameters?",
      "answer": "Use empty parentheses: const greet = () => 'Hello'. Or use an underscore: const greet = _ => 'Hello' (though this is less common)."
    },
    {
      "question": "Can arrow functions have default parameters?",
      "answer": "Yes: const greet = (name = 'Guest') => 'Hello ' + name. Arrow functions support all parameter features: defaults, rest, destructuring."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Arrow Functions — Syntax &amp; this Binding</text><rect x=\"40\" y=\"70\" width=\"300\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"190\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">Regular: function(a, b) { return a + b; }</text><text x=\"190\" y=\"112\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Own this, arguments, can be constructor</text><rect x=\"40\" y=\"140\" width=\"300\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"190\" y=\"163\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">Arrow: (a, b) =&gt; a + b</text><text x=\"190\" y=\"182\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Lexical this, no arguments, no new</text><rect x=\"380\" y=\"70\" width=\"280\" height=\"125\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"520\" y=\"93\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">Lexical this (key feature)</text><text x=\"520\" y=\"118\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">const obj = {</text><text x=\"520\" y=\"138\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">  fn: () =&gt; this  // inherits outer this</text><text x=\"520\" y=\"158\" text-anchor=\"middle\" fill=\"#d19a66\" font-size=\"10\">  fn2() { return this; }  // obj's this</text><text x=\"520\" y=\"178\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">}</text><text x=\"350\" y=\"280\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Prefer arrows for callbacks, avoid for methods/constructors</text></svg>",
  "codeExamples": [
    {
      "title": "Arrow Function Syntax Comparison",
      "useCase": "From regular function to arrow",
      "code": "// Regular function — full syntax\nconst doubleRegular = function(x) {\n  return x * 2;\n};\n\n// Arrow — block body (explicit return)\nconst doubleBlock = (x) => {\n  return x * 2;\n};\n\n// Arrow — concise body (implicit return)\nconst double = x => x * 2;\n\n// Multiple parameters\nconst add = (a, b) => a + b;\n\n// No parameters\nconst greet = () => 'Hello!';\n\n// Single parameter — parentheses optional\nconst square = x => x * x;\n\n// Returning an object literal\nconst makeUser = (name, age) => ({ name: name, age: age });\n// Without () around {}: returns undefined!\n\n// Block body with multiple statements\nconst process = (items) => {\n  const filtered = items.filter(x => x > 0);\n  const sum = filtered.reduce((a, b) => a + b, 0);\n  return sum / filtered.length;\n};\n\nconsole.log(double(5));       // 10\nconsole.log(makeUser('Alice', 30));\n// { name: 'Alice', age: 30 }",
      "description": "Arrow functions offer multiple syntax forms. Single-expression arrows use implicit return. Object literals must be wrapped in (). Block bodies need explicit return."
    },
    {
      "title": "Lexical this — The Killer Feature",
      "useCase": "Eliminating 'this' confusion in callbacks",
      "code": "function Timer() {\n  this.seconds = 0;\n\n  // Regular function — broken this\n  setInterval(function() {\n    this.seconds++;  // this is the timeout global/window, NOT Timer\n    // console.log(this.seconds); // NaN or undefined\n  }, 1000);\n}\n\nfunction TimerFixed() {\n  this.seconds = 0;\n  var self = this;  // old workaround\n\n  setInterval(function() {\n    self.seconds++;\n    console.log(self.seconds);\n  }, 1000);\n}\n\nfunction TimerArrow() {\n  this.seconds = 0;\n\n  // Arrow — inherits this from TimerArrow scope\n  setInterval(() => {\n    this.seconds++;  // this is TimerArrow instance\n    console.log(this.seconds);\n  }, 1000);\n}\n\n// const t = new TimerArrow(); // Logs: 1, 2, 3, ...\n\n// Same with event handlers:\nclass Button {\n  constructor(label) {\n    this.label = label;\n  }\n\n  // Arrow method — this is always the instance\n  handleClick = () => {\n    console.log(this.label + ' clicked');\n  }\n\n  // Regular method — loses this in callbacks\n  handleBadClick() {\n    console.log(this.label + ' clicked');  // this is undefined in strict mode\n  }\n}",
      "description": "Arrow functions inherit 'this' from the surrounding scope, making them ideal for callbacks, intervals, and event handlers where regular functions lose 'this'."
    },
    {
      "title": "Arrow Functions in Array Methods",
      "useCase": "Concise data transformations",
      "code": "const numbers = [1, 2, 3, 4, 5, 6];\n\n// map — transform each element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10, 12]\n\n// filter — keep elements that pass the test\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4, 6]\n\n// reduce — accumulate values\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log(sum); // 21\n\n// Chaining with arrows\nconst result = numbers\n  .filter(n => n > 2)\n  .map(n => n * 3)\n  .reduce((a, b) => a + b, 0);\nconsole.log(result); // (3+4+5+6)*3 = 54\n\n// sort with arrow\nconst sorted = [...numbers].sort((a, b) => b - a);\nconsole.log(sorted); // [6, 5, 4, 3, 2, 1]\n\n// every/some\nconst allPositive = numbers.every(n => n > 0); // true\nconst hasLarge = numbers.some(n => n > 10);    // false",
      "description": "Arrow functions make array method chains concise and readable. Their conciseness shines with map, filter, reduce, and other iteration methods."
    },
    {
      "title": "When Arrow Functions Fail — Object Methods",
      "useCase": "Understanding when NOT to use arrows",
      "code": "const user = {\n  name: 'Alice',\n  // Arrow method — WRONG: this is NOT user\n  greetArrow: () => {\n    return 'Hello, ' + this.name;  // this is the outer/window scope\n  },\n  // Regular method — CORRECT: this is user\n  greetRegular() {\n    return 'Hello, ' + this.name;\n  }\n};\n\nconsole.log(user.greetRegular()); // 'Hello, Alice'\nconsole.log(user.greetArrow());   // 'Hello, undefined' or 'Hello, '\n\n// Arrow in prototype — also wrong\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.greetArrow = () => {\n  return 'Hi, ' + this.name;  // this is NOT the instance\n};\nPerson.prototype.greetRegular = function() {\n  return 'Hi, ' + this.name;\n};\n\nconst p = new Person('Bob');\nconsole.log(p.greetRegular()); // 'Hi, Bob'\nconsole.log(p.greetArrow());   // 'Hi, undefined'\n\n// Arrow for event handler (DOM element this)\nconst button = document.querySelector('button');\nbutton.addEventListener('click', function() {\n  console.log(this); // the button element\n});\nbutton.addEventListener('click', () => {\n  console.log(this); // window/outer scope, NOT the button\n});",
      "description": "Arrow functions inherit 'this' lexically, which makes them unsuitable for object methods, prototype methods, and event handlers that need the DOM element as 'this'."
    },
    {
      "title": "Arrow Functions: No arguments, No new",
      "useCase": "Understanding limitations",
      "code": "// No arguments object:\nfunction regular() {\n  console.log(arguments[0], arguments[1]);\n}\n\nconst arrow = () => {\n  // console.log(arguments); // ReferenceError: arguments not defined\n  // Use rest instead:\n};\n\nconst arrowWithRest = (...args) => {\n  console.log(args[0], args[1]);\n};\n\nregular(1, 2);     // 1 2\narrowWithRest(3, 4); // 3 4\n\n// Cannot be used as constructor:\nconst MyClass = () => {};\n// const obj = new MyClass(); // TypeError: MyClass is not a constructor\n\nfunction MyRegularClass() {\n  this.name = 'test';\n}\nconst regularObj = new MyRegularClass(); // Works\n\n// No prototype property:\nconsole.log(MyRegularClass.prototype); // {}\nconsole.log(MyClass.prototype);        // undefined\n\n// Cannot be a generator:\n// const generator =* () => { yield 1; }; // SyntaxError\n// Use regular function* instead:\nfunction* regularGenerator() {\n  yield 1;\n}\n\n// Rest parameters are the arrow-compatible alternative:\nconst logAll = (...args) => {\n  console.log('Arguments:', args);\n};\nlogAll(1, 2, 3, 4); // Arguments: [1, 2, 3, 4]",
      "description": "Arrow functions lack arguments (use rest), cannot be constructors (no [[Construct]]), have no prototype, and cannot be generators. Use regular functions for these cases."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the output? const fn = (a, b) => a + b; console.log(fn(3, 4));",
      "options": [
        "7",
        "34",
        "undefined",
        "NaN"
      ],
      "answer": 0,
      "explanation": "The arrow function implicitly returns a + b. fn(3, 4) returns 7."
    },
    {
      "question": "Do arrow functions have their own this?",
      "options": [
        "Yes, like regular functions",
        "No, they inherit this from the enclosing scope",
        "Only in strict mode",
        "Only in the global scope"
      ],
      "answer": 1,
      "explanation": "Arrow functions have no 'this' of their own. They capture 'this' from the surrounding lexical scope at definition time."
    },
    {
      "question": "Can arrow functions be used with 'new'?",
      "options": [
        "Yes",
        "No, they throw TypeError",
        "Only in ES6",
        "Only in strict mode"
      ],
      "answer": 1,
      "explanation": "Arrow functions cannot be used as constructors. They have no [[Construct]] internal method, so 'new' throws a TypeError."
    },
    {
      "question": "What is the correct way to return an object from an arrow function?",
      "options": [
        "() => {key: 'value'}",
        "() => ({key: 'value'})",
        "() => { return {key: 'value'} }",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "Both () => ({key: 'value'}) (implicit with parens) and () => { return {key: 'value'}; } (explicit) correctly return an object."
    },
    {
      "question": "Do arrow functions have the 'arguments' object?",
      "options": [
        "Yes, like regular functions",
        "No, use rest parameters instead",
        "Only in non-strict mode",
        "Only in Node.js"
      ],
      "answer": 1,
      "explanation": "Arrow functions do not have their own arguments object. Use rest parameters (...args) as the alternative."
    },
    {
      "question": "What will this log? const obj = { fn: () => this }; console.log(obj.fn() === window);",
      "options": [
        "false",
        "true (in browser)",
        "undefined",
        "TypeError"
      ],
      "answer": 1,
      "explanation": "Arrow functions inherit 'this' from the enclosing scope. obj's enclosing scope is the global scope, so this is window (in browsers)."
    },
    {
      "question": "Which of these is a valid arrow function syntax?",
      "options": [
        "const f = a, b => a + b",
        "const f = (a, b) => a + b",
        "const f = (a, b) => { a + b }",
        "const f = (a b) => a + b"
      ],
      "answer": 1,
      "explanation": "Multiple parameters must be wrapped in parentheses: (a, b) => a + b. Option C lacks the return keyword."
    },
    {
      "question": "How do you write an arrow function with a multi-line block body?",
      "options": [
        "() => line1; line2; line3",
        "() => { line1; line2; return line3; }",
        "() => (line1, line2, line3)",
        "() -> { line1; line2; line3 }"
      ],
      "answer": 1,
      "explanation": "Use {} for a block body with multiple statements. You must use explicit return if the function should return a value."
    },
    {
      "question": "What is the main advantage of arrow functions over regular functions?",
      "options": [
        "Faster execution",
        "Lexical this binding and concise syntax",
        "Access to arguments object",
        "Can be used as constructors"
      ],
      "answer": 1,
      "explanation": "The two main advantages are: (1) lexical this binding (no need for .bind() or self = this), and (2) concise syntax for callbacks."
    },
    {
      "question": "When should you NOT use an arrow function?",
      "options": [
        "In array callbacks (map, filter)",
        "For object methods that need dynamic this",
        "In setTimeout/ setInterval",
        "For simple transformations"
      ],
      "answer": 1,
      "explanation": "Avoid arrow functions for object methods when you need 'this' to refer to the object. Regular functions (or method syntax) are better for that."
    }
  ]
};
