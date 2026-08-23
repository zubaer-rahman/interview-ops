export const symbol = {
  "title": "Symbol",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "<code>Symbol</code> is a <strong>primitive type</strong> introduced in ES6, used to create <strong>unique identifiers</strong>.",
    "Every symbol value is <strong>unique</strong> — <code>Symbol('id') !== Symbol('id')</code>. Symbols can be used as <strong>object property keys</strong>.",
    "Symbols enable <strong>non-enumerable</strong> properties (hidden in <code>for...in</code> and <code>Object.keys()</code>) and <strong>well-known symbols</strong> for customizing language behavior.",
    "Use <code>Symbol.for(key)</code> for <strong>global symbols</strong> (shared across realms), and <code>Symbol.keyFor(sym)</code> to retrieve the key."
  ],
  "laymanDefinition": "Imagine a coat check where every person gets a unique ticket. Even if two people have the exact same coat, their tickets are different. The ticket number doesn't describe the coat — it just identifies which coat is yours. Symbol is like that ticket: it's a unique identifier. You can attach it to an object as a hidden property name that won't accidentally clash with other property names, and that won't show up in regular property listings (like for...in).",
  "deepDive": [
    {
      "heading": "Symbol as a Primitive Type",
      "text": "Symbol is the seventh primitive type in JavaScript (after string, number, boolean, null, undefined, and bigint). Symbols are created by calling Symbol() — not with 'new Symbol()' (that throws TypeError). Each call to Symbol() returns a completely unique value. Symbols can be used as object property keys, enabling properties that are guaranteed unique."
    },
    {
      "heading": "Symbol Properties — Hidden from Normal Enumeration",
      "text": "Symbol-keyed properties are not included in for...in loops, Object.keys(), Object.values(), Object.entries(), or JSON.stringify(). They ARE included in Object.getOwnPropertySymbols() and Reflect.ownKeys(). This makes symbols useful for metadata and internal properties that should not appear in normal iteration."
    },
    {
      "heading": "Well-Known Symbols — Customizing Language Behavior",
      "text": "JavaScript has built-in well-known symbols that let you customize core language behavior: Symbol.iterator (make objects iterable), Symbol.toStringTag (customize Object.prototype.toString), Symbol.toPrimitive (customize type coercion), Symbol.hasInstance (customize instanceof), Symbol.match/replace/search/split (customize string methods), Symbol.species (control derived objects), and Symbol.isConcatSpreadable (control Array.prototype.concat)."
    },
    {
      "heading": "Global Symbol Registry — Symbol.for() and Symbol.keyFor()",
      "text": "Symbol.for(key) creates or retrieves a global symbol. If a symbol with the given key exists in the runtime-wide registry, it is returned. Otherwise, a new symbol is created and registered. Symbol.keyFor(sym) retrieves the key for a global symbol. Global symbols are shared across iframes, service workers, and different realms in the same JavaScript runtime."
    },
    {
      "heading": "Symbols for Constants and Enum-like Values",
      "text": "Symbols are commonly used for 'enum-like' constants where values must be unique. For example, HTTP status categories, Redux action types, or event names. Using symbols prevents accidental collisions with string-based constants."
    }
  ],
  "interviewAnswer": "Symbol is a primitive type that creates unique identifiers. Every Symbol() call returns a unique value. Symbols can be used as object property keys that are hidden from normal enumeration (for...in, Object.keys). Well-known symbols (like Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive) allow customizing JavaScript's built-in behavior. Symbol.for() creates shared global symbols. Common use cases: unique property keys to avoid collisions, implementing custom iterables via Symbol.iterator, defining internal/metadata properties, enum-like constants (Redux action types, event names), and implementing the observer pattern with Symbol.observable.",
  "interviewQuestions": [
    {
      "question": "What is a Symbol in JavaScript?",
      "answer": "Symbol is a primitive type that creates a unique value. Every Symbol() call returns a completely unique identifier, even with the same description."
    },
    {
      "question": "How do you create a Symbol?",
      "answer": "Symbol() with an optional description string: const sym = Symbol('description'). Do NOT use new Symbol() — that throws TypeError."
    },
    {
      "question": "Are two symbols with the same description equal?",
      "answer": "No. Symbol('id') !== Symbol('id'). The description is just a label for debugging; each Symbol() call creates a unique value."
    },
    {
      "question": "How do you create a shared global symbol?",
      "answer": "Symbol.for('key'). This checks the global symbol registry: if a symbol with that key exists, it's returned; otherwise a new one is created."
    },
    {
      "question": "Are symbol properties visible in for...in?",
      "answer": "No. Symbol-keyed properties are excluded from for...in, Object.keys(), Object.values(), Object.entries(), and JSON.stringify()."
    },
    {
      "question": "How do you access symbol-keyed properties?",
      "answer": "Use Object.getOwnPropertySymbols(obj) to get an array of symbol keys, or Reflect.ownKeys(obj) to get all keys including symbols."
    },
    {
      "question": "What are well-known symbols?",
      "answer": "Built-in symbols like Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive, Symbol.hasInstance, Symbol.match, Symbol.replace, etc. They let you customize JavaScript's built-in behavior."
    },
    {
      "question": "What is Symbol.iterator used for?",
      "answer": "Symbol.iterator defines how an object is iterated (for...of, spread, etc.). Implementing [Symbol.iterator]() makes an object iterable."
    },
    {
      "question": "What does Symbol.toStringTag do?",
      "answer": "It customizes the output of Object.prototype.toString.call(obj). For example, class MyClass { get [Symbol.toStringTag]() { return 'MyClass'; } } makes toString return '[object MyClass]'."
    },
    {
      "question": "What is a practical use case for Symbols?",
      "answer": "Unique property keys (collision-free), internal/metadata properties, enum-like constants, customizing iteration (Symbol.iterator), string formatting (Symbol.toPrimitive), and framework internals (React's React.Fragment, Redux action types)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\"/><text x=\"325\" y=\"40\" text-anchor=\"middle\" fill=\"#e8eaed\" font-size=\"15\" font-weight=\"bold\">Symbol — Unique Property Keys &amp; Well-Known Symbols</text><rect x=\"30\" y=\"65\" width=\"280\" height=\"90\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"170\" y=\"85\" text-anchor=\"middle\" fill=\"#6c9fff\" font-size=\"13\" font-weight=\"bold\">Creating Symbols</text><text x=\"170\" y=\"108\" fill=\"#9aa0b0\" font-size=\"11\">const s1 = Symbol('id');</text><text x=\"170\" y=\"128\" fill=\"#9aa0b0\" font-size=\"11\">const s2 = Symbol('id');</text><text x=\"170\" y=\"148\" fill=\"#e64745\" font-size=\"10\">s1 !== s2 (always unique)</text><rect x=\"340\" y=\"65\" width=\"280\" height=\"90\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#98c379\" stroke-width=\"1.5\"/><text x=\"480\" y=\"85\" text-anchor=\"middle\" fill=\"#98c379\" font-size=\"13\" font-weight=\"bold\">As Object Keys</text><text x=\"480\" y=\"108\" fill=\"#9aa0b0\" font-size=\"11\">obj[s1] = 'hidden value';</text><text x=\"480\" y=\"128\" fill=\"#9aa0b0\" font-size=\"11\">Not in for...in or Object.keys()</text><text x=\"480\" y=\"148\" fill=\"#9aa0b0\" font-size=\"10\">Object.getOwnPropertySymbols(obj)</text><rect x=\"30\" y=\"185\" width=\"590\" height=\"80\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1\"/><text x=\"325\" y=\"208\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">Well-Known Symbols</text><text x=\"325\" y=\"232\" fill=\"#9aa0b0\" font-size=\"11\">Symbol.iterator — for...of | Symbol.toStringTag — toString()</text><text x=\"325\" y=\"252\" fill=\"#9aa0b0\" font-size=\"11\">Symbol.toPrimitive — type coercion | Symbol.hasInstance — instanceof</text></svg>",
  "codeExamples": [
    {
      "title": "Symbol Basics",
      "useCase": "Creating and using symbols",
      "code": "// Creating symbols\nconst sym1 = Symbol();\nconst sym2 = Symbol('description');\nconst sym3 = Symbol('description');\n\nconsole.log(sym2 === sym3); // false (always unique)\nconsole.log(sym2.description); // 'description'\n\n// Symbols are primitives\nconsole.log(typeof sym1); // 'symbol'\n\n// Cannot use new Symbol()\ntry {\n  new Symbol(); // TypeError\n} catch (e) {\n  console.log(e.message); // 'Symbol is not a constructor'\n}\n\n// Symbols as object keys\nconst obj = {};\nconst id = Symbol('id');\nobj[id] = 'secret';\nobj.name = 'Alice';\n\nconsole.log(obj[id]); // 'secret'\nconsole.log(obj.name); // 'Alice'\n\n// Not in normal enumeration\nconsole.log(Object.keys(obj)); // ['name']\nconsole.log(Object.getOwnPropertyNames(obj)); // ['name']\n\n// But accessible via getOwnPropertySymbols\nconsole.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]\nconsole.log(Reflect.ownKeys(obj)); // ['name', Symbol(id)]\n\n// Symbols in JSON.stringify are omitted\nconsole.log(JSON.stringify(obj)); // '{\"name\":\"Alice\"}'",
      "description": "Symbols are unique primitives. As property keys, they're hidden from normal enumeration but accessible via getOwnPropertySymbols."
    },
    {
      "title": "Global Symbols with Symbol.for()",
      "useCase": "Shared symbols across modules/realm",
      "code": "// Create or retrieve global symbols\nconst globalSym1 = Symbol.for('app.global.id');\nconst globalSym2 = Symbol.for('app.global.id');\n\nconsole.log(globalSym1 === globalSym2); // true (same symbol)\n\n// Retrieve key from global symbol\nconsole.log(Symbol.keyFor(globalSym1)); // 'app.global.id'\n\n// Non-global symbols don't have a key\nconst localSym = Symbol('local');\nconsole.log(Symbol.keyFor(localSym)); // undefined\n\n// Global symbols are cross-realm\n// If an iframe and parent page both call Symbol.for('shared'),\n// they get the same symbol\n\n// Practical: library API constants\nconst Events = {\n  USER_LOGIN: Symbol.for('app.event.user.login'),\n  USER_LOGOUT: Symbol.for('app.event.user.logout'),\n  DATA_UPDATE: Symbol.for('app.event.data.update')\n};\n\nfunction emit(event, data) {\n  // event is a symbol — guaranteed unique\n  console.log('Event:', Symbol.keyFor(event) || event.description);\n}\n\nemit(Events.USER_LOGIN, { userId: 42 });\n// Event: app.event.user.login\n\n// Cross-module sharing\n// module1.js: const TYPE = Symbol.for('mylib.type');\n// module2.js: const TYPE = Symbol.for('mylib.type');\n// module1.TYPE === module2.TYPE // true!",
      "description": "Symbol.for() creates/retrieves global symbols from a runtime-wide registry. Symbol.keyFor() gets the key for a global symbol."
    },
    {
      "title": "Well-Known Symbols — Customizing Behavior",
      "useCase": "Using Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive",
      "code": "// Symbol.iterator — make objects iterable\nconst range = {\n  from: 1,\n  to: 5,\n  [Symbol.iterator]() {\n    let current = this.from;\n    const end = this.to;\n    return {\n      next() {\n        return current <= end\n          ? { value: current++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n\nconsole.log([...range]); // [1, 2, 3, 4, 5]\n\n// Symbol.toStringTag — customize toString()\nclass CustomClass {\n  get [Symbol.toStringTag]() {\n    return 'CustomClass';\n  }\n}\n\nconst instance = new CustomClass();\nconsole.log(Object.prototype.toString.call(instance));\n// '[object CustomClass]'\n\n// Symbol.toPrimitive — customize type coercion\nclass Money {\n  constructor(amount, currency) {\n    this.amount = amount;\n    this.currency = currency;\n  }\n\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') {\n      return this.amount;\n    }\n    if (hint === 'string') {\n      return this.amount + ' ' + this.currency;\n    }\n    return this.amount; // default\n  }\n}\n\nconst price = new Money(100, 'USD');\nconsole.log(+price);       // 100 (number hint)\nconsole.log(String(price)); // '100 USD' (string hint)\nconsole.log(price + 50);    // 150 (default hint)",
      "description": "Well-known symbols let you customize how objects interact with JavaScript language features like iteration, toString, and coercion."
    },
    {
      "title": "Symbols for Constants and Enum Patterns",
      "useCase": "Using symbols as enum-like constants",
      "code": "// Symbols as enum constants — guaranteed uniqueness\nconst Color = {\n  RED: Symbol('red'),\n  GREEN: Symbol('green'),\n  BLUE: Symbol('blue')\n};\n\nfunction getHexCode(color) {\n  switch (color) {\n    case Color.RED:   return '#FF0000';\n    case Color.GREEN: return '#00FF00';\n    case Color.BLUE:  return '#0000FF';\n    default:          return '#000000';\n  }\n}\n\nconsole.log(getHexCode(Color.RED)); // '#FF0000'\n\n// No risk of collision — even if someone creates a 'red' string\n\n// Symbol-based state machine\nconst State = {\n  IDLE: Symbol('idle'),\n  LOADING: Symbol('loading'),\n  SUCCESS: Symbol('success'),\n  ERROR: Symbol('error')\n};\n\nclass FetchState {\n  constructor() {\n    this.state = State.IDLE;\n  }\n\n  setLoading() { this.state = State.LOADING; }\n  setSuccess() { this.state = State.SUCCESS; }\n  setError()   { this.state = State.ERROR; }\n\n  isIdle()    { return this.state === State.IDLE; }\n  isLoading() { return this.state === State.LOADING; }\n  isSuccess() { return this.state === State.SUCCESS; }\n  isError()   { return this.state === State.ERROR; }\n}\n\n// Redux action types with symbols\nconst ActionTypes = {\n  ADD_TODO: Symbol('ADD_TODO'),\n  REMOVE_TODO: Symbol('REMOVE_TODO'),\n  TOGGLE_TODO: Symbol('TOGGLE_TODO')\n};\n\nfunction todoReducer(state = [], action) {\n  switch (action.type) {\n    case ActionTypes.ADD_TODO:\n      return [...state, action.payload];\n    case ActionTypes.REMOVE_TODO:\n      return state.filter((_, i) => i !== action.payload);\n    default:\n      return state;\n  }\n}",
      "description": "Symbols make excellent enum-like constants because they are guaranteed unique and cannot be accidentally compared with strings or other values."
    },
    {
      "title": "Symbol-Metadata for Internal Properties",
      "useCase": "Hiding internal implementation details",
      "code": "// Internal metadata hidden from normal access\nconst _internals = Symbol('internals');\n\nclass BankAccount {\n  constructor(owner, balance) {\n    this.owner = owner;\n    this[_internals] = {\n      balance: balance,\n      transactions: [],\n      createdAt: new Date()\n    };\n  }\n\n  deposit(amount) {\n    this[_internals].balance += amount;\n    this[_internals].transactions.push({\n      type: 'deposit',\n      amount: amount,\n      date: new Date()\n    });\n  }\n\n  getBalance() {\n    return this[_internals].balance;\n  }\n\n  getTransactionHistory() {\n    return [...this[_internals].transactions];\n  }\n}\n\nconst account = new BankAccount('Alice', 1000);\n\n// Normal properties\nconsole.log(Object.keys(account)); // ['owner']\nconsole.log(account.owner); // 'Alice'\n\n// Internal data is hidden\nconsole.log(account.balance); // undefined\nconsole.log(account._internals); // undefined\n\n// But it works through methods\nconsole.log(account.getBalance()); // 1000\naccount.deposit(500);\nconsole.log(account.getBalance()); // 1500\n\n// Using symbols for framework metadata\n// React: React.Fragment, React.Profiler, etc.\nconst MY_LIBRARY_INTERNAL = Symbol('myLibrary.internal');\n\nfunction createComponent(config) {\n  return {\n    ...config,\n    [MY_LIBRARY_INTERNAL]: {\n      renderCount: 0,\n      mountTime: Date.now()\n    }\n  };\n}\n\n// JSON serialization — symbols are omitted\nconsole.log(JSON.stringify(account));\n// '{\"owner\":\"Alice\"}' (symbol properties excluded)",
      "description": "Symbol-keyed properties are ideal for internal implementation details that should not be part of the public API or serialization."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a Symbol in JavaScript?",
      "options": [
        "A string wrapper",
        "A unique primitive value",
        "A type of object",
        "A function"
      ],
      "answer": 1,
      "explanation": "Symbol is a primitive type that creates unique values. Each Symbol() call returns a completely unique identifier."
    },
    {
      "question": "Are two symbols with the same description equal?",
      "options": [
        "Yes, equal by description",
        "No, each Symbol() creates a unique value",
        "Only if created with Symbol.for()",
        "Only in strict mode"
      ],
      "answer": 1,
      "explanation": "Symbol('id') !== Symbol('id'). The description is just a label; every Symbol() call produces a unique value."
    },
    {
      "question": "How do you create a global symbol?",
      "options": [
        "Symbol.global('key')",
        "Symbol.for('key')",
        "Symbol('key', true)",
        "new Symbol('key', 'global')"
      ],
      "answer": 1,
      "explanation": "Symbol.for('key') creates or retrieves a global symbol from the runtime-wide symbol registry."
    },
    {
      "question": "Are symbol-keyed properties included in JSON.stringify?",
      "options": [
        "Yes",
        "No, they are omitted",
        "Only if enumerable",
        "Only global symbols"
      ],
      "answer": 1,
      "explanation": "Symbol-keyed properties are excluded from JSON.stringify, for...in, Object.keys(), and Object.values()."
    },
    {
      "question": "What does Symbol.iterator do?",
      "options": [
        "Returns the string representation",
        "Defines how an object is iterated",
        "Defines type coercion behavior",
        "Controls instanceof checks"
      ],
      "answer": 1,
      "explanation": "Symbol.iterator is a well-known symbol that makes an object iterable (usable with for...of, spread, etc.)."
    },
    {
      "question": "How do you access all symbol properties of an object?",
      "options": [
        "Object.keys(obj)",
        "Object.getOwnPropertySymbols(obj)",
        "for...in",
        "obj[Symbol]"
      ],
      "answer": 1,
      "explanation": "Object.getOwnPropertySymbols(obj) returns an array of all symbol keys on the object."
    },
    {
      "question": "What does Symbol.toPrimitive customize?",
      "options": [
        "Object iteration",
        "Type coercion behavior",
        "toString output",
        "instanceof behavior"
      ],
      "answer": 1,
      "explanation": "Symbol.toPrimitive lets you customize how an object is converted to a primitive (number, string, or default hint)."
    },
    {
      "question": "What is the correct way to create a Symbol?",
      "options": [
        "new Symbol()",
        "Symbol()",
        "Symbol.new()",
        "create Symbol()"
      ],
      "answer": 1,
      "explanation": "Call Symbol() as a function (not a constructor). new Symbol() throws TypeError because Symbol is not a constructor."
    },
    {
      "question": "What is a common use case for Symbols?",
      "options": [
        "String manipulation",
        "Creating unique property keys for internal state",
        "Array sorting",
        "Number formatting"
      ],
      "answer": 1,
      "explanation": "Symbols are commonly used for unique property keys to store internal/metadata state that should not collide or be enumerated."
    },
    {
      "question": "What does Symbol.hasInstance do?",
      "options": [
        "Creates new instances",
        "Customizes instanceof behavior",
        "Checks property existence",
        "Defines object equality"
      ],
      "answer": 1,
      "explanation": "Symbol.hasInstance lets you customize how instanceof works with your class. It's used by the instanceof operator."
    }
  ]
};
