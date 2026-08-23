export const express_authentication_middleware = {
  "id": "express-authentication-middleware",
  "title": "Authentication Middleware",
  "difficulty": "intermediate",
  "estimatedMinutes": 30,
  "tldr": [
    "Authentication middleware verifies user identity before granting access to protected routes, typically using JWT tokens, session cookies, or API keys.",
    "JWT (JSON Web Token) authentication is stateless: tokens are verified in middleware without server-side session storage.",
    "Session-based authentication stores session data server-side (in memory or Redis) and uses signed cookies for client identification.",
    "Authentication middleware attaches the authenticated user to req.user for downstream route and controller use."
  ],
  "laymanDefinition": "Authentication middleware is like a security guard checking IDs at the door of a building. It verifies that you are who you claim to be (authentication) before letting you proceed further into the building.",
  "deepDive": [
    {
      "heading": "JWT Authentication Flow",
      "text": "Client sends token in Authorization header (Bearer token). Middleware extracts token, verifies signature using secret key, decodes payload, and attaches user to req. Token contains claims (userId, role, exp). Stateless: no server-side session storage needed."
    },
    {
      "heading": "Session Authentication Flow",
      "text": "Client sends session cookie. Middleware reads cookie, looks up session in store (memory, Redis, database). If valid, attaches user to req.user. Stateful: session data persists server-side. Easier to revoke than JWT. Requires a session store for production."
    },
    {
      "heading": "Passport.js Integration",
      "text": "Passport is the most popular authentication middleware for Express. It uses strategies (passport-jwt, passport-local, passport-google-oauth). Configure strategy, serialize/deserialize user, and use passport.authenticate() middleware on protected routes."
    },
    {
      "heading": "Protected Route Patterns",
      "text": "Create reusable auth middleware: const protect = (req, res, next) => { if (!req.user) return res.status(401).json({ error: \\'Unauthorized\\' }); next(); }. Apply globally: app.use(\\'/api/protected\\', protect, router). Or per route: app.get(\\'/profile\\', protect, getProfile)."
    },
    {
      "heading": "Role-Based Access Control",
      "text": "Extend auth middleware to check roles: const authorize = (...roles) => (req, res, next) => { if (!roles.includes(req.user.role)) return res.status(403).json({ error: \\'Forbidden\\' }); next(); }. Chain: app.get(\\'/admin\\', protect, authorize(\\'admin\\'), handler)."
    }
  ],
  "interviewAnswer": "Authentication middleware is a critical security layer in Express applications. Whether using JWT (stateless, scalable) or sessions (stateful, revocable), the middleware pattern keeps auth logic centralized and reusable.",
  "interviewQuestions": [
    {
      "question": "What does authentication middleware do?",
      "answer": "It verifies the identity of a user by validating credentials (JWT, session, API key) attached to incoming requests. On success, it attaches the authenticated user object to req.user. On failure, it returns a 401 response."
    },
    {
      "question": "How does JWT authentication middleware work?",
      "answer": "Extracts token from Authorization header (Bearer scheme), verifies the signature using a secret key, decodes the payload, and attaches user data to req.user. JWTs contain expiry (exp) and are stateless - no server-side storage needed."
    },
    {
      "question": "How does session-based auth differ from JWT?",
      "answer": "Sessions store data server-side (memory, Redis). The client only holds a signed cookie ID. Sessions are easier to revoke but require storage. JWT is stateless, contains all user data in the token, and scales better but cannot be revoked before expiry."
    },
    {
      "question": "What is Passport.js?",
      "answer": "Passport is authentication middleware for Express that supports over 500 strategies (local, JWT, OAuth, SAML). It uses the strategy pattern: configure a strategy, serialize/deserialize user, and call passport.authenticate() on routes."
    },
    {
      "question": "How do you protect multiple routes with auth middleware?",
      "answer": "Mount the middleware on a router: router.use(protect). Or apply globally with path prefix: app.use(\\'/api/protected\\', authMiddleware, protectedRouter). This protects all routes in that router without repeating the middleware."
    },
    {
      "question": "How do you implement role-based access control?",
      "answer": "Create an authorize middleware factory: const authorize = (...roles) => (req, res, next) => { if (!roles.includes(req.user.role)) return res.status(403).json({ error: \\'Forbidden\\' }); next(); }. Chain with protect: app.use(auth, authorize(\\'admin\\'))."
    },
    {
      "question": "What should the auth middleware return on failure?",
      "answer": "Return 401 for missing/invalid credentials, 403 for valid credentials but insufficient permissions. Include a clear error message. Do not reveal whether the user exists (prevents enumeration attacks)."
    },
    {
      "question": "How do you handle token expiry in middleware?",
      "answer": "Check the exp claim in JWT. Return 401 with \\'Token expired\\' message. The client should refresh the token using a refresh token endpoint. Session-based auth handles expiry via session TTL."
    },
    {
      "question": "Can you use multiple auth strategies simultaneously?",
      "answer": "Yes, create middleware that tries each strategy in order. For example, first check JWT, then check session cookie, then check API key. If any succeeds, proceed. If all fail, return 401. Passport supports this with the concept of multiple strategies."
    },
    {
      "question": "How do you test authentication middleware?",
      "answer": "Create mock req objects with headers and mock res with status and json spies. Invoke middleware and assert: 401 sent for missing token, req.user populated for valid token, correct error message for expired token."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Authentication Middleware</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bearer token</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"235\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth Middleware</text><text x=\"235\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verify JWT</text><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"93\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"130\" y1=\"93\" x2=\"170\" y2=\"93\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"95\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"70\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">401 Error</text><text x=\"70\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unauthorized</text><rect x=\"180\" y=\"95\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"240\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">req.user set</text><text x=\"240\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Valid Auth</text><line x1=\"300\" y1=\"113\" x2=\"330\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"340\" y=\"80\" width=\"120\" height=\"50\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"400\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"400\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Access req.user</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Auth Middleware: Verify token/session, attach user to req, deny or allow access.</text></svg>",
  "codeExamples": [
    {
      "title": "JWT Authentication Middleware",
      "useCase": "Verifying a JSON Web Token.",
      "code": "const jwt = require('jsonwebtoken');\nfunction authenticate(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token provided' });\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(401).json({ error: 'Invalid token' });\n  }\n}",
      "description": "Extracts Bearer token, verifies with JWT secret, attaches decoded payload to req.user."
    },
    {
      "title": "Role-Based Authorization",
      "useCase": "Admin-only route protection.",
      "code": "function authorize(...roles) {\n  return (req, res, next) => {\n    if (!roles.includes(req.user.role)) {\n      return res.status(403).json({ error: 'Insufficient permissions' });\n    }\n    next();\n  };\n}\napp.delete('/users/:id', authenticate, authorize('admin'), deleteUser);",
      "description": "authorize factory checks user role against allowed roles, returns 403 if unauthorized."
    },
    {
      "title": "Session Authentication",
      "useCase": "Express-session based auth.",
      "code": "const session = require('express-session');\napp.use(session({\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false,\n  cookie: { secure: true, httpOnly: true, maxAge: 3600000 }\n}));\nfunction sessionAuth(req, res, next) {\n  if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });\n  req.user = { id: req.session.userId, role: req.session.role };\n  next();\n}",
      "description": "Session-based auth reads userId from session store and attaches user to req."
    },
    {
      "title": "Passport JWT Strategy",
      "useCase": "Using Passport for JWT auth.",
      "code": "const passport = require('passport');\nconst JwtStrategy = require('passport-jwt').Strategy;\nconst opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET };\npassport.use(new JwtStrategy(opts, (payload, done) => {\n  done(null, { id: payload.sub, role: payload.role });\n}));\napp.use(passport.initialize());\napp.get('/profile', passport.authenticate('jwt', { session: false }), getProfile);",
      "description": "Passport JWT strategy handles token extraction and verification with minimal boilerplate."
    },
    {
      "title": "API Key Authentication",
      "useCase": "Simple key-based auth for services.",
      "code": "function apiKeyAuth(req, res, next) {\n  const key = req.headers['x-api-key'];\n  if (!key || key !== process.env.API_KEY) {\n    return res.status(401).json({ error: 'Invalid API key' });\n  }\n  next();\n}\napp.use('/api/service', apiKeyAuth, serviceRouter);",
      "description": "Simple API key check from a custom header, suitable for server-to-server communication."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Where is a JWT token typically sent?",
      "options": [
        "Query parameter",
        "Authorization header",
        "Request body",
        "Cookie"
      ],
      "answer": 1,
      "explanation": "JWT is typically sent in the Authorization header using the Bearer scheme."
    },
    {
      "question": "What does auth middleware attach to the request on success?",
      "options": [
        "req.token",
        "req.user",
        "req.auth",
        "req.session"
      ],
      "answer": 1,
      "explanation": "Auth middleware attaches the authenticated user object to req.user."
    },
    {
      "question": "What status code indicates missing authentication?",
      "options": [
        "403",
        "401",
        "400",
        "500"
      ],
      "answer": 1,
      "explanation": "401 Unauthorized indicates missing or invalid authentication."
    },
    {
      "question": "What does passport.use() configure?",
      "options": [
        "Session store",
        "Authentication strategy",
        "Cookie parser",
        "Error handler"
      ],
      "answer": 1,
      "explanation": "passport.use() configures an authentication strategy like JWT or local."
    },
    {
      "question": "How do you implement role-based access?",
      "options": [
        "Check role in route handler",
        "Authorize middleware after auth",
        "Use Passport roles",
        "Check in app.use()"
      ],
      "answer": 1,
      "explanation": "Create an authorize middleware that checks req.user.role against allowed roles."
    },
    {
      "question": "What status code indicates valid auth but insufficient permissions?",
      "options": [
        "401",
        "403",
        "400",
        "404"
      ],
      "answer": 1,
      "explanation": "403 Forbidden indicates the user is authenticated but does not have permission."
    }
  ]
};
