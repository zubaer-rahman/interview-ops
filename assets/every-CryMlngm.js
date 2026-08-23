const e={title:"JavaScript every()",difficulty:"beginner",estimatedMinutes:15,tldr:["<code>Array.every()</code> tests whether <strong>all elements</strong> in the array pass the provided test function.","Returns <code>true</code> if <strong>every element</strong> passes — <strong>short-circuits</strong> and returns <code>false</code> on the first failure.","Returns <code>true</code> for an <strong>empty array</strong> (vacuous truth).","Does <strong>not mutate</strong> the original array."],laymanDefinition:"Imagine you're a quality inspector checking items on an assembly line. Your rule is 'All items must be undamaged.' You start checking each item. The moment you find a single damaged item, you stop and report 'No, not all items pass.' You don't need to check the rest. Array.every() works the same way — it checks each element until one fails, then immediately returns false.",deepDive:[{heading:"How every() Works",text:"Array.every() iterates over each element and calls the callback with (element, index, array). If the callback returns a falsy value for any element, every() immediately returns false and stops iterating (short-circuit). If the callback returns truthy for every element, every() returns true."},{heading:"Vacuous Truth — Empty Array",text:"every() on an empty array returns true. This is called 'vacuous truth' — the statement 'all elements satisfy this condition' is true when there are no elements to violate it. This is consistent with mathematical logic: 'All unicorns are pink' is true because no non-pink unicorn exists to disprove it."},{heading:"Short-Circuiting Behavior",text:"every() short-circuits on the first false — it stops iterating as soon as it finds a failing element. This is the inverse of some(), which short-circuits on the first true. If you have a large array and most elements will pass, every() is efficient because it stops at the first failure."},{heading:"every() vs some() — De Morgan's Law",text:"!arr.every(fn) is equivalent to arr.some(function(x) { return !fn(x); }). And !arr.some(fn) is equivalent to arr.every(function(x) { return !fn(x); }). This is De Morgan's Law applied to array testing: 'Not all passed' means 'At least one failed'. Understanding this relationship helps choose the right method."}],interviewAnswer:"Array.every() tests whether all elements pass a test function, returning true or false. It short-circuits — returns false immediately on the first failure. On an empty array, it returns true (vacuous truth). It does not mutate the original array. Common use cases: form validation (all fields valid?), data integrity checks (all required properties present?), permission checks (all users have required role?), and comparison checks (all elements equal a value). The key distinction from some() is that every() requires ALL elements to pass (logical AND), while some() requires at least one (logical OR).",interviewQuestions:[{question:"What does Array.every() do?",answer:"every() tests whether all elements in the array pass the provided test function. Returns true if all pass, false if any fail."},{question:"What does every() return on an empty array?",answer:"true. This is vacuous truth — no element exists that could fail the test, so the statement 'all elements pass' is true."},{question:"Does every() short-circuit?",answer:"Yes. every() stops iterating as soon as it finds an element that fails the test. It returns false immediately without processing remaining elements."},{question:"What is the difference between every() and some()?",answer:"every() requires ALL elements to pass (returns true only if all pass). some() requires AT LEAST ONE to pass (returns true if any passes)."},{question:"Does every() mutate the original array?",answer:"No. every() is read-only and does not modify the original array."},{question:"What arguments does the every() callback receive?",answer:"Three arguments: currentValue, index, and the original array."},{question:"How do you check if all numbers in an array are even?",answer:"arr.every(n => n % 2 === 0). Returns true if all are even, false if any is odd."},{question:"What is the relationship between every() and some()?",answer:"De Morgan's Law: !arr.every(fn) === arr.some(x => !fn(x)). And !arr.some(fn) === arr.every(x => !fn(x))."},{question:"Can every() be used with arrays of objects?",answer:"Yes: users.every(u => u.age >= 18) checks if all users are adults. This is a common pattern for data validation."},{question:"How do you implement a simple every() function?",answer:"function every(arr, fn) { for (var i = 0; i < arr.length; i++) { if (!fn(arr[i], i, arr)) return false; } return true; }"}],diagramSvg:'<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="630" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="325" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Array.every() — Short-Circuits on First Failure</text><rect x="30" y="65" width="580" height="120" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="320" y="85" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Testing: n =&gt; n &lt; 5</text><rect x="50" y="100" width="80" height="30" rx="4" fill="var(--border)"/><text x="90" y="119" text-anchor="middle" fill="#e8eaed" font-size="11">1</text><text x="90" y="145" text-anchor="middle" fill="#98c379" font-size="10">true ✓</text><rect x="150" y="100" width="80" height="30" rx="4" fill="var(--border)"/><text x="190" y="119" text-anchor="middle" fill="#e8eaed" font-size="11">2</text><text x="190" y="145" text-anchor="middle" fill="#98c379" font-size="10">true ✓</text><rect x="250" y="100" width="80" height="30" rx="4" fill="var(--border)"/><text x="290" y="119" text-anchor="middle" fill="#e8eaed" font-size="11">3</text><text x="290" y="145" text-anchor="middle" fill="#98c379" font-size="10">true ✓</text><rect x="350" y="100" width="80" height="30" rx="4" fill="#b71c1c" stroke="#e64745" stroke-width="1.5"/><text x="390" y="119" text-anchor="middle" fill="#e8eaed" font-size="11">5</text><text x="390" y="145" text-anchor="middle" fill="#e64745" font-size="10">false ✗</text><rect x="450" y="100" width="80" height="30" rx="4" fill="#1a1d28" stroke="#555" stroke-width="1" opacity="0.5"/><text x="490" y="119" text-anchor="middle" fill="#555" font-size="11">10</text><text x="490" y="145" text-anchor="middle" fill="#555" font-size="10">skipped</text><rect x="550" y="100" width="50" height="30" rx="4" fill="#1a1d28" stroke="#555" stroke-width="1" opacity="0.5"/><text x="575" y="119" text-anchor="middle" fill="#555" font-size="11">...</text><text x="575" y="145" text-anchor="middle" fill="#555" font-size="10">skipped</text><text x="320" y="200" text-anchor="middle" fill="#e64745" font-size="14" font-weight="bold">Result: false (stopped at 5)</text><text x="320" y="225" text-anchor="middle" fill="#9aa0b0" font-size="11">every() returns false immediately at first failure — short-circuits</text><text x="320" y="245" text-anchor="middle" fill="#9aa0b0" font-size="11">Remaining elements (10, ...) are never checked</text></svg>',codeExamples:[{title:"Basic every() Usage",useCase:"Checking if all elements meet a condition",code:`const numbers = [2, 4, 6, 8, 10];

// Check if all numbers are even
const allEven = numbers.every(function(n) {
  return n % 2 === 0;
});
console.log(allEven); // true

// Check if all numbers are greater than 0
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// Mixed array — one fails
const mixed = [2, 4, 5, 8];
console.log(mixed.every(n => n % 2 === 0)); // false (5 is odd)

// Empty array always returns true
console.log([].every(n => n > 0)); // true

// Short-circuit verification
const logAndCheck = [1, 3, 5, 7, 8].every(function(n) {
  console.log('Checking:', n);
  return n % 2 !== 0;
});
// Logs: Checking: 1, Checking: 3, Checking: 5, Checking: 7, Checking: 8
// Stops at 8 (first even number)
console.log(logAndCheck); // false`,description:"every() tests all elements until one fails. Empty arrays always return true (vacuous truth)."},{title:"Form Validation with every()",useCase:"Ensuring all fields are valid",code:`const formFields = [
  { name: 'email', value: 'user@example.com', valid: true },
  { name: 'password', value: 'secret123', valid: true },
  { name: 'age', value: '25', valid: true }
];

// Check if ALL fields are valid
const isFormValid = formFields.every(function(field) {
  return field.valid;
});
console.log(isFormValid); // true

// Check if all required fields have values
const requiredFields = ['name', 'email', 'password'];
const formData = { name: 'Alice', email: 'alice@example.com', password: 'secret' };
const allFilled = requiredFields.every(function(field) {
  return formData[field] && formData[field].trim() !== '';
});
console.log(allFilled); // true

// Multi-condition validation
const isCompletelyValid = formFields.every(function(f) {
  return f.valid && f.value.length >= 3;
});
console.log(isCompletelyValid); // true

// Combining with some for nuanced validation
const allRequiredPresent = requiredFields.every(function(f) {
  return formData[f] !== undefined && formData[f] !== '';
});
console.log(allRequiredPresent); // true`,description:"every() is perfect for validating that ALL conditions are met before form submission."},{title:"Data Integrity and Comparison Checks",useCase:"Validating data consistency",code:`const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

// Check if ALL users have email addresses
const allHaveEmail = users.every(function(u) {
  return u.email && u.email.includes('@');
});
console.log(allHaveEmail); // true

// Check if ALL users are adults
const allAdults = users.every(u => u.age >= 18);
console.log(allAdults); // true

// Check if all elements are unique
const hasDuplicates = function(arr) {
  return !arr.every(function(item, index) {
    return arr.indexOf(item) === index;
  });
};
console.log(hasDuplicates([1, 2, 3])); // false (all unique)
console.log(hasDuplicates([1, 2, 2])); // true (has duplicate)

// Check if all values equal a specific value
const allSame = arr => arr.every(x => x === arr[0]);
console.log(allSame([5, 5, 5])); // true
console.log(allSame([5, 5, 6])); // false

// Nested validation
const orders = [
  { items: ['book', 'pen'], paid: true },
  { items: ['notebook'], paid: true }
];
const readyToShip = orders.every(function(order) {
  return order.paid && order.items.length > 0;
});
console.log(readyToShip); // true`,description:"every() is ideal for data integrity checks — ensure all records have required fields and pass validation rules."},{title:"Performance and Optimization Patterns",useCase:"Using every() for early exit optimization",code:`const largeArray = Array.from({ length: 1000000 }, function(_, i) {
  return { id: i, value: Math.random(), valid: i !== 500000 };
});

// every() short-circuits — stops at first invalid item
var start = Date.now();
var allValid = largeArray.every(function(item) {
  return item.valid;
});
var elapsed = Date.now() - start;
console.log(allValid); // false
console.log('Checked ~500k items then stopped:', elapsed + 'ms');

// Equivalent with filter (always checks ALL items)
start = Date.now();
var invalidCount = largeArray.filter(function(item) {
  return !item.valid;
}).length;
elapsed = Date.now() - start;
var hasInvalid = invalidCount > 0;
console.log(hasInvalid); // true
console.log('Checked ALL 1M items:', elapsed + 'ms');

// Using every() for range checks
const values = [10, 20, 30, 40, 50];
const inRange = values.every(function(v) {
  return v >= 0 && v <= 100;
});
console.log(inRange); // true

// Combining every with early validation
function validateInputs(inputs) {
  return inputs.every(function(input) {
    if (input === null || input === undefined) return false;
    if (typeof input === 'string') return input.trim().length > 0;
    if (typeof input === 'number') return !isNaN(input) && input >= 0;
    return true;
  });
}
console.log(validateInputs(['hello', 42, 'world'])); // true
console.log(validateInputs(['hello', '', 'world'])); // false`,description:"every() is more performant than filter() for existence checks because it short-circuits on the first failure."},{title:"Manual every() Implementation",useCase:"Understanding the internal mechanism",code:`function myEvery(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (i in array) {  // Handle sparse arrays
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
  }
  return true;
}

// Test
var numbers = [2, 4, 6, 8];
console.log(myEvery(numbers, function(n) {
  return n % 2 === 0;
})); // true

console.log(myEvery(numbers, function(n) {
  return n > 5;
})); // false (2 and 4 fail)

// Empty array
console.log(myEvery([], function(n) {
  return false;
})); // true

// Short-circuit test
var callCount = 0;
var result = myEvery([2, 4, 5, 6], function(n) {
  callCount++;
  return n % 2 === 0;
});
console.log(result); // false
console.log(callCount); // 3 (checked 2, 4, 5 — stopped at 5)

// Sparse array behavior
var sparse = [2, , 6, 8];
console.log(myEvery(sparse, function(n) {
  return n !== undefined;
})); // true (empty slots are skipped)

// Note: real Array.every also handles:
// - The optional thisArg parameter
// - Being called on non-array objects`,description:"A manual implementation shows every() short-circuits on first false and returns true for empty arrays."}],mcqQuestions:[{question:"What does Array.every() return?",options:["A new array","undefined","A boolean (true/false)","The first failing element"],answer:2,explanation:"every() returns a boolean: true if all elements pass the test, false if any fail."},{question:"What does [1, 2, 3].every(n => n > 0) return?",options:["true","false","[1, 2, 3]","undefined"],answer:0,explanation:"All elements are greater than 0, so every() returns true."},{question:"What does [].every(n => false) return?",options:["true","false","undefined","TypeError"],answer:0,explanation:"Every() on an empty array always returns true (vacuous truth) — no element exists to fail the test."},{question:"Does every() short-circuit?",options:["No, it checks every element","Yes, it stops at the first failure","Only in strict mode","Only with arrow functions"],answer:1,explanation:"every() short-circuits — it returns false immediately upon finding the first failing element."},{question:"What is the difference between every() and some()?",options:["every() checks if ALL pass; some() checks if ANY pass","They are identical","every() checks if ANY pass; some() checks if ALL pass","every() returns an array; some() returns a boolean"],answer:0,explanation:"every() is like AND (all must pass). some() is like OR (at least one must pass)."},{question:"How do you check if all numbers in [2, 4, 5, 6] are even?",options:["arr.every(n => n % 2 === 0)","arr.some(n => n % 2 === 0)","arr.filter(n => n % 2 === 0)","arr.includes(even)"],answer:0,explanation:"arr.every(n => n % 2 === 0) returns false because 5 is odd."},{question:"Does every() mutate the original array?",options:["Yes","No","Only if the callback mutates it","Only for nested objects"],answer:1,explanation:"every() is read-only. It does not modify the original array."},{question:"What arguments does the every() callback receive?",options:["currentValue only","currentValue, index, array","currentValue, index","array, index"],answer:1,explanation:"The callback receives currentValue, index, and the array being iterated."},{question:"What is a common use case for every()?",options:["Finding the first match","Checking if all form fields are valid","Transforming array elements","Sorting arrays"],answer:1,explanation:"every() is commonly used for validation — ensure all fields pass before allowing form submission."},{question:"How do you check if an array contains only strings?",options:["arr.every(item => typeof item === 'string')","arr.some(item => typeof item === 'string')","arr.includes('string')","arr.filter(item => typeof item === 'string').length === arr.length"],answer:0,explanation:"arr.every(item => typeof item === 'string') is the most direct way to check if all elements are strings."}]};export{e as every};
