export const cdn_gcp_cdn = {
  "id": "cdn-gcp-cdn",
  "title": "Google Cloud CDN",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Google Cloud CDN (Cloud CDN) uses Google's global infrastructure to deliver content with low latency. It integrates with Google Cloud Load Balancing and Google Kubernetes Engine.",
    "Key features: 200+ edge PoPs on Google's network, integration with HTTP(S) Load Balancer, Cloud Storage origins, signed URLs/cookies, and WAF integration via Cloud Armor.",
    "Cloud CDN is designed for applications hosted on Google Cloud (Compute Engine, GKE, Cloud Storage) and uses Google's private fiber network for content delivery.",
    "Pricing: pay-as-you-go with per-GB egress and per-request charges. Cache egress is cheaper than origin egress. No upfront fees or commitments."
  ],
  "laymanDefinition": "Google Cloud CDN is like having Google's private highway system deliver your content. Instead of taking public roads (public internet), your content travels on Google's own fiber network from the origin to the edge PoP, then the final mile to the user. It's only for content starting within Google Cloud, making it the fastest option for GCP-hosted apps.",
  "deepDive": [
    {
      "heading": "Google\\'s Global Network",
      "text": "200+ edge PoPs in 80+ countries. 100,000+ miles of fiber optic cable. Google\\'s network carries 40%+ of internet traffic. Private Tier 1 network means fewer hops. Low latency via B4 SDN network fabric and Google\\'s global backbone."
    },
    {
      "heading": "Cloud CDN Architecture",
      "text": "Cloud CDN is built on Google Cloud HTTP(S) Load Balancer. It\\'s enabled as a checkbox, not a separate product. Integration with: Cloud Storage (cache buckets), Compute Engine (instance groups), GKE (container-native load balancing), and App Engine. Cache hits served from edge; misses go to origin via Google backbone."
    },
    {
      "heading": "Signed URLs and Cookies",
      "text": "Cloud CDN supports signed URLs and signed cookies for time-limited, authenticated access. Uses HMAC-SHA1 or HMAC-SHA256 keys. Keys managed in Cloud Console or via Cloud KMS. Policy includes: URL prefix, expiration, IP ranges."
    },
    {
      "heading": "Cloud Armor (WAF + DDoS)",
      "text": "Cloud Armor integrates with Cloud CDN for edge security. WAF: OWASP rules, SQLi/XSS detection, custom rules. DDoS: automatic L3/L4 protection, configurable L7 protection. Rate limiting: per IP, region, or header. Geo-based access control."
    },
    {
      "heading": "Cache Modes and Policies",
      "text": "Cache modes: Use origin headers (respect Cache-Control), Force cache all (ignore Set-Cookie), Force cache all with origin headers override. Cache keys: protocol, host, query string parameters, headers. Negative caching (for error responses, 404, 500). TTL: minimum/maximum overrides."
    },
    {
      "heading": "Optimization Features",
      "text": "Cache bypass on cookie: for personalized content. Cache hit ratio optimization via query parameter normalization. Compression: Cloud CDN compresses responses with gzip/brotli. Request collapsing: multiple same requests collapsed to one origin call. Negative caching: cache 404/500 responses to reduce origin load."
    }
  ],
  "interviewAnswer": "Google Cloud CDN leverages Google's private fiber network for fast content delivery. Integrated with HTTP(S) Load Balancer, Cloud Storage, and GKE. Supports signed URLs/cookies, Cloud Armor WAF/DDoS, cache modes for flexibility, and request collapsing for efficient caching.",
  "interviewQuestions": [
    {
      "question": "What is Google Cloud CDN?",
      "answer": "Google\\'s CDN built on their global network, integrated with GCP load balancers."
    },
    {
      "question": "How many edge PoPs does Cloud CDN have?",
      "answer": "200+ globally on Google\\'s private network."
    },
    {
      "question": "What is unique about Google\\'s network?",
      "answer": "Private Tier 1 fiber network — content stays on Google backbone."
    },
    {
      "question": "What is Cloud Armor?",
      "answer": "Google\\'s WAF and DDoS protection service integrated with Cloud CDN."
    },
    {
      "question": "What origins does Cloud CDN support?",
      "answer": "Cloud Storage, Compute Engine, GKE, App Engine, HTTP(S) Load Balancer."
    },
    {
      "question": "What is request collapsing?",
      "answer": "Multiple same requests collapsed to one origin call at the same edge."
    },
    {
      "question": "What algorithms does Cloud CDN signing use?",
      "answer": "HMAC-SHA1 and HMAC-SHA256."
    },
    {
      "question": "What is cache bypass on cookie?",
      "answer": "Skip cache for requests with specific cookies (personalized content)."
    },
    {
      "question": "Does Cloud CDN support compression?",
      "answer": "Yes, gzip and brotli compression at edge."
    },
    {
      "question": "How is Cloud CDN priced?",
      "answer": "Pay-as-you-go: per-GB egress + per-request fees. Cache egress cheaper than origin."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Google Cloud CDN</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"225\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">200+ PoPs on Google fib</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">er</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"395\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Armor</text><text x=\"395\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">WAF + DDoS protection</text><line x1=\"460\" y1=\"48\" x2=\"480\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"490\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"540\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LB</text><text x=\"540\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP(S) Load Balan</text><text x=\"540\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">cer</text><line x1=\"590\" y1=\"48\" x2=\"320\" y2=\"70\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"225\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Storage</text><text x=\"225\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Bucket origin</text><rect x=\"300\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"365\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GKE/Compute</text><text x=\"365\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Instance group origin</text><rect x=\"440\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"505\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">App Engine</text><text x=\"505\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App origin</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Google Cloud CDN: Google private fiber network + C</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">loud Armor WAF + Load Balancer + GCP origins.</text></svg>",
  "codeExamples": [
    {
      "title": "Enabling Cloud CDN via gcloud",
      "useCase": "Setup Cloud CDN on a backend service.",
      "code": "# 1. Create an external HTTP(S) Load Balancer\n#    (or use existing one)\n\n# 2. Create backend bucket (Cloud Storage origin)\ngcloud compute backend-buckets create my-backend-bucket \\\n  --gcs-bucket-name=my-bucket --enable-cdn\n\n# Or enable CDN on existing backend service:\ngcloud compute backend-services update my-service \\\n  --enable-cdn --cache-mode=FORCE_CACHE_ALL\n\n# Cache modes:\n#   USE_ORIGIN_HEADERS (default, respects Cache-Control)\n#   FORCE_CACHE_ALL (cache everything, ignore Set-Cookie)\n#   FORCE_CACHE_ALL_ORIGIN_HEADERS (cache all, respect origin headers)\n\n# 3. Create URL map and target proxy\ngcloud compute url-maps create my-url-map \\\n  --default-backend-bucket=my-backend-bucket",
      "description": "gcloud commands to enable Cloud CDN on a backend bucket or service."
    },
    {
      "title": "Cloud CDN Signed URL Generation",
      "useCase": "Generate HMAC-signed URLs for Cloud CDN.",
      "code": "# 1. Create signing key:\ngcloud compute backend-services add-signed-url-key my-service \\\n  --key-name my-key --key-file ./cdn.key\n\n# 2. Generate random HMAC key (32 bytes):\nopenssl rand 32 > cdn.key\n\n# 3. Generate signed URL (Python example):\nimport base64, hashlib, hmac, time\n\nkey = open(\"cdn.key\", \"rb\").read()\nurl_prefix = \"https://cdn.example.com/private/\"\nexpires = int(time.time()) + 3600\n\n# Create signature input:\nsign_input = f\"{url_prefix}{expires}\"\n\n# Sign with HMAC-SHA256:\nsig = hmac.new(key, sign_input.encode(), hashlib.sha256).digest()\nsig_b64 = base64.urlsafe_b64encode(sig).rstrip(b\"=\").decode()\n\n# Signed URL:\nsigned_url = f\"{url_prefix}?Expires={expires}&KeyName=my-key&Signature={sig_b64}\"",
      "description": "Cloud CDN signed URL generation with HMAC-SHA256 and gcloud key setup."
    },
    {
      "title": "Cloud Armor WAF Policy",
      "useCase": "Create Cloud Armor security policy.",
      "code": "# Create security policy:\ngcloud compute security-policies create my-waf-policy\n\n# Add rule: Block SQL injection\ngcloud compute security-policies rules create 1000 \\\n  --action=deny-403 \\\n  --security-policy=my-waf-policy \\\n  --expression='evaluatePreconfiguredWaf(\"sqli-canary\")\n\n# Add rule: Rate limit per IP (100 req/min)\ngcloud compute security-policies rules create 500 \\\n  --action=rate-based-ban \\\n  --security-policy=my-waf-policy \\\n  --rate-limit-threshold-count=100 \\\n  --rate-limit-threshold-interval-sec=60 \\\n  --conform-action=allow \\\n  --exceed-action=deny-429 \\\n  --expression='true' \\\n\n# Attach to backend service:\ngcloud compute backend-services update my-service \\\n  --security-policy=my-waf-policy",
      "description": "Cloud Armor WAF policy with SQL injection and rate limiting rules attached to backend service."
    },
    {
      "title": "Cloud CDN Cache Invalidation",
      "useCase": "How to purge cached content.",
      "code": "# Invalidate specific URLs:\ngcloud compute url-maps invalidate-cdn-cache my-url-map \\\n  --path \"/images/*\" --async\n\n# Invalidate multiple paths:\nfor path in \"/images/*\" \"/css/*\" \"/js/*\"; do\n  gcloud compute url-maps invalidate-cdn-cache my-url-map --path \"$path\" --async\ndone\n\n# Invalidate all cached content (host-wide):\ngcloud compute url-maps invalidate-cdn-cache my-url-map \\\n  --path \"/*\"\n\n# Cache invalidation limits:\n# - 1000 invalidations per URL map per month (free)\n# - Additional invalidations are billed\n# - Invalidation propagates to all edges within minutes",
      "description": "Cloud CDN cache invalidation commands for purging cached content."
    },
    {
      "title": "Cloud CDN Request Collapsing",
      "useCase": "How request collapsing reduces origin load.",
      "code": "# Request collapsing is enabled by default on Cloud CDN\n\n# Scenario: 100 users request the same uncached resource\n# Without collapsing: 100 requests hit the origin\n# With collapsing: 1 request hits the origin\n\n# How it works:\n# 1. First request for resource arrives at edge\n# 2. Edge forwards to origin (cache miss)\n# 3. While waiting for origin, additional same requests arrive\n# 4. Edge waits for first request to complete\n# 5. All 100 users get response from the single origin call\n\n# Benefits:\n# - Reduces origin load significantly\n# - Improves overall latency for subsequent users\n# - No additional configuration needed",
      "description": "Cloud CDN request collapsing mechanism for reducing origin load on cache misses."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is Google Cloud CDN built on?",
      "options": [
        "Cloud Functions",
        "HTTP(S) Load Balancer",
        "Cloud Run",
        "Cloud Storage"
      ],
      "answer": 1,
      "explanation": "Cloud CDN is built on the HTTP(S) Load Balancer."
    },
    {
      "question": "How is Google\\'s network unique?",
      "options": [
        "Largest CDN",
        "Private Tier 1 fiber network",
        "Cheapest CDN",
        "Oldest CDN"
      ],
      "answer": 1,
      "explanation": "Google\\'s private fiber network reduces hops and latency."
    },
    {
      "question": "What is Cloud Armor?",
      "options": [
        "Cloud storage",
        "WAF + DDoS protection",
        "Load balancer",
        "DNS service"
      ],
      "answer": 1,
      "explanation": "Cloud Armor provides WAF and DDoS protection for Cloud CDN."
    },
    {
      "question": "What signing algorithms does Cloud CDN support?",
      "options": [
        "RSA-SHA1",
        "HMAC-SHA1 and HMAC-SHA256",
        "AES256",
        "MD5"
      ],
      "answer": 1,
      "explanation": "Cloud CDN uses HMAC-SHA1 or HMAC-SHA256 for signed URLs."
    },
    {
      "question": "What is request collapsing?",
      "options": [
        "Serving stale content",
        "Merging same requests to one origin call",
        "Compressing requests",
        "Caching requests"
      ],
      "answer": 1,
      "explanation": "Request collapsing merges multiple same requests into one origin call."
    },
    {
      "question": "What is a cache mode?",
      "options": [
        "Cache layer",
        "How CDN decides what to cache",
        "Cache location",
        "Cache size"
      ],
      "answer": 1,
      "explanation": "Cache modes control caching behavior (respect origin, force cache, etc)."
    }
  ]
};
