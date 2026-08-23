export const react_prop_drilling = {
  "id": "react-prop-drilling",
  "title": "React Prop Drilling",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Prop drilling is passing props through many intermediate components that don't use them, just to reach deeply nested components.",
    "It creates tight coupling, makes refactoring difficult, and adds unnecessary complexity.",
    "Solutions: Context API, component composition (lifting content up), or state management libraries.",
    "It's not an error - it's a design smell that indicates the architecture needs improvement."
  ],
  "laymanDefinition": "Prop drilling is like passing a message through 10 people in a line to reach the last person. Each person in the middle doesn't need the message, they just pass it along. It works, but it's inefficient and if someone in the middle changes, the whole chain breaks. Better to just call or text the last person directly (Context API).",
  "deepDive": [
    {
      "heading": "What Is Prop Drilling?",
      "text": "When a parent component passes a prop to a child, which passes it to its child, and so on, through several levels, just to reach a deeply nested component that actually uses the prop. Intermediate components act as mere pass-through conduits."
    },
    {
      "heading": "Why It's a Problem",
      "text": "1. Tight coupling: intermediate components must know about and forward props they don't use. 2. Refactoring burden: adding a prop means updating every intermediate component. 3. Reduced component reusability: pass-through components are tied to specific parent-child data paths."
    },
    {
      "heading": "Solution 1: Context API",
      "text": "React.createContext creates a context. A Provider (at any level) supplies the value. Any descendant Consumer or useContext hook accesses it directly, skipping intermediate components."
    },
    {
      "heading": "Solution 2: Component Composition",
      "text": "Instead of passing props through layers, lift the relevant JSX up. The parent renders the deeply nested content and passes it as children or a render prop, eliminating the need for prop drilling."
    }
  ],
  "interviewAnswer": "Prop drilling is passing props through components that don't need them, solely to reach deeper components. It's not a bug but a design smell. Solutions: Context API (direct access to values), component composition (pass JSX as children), or state management libraries (Redux, Zustand). Prop drilling makes refactoring hard and couples components unnecessarily.",
  "interviewQuestions": [
    {
      "question": "What is prop drilling?",
      "answer": "Passing props through multiple intermediate components that don't use them, just to reach deeply nested components."
    },
    {
      "question": "Why is prop drilling bad?",
      "answer": "Tight coupling, difficult refactoring, reduced reusability, unnecessary complexity in intermediate components."
    },
    {
      "question": "How does Context API solve prop drilling?",
      "answer": "Provider supplies value at any level. Descendants use useContext to access it directly, bypassing all intermediates."
    },
    {
      "question": "How does component composition help?",
      "answer": "The parent renders the content directly and passes it as children/render prop, eliminating the need to drill."
    },
    {
      "question": "What is a pass-through component?",
      "answer": "A component that receives props only to forward them to a child, without using them itself."
    },
    {
      "question": "When is prop drilling acceptable?",
      "answer": "For shallow hierarchies (1-2 levels), small apps, or when prototyping. Refactor to Context when it grows."
    },
    {
      "question": "Does Redux eliminate prop drilling?",
      "answer": "Yes - Redux store is accessible from any connected component via useSelector/connect, skipping intermediate components."
    },
    {
      "question": "How to identify prop drilling in code review?",
      "answer": "Look for components that accept many props but don't use them in their own JSX - just pass them deeper."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrP\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#f87171\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"380\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Prop Drilling vs Context API</text><rect x=\"40\" y=\"55\" width=\"290\" height=\"300\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"185\" y=\"78\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Prop Drilling</text><rect x=\"55\" y=\"90\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"185\" y=\"110\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Page (owns data) -- passes prop</text><line x1=\"185\" y1=\"122\" x2=\"185\" y2=\"140\" stroke=\"#f87171\" stroke-width=\"1.5\" marker-end=\"url(#arrP)\"/><rect x=\"55\" y=\"140\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"185\" y=\"160\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Section (passes through)</text><line x1=\"185\" y1=\"172\" x2=\"185\" y2=\"190\" stroke=\"#f87171\" stroke-width=\"1.5\" marker-end=\"url(#arrP)\"/><rect x=\"55\" y=\"190\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"185\" y=\"210\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Card (passes through)</text><line x1=\"185\" y1=\"222\" x2=\"185\" y2=\"240\" stroke=\"#f87171\" stroke-width=\"1.5\" marker-end=\"url(#arrP)\"/><rect x=\"55\" y=\"240\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"185\" y=\"260\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Button (actually uses prop)</text><rect x=\"370\" y=\"55\" width=\"290\" height=\"300\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"515\" y=\"78\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Context API</text><rect x=\"385\" y=\"90\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"110\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Page owns data + Provider</text><line x1=\"450\" y1=\"122\" x2=\"450\" y2=\"240\" stroke=\"#34d399\" stroke-width=\"1.5\" stroke-dasharray=\"4\" marker-end=\"url(#arrP)\"/><rect x=\"385\" y=\"140\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"160\" fill=\"#9aa0b0\" font-size=\"11\" text-anchor=\"middle\">Section (no props needed)</text><rect x=\"385\" y=\"190\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"210\" fill=\"#9aa0b0\" font-size=\"11\" text-anchor=\"middle\">Card (no props needed)</text><rect x=\"385\" y=\"240\" width=\"260\" height=\"32\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"515\" y=\"260\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">Button (uses useContext directly)</text></svg>",
  "codeExamples": [
    {
      "title": "Prop Drilling Example",
      "useCase": "Demonstrating the problem",
      "code": "function Page() {\n  const [user, setUser] = useState(null);\n  return <MainSection user={user} setUser={setUser} />;\n}\nfunction MainSection({ user, setUser }) {\n  return <ContentCard user={user} setUser={setUser} />;\n}\nfunction ContentCard({ user, setUser }) {\n  return <UserButton user={user} setUser={setUser} />;\n}\nfunction UserButton({ user, setUser }) {\n  return <button onClick={() => setUser({ name: 'Alice' })}>{user?.name}</button>;\n}",
      "description": "MainSection and ContentCard don't use user/setUser - they only forward props. This is prop drilling."
    },
    {
      "title": "Context API Fix",
      "useCase": "Eliminating drilling",
      "code": "const UserContext = createContext();\nfunction Page() {\n  const [user, setUser] = useState(null);\n  return (\n    <UserContext.Provider value={{ user, setUser }}>\n      <MainSection />\n    </UserContext.Provider>\n  );\n}\nfunction MainSection() { return <ContentCard />; }\nfunction ContentCard() { return <UserButton />; }\nfunction UserButton() {\n  const { user, setUser } = useContext(UserContext);\n  return <button onClick={() => setUser({ name: 'Alice' })}>{user?.name}</button>;\n}",
      "description": "Context provides user/setUser to any descendant. MainSection and ContentCard are clean - no props to forward."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is prop drilling?",
      "options": [
        "Optimizing props",
        "Passing props through unused intermediates",
        "Creating new props",
        "Validating props"
      ],
      "answer": 1,
      "explanation": "Props pass through components that don't use them."
    },
    {
      "question": "Why is prop drilling problematic?",
      "options": [
        "Faster performance",
        "Tight coupling and hard refactoring",
        "Better reusability",
        "Simpler code"
      ],
      "answer": 1,
      "explanation": "Causes coupling and refactoring burden."
    },
    {
      "question": "How does Context API solve it?",
      "options": [
        "By providing values directly to descendants",
        "By removing all props",
        "By using global variables",
        "By caching requests"
      ],
      "answer": 0,
      "explanation": "Provider makes value available to any descendant."
    },
    {
      "question": "What is component composition?",
      "options": [
        "Passing JSX as children instead of drilling props through layers",
        "Merging components",
        "Creating HOCs",
        "Using render props"
      ],
      "answer": 0,
      "explanation": "Parent provides rendered content directly."
    },
    {
      "question": "When is prop drilling acceptable?",
      "options": [
        "For deeply nested components",
        "For shallow hierarchies during prototyping",
        "Always",
        "Never"
      ],
      "answer": 1,
      "explanation": "Acceptable for shallow or temporary code."
    },
    {
      "question": "How to identify prop drilling?",
      "options": [
        "Components using all props",
        "Components accepting props they don't use",
        "Components with no props",
        "Components with useRef"
      ],
      "answer": 1,
      "explanation": "Look for unused intermediate props."
    }
  ]
};
