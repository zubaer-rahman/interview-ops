export const react_testing = {
  "id": "react-testing",
  "title": "React Testing Library",
  "difficulty": "intermediate",
  "estimatedMinutes": 30,
  "tldr": [
    "React Testing Library (RTL) is a testing utility focused on testing components as users interact with them.",
    "Guiding principle: test behavior, not implementation. Query elements by accessibility (role, label, text), not internal details.",
    "RTL integrates with Jest or Vitest. Key helpers: render(), screen, fireEvent, waitFor, act.",
    "Avoid testing internal state, prop types, or implementation details — test rendered output and user interactions."
  ],
  "laymanDefinition": "React Testing Library is like a robot user who tests your app by doing what a real person would do: clicking buttons, typing into fields, reading text on screen. It never looks at the internal wiring of your components (state, props). If the robot can complete the task by interacting with the UI the same way a human would, the test passes. This means your tests break only when functionality actually breaks — not when you refactor internal code.",
  "deepDive": [
    {
      "heading": "Core Philosophy: Testing by Behavior",
      "text": "RTL's guiding principle is \"the more your tests resemble the way your software is used, the more confidence they can give you.\" Query elements by accessibility roles (button, textbox, heading), label text, aria attributes, or displayed text. Never query by component name, state variable, or CSS class. Use getByRole as the primary query (most accessible), then getByLabelText, getByPlaceholderText, getByText, getByDisplayValue. Use queryBy for non-existence checks. Use findBy for async elements that appear after a delay."
    },
    {
      "heading": "Rendering and Querying",
      "text": "render(<MyComponent props={...} />) renders into a DOM container. screen.getByRole('button', { name: /submit/i }) finds the submit button. screen.getByLabelText(/email/i) finds input associated with an email label. screen.getByText('Hello World') finds text elements. screen.getByTestId('my-id') is the escape hatch — prefer accessible queries first. Multiple matches throw an error; use getAllBy for multiple expected matches. screen.debug() prints the current DOM for debugging."
    },
    {
      "heading": "User Interactions and Events",
      "text": "fireEvent.click(element) dispatches DOM events. For realistic interactions, prefer @testing-library/user-event: const user = userEvent.setup(); await user.click(button); await user.type(input, 'text'); await user.selectOptions(select, 'option'). user-event fires more realistic event sequences (focus, blur, keyDown, keyUp, click, change) compared to raw fireEvent. Always await user-event methods since they return promises."
    },
    {
      "heading": "Async Patterns: waitFor and findBy",
      "text": "For testing asynchronous UI (loading states, data fetching), use screen.findByRole('button', { name: /submit/i }) which returns a promise that resolves when the element appears (default timeout 1000ms). Alternatively, await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument()). For negative assertions, use waitFor with expect to eventually evaluate. Mock API calls with msw (Mock Service Worker) for realistic network mocking."
    },
    {
      "heading": "Mocking and Best Practices",
      "text": "Mock external dependencies: wrap API calls in custom hooks and mock at the hook level. Use msw for network-level mocking — it intercepts actual fetch requests. Mock child components sparingly. Test accessibility: toHaveAccessibleName, toHaveAccessibleDescription. Use jest-dom matchers: toBeInTheDocument(), toHaveTextContent(), toHaveClass(), toBeDisabled(), toBeChecked(). Group tests by user behavior: describe('when user submits form'). Avoid testing internal state — test the UI output instead."
    }
  ],
  "interviewAnswer": "React Testing Library tests components from a user's perspective. The core principle is testing behavior not implementation. Queries prioritize accessibility: getByRole > getByLabelText > getByText > getByTestId. Use fireEvent for simple events, user-event for realistic interactions. Use waitFor/findBy for async. Mock external dependencies with msw (Mock Service Worker). Use jest-dom for custom matchers. Never test internal state, props, or implementation — test what renders and how it responds to interaction. This ensures tests provide real confidence and don't break on refactoring.",
  "interviewQuestions": [
    {
      "question": "What is the guiding philosophy of React Testing Library?",
      "answer": "Test behavior, not implementation. Tests should resemble how the software is used — query by accessibility, interact realistically, assert on visible output. This gives confidence that the app works for users, not just that internal code runs."
    },
    {
      "question": "What are the different query types and their priority order?",
      "answer": "getByRole (most preferred, accessible) → getByLabelText → getByPlaceholderText → getByText → getByDisplayValue → getByAltText → getByTitle → getByTestId (last resort). getBy throws if not found, queryBy returns null, findBy returns a promise for async."
    },
    {
      "question": "How do you test async operations like data fetching?",
      "answer": "Use screen.findByRole() which returns a promise that resolves when the element appears. Or await waitFor(() => expect(...).toBeInTheDocument()). For network mocking, use msw to intercept fetch requests at the network level for the most realistic tests."
    },
    {
      "question": "What is the difference between fireEvent and user-event?",
      "answer": "fireEvent dispatches a single DOM event (e.g., click). user-event simulates the full user interaction sequence: focus, keyDown, keyUp, click, blur, change — more realistic. user-event methods return promises and should be awaited. Prefer user-event for realistic tests."
    },
    {
      "question": "When would you use getByTestId?",
      "answer": "As a last resort when no accessible query works — custom components without roles, non-semantic elements, or dynamically generated content where text/role queries are impractical. Avoid overusing it — it tests implementation details."
    },
    {
      "question": "How do you test form submission?",
      "answer": "Use userEvent.type() for each input, then userEvent.click() the submit button. Assert on the submitted data, navigation, or success message. For forms with validation, test valid and invalid states. Use screen.getByRole('alert') for error messages."
    },
    {
      "question": "What are jest-dom matchers and why use them?",
      "answer": "Custom matchers from @testing-library/jest-dom: toBeInTheDocument(), toHaveTextContent(), toHaveClass(), toBeDisabled(), toBeChecked(), toBeVisible(), etc. They provide better error messages and are more semantic than raw Jest matchers."
    },
    {
      "question": "How do you test a component that uses React Context?",
      "answer": "Render the component wrapped in the Provider with the desired value: render(<ThemeProvider value={theme}><MyComponent /></ThemeProvider>). Alternatively, create a helper that wraps components with common providers. Test that the component renders correctly based on context values."
    },
    {
      "question": "What is the act() utility in testing?",
      "answer": "act() ensures all React updates (state changes, effects) are flushed and applied before assertions. React Testing Library automatically wraps renders and user interactions in act(). Only use it manually for custom scenarios like testing effects outside RTL's scope."
    },
    {
      "question": "How do you test error boundaries?",
      "answer": "Render a component that throws, then assert the fallback UI renders. Use a test helper component that throws on demand. Assert that the error boundary catches the error and displays the fallback using screen.getByRole('alert') or similar."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:650px;\"><defs><marker id=\"tArr\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"630\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"325\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Testing Library Workflow</text><rect x=\"50\" y=\"55\" width=\"180\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"140\" y=\"82\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1. render(component)</text><line x1=\"230\" y1=\"78\" x2=\"290\" y2=\"78\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#tArr)\"/><rect x=\"290\" y=\"55\" width=\"180\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"380\" y=\"82\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">2. Query Elements (getByRole)</text><line x1=\"470\" y1=\"78\" x2=\"530\" y2=\"78\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#tArr)\"/><rect x=\"530\" y=\"55\" width=\"70\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"565\" y=\"82\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3. Interact</text><line x1=\"565\" y1=\"100\" x2=\"565\" y2=\"140\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#tArr)\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"140\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#tArr)\"/><rect x=\"50\" y=\"145\" width=\"550\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"325\" y=\"172\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">4. Assert: expect(element).toBeInTheDocument() / toHaveTextContent() / toBeDisabled()</text><line x1=\"325\" y1=\"190\" x2=\"325\" y2=\"215\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#tArr)\"/><rect x=\"50\" y=\"220\" width=\"550\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"325\" y=\"247\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Key: Test behavior, not implementation — no state/prop checking, query by accessibility</text></svg>",
  "codeExamples": [
    {
      "title": "Testing a Counter Component",
      "useCase": "Basic component interaction",
      "code": "import { render, screen } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport Counter from \"./Counter\";\n\ndescribe(\"Counter\", () => {\n  it(\"increments count when button is clicked\", async () => {\n    const user = userEvent.setup();\n    render(<Counter />);\n    const button = screen.getByRole(\"button\", { name: /increment/i });\n    await user.click(button);\n    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();\n  });\n\n  it(\"decrements count when decrement clicked\", async () => {\n    const user = userEvent.setup();\n    render(<Counter />);\n    await user.click(screen.getByRole(\"button\", { name: /decrement/i }));\n    expect(screen.getByText(/count: -1/i)).toBeInTheDocument();\n  });\n});",
      "description": "Tests simulate user clicks and assert on rendered output. No internal state checking."
    },
    {
      "title": "Testing Form Submission with Async",
      "useCase": "Form with API call",
      "code": "import { render, screen, waitFor } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport { http, HttpResponse } from \"msw\";\nimport { setupServer } from \"msw/node\";\nimport LoginForm from \"./LoginForm\";\n\nconst server = setupServer(\n  http.post(\"/api/login\", () => {\n    return HttpResponse.json({ token: \"abc\" });\n  })\n);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());\n\nit(\"shows success message on valid login\", async () => {\n  const user = userEvent.setup();\n  render(<LoginForm />);\n  await user.type(screen.getByLabelText(/email/i), \"test@test.com\");\n  await user.type(screen.getByLabelText(/password/i), \"password123\");\n  await user.click(screen.getByRole(\"button\", { name: /login/i }));\n  await waitFor(() => {\n    expect(screen.getByText(/welcome/i)).toBeInTheDocument();\n  });\n});",
      "description": "msw intercepts the network request. userEvent provides realistic interaction. waitFor handles async assertions."
    },
    {
      "title": "Testing Accessible Queries",
      "useCase": "Best practice query patterns",
      "code": "// Prefer role queries first\nscreen.getByRole(\"button\", { name: /submit/i });\nscreen.getByRole(\"heading\", { name: /welcome/i });\nscreen.getByRole(\"textbox\", { name: /email/i });\nscreen.getByRole(\"combobox\", { name: /country/i });\nscreen.getByRole(\"alert\"); // error/success messages\nscreen.getByRole(\"progressbar\"); // loading state\n\n// Label association\nscreen.getByLabelText(/email/i);\n\n// Text content\nscreen.getByText(\"Total: $50.00\");\n\n// For non-existence\nexpect(screen.queryByRole(\"alert\")).not.toBeInTheDocument();\n\n// For async appearance\nconst btn = await screen.findByRole(\"button\", { name: /retry/i });",
      "description": "Always prefer the most accessible query. Role queries ensure your components are accessible to screen readers."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the primary query to prefer in React Testing Library?",
      "options": [
        "getByTestId",
        "getByRole",
        "getByClassName",
        "querySelector"
      ],
      "answer": 1,
      "explanation": "getByRole is the most accessible and preferred query. It encourages semantic, accessible components."
    },
    {
      "question": "What does findBy return?",
      "options": [
        "An element or null",
        "A promise that resolves when the element appears",
        "An array of elements",
        "undefined"
      ],
      "answer": 1,
      "explanation": "findBy queries return a promise that resolves when the element appears (with timeout)."
    },
    {
      "question": "What is the purpose of user-event over fireEvent?",
      "options": [
        "Faster execution",
        "More realistic event sequences (focus, blur, key events)",
        "Less code required",
        "Better error messages"
      ],
      "answer": 1,
      "explanation": "user-event simulates the full realistic interaction sequence, not just a single event."
    },
    {
      "question": "What is the best way to mock API calls in RTL tests?",
      "options": [
        "Jest mock for fetch",
        "msw (Mock Service Worker)",
        "Mock component props",
        "jest.mock for axios"
      ],
      "answer": 1,
      "explanation": "msw intercepts at the network level, providing the most realistic test setup without mocking internal code."
    },
    {
      "question": "Which matcher checks if an element exists in the document?",
      "options": [
        "toBeVisible",
        "toBeInTheDocument",
        "toExist",
        "toBePresent"
      ],
      "answer": 1,
      "explanation": "toBeInTheDocument() from jest-dom checks if the element is in the DOM."
    },
    {
      "question": "What should you NOT test with React Testing Library?",
      "options": [
        "Rendered output",
        "User interactions",
        "Accessibility",
        "Internal state and implementation details"
      ],
      "answer": 3,
      "explanation": "RTL philosophy is to test behavior, not implementation — never test state values, prop types, or internal methods."
    },
    {
      "question": "What does render() return in RTL?",
      "options": [
        "A rendered component",
        "An object with container, unmount, and rerender utilities",
        "A DOM element",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "render() returns utilities for container access, unmounting, and re-rendering."
    }
  ]
};
