export const oop_observer = {
  "id": "oop-observer",
  "title": "Observer Pattern",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
    "Key components: Subject (observable) maintains a list of observers and notifies them. Observers register with the subject to receive updates.",
    "Used in: event handling systems, pub/sub messaging, MVC architecture, real-time UIs, data binding.",
    "JavaScript's EventEmitter, DOM events, and RxJS Observables are all based on the Observer pattern."
  ],
  "laymanDefinition": "Observer is like a YouTube channel subscription. You subscribe to a channel (the subject). When the channel uploads a new video (state change), you get notified (update). You can unsubscribe anytime. The channel does not need to know who you are — it just notifies all subscribers.",
  "deepDive": [
    {
      "heading": "Subject and Observer Roles",
      "text": "Subject (Observable): maintains observer list, provides subscribe/unsubscribe methods, notifies observers of state changes. Observer: defines update() method that subject calls on notification. ConcreteSubject: stores state of interest. ConcreteObserver: maintains reference to subject and implements update()."
    },
    {
      "heading": "Push vs Pull Models",
      "text": "Push: subject sends detailed data to observers (all data they might need). Pull: subject sends minimal notification, observers query for needed data. Push is simpler but may send unnecessary data. Pull is more efficient but requires observers to know how to query. RxJS uses a push-based model."
    },
    {
      "heading": "Observer in JavaScript",
      "text": "DOM events: addEventListener(\"click\", handler) — classic observer. EventEmitter (Node.js): emitter.on(\"event\", handler), emitter.emit(\"event\", data). Proxy-based observation: JavaScript Proxy can intercept property changes and trigger observers. RxJS Observables are the modern reactive version."
    },
    {
      "heading": "Observer vs Pub/Sub",
      "text": "Observer: subject directly notifies observers (tight coupling). Pub/Sub: a message broker mediates between publishers and subscribers (loose coupling). Observer is simpler. Pub/Sub scales better and decouples senders from receivers. JavaScript EventEmitter is closer to Pub/Sub than pure Observer."
    },
    {
      "heading": "Memory Leaks and Unsubscription",
      "text": "A common pitfall: forgetting to unsubscribe observers causes memory leaks because the subject holds references to observers, preventing garbage collection. Always unsubscribe when the observer is no longer needed. In React: useEffect cleanup function. In RxJS: subscription.unsubscribe()."
    }
  ],
  "interviewAnswer": "Observer enables one-to-many notification. Subject maintains observer list; notifies all on state change. Used in event handling, MVC, reactive programming. Watch for memory leaks — always unsubscribe. Pub/Sub is a more decoupled variant.",
  "interviewQuestions": [
    {
      "question": "What is the Observer pattern?",
      "answer": "A one-to-many dependency where state changes in one object notify all its dependents."
    },
    {
      "question": "What are the key components?",
      "answer": "Subject (observable) and Observer. Subject maintains observer list and notifies them."
    },
    {
      "question": "What is the push model?",
      "answer": "Subject sends detailed data to observers during notification."
    },
    {
      "question": "What is the pull model?",
      "answer": "Subject sends minimal notification; observers query for needed data."
    },
    {
      "question": "What is JavaScript EventEmitter?",
      "answer": "Node.js built-in implementation of Observer/Pub/Sub pattern for event handling."
    },
    {
      "question": "What is the difference between Observer and Pub/Sub?",
      "answer": "Observer: direct notification (tight coupling). Pub/Sub: message broker mediates (loose coupling)."
    },
    {
      "question": "What causes memory leaks in Observer?",
      "answer": "Forgetting to unsubscribe — subject holds references to observers, preventing garbage collection."
    },
    {
      "question": "How does React use Observer?",
      "answer": "useEffect for subscriptions, context changes trigger re-renders, event listeners on DOM elements."
    },
    {
      "question": "What is RxJS?",
      "answer": "Reactive Extensions for JavaScript — implements Observable pattern with operators for stream processing."
    },
    {
      "question": "What is a real-world Observer example?",
      "answer": "DOM addEventListener: subject = DOM element, observer = event handler function."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Observer Pattern</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Subject</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Observable</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Observer A</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">onUpdate()</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Observer B</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">onUpdate()</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Observer C</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">onUpdate()</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Notify All</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">State change</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Observer Pattern</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">One-to-many notification. Subject -> Obse</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rvers. Used in events, MVC, reactive prog</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ramming. Pub/Sub.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Observer: State changes in one object notify all d</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ependents. Events, pub/sub, reactive streams.</text></svg>",
  "codeExamples": [
    {
      "title": "Custom Observer Implementation",
      "useCase": "Simple subject/observer in JS.",
      "code": "class Subject {\n  constructor() { this.observers = new Set(); }\n  subscribe(obs) { this.observers.add(obs); }\n  unsubscribe(obs) { this.observers.delete(obs); }\n  notify(data) { this.observers.forEach(obs => obs.update(data)); }\n}\n\nclass Observer {\n  constructor(name) { this.name = name; }\n  update(data) {\n    console.log(`[${this.name}] Received:`, data);\n  }\n}\n\nconst subject = new Subject();\nconst obs1 = new Observer(\"Logger\");\nconst obs2 = new Observer(\"Analytics\");\nsubject.subscribe(obs1);\nsubject.subscribe(obs2);\nsubject.notify({ event: \"user_login\", userId: 42 });",
      "description": "Custom Observer: Subject maintains a Set of observers, notifies all on state change."
    },
    {
      "title": "Node.js EventEmitter",
      "useCase": "Built-in observer pattern.",
      "code": "const EventEmitter = require(\"events\");\n\nclass OrderSystem extends EventEmitter {}\nconst orders = new OrderSystem();\n\n// Subscribe to events\norders.on(\"order_placed\", (order) => {\n  console.log(\"Email: Order confirmation sent\");\n});\norders.on(\"order_placed\", (order) => {\n  console.log(\"Inventory: Stock updated\");\n});\norders.on(\"order_placed\", (order) => {\n  console.log(\"Analytics: Order tracked\");\n});\n\n// Emit event — all handlers called\norders.emit(\"order_placed\", { id: 123, total: 50 });",
      "description": "EventEmitter is Node.js\\'s built-in Observer/Pub/Sub implementation."
    },
    {
      "title": "RxJS Observable",
      "useCase": "Reactive observer pattern.",
      "code": "const { Observable } = require(\"rxjs\");\n\nconst observable = new Observable(subscriber => {\n  subscriber.next(\"Hello\");\n  subscriber.next(\"World\");\n  setTimeout(() => {\n    subscriber.next(\"Delayed message\");\n    subscriber.complete();\n  }, 1000);\n});\n\nconst subscription = observable.subscribe({\n  next: value => console.log(\"Received:\", value),\n  error: err => console.error(\"Error:\", err),\n  complete: () => console.log(\"Done!\"),\n});\n\n// Unsubscribe when done\nsetTimeout(() => subscription.unsubscribe(), 500);",
      "description": "RxJS Observable provides a powerful, composable observer pattern with operators."
    },
    {
      "title": "DOM Event Observer",
      "useCase": "Browser event handling.",
      "code": "const button = document.querySelector(\"#myButton\");\n\n// Observer attaches to subject\nconst onClickHandler = (event) => {\n  console.log(\"Button clicked!\", event);\n};\nbutton.addEventListener(\"click\", onClickHandler);\n\n// Later: unsubscribe\nbutton.removeEventListener(\"click\", onClickHandler);\n\n// Multiple observers can listen to same event\nbutton.addEventListener(\"click\", (e) => {\n  // Analytics tracking\n  console.log(\"Analytics: click recorded\");\n});",
      "description": "DOM addEventListener/removeEventListener implements Observer pattern for browser events."
    },
    {
      "title": "React useEffect Cleanup",
      "useCase": "Unsubscribe pattern in React.",
      "code": "import { useEffect } from \"react\";\n\nfunction UserStatus({ userId }) {\n  useEffect(() => {\n    console.log(\"Subscribing to user\", userId);\n    const sub = userService.onStatusChange(userId, (s) => {\n      console.log(\"Status:\", s);\n    });\n    return () => { sub.unsubscribe(); };\n  }, [userId]);\n  return <div>Monitoring user...</div>;\n}",
      "description": "React useEffect cleanup function unsubscribes observers, preventing memory leaks."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Observer define?",
      "options": [
        "One-to-one relationship",
        "One-to-many dependency",
        "Many-to-many relationship",
        "No relationship"
      ],
      "answer": 1,
      "explanation": "Observer defines a one-to-many dependency for state change notifications."
    },
    {
      "question": "What is the subject\\'s role?",
      "options": [
        "Receive notifications",
        "Maintain observer list and notify",
        "Destroy observers",
        "Create observers"
      ],
      "answer": 1,
      "explanation": "Subject maintains observer list and notifies all on state change."
    },
    {
      "question": "What is the difference between Observer and Pub/Sub?",
      "options": [
        "No difference",
        "Observer is direct; Pub/Sub uses a broker",
        "Pub/Sub is older",
        "Observer is for UI only"
      ],
      "answer": 1,
      "explanation": "Observer: direct notification. Pub/Sub: message broker mediates between publishers and subscribers."
    },
    {
      "question": "What causes memory leaks in Observer?",
      "options": [
        "Too many observers",
        "Forgetting to unsubscribe",
        "Slow notification",
        "Large data payloads"
      ],
      "answer": 1,
      "explanation": "Unsubscribed observers still referenced by the subject cause memory leaks."
    },
    {
      "question": "What is Node.js EventEmitter?",
      "options": [
        "A database driver",
        "Built-in observer pattern",
        "A web framework",
        "A testing library"
      ],
      "answer": 1,
      "explanation": "EventEmitter is Node.js\\'s built-in implementation of the observer/pub-sub pattern."
    },
    {
      "question": "How do you unsubscribe in React useEffect?",
      "options": [
        "Call useState",
        "Return cleanup function from useEffect",
        "Use useMemo",
        "Call useCallback"
      ],
      "answer": 1,
      "explanation": "Return a cleanup function from useEffect to unsubscribe when the component unmounts."
    }
  ]
};
