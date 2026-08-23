export const oop_factory = {
  "id": "oop-factory",
  "title": "Factory Pattern",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "The Factory pattern provides an interface for creating objects without specifying their concrete classes to the caller.",
    "Simple Factory: a single function/class that creates objects based on input. Factory Method: subclasses decide which class to instantiate.",
    "Abstract Factory: creates families of related objects without specifying concrete classes.",
    "Factories encapsulate object creation logic, making code more flexible and decoupled."
  ],
  "laymanDefinition": "Factory is like a pizza shop. You say \"I want a pepperoni pizza\" (request). You do not need to know how to make the dough, spread sauce, add cheese, or operate the oven. The pizza chef (factory) handles all the creation details and hands you a finished pizza (object).",
  "deepDive": [
    {
      "heading": "Simple Factory",
      "text": "A single class/function with a create() method that returns different object types based on input. Not a true GoF pattern, but widely used. Example: createPayment(type) returns CreditCard, PayPal, or Crypto processor. Centralizes creation logic in one place."
    },
    {
      "heading": "Factory Method Pattern",
      "text": "Define an interface for creating an object, but let subclasses decide which class to instantiate. The parent class defines the factory method; subclasses override it to create specific products. Example: Dialog class has createButton() factory method — WindowsDialog returns WindowsButton, WebDialog returns HTMLButton."
    },
    {
      "heading": "Abstract Factory Pattern",
      "text": "Provides an interface for creating families of related or dependent objects. Example: GUIFactory interface with createButton(), createCheckbox(), createMenu(). WindowsFactory creates Windows-style objects; MacFactory creates Mac-style objects. Ensures consistency across a product family."
    },
    {
      "heading": "Factory vs Direct Instantiation",
      "text": "Factory: decouples client from concrete classes. Centralizes creation logic and validation. Enables swapping implementations. Can return cached/reused instances. Direct: simple, transparent, no indirection. Use factories when creation logic is complex or likely to change."
    },
    {
      "heading": "Factory in JavaScript/TypeScript",
      "text": "JavaScript: factory functions are natural — just return an object from a function. TypeScript: factories can leverage generics for type safety. Common pattern: configuration object determines what to create, factory returns correct implementation."
    }
  ],
  "interviewAnswer": "Factory patterns encapsulate object creation. Simple Factory: centralize creation logic. Factory Method: let subclasses decide what to create. Abstract Factory: create families of related objects. Factories decouple client code from concrete implementations, improving flexibility.",
  "interviewQuestions": [
    {
      "question": "What is the Factory pattern?",
      "answer": "Provides an interface for creating objects without specifying their concrete classes."
    },
    {
      "question": "What is a Simple Factory?",
      "answer": "A single function/class that creates different object types based on input parameters."
    },
    {
      "question": "What is the Factory Method pattern?",
      "answer": "Subclasses override a factory method to decide which concrete class to instantiate."
    },
    {
      "question": "What is the Abstract Factory pattern?",
      "answer": "Creates families of related objects through a common interface."
    },
    {
      "question": "What problem does Factory solve?",
      "answer": "Decouples client code from concrete implementations. Centralizes complex creation logic."
    },
    {
      "question": "What is the difference between Factory Method and Abstract Factory?",
      "answer": "Factory Method: one product, via inheritance. Abstract Factory: product families, via composition."
    },
    {
      "question": "How is a factory different from direct instantiation?",
      "answer": "Factory adds indirection and flexibility. Direct is simpler but more coupled."
    },
    {
      "question": "What is a factory function in JavaScript?",
      "answer": "A regular function that creates and returns objects. No new keyword needed."
    },
    {
      "question": "When should you use a factory?",
      "answer": "When creation logic is complex, likely to change, or you want to decouple clients from implementations."
    },
    {
      "question": "Is Factory a creational pattern?",
      "answer": "Yes. It is one of the five GoF creational patterns (Singleton, Factory, Abstract Factory, Builder, Prototype)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Factory Pattern</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Request object</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Factory</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Creates object</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Product A</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Concrete</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Product B</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Concrete</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Factory Pattern</text><text x=\"275\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Client -> Factory -> Product. Decouples c</text><text x=\"275\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">reation. Simple Factory, Factory Method, </text><text x=\"275\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Abstract Factory.</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Factory: Encapsulate object creation. Decouple cli</text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ent code from concrete implementations.</text></svg>",
  "codeExamples": [
    {
      "title": "Simple Factory (JavaScript)",
      "useCase": "Centralized object creation.",
      "code": "class PaymentFactory {\n  static create(type) {\n    switch(type) {\n      case \"credit\": return new CreditCardProcessor();\n      case \"paypal\": return new PayPalProcessor();\n      case \"crypto\": return new CryptoProcessor();\n      default: throw new Error(\"Unknown payment type\");\n    }\n  }\n}\n\nconst processor = PaymentFactory.create(\"paypal\");\nprocessor.process(100);",
      "description": "Simple Factory: centralized creation logic. Client does not know concrete classes."
    },
    {
      "title": "Factory Method Pattern",
      "useCase": "Subclasses decide creation.",
      "code": "class Dialog {\n  createButton() { throw new Error(\"Abstract\"); }\n  render() {\n    const button = this.createButton();\n    button.onClick(() => console.log(\"Clicked!\"));\n    button.render();\n  }\n}\nclass WindowsDialog extends Dialog {\n  createButton() { return new WindowsButton(); }\n}\nclass WebDialog extends Dialog {\n  createButton() { return new HTMLButton(); }\n}\nconst dialog = new WindowsDialog();\ndialog.render();",
      "description": "Factory Method: subclasses override createButton() to provide platform-specific buttons."
    },
    {
      "title": "Factory Function (JavaScript)",
      "useCase": "Simple JS factory.",
      "code": "function createUser(type, data) {\n  const base = {\n    id: Date.now(),\n    createdAt: new Date(),\n    ...data\n  };\n\n  switch(type) {\n    case \"admin\":\n      return { ...base, role: \"admin\", permissions: [\"all\"] };\n    case \"editor\":\n      return { ...base, role: \"editor\", permissions: [\"read\",\"write\"] };\n    case \"viewer\":\n      return { ...base, role: \"viewer\", permissions: [\"read\"] };\n    default:\n      throw new Error(\"Unknown user type\");\n  }\n}\nconst admin = createUser(\"admin\", { name: \"Alice\", email: \"alice@test.com\" });",
      "description": "Factory functions are JavaScript\\'s natural factory pattern — simple, flexible, no classes needed."
    },
    {
      "title": "Abstract Factory (TypeScript)",
      "useCase": "Product families.",
      "code": "interface GUIFactory {\n  createButton(): Button;\n  createCheckbox(): Checkbox;\n}\nclass WindowsFactory implements GUIFactory {\n  createButton() { return new WindowsButton(); }\n  createCheckbox() { return new WindowsCheckbox(); }\n}\nclass MacFactory implements GUIFactory {\n  createButton() { return new MacButton(); }\n  createCheckbox() { return new MacCheckbox(); }\n}\nfunction createUI(factory: GUIFactory) {\n  const btn = factory.createButton();\n  const cb = factory.createCheckbox();\n  // btn and cb are from the same \"family\"\n}",
      "description": "Abstract Factory: ensures UI components from the same family (Windows or Mac) are consistent."
    },
    {
      "title": "Factory with Registry",
      "useCase": "Dynamic factory with registration.",
      "code": "const loggerRegistry = {};\nfunction registerLogger(type, cls) {\n  loggerRegistry[type] = cls;\n}\nfunction createLogger(type, config) {\n  const LoggerClass = loggerRegistry[type];\n  if (!LoggerClass) throw new Error(\"Unknown logger\");\n  return new LoggerClass(config);\n}\nregisterLogger(\"console\", ConsoleLogger);\nregisterLogger(\"file\", FileLogger);\nconst logger = createLogger(\"console\", { level: \"info\" });",
      "description": "Factory with registry: loggers register themselves, factory creates instances dynamically."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What problem does Factory solve?",
      "options": [
        "Object destruction",
        "Tight coupling between client and concrete classes",
        "Memory management",
        "Thread synchronization"
      ],
      "answer": 1,
      "explanation": "Factory decouples client code from concrete implementations."
    },
    {
      "question": "What is Factory Method?",
      "options": [
        "A static method that creates objects",
        "Subclasses decide which class to instantiate",
        "A function that returns singletons",
        "A method that destroys objects"
      ],
      "answer": 1,
      "explanation": "Factory Method lets subclasses decide which class to instantiate."
    },
    {
      "question": "What is Abstract Factory?",
      "options": [
        "Creates one product",
        "Creates families of related products",
        "Creates singletons",
        "Creates adapters"
      ],
      "answer": 1,
      "explanation": "Abstract Factory creates families of related objects ensuring consistency."
    },
    {
      "question": "Is Simple Factory a GoF pattern?",
      "options": [
        "Yes, it is one of the 23",
        "No, it is a commonly used idiom but not in GoF",
        "Yes, it is behavioral",
        "It is an architectural pattern"
      ],
      "answer": 1,
      "explanation": "Simple Factory is widely used but is NOT one of the 23 GoF patterns."
    },
    {
      "question": "What is a factory function?",
      "options": [
        "A class with static methods",
        "A function that creates and returns objects",
        "A constructor",
        "A destructor"
      ],
      "answer": 1,
      "explanation": "A factory function is a regular function that creates and returns objects."
    },
    {
      "question": "Factory is a ___ pattern.",
      "options": [
        "Creational",
        "Structural",
        "Behavioral",
        "Architectural"
      ],
      "answer": 0,
      "explanation": "Factory is a creational design pattern."
    }
  ]
};
