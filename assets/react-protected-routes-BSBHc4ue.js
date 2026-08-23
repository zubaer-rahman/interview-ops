const e={id:"react-protected-routes",title:"React Protected Routes",difficulty:"intermediate",estimatedMinutes:20,tldr:["Protected routes restrict access to certain pages based on authentication status, redirecting unauthenticated users to login.",'Implement as a wrapper component (RequireAuth) that checks auth state and renders <Outlet /> or <Navigate to="/login" />.',"React Router v6 makes this pattern clean with layout routes that conditionally render their children.","Combine with loaders for server-side auth checks and useLocation() state for redirect-back-after-login flow."],laymanDefinition:"Protected routes are like VIP sections at a concert. You need a valid ticket (authentication) to enter. If you do not have a ticket, you get redirected to the box office (login page). In React, protected routes wrap sensitive pages and check if the user is logged in. If logged in, they show the page; if not, they redirect to the login page. The smart part: the redirect remembers where you were trying to go (via location.state), so after login, the app sends you back to the original page instead of just the home page. This pattern is essential for any app with authenticated content.",deepDive:[{heading:"Authentication State Management",text:"Before implementing protected routes, you need an auth system. Common patterns: (1) Context-based - AuthContext provides user object and login/logout methods. useAuth() custom hook accesses the context. (2) Token-based - JWT stored in localStorage or httpOnly cookie. Auth check decodes the token and validates expiry. (3) Session-based - server session with a /api/auth/me endpoint that returns the current user. (4) Third-party - Auth0, Firebase Auth, Supabase, Clerk provide SDKs with hooks. The auth state has three states: loading (initial check in progress), authenticated (user object available), unauthenticated (no user). Protected routes must handle all three states: loading spinner for loading, redirect for unauthenticated, render children for authenticated."},{heading:"RequireAuth Layout Route Pattern",text:'The recommended approach in React Router v6: create a layout route component that checks authentication and conditionally renders children. Implementation: (1) Define a <RequireAuth> component that uses useAuth() and useLocation(). (2) If loading, return <Spinner />. (3) If not authenticated, return <Navigate to="/login" state={{ from: location }} replace />. (4) If authenticated, return <Outlet />. (5) In the route config, wrap protected routes as children of RequireAuth: <Route element={<RequireAuth />}><Route path="dashboard" element={<Dashboard />} /></Route>. This pattern is clean because RequireAuth does not need to know about specific routes - it just checks auth and renders children.'},{heading:"Role-Based Access Control (Authorization)",text:'Beyond authentication (are you logged in?), authorization (do you have permission?) controls access to specific features. Patterns: (1) Role-based - roles like admin, editor, viewer. RequireRole component checks user.role. (2) Permission-based - granular permissions like canEdit, canDelete. (3) Feature flags - enable/disable features based on A/B testing or subscription tier. Implementation: extend RequireAuth with a requiredRole or requiredPermissions prop: <RequireRole role="admin"><Route path="admin" element={<AdminPanel />} /></RequireRole>. For complex permissions, create a hasPermission utility that checks the current user against required permissions. (4) Server-side enforcement - always validate permissions on the server; client-side checks are UX convenience, not security.'},{heading:"Login Redirect Flow (Return URL)",text:'The standard login redirect pattern: (1) User visits /dashboard (protected). (2) Not authenticated, redirect to /login?redirect=/dashboard. (3) User logs in successfully. (4) Redirect to /dashboard (the original URL). React Router v6 implementation: (1) In RequireAuth: <Navigate to="/login" state={{ from: location }} replace /> saves the current location in state. (2) In LoginPage: const location = useLocation(); const from = location.state?.from?.pathname || "/". (3) On login success: navigate(from, { replace: true }). Benefits: (1) The redirect-back works even for deeply nested routes (/dashboard/settings/profile). (2) replace: true prevents the login page from remaining in browser history (back button goes to the original page, not login). (3) The redirect parameter can also be passed as a search param for server-rendered login flows.'},{heading:"Protected Route with Loader-Based Auth",text:`React Router v6 loaders can perform server-side auth checks. Pattern: (1) Define a loader that calls an auth API: async function authLoader() { const res = await fetch("/api/auth/me"); if (!res.ok) throw redirect("/login"); return res.json(); }. (2) Attach the loader to the parent protected route: <Route loader={authLoader} element={<RequireAuth />}>. (3) RequireAuth uses useLoaderData() to get the user. (4) If the loader redirects, the protected children never render. Benefits: (1) Auth check happens during navigation, before any component renders. (2) The redirect response from the loader is handled by React Router's data layer. (3) No flash of protected content - the login page replaces it directly. (4) Works with SSR (Remix, Next.js).`}],interviewAnswer:"Protected routes restrict access based on authentication. Implement as a RequireAuth layout route: check auth state, show spinner while loading, redirect to /login (with return URL in location.state) if unauthenticated, render <Outlet /> if authenticated. React Router v6 makes this clean with layout routes. For authorization, extend with role/permission checks. For server-side auth, use loaders that redirect on failure. The redirect-after-login flow saves the original URL in state and navigates back after successful login with replace:true to avoid history pollution.",interviewQuestions:[{question:"How do you implement protected routes in React Router v6?",answer:'Create a RequireAuth layout component that checks auth state. If not authenticated, return <Navigate to="/login" state={{ from: location }} replace />. If authenticated, return <Outlet />. Wrap protected routes as children of RequireAuth in the route config.'},{question:"What are the three auth states a protected route must handle?",answer:"(1) Loading - initial auth check in progress (show spinner). (2) Unauthenticated - redirect to login. (3) Authenticated - render the protected content. Skipping the loading state causes a flash of the login page on page refresh."},{question:"How do you pass the return URL to the login page?",answer:'Use location.state: <Navigate to="/login" state={{ from: location }} replace />. In LoginPage, read useLocation().state?.from?.pathname. On success, navigate(from, { replace: true }) to redirect back.'},{question:"What is the difference between authentication and authorization?",answer:'Authentication verifies identity ("who are you?"). Authorization verifies permissions ("what are you allowed to do?"). Protected routes handle authentication; role-based access handles authorization.'},{question:"How do you implement role-based route protection?",answer:'Create a RequireRole component that checks user.role against required roles. Extend RequireAuth with role checking: if (!requiredRoles.includes(user.role)) { return <Navigate to="/unauthorized" />; }.'},{question:"Why should you also enforce authorization on the server?",answer:"Client-side protection is UX convenience, not security. A malicious user can modify JavaScript to bypass client checks. Always validate permissions on the server for any sensitive operation (API calls, data access, mutations)."},{question:"How do loaders improve protected routes?",answer:'Loaders can check auth before the route renders, preventing any flash of protected content. A loader can throw redirect("/login") if not authenticated, and React Router handles the navigation before rendering the route component.'},{question:"What is the purpose of replace: true in the redirect Navigate?",answer:"replace: true replaces the current history entry instead of adding a new one. After login, pressing back goes to the original page (before the protected route), not the login page. This keeps the navigation stack clean."},{question:"How do you handle token expiration?",answer:"Check token expiry in the RequireAuth component. If expired, try to refresh the token (via /api/auth/refresh endpoint). If refresh fails, redirect to login. Use axios interceptors or fetch wrappers for automatic token refresh on API calls."},{question:"What is the preferred authentication library for React apps?",answer:"Auth0 (auth0-react SDK), Firebase Authentication, Supabase Auth, Clerk, or NextAuth.js (for Next.js). For custom auth, use Context + JWT with httpOnly cookies for security, localStorage/ sessionStorage for simpler apps."}],diagramSvg:'<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" style="max-width:720px;"><defs><marker id="a" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="700" height="260" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="360" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">Protected Route Flow</text><rect x="30" y="55" width="200" height="40" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="70" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle">User visits /dashboard</text><text x="130" y="87" fill="#9aa0b0" font-size="10" text-anchor="middle">Protected route requested</text><line x1="130" y1="95" x2="130" y2="115" stroke="#6c9fff" stroke-width="2" marker-end="url(#a)"/><rect x="30" y="115" width="200" height="40" rx="6" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="130" y="130" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle">Check Auth State</text><text x="130" y="147" fill="#9aa0b0" font-size="10" text-anchor="middle">useAuth() from context</text><line x1="130" y1="155" x2="130" y2="175" stroke="#6c9fff" stroke-width="2" marker-end="url(#a)"/><rect x="30" y="175" width="90" height="50" rx="6" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="75" y="195" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle">Authenticated?</text><text x="75" y="212" fill="#9aa0b0" font-size="10" text-anchor="middle"><Outlet /> renders dashboard</text></svg>',codeExamples:[{title:"Complete Protected Route Implementation",useCase:"Auth context + RequireAuth + LoginPage with redirect-back",code:`// 1. Auth Context
const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    fetch("/api/auth/me")
      .then(r => r.ok ? r.json() : null)
      .then(setUser);
  }, []);

  const login = async (email, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error("Invalid credentials");
    const user = await res.json();
    setUser(user);
    return user;
  };

  const logout = () => {
    fetch("/api/auth/logout", { method: "POST" }).then(() => setUser(null));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading: user === undefined }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() { return useContext(AuthContext); }

// 2. RequireAuth Component
function RequireAuth() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <FullPageSpinner />;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

// 3. LoginPage with redirect-back
function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    await login(form.get("email"), form.get("password"));
    navigate(from, { replace: true });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}

// 4. Router Configuration
<Route element={<RequireAuth />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="settings" element={<Settings />} />
  <Route path="admin" element={<AdminPanel />} />
</Route>
<Route path="login" element={<LoginPage />} />`,description:"The AuthProvider manages auth state. RequireAuth checks auth and redirects with return URL. LoginPage reads the return URL from location.state and navigates there on success. replace:true ensures clean history."},{title:"Role-Based Access with RequireRole",useCase:"Extend protected routes for admin-only sections",code:`function RequireRole({ role, children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== role && user.role !== "superadmin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children || <Outlet />;
}

// Router config:
<Route element={<RequireAuth />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route element={<RequireRole role="admin" />}>
    <Route path="admin/users" element={<UserManagement />} />
    <Route path="admin/logs" element={<AuditLogs />} />
  </Route>
  <Route element={<RequireRole role="editor" />}>
    <Route path="editor/posts" element={<PostEditor />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Route>
<Route path="/unauthorized" element={<UnauthorizedPage />} />`,description:'RequireRole extends RequireAuth with authorization. Admin routes require user.role === "admin". Editor routes require user.role === "editor". superadmin role bypasses all checks. Unauthorized redirects to a dedicated page instead of login.'}],mcqQuestions:[{question:"What does a protected route component typically render for authenticated users?",options:["A login form","An <Outlet /> (the child routes)","A loading spinner","A redirect to home"],answer:1,explanation:"Authenticated users see the protected content via <Outlet />. Unauthenticated users get redirected."},{question:"What is the purpose of location.state in the redirect Navigate?",options:["To pass CSS classes","To save the original URL so the login page can redirect back after success","To disable the back button","To pass API tokens"],answer:1,explanation:"location.state stores the current location. LoginPage reads it via useLocation().state?.from?.pathname and navigates back after successful authentication."},{question:"Why is replace: true used in the redirect?",options:["To add a new history entry","To replace the current history entry so pressing back skips the login page","To reload the page","To clear browser cache"],answer:1,explanation:"replace: true replaces the current history entry. After login, the user goes back to the original page (before the protected route), not to the login page."},{question:"What is the difference between authentication and authorization?",options:["They are the same","Authentication = identity verification; Authorization = permission checking","Authentication = permission checking; Authorization = identity verification","Authentication = login; Authorization = logout"],answer:1,explanation:"Authentication verifies who you are. Authorization verifies what you are allowed to do. Protected routes handle auth; role-based access handles authorization."},{question:"What should RequireAuth show during the initial auth check?",options:["Nothing (null)","A loading spinner or skeleton","The protected content with errors","A redirect to login"],answer:1,explanation:"During the initial auth check (loading state), show a loading indicator. Skipping this causes a flash of the login page or protected content."},{question:"Why must authorization also be enforced server-side?",options:["Client-side checks are slower","Client-side JavaScript can be bypassed by malicious users","Server-side checks are optional","Authorization only works server-side"],answer:1,explanation:"Client-side checks are UX convenience, not security. Anyone can modify client JS. Server-side authorization must protect all sensitive operations."}]};export{e as react_protected_routes};
