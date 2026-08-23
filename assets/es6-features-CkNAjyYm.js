const e={title:"ES6+ Features Overview",difficulty:"beginner",estimatedMinutes:30,tldr:["ES6 (ES2015) was a <strong>major update</strong> to JavaScript, introducing <strong>classes, modules, arrow functions, promises, template literals, destructuring, spread/rest, let/const, and more</strong>.","Subsequent yearly releases (ES2016–ES2024) added <strong>async/await, optional chaining, nullish coalescing, array methods, and other improvements</strong>.","ES6+ features make JavaScript code more <strong>readable, maintainable, and powerful</strong> — they are essential for modern development.","Key themes: <strong>better syntax</strong> (arrow functions, template literals), <strong>better organization</strong> (modules, classes), <strong>better async</strong> (promises, async/await), and <strong>better data handling</strong> (Map, Set, Symbol, typed arrays)."],laymanDefinition:"Imagine you've been driving a car from 1995. It works, but it lacks modern features — no GPS, no backup camera, no Bluetooth. Then, in 2015, the car company releases a massive upgrade: GPS navigation, voice control, automatic parking, and smartphone integration. That's ES6. And every year since, they add smaller improvements — better voice recognition, lane assist, etc. (ES2016 through ES2024). You can still drive the old car, but the new one makes everything easier, safer, and more enjoyable. That's what ES6+ does for JavaScript.",deepDive:[{heading:"ES6 Core Features (2015)",text:"ES6 introduced: let/const (block-scoped variables), arrow functions (shorter syntax, lexical this), classes (syntactic sugar over prototypes), template literals (interpolated strings), destructuring (extract values from arrays/objects), spread/rest operators, default parameters, enhanced object literals, for...of loops, Map/Set/WeakMap/WeakSet, Symbol, Promises, generators (function*), modules (import/export), iterators, and Proxy/Reflect."},{heading:"ES2016–ES2017 — Async Revolution",text:"ES2016 added Array.prototype.includes and the exponentiation operator (**). ES2017 was a landmark year with async/await (syntactic sugar over Promises), Object.values/Object.entries, string padding (padStart/padEnd), trailing commas in function parameters, and SharedArrayBuffer/Atomics."},{heading:"ES2018–ES2020 — Object and Async Improvements",text:"ES2018 added rest/spread for objects, Promise.prototype.finally, async iteration (for await...of), and RegExp improvements. ES2019 added Array.flat/flatMap, Object.fromEntries, and optional catch binding. ES2020 introduced the nullish coalescing operator (??), optional chaining (?.), BigInt, globalThis, dynamic import, Promise.allSettled, and String.matchAll."},{heading:"ES2021–ES2024 — Ongoing Refinements",text:"ES2021 added String.replaceAll, Promise.any, logical assignment operators (&&=, ||=, ??=), and numeric separators. ES2022 added class fields (public/private), top-level await, Array/RegExp.hasIndices, and static class blocks. ES2023 added Array.findLast/findLastIndex, Hashbang grammar, and immutable array methods (toSorted, toReversed, toSpliced, with). ES2024 added groupBy (Map.groupBy, Object.groupBy), Promise.withResolvers, and RegExp v flag."},{heading:"Modern JavaScript — Transpilation and Polyfills",text:"While modern engines support most ES6+ features, production code often uses transpilers (Babel) to convert modern syntax to ES5 for older browser support. Polyfills (core-js) provide runtime implementations for missing features. However, modern development increasingly targets evergreen browsers, reducing the need for transpilation."}],interviewAnswer:"ES6 (ES2015) was a transformative update to JavaScript, introducing let/const, arrow functions, classes, template literals, destructuring, spread/rest, modules, Promises, generators, Map/Set/Symbol, and more. Subsequent yearly releases added async/await (ES2017), async iteration and rest/spread for objects (ES2018), flat/flatMap and Object.fromEntries (ES2019), optional chaining and nullish coalescing (ES2020), logical assignment operators and replaceAll (ES2021), class fields and top-level await (ES2022), findLast and immutable array methods (ES2023), and groupBy with Promise.withResolvers (ES2024). Key themes across releases: better syntax ergonomics, improved async patterns, enhanced data structures, and more expressive object/array operations.",interviewQuestions:[{question:"What major features did ES6 (ES2015) introduce?",answer:"let/const, arrow functions, classes, template literals, destructuring, spread/rest, default parameters, enhanced object literals, for...of, Map/Set/WeakMap/WeakSet, Symbol, Promises, generators, modules, iterators, Proxy/Reflect."},{question:"What is the difference between let, const, and var?",answer:"var is function-scoped and hoisted. let/const are block-scoped and not hoisted (TDZ). const prevents reassignment but not mutation of objects/arrays."},{question:"What is the arrow function's key difference from regular functions?",answer:"Arrow functions have lexical 'this' (inherited from enclosing scope), cannot be used as constructors (no new), and have no arguments object."},{question:"What does optional chaining (?.) do?",answer:"Optional chaining safely accesses nested properties: obj?.prop?.nested. Returns undefined if any intermediate value is null/undefined instead of throwing."},{question:"What is the nullish coalescing operator (??)?",answer:"It returns the right-hand side only if the left-hand side is null or undefined, not for other falsy values like 0, '', or false."},{question:"What did ES2017 add?",answer:"async/await, Object.values/Object.entries, string padding (padStart/padEnd), trailing commas in function parameters."},{question:"What did ES2020 add?",answer:"Optional chaining (?.), nullish coalescing (??), BigInt, globalThis, dynamic import, Promise.allSettled, String.matchAll."},{question:"What is the difference between Promise.all and Promise.allSettled?",answer:"Promise.all rejects immediately if any promise rejects. Promise.allSettled waits for all promises to settle (resolve or reject) and returns results with status."},{question:"What did ES2022 add?",answer:"Class fields (public/private with #), top-level await (await at module top level without async function), static class blocks, and RegExp.hasIndices."},{question:"What did ES2023 add?",answer:"Array.findLast/findLastIndex, immutable array methods (toSorted, toReversed, toSpliced, with), and Hashbang grammar (#! for CLI scripts)."}],diagramSvg:'<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">ES6+ Timeline — Major Features by Year</text><rect x="30" y="65" width="640" height="40" rx="4" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="350" y="80" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">ES2015 (ES6)</text><text x="350" y="95" text-anchor="middle" fill="#9aa0b0" font-size="10">let/const, arrow, classes, modules, Promise, Map/Set, Symbol, destructuring, spread/rest</text><rect x="30" y="115" width="640" height="35" rx="4" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="350" y="130" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">ES2017</text><text x="350" y="144" text-anchor="middle" fill="#9aa0b0" font-size="10">async/await, Object.values/entries, string padStart/padEnd</text><rect x="30" y="160" width="640" height="35" rx="4" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="350" y="175" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">ES2020</text><text x="350" y="189" text-anchor="middle" fill="#9aa0b0" font-size="10">Optional chaining (?.), nullish coalescing (??), BigInt, globalThis</text><rect x="30" y="205" width="640" height="35" rx="4" fill="#1a1d28" stroke="#e64745" stroke-width="1.5"/><text x="350" y="220" text-anchor="middle" fill="#e64745" font-size="12" font-weight="bold">ES2022</text><text x="350" y="234" text-anchor="middle" fill="#9aa0b0" font-size="10">Class fields (public/private #), top-level await, static blocks</text><rect x="30" y="250" width="640" height="35" rx="4" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="350" y="265" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">ES2023</text><text x="350" y="279" text-anchor="middle" fill="#9aa0b0" font-size="10">findLast/findLastIndex, toSorted/toReversed/toSpliced/with</text><rect x="30" y="295" width="640" height="35" rx="4" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="350" y="310" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">ES2024</text><text x="350" y="324" text-anchor="middle" fill="#9aa0b0" font-size="10">Map.groupBy, Object.groupBy, Promise.withResolvers</text><text x="350" y="360" text-anchor="middle" fill="#9aa0b0" font-size="11">Modern JavaScript = ES6+ features with Babel/TypeScript for transpilation</text><text x="350" y="378" text-anchor="middle" fill="#9aa0b0" font-size="11">Yearly releases since ES2015 keep the language evolving</text></svg>',codeExamples:[{title:"ES6 — let/const, Arrow Functions, Template Literals",useCase:"Core syntax improvements from ES6",code:`// let/const — block scoping
const PI = 3.14159;
let counter = 0;

if (true) {
  let blockScoped = 'only in this block';
  var functionScoped = 'leaks out';
}
// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // 'leaks out'

// Arrow functions — shorter, lexical this
const double = (n) => n * 2;
const greet = (name) => 'Hello, ' + name;
console.log(double(5)); // 10
console.log(greet('Alice')); // 'Hello, Alice'

// Lexical this in arrow functions
function Timer() {
  this.seconds = 0;
  // Arrow captures this from enclosing scope
  setInterval(() => {
    this.seconds++;
    // 'this' refers to Timer instance
  }, 1000);
}

// Template literals — string interpolation
const name = 'Bob';
const age = 30;
console.log(\`My name is \${name} and I am \${age} years old.\`);

// Multi-line strings
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;

// Default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));    // 5 (b defaults to 1)
console.log(multiply(5, 2)); // 10`,description:"ES6 introduced let/const for block scoping, arrow functions for concise syntax with lexical this, template literals for interpolation."},{title:"ES6 — Destructuring and Spread/Rest",useCase:"Pattern matching and collection operations",code:`// Array destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;
console.log(x, y); // 10 20

// Swapping without temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Object destructuring
const user = { name: 'Alice', age: 30, email: 'alice@example.com' };
const { name, age: userAge, ...rest } = user;
console.log(name);    // 'Alice'
console.log(userAge); // 30
console.log(rest);    // { email: 'alice@example.com' }

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Object spread
const defaults = { theme: 'light', lang: 'en' };
const overrides = { theme: 'dark' };
const config = { ...defaults, ...overrides };
console.log(config); // { theme: 'dark', lang: 'en' }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15`,description:"Destructuring extracts values from arrays/objects. Spread expands iterables. Rest collects remaining parameters or properties."},{title:"ES6+ — Promises and async/await",useCase:"Modern asynchronous programming",code:`// ES6: Promise
const fetchData = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ id: 1, name: 'Data' });
  }, 1000);
});

fetchData.then(function(data) {
  console.log(data); // { id: 1, name: 'Data' }
}).catch(function(err) {
  console.error(err);
});

// ES2017: async/await
async function loadData() {
  try {
    const data = await fetchData;
    console.log(data); // { id: 1, name: 'Data' }
    return data;
  } catch (err) {
    console.error('Failed:', err);
    throw err;
  }
}

loadData();

// ES2018: Promise.finally
fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Operation complete'));

// ES2020: Promise.allSettled
const promises = [fetchData, fetchData, Promise.reject('Error')];
Promise.allSettled(promises).then(function(results) {
  results.forEach(function(r) {
    console.log(r.status, r.value || r.reason);
  });
});

// ES2021: Promise.any (first fulfilled)
Promise.any([Promise.reject('Err'), fetchData])
  .then(data => console.log('First success:', data));

// ES2022: top-level await (in modules)
// const data = await fetch('https://api.example.com/data');
// Works at module top level without async wrapper`,description:"Promises (ES6) provide structured async handling. async/await (ES2017) makes async code read like synchronous. Later ES versions added Promise combinators."},{title:"ES2020 — Optional Chaining and Nullish Coalescing",useCase:"Safe property access and default values",code:`// Before ES2020 — verbose null checks
function getStreetName(user) {
  if (user && user.address && user.address.street) {
    return user.address.street;
  }
  return 'Unknown';
}

// ES2020: Optional chaining (?.)
function getStreetName2020(user) {
  return user?.address?.street ?? 'Unknown';
}

console.log(getStreetName2020(null));            // 'Unknown'
console.log(getStreetName2020({}));              // 'Unknown'
console.log(getStreetName2020({ address: null })); // 'Unknown'
console.log(getStreetName2020({ address: { street: 'Main St' } }));
// 'Main St'

// Nullish coalescing (??) — only for null/undefined
const value = 0;
console.log(value || 'default');  // 'default' (0 is falsy)
console.log(value ?? 'default');  // 0 (only null/undefined triggers default)

// Practical: optional chaining with arrays
const firstElement = arr?.[0];
const methodResult = obj?.method?.();

// ES2021: Logical assignment operators
let x = null;
x ??= 'default'; // Assigns if x is null/undefined

let y = 0;
y ||= 10; // Assigns if y is falsy

let z = true;
z &&= false; // Assigns if z is truthy`,description:"Optional chaining (?.) safely accesses nested properties. Nullish coalescing (??) provides defaults only for null/undefined, not other falsy values."},{title:"ES2022–2024 — Recent Additions",useCase:"Latest JavaScript features",code:`// ES2022: Class fields (public/private)
class Person {
  // Public field
  name = 'Anonymous';

  // Private field (truly private, not in prototype)
  #ssn;

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }

  // Static initialization block
  static {
    console.log('Person class initialized');
    this.defaultName = 'Unknown';
  }
}

const p = new Person('Alice', '123-45-6789');
console.log(p.name); // 'Alice'
// console.log(p.#ssn); // SyntaxError!
console.log(p.getSSN()); // '123-45-6789'

// ES2022: Top-level await (in modules)
// const response = await fetch('/api/config');
// const config = await response.json();

// ES2023: Immutable array methods
const arr = [3, 1, 2];
const sorted = arr.toSorted(); // Returns new sorted array
console.log(sorted); // [1, 2, 3]
console.log(arr);    // [3, 1, 2] (unchanged)

const reversed = arr.toReversed();
const spliced = arr.toSpliced(1, 1, 99);
const updated = arr.with(0, 100);

// ES2023: findLast/findLastIndex
const nums = [5, 12, 8, 130, 44];
const lastEven = nums.findLast(n => n % 2 === 0);
console.log(lastEven); // 44

// ES2024: Object.groupBy
const inventory = [
  { name: 'apple', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'banana', type: 'fruit' }
];

const grouped = Object.groupBy(inventory, item => item.type);
console.log(grouped);
// { fruit: [{ name: 'apple' }, { name: 'banana' }],
//   vegetable: [{ name: 'carrot' }] }

// ES2024: Promise.withResolvers
const { promise, resolve, reject } = Promise.withResolvers();
// Equivalent to: new Promise((res, rej) => { resolve = res; reject = rej; })`,description:"Recent ES versions added private class fields, top-level await, immutable array methods, findLast, Object.groupBy, and Promise.withResolvers."}],mcqQuestions:[{question:"What year was ES6 (major JavaScript update) released?",options:["2009","2015","2017","2020"],answer:1,explanation:"ES6 (also called ES2015) was released in 2015 and was the most significant update to JavaScript."},{question:"Which feature was NOT introduced in ES6?",options:["Arrow functions","let/const","Async/await","Classes"],answer:2,explanation:"Async/await was introduced in ES2017 (ES8). ES6 introduced arrow functions, let/const, classes, Promises, modules, etc."},{question:"What is the key difference between var and let?",options:["var is block-scoped, let is function-scoped","let is block-scoped, var is function-scoped","They are identical","let cannot be reassigned"],answer:1,explanation:"let is block-scoped (visible only within the block). var is function-scoped (visible throughout the function)."},{question:"What does the optional chaining operator (?.) do?",options:["Throws if property is null","Returns undefined if any intermediate value is null/undefined","Creates a new property","Chains method calls"],answer:1,explanation:"Optional chaining (?.) safely accesses nested properties, returning undefined if any intermediate value is null or undefined."},{question:"What does the nullish coalescing operator (??) do?",options:["Returns right side for any falsy value","Returns right side only for null/undefined","Throws on null","Coerces values to numbers"],answer:1,explanation:"?? returns the right operand only if the left operand is null or undefined, not for other falsy values like 0 or ''."},{question:"Which ES version introduced async/await?",options:["ES6 (2015)","ES2017","ES2020","ES2022"],answer:1,explanation:"Async/await was introduced in ES2017 as part of the async revolution in JavaScript."},{question:"What does ES2023's toSorted() do differently from sort()?",options:["It sorts in reverse","It returns a new sorted array without mutating the original","It sorts faster","It sorts by string length"],answer:1,explanation:"toSorted() returns a new sorted array and does not modify the original. sort() mutates the original array in place."},{question:"What is the difference between Promise.all and Promise.allSettled?",options:["Promise.all rejects on first failure; Promise.allSettled waits for all to complete","They are identical","Promise.all accepts arrays; Promise.allSettled accepts objects","Promise.allSettled is faster"],answer:0,explanation:"Promise.all short-circuits on first rejection. Promise.allSettled waits for all promises to settle and returns results with status."},{question:"How do you declare a private field in an ES2022 class?",options:["private field;","_field;","#field;","priv field;"],answer:2,explanation:"Private class fields use the # prefix: #field. They are truly private and inaccessible outside the class."},{question:"What does ES2024's Object.groupBy() do?",options:["Groups array elements by a key function","Sorts objects alphabetically","Merges two objects","Filters object properties"],answer:0,explanation:"Object.groupBy() groups elements of an iterable based on a callback function that returns the group key."}]};export{e as es6_features};
