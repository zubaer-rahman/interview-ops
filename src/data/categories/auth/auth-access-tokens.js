export const auth_access_tokens = {
  "id": "auth-access-tokens",
  "title": "Access Tokens",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Access tokens are credentials used to access protected resources (APIs). They prove the bearer has authorization.",
    "Access tokens are sent with every API request, typically in the Authorization: Bearer header.",
    "They are short-lived (15 min) to limit damage if stolen. They can be opaque (random string) or structured (JWT).",
    "The server validates the token on each request: checks signature (JWT) or database lookup (opaque), expiration, and permissions."
  ],
  "laymanDefinition": "An access token is like a convention badge. It shows your name, role, and which sessions you can attend. Security checks it at every door. The badge expires at 5 PM every day (short-lived). If you lose it, someone can only use it until expiry.",
  "deepDive": [
    {
      "heading": "Bearer Token Usage",
      "text": "Authorization: Bearer <token>. \"Bearer\" means anyone who bears (holds) the token can use it. Must use HTTPS to prevent interception. Token sent with every API request. Server extracts and validates on every call."
    },
    {
      "heading": "JWT Access Tokens",
      "text": "Self-contained: contain user ID, role, permissions, expiry. Stateless: server validates signature without database lookup. No revocation without blocklist. Good for distributed systems and microservices."
    },
    {
      "heading": "Opaque Access Tokens",
      "text": "Random string stored in server database. Server looks up token on each request (database query). Supports immediate revocation (delete from DB). More secure but requires shared session store for distributed systems."
    },
    {
      "heading": "Token Validation on Every Request",
      "text": "Server must: verify signature (JWT) or DB lookup (opaque). Check expiration. Verify audience matches. Check if revoked (optional blocklist). Perform authorization (permissions). All in middleware before route handler."
    },
    {
      "heading": "Token Size Considerations",
      "text": "JWT access tokens carry claims in payload — larger than opaque tokens. Large JWTs increase HTTP overhead (headers). Keep claims minimal (user ID, role, few permissions). Store detailed profile info in database, fetch only when needed."
    }
  ],
  "interviewAnswer": "Access tokens are the keys to your API. Short lifetimes limit exposure. JWTs enable stateless validation. Opaque tokens enable immediate revocation. Choose based on your architecture: JWTs for microservices, opaque for monoliths with centralized session stores.",
  "interviewQuestions": [
    {
      "question": "What is an access token?",
      "answer": "A credential sent with API requests to prove authorization to access protected resources."
    },
    {
      "question": "How is an access token typically sent?",
      "answer": "In the Authorization header: Authorization: Bearer <token>."
    },
    {
      "question": "What is the difference between JWT and opaque tokens?",
      "answer": "JWT: self-contained, stateless, no DB lookup. Opaque: stored in DB, requires lookup, supports immediate revocation."
    },
    {
      "question": "Why are access tokens short-lived?",
      "answer": "To limit the window of opportunity if the token is stolen. Typical: 15 minutes."
    },
    {
      "question": "What does token validation include?",
      "answer": "Signature verification, expiration check, audience validation, permission check."
    },
    {
      "question": "Can JWT access tokens be revoked?",
      "answer": "Not inherently. They are stateless. Revocation requires a blocklist (adds state)."
    },
    {
      "question": "What is a bearer token?",
      "answer": "Any token that grants access to the bearer (holder). Must be protected with HTTPS."
    },
    {
      "question": "What should a JWT access token contain?",
      "answer": "sub (user ID), exp (expiry), aud (audience), role/permissions. Minimize payload size."
    },
    {
      "question": "How do opaque tokens support revocation?",
      "answer": "Delete from database or mark as revoked. Next request will fail the lookup."
    },
    {
      "question": "What is the overhead of opaque tokens?",
      "answer": "Database lookup on every request. For high-traffic APIs, use Redis cache for token storage."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Access Tokens</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bearer Token</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth header</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">JWT</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stateless</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Opaque</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">DB stored</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Validate</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Each request</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Short TTL</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">15 min</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Access Tokens</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">API credentials: Bearer header, short-li</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ved, validated on every request.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Access Tokens: Short-lived API credentials — JWT o</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">r opaque, validated on every request.</text></svg>",
  "codeExamples": [
    {
      "title": "Bearer Token Middleware (Express)",
      "useCase": "Validate access token.",
      "code": "const authenticate = async (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  \n  if (!authHeader?.startsWith('Bearer ')) {\n    return res.status(401).json({\n      error: 'Missing or invalid authorization header'\n    });\n  }\n\n  const token = authHeader.split(' ')[1];\n\n  try {\n    // Verify JWT\n    const decoded = jwt.verify(token, process.env.JWT_SECRET, {\n      audience: 'api.myapp.com'\n    });\n\n    // Check blocklist (optional)\n    const isRevoked = await redis.get(`revoked:${decoded.jti}`);\n    if (isRevoked) {\n      return res.status(401).json({ error: 'Token revoked' });\n    }\n\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n};",
      "description": "Bearer token validation middleware with JWT verification and blocklist check."
    },
    {
      "title": "Opaque Token System",
      "useCase": "Database-backed tokens.",
      "code": "// Generate opaque token\nasync function createAccessToken(userId) {\n  const token = crypto.randomBytes(32).toString('hex');\n  const hash = crypto.createHash('sha256')\n    .update(token).digest('hex');\n\n  await db.query(\n    \"INSERT INTO access_tokens (token_hash, user_id, expires_at)\n     VALUES ($1, $2, NOW() + INTERVAL '15 minutes')\",\n    [hash, userId]\n  );\n\n  return token; // plain text to client\n}\n\n// Validate opaque token\nasync function validateToken(token) {\n  const hash = crypto.createHash('sha256')\n    .update(token).digest('hex');\n  const result = await db.query(\n    \"SELECT * FROM access_tokens WHERE token_hash = $1\n     AND expires_at > NOW() AND revoked = false\",\n    [hash]\n  );\n  return result.rows[0] || null;\n}",
      "description": "Opaque token system with database storage and hash verification."
    },
    {
      "title": "Token Introspection (RFC 7662)",
      "useCase": "Standard token validation.",
      "code": "// OAuth 2.0 Token Introspection endpoint\napp.post('/introspect', async (req, res) => {\n  const { token } = req.body;\n\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n\n    res.json({\n      active: true,\n      sub: decoded.sub,\n      scope: decoded.scope,\n      client_id: decoded.client_id,\n      exp: decoded.exp,\n      iat: decoded.iat\n    });\n  } catch (err) {\n    res.json({ active: false });\n  }\n});",
      "description": "Token introspection provides a standard way to validate and inspect tokens."
    },
    {
      "title": "Minimal JWT Claims",
      "useCase": "Keep payload small.",
      "code": "// GOOD — minimal payload\nconst token = jwt.sign({\n  sub: 'user_42',\n  role: 'admin',\n  permissions: ['read:users', 'write:users']\n}, secret, { expiresIn: '15m' });\n\n// BAD — too much in payload\nconst token = jwt.sign({\n  sub: 'user_42',\n  name: 'Alice Johnson',\n  email: 'alice@example.com',\n  avatar: 'https://cdn.example.com/avatars/42.jpg',\n  department: 'Engineering',\n  preferences: { theme: 'dark', fontSize: 14 },\n  lastLogin: '2024-06-15T10:30:00Z'\n}, secret, { expiresIn: '15m' });\n// ~800 bytes vs ~200 bytes — significant overhead",
      "description": "Minimize JWT payload — include only what authorization needs. Fetch profile details separately."
    },
    {
      "title": "Token Revocation Blocklist",
      "useCase": "Optional JWT revocation.",
      "code": "// On logout / password change\nasync function revokeToken(jti, exp) {\n  // Store jti in Redis until token expires\n  const ttl = exp - Math.floor(Date.now() / 1000);\n  await redis.set(`revoked:${jti}`, 'true', { EX: ttl });\n}\n\n// In middleware:\nconst isRevoked = await redis.get(`revoked:${decoded.jti}`);\nif (isRevoked) {\n  return res.status(401).json({ error: 'Token revoked' });\n}\n\n// Cleanup: Redis auto-expires when token TTL elapses",
      "description": "JWT blocklist adds revocation capability while keeping tokens mostly stateless."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How are access tokens typically sent?",
      "options": [
        "URL parameter",
        "Authorization: Bearer header",
        "Cookie",
        "Request body"
      ],
      "answer": 1,
      "explanation": "Access tokens use the Authorization: Bearer header."
    },
    {
      "question": "What is the advantage of opaque tokens over JWT?",
      "options": [
        "Smaller size",
        "Immediate revocation",
        "Faster validation",
        "No signatures needed"
      ],
      "answer": 1,
      "explanation": "Opaque tokens can be revoked immediately by deleting from the database."
    },
    {
      "question": "What is the typical access token TTL?",
      "options": [
        "1 minute",
        "15 minutes",
        "24 hours",
        "7 days"
      ],
      "answer": 1,
      "explanation": "Access tokens typically last 15 minutes."
    },
    {
      "question": "What does token validation verify?",
      "options": [
        "Password",
        "Signature + expiry + permissions",
        "Username",
        "Email"
      ],
      "answer": 1,
      "explanation": "Token validation checks signature, expiration, audience, and permissions."
    },
    {
      "question": "What is a bearer token?",
      "options": [
        "Token that grants access to holder",
        "Token issued by a specific bank",
        "Hardware security key",
        "Biometric scan"
      ],
      "answer": 0,
      "explanation": "Bearer tokens grant access to anyone holding them."
    },
    {
      "question": "How do you revoke a JWT?",
      "options": [
        "Delete the token",
        "Add to blocklist",
        "Change password",
        "Wait for expiry"
      ],
      "answer": 1,
      "explanation": "JWTs are stateless — revocation requires a blocklist with TTL."
    }
  ]
};
