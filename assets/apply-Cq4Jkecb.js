const e={title:"apply()",difficulty:"intermediate",estimatedMinutes:20,tldr:["<code>apply()</code> is a method on all functions that calls the function with a specified <code>this</code> value and arguments provided as an <strong>array</strong> (or array-like object).","It is nearly identical to <code>call()</code>, except <code>call()</code> expects arguments <strong>individually</strong> while <code>apply()</code> expects them as an <strong>array</strong>.","Syntax: <code>fn.apply(thisArg, [argsArray])</code> — the function is invoked <strong>immediately</strong>.","Common use cases: spreading an array as arguments to a function, method borrowing with dynamic argument lists, and variadic function calls."],laymanDefinition:"Imagine you are a chef with a recipe (the function) that needs ingredients (arguments). call() is like handing the ingredients one by one to the chef. apply() is like handing the chef a full shopping bag with all the ingredients inside. When you have your arguments already in an array (like a shopping list), apply() is the perfect tool — you just hand over the whole array at once. This is especially useful when you don't know in advance how many ingredients you'll have, or when they naturally come as a list.",deepDive:[{heading:"How apply() Works Internally",text:"When fn.apply(thisArg, argsArray) is called, the engine performs a [[Call]] operation on fn with the specified 'this'. The second argument must be an array-like object (having a length property and indexed elements). If it is null or undefined, no arguments are passed. The engine iterates over the array-like and destructures its elements as positional arguments to the function. Like call(), if thisArg is null/undefined in non-strict mode, 'this' defaults to the global object."},{heading:"apply() with Variadic Functions",text:"Variadic functions (functions that accept any number of arguments) like Math.max, Math.min, or Array.prototype.push are natural candidates for apply(). Math.max.apply(null, [1, 5, 3]) returns 5. Without apply(), you would need to know all arguments at call time. apply() lets you pass an array of unknown length. In ES6, the spread operator (...arr) provides a cleaner alternative: Math.max(...arr)."},{heading:"apply() vs Spread Operator",list:["<strong>apply():</strong> Works in all JavaScript environments, including older browsers. Sets 'this' in addition to spreading arguments.","<strong>Spread operator (...):</strong> Cleaner syntax, only available in ES6+. Does not set 'this' — just spreads arguments. Generally preferred in modern code.","<strong>When to use apply():</strong> When you need to both set 'this' and spread arguments from an array, or when targeting older environments.","<strong>When to use spread:</strong> When you only need to spread arguments (no this binding needed), which is the most common case."]},{heading:"apply() for Array Concatenation and Pushing",text:"Before ES6 spread, apply() was the standard way to concatenate arrays or push multiple values at once. Array.prototype.push.apply(arr1, arr2) pushes all elements of arr2 into arr1 in a single operation. Similarly, Array.prototype.concat.apply([], arrays) could merge multiple arrays. Modern code uses [...arr1, ...arr2] or arr1.push(...arr2)."},{heading:"The argsArray Limitation",text:"The second argument to apply() must be array-like (having length and indices). It can be a real array, the arguments object, a NodeList, or any custom object with a length property. If the argsArray is very large (tens of thousands of elements), apply() may throw a 'Maximum call stack size exceeded' error because the engine tries to spread all elements as individual arguments. For extremely large arrays, use a loop-based approach instead."}],interviewAnswer:"apply() is a function method that immediately invokes a function with a specified 'this' value and an array (or array-like) of arguments. Its primary use cases are: 1) Calling variadic functions with array data (e.g., Math.max.apply(null, numbers)). 2) Method borrowing when arguments are in array form. 3) Array concatenation and pushing multiple values. 4) Forwarding arguments from one function to another. The key distinction from call() is that apply() accepts arguments as an array. In modern JavaScript, the spread operator has largely replaced apply() for argument spreading, but apply() remains relevant when you need to simultaneously set 'this' and spread arguments, or when working with older codebases.",interviewQuestions:[{question:"What does apply() do?",answer:"apply() invokes a function with a specified 'this' value and arguments provided as an array (or array-like object). Syntax: fn.apply(thisArg, [argsArray]). It immediately executes the function."},{question:"What is the difference between apply() and call()?",answer:"Both invoke a function immediately with a specified 'this'. The difference is argument format: call() takes arguments individually (fn.call(obj, 1, 2, 3)), while apply() takes them as an array (fn.apply(obj, [1, 2, 3])). Use call() when you know the arguments at call time and apply() when arguments are in an array."},{question:"How do you find the maximum value in an array using apply()?",answer:`Math.max.apply(null, array) returns the maximum value: <code>const nums = [1, 5, 3, 9, 2];
console.log(Math.max.apply(null, nums)); // 9</code> Modern alternative: Math.max(...nums).`},{question:"What happens if the argsArray is very large?",answer:"If the argsArray has tens of thousands of elements, apply() may throw a 'Maximum call stack size exceeded' error. This happens because JavaScript engines have a limit on the number of function arguments. For large arrays, iterate in chunks or use a loop instead."},{question:"How do you use apply() for array concatenation?",answer:`Array.prototype.push.apply(arr1, arr2) pushes all elements of arr2 into arr1: <code>const a = [1, 2];
const b = [3, 4];
Array.prototype.push.apply(a, b);
console.log(a); // [1, 2, 3, 4]</code> Modern alternative: a.push(...b).`},{question:"What qualifies as a valid second argument for apply()?",answer:"The second argument must be array-like: an object with a 'length' property and numeric indices. Real arrays, the 'arguments' object, NodeLists, HTMLCollections, and custom objects like { 0: 'a', 1: 'b', length: 2 } all work. null or undefined means no arguments are passed."},{question:"How is apply() used for forwarding arguments?",answer:`apply() can forward arguments from one function to another: <code>function wrapper() {
  return originalFn.apply(this, arguments);
}</code> This preserves both 'this' and all arguments.`},{question:"What is the modern alternative to apply() for spreading arrays?",answer:"The spread operator (...): <code>Math.max(...arr)</code> instead of <code>Math.max.apply(null, arr)</code>. The spread operator is cleaner and more intuitive. apply() is still needed when you also need to specify 'this' in a single operation."},{question:"Can you use apply() with constructors?",answer:"Yes, but 'new' cannot be used with apply() directly. Use Reflect.construct() instead: <code>const instance = Reflect.construct(Fn, argsArray);</code> This is the modern equivalent of 'new' with an array of arguments."},{question:"How does apply() handle null or undefined as argsArray?",answer:"If the argsArray is null or undefined, apply() calls the function with no arguments. The function is invoked with only the specified 'this' value (or the default if thisArg is also null/undefined)."}],diagramSvg:'<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="max-width:700px;"><defs><marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#6c9fff"/></marker><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2f45"/><stop offset="100%" style="stop-color:#1a1d28"/></linearGradient></defs><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="16" font-weight="bold">Function.prototype.apply() — Flow</text><rect x="60" y="65" width="220" height="80" rx="6" fill="url(#g1)" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="90" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">fn (any function)</text><text x="170" y="110" text-anchor="middle" fill="#e8eaed" font-size="12">fn.apply(thisArg, [a, b, c])</text><line x1="280" y1="105" x2="340" y2="105" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)"/><text x="310" y="95" text-anchor="middle" fill="#fbbf24" font-size="11">.apply()</text><rect x="340" y="65" width="300" height="80" rx="6" fill="url(#g1)" stroke="#fbbf24" stroke-width="1.5"/><text x="490" y="85" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Effect on Function Execution</text><text x="490" y="108" text-anchor="middle" fill="#e8eaed" font-size="12">1. this = thisArg (explicit)</text><text x="490" y="128" text-anchor="middle" fill="#e8eaed" font-size="12">2. params: a, b, c (spread from array)</text><line x1="350" y1="155" x2="350" y2="185" stroke="#98c379" stroke-width="2" marker-end="url(#arrow)"/><rect x="80" y="185" width="560" height="80" rx="6" fill="url(#g1)" stroke="#98c379" stroke-width="1.5"/><text x="360" y="207" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">Example: Math.max.apply(null, [3, 7, 1, 9, 4])</text><text x="360" y="227" text-anchor="middle" fill="#e8eaed" font-size="12">1. this = null (not used by Math.max)</text><text x="360" y="245" text-anchor="middle" fill="#e8eaed" font-size="12">2. Arguments: 3, 7, 1, 9, 4 (array spread individually)</text><line x1="360" y1="265" x2="360" y2="295" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)"/><rect x="140" y="295" width="440" height="50" rx="25" fill="url(#g1)" stroke="#f87171" stroke-width="1.5"/><text x="360" y="320" text-anchor="middle" fill="#f87171" font-size="14">Result: 9 (Math.max(3, 7, 1, 9, 4))</text></svg>',codeExamples:[{title:"Finding Max/Min in an Array with apply()",useCase:"Variadic Functions with Array Data",code:`const numbers = [45, 12, 89, 33, 71, 56];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 89
console.log(min); // 12

// Without apply(), you'd need to manually list:
// Math.max(45, 12, 89, 33, 71, 56) — not dynamic!

// Modern alternative:
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);`,description:"Math.max and Math.min are variadic — they accept any number of arguments. apply() lets you pass array elements as individual arguments dynamically."},{title:"Pushing Multiple Values with apply()",useCase:"Array Concatenation",code:`const shoppingCart = ['apple', 'banana'];
const newItems = ['orange', 'grape', 'kiwi'];

// Push all new items at once
Array.prototype.push.apply(shoppingCart, newItems);

console.log(shoppingCart);
// ['apple', 'banana', 'orange', 'grape', 'kiwi']

// Equivalent with spread:
// shoppingCart.push(...newItems);

// Also works for merging arrays:
const merged = [];
Array.prototype.push.apply(merged, shoppingCart);
Array.prototype.push.apply(merged, ['mango', 'pear']);`,description:"apply() enables pushing multiple elements from an array into another array in one call. This was essential before ES6 spread syntax."},{title:"Forwarding Arguments Between Functions",useCase:"Decorator / Wrapper Pattern",code:`function logAndExecute(fn) {
  return function() {
    console.log('Called with:', arguments);
    const result = fn.apply(this, arguments);
    console.log('Result:', result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = logAndExecute(add);

console.log(loggedAdd(3, 4));
// 'Called with: [3, 4]'
// 'Result: 7'
// 7

// The wrapper preserves both 'this' and all arguments
const obj = { factor: 10 };
obj.multiply = function(x) { return this.factor * x; };
obj.loggedMultiply = logAndExecute(obj.multiply);
console.log(obj.loggedMultiply(5)); // 'Called with: [5]' then 'Result: 50'`,description:"apply(this, arguments) inside a wrapper perfectly forwards the call context, preserving both 'this' and all arguments to the original function."},{title:"apply() with Array-Like Objects",useCase:"Using Array Methods on Custom Objects",code:`// Custom array-like object
const arrayLike = {
  0: 'HTML',
  1: 'CSS',
  2: 'JavaScript',
  length: 3
};

// Borrow .join from Array
const joined = Array.prototype.join.apply(arrayLike, [' + ']);
console.log(joined); // 'HTML + CSS + JavaScript'

// Borrow .filter to get short names
const short = Array.prototype.filter.apply(arrayLike, [
  item => item.length < 4
]);
console.log(short); // ['CSS']

// Note: apply() modifies the original array-like
Array.prototype.push.apply(arrayLike, ['React', 'Node']);
console.log(arrayLike.length); // 5`,description:"apply() works with any array-like object. You can borrow Array.prototype methods (join, filter, push, etc.) to operate on custom objects."},{title:"Using apply() with a Spread Argument (Modern Hybrid)",useCase:"Mixing apply and Spread",code:`function introduce(greeting, title, name) {
  return \`\${greeting}, \${title} \${name}!\`;
}

const args = ['Hello', 'Dr.', 'Smith'];

// Old way:
console.log(introduce.apply(null, args)); // 'Hello, Dr. Smith!'

// ES6+ way:
console.log(introduce(...args)); // 'Hello, Dr. Smith!'

// Hybrid: apply with spread for complex scenarios
function sumValues() {
  // arguments is array-like, spread into apply
  return Array.prototype.reduce.apply(
    arguments,
    [(sum, n) => sum + n, 0]
  );
}

console.log(sumValues(1, 2, 3, 4)); // 10`,description:"While spread is preferred in modern code, apply() is still useful when you need both 'this' binding and argument spreading, or when dealing with array-like objects."}],mcqQuestions:[{question:"What does apply() do?",options:["Creates a new function with bound arguments","Immediately invokes a function with specified this and array of args","Returns a new array","Calls a function asynchronously"],answer:1,explanation:"apply() immediately invokes the function with a specified 'this' value and an array (or array-like) of arguments."},{question:"What is the key difference between apply() and call()?",options:["apply() is faster","apply() takes arguments as an array, call() takes them individually","apply() does not accept thisArg","apply() returns a new function"],answer:1,explanation:"Both invoke immediately with specified 'this'. apply() uses an array for arguments; call() uses individual arguments."},{question:"What will the following log? console.log(Math.max.apply(null, [1, 5, 2]));",options:["1","5","2","null"],answer:1,explanation:"apply() spreads the array elements as individual arguments to Math.max. Math.max(1, 5, 2) returns 5."},{question:"What happens if you pass null as argsArray to apply()?",options:["It throws a TypeError","The function is called with no arguments","It uses the arguments from the previous call","It defaults to an empty array"],answer:1,explanation:"If argsArray is null or undefined, the function is called with no arguments."},{question:"How do you merge two arrays using apply()?",options:["arr1.concat.apply(arr1, arr2)","Array.prototype.push.apply(arr1, arr2)","arr1.apply(arr2)","arr1.merge.apply(arr1, arr2)"],answer:1,explanation:"Array.prototype.push.apply(arr1, arr2) pushes all elements of arr2 into arr1 in a single operation."},{question:"What modern syntax has largely replaced apply() for spreading arrays?",options:["Array.from()","The spread operator (...)","Array.of()","for...of loops"],answer:1,explanation:"The spread operator (...arr) provides a cleaner alternative to apply() for most argument-spreading use cases."},{question:"Which objects can be used as the second argument to apply()?",options:["Only real arrays","Only the arguments object","Any array-like object with length and indices","Only strings"],answer:2,explanation:"Any array-like object (with length property and numeric indices) works: arrays, arguments, NodeLists, HTMLCollections, and custom objects."},{question:"How do you use apply() with constructors?",options:["new Fn.apply(obj, args)","Fn.apply(new obj, args)","Reflect.construct(Fn, args)","You cannot use apply() with constructors"],answer:2,explanation:"Reflect.construct(Fn, argsArray) is the modern way to call a constructor with an array of arguments, equivalent to 'new Fn(...args)'."},{question:"What will the following log? const arr = ['a', 'b']; Array.prototype.push.apply(arr, ['c', 'd']); console.log(arr.length);",options:["2","3","4","5"],answer:2,explanation:"push.apply adds two elements ('c', 'd') to the array. Original length was 2, now it's 4."},{question:"What problem can occur when using apply() with a very large array?",options:["The array gets reversed","Maximum call stack size exceeded error","The thisArg gets ignored","The function returns undefined"],answer:1,explanation:"JavaScript engines have a limit on function arguments. Spreading a very large array via apply() can exceed this limit and throw a stack overflow error."}]};export{e as apply};
