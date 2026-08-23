const e={title:"WeakMap",difficulty:"advanced",estimatedMinutes:25,tldr:["<code>WeakMap</code> is a collection of key-value pairs where keys are <strong>objects</strong> (or non-registered symbols) and values can be any type.","Keys are held <strong>weakly</strong> — if there are no other references to the key object, it is eligible for <strong>garbage collection</strong>.","WeakMap has <strong>no size property</strong>, no <code>clear()</code> method, and is <strong>not iterable</strong> (no keys(), values(), entries()).","Primary use cases: <strong>private data</strong> for objects, <strong>caching</strong> computed values, and <strong>avoiding memory leaks</strong>."],laymanDefinition:"Imagine a post-it note system where you can attach private notes to different people (objects), but the notes vanish automatically when the person leaves the room. You can look up your note for a specific person, but you can't list all people who have notes. You can't count the notes either. If a person walks out (is no longer referenced), their note disappears with them — no need to clean up manually. That's WeakMap: a way to associate private data with objects that auto-cleans when the objects are gone.",deepDive:[{heading:"WeakMap Fundamentals — Weak References",text:"The 'weak' in WeakMap refers to how keys are held. A WeakMap holds a 'weak reference' to its key objects. This means the existence of the key in the WeakMap does not prevent garbage collection. When all other references to the key object are gone, the key-value pair is automatically removed from the WeakMap. This is critical for preventing memory leaks in long-lived applications."},{heading:"WeakMap API — Limited but Purposeful",text:"WeakMap has only four methods: set(key, value), get(key), has(key), and delete(key). There is no size, no clear(), no iteration methods (keys, values, entries, forEach). The limited API is intentional — because references are weak and keys can disappear at any time (during garbage collection), a size or iteration API would be unreliable."},{heading:"WeakMap for Private Data",text:"WeakMap is commonly used to store private data associated with objects. The WeakMap is defined in a closure and only the privileged functions have access to it. External code cannot access the private data because it doesn't have access to the WeakMap instance. When the object is garbage collected, the private data is automatically cleaned up."},{heading:"WeakMap for Caching and Memoization",text:"WeakMap is ideal for caching computed values or results tied to specific objects. If you need to cache expensive computations per object, WeakMap ensures the cache entry is automatically removed when the source object is no longer needed, preventing memory leaks in caching scenarios."},{heading:"WeakMap vs Map",list:["<strong>Keys:</strong> Map accepts any type. WeakMap only accepts objects (or non-registered symbols).","<strong>References:</strong> Map holds strong references. WeakMap holds weak references. WeakMap keys can be GC'd.","<strong>Iteration:</strong> Map is iterable (keys, values, entries, forEach). WeakMap is not iterable.","<strong>Size:</strong> Map has size property. WeakMap does not (keys may disappear at any time).","<strong>Use cases:</strong> Map for general-purpose key-value storage. WeakMap for object-private data and memory-safe caching."]}],interviewAnswer:"WeakMap is a collection that holds weak references to its object keys, allowing garbage collection when no other references exist. It has a limited API — set, get, has, delete — and is not iterable. Primary use cases: storing private data associated with objects (using closure-scoped WeakMaps), caching computed values per object without preventing GC, preventing memory leaks in DOM element associations, and implementing observable patterns. WeakMap keys must be objects (or non-registered symbols); primitive values are not allowed. The main advantage over Map is automatic cleanup — when the key object is GC'd, the entry is removed automatically.",interviewQuestions:[{question:"What is a WeakMap?",answer:"A WeakMap is a collection of key-value pairs where keys are objects (held weakly) and values can be any type. Weak references allow garbage collection."},{question:"What types can be WeakMap keys?",answer:"Only objects and non-registered symbols. Primitive values (strings, numbers, booleans) are not allowed as WeakMap keys."},{question:"Why does WeakMap not have a size property?",answer:"Because references are weak, keys can be garbage collected at any time. The size could change unpredictably, making it unreliable and inconsistent."},{question:"Why is WeakMap not iterable?",answer:"Keys can be garbage collected at any time during iteration, leading to inconsistent results. The limited API ensures predictable behavior despite weak references."},{question:"What is the difference between Map and WeakMap?",answer:"Map holds strong references and allows any key type. WeakMap holds weak references, only allows object keys, has no iteration methods, and no size."},{question:"What are common use cases for WeakMap?",answer:"1) Private data storage for objects. 2) Caching/memoization per object. 3) Avoiding memory leaks with DOM elements. 4) Storing metadata without modifying objects."},{question:"How does WeakMap prevent memory leaks?",answer:"WeakMap doesn't prevent GC of its key objects. When a key is no longer referenced elsewhere, the WeakMap entry is automatically removed, preventing lingering references."},{question:"What methods does WeakMap have?",answer:"set(key, value), get(key), has(key), delete(key). That is the complete API — no size, clear, keys, values, entries, or forEach."},{question:"Can you use a WeakMap key that has been garbage collected?",answer:"No. If the key object has been GC'd, the entry is automatically removed. get() returns undefined and has() returns false for GC'd keys."},{question:"What happens to WeakMap entries when the key object goes out of scope?",answer:"When all strong references to the key object are gone, the key is eligible for GC. At the next GC cycle, the entry is automatically removed from the WeakMap."}],diagramSvg:`<svg viewBox="0 0 650 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="630" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="325" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">WeakMap — Weak References for Object Keys</text><rect x="30" y="65" width="280" height="120" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="85" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">WeakMap</text><text x="170" y="105" fill="#9aa0b0" font-size="11">  obj1 → { private: 'data1' }</text><text x="170" y="125" fill="#9aa0b0" font-size="11">  obj2 → { private: 'data2' }</text><text x="170" y="145" fill="#9aa0b0" font-size="11">  obj3 → { private: 'data3' }</text><text x="170" y="170" fill="#e64745" font-size="10">  (weak references — not counted by GC)</text><rect x="370" y="65" width="240" height="120" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="490" y="85" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">Strong References</text><text x="490" y="110" fill="#9aa0b0" font-size="11">let obj1 = new MyClass();</text><text x="490" y="130" fill="#9aa0b0" font-size="11">let obj2 = new MyClass();</text><text x="490" y="150" fill="#9aa0b0" font-size="11">let obj3 = new MyClass();</text><line x1="310" y1="100" x2="370" y2="100" stroke="var(--border)" stroke-width="1" stroke-dasharray="4"/><text x="340" y="95" fill="#9aa0b0" font-size="9">keys</text><rect x="30" y="215" width="580" height="100" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1"/><text x="320" y="240" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">When obj3 = null (no strong refs)…</text><text x="320" y="265" fill="#9aa0b0" font-size="11">GC removes obj3 from WeakMap automatically</text><text x="320" y="285" fill="#9aa0b0" font-size="11">No manual cleanup needed — automatic memory management</text><text x="320" y="305" fill="#98c379" font-size="11">Use cases: private data, caches, DOM metadata, event listeners</text></svg>`,codeExamples:[{title:"WeakMap Basics",useCase:"Creating and using a WeakMap",code:`const wm = new WeakMap();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

// Set values
wm.set(obj1, 'private data for obj1');
wm.set(obj2, { secret: 42, role: 'admin' });

// Get values
console.log(wm.get(obj1)); // 'private data for obj1'
console.log(wm.get(obj2)); // { secret: 42, role: 'admin' }

// Check existence
console.log(wm.has(obj1)); // true
console.log(wm.has({})); // false (different reference)

// Delete
console.log(wm.delete(obj1)); // true
console.log(wm.has(obj1)); // false

// Primitive keys are NOT allowed
const wm2 = new WeakMap();
try {
  wm2.set('string', 'value'); // TypeError!
} catch (e) {
  console.log('Error:', e.message); // Invalid value used as WeakMap key
}

// Symbol keys — only non-registered symbols work
const sym = Symbol('test');
const wm3 = new WeakMap();
// wm3.set(sym, 'value'); // OK in modern JS (ES2023+)
// wm3.set(Symbol.for('global'), 'value'); // TypeError! Registered symbols are not allowed`,description:"WeakMap only accepts object keys. Primitive values cause TypeError. The API is minimal: set, get, has, delete."},{title:"Private Data with WeakMap",useCase:"Encapsulating private object state",code:`// Private data stored in WeakMap — inaccessible from outside
const _privateData = new WeakMap();

class User {
  constructor(name, ssn) {
    // Store sensitive data in WeakMap
    _privateData.set(this, {
      ssn: ssn,
      createdAt: new Date()
    });

    // Public property
    this.name = name;
  }

  getSSN() {
    return _privateData.get(this).ssn;
  }

  getAge() {
    const createdAt = _privateData.get(this).createdAt;
    return Math.floor((Date.now() - createdAt) / (365 * 24 * 60 * 60 * 1000));
  }

  destroy() {
    _privateData.delete(this);
  }
}

const user = new User('Alice', '123-45-6789');
console.log(user.name);     // 'Alice'
console.log(user.ssn);       // undefined (private!)
console.log(user.getSSN());  // '123-45-6789'

// More practical: state management for library internals
const _state = new WeakMap();

class Counter {
  constructor() {
    _state.set(this, { count: 0 });
  }

  increment() {
    const s = _state.get(this);
    s.count++;
    return s.count;
  }

  getCount() {
    return _state.get(this).count;
  }
}

const c = new Counter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.getCount());  // 2

// External code cannot access _state
console.log(c._state); // undefined
console.log(Object.keys(c)); // []`,description:"WeakMap provides true encapsulation for private data. External code cannot access the WeakMap, and data is GC'd with the object."},{title:"Caching with WeakMap",useCase:"Memory-safe caching of computed results",code:`// Cache that auto-cleans when source objects are GC'd
const cache = new WeakMap();

function expensiveComputation(obj) {
  if (cache.has(obj)) {
    console.log('Cache hit');
    return cache.get(obj);
  }

  console.log('Computing...');
  const result = Object.keys(obj).reduce(function(sum, key) {
    return sum + (typeof obj[key] === 'number' ? obj[key] : 0);
  }, 0);

  cache.set(obj, result);
  return result;
}

const data = { a: 10, b: 20, c: 30 };
console.log(expensiveComputation(data)); // Computing... 60
console.log(expensiveComputation(data)); // Cache hit 60

// When data is no longer needed, cache is auto-cleaned
let temp = { x: 100 };
expensiveComputation(temp); // Computing... 100
console.log(cache.has(temp)); // true

// After nullifying the reference
temp = null;
// Next GC cycle removes the entry from cache
// No need to manually clear the cache!

// Practical: caching DOM measurements
const measurementCache = new WeakMap();

function getElementDimensions(el) {
  if (measurementCache.has(el)) {
    return measurementCache.get(el);
  }
  const rect = el.getBoundingClientRect();
  const dimensions = { width: rect.width, height: rect.height };
  measurementCache.set(el, dimensions);
  return dimensions;
}

// When DOM elements are removed, cache entries auto-clean`,description:"WeakMap caching ensures computed values are automatically cleaned up when source objects are garbage collected."},{title:"DOM Element Metadata with WeakMap",useCase:"Associating data with DOM elements without memory leaks",code:`// In browser environments — storing metadata per DOM element
const elementData = new WeakMap();

function registerClickHandler(element, callback) {
  // Store handler and state per element
  elementData.set(element, {
    handler: callback,
    clickCount: 0
  });

  element.addEventListener('click', function() {
    const data = elementData.get(element);
    data.clickCount++;
    console.log('Click #' + data.clickCount);
    callback(element, data.clickCount);
  });
}

// When element is removed from DOM:
// 1. No strong references to element remain
// 2. GC reclaims the element
// 3. WeakMap entry is automatically removed
// 4. No memory leak!

// Compare with dataset approach:
// element.dataset.clickCount = '5';
// Problem: even after element removal, if something
// holds a reference, it stays in memory

// WeakMap approach — clean separation of concerns
const _domData = new WeakMap();

const componentData = new WeakMap();

function createComponent(el, config) {
  componentData.set(el, {
    config: config,
    state: { mounted: true },
    children: []
  });

  return {
    getConfig: function() {
      return componentData.get(el).config;
    },
    destroy: function() {
      // Explicit cleanup
      componentData.delete(el);
    }
  };
}

// Memory safety: if code forgets to call destroy(),
// the WeakMap entry is still cleaned up when el is GC'd`,description:"WeakMap enables safe metadata association with DOM elements, preventing memory leaks when elements are removed."},{title:"WeakMap vs Map — Memory Leak Demo",useCase:"Understanding the memory implications",code:`// Map — STRONG reference (potential memory leak)
const map = new Map();

function demoMapLeak() {
  let obj = { id: 'big-data' };
  obj.data = new Array(1000000).fill('x'); // Large data

  map.set(obj, 'metadata');

  // Even after function ends and obj is out of scope,
  // the Map still holds a strong reference to obj
  // obj cannot be GC'd — MEMORY LEAK
  // obj = null would help, but if we forget...
}

demoMapLeak();
// map still has reference to obj — memory is not freed!

// WeakMap — WEAK reference (no leak)
const wm = new WeakMap();

function demoWeakMapNoLeak() {
  let obj = { id: 'big-data' };
  obj.data = new Array(1000000).fill('x');

  wm.set(obj, 'metadata');

  // When function ends:
  // - obj goes out of scope
  // - No strong references to obj exist
  // - WeakMap's weak reference doesn't prevent GC
  // - obj and its data are reclaimed — NO LEAK
}

demoWeakMapNoLeak();
// wm no longer has the entry — memory is automatically freed!

// Practical example: event listener registry
const listenerMap = new Map();  // Bad: prevents GC of listeners
const listenerWm = new WeakMap(); // Good: auto-cleanup

// Always prefer WeakMap when:
// - Keys are objects you don't control
// - You need automatic cleanup
// - You don't need to iterate over entries`,description:"Map holds strong references (can cause memory leaks). WeakMap holds weak references (auto-cleanup when keys are GC'd)."}],mcqQuestions:[{question:"What types can be used as WeakMap keys?",options:["Any type","Objects only","Strings only","Numbers and strings"],answer:1,explanation:"WeakMap only accepts objects (and non-registered symbols in ES2023+). Primitives cause TypeError."},{question:"Why does WeakMap not have a size property?",options:["Performance reasons","Keys can be GC'd at any time, making size unreliable","It was forgotten in the spec","Memory constraints"],answer:1,explanation:"Because weak references can be garbage collected at any time, the size would be unpredictable and inconsistent."},{question:"Is WeakMap iterable?",options:["Yes, with for...of","No, it has no iteration methods","Only with keys()","Only with entries()"],answer:1,explanation:"WeakMap has no iteration methods (keys, values, entries, forEach) and cannot be used with for...of."},{question:"What methods does WeakMap have?",options:["set, get, has, delete","set, get, has, delete, clear","set, get, has, delete, size","set, get, has, keys, values"],answer:0,explanation:"WeakMap has exactly four methods: set(), get(), has(), and delete(). No clear(), no iteration, no size."},{question:"What is the primary advantage of WeakMap over Map?",options:["Faster performance","Automatic garbage collection of entries when keys are no longer referenced","Larger storage capacity","Support for primitive keys"],answer:1,explanation:"WeakMap holds weak references to keys, so entries are automatically removed when keys are garbage collected."},{question:"What happens to a WeakMap entry when the key is garbage collected?",options:["The entry stays until explicitly deleted","The entry is automatically removed","An error is thrown","The value becomes undefined"],answer:1,explanation:"When the key object is GC'd, the WeakMap entry is automatically removed. No manual cleanup is needed."},{question:"Which is a common use case for WeakMap?",options:["Sorting arrays","Storing private data for objects","String manipulation","Mathematical calculations"],answer:1,explanation:"WeakMap is commonly used for private data storage, caching per object, and memory-safe DOM element metadata."},{question:"Can you iterate over all keys in a WeakMap?",options:["Yes, with wm.keys()","No, WeakMap doesn't expose its keys","Yes, with for...of","Only if you know the keys"],answer:1,explanation:"WeakMap does not have keys(), values(), or entries() methods. You cannot iterate or list its contents."},{question:"What does wm.get(key) return if the key has been GC'd?",options:["null","undefined","false","An error"],answer:1,explanation:"If the key has been garbage collected, the entry is removed and get() returns undefined."},{question:"Is WeakMap suitable for storing primitive key-value pairs?",options:["Yes, it works like Map","No, keys must be objects","Yes, but only with strings","Yes, but performance is worse"],answer:1,explanation:"WeakMap requires object keys. For primitive keys, use a regular Map instead."}]};export{e as weakmap};
