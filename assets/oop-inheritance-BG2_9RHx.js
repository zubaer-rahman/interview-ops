const e={id:"oop-inheritance",title:"Inheritance",difficulty:"beginner",estimatedMinutes:15,tldr:["Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass).","Promotes code reuse: common logic defined once in the parent, specialized behavior added in the child.","Supports hierarchical relationships: Animal -> Mammal -> Dog. Child can override parent methods (polymorphism).",'JavaScript uses prototype-based inheritance with the "extends" keyword. TypeScript adds interface inheritance.'],laymanDefinition:'Inheritance is like a family tree for code. A "Vehicle" parent class has common features (wheels, engine, speed). The "Car" child inherits all vehicle features and adds car-specific ones (doors, trunk). The "Motorcycle" child inherits vehicle features and adds different specifics (sidecar, handlebars). You reuse the Vehicle code instead of rewriting it.',deepDive:[{heading:'The "extends" Keyword',text:'In JavaScript/TypeScript, "class Car extends Vehicle" creates a subclass. The child class inherits all public and protected members. The constructor must call super() before accessing "this" in the child constructor. The child can add new members or override existing ones.'},{heading:"Method Overriding",text:"A child class can redefine a method inherited from the parent. The child version takes precedence. Use super.methodName() to call the parent version from the child. This enables the child to extend the parent\\'s behavior rather than completely replacing it."},{heading:"super() and parent Access",text:`super() calls the parent constructor — must be called before using "this" in child constructor. super.methodName() calls a parent method from the child. This allows the child to build on the parent\\'s implementation. Not calling super() correctly is a common error.`},{heading:"Inheritance vs Composition",text:'Inheritance: "is-a" relationship (Dog is an Animal). Composition: "has-a" relationship (Car has an Engine). Prefer composition over inheritance — it is more flexible and less coupled. Inheritance can lead to deep, fragile hierarchies. Use inheritance when there is a clear hierarchical relationship.'},{heading:"Prototype Chain (JavaScript)",text:`JavaScript\\'s inheritance is prototype-based. Objects inherit from other objects via the prototype chain. The "extends" keyword is syntactic sugar over prototype assignment. When accessing a property, JS walks up the prototype chain until found or reaches null. Class syntax is preferred for clarity.`}],interviewAnswer:'Inheritance enables code reuse through hierarchical relationships. Use "extends" to create subclasses. Call super() in child constructors. Override methods to specialize behavior. Prefer composition over inheritance for flexibility. Keep inheritance hierarchies shallow to avoid complexity.',interviewQuestions:[{question:"What is inheritance?",answer:"A mechanism where a child class inherits properties and methods from a parent class."},{question:'What is the "extends" keyword used for?',answer:"To create a child class that inherits from a parent class: class Dog extends Animal."},{question:"What is method overriding?",answer:"Redefining a parent method in the child class. The child version takes precedence."},{question:"What does super() do?",answer:'Calls the parent class constructor from the child constructor. Must be called before using "this".'},{question:"What does super.methodName() do?",answer:"Calls the parent\\'s version of a method from within the child class."},{question:"What is the prototype chain?",answer:"JavaScript\\'s inheritance mechanism where objects inherit from other objects through [[Prototype]]."},{question:"What is the difference between inheritance and composition?",answer:'Inheritance = "is-a" (Dog is Animal). Composition = "has-a" (Car has Engine). Prefer composition.'},{question:"What is a subclass?",answer:"A class that inherits from another class (parent/superclass). Also called derived class."},{question:"Can a child class access private parent members?",answer:"No. Private members are only accessible within the class that defines them, not in subclasses."},{question:"What problem does inheritance solve?",answer:"Code reuse — common logic in parent, specialized behavior in children. Reduces duplication."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Inheritance</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Parent Class</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Vehicle</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Child: Car</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">extends Vehicle</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Child: Truck</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">extends Vehicle</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Method Override</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">super.speed()</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">super()</text><text x="65" y="163" text-anchor="middle" font-size="9" fill="#ddd">Call parent construc</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">tor</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Inheritance</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Code reuse through hierarchy. extends, su</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">per(), method overriding. "is-a" relation</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">ships.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Inheritance: Child classes inherit from parents. C</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ode reuse, specialization, method overriding.</text></svg>',codeExamples:[{title:"Basic Inheritance (JavaScript)",useCase:"Extending a parent class.",code:`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }

  move(distance) {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(\`\${this.name} barks\`);
  }

  fetch() {
    console.log(\`\${this.name} fetches the ball\`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
dog.move(10);
dog.fetch();`,description:"Inheritance basics: extends, super(), method overriding, adding new methods."},{title:"Using super to Extend Parent Behavior",useCase:"Call parent implementation.",code:`class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(\`Speed: \${this.speed} km/h\`);
  }
}

class SportsCar extends Vehicle {
  constructor(make, model, turboBoost) {
    super(make, model);
    this.turboBoost = turboBoost;
  }

  accelerate(amount) {
    const boosted = amount * (this.turboBoost ? 2 : 1);
    super.accelerate(boosted);
    if (this.speed > 200) console.log("Warning: Excessive speed!");
  }
}`,description:"Using super.method() in child to call parent implementation, extending with additional logic."},{title:"Inheritance Chain (Multi-level)",useCase:"Deep inheritance hierarchy.",code:'class Shape {\n  constructor(color) { this.color = color; }\n  describe() { return `A ${this.color} shape`; }\n}\nclass Polygon extends Shape {\n  constructor(color, sides) { super(color); this.sides = sides; }\n  describe() { return `${super.describe()} with ${this.sides} sides`; }\n}\nclass Square extends Polygon {\n  constructor(color, sideLength) { super(color, 4); this.sideLength = sideLength; }\n  area() { return this.sideLength * this.sideLength; }\n  describe() { return `${super.describe()} of size ${this.sideLength}`; }\n}\nconst sq = new Square("red", 5);\nconsole.log(sq.describe(), `Area: ${sq.area()}`);',description:"Multi-level inheritance chain: Shape -> Polygon -> Square."},{title:"Checking instanceof",useCase:"Type checking in inheritance.",code:`class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
const dog = new Dog();
console.log(dog instanceof Dog);
console.log(dog instanceof Mammal);
console.log(dog instanceof Animal);
console.log(dog instanceof Object);
console.log(dog instanceof Array);`,description:"The instanceof operator checks if an object is an instance of a class or its parent."},{title:"TypeScript Inheritance with Access Modifiers",useCase:"Protected and abstract inheritance.",code:`abstract class Shape {
  constructor(protected color: string) {}
  abstract area(): number;
  describe(): string { return \`A \${this.color} shape with area \${this.area()}\`; }
}
class Circle extends Shape {
  constructor(color: string, private radius: number) { super(color); }
  area(): number { return Math.PI * this.radius * this.radius; }
}
const circle = new Circle("blue", 5);
console.log(circle.describe());`,description:"TypeScript abstract classes and protected members in inheritance hierarchies."}],mcqQuestions:[{question:"What keyword establishes inheritance?",options:["extends","inherits","parent","base"],answer:0,explanation:'The "extends" keyword establishes a parent-child inheritance relationship.'},{question:"What must be called in a child constructor?",options:["this()","super()","parent()","base()"],answer:1,explanation:'super() must be called in the child constructor before accessing "this".'},{question:"What is method overriding?",options:["Deleting a parent method","Redefining a parent method in child","Creating a new method","Calling a static method"],answer:1,explanation:"Method overriding redefines a parent method in the child class."},{question:'What does "is-a" relationship refer to?',options:["Composition","Inheritance","Encapsulation","Abstraction"],answer:1,explanation:'Inheritance models "is-a" relationships (Dog is an Animal).'},{question:'What does "has-a" relationship refer to?',options:["Inheritance","Composition","Polymorphism","Encapsulation"],answer:1,explanation:'Composition models "has-a" relationships (Car has an Engine).'},{question:"Can a child access private parent fields?",options:["Yes","No","Only with getters","Depends on the language"],answer:1,explanation:"Private fields are only accessible within the class that defines them."}]};export{e as oop_inheritance};
