export const react_react_query = {
  "id": "react-react-query",
  "title": "React React Query",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "React Query (TanStack Query) is a server-state management library for fetching, caching, and synchronizing async data.",
    "It manages caching, background refetching, pagination, and optimistic updates automatically.",
    "Queries use useQuery(key, fetcher). Mutations use useMutation for creating/updating/deleting data.",
    "React Query eliminates the need for global state management for server data (no Redux for API data)."
  ],
  "laymanDefinition": "React Query is like having a personal assistant for fetching data. You tell the assistant 'I need user data' (useQuery), and the assistant: 1) checks if it's already in the filing cabinet (cache), 2) if not, goes to get it (fetch), 3) keeps it updated when stale (background refetch), 4) shows you the latest version, and 5) handles errors and loading states. You don't micromanage the fetching process - the assistant handles it all.",
  "deepDive": [
    {
      "heading": "Queries with useQuery",
      "text": "useQuery(queryKey, fetcherFn, options). queryKey uniquely identifies the query (used for caching). fetcherFn returns a Promise resolving to data. Options: staleTime (how long until data is stale), cacheTime (how long to keep unused data), refetchInterval (auto-polling)."
    },
    {
      "heading": "Mutations with useMutation",
      "text": "useMutation(fetcherFn, options) for creating, updating, deleting. onMutate (optimistic update), onSuccess, onError, onSettled callbacks. Use queryClient.invalidateQueries to refetch related queries after mutation."
    },
    {
      "heading": "Caching and Staleness",
      "text": "Data is cached by queryKey. Stale data is shown immediately while background refetch happens. staleTime controls staleness. cacheTime controls garbage collection of unused cache entries. refetchOnWindowFocus refetches when user returns to tab."
    },
    {
      "heading": "Why Not Redux for Server State?",
      "text": "Server state is async, has stale-while-revalidate semantics, needs background refetching, pagination, and optimistic updates. Redux requires manual handling of all these. React Query automates them with 50 lines vs 200+ lines of Redux boilerplate."
    }
  ],
  "interviewAnswer": "React Query (TanStack Query) is a server-state management library that handles caching, background refetching, pagination, and optimistic updates. useQuery fetches and caches data. useMutation modifies server data with automatic cache invalidation. It eliminates the need to store API data in Redux, handling loading/error states, stale-while-revalidate caching, and window refocus refetching automatically.",
  "interviewQuestions": [
    {
      "question": "What is React Query?",
      "answer": "A server-state management library for fetching, caching, and synchronizing async data with automatic background updates."
    },
    {
      "question": "How does useQuery work?",
      "answer": "useQuery(['key'], fetchFn) returns { data, isLoading, error }. Caches by key. Refetches when key changes or data becomes stale."
    },
    {
      "question": "What is staleTime and cacheTime?",
      "answer": "staleTime: how long until data is considered stale (refetch on next read). cacheTime: how long to keep unused data in cache before garbage collection."
    },
    {
      "question": "How do mutations work?",
      "answer": "useMutation(mutationFn) with onMutate (optimistic), onSuccess (invalidate queries), onError (rollback). Returns mutate function."
    },
    {
      "question": "How to invalidate queries after mutation?",
      "answer": "queryClient.invalidateQueries(['key']) marks cached queries as stale and triggers refetch. Usually in mutation's onSuccess."
    },
    {
      "question": "What is optimistic update?",
      "answer": "Immediately update the cache before the server responds. If server fails, rollback to previous state using onError callback."
    },
    {
      "question": "How does refetchOnWindowFocus work?",
      "answer": "When user returns to the browser tab, React Query refetches stale queries to show latest data. Configurable per query or globally."
    },
    {
      "question": "Why prefer React Query over Redux for API data?",
      "answer": "Less boilerplate, automatic caching/refetching, loading/error states, pagination, polling, optimistic updates built-in."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 700 420\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:700px;\"><defs><marker id=\"arrRQ\" markerWidth=\"10\" markerHeight=\"7\" refX=\"10\" refY=\"3.5\" orient=\"auto\"><polygon points=\"0 0,10 3.5,0 7\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"680\" height=\"400\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"350\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">React Query Data Flow</text><rect x=\"40\" y=\"55\" width=\"180\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"130\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">React Component</text><text x=\"130\" y=\"95\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">useQuery / useMutation</text><line x1=\"220\" y1=\"85\" x2=\"280\" y2=\"115\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrRQ)\"/><rect x=\"280\" y=\"85\" width=\"180\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"370\" y=\"108\" fill=\"#6c9fff\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Cache (by queryKey)</text><text x=\"370\" y=\"125\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">Stale/active cache entries</text><line x1=\"460\" y1=\"115\" x2=\"520\" y2=\"85\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrRQ)\"/><text x=\"490\" y=\"78\" fill=\"#f87171\" font-size=\"9\" text-anchor=\"middle\">cache miss / stale</text><line x1=\"460\" y1=\"115\" x2=\"520\" y2=\"145\" stroke=\"#34d399\" stroke-width=\"2\" marker-end=\"url(#arrRQ)\"/><text x=\"500\" y=\"155\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">cache hit</text><rect x=\"520\" y=\"55\" width=\"140\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"590\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Fetcher</text><text x=\"590\" y=\"95\" fill=\"#9aa0b0\" font-size=\"10\" text-anchor=\"middle\">fetch / axios</text><line x1=\"590\" y1=\"115\" x2=\"590\" y2=\"165\" stroke=\"#f87171\" stroke-width=\"2\" marker-end=\"url(#arrRQ)\"/><rect x=\"520\" y=\"165\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#2a2f45\"/><text x=\"590\" y=\"190\" fill=\"#e8eaed\" font-size=\"11\" text-anchor=\"middle\">API Server</text><path d=\"M590 205 Q590 250 370 250 L370 145\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"1.5\" marker-end=\"url(#arrRQ)\"/><text x=\"470\" y=\"240\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">data stored in cache</text><path d=\"M130 115 L130 250 L280 250\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\" marker-end=\"url(#arrRQ)\"/><text x=\"200\" y=\"240\" fill=\"#fbbf24\" font-size=\"9\" text-anchor=\"middle\">data returned to component</text><rect x=\"280\" y=\"250\" width=\"180\" height=\"40\" rx=\"6\" fill=\"#2a2f45\" stroke=\"#e5c07b\" stroke-width=\"1\"/><text x=\"370\" y=\"275\" fill=\"#e5c07b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Background refetch on stale</text></svg>",
  "codeExamples": [
    {
      "title": "useQuery for User Data",
      "useCase": "Fetch with caching",
      "code": "import { useQuery } from '@tanstack/react-query';\n\nfunction UserProfile({ userId }) {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ['user', userId],\n    queryFn: () => fetch('/api/users/' + userId).then(r => r.json()),\n    staleTime: 5 * 60 * 1000, // 5 min before refetch\n    retry: 2, // retry twice on failure\n  });\n\n  if (isLoading) return <div>Loading user...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n  return (\n    <div>\n      <h2>{data.name}</h2>\n      <p>{data.email}</p>\n    </div>\n  );\n}",
      "description": "Query is cached by ['user', userId]. StaleTime=5min prevents unnecessary refetches. isLoading/error handled automatically."
    },
    {
      "title": "Mutation with Optimistic Update",
      "useCase": "Updating data with instant UI feedback",
      "code": "import { useMutation, useQueryClient } from '@tanstack/react-query';\n\nfunction TodoItem({ todo }) {\n  const queryClient = useQueryClient();\n\n  const toggleMutation = useMutation({\n    mutationFn: () => fetch('/api/todos/' + todo.id, {\n      method: 'PATCH',\n      body: JSON.stringify({ done: !todo.done })\n    }),\n    onMutate: async () => {\n      // Cancel outgoing refetches\n      await queryClient.cancelQueries(['todos']);\n      // Snapshot previous value\n      const previous = queryClient.getQueryData(['todos']);\n      // Optimistically update\n      queryClient.setQueryData(['todos'], (old) =>\n        old.map(t => t.id === todo.id ? { ...t, done: !t.done } : t)\n      );\n      return { previous };\n    },\n    onError: (err, vars, context) => {\n      // Rollback on error\n      queryClient.setQueryData(['todos'], context.previous);\n    },\n    onSettled: () => {\n      // Refetch to ensure server matches\n      queryClient.invalidateQueries(['todos']);\n    },\n  });\n\n  return <li><input type=\"checkbox\" checked={todo.done} onChange={() => toggleMutation.mutate()} />{todo.text}</li>;\n}",
      "description": "Optimistic update: UI updates instantly. If server fails, rollback to previous state. onSettled refetches to ensure sync."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is React Query for?",
      "options": [
        "CSS styling",
        "Server-state fetching and caching",
        "Component state management",
        "Routing"
      ],
      "answer": 1,
      "explanation": "React Query handles server-state caching and fetching."
    },
    {
      "question": "What does useQuery return?",
      "options": [
        "{ data, isLoading, error }",
        "{ state, dispatch }",
        "{ value, setValue }",
        "{ ref, current }"
      ],
      "answer": 0,
      "explanation": "Returns data, loading, and error states."
    },
    {
      "question": "What is staleTime?",
      "options": [
        "Time until cache garbage collected",
        "Time until data considered stale (needs refetch)",
        "Time between retries",
        "Mutation timeout"
      ],
      "answer": 1,
      "explanation": "Data is considered stale after staleTime."
    },
    {
      "question": "How to refetch after mutation?",
      "options": [
        "Manually call fetch()",
        "queryClient.invalidateQueries()",
        "Refresh the page",
        "Re-mount component"
      ],
      "answer": 1,
      "explanation": "Invalidate queries to trigger refetch."
    },
    {
      "question": "What is optimistic update?",
      "options": [
        "Pessimistic assumption",
        "Immediately update cache before server responds",
        "Skip server update",
        "Cache only"
      ],
      "answer": 1,
      "explanation": "Optimistic update shows result instantly."
    },
    {
      "question": "Why React Query over Redux for API?",
      "options": [
        "More boilerplate",
        "Automatic caching and refetching built-in",
        "Better for UI state",
        "Faster rendering"
      ],
      "answer": 1,
      "explanation": "Less code, automatic features."
    }
  ]
};
