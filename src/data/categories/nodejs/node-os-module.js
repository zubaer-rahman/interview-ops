export const node_os_module = {
  "id": "node-os-module",
  "title": "Node.js OS Module",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "The os module provides operating system-related utility methods and properties for retrieving information about the system Node.js is running on.",
    "It can retrieve CPU architecture, memory usage, network interfaces, system uptime, hostname, home directory, temp directory, and user info.",
    "The os module is synchronous and does not interact with the event loop or libuv - it returns cached or system-call-provided information.",
    "Common use cases: system monitoring tools, build scripts, configuration based on platform, load balancing with CPU core counts."
  ],
  "laymanDefinition": "The OS module is like a system information dashboard for your computer. It tells you things like: \"What type of processor does this computer have?\" (os.arch), \"How much memory is available?\" (os.freemem), \"How long has the computer been running?\" (os.uptime), \"What network connections are active?\" (os.networkInterfaces), \"How many CPU cores are there?\" (os.cpus). This is useful for making decisions like \"start one worker thread per CPU core\" or \"use this much memory for caching\".",
  "deepDive": [
    {
      "heading": "CPU and Architecture Information",
      "text": "os.arch() - returns the CPU architecture (x64, arm, arm64, ia32, mips, ppc, s390). os.cpus() - returns an array of CPU/core objects, each with: model (string description), speed (MHz), times (object with user, nice, sys, idle, irq - cumulative time). os.endianness() - returns \"BE\" or \"LE\" (endianness). os.freemem() - returns free system memory in bytes. os.totalmem() - returns total system memory in bytes. os.loadavg() - returns 1, 5, and 15 minute load averages (Windows returns [0, 0, 0] because load average is a Unix concept). The cpus() times are useful for calculating CPU usage percentages over time by comparing snapshots."
    },
    {
      "heading": "Network and Platform Information",
      "text": "os.networkInterfaces() - returns an object keyed by interface name with arrays of address objects. Each address has: address (IP), netmask, family (\"IPv4\"|\"IPv6\"), mac (MAC address), internal (true for loopback), cidr (CIDR notation), scopeid (IPv6 only). os.hostname() - returns the hostname of the OS. os.platform() - returns \"darwin\", \"linux\", \"win32\", \"aix\", \"freebsd\", \"openbsd\", \"sunos\", \"android\". os.release() - returns the OS release version (e.g., \"10.0.19045\" for Windows 10). os.type() - returns \"Windows_NT\", \"Linux\", \"Darwin\". os.machine() - returns the machine type (Node 18+, e.g., \"x86_64\"). Use os.platform() for conditional code that needs OS-specific behavior."
    },
    {
      "heading": "User, Directory, and Process Information",
      "text": "os.homedir() - returns the current user's home directory. os.tmpdir() - returns the default temp directory (from TMP, TEMP, TMPDIR env vars, or system default). os.userInfo(options) - returns user object: username, uid, gid, shell, homedir. os.EOL - the OS end-of-line marker: \"\n\" on POSIX, \"\r\n\" on Windows. os.devNull - the null device path: \"/dev/null\" on POSIX, \"\\\\.\\nul\" on Windows (Node 16+). os.availableParallelism() - returns the number of CPUs available (Node 19+, respects CPU affinity settings). os.version() - returns the OS version as a string (Node 13+). os.uptime() - returns system uptime in seconds. Use os.EOL for cross-platform file writing instead of hardcoded \"\n\"."
    },
    {
      "heading": "Memory and Process Priority",
      "text": "os.freemem() and os.totalmem() return bytes. For human-readable formatting: (bytes / 1024 / 1024).toFixed(2) + \" MB\". os.getPriority([pid]) - returns process priority (-20 to 19, lower = higher priority). os.setPriority([pid, ]priority) - sets process priority. Priority values: -20 (highest) to 19 (lowest). The default priority is 0. Setting priority requires appropriate OS privileges. os.constants.priority - contains PRIORITY_LOW (19), PRIORITY_BELOW_NORMAL (10), PRIORITY_NORMAL (0), PRIORITY_ABOVE_NORMAL (-7), PRIORITY_HIGH (-14), PRIORITY_HIGHEST (-20). These are used with os.setPriority()."
    },
    {
      "heading": "Practical Applications of OS Module",
      "text": "(1) Clustering: os.cpus().length to determine number of workers. (2) Memory monitoring: os.freemem() / os.totalmem() for health checks. (3) Platform detection: os.platform() for platform-specific code paths. (4) Temp files: path.join(os.tmpdir(), \"my-app\") for temporary storage. (5) Home directory config: path.join(os.homedir(), \".myapprc\") for user config files. (6) Network discovery: os.networkInterfaces() to find local IP addresses. (7) Load balancing: os.loadavg() to decide when to scale. (8) Uptime tracking: os.uptime() for monitoring. The os module methods are computationally cheap - they are direct system calls or cached values. Call them frequently in monitoring loops without performance concerns."
    }
  ],
  "interviewAnswer": "The os module provides system information. Key methods: os.arch() (CPU arch), os.cpus() (CPU details with times), os.freemem()/os.totalmem() (memory), os.platform() (OS type), os.hostname(), os.networkInterfaces() (IP/MAC addresses), os.homedir() (home directory), os.tmpdir() (temp dir), os.uptime() (system runtime). os.EOL is the platform EOL marker. os.availableParallelism() returns available CPU count (Node 19+). Common uses: clustering (cpus().length), platform detection (platform()), temp storage (tmpdir()), memory monitoring (freemem/totalmem). The module is synchronous and uses direct system calls.",
  "interviewQuestions": [
    {
      "question": "How do you determine the number of CPU cores in Node.js?",
      "answer": "os.cpus().length returns the number of logical CPU cores. This is commonly used to set the number of cluster workers or thread pool size. Each entry in the array represents a logical core (including hyperthreading)."
    },
    {
      "question": "What is the difference between os.platform() and os.arch()?",
      "answer": "os.platform() returns the OS type: \"linux\", \"darwin\", \"win32\". os.arch() returns the CPU architecture: \"x64\", \"arm\", \"arm64\". platform() is for OS-specific behavior; arch() is for native addon compatibility."
    },
    {
      "question": "How do you get the home directory of the current user?",
      "answer": "os.homedir() returns the home directory (e.g., /home/user or C:\\Users\\Name). It respects the HOME (POSIX) or USERPROFILE (Windows) environment variables."
    },
    {
      "question": "What does os.cpus() return?",
      "answer": "An array of objects, each with: model (string, e.g., \"Intel(R) Core(TM) i7-8700K\"), speed (MHz), times (object with user, nice, sys, idle, irq in milliseconds). Compare snapshots of times to calculate CPU usage percentage."
    },
    {
      "question": "How do you get the system temp directory?",
      "answer": "os.tmpdir() returns the default temp directory. On POSIX: /tmp or $TMPDIR. On Windows: %TEMP% or %TMP%. Use path.join(os.tmpdir(), \"myapp\") for temporary files."
    },
    {
      "question": "What is os.EOL and why is it useful?",
      "answer": "os.EOL is the end-of-line marker: \"\n\" on POSIX, \"\r\n\" on Windows. Use it when writing text files to ensure platform-appropriate line endings. Without it, files may show as one line on Windows or with ^M characters on POSIX."
    },
    {
      "question": "What does os.networkInterfaces() return?",
      "answer": "An object with network interface names as keys. Each value is an array of address objects with: address (IP), netmask, family (\"IPv4\"/\"IPv6\"), mac (colon-separated MAC), internal (loopback flag), cidr (CIDR notation). Filter by !internal to get external IPs."
    },
    {
      "question": "How do you check available system memory?",
      "answer": "os.freemem() returns free memory in bytes. os.totalmem() returns total memory. Calculate: os.freemem() / os.totalmem() for the percentage of free memory. For human-readable: (bytes / 1024 / 1024 / 1024).toFixed(2) + \" GB\"."
    },
    {
      "question": "What is the difference between os.uptime() and process.uptime()?",
      "answer": "os.uptime() returns how long the SYSTEM has been running (in seconds). process.uptime() returns how long the NODE PROCESS has been running. system uptime is useful for detecting system restarts; process uptime is useful for detecting process restarts."
    },
    {
      "question": "How do you find the local IP address of the machine?",
      "answer": "Iterate os.networkInterfaces(), filter for non-internal IPv4 addresses. The first non-internal address is typically the primary network interface IP. Use a library like \"ip\" for convenience."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"260\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">OS Module - System Information Categories</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CPU & Memory</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">arch, cpus, freemem, totalmem</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Network & Platform</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">networkInterfaces, platform, release</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User & Directories</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">homedir, tmpdir, userInfo, EOL</text></svg>",
  "codeExamples": [
    {
      "title": "CPU Core and Memory Information",
      "useCase": "Get system resources for clustering and monitoring",
      "code": "var os = require(\"os\");\n\n// CPU information\nvar cpus = os.cpus();\nconsole.log(\"CPU cores:\", cpus.length);\nconsole.log(\"CPU model:\", cpus[0].model);\nconsole.log(\"CPU speed:\", cpus[0].speed, \"MHz\");\n\n// Calculate CPU usage from first core\nvar times = cpus[0].times;\nvar total = times.user + times.nice + times.sys + times.idle + times.irq;\nconsole.log(\"CPU idle percentage:\", ((times.idle / total) * 100).toFixed(1) + \"%\");\n\n// Memory information\nvar freeMemMB = os.freemem() / 1024 / 1024;\nvar totalMemMB = os.totalmem() / 1024 / 1024;\nconsole.log(\"Free memory:\", freeMemMB.toFixed(2), \"MB\");\nconsole.log(\"Total memory:\", totalMemMB.toFixed(2), \"MB\");\nconsole.log(\"Memory usage:\", ((1 - freeMemMB / totalMemMB) * 100).toFixed(1) + \"%\");\n\n// Load average (Unix only, Windows returns [0,0,0])\nvar load = os.loadavg();\nconsole.log(\"Load average (1m, 5m, 15m):\", load.map(function(v) {\n  return v.toFixed(2);\n}).join(\", \"));",
      "description": "os.cpus() gives per-core CPU details. os.freemem() and os.totalmem() provide memory stats. os.loadavg() provides Unix load averages. CPU idle percentage is calculated from cumulative times."
    },
    {
      "title": "Network Interface Discovery",
      "useCase": "Find local IP addresses and MAC addresses",
      "code": "var os = require(\"os\");\n\nvar interfaces = os.networkInterfaces();\nvar addresses = [];\n\nObject.keys(interfaces).forEach(function(name) {\n  interfaces[name].forEach(function(info) {\n    if (info.family === \"IPv4\" && !info.internal) {\n      addresses.push({\n        name: name,\n        address: info.address,\n        netmask: info.netmask,\n        mac: info.mac,\n        cidr: info.cidr\n      });\n    }\n  });\n});\n\nconsole.log(\"External IPv4 addresses:\");\naddresses.forEach(function(a) {\n  console.log(\"  \" + a.name + \": \" + a.address + \"/\" + a.netmask);\n  console.log(\"    MAC: \" + a.mac);\n  console.log(\"    CIDR: \" + a.cidr);\n});\n\n// Simple server that shows its own IP\nif (addresses.length > 0) {\n  console.log(\"Server will bind to: \" + addresses[0].address);\n}",
      "description": "os.networkInterfaces() returns all network adapters. Filter for IPv4 and non-internal to find the external IP. MAC addresses are useful for hardware identification in licensing and network tools."
    },
    {
      "title": "Cross-Platform EOL and Directory Usage",
      "useCase": "Write cross-platform compatible code with OS module",
      "code": "var os = require(\"os\");\nvar fs = require(\"fs\");\nvar path = require(\"path\");\n\n// Use os.EOL for platform-appropriate line endings\nvar lines = [\"Line 1\", \"Line 2\", \"Line 3\"];\nvar content = lines.join(os.EOL);\n\n// Write to temp directory\nvar tmpFile = path.join(os.tmpdir(), \"example-\" + Date.now() + \".txt\");\nfs.writeFileSync(tmpFile, content, \"utf8\");\nconsole.log(\"Wrote to:\", tmpFile);\n\n// Read user home directory for config\nvar configPath = path.join(os.homedir(), \".myapp\", \"config.json\");\nconsole.log(\"Config location:\", configPath);\n\n// Platform detection\nconsole.log(\"Platform:\", os.platform());\nconsole.log(\"Type:\", os.type());\nconsole.log(\"Release:\", os.release());\nconsole.log(\"Architecture:\", os.arch());\nconsole.log(\"Hostname:\", os.hostname());\n\n// User info\nvar userInfo = os.userInfo();\nconsole.log(\"Username:\", userInfo.username);\nconsole.log(\"Home:\", userInfo.homedir);\n\n// System uptime\nvar uptimeHours = os.uptime() / 3600;\nconsole.log(\"System uptime:\", uptimeHours.toFixed(1), \"hours\");\n\n// Process uptime\nconsole.log(\"Process uptime:\", process.uptime().toFixed(1), \"seconds\");",
      "description": "os.EOL ensures correct line endings on each platform. os.tmpdir() and os.homedir() provide cross-platform directory paths. os.platform() enables conditional code for OS-specific behavior."
    },
    {
      "title": "Process Priority and Available Parallelism",
      "useCase": "Manage process priority and detect available CPUs",
      "code": "var os = require(\"os\");\n\n// Available parallelism (Node 19+)\nvar availableCpus = os.availableParallelism();\nconsole.log(\"Available CPUs:\", availableCpus);\nconsole.log(\"Total logical CPUs:\", os.cpus().length);\n\n// These numbers may differ due to CPU affinity/cgroups\n\n// Get current priority (POSIX: -20 to 19)\ntry {\n  var priority = os.getPriority();\n  console.log(\"Current priority:\", priority);\n  console.log(\"Priority label:\", getPriorityLabel(priority));\n} catch (err) {\n  console.log(\"Priority not supported on this platform\");\n}\n\nfunction getPriorityLabel(p) {\n  if (p <= -20) return \"HIGHEST\";\n  if (p <= -14) return \"HIGH\";\n  if (p <= -7) return \"ABOVE_NORMAL\";\n  if (p <= 0) return \"NORMAL\";\n  if (p <= 10) return \"BELOW_NORMAL\";\n  return \"LOW\";\n}\n\n// Set lower priority for background tasks\ntry {\n  os.setPriority(os.constants.priority.PRIORITY_BELOW_NORMAL);\n  console.log(\"Priority set to BELOW_NORMAL\");\n} catch (err) {\n  console.log(\"Cannot set priority:\", err.message);\n}",
      "description": "os.availableParallelism() (Node 19+) respects cgroup/container CPU limits unlike os.cpus().length. Process priority allows background tasks to yield CPU to foreground processes."
    },
    {
      "title": "System Health Monitoring Dashboard",
      "useCase": "Build a simple health check endpoint",
      "code": "var os = require(\"os\");\nvar http = require(\"http\");\n\nfunction getHealth() {\n  var totalMem = os.totalmem();\n  var freeMem = os.freemem();\n  var memUsage = ((1 - freeMem / totalMem) * 100).toFixed(1);\n\n  var uptimeDays = (os.uptime() / 86400).toFixed(1);\n\n  var cpus = os.cpus();\n  var cpuIdle = cpus.reduce(function(sum, cpu) {\n    var total = cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle + cpu.times.irq;\n    return sum + (cpu.times.idle / total) * 100;\n  }, 0) / cpus.length;\n\n  return {\n    status: \"healthy\",\n    hostname: os.hostname(),\n    platform: os.platform() + \" \" + os.release(),\n    arch: os.arch(),\n    cpus: cpus.length,\n    cpuIdle: parseFloat(cpuIdle.toFixed(1)),\n    memory: {\n      total: (totalMem / 1073741824).toFixed(2) + \" GB\",\n      free: (freeMem / 1073741824).toFixed(2) + \" GB\",\n      usage: memUsage + \"%\"\n    },\n    uptime: uptimeDays + \" days\",\n    loadAvg: os.loadavg().map(function(v) { return v.toFixed(2); })\n  };\n}\n\nhttp.createServer(function(req, res) {\n  if (req.url === \"/health\") {\n    res.writeHead(200, { \"Content-Type\": \"application/json\" });\n    res.end(JSON.stringify(getHealth(), null, 2));\n  } else {\n    res.writeHead(404);\n    res.end(\"Not found\");\n  }\n}).listen(3000, function() {\n  console.log(\"Health endpoint: http://localhost:3000/health\");\n});",
      "description": "The OS module is ideal for system monitoring. This health check endpoint provides CPU, memory, uptime, and load information for operational dashboards and auto-scaling decisions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How do you get the number of logical CPU cores?",
      "options": [
        "os.arch()",
        "os.cpus().length",
        "os.totalmem()",
        "os.platform()"
      ],
      "answer": 1,
      "explanation": "os.cpus().length returns the number of logical CPU cores. Use this for cluster worker count or thread pool sizing."
    },
    {
      "question": "What does os.platform() return for Windows?",
      "options": [
        "\"windows\"",
        "\"win\"",
        "\"win32\"",
        "\"Windows_NT\""
      ],
      "answer": 2,
      "explanation": "os.platform() returns \"win32\" for Windows. os.type() returns \"Windows_NT\". platform() is used for conditional OS-specific code."
    },
    {
      "question": "How do you get the system temp directory?",
      "options": [
        "os.homedir()",
        "os.tmpdir()",
        "os.userInfo().tmpdir",
        "process.env.TEMP"
      ],
      "answer": 1,
      "explanation": "os.tmpdir() returns the system temp directory. It checks TMPDIR, TMP, TEMP env vars and falls back to the platform default."
    },
    {
      "question": "What is os.EOL on POSIX systems?",
      "options": [
        "\"\\r\\n\"",
        "\"\\n\"",
        "\"\\r\"",
        "\"0x0D0A\""
      ],
      "answer": 1,
      "explanation": "os.EOL is \"\n\" on POSIX (Linux/Mac) and \"\r\n\" on Windows. Use it for cross-platform file writing."
    },
    {
      "question": "Which method returns the local IP addresses?",
      "options": [
        "os.hostname()",
        "os.networkInterfaces()",
        "os.cpus()",
        "os.userInfo()"
      ],
      "answer": 1,
      "explanation": "os.networkInterfaces() returns an object with network interface names and their address details (IP, netmask, MAC, family)."
    },
    {
      "question": "What is the difference between os.uptime() and process.uptime()?",
      "options": [
        "They return the same value",
        "os.uptime() is system uptime, process.uptime() is process uptime",
        "process.uptime() returns milliseconds",
        "os.uptime() only works on Linux"
      ],
      "answer": 1,
      "explanation": "os.uptime() returns how long the OS has been running. process.uptime() returns how long the current Node.js process has been running."
    }
  ]
};
