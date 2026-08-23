export const oop_operating_systems = {
  "id": "oop-operating-systems",
  "title": "Operating Systems",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for programs.",
    "Core functions: process management, memory management, file systems, device drivers, security, and user interface.",
    "Types: batch, time-sharing (multitasking), distributed, real-time, and embedded operating systems.",
    "Major OS families: Windows, Unix/Linux, macOS, and mobile OSes (Android, iOS)."
  ],
  "laymanDefinition": "An operating system is like a building manager. The manager allocates apartments to residents (processes), ensures they do not disturb each other (memory isolation), maintains common areas (file system), handles deliveries (I/O), and keeps the building secure. Residents (applications) focus on their own activities, trusting the manager to handle all logistics.",
  "deepDive": [
    {
      "heading": "Process Management",
      "text": "Process: program in execution with its own address space, resources, and state. States: new, ready, running, waiting, terminated. Context switching: saving/restoring process state when switching between processes. Scheduling algorithms: FCFS, SJF, Round Robin, Priority, Multi-level Queue."
    },
    {
      "heading": "Memory Management",
      "text": "Virtual memory: each process gets its own virtual address space mapped to physical memory via page tables. Paging: memory divided into fixed-size pages. Segmentation: variable-size segments. Swapping: moving processes between RAM and disk. MMU (Memory Management Unit) handles address translation."
    },
    {
      "heading": "File Systems",
      "text": "Purpose: organize and store data persistently. Structures: FAT, NTFS (Windows), ext4 (Linux), APFS (macOS). Key concepts: inodes (Unix metadata storage), directories, file permissions (read/write/execute), mounting, journaling (crash recovery). VFS (Virtual File System) provides uniform interface."
    },
    {
      "heading": "Process vs Thread",
      "text": "Process: independent execution unit with own memory space, heavy-weight creation. Thread: lightweight unit within a process, shares memory space with other threads in same process. Multi-threading: parallelism within a single process. Threads communicate via shared memory; processes via IPC."
    },
    {
      "heading": "Deadlocks and Synchronization",
      "text": "Deadlock: processes waiting for each other\\'s resources indefinitely. Four conditions: mutual exclusion, hold and wait, no preemption, circular wait. Synchronization mechanisms: mutexes, semaphores, monitors, condition variables. Race condition: outcome depends on thread interleaving."
    }
  ],
  "interviewAnswer": "Operating systems manage processes, memory, files, and devices. Key concepts: virtual memory, paging, scheduling (Round Robin, etc.), process vs thread, deadlocks, and file systems. Understanding OS fundamentals helps write efficient, concurrent, and robust software.",
  "interviewQuestions": [
    {
      "question": "What is an operating system?",
      "answer": "System software that manages hardware, software resources, and provides services for programs."
    },
    {
      "question": "What are the core OS functions?",
      "answer": "Process management, memory management, file systems, device drivers, security, UI."
    },
    {
      "question": "What is a process?",
      "answer": "A program in execution with its own address space, resources, and state."
    },
    {
      "question": "What is a thread?",
      "answer": "A lightweight unit of execution within a process, sharing memory with other threads."
    },
    {
      "question": "What is virtual memory?",
      "answer": "Gives each process its own virtual address space, mapped to physical memory via page tables."
    },
    {
      "question": "What is a deadlock?",
      "answer": "Two or more processes waiting indefinitely for resources held by each other."
    },
    {
      "question": "What is a mutex?",
      "answer": "Mutual exclusion object — prevents multiple threads from accessing shared resource simultaneously."
    },
    {
      "question": "What is context switching?",
      "answer": "Saving and restoring process/thread state when switching between them."
    },
    {
      "question": "What are common scheduling algorithms?",
      "answer": "FCFS (First Come First Served), Round Robin, Shortest Job First, Priority Scheduling."
    },
    {
      "question": "What is the difference between a process and a thread?",
      "answer": "Process has own memory space; threads share memory within a process. Process is heavier."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Operating Systems</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Process Mgmt</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Scheduling</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Memory Mgmt</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Virtual memory</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">File System</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Storage</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Device Drivers</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">I/O</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Access control</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Operating System</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Manages hardware and software. Processes,</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> memory, files, devices, security. Virtua</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">l memory, scheduling, threads.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Operating Systems: Core functions — process manage</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ment, memory management, file systems, I/O, securi</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ty.</text></svg>",
  "codeExamples": [
    {
      "title": "Process Creation (Node.js)",
      "useCase": "Spawning child processes.",
      "code": "const { spawn, fork } = require(\"child_process\");\n\n// Spawn a new process (runs a command)\nconst ls = spawn(\"ls\", [\"-la\"]);\nls.stdout.on(\"data\", (data) => {\n  console.log(`Output: ${data}`);\n});\nls.on(\"close\", (code) => {\n  console.log(`Process exited with code ${code}`);\n});\n\n// Fork: create a child Node.js process\nconst child = fork(\"./worker.js\");\nchild.send({ task: \"process_data\", id: 42 });\nchild.on(\"message\", (result) => {\n  console.log(\"Result from child:\", result);\n});",
      "description": "Node.js child_process module allows spawning and communicating with separate processes."
    },
    {
      "title": "Thread Pool (Worker Threads)",
      "useCase": "Parallel execution.",
      "code": "const { Worker } = require(\"worker_threads\");\n\nfunction runInWorker(data) {\n  return new Promise((resolve, reject) => {\n    const worker = new Worker(`\n      const { parentPort } = require(\"worker_threads\");\n      // CPU-intensive work\n      const result = heavyComputation(${JSON.stringify(data)});\n      parentPort.postMessage(result);\n    `, { eval: true });\n    worker.on(\"message\", resolve);\n    worker.on(\"error\", reject);\n  });\n}\n\n// Main thread not blocked\nrunInWorker([1,2,3,4,5]).then(console.log);\nconsole.log(\"Main thread is free!\");",
      "description": "Worker threads provide true parallelism in Node.js without blocking the event loop."
    },
    {
      "title": "File System Operations",
      "useCase": "OS file I/O.",
      "code": "const fs = require(\"fs\");\nconst path = require(\"path\");\n\n// File permissions (Unix style)\nfs.chmodSync(\"file.txt\", 0o755); // rwxr-xr-x\n\n// Check file stats\nconst stats = fs.statSync(\"file.txt\");\nconsole.log(stats.isFile());\nconsole.log(stats.size);\nconsole.log(stats.mode.toString(8)); // permissions\n\n// Stream large file (efficient I/O)\nconst readStream = fs.createReadStream(\"large-file.txt\");\nconst writeStream = fs.createWriteStream(\"output.txt\");\nreadStream.pipe(writeStream);\n\n// Watch file for changes\nfs.watchFile(\"config.json\", (curr, prev) => {\n  console.log(\"Config changed, reloading...\");\n});",
      "description": "Node.js fs module provides OS-level file operations: permissions, stats, streams, and file watching."
    },
    {
      "title": "Mutex/Semaphore Simulation",
      "useCase": "Concurrency control.",
      "code": "class Mutex {\n  constructor() { this.locked = false; this.queue = []; }\n  acquire() {\n    return new Promise(resolve => {\n      if (!this.locked) {\n        this.locked = true;\n        resolve();\n      } else {\n        this.queue.push(resolve);\n      }\n    });\n  }\n  release() {\n    if (this.queue.length > 0) {\n      const next = this.queue.shift();\n      next();\n    } else {\n      this.locked = false;\n    }\n  }\n}\n\nconst mutex = new Mutex();\nasync function criticalSection(id) {\n  await mutex.acquire();\n  console.log(`Process ${id} entered critical section`);\n  await new Promise(r => setTimeout(r, 1000));\n  console.log(`Process ${id} leaving critical section`);\n  mutex.release();\n}\nPromise.all([criticalSection(1), criticalSection(2), criticalSection(3)]);",
      "description": "Mutex ensures only one thread/process accesses a critical section at a time."
    },
    {
      "title": "OS Information (Node.js)",
      "useCase": "Accessing OS details.",
      "code": "const os = require(\"os\");\n\nconsole.log(\"Platform:\", os.platform());   // win32, linux, darwin\nconsole.log(\"Architecture:\", os.arch());   // x64, arm\nconsole.log(\"CPUs:\", os.cpus().length);    // core count\nconsole.log(\"Free memory:\", os.freemem());  // bytes\nconsole.log(\"Total memory:\", os.totalmem());\nconsole.log(\"Uptime:\", os.uptime(), \"seconds\");\nconsole.log(\"Home dir:\", os.homedir());\nconsole.log(\"Temp dir:\", os.tmpdir());\nconsole.log(\"Hostname:\", os.hostname());\nconsole.log(\"Network interfaces:\", Object.keys(os.networkInterfaces()));",
      "description": "Node.js os module provides access to OS-level information about the system."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is an OS?",
      "options": [
        "A programming language",
        "System software managing hardware and software",
        "A database management system",
        "A web browser"
      ],
      "answer": 1,
      "explanation": "An OS manages computer hardware, software resources, and provides services for programs."
    },
    {
      "question": "What is a process?",
      "options": [
        "A running program with its own memory space",
        "A function",
        "A variable",
        "A file"
      ],
      "answer": 0,
      "explanation": "A process is a program in execution with its own address space and resources."
    },
    {
      "question": "What is a thread?",
      "options": [
        "A file type",
        "A lightweight execution unit sharing memory",
        "A network connection",
        "A database query"
      ],
      "answer": 1,
      "explanation": "A thread is a lightweight execution unit within a process, sharing memory with other threads."
    },
    {
      "question": "What is virtual memory?",
      "options": [
        "Physical RAM",
        "Each process gets its own virtual address space",
        "A type of hard drive",
        "A network protocol"
      ],
      "answer": 1,
      "explanation": "Virtual memory gives each process its own address space mapped to physical memory via page tables."
    },
    {
      "question": "What is a deadlock?",
      "options": [
        "Fast execution",
        "Processes waiting indefinitely for each other's resources",
        "Memory optimization",
        "File compression"
      ],
      "answer": 1,
      "explanation": "Deadlock occurs when processes wait indefinitely for resources held by each other."
    },
    {
      "question": "What does Round Robin scheduling do?",
      "options": [
        "Gives each process a fixed time slice",
        "Processes longest jobs first",
        "Uses priority only",
        "Never switches processes"
      ],
      "answer": 0,
      "explanation": "Round Robin assigns a fixed time slice to each process in a circular order."
    }
  ]
};
