export const express_cookie_parser = {
  "id": "express-cookie-parser",
  "title": "Cookie Parser",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Cookie parser middleware parses the Cookie header from incoming requests and populates req.cookies with an object keyed by cookie names.",
    "Supports signed cookies for integrity verification, preventing tampering by using a secret key to sign cookie values.",
    "Res.cookie() sets cookies on responses with options like maxAge, httpOnly, secure, sameSite, path, domain, and signed.",
    "Cookie options: httpOnly (not accessible via JS), secure (HTTPS only), sameSite (CSRF protection: strict, lax, none), maxAge/expires (lifetime)."
  ],
  "laymanDefinition": "Cookie parser is like a mail sorter that opens all envelopes (cookies) from a package (request) and organizes them by sender name (cookie name) into separate piles (req.cookies object).",
  "deepDive": [
    {
      "heading": "Parsing Unsigned Cookies",
      "text": "cookie-parser reads the Cookie header from requests and parses it into req.cookies. Example: Cookie: name=John; token=abc -> req.cookies = { name: \\'John\\', token: \\'abc\\' }. Supports JSON cookies. Handles URL encoding/decoding automatically."
    },
    {
      "heading": "Signed Cookies",
      "text": "Signed cookies use a secret key to create a signature: s:value.signature. cookie-parser verifies the signature and populates req.signedCookies. If signature is invalid, the cookie is rejected. Useful for session IDs, auth tokens stored in cookies."
    },
    {
      "heading": "Setting Cookies with res.cookie()",
      "text": "Express provides res.cookie(name, value, options) for setting cookies. Options: maxAge (ms), httpOnly (prevent JS access), secure (HTTPS only), sameSite (CSRF protection), path (URL scope), domain (domain scope), signed (sign the cookie). Multiple cookies can be set sequentially."
    },
    {
      "heading": "Cookie Options and Security",
      "text": "httpOnly: prevents XSS from reading cookies. secure: ensures cookies only sent over HTTPS in production. sameSite: strict (same-site only), lax (same-site + top-level GET), none (cross-site, requires secure). maxAge vs expires: maxAge is relative (ms), expires is absolute date."
    },
    {
      "heading": "Clearing and Deleting Cookies",
      "text": "res.clearCookie(name, options) removes a cookie. Must match the original path and domain options. Cookie is expired by setting maxAge: 0 or past date. Browser removes expired cookies. Always clear cookies on logout to prevent stale sessions."
    }
  ],
  "interviewAnswer": "Cookie parser middleware makes working with cookies simple. Parse incoming cookies, set outgoing cookies with security options, and use signed cookies for sensitive data that must not be tampered with.",
  "interviewQuestions": [
    {
      "question": "What does cookie-parser do?",
      "answer": "It parses the Cookie header from HTTP requests and populates req.cookies with an object. For signed cookies, it populates req.signedCookies after verifying the signature."
    },
    {
      "question": "What is the difference between req.cookies and req.signedCookies?",
      "answer": "req.cookies contains unsigned cookies (plain text). req.signedCookies contains cookies that were signed with the secret key. If a signed cookie was tampered with, it is excluded from req.signedCookies."
    },
    {
      "question": "How do you sign a cookie in Express?",
      "answer": "Set the signed option: res.cookie(\\'token\\', \\'myvalue\\', { signed: true }). cookie-parser will sign it using the secret provided during initialization: app.use(cookieParser(\\'mySecret\\'))."
    },
    {
      "question": "What are important cookie security options?",
      "answer": "httpOnly (prevents XSS reading), secure (HTTPS only), sameSite (CSRF prevention: strict, lax, none), maxAge/expires (lifetime), signed (tamper detection), path and domain (scope restriction)."
    },
    {
      "question": "What is the SameSite cookie attribute?",
      "answer": "SameSite controls when cookies are sent in cross-site requests. Strict: only same-site. Lax: same-site + top-level GET navigations. None: always (requires Secure). Lax is the modern default. None enables cross-site auth with OAuth widgets."
    },
    {
      "question": "How do you remove a cookie?",
      "answer": "res.clearCookie(\\'name\\', { path: \\'/\\' }). This sets the cookie with an expired date, causing the browser to remove it. Must match the original cookie\\'s path and domain options."
    },
    {
      "question": "How do you set a cookie\\'s expiration?",
      "answer": "Use maxAge (milliseconds from now) or expires (Date object). res.cookie(\\'session\\', \\'abc\\', { maxAge: 3600000 }) expires in 1 hour. res.cookie(\\'coupon\\', \\'SAVE20\\', { expires: new Date(\\'2025-12-31\\') })."
    },
    {
      "question": "What happens if cookie parsing fails?",
      "answer": "cookie-parser silently fails and returns an empty object for req.cookies. Invalid cookies are ignored. This prevents malformed cookies from crashing the application."
    },
    {
      "question": "How do you handle JSON cookies?",
      "answer": "cookie-parser automatically parses JSON cookie values if they start with j:. Example: \\'j:{\"name\":\"John\"}\\' becomes the parsed object. This is useful for complex cookie values."
    },
    {
      "question": "Can cookies be too large?",
      "answer": "Yes, browsers limit cookie size to ~4KB per cookie and ~50-100 cookies per domain. Store session IDs (small) in cookies, not large objects. Use server-side sessions for large data, with just the session ID in the cookie."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cookie Parser</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Request</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cookie: token=abc</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">cookie-parser</text><text x=\"260\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Parse cookies</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"93\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"95\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"75\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">req.cookies</text><text x=\"75\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unsigned</text><rect x=\"170\" y=\"95\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"235\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">req.signedCookies</text><text x=\"235\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verified</text><line x1=\"300\" y1=\"113\" x2=\"340\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"70\" width=\"120\" height=\"50\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"410\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route Handler</text><text x=\"410\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Use cookies</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cookie Parser: Parse Cookie header into req.cookies and req.signedCookies.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic cookie-parser Setup",
      "useCase": "Parsing cookies from requests.",
      "code": "const cookieParser = require('cookie-parser');\napp.use(cookieParser());\n\napp.get('/', (req, res) => {\n  console.log(req.cookies); // { name: 'John' }\n  res.send('Check console');\n});",
      "description": "Initializes cookie-parser without secret (unsigned cookies only). req.cookies contains all parsed cookies."
    },
    {
      "title": "Signed Cookies",
      "useCase": "Using signed cookies for integrity.",
      "code": "app.use(cookieParser('my_secret_key'));\n\napp.get('/set', (req, res) => {\n  res.cookie('session', 'abc123', { signed: true, httpOnly: true });\n  res.send('Cookie set');\n});\n\napp.get('/read', (req, res) => {\n  console.log(req.signedCookies); // { session: 'abc123' }\n  res.json(req.signedCookies);\n});",
      "description": "Sets a signed cookie with httpOnly. Signed cookies verified with secret. Tampered cookies excluded from req.signedCookies."
    },
    {
      "title": "Cookie Options",
      "useCase": "Setting secure and sameSite options.",
      "code": "app.get('/set', (req, res) => {\n  res.cookie('preferences', JSON.stringify({ theme: 'dark', lang: 'en' }), {\n    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days\n    httpOnly: true,\n    secure: process.env.NODE_ENV === 'production',\n    sameSite: 'lax',\n    path: '/'\n  });\n  res.send('Preferences saved');\n});",
      "description": "Sets a JSON cookie with maxAge, httpOnly, secure (production only), sameSite lax, and root path."
    },
    {
      "title": "Clearing Cookies",
      "useCase": "Removing cookies on logout.",
      "code": "app.post('/logout', (req, res) => {\n  res.clearCookie('session', { path: '/' });\n  res.clearCookie('preferences', { path: '/' });\n  res.json({ message: 'Logged out' });\n});",
      "description": "Clears cookies by expiring them. Must match original path option. Multiple cookies can be cleared."
    },
    {
      "title": "Reading Multiple Cookies",
      "useCase": "Accessing all cookie values.",
      "code": "app.get('/dashboard', (req, res) => {\n  const { session, preferences } = req.signedCookies;\n  const theme = preferences ? JSON.parse(preferences).theme : 'light';\n  if (!session) return res.status(401).send('Not authenticated');\n  res.render('dashboard', { theme });\n});",
      "description": "Reads signed session cookie for auth and signed preferences cookie for user settings."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does cookie-parser populate on the request object?",
      "options": [
        "req.cookies",
        "req.session",
        "req.body",
        "req.query"
      ],
      "answer": 0,
      "explanation": "cookie-parser populates req.cookies with parsed cookie key-value pairs."
    },
    {
      "question": "How does cookie-parser handle signed cookies?",
      "options": [
        "Decrypts them",
        "Verifies signature with secret",
        "Ignores them",
        "Parses as JSON"
      ],
      "answer": 1,
      "explanation": "cookie-parser verifies the signature using the secret key provided during initialization."
    },
    {
      "question": "What cookie option prevents JavaScript from accessing it?",
      "options": [
        "secure",
        "httpOnly",
        "sameSite",
        "maxAge"
      ],
      "answer": 1,
      "explanation": "httpOnly prevents client-side JavaScript from accessing the cookie via document.cookie."
    },
    {
      "question": "What method removes a cookie?",
      "options": [
        "res.deleteCookie()",
        "res.clearCookie()",
        "res.removeCookie()",
        "res.expireCookie()"
      ],
      "answer": 1,
      "explanation": "res.clearCookie() removes a cookie by setting it with an expired date."
    },
    {
      "question": "What does sameSite: \\'lax\\' allow?",
      "options": [
        "All cross-site requests",
        "Same-site + top-level GET navigations",
        "Only same-site requests",
        "All same-origin requests"
      ],
      "answer": 1,
      "explanation": "Lax mode sends cookies for same-site requests and top-level GET navigations."
    },
    {
      "question": "How do you pass a secret to cookie-parser?",
      "options": [
        "As argument to cookieParser()",
        "In env variable",
        "In config.json",
        "In app.set()"
      ],
      "answer": 0,
      "explanation": "Pass the secret as an argument: app.use(cookieParser(\\'secret\\'))."
    }
  ]
};
