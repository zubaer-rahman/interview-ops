const e={id:"oop-design-patterns",title:"Design Patterns",difficulty:"intermediate",estimatedMinutes:20,tldr:["Design patterns are reusable solutions to common problems in software design. They are not code — they are templates for solving problems.","Patterns are categorized into three groups: Creational (object creation), Structural (object composition), Behavioral (object communication).",'The Gang of Four (GoF) book "Design Patterns: Elements of Reusable Object-Oriented Software" cataloged 23 classic patterns.',"Patterns provide a shared vocabulary for developers, making design discussions more efficient and solutions more proven."],laymanDefinition:'Design patterns are like recipes in cooking. A recipe for "chocolate cake" tells you the general approach, ingredients, and steps — but you can adjust it. When a chef says "I will make a chocolate cake", other chefs immediately understand the concept. Similarly, "I will use a Singleton" immediately conveys the design intent.',deepDive:[{heading:"Creational Patterns",text:"Deal with object creation mechanisms. Singleton: one instance globally. Factory: create objects without specifying exact class. Abstract Factory: families of related objects. Builder: construct complex objects step by step. Prototype: clone existing objects."},{heading:"Structural Patterns",text:"Deal with object composition and relationships. Adapter: make incompatible interfaces work together. Decorator: add behavior to objects dynamically. Facade: simplified interface to complex subsystem. Proxy: surrogate for another object. Composite: treat individual and composite objects uniformly."},{heading:"Behavioral Patterns",text:"Deal with object communication and responsibility. Observer: notify dependents of state changes. Strategy: interchangeable algorithms. Command: encapsulate request as object. Iterator: traverse collections uniformly. State: alter behavior when state changes."},{heading:"Pattern Selection Guide",text:"Creational: when object creation is complex or needs flexibility. Structural: when you need to compose objects or adapt interfaces. Behavioral: when you need to manage algorithms, responsibilities, or communication between objects."},{heading:"Patterns as Vocabulary",text:'Patterns give developers a shared language. Saying "we need a Facade for this subsystem" communicates the design intent instantly. Patterns document proven solutions and their trade-offs. Key: patterns are not goals — solve the problem, then see if a pattern applies.'}],interviewAnswer:"Design patterns are proven, reusable solutions to common software design problems. The 23 GoF patterns are categorized into creational, structural, and behavioral. Use patterns as a shared vocabulary, but do not force them — solve the problem first, then recognize the pattern.",interviewQuestions:[{question:"What are design patterns?",answer:"Reusable solutions to common software design problems. They are templates/guidelines, not code."},{question:"Who wrote the classic patterns book?",answer:"The Gang of Four (GoF): Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides."},{question:"How many GoF patterns are there?",answer:"23 patterns, divided into creational, structural, and behavioral categories."},{question:"What are creational patterns?",answer:"Patterns dealing with object creation: Singleton, Factory, Abstract Factory, Builder, Prototype."},{question:"What are structural patterns?",answer:"Patterns dealing with object composition: Adapter, Decorator, Facade, Proxy, Composite."},{question:"What are behavioral patterns?",answer:"Patterns dealing with object communication: Observer, Strategy, Command, Iterator, State."},{question:"What is the Singleton pattern?",answer:"Ensures a class has only one instance and provides global access to it."},{question:"What is the Factory pattern?",answer:"Provides an interface for creating objects without specifying their concrete classes."},{question:"What is the Observer pattern?",answer:"Defines a one-to-many dependency where changes to one object notify its dependents."},{question:"Should you always use design patterns?",answer:"No. Patterns are solutions, not goals. Solve the problem first; recognize patterns that fit naturally."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Design Patterns</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Creational</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Object creation</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Structural</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Object composition</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Behavioral</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Communication</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">GoF 23</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Classic patterns</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Vocabulary</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Shared language</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Design Patterns</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Reusable solutions to common problems. Cr</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">eational, Structural, Behavioral. GoF 23 </text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">patterns. Shared vocabulary.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Design Patterns: Proven, reusable solutions to com</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">mon software design problems. GoF 23 patterns.</text></svg>',codeExamples:[{title:"Singleton Pattern",useCase:"One instance globally.",code:`class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.data = [];
    Singleton.instance = this;
  }
  add(item) { this.data.push(item); }
  getData() { return this.data; }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true`,description:"Singleton ensures only one instance exists — both variables reference the same object."},{title:"Factory Pattern",useCase:"Create objects without specifying class.",code:`class LoggerFactory {
  static createLogger(type) {
    switch(type) {
      case "console": return new ConsoleLogger();
      case "file": return new FileLogger();
      case "cloud": return new CloudLogger();
      default: throw new Error("Unknown logger type");
    }
  }
}
const logger = LoggerFactory.createLogger("console");`,description:"Factory encapsulates object creation, allowing the client to request objects without knowing concrete classes."},{title:"Observer Pattern",useCase:"Notify dependents of changes.",code:`class Subject {
  constructor() { this.observers = []; }
  subscribe(obs) { this.observers.push(obs); }
  unsubscribe(obs) { this.observers = this.observers.filter(o => o !== obs); }
  notify(data) { this.observers.forEach(o => o.update(data)); }
}
class Observer {
  constructor(name) { this.name = name; }
  update(data) { console.log(\`\${this.name} received:\`, data); }
}
const subject = new Subject();
const obs1 = new Observer("Observer 1");
subject.subscribe(obs1);
subject.notify("Hello!");`,description:"Observer pattern: subject pushes notifications to all subscribed observers."},{title:"Facade Pattern",useCase:"Simplified interface.",code:`class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  start() {
    this.cpu.freeze();
    this.memory.load(this.hardDrive.read());
    this.cpu.execute();
  }
}
const computer = new ComputerFacade();
computer.start(); // Simple interface to complex subsystem`,description:"Facade provides a simple interface to a complex subsystem, hiding implementation complexity."},{title:"Strategy Pattern",useCase:"Interchangeable algorithms.",code:`class SortingStrategy {
  sort(data) { throw new Error("Abstract"); }
}
class QuickSort extends SortingStrategy {
  sort(data) { console.log("Quick sorting..."); return data.sort(); }
}
class MergeSort extends SortingStrategy {
  sort(data) { console.log("Merge sorting..."); return data.sort(); }
}
class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(data) { return this.strategy.sort(data); }
}
const sorter = new Sorter(new QuickSort());
sorter.sort([3,1,2]);`,description:"Strategy pattern: interchangeable algorithms through a common interface."}],mcqQuestions:[{question:"What are design patterns?",options:["Specific code libraries","Reusable solutions to common problems","Programming languages","Testing frameworks"],answer:1,explanation:"Design patterns are reusable solutions/templates for common software design problems."},{question:"How many GoF design patterns are there?",options:["12","23","30","50"],answer:1,explanation:"The Gang of Four cataloged 23 classic design patterns."},{question:"What are the three pattern categories?",options:["Simple, Medium, Complex","Creational, Structural, Behavioral","Static, Dynamic, Hybrid","Public, Private, Protected"],answer:1,explanation:"Patterns are categorized as Creational, Structural, and Behavioral."},{question:"What pattern ensures one instance?",options:["Factory","Singleton","Observer","Strategy"],answer:1,explanation:"Singleton ensures a class has only one instance globally."},{question:"What pattern notifies dependents of changes?",options:["Strategy","Factory","Observer","Adapter"],answer:2,explanation:"Observer defines a one-to-many dependency where changes notify dependents."},{question:"Should you force design patterns into code?",options:["Yes, always","No, solve the problem first then see if a pattern fits","Only Singleton","Only Factory"],answer:1,explanation:"Patterns are solutions, not goals. Solve the problem first; recognize patterns that fit."}]};export{e as oop_design_patterns};
