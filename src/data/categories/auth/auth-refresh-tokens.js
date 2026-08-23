export const auth_refresh_tokens = {
  "id": "auth-refresh-tokens",
  "title": "Refresh Tokens",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Refresh tokens are long-lived credentials used to obtain new access tokens without requiring the user to re-authenticate.",
    "Access tokens: short-lived (15 min), sent with each API request. Refresh tokens: long-lived (7-30 days), used only to get new access tokens.",
    "Refresh tokens must be stored securely (server-side database, encrypted). They can be revoked (unlike stateless JWTs).",
    "Rotation: each time a refresh token is used, the old one is invalidated and a new one issued. Prevents replay if stolen."
  ],
  "laymanDefinition": "A refresh token is like a \"renew your ticket\" pass at an amusement park. Your ride ticket (access token) expires after 15 minutes. Instead of leaving the park and buying a new ticket, you show your renewal pass (refresh token) at the guest services booth to get a new ride ticket.",
  "deepDive": [
    {
      "heading": "Access Token vs Refresh Token",
      "text": "Access token: short TTL (15 min), sent with every API call in Authorization header. Refresh token: long TTL (7-30 days), stored securely, sent only to /token endpoint. If access token is stolen, attacker has limited window. If refresh token is stolen, it can be revoked."
    },
    {
      "heading": "Refresh Token Rotation",
      "text": "When a refresh token is used to obtain new tokens, the old refresh token is invalidated and a new one is returned. This prevents replay if a refresh token is stolen — the attacker and legitimate user cannot both use the same token."
    },
    {
      "heading": "Refresh Token Storage",
      "text": "Server: store in database with expiration, user ID, family ID (for rotation tracking). Hash the token for storage (like passwords). Client: store in HttpOnly cookie (web) or secure keychain (mobile). Never in localStorage."
    },
    {
      "heading": "Revocation Strategies",
      "text": "Database lookup: check if token is revoked on each use. Token family: track token lineage — if an old, already-used token is presented, revoke the entire family (token reuse detection). Absolute expiry: set a maximum lifetime (e.g., 30 days)."
    },
    {
      "heading": "Refresh Token Flow",
      "text": "1. User logs in → get access + refresh tokens. 2. Access token expires (401 response). 3. Client calls /refresh with refresh token. 4. Server validates refresh token, issues new access + refresh (rotated). 5. Old refresh token invalidated."
    }
  ],
  "interviewAnswer": "Refresh tokens balance security and user experience. Short-lived access tokens limit damage if stolen. Rotating refresh tokens prevent replay attacks. Store refresh tokens securely and implement revocation. Token family detection catches stolen token usage.",
  "interviewQuestions": [
    {
      "question": "What is a refresh token?",
      "answer": "A long-lived credential used to obtain new access tokens without re-authentication."
    },
    {
      "question": "What is the typical lifetime of an access token?",
      "answer": "Short: 15 minutes. Refresh token: 7-30 days."
    },
    {
      "question": "What is refresh token rotation?",
      "answer": "Issuing a new refresh token and invalidating the old one each time it is used. Prevents replay."
    },
    {
      "question": "How do you detect stolen refresh tokens?",
      "answer": "Token family tracking — if a revoked (already rotated) token is used, invalidate all tokens in that family."
    },
    {
      "question": "Where should refresh tokens be stored on the server?",
      "answer": "In a database table with hashed token, user ID, expiration, and family ID."
    },
    {
      "question": "Where should refresh tokens be stored on the client?",
      "answer": "HttpOnly, Secure, SameSite cookie. Mobile: system keychain."
    },
    {
      "question": "Can refresh tokens be revoked?",
      "answer": "Yes. Delete from database or mark as revoked. This is a key advantage over stateless JWTs."
    },
    {
      "question": "What happens when an access token expires?",
      "answer": "The client receives a 401 response and uses the refresh token to get a new access token."
    },
    {
      "question": "What is the refresh token grant in OAuth?",
      "answer": "grant_type=refresh_token — the OAuth 2.0 grant for refreshing access tokens."
    },
    {
      "question": "Should refresh tokens be stored in localStorage?",
      "answer": "No. localStorage is accessible to JavaScript (XSS risk). Use HttpOnly cookies."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Refresh Tokens</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Login</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Get both tokens</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Access Token</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">15 min, API calls</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Expired (401)</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Use refresh token</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"270\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"225\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Refresh Token</text><text x=\"225\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Get new pair</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"100\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rotation + Revocation</text><text x=\"390\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Old invalidated. New issued. Sto</text><text x=\"390\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">len token detection.</text><text x=\"240\" y=\"185\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Refresh Tokens: Long-lived tokens that issue new a</text><text x=\"240\" y=\"197\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ccess tokens. Rotate and revoke for security.</text></svg>",
  "codeExamples": [
    {
      "title": "Refresh Token Endpoint (Express)",
      "useCase": "Token refresh implementation.",
      "code": "app.post('/auth/refresh', async (req, res) => {\n  const refreshToken = req.cookies.refresh_token;\n  if (!refreshToken) {\n    return res.status(401).json({ error: 'Refresh token required' });\n  }\n\n  // Hash and find in database\n  const hash = crypto.createHash('sha256')\n    .update(refreshToken).digest('hex');\n\n  const stored = await db.query(\n    \"SELECT * FROM refresh_tokens WHERE token_hash = $1\n     AND expires_at > NOW()\", [hash]\n  );\n\n  if (!stored.rows[0]) {\n    // Possible token reuse attack — revoke family!\n    await revokeTokenFamily(familyId);\n    return res.status(401).json({ error: 'Invalid token' });\n  }\n\n  // Rotate: issue new tokens, revoke old\n  const tokens = await issueTokens(stored.rows[0].user_id);\n  await revokeToken(hash);\n\n  setTokenCookies(res, tokens);\n  res.json({ access_token: tokens.accessToken });\n});",
      "description": "Complete refresh endpoint with rotation and revocation detection."
    },
    {
      "title": "Token Issuance with Family Tracking",
      "useCase": "Rotation and reuse detection.",
      "code": "async function issueTokens(userId) {\n  const crypto = require('crypto');\n  const accessToken = jwt.sign(\n    { sub: userId },\n    process.env.JWT_SECRET,\n    { expiresIn: '15m' }\n  );\n\n  // Refresh token with family tracking\n  const familyId = crypto.randomUUID();\n  const refreshToken = crypto.randomBytes(48).toString('hex');\n  const tokenHash = crypto.createHash('sha256')\n    .update(refreshToken).digest('hex');\n\n  await db.query(\n    \"INSERT INTO refresh_tokens\n     (token_hash, user_id, family_id, expires_at)\n     VALUES ($1, $2, $3, NOW() + INTERVAL '30 days')\",\n    [tokenHash, userId, familyId]\n  );\n\n  return { accessToken, refreshToken, familyId };\n}",
      "description": "Token issuance with family tracking for rotation and reuse detection."
    },
    {
      "title": "Token Reuse Detection",
      "useCase": "Revoke family on theft.",
      "code": "async function revokeTokenFamily(familyId) {\n  // Token reuse detected — revoke ALL tokens in family\n  await db.query(\n    \"DELETE FROM refresh_tokens WHERE family_id = $1\",\n    [familyId]\n  );\n\n  // Log security event\n  console.error('Token reuse detected for family:', familyId);\n}",
      "description": "If an old, already-rotated token is used, revoke the entire token family."
    },
    {
      "title": "Setting Token Cookies",
      "useCase": "Secure cookie configuration.",
      "code": "function setTokenCookies(res, tokens) {\n  // Access token: short-lived\n  res.cookie('access_token', tokens.accessToken, {\n    httpOnly: true,\n    secure: true,\n    sameSite: 'strict',\n    maxAge: 15 * 60 * 1000,\n    path: '/api'\n  });\n\n  // Refresh token: long-lived, restricted path\n  res.cookie('refresh_token', tokens.refreshToken, {\n    httpOnly: true,\n    secure: true,\n    sameSite: 'strict',\n    maxAge: 30 * 24 * 60 * 60 * 1000,\n    path: '/auth/refresh' // only sent to refresh endpoint\n  });\n}",
      "description": "Secure cookie setup with path restriction for refresh token."
    },
    {
      "title": "Client-Side Refresh Logic",
      "useCase": "Automatic token refresh.",
      "code": "// Axios interceptor for automatic refresh\napi.interceptors.response.use(\n  (response) => response,\n  async (error) => {\n    const originalRequest = error.config;\n\n    if (error.response?.status === 401 &&\n        !originalRequest._retry) {\n      originalRequest._retry = true;\n\n      try {\n        const { data } = await axios.post('/auth/refresh');\n        originalRequest.headers.Authorization\n          = `Bearer ${data.access_token}`;\n        return api(originalRequest);\n      } catch (refreshError) {\n        // Redirect to login\n        window.location.href = '/login';\n      }\n    }\n\n    return Promise.reject(error);\n  }\n);",
      "description": "Axios interceptor automatically refreshes expired tokens."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the typical access token lifetime?",
      "options": [
        "Seconds",
        "15 minutes",
        "24 hours",
        "30 days"
      ],
      "answer": 1,
      "explanation": "Access tokens typically last 15 minutes. Refresh tokens last days/weeks."
    },
    {
      "question": "What does refresh token rotation do?",
      "options": [
        "Extends token lifetime",
        "Issues new token, invalidates old",
        "Encrypts the token",
        "Changes user password"
      ],
      "answer": 1,
      "explanation": "Rotation issues a new refresh token and invalidates the old one each time."
    },
    {
      "question": "How do you detect stolen refresh tokens?",
      "options": [
        "IP tracking",
        "Token family reuse detection",
        "Email notification",
        "Rate limiting"
      ],
      "answer": 1,
      "explanation": "If an already-rotated token is used, it indicates token theft — revoke the entire family."
    },
    {
      "question": "Where should refresh tokens be stored?",
      "options": [
        "localStorage",
        "HttpOnly cookie",
        "URL parameter",
        "Custom header"
      ],
      "answer": 1,
      "explanation": "HttpOnly cookies are the most secure browser storage option."
    },
    {
      "question": "Can refresh tokens be revoked?",
      "options": [
        "Yes",
        "No",
        "Only if encrypted",
        "Only after expiration"
      ],
      "answer": 0,
      "explanation": "Refresh tokens can be revoked (deleted from database or marked invalid)."
    },
    {
      "question": "What OAuth grant type uses refresh tokens?",
      "options": [
        "authorization_code",
        "refresh_token",
        "client_credentials",
        "password"
      ],
      "answer": 1,
      "explanation": "grant_type=refresh_token is used to refresh an access token."
    }
  ]
};
