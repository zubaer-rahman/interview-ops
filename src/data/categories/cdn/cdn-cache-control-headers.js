export const cdn_cache_control_headers = {
  "id": "cdn-cache-control-headers",
  "title": "Cache-Control Headers",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Cache-Control headers are HTTP response headers that tell browsers, CDNs, and proxies how to cache content.",
    "Directives include: max-age (seconds to cache), s-maxage (CDN-specific TTL), public/private (who can cache), no-cache (revalidate before use), no-store (never cache).",
    "Cache-Control is the primary mechanism for controlling CDN caching behavior. Incorrect configuration leads to either stale content or poor cache hit ratios.",
    "Additional directives: stale-while-revalidate (serve stale while refreshing), immutable (content never changes), must-revalidate (must check origin after expiry)."
  ],
  "laymanDefinition": "Cache-Control headers are like expiration dates and storage instructions on food products. \"Refrigerate after opening\" is like \"private\" (only browser cache). \"Best before 7 days\" is like \"max-age=604800\". \"Freeze for longer storage\" is like \"s-maxage=31536000\" for CDN. Labels tell different storage locations (pantry, fridge, freezer) how long to keep each item.",
  "deepDive": [
    {
      "heading": "Core Cache-Control Directives",
      "text": "public: any cache (browser, CDN, proxy) can store. private: only browser cache can store (not CDN). no-cache: must revalidate with origin before using cached copy. no-store: never cache at all. max-age=<seconds>: maximum time to cache. s-maxage=<seconds>: overrides max-age for shared caches (CDNs)."
    },
    {
      "heading": "s-maxage vs max-age",
      "text": "max-age applies to all caches (browser + CDN). s-maxage overrides max-age specifically for shared caches (CDNs and proxies). Browser uses max-age. CDN uses s-maxage (if present) or falls back to max-age. Example: max-age=3600, s-maxage=86400 means browser caches 1 hour, CDN caches 1 day."
    },
    {
      "heading": "Stale Content Directives",
      "text": "stale-while-revalidate=<seconds>: serve stale cached content while asynchronously fetching fresh version. Prevents cache misses from impacting users. stale-if-error=<seconds>: serve stale content if origin is unreachable. These directives dramatically improve perceived performance and reliability."
    },
    {
      "heading": "immutable Directive",
      "text": "immutable tells the browser that the content will never change on that URL. The browser can skip revalidation entirely. Used with versioned filenames (e.g., style.abc123.css). Combined with max-age=31536000, the browser will never recheck the origin for 1 year. This is the highest-performance configuration."
    },
    {
      "heading": "Cache-Control Precedence",
      "text": "More specific directives override general ones: s-maxage overrides max-age for CDN. no-cache overrides public/private. must-revalidate overrides stale-while-revalidate. The most restrictive directive wins. When in doubt, CDN providers document their specific Cache-Control handling behavior."
    }
  ],
  "interviewAnswer": "Cache-Control headers are the primary mechanism for controlling CDN and browser caching. Use s-maxage to set CDN-specific TTLs, stale-while-revalidate for resilience, and immutable with versioned filenames for optimal performance. Test header configuration with curl before deploying.",
  "interviewQuestions": [
    {
      "question": "What is the Cache-Control header?",
      "answer": "An HTTP response header that controls how browsers, CDNs, and proxies cache content."
    },
    {
      "question": "What is the difference between public and private?",
      "answer": "public allows any cache (CDN, browser) to store content. private restricts caching to the browser only."
    },
    {
      "question": "What does no-cache mean?",
      "answer": "The content must revalidate with the origin before every use. It can be cached, but must be checked first."
    },
    {
      "question": "What does s-maxage do?",
      "answer": "Overrides max-age specifically for shared caches (CDNs and proxies). Browser ignores s-maxage."
    },
    {
      "question": "What is stale-while-revalidate?",
      "answer": "A directive that allows serving stale cached content while asynchronously fetching an updated version."
    },
    {
      "question": "What does the immutable directive do?",
      "answer": "Tells the browser the content never changes on that URL — skip revalidation entirely."
    },
    {
      "question": "Can you use public and private together?",
      "answer": "No, they are mutually exclusive. public is the default when max-age is set."
    },
    {
      "question": "What happens if no Cache-Control header is set?",
      "answer": "Browsers and CDNs use heuristic caching — typically cache if response is 200 and method is GET. Behavior varies."
    },
    {
      "question": "What is the difference between no-cache and no-store?",
      "answer": "no-cache: can cache but must revalidate. no-store: never cache at all."
    },
    {
      "question": "How do you test Cache-Control headers?",
      "answer": "Use curl -I to view response headers. Check Cache-Control, Age, and x-cache headers."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cache-Control Headers</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">public</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Any cache can store</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">private</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser only</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">max-age=3600</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache for 1 hour</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">s-maxage=86400</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">CDN caches 1 day</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">immutable</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Never revalidate</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache-Control Directives</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP headers that control caching behavi</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">or across browsers, CDNs, and proxies.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cache-Control: max-age, s-maxage, public/private, </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">stale-while-revalidate, immutable — control cachin</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">g behavior.</text></svg>",
  "codeExamples": [
    {
      "title": "Cache-Control for Different Content Types",
      "useCase": "Optimal cache header configurations.",
      "code": "# Static assets (versioned) — cache forever\n# Cache-Control: public, max-age=31536000, immutable\n# For: style.abc123.css, main.xyz789.js\n\n# Static assets (unversioned) — cache moderately\n# Cache-Control: public, max-age=86400\n# For: logo.png, favicon.ico\n\n# HTML pages — short cache with revalidation\n# Cache-Control: public, max-age=0, must-revalidate\n# For: index.html, /about\n\n# API responses — no browser cache, CDN cache short\n# Cache-Control: no-cache, s-maxage=60\n# Browser: always revalidate\n# CDN: cache for 60 seconds\n\n# Dynamic content — never cache\n# Cache-Control: no-store, private\n# For: /api/user/profile, /cart\n\n# User-specific content\n# Cache-Control: private, max-age=300\n# Only browser caches for 5 minutes",
      "description": "Recommended Cache-Control configurations for different content types and use cases."
    },
    {
      "title": "Setting Cache-Control in Nginx",
      "useCase": "Configuring headers on the origin.",
      "code": "server {\n  listen 8080;\n  server_name origin.example.com;\n\n  # Versioned static assets (fingerprinted)\n  location ~* \\.(css|js)$ {\n    root /var/www/dist;\n    expires 1y;\n    add_header Cache-Control \"public, immutable\";\n    add_header Cache-Tag \"static-assets\";\n  }\n\n  # Images\n  location ~* \\.(png|jpg|jpeg|gif|webp|svg)$ {\n    root /var/www/images;\n    expires 30d;\n    add_header Cache-Control \"public, max-age=2592000\";\n  }\n\n  # HTML (no browser cache, CDN cache short)\n  location ~* \\.html$ {\n    root /var/www;\n    add_header Cache-Control \"no-cache, s-maxage=60\";\n  }\n\n  # API — never cache private data\n  location /api/ {\n    proxy_pass http://app:3000;\n    add_header Cache-Control \"private, no-store\";\n  }\n}",
      "description": "Nginx configuration with Cache-Control headers for various content types."
    },
    {
      "title": "Verifying Cache-Control with Curl",
      "useCase": "Testing header configuration.",
      "code": "# Check all cache-related headers\ncurl -I https://cdn.example.com/style.abc123.css\n\n# Example output:\n# HTTP/2 200\n# content-type: text/css\n# cache-control: public, max-age=31536000, immutable\n# expires: Wed, 15 Jul 2026 12:00:00 GMT\n# last-modified: Tue, 14 Jul 2025 10:00:00 GMT\n# etag: \"abc123def456\"\n# age: 123456\n# x-cache: Hit from cloudfront\n# cf-cache-status: HIT\n\n# max-age=31536000 = 1 year cache\n# immutable = no revalidation needed\n# age: 123456 = cached on edge for 123456 seconds\n# x-cache: Hit = served from CloudFront edge",
      "description": "Using curl to verify Cache-Control headers and CDN caching behavior."
    },
    {
      "title": "Cache-Control with Express (Node.js)",
      "useCase": "Setting headers from application code.",
      "code": "const express = require(\"express\");\nconst app = express();\n\n// Middleware to set cache headers based on path\napp.use((req, res, next) => {\n  // Versioned assets: cache forever\n  if (/.[a-f0-9]{8,}.(css|js)$/.test(req.path)) {\n    res.setHeader(\"Cache-Control\",\n      \"public, max-age=31536000, immutable\");\n  }\n  // Images: cache 30 days\n  else if (/.(png|jpg|webp)$/.test(req.path)) {\n    res.setHeader(\"Cache-Control\",\n      \"public, max-age=2592000\");\n  }\n  // API responses: no browser cache, CDN cache short\n  else if (req.path.startsWith(\"/api/\")) {\n    res.setHeader(\"Cache-Control\",\n      \"no-cache, s-maxage=60\");\n  }\n  // Default HTML\n  else {\n    res.setHeader(\"Cache-Control\",\n      \"public, max-age=0, must-revalidate\");\n  }\n  next();\n});",
      "description": "Express.js middleware setting Cache-Control headers based on file type patterns."
    },
    {
      "title": "stale-while-revalidate Pattern",
      "useCase": "Resilient caching with background refresh.",
      "code": "# Cache-Control with stale-while-revalidate\n# max-age=60: cache for 1 minute\n# stale-while-revalidate=86400: for the next 24 hours,\n#   serve stale content while asynchronously refreshing\n\n# Header:\n# Cache-Control: public, max-age=60,\n#   stale-while-revalidate=86400\n\n# Timeline:\n# T=0: Fetch content, cache (max-age=60)\n# T=30: Request -> HIT (fresh)\n# T=61: TTL expired, content is stale\n# T=61: Request -> SERVE STALE + background refresh\n#        User gets instant response from cache\n#        Server asynchronously fetches new content\n#        Cache is updated with fresh content\n# T=90: Request -> HIT (fresh again)\n\n# Benefits:\n# - No cache miss penalty for users\n# - Origin load is smoothed (not bursty)\n# - Content is always eventually fresh",
      "description": "Explanation of stale-while-revalidate pattern with timeline showing how it eliminates cache miss penalties."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does s-maxage control?",
      "options": [
        "Browser cache time",
        "CDN/Proxy cache time",
        "Server processing time",
        "DNS cache time"
      ],
      "answer": 1,
      "explanation": "s-maxage overrides max-age for shared caches (CDNs and proxies)."
    },
    {
      "question": "What is the difference between no-cache and no-store?",
      "options": [
        "Same thing",
        "no-cache: revalidate before use; no-store: never cache",
        "no-cache: never cache; no-store: revalidate",
        "Both prevent all caching"
      ],
      "answer": 1,
      "explanation": "no-cache allows caching but requires revalidation. no-store prohibits caching entirely."
    },
    {
      "question": "What does the immutable directive do?",
      "options": [
        "Content can be modified",
        "Content never changes on that URL",
        "Cache cannot be changed",
        "Content is encrypted"
      ],
      "answer": 1,
      "explanation": "immutable tells the browser the content will never change on that URL."
    },
    {
      "question": "Which caching issue does stale-while-revalidate solve?",
      "options": [
        "Cache corruption",
        "Cache miss latency penalty",
        "Cache size limits",
        "Cache key conflicts"
      ],
      "answer": 1,
      "explanation": "stale-while-revalidate eliminates the user-facing latency penalty of cache misses."
    },
    {
      "question": "What Cache-Control value prevents CDN caching?",
      "options": [
        "public",
        "private",
        "max-age=3600",
        "s-maxage=3600"
      ],
      "answer": 1,
      "explanation": "Cache-Control: private prevents CDNs and proxies from caching the content."
    },
    {
      "question": "What is the default behavior without Cache-Control?",
      "options": [
        "No caching",
        "Heuristic caching (varies by browser/CDN)",
        "Cache forever",
        "Error"
      ],
      "answer": 1,
      "explanation": "Without Cache-Control, browsers and CDNs use heuristic caching based on status code and other headers."
    }
  ]
};
