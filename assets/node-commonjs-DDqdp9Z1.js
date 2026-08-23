const e={id:"node-commonjs",title:"Node.js CommonJS Modules",difficulty:"intermediate",estimatedMinutes:20,tldr:["CommonJS (CJS) is the original module system for Node.js, using require() to import modules and module.exports to export values.","Modules are loaded synchronously and cached after the first require() call. Subsequent require() calls return the cached module.exports.","module.exports and exports refer to the same object initially, but reassigning exports breaks the reference.","The require resolution algorithm: built-in modules → relative paths → node_modules → global paths (NODE_PATH)."],laymanDefinition:'CommonJS is the default packaging system for Node.js. Think of it like a library catalog system. When you write code, you can put your functions in one file (a "module") and say "this is what I want to share" using module.exports. Then another file can say "I need that" using require("./my-module"). Node.js remembers which modules it has loaded (caching), so if two files require the same module, they get the same copy - like checking out the same book from the library instead of buying two copies. The require function searches for modules in a specific order: first built-in Node.js modules, then files on your computer, then packages in node_modules.',deepDive:[{heading:"module.exports and exports Object",text:'module.exports is the actual object returned by require(). exports is a shorthand reference to module.exports. Initially: exports === module.exports is true. Reassignment breaks: (1) module.exports = { foo: "bar" } - works, replaces the export object. (2) exports.foo = "bar" - works, adds property. (3) exports = { foo: "bar" } - does NOT work, breaks the reference. The module.exports is returned regardless of what exports points to. Common patterns: (1) Adding properties: exports.fn = function() {}. (2) Replacing: module.exports = function() {}. (3) Multiple exports: module.exports = { ClassA, ClassB }. (4) Singleton: module.exports = new Instance(). exports is safer to use {}. method is better for exporting multiple named values.'},{heading:"The require() Function and Module Resolution",text:'require(id) resolves using this algorithm: (1) Built-in modules (fs, http, path) - checked first. (2) Relative paths starting with ./ or ../ - resolved relative to __dirname of the calling file. Tries extensions: .js, .json, .node. (3) Absolute paths starting with /. (4) node_modules lookup - walks up the directory tree checking each node_modules folder. (5) Global NODE_PATH directories. require.resolve(id) returns the resolved file path without loading the module. require.cache - an object containing all cached modules, keyed by resolved filename. Delete a cached module: delete require.cache[require.resolve("./module")]. This forces re-evaluation on the next require (useful for hot reloading). require.main - the Module object representing the entry script. require.extensions - deprecated, used to add custom file type handlers.'},{heading:"Module Caching and the Module Object",text:'Node.js caches modules after the first require(). The cache key is the resolved absolute path. Implications: (1) Modules are singletons - the same exports object is returned every time. (2) Module initialization code runs only once. (3) Circular dependencies are handled by returning the partial exports object (whatever was assigned at the time of the circular require). The Module constructor (require("module").Module): Module._resolveFilename(), Module._load(), Module._extensions. module object inside each file: module.id (resolved path), module.filename (full path), module.loaded (boolean), module.parent (the module that required this one), module.children (modules required by this one), module.paths (lookup paths for require()). module.paths is useful for debugging resolution issues.'},{heading:"CommonJS vs ES Modules Interoperability",text:'CommonJS can require() other CommonJS modules and most ES Modules (with limitations). (1) CJS can import ESM using dynamic import(): async function loadESM() { const mod = await import("./esm-module.mjs"); }. (2) CJS cannot require() ESM directly - require() is synchronous, ESM is asynchronous. (3) ESM can import CJS modules using import default: import fs from "fs" (CJS default export), import { readFile } from "fs" (named exports detection). (4) ESM treats the entire CJS module.exports as a single default export - named exports are detected via static analysis for built-in CJS modules. (5) CJS wrapper: Node.js wraps CJS files in (function(exports, require, module, __filename, __dirname) { ... }). This provides the module-scoped variables. (6) __filename and __dirname are not available in ESM - use import.meta.url.'},{heading:"require() Performance and Best Practices",text:'(1) require() is synchronous and blocks the event loop during module loading. Keep module-level side effects minimal. (2) Module resolution traverses the filesystem - deep node_modules trees increase startup time. (3) Cyclical require() patterns cause partial exports - restructure to avoid cycles. (4) Conditional requires: if (condition) { module = require("./optional") } - works but breaks static analysis. (5) Lazy loading: require() inside functions loads modules on demand, reducing startup time. (6) Module factories: function createModule() { return require("./module") } - ensures fresh instance. (7) Cache invalidation: delete require.cache[key] for hot reloading during development. (8) Module path resolution performance: use absolute paths or __dirname-based relative paths for faster resolution. (9) Consider bundle size: require() pulls in the entire module - tree shaking is not available in CJS (use ESM for that). (10) Use require.resolve.paths() to debug resolution paths.'}],interviewAnswer:"CommonJS uses require() and module.exports. require() loads modules synchronously and caches them. module.exports is the returned value; exports is a reference (reassigning exports breaks it). Resolution order: built-in, relative (./), node_modules, NODE_PATH. require.cache stores loaded modules (keyed by resolved path). CJS is synchronous, blocking during module loading. For circular dependencies, CJS returns partial exports. CJS can import ESM via dynamic import(), but cannot require() ESM. ESM can import CJS as default export. Node wraps CJS in a function providing exports, require, module, __filename, __dirname. For performance: minimize module-level side effects, use lazy loading for infrequently used modules.",interviewQuestions:[{question:"What is the difference between module.exports and exports?",answer:"exports is initially a reference to module.exports. module.exports is what require() returns. Adding properties to exports works (exports.foo = 1). Reassigning exports breaks the reference (exports = {} does not affect module.exports). Use module.exports to replace the entire export object."},{question:'How does Node.js resolve require("./module")?',answer:'(1) Check for "./module" as file (tries .js, .json, .node). (2) Check "./module/" as directory with index.js/index.json/index.node. (3) If not found, throws MODULE_NOT_FOUND. For bare specifiers (require("lodash")), walks up node_modules directories.'},{question:"How does module caching work?",answer:"require() caches modules in require.cache (object keyed by resolved absolute path). After the first require, subsequent calls return the cached exports object. Delete: delete require.cache[path] to re-evaluate on next require. Cached modules are singletons."},{question:"How do you handle circular dependencies in CommonJS?",answer:"Node.js returns the partial exports object at the time of the circular require. Both modules get the other's exports in whatever state they were when the require was called. Restructure code to avoid cycles by extracting shared dependencies into a third module."},{question:"What is the require.resolve() function?",answer:"require.resolve(id) returns the resolved absolute path of a module without executing it. Useful for: checking if a module is available, getting the file path, or debugging resolution issues. Combined with require.cache for cache manipulation."},{question:"Can CommonJS import ES Modules?",answer:'CJS cannot use require() to import ESM (require is synchronous, ESM is asynchronous). CJS can use dynamic import(): async function load() { const mod = await import("./esm.mjs"); }. This returns a module namespace object.'},{question:"What are the module-scoped variables in CommonJS?",answer:"__filename (full path to current module), __dirname (directory of current module), exports (short for module.exports), require (the require function), module (the current Module instance). These are injected by Node.js module wrapper function."},{question:"What is require.main?",answer:"require.main is the Module object representing the entry point script (the one run with node app.js). Check require.main === module to detect if a file is the entry point (useful for making a file both a library and a CLI)."},{question:"How do you implement hot reloading with require.cache?",answer:'(1) Delete the cached module: delete require.cache[require.resolve("./module")]. (2) Re-require: const mod = require("./module"). (3) Clear all modules that depend on the changed one recursively. (4) Use chokidar or fs.watch to detect file changes. This is used in development tools like nodemon.'},{question:"What are require.extensions?",answer:"require.extensions is an object mapping file extensions to loader functions. It is deprecated. Previously used to add custom handlers for .coffee, .ts files. Modern Node.js uses ESM loaders or --experimental-loader for custom resolution."}],diagramSvg:'<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="720" height="260" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">CommonJS Module System</text><rect x="30" y="55" width="200" height="45" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">module.exports</text><text x="130" y="94" text-anchor="middle" font-size="9" fill="#ddd">What require() returns</text><rect x="30" y="115" width="200" height="45" rx="5" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="130" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">require("./module")</text><text x="130" y="154" text-anchor="middle" font-size="9" fill="#ddd">Loads & caches module</text><rect x="30" y="175" width="200" height="45" rx="5" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="130" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">require.cache</text><text x="130" y="214" text-anchor="middle" font-size="9" fill="#ddd">Cached modules dict</text></svg>',codeExamples:[{title:"module.exports Patterns",useCase:"Different ways to export values from CommonJS modules",code:`// 1. Export an object with properties (most common)
exports.add = function(a, b) { return a + b; };
exports.subtract = function(a, b) { return a - b; };

// 2. Replace module.exports with a function
// module.exports = function(a, b) { return a + b; };

// 3. Export a class/constructor
// function Calculator() { this.result = 0; }
// Calculator.prototype.add = function(n) { this.result += n; };
// module.exports = Calculator;

// 4. Export an instance (singleton)
// module.exports = new Calculator();

// 5. Named exports via destructuring
// module.exports = { add, subtract, multiply, divide };

// 6. Conditional exports
// if (process.env.NODE_ENV === "production") {
//   module.exports = require("./prod-config");
// } else {
//   module.exports = require("./dev-config");
// }

// Usage in another file:
// const math = require("./math");
// math.add(2, 3); // 5

// Or destructure:
// const { add, subtract } = require("./math");`,description:"CommonJS offers multiple export patterns: adding to exports (named exports), replacing module.exports (single export), exporting classes, singletons, or conditionally. Choose based on the module's purpose."},{title:"Module Caching and Singleton Behavior",useCase:"Demonstrate how caching works",code:`// counter.js
var count = 0;
module.exports = {
  increment: function() { return ++count; },
  getCount: function() { return count; }
};

// app.js
var counter1 = require("./counter");
var counter2 = require("./counter");

console.log("Same instance:", counter1 === counter2); // true

counter1.increment();
counter1.increment();
console.log("Counter 1 count:", counter1.getCount()); // 2
console.log("Counter 2 count:", counter2.getCount()); // 2

// Bypass cache:
delete require.cache[require.resolve("./counter")];
var counter3 = require("./counter");
console.log("After cache clear:", counter3 === counter1); // false
console.log("New counter:", counter3.getCount()); // 0

// require.cache structure:
console.log("Cached modules:", Object.keys(require.cache).length);
require.cache[require.resolve("./counter")].exports === counter3; // true`,description:"Caching ensures singletons - all require() calls return the same instance. Deleting from require.cache forces re-evaluation. module-level variables (count) persist across calls within the same cached instance."},{title:"Circular Dependencies Handling",useCase:"How Node.js handles circular require() calls",code:`// a.js
console.log("a.js starting");
exports.loaded = false;
var b = require("./b");
console.log("in a.js, b.loaded =", b.loaded);
exports.loaded = true;
console.log("a.js done");

// b.js
console.log("b.js starting");
exports.loaded = false;
var a = require("./a");
console.log("in b.js, a.loaded =", a.loaded);
exports.loaded = true;
console.log("b.js done");

// main.js
console.log("main.js starting");
var a = require("./a");
var b = require("./b");
console.log("Done. a.loaded:", a.loaded, "b.loaded:", b.loaded);

// Output:
// main.js starting
// a.js starting
// b.js starting
// in b.js, a.loaded = false  (partial export!)
// b.js done
// in a.js, b.loaded = true
// a.js done
// Done. a.loaded: true b.loaded: true`,description:"Circular dependencies: Node.js returns the partial exports object. b.js sees a.js with exports.loaded = false because a.js had not finished executing when b.js required it. This can cause subtle bugs - avoid circular dependencies."},{title:"require() Resolution Algorithm",useCase:"Understand how Node.js finds modules",code:`var path = require("path");

// Check what paths Node.js searches for modules
function showResolvePaths(moduleName) {
  try {
    var resolved = require.resolve(moduleName);
    console.log("Resolved:", moduleName, "→", resolved);
  } catch (err) {
    console.log("Not found:", moduleName);
  }
}

// Show module search paths for the current directory
console.log("Search paths:");
require.resolve.paths("anything").forEach(function(p) {
  console.log("  " + p);
});

// Resolution examples:
showResolvePaths("fs");          // Built-in (no path)
showResolvePaths("./app");        // Relative to __dirname
showResolvePaths("lodash");       // node_modules

// module.paths shows where Node.js looks for this file's requires
console.log("Module paths:");
module.paths.forEach(function(p) {
  console.log("  " + p);
});

// require.main is the entry script
console.log("Entry script:", require.main.filename);
console.log("Is this the entry?", require.main === module);

// Check if a module is available
function isModuleAvailable(name) {
  try { require.resolve(name); return true; }
  catch (e) { return false; }
}

console.log("lodash available:", isModuleAvailable("lodash"));`,description:"Use require.resolve() to check if a module is available without loading it. require.resolve.paths() shows where Node.js searches. module.paths shows search paths for the current module. require.main identifies the entry script."},{title:"Module Wrapper Function",useCase:"Understand the function that wraps each CommonJS module",code:`// Node.js wraps each module in:
// (function(exports, require, module, __filename, __dirname) {
//   // Module code goes here
// });

// This means we can inspect the wrapper:
console.log("Module wrapper:");
console.log(require("module").wrapper);

// The wrapper provides:
// - exports: shortcut for module.exports
// - require: the require function
// - module: the current module object
// - __filename: absolute path to this file
// - __dirname: absolute directory of this file

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);
console.log("module.id:", module.id);
console.log("module.filename:", module.filename);
console.log("module.loaded:", module.loaded);
console.log("module.parent:", module.parent ? module.parent.filename : null);
console.log("module.children count:", module.children.length);

// exports is just a reference:
console.log("exports === module.exports:", exports === module.exports);

// module.loaded is true after the module finishes executing
process.nextTick(function() {
  console.log("module.loaded after tick:", module.loaded); // true
});`,description:"Node.js wraps each CJS module in a function that provides module-scoped variables. The wrapper isolates module scope and provides exports, require, module, __filename, __dirname. module.loaded is false during execution, true after completion."}],mcqQuestions:[{question:"What does require() return?",options:["exports","module.exports","module","require"],answer:1,explanation:"require() returns the value of module.exports. exports is initially a reference to it but is not returned directly."},{question:"What happens if you reassign exports?",options:["module.exports is updated too","The reference to module.exports is broken","Nothing, it is ignored","An error is thrown"],answer:1,explanation:"Reassigning exports (exports = {}) breaks the reference to module.exports. Properties added to exports BEFORE reassignment are preserved on module.exports."},{question:"What is the first step in the require() resolution algorithm?",options:["Check node_modules","Check built-in modules","Check relative paths","Check NODE_PATH"],answer:1,explanation:"Built-in modules (fs, http, path) are checked first. Then relative paths, then node_modules, then NODE_PATH."},{question:"How are circular dependencies handled?",options:["They cause a stack overflow","Node.js returns the partial exports object","The module is re-evaluated","An error is thrown"],answer:1,explanation:"For circular deps, Node.js returns whatever exports were assigned up to the point of the circular require(). This can lead to incomplete exports."},{question:"What module property contains all cached modules?",options:["require.loaded","require.cache","module.registry","module.cache"],answer:1,explanation:"require.cache is an object keyed by resolved absolute file paths with Module objects as values."},{question:"How do you check if a module is available without loading it?",options:['require.exists("module")','require.resolve("module")','Module.isAvailable("module")','require.check("module")'],answer:1,explanation:'require.resolve("module") returns the resolved path without loading the module. Throws MODULE_NOT_FOUND if unavailable.'}]};export{e as node_commonjs};
