export const cdn_cache_hit = {
  "id": "cdn-cache-hit",
  "title": "Cache Hit",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "A cache hit occurs when the CDN edge server has the requested content in its cache and can serve it directly without contacting the origin server.",
    "Cache hits result in the fastest response times because content is served from the edge server's local memory or SSD storage.",
    "The cache hit ratio (CHR) is a key CDN performance metric — the percentage of requests served from cache vs total requests.",
    "Higher cache hit ratios mean better performance, lower origin load, and reduced bandwidth costs."
  ],
  "laymanDefinition": "A cache hit is like finding the milk you need already in your neighborhood store's refrigerator. You grab it and pay immediately — no waiting. You don't need to call the central warehouse to order it. The store already knew people would want milk and kept it stocked.",
  "deepDive": [
    {
      "heading": "Cache Hit Indicators",
      "text": "Response headers indicate cache hits: x-cache: HIT (CloudFront/x-amz-cf-pop), CF-Cache-Status: HIT (Cloudflare), X-Cache: HIT (Fastly/Varnish), X-Cache-Status: HIT (Nginx). The Age header shows how many seconds ago the content was fetched from the origin."
    },
    {
      "heading": "Factors Affecting Cache Hits",
      "text": "TTL settings (longer TTL = more hits). Cache capacity (more storage = more content cached). Content popularity (Pareto principle: 20% of content gets 80% of hits). Cache key design (including query strings reduces hit rate). Cache warming strategy (pre-fill cache during off-peak)."
    },
    {
      "heading": "Cache Hit Ratio Calculation",
      "text": "CHR = (Cache Hits / Total Requests) * 100. A good CHR is 90-95% for static content and 50-80% for mixed content. CDNs report CHR in their dashboards. Improving CHR by 1% can save significant origin bandwidth and reduce latency."
    },
    {
      "heading": "Improving Cache Hit Ratio",
      "text": "Increase TTL for stable content. Use cache warming (pre-fetch popular content). Optimize cache keys (avoid unnecessary query string variations). Implement tiered caching. Use stale-while-revalidate to serve stale content while refreshing in background. Version static assets with fingerprints."
    },
    {
      "heading": "Cache Hit Metrics Monitoring",
      "text": "Key metrics: CHR (overall), CHR per URL pattern, CHR per geographic region, hit bytes vs miss bytes, origin offload percentage. Monitor via CDN provider dashboards, real-time logs, and third-party monitoring tools (Datadog, Grafana). Alert on sudden CHR drops which may indicate configuration issues."
    }
  ],
  "interviewAnswer": "A cache hit means the CDN served content from its edge cache without contacting the origin. High cache hit ratios mean faster responses, lower origin load, and reduced costs. Monitor CHR and optimize TTLs, cache keys, and cache warming to maximize hits.",
  "interviewQuestions": [
    {
      "question": "What is a cache hit?",
      "answer": "When the CDN edge server has content cached and serves it directly without contacting the origin."
    },
    {
      "question": "How is a cache hit indicated in HTTP headers?",
      "answer": "Headers like x-cache: HIT, CF-Cache-Status: HIT, or X-Cache: HIT in the response."
    },
    {
      "question": "What is cache hit ratio (CHR)?",
      "answer": "The percentage of requests served from cache vs total requests. A key CDN performance metric."
    },
    {
      "question": "What is a good cache hit ratio for static content?",
      "answer": "90-95% or higher. Mixed content may achieve 50-80%."
    },
    {
      "question": "What does the Age header indicate?",
      "answer": "How many seconds ago the cached content was originally fetched from the origin server."
    },
    {
      "question": "How can you increase cache hit ratio?",
      "answer": "Increase TTL, use cache warming, optimize cache keys, version assets, use tiered caching, and stale-while-revalidate."
    },
    {
      "question": "What is the Pareto principle in CDN caching?",
      "answer": "About 20% of content generates 80% of cache hits. Focus caching efforts on popular content."
    },
    {
      "question": "How does query string affect cache hits?",
      "answer": "Each unique query string creates a separate cache entry, reducing hit ratio. Normalize query strings in cache keys."
    },
    {
      "question": "What is cache warming?",
      "answer": "Pre-fetching and caching content during off-peak hours to ensure it is available when users request it."
    },
    {
      "question": "What causes a sudden drop in cache hit ratio?",
      "answer": "TTL changes, cache configuration updates, origin changes, cache purging, or traffic pattern shifts."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cache Hit</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Request</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Resource URL</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"220\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Edge Cache</text><text x=\"220\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check cache</text><line x1=\"280\" y1=\"48\" x2=\"310\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"320\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache HIT?</text><text x=\"390\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Serve immediately</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache MISS</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch from origin</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"220\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Origin Server</text><text x=\"220\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Generate response</text><line x1=\"280\" y1=\"83\" x2=\"310\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Serve to User</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Low latency (<10ms)</text><rect x=\"160\" y=\"105\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"220\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache + Store</text><text x=\"220\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Update cache</text><text x=\"240\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cache Hit: Content served from edge cache without </text><text x=\"240\" y=\"202\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">contacting origin — fastest possible response.</text></svg>",
  "codeExamples": [
    {
      "title": "Check Cache Status with Curl",
      "useCase": "Verifying cache hits.",
      "code": "# Check if a URL is served from CDN cache\ncurl -I https://cdn.example.com/style.css\n\n# Example output showing cache hit:\n# HTTP/2 200\n# content-type: text/css\n# cache-control: public, max-age=31536000\n# x-cache: Hit from cloudfront\n# age: 72834\n# cf-cache-status: HIT\n\n# x-cache: Hit = CloudFront edge cache hit\n# age: 72834 = content has been cached\n#         for 72,834 seconds (~20 hours)\n# cf-cache-status: HIT = Cloudflare cache hit",
      "description": "Using curl to verify CDN cache hits through response headers."
    },
    {
      "title": "CloudFront Cache Statistics",
      "useCase": "Viewing CHR in CloudWatch.",
      "code": "# CloudFront cache hit metrics via AWS CLI\naws cloudwatch get-metric-statistics \\\n  --namespace AWS/CloudFront \\\n  --metric-name HitRatio \\\n  --dimensions Name=DistributionId,Value=E123456789ABCD\n  --start-time 2024-01-01T00:00:00Z \\\n  --end-time 2024-01-02T00:00:00Z \\\n  --period 3600 \\\n  --statistics Average\n\n# View cache hit metrics by behavior\naws cloudfront get-distribution \\\n  --id E123456789ABCD \\\n  --query \"Distribution.DistributionConfig\"\n\n# Check total requests and hits\naws cloudfront get-distribution-statistics \\\n  --distribution-id E123456789ABCD",
      "description": "AWS CLI commands to check CloudFront cache hit ratio metrics."
    },
    {
      "title": "Nginx Cache Hit Status with Upstream",
      "useCase": "Nginx caching proxy status.",
      "code": "server {\n  listen 80;\n  server_name cdn.example.com;\n\n  location / {\n    proxy_cache mycache;\n    proxy_pass http://origin;\n\n    # Show cache status in response header\n    add_header X-Cache-Status $upstream_cache_status;\n\n    # Values:\n    # HIT — served from cache\n    # MISS — not in cache, fetched from origin\n    # EXPIRED — cache expired, revalidated\n    # STALE — served stale, origin unavailable\n    # UPDATING — cache update in progress\n    # BYPASS — cache bypassed (proxy_cache_bypass)\n  }\n}\n\n# Test:\n# curl -I https://cdn.example.com/test.jpg\n# X-Cache-Status: HIT",
      "description": "Nginx proxy cache configuration with $upstream_cache_status showing cache hit/miss."
    },
    {
      "title": "Cache Hit Ratio Calculation Script",
      "useCase": "Calculating CHR from logs.",
      "code": "# Parse CDN access logs to calculate CHR\n#!/bin/bash\n# Sample log format:\n# TIME | URL | CACHE_STATUS | BYTES\n\n# Count total requests\nTOTAL=$(wc -l < cdn-access.log)\n\n# Count cache hits\nHITS=$(grep -c \"HIT\" cdn-access.log)\n\n# Calculate ratio\nCHR=$(echo \"scale=2; $HITS * 100 / $TOTAL\" | bc)\necho \"Total requests: $TOTAL\"\necho \"Cache hits: $HITS\"\necho \"Cache Hit Ratio: $CHR%\"\n\n# Breakdown by URL pattern\necho \"\\nBy content type:\"\ngrep -oE \"\\.(css|js|png|jpg|html)\" cdn-access.log \\\n  | sort | uniq -c | sort -rn",
      "description": "Bash script to calculate cache hit ratio from CDN access logs."
    },
    {
      "title": "Fastly Cache Hit Dashboard via API",
      "useCase": "Programmatic CHR monitoring.",
      "code": "# Fastly API to get cache hit ratio\ncurl -H \"Fastly-Key: $FASTLY_API_TOKEN\" \\\n  \"https://api.fastly.com/stats/service/$SERVICE_ID\" \\\n  \"?by=hour&from=2h ago&to=now\"\n\n# Response includes:\n# {\n#   \"status\": \"success\",\n#   \"data\": [{\n#     \"requests\": 1234567,\n#     \"hits\": 1111111,\n#     \"miss\": 123456,\n#     \"hit_ratio\": 0.90,\n#     \"bandwidth\": 45000000000,\n#     \"status_200\": 1100000\n#   }]\n# }\n\n# Python script for alerting on low CHR:\nimport requests, os\nresp = requests.get(\n  \"https://api.fastly.com/stats/service/$SID\",\n  headers={\"Fastly-Key\": os.environ[\"FASTLY_API_KEY\"]}\n)\nchr = resp.json()[\"data\"][0][\"hit_ratio\"]\nif chr < 0.80:\n  print(f\"ALERT: CHR dropped to {chr:.2%}\")",
      "description": "Fastly API-based cache hit ratio monitoring with Python alerting."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a cache hit?",
      "options": [
        "Content fetched from origin",
        "Content served from CDN cache",
        "Cache miss retry",
        "Cache invalidation"
      ],
      "answer": 1,
      "explanation": "A cache hit is when content is served directly from the CDN cache without contacting the origin."
    },
    {
      "question": "What does the Age header indicate?",
      "options": [
        "Content age in seconds since origin fetch",
        "User age",
        "Cache TTL remaining",
        "Request duration"
      ],
      "answer": 0,
      "explanation": "The Age header shows how long the cached content has been stored on the edge server."
    },
    {
      "question": "What is a good cache hit ratio for static content?",
      "options": [
        "30-40%",
        "50-60%",
        "90-95%",
        "100%"
      ],
      "answer": 2,
      "explanation": "A good CHR for static content is 90-95%."
    },
    {
      "question": "Which header indicates a cache hit?",
      "options": [
        "Content-Type",
        "Cache-Control",
        "x-cache: Hit",
        "Accept-Encoding"
      ],
      "answer": 2,
      "explanation": "Headers like x-cache: Hit or CF-Cache-Status: HIT indicate a cache hit."
    },
    {
      "question": "What improves cache hit ratio?",
      "options": [
        "Lower TTL",
        "Longer TTL and cache warming",
        "Disabling cache",
        "Adding unique query params"
      ],
      "answer": 1,
      "explanation": "Longer TTL and cache warming improve the cache hit ratio."
    },
    {
      "question": "How does versioned filenames affect caching?",
      "options": [
        "Reduces hits",
        "Enables permanent caching, improving hits",
        "No effect",
        "Prevents caching"
      ],
      "answer": 1,
      "explanation": "Versioned filenames (fingerprints) enable immutable/permanent caching, improving hit ratio."
    }
  ]
};
