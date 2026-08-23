const e={id:"react-state-management-patterns",title:"React State Management Patterns",difficulty:"advanced",estimatedMinutes:30,tldr:["React state management ranges from local (useState, useReducer) to global (Context, Redux, Zustand, Jotai).","Choose the simplest solution: local state first, then lift state up, then Context, then external libraries.","Redux provides predictable state with middleware, DevTools, and a mature ecosystem for large-scale apps.","Modern alternatives (Zustand, Jotai, Valtio) offer simpler APIs with similar capabilities."],laymanDefinition:"State management is about deciding where each piece of data lives in your app. Think of state like water: it starts local (in a single component), but as more components need the same data, you move it higher up (lift state up), create streams (Context), or build a reservoir (Redux/Zustand). The golden rule: use the simplest solution that works. Do not add Redux to an app that only needs local state. React 18s useReducer + Context handles many cases that previously required Redux. For truly complex apps, Redux Toolkit or Zustand provide structure, DevTools, and predictable updates.",deepDive:[{heading:"Local State: useState and useReducer",text:"The foundation of React state management. useState for simple independent values (strings, numbers, booleans). useReducer for complex state objects with multiple fields that update together. Best practices: (1) Keep state as local as possible - only lift it up when multiple components need it. (2) Co-locate state with the component that renders it. (3) Use derived state (computed values) instead of storing redundant state: const total = items.reduce((s, i) => s + i.price, 0) instead of storing total separately. (4) Use callback setter for state that depends on previous state: setCount(c => c + 1). (5) Avoid storing props-derived state in useState - compute it directly. (6) useReducer centralizes complex update logic and makes it testable."},{heading:"Lifting State Up and Props Drilling",text:"When multiple components need the same state, lift it to their nearest common ancestor and pass it down via props. This is the simplest form of shared state and works well for 2-3 levels of nesting. Beyond that, prop drilling (passing props through intermediate components that do not use them) becomes a problem. Signs of excessive prop drilling: (1) Props passed through 4+ levels of nesting. (2) Intermediate components have props only for passing down (not for their own use). (3) Adding a new feature requires threading new props through many components. Solutions: Context, composition (pass components as props/children), or external state management. Composition can reduce prop drilling: instead of <Layout><Page user={user} /></Layout>, use <Layout header={<UserHeader user={user} />} />."},{heading:"React Context for Global State",text:"React Context provides a way to pass data through the component tree without prop drilling. Pattern: (1) Create context with createContext(defaultValue). (2) Create a Provider component that holds the state with useState/useReducer and passes it via context. (3) Consumer components use useContext() to access the state. Best practices: (1) Split contexts by domain (AuthContext, ThemeContext, CartContext) to avoid unnecessary re-renders. (2) Separate state and dispatch into two contexts for performance. (3) Memoize context values to prevent re-renders of all consumers when the provider re-renders: const value = useMemo(() => ({ user, login }), [user]). (4) Context is NOT a state management library - it is a dependency injection mechanism. (5) For frequently-updating state (mouse position, form input), Context can cause performance issues due to mass re-renders."},{heading:"Redux Toolkit: The Mature Solution",text:"Redux Toolkit (RTK) is the modern recommended way to use Redux. Key features: (1) configureStore - creates store with middleware (thunk by default), DevTools, and combined reducers. (2) createSlice - defines reducers and actions in one concise API. (3) createAsyncThunk - handles async action lifecycle (pending, fulfilled, rejected). (4) RTK Query - built-in data fetching and caching (like React Query). Redux is best for: (1) Large-scale apps with complex state interactions. (2) Apps needing middleware (sagas, thunks for complex async flows). (3) Teams that benefit from the strict structure and patterns. (4) Apps where time-travel debugging is valuable. (5) Apps that share state across many unrelated components. The criticism: Redux has too much boilerplate (even with RTK) for small/medium apps."},{heading:"Modern Alternatives: Zustand, Jotai, and Valtio",text:"These newer libraries address Redux boilerplate while providing similar capabilities: (1) Zustand - minimal API: const useStore = create((set) => ({ count: 0, increment: () => set(s => ({ count: s.count + 1 })) })). No provider needed, no reducers, no actions. (2) Jotai - atomic state model inspired by Recoil: const countAtom = atom(0); const [count, setCount] = useAtom(countAtom). Fine-grained re-renders. (3) Valtio - proxy-based: const state = proxy({ count: 0 }); state.count++ triggers re-renders automatically. These libraries are suitable for medium-scale apps where Context would cause excessive re-renders but Redux is overkill. They all support DevTools, TypeScript, and middleware. Choose based on mental model preference: Zustand (flux-like, single store), Jotai (atomic, fine-grained), Valtio (mutable proxy)."}],interviewAnswer:"React state management ranges from local (useState/useReducer) to global (Context, Redux, Zustand). The principle: choose the simplest solution - start with local state, lift state up as needed, use Context for medium-depth sharing, and external libraries for complex global state. Redux Toolkit provides structure for large apps with createSlice, createAsyncThunk, and RTK Query. Modern alternatives (Zustand, Jotai, Valtio) offer simpler APIs for medium scale. Split Context by domain and memoize values to avoid re-render issues. Never use Context for frequently-updating global state - use a library with selector-based subscriptions.",interviewQuestions:[{question:"What is the most important principle in choosing a state management solution?",answer:"Always start with the simplest solution that works: local state -> lift state up -> Context -> external library. Do not add complexity before it is needed."},{question:"What problem does lifting state up solve?",answer:"When multiple sibling components need the same data, move the state to their nearest common ancestor and pass it down via props. This keeps the state in a single location and avoids duplicate state."},{question:"What are the downsides of React Context for state management?",answer:"(1) All consumers re-render when the context value changes (no built-in selectors). (2) Frequent updates cause performance issues. (3) Context is not designed for high-frequency updates (mouse position, animations). (4) Deeply nested providers create complex component trees."},{question:"How does Redux handle side effects?",answer:"Middleware. Redux Thunk (built into RTK) for async logic: createAsyncThunk handles pending/fulfilled/rejected. Redux Saga for complex workflows (race conditions, parallel tasks, debouncing). RTK Query for data fetching/caching."},{question:"What is the difference between Zustand and Redux?",answer:"Zustand has minimal API (no reducers, no actions, no Provider), supports selectors by default, and requires less boilerplate. Redux provides more structure (middleware, DevTools, standardized patterns) suitable for large teams and complex apps."},{question:"How does Jotai differ from Zustand?",answer:"Jotai uses atomic state - each piece of state is an independent atom. Components subscribe to individual atoms, so only components using the changed atom re-render. Zustand uses a single store with selector-based subscriptions."},{question:"What is the purpose of splitting Context into multiple providers?",answer:"To prevent unnecessary re-renders. If auth state and theme state are in one context, any auth change re-renders theme consumers. Separate contexts isolate re-render scope. Split state and dispatch into separate contexts too."},{question:"When would you use useReducer instead of useState?",answer:"When state is an object with multiple fields that update together (form state, async state with loading/error/data), or when the next state depends heavily on the previous state. useReducer makes complex transitions predictable and testable."},{question:"What is RTK Query?",answer:"A data fetching and caching library built into Redux Toolkit. It manages API requests, caching, polling, optimistic updates, and automatic re-fetching. Inspired by React Query but integrated with Redux DevTools and middleware."},{question:"What is the recommended state management approach for a new medium-scale React app?",answer:"Start with local state + Context for global concerns (theme, auth). If re-render performance becomes an issue, add Zustand or Jotai for specific state domains. Only reach for Redux Toolkit when the app has complex async flows, many state interactions, and a team that benefits from the strict patterns."}],diagramSvg:'<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" style="max-width:720px;"><defs><marker id="a" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="700" height="260" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="360" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">State Management Spectrum</text><rect x="30" y="55" width="120" height="40" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="90" y="70" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle">useState</text><text x="90" y="87" fill="#9aa0b0" font-size="10" text-anchor="middle">Simple, local</text></svg>',codeExamples:[{title:"Zustand Store for Cart State",useCase:"Modern state management with minimal boilerplate",code:`import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      discount: 0,

      addItem: (product) => set((state) => {
        const existing = state.items.find(i => i.id === product.id);
        if (existing) {
          return { items: state.items.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          )};
        }
        return { items: [...state.items, { ...product, qty: 1 }] };
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),

      getTotal: () => {
        const { items, discount } = get();
        const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
        return Math.max(0, subtotal - discount);
      },

      clearCart: () => set({ items: [], discount: 0 })
    }),
    { name: "cart-storage" }
  )
);

// In components:
function Cart() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const total = useCartStore((state) => state.getTotal());

  return (
    <div>
      {items.map(i => <div key={i.id}>{i.name} x{i.qty}</div>)}
      <p>Total: \${total}</p>
      <button onClick={() => addItem({ id: 1, name: "Widget", price: 9.99 })}>
        Add Widget
      </button>
    </div>
  );
}`,description:"Zustand creates a store with a minimal API. Selector functions (state => state.items) subscribe to specific slices - only components using items re-render when items change. persist middleware saves/loads from localStorage automatically."},{title:"Redux Toolkit Slice with Async Thunk",useCase:"Complete RTK pattern for a todo app",code:`import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// Async thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  return res.json();
});

// Slice
const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], status: "idle", error: null },
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => { state.status = "loading"; })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { toggleTodo, removeTodo } = todosSlice.actions;

const store = configureStore({ reducer: { todos: todosSlice.reducer } });

// Usage in component:
function TodoList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(s => s.todos);

  useEffect(() => { dispatch(fetchTodos()); }, [dispatch]);

  if (status === "loading") return <Spinner />;
  if (status === "failed") return <Error message={error} />;

  return items.map(t => (
    <div key={t.id}>
      <span onClick={() => dispatch(toggleTodo(t.id))}
        style={{ textDecoration: t.completed ? "line-through" : "none" }}>
        {t.title}
      </span>
      <button onClick={() => dispatch(removeTodo(t.id))}>x</button>
    </div>
  ));
}`,description:"createSlice generates actions and reducers from a concise object definition. createAsyncThunk handles the async lifecycle (pending, fulfilled, rejected). configureStore sets up the store with middleware and DevTools. Redux DevTools provides time-travel debugging."}],mcqQuestions:[{question:"What is the simplest React state management solution?",options:["Redux","useState and local state","Zustand","Context"],answer:1,explanation:"Always start with local useState. Only add complexity (Context, libraries) when local state + lifting state up is insufficient."},{question:"What problem does lifting state up solve?",options:["Reduces bundle size","Multiple sibling components need the same state - move it to their common ancestor","Eliminates all re-renders","Replaces Redux"],answer:1,explanation:"Lifting state up shares state between sibling components via a common parent. It is the simplest form of shared state."},{question:"What is a major downside of React Context for global state?",options:["Too much boilerplate","All consumers re-render when the context value changes (no built-in selector optimization)","Does not work with TypeScript","Requires Redux to work"],answer:1,explanation:"Context does not support selector-based subscriptions. Any change to the context value re-renders ALL consumers, which can be a performance issue for frequently-updating state."},{question:"Which library provides atomic (fine-grained) state management?",options:["Redux Toolkit","Jotai","Zustand","Context"],answer:1,explanation:"Jotai uses atomic state where each atom is an independent piece of state. Components subscribe to individual atoms, ensuring minimal re-renders."},{question:"What does createAsyncThunk handle?",options:["Throttling user input","The full lifecycle of an async request (pending, fulfilled, rejected) with automatic action dispatching","Client-side caching","Form validation"],answer:1,explanation:"createAsyncThunk generates three action types (pending/fulfilled/rejected) and dispatches them automatically during the async request lifecycle."},{question:"What is the recommended state management for a new large-scale enterprise app?",options:["useState only","Zustand","Redux Toolkit (with RTK Query)","Context only"],answer:2,explanation:"For large-scale apps with complex state, multiple teams, and advanced requirements (middleware, DevTools, normalized cache), Redux Toolkit with RTK Query is the recommended choice."}]};export{e as react_state_management_patterns};
