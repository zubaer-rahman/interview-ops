export const oop_abstraction = {
  "id": "oop-abstraction",
  "title": "Abstraction",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Abstraction is the concept of hiding complex implementation details and showing only the essential features of an object.",
    "It reduces complexity by allowing developers to think at a higher conceptual level rather than worrying about implementation details.",
    "In OOP, abstraction is achieved through abstract classes, interfaces, and well-designed public APIs.",
    "Abstraction is different from encapsulation: abstraction hides complexity (what it does), encapsulation hides data (how it works)."
  ],
  "laymanDefinition": "Abstraction is like driving a car. You interact with the steering wheel, pedals, and gear shift (simple interface). You do not need to understand the engine, transmission, fuel injection, or exhaust system to drive. The car abstracts away all that complexity behind a simple, intuitive interface.",
  "deepDive": [
    {
      "heading": "Abstract Classes",
      "text": "Classes that cannot be instantiated directly — they serve as base classes. Define abstract methods (no implementation) that subclasses must implement. Can also have concrete methods with full implementation. Provides a template: \"you must implement these methods, and you get these for free.\" TypeScript supports abstract classes with the abstract keyword."
    },
    {
      "heading": "Interfaces",
      "text": "Define a contract specifying what methods and properties a class must have. No implementation — only signatures. A class can implement multiple interfaces (unlike class inheritance which is single). TypeScript interfaces define structure; they are a compile-time concept that does not exist at runtime."
    },
    {
      "heading": "Interface Segregation",
      "text": "Related to the Interface Segregation Principle (ISP): clients should not be forced to depend on interfaces they do not use. Better to have many small, specific interfaces than one large, general-purpose interface. Example: Printer interface vs Scanner interface vs Fax interface, instead of a single MultiFunctionDevice interface."
    },
    {
      "heading": "Abstract vs Interface",
      "text": "Abstract class: can have implementation, can have constructor, single inheritance, \"is-a\" relationship. Interface: no implementation (except default methods), no constructor, multiple inheritance, \"can-do\" relationship. In JavaScript, there is no built-in abstract/interface — use patterns or TypeScript."
    },
    {
      "heading": "Abstraction in Design",
      "text": "Good abstraction is about finding the right level of detail. Too much abstraction: over-engineering, unnecessary complexity. Too little abstraction: code is hard to understand and maintain. The goal is to expose only what is necessary and hide everything else. A well-abstracted component is easy to use and hard to misuse."
    }
  ],
  "interviewAnswer": "Abstraction reduces complexity by hiding implementation details. Use abstract classes for shared base implementation (\"is-a\"). Use interfaces for capability contracts (\"can-do\"). Keep abstractions at the right level — not too much, not too little. A good abstraction is easy to use correctly and hard to use incorrectly.",
  "interviewQuestions": [
    {
      "question": "What is abstraction?",
      "answer": "Hiding complex implementation details and showing only essential features. Reduces complexity."
    },
    {
      "question": "What is an abstract class?",
      "answer": "A class that cannot be instantiated directly. May define abstract methods that subclasses must implement."
    },
    {
      "question": "What is an interface?",
      "answer": "A contract defining what methods/properties a class must have. No implementation (pure abstraction)."
    },
    {
      "question": "What is the difference between abstraction and encapsulation?",
      "answer": "Abstraction hides complexity (what it does). Encapsulation hides data (how it works)."
    },
    {
      "question": "Can an abstract class have concrete methods?",
      "answer": "Yes. Abstract classes can have both abstract (unimplemented) and concrete (implemented) methods."
    },
    {
      "question": "How many interfaces can a class implement?",
      "answer": "A class can implement multiple interfaces. This is TypeScript\\'s form of multiple inheritance."
    },
    {
      "question": "Why use abstraction?",
      "answer": "Reduce complexity, improve maintainability, enable polymorphism, hide implementation details."
    },
    {
      "question": "What is a well-abstracted API?",
      "answer": "One that is easy to use correctly and hard to use incorrectly. Exposes only what is necessary."
    },
    {
      "question": "Does JavaScript have built-in abstract classes?",
      "answer": "No. JavaScript does not have native abstract class support. TypeScript adds abstract keyword."
    },
    {
      "question": "What is the \"interface segregation\" principle?",
      "answer": "Small, specific interfaces are better than large, general-purpose ones."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Abstraction</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Abstract Class</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Template</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Interface</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Contract</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Concrete</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Implementation</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Code</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Uses abstraction</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Complexity</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hidden</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Abstraction</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hiding complexity. Abstract classes + int</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">erfaces. Essential features exposed, deta</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ils hidden.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Abstraction: Hide complexity, expose essentials. A</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">bstract classes and interfaces simplify interactio</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">n.</text></svg>",
  "codeExamples": [
    {
      "title": "Abstract Class (TypeScript)",
      "useCase": "Base class with abstract methods.",
      "code": "abstract class Database {\n  constructor(protected connectionString: string) {}\n  abstract connect(): Promise<void>;\n  abstract query(sql: string): Promise<any[]>;\n  abstract disconnect(): Promise<void>;\n\n  async executeTransaction(queries: string[]) {\n    await this.connect();\n    try {\n      const results = [];\n      for (const sql of queries) results.push(await this.query(sql));\n      return results;\n    } finally { await this.disconnect(); }\n  }\n}",
      "description": "Abstract class defines a template: abstract methods (must implement) + concrete methods (inherited)."
    },
    {
      "title": "Concrete Database Implementations",
      "useCase": "Subclasses providing implementation.",
      "code": "class PostgreSQLDatabase extends Database {\n  async connect() { console.log(\"Connected to PostgreSQL\"); }\n  async query(sql: string) { console.log(\"PG:\", sql); return [{id:1,name:\"test\"}]; }\n  async disconnect() { console.log(\"Disconnected from PostgreSQL\"); }\n}\n\nclass MySQLDatabase extends Database {\n  async connect() { console.log(\"Connected to MySQL\"); }\n  async query(sql: string) { console.log(\"MySQL:\", sql); return [{id:1,name:\"test\"}]; }\n  async disconnect() { console.log(\"Disconnected from MySQL\"); }\n}",
      "description": "Concrete subclasses implement abstract methods. User code works with the abstraction, not concrete types."
    },
    {
      "title": "Interface Contract (TypeScript)",
      "useCase": "Defining capability contracts.",
      "code": "interface Loggable { log(message: string): void; }\ninterface Serializable { serialize(): string; }\n\nclass User implements Loggable, Serializable {\n  constructor(private name: string, private email: string) {}\n  log(message: string) { console.log(\"[User]\", message); }\n  serialize() { return JSON.stringify({name:this.name,email:this.email}); }\n}",
      "description": "Interfaces define contracts. A class can implement multiple interfaces for flexible composition."
    },
    {
      "title": "Abstraction in JavaScript (Pattern)",
      "useCase": "Simulating abstraction.",
      "code": "class DataSource {\n  constructor() {\n    if (new.target === DataSource) throw new Error(\"Cannot instantiate abstract class\");\n  }\n  fetchData() { throw new Error(\"Abstract method: subclass must implement\"); }\n  async getData(transform = true) {\n    const raw = await this.fetchData();\n    return transform ? raw.map(i => ({...i, processed: true})) : raw;\n  }\n}\n\nclass APIDataSource extends DataSource {\n  async fetchData() {\n    const res = await fetch(\"https://api.example.com/data\");\n    return res.json();\n  }\n}",
      "description": "JavaScript pattern: throw in \"abstract\" methods, check new.target in constructor."
    },
    {
      "title": "Refactoring to Abstraction",
      "useCase": "Before and after example.",
      "code": "// BEFORE: Tight coupling\nclass ReportService {\n  generateReport() {\n    const db = new PostgreSQLDatabase();\n    const data = db.query(\"SELECT * FROM reports\");\n    return new PDFGenerator().generate(data);\n  }\n}\n\n// AFTER: Program to abstraction\nclass ReportService {\n  constructor(private database: Database, private formatter: ReportFormatter) {}\n  async generateReport() {\n    const data = await this.database.query(\"SELECT * FROM reports\");\n    return this.formatter.format(data);\n  }\n}",
      "description": "Abstraction enables loose coupling — swap implementations without changing consuming code."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does abstraction hide?",
      "options": [
        "Data",
        "Complexity and implementation details",
        "Methods",
        "Errors"
      ],
      "answer": 1,
      "explanation": "Abstraction hides complexity and implementation details."
    },
    {
      "question": "Difference between abstract class and interface?",
      "options": [
        "Abstract has impl; interface is contract",
        "They are the same",
        "Interface has implementation",
        "Abstract is concrete"
      ],
      "answer": 0,
      "explanation": "Abstract classes can have implementation. Interfaces are pure contracts in TypeScript."
    },
    {
      "question": "Can you instantiate an abstract class?",
      "options": [
        "Yes",
        "No",
        "With special syntax",
        "Depends on language"
      ],
      "answer": 1,
      "explanation": "Abstract classes cannot be instantiated directly."
    },
    {
      "question": "How many interfaces can a TypeScript class implement?",
      "options": [
        "One",
        "Two",
        "Multiple",
        "None"
      ],
      "answer": 2,
      "explanation": "A TypeScript class can implement multiple interfaces."
    },
    {
      "question": "Difference between abstraction and encapsulation?",
      "options": [
        "Abstraction hides complexity; encapsulation hides data",
        "They are identical",
        "Abstraction hides data; encapsulation hides complexity",
        "Neither hides anything"
      ],
      "answer": 0,
      "explanation": "Abstraction hides complexity (what it does). Encapsulation hides data (how it works)."
    },
    {
      "question": "What is the benefit of abstraction?",
      "options": [
        "Faster code",
        "Reduced complexity, easier maintenance",
        "More lines of code",
        "Better performance"
      ],
      "answer": 1,
      "explanation": "Abstraction reduces complexity, making code easier to understand and maintain."
    }
  ]
};
