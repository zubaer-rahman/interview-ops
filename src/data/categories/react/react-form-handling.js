export const react_form_handling = {
  "id": "react-form-handling",
  "title": "React Form Handling",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "React form handling uses controlled components where form state lives in React state, not the DOM.",
    "Uncontrolled components use refs to access form values directly from the DOM when needed.",
    "React Hook Form, Formik, and Final Form are popular libraries that simplify form validation and submission.",
    "Form validation can be synchronous (onChange, onBlur) or asynchronous (API-based validation)."
  ],
  "laymanDefinition": "Form handling in React is about managing what users type into forms. There are two approaches: controlled (React watches every keystroke and stores the value in state) and uncontrolled (React only reads the values when the user submits). Controlled forms give you more power (instant validation, dynamic form fields, conditional sections) at the cost of more code. Uncontrolled forms are simpler but less flexible. For complex forms, libraries like React Hook Form or Formik handle all the boilerplate: validation, error messages, submission, and performance optimization so you do not have to write it yourself.",
  "deepDive": [
    {
      "heading": "Controlled vs Uncontrolled Components",
      "text": "Controlled components: React state is the single source of truth. The input value is set from state, and onChange updates state. Every keystroke triggers a render. Benefits: (1) Instant validation. (2) Conditional rendering based on input values. (3) Programmatic value changes. (4) Integration with other state. Drawbacks: (1) More boilerplate. (2) Every keystroke triggers re-render (can be optimized with debouncing). (3) Larger state for complex forms. Uncontrolled components: The DOM maintains its own state. Use refs to read values on submit. Benefits: (1) Less code. (2) No re-renders on keystroke. (3) Better performance for large forms. Drawbacks: (1) No instant validation. (2) Harder to dynamically change values. (3) Cannot conditionally render based on input values. Recommendation: controlled for most cases, uncontrolled for simple forms or performance-critical large forms."
    },
    {
      "heading": "Form Validation Strategies",
      "text": "(1) On submit validation - validate all fields when the user clicks submit. Simplest approach, used for simple forms. (2) On change validation - validate as the user types. Provides instant feedback but can be noisy (email format errors shown after first character). (3) On blur validation - validate when the field loses focus. Best UX balance - shows errors after the user finishes typing a field. (4) Debounced validation - wait for a pause in typing before validating. Best for API-based validation (checking if username is available). (5) Combination strategy: onBlur for field-level validation, onSubmit for form-level validation, debounced for async checks. Implementation: schema-based validation with Yup or Zod, or custom validation functions returning error strings."
    },
    {
      "heading": "React Hook Form (RHF): The Modern Standard",
      "text": "React Hook Form is the most popular React form library. Key features: (1) Uncontrolled by default - uses refs internally for better performance. (2) register() function connects inputs to the form state. (3) Built-in validation with HTML5 constraints and custom rules: register(\"email\", { required: \"Email is required\", pattern: { value: /^.../, message: \"Invalid email\" } }). (4) Integration with validation schemas: Yup, Zod, Joi. (5) handleSubmit() wraps submission with validation. (6) errors object for displaying error messages. (7) watch() for watching field values. (8) setValue() for programmatic updates. (9) useFieldArray for dynamic field lists. (10) Controller component for custom inputs. RHF minimizes re-renders: the form container renders once, individual fields re-render only on their own changes."
    },
    {
      "heading": "Formik: The Established Alternative",
      "text": "Formik is an older but still widely used form library. Key concepts: (1) Controlled approach - state is explicitly managed. (2) useFormik() hook or <Formik> component. (3) initialValues, validationSchema (Yup), onSubmit. (4) handleChange, handleBlur, handleSubmit are passed to inputs. (5) touched and errors objects for validation state. (6) isSubmitting for submit button state. Formik renders more than RHF because it uses controlled inputs. For most new projects, React Hook Form is recommended over Formik due to better performance and smaller bundle size. Formik is maintained but not actively evolving. RHF has better TypeScript support, better performance, and a larger ecosystem."
    },
    {
      "heading": "Custom Form Hooks and Accessibility",
      "text": "Building a custom form hook: (1) Manage form state with useReducer for complex validation. (2) Track touched fields, errors, and values. (3) Provide register() that returns { value, onChange, onBlur }. (4) Handle submission with async validation. (5) Provide reset() and setValue() methods. Accessibility essentials: (1) label elements with htmlFor matching input id. (2) aria-describedby linking to error message elements. (3) aria-invalid=\"true\" on invalid inputs. (4) role=\"alert\" on error summaries. (5) Proper tab order (tabIndex). (6) Focus management - focus the first error field on submit. (7) Error announcements for screen readers with aria-live=\"polite\"."
    }
  ],
  "interviewAnswer": "React forms use controlled components (state-driven) or uncontrolled components (ref-driven). Controlled forms offer more power (instant validation, dynamic fields) at the cost of more renders per keystroke. React Hook Form is the current best practice - it uses uncontrolled inputs for performance with register(), supports schema validation (Yup/Zod), and minimizes re-renders. Formik is a controlled alternative still in wide use. Validation strategies: onBlur (best UX), debounced (for API checks), onSubmit (simple forms). Accessibility: aria-describedby for errors, aria-invalid for invalid fields, focus management on error.",
  "interviewQuestions": [
    {
      "question": "What is the difference between controlled and uncontrolled components?",
      "answer": "Controlled: React state drives the input value (value + onChange). Uncontrolled: the DOM manages its own state, accessed via refs on submit. Controlled gives more control (instant validation, dynamic changes); uncontrolled has better performance for large forms."
    },
    {
      "question": "Why is React Hook Form faster than Formik?",
      "answer": "React Hook Form uses uncontrolled inputs by default - inputs register via refs, not state. This means keystrokes do not trigger re-renders. Formik uses controlled inputs where every keystroke updates state and re-renders the entire form."
    },
    {
      "question": "What is the register() function in React Hook Form?",
      "answer": "register() connects an input to the form state via a ref. It returns props (ref, onChange, onBlur, name) to spread onto the input. Validation rules are passed as the second argument: register(\"email\", { required: true })."
    },
    {
      "question": "How do you integrate Yup with React Hook Form?",
      "answer": "Use the @hookform/resolvers package: import { yupResolver } from \"@hookform/resolvers/yup\"; useForm({ resolver: yupResolver(schema) }). The schema defines validation rules, error messages, and types."
    },
    {
      "question": "What is the best validation strategy for a login form?",
      "answer": "onBlur validation for email format + required check. onSubmit validation for credential verification against the server. This gives immediate feedback on format errors and server feedback on submit."
    },
    {
      "question": "How do you handle dynamic form fields (add/remove items)?",
      "answer": "React Hook Form provides useFieldArray() for dynamic lists. It provides fields array, append(), remove(), insert(), swap(), move() methods. Each field needs a unique key (usually the auto-generated id from useFieldArray)."
    },
    {
      "question": "What are the accessibility requirements for form errors?",
      "answer": "(1) aria-describedby on input pointing to error element id. (2) aria-invalid=\"true\" on invalid inputs. (3) role=\"alert\" on error message. (4) aria-live=\"polite\" for dynamic error announcements. (5) Focus first error field on submit."
    },
    {
      "question": "What is the Controller component in React Hook Form?",
      "answer": "Controller wraps custom components (like React Select, date pickers) that do not expose a ref. It manages the value through render props: <Controller name=\"date\" control={control} render={({ field }) => <DatePicker value={field.value} onChange={field.onChange} />} />."
    },
    {
      "question": "How do you handle form submission with loading state?",
      "answer": "React Hook Form's handleSubmit receives an async function. The formState.isSubmitting flag shows a loading spinner. Disable the submit button during submission. Use setError() for server-side validation errors: setError(\"email\", { message: \"Email already exists\" })."
    },
    {
      "question": "What is the difference between touched and dirty in form state?",
      "answer": "touched tracks whether a field has been blurred (visited). dirty tracks whether a field value differs from its initial value. touched is used to decide when to show validation errors (show after field is visited). dirty is used to enable/disable the submit button (enable only when form is dirty)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:720px;\"><defs><marker id=\"a\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"700\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"360\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Controlled vs Uncontrolled Flow</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"70\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Controlled</text><text x=\"130\" y=\"87\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">value from state, onChange updates state</text><text x=\"30\" y=\"115\" fill=\"#f59e0b\" font-size=\"10\" text-anchor=\"start\">User types -> onChange -> setState -> re-render -> new value</text><text x=\"30\" y=\"135\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"start\">State is source of truth. Every keystroke = 1 render.</text><rect x=\"400\" y=\"55\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"500\" y=\"70\" fill=\"#e8eaed\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Uncontrolled</text><text x=\"500\" y=\"87\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">DOM manages own value, ref reads on submit</text><text x=\"400\" y=\"115\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"start\">User types -> DOM updates -> no React re-render</text><text x=\"400\" y=\"135\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"start\">Read value when needed (submit) via ref.current</text><text x=\"30\" y=\"200\" fill=\"#f59e0b\" font-size=\"11\" text-anchor=\"start\">React Hook Form = best of both:</text><text x=\"30\" y=\"220\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">Uncontrolled inputs (no re-renders on keystroke) +</text><text x=\"30\" y=\"240\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"start\">React-style validation and error management</text></svg>",
  "codeExamples": [
    {
      "title": "React Hook Form with Yup Validation",
      "useCase": "Complete form with validation, error display, and submission",
      "code": "import { useForm } from \"react-hook-form\";\nimport { yupResolver } from \"@hookform/resolvers/yup\";\nimport * as yup from \"yup\";\n\nconst schema = yup.object({\n  name: yup.string().required(\"Name is required\").min(2, \"Too short\"),\n  email: yup.string().required(\"Email is required\").email(\"Invalid email\"),\n  age: yup.number().required().min(18, \"Must be 18+\").max(120),\n  password: yup.string().required().min(8, \"Min 8 characters\"),\n  confirmPassword: yup.string()\n    .oneOf([yup.ref(\"password\")], \"Passwords must match\")\n});\n\nfunction RegistrationForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({\n    resolver: yupResolver(schema)\n  });\n\n  const onSubmit = async (data) => {\n    await fetch(\"/api/register\", { method: \"POST\", body: JSON.stringify(data) });\n    reset();\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)} noValidate>\n      <div>\n        <label htmlFor=\"name\">Name</label>\n        <input id=\"name\" {...register(\"name\")} aria-invalid={errors.name ? \"true\" : undefined} />\n        {errors.name && <p role=\"alert\" className=\"error\">{errors.name.message}</p>}\n      </div>\n      <div>\n        <label htmlFor=\"email\">Email</label>\n        <input id=\"email\" type=\"email\" {...register(\"email\")} />\n        {errors.email && <p role=\"alert\">{errors.email.message}</p>}\n      </div>\n      <div>\n        <label htmlFor=\"password\">Password</label>\n        <input id=\"password\" type=\"password\" {...register(\"password\")} />\n        {errors.password && <p role=\"alert\">{errors.password.message}</p>}\n      </div>\n      <button type=\"submit\" disabled={isSubmitting}>\n        {isSubmitting ? \"Submitting...\" : \"Register\"}\n      </button>\n    </form>\n  );\n}",
      "description": "The Yup schema defines all validation rules declaratively. React Hook Form integrates via yupResolver. Errors appear after onBlur (default RHF behavior). The submit button shows loading state. accessibility: htmlFor/labels, aria-invalid, role=\"alert\" on errors."
    },
    {
      "title": "Custom Controlled Input Component with Validation",
      "useCase": "Building a reusable text input with built-in validation",
      "code": "function FormField({ label, name, register, errors, type = \"text\", validation }) {\n  return (\n    <div className=\"form-field\">\n      <label htmlFor={name}>{label}</label>\n      <input\n        id={name}\n        type={type}\n        aria-invalid={errors[name] ? \"true\" : undefined}\n        aria-describedby={errors[name] ? name + \"-error\" : undefined}\n        {...register(name, validation)}\n      />\n      {errors[name] && (\n        <p id={name + \"-error\"} className=\"error\" role=\"alert\">\n          {errors[name].message}\n        </p>\n      )}\n    </div>\n  );\n}\n\nfunction ProfileForm() {\n  const { register, handleSubmit, formState: { errors }, watch } = useForm({\n    defaultValues: {\n      displayName: \"\",\n      bio: \"\",\n      website: \"\",\n      theme: \"light\"\n    }\n  });\n\n  const theme = watch(\"theme\");\n\n  return (\n    <form onSubmit={handleSubmit(data => console.log(data))}>\n      <FormField label=\"Display Name\" name=\"displayName\"\n        register={register} errors={errors}\n        validation={{ required: \"Display name is required\" }}\n      />\n      <FormField label=\"Bio\" name=\"bio\"\n        register={register} errors={errors}\n        validation={{ maxLength: { value: 500, message: \"Max 500 characters\" } }}\n      />\n      <select {...register(\"theme\")}>\n        <option value=\"light\">Light</option>\n        <option value=\"dark\">Dark</option>\n      </select>\n      {theme === \"dark\" && <p className=\"info\">Tip: Use light mode for better readability</p>}\n      <input type=\"submit\" />\n    </form>\n  );\n}",
      "description": "The reusable FormField component encapsulates label/input/error patterns. watch() enables conditional rendering based on form values. defaultValues provide initial state. Each field has proper aria attributes for accessibility."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a controlled component?",
      "options": [
        "A component where the DOM manages its own state",
        "A component where React state drives the input value via value + onChange",
        "A component that uses refs to read values",
        "A component that cannot be validated"
      ],
      "answer": 1,
      "explanation": "In controlled components, React state is the single source of truth. The input value comes from state, and state is updated via onChange."
    },
    {
      "question": "What is the main advantage of React Hook Form over Formik?",
      "options": [
        "Better TypeScript support",
        "Better performance (uncontrolled by default, fewer re-renders)",
        "Larger bundle size",
        "More boilerplate"
      ],
      "answer": 1,
      "explanation": "React Hook Form uses uncontrolled inputs to minimize re-renders. Formik uses controlled inputs that re-render the form on every keystroke."
    },
    {
      "question": "What does the register() function return?",
      "options": [
        "A state object",
        "Props to spread onto an input (ref, onChange, onBlur, name)",
        "A validation schema",
        "An error object"
      ],
      "answer": 1,
      "explanation": "register() returns the props needed to connect an input to the form state. Spread them onto the input: {...register(\"field\")}."
    },
    {
      "question": "Which validation strategy provides the best UX balance?",
      "options": [
        "On submit only",
        "On blur (validate when field loses focus)",
        "On every keystroke",
        "No validation"
      ],
      "answer": 1,
      "explanation": "onBlur shows errors after the user finishes typing a field, providing feedback without the noise of per-keystroke validation."
    },
    {
      "question": "What is the purpose of aria-describedby on a form input?",
      "options": [
        "Sets the input label",
        "Links the input to its error message element for screen reader announcements",
        "Changes the input type",
        "Enables autocomplete"
      ],
      "answer": 1,
      "explanation": "aria-describedby points to the ID of the error message element. Screen readers announce the error message when the input receives focus."
    },
    {
      "question": "What does the Controller component wrap?",
      "options": [
        "Native HTML inputs",
        "Custom components (like React Select, date pickers) that do not expose a ref",
        "React Router links",
        "Context providers"
      ],
      "answer": 1,
      "explanation": "Controller wraps components that cannot use register() because they do not expose a ref. It manages the value through a render prop with field (value, onChange, onBlur)."
    }
  ]
};
