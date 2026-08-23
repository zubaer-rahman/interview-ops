const e={title:"JavaScript filter()",difficulty:"beginner",estimatedMinutes:15,tldr:["<code>Array.filter()</code> creates a <strong>new array</strong> with all elements that pass a test implemented by the provided function.","The callback must return a <strong>truthy</strong> value for an element to be included, or a <strong>falsy</strong> value to exclude it.","Filter returns a new array — the <strong>original is not mutated</strong>. The returned array may be <strong>shorter</strong> than the original.","Callback receives: <code>currentValue</code>, <code>index</code>, and the <code>original array</code>."],laymanDefinition:"Imagine you have a bucket of mixed fruits and you want only apples. You take each fruit one at a time, check if it's an apple, and if yes, you put it in a new bucket. If not, you set it aside. Array.filter() does exactly this — it examines every item, keeps only those that pass your test, and puts them in a new array. The original bucket stays unchanged.",deepDive:[{heading:"How filter() Works",text:"Array.filter iterates over each element and calls the callback with (element, index, array). If the callback returns a truthy value, the element is included in the new array. If falsy, it's excluded. The returned array contains only the elements that passed the test, in the same order as the original. Filter does not modify the original array."},{heading:"Truthy and Falsy in filter",text:"The callback's return value is coerced to boolean. Falsy values: false, 0, '' (empty string), null, undefined, NaN. Truthy values: everything else. Common bug: returning a string from the callback — non-empty strings are truthy, so they always pass. Always ensure the callback returns a boolean expression for clarity."},{heading:"Filter vs Find vs Some",list:["<strong>filter()</strong> returns a new array of ALL matching elements. Use when you need multiple matches.","<strong>find()</strong> returns the FIRST matching element (or undefined). Use when you need a single match.","<strong>some()</strong> returns a boolean (true/false). Use when you only need to know if a match exists."]},{heading:"Chaining filter with Other Methods",text:"Filter returns an array, so it can be chained: <code>arr.filter(x => x > 0).map(x => x * 2)</code>. This is a common pattern: first filter out unwanted elements, then transform the remaining ones. Filter also chains with reduce, sort, and other array methods. For complex queries, consider combining multiple filters."},{heading:"Filter on Object Arrays",text:"Filter is commonly used with arrays of objects: users.filter(u => u.age >= 18) for adults, products.filter(p => p.inStock) for available items, orders.filter(o => o.status === 'pending') for pending orders. Multiple conditions: items.filter(i => i.price > 10 && i.category === 'electronics')."}],interviewAnswer:"Array.filter() creates a new array with elements that pass a truth test. The callback returns true to keep the element, false to exclude it. Filter returns a new array (immutable), preserves order, and does not change the original. The returned array may be shorter than the original. Common interview topics: implementing filter manually, difference from find/some, and using filter to remove falsy values (arr.filter(Boolean)).",interviewQuestions:[{question:"What does Array.filter() do?",answer:"filter() creates a new array containing only the elements for which the callback function returns a truthy value. Elements that fail the test are excluded."},{question:"Does filter() mutate the original array?",answer:"No. filter() returns a new array. The original array is not modified. This is an immutable operation."},{question:"What is the difference between filter() and find()?",answer:"filter() returns a new array of ALL matching elements. find() returns only the FIRST matching element (or undefined if none match)."},{question:"How do you remove falsy values from an array using filter?",answer:"arr.filter(Boolean) removes all falsy values (false, 0, '', null, undefined, NaN). 'Boolean' is the built-in Boolean constructor used as the callback — it returns true for truthy values."},{question:"What arguments does the filter callback receive?",answer:"Three arguments: currentValue (the current element), index (the index), and array (the original array being filtered)."},{question:"Can filter be chained with map?",answer:"Yes: arr.filter(x => x > 0).map(x => x * 2). First filter removes unwanted elements, then map transforms the remaining ones."},{question:"What is the length of the array returned by filter?",answer:"The length is the number of elements that passed the test. It can be anything from 0 (no elements passed) to the original array's length (all elements passed)."},{question:"How do you implement a simple filter function?",answer:"function filter(arr, fn) { const result = []; for (let i = 0; i < arr.length; i++) { if (fn(arr[i], i, arr)) { result.push(arr[i]); } } return result; }"},{question:"Does filter preserve the order of elements?",answer:"Yes. Elements appear in the new array in the same order they appeared in the original array."},{question:"What happens if the filter callback doesn't return anything?",answer:"The callback returns undefined (falsy), so no elements are included. The returned array will be empty."}],diagramSvg:'<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Array.filter() — Keeping Elements That Pass the Test</text><rect x="40" y="70" width="280" height="180" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="180" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Original Array</text><rect x="55" y="105" width="250" height="30" rx="4" fill="var(--border)"/><text x="180" y="125" text-anchor="middle" fill="#e8eaed" font-size="11">[1, 2, 3, 4, 5, 6]</text><text x="180" y="160" fill="#9aa0b0" font-size="10">Test: n =&gt; n % 2 === 0 (is even)</text><text x="180" y="180" fill="#98c379" font-size="10">1 → false ✗</text><text x="180" y="195" fill="#98c379" font-size="10">2 → true  ✓</text><text x="180" y="210" fill="#98c379" font-size="10">3 → false ✗</text><text x="180" y="225" fill="#98c379" font-size="10">4 → true  ✓ (5→✗, 6→✓)</text><line x1="320" y1="160" x2="370" y2="160" stroke="#fbbf24" stroke-width="2"/><rect x="370" y="70" width="280" height="180" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="510" y="93" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">Filtered Array (returned)</text><rect x="385" y="105" width="250" height="30" rx="4" fill="var(--border)"/><text x="510" y="125" text-anchor="middle" fill="#e8eaed" font-size="11">[2, 4, 6]</text><text x="510" y="165" fill="#98c379" font-size="10">Only elements where callback returned true</text><text x="510" y="185" fill="#98c379" font-size="10">Original NOT mutated</text><text x="510" y="205" fill="#98c379" font-size="10">Order preserved</text><text x="350" y="280" fill="#9aa0b0" font-size="11">const evens = numbers.filter(n =&gt; n % 2 === 0);</text></svg>',codeExamples:[{title:"Basic Filtering — Numbers",useCase:"Filtering numeric arrays",code:`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Keep only even numbers
const evens = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log(evens); // [2, 4, 6, 8, 10]

// Keep numbers greater than 5
const bigNumbers = numbers.filter(n => n > 5);
console.log(bigNumbers); // [6, 7, 8, 9, 10]

// Chaining filter conditions
const mediumEvens = numbers.filter(n => n > 3 && n < 8 && n % 2 === 0);
console.log(mediumEvens); // [4, 6]

// Original unchanged
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,description:"Filter creates a new array with elements that pass the test. Multiple conditions can be combined with && or ||."},{title:"Filtering Arrays of Objects",useCase:"Querying object arrays",code:`const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true, category: 'electronics' },
  { id: 2, name: 'Shirt', price: 25, inStock: false, category: 'clothing' },
  { id: 3, name: 'Phone', price: 800, inStock: true, category: 'electronics' },
  { id: 4, name: 'Shoes', price: 80, inStock: true, category: 'clothing' },
  { id: 5, name: 'Tablet', price: 300, inStock: false, category: 'electronics' }
];

// Available products
const available = products.filter(function(p) { return p.inStock; });
console.log(available.length); // 3

// Affordable electronics
const affordableElectronics = products.filter(function(p) {
  return p.category === 'electronics' && p.price < 1000 && p.inStock;
});
console.log(affordableElectronics);
// [{ id: 3, name: 'Phone', ... }, { id: 5, name: 'Tablet', ... }]

// Using computed property for filtering
const expensive = products.filter(p => p.price > 100);
console.log(expensive.length); // 3 (Laptop, Phone, Tablet)

// Filter by string matching
const searchResults = products.filter(function(p) {
  return p.name.toLowerCase().includes('ph');
});
console.log(searchResults); // [{ name: 'Phone' }, { name: 'Laptop' }] (no, 'Laptop' doesn't match)
// Actually only 'Phone' matches 'ph'`,description:"Filter is ideal for querying arrays of objects. Combine multiple conditions, filter by string matching, or use computed expressions."},{title:"Removing Falsy Values with filter(Boolean)",useCase:"Cleaning up data",code:`const messyArray = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];

// Remove all falsy values
const clean = messyArray.filter(Boolean);
console.log(clean); // [1, 2, 3, 4, 5]

// Equivalent to:
// const clean = messyArray.filter(function(x) { return !!x; });
// const clean = messyArray.filter(x => Boolean(x));

// Practical: filter out empty strings
const comments = ['Great post!', '', 'Thanks', '', '', 'Very helpful'];
const validComments = comments.filter(Boolean);
console.log(validComments); // ['Great post!', 'Thanks', 'Very helpful']

// Practical: remove null/undefined from mixed array
const data = [
  { id: 1, name: 'Alice' },
  null,
  { id: 2, name: 'Bob' },
  undefined,
  { id: 3, name: 'Charlie' }
];
const validData = data.filter(Boolean);
console.log(validData.length); // 3

// More explicit: filter only objects
const onlyObjects = data.filter(function(item) {
  return item !== null && item !== undefined;
});
// Same result as filter(Boolean) for this specific case`,description:"filter(Boolean) is a concise pattern to remove all falsy values. It uses the Boolean function as the callback — returns true for truthy values, false for falsy."},{title:"Filter with Index and Chaining",useCase:"Complex data processing with filter",code:`const items = ['apple', 'banana', 'avocado', 'cherry', 'apricot', 'blueberry'];

// Get items that start with 'a' and have index > 0
const aItems = items.filter(function(item, index) {
  return item.startsWith('a') && index > 0;
});
console.log(aItems); // ['avocado', 'apricot'] (apple skipped at index 0)

// Chain filter → map → reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(function(n) { return n % 2 === 0; })   // [2, 4, 6, 8, 10]
  .filter(function(n) { return n > 4; })           // [6, 8, 10]
  .map(function(n) { return n * 10; })             // [60, 80, 100]
  .reduce(function(sum, n) { return sum + n; }, 0); // 240

console.log(result); // 240

// Practical: pagination simulation
const page = 2;
const pageSize = 3;
const allUsers = [
  { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }, { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }, { id: 6, name: 'Frank' }
];

const pageUsers = allUsers.filter(function(user, index) {
  var start = (page - 1) * pageSize;
  var end = page * pageSize;
  return index >= start && index < end;
});
console.log(pageUsers); // [{ id: 4, ... }, { id: 5, ... }, { id: 6, ... }]`,description:"Filter can use the index parameter for position-based filtering. Chain with map/reduce for complete data processing pipelines."},{title:"Manual filter() Implementation",useCase:"Understanding the internal mechanism",code:`function myFilter(array, callback) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (i in array) {  // Handle sparse arrays
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
  }

  return result;
}

// Test
var numbers = [1, 2, 3, 4, 5, 6];
var evens = myFilter(numbers, function(n) {
  return n % 2 === 0;
});
console.log(evens); // [2, 4, 6]

// With arrow function
var big = myFilter(numbers, n => n > 3);
console.log(big); // [4, 5, 6]

// Using the index
var firstHalf = myFilter(numbers, function(n, i) {
  return i < 3;
});
console.log(firstHalf); // [1, 2, 3]

// Note: the real Array.filter also handles:
// - The optional thisArg parameter
// - Sparse arrays (skipping empty slots)
// - Being called on non-array objects`,description:"A manual filter implementation helps understand the core mechanism: iterate, test each element, collect those that pass into a new array."}],mcqQuestions:[{question:"What does Array.filter() return?",options:["The first matching element","A new array with elements that passed the test","undefined","A boolean"],answer:1,explanation:"filter() returns a new array containing only the elements for which the callback returned a truthy value."},{question:"What will [1, 2, 3, 4, 5].filter(x => x > 3) return?",options:["[3, 4, 5]","[4, 5]","[1, 2, 3]","[5]"],answer:1,explanation:"Elements greater than 3 are 4 and 5. Filter returns [4, 5]."},{question:"What is the difference between filter() and find()?",options:["filter returns all matches; find returns the first match","They are identical","find returns all matches; filter returns the first","filter returns a boolean; find returns an array"],answer:0,explanation:"filter() returns a new array of all matching elements. find() returns the first matching element (or undefined)."},{question:"What does [0, 1, false, 2, null].filter(Boolean) return?",options:["[0, 1, false, 2, null]","[1, 2]","[0, false, null]","[1, false, 2]"],answer:1,explanation:"Boolean returns true for truthy values (1, 2) and false for falsy values (0, false, null). Result: [1, 2]."},{question:"Does filter change the original array?",options:["Yes, it removes elements","No, it returns a new array","Only if the callback modifies elements","Yes, it reverses it"],answer:1,explanation:"filter() is immutable — it does not modify the original array. It returns a new array."},{question:"What happens if the filter callback always returns false?",options:["The original array is returned","An empty array is returned","undefined is returned","An error is thrown"],answer:1,explanation:"If no elements pass the test, filter returns an empty array []."},{question:"What arguments does the filter callback receive?",options:["currentValue only","currentValue, index, array","currentValue, index","currentValue, array"],answer:1,explanation:"The callback receives: currentValue, index, and the array being filtered."},{question:"Can filter be chained with map?",options:["Yes: arr.filter(fn).map(fn)","No, filter doesn't return an array","Only with async functions","Only with forEach"],answer:0,explanation:"filter returns an array, so it can be chained with any array method: arr.filter(fn).map(fn)."},{question:"How do you filter an array of objects by a property?",options:["arr.filter(obj => obj.property === value)","arr.filter(obj.property === value)","arr.find(obj => obj.property === value)","arr.map(obj => obj.property === value)"],answer:0,explanation:"Use filter with a callback that checks the property: arr.filter(obj => obj.property === value)."},{question:"What is the maximum length of the array returned by filter?",options:["Half the original length","The same length as the original (if all pass)","The original length minus one","Unlimited"],answer:1,explanation:"The returned array can be at most the same length as the original (if all elements pass the test), down to 0 (if none pass)."}]};export{e as filter};
