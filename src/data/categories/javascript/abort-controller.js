export const abort_controller = {
  "title": "AbortController",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "<strong>AbortController</strong> provides a standard way to <strong>cancel</strong> asynchronous operations (fetch, streams, etc.) in JavaScript.",
    "Create a controller with <code>new AbortController()</code> and pass <code>controller.signal</code> to the operation. Call <code>controller.abort()</code> to cancel.",
    "When aborted, the operation's promise rejects with an <code>AbortError</code> (name: 'AbortError').",
    "AbortController replaces earlier ad-hoc cancellation patterns and is standardized across browsers and Node.js."
  ],
  "laymanDefinition": "Imagine you ordered food delivery, but after 30 minutes you change your mind. You call the delivery service and say 'Cancel my order.' AbortController is that cancel button for JavaScript async operations. You create a controller, link it to your fetch request, and when you want to stop, you call abort(). The fetch request gets cancelled just like your food delivery order — the delivery driver stops coming and you get notified that it was cancelled.",
  "deepDive": [
    {
      "heading": "The AbortController and AbortSignal API",
      "text": "AbortController has two parts: <strong>AbortController</strong> itself (which has the abort() method) and <strong>AbortSignal</strong> (accessed via controller.signal). The signal is passed to the async operation. When abort() is called, the signal's event listener fires, and the operation knows to cancel. Multiple operations can share the same signal — one abort() call cancels them all."
    },
    {
      "heading": "Using AbortController with fetch",
      "text": "fetch accepts an optional signal property in its options object. When the signal is aborted, the fetch promise rejects with a DOMException named 'AbortError'. The underlying network request is terminated. You can detect AbortError by checking err.name === 'AbortError' in your catch handler, distinguishing cancellation from real errors."
    },
    {
      "heading": "Using AbortController with Other APIs",
      "text": "AbortSignal is not limited to fetch. It can be used with: ReadableStream (stream.cancel()), WebSocket, FileReader, and custom async operations via the 'abort' event listener on the signal. You can also listen for abort on the signal to implement custom cancellation logic: <code>signal.addEventListener('abort', () => cleanup())</code>."
    },
    {
      "heading": "AbortController Patterns: Timeouts, Race Conditions, Group Cancellation",
      "text": "Common patterns: (1) <strong>Timeout</strong> — setTimeout calls abort() after X milliseconds. (2) <strong>Race prevention</strong> — abort the previous request when a new one starts (e.g., search-as-you-type). (3) <strong>Group cancellation</strong> — one controller cancels multiple fetches. (4) <strong>User-initiated cancellation</strong> — stop a long-running operation with a cancel button."
    },
    {
      "heading": "AbortController Limitations and Best Practices",
      "list": [
        "Calling abort() on an already-completed operation is harmless (no-op).",
        "abort() can only be called once — subsequent calls are ignored.",
        "Always clean up setTimeout/event listeners when aborting to prevent memory leaks.",
        "Not all async APIs support AbortSignal yet — check API documentation.",
        "AbortError should be caught and handled separately from other errors."
      ]
    }
  ],
  "interviewAnswer": "AbortController is a built-in JavaScript API for canceling asynchronous operations. It consists of an AbortController (with .abort() method) and an AbortSignal (accessed via .signal). The signal is passed to supported async APIs like fetch. When abort() is called, the pending promise rejects with AbortError. This enables timeout implementation (setTimeout → abort()), race condition prevention (abort previous request), and user-initiated cancellation (cancel button → abort()). Always distinguish AbortError from real errors in catch handlers by checking err.name === 'AbortError'.",
  "interviewQuestions": [
    {
      "question": "What is AbortController?",
      "answer": "AbortController is a JavaScript API that allows canceling asynchronous operations like fetch requests. It provides a signal that you pass to the operation, and calling abort() rejects the operation's promise with an AbortError."
    },
    {
      "question": "How do you implement a timeout with AbortController?",
      "answer": "const controller = new AbortController(); const id = setTimeout(() => controller.abort(), 5000); fetch(url, { signal: controller.signal }).catch(err => { if (err.name === 'AbortError') console.log('Timed out'); }); clearTimeout(id) on success."
    },
    {
      "question": "How do you detect if a fetch was cancelled vs a real error?",
      "answer": "Check err.name === 'AbortError' in the catch handler: <code>catch (err) { if (err.name === 'AbortError') { /* cancelled */ } else { /* real error */ } }</code>."
    },
    {
      "question": "Can one AbortController cancel multiple fetches?",
      "answer": "Yes. Pass the same controller.signal to multiple fetch calls. Calling controller.abort() cancels all of them simultaneously. This is useful for 'cancel all pending requests' scenarios."
    },
    {
      "question": "What happens if you call abort() on an already-resolved fetch?",
      "answer": "Nothing. Calling abort() on a completed operation is harmless — the AbortSignal's aborted property is set to true, but the already-resolved promise is unaffected."
    },
    {
      "question": "What other APIs support AbortSignal?",
      "answer": "fetch, ReadableStream (pipeTo, pipeThrough), navigator.mediaDevices.getUserMedia, WebSocket, FileReader, and addEventListener with the { signal } option (auto-removes listener on abort). Custom operations can listen for the 'abort' event on the signal."
    },
    {
      "question": "How do you cancel a previous request when a new one starts?",
      "answer": "Store a reference to the current controller. Before making a new request, abort any existing controller: if (this.currentController) this.currentController.abort(); this.currentController = new AbortController(); fetch(url, { signal: this.currentController.signal });"
    },
    {
      "question": "Can AbortController be reused?",
      "answer": "No. Once abort() is called, the signal's aborted property is permanently true. You must create a new AbortController for each cancellable operation or group."
    },
    {
      "question": "What is the abort event on AbortSignal?",
      "answer": "The AbortSignal fires an 'abort' event when abort() is called. You can listen for it to perform cleanup: signal.addEventListener('abort', () => { clearResources(); reject(new Error('Cancelled')); });"
    },
    {
      "question": "How does AbortController handle memory leaks?",
      "answer": "Using the { signal } option with addEventListener automatically removes the event listener when abort() is called. For manual listeners (signal.addEventListener('abort', fn)), the listener persists. Clean up by removing the listener or using signal.onabort = fn instead."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">AbortController Flow</text><rect x=\"60\" y=\"70\" width=\"220\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"170\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">new AbortController()</text><text x=\"170\" y=\"110\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">controller.signal + controller.abort()</text><line x1=\"280\" y1=\"95\" x2=\"340\" y2=\"95\" stroke=\"#fbbf24\" stroke-width=\"2\"/><rect x=\"340\" y=\"70\" width=\"260\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"470\" y=\"93\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">fetch(url, { signal })</text><text x=\"470\" y=\"110\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">Pass signal to any cancellable API</text><line x1=\"470\" y1=\"120\" x2=\"470\" y2=\"155\" stroke=\"#98c379\" stroke-width=\"2\"/><rect x=\"120\" y=\"155\" width=\"240\" height=\"55\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"240\" y=\"178\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">controller.abort() called</text><text x=\"240\" y=\"195\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">User timeout or cancel button</text><line x1=\"360\" y1=\"155\" x2=\"520\" y2=\"155\" stroke=\"#f87171\" stroke-width=\"2\"/><rect x=\"520\" y=\"145\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"590\" y=\"168\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\">AbortError!</text><line x1=\"240\" y1=\"210\" x2=\"240\" y2=\"250\" stroke=\"#e5c07b\" stroke-width=\"2\"/><rect x=\"100\" y=\"250\" width=\"280\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#e5c07b\" stroke-width=\"1.5\"/><text x=\"240\" y=\"275\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\">catch: err.name === 'AbortError'</text><text x=\"540\" y=\"275\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">or real error</text></svg>",
  "codeExamples": [
    {
      "title": "Basic AbortController with Fetch Timeout",
      "useCase": "Cancelling a slow request",
      "code": "async function fetchData(url, timeoutMs) {\n  const controller = new AbortController();\n  const timer = setTimeout(function() {\n    controller.abort();\n  }, timeoutMs);\n\n  try {\n    const response = await fetch(url, { signal: controller.signal });\n    clearTimeout(timer);\n\n    if (!response.ok) throw new Error('HTTP ' + response.status);\n    return response.json();\n  } catch (err) {\n    clearTimeout(timer);\n    if (err.name === 'AbortError') {\n      throw new Error('Request was cancelled (timeout or user abort)');\n    }\n    throw err;\n  }\n}\n\n// Example: timeout after 3 seconds\nfetchData('/api/data', 3000)\n  .then(function(d) { console.log('Data:', d); })\n  .catch(function(e) { console.log('Error:', e.message); });",
      "description": "AbortController with setTimeout provides timeout functionality. Clear the timer on success to prevent unnecessary aborts. Detect cancellation via err.name === 'AbortError'."
    },
    {
      "title": "Cancelling the Previous Request (Search-as-you-type)",
      "useCase": "Race condition prevention",
      "code": "function createSearcher() {\n  var currentController = null;\n\n  return async function(query) {\n    // Cancel any pending previous search\n    if (currentController) {\n      currentController.abort();\n      console.log('Cancelled previous search');\n    }\n\n    // Start new search\n    currentController = new AbortController();\n    var signal = currentController.signal;\n\n    try {\n      var response = await fetch('/api/search?q=' + query, { signal: signal });\n      var results = await response.json();\n      renderResults(results);\n      return results;\n    } catch (err) {\n      if (err.name === 'AbortError') {\n        console.log('Search was superseded');\n        return;\n      }\n      console.error('Search error:', err);\n    }\n  };\n}\n\nvar search = createSearcher();\n\ndocument.getElementById('search-input').addEventListener('input', function(e) {\n  search(e.target.value);\n});\n// Fast typing cancels the previous request each time,\n// ensuring only the latest response is processed",
      "description": "Each new search cancels the previous in-flight request. This prevents race conditions where an old response arrives after a newer one."
    },
    {
      "title": "Group Cancellation — Cancel All Requests",
      "useCase": "Cancel multiple operations at once",
      "code": "function cancelAllDemo() {\n  var controller = new AbortController();\n  var signal = controller.signal;\n  var results = [];\n  var errors = [];\n\n  var urls = [\n    '/api/users',\n    '/api/posts',\n    '/api/comments',\n    '/api/settings'\n  ];\n\n  // Start all fetches with the same signal\n  var fetches = urls.map(function(url) {\n    return fetch(url, { signal: signal })\n      .then(function(r) {\n        if (!r.ok) throw new Error('HTTP ' + r.status);\n        return r.json();\n      });\n  });\n\n  // Cancel all if any fails OR on user demand\n  Promise.allSettled(fetches).then(function(settled) {\n    settled.forEach(function(result, i) {\n      if (result.status === 'fulfilled') {\n        results.push({ url: urls[i], data: result.value });\n      } else {\n        errors.push({ url: urls[i], error: result.reason });\n      }\n    });\n    console.log('Results:', results.length, 'Errors:', errors.length);\n  });\n\n  // Return the controller so caller can abort all\n  return {\n    cancel: function() {\n      controller.abort();\n      console.log('All requests cancelled');\n    },\n    results: results\n  };\n}\n\nvar batch = cancelAllDemo();\n// Later, if user navigates away:\n// batch.cancel(); // Cancels ALL pending requests",
      "description": "One AbortController can cancel multiple fetch requests simultaneously. This is useful for 'cancel all' scenarios like page navigation or app teardown."
    },
    {
      "title": "AbortSignal with addEventListener Auto-Cleanup",
      "useCase": "Memory leak prevention",
      "code": "function setupButtonListener(duration) {\n  var controller = new AbortController();\n  var signal = controller.signal;\n\n  // Using { signal } auto-removes the listener when abort() is called\n  document.getElementById('my-button').addEventListener('click', function() {\n    console.log('Button clicked');\n  }, { signal: signal });\n\n  // Also works with setTimeout\n  var timer = setTimeout(function() {\n    console.log('Timer fired');\n  }, duration);\n\n  // Auto-cleanup function\n  return {\n    cancel: function() {\n      controller.abort();  // Removes the event listener automatically\n      clearTimeout(timer);\n      console.log('Cleanup complete');\n    }\n  };\n}\n\nvar listener = setupButtonListener(5000);\n// When component unmounts:\n// listener.cancel();\n// Event listener is removed, timer is cleared — no memory leaks!",
      "description": "Passing { signal } to addEventListener automatically removes the listener when abort() is called. This is a clean pattern for React useEffect cleanup."
    },
    {
      "title": "Custom Async Operation with AbortSignal",
      "useCase": "Implementing cancellable custom logic",
      "code": "function cancellableTimeout(delay) {\n  // Returns a promise that can be aborted\n  return function(signal) {\n    return new Promise(function(resolve, reject) {\n      var timer = setTimeout(function() {\n        resolve('Completed after ' + delay + 'ms');\n      }, delay);\n\n      // Listen for abort signal\n      signal.addEventListener('abort', function() {\n        clearTimeout(timer);\n        reject(new DOMException('Cancelled', 'AbortError'));\n      });\n\n      // If already aborted, reject immediately\n      if (signal.aborted) {\n        clearTimeout(timer);\n        reject(new DOMException('Already aborted', 'AbortError'));\n      }\n    });\n  };\n}\n\nvar wait = cancellableTimeout(3000);\nvar controller = new AbortController();\n\nwait(controller.signal)\n  .then(function(msg) { console.log(msg); })\n  .catch(function(err) {\n    if (err.name === 'AbortError') console.log('Cancelled!');\n  });\n\n// Cancel after 1 second\nsetTimeout(function() { controller.abort(); }, 1000);",
      "description": "AbortSignal can be used with custom promises. Listen for the 'abort' event to perform cleanup and reject with AbortError. Check signal.aborted for synchronous abort handling."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does AbortController.abort() do?",
      "options": [
        "Pauses the request",
        "Cancels the associated async operation",
        "Restarts the request",
        "Returns the response early"
      ],
      "answer": 1,
      "explanation": "abort() cancels any async operation that has been passed the controller's signal. The operation's promise rejects with AbortError."
    },
    {
      "question": "How do you detect if a fetch was cancelled via AbortController?",
      "options": [
        "Check err.message === 'cancelled'",
        "Check err.name === 'AbortError'",
        "Check err.code === 0",
        "Check response.cancelled === true"
      ],
      "answer": 1,
      "explanation": "Aborted operations reject with a DOMException whose name property is 'AbortError'. Check err.name === 'AbortError' in your catch handler."
    },
    {
      "question": "Can an AbortController be reused after calling abort()?",
      "options": [
        "Yes, just call controller.reset()",
        "No, create a new AbortController",
        "Yes, abort() doesn't affect the controller",
        "Only if you pass a new signal"
      ],
      "answer": 1,
      "explanation": "Once abort() is called, the signal's aborted property is permanently true. Create a new AbortController for each cancellable operation."
    },
    {
      "question": "Which of these APIs supports AbortSignal?",
      "options": [
        "JSON.parse",
        "Array.sort",
        "fetch",
        "Math.max"
      ],
      "answer": 2,
      "explanation": "fetch supports AbortSignal via the { signal } option. Other supported APIs include ReadableStream, addEventListener, and more."
    },
    {
      "question": "What happens if you call abort() on a completed fetch?",
      "options": [
        "It throws an error",
        "It's a harmless no-op",
        "The response is cleared",
        "It triggers a new request"
      ],
      "answer": 1,
      "explanation": "Calling abort() on a settled (resolved/rejected) operation does nothing. The already-completed promise is unaffected."
    },
    {
      "question": "How do you use AbortController to implement a fetch timeout?",
      "options": [
        "fetch(url, { timeout: 5000 })",
        "AbortController with setTimeout calling abort()",
        "Promise.race with a timer promise",
        "Both B and C work"
      ],
      "answer": 3,
      "explanation": "Both AbortController+setTimeout and Promise.race with a timer work for timeouts. AbortController actually cancels the network request."
    },
    {
      "question": "How do you cancel the previous request when a new one starts?",
      "options": [
        "Cancel the previous controller before starting a new fetch",
        "Use a global counter",
        "You cannot cancel in-flight requests",
        "Use request.cancel()"
      ],
      "answer": 0,
      "explanation": "Keep a reference to the current AbortController. Before creating a new request, call currentController.abort() to cancel the previous one."
    },
    {
      "question": "Can one AbortController cancel multiple fetch requests?",
      "options": [
        "No, one controller per request",
        "Yes, pass the same signal to multiple fetches",
        "Only if the requests are sequential",
        "Only on the same domain"
      ],
      "answer": 1,
      "explanation": "Pass the same controller.signal to multiple fetch calls. One controller.abort() call cancels all of them simultaneously."
    },
    {
      "question": "What is the { signal } option in addEventListener used for?",
      "options": [
        "To pass data to the listener",
        "To auto-remove the listener when the signal aborts",
        "To throttle the event",
        "To prevent default behavior"
      ],
      "answer": 1,
      "explanation": "The { signal } option in addEventListener automatically removes the event listener when the AbortSignal is aborted, preventing memory leaks."
    },
    {
      "question": "What property tracks whether an AbortSignal has been aborted?",
      "options": [
        "signal.cancelled",
        "signal.done",
        "signal.aborted",
        "signal.stopped"
      ],
      "answer": 2,
      "explanation": "signal.aborted is a boolean property. It's initially false and becomes true after abort() is called."
    }
  ]
};
