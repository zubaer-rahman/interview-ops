export const sd_cdn = {
  "id": "sd-cdn",
  "title": "Content Delivery Network",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "A CDN is a geographically distributed network of proxy servers that deliver content from the edge server closest to the user.",
    "Caches static content (images, CSS, JS, videos) at edge locations. Reduces latency, offloads origin servers, handles traffic spikes.",
    "Key concepts: origin server, edge/PoP (Point of Presence), pull zone (cache on first request), push zone (pre-upload content), purge (invalidate), TTL (cache duration).",
    "DNS-based routing: user DNS resolves to nearest edge server via GeoDNS or Anycast (same IP announced from multiple locations — routed to nearest)."
  ],
  "laymanDefinition": "A CDN is like neighborhood grocery stores vs a single warehouse. Instead of everyone driving to one central warehouse (origin server), groceries are stocked in local stores (edge servers) throughout the city. You walk to your nearest store (low latency). The store restocks from the warehouse as needed (cache pull). Popular items are always on the shelf (high cache hit).",
  "deepDive": [
    {
      "heading": "How CDN Works",
      "text": "1) User requests image.com/cat.jpg. 2) DNS resolves to nearest CDN edge server. 3) Edge checks cache. 4) Cache HIT → return. 5) Cache MISS → edge requests from origin, caches, returns. 6) Subsequent requests for same URL → HIT. TTL controls how long edge keeps it."
    },
    {
      "heading": "CDN Caching Strategies",
      "text": "Pull CDN: edge fetches from origin on first request. Simpler, no pre-warming needed. Push CDN: pre-upload content to CDN. Full control, immediate availability, higher cost. Hybrid: push critical assets, pull for long-tail. Cache rules: static assets (long TTL: 1 year with versioned URLs), dynamic content (short TTL or bypass)."
    },
    {
      "heading": "CDN for Dynamic Content",
      "text": "Not just for static. Edge caching for API responses (short TTL). Edge computing (Cloudflare Workers, Lambda@Edge) for dynamic processing at edge. DDoS protection — CDN absorbs attack traffic. SSL termination at edge. Origin shielding — edge reduces load on origin."
    },
    {
      "heading": "CDN Security",
      "text": "DDoS mitigation: CDN absorbs large-scale attacks. WAF at edge: block malicious requests before reaching origin. Bot management: identify and block bad bots. Token authentication: signed URLs for private content. TLS termination at edge. Origin hiding: only CDN IPs can reach origin."
    }
  ],
  "interviewAnswer": "Use CDN for all static assets with cache-busted URLs (long TTL). Consider edge computing for low-latency dynamic responses. CloudFront + S3 is a powerful combo. Always set Cache-Control headers. Use signed URLs for private content. Monitor cache hit ratio — purge on content updates.",
  "interviewQuestions": [
    {
      "question": "What is a CDN?",
      "answer": "Geographically distributed proxy servers delivering content from edge nearest the user."
    },
    {
      "question": "How does CDN reduce latency?",
      "answer": "Serves from edge server close to user instead of distant origin server."
    },
    {
      "question": "What is an edge server/PoP?",
      "answer": "CDN server in a Point of Presence — one of many global locations."
    },
    {
      "question": "Pull vs Push CDN?",
      "answer": "Pull: fetch from origin on first request (lazy). Push: pre-upload content (eager)."
    },
    {
      "question": "What is cache hit ratio?",
      "answer": "Percentage of requests served from CDN cache (vs fetching from origin)."
    },
    {
      "question": "How does CDN handle dynamic content?",
      "answer": "Short TTL caching, edge computing (Lambda@Edge), or bypass to origin."
    },
    {
      "question": "What is Anycast?",
      "answer": "Same IP announced from multiple locations — traffic routed to nearest."
    },
    {
      "question": "What is origin shielding?",
      "answer": "CDN aggregates edge requests before hitting origin — reduces origin load."
    },
    {
      "question": "How to invalidate CDN cache?",
      "answer": "Purge by URL, by pattern, or wait for TTL expiry."
    },
    {
      "question": "What is a signed URL?",
      "answer": "Time-limited CDN URL for private content access (e.g., S3 presigned URL)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Content Delivery Network</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DNS</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nearest edge</text><line x1=\"200\" y1=\"77\" x2=\"60\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Edge Server</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache check</text><line x1=\"110\" y1=\"101\" x2=\"150\" y2=\"101\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"190\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HIT</text><text x=\"190\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return</text><rect x=\"240\" y=\"85\" width=\"80\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MISS</text><text x=\"280\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch origin</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Origin</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">S3/Server</text><rect x=\"150\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"200\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN PoP</text><text x=\"200\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Global edge</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Distributed edge servers. Cache static, reduce latency, absorb traffic, DDoS protecti</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">on.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">CDN: Deliver content from nearest edge server. Red</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">uce latency, offload origin, DDoS protection.</text></svg>",
  "codeExamples": [
    {
      "title": "AWS CloudFront + S3",
      "useCase": "Static site CDN.",
      "code": "# CloudFront distribution with S3 origin\nAWSTemplateFormatVersion: \"2010-09-09\"\nResources:\n  CDN:\n    Type: AWS::CloudFront::Distribution\n    Properties:\n      DistributionConfig:\n        Enabled: true\n        Origins:\n          - DomainName: mybucket.s3.amazonaws.com\n            Id: S3Origin\n            S3OriginConfig: {}\n        DefaultCacheBehavior:\n          TargetOriginId: S3Origin\n          ViewerProtocolPolicy: redirect-to-https\n          DefaultTTL: 86400\n          MaxTTL: 31536000\n          ForwardedValues:\n            QueryString: false\n          Compress: true\n        PriceClass: PriceClass_All\n        CustomErrorResponses:\n          - ErrorCode: 404\n            ResponseCode: 200\n            ResponsePagePath: /index.html",
      "description": "CloudFront + S3 for static site hosting with CDN."
    },
    {
      "title": "Cache-Control Headers",
      "useCase": "Set TTL via headers.",
      "code": "// Static assets: long cache, versioned URLs\napp.use(\"/static\", express.static(\"public\", {\n  maxAge: \"1y\",\n  immutable: true,\n  setHeaders: (res, path) => {\n    res.setHeader(\"Cache-Control\", \"public, max-age=31536000, immutable\");\n  }\n}));\n// API: short or no cache\napp.get(\"/api/users/:id\", (req, res) => {\n  res.setHeader(\"Cache-Control\", \"public, max-age=60\");\n  res.json({ id: req.params.id, name: \"Alice\" });\n});\n// No cache for dynamic content:\n// Cache-Control: no-cache, no-store, must-revalidate",
      "description": "Cache-Control headers for CDN caching behavior."
    },
    {
      "title": "Lambda@Edge for Origin Response",
      "useCase": "Modify CDN response.",
      "code": "// Lambda@Edge: origin-response trigger\nexports.handler = async (event) => {\n  const response = event.Records[0].cf.response;\n  const headers = response.headers;\n  // Add security headers\n  headers[\"strict-transport-security\"] = [{ key: \"Strict-Transport-Security\", value: \"max-age=31536000\" }];\n  headers[\"x-content-type-options\"] = [{ key: \"X-Content-Type-Options\", value: \"nosniff\" }];\n  headers[\"x-frame-options\"] = [{ key: \"X-Frame-Options\", value: \"DENY\" }];\n  headers[\"cache-control\"] = [{ key: \"Cache-Control\", value: \"public, max-age=86400\" }];\n  // Compress if not already\n  if (!headers[\"content-encoding\"]) {\n    headers[\"content-encoding\"] = [{ key: \"Content-Encoding\", value: \"gzip\" }];\n  }\n  return response;\n};",
      "description": "Lambda@Edge to modify CDN responses with security headers."
    },
    {
      "title": "Cloudflare Worker for Edge Logic",
      "useCase": "Dynamic edge processing.",
      "code": "// Cloudflare Worker — runs at edge\naddEventListener(\"fetch\", event => {\n  event.respondWith(handleRequest(event.request));\n});\nasync function handleRequest(request) {\n  const url = new URL(request.url);\n  // Cache API responses at edge\n  if (url.pathname.startsWith(\"/api/\")) {\n    const cacheKey = new Request(url.toString(), request);\n    const cache = caches.default;\n    let response = await cache.match(cacheKey);\n    if (response) return response;\n    response = await fetch(\"https://origin.example.com\" + url.pathname);\n    response = new Response(response.body, response);\n    response.headers.set(\"Cache-Control\", \"public, max-age=60\");\n    event.waitUntil(cache.put(cacheKey, response));\n    return response;\n  }\n  // Serve static from edge storage\n  return fetch(\"https://storage.example.com\" + url.pathname);\n}",
      "description": "Cloudflare Worker for edge-side logic and caching."
    },
    {
      "title": "Signed URLs for Private Content",
      "useCase": "Access-controlled CDN.",
      "code": "// Generate CloudFront signed URL\nconst cloudfront = new AWS.CloudFront.Signer(KEY_PAIR_ID, PRIVATE_KEY);\nfunction getSignedUrl(resourcePath, expiresIn = 3600) {\n  return new Promise((resolve, reject) => {\n    cloudfront.getSignedUrl({\n      url: \"https://d123.cloudfront.net/\" + resourcePath,\n      expires: Math.floor(Date.now() / 1000) + expiresIn,\n    }, (err, url) => err ? reject(err) : resolve(url));\n  });\n}\n// Expiring URL: only valid for 1 hour",
      "description": "Signed URLs for time-limited private CDN content."
    }
  ],
  "mcqQuestions": [
    {
      "question": "CDN edge servers are located?",
      "options": [
        "Single data center",
        "Geographically distributed",
        "Same as origin",
        "User device"
      ],
      "answer": 1,
      "explanation": "Distributed globally for low latency."
    },
    {
      "question": "Pull CDN means?",
      "options": [
        "Pre-upload content",
        "Cache on first request",
        "Push content",
        "No caching"
      ],
      "answer": 1,
      "explanation": "Edge fetches from origin on first request."
    },
    {
      "question": "What does Anycast provide?",
      "options": [
        "Faster DNS",
        "Route to nearest edge",
        "SSL termination",
        "Load balancing"
      ],
      "answer": 1,
      "explanation": "Same IP announces globally → routed to nearest."
    },
    {
      "question": "CDN reduces?",
      "options": [
        "Storage cost",
        "Latency",
        "Bandwidth cost",
        "Development time"
      ],
      "answer": 1,
      "explanation": "CDN reduces latency by serving from edge."
    },
    {
      "question": "What is origin shielding?",
      "options": [
        "Encrypting origin",
        "Aggregating edge requests to protect origin",
        "Hiding origin IP",
        "Replacing origin"
      ],
      "answer": 1,
      "explanation": "Edge nodes aggregate requests before hitting origin."
    },
    {
      "question": "Signed URLs provide?",
      "options": [
        "Faster delivery",
        "Access control",
        "Better caching",
        "Compression"
      ],
      "answer": 1,
      "explanation": "Time-limited access to private content."
    },
    {
      "question": "Content Delivery Network — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "Content Delivery Network — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "Content Delivery Network — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "Content Delivery Network — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
