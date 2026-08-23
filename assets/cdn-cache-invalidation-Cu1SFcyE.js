const e={id:"cdn-cache-invalidation",title:"Cache Invalidation",difficulty:"intermediate",estimatedMinutes:20,tldr:["Cache invalidation is the process of removing or updating content stored in CDN edge caches before its TTL expires.","Invalidation is needed when content changes on the origin but the CDN still serves the old cached version to users.","Methods: path-based purge (specific URLs), wildcard purge (pattern matching), tag-based invalidation (groups of content), and versioned filenames (avoid invalidation entirely).",'There is an old saying: "There are only two hard things in computer science: cache invalidation and naming things." — Phil Karlton.'],laymanDefinition:"Cache invalidation is like recalling a batch of product packaging when you realize the ingredient list has an error. You have to go to every store (edge server) and remove all the old boxes. The tricky part: you need to know which boxes are in which stores, and you must replace them before customers see outdated information.",deepDive:[{heading:"Invalidation Methods",text:'Exact path: /images/banner.jpg — invalidates one file. Wildcard: /images/* — invalidates all images. Directory: /css/ — invalidates all CSS files. Tag-based: invalidate by content tags like "v2.0-release". API-based: through CDN provider APIs. Some providers charge per invalidation path or have monthly limits.'},{heading:"Versioned Filename Strategy (Cache Busting)",text:"Instead of invalidating old cache, serve different filenames for updated content: style.abc123.css instead of style.css. The old content remains cached (no users request it). The new filename automatically gets its own cache entries. This is the most efficient approach — zero invalidation cost, zero cache miss penalty for updated content."},{heading:"CDN Invalidation Policies",text:"CloudFront: free first 1000 paths/month, $0.005/path after. Fastly: instant purge, no charge (with limits). Cloudflare: unlimited purges via API, UI, or tag. Akamai: instant invalidation or CP code-based. Varnish: PURGE HTTP method (if configured). Most CDNs propagate invalidation within seconds globally."},{heading:"Purge Propagation Time",text:"Invalidation must propagate to all edge servers worldwide. CloudFront: typically <60 seconds. Fastly: <150ms for instant purge. Cloudflare: <30 seconds. Akamai: <10 seconds. During propagation, some users may still receive the old content (eventual consistency). This is why versioned filenames are preferred."},{heading:"Tag-Based Invalidation",text:"Assign content tags during cache (e.g., Cache-Tag: v2.0, product-123). Invalidate all content with a specific tag in one API call. Useful for: invalidating all pages related to a product update, all blog posts, or all content from a deployment. Supported by: Fastly (Surrogate-Key), Cloudflare (Cache-Tag), CloudFront (tags with Lambda@Edge)."}],interviewAnswer:"Cache invalidation removes or updates cached content before TTL expires. Methods include path-based purge, wildcards, and tag-based invalidation. The best strategy is to avoid invalidation entirely by using versioned filenames, which make old cache entries unreferenced and naturally expire.",interviewQuestions:[{question:"What is cache invalidation?",answer:"The process of removing or updating content in CDN caches before its TTL expires."},{question:"Why is cache invalidation difficult?",answer:"Because cached content is distributed across hundreds of edge servers worldwide and must be coordinated."},{question:"What is the best alternative to cache invalidation?",answer:"Versioned filenames (cache busting) — serve different filenames for updated content, avoiding the need to invalidate."},{question:"How does tag-based invalidation work?",answer:"Assign tags to content during caching, then invalidate all content with a specific tag in one API call."},{question:"How long does propagation take?",answer:"CloudFront: ~60s, Fastly: <150ms, Cloudflare: <30s, Akamai: <10s."},{question:"What is the CloudFront invalidation cost?",answer:"First 1000 paths per month free, $0.005 per path after that."},{question:"What is the PURGE HTTP method?",answer:"A non-standard HTTP method supported by some CDNs (like Varnish and Fastly) to trigger cache invalidation."},{question:"What is eventual consistency in cache invalidation?",answer:"During propagation, some edge servers may still serve old content while others have already invalidated it."},{question:"What are Surrogate-Keys?",answer:"Fastly\\'s tag-based invalidation mechanism — set Surrogate-Key response header, then purge by key."},{question:"Can you invalidate content on Cloudflare?",answer:"Yes, via UI, API, or Cache-Tag headers. Options: purge everything, by URL, by hostname, or by tag."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Cache Invalidation</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Content Updates</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">New version deployed</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Option 1: Invalidate</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">Purge old cache paths</text><line x1="290" y1="48" x2="320" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="330" y="35" width="140" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="400" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Option 2: Versioned URLs</text><text x="400" y="54" text-anchor="middle" font-size="9" fill="#ddd">style.abc123.css</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Wildcard Purge</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">/images/*</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tag Purge</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">Cache-Tag: v2.0</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Propagation</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">Seconds globally</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="113" x2="150" y2="113" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="143" x2="150" y2="143" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="150" height="100" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="235" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache Invalidation</text><text x="235" y="131" text-anchor="middle" font-size="9" fill="#ddd">Removing stale cache before</text><text x="235" y="142" text-anchor="middle" font-size="9" fill="#ddd"> TTL. Use versioned filenam</text><text x="235" y="153" text-anchor="middle" font-size="9" fill="#ddd">es to avoid the need entire</text><text x="235" y="164" text-anchor="middle" font-size="9" fill="#ddd">ly.</text><text x="240" y="195" font-size="9" fill="#666" text-anchor="middle">Cache Invalidation: Removing cached content before</text><text x="240" y="207" font-size="9" fill="#666" text-anchor="middle"> TTL expires. Best avoided via versioned filenames</text><text x="240" y="219" font-size="9" fill="#666" text-anchor="middle">.</text></svg>',codeExamples:[{title:"CloudFront Cache Invalidation (CLI)",useCase:"Invalidating specific paths.",code:`# Invalidate specific file
aws cloudfront create-invalidation \\
  --distribution-id E123456789ABCD \\
  --paths "/css/style.css"

# Invalidate wildcard pattern
aws cloudfront create-invalidation \\
  --distribution-id E123456789ABCD \\
  --paths "/images/*" "/js/*"

# Invalidate entire distribution
aws cloudfront create-invalidation \\
  --distribution-id E123456789ABCD \\
  --paths "/*"

# Check invalidation status
aws cloudfront get-invalidation \\
  --distribution-id E123456789ABCD \\
  --id I1234567890ABCDEF`,description:"AWS CLI commands for CloudFront cache invalidation with wildcard support."},{title:"Fastly Instant Purge via API",useCase:"Fastly\\'s near-instant invalidation.",code:`# Fastly purge by URL (instant)
curl -X PURGE https://cdn.example.com/style.css \\
  -H "Fastly-Key: $FASTLY_API_TOKEN"

# Fastly purge by surrogate key (tag)
curl -X POST "https://api.fastly.com/service/$SID/purge/product-123" \\
  -H "Fastly-Key: $FASTLY_API_TOKEN"

# Fastly purge all service content
curl -X POST "https://api.fastly.com/service/$SID/purge_all" \\
  -H "Fastly-Key: $FASTLY_API_TOKEN"

# Set surrogate key in origin response:
# Surrogate-Key: product-123 product-category-456`,description:"Fastly purge API calls including URL, tag-based (surrogate key), and full purge."},{title:"Versioned Filenames with Webpack",useCase:"Automatic cache busting with build tools.",code:`// webpack.config.js
module.exports = {
  output: {
    filename: "[name].[contenthash:8].js",
    // Output: main.4a5b6c7d.js
    // Content hash changes when file content changes
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // Generates HTML with versioned script references
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // For images and fonts:
  module: {
    rules: [{
      test: /\\.(png|jpg|webp|svg)$/,
      type: "asset/resource",
      generator: {
        filename: "img/[name].[contenthash:8][ext]"
      }
    }]
  }
};

# Result: myimg.abc123.jpg
# Old: myimg.xyz789.jpg (still cached, but not used)
# New content gets new URL = automatic cache busting`,description:"Webpack configuration for automatic content-hash-based versioned filenames (cache busting)."},{title:"Cloudflare Cache Purge API",useCase:"Programmatic cache purging.",code:`# Cloudflare purge by URLs (max 30/day free)
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"files":["https://example.com/style.css",
              "https://example.com/script.js"]}'

# Cloudflare purge everything
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"purge_everything":true}'

# Cloudflare purge by tags (requires Cache-Tag header)
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"tags":["tag-v2-release"]}'`,description:"Cloudflare API cache purging by URL, everything, or tags."},{title:"Nginx Cache Purge Module",useCase:"Invalidating Nginx cache.",code:`# Nginx with ngx_cache_purge module

location ~ /purge(/.*) {
  allow 127.0.0.1;
  allow 10.0.0.0/8;
  deny all;

  proxy_cache_purge mycache "$1$is_args$args";
}

# Usage: curl -X PURGE http://cdn.local/purge/style.css
# This removes /style.css from the cache

# Or use proxy_cache_key to match:
proxy_cache_key "$scheme$host$request_uri";
proxy_cache_purge mycache "$scheme$host$1$is_args$args";

# Test:
# curl -I http://cdn.local/style.css
# X-Cache-Status: HIT
# curl -X PURGE http://cdn.local/purge/style.css
# curl -I http://cdn.local/style.css
# X-Cache-Status: MISS`,description:"Nginx cache purge module configuration for invalidating cached content."}],mcqQuestions:[{question:"What is the most efficient cache invalidation strategy?",options:["Path-based purge","Versioned filenames","Wildcard purge","Tag-based purge"],answer:1,explanation:"Versioned filenames avoid invalidation entirely — old content is never requested again."},{question:"What is the CloudFront invalidation cost?",options:["Free unlimited","First 1000 free, then $0.005/path","$0.01 per path","Free up to 10000 paths"],answer:1,explanation:"CloudFront offers 1000 free invalidations per month, then charges $0.005 per path."},{question:"Which CDN offers near-instant purge (<150ms)?",options:["CloudFront","Fastly","Cloudflare","Akamai"],answer:1,explanation:"Fastly offers near-instant purge, typically completing in under 150 milliseconds."},{question:"What are Surrogate-Keys used for?",options:["Content compression","Tag-based cache invalidation","SSL termination","Load balancing"],answer:1,explanation:"Surrogate-Keys enable tag-based invalidation in Fastly."},{question:"What is the saying about cache invalidation?",options:['"Cache is king"','"There are only two hard things in computer science: cache invalidation and naming things"','"Invalidate early"','"Never invalidate cache"'],answer:1,explanation:"Phil Karlton famously said this about the difficulty of cache invalidation."},{question:"What does a content hash-based filename prevent?",options:["Compression errors","Need for cache invalidation","SSL issues","DNS problems"],answer:1,explanation:"Content hash filenames change when content changes, so old cached versions are never requested again."}]};export{e as cdn_cache_invalidation};
