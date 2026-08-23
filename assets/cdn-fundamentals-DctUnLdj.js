const e={id:"cdn-fundamentals",title:"CDN Fundamentals",difficulty:"beginner",estimatedMinutes:20,tldr:["A CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location.","CDNs reduce latency by caching content on edge servers closer to end users, minimizing the distance data must travel.","Key benefits: faster page loads, reduced bandwidth costs, increased content availability and redundancy, improved security against DDoS attacks.","CDNs handle both static content (images, CSS, JS) and dynamic content (API responses, HTML pages) through various optimization techniques."],laymanDefinition:"A CDN is like a chain of neighborhood grocery stores instead of one giant supermarket downtown. Instead of everyone traveling to the city center for milk, you walk to your local store. The store keeps the popular items stocked locally, and if you need something rare, it fetches it from the central warehouse. Everyone gets their milk faster.",deepDive:[{heading:"How CDNs Work",text:"When a user requests content, the CDN routes the request to the nearest edge server. If the edge server has the content cached, it serves it directly (cache hit). If not, it fetches from the origin server, caches it, and serves it. This reduces latency by 50-80% for users far from the origin."},{heading:"CDN Architecture Components",text:"Origin server: the source of truth where original content lives. Edge servers: distributed cache nodes at Points of Presence (PoPs) worldwide. Request routing: DNS-based or Anycast routing directs users to the nearest edge. Caching layer: stores copies of content with configurable TTLs."},{heading:"CDN Benefits Beyond Speed",text:"DDoS mitigation: CDNs absorb large traffic spikes across their distributed infrastructure. SSL/TLS termination: edge servers handle encryption, reducing load on origin. Traffic analytics: detailed insights into global traffic patterns. Origin offload: caches can serve 90%+ of traffic, dramatically reducing origin server load."},{heading:"CDN vs Web Hosting",text:"A CDN is not a replacement for web hosting. The origin server still hosts the authoritative content. The CDN sits in front as a caching and acceleration layer. Web hosting stores your site; a CDN accelerates delivery of that site globally. Many cloud providers offer integrated hosting + CDN solutions (e.g., AWS S3 + CloudFront)."},{heading:"Global Reach and Scaling",text:"Major CDNs have 100-300+ PoPs worldwide. Cloudflare: 330+ cities in 120+ countries. Akamai: 4100+ locations. AWS CloudFront: 600+ PoPs. This global footprint ensures consistent performance regardless of user location. CDNs automatically scale to handle traffic spikes without provisioning additional origin capacity."}],interviewAnswer:"A CDN is a globally distributed network of proxy servers that caches content closer to users, reducing latency, offloading origin servers, and providing DDoS protection. It is essential for modern web applications serving a global audience.",interviewQuestions:[{question:"What is a CDN?",answer:"A Content Delivery Network — a distributed network of servers that delivers web content to users based on their geographic location."},{question:"What are the main benefits of using a CDN?",answer:"Reduced latency, lower bandwidth costs, increased availability, improved security (DDoS mitigation), and origin server offloading."},{question:"How does a CDN reduce latency?",answer:"By caching content on edge servers closer to users, reducing the physical distance data must travel."},{question:"What is the difference between an edge server and an origin server?",answer:"The origin server is the source of truth; edge servers are distributed cache nodes that store copies of content closer to users."},{question:"What is origin offload?",answer:"When a CDN serves cached content, reducing the number of requests that reach the origin server — often 90%+ of requests."},{question:"Does a CDN replace web hosting?",answer:"No. A CDN is a caching and acceleration layer in front of your origin server. You still need an origin server."},{question:"What is a Point of Presence (PoP)?",answer:"A physical location where the CDN has edge servers. More PoPs means better global coverage."},{question:"How does a CDN protect against DDoS?",answer:"By absorbing attack traffic across its distributed infrastructure, preventing it from overwhelming the origin server."},{question:"What types of content can a CDN accelerate?",answer:"Both static (images, CSS, JS) and dynamic (API responses, HTML) content."},{question:"What is Anycast routing?",answer:"A networking technique where multiple servers share the same IP address; traffic routes to the nearest server automatically."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">CDN Fundamentals</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin Server</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Source of truth</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge Servers</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">Distributed cache</text><line x1="290" y1="48" x2="320" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="330" y="35" width="150" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="405" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">End Users</text><text x="405" y="54" text-anchor="middle" font-size="9" fill="#ddd">Nearest edge</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DNS Routing</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Nearest PoP</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Caching</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">TTL-based</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DDoS Shield</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">Absorb attacks</text><rect x="10" y="160" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Analytics</text><text x="65" y="179" text-anchor="middle" font-size="9" fill="#ddd">Traffic insights</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="113" x2="150" y2="113" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="143" x2="150" y2="143" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="173" x2="150" y2="173" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="310" height="140" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="315" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN (Content Delivery Network)</text><text x="315" y="193" text-anchor="middle" font-size="9" fill="#ddd">Distributed network that accelerates content delivery by</text><text x="315" y="204" text-anchor="middle" font-size="9" fill="#ddd"> caching at edge servers near users.</text><text x="240" y="225" font-size="9" fill="#666" text-anchor="middle">CDN Fundamentals: Global network of edge servers c</text><text x="240" y="237" font-size="9" fill="#666" text-anchor="middle">aching content closer to users for faster, more re</text><text x="240" y="249" font-size="9" fill="#666" text-anchor="middle">liable delivery.</text></svg>',codeExamples:[{title:"CDN Cache Configuration (CloudFront)",useCase:"Setting up a basic CloudFront distribution.",code:`aws cloudfront create-distribution \\
  --origin-domain-name mybucket.s3.amazonaws.com \\
  --default-root-object index.html \\
  --enabled \\
  --default-cache-behavior \\
    "TargetOriginId=myOrigin,
     ViewerProtocolPolicy=redirect-to-https,
     MinTTL=0,DefaultTTL=86400,MaxTTL=31536000,
     AllowedMethods=[GET,HEAD],
     CachedMethods=[GET,HEAD],
     ForwardedValues={QueryString=false}"
  --price-class PriceClass_All`,description:"AWS CLI command to create a CloudFront distribution with standard caching settings."},{title:"CDN Headers (Response Headers)",useCase:"Common CDN-related response headers.",code:`# Server response headers showing CDN usage
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 4523
Cache-Control: public, max-age=3600
x-cache: HIT from cloudfront
x-amz-cf-pop: JFK50-P1
x-amz-cf-id: abc123def456
Age: 234
Via: 1.1 varnish-v4
CF-Cache-Status: HIT
CF-Ray: 4a5b6c7d8e9f-JFK`,description:"Response headers indicating CDN activity — the x-cache, Age, and CF-Cache-Status headers show caching behavior."},{title:"CDN with Nginx Reverse Proxy Cache",useCase:"Using Nginx as a caching layer.",code:`proxy_cache_path /var/cache/nginx levels=1:2
  keys_zone=mycache:10m max_size=1g
  inactive=60m use_temp_path=off;

server {
  listen 80;
  server_name cdn.example.com;

  location / {
    proxy_cache mycache;
    proxy_cache_valid 200 302 60m;
    proxy_cache_valid 404 1m;
    proxy_cache_use_stale error timeout updating;
    add_header X-Cache-Status $upstream_cache_status;

    proxy_pass http://origin-server:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}`,description:"Nginx configured as a caching reverse proxy with cache status headers."},{title:"CDN Integration with HTML",useCase:"Loading resources via CDN.",code:`<!DOCTYPE html>
<html>
<head>
  <!-- CSS via CDN -->
  <link rel="stylesheet"
    href="https://cdn.example.com/css/app.abc123.css">

  <!-- Font via CDN -->
  <link rel="stylesheet"
    href="https://fonts.cdnfonts.com/css/inter">
</head>
<body>
  <!-- Image via CDN -->
  <img src="https://cdn.example.com/img/hero.webp"
       alt="Hero" loading="lazy">

  <!-- JS via CDN -->
  <script
    src="https://cdn.example.com/js/bundle.xyz789.js"
    defer><\/script>
</body>
</html>`,description:"HTML page loading all static assets through a CDN for optimal performance."},{title:"Flush CDN Cache (CloudFront)",useCase:"Invalidating cached content.",code:`# Invalidate specific paths
aws cloudfront create-invalidation \\
  --distribution-id E123456789ABCD \\
  --paths "/images/*" "/css/*"

# Invalidate entire distribution
aws cloudfront create-invalidation \\
  --distribution-id E123456789ABCD \\
  --paths "/*"

# Note: invalidation costs money ($0.005 per path)
# Use versioned filenames to avoid invalidations:
#   style.abc123.css instead of style.css
#   script.xyz789.js instead of script.js`,description:"CloudFront invalidation commands to purge cached content."},{title:"CDN Performance Testing with Curl",useCase:"Measure CDN response times.",code:`# Check cache headers and response time
curl -s -o /dev/null -w "\\n
  HTTP Code: %{http_code}\\n
  DNS Lookup: %{time_namelookup}s\\n
  Connect: %{time_connect}s\\n
  TLS Handshake: %{time_appconnect}s\\n
  TTFB: %{time_starttransfer}s\\n
  Total: %{time_total}s\\n
  Speed: %{speed_download} B/s\\n" \\
  -H "Cache-Control: no-cache" \\
  https://cdn.example.com/image.jpg

# Compare with direct origin access
curl -s -o /dev/null -w "Time: %{time_total}s"
  https://origin.example.com/image.jpg`,description:"Curl commands to measure CDN performance and compare with direct origin access."}],mcqQuestions:[{question:"What does CDN stand for?",options:["Content Distribution Network","Content Delivery Network","Central Data Network","Cache Distribution Node"],answer:1,explanation:"CDN = Content Delivery Network."},{question:"What is the primary purpose of a CDN?",options:["Store backups","Reduce latency by caching content near users","Host websites","Manage databases"],answer:1,explanation:"CDNs primarily reduce latency by caching content on edge servers closer to users."},{question:"What is a Point of Presence (PoP)?",options:["A DNS record type","A physical location with edge servers","A compression algorithm","A caching policy"],answer:1,explanation:"A PoP is a physical location where a CDN has edge servers."},{question:"How does a CDN protect against DDoS?",options:["By blocking all traffic","By absorbing attacks across distributed infrastructure","By rate limiting only","By shutting down the server"],answer:1,explanation:"CDNs absorb DDoS traffic across their globally distributed network."},{question:"What does origin offload mean?",options:["Removing the origin server","Serving cached content reduces origin load","Offloading data to tape storage","Migrating to a new host"],answer:1,explanation:"Origin offload means the CDN serves most requests, reducing load on the origin server."},{question:"Which header indicates a cache hit?",options:["Cache-Control","x-cache: HIT","Content-Type","Accept-Encoding"],answer:1,explanation:"Headers like x-cache: HIT or CF-Cache-Status: HIT indicate a cache hit from the CDN."},{question:"What is Anycast routing?",options:["Traffic goes to a random server","Multiple servers share one IP, traffic routes to nearest","Traffic is broadcast to all servers","DNS-based routing only"],answer:1,explanation:"Anycast allows multiple servers to share the same IP, automatically routing to the nearest one."},{question:"Does a CDN replace web hosting?",options:["Yes","No, it is an acceleration layer","Only for static sites","Only for video streaming"],answer:1,explanation:"A CDN is an acceleration layer in front of an origin server, not a replacement for hosting."},{question:"What is a common method to avoid cache invalidation?",options:["Delete the cache daily","Use versioned filenames (fingerprinting)","Disable caching","Increase TTL forever"],answer:1,explanation:"Versioned filenames (like style.abc123.css) allow permanent caching and avoid the need for invalidation."},{question:"What percentage of traffic can a CDN typically offload?",options:["About 10%","About 50%","90% or more","100%"],answer:2,explanation:"CDNs can offload 90%+ of traffic from origin servers for cacheable content."}]};export{e as cdn_fundamentals};
