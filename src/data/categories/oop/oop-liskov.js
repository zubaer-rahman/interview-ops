export const oop_liskov = {
  "id": "oop-liskov",
  "title": "Liskov Substitution",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without affecting correctness.",
    "Subtypes must preserve the behavior expected by the parent class contract — they cannot strengthen preconditions or weaken postconditions.",
    "LSP is about designing by contract: subclasses must honor the parent's contract, not just its interface.",
    "Violating LSP leads to subtle bugs where code that works with the parent fails unexpectedly with a subclass."
  ],
  "laymanDefinition": "LSP is like a universal charger. If a charger says \"works with all USB-C devices\", you expect any USB-C device to charge. If a specific device requires a special cable, the charger cannot claim it works with all. The device violates the USB-C contract.",
  "deepDive": [
    {
      "heading": "Preconditions and Postconditions",
      "text": "Precondition: what must be true before a method runs. Postcondition: what will be true after. Subtypes cannot strengthen preconditions (require more) or weaken postconditions (guarantee less). Example: parent accepts any positive number; child must also accept any positive number."
    },
    {
      "heading": "Behavioral Subtyping",
      "text": "LSP is about behavior, not just syntax. A subclass can have the same method signatures but break behavioral expectations. Example: Square extends Rectangle with setWidth() that also sets height — breaks the expectation."
    },
    {
      "heading": "Common LSP Violations",
      "text": "Overriding with no-op methods (UnsupportedOperationException). Strengthening input validation in child. Weakening output guarantees (returning null when parent never returns null). Throwing new exception types not thrown by parent."
    },
    {
      "heading": "The Rectangle-Square Problem",
      "text": "Classic LSP example: Square extends Rectangle. Rectangle.setWidth(w) sets width. Square overrides to also set height = w. Code expecting Rectangle behavior breaks with Square. Fix: do not make Square extend Rectangle."
    },
    {
      "heading": "Design by Contract",
      "text": "Formal approach to LSP. Classes define invariants, preconditions, and postconditions. Subclasses must: preserve invariants, accept all inputs parent accepts, guarantee at least what parent guarantees."
    }
  ],
  "interviewAnswer": "LSP: subtypes must be substitutable for their base types. Do not strengthen preconditions. Do not weaken postconditions. The Rectangle-Square problem is the classic violation. Prefer composition over inheritance.",
  "interviewQuestions": [
    {
      "question": "What is the Liskov Substitution Principle?",
      "answer": "Subtypes must be replaceable for their base types without affecting program correctness."
    },
    {
      "question": "What are preconditions?",
      "answer": "Conditions that must be true before a method executes. Subtypes cannot strengthen them."
    },
    {
      "question": "What are postconditions?",
      "answer": "Guarantees about what happens after a method executes. Subtypes cannot weaken them."
    },
    {
      "question": "What is the Rectangle-Square problem?",
      "answer": "Square extending Rectangle violates LSP because Square changes width/height behavior."
    },
    {
      "question": "How do you fix the Rectangle-Square problem?",
      "answer": "Do not make Square extend Rectangle. Have both extend Shape with abstract area()."
    },
    {
      "question": "What is behavioral subtyping?",
      "answer": "Subtypes must preserve the behavior (contract) of the parent, not just the interface."
    },
    {
      "question": "What is an LSP violation example?",
      "answer": "A child class that throws an error for inputs the parent accepts (strengthened precondition)."
    },
    {
      "question": "What is Design by Contract?",
      "answer": "Formal specification of preconditions, postconditions, and invariants for LSP compliance."
    },
    {
      "question": "How does composition help LSP?",
      "answer": "Composition avoids inheritance hierarchies entirely, naturally avoiding LSP issues."
    },
    {
      "question": "What question helps avoid LSP violations?",
      "answer": "\"Is this really an is-a relationship, or just sharing implementation?\""
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Liskov Substitution</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Base Type</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Contract</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Subtype A</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">OK</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Subtype B</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Violates!</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Precondition</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cannot strengthen</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Postcondition</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cannot weaken</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Liskov Substitution</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Subtypes must be substitutable. Preserve </text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">contract: preconditions, postconditions, </text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">invariants.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">LSP: Subtypes must be substitutable for base types</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> without breaking program correctness.</text></svg>",
  "codeExamples": [
    {
      "title": "LSP Violation: Rectangle-Square",
      "useCase": "Classical example.",
      "code": "class Rectangle {\n  constructor(w,h) { this.width=w; this.height=h; }\n  setWidth(w) { this.width = w; }\n  setHeight(h) { this.height = h; }\n  getArea() { return this.width * this.height; }\n}\nclass Square extends Rectangle {\n  constructor(size) { super(size,size); }\n  setWidth(w) { this.width=w; this.height=w; }\n  setHeight(h) { this.height=h; this.width=h; }\n}\nfunction resize(rect) {\n  rect.setWidth(5); rect.setHeight(10);\n  console.log(\"Expected 50, Got:\", rect.getArea());\n}\nresize(new Rectangle(1,1)); // 50\nresize(new Square(1));       // 100 — wrong!",
      "description": "Classic LSP violation: Square changes setWidth/setHeight behavior, breaking Rectangle contract."
    },
    {
      "title": "LSP Compliant: Shape Hierarchy",
      "useCase": "Proper design.",
      "code": "class Shape { getArea() { throw new Error(\"Abstract\"); } }\nclass Rectangle extends Shape {\n  constructor(w,h) { super(); this.width=w; this.height=h; }\n  setWidth(w) { this.width = w; }\n  setHeight(h) { this.height = h; }\n  getArea() { return this.width * this.height; }\n}\nclass Square extends Shape {\n  constructor(size) { super(); this.size = size; }\n  setSize(size) { this.size = size; }\n  getArea() { return this.size * this.size; }\n}\nfunction printArea(shape) { console.log(\"Area:\", shape.getArea()); }\nprintArea(new Rectangle(5,10)); // 50\nprintArea(new Square(5)); // 25",
      "description": "LSP-compliant: Square and Rectangle both extend Shape but do not inherit from each other."
    },
    {
      "title": "LSP: Strengthened Precondition",
      "useCase": "Child rejects valid parent input.",
      "code": "class Account {\n  withdraw(amount) { if (amount<=0) throw new Error(\"Invalid\"); return amount; }\n}\nclass MinBalanceAccount extends Account {\n  constructor(minB) { super(); this.minB = minB; }\n  withdraw(amount) {\n    if (amount<=0) throw new Error(\"Invalid\");\n    if (amount<this.minB) throw new Error(\"Too small\"); // strengthened!\n    return amount;\n  }\n}",
      "description": "LSP violation: child rejects valid inputs that the parent accepts (strengthened precondition)."
    },
    {
      "title": "LSP: Weakened Postcondition",
      "useCase": "Child returns unexpected results.",
      "code": "class Parser {\n  parse(input) { if (!input) return null; return { data: input.trim() }; }\n}\nclass LenientParser extends Parser {\n  parse(input) {\n    if (!input) return { data: \"\" }; // parent returns null!\n    return { data: input.trim() };\n  }\n}",
      "description": "LSP violation: child weakens postcondition (returns object where parent returns null)."
    },
    {
      "title": "Using Composition to Avoid LSP Issues",
      "useCase": "Prefer composition over inheritance.",
      "code": "class Bird {\n  constructor(flyingBehavior) { this.flyingBehavior = flyingBehavior; }\n  fly() { return this.flyingBehavior.fly(); }\n}\nclass CanFly { fly() { return \"Flying!\"; } }\nclass CannotFly { fly() { return \"Cannot fly\"; } }\nconst eagle = new Bird(new CanFly());\nconst penguin = new Bird(new CannotFly());",
      "description": "Composition avoids inheritance hierarchies and naturally prevents LSP violations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does LSP stand for?",
      "options": [
        "Liskov Substitution Principle",
        "Large System Pattern",
        "Local Scope Principle",
        "Language-Specific Protocol"
      ],
      "answer": 0,
      "explanation": "LSP = Liskov Substitution Principle, named after Barbara Liskov."
    },
    {
      "question": "What does LSP require?",
      "options": [
        "Subtypes must be substitutable for base types",
        "Classes must be small",
        "Methods must be private",
        "Inheritance must be deep"
      ],
      "answer": 0,
      "explanation": "Subtypes must be replaceable for their base types without breaking correctness."
    },
    {
      "question": "What is strengthened precondition?",
      "options": [
        "Child requires more than parent",
        "Child requires less than parent",
        "Child has same requirements",
        "Child has no requirements"
      ],
      "answer": 0,
      "explanation": "Strengthened precondition = child rejects inputs the parent accepts."
    },
    {
      "question": "What is the Rectangle-Square problem?",
      "options": [
        "Cannot calculate area",
        "Square changes Rectangle behavior",
        "Square has no area",
        "Rectangle cannot have sides"
      ],
      "answer": 1,
      "explanation": "Square extending Rectangle violates LSP because Square changes width/height behavior."
    },
    {
      "question": "How do you fix the Rectangle-Square problem?",
      "options": [
        "Keep Square extending Rectangle",
        "Both extend Shape",
        "Delete Square class",
        "Make Rectangle extend Square"
      ],
      "answer": 1,
      "explanation": "Both should extend a common abstract Shape class."
    },
    {
      "question": "What design approach avoids LSP issues?",
      "options": [
        "Deep inheritance",
        "Composition over inheritance",
        "Abstract classes",
        "Interfaces"
      ],
      "answer": 1,
      "explanation": "Composition over inheritance avoids deep hierarchies and naturally prevents LSP violations."
    }
  ]
};
