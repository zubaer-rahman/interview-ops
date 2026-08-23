const e={id:"cdn-edge-servers",title:"Edge Servers",difficulty:"beginner",estimatedMinutes:15,tldr:["Edge servers are the distributed cache nodes in a CDN that store and serve content to end users from locations close to them.","They are deployed at Points of Presence (PoPs) worldwide — physical data centers with compute, storage, and networking equipment.","Edge servers handle: content caching, SSL termination, request routing, compression, image optimization, and security filtering.","Modern edge servers also support serverless computing (edge functions/workers) allowing code execution at the edge."],laymanDefinition:"Edge servers are like local food trucks stationed in different neighborhoods. Instead of everyone driving to the central restaurant (origin server), each neighborhood has its own truck stocked with popular menu items. If your neighborhood truck doesn't have what you want, it calls the central kitchen to get it and adds it to its menu for next time.",deepDive:[{heading:"Edge Server Architecture",text:"Each edge server runs a caching engine (Varnish, Nginx, Apache Traffic Server) configured with origin addresses and caching rules. They maintain a local disk/memory cache, connection pools to origins, and health-checking mechanisms. Modern edge servers use SSD storage for fast content retrieval."},{heading:"Request Flow Through Edge",text:"1. User DNS lookup resolves to nearest edge PoP. 2. Edge server receives HTTP request. 3. Checks local cache. 4. Cache hit: serve immediately. 5. Cache miss: forward to origin (or parent cache tier), cache response, serve to user. 6. Response headers include x-cache: HIT/MISS and Age header."},{heading:"Edge Cache Tiering",text:"Multi-tier caching: edge (L1) to regional (L2) to origin. L1 edge servers cache popular content. Misses go to L2 regional cache (larger, serves a region). L2 misses go to origin. This reduces origin load while keeping edge storage efficient. CloudFront, Akamai, and Fastly all use multi-tier architectures."},{heading:"Edge Compute (Workers/Functions)",text:"CDNs like Cloudflare Workers, Fastly Compute@Edge, and CloudFront Functions allow running JavaScript/WASM at the edge. Use cases: A/B testing, geo-based redirects, authentication checks, header modification, API aggregation — all served from the edge without touching the origin."},{heading:"Edge Server Hardware",text:"Typical edge servers: high-core-count CPUs, 256GB-1TB RAM, multiple NVMe SSDs (2-8TB), 10-100Gbps network interfaces. They sit in carrier-neutral data centers with direct peering to ISPs. Power redundancy (dual power feeds), multiple network uplinks, and hardware security modules (HSMs) for key storage."}],interviewAnswer:"Edge servers are the distributed nodes in a CDN that cache and serve content from locations close to end users. They handle caching, SSL, compression, security filtering, and increasingly support serverless compute workloads at the network edge.",interviewQuestions:[{question:"What is an edge server?",answer:"A distributed cache node in a CDN deployed at Points of Presence worldwide that serves content to nearby users."},{question:"Where are edge servers located?",answer:"At Points of Presence (PoPs) — physical data centers distributed globally."},{question:"What is multi-tier caching?",answer:"A hierarchical cache architecture: edge (L1) to regional (L2) to origin. Reduces origin load while keeping edge storage efficient."},{question:"What is edge compute?",answer:"Running code (JavaScript/WASM) on edge servers for A/B testing, geo-redirects, authentication, and API aggregation."},{question:"What is a cache hit vs miss at the edge?",answer:"Hit: edge server has content cached and serves it directly. Miss: edge must fetch from origin or parent cache tier."},{question:"What are common caching engines used on edge servers?",answer:"Varnish Cache, Nginx, Apache Traffic Server, and custom proprietary engines."},{question:"What is the Age header?",answer:"Indicates how many seconds the cached response has been stored on the edge server since it was fetched from the origin."},{question:"What hardware do edge servers use?",answer:"High-core CPUs, 256GB-1TB RAM, NVMe SSDs, 10-100Gbps networking, redundant power and network."},{question:"What is origin shielding?",answer:"A dedicated edge tier that aggregates requests to the origin, preventing cache stampedes."},{question:"How do edge servers handle SSL?",answer:"They terminate SSL/TLS connections, decrypt requests, and re-encrypt when forwarding to origin (or use HTTPS throughout)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Edge Servers</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User Request</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">DNS to nearest</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="140" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="230" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge Server (L1)</text><text x="230" y="54" text-anchor="middle" font-size="9" fill="#ddd">Check cache</text><line x1="300" y1="48" x2="330" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="310" y1="60" x2="310" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="340" y="35" width="140" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="410" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache Hit?</text><text x="410" y="54" text-anchor="middle" font-size="9" fill="#ddd">Serve to user</text><rect x="10" y="75" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache Miss</text><text x="65" y="94" text-anchor="middle" font-size="9" fill="#ddd">Fetch from L2</text><line x1="120" y1="88" x2="150" y2="88" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="75" width="140" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="230" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Regional Cache (L2)</text><text x="230" y="94" text-anchor="middle" font-size="9" fill="#ddd">Larger cache pool</text><line x1="300" y1="88" x2="330" y2="88" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="340" y="75" width="140" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="410" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin Server</text><text x="410" y="94" text-anchor="middle" font-size="9" fill="#ddd">Source of truth</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">Edge Servers: Distributed cache nodes at PoPs worl</text><text x="240" y="192" font-size="9" fill="#666" text-anchor="middle">dwide that serve content from locations close to u</text><text x="240" y="204" font-size="9" fill="#666" text-anchor="middle">sers.</text></svg>',codeExamples:[{title:"Edge Server Cache Status Check",useCase:"Using curl to see CDN edge behavior.",code:`# Check if a CDN is being used and cache status
curl -I https://cdn.example.com/style.css

# Look for these headers:
# x-cache: HIT from cloudfront
# x-cache: Miss from cloudfront
# CF-Cache-Status: HIT
# CF-Cache-Status: MISS
# CF-Cache-Status: DYNAMIC
# Age: 1234 (seconds since cached)
# x-served-by: cache-jfk1234`,description:"Use curl to check cache status headers from edge servers."},{title:"CloudFront Regional Edge Caches",useCase:"Configuring multi-tier caching.",code:`# By default CloudFront uses regional edge caches
# They are automatically enabled

# Regional caches sit between edge locations
# and your origin server

# When an edge location misses:
# 1. Edge fetches from regional cache
# 2. Regional cache serves if it has content
# 3. Regional cache fetches from origin if needed

# Benefits:
# - Reduces load on origin server
# - Improves cache hit ratio
# - Lowers egress costs
# - No additional configuration needed`,description:"CloudFront automatically uses regional edge caches as a middle tier between edge locations and origin."},{title:"Edge Worker (Cloudflare Workers)",useCase:"Running code at the CDN edge.",code:`// Cloudflare Worker - runs on every edge server
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const country = request.cf.country;

    // Geo-based redirect at edge
    if (country === "GB" &&
        url.pathname.startsWith("/us/")) {
      return Response.redirect(
        "https://uk.example.com" + url.pathname.replace("/us/", "/uk/")
      );
    }

    // Cache API response at edge
    const cache = caches.default;
    let response = await cache.match(request);
    if (!response) {
      response = await fetch(request);
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set("Cache-Control", "public, max-age=3600");
        response = new Response(response.body, {
          headers, status: response.status
        });
        ctx.waitUntil(cache.put(request, response.clone()));
      }
    }
    return response;
  }
}`,description:"Cloudflare Worker running geolocation logic at the edge server without hitting the origin."},{title:"Varnish Edge Cache Configuration",useCase:"Open-source edge caching engine.",code:`# Varnish Cache Configuration (default.vcl)
vcl 4.1;

backend origin {
  .host = "origin.example.com";
  .port = "8080";
}

sub vcl_recv {
  # Remove cookies for static files
  if (req.url ~ "\\.(css|js|png|jpg|webp|woff2)$") {
    unset req.http.Cookie;
  }

  # Cache GET and HEAD only
  if (req.method != "GET" && req.method != "HEAD") {
    return (pass);
  }
}

sub vcl_backend_response {
  # Set longer TTL for static assets
  if (bereq.url ~ "\\.(css|js|png|jpg)$") {
    set beresp.ttl = 24h;
  }
}

sub vcl_deliver {
  # Add cache status header
  if (obj.hits > 0) {
    set resp.http.X-Cache = "HIT";
  } else {
    set resp.http.X-Cache = "MISS";
  }
}`,description:"Varnish configuration for edge server caching with cache status headers."},{title:"Fastly Edge Dictionary",useCase:"Edge data store for lookups.",code:`# Fastly VCL using edge dictionary for config

# Create a dictionary in Fastly UI:
# Name: redirect_map
# Items:
#   /old-page -> /new-page
#   /about -> /company/about
#   /contact -> /get-in-touch

sub vcl_recv {
  # Look up redirect in edge dictionary
  declare local var.target STRING;
  set var.target = table.lookup(
    redirect_map, req.url.path, ""
  );

  if (var.target != "") {
    # Perform redirect at edge - no origin hit
    error 750 var.target;
  }
}

sub vcl_error {
  if (obj.status == 750) {
    set obj.status = 302;
    set obj.http.Location = obj.response;
    return (deliver);
  }
}`,description:"Fastly edge dictionaries allow low-latency data lookups at the edge server."}],mcqQuestions:[{question:"What is an edge server?",options:["A database server","A distributed CDN cache node near users","A DNS server","An email server"],answer:1,explanation:"Edge servers are CDN cache nodes located near end users."},{question:"Where are edge servers deployed?",options:["In the origin data center","At Points of Presence worldwide","On user devices","In a single location"],answer:1,explanation:"Edge servers are deployed at PoPs worldwide."},{question:"What is multi-tier caching?",options:["Multiple cache types","A hierarchical cache: edge to regional to origin","Caching multiple file types","Parallel cache servers"],answer:1,explanation:"Multi-tier caching uses a hierarchy of edge (L1) and regional (L2) caches before the origin."},{question:"What is edge compute?",options:["Database queries at the edge","Running code on edge servers (workers/functions)","Caching compute results","Load balancing"],answer:1,explanation:"Edge compute allows running code like Cloudflare Workers on edge servers."},{question:"What header indicates a cache hit?",options:["Cache-Control","Age","X-Cache: HIT","Content-Length"],answer:2,explanation:"Headers like X-Cache: HIT or CF-Cache-Status: HIT show a cache hit at the edge."},{question:"What is origin shielding?",options:["Encrypting origin data","A cache tier that aggregates requests to origin","Firewall for origin","Backup origin server"],answer:1,explanation:"Origin shielding uses a dedicated cache tier to aggregate requests and protect the origin."}]};export{e as cdn_edge_servers};
