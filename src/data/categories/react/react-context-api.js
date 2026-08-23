export const react_context_api = {
  "id": "react-context-api",
  "title": "React Context API",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Context API provides a way to share values across the component tree without prop drilling.",
    "createContext creates a context object. Provider makes the value available. useContext (or Consumer) reads it.",
    "Context is designed for shared global data: theme, user auth, locale, UI state.",
    "Context triggers re-render in all consumers when the value changes."
  ],
  "laymanDefinition": "Context API is like a radio broadcast tower. The Provider is the transmitter broadcasting a signal (the value). Any radio (component) within range can tune in (useContext) and hear the broadcast without needing a direct wire from the broadcast studio. Components between the tower and the radio don't need to relay the signal.",
  "deepDive": [
    {
      "heading": "createContext and Provider",
      "text": "createContext(defaultValue) creates a context object. The Provider component wraps a subtree and accepts a value prop. All descendants can access this value via useContext or Context.Consumer."
    },
    {
      "heading": "useContext Hook",
      "text": "useContext(MyContext) returns the current context value. It's the modern way to consume context in functional components. The component re-renders when the context value changes."
    },
    {
      "heading": "When to Use Context",
      "text": "Theme (light/dark), user authentication state, locale/language, UI state (sidebar open/close), feature flags. NOT for data that changes frequently at high volume (use Redux or Zustand instead)."
    },
    {
      "heading": "Performance Considerations",
      "text": "Context re-renders ALL consumers when the value changes, even if they only read a subset. Split contexts to avoid unnecessary re-renders: separate ThemeContext from UserContext from LocaleContext."
    },
    {
      "heading": "Context vs State Management",
      "text": "Context is not a state management tool - it's a dependency injection mechanism. You still need useState or useReducer to manage the value. Redux/Zustand provide managed stores with selectors to avoid unnecessary re-renders."
    }
  ],
  "interviewAnswer": "React Context API enables sharing values across the component tree without prop drilling. createContext creates a context, Provider supplies the value, and useContext reads it in any descendant. Context is ideal for global data like theme, auth, and locale that doesn't change at high frequency. For frequently changing data, use state management with selector-based subscriptions to avoid re-rendering all consumers.",
  "interviewQuestions": [
    {
      "question": "What is Context API?",
      "answer": "A React feature for sharing values across the component tree without passing props through intermediate components."
    },
    {
      "question": "What are the three parts of Context?",
      "answer": "createContext (creates context), Provider (supplies value), useContext/Consumer (reads value)."
    },
    {
      "question": "When should you use Context?",
      "answer": "Global data that many components need: theme, auth, locale, UI state. Not for frequently changing data."
    },
    {
      "question": "How does useContext work?",
      "answer": "const value = useContext(MyContext). Returns the current context value. Component re-renders on value change."
    },
    {
      "question": "What happens when context value changes?",
      "answer": "All consumers (components using useContext) re-render. React does not skip consumers even if they use part of the value."
    },
    {
      "question": "How to optimize context performance?",
      "answer": "Split contexts by concern (ThemeContext, UserContext). Use useMemo for the value object to prevent unnecessary re-renders."
    },
    {
      "question": "Is Context a state management solution?",
      "answer": "No - it's dependency injection. You pair it with useState/useReducer to provide state. Redux has selectors to prevent unnecessary re-renders."
    },
    {
      "question": "What is the defaultValue parameter?",
      "answer": "The value used when a component reads context outside of a Provider. Useful for testing or optional contexts."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrCtx\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Context API Architecture</text><rect x=\"150\" y=\"55\" width=\"400\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"2\"/><text x=\"350\" y=\"78\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Provider: &lt;ThemeContext.Provider value={theme}&gt;</text><rect x=\"50\" y=\"125\" width=\"600\" height=\"80\" rx=\"6\" fill=\"#1a1d28\" stroke=\"var(--border)\"/><text x=\"350\" y=\"148\" fill=\"#9aa0b0\" font-size=\"11\" text-anchor=\"middle\">Intermediate Components (no props needed)</text><rect x=\"65\" y=\"158\" width=\"130\" height=\"36\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"130\" y=\"180\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Header</text><rect x=\"215\" y=\"158\" width=\"130\" height=\"36\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"280\" y=\"180\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Sidebar</text><rect x=\"365\" y=\"158\" width=\"130\" height=\"36\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"430\" y=\"180\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Main</text><rect x=\"515\" y=\"158\" width=\"130\" height=\"36\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"580\" y=\"180\" fill=\"#e8eaed\" font-size=\"10\" text-anchor=\"middle\">Footer</text><line x1=\"350\" y1=\"205\" x2=\"350\" y2=\"240\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrCtx)\"/><rect x=\"50\" y=\"240\" width=\"600\" height=\"90\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"263\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Consumers (useContext access Provider value)</text><rect x=\"65\" y=\"275\" width=\"250\" height=\"40\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"190\" y=\"297\" fill=\"#e8eaed\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">const theme = useContext(ThemeContext)</text><rect x=\"385\" y=\"275\" width=\"250\" height=\"40\" rx=\"4\" fill=\"#2a2f45\"/><text x=\"510\" y=\"297\" fill=\"#e8eaed\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">&lt;ThemeContext.Consumer&gt;{...}</text><rect x=\"200\" y=\"355\" width=\"300\" height=\"35\" rx=\"6\" fill=\"#2a2f45\" stroke=\"#e5c07b\" stroke-width=\"1\"/><text x=\"350\" y=\"378\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Value change re-renders ALL consumers</text></svg>",
  "codeExamples": [
    {
      "title": "Theme Context with Toggle",
      "useCase": "Global theme switching",
      "code": "const ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      <Page />\n    </ThemeContext.Provider>\n  );\n}\nfunction ThemedButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button onClick={toggleTheme}\n      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>\n      Current: {theme}\n    </button>\n  );\n}",
      "description": "App owns theme state and provides it via context. ThemedButton reads and toggles theme without prop drilling."
    },
    {
      "title": "Multiple Contexts for Separation",
      "useCase": "Avoiding unnecessary re-renders",
      "code": "const UserContext = createContext(null);\nconst ThemeContext = createContext('light');\n\nfunction App() {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <UserContext.Provider value={{ user, setUser }}>\n        <Dashboard />\n      </UserContext.Provider>\n    </ThemeContext.Provider>\n  );\n}\nfunction ThemeToggle() {\n  const theme = useContext(ThemeContext); // only re-renders when theme changes\n  return <button className={theme}>Toggle</button>;\n}\nfunction UserAvatar() {\n  const { user } = useContext(UserContext); // only re-renders when user changes\n  return <span>{user?.name}</span>;\n}",
      "description": "Separate contexts prevent components from re-rendering when unrelated state changes. ThemeToggle won't re-render when user changes."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Context API solve?",
      "options": [
        "Styling issues",
        "Prop drilling",
        "Performance",
        "Bundle size"
      ],
      "answer": 1,
      "explanation": "Context eliminates prop drilling."
    },
    {
      "question": "What are the three parts of Context?",
      "options": [
        "State, props, children",
        "createContext, Provider, useContext",
        "Component, Element, Instance",
        "Store, reducer, dispatch"
      ],
      "answer": 1,
      "explanation": "createContext, Provider, useContext."
    },
    {
      "question": "When to use Context?",
      "options": [
        "Theme, auth, locale",
        "Local form state",
        "Input validation",
        "Animation state"
      ],
      "answer": 0,
      "explanation": "Context is for global shared values."
    },
    {
      "question": "What happens when context value changes?",
      "options": [
        "Nothing",
        "All consumers re-render",
        "Only Provider re-renders",
        "Only first consumer re-renders"
      ],
      "answer": 1,
      "explanation": "All consumers re-render on value change."
    },
    {
      "question": "How to optimize context performance?",
      "options": [
        "Use one big context",
        "Split contexts by concern",
        "Don't use context at all",
        "Use useReducer"
      ],
      "answer": 1,
      "explanation": "Split into multiple small contexts."
    },
    {
      "question": "Is Context a state management solution?",
      "options": [
        "Yes",
        "No - it's dependency injection with useState/useReducer",
        "Only with Redux",
        "Only for classes"
      ],
      "answer": 1,
      "explanation": "Context is dependency injection, not state management."
    }
  ]
};
