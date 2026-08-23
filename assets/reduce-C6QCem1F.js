const e={title:"JavaScript reduce()",difficulty:"intermediate",estimatedMinutes:25,tldr:["<code>Array.reduce()</code> executes a callback on each element, resulting in a <strong>single accumulated value</strong>.","Syntax: <code>arr.reduce(callback(accumulator, currentValue, index, array), initialValue)</code>.","The <strong>initialValue</strong> is crucial: without it, the first element is used as the accumulator and iteration starts from index 1.","Reduce is <strong>versatile</strong> — it can implement map, filter, groupBy, flatten, and more."],laymanDefinition:"Imagine you have a stack of bills and you want to know the total amount. You start with 0 (your initial value), then look at each bill one by one, adding its amount to the running total. By the end, you have one number: the total. Array.reduce() does the same thing — it goes through an array, repeatedly applying a function that combines the current value with the running result, and finally returns that single accumulated result.",deepDive:[{heading:"How reduce() Works",text:"Reduce iterates over the array and maintains an 'accumulator' — a running value that is passed to each callback call. The callback returns the new accumulator value for the next iteration. After the last element, reduce returns the final accumulator. The initialValue is the starting value of the accumulator. Without initialValue, arr[0] becomes the accumulator and iteration starts at index 1."},{heading:"The Importance of initialValue",text:"Always provide an initialValue to avoid edge cases. Without initialValue on an empty array, reduce throws a TypeError. Without initialValue on a single-element array, the callback is never called and that single element is returned directly. With initialValue, the callback runs once for each element regardless. For sum/concatenation, initialValue should be the identity element (0 for sum, '' for strings, [] for arrays)."},{heading:"Reduce as a Swiss Army Knife",list:["Reduce can <strong>implement other array methods</strong>: reduce can replicate map, filter, find, some, every, flat, etc.","Use reduce for <strong>grouping</strong>: group objects by a property (e.g., group users by role).","Use reduce for <strong>counting</strong>: count occurrences of values (e.g., word frequency).","Use reduce for <strong>flattening</strong>: flatten a nested array (combined with concat or spread).","Use reduce for <strong>transforming</strong>: convert array to object, or array to other structures."]},{heading:"Reduce Right — reduceRight()",text:"Array.reduceRight() works identically to reduce but iterates from right to left (last element to first). Useful for operations where order matters, like evaluating expressions in reverse Polish notation or applying functions right-to-left (similar to compose). The callback signature and initialValue rules are the same."},{heading:"Performance Considerations",text:"Reduce is O(n) — it visits each element once. For simple sums, a for loop may be marginally faster, but the difference is negligible for typical array sizes. Reduce creates no intermediate arrays (unlike filter + map chains). For very large arrays, consider using a for loop if the closure overhead of the callback is measurable. Always prefer readability over micro-optimization."}],interviewAnswer:"Array.reduce() reduces an array to a single value by applying a callback to each element, passing the result (accumulator) forward. It's incredibly versatile: it can sum numbers, flatten arrays, group objects, count occurrences, implement map/filter, and more. Always provide an initialValue to avoid edge cases. Without initialValue, the first element is used as the accumulator and iteration starts at index 1. Reduce is the most powerful array method because it can replicate the behavior of most other methods.",interviewQuestions:[{question:"What does Array.reduce() do?",answer:"reduce() executes a reducer function on each element, passing the result (accumulator) to the next iteration, returning a single accumulated value at the end."},{question:"What is the purpose of the initialValue in reduce?",answer:"initialValue is the starting value of the accumulator. Without it, the first element is used as the accumulator and iteration starts at index 1. Always provide initialValue to avoid errors on empty arrays."},{question:"What happens if you call reduce on an empty array without initialValue?",answer:"It throws a TypeError: 'Reduce of empty array with no initial value'. Always provide an initialValue when the array might be empty."},{question:"How do you sum an array of numbers with reduce?",answer:"arr.reduce((acc, val) => acc + val, 0). The accumulator starts at 0, each element is added, and the final sum is returned."},{question:"How do you flatten an array of arrays with reduce?",answer:"arr.reduce((acc, val) => acc.concat(val), []). Or with spread: arr.reduce((acc, val) => [...acc, ...val], []). Modern alternative: arr.flat()."},{question:"Can reduce implement map?",answer:"Yes: arr.reduce((acc, val) => [...acc, fn(val)], []). This builds a new array by applying fn to each element — exactly what map does."},{question:"Can reduce implement filter?",answer:"Yes: arr.reduce((acc, val) => condition(val) ? [...acc, val] : acc, []). This adds elements that pass the test — exactly what filter does."},{question:"How do you group objects by a property using reduce?",answer:"arr.reduce((acc, obj) => { const key = obj.property; acc[key] = acc[key] || []; acc[key].push(obj); return acc; }, {})"},{question:"What is the difference between reduce and reduceRight?",answer:"reduceRight processes the array from right to left (last element to first). The callback signature and behavior are otherwise identical."},{question:"What arguments does the reduce callback receive?",answer:"Four arguments: accumulator, currentValue, currentIndex, and the array being reduced."}],diagramSvg:'<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="360" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Array.reduce() — Accumulation Flow</text><rect x="50" y="70" width="200" height="200" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="150" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">[1, 2, 3, 4]</text><text x="150" y="120" fill="#9aa0b0" font-size="10">acc=0, val=1 → 1</text><text x="150" y="140" fill="#9aa0b0" font-size="10">acc=1, val=2 → 3</text><text x="150" y="160" fill="#9aa0b0" font-size="10">acc=3, val=3 → 6</text><text x="150" y="180" fill="#9aa0b0" font-size="10">acc=6, val=4 → 10</text><text x="150" y="210" fill="#98c379" font-size="12" font-weight="bold">Final result: 10</text><line x1="250" y1="170" x2="310" y2="170" stroke="#fbbf24" stroke-width="2"/><rect x="310" y="65" width="340" height="80" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="480" y="88" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Callback: (acc, val) =&gt; acc + val</text><text x="480" y="110" text-anchor="middle" fill="#9aa0b0" font-size="10">acc = accumulator (running total)</text><text x="480" y="130" text-anchor="middle" fill="#9aa0b0" font-size="10">initialValue = 0</text><text x="480" y="185" fill="#e8eaed" font-size="12" font-weight="bold">Versatile — can implement:</text><text x="480" y="210" fill="#9aa0b0" font-size="10">✓ Sum / Product / Average</text><text x="480" y="228" fill="#9aa0b0" font-size="10">✓ Flatten / Group / Count</text><text x="480" y="246" fill="#9aa0b0" font-size="10">✓ Map / Filter / Find</text><text x="350" y="310" fill="#9aa0b0" font-size="11">const sum = arr.reduce((acc, n) =&gt; acc + n, 0);</text></svg>',codeExamples:[{title:"Sum, Product, Average — Basic Accumulation",useCase:"Core reduce patterns",code:`const numbers = [10, 20, 30, 40, 50];

// Sum: reduce to a single total
const sum = numbers.reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log(sum); // 150

// Arrow version
const sumArrow = numbers.reduce((acc, n) => acc + n, 0);

// Product (initial value = 1, not 0!)
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product); // 12000000

// Average
const average = numbers.reduce((acc, n, i, arr) => {
  acc += n;
  if (i === arr.length - 1) return acc / arr.length;
  return acc;
}, 0);
console.log(average); // 30

// Better average: sum then divide
const sum2 = numbers.reduce((a, b) => a + b);
const avg2 = sum2 / numbers.length;
console.log(avg2); // 30`,description:"Basic numeric reductions. Sum starts at 0, product at 1. Average can be computed inline or as sum/length."},{title:"Flattening an Array of Arrays",useCase:"Converting 2D arrays to 1D",code:`const nested = [[1, 2], [3, 4], [5, 6]];

// Flatten one level
const flat = nested.reduce(function(acc, arr) {
  return acc.concat(arr);
}, []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// With spread
const flatSpread = nested.reduce((acc, arr) => [...acc, ...arr], []);
console.log(flatSpread); // [1, 2, 3, 4, 5, 6]

// Deep flatten (multiple levels)
const deepNested = [[1, [2, 3]], [4, [5, 6]]];
function deepFlatten(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? deepFlatten(val) : val);
  }, []);
}
console.log(deepFlatten(deepNested)); // [1, 2, 3, 4, 5, 6]

// Modern native alternative:
console.log(nested.flat());      // [1, 2, 3, 4, 5, 6]
console.log(deepNested.flat(2)); // [1, 2, 3, 4, 5, 6]`,description:"Reduce can flatten arrays by concatenating each inner array into the accumulator. Recursive reduce handles deep nesting."},{title:"Grouping Objects by Property",useCase:"Creating groups from a flat array",code:`const people = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' },
  { name: 'David', role: 'admin' },
  { name: 'Eve', role: 'moderator' }
];

// Group by role
const groupedByRole = people.reduce(function(acc, person) {
  var role = person.role;
  // Initialize array for this role if it doesn't exist
  if (!acc[role]) {
    acc[role] = [];
  }
  acc[role].push(person);
  return acc;
}, {});

console.log(groupedByRole);
// {
//   admin: [{ name: 'Alice' }, { name: 'David' }],
//   user: [{ name: 'Bob' }, { name: 'Charlie' }],
//   moderator: [{ name: 'Eve' }]
// }

// Arrow version with nullish coalescing
const grouped = people.reduce((acc, p) => {
  const key = p.role;
  (acc[key] = acc[key] || []).push(p);
  return acc;
}, {});

// Count by role
const countByRole = people.reduce(function(acc, person) {
  acc[person.role] = (acc[person.role] || 0) + 1;
  return acc;
}, {});
console.log(countByRole); // { admin: 2, user: 2, moderator: 1 }`,description:"Grouping is a powerful reduce pattern. Each element is placed into a group based on a key. The accumulator is an object with keys for each group."},{title:"Reduce Implementing Map and Filter",useCase:"Understanding reduce's versatility",code:`const numbers = [1, 2, 3, 4, 5, 6];

// Implement map with reduce
const doubled = numbers.reduce(function(acc, n) {
  acc.push(n * 2);
  return acc;
}, []);
console.log(doubled); // [2, 4, 6, 8, 10, 12]

// Arrow version
const tripled = numbers.reduce((acc, n) => [...acc, n * 3], []);
console.log(tripled); // [3, 6, 9, 12, 15, 18]

// Implement filter with reduce
const evens = numbers.reduce(function(acc, n) {
  if (n % 2 === 0) {
    acc.push(n);
  }
  return acc;
}, []);
console.log(evens); // [2, 4, 6]

// Implement map + filter with single reduce (more efficient)
const result = numbers.reduce(function(acc, n) {
  if (n % 2 === 0) {        // filter condition
    acc.push(n * 10);        // map transformation
  }
  return acc;
}, []);
console.log(result); // [20, 40, 60]

// Compare with chained filter+map:
// numbers.filter(n => n % 2 === 0).map(n => n * 10)
// Same result, but reduce does it in one pass`,description:"Reduce can replicate map and filter. Doing both in a single reduce pass is more efficient than filter + map chaining (one pass vs two)."},{title:"Counting Occurrences and Building Objects",useCase:"Frequency analysis and object construction",code:`const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape'];

// Count occurrences
const fruitCount = fruits.reduce(function(acc, fruit) {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1, grape: 1 }

// Array to Object
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const usersById = users.reduce(function(acc, user) {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersById);
// { 1: { id: 1, name: 'Alice' }, 2: { ... }, 3: { ... } }
console.log(usersById[2].name); // 'Bob'

// Extract unique values
const uniqueFruits = fruits.reduce(function(acc, fruit) {
  if (!acc.includes(fruit)) {
    acc.push(fruit);
  }
  return acc;
}, []);
console.log(uniqueFruits); // ['apple', 'banana', 'orange', 'grape']

// Modern alternative for unique:
// const uniqueFruits = [...new Set(fruits)];`,description:"Reduce is excellent for frequency counting and converting arrays to lookup objects (dictionaries). Common patterns for data normalization."}],mcqQuestions:[{question:"What does reduce() return?",options:["An array","A single accumulated value","undefined","The first element"],answer:1,explanation:"Reduce returns a single value — the final accumulated result after processing all elements."},{question:"What happens if you call reduce on an empty array without initialValue?",options:["Returns undefined","Returns null","Throws TypeError","Returns an empty array"],answer:2,explanation:"Reduce on an empty array without initialValue throws: 'Reduce of empty array with no initial value'."},{question:"What will [1, 2, 3, 4].reduce((acc, n) => acc + n, 0) return?",options:["10","1234","0","undefined"],answer:0,explanation:"0 + 1 + 2 + 3 + 4 = 10. The accumulator starts at 0 and each element is added."},{question:"What arguments does the reduce callback receive?",options:["accumulator, currentValue","accumulator, currentValue, index","accumulator, currentValue, index, array","currentValue, index, array"],answer:2,explanation:"The callback receives accumulator, currentValue, currentIndex, and the array being reduced."},{question:"How do you flatten a 2D array with reduce?",options:["arr.reduce((acc, val) => acc.concat(val), [])","arr.reduce((acc, val) => acc + val)","arr.reduce((acc, val) => [...acc, val], [])","Both A and C work"],answer:3,explanation:"Both concat and spread work: acc.concat(val) or [...acc, ...val], both with [] as initialValue."},{question:"What is the difference between reduce and reduceRight?",options:["reduceRight is faster","reduceRight iterates from right to left","reduceRight doesn't need initialValue","They are identical"],answer:1,explanation:"reduceRight processes the array from the last element to the first, while reduce goes from first to last."},{question:"What will ['a', 'b', 'c'].reduce((acc, v) => acc + v) return?",options:["'abc'","['a', 'b', 'c']","'abcundefined'","Error"],answer:0,explanation:"Without initialValue, the first element 'a' is used as the accumulator. Then 'b' is concatenated ('ab'), then 'c' ('abc')."},{question:"Can reduce implement map?",options:["Yes: arr.reduce((acc, v) => [...acc, fn(v)], [])","No, they are fundamentally different","Only with strings","Only with numbers"],answer:0,explanation:"Reduce can implement map by building a new array with the transformed values."},{question:"How do you find the maximum value using reduce?",options:["arr.reduce((max, v) => Math.max(max, v), -Infinity)","arr.reduce((max, v) => v > max ? v : max)","arr.reduce((max, v) => v, -Infinity)","Both A and B"],answer:3,explanation:"Both patterns work: Math.max(max, v) or the ternary v > max ? v : max. Use -Infinity as initialValue."},{question:"What is the main advantage of reduce over filter + map chaining?",options:["Reduce is faster for all cases","Reduce can do both in one pass (more efficient)","Reduce doesn't need a callback","Reduce always returns a number"],answer:1,explanation:"Reduce can combine filter and map in a single pass, avoiding creating two intermediate arrays."}]};export{e as reduce};
