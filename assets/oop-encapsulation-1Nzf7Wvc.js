const e={id:"oop-encapsulation",title:"Encapsulation",difficulty:"beginner",estimatedMinutes:15,tldr:["Encapsulation is the bundling of data (properties) and methods (behavior) that operate on that data within a single unit (class/object).","It also involves restricting direct access to an object's internal state � data hiding. Only methods within the class can modify private data.","Benefits: protects data integrity, reduces complexity, allows implementation changes without affecting external code.","Achieved through: private fields, getters/setters, and controlled interfaces (public methods)."],laymanDefinition:"Encapsulation is like a vending machine. You interact with the public interface (select item, insert money, receive product). You cannot directly access the internal mechanics (the coin mechanism, the product dispenser, the inventory database). This prevents misuse and allows the manufacturer to change internals without affecting how you use it.",deepDive:[{heading:"Data Hiding",text:"Internal state is hidden from external code using private fields. External code cannot directly read or modify private data. This prevents invalid states � an object always controls its own data. Example: a BankAccount\\'s #balance can only be modified through deposit() and withdraw() methods which enforce business rules."},{heading:"Public Interface (API)",text:"Public methods form the contract between the object and external code. These methods provide controlled access to the object\\'s functionality. The interface should be minimal and well-documented. Internal implementation can change as long as the public interface remains consistent."},{heading:"Getters and Setters",text:"Special methods that provide controlled access to private fields. Getters: read access with potential computed/transformed values. Setters: write access with validation logic. Example: set email(value) { if (validateEmail(value)) this.#email = value; }. Also useful for computed properties (get fullName())."},{heading:"Validation and Invariants",text:"Encapsulation enforces invariants � rules that must always hold true. Example: age cannot be negative, balance cannot be overdrawn beyond a limit, email must be valid. By controlling all access through methods, the class ensures these rules are always enforced."},{heading:"Encapsulation vs Abstraction",text:"Encapsulation is about hiding internal state and implementation details (how it works). Abstraction is about hiding complexity and exposing only relevant features (what it does). Encapsulation focuses on data protection; abstraction focuses on conceptual simplification."}],interviewAnswer:"Encapsulation bundles data and methods together and hides internal state. Always use private fields. Provide controlled access through public methods, getters, and setters. Validate data in setters to maintain invariants. A well-encapsulated class can change its internal implementation without breaking external code.",interviewQuestions:[{question:"What is encapsulation?",answer:"Bundling data and methods together while restricting direct access to internal state � data hiding."},{question:"What is data hiding?",answer:"Keeping internal state private so external code cannot directly access or modify it."},{question:"What is the benefit of encapsulation?",answer:"Protects data integrity, reduces complexity, allows internal changes without breaking external code."},{question:"What is a getter?",answer:"A method that reads a private property, often computing or transforming the value."},{question:"What is a setter?",answer:"A method that writes a private property, often with validation logic."},{question:"What is the difference between encapsulation and abstraction?",answer:"Encapsulation hides internal state/data. Abstraction hides complexity/details. Encapsulation = data protection. Abstraction = conceptual simplification."},{question:"What is an invariant?",answer:"A rule that must always hold true for an object. Encapsulation helps enforce invariants."},{question:"How does encapsulation improve maintainability?",answer:"Internal implementation can change without affecting external code that uses the public interface."},{question:"What is the public interface of a class?",answer:"The set of public methods and properties that external code can access."},{question:"Why should fields be private by default?",answer:"To prevent external code from putting the object into an invalid state."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Encapsulation</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Private Fields</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">#balance, #name</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Public Methods</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">deposit(), getInfo()</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Getters/Setters</text><text x="65" y="103" text-anchor="middle" font-size="9" fill="#ddd">get balance(), set n</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">ame()</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Validation</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Enforce rules</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Invariants</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Always true</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Encapsulation</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Data hiding + controlled access. Private </text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">fields, public interface, validation, inv</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">ariants.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Encapsulation: Bundling data and methods, hiding i</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">nternal state. Data protection through controlled </text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">access.</text></svg>',codeExamples:[{title:"Encapsulated BankAccount",useCase:"Data hiding with validation.",code:`class BankAccount {
  #balance = 0;
  #freezeLimit = -500;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    if (this.#balance - amount < this.#freezeLimit) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  get balance() { return this.#balance; }
}

const acc = new BankAccount("Alice");
acc.deposit(1000);
acc.withdraw(300);
console.log(acc.balance);
// acc.#balance = 99999 // Error!`,description:"Full encapsulation with private balance, validation in methods, and read-only getter."},{title:"Validation in Setters",useCase:"Controlled property modification.",code:`class User {
  #email;
  #age;

  constructor(email, age) {
    this.#email = email;
    this.#age = age;
  }

  get email() { return this.#email; }

  set email(value) {
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
      throw new Error("Invalid email format");
    }
    this.#email = value;
  }

  get age() { return this.#age; }

  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error("Age must be between 0 and 150");
    }
    this.#age = value;
  }
}

const user = new User("alice@example.com", 30);
user.email = "bob@test.com";
// user.age = -5 // Error: Age must be between 0 and 150`,description:"Setters with validation enforce business rules when properties are modified."},{title:"Immutable Object Pattern",useCase:"Encapsulation for safety.",code:`class ImmutablePoint {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
    Object.freeze(this);
  }

  get x() { return this.#x; }
  get y() { return this.#y; }

  move(dx, dy) {
    return new ImmutablePoint(this.#x + dx, this.#y + dy);
  }

  distanceTo(other) {
    const dx = this.#x - other.x;
    const dy = this.#y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new ImmutablePoint(3, 4);
const p2 = p1.move(1, 2);
console.log(p2.x, p2.y);
`,description:""}],mcqQuestions:[{question:"What is the key idea of encapsulation?",options:["Code reuse","Data hiding and controlled access","Performance","Inheritance"],answer:1,explanation:"Encapsulation hides internal state and provides controlled access through methods."},{question:"What is a private field in JavaScript?",options:["A field with _ prefix","A field declared with # prefix","A field in a closure","A field in a module"],answer:1,explanation:"JavaScript private fields use the # prefix and are only accessible within the class."},{question:"What is the benefit of getters/setters?",options:["Faster code","Controlled access with validation","Less memory","Automatic serialization"],answer:1,explanation:"Getters/setters provide controlled read/write access with validation logic."},{question:"What does Object.freeze() achieve?",options:["Makes object mutable","Prevents modification of properties","Deletes properties","Deep clones the object"],answer:1,explanation:"Object.freeze() makes an object immutable — no properties can be added/modified/deleted."},{question:"Why is data validation important?",options:["It is optional","It enforces business rules and invariants","It improves performance","It reduces code size"],answer:1,explanation:"Validation enforces business rules ensuring the object is always in a valid state."},{question:"What is an example of an invariant?",options:["A variable name","Balance cannot go below a limit","A method name","A class name"],answer:1,explanation:"An invariant is a rule that must always hold, e.g., balance must never go below a freeze limit."}]};export{e as oop_encapsulation};
