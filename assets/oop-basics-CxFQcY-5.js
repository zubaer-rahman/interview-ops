const e={id:"oop-basics",title:"OOP Basics",difficulty:"beginner",estimatedMinutes:15,tldr:["Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around objects rather than functions and logic.","Objects contain data (properties/fields) and code (methods). A class is a blueprint for creating objects (instances).","Four main pillars: Encapsulation, Inheritance, Polymorphism, Abstraction. These form the foundation of OOP design.","OOP promotes code reuse, modularity, and easier maintenance through organized, self-contained units of code."],laymanDefinition:"OOP is like a car factory. A class is the blueprint for a car model � it defines what parts (properties) every car has and what it can do (methods). Each physical car on the road is an object (instance). You can have many cars from the same blueprint, each with slight variations (different colors, options).",deepDive:[{heading:"Classes and Objects",text:"A class is a template/blueprint defining properties and methods. An object is an instance of a class created at runtime. Each object has its own copy of instance properties but shares method definitions. Example: class Car defines make, model, year properties and start(), drive() methods. Each Car object (myCar, yourCar) has its own values."},{heading:"Instance vs Static Members",text:"Instance members belong to individual objects. Each object has its own copy. Static/class members belong to the class itself and are shared across all instances. Static methods are called on the class (Car.parse()) not on instances. Static properties are useful for constants or counters shared by all instances."},{heading:"Constructors and Initialization",text:"Constructors are special methods called when creating a new object. They initialize properties, set up state, and perform setup logic. In JavaScript/TypeScript, the constructor() method handles this. Constructors can accept parameters to customize the new instance during creation."},{heading:"this Keyword",text:'The "this" keyword refers to the current instance of a class. It is used to access instance properties and methods from within the class. "this" behavior differs between regular functions (dynamic) and arrow functions (lexical � inherited from enclosing scope). Understanding "this" binding is critical in JavaScript OOP.'},{heading:"Access Modifiers (public, private, protected)",text:"Access modifiers control visibility of class members. public: accessible from anywhere (default in JS/TS). private: only accessible within the class. protected: accessible within the class and subclasses. TypeScript supports all three; JavaScript uses # prefix for true private fields."}],interviewAnswer:'OOP organizes code into objects with properties and methods. Classes are blueprints, objects are instances. Master the four pillars: encapsulation, inheritance, polymorphism, abstraction. Use access modifiers to control visibility. Understand "this" binding in JavaScript.',interviewQuestions:[{question:"What is OOP?",answer:"Object-Oriented Programming � a paradigm organizing code around objects (data + methods) rather than functions."},{question:"What is the difference between a class and an object?",answer:"A class is a blueprint. An object is an instance created from that blueprint at runtime."},{question:"What are the four pillars of OOP?",answer:"Encapsulation, Inheritance, Polymorphism, Abstraction."},{question:"What is a constructor?",answer:"A special method called automatically when creating a new object. It initializes properties."},{question:'What does the "this" keyword refer to?',answer:"The current instance of the class. Used to access instance properties/methods from within the class."},{question:"What are access modifiers?",answer:"Keywords controlling visibility: public (anywhere), private (class only), protected (class + subclasses)."},{question:"What is a static method?",answer:"A method called on the class itself, not on instances. Example: Math.round()."},{question:"What is the difference between instance and static members?",answer:"Instance: belong to each object (own copy). Static: belong to the class (shared across all instances)."},{question:"Why use OOP?",answer:"Code reuse, modularity, easier maintenance, organized code, real-world modeling."},{question:"What is a property in OOP?",answer:"A variable stored within an object representing its state or data. Also called fields or attributes."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">OOP Basics</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Class</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Blueprint</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Object</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Instance</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Properties</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Data/State</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Methods</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Behavior</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Constructor</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Initialize</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OOP Basics</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Classes -> Objects. Properties + Methods.</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd"> Encapsulation, Inheritance, Polymorphism</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">, Abstraction.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">OOP Basics: Classes as blueprints, objects as inst</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ances. Organize code around objects with state and</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle"> behavior.</text></svg>',codeExamples:[{title:"Basic Class (JavaScript)",useCase:"Define and use a class.",code:`class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  start() {
    console.log(\`\${this.make} \${this.model} started\`);
  }

  accelerate(amount) {
    this.speed += amount;
  }

  getInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
myCar.accelerate(30);
console.log(myCar.getInfo());`,description:"Basic class definition with constructor, methods, and instance creation."},{title:"Static Members",useCase:"Shared class-level members.",code:`class MathUtils {
  static PI = 3.14159;

  static circleArea(radius) {
    return this.PI * radius * radius;
  }

  static degreesToRadians(degrees) {
    return degrees * (this.PI / 180);
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
console.log(MathUtils.degreesToRadians(180));

// Static members are NOT accessible on instances
// const calc = new MathUtils();
// calc.PI // undefined`,description:"Static properties and methods belong to the class, not instances."},{title:"Private Fields (JavaScript)",useCase:"True encapsulation with #.",code:`class BankAccount {
  #balance = 0;
  #transactions = [];

  constructor(owner, initialBalance) {
    this.owner = owner;
    if (initialBalance > 0) this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.#balance += amount;
    this.#transactions.push({ type: "deposit", amount });
  }

  getBalance() { return this.#balance; }

  getStatement() {
    return [...this.#transactions];
  }
}

const acc = new BankAccount("Alice", 1000);
acc.deposit(500);
console.log(acc.getBalance());
// acc.#balance // SyntaxError: private field`,description:"JavaScript # private fields provide true encapsulation � inaccessible outside the class."},{title:"Class with Getters and Setters",useCase:"Controlled property access.",code:`class Person {
  #firstName;
  #lastName;
  #birthYear;

  constructor(firstName, lastName, birthYear) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#birthYear = birthYear;
  }

  get fullName() {
    return \`\${this.#firstName} \${this.#lastName}\`;
  }

  set fullName(value) {
    const parts = value.split(" ");
    this.#firstName = parts[0];
    this.#lastName = parts.slice(1).join(" ");
  }

  get age() {
    return new Date().getFullYear() - this.#birthYear;
  }
}

const person = new Person("John", "Doe", 1990);
console.log(person.fullName);
console.log(person.age);
person.fullName = "Jane Smith";
console.log(person.fullName);`,description:"Getters and setters provide controlled access to private fields with computed properties."},{title:"TypeScript Class with Access Modifiers",useCase:"Public, private, protected.",code:`class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  public readonly id: number;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.id = Employee.nextId++;
  }

  public getInfo(): string {
    return \`\${this.name} - \${this.department}\`;
  }

  protected getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("Alice", 75000, "Engineering");
console.log(emp.name);
// console.log(emp.salary); // Error: private
// console.log(emp.department); // Error: protected`,description:"TypeScript access modifiers: public (default), private (class only), protected (class + subclasses), readonly."}],mcqQuestions:[{question:"What is a class?",options:["An object instance","A blueprint for objects","A function","A variable"],answer:1,explanation:"A class is a blueprint defining properties and methods for creating objects."},{question:"What are the four pillars of OOP?",options:["Encapsulation, Inheritance, Polymorphism, Abstraction","Classes, Objects, Methods, Properties","Public, Private, Protected, Static","Construct, Destruct, Access, Modify"],answer:0,explanation:"The four pillars are Encapsulation, Inheritance, Polymorphism, and Abstraction."},{question:"What keyword creates a new object?",options:["new","create","object","instance"],answer:0,explanation:'The "new" keyword creates a new instance of a class.'},{question:'What does "this" refer to in a class method?',options:["The class itself","The current instance","The parent class","The global object"],answer:1,explanation:'"this" refers to the current instance of the class.'},{question:"Which access modifier allows access in subclasses?",options:["public","private","protected","readonly"],answer:2,explanation:"Protected members are accessible within the class and its subclasses."},{question:"What is a static method?",options:["A method on instances","A method on the class itself","A private method","An async method"],answer:1,explanation:"Static methods are called on the class, not on instances."}]};export{e as oop_basics};
