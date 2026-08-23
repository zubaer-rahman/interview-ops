export const var_let_const = {
  "title": "JavaScript var vs let vs const",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "<code>var</code> is <strong>function-scoped</strong>, can be <strong>re-declared</strong> and <strong>updated</strong>, and is <strong>hoisted</strong> to the top of its function (initialized as <code>undefined</code>).",
    "<code>let</code> is <strong>block-scoped</strong> (<code>{}</code>), can be <strong>updated</strong> but <strong>not re-declared</strong> in the same scope, and is hoisted but in a <strong>Temporal Dead Zone (TDZ)</strong>.",
    "<code>const</code> is <strong>block-scoped</strong>, must be <strong>initialized at declaration</strong>, cannot be <strong>re-assigned</strong> (but objects/arrays can be mutated), and is also in TDZ.",
    "Prefer <code>const</code> by default, use <code>let</code> when re-assignment is needed, and <strong>avoid</strong> <code>var</code> in modern code."
  ],
  "laymanDefinition": "Imagine three different types of parking spaces. var is like a general parking spot — anyone can park there, any car can park, and cars can be moved around freely. The spot exists anywhere in the parking lot (function scope). let is like a reserved spot in a specific garage bay (block scope) — you can change which car is there, but you can only have one car and it can't cross into other bays. const is like a permanently assigned spot with a car that's bolted to the ground — the car itself can be modified (new paint, new tires) but the assignment to that spot is permanent.",
  "deepDive": [
    {
      "heading": "Scope: Function vs Block",
      "text": "var is function-scoped — it is visible throughout the entire function regardless of block boundaries (if, for, while). let and const are block-scoped — they are only visible within the nearest set of curly braces {}. This means a let variable inside an if block is not accessible outside it. Block scoping prevents common bugs from variable leakage outside loops and conditionals."
    },
    {
      "heading": "Hoisting Behavior",
      "text": "All three are hoisted (moved to the top of their scope), but they behave differently. var declarations are hoisted AND initialized to undefined — you can access them before the declaration line (you'll get undefined). let and const are hoisted but NOT initialized — accessing them before declaration throws a ReferenceError. This period between entering scope and declaration is called the 'Temporal Dead Zone' (TDZ)."
    },
    {
      "heading": "Re-declaration and Re-assignment",
      "list": [
        "<strong>var:</strong> Can be re-declared and re-assigned freely. Re-declaring a var multiple times in the same scope does not throw an error.",
        "<strong>let:</strong> Can be re-assigned but NOT re-declared in the same scope. Re-declaration throws SyntaxError.",
        "<strong>const:</strong> Cannot be re-assigned OR re-declared. Must be initialized at declaration. Throws SyntaxError for re-declaration, TypeError for re-assignment."
      ]
    },
    {
      "heading": "The Temporal Dead Zone (TDZ)",
      "text": "The TDZ is the time between entering a block scope (where a let/const variable exists) and reaching the declaration. During this period, accessing the variable throws a ReferenceError. The TDZ prevents the common bug of accessing a variable before initialization (which would silently return undefined with var). The TDZ ends when the declaration is evaluated."
    },
    {
      "heading": "const with Objects and Mutation",
      "text": "const prevents re-assignment of the variable binding, not mutation of the value. For objects and arrays, const means the reference cannot change, but the contents can be modified. Object.freeze() can make an object deeply immutable, but it's a shallow freeze. For true immutability, use libraries like Immer or immutable update patterns."
    }
  ],
  "interviewAnswer": "var is function-scoped, hoisted with undefined initialization, and allows re-declaration. let and const are block-scoped, hoisted but not initialized (Temporal Dead Zone), and disallow re-declaration. const additionally disallows re-assignment but allows mutation of objects/arrays. Always prefer const, use let when re-assignment is needed, and avoid var in modern code. The TDZ prevents accessing variables before declaration, which was a common source of bugs with var. Block scoping with let/const prevents variable leakage outside loops and conditionals.",
  "interviewQuestions": [
    {
      "question": "What is the main difference between var and let?",
      "answer": "var is function-scoped and hoisted with undefined initialization. let is block-scoped and in the Temporal Dead Zone until declaration. let also cannot be re-declared in the same scope."
    },
    {
      "question": "What is the Temporal Dead Zone?",
      "answer": "The TDZ is the period between entering a block scope and reaching the variable declaration. During this time, accessing a let/const variable throws a ReferenceError. It prevents accessing variables before initialization."
    },
    {
      "question": "Can you re-assign a const variable?",
      "answer": "No, const prevents re-assignment. You cannot do const x = 1; x = 2; — this throws TypeError. However, const objects can have their properties mutated."
    },
    {
      "question": "What is hoisting?",
      "answer": "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. var is hoisted and initialized to undefined. let/const are hoisted but not initialized — accessing them before declaration throws ReferenceError (TDZ)."
    },
    {
      "question": "What happens if you try to access a let variable before its declaration?",
      "answer": "It throws a ReferenceError because the variable is in the Temporal Dead Zone. With var, it would return undefined (silent bug)."
    },
    {
      "question": "Can you re-declare a let variable in the same scope?",
      "answer": "No. let x = 1; let x = 2; throws SyntaxError. var allows re-declaration: var x = 1; var x = 2; works."
    },
    {
      "question": "Why would you use const instead of let?",
      "answer": "Use const by default to signal that the variable binding should not change. This makes code more predictable and prevents accidental re-assignment. Use let only when you need to re-assign the variable."
    },
    {
      "question": "Does const make objects immutable?",
      "answer": "No. const prevents re-assignment of the variable, but object properties can still be mutated. const obj = { a: 1 }; obj.a = 2; works. Use Object.freeze() for shallow immutability or a library like Immer for deep immutability."
    },
    {
      "question": "What happens if you reference a var before it's declared?",
      "answer": "It returns undefined (not a ReferenceError). The var declaration is hoisted to the top and initialized to undefined. The assignment stays in place. This behavior is a common source of bugs."
    },
    {
      "question": "Is there any performance difference between let/const and var?",
      "answer": "In modern engines, there is no meaningful performance difference. let/const may allow better optimization in some cases due to more precise scoping. The choice should be based on semantics, not performance."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"380\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">var vs let vs const Comparison</text><rect x=\"30\" y=\"70\" width=\"200\" height=\"85\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"93\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"13\" font-weight=\"bold\">var</text><text x=\"45\" y=\"113\" fill=\"#9aa0b0\" font-size=\"10\">✓ Function-scoped</text><text x=\"45\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\">✓ Hoisted (undefined)</text><text x=\"45\" y=\"147\" fill=\"#9aa0b0\" font-size=\"10\">✓ Re-declarable</text><rect x=\"250\" y=\"70\" width=\"200\" height=\"85\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"93\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">let</text><text x=\"265\" y=\"113\" fill=\"#9aa0b0\" font-size=\"10\">✓ Block-scoped</text><text x=\"265\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\">✓ Hoisted (TDZ)</text><text x=\"265\" y=\"147\" fill=\"#9aa0b0\" font-size=\"10\">✗ Re-assignable</text><rect x=\"470\" y=\"70\" width=\"200\" height=\"85\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"570\" y=\"93\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"13\" font-weight=\"bold\">const</text><text x=\"485\" y=\"113\" fill=\"#9aa0b0\" font-size=\"10\">✓ Block-scoped</text><text x=\"485\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\">✓ Hoisted (TDZ)</text><text x=\"485\" y=\"147\" fill=\"#9aa0b0\" font-size=\"10\">✗ Must init / !reassign</text><text x=\"350\" y=\"200\" fill=\"#e8eaed\" font-size=\"12\" font-weight=\"bold\">Best Practice: const &gt; let &gt; var (avoid)</text><text x=\"350\" y=\"240\" fill=\"#9aa0b0\" font-size=\"11\">Use const by default, let when you need re-assignment,</text><text x=\"350\" y=\"260\" fill=\"#9aa0b0\" font-size=\"11\">never var in modern JavaScript (unless legacy code).</text><text x=\"350\" y=\"300\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\">Note: const does NOT mean immutable</text><text x=\"350\" y=\"320\" fill=\"#9aa0b0\" font-size=\"10\">const obj = { a: 1 }; obj.a = 2; // Allowed (mutation)</text><text x=\"350\" y=\"340\" fill=\"#9aa0b0\" font-size=\"10\">obj = { b: 3 }; // TypeError (re-assignment blocked)</text></svg>",
  "codeExamples": [
    {
      "title": "Scope Comparison: var vs let",
      "useCase": "Understanding function vs block scope",
      "code": "function scopeDemo() {\n  // var is function-scoped\n  if (true) {\n    var x = 10;\n    let y = 20;\n    const z = 30;\n  }\n\n  console.log(x); // 10 (accessible! var ignores block)\n  // console.log(y); // ReferenceError: y is not defined\n  // console.log(z); // ReferenceError: z is not defined\n}\n\nscopeDemo();\n\n// for loop quirk with var\nfor (var i = 0; i < 5; i++) {\n  setTimeout(function() { console.log(i); }, 100);\n}\n// Logs: 5, 5, 5, 5, 5 (all see the same i)\n\nfor (let j = 0; j < 5; j++) {\n  setTimeout(function() { console.log(j); }, 100);\n}\n// Logs: 0, 1, 2, 3, 4 (each iteration gets its own j)",
      "description": "var ignores block scope (function-scoped), while let/const respect blocks. This is why var in loops creates the classic closure bug."
    },
    {
      "title": "Hoisting and TDZ Behavior",
      "useCase": "When variables are accessible",
      "code": "console.log(a); // undefined (var hoisted + initialized)\nvar a = 5;\n\n// console.log(b); // ReferenceError: Cannot access 'b' before initialization\nlet b = 10;\n\n// console.log(c); // ReferenceError: Cannot access 'c' before initialization\nconst c = 15;\n\n// The Temporal Dead Zone:\n{\n  // TDZ starts for 'd'\n  // console.log(d); // ReferenceError!\n  let d = 20;\n  // TDZ ends for 'd'\n  console.log(d); // 20\n}\n\n// var hoisting visualization:\n// The above is interpreted as:\n// var a;\n// console.log(a); // undefined\n// a = 5;\n\n// let/const are hoisted but not initialized\n// They exist in the scope but are in the TDZ",
      "description": "var is hoisted and initialized to undefined. let/const are hoisted but uninitialized — accessing them before declaration throws ReferenceError (TDZ)."
    },
    {
      "title": "Re-declaration and Re-assignment Rules",
      "useCase": "What's allowed and what's not",
      "code": "// var — can re-declare and re-assign\nvar name = 'Alice';\nvar name = 'Bob';     // OK: re-declared\nname = 'Charlie';      // OK: re-assigned\nconsole.log(name);     // 'Charlie'\n\n// let — can re-assign but NOT re-declare\nlet age = 30;\n// let age = 31;  // SyntaxError: Identifier 'age' has already been declared\nage = 31;              // OK: re-assigned\nconsole.log(age);      // 31\n\n// const — cannot re-assign or re-declare\nconst birthYear = 1990;\n// const birthYear = 1991;  // SyntaxError\n// birthYear = 1992;       // TypeError: Assignment to constant variable\nconsole.log(birthYear); // 1990\n\n// const requires initialization\n// const uninitialized;  // SyntaxError: Missing initializer\n\n// But const objects CAN be mutated:\nconst user = { name: 'Alice' };\nuser.name = 'Bob';     // OK: mutation, not re-assignment\nconsole.log(user.name); // 'Bob'\n// user = { name: 'Charlie' };  // TypeError!",
      "description": "var allows re-declaration and re-assignment. let allows re-assignment only. const allows neither re-declaration nor re-assignment, but object properties can be mutated."
    },
    {
      "title": "Practical: When to Use Each",
      "useCase": "Best practices in real code",
      "code": "// ✅ const by default — never changes\nconst API_BASE = 'https://api.example.com';\nconst MAX_RETRIES = 3;\nconst config = {\n  theme: 'dark',\n  lang: 'en'\n};\n\n// ✅ let when re-assignment is needed\nlet currentUser = null;\nlet counter = 0;\n\nfunction login(userData) {\n  currentUser = userData;  // re-assignment\n  counter++;               // re-assignment\n}\n\n// ❌ var — avoid in modern code\n// var oldWay = 'deprecated'; // old style, avoid\n\n// Common pitfalls:\n// 1. for loops with var\nfor (var i = 0; i < 3; i++) {\n  setTimeout(function() { console.log(i); }, 0);\n}\n// Logs: 3, 3, 3 (NOT 0, 1, 2)\n\n// 2. Accidental global with var\nfunction test() {\n  var local = 1;\n  leaked = 2;  // No var/let/const — creates global!\n}\ntest();\nconsole.log(leaked); // 2 (accidental global)\n\n// 3. const does NOT freeze objects\nconst data = { items: [] };\ndata.items.push('new item');  // Allowed!\nconsole.log(data.items); // ['new item']",
      "description": "Modern best practice: use const as default, let when re-assignment is needed, avoid var entirely. Remember const doesn't prevent object mutation."
    },
    {
      "title": "Temporal Dead Zone — Detailed Example",
      "useCase": "Understanding TDZ edge cases",
      "code": "function tdzDemo() {\n  console.log('Start of function');\n\n  // TDZ for 'value' starts here\n  // 'value' exists in scope but is uninitialized\n\n  function inner() {\n    // 'value' is NOT accessible here either\n    // TDZ continues until the let declaration\n  }\n\n  // console.log(value); // ReferenceError!\n  // typeof value;      // ReferenceError! (not 'undefined'!)\n\n  let value = 42;\n  // TDZ ends here\n  console.log(value);  // 42\n}\n\ntdzDemo();\n\n// typeof quirk:\nconsole.log(typeof undeclaredVar); // 'undefined' (not ReferenceError)\n// But with TDZ:\n// console.log(typeof tdzVar); // ReferenceError!\n// let tdzVar = 1;\n\n// var demonstrates the difference:\nfunction varHoisting() {\n  console.log(x); // undefined (not ReferenceError)\n  var x = 10;\n  console.log(x); // 10\n}\n\nvarHoisting();\n\n// The TDZ provides safety: it prevents the\n// 'undefined' bugs that var hoisting creates",
      "description": "The TDZ prevents accessing variables before their declaration. Unlike var (which silently returns undefined), let/const throw a clear ReferenceError."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What will the following log? console.log(x); var x = 5;",
      "options": [
        "5",
        "undefined",
        "ReferenceError",
        "null"
      ],
      "answer": 1,
      "explanation": "var x is hoisted and initialized to undefined. The assignment (x = 5) stays in place, so console.log(x) logs undefined."
    },
    {
      "question": "What will the following log? console.log(y); let y = 5;",
      "options": [
        "5",
        "undefined",
        "ReferenceError",
        "null"
      ],
      "answer": 2,
      "explanation": "let y is hoisted but in the Temporal Dead Zone until the declaration. Accessing it before the declaration throws a ReferenceError."
    },
    {
      "question": "Can a const variable be re-assigned?",
      "options": [
        "Yes, if it's an object",
        "No, never",
        "Only once",
        "Yes, with const = newValue"
      ],
      "answer": 1,
      "explanation": "const prevents re-assignment. Even const objects cannot be re-assigned (though their properties can be mutated)."
    },
    {
      "question": "What scope does var use?",
      "options": [
        "Block scope",
        "Function scope",
        "Global scope only",
        "Module scope"
      ],
      "answer": 1,
      "explanation": "var is function-scoped — it's visible throughout the entire function regardless of block boundaries."
    },
    {
      "question": "What scope does let/const use?",
      "options": [
        "Function scope",
        "Block scope",
        "Global scope only",
        "Dynamic scope"
      ],
      "answer": 1,
      "explanation": "let and const are block-scoped — they are only visible within the nearest set of curly braces {}."
    },
    {
      "question": "What is the Temporal Dead Zone?",
      "options": [
        "The time before a variable is garbage collected",
        "The period between scope entry and variable declaration where let/const are inaccessible",
        "The time it takes for var to be hoisted",
        "A debugging tool"
      ],
      "answer": 1,
      "explanation": "The TDZ is the period between entering the scope and reaching the let/const declaration. Accessing the variable during TDZ throws ReferenceError."
    },
    {
      "question": "What will the following log? const obj = { a: 1 }; obj.a = 2; console.log(obj.a);",
      "options": [
        "1",
        "2",
        "TypeError",
        "undefined"
      ],
      "answer": 1,
      "explanation": "const prevents re-assignment of the variable binding (obj = ...), not mutation of properties. obj.a = 2 is allowed."
    },
    {
      "question": "Which is the recommended best practice?",
      "options": [
        "Use var everywhere",
        "Use const by default, let when needed, avoid var",
        "Use let everywhere",
        "Use const everywhere, never let"
      ],
      "answer": 1,
      "explanation": "Best practice: prefer const (immutable binding), use let when re-assignment is needed, and avoid var entirely in modern code."
    },
    {
      "question": "What will this loop log? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
      "options": [
        "0, 1, 2",
        "3, 3, 3",
        "undefined, undefined, undefined",
        "0, 0, 0"
      ],
      "answer": 1,
      "explanation": "var i is function-scoped. By the time setTimeout runs, the loop has finished and i is 3. All three callbacks see the same i (3)."
    },
    {
      "question": "What will this loop log? for (let j = 0; j < 3; j++) { setTimeout(() => console.log(j), 0); }",
      "options": [
        "0, 1, 2",
        "3, 3, 3",
        "undefined, undefined, undefined",
        "2, 2, 2"
      ],
      "answer": 0,
      "explanation": "With let, each iteration creates a new binding for j. Each setTimeout callback captures a different j value (0, 1, 2)."
    }
  ]
};
