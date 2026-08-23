export const node_event_driven_architecture = {
  "id": "node-event-driven-architecture",
  "title": "Node.js Event Driven Architecture",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Node.js uses an event-driven architecture where the flow is determined by events such as user actions, messages, or sensor outputs.",
    "The EventEmitter class is the core pattern: objects emit named events that trigger listeners (callback functions).",
    "This architecture enables non-blocking I/O: instead of waiting for an operation to complete, Node.js registers a callback and continues processing other events.",
    "The event-driven pattern decouples event producers from consumers, making the system modular and extensible."
  ],
  "laymanDefinition": "Event-driven architecture in Node.js is like a busy restaurant kitchen. The chef (event loop) handles orders (events) as they come in. When an order needs a specific preparation step (like grilling), the chef delegates it to a station (libuv thread pool) and moves on to the next order. When the station finishes, it rings a bell (callback) to notify the chef. The chef does not wait around for each step to finish - they keep working on other tasks. This is why Node.js can handle thousands of \"orders\" simultaneously without getting overwhelmed.",
  "deepDive": [
    {
      "heading": "The EventEmitter Pattern",
      "text": "EventEmitter is a core Node.js class in the events module. It provides: (1) emitter.on(eventName, listener) - register a listener for a named event. (2) emitter.emit(eventName, ...args) - emit an event, triggering all registered listeners synchronously. (3) emitter.once(eventName, listener) - register a one-time listener that removes itself after first invocation. (4) emitter.removeListener(eventName, listener) / emitter.off() - remove a specific listener. (5) emitter.removeAllListeners(eventName) - remove all listeners for an event. (6) emitter.listenerCount(eventName) - count listeners. (7) emitter.setMaxListeners(n) - change the default max listener warning (default 10). Built-in Node.js modules like Stream, http.Server, and process inherit from EventEmitter. The pattern enables loose coupling: the emitter does not need to know what listeners are registered or what they do."
    },
    {
      "heading": "Synchronous vs Asynchronous Event Emission",
      "text": "EventEmitter.emit() calls listeners synchronously in the order they were registered. This is important: if a listener throws an error, uncaught listeners after it do NOT execute. For async events, the listener should perform async work and handle its own errors. The \"error\" event is special: if emitted and no listener is registered, Node.js throws the error and crashes the process. Always register an \"error\" listener on EventEmitters. The newListener and removeListener events are emitted when listeners are added/removed. EventEmitter.setMaxListeners() warns about potential memory leaks when more than 10 listeners are registered for an event."
    },
    {
      "heading": "Custom Event Emitters and Inheritance",
      "text": "Create custom event emitters by inheriting from EventEmitter: (1) Using ES6 class: class MyEmitter extends EventEmitter {}. (2) Using util.inherits() (legacy): util.inherits(MyEmitter, EventEmitter). (3) Using Object.create or factory functions. Best practices: (1) Document the events a custom emitter can emit. (2) Use string constants for event names to avoid typos. (3) Always emit \"error\" events with an Error object (not a string). (4) Consider backpressure - if listeners are slower than emits, events can pile up. (5) Use eventNames() to list all registered event names. (6) Use rawListeners() to get copies of listener arrays."
    },
    {
      "heading": "Event-Driven Patterns in Node.js Core",
      "text": "Node.js core modules use the event-driven pattern extensively: (1) http.Server emits \"request\", \"connection\", \"close\", \"error\", \"upgrade\", \"checkContinue\". (2) Streams emit \"data\", \"end\", \"close\", \"error\", \"pause\", \"resume\", \"drain\", \"finish\", \"pipe\", \"unpipe\". (3) process emits \"exit\", \"uncaughtException\", \"unhandledRejection\", \"beforeExit\", \"SIGINT\", \"SIGTERM\". (4) child_process emits \"message\", \"error\", \"close\", \"exit\", \"disconnect\". (5) fs.FSWatcher emits \"change\", \"error\". The event-driven architecture enables the observer pattern at the application level: you can create your own event buses, pub/sub systems, or message brokers using EventEmitter as the foundation."
    },
    {
      "heading": "Memory Leak Prevention and Performance",
      "text": "Common pitfalls: (1) Forgetting to remove listeners causes memory leaks - the emitter holds references to listener functions, preventing garbage collection. (2) Using anonymous arrow functions as listeners prevents removal (you have no reference to remove). Solution: store references to listener functions. (3) Emitting too many events per second (100k+) can overwhelm listeners - use throttling or batching. (4) Synchronous listeners block the event loop - keep listener logic lightweight or defer heavy work. (5) MaxListeners warning (default 10) does not limit listeners but warns about potential leaks. (6) Use emitter.once() for one-time events - the listener auto-removes after invocation. (7) Use AbortController with addEventListener (Node 16+) for modern listener management."
    }
  ],
  "interviewAnswer": "Node.js uses an event-driven architecture centered on the EventEmitter class. Objects emit named events, and registered listener functions handle them. The pattern is synchronous by default: emit() calls listeners in order. EventEmitter enables loose coupling between event producers and consumers. Built-in Node.js modules (Stream, http, process) inherit from EventEmitter. Key patterns: on() for persistent listeners, once() for one-time, emit() to trigger events. \"error\" events without a listener crash the process. Memory leaks occur when listeners are not removed. Use emitter.setMaxListeners() to adjust warnings. Custom event emitters extend EventEmitter via class inheritance or util.inherits().",
  "interviewQuestions": [
    {
      "question": "What is EventEmitter and how does it work?",
      "answer": "EventEmitter is a Node.js class that implements the observer pattern. It maintains a map of event names to arrays of listener functions. When emit(eventName) is called, all registered listeners for that event are invoked synchronously in registration order."
    },
    {
      "question": "How does error handling work in EventEmitter?",
      "answer": "The \"error\" event is special. If an \"error\" event is emitted and no listener is registered, Node.js throws the error and crashes the process. Always register an \"error\" listener: emitter.on(\"error\", (err) => console.error(err))."
    },
    {
      "question": "What is the difference between on() and once()?",
      "answer": "on() registers a persistent listener that fires every time the event is emitted. once() registers a one-time listener that auto-removes after its first invocation. once() internally calls on() and then removeListener() after execution."
    },
    {
      "question": "What happens if a listener throws an error?",
      "answer": "If a synchronous listener throws, subsequent listeners for the same event do not execute. The error propagates to the \"error\" event. If no \"error\" listener is registered, the process crashes. Always wrap listener code in try-catch or use async error handling."
    },
    {
      "question": "What is the default max listener warning threshold?",
      "answer": "10 listeners per event. This is a WARNING, not a limit. It alerts you to potential memory leaks where listeners are being added repeatedly without removal. Change it with emitter.setMaxListeners(n) or global setting: require(\"events\").EventEmitter.defaultMaxListeners = n."
    },
    {
      "question": "How do you avoid memory leaks with EventEmitter?",
      "answer": "(1) Always remove listeners when they are no longer needed using removeListener() or off(). (2) Use once() for one-time events. (3) Store references to listener functions (avoid anonymous arrow functions if removal is needed). (4) Use AbortController for modern listener lifecycle management. (5) Monitor listenerCount() for suspicious growth."
    },
    {
      "question": "What is the newListener and removeListener event?",
      "answer": "EventEmitter emits \"newListener\" when a listener is added, and \"removeListener\" when a listener is removed. These can be used for debugging, logging, or implementing custom behavior when the listener list changes."
    },
    {
      "question": "How do you inherit from EventEmitter?",
      "answer": "Class syntax: class MyEmitter extends EventEmitter {}. Legacy: util.inherits(MyEmitter, EventEmitter). Factory: Object.create(EventEmitter.prototype). The custom class can then use this.emit() and this.on() for internal events."
    },
    {
      "question": "What Node.js core modules use EventEmitter?",
      "answer": "http.Server (request, connection), Stream (data, end, error), process (exit, uncaughtException), child_process (message, exit, close), fs.FSWatcher (change, error), readline (line, close). Most async Node.js APIs are built on EventEmitter."
    },
    {
      "question": "How do you list all registered event listeners?",
      "answer": "emitter.eventNames() returns an array of event names with listeners. emitter.listeners(eventName) returns a copy of the listener array. emitter.rawListeners(eventName) returns a copy including wrappers (like once() wrappers)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Event-Driven Architecture</text><rect x=\"30\" y=\"55\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"110\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Event Source</text><text x=\"110\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Emits events via emit()</text><line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"120\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"120\" width=\"160\" height=\"40\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"110\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EventEmitter</text><text x=\"110\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Routes events to listeners</text><line x1=\"110\" y1=\"160\" x2=\"50\" y2=\"180\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"160\" x2=\"170\" y2=\"180\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"160\" x2=\"110\" y2=\"200\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"20\" y=\"180\" width=\"60\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"50\" y=\"196\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Listener 1</text><text x=\"50\" y=\"208\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">on() regis</text><text x=\"50\" y=\"219\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tered</text><rect x=\"80\" y=\"180\" width=\"60\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"110\" y=\"196\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Listener 2</text><text x=\"110\" y=\"208\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">on() or on</text><text x=\"110\" y=\"219\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ce()</text><rect x=\"140\" y=\"180\" width=\"60\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"170\" y=\"196\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Listener N</text><text x=\"170\" y=\"219\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Any number</text><text x=\"225\" y=\"78\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">User action, data arrival, timer</text><text x=\"225\" y=\"138\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Synchronous invocation</text><text x=\"225\" y=\"200\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">Handlers run in registration order</text></svg>",
  "codeExamples": [
    {
      "title": "Basic EventEmitter Usage",
      "useCase": "Register listeners and emit events",
      "code": "var EventEmitter = require(\"events\");\nvar myEmitter = new EventEmitter();\n\nmyEmitter.on(\"greet\", function(name) {\n  console.log(\"Hello, \" + name + \"!\");\n});\n\nmyEmitter.on(\"greet\", function(name) {\n  console.log(\"Welcome to Node.js, \" + name);\n});\n\nmyEmitter.emit(\"greet\", \"Alice\");\n// Hello, Alice!\n// Welcome to Node.js, Alice",
      "description": "EventEmitter registers listeners with on() and triggers them with emit(). Listeners execute synchronously in registration order. Both listeners fire for the single emit() call."
    },
    {
      "title": "Custom EventEmitter with Error Handling",
      "useCase": "Build a download manager with proper error handling",
      "code": "var EventEmitter = require(\"events\");\n\nfunction Downloader() {\n  EventEmitter.call(this);\n}\nDownloader.prototype = Object.create(EventEmitter.prototype);\n\nDownloader.prototype.download = function(url) {\n  var self = this;\n  self.emit(\"start\", url);\n\n  setTimeout(function() {\n    if (!url) {\n      self.emit(\"error\", new Error(\"URL is required\"));\n      return;\n    }\n    self.emit(\"progress\", { url: url, pct: 50 });\n    setTimeout(function() {\n      self.emit(\"complete\", { url: url, data: \"file content\" });\n    }, 500);\n  }, 500);\n};\n\nvar dl = new Downloader();\ndl.on(\"start\", function(u) { console.log(\"Starting:\", u); });\ndl.on(\"progress\", function(p) { console.log(p.pct + \"% done\"); });\ndl.on(\"complete\", function(r) { console.log(\"Done:\", r.data); });\ndl.on(\"error\", function(err) { console.error(\"Error:\", err.message); });\n\ndl.download(\"https://example.com/file.zip\");",
      "description": "The custom Downloader class inherits from EventEmitter. It emits lifecycle events (start, progress, complete, error). The error event is handled with a dedicated listener, preventing process crash. Each stage of the download emits appropriate events."
    },
    {
      "title": "Memory Leak Detection with Listener Count",
      "useCase": "Monitor and prevent listener leaks",
      "code": "var EventEmitter = require(\"events\");\nvar emitter = new EventEmitter();\n\n// Simulate accidental listener leak\nsetInterval(function() {\n  emitter.on(\"data\", function() {\n    // This anonymous function cannot be removed later\n  });\n  var count = emitter.listenerCount(\"data\");\n  if (count > 10) {\n    console.warn(\"Warning: \" + count + \" listeners on data event\");\n  }\n  if (count > 20) {\n    console.error(\"Leak detected! Removing all listeners.\");\n    emitter.removeAllListeners(\"data\");\n  }\n}, 1000);\n\n// Proper pattern: store listener reference\nvar handler = function() { /* handle data */ };\nemitter.on(\"data\", handler);\n// Later: emitter.removeListener(\"data\", handler);\n\n// Check if emitter has listeners\nconsole.log(\"Has listeners:\", emitter.emit(\"data\") ? \"yes\" : \"no\");",
      "description": "The emit() method returns true if there were listeners for the event, false otherwise. Monitoring listenerCount() helps detect leaks early. Storing listener references allows proper cleanup."
    },
    {
      "title": "Building a Pub/Sub Event Bus",
      "useCase": "Create a publish-subscribe system with EventEmitter",
      "code": "var EventEmitter = require(\"events\");\n\nvar eventBus = new EventEmitter();\neventBus.setMaxListeners(100);\n\n// Publisher\nfunction publish(event, data) {\n  console.log(\"Publishing:\", event);\n  eventBus.emit(event, data);\n}\n\n// Subscriber\nfunction subscribe(event, handler) {\n  eventBus.on(event, handler);\n  return function unsubscribe() {\n    eventBus.off(event, handler);\n  };\n}\n\nvar unsub = subscribe(\"order:created\", function(order) {\n  console.log(\"New order: \" + order.id);\n  // Send email, update inventory, charge card\n});\n\npublish(\"order:created\", { id: 123, item: \"Widget\", qty: 2 });\n\n// Later: unsubscribe\nunsub();\n\npublish(\"order:created\", { id: 124, item: \"Gadget\", qty: 1 });\n// This does not trigger the first handler (unsubscribed)",
      "description": "The event bus pattern decouples publishers from subscribers. Each subscribe() returns an unsubscribe function for clean removal. setMaxListeners(100) increases the warning threshold for this bus with many subscribers."
    },
    {
      "title": "EventEmitter with Async Listeners",
      "useCase": "Handle async operations in event listeners",
      "code": "var EventEmitter = require(\"events\");\nvar emitter = new EventEmitter();\n\nemitter.on(\"process\", async function(item) {\n  try {\n    var result = await processItem(item);\n    emitter.emit(\"processed\", result);\n  } catch (err) {\n    emitter.emit(\"error\", err);\n  }\n});\n\n// Multiple listeners for same event\nemitter.on(\"processed\", function(result) {\n  console.log(\"Log: processed \" + result.id);\n});\n\nemitter.on(\"processed\", function(result) {\n  // Update cache\n  cache.set(result.id, result);\n});\n\n// Simulate async processing\nfunction processItem(item) {\n  return new Promise(function(resolve) {\n    setTimeout(function() {\n      resolve({ id: item.id, status: \"done\" });\n    }, 100);\n  });\n}\n\nemitter.emit(\"process\", { id: 1 });",
      "description": "Async listeners work but must handle their own errors (the emitter cannot catch rejections from async listeners). Each async listener independently processes and emits completion events. Multiple listeners for \"processed\" run in parallel."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does EventEmitter.emit() do?",
      "options": [
        "Creates a new event",
        "Triggers all listeners for the named event synchronously",
        "Removes all listeners",
        "Registers a new listener"
      ],
      "answer": 1,
      "explanation": "emit() calls all registered listeners for the event name synchronously in registration order."
    },
    {
      "question": "What happens if an \"error\" event has no listener?",
      "options": [
        "The event is ignored",
        "Node.js throws the error and crashes the process",
        "It is automatically retried",
        "The error is logged"
      ],
      "answer": 1,
      "explanation": "An \"error\" event without a listener causes Node.js to throw the error, which crashes the process if unhandled."
    },
    {
      "question": "What does once() do differently from on()?",
      "options": [
        "Runs listeners in reverse order",
        "Auto-removes the listener after first invocation",
        "Runs listeners asynchronously",
        "Limits to one listener total"
      ],
      "answer": 1,
      "explanation": "once() registers a listener that fires once and then removes itself. It is equivalent to on() followed by removeListener() inside the handler."
    },
    {
      "question": "What is the default maxListeners warning threshold?",
      "options": [
        "5",
        "10",
        "25",
        "Unlimited"
      ],
      "answer": 1,
      "explanation": "Default is 10. Set with emitter.setMaxListeners(n). The warning alerts about potential memory leaks, not a hard limit."
    },
    {
      "question": "How do you inherit from EventEmitter?",
      "options": [
        "class MyEmitter extends EventEmitter {}",
        "Object.create(emitter)",
        "EventEmitter.inherit(MyEmitter)",
        "new EventEmitter(MyEmitter)"
      ],
      "answer": 0,
      "explanation": "ES6: class MyEmitter extends EventEmitter {}. Legacy: util.inherits(MyEmitter, EventEmitter)."
    },
    {
      "question": "What does emitter.eventNames() return?",
      "options": [
        "Number of listeners",
        "Array of event names with registered listeners",
        "The last emitted event",
        "List of emitter properties"
      ],
      "answer": 1,
      "explanation": "eventNames() returns an array of strings of event names that currently have listeners registered."
    }
  ]
};
