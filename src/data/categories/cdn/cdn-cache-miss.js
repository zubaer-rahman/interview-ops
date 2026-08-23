export const cdn_cache_miss = {
  "id": "cdn-cache-miss",
  "title": "Cache Miss",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "A cache miss occurs when the requested content is not found in the CDN edge server's cache, requiring the server to fetch it from the origin.",
    "Cache misses result in higher latency because the request must travel from the edge to the origin (or parent cache tier) before the content can be served.",
    "Cache misses are expected on first requests, after cache expiration, or after cache invalidation. The response is then cached for subsequent requests.",
    "Minimizing cache misses is key to CDN performance. Strategies include longer TTLs, cache warming, and optimizing cache key configuration."
  ],
  "laymanDefinition": "A cache miss is like going to your neighborhood store for milk and finding the dairy section empty. The clerk has to call the central warehouse and have them deliver it. You wait a few minutes. The good news: next time you come for milk, it will be in stock because the store learned to keep it on hand.",
  "deepDive": [
    {
      "heading": "Why Cache Misses Happen",
      "text": "First request (cold cache): nobody has requested this content before. TTL expired: the cached content\\'s time-to-live has elapsed. Cache eviction: the edge server ran out of storage and removed less popular content. Cache invalidation: content was explicitly purged. Cache key mismatch: URL variations that don\\'t hit the same cache entry."
    },
    {
      "heading": "Cache Miss Penalty",
      "text": "A cache miss adds significant latency: edge to origin round trip. For a US user hitting a European origin, this could add 100-300ms. The miss penalty includes DNS resolution of origin, TCP connection, SSL handshake, origin processing time, and response transfer. The cache fill response is then stored for future hits."
    },
    {
      "heading": "Cold Start / First Request",
      "text": "The first user to request a piece of content after deployment experiences a cache miss (cold start). This user sees higher latency. Cache warming pre-fetches content to avoid cold starts for real users. For new deployments, consider pre-loading critical assets in the CDN cache."
    },
    {
      "heading": "Cache Miss vs Cache Hit Performance",
      "text": "Cache hit: response in 1-10ms (from edge server memory/SSD). Cache miss: response in 50-500ms (requires origin round trip). The difference is dramatic — a cache miss can be 10-50x slower. This is why maximizing cache hit ratio is critical for CDN performance."
    },
    {
      "heading": "Monitoring Cache Misses",
      "text": "Track miss rate, miss latency (time to fill from origin), top missed URLs, miss reasons (first byte, expired, evicted). High miss rate on popular content indicates configuration problems. CDN dashboards show miss breakdowns. Alert on spikes in cache miss rate that indicate issues."
    }
  ],
  "interviewAnswer": "A cache miss means the CDN had to fetch content from the origin, adding latency. Misses happen on first requests, after TTL expiry, or after invalidation. Minimize misses with optimal TTLs, cache warming, and proper cache key configuration. Monitor miss rates to identify optimization opportunities.",
  "interviewQuestions": [
    {
      "question": "What is a cache miss?",
      "answer": "When requested content is not in the CDN edge cache and must be fetched from the origin server."
    },
    {
      "question": "Why do cache misses increase latency?",
      "answer": "Because the request must travel from the edge server to the origin, adding round-trip time."
    },
    {
      "question": "What are common causes of cache misses?",
      "answer": "First request (cold cache), TTL expiry, cache eviction, invalidation, and cache key mismatch."
    },
    {
      "question": "What is a cold start in CDN caching?",
      "answer": "The first user request after content is deployed — the cache is empty, so it is always a miss."
    },
    {
      "question": "What is the typical latency difference between hit and miss?",
      "answer": "Cache hit: 1-10ms. Cache miss: 50-500ms (10-50x slower)."
    },
    {
      "question": "How can you reduce cache misses?",
      "answer": "Longer TTLs, cache warming, optimizing cache keys, larger cache allocations, and tiered caching."
    },
    {
      "question": "What is cache eviction?",
      "answer": "When the edge server removes older or less popular content to make room for new content."
    },
    {
      "question": "What does the x-cache: Miss header mean?",
      "answer": "The CDN edge server did not have the content cached and had to fetch it from the origin or parent cache."
    },
    {
      "question": "How does cache key configuration affect misses?",
      "answer": "Including query string parameters in the cache key creates separate entries for each variation, potentially causing misses."
    },
    {
      "question": "What is cache fill?",
      "answer": "The process of fetching content from the origin and storing it in the edge cache after a cache miss."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Cache Miss</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User Request</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Resource URL</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"220\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Edge Cache</text><text x=\"220\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check cache</text><line x1=\"280\" y1=\"48\" x2=\"310\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"320\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache MISS!</text><text x=\"390\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch from origin</text><line x1=\"320\" y1=\"60\" x2=\"320\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"310\" y1=\"65\" x2=\"280\" y2=\"65\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"75\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"220\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fetch from Origin</text><text x=\"220\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Requires round trip</text><line x1=\"280\" y1=\"88\" x2=\"310\" y2=\"88\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"320\" y=\"75\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"390\" y=\"91\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Store in Cache</text><text x=\"390\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache fill</text><line x1=\"410\" y1=\"88\" x2=\"440\" y2=\"88\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"110\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Serve to User</text><text x=\"65\" y=\"118\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Higher latency (50-5</text><text x=\"65\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">00ms)</text><text x=\"240\" y=\"190\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cache Miss: Content not in edge cache. Must be fet</text><text x=\"240\" y=\"202\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ched from origin, increasing latency. Subsequent r</text><text x=\"240\" y=\"214\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">equests will hit.</text></svg>",
  "codeExamples": [
    {
      "title": "Identifying Cache Misses with Curl",
      "useCase": "Check cache miss headers.",
      "code": "# Force a cache miss to see the full flow\ncurl -I https://cdn.example.com/image.jpg\n\n# Look for miss indicators:\n# x-cache: Miss from cloudfront\n# cf-cache-status: MISS\n# x-cache-status: MISS\n# age: 0 (just fetched, no age yet)\n\n# The first request will be a miss,\n# the second should be a hit:\ncurl -I https://cdn.example.com/image.jpg\n# x-cache: Hit from cloudfront\n# age: 5 (cached for 5 seconds)\n\n# Simulate a cold request with no-cache:\ncurl -s -o /dev/null -w \"Time: %{time_total}s \\n\" \\\n  -H \"Cache-Control: no-cache\" \\\n  https://cdn.example.com/image.jpg",
      "description": "Using curl to observe cache miss headers and measure the difference between first and second request."
    },
    {
      "title": "Cache Miss Analysis from CDN Logs",
      "useCase": "Parsing logs to understand misses.",
      "code": "# CloudFront log format (tab-separated)\n# Fields: date time x-edge-location sc-bytes c-ip cs-method\n#         cs-host cs-uri-stem sc-status cs-referer\n#         cs-user-agent cs-uri-query cs-cookie\n#         x-edge-result-type x-edge-request-id\n#         x-host-header cs-protocol cs-bytes\n#         time-taken x-forwarded-for\n\n# x-edge-result-type = Hit, Miss, RefreshHit,\n#                      Redirect, ClientError, ServerError\n\n# Parse miss URLs from CloudFront logs\nGet-Content cloudfront.log |\n  Where-Object { $_ -match \"\\tMiss\\t\" } |\n  ForEach-Object { ($_ -split \"\\t\")[7] } |\n  Sort-Object | Get-Unique | Select-Object -First 10\n\n# Top 10 most frequently missed URLs\nGet-Content cloudfront.log |\n  Where-Object { $_ -match \"\\tMiss\\t\" } |\n  ForEach-Object { ($_ -split \"\\t\")[7] } |\n  Group-Object | Sort-Object Count -Descending |\n  Select-Object -First 10",
      "description": "Parsing CloudFront log format to identify most frequently missed URLs."
    },
    {
      "title": "Cache Warming Script",
      "useCase": "Pre-fetch content to avoid cold starts.",
      "code": "#!/usr/bin/env node\n// Cache warming script\n// Run after deployment to pre-fill CDN cache\n\nconst https = require(\"https\");\n\nconst urlsToWarm = [\n  \"https://cdn.example.com/css/app.css\",\n  \"https://cdn.example.com/js/bundle.js\",\n  \"https://cdn.example.com/img/hero.webp\",\n  \"https://cdn.example.com/fonts/inter.woff2\"\n];\n\nasync function warmUrl(url) {\n  return new Promise((resolve, reject) => {\n    const start = Date.now();\n    https.get(url, (res) => {\n      let data = \"\";\n      res.on(\"data\", chunk => data += chunk);\n      res.on(\"end\", () => {\n        const ms = Date.now() - start;\n        const cache = res.headers[\"x-cache\"];\n        console.log(`${url} -> ${cache} (${ms}ms, ${data.length} bytes)`);\n        resolve({ url, cache, ms });\n      });\n    });\n  });\n}\n\n(async () => {\n  console.log(`Warming ${urlsToWarm.length} URLs...`);\n  const results = await Promise.all(urlsToWarm.map(warmUrl));\n  const misses = results.filter(r => r.cache?.includes(\"Miss\"));\n  console.log(`Done. ${misses.length} initial misses (now cached).`);\n})();",
      "description": "Node.js cache warming script that pre-fetches assets to populate CDN cache after deployment."
    },
    {
      "title": "Understanding TTL-Based Cache Miss Flow",
      "useCase": "How TTL expiration triggers misses.",
      "code": "# Timeline of cache life:\n\n# T=0s: User A requests /data.json\n#        Cache MISS -> fetch from origin\n#        Cache-Control: max-age=3600\n#        Stored in edge for 1 hour\n\n# T=5s: User B requests /data.json\n#        Cache HIT -> served from edge\n#        Age: 5\n\n# T=3600s: Cache expires\n#         User C requests /data.json\n#         Cache MISS (stale) -> revalidate or refetch\n#         If origin returns 304 Not Modified,\n#           cache refreshes TTL (soft miss)\n#         If origin returns 200,\n#           cache replaces content (hard miss)\n\n# T=3601s: User D requests /data.json\n#        Cache HIT (fresh TTL)",
      "description": "Timeline showing how TTL expiration causes cache misses and how the cache refreshes."
    },
    {
      "title": "Preventing Cache Misses with Service Workers",
      "useCase": "Cache-first strategy in SW.",
      "code": "// Service Worker with cache-first strategy\n// Prevents CDN cache misses from affecting UX\n\nself.addEventListener(\"fetch\", (event) => {\n  event.respondWith(cacheFirst(event.request));\n});\n\nasync function cacheFirst(request) {\n  const cache = await caches.open(\"cdn-cache-v1\");\n  const cached = await cache.match(request);\n\n  if (cached) {\n    // Cache hit at browser level too\n    return cached;\n  }\n\n  try {\n    const response = await fetch(request);\n    if (response.status === 200) {\n      cache.put(request, response.clone());\n    }\n    return response;\n  } catch (err) {\n    // Even if CDN misses and fails,\n    // we serve stale cache if available\n    return cached || new Response(\"Offline\", { status: 503 });\n  }\n}",
      "description": "Service Worker cache-first strategy as an additional layer to handle CDN cache misses gracefully."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a cache miss?",
      "options": [
        "Content served from cache",
        "Content not in cache, fetched from origin",
        "Cache invalidation",
        "Cache memory full"
      ],
      "answer": 1,
      "explanation": "A cache miss requires fetching content from the origin."
    },
    {
      "question": "What is a common cause of cache misses?",
      "options": [
        "Very long TTL",
        "First request (cold cache)",
        "High cache hit ratio",
        "Small file size"
      ],
      "answer": 1,
      "explanation": "First requests always cause a cache miss (cold start)."
    },
    {
      "question": "What is the latency difference between hit and miss?",
      "options": [
        "Same latency",
        "Hit is 10-50x faster",
        "Miss is faster",
        "Both vary equally"
      ],
      "answer": 1,
      "explanation": "Cache hits (1-10ms) are 10-50x faster than cache misses (50-500ms)."
    },
    {
      "question": "What is cache eviction?",
      "options": [
        "Adding content to cache",
        "Removing old content to free space",
        "Increasing TTL",
        "Enabling compression"
      ],
      "answer": 1,
      "explanation": "Cache eviction removes less popular content when storage is full."
    },
    {
      "question": "How can cache warming help?",
      "options": [
        "Slows down the cache",
        "Pre-fetches content to avoid cold starts",
        "Reduces TTL",
        "Encrypts cached content"
      ],
      "answer": 1,
      "explanation": "Cache warming pre-fetches content so real users never experience a cold cache miss."
    },
    {
      "question": "What header shows the content is a cache miss?",
      "options": [
        "x-cache: Hit",
        "x-cache: Miss",
        "Cache-Control: private",
        "Content-Encoding: gzip"
      ],
      "answer": 1,
      "explanation": "Headers like x-cache: Miss or CF-Cache-Status: MISS indicate a cache miss."
    }
  ]
};
