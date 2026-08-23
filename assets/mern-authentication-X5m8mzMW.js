const e={id:"mern-authentication",title:"MERN Authentication",difficulty:"intermediate",estimatedMinutes:20,tldr:["MERN authentication typically uses JWT (JSON Web Tokens) for stateless auth between React frontend and Express backend.","Flow: User registers/logs in ? Express validates credentials ? Server issues JWT ? React stores token ? Sends with each API request.","Password hashing with bcrypt/Argon2. JWT contains user ID and role. Token stored in HttpOnly cookie or localStorage (with XSS caution).","Authorization middleware checks JWT on protected routes. Refresh tokens enable seamless token renewal without re-login."],laymanDefinition:"MERN auth is like a hotel key card system. You check in at the front desk (login), the receptionist gives you a key card (JWT) with your room number and checkout date (expiry). Every time you enter a secure area (API route), you swipe the card (send token). When the card expires, you get a new one from the front desk (refresh token).",deepDive:[{heading:"JWT Authentication Flow",text:"1. User POSTs credentials to /api/auth/login. 2. Express validates against MongoDB user record. 3. Server signs JWT with user ID and role. 4. Returns token to client. 5. React stores token (HttpOnly cookie or memory). 6. Each API request includes Authorization: Bearer <token>. 7. Express middleware verifies JWT before route handler."},{heading:"Registration with Password Hashing",text:"User submits email + password. Express validates input (email format, password strength). Password hashed with bcrypt (cost 12) before storing in MongoDB. User document created with hashed password, never plaintext. Return JWT on successful registration."},{heading:"JWT Middleware for Protected Routes",text:"Extract token from Authorization header. Verify with jwt.verify(). Attach decoded user to req.user. Check if user exists in DB (optional, for revocation). Call next() if valid, return 401 if invalid/expired. Apply to routes that require authentication."},{heading:"Role-Based Access Control",text:'JWT contains role field (user, admin, moderator). Middleware checks req.user.role against allowed roles. Admin routes: requireAuth, requireRole("admin"). Frontend conditionally renders UI based on role. RBAC in middleware prevents unauthorized access.'},{heading:"Refresh Token Strategy",text:"Access token: short-lived (15 min). Refresh token: long-lived (7 days), stored in DB. /api/auth/refresh endpoint validates refresh token, issues new access token. Rotation: old refresh token invalidated when new one issued. Revocation: delete refresh token from DB on logout."}],interviewAnswer:"MERN authentication centers on JWT for stateless, scalable auth. Hash passwords with bcrypt. Use middleware for route protection. Implement refresh tokens for good UX. Store tokens securely � HttpOnly cookies are safer than localStorage. Apply role-based authorization for granular access control.",interviewQuestions:[{question:"How is authentication typically implemented in MERN?",answer:"JWT-based: user logs in, receives a signed token, sends it with each API request via Authorization header."},{question:"How are passwords stored?",answer:"Hashed with bcrypt (cost 12) or Argon2id. Never stored in plaintext. Mongoose pre-save hook hashes password before saving."},{question:"What does JWT middleware do?",answer:"Extracts token from request, verifies signature, checks expiry, attaches user info to req.user, calls next()."},{question:"How do you protect routes?",answer:'Apply authMiddleware to routes: router.get("/profile", authMiddleware, getProfile).'},{question:"What is the difference between access and refresh tokens?",answer:"Access token: short-lived (15 min), sent with each API call. Refresh token: long-lived (7-30 days), used to get new access tokens."},{question:"How do you implement role-based access?",answer:"Include role in JWT payload. Middleware checks req.user.role against allowed roles. Apply to sensitive routes."},{question:"Where should JWTs be stored?",answer:"HttpOnly, Secure, SameSite cookies are safest. localStorage is simpler but vulnerable to XSS."},{question:"How does logout work?",answer:"Client discards token. Server-side: invalidate refresh token (delete from DB). For JWT access tokens: add to blocklist until expiry."},{question:"What is bcrypt?",answer:"A password hashing algorithm with built-in salting and configurable cost factor. The most widely used password hash in Node.js."},{question:"How do you handle token expiry on frontend?",answer:"Axios interceptor catches 401 responses, calls refresh endpoint, retries the original request."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Authentication</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Register</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">POST /api/auth</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Login</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Validate credentials</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">JWT Issued</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Signed token</text><rect x="160" y="65" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Store Token</text><text x="215" y="84" text-anchor="middle" font-size="9" fill="#ddd">Cookie/memory</text><line x1="160" y1="90" x2="160" y2="110" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="100" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">API Request</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">Bearer token</text><line x1="120" y1="113" x2="150" y2="113" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="100" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="215" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">JWT Middleware</text><text x="215" y="119" text-anchor="middle" font-size="9" fill="#ddd">Verify + authorize</text><rect x="290" y="35" width="190" height="160" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Auth Flow</text><text x="385" y="167" text-anchor="middle" font-size="9" fill="#ddd">Register ? Login ? JWT ? Protected</text><text x="385" y="178" text-anchor="middle" font-size="9" fill="#ddd"> Routes. bcrypt hashing, role-base</text><text x="385" y="189" text-anchor="middle" font-size="9" fill="#ddd">d access, refresh tokens.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">MERN Authentication: JWT-based auth with bcrypt ha</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">shing, role-based access, and refresh token rotati</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">on.</text></svg>',codeExamples:[{title:"User Model with bcrypt",useCase:"Mongoose model with password hashing.",code:`const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 8 },
  name: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);`,description:"User model with pre-save bcrypt hashing and comparison method."},{title:"Auth Controller (Login)",useCase:"Login with JWT issuance.",code:`const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
};`,description:"Login controller: validate credentials, generate JWT, return token and user data."},{title:"Auth Middleware",useCase:"Protect routes with JWT.",code:`const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ error: 'User not found' });
    }
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};`,description:"Protect middleware verifies JWT, authorize middleware checks role-based access."},{title:"React Auth Context",useCase:"Auth state management in React.",code:`import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/auth/me')
        .then(res => setUser(res.user))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.token);
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);`,description:"React context for auth state with login/logout and token persistence."},{title:"Protected Route Component",useCase:"Route guard in React.",code:`import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children, roles }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to='/login' replace />;
  if (roles && !roles.includes(user.role)) {
    return <Navigate to='/' replace />;
  }

  return children;
}

// Usage:
// <Route path='/admin' element={
//   <ProtectedRoute roles={['admin']}>
//     <AdminDashboard />
//   </ProtectedRoute>
// } />`,description:"React route guard that redirects unauthenticated or unauthorized users."}],mcqQuestions:[{question:"What algorithm is used for password hashing?",options:["MD5","bcrypt","SHA-256","Base64"],answer:1,explanation:"bcrypt (or Argon2id) is used for secure password hashing with built-in salt."},{question:"What does JWT middleware do?",options:["Creates users","Verifies tokens and attaches user to request","Sends emails","Renders pages"],answer:1,explanation:"JWT middleware verifies the token and attaches the decoded user to req.user."},{question:"What is a refresh token used for?",options:["Authentication","Getting new access tokens","Password reset","Email verification"],answer:1,explanation:"Refresh tokens are used to obtain new access tokens without re-login."},{question:"What is the safest place to store JWTs?",options:["localStorage","HttpOnly cookie","URL parameter","Custom header"],answer:1,explanation:"HttpOnly cookies are safest because JavaScript cannot access them (XSS protection)."},{question:"What does the authorize middleware check?",options:["Token expiry","User role/permissions","Password hash","Email format"],answer:1,explanation:"authorize middleware checks if the user\\'s role is in the allowed roles list."},{question:"How does logout work with JWT?",options:["Delete user from DB","Client discards token","Change password","Restart server"],answer:1,explanation:"Logout means the client discards the token. Server-side: invalidate refresh token."},{question:"MERN Authentication — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Authentication — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Authentication — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Authentication — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_authentication};
