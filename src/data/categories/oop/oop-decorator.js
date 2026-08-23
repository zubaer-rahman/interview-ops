export const oop_decorator = {
  "id": "oop-decorator",
  "title": "Decorator Pattern",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "The Decorator pattern attaches additional responsibilities to an object dynamically at runtime. It provides an alternative to subclassing for extending functionality.",
    "Decorators wrap an object and add behavior before/after delegating to the wrapped object. They share the same interface as the wrapped object.",
    "Benefits: more flexible than inheritance, avoids deep class hierarchies, follows OCP, allows stacking multiple behaviors.",
    "TypeScript has built-in decorator support (@decorator syntax) for classes, methods, properties, and parameters."
  ],
  "laymanDefinition": "Decorator is like adding toppings to ice cream. You start with plain vanilla ice cream (base object). You add chocolate syrup (a decorator — adds flavor). Then sprinkles (another decorator — adds texture). Each topping adds something, and you can stack them in any order. The ice cream is still ice cream (same interface), just enhanced.",
  "deepDive": [
    {
      "heading": "Decorator vs Inheritance",
      "text": "Inheritance: behavior defined at compile time, static, leads to class explosion (Coffee, CoffeeWithMilk, CoffeeWithSugar, CoffeeWithMilkAndSugar...). Decorator: behavior added at runtime, flexible, each decorator adds one concern. Composition over inheritance in action."
    },
    {
      "heading": "Decorator Structure",
      "text": "Component: the common interface. ConcreteComponent: the base object being wrapped. Decorator: maintains reference to a Component and conforms to Component interface. ConcreteDecorator: adds behavior before/after calling the wrapped component\\'s methods."
    },
    {
      "heading": "TypeScript Decorators",
      "text": "Experimental feature in TypeScript. Class decorators: @sealed, @logger. Method decorators: @log, @throttle, @memoize. Property decorators: @readonly, @format. Accessor decorators: @configurable. Parameter decorators: @inject. Decorators are functions that receive metadata and can modify behavior."
    },
    {
      "heading": "Stacking Decorators",
      "text": "Multiple decorators can be applied to the same object. Each decorator wraps the previous one, creating a chain. Decorators execute from top to bottom (order matters). Example: ReadStream -> GzipDecryptor -> AESDecryptor -> FileSource. Each layer adds/removes functionality."
    },
    {
      "heading": "Real-World Decorator Examples",
      "text": "Express.js middleware: each middleware (logger, auth, parser, router) wraps the next. Node.js streams: Gzip, Crypto, and Transform streams wrap readable/writable streams. React Higher-Order Components (HOCs): withAuth, withLogger, withTheme wrap components."
    }
  ],
  "interviewAnswer": "Decorator dynamically adds behavior to objects at runtime. More flexible than inheritance for extending functionality. Stack multiple decorators for combined behavior. TypeScript has native @decorator support. Examples: Express middleware, Node.js streams, React HOCs.",
  "interviewQuestions": [
    {
      "question": "What is the Decorator pattern?",
      "answer": "Attaches additional responsibilities to an object dynamically at runtime. Alternative to subclassing."
    },
    {
      "question": "How is Decorator different from inheritance?",
      "answer": "Decorator: runtime composition, flexible. Inheritance: compile-time, static, can lead to class explosion."
    },
    {
      "question": "What is the structure?",
      "answer": "Component (interface), ConcreteComponent (base), Decorator (wrapper reference), ConcreteDecorators (added behavior)."
    },
    {
      "question": "What is a TypeScript decorator?",
      "answer": "A special function that can modify classes, methods, properties, or parameters at design time."
    },
    {
      "question": "Can you stack decorators?",
      "answer": "Yes. Each decorator wraps the previous one, creating a chain of added behaviors."
    },
    {
      "question": "What is an example of decorator in Express?",
      "answer": "Middleware: app.use(logger) wraps app.use(parser) wraps app.use(router). Each adds behavior."
    },
    {
      "question": "What is a React HOC?",
      "answer": "Higher-Order Component — a function that takes a component and returns a new component with added features."
    },
    {
      "question": "What is the open/closed benefit of decorator?",
      "answer": "Add new behavior by creating new decorator classes — no existing code modification needed."
    },
    {
      "question": "What is the Decorator pattern also called?",
      "answer": "Wrapper. It \"wraps\" an object to add behavior."
    },
    {
      "question": "What problem does Decorator solve?",
      "answer": "Class explosion from combining multiple behaviors via inheritance (CoffeeWithMilkAndSugarAndWhip)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Decorator Pattern</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Component</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interface</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Base Object</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Concrete</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Decorator A</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wraps + adds</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Decorator B</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Wraps + adds</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Decorator Pattern</text><text x=\"275\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamically add behavior to objects at ru</text><text x=\"275\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ntime. Stackable wrappers. Alternative to</text><text x=\"275\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> inheritance.</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Decorator: Attach additional responsibilities dyna</text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">mically. Stackable, flexible, follows OCP.</text></svg>",
  "codeExamples": [
    {
      "title": "Custom Decorator (JavaScript)",
      "useCase": "Wrapping objects at runtime.",
      "code": "class Coffee {\n  cost() { return 5; }\n  description() { return \"Coffee\"; }\n}\n\nclass MilkDecorator {\n  constructor(coffee) { this.coffee = coffee; }\n  cost() { return this.coffee.cost() + 2; }\n  description() {\n    return this.coffee.description() + \", Milk\";\n  }\n}\nclass SugarDecorator {\n  constructor(coffee) { this.coffee = coffee; }\n  cost() { return this.coffee.cost() + 1; }\n  description() {\n    return this.coffee.description() + \", Sugar\";\n  }\n}\nclass WhippedCreamDecorator {\n  constructor(coffee) { this.coffee = coffee; }\n  cost() { return this.coffee.cost() + 3; }\n  description() {\n    return this.coffee.description() + \", Whipped Cream\";\n  }\n}\nconst coffee = new WhippedCreamDecorator(\n  new SugarDecorator(new MilkDecorator(new Coffee()))\n);\nconsole.log(coffee.description(), \"$\" + coffee.cost());",
      "description": "Decorator: each decorator wraps the previous, adding cost and description. Order matters."
    },
    {
      "title": "TypeScript Method Decorator",
      "useCase": "@log decorator.",
      "code": "function log(target, key, descriptor) {\n  const original = descriptor.value;\n  descriptor.value = function(...args) {\n    console.log(`Calling ${key} with`, args);\n    const result = original.apply(this, args);\n    console.log(`  ${key} returned`, result);\n    return result;\n  };\n  return descriptor;\n}\n\nclass Calculator {\n  @log\n  add(a, b) { return a + b; }\n\n  @log\n  multiply(a, b) { return a * b; }\n}\n\nconst calc = new Calculator();\ncalc.add(2, 3); // logs: Calling add with [2, 3], add returned 5",
      "description": "TypeScript method decorator @log intercepts method calls, logging arguments and return values."
    },
    {
      "title": "Express Middleware as Decorators",
      "useCase": "Middleware chain pattern.",
      "code": "const express = require(\"express\");\nconst app = express();\n\n// Each middleware wraps the next (decorator pattern)\napp.use((req, res, next) => {\n  console.log(\"1. Logger middleware\");\n  next();\n});\napp.use((req, res, next) => {\n  console.log(\"2. Auth middleware\");\n  if (req.headers.authorization) {\n    next();\n  } else {\n    res.status(401).send(\"Unauthorized\");\n  }\n});\napp.get(\"/data\", (req, res) => {\n  console.log(\"3. Handler\");\n  res.json({ data: \"protected\" });\n});",
      "description": "Express middleware follows decorator pattern — each middleware wraps the next function."
    },
    {
      "title": "React Higher-Order Component",
      "useCase": "HOC decorator example.",
      "code": "function withAuth(WrappedComponent) {\n  return function WithAuth(props) {\n    const user = useCurrentUser();\n    if (!user) {\n      return <Redirect to=\"/login\" />;\n    }\n    return <WrappedComponent {...props} user={user} />;\n  };\n}\n\nfunction withLogger(WrappedComponent) {\n  return function WithLogger(props) {\n    useEffect(() => {\n      console.log(\"Component rendered:\", WrappedComponent.name);\n    });\n    return <WrappedComponent {...props} />;\n  };\n}\n\n// Stack decorators:\nconst EnhancedDashboard = withLogger(withAuth(Dashboard));",
      "description": "React HOCs are decorators that wrap components with additional behavior (auth, logging)."
    },
    {
      "title": "Node.js Stream Transform",
      "useCase": "Stream decorator example.",
      "code": "const { Transform } = require(\"stream\");\n\nclass UpperCaseTransform extends Transform {\n  _transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n}\n\nclass TimestampTransform extends Transform {\n  _transform(chunk, encoding, callback) {\n    this.push(`[${new Date().toISOString()}] ${chunk}`);\n    callback();\n  }\n}\n\nconst { pipeline } = require(\"stream\");\npipeline(\n  process.stdin,\n  new TimestampTransform(), // decorator\n  new UpperCaseTransform(), // decorator\n  process.stdout,\n  (err) => console.log(\"Done\", err)\n);",
      "description": "Node.js Transform streams act as decorators, transforming data as it passes through."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does the Decorator pattern do?",
      "options": [
        "Creates objects",
        "Adds behavior dynamically at runtime",
        "Destroys objects",
        "Manages memory"
      ],
      "answer": 1,
      "explanation": "Decorator adds responsibilities to objects dynamically at runtime."
    },
    {
      "question": "How is Decorator better than inheritance for behavior?",
      "options": [
        "It is slower",
        "More flexible, avoids class explosion",
        "Less flexible",
        "More complex"
      ],
      "answer": 1,
      "explanation": "Decorator is more flexible — compose behaviors at runtime instead of creating many subclasses."
    },
    {
      "question": "What is a TypeScript decorator?",
      "options": [
        "A new data type",
        "A function that modifies classes/methods",
        "A design pattern for databases",
        "A testing utility"
      ],
      "answer": 1,
      "explanation": "TypeScript decorators are functions that can modify classes, methods, properties, or parameters."
    },
    {
      "question": "What Express feature uses decorator pattern?",
      "options": [
        "Routing",
        "Middleware",
        "Database",
        "Templates"
      ],
      "answer": 1,
      "explanation": "Express middleware follows the decorator pattern — each wraps the next."
    },
    {
      "question": "What is a React HOC?",
      "options": [
        "A HTML component",
        "A function that wraps a component to add behavior",
        "A CSS framework",
        "A state manager"
      ],
      "answer": 1,
      "explanation": "Higher-Order Components wrap components to add behavior (like decorators)."
    },
    {
      "question": "Can you stack multiple decorators?",
      "options": [
        "No",
        "Yes, each wraps the previous",
        "Only in TypeScript",
        "Only two maximum"
      ],
      "answer": 1,
      "explanation": "Multiple decorators can be stacked, each wrapping the previous one."
    }
  ]
};
