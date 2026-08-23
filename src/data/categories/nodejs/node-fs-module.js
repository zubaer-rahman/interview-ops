export const node_fs_module = {
  "id": "node-fs-module",
  "title": "Node.js File System Module",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "The fs module provides an API for interacting with the file system, including reading, writing, deleting, renaming files, and working with directories.",
    "fs operations come in three flavors: synchronous (fs.readFileSync), callback-based async (fs.readFile), and promise-based async (fs.promises.readFile).",
    "The module supports file descriptors, streams for large files, file watching, permission changes, symbolic links, and file metadata (stats).",
    "All async fs operations are delegated to libuv's thread pool, making them non-blocking but not truly asynchronous at the OS level for all operations."
  ],
  "laymanDefinition": "The File System (fs) module is Node.js's built-in toolkit for working with files and folders on your computer. Think of it as having a personal assistant who can: read any file and give you its contents (fs.readFile), write new files or overwrite existing ones (fs.writeFile), create/delete/move folders (fs.mkdir, fs.rmdir, fs.rename), tell you information about a file like size and creation date (fs.stat), and even watch files for changes and alert you when they are modified (fs.watch). Every operation comes in three styles: \"do it now and wait\" (Sync suffix), \"do it and tell me when done\" (callback), and \"do it and give me a promise\" (promises API).",
  "deepDive": [
    {
      "heading": "File Reading and Writing",
      "text": "Three approaches to file I/O: (1) fs.readFile(path, options, callback) - reads entire file into memory as Buffer/string. Best for small files (<50MB). Options: encoding (utf8, base64, etc.), flag (r, w, a, r+). (2) fs.createReadStream(path, options) - uses streams for large files. Options: highWaterMark (chunk size), start/end (byte range). (3) fs.read(fd, buffer, offset, length, position, callback) - low-level read from file descriptor. For writing: fs.writeFile (overwrite), fs.appendFile (append), fs.createWriteStream (streaming), fs.write (low-level descriptor). Important: writeFile replaces the file entirely. appendFile adds to the end. For atomic writes: write to a temp file, then fs.rename to the target. rename is atomic on the same filesystem."
    },
    {
      "heading": "File Descriptors and Low-Level Operations",
      "text": "File descriptors (fd) are integer handles that represent open files. The OS limits open file descriptors per process (ulimit -n, default 256-1024). fs.open(path, flags, mode, callback) returns an fd. Common flags: \"r\" (read), \"w\" (write, creates/truncates), \"a\" (append, creates), \"r+\" (read+write, no truncate), \"wx\" (write, fails if exists). Low-level operations: fs.read(fd, buffer, offset, length, position, callback), fs.write(fd, buffer, offset, length, position, callback), fs.ftruncate(fd, len), fs.fsync(fd, callback), fs.fstat(fd, callback). Always close file descriptors with fs.close(fd) when done. Leaking fds causes EMFILE errors. The default file mode is 0o666 (read/write for all), modified by umask."
    },
    {
      "heading": "File System Operations: Directories, Links, Permissions",
      "text": "(1) Directories: fs.mkdir(path, { recursive: true }) - creates directory tree. fs.readdir(path, { withFileTypes: true }) - lists entries with type info (file/directory/symlink). fs.rmdir(path, { recursive: true }) - removes directory. fs.mkdtemp(prefix) - creates temporary directory. (2) Links: fs.symlink(target, path, type) - symbolic link (type: \"file\", \"dir\", \"junction\"). fs.link(existing, new) - hard link. fs.readlink(path) - reads link target. (3) Permissions: fs.chmod(path, mode) - change permissions. fs.chown(path, uid, gid) - change ownership. fs.access(path, mode) - check accessibility (F_OK, R_OK, W_OK, X_OK). (4) File types: fs.stat(path) - file/directory info. fs.lstat(path) - stats without following symlinks. fs.statSync - synchronous version."
    },
    {
      "heading": "File Watching and Change Detection",
      "text": "fs.watch(filename, options, listener) - watches for file changes using OS-native mechanisms. Options: persistent (keep process alive), recursive (watch subdirectories), encoding. Limitations: (1) Not guaranteed to work on all platforms. (2) The event type (\"change\", \"rename\") may be unreliable. (3) On some platforms, the same event fires multiple times. (4) Does not provide the changed content (use fs.watchFile for that). fs.watchFile(filename, options, listener) - polls file stats at intervals (default 5007ms). More reliable but less efficient. fs.watch is preferred for performance. For production file watching: use third-party libraries (chokidar) that handle cross-platform inconsistencies. Node.js 19+ stable recursive watching on all platforms."
    },
    {
      "heading": "fs Promises API and Best Practices",
      "text": "The fs.promises API (require(\"fs/promises\")) provides promise-based alternatives: (1) fs.promises.readFile(path, options) - returns Promise<Buffer|string>. (2) fs.promises.writeFile(path, data) - returns Promise<void>. (3) fs.promises.stat(path) - returns Promise<Stats>. (4) fs.promises.readdir(path) - returns Promise<string[]>. (5) fs.promises.mkdir(path, options) - returns Promise<void>. (6) fs.promises.unlink(path) - returns Promise<void>. (7) fs.promises.rm(path, options) - removes file/directory (Node 14+). (8) fs.promises.copyFile(src, dest, mode) - copies file. (9) fs.promises.realpath(path) - resolves symlinks. Best practices: (1) Always use async/promises API, never Sync in server code. (2) Handle ENOENT (file not found) errors gracefully. (3) Use streams for files > 50MB. (4) Use path.join() for cross-platform paths. (5) Use fs.constants for flags and modes. (6) Catch EEXIST errors in mkdir race conditions. (7) Prefer fs.promises for modern code."
    }
  ],
  "interviewAnswer": "The fs module provides file system operations in three styles: synchronous (Sync suffix, blocks event loop), callback-based async (delegated to libuv thread pool), and promise-based (fs.promises, modern approach). Key operations: readFile, writeFile, appendFile (high-level), read/write streams (large files), open/read/write/close (low-level descriptors). Directory ops: mkdir({ recursive: true }), readdir, rmdir. File info: stat, lstat. Watching: fs.watch (native), fs.watchFile (polling). Critical: always close file descriptors, handle ENOENT/EEXIST errors, use async API in production, use streams for large files. Atomic writes via write to temp + rename. fs.constants provides flags and permission constants.",
  "interviewQuestions": [
    {
      "question": "What are the three styles of fs operations?",
      "answer": "Synchronous (Sync suffix, blocks event loop), Callback-based async (thread pool, standard), Promise-based (fs.promises, modern async). Use async/promises in production code; use Sync only in CLI scripts or startup code."
    },
    {
      "question": "What is the difference between readFile and createReadStream?",
      "answer": "readFile loads the entire file into memory (Buffer/string). createReadStream reads in chunks (streams). Use readFile for small files (<50MB). Use createReadStream for large files to avoid memory exhaustion and enable early processing."
    },
    {
      "question": "How do you handle file not found errors?",
      "answer": "Check error.code === \"ENOENT\". Do not assume the file exists - race conditions exist (TOCTOU). Use fs.access() to check existence before operations, but handle errors anyway as the file may be deleted between check and operation."
    },
    {
      "question": "What are file descriptors and why must they be closed?",
      "answer": "File descriptors (fd) are integer handles for open files. The OS limits open fds per process (ulimit -n). Leaking fds causes EMFILE: \"too many open files\". Always close fds with fs.close(fd) in a finally block or use the 'wx' flag to avoid race conditions."
    },
    {
      "question": "How do you create nested directories?",
      "answer": "fs.mkdir(path, { recursive: true }) creates the entire directory tree. Without recursive: true, mkdir fails if parent directories do not exist. Before Node 10, you needed mkdirp or manual recursion."
    },
    {
      "question": "What does fs.stat() return and what can you check?",
      "answer": "fs.stat() returns a Stats object with: isFile(), isDirectory(), isSymbolicLink(), size, birthtime (creation), mtime (modification), atime (access), ctime (status change), mode (permissions), uid/gid. Stats also has blocks, blksize, ino, dev, nlink."
    },
    {
      "question": "How do you perform an atomic file write?",
      "answer": "Write to a temporary file, then fs.rename(tempPath, targetPath). rename is atomic on the same filesystem. This prevents partial writes: if the process crashes during write, the temporary file is discarded and the original remains intact."
    },
    {
      "question": "What is the difference between fs.watch and fs.watchFile?",
      "answer": "fs.watch uses OS-native file change notifications (inotify, FSEvents, ReadDirectoryChangesW). More efficient but platform-inconsistent. fs.watchFile polls file stats at intervals (default 5007ms). More reliable but CPU-intensive. Prefer fs.watch for performance."
    },
    {
      "question": "What are the common flag options for fs.open?",
      "answer": "\"r\" (read, default), \"w\" (write, creates/truncates), \"a\" (append, creates), \"r+\" (read+write), \"w+\" (read+write, truncates), \"a+\" (read+append), \"wx\" (write, fails if exists - exclusive). The \"x\" flag prevents overwriting existing files."
    },
    {
      "question": "How does the promises API differ from the callback API?",
      "answer": "fs.promises imports from \"fs/promises\". All methods return Promises instead of accepting callbacks. Methods have the same signatures (minus callback). Supports async/await. fs.promises.readFile(\"file\", \"utf8\") returns Promise<string>."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Node.js File System Module</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">fs.readFile / writeFile</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">High-level file ops</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">fs.createReadStream / createWriteStream</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stream-based file ops</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">fs.open / read / write / close</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Low-level file descriptor ops</text><rect x=\"30\" y=\"235\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"251\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">fs.watch / fs.stat / fs.mkdir</text><text x=\"130\" y=\"274\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Directory, watch, metadata ops</text><text x=\"250\" y=\"78\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Small files, entire content in memory</text><text x=\"250\" y=\"138\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Large files, chunk-by-chunk, backpressure</text><text x=\"250\" y=\"198\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Fine-grained control, manual buffer management</text><text x=\"250\" y=\"258\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Directory operations, file watching, stats/permiss</text><text x=\"250\" y=\"271\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">ions</text></svg>",
  "codeExamples": [
    {
      "title": "Reading and Writing Files with Callbacks",
      "useCase": "Basic async file operations",
      "code": "var fs = require(\"fs\");\n\n// Read file\nfs.readFile(\"config.json\", \"utf8\", function(err, data) {\n  if (err) {\n    console.error(\"Read error:\", err.message);\n    return;\n  }\n  console.log(\"Config loaded:\", data);\n});\n\n// Write file (overwrites if exists)\nfs.writeFile(\"output.txt\", \"Hello, Node.js!\", \"utf8\", function(err) {\n  if (err) {\n    console.error(\"Write error:\", err.message);\n    return;\n  }\n  console.log(\"File written successfully\");\n});\n\n// Append to file\nfs.appendFile(\"log.txt\", new Date().toISOString() + \"\\n\", function(err) {\n  if (err) console.error(\"Append error:\", err.message);\n});",
      "description": "Callback-based fs operations. Always check err parameter. readFile loads entire file into memory. writeFile overwrites completely. appendFile adds to the end."
    },
    {
      "title": "fs Promises API with async/await",
      "useCase": "Modern promise-based file operations",
      "code": "var fs = require(\"fs/promises\");\n\nasync function fileOperations() {\n  try {\n    // Read file\n    var data = await fs.readFile(\"config.json\", \"utf8\");\n    console.log(\"Config:\", data);\n\n    // Parse and modify\n    var config = JSON.parse(data);\n    config.lastUpdated = new Date().toISOString();\n\n    // Write back\n    await fs.writeFile(\"config.json\", JSON.stringify(config, null, 2), \"utf8\");\n    console.log(\"Config updated\");\n\n    // Copy file\n    await fs.copyFile(\"config.json\", \"config.backup.json\");\n    console.log(\"Backup created\");\n\n    // Get file stats\n    var stats = await fs.stat(\"config.json\");\n    console.log(\"Size:\", stats.size, \"bytes\");\n    console.log(\"Modified:\", stats.mtime);\n  } catch (err) {\n    console.error(\"Operation failed:\", err.message);\n  }\n}\n\nfileOperations();",
      "description": "fs/promises provides all fs operations as promise-based functions. async/await makes sequential file operations readable. try/catch handles all errors. copyFile is an efficient file copy operation."
    },
    {
      "title": "Streaming Large File Processing",
      "useCase": "Process a large file line by line without loading it entirely",
      "code": "var fs = require(\"fs\");\nvar readline = require(\"readline\");\n\nvar rl = readline.createInterface({\n  input: fs.createReadStream(\"large-file.txt\"),\n  crlfDelay: Infinity\n});\n\nvar lineCount = 0;\nrl.on(\"line\", function(line) {\n  lineCount++;\n  // Process each line (no memory accumulation)\n});\n\nrl.on(\"close\", function() {\n  console.log(\"Processed \" + lineCount + \" lines\");\n});\n\n// For binary files: use stream directly\nvar readStream = fs.createReadStream(\"large-file.bin\", {\n  highWaterMark: 65536  // 64KB chunks\n});\n\nreadStream.on(\"data\", function(chunk) {\n  // Process binary chunk\n  console.log(\"Received\", chunk.length, \"bytes\");\n});\n\nreadStream.on(\"end\", function() {\n  console.log(\"File read complete\");\n});",
      "description": "fs.createReadStream + readline processes large text files line-by-line without loading the entire file. The highWaterMark controls chunk size (default 64KB). Always use streams for files > 50MB."
    },
    {
      "title": "Directory Operations and File Traversal",
      "useCase": "Navigate and manipulate directory structures",
      "code": "var fs = require(\"fs\");\nvar path = require(\"path\");\n\n// Create nested directories\nfs.mkdir(\"data/logs/2024\", { recursive: true }, function(err) {\n  if (err && err.code !== \"EEXIST\") {\n    console.error(\"Mkdir error:\", err.message);\n    return;\n  }\n  console.log(\"Directory created\");\n});\n\n// List directory contents with types\nfs.readdir(__dirname, { withFileTypes: true }, function(err, entries) {\n  if (err) { console.error(err); return; }\n  entries.forEach(function(entry) {\n    var type = entry.isDirectory() ? \"dir\" : \"file\";\n    console.log(\"[\" + type + \"] \" + entry.name);\n  });\n});\n\n// Check if file exists and get info\nfs.stat(\"config.json\", function(err, stats) {\n  if (err) { console.error(\"Not found\"); return; }\n  console.log(\"Size:\", stats.size);\n  console.log(\"File:\", stats.isFile());\n  console.log(\"Directory:\", stats.isDirectory());\n  console.log(\"Permissions:\", stats.mode.toString(8));\n});",
      "description": "recursive: true creates the entire directory tree. withFileTypes: true in readDir provides file type info without extra stat calls. fs.stat provides detailed file metadata. Handle EEXIST errors for concurrent mkdir calls."
    },
    {
      "title": "File Watching and Atomic Writes",
      "useCase": "Watch for changes and perform safe writes",
      "code": "var fs = require(\"fs\");\nvar path = require(\"path\");\n\n// Watch a file for changes\nfs.watch(\"config.json\", function(eventType, filename) {\n  console.log(\"File changed:\", eventType, filename);\n  fs.readFile(\"config.json\", \"utf8\", function(err, data) {\n    if (err) { console.error(\"Read error:\", err.message); return; }\n    try {\n      var config = JSON.parse(data);\n      console.log(\"New config:\", config);\n    } catch (e) {\n      console.error(\"Invalid JSON\");\n    }\n  });\n});\n\n// Atomic write pattern\nfunction safeWriteFile(filePath, data, callback) {\n  var tmpPath = filePath + \".tmp.\" + process.pid;\n  fs.writeFile(tmpPath, data, function(err) {\n    if (err) { callback(err); return; }\n    fs.rename(tmpPath, filePath, function(err) {\n      if (err) { fs.unlink(tmpPath, function() {}); callback(err); return; }\n      callback(null);\n    });\n});\n}\n\nsafeWriteFile(\"data.json\", JSON.stringify({ key: \"value\" }), function(err) {\n  if (err) console.error(\"Write failed:\", err.message);\n  else console.log(\"Atomic write complete\");\n});",
      "description": "fs.watch uses native OS notifications. Atomic writes use a temp file + rename to prevent corruption. If the process crashes during writeFile, the temp file is discarded and the original remains intact."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which fs API should you use for files > 50MB?",
      "options": [
        "fs.readFile",
        "fs.createReadStream",
        "fs.readSync",
        "fs.promises.readFile"
      ],
      "answer": 1,
      "explanation": "Use createReadStream for large files to avoid loading the entire file into memory. Streams process data in chunks."
    },
    {
      "question": "How do you create nested directories safely?",
      "options": [
        "fs.mkdirSync nested",
        "fs.mkdir with recursive: true",
        "fs.mkdtemp",
        "Multiple fs.mkdir calls"
      ],
      "answer": 1,
      "explanation": "mkdir({ recursive: true }) creates the entire directory tree. It does not error if the directory already exists."
    },
    {
      "question": "What error code indicates a file was not found?",
      "options": [
        "EACCES",
        "ENOENT",
        "EEXIST",
        "EMFILE"
      ],
      "answer": 1,
      "explanation": "ENOENT = \"Error NO ENTity\" - file or directory not found. EACCES = permission denied. EEXIST = already exists. EMFILE = too many open files."
    },
    {
      "question": "What is the recommended way to perform atomic file writes?",
      "options": [
        "Write directly to target path",
        "Write to temp file, then rename",
        "Use fs.writeFileSync",
        "Use fs.appendFile"
      ],
      "answer": 1,
      "explanation": "Write to a temp file, then fs.rename to the target. rename is atomic on the same filesystem, preventing partial/corrupt writes."
    },
    {
      "question": "Which method returns file type information (isFile, isDirectory)?",
      "options": [
        "fs.readdir",
        "fs.stat",
        "fs.open",
        "fs.links"
      ],
      "answer": 1,
      "explanation": "fs.stat() returns a Stats object with isFile(), isDirectory(), isSymbolicLink(), size, mtime, and other metadata."
    },
    {
      "question": "What is the difference between fs.watch and fs.watchFile?",
      "options": [
        "They are the same",
        "fs.watch uses OS notifications, fs.watchFile uses polling",
        "fs.watch is for directories only",
        "fs.watchFile is faster"
      ],
      "answer": 1,
      "explanation": "fs.watch uses native OS file change notifications (e.g., inotify). fs.watchFile polls file stats at intervals (default 5007ms)."
    }
  ]
};
