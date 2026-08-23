const e={id:"cdn-cache-miss",title:"Cache Miss",difficulty:"beginner",estimatedMinutes:10,tldr:["A cache miss occurs when the requested content is not found in the CDN edge server's cache, requiring the server to fetch it from the origin.","Cache misses result in higher latency because the request must travel from the edge to the origin (or parent cache tier) before the content can be served.","Cache misses are expected on first requests, after cache expiration, or after cache invalidation. The response is then cached for subsequent requests.","Minimizing cache misses is key to CDN performance. Strategies include longer TTLs, cache warming, and optimizing cache key configuration."],laymanDefinition:"A cache miss is like going to your neighborhood store for milk and finding the dairy section empty. The clerk has to call the central warehouse and have them deliver it. You wait a few minutes. The good news: next time you come for milk, it will be in stock because the store learned to keep it on hand.",deepDive:[{heading:"Why Cache Misses Happen",text:"First request (cold cache): nobody has requested this content before. TTL expired: the cached content\\'s time-to-live has elapsed. Cache eviction: the edge server ran out of storage and removed less popular content. Cache invalidation: content was explicitly purged. Cache key mismatch: URL variations that don\\'t hit the same cache entry."},{heading:"Cache Miss Penalty",text:"A cache miss adds significant latency: edge to origin round trip. For a US user hitting a European origin, this could add 100-300ms. The miss penalty includes DNS resolution of origin, TCP connection, SSL handshake, origin processing time, and response transfer. The cache fill response is then stored for future hits."},{heading:"Cold Start / First Request",text:"The first user to request a piece of content after deployment experiences a cache miss (cold start). This user sees higher latency. Cache warming pre-fetches content to avoid cold starts for real users. For new deployments, consider pre-loading critical assets in the CDN cache."},{heading:"Cache Miss vs Cache Hit Performance",text:"Cache hit: response in 1-10ms (from edge server memory/SSD). Cache miss: response in 50-500ms (requires origin round trip). The difference is dramatic — a cache miss can be 10-50x slower. This is why maximizing cache hit ratio is critical for CDN performance."},{heading:"Monitoring Cache Misses",text:"Track miss rate, miss latency (time to fill from origin), top missed URLs, miss reasons (first byte, expired, evicted). High miss rate on popular content indicates configuration problems. CDN dashboards show miss breakdowns. Alert on spikes in cache miss rate that indicate issues."}],interviewAnswer:"A cache miss means the CDN had to fetch content from the origin, adding latency. Misses happen on first requests, after TTL expiry, or after invalidation. Minimize misses with optimal TTLs, cache warming, and proper cache key configuration. Monitor miss rates to identify optimization opportunities.",interviewQuestions:[{question:"What is a cache miss?",answer:"When requested content is not in the CDN edge cache and must be fetched from the origin server."},{question:"Why do cache misses increase latency?",answer:"Because the request must travel from the edge server to the origin, adding round-trip time."},{question:"What are common causes of cache misses?",answer:"First request (cold cache), TTL expiry, cache eviction, invalidation, and cache key mismatch."},{question:"What is a cold start in CDN caching?",answer:"The first user request after content is deployed — the cache is empty, so it is always a miss."},{question:"What is the typical latency difference between hit and miss?",answer:"Cache hit: 1-10ms. Cache miss: 50-500ms (10-50x slower)."},{question:"How can you reduce cache misses?",answer:"Longer TTLs, cache warming, optimizing cache keys, larger cache allocations, and tiered caching."},{question:"What is cache eviction?",answer:"When the edge server removes older or less popular content to make room for new content."},{question:"What does the x-cache: Miss header mean?",answer:"The CDN edge server did not have the content cached and had to fetch it from the origin or parent cache."},{question:"How does cache key configuration affect misses?",answer:"Including query string parameters in the cache key creates separate entries for each variation, potentially causing misses."},{question:"What is cache fill?",answer:"The process of fetching content from the origin and storing it in the edge cache after a cache miss."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Cache Miss</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User Request</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Resource URL</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="120" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="220" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge Cache</text><text x="220" y="54" text-anchor="middle" font-size="9" fill="#ddd">Check cache</text><line x1="280" y1="48" x2="310" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="320" y="35" width="140" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache MISS!</text><text x="390" y="54" text-anchor="middle" font-size="9" fill="#ddd">Fetch from origin</text><line x1="320" y1="60" x2="320" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="310" y1="65" x2="280" y2="65" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="75" width="120" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="220" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fetch from Origin</text><text x="220" y="94" text-anchor="middle" font-size="9" fill="#ddd">Requires round trip</text><line x1="280" y1="88" x2="310" y2="88" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="320" y="75" width="140" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="390" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Store in Cache</text><text x="390" y="94" text-anchor="middle" font-size="9" fill="#ddd">Cache fill</text><line x1="410" y1="88" x2="440" y2="88" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="110" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Serve to User</text><text x="65" y="118" text-anchor="middle" font-size="9" fill="#ddd">Higher latency (50-5</text><text x="65" y="129" text-anchor="middle" font-size="9" fill="#ddd">00ms)</text><text x="240" y="190" font-size="9" fill="#666" text-anchor="middle">Cache Miss: Content not in edge cache. Must be fet</text><text x="240" y="202" font-size="9" fill="#666" text-anchor="middle">ched from origin, increasing latency. Subsequent r</text><text x="240" y="214" font-size="9" fill="#666" text-anchor="middle">equests will hit.</text></svg>',codeExamples:[{title:"Identifying Cache Misses with Curl",useCase:"Check cache miss headers.",code:`# Force a cache miss to see the full flow
curl -I https://cdn.example.com/image.jpg

# Look for miss indicators:
# x-cache: Miss from cloudfront
# cf-cache-status: MISS
# x-cache-status: MISS
# age: 0 (just fetched, no age yet)

# The first request will be a miss,
# the second should be a hit:
curl -I https://cdn.example.com/image.jpg
# x-cache: Hit from cloudfront
# age: 5 (cached for 5 seconds)

# Simulate a cold request with no-cache:
curl -s -o /dev/null -w "Time: %{time_total}s \\n" \\
  -H "Cache-Control: no-cache" \\
  https://cdn.example.com/image.jpg`,description:"Using curl to observe cache miss headers and measure the difference between first and second request."},{title:"Cache Miss Analysis from CDN Logs",useCase:"Parsing logs to understand misses.",code:`# CloudFront log format (tab-separated)
# Fields: date time x-edge-location sc-bytes c-ip cs-method
#         cs-host cs-uri-stem sc-status cs-referer
#         cs-user-agent cs-uri-query cs-cookie
#         x-edge-result-type x-edge-request-id
#         x-host-header cs-protocol cs-bytes
#         time-taken x-forwarded-for

# x-edge-result-type = Hit, Miss, RefreshHit,
#                      Redirect, ClientError, ServerError

# Parse miss URLs from CloudFront logs
Get-Content cloudfront.log |
  Where-Object { $_ -match "\\tMiss\\t" } |
  ForEach-Object { ($_ -split "\\t")[7] } |
  Sort-Object | Get-Unique | Select-Object -First 10

# Top 10 most frequently missed URLs
Get-Content cloudfront.log |
  Where-Object { $_ -match "\\tMiss\\t" } |
  ForEach-Object { ($_ -split "\\t")[7] } |
  Group-Object | Sort-Object Count -Descending |
  Select-Object -First 10`,description:"Parsing CloudFront log format to identify most frequently missed URLs."},{title:"Cache Warming Script",useCase:"Pre-fetch content to avoid cold starts.",code:`#!/usr/bin/env node
// Cache warming script
// Run after deployment to pre-fill CDN cache

const https = require("https");

const urlsToWarm = [
  "https://cdn.example.com/css/app.css",
  "https://cdn.example.com/js/bundle.js",
  "https://cdn.example.com/img/hero.webp",
  "https://cdn.example.com/fonts/inter.woff2"
];

async function warmUrl(url) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        const ms = Date.now() - start;
        const cache = res.headers["x-cache"];
        console.log(\`\${url} -> \${cache} (\${ms}ms, \${data.length} bytes)\`);
        resolve({ url, cache, ms });
      });
    });
  });
}

(async () => {
  console.log(\`Warming \${urlsToWarm.length} URLs...\`);
  const results = await Promise.all(urlsToWarm.map(warmUrl));
  const misses = results.filter(r => r.cache?.includes("Miss"));
  console.log(\`Done. \${misses.length} initial misses (now cached).\`);
})();`,description:"Node.js cache warming script that pre-fetches assets to populate CDN cache after deployment."},{title:"Understanding TTL-Based Cache Miss Flow",useCase:"How TTL expiration triggers misses.",code:`# Timeline of cache life:

# T=0s: User A requests /data.json
#        Cache MISS -> fetch from origin
#        Cache-Control: max-age=3600
#        Stored in edge for 1 hour

# T=5s: User B requests /data.json
#        Cache HIT -> served from edge
#        Age: 5

# T=3600s: Cache expires
#         User C requests /data.json
#         Cache MISS (stale) -> revalidate or refetch
#         If origin returns 304 Not Modified,
#           cache refreshes TTL (soft miss)
#         If origin returns 200,
#           cache replaces content (hard miss)

# T=3601s: User D requests /data.json
#        Cache HIT (fresh TTL)`,description:"Timeline showing how TTL expiration causes cache misses and how the cache refreshes."},{title:"Preventing Cache Misses with Service Workers",useCase:"Cache-first strategy in SW.",code:`// Service Worker with cache-first strategy
// Prevents CDN cache misses from affecting UX

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cache = await caches.open("cdn-cache-v1");
  const cached = await cache.match(request);

  if (cached) {
    // Cache hit at browser level too
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Even if CDN misses and fails,
    // we serve stale cache if available
    return cached || new Response("Offline", { status: 503 });
  }
}`,description:"Service Worker cache-first strategy as an additional layer to handle CDN cache misses gracefully."}],mcqQuestions:[{question:"What is a cache miss?",options:["Content served from cache","Content not in cache, fetched from origin","Cache invalidation","Cache memory full"],answer:1,explanation:"A cache miss requires fetching content from the origin."},{question:"What is a common cause of cache misses?",options:["Very long TTL","First request (cold cache)","High cache hit ratio","Small file size"],answer:1,explanation:"First requests always cause a cache miss (cold start)."},{question:"What is the latency difference between hit and miss?",options:["Same latency","Hit is 10-50x faster","Miss is faster","Both vary equally"],answer:1,explanation:"Cache hits (1-10ms) are 10-50x faster than cache misses (50-500ms)."},{question:"What is cache eviction?",options:["Adding content to cache","Removing old content to free space","Increasing TTL","Enabling compression"],answer:1,explanation:"Cache eviction removes less popular content when storage is full."},{question:"How can cache warming help?",options:["Slows down the cache","Pre-fetches content to avoid cold starts","Reduces TTL","Encrypts cached content"],answer:1,explanation:"Cache warming pre-fetches content so real users never experience a cold cache miss."},{question:"What header shows the content is a cache miss?",options:["x-cache: Hit","x-cache: Miss","Cache-Control: private","Content-Encoding: gzip"],answer:1,explanation:"Headers like x-cache: Miss or CF-Cache-Status: MISS indicate a cache miss."}]};export{e as cdn_cache_miss};
