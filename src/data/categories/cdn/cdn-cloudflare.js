export const cdn_cloudflare = {
  "id": "cdn-cloudflare",
  "title": "Cloudflare",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Cloudflare is a leading CDN, DNS, DDoS protection, and security platform. Founded in 2009, it serves over 20% of all websites globally.",
    "Unique features: Anycast network with 310+ edge PoPs, reverse proxy architecture, integrated WAF, DDoS mitigation, Workers (serverless), and Argo Smart Routing.",
    "All Cloudflare plans include: CDN caching, SSL/TLS, DDoS protection, DNS management, WAF (basic rules on free plan), and analytics.",
    "Cloudflare operates a reverse proxy model — it terminates traffic at the edge, inspects it, and forwards to origin. This provides both performance and security benefits."
  ],
  "laymanDefinition": "Cloudflare is the \"do-it-all\" security and performance platform for websites. Think of it as a security guard (DDoS/WAF), fast delivery driver (CDN), and building manager (DNS) all in one. It stands in front of your server, handling visitors efficiently and keeping troublemakers out.",
  "deepDive": [
    {
      "heading": "Anycast Network Architecture",
      "text": "Cloudflare uses Anycast — all 310+ PoPs share the same IP addresses. BGP routes users to the nearest PoP. This provides natural load balancing and DDoS absorption. Traffic is always routed to the fastest available PoP."
    },
    {
      "heading": "Reverse Proxy Model",
      "text": "Cloudflare terminates all user connections at the edge. TLS is decrypted at edge. WAF inspects at edge. Only safe/legitimate requests are proxied to origin. Origin IP is hidden from visitors. Origin only sees Cloudflare IPs."
    },
    {
      "heading": "Cloudflare Workers (Serverless)",
      "text": "Serverless compute at the 310+ edge PoPs. JavaScript/WASM execution at edge. Intercept and modify requests/responses. Use cases: A/B testing, API gateways, JWT validation, custom auth, edge redirects, image optimization. Sub-millisecond startup."
    },
    {
      "heading": "Security Suite",
      "text": "DDoS: automatic, unlimited, absorbs multi-Tbps attacks. WAF: managed rules (OWASP, Cloudflare), custom rules, rate limiting, bot management. SSL/TLS: flexible (end-to-end, flexible, full, strict). Zero Trust: Cloudflare Access replaces VPNs. Page Shield: monitors 3rd-party scripts."
    },
    {
      "heading": "Performance Features",
      "text": "Argo Smart Routing: finds fastest internet path (30% avg improvement). Railgun: WAN compression for dynamic content. Mirage: smart image loading for mobile. Polish: server-side image optimization. Brotli compression. Early Hints (103). HTTP/3 enabled by default."
    }
  ],
  "interviewAnswer": "Cloudflare is a reverse proxy CDN with Anycast network, integrated security (DDoS, WAF, SSL), serverless Workers, and performance optimizations. It serves 20%+ of websites with features across all plans, from free to enterprise.",
  "interviewQuestions": [
    {
      "question": "What makes Cloudflare unique?",
      "answer": "Anycast network, reverse proxy model, serverless Workers, all-in-one platform."
    },
    {
      "question": "How many PoPs does Cloudflare have?",
      "answer": "310+ PoPs globally on Anycast network."
    },
    {
      "question": "What is Cloudflare\\'s business model?",
      "answer": "Freemium: free plan with basic features, paid plans for advanced features."
    },
    {
      "question": "What is a Cloudflare Worker?",
      "answer": "Serverless JavaScript/WASM execution at CDN edge."
    },
    {
      "question": "What is Argo Smart Routing?",
      "answer": "Real-time traffic optimization finding faster internet paths."
    },
    {
      "question": "What does \"orange-clouded\" mean?",
      "answer": "Proxied through Cloudflare (vs gray-clouded = DNS-only)."
    },
    {
      "question": "What is Cloudflare Access?",
      "answer": "Zero Trust replacement for VPNs, authenticating users before they reach applications."
    },
    {
      "question": "What is Railgun?",
      "answer": "WAN compression technology for dynamic content (deprecated, replaced by Argo)."
    },
    {
      "question": "Does Cloudflare support HTTP/3?",
      "answer": "Yes, HTTP/3 is enabled by default on all plans."
    },
    {
      "question": "What is the Cloudflare Global Network?",
      "answer": "The worldwide network of 310+ edge data centers providing CDN, DNS, and security services."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cloudflare</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Visitor</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Browser request</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DNS</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cloudflare DNS</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"160\" height=\"50\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"240\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloudflare Edge</text><text x=\"240\" y=\"57\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Anycast PoP. Reverse proxy. W</text><text x=\"240\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">AF, DDoS, SSL, Workers, Cache</text><text x=\"240\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, Argo.</text><line x1=\"320\" y1=\"60\" x2=\"360\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"320\" y1=\"60\" x2=\"360\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"35\" width=\"100\" height=\"50\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"420\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Origin Server</text><text x=\"420\" y=\"35\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Only receives filt</text><text x=\"420\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ered, safe traffic</text><text x=\"420\" y=\"57\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> from Cloudflare I</text><text x=\"420\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ps. Origin IP hidd</text><text x=\"420\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">en.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cloudflare: Anycast CDN with reverse proxy, DDoS, </text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">WAF, Workers, Argo, and HTTP/3. All-in-one platfor</text><text x=\"240\" y=\"224\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">m.</text></svg>",
  "codeExamples": [
    {
      "title": "Cloudflare DNS Setup",
      "useCase": "Configuring DNS records on Cloudflare.",
      "code": "# Dashboard: DNS -> Records\n\n# Orange cloud (proxied): traffic goes through Cloudflare\n# Gray cloud (DNS only): direct connection\n\n# A Record (proxied - recommended)\n# Type: A   Name: @   Content: 203.0.113.10   Proxy: Proxied\n\n# CNAME Record (proxied)\n# Type: CNAME   Name: www   Content: example.com   Proxy: Proxied\n\n# CNAME Record (DNS only for subdomain without CDN)\n# Type: CNAME   Name: api   Content: api.example.com   Proxy: DNS only\n\n# Verify:\nnslookup example.com\n# Should return Cloudflare IPs (104.x.x.x, 172.x.x.x)",
      "description": "Cloudflare DNS record configuration with proxied vs DNS-only settings."
    },
    {
      "title": "Cloudflare Page Rules",
      "useCase": "Creating page rules for routing/caching.",
      "code": "# Dashboard: Rules -> Page Rules\n\n# Rule 1: Always HTTPS\n# URL: *.example.com/*\n# Setting: Always Use HTTPS -> On\n\n# Rule 2: Cache everything for images\n# URL: *.example.com/wp-content/uploads/*\n# Settings: Cache Level -> Cache Everything\n#           Edge Cache TTL -> 1 month\n#           Browser Cache TTL -> 1 day\n\n# Rule 3: Bypass cache for admin\n# URL: *.example.com/admin/*\n# Settings: Cache Level -> Bypass\n#           Disable Performance -> On\n\n# Note: Up to 3 page rules on free plan",
      "description": "Cloudflare Page Rules for HTTPS, caching, and admin bypass configuration."
    },
    {
      "title": "Cloudflare Workers (Hello World)",
      "useCase": "Deploying a Cloudflare Worker.",
      "code": "# wrangler.toml\nname = \"hello-worker\"\nmain = \"src/index.js\"\ncompatibility_date = \"2024-01-01\"\n\n// src/index.js\nexport default {\n  async fetch(request, env, ctx) {\n    const url = new URL(request.url);\n    const country = request.cf.country;\n    return new Response(`\n      <h1>Hello from Cloudflare!</h1>\n      <p>You visiting from: ${country}</p>\n      <p>Edge: ${request.cf.colo}</p>\n      <p>City: ${request.cf.city}</p>\n    `, { headers: { \"content-type\": \"text/html\" } });\n  }\n}\n\n# Deploy:\nnpx wrangler deploy",
      "description": "Simple Cloudflare Worker returning visitor geolocation and edge information."
    },
    {
      "title": "Cloudflare SSL/TLS Configuration",
      "useCase": "Configuring SSL modes.",
      "code": "# Dashboard: SSL/TLS -> Overview\n\n# SSL modes:\n# 1. Off: no encryption (not recommended)\n# 2. Flexible: edge-to-browser TLS, origin HTTP\n# 3. Full: edge-to-browser TLS, origin TLS (self-signed OK)\n# 4. Full (strict): origin must have valid CA-signed cert\n\n# Recommended: Full (strict) for maximum security\n\n# Edge certificates:\n# Cloudflare provides free SSL certs (wildcard * .example.com)\n# Automatic certificate management\n# Renews automatically\n\n# Minimum TLS Version:\n# Dashboard: Edge Certificates -> Minimum TLS Version\n# Recommended: TLS 1.2 or TLS 1.3",
      "description": "Cloudflare SSL/TLS modes and certificate management configuration."
    },
    {
      "title": "Cloudflare Cache Configuration",
      "useCase": "Configuring caching behavior.",
      "code": "# Dashboard: Caching -> Configuration\n\n# Cache Level:\n# - No query string: cache regardless of query string\n# - Ignore query string: same as above\n# - Standard: cache based on query string\n# - Cache Everything: force cache all static content\n\n# Browser Cache TTL: 4 hours (default)\n# Edge Cache TTL: respects origin Cache-Control\n\n# Purge Cache:\n# - Purge Individual Files\n# - Purge Everything\n# - Custom Purge (by hostname, prefix, tag)\n\n# Custom Cache Key:\n# Cache by: scheme, host, URI, headers, cookie, query string\n\n# Tiered Cache:\n# - Upper tier caches from origin\n# - Lower tiers cache from upper tier\n# - Reduces origin load",
      "description": "Cloudflare caching configuration including cache levels, TTL, and purging."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What type of network does Cloudflare use?",
      "options": [
        "TCP network",
        "Anycast network",
        "P2P network",
        "Mesh network"
      ],
      "answer": 1,
      "explanation": "Cloudflare uses an Anycast network."
    },
    {
      "question": "What does orange cloud mean in Cloudflare DNS?",
      "options": [
        "DNS only",
        "Traffic proxied through Cloudflare",
        "Disabled",
        "SSL only"
      ],
      "answer": 1,
      "explanation": "Orange cloud means traffic is proxied through Cloudflare."
    },
    {
      "question": "What are Cloudflare Workers?",
      "options": [
        "Load balancers",
        "Serverless edge compute in JavaScript/WASM",
        "DNS servers",
        "Cache servers"
      ],
      "answer": 1,
      "explanation": "Workers are serverless functions at the edge."
    },
    {
      "question": "What is Argo Smart Routing?",
      "options": [
        "Static path routing",
        "Real-time traffic optimization",
        "DNS routing",
        "Cache routing"
      ],
      "answer": 1,
      "explanation": "Argo finds optimal internet paths in real-time."
    },
    {
      "question": "What SSL mode requires valid origin cert?",
      "options": [
        "Flexible",
        "Full",
        "Full (strict)",
        "Off"
      ],
      "answer": 2,
      "explanation": "Full (strict) requires a CA-signed certificate on the origin."
    },
    {
      "question": "Is HTTP/3 available on Cloudflare?",
      "options": [
        "No",
        "Yes, by default",
        "Only on enterprise",
        "Only for paid plans"
      ],
      "answer": 1,
      "explanation": "HTTP/3 is enabled by default on all Cloudflare plans."
    }
  ]
};
