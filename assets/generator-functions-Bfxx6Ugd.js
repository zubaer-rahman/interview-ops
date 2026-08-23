const e={title:"Generator Functions",difficulty:"advanced",estimatedMinutes:30,tldr:["Generator functions (<code>function*</code>) return a <strong>Generator</strong> object that can be paused and resumed using <code>yield</code>.","Calling a generator function does <strong>not execute</strong> its body — it returns a Generator iterator. Each <code>.next()</code> call executes until the next <code>yield</code>.","Generators enable <strong>lazy evaluation</strong>, <strong>infinite sequences</strong>, and <strong>custom iterables</strong> with stateful iteration.","The <code>yield*</code> expression <strong>delegates</strong> to another generator or iterable."],laymanDefinition:"Imagine a Netflix series. When you click 'Play,' you don't watch the entire season at once. You get one episode (yield), watch it, then ask for the next episode (next()). The show pauses between episodes, resuming only when you press 'Next Episode.' A generator function works the same way — it runs until a yield statement, pauses, and waits for you to request the next value. You can watch a 10-episode season one episode at a time, or stop after 3 episodes if you lose interest.",deepDive:[{heading:"Generator Function Syntax and Basics",text:"A generator function is declared with function* syntax. Inside the body, yield expressions pause execution and return a value. Calling the function returns a Generator object (an iterator). Each call to generator.next() resumes execution from the last yield, runs until the next yield or return, and returns an object { value, done }. When done is true, the generator has completed."},{heading:"The Generator Object Protocol",text:"A Generator implements both the Iterable protocol (Symbol.iterator) and the Iterator protocol (next()). This means generators can be used with for...of loops, spread operators, destructuring, and other iterable-consuming APIs. The generator maintains internal state (its execution context) across yield points."},{heading:"yield* Delegation",text:"yield* delegates to another generator or iterable. It iterates over the target and yields each value. This enables composing generators: a flatMap generator can yield* over each element's sub-generator. yield* also captures the return value of the delegated generator."},{heading:"Two-Way Communication with .next()",text:"generator.next(value) can send a value back into the generator. The value becomes the result of the yield expression that paused the generator. This enables two-way communication — the generator yields data out, and the caller pushes data back in."},{heading:"Generator.return() and Generator.throw()",text:"Generator.return(value) terminates the generator at the current yield point, setting done to true. Generator.throw(error) throws an exception at the yield point, which can be caught inside the generator with try/catch. Both cause the generator to clean up and finalize."}],interviewAnswer:"A generator function (function*) returns a Generator object that can be paused with yield and resumed with .next(). Each .next() call returns { value, done }. Generators enable lazy evaluation, infinite sequences, and custom iterables. The yield* expression delegates to another generator. Generators also support two-way communication via .next(value), and can be terminated with .return() or injected with errors via .throw(). Common use cases include generating unique IDs, implementing custom iteration logic, managing async control flow (with libraries like co or redux-saga), and processing large datasets lazily.",interviewQuestions:[{question:"What is a generator function?",answer:"A generator function (function*) returns a Generator object that can be paused and resumed. Each yield pauses execution, and .next() resumes it."},{question:"What does generator.next() return?",answer:"It returns an object { value, done }. value is the yielded value, done is a boolean indicating if the generator has completed."},{question:"What happens when a generator reaches a return statement?",answer:"The return value is yielded as { value: returnVal, done: true }. The generator is finished and subsequent .next() calls return { value: undefined, done: true }."},{question:"What does yield* do?",answer:"yield* delegates to another generator or iterable. It iterates over the target and yields each value. It also captures the return value of the delegated generator."},{question:"Can you pass values into a generator?",answer:"Yes. generator.next(value) sends a value back to the generator, which becomes the result of the yield expression that paused execution."},{question:"What is a practical use case for generators?",answer:"Infinite sequences (like unique ID generators), lazy evaluation of large datasets, custom iterables, async flow control (co, redux-saga), and representing state machines."},{question:"Can a generator be used in a for...of loop?",answer:"Yes. Generators implement the iterable protocol (Symbol.iterator returns itself). for...of calls .next() until done is true."},{question:"What does generator.throw() do?",answer:"It throws an error at the generator's current yield point. If caught inside the generator with try/catch, execution continues; otherwise it propagates."},{question:"How do generators handle errors?",answer:"Wrap yield in try/catch inside the generator. Errors can be injected via generator.throw() or thrown naturally. The generator can catch, handle, and continue or finalize."},{question:"Are generators synchronous or asynchronous?",answer:"Generators themselves are synchronous — they execute until yield and pause, all synchronously. However, they can be used with async-aware runners (like co) to manage async code."}],diagramSvg:'<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Generator Function Execution Flow</text><rect x="30" y="60" width="640" height="50" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1"/><text x="350" y="82" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">Generator Function Definition: function* counter() { ... }</text><text x="350" y="100" text-anchor="middle" fill="#9aa0b0" font-size="11">Calling counter() returns a Generator object — no code runs yet</text><line x1="50" y1="125" x2="650" y2="125" stroke="var(--border)" stroke-dasharray="4"/><rect x="50" y="140" width="140" height="40" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="120" y="164" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">gen.next()</text><text x="120" y="195" text-anchor="middle" fill="#9aa0b0" font-size="10">Call 1</text><rect x="230" y="140" width="140" height="40" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="300" y="164" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">yield 1</text><text x="300" y="195" text-anchor="middle" fill="#9aa0b0" font-size="10">→ { value: 1, done: false }</text><line x1="190" y1="160" x2="230" y2="160" stroke="var(--border)" stroke-width="1.5"/><rect x="50" y="225" width="140" height="40" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="120" y="249" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">gen.next()</text><text x="120" y="280" text-anchor="middle" fill="#9aa0b0" font-size="10">Call 2</text><rect x="230" y="225" width="140" height="40" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="300" y="249" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">yield 2</text><text x="300" y="280" text-anchor="middle" fill="#9aa0b0" font-size="10">→ { value: 2, done: false }</text><line x1="190" y1="245" x2="230" y2="245" stroke="var(--border)" stroke-width="1.5"/><rect x="50" y="310" width="140" height="40" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="120" y="334" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">gen.next()</text><text x="120" y="365" text-anchor="middle" fill="#9aa0b0" font-size="10">Call 3</text><rect x="230" y="310" width="140" height="40" rx="6" fill="#1a1d28" stroke="#e64745" stroke-width="1.5"/><text x="300" y="334" text-anchor="middle" fill="#e64745" font-size="12" font-weight="bold">return</text><text x="300" y="365" text-anchor="middle" fill="#9aa0b0" font-size="10">→ { value: undefined, done: true }</text><line x1="190" y1="330" x2="230" y2="330" stroke="var(--border)" stroke-width="1.5"/><text x="530" y="180" fill="#9aa0b0" font-size="11">Generator</text><text x="530" y="195" fill="#9aa0b0" font-size="11">pauses here</text><text x="530" y="270" fill="#9aa0b0" font-size="11">Resumes from</text><text x="530" y="285" fill="#9aa0b0" font-size="11">last yield</text></svg>',codeExamples:[{title:"Basic Generator",useCase:"Creating and using a simple generator",code:`function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Using with for...of
const gen2 = numberGenerator();
for (const num of gen2) {
  console.log(num); // 1, 2, 3
}

// Spread into array
const gen3 = numberGenerator();
console.log([...gen3]); // [1, 2, 3]`,description:"A basic generator yields values one at a time. The generator pauses after each yield and resumes on the next .next() call."},{title:"Infinite Sequence Generator",useCase:"Generating infinite sequences lazily",code:`function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8

// Take first 10 Fibonacci numbers
const first10 = [];
const limitedFib = fibonacci();
for (let i = 0; i < 10; i++) {
  first10.push(limitedFib.next().value);
}
console.log(first10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Infinite can be controlled — no memory issues
function* naturalNumbers() {
  let n = 1;
  while (true) yield n++;
}

const take = function(iterable, n) {
  const gen = iterable[Symbol.iterator]();
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(gen.next().value);
  }
  return result;
};

console.log(take(naturalNumbers(), 5)); // [1, 2, 3, 4, 5]`,description:"Generators enable infinite sequences that don't consume memory — values are computed lazily only when requested via .next()."},{title:"Generator with yield* Delegation",useCase:"Composing generators together",code:`function* gen1() {
  yield 'a';
  yield 'b';
}

function* gen2() {
  yield 'x';
  yield 'y';
}

function* combined() {
  yield* gen1();
  yield* gen2();
  yield 'done';
}

console.log([...combined()]);
// ['a', 'b', 'x', 'y', 'done']

// yield* with arrays (any iterable)
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item); // Recursive delegation
    } else {
      yield item;
    }
  }
}

const nested = [1, [2, [3, 4], 5], 6];
console.log([...flatten(nested)]);
// [1, 2, 3, 4, 5, 6]

// Using return value from delegated generator
function* withReturn() {
  const result = yield* gen1();
  yield result; // undefined (gen1 doesn't return)
}

function* withExplicitReturn() {
  yield 1;
  return 'done';
}

function* consumer() {
  const val = yield* withExplicitReturn();
  yield 'Delegated returned: ' + val;
}

console.log([...consumer()]);
// [1, 'Delegated returned: done']`,description:"yield* delegates to another generator or any iterable. It supports recursion for flattening nested structures, and captures return values."},{title:"Two-Way Communication with .next(value)",useCase:"Sending values back into generators",code:`function* interactive() {
  const a = yield 'What is a?';
  const b = yield 'What is b?';
  yield 'Sum is ' + (a + b);
}

const gen = interactive();

console.log(gen.next());          // { value: 'What is a?', done: false }
console.log(gen.next(10));        // { value: 'What is b?', done: false }
console.log(gen.next(20));        // { value: 'Sum is 30', done: false }
console.log(gen.next());          // { value: undefined, done: true }

// Practical: state machine with feedback
function* questionGame() {
  let score = 0;
  const answer1 = yield 'What is 2+2?';
  if (answer1 === 4) score += 10;
  const answer2 = yield 'What is the capital of France?';
  if (answer2 && answer2.toLowerCase() === 'paris') score += 10;
  yield 'Final score: ' + score;
}

const game = questionGame();
console.log(game.next());                // Question 1
console.log(game.next(4));               // Correct!
console.log(game.next('Paris'));         // Also correct!
console.log(game.next());                // Final score: 20`,description:"Generators support sending values back via .next(value). The value becomes the result of the yield expression that paused execution."},{title:"Generator Error Handling and Cleanup",useCase:"Managing errors and cleanup in generators",code:`function* safeGenerator() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (err) {
    console.log('Caught inside generator:', err.message);
    yield 'error handled';
  } finally {
    console.log('Cleanup: always runs');
  }
}

const gen = safeGenerator();
console.log(gen.next());         // { value: 1, done: false }
console.log(gen.throw(new Error('Something broke')));
// 'Caught inside generator: Something broke'
// 'Cleanup: always runs'
// { value: 'error handled', done: false }

console.log(gen.next());         // { value: undefined, done: true }

// Generator.return() for early termination
function* withCleanup() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log('Cleanup executed');
  }
}

const gen2 = withCleanup();
console.log(gen2.next());        // { value: 1, done: false }
console.log(gen2.return('early exit'));
// 'Cleanup executed'
// { value: 'early exit', done: true }

console.log(gen2.next());        // { value: undefined, done: true }

// Use try/finally for resource cleanup
function* fileReader(files) {
  const opened = [];
  try {
    for (const file of files) {
      opened.push(file);
      yield 'Reading: ' + file;
    }
  } finally {
    for (const f of opened) {
      console.log('Closing:', f);
    }
  }
}`,description:"Errors can be injected via .throw() and caught inside the generator. .return() triggers finally blocks for cleanup, then terminates."}],mcqQuestions:[{question:"What does calling a generator function return?",options:["The first yielded value","A Generator object","undefined","The return value"],answer:1,explanation:"Calling a generator function returns a Generator object (an iterator). The function body is not executed until .next() is called."},{question:"What does generator.next() return?",options:["The yielded value directly","An array [value, done]","An object { value, done }","A Promise"],answer:2,explanation:".next() returns { value, done }. value is the yielded expression, done is a boolean indicating completion."},{question:"What keyword pauses generator execution?",options:["await","yield","pause","break"],answer:1,explanation:"yield pauses the generator and returns a value to the caller. Execution resumes at the next .next() call."},{question:"What does yield* do?",options:["Yields the same value twice","Delegates to another generator or iterable","Yields undefined","Creates a nested generator"],answer:1,explanation:"yield* delegates to another iterable or generator, yielding each of its values and optionally capturing its return value."},{question:"Can generators produce infinite sequences?",options:["Yes, with while(true) and yield","No, generators must terminate","Only with arrays","Only with async/await"],answer:0,explanation:"Generators can use while(true) loops to produce values indefinitely. Values are computed lazily on each .next() call."},{question:"How do you send a value back into a generator?",options:["generator.send(value)","generator.next(value)","generator.emit(value)","generator.push(value)"],answer:1,explanation:"generator.next(value) sends a value into the generator. The value becomes the result of the yield expression that paused execution."},{question:"What does generator.return() do?",options:["Returns the next value","Terminates the generator and sets done to true","Restarts the generator","Throws an error"],answer:1,explanation:"generator.return(value) terminates the generator, runs any finally blocks, and marks it as done."},{question:"Can generators be used with for...of?",options:["Yes, generators implement the iterable protocol","No, generators are not iterable","Only if they return arrays","Only with async generators"],answer:0,explanation:"Generators implement both the iterable and iterator protocols, so they work with for...of, spread, and destructuring."},{question:"What is a common use case for generators?",options:["DOM manipulation","Lazy evaluation and infinite sequences","CSS animations","Database queries"],answer:1,explanation:"Generators excel at lazy evaluation, infinite sequences, custom iterables, state machines, and async flow control."},{question:"Are generators synchronous or asynchronous?",options:["Synchronous (they pause and resume within the same thread)","Asynchronous (they run on separate threads)","Both depending on use","Neither"],answer:0,explanation:"Generators are synchronous — execution pauses at yield and resumes at .next(), all within a single thread. Async generators (async function*) add Promise-based async behavior."}]};export{e as generator_functions};
