const e={id:"mern-security",title:"MERN Security",difficulty:"advanced",estimatedMinutes:20,tldr:["MERN security involves protecting the full stack: frontend (XSS, CSRF), backend (injection, auth), database (NoSQL injection, encryption).","Key threats: XSS (cross-site scripting), CSRF (cross-site request forgery), NoSQL injection, broken authentication, insecure dependencies.","Defense layers: input validation, output encoding, HTTPS, security headers (helmet), rate limiting, parameterized queries.","OWASP Top 10 provides a security checklist. Regular dependency audits (npm audit) and security scanning (Snyk) catch known vulnerabilities."],laymanDefinition:"MERN security is like securing a house. The front door lock (authentication), security cameras (logging), alarm system (rate limiting), strong walls (input validation), and a neighborhood watch (dependency scanning). Each layer protects against different types of intruders. If one layer fails, others still provide protection (defense in depth).",deepDive:[{heading:"Input Validation and Sanitization",text:"Validate all user input: request body, params, query strings, headers. Use Zod/Joi for schema validation. Sanitize against NoSQL injection: strip $ and . from MongoDB query keys (mongo-sanitize). Never trust client input � validate server-side. Type checking: ensure strings are strings, numbers are numbers."},{heading:"Authentication Security",text:"bcrypt/Argon2 for password hashing with cost factor 12+. JWT with short expiry (15 min). HttpOnly cookies for token storage. Rate limiting on login (5 attempts per 15 min). Account lockout after N failed attempts. MFA for sensitive operations. Secure password reset flow."},{heading:"HTTP Security Headers",text:"helmet middleware sets: Content-Security-Policy (restrict script sources), X-Content-Type-Options (prevent MIME sniffing), X-Frame-Options (prevent clickjacking), Strict-Transport-Security (force HTTPS), X-XSS-Protection. CSP is the most important � restricts what scripts can execute."},{heading:"Dependency Security",text:"Regular npm audit: check for known vulnerabilities. Use npm audit fix to patch. Snyk or Dependabot for automated scanning. Lock file (package-lock.json) ensures consistent versions. Remove unused dependencies. Avoid deprecated packages. Pin major versions for stability."},{heading:"Production Security Checklist",text:"HTTPS only (HSTS). Remove debug/error stack traces. Restrict CORS to specific origins. Rate limit all API endpoints. Set secure cookie flags (HttpOnly, Secure, SameSite). Validate content-type. Disable x-powered-by header. Run as non-root user. Regular dependency updates."}],interviewAnswer:"MERN security is defense in depth. Validate all input, hash passwords with bcrypt, use Helmet for security headers, implement rate limiting, scan dependencies regularly, enforce HTTPS, and restrict CORS. Never trust the client. The OWASP Top 10 is your security roadmap.",interviewQuestions:[{question:"What are the main security threats in MERN?",answer:"XSS, CSRF, NoSQL injection, broken authentication, insecure dependencies, and security misconfiguration."},{question:"How do you prevent NoSQL injection?",answer:"Validate input types (ensure strings are strings), sanitize MongoDB operators (mongo-sanitize), use parameterized queries."},{question:"What does Helmet do?",answer:"Sets secure HTTP headers: CSP, HSTS, X-Content-Type-Options, X-Frame-Options, and others. Mitigates XSS, clickjacking, MIME sniffing."},{question:"How do you secure passwords?",answer:"Hash with bcrypt (cost 12+) or Argon2id. Never store plaintext. Use salt (built into bcrypt). Implement password strength validation."},{question:"How do you prevent brute force attacks?",answer:"Rate limiting on auth endpoints (express-rate-limit). Account lockout after failed attempts. Progressive delays."},{question:"What is Content-Security-Policy?",answer:"An HTTP header that restricts which scripts, styles, and resources can load. Prevents XSS even if injection occurs."},{question:"How do you protect against CSRF?",answer:"Use SameSite cookies (Lax/Strict). CSRF tokens for state-changing operations. Require custom headers for API calls."},{question:"What is the most critical security header?",answer:"Content-Security-Policy � it restricts script execution and can block most XSS attacks."},{question:"How do you secure MongoDB?",answer:"Enable authentication. Use network restrictions (VPC/whitelist). Encrypt data at rest. Use least-privilege database users. Enable auditing."},{question:"What is the npm audit command?",answer:"npm audit scans dependencies for known vulnerabilities. npm audit fix patches safe upgrades. Integrate in CI/CD."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Security</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Input Validation</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Zod + sanitize</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auth</text><text x="65" y="73" text-anchor="middle" font-size="9" fill="#ddd">bcrypt + JWT + rate </text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">limit</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Headers</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Helmet + CSP + HSTS</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Deps</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">npm audit + Snyk</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OWASP</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Top 10 checklist</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="220" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="270" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Security</text><text x="270" y="162" text-anchor="middle" font-size="9" fill="#ddd">Defense in depth: validate input, secure</text><text x="270" y="173" text-anchor="middle" font-size="9" fill="#ddd"> auth, helmet headers, scan deps, follow</text><text x="270" y="184" text-anchor="middle" font-size="9" fill="#ddd"> OWASP. Never trust the client.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Security: Input validation, Helmet headers, bcrypt</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">, rate limiting, CSP, npm audit. Defense in depth.</text></svg>',codeExamples:[{title:"Helmet Security Headers",useCase:"Set secure HTTP headers.",code:`const helmet = require('helmet');

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.example.com'],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:', 'https://res.cloudinary.com'],
    connectSrc: ["'self'", 'https://api.example.com'],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    objectSrc: ["'none'"],
    frameAncestors: ["'none'"],
    formAction: ["'self'"]
  }
}));

app.disable('x-powered-by');`,description:"Helmet configuration with custom CSP directives for controlling resource loading."},{title:"Rate Limiting and Security Middleware",useCase:"Brute force protection.",code:`const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, try again later' }
});
app.use('/api', limiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
  message: { error: 'Too many login attempts' }
});
app.use('/api/auth/login', authLimiter);

app.use(mongoSanitize());
app.use(hpp());`,description:"Rate limiting, NoSQL injection prevention, and HTTP parameter pollution protection."},{title:"Dependency Security (npm audit)",useCase:"Scan for vulnerabilities.",code:`# Check vulnerabilities
npm audit

# Auto-fix safe upgrades
npm audit fix

# Force fix (may break things)
npm audit fix --force

# Check for high severity only
npm audit --audit-level=high

# CI/CD integration
# .github/workflows/security.yml
# - run: npm audit --audit-level=high
#   continue-on-error: true

# Use Snyk for continuous monitoring
# npm install -g snyk
# snyk auth
# snyk test
# snyk monitor`,description:"Dependency security scanning with npm audit and Snyk integration."},{title:"Input Validation with Zod",useCase:"Backend request validation.",code:`const { z } = require('zod');

const createItemSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  price: z.number().positive(),
  category: z.enum(['electronics', 'clothing', 'food']),
  tags: z.array(z.string()).max(5).optional()
});

app.post('/api/items', (req, res, next) => {
  const result = createItemSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.flatten().fieldErrors
    });
  }
  req.validatedBody = result.data;
  next();
}, createItem);`,description:"Zod schema validation for request bodies with detailed error messages."},{title:"CSP Violation Reporting",useCase:"Monitor CSP violations.",code:`// CSP with report-uri
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    reportUri: '/api/csp-violation'
  },
  reportOnly: true // Start with report-only
}));

// CSP violation endpoint
app.post('/api/csp-violation', (req, res) => {
  const report = req.body['csp-report'];
  console.warn('CSP Violation:', {
    blocked: report['blocked-uri'],
    violated: report['violated-directive'],
    page: report['document-uri']
  });
  // Send to monitoring system
  res.status(204).end();
});`,description:"CSP violation reporting endpoint to monitor and fix policy violations."}],mcqQuestions:[{question:"What is the primary defense against NoSQL injection?",options:["Output encoding","Input type validation","HTTPS","CORS"],answer:1,explanation:"Validating input types (ensuring strings are strings) prevents NoSQL operator injection."},{question:"What does Helmet do?",options:["Compresses responses","Sets secure HTTP headers","Validates input","Caches responses"],answer:1,explanation:"Helmet sets various HTTP security headers to protect against common web vulnerabilities."},{question:"What is the most important security header?",options:["X-Frame-Options","Content-Security-Policy","X-Content-Type-Options","Strict-Transport-Security"],answer:1,explanation:"CSP is the most powerful � it controls which scripts and resources can load."},{question:"How do you prevent brute force attacks?",options:["Strong passwords","Rate limiting","Encryption","Firewall"],answer:1,explanation:"Rate limiting on auth endpoints limits the number of login attempts per time window."},{question:"What tool scans for vulnerable dependencies?",options:["ESLint","npm audit","Prettier","Webpack"],answer:1,explanation:"npm audit scans your dependencies for known security vulnerabilities."},{question:"What is defense in depth?",options:["Single security layer","Multiple overlapping security layers","No security","External security only"],answer:1,explanation:"Defense in depth uses multiple security layers so if one fails, others still provide protection."},{question:"MERN Security — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Security — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Security — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Security — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_security};
