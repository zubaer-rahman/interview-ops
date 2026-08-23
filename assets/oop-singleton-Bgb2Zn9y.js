const e={id:"oop-singleton",title:"Singleton Pattern",difficulty:"intermediate",estimatedMinutes:15,tldr:["The Singleton pattern ensures a class has only one instance and provides a global point of access to it.","Used for: logging, database connections, configuration managers, thread pools, caching.","Controversial pattern: critics call it a glorified global variable. It introduces global state and hidden dependencies.","Modern alternatives: dependency injection with scoped lifetimes, or module-level singletons (ES modules are singletons by nature)."],laymanDefinition:"Singleton is like having a single light switch for an entire building. No matter where you are, flipping that switch controls the same lights. There is only one switch panel (one instance), and everyone uses it (global access). But if someone breaks it, the whole building is affected (global state problem).",deepDive:[{heading:"Implementation Approaches",text:"Eager initialization: instance created at class load time. Lazy initialization: instance created on first access. Thread-safe lazy: double-checked locking for multi-threaded environments. ES module: module exports a single instance (natural singleton in JS)."},{heading:"Singleton in JavaScript",text:"JavaScript modules are singletons by default — a module is loaded once and cached. The simplest JS singleton: export const instance = new Class(). For classic pattern: check if instance exists in constructor, return existing if so. TypeScript: private constructor with static getInstance()."},{heading:"Singleton Use Cases (Good)",text:"Logging: single log file/stream writes sequentially. Configuration: app-wide config loaded once. Database connection pool: manage shared connections. Cache: centralized caching with consistent state. Hardware interface: single access point to physical device."},{heading:"Singleton Criticism",text:"Global state: hidden dependencies make testing difficult. Tight coupling: classes that use the singleton become coupled to it. Violates SRP: manages its own lifecycle and does its job. Hard to test: mocking static instances is difficult. Concurrency: can be a bottleneck."},{heading:"Alternatives to Singleton",text:"Dependency injection: configure a class as singleton-scoped in DI container (more testable). Module-level export: const instance = new Service() in ES module gives singleton behavior without pattern overhead. Factory: let a factory manage instance count."}],interviewAnswer:"Singleton ensures one instance globally. Simple to implement but controversial due to hidden global state. JavaScript modules are naturally singleton. For testability, prefer DI containers with singleton scope over the classic Singleton pattern.",interviewQuestions:[{question:"What is the Singleton pattern?",answer:"Ensures a class has only one instance and provides global access to it."},{question:"How do you implement Singleton in JavaScript?",answer:"Check if instance exists in constructor and return it, or use module-level export of a single instance."},{question:"What is eager initialization?",answer:"Instance created when the class is loaded, before any request for it."},{question:"What is lazy initialization?",answer:"Instance created only on the first access/request."},{question:"What are good Singleton use cases?",answer:"Logging, configuration, connection pools, caching, hardware interfaces."},{question:"What is the main criticism of Singleton?",answer:"It introduces global state, making code harder to test and reason about."},{question:"How do ES modules relate to Singleton?",answer:"ES modules are naturally singleton — they are loaded and cached once."},{question:"What is the alternative to Singleton?",answer:"DI containers with singleton scope — same behavior, more testable."},{question:"Does Singleton violate SRP?",answer:"Some argue yes: it manages its own lifecycle AND does its job."},{question:"How do you test code that uses a Singleton?",answer:"Harder because of global state. Use DI to inject the instance instead of direct singleton access."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Singleton Pattern</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">getInstance()</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Static method</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">One Instance</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Global</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Lazy Init</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">On first use</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Global State</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Testing problem</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DI Alternative</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Better testing</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Singleton Pattern</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">One instance, global access. Good: loggin</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">g, config, pools. Bad: hidden global stat</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">e, testing difficulty.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Singleton: Ensures one instance with global access</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">. Use sparingly — prefer DI with singleton scope.</text></svg>',codeExamples:[{title:"Classic Singleton (JavaScript)",useCase:"Lazy initialization.",code:`class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = null;
    DatabaseConnection.instance = this;
  }

  async connect(url) {
    if (!this.connection) {
      console.log("Creating new connection to", url);
      // this.connection = await createConnection(url);
      this.connection = url;
    }
    return this.connection;
  }
}
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true`,description:"Classic singleton: constructor returns existing instance if one exists."},{title:"ES Module Singleton",useCase:"Natural JS singleton.",code:`// config.js
class AppConfig {
  constructor() {
    this.config = {};
  }
  load() { /* load from env/file */ }
  get(key) { return this.config[key]; }
}
export const appConfig = new AppConfig();

// user.js
import { appConfig } from "./config.js";
const dbUrl = appConfig.get("DB_URL");
// Always same instance across all imports`,description:"ES modules are naturally singleton — export a single instance for global access."},{title:"Singleton with getInstance()",useCase:"TypeScript style.",code:`class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    this.logs.push(\`[\${new Date().toISOString()}] \${message}\`);
  }

  getLogs(): string[] { return [...this.logs]; }
}
const logger = Logger.getInstance();`,description:"TypeScript singleton with private constructor and static getInstance() method."},{title:"Singleton with DI Container",useCase:"Better testability.",code:`// Using awilix DI container
const { createContainer, asClass, Lifetime } = require("awilix");

const container = createContainer();

container.register({
  logger: asClass(Logger, {
    lifetime: Lifetime.SINGLETON // singleton scope
  }),
  userService: asClass(UserService),
});

// Same logger instance injected everywhere
const service1 = container.resolve("userService");
const service2 = container.resolve("userService");
// logger is the same instance in both`,description:"DI containers provide singleton behavior without the pattern\\'s drawbacks — better for testing."},{title:"Singleton Anti-Pattern Example",useCase:"Problems with global state.",code:`// BAD: Global mutable state
class AppState {
  constructor() {
    if (AppState.instance) return AppState.instance;
    this.user = null;
    this.theme = "light";
    AppState.instance = this;
  }
}
// Any code can modify global state:
const state = new AppState();
state.user = { id: 1, name: "Hacker" }; // Any module can change this!
// Testing becomes impossible — state persists across tests`,description:"Singleton global state causes testing nightmares. Any code can mutate state unpredictably."}],mcqQuestions:[{question:"What does Singleton ensure?",options:["Fast performance","Only one instance globally","Multiple instances","No instances"],answer:1,explanation:"Singleton ensures a class has only one instance with global access."},{question:"What is lazy initialization?",options:["Instance created at class load","Instance created on first use","Instance never created","Instance created twice"],answer:1,explanation:"Lazy initialization creates the instance only when it is first requested."},{question:"What is the main criticism of Singleton?",options:["It is too fast","It introduces global state and hidden dependencies","It uses too much memory","It is hard to code"],answer:1,explanation:"Singleton introduces global state, making code harder to test and reason about."},{question:"How are ES modules related to Singleton?",options:["They are not related","Modules are naturally singletons","Modules prevent singletons","Modules are anti-singleton"],answer:1,explanation:"ES modules are loaded once and cached — natural singletons."},{question:"What is the best Singleton alternative?",options:["No pattern at all","DI container with singleton scope","Global variables","Factory pattern"],answer:1,explanation:"DI containers provide singleton behavior with better testability."},{question:"Is Singleton a creational, structural, or behavioral pattern?",options:["Structural","Creational","Behavioral","Architectural"],answer:1,explanation:"Singleton is a creational pattern — it deals with object creation."}]};export{e as oop_singleton};
