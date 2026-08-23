const e={title:"Error Handling",difficulty:"beginner",estimatedMinutes:20,tldr:["JavaScript provides <code>try/catch/finally</code> blocks to handle runtime errors gracefully without crashing the program.","<code>try</code> contains the code that might throw. <code>catch(err)</code> executes if an error is thrown. <code>finally</code> runs <strong>always</strong> (after try or catch).","You can <strong>throw</strong> your own errors: <code>throw new Error('message')</code>. Any type can be thrown, but <code>Error</code> object is best practice.","Uncaught errors propagate up the call stack. If not caught anywhere, they become <strong>unhandled errors</strong> and may crash the environment."],laymanDefinition:"Imagine you're walking on a tightrope with a safety net below. The try block is your tightrope walk — you attempt the dangerous action. If you fall (an error occurs), the catch block is the safety net that catches you and handles the situation. The finally block is the cleanup crew that arrives whether you fell or not — they pack up the equipment regardless. Without try/catch, a fall would be fatal (crash). With it, you fall safely, handle the problem, and can even try again.",deepDive:[{heading:"The Error Object and Error Types",text:"JavaScript has built-in Error types: <strong>Error</strong> (generic), <strong>SyntaxError</strong> (parsing errors), <strong>TypeError</strong> (wrong type), <strong>ReferenceError</strong> (undefined variable), <strong>RangeError</strong> (out of range), <strong>URIError</strong> (URI functions), <strong>EvalError</strong> (eval). Each has .name, .message, and .stack properties. Custom error types can extend Error."},{heading:"try/catch/finally in Detail",text:"The try block executes first. If no error, catch is skipped. If an error occurs at ANY point in try, the rest of try is skipped and catch executes with the error object. finally always runs after try or catch — it's for cleanup (closing files, hiding spinners, releasing resources). Even if catch re-throws or try returns, finally still runs before the function exits."},{heading:"Throwing Custom Errors",text:"Use <code>throw new Error('message')</code> to signal error conditions. You can throw any value (string, number, object), but Error objects are best because they capture stack traces. Custom error classes can extend Error to add properties: <code>class ValidationError extends Error { constructor(message, field) { super(message); this.field = field; this.name = 'ValidationError'; } }</code>"},{heading:"Error Propagation and Unhandled Errors",text:"If an error is not caught in the current try/catch, it propagates up through the call stack to the nearest enclosing try/catch. If no catch is found anywhere, the environment handles it: in browsers, the 'error' event fires on window; in Node.js, the 'uncaughtException' event fires. Unhandled promise rejections trigger 'unhandledrejection' event. Always catch errors at the top level to prevent crashes."},{heading:"Best Practices for Error Handling",list:["Always catch specific errors — avoid empty catch blocks.","Use custom error classes for different error types.","Include context in error messages (what failed, with what data).","Don't use try/catch for control flow — it's for exceptional cases.","Clean up resources in finally, not in try or catch.","Log errors with stack traces for debugging."]}],interviewAnswer:"JavaScript error handling uses try/catch/finally blocks. Try contains code that may throw. Catch receives the error object and handles it. Finally always executes for cleanup. Errors propagate up the call stack until caught. You can throw custom errors with throw new Error(). Built-in error types include TypeError, ReferenceError, SyntaxError, RangeError. Best practices: use specific Error types, avoid empty catch blocks, always include a finally for cleanup, and catch at the top level to prevent unhandled errors. For async code, use try/catch with async/await or .catch() on promises. Unhandled promise rejections should always be caught.",interviewQuestions:[{question:"What is the difference between try/catch/finally blocks?",answer:"try contains code that may throw. catch executes only if an error is thrown in try. finally always executes after try/catch, regardless of whether an error occurred. Finally is for cleanup (closing connections, hiding spinners)."},{question:"What happens if you throw inside a finally block?",answer:"If finally throws, it overrides any existing exception. If try or catch had a pending exception, it's replaced by the finally exception. This is why finally should avoid throwing — always wrap finally code in its own try/catch if it might throw."},{question:"What are the built-in Error types in JavaScript?",answer:"Error (generic), SyntaxError (bad parsing), TypeError (wrong type), ReferenceError (undefined variable), RangeError (out of range), URIError (bad URI), EvalError (eval error). All have .name, .message, and .stack properties."},{question:"How do you create a custom error class?",answer:"class ValidationError extends Error { constructor(message, field) { super(message); this.name = 'ValidationError'; this.field = field; } }. Then: throw new ValidationError('Invalid email', 'email'). The stack trace is captured automatically."},{question:"How do errors propagate in JavaScript?",answer:"If an error is not caught in the current try/catch, it propagates up the call stack to the nearest enclosing try/catch. If no catch is found anywhere, it becomes an unhandled error: in browsers, window.onerror fires; in Node.js, process.on('uncaughtException') fires. The script/program may terminate."},{question:"What is the difference between throw and return?",answer:"throw exits the function immediately and UNWINDS the call stack until a try/catch is found. return exits the function normally and the caller continues execution normally. throw is for exceptional/error conditions; return is for normal completion."},{question:"How do you handle errors in async functions?",answer:"Use try/catch inside the async function: <code>async function load() { try { const data = await fetch(url); } catch (err) { handle(err); } }</code>. Or use .catch() on the returned promise: <code>load().catch(handleError)</code>."},{question:"What is an unhandled promise rejection?",answer:"A promise that rejects without a .catch() handler. In modern environments, this triggers 'unhandledrejection' event on window (browsers) or 'unhandledRejection' on process (Node.js). Always attach .catch() to every promise chain."},{question:"Should you use try/catch for control flow?",answer:"No. try/catch is for exceptional conditions, not regular control flow. It's significantly slower than if/else for expected conditions. Also, it makes code harder to read. Use conditionals for expected cases (e.g., null checks) and try/catch for unexpected errors."},{question:"How do you catch errors in setTimeout/setInterval?",answer:"Errors inside setTimeout/setInterval are thrown in a different execution context. try/catch around setTimeout does NOT catch errors in the callback. Catch inside the callback: <code>setTimeout(function() { try { riskyCode(); } catch (e) { handle(e); } }, 1000);</code>"}],diagramSvg:`<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="400" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">try/catch/finally Flow</text><rect x="100" y="70" width="500" height="55" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="350" y="93" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">try { /* code that might throw */ }</text><text x="350" y="112" text-anchor="middle" fill="#9aa0b0" font-size="10">No error → skip catch | Error thrown → skip to catch</text><line x1="250" y1="125" x2="250" y2="160" stroke="#98c379" stroke-width="2" marker-end="url(#arrow)"/><rect x="100" y="160" width="300" height="55" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="250" y="183" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">catch (error) { /* handle error */ }</text><text x="250" y="202" text-anchor="middle" fill="#9aa0b0" font-size="10">Only runs when try throws</text><line x1="250" y1="215" x2="250" y2="250" stroke="#e5c07b" stroke-width="2" marker-end="url(#arrow)"/><rect x="100" y="250" width="500" height="55" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="350" y="273" text-anchor="middle" fill="#e5c07b" font-size="13" font-weight="bold">finally { /* cleanup: ALWAYS runs */ }</text><text x="350" y="292" text-anchor="middle" fill="#9aa0b0" font-size="10">Runs after try (if no error) OR after catch (if error)</text><text x="350" y="340" text-anchor="middle" fill="#f87171" font-size="11">Error propagates up if not caught</text><text x="350" y="365" text-anchor="middle" fill="#f87171" font-size="11">→ window.onerror / process.on('uncaughtException')</text><text x="350" y="390" text-anchor="middle" fill="#9aa0b0" font-size="10">finally always runs even if catch re-throws!</text></svg>`,codeExamples:[{title:"Basic try/catch/finally",useCase:"Graceful error handling",code:`function parseJSON(str) {
  try {
    const data = JSON.parse(str);  // Throws SyntaxError if invalid
    console.log('Parsed successfully');
    return data;
  } catch (err) {
    console.error('Parse failed:', err.message);
    return null;  // Graceful fallback
  } finally {
    console.log('Parse attempt completed');  // Always runs
  }
}

console.log(parseJSON('{"name":"Alice"}'));    // Works
console.log(parseJSON('not json'));               // Returns null

// Output:
// Parsed successfully
// Parse attempt completed
// { name: 'Alice' }
// Parse failed: Unexpected token 'o', "not json"...
// Parse attempt completed
// null`,description:"try/catch prevents a JSON parse error from crashing the program. The function returns a fallback value. finally logs regardless of outcome."},{title:"Custom Error Classes",useCase:"Domain-specific error types",code:`class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'DatabaseError';
    this.code = code;
  }
}

function validateUser(user) {
  if (!user.email || !user.email.includes('@')) {
    throw new ValidationError('Invalid email', 'email');
  }
  if (!user.name || user.name.length < 2) {
    throw new ValidationError('Name too short', 'name');
  }
}

function saveUser(user) {
  validateUser(user);  // May throw ValidationError
  // Simulate DB failure
  throw new DatabaseError('Connection timeout', 'ETIMEOUT');
}

try {
  saveUser({ email: 'bad', name: 'A' });
} catch (err) {
  if (err instanceof ValidationError) {
    console.log('Validation failed for field:', err.field);
  } else if (err instanceof DatabaseError) {
    console.log('Database error:', err.code);
  } else {
    console.log('Unknown error:', err);
  }
}`,description:"Custom error classes make error handling more precise. Use instanceof checks in catch to handle different error types with different logic."},{title:"The finally Block for Resource Cleanup",useCase:"Always-execute cleanup code",code:`class DataConnection {
  constructor() { this.connected = false; }

  async connect() {
    console.log('Connecting...');
    this.connected = true;
  }

  async query(sql) {
    if (!this.connected) throw new Error('Not connected');
    if (sql.includes('DROP')) throw new Error('Destructive query blocked');
    return ['result1', 'result2'];
  }

  async close() {
    console.log('Closing connection...');
    this.connected = false;
  }
}

async function runQuery(sql) {
  const db = new DataConnection();
  try {
    await db.connect();
    const results = await db.query(sql);
    console.log('Results:', results);
    return results;
  } catch (err) {
    console.error('Query failed:', err.message);
    throw err;  // Re-throw after logging
  } finally {
    await db.close();  // ALWAYS runs, even if catch re-throws!
    console.log('Connection closed');
  }
}

runQuery('SELECT * FROM users')
  .then(function(r) { console.log('Done'); })
  .catch(function(e) { console.log('Final error:', e.message); });

// Output:
// Connecting...
// Results: ['result1', 'result2']
// Closing connection...
// Connection closed
// Done`,description:"finally is ideal for resource cleanup. The connection closes whether the query succeeds or fails, even if catch re-throws the error. Without finally, a throw in catch would leak the connection."},{title:"Error Handling Patterns: Boundary and Retry",useCase:"Top-level error boundary with retry logic",code:`async function fetchWithRetry(url, maxRetries) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      return response.json();
    } catch (err) {
      lastError = err;
      console.log('Attempt ' + attempt + ' failed:', err.message);

      if (attempt < maxRetries) {
        // Wait before retrying (exponential backoff)
        const delay = Math.pow(2, attempt) * 200;
        await new Promise(function(r) { setTimeout(r, delay); });
      }
    }
  }

  throw lastError;  // All attempts failed
}

// Top-level error boundary
async function loadData() {
  try {
    const data = await fetchWithRetry('/api/data', 3);
    render(data);
  } catch (err) {
    showErrorScreen('Unable to load data after multiple attempts.');
    logError(err);  // Log to monitoring service
  }
}

loadData();`,description:"Retry pattern with exponential backoff inside a try/catch. Each failed attempt waits longer before retrying. The outer catch is the error boundary that shows a user-friendly message and logs the error."},{title:"Async Error Handling: Promise Chains vs try/catch",useCase:"Error handling in async code",code:`// Promise chain with .catch()
fetch('/api/users')
  .then(function(r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  })
  .then(function(users) {
    return fetch('/api/posts?userId=' + users[0].id);
  })
  .then(function(r) { return r.json(); })
  .then(function(posts) {
    renderPosts(posts);
  })
  .catch(function(err) {
    // Catches ANY error from any .then() above
    console.error('Failed to load posts:', err.message);
  })
  .finally(function() {
    hideSpinner();  // Always runs
  });

// Same with async/await and try/catch
async function loadPosts() {
  try {
    const userRes = await fetch('/api/users');
    if (!userRes.ok) throw new Error('HTTP ' + userRes.status);
    const users = await userRes.json();

    const postsRes = await fetch('/api/posts?userId=' + users[0].id);
    if (!postsRes.ok) throw new Error('HTTP ' + postsRes.status);
    const posts = await postsRes.json();

    renderPosts(posts);
  } catch (err) {
    console.error('Failed to load posts:', err.message);
  } finally {
    hideSpinner();
  }
}

loadPosts();`,description:"Both promise chains and async/await handle errors. .catch() at the end catches any error in the chain. async/await uses try/catch/finally for the same purpose. Choose based on your style — both are correct."}],mcqQuestions:[{question:"What does the finally block do?",options:["Runs only if no error occurs","Runs only if an error occurs","Always runs after try/catch","Runs before the try block"],answer:2,explanation:"finally always executes after try (if no error) or after catch (if error), regardless of control flow statements like return or throw."},{question:"What happens if you throw inside finally and there's a pending exception from catch?",options:["Both errors are preserved","The finally exception replaces the catch exception","The catch exception takes priority","JavaScript throws a double-error"],answer:1,explanation:"If finally throws, it overrides any exception from the try or catch block. The original exception is lost."},{question:"Which Error type is thrown when accessing an undefined variable?",options:["TypeError","SyntaxError","ReferenceError","RangeError"],answer:2,explanation:"ReferenceError is thrown when code attempts to access a variable that has not been declared or is out of scope."},{question:"Can you throw any value in JavaScript?",options:["Yes, any value can be thrown","No, only Error objects","Only strings and numbers","Only objects"],answer:0,explanation:"JavaScript allows throwing any value: throw 'error', throw 404, throw { code: 1 }. However, Error objects are best practice because they capture stack traces."},{question:"What happens if an error is not caught anywhere?",options:["It's silently ignored","It becomes an unhandled error — may crash the program","JavaScript automatically recovers","It's caught by the nearest parent function"],answer:1,explanation:"Uncaught errors propagate up the call stack. If no catch is found, the environment handles it (window.onerror in browsers), and the script may stop executing."},{question:"What is the purpose of error.stack?",options:["It's not a real property","It contains the call stack trace at the point the error was created","It contains the error message only","It contains the variable values"],answer:1,explanation:"error.stack is a string containing the call stack trace showing where the error was created. It's invaluable for debugging."},{question:"Can try/catch handle errors in setTimeout callbacks?",options:["Yes, wrap the setTimeout in try/catch","No — try/catch around setTimeout does NOT catch the callback's errors","Only in strict mode","Only with async/await"],answer:1,explanation:"Errors in setTimeout callbacks occur in a separate execution context. try/catch around setTimeout does not catch them. Catch inside the callback."},{question:"How do you create a custom error type?",options:["Error.create('CustomError')","class CustomError extends Error { constructor(m) { super(m); this.name = 'CustomError'; } }","new Error('CustomError')","CustomError = Error.prototype"],answer:1,explanation:"Extend the Error class with extends, call super(message) in the constructor, and set this.name to your error type."},{question:"What does try/catch with an empty catch block do?",options:["Swallows the error silently","Re-throws the error","Creates a syntax error","Logs the error automatically"],answer:0,explanation:"An empty catch (catch(e) {}) silently swallows the error. This is generally bad practice — at minimum log the error for debugging."},{question:"Can a finally block contain a return statement?",options:["Yes, and it overrides the try/catch return value","No, finally cannot have return","return in finally is ignored","Only if try also has return"],answer:0,explanation:"If finally has a return statement, it overrides any return or throw from try or catch. This is usually unintended behavior."}]};export{e as error_handling};
