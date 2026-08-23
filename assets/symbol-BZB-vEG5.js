const e={title:"Symbol",difficulty:"advanced",estimatedMinutes:25,tldr:["<code>Symbol</code> is a <strong>primitive type</strong> introduced in ES6, used to create <strong>unique identifiers</strong>.","Every symbol value is <strong>unique</strong> — <code>Symbol('id') !== Symbol('id')</code>. Symbols can be used as <strong>object property keys</strong>.","Symbols enable <strong>non-enumerable</strong> properties (hidden in <code>for...in</code> and <code>Object.keys()</code>) and <strong>well-known symbols</strong> for customizing language behavior.","Use <code>Symbol.for(key)</code> for <strong>global symbols</strong> (shared across realms), and <code>Symbol.keyFor(sym)</code> to retrieve the key."],laymanDefinition:"Imagine a coat check where every person gets a unique ticket. Even if two people have the exact same coat, their tickets are different. The ticket number doesn't describe the coat — it just identifies which coat is yours. Symbol is like that ticket: it's a unique identifier. You can attach it to an object as a hidden property name that won't accidentally clash with other property names, and that won't show up in regular property listings (like for...in).",deepDive:[{heading:"Symbol as a Primitive Type",text:"Symbol is the seventh primitive type in JavaScript (after string, number, boolean, null, undefined, and bigint). Symbols are created by calling Symbol() — not with 'new Symbol()' (that throws TypeError). Each call to Symbol() returns a completely unique value. Symbols can be used as object property keys, enabling properties that are guaranteed unique."},{heading:"Symbol Properties — Hidden from Normal Enumeration",text:"Symbol-keyed properties are not included in for...in loops, Object.keys(), Object.values(), Object.entries(), or JSON.stringify(). They ARE included in Object.getOwnPropertySymbols() and Reflect.ownKeys(). This makes symbols useful for metadata and internal properties that should not appear in normal iteration."},{heading:"Well-Known Symbols — Customizing Language Behavior",text:"JavaScript has built-in well-known symbols that let you customize core language behavior: Symbol.iterator (make objects iterable), Symbol.toStringTag (customize Object.prototype.toString), Symbol.toPrimitive (customize type coercion), Symbol.hasInstance (customize instanceof), Symbol.match/replace/search/split (customize string methods), Symbol.species (control derived objects), and Symbol.isConcatSpreadable (control Array.prototype.concat)."},{heading:"Global Symbol Registry — Symbol.for() and Symbol.keyFor()",text:"Symbol.for(key) creates or retrieves a global symbol. If a symbol with the given key exists in the runtime-wide registry, it is returned. Otherwise, a new symbol is created and registered. Symbol.keyFor(sym) retrieves the key for a global symbol. Global symbols are shared across iframes, service workers, and different realms in the same JavaScript runtime."},{heading:"Symbols for Constants and Enum-like Values",text:"Symbols are commonly used for 'enum-like' constants where values must be unique. For example, HTTP status categories, Redux action types, or event names. Using symbols prevents accidental collisions with string-based constants."}],interviewAnswer:"Symbol is a primitive type that creates unique identifiers. Every Symbol() call returns a unique value. Symbols can be used as object property keys that are hidden from normal enumeration (for...in, Object.keys). Well-known symbols (like Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive) allow customizing JavaScript's built-in behavior. Symbol.for() creates shared global symbols. Common use cases: unique property keys to avoid collisions, implementing custom iterables via Symbol.iterator, defining internal/metadata properties, enum-like constants (Redux action types, event names), and implementing the observer pattern with Symbol.observable.",interviewQuestions:[{question:"What is a Symbol in JavaScript?",answer:"Symbol is a primitive type that creates a unique value. Every Symbol() call returns a completely unique identifier, even with the same description."},{question:"How do you create a Symbol?",answer:"Symbol() with an optional description string: const sym = Symbol('description'). Do NOT use new Symbol() — that throws TypeError."},{question:"Are two symbols with the same description equal?",answer:"No. Symbol('id') !== Symbol('id'). The description is just a label for debugging; each Symbol() call creates a unique value."},{question:"How do you create a shared global symbol?",answer:"Symbol.for('key'). This checks the global symbol registry: if a symbol with that key exists, it's returned; otherwise a new one is created."},{question:"Are symbol properties visible in for...in?",answer:"No. Symbol-keyed properties are excluded from for...in, Object.keys(), Object.values(), Object.entries(), and JSON.stringify()."},{question:"How do you access symbol-keyed properties?",answer:"Use Object.getOwnPropertySymbols(obj) to get an array of symbol keys, or Reflect.ownKeys(obj) to get all keys including symbols."},{question:"What are well-known symbols?",answer:"Built-in symbols like Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive, Symbol.hasInstance, Symbol.match, Symbol.replace, etc. They let you customize JavaScript's built-in behavior."},{question:"What is Symbol.iterator used for?",answer:"Symbol.iterator defines how an object is iterated (for...of, spread, etc.). Implementing [Symbol.iterator]() makes an object iterable."},{question:"What does Symbol.toStringTag do?",answer:"It customizes the output of Object.prototype.toString.call(obj). For example, class MyClass { get [Symbol.toStringTag]() { return 'MyClass'; } } makes toString return '[object MyClass]'."},{question:"What is a practical use case for Symbols?",answer:"Unique property keys (collision-free), internal/metadata properties, enum-like constants, customizing iteration (Symbol.iterator), string formatting (Symbol.toPrimitive), and framework internals (React's React.Fragment, Redux action types)."}],diagramSvg:`<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="630" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="325" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Symbol — Unique Property Keys &amp; Well-Known Symbols</text><rect x="30" y="65" width="280" height="90" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="85" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">Creating Symbols</text><text x="170" y="108" fill="#9aa0b0" font-size="11">const s1 = Symbol('id');</text><text x="170" y="128" fill="#9aa0b0" font-size="11">const s2 = Symbol('id');</text><text x="170" y="148" fill="#e64745" font-size="10">s1 !== s2 (always unique)</text><rect x="340" y="65" width="280" height="90" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="480" y="85" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">As Object Keys</text><text x="480" y="108" fill="#9aa0b0" font-size="11">obj[s1] = 'hidden value';</text><text x="480" y="128" fill="#9aa0b0" font-size="11">Not in for...in or Object.keys()</text><text x="480" y="148" fill="#9aa0b0" font-size="10">Object.getOwnPropertySymbols(obj)</text><rect x="30" y="185" width="590" height="80" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1"/><text x="325" y="208" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Well-Known Symbols</text><text x="325" y="232" fill="#9aa0b0" font-size="11">Symbol.iterator — for...of | Symbol.toStringTag — toString()</text><text x="325" y="252" fill="#9aa0b0" font-size="11">Symbol.toPrimitive — type coercion | Symbol.hasInstance — instanceof</text></svg>`,codeExamples:[{title:"Symbol Basics",useCase:"Creating and using symbols",code:`// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log(sym2 === sym3); // false (always unique)
console.log(sym2.description); // 'description'

// Symbols are primitives
console.log(typeof sym1); // 'symbol'

// Cannot use new Symbol()
try {
  new Symbol(); // TypeError
} catch (e) {
  console.log(e.message); // 'Symbol is not a constructor'
}

// Symbols as object keys
const obj = {};
const id = Symbol('id');
obj[id] = 'secret';
obj.name = 'Alice';

console.log(obj[id]); // 'secret'
console.log(obj.name); // 'Alice'

// Not in normal enumeration
console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertyNames(obj)); // ['name']

// But accessible via getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]
console.log(Reflect.ownKeys(obj)); // ['name', Symbol(id)]

// Symbols in JSON.stringify are omitted
console.log(JSON.stringify(obj)); // '{"name":"Alice"}'`,description:"Symbols are unique primitives. As property keys, they're hidden from normal enumeration but accessible via getOwnPropertySymbols."},{title:"Global Symbols with Symbol.for()",useCase:"Shared symbols across modules/realm",code:`// Create or retrieve global symbols
const globalSym1 = Symbol.for('app.global.id');
const globalSym2 = Symbol.for('app.global.id');

console.log(globalSym1 === globalSym2); // true (same symbol)

// Retrieve key from global symbol
console.log(Symbol.keyFor(globalSym1)); // 'app.global.id'

// Non-global symbols don't have a key
const localSym = Symbol('local');
console.log(Symbol.keyFor(localSym)); // undefined

// Global symbols are cross-realm
// If an iframe and parent page both call Symbol.for('shared'),
// they get the same symbol

// Practical: library API constants
const Events = {
  USER_LOGIN: Symbol.for('app.event.user.login'),
  USER_LOGOUT: Symbol.for('app.event.user.logout'),
  DATA_UPDATE: Symbol.for('app.event.data.update')
};

function emit(event, data) {
  // event is a symbol — guaranteed unique
  console.log('Event:', Symbol.keyFor(event) || event.description);
}

emit(Events.USER_LOGIN, { userId: 42 });
// Event: app.event.user.login

// Cross-module sharing
// module1.js: const TYPE = Symbol.for('mylib.type');
// module2.js: const TYPE = Symbol.for('mylib.type');
// module1.TYPE === module2.TYPE // true!`,description:"Symbol.for() creates/retrieves global symbols from a runtime-wide registry. Symbol.keyFor() gets the key for a global symbol."},{title:"Well-Known Symbols — Customizing Behavior",useCase:"Using Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive",code:`// Symbol.iterator — make objects iterable
const range = {
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

console.log([...range]); // [1, 2, 3, 4, 5]

// Symbol.toStringTag — customize toString()
class CustomClass {
  get [Symbol.toStringTag]() {
    return 'CustomClass';
  }
}

const instance = new CustomClass();
console.log(Object.prototype.toString.call(instance));
// '[object CustomClass]'

// Symbol.toPrimitive — customize type coercion
class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.amount;
    }
    if (hint === 'string') {
      return this.amount + ' ' + this.currency;
    }
    return this.amount; // default
  }
}

const price = new Money(100, 'USD');
console.log(+price);       // 100 (number hint)
console.log(String(price)); // '100 USD' (string hint)
console.log(price + 50);    // 150 (default hint)`,description:"Well-known symbols let you customize how objects interact with JavaScript language features like iteration, toString, and coercion."},{title:"Symbols for Constants and Enum Patterns",useCase:"Using symbols as enum-like constants",code:`// Symbols as enum constants — guaranteed uniqueness
const Color = {
  RED: Symbol('red'),
  GREEN: Symbol('green'),
  BLUE: Symbol('blue')
};

function getHexCode(color) {
  switch (color) {
    case Color.RED:   return '#FF0000';
    case Color.GREEN: return '#00FF00';
    case Color.BLUE:  return '#0000FF';
    default:          return '#000000';
  }
}

console.log(getHexCode(Color.RED)); // '#FF0000'

// No risk of collision — even if someone creates a 'red' string

// Symbol-based state machine
const State = {
  IDLE: Symbol('idle'),
  LOADING: Symbol('loading'),
  SUCCESS: Symbol('success'),
  ERROR: Symbol('error')
};

class FetchState {
  constructor() {
    this.state = State.IDLE;
  }

  setLoading() { this.state = State.LOADING; }
  setSuccess() { this.state = State.SUCCESS; }
  setError()   { this.state = State.ERROR; }

  isIdle()    { return this.state === State.IDLE; }
  isLoading() { return this.state === State.LOADING; }
  isSuccess() { return this.state === State.SUCCESS; }
  isError()   { return this.state === State.ERROR; }
}

// Redux action types with symbols
const ActionTypes = {
  ADD_TODO: Symbol('ADD_TODO'),
  REMOVE_TODO: Symbol('REMOVE_TODO'),
  TOGGLE_TODO: Symbol('TOGGLE_TODO')
};

function todoReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.REMOVE_TODO:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}`,description:"Symbols make excellent enum-like constants because they are guaranteed unique and cannot be accidentally compared with strings or other values."},{title:"Symbol-Metadata for Internal Properties",useCase:"Hiding internal implementation details",code:`// Internal metadata hidden from normal access
const _internals = Symbol('internals');

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this[_internals] = {
      balance: balance,
      transactions: [],
      createdAt: new Date()
    };
  }

  deposit(amount) {
    this[_internals].balance += amount;
    this[_internals].transactions.push({
      type: 'deposit',
      amount: amount,
      date: new Date()
    });
  }

  getBalance() {
    return this[_internals].balance;
  }

  getTransactionHistory() {
    return [...this[_internals].transactions];
  }
}

const account = new BankAccount('Alice', 1000);

// Normal properties
console.log(Object.keys(account)); // ['owner']
console.log(account.owner); // 'Alice'

// Internal data is hidden
console.log(account.balance); // undefined
console.log(account._internals); // undefined

// But it works through methods
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500

// Using symbols for framework metadata
// React: React.Fragment, React.Profiler, etc.
const MY_LIBRARY_INTERNAL = Symbol('myLibrary.internal');

function createComponent(config) {
  return {
    ...config,
    [MY_LIBRARY_INTERNAL]: {
      renderCount: 0,
      mountTime: Date.now()
    }
  };
}

// JSON serialization — symbols are omitted
console.log(JSON.stringify(account));
// '{"owner":"Alice"}' (symbol properties excluded)`,description:"Symbol-keyed properties are ideal for internal implementation details that should not be part of the public API or serialization."}],mcqQuestions:[{question:"What is a Symbol in JavaScript?",options:["A string wrapper","A unique primitive value","A type of object","A function"],answer:1,explanation:"Symbol is a primitive type that creates unique values. Each Symbol() call returns a completely unique identifier."},{question:"Are two symbols with the same description equal?",options:["Yes, equal by description","No, each Symbol() creates a unique value","Only if created with Symbol.for()","Only in strict mode"],answer:1,explanation:"Symbol('id') !== Symbol('id'). The description is just a label; every Symbol() call produces a unique value."},{question:"How do you create a global symbol?",options:["Symbol.global('key')","Symbol.for('key')","Symbol('key', true)","new Symbol('key', 'global')"],answer:1,explanation:"Symbol.for('key') creates or retrieves a global symbol from the runtime-wide symbol registry."},{question:"Are symbol-keyed properties included in JSON.stringify?",options:["Yes","No, they are omitted","Only if enumerable","Only global symbols"],answer:1,explanation:"Symbol-keyed properties are excluded from JSON.stringify, for...in, Object.keys(), and Object.values()."},{question:"What does Symbol.iterator do?",options:["Returns the string representation","Defines how an object is iterated","Defines type coercion behavior","Controls instanceof checks"],answer:1,explanation:"Symbol.iterator is a well-known symbol that makes an object iterable (usable with for...of, spread, etc.)."},{question:"How do you access all symbol properties of an object?",options:["Object.keys(obj)","Object.getOwnPropertySymbols(obj)","for...in","obj[Symbol]"],answer:1,explanation:"Object.getOwnPropertySymbols(obj) returns an array of all symbol keys on the object."},{question:"What does Symbol.toPrimitive customize?",options:["Object iteration","Type coercion behavior","toString output","instanceof behavior"],answer:1,explanation:"Symbol.toPrimitive lets you customize how an object is converted to a primitive (number, string, or default hint)."},{question:"What is the correct way to create a Symbol?",options:["new Symbol()","Symbol()","Symbol.new()","create Symbol()"],answer:1,explanation:"Call Symbol() as a function (not a constructor). new Symbol() throws TypeError because Symbol is not a constructor."},{question:"What is a common use case for Symbols?",options:["String manipulation","Creating unique property keys for internal state","Array sorting","Number formatting"],answer:1,explanation:"Symbols are commonly used for unique property keys to store internal/metadata state that should not collide or be enumerated."},{question:"What does Symbol.hasInstance do?",options:["Creates new instances","Customizes instanceof behavior","Checks property existence","Defines object equality"],answer:1,explanation:"Symbol.hasInstance lets you customize how instanceof works with your class. It's used by the instanceof operator."}]};export{e as symbol};
