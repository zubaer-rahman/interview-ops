export const modules = {
  "title": "JavaScript Modules",
  "difficulty": "beginner",
  "estimatedMinutes": 25,
  "tldr": [
    "<strong>JavaScript modules</strong> allow splitting code into separate files, each with its own scope, and exporting/importing values between them.",
    "<strong>ES6 Modules</strong> (<code>import</code>/<code>export</code>) are the standard, with static analysis, strict mode by default, and support for both <strong>named</strong> and <strong>default</strong> exports.",
    "Named exports: <code>export const x = 1</code>; import: <code>import { x } from './module.js'</code>. Default export: <code>export default fn</code>; import: <code>import fn from './module.js'</code>.",
    "Modules are <strong>singletons</strong> — they are executed only once, and subsequent imports get a cached reference."
  ],
  "laymanDefinition": "Think of modules like chapters in a book. Each chapter covers a specific topic and can reference other chapters. Without modules, writing JavaScript is like writing one enormous chapter with everything crammed in — chaos. With modules, you organize your code into separate files (chapters), each with a clear purpose. You decide what each chapter 'exports' (makes available to others) and what it 'imports' (needs from others). This is like saying 'Chapter 3 needs the concepts from Chapter 1.' Modules keep code organized, reusable, and easy to maintain.",
  "deepDive": [
    {
      "heading": "ES6 Module Syntax — Export",
      "text": "There are two types of exports: <strong>named exports</strong> (multiple per module) and <strong>default export</strong> (one per module). Named exports can be declared inline (<code>export const x = 1</code>) or at the end (<code>export { x, y, z }</code>). Default exports are typically for the main functionality: <code>export default class User { ... }</code>. You can mix named and default exports in the same module."
    },
    {
      "heading": "ES6 Module Syntax — Import",
      "text": "Named imports use destructuring-like syntax: <code>import { specificItem } from './module.js'</code>. Rename with <code>as</code>: <code>import { oldName as newName } from './module.js'</code>. Import all with namespace: <code>import * as Utils from './module.js'</code>. Default import: <code>import DefaultThing from './module.js'</code>. Combine: <code>import DefaultThing, { named1, named2 } from './module.js'</code>."
    },
    {
      "heading": "Module Scope and Execution",
      "text": "Each module has its own top-level scope — variables declared in a module are not available globally unless exported. Modules are in strict mode by default. A module is executed only once per page/app, and the imported binding is a live reference (not a copy). This means if the exported value changes in the source module, the importing module sees the updated value."
    },
    {
      "heading": "Named Exports vs Default Exports",
      "list": [
        "<strong>Named exports:</strong> Enforce exact import names. Better for libraries with multiple utilities. Tree-shakeable (bundlers can eliminate unused exports).",
        "<strong>Default exports:</strong> Convenient for the main export. The import name can be anything, which can lead to inconsistent naming across projects.",
        "Some style guides recommend preferring named exports for consistency and better IDE support (autocomplete, refactoring)."
      ]
    },
    {
      "heading": "Dynamic Imports and Code Splitting",
      "text": "<code>import()</code> (dynamic import) returns a promise for the module namespace. This enables lazy loading and code splitting: <code>const module = await import('./heavy-module.js')</code>. Dynamic imports are useful for route-based splitting (load component only when navigating to a route) and conditionally loading polyfills. Unlike static imports, dynamic imports can be called from anywhere, not just module top-level."
    }
  ],
  "interviewAnswer": "JavaScript modules (ES6/ES2015) allow organizing code into separate files with their own scope. Modules use export to expose values and import to consume them. Named exports ({ export const x }) allow exporting multiple values; default export (export default) exports a single main value. Imports use matching syntax: import { x } for named and import x for default. Modules are executed once and imports are live bindings. Dynamic import (import()) enables lazy loading. Modules are automatically in strict mode. Before ES6 modules, CommonJS (require/module.exports) was used in Node.js. Modern bundlers (Webpack, Vite, Rollup) tree-shake named exports for smaller bundles.",
  "interviewQuestions": [
    {
      "question": "What is the difference between named and default exports?",
      "answer": "Named exports allow multiple exports per module and enforce the import name: export const x = 1; import { x } from 'module'. Default export allows one per module and the import name can be any name: export default 42; import anyName from 'module'."
    },
    {
      "question": "How do you rename an import?",
      "answer": "Use the 'as' keyword: import { originalName as newName } from './module.js'. This is useful when the imported name conflicts with a local variable."
    },
    {
      "question": "What is a namespace import?",
      "answer": "import * as Utils from './module.js' imports all exports as properties of the Utils object. Utils.x accesses the named export 'x'."
    },
    {
      "question": "How are ES6 modules different from CommonJS?",
      "answer": "ES6: static imports/exports, live bindings, strict mode by default, tree-shakeable. CommonJS: dynamic require(), module.exports, not tree-shakeable, used in Node.js. ES6 is the standard; CommonJS is legacy for Node."
    },
    {
      "question": "What is a live binding in modules?",
      "answer": "Imported values are live references to the exporting module's variables, not copies. If the exporting module changes the value, the importing module sees the change. This differs from CommonJS where exports are copied."
    },
    {
      "question": "Can modules have side effects?",
      "answer": "Yes. A module can execute side-effect code at the top level (like setting up a global event listener). The import statement runs the module's top-level code. Side-effect imports: import './setup.js' (import nothing, just run the module)."
    },
    {
      "question": "What is dynamic import and when would you use it?",
      "answer": "import() is a function-like expression that returns a promise resolving to the module namespace. It enables lazy loading/code splitting: const { default: Component } = await import('./Component.js'). Use for route-based splitting, conditionally loading heavy libraries, or on-demand loading."
    },
    {
      "question": "Are ES6 modules supported in Node.js?",
      "answer": "Yes, since Node.js 12+. Use .mjs extension, or set 'type': 'module' in package.json. CommonJS (.cjs) still works alongside ES modules."
    },
    {
      "question": "What happens if you import the same module twice?",
      "answer": "Modules are singletons — they execute only once per application. The second import returns the same cached reference. This ensures consistency and efficiency."
    },
    {
      "question": "Can you export a value that was imported from another module?",
      "answer": "Yes. Re-export: export { x } from './other.js'. Or combine: export * from './utils.js'. This is useful for creating barrel/index files that aggregate multiple modules."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 350\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"680\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"350\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">ES6 Modules — Import / Export Flow</text><rect x=\"40\" y=\"70\" width=\"280\" height=\"100\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"180\" y=\"93\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\">utils.js (export)</text><text x=\"180\" y=\"115\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\" font-family=\"monospace\">export const add = (a, b) =&gt; a + b;</text><text x=\"180\" y=\"135\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"10\" font-family=\"monospace\">export const PI = 3.14159;</text><text x=\"180\" y=\"155\" text-anchor=\"middle\" fill=\"#e5c07b\" font-size=\"10\" font-family=\"monospace\">export default function multiply() {}</text><line x1=\"320\" y1=\"120\" x2=\"370\" y2=\"120\" stroke=\"#fbbf24\" stroke-width=\"2\"/><rect x=\"370\" y=\"70\" width=\"280\" height=\"100\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"510\" y=\"93\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"12\" font-weight=\"bold\">main.js (import)</text><text x=\"510\" y=\"115\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"10\" font-family=\"monospace\">import multiply, { add, PI } from './utils.js'</text><text x=\"510\" y=\"135\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">multiply = default export</text><text x=\"510\" y=\"155\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"10\">add, PI = named exports</text><text x=\"350\" y=\"280\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">Modules: own scope, strict mode, singletons, static analysis</text></svg>",
  "codeExamples": [
    {
      "title": "Named Exports and Imports",
      "useCase": "Exporting multiple utilities",
      "code": "// ---- math.js ----\nexport const PI = 3.14159;\nexport const E = 2.71828;\n\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function multiply(a, b) {\n  return a * b;\n}\n\n// Inline exports — can export any declaration\n\n// ---- app.js ----\nimport { add, multiply, PI } from './math.js';\n\nconsole.log(add(2, 3));        // 5\nconsole.log(multiply(4, 5));   // 20\nconsole.log(PI);               // 3.14159\n\n// Renaming imports\nimport { add as sum, PI as pi } from './math.js';\nconsole.log(sum(1, 2));  // 3\n\n// Import all as a namespace\nimport * as MathUtils from './math.js';\nconsole.log(MathUtils.add(1, 2));      // 3\nconsole.log(MathUtils.PI);             // 3.14159",
      "description": "Named exports allow a module to export multiple values. Imports must use the exact names (or rename with 'as'). Namespace imports collect all exports into an object."
    },
    {
      "title": "Default Exports and Mixing Export Types",
      "useCase": "Single main export with helpers",
      "code": "// ---- User.js ----\nexport default class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  getDisplayName() {\n    return this.name + ' &lt;' + this.email + '&gt;';\n  }\n}\n\n// Named helper alongside default\nexport function validateEmail(email) {\n  return email.includes('@');\n}\n\n// ---- app.js ----\n// Import default (any name) + named (must match)\nimport User, { validateEmail } from './User.js';\n\nconst user = new User('Alice', 'alice@example.com');\nconsole.log(user.getDisplayName());\n// 'Alice <alice@example.com>'\n\nconsole.log(validateEmail('test@test.com')); // true\n\n// Default import can be renamed freely:\nimport MyUser from './User.js';  // also works\n\n// But named imports must match:\n// import { validate } from './User.js'; // ERROR!",
      "description": "Default exports are ideal for the primary class/function of a module. The import name is arbitrary. Named exports alongside provide helper utilities with fixed names."
    },
    {
      "title": "Re-exporting and Barrel Files",
      "useCase": "Aggregating multiple modules",
      "code": "// ---- shapes/circle.js ----\nexport const PI = 3.14159;\nexport function area(radius) {\n  return PI * radius * radius;\n}\n\n// ---- shapes/square.js ----\nexport function area(side) {\n  return side * side;\n}\n\n// ---- shapes/index.js (barrel file) ----\nexport { area as circleArea, PI } from './circle.js';\nexport { area as squareArea } from './square.js';\n\n// ---- app.js ----\nimport { circleArea, squareArea, PI } from './shapes/index.js';\n\nconsole.log(circleArea(5));  // 78.53975\nconsole.log(squareArea(4));  // 16\nconsole.log(PI);             // 3.14159\n\n// Or re-export everything:\n// export * from './circle.js';\n// export * from './square.js';\n// (caution: name conflicts are silently dropped or cause errors)",
      "description": "Barrel files (index.js) re-export from multiple modules, providing a single import path. Use explicit re-exports to avoid naming conflicts."
    },
    {
      "title": "Dynamic Imports for Lazy Loading",
      "useCase": "Code splitting and on-demand loading",
      "code": "// ---- heavy-chart.js ----\nexport default function renderChart(data) {\n  // Expensive chart rendering logic\n  console.log('Rendering chart with', data.length, 'points');\n  return 'Chart rendered';\n}\n\nexport function formatData(raw) {\n  return raw.map(function(item) { return { x: item.x, y: item.y }; });\n}\n\n// ---- app.js ----\nconst button = document.getElementById('load-chart');\n\nbutton.addEventListener('click', async function() {\n  // Dynamic import — loads the module only on click\n  try {\n    const chartModule = await import('./heavy-chart.js');\n\n    // Default export is on .default\n    const renderChart = chartModule.default;\n    // Named exports are regular properties\n    const { formatData } = chartModule;\n\n    const rawData = [{ x: 1, y: 2 }, { x: 3, y: 4 }];\n    const formatted = formatData(rawData);\n    const result = renderChart(formatted);\n    console.log(result);\n  } catch (err) {\n    console.error('Failed to load chart module:', err);\n  }\n});\n\n// Dynamic imports enable smaller initial bundle sizes\n// and faster page loads — the browser only loads\n// heavy-chart.js when the user clicks the button",
      "description": "Dynamic import() returns a promise, enabling lazy loading. The module is fetched and executed only when needed. Default exports are accessed via .default."
    },
    {
      "title": "import.meta and Module Metadata",
      "useCase": "Accessing module information",
      "code": "// ---- config.js ----\n// import.meta provides metadata about the current module\n\n// In browsers:\nconsole.log(import.meta.url);\n// 'https://example.com/js/config.js'\n\n// In Node.js:\n// console.log(import.meta.url);\n// 'file:///home/user/project/js/config.js'\n\n// Using import.meta.url to resolve relative paths (browser):\nconst configUrl = new URL('./config.json', import.meta.url);\nconsole.log(configUrl.href);\n// 'https://example.com/js/config.json'\n\n// ---- app.js ----\nimport('./config.js');  // Just to run the above code\n\n// import.meta is also useful for:\n// - Worker constructors: new Worker(new URL('./worker.js', import.meta.url))\n// - Dynamic CSS imports\n// - Feature detection\n\n// Note: import.meta is only available in module scripts\n// &lt;script type=\"module\" src=\"app.js\"&gt;&lt;/script&gt;",
      "description": "import.meta provides metadata like the module URL. Useful for constructing relative URLs in module contexts. Only available in ES6 modules."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the correct syntax for a named export?",
      "options": [
        "export default const x = 1",
        "export const x = 1",
        "export = { x: 1 }",
        "module.exports = { x: 1 }"
      ],
      "answer": 1,
      "explanation": "Named exports use 'export' before a declaration: export const x = 1; or export { x };"
    },
    {
      "question": "How do you import a default export?",
      "options": [
        "import { default } from './module.js'",
        "import anything from './module.js'",
        "import * from './module.js'",
        "import default as x from './module.js'"
      ],
      "answer": 1,
      "explanation": "Default exports are imported without braces: import MyName from './module.js'. The import name can be anything."
    },
    {
      "question": "What is a live binding in ES6 modules?",
      "options": [
        "A variable that cannot change",
        "Imports are live references that see changes in the exporting module",
        "A locked variable",
        "A temporary variable"
      ],
      "answer": 1,
      "explanation": "ES6 modules provide live bindings — imported values are references to the exporting module's variables, not copies. Changes in the exporter are visible to importers."
    },
    {
      "question": "Can you use import and export inside a function?",
      "options": [
        "Yes, anywhere",
        "No, they are static and must be at the top level",
        "Only export inside functions",
        "Only import inside functions"
      ],
      "answer": 1,
      "explanation": "Static import/export statements must be at the top level of a module, outside any blocks or functions. Dynamic import() can be used anywhere."
    },
    {
      "question": "What does 'tree-shaking' mean in relation to modules?",
      "answers": [
        "Modules that fall over",
        "Bundlers removing unused exports to reduce bundle size",
        "Organizing code into a tree structure",
        "Shaking the module to find bugs"
      ],
      "answer": 1,
      "explanation": "Tree-shaking is a bundler optimization that removes unused exports from the final bundle. Named exports enable precise tree-shaking since the bundler knows exactly what's imported."
    },
    {
      "question": "How do you import everything from a module as a single object?",
      "options": [
        "import * as All from './module.js'",
        "import All from './module.js'",
        "import './module.js'",
        "import { * } from './module.js'"
      ],
      "answer": 0,
      "explanation": "import * as All from './module.js' imports all exports as properties of the All object. Access All.namedExport or All.default."
    },
    {
      "question": "What happens if you import a module that has already been imported elsewhere?",
      "options": [
        "It executes again",
        "It returns the cached module — executes only once",
        "It throws a duplicate import error",
        "It's ignored silently"
      ],
      "answer": 1,
      "explanation": "Modules are singletons — they are executed only once. The second import returns the same cached module instance."
    },
    {
      "question": "Are ES6 modules in strict mode?",
      "options": [
        "Yes, automatically",
        "No, strict mode must be declared",
        "Only if 'use strict' is added",
        "Only in Node.js"
      ],
      "answer": 0,
      "explanation": "ES6 modules are always in strict mode by default, without needing 'use strict'. This includes restrictions like no undeclared variables."
    },
    {
      "question": "What is the difference between export { x } and export default x?",
      "options": [
        "They are identical",
        "Named export requires exact import name; default allows any import name",
        "Default export is faster",
        "Named export is only for functions"
      ],
      "answer": 1,
      "explanation": "Named exports must be imported with the same name (or renamed with 'as'). Default exports can be imported with any name."
    },
    {
      "question": "What does import() return?",
      "options": [
        "The default export only",
        "A promise that resolves to the module namespace object",
        "The module code as a string",
        "undefined"
      ],
      "answer": 1,
      "explanation": "Dynamic import() returns a Promise that resolves to the module namespace object. Access default via .default and named exports as regular properties."
    }
  ]
};
