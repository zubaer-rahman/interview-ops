const e={title:"Fetch API",difficulty:"intermediate",estimatedMinutes:20,tldr:["The <strong>Fetch API</strong> provides a modern, promise-based interface for making HTTP requests in browsers and Node.js (v18+).","<code>fetch(url, options)</code> returns a <strong>Promise</strong> that resolves to a <strong>Response</strong> object — even for HTTP errors (404, 500).","Key methods: <code>response.json()</code>, <code>response.text()</code>, <code>response.blob()</code>, <code>response.formData()</code> — all return promises.","Fetch only rejects on <strong>network errors</strong> (offline, DNS failure). HTTP error statuses are NOT rejections — check <code>response.ok</code> or <code>response.status</code>."],laymanDefinition:"Think of fetch as a trained messenger pigeon. You write a message (request), attach any extra instructions (headers, body), and send the pigeon out. The pigeon returns with a response. The old way (XMLHttpRequest) was like using a complex radio set with many dials and knobs. Fetch is the modern, simpler messenger service: you hand over your request details, get back a promise that the pigeon will return, and then extract the response in whatever format you need (JSON, text, etc.).",deepDive:[{heading:"The Response Object",text:"fetch resolves with a Response object even for HTTP 404/500. The Response contains: <code>response.status</code> (number), <code>response.ok</code> (true for 200-299), <code>response.headers</code>, <code>response.redirected</code>. The Response body is a ReadableStream that can be consumed once (one of .json(), .text(), .blob(), .formData(), or .arrayBuffer()). Consuming it more than once throws an error."},{heading:"Request Options: Method, Headers, Body",text:"The second argument to fetch is an options object: <code>method</code> (GET, POST, PUT, DELETE, PATCH), <code>headers</code> (object or Headers instance), <code>body</code> (string, FormData, Blob, etc.), <code>credentials</code> ('same-origin', 'include', 'omit'), <code>cache</code>, <code>mode</code> ('cors', 'same-origin', 'no-cors'). For POST/PUT with JSON, set Content-Type header and JSON.stringify the body."},{heading:"HTTP Error Handling",text:"Fetch does NOT reject on HTTP errors. A 404 or 500 response causes the promise to resolve normally. You must check response.ok or response.status yourself and throw if needed: <code>if (!response.ok) throw new Error('HTTP ' + response.status)</code>. This is intentional — it gives you control over error handling rather than treating all non-2xx as exceptions."},{heading:"Cross-Origin Requests (CORS)",text:"By default, fetch follows CORS (Cross-Origin Resource Sharing). If you request a different origin, the browser sends a preflight OPTIONS request. The server must include appropriate CORS headers (Access-Control-Allow-Origin). Use mode: 'cors' (default), 'same-origin' (disallow cross-origin), or 'no-cors' (limited, cannot read response). For credentials (cookies), set credentials: 'include'."},{heading:"fetch vs XMLHttpRequest",list:["<strong>fetch:</strong> Promise-based, cleaner API, supports Request/Response/Headers objects, integrates with Service Workers, streams support.","<strong>XHR:</strong> Event-based (onreadystatechange), more verbose, supports upload progress (not available in fetch natively), broader browser support.","<strong>When to use fetch:</strong> Most modern apps — simpler syntax, better error handling patterns, works with async/await.","<strong>When to use XHR:</strong> When you need upload progress tracking, or supporting very old browsers (IE11)."]}],interviewAnswer:"The Fetch API is a modern replacement for XMLHttpRequest that provides a promise-based interface for HTTP requests. fetch(url, options) returns a Promise that resolves to a Response object. Importantly, fetch only rejects on network errors — HTTP errors like 404 or 500 are treated as successful responses. You must check response.ok to handle HTTP errors. The Response body can be consumed as JSON, text, blob, etc. using methods that return promises. Fetch supports CORS, custom headers, various HTTP methods, and request/response streaming. Compared to XHR, fetch is simpler, more modern, and integrates naturally with async/await and service workers.",interviewQuestions:[{question:"What does fetch return?",answer:"fetch returns a Promise that resolves to a Response object. The Response object contains status, headers, and body methods (.json(), .text(), .blob()). The promise rejects only on network failures, not HTTP errors."},{question:"Does fetch reject on HTTP 404 or 500?",answer:"No. fetch only rejects on network errors (offline, DNS failure, connection refused). HTTP 404 and 500 are considered successful responses. You must check response.ok (boolean) or response.status to detect HTTP errors and throw manually."},{question:"How do you make a POST request with JSON body using fetch?",answer:"fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Alice', role: 'admin' }) }).then(r => r.json()).then(data => console.log(data));"},{question:"What is CORS and how does fetch handle it?",answer:"CORS (Cross-Origin Resource Sharing) is a security mechanism that controls cross-origin HTTP requests. By default, fetch uses 'cors' mode. If the server doesn't include proper Access-Control-Allow-Origin headers, the browser blocks the response. Use mode: 'no-cors' for simple requests (but can't read response), or ensure the server sends correct CORS headers."},{question:"How do you send credentials (cookies) with fetch?",answer:"Set credentials: 'include': fetch(url, { credentials: 'include' }). This sends cookies (including cross-origin) with the request. For same-origin only, use credentials: 'same-origin'. To omit cookies entirely, use credentials: 'omit'."},{question:"Can you read the response body multiple times?",answer:"No. The Response body is a ReadableStream that can be consumed only once. Calling .json() after .text() on the same response throws an error. Clone the response first if needed: response.clone().json() and response.text()."},{question:"What is the difference between response.json() and response.text()?",answer:"response.json() parses the body as JSON and returns a JavaScript object/array. response.text() returns the body as a plain string. Both consume the body stream and return promises. Use .json() for API responses, .text() for HTML or plain text."},{question:"How do you set custom headers on a fetch request?",answer:"fetch(url, { headers: { 'Authorization': 'Bearer token123', 'X-Custom': 'value' } }). You can also use the Headers constructor: const headers = new Headers(); headers.append('Authorization', 'Bearer token123'); fetch(url, { headers });"},{question:"What happens if you fetch a URL that redirects?",answer:"By default, fetch follows HTTP redirects (status 301, 302, 303) automatically. The response.redirected property is true if the request was redirected. To prevent following redirects, set redirect: 'error' (throw on redirect) or redirect: 'manual' (return an opaque response)."},{question:"How does fetch handle request timeouts?",answer:"fetch does not have a built-in timeout option. You must implement timeouts manually using AbortController: const controller = new AbortController(); setTimeout(() => controller.abort(), 5000); fetch(url, { signal: controller.signal });"}],diagramSvg:'<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Fetch API Flow</text><rect x="50" y="70" width="200" height="50" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="150" y="93" text-anchor="middle" fill="#6c9fff" font-size="11" font-weight="bold">const promise = fetch(url)</text><text x="150" y="110" text-anchor="middle" fill="#9aa0b0" font-size="10">returns Promise[Response]</text><line x1="250" y1="95" x2="310" y2="95" stroke="#fbbf24" stroke-width="2"/><rect x="310" y="70" width="200" height="50" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="410" y="93" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Network Error?</text><text x="410" y="110" text-anchor="middle" fill="#9aa0b0" font-size="10">Offline, DNS fail?</text><line x1="410" y1="120" x2="410" y2="145" stroke="#f87171" stroke-width="2"/><text x="480" y="140" fill="#f87171" font-size="11">Reject</text><line x1="460" y1="95" x2="540" y2="145" stroke="#98c379" stroke-width="2"/><text x="570" y="105" fill="#98c379" font-size="11">Resolve</text><rect x="310" y="145" width="340" height="50" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="480" y="168" text-anchor="middle" fill="#98c379" font-size="11" font-weight="bold">Response (status, headers, body)</text><text x="480" y="185" text-anchor="middle" fill="#9aa0b0" font-size="10">Check response.ok — handle HTTP errors</text><line x1="480" y1="195" x2="480" y2="225" stroke="#e5c07b" stroke-width="2"/><rect x="130" y="225" width="220" height="55" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="240" y="248" text-anchor="middle" fill="#e5c07b" font-size="11" font-weight="bold">response.json() or .text()</text><text x="240" y="265" text-anchor="middle" fill="#9aa0b0" font-size="10">Parse body (consumes stream once)</text><line x1="350" y1="280" x2="350" y2="310" stroke="#34d399" stroke-width="2"/><rect x="200" y="310" width="300" height="45" rx="22" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="350" y="336" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Use the parsed data</text></svg>',codeExamples:[{title:"Basic GET Request with Error Handling",useCase:"Fetching data from an API",code:`async function getUser(id) {
  try {
    const response = await fetch('https://api.example.com/users/' + id);

    // Fetch does NOT reject on HTTP errors — check explicitly
    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ': ' + response.statusText);
    }

    const user = await response.json();
    return user;
  } catch (err) {
    // Catches both network errors and HTTP errors (our throw above)
    console.error('Failed to fetch user:', err.message);
    throw err;
  }
}

getUser(42).then(function(u) {
  console.log('User:', u.name, u.email);
}).catch(function(e) {
  console.log('Could not load user');
});`,description:"Always check response.ok before parsing. This catches both network errors and HTTP error responses (404, 500) in one catch block."},{title:"POST Request with JSON Body",useCase:"Creating a resource",code:`async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken()
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const error = await response.json().catch(function() { return {}; });
    throw new Error(error.message || 'Failed to create user');
  }

  return response.json();
}

createUser({ name: 'Alice', email: 'alice@example.com' })
  .then(function(user) { console.log('Created:', user.id); })
  .catch(function(err) { console.error('Error:', err.message); });`,description:"POST requests require method, Content-Type header, and a JSON-stringified body. Always handle non-2xx responses and try to extract server error messages."},{title:"Fetch with AbortController (Timeout)",useCase:"Canceling a slow request",code:`async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timeoutId = setTimeout(function() {
    controller.abort();
  }, ms);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Request timed out after ' + ms + 'ms');
    }
    throw err;
  }
}

fetchWithTimeout('https://api.example.com/data', 3000)
  .then(function(data) { console.log('Data:', data); })
  .catch(function(err) { console.error('Error:', err.message); });`,description:"AbortController provides timeout functionality for fetch. When controller.abort() is called, the fetch promise rejects with AbortError."},{title:"Uploading Files with FormData",useCase:"File upload via fetch",code:`async function uploadFile(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('description', 'User avatar');

  // For progress, fetch doesn't support upload progress natively.
  // Use XMLHttpRequest if progress reporting is required.
  // Or use the Response's body reader for download progress.

  const response = await fetch('/api/upload', {
    method: 'POST',
    // Note: Do NOT set Content-Type for FormData — browser sets
    // the correct multipart/form-data boundary automatically
    body: formData
  });

  if (!response.ok) throw new Error('Upload failed');
  return response.json();
}

// Usage
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', async function() {
  const file = fileInput.files[0];
  try {
    const result = await uploadFile(file);
    console.log('Uploaded:', result.url);
  } catch (err) {
    console.error('Upload error:', err);
  }
});`,description:"FormData automatically sets multipart/form-data encoding. The browser sets the Content-Type with the correct boundary. Don't set Content-Type manually for FormData."},{title:"Fetch with Custom Headers and Query Parameters",useCase:"Advanced request configuration",code:`async function searchUsers(query, options) {
  // Build URL with query parameters
  const url = new URL('/api/users/search', window.location.origin);
  url.searchParams.set('q', query);
  url.searchParams.set('limit', String(options.limit || 10));
  url.searchParams.set('page', String(options.page || 1));

  // Build headers
  const headers = new Headers({
    'Accept': 'application/json',
    'X-Request-ID': crypto.randomUUID()
  });

  if (options.token) {
    headers.set('Authorization', 'Bearer ' + options.token);
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: headers,
    credentials: 'same-origin'
  });

  if (!response.ok) throw new Error('Search failed');

  return {
    data: await response.json(),
    total: parseInt(response.headers.get('X-Total-Count') || '0'),
    status: response.status
  };
}

searchUsers('javascript', { limit: 5, token: 'abc123' })
  .then(function(r) { console.log(r.data.length, 'results out of', r.total); });`,description:"URL API and Headers API provide clean interfaces for building requests. Use URL.searchParams for query parameters and response.headers for reading server metadata."}],mcqQuestions:[{question:"What does fetch return?",options:["An XMLHttpRequest object","A Promise that resolves to a Response object","A callback","A string of JSON"],answer:1,explanation:"fetch returns a Promise that resolves to a Response object, regardless of the HTTP status code."},{question:"Does fetch reject on HTTP 404?",options:["Yes, it always rejects on non-200","No, it only rejects on network errors","Yes, but only in Chrome","It depends on the server's response"],answer:1,explanation:"fetch only rejects on network failures (offline, DNS error, connection refused). HTTP 404 and 500 are treated as successful responses."},{question:"How do you check if a fetch response indicates an HTTP error?",options:["Check response.status >= 400","Use response.ok","Catch the error in .catch()","Both A and B"],answer:3,explanation:"response.ok is true for 200-299 status. You can also check response.status directly. Both work since fetch doesn't reject on HTTP errors."},{question:"Can you call response.json() and response.text() on the same response?",options:["Yes, in any order","No, the body stream can only be consumed once","Yes, but only .json() first","Only if you use response.clone()"],answer:1,explanation:"The Response body is a ReadableStream that can be consumed only once. Use response.clone() before consuming if you need both."},{question:"How do you send JSON data in a POST request with fetch?",options:["body: jsonData","body: JSON.stringify(jsonData) with Content-Type header","params: jsonData","data: jsonData"],answer:1,explanation:"Use JSON.stringify() to serialize the body and set Content-Type: application/json header. The body must be a string for JSON."},{question:"How do you implement a timeout with fetch?",options:["fetch(url, { timeout: 5000 })","Using AbortController with setTimeout","Fetch doesn't support timeouts","Using Promise.race with a delay"],answer:1,explanation:"fetch has no built-in timeout. Use AbortController: create a controller, set a timeout to call controller.abort(), and pass signal to fetch."},{question:"What is the CORS mode of fetch by default?",options:["same-origin","no-cors","cors","navigate"],answer:2,explanation:"The default mode for fetch is 'cors'. Cross-origin requests are allowed but the response is blocked unless the server includes CORS headers."},{question:"What does response.json() return?",options:["A JavaScript object/array","A string","A Promise that resolves to parsed JSON","undefined"],answer:2,explanation:"response.json() returns a Promise that resolves to the parsed JSON data (object, array, or primitive)."},{question:"How do you send cookies with a cross-origin fetch request?",options:["fetch(url, { credentials: 'include' })","fetch(url, { cookies: true })","fetch(url, { mode: 'cors-credentials' })","Cookies cannot be sent cross-origin"],answer:0,explanation:"Set credentials: 'include' to send cookies (including cross-origin). The server must also include Access-Control-Allow-Credentials: true."},{question:"What happens when fetch encounters a network error?",options:["It resolves with a null response","The promise rejects","It retries automatically","It throws a synchronous error"],answer:1,explanation:"Network errors (offline, DNS failure, connection refused) cause the fetch promise to reject. This is the only case where fetch rejects."}]};export{e as fetch_api};
