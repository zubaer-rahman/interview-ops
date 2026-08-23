export const oop_strategy = {
  "id": "oop-strategy",
  "title": "Strategy Pattern",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "The Strategy pattern defines a family of interchangeable algorithms, encapsulates each one, and makes them interchangeable at runtime.",
    "Strategy lets the algorithm vary independently from the clients that use it.",
    "Key components: Context (uses the strategy), Strategy interface, Concrete Strategies (implementations).",
    "Eliminates large conditional statements (if/else or switch) by delegating algorithm selection to a strategy object."
  ],
  "laymanDefinition": "Strategy is like navigation apps. You input your destination (context). The app offers different routes: \"fastest\" (time strategy), \"shortest\" (distance strategy), \"avoid highways\" (scenic strategy), \"public transit\" (transit strategy). You pick a strategy at runtime. The app (context) does not care which strategy — it just uses it to navigate.",
  "deepDive": [
    {
      "heading": "When to Use Strategy",
      "text": "Multiple related classes differ only in their behavior. You need different variants of an algorithm. Algorithm uses data that clients should not know about. A class has large conditional statements for different behaviors. You want to avoid complex, hard-to-maintain if/else chains."
    },
    {
      "heading": "Strategy Structure",
      "text": "Strategy: common interface for all supported algorithms. ConcreteStrategy: implements the algorithm using the Strategy interface. Context: maintains a reference to a Strategy object, may define an interface for accessing data. Context delegates to the strategy instead of implementing multiple algorithm variants."
    },
    {
      "heading": "Strategy vs State Pattern",
      "text": "Strategy: algorithms are independent and interchangeable. State: behavior changes based on internal state. Strategy: client selects and sets the strategy. State: transitions between states are managed internally. Both use composition, but with different intents."
    },
    {
      "heading": "Strategy in Functional Programming",
      "text": "In functional languages, strategies can be functions instead of objects. JavaScript supports passing functions as strategies directly. Example: sort algorithms are strategies — Array.sort() accepts a comparison function. This is simpler than defining full strategy classes."
    },
    {
      "heading": "Strategy Benefits and Drawbacks",
      "text": "Benefits: open/closed principle, eliminates conditionals, composition over inheritance, runtime algorithm switching. Drawbacks: increases number of objects, clients must understand strategy differences, over-engineering for simple cases."
    }
  ],
  "interviewAnswer": "Strategy pattern encapsulates interchangeable algorithms behind a common interface. Context delegates to a strategy, eliminating large conditionals. Use when you have multiple algorithms for the same task. In JavaScript, functions can serve as lightweight strategies.",
  "interviewQuestions": [
    {
      "question": "What is the Strategy pattern?",
      "answer": "Defines a family of interchangeable algorithms, encapsulated behind a common interface."
    },
    {
      "question": "What are the key components?",
      "answer": "Context (uses the strategy), Strategy interface, ConcreteStrategy implementations."
    },
    {
      "question": "What problem does Strategy solve?",
      "answer": "Large conditional statements (if/else chains) for selecting behavior."
    },
    {
      "question": "How is Strategy different from State?",
      "answer": "Strategy: algorithms are independent, client selects. State: behavior based on internal state transitions."
    },
    {
      "question": "How does Strategy support OCP?",
      "answer": "Add new strategies without changing the context — open for extension, closed for modification."
    },
    {
      "question": "Can JavaScript functions be strategies?",
      "answer": "Yes. Passing functions as arguments is a lightweight Strategy pattern."
    },
    {
      "question": "What is an example of Strategy?",
      "answer": "Array.sort(compareFn) — the comparison function is a strategy for ordering."
    },
    {
      "question": "What is the downside of Strategy?",
      "answer": "Increases the number of classes/objects. Clients must understand strategy differences."
    },
    {
      "question": "What principle does Strategy use?",
      "answer": "Favor composition over inheritance — the context composes a strategy rather than inheriting behavior."
    },
    {
      "question": "How do you implement Strategy in TypeScript?",
      "answer": "Define a Strategy interface, implement concrete classes, inject into Context."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Strategy Pattern</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Context</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Uses strategy</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Strategy IF</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interface</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Strategy A</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Algorithm 1</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Strategy B</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Algorithm 2</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Strategy Pattern</text><text x=\"275\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Context -> Strategy Interface <- Concrete</text><text x=\"275\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Strategies. Interchangeable algorithms. </text><text x=\"275\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No conditionals.</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Strategy: Encapsulate interchangeable algorithms. </text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Eliminate conditionals. OCP compliant.</text></svg>",
  "codeExamples": [
    {
      "title": "Strategy Pattern (Classic)",
      "useCase": "Interchangeable compression.",
      "code": "class CompressionStrategy {\n  compress(data) { throw new Error(\"Abstract\"); }\n}\nclass ZipCompression extends CompressionStrategy {\n  compress(data) { console.log(\"ZIP compressing...\"); return data; }\n}\nclass GzipCompression extends CompressionStrategy {\n  compress(data) { console.log(\"GZIP compressing...\"); return data; }\n}\nclass RarCompression extends CompressionStrategy {\n  compress(data) { console.log(\"RAR compressing...\"); return data; }\n}\nclass Compressor {\n  constructor(strategy) { this.strategy = strategy; }\n  compress(data) { return this.strategy.compress(data); }\n  setStrategy(strategy) { this.strategy = strategy; }\n}\nconst compressor = new Compressor(new ZipCompression());\ncompressor.compress(\"my data\");\ncompressor.setStrategy(new GzipCompression());\ncompressor.compress(\"my data\");",
      "description": "Strategy: interchangeable compression algorithms. Context delegates to the selected strategy."
    },
    {
      "title": "Strategy with Functions (JS)",
      "useCase": "Lightweight functional strategy.",
      "code": "// Strategies are just functions\nconst zipCompress = (data) => {\n  console.log(\"ZIP compressing...\");\n  return data;\n};\nconst gzipCompress = (data) => {\n  console.log(\"GZIP compressing...\");\n  return data;\n};\n\n// Context accepts strategy function\nfunction compressData(data, strategy) {\n  return strategy(data);\n}\n\n// Use different strategies\ncompressData(\"hello\", zipCompress);\ncompressData(\"hello\", gzipCompress);\n\n// Array.sort uses strategy pattern!\n[3,1,2].sort((a,b) => a - b); // ascending",
      "description": "JavaScript functions make lightweight strategies — just pass a function to the context."
    },
    {
      "title": "Strategy for Validation",
      "useCase": "Different validation rules.",
      "code": "const validators = {\n  required: (value) => value ? null : \"Required\",\n  email: (value) => /^[^s@]+@[^s@]+.[^s@]+$/.test(value) ? null : \"Invalid email\",\n  minLength: (min) => (value) =>\n    value.length >= min ? null : `Min ${min} chars`,\n  maxLength: (max) => (value) =>\n    value.length <= max ? null : `Max ${max} chars`,\n};\n\nfunction validate(value, rules) {\n  for (const rule of rules) {\n    const error = rule(value);\n    if (error) return error;\n  }\n  return null;\n}\n\nvalidate(\"alice@test.com\", [\n  validators.required,\n  validators.email,\n  validators.minLength(5),\n]);",
      "description": "Strategy validation: different validation rules as functions. Compose them flexibly."
    },
    {
      "title": "Strategy with TypeScript",
      "useCase": "Type-safe strategies.",
      "code": "interface SortStrategy {\n  sort<T>(data: T[]): T[];\n}\n\nclass BubbleSort implements SortStrategy {\n  sort<T>(data: T[]): T[] {\n    console.log(\"Bubble sort\");\n    return [...data].sort();\n  }\n}\nclass QuickSort implements SortStrategy {\n  sort<T>(data: T[]): T[] {\n    console.log(\"Quick sort\");\n    return [...data].sort();\n  }\n}\n\nclass Sorter {\n  constructor(private strategy: SortStrategy) {}\n  sort<T>(data: T[]): T[] { return this.strategy.sort(data); }\n  setStrategy(strategy: SortStrategy) { this.strategy = strategy; }\n}\n\nconst sorter = new Sorter(new QuickSort());\nsorter.sort([3,1,2]);",
      "description": "TypeScript Strategy with generic interface for type-safe interchangeable algorithms."
    },
    {
      "title": "Strategy in Express Middleware",
      "useCase": "Auth strategies.",
      "code": "class AuthStrategy {\n  authenticate(req) { throw new Error(\"Abstract\"); }\n}\nclass JWTAuthStrategy extends AuthStrategy {\n  authenticate(req) {\n    const token = req.headers.authorization?.split(\" \")[1];\n    if (!token) throw new Error(\"No token\");\n    return jwt.verify(token, process.env.JWT_SECRET);\n  }\n}\nclass SessionAuthStrategy extends AuthStrategy {\n  authenticate(req) {\n    if (!req.session?.userId) throw new Error(\"Not logged in\");\n    return { id: req.session.userId, role: req.session.role };\n  }\n}\nfunction authenticate(strategy) {\n  return (req, res, next) => {\n    try {\n      req.user = strategy.authenticate(req);\n      next();\n    } catch (err) {\n      res.status(401).json({ error: err.message });\n    }\n  };\n}",
      "description": "Strategy for authentication: different auth methods (JWT, session, API key) as interchangeable strategies."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What problem does Strategy solve?",
      "options": [
        "Memory leaks",
        "Large conditional statements",
        "Database connections",
        "UI rendering"
      ],
      "answer": 1,
      "explanation": "Strategy eliminates large conditional statements by encapsulating algorithms."
    },
    {
      "question": "What are the key components?",
      "options": [
        "Subject and Observer",
        "Context, Strategy interface, Concrete Strategies",
        "Factory and Product",
        "Singleton and Instance"
      ],
      "answer": 1,
      "explanation": "Strategy has Context, Strategy interface, and Concrete Strategy implementations."
    },
    {
      "question": "Can JavaScript functions serve as strategies?",
      "options": [
        "No",
        "Yes, functions as lightweight strategies",
        "Only with TypeScript",
        "Only with classes"
      ],
      "answer": 1,
      "explanation": "JavaScript functions can serve as lightweight strategies passed to context functions."
    },
    {
      "question": "What principle does Strategy follow?",
      "options": [
        "Singleton pattern",
        "Open-Closed Principle",
        "Don't repeat yourself",
        "Law of Demeter"
      ],
      "answer": 1,
      "explanation": "Strategy follows OCP: add new algorithms without changing the context."
    },
    {
      "question": "What is the difference from State pattern?",
      "options": [
        "No difference",
        "Strategy: client picks algorithm. State: internal state transitions",
        "Strategy is faster",
        "State is simpler"
      ],
      "answer": 1,
      "explanation": "Strategy: client selects algorithm. State: behavior changes based on internal state transitions."
    },
    {
      "question": "Which built-in JS function uses Strategy?",
      "options": [
        "JSON.parse",
        "Array.sort",
        "Math.random",
        "String.trim"
      ],
      "answer": 1,
      "explanation": "Array.sort(compareFn) uses the Strategy pattern — compareFn is the strategy."
    }
  ]
};
