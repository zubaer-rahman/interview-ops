const e={title:"Hoisting & Scope",difficulty:"beginner",estimatedMinutes:20,tldr:["<strong>Hoisting</strong> is JavaScript's behavior of moving declarations to the top of their containing scope during the compile phase.","<code>var</code> declarations are hoisted and initialized with <code>undefined</code>.","<code>let</code> and <code>const</code> are hoisted but NOT initialized -- they enter the <strong>Temporal Dead Zone (TDZ)</strong> until the declaration is reached.","<strong>Function declarations</strong> are hoisted entirely (definition + body).","<strong>Function expressions</strong> (var/let/const) are hoisted according to their declaration keyword (var -> undefined, let/const -> TDZ)."],laymanDefinition:"Imagine you're reading a recipe book. Before you start cooking, you quickly glance through the entire recipe to see what ingredients you need. You 'hoist' the ingredient list to the top of your mind. JavaScript does the same thing -- before running your code, it scans for all variable and function declarations and moves them to the top of their scope. But there's a catch: if you use 'var', the variable exists but has no value yet (like a labeled empty jar -- you know the jar is there, but it's empty). If you use 'let' or 'const', the variable exists but you can't touch it yet -- it's in a 'temporal dead zone', like an ingredient that's still in the pantry but you're not allowed to open the pantry door until you reach that step in the recipe.",deepDive:[{heading:"The Two Phases: Compilation & Execution",text:"JavaScript doesn't run code line by line in a single pass. First, the engine performs a compilation phase where it scans for all declarations (function, var, let, const) and sets up the scope. Then it executes the code. Hoisting is the mental model for understanding how declarations are processed during compilation before execution begins."},{heading:"var Hoisting: Declaration vs Initialization",text:"When you write <code>var x = 10;</code>, JavaScript splits this into two steps: (1) Declaration: <code>var x;</code> is hoisted to the top of the function scope and initialized with <code>undefined</code>. (2) Assignment: <code>x = 10;</code> stays in its original position. This is why accessing a var variable before its declaration returns <code>undefined</code>, not <code>ReferenceError</code>."},{heading:"let/const and the Temporal Dead Zone (TDZ)",text:"<code>let</code> and <code>const</code> declarations are also hoisted (they create the binding in the scope), but they are NOT initialized. The variable exists in the scope but is in the TDZ -- any access before the declaration throws a <code>ReferenceError</code>. The TDZ ends when the declaration is evaluated during execution. This provides better error detection than <code>var</code>'s silent <code>undefined</code>."},{heading:"Function Declaration vs Function Expression Hoisting",text:"A <strong>function declaration</strong> (<code>function foo() {}</code>) is fully hoisted -- both the binding and the function body. You can call a function declaration before its line in the source. A <strong>function expression</strong> (<code>const foo = function() {}</code>) follows the hoisting rules of its keyword -- <code>const</code> means TDZ, <code>var</code> means <code>undefined</code>."},{heading:"Scope Types in JavaScript",list:["<strong>Global Scope:</strong> Variables declared outside any function or block. Accessible everywhere.","<strong>Function Scope:</strong> Variables declared with <code>var</code> inside a function. Accessible anywhere within that function.","<strong>Block Scope:</strong> Variables declared with <code>let</code> and <code>const</code> inside a block <code>{}</code>. Accessible only within that block.","<strong>Lexical Scope:</strong> Inner functions have access to variables in their outer (parent) scopes -- determined by where functions are written in the code."]}],interviewAnswer:"Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase. 'var' declarations are hoisted and initialized with undefined, making them accessible (but undefined) before their declaration line. 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until their declaration is evaluated -- accessing them before declaration throws a ReferenceError. Function declarations are fully hoisted and can be called before their definition. Function expressions follow the hoisting rules of the keyword used. Understanding hoisting and the TDZ is critical for avoiding bugs and writing predictable code.",interviewQuestions:[{question:"What is the Temporal Dead Zone (TDZ)?",answer:`The Temporal Dead Zone is the period between entering a scope (where a let/const variable is hoisted) and the actual declaration of that variable. During the TDZ, the variable exists in the scope but cannot be accessed. Any attempt to read or write the variable throws a ReferenceError. <strong>Example:</strong><br/><br/><pre><code>{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}</code></pre>`},{question:"What is the difference between var, let, and const hoisting?",answer:`<strong>var:</strong> Hoisted and initialized with 'undefined'. Scoped to the enclosing function. Can be redeclared. <strong>let:</strong> Hoisted but NOT initialized (TDZ). Scoped to the enclosing block. Cannot be redeclared in the same scope. <strong>const:</strong> Same hoisting as let (TDZ). Must be initialized at declaration. Cannot be reassigned. <br/><br/><pre><code>console.log(a); // undefined (var)
console.log(b); // ReferenceError (let TDZ)
console.log(c); // ReferenceError (const TDZ)
var a = 1;
let b = 2;
const c = 3;</code></pre>`},{question:"Explain the difference between function declaration hoisting and function expression hoisting.",answer:`Function declarations are <strong>fully hoisted</strong> -- you can call them before their definition. Function expressions follow the hoisting rules of their assignment keyword. <strong>Example:</strong><br/><br/><pre><code>foo(); // Works: 'foo function'
bar(); // TypeError: bar is not a function (var is undefined)
baz(); // ReferenceError: TDZ

function foo() { console.log('foo function'); }
var bar = function() { console.log('bar function'); };
const baz = function() { console.log('baz function'); };</code></pre>`},{question:"What does this code output and why? var x = 10; function test() { console.log(x); var x = 20; } test();",answer:`Output: <strong>undefined</strong>. Inside test(), the <code>var x</code> declaration is hoisted to the top of the function scope. The local x shadows the global x. The code is interpreted as:<br/><br/><pre><code>var x = 10;
function test() {
  var x; // hoisted, initialized to undefined
  console.log(x); // undefined
  x = 20;
}
test();</code></pre>`},{question:"How does hoisting affect class declarations?",answer:`Class declarations (<code>class Foo {}</code>) are hoisted but NOT initialized -- similar to let/const. They are in the TDZ until the declaration is reached. This means you cannot access a class before its definition. <strong>Example:</strong><br/><br/><pre><code>const obj = new Foo(); // ReferenceError: TDZ
class Foo {}</code></pre>`},{question:"What is the scope chain and how does it relate to hoisting?",answer:"The scope chain is the hierarchy of scopes that JavaScript traverses to resolve variable references. Each execution context has a reference to its outer environment. When resolving a variable, JS starts in the current scope, then moves outward. Hoisting affects each scope independently -- declarations are lifted to the top of their respective scope (function scope for var, block scope for let/const)."},{question:"Does hoisting occur in ES modules?",answer:"Yes, hoisting occurs exactly the same way in ES modules. The module scope behaves like a top-level scope. All hoisting rules (var -> undefined, let/const -> TDZ, function declarations -> fully hoisted) apply within module scope. The only difference is that module-level variables are not added to the global object."},{question:"What will this code log? console.log(typeof foo); var foo = function() {}; console.log(typeof foo);",answer:"Output: <strong>'undefined'</strong> then <strong>'function'</strong>. The var foo is hoisted (initialized as undefined). Before assignment, typeof undefined is 'undefined'. After the assignment, typeof foo is 'function'."},{question:"How does hoisting work with IIFEs (Immediately Invoked Function Expressions)?",answer:`IIFEs create a new function scope. Any var declarations inside the IIFE are hoisted to the top of the IIFE's scope, not the outer scope. Let/const declarations are hoisted to the block scope of the IIFE body (in TDZ until declaration). <strong>Example:</strong><br/><br/><pre><code>(function() {
  console.log(x); // undefined (var hoisted)
  var x = 5;
})();

console.log(typeof x); // 'undefined' -- x not accessible outside</code></pre>`},{question:"What is the difference between 'undefined' and 'ReferenceError' in the context of hoisting?",answer:"<strong>undefined</strong> means the variable exists (has been declared/hoisted) but hasn't been assigned a value yet. This occurs with 'var'. <strong>ReferenceError</strong> means the variable cannot be accessed at all -- either it doesn't exist in the scope, or it's in the TDZ (let/const before declaration). The TDZ ReferenceError is more helpful than 'var's silent 'undefined' because it alerts you to a potential logic error."}],diagramSvg:`<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="max-width:700px;"><defs><marker id="arrowH" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="680" height="460" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Hoisting & Scope Comparison</text><!-- Header row for 3 columns --><rect x="40" y="60" width="190" height="32" rx="4" fill="rgba(248,113,113,0.12)" stroke="#f87171" stroke-width="1.5"/><text x="135" y="80" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">var</text><rect x="255" y="60" width="190" height="32" rx="4" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/><text x="350" y="80" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">let</text><rect x="470" y="60" width="190" height="32" rx="4" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/><text x="565" y="80" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">const</text><!-- Scope --><text x="135" y="120" text-anchor="middle" fill="#9aa0b0" font-size="11">Function-scoped</text><text x="350" y="120" text-anchor="middle" fill="#9aa0b0" font-size="11">Block-scoped</text><text x="565" y="120" text-anchor="middle" fill="#9aa0b0" font-size="11">Block-scoped</text><!-- Hoisting visualization --><line x1="60" y1="140" x2="210" y2="140" stroke="var(--border)" stroke-width="1"/><line x1="275" y1="140" x2="425" y2="140" stroke="var(--border)" stroke-width="1"/><line x1="490" y1="140" x2="640" y2="140" stroke="var(--border)" stroke-width="1"/><text x="135" y="165" text-anchor="middle" fill="#f87171" font-size="11" font-weight="bold">Hoisted </text><text x="350" y="165" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Hoisted </text><text x="565" y="165" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Hoisted </text><!-- Initialization --><text x="135" y="190" text-anchor="middle" fill="#e8eaed" font-size="11">Initialized: undefined</text><text x="350" y="190" text-anchor="middle" fill="#e8eaed" font-size="11">Uninitialized (TDZ)</text><text x="565" y="190" text-anchor="middle" fill="#e8eaed" font-size="11">Uninitialized (TDZ)</text><!-- TDZ bar for let/const --><rect x="260" y="208" width="180" height="20" rx="4" fill="rgba(248,113,113,0.15)" stroke="#f87171" stroke-width="1" stroke-dasharray="3"/><text x="350" y="222" text-anchor="middle" fill="#f87171" font-size="10"> TEMPORAL DEAD ZONE </text><rect x="475" y="208" width="180" height="20" rx="4" fill="rgba(248,113,113,0.15)" stroke="#f87171" stroke-width="1" stroke-dasharray="3"/><text x="565" y="222" text-anchor="middle" fill="#f87171" font-size="10"> TEMPORAL DEAD ZONE </text><!-- Redeclaration --><text x="135" y="255" text-anchor="middle" fill="#e8eaed" font-size="11">Can redeclare </text><text x="350" y="255" text-anchor="middle" fill="#e8eaed" font-size="11">Cannot redeclare </text><text x="565" y="255" text-anchor="middle" fill="#e8eaed" font-size="11">Cannot redeclare </text><!-- Reassignment --><text x="135" y="280" text-anchor="middle" fill="#e8eaed" font-size="11">Can reassign </text><text x="350" y="280" text-anchor="middle" fill="#e8eaed" font-size="11">Can reassign </text><text x="565" y="280" text-anchor="middle" fill="#e8eaed" font-size="11">Cannot reassign </text><!-- Code example section --><rect x="40" y="300" width="620" height="140" rx="8" fill="#1a1d28" stroke="var(--border)"/><text x="350" y="322" text-anchor="middle" fill="#9aa0b0" font-size="11">Code Example -- What the engine sees after hoisting</text><text x="60" y="348" fill="#abb2bf" font-size="10" font-family="monospace">// What you write:</text><text x="60" y="368" fill="#e8eaed" font-size="10" font-family="monospace">console.log(a); var a = 1;     // -> undefined</text><text x="60" y="388" fill="#e8eaed" font-size="10" font-family="monospace">console.log(b); let b = 2;     // -> ReferenceError (TDZ)</text><text x="60" y="408" fill="#e8eaed" font-size="10" font-family="monospace">console.log(c); const c = 3;   // -> ReferenceError (TDZ)</text><text x="60" y="428" fill="#e8eaed" font-size="10" font-family="monospace">foo(); function foo() {}       // -> 'foo' works (full hoist)</text></svg><div class="diagram-caption">Side-by-side comparison of var, let, and const hoisting behavior. All three are hoisted, but var is initialized to undefined while let/const remain in the Temporal Dead Zone until their declaration is reached.</div>`,codeExamples:[{title:"var Hoisting -- The 'undefined' Surprise",useCase:"Understanding var behavior",code:`function hoistingExample() {
  console.log(message); // undefined -- not ReferenceError!
  var message = 'Hello';
  console.log(message); // 'Hello'

  // The above is interpreted as:
  // var message;
  // console.log(message); // undefined
  // message = 'Hello';
  // console.log(message); // 'Hello'
}

hoistingExample();`,description:"The var declaration is hoisted to the top of the function scope and initialized with undefined. The assignment stays in place. This can lead to confusing bugs."},{title:"let TDZ -- Early Access Prevention",useCase:"Safe variable usage",code:`function tdzExample() {
  // console.log(x); // Would throw ReferenceError (TDZ)
  let x = 10;
  console.log(x); // 10

  {
    // console.log(y); // Would throw ReferenceError (TDZ)
    const y = 20;
    console.log(y); // 20
    // y = 30; // TypeError: Assignment to constant variable
  }

  // console.log(y); // ReferenceError: y is not defined (block scoped)
}

tdzExample();`,description:"let and const are hoisted but inaccessible until the declaration. The TDZ prevents accessing variables before initialization, catching bugs early."},{title:"Function Declaration Hoisting vs Function Expression",useCase:"Call before definition",code:`// Function Declaration -- fully hoisted
sayHello(); // 'Hello!'

function sayHello() {
  console.log('Hello!');
}

// Function Expression -- only variable is hoisted
// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
  console.log('Goodbye!');
};

sayGoodbye(); // 'Goodbye!' (works after assignment)

// Arrow Function Expression
// greet(); // ReferenceError: TDZ (const)
const greet = () => console.log('Hi!');
greet(); // 'Hi!'`,description:"Function declarations are fully hoisted (definition + body). Function expressions follow the hoisting rules of their binding keyword (var -> undefined, let/const -> TDZ)."},{title:"Block Scope with let/const in Loops",useCase:"Loop variable isolation",code:`// var -- shares one binding across all iterations
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 100);
}
// Output: var: 3, var: 3, var: 3

// let -- creates a new binding per iteration
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 100);
}
// Output: let: 0, let: 1, let: 2

// const -- also block-scoped, but can't increment
// for (const k = 0; k < 3; k++) {} // TypeError: Assignment to constant

// With const + for...of:
const items = ['a', 'b', 'c'];
for (const item of items) {
  console.log(item); // 'a', 'b', 'c' (new binding each iteration)
}`,description:"var in loops creates a single function-scoped binding. let creates a new block-scoped binding per iteration, which is why closures capture the correct value."},{title:"Hoisting with Classes and typeof",useCase:"Edge cases & gotchas",code:`// typeof before declaration -- tricky!
console.log(typeof myVar); // 'undefined' (var hoisted)
console.log(typeof myLet); // 'undefined' (not ReferenceError!)
console.log(typeof myFunc); // 'function' (fully hoisted)
// console.log(typeof MyClass); // ReferenceError: TDZ

var myVar = 1;
let myLet = 2;
function myFunc() {}
class MyClass {}

// Edge: typeof on undeclared variable returns 'undefined'
// But accessing an undeclared variable throws ReferenceError
// console.log(nonexistent); // ReferenceError
console.log(typeof nonexistent); // 'undefined' (safe check)

// Class expression with const
const User = class {
  constructor(name) { this.name = name; }
};
const user = new User('Alice');
console.log(user.name); // 'Alice'`,description:"typeof is a safe check for undeclared variables but will still throw for let/const in TDZ. Classes are like let/const -- hoisted but in TDZ."}],mcqQuestions:[{question:"What is the output? console.log(a); var a = 5; console.log(a);",options:["ReferenceError, 5","5, 5","undefined, 5","ReferenceError, ReferenceError"],answer:2,explanation:"var a is hoisted and initialized to undefined. First console.log outputs undefined. Then a = 5 assigns the value. Second console.log outputs 5."},{question:"What is the output? { console.log(x); let x = 10; }",options:["undefined","10","ReferenceError","null"],answer:2,explanation:"let x is hoisted but in the Temporal Dead Zone until the declaration is reached. Accessing it before the declaration throws a ReferenceError."},{question:"Which of the following is NOT hoisted?",options:["var declaration","function declaration","class declaration","All of the above are hoisted"],answer:3,explanation:"var declarations, function declarations, and class declarations are all hoisted. However, class declarations (like let/const) are in the TDZ until initialized."},{question:"What does this output? function test() { return bar(); var bar = function() { return 1; }; function bar() { return 2; } } console.log(test());",options:["1","2","undefined","TypeError"],answer:1,explanation:"Function declarations are hoisted above var. So the function bar() { return 2; } is hoisted first, then var bar (hoisted but ignored since bar already exists), then bar = function() { return 1; } overwrites it. So bar() returns 1."},{question:"Which keyword creates function-scoped variables?",options:["let","const","var","Both let and const"],answer:2,explanation:"var creates function-scoped variables. let and const create block-scoped variables."},{question:"What does this log? if (true) { var x = 10; let y = 20; } console.log(x); console.log(y);",options:["10, 20","10, ReferenceError","ReferenceError, ReferenceError","undefined, undefined"],answer:1,explanation:"var x is function-scoped (or global), so it's accessible outside the block. let y is block-scoped to the if block, so accessing it outside throws ReferenceError."},{question:"What is the TDZ (Temporal Dead Zone)?",options:["The time between entering scope and variable declaration for let/const","The time between variable declaration and assignment","The period when a variable is garbage collected","The delay in hoisting for function expressions"],answer:0,explanation:"The TDZ is the period from entering the scope (where let/const are hoisted) until the actual declaration line is executed. During this time, the variable cannot be accessed."},{question:"What will this code output? var x = 1; function foo() { console.log(x); var x = 2; } foo();",options:["1","2","undefined","ReferenceError"],answer:2,explanation:"Inside foo(), var x is hoisted to the top of the function scope (initialized to undefined), shadowing the global x. So console.log(x) logs undefined."},{question:"What is the correct execution order when JavaScript processes 'var x = 5;'?",options:["Allocation -> Declaration -> Initialization -> Assignment","Declaration -> Assignment -> Initialization","Declaration + Initialization (hoisted) -> Assignment (in place)","Assignment -> Hoisting -> Declaration"],answer:2,explanation:"During compilation: var x is hoisted and initialized to undefined. During execution: x = 5 assigns the value at the original line."},{question:"What does this code log? console.log(typeof foo); if (true) { function foo() {} } console.log(typeof foo);",options:["'undefined', 'function'","'function', 'function'","'undefined', 'undefined'","ReferenceError"],answer:1,explanation:"In non-strict mode, function declarations inside blocks are hoisted to the enclosing function/global scope. Both console.log calls see the function."}]};export{e as hoisting};
