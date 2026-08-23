export const every = {
  "title": "JavaScript every()",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "<code>Array.every()</code> tests whether <strong>all elements</strong> in the array pass the provided test function.",
    "Returns <code>true</code> if <strong>every element</strong> passes — <strong>short-circuits</strong> and returns <code>false</code> on the first failure.",
    "Returns <code>true</code> for an <strong>empty array</strong> (vacuous truth).",
    "Does <strong>not mutate</strong> the original array."
  ],
  "laymanDefinition": "Imagine you're a quality inspector checking items on an assembly line. Your rule is 'All items must be undamaged.' You start checking each item. The moment you find a single damaged item, you stop and report 'No, not all items pass.' You don't need to check the rest. Array.every() works the same way — it checks each element until one fails, then immediately returns false.",
  "deepDive": [
    {
      "heading": "How every() Works",
      "text": "Array.every() iterates over each element and calls the callback with (element, index, array). If the callback returns a falsy value for any element, every() immediately returns false and stops iterating (short-circuit). If the callback returns truthy for every element, every() returns true."
    },
    {
      "heading": "Vacuous Truth — Empty Array",
      "text": "every() on an empty array returns true. This is called 'vacuous truth' — the statement 'all elements satisfy this condition' is true when there are no elements to violate it. This is consistent with mathematical logic: 'All unicorns are pink' is true because no non-pink unicorn exists to disprove it."
    },
    {
      "heading": "Short-Circuiting Behavior",
      "text": "every() short-circuits on the first false — it stops iterating as soon as it finds a failing element. This is the inverse of some(), which short-circuits on the first true. If you have a large array and most elements will pass, every() is efficient because it stops at the first failure."
    },
    {
      "heading": "every() vs some() — De Morgan's Law",
      "text": "!arr.every(fn) is equivalent to arr.some(function(x) { return !fn(x); }). And !arr.some(fn) is equivalent to arr.every(function(x) { return !fn(x); }). This is De Morgan's Law applied to array testing: 'Not all passed' means 'At least one failed'. Understanding this relationship helps choose the right method."
    }
  ],
  "interviewAnswer": "Array.every() tests whether all elements pass a test function, returning true or false. It short-circuits — returns false immediately on the first failure. On an empty array, it returns true (vacuous truth). It does not mutate the original array. Common use cases: form validation (all fields valid?), data integrity checks (all required properties present?), permission checks (all users have required role?), and comparison checks (all elements equal a value). The key distinction from some() is that every() requires ALL elements to pass (logical AND), while some() requires at least one (logical OR).",
  "interviewQuestions": [
    {
      "question": "What does Array.every() do?",
      "answer": "every() tests whether all elements in the array pass the provided test function. Returns true if all pass, false if any fail."
    },
    {
      "question": "What does every() return on an empty array?",
      "answer": "true. This is vacuous truth — no element exists that could fail the test, so the statement 'all elements pass' is true."
    },
    {
      "question": "Does every() short-circuit?",
      "answer": "Yes. every() stops iterating as soon as it finds an element that fails the test. It returns false immediately without processing remaining elements."
    },
    {
      "question": "What is the difference between every() and some()?",
      "answer": "every() requires ALL elements to pass (returns true only if all pass). some() requires AT LEAST ONE to pass (returns true if any passes)."
    },
    {
      "question": "Does every() mutate the original array?",
      "answer": "No. every() is read-only and does not modify the original array."
    },
    {
      "question": "What arguments does the every() callback receive?",
      "answer": "Three arguments: currentValue, index, and the original array."
    },
    {
      "question": "How do you check if all numbers in an array are even?",
      "answer": "arr.every(n => n % 2 === 0). Returns true if all are even, false if any is odd."
    },
    {
      "question": "What is the relationship between every() and some()?",
      "answer": "De Morgan's Law: !arr.every(fn) === arr.some(x => !fn(x)). And !arr.some(fn) === arr.every(x => !fn(x))."
    },
    {
      "question": "Can every() be used with arrays of objects?",
      "answer": "Yes: users.every(u => u.age >= 18) checks if all users are adults. This is a common pattern for data validation."
    },
    {
      "question": "How do you implement a simple every() function?",
      "answer": "function every(arr, fn) { for (var i = 0; i < arr.length; i++) { if (!fn(arr[i], i, arr)) return false; } return true; }"
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"325\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Array.every() — Short-Circuits on First Failure</text><rect x=\"30\" y=\"65\" width=\"580\" height=\"120\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"320\" y=\"85\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">Testing: n =&gt; n &lt; 5</text><rect x=\"50\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"90\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">1</text><text x=\"90\" y=\"145\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">true ✓</text><rect x=\"150\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"190\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">2</text><text x=\"190\" y=\"145\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">true ✓</text><rect x=\"250\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"290\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">3</text><text x=\"290\" y=\"145\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">true ✓</text><rect x=\"350\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#b71c1c\" stroke=\"#e64745\" stroke-width=\"1.5\"/><text x=\"390\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">5</text><text x=\"390\" y=\"145\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"10\">false ✗</text><rect x=\"450\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#1a1d28\" stroke=\"#555\" stroke-width=\"1\" opacity=\"0.5\"/><text x=\"490\" y=\"119\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">10</text><text x=\"490\" y=\"145\" text-anchor=\"middle\" fill=\"#555\" font-size=\"10\">skipped</text><rect x=\"550\" y=\"100\" width=\"50\" height=\"30\" rx=\"4\" fill=\"#1a1d28\" stroke=\"#555\" stroke-width=\"1\" opacity=\"0.5\"/><text x=\"575\" y=\"119\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">...</text><text x=\"575\" y=\"145\" text-anchor=\"middle\" fill=\"#555\" font-size=\"10\">skipped</text><text x=\"320\" y=\"200\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"14\" font-weight=\"bold\">Result: false (stopped at 5)</text><text x=\"320\" y=\"225\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">every() returns false immediately at first failure — short-circuits</text><text x=\"320\" y=\"245\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Remaining elements (10, ...) are never checked</text></svg>",
  "codeExamples": [
    {
      "title": "Basic every() Usage",
      "useCase": "Checking if all elements meet a condition",
      "code": "const numbers = [2, 4, 6, 8, 10];\n\n// Check if all numbers are even\nconst allEven = numbers.every(function(n) {\n  return n % 2 === 0;\n});\nconsole.log(allEven); // true\n\n// Check if all numbers are greater than 0\nconst allPositive = numbers.every(n => n > 0);\nconsole.log(allPositive); // true\n\n// Mixed array — one fails\nconst mixed = [2, 4, 5, 8];\nconsole.log(mixed.every(n => n % 2 === 0)); // false (5 is odd)\n\n// Empty array always returns true\nconsole.log([].every(n => n > 0)); // true\n\n// Short-circuit verification\nconst logAndCheck = [1, 3, 5, 7, 8].every(function(n) {\n  console.log('Checking:', n);\n  return n % 2 !== 0;\n});\n// Logs: Checking: 1, Checking: 3, Checking: 5, Checking: 7, Checking: 8\n// Stops at 8 (first even number)\nconsole.log(logAndCheck); // false",
      "description": "every() tests all elements until one fails. Empty arrays always return true (vacuous truth)."
    },
    {
      "title": "Form Validation with every()",
      "useCase": "Ensuring all fields are valid",
      "code": "const formFields = [\n  { name: 'email', value: 'user@example.com', valid: true },\n  { name: 'password', value: 'secret123', valid: true },\n  { name: 'age', value: '25', valid: true }\n];\n\n// Check if ALL fields are valid\nconst isFormValid = formFields.every(function(field) {\n  return field.valid;\n});\nconsole.log(isFormValid); // true\n\n// Check if all required fields have values\nconst requiredFields = ['name', 'email', 'password'];\nconst formData = { name: 'Alice', email: 'alice@example.com', password: 'secret' };\nconst allFilled = requiredFields.every(function(field) {\n  return formData[field] && formData[field].trim() !== '';\n});\nconsole.log(allFilled); // true\n\n// Multi-condition validation\nconst isCompletelyValid = formFields.every(function(f) {\n  return f.valid && f.value.length >= 3;\n});\nconsole.log(isCompletelyValid); // true\n\n// Combining with some for nuanced validation\nconst allRequiredPresent = requiredFields.every(function(f) {\n  return formData[f] !== undefined && formData[f] !== '';\n});\nconsole.log(allRequiredPresent); // true",
      "description": "every() is perfect for validating that ALL conditions are met before form submission."
    },
    {
      "title": "Data Integrity and Comparison Checks",
      "useCase": "Validating data consistency",
      "code": "const users = [\n  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },\n  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },\n  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }\n];\n\n// Check if ALL users have email addresses\nconst allHaveEmail = users.every(function(u) {\n  return u.email && u.email.includes('@');\n});\nconsole.log(allHaveEmail); // true\n\n// Check if ALL users are adults\nconst allAdults = users.every(u => u.age >= 18);\nconsole.log(allAdults); // true\n\n// Check if all elements are unique\nconst hasDuplicates = function(arr) {\n  return !arr.every(function(item, index) {\n    return arr.indexOf(item) === index;\n  });\n};\nconsole.log(hasDuplicates([1, 2, 3])); // false (all unique)\nconsole.log(hasDuplicates([1, 2, 2])); // true (has duplicate)\n\n// Check if all values equal a specific value\nconst allSame = arr => arr.every(x => x === arr[0]);\nconsole.log(allSame([5, 5, 5])); // true\nconsole.log(allSame([5, 5, 6])); // false\n\n// Nested validation\nconst orders = [\n  { items: ['book', 'pen'], paid: true },\n  { items: ['notebook'], paid: true }\n];\nconst readyToShip = orders.every(function(order) {\n  return order.paid && order.items.length > 0;\n});\nconsole.log(readyToShip); // true",
      "description": "every() is ideal for data integrity checks — ensure all records have required fields and pass validation rules."
    },
    {
      "title": "Performance and Optimization Patterns",
      "useCase": "Using every() for early exit optimization",
      "code": "const largeArray = Array.from({ length: 1000000 }, function(_, i) {\n  return { id: i, value: Math.random(), valid: i !== 500000 };\n});\n\n// every() short-circuits — stops at first invalid item\nvar start = Date.now();\nvar allValid = largeArray.every(function(item) {\n  return item.valid;\n});\nvar elapsed = Date.now() - start;\nconsole.log(allValid); // false\nconsole.log('Checked ~500k items then stopped:', elapsed + 'ms');\n\n// Equivalent with filter (always checks ALL items)\nstart = Date.now();\nvar invalidCount = largeArray.filter(function(item) {\n  return !item.valid;\n}).length;\nelapsed = Date.now() - start;\nvar hasInvalid = invalidCount > 0;\nconsole.log(hasInvalid); // true\nconsole.log('Checked ALL 1M items:', elapsed + 'ms');\n\n// Using every() for range checks\nconst values = [10, 20, 30, 40, 50];\nconst inRange = values.every(function(v) {\n  return v >= 0 && v <= 100;\n});\nconsole.log(inRange); // true\n\n// Combining every with early validation\nfunction validateInputs(inputs) {\n  return inputs.every(function(input) {\n    if (input === null || input === undefined) return false;\n    if (typeof input === 'string') return input.trim().length > 0;\n    if (typeof input === 'number') return !isNaN(input) && input >= 0;\n    return true;\n  });\n}\nconsole.log(validateInputs(['hello', 42, 'world'])); // true\nconsole.log(validateInputs(['hello', '', 'world'])); // false",
      "description": "every() is more performant than filter() for existence checks because it short-circuits on the first failure."
    },
    {
      "title": "Manual every() Implementation",
      "useCase": "Understanding the internal mechanism",
      "code": "function myEvery(array, callback) {\n  for (var i = 0; i < array.length; i++) {\n    if (i in array) {  // Handle sparse arrays\n      if (!callback(array[i], i, array)) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\n// Test\nvar numbers = [2, 4, 6, 8];\nconsole.log(myEvery(numbers, function(n) {\n  return n % 2 === 0;\n})); // true\n\nconsole.log(myEvery(numbers, function(n) {\n  return n > 5;\n})); // false (2 and 4 fail)\n\n// Empty array\nconsole.log(myEvery([], function(n) {\n  return false;\n})); // true\n\n// Short-circuit test\nvar callCount = 0;\nvar result = myEvery([2, 4, 5, 6], function(n) {\n  callCount++;\n  return n % 2 === 0;\n});\nconsole.log(result); // false\nconsole.log(callCount); // 3 (checked 2, 4, 5 — stopped at 5)\n\n// Sparse array behavior\nvar sparse = [2, , 6, 8];\nconsole.log(myEvery(sparse, function(n) {\n  return n !== undefined;\n})); // true (empty slots are skipped)\n\n// Note: real Array.every also handles:\n// - The optional thisArg parameter\n// - Being called on non-array objects",
      "description": "A manual implementation shows every() short-circuits on first false and returns true for empty arrays."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Array.every() return?",
      "options": [
        "A new array",
        "undefined",
        "A boolean (true/false)",
        "The first failing element"
      ],
      "answer": 2,
      "explanation": "every() returns a boolean: true if all elements pass the test, false if any fail."
    },
    {
      "question": "What does [1, 2, 3].every(n => n > 0) return?",
      "options": [
        "true",
        "false",
        "[1, 2, 3]",
        "undefined"
      ],
      "answer": 0,
      "explanation": "All elements are greater than 0, so every() returns true."
    },
    {
      "question": "What does [].every(n => false) return?",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "answer": 0,
      "explanation": "Every() on an empty array always returns true (vacuous truth) — no element exists to fail the test."
    },
    {
      "question": "Does every() short-circuit?",
      "options": [
        "No, it checks every element",
        "Yes, it stops at the first failure",
        "Only in strict mode",
        "Only with arrow functions"
      ],
      "answer": 1,
      "explanation": "every() short-circuits — it returns false immediately upon finding the first failing element."
    },
    {
      "question": "What is the difference between every() and some()?",
      "options": [
        "every() checks if ALL pass; some() checks if ANY pass",
        "They are identical",
        "every() checks if ANY pass; some() checks if ALL pass",
        "every() returns an array; some() returns a boolean"
      ],
      "answer": 0,
      "explanation": "every() is like AND (all must pass). some() is like OR (at least one must pass)."
    },
    {
      "question": "How do you check if all numbers in [2, 4, 5, 6] are even?",
      "options": [
        "arr.every(n => n % 2 === 0)",
        "arr.some(n => n % 2 === 0)",
        "arr.filter(n => n % 2 === 0)",
        "arr.includes(even)"
      ],
      "answer": 0,
      "explanation": "arr.every(n => n % 2 === 0) returns false because 5 is odd."
    },
    {
      "question": "Does every() mutate the original array?",
      "options": [
        "Yes",
        "No",
        "Only if the callback mutates it",
        "Only for nested objects"
      ],
      "answer": 1,
      "explanation": "every() is read-only. It does not modify the original array."
    },
    {
      "question": "What arguments does the every() callback receive?",
      "options": [
        "currentValue only",
        "currentValue, index, array",
        "currentValue, index",
        "array, index"
      ],
      "answer": 1,
      "explanation": "The callback receives currentValue, index, and the array being iterated."
    },
    {
      "question": "What is a common use case for every()?",
      "options": [
        "Finding the first match",
        "Checking if all form fields are valid",
        "Transforming array elements",
        "Sorting arrays"
      ],
      "answer": 1,
      "explanation": "every() is commonly used for validation — ensure all fields pass before allowing form submission."
    },
    {
      "question": "How do you check if an array contains only strings?",
      "options": [
        "arr.every(item => typeof item === 'string')",
        "arr.some(item => typeof item === 'string')",
        "arr.includes('string')",
        "arr.filter(item => typeof item === 'string').length === arr.length"
      ],
      "answer": 0,
      "explanation": "arr.every(item => typeof item === 'string') is the most direct way to check if all elements are strings."
    }
  ]
};
