export const react_controlled_components = {
  "id": "react-controlled-components",
  "title": "React Controlled Components",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "A controlled component has its value controlled by React state rather than the DOM.",
    "The input's value is set by state, and changes are handled via onChange.",
    "The single source of truth is React state, not the DOM.",
    "Controlled components give React full control over form inputs."
  ],
  "laymanDefinition": "Think of controlled components like a puppeteer controlling a puppet. The puppeteer (React) directly controls every movement of the puppet (input value). The puppet cannot move on its own - every change must go through the puppeteer. This gives the puppeteer complete control over what the puppet does.",
  "deepDive": [
    {
      "heading": "What Is a Controlled Component?",
      "text": "A form element (<input>, <textarea>, <select>) whose value is controlled by React state. The component stores the current value in state and updates it via onChange. React becomes the single source of truth."
    },
    {
      "heading": "How It Works",
      "text": "1. State holds the current value (e.g., useState('')). 2. The input's value prop is set to the state variable. 3. onChange handler calls the setter with e.target.value. 4. React re-renders with the new value."
    },
    {
      "heading": "Benefits Over Uncontrolled",
      "text": "Instant validation, conditional disabling, dynamic formatting, reset capability, and the ability to react to every keystroke. The entire form state is predictable and testable."
    },
    {
      "heading": "Common Patterns",
      "text": "Multiple inputs use a single onChange handler with computed property names. Checkboxes use checked prop instead of value. Select dropdowns use the same value/onChange pattern."
    }
  ],
  "interviewAnswer": "A controlled component is a form element whose value is driven by React state. The input's value prop is bound to state, and onChange updates that state. This gives React full control over the input, enabling instant validation, formatting, and conditional rendering. React is the single source of truth.",
  "interviewQuestions": [
    {
      "question": "What is a controlled component?",
      "answer": "A form input whose value is controlled by React state via value prop and onChange handler."
    },
    {
      "question": "How does it differ from uncontrolled?",
      "answer": "Controlled: state manages value. Uncontrolled: input manages its own state internally, accessed via ref."
    },
    {
      "question": "What is the single source of truth?",
      "answer": "React state. The DOM input value always reflects the state value, not vice versa."
    },
    {
      "question": "How to handle multiple inputs?",
      "answer": "Use computed property names: const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });"
    },
    {
      "question": "Why use controlled components?",
      "answer": "Instant validation, conditional formatting, reset capability, predictable state, easier testing."
    },
    {
      "question": "How to handle checkboxes and selects?",
      "answer": "Checkbox: checked={isChecked} onChange={handleCheckbox}. Select: value={selected} onChange={handleSelect}."
    },
    {
      "question": "Performance concerns with many inputs?",
      "answer": "For large forms, debounce onChange, use refs for read-only fields, or use libraries like Formik/React Hook Form."
    },
    {
      "question": "Can you mix controlled and uncontrolled?",
      "answer": "No - React warns if an input switches between controlled and uncontrolled. Choose one pattern per input."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 340\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrC\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"320\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Controlled Component Data Flow</text><rect x=\"40\" y=\"55\" width=\"280\" height=\"100\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">React State</text><rect x=\"55\" y=\"90\" width=\"250\" height=\"26\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"180\" y=\"107\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">const [value, setValue] = useState('')</text><line x1=\"180\" y1=\"155\" x2=\"180\" y2=\"185\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#arrC)\"/><rect x=\"40\" y=\"185\" width=\"280\" height=\"110\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"180\" y=\"208\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Input Element</text><rect x=\"55\" y=\"220\" width=\"250\" height=\"26\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"180\" y=\"237\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">&lt;input value={value} /&gt;</text><rect x=\"55\" y=\"252\" width=\"250\" height=\"26\" rx=\"3\" fill=\"#2a2f45\"/><text x=\"180\" y=\"269\" fill=\"#e8eaed\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">onChange={e =&gt; setValue(e.target.value)}</text><path d=\"M 320 110 Q 450 110 450 185 L 320 240\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\" marker-end=\"url(#arrC)\"/><text x=\"400\" y=\"145\" fill=\"#f87171\" font-size=\"9\" text-anchor=\"middle\">user types</text><text x=\"400\" y=\"210\" fill=\"#6c9fff\" font-size=\"9\" text-anchor=\"middle\">new value applied</text></svg>",
  "codeExamples": [
    {
      "title": "Controlled Input with Validation",
      "useCase": "Form with real-time validation",
      "code": "function EmailInput() {\n  const [email, setEmail] = useState('');\n  const [error, setError] = useState('');\n\n  function handleChange(e) {\n    const value = e.target.value;\n    setEmail(value);\n    if (value && !value.includes('@')) {\n      setError('Invalid email address');\n    } else {\n      setError('');\n    }\n  }\n\n  return (\n    <div>\n      <input type=\"email\" value={email} onChange={handleChange} />\n      {error && <span style={{color:'red'}}>{error}</span>}\n      <button disabled={!!error || !email}>Submit</button>\n    </div>\n  );\n}",
      "description": "State controls both the value and validation. The input cannot change without going through React."
    },
    {
      "title": "Multiple Controlled Inputs",
      "useCase": "Form with many fields",
      "code": "function SignupForm() {\n  const [form, setForm] = useState({ name: '', email: '', age: '' });\n\n  function handleChange(e) {\n    const { name, value } = e.target;\n    setForm(prev => ({ ...prev, [name]: value }));\n  }\n\n  return (\n    <form>\n      <input name=\"name\" value={form.name} onChange={handleChange} placeholder=\"Name\" />\n      <input name=\"email\" value={form.email} onChange={handleChange} placeholder=\"Email\" />\n      <input name=\"age\" type=\"number\" value={form.age} onChange={handleChange} placeholder=\"Age\" />\n    </form>\n  );\n}",
      "description": "Computed property name [e.target.name] maps each input to its state key. Single handler manages all inputs."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a controlled component?",
      "options": [
        "Input managed by DOM",
        "Input value controlled by React state",
        "Input with default value",
        "Input without onChange"
      ],
      "answer": 1,
      "explanation": "React state controls the input value."
    },
    {
      "question": "How does a controlled input update?",
      "options": [
        "Direct DOM manipulation",
        "State setter via onChange handler",
        "Browser auto-fill",
        "Ref assignment"
      ],
      "answer": 1,
      "explanation": "onChange handler calls state setter."
    },
    {
      "question": "What is the single source of truth?",
      "options": [
        "The DOM",
        "React state",
        "The browser",
        "The input element"
      ],
      "answer": 1,
      "explanation": "React state is the single source of truth."
    },
    {
      "question": "What happens if value is set but onChange is missing?",
      "options": [
        "Works fine",
        "React warns and input is read-only",
        "Error thrown",
        "Input becomes uncontrolled"
      ],
      "answer": 1,
      "explanation": "Without onChange, input is effectively read-only."
    },
    {
      "question": "Why use controlled over uncontrolled?",
      "options": [
        "Easier validation, formatting, and reset",
        "Better performance",
        "Less code required",
        "No state management needed"
      ],
      "answer": 0,
      "explanation": "Controlled gives full control over input behavior."
    },
    {
      "question": "How to handle multiple inputs?",
      "options": [
        "Separate handler per input",
        "Computed property names with name attr",
        "Global event listener",
        "Inline functions"
      ],
      "answer": 1,
      "explanation": "Use [e.target.name] with a single handler."
    }
  ]
};
