const e={title:"Iterators & Iterables",difficulty:"intermediate",estimatedMinutes:25,tldr:["An <strong>iterable</strong> is an object with a <code>Symbol.iterator</code> method that returns an <strong>iterator</strong>.","An <strong>iterator</strong> is an object with a <code>.next()</code> method that returns <code>{ value, done }</code>.","Built-in iterables: <code>Array</code>, <code>String</code>, <code>Map</code>, <code>Set</code>, <code>NodeList</code>, <code>arguments</code>, and <strong>generators</strong>.","The <strong>iteration protocol</strong> enables <code>for...of</code>, spread <code>...</code>, destructuring, and <code>Array.from()</code> to work on any iterable."],laymanDefinition:"Imagine a PE teacher with a list of students. If the students know how to 'line up' (Symbol.iterator), the teacher can call each student one by one using a roll call (next()). A student who can line up is 'iterable.' The teacher's act of calling each student is 'iteration.' Different classes might line up differently (arrays by index, maps by entry), but as long as they know how to line up, the teacher can use the same roll-call process on any class. That's the iteration protocol — a standard way to loop over any data structure.",deepDive:[{heading:"The Iterable Protocol",text:"An object is iterable if it has a method at Symbol.iterator that returns an iterator. The method is called without arguments and should return an object conforming to the iterator protocol. Many built-in types are iterable: Array, String, Map, Set, TypedArray, NodeList, arguments, and generators. Plain objects are NOT iterable by default."},{heading:"The Iterator Protocol",text:"An iterator is an object with a next() method. next() returns an object with two properties: value (any value) and done (boolean). When done is true, the iterator has completed and value is typically omitted or undefined. After an iterator is done, calling next() should continue returning { done: true }."},{heading:"Consuming Iterables — for...of, Spread, Destructuring",text:"The for...of loop calls Symbol.iterator on the iterable, then calls next() on the returned iterator until done is true. The spread operator (...) and destructuring also consume iterables. Array.from() converts any iterable to an array. These all work on any object implementing the iterable protocol."},{heading:"Creating Custom Iterables",text:"Any object can become iterable by implementing Symbol.iterator. The method should return an iterator object with next(). Custom iterables enable domain-specific iteration patterns — iterating over a range of numbers, paginated API data, tree structures, or infinite sequences. This is the foundation for custom data structures that integrate with JavaScript's built-in iteration APIs."},{heading:"Iterators vs Generators",text:"Generators (function*) are the easiest way to create iterators. A generator function returns a Generator object that is both iterable and an iterator. While you can manually create iterators with next() methods, generators handle the state machine automatically. Use generators for simple iterators, and explicit iterators when you need fine-grained control over the iteration state."}],interviewAnswer:"An iterable implements Symbol.iterator, which returns an iterator. An iterator has next() that returns { value, done }. Built-in iterables include Array, String, Map, Set, and generators. Consuming syntaxes like for...of, spread, destructuring, and Array.from() all use the iteration protocol. Custom objects can become iterable by implementing Symbol.iterator. Generators (function*) simplify iterator creation by automatically handling the iteration protocol. Key interview topics: implementing Symbol.iterator manually, converting iterables to arrays, understanding the difference between iterables and array-likes, and the relationship between iterators and generators.",interviewQuestions:[{question:"What is an iterable?",answer:"An object that implements the Symbol.iterator method, which returns an iterator. Built-in iterables: Array, String, Map, Set, NodeList, arguments."},{question:"What is an iterator?",answer:"An object with a next() method that returns { value, done }. next() is called repeatedly until done is true."},{question:"How do you make a custom object iterable?",answer:"Implement [Symbol.iterator]() on the object. The method should return an iterator object with a next() method."},{question:"What syntaxes consume iterables?",answer:"for...of loops, spread operator (...), destructuring assignment, Array.from(), Promise.all/race, Map/Set constructors, and yield*."},{question:"Is a plain JavaScript object iterable?",answer:"No. Plain objects ({}) are not iterable by default. You must implement Symbol.iterator to make them iterable."},{question:"What is the difference between an iterable and an array-like?",answer:"Iterables implement Symbol.iterator. Array-likes have a length property and indexed elements (e.g., arguments, NodeList). Array-likes are not necessarily iterable (but modern ones like NodeList are). Array.from() accepts both."},{question:"How do iterators relate to generators?",answer:"Generators (function*) return Generator objects that are both iterable and iterators. Generators provide a concise syntax for creating custom iterators."},{question:"What happens when an iterator is exhausted?",answer:"Once done is true, the iterator is exhausted. Subsequent .next() calls should continue returning { value: undefined, done: true }."},{question:"Can an iterator also be iterable?",answer:"Yes. The standard pattern is for the iterator to have a Symbol.iterator method that returns itself (this). This allows iterators to be used in for...of loops."},{question:"How do you check if something is iterable?",answer:"Check if obj !== null && typeof obj[Symbol.iterator] === 'function'. If yes, it can be used with for...of, spread, etc."}],diagramSvg:'<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Iteration Protocol</text><rect x="30" y="65" width="280" height="90" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="85" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">Iterable</text><text x="170" y="105" text-anchor="middle" fill="#9aa0b0" font-size="11">Has [Symbol.iterator]()</text><text x="170" y="125" text-anchor="middle" fill="#98c379" font-size="11">Example: [1, 2, 3]</text><line x1="310" y1="110" x2="350" y2="110" stroke="#fbbf24" stroke-width="2"/><text x="330" y="100" text-anchor="middle" fill="#fbbf24" font-size="10">returns</text><rect x="350" y="65" width="300" height="90" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="500" y="85" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">Iterator</text><text x="500" y="105" text-anchor="middle" fill="#9aa0b0" font-size="11">Has .next() → { value, done }</text><text x="500" y="125" text-anchor="middle" fill="#98c379" font-size="11">next() → { value: 1, done: false }</text><text x="500" y="142" text-anchor="middle" fill="#98c379" font-size="11">next() → { value: 2, done: false }</text><rect x="30" y="185" width="620" height="80" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1"/><text x="340" y="208" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Consumed by: for...of | ...spread | [a, b] = iterable | Array.from() | new Map()</text><text x="340" y="235" text-anchor="middle" fill="#9aa0b0" font-size="11">These syntaxes call Symbol.iterator() then repeatedly call .next() until done is true</text><text x="340" y="255" text-anchor="middle" fill="#9aa0b0" font-size="11">Custom objects: implement [Symbol.iterator]() { return { next() { ... } }; }</text></svg>',codeExamples:[{title:"Basic Iterator and Iterable",useCase:"Creating and consuming a manual iterator",code:`// Manual iterator
function createIterator(array) {
  let index = 0;
  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const it = createIterator(['a', 'b', 'c']);
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: undefined, done: true }

// Making an object iterable
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function() {
    let current = this.from;
    const end = this.to;
    return {
      next: function() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Now range can be used with for...of
for (const n of range) {
  console.log(n); // 1, 2, 3, 4, 5
}

// And with spread
console.log([...range]); // [1, 2, 3, 4, 5]`,description:"A manual iterator implements next() returning { value, done }. An iterable implements Symbol.iterator returning an iterator."},{title:"Built-in Iterables in Action",useCase:"Using for...of on various built-in types",code:`// Array
for (const item of ['a', 'b', 'c']) {
  console.log(item); // 'a', 'b', 'c'
}

// String — iterates characters
for (const char of 'hello') {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

// Map — iterates [key, value] entries
const map = new Map([['name', 'Alice'], ['age', 30]]);
for (const [key, value] of map) {
  console.log(key, value); // 'name' 'Alice', 'age' 30
}

// Set
const set = new Set([1, 2, 3, 3]);
for (const num of set) {
  console.log(num); // 1, 2, 3 (no duplicate)
}

// arguments (array-like, now also iterable)
(function() {
  for (const arg of arguments) {
    console.log(arg);
  }
})('x', 'y', 'z'); // 'x', 'y', 'z'

// NodeList (in browsers)
// document.querySelectorAll('div') is iterable

// TypedArray
const int32 = new Int32Array([10, 20, 30]);
console.log([...int32]); // [10, 20, 30]

// Generator functions
function* gen() {
  yield 'generated';
  yield 'values';
}
for (const val of gen()) {
  console.log(val); // 'generated', 'values'
}`,description:"Built-in iterables include Array, String, Map, Set, arguments, NodeList, TypedArray, and generators."},{title:"Custom Iterable — Paginated Data",useCase:"Iterating over paginated API data",code:`class PaginatedAPI {
  constructor(baseUrl, pageSize = 10) {
    this.baseUrl = baseUrl;
    this.pageSize = pageSize;
  }

  [Symbol.iterator]() {
    let page = 1;
    let hasMore = true;
    let buffer = [];
    let bufferIndex = 0;
    const self = this;

    return {
      next: function() {
        // If we have items in buffer, return next one
        if (bufferIndex < buffer.length) {
          return { value: buffer[bufferIndex++], done: false };
        }

        // If no more pages, we're done
        if (!hasMore) {
          return { value: undefined, done: true };
        }

        // Simulate fetching a page (in real code, use async)
        console.log('Fetching page ' + page + '...');
        // Simulate: fetch(self.baseUrl + '?page=' + page + '&size=' + self.pageSize)
        // For demo, generate synthetic data
        buffer = [];
        const start = (page - 1) * self.pageSize;
        for (let i = 0; i < self.pageSize; i++) {
          buffer.push({ id: start + i + 1, name: 'Item ' + (start + i + 1) });
        }
        page++;
        hasMore = page <= 5; // Simulate 5 pages
        bufferIndex = 0;

        if (buffer.length > 0) {
          return { value: buffer[bufferIndex++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
}

const api = new PaginatedAPI('/api/items', 3);
let count = 0;
for (const item of api) {
  console.log(item.id, item.name);
  count++;
  if (count >= 5) break; // Only take first 5
}
// Logs pages 1-2 (fetching as needed)`,description:"Custom iterables enable lazy iteration over external data sources like paginated APIs, fetching data on demand."},{title:"Consuming Iterables — Spread, Destructuring, Array.from",useCase:"Using iteration protocol features",code:`const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};

// Spread operator
const nums = [...range];
console.log(nums); // [1, 2, 3, 4, 5]

// Destructuring
const [first, second, ...rest] = range;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Array.from()
const arr = Array.from(range);
console.log(arr); // [1, 2, 3, 4, 5]

// Array.from() with mapping function
const doubled = Array.from(range, n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using iterable with Map constructor
const pairs = [[1, 'one'], [2, 'two'], [3, 'three']];
const map = new Map(pairs);
console.log(map.get(2)); // 'two'

// Using iterable with Set constructor
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log([...set]); // [1, 2, 3]

// Promise.all with iterable
// Promise.all accepts any iterable, not just arrays
function* asyncTasks() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}
// Promise.all(asyncTasks()).then(console.log); // [1, 2, 3]`,description:"The spread operator, destructuring, Array.from(), Map/Set constructors, and Promise.all all consume iterables."},{title:"Making Iterables from Generators",useCase:"Using generators to simplify iterator creation",code:`// Generator as iterable factory
function* rangeIterator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const range = rangeIterator(1, 5);
console.log([...range]); // [1, 2, 3, 4, 5]

// Generator as Symbol.iterator
const iterableObject = {
  *[Symbol.iterator]() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
};

console.log([...iterableObject]); // ['a', 'b', 'c']

// Object with computed iteration
const countdown = {
  from: 5,
  *[Symbol.iterator]() {
    for (let i = this.from; i >= 0; i--) {
      yield i;
    }
  }
};

for (const num of countdown) {
  console.log(num); // 5, 4, 3, 2, 1, 0
}

// Both iterable and iterator
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib[Symbol.iterator]() === fib); // true (is both)
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1

// for...of with automatic iteration
let count = 0;
for (const n of fibonacci()) {
  console.log(n);
  if (++count >= 5) break;
}
// 0, 1, 1, 2, 3`,description:"Generators are the easiest way to create iterators. They are both iterable and iterators, and can be used as Symbol.iterator methods."}],mcqQuestions:[{question:"What makes an object iterable?",options:["Having a length property","Implementing Symbol.iterator","Being an array","Having numeric keys"],answer:1,explanation:"An object is iterable if it has a method at Symbol.iterator that returns an iterator."},{question:"What must an iterator's next() method return?",options:["A value","An object { value, done }","A boolean","An array [value, done]"],answer:1,explanation:"next() must return an object with two properties: value (any type) and done (boolean)."},{question:"Which of these is NOT iterable out of the box?",options:["Array","String","Plain object {}","Map"],answer:2,explanation:"Plain objects are not iterable by default. Arrays, Strings, Maps, and Sets are built-in iterables."},{question:"Which syntax consumes iterables?",options:["for...in","for...of","while","do...while"],answer:1,explanation:"for...of calls Symbol.iterator and iterates using next(). for...in iterates over enumerable property keys."},{question:"How do you convert an iterable to an array?",options:["Array.from(iterable)","iterable.toArray()","new Array(iterable)","iterable.array()"],answer:0,explanation:"Array.from(iterable), [...iterable], or Array.prototype.slice.call(iterable) (for array-likes)."},{question:"Can an iterator also be iterable?",options:["Yes, by implementing Symbol.iterator to return this","No, they are mutually exclusive","Only generators","Only if it's an array"],answer:0,explanation:"An iterator can be iterable by having Symbol.iterator return itself (this). This allows use in for...of loops."},{question:"What is the simplest way to create a custom iterable?",options:["Implement next() manually","Use a generator function for Symbol.iterator","Extend Array","Use Object.defineProperty"],answer:1,explanation:"A generator function (function*) for Symbol.iterator is the simplest way — it automatically handles the iteration protocol."},{question:"After an iterator returns { done: true }, what should subsequent .next() calls return?",options:["{ value: undefined, done: true }","undefined","null","An error"],answer:0,explanation:"After completion, .next() should continue returning { value: undefined, done: true } for consistency."},{question:"Is the arguments object iterable?",options:["Yes, in modern JavaScript","No, never","Only in strict mode","Only with bind"],answer:0,explanation:"In modern JavaScript (ES6+), the arguments object is iterable. It also has array-like properties (length, indexed access)."},{question:"What does Array.from() do with an iterable?",options:["Creates a new array from all elements of the iterable","Checks if it's an array","Returns the first element","Modifies the original iterable"],answer:0,explanation:"Array.from(iterable) creates a new array containing all elements from the iterable. It also accepts a mapping function."}]};export{e as iterators};
