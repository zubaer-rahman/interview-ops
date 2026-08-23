const e={title:"Shallow & Deep Copy",difficulty:"intermediate",estimatedMinutes:20,tldr:["A <strong>shallow copy</strong> copies the top-level properties only. Nested objects/arrays are still <strong>shared by reference</strong> between the original and the copy.","A <strong>deep copy</strong> creates a completely independent clone — all nested levels are duplicated, no references are shared.","Shallow copy methods: <code>Object.assign()</code>, spread operator (<code>{...obj}</code>), <code>Array.slice()</code>, <code>Array.concat()</code>, <code>Array.from()</code>.","Deep copy methods: <code>structuredClone()</code> (modern, recommended), <code>JSON.parse(JSON.stringify(obj))</code> (limited), or recursive cloning."],laymanDefinition:"Imagine you have a bookshelf with a photo album on it. A shallow copy is like buying a new bookshelf and putting the SAME photo album on it — if someone changes the photos in the album, both bookshelves show the changes. A deep copy is like buying a new bookshelf, buying a new photo album, and making duplicate copies of every single photo. Now the two shelves are completely independent — changes to one don't affect the other. In JavaScript, objects work the same way: shallow copies share nested objects, deep copies don't.",deepDive:[{heading:"Primitives vs References: The Root Cause",text:"Understanding copy types starts with primitives vs references. Primitive values (strings, numbers, booleans, null, undefined, symbols, BigInt) are stored directly — copying them is always independent. Objects, arrays, and functions are stored by reference — the variable holds a pointer to the memory location. When you copy an object with a shallow copy, the top-level primitives are independent, but any nested objects are still references to the same memory location."},{heading:"Shallow Copy Methods and Their Traps",text:"Object.assign(target, ...sources) copies own enumerable properties — works for flat objects but shares nested references. Spread operator ({...obj}) is syntax sugar for the same thing. Array.slice() creates a new array with shallow-copied elements. The common trap: modifying a nested property in a shallow copy also changes the original because they share the same nested object reference."},{heading:"structuredClone() — The Modern Deep Clone",text:"structuredClone() is a built-in function (available in all modern browsers and Node.js 17+) that performs a structured deep copy. It handles: objects, arrays, Map, Set, Date, RegExp, Blob, File, ImageData, typed arrays, and more. It does NOT handle: functions, DOM nodes, Error objects, WeakMap, WeakSet, Proxy, or objects with special internal slots. It correctly handles circular references."},{heading:"JSON.parse(JSON.stringify(obj)) — The Classic Trick",text:"This pattern works by serializing to JSON and parsing back — creating a new object. Pros: simple, handles nested objects and arrays. Cons: loses functions, undefined, Symbols, Date (becomes string), Map/Set (become {}), BigInt (throws), circular references (throws). It's useful for simple data but not for complex objects."},{heading:"Manual Deep Clone (Recursive)",text:"A recursive deep clone function checks each property type: if it's a primitive (or null), copy directly; if it's an array, map with recursion; if it's an object, create a new object and recurse; handle Date, RegExp, Map, Set specially. This gives full control but must handle circular references and edge cases. Libraries like lodash.cloneDeep implement robust versions."}],interviewAnswer:"Shallow copy duplicates top-level properties but shares nested object references. Methods: spread operator ({...obj}), Object.assign(), Array.slice(). Deep copy creates fully independent clones. Methods: structuredClone() (modern, recommended — handles Date, Map, Set, circular refs), JSON.parse(JSON.stringify(obj)) (simple but loses functions, dates, undefined), or recursive cloning for full control. Use shallow copies for flat objects or when you want intentional sharing. Use deep copies when mutations in the copy should not affect the original — common in state management (React/Vue), undo/redo, and data processing pipelines.",interviewQuestions:[{question:"What is the difference between shallow copy and deep copy?",answer:"Shallow copy duplicates only the top-level properties. Nested objects are shared by reference — modifying them in the copy affects the original. Deep copy recursively duplicates everything — the original and copy are completely independent."},{question:"How do you create a shallow copy of an object?",answer:"Using spread operator: const copy = { ...original }. Or Object.assign: const copy = Object.assign({}, original). Both create a shallow copy — top-level properties are independent, but nested objects are shared."},{question:"How do you create a shallow copy of an array?",answer:"Using spread: const copy = [...arr]. Or slice: const copy = arr.slice(). Or concat: const copy = [].concat(arr). Or Array.from: const copy = Array.from(arr). All create shallow copies."},{question:"What is structuredClone() and when was it introduced?",answer:"structuredClone() is a built-in deep clone function available in modern browsers and Node.js 17+. It handles objects, arrays, Date, RegExp, Map, Set, Blob, typed arrays, and circular references. It does NOT clone functions, DOM nodes, or Error objects."},{question:"What are the limitations of JSON.parse(JSON.stringify(obj)) for deep cloning?",answer:"It loses: functions (omitted), undefined (omitted), Symbols (omitted), Date (becomes string), Map/Set (become empty objects), BigInt (throws), circular references (throws), RegExp (becomes {}), custom prototypes (lost). Use for plain data objects only."},{question:"How do you prove a copy is shallow vs deep?",answer:"Modify a nested property in the copy and check the original: <code>const copy = {...original}; copy.nested.x = 99; console.log(original.nested.x);</code> If it changed, it's shallow. For deep copy, original.nested.x remains unchanged."},{question:"What is the spread operator's behavior with nested objects?",answer:"The spread operator ({...obj}) creates a shallow copy. Top-level primitives are independent. Nested objects are shared references. Modifying copy.nested.prop changes original.nested.prop. For deep copy, use structuredClone() or a recursive function."},{question:"How do you deep clone an array with nested objects?",answer:"Best: structuredClone(arr). Alternative: arr.map(item => typeof item === 'object' ? structuredClone(item) : item). Or for simple data: JSON.parse(JSON.stringify(arr)). Or lodash's cloneDeep(arr)."},{question:"Can structuredClone handle circular references?",answer:"Yes. structuredClone correctly handles circular references — it tracks visited objects and creates the appropriate circular structure in the clone. JSON.parse(JSON.stringify()) throws on circular references."},{question:"When would you intentionally use a shallow copy instead of deep?",answer:"Use shallow copy when: (1) the object is flat (no nesting) — shallow = deep. (2) You want nested objects to stay shared (e.g., sharing a configuration object across components). (3) Performance matters — shallow copy is O(1) vs O(n) for deep copy. (4) Immutable state updates where only the top level changes."}],diagramSvg:`<svg viewBox="0 0 700 440" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="420" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Shallow Copy vs Deep Copy</text><rect x="40" y="65" width="290" height="150" rx="8" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="185" y="90" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">Original Object</text><rect x="60" y="105" width="250" height="45" rx="4" fill="#1a1d28" stroke="#9aa0b0" stroke-width="1"/><text x="80" y="124" fill="#e8eaed" font-size="11" font-family="monospace">name: 'Alice'  (primitive)</text><text x="80" y="142" fill="#e8eaed" font-size="11" font-family="monospace">address: { city: 'NY' }  [ref]</text><line x1="310" y1="105" x2="350" y2="105" stroke="#fbbf24" stroke-width="2"/><text x="330" y="98" fill="#fbbf24" font-size="10">copy</text><rect x="350" y="65" width="290" height="65" rx="8" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="495" y="88" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Shallow Copy</text><text x="370" y="108" fill="#e8eaed" font-size="11" font-family="monospace">name: 'Alice'  [independent √]</text><text x="370" y="126" fill="#f87171" font-size="11" font-family="monospace">address: { city: 'NY' }  [shared!]</text><line x1="495" y1="135" x2="495" y2="175" stroke="#f87171" stroke-width="2"/><rect x="350" y="175" width="290" height="40" rx="8" fill="#1a1d28" stroke="#f87171" stroke-width="1"/><text x="495" y="200" text-anchor="middle" fill="#f87171" font-size="11">Modifying copy.address.city changes original!</text><line x1="185" y1="230" x2="185" y2="260" stroke="#98c379" stroke-width="2"/><rect x="40" y="260" width="290" height="65" rx="8" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="185" y="283" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">Deep Copy</text><text x="60" y="303" fill="#e8eaed" font-size="11" font-family="monospace">name: 'Alice'  address: { city: 'NY' }</text><text x="60" y="320" fill="#9aa0b0" font-size="10">[everything is independent — all new references]</text><line x1="330" y1="292" x2="350" y2="292" stroke="#fbbf24" stroke-width="2"/><text x="340" y="285" fill="#fbbf24" font-size="10">copy</text><rect x="350" y="260" width="290" height="65" rx="8" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="495" y="283" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Deep Copy</text><text x="370" y="303" fill="#e8eaed" font-size="11" font-family="monospace">name: 'Alice'  address: { city: 'NY' }</text><text x="370" y="320" fill="#98c379" font-size="10">[all independent — safe to mutate]</text></svg>`,codeExamples:[{title:"Shallow Copy with Spread Operator — The Trap",useCase:"Demonstrating shared references",code:`const original = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'coding']
};

const shallowCopy = { ...original };

// Top-level change — independent
shallowCopy.name = 'Bob';
console.log(original.name);  // 'Alice' (independent)

// Nested change — SHARED (the trap!)
shallowCopy.address.city = 'Boston';
console.log(original.address.city);  // 'Boston' (changed!)

shallowCopy.hobbies.push('gaming');
console.log(original.hobbies);  // ['reading', 'coding', 'gaming'] (changed!)

// This is the most common interview bug:
// const copy = { ...obj };
// copy.nested.value = 10; ← modifies original.nested.value too!`,description:"Spread operator creates a shallow copy. The name property is independent (primitive), but address and hobbies are shared references. Modifying nested objects in the copy also changes the original."},{title:"Deep Copy with structuredClone()",useCase:"Creating fully independent clones",code:`const original = {
  name: 'Alice',
  address: { city: 'New York', zip: '10001' },
  hobbies: ['reading', 'coding'],
  metadata: new Map([['theme', 'dark'], ['lang', 'en']]),
  createdAt: new Date('2024-01-15'),
  pattern: /\\d{3}-\\d{4}/i
};

const deepCopy = structuredClone(original);

// All levels are independent
deepCopy.name = 'Bob';
deepCopy.address.city = 'Boston';
deepCopy.hobbies.push('gaming');
deepCopy.metadata.set('lang', 'fr');

console.log(original.name);              // 'Alice' (unchanged)
console.log(original.address.city);      // 'New York' (unchanged)
console.log(original.hobbies);           // ['reading', 'coding'] (unchanged)
console.log(original.metadata.get('lang')); // 'en' (unchanged)

// structuredClone also handles circular references:
const circular = { name: 'Loop' };
circular.self = circular;
const cloned = structuredClone(circular);
console.log(cloned.self === cloned);  // true (circular preserved!)

// Limitations:
// structuredClone does NOT clone:
// - Functions
// - DOM nodes
// - Error objects
// - WeakMap / WeakSet
// - Proxy objects`,description:"structuredClone() is the recommended modern deep clone. It handles Date, Map, Set, RegExp, typed arrays, and even circular references. It does not clone functions or DOM nodes."},{title:"JSON.parse(JSON.stringify()) Deep Clone",useCase:"Simple deep clone for plain data",code:`function jsonClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: 'Alice',
  address: { city: 'NY' },
  count: 42,
  active: true
};

const cloned = jsonClone(original);
cloned.address.city = 'LA';
console.log(original.address.city); // 'NY' (safe!)

// But watch the edge cases:
const tricky = {
  fn: function() { return 1; },           // LOST
  date: new Date('2024-01-15'),           // becomes string
  undef: undefined,                        // LOST
  big: 123n,                               // TypeError!
  map: new Map([['a', 1]]),               // becomes {}
  set: new Set([1, 2, 3]),                // becomes {}
  nested: { x: undefined }                // key is lost
};

// TypeError: Do not know how to serialize a BigInt
try {
  jsonClone(tricky);
} catch (e) {
  console.log('Error:', e.message);
}

// jsonClone is great for: API responses, config objects, store state
// Avoid jsonClone for: objects with functions, dates, Maps, Sets, circular refs`,description:"JSON clone is simple and works for plain data objects. But it silently loses many types (functions, undefined) and throws on others (BigInt, circular refs). Use only for JSON-safe data."},{title:"Manual Recursive Deep Clone Function",useCase:"Custom deep clone with full control",code:`function deepClone(value, seen) {
  seen = seen || new WeakMap();

  // Handle circular references
  if (seen.has(value)) return seen.get(value);

  // Primitives and functions — return as-is
  if (value === null || typeof value !== 'object') return value;

  // Date
  if (value instanceof Date) return new Date(value.getTime());

  // RegExp
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);

  // Map
  if (value instanceof Map) {
    const result = new Map();
    seen.set(value, result);
    value.forEach(function(v, k) {
      result.set(deepClone(k, seen), deepClone(v, seen));
    });
    return result;
  }

  // Set
  if (value instanceof Set) {
    const result = new Set();
    seen.set(value, result);
    value.forEach(function(v) {
      result.add(deepClone(v, seen));
    });
    return result;
  }

  // Array or Object
  const result = Array.isArray(value) ? [] : {};
  seen.set(value, result);

  Object.keys(value).forEach(function(key) {
    result[key] = deepClone(value[key], seen);
  });

  // Handle Symbol keys
  Object.getOwnPropertySymbols(value).forEach(function(sym) {
    result[sym] = deepClone(value[sym], seen);
  });

  return result;
}

// Usage
const original = {
  name: 'Alice',
  nested: { items: [1, { x: 2 }] },
  date: new Date(),
  map: new Map([['key', 'val']]),
  self: null
};
original.self = original;  // Circular reference

const cloned = deepClone(original);
console.log(cloned.nested.items[1].x); // 2
console.log(cloned.self === cloned);   // true (circular preserved)
console.log(cloned.date instanceof Date); // true

// Note: For production, use structuredClone() or lodash.cloneDeep
// Manual clone is for understanding the concept and customization`,description:"A recursive deep clone handles each type specifically. The WeakMap tracks visited objects for circular reference support. Customize it to handle additional types as needed."},{title:"Shallow vs Deep — Real-World State Management",useCase:"React state update patterns",code:`const state = {
  user: {
    name: 'Alice',
    address: { city: 'NY' }
  },
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false
    }
  }
};

// BAD: Direct mutation (shallow copy doesn't help with nested)
const badCopy = { ...state };
badCopy.user.name = 'Bob';           // Mutates state.user.name!
badCopy.settings.notifications.email = false;  // Mutates!

// GOOD: Deep copy for full independence
function updateSettings(state, newSettings) {
  const newState = structuredClone(state);
  Object.assign(newState.settings, newSettings);
  return newState;
}

// BETTER: Immutable update with spread at each level
function updateUserCity(state, newCity) {
  return {
    ...state,
    user: {
      ...state.user,
      address: {
        ...state.user.address,
        city: newCity  // Only the changed leaf is new
      }
    }
  };
}

const updated = updateUserCity(state, 'LA');
console.log(state.user.address.city);    // 'NY' (original preserved)
console.log(updated.user.address.city); // 'LA' (new value)

// Benefits of immutable updates:
// - Easy change detection (reference equality)
// - No accidental mutations
// - Time-travel debugging
// - Performance (only clones changed branches)`,description:"Shallow copies are insufficient for nested state mutations. Deep copy with structuredClone or immutable update patterns (spread at each level) ensure state immutability."}],mcqQuestions:[{question:"What is a shallow copy?",options:["Copies only primitive values","Copies top-level properties; nested objects are shared","Copies everything including nested objects independently","Copies nothing — returns the same reference"],answer:1,explanation:"A shallow copy duplicates the top-level properties. Nested objects and arrays are still shared by reference between the original and the copy."},{question:"Which method creates a DEEP copy of an object?",options:["Object.assign()","Spread operator ({...obj})","structuredClone()","Array.slice()"],answer:2,explanation:"structuredClone() creates a true deep copy. Object.assign, spread, and Array.slice all create shallow copies."},{question:"What happens when you modify a nested property in a shallow copy?",options:["Only the copy is affected","Both the original and the copy are affected","The modification is ignored","JavaScript throws an error"],answer:1,explanation:"Shallow copies share nested object references. Modifying a nested property in the copy also changes the original because they point to the same nested object."},{question:"What does the spread operator ({...obj}) create?",options:["A deep copy","A shallow copy","A reference to the original","A frozen copy"],answer:1,explanation:"The spread operator creates a shallow copy. Top-level primitives are independent, but nested objects are shared."},{question:"Which of these is NOT a limitation of JSON.parse(JSON.stringify(obj))?",options:["Loses functions","Loses undefined values","Handles circular references","Converts Date to string"],answer:2,explanation:"JSON.parse(JSON.stringify(obj)) does NOT handle circular references — it throws a TypeError. All other options are known limitations."},{question:"What does structuredClone() do with functions?",options:["Converts them to strings","Copies them correctly","Throws a DataCloneError","Ignores them"],answer:2,explanation:"structuredClone() cannot clone functions and throws a DataCloneError if a function is encountered."},{question:"How can you verify if a copy is deep or shallow?",options:["Check if copy === original","Modify a nested property in the copy and check the original","Use console.log","There is no way to verify"],answer:1,explanation:"Modify a deeply nested property in the copy and check if the original was also modified. If yes, it's a shallow copy."},{question:"What is the most common interview bug related to copying?",options:["Using structuredClone in older browsers","Assuming spread operator creates a deep copy","Using JSON.parse for date objects","Using Object.assign with null source"],answer:1,explanation:"Many developers assume {...obj} creates a deep copy and are surprised when modifying a nested property also changes the original."},{question:"When would you prefer a shallow copy over a deep copy?",options:["When the object has nested objects that should stay shared","When you need complete independence","When the object has circular references","When the object contains functions"],answer:0,explanation:"Use shallow copy when intentional sharing is desired, or when the object is flat (no nesting). Deep copies are needed for complete independence."},{question:"What is the time complexity difference between shallow and deep copy?",options:["Shallow is O(n), deep is O(1)","Shallow is O(1), deep is O(n) where n is the total number of properties","Both are O(1)","Both are O(n)"],answer:1,explanation:"Shallow copy is O(1) — just copies references. Deep copy is O(n) where n is the total number of properties across all nesting levels — must visit everything."}]};export{e as shallow_deep_copy};
