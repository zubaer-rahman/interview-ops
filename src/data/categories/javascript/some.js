export const some = {
  "title": "JavaScript some()",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "<code>Array.some()</code> tests whether <strong>at least one element</strong> in the array passes the provided test function.",
    "Returns <code>true</code> as soon as an element passes — <strong>short-circuits</strong> and stops iterating.",
    "Returns <code>false</code> if <strong>no element</strong> passes the test, or if the array is <strong>empty</strong>.",
    "Does <strong>not mutate</strong> the original array."
  ],
  "laymanDefinition": "Imagine you're a teacher asking 'Does anyone have a pencil?' to a row of students. You start at the first student and ask. The moment any student says 'Yes', you stop asking and report back 'Yes, someone has a pencil.' You don't need to ask the remaining students. Array.some() works the same way — it checks each element until it finds one that passes the test, then immediately returns true and stops.",
  "deepDive": [
    {
      "heading": "How some() Works",
      "text": "Array.some() iterates over each element and calls the callback with (element, index, array). If the callback returns a truthy value for any element, some() immediately returns true and stops iterating (short-circuit). If the callback never returns truthy, some() returns false. On an empty array, some() always returns false — there is no element that could pass the test."
    },
    {
      "heading": "Short-Circuiting Behavior",
      "text": "The most important feature of some() is short-circuiting. Once it finds a match, it stops iterating. This is a performance optimization — if you need to check whether a condition is met, some() stops at the first success rather than processing every element. Contrast with filter(), which always processes the entire array."
    },
    {
      "heading": "some() vs includes() vs indexOf()",
      "list": [
        "<strong>includes()</strong>: Checks if a specific value exists. Simpler but only checks exact equality (<code>===</code>).",
        "<strong>indexOf()</strong>: Returns the index of the first occurrence, or -1. Also uses strict equality.",
        "<strong>some()</strong>: Most flexible — uses any test function. Use when you need custom comparison logic or complex conditions."
      ]
    },
    {
      "heading": "some() on Empty Arrays",
      "text": "some() on an empty array always returns false because there is no element that could possibly satisfy the test. This is a vacuous truth — no element exists to pass the test, so the result is false. This is consistent with the mathematical principle that 'there exists' (the existential quantifier) is false for an empty set."
    }
  ],
  "interviewAnswer": "Array.some() tests whether at least one element passes a test function, returning true or false. It short-circuits — returns true immediately on the first match. On an empty array, it returns false. It does not mutate the original array. Common use cases: form validation (checking if any field is invalid), permission checks (does any user have admin access?), and existence checks with custom logic. The key contrast is with every() (which returns true only if ALL pass) and includes() (which checks exact equality).",
  "interviewQuestions": [
    {
      "question": "What does Array.some() do?",
      "answer": "some() tests whether at least one element in the array passes the provided test function. It returns true if any element passes, false otherwise."
    },
    {
      "question": "What does some() return on an empty array?",
      "answer": "false. No element exists in an empty array that could pass the test, so some() always returns false."
    },
    {
      "question": "Does some() short-circuit?",
      "answer": "Yes. some() stops iterating as soon as it finds an element that passes the test. It returns true immediately without processing remaining elements."
    },
    {
      "question": "What is the difference between some() and includes()?",
      "answer": "includes() checks for exact equality (===) of a specific value. some() accepts a callback function and can evaluate any condition, including complex logic with objects or computed properties."
    },
    {
      "question": "Does some() mutate the original array?",
      "answer": "No. some() is read-only and does not modify the original array."
    },
    {
      "question": "What arguments does the some() callback receive?",
      "answer": "Three arguments: currentValue, index, and the original array."
    },
    {
      "question": "How do you check if an array has any even numbers with some()?",
      "answer": "arr.some(n => n % 2 === 0). Returns true if any element is even, false if all are odd."
    },
    {
      "question": "What is the difference between some() and every()?",
      "answer": "some() returns true if at least one element passes the test (logical OR). every() returns true only if ALL elements pass the test (logical AND)."
    },
    {
      "question": "Can some() be used with arrays of objects?",
      "answer": "Yes: users.some(u => u.role === 'admin') checks if any user has admin role. This is a common pattern for permission and validation checks."
    },
    {
      "question": "How do you implement a simple some() function?",
      "answer": "function some(arr, fn) { for (var i = 0; i < arr.length; i++) { if (fn(arr[i], i, arr)) return true; } return false; }"
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"325\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Array.some() — Short-Circuits on First Match</text><rect x=\"30\" y=\"65\" width=\"580\" height=\"120\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"320\" y=\"85\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">Testing: n =&gt; n > 3</text><rect x=\"50\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"90\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">1</text><text x=\"90\" y=\"145\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"10\">false</text><rect x=\"150\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"190\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">2</text><text x=\"190\" y=\"145\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"10\">false</text><rect x=\"250\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"290\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">3</text><text x=\"290\" y=\"145\" text-anchor=\"middle\" fill=\"#e64745\" font-size=\"10\">false</text><rect x=\"350\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#1b5e20\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"390\" y=\"119\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">4</text><text x=\"390\" y=\"145\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\">true ✓</text><rect x=\"450\" y=\"100\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#1a1d28\" stroke=\"#555\" stroke-width=\"1\" opacity=\"0.5\"/><text x=\"490\" y=\"119\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">5</text><text x=\"490\" y=\"145\" text-anchor=\"middle\" fill=\"#555\" font-size=\"10\">skipped</text><rect x=\"550\" y=\"100\" width=\"50\" height=\"30\" rx=\"4\" fill=\"#1a1d28\" stroke=\"#555\" stroke-width=\"1\" opacity=\"0.5\"/><text x=\"575\" y=\"119\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">...</text><text x=\"575\" y=\"145\" text-anchor=\"middle\" fill=\"#555\" font-size=\"10\">skipped</text><text x=\"320\" y=\"200\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"14\" font-weight=\"bold\">Result: true (stopped at 4)</text><text x=\"320\" y=\"225\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">some() returns true immediately at first match — short-circuits</text><text x=\"320\" y=\"245\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Remaining elements (5, 6, ...) are never checked</text></svg>",
  "codeExamples": [
    {
      "title": "Basic some() Usage",
      "useCase": "Checking if any element meets a condition",
      "code": "const numbers = [1, 2, 3, 4, 5];\n\n// Check if any number is even\nconst hasEven = numbers.some(function(n) {\n  return n % 2 === 0;\n});\nconsole.log(hasEven); // true\n\n// Check if any number is greater than 10\nconst hasBig = numbers.some(n => n > 10);\nconsole.log(hasBig); // false\n\n// Empty array always returns false\nconsole.log([].some(n => n > 0)); // false\n\n// Short-circuit verification\nconst logAndCheck = numbers.some(function(n) {\n  console.log('Checking:', n);\n  return n > 3;\n});\n// Logs: Checking: 1, Checking: 2, Checking: 3, Checking: 4\n// Stops at 4 — does NOT check 5\nconsole.log(logAndCheck); // true",
      "description": "some() tests elements until one passes, then stops. Empty arrays always return false."
    },
    {
      "title": "Form Validation with some()",
      "useCase": "Checking if any form field is invalid",
      "code": "const formFields = [\n  { name: 'email', value: 'user@example.com', valid: true },\n  { name: 'password', value: '', valid: false },\n  { name: 'age', value: '25', valid: true }\n];\n\n// Check if any field is invalid\nconst hasErrors = formFields.some(function(field) {\n  return !field.valid;\n});\nconsole.log(hasErrors); // true\n\n// Find which fields are invalid\nconst invalidNames = formFields\n  .filter(function(f) { return !f.valid; })\n  .map(function(f) { return f.name; });\nconsole.log(invalidNames); // ['password']\n\n// Real-world: validate required fields\nconst requiredFields = ['name', 'email', 'password'];\nconst formData = { name: 'Alice', email: '', password: 'secret' };\nconst missingRequired = requiredFields.some(function(field) {\n  return !formData[field];\n});\nconsole.log(missingRequired); // true (email is empty)\n\n// With multiple conditions\nconst isFormValid = !formFields.some(function(f) {\n  return !f.valid || f.value.trim() === '';\n});\nconsole.log(isFormValid); // false",
      "description": "some() is perfect for validation — check if any field fails and show errors. Combine with filter/map for detailed error reporting."
    },
    {
      "title": "Permission and Access Checks",
      "useCase": "Checking roles and permissions",
      "code": "const users = [\n  { id: 1, name: 'Alice', roles: ['viewer'] },\n  { id: 2, name: 'Bob', roles: ['editor', 'admin'] },\n  { id: 3, name: 'Charlie', roles: ['viewer'] }\n];\n\n// Check if any user has admin role\nconst hasAdmin = users.some(function(user) {\n  return user.roles.includes('admin');\n});\nconsole.log(hasAdmin); // true\n\n// Check access for a specific feature\nconst canEdit = users.some(function(user) {\n  return user.roles.some(function(role) {\n    return role === 'editor' || role === 'admin';\n  });\n});\nconsole.log(canEdit); // true (Bob can edit)\n\n// Check if any user meets multiple criteria\nconst canApprove = users.some(function(u) {\n  return u.roles.includes('admin') && u.id !== 1;\n});\nconsole.log(canApprove); // true (Bob, id 2, is admin)\n\n// Combined permission check with array methods\nconst permissions = ['read', 'write', 'delete'];\nconst hasPermission = permissions.some(function(p) {\n  return ['admin', 'superadmin'].some(function(role) {\n    return users.some(function(u) { return u.roles.includes(role); });\n  });\n});\nconsole.log(hasPermission); // true",
      "description": "some() shines for permission checks — test if any user has a required role. Can be nested for complex authorization logic."
    },
    {
      "title": "some() with Complex Conditions",
      "useCase": "Advanced predicate logic",
      "code": "const products = [\n  { name: 'Laptop', price: 1200, inStock: true },\n  { name: 'Mouse', price: 25, inStock: false },\n  { name: 'Keyboard', price: 75, inStock: true }\n];\n\n// Check if any product is expensive AND in stock\nconst hasExpensiveAvailable = products.some(function(p) {\n  return p.price > 100 && p.inStock;\n});\nconsole.log(hasExpensiveAvailable); // true (Laptop)\n\n// Check if any product matches a search query\nconst query = 'mouse';\nconst found = products.some(function(p) {\n  return p.name.toLowerCase().includes(query.toLowerCase());\n});\nconsole.log(found); // true (Mouse)\n\n// Check if array contains any truthy value\nconst mixed = [0, '', null, undefined, false, 42];\nconsole.log(mixed.some(Boolean)); // true\n\n// Check for duplicates\nconst hasDuplicate = function(arr) {\n  return arr.some(function(item, index) {\n    return arr.indexOf(item) !== index;\n  });\n};\nconsole.log(hasDuplicate([1, 2, 3, 4])); // false\nconsole.log(hasDuplicate([1, 2, 3, 2])); // true\n\n// Check if any date is in the past\nconst dates = [\n  new Date('2025-01-01'),\n  new Date('2023-06-15'),\n  new Date('2024-12-25')\n];\nconst hasPast = dates.some(function(d) {\n  return d < new Date();\n});\nconsole.log(hasPast); // true (2023-06-15 is in the past)",
      "description": "some() handles complex conditions with multiple properties, nested predicates, and various data types."
    },
    {
      "title": "Manual some() Implementation",
      "useCase": "Understanding the internal mechanism",
      "code": "function mySome(array, callback) {\n  for (var i = 0; i < array.length; i++) {\n    if (i in array) {  // Handle sparse arrays\n      if (callback(array[i], i, array)) {\n        return true;\n      }\n    }\n  }\n  return false;\n}\n\n// Test\nvar numbers = [1, 2, 3, 4, 5];\nconsole.log(mySome(numbers, function(n) {\n  return n % 2 === 0;\n})); // true\n\nconsole.log(mySome(numbers, function(n) {\n  return n > 10;\n})); // false\n\n// Empty array\nconsole.log(mySome([], function(n) {\n  return true;\n})); // false\n\n// Short-circuit test\nvar callCount = 0;\nvar result = mySome([1, 2, 3, 4, 5], function(n) {\n  callCount++;\n  return n > 2;\n});\nconsole.log(result); // true\nconsole.log(callCount); // 3 (checked 1, 2, 3 — stopped at 3)\n\n// Sparse array behavior\nvar sparse = [1, , , 4, 5];\nconsole.log(mySome(sparse, function(n) {\n  return n === undefined;\n})); // false (empty slots are skipped)\n\n// Note: real Array.some also handles:\n// - The optional thisArg parameter\n// - Being called on non-array objects",
      "description": "A manual implementation of some() reveals its short-circuit nature and sparse array handling."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Array.some() return?",
      "options": [
        "A new array",
        "undefined",
        "A boolean (true/false)",
        "The first matching element"
      ],
      "answer": 2,
      "explanation": "some() returns a boolean: true if any element passes the test, false otherwise."
    },
    {
      "question": "What does [1, 2, 3].some(n => n > 5) return?",
      "options": [
        "true",
        "false",
        "[6]",
        "undefined"
      ],
      "answer": 1,
      "explanation": "No element is greater than 5, so some() returns false."
    },
    {
      "question": "What does [].some(n => true) return?",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "answer": 1,
      "explanation": "Some() on an empty array always returns false, even if the test always passes — no element exists to test."
    },
    {
      "question": "Does some() short-circuit?",
      "options": [
        "No, it checks every element",
        "Yes, it stops at the first match",
        "Only in strict mode",
        "Only with arrow functions"
      ],
      "answer": 1,
      "explanation": "some() short-circuits — it returns true immediately upon finding the first matching element, without checking the rest."
    },
    {
      "question": "What is the difference between some() and every()?",
      "options": [
        "some() checks if ANY pass; every() checks if ALL pass",
        "They are identical",
        "some() checks if ALL pass; every() checks if ANY pass",
        "some() returns an array; every() returns a boolean"
      ],
      "answer": 0,
      "explanation": "some() is like OR (at least one must pass). every() is like AND (all must pass)."
    },
    {
      "question": "How do you check if any number in [2, 4, 6, 8] is odd?",
      "options": [
        "arr.some(n => n % 2 !== 0)",
        "arr.every(n => n % 2 === 0)",
        "arr.filter(n => n % 2 === 0)",
        "arr.includes(odd)"
      ],
      "answer": 0,
      "explanation": "arr.some(n => n % 2 !== 0) returns false because no element is odd."
    },
    {
      "question": "Does some() mutate the original array?",
      "options": [
        "Yes",
        "No",
        "Only if the callback mutates it",
        "Only for nested objects"
      ],
      "answer": 1,
      "explanation": "some() is read-only. It does not modify the original array."
    },
    {
      "question": "What arguments does the some() callback receive?",
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
      "question": "What is a common use case for some()?",
      "options": [
        "Transforming all elements",
        "Sorting arrays",
        "Checking if any form field has an error",
        "Calculating a sum"
      ],
      "answer": 2,
      "explanation": "some() is commonly used for validation — check if any field fails a condition."
    },
    {
      "question": "How do you check if an array contains a value with custom comparison?",
      "options": [
        "arr.includes(value)",
        "arr.some(item => customCondition(item))",
        "arr.indexOf(value)",
        "arr.filter(item => customCondition(item)).length > 0"
      ],
      "answer": 1,
      "explanation": "some() accepts any test function, making it the most flexible for custom comparison logic."
    }
  ]
};
