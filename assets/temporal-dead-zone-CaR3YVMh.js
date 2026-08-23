const e={title:"Temporal Dead Zone",difficulty:"intermediate",estimatedMinutes:15,tldr:["The <strong>Temporal Dead Zone (TDZ)</strong> is the time between entering a scope and the actual declaration of a <code>let</code> or <code>const</code> variable.","During the TDZ, the variable exists (hoisted) but cannot be accessed. Any access throws a <code>ReferenceError</code>.","<code>var</code> does NOT have a TDZ — it's hoisted and initialized with <code>undefined</code>.","The TDZ prevents accessing variables before their declaration, catching bugs early instead of silently producing <code>undefined</code>."],laymanDefinition:"Imagine you're setting up a new desk. You decide where the keyboard will go (the space is reserved), but the keyboard hasn't been placed there yet. If you try to type on it, you'll hit empty air — the keyboard isn't ready to use. That's the Temporal Dead Zone. JavaScript reserves the name (the space) but the variable isn't ready to use yet. With 'var', it's like having a broken keyboard that's already there but doesn't work properly (it's 'undefined'). With 'let' and 'const', JavaScript simply says 'you can't use this yet' and throws an error, which is actually more helpful because it tells you something is wrong.",deepDive:[{heading:"What Creates the TDZ?",text:"When JavaScript enters a scope (a block, function, or module), the engine scans for all declarations. <code>let</code> and <code>const</code> variables are <strong>hoisted</strong> (the binding is created in the scope's lexical environment), but they are <strong>not initialized</strong>. They enter an 'uninitialized' state — the TDZ. The TDZ lasts from the start of the scope until the actual declaration statement is evaluated during execution."},{heading:"var vs let/const: Why TDZ Exists",text:"With <code>var</code>, the variable is hoisted AND initialized to <code>undefined</code>. Accessing it before declaration gives <code>undefined</code> — this can mask bugs (a variable exists but has an unexpected value). With <code>let</code>/<code>const</code>, the TDZ throws a <code>ReferenceError</code>, making bugs immediately visible. The TDZ is a deliberate design choice to improve code quality."},{heading:"TDZ and typeof",text:"Interestingly, <code>typeof</code> for a variable in the TDZ throws a <code>ReferenceError</code>. However, <code>typeof</code> for a completely undeclared variable returns <code>'undefined'</code>. This means you cannot use <code>typeof</code> to safely check for the existence of a <code>let</code> or <code>const</code> variable before its declaration. This is a key difference from <code>var</code>, where <code>typeof</code> before declaration returns <code>'undefined'</code>."},{heading:"TDZ and Class Declarations",text:"Class declarations also have a TDZ. You cannot access a class before its declaration: <code>new MyClass()</code> before <code>class MyClass {}</code> throws a <code>ReferenceError</code>. Class expressions (<code>const MyClass = class {}</code>) follow the same TDZ rules as their binding keyword."}],interviewAnswer:"The Temporal Dead Zone is the period between entering a scope and the initialization of a let or const variable. During this period, the variable exists in the scope (it is hoisted) but is uninitialized — accessing it throws a ReferenceError. The TDZ was introduced in ES6 to improve code quality by eliminating the silent 'undefined' behavior of var. The TDZ ends when the declaration statement is reached during execution. Class declarations and default function parameters also have TDZ-like behavior. typeof throws a ReferenceError for TDZ variables but returns 'undefined' for undeclared variables.",interviewQuestions:[{question:"What is the Temporal Dead Zone (TDZ)?",answer:"The TDZ is the time between entering a scope (where let/const variables are hoisted) and the actual declaration of that variable. During the TDZ, the variable cannot be accessed. Any attempt to read or write it throws a ReferenceError. <code>var</code> does not have a TDZ because it's initialized to <code>undefined</code> during hoisting."},{question:"Why was the TDZ introduced in ES6?",answer:"The TDZ was introduced to fix the confusing behavior of <code>var</code>, which silently returns <code>undefined</code> when accessed before declaration. The TDZ makes bugs visible immediately by throwing a ReferenceError, encouraging developers to declare variables before using them. It also aligns JavaScript with best practices from other languages."},{question:"Does typeof throw a ReferenceError for TDZ variables?",answer:"Yes. <code>typeof</code> on a let/const variable in the TDZ throws a <code>ReferenceError</code>. However, <code>typeof</code> on a completely undeclared variable returns <code>'undefined'</code>. This means <code>typeof</code> cannot be used as a safe check for let/const variables before their declaration."},{question:"When does the TDZ end?",answer:"The TDZ ends when the declaration statement is evaluated during execution. For example: <code>{ console.log(x); let x = 5; }</code> — the TDZ for x starts at the opening brace and ends at <code>let x = 5</code>. Accessing x before that line throws a ReferenceError; accessing it after works normally."},{question:"Do function declarations have a TDZ?",answer:"No. Function declarations are fully hoisted — both the binding and the function body are available immediately. You can call a function declaration before its line in the source. However, class declarations DO have a TDZ."},{question:"What is the TDZ behavior in default function parameters?",answer:"Default parameters have their own scope (a 'parameters scope'), and they have TDZ-like behavior. A parameter's default value cannot reference another parameter that hasn't been initialized yet: <code>function add(a = b, b = 10) {}</code> throws a ReferenceError because when initializing <code>a</code>, <code>b</code> is in the TDZ."},{question:"How does the TDZ affect 'const' declarations?",answer:"const declarations have the same TDZ rules as let. Additionally, const must be initialized at declaration: <code>const x; // SyntaxError</code>. The TDZ for const ends at its declaration and initialization. Once initialized, const cannot be reassigned."},{question:"Does the TDZ exist in the global scope?",answer:"Yes. let and const variables declared in the global scope still have a TDZ. Unlike var declarations, which create properties on the global object (window), let and const declarations do not create window properties. Accessing a global let/const before its declaration throws a ReferenceError."},{question:"Can you have a ReferenceError from the TDZ that is NOT from accessing a variable?",answer:"No. The TDZ only causes ReferenceErrors when you try to READ or WRITE a variable before its declaration. Passing a variable to a function before its declaration also throws: <code>foo(x); let x = 5;</code>. The variable itself being hoisted (just existing in the TDZ) does not cause any error on its own."},{question:"What is the difference between 'undeclared', 'undefined', and 'TDZ'?",answer:"<strong>Undeclared:</strong> Variable was never declared at all. Accessing throws ReferenceError. typeof returns 'undefined'. <strong>Undefined:</strong> Variable was declared (var) but not yet assigned a value. Accessing returns undefined. No error. <strong>TDZ:</strong> Variable was declared (let/const) but not yet initialized. Accessing throws ReferenceError. typeof throws ReferenceError."}],diagramSvg:`<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="360" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Temporal Dead Zone — let/const Hoisting Timeline</text><!-- Scope block --><rect x="40" y="65" width="620" height="270" rx="8" fill="#1a1d28" stroke="var(--border)"/><text x="350" y="90" text-anchor="middle" fill="#e8eaed" font-size="13" font-weight="bold">{  // Scope begins</text><text x="60" y="110" fill="#9aa0b0" font-size="11">→ let/const variables are HOISTED here (binding created)</text><line x1="60" y1="125" x2="640" y2="125" stroke="var(--border)" stroke-dasharray="2" stroke-width="1"/><!-- TDZ zone --><rect x="60" y="140" width="560" height="60" rx="6" fill="rgba(248,113,113,0.1)" stroke="#f87171" stroke-width="2" stroke-dasharray="5"/><text x="340" y="165" text-anchor="middle" fill="#f87171" font-size="14" font-weight="bold">⛔ TEMPORAL DEAD ZONE ⛔</text><text x="340" y="188" text-anchor="middle" fill="#f87171" font-size="11">Cannot access variable // ReferenceError</text><text x="340" y="205" text-anchor="middle" fill="#9aa0b0" font-size="10">(typeof also throws ReferenceError)</text><!-- Arrow from scope entry to TDZ --><line x1="80" y1="110" x2="80" y2="140" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3" marker-end="url(#arrow)"/><text x="75" y="128" fill="#f87171" font-size="9">enter</text><!-- Declaration line --><line x1="60" y1="218" x2="640" y2="218" stroke="#34d399" stroke-width="1.5"/><rect x="200" y="208" width="300" height="24" rx="4" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1"/><text x="350" y="225" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">let x = 10;  ← TDZ ends here</text><!-- After TDZ --><rect x="60" y="245" width="560" height="50" rx="6" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1.5"/><text x="340" y="268" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">✅ x is now accessible!</text><text x="340" y="286" text-anchor="middle" fill="#9aa0b0" font-size="10">console.log(x); // 10  |  typeof x; // 'number'</text><!-- var comparison --><rect x="60" y="310" width="580" height="20" rx="4" fill="#222639"/><text x="75" y="324" fill="#fbbf24" font-size="10">var y = 20;</text><text x="220" y="324" fill="#9aa0b0" font-size="10">→ No TDZ. y is hoisted and initialized to</text><text x="520" y="324" fill="#fbbf24" font-size="10">undefined</text></svg>`,codeExamples:[{title:"TDZ in Action: let and const",useCase:"Understanding ReferenceError timing",code:`{
  // TDZ starts here for x, y, z
  
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
  
  let x = 10;    // TDZ ends for x
  console.log(x); // 10 - Works!
  
  const y = 20;  // TDZ ends for y
  console.log(y); // 20 - Works!
  
  let z = 30;    // TDZ ends for z
  console.log(z); // 30 - Works!
  
  // TDZ is over for all variables now
  console.log(x, y, z); // 10, 20, 30
}`,description:"The TDZ starts when the scope is entered and ends individually for each variable when its declaration statement is reached. Each let/const variable has its own TDZ period."},{title:"var Has No TDZ",useCase:"Contrasting var vs let behavior",code:`{
  console.log(a);  // undefined (NOT a ReferenceError!)
  // var is hoisted AND initialized to undefined
  
  var a = 10;
  console.log(a);  // 10
  
  // console.log(b);  // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b);  // 20
  
  // The var gives 'undefined' (silent, might mask bugs)
  // The let gives ReferenceError (immediate, helps catch bugs)
}`,description:"var hoisting gives the variable an initial value of undefined, making it accessible (but useless) before declaration. let/const TDZ prevents any access before declaration, surfacing bugs immediately."},{title:"typeof and TDZ",useCase:"typeof behavior differences",code:`// var: typeof returns 'undefined' even before declaration
console.log(typeof varVar);  // 'undefined' (no ReferenceError)
var varVar = 10;

// let: typeof throws ReferenceError in TDZ
// console.log(typeof letVar);  // ReferenceError!
let letVar = 20;
console.log(typeof letVar);  // 'number' (after TDZ)

// Undeclared variable: typeof returns 'undefined'
console.log(typeof totallyUndeclared);  // 'undefined' (safe, no error)

// Different behaviors:
// 1. typeof undeclaredVar -> 'undefined' (safe check)
// 2. typeof varVar before declaration -> 'undefined' (silent)
// 3. typeof letVar before declaration -> ReferenceError! (not silent)

// This means you CANNOT safely use typeof to check for
// a let/const variable that may or may not be declared.`,description:"typeof behaves differently for var, let/const, and undeclared variables. This is an important edge case to know for defensive coding."},{title:"Default Parameters and TDZ",useCase:"TDZ in function parameter scope",code:`// Default parameters have their own scope
// Parameters are initialized left-to-right

// This works: a is initialized before b uses it
function add(a = 10, b = a) {
  return a + b;
}
console.log(add());  // 20 (a=10, b=10)

// This throws: b is in TDZ when a tries to use it
// function bad(a = b, b = 10) {
//   return a + b;
// }
// console.log(bad());  // ReferenceError: Cannot access 'b' before initialization

// This also throws
// function tricky(x = x) {
//   return x;
// }
// console.log(tricky());  // ReferenceError

// Correct way with default parameters
function correct(x = 10, y = x * 2) {
  return { x, y };
}
console.log(correct());  // { x: 10, y: 20 }
console.log(correct(5)); // { x: 5, y: 10 }`,description:"Default function parameters are initialized left-to-right. Each parameter is in the TDZ until its own declaration is reached. A parameter cannot reference a later parameter in its default value."},{title:"Class Declarations Have TDZ Too",useCase:"Class hoisting behavior",code:`// Class declarations are hoisted but NOT initialized (TDZ)

// new MyClass();  // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello, \${this.name}\`;
  }
}

// After declaration, it works
const obj = new MyClass('Alice');
console.log(obj.greet());  // 'Hello, Alice'

// Class expression with const also has TDZ
// new YourClass();  // ReferenceError
const YourClass = class {
  constructor() {}
};

// var class expression... also has TDZ? No!
// Actually, var classExpression doesn't exist because
// class expression must be assigned. But:

// var myVarClass = class {};  // var hoisting applies to the variable
// console.log(myVarClass);  // undefined (var hoisted)
// But the class ITSELF is in TDZ because classes are block-scoped like let

// Summary:
// - class declarations: TDZ (like let)
// - const ClassExpr: TDZ (like const)
// - var varClass = class: var is hoisted as undefined, 
//   but assignment (the class) is not yet executed`,description:"Class declarations have TDZ like let and const. You cannot access a class before its declaration, even though the binding is hoisted. This prevents the confusing temporal behavior of function declarations."}],mcqQuestions:[{question:"What does this code log? { console.log(x); let x = 5; }",options:["undefined","5","ReferenceError","null"],answer:2,explanation:"x is in the Temporal Dead Zone from the start of the block until the 'let x = 5' declaration. Accessing it before that line throws a ReferenceError."},{question:"What does this log? console.log(typeof y); var y = 10;",options:["'undefined'","'number'","ReferenceError","SyntaxError"],answer:0,explanation:"var y is hoisted and initialized to undefined. Before the assignment (y = 10), typeof returns 'undefined'. No ReferenceError because var doesn't have TDZ."},{question:"Which variables have a Temporal Dead Zone?",options:["var, let, const","let, const","var only","All variables including function declarations"],answer:1,explanation:"Only let and const have a TDZ. var is hoisted and initialized to undefined immediately. Function declarations are fully hoisted with no TDZ."},{question:"What does this log? console.log(typeof undeclaredVar);",options:["ReferenceError","'undefined'","'object'","'null'"],answer:1,explanation:"typeof on a completely undeclared variable returns 'undefined' (no error). This is different from accessing an undeclared variable directly (which throws ReferenceError)."},{question:"When does the TDZ begin and end?",options:["Begins at declaration, ends at assignment","Begins at scope entry, ends at declaration","Begins at scope entry, ends at scope exit","Begins at hoisting, ends at initialization"],answer:1,explanation:"The TDZ begins when the scope (block, function, or module) is entered and the variable is hoisted. It ends when the declaration statement is evaluated during execution."},{question:"What does this log? function test(a = b, b = 10) { return a + b; } test();",options:["20","NaN","ReferenceError","undefined"],answer:2,explanation:"Default parameters are initialized left-to-right. When initializing 'a', 'b' is in the TDZ because it hasn't been declared yet. This throws a ReferenceError."},{question:"Does 'typeof' throw for a let variable in the TDZ?",options:["Yes, ReferenceError","No, returns 'undefined'","No, returns 'TDZ'","Depends on strict mode"],answer:0,explanation:"typeof on a let/const variable in the TDZ throws a ReferenceError. This is different from var (returns 'undefined') and undeclared variables (returns 'undefined')."},{question:"What is the main purpose of the TDZ in ES6?",options:["To make JavaScript faster","To catch bugs where variables are used before declaration","To replace var entirely","To enable block scoping"],answer:1,explanation:"The TDZ catches bugs by throwing immediately when a variable is accessed before its declaration. This is better than var's silent 'undefined' which can mask logical errors."},{question:"What will this log? { let x = x; }",options:["undefined","ReferenceError","x","SyntaxError"],answer:1,explanation:"The right-hand side of 'let x = x' is evaluated before x is initialized. At this point, x is still in the TDZ, so 'x' on the right throws a ReferenceError."},{question:"Do class declarations have a TDZ?",options:["No, classes are fully hoisted","Yes, like let and const","Only in strict mode","Only for static methods"],answer:1,explanation:"Class declarations are hoisted but have a TDZ like let and const. You cannot access a class before its declaration."}]};export{e as temporal_dead_zone};
