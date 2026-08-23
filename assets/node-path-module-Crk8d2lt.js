const e={id:"node-path-module",title:"Node.js Path Module",difficulty:"beginner",estimatedMinutes:15,tldr:["The path module provides utilities for working with file and directory paths in a cross-platform way, handling differences between POSIX (/) and Windows (\\) path separators.","Key functions: path.join(), path.resolve(), path.parse(), path.format(), path.basename(), path.dirname(), path.extname(), and path.relative().","path.join() concatenates path segments using the platform-specific separator. path.resolve() resolves a sequence of paths to an absolute path.","The path module does NOT check whether a path actually exists - it only performs string manipulation on path strings."],laymanDefinition:"The Path module is like a GPS for file locations on your computer. Different operating systems use different formats for file paths - Windows uses backslashes (C:\\Users\\Name) while Mac/Linux use forward slashes (/home/user). The Path module handles these differences automatically so your code works everywhere without modification. It can join path pieces together correctly (path.join), find the file name from a full path (path.basename), extract the file extension (path.extname), figure out the parent directory (path.dirname), and convert relative paths to absolute ones (path.resolve).",deepDive:[{heading:"Path Joining and Resolution",text:'path.join([...paths]) - joins all segments with the platform separator, normalizes the result. path.resolve([...paths]) - resolves to an absolute path. If the first segment starts with /, it is treated as root. If no absolute path is produced, the current working directory is prepended. path.resolve() does NOT check if the path exists - it only performs string manipulation. Key difference: path.join("a", "b", "..", "c") => "a/c". path.resolve("a", "b", "..", "c") => "/current/working/dir/a/c". path.resolve("/a", "b", "c") => "/a/b/c". path.normalize(path) - resolves . and .. segments. path.isAbsolute(path) - returns true if the path is absolute. path.relative(from, to) - returns the relative path from "from" to "to".'},{heading:"Path Parsing and Formatting",text:'path.parse(path) - returns an object with: root (root directory, e.g., "/" or "C:\\"), dir (directory path), base (file name + extension), name (file name without extension), ext (file extension). path.format(pathObject) - reverses parse(), takes a path object and returns a string. Properties: dir (preferred), root, base (preferred), name, ext. If dir is provided, root is ignored. If base is provided, name and ext are ignored. path.sep - platform path separator: "/" on POSIX, "\\" on Windows. path.delimiter - platform path delimiter: ":" on POSIX, ";" on Windows (used in PATH environment variable). path.win32 and path.posix - platform-specific implementations accessible regardless of the current platform.'},{heading:"Common Path Operations",text:'(1) Extract directory: path.dirname("/user/docs/file.txt") => "/user/docs". (2) Extract file name: path.basename("/user/docs/file.txt") => "file.txt", path.basename("/user/docs/file.txt", ".txt") => "file". (3) Extract extension: path.extname("/user/docs/file.txt") => ".txt", path.extname("/user/docs/archive.tar.gz") => ".gz", path.extname("/user/docs/") => "" (trailing slash), path.extname("/user/docs/.gitignore") => "" (hidden file without extension). (4) Get relative path: path.relative("/user/docs", "/user/docs/tasks/file.txt") => "tasks/file.txt". (5) Check absolute: path.isAbsolute("/foo") => true, path.isAbsolute("foo") => false. (6) Normalize: path.normalize("foo/bar/..\\baz") => "foo\\baz" (on Windows).'},{heading:"Cross-Platform Path Handling Strategies",text:'(1) Always use path.join() or path.resolve() instead of string concatenation with "/" or "\\". (2) Use path.sep and path.delimiter for splitting path lists. (3) For web URLs (which always use /), use path.posix methods: path.posix.join("a", "b"). (4) In package.json scripts, use cross-env for environment variables. (5) For import/require paths, Node.js accepts both separators, but prefer forward slashes for consistency. (6) Use path.win32 and path.posix explicitly for platform-independent parsing. (7) The URL class and file:// protocol use forward slashes - use url.pathToFileURL and url.fileURLToPath for conversion. (8) Beware: Windows paths can have drive letters (C:) and UNC paths (\\\\server\\share). path.parse handles these correctly.'},{heading:"Path Module Performance and Best Practices",text:'(1) Path operations are pure string operations - they are very fast (sub-microsecond). (2) Cache resolved paths when used repeatedly. (3) For URL paths (HTTP routing), use the URL API, not path.join. (4) Use path.resolve over path.join when you need an absolute path. (5) Avoid __dirname concatenation - use path.join(__dirname, "relative/path") instead. (6) For temporary files, use the os.tmpdir() or fs.mkdtemp() with path.join. (7) Node.js 20+ added path.matchesGlob(pattern) for glob matching. (8) For configurable paths, accept both relative and absolute inputs and normalize with path.resolve. (9) The path.format() method is useful for programmatic path construction. (10) Always handle user-provided paths carefully to prevent path traversal attacks: filter .. segments and null bytes.'}],interviewAnswer:'The path module provides cross-platform path manipulation. path.join() concatenates segments with platform separator. path.resolve() returns absolute paths (prepends cwd if needed). path.parse() decomposes a path into root/dir/base/name/ext. path.format() reverses it. Key properties: path.sep (separator: / or \\), path.delimiter (PATH delimiter: : or ;). Use path.join(__dirname, "file") instead of string concatenation. path.isAbsolute() checks absolute paths. path.relative() computes relative paths between two absolute paths. Path operations are pure string manipulation (no filesystem access). For URLs, use URL API or path.posix for forward-slash paths.',interviewQuestions:[{question:"What is the difference between path.join() and path.resolve()?",answer:"path.join() concatenates segments with the platform separator and normalizes. path.resolve() resolves to an absolute path, prepending the current working directory if the result is not absolute. resolve treats segments starting with / as absolute roots."},{question:"How do you extract the file name without extension from a path?",answer:'path.basename("/a/b/file.txt", path.extname("/a/b/file.txt")) returns "file". Or path.parse("/a/b/file.txt").name returns "file". path.basename(path) returns "file.txt" (with extension).'},{question:"What does path.parse() return?",answer:'An object with: root (root dir), dir (directory), base (file + ext), name (file only), ext (extension). Example: path.parse("/user/docs/file.txt") => { root: "/", dir: "/user/docs", base: "file.txt", name: "file", ext: ".txt" }.'},{question:"What are path.sep and path.delimiter?",answer:'path.sep is the platform path separator: "/" on POSIX, "\\" on Windows. path.delimiter is the PATH environment variable separator: ":" on POSIX, ";" on Windows.'},{question:"How do you convert a file path to a file:// URL?",answer:"Use url.pathToFileURL(path) - returns a URL object. Use url.fileURLToPath(url) to convert back. The URL module handles proper encoding of special characters and forward slashes."},{question:"How does path.resolve() handle arguments starting with /?",answer:'If an argument starts with / (or a drive letter on Windows), it becomes the new root. Subsequent segments are resolved relative to that root. Earlier segments are discarded. path.resolve("/a", "b") => "/a/b". path.resolve("/a", "/b", "c") => "/b/c".'},{question:"What is the difference between path.dirname() and path.basename()?",answer:'path.dirname() returns the directory path (everything except the last segment). path.basename() returns the last segment (file or directory name). path.dirname("/a/b/c.txt") => "/a/b". path.basename("/a/b/c.txt") => "c.txt".'},{question:"How do you get a relative path between two absolute paths?",answer:'path.relative(from, to) returns the relative path from "from" to "to". path.relative("/data/docs", "/data/images/photo.jpg") => "../images/photo.jpg". Both arguments should be absolute paths.'},{question:"What is path.normalize() used for?",answer:'path.normalize() resolves . and .. segments and adjusts separators to the platform default. path.normalize("/foo/bar/../baz//qux") => "/foo/baz/qux". It does not check if the path exists.'},{question:"How do you prevent path traversal security issues?",answer:"(1) Use path.resolve() and check the result starts with an allowed directory. (2) Path traversal uses ../ to escape. path.resolve(userInput) may resolve outside the intended directory. (3) Use path.basename() to strip directory components from user-provided filenames. (4) Never concatenate user input directly into path strings."}],diagramSvg:'<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="720" height="260" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Path Module Operations</text><rect x="30" y="55" width="200" height="45" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">path.join()</text><text x="130" y="94" text-anchor="middle" font-size="9" fill="#ddd">Concatenate segments</text><rect x="30" y="115" width="200" height="45" rx="5" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="130" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">path.resolve()</text><text x="130" y="154" text-anchor="middle" font-size="9" fill="#ddd">Absolute path resolution</text><rect x="30" y="175" width="200" height="45" rx="5" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="130" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">path.parse() / format()</text><text x="130" y="214" text-anchor="middle" font-size="9" fill="#ddd">Decompose/compose paths</text><rect x="30" y="218" width="200" height="42" rx="5" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="130" y="234" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">path.relative()</text><text x="130" y="254" text-anchor="middle" font-size="9" fill="#ddd">Relative path between two</text></svg>',codeExamples:[{title:"Path Joining and Resolution Examples",useCase:"Understand the difference between join and resolve",code:`var path = require("path");

// path.join - simple concatenation with normalization
console.log(path.join("usr", "local", "bin"));
// POSIX: "usr/local/bin", Windows: "usr\\local\\bin"

console.log(path.join("/base", "..", "other", ".", "file.txt"));
// "/base/../other/./file.txt" → "/other/file.txt"

// path.resolve - produces absolute paths
console.log(path.resolve("a", "b"));
// "/current/working/dir/a/b"

console.log(path.resolve("/absolute", "b", "c"));
// "/absolute/b/c"  (leading / resets to root)

console.log(path.resolve(".."));
// "/current/working" (parent of cwd)

// Check if absolute
console.log(path.isAbsolute("/foo")); // true
console.log(path.isAbsolute("foo")); // false
console.log(path.isAbsolute("C:\\foo")); // true (Windows)`,description:"join concatenates; resolve makes absolute. resolve prepends cwd for relative paths. Leading / resets the resolution root. isAbsolute checks for leading / or drive letter."},{title:"Parsing and Formatting Paths",useCase:"Extract and construct path components",code:`var path = require("path");

// Parse a full path into components
var parsed = path.parse("/user/docs/projects/app.js");
console.log("root:", parsed.root);  // "/"
console.log("dir:", parsed.dir);    // "/user/docs/projects"
console.log("base:", parsed.base);  // "app.js"
console.log("name:", parsed.name);  // "app"
console.log("ext:", parsed.ext);    // ".js"

// Format path object back to string
var obj = {
  dir: "/home/user",
  base: "readme.md"
};
console.log(path.format(obj)); // "/home/user/readme.md"

// Using dir vs root (dir takes precedence)
var obj2 = {
  root: "/ignored",
  dir: "/used",
  base: "file.txt"
};
console.log(path.format(obj2)); // "/used/file.txt"

// Using base vs name+ext (base takes precedence)
var obj3 = {
  dir: "/docs",
  name: "archive",
  ext: ".tar.gz"
};
console.log(path.format(obj3)); // "/docs/archive.tar.gz"`,description:"path.parse() decomposes a path into root/dir/base/name/ext. path.format() builds a path string from components. dir takes precedence over root. base takes precedence over name+ext."},{title:"Cross-Platform Path Building",useCase:"Write path code that works everywhere",code:`var path = require("path");

// BAD: hardcoded separator - fails on Windows
var badPath = __dirname + "/data/config.json";

// GOOD: use path.join
var goodPath = path.join(__dirname, "data", "config.json");

// Accessing platform-specific implementations
console.log("POSIX sep:", path.posix.sep);    // "/"
console.log("POSIX join:", path.posix.join("a", "b")); // "a/b"
console.log("Win32 sep:", path.win32.sep);    // "\\"
console.log("Win32 join:", path.win32.join("a", "b")); // "a\\b"

// URL paths always use forward slashes
var urlPath = path.posix.join("/api", "v2", "users", "123");
console.log("URL path:", urlPath); // "/api/v2/users/123"

// Using path.delimiter for PATH parsing
var envPath = process.env.PATH || "";
var dirs = envPath.split(path.delimiter);
console.log("PATH directories:", dirs.length);

// Safe relative path construction
var relativePath = path.relative(
  "/home/user/docs",
  "/home/user/docs/projects/file.txt"
);
console.log("Relative:", relativePath); // "projects/file.txt"`,description:"Always use path methods over string concatenation for cross-platform compatibility. path.posix and path.win32 provide platform-specific operations regardless of the current OS. path.delimiter handles PATH variable splitting."},{title:"File Extension and Name Manipulation",useCase:"Work with file extensions and base names",code:`var path = require("path");

var files = [
  "/docs/report.pdf",
  "/images/photo.jpg",
  "/archive/backup.tar.gz",
  "/config/.env",
  "/projects/app.",
  "noExtension",
  "/dir/",
];

files.forEach(function(file) {
  console.log("File: " + file);
  console.log("  basename:", path.basename(file));
  console.log("  extname:", path.extname(file));
  console.log("  dirname:", path.dirname(file));
  console.log("  name:", path.basename(file, path.extname(file)));
  console.log("---");
});

// Change file extension
function changeExt(filePath, newExt) {
  var dir = path.dirname(filePath);
  var name = path.basename(filePath, path.extname(filePath));
  return path.join(dir, name + newExt);
}

console.log(changeExt("/docs/report.pdf", ".html"));
// "/docs/report.html"

console.log(changeExt("/archive/backup.tar.gz", ".zip"));
// "/archive/backup.zip" (only last extension removed)`,description:"path.extname() returns the last extension (.gz for .tar.gz). path.basename(file, ext) strips the extension. path.dirname gets the parent directory. The changeExt function demonstrates extension replacement."},{title:"Security: Path Traversal Prevention",useCase:"Protect against directory traversal attacks",code:`var path = require("path");

var ALLOWED_DIR = "/var/app/data";

// UNSAFE: Direct user input concatenation
function unsafeResolve(userInput) {
  return path.join(ALLOWED_DIR, userInput);
}

// SAFE: Resolve and verify
function safeResolve(userInput) {
  // Remove null bytes
  userInput = userInput.replace(/\\0/g, "");

  // Resolve to absolute path
  var resolved = path.resolve(ALLOWED_DIR, userInput);

  // Verify it starts with the allowed directory
  if (!resolved.startsWith(ALLOWED_DIR)) {
    throw new Error("Path traversal detected");
  }

  return resolved;
}

// Demonstration
try {
  console.log(safeResolve("user/file.txt"));
  // OK: /var/app/data/user/file.txt

  console.log(safeResolve("../../etc/passwd"));
  // Error: Path traversal detected
} catch (err) {
  console.error("Security:", err.message);
}

// Alternative: strip directory components
function safeBasename(userFilename) {
  return path.basename(userFilename);
}

console.log(safeBasename("../../../etc/passwd")); // "passwd"
console.log(safeBasename("safe.txt")); // "safe.txt"`,description:"Path traversal attacks use ../ to escape the intended directory. Always resolve and verify the result starts with the allowed directory. path.basename() strips directory components from filenames. Null byte injection (%00) must be sanitized."}],mcqQuestions:[{question:"What is the difference between path.join() and path.resolve()?",options:["Both are identical","join concatenates, resolve makes absolute","join normalizes, resolve joins","join is async, resolve is sync"],answer:1,explanation:"join() concatenates path segments. resolve() returns an absolute path, prepending cwd if needed."},{question:'What does path.parse("/a/b.txt").name return?',options:['"a"','"b"','"b.txt"','"txt"'],answer:1,explanation:'path.parse("/a/b.txt").name returns "b" (file name without extension). .base returns "b.txt". .ext returns ".txt".'},{question:"What is path.sep on Windows?",options:['":"','"\\\\"','"/"','";"'],answer:1,explanation:'path.sep is "\\" on Windows and "/" on POSIX. path.delimiter is ";" on Windows and ":" on POSIX.'},{question:"Which method removes the last file extension?",options:["path.extname()","path.basename(file, ext)","path.parse().name","path.dirname()"],answer:1,explanation:"path.basename(file, path.extname(file)) returns the file name without extension. parse().name also works."},{question:"Does path.resolve() access the filesystem?",options:["Yes, it checks if path exists","No, it only manipulates strings","It depends on the platform","It creates the path if missing"],answer:1,explanation:"path operations are pure string manipulation. They do not access the filesystem. Use fs.realpath or fs.exists if filesystem access is needed."},{question:"How do you prevent path traversal attacks?",options:["Use path.join()","Resolve and verify result starts with allowed dir","Use path.basename()","All of the above"],answer:3,explanation:"All three techniques are valid: join prevents some cases, resolve+startsWith verifies boundaries, basename strips directory components."}]};export{e as node_path_module};
