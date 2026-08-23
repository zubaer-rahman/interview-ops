const e={id:"oop-polymorphism",title:"Polymorphism",difficulty:"intermediate",estimatedMinutes:15,tldr:['Polymorphism means "many forms" — the ability of objects of different types to respond to the same method call in their own way.',"Two types: compile-time (method overloading — same name, different parameters) and runtime (method overriding — child redefines parent method).","Polymorphism enables writing generic code that works with objects of multiple types through a common interface.","In JavaScript, polymorphism is achieved through method overriding (duck typing) and interface-like patterns."],laymanDefinition:'Polymorphism is like a universal remote control. The "pressPower()" button works differently depending on what device it is pointed at: TV turns on/off, sound system changes volume, streaming box wakes up. You, the user, just press the button — the device handles it in its own way. Same interface, different behaviors.',deepDive:[{heading:"Subtype Polymorphism (Method Overriding)",text:"The most common form. A parent class defines a method, and each child class overrides it with its own implementation. Code written against the parent type works with any child type. Example: Animal.speak() — Dog barks, Cat meows, Cow moos. Calling speak() on any Animal subclass produces the correct sound."},{heading:"Parametric Polymorphism (Generics)",text:"Allows writing code that works with any type. The type is specified as a parameter. Example: Array<T> works with Array<string>, Array<number>, etc. TypeScript supports generics with <T> syntax. Enables type-safe, reusable collection classes and utility functions."},{heading:"Ad-hoc Polymorphism (Method Overloading)",text:"Multiple methods with the same name but different parameter types or counts. The correct version is chosen at compile time based on arguments. JavaScript does not support true overloading (last definition wins), but you can simulate it with conditional logic or TypeScript overload signatures."},{heading:"Interface Polymorphism (Duck Typing)",text:`"If it walks like a duck and quacks like a duck, it is a duck." JavaScript uses duck typing: an object\\'s suitability is determined by the presence of methods/properties, not its type. Any object with a .speak() method can be treated as speaking, regardless of its class. TypeScript interfaces formalize this.`},{heading:"Polymorphism Benefits",text:"Extensibility: add new types without changing existing code. Maintainability: code works with the base type/interface. Flexibility: swap implementations easily. Testability: mock objects implement the same interface. Loose coupling: code depends on abstractions, not concrete types."}],interviewAnswer:"Polymorphism enables objects of different types to respond to the same interface in their own way. Use method overriding (runtime polymorphism) for subtype behavior. Use generics (parametric polymorphism) for type-safe reusable code. Program to an interface, not an implementation — the key principle behind polymorphic code.",interviewQuestions:[{question:"What is polymorphism?",answer:'"Many forms" — ability for different types to respond to the same method call in their own way.'},{question:"What are the two main types of polymorphism?",answer:"Runtime (method overriding) and compile-time (method overloading/generics)."},{question:"What is method overriding?",answer:"A child class redefines a parent method with its own implementation. Runtime polymorphism."},{question:"What is duck typing?",answer:'"If it walks like a duck..." — object suitability determined by method presence, not type.'},{question:"What are generics?",answer:"Type parameters allowing functions/classes to work with multiple types: Array<T>, Promise<T>."},{question:"What is method overloading?",answer:"Multiple methods with the same name but different parameters. JavaScript does not support it natively."},{question:'What does "program to an interface, not an implementation" mean?',answer:"Code against abstractions (base classes/interfaces), not concrete types. Enables swapping implementations."},{question:"How does JavaScript achieve polymorphism?",answer:"Through method overriding and duck typing. JavaScript is dynamically typed — objects just need the right methods."},{question:"What is the benefit of polymorphism?",answer:"Extensibility, maintainability, flexibility, loose coupling. Add new types without changing existing code."},{question:"What is subtype polymorphism?",answer:"A child class object can be used wherever the parent type is expected. Liskov Substitution Principle."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Polymorphism</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Method Override</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Runtime</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Generics</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Compile-time</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Duck Typing</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">JavaScript</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Interface</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Abstraction</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Extensible</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Add types</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Polymorphism</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Many forms. Same interface, different imp</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">lementations. Method override, generics, </text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">duck typing.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Polymorphism: Objects of different types respond t</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">o the same method call in their own way.</text></svg>',codeExamples:[{title:"Runtime Polymorphism (Method Overriding)",useCase:"Classic example.",code:`class PaymentProcessor {
  process(amount) {
    throw new Error("Subclass must implement");
  }
}

class CreditCardProcessor extends PaymentProcessor {
  process(amount) {
    console.log(\`Processing $\${amount} via Credit Card\`);
    return { status: "success", method: "credit_card" };
  }
}

class PayPalProcessor extends PaymentProcessor {
  process(amount) {
    console.log(\`Processing $\${amount} via PayPal\`);
    return { status: "success", method: "paypal" };
  }
}

class CryptoProcessor extends PaymentProcessor {
  process(amount) {
    console.log(\`Processing $\${amount} via Crypto\`);
    return { status: "success", method: "crypto" };
  }
}

function checkout(processor, amount) {
  return processor.process(amount);
}

checkout(new CreditCardProcessor(), 100);
checkout(new PayPalProcessor(), 50);
checkout(new CryptoProcessor(), 200);`,description:"Runtime polymorphism: each processor implements process() differently. checkout() works with any."},{title:"Duck Typing in JavaScript",useCase:"JavaScript dynamic polymorphism.",code:`function makeSound(animal) {
  if (typeof animal.speak === "function") {
    animal.speak();
  } else {
    console.log("Cannot make sound");
  }
}

const dog = { speak() { console.log("Woof!"); }, name: "Rex" };
const cat = { speak() { console.log("Meow!"); }, name: "Whiskers" };
const car = { honk() { console.log("Beep!"); } };

makeSound(dog);
makeSound(cat);
makeSound(car);`,description:"Duck typing: objects are polymorphic based on method presence, not inheritance."},{title:"Generics (TypeScript)",useCase:"Parametric polymorphism.",code:`function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

const numberStack = new Stack<number>();
numberStack.push(1);
const stringStack = new Stack<string>();
stringStack.push("hello");`,description:"Generics (parametric polymorphism) enable type-safe, reusable code that works with multiple types."},{title:"Simulating Method Overloading",useCase:"Ad-hoc polymorphism in JS.",code:`class Calculator {
  add(...args) {
    if (args.length === 2) return args[0] + args[1];
    else if (args.length === 1 && Array.isArray(args[0]))
      return args[0].reduce((a, b) => a + b, 0);
    else throw new Error("Invalid arguments");
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add([1, 2, 3, 4]));`,description:"JavaScript simulates overloading with conditional logic on arguments."},{title:"Polymorphism with TypeScript Interfaces",useCase:"Interface-based polymorphism.",code:`interface Sortable {
  compareTo(other: Sortable): number;
}

class Student implements Sortable {
  constructor(public name: string, public grade: number) {}
  compareTo(other: Student): number { return this.grade - other.grade; }
}

class Product implements Sortable {
  constructor(public name: string, public price: number) {}
  compareTo(other: Product): number { return this.price - other.price; }
}

function sortItems<T extends Sortable>(items: T[]): T[] {
  return items.sort((a, b) => a.compareTo(b));
}`,description:"Interface polymorphism: different types implement the same interface, enabling polymorphic usage."}],mcqQuestions:[{question:'What does "polymorphism" mean?',options:["Many forms","One form","No forms","Many classes"],answer:0,explanation:'Polymorphism means "many forms" — different types respond to the same interface.'},{question:"What is runtime polymorphism?",options:["Method overloading","Method overriding","Generics","Inheritance"],answer:1,explanation:"Runtime polymorphism is achieved through method overriding in subclasses."},{question:"What is duck typing?",options:["Type checking at compile time","Object suitability by method presence","Inheritance hierarchy","Access modifiers"],answer:1,explanation:"Duck typing: if an object has the required methods, it can be used regardless of type."},{question:"What do generics provide?",options:["Method overloading","Type-safe reusable code","Data hiding","Runtime checks"],answer:1,explanation:"Generics enable type-safe, reusable code that works with multiple types."},{question:"How does JavaScript achieve polymorphism?",options:["Interfaces","Method overriding and duck typing","Abstract classes","Generics only"],answer:1,explanation:"JavaScript uses method overriding and duck typing for polymorphism."},{question:'What does "program to an interface" mean?',options:["Use only interfaces","Code against abstractions, not concretions","Always use generics","Avoid inheritance"],answer:1,explanation:"Program to an interface means depend on abstractions, not concrete implementations."}]};export{e as oop_polymorphism};
