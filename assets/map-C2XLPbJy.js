const e={title:"JavaScript map()",difficulty:"beginner",estimatedMinutes:15,tldr:["<code>Array.map()</code> creates a <strong>new array</strong> by calling a function on every element of the original array.","It returns a new array of the <strong>same length</strong> as the original — each element is the result of the callback.","Map does <strong>not</strong> mutate the original array — it returns a new array (immutable operation).","Callback receives: <code>currentValue</code>, <code>index</code>, and the <code>original array</code> as arguments."],laymanDefinition:"Imagine you have a basket of apples and a machine that polishes each apple. You put an apple in, it comes out shiny. You put all the apples through, and you get a new basket of shiny apples. Array.map() is like that machine — it takes each element from an array, transforms it using your function, and outputs a new array with the transformed elements. The original array stays unchanged.",deepDive:[{heading:"How map() Works Internally",text:"Array.map iterates over each element in the original array, calls the callback with (element, index, array), and collects the return values into a new array. The callback's return value for each element becomes the corresponding element in the new array. The new array always has the same length as the original. Map does not modify the original array."},{heading:"Map vs forEach — Key Difference",list:["<strong>map()</strong> returns a new array with transformed values. Use when you need a transformed copy of the array.","<strong>forEach()</strong> returns undefined. Use when you need to perform side effects (logging, DOM updates).","If you don't use the return value of map, use forEach instead — map without using the result is an anti-pattern."]},{heading:"The Index Parameter",text:"The second argument to the map callback is the current index. Useful for: generating sequential IDs, alternating row colors, or accessing the corresponding element in another array. Example: arr.map((item, index) => `${index + 1}. ${item}`) creates a numbered list."},{heading:"Map with Object Arrays",text:"Map is commonly used to extract or transform properties from an array of objects: users.map(u => u.name) extracts all names. users.map(u => ({ ...u, role: 'user' })) adds a property to each object. When returning an object in concise arrow, wrap in parentheses: users.map(u => ({ name: u.name, email: u.email }))."},{heading:"Performance and When to Use Alternatives",text:"Map is O(n) — it visits every element once. For simple transformations, map is optimal. However: use filter then map if you need both filtering AND transformation (or use flatMap). Use reduce for complex accumulations. Use a for loop for early exit (map cannot break/continue). Use flatMap to flatten nested arrays after mapping."}],interviewAnswer:"Array.map() is a method that creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array. The callback receives (currentValue, index, array). Map returns a new array of the same length. It is the standard tool for transforming array data. Common interview: implement map manually, explain difference from forEach, and use cases like extracting object properties or transforming data.",interviewQuestions:[{question:"What does Array.map() do?",answer:"map() creates a new array by calling a function on every element of the original array. The callback's return values become the elements of the new array."},{question:"Does map() mutate the original array?",answer:"No. map() returns a new array. The original array remains unchanged. This is a key principle of immutable data operations."},{question:"What is the difference between map() and forEach()?",answer:"map() returns a new array with transformed values. forEach() returns undefined and is used for side effects. If you aren't using map's return value, use forEach instead."},{question:"What arguments does the map callback receive?",answer:"Three arguments: currentValue (the current element), index (the index of the current element), and array (the original array being mapped)."},{question:"How do you extract a property from an array of objects using map?",answer:"const names = users.map(user => user.name). This creates an array of name values from an array of user objects."},{question:"How do you implement a simple map function?",answer:"function map(arr, fn) { const result = []; for (let i = 0; i < arr.length; i++) { result.push(fn(arr[i], i, arr)); } return result; }"},{question:"What happens if you don't return a value from the map callback?",answer:"The element in the new array will be undefined. map always creates a new array with the same length, filling it with whatever the callback returns (or undefined if nothing is returned)."},{question:"Can map() be chained with other array methods?",answer:"Yes. Map returns an array, so you can chain: arr.filter(x => x > 0).map(x => x * 2).reduce(...). This is a common functional programming pattern."},{question:"What is the type of thisArg in map?",answer:"map accepts an optional second argument: thisArg. If provided, it is used as 'this' inside the callback. Rarely used in modern code (arrow functions handle this differently)."},{question:"What is the difference between map and flatMap?",answer:"flatMap first maps each element using a function, then flattens the result by one level. It's equivalent to arr.map(fn).flat() but more efficient."}],diagramSvg:`<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Array.map() Transformation</text><rect x="50" y="70" width="220" height="180" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="160" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Original Array</text><rect x="65" y="105" width="190" height="30" rx="4" fill="var(--border)"/><text x="160" y="125" text-anchor="middle" fill="#e8eaed" font-size="11">[1, 2, 3, 4, 5]</text><text x="160" y="155" fill="#9aa0b0" font-size="10">Each element → callback</text><text x="160" y="175" fill="#9aa0b0" font-size="10">Callback: n =&gt; n * 2</text><text x="160" y="195" fill="#fbbf24" font-size="10">1→2, 2→4, 3→6, 4→8, 5→10</text><line x1="270" y1="160" x2="330" y2="160" stroke="#fbbf24" stroke-width="2"/><rect x="330" y="70" width="220" height="180" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="440" y="93" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">New Array (returned)</text><rect x="345" y="105" width="190" height="30" rx="4" fill="var(--border)"/><text x="440" y="125" text-anchor="middle" fill="#e8eaed" font-size="11">[2, 4, 6, 8, 10]</text><text x="440" y="165" fill="#98c379" font-size="10">Same length as original</text><text x="440" y="185" fill="#98c379" font-size="10">Original NOT mutated</text><text x="440" y="205" fill="#98c379" font-size="10">Elements are callbacks' returns</text><text x="350" y="280" fill="#9aa0b0" font-size="11">const result = arr.map(x =&gt; x * 2);</text><text x="350" y="300" fill="#9aa0b0" font-size="11">result ≠ arr (different references)</text></svg>`,codeExamples:[{title:"Basic Number Transformation",useCase:"Converting array values",code:`const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

const asStrings = numbers.map(n => 'Number ' + n);
console.log(asStrings);
// ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']

// Original is unchanged
console.log(numbers); // [1, 2, 3, 4, 5]`,description:"Map transforms each element. The callback can be a regular function or arrow. The original array remains unchanged."},{title:"Extracting and Transforming Object Properties",useCase:"Working with arrays of objects",code:`const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Extract a single property
const names = users.map(function(u) { return u.name; });
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Transform objects
const summaries = users.map(function(u) {
  return {
    label: u.name + ' (' + u.email + ')',
    value: u.id
  };
});
console.log(summaries);
// [{ label: 'Alice (alice@example.com)', value: 1 }, ...]

// Add computed properties (immutable)
const withStatus = users.map(function(u) {
  return { ...u, status: 'active' };
});
console.log(withStatus[0].status); // 'active'

// Arrow function concise
const emails = users.map(u => u.email);
console.log(emails); // ['alice@example.com', 'bob@example.com', ...]`,description:"Map excels at extracting and transforming object properties. Use spread ({...obj}) to add properties immutably. Be careful to wrap object returns in () with arrow functions."},{title:"Using the Index Parameter",useCase:"Creating numbered lists or alternating styles",code:`const items = ['Apple', 'Banana', 'Cherry', 'Date'];

// Numbered list
const numbered = items.map(function(item, index) {
  return (index + 1) + '. ' + item;
});
console.log(numbered);
// ['1. Apple', '2. Banana', '3. Cherry', '4. Date']

// HTML list items (using index for keys)
const listItems = items.map(function(item, index) {
  return '<li key="' + index + '">' + item + '</li>';
});
console.log(listItems);
// ['<li key="0">Apple</li>', ...]

// Alternating row colors
const colors = ['#f0f0f0', '#ffffff'];
const rows = items.map(function(item, i) {
  return { text: item, bgColor: colors[i % 2] };
});
console.log(rows);
// [{ text: 'Apple', bgColor: '#f0f0f0' }, ...]

// Using both value and index from another array
const prices = [1.99, 2.49, 3.29];
const itemsWithPrice = items.map(function(name, i) {
  return { name: name, price: prices[i] || 0 };
});
console.log(itemsWithPrice);
// [{ name: 'Apple', price: 1.99 }, { name: 'Banana', price: 2.49 }, ...]`,description:"The index parameter enables numbered lists, alternating styles, and synchronizing data from parallel arrays."},{title:"Chaining map with Other Methods",useCase:"Building data processing pipelines",code:`const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain: filter → map → reduce
const result = data
  .filter(function(n) { return n % 2 === 0; })   // [2, 4, 6, 8, 10]
  .map(function(n) { return n * 3; })              // [6, 12, 18, 24, 30]
  .reduce(function(sum, n) { return sum + n; }, 0); // 90

console.log(result); // 90

// Arrow version:
const result2 = data
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((s, n) => s + n, 0);

// Real-world example: process orders
const orders = [
  { id: 1, items: [{ price: 10 }, { price: 20 }] },
  { id: 2, items: [{ price: 15 }] },
  { id: 3, items: [{ price: 5 }, { price: 8 }, { price: 12 }] }
];

const totals = orders.map(function(order) {
  return {
    orderId: order.id,
    total: order.items.reduce(function(sum, item) {
      return sum + item.price;
    }, 0)
  };
});

console.log(totals);
// [{ orderId: 1, total: 30 }, { orderId: 2, total: 15 }, { orderId: 3, total: 25 }]`,description:"Map returns an array, making it chainable with filter, reduce, and other array methods. This enables clean data processing pipelines."},{title:"Manual map() Implementation",useCase:"Understanding how map works under the hood",code:`function myMap(array, callback) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    // Check if index exists (handles sparse arrays)
    if (i in array) {
      result.push(callback(array[i], i, array));
    }
  }

  return result;
}

// Test it
var numbers = [10, 20, 30, 40];
var doubled = myMap(numbers, function(n) {
  return n * 2;
});

console.log(doubled); // [20, 40, 60, 80]

// Also works with arrow functions
var tripled = myMap(numbers, n => n * 3);
console.log(tripled); // [30, 60, 90, 120]

// Edge cases
var sparse = [1, , 3];  // sparse array
var mapped = myMap(sparse, function(n) {
  return n * 10;
});
console.log(mapped); // [10, undefined, 30]
// The 'i in array' check ensures sparse slots are handled correctly`,description:"Manual map implementation creates a new array, iterates, calls the callback on each element, and collects results. The 'i in array' check handles sparse arrays."}],mcqQuestions:[{question:"What does Array.map() return?",options:["The original array modified","A new array with transformed elements","undefined","A boolean"],answer:1,explanation:"map() returns a new array where each element is the result of calling the callback on the corresponding original element."},{question:"Does map() modify the original array?",options:["Yes, it mutates it","No, it returns a new array","Only if the callback mutates elements","Only for objects"],answer:1,explanation:"map() does NOT mutate the original array. It returns a new array with the transformed values."},{question:"What will [1, 2, 3].map(x => x * 2) return?",options:["[1, 2, 3]","[2, 4, 6]","[2, 4, 6, 8]","undefined"],answer:1,explanation:"Each element is multiplied by 2: [1*2, 2*2, 3*2] = [2, 4, 6]."},{question:"What is the difference between map and forEach?",options:["They are identical","map returns a new array; forEach returns undefined","forEach is faster","map cannot use arrow functions"],answer:1,explanation:"map returns a new array. forEach returns undefined and is for side effects."},{question:"What happens if you don't return a value from map's callback?",options:["The element is skipped","The element is undefined","map throws an error","The original array is used"],answer:1,explanation:"If the callback doesn't return a value (returns undefined), the corresponding element in the new array will be undefined."},{question:"What arguments does map's callback receive?",options:["currentValue only","currentValue, index","currentValue, index, array","currentValue, index, array, thisArg"],answer:2,explanation:"The callback receives three arguments: currentValue, index, and the original array."},{question:"What is the length of the array returned by map?",options:["Always the same as the original","Sometimes shorter","Always longer","It depends on the callback"],answer:0,explanation:"map always returns a new array with the same length as the original array."},{question:"How do you extract an array of property values from objects?",options:["arr.map(obj => obj.property)","arr.filter(obj => obj.property)","arr.forEach(obj => obj.property)","arr.property"],answer:0,explanation:"Use map with a callback that returns the desired property: arr.map(obj => obj.property)."},{question:"Can map be chained with filter?",options:["Yes, map returns an array so it's chainable","No, map returns undefined","Only with promises","Only in React"],answer:0,explanation:"map returns an array, which has all array methods, so chaining works: arr.filter(fn).map(fn)."},{question:"What will [1, 2, 3].map((x, i) => x + i) return?",options:["[1, 2, 3]","[1, 3, 5]","[2, 4, 6]","[1, 2, 3, 0, 1, 2]"],answer:1,explanation:"Each element is added to its index: 1+0=1, 2+1=3, 3+2=5 → [1, 3, 5]."}]};export{e as map};
