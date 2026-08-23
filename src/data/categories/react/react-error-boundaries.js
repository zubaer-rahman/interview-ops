export const react_error_boundaries = {
  "id": "react-error-boundaries",
  "title": "React Error Boundaries",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.",
    "They catch errors during rendering, lifecycle methods, and constructors - but NOT event handlers, async code, or SSR.",
    "Error boundaries are implemented as class components with static getDerivedStateFromError() and componentDidCatch().",
    "React 16+ introduced error boundaries; React 18 extends behavior with concurrent mode and Suspense integration."
  ],
  "laymanDefinition": "Error boundaries are like safety nets at a circus. When a trapeze artist falls (a component crashes due to a bug), the safety net catches them and shows a \"We'll be right back!\" sign instead of letting the whole show crash (the entire app going white). Without error boundaries, one component's error crashes the entire React tree, showing a blank page. With error boundaries, only the crashing section is replaced with a fallback UI, and the rest of the app continues working. They are implemented as class components because function components do not yet support componentDidCatch lifecycle.",
  "deepDive": [
    {
      "heading": "Creating an Error Boundary Component",
      "text": "Error boundaries must be class components because they require lifecycle methods that function components do not have: getDerivedStateFromError (static) and componentDidCatch. getDerivedStateFromError receives the error and updates state to show fallback UI. componentDidCatCh receives the error and error info (component stack trace) for logging. The boundary renders this.props.children normally when no error occurred, and a fallback UI when an error is caught. Common practice: create a generic ErrorBoundary component that accepts a fallback prop, and reuse it throughout the app. In React 18, error boundaries work with concurrent mode and Suspense, catching errors from lazy-loaded components. A known limitation: error boundaries do not catch errors in server-side rendering or event handlers (use try-catch in event handlers instead)."
    },
    {
      "heading": "What Error Boundaries Catch vs What They Miss",
      "text": "CAUGHT: (1) Render phase errors - during component function/class render. (2) Lifecycle method errors - componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc. (3) Constructor errors. (4) Errors in lazy-loaded components (Suspense integration). (5) Errors in nested event handlers triggered during commit phase effects (in useLayoutEffect). NOT CAUGHT: (1) Event handler errors (use try-catch). (2) Asynchronous code errors (setTimeout, requestAnimationFrame callbacks) - use .catch(). (3) Server-side rendering errors. (4) Errors thrown in the error boundary itself (these propagate up). (5) Errors in the event propagation phase (native DOM events). For event handlers and async code, use JavaScript try-catch or catch the promise rejection."
    },
    {
      "heading": "Error Recovery Strategies",
      "text": "When an error boundary catches an error, the component tree below it is unmounted. Recovery requires: (1) Resetting the error state to retry rendering. A common pattern: give the fallback UI a \"Try Again\" button that calls this.setState({ hasError: false }). (2) Logging the error to a monitoring service (Sentry, LogRocket, Datadog) in componentDidCatch. (3) For permanent errors, displaying a meaningful error message with support contact info. (4) For transient errors (network failures, chunk load failures), automatic retry with exponential backoff. (5) Granular boundaries - smaller boundaries isolate errors better (a crash in the comments section does not take down the product listing)."
    },
    {
      "heading": "Granular Error Boundary Strategy",
      "text": "The key architectural decision is boundary placement: (1) Root-level boundary - one boundary at the app root catches all errors. Shows a full-page error screen. Use as a last resort to prevent a completely blank page. (2) Feature-level boundaries - each major feature (sidebar, main content, comments, header) gets its own boundary. An error in one feature does not affect others. (3) Component-level boundaries - async components, third-party widgets, and user-generated content each wrapped individually. This isolates crashes to the smallest possible area. (4) Suspense boundary integration - wrap lazy-loaded components with both error boundaries (for chunk load failures) and Suspense (for loading states). The combination provides complete coverage: loading -> Suspense fallback, error -> error boundary fallback, success -> component renders."
    },
    {
      "heading": "React 18 Error Boundary Improvements",
      "text": "React 18 improves error boundaries with: (1) Concurrent mode - error boundaries correctly handle errors during concurrent renders, including render interruptions and resumptions. (2) Suspense integration - error boundaries catch errors from Suspense data fetching (rejected promises). (3) StrictMode double-invocation - in development, React intentionally double-invokes component functions to detect side effects; error boundaries must handle this without logging errors twice. (4) Recoverable errors - in some cases React 18 can recover from errors without unmounting the tree (experimental). (5) The upcoming react-error-boundary library provides a declarative <ErrorBoundary> component with hooks support for common patterns like retry and error logging."
    }
  ],
  "interviewAnswer": "Error boundaries are class components that catch JavaScript errors in their child tree using getDerivedStateFromError (for render fallback) and componentDidCatch (for logging). They catch render, lifecycle, and constructor errors but NOT event handlers, async code, or SSR errors. Use a strategy of granular boundaries: one at each feature level rather than a single root boundary. The fallback UI should include a retry mechanism. Error boundaries pair with Suspense for complete async handling: Suspense for loading states, error boundary for error states. Log errors to monitoring services in componentDidCatch. React 18 improves boundary behavior in concurrent mode and with Suspense data fetching.",
  "interviewQuestions": [
    {
      "question": "What errors does an error boundary catch?",
      "answer": "Errors in render, lifecycle methods (componentDidMount, componentDidUpdate, etc.), constructors, and useLayoutEffect. It does NOT catch event handler errors, async/setTimeout errors, SSR errors, or errors thrown in the boundary itself."
    },
    {
      "question": "How do you create an error boundary?",
      "answer": "As a class component with getDerivedStateFromError(error) returning { hasError: true } and componentDidCatch(error, info) for logging. Render children if no error, render fallback UI if error. React does not have a built-in <ErrorBoundary> component - you must create your own."
    },
    {
      "question": "Why must error boundaries be class components?",
      "answer": "Function components do not support the lifecycle methods getDerivedStateFromError and componentDidCatch. These are the only mechanisms React provides for intercepting render-phase errors. A future React version may add hooks-based error handling."
    },
    {
      "question": "Can error boundaries catch errors in event handlers?",
      "answer": "No. Use try-catch in event handlers: try { doSomething() } catch (e) { setError(e) }. Or use the event handlers error property like window.onerror for uncaught errors."
    },
    {
      "question": "How do you reset an error boundary?",
      "answer": "Set state in the fallback UI: this.setState({ hasError: false }). This re-attempts rendering the children. Combine with a \"Try Again\" button in the fallback UI for user-initiated retry."
    },
    {
      "question": "What is the recommended error boundary placement strategy?",
      "answer": "Use multiple granular boundaries: one at the app root (last resort), one per major feature/widget, and one around third-party components and user-generated content. This prevents a single crash from taking down unrelated parts of the UI."
    },
    {
      "question": "How do error boundaries work with React.lazy and Suspense?",
      "answer": "Wrap the Suspense component with an error boundary. If the lazy chunk fails to load (network error), the error boundary catches the rejected import promise and shows an error fallback (with retry). Suspense handles the loading state; the error boundary handles the error state."
    },
    {
      "question": "What information does componentDidCatch provide?",
      "answer": "The error object (message, stack) and an info object with componentStack (the React component tree trace showing which component threw the error). This stack is crucial for debugging because it shows the component hierarchy, not just JavaScript call stack."
    },
    {
      "question": "How does React 18 concurrent mode affect error boundaries?",
      "answer": "Error boundaries work correctly in concurrent mode. If a render is interrupted, errors from the interrupted render are discarded. Only errors from the committed render trigger the boundary. This prevents false positives from concurrent render cancellations."
    },
    {
      "question": "What is the react-error-boundary library?",
      "answer": "A popular third-party library that provides a reusable <ErrorBoundary> component with fallback prop, onError callback, resetKeys for automatic reset, and a useErrorHandler hook for function components to report errors to the nearest boundary."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Error Boundary Architecture</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"72.5\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Error Boundary</text><text x=\"130\" y=\"89.5\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Catches errors in child tree</text><line x1=\"130\" y1=\"100\" x2=\"130\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"55\" y=\"125\" width=\"150\" height=\"30\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"135\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Header</text><text x=\"130\" y=\"152\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Works normally</text><line x1=\"130\" y1=\"155\" x2=\"130\" y2=\"175\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"55\" y=\"175\" width=\"150\" height=\"30\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"130\" y=\"185\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Crashed Widget</text><text x=\"130\" y=\"202\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Error caught by boundary</text><line x1=\"130\" y1=\"205\" x2=\"130\" y2=\"225\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#a)\"/><rect x=\"55\" y=\"225\" width=\"150\" height=\"30\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"235\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Footer</text><text x=\"130\" y=\"252\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Continues working</text><text x=\"250\" y=\"78\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">getDerivedStateFromError() + componentDidCatch()</text><text x=\"250\" y=\"140\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Operates independently</text><text x=\"250\" y=\"190\" fill=\"#f87171\" font-size=\"10\" text-anchor=\"start\">Replaced by fallback UI</text><text x=\"250\" y=\"240\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"start\">App continues functioning</text></svg>",
  "codeExamples": [
    {
      "title": "Reusable Error Boundary Component with Retry",
      "useCase": "Standard pattern for error isolation and recovery",
      "code": "class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, info) {\n    console.error(\"Error caught:\", error);\n    console.error(\"Component stack:\", info.componentStack);\n    if (typeof this.props.onError === \"function\") {\n      this.props.onError(error, info);\n    }\n  }\n\n  handleRetry = () => {\n    this.setState({ hasError: false, error: null });\n  };\n\n  render() {\n    if (this.state.hasError) {\n      const Fallback = this.props.fallback;\n      if (Fallback) {\n        return <Fallback error={this.state.error} onRetry={this.handleRetry} />;\n      }\n      return (\n        <div role=\"alert\" className=\"error-boundary-fallback\">\n          <h2>Something went wrong</h2>\n          <p>{this.state.error.message}</p>\n          <button onClick={this.handleRetry}>Try Again</button>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}\n\n// Usage:\n<ErrorBoundary fallback={WidgetErrorFallback}>\n  <Suspense fallback={<WidgetSkeleton />}>\n    <StockTicker />\n  </Suspense>\n</ErrorBoundary>",
      "description": "The reusable ErrorBoundary accepts an optional fallback component and onError callback. The fallback receives the error and a retry function. The retry resets state, causing React to re-render the children."
    },
    {
      "title": "Granular Error Boundaries in a Dashboard",
      "useCase": "Isolate crashes to specific widgets without affecting others",
      "code": "function Dashboard() {\n  return (\n    <div className=\"dashboard\">\n      <h1>Dashboard</h1>\n\n      <ErrorBoundary fallback={WidgetError}>\n        <SalesChart />\n      </ErrorBoundary>\n\n      <ErrorBoundary fallback={WidgetError}>\n        <UserActivity />\n      </ErrorBoundary>\n\n      <ErrorBoundary fallback={WidgetError}>\n        <RecentOrders />\n      </ErrorBoundary>\n\n      <ErrorBoundary fallback={WidgetError}>\n        <StockTicker />\n      </ErrorBoundary>\n    </div>\n  );\n}\n\nfunction WidgetError({ onRetry }) {\n  return (\n    <div className=\"widget-error\">\n      <p>This widget failed to load</p>\n      <button onClick={onRetry}>Reload Widget</button>\n    </div>\n  );\n}",
      "description": "If the StockTicker crashes due to a bad API response, only that widget shows the error fallback. SalesChart, UserActivity, and RecentOrders continue working normally. Each widget has independent error recovery."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which lifecycle method updates state when an error is caught?",
      "options": [
        "componentDidCatch",
        "getDerivedStateFromError (static)",
        "componentWillUnmount",
        "shouldComponentUpdate"
      ],
      "answer": 1,
      "explanation": "getDerivedStateFromError is a static method that receives the error and returns state update (e.g., { hasError: true }). It runs during render phase to show fallback UI."
    },
    {
      "question": "Which errors does an error boundary NOT catch?",
      "options": [
        "Render errors",
        "Event handler errors",
        "Lifecycle errors",
        "Constructor errors"
      ],
      "answer": 1,
      "explanation": "Error boundaries do not catch event handler errors. Use try-catch in event handlers and update state to show error UI."
    },
    {
      "question": "Why cant function components be error boundaries?",
      "options": [
        "React does not support hooks for error handling",
        "Function components lack getDerivedStateFromError and componentDidCatch lifecycle methods",
        "Function components are inherently less stable",
        "Error boundaries require a DOM node"
      ],
      "answer": 1,
      "explanation": "Error boundary functionality requires lifecycle methods that only exist in class components. A future React version may add hooks support."
    },
    {
      "question": "What does componentDidCatch receive?",
      "options": [
        "Only the error object",
        "The error object and an info object with componentStack",
        "The error and the offending components props",
        "Just the component stack trace"
      ],
      "answer": 1,
      "explanation": "componentDidCatch(error, info) receives the error and an info object where info.componentStack is the React component stack trace."
    },
    {
      "question": "How does the retry mechanism work in error boundaries?",
      "options": [
        "Call this.forceUpdate()",
        "Reset hasError state to false, causing React to re-render children",
        "Reload the page",
        "Call this.setState({ error: null })"
      ],
      "answer": 1,
      "explanation": "Setting hasError: false causes render() to return this.props.children again. React re-mounts the child tree from the boundary down."
    },
    {
      "question": "What is the primary purpose of granular error boundaries?",
      "options": [
        "Improve bundle size",
        "Isolate errors so one components crash does not take down unrelated parts of the UI",
        "Reduce server load",
        "Improve test coverage"
      ],
      "answer": 1,
      "explanation": "Granular boundaries ensure that a crash in one section (e.g., comments widget) does not affect other sections (e.g., product list, navigation)."
    }
  ]
};
