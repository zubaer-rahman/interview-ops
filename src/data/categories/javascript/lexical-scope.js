export const lexical_scope = {
  "title": "Lexical Scope",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "<strong>Lexical Scope</strong> (also called Static Scope) means that the scope of a variable is determined by its location in the source code — where the function is <strong>defined</strong>, not where it is <strong>called</strong>.",
    "JavaScript uses lexical scoping exclusively. This is why closures work predictably.",
    "The <strong>scope chain</strong> is fixed at parse time based on the nesting structure of functions in the code.",
    "Lexical scope contrasts with <strong>dynamic scope</strong>, where scope is determined by the call stack at runtime (JavaScript does NOT use dynamic scoping)."
  ],
  "laymanDefinition": "Lexical scope means 'where you write the code determines what you can access'. Imagine you're in a building. If you write a note inside Room 5, it can see things inside Room 5 and things in the building's lobby. It doesn't matter if you tape the note to a drone and fly it to Room 10 — the note can still only see Room 5 and the lobby because that's where it was written. In programming, this means a function has access to the variables where the function was defined, NOT where it's called. This is why closures work — they remember the place they were created.",
  "deepDive": [
    {
      "heading": "Lexical vs Dynamic Scoping",
      "text": "<strong>Lexical scoping:</strong> The scope chain is based on the nesting of functions in the source code. It is determined during parsing/compilation. Function A defined inside Function B will always have access to B's variables, regardless of where or how A is called.<br/><br/><strong>Dynamic scoping (not used by JavaScript):</strong> The scope chain is based on the call stack. A function has access to variables of whatever function called it. This is harder to reason about, and JavaScript explicitly does not use it."
    },
    {
      "heading": "How Lexical Scoping Powers Closures",
      "text": "Closures work BECAUSE of lexical scoping. When a function is defined inside another function, it captures a reference to the outer function's lexical environment. This reference is stored in the function's internal [[Environment]] slot. Even when the outer function returns, the inner function retains access to the outer variables because the lexical scope was set at definition time."
    },
    {
      "heading": "The Scope Chain Is Fixed at Parse Time",
      "text": "During the parsing phase, the JavaScript engine builds a scope tree based on the nesting of functions and blocks in the source code. This tree determines which variables are accessible from which scopes. When a function is called, its execution context's outer environment reference is set to its parent's lexical environment — which was determined during parsing, not during the call."
    },
    {
      "heading": "Common Misconception: 'this' and Lexical Scope",
      "text": "<code>this</code> binding is NOT part of lexical scope. <code>this</code> is determined by how a function is <strong>called</strong> (execution context), not where it is <strong>defined</strong>. This is a key distinction. Arrow functions are an exception — they capture <code>this</code> lexically from their enclosing scope, which is why they behave differently."
    }
  ],
  "interviewAnswer": "Lexical scope means that a function's access to variables is determined by where the function is defined in the source code, not where it is called. JavaScript uses lexical (static) scoping exclusively. When a function is defined inside another function, the inner function has access to the outer function's variables, and this relationship is fixed at parse time. This is the foundation of closures — a closure retains access to its lexical scope even when executed outside that scope. Lexical scope should not be confused with 'this' binding, which is determined dynamically by the call site.",
  "interviewQuestions": [
    {
      "question": "What is lexical scope?",
      "answer": "Lexical scope is the region of a program where a variable is accessible based on its location in the source code. The scope is determined at compile/parse time by the nesting structure of functions and blocks. A function defined inside another function has access to the outer function's variables — this relationship is fixed and does not change at runtime."
    },
    {
      "question": "How does lexical scope differ from dynamic scope?",
      "answer": "In <strong>lexical scoping</strong>, scope is determined by where functions are written (nested in source code). In <strong>dynamic scoping</strong>, scope is determined by the call stack at runtime. JavaScript uses lexical scoping. For example, if function A is defined inside function B, A always has access to B's variables (lexical). Dynamic scoping would give A access to whatever function called it, not where it was defined."
    },
    {
      "question": "How does lexical scope enable closures?",
      "answer": "Closures are a direct consequence of lexical scoping. When a function is defined, it captures its lexical environment (the variables in scope at that location). This capture is permanent. Even if the function is returned from its parent and executed elsewhere, it retains access to those captured variables. Without lexical scoping, closures would not be possible."
    },
    {
      "question": "Is 'this' lexically scoped?",
      "answer": "No. <code>this</code> is determined by how a function is called (the call site), not where it is defined. This is dynamic binding, not lexical scoping. Arrow functions are an exception — they do not have their own <code>this</code> and instead capture <code>this</code> from the enclosing lexical scope."
    },
    {
      "question": "What is the relationship between lexical scope and the scope chain?",
      "answer": "The scope chain is the runtime manifestation of lexical scoping. During parsing, the engine determines which scopes are nested inside which — this is the lexical structure. At runtime, each execution context has an 'outer' reference that points to its parent's variable environment, forming the scope chain. The chain is built precisely according to the lexical nesting of the code."
    },
    {
      "question": "What happens if you have nested functions with the same variable name?",
      "answer": "This is called <strong>variable shadowing</strong>. The innermost variable with that name is used. The outer variable with the same name is 'shadowed' (hidden) but still exists in its own scope. This follows lexical scoping rules — the scope chain is searched from innermost to outermost, and the first match is used."
    },
    {
      "question": "When is lexical scope determined in the JavaScript engine?",
      "answer": "Lexical scope is determined during the <strong>parsing/compilation phase</strong>, before any code executes. The engine builds a scope tree based on the nesting structure of the source code. This is why JavaScript is called a 'lexically scoped' language — the scope structure is visible from the code itself."
    },
    {
      "question": "Can lexical scope change at runtime?",
      "answer": "No. Lexical scope is fixed at parse time. The structure of which variables are accessible from which scopes cannot change. However, the <strong>values</strong> of those variables can change, and <strong>which</strong> variables exist in scope can be affected by conditionals or eval. But the scope chain hierarchy itself is immutable."
    },
    {
      "question": "How does eval() affect lexical scoping?",
      "answer": "In non-strict mode, <code>eval()</code> can introduce new variables into the enclosing lexical scope, modifying the scope at runtime. This is called 'scope pollution' and is why eval is discouraged. In strict mode, eval runs in its own scope and does not affect the enclosing lexical scope. This is a rare exception to lexical scoping's compile-time determination."
    },
    {
      "question": "How do 'let' and 'const' fit into lexical scoping?",
      "answer": "let and const are also lexically scoped, but they are scoped to the nearest enclosing <strong>block</strong> { } rather than the nearest function. This is still lexical scoping — the block structure is determined by the source code at parse time. The difference is the granularity of the scope boundary: function-level (var) vs block-level (let/const)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Lexical vs Dynamic Scoping</text><text x=\"350\" y=\"60\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">JavaScript uses LEXICAL scoping (based on source code structure)</text><!-- Code area --><rect x=\"30\" y=\"80\" width=\"300\" height=\"300\" rx=\"8\" fill=\"#1a1d28\" stroke=\"var(--border)\"/><text x=\"180\" y=\"105\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\" font-weight=\"bold\">Source Code Structure</text><text x=\"45\" y=\"130\" fill=\"#6c9fff\" font-size=\"11\" font-family=\"monospace\">1  const x = 'global';</text><text x=\"45\" y=\"152\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">2  function outer() {</text><text x=\"65\" y=\"174\" fill=\"#fbbf24\" font-size=\"11\" font-family=\"monospace\">3    const x = 'outer';</text><text x=\"65\" y=\"196\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">4    function inner() {</text><text x=\"85\" y=\"218\" fill=\"#34d399\" font-size=\"11\" font-family=\"monospace\">5      console.log(x);</text><text x=\"65\" y=\"240\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">6    }</text><text x=\"65\" y=\"262\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">7    return inner;</text><text x=\"45\" y=\"284\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">8  }</text><text x=\"45\" y=\"310\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">9  const fn = outer();</text><text x=\"45\" y=\"332\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\">10 fn();  // What is logged?</text><text x=\"45\" y=\"358\" fill=\"#9aa0b0\" font-size=\"10\">Lexical: 'outer' (defines where 'x' refers to)</text><text x=\"45\" y=\"375\" fill=\"#f87171\" font-size=\"10\">Dynamic (if used): 'global' (based on call stack)</text><!-- Results side --><rect x=\"355\" y=\"80\" width=\"320\" height=\"300\" rx=\"8\" fill=\"#1a1d28\" stroke=\"var(--border)\"/><text x=\"515\" y=\"105\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"12\" font-weight=\"bold\">Scope Chain Resolution</text><text x=\"515\" y=\"130\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">inner()'s scope chain (defined at line 5):</text><!-- Scope boxes --><rect x=\"480\" y=\"150\" width=\"170\" height=\"55\" rx=\"5\" fill=\"rgba(52,211,153,0.08)\" stroke=\"#34d399\" stroke-width=\"1\"/><text x=\"565\" y=\"172\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\" font-weight=\"bold\">inner() scope</text><text x=\"495\" y=\"195\" fill=\"#e8eaed\" font-size=\"10\">console.log(x); // not found</text><line x1=\"515\" y1=\"210\" x2=\"515\" y2=\"225\" stroke=\"#fbbf24\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"480\" y=\"228\" width=\"170\" height=\"55\" rx=\"5\" fill=\"rgba(251,191,36,0.08)\" stroke=\"#fbbf24\" stroke-width=\"1\"/><text x=\"565\" y=\"250\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\">outer() scope</text><text x=\"495\" y=\"273\" fill=\"#34d399\" font-size=\"10\" font-weight=\"bold\">x = 'outer' <-- FOUND!</text><line x1=\"515\" y1=\"288\" x2=\"515\" y2=\"303\" stroke=\"#6c9fff\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"480\" y=\"306\" width=\"170\" height=\"50\" rx=\"5\" fill=\"rgba(108,159,255,0.08)\" stroke=\"#6c9fff\" stroke-width=\"1\"/><text x=\"565\" y=\"328\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"10\" font-weight=\"bold\">global scope</text><text x=\"495\" y=\"348\" fill=\"#9aa0b0\" font-size=\"10\">x = 'global' (shadowed)</text></svg>",
  "codeExamples": [
    {
      "title": "Lexical Scope vs Call Site",
      "useCase": "Proving scope is by definition, not call",
      "code": "const x = 'global';\n\nfunction outer() {\n  const x = 'outer';\n  \n  function inner() {\n    // x is resolved based on WHERE inner is defined\n    // (lexically inside outer), not where it's called\n    console.log(x);\n  }\n  \n  return inner;\n}\n\nconst myFn = outer();\n\nfunction caller() {\n  const x = 'caller';\n  myFn();  // What does it log?\n}\n\ncaller();\n// Output: 'outer'\n// Even though we call myFn() inside caller() where x = 'caller',\n// inner still sees x = 'outer' because that was its lexical scope.\n\n// If JavaScript used dynamic scoping:\n// The output would be 'caller' (based on call stack).\n// But JavaScript uses LEXICAL scoping, so it's 'outer'.",
      "description": "This is the textbook example that proves JavaScript uses lexical scoping. inner() was defined inside outer(), so it sees outer's 'x', not the caller's 'x'. The scope is bound at definition time."
    },
    {
      "title": "Lexical Scoping with Block Scopes",
      "useCase": "Block-scoped let/const are also lexical",
      "code": "const outer = 'global';\n\n{\n  // Block scope (lexically scoped to this block)\n  const blockVar = 'block';\n  \n  {\n    // Nested block scope\n    const nestedVar = 'nested';\n    console.log(nestedVar);  // 'nested' (own scope)\n    console.log(blockVar);   // 'block' (from outer block)\n    console.log(outer);      // 'global' (from global)\n  }\n  \n  // console.log(nestedVar);  // ReferenceError (block-scoped)\n  console.log(blockVar);     // 'block' (still in scope)\n}\n\n// console.log(blockVar);  // ReferenceError (block-scoped)\n\n// The nesting structure of blocks determines the lexical scope,\n// exactly like nested functions.",
      "description": "Block scopes with let/const follow the same lexical scoping rules as functions. The scope chain is based on the nesting structure of blocks in the source code."
    },
    {
      "title": "Arrow Functions and Lexical 'this'",
      "useCase": "Arrow functions capture this lexically",
      "code": "const obj = {\n  name: 'MyObject',\n  regularMethod: function() {\n    // Regular function: 'this' depends on call site\n    console.log('regular:', this.name);\n    \n    const innerRegular = function() {\n      console.log('inner regular:', this.name);\n      // 'this' is global/undefined (lost context)\n    };\n    \n    const innerArrow = () => {\n      console.log('inner arrow:', this.name);\n      // Arrow: 'this' is lexically captured from regularMethod\n    };\n    \n    innerRegular();  // undefined or global\n    innerArrow();    // 'MyObject'\n  },\n  \n  arrowMethod: () => {\n    // Arrow function: 'this' is lexically from enclosing scope\n    console.log('arrow method:', this.name);\n    // 'this' is NOT obj — it's the global object!\n  }\n};\n\nobj.regularMethod();  // Works as expected\nobj.arrowMethod();    // undefined (arrow doesn't have own this)\n\n// Arrow functions capture 'this' from the enclosing lexical scope.\n// Regular functions get 'this' from the call site (dynamic).",
      "description": "Arrow functions capture 'this' from their lexical scope (where they are defined). Regular functions determine 'this' dynamically at the call site. This is the exception to the rule that 'this' is always dynamic."
    },
    {
      "title": "Lexical Scope in Callbacks and Asynchronous Code",
      "useCase": "Scope preservation in async operations",
      "code": "function delayedLogger(message, delay) {\n  // 'message' and 'delay' are lexically scoped to this function\n  \n  setTimeout(function() {\n    // This regular function runs LATER, but still has access\n    // to 'message' and 'delay' via lexical scoping\n    console.log(message + ' (after ' + delay + 'ms)');\n  }, delay);\n  \n  // The callback forms a CLOSURE over 'message' and 'delay'\n}\n\ndelayedLogger('Hello', 1000);\n// After 1 second: 'Hello (after 1000ms)'\n\n// The callback was defined INSIDE delayedLogger, so it\n// captures the lexical scope. This is WHY callbacks work!\n\n// Even though setTimeout's callback runs in a completely\n// different execution context, it still accesses the\n// original 'message' and 'delay' via lexical scoping.",
      "description": "Asynchronous callbacks rely on lexical scoping. The callback function captures the variables it needs from its defining scope. When the callback eventually executes (potentially long after the outer function returned), it still has access to those captured variables."
    },
    {
      "title": "Dynamic Scoping in JavaScript? (Using 'this' as an Analogy)",
      "useCase": "Contrasting lexical scope with dynamic behavior",
      "code": "// JavaScript does NOT use dynamic scoping for VARIABLES\n// But 'this' behaves similarly to dynamic scoping\n\nfunction showThis() {\n  console.log(this.name);\n}\n\nconst obj1 = { name: 'Object 1', show: showThis };\nconst obj2 = { name: 'Object 2', show: showThis };\n\nobj1.show();  // 'Object 1' (depends on CALL SITE — dynamic)\nobj2.show();  // 'Object 2' (depends on CALL SITE — dynamic)\n\n// This is DYNAMIC behavior — 'this' depends on how the\n// function is CALLED, not where it's DEFINED.\n\n// True lexical scope would make showThis always see the\n// same 'name' regardless of how it's called.\n\n// This is why 'this' is confusing — it's the ONE thing\n// in JavaScript that is NOT lexically scoped by default.",
      "description": "The 'this' keyword is the closest thing to dynamic scoping in JavaScript. Its value depends on the call site, not the definition site. This is why 'this' often behaves unexpectedly — it's not lexically scoped."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is lexical scope?",
      "options": [
        "Scope determined by where a function is called",
        "Scope determined by where a function is defined in the source code",
        "Scope that changes at runtime",
        "Scope that applies only to variables declared with var"
      ],
      "answer": 1,
      "explanation": "Lexical (static) scope is determined by the nesting structure of functions and blocks in the source code at parse/compile time. It does not change based on how or where a function is called."
    },
    {
      "question": "What will this log? const x = 'A'; function outer() { const x = 'B'; function inner() { return x; } return inner; } const fn = outer(); console.log(fn());",
      "options": [
        "'A'",
        "'B'",
        "undefined",
        "ReferenceError"
      ],
      "answer": 1,
      "explanation": "inner() was defined inside outer(), so it lexically captures outer's scope. Even when called outside outer(), inner() sees x = 'B'."
    },
    {
      "question": "What does 'static scope' mean?",
      "options": [
        "Scope is determined at compile time, not runtime",
        "Scope applies only to static methods",
        "Variables cannot change value",
        "Scope is determined by the call stack"
      ],
      "answer": 0,
      "explanation": "Static scope (another name for lexical scope) means the scope structure is determined during parsing/compilation, before any code executes. It does not change at runtime."
    },
    {
      "question": "Does JavaScript use dynamic scoping?",
      "options": [
        "Yes, for all variables",
        "No, it uses lexical scoping exclusively for variables",
        "Only for global variables",
        "Only in strict mode"
      ],
      "answer": 1,
      "explanation": "JavaScript uses lexical (static) scoping exclusively for variables. The scope chain is based on source code nesting, not the call stack. Dynamic scoping is not used."
    },
    {
      "question": "Which JavaScript feature behaves closest to dynamic scoping?",
      "options": [
        "Variable scope with let",
        "The 'this' keyword",
        "Closures",
        "The scope chain"
      ],
      "answer": 1,
      "explanation": "'this' binding is determined by how a function is called (the call site), which is similar to dynamic scoping. This is why 'this' behaves differently from regular variable resolution."
    },
    {
      "question": "When is the lexical scope chain determined?",
      "options": [
        "During execution",
        "During parsing/compilation",
        "At variable assignment",
        "When the function is called"
      ],
      "answer": 1,
      "explanation": "The lexical scope chain is determined during the parsing/compilation phase, before any code executes. The nesting structure of functions and blocks sets the scope hierarchy permanently."
    },
    {
      "question": "What will this log? function create() { const x = 10; return { getX: function() { return x; } }; } const obj = create(); console.log(obj.getX());",
      "options": [
        "undefined",
        "10",
        "ReferenceError",
        "null"
      ],
      "answer": 1,
      "explanation": "getX() was defined inside create(), so it captures x = 10 from create's lexical scope via closure. Even after create() returns, getX() retains access to x."
    },
    {
      "question": "How does lexical scope differ from the call stack?",
      "options": [
        "The call stack determines scope; lexical scope determines execution order",
        "Lexical scope is about variable access based on code structure; the call stack tracks function execution order",
        "They are the same thing",
        "The call stack is used only in Node.js"
      ],
      "answer": 1,
      "explanation": "Lexical scope determines which variables a function can access based on where it's defined. The call stack tracks which functions are currently executing."
    },
    {
      "question": "What would happen if JavaScript used dynamic scoping?",
      "options": [
        "Closures would still work the same",
        "The example with outer()/inner() would log 'global' instead of 'outer'",
        "Variables would be faster to resolve",
        "Functions could not be nested"
      ],
      "answer": 1,
      "explanation": "With dynamic scoping, inner() would look at the call stack to resolve 'x', finding it from the calling context (which might be the global scope), not from where inner() was defined."
    },
    {
      "question": "How does an arrow function determine 'this'?",
      "options": [
        "It has its own 'this' based on the call site",
        "It captures 'this' lexically from the enclosing scope",
        "It always binds to the global object",
        "It doesn't have a 'this' at all"
      ],
      "answer": 1,
      "explanation": "Arrow functions capture 'this' from the enclosing lexical scope — where the arrow function is defined, not where it's called. This is exceptional because regular functions determine 'this' dynamically."
    }
  ]
};
