const e={id:"cdn-ttl",title:"TTL (Time To Live)",difficulty:"beginner",estimatedMinutes:15,tldr:["TTL (Time To Live) defines how long a CDN edge server should keep cached content before considering it stale and re-fetching from the origin.","TTL is set via the Cache-Control max-age directive (in seconds) from the origin server. Example: max-age=3600 means cache for 1 hour.","Longer TTLs improve cache hit ratios and reduce origin load but risk serving stale content. Shorter TTLs ensure freshness but reduce cache efficiency.","CDNs typically have configurable minimum, default, and maximum TTL settings that override or constrain the origin-provided TTL."],laymanDefinition:"TTL is like the expiration date on a yogurt container. The manufacturer (origin) stamps a best-before date (TTL). The store (CDN edge) keeps the yogurt on the shelf until that date. After the date passes, the store throws it out and gets fresh stock from the warehouse. If the date is far in the future (long TTL), the store checks less often. If it is close (short TTL), the store checks frequently for fresher stock.",deepDive:[{heading:"How TTL Works in CDNs",text:"When the origin responds with Cache-Control: max-age=3600, the CDN stores the content and sets a timer for 3600 seconds. For subsequent requests within that window, the content is served from cache (HIT). After 3600 seconds, the content is stale and the CDN re-fetches from origin on the next request. The CDN may also have MinTTL and MaxTTL boundaries."},{heading:"Default vs Min vs Max TTL",text:"CDNs like CloudFront have three settings: Minimum TTL (MinTTL): shortest time to cache regardless of origin header. Default TTL: used when origin doesn\\'t set max-age. Maximum TTL (MaxTTL): longest time to cache regardless of origin header. These create boundaries: final TTL = clamp(origin_max_age, MinTTL, MaxTTL)."},{heading:"Choosing TTL Values",text:"Static versioned assets (style.abc123.css): 1 year (31536000 seconds) with immutable. Static unversioned: 1-30 days. Blog posts: 1-7 days. News articles: minutes to hours. API responses: 0-60 seconds. HTML pages: 0-300 seconds. The Pareto principle applies — 80% of TTL benefit comes from setting long TTLs on the 20% of content that is most cacheable."},{heading:"TTL and Content Freshness",text:'Trade-off: longer TTL = better performance, worse freshness. For a blog, 1-hour TTL means some readers may see a 1-hour-old page after an edit. For stock prices, a 1-second TTL is too stale. Solution: separate cacheable and non-cacheable content. Use s-maxage for different CDN vs browser TTLs. Use versioned filenames to effectively get "infinite" TTL.'},{heading:"TTL and Cache Invalidation",text:"Long TTLs mean content stays cached longer — when you need to update content, you must either wait for TTL expiry or use cache invalidation. Versioned filenames let you use infinite TTL (1 year) without invalidation issues — old filename becomes unreferenced, new filename gets its own cache. This is the ideal approach for static assets."}],interviewAnswer:"TTL defines how long CDNs cache content. Longer TTLs = better performance but potentially stale content. Use versioned filenames for infinite TTL on static assets. Set shorter TTLs for dynamic content. CDNs clamp origin TTLs with Min/Max TTL settings. Balance freshness and performance based on content type.",interviewQuestions:[{question:"What is TTL in CDN context?",answer:"Time To Live — how long a CDN caches content before considering it stale and re-fetching from origin."},{question:"How is TTL set?",answer:"Via the Cache-Control: max-age=<seconds> response header from the origin server."},{question:"What happens when TTL expires?",answer:"The cached content becomes stale. The next request triggers a re-fetch from the origin (cache miss)."},{question:"What are MinTTL, DefaultTTL, and MaxTTL?",answer:"CDN-imposed boundaries that override or constrain the origin-provided TTL within these limits."},{question:"What TTL should you use for versioned static assets?",answer:"1 year (31536000 seconds) with the immutable directive."},{question:"What is the trade-off with long TTLs?",answer:"Better cache hit ratio and performance vs. serving potentially stale content."},{question:"How do versioned filenames relate to TTL?",answer:"They allow effectively infinite TTL because the old filename is never requested again when content changes."},{question:"What TTL is appropriate for HTML pages?",answer:"0-300 seconds (short) or no-cache with must-revalidate. HTML changes frequently and needs freshness."},{question:"What TTL is appropriate for API responses?",answer:"Depends on the data. Stock prices: 0 seconds. Weather: 300 seconds. Blog posts: 3600 seconds."},{question:"What is the default TTL if no max-age is set?",answer:"CDN provider-specific. CloudFront: 24 hours. Cloudflare: varies. Nginx proxy: none (no caching by default)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">TTL (Time To Live)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin Response</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">max-age=3600</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN Edge</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">TTL Timer: 3600s</text><line x1="290" y1="48" x2="320" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="330" y="35" width="140" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="400" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache HIT</text><text x="400" y="54" text-anchor="middle" font-size="9" fill="#ddd">While TTL valid</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">TTL Expired</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">3600s elapsed</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="130" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="225" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stale Content</text><text x="225" y="89" text-anchor="middle" font-size="9" fill="#ddd">Re-fetch from origin</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Versioned URLs</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">Infinite TTL effect</text><rect x="160" y="100" width="130" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="225" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">No Invalidation</text><text x="225" y="119" text-anchor="middle" font-size="9" fill="#ddd">Old URL unused</text><text x="240" y="185" font-size="9" fill="#666" text-anchor="middle">TTL (Time To Live): How long content is cached bef</text><text x="240" y="197" font-size="9" fill="#666" text-anchor="middle">ore re-fetching. Longer = better performance, but </text><text x="240" y="209" font-size="9" fill="#666" text-anchor="middle">potentially stale.</text></svg>',codeExamples:[{title:"Setting TTL via Cache-Control on Origin",useCase:"Configuring TTL values.",code:`# Different TTL configurations for different needs

# Cache for 1 hour:
# Cache-Control: public, max-age=3600

# Cache for 24 hours:
# Cache-Control: public, max-age=86400

# Cache for 1 year (static versioned assets):
# Cache-Control: public, max-age=31536000, immutable

# Short cache with revalidation:
# Cache-Control: public, max-age=0, must-revalidate

# CDN caches longer than browser:
# Cache-Control: public, max-age=3600, s-maxage=86400
# Browser: 1 hour, CDN: 1 day

# Stale while revalidate pattern:
# Cache-Control: public, max-age=60,
#   stale-while-revalidate=86400`,description:"Common TTL value configurations for different content types and caching strategies."},{title:"CloudFront TTL Configuration",useCase:"Setting Min/Default/Max TTL in CloudFront.",code:`# CloudFront cache behavior TTL settings
# These override origin Cache-Control headers:

# Minimum TTL: 0 seconds
# Respect origin max-age as-is, down to 0

# Default TTL: 86400 seconds (24 hours)
# Used when origin does NOT send max-age
# If origin sends max-age, that takes precedence

# Maximum TTL: 31536000 seconds (1 year)
# Caps origin max-age to 1 year max
# Even if origin sends max-age=99999999,
# CloudFront will only cache for 1 year

# CLI command to configure:
aws cloudfront update-distribution \\
  --id E123456789ABCD \\
  --default-cache-behavior \\
    "MinTTL=0,DefaultTTL=3600,MaxTTL=31536000"`,description:"CloudFront TTL configuration showing Min, Default, and Max TTL boundaries."},{title:"TTL Debugging with Curl",useCase:"Inspecting TTL-related headers.",code:`# Check current TTL and cache age
curl -I https://cdn.example.com/image.jpg

# Key headers for TTL analysis:
#
# cache-control: max-age=3600
#   Total TTL set by origin = 3600 seconds
#
# age: 1234
#   Content has been cached for 1234 seconds
#   Remaining TTL = 3600 - 1234 = 2366 seconds
#
# x-cache: Hit from cloudfront
#   It is a cache hit (within TTL window)
#
# Calculate when cache will expire:
# Expires = Date when max-age was set + max-age
# Or check "expires" header directly`,description:"Using curl headers to analyze TTL status and remaining cache time."},{title:"TTL Strategy by Content Type",useCase:"Recommended TTL values for different types.",code:`// Recommended TTL strategy by content type
const ttlConfig = {
  "versioned-assets": {
    // style.abc123.css, main.xyz789.js
    ttl: 31536000, // 1 year
    immutable: true,
    reason: "Content never changes on same URL"
  },
  "unversioned-assets": {
    // logo.png, favicon.ico
    ttl: 2592000, // 30 days
    immutable: false,
    reason: "Rarely changes, long cache OK"
  },
  "blog-posts": {
    // /blog/hello-world
    ttl: 3600, // 1 hour
    immutable: false,
    reason: "May be edited, balance freshness"
  },
  "api-public-data": {
    // /api/products, /api/posts
    ttl: 60, // 1 minute
    immutable: false,
    reason: "Frequently updated, CDN cache only"
  },
  "api-user-data": {
    // /api/user/profile
    ttl: 0, // never
    private: true,
    reason: "User-specific, never cache on CDN"
  }
};`,description:"JavaScript object showing recommended TTL strategy for different content categories."},{title:"Nginx Proxy Cache TTL Configuration",useCase:"Server-side TTL settings.",code:`proxy_cache_path /var/cache/nginx levels=1:2
  keys_zone=mycache:10m max_size=10g
  inactive=60m use_temp_path=off;

server {
  location / {
    proxy_cache mycache;

    # Override origin TTL with proxy_cache_valid
    proxy_cache_valid 200 302 60m;  # 1 hour
    proxy_cache_valid 404 1m;        # 1 minute
    proxy_cache_valid any 10m;       # default 10 min

    # Ignore origin Cache-Control
    proxy_ignore_headers Cache-Control Expires;

    # Use custom cache key with TTL consideration
    proxy_cache_key "$scheme$host$uri";

    proxy_pass http://origin:8080;
  }
}`,description:"Nginx proxy cache TTL configuration with proxy_cache_valid overriding origin headers."}],mcqQuestions:[{question:"What does TTL stand for?",options:["Transfer Time Limit","Time To Live","Total Transfer Length","Time To Load"],answer:1,explanation:"TTL = Time To Live — how long content is cached."},{question:"How is TTL typically set?",options:["DNS configuration","Cache-Control: max-age header","Server port setting","SSL certificate"],answer:1,explanation:"TTL is set via the Cache-Control max-age header in seconds."},{question:"What happens when TTL expires?",options:["Content is deleted from disk","Content becomes stale, next request re-fetches","Server restarts","Cache size doubles"],answer:1,explanation:"After TTL expiry, the next request triggers a cache miss and re-fetch from origin."},{question:"What TTL should versioned assets use?",options:["1 hour","1 day","1 year with immutable","0 seconds"],answer:2,explanation:"Versioned assets should use 1 year TTL with immutable for optimal caching."},{question:"What does MinTTL do in CloudFront?",options:["Sets minimum cache duration regardless of origin headers","Sets maximum cache duration","Default TTL when origin has none","Disables caching"],answer:0,explanation:"MinTTL is the minimum time CloudFront caches content, overriding shorter origin TTLs."},{question:"What is the trade-off with longer TTL?",options:["Better performance vs. potential stale content","More origin load vs. fresh content","Lower CHR vs. faster updates","More cost vs. better performance"],answer:0,explanation:"Longer TTL improves performance but risks serving stale content to users."}]};export{e as cdn_ttl};
