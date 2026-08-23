export const scope = {
  "title": "Scope",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "<strong>Scope</strong> determines where variables and functions are accessible in your code.",
    "JavaScript has three main scopes: <strong>Global</strong>, <strong>Function</strong>, and <strong>Block</strong>.",
    "<code>var</code> is function-scoped; <code>let</code> and <code>const</code> are <strong>block-scoped</strong>.",
    "Inner scopes can access outer scope variables, but not vice versa — this is the <strong>scope chain</strong>."
  ],
  "laymanDefinition": "Scope is like the rooms in a house. The living room (global scope) is accessible from anywhere. The kitchen (function scope) is only accessible when you're in the kitchen. The pantry (block scope, with let/const) is even smaller — only accessible from inside the pantry. If you're in the living room, you can't see what's in the pantry. But if you're in the pantry, you can see everything in the living room and kitchen. 'var' is like having a sees-through wall between rooms — the pantry items can be seen from the kitchen. 'let' and 'const' have solid walls — what's in the pantry stays there.",
  "deepDive": [
    {
      "heading": "Global Scope",
      "text": "Variables declared outside any function or block are in the <strong>global scope</strong>. They are accessible from anywhere in the program. In browsers, the global object is <code>window</code>. <code>var</code> declarations at the global level create properties on the global object; <code>let</code> and <code>const</code> do not (but they are still globally scoped). Overusing global variables is considered bad practice because of namespace pollution and unintended mutation."
    },
    {
      "heading": "Function Scope",
      "text": "Variables declared with <code>var</code> inside a function are scoped to that entire function. They are accessible anywhere within the function, including inside nested blocks. This is why <code>var</code> is called 'function-scoped'. Each function creates its own scope. Parameters are also scoped to the function."
    },
    {
      "heading": "Block Scope (ES6+)",
      "text": "Variables declared with <code>let</code> and <code>const</code> are scoped to the nearest enclosing block <code>{}</code>. A block can be an if statement, for loop, while loop, or a standalone block. Block scoping is more predictable than function scoping and is a key improvement in ES6. Each iteration of a for loop with <code>let</code> creates a new binding."
    },
    {
      "heading": "The Scope Chain",
      "text": "When JavaScript resolves a variable, it starts in the current scope. If not found, it goes up one level to the outer scope. This continues until the global scope is reached. If the variable is not found in the global scope, a <code>ReferenceError</code> is thrown. The scope chain is determined by <strong>lexical scoping</strong> — where the code is written, not where it is executed."
    },
    {
      "heading": "Scope and Variable Shadowing",
      "text": "When a variable in an inner scope has the same name as a variable in an outer scope, the inner variable <strong>shadows</strong> the outer one. The outer variable is still accessible at its own scope level but is 'hidden' by the inner declaration within the inner scope."
    }
  ],
  "interviewAnswer": "Scope in JavaScript defines the region of code where a variable is accessible. There are three types: Global (accessible everywhere), Function (var declarations inside a function), and Block (let/const declarations inside { }). Inner scopes can access outer scope variables via the scope chain, but not vice versa. var is function-scoped; let and const are block-scoped. The scope chain is determined lexically — by where functions are written, not where they're called. Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope variable.",
  "interviewQuestions": [
    {
      "question": "What types of scope exist in JavaScript?",
      "answer": "JavaScript has three main scopes: <strong>Global scope</strong> (accessible everywhere, one per program), <strong>Function scope</strong> (var declarations inside a function are accessible throughout that function), and <strong>Block scope</strong> (let and const declarations inside { } are only accessible within that block). ES6 modules also create <strong>module scope</strong>."
    },
    {
      "question": "What is the difference between function scope and block scope?",
      "answer": "<strong>Function scope (var):</strong> Variables are accessible anywhere within the enclosing function, regardless of block boundaries. <strong>Block scope (let/const):</strong> Variables are only accessible within the enclosing { } block. Example: <code>if (true) { var x = 1; let y = 2; } console.log(x); // 1 (accessible) console.log(y); // ReferenceError (block-scoped)</code>"
    },
    {
      "question": "What is variable shadowing?",
      "answer": "Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable 'shadows' (hides) the outer one within its scope. Example: <code>let x = 'outer'; function foo() { let x = 'inner'; console.log(x); } foo(); // 'inner' console.log(x); // 'outer'</code>"
    },
    {
      "question": "What is the scope chain?",
      "answer": "The scope chain is the hierarchy of nested scopes that JavaScript traverses when resolving a variable. Starting from the innermost scope, JavaScript looks for the variable in each enclosing scope until it finds it or reaches the global scope. If not found in global scope, a ReferenceError is thrown."
    },
    {
      "question": "Can you modify a global variable from inside a function?",
      "answer": "Yes, you can read and write global variables from inside a function (unless shadowed). However, if you declare a variable with the same name inside the function, it shadows the global. Without declaration (assignment to undeclared variable), you modify/create a global — but this is an error in strict mode."
    },
    {
      "question": "What is the difference between lexical scope and dynamic scope?",
      "answer": "JavaScript uses <strong>lexical (static) scope</strong>, which means that scope is determined by where functions are written in the source code. <strong>Dynamic scope</strong> would determine scope based on where functions are called. JavaScript's scope chain is fixed at parse/compile time and does not change at runtime. This is why closures work — inner functions always have access to their outer function's scope, regardless of where they are called."
    },
    {
      "question": "How does the 'for' loop scope work with var vs let?",
      "answer": "With <code>var</code>, there is one shared binding for the loop variable, accessible after the loop ends: <code>for (var i = 0; i < 3; i++) {} console.log(i); // 3</code>. With <code>let</code>, a new binding is created for each iteration: <code>for (let j = 0; j < 3; j++) {} console.log(j); // ReferenceError</code>. This is why closures in loops work correctly with let."
    },
    {
      "question": "What is the global object and how do scope rules apply to it?",
      "answer": "In browsers, the global object is <code>window</code>. <code>var</code> declarations at the top level create properties on <code>window</code>. <code>let</code> and <code>const</code> at the top level are globally scoped but do NOT create properties on <code>window</code>. In Node.js, the global object is <code>global</code>, and module-level variables are scoped to the module, not added to <code>global</code>."
    },
    {
      "question": "What happens when you assign to an undeclared variable?",
      "answer": "In non-strict mode, assigning to an undeclared variable creates a property on the global object (the variable becomes global). In strict mode (<code>'use strict'</code>), this throws a <code>ReferenceError</code>. Always use strict mode to catch accidental global creation."
    },
    {
      "question": "How does scope interact with closures?",
      "answer": "Closures are functions that retain access to their outer (enclosing) scope even after the outer function has returned. This works because the inner function captures a reference to the outer function's scope via the scope chain. The captured variables are kept alive on the heap (not the stack) for as long as the closure exists."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">JavaScript Scope Types</text><!-- Global Scope --><rect x=\"40\" y=\"65\" width=\"620\" height=\"100\" rx=\"8\" fill=\"rgba(108,159,255,0.06)\" stroke=\"#6c9fff\" stroke-width=\"1.5\" stroke-dasharray=\"6\"/><text x=\"60\" y=\"90\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">GLOBAL SCOPE</text><text x=\"60\" y=\"115\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">const appName = 'MyApp';  // accessible everywhere</text><text x=\"60\" y=\"135\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">var oldWay = 'global';    // window.oldWay (browser)</text><text x=\"60\" y=\"155\" fill=\"#9aa0b0\" font-size=\"10\">let and const at top level: globally scoped, NOT on window</text><!-- Function Scope --><rect x=\"60\" y=\"185\" width=\"580\" height=\"90\" rx=\"8\" fill=\"rgba(251,191,36,0.06)\" stroke=\"#fbbf24\" stroke-width=\"1.5\" stroke-dasharray=\"6\"/><text x=\"80\" y=\"210\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">FUNCTION SCOPE (var)</text><text x=\"80\" y=\"235\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">function myFunction() {</text><text x=\"100\" y=\"255\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">var functionScoped = 'accessible anywhere in function';</text><text x=\"80\" y=\"270\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">}</text><!-- Block Scope --><rect x=\"80\" y=\"295\" width=\"540\" height=\"90\" rx=\"8\" fill=\"rgba(52,211,153,0.06)\" stroke=\"#34d399\" stroke-width=\"1.5\" stroke-dasharray=\"6\"/><text x=\"100\" y=\"320\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">BLOCK SCOPE (let/const)</text><text x=\"100\" y=\"345\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">if (condition) {</text><text x=\"120\" y=\"365\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">let blockScoped = 'only accessible inside this block';</text><text x=\"100\" y=\"380\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">}</text></svg>",
  "codeExamples": [
    {
      "title": "Function Scope vs Block Scope",
      "useCase": "Understanding var vs let/const scoping",
      "code": "function scopeDemo() {\n  if (true) {\n    var functionScoped = 'accessible anywhere in function';\n    let blockScoped = 'only accessible in this block';\n    const alsoBlockScoped = 'same as let';\n  }\n\n  console.log(functionScoped);  // 'accessible anywhere in function'\n  // console.log(blockScoped);  // ReferenceError: blockScoped is not defined\n  // console.log(alsoBlockScoped); // ReferenceError\n\n  // var 'leaks' out of the if block\n  // let/const stay contained within the block\n}\n\nscopeDemo();\n\n// At the global level:\n// console.log(functionScoped); // ReferenceError (function scope)\n\n// Key takeaway: let and const are BLOCK-scoped\n// var is FUNCTION-scoped",
      "description": "var declarations are scoped to the enclosing function, not the block. This means var 'leaks' out of if/for/while blocks. let and const are properly block-scoped and stay within { }."
    },
    {
      "title": "For Loop Scope: var vs let",
      "useCase": "Loop closures",
      "code": "// var: single binding for all iterations\nconst varCallbacks = [];\nfor (var i = 0; i < 3; i++) {\n  varCallbacks.push(() => console.log('var:', i));\n}\nvarCallbacks.forEach(cb => cb());\n// Output: var: 3, var: 3, var: 3\n\n// let: new binding per iteration\nconst letCallbacks = [];\nfor (let j = 0; j < 3; j++) {\n  letCallbacks.push(() => console.log('let:', j));\n}\nletCallbacks.forEach(cb => cb());\n// Output: let: 0, let: 1, let: 2\n\n// let effectively does:\n// { let j = 0; callbacks.push(() => j); }\n// { let j = 1; callbacks.push(() => j); }\n// { let j = 2; callbacks.push(() => j); }",
      "description": "var creates one function-scoped binding for the loop variable. let creates a new block-scoped binding for each iteration, which is why closures capture the correct value."
    },
    {
      "title": "Scope Chain: Variable Resolution",
      "useCase": "How JavaScript finds variables",
      "code": "const planet = 'Earth';  // Level 0: Global scope\n\nfunction outer() {\n  const galaxy = 'Milky Way';  // Level 1: outer's scope\n  \n  function inner() {\n    const solarSystem = 'Solar System';  // Level 2: inner's scope\n    \n    // Variable resolution starts at the innermost scope\n    console.log(solarSystem);  // Found in Level 2\n    console.log(galaxy);       // Not in Level 2, check Level 1 -> found\n    console.log(planet);       // Not in Level 2 or 1, check Level 0 -> found\n  }\n  \n  inner();\n}\n\nouter();\n\n// Scope chain for inner:\n// inner's scope -> outer's scope -> global scope\n// inner can access: solarSystem, galaxy, planet\n// outer can access: galaxy, planet\n// Global can access: planet only",
      "description": "JavaScript starts looking for a variable in the current scope and moves outward until it finds it or reaches the global scope. Inner scopes can access outer scopes, but not vice versa."
    },
    {
      "title": "Variable Shadowing",
      "useCase": "Same name, different scopes",
      "code": "let name = 'Global Alice';\n\nfunction shadowDemo() {\n  let name = 'Local Bob';  // Shadows the global 'name'\n  console.log(name);  // 'Local Bob' (inner scope wins)\n  \n  function deeplyNested() {\n    let name = 'Deep Charlie';  // Shadows both\n    console.log(name);  // 'Deep Charlie'\n  }\n  \n  deeplyNested();\n  console.log(name);  // 'Local Bob' (back to middle scope)\n}\n\nshadowDemo();\nconsole.log(name);  // 'Global Alice' (global unchanged)\n\n// Shadowing is not the same as mutation!\n// Each 'name' is a SEPARATE variable in its own scope.\n// The global 'name' was never modified.",
      "description": "Shadowing creates a new variable in the inner scope that hides the outer variable. The outer variable is not affected. Shadowing is different from reassignment (mutation)."
    },
    {
      "title": "IIFE for Isolated Scope (Pre-ES6 Pattern)",
      "useCase": "Creating private scope before block scoping",
      "code": "// Before ES6 block scoping, IIFEs were used to create private scopes\n\n// Global scope\nconst globalValue = 'I am global';\n\n// IIFE creates a new function scope\n(function() {\n  // This variable is scoped to the IIFE, not global\n  const privateValue = 'I am private to the IIFE';\n  var alsoPrivate = 'Also private (var in function scope)';\n  \n  console.log(globalValue);  // 'I am global' (accessible via scope chain)\n  console.log(privateValue); // 'I am private to the IIFE'\n})();\n\n// console.log(privateValue);  // ReferenceError\n// console.log(alsoPrivate);   // ReferenceError\n\n// Modern alternative: just use a block\n{\n  let modernPrivate = 'Block scoped!';\n  console.log(modernPrivate); // 'Block scoped!'\n}\n// console.log(modernPrivate); // ReferenceError",
      "description": "Before let/const block scoping, IIFEs (Immediately Invoked Function Expressions) were the standard way to create private scopes. Modern JavaScript can use bare blocks { } with let/const instead."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What will this log? if (true) { var x = 10; let y = 20; } console.log(x); console.log(y);",
      "options": [
        "10, 20",
        "10, ReferenceError",
        "ReferenceError, ReferenceError",
        "undefined, undefined"
      ],
      "answer": 1,
      "explanation": "x is function-scoped (var), accessible outside the block. y is block-scoped (let), not accessible outside the block. Output: 10, ReferenceError."
    },
    {
      "question": "What is variable shadowing?",
      "options": [
        "A variable being deleted",
        "An inner scope variable hiding an outer scope variable with the same name",
        "Variables with no scope",
        "A variable being accessible from everywhere"
      ],
      "answer": 1,
      "explanation": "Shadowing occurs when an inner scope declares a variable with the same name as an outer scope variable. The inner variable 'shadows' the outer one within its scope."
    },
    {
      "question": "Which keyword creates block-scoped variables?",
      "options": [
        "var",
        "let and const",
        "function",
        "All of the above"
      ],
      "answer": 1,
      "explanation": "Only let and const create block-scoped variables. var creates function-scoped variables. function creates function-scoped declarations (fully hoisted)."
    },
    {
      "question": "What will this log? for (var i = 0; i < 3; i++) {} console.log(i);",
      "options": [
        "undefined",
        "ReferenceError",
        "3",
        "0"
      ],
      "answer": 2,
      "explanation": "var i is function-scoped. After the loop, i retains its last value (3). With let, it would throw a ReferenceError because let is block-scoped to the loop."
    },
    {
      "question": "What is the scope chain?",
      "options": [
        "A linked list of all variables in the program",
        "The hierarchy of nested scopes used for variable resolution",
        "A chain of function calls",
        "A prototype chain for objects"
      ],
      "answer": 1,
      "explanation": "The scope chain is the hierarchy of nested scopes that JavaScript traverses to resolve variable references, starting from the innermost scope."
    },
    {
      "question": "What happens when JavaScript cannot find a variable in any scope?",
      "options": [
        "It returns undefined",
        "It throws a ReferenceError",
        "It creates the variable globally",
        "It returns null"
      ],
      "answer": 1,
      "explanation": "If a variable is not found in any scope (including global), JavaScript throws a ReferenceError. Note: assignment to undeclared variables creates globals in non-strict mode."
    },
    {
      "question": "What is an IIFE and why was it used?",
      "options": [
        "A function that runs infinitely",
        "An Immediately Invoked Function Expression, used to create private scopes before ES6",
        "A function that is never called",
        "An inline function declaration"
      ],
      "answer": 1,
      "explanation": "IIFEs create a new function scope, isolating variables from the global scope. They were heavily used before ES6 introduced block scoping with let and const."
    },
    {
      "question": "In strict mode, what happens when you assign to an undeclared variable?",
      "options": [
        "It creates a global variable",
        "It throws a ReferenceError",
        "It returns undefined",
        "It ignores the assignment"
      ],
      "answer": 1,
      "explanation": "In strict mode, assignment to an undeclared variable throws a ReferenceError. In non-strict mode, it creates a property on the global object."
    },
    {
      "question": "What will this log? function test() { return innerVar; var innerVar = 'hoisted'; } console.log(test());",
      "options": [
        "'hoisted'",
        "undefined",
        "ReferenceError",
        "SyntaxError"
      ],
      "answer": 1,
      "explanation": "var innerVar is hoisted to the top of the function scope and initialized to undefined. The assignment (innerVar = 'hoisted') happens after the return statement. So the function returns undefined."
    },
    {
      "question": "Which of the following is NOT a valid scope in JavaScript?",
      "options": [
        "Global scope",
        "Function scope",
        "Block scope",
        "File scope"
      ],
      "answer": 3,
      "explanation": "JavaScript has Global, Function, Block, and Module scopes. There is no 'file scope' — files create either a global scope (script) or module scope (ES modules)."
    }
  ]
};
