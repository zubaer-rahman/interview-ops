export const nextjs_server_actions = {
  "id": "nextjs-server-actions",
  "title": "Server Actions",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Server Actions are async functions that run on the server but can be called directly from Client Components, eliminating API route boilerplate for mutations.",
    "Defined with \"use server\" directive at file level (marking all exports) or inline within a Server Component function body.",
    "Server Actions support progressive enhancement: forms work without JavaScript, and the action receives FormData automatically.",
    "Integrate with caching via revalidatePath and revalidateTag for automatic cache invalidation after mutations."
  ],
  "laymanDefinition": "Server Actions are like having a direct phone line from your browser to the server database. Instead of going through an operator (API route), you dial directly and the server handles everything.",
  "deepDive": [
    {
      "heading": "What Are Server Actions",
      "text": "Server Actions are functions that run on the server but are callable from Client Components and forms. Defined with \"use server\", they handle database mutations, file operations, and business logic. They return data or trigger cache revalidation, and can be used with React hooks like useActionState."
    },
    {
      "heading": "Form Actions and Progressive Enhancement",
      "text": "Pass a Server Action to a form\\'s action prop. The form works without JavaScript (progressive enhancement). The action receives FormData automatically. After submission, Next.js merges the response with the client UI. This eliminates manual form state management."
    },
    {
      "heading": "Calling from Event Handlers",
      "text": "Import a Server Action and call it directly: onClick={() => myAction(data)}. The action runs server-side and returns a Promise. Use startTransition for pending states. Actions can receive FormData, JSON, or primitive arguments."
    },
    {
      "heading": "Cache Integration",
      "text": "Inside the action, call revalidatePath(\"/path\") or revalidateTag(\"tag\") to invalidate caches. Next.js re-renders affected routes with fresh data. Actions can also return values that update the client UI immediately."
    },
    {
      "heading": "Security",
      "text": "Always validate permissions inside the action (server-side). Never trust client-side checks. Server Action code is never exposed to the client; only a secure reference ID is included in the bundle. Use env vars for secrets."
    }
  ],
  "interviewAnswer": "Server Actions represent a paradigm shift in Next.js data mutations, replacing explicit API routes with direct server function calls. They simplify form handling, reduce boilerplate, and integrate deeply with the caching system.",
  "interviewQuestions": [
    {
      "question": "What are Server Actions in Next.js?",
      "answer": "Server Actions are async functions marked with \"use server\" that execute on the server but can be invoked from Client Components, form actions, or event handlers. They eliminate the need for separate API routes for mutations."
    },
    {
      "question": "How do you define a Server Action?",
      "answer": "Add \"use server\" at the top of a file (making all exports server actions) or inline inside a Server Component function. The action is an async function that receives FormData or arguments and returns a result."
    },
    {
      "question": "How do Server Actions work with forms?",
      "answer": "Pass the action to the form action prop. It receives FormData automatically. The form works without JS (progressive enhancement). Use useActionState for loading states and validation feedback."
    },
    {
      "question": "How do you invalidate cache from a Server Action?",
      "answer": "Call revalidatePath(\"/path\") to invalidate a specific route or revalidateTag(\"tag\") to invalidate all routes using a fetch tag. These are imported from next/cache."
    },
    {
      "question": "What is progressive enhancement in Server Actions?",
      "answer": "Forms with Server Actions work even with JavaScript disabled. Without JS, a traditional POST is made. With JS, the action runs via fetch. This ensures forms are functional everywhere."
    },
    {
      "question": "What hooks integrate with Server Actions?",
      "answer": "useActionState (React 19+) provides action state and pending status. useFormStatus provides the pending state of the parent form. Both integrate seamlessly with Server Actions."
    },
    {
      "question": "Are Server Actions exposed to the client?",
      "answer": "No. Only a secure reference ID is in the client bundle. The actual code stays server-side, preventing sensitive logic leakage."
    },
    {
      "question": "Can Server Actions be called from Server Components?",
      "answer": "Yes, Server Actions can be imported and called from Server Components too. This is useful for initial data seeding or server-side triggers."
    },
    {
      "question": "What are the limitations of Server Actions?",
      "answer": "POST-only, cannot be cached at the edge, not for data fetching (use Server Components instead), and authentication must be checked inside the action."
    },
    {
      "question": "How do you handle validation in Server Actions?",
      "answer": "Validate inputs inside the action and return error objects. Use try-catch for database errors. Return structured responses with success/error fields for the client to handle."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Server Actions</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Form/onClick</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"235\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">\"use server\"</text><text x=\"235\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Action</text><line x1=\"300\" y1=\"58\" x2=\"330\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"340\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"400\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Database</text><text x=\"400\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mutation</text><line x1=\"340\" y1=\"75\" x2=\"340\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"295\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">revalidatePath</text><text x=\"295\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache</text><rect x=\"10\" y=\"105\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"75\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Response</text><text x=\"75\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">to Client</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Server Actions: Server functions callable from client, with cache integration.</text></svg>",
  "codeExamples": [
    {
      "title": "Server Action with Form",
      "useCase": "Contact form submission.",
      "code": "\"use server\";\nexport async function submitContact(prevState, formData) {\n  await saveToDB({ name: formData.get(\"name\"), email: formData.get(\"email\") });\n  revalidatePath(\"/contact\");\n  return { success: true };\n}",
      "description": "Saves form data to database and revalidates the contact page."
    },
    {
      "title": "Server Action with onClick",
      "useCase": "Delete item from a list.",
      "code": "\"use server\";\nexport async function deleteItem(id) {\n  await db.items.delete(id);\n  revalidatePath(\"/items\");\n}",
      "description": "Calls server action directly from an onClick handler without an API route."
    },
    {
      "title": "Server Action with useActionState",
      "useCase": "Form with validation feedback.",
      "code": "\"use client\";\nimport { useActionState } from \"react\";\nimport { submitForm } from \"./actions\";\nexport default function Form() {\n  const [state, formAction, pending] = useActionState(submitForm, null);\n  return <form action={formAction}>\n    <input name=\"email\" />\n    {state?.error && <p>{state.error}</p>}\n    <button disabled={pending}>{pending ? \"Saving...\" : \"Save\"}</button>\n  </form>\n}",
      "description": "useActionState manages pending state and action result."
    },
    {
      "title": "Server Action with revalidateTag",
      "useCase": "Invalidate by tag.",
      "code": "\"use server\";\nimport { revalidateTag } from \"next/cache\";\nexport async function createPost(formData) {\n  await db.posts.create({ title: formData.get(\"title\") });\n  revalidateTag(\"posts\");\n}",
      "description": "Invalidates all data tagged with \"posts\" after creation."
    },
    {
      "title": "Server Action with Validation",
      "useCase": "Input validation.",
      "code": "\"use server\";\nexport async function register(prevState, formData) {\n  const email = formData.get(\"email\");\n  if (!email?.includes(\"@\")) return { error: \"Invalid email\" };\n  try {\n    await db.users.create({ email });\n    revalidatePath(\"/users\");\n    return { success: true };\n  } catch {\n    return { error: \"Email exists\" };\n  }\n}",
      "description": "Validates server-side, returns errors or success."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What directive defines a Server Action?",
      "options": [
        "\"use client\"",
        "\"use server\"",
        "\"use action\"",
        "\"use handler\""
      ],
      "answer": 1,
      "explanation": "\"use server\" marks functions as Server Actions."
    },
    {
      "question": "How do you pass a Server Action to a form?",
      "options": [
        "onSubmit prop",
        "action prop",
        "method prop",
        "onAction prop"
      ],
      "answer": 1,
      "explanation": "Pass to the action prop for progressive enhancement."
    },
    {
      "question": "What hook provides parent form pending state?",
      "options": [
        "useActionState",
        "useFormStatus",
        "usePending",
        "useLoading"
      ],
      "answer": 1,
      "explanation": "useFormStatus provides the pending state of the parent form."
    },
    {
      "question": "How to invalidate cache after a Server Action?",
      "options": [
        "clearCache()",
        "revalidatePath()",
        "resetData()",
        "refresh()"
      ],
      "answer": 1,
      "explanation": "Use revalidatePath() or revalidateTag() from next/cache."
    },
    {
      "question": "What happens when a Server Action form submits without JS?",
      "options": [
        "Breaks",
        "Works via POST",
        "Shows error",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "Progressive enhancement ensures forms work without JavaScript."
    },
    {
      "question": "Is Server Action code exposed to the client?",
      "options": [
        "Yes",
        "No, only reference ID",
        "Partially",
        "Only on error"
      ],
      "answer": 1,
      "explanation": "Only a reference ID is in the bundle; implementation stays server-side."
    }
  ]
};
