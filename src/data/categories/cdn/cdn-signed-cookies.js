export const cdn_signed_cookies = {
  "id": "cdn-signed-cookies",
  "title": "Signed Cookies",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Signed cookies allow session-based access to private CDN content. Unlike signed URLs (per-file), signed cookies provide access to multiple resources within a path.",
    "A signed cookie is set by the application server containing a policy and signature. The CDN reads the cookie and validates it before serving any content request.",
    "Use cases: websites serving multiple private files (PDFs, images, videos), member-only content galleries, subscription services, paywalled content sites.",
    "CloudFront is the primary CDN supporting signed cookies. Other CDNs use token authentication (Cloudflare) or edge worker logic to implement equivalent functionality."
  ],
  "laymanDefinition": "A signed cookie is like a backstage pass at a concert that gives you access to all areas you're allowed in. Instead of showing a separate ticket for each room (signed URL), you show your all-access pass once (cookie), and it lets you into every authorized area.",
  "deepDive": [
    {
      "heading": "How Signed Cookies Work",
      "text": "1) User authenticates with app server. 2) App server creates policy (resource path, expiration, conditions). 3) Policy signed with private key. 4) Response includes Set-Cookie header with signed cookie. 5) User\\'s browser sends cookie with all subsequent requests. 6) CDN validates cookie, serves or denies content."
    },
    {
      "heading": "Cookie Format (CloudFront)",
      "text": "Three cookies: CloudFront-Policy (base64 policy), CloudFront-Signature (signature), CloudFront-Key-Pair-Id (key pair ID). All cookies set for domain .d123.cloudfront.net. Path set to /private/. Cookies are HTTP-only (not accessible via JS)."
    },
    {
      "heading": "Signed Cookie vs Signed URL Comparison",
      "text": "Signed Cookie: session-based, covers multiple files, good for pages with embedded resources. Signed URL: per-file, granular, good for direct download links. Signed Cookie: fewer URL tokens to manage. Signed URL: easier to share (single URL). Use signed cookies for secure websites, signed URLs for APIs/downloads."
    },
    {
      "heading": "Security Considerations",
      "text": "Cookies sent with every request: ensure path restriction limits scope. Expiration should be short (matching session duration). Use Secure and HttpOnly flags. Consider SameSite attribute. Cookies can be stolen via XSS — combine with Content-Security-Policy."
    },
    {
      "heading": "Implementation Steps (CloudFront)",
      "text": "Generate policy JSON. Base64-encode policy (URL-safe). Sign policy with RSA-SHA1 using private key. Base64-encode signature. Set three cookies in response. Configure CloudFront to trust cookies (forward cookies or whitelist CloudFront-* cookies)."
    }
  ],
  "interviewAnswer": "Signed cookies provide session-based CDN authentication. The app server sets cookies with an encrypted policy and signature. The CDN validates these cookies before serving any private content, enabling seamless access to multiple files in a session.",
  "interviewQuestions": [
    {
      "question": "What is a signed cookie?",
      "answer": "A cookie containing a signed policy for session-based CDN content access."
    },
    {
      "question": "How does a signed cookie differ from signed URL?",
      "answer": "Signed cookie covers multiple files (session), signed URL is per-file."
    },
    {
      "question": "What cookies does CloudFront use for signed cookies?",
      "answer": "CloudFront-Policy, CloudFront-Signature, CloudFront-Key-Pair-Id."
    },
    {
      "question": "When should you use signed cookies?",
      "answer": "When serving multiple private files in a web page (images, PDFs, videos)."
    },
    {
      "question": "How does the CDN validate a signed cookie?",
      "answer": "It reads the cookie, decodes the policy, verifies the signature, checks expiration."
    },
    {
      "question": "What flags should signed cookies have?",
      "answer": "Secure, HttpOnly, and appropriate Path/SameSite attributes."
    },
    {
      "question": "Can signed cookies be stolen?",
      "answer": "Yes, via XSS. Protect with CSP, HttpOnly, and short expiration."
    },
    {
      "question": "Which CDNs support signed cookies natively?",
      "answer": "CloudFront. Other CDNs use token auth or edge workers."
    },
    {
      "question": "What path should signed cookies use?",
      "answer": "The path prefix of the private content (e.g., /private/)."
    },
    {
      "question": "What happens when the cookie expires?",
      "answer": "The CDN returns 403; user needs to re-authenticate with the app server."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Signed Cookies</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logs in to app</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">App Server</text><text x=\"65\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Authenticates, creat</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">es signed cookie</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"160\" height=\"50\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"240\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Browser</text><text x=\"240\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stores CloudFront-Policy, -Si</text><text x=\"240\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">gnature, -Key-Pair-Id cookies</text><line x1=\"320\" y1=\"60\" x2=\"360\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"60\" x2=\"360\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"35\" width=\"100\" height=\"50\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"420\" y=\"57\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Validates cookies </text><text x=\"420\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">with public key. C</text><text x=\"420\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hecks expiration.</text><line x1=\"470\" y1=\"60\" x2=\"490\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"470\" y1=\"60\" x2=\"490\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"500\" y=\"25\" width=\"90\" height=\"50\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"545\" y=\"41\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Content</text><text x=\"545\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">200 OK for all r</text><text x=\"545\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">equests</text><rect x=\"500\" y=\"75\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"545\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">403</text><text x=\"545\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Denied</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Signed Cookies: Session-based CDN auth. Single coo</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">kie set allows access to multiple private files.</text></svg>",
  "codeExamples": [
    {
      "title": "CloudFront Signed Cookie Setup (Node.js)",
      "useCase": "Generating CloudFront signed cookies.",
      "code": "const crypto = require(\"crypto\");\nconst fs = require(\"fs\");\n\nconst privateKey = fs.readFileSync(\"./pk-ABC123456789.pem\", \"utf8\");\nconst keyPairId = \"ABC123456789\";\nconst resource = \"https://d123.cloudfront.net/private/*\";\nconst expiration = Math.floor(Date.now() / 1000) + 3600;\n\n// Create policy\nconst policy = JSON.stringify({\n  Statement: [{\n    Resource: resource,\n    Condition: { DateLessThan: { \"AWS:EpochTime\": expiration } }\n  }]\n});\n\n// Base64 encode policy (URL safe)\nconst encodedPolicy = Buffer.from(policy).toString(\"base64\")\n  .replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n// Sign\nconst signer = crypto.createSign(\"RSA-SHA1\");\nsigner.update(policy);\nconst signature = signer.sign(privateKey, \"base64\")\n  .replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n// Set-Cookie headers (sent as response to authenticated request)\n// Set-Cookie: CloudFront-Policy=${encodedPolicy}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly\n// Set-Cookie: CloudFront-Signature=${signature}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly\n// Set-Cookie: CloudFront-Key-Pair-Id=${keyPairId}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly",
      "description": "CloudFront signed cookie generation with three cookies for private content access."
    },
    {
      "title": "Express.js Signed Cookie Middleware",
      "useCase": "Signed cookies in an Express app.",
      "code": "const crypto = require(\"crypto\");\nconst fs = require(\"fs\");\n\nconst privateKey = fs.readFileSync(\"./pk-ABC123456789.pem\");\nconst keyPairId = \"ABC123456789\";\n\nfunction setCloudFrontCookies(req, res, next) {\n  if (!req.user) return res.status(401).send(\"Login required\");\n  const resource = \"https://d123.cloudfront.net/private/*\";\n  const expiration = Math.floor(Date.now() / 1000) + 3600;\n  const policy = JSON.stringify({\n    Statement: [{ Resource: resource, Condition: { DateLessThan: { \"AWS:EpochTime\": expiration } } }]\n  });\n  const b64 = (s) => Buffer.from(s).toString(\"base64\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n  const signer = crypto.createSign(\"RSA-SHA1\");\n  signer.update(policy);\n  const sig = b64(signer.sign(privateKey, \"base64\"));\n  res.setHeader(\"Set-Cookie\", [\n    `CloudFront-Policy=${b64(policy)}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly`,\n    `CloudFront-Signature=${sig}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly`,\n    `CloudFront-Key-Pair-Id=${keyPairId}; Domain=.d123.cloudfront.net; Path=/private/; Secure; HttpOnly`\n  ]);\n  next();\n}\n\napp.get(\"/login\", authenticateUser, setCloudFrontCookies, (req, res) => {\n  res.redirect(\"/private/dashboard.html\");\n});",
      "description": "Express.js middleware generating CloudFront signed cookies after user authentication."
    },
    {
      "title": "CloudFront Cookie Forwarding",
      "useCase": "Configuring CloudFront to forward cookies.",
      "code": "# CloudFront must forward the signed cookies\n# to validate them at the edge.\n\n# Option 1: Forward all cookies\naws cloudfront update-distribution \\\n  --id E123456789ABCD \\\n  --default-cache-behavior \"ForwardedValues={Cookies={Forward=all}}\"\n\n# Option 2: Whitelist CloudFront cookies (recommended)\naws cloudfront update-distribution \\\n  --id E123456789ABCD \\\n  --default-cache-behavior \"ForwardedValues={Cookies={Forward=whitelist,WhitelistedNames=[CloudFront-Policy,CloudFront-Signature,CloudFront-Key-Pair-Id]}}\"\n\n# Important: Whitelist approach is more secure\n# Only CloudFront cookies are forwarded to origin\n# All other cookies are stripped from requests",
      "description": "CloudFront cookie forwarding configuration for signed cookie validation."
    },
    {
      "title": "Cloudflare Signed Cookie Equivalent (Token)",
      "useCase": "Implementing signed cookies on Cloudflare.",
      "code": "# Cloudflare does not have native signed cookies,\n# but you can implement using Workers:\n\n// Service Worker for token validation\naddEventListener(\"fetch\", event => {\n  event.respondWith(handleRequest(event.request));\n})\n\nasync function handleRequest(request) {\n  const cookie = request.headers.get(\"Cookie\") || \"\";\n  const tokenMatch = cookie.match(/cf_token=([^;]+)/);\n  if (!tokenMatch) return new Response(\"Forbidden\", { status: 403 });\n  const token = tokenMatch[1];\n  const tokenKey = \"your_hmac_key\";\n  const [expires, hash] = token.split(\".\");\n  if (Date.now() / 1000 > parseInt(expires)) {\n    return new Response(\"Expired\", { status: 403 });\n  }\n  const expected = await crypto.subtle.sign(\"HMAC\", tokenKey, new TextEncoder().encode(expires));\n  // Validate hash...\n  return fetch(request);\n}",
      "description": "Cloudflare Worker implementing signed cookie equivalent via HMAC token validation."
    },
    {
      "title": "Signed Cookie Security Best Practices",
      "useCase": "Securing signed cookies.",
      "code": "# 1. Set Secure flag (HTTPS only)\nSet-Cookie: CloudFront-Policy=...; Secure; HttpOnly\n\n# 2. Set HttpOnly (not accessible via JavaScript)\nSet-Cookie: CloudFront-Signature=...; HttpOnly\n\n# 3. Restrict Path\nSet-Cookie: CloudFront-Key-Pair-Id=...; Path=/private/\n\n# 4. Consider SameSite=Lax or Strict\nSet-Cookie: CloudFront-Policy=...; SameSite=Lax\n\n# 5. Short expiration (match session TTL)\n# 6. Use CSP headers to prevent XSS\nContent-Security-Policy: default-src 'self'\n\n# 7. Rotate key pairs periodically\n# 8. Monitor CloudFront access logs for unusual patterns",
      "description": "Security best practices for signed cookies including flags, CSP, and key rotation."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a signed cookie?",
      "options": [
        "A cookie with user preferences",
        "Session-based CDN auth cookie",
        "A session token",
        "An encrypted cookie"
      ],
      "answer": 1,
      "explanation": "Signed cookie provides session-based CDN authentication."
    },
    {
      "question": "What cookies does CloudFront use for signed cookies?",
      "options": [
        "CloudFront-ID, CloudFront-Token",
        "CloudFront-Policy, -Signature, -Key-Pair-Id",
        "AWS-Session, AWS-Token",
        "CF-User, CF-Auth"
      ],
      "answer": 1,
      "explanation": "CloudFront uses three cookies: Policy, Signature, Key-Pair-Id."
    },
    {
      "question": "When should you use signed cookies over signed URLs?",
      "options": [
        "For single file downloads",
        "When serving multiple files in a page",
        "For API calls",
        "For public content"
      ],
      "answer": 1,
      "explanation": "Use signed cookies when serving multiple private files in a web page."
    },
    {
      "question": "What flags should signed cookies use?",
      "options": [
        "Only Expires",
        "Secure, HttpOnly, Path",
        "Only Domain",
        "Only SameSite"
      ],
      "answer": 1,
      "explanation": "Signed cookies should use Secure, HttpOnly, and Path flags."
    },
    {
      "question": "How does the CDN validate a signed cookie?",
      "options": [
        "Sends to origin",
        "Validates signature and expiration at edge",
        "Forwards to DNS",
        "Checks with IAM"
      ],
      "answer": 1,
      "explanation": "The CDN validates the signed cookie at the edge using the public key."
    },
    {
      "question": "Can signed cookies be stolen?",
      "options": [
        "No, they're secure",
        "Yes, via XSS",
        "No, they're encrypted",
        "Only via physical access"
      ],
      "answer": 1,
      "explanation": "Signed cookies can be stolen via XSS; protect with HttpOnly and CSP."
    }
  ]
};
