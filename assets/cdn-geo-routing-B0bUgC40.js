const e={id:"cdn-geo-routing",title:"Geo Routing",difficulty:"intermediate",estimatedMinutes:15,tldr:["Geo routing directs user requests to the nearest CDN edge server based on geographic location, minimizing latency.","Methods: DNS-based routing (geo DNS returns IP of nearest PoP) and Anycast routing (multiple PoPs share IP, BGP routes to nearest).","Geo routing considers: geographic distance, server load, network conditions, cache availability, and origin health.","Advanced geo routing uses real-time internet weather data to dynamically route around congestion and outages."],laymanDefinition:"Geo routing is like a GPS navigation system that directs you to the nearest gas station instead of one across town. When you need directions, the system checks where you are, finds all nearby stations, considers traffic (server load), and sends you to the best one. If one station is crowded, it routes you to the next closest.",deepDive:[{heading:"DNS-Based Geo Routing",text:"DNS server returns different IP addresses based on the client\\'s resolver location. Uses GeoIP databases to map IPs to regions. Simple to implement. Updates can be slow (DNS TTL). Less precise than Anycast. Used by: Akamai, Azure CDN, legacy CDNs."},{heading:"Anycast Routing",text:"Multiple edge servers share the same IP address. BGP (Border Gateway Protocol) automatically routes traffic to the nearest server announcing that IP. Fast failover (if one PoP goes down, BGP converges to next nearest). More precise and resilient. Used by: Cloudflare, Fastly, CloudFront."},{heading:"Geo Routing Factors",text:"Latency: primary metric (measured via RTT). Server load: avoid overloaded edge servers. Cache availability: prefer edge with cached content. Origin health: route around unhealthy origins. Network conditions: avoid congested paths. Cost: some routes may be cheaper. Custom rules: route specific content to specific regions."},{heading:"Real-Time Traffic Steering",text:"Advanced CDNs use real-time monitoring to detect network congestion, packet loss, and latency spikes. Traffic is dynamically rerouted to avoid problem areas. Fastly uses real-time data to steer traffic around internet weather events. Cloudflare Argo Smart Routing optimizes paths in real-time."},{heading:"Geo Routing for Origin Traffic",text:"CDNs can also route requests to the nearest origin server (multi-region origins). User in Europe -> nearest European edge -> nearest European origin. Requires origin servers in multiple regions. Benefits: lower latency for dynamic cache misses, compliance (data sovereignty)."}],interviewAnswer:"Geo routing directs users to the nearest CDN edge server using DNS-based or Anycast routing. Anycast is preferred for its precision and fast failover. Advanced routing considers server load, cache state, and real-time network conditions. Multi-region origin routing further reduces latency for dynamic content.",interviewQuestions:[{question:"What is geo routing?",answer:"Directing user requests to the nearest CDN edge server based on geographic location."},{question:"What are the two main geo routing methods?",answer:"DNS-based routing (geo DNS) and Anycast routing (shared IP with BGP)."},{question:"How does DNS-based geo routing work?",answer:"DNS returns different IP addresses based on the client resolver\\'s geographic location."},{question:"How does Anycast routing work?",answer:"Multiple PoPs share the same IP address; BGP routes traffic to the nearest one."},{question:"What is the advantage of Anycast over DNS routing?",answer:"Faster failover, more precise routing, and automatic load distribution."},{question:"What factors does geo routing consider?",answer:"Latency, server load, cache availability, origin health, and network conditions."},{question:"What is traffic steering?",answer:"Dynamically routing traffic based on real-time network conditions and performance data."},{question:"What is multi-region origin routing?",answer:"Routing requests to the nearest origin server for lower latency on cache misses."},{question:"Which CDNs use Anycast routing?",answer:"Cloudflare, Fastly, and CloudFront use Anycast for edge routing."},{question:"What is Argo Smart Routing?",answer:"Cloudflare\\'s real-time traffic optimization that finds faster paths across the internet."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Geo Routing</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User in EU</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Requests content</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User in US</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Requests content</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User in Asia</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Requests content</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="310" height="100" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="315" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Geo Routing (Anycast + DNS)</text><text x="315" y="118" text-anchor="middle" font-size="9" fill="#ddd">Routes each user to nearest edge PoP based on location, </text><text x="315" y="129" text-anchor="middle" font-size="9" fill="#ddd">load, cache, and network health.</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Factors</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Latency, load, cache</text><rect x="160" y="140" width="140" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="230" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Anycast</text><text x="230" y="159" text-anchor="middle" font-size="9" fill="#ddd">Shared IP, BGP routed</text><rect x="160" y="170" width="140" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="230" y="186" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DNS Geo</text><text x="230" y="189" text-anchor="middle" font-size="9" fill="#ddd">Region-based IP</text><text x="240" y="210" font-size="9" fill="#666" text-anchor="middle">Geo Routing: Directing users to nearest CDN edge v</text><text x="240" y="222" font-size="9" fill="#666" text-anchor="middle">ia Anycast or DNS-based geo routing for lowest lat</text><text x="240" y="234" font-size="9" fill="#666" text-anchor="middle">ency.</text></svg>',codeExamples:[{title:"Anycast Routing with BGP",useCase:"How Anycast distributes traffic.",code:`# Multiple edge PoPs announce the same IP block
# via BGP to the internet routing table.

# PoP1 (New York):
#   router bgp 65001
#   network 203.0.113.0/24

# PoP2 (London):
#   router bgp 65002
#   network 203.0.113.0/24

# When a user in NY resolves cdn.example.com,
# traffic goes to PoP1 (closest BGP announcement).
# If PoP1 goes down, BGP converges to PoP2.
# Converge time: typically <30 seconds.`,description:"BGP configuration for Anycast routing across multiple edge PoPs."},{title:"CloudFront Geo Restriction",useCase:"Geographic access control.",code:`# CloudFront geo restriction (whitelist/blacklist)

# Whitelist: only allow these countries
aws cloudfront update-distribution \\
  --id E123456789ABCD \\
  --geo-restriction \\
    "RestrictionType=whitelist,Locations=[US,CA,GB]"

# Blacklist: block these countries
aws cloudfront update-distribution \\
  --id E123456789ABCD \\
  --geo-restriction \\
    "RestrictionType=blacklist,Locations=[XX]"

# Geo restriction uses MaxMind GeoIP database
# Applied at edge locations before content is served`,description:"CloudFront geo restriction for allowing or blocking countries."},{title:"Fastly Geo-Based VCL Routing",useCase:"Geo routing with Fastly VCL.",code:`backend us_origin { .host = "us-origin.example.com"; }
backend eu_origin { .host = "eu-origin.example.com"; }
backend asia_origin { .host = "asia-origin.example.com"; }

sub vcl_recv {
  if (req.http.Fastly-Geo-Country ~ "(US|CA|MX)") {
    set req.backend = us_origin;
  } else if (req.http.Fastly-Geo-Country ~ "(GB|DE|FR|NL|IT|ES)") {
    set req.backend = eu_origin;
  } else if (req.http.Fastly-Geo-Country ~ "(JP|KR|SG|AU|NZ)") {
    set req.backend = asia_origin;
  } else {
    set req.backend = us_origin;
  }
}`,description:"Fastly VCL geo-routing requests to the nearest origin backend."},{title:"Cloudflare Argo Smart Routing",useCase:"Real-time traffic optimization.",code:`# Cloudflare Argo Smart Routing:
# - Learns optimal paths across the internet
# - Avoids congested routes in real-time
# - Typically 30% faster on average
# - Enabled via Dashboard: Speed -> Optimization -> Argo

# How it works:
# 1. Cloudflare edge nodes share latency data
# 2. Argo builds a real-time internet map
# 3. Traffic is routed through optimal intermediary nodes
# 4. Paths adapt to changing network conditions

# Benefits:
# - Lower latency for uncached content
# - Better performance for dynamic requests
# - Automatic failover around outages`,description:"Cloudflare Argo Smart Routing for real-time traffic optimization."},{title:"Multi-Region Origin with Route53",useCase:"DNS-based origin geo routing.",code:`# AWS Route 53 geo routing policy for origins

# Create latency-based routing to multiple origins:
# Record: origin.example.com
# Type: A - Latency routing

# Region: us-east-1
#   Value: 203.0.113.10 (us-origin)
#   Region: us-east-1

# Region: eu-west-1
#   Value: 203.0.113.20 (eu-origin)
#   Region: eu-west-1

# Region: ap-southeast-1
#   Value: 203.0.113.30 (asia-origin)
#   Region: ap-southeast-1

# CloudFront origins: point to Route53 alias
# Users resolve to nearest origin via latency routing`,description:"Route 53 latency-based routing for multi-region origin deployment."}],mcqQuestions:[{question:"What are the two main geo routing methods?",options:["DNS-based and Anycast","HTTP and HTTPS","TCP and UDP","IPv4 and IPv6"],answer:0,explanation:"The two main methods are DNS-based geo routing and Anycast routing."},{question:"How does Anycast routing work?",options:["Different IP per PoP","Multiple PoPs share one IP, BGP routes to nearest","DNS returns different IPs","HTTP redirects"],answer:1,explanation:"Anycast shares one IP across multiple PoPs; BGP routes to the nearest."},{question:"What is the advantage of Anycast over DNS routing?",options:["Slower updates","Faster failover and more precise","More complex","Less reliable"],answer:1,explanation:"Anycast provides faster failover and more precise routing than DNS-based."},{question:"What is Argo Smart Routing?",options:["Cloudflare DNS service","Real-time traffic path optimization","CDN caching product","Compression algorithm"],answer:1,explanation:"Argo Smart Routing optimizes traffic paths in real-time."},{question:"What factors affect geo routing decisions?",options:["Only distance","Latency, load, cache, network health","Only server load","Only cache availability"],answer:1,explanation:"Geo routing considers latency, server load, cache state, and network health."},{question:"What is multi-region origin routing?",options:["Multiple CDN providers","Routing to nearest origin server","Multiple DNS providers","Multiple SSL certificates"],answer:1,explanation:"Multi-region origin routes to the nearest origin server for lower latency."}]};export{e as cdn_geo_routing};
