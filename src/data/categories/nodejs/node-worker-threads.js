export const node_worker_threads = {
  "id": "node-worker-threads",
  "title": "Node.js Worker Threads",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Worker threads allow running JavaScript in parallel on separate threads within the same process, sharing memory via SharedArrayBuffer while avoiding the overhead of separate processes.",
    "Unlike child_process (separate processes) or cluster (separate processes sharing a port), worker threads exist in the same process and can share memory efficiently.",
    "Each Worker has its own V8 context and event loop but shares the same process ID, file descriptors, and module cache (except with specific configuration).",
    "Use worker threads for CPU-intensive JavaScript operations, while child processes are better for running non-JS executables or requiring strong isolation."
  ],
  "laymanDefinition": "Worker threads are like having extra hands in the same workshop. Instead of hiring entirely separate companies (child processes) with their own buildings, you get additional workers in your existing workshop. They share the same tools (process resources), can pass notes directly (shared memory via SharedArrayBuffer), and talk through walkie-talkies (message passing). But unlike cluster workers that are completely separate processes, worker threads can access the same memory space - like two workers writing on the same whiteboard. This makes them perfect for CPU-heavy tasks like data processing or image manipulation, where sharing memory avoids the cost of serializing/deserializing data between processes.",
  "deepDive": [
    {
      "heading": "Worker Threads vs Child Processes vs Cluster",
      "text": "Worker threads: same process, shared memory (SharedArrayBuffer), lower overhead (~2MB per worker), limited to JavaScript operations. Ideal for CPU-intensive JS tasks (data processing, image manipulation, ML inference). Child processes: separate processes, no shared memory, IPC via serialization, higher overhead (~30MB+ per process). Ideal for running non-JS executables, strong isolation. Cluster: separate processes sharing a port via IPC, no shared memory. Ideal for scaling I/O across CPU cores. Worker threads are NOT for I/O scaling (the event loop already handles I/O efficiently). Worker threads are for parallel JavaScript computation that would block the event loop. Each worker thread has its own V8 isolate - this means its own heap, GC, and event loop, but they share the same libuv thread pool."
    },
    {
      "heading": "Worker Creation and Communication",
      "text": "const { Worker } = require(\"worker_threads\"); new Worker(filename, options). Options: workerData (passed as-is via structured clone), eval (evaluate string instead of file), execArgv (Node flags), env (environment object or SHARE_ENV to share), resourceLimits (max memory/CPU). Communication: (1) parentPort.postMessage(data) - send messages to parent. (2) worker.postMessage(data) - parent sends to worker. (3) MessagePort - create additional communication channels via MessageChannel. (4) SharedArrayBuffer - shared memory, no serialization. (5) worker.on(\"message\"), parentPort.on(\"message\") - receive messages. (6) worker.on(\"error\") - uncaught exceptions. (7) worker.on(\"exit\") - thread exited. Messages use structured clone algorithm (supports objects, arrays, Map, Set, RegExp, Blob, ArrayBuffer). Functions and symbols cannot be transferred."
    },
    {
      "heading": "SharedArrayBuffer and Memory Sharing",
      "text": "SharedArrayBuffer allows multiple threads to read/write the same memory without serialization. (1) Create: const sab = new SharedArrayBuffer(1024); (2) Worker receives via transferList: worker.postMessage(sab, [sab]); (3) Access via TypedArray: const view = new Int32Array(sab); (4) Atomics: use Atomics.add(), Atomics.store(), Atomics.load(), Atomics.wait(), Atomics.notify() for synchronization. Without Atomics, concurrent access causes race conditions. Atomics methods are atomic - they complete without interruption. Atomics.wait() allows blocking the worker until a value changes (for producer-consumer patterns). SharedArrayBuffer requires specific conditions: (1) Cross-Origin Isolation headers for browsers. (2) Node.js enables it by default. (3) Threads must use Atomics for synchronization. (4) No race conditions on non-atomic operations. Performance: SharedArrayBuffer eliminates serialization overhead entirely (zero-copy)."
    },
    {
      "heading": "Worker Pool Pattern and Resource Management",
      "text": "Creating a worker per task is expensive. Worker pools reuse workers: (1) Create N workers at startup. (2) Queue tasks when all workers are busy. (3) Workers process tasks and send results back. (4) Workers stay alive for the next task. Pool size: optimal size depends on CPU cores and task characteristics. For CPU-bound tasks: pool size = os.cpus().length - 1 (leave one for main thread). For mixed tasks: tune based on profiling. Resource limits: options.resourceLimits can set maxOldGenerationSizeMb, maxYoungGenerationSizeMb, codeRangeSizeMb. Worker termination: worker.terminate() forcefully stops the worker. Handle cleanup: worker.on(\"exit\") for resource cleanup. For long-running workers, implement periodic health checks (ping/pong via messages). Worker thread overhead: ~2MB memory per worker, ~20-50ms startup time."
    },
    {
      "heading": "Practical Use Cases and Limitations",
      "text": "Good uses: (1) Image/video processing (Sharp library uses worker threads). (2) Data transformation (JSON parsing, CSV processing, XML conversion). (3) Cryptography (hashing, encryption of large data). (4) Machine learning inference (TensorFlow.js, ONNX runtime). (5) Compression/decompression (zlib for large files). (6) Code compilation (Babel, TypeScript, SASS). Limitations: (1) Cannot access DOM (not applicable for Node.js). (2) Cannot access all Node.js APIs - require('worker_threads') is not available inside workers for re-creating threads. (3) Shared state requires careful synchronization (Atomics). (4) Debugging is harder than single-threaded. (5) Module resolution differs - workers resolve modules relative to their file, not the parent. (6) Workers have their own require cache - modules loaded in parent are not automatically available in workers. (7) Circular message references cause errors."
    }
  ],
  "interviewAnswer": "Worker threads enable parallel JavaScript execution within the same process, sharing memory via SharedArrayBuffer. Each worker has its own V8 isolate and event loop. Communication via parentPort.postMessage() (structured clone) or SharedArrayBuffer + Atomics for zero-copy sharing. Worker pools reuse workers to avoid creation overhead. Use workers for CPU-intensive tasks (data processing, crypto, image manipulation) that would block the event loop. Not for I/O (event loop handles that). Overhead: ~2MB memory per worker. Key differences from child_process: same process (shared memory), lower overhead, JavaScript only. Use Atomics for SharedArrayBuffer synchronization (atomic operations prevent race conditions).",
  "interviewQuestions": [
    {
      "question": "What is the difference between worker threads and child processes?",
      "answer": "Worker threads: same process, shared memory via SharedArrayBuffer, lower overhead (~2MB/worker), JavaScript only. Child processes: separate processes, no shared memory, higher overhead (~30MB+), can run any executable. Use workers for CPU-intensive JS; child processes for non-JS or strong isolation."
    },
    {
      "question": "How do workers communicate with the parent?",
      "answer": "(1) Message passing: parentPort.postMessage() / worker.postMessage() using structured clone. (2) SharedArrayBuffer: zero-copy shared memory with Atomics synchronization. (3) MessageChannel: additional communication ports. (4) TransferList: transfer ArrayBuffer ownership (zero-copy)."
    },
    {
      "question": "What is SharedArrayBuffer and how is it synchronized?",
      "answer": "SharedArrayBuffer is a fixed-length memory buffer shared between threads. Use Atomics for synchronization: Atomics.add(), Atomics.store(), Atomics.load(), Atomics.wait(). Without Atomics, concurrent reads/writes cause race conditions. Atomics operations are guaranteed to be atomic."
    },
    {
      "question": "When should you use worker threads instead of the event loop?",
      "answer": "The event loop handles I/O efficiently. Workers are for CPU-intensive tasks that would block the event loop: data transformation, image processing, complex math, ML inference, compression. If it takes >10ms of CPU time off the event loop."
    },
    {
      "question": "What is the overhead of creating a worker thread?",
      "answer": "~2MB memory per worker, ~20-50ms startup time. This is significantly less than child processes (~30MB+ for a Node.js process). Worker pools reuse workers to avoid per-task overhead."
    },
    {
      "question": "How do you pass functions or complex objects to workers?",
      "answer": "Via postMessage() using structured clone algorithm. Supports: objects, arrays, Map, Set, RegExp, Blob, ArrayBuffer. Does NOT support: functions, Symbols, DOM elements, circular references. Use SharedArrayBuffer for large data to avoid serialization cost."
    },
    {
      "question": "What is the workerData option?",
      "answer": "workerData is passed to the worker at creation time and is available via require(\"worker_threads\").workerData. It is copied using structured clone algorithm - no transfer overhead for small data. Useful for initial configuration."
    },
    {
      "question": "How do you terminate a worker thread?",
      "answer": "worker.terminate() forcefully stops the worker. It returns a Promise that resolves once the worker is stopped. The worker.on(\"exit\") event fires. For graceful shutdown, send a shutdown message and let the worker clean up."
    },
    {
      "question": "Can a worker create its own workers?",
      "answer": "No. The worker_threads module is not available inside workers for creating new workers. This prevents nested worker creation. Workers can only be created from the main thread. Use child_process.fork() inside workers for sub-processes."
    },
    {
      "question": "How does error handling work in worker threads?",
      "answer": "Uncaught errors in workers emit \"error\" on the worker object. Unhandled Promise rejections emit \"error\". Workers do NOT crash the main process on uncaught exceptions - they terminate the worker only. Always handle \"error\" events on workers."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Worker Threads Architecture</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Main Thread</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Event loop, I/O, coordination</text><line x1=\"50\" y1=\"100\" x2=\"50\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"210\" y1=\"100\" x2=\"210\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"20\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"50\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker 1</text><text x=\"50\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CPU task</text><rect x=\"80\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"110\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker 2</text><text x=\"110\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CPU task</text><rect x=\"140\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"170\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker N</text><text x=\"170\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CPU task</text><rect x=\"310\" y=\"55\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#9aa0b0\" stroke-width=\"1.5\"/><text x=\"350\" y=\"75\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shared Memory</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Worker Thread with postMessage",
      "useCase": "Offload a CPU-intensive computation to a worker",
      "code": "// main.js\nvar Worker = require(\"worker_threads\").Worker;\n\nvar worker = new Worker(\"./cpu-worker.js\");\n\nworker.on(\"message\", function(result) {\n  console.log(\"Worker result:\", result);\n});\n\nworker.on(\"error\", function(err) {\n  console.error(\"Worker error:\", err.message);\n});\n\nworker.on(\"exit\", function(code) {\n  if (code !== 0) {\n    console.error(\"Worker stopped with exit code\", code);\n  }\n});\n\n// Send data to worker\nworker.postMessage({ numbers: [1,2,3,4,5,6,7,8,9,10] });\n\n// ---------- cpu-worker.js ----------\nvar parentPort = require(\"worker_threads\").parentPort;\n\nparentPort.on(\"message\", function(data) {\n  // CPU-intensive: Fibonacci calculation\n  function fib(n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n  }\n\n  var results = data.numbers.map(function(n) {\n    return { input: n, result: fib(40 + n) };\n  });\n\n  parentPort.postMessage({ type: \"result\", data: results });\n});",
      "description": "Create a Worker with a file path. Communicate via postMessage and on(\"message\"). Workers handle CPU work without blocking the main event loop. Errors in workers do not crash the main process."
    },
    {
      "title": "SharedArrayBuffer with Atomics Synchronization",
      "useCase": "Zero-copy shared memory between threads",
      "code": "// main.js\nvar Worker = require(\"worker_threads\").Worker;\n\n// Shared counter in shared memory\nvar sab = new SharedArrayBuffer(4 * 4); // 4 int32 slots\nvar counter = new Int32Array(sab);\ncounter[0] = 0; // task counter\ncounter[1] = 0; // completed counter\n\nvar worker = new Worker(\"./shared-worker.js\");\n\n// Transfer SharedArrayBuffer (zero-copy)\nworker.postMessage({ sab: sab }, [sab]);\n\n// Main thread updates counter\nAtomics.add(counter, 0, 10); // Add 10 tasks\n\n// Wait for worker to complete all tasks\nAtomics.wait(counter, 1, 0); // Wait until completed !== 0\nconsole.log(\"All tasks completed:\", Atomics.load(counter, 1));\n\nworker.terminate();\n\n// ---------- shared-worker.js ----------\nvar parentPort = require(\"worker_threads\").parentPort;\n\nparentPort.on(\"message\", function(msg) {\n  var sab = msg.sab;\n  var counter = new Int32Array(sab);\n\n  // Read total tasks\n  var total = Atomics.load(counter, 0);\n\n  // Process tasks\n  for (var i = 0; i < total; i++) {\n    // Simulate work\n    Atomics.add(counter, 1, 1); // Increment completed\n  }\n\n  // Notify main thread\n  Atomics.notify(counter, 1, 1);\n});",
      "description": "SharedArrayBuffer provides shared memory. Atomics.store/load/add synchronize access without serialization overhead. Atomics.wait/notify enable producer-consumer coordination. The buffer is transferred (zero-copy) via the transfer list."
    },
    {
      "title": "Worker Pool Implementation",
      "useCase": "Reuse workers for multiple tasks to reduce overhead",
      "code": "var Worker = require(\"worker_threads\").Worker;\nvar os = require(\"os\");\n\nfunction WorkerPool(workerFile, poolSize) {\n  this.workers = [];\n  this.queue = [];\n  this.activeCount = 0;\n\n  for (var i = 0; i < (poolSize || os.cpus().length - 1); i++) {\n    this._addWorker(workerFile);\n  }\n}\n\nWorkerPool.prototype._addWorker = function(workerFile) {\n  var worker = new Worker(workerFile);\n  var self = this;\n\n  worker.on(\"message\", function(result) {\n    self.activeCount--;\n    if (worker._currentResolve) {\n      worker._currentResolve(result);\n      worker._currentResolve = null;\n    }\n    self._processQueue(worker);\n  });\n\n  worker.on(\"error\", function(err) {\n    self.activeCount--;\n    if (worker._currentReject) {\n      worker._currentReject(err);\n      worker._currentReject = null;\n    }\n    self._addWorker(workerFile); // Replace failed worker\n  });\n\n  this.workers.push(worker);\n};\n\nWorkerPool.prototype.exec = function(data) {\n  var self = this;\n  return new Promise(function(resolve, reject) {\n    self.queue.push({ data: data, resolve: resolve, reject: reject });\n    self._processNext();\n  });\n};\n\nWorkerPool.prototype._processNext = function() {\n  if (this.queue.length === 0) return;\n  for (var i = 0; i < this.workers.length; i++) {\n    var w = this.workers[i];\n    if (!w._currentResolve) {\n      var task = this.queue.shift();\n      w._currentResolve = task.resolve;\n      w._currentReject = task.reject;\n      w.postMessage(task.data);\n      this.activeCount++;\n      return;\n    }\n  }\n};\n\n// Usage\nvar pool = new WorkerPool(\"./task-worker.js\", 4);\npool.exec({ numbers: [1,2,3] }).then(function(result) {\n  console.log(\"Task result:\", result);\n});",
      "description": "Worker pools reduce per-task overhead by reusing workers. Workers are created once and process tasks sequentially. The pool maintains a queue and dispatches to idle workers. Failed workers are replaced automatically."
    },
    {
      "title": "TransferList for Zero-Copy ArrayBuffer",
      "useCase": "Transfer large data without copying",
      "code": "// main.js\nvar Worker = require(\"worker_threads\").Worker;\n\n// Create a large buffer\nvar size = 100 * 1024 * 1024; // 100MB\nvar buffer = new ArrayBuffer(size);\nvar view = new Uint8Array(buffer);\nfor (var i = 0; i < size; i++) {\n  view[i] = i % 256;\n}\n\nconsole.log(\"Buffer size:\", buffer.byteLength, \"bytes\");\n\nvar worker = new Worker(\"./transfer-worker.js\");\n\n// WITHOUT transfer: copies the data (slow, 100MB copy)\n// WITH transfer: moves ownership (fast, 0-copy)\nworker.postMessage({ data: buffer }, [buffer]);\n\n// After transfer, buffer is neutered (cannot be used)\nconsole.log(\"Buffer after transfer:\", buffer.byteLength); // 0\n\nworker.on(\"message\", function(msg) {\n  console.log(\"Worker processed:\", msg.result);\n});\n\n// ---------- transfer-worker.js ----------\nvar parentPort = require(\"worker_threads\").parentPort;\n\nparentPort.on(\"message\", function(msg) {\n  var buffer = msg.data;\n  var view = new Uint8Array(buffer);\n\n  // Modify data in place\n  var sum = 0;\n  for (var i = 0; i < view.length; i++) {\n    sum += view[i];\n    view[i] = 255 - view[i];\n  }\n\n  // Send back the modified buffer\n  parentPort.postMessage({ result: sum, data: buffer }, [buffer]);\n});",
      "description": "TransferList enables zero-copy ownership transfer. After transfer, the sender loses access to the buffer (neutered). This is essential for large data to avoid serialization overhead and double memory usage."
    },
    {
      "title": "Resource Limits on Workers",
      "useCase": "Prevent workers from using too much memory or CPU",
      "code": "// main.js\nvar Worker = require(\"worker_threads\").Worker;\n\nvar worker = new Worker(\"./resource-worker.js\", {\n  resourceLimits: {\n    maxOldGenerationSizeMb: 50,  // Max heap size: 50MB\n    maxYoungGenerationSizeMb: 10,\n    codeRangeSizeMb: 5,\n    stackSizeMb: 1\n  }\n});\n\nworker.on(\"error\", function(err) {\n  console.error(\"Worker error (may exceed limits):\", err.message);\n});\n\nworker.on(\"exit\", function(code) {\n  console.log(\"Worker exited with code:\", code);\n});\n\nworker.postMessage({ action: \"allocate\", size: 30 * 1024 * 1024 });\n\n// ---------- resource-worker.js ----------\nvar parentPort = require(\"worker_threads\").parentPort;\n\nparentPort.on(\"message\", function(msg) {\n  if (msg.action === \"allocate\") {\n    // This may fail if it exceeds maxOldGenerationSizeMb\n    try {\n      var buffer = Buffer.alloc(msg.size);\n      buffer.fill(1);\n      parentPort.postMessage({ status: \"ok\", size: buffer.length });\n    } catch (err) {\n      parentPort.postMessage({ status: \"error\", error: err.message });\n    }\n  }\n});",
      "description": "resourceLimits restricts worker memory and CPU usage. If exceeded, the worker is terminated. This prevents a misbehaving worker from consuming all available memory and affecting other workers or the main process."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the main purpose of worker threads?",
      "options": [
        "I/O operations",
        "CPU-intensive JavaScript operations",
        "Network requests",
        "File system operations"
      ],
      "answer": 1,
      "explanation": "Worker threads are for CPU-intensive JavaScript tasks that would block the event loop. I/O is already handled efficiently by the event loop."
    },
    {
      "question": "How do workers communicate without serialization overhead?",
      "options": [
        "JSON.stringify",
        "SharedArrayBuffer with Atomics",
        "Base64 encoding",
        "Compression"
      ],
      "answer": 1,
      "explanation": "SharedArrayBuffer provides zero-copy shared memory. Atomics methods synchronize access. No serialization is needed."
    },
    {
      "question": "What does postMessage with a transfer list do?",
      "options": [
        "Copies the data",
        "Transfers ownership (zero-copy)",
        "Compresses the data",
        "Encrypts the data"
      ],
      "answer": 1,
      "explanation": "TransferList transfers ownership of ArrayBuffer/MessagePort. The sender loses access (neuter), but no copy is made."
    },
    {
      "question": "What is the approximate memory overhead per worker thread?",
      "options": [
        "~2MB",
        "~30MB",
        "~1GB",
        "~100KB"
      ],
      "answer": 0,
      "explanation": "~2MB per worker thread. Child processes are ~30MB+. Worker threads are lightweight because they share the same process."
    },
    {
      "question": "Can a worker thread create its own workers?",
      "options": [
        "Yes, like the main thread",
        "No, workers cannot create workers",
        "Only with special flags",
        "Only in Node 20+"
      ],
      "answer": 1,
      "explanation": "Worker threads cannot create their own workers. This prevents nested thread creation. Use child_process.fork() inside workers for sub-processes."
    },
    {
      "question": "What happens when a worker exceeds resourceLimits?",
      "options": [
        "It continues with degraded performance",
        "The worker is terminated",
        "An event is emitted but continues",
        "Memory is swapped to disk"
      ],
      "answer": 1,
      "explanation": "When resourceLimits are exceeded, the worker is terminated and emits an \"error\" event. This prevents a runaway worker from consuming system resources."
    }
  ]
};
