export const execution_context = {
  "title": "Execution Context",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "An <strong>Execution Context</strong> is the environment where JavaScript code is evaluated and executed.",
    "There are three types: <strong>Global</strong> (default, one per program), <strong>Function</strong> (created per function call), and <strong>Eval</strong> (inside eval()).",
    "Each context has two phases: <strong>Creation Phase</strong> (hoisting, scope chain setup) and <strong>Execution Phase</strong> (code runs line by line).",
    "The <strong>Execution Context Stack</strong> (Call Stack) manages which context is currently running."
  ],
  "laymanDefinition": "Think of an execution context like a 'workspace' that JavaScript creates whenever it needs to run some code. It's like setting up a desk before you start working. First, you lay out all your tools (variables, functions) on the desk — that's the creation phase. Then you actually do the work — that's the execution phase. When you call a function, JavaScript creates a fresh workspace just for that function. When the function finishes, the workspace is cleared away. The global workspace is always there, like your main desk that never gets put away.",
  "deepDive": [
    {
      "heading": "The Three Types of Execution Contexts",
      "text": "1. <strong>Global Execution Context (GEC):</strong> Created when the JavaScript file first loads. There is only one GEC per program. In browsers, the global object is <code>window</code>. Variables declared with <code>var</code> at the top level become properties of the global object. <code>let</code> and <code>const</code> are also in the global scope but not attached to <code>window</code>.<br/><br/>2. <strong>Function Execution Context (FEC):</strong> Created whenever a function is invoked, regardless of how many times. Each call gets its own context with its own variable environment.<br/><br/>3. <strong>Eval Execution Context:</strong> Created inside <code>eval()</code> function. Rarely used and generally discouraged."
    },
    {
      "heading": "Creation Phase (Hoisting & Scope Setup)",
      "text": "Before executing a single line of code, the JavaScript engine performs the creation phase in this order:<br/><br/><strong>1. Create the Variable Object (VO):</strong> Sets up the scope chain, creates the argument object (for functions), and hoists declarations.<br/><strong>2. Create the Scope Chain:</strong> Links the current context's variable environment with its parent contexts.<br/><strong>3. Determine the value of <code>this</code>:</strong> The <code>this</code> binding is determined by how the function was called.<br/><br/>During this phase, function declarations are fully hoisted (available before declaration), while variable declarations are hoisted but initialized as <code>undefined</code> (<code>var</code>) or left in the Temporal Dead Zone (<code>let</code>/<code>const</code>)."
    },
    {
      "heading": "Execution Phase",
      "text": "After the creation phase, the engine executes the code line by line, assigning values to variables and executing function calls. When a function call is encountered, a new Function Execution Context is created and pushed onto the Execution Context Stack (Call Stack). The currently running context is always at the top of this stack. When a function returns, its context is popped from the stack and the previous context resumes execution."
    },
    {
      "heading": "The Execution Context Stack (Call Stack)",
      "text": "The Call Stack is a LIFO (Last In, First Out) data structure that tracks the execution of contexts. When a script starts, the Global Execution Context is pushed onto the stack. Each function invocation pushes a new context onto the stack. When the function completes, its context is popped off. The stack is never empty as long as the program is running because the Global Context remains at the bottom."
    }
  ],
  "interviewAnswer": "An execution context is an abstract environment where JavaScript code is evaluated and executed. There are three types: Global (one per program), Function (created per function call), and Eval. Each context goes through two phases: the Creation Phase, where the scope chain is built, variables and functions are hoisted, and 'this' is determined; and the Execution Phase, where code runs line by line. Execution contexts are managed by the Call Stack, which follows LIFO — pushing contexts on function calls and popping them on returns. Understanding execution contexts is fundamental to mastering hoisting, closures, scope, and the 'this' keyword.",
  "interviewQuestions": [
    {
      "question": "What is an execution context in JavaScript?",
      "answer": "An execution context is an abstract environment that contains the code being executed along with all the information needed to execute it — variables, functions, the scope chain, and the value of <code>this</code>. Every time JavaScript code runs, it does so within an execution context."
    },
    {
      "question": "What are the two phases of an execution context?",
      "answer": "<strong>Creation Phase:</strong> The engine creates the variable object, sets up the scope chain, determines the value of <code>this</code>, and hoists declarations. Variables are initialized (var gets <code>undefined</code>, let/const go into TDZ).<br/><br/><strong>Execution Phase:</strong> Code is executed line by line, values are assigned to variables, and functions are invoked."
    },
    {
      "question": "How does the Call Stack relate to execution contexts?",
      "answer": "The Call Stack is a LIFO data structure that manages execution contexts. When a script starts, the Global Execution Context is pushed onto the stack. Each function call pushes a new Function Execution Context onto the stack. When a function returns, its context is popped. The stack trace you see in errors is a snapshot of the Call Stack at the moment the error occurred."
    },
    {
      "question": "What is the difference between the Global Execution Context and a Function Execution Context?",
      "answer": "The GEC is created once when the script loads and persists until the program ends. It creates the global object (<code>window</code> in browsers) and <code>this</code> refers to that global object. A FEC is created fresh for each function invocation, has its own variable environment, arguments object (in non-arrow functions), and a new <code>this</code> binding. FECs are destroyed when the function returns."
    },
    {
      "question": "What happens in the creation phase for a function context?",
      "answer": "In the creation phase of a FEC: 1) An <strong>arguments</strong> object is created containing all passed arguments. 2) The <strong>scope chain</strong> is built by linking the current context's Variable Environment with the outer context's scope. 3) Variables and function declarations are <strong>hoisted</strong>. 4) The value of <code>this</code> is determined based on how the function was called."
    },
    {
      "question": "How many execution contexts can exist at one time?",
      "answer": "There is exactly one Global Execution Context that exists for the lifetime of the program. Multiple Function Execution Contexts can exist simultaneously on the Call Stack — one for each active (not yet returned) function call. The depth is limited by the browser's maximum Call Stack size (typically around 10,000-15,000 frames)."
    },
    {
      "question": "What is the difference between the Variable Environment and the Lexical Environment?",
      "answer": "In ES6+, each execution context has both a <strong>Variable Environment</strong> (for variables declared with <code>var</code>) and a <strong>Lexical Environment</strong> (for variables declared with <code>let</code> and <code>const</code>). The Variable Environment is hoisted with <code>undefined</code>, while the Lexical Environment enforces the Temporal Dead Zone. Both environments are part of the execution context and share the same outer scope reference."
    },
    {
      "question": "How does 'this' get determined in different execution contexts?",
      "answer": "In the Global Execution Context, <code>this</code> refers to the global object (<code>window</code> in browsers). In a Function Execution Context, <code>this</code> depends on how the function is called: as a method → the object; standalone → global (or <code>undefined</code> in strict mode); with <code>new</code> → the new instance; with <code>call/apply/bind</code> → the explicitly bound object. Arrow functions do not have their own <code>this</code> — they inherit it from the enclosing execution context."
    },
    {
      "question": "What is the relationship between execution context and lexical scope?",
      "answer": "An execution context's scope chain is determined by the <strong>lexical scope</strong> (where functions are defined in the source code), not where they are called. This is called static scoping. During the creation phase, the engine sets up the scope chain by linking the current context's variable environment to its parent context's variable environment. This chain is used during execution to resolve variable references."
    },
    {
      "question": "What error occurs when the Call Stack exceeds its limit?",
      "answer": "A <strong>Stack Overflow</strong> error (e.g., <code>Maximum call stack size exceeded</code>). This typically occurs with infinite recursion or very deep recursion. Each function call pushes a new context onto the stack, and when the stack exceeds its allocated memory, the browser throws this error to prevent crashing."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 480\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"460\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Execution Context Creation Phase</text><text x=\"350\" y=\"62\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Global Execution Context</text><!-- Global Context Box --><rect x=\"50\" y=\"80\" width=\"600\" height=\"180\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"350\" y=\"105\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">Creation Phase</text><!-- Var Env --><rect x=\"70\" y=\"120\" width=\"260\" height=\"120\" rx=\"5\" fill=\"#222639\" stroke=\"var(--border)\"/><text x=\"200\" y=\"142\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Variable Environment (var)</text><text x=\"85\" y=\"163\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">var x = undefined (hoisted)</text><text x=\"85\" y=\"183\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">function foo() { ... } (hoisted)</text><text x=\"85\" y=\"203\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">---> outer: null (global)</text><text x=\"85\" y=\"223\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">this -> window</text><!-- Lex Env --><rect x=\"370\" y=\"120\" width=\"260\" height=\"120\" rx=\"5\" fill=\"#222639\" stroke=\"var(--border)\"/><text x=\"500\" y=\"142\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">Lexical Environment (let/const)</text><text x=\"385\" y=\"163\" fill=\"#f87171\" font-size=\"10\" font-family=\"monospace\">let y = TDZ (temporal dead zone)</text><text x=\"385\" y=\"183\" fill=\"#f87171\" font-size=\"10\" font-family=\"monospace\">const z = TDZ (temporal dead zone)</text><text x=\"385\" y=\"203\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">---> outer: null (global)</text><text x=\"385\" y=\"223\" fill=\"#9aa0b0\" font-size=\"10\" font-family=\"monospace\">this -> window</text><!-- Arrow to Execution Phase --><line x1=\"350\" y1=\"265\" x2=\"350\" y2=\"290\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrow)\" stroke-dasharray=\"5\"/><text x=\"360\" y=\"282\" fill=\"#6c9fff\" font-size=\"10\">Execution Phase</text><!-- Execution Phase --><rect x=\"100\" y=\"295\" width=\"500\" height=\"60\" rx=\"8\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"350\" y=\"318\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">Execution Phase</text><text x=\"120\" y=\"342\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">x = 10;  y = 20;  z = 30;  foo();</text><!-- Call Stack --><rect x=\"150\" y=\"380\" width=\"400\" height=\"60\" rx=\"6\" fill=\"#222639\" stroke=\"#fbbf24\" stroke-width=\"1\"/><text x=\"350\" y=\"400\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Call Stack (LIFO)</text><text x=\"170\" y=\"425\" fill=\"#9aa0b0\" font-size=\"10\">[bottom] Global EC | Function EC (foo) | ... [top]</text></svg>",
  "codeExamples": [
    {
      "title": "Tracing Execution Context Creation Order",
      "useCase": "Understanding hoisting timing",
      "code": "console.log(a);  // undefined (var hoisted, not assigned yet)\nvar a = 10;\n\nconsole.log(b);  // ReferenceError: Cannot access 'b' before initialization\nlet b = 20;\n\nfoo();  // 'foo called' (function declaration fully hoisted)\nfunction foo() {\n  console.log('foo called');\n}\n\nbar();  // TypeError: bar is not a function (var hoisted as undefined)\nvar bar = function() {\n  console.log('bar called');\n};",
      "description": "This demonstrates the creation phase behavior: function declarations are fully hoisted, var is hoisted as undefined (accessible but not assigned), and let is in TDZ (inaccessible until declaration)."
    },
    {
      "title": "Function Call Creates New Execution Context",
      "useCase": "Context stack in action",
      "code": "function first() {\n  console.log('Inside first');\n  second();\n  console.log('Back in first');\n}\n\nfunction second() {\n  console.log('Inside second');\n  third();\n  console.log('Back in second');\n}\n\nfunction third() {\n  console.log('Inside third');\n}\n\nconsole.log('Global start');\nfirst();\nconsole.log('Global end');\n\n// Output order:\n// Global start\n// Inside first\n// Inside second\n// Inside third\n// Back in second\n// Back in first\n// Global end",
      "description": "Each function call pushes a new execution context onto the Call Stack. The stack unwinds as each function returns. The Global Context remains at the bottom throughout."
    },
    {
      "title": "The 'this' Binding in Different Contexts",
      "useCase": "Understanding context-dependent this",
      "code": "console.log(this);  // window (global context)\n\nfunction showThis() {\n  console.log(this);  // window (non-strict) or undefined (strict)\n}\n\nconst obj = {\n  name: 'MyObj',\n  showThis: function() {\n    console.log(this);  // obj (method call)\n  },\n  arrowShow: () => {\n    console.log(this);  // window (arrow inherits from global context)\n  }\n};\n\nobj.showThis();    // obj\nobj.arrowShow();   // window\n\nconst isolated = obj.showThis;\nisolated();        // window (lost context, standalone call)\n\nfunction Person(name) {\n  this.name = name;  // new instance (constructor call)\n}\nconst p = new Person('Alice');\nconsole.log(p.name);  // 'Alice'",
      "description": "The value of 'this' is determined by the execution context: global context → global object, method call → the object, constructor → new instance, standalone call → global (or undefined in strict mode). Arrow functions inherit 'this' from the enclosing context."
    },
    {
      "title": "Scope Chain Resolution During Execution",
      "useCase": "How variable lookup works across contexts",
      "code": "const globalVar = 'global';\n\nfunction outer() {\n  const outerVar = 'outer';\n\n  function inner() {\n    const innerVar = 'inner';\n    console.log(innerVar);  // 'inner' (own scope)\n    console.log(outerVar);  // 'outer' (one level up)\n    console.log(globalVar); // 'global' (two levels up)\n  }\n\n  inner();\n}\n\nouter();\n\n// Scope chain for inner():\n// [inner's scope] -> [outer's scope] -> [global scope]",
      "description": "During execution, if a variable is not found in the current execution context's variable environment, the engine traverses the scope chain (linked list of outer environments) until it finds the variable or reaches the global scope."
    },
    {
      "title": "Execution Context Creation with Parameters and Arguments",
      "useCase": "The arguments object in function contexts",
      "code": "function sum(a, b) {\n  console.log(arguments);\n  // Arguments object: { 0: 10, 1: 20, length: 2, callee: sum }\n  console.log(a, b);  // 10, 20\n  return a + b;\n}\n\nsum(10, 20);\n\nfunction dynamic() {\n  console.log(arguments[0]);  // first argument\n  console.log(arguments.length);  // number of arguments\n  \n  // Convert to array\n  const args = Array.from(arguments);\n  // or: const args = [...arguments];\n  console.log(args);\n}\n\ndynamic(1, 2, 3, 4);  // arguments = { 0: 1, 1: 2, 2: 3, 3: 4 }",
      "description": "Every Function Execution Context creates an arguments object (in non-arrow functions) containing all passed arguments. The arguments object is array-like but not a true Array. Modern code uses rest parameters instead: function dynamic(...args)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is created first when a JavaScript program starts?",
      "options": [
        "Function Execution Context",
        "Global Execution Context",
        "Eval Execution Context",
        "Module Execution Context"
      ],
      "answer": 1,
      "explanation": "The Global Execution Context is created first, before any code runs. It sets up the global object and 'this' binding."
    },
    {
      "question": "During the creation phase of a Function Execution Context, which of the following is NOT set up?",
      "options": [
        "Scope chain",
        "Variable assignments",
        "Arguments object",
        "this binding"
      ],
      "answer": 1,
      "explanation": "Variable assignments happen during the Execution Phase, not the Creation Phase. The Creation Phase only hoists declarations and initializes var to undefined."
    },
    {
      "question": "How many Function Execution Contexts can exist at the same time?",
      "options": [
        "One per function definition",
        "One per active (non-returned) function call",
        "Maximum 10",
        "Unlimited"
      ],
      "answer": 1,
      "explanation": "Each active function invocation creates its own FEC. Multiple can exist simultaneously on the Call Stack, limited only by the maximum stack depth."
    },
    {
      "question": "What happens to a Function Execution Context when the function returns?",
      "options": [
        "It stays in memory permanently",
        "It is popped from the Call Stack and becomes eligible for GC",
        "It moves to the heap",
        "It gets converted to a closure"
      ],
      "answer": 1,
      "explanation": "When a function returns, its execution context is popped from the Call Stack. If no closures reference its variables, it becomes eligible for garbage collection."
    },
    {
      "question": "In which phase does variable assignment (e.g., x = 10) occur?",
      "options": [
        "Creation Phase",
        "Execution Phase",
        "Parse Phase",
        "Compilation Phase"
      ],
      "answer": 1,
      "explanation": "Assignments occur during the Execution Phase. The Creation Phase only handles declarations and hoisting."
    },
    {
      "question": "What is contained in a Function Execution Context's Variable Environment?",
      "options": [
        "Only arguments",
        "var declarations and function declarations",
        "All local variables including let/const",
        "Global variables only"
      ],
      "answer": 1,
      "explanation": "The Variable Environment contains var-declared variables and function declarations. let and const are stored in the separate Lexical Environment."
    },
    {
      "question": "What is the 'outer environment reference' in an execution context?",
      "options": [
        "A reference to the global object",
        "A link to the parent execution context's environment",
        "A reference to the Call Stack",
        "A link to the function's prototype"
      ],
      "answer": 1,
      "explanation": "The outer environment reference links the current context's environment to the parent context's environment, forming the scope chain for variable resolution."
    },
    {
      "question": "When is the 'arguments' object created in a function context?",
      "options": [
        "During the Execution Phase",
        "During the Creation Phase",
        "Only when arguments are passed",
        "During the call to arguments.keys()"
      ],
      "answer": 1,
      "explanation": "The arguments object is created during the Creation Phase of a Function Execution Context, before any code executes."
    },
    {
      "question": "What happens when a function calls itself recursively without a base case?",
      "options": [
        "The program crashes immediately",
        "New execution contexts are pushed until the Call Stack overflows",
        "The function is optimized to a loop",
        "JavaScript silently stops recursion at 100 calls"
      ],
      "answer": 1,
      "explanation": "Each recursive call pushes a new FEC onto the Call Stack. Without a base case, this continues until the maximum stack size is exceeded, causing a stack overflow error."
    },
    {
      "question": "Which statement about the Global Execution Context is true?",
      "components": [
        "It is created once per function call",
        "It is destroyed when the last function returns",
        "var declarations become properties of the global object",
        "It does not have a scope chain"
      ],
      "answer": 1,
      "explanation": "At the global level, var declarations create properties on the global object (window in browsers). let and const are globally scoped but not attached to the global object."
    }
  ]
};
