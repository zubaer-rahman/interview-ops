export const oop_interface_segregation = {
  "id": "oop-interface-segregation",
  "title": "Interface Segregation",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "The Interface Segregation Principle (ISP) states that no client should be forced to depend on methods it does not use.",
    "Large, \"fat\" interfaces should be split into smaller, more specific ones.",
    "ISP leads to more decoupled, easier-to-understand systems.",
    "ISP is closely related to SRP: SRP applies to classes, ISP applies to interfaces."
  ],
  "laymanDefinition": "ISP is like a Swiss Army knife versus individual tools. A Swiss Army knife (fat interface) forces you to carry tools you never use. If you only need a screwdriver, you want just a screwdriver (thin interface). You should not depend on the knife, scissors, and corkscrew you will never use.",
  "deepDive": [
    {
      "heading": "Fat Interfaces (The Problem)",
      "text": "An interface with many methods that serve different clients. Example: MultiFunctionDevice with print(), scan(), fax(), staple(), bind(). A SimplePrinter must implement all methods even though it only prints. This is a code smell."
    },
    {
      "heading": "Splitting Interfaces",
      "text": "Identify groups of related methods that serve different client types. Split the fat interface into focused interfaces. Example: MultiFunctionDevice -> Printer { print() }, Scanner { scan() }, Fax { fax() }. Each client depends only on what it needs."
    },
    {
      "heading": "ISP and Adapter Pattern",
      "text": "When working with third-party libraries or legacy code with fat interfaces, use the Adapter pattern to present a segregated interface to your clients. The adapter implements only the methods your code needs."
    },
    {
      "heading": "ISP in JavaScript/TypeScript",
      "text": "TypeScript interfaces are compile-time contracts — classes are not forced to implement all methods if they do not use explicit implements clause. In plain JavaScript, duck typing naturally supports ISP."
    },
    {
      "heading": "Signs You Need ISP",
      "text": "Classes with many unused method implementations (throw or empty). Interfaces with \"optional\" methods. Clients that accept a large interface but only use a few methods. Frequent interface changes that break many unrelated classes."
    }
  ],
  "interviewAnswer": "ISP: small, focused interfaces over fat, general-purpose ones. Classes should not implement methods they do not use. Split interfaces by client needs. Use Adapter pattern to segregate legacy interfaces.",
  "interviewQuestions": [
    {
      "question": "What is the Interface Segregation Principle?",
      "answer": "Clients should not be forced to depend on interfaces they do not use."
    },
    {
      "question": "What is a fat interface?",
      "answer": "An interface with many methods that serve different, unrelated clients."
    },
    {
      "question": "How do you apply ISP?",
      "answer": "Split large interfaces into smaller, focused ones grouped by client need."
    },
    {
      "question": "What is an ISP violation code smell?",
      "answer": "A class throwing UnsupportedOperationException for interface methods."
    },
    {
      "question": "How does ISP relate to SRP?",
      "answer": "SRP = single responsibility for classes. ISP = single responsibility for interfaces."
    },
    {
      "question": "What is the Adapter pattern\\'s role in ISP?",
      "answer": "Adapter presents a segregated (thin) interface to clients, hiding the fat interface."
    },
    {
      "question": "How does JavaScript duck typing relate to ISP?",
      "answer": "Duck typing naturally supports ISP: clients call only methods they need."
    },
    {
      "question": "What is the benefit of ISP?",
      "answer": "Reduced coupling, easier to understand, changes affect only relevant clients."
    },
    {
      "question": "What question helps apply ISP?",
      "answer": "\"Does this client need all these methods, or just a subset?\""
    },
    {
      "question": "What happens when you violate ISP?",
      "answer": "Changes to one part of an interface break unrelated classes, reducing maintainability."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Interface Segregation</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fat Interface</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Too many methods</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Printer</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">print() only</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Scanner</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">scan() only</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fax</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fax() only</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Small IFs</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Focused contracts</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Interface Segregation</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Small, focused interfaces. Clients depend</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> only on methods they use. Avoid fat inte</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rfaces.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ISP: Split large interfaces into smaller, specific</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> ones. No client should depend on methods it does </text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">not use.</text></svg>",
  "codeExamples": [
    {
      "title": "Fat Interface (ISP Violation)",
      "useCase": "Too many responsibilities.",
      "code": "class Machine {\n  print(doc) {}\n  scan(doc) {}\n  fax(doc) {}\n  staple(doc) {}\n  bind(doc) {}\n  copy(doc) {}\n}\nclass SimplePrinter extends Machine {\n  print(doc) { /* works */ }\n  scan(doc) { throw new Error(\"Not supported\"); }\n  fax(doc) { throw new Error(\"Not supported\"); }\n  staple(doc) { /* empty */ }\n  bind(doc) { /* empty */ }\n  copy(doc) { throw new Error(\"Not supported\"); }\n}",
      "description": "Fat interface forces classes to implement methods they do not need — ISP violation."
    },
    {
      "title": "Segregated Interfaces (ISP Compliant)",
      "useCase": "Split by capability.",
      "code": "class Printer { print(doc) { throw new Error(\"Abstract\"); } }\nclass Scanner { scan() { throw new Error(\"Abstract\"); } }\nclass Fax { fax(doc) { throw new Error(\"Abstract\"); } }\nclass SimplePrinter extends Printer {\n  print(doc) { console.log(\"Printing:\", doc); }\n}\nclass MultiFunctionPrinter extends Printer {\n  print(doc) { console.log(\"Printing:\", doc); }\n}",
      "description": "ISP: split interfaces. Each class implements only the interfaces relevant to its capabilities."
    },
    {
      "title": "ISP in TypeScript",
      "useCase": "Interface segregation.",
      "code": "interface Coder { code(): void; }\ninterface Designer { design(): void; }\ninterface Tester { test(): void; }\ninterface Manager { manage(): void; }\nclass Developer implements Coder, Tester {\n  code() { /* code */ }\n  test() { /* test own code */ }\n}\nclass DesignerImpl implements Designer {\n  design() { /* design only */ }\n}",
      "description": "TypeScript ISP: classes implement only the interfaces they need."
    },
    {
      "title": "ISP with Adapter Pattern",
      "useCase": "Adapting fat interfaces.",
      "code": "class ThirdPartyEmailService {\n  sendEmail(to,sub,body) {}\n  sendBulk(recipients) {}\n  trackOpens(id) {}\n  generateReport() {}\n  manageTemplates() {}\n}\nclass EmailSender { send(to,sub,body) { throw new Error(\"Abstract\"); } }\nclass MyEmailAdapter extends EmailSender {\n  constructor() { super(); this.service = new ThirdPartyEmailService(); }\n  send(to,sub,body) { this.service.sendEmail(to,sub,body); }\n}",
      "description": "Adapter pattern presents a segregated interface, hiding the fat third-party interface."
    },
    {
      "title": "Detecting ISP Violations",
      "useCase": "Code smells and refactoring.",
      "code": "// Smell: Optional interface methods\ninterface ReportGenerator {\n  generate(): string;\n  exportToPDF?(): Buffer;\n  sendEmail?(): void;\n}\n// Smell: Boolean parameter (method does too much)\ninterface DataService {\n  getData(id: string, includeHistory: boolean): Data;\n}\n// Fix: depend on focused interface\nclass UserService {\n  constructor(private users: UserRepository) {}\n}",
      "description": "Detect ISP violations: optional methods, boolean flags, unused dependencies."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does ISP stand for?",
      "options": [
        "Interface Segregation Principle",
        "Internal Service Protocol",
        "Inheritance Strategy Pattern",
        "Integration Security Policy"
      ],
      "answer": 0,
      "explanation": "ISP = Interface Segregation Principle."
    },
    {
      "question": "What is a fat interface?",
      "options": [
        "An interface with many unrelated methods",
        "A large class",
        "An interface with no methods",
        "An interface with one method"
      ],
      "answer": 0,
      "explanation": "A fat interface has many methods serving different clients."
    },
    {
      "question": "What is an ISP violation smell?",
      "options": [
        "Throwing UnsupportedOperationException",
        "Small interfaces",
        "Single method classes",
        "Abstract classes"
      ],
      "answer": 0,
      "explanation": "If a class must throw for some interface methods, the interface is too fat."
    },
    {
      "question": "How is ISP related to SRP?",
      "options": [
        "They are unrelated",
        "ISP = SRP for interfaces",
        "ISP is opposite of SRP",
        "ISP replaces SRP"
      ],
      "answer": 1,
      "explanation": "SRP applies to classes. ISP applies to interfaces."
    },
    {
      "question": "What pattern helps with legacy fat interfaces?",
      "options": [
        "Singleton",
        "Adapter",
        "Factory",
        "Observer"
      ],
      "answer": 1,
      "explanation": "The Adapter pattern presents a thin, segregated interface over a fat legacy one."
    },
    {
      "question": "Does JavaScript naturally support ISP?",
      "options": [
        "No",
        "Yes — duck typing supports segregation",
        "Only with classes",
        "Only with inheritance"
      ],
      "answer": 1,
      "explanation": "JavaScript duck typing naturally supports ISP (call only methods you need)."
    }
  ]
};
