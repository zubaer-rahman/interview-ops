export const node_cluster_module = {
  "id": "node-cluster-module",
  "title": "Node.js Cluster Module",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "The cluster module allows you to create child processes (workers) that share the same server port, enabling Node.js to utilize multiple CPU cores for handling load.",
    "A master process manages worker processes, distributes incoming connections among them, and can restart workers that crash.",
    "Workers are spawned using child_process.fork(), meaning they are separate Node.js processes with their own V8 instance, event loop, and memory - they do not share memory.",
    "IPC messages via send() enable communication between master and workers for state coordination, health checks, and graceful shutdown."
  ],
  "laymanDefinition": "The Cluster module is like having a team of workers instead of a single employee. A single Node.js process can only use one CPU core at a time - like one person serving customers at a counter. With clustering, the master process acts like a manager who assigns each new customer to one of several workers (separate processes), each running on a different CPU core. If a worker crashes (gets sick), the manager immediately hires a replacement. This is how production Node.js servers handle many more requests than a single process can manage, by using all available CPU cores.",
  "deepDive": [
    {
      "heading": "Cluster Architecture and Process Model",
      "text": "The cluster module has two roles: (1) Master - the primary process that monitors workers, handles signals, and distributes connections. (2) Workers - child processes created via fork() that run the application code. Workers are independent Node.js processes with their own V8 heap, event loop, and memory space. They do NOT share memory with each other or the master. IPC channel: established automatically between master and each worker via process.send() and process.on(\"message\"). Worker identification: cluster.worker.id (1-indexed), cluster.worker.process.pid. The master does not serve requests - it only manages workers. Workers do the actual request handling. The event loop model: each worker has its own event loop, allowing true parallel request processing across CPU cores."
    },
    {
      "heading": "Connection Distribution (Load Balancing)",
      "text": "The cluster module distributes incoming connections to workers. Node.js uses round-robin load balancing by default on all platforms except Windows (where it uses shared socket handle). Round-robin: the master listens on the port, accepts connections, and distributes them to workers one at a time in order. This prevents one worker from being overloaded. With shared socket (Windows default), all workers share the same file descriptor, and the OS distributes connections. The scheduling policy is controlled by cluster.schedulingPolicy: cluster.SCHED_RR (round-robin) or cluster.SCHED_NONE (OS-assigned). Set via cluster.setupPrimary({ schedulingPolicy: cluster.SCHED_RR }). Server.listen() in the worker: when a worker calls server.listen(port), it actually shares the master's port - multiple workers can listen on the same port."
    },
    {
      "heading": "Worker Lifecycle and Health Management",
      "text": "Workers go through states: starting → online → listening → disconnected → exited. Events: (1) \"online\" - worker is forked and ready. (2) \"listening\" - worker's server is listening on the port. (3) \"disconnect\" - IPC channel closed. (4) \"exit\" - worker process exited (code, signal). Master handles crashes: (1) On \"exit\", check if it was an intentional disconnect or crash. (2) Fork a new worker to replace the crashed one. (3) Implement exponential backoff for respawning to prevent crash loops. (4) Log the crash reason and count restarts. Graceful shutdown: (1) worker.disconnect() closes IPC. (2) worker.kill(signal) sends signal (SIGTERM for graceful). (3) Workers should handle SIGTERM: stop accepting new connections, finish existing requests, then process.exit()."
    },
    {
      "heading": "State Management and Shared Resources",
      "text": "Workers are independent processes and do not share memory. Strategies for shared state: (1) External store - Redis, Memcached, database for session data, counters. (2) IPC messages - master can relay messages between workers. (3) Sticky sessions - for load balancers that require requests from the same client to go to the same worker. (4) Database - the source of truth for persistent state. (5) Shared memory - use shared buffers via SharedArrayBuffer or mmap (advanced). Stateless design: the best practice is to make workers stateless, storing session state in Redis or a database. This allows workers to be killed and replaced without losing state. For caching, each worker can maintain its own in-memory cache - this duplicates memory but avoids synchronization overhead. For coordinated caching, use Redis or similar."
    },
    {
      "heading": "Cluster Module vs Other Scaling Approaches",
      "text": "(1) Cluster - multi-process on a single machine, shares port. Best for utilizing all CPU cores on one server. (2) Child process - spawn arbitrary processes, not necessarily Node.js, no port sharing. (3) Worker threads - same process, shared memory, threads for CPU-intensive tasks. (4) PM2 - production process manager with clustering, auto-restart, monitoring. (5) Docker/Kubernetes - container orchestration, each container runs a single process, scaled horizontally. Trade-offs: clustering adds complexity (IPC, state management, crash handling). PM2 simplifies this with built-in clustering (pm2 start app.js -i max). For many production deployments, PM2 or container orchestration is preferred over raw cluster module usage. The cluster module is most useful when you need programmatic control over worker lifecycle."
    }
  ],
  "interviewAnswer": "The cluster module enables multi-core Node.js applications by forking worker processes that share the same port. The master manages workers; workers handle requests. Each worker has its own V8 instance and event loop - true parallelism for I/O-bound workloads. Connection distribution uses round-robin (SCHED_RR) or OS-assigned (SCHED_NONE). Workers communicate with the master via IPC (process.send()). State is not shared between workers - use Redis or a database for shared state. Handle worker crashes with respawning and exponential backoff. Graceful shutdown: handle SIGTERM, stop accepting connections, finish requests, exit. PM2 provides production-friendly clustering with less code. Clustering works best for I/O-bound apps on multi-core servers.",
  "interviewQuestions": [
    {
      "question": "How does the cluster module enable multi-core usage?",
      "answer": "It forks multiple worker processes (one per CPU core ideally), each with its own V8 instance and event loop. The master listens on the port and distributes connections to workers using round-robin or OS scheduling. This allows parallel processing of requests across CPU cores."
    },
    {
      "question": "What is the difference between cluster.SCHED_RR and cluster.SCHED_NONE?",
      "answer": "SCHED_RR (round-robin) - master accepts connections and distributes to workers in order. Ensures even load distribution. SCHED_NONE (OS-assigned) - workers share the port handle, OS distributes connections. Default: SCHED_RR on non-Windows, SCHED_NONE on Windows."
    },
    {
      "question": "How do workers communicate with each other?",
      "answer": "Workers do not have direct IPC to each other. They communicate via the master: worker.send() → master.on(\"message\") → otherWorker.send(). Or use an external message broker (Redis pub/sub, RabbitMQ). For most cases, workers use a shared database instead of direct communication."
    },
    {
      "question": "How do you handle a worker crash?",
      "answer": "Listen for \"exit\" event on workers. If worker.exitedAfterDisconnect is false, it was an unexpected crash - fork a new worker. Use exponential backoff (delay = Math.min(1000 * 2^attempts, 30000)) to prevent crash loops. Log the error and restart count."
    },
    {
      "question": "What is the difference between cluster and worker_threads?",
      "answer": "Cluster: separate processes, no memory sharing, IPC via messages, best for scaling I/O across CPU cores. Worker threads: same process, shared memory (SharedArrayBuffer), best for CPU-intensive tasks within the same application. Cluster workers are more isolated (separate crash)."
    },
    {
      "question": "How do you implement graceful shutdown in a cluster?",
      "answer": "(1) Master sends SIGTERM to worker. (2) Worker stops accepting new connections (server.close()). (3) Worker finishes existing requests. (4) Worker closes database connections and releases resources. (5) Worker calls process.exit(). (6) Master forks a new worker to replace the shutdown one."
    },
    {
      "question": "Why should workers be stateless?",
      "answer": "Workers are separate processes with separate memory. If a worker holds state in memory and crashes, that state is lost. Stateful workers also prevent flexible scaling - you cannot add/remove workers without considering state distribution. Use external stores (Redis, DB) for session state."
    },
    {
      "question": "What does cluster.isPrimary and cluster.isWorker do?",
      "answer": "cluster.isPrimary (formerly cluster.isMaster) - true in the master/primary process. cluster.isWorker - true in worker processes. Use these to run different code paths: the master manages workers, the worker handles requests. Node.js 16+ renamed isMaster/isWorker to isPrimary/isWorker."
    },
    {
      "question": "How do you pass environment variables to workers?",
      "answer": "cluster.fork() inherits the master's environment variables. Pass worker-specific vars: cluster.fork({ WORKER_ID: n }). cluster.settings.env can set default env for all workers. Workers can read via process.env."
    },
    {
      "question": "What happens when a worker calls server.listen(port)?",
      "answer": "The worker does not actually create a new TCP listener. Instead, it shares the master's listening file descriptor. Multiple workers can call listen() on the same port - the cluster module handles the sharing. The master actually accepts the connection and hands it to a worker."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cluster Module Architecture</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Master Process</text><text x=\"130\" y=\"83\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributes connections, manages wor</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">kers</text><line x1=\"50\" y1=\"100\" x2=\"50\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"210\" y1=\"100\" x2=\"210\" y2=\"130\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"20\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"50\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker 1</text><text x=\"50\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Handles re</text><text x=\"50\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">quests</text><rect x=\"80\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"110\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker 2</text><text x=\"110\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Handles re</text><text x=\"110\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">quests</text><rect x=\"140\" y=\"130\" width=\"60\" height=\"55\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"170\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Worker 3</text><text x=\"170\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Handles re</text><text x=\"170\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">quests</text><text x=\"225\" y=\"78\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Round-robin connection distribution</text><text x=\"225\" y=\"158\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Each worker = separate V8 instance + event loop + </text><text x=\"225\" y=\"171\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">memory</text><text x=\"225\" y=\"210\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">IPC: process.send() for master ↔ worker communicat</text><text x=\"225\" y=\"223\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">ion</text><text x=\"225\" y=\"260\" font-size=\"10\" fill=\"#f87171\" text-anchor=\"start\">Worker crash → master forks replacement</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Cluster Setup with Round-Robin",
      "useCase": "Create a clustered HTTP server using all CPU cores",
      "code": "var cluster = require(\"cluster\");\nvar http = require(\"http\");\nvar os = require(\"os\");\n\nif (cluster.isPrimary) {\n  // Master process\n  var cpuCount = os.cpus().length;\n  console.log(\"Master PID:\", process.pid);\n  console.log(\"Forking \" + cpuCount + \" workers\");\n\n  for (var i = 0; i < cpuCount; i++) {\n    cluster.fork();\n  }\n\n  cluster.on(\"exit\", function(worker, code, signal) {\n    console.log(\"Worker \" + worker.process.pid + \" exited\");\n    console.log(\"Forking replacement...\");\n    cluster.fork();\n  });\n} else {\n  // Worker process\n  http.createServer(function(req, res) {\n    res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n    res.end(\"Worker \" + cluster.worker.id + \" handled request\\n\");\n  }).listen(3000);\n\n  console.log(\"Worker \" + cluster.worker.id + \" started, PID:\", process.pid);\n}",
      "description": "Master forks workers equal to CPU count. Workers share port 3000. Each request is handled by a different worker in round-robin order. If a worker crashes, the master forks a replacement."
    },
    {
      "title": "Graceful Shutdown with SIGTERM",
      "useCase": "Handle shutdown signals to prevent in-flight request loss",
      "code": "var cluster = require(\"cluster\");\nvar http = require(\"http\");\nvar os = require(\"os\");\n\nif (cluster.isPrimary) {\n  var workers = [];\n  for (var i = 0; i < os.cpus().length; i++) {\n    workers.push(cluster.fork());\n  }\n\n  // Graceful master shutdown\n  process.on(\"SIGTERM\", function() {\n    console.log(\"Master received SIGTERM, shutting down workers\");\n    workers.forEach(function(worker) {\n      worker.disconnect();\n      worker.kill(\"SIGTERM\");\n    });\n  });\n} else {\n  var server = http.createServer(function(req, res) {\n    // Simulate long request\n    setTimeout(function() {\n      res.end(\"Worker \" + cluster.worker.id + \" done\\n\");\n    }, 1000);\n  });\n\n  server.listen(3000);\n\n  // Graceful worker shutdown\n  process.on(\"SIGTERM\", function() {\n    console.log(\"Worker \" + cluster.worker.id + \" shutting down\");\n    server.close(function() {\n      console.log(\"Worker \" + cluster.worker.id + \" closed\");\n      process.exit(0);\n    });\n  });\n}",
      "description": "Graceful shutdown: SIGTERM causes the worker to stop accepting new connections (server.close()) and exit after existing requests complete. The master disconnects workers before killing them."
    },
    {
      "title": "Worker Health Monitoring and Crash Recovery",
      "useCase": "Implement exponential backoff for worker restarts",
      "code": "var cluster = require(\"cluster\");\nvar http = require(\"http\");\nvar os = require(\"os\");\n\nif (cluster.isPrimary) {\n  var restartCounts = {};\n\n  function createWorker() {\n    var worker = cluster.fork();\n    var id = worker.id;\n    if (!restartCounts[id]) restartCounts[id] = 0;\n\n    worker.on(\"exit\", function(code, signal) {\n      restartCounts[id]++;\n      var count = restartCounts[id];\n\n      if (count > 10) {\n        console.error(\"Worker \" + id + \" crashed too many times\");\n        return;\n      }\n\n      // Exponential backoff: 1s, 2s, 4s, 8s, ...\n      var delay = Math.min(1000 * Math.pow(2, count - 1), 30000);\n      console.log(\"Worker \" + id + \" crashed (attempt \" + count + \"),\",\n        \"restarting in \" + delay + \"ms\");\n\n      setTimeout(createWorker, delay);\n    });\n\n    // Health check via IPC\n    worker.on(\"message\", function(msg) {\n      if (msg.type === \"health\") {\n        restartCounts[id] = 0; // Reset on successful health check\n      }\n    });\n\n    return worker;\n  }\n\n  for (var i = 0; i < os.cpus().length; i++) {\n    createWorker();\n  }\n} else {\n  var server = http.createServer(function(req, res) {\n    res.end(\"OK from worker \" + cluster.worker.id);\n  }).listen(3000);\n\n  // Send periodic health check to master\n  setInterval(function() {\n    process.send({ type: \"health\", pid: process.pid });\n  }, 5000);\n}",
      "description": "Exponential backoff prevents crash loops from overwhelming the system. Workers send health check messages to the master. If a worker crashes, the master waits longer between each restart attempt, capped at 30 seconds."
    },
    {
      "title": "IPC Messaging Between Master and Workers",
      "useCase": "Coordinate activity across processes",
      "code": "var cluster = require(\"cluster\");\nvar http = require(\"http\");\n\nif (cluster.isPrimary) {\n  var worker = cluster.fork();\n\n  // Master receives messages from workers\n  worker.on(\"message\", function(msg) {\n    console.log(\"Master received:\", JSON.stringify(msg));\n    if (msg.type === \"request_count\") {\n      worker.send({ type: \"response\", data: \"Count: \" + msg.count });\n    }\n  });\n\n  // Master sends messages to workers\n  worker.send({ type: \"greeting\", text: \"Hello from master!\" });\n} else {\n  var requestCount = 0;\n\n  // Worker receives messages from master\n  process.on(\"message\", function(msg) {\n    console.log(\"Worker received:\", JSON.stringify(msg));\n  });\n\n  http.createServer(function(req, res) {\n    requestCount++;\n    res.end(\"OK\\n\");\n    // Notify master about request count periodically\n    if (requestCount % 5 === 0) {\n      process.send({\n        type: \"request_count\",\n        count: requestCount,\n        pid: process.pid\n      });\n    }\n  }).listen(3000);\n}",
      "description": "IPC uses serialized JSON messages via process.send() and process.on(\"message\"). Messages are asynchronous. Use IPC for coordination (health checks, stats reporting, task distribution) not for passing large data."
    },
    {
      "title": "Sticky Session Load Balancing with Cluster",
      "useCase": "Route clients to the same worker consistently",
      "code": "var cluster = require(\"cluster\");\nvar http = require(\"http\");\nvar crypto = require(\"crypto\");\n\n// Hash-based sticky session using client IP\nfunction getWorkerId(remoteAddress, numWorkers) {\n  var hash = crypto.createHash(\"md5\").update(remoteAddress).digest(\"hex\");\n  return parseInt(hash.slice(0, 8), 16) % numWorkers;\n}\n\nif (cluster.isPrimary) {\n  var numWorkers = 4;\n  for (var i = 0; i < numWorkers; i++) {\n    cluster.fork();\n  }\n\n  // Round-robin is default, but we handle sticky in the load balancer\n  cluster.on(\"exit\", function(worker) {\n    cluster.fork();\n  });\n} else {\n  var sessionData = {};\n  http.createServer(function(req, res) {\n    // Simulate session-based state\n    var sessionId = req.headers[\"cookie\"] || \"anon\";\n    if (!sessionData[sessionId]) {\n      sessionData[sessionId] = { visits: 0 };\n    }\n    sessionData[sessionId].visits++;\n    res.writeHead(200, { \"Content-Type\": \"text/plain\" });\n    res.end(\"Worker \" + cluster.worker.id\n      + \" - Visit \" + sessionData[sessionId].visits');\n  }).listen(3000);\n}",
      "description": "Sticky sessions route requests from the same client to the same worker. This example uses IP-based hashing. In production, use a reverse proxy (Nginx, HAProxy) with the ip_hash directive for proper sticky sessions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does cluster.isPrimary check?",
      "options": [
        "If the process is a worker",
        "If the process is the master/primary",
        "If clustering is enabled",
        "If the process is running"
      ],
      "answer": 1,
      "explanation": "cluster.isPrimary is true in the master process. cluster.isWorker is true in worker processes. (Renamed from isMaster in Node 16)."
    },
    {
      "question": "How does round-robin scheduling work in clusters?",
      "options": [
        "OS distributes connections",
        "Master accepts and distributes connections evenly",
        "Workers compete for connections",
        "Random assignment"
      ],
      "answer": 1,
      "explanation": "SCHED_RR: master accepts connections and distributes them to workers in sequential order for even load distribution."
    },
    {
      "question": "What happens when a worker crashes?",
      "options": [
        "The entire cluster stops",
        "The master can fork a replacement worker",
        "Other workers automatically take over",
        "Node.js restarts automatically"
      ],
      "answer": 1,
      "explanation": "The master monitors \"exit\" events and can fork a replacement worker. The other workers continue serving requests unaffected."
    },
    {
      "question": "How do cluster workers share state?",
      "options": [
        "Through shared memory",
        "They do not share memory - use external store (Redis/DB)",
        "Via global variables",
        "Through file system"
      ],
      "answer": 1,
      "explanation": "Workers are separate processes with separate memory. Shared state requires an external store like Redis, a database, or IPC through the master."
    },
    {
      "question": "What is the purpose of worker.disconnect()?",
      "options": [
        "Kills the worker immediately",
        "Closes IPC channel, worker finishes requests then exits",
        "Removes worker from cluster",
        "Pauses the worker"
      ],
      "answer": 1,
      "explanation": "disconnect() closes the IPC channel between master and worker. The worker can finish handling existing requests before the process exits."
    },
    {
      "question": "Which is NOT a valid cluster scaling approach?",
      "options": [
        "Using PM2 with -i max",
        "Using worker_threads for I/O scaling",
        "Using Docker/Kubernetes containers",
        "Cluster module with os.cpus().length workers"
      ],
      "answer": 1,
      "explanation": "worker_threads are for CPU-intensive tasks within a single process, not for scaling I/O across cores. Cluster, PM2, and containers are for horizontal scaling."
    }
  ]
};
