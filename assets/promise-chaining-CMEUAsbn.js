const e={title:"Promise Chaining",difficulty:"intermediate",estimatedMinutes:20,tldr:["<strong>Promise Chaining</strong> is the pattern of sequencing asynchronous operations by returning a new promise from <code>.then()</code> or <code>.catch()</code>.","Each <code>.then()</code> in the chain receives the resolved value of the previous promise, enabling <strong>linear async flow</strong> without nesting (callback hell).","Errors propagate down the chain: a <code>.catch()</code> at the end handles errors from any preceding step.","A <code>.then()</code> can return a plain value (resolved immediately) or a new promise (waits for resolution)."],laymanDefinition:"Imagine an assembly line in a factory. Worker A takes a raw part and adds a component, then passes it to Worker B who adds another component, then to Worker C who inspects it. Promise chaining works the same way: each .then() is a worker that does something with the result from the previous step and passes it to the next. If any worker fails, the rest of the line stops and the error handler (catch) at the end deals with the problem. This is much cleaner than having workers call each other with nested phone calls (callback hell).",deepDive:[{heading:"How .then() Creates a New Promise",text:"Every call to <code>.then(onFulfilled)</code> returns a <strong>new promise</strong>. If onFulfilled returns a value, the new promise resolves with that value. If it returns a promise, the new promise adopts the state of that returned promise. If it throws, the new promise rejects. This chaining mechanism is what makes promise chains possible — each .then() produces a new promise that the next .then() attaches to."},{heading:"Transforming Values Through the Chain",text:"Each .then() can transform the result before passing it to the next step. For example: fetch user data, extract JSON, process the data, then render it. Each .then() returns either the transformed value or a new promise for async work. The chain stays flat and linear, avoiding the pyramid of doom that callbacks create."},{heading:"Error Propagation in Chains",text:"If any promise in the chain rejects (or any .then() throws), execution skips all subsequent .then() handlers until it finds a .catch() or .then(null, onRejected). This is called 'rejection forwarding' — rejected promises automatically skip to the next error handler. A single .catch() at the end handles errors from the entire chain."},{heading:"Branching Chains vs Linear Chains",text:"A single promise can have multiple .then() handlers attached separately, creating a <strong>branching chain</strong> where both handlers run independently with the same value. This is different from a linear chain where each .then() depends on the previous one's return value. Branching is useful for triggering multiple independent async operations."},{heading:"Common Pitfalls in Promise Chaining",list:["<strong>Missing return:</strong> Forgetting to return a promise from .then() causes the next .then() to run immediately with undefined, not waiting for the async operation.","<strong>Nesting instead of chaining:</strong> Creating promises inside .then() without returning them leads to nested code and breaks error propagation.","<strong>Calling resolve/reject multiple times:</strong> A promise settles only once; subsequent calls are ignored.","<strong>Unhandled rejections:</strong> A chain without a final .catch() silently swallows errors."]}],interviewAnswer:"Promise chaining is a technique where each .then() callback returns a new promise (or value), allowing the next .then() to receive the result. This creates a flat, readable sequence of async operations. The key is: if you return a promise from .then(), the next .then() waits for it. If you return a value, it's wrapped in Promise.resolve(). Errors propagate automatically — any rejection skips .then() handlers to the nearest .catch(). Always remember to return the promise, avoid nesting, and include a final .catch() for error handling.",interviewQuestions:[{question:"What is promise chaining and why is it useful?",answer:"Promise chaining sequences async operations by returning a new promise from each .then(). It avoids callback hell (deeply nested callbacks) by keeping the code flat and linear. Each .then() receives the result of the previous step and can transform it or return a new promise."},{question:"What does .then() return?",answer:".then() always returns a new promise. If the callback returns a value, the new promise resolves with that value. If it returns a promise, the new promise adopts that promise's state. If it throws, the new promise rejects."},{question:"What happens if you forget to return a promise from .then()?",answer:"The next .then() in the chain receives undefined immediately — it does NOT wait for the async operation. This is a common bug: <code>fetch(url).then(data => { saveToDb(data); }).then(() => console.log('done'))</code> — saveToDb's promise is not returned, so 'done' logs before saving completes."},{question:"How do errors propagate through a promise chain?",answer:"If any promise rejects or any .then() throws, execution skips all subsequent .then() handlers until it finds a .catch() or .then(null, onRejected). This is automatic — you don't need to manually forward errors. A single .catch() at the end of the chain handles errors from all preceding steps."},{question:"What is the difference between these two patterns? promise.then(fn1).then(fn2) vs promise.then(fn1); promise.then(fn2)",answer:"The first is chaining — fn2 waits for fn1's returned promise. The second is branching — both fn1 and fn2 receive the same original value and run independently. Branching is used for parallel operations that depend on the same initial result."},{question:"How do you handle errors in specific steps of a chain?",answer:"Place a .catch() between steps: <code>fetch(url).then(parseJSON).catch(handleParseError).then(processData).catch(handleProcessError)</code>. Each .catch() handles errors from previous steps, and if it returns a value (or a resolved promise), the chain continues with that value."},{question:"What happens if both .then(onFulfilled) and .then(null, onRejected) are attached?",answer:"If the promise resolves, onFulfilled runs. If it rejects, onRejected runs (the second argument). However, .catch(onRejected) is preferred because it also catches errors thrown inside onFulfilled from previous .then() calls."},{question:"Can you return a rejected promise from .then() to skip to .catch()?",answer:"Yes: <code>return Promise.reject(new Error('skip ahead'))</code> — this causes the next .then() to be skipped and the nearest .catch() to fire. This is useful for conditional early exits in a chain."},{question:"How does .finally() work in a chain?",answer:".finally(callback) runs regardless of whether the promise resolved or rejected. It does not receive the value or error — it's for cleanup. .finally() passes through the result or error to the next handler in the chain."},{question:"What is the 'return' promise anti-pattern?",answer:"The anti-pattern is creating a new Promise wrapper around code that already returns a promise: <code>return new Promise((resolve) => { fetch(url).then(data => resolve(data)); })</code>. This is unnecessary — just return the original promise directly: <code>return fetch(url)</code>."}],diagramSvg:'<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="400" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Promise Chain Flow</text><rect x="90" y="70" width="180" height="55" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="180" y="93" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">fetch(url)</text><text x="180" y="112" text-anchor="middle" fill="#9aa0b0" font-size="10">returns Response</text><line x1="270" y1="97" x2="330" y2="97" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)"/><rect x="330" y="70" width="280" height="55" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="470" y="93" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">.then(res => res.json())</text><text x="470" y="112" text-anchor="middle" fill="#9aa0b0" font-size="10">returns parsed data (new promise)</text><line x1="470" y1="125" x2="470" y2="155" stroke="#98c379" stroke-width="2" marker-end="url(#arrow)"/><rect x="120" y="155" width="240" height="55" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="240" y="178" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">.then(data => process(data))</text><text x="240" y="197" text-anchor="middle" fill="#9aa0b0" font-size="10">returns processed result</text><line x1="360" y1="182" x2="420" y2="182" stroke="#98c379" stroke-width="2" marker-end="url(#arrow)"/><rect x="420" y="155" width="220" height="55" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="530" y="178" text-anchor="middle" fill="#e5c07b" font-size="12" font-weight="bold">.then(result => render)</text><text x="530" y="197" text-anchor="middle" fill="#9aa0b0" font-size="10">renders to UI</text><line x1="530" y1="210" x2="530" y2="250" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)"/><rect x="200" y="250" width="300" height="45" rx="22" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="350" y="277" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">.catch(err => handleError(err))</text><text x="350" y="330" text-anchor="middle" fill="#9aa0b0" font-size="11">Error at ANY step skips to .catch()</text><text x="350" y="355" text-anchor="middle" fill="#9aa0b0" font-size="11">Each step can return a value or a new promise</text><text x="350" y="380" text-anchor="middle" fill="#9aa0b0" font-size="11">If step returns a promise, next .then() waits for it</text></svg>',codeExamples:[{title:"Basic Promise Chain — Fetch User Data",useCase:"Sequential async operations",code:`fetch('https://api.github.com/users/octocat')
  .then(function(response) {
    if (!response.ok) throw new Error('HTTP error ' + response.status);
    return response.json();  // returns a promise
  })
  .then(function(user) {
    console.log('Name:', user.name);
    // Transform the data for the next step
    return { login: user.login, repos: user.public_repos };
  })
  .then(function(summary) {
    console.log('Login:', summary.login, 'Repos:', summary.repos);
    return summary;
  })
  .catch(function(err) {
    console.error('Failed:', err.message);
  });`,description:"Each .then() receives the previous step's result. fetch returns a promise, .json() returns a promise, and the next step transforms values. One .catch() at the end handles any error."},{title:"Missing Return Bug",useCase:"Common mistake in chaining",code:`function saveUser(user) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  });
}

// BUG: missing return
fetch('/api/users/1')
  .then(function(res) { return res.json(); })
  .then(function(user) {
    user.lastSeen = new Date();
    saveUser(user);  // BUG: not returned!
  })
  .then(function() {
    console.log('Saved!');  // Runs BEFORE save completes!
  });

// FIX: return the promise
fetch('/api/users/1')
  .then(function(res) { return res.json(); })
  .then(function(user) {
    user.lastSeen = new Date();
    return saveUser(user);  // Correct: return the promise
  })
  .then(function() {
    console.log('Saved!');  // Waits for save to finish
  })
  .catch(function(err) {
    console.error('Error:', err);
  });`,description:"Missing return is the #1 promise chain bug. Without 'return', the next .then() receives undefined immediately and doesn't wait for the async operation."},{title:"Branching vs Chaining",useCase:"Parallel vs sequential execution",code:`const userPromise = fetch('/api/users/1').then(function(res) { return res.json(); });

// BRANCHING: both run independently with the same data
userPromise.then(function(user) {
  console.log('Email:', user.email);
});
userPromise.then(function(user) {
  console.log('Role:', user.role);
});
// Both console logs happen concurrently (or on same tick)

// CHAINING: each step waits for the previous
userPromise
  .then(function(user) {
    return fetch('/api/orders?userId=' + user.id);
  })
  .then(function(res) { return res.json(); })
  .then(function(orders) {
    console.log('Orders:', orders);
  });
// Fetches orders AFTER user data is loaded`,description:"Branching: multiple .then() on the same promise receive the same value independently. Chaining: each .then() depends on and transforms the previous result."},{title:"Conditional Early Exit in a Chain",useCase:"Skip remaining steps on condition",code:`function getDashboardData(userId) {
  return fetch('/api/users/' + userId)
    .then(function(res) { return res.json(); })
    .then(function(user) {
      // Early exit if user is not active
      if (!user.active) {
        return Promise.reject(new Error('User is inactive'));
      }
      return user;
    })
    .then(function(user) {
      return fetch('/api/dashboard/' + user.id);
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      renderDashboard(data);
    })
    .catch(function(err) {
      showError(err.message);  // Handles both 'inactive' and network errors
    });
}

getDashboardData(42);`,description:"Promise.reject() inside a .then() skips ahead to .catch(), bypassing remaining steps. This enables conditional early exits without nested if/else."},{title:"Using .finally() for Cleanup",useCase:"Loading state management",code:`function loadUsers() {
  showSpinner(true);

  return fetch('/api/users')
    .then(function(res) { return res.json(); })
    .then(function(users) {
      renderUserList(users);
    })
    .catch(function(err) {
      showError('Failed to load users');
    })
    .finally(function() {
      showSpinner(false);  // Always runs, regardless of success/failure
    });
}

loadUsers();
// Spinner shows during loading, hides after success or error

// .finally() also passes values through:
fetch('/api/data')
  .then(function(res) { return res.json(); })
  .finally(function() { hideLoader(); })
  .then(function(data) { processData(data); });
// .finally() ran, but data still flows to the next .then()`,description:".finally() runs regardless of resolve or reject. It's ideal for cleanup — hiding spinners, closing connections, resetting state. Unlike .then()/.catch(), .finally() doesn't receive the value or error."}],mcqQuestions:[{question:"What does .then() return?",options:["The original promise","A new promise","undefined","The resolved value directly"],answer:1,explanation:".then() always returns a new promise that resolves based on the callback's return value."},{question:"What happens if you don't return a promise from .then()?",options:["The chain breaks with an error","The next .then() receives undefined immediately","The promise is automatically returned","The chain pauses indefinitely"],answer:1,explanation:"Without an explicit return, the callback returns undefined, and the next .then() receives undefined without waiting for any async operation."},{question:"If a promise in the chain rejects, what happens to subsequent .then() handlers?",options:["They still execute normally","They are skipped until a .catch() is found","Only the immediate next .then() is skipped","The chain throws an unhandled error"],answer:1,explanation:"Rejection causes execution to skip all .then() handlers until the nearest .catch() or rejection handler."},{question:"What is the difference between chaining and branching?",options:["They are the same thing","Chaining is sequential (each step waits); branching attaches multiple handlers to the same promise","Branching only works with catch","Chaining is for errors, branching for success"],answer:1,explanation:"Chaining: promise.then(fn1).then(fn2) — fn2 waits for fn1. Branching: promise.then(fn1); promise.then(fn2) — both run with the original resolved value independently."},{question:"What does .catch() at the end of a chain handle?",options:["Only errors from the last .then()","Errors from any step in the chain above it","Only network errors","Only syntax errors"],answer:1,explanation:"A .catch() at the end handles errors (rejections or thrown exceptions) from any preceding step in the chain."},{question:"What technique allows conditional early exit from a promise chain?",options:["return undefined","return Promise.reject()","throw null","Promise.resolve().skip()"],answer:1,explanation:"Returning Promise.reject() from a .then() causes subsequent .then() handlers to be skipped until .catch()."},{question:"What is the 'explicit promise construction' anti-pattern?",options:["Not using .catch()","Wrapping code that already returns a promise inside new Promise()","Using .then() without .catch()","Returning a value from .then()"],answer:1,explanation:"If your code already creates/returns a promise (e.g., fetch), don't wrap it in new Promise(). Just use the existing promise directly."},{question:"When does .finally() run in a chain?",options:["Only on success","Only on failure","Always, regardless of resolve or reject","Only at the beginning of the chain"],answer:2,explanation:".finally() runs unconditionally — after both resolve and reject. It's used for cleanup and does not receive the value or error."},{question:"What will the following log? Promise.resolve(1).then(v => v * 2).then(v => console.log(v));",options:["1","2","NaN","undefined"],answer:1,explanation:"The first .then() receives 1 and returns 2. The second .then() receives 2 and logs it."},{question:"How do you pass resolved values through .finally()?",options:["You can't — .finally() blocks the chain",".finally() automatically passes values through to the next .then()","You must store the value in a variable","Use .finally(() => value) to pass the value"],answer:1,explanation:".finally() passes through the promise's resolved value or rejection reason to the next handler in the chain."}]};export{e as promise_chaining};
