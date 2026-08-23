const e={id:"auth-owasp",title:"OWASP Top 10",difficulty:"advanced",estimatedMinutes:35,tldr:["The OWASP Top 10 is a standard awareness document representing the most critical security risks to web applications, updated every 3-4 years.","Current (2021): A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration.","More: A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures, A10 SSRF.","OWASP provides detailed prevention guidance, cheat sheets, and testing guides for each category."],laymanDefinition:'The OWASP Top 10 is like a "most wanted" poster for web vulnerabilities. It lists the top 10 ways websites get hacked, ranked by frequency and impact. Developers use it as a checklist: "Have we addressed all of these?" It gets updated periodically as new attack patterns emerge.',deepDive:[{heading:"A01: Broken Access Control (2021 #1)",text:"Users can access resources they should not. Examples: IDOR (changing user_id in URL), privilege escalation (user becomes admin), directory traversal. Prevention: deny by default, validate permissions server-side, use RBAC/ABAC, implement rate limiting."},{heading:"A02: Cryptographic Failures",text:"Weak or missing encryption of sensitive data. Examples: passwords stored in plaintext, weak hash algorithms (MD5/SHA-1), HTTP instead of HTTPS, weak TLS ciphers, predictable random numbers. Prevention: use strong encryption (AES-256, TLS 1.3), hash passwords (Argon2id/bcrypt), encrypt data at rest."},{heading:"A03: Injection",text:"Untrusted data sent to an interpreter as part of a command. SQL, NoSQL, OS command, LDAP, and template injection. Prevention: parameterized queries, input validation, output encoding, use safe APIs, least privilege."},{heading:"A04: Insecure Design",text:"Architectural flaws before code is written. Missing threat modeling, lack of rate limiting, insufficient security requirements. Prevention: secure design patterns, threat modeling, security reviews in design phase, limit resource consumption."},{heading:"A05: Security Misconfiguration",text:"Default configurations, unnecessary features enabled, overly permissive CORS, error messages revealing stack traces, outdated software. Prevention: hardened configurations, disable debug in production, automated configuration scanning (CIS benchmarks), principle of least functionality."},{heading:"A06: Vulnerable and Outdated Components",text:"Using libraries/frameworks with known vulnerabilities. Prevention: software composition analysis (SCA), dependency scanning (npm audit, Snyk), regular updates, remove unused dependencies, use only trusted sources."},{heading:"A07: Identification and Authentication Failures",text:"Weak login mechanisms, credential stuffing, session fixation, weak passwords, missing MFA. Prevention: MFA, rate limiting, strong password policies, secure session management, credential monitoring (HaveIBeenPwned)."},{heading:"A08: Software and Data Integrity Failures",text:"CI/CD pipeline attacks, unsigned updates, compromised libraries (supply chain). Prevention: sign code and artifacts, verify software integrity (checksums), use software bill of materials (SBOM), secure CI/CD."},{heading:"A09: Security Logging and Monitoring Failures",text:"Insufficient logging of security events, missing alerts, unmonitored logs. Prevention: log all auth events, failed logins, privilege changes, access denials. Implement centralized monitoring (SIEM). Set up alerts for suspicious patterns."},{heading:"A10: Server-Side Request Forgery (SSRF)",text:"Attacker makes server send requests to internal resources. Examples: cloud metadata endpoints (169.254.169.254), internal services, localhost. Prevention: validate and sanitize URLs, block private IP ranges, use allowlists, network segmentation."}],interviewAnswer:"The OWASP Top 10 provides a framework for thinking about web security systematically. Use it as a checklist during design and code review. The rankings change over time — access control is now #1. Address these at the design phase, not as an afterthought. Security is a continuous process, not a one-time fix.",interviewQuestions:[{question:"What is the OWASP Top 10?",answer:"A list of the 10 most critical web application security risks, updated every 3-4 years by the Open Web Application Security Project."},{question:"What is the #1 risk in OWASP Top 10 (2021)?",answer:"Broken Access Control — users accessing resources they should not have permission to."},{question:"What is A03: Injection?",answer:"Untrusted data being sent to an interpreter (SQL, NoSQL, OS command, etc.) as part of a command or query."},{question:"What is A05: Security Misconfiguration?",answer:"Default or insecure configurations: unnecessary features, debug enabled, overly permissive CORS, cloud storage misconfigurations."},{question:"What is A06: Vulnerable Components?",answer:"Using libraries or frameworks with known CVEs. Prevented by dependency scanning and regular updates."},{question:"What is A07: Authentication Failures?",answer:"Weak login systems, credential stuffing, missing MFA, weak password policies, session management flaws."},{question:"What is A10: SSRF?",answer:"Server-Side Request Forgery — attacker tricks the server into making requests to internal resources or cloud metadata endpoints."},{question:"What is A08: Integrity Failures?",answer:"Supply chain attacks, unsigned software updates, compromised CI/CD pipelines."},{question:"What is A09: Logging Failures?",answer:"Insufficient logging and monitoring of security events, making breach detection difficult."},{question:"How often is the OWASP Top 10 updated?",answer:"Every 3-4 years. The latest was 2021. Next is expected 2024/2025."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">OWASP Top 10</text><rect x="10" y="35" width="105" height="18" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="62.5" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A01 Access Ctrl</text><text x="62.5" y="47" text-anchor="middle" font-size="9" fill="#ddd">#1 risk</text><rect x="115" y="35" width="105" height="18" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="167.5" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A02 Crypto</text><text x="167.5" y="47" text-anchor="middle" font-size="9" fill="#ddd">Weak encryption</text><rect x="220" y="35" width="105" height="18" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="272.5" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A03 Injection</text><text x="272.5" y="47" text-anchor="middle" font-size="9" fill="#ddd">SQL/NoSQL</text><rect x="325" y="35" width="105" height="18" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="377.5" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A04 Design</text><text x="377.5" y="47" text-anchor="middle" font-size="9" fill="#ddd">Architectural</text><rect x="10" y="58" width="105" height="18" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="62.5" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A05 Misconfig</text><text x="62.5" y="70" text-anchor="middle" font-size="9" fill="#ddd">Defaults</text><rect x="115" y="58" width="105" height="18" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="167.5" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A06 Components</text><text x="167.5" y="70" text-anchor="middle" font-size="9" fill="#ddd">Old libraries</text><rect x="220" y="58" width="105" height="18" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="272.5" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A07 Auth Fail</text><text x="272.5" y="70" text-anchor="middle" font-size="9" fill="#ddd">Login flaws</text><rect x="325" y="58" width="105" height="18" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="377.5" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A08 Integrity</text><text x="377.5" y="70" text-anchor="middle" font-size="9" fill="#ddd">Supply chain</text><rect x="10" y="81" width="105" height="18" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="62.5" y="97" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A09 Logging</text><text x="62.5" y="93" text-anchor="middle" font-size="9" fill="#ddd">Monitoring</text><rect x="115" y="81" width="105" height="18" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="167.5" y="97" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A10 SSRF</text><text x="167.5" y="93" text-anchor="middle" font-size="9" fill="#ddd">Server request</text><rect x="10" y="105" width="210" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="115" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OWASP Top 10 2021</text><text x="115" y="124" text-anchor="middle" font-size="9" fill="#ddd">10 critical web security risks</text><rect x="230" y="105" width="200" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="330" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Prevention</text><text x="330" y="124" text-anchor="middle" font-size="9" fill="#ddd">Design, code, deploy, monitor</text><rect x="10" y="140" width="420" height="35" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="220" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OWASP Top 10</text><text x="220" y="158" text-anchor="middle" font-size="9" fill="#ddd">Awareness document for web security. Top risks: Access Control, Crypto, Inje</text><text x="220" y="169" text-anchor="middle" font-size="9" fill="#ddd">ction, Design, Misconfig.</text><text x="240" y="205" font-size="9" fill="#666" text-anchor="middle">OWASP Top 10: The 10 most critical web application</text><text x="240" y="217" font-size="9" fill="#666" text-anchor="middle"> security risks. Updated every 3-4 years.</text></svg>',codeExamples:[{title:"OWASP Dependency Check (Node.js)",useCase:"Scan for vulnerable components.",code:`# OWASP Dependency-Check (Java-based)
# npm install -g dependency-check
# dependency-check --project "My App" --scan ./

# Or use npm audit
npm audit
npm audit fix
npm audit fix --force

# Or use Snyk (cloud-based)
# npm install -g snyk
# snyk auth
# snyk test

# Integrate in CI/CD
# .github/workflows/security.yml
# - run: npm audit --audit-level=high`,description:"Dependency scanning tools for detecting known vulnerabilities in your dependencies."},{title:"Security Headers (Helmet)",useCase:"Set secure HTTP headers.",code:`const helmet = require('helmet');

app.use(helmet()); // sets all secure defaults

// Equivalent to individual headers:
// Content-Security-Policy: default-src 'self'
// X-Content-Type-Options: nosniff
// X-Frame-Options: SAMEORIGIN
// Strict-Transport-Security: max-age=31536000
// X-XSS-Protection: 0 (deprecated)
// Referrer-Policy: no-referrer
// Permissions-Policy: geolocation=()

// Customize:
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'cdn.example.com']
    }
  }
}));`,description:"Helmet sets secure HTTP headers that mitigate many OWASP Top 10 risks (XSS, clickjacking, MIME sniffing)."},{title:"Rate Limiting (Brute Force Prevention)",useCase:"Mitigate A07 auth failures.",code:`const rateLimit = require('express-rate-limit');

// Global rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Auth-specific (stricter)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts per window
  message: {
    error: 'Too many login attempts. Try again later.'
  },
  skipSuccessfulRequests: true, // count only failures
});
app.post('/login', authLimiter, loginHandler);`,description:"Rate limiting prevents brute force attacks, credential stuffing, and DoS — addresses A07 and A04."},{title:"Input Validation (Zod Schema)",useCase:"Prevent injection (A03).",code:`const { z } = require('zod');

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100)
});

app.post('/login', (req, res) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.flatten()
    });
  }

  const { email, password } = result.data;
  // email and password are validated strings
  // No injection possible via these inputs
});

// Also sanitize against NoSQL injection:
const sanitize = require('mongo-sanitize');
const cleanBody = sanitize(req.body);`,description:"Input validation with Zod prevents injection attacks by ensuring data conforms to expected types."},{title:"SSRF Protection Middleware",useCase:"Prevent Server-Side Request Forgery.",code:`const { URL } = require('url');

// Block private/reserved IP ranges
const BLOCKED_IPS = [
  '127.0.0.0/8', '10.0.0.0/8',
  '172.16.0.0/12', '192.168.0.0/16',
  '169.254.0.0/16', '0.0.0.0/8',
  '::1', 'fc00::/7'
];

function validateRedirectUrl(url) {
  try {
    const parsed = new URL(url);

    // Only allow HTTP/HTTPS
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return false;
    }

    // Block internal IPs
    const hostname = parsed.hostname;
    if (BLOCKED_IPS.some(range =>
      ipRangeContains(range, hostname)
    )) {
      return false;
    }

    // Domain allowlist (recommended)
    const allowed = ['api.external.com', 'data.example.com'];
    return allowed.includes(hostname);
  } catch {
    return false;
  }
}`,description:"SSRF protection: validate and restrict URLs that the server can fetch — block internal IP ranges."},{title:"Security Logging Middleware",useCase:"Cover A09 logging failures.",code:`// Security event logger
function logSecurityEvent(event, req, details) {
  const log = {
    timestamp: new Date().toISOString(),
    event,
    userId: req.user?.sub || req.session?.userId,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    path: req.path,
    method: req.method,
    details
  };
  
  // Send to centralized logging (Elastic, Datadog)
  console.warn('SECURITY:', JSON.stringify(log));
}

// Log auth events
app.post('/login', (req, res, next) => {
  // On success:
  logSecurityEvent('LOGIN_SUCCESS', req, { email });
  // On failure:
  logSecurityEvent('LOGIN_FAILED', req, { email, reason });
});

// Log access denials
app.use('/api/admin', (req, res, next) => {
  if (!isAdmin(req)) {
    logSecurityEvent('ACCESS_DENIED', req, {
      resource: req.path
    });
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});`,description:"Comprehensive security logging covers A09 — log auth events, access denials, and privilege changes."}],mcqQuestions:[{question:"What is the #1 risk in OWASP Top 10 (2021)?",options:["Injection","Broken Access Control","XSS","Cryptographic Failures"],answer:1,explanation:"Broken Access Control moved to #1 in 2021, ahead of injection and cryptographic failures."},{question:"What is A03: Injection?",options:["Weak passwords","SQL/NoSQL/Command injection","Missing MFA","Outdated libraries"],answer:1,explanation:"Injection covers SQL, NoSQL, OS command, LDAP, and template injection."},{question:"What is A06 about?",options:["Access control","Vulnerable and outdated components","Logging failures","SSRF"],answer:1,explanation:"A06 covers using libraries/frameworks with known CVEs — prevented by dependency scanning."},{question:"What is A10: SSRF?",options:["SQL injection","Server-Side Request Forgery","Session management","Buffer overflow"],answer:1,explanation:"SSRF tricks the server into making requests to internal resources or cloud metadata endpoints."},{question:"What does A04: Insecure Design cover?",options:["Code bugs","Architectural flaws before code","Network security","Physical security"],answer:1,explanation:"A04 addresses design-level flaws: missing threat modeling, lack of rate limiting, insufficient security requirements."},{question:"What is the best approach to OWASP Top 10?",options:["Fix after deployment","Use as design checklist","Ignore unless breached","Only fix injection"],answer:1,explanation:"Use OWASP Top 10 as a security checklist during design and code review — prevent, don\\'t react."}]};export{e as auth_owasp};
