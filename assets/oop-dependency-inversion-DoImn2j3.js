const e={id:"oop-dependency-inversion",title:"Dependency Inversion",difficulty:"advanced",estimatedMinutes:15,tldr:["The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. Both should depend on abstractions.","Abstractions should not depend on details; details should depend on abstractions.","DIP decouples the policy/strategy layer from implementation details, making the system more flexible and testable.","Achieved through dependency injection: dependencies are provided (injected) rather than created internally."],laymanDefinition:"DIP is like ordering food at a restaurant. You (high-level) do not depend on the specific kitchen (low-level). You depend on the menu (abstraction). The kitchen depends on the menu to know what to cook. You can change the kitchen as long as they honor the menu.",deepDive:[{heading:"Dependency Injection (DI)",text:"The primary mechanism for DIP. Instead of a class creating its dependencies (new ConcreteService()), dependencies are passed to it via constructor, setter, or method parameter. DI containers (Inversify, NestJS) automate this wiring."},{heading:"Control Flow vs Dependency Flow",text:"Control flow: high-level calls low-level (traditional). Dependency flow: high-level defines an abstraction, low-level implements it — both depend on the abstraction. This inverts the dependency direction."},{heading:"Concrete Dependency (The Problem)",text:"When a high-level class directly instantiates a low-level class (new MySQLDatabase()), it is tightly coupled. Changing the database requires modifying the high-level class. Testing is hard without mocking."},{heading:"Abstraction Ownership",text:'In DIP, abstractions (interfaces) are owned by the high-level module, not the low-level module. The high-level defines "what I need" (an interface), and low-level implementations fulfill that need.'},{heading:"DIP and Testing",text:"DIP enables unit testing through mocking. If a class depends on an abstraction (Database interface), you can inject a mock/fake database in tests. Without DIP, testing requires a real database."}],interviewAnswer:"DIP: depend on abstractions, not concretions. High-level modules define interfaces; low-level modules implement them. Use dependency injection to provide dependencies. DIP enables loose coupling, testability, and flexibility.",interviewQuestions:[{question:"What is the Dependency Inversion Principle?",answer:"High-level modules should not depend on low-level modules. Both should depend on abstractions."},{question:"What is dependency injection?",answer:"Supplying dependencies to a class from outside rather than creating them internally."},{question:"What is the problem with new ConcreteService()?",answer:"Tight coupling — changing the implementation requires modifying the class. Hard to test/mock."},{question:"Who owns the abstraction in DIP?",answer:"The high-level module owns the abstraction. The low-level module implements it."},{question:"How does DIP improve testing?",answer:"Dependencies are abstractions — you can inject mocks/stubs/fakes in tests."},{question:"What is inverted in DIP?",answer:"The dependency direction. High-level does not depend on low-level; both depend on abstractions."},{question:"What is a DI container?",answer:"A framework that automatically resolves and injects dependencies (Inversify, NestJS, Awilix)."},{question:"What is the difference between DIP and DI?",answer:"DIP is the principle. DI is the mechanism to achieve it."},{question:"What is constructor injection?",answer:"Dependencies are passed as constructor parameters and stored as private fields."},{question:"What is the benefit of DIP?",answer:"Loose coupling, testability, flexibility to swap implementations, better modularity."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Dependency Inversion</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">High-Level</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Defines abstraction</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Abstraction</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Interface</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Low-Level A</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Implements</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Low-Level B</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Implements</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="100" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Dependency Inversion</text><text x="275" y="118" text-anchor="middle" font-size="9" fill="#ddd">High-level -> Abstraction <- Low-level. D</text><text x="275" y="129" text-anchor="middle" font-size="9" fill="#ddd">epend on abstractions, not concretions.</text><text x="240" y="185" font-size="9" fill="#666" text-anchor="middle">DIP: High-level modules define abstractions. Low-l</text><text x="240" y="197" font-size="9" fill="#666" text-anchor="middle">evel modules implement them. Depend on abstraction</text><text x="240" y="209" font-size="9" fill="#666" text-anchor="middle">s.</text></svg>',codeExamples:[{title:"DIP Violation: Tight Coupling",useCase:"High-level depends on low-level.",code:`class UserService {
  constructor() {
    this.db = new MySQLDatabase(); // hard-coded!
  }
  async getUsers() {
    return this.db.query("SELECT * FROM users");
  }
}
// Problems: Cannot switch DB, hard to test, not reusable`,description:"DIP violation: UserService directly creates MySQLDatabase, creating tight coupling."},{title:"DIP Compliant: Dependency Injection",useCase:"Both depend on abstraction.",code:`class Database { query(sql) { throw new Error("Abstract"); } }
class MySQLDatabase extends Database {
  query(sql) { console.log("MySQL:", sql); return [{id:1,name:"Alice"}]; }
}
class PostgresDatabase extends Database {
  query(sql) { console.log("Postgres:", sql); return [{id:1,name:"Alice"}]; }
}
class UserService {
  constructor(db) { this.db = db; }
  async getUsers() { return this.db.query("SELECT * FROM users"); }
}
const service = new UserService(new PostgresDatabase());`,description:"DIP: both depend on Database abstraction. UserService receives its dependency via constructor."},{title:"Constructor Injection",useCase:"Most common DI pattern.",code:`class OrderService {
  constructor(paymentProcessor, emailService, logger) {
    this.paymentProcessor = paymentProcessor;
    this.emailService = emailService;
    this.logger = logger;
  }

  async placeOrder(order) {
    this.logger.log("Processing order");
    const result = await this.paymentProcessor.charge(order.total);
    await this.emailService.sendConfirmation(order);
    return result;
  }
}`,description:"Constructor injection makes dependencies explicit and allows easy replacement for testing."},{title:"Testing with Mocks (DIP Benefit)",useCase:"Unit testing with DIP.",code:`class MockDatabase extends Database {
  async query(sql) {
    return [{ id: 1, name: "Test User" }];
  }
}

// Test without real database!
const service = new UserService(new MockDatabase());
const users = await service.getUsers();
console.assert(users.length === 1);
console.assert(users[0].name === "Test User");`,description:"DIP enables mocking. Test UserService with MockDatabase instead of a real database."},{title:"DI Container (NestJS style)",useCase:"Automated dependency injection.",code:`// InversifyJS example
import { injectable, inject, Container } from "inversify";

@injectable()
class UserService {
  constructor(@inject("Database") private db: Database) {}
  async getUsers() { return this.db.query("SELECT * FROM users"); }
}

const container = new Container();
container.bind("Database").to(PostgresDatabase);
container.bind(UserService).toSelf();

const service = container.get(UserService);`,description:"DI containers automate the wiring of dependencies, managing lifetimes and resolution."}],mcqQuestions:[{question:"What is the Dependency Inversion Principle?",options:["Use only low-level modules","High-level should not depend on low-level; both depend on abstractions","Depend on concrete classes","Avoid abstractions"],answer:1,explanation:"DIP: high-level should not depend on low-level; both depend on abstractions."},{question:"What is dependency injection?",options:["Creating dependencies inside a class","Passing dependencies from outside","Deleting dependencies","Ignoring dependencies"],answer:1,explanation:"Dependency injection supplies dependencies from outside rather than creating them internally."},{question:"What is the problem with tight coupling?",options:["Faster code","Hard to change and test","Better performance","Smaller files"],answer:1,explanation:"Tight coupling makes code hard to change, test, and maintain."},{question:"Who owns the abstraction in DIP?",options:["The low-level module","The high-level module","A third party","The database"],answer:1,explanation:"The high-level module owns the abstraction. The low-level implements it."},{question:"How does DIP improve testing?",options:["It does not","Enables mocking by depending on abstractions","Makes tests slower","Requires more setup"],answer:1,explanation:"DIP enables mocking — inject mock implementations of abstractions in tests."},{question:"What is the difference between DIP and DI?",options:["They are the same","DIP is the principle, DI is the mechanism","DI is the principle, DIP is the mechanism","Unrelated"],answer:1,explanation:"DIP is the design principle. DI is the mechanism to achieve it."}]};export{e as oop_dependency_inversion};
