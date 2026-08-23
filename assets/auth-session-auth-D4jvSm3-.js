const e={id:"auth-session-auth",title:"Session Authentication",difficulty:"beginner",estimatedMinutes:20,tldr:["Session authentication is a stateful mechanism where the server creates a session for each authenticated user and stores session data server-side.","The server sends the client a session ID (cookie) which the client sends on subsequent requests to identify their session.","Session data is stored in memory (dev), Redis (production), or a database. Sessions have expiration and can be revoked immediately.","Session-based auth is the traditional approach for server-rendered web applications and remains highly secure when configured properly."],laymanDefinition:"Session auth is like getting a locker at a gym. When you check in (login), the front desk gives you a numbered wristband (session ID) and keeps your stuff in the locker (session data). Every time you come back to the locker, you show your wristband and they open your locker.",deepDive:[{heading:"Session Creation Flow",text:"User submits credentials → server verifies → creates session object (userId, role, expiry) → stores in session store → sends session ID as cookie to client → browser attaches cookie to subsequent requests. Session ID should be a cryptographically random, unguessable string."},{heading:"Session Storage Options",text:"In-memory: default, lost on restart, not for production. Redis: fast, shared across servers, supports TTL. Database (PostgreSQL/MySQL): persistent, good for compliance. Memcached: fast but not persistent. Choose Redis for most production apps."},{heading:"Secure Cookie Configuration",text:"httpOnly: not accessible via JavaScript (prevents XSS theft). secure: only sent over HTTPS. sameSite: prevents CSRF. domain/path: restrict cookie scope. maxAge/expires: limit cookie lifetime. signed: prevents cookie tampering (cookie-parser)."},{heading:"Session Expiration and Cleanup",text:"Absolute timeout: max session lifetime (e.g., 24 hours). Idle timeout: session expires after inactivity (e.g., 30 min). Rolling expiration: reset idle timer on each request. Cleanup: session store should delete expired sessions (Redis TTL handles this automatically)."},{heading:"Session Fixation and Hijacking",text:"Session fixation: attacker sets victim\\'s session ID before login. Prevention: regenerate session ID on login/logout. Session hijacking: attacker steals session cookie. Prevention: httpOnly, secure cookies, IP/user-agent binding (optional, can break legit users)."}],interviewAnswer:"Session authentication is battle-tested and secure when configured properly. Use Redis for session storage in production. Always set httpOnly, secure, and sameSite cookies. Regenerate session ID on login. Implement idle and absolute timeouts. Sessions can be instantly revoked by deleting from the store.",interviewQuestions:[{question:"What is session authentication?",answer:"A stateful mechanism where the server stores session data and identifies the user via a session ID cookie."},{question:"Where should session data be stored in production?",answer:"Redis is the most common choice. In-memory is for development only. Database storage is for compliance-heavy apps."},{question:"What is the session regeneration pattern?",answer:"Call req.session.regenerate() on login/logout to prevent session fixation attacks."},{question:"What are httpOnly cookies?",answer:"Cookies that cannot be accessed by JavaScript — they prevent XSS from stealing session tokens."},{question:"What is the difference between absolute and idle timeout?",answer:"Absolute: max session lifetime regardless of activity. Idle: session expires after inactivity period."},{question:"How do you revoke a session?",answer:"Delete the session from the store (Redis: sessionStore.destroy(sid)). Immediate and effective."},{question:"What is SameSite cookie attribute?",answer:"Controls whether cookies are sent with cross-site requests. Strict/Lax prevents CSRF. None allows cross-site (requires Secure)."},{question:"What is session fixation?",answer:"A vulnerability where an attacker sets a victim\\'s session ID before login. Prevented by regenerating session ID on authentication."},{question:"Can sessions scale across multiple servers?",answer:"Yes, using a shared session store like Redis. All servers read/write sessions from the same store."},{question:"What is rolling session expiration?",answer:"The session expiry timer resets with each request, keeping active sessions alive indefinitely."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Session Authentication</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Login</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Credentials</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Session Created</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Server stores data</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Session ID</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Sent as cookie</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Verify Session</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Look up in store</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Redis Store</text><text x="65" y="113" text-anchor="middle" font-size="9" fill="#ddd">Shared across server</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">s</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Secure Cookie</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">httpOnly + secure</text><rect x="10" y="170" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="186" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Revoke</text><text x="65" y="189" text-anchor="middle" font-size="9" fill="#ddd">Delete from store</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Session Auth</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Stateful: server stores session, c</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">lient uses cookie. Redis, secure c</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ookies, revocation.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Session Authentication: Stateful auth with server-</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">side session storage and cookie-based session IDs.</text></svg>',codeExamples:[{title:"Express Session with Redis",useCase:"Production-ready session setup.",code:`const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis').createClient();

app.use(session({
  store: new RedisStore({ client: redis }),
  secret: process.env.SESSION_SECRET,
  name: 'sid', // custom cookie name
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));`,description:"Express session with Redis store and secure cookie defaults."},{title:"Login with Session Regeneration",useCase:"Prevent session fixation.",code:`app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Regenerate session to prevent fixation
  req.session.regenerate((err) => {
    if (err) return res.status(500).json({ error: 'Server error' });

    req.session.userId = user.id;
    req.session.role = user.role;
    req.session.createdAt = Date.now();

    res.json({ message: 'Login successful' });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie('sid');
    res.json({ message: 'Logged out' });
  });
});`,description:"Login with session regeneration (fixation prevention) and logout with session destruction."},{title:"Session Auth Middleware",useCase:"Protect routes with sessions.",code:`const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      error: 'Authentication required'
    });
  }
  next();
};

const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.session.role)) {
      return res.status(403).json({
        error: 'Insufficient permissions'
      });
    }
    next();
  };
};

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ userId: req.session.userId });
});

app.delete('/api/admin', requireAuth, requireRole('admin'), (req, res) => {
  // admin-only action
});`,description:"Session-based auth middleware for route protection and role checking."},{title:"Idle Timeout with Rolling Expiration",useCase:"Auto-logout on inactivity.",code:`// Middleware to track and reset idle timeout
const idleTimeout = (maxIdleMinutes = 30) => {
  return (req, res, next) => {
    if (req.session.userId) {
      const now = Date.now();
      const idle = now - (req.session.lastActivity || now);

      if (idle > maxIdleMinutes * 60 * 1000) {
        // Session expired due to inactivity
        return req.session.destroy((err) => {
          res.status(401).json({
            error: 'Session expired due to inactivity'
          });
        });
      }

      // Rolling: reset last activity
      req.session.lastActivity = now;
      req.session.cookie.expires = new Date(
        now + maxIdleMinutes * 60 * 1000
      );
    }
    next();
  };
};`,description:"Idle timeout middleware with rolling expiration for session security."},{title:"Session from Database (PostgreSQL)",useCase:"Persistent session storage.",code:`// Custom session store for PostgreSQL
class PgSessionStore {
  async get(sid) {
    const result = await db.query(
      "SELECT data FROM sessions WHERE sid = $1
       AND expires_at > NOW()", [sid]
    );
    return result.rows[0]?.data || null;
  }

  async set(sid, data, expiresAt) {
    await db.query(
      "INSERT INTO sessions (sid, data, expires_at)
       VALUES ($1, $2, to_timestamp($3))
       ON CONFLICT (sid) DO UPDATE
       SET data = $2, expires_at = to_timestamp($3)",
      [sid, data, expiresAt.getTime() / 1000]
    );
  }

  async destroy(sid) {
    await db.query("DELETE FROM sessions WHERE sid = $1", [sid]);
  }
}`,description:"Custom PostgreSQL session store for persistent session storage."},{title:"Multiple Server Session with Redis",useCase:"Shared session across servers.",code:`// Server A (port 3001) and Server B (port 3002)
// Both use the same Redis instance

const redisClient = redis.createClient({
  url: 'redis://shared-redis:6379'
});

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  }
}));

// User can hit Server A or Server B —
// session data is shared via Redis`,description:"Shared Redis session store enables multi-server session persistence."}],mcqQuestions:[{question:"Where should session data be stored in production?",options:["In-memory","Redis","Filesystem","localStorage"],answer:1,explanation:"Redis is the standard for production session storage — fast, shared, and supports TTL."},{question:"What does session regeneration prevent?",options:["CSRF","Session fixation","XSS","Brute force"],answer:1,explanation:"Regenerating session ID on login prevents session fixation attacks."},{question:"What does httpOnly cookie prevent?",options:["CSRF","XSS token theft","Man-in-the-middle","Brute force"],answer:1,explanation:"httpOnly prevents JavaScript access, protecting against XSS-based session theft."},{question:"How do you revoke a session?",options:["Wait for expiry","Delete from store","Change password","Clear cookies"],answer:1,explanation:"Delete the session from the store for immediate revocation."},{question:"What cookie attribute prevents CSRF?",options:["httpOnly","SameSite","Secure","Domain"],answer:1,explanation:"SameSite=Lax or SameSite=Strict prevents CSRF by limiting cross-site cookie sending."},{question:"What is rolling session expiration?",options:["Session never expires","Reset timer on each request","Fixed expiry time","Expires after first request"],answer:1,explanation:"Rolling expiration resets the idle timer with each request, keeping active sessions alive."}]};export{e as auth_session_auth};
