export const weakset = {
  "title": "WeakSet",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "<code>WeakSet</code> is a collection of <strong>objects only</strong> (no primitives), where each object can appear at most once.",
    "Objects are held <strong>weakly</strong> — if no other references exist, the object is eligible for <strong>garbage collection</strong>.",
    "WeakSet has <strong>no size property</strong>, no iteration methods, and only three methods: <code>add()</code>, <code>has()</code>, <code>delete()</code>.",
    "Primary use cases: <strong>tagging</strong> or <strong>marking</strong> objects without memory leaks (e.g., marking visited DOM nodes)."
  ],
  "laymanDefinition": "Imagine a guest list at an exclusive party. The bouncer has a mental list of VIPs, but doesn't write anything down — he just recognizes them. Once a VIP leaves the party (no longer around), the bouncer automatically forgets them. You can ask 'Is this person a VIP?' and the bouncer checks. But you can't ask 'How many VIPs are here?' or 'List all VIPs.' WeakSet is exactly this — a way to mark objects as part of a set, with automatic cleanup when the objects disappear.",
  "deepDive": [
    {
      "heading": "WeakSet Fundamentals — Weak Object References",
      "text": "WeakSet holds weak references to its objects. Adding an object to a WeakSet does not prevent its garbage collection. When all other references to the object are gone, the object is removed from the WeakSet automatically. This makes WeakSet ideal for tracking or tagging objects without interfering with their lifecycle."
    },
    {
      "heading": "Limited API — By Design",
      "text": "WeakSet has only three methods: add(obj), has(obj), and delete(obj). There is no size, no clear(), no iteration (forEach, keys, values, entries). The API is intentionally minimal because objects can be removed by GC at any time, making iteration unreliable. You can only check if a specific object is in the set."
    },
    {
      "heading": "WeakSet vs Set",
      "list": [
        "<strong>Values:</strong> Set accepts any type. WeakSet only accepts objects.",
        "<strong>References:</strong> Set holds strong references. WeakSet holds weak references.",
        "<strong>Iteration:</strong> Set is iterable (forEach, keys, values, entries). WeakSet is not iterable.",
        "<strong>Size:</strong> Set has size property. WeakSet does not.",
        "<strong>Use cases:</strong> Set for general-purpose unique collections. WeakSet for object tagging and lifecycle tracking."
      ]
    },
    {
      "heading": "WeakSet vs WeakMap — When to Use Each",
      "text": "Use WeakSet when you only need to track whether an object is in the collection (membership testing). Use WeakMap when you need to associate data with an object. WeakSet is simpler — think of it as a 'tag set' for objects. WeakMap is for key-value associations. Both provide the same weak-reference benefit of automatic cleanup."
    }
  ],
  "interviewAnswer": "WeakSet is a collection of objects held by weak reference, allowing garbage collection when no other references exist. It has three methods: add(obj), has(obj), delete(obj). It is not iterable and has no size property. Primary use cases: marking/tagging objects (e.g., visited DOM nodes, processed items), tracking object membership without preventing GC, implementing safe object registries, and detecting cycles in object graphs. The main advantage over Set is automatic cleanup — objects are removed from the WeakSet when they are garbage collected, preventing memory leaks.",
  "interviewQuestions": [
    {
      "question": "What is a WeakSet?",
      "answer": "A WeakSet is a collection of objects (only objects) held by weak reference. Objects are unique within the set and auto-removed when GC'd."
    },
    {
      "question": "What types can be added to a WeakSet?",
      "answer": "Only objects. Adding primitive values (numbers, strings, booleans) throws a TypeError."
    },
    {
      "question": "What methods does WeakSet have?",
      "answer": "add(obj), has(obj), and delete(obj). That is the complete API — no size, clear, or iteration methods."
    },
    {
      "question": "Why is WeakSet not iterable?",
      "answer": "Objects can be garbage collected at any time, making iteration unreliable. The limited API ensures consistent behavior despite weak references."
    },
    {
      "question": "What is the difference between Set and WeakSet?",
      "answer": "Set holds strong references (prevents GC) and accepts any value type. WeakSet holds weak references, only accepts objects, and is not iterable."
    },
    {
      "question": "What are common use cases for WeakSet?",
      "answer": "1) Tracking visited/marked objects without memory leaks. 2) Cycle detection in object graphs. 3) Tagging DOM elements. 4) Object deduplication with auto-cleanup."
    },
    {
      "question": "How does WeakSet prevent memory leaks?",
      "answer": "WeakSet holds weak references, so adding an object to a WeakSet doesn't prevent GC. When the object is no longer referenced, the WeakSet entry auto-clears."
    },
    {
      "question": "Can you check if an object is in a WeakSet?",
      "answer": "Yes, using ws.has(obj). This is the primary operation — membership testing."
    },
    {
      "question": "What happens to WeakSet entries when objects are garbage collected?",
      "answer": "They are automatically removed. has() returns false for objects that have been GC'd."
    },
    {
      "question": "When would you choose WeakSet over WeakMap?",
      "answer": "When you only need to track membership (is this object in the set?), not associate additional data. WeakSet is simpler when no values are needed."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"325\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">WeakSet — Object Tagging with Weak References</text><rect x=\"30\" y=\"65\" width=\"280\" height=\"120\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"170\" y=\"85\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">WeakSet</text><text x=\"170\" y=\"108\" fill=\"#9aa0b0\" font-size=\"11\">  {obj1, obj2, obj3}</text><text x=\"170\" y=\"130\" fill=\"#9aa0b0\" font-size=\"11\">  (weak references — no GC protection)</text><text x=\"170\" y=\"155\" fill=\"#9aa0b0\" font-size=\"11\">  has(obj) → true/false</text><text x=\"170\" y=\"173\" fill=\"#9aa0b0\" font-size=\"11\">  add(obj) | delete(obj)</text><rect x=\"370\" y=\"65\" width=\"240\" height=\"120\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"490\" y=\"85\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"13\" font-weight=\"bold\">Object References</text><text x=\"490\" y=\"110\" fill=\"#9aa0b0\" font-size=\"11\">let obj1 = new MyClass();</text><text x=\"490\" y=\"130\" fill=\"#9aa0b0\" font-size=\"11\">let obj2 = new MyClass();</text><text x=\"490\" y=\"150\" fill=\"#9aa0b0\" font-size=\"11\">let obj3 = new MyClass();</text><line x1=\"310\" y1=\"110\" x2=\"370\" y2=\"110\" stroke=\"var(--border)\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"340\" y=\"105\" fill=\"#9aa0b0\" font-size=\"9\">tag</text><rect x=\"30\" y=\"205\" width=\"580\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1\"/><text x=\"320\" y=\"228\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">Object tagging: mark objects as 'visited' or 'processed'</text><text x=\"320\" y=\"250\" text-anchor=\"middle\" fill=\"#9aa0b0\" font-size=\"11\">When obj is GC'd, WeakSet entry vanishes — no manual cleanup needed</text></svg>",
  "codeExamples": [
    {
      "title": "WeakSet Basics",
      "useCase": "Creating and using a WeakSet",
      "code": "const visited = new WeakSet();\n\nconst obj1 = { id: 'A' };\nconst obj2 = { id: 'B' };\nconst obj3 = { id: 'C' };\n\n// Mark objects as visited\nvisited.add(obj1);\nvisited.add(obj2);\n\n// Check membership\nconsole.log(visited.has(obj1)); // true\nconsole.log(visited.has(obj2)); // true\nconsole.log(visited.has(obj3)); // false\n\n// Remove a marking\nvisited.delete(obj2);\nconsole.log(visited.has(obj2)); // false\n\n// Primitives are NOT allowed\nconst ws = new WeakSet();\ntry {\n  ws.add(42); // TypeError!\n} catch (e) {\n  console.log('Error:', e.message);\n}\n\n// Different references are distinct\nconst a = { name: 'same' };\nconst b = { name: 'same' };\nvisited.add(a);\nconsole.log(visited.has(a)); // true\nconsole.log(visited.has(b)); // false (different reference)",
      "description": "WeakSet only accepts objects. Membership is reference-based, not value-based. Only three methods: add, has, delete."
    },
    {
      "title": "Object Tagging with WeakSet",
      "useCase": "Marking objects without modifying them",
      "code": "// Simple object tagging — no leaks\nconst processed = new WeakSet();\nconst cached = new WeakSet();\n\nfunction processData(data) {\n  // Skip if already processed\n  if (processed.has(data)) {\n    console.log('Already processed, skipping');\n    return;\n  }\n\n  console.log('Processing:', data.name);\n  processed.add(data);\n\n  // Process the data...\n}\n\nconst item1 = { name: 'Report A' };\nconst item2 = { name: 'Report B' };\n\nprocessData(item1); // Processing: Report A\nprocessData(item1); // Already processed, skipping\nprocessData(item2); // Processing: Report B\n\n// Cycle detection in object graphs\nconst seen = new WeakSet();\n\nfunction traverse(obj, depth = 0) {\n  if (obj === null || typeof obj !== 'object') return;\n\n  if (seen.has(obj)) {\n    console.log('Cycle detected, avoiding infinite loop');\n    return;\n  }\n\n  seen.add(obj);\n\n  for (const key of Object.keys(obj)) {\n    console.log('  '.repeat(depth) + key + ':', obj[key]);\n    traverse(obj[key], depth + 1);\n  }\n}\n\n// Create a circular reference\nconst graph = { name: 'parent', child: null };\ngraph.child = { name: 'child', parent: null };\ngraph.child.parent = graph; // Back-reference (creates cycle)\n\ntraverse(graph);\n// Will not infinite loop — cycle detected via WeakSet",
      "description": "WeakSet is ideal for tagging objects as 'processed,' 'visited,' or 'cached' without modifying the objects or leaking memory."
    },
    {
      "title": "DOM Node Tracking with WeakSet",
      "useCase": "Tracking DOM elements without memory leaks",
      "code": "// In browser environments\nconst trackedElements = new WeakSet();\nconst eventListeners = new WeakSet();\n\nfunction trackElement(el) {\n  if (trackedElements.has(el)) {\n    console.log('Element already tracked');\n    return;\n  }\n\n  trackedElements.add(el);\n  console.log('Now tracking:', el.tagName);\n}\n\n// When elements are removed from DOM, they can be GC'd\n// WeakSet entries are automatically cleaned up\n\n// Mark DOM nodes as 'initialized'\nconst initialized = new WeakSet();\n\nfunction initComponent(el) {\n  if (initialized.has(el)) {\n    return; // Already initialized\n  }\n\n  initialized.add(el);\n  // Initialize component...\n  el.setAttribute('data-component', 'active');\n}\n\n// Safe: even if element is removed, WeakSet doesn't hold a strong ref\n\n// Real-world: marking nodes for batch processing\nconst pendingBatch = new WeakSet();\n\nfunction markForBatchUpdate(el) {\n  if (!pendingBatch.has(el)) {\n    pendingBatch.add(el);\n    scheduleBatch();\n  }\n}\n\nfunction processBatch() {\n  // Process all pending elements\n  // Since WeakSet is not iterable, we use a different approach\n  // Elements mark themselves; we process based on a separate list\n  console.log('Batch processing complete');\n}\n\n// Using WeakSet for event deduplication\nconst listenersWithHandler = new WeakSet();\n\nfunction addOnceListener(el, event, handler) {\n  const key = { el: el, event: event, handler: handler };\n  // This is contrived — normally you'd track per-element\n  // The key benefit: no memory leak when handler is GC'd\n}",
      "description": "WeakSet is useful for tracking DOM elements and component initialization states without causing memory leaks."
    },
    {
      "title": "WeakSet vs Set — Memory Leak Comparison",
      "useCase": "Understanding when to use WeakSet over Set",
      "code": "// Set — STRONG references (can leak)\nconst strongSet = new Set();\n\n(function() {\n  const obj = { data: new Array(100000).fill('x') };\n  strongSet.add(obj);\n  // obj still in strongSet after IIFE ends\n  // obj cannot be GC'd — memory held!\n})();\n\n// strongSet still contains obj — memory NOT freed\nconsole.log(strongSet.size); // 1 (the object is still there!)\n\n// WeakSet — WEAK references (no leak)\nconst weakSet = new WeakSet();\n\n(function() {\n  const obj = { data: new Array(100000).fill('x') };\n  weakSet.add(obj);\n  // After IIFE, obj reference is gone\n  // WeakSet's weak reference doesn't prevent GC\n  // obj will be GC'd — memory freed!\n})();\n\n// Cannot verify size — WeakSet has no size property\n// But the entry IS automatically removed when obj is GC'd\n\n// Practical: marking objects as 'initialized'\nconst initializedSet = new Set();   // Bad: prevents GC\nconst initializedWeak = new WeakSet(); // Good: allows GC\n\n// Use Set when:\n// - You need to iterate over all values\n// - You need to know the size\n// - Values are primitives\n// - You need strong references (prevent GC)\n\n// Use WeakSet when:\n// - You only need membership testing\n// - Keys are objects\n// - You want automatic cleanup\n// - You need to prevent memory leaks",
      "description": "Set holds strong references (can cause memory leaks). WeakSet holds weak references (auto-cleanup). Choose based on your lifecycle needs."
    },
    {
      "title": "Practical WeakSet Patterns",
      "useCase": "Real-world use cases for WeakSet",
      "code": "// 1. Object deduplication in data processing\nconst seenObjects = new WeakSet();\n\nfunction deduplicate(arr) {\n  const result = [];\n  for (const obj of arr) {\n    if (obj !== null && typeof obj === 'object') {\n      if (!seenObjects.has(obj)) {\n        seenObjects.add(obj);\n        result.push(obj);\n      }\n    } else {\n      result.push(obj); // Primitives pass through\n    }\n  }\n  return result;\n}\n\nconst a = { id: 1 };\nconst b = { id: 2 };\nconst c = a; // Same reference\n\nconsole.log(deduplicate([a, b, c])); // [{ id: 1 }, { id: 2 }]\n// c is skipped — same reference as a\n\n// 2. Object registry with auto-cleanup\nconst registry = new WeakSet();\n\nclass ManagedResource {\n  constructor(name) {\n    this.name = name;\n    registry.add(this);\n  }\n\n  isManaged() {\n    return registry.has(this);\n  }\n}\n\nconst res = new ManagedResource('db-connection');\nconsole.log(res.isManaged()); // true\n// When res is GC'd, registry auto-cleans\n\n// 3. Feature flag tracking per object\nconst featureFlags = new WeakSet();\n\nfunction enableFeature(obj) {\n  featureFlags.add(obj);\n}\n\nfunction hasFeature(obj) {\n  return featureFlags.has(obj);\n}\n\n// 4. Safe mixin/plugin system\nconst pluginInstalled = new WeakSet();\n\nfunction installPlugin(target, plugin) {\n  if (pluginInstalled.has(target)) {\n    console.log('Plugin already installed');\n    return;\n  }\n  pluginInstalled.add(target);\n  // Apply plugin to target...\n}",
      "description": "WeakSet is useful for deduplication, object registries, feature flags, and plugin systems where automatic cleanup is desired."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What types can be added to a WeakSet?",
      "options": [
        "Any type",
        "Objects only",
        "Primitives only",
        "Strings only"
      ],
      "answer": 1,
      "explanation": "WeakSet only accepts objects. Adding primitives (numbers, strings, booleans) throws a TypeError."
    },
    {
      "question": "What methods does WeakSet have?",
      "options": [
        "add, has, delete",
        "add, has, delete, clear",
        "add, has, delete, size",
        "add, has, delete, forEach"
      ],
      "answer": 0,
      "explanation": "WeakSet has exactly three methods: add(), has(), and delete(). No clear(), no size, no iteration."
    },
    {
      "question": "Why does WeakSet not have a size property?",
      "options": [
        "Objects can be GC'd at any time, making size unreliable",
        "It was omitted from the spec",
        "Performance optimization",
        "Memory constraints"
      ],
      "answer": 0,
      "explanation": "WeakSet entries can be garbage collected at any time, so the size would be unpredictable."
    },
    {
      "question": "Is WeakSet iterable?",
      "options": [
        "Yes, with for...of",
        "No, it has no iteration methods",
        "Only with the values() method",
        "Only in modern browsers"
      ],
      "answer": 1,
      "explanation": "WeakSet has no iteration methods and cannot be used with for...of or forEach."
    },
    {
      "question": "What is the primary advantage of WeakSet over Set?",
      "options": [
        "Faster add/remove operations",
        "Automatic cleanup when objects are garbage collected",
        "Support for primitive values",
        "Larger capacity"
      ],
      "answer": 1,
      "explanation": "WeakSet holds weak references, so entries are automatically removed when objects are garbage collected."
    },
    {
      "question": "What is a common use case for WeakSet?",
      "options": [
        "Sorting arrays",
        "Marking objects as visited without memory leaks",
        "Storing key-value pairs",
        "String manipulation"
      ],
      "answer": 1,
      "explanation": "WeakSet is ideal for tagging/marking objects (like visited, processed, initialized) without preventing garbage collection."
    },
    {
      "question": "Can you check if an object is in a WeakSet?",
      "options": [
        "Yes, with has(obj)",
        "No, WeakSet doesn't support lookup",
        "Only during iteration",
        "With indexOf()"
      ],
      "answer": 0,
      "explanation": "has(obj) is the membership test. It returns true if the object is in the WeakSet."
    },
    {
      "question": "What is the difference between WeakSet and WeakMap?",
      "options": [
        "WeakSet tracks membership only; WeakMap associates values with keys",
        "They are identical",
        "WeakSet is iterable; WeakMap is not",
        "WeakSet allows primitives; WeakMap does not"
      ],
      "answer": 0,
      "explanation": "WeakSet is for tagging objects (membership testing). WeakMap is for associating data values with object keys."
    },
    {
      "question": "What does ws.delete(obj) return?",
      "options": [
        "true if the object was in the set, false otherwise",
        "The deleted object",
        "undefined",
        "The WeakSet itself"
      ],
      "answer": 0,
      "explanation": "delete() returns true if the object was present and removed, false if it was not found."
    },
    {
      "question": "When would you choose WeakSet over a regular Set?",
      "options": [
        "When you need to iterate over all values",
        "When you need automatic cleanup of objects that are no longer referenced",
        "When storing primitive values",
        "When you need to know the number of entries"
      ],
      "answer": 1,
      "explanation": "Use WeakSet when objects in the set should not be prevented from garbage collection. Use Set when you need iteration or size."
    }
  ]
};
