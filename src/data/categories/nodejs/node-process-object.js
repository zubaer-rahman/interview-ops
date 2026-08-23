export const node_process_object = {
  "id": "node-process-object",
  "title": "Node.js Process Object",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "The process object is a global that provides information about the current Node.js process and control over its execution.",
    "Key properties: process.argv (command-line arguments), process.env (environment variables), process.pid (process ID), process.cwd() (current directory), process.uptime() (process runtime).",
    "Key methods: process.exit(), process.nextTick(), process.chdir(), process.cpuUsage(), process.memoryUsage().",
    "The process object is an EventEmitter that emits events: \"exit\", \"beforeExit\", \"uncaughtException\", \"unhandledRejection\", \"warning\", and signals like \"SIGINT\", \"SIGTERM\"."
  ],
  "laymanDefinition": "The Process object is like the control panel for your Node.js application. It tells you everything about your running program: what arguments were passed when it started (process.argv), what its ID number is (process.pid), what folder it is running from (process.cwd()), how long it has been running (process.uptime()), how much memory it is using (process.memoryUsage()), and what system environment variables are set (process.env). It also lets you control the program: exit gracefully (process.exit), schedule high-priority tasks (process.nextTick), change directories (process.chdir), and listen for important events like crashes (uncaughtException) and shutdown signals (SIGTERM).",
  "deepDive": [
    {
      "heading": "Command-Line Arguments and Environment",
      "text": "process.argv is an array: [0] Node.js executable path, [1] script path, [2+] user arguments. process.argv.slice(2) gives user args. process.env is an object of environment variables. Changes to process.env affect the current process and child processes (but not the system). process.env.NODE_ENV is a common convention for \"development\" vs \"production\". process.execPath - path to the Node.js executable. process.execArgv - Node.js flags passed to the executable (e.g., --inspect, --max-old-space-size). process.exitCode - set exit code without calling process.exit(). process.features - object describing Node.js build features (debug, IPv6, TLS, etc.). process.version - Node.js version string. process.versions - object with versions of dependencies (v8, uv, zlib, etc.). process.release - release metadata (name, sourceUrl, headersUrl)."
    },
    {
      "heading": "Process Lifecycle Events",
      "text": "The process object emits lifecycle events: (1) \"beforeExit\" - emitted when the event loop is empty and about to exit. If additional work is scheduled, the event loop continues. Does NOT fire on explicit process.exit(). (2) \"exit\" - emitted just before the process exits. Only synchronous operations work here - callbacks scheduled here do NOT run. (3) \"uncaughtException\" - emitted when an exception bubbles to the event loop without being caught. If not handled, the process prints the error and exits. Handle with care: the application may be in an inconsistent state. (4) \"unhandledRejection\" - emitted when a Promise rejection is not handled. Similar to uncaughtException but for promises. (5) \"warning\" - emitted for process warnings (deprecations, memory issues). (6) \"rejectionHandled\" - emitted when a rejection is handled after unhandledRejection was emitted. (7) \"multipleResolves\" - emitted when a Promise is resolved/rejected multiple times."
    },
    {
      "heading": "Process Resource Usage and Metrics",
      "text": "process.memoryUsage() returns: rss (resident set size), heapTotal (V8 heap allocated), heapUsed (V8 heap used), external (C++ objects memory), arrayBuffers (ArrayBuffer memory). process.cpuUsage() returns: user (user CPU time in microseconds), system (system CPU time). process.resourceUsage() (Node 12+) returns detailed resource usage: userCPUTime, systemCPUTime, maxRSS, sharedMemorySize, unsharedDataSize, unsharedStackSize, minorPageFault, majorPageFault, swappedOut, fsRead, fsWrite, ipcSent, ipcReceived, signalsCount, voluntaryContextSwitches, involuntaryContextSwitches. process.uptime() - process uptime in seconds (float). process.hrtime.bigint() - high-resolution time in nanoseconds (useful for precise timing). process.hrtime() - returns [seconds, nanoseconds] tuple. process.performance - performance timing (Node 16+)."
    },
    {
      "heading": "Process Control and Signal Handling",
      "text": "process.exit([code]) - exits the process synchronously. Sets exit code (0 = success, non-zero = error). process.kill(pid, signal) - sends a signal to a process. Does NOT kill the process necessarily - it sends a signal. process.abort() - forces immediate process abort (core dump). process.chdir(directory) - changes the current working directory. process.cwd() - returns current working directory. Signal handling: process.on(\"SIGINT\") - Ctrl+C. process.on(\"SIGTERM\") - termination request. process.on(\"SIGHUP\") - terminal closed. process.on(\"SIGUSR1\") - user-defined signal (also used by Node.js for debugger). SIGKILL and SIGSTOP cannot be handled. process.ppid - parent process ID (Node 15+). process.title - process title shown in ps/top. process.config - compile-time configuration options."
    },
    {
      "heading": "process.nextTick() and Microtasks",
      "text": "process.nextTick(callback, ...args) - schedules a callback to execute in the microtask queue, before any I/O or timer callbacks. It is NOT part of the event loop phases - it runs between each phase and between each individual callback within a phase. Priority: nextTick > Promise > event loop phase. Always runs before \"beforeExit\" and \"exit\" events. Warnings: (1) Recursive nextTick starves the event loop. (2) Use setImmediate() for deferring work to avoid nextTick recursion. (3) process.nextTick() has a maximum call stack depth - extreme recursion causes RangeError. (4) nextTick callbacks are processed in FIFO order within the same phase. (5) Use process.nextTick for: ensuring callbacks are async, handling errors in event emitters, running cleanup after the current operation but before I/O."
    }
  ],
  "interviewAnswer": "The process object is a global EventEmitter providing process info and control. Key: process.argv (CLI args), process.env (environment), process.pid, process.cwd(), process.memoryUsage() (rss, heapTotal, heapUsed), process.cpuUsage(), process.uptime(). Events: \"exit\" (synchronous cleanup), \"beforeExit\" (async cleanup), \"uncaughtException\" (handle critical errors), \"unhandledRejection\" (promise errors), \"SIGINT\"/\"SIGTERM\" (graceful shutdown). process.nextTick() schedules microtasks before next event loop phase. Use process.exitCode instead of process.exit() when possible. Exit codes: 0 success, 1 uncaught exception, non-zero for specific errors.",
  "interviewQuestions": [
    {
      "question": "What is the difference between process.exit() and process.exitCode?",
      "answer": "process.exit(code) exits the process immediately, preventing any queued async work. process.exitCode = code sets the exit code but allows the process to exit naturally when the event loop empties. Prefer exitCode for graceful shutdown."
    },
    {
      "question": "What does process.memoryUsage() return?",
      "answer": "An object with: rss (resident set size - total memory allocated), heapTotal (V8 heap allocated), heapUsed (V8 heap in use), external (C++ object memory), arrayBuffers (ArrayBuffer memory). All values are in bytes."
    },
    {
      "question": "What is the difference between \"exit\" and \"beforeExit\" events?",
      "answer": "\"exit\" fires when the process is about to terminate - only synchronous code runs. \"beforeExit\" fires when the event loop is empty but the process has not been asked to exit yet - async operations scheduled here can keep the process alive. \"exit\" fires on process.exit(); \"beforeExit\" does not."
    },
    {
      "question": "How do you handle uncaught exceptions?",
      "answer": "process.on(\"uncaughtException\", (err) => { /* cleanup */ process.exit(1); }). The handler should perform cleanup and exit - the application is in an unknown state. Do NOT try to resume normal operation. Use domains or process.on for logging before exit."
    },
    {
      "question": "What is process.argv and how do you parse CLI arguments?",
      "answer": "process.argv[0] = Node executable path, [1] = script path, [2+] = user arguments. Use process.argv.slice(2) to get user args. For complex parsing, use libraries like yargs or commander. For simple cases, manually parse --flags."
    },
    {
      "question": "What happens when a SIGTERM signal is received?",
      "answer": "The process can handle it: process.on(\"SIGTERM\", handler). The handler should perform graceful shutdown: stop accepting new connections, close database connections, save state, then exit. Without a handler, the process terminates immediately."
    },
    {
      "question": "What is process.nextTick() and when should you use it?",
      "answer": "nextTick() schedules a callback to run before the next event loop phase, in the microtask queue. Use it to: (1) Ensure callbacks are always async (you get the same behavior regardless of sync/async completion). (2) Clean up resources after the current operation. (3) Handle errors in event emitters. Avoid recursive nextTick - use setImmediate for recurring deferred work."
    },
    {
      "question": "How do you get the process uptime?",
      "answer": "process.uptime() returns the number of seconds the process has been running (as a float with microsecond precision). process.hrtime.bigint() gives nanosecond-precision time. os.uptime() gives system uptime (different from process uptime)."
    },
    {
      "question": "What is the process.env object?",
      "answer": "An object containing the user environment variables. process.env.PATH, process.env.HOME, etc. Setting process.env.FOO = \"bar\" affects the current process and child processes. It does NOT affect the system or parent process. process.env.NODE_ENV is conventionally set to \"production\" or \"development\"."
    },
    {
      "question": "What does process.cwd() vs __dirname return?",
      "answer": "process.cwd() returns the current working directory (the directory where the node command was executed). __dirname returns the directory of the currently executing script. They can be different if the script was run from a different directory: node /path/to/script.js from /different/dir."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Process Object Overview</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">process.argv</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CLI arguments array</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">process.env</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Environment variables</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">process.memoryUsage()</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Heap, RSS, external memory</text></svg>",
  "codeExamples": [
    {
      "title": "Command-Line Argument Parsing",
      "useCase": "Parse CLI arguments without external libraries",
      "code": "// node app.js --port 3000 --env production --verbose\n\nvar args = process.argv.slice(2);\nvar options = {};\n\nfor (var i = 0; i < args.length; i++) {\n  if (args[i].startsWith(\"--\")) {\n    var key = args[i].slice(2);\n    if (i + 1 < args.length && !args[i + 1].startsWith(\"--\")) {\n      options[key] = args[i + 1];\n      i++;\n    } else {\n      options[key] = true;\n    }\n  }\n}\n\nconsole.log(\"Parsed options:\", options);\n// { port: \"3000\", env: \"production\", verbose: true }\n\n// Set environment variable from CLI arg\nif (options.env) {\n  process.env.NODE_ENV = options.env;\n}\n\n// Use parsed options\nvar port = parseInt(options.port) || 8080;\nconsole.log(\"Starting on port\", port, \"in\", process.env.NODE_ENV, \"mode\");",
      "description": "process.argv gives CLI arguments. Simple key-value parsing handles --flag and --key value patterns. Set process.env.NODE_ENV early for other modules to read."
    },
    {
      "title": "Graceful Shutdown with Signal Handling",
      "useCase": "Handle termination signals for clean shutdown",
      "code": "var http = require(\"http\");\n\nvar server = http.createServer(function(req, res) {\n  res.end(\"OK\");\n});\n\nserver.listen(3000, function() {\n  console.log(\"Server running, PID:\", process.pid);\n});\n\n// Graceful shutdown handler\nfunction gracefulShutdown(signal) {\n  console.log(\"Received\", signal, \"- starting graceful shutdown\");\n\n  // Stop accepting new connections\n  server.close(function() {\n    console.log(\"All connections closed\");\n\n    // Close database connections\n    // db.close();\n\n    // Exit with success code\n    process.exit(0);\n  });\n\n  // Force shutdown after timeout (30s)\n  setTimeout(function() {\n    console.error(\"Forced shutdown after timeout\");\n    process.exit(1);\n  }, 30000).unref();\n}\n\nprocess.on(\"SIGTERM\", gracefulShutdown);\nprocess.on(\"SIGINT\", gracefulShutdown);\n\n// Log uncaught errors before crash\nprocess.on(\"uncaughtException\", function(err) {\n  console.error(\"Uncaught exception:\", err);\n  gracefulShutdown(\"uncaughtException\");\n});",
      "description": "Graceful shutdown: handle SIGTERM/SIGINT, stop accepting connections, finish in-flight requests, close resources, then exit. A timeout forces shutdown if cleanup takes too long."
    },
    {
      "title": "Memory and CPU Usage Monitoring",
      "useCase": "Track process resource consumption over time",
      "code": "function printMemoryUsage() {\n  var mem = process.memoryUsage();\n  console.log(\"=== Memory Usage ===\");\n  console.log(\"RSS:\", (mem.rss / 1024 / 1024).toFixed(2) + \" MB\");\n  console.log(\"Heap Total:\", (mem.heapTotal / 1024 / 1024).toFixed(2) + \" MB\");\n  console.log(\"Heap Used:\", (mem.heapUsed / 1024 / 1024).toFixed(2) + \" MB\");\n  console.log(\"External:\", (mem.external / 1024 / 1024).toFixed(2) + \" MB\");\n}\n\n// Monitor memory every 5 seconds\nvar interval = setInterval(printMemoryUsage, 5000);\n\n// Simulate memory allocation\nvar leaks = [];\nsetInterval(function() {\n  leaks.push(Buffer.alloc(1024 * 1024)); // 1MB per second\n  console.log(\"Allocated 1MB, total:\", leaks.length, \"MB\");\n\n  if (leaks.length > 20) {\n    console.log(\"Clearing leak\");\n    leaks = [];\n  }\n}, 1000);\n\n// CPU usage since process start\nvar startCpu = process.cpuUsage();\nsetTimeout(function() {\n  var elapsed = process.cpuUsage(startCpu);\n  console.log(\"CPU used:\", (elapsed.user / 1000).toFixed(2), \"ms user,\",\n    (elapsed.system / 1000).toFixed(2), \"ms system\");\n}, 10000);\n\n// Process uptime\nconsole.log(\"Process uptime:\", process.uptime().toFixed(2), \"s\");\n\n// Exit safely after demo\nsetTimeout(function() {\n  clearInterval(interval);\n  process.exit(0);\n}, 25000);",
      "description": "process.memoryUsage() monitors heap, RSS, and external memory. process.cpuUsage(start) calculates CPU time since a starting point. Monitor these in production to detect memory leaks and CPU spikes."
    },
    {
      "title": "process.nextTick() for Async Consistency",
      "useCase": "Ensure callbacks are always async",
      "code": "function readConfig(callback) {\n  var config = global.__cachedConfig;\n  if (config) {\n    // BAD: sometimes sync, sometimes async (Zalgo)\n    // callback(null, config);\n\n    // GOOD: always async using nextTick\n    process.nextTick(function() {\n      callback(null, config);\n    });\n    return;\n  }\n\n  // Simulate async config load\n  setTimeout(function() {\n    global.__cachedConfig = { theme: \"dark\" };\n    callback(null, global.__cachedConfig);\n  }, 100);\n}\n\n// Example: without nextTick, first call is sync, second is async\nconsole.log(\"Start\");\n\nreadConfig(function(err, config) {\n  console.log(\"First callback:\", config);\n});\n\nreadConfig(function(err, config) {\n  console.log(\"Second callback:\", config);\n});\n\nconsole.log(\"End\");\n\n// Output is ALWAYS:\n// Start\n// End\n// First callback: { theme: \"dark\" }\n// Second callback: { theme: \"dark\" }\n\n// Without nextTick, output would be:\n// Start\n// First callback: { theme: \"dark\" }  (sync!)\n// End\n// Second callback: { theme: \"dark\" } (async)",
      "description": "process.nextTick() ensures callbacks are always async, preventing \"Zalgo\" issues where synchronous paths in async functions cause inconsistent timing. This is critical for API design to avoid subtle bugs."
    },
    {
      "title": "Exit Codes and Process Exit Strategies",
      "useCase": "Use appropriate exit codes for different failure modes",
      "code": "// Standard exit codes:\n// 0 - Success\n// 1 - Uncaught fatal exception\n// 2 - Reserved (bash built-in misuse)\n// 3-5 - Reserved\n// 6-64 - Application-specific errors\n// 65-74 - EX data format errors\n// 75-78 - EX can't create user process\n// 126 - Command invoked cannot execute\n// 127 - Command not found\n// 128 - Invalid argument to exit\n// 130 - Terminated by Ctrl+C (128 + SIGINT)\n\nfunction validateConfig(config) {\n  if (!config) {\n    console.error(\"Fatal: Config file missing\");\n    process.exit(66); // EX_NOINPUT\n  }\n  try {\n    var parsed = JSON.parse(config);\n    if (!parsed.port) {\n      process.exitCode = 65; // EX_DATAERR\n      console.error(\"Config error: port required\");\n      return;\n    }\n    return parsed;\n  } catch (err) {\n    process.exitCode = 65;\n    console.error(\"Config parse error:\", err.message);\n  }\n}\n\n// Prefer exitCode over exit() for async cleanup\nfunction shutdown() {\n  process.exitCode = 0;\n  // Close resources, they may be async\n  // Process exits naturally when event loop empties\n}\n\n// Safe exit with cleanup\nfunction safeExit(code) {\n  process.exitCode = code;\n  // Perform synchronous cleanup\n  console.log(\"Cleanup complete, exiting with code\", code);\n  process.exit(code);\n}\n\n// Test different scenarios\nconsole.log(\"Current exit code:\", process.exitCode); // undefined\nprocess.exitCode = 0;\nconsole.log(\"Set to 0:\", process.exitCode);",
      "description": "Use appropriate exit codes (0 success, 1+ errors). Prefer process.exitCode for async cleanup. Use process.exit() with code for immediate exit. Standard exit codes follow /usr/include/sysexits.h convention."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does process.memoryUsage().rss represent?",
      "options": [
        "V8 heap used",
        "Total memory allocated for the process",
        "C++ object memory",
        "ArrayBuffer memory"
      ],
      "answer": 1,
      "explanation": "rss (Resident Set Size) is the total memory allocated for the process, including heap, stack, and code segments."
    },
    {
      "question": "Which event fires when the event loop is empty but process has not been asked to exit?",
      "options": [
        "\"exit\"",
        "\"beforeExit\"",
        "\"uncaughtException\"",
        "\"empty\""
      ],
      "answer": 1,
      "explanation": "\"beforeExit\" fires when the event loop is empty. Async work scheduled here keeps the process alive. It does NOT fire on explicit process.exit()."
    },
    {
      "question": "What is process.argv[0]?",
      "options": [
        "First user argument",
        "Script path",
        "Node.js executable path",
        "Current working directory"
      ],
      "answer": 2,
      "explanation": "process.argv[0] is the path to the Node.js executable. argv[1] is the script path. argv[2+] are user arguments."
    },
    {
      "question": "What happens without a SIGTERM handler?",
      "options": [
        "The signal is ignored",
        "The process terminates immediately",
        "An error is thrown",
        "The process pauses"
      ],
      "answer": 1,
      "explanation": "Without a handler, SIGTERM terminates the process immediately. Handle it for graceful shutdown: process.on(\"SIGTERM\", handler)."
    },
    {
      "question": "What is the recommended alternative to process.exit() for async cleanup?",
      "options": [
        "process.abort()",
        "process.exitCode",
        "process.kill()",
        "process.chdir()"
      ],
      "answer": 1,
      "explanation": "Set process.exitCode and let the process exit naturally when the event loop empties. This allows queued async cleanup to complete."
    },
    {
      "question": "Why use process.nextTick() for callback consistency?",
      "options": [
        "It makes callbacks faster",
        "It ensures callbacks are always async",
        "It prevents errors",
        "It improves readability"
      ],
      "answer": 1,
      "explanation": "nextTick() ensures callbacks are always asynchronous, preventing \"Zalgo\" - where a function behaves synchronously sometimes and asynchronously other times depending on conditions."
    }
  ]
};
