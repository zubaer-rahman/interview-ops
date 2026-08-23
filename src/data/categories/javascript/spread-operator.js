export const spread_operator = {
  "title": "JavaScript Spread Operator",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "The <strong>spread operator</strong> (<code>...</code>) expands an iterable (array, string, object) into its individual elements.",
    "Spread can be used to <strong>copy</strong> arrays/objects, <strong>concatenate</strong> arrays, <strong>pass array elements as arguments</strong>, and <strong>merge objects</strong>.",
    "Object spread (<code>{...obj}</code>) creates a <strong>shallow copy</strong> — nested objects are still shared by reference.",
    "Spread works on any <strong>iterable</strong> (arrays, strings, Sets, Maps) and on <strong>own enumerable properties</strong> of objects."
  ],
  "laymanDefinition": "Imagine you have a box of colorful balls and you want to take each ball out and place them individually on a shelf. The spread operator (...) is like opening the box and letting all the balls spill out individually. Instead of having a box (array) as one unit, you now have the contents as separate items. This is incredibly useful for combining boxes of balls, making copies, or handing individual balls to different people (functions).",
  "deepDive": [
    {
      "heading": "Spread Syntax in Array Literals",
      "text": "Inside an array literal, the spread operator expands an iterable into individual elements: <code>const combined = [...arr1, ...arr2]</code>. This creates a new array containing all elements from arr1 followed by all elements from arr2. Spread can be placed anywhere in the array: <code>const arr = [first, ...middle, last]</code>. This is commonly used for copying, concatenating, and inserting elements."
    },
    {
      "heading": "Spread in Function Calls",
      "text": "When calling a function, spread expands an iterable into individual arguments: <code>Math.max(...numbers)</code> is equivalent to <code>Math.max(num[0], num[1], ...)</code>. This replaces the older <code>Function.prototype.apply</code> pattern. Spread works with any number of arguments and is more readable than apply()."
    },
    {
      "heading": "Object Spread Properties",
      "text": "Object spread (<code>{...obj1, ...obj2}</code>) copies own enumerable properties from source objects into the new object. If multiple sources have the same key, the later source overwrites earlier ones. This is commonly used for immutable state updates: <code>const updated = { ...state, name: 'new name' }</code>. Object spread is a shallow copy — nested objects are shared."
    },
    {
      "heading": "Spread vs rest Parameters",
      "list": [
        "<strong>Spread</strong> expands an iterable into individual elements — used in array/object literals and function calls.",
        "<strong>Rest</strong> collects individual elements into an array — used in function parameters and destructuring.",
        "Both use the <code>...</code> syntax but serve opposite purposes: spread unpacks, rest packs.",
        "Spread is used on the <strong>right side</strong> of assignment or in function calls; rest is used on the <strong>left side</strong> (parameters)."
      ]
    },
    {
      "heading": "Spread with Strings and Sets",
      "text": "Spread works on any iterable, including strings: <code>[...'hello']</code> returns <code>['h', 'e', 'l', 'l', 'o']</code>. With Sets: <code>const unique = [...new Set(arr)]</code> removes duplicates from an array. With Maps: <code>const entries = [...map]</code> returns an array of [key, value] pairs. Strings are iterated by Unicode code points."
    }
  ],
  "interviewAnswer": "The spread operator (...) expands iterables (arrays, strings, Sets, Maps) into individual elements. In array literals, it copies and concatenates arrays: [...arr1, ...arr2]. In function calls, it spreads array elements as arguments: Math.max(...nums). In object literals, it copies own enumerable properties: {...obj1, ...obj2}. Object spread creates a shallow copy. Spread is the opposite of rest — spread unpacks, rest collects. Spread is widely used for immutable updates, array manipulation, and function argument passing.",
  "interviewQuestions": [
    {
      "question": "What does the spread operator do?",
      "answer": "The spread operator (...) expands an iterable (array, string, Set, Map) into its individual elements. It can be used in array literals, object literals, and function calls."
    },
    {
      "question": "How do you copy an array using spread?",
      "answer": "const copy = [...original]. This creates a new array with all elements of original. It's a shallow copy — nested objects are still shared."
    },
    {
      "question": "How do you merge two objects using spread?",
      "answer": "const merged = { ...obj1, ...obj2 }. If both have the same key, obj2's value overwrites obj1's. This is a shallow merge."
    },
    {
      "question": "What is the difference between spread and rest?",
      "answer": "Spread unpacks an iterable into individual elements (used in arrays, objects, function calls). Rest collects individual elements into an array (used in function parameters). Both use ... but serve opposite purposes."
    },
    {
      "question": "How do you use spread to pass array elements as function arguments?",
      "answer": "Math.max(...[1, 5, 3, 9, 2]) spreads the array elements as individual arguments: Math.max(1, 5, 3, 9, 2). This replaces the older apply() pattern."
    },
    {
      "question": "Is object spread a deep or shallow copy?",
      "answer": "Object spread creates a shallow copy. Top-level properties are independent, but nested objects and arrays are shared by reference between the original and the copy."
    },
    {
      "question": "Can you spread a string?",
      "answer": "Yes. [...'hello'] returns ['h', 'e', 'l', 'l', 'o']. Strings are iterables, so spread works character by character (by Unicode code point)."
    },
    {
      "question": "How do you remove duplicates from an array using spread?",
      "answer": "const unique = [...new Set(arr)]. The Set removes duplicates, and spread converts it back to an array."
    },
    {
      "question": "What happens when you spread a non-iterable?",
      "answer": "Spreading a non-iterable (like a plain number or object without Symbol.iterator) throws a TypeError: 'xxx is not iterable'."
    },
    {
      "question": "Where can spread be used in an array literal?",
      "answer": "Spread can be used anywhere in an array literal: at the beginning ([...arr, 5]), middle ([1, ...arr, 5]), or end ([1, ...arr]). You can also use multiple spreads ([...a, ...b, ...c])."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Spread Operator (...) Flow</text><rect x=\"60\" y=\"70\" width=\"240\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"180\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">const arr = [1, 2, 3]</text><text x=\"180\" y=\"112\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Array with 3 elements</text><line x1=\"300\" y1=\"97\" x2=\"350\" y2=\"97\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"325\" y=\"87\" fill=\"#fbbf24\" font-size=\"11\">...</text><rect x=\"350\" y=\"70\" width=\"280\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"490\" y=\"93\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">console.log(...arr)</text><text x=\"490\" y=\"112\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">→ 1 2 3 (individual elements)</text><line x1=\"490\" y1=\"125\" x2=\"490\" y2=\"155\" stroke=\"#e5c07b\" stroke-width=\"2\"/><rect x=\"120\" y=\"155\" width=\"260\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"178\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\">const copy = [...arr]</text><text x=\"250\" y=\"197\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">→ [1, 2, 3] new array copy</text><line x1=\"380\" y1=\"182\" x2=\"420\" y2=\"182\" stroke=\"#fbbf24\" stroke-width=\"2\"/><rect x=\"420\" y=\"155\" width=\"220\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"530\" y=\"178\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">const merged = [...a, ...b]</text><text x=\"530\" y=\"197\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">→ concatenated array</text><text x=\"350\" y=\"280\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Spread unpacks iterables into individual elements</text></svg>",
  "codeExamples": [
    {
      "title": "Array Copy and Concatenation",
      "useCase": "Creating new arrays from existing ones",
      "code": "const fruits = ['apple', 'banana', 'orange'];\nconst vegetables = ['carrot', 'broccoli'];\n\n// Copy an array\nconst fruitsCopy = [...fruits];\nconsole.log(fruitsCopy); // ['apple', 'banana', 'orange']\n\n// Concatenate arrays\nconst food = [...fruits, ...vegetables];\nconsole.log(food);\n// ['apple', 'banana', 'orange', 'carrot', 'broccoli']\n\n// Insert between\nconst more = ['grape', ...fruits, 'kiwi'];\nconsole.log(more);\n// ['grape', 'apple', 'banana', 'orange', 'kiwi']\n\n// Multiple spreads\nconst all = [...fruits, ...vegetables, ...['milk', 'bread']];\n\nconsole.log(fruitsCopy === fruits); // false (different references)",
      "description": "Spread creates new arrays. The original arrays are not modified. Copying is shallow — nested objects are shared."
    },
    {
      "title": "Spread in Function Calls",
      "useCase": "Passing array elements as arguments",
      "code": "const numbers = [45, 12, 89, 33, 71, 56];\n\n// Spread as function arguments\nconst max = Math.max(...numbers);\nconst min = Math.min(...numbers);\n\nconsole.log(max); // 89\nconsole.log(min); // 12\n\n// Equivalent to:\n// Math.max(45, 12, 89, 33, 71, 56)\n\n// Old way (still works but less readable):\n// Math.max.apply(null, numbers)\n\n// Using with Date constructor\nconst dateParts = [2024, 0, 15]; // [year, month, day]\nconst date = new Date(...dateParts);\nconsole.log(date); // Mon Jan 15 2024\n\n// With push()\nconst arr = [1, 2];\narr.push(...[3, 4, 5]);\nconsole.log(arr); // [1, 2, 3, 4, 5]",
      "description": "Spread replaces apply() for passing array elements as function arguments. It works with any function that accepts multiple arguments."
    },
    {
      "title": "Object Spread for Immutable Updates",
      "useCase": "State management pattern",
      "code": "const state = {\n  user: { name: 'Alice', age: 30 },\n  settings: { theme: 'dark', lang: 'en' },\n  items: ['a', 'b']\n};\n\n// Shallow update — only top level is new\nconst updated = {\n  ...state,\n  settings: {\n    ...state.settings,\n    theme: 'light'  // override specific property\n  }\n};\n\nconsole.log(updated.settings.theme);  // 'light'\nconsole.log(state.settings.theme);   // 'dark' (unchanged)\n\n// But nested objects not spread are still shared:\nconsole.log(updated.items === state.items); // true (same reference)\n\n// Override properties with spread order:\nconst defaults = { theme: 'dark', lang: 'en', fontSize: 14 };\nconst userPrefs = { theme: 'light' };\nconst config = { ...defaults, ...userPrefs };\nconsole.log(config); // { theme: 'light', lang: 'en', fontSize: 14 }",
      "description": "Object spread enables immutable update patterns — create a new object with changes instead of mutating the original. Later sources override earlier ones."
    },
    {
      "title": "Practical: Removing Duplicates and String Manipulation",
      "useCase": "Everyday spread patterns",
      "code": "// Remove duplicates from an array\nconst withDuplicates = [1, 2, 3, 2, 4, 1, 5];\nconst unique = [...new Set(withDuplicates)];\nconsole.log(unique); // [1, 2, 3, 4, 5]\n\n// Convert NodeList to Array\nconst divs = document.querySelectorAll('div');\nconst divArray = [...divs]; // Now has array methods like map/filter\n\n// Convert string to array of characters\nconst chars = [...'Hello'];\nconsole.log(chars); // ['H', 'e', 'l', 'l', 'o']\n\n// Max from numbers in a string\nconst values = '45,12,89';\nconst maxVal = Math.max(...values.split(',').map(Number));\nconsole.log(maxVal); // 89\n\n// Merge arrays with deduplication\nconst a = [1, 2, 3];\nconst b = [3, 4, 5];\nconst merged = [...new Set([...a, ...b])];\nconsole.log(merged); // [1, 2, 3, 4, 5]",
      "description": "Practical patterns: deduplication with Set, converting DOM collections to arrays, and string manipulation."
    },
    {
      "title": "Spread vs Rest — Side by Side",
      "useCase": "Understanding the difference",
      "code": "// SPREAD: unpacks (right side of assignment)\nconst arr = [1, 2, 3];\nconst spread = [...arr, 4];\nconsole.log(spread); // [1, 2, 3, 4]\n\nfunction sum(a, b, c) {\n  return a + b + c;\n}\nconsole.log(sum(...arr)); // 6 (spread)\n\n// REST: collects (left side / parameters)\nfunction collect(...args) {\n  console.log(args); // [1, 2, 3, 4, 5]\n}\ncollect(1, 2, 3, 4, 5);\n\nconst [first, ...rest] = [1, 2, 3, 4];\nconsole.log(first); // 1\nconsole.log(rest);  // [2, 3, 4]\n\n// Both use ... but:\n// Spread: expands an iterable INTO individual elements\n// Rest: collects individual elements INTO an array",
      "description": "Spread and rest use the same syntax (...) but opposite directions. Spread unpacks iterables; rest collects values into arrays."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does [...[1, 2, 3]] return?",
      "options": [
        "[[1, 2, 3]]",
        "[1, 2, 3]",
        "[...[1, 2, 3]]",
        "undefined"
      ],
      "answer": 1,
      "explanation": "Spread unpacks the inner array elements into a new array, resulting in [1, 2, 3]."
    },
    {
      "question": "What is the result of Math.max(...[5, 2, 9, 1])?",
      "options": [
        "5",
        "2",
        "9",
        "1"
      ],
      "answer": 2,
      "explanation": "Spread expands the array into individual arguments: Math.max(5, 2, 9, 1) = 9."
    },
    {
      "question": "Does {...obj} create a deep copy?",
      "options": [
        "Yes",
        "No, it creates a shallow copy",
        "It creates a reference",
        "It depends on the object size"
      ],
      "answer": 1,
      "explanation": "Object spread creates a shallow copy. Top-level properties are independent but nested objects are shared."
    },
    {
      "question": "What is the difference between spread and rest?",
      "options": [
        "They are the same",
        "Spread unpacks iterables; rest collects into arrays",
        "Rest unpacks iterables; spread collects into arrays",
        "Spread only works with objects"
      ],
      "answer": 1,
      "explanation": "Spread (...) expands iterables into individual elements. Rest (...) collects individual elements into an array."
    },
    {
      "question": "What does [...'abc'] return?",
      "options": [
        "'abc'",
        "['a', 'b', 'c']",
        "['abc']",
        "[...'abc']"
      ],
      "answer": 1,
      "explanation": "Strings are iterables. Spread iterates over each character and creates an array: ['a', 'b', 'c']."
    },
    {
      "question": "What happens when you spread a non-iterable (like a number)?",
      "options": [
        "It becomes an array with that number",
        "It throws TypeError",
        "It returns undefined",
        "It returns an empty array"
      ],
      "answer": 1,
      "explanation": "Numbers are not iterable. Spreading a non-iterable throws a TypeError."
    },
    {
      "question": "How do you merge two objects with spread?",
      "options": [
        "{obj1, obj2}",
        "{...obj1, ...obj2}",
        "merge(obj1, obj2)",
        "Object.spread(obj1, obj2)"
      ],
      "answer": 1,
      "explanation": "Use {...obj1, ...obj2} to merge. Later sources overwrite earlier ones for duplicate keys."
    },
    {
      "question": "What will the following log? const a = [1, 2]; const b = [...a]; console.log(a === b);",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "answer": 1,
      "explanation": "Spread creates a new array. a and b are different array objects, so a === b is false."
    },
    {
      "question": "Can spread be used multiple times in one array?",
      "options": [
        "Yes: [...a, ...b, ...c]",
        "No, only once",
        "Only at the end",
        "Only at the beginning"
      ],
      "answer": 0,
      "explanation": "You can use multiple spreads in one array literal: [...arr1, ...arr2, ...arr3]."
    },
    {
      "question": "What does [...new Set([1, 1, 2, 3, 3])] return?",
      "options": [
        "[1, 2, 3]",
        "[1, 1, 2, 3, 3]",
        "Error",
        "[]"
      ],
      "answer": 0,
      "explanation": "Set removes duplicates (1, 2, 3). Spread converts the Set back to an array: [1, 2, 3]."
    }
  ]
};
