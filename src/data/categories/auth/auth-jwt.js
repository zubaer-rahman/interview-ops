export const auth_jwt = {
  "id": "auth-jwt",
  "title": "JWT (JSON Web Tokens)",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "JWT is a compact, URL-safe token format for securely transmitting claims between parties. Defined by RFC 7519.",
    "Structure: Header (algorithm + type), Payload (claims), Signature (prevents tampering).",
    "JWTs are signed (integrity) but NOT encrypted (anyone with the token can read the payload). Do not store secrets in payload.",
    "Common use: stateless authentication (server validates signature without session lookup) and secure API access."
  ],
  "laymanDefinition": "A JWT is like a tamper-proof ID card. The header says \"this uses SHA-256\". The payload says \"user_id: 42, role: admin\". The signature is a cryptographic seal — if someone changes the payload, the seal breaks and the server rejects it. But anyone can read the card's contents.",
  "deepDive": [
    {
      "heading": "JWT Structure",
      "text": "Header: {\"alg\": \"HS256\", \"typ\": \"JWT\"}. Payload: {\"sub\": \"123\", \"name\": \"Alice\", \"iat\": 1516239022}. Signature: HMACSHA256(base64UrlEncode(header) + \".\" + base64UrlEncode(payload), secret). All three parts are base64url-encoded and dot-separated."
    },
    {
      "heading": "Signing Algorithms",
      "text": "HS256 (HMAC with SHA-256): symmetric — same secret signs and verifies. RS256 (RSA with SHA-256): asymmetric — private key signs, public key verifies. ES256 (ECDSA): elliptic curve. For microservices: use RS256 so services can verify without the signing key."
    },
    {
      "heading": "JWT Claims (Registered)",
      "text": "iss (issuer): who issued the token. sub (subject): who the token is about. aud (audience): intended recipient. exp (expiration): expiry timestamp. nbf (not before): token valid after this time. iat (issued at): when token was issued. jti (JWT ID): unique identifier."
    },
    {
      "heading": "Token Lifetime and Refresh",
      "text": "Access tokens: short-lived (15 min). Refresh tokens: long-lived (7-30 days). JWT cannot be revoked server-side (stateless). Solution: short expiry + refresh tokens. For immediate revocation: maintain a blocklist (adds state)."
    },
    {
      "heading": "Security Best Practices",
      "text": "Store tokens securely (HttpOnly cookies, not localStorage for SPAs). Use short expiration. Validate all claims (exp, nbf, aud, iss). Use HTTPS. Rotate signing keys. Never put secrets in payload. Validate signature algorithm (prevent alg=none attack)."
    }
  ],
  "interviewAnswer": "JWT enables stateless authentication ideal for distributed systems and microservices. Understand the trade-off: stateless means scalable but tokens cannot be revoked. Always validate the signature, expiration, and audience. Never store sensitive data in the payload.",
  "interviewQuestions": [
    {
      "question": "What is JWT?",
      "answer": "JSON Web Token — a compact, URL-safe token format for securely transmitting claims between parties. RFC 7519."
    },
    {
      "question": "What are the three parts of a JWT?",
      "answer": "Header (algorithm + type), Payload (claims), Signature (cryptographic verification). Dot-separated: xxx.yyy.zzz."
    },
    {
      "question": "Are JWTs encrypted?",
      "answer": "No. JWTs are signed to prevent tampering but the payload is base64-encoded (not encrypted). Anyone can decode and read the payload."
    },
    {
      "question": "What is the difference between HS256 and RS256?",
      "answer": "HS256 is symmetric (same key for sign + verify). RS256 is asymmetric (private sign, public verify). RS256 is safer for microservices."
    },
    {
      "question": "How do you handle JWT revocation?",
      "answer": "Short expiration times. Add refresh tokens. Maintain a blocklist for immediate revocation (adds state, but necessary for some use cases)."
    },
    {
      "question": "What claims should a JWT include?",
      "answer": "sub (user id), exp (expiry), iat (issued at), aud (audience), iss (issuer). Optionally: role, permissions."
    },
    {
      "question": "What is the alg=none attack?",
      "answer": "An attacker changes the algorithm to \"none\" and removes the signature. Always validate that the algorithm matches what you expect."
    },
    {
      "question": "Where should you store JWTs in a browser?",
      "answer": "HttpOnly, Secure, SameSite cookies are safest. localStorage is vulnerable to XSS."
    },
    {
      "question": "What is the typical access token lifetime?",
      "answer": "15 minutes for access tokens. Refresh tokens: 7-30 days."
    },
    {
      "question": "What does the jti claim do?",
      "answer": "JWT ID — a unique identifier for the token. Can be used to prevent replay attacks by tracking used jti values."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">JWT (JSON Web Tokens)</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Header</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Algorithm</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Payload</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Claims</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Signature</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Verification</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Access Token</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">15 min TTL</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Refresh Token</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">7-30 day TTL</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">JWT (JSON Web Token)</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Signed, URL-safe token format for statele</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ss authentication.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">JWT: Header.Payload.Signature — compact, signed, s</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tateless authentication tokens.</text></svg>",
  "codeExamples": [
    {
      "title": "JWT Sign and Verify (Node.js)",
      "useCase": "Using jsonwebtoken library.",
      "code": "const jwt = require('jsonwebtoken');\n\n// Sign (create token)\nconst token = jwt.sign({\n  sub: user.id,\n  role: user.role,\n  name: user.name\n}, process.env.JWT_SECRET, {\n  expiresIn: '15m',\n  audience: 'my-app',\n  issuer: 'auth-service'\n});\n\n// Verify (validate token)\ntry {\n  const decoded = jwt.verify(token, process.env.JWT_SECRET, {\n    audience: 'my-app',\n    issuer: 'auth-service'\n  });\n  req.user = decoded;\n} catch (err) {\n  // Token expired or invalid\n  res.status(401).json({ error: 'Invalid token' });\n}",
      "description": "JWT signing and verification with jsonwebtoken library."
    },
    {
      "title": "JWT Middleware (Express)",
      "useCase": "Protect routes with JWT.",
      "code": "const authenticateJWT = (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  \n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'Token required' });\n  }\n\n  const token = authHeader.split(' ')[1];\n\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    if (err.name === 'TokenExpiredError') {\n      return res.status(401).json({ error: 'Token expired' });\n    }\n    return res.status(403).json({ error: 'Invalid token' });\n  }\n};\n\napp.get('/api/profile', authenticateJWT, (req, res) => {\n  res.json({ user: req.user });\n});",
      "description": "JWT authentication middleware for Express routes."
    },
    {
      "title": "RS256 Asymmetric JWT",
      "useCase": "Private/public key signing.",
      "code": "const fs = require('fs');\nconst jwt = require('jsonwebtoken');\n\n// Auth service (signs tokens)\nconst privateKey = fs.readFileSync('private.pem');\nconst token = jwt.sign({ sub: user.id }, privateKey, {\n  algorithm: 'RS256',\n  expiresIn: '15m'\n});\n\n// API service (verifies tokens, no private key)\nconst publicKey = fs.readFileSync('public.pem');\nconst decoded = jwt.verify(token, publicKey, {\n  algorithms: ['RS256']\n});\n\n// Generate keys: openssl genrsa -out private.pem 2048\n// openssl rsa -in private.pem -pubout -out public.pem",
      "description": "RS256 allows services to verify tokens without access to the private signing key."
    },
    {
      "title": "JWT Decode (without verify)",
      "useCase": "NEVER trust decoded payload.",
      "code": "// WARNING: This only decodes — no signature verification!\nconst decoded = jwt.decode(token); // no secret needed!\n\n// Anyone can do this — the payload is readable\nconsole.log(decoded); // { sub: 42, role: 'admin' }\n\n// ALWAYS verify before trusting:\nconst verified = jwt.verify(token, secret);\n// Throws if signature is invalid, expired, etc.\n\n// NEVER trust: req.headers.authorization decoded payload\n// ALWAYS verify on the server",
      "description": "Decoding without verification reveals payload but does not validate authenticity."
    },
    {
      "title": "Storing JWT in HttpOnly Cookie",
      "useCase": "Secure token storage.",
      "code": "res.cookie('access_token', token, {\n  httpOnly: true, // not accessible via JS\n  secure: true,   // HTTPS only\n  sameSite: 'strict', // CSRF protection\n  maxAge: 15 * 60 * 1000 // 15 minutes\n});\n\n// Reading the cookie (cookie-parser middleware)\napp.use(cookieParser());\n\nconst token = req.cookies.access_token;\n\n// HttpOnly prevents XSS from stealing the token\n// Secure prevents HTTP (man-in-the-middle)\n// SameSite prevents CSRF",
      "description": "HttpOnly cookies are the most secure browser storage for JWTs."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What are the three parts of a JWT?",
      "options": [
        "Header, Body, Footer",
        "Header, Payload, Signature",
        "Header, Claims, Cipher",
        "Meta, Data, Hash"
      ],
      "answer": 1,
      "explanation": "JWT = Header.Payload.Signature (three dot-separated base64url parts)."
    },
    {
      "question": "Are JWT payloads encrypted?",
      "options": [
        "Yes",
        "No, only signed",
        "Yes if using JWE",
        "Depends on algorithm"
      ],
      "answer": 1,
      "explanation": "JWTs are signed (integrity) but payload is base64-encoded (readable). Use JWE for encryption."
    },
    {
      "question": "What algorithm is asymmetric?",
      "options": [
        "HS256",
        "RS256",
        "Both",
        "Neither"
      ],
      "answer": 1,
      "explanation": "RS256 uses RSA key pair (private sign, public verify). HS256 uses a single shared secret."
    },
    {
      "question": "How do you handle JWT revocation?",
      "options": [
        "Long-lived tokens",
        "Short expiry + refresh tokens",
        "Stored in database",
        "Cannot be revoked"
      ],
      "answer": 1,
      "explanation": "Use short expiration and refresh tokens. For immediate needs: blocklist with short TTL."
    },
    {
      "question": "Where should you NOT store JWTs?",
      "options": [
        "HttpOnly cookie",
        "localStorage",
        "Memory",
        "Authorization header"
      ],
      "answer": 1,
      "explanation": "localStorage is vulnerable to XSS — use HttpOnly cookies instead."
    },
    {
      "question": "What is the default algorithm JWT attack?",
      "options": [
        "alg=none",
        "alg=HS256",
        "alg=RS256",
        "alg=ES256"
      ],
      "answer": 0,
      "explanation": "Attackers change alg to \"none\" to bypass verification. Always validate the algorithm."
    }
  ]
};
