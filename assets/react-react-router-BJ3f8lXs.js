const e={id:"react-react-router",title:"React Router",difficulty:"intermediate",estimatedMinutes:25,tldr:["React Router v6 is the standard declarative routing library for React applications with nested routes, loaders, and actions.","It uses a component-based approach: <BrowserRouter>, <Routes>, <Route>, <Link>, and <Outlet> for nested layouts.","React Router v6 introduced loaders (data fetching before render) and actions (form submissions) for route-level data management.","Nested routes with <Outlet> enable persistent layouts where the parent layout remains mounted while child routes change."],laymanDefinition:'React Router is like a GPS for your app. When a user clicks a link or navigates to a URL, React Router determines which components to show, just like a GPS determines which roads to take based on the destination. It enables Single Page Application (SPA) navigation where the page does not reload - the URL changes and React updates the visible components instantly. React Router v6 is the latest version with nested routing (like nested menus), loaders (fetch data before showing a page), and actions (handle form submissions at the route level). It replaces the mental model of "pages" with "component trees that match URL patterns."',deepDive:[{heading:"React Router v6 Architecture",text:'React Router v6 is built around a hierarchical route configuration. <BrowserRouter> provides the routing context (history, location). <Routes> evaluates the current URL against <Route> patterns and renders the matching route. Each <Route> has a path (URL pattern) and element (component to render). Routes can be nested: parent routes define layouts with <Outlet>, child routes fill the outlet. The match is made using a ranking algorithm (more specific paths win over less specific). Key concepts: (1) Relative links - <Link to="settings"> resolves relative to the parent route. (2) Index routes - the default child route at a path: <Route index element={<Home />} />. (3) Layout routes - routes that only provide layout (no path) with <Outlet> for children. (4) Path parameters: <Route path=":id" element={<Detail />} /> - accessed via useParams().'},{heading:"Data Loading with Loaders",text:'React Router v6.4+ introduced loaders for fetching data before a route renders. A loader is an async function exported from the route module: export async function loader({ params, request }) { const res = await fetch(/api/users/${params.id}); return res.json(); }. The route configuration connects the loader: <Route path=":id" element={<UserDetail />} loader={userLoader} />. The component accesses the loaded data via useLoaderData(). Benefits: (1) Data fetching is co-located with routes. (2) Navigation waits for data before rendering the new page (no loading spinners needed for initial data). (3) Loaders run on the server with SSR frameworks (Remix, Next.js). (4) Error handling with errorElement prop on routes. (5) Data revalidation - actions can invalidate and re-fetch loader data.'},{heading:"Form Submissions with Actions",text:'Actions handle form submissions at the route level. An action is an async function that receives the form data: export async function action({ request, params }) { const formData = await request.formData(); await fetch("/api/users", { method: "POST", body: formData }); return redirect("/users"); }. Forms use <Form method="post" action="/users"> instead of regular <form>. Benefits: (1) Progressive enhancement - works without JavaScript. (2) Automatic form data serialization. (3) Automatic revalidation of loader data after action completes. (4) useActionData() to access action return values (validation errors, success messages). (5) useNavigation() for pending states (loading indicators during form submission). Actions replace the manual form handling + navigation pattern with a declarative route-level approach.'},{heading:"Nested Routes and Layouts",text:'Nested routes are React Router v6s killer feature. Pattern: (1) Parent route: <Route path="dashboard" element={<DashboardLayout />}>. (2) DashboardLayout has <Outlet /> where child routes render. (3) Child routes: <Route path="settings" element={<Settings />} /> -> renders at /dashboard/settings inside DashboardLayout. Benefits: (1) The parent layout (sidebar, nav) persists while child content changes. (2) Parent data loaders run once; child loaders run independently. (3) Relative navigation: <Link to="../settings"> navigates relative to the current route. (4) Error boundaries at any level: <Route errorElement={<ErrorFallback />}> catches errors in all descendants. (5) Index routes provide a default child: <Route index element={<DashboardHome />} />. This eliminates the manual layout component pattern (wrapping children in layout components at each render).'},{heading:"Navigation Methods and Hooks",text:'React Router provides multiple navigation methods: (1) <Link to="/path"> - declarative navigation (renders an <a> tag). (2) <NavLink to="/path"> - Link with active state (className receives isActive). (3) useNavigate() - imperative navigation: const navigate = useNavigate(); navigate("/dashboard", { replace: true }). (4) <Navigate to="/path" /> - declarative redirect component. (5) useHref() - resolve a relative URL. (6) useResolvedPath() - resolve a path against the current route. (7) useSearchParams() - read/write URL query parameters: const [searchParams, setSearchParams] = useSearchParams(); searchParams.get("q"). (8) useLocation() - access the current location object (pathname, search, hash, state). (9) useNavigation() - pending state for loading indicators during navigation.'}],interviewAnswer:"React Router v6 provides declarative routing with <BrowserRouter>, <Routes>, and nested <Route> components. Key features: nested routes with <Outlet> for persistent layouts, loaders for data fetching before render, actions for form submissions, and relative navigation. Use <Link> for navigation, useParams() for URL parameters, useSearchParams() for query strings, and useNavigate() for imperative navigation. React Router v6.4+ added data APIs (loaders, actions) that enable server-renderable routing with automatic revalidation. Error handling via errorElement prop at any route level.",interviewQuestions:[{question:"How does React Router v6 differ from v5?",answer:"React Router v6 uses <Routes> instead of <Switch>, relative routing, automatic route ranking (no exact prop), nested routes with <Outlet>, and loaders/actions (v6.4+). No more withRouter HOC - hooks (useParams, useNavigate) replace it."},{question:"What is the purpose of <Outlet>?",answer:"<Outlet> marks where child routes render inside a parent layout route. The parent component persists across child route changes. Think of it as {children} for routing."},{question:"What is a loader in React Router?",answer:"A loader is an async function that fetches data before a route renders. Defined alongside the route: <Route loader={userLoader} />. The component accesses data via useLoaderData(). Navigation waits for the loader to complete before rendering."},{question:"How do forms work in React Router v6.4+?",answer:'Use <Form method="post" action="/route"> instead of regular <form>. The action prop handles submission. An action function at the target route processes the form data and returns the result (redirect, errors, or data).'},{question:"What is an index route?",answer:'An index route is the default child route rendered when the parent URL matches exactly. <Route index element={<DashboardHome />} /> is equivalent to path="" but explicit. It renders inside the parent Outlet.'},{question:"How do you access URL parameters?",answer:'useParams() hook returns an object of URL parameters: const { id } = useParams() for a route path="/users/:id". URL parameters are strings by default - parse numbers as needed.'},{question:"How do you read and write query strings?",answer:'useSearchParams() returns [searchParams, setSearchParams]. searchParams.get("q") reads the q parameter. setSearchParams({ q: "react" }) updates query string. Preserves existing params by default.'},{question:"What is the difference between <Link> and <NavLink>?",answer:'<NavLink> extends <Link> with active state styling. It passes isActive and isPending booleans to the className or style render prop: className={({ isActive }) => isActive ? "active" : ""}.'},{question:"How does error handling work in React Router v6?",answer:"Each <Route> can have an errorElement prop: <Route errorElement={<ErrorFallback />} />. Errors from loaders, actions, or component rendering are caught by the nearest errorElement ancestor. Use useRouteError() to access the error in the fallback component."},{question:"What is the difference between useNavigate and <Link>?",answer:"<Link> is declarative (renders an <a> tag, works with right-click/open in new tab). useNavigate is imperative (programmatic navigation, no <a> tag generated). Prefer <Link> for visible navigation, useNavigate for side effects (redirect after form submission)."}],diagramSvg:'<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="max-width:720px;"><defs><marker id="a" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="700" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="360" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">React Router Route Hierarchy</text><rect x="30" y="55" width="200" height="35" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="67.5" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle"><Route path="/"></text><text x="130" y="84.5" fill="#9aa0b0" font-size="10" text-anchor="middle">Root layout</text><text x="40" y="110" fill="#f59e0b" font-size="11" text-anchor="start"><Route index element={<Home />} /></text><text x="40" y="135" fill="#f59e0b" font-size="11" text-anchor="start"><Route path="about" element={<About />} /></text><text x="40" y="160" fill="#f59e0b" font-size="11" text-anchor="start"><Route path="dashboard" element={<Layout />}></text><text x="50" y="185" fill="#9aa0b0" font-size="10" text-anchor="start"><Route index element={<Overview />} /></text><text x="50" y="210" fill="#9aa0b0" font-size="10" text-anchor="start"><Route path="settings" element={<Settings />} /></text><text x="40" y="235" fill="#f59e0b" font-size="11" text-anchor="start"></Route></text><text x="40" y="260" fill="#f59e0b" font-size="11" text-anchor="start"><Route path="*" element={<NotFound />} /></text></svg>',codeExamples:[{title:"Complete React Router v6 Setup with Data Loading",useCase:"Router configuration with nested routes, loader, and error handling",code:`import { createBrowserRouter, RouterProvider, Outlet, Link, useLoaderData } from "react-router-dom";

// Layout component
function RootLayout() {
  return (
    <div>
      <nav><Link to="/">Home</Link> | <Link to="/users">Users</Link></nav>
      <main><Outlet /></main>
    </div>
  );
}

// Loader for users
async function usersLoader() {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Failed to load users");
  return res.json();
}

// Component using loader data
function Users() {
  const users = useLoaderData();
  return (
    <ul>
      {users.map(u => <li key={u.id}><Link to={"/users/" + u.id}>{u.name}</Link></li>)}
    </ul>
  );
}

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Oops!<Link to="/">Go home</Link></div>,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users />, loader: usersLoader },
      { path: "users/:id", element: <UserDetail />, loader: userDetailLoader },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}`,description:"createBrowserRouter defines the route hierarchy as a JS object, supporting loaders, actions, and errorElement. RouterProvider renders the matched route. Nested routes inherit the parent layout. The errorElement catches rendering/loader errors in the entire tree."},{title:"Protected Routes with Authentication",useCase:"Guard routes with authentication check and redirect",code:`import { Navigate, useLocation, Outlet } from "react-router-dom";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/auth/me").then(r => r.ok ? r.json() : null).then(setUser);
  }, []);
  return user;
}

function RequireAuth() {
  const user = useAuth();
  const location = useLocation();

  if (user === undefined) return <Spinner />; // loading
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

// Router:
const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    element: <RequireAuth />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/settings", element: <Settings /> },
      { path: "/admin", element: <AdminPanel /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);`,description:"The RequireAuth layout route checks authentication status. If not authenticated, it redirects to /login with the original location saved in state (for redirect-back after login). Authenticated routes render via <Outlet />. The loader pattern can also handle auth checks centrally."}],mcqQuestions:[{question:"What is the purpose of <Outlet> in React Router?",options:["Renders a loading spinner","Marks where child routes render inside a layout component","Creates a new browser tab","Redirects to the home page"],answer:1,explanation:"<Outlet> is the placeholder where child routes render inside a parent layout route. The parent persists across child changes."},{question:"What does useLoaderData() return?",options:["The current URL","Data fetched by the nearest route loader","The form state","The React component tree"],answer:1,explanation:"useLoaderData() returns the data returned by the route's loader function. The data is available after the loader completes."},{question:"What is the difference between <Routes> (v6) and <Switch> (v5)?",options:["They are the same","<Routes> uses automatic route ranking (no exact needed) and supports nested routes natively","<Switch> is faster","<Routes> does not support path parameters"],answer:1,explanation:"React Router v6 <Routes> automatically ranks routes by specificity. The most specific match wins. No exact prop needed. Supports nested route configuration."},{question:"What does the errorElement prop do?",options:["Catches errors in the route subtree and renders a fallback UI","Redirects to an error page","Logs errors to the console","Prevents the route from rendering"],answer:0,explanation:"errorElement defines a fallback component for errors thrown in the route's children (loaders, actions, component rendering). Access the error with useRouteError()."},{question:"How do you create a catch-all 404 route?",options:['<Route path="*" element={<NotFound />} />','<Route path="404" element={<NotFound />} />',"<Route catchAll element={<NotFound />} />","<Route default element={<NotFound />} />"],answer:0,explanation:'path="*" is a wildcard that matches any URL not matched by previous routes. Place it last in the route configuration.'},{question:"What does useSearchParams() return?",options:["searchParams, setSearchParams] for reading and writing URL query parameters","The current URL pathname","[params, navigate] for URL manipulation","[query, setQuery] for search state"],answer:0,explanation:'useSearchParams() returns a URLSearchParams object and a setter function. searchParams.get("q") reads the q parameter; setSearchParams({ q: "react" }) updates it.'}]};export{e as react_react_router};
