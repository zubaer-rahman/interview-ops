const e={id:"cdn-fastly",title:"Fastly",difficulty:"intermediate",estimatedMinutes:15,tldr:["Fastly is a high-performance CDN known for its programmable edge via Varnish Configuration Language (VCL) and edge compute platform (Compute@Edge).","Key features: instant cache purge (full cache in <150ms), VCL-based edge logic, Compute@Edge (Rust/JS), image optimization, real-time analytics, and DDoS protection.","Fastly's architecture is based on a modified Varnish cache, giving customers unprecedented control over request/response processing at the edge.","Fastly is preferred for dynamic content, API acceleration, and use cases requiring fine-grained edge logic control."],laymanDefinition:"Fastly is like a programmable delivery drone. While other CDNs give you preset routes and options, Fastly lets you write your own flight instructions (VCL) for every package. Want boxes to fly differently at night? Want special handling for fragile items? You can program it all yourself.",deepDive:[{heading:"VCL (Varnish Configuration Language)",text:"Fastly\\'s core differentiator. Subroutines: vcl_recv (incoming request), vcl_fetch (from origin), vcl_deliver (to client), vcl_error (error handling), vcl_hash (cache key), vcl_pass (skip cache), vcl_pipe (streaming), vcl_log (logging), vcl_synth (synthetic response). Full traffic manipulation flexibility."},{heading:"Instant Purge",text:"Cache invalidation across all edge nodes in <150 milliseconds (typically 30-50ms). Soft purge: mark stale, serve stale while fetching new. Hard purge: remove from cache immediately. Purge by URL, surrogate key (tag-based), or service-wide. Streaming purge validation."},{heading:"Compute@Edge",text:"Serverless at edge with Rust (primary), JavaScript, AssemblyScript, Go. Compiles to WebAssembly. Sub-millisecond cold starts. Access to Fastly cache. Use cases: API gateways, authentication, image processing, A/B testing. Faster than Lambda@Edge for Rust workloads."},{heading:"Image Optimization",text:"Server-side image transformation at edge. Resize, crop, format conversion (WebP, AVIF), quality adjustment, compression. Sentinels: detect optimal image format from browser Accept header. DPR handling (device pixel ratio). Real-time transformation via URL parameters."},{heading:"DDoS and Security",text:"DDoS: automatic L3/L4 mitigation, L7 rate limiting, software load balancers absorb attacks. WAF: Signal Sciences (Fastly acquired) — ML-based. TLS: custom certificates, automated renewal. Access control: IP blacklist/whitelist, basic auth at edge. Secret Store: secure key management."}],interviewAnswer:"Fastly is a programmable CDN with VCL-based edge logic, instant cache purge (<150ms), Compute@Edge (WebAssembly), image optimization, and real-time analytics. It offers deep configurability for dynamic content and API acceleration.",interviewQuestions:[{question:"What is Fastly known for?",answer:"Programmable edge with VCL, instant purge, Compute@Edge."},{question:"What is VCL?",answer:"Varnish Configuration Language — Fastly\\'s edge programming language."},{question:"How fast is Fastly\\'s cache purge?",answer:"<150ms (typically 30-50ms) across all edge nodes."},{question:"What is Compute@Edge?",answer:"Fastly\\'s serverless edge compute platform using WebAssembly (Rust, JS, Go)."},{question:"What is a surrogate key?",answer:"Tags for cache objects allowing tag-based purging."},{question:"What is soft purge?",answer:"Marking cache as stale but serving while fetching fresh content."},{question:"What is Sentinel in image optimization?",answer:"Feature detecting optimal image format from browser Accept header."},{question:"What WAF does Fastly offer?",answer:"Signal Sciences (acquired by Fastly) — ML-based WAF."},{question:"What is Fastly\\'s origin?",answer:"Former Varnish developers, founded 2011."},{question:"What is Fastly\\'s Instant Purge API?",answer:"API to purge cache by URL, key, or service in <150ms."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Fastly</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Request</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge Node</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">VCL processing</text><line x1="290" y1="48" x2="320" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="330" y="35" width="130" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="395" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Compute@Edge</text><text x="395" y="54" text-anchor="middle" font-size="9" fill="#ddd">WebAssembly</text><line x1="460" y1="48" x2="480" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="490" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="540" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin</text><text x="540" y="54" text-anchor="middle" font-size="9" fill="#ddd">Dynamic content</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">Fastly: Programmable CDN with VCL, instant purge (</text><text x="240" y="192" font-size="9" fill="#666" text-anchor="middle"><150ms), Compute@Edge (WASM), Signal Sciences WAF.</text></svg>',codeExamples:[{title:"Fastly VCL Cache Override",useCase:"Custom caching logic with VCL.",code:`sub vcl_recv {
  # Cache API responses for 1 hour
  if (req.url ~ "^/api/") {
    set req.ttl = 3600s;
    set req.grace = 86400s;
  }

  # Bypass cache for admin
  if (req.url ~ "^/admin/") {
    set req.http.X-Cache-Type = "pass";
    return(pass);
  }

  # Remove cookies from static assets (better caching)
  if (req.url ~ "\\.(css|js|png|jpg|svg|woff2)$") {
    unset req.http.Cookie;
  }
}

sub vcl_deliver {
  # Add debug headers
  if (fastly.ff.visits_this_service == 0) {
    set resp.http.X-Cache = "MISS";
  } else {
    set resp.http.X-Cache = "HIT";
  }
}`,description:"Fastly VCL for custom cache TTL, admin bypass, cookie stripping, and debug headers."},{title:"Fastly Surrogate Key Purging",useCase:"Tag-based cache purging.",code:`# Backend sets Surrogate-Key headers:
surrogate_key: "article:123 category:tech author:456"

# Client receives header (hidden via VCL):
# set resp.http.Surrogate-Key = req.http.Surrogate-Key;

# Purge by key via API:
curl -X POST "https://api.fastly.com/service/$SERVICE_ID/purge/article:123" \\
  -H "Fastly-Key: $API_TOKEN"

# Purge multiple keys:
curl -X POST "https://api.fastly.com/service/$SERVICE_ID/purge" \\
  -H "Fastly-Key: $API_TOKEN" \\
  -H "Surrogate-Key: article:123 category:tech"

# Purge all:
curl -X POST "https://api.fastly.com/service/$SERVICE_ID/purge_all" \\
  -H "Fastly-Key: $API_TOKEN"`,description:"Fastly surrogate key purging for tag-based cache invalidation."},{title:"Compute@Edge (Rust)",useCase:"Basic Compute@Edge service.",code:`// Cargo.toml
[package]
name = "hello-fastly"
version = "0.1.0"

[dependencies]
fastly = "^0.10"

// src/main.rs
use fastly::{{Request, Response}};

#[fastly::main]
fn main(req: Request) -> Response {
    let country = req.get_client_ip_addr();
    let path = req.get_path();

    // Redirect based on user agent
    let ua = req.get_header_str("User-Agent").unwrap_or("");
    if ua.contains("Mobile") {
        return Response::from_status(302)
            .with_header("Location", format!("/mobile{path}"));
    }

    // Fetch from origin or generate synthetic response
    let backend = format!("backend_{}", req.get_url().host_str().unwrap_or("default"));
    let beresp = req.send(backend).unwrap();
    beresp
}`,description:"Fastly Compute@Edge in Rust with redirects and backend forwarding."},{title:"Fastly Image Optimization",useCase:"On-the-fly image transformation.",code:`# Image optimization via URL parameters:
# /image.jpg?width=400&height=300&format=webp&quality=80

# VCL to enable image optimization:
sub vcl_recv {
  if (req.url ~ "\\.(jpg|jpeg|png|gif|webp)$") {
    set req.http.X-Fastly-Imageopto-Auto = "webp";
    set req.http.X-Fastly-Imageopto-Resize = "400x300";
  }
}

# OR use query parameters:
# ?width=400 (max width)
# ?height=300 (max height)
# ?format=webp|jpeg|png|avif (format conversion)
# ?quality=1-100 (compression quality)
# ?crop=1600,900 (crop dimensions)

# Auto format selection via Sentinel:
# Browser sends Accept: image/avif,image/webp
# Fastly serves best format automatically`,description:"Fastly image optimization with VCL and URL parameter configuration."},{title:"Fastly Real-Time Log Streaming",useCase:"Streaming logs to external destinations.",code:`# Create logging endpoint via API:
curl -X POST "https://api.fastly.com/service/$SERVICE_ID/version/$VERSION/logging/s3" \\
  -H "Fastly-Key: $API_TOKEN" \\
  -d '{
    "name": "cdn-logs",
    "bucket_name": "my-cdn-logs",
    "domain": "s3.us-east-1.amazonaws.com",
    "path": "/cdn/",
    "format": "%{now:%Y-%m-%dT%H:%M:%S%z}t\\t%h\\t%m\\t%U\\t%s\\t%D",
    "period": 3600,
    "gzip_level": 3
  }'

# Log format variables:
# %h — client IP
# %m — request method
# %U — URL path
# %s — status code
# %D — response time (microseconds)
# %{Cookie}i — request header

# Supported destinations:
# S3, GCS, Azure Blob, BigQuery, Elasticsearch,
# Splunk, Datadog, Sumo Logic, New Relic, Kafka`,description:"Fastly real-time log streaming configuration to S3 with format customization."}],mcqQuestions:[{question:"What is Fastly known for?",options:["Cheapest CDN","Programmable edge with VCL","Largest CDN","Free CDN"],answer:1,explanation:"Fastly is known for its programmable VCL-based edge."},{question:"How fast is Fastly\\'s cache purge?",options:["1 second","<150ms","5 minutes","Instant"],answer:1,explanation:"Fastly purges cache in <150ms across all edges."},{question:"What is VCL?",options:["Fast, Very CLI","Varnish Configuration Language","Very Complex Logic","Virtual Cache Layer"],answer:1,explanation:"VCL is Varnish Configuration Language."},{question:"What is Compute@Edge?",options:["Edge computing with VCL","WebAssembly-based serverless at edge","Edge cache","Edge DNS"],answer:1,explanation:"Compute@Edge runs WebAssembly at the edge using Rust/JS/Go."},{question:"What is a surrogate key?",options:["Backup cache","Tag for cache object purging","SSL key","API key"],answer:1,explanation:"Surrogate keys are tags used for targeted cache purging."},{question:"What WAF did Fastly acquire?",options:["Cloudflare WAF","Signal Sciences","AWS WAF","PerimeterX"],answer:1,explanation:"Fastly acquired Signal Sciences for ML-based WAF."}]};export{e as cdn_fastly};
