export const cdn_ddos_protection = {
  "id": "cdn-ddos-protection",
  "title": "DDoS Protection",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "CDNs protect against Distributed Denial of Service (DDoS) attacks by absorbing and filtering malicious traffic across their globally distributed infrastructure.",
    "DDoS attack types: volumetric (bandwidth exhaustion), protocol (SYN flood, DNS amplification), and application layer (HTTP flood, slow loris).",
    "CDN DDoS mitigation layers: network edge (packet filtering), load balancers (traffic distribution), application-aware inspection (WAF, rate limiting).",
    "CDNs can absorb attacks up to multiple Tbps by distributing traffic across thousands of edge servers, each handling a fraction of the attack."
  ],
  "laymanDefinition": "DDoS protection by a CDN is like having a thousand fire stations across the country instead of just one. When arsonists start fires everywhere (DDoS attack), instead of one station getting overwhelmed, each station handles the fires in its neighborhood. A few extra sprinklers (rate limiting) and fire inspectors (WAF) at each station also help.",
  "deepDive": [
    {
      "heading": "Volumetric (Layer 3/4) Attacks",
      "text": "Goal: saturate bandwidth. Types: UDP floods, ICMP floods, amplification (DNS, NTP, SSDP). CDN mitigation: absorbs at network edge, null-routes attacking IPs, uses Anycast to distribute traffic. Cloudflare absorbed 2.5 Tbps+ attacks."
    },
    {
      "heading": "Protocol (Layer 3/4) Attacks",
      "text": "Goal: exhaust server/network resources. Types: SYN floods, ACK floods, fragmented packet attacks. CDN mitigation: SYN cookies, connection tracking, TCP stack hardening. Fastly and Cloudflare handle millions of SYNs per second."
    },
    {
      "heading": "Application Layer (Layer 7) Attacks",
      "text": "Goal: crash application server. Types: HTTP floods, slow loris, slow POST, cache-busting attacks. CDN mitigation: rate limiting, WAF inspection, challenge pages (JS challenge, captcha), behavioral analysis. Most dangerous because hardest to distinguish from legitimate traffic."
    },
    {
      "heading": "Always-On vs On-Demand Protection",
      "text": "Always-on: CDN continuously scrubs all traffic. On-demand: traffic is redirected to scrubbing center only during attacks (may have 1-5 minute switchover). CDNs typically offer always-on for basic protection; premium plans add on-demand for large attacks."
    },
    {
      "heading": "CDN DDoS Response Flow",
      "text": "1) Traffic arrives at closest edge. 2) Layer 3/4 filters drop obvious attacks. 3) Connection tracking ensures valid TCP. 4) Rate limiting per IP/region/ASN. 5) WAF inspects HTTP requests. 6) Behavioral analysis identifies attack patterns. 7) Challenge pages verify humans."
    }
  ],
  "interviewAnswer": "CDN DDoS protection uses layered defense: network edge absorbs volumetric, protocol filtering handles SYN/UDP floods, WAF and rate limiting mitigate application attacks. Always-on scrubbing and Anycast distribution enable multi-Tbps attack absorption.",
  "interviewQuestions": [
    {
      "question": "What is a DDoS attack?",
      "answer": "Distributed Denial of Service — multiple systems flood a target with traffic to overwhelm it."
    },
    {
      "question": "How do CDNs protect against DDoS?",
      "answer": "Distribute traffic across global edge network, filter at multiple layers."
    },
    {
      "question": "What are the three DDoS attack types?",
      "answer": "Volumetric (Layer 3/4), Protocol, Application (Layer 7)."
    },
    {
      "question": "What is a SYN flood?",
      "answer": "Attack sends many TCP SYN requests without completing the handshake, exhausting server resources."
    },
    {
      "question": "What is an HTTP flood?",
      "answer": "Sending many legitimate-looking HTTP requests to overwhelm the application server."
    },
    {
      "question": "What is always-on DDoS protection?",
      "answer": "Traffic is continuously scrubbed by the CDN for all traffic all the time."
    },
    {
      "question": "What is on-demand DDoS protection?",
      "answer": "Traffic routed to scrubbing centers only during an active attack."
    },
    {
      "question": "What is a challenge page?",
      "answer": "A JS challenge or captcha that verifies the visitor is human, not a bot."
    },
    {
      "question": "What was the largest DDoS attack absorbed by a CDN?",
      "answer": "Cloudflare absorbed a 2.5+ Tbps attack in 2023."
    },
    {
      "question": "What is the downside of always-on DDoS protection?",
      "answer": "Potential latency added from inspection, even when no attack is happening."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DDoS Protection</text><rect x=\"10\" y=\"35\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"50\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Attacker</text><text x=\"50\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Botnet</text><rect x=\"10\" y=\"65\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"50\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Attacker</text><text x=\"50\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">SYN flood</text><rect x=\"10\" y=\"95\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"50\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Attacker</text><text x=\"50\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP flood</text><line x1=\"90\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"90\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"90\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Layer 3/4</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Packet filter</text><rect x=\"150\" y=\"65\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"230\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Layer 7</text><text x=\"230\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">WAF + rate limit</text><rect x=\"150\" y=\"95\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"230\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Behavioral</text><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Challenge page</text><line x1=\"310\" y1=\"48\" x2=\"340\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"310\" y1=\"78\" x2=\"340\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"310\" y1=\"108\" x2=\"340\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"35\" width=\"120\" height=\"90\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"410\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"410\" y=\"97\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributed absorptio</text><text x=\"410\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n across thousands of</text><text x=\"410\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> servers</text><line x1=\"470\" y1=\"80\" x2=\"490\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"500\" y=\"35\" width=\"100\" height=\"90\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"550\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Origin</text><text x=\"550\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Protected</text><text x=\"280\" y=\"205\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DDoS Protection: Layered filtering at CDN edge abs</text><text x=\"280\" y=\"217\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">orbs multi-Tbps attacks and shields origin.</text></svg>",
  "codeExamples": [
    {
      "title": "Cloudflare DDoS Overview & Settings",
      "useCase": "Cloudflare DDoS protection configuration.",
      "code": "# Cloudflare DDoS protection is automatic\n# and included on all plans\n\n# Dashboard: Security -> DDoS\n# Settings:\n# - DDoS Attack Alerts (Webhooks/Email)\n# - DDoS Override (mitigation sensitivity)\n# - Advanced DDoS Rules\n\n# Custom DDoS rule via API:\ncurl -X POST \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/ddos_rules\" \\\n  -H \"Authorization: Bearer $TOKEN\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"action\": \"block\", \"expression\": \"(http.request.method eq \\\"GET\\\")\", \"sensitivity\": \"high\"}'\n\n# DDoS alerts:\n# - HTTP DDoS Attack Alert\n# - Layer 3/4 DDoS Attack Alert\n# - Advanced DDoS Attack Alert",
      "description": "Cloudflare DDoS protection settings and custom rules configuration."
    },
    {
      "title": "AWS Shield + CloudFront DDoS Protection",
      "useCase": "AWS DDoS protection for CloudFront.",
      "code": "# AWS Shield Standard (Free)\n# - Automatic with CloudFront and Route53\n# - Protects against L3/L4 attacks\n# - Up to 5 Gbps protection\n\n# AWS Shield Advanced ($3,000/month)\n# - Enhanced DDoS protection\n# - 24/7 DRT access\n# - Financial protection (cost reimbursement)\n# - Real-time metrics and visibility\n# - Up to 500 Gbps+ protection\n\n# Enabling Shield Advanced for CloudFront:\naws shield create-protection --name \"cdn-distribution\" \\\n  --resource-arn \"arn:aws:cloudfront::123456789:distribution/E123456789ABCD\"\n\n# Shield Advanced also provides:\n# - Application Layer (L7) DDoS mitigation\n# - Health-based detection\n# - Custom mitigation rules",
      "description": "AWS Shield Standard and Advanced DDoS protection for CloudFront distributions."
    },
    {
      "title": "Rate Limiting for HTTP Floods",
      "useCase": "Rate limiting to mitigate Layer 7 attacks.",
      "code": "# Cloudflare Rate Limiting:\n# Dashboard: Security -> WAF -> Rate Limiting Rules\n# Rule: Block if > 100 requests from same IP in 1 minute\n\n# Via API:\ncurl -X POST \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rate_limits\" \\\n  -H \"Authorization: Bearer $TOKEN\" \\\n  -d '{\"threshold\": 100, \"period\": 60, \"action\": \"block\", \"match\": {\"request\": {\"url\": \"https://example.com/login\"}}}'\n\n# Fastly:\nif (ratecounter.rate_limit_count(req.url.path, \"10 seconds\") > 50) {\n  error 429 \"Too many requests\";\n}\n\n# NGINX:\nlimit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;",
      "description": "Rate limiting rules for mitigating HTTP flood DDoS attacks."
    },
    {
      "title": "Challenge Page (JS Challenge)",
      "useCase": "Bot verification via challenge.",
      "code": "# Cloudflare JS Challenge:\n# Security -> Settings -> Challenge Passage\n\n# JS Challenge works:\n# 1. CDN returns interstitial HTML page\n# 2. Browser executes JavaScript challenge\n# 3. If solved, visitor gets cf_clearance cookie\n# 4. Cookie valid for challenge passage period\n# 5. Permanent access (no more challenges)\n\n# Non-JS environments (API clients):\n# Cannot solve JS challenge -> blocked\n# API clients should use rate limiting instead\n\n# Alternative: CAPTCHA challenge\n# - Manual verification for sensitive endpoints\n# - Higher security but worse user experience\n# - Turnstile: Cloudflare's privacy-first captcha",
      "description": "JS Challenge page mechanism for verifying human visitors during DDoS events."
    },
    {
      "title": "DDoS Incident Response with CDN",
      "useCase": "Responding to a DDoS attack.",
      "code": "# 1. Detect: Monitor CDN analytics for traffic spikes\ncurl -s \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/analytics/dashboard\" | jq \".result.totals.http_requests\"\n\n# 2. Activate DDoS override (if needed)\ncurl -X PATCH \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/ddos_override\" -d '{\"action\": \"block\"}'\n\n# 3. Enable \"I'm Under Attack\" mode (Cloudflare)\ncurl -X PATCH \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/security_level\" -d '{\"value\": \"under_attack\"}'\n\n# 4. Rate limit aggressively\n# 5. Block attacking IPs/ASNs/regions\n# 6. Contact CDN support for escalation\n# 7. Monitor:\ncurl -s \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/security/events\" | jq \".result\" | head -20",
      "description": "DDoS incident response commands using CDN APIs to mitigate active attacks."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What are the three types of DDoS attacks?",
      "options": [
        "SQL injection, XSS, CSRF",
        "Volumetric, Protocol, Application",
        "GET, POST, PUT",
        "Internal, external, lateral"
      ],
      "answer": 1,
      "explanation": "DDoS attacks are categorized as volumetric, protocol, and application layer."
    },
    {
      "question": "How does a CDN absorb volumetric DDoS attacks?",
      "options": [
        "By blocking all traffic",
        "By distributing traffic across global edge servers",
        "By rate limiting only",
        "By disabling the site"
      ],
      "answer": 1,
      "explanation": "CDN distributes attack traffic across thousands of edge servers."
    },
    {
      "question": "What is an HTTP flood?",
      "options": [
        "Many DNS queries",
        "Many legitimate-looking HTTP requests",
        "Many SYN packets",
        "Many UDP packets"
      ],
      "answer": 1,
      "explanation": "An HTTP flood sends many HTTP requests to overwhelm the application."
    },
    {
      "question": "What is a challenge page?",
      "options": [
        "Login page",
        "JS/CAPTCHA verification page",
        "Error page",
        "Homepage"
      ],
      "answer": 1,
      "explanation": "A challenge page verifies the visitor is human, not a bot."
    },
    {
      "question": "What is always-on DDoS protection?",
      "options": [
        "Protection only during attacks",
        "Continuous traffic scrubbing",
        "Manual mitigation",
        "No protection"
      ],
      "answer": 1,
      "explanation": "Always-on scrubs all traffic continuously."
    },
    {
      "question": "What is AWS Shield Advanced?",
      "options": [
        "Free DDoS protection",
        "Premium DDoS protection for AWS",
        "WAF service",
        "CDN service"
      ],
      "answer": 1,
      "explanation": "AWS Shield Advanced is a premium DDoS protection service."
    }
  ]
};
