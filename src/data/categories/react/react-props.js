export const react_props = {
  "id": "react-props",
  "title": "React Props",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Props are read-only data passed from parent to child component.",
    "Props flow downward - unidirectional data flow. Children cannot modify props.",
    "Props can be any JS value: strings, numbers, booleans, objects, arrays, functions, or React elements.",
    "Children prop (props.children) represents content between opening and closing tags."
  ],
  "laymanDefinition": "Props are gift boxes from parent to child. The child can open and read the gift, but cannot change it. The child sends messages back by calling functions the parent included (callback functions).",
  "deepDive": [
    {
      "heading": "Unidirectional Data Flow",
      "text": "Data flows from parent to child via props. Makes application predictable. When parent re-renders with new props, child receives updated values and re-renders."
    },
    {
      "heading": "Props Are Read-Only",
      "text": "Component must never modify its own props. Mutable data should be state, managed by the component itself or lifted up."
    },
    {
      "heading": "Children Prop",
      "text": "Special prop containing content between component's opening and closing tags. Enables composition: <Card><p>Content</p></Card>."
    },
    {
      "heading": "Prop Destructuring and Defaults",
      "text": "Modern React destructures props: function User({ name, age = 0 }). Defaults apply when prop is undefined."
    }
  ],
  "interviewAnswer": "Props are the mechanism for passing data from parent to child in React. They are read-only and enable unidirectional data flow. The children prop holds nested JSX content. PropTypes or TypeScript validate props at runtime or compile time.",
  "interviewQuestions": [
    {
      "question": "What are props?",
      "answer": "Read-only arguments passed from parent to child. Can be any JS value."
    },
    {
      "question": "Can a component modify its props?",
      "answer": "No - props are immutable. Use state for mutable data or callbacks for parent communication."
    },
    {
      "question": "What is the children prop?",
      "answer": "Contains content between opening and closing tags. Enables component composition."
    },
    {
      "question": "How to pass functions as props?",
      "answer": "<Child onAction={handleAction} />. Child calls props.onAction(data) to communicate upward."
    },
    {
      "question": "What is prop drilling?",
      "answer": "Passing props through intermediate components that don't use them, just forwarding deeper. Solved by Context API or composition."
    },
    {
      "question": "How to set default prop values?",
      "answer": "Destructure with defaults: function Card({ title = 'Untitled' }),"
    },
    {
      "question": "Difference between props and state?",
      "answer": "Props: from parent, read-only. State: internal, mutable by component."
    },
    {
      "question": "How to validate props?",
      "answer": "PropTypes package for runtime, TypeScript for compile-time."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrD\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker><marker id=\"arrU\" markerWidth=\"10\" markerHeight=\"7\" refX=\"0\" refY=\"3.5\" orient=\"auto\"><polygon points=\"10 0,0 3.5,10 7\" fill=\"#f87171\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"360\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Props Down, Callbacks Up</text><rect x=\"180\" y=\"55\" width=\"340\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"2\"/><text x=\"350\" y=\"78\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Parent Component</text><line x1=\"280\" y1=\"105\" x2=\"160\" y2=\"145\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrD)\"/><line x1=\"420\" y1=\"105\" x2=\"540\" y2=\"145\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrD)\"/><rect x=\"40\" y=\"145\" width=\"240\" height=\"90\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"160\" y=\"168\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Child A</text><rect x=\"55\" y=\"198\" width=\"210\" height=\"26\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"160\" y=\"215\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Receives props, read-only</text><rect x=\"420\" y=\"145\" width=\"240\" height=\"90\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"540\" y=\"168\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Child B</text><rect x=\"435\" y=\"198\" width=\"210\" height=\"26\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"540\" y=\"215\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Reads props, invokes callbacks</text><line x1=\"160\" y1=\"235\" x2=\"280\" y2=\"280\" stroke=\"#f87171\" stroke-width=\"1.5\" marker-end=\"url(#arrU)\"/><line x1=\"540\" y1=\"235\" x2=\"420\" y2=\"280\" stroke=\"#f87171\" stroke-width=\"1.5\" marker-end=\"url(#arrU)\"/><rect x=\"160\" y=\"280\" width=\"380\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"350\" y=\"300\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Callbacks Flow Up: child calls props.onX()</text></svg>",
  "codeExamples": [
    {
      "title": "Props and Children Composition",
      "useCase": "Reusable component",
      "code": "function App() {\n  return (\n    <Card title=\"Welcome\" variant=\"primary\">\n      <p>Card body content</p>\n      <button onClick={handleClick}>Click</button>\n    </Card>\n  );\n}\nfunction Card({ title, variant, children }) {\n  return (\n    <div className={`card card-${variant}`}>\n      <h2>{title}</h2>\n      <div className=\"card-body\">{children}</div>\n    </div>\n  );\n}",
      "description": "Card receives title, variant as props, children as nested content. Parent controls data."
    },
    {
      "title": "Callback Props for Upward Communication",
      "useCase": "Child to parent data flow",
      "code": "function TodoApp() {\n  const [todos, setTodos] = useState([]);\n  function addTodo(text) { setTodos([...todos, { id: Date.now(), text }]); }\n  return (\n    <div>\n      <AddTodo onAdd={addTodo} />\n      <TodoList items={todos} />\n    </div>\n  );\n}\nfunction AddTodo({ onAdd }) {\n  const [text, setText] = useState('');\n  return <div><input value={text} onChange={e => setText(e.target.value)} />\n    <button onClick={() => { onAdd(text); setText(''); }}>Add</button></div>;\n}",
      "description": "Parent passes addTodo as callback. Child calls it to communicate upward."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What are props?",
      "options": [
        "Internal state",
        "Read-only data from parent",
        "Global variables",
        "CSS classes"
      ],
      "answer": 1,
      "explanation": "Props are read-only from parent."
    },
    {
      "question": "Can child modify props?",
      "options": [
        "Yes with setProps()",
        "No - immutable",
        "Only with var",
        "Only in classes"
      ],
      "answer": 1,
      "explanation": "Props are immutable to child."
    },
    {
      "question": "What does children prop contain?",
      "options": [
        "Internal state",
        "Content between tags",
        "Component name",
        "CSS classes"
      ],
      "answer": 1,
      "explanation": "children is content between tags."
    },
    {
      "question": "How to send data from child to parent?",
      "options": [
        "Modify props",
        "Call callback function prop",
        "Use global variable",
        "Throw event"
      ],
      "answer": 1,
      "explanation": "Child calls callback passed as prop."
    },
    {
      "question": "What is prop drilling?",
      "options": [
        "Creating props dynamically",
        "Passing through unused intermediates",
        "Deep validation",
        "Too many props"
      ],
      "answer": 1,
      "explanation": "Passing through layers that don't use them."
    },
    {
      "question": "Props vs state?",
      "options": [
        "Props=class, state=functional",
        "Props=external/readonly, state=internal/mutable",
        "Props=mutable, state=immutable",
        "No difference"
      ],
      "answer": 1,
      "explanation": "Props from parent (read-only), state is internal (mutable)."
    }
  ]
};
