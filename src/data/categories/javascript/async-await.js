export const async_await = {
  "title": "Async/Await",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "<code>async/await</code> is <strong>syntactic sugar</strong> over Promises that makes asynchronous code read like synchronous code.",
    "An <code>async</code> function always returns a <strong>Promise</strong>. The <code>await</code> keyword pauses execution until the awaited Promise settles.",
    "<code>await</code> can only be used inside an <code>async</code> function (except in top-level modules).",
    "Error handling uses standard <code>try/catch</code> blocks instead of <code>.catch()</code> chains."
  ],
  "laymanDefinition": "Imagine you're cooking a meal with a friend. The old way (callbacks) is like telling your friend 'Start chopping the vegetables, and when you're done, tell me, and then I'll start cooking, and when I'm done, I'll tell you to set the table.' With Promises, it's more organized but still has a special language ('then do this, then do that'). Async/await is the most natural: you simply say 'Chop vegetables. Cook. Set table.' Each step waits for the previous one to finish. You don't need special handshake language — it looks just like a normal recipe. That's what async/await does for JavaScript: it lets you write async code that looks as simple as synchronous code.",
  "deepDive": [
    {
      "heading": "How async Functions Work",
      "text": "When you declare a function with <code>async</code>, it automatically wraps its return value in Promise.resolve(). If the function throws, the returned promise rejects. Inside an async function, you can use <code>await</code> to pause execution until a promise settles. The function does not block the main thread — it suspends execution and resumes when the awaited promise resolves. This suspension is handled by JavaScript's event loop, similar to how generators yield control."
    },
    {
      "heading": "Async/Await vs Promise Chains",
      "text": "Both achieve the same goal. Async/await is generally more readable for sequential operations: no nested .then() calls, no chaining syntax. Errors are handled with familiar try/catch rather than .catch(). However, promise combinators (Promise.all, etc.) are still needed for parallel execution. Async/await can also be slightly slower in tight loops due to the overhead of the generator-based state machine."
    },
    {
      "heading": "Parallel Execution with Async/Await",
      "text": "Using await on each promise sequentially is slow: <code>const a = await fetchA(); const b = await fetchB();</code> — fetchB doesn't start until fetchA finishes. To run in parallel, start all promises first, then await them: <code>const aPromise = fetchA(); const bPromise = fetchB(); const a = await aPromise; const b = await bPromise;</code> or use <code>const [a, b] = await Promise.all([fetchA(), fetchB()]);</code>."
    },
    {
      "heading": "Error Handling Patterns",
      "text": "Try/catch in async functions works exactly like synchronous try/catch. If any awaited promise rejects (or any synchronous code throws), execution jumps to the catch block. You can have multiple try/catch blocks for fine-grained error handling, or one at the top level. Unhandled rejections in async functions (without try/catch) cause unhandled promise rejections."
    },
    {
      "heading": "Async/Await in Loops and Array Methods",
      "text": "Using await inside forEach does NOT work as expected — forEach ignores the returned promise and continues the loop. Use for...of for sequential execution: <code>for (const item of items) { const result = await process(item); }</code>. This processes items one at a time. For parallel execution, use Promise.all with map: <code>const results = await Promise.all(items.map(item => process(item)));</code>."
    }
  ],
  "interviewAnswer": "Async/await is syntactic sugar over promises that allows writing asynchronous code with synchronous-like syntax. An async function returns a promise. The await keyword pauses the function's execution until the awaited promise settles (resolves or rejects), then resumes with the resolved value. If the promise rejects, await throws the rejection reason, which can be caught with try/catch. For parallelism, use Promise.all. For sequential loops, use for...of with await. Async/await improves readability over promise chains but doesn't replace the need for understanding promises — they work together as complementary technologies.",
  "interviewQuestions": [
    {
      "question": "What does the async keyword do?",
      "answer": "async before a function declaration makes the function always return a Promise. If the function returns a value, that value is wrapped in Promise.resolve(). If it throws, the returned promise rejects. It also enables the use of 'await' inside the function."
    },
    {
      "question": "What does await do?",
      "answer": "await pauses the execution of an async function until the awaited promise settles. It then returns the resolved value. If the promise rejects, await throws the rejection reason. While paused, the event loop can process other tasks — the main thread is not blocked."
    },
    {
      "question": "What happens if you await a non-promise value?",
      "answer": "await converts any value to a promise using Promise.resolve(). Awaiting a non-promise value (e.g., await 5) wraps it in a resolved promise and 'pauses' for one microtask tick. In practice, it returns the value directly on the next microtask."
    },
    {
      "question": "How does async/await differ from promise chains?",
      "answer": "Async/await provides synchronous-like syntax: no .then() callbacks, no nesting. Error handling uses try/catch instead of .catch(). Async/await is generally more readable for sequential operations. Promise chains excel with promise combinators (Promise.all, .race) and when passing promises as values."
    },
    {
      "question": "How do you handle errors with async/await?",
      "answer": "Use try/catch: <code>async function load() { try { const data = await fetch(url); return await data.json(); } catch (err) { console.error(err); throw err; } }</code>. The catch block catches both rejected promises AND synchronous errors in the try block."
    },
    {
      "question": "Why does await inside forEach NOT work as expected?",
      "answer": "forEach executes the callback for each element but does NOT wait for async callbacks to complete. It runs all callbacks concurrently. Use for...of for sequential execution: <code>for (const item of items) { await process(item); }</code>."
    },
    {
      "question": "How do you run async operations in parallel with async/await?",
      "answer": "Start all promises first, then await them: <code>const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);</code>. This starts both fetches simultaneously and waits for both to complete."
    },
    {
      "question": "Can you use await outside an async function?",
      "answer": "In modern JavaScript (ES2022+), top-level await is supported in modules. In non-module scripts or older environments, await is only valid inside async functions. Top-level await blocks the module's execution but not other modules."
    },
    {
      "question": "What is the async/await equivalent of Promise.all?",
      "answer": "There is no built-in async/await syntax for Promise.all. You must use Promise.all explicitly: <code>const results = await Promise.all([task1(), task2()]);</code>. This is the standard pattern for parallel execution."
    },
    {
      "question": "Is async/await faster than promise chains?",
      "answer": "Async/await has a slight overhead due to the state machine generated by the engine (similar to generators). In most real-world applications, the difference is negligible. Readability and maintainability should guide the choice, not performance."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"380\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Async/Await Execution Flow</text><rect x=\"50\" y=\"70\" width=\"240\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"170\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">async function loadData()</text><text x=\"170\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">returns a Promise</text><line x1=\"290\" y1=\"95\" x2=\"340\" y2=\"95\" stroke=\"#fbbf24\" stroke-width=\"2\"/><rect x=\"340\" y=\"70\" width=\"300\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"490\" y=\"93\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">const res = await fetch(url)</text><text x=\"490\" y=\"108\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">execution PAUSES here</text><line x1=\"490\" y1=\"120\" x2=\"490\" y2=\"148\" stroke=\"#98c379\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"130\" y=\"148\" width=\"220\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"240\" y=\"171\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">const data = await res.json()</text><text x=\"240\" y=\"186\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">execution PAUSED again</text><line x1=\"350\" y1=\"198\" x2=\"350\" y2=\"228\" stroke=\"#e5c07b\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><rect x=\"200\" y=\"228\" width=\"300\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"350\" y=\"248\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\">return data // resolved value</text><text x=\"350\" y=\"310\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">During await pauses, the event loop processes other tasks</text><text x=\"350\" y=\"335\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">try/catch wraps the entire flow for error handling</text><text x=\"350\" y=\"360\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"11\">Any rejected promise → throws → caught by catch</text></svg>",
  "codeExamples": [
    {
      "title": "Sequential Async/Await vs Promise Chain",
      "useCase": "Comparing readability",
      "code": "// Promise chain — nested-ish\nfunction loadUserChain(userId) {\n  return fetch('/api/users/' + userId)\n    .then(function(r) { return r.json(); })\n    .then(function(user) {\n      return fetch('/api/posts?userId=' + user.id);\n    })\n    .then(function(r) { return r.json(); });\n}\n\n// Async/await — looks synchronous\nasync function loadUserAsync(userId) {\n  const userRes = await fetch('/api/users/' + userId);\n  const user = await userRes.json();\n\n  const postsRes = await fetch('/api/posts?userId=' + user.id);\n  const posts = await postsRes.json();\n\n  return { user, posts };\n}\n\nloadUserAsync(1).then(function(data) {\n  console.log(data.user.name, 'has', data.posts.length, 'posts');\n});",
      "description": "Async/await reads top-to-bottom like synchronous code. No .then() nesting, no callback chains. Each await pauses until the promise settles, then the result is assigned to a variable."
    },
    {
      "title": "Parallel Execution with Async/Await",
      "useCase": "Running concurrent operations",
      "code": "async function loadDashboard() {\n  // BAD — sequential (slow):\n  // const user = await fetch('/api/user').then(r => r.json());\n  // const posts = await fetch('/api/posts').then(r => r.json());\n  // Total time: time(user) + time(posts)\n\n  // GOOD — parallel (fast):\n  const [user, posts] = await Promise.all([\n    fetch('/api/user').then(function(r) { return r.json(); }),\n    fetch('/api/posts').then(function(r) { return r.json(); })\n  ]);\n  // Total time: max(time(user), time(posts))\n\n  return { user, posts };\n}\n\nloadDashboard().then(function(d) {\n  console.log('Dashboard loaded:', d.user.name, d.posts.length, 'posts');\n});",
      "description": "Never await sequentially when operations are independent. Use Promise.all to run them in parallel, cutting total wait time from sum to max."
    },
    {
      "title": "Error Handling with try/catch",
      "useCase": "Clear error boundaries",
      "code": "async function saveUserData(user) {\n  try {\n    const response = await fetch('/api/users', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(user)\n    });\n\n    if (!response.ok) {\n      throw new Error('HTTP error: ' + response.status);\n    }\n\n    const saved = await response.json();\n    return saved;\n  } catch (err) {\n    // Catches both network errors AND HTTP errors\n    console.error('Save failed:', err.message);\n\n    // Optional: retry logic\n    if (err.message.includes('network')) {\n      return retrySave(user);\n    }\n\n    showUserError('Could not save user. Please try again.');\n    throw err; // Re-throw if caller needs to know\n  }\n}\n\nasync function retrySave(user, attempts = 3) {\n  for (let i = 0; i < attempts; i++) {\n    try {\n      return await saveUserData(user);\n    } catch (e) {\n      if (i === attempts - 1) throw e;\n      await new Promise(function(r) { setTimeout(r, 1000 * (i + 1)); });\n    }\n  }\n}",
      "description": "try/catch with async/await works exactly like synchronous code. One catch block handles all error types. The retry example shows how natural error handling integrates with async/await."
    },
    {
      "title": "Sequential Processing with for...of",
      "useCase": "Async loop — one at a time",
      "code": "async function processItems(items) {\n  const results = [];\n\n  // for...of with await — processes sequentially\n  for (const item of items) {\n    console.log('Processing:', item.id);\n    const result = await processItem(item);\n    results.push(result);\n  }\n\n  return results;\n}\n\n// WRONG — forEach doesn't await:\n// items.forEach(async (item) => {\n//   const result = await processItem(item);  // Runs all in parallel!\n//   results.push(result);\n// });\n// console.log(results);  // Empty array! forEach finished before any await\n\nasync function processItem(item) {\n  await new Promise(function(r) { setTimeout(r, 100); });\n  return { id: item.id, processed: true };\n}\n\nprocessItems([{id:1},{id:2},{id:3}]).then(function(r) {\n  console.log('Done:', r.length, 'items');\n});",
      "description": "for...of with await processes items one at a time. forEach does NOT work because it calls the async callback but doesn't wait for the returned promise."
    },
    {
      "title": "Async/Await with IIFE and Top-Level Await",
      "useCase": "Running async code at module scope",
      "code": "// Pattern 1: IIFE (Immediately Invoked Function Expression)\n// Used in non-module scripts or older environments\n(async function() {\n  try {\n    const data = await fetch('https://api.example.com/data');\n    const json = await data.json();\n    console.log('Data:', json);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n})();\n\n// Pattern 2: Top-level await (ES2022 modules)\n// Only works in <script type=\"module\"> tags\n// import { fetchData } from './utils.js';\n// const data = await fetchData();\n// console.log('Module data:', data);\n// export const processed = processData(data);\n\n// Pattern 3: async function expression\nconst loadConfig = async function() {\n  const res = await fetch('/config.json');\n  return res.json();\n};\n\nloadConfig().then(function(cfg) {\n  console.log('Config loaded:', cfg);\n});",
      "description": "IIFE pattern wraps top-level await code in non-module scripts. Top-level await (in modules) allows await at the module root without an async wrapper."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does an async function always return?",
      "options": [
        "The returned value directly",
        "A Promise",
        "undefined",
        "A callback"
      ],
      "answer": 1,
      "explanation": "async functions always return a Promise. If the return value is not a promise, it's wrapped in Promise.resolve()."
    },
    {
      "question": "What does the await keyword do?",
      "options": [
        "Blocks the main thread",
        "Pauses the async function until the promise settles",
        "Converts the promise to a callback",
        "Runs the promise synchronously"
      ],
      "answer": 1,
      "explanation": "await pauses the execution of the async function and resumes when the promise settles. The event loop continues processing other tasks during the pause."
    },
    {
      "question": "Can you use await inside a forEach callback?",
      "options": [
        "Yes, it works the same as anywhere else",
        "No — forEach does not wait for async callbacks",
        "Only if the callback is async",
        "Yes, but only with arrow functions"
      ],
      "answer": 1,
      "explanation": "forEach ignores the promise returned by the async callback and continues the loop immediately. Use for...of with await for sequential execution."
    },
    {
      "question": "How do you handle errors in async/await?",
      "options": [
        ".catch() on the function call",
        "try/catch blocks",
        "onerror callback",
        "Both A and B"
      ],
      "answer": 3,
      "explanation": "Errors in async/await can be handled with try/catch inside the function or .catch() on the returned promise. try/catch is the more natural approach."
    },
    {
      "question": "What is the async/await equivalent of Promise.all?",
      "options": [
        "await.all()",
        "There is no equivalent — use Promise.all with await",
        "asyncAll()",
        "Promise.combine()"
      ],
      "answer": 1,
      "explanation": "There is no built-in async/await syntax for parallel execution. Use Promise.all([...]) and await the result."
    },
    {
      "question": "What will the following log? async function test() { return 42; } test().then(v => console.log(v));",
      "options": [
        "42",
        "Promise { 42 }",
        "undefined",
        "Error"
      ],
      "answer": 0,
      "explanation": "Async functions wrap non-promise return values in Promise.resolve(). So test() returns a Promise that resolves to 42."
    },
    {
      "question": "What happens if you don't await a promise inside an async function?",
      "options": [
        "The function throws an error",
        "The promise executes but the function continues immediately",
        "The promise is cancelled",
        "Nothing — await is optional"
      ],
      "answer": 1,
      "explanation": "Without await, the async function continues executing immediately without waiting for the promise to settle. The promise runs in the background."
    },
    {
      "question": "Can you use await outside an async function?",
      "options": [
        "Never",
        "Only in ES module scripts (top-level await)",
        "Only in Node.js",
        "In any script"
      ],
      "answer": 1,
      "explanation": "Top-level await is available in ES modules (<script type=\"module\">). In non-module scripts or CommonJS, await is only valid inside async functions."
    },
    {
      "question": "How does error handling differ between async/await and promise chains?",
      "options": [
        "They are identical",
        "Async/await uses try/catch; promise chains use .catch()",
        "Promise chains cannot handle errors",
        "Async/await cannot handle errors"
      ],
      "answer": 1,
      "explanation": "Async/await uses standard try/catch blocks. Promise chains use .catch() method. Both achieve the same result with different syntax."
    },
    {
      "question": "What is the advantage of async/await over pure promise chains?",
      "options": [
        "Better performance",
        "More readable, synchronous-like code structure",
        "Async/await supports more features",
        "Async/await uses less memory"
      ],
      "answer": 1,
      "explanation": "The main advantage is readability — async/await makes asynchronous code look and read like synchronous code, reducing cognitive overhead."
    }
  ]
};
