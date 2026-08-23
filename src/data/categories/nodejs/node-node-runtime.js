export const node_node_runtime = {
  "id": "node-node-runtime",
  "title": "Node.js Runtime",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Node.js is a JavaScript runtime built on Chrome's V8 engine that executes JavaScript outside the browser.",
    "It provides APIs for file system access, networking, child processes, and other OS-level operations not available in browsers.",
    "Node.js uses a single-threaded event loop with a non-blocking I/O model, making it efficient for I/O-heavy applications.",
    "Libuv handles the asynchronous I/O operations, thread pool, and the event loop implementation in Node.js."
  ],
  "laymanDefinition": "Node.js is like giving JavaScript a superpower: the ability to run outside a web browser. Before Node.js, JavaScript could only run in the browser and interact with web pages. Node.js took the V8 engine (the brain of Chrome) and put it in a standalone environment with access to the file system, network, and operating system. This allowed developers to build servers, command-line tools, and desktop applications using JavaScript. Node.js is especially good at handling many simultaneous connections efficiently because it does not create a new thread for each request - it uses a single thread with an event loop to juggle multiple tasks.",
  "deepDive": [
    {
      "heading": "V8 Engine: The JavaScript Execution Core",
      "text": "Node.js uses Google's V8 JavaScript engine to compile and execute JavaScript. V8 is written in C++ and implements ECMAScript standards. It compiles JavaScript directly to native machine code (JIT compilation) rather than interpreting bytecode. V8 handles: (1) Parsing - converts source code into an Abstract Syntax Tree (AST). (2) Compilation - the Ignition interpreter generates bytecode, and the TurboFan compiler optimizes hot code paths. (3) Memory management - V8's garbage collector (Orinoco) reclaims unused memory. (4) Inline caching - optimizes property access patterns. Node.js extends V8 with additional APIs (require, fs, http) that are not part of the JavaScript language itself."
    },
    {
      "heading": "Libuv: The I/O Engine",
      "text": "Libuv is the C library that provides Node.js with its asynchronous I/O capabilities. Key features: (1) Event loop - the core mechanism that handles asynchronous operations. (2) Thread pool - a pool of 4 threads (default, configurable via UV_THREADPOOL_SIZE) for CPU-intensive or blocking operations like file I/O, DNS lookups, and crypto. (3) Async I/O - uses platform-specific mechanisms: epoll (Linux), kqueue (macOS), IOCP (Windows). (4) Timer management - setTimeout, setInterval, setImmediate. (5) Signals and child process management. Libuv abstracts the underlying OS differences, providing a consistent API across platforms. The thread pool size is a critical configuration for performance - setting it too high causes thread contention; too low causes I/O bottlenecks."
    },
    {
      "heading": "Node.js API Layer",
      "text": "Node.js provides a rich set of built-in modules that extend JavaScript beyond what browsers offer: (1) File System (fs) - read/write files, watch directories, create streams. (2) HTTP/HTTPS - create servers and make requests. (3) Path - manipulate file paths cross-platform. (4) OS - operating system information (CPU, memory, network interfaces). (5) Crypto - cryptographic functions (hashing, encryption, signing). (6) Stream - handle streaming data. (7) Events - event emitter pattern. (8) Buffer - handle binary data. (9) Cluster - scale across CPU cores. (10) Child Process - spawn system commands. These APIs follow the Node.js convention: callback-based by default, with promisified versions available via require(\"fs/promises\")."
    },
    {
      "heading": "Node.js Module System",
      "text": "Node.js uses two module systems: (1) CommonJS - the original system using require() and module.exports. Modules are loaded synchronously and cached after first load. require() resolves modules using a specific algorithm: built-in modules first, then node_modules, then local files with relative/absolute paths. (2) ES Modules (ESM) - the modern JavaScript standard using import/export. Enabled via \"type\": \"module\" in package.json or .mjs extension. ESM supports static analysis for tree shaking and top-level await. CommonJS and ESM can interoperate but with limitations: ESM can import CommonJS modules (as default exports), but CommonJS cannot import ESM modules (dynamic import() works as an async bridge)."
    },
    {
      "heading": "Node.js Runtime Architecture Performance Characteristics",
      "text": "Node.js excels at I/O-bound workloads but struggles with CPU-bound tasks. Performance characteristics: (1) I/O-bound (database queries, file reads, network requests) - Node.js handles thousands of concurrent connections with minimal overhead because I/O operations are delegated to libuv's thread pool or OS async facilities. (2) CPU-bound (image processing, JSON parsing, cryptography, data transformation) - blocks the event loop and degrades responsiveness. Solutions: use Worker Threads for CPU-intensive work, or offload to microservices. (3) Memory footprint - Node.js typically uses 10-50MB for basic applications, scaling with concurrent connections. (4) Startup time - cold start takes 50-300ms depending on module count and dependency resolution."
    }
  ],
  "interviewAnswer": "Node.js is a JavaScript runtime built on V8 and libuv, enabling JavaScript execution outside the browser. It uses a single-threaded event loop with non-blocking I/O, making it efficient for I/O-heavy applications. V8 compiles JavaScript to native code via JIT compilation. Libuv provides the event loop, thread pool, and async I/O. Node.js extends JavaScript with built-in modules (fs, http, path, crypto) for system-level operations. It supports both CommonJS and ES Module systems. Node.js excels at I/O-bound workloads but blocks on CPU-intensive operations - use Worker Threads for those. Key performance considerations: libuv thread pool size, event loop blocking, and module loading overhead.",
  "interviewQuestions": [
    {
      "question": "What is the relationship between V8 and Node.js?",
      "answer": "V8 is the JavaScript engine that compiles and executes JavaScript. Node.js embeds V8 and extends it with APIs for file system, networking, and OS operations. V8 handles the JavaScript language; Node.js provides the runtime environment."
    },
    {
      "question": "What is libuv and what does it provide?",
      "answer": "Libuv is a C library that provides Node.js with its asynchronous I/O capabilities. It implements the event loop, thread pool, async file I/O, DNS resolution, signal handling, and child process management. It abstracts OS differences across Linux, macOS, and Windows."
    },
    {
      "question": "How does Node.js handle I/O operations asynchronously?",
      "answer": "For non-blocking I/O (network sockets), Node.js uses OS-level async facilities (epoll, kqueue, IOCP). For blocking operations (file I/O, DNS, crypto), it uses libuv's thread pool. The event loop coordinates callbacks and results without blocking the main thread."
    },
    {
      "question": "What is the default libuv thread pool size and how do you change it?",
      "answer": "The default thread pool size is 4. Change it by setting the UV_THREADPOOL_SIZE environment variable (e.g., UV_THREADPOOL_SIZE=8). Each thread consumes ~1MB of stack space. The optimal value depends on CPU cores and workload type (I/O-bound vs CPU-bound)."
    },
    {
      "question": "What is the difference between CommonJS and ES Modules in Node.js?",
      "answer": "CommonJS uses require() and module.exports, is synchronous, and loads modules at runtime. ES Modules use import/export, support static analysis for tree shaking, and enable top-level await. ESM is enabled via \"type\": \"module\" in package.json or .mjs extension."
    },
    {
      "question": "Why does Node.js use a single-threaded event loop?",
      "answer": "Single-threaded event loop avoids thread context switching overhead and race conditions common in multi-threaded servers. For I/O-bound workloads, it handles thousands of concurrent connections more efficiently than thread-per-request models."
    },
    {
      "question": "How does Node.js handle CPU-intensive tasks?",
      "answer": "CPU-intensive tasks block the event loop, degrading responsiveness. Solutions: (1) Use Worker Threads for parallel CPU processing. (2) Offload to external services or microservices. (3) Use native addons (C++ via N-API) for heavy computation. (4) Break large tasks into chunks with setImmediate()."
    },
    {
      "question": "What is the module resolution algorithm in require()?",
      "answer": "require() resolves modules in this order: (1) Built-in modules (fs, http, path). (2) Relative paths (./ or ../) - resolves to file, .js, .json, .node. (3) node_modules directory - walks up the directory tree. (4) Global modules (NODE_PATH)."
    },
    {
      "question": "How does Node.js handle cross-platform compatibility?",
      "answer": "Libuv abstracts OS-level differences (file paths, process management, async I/O). The path module handles path separators (/ vs ). The os module provides normalized OS information. Node.js uses conditional compilation at build time and runtime feature detection via process.platform and process.arch."
    },
    {
      "question": "What is the startup sequence of a Node.js application?",
      "answer": "(1) V8 initializes. (2) Node.js bootstrap code runs (lib/internal/bootstrap/). (3) Event loop starts. (4) Module resolution and loading (main entry point). (5) require() calls execute synchronously. (6) Top-level code runs. (7) Event loop handles callbacks. (8) Process exits when event loop has no more work."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Node.js Runtime Architecture</text><rect x=\"30\" y=\"55\" width=\"160\" height=\"50\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"110\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">JavaScript Code</text><text x=\"110\" y=\"99\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">User application code</text><line x1=\"110\" y1=\"105\" x2=\"110\" y2=\"125\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"125\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"110\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">V8 Engine</text><text x=\"110\" y=\"164\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compiles & executes JS</text><line x1=\"110\" y1=\"170\" x2=\"110\" y2=\"190\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"190\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"110\" y=\"206\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node.js APIs</text><text x=\"110\" y=\"229\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fs, http, path, crypto</text><line x1=\"110\" y1=\"235\" x2=\"110\" y2=\"253\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"253\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"110\" y=\"269\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Libuv</text><text x=\"110\" y=\"292\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Event loop + thread pool</text></svg>",
  "codeExamples": [
    {
      "title": "Basic HTTP Server with Node.js Runtime APIs",
      "useCase": "Create a server using built-in http module",
      "code": "const http = require(\"http\");\nconst fs = require(\"fs\");\nconst path = require(\"path\");\n\nconst server = http.createServer((req, res) => {\n  if (req.url === \"/\") {\n    res.writeHead(200, { \"Content-Type\": \"text/html\" });\n    res.end(\"<h1>Node.js Runtime</h1><p>Serving from V8 + libuv</p>\");\n  } else if (req.url === \"/data\") {\n    fs.readFile(path.join(__dirname, \"data.json\"), \"utf8\", (err, data) => {\n      if (err) { res.writeHead(500); res.end(\"Error\"); return; }\n      res.writeHead(200, { \"Content-Type\": \"application/json\" });\n      res.end(data);\n    });\n  }\n});\n\nserver.listen(3000, () => {\n  console.log(\"Server running on port 3000\");\n  console.log(\"Process PID:\", process.pid);\n  console.log(\"Node version:\", process.version);\n  console.log(\"Platform:\", process.platform, process.arch);\n});",
      "description": "This example demonstrates Node.js runtime capabilities: the http module creates a server, fs reads a file asynchronously (delegated to libuv thread pool), path handles cross-platform paths. process provides runtime information about the Node.js instance."
    },
    {
      "title": "Understanding Libuv Thread Pool Impact",
      "useCase": "Demonstrate async operations using thread pool vs event loop",
      "code": "const crypto = require(\"crypto\");\nconst start = Date.now();\n\nfunction hash(index) {\n  crypto.pbkdf2(\"password\", \"salt\", 100000, 64, \"sha512\", () => {\n    console.log(\"Hash \" + index + \": \" + (Date.now() - start) + \"ms\");\n  });\n}\n\nfor (let i = 1; i <= 8; i++) {\n  hash(i);\n}\n\n// UV_THREADPOOL_SIZE=8 node app.js to increase pool",
      "description": "This demonstrates libuv's thread pool in action. crypto.pbkdf2 is CPU-intensive and uses the thread pool. With default pool size 4, the first 4 hashes run in parallel. The next 4 wait for threads to become free."
    },
    {
      "title": "Module Resolution and Caching",
      "useCase": "Demonstrate CommonJS module system behavior",
      "code": "// lib/counter.js\nlet count = 0;\nmodule.exports = {\n  increment: () => ++count,\n  getCount: () => count\n};\n\n// app.js\nconst counter1 = require(\"./lib/counter\");\nconst counter2 = require(\"./lib/counter\");\n\nconsole.log(counter1 === counter2);\nconsole.log(counter1.increment());\nconsole.log(counter2.increment());\nconsole.log(counter1.getCount());",
      "description": "CommonJS caches modules after the first require(). Subsequent require() calls return the same instance from the cache. Modules are effectively singletons."
    },
    {
      "title": "Event Loop Blocking Detection",
      "useCase": "Detect and measure event loop lag",
      "code": "function monitorEventLoop(threshold) {\n  if (threshold === undefined) threshold = 50;\n  var lastCheck = Date.now();\n  setInterval(function() {\n    var now = Date.now();\n    var lag = now - lastCheck - 1000;\n    if (lag > threshold) {\n      console.warn(\"Event loop lag: \" + lag + \"ms\");\n    }\n    lastCheck = now;\n  }, 1000);\n}\n\nfunction blockLoop(ms) {\n  var start = Date.now();\n  while (Date.now() - start < ms) {}\n}\n\nmonitorEventLoop();\nblockLoop(2000);",
      "description": "Event loop monitoring detects when the event loop is blocked by CPU-intensive operations. The setInterval check measures actual vs expected timing. A large lag indicates the event loop was blocked."
    },
    {
      "title": "Cross-Platform Path Handling",
      "useCase": "Handle file paths correctly across OS",
      "code": "var path = require(\"path\");\n\nvar goodPath = path.join(__dirname, \"data\", \"files\", \"config.json\");\n\nconsole.log(\"Path sep:\", path.sep);\nconsole.log(\"Delimiter:\", path.delimiter);\n\nvar filePath = \"/user/docs/file.txt\";\nconsole.log(\"dir:\", path.dirname(filePath));\nconsole.log(\"base:\", path.basename(filePath));\nconsole.log(\"ext:\", path.extname(filePath));\nconsole.log(path.parse(filePath));",
      "description": "Always use path methods instead of string concatenation for file paths. path.join() uses the correct separator for each platform."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What JavaScript engine does Node.js use?",
      "options": [
        "SpiderMonkey",
        "V8",
        "JavaScriptCore",
        "Chakra"
      ],
      "answer": 1,
      "explanation": "Node.js uses Google's V8 JavaScript engine."
    },
    {
      "question": "What library provides the event loop and async I/O?",
      "options": [
        "libevent",
        "libuv",
        "libev",
        "libio"
      ],
      "answer": 1,
      "explanation": "Libuv implements the event loop, thread pool, and async I/O for Node.js."
    },
    {
      "question": "Default libuv thread pool size?",
      "options": [
        "1",
        "4",
        "8",
        "16"
      ],
      "answer": 1,
      "explanation": "Default is 4. Change with UV_THREADPOOL_SIZE."
    },
    {
      "question": "Which workload does Node.js handle best?",
      "options": [
        "CPU-intensive",
        "I/O-bound operations",
        "Video processing",
        "ML training"
      ],
      "answer": 1,
      "explanation": "Node.js excels at I/O-bound workloads via the event loop. CPU work blocks the loop."
    },
    {
      "question": "How does require(\"./module\") resolve?",
      "options": [
        "Searches node_modules",
        "Relative to current file",
        "Global modules",
        "NODE_PATH"
      ],
      "answer": 1,
      "explanation": "./ resolves relative to the file calling require()."
    },
    {
      "question": "How to enable ES Modules in Node.js?",
      "options": [
        "Use .mjs extension",
        "Add \"type\":\"module\" to package.json",
        "All of the above",
        "Use the --esm flag"
      ],
      "answer": 2,
      "explanation": "ESM is enabled via \"type\":\"module\", .mjs extension, or --esm flag."
    }
  ]
};
