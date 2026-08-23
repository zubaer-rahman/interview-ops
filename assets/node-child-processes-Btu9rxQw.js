const e={id:"node-child-processes",title:"Node.js Child Processes",difficulty:"advanced",estimatedMinutes:25,tldr:["The child_process module enables spawning new processes from Node.js, allowing execution of system commands, scripts in other languages, and parallel computation.","Four ways to create child processes: spawn(), exec(), execFile(), and fork() - each with different use cases for I/O handling, output buffering, and IPC.","Child processes communicate with the parent via stdio streams (stdin, stdout, stderr) and optional IPC channels (send/on message).","Child processes are separate OS processes with their own memory, V8 instance, and event loop - they provide isolation but have higher overhead than worker threads."],laymanDefinition:'The Child Processes module is like being able to hire temporary workers. Your main Node.js application (the boss) can launch other programs (temporary workers) to do specific tasks. For example, you might ask Python to process some data (child_process.exec("python script.py")), run a shell command to compress files (child_process.exec("gzip file.txt")), or start another Node.js program to handle background work. Each temporary worker has their own tools and workspace (separate memory and process), so if they crash, your main application keeps running. The boss can talk to the workers through pipes (stdin/stdout) or walkie-talkies (IPC messages).',deepDive:[{heading:"spawn() vs exec() vs execFile()",text:"(1) child_process.spawn(command, args, options) - launches a new process with streaming I/O. Returns ChildProcess object with stdin/stdout/stderr streams. Does NOT buffer output - streams data as it arrives. Best for long-running processes or large output. Options: cwd, env, stdio, detached, shell. (2) child_process.exec(command, options, callback) - runs a command in a shell and buffers output. Callback receives (error, stdout, stderr). Max buffer size (default 1024KB) - exceeding kills the process. Best for short commands where you want the entire output as a string. (3) child_process.execFile(file, args, options, callback) - similar to exec but does NOT use a shell. Directly executes a file. More efficient and slightly more secure (no shell injection). Use execFile when you know the exact executable path and do not need shell features."},{heading:"fork() and IPC Communication",text:`child_process.fork(modulePath, args, options) - a special case of spawn() that creates a new Node.js process. Automatically establishes an IPC channel. The child process uses process.send() and process.on("message") for communication. Parent uses child.send() and child.on("message"). Messages are serialized as JSON using the internal IPC mechanism (libuv pipes). fork() options: execPath (custom Node executable), execArgv (Node flags like --inspect), silent (suppress stdout/stderr). Use cases: (1) Offloading CPU-intensive work. (2) Running untrusted code in isolation. (3) Creating a worker pool for parallel processing. (4) Monitoring/management tools. fork() inherits the parent's environment variables but can set custom env. The child modulePath is resolved relative to the parent's __dirname.`},{heading:"Stdio Configuration and Piping",text:`The stdio option controls how the child's standard I/O connects to the parent. Configurations: (1) "pipe" (default) - creates a pipe between parent and child. Parent can read child.stdout or write to child.stdin. (2) "inherit" - child shares parent's stdio (output goes to the same terminal). (3) "ignore" - child's stdio is /dev/null. (4) "ipc" - creates an IPC channel (used automatically by fork()). (5) file descriptor number - child connects to an existing fd. (6) null/undefined - use default. (7) Array - specify each fd separately: ["pipe", "pipe", "pipe"] for all three. stdio options can be mixed: ["inherit", "pipe", "pipe"] sends stderr to parent terminal, pipes stdout. ChildProcess.stdin, .stdout, .stderr are streams. Handle "error" and "close" events on these streams.`},{heading:"Process Lifecycle and Error Handling",text:'Events on ChildProcess: (1) "error" - failed to spawn or kill the process. (2) "exit" - process exited (code, signal). code is null if killed by signal. (3) "close" - all stdio streams are closed (after exit). (4) "message" - IPC message received. (5) "disconnect" - IPC channel closed. Error scenarios: (1) ENOENT - command not found. (2) EACCES - permission denied. (3) Non-zero exit code - command failed (check error.code and error.killed). (4) stdout/stderr buffer exceeded (exec/execFile). (5) Timeout - child.kill() after options.timeout. (6) Zombie processes - child processes that exit but are not reaped (wait for "close" event). Kill options: child.kill([signal]) - sends signal (SIGTERM default). child.kill("SIGKILL") - force kill. Use child.exitCode and child.signalCode to check exit status.'},{heading:"Child Process Security Considerations",text:"(1) Shell injection - NEVER pass unsanitized user input to exec() or spawn with shell:true. Use execFile() or spawn without shell. (2) Command injection via arg concatenation - pass args as an array, not a string. (3) Path traversal - verify file paths before execution. (4) Resource limits - child processes consume memory and CPU. Limit children with a pool pattern. (5) Timeouts - always set timeouts for child operations. (6) Detached mode options.detached:true - child runs independently of parent. Child's PID is different from parent's group. Use child.unref() so the parent can exit independently. (7) Signal handling - child processes inherit signal handlers. Reset handlers in children if needed. (8) Environment variables - child inherits process.env by default. Use options.env to restrict or override."}],interviewAnswer:'The child_process module spawns OS-level processes. Four methods: spawn() - streaming I/O, large output; exec() - shell command, buffered output; execFile() - direct binary, no shell; fork() - new Node.js process with IPC channel. Stdio options: "pipe" (streaming), "inherit" (shared), "ignore" (/dev/null). Events: "error" (spawn fail), "exit" (process exit), "close" (streams closed). IPC: process.send()/on("message") for fork(). Security: never use shell with unsanitized input - shell injection risk. Use args array, not string concatenation. Set timeouts for child operations. Use detached + unref for background processes.',interviewQuestions:[{question:"What is the difference between spawn() and exec()?",answer:"spawn() streams I/O via child.stdout/stdin/stderr streams. Does not buffer. exec() runs in a shell and buffers stdout/stderr, passing them to the callback. Use spawn() for large output or long-running processes; exec() for simple short commands."},{question:"What is fork() and how is it different from spawn()?",answer:"fork() is a special case of spawn() that creates a new Node.js process. It automatically sets up an IPC channel (process.send/on message). fork() is for running Node.js modules, spawn() can run any executable. fork() is used for creating worker processes."},{question:"How do child processes communicate with the parent?",answer:'(1) stdio streams - child.stdin.write(), parent reads child.stdout. (2) IPC messages - process.send() and process.on("message") (fork() only). (3) Exit codes - child process.exit(code) communicates a numeric code. (4) Signals - parent sends signals with child.kill(signal).'},{question:"What is a zombie process and how do you prevent it?",answer:'A zombie process is a child process that has exited but has not been "reaped" (the parent has not collected its exit status). Node.js automatically reaps children on "exit" or "close" events. Always listen for the "close" event to properly clean up child processes.'},{question:"How do you handle shell injection vulnerabilities?",answer:'(1) Use execFile() instead of exec() - it does not use a shell. (2) With spawn(), pass args as an array: spawn("ls", ["-l", userPath]), not a string. (3) NEVER concatenate user input into command strings. (4) Sanitize and validate all user-provided path and argument values.'},{question:"What does options.detached do?",answer:"detached:true makes the child process the leader of a new process group. The child can continue running after the parent exits. Use child.unref() so the parent does not wait for the child. Useful for background/daemon processes."},{question:"How do you set a timeout for a child process?",answer:'Pass options.timeout in milliseconds to spawn/exec/execFile. If the timeout expires, the child is killed (SIGTERM). Handle the "close" event to detect termination. Check child.killed property.'},{question:"What is the max buffer size for exec() and what happens when exceeded?",answer:"Default max buffer is 1024KB (1MB). Configure with options.maxBuffer. When exceeded, the child process is terminated, and the callback receives an error with code ERR_CHILD_PROCESS_STDIO_MAXBUFFER."},{question:"How do you spawn a child process with a shell on Windows?",answer:'Use options.shell: true or options.shell: "powershell.exe". On Windows without shell, spawn() cannot run built-in commands (dir, echo) or .bat/.cmd files. With shell:true, it runs via cmd.exe.'},{question:'What is the difference between "exit" and "close" events on ChildProcess?',answer:'"exit" fires when the process exits (code, signal). "close" fires when the process has exited AND all stdio streams are closed. "close" always comes after "exit". Listen for "close" to ensure all I/O is complete.'}],diagramSvg:'<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="720" height="280" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Child Process Methods and I/O Flow</text><rect x="30" y="55" width="200" height="45" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">spawn("ls", ["-l"])</text><text x="130" y="94" text-anchor="middle" font-size="9" fill="#ddd">Streaming stdout/stderr</text><rect x="30" y="115" width="200" height="45" rx="5" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="130" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">exec("ls -l", callback)</text><text x="130" y="154" text-anchor="middle" font-size="9" fill="#ddd">Buffered stdout + shell</text><rect x="30" y="175" width="200" height="45" rx="5" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="130" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">execFile("/bin/ls", ["-l"])</text><text x="130" y="214" text-anchor="middle" font-size="9" fill="#ddd">Direct binary, no shell</text><rect x="30" y="235" width="200" height="45" rx="5" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="130" y="251" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">fork("./worker.js")</text><text x="130" y="274" text-anchor="middle" font-size="9" fill="#ddd">New Node.js + IPC channel</text></svg>',codeExamples:[{title:"spawn() with Streaming Output",useCase:"Run a command and process output as it arrives",code:`var spawn = require("child_process").spawn;

// Spawn a child process with streaming I/O
var child = spawn("find", [".", "-name", "*.js"]);

// Stream stdout as it arrives
child.stdout.on("data", function(data) {
  process.stdout.write("STDOUT: " + data);
});

child.stderr.on("data", function(data) {
  console.error("STDERR: " + data);
});

child.on("close", function(code) {
  console.log("Child exited with code:", code);
});

child.on("error", function(err) {
  console.error("Failed to spawn:", err.message);
});

// Write to stdin
child.stdin.write("additional input\\n");
child.stdin.end();`,description:'spawn() streams output via events. stdout/stderr are Readable streams. The "data" event fires for each chunk. Handle "error" for spawn failures and "close" for process completion.'},{title:"exec() with Buffered Output",useCase:"Run a shell command and get the complete result",code:`var exec = require("child_process").exec;

// Buffered execution via shell
exec("ls -la | findstr node", function(err, stdout, stderr) {
  if (err) {
    console.error("Error:", err.message);
    console.error("Exit code:", err.code);
    return;
  }
  console.log("Output:");
  console.log(stdout);
});

// With timeout (kill after 5s)
exec("long-running-command", { timeout: 5000 }, function(err, stdout, stderr) {
  if (err && err.killed) {
    console.error("Command timed out");
    return;
  }
  console.log(stdout);
});

// Custom max buffer
exec("find / -name *.log", { maxBuffer: 5 * 1024 * 1024 }, function(err, stdout) {
  if (err && err.code === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER") {
    console.error("Output too large, use spawn instead");
    return;
  }
  console.log("Found " + stdout.split("\\n").length + " log files");
});`,description:"exec() buffers stdout/stderr entirely in memory. Use for short commands with predictable output. Set timeout to prevent hanging. Use maxBuffer for large output. For anything larger, use spawn()."},{title:"fork() with IPC Communication",useCase:"Create a Node.js worker with message passing",code:`// parent.js
var fork = require("child_process").fork;
var path = require("path");

var child = fork(path.join(__dirname, "worker.js"));

child.on("message", function(msg) {
  console.log("Parent received:", msg);
  if (msg.type === "result") {
    console.log("Computation result:", msg.data);
  }
});

child.on("close", function(code) {
  console.log("Worker exited with code:", code);
});

// Send task to worker
child.send({ type: "task", data: { from: 1, to: 1000000 } });

// ---------- worker.js ----------
process.on("message", function(msg) {
  if (msg.type === "task") {
    // CPU-intensive work
    var sum = 0;
    for (var i = msg.data.from; i <= msg.data.to; i++) {
      sum += i;
    }
    process.send({ type: "result", data: sum });
    process.exit(0);
  }
});

// Notify parent that worker is ready
process.send({ type: "ready" });`,description:"fork() creates a Node.js child with automatic IPC. Messages are serialized JSON. Use for CPU-intensive work. The worker exits after completing its task. The parent listens for results and respawns as needed."},{title:"Child Process Pool for Parallel Execution",useCase:"Manage a pool of child processes for concurrent tasks",code:`var fork = require("child_process").fork;
var path = require("path");

function WorkerPool(modulePath, numWorkers) {
  this.workers = [];
  this.queue = [];
  this.activeCount = 0;

  for (var i = 0; i < numWorkers; i++) {
    var worker = fork(modulePath);
    var self = this;
    worker.on("message", function(msg) {
      self.activeCount--;
      if (this._callback) {
        this._callback(null, msg);
      }
      self._processNext(this);
    });
    worker.on("error", function(err) {
      self.activeCount--;
      if (this._callback) {
        this._callback(err);
      }
      self._processNext(this);
    });
    this.workers.push(worker);
  }
}

WorkerPool.prototype.send = function(msg, callback) {
  this.queue.push({ msg: msg, callback: callback });
  this._processNext(null);
};

WorkerPool.prototype._processNext = function(worker) {
  if (!worker) {
    // Find an idle worker
    for (var i = 0; i < this.workers.length; i++) {
      if (!this.workers[i]._callback) {
        worker = this.workers[i];
        break;
      }
    }
  }

  if (worker && this.queue.length > 0) {
    var task = this.queue.shift();
    worker._callback = task.callback;
    this.activeCount++;
    worker.send(task.msg);
  }
};

var pool = new WorkerPool("./worker.js", 4);
pool.send({ task: "compute" }, function(err, result) {
  console.log("Result:", result);
});`,description:"A worker pool manages a fixed number of forked processes. Tasks are queued and dispatched to idle workers. This prevents overwhelming the system with too many processes while maximizing parallel CPU utilization."},{title:"Detached Process and Process Groups",useCase:"Create a background process that outlives the parent",code:`var spawn = require("child_process").spawn;

// Spawn a detached background process
var child = spawn("node", ["background-task.js"], {
  detached: true,
  stdio: ["ignore", "pipe", "pipe"],
  cwd: __dirname
});

// Unref so parent can exit independently
child.unref();

console.log("Parent will exit, child continues running");
console.log("Child PID:", child.pid);
process.exit(0);

// ---------- background-task.js ----------
var fs = require("fs");
var stream = fs.createWriteStream("background.log");
var count = 0;

function log() {
  count++;
  stream.write("Background task running: " + count + "\\n");
  if (count < 10) {
    setTimeout(log, 1000);
  } else {
    stream.end();
    process.exit(0);
  }
}

log();

// Handle SIGHUP (sent when parent exits)
process.on("SIGHUP", function() {
  console.log("Parent disconnected, continuing...");
});`,description:"detached:true creates a new process group. child.unref() allows the parent to exit without waiting for the child. The child continues running in the background. stdio is configured to avoid blocking on parent's stdio streams."}],mcqQuestions:[{question:"Which method creates a new Node.js process with IPC?",options:["spawn()","exec()","execFile()","fork()"],answer:3,explanation:"fork() creates a new Node.js process with an IPC channel. It is a special case of spawn() for Node.js modules."},{question:"Which method uses a shell by default?",options:["spawn()","exec()","execFile()","fork()"],answer:1,explanation:"exec() runs commands through a shell (/bin/sh or cmd.exe). This enables shell features (pipes, redirects) but introduces shell injection risk."},{question:"What does spawn() return for stdout?",options:["A string","A Buffer","A Readable stream","A callback"],answer:2,explanation:'spawn() returns a ChildProcess object with child.stdout as a Readable stream. Data arrives via "data" events.'},{question:"What happens when exec() output exceeds maxBuffer?",options:["Output is truncated","Child is killed and error is returned","Output continues streaming","Buffer is expanded"],answer:1,explanation:"When output exceeds maxBuffer (default 1024KB), the child is killed and the callback receives an error with code ERR_CHILD_PROCESS_STDIO_MAXBUFFER."},{question:"How do you prevent shell injection with spawn()?",options:["Use spawn with shell:true","Pass args as an array, not a string","Sanitize input with regex","Use exec() instead"],answer:1,explanation:'Pass arguments as an array: spawn("ls", ["-l", userInput]). This avoids shell interpretation of special characters.'},{question:"What does child.unref() do?",options:["Kills the child process","Allows parent to exit independently","Removes IPC channel","Detaches stdio"],answer:1,explanation:"unref() detaches the child from the parent's event loop reference count, allowing the parent to exit even if the child is still running. Used with detached:true."}]};export{e as node_child_processes};
