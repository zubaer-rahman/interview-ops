export const node_es_modules = {
  "id": "node-es-modules",
  "title": "Node.js ES Modules",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "ES Modules (ESM) are the JavaScript standard module system using import and export statements, supported natively since Node.js 12.",
    "ESM supports static analysis (tree shaking), top-level await, and stricter module semantics compared to CommonJS.",
    "Enable ESM via \"type\": \"module\" in package.json, .mjs extension, or --experimental-modules flag (legacy).",
    "ESM uses import.meta.url instead of __dirname/__filename, and import.meta.resolve() for module resolution."
  ],
  "laymanDefinition": "ES Modules are the modern, standardized way of organizing code that comes built into JavaScript itself (ECMAScript 2015). Think of CommonJS as a custom system that only Node.js understands, while ES Modules are the universal standard that browsers and Node.js both speak. With ES Modules, you say export to mark what you want to share and import to bring things in from other files. The big advantage is that tools can analyze your imports and exports without running your code (static analysis), which enables \"tree shaking\" - automatically removing unused code to make your app smaller. ES Modules also let you use await at the top level without wrapping in async functions.",
  "deepDive": [
    {
      "heading": "ESM Syntax and Semantics",
      "text": "import and export statements: (1) Named exports: export const name = \"value\"; export function fn() {}. (2) Default export: export default function() {}. (3) Named imports: import { name, fn } from \"./module.js\". (4) Default import: import whatever from \"./module.js\". (5) Mixed: import defaultExport, { named } from \"./module.js\". (6) Namespace: import * as mod from \"./module.js\". (7) Re-export: export { name } from \"./module.js\"; export * from \"./module.js\". (8) Import for side effects: import \"./polyfill.js\". ESM semantics: imports are live read-only bindings (not copies). Changes in the exporting module are reflected in the importing module. Imports are hoisted - they run before any other code in the module. ESM is always strict mode - no \"use strict\" needed. ESM modules are deferred - similar to script defer in browsers."
    },
    {
      "heading": "Enabling ESM and File Extensions",
      "text": "Three ways to enable ESM: (1) \"type\": \"module\" in package.json - all .js files in the package are ESM. (2) .mjs extension - always ESM regardless of package.json. (3) .cjs extension - force CommonJS regardless of package.json. Package scope: \"type\" applies to the package and its subdirectories (unless overridden by nested package.json). Mixing CJS and ESM: you can have both .cjs and .mjs files in the same package. .js files follow the closest package.json \"type\" field. The --input-type flag for eval/stdin: node --input-type=module -e \"import fs from 'fs'\". The --experimental-modules flag is no longer needed since Node 14. Node.js 18+ has full ESM support without any flags."
    },
    {
      "heading": "import.meta and Module Metadata",
      "text": "import.meta.url is the file URL of the current module: \"file:///path/to/module.js\". Convert to path: import.meta.url → fileURLToPath(import.meta.url). import.meta.resolve(specifier, parent) - resolves a module specifier (Node 20+). import.meta.dirname (Node 22+) - equivalent to __dirname in CJS. ESM equivalents to CJS globals: (1) __filename → fileURLToPath(import.meta.url). (2) __dirname → fileURLToPath(new URL(\".\", import.meta.url)). (3) require → use createRequire(import.meta.url) to create a CJS require function. (4) module, exports → not available in ESM. (5) __dirname polyfill: const __dirname = fileURLToPath(new URL(\".\", import.meta.url))."
    },
    {
      "heading": "ESM Module Resolution",
      "text": "ESM uses a different resolution algorithm from CJS: (1) Full specifiers required: import \"./module.js\" (extension required). (2) No automatic index.js resolution (must specify full path). (3) No directory imports: import \"./dir\" must be import \"./dir/index.js\". (4) Import maps: package.json \"imports\" and \"exports\" fields control resolution. (5) Data URLs: import \"data:text/javascript,export default 42\". (6) HTTPS imports: experimental network imports. (7) Self-referencing: package can import itself using its package name (if \"exports\" field is set). (8) Conditional exports: package.json \"exports\" field can provide different entry points for different environments (node, browser, default). (9) Subpath exports: \"./features/*\": \"./src/features/*.js\". (10) Pattern: \"exports\" replaces the traditional \"main\" field for ESM packages."
    },
    {
      "heading": "ESM vs CommonJS Comparison",
      "text": "(1) Loading: CJS sync, ESM async (supports top-level await). (2) Analysis: CJS runtime, ESM static (tree shaking). (3) Extension: CJS .js/.cjs, ESM .mjs/.js (with \"type\":\"module\"). (4) Resolution: CJS flexible (no extension required, index.js fallback), ESM strict (full specifiers, no automatic resolution). (5) Exports: CJS module.exports (value copy), ESM live bindings (exported values update live). (6) Circular deps: CJS partial exports, ESM live bindings (incomplete bindings for before evaluation). (7) Top-level await: CJS not supported, ESM supported. (8) Strict mode: CJS opt-in (\"use strict\"), ESM always strict. (9) this at top level: CJS = module.exports, ESM = undefined. (10) JSON modules: CJS require(\"./data.json\") works, ESM requires import assertions (Node 17+): import data from \"./data.json\" assert { type: \"json\" }."
    },
    {
      "heading": "Package Exports and Imports Fields",
      "text": "The package.json \"exports\" field controls how other packages import your ESM package: (1) Single entry: \"exports\": \"./index.js\". (2) Multiple entries: \"exports\": { \".\": \"./index.js\", \"./feature\": \"./feature.js\" }. (3) Conditional: \"exports\": { \".\": { \"import\": \"./esm/index.js\", \"require\": \"./cjs/index.cjs\" } }. (4) Subpath patterns: \"./utils/*\": \"./src/utils/*.js\". (5) The \"imports\" field controls internal package imports (private modules): \"imports\": { \"#utils\": \"./src/utils.js\" }. Usage: import \"#utils\" from within the package. These fields are part of the Node.js resolution algorithm for ESM and supersede the \"main\" field for modules that use \"exports\". The \"exports\" field also prevents users from importing internal files that are not explicitly exported (encapsulation)."
    }
  ],
  "interviewAnswer": "ES Modules use import/export and are the JavaScript standard. Enable via \"type\":\"module\" in package.json or .mjs extension. Key differences from CommonJS: ESM is async (supports top-level await), uses static analysis (tree shaking), requires full specifiers (import \"./file.js\", not \"./file\"), no automatic index.js resolution, use import.meta.url instead of __dirname. ESM live bindings - exports update in real-time. Package \"exports\" field controls entry points and encapsulation. CJS interop: CJS can import ESM via dynamic import(), ESM can import CJS modules (default export only). import assertions for JSON: import data from \"./data.json\" assert { type: \"json\" }.",
  "interviewQuestions": [
    {
      "question": "How do you enable ES Modules in Node.js?",
      "answer": "(1) \"type\": \"module\" in package.json (makes all .js files ESM in that package). (2) .mjs extension (always ESM). (3) .cjs extension (always CJS, overrides \"type\"). (4) --input-type=module for eval. Node 14+ supports ESM without flags."
    },
    {
      "question": "What is the difference between ESM and CJS exports?",
      "answer": "CJS: module.exports is a value (copy). ESM: exports are live bindings - changes in the exporting module are reflected in importing modules. ESM supports named exports, default exports, and re-exports. ESM exports are static (analyzed at parse time)."
    },
    {
      "question": "What is import.meta.url and how do you get __dirname in ESM?",
      "answer": "import.meta.url is the file URL (file:///path/to/module.js). Convert to path: const __dirname = fileURLToPath(new URL(\".\", import.meta.url)); or const __filename = fileURLToPath(import.meta.url);"
    },
    {
      "question": "How does ESM module resolution differ from CJS?",
      "answer": "ESM requires full specifiers: import \"./module.js\" (extension required). No automatic index.js resolution. No directory imports. Supports import maps and package.json \"exports\"/\"imports\" fields. Uses URL-based resolution (file://)."
    },
    {
      "question": "What are live bindings in ESM?",
      "answer": "exported values are bound to the original variable. If a module exports let count = 0 and later sets count = 1, importing modules see the updated value. Unlike CJS module.exports which returns a copy, ESM imports are live connections."
    },
    {
      "question": "How does ESM interop with CommonJS?",
      "answer": "ESM can import CJS modules: import fs from \"fs\" (CJS default export). ESM can also use named imports from CJS modules that Node.js can statically analyze. CJS can import ESM using dynamic import(): const mod = await import(\"./esm.mjs\"). CJS cannot require() ESM."
    },
    {
      "question": "What is the \"exports\" field in package.json?",
      "answer": "Controls entry points for your package. Restricts what files can be imported from your package. Supports conditional exports (different files for import vs require). Example: { \".\": { \"import\": \"./esm/index.js\", \"require\": \"./cjs/index.cjs\" } }."
    },
    {
      "question": "What is top-level await in ESM?",
      "answer": "The await keyword can be used at the top level of ESM modules without wrapping in an async function. This blocks the module's execution but does not block sibling modules. Top-level await is only available in ESM, not CJS."
    },
    {
      "question": "How do you import JSON in ESM?",
      "answer": "import data from \"./data.json\" assert { type: \"json\" } (Node 17+). The assert syntax validates the module type. Without the assert, Node.js throws an error. CJS require(\"./data.json\") works without assertions."
    },
    {
      "question": "What is the difference between export and export default?",
      "answer": "Named exports: export const name = \"value\". Import: import { name }. Multiple named exports per module. Default export: export default function() {}. Import: import anyName. One default export per module. Named exports are statically analyzable; default exports are less so for tree shaking."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"260\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ES Modules in Node.js</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">import / export</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Standard JS syntax</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">import.meta.url</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Module URL metadata</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">\"type\": \"module\"</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">package.json config</text></svg>",
  "codeExamples": [
    {
      "title": "Basic ESM Import/Export Syntax",
      "useCase": "Working with named and default exports",
      "code": "// File: math.mjs\nexport const PI = 3.14159;\n\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function subtract(a, b) {\n  return a - b;\n}\n\nexport default {\n  multiply: function(a, b) { return a * b; },\n  divide: function(a, b) { return a / b; }\n};\n\n// File: app.mjs\nimport utils, { PI, add, subtract } from \"./math.mjs\";\n\nconsole.log(\"PI:\", PI);\nconsole.log(\"Add:\", add(2, 3));\nconsole.log(\"Subtract:\", subtract(5, 2));\nconsole.log(\"Multiply:\", utils.multiply(3, 4));\n\n// Alternative import styles:\n// import * as math from \"./math.mjs\";\n// math.add(2, 3), math.default.multiply(3, 4)\n\n// Live bindings demonstration:\nexport let counter = 0;\nexport function increment() { counter++; }\n\n// In importing module:\n// import { counter, increment } from \"./app.mjs\";\n// console.log(counter); // 0\n// increment();\n// console.log(counter); // 1 (live binding!)",
      "description": "ESM supports named exports (export const/function) and default exports (export default). Imports use {} for named selections. Live bindings mean exported values update in real-time in importing modules. Use .mjs extension for explicit ESM."
    },
    {
      "title": "ESM Module Resolution and Package Exports",
      "useCase": "Using package.json exports for clean APIs",
      "code": "// package.json\n{\n  \"type\": \"module\",\n  \"exports\": {\n    \".\": {\n      \"import\": \"./src/index.js\",\n      \"require\": \"./dist/index.cjs\"\n    },\n    \"./utils\": {\n      \"import\": \"./src/utils.js\",\n      \"require\": \"./dist/utils.cjs\"\n    },\n    \"./internal/*\": null  // Block direct access\n  }\n}\n\n// Users can import:\nimport myLib from \"my-lib\";\nimport { helper } from \"my-lib/utils\";\n\n// Cannot import internal files:\n// import internals from \"my-lib/internal/secret.js\"; // Error!\n\n// Self-referencing: package can import itself\n// In package \"my-lib\":\n// import { helper } from \"my-lib/utils\";\n\n// Internal imports with \"imports\" field:\n// package.json:\n// \"imports\": {\n//   \"#helpers\": \"./src/helpers.js\"\n// }\n\n// In module code:\n// import { format } from \"#helpers\";\n\n// Conditional exports with environments:\n// \"exports\": {\n//   \".\": {\n//     \"node\": \"./node-build.js\",\n//     \"browser\": \"./browser-build.js\",\n//     \"default\": \"./default-build.js\"\n//   }\n// }",
      "description": "The \"exports\" field provides controlled entry points and conditional exports (different files for import vs require, or different environments). The \"imports\" field enables internal package aliases. Self-referencing allows a package to import itself."
    },
    {
      "title": "ESM with Top-Level Await",
      "useCase": "Use await at the module level without async functions",
      "code": "// config.mjs\nimport { readFile } from \"fs/promises\";\nimport { fileURLToPath } from \"url\";\nimport { dirname, join } from \"path\";\n\nconst __dirname = dirname(fileURLToPath(import.meta.url));\n\n// Top-level await: no async wrapper needed!\nconst config = JSON.parse(\n  await readFile(join(__dirname, \"config.json\"), \"utf8\")\n);\n\nexport default config;\n\n// app.mjs\nimport config from \"./config.mjs\";\n\n// config is already loaded before this runs\nconsole.log(\"Server port:\", config.port);\nconsole.log(\"Database:\", config.database.host);\n\n// Multiple top-level awaits run in order\nconst data1 = await fetch(\"https://api.example.com/data1\");\nconst data2 = await fetch(\"https://api.example.com/data2\");\n\n// Parallel top-level awaits:\nconst [a, b] = await Promise.all([\n  fetch(\"https://api.example.com/a\"),\n  fetch(\"https://api.example.com/b\")\n]);\n\nexport { data1, data2, a, b };",
      "description": "Top-level await blocks the module's execution but not sibling modules (they can evaluate in parallel). This enables configuration loading, data fetching, and database connections at module level without async function wrappers."
    },
    {
      "title": "ESM Live Bindings in Action",
      "useCase": "Demonstrate how ESM exports update in real-time",
      "code": "// live.mjs\nexport let value = 1;\n\nexport function increment() {\n  value++;\n}\n\nexport function setValue(v) {\n  value = v;\n}\n\n// In the same module, schedule an update\nsetTimeout(function() {\n  value = 100;\n}, 100);\n\n// importer.mjs\nimport { value, increment, setValue } from \"./live.mjs\";\n\nconsole.log(\"Initial:\", value); // 1\n\nincrement();\nconsole.log(\"After increment:\", value); // 2 (live!)\n\nsetValue(42);\nconsole.log(\"After setValue:\", value); // 42\n\n// Wait for the setTimeout to fire\nsetTimeout(function() {\n  console.log(\"After module timeout:\", value); // 100\n}, 200);\n\n// Compare with CJS:\n// In CJS, module.exports copies the value, so\n// changes to module-level variables after export are NOT reflected.\n// ESM live bindings always reflect the current value.",
      "description": "ESM live bindings: importing modules see changes to exported variables in real-time. This differs from CJS where module.exports returns a copy. Live bindings are particularly important for patterns like counters, state managers, and reactive exports."
    },
    {
      "title": "Creating require() in ESM for Interop",
      "useCase": "Use createRequire to load CJS modules in ESM",
      "code": "// esm-app.mjs\nimport { createRequire } from \"module\";\nimport { fileURLToPath } from \"url\";\nimport { dirname } from \"path\";\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = dirname(__filename);\n\n// Create a CJS require function in ESM\nconst require = createRequire(import.meta.url);\n\n// Now we can require CJS modules\nconst fs = require(\"fs\");\nconst lodash = require(\"lodash\");\nconst pkg = require(\"./package.json\");\n\nconsole.log(\"App name:\", pkg.name);\nconsole.log(\"Lodash version:\", lodash.VERSION);\n\n// Also use proper ESM imports for ESM packages\nimport { readFile } from \"fs/promises\";\n\n// Dynamic import() for ESM modules from CJS-compatible code\nasync function loadESM() {\n  const chalk = await import(\"chalk\");\n  console.log(chalk.default.green(\"ESM module loaded!\"));\n}\n\nloadESM();\n\n// Export both ESM and CJS compatible\nexport const greeting = \"Hello from ESM\";\n\n// Also set module.exports for CJS require()\nmodule.exports = { greeting }; // This works via createRequire",
      "description": "createRequire(import.meta.url) creates a CJS require function in ESM modules. This bridge enables gradual migration from CJS to ESM. Dynamic import() loads ESM modules from CJS. Use both patterns during migration before fully switching."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How do you enable ES Modules for .js files?",
      "options": [
        "Use .mjs extension",
        "Add \"type\": \"module\" to package.json",
        "Use --esm flag",
        "Both A and B"
      ],
      "answer": 3,
      "explanation": "Either \"type\":\"module\" in package.json or .mjs extension. .cjs forces CJS regardless of \"type\"."
    },
    {
      "question": "What syntax is required for ESM file imports?",
      "options": [
        "import \"./module\"",
        "import \"./module.js\"",
        "const mod = require(\"./module\")",
        "import mod from \"./module\""
      ],
      "answer": 1,
      "explanation": "ESM requires full specifiers including extensions: import \"./module.js\". No automatic index.js resolution."
    },
    {
      "question": "What does import.meta.url provide?",
      "options": [
        "The module's directory",
        "The file:// URL of the module",
        "The version of Node.js",
        "The module's exports"
      ],
      "answer": 1,
      "explanation": "import.meta.url is a string like \"file:///path/to/module.js\". Use fileURLToPath() to convert to a regular path."
    },
    {
      "question": "What are live bindings in ESM?",
      "options": [
        "Exports are copied by value",
        "Exports update in real-time in importing modules",
        "Exports are immutable",
        "Exports are lazy-loaded"
      ],
      "answer": 1,
      "explanation": "ESM exports are live connections to the exported variable. Changes in the exporting module are immediately visible in importing modules."
    },
    {
      "question": "Can CommonJS require() an ES Module?",
      "options": [
        "Yes, with require(\"./module.mjs\")",
        "No, require() is sync but ESM is async",
        "Only with --experimental-modules",
        "Only if the ESM has a default export"
      ],
      "answer": 1,
      "explanation": "CJS cannot require() ESM because require is synchronous while ESM loading is asynchronous. Use dynamic import() instead."
    },
    {
      "question": "How does the \"exports\" field benefit package authors?",
      "options": [
        "It increases performance",
        "It restricts which files can be imported, providing encapsulation",
        "It enables tree shaking",
        "It reduces bundle size"
      ],
      "answer": 1,
      "explanation": "The \"exports\" field controls the public API of a package. Only files explicitly listed in \"exports\" can be imported from outside the package, preventing users from accessing internal implementation details."
    }
  ]
};
