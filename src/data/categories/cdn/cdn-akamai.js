export const cdn_akamai = {
  "id": "cdn-akamai",
  "title": "Akamai",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Akamai is one of the largest and most established CDN providers, founded in 1998 at MIT. It has the most globally distributed edge platform with 4000+ PoPs in 135+ countries.",
    "Key features: 4000+ edge servers, enterprise-grade security (Kona Site Defender, DDoS), media delivery optimization (Adaptive Media Delivery), Image & Video Manager, and sophisticated traffic management.",
    "Akamai operates a massively distributed network with servers embedded within ISPs, providing superior last-mile performance. It is the CDN of choice for large enterprises and media companies.",
    "Akamai uses a DNS-based routing system (not Anycast) with real-time mapping to direct users to the optimal edge server."
  ],
  "laymanDefinition": "Akamai is the \"veteran\" of the CDN world. Think of it as a delivery network with the largest number of local depots (4000+ PoPs), many tucked inside neighborhoods (ISPs). When a package needs delivering, it checks real-time traffic, road conditions, and depot capacity to choose the best route.",
  "deepDive": [
    {
      "heading": "Akamai Intelligent Edge Platform",
      "text": "4000+ PoPs in 135+ countries, embedded in 1600+ ISPs. DNS-based traffic management with real-time mapping. Proprietary SureRoute technology optimizes paths. Edge servers are at the last mile, reducing final latency."
    },
    {
      "heading": "Traffic Management",
      "text": "DNS-based (not Anycast): Akamai\\'s authoritative DNS returns optimal edge server IP. Factors: geographic distance, server load, network health, cache availability. FastDNS: managed authoritative DNS. Global Traffic Management (GTM): load balancing across origins."
    },
    {
      "heading": "Security (Kona Site Defender)",
      "text": "WAF: OWASP CRS, custom rules, positive security model. DDoS: L3/L4/L7 mitigation, edge-based scrubbing. Bot Manager: categorize bots (good/bad), challenge suspicious. Web App Protector: client-side integrity (detect tampering/automation). API Security: protect API endpoints."
    },
    {
      "heading": "Media Delivery Solutions",
      "text": "Adaptive Media Delivery: optimized video streaming, adaptive bitrate. Broadcast Operations Control Center (BOCC): 24/7 monitoring. Media Services Live: live streaming. Download Delivery: large file optimization. Multi-CDN support."
    },
    {
      "heading": "Image & Video Manager",
      "text": "Server-side media transformation. Resize, crop, rotate, format (WebP, AVIF), compression. Policy-based: define transformations as named policies. On-the-fly: transform via URL parameters. Responsive images: auto-generate multiple sizes. Device detection: optimal format per device."
    },
    {
      "heading": "Property Manager (Configuration)",
      "text": "Akamai\\'s configuration interface. Rules-based behaviors: cache, origin, security, performance. Rule trees with match criteria (path, header, cookie, device, geolocation). Behaviors: modify requests, responses at edge. Versioned configuration with activation workflow."
    }
  ],
  "interviewAnswer": "Akamai is the largest CDN with 4000+ edge PoPs in 135+ countries. Uses DNS-based routing with real-time mapping. Enterprise security via Kona Site Defender. Optimized for media delivery. Image & Video Manager for transformations. Property Manager for rule-based configuration.",
  "interviewQuestions": [
    {
      "question": "How many PoPs does Akamai have?",
      "answer": "4000+ PoPs in 135+ countries, embedded in 1600+ ISPs."
    },
    {
      "question": "What is unique about Akamai\\'s routing?",
      "answer": "DNS-based routing with real-time mapping (not Anycast)."
    },
    {
      "question": "What is Kona Site Defender?",
      "answer": "Akamai\\'s enterprise security suite with WAF, DDoS, bot management."
    },
    {
      "question": "What is Akamai\\'s Image & Video Manager?",
      "answer": "Server-side media transformation with policy-based and on-the-fly options."
    },
    {
      "question": "What is Property Manager?",
      "answer": "Akamai\\'s rule-based configuration interface for CDN behaviors."
    },
    {
      "question": "What is SureRoute?",
      "answer": "Akamai\\'s proprietary route optimization technology for dynamic content."
    },
    {
      "question": "What is Adaptive Media Delivery?",
      "answer": "Akamai\\'s optimized video streaming with adaptive bitrate support."
    },
    {
      "question": "What is the BOCC?",
      "answer": "Broadcast Operations Control Center — 24/7 media monitoring."
    },
    {
      "question": "How does Akamai handle traffic management?",
      "answer": "DNS-based: authoritative DNS returns optimal edge server based on real-time mapping."
    },
    {
      "question": "What is Bot Manager?",
      "answer": "Akamai\\'s bot detection and management — categorizes good/bad bots."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Akamai</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DNS Mapping</text><text x=\"225\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Real-time: Akamai autho</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ritative DNS</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"395\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Optimal Edge</text><text x=\"395\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">4000+ PoPs, 135 countri</text><text x=\"395\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">es, embedded in ISPs</text><line x1=\"460\" y1=\"48\" x2=\"320\" y2=\"70\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"225\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kona Site Defender</text><text x=\"225\" y=\"83\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">WAF + DDoS + Bot Manage</text><text x=\"225\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r</text><rect x=\"300\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"365\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Media Optim</text><text x=\"365\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Adaptive Media Delivery</text><rect x=\"440\" y=\"75\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"505\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Image Manager</text><text x=\"505\" y=\"83\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Policy-based + on-the-f</text><text x=\"505\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ly</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Akamai: 4000+ PoPs, DNS-based routing, Kona securi</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ty, media delivery, image/video optimization.</text></svg>",
  "codeExamples": [
    {
      "title": "Akamai Property Manager Rule",
      "useCase": "Creating cache rules in Property Manager.",
      "code": "# Akamai Property Manager (web console):\n# Create a new property or edit existing\n\n# Rule: Cache static assets for 30 days\n# Match: Path matches (*.css, *.js, *.jpg, *.png, *.svg)\n# Behavior: Caching ->\n#   \"Cache HTTP error responses\": 10s\n#   \"Caching\": \"Force Freshness\"\n#   \"Max Age\": \"30 days\"\n#   \"Enable Must-Revalidate\": true\n\n# Rule: Origin server configuration\n# Behavior: Origin Server ->\n#   \"Origin Server Hostname\": origin.example.com\n#   \"Forward Host Header\": origin.example.com\n#   \"SSL Verify\": true\n\n# Rule: Compress responses\n# Behavior: Response Compression ->\n#   \"Compress\": true\n#   \"Content Types\": text/*, application/json, application/javascript",
      "description": "Akamai Property Manager rules for caching, origin, and compression configuration."
    },
    {
      "title": "Akamai Image Manager Policy",
      "useCase": "Define image transformation policy.",
      "code": "# Akamai Image Manager Policy (JSON):\n{\n  \"policy\": \"my-image-policy\",\n  \"breakpoints\": [320, 640, 1024, 1920],\n  \"output\": {\n    \"format\": \"best\",  // auto-select WebP/AVIF\n    \"quality\": 85,\n    \"compression\": \"auto\"\n  },\n  \"transformations\": [\n    { \"type\": \"resize\", \"width\": \"{{breakpoint}}\", \"height\": \"{{breakpoint * 0.75}}\" },\n    { \"type\": \"crop\", \"width\": 1920, \"height\": 1080, \"gravity\": \"center\" }\n  ]\n}\n\n# Apply in Property Manager:\n# Behavior: Image & Video Manager ->\n#   \"Apply to\": Png, Jpg, Gif, Webp\n#   \"Image Policy\": my-image-policy\n#   \"Video Policy\": my-video-policy (optional)\n\n# On-the-fly URL:\n# /image.jpg?imwidth=400&imformat=webp",
      "description": "Akamai Image Manager policy definition for automatic responsive image transformations."
    },
    {
      "title": "Akamai API (PAPI) Configuration",
      "useCase": "Managing Akamai via API.",
      "code": "# Akamai Property Manager API (PAPI):\n\n# List properties:\ncurl -s \"https://akab-xxxx.luna.akamaiapis.net/papi/v1/properties?contractId=ctr_X&groupId=grp_X\" \\\n  -H \"Authorization: Bearer $AKAMAI_TOKEN\"\n\n# Get property version:\ncurl -s \"https://akab-xxxx.luna.akamaiapis.net/papi/v1/properties/prp_X/versions/latest\" \\\n  -H \"Authorization: Bearer $AKAMAI_TOKEN\"\n\n# Update property rule tree:\ncurl -X PUT \"https://akab-xxxx.luna.akamaiapis.net/papi/v1/properties/prp_X/versions/2/rules\" \\\n  -H \"Authorization: Bearer $AKAMAI_TOKEN\" \\\n  -H \"Content-Type: application/json\" \\\n  -d @updated-rules.json\n\n# Activate property:\ncurl -X POST \"https://akab-xxxx.luna.akamaiapis.net/papi/v1/properties/prp_X/activations\" \\\n  -H \"Authorization: Bearer $AKAMAI_TOKEN\" \\\n  -d '{\"network\": \"STAGING\", \"version\": 2, \"note\": \"Activating v2\"}'",
      "description": "Akamai Property Manager API for listing, updating, and activating CDN configurations."
    },
    {
      "title": "Akamai Kona WAF Rule",
      "useCase": "Configuring Akamai WAF rules.",
      "code": "# Kona Site Defender WAF configuration:\n# Security Center -> WAF -> Custom Rules\n\n# Rule: Block SQL injection in URL\n# Rule Name: \"Block SQLi in URI\"\n# Match: URL Path contains (select|union|drop|delete|insert)\n# Action: Deny with 403\n# Log: true\n\n# Rule: Rate limit login\n# Rule Name: \"Rate Limit Login\"\n# Match: URL Path = /login\n# Rate: 10 requests per minute per IP\n# Action: Deny with 429\n# Challenge: CAPTCHA (optional)\n\n# Rule: Geo-allow (whitelist country)\n# Match: Country = US\n# Action: Allow\n\n# Bot Manager categories:\n# - Allow: Googlebot, Bingbot (verified bots)\n# - Monitor: unknown search engines\n# - Deny: scrapers, bad bots, suspicious",
      "description": "Akamai Kona Site Defender WAF custom rules for SQL injection, rate limiting, and geo-filtering."
    },
    {
      "title": "Akamai Multi-CDN Configuration",
      "useCase": "Setting up multiple CDNs with Akamai.",
      "code": "# Akamai supports multi-CDN via \"CDN Interconnect\"\n# and \"Multi-CDN\" feature (for premium customers)\n\n# Strategy: Primary = Akamai, failover = secondary CDN\n# Akamai monitors secondary CDN health\n# Traffic shifts based on performance\n\n# Multi-CDN configuration:\n# Property Manager -> Add Behavior -> Multi-CDN\n# Secondary providers: CloudFront, Cloudflare, Fastly\n# Criteria: latency, availability, cost, capacity\n\n# OR use DNS-based multi-CDN:\n# Route53/CNS with health checks\n# example.com CNAME to:\n#   akamai.example.com (Akamai)\n#   cloudfront.example.com (CloudFront)\n# Traffic splits based on DNS latency/health\n\n# Benefits: higher availability, geographic optimization,\n# vendor negotiation leverage, disaster recovery",
      "description": "Akamai multi-CDN configuration options for redundancy and geographic optimization."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How many PoPs does Akamai have?",
      "options": [
        "200+",
        "1000+",
        "4000+",
        "10000+"
      ],
      "answer": 2,
      "explanation": "Akamai has 4000+ PoPs in 135+ countries."
    },
    {
      "question": "What routing method does Akamai use?",
      "options": [
        "Anycast",
        "DNS-based with real-time mapping",
        "BGP Anycast",
        "HTTP redirects"
      ],
      "answer": 1,
      "explanation": "Akamai uses DNS-based routing not Anycast."
    },
    {
      "question": "What is Kona Site Defender?",
      "options": [
        "A CDN caching service",
        "Akamai's security suite",
        "A media player",
        "A DNS service"
      ],
      "answer": 1,
      "explanation": "Kona Site Defender is Akamai\\'s enterprise security suite."
    },
    {
      "question": "What is Akamai\\'s unique positioning?",
      "options": [
        "Cheapest CDN",
        "Largest edge network, enterprise focus",
        "Best for startups",
        "Open source CDN"
      ],
      "answer": 1,
      "explanation": "Akamai is the largest CDN focused on enterprise customers."
    },
    {
      "question": "What is Property Manager?",
      "options": [
        "Server management",
        "CDN configuration interface",
        "Property listing",
        "Load balancer"
      ],
      "answer": 1,
      "explanation": "Property Manager is Akamai\\'s rule-based configuration interface."
    },
    {
      "question": "What is Image & Video Manager?",
      "options": [
        "Media player",
        "Server-side transformation service",
        "Video editor",
        "Streaming protocol"
      ],
      "answer": 1,
      "explanation": "Image & Video Manager is for server-side media transformation."
    }
  ]
};
