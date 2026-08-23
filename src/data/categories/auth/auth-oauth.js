export const auth_oauth = {
  "id": "auth-oauth",
  "title": "OAuth 2.0",
  "difficulty": "advanced",
  "estimatedMinutes": 35,
  "tldr": [
    "OAuth 2.0 is an authorization framework that enables third-party applications to obtain limited access to user resources without sharing passwords.",
    "Roles: Resource Owner (user), Client (app), Authorization Server, Resource Server.",
    "Grant types: Authorization Code (most common, for server-side apps), Implicit (deprecated), Client Credentials (machine-to-machine), Resource Owner Password (legacy).",
    "OAuth 2.0 is for authorization, not authentication. OpenID Connect (OIDC) adds authentication on top of OAuth 2.0."
  ],
  "laymanDefinition": "OAuth 2.0 is like a valet key for your car. You give the valet (third-party app) a special key that only opens the doors and drives within a limited area (scoped access). The valet cannot open the trunk or change radio presets. When the valet is done, the key stops working.",
  "deepDive": [
    {
      "heading": "Authorization Code Grant (Best Practice)",
      "text": "User clicks \"Login with Google\". Redirected to auth server. User logs in and consents. Auth server returns authorization code to client (via redirect). Client exchanges code (with client secret) for access token. Token from server-side, never exposed to browser."
    },
    {
      "heading": "PKCE (Proof Key for Code Exchange)",
      "text": "Extension to Authorization Code flow for public clients (SPAs, mobile apps). Client generates code_verifier (random string) and code_challenge (SHA-256 hash). Auth server verifies the challenge when exchanging code. Prevents authorization code interception."
    },
    {
      "heading": "Client Credentials Grant",
      "text": "Machine-to-machine authentication. Client sends its credentials (client_id + client_secret) directly to auth server and receives access token. No user involvement. Used for: server-to-server APIs, background jobs, service accounts."
    },
    {
      "heading": "Scopes and Consent",
      "text": "Scope defines what the client can access: openid, profile, email, read:orders, write:orders. Users see a consent screen listing requested scopes. Granular scopes allow minimal access. Best practice: request only scopes you need, use the least privileged scope."
    },
    {
      "heading": "OpenID Connect (OIDC)",
      "text": "Authentication layer on top of OAuth 2.0. Adds ID token (JWT) containing user identity. UserInfo endpoint for getting user details. Standardized scopes: openid, profile, email. /authorize, /token, /userinfo endpoints. JWKS (JSON Web Key Set) for public key distribution."
    }
  ],
  "interviewAnswer": "OAuth 2.0 is the industry standard for delegated authorization. Always use Authorization Code + PKCE for browser-based apps. Use Client Credentials for server-to-server. OIDC adds authentication. Never use Implicit grant (deprecated due to security issues).",
  "interviewQuestions": [
    {
      "question": "What is OAuth 2.0?",
      "answer": "An authorization framework for delegated access — allowing third-party apps limited access without sharing user passwords."
    },
    {
      "question": "What are the four OAuth 2.0 roles?",
      "answer": "Resource Owner (user), Client (app), Authorization Server, Resource Server (API)."
    },
    {
      "question": "What is the best grant type for web apps?",
      "answer": "Authorization Code + PKCE (Proof Key for Code Exchange)."
    },
    {
      "question": "What is PKCE?",
      "answer": "Proof Key for Code Exchange — prevents authorization code interception by public clients (SPAs, mobile apps)."
    },
    {
      "question": "What is the difference between OAuth 2.0 and OpenID Connect?",
      "answer": "OAuth 2.0 is for authorization (access tokens). OIDC adds authentication (ID token with user identity)."
    },
    {
      "question": "What is an access token in OAuth?",
      "answer": "A credential that represents authorization to access specific resources (scopes). Usually a JWT or opaque string."
    },
    {
      "question": "What is a refresh token in OAuth?",
      "answer": "A long-lived token used to obtain new access tokens without user interaction."
    },
    {
      "question": "What is the Client Credentials grant?",
      "answer": "For machine-to-machine communication. Client authenticates directly; no user involved."
    },
    {
      "question": "What are scopes?",
      "answer": "Permissions that define what the client can access: read, write, profile, email, etc."
    },
    {
      "question": "What is the Implicit grant?",
      "answer": "A deprecated OAuth 2.0 flow where access tokens are returned directly in the URL fragment. No longer recommended due to token interception risks."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">OAuth 2.0</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth Code</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Best for web</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">+PKCE</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Secure SPA</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client Cred</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Machine</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Scopes</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Permissions</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OIDC</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auth layer</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OAuth 2.0</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Delegated authorization framework — acce</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ss without sharing passwords.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">OAuth 2.0: Authorization Code + PKCE, Client Crede</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ntials, Scopes, and OpenID Connect.</text></svg>",
  "codeExamples": [
    {
      "title": "Authorization Code Flow (Express)",
      "useCase": "OAuth 2.0 with Google.",
      "code": "const { google } = require('googleapis');\n\nconst oauth2Client = new google.auth.OAuth2(\n  process.env.GOOGLE_CLIENT_ID,\n  process.env.GOOGLE_CLIENT_SECRET,\n  'https://myapp.com/auth/callback'\n);\n\n// Step 1: Redirect user to Google\napp.get('/auth/google', (req, res) => {\n  const url = oauth2Client.generateAuthUrl({\n    access_type: 'offline',\n    scope: ['profile', 'email']\n  });\n  res.redirect(url);\n});\n\n// Step 2: Handle callback\napp.get('/auth/callback', async (req, res) => {\n  const { code } = req.query;\n  const { tokens } = await oauth2Client.getToken(code);\n  oauth2Client.setCredentials(tokens);\n\n  // tokens.access_token, tokens.refresh_token\n  // Store tokens securely, redirect to app\n});",
      "description": "Full OAuth 2.0 Authorization Code flow with Google."
    },
    {
      "title": "PKCE Flow for SPA",
      "useCase": "Secure OAuth for single-page apps.",
      "code": "// Generate code challenge (client-side)\nconst crypto = require('crypto');\n\nfunction generatePKCE() {\n  const verifier = crypto.randomBytes(32).toString('base64url');\n  const challenge = crypto.createHash('sha256')\n    .update(verifier)\n    .digest('base64url');\n  return { verifier, challenge };\n}\n\n// Step 1: Redirect with code_challenge\nconst { verifier, challenge } = generatePKCE();\n// Store verifier temporarily (memory/session)\nconst authUrl = `https://auth.example.com/authorize?\n  response_type=code&\n  client_id=${clientId}&\n  code_challenge=${challenge}&\n  code_challenge_method=S256&\n  redirect_uri=${redirectUri}`;\n\n// Step 2: Exchange code with verifier\nfetch('https://auth.example.com/token', {\n  method: 'POST',\n  body: new URLSearchParams({\n    grant_type: 'authorization_code',\n    code, code_verifier: verifier,\n    redirect_uri, client_id: clientId\n  })\n})",
      "description": "PKCE secures the Authorization Code flow for public clients like SPAs."
    },
    {
      "title": "Client Credentials (Server-to-Server)",
      "useCase": "Machine-to-machine auth.",
      "code": "// Server A: Get access token\nasync function getAccessToken() {\n  const response = await fetch(\n    'https://auth.example.com/token', {\n      method: 'POST',\n      headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" },\n      body: new URLSearchParams({\n        grant_type: 'client_credentials',\n        client_id: process.env.CLIENT_ID,\n        client_secret: process.env.CLIENT_SECRET,\n        scope: 'read:orders write:orders'\n      })\n    }\n  );\n  const data = await response.json();\n  return data.access_token;\n}\n\n// Server B: Validate token\napp.use('/api/orders', authenticateJWT);",
      "description": "Client Credentials grant for service-to-service API authentication."
    },
    {
      "title": "OpenID Connect ID Token",
      "useCase": "Authentication on top of OAuth.",
      "code": "// After Authorization Code flow, decode ID token\nconst jwt = require('jsonwebtoken');\n\n// Fetch JWKS (public keys) from auth server\nconst response = await fetch('https://auth.example.com/.well-known/jwks.json');\nconst jwks = await response.json();\n\n// Verify ID token\nconst decoded = jwt.verify(idToken, jwks, {\n  algorithms: ['RS256'],\n  audience: clientId,\n  issuer: 'https://auth.example.com'\n});\n\n// ID token contains:\n// { sub: \"google-oauth2|123\",\n//   name: \"Alice\",\n//   email: \"alice@example.com\",\n//   email_verified: true }",
      "description": "OpenID Connect verifies user identity through the ID token (JWT)."
    },
    {
      "title": "Custom Token Exchange",
      "useCase": "Service account impersonation.",
      "code": "// Exchange short-lived token for another service\nasync function exchangeToken(userToken, targetAudience) {\n  const response = await fetch(\n    'https://auth.example.com/token', {\n      method: 'POST',\n      body: new URLSearchParams({\n        grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n        subject_token: userToken,\n        subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n        audience: targetAudience\n      })\n    }\n  );\n  return response.json(); // new token for target service\n}",
      "description": "Token exchange allows impersonating a user context across microservices."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the best OAuth flow for server-side web apps?",
      "options": [
        "Implicit",
        "Authorization Code",
        "Client Credentials",
        "Resource Owner Password"
      ],
      "answer": 1,
      "explanation": "Authorization Code with PKCE is the recommended flow."
    },
    {
      "question": "What does PKCE prevent?",
      "options": [
        "Token theft",
        "Authorization code interception",
        "CSRF",
        "XSS"
      ],
      "answer": 1,
      "explanation": "PKCE prevents authorization code interception by public clients."
    },
    {
      "question": "What does OpenID Connect add to OAuth?",
      "options": [
        "Access tokens",
        "Authentication (ID token)",
        "Refresh tokens",
        "Scopes"
      ],
      "answer": 1,
      "explanation": "OpenID Connect adds an ID token with authenticated user identity."
    },
    {
      "question": "Which OAuth grant is for machine-to-machine?",
      "options": [
        "Authorization Code",
        "Client Credentials",
        "Implicit",
        "Device Code"
      ],
      "answer": 1,
      "explanation": "Client Credentials grant is for server-to-server communication."
    },
    {
      "question": "What are OAuth scopes?",
      "options": [
        "Token lifetimes",
        "Permission boundaries",
        "Encryption keys",
        "Server URLs"
      ],
      "answer": 1,
      "explanation": "Scopes define what resources the access token can access."
    },
    {
      "question": "Which OAuth flow is deprecated?",
      "options": [
        "Authorization Code",
        "Client Credentials",
        "Implicit",
        "Device Code"
      ],
      "answer": 2,
      "explanation": "The Implicit grant is deprecated due to security risks with token exposure in URLs."
    }
  ]
};
