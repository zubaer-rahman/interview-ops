export const bind = {
  "title": "bind()",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "<code>bind()</code> is a method on all functions that creates a <strong>new function</strong> with a fixed <code>this</code> value and optionally pre-filled arguments (<strong>partial application</strong>).",
    "Unlike <code>call()</code> and <code>apply()</code>, <code>bind()</code> does <strong>not</strong> execute the function immediately — it returns a new bound function that can be called later.",
    "Once a function is bound, its <code>this</code> value <strong>cannot</strong> be changed — even by <code>call()</code>, <code>apply()</code>, or another <code>bind()</code>.",
    "Syntax: <code>const boundFn = fn.bind(thisArg, arg1, arg2, ...)</code>"
  ],
  "laymanDefinition": "Imagine you have a remote control that can operate any TV, but you want one that only works with your living room TV. You'd 'bind' the remote to that specific TV so it always controls that one. bind() does the same for functions: it creates a new function with a fixed 'this' value so no matter where or how you call it, it always uses the object you specified. Additionally, you can pre-set some of the function's arguments, like pre-programming a few favorite channels on that remote, so that when you press the button, it already knows the channel without you having to enter it every time.",
  "deepDive": [
    {
      "heading": "How bind() Works Internally",
      "text": "When you call fn.bind(thisArg, ...args), JavaScript creates a new function object called a 'bound function' (also called an 'exotic function' in the spec). This bound function has internal slots: [[BoundTargetFunction]] (the original function), [[BoundThis]] (the fixed this value), and [[BoundArguments]] (the pre-filled args). When the bound function is called, JavaScript internally calls [[BoundTargetFunction]] with [[BoundThis]] as 'this' and concatenating [[BoundArguments]] with any additional arguments passed at call time."
    },
    {
      "heading": "Partial Application with bind()",
      "text": "bind() does not just bind 'this' — it also pre-fills arguments. This is called partial application. For example, function multiply(a, b) { return a * b; } — calling multiply.bind(null, 2) creates a new function where 'a' is permanently 2. Calling that new function with a single argument (e.g., double(5)) returns 10. This is a functional programming technique that reduces function arity."
    },
    {
      "heading": "bind() vs Arrow Functions for this Binding",
      "list": [
        "<strong>bind():</strong> Creates a new function with bound 'this'. The original function remains unmodified. Useful when you need to pass a method as a callback with a specific 'this'.",
        "<strong>Arrow functions:</strong> Do not have their own 'this'; they inherit from the enclosing scope. Lighter weight — no new function creation with internal slots.",
        "<strong>When to use bind():</strong> When you need partial application, or when you're working with function constructors/methods that must use a specific 'this'.",
        "<strong>When to use arrows:</strong> In most callback situations where you just need to preserve the outer 'this' (e.g., event handlers inside classes)."
      ]
    },
    {
      "heading": "Bind and Constructor Behavior",
      "text": "A bound function can be used with the 'new' keyword. When a bound function is called with 'new', the behavior is special: the [[BoundThis]] is ignored, and 'this' is set to the newly created instance (as usual with 'new'). However, the [[BoundArguments]] are still pre-pended to any arguments passed to the constructor. This means you can create 'partial' constructors."
    },
    {
      "heading": "Use Cases for bind()",
      "text": "Common use cases include: 1) Fixing 'this' in event handlers (react class components, DOM listeners). 2) Creating function factories with preset arguments. 3) Borrowing methods from other objects with a permanent 'this'. 4) setTimeout/setInterval callbacks that need a specific context. 5) Currying and partial application in functional programming patterns."
    }
  ],
  "interviewAnswer": "bind() is a function method that returns a new function with a permanently bound 'this' value and optionally pre-filled arguments. Unlike call() and apply(), bind() does not immediately invoke the function — it creates a new bound function. The bound function's 'this' cannot be changed later, even by call(), apply(), or another bind(). This makes bind() essential for fixing 'this' in callbacks, event handlers, and asynchronous code. bind() also supports partial application, where you pre-fill some arguments to create a more specialized function. In ES6, arrow functions have largely replaced bind() for simple 'this' binding, but bind() remains valuable for partial application and when you need an actual callable function with a permanently bound context.",
  "interviewQuestions": [
    {
      "question": "What does bind() do in JavaScript?",
      "answer": "bind() creates a new function that, when called, has its 'this' keyword set to the provided value. It can also pre-fill arguments (partial application). The original function is not modified. Syntax: fn.bind(thisArg, ...args)"
    },
    {
      "question": "What is the difference between bind(), call(), and apply()?",
      "answer": "call() and apply() invoke the function immediately with the specified 'this'. bind() returns a new function with 'this' bound, without invoking it. call() takes arguments individually, apply() takes them as an array, and bind() returns a new function. Use bind() when you need a reusable callback with a fixed 'this'."
    },
    {
      "question": "Can you change the 'this' of a bound function?",
      "answer": "No. Once a function is bound with bind(), its 'this' is permanently fixed. Even calling call() or apply() on the bound function will not change it — those methods' first argument is ignored. Calling bind() again also does not change it."
    },
    {
      "question": "What is partial application with bind()?",
      "answer": "Partial application means pre-filling some of a function's arguments using bind(): <code>function add(a, b) { return a + b; }\nconst add5 = add.bind(null, 5);\nconsole.log(add5(3)); // 8\nconsole.log(add5(10)); // 15</code> The first argument (a) is permanently set to 5."
    },
    {
      "question": "When would you use bind() instead of an arrow function?",
      "answer": "Use bind() when: 1) You need partial application (pre-filling arguments). 2) You need to create a reusable bound function that can be passed around. 3) You're working with a codebase that doesn't support ES6. 4) You need the bound function to work with 'new' (arrow functions cannot be constructors). For simple 'this' preservation in callbacks, arrow functions are usually the better choice."
    },
    {
      "question": "How does bind() work with event handlers in DOM?",
      "answer": "In DOM event handlers, 'this' normally refers to the element that fired the event. If you want 'this' to be a different object (e.g., a class instance), you can use bind(): <code>element.addEventListener('click', this.handleClick.bind(this));</code> This ensures that inside handleClick, 'this' refers to the class instance, not the DOM element."
    },
    {
      "question": "What happens when you call a bound function with 'new'?",
      "answer": "When a bound function is used with 'new', the [[BoundThis]] is ignored and 'this' becomes the new instance. But the [[BoundArguments]] (pre-filled args) are still prepended to the constructor arguments. This allows for partial application of constructors."
    },
    {
      "question": "Does bind() modify the original function?",
      "answer": "No, bind() does not modify the original function. It returns a new function (a bound function) that wraps the original. The original function remains unchanged and can still be called with different 'this' values."
    },
    {
      "question": "What is the internal implementation of bind()?",
      "answer": "The bound function has internal slots: [[BoundTargetFunction]] (original fn), [[BoundThis]] (fixed this value), and [[BoundArguments]] (pre-filled args). When called, it internally calls [[BoundTargetFunction]] with [[BoundThis]] and concatenates [[BoundArguments]] with the call-time arguments. This is defined in the ECMAScript specification as Function.prototype.bind."
    },
    {
      "question": "Can you bind multiple times? What happens?",
      "answer": "You can chain bind() calls, but only the first bind() matters for 'this'. Subsequent bind() calls create a new bound function whose target is the first bound function. The inner bound function's [[BoundThis]] is already fixed, so the outer bind's thisArg has no effect. However, partial application arguments from multiple binds are concatenated in order."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrowR\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#6c9fff\"/></marker><marker id=\"arrowG\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0, 10 3.5, 0 7\" fill=\"#98c379\"/></marker><linearGradient id=\"g1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#2a2f45\"/><stop offset=\"100%\" style=\"stop-color:#1a1d28\"/></linearGradient></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"16\" font-weight=\"bold\">How bind() Works</text><!-- Original function --><rect x=\"60\" y=\"65\" width=\"250\" height=\"90\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"185\" y=\"88\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">Original Function</text><text x=\"185\" y=\"108\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">function greet(greeting, name) {</text><text x=\"185\" y=\"125\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\">return greeting + ' ' + this.title + ' ' + name;</text><text x=\"185\" y=\"142\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">}</text><!-- Arrow --><line x1=\"310\" y1=\"110\" x2=\"370\" y2=\"110\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrowR)\"/><text x=\"340\" y=\"100\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\">.bind(obj, 'Hello')</text><!-- Bound function --><rect x=\"370\" y=\"65\" width=\"260\" height=\"90\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"500\" y=\"88\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"13\" font-weight=\"bold\">Bound Function (new fn)</text><text x=\"500\" y=\"108\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">[[BoundTargetFunction]] = greet</text><text x=\"500\" y=\"125\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\">[[BoundThis]] = obj</text><text x=\"500\" y=\"142\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"12\">[[BoundArguments]] = ['Hello']</text><!-- Side note --><rect x=\"100\" y=\"185\" width=\"500\" height=\"75\" rx=\"6\" fill=\"url(#g1)\" stroke=\"#aaa\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"350\" y=\"210\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"13\" font-weight=\"bold\">When called: boundGreet('Dr.', 'Smith')</text><text x=\"350\" y=\"230\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">1. this = [[BoundThis]] = obj (ignoring call-site)</text><text x=\"350\" y=\"248\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\">2. args = ['Hello'] + ['Dr.', 'Smith'] = ['Hello', 'Dr.', 'Smith']</text><line x1=\"350\" y1=\"260\" x2=\"350\" y2=\"285\" stroke=\"#98c379\" stroke-width=\"2\" marker-end=\"url(#arrowG)\"/><rect x=\"150\" y=\"285\" width=\"400\" height=\"50\" rx=\"25\" fill=\"url(#g1)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"310\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"14\">Result: 'Hello Dr. Smith'</text><text x=\"350\" y=\"360\" text-anchor=\"middle\" fill=\"#888\" font-size=\"12\">Note: Original greet function is NOT modified — a new function is created</text></svg>",
  "codeExamples": [
    {
      "title": "Basic this Binding with bind()",
      "useCase": "Fixing this in Callbacks",
      "code": "const user = {\n  name: 'Alice',\n  greet() { console.log(`Hello, ${this.name}`); }\n};\n\nconst unboundedGreet = user.greet;\nunboundedGreet(); // 'Hello, undefined' (wrong this)\n\nconst boundedGreet = user.greet.bind(user);\nboundedGreet(); // 'Hello, Alice' (correct)\n\n// Even when passed to setTimeout:\nsetTimeout(user.greet.bind(user), 100); // 'Hello, Alice'",
      "description": "bind() fixes 'this' so the function works correctly even when called standalone or as a callback."
    },
    {
      "title": "Partial Application with bind()",
      "useCase": "Pre-Filling Arguments",
      "code": "function multiply(a, b, c) {\n  return a * b * c;\n}\n\n// Pre-fill the first argument\nconst double = multiply.bind(null, 2);\nconsole.log(double(3, 4)); // 24 (2 * 3 * 4)\n\n// Pre-fill first two arguments\nconst tripleByFour = multiply.bind(null, 3, 4);\nconsole.log(tripleByFour(5)); // 60 (3 * 4 * 5)\n\n// Practical: tax calculator\nconst addTax = (rate, price) => price + (price * rate / 100);\nconst addSalesTax = addTax.bind(null, 8); // 8% tax\nconsole.log(addSalesTax(100)); // 108\nconsole.log(addSalesTax(200)); // 216",
      "description": "Partial application reduces a function's arity by pre-filling arguments. This creates more specialized functions from general ones."
    },
    {
      "title": "bind() in Event Handlers",
      "useCase": "DOM Event Handling",
      "code": "class Button {\n  constructor(label) {\n    this.label = label;\n    this.count = 0;\n    \n    // Without bind: 'this' would be the DOM element\n    const el = document.createElement('button');\n    el.textContent = label;\n    el.addEventListener('click', this.handleClick.bind(this));\n    document.body.appendChild(el);\n  }\n\n  handleClick() {\n    this.count++;\n    console.log(`${this.label} clicked ${this.count} times`);\n  }\n}\n\n// Arrow function alternative:\n// el.addEventListener('click', (e) => this.handleClick(e));",
      "description": "In DOM event handlers, 'this' normally refers to the element. bind(this) fixes it to refer to the class instance so we can access properties like this.label and this.count."
    },
    {
      "title": "Bound Functions Cannot Be Rebound",
      "useCase": "Permanent Binding",
      "code": "const obj1 = { x: 1 };\nconst obj2 = { x: 2 };\n\nfunction getX() { return this.x; }\n\nconst bound = getX.bind(obj1);\nconsole.log(bound());        // 1\n\n// These all still return 1:\nconsole.log(bound.call(obj2));   // 1 (obj2 ignored)\nconsole.log(bound.apply(obj2));  // 1 (obj2 ignored)\nconsole.log(bound.bind(obj2)()); // 1 (ignored)\n\n// Even Function.prototype.call on the bound function:\n// bound.call(obj2) is equivalent to:\n// (function() { return getX.apply(obj1, arguments); }).call(obj2)\n// The inner getX still uses obj1 as 'this'!",
      "description": "Once bound, always bound. No method can change the 'this' of a bound function. This is because bind() creates a new function with the target and this stored internally."
    },
    {
      "title": "bind() for setTimeout Callbacks",
      "useCase": "Async Context Preservation",
      "code": "class Logger {\n  constructor(prefix) {\n    this.prefix = prefix;\n    this.logCount = 0;\n  }\n\n  start() {\n    // Without bind: 'this' is the timeout global\n    setInterval(function() {\n      this.logCount++;\n      console.log(`${this.prefix}: ${this.logCount}`);\n    }.bind(this), 1000);\n    \n    // Alternative with arrow function:\n    // setInterval(() => {\n    //   this.logCount++;\n    //   console.log(`${this.prefix}: ${this.logCount}`);\n    // }, 1000);\n  }\n}\n\nconst logger = new Logger('LOG');\nlogger.start();\n// LOG: 1, LOG: 2, LOG: 3...",
      "description": "setTimeout and setInterval callbacks lose 'this'. bind() permanently sets 'this' to the class instance, making this.prefix and this.logCount accessible."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does bind() return?",
      "options": [
        "The result of calling the function",
        "undefined",
        "A new function with bound this",
        "The original function modified in-place"
      ],
      "answer": 2,
      "explanation": "bind() returns a new function with 'this' set to the provided value. It does not call the original function."
    },
    {
      "question": "What will the following log? const obj = { val: 1 }; function getVal() { return this.val; } const bound = getVal.bind(obj); console.log(bound.call({ val: 2 }));",
      "options": [
        "1",
        "2",
        "undefined",
        "TypeError"
      ],
      "answer": 0,
      "explanation": "bind() permanently fixes 'this' to obj. Calling .call() on the bound function ignores the provided thisArg, so this.val is still 1."
    },
    {
      "question": "What is partial application?",
      "options": [
        "Calling a function partially",
        "Pre-filling some arguments of a function to create a more specific function",
        "Binding 'this' to null",
        "Splitting a function into multiple parts"
      ],
      "answer": 1,
      "explanation": "Partial application is the technique of pre-filling some arguments of a function using bind(), creating a new function with fewer parameters."
    },
    {
      "question": "What will the following log? function add(a, b) { return a + b; } const add5 = add.bind(null, 5); console.log(add5(10));",
      "options": [
        "15",
        "5",
        "10",
        "undefined"
      ],
      "answer": 0,
      "explanation": "bind(null, 5) pre-fills the first argument (a) as 5. When add5(10) is called, b is 10, so the result is 5 + 10 = 15."
    },
    {
      "question": "Which is NOT a difference between bind() and an arrow function?",
      "options": [
        "bind() creates a new function, arrow functions use lexical scoping",
        "bind() can do partial application, arrow functions cannot",
        "Arrow functions can be used as constructors, bound functions cannot",
        "Both preserve 'this' from a specific context"
      ],
      "answer": 2,
      "explanation": "Arrow functions cannot be used as constructors (they throw TypeError if called with 'new'). Bound functions can be used with 'new' (though [[BoundThis]] is ignored)."
    },
    {
      "question": "What happens when you call bind() on a bound function?",
      "options": [
        "The 'this' is changed to the new value",
        "The 'this' from the first bind remains, but arguments from both binds are concatenated",
        "It throws an error",
        "The new bound function replaces the old one"
      ],
      "answer": 1,
      "explanation": "A bound function's 'this' is already fixed and cannot be changed. The second bind() creates a wrapper, but the inner bound function still uses its original [[BoundThis]]. Arguments from both binds are concatenated."
    },
    {
      "question": "In the expression fn.bind(obj, 1, 2), what does 'this' become inside the new function?",
      "options": [
        "The first argument (obj)",
        "The function fn",
        "undefined",
        "window"
      ],
      "answer": 0,
      "explanation": "The first argument to bind() is always the 'this' value for the new function. obj becomes 'this' inside the bound function."
    },
    {
      "question": "What is the internal [[BoundTargetFunction]]?",
      "options": [
        "The 'this' value of the bound function",
        "The original function that bind() was called on",
        "The new bound function itself",
        "The arguments array"
      ],
      "answer": 1,
      "explanation": "[[BoundTargetFunction]] is an internal slot that stores a reference to the original function that bind() was called on. It is called when the bound function is invoked."
    },
    {
      "question": "Can a bound function be garbage collected?",
      "options": [
        "No, bound functions are permanent",
        "Yes, when there are no references to it",
        "Only if the original function is also garbage collected",
        "Bound functions are never collected"
      ],
      "answer": 1,
      "explanation": "Bound functions are regular objects. Once all references to the bound function are gone, it becomes eligible for garbage collection. The original function can also be collected if nothing else references it."
    },
    {
      "question": "What will the following log? const obj = { x: 10 }; function fn() { console.log(this.x); } const b1 = fn.bind(obj); const b2 = b1.bind({ x: 20 }); b2();",
      "options": [
        "10",
        "20",
        "undefined",
        "TypeError"
      ],
      "answer": 0,
      "explanation": "b1 is bound to obj. b2 is a bound function wrapping b1. When b2 is called, it calls b1 with b1's [[BoundThis]] (obj). The 'this' of b1 cannot be overridden, so this.x is 10."
    }
  ]
};
