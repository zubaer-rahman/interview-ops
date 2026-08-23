export const promise_combinators = {
  "title": "Promise Combinators",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "<strong>Promise Combinators</strong> are static methods that combine multiple promises: <code>Promise.all</code>, <code>Promise.allSettled</code>, <code>Promise.race</code>, and <code>Promise.any</code>.",
    "<code>Promise.all([...])</code> resolves when <strong>all</strong> input promises resolve. Rejects immediately if <strong>any</strong> rejects (fail-fast).",
    "<code>Promise.allSettled([...])</code> waits for <strong>all</strong> to settle (resolve or reject) — never rejects. Returns array of <code>{status, value/reason}</code>.",
    "<code>Promise.race([...])</code> resolves/rejects with the <strong>first</strong> settled promise. <code>Promise.any</code> resolves with the <strong>first fulfilled</strong>; rejects only if all reject."
  ],
  "laymanDefinition": "Think of Promise combinators like different ways to handle a group of delivery packages. Promise.all is 'wait for ALL packages to arrive before opening anything — if any package is lost, cancel everything.' Promise.allSettled is 'wait for all packages regardless — whether they arrive or are lost, tell me the status of each.' Promise.race is 'I need whichever package arrives FIRST, good or bad.' Promise.any is 'I need whichever package arrives FIRST successfully — ignore lost ones until all are lost.' Each combinator handles the same group of promises differently based on your needs.",
  "deepDive": [
    {
      "heading": "Promise.all — Fail-Fast Parallel Execution",
      "text": "Promise.all takes an iterable of promises and returns a single promise that resolves to an array of the input promises' resolved values in the same order. If any input promise rejects, the returned promise immediately rejects with that error (fail-fast). The other promises still execute but their results are discarded. This is ideal when all async operations must succeed for the task to proceed."
    },
    {
      "heading": "Promise.allSettled — Wait for All Results",
      "text": "Promise.allSettled waits for all promises to settle (resolve or reject) and never rejects. It returns an array of objects: <code>{ status: 'fulfilled', value: result }</code> or <code>{ status: 'rejected', reason: error }</code>. This is useful when you need results from multiple independent operations and want to handle each outcome individually — like batch processing where partial failures are acceptable."
    },
    {
      "heading": "Promise.race — First Settled Wins",
      "text": "Promise.race settles (resolves or rejects) with the first promise that settles — regardless of whether it resolves or rejects. This is a true race: the first promise to finish determines the outcome. Useful for timeouts: combine a fetch with a delay-then-reject promise. If the timeout settles first, the race rejects. If the fetch settles first, the race resolves."
    },
    {
      "heading": "Promise.any — First Fulfilled Wins",
      "text": "Promise.any resolves with the first promise that fulfills. It ignores rejections until all input promises reject — only then does it reject with an AggregateError containing all rejection reasons. This is useful for redundancy — e.g., trying multiple API endpoints and using whichever responds first successfully."
    },
    {
      "heading": "When to Use Each Combinator",
      "list": [
        "<code>Promise.all</code> — Loading multiple resources that are all required (user profile, settings, permissions).",
        "<code>Promise.allSettled</code> — Batch validation: validate multiple items, collect all errors, report results.",
        "<code>Promise.race</code> — Timeout: race a fetch against a delay to detect slow responses.",
        "<code>Promise.any</code> — Redundancy: try multiple CDN mirrors and use the first that responds."
      ]
    }
  ],
  "interviewAnswer": "Promise combinators are static methods on Promise that work with multiple promises. Promise.all resolves when all input promises resolve (fail-fast on any rejection) — useful for parallel dependent operations. Promise.allSettled waits for all to settle, never rejects — useful for batch processing. Promise.race settles with the first settled promise (resolve or reject) — useful for timeouts. Promise.any resolves with the first fulfilled promise, rejects with AggregateError only if all reject — useful for redundancy. Choose based on whether you need all, any, the first, or just the results regardless of outcome.",
  "interviewQuestions": [
    {
      "question": "What is the difference between Promise.all and Promise.allSettled?",
      "answer": "Promise.all rejects immediately if any input promise rejects (fail-fast). Promise.allSettled waits for all promises to settle regardless of outcome and never rejects — it returns an array of { status, value/reason } objects."
    },
    {
      "question": "When would you use Promise.race vs Promise.any?",
      "answer": "Promise.race settles with the first settled promise (resolve OR reject). Promise.any resolves with the first fulfilled promise, ignoring rejections until all reject. Use .race for timeouts (first to settle wins). Use .any for redundancy (first to succeed wins)."
    },
    {
      "question": "What does Promise.all return?",
      "answer": "It returns a promise that resolves to an array of the input promises' resolved values, in the same order as the input iterable. If any input rejects, the returned promise rejects with that error immediately."
    },
    {
      "question": "What happens to remaining promises in Promise.all if one rejects?",
      "answer": "The other promises are NOT cancelled — they continue executing to completion. Their results are simply discarded because Promise.all already settled (rejected). JavaScript promises cannot be cancelled natively."
    },
    {
      "question": "What is AggregateError in Promise.any?",
      "answer": "AggregateError is an error type that wraps multiple errors. When all promises passed to Promise.any reject, the returned promise rejects with an AggregateError whose .errors property contains an array of all rejection reasons."
    },
    {
      "question": "How do you implement a timeout with Promise.race?",
      "answer": "const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms)); const result = await Promise.race([fetch(url), timeout(5000)]); If the fetch takes longer than 5 seconds, the timeout rejects first and .race rejects."
    },
    {
      "question": "What happens if you pass an empty array to Promise.all?",
      "answer": "Promise.all([]) immediately resolves with an empty array []. Promise.allSettled([]) resolves with []. Promise.race([]) never settles (hangs forever). Promise.any([]) rejects with AggregateError."
    },
    {
      "question": "Can you use Promise.allSettled with error handling?",
      "answer": "Yes — Promise.allSettled never rejects, so you don't need .catch(). Iterate the result array and check each item's .status: <code>const results = await Promise.allSettled(promises); results.forEach(r => { if (r.status === 'fulfilled') { use(r.value); } else { handle(r.reason); } });</code>"
    },
    {
      "question": "What is the fail-fast behavior of Promise.all?",
      "answer": "Fail-fast means Promise.all rejects as soon as any single input promise rejects, without waiting for the others to settle. This is desirable when all results are required and partial failure is unacceptable."
    },
    {
      "question": "Are Promise combinators executed in parallel or sequentially?",
      "answer": "The promises themselves execute in parallel (concurrently), not sequentially. They are all started together and the combinator waits for them according to its rules. For sequential execution, use promise chaining instead."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 460\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"440\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"37\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Promise Combinators Comparison</text><text x=\"350\" y=\"65\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">Promise.all — all resolve</text><text x=\"350\" y=\"82\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[✓ ✓ ✓] → [val, val, val]</text><text x=\"350\" y=\"102\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\">Promise.all — any rejects</text><text x=\"350\" y=\"119\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[✓ ✗ ✓] → err (stops at first reject)</text><text x=\"350\" y=\"145\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">Promise.allSettled</text><text x=\"350\" y=\"162\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[✓ ✗ ✓] → [{status:fulfilled,val}, {status:rejected,reason}, {status:fulfilled,val}]</text><text x=\"350\" y=\"188\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"12\" font-weight=\"bold\">Promise.race — first settles</text><text x=\"350\" y=\"205\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[p1, p2, p3] → val/err of whichever settles first (resolve OR reject)</text><text x=\"350\" y=\"231\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">Promise.any — first fulfills</text><text x=\"350\" y=\"248\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[✗ ✓, ✗] → val of first to resolve; ignores rejections</text><text x=\"350\" y=\"268\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">[✗ ✗ ✗] → AggregateError (all rejected)</text><rect x=\"100\" y=\"290\" width=\"500\" height=\"130\" rx=\"6\" fill=\"#1a1d28\" stroke=\"var(--border)\" stroke-dasharray=\"4\"/><text x=\"350\" y=\"312\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"11\">Use Case Guide</text><text x=\"120\" y=\"332\" fill=\"#9aa0b0\" font-size=\"10\">• all: Required parallel data (all or nothing)</text><text x=\"120\" y=\"350\" fill=\"#9aa0b0\" font-size=\"10\">• allSettled: Batch processing (handle each result)</text><text x=\"120\" y=\"368\" fill=\"#9aa0b0\" font-size=\"10\">• race: Timeout, quickest response</text><text x=\"120\" y=\"386\" fill=\"#9aa0b0\" font-size=\"10\">• any: Redundancy, first successful response</text></svg>",
  "codeExamples": [
    {
      "title": "Promise.all — Parallel Data Loading",
      "useCase": "Load all required resources",
      "code": "async function loadDashboard() {\n  try {\n    const [user, posts, settings] = await Promise.all([\n      fetch('/api/user').then(r => r.json()),\n      fetch('/api/posts').then(r => r.json()),\n      fetch('/api/settings').then(r => r.json())\n    ]);\n\n    renderDashboard({ user, posts, settings });\n  } catch (err) {\n    showError('Failed to load dashboard: ' + err.message);\n    // If ANY fetch fails, ALL results are discarded\n  }\n}\n\nloadDashboard();\n// All three fetches run in parallel\n// Promise.all resolves when ALL three finish\n// If any fails, catch runs immediately",
      "description": "Three independent fetches run in parallel. Promise.all resolves with an array of all results. If any fails, the entire dashboard load fails with a clear error."
    },
    {
      "title": "Promise.allSettled — Batch Validation",
      "useCase": "Process with partial failures",
      "code": "async function validateUsers(userIds) {\n  const results = await Promise.allSettled(\n    userIds.map(id =>\n      fetch('/api/users/' + id + '/validate')\n        .then(r => r.json())\n    )\n  );\n\n  const valid = [];\n  const errors = [];\n\n  results.forEach(function(result, index) {\n    if (result.status === 'fulfilled') {\n      valid.push({ id: userIds[index], data: result.value });\n    } else {\n      errors.push({ id: userIds[index], reason: result.reason });\n    }\n  });\n\n  console.log(valid.length + ' valid, ' + errors.length + ' errors');\n  return { valid, errors };\n}\n\nvalidateUsers([1, 2, 3, 4, 5]);\n// Returns results for ALL users, even if some validations fail",
      "description": "Promise.allSettled never rejects. Each result has a .status of 'fulfilled' or 'rejected', allowing individual handling of successes and failures."
    },
    {
      "title": "Promise.race — Network Timeout",
      "useCase": "Limit how long to wait for a response",
      "code": "function fetchWithTimeout(url, ms) {\n  const timeoutPromise = new Promise(function(_, reject) {\n    setTimeout(function() {\n      reject(new Error('Request timed out after ' + ms + 'ms'));\n    }, ms);\n  });\n\n  const fetchPromise = fetch(url).then(function(r) {\n    return r.json();\n  });\n\n  return Promise.race([fetchPromise, timeoutPromise]);\n}\n\n// Usage\nfetchWithTimeout('https://api.example.com/data', 3000)\n  .then(function(data) {\n    console.log('Data received:', data);\n  })\n  .catch(function(err) {\n    console.error('Failed:', err.message);\n    // Could be a network error OR a timeout\n    if (err.message.includes('timed out')) {\n      console.log('The server is too slow');\n    }\n  });",
      "description": "Promise.race pits the fetch against a timeout promise. Whichever settles first determines the outcome. If the timeout wins, the request is effectively abandoned."
    },
    {
      "title": "Promise.any — Multiple API Endpoints (Redundancy)",
      "useCase": "Try multiple servers, use first success",
      "code": "async function fetchWithFallback(endpoints) {\n  try {\n    const result = await Promise.any(\n      endpoints.map(function(url) {\n        return fetch(url)\n          .then(function(r) {\n            if (!r.ok) throw new Error('HTTP ' + r.status);\n            return r.json();\n          });\n      })\n    );\n\n    console.log('Got data from:', 'first successful endpoint');\n    return result;\n  } catch (err) {\n    // All endpoints failed\n    if (err instanceof AggregateError) {\n      console.error('All endpoints failed:', err.errors.length + ' errors');\n      err.errors.forEach(function(e, i) {\n        console.error('  Endpoint ' + i + ':', e.message);\n      });\n    }\n    throw err;\n  }\n}\n\nfetchWithFallback([\n  'https://api-primary.example.com/data',\n  'https://api-backup.example.com/data',\n  'https://api-fallback.example.com/data'\n]);\n// Uses whichever responds first successfully",
      "description": "Promise.any takes multiple endpoints and resolves with the first successful response. If all fail, it rejects with AggregateError containing all failure reasons."
    },
    {
      "title": "Comparing All Four Combinators",
      "useCase": "Side-by-side behavior",
      "code": "const p1 = Promise.resolve(1);\nconst p2 = Promise.reject(new Error('X'));\nconst p3 = new Promise(function(resolve) {\n  setTimeout(function() { resolve(3); }, 100);\n});\n\nasync function compare() {\n  // Promise.all — fails fast\n  try {\n    await Promise.all([p1, p2, p3]);\n  } catch (e) { console.log('all:', e.message); } // 'X'\n\n  // Promise.allSettled — never fails\n  const settled = await Promise.allSettled([p1, p2, p3]);\n  console.log('allSettled:', settled.map(function(s) { return s.status; }));\n  // ['fulfilled', 'rejected', 'fulfilled']\n\n  // Promise.race — first to settle\n  const racer = await Promise.race([p2, p3]);\n  console.log('race:', racer); // p2 rejects first (immediate)\n\n  // Promise.any — first to fulfill, ignores early rejections\n  try {\n    const anyResult = await Promise.any([p2, p3]);\n    console.log('any:', anyResult); // 3 (ignores p2's rejection)\n  } catch (e) {\n    console.log('any failed:', e.errors.length);\n  }\n}\n\ncompare();",
      "description": "This side-by-side comparison shows how each combinator handles the same set of promises differently — the key behavioral differences in action."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which combinator rejects immediately if any input promise rejects?",
      "options": [
        "Promise.allSettled",
        "Promise.all",
        "Promise.any",
        "Promise.race"
      ],
      "answer": 1,
      "explanation": "Promise.all follows fail-fast semantics — it rejects as soon as any input promise rejects."
    },
    {
      "question": "Which combinator never rejects?",
      "options": [
        "Promise.all",
        "Promise.allSettled",
        "Promise.any",
        "Promise.race"
      ],
      "answer": 1,
      "explanation": "Promise.allSettled always resolves. Even if all input promises reject, it resolves with an array of result objects describing each outcome."
    },
    {
      "question": "Which combinator resolves when the first promise fulfills, ignoring rejections?",
      "options": [
        "Promise.race",
        "Promise.any",
        "Promise.all",
        "Promise.allSettled"
      ],
      "answer": 1,
      "explanation": "Promise.any resolves with the first fulfilled value and ignores rejections until all promises reject."
    },
    {
      "question": "What does Promise.race do when the first settled promise rejects?",
      "options": [
        "It waits for a fulfilled promise",
        "It rejects with that error",
        "It ignores the rejection",
        "It switches to Promise.any behavior"
      ],
      "answer": 1,
      "explanation": "Promise.race settles with the first promise to settle — regardless of whether it resolves or rejects. If the first to settle rejects, Promise.race rejects."
    },
    {
      "question": "What does Promise.allSettled return?",
      "options": [
        "Array of values",
        "Array of {status, value/reason} objects",
        "First resolved value",
        "Single value or error"
      ],
      "answer": 1,
      "explanation": "Each result has .status ('fulfilled' or 'rejected'), .value (if fulfilled), and .reason (if rejected)."
    },
    {
      "question": "What happens if you pass an empty array to Promise.any?",
      "options": [
        "Returns undefined",
        "Returns an empty array",
        "Rejects with AggregateError",
        "Never settles"
      ],
      "answer": 2,
      "explanation": "Promise.any([]) rejects with AggregateError because there are no promises to fulfill."
    },
    {
      "question": "What is the fail-fast behavior of Promise.all?",
      "options": [
        "It fails only if ALL promises reject",
        "It fails as soon as ANY promise rejects",
        "It never fails",
        "It fails after a timeout"
      ],
      "answer": 1,
      "explanation": "Promise.all rejects immediately on the first rejection, a behavior known as 'fail-fast' or 'fail-stop'."
    },
    {
      "question": "What error type does Promise.any reject with when all promises reject?",
      "options": [
        "TypeError",
        "RangeError",
        "AggregateError",
        "ReferenceError"
      ],
      "answer": 2,
      "explanation": "Promise.any rejects with AggregateError, which has an .errors property containing all individual rejection reasons."
    },
    {
      "question": "Which combinator would you use to implement a fetch timeout?",
      "options": [
        "Promise.all",
        "Promise.race",
        "Promise.any",
        "Promise.allSettled"
      ],
      "answer": 1,
      "explanation": "Promise.race lets you race a fetch against a timeout promise. Whichever settles first determines the outcome."
    },
    {
      "question": "Are the promises passed to a combinator executed in sequence or parallel?",
      "options": [
        "Sequentially — one after another",
        "In parallel — they all start at once",
        "Depends on the combinator",
        "They execute only when needed"
      ],
      "answer": 1,
      "explanation": "Combinators do not change execution order. All promises start executing immediately when created; the combinator just waits for them according to its rules."
    }
  ]
};
