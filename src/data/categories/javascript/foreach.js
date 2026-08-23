export const foreach = {
  "title": "JavaScript forEach()",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "<code>Array.forEach()</code> executes a provided function <strong>once for each array element</strong>, in order.",
    "Unlike <code>map()</code>, <code>forEach()</code> returns <strong>undefined</strong> — it is used primarily for <strong>side effects</strong>.",
    "Callback receives: <code>currentValue</code>, <code>index</code>, and the <code>original array</code>.",
    "forEach cannot be <strong>broken out of</strong> (no <code>break</code>, <code>continue</code>, or <code>return</code> early). Use <code>for...of</code> or <code>some()</code> for early exit."
  ],
  "laymanDefinition": "Imagine you have a list of students and you need to read each student's name out loud. You go down the line one by one, say each name, and that's it — you don't return anything. Array.forEach() is exactly that: it visits every element in the array, does something with each one (like logging, updating the DOM, or calling a function), and doesn't produce a new array. It's for performing actions, not transforming data.",
  "deepDive": [
    {
      "heading": "forEach vs map — Side Effects vs Transformation",
      "text": "The key distinction: forEach is for side effects (logging, DOM manipulation, sending data), while map is for transformation (creating a new array). Use forEach when you want to 'do something' with each element. Use map when you want to 'transform' each element into a new value. If you find yourself pushing to an external array inside forEach, consider whether map would be cleaner."
    },
    {
      "heading": "forEach Cannot Be Stopped",
      "text": "forEach always iterates over the entire array — you cannot break, continue, or return early from it. A return statement inside the callback only exits that iteration, not the loop. If you need early exit, use a for loop, for...of, or array methods like some() (stop on truthy), every() (stop on falsy), or find() (stop on match)."
    },
    {
      "heading": "forEach and Async/Await",
      "text": "forEach does NOT wait for promises. An async callback inside forEach runs all iterations concurrently, and forEach returns before any of them complete. If you need sequential async execution, use for...of with await. If you need parallel async, use Promise.all with map."
    },
    {
      "heading": "forEach on Sparse Arrays",
      "text": "forEach skips empty slots in sparse arrays (arrays with 'holes'). For example, [1, , 3] has no value at index 1 — forEach will skip it entirely. This is different from a dense array with undefined values, where forEach will call the callback with undefined."
    },
    {
      "heading": "The thisArg Parameter",
      "text": "forEach accepts an optional second argument: thisArg. If provided, it is used as 'this' inside the callback. This is rarely needed in modern code (arrow functions capture this lexically), but useful when using regular function callbacks in older code."
    }
  ],
  "interviewAnswer": "Array.forEach() executes a callback for each array element. It returns undefined and is designed for side effects (logging, DOM updates, external API calls). Unlike map, it does not produce a new array. forEach cannot be broken early — use for...of or some/every if early exit is needed. forEach does not work with await (async callbacks run concurrently). Skip sparse array slots. Use forEach when the purpose is an action per element; use map when the purpose is transforming each element into a new value.",
  "interviewQuestions": [
    {
      "question": "What does forEach() do?",
      "answer": "forEach() executes a provided callback once for each array element. It returns undefined and is used for side effects."
    },
    {
      "question": "What is the difference between forEach and map?",
      "answer": "map returns a new array with transformed values. forEach returns undefined and is for side effects. Use map when you need a result; use forEach when performing actions."
    },
    {
      "question": "Can you break out of a forEach loop?",
      "answer": "No. forEach iterates over all elements. A return in the callback only exits the current iteration, not the loop. Use for...of (with break) or some()/every() for early exit."
    },
    {
      "question": "Does forEach work with async/await?",
      "answer": "forEach does not wait for promises. An async callback inside forEach runs all iterations concurrently. Use for...of with await for sequential async execution."
    },
    {
      "question": "What arguments does the forEach callback receive?",
      "answer": "Three arguments: currentValue, index, and the array being iterated."
    },
    {
      "question": "Does forEach handle sparse arrays differently?",
      "answer": "Yes. forEach skips empty slots (holes) in sparse arrays. It does not call the callback for missing indices."
    },
    {
      "question": "What does forEach return?",
      "answer": "forEach returns undefined. It does not return a new array or any meaningful value."
    },
    {
      "question": "How do you convert forEach to use early exit?",
      "answer": "Replace with: for...of (with break/continue), some() (stops when callback returns true), every() (stops when callback returns false), or a regular for loop."
    },
    {
      "question": "Can forEach modify the original array?",
      "answer": "The callback can modify elements by writing to the index (arr[i] = newValue) or by mutating objects/arrays. However, forEach itself does not modify the array — the callback's direct modifications do."
    },
    {
      "question": "What is the thisArg parameter in forEach?",
      "answer": "An optional second argument that sets 'this' inside the callback. Rarely used with modern code (arrow functions capture this lexically)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Array.forEach() — Side Effect Execution</text><rect x=\"50\" y=\"70\" width=\"280\" height=\"180\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"190\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">Original Array</text><rect x=\"65\" y=\"105\" width=\"250\" height=\"30\" rx=\"4\" fill=\"var(--border)\"/><text x=\"190\" y=\"125\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">[1, 2, 3, 4, 5]</text><text x=\"190\" y=\"160\" fill=\"#fbbf24\" font-size=\"10\">forEach runs callback on EACH element</text><text x=\"190\" y=\"180\" fill=\"#9aa0b0\" font-size=\"10\">1 → console.log(1)</text><text x=\"190\" y=\"195\" fill=\"#9aa0b0\" font-size=\"10\">2 → console.log(2)</text><text x=\"190\" y=\"210\" fill=\"#9aa0b0\" font-size=\"10\">3 → console.log(3) ...</text><line x1=\"330\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#fbbf24\" stroke-width=\"2\"/><rect x=\"380\" y=\"70\" width=\"280\" height=\"180\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"520\" y=\"93\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\">Returns undefined</text><text x=\"520\" y=\"130\" fill=\"#9aa0b0\" font-size=\"10\">No new array created</text><text x=\"520\" y=\"155\" fill=\"#9aa0b0\" font-size=\"10\">Cannot break/continue</text><text x=\"520\" y=\"180\" fill=\"#9aa0b0\" font-size=\"10\">Does NOT await promises</text><text x=\"520\" y=\"205\" fill=\"#9aa0b0\" font-size=\"10\">Skips sparse array holes</text><text x=\"350\" y=\"280\" fill=\"#9aa0b0\" font-size=\"11\">arr.forEach(x =&gt; console.log(x)); // side effect: logging</text><text x=\"350\" y=\"300\" fill=\"#9aa0b0\" font-size=\"11\">arr.map(x =&gt; x * 2); // transformation: creates new array</text></svg>",
  "codeExamples": [
    {
      "title": "Basic forEach — Logging and Side Effects",
      "useCase": "Performing an action per element",
      "code": "const fruits = ['apple', 'banana', 'cherry', 'date'];\n\n// Log each element\nfruits.forEach(function(fruit) {\n  console.log('Fruit:', fruit);\n});\n// Fruit: apple\n// Fruit: banana\n// Fruit: cherry\n// Fruit: date\n\n// With index\nfruits.forEach(function(fruit, index) {\n  console.log((index + 1) + '. ' + fruit);\n});\n// 1. apple\n// 2. banana\n// 3. cherry\n// 4. date\n\n// Arrow syntax\nfruits.forEach(f => console.log(' - ' + f));\n\n// Using the array parameter (third argument)\nfruits.forEach(function(fruit, i, arr) {\n  console.log(fruit + ' is ' + (i + 1) + ' of ' + arr.length);\n});\n// apple is 1 of 4\n// banana is 2 of 4\n// ...",
      "description": "forEach is ideal for side effects like logging. The callback receives the element, index, and the full array."
    },
    {
      "title": "forEach vs map — Choosing the Right Tool",
      "useCase": "Understanding when to use each",
      "code": "const numbers = [1, 2, 3, 4, 5];\n\n// ❌ Anti-pattern: using forEach to build a new array\nconst doubledBad = [];\nnumbers.forEach(function(n) {\n  doubledBad.push(n * 2);\n});\nconsole.log(doubledBad); // [2, 4, 6, 8, 10]\n\n// ✅ Better: use map when transforming\nconst doubledGood = numbers.map(function(n) {\n  return n * 2;\n});\nconsole.log(doubledGood); // [2, 4, 6, 8, 10]\n\n// ✅ Good use of forEach: side effects\nnumbers.forEach(function(n) {\n  // Logging is a side effect — no transformation\n  console.log('Processing:', n);\n});\n\n// ✅ Good: updating external state\nvar total = 0;\nnumbers.forEach(function(n) {\n  total += n;  // updating external variable\n});\nconsole.log(total); // 15\n// Note: reduce is even better for this specific case\n\n// ✅ Good: DOM manipulation\ndocument.querySelectorAll('li').forEach(function(li) {\n  li.classList.add('highlight');\n});",
      "description": "Use map when you need a transformed array. Use forEach for side effects. Pushing to an external array inside forEach is a code smell — use map instead."
    },
    {
      "title": "forEach Cannot Be Broken — Workarounds",
      "useCase": "When you need early exit",
      "code": "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// ❌ This does NOT break out of forEach:\nnumbers.forEach(function(n) {\n  if (n > 5) {\n    return;  // Only exits this iteration, not the loop\n  }\n  console.log(n);\n});\n// Logs: 1, 2, 3, 4, 5 (all elements still visited!)\n\n// ✅ Use for...of with break:\nfor (const n of numbers) {\n  if (n > 5) break;\n  console.log(n);\n}\n// Logs: 1, 2, 3, 4, 5\n\n// ✅ Use some() for early exit on condition:\nnumbers.some(function(n) {\n  if (n > 5) return true;  // stops iteration\n  console.log(n);\n  return false;\n});\n// Logs: 1, 2, 3, 4, 5\n\n// ✅ Use every() for early exit (stop on false):\nnumbers.every(function(n) {\n  if (n > 5) return false;  // stops iteration\n  console.log(n);\n  return true;\n});\n// Logs: 1, 2, 3, 4, 5\n\n// ✅ Regular for loop with break:\nfor (let i = 0; i < numbers.length; i++) {\n  if (numbers[i] > 5) break;\n  console.log(numbers[i]);\n}",
      "description": "forEach cannot be broken — return inside the callback only exits one iteration. Use for...of (with break), some(), every(), or a for loop for early exit."
    },
    {
      "title": "forEach with Async/Await — The Trap",
      "useCase": "Understanding async behavior",
      "code": "function delay(ms) {\n  return new Promise(function(resolve) {\n    setTimeout(resolve, ms);\n  });\n}\n\nasync function processItem(item) {\n  await delay(500);\n  console.log('Processed:', item);\n  return item * 2;\n}\n\n// ❌ forEach does NOT wait for async callbacks\nasync function badProcess(items) {\n  items.forEach(async function(item) {\n    await processItem(item);\n  });\n  console.log('Done (but not really!)');\n  // Logs 'Done' immediately, then processes each item in parallel\n}\n\n// ✅ Use for...of with await for sequential\nasync function goodProcessSequential(items) {\n  for (const item of items) {\n    await processItem(item);\n  }\n  console.log('All done sequentially');\n}\n\n// ✅ Use Promise.all with map for parallel\nasync function goodProcessParallel(items) {\n  await Promise.all(items.map(function(item) {\n    return processItem(item);\n  }));\n  console.log('All done in parallel');\n}\n\n// Test:\n// badProcess([1, 2, 3]);\n//   → 'Done (but not really!)'\n//   → (500ms later) 'Processed: 1', 'Processed: 2', 'Processed: 3'\n//\n// goodProcessSequential([1, 2, 3]);\n//   → (500ms) 'Processed: 1'\n//   → (1000ms) 'Processed: 2'\n//   → (1500ms) 'Processed: 3'\n//   → 'All done sequentially'\n//\n// goodProcessParallel([1, 2, 3]);\n//   → (500ms) 'Processed: 1', 'Processed: 2', 'Processed: 3'\n//   → 'All done in parallel'",
      "description": "forEach does NOT await async callbacks. Use for...of for sequential async, Promise.all with map for parallel async."
    },
    {
      "title": "Practical forEach — DOM Manipulation",
      "useCase": "Real-world side effects",
      "code": "// Update all elements with a class\nvar items = document.querySelectorAll('.list-item');\n\n// forEach on NodeList (works in modern browsers)\nitems.forEach(function(el) {\n  el.style.color = '#333';\n  el.classList.add('processed');\n});\n\n// For older browsers: convert to array first\n// [].slice.call(items).forEach(...)\n// or: [...items].forEach(...)\n\n// Practical: form field validation\nvar formFields = ['#name', '#email', '#password'];\n\nformFields.forEach(function(selector) {\n  var field = document.querySelector(selector);\n  if (field) {\n    field.addEventListener('blur', function() {\n      validateField(field);\n    });\n  }\n});\n\nfunction validateField(field) {\n  if (field.value.trim() === '') {\n    field.classList.add('error');\n  } else {\n    field.classList.remove('error');\n  }\n}\n\n// Practical: updating external state\nvar userActions = [];\n\nfunction logAction(action) {\n  userActions.push({\n    action: action,\n    timestamp: Date.now()\n  });\n}\n\n['login', 'view_page', 'click_button'].forEach(function(action) {\n  logAction(action);\n});\nconsole.log(userActions.length); // 3\n\n// Practical: sending analytics\nvar events = [\n  { name: 'page_view', data: { page: '/' } },\n  { name: 'click', data: { element: 'button' } },\n];\n\nevents.forEach(function(event) {\n  // sendEvent(event.name, event.data);  // side effect\n  console.log('Would send:', event.name);\n});",
      "description": "forEach is ideal for DOM manipulation, event binding, updating external state, and analytics tracking — all side effects that don't produce a new array."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does forEach() return?",
      "options": [
        "A new array",
        "undefined",
        "The original array",
        "A boolean"
      ],
      "answer": 1,
      "explanation": "forEach returns undefined. It is used for side effects, not value transformation."
    },
    {
      "question": "What is the main difference between forEach and map?",
      "options": [
        "forEach is faster",
        "map returns a new array; forEach returns undefined",
        "forEach can break; map cannot",
        "map only works with numbers"
      ],
      "answer": 1,
      "explanation": "map creates a new array from return values. forEach returns undefined and is for side effects."
    },
    {
      "question": "Can you break out of a forEach loop?",
      "options": [
        "Yes, using break",
        "Yes, using return",
        "No, forEach always processes all elements",
        "Yes, using continue"
      ],
      "answer": 2,
      "explanation": "forEach cannot be broken. Return only exits the current callback iteration. Use for...of for early exit."
    },
    {
      "question": "Does forEach wait for async functions?",
      "options": [
        "Yes, it awaits each callback",
        "No, async callbacks run concurrently",
        "It depends on the browser",
        "Only if the callback uses await"
      ],
      "answer": 1,
      "explanation": "forEach does not wait for promises. Async callbacks run in parallel and forEach returns immediately."
    },
    {
      "question": "What arguments does the forEach callback receive?",
      "options": [
        "currentValue only",
        "currentValue, index",
        "currentValue, index, array",
        "currentValue, array"
      ],
      "answer": 2,
      "explanation": "The callback receives currentValue, index, and the original array."
    },
    {
      "question": "What is an anti-pattern with forEach?",
      "options": [
        "Using it for logging",
        "Pushing to an external array inside forEach (use map instead)",
        "Using it with arrow functions",
        "Using the index parameter"
      ],
      "answer": 1,
      "explanation": "Building a new array by pushing inside forEach is an anti-pattern. Use map which is designed for transformation."
    },
    {
      "question": "Does forEach handle sparse arrays?",
      "options": [
        "Yes, it calls the callback with undefined for holes",
        "No, it skips empty slots",
        "It depends on the engine",
        "Sparse arrays throw an error"
      ],
      "answer": 1,
      "explanation": "forEach skips empty slots in sparse arrays. Only indices that exist are visited."
    },
    {
      "question": "How do you convert forEach to allow early exit?",
      "options": [
        "Add a break statement",
        "Use for...of with break instead",
        "Return from the callback",
        "Set a flag and check it"
      ],
      "answer": 1,
      "explanation": "Replace forEach with for...of loop which supports break, continue, and return."
    },
    {
      "question": "What will this log? [1, 2, 3].forEach(x => { if (x === 2) return; console.log(x); });",
      "options": [
        "1 2 3",
        "1 3",
        "1 2",
        "1"
      ],
      "answer": 1,
      "explanation": "return only exits the current callback invocation. The loop continues. x=2 is skipped (return stops the console.log), but x=3 still runs. Output: 1, 3."
    },
    {
      "question": "Can forEach modify the original array?",
      "options": [
        "No, forEach is immutable",
        "Yes, if the callback explicitly modifies elements",
        "Only with numbers",
        "Only with strings"
      ],
      "answer": 1,
      "explanation": "forEach itself doesn't modify the array, but the callback can modify elements by assignment (arr[i] = x) or mutation."
    }
  ]
};
