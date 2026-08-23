const e={title:"JavaScript find()",difficulty:"beginner",estimatedMinutes:15,tldr:["<code>Array.find()</code> returns the <strong>first element</strong> in the array that satisfies the provided testing function.","If no element satisfies the test, <code>find()</code> returns <strong>undefined</strong>.","Callback receives: <code>currentValue</code>, <code>index</code>, and the <code>original array</code>.","find() <strong>stops iterating</strong> once a match is found — it does not process remaining elements."],laymanDefinition:"Imagine you're looking for a specific book in a library. You scan the shelves from left to right. The moment you see the book you want, you grab it and stop looking — you don't check the remaining shelves. Array.find() works the same way: it examines each element from first to last, and as soon as it finds one that matches your criteria, it returns that element and stops.",deepDive:[{heading:"How find() Works",text:"Array.find iterates through the array from index 0 upward. For each element, it calls the callback. If the callback returns a truthy value, find immediately returns that element and stops iterating. If the callback never returns a truthy value, find returns undefined. This early-exit behavior makes find efficient for large arrays."},{heading:"find vs filter vs findIndex",list:["<strong>find()</strong> returns the first matching element (or undefined). Use when you need the element itself.","<strong>filter()</strong> returns a new array of ALL matching elements. Use when multiple matches are possible.","<strong>findIndex()</strong> returns the index of the first matching element (or -1). Use when you need the position."]},{heading:"find with Objects",text:"find is commonly used to look up an object by ID or unique property in an array: users.find(u => u.id === 42) returns the user with id 42. This is the go-to method for finding a specific item in an array. For repeated lookups, consider converting the array to a Map or object for O(1) access."},{heading:"find vs indexOf vs includes",text:"indexOf and includes find by value comparison (===). find uses a callback, enabling complex search logic (property matching, computed conditions). Use indexOf/includes for primitive value search. Use find for object property matching or custom logic."},{heading:"Edge Cases with find",text:"find returns undefined when no match is found — always check for undefined before using the result. find on an empty array returns undefined immediately (callback never runs). For arrays containing undefined values, find may return undefined meaningfully — distinguish 'no match' from 'matched undefined' by using findIndex or checking the result type."}],interviewAnswer:"Array.find() returns the first element that satisfies a test function, or undefined if no match is found. It stops iterating as soon as a match is found (short-circuiting). Common use: looking up an element by ID or unique property in an object array. Unlike filter (which returns all matches), find returns a single element. Unlike findIndex (which returns the position), find returns the element itself. Always check for undefined before using the result of find, as no-match returns undefined.",interviewQuestions:[{question:"What does Array.find() do?",answer:"find() returns the first element in the array that satisfies the provided testing function. If no element passes the test, it returns undefined."},{question:"What is the difference between find() and filter()?",answer:"find() returns the first matching element (or undefined). filter() returns a new array with ALL matching elements. find stops at the first match; filter processes all elements."},{question:"What is the difference between find() and findIndex()?",answer:"find() returns the matching element itself. findIndex() returns the index of the matching element (or -1 if not found)."},{question:"What does find() return if no element matches?",answer:"It returns undefined. Always check the result before using it: const result = arr.find(fn); if (result) { ... } or if (result !== undefined) { ... }"},{question:"Does find() stop iterating after finding a match?",answer:"Yes. find() short-circuits — it stops as soon as it finds the first matching element. Remaining elements are not processed."},{question:"How do you find an object by ID in an array?",answer:"users.find(user => user.id === targetId). This returns the user object with the matching ID, or undefined if not found."},{question:"What arguments does the find callback receive?",answer:"Three arguments: currentValue, index, and the array being searched."},{question:"How is find different from indexOf?",answer:"indexOf searches by strict equality (===) for primitive values. find uses a callback for complex search logic, making it suitable for objects and computed conditions."},{question:"What happens if find is called on an empty array?",answer:"The callback never executes and find returns undefined."},{question:"Can find return undefined as a valid match?",answer:"Potentially confusing — if an element is undefined and matches the condition, find returns that undefined. Use findIndex or check hasOwnProperty to distinguish 'no match' from 'matched undefined'."}],diagramSvg:'<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Array.find() — First Match Only</text><rect x="40" y="70" width="280" height="190" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="180" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Array: [5, 12, 8, 130, 44]</text><text x="180" y="125" fill="#9aa0b0" font-size="10">find(x =&gt; x &gt; 10)</text><text x="180" y="148" fill="#98c379" font-size="10">5 &gt; 10? No   (continue)</text><text x="180" y="168" fill="#98c379" font-size="10">12 &gt; 10? Yes  (stop!)</text><text x="180" y="195" fill="#e5c07b" font-size="12" font-weight="bold">Returns: 12</text><text x="180" y="218" fill="#9aa0b0" font-size="10">Does NOT check 8, 130, 44</text><line x1="320" y1="165" x2="370" y2="165" stroke="#fbbf24" stroke-width="2"/><rect x="370" y="65" width="290" height="200" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="515" y="93" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">Key Characteristics</text><text x="515" y="125" fill="#9aa0b0" font-size="10">✓ Returns element (not array)</text><text x="515" y="148" fill="#9aa0b0" font-size="10">✓ Short-circuits on first match</text><text x="515" y="171" fill="#9aa0b0" font-size="10">✓ Returns undefined if not found</text><text x="515" y="194" fill="#9aa0b0" font-size="10">✓ Complex callback logic</text><text x="515" y="217" fill="#9aa0b0" font-size="10">✓ Common for ID lookups</text><text x="350" y="290" fill="#9aa0b0" font-size="11">const user = users.find(u =&gt; u.id === 42);</text><text x="350" y="310" fill="#9aa0b0" font-size="11">const found = arr.find(x =&gt; condition);</text></svg>',codeExamples:[{title:"Basic find — First Match",useCase:"Finding elements by value condition",code:`const numbers = [5, 12, 8, 130, 44];

// Find first number > 10
const found = numbers.find(function(element) {
  return element > 10;
});
console.log(found); // 12

// Find first even number
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 12

// Find first number > 100
const big = numbers.find(n => n > 100);
console.log(big); // 130

// No match → undefined
const negative = numbers.find(n => n < 0);
console.log(negative); // undefined

// Important: check for undefined
const result = numbers.find(n => n > 1000);
if (result === undefined) {
  console.log('No matching element found');
}`,description:"find returns the first matching element. It short-circuits on the first match. Returns undefined when nothing matches."},{title:"Finding Objects by Property",useCase:"ID/unique property lookups",code:`const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' }
];

// Find by ID
function findUserById(id) {
  return users.find(function(user) {
    return user.id === id;
  });
}

var user = findUserById(3);
console.log(user); // { id: 3, name: 'Charlie', ... }

// Find by email
var byEmail = users.find(u => u.email === 'bob@example.com');
console.log(byEmail.name); // 'Bob'

// No match
var notFound = users.find(u => u.id === 99);
console.log(notFound); // undefined

// Multiple conditions
var specific = users.find(function(u) {
  return u.name.startsWith('C') && u.email.includes('example');
});
console.log(specific.name); // 'Charlie'

// Using with destructuring in callback
var found = users.find(({ id }) => id === 2);
console.log(found.name); // 'Bob'`,description:"find is the go-to method for looking up an object by ID or unique property. The callback can use any condition(s)."},{title:"find with Complex Conditions",useCase:"Advanced search logic",code:`const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true, tags: ['electronics', 'computers'] },
  { id: 2, name: 'Phone', price: 800, inStock: true, tags: ['electronics', 'mobile'] },
  { id: 3, name: 'Tablet', price: 300, inStock: false, tags: ['electronics', 'mobile'] },
  { id: 4, name: 'Headphones', price: 150, inStock: true, tags: ['audio'] }
];

// Find first in-stock product under $200
var affordable = products.find(function(p) {
  return p.inStock && p.price < 200;
});
console.log(affordable.name); // 'Headphones'

// Find first product that has a specific tag
var tagged = products.find(function(p) {
  return p.tags.includes('mobile');
});
console.log(tagged.name); // 'Phone'

// Find using index
var firstHighValue = products.find(function(p, i) {
  return p.price > 500 && i > 1;  // skip first two
});
console.log(firstHighValue); // undefined (Tablet is $300)
// Actually: products[2] is Tablet ($300, not > 500)
// products[3] is Headphones ($150, not > 500)
// So: no match — undefined

// Computed property
var found = products.find(function(p) {
  return p.price > 1000;
});
console.log(found.name); // 'Laptop'

// Null check pattern
var maybeProduct = products.find(p => p.id === 99);
if (maybeProduct) {
  console.log(maybeProduct.name);
} else {
  console.log('Product not found');
}`,description:"find supports complex conditions with &&, ||, array methods (includes), index-based filtering, and computed expressions."},{title:"find vs filter vs findIndex — Side by Side",useCase:"Choosing the right method",code:`const items = [
  { id: 1, type: 'fruit', name: 'Apple' },
  { id: 2, type: 'vegetable', name: 'Carrot' },
  { id: 3, type: 'fruit', name: 'Banana' },
  { id: 4, type: 'fruit', name: 'Cherry' }
];

// find — first match (single element)
var firstFruit = items.find(function(item) {
  return item.type === 'fruit';
});
console.log(firstFruit); // { id: 1, type: 'fruit', name: 'Apple' }

// filter — all matches (array)
var allFruits = items.filter(function(item) {
  return item.type === 'fruit';
});
console.log(allFruits.length); // 3

// findIndex — position of first match
var fruitIndex = items.findIndex(function(item) {
  return item.type === 'fruit';
});
console.log(fruitIndex); // 0

// indexOf — value comparison (primitives only)
var names = ['Apple', 'Banana', 'Carrot', 'Cherry'];
var index = names.indexOf('Banana');
console.log(index); // 1

// includes — checks existence (boolean)
var hasBanana = names.includes('Banana');
console.log(hasBanana); // true

// Performance note: find stops at first match
// filter always processes ALL elements
// For large arrays, find is more efficient when
// you only need the first match`,description:"find returns the element, filter returns an array of all matches, findIndex returns the position. Choose based on what you need."},{title:"Implementing find Manually",useCase:"Understanding the internal logic",code:`function myFind(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (i in array) {  // Handle sparse arrays
      if (callback(array[i], i, array)) {
        return array[i];  // Return element, stop iteration!
      }
    }
  }
  return undefined;  // No match
}

// Test with numbers
var numbers = [5, 12, 8, 130, 44];
var first = myFind(numbers, function(n) {
  return n > 10;
});
console.log(first); // 12

// Test with objects
var users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

var bob = myFind(users, function(u) {
  return u.name === 'Bob';
});
console.log(bob); // { id: 2, name: 'Bob' }

// Test with no match
var notFound = myFind(users, function(u) {
  return u.name === 'David';
});
console.log(notFound); // undefined

// Test on empty array
var empty = myFind([], function() { return true; });
console.log(empty); // undefined

// The early return is crucial — as soon as we find
// a match, we return immediately without iterating
// the rest of the array`,description:"Manual find implementation: iterate, check each element, return the element immediately on first match, return undefined if no match."}],mcqQuestions:[{question:"What does Array.find() return?",options:["A new array with matching elements","The first matching element","The index of the first match","A boolean"],answer:1,explanation:"find() returns the first element for which the callback returns a truthy value, or undefined if none match."},{question:"What happens if no element satisfies the test in find()?",options:["Returns null","Returns undefined","Returns an empty array","Throws an error"],answer:1,explanation:"find() returns undefined when no element passes the test."},{question:"What is the difference between find() and filter()?",options:["They are identical","find returns one element; filter returns an array of all matches","filter returns one element; find returns an array","find is for objects; filter is for primitives"],answer:1,explanation:"find() returns the first matching element (single value). filter() returns a new array of ALL matching elements."},{question:"Does find() continue iterating after finding a match?",options:["Yes, it always processes all elements","No, it stops at the first match","It depends on the callback","Only if the match is at the end"],answer:1,explanation:"find() short-circuits — it stops iterating as soon as the first match is found."},{question:"What will [1, 3, 5, 7, 9].find(x => x % 2 === 0) return?",options:["2","undefined","null","0"],answer:1,explanation:"No even numbers exist in the array. find() returns undefined."},{question:"How do you find an object by ID using find?",options:["arr.filter(obj => obj.id === id)","arr.find(obj => obj.id === id)","arr.indexOf(id)","arr.includes(obj)"],answer:1,explanation:"arr.find(obj => obj.id === id) returns the first object with the given ID, or undefined if not found."},{question:"What is the difference between find() and findIndex()?",options:["find returns the element; findIndex returns the index","find returns the index; findIndex returns the element","They are the same","find is synchronous; findIndex is async"],answer:0,explanation:"find() returns the matching element. findIndex() returns the index of the matching element (or -1)."},{question:"What arguments does the find callback receive?",options:["currentValue only","currentValue, index","currentValue, index, array","currentValue, array"],answer:2,explanation:"Three arguments: currentValue, index, and the array being searched."},{question:"What happens when you call find on an empty array?",options:["Returns undefined immediately","Throws an error","Returns null","Returns an empty array"],answer:0,explanation:"On an empty array, the callback never runs and find returns undefined."},{question:"How is find different from indexOf?",options:["find uses a callback for complex logic; indexOf uses === equality","indexOf uses a callback; find uses ===","They are identical for primitives","find is faster than indexOf"],answer:0,explanation:"indexOf searches by strict equality (===) for a specific value. find uses a callback, enabling complex conditions (property matching, computed expressions)."}]};export{e as find};
