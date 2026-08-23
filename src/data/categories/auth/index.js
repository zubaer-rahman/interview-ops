// Auto-generated index for auth

export const auth = {
    id: "auth",
    tag: "Authentication & Security",
    name: "Authentication & Security",
    icon: "🔒",
    color: "#ff4444",
    description: "JWT, OAuth, sessions, encryption, and web security",
    topics: [
    {
      id: "auth-authentication",
      title: "Authentication",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./auth-authentication.js').then(m => m.auth_authentication)
    },
    {
      id: "auth-authorization",
      title: "Authorization",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./auth-authorization.js').then(m => m.auth_authorization)
    },
    {
      id: "auth-jwt",
      title: "JWT (JSON Web Tokens)",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-jwt.js').then(m => m.auth_jwt)
    },
    {
      id: "auth-oauth",
      title: "OAuth 2.0",
      difficulty: "advanced",
      estimatedMinutes: 35,
      content: () => import('./auth-oauth.js').then(m => m.auth_oauth)
    },
    {
      id: "auth-refresh-tokens",
      title: "Refresh Tokens",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-refresh-tokens.js').then(m => m.auth_refresh_tokens)
    },
    {
      id: "auth-access-tokens",
      title: "Access Tokens",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./auth-access-tokens.js').then(m => m.auth_access_tokens)
    },
    {
      id: "auth-session-auth",
      title: "Session Authentication",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./auth-session-auth.js').then(m => m.auth_session_auth)
    },
    {
      id: "auth-rbac",
      title: "RBAC (Role-Based Access Control)",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-rbac.js').then(m => m.auth_rbac)
    },
    {
      id: "auth-multi-tenant",
      title: "Multi Tenant Security",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./auth-multi-tenant.js').then(m => m.auth_multi_tenant)
    },
    {
      id: "auth-password-hashing",
      title: "Password Hashing",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-password-hashing.js').then(m => m.auth_password_hashing)
    },
    {
      id: "auth-bcrypt",
      title: "bcrypt",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./auth-bcrypt.js').then(m => m.auth_bcrypt)
    },
    {
      id: "auth-csrf",
      title: "CSRF (Cross-Site Request Forgery)",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-csrf.js').then(m => m.auth_csrf)
    },
    {
      id: "auth-xss",
      title: "XSS (Cross-Site Scripting)",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-xss.js').then(m => m.auth_xss)
    },
    {
      id: "auth-sql-injection",
      title: "SQL Injection",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./auth-sql-injection.js').then(m => m.auth_sql_injection)
    },
    {
      id: "auth-nosql-injection",
      title: "NoSQL Injection",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./auth-nosql-injection.js').then(m => m.auth_nosql_injection)
    },
    {
      id: "auth-https",
      title: "HTTPS (HTTP over TLS)",
      difficulty: "beginner",
      estimatedMinutes: 20,
      content: () => import('./auth-https.js').then(m => m.auth_https)
    },
    {
      id: "auth-cors",
      title: "CORS (Cross-Origin Resource Sharing)",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./auth-cors.js').then(m => m.auth_cors)
    },
    {
      id: "auth-owasp",
      title: "OWASP Top 10",
      difficulty: "advanced",
      estimatedMinutes: 35,
      content: () => import('./auth-owasp.js').then(m => m.auth_owasp)
    }
    ]
};
