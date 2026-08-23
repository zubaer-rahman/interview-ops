const e={id:"tm-dns-routing",title:"DNS Routing",difficulty:"intermediate",estimatedMinutes:15,tldr:["DNS routing uses the Domain Name System to direct traffic by returning different IP addresses based on criteria.","Techniques: GeoDNS, Weighted DNS, Latency-based DNS, Failover DNS.","DNS is the first point of routing � before any HTTP request, DNS resolves the domain to an IP address.","Major DNS providers: Route 53 (AWS), Cloudflare DNS, Google Cloud DNS, Azure DNS, NS1."],laymanDefinition:"DNS routing is like a global telephone directory. When you call a company's main number, the operator can route your call to the nearest office based on your area code. Similarly, DNS can return the IP of the nearest server when a user looks up a domain.",deepDive:[{heading:"How DNS Routing Works",text:"User types domain ? DNS resolver queries authoritative DNS server ? DNS returns IP based on routing policy ? client connects to returned IP. DNS responses have TTL (Time to Live). Lower TTL means faster failover but more DNS queries."},{heading:"GeoDNS (Geographic Routing)",text:"Returns different IPs based on client geographic location. Uses GeoIP databases. Use cases: serve content from nearest CDN edge, comply with data sovereignty laws (GDPR), regional content restrictions."},{heading:"Weighted DNS Routing",text:"Multiple A/AAAA records with assigned weights. Used for gradual traffic shifting, A/B testing at DNS level, canary deployments. Not all clients respect weights equally."},{heading:"DNS Failover",text:"Health checks monitor backend servers. If server fails, its DNS record is removed. Failover time depends on health check interval + TTL. Set TTL low (30-60s) for failover domains."},{heading:"Latency-Based Routing",text:"DNS returns the IP with lowest latency for the client. Requires monitoring latency from various regions to each endpoint. AWS Route 53 latency-based routing measures latency between regions."}],interviewAnswer:"DNS routing is the first traffic management layer. Use GeoDNS for regional delivery, weighted DNS for gradual rollouts, low TTL for fast failover. DNS changes propagate slowly due to caching.",interviewQuestions:[{question:"What is DNS routing?",answer:"Using DNS to direct traffic by returning different IPs based on location, latency, weight, or health."},{question:"What is GeoDNS?",answer:"DNS that returns different IPs based on the client\\'s geographic location."},{question:"What is weighted DNS?",answer:"Multiple A records with weights � traffic distributed according to assigned weights."},{question:"What is TTL in DNS?",answer:"Time to Live � how long a DNS response is cached. Lower TTL = faster changes."},{question:"What is DNS failover?",answer:"Automatic removal of DNS records for unhealthy servers."},{question:"What is latency-based routing?",answer:"DNS returns the IP with lowest latency for the client\\'s location."},{question:"What is a CNAME record?",answer:"Alias record mapping a domain to another domain name. Used for CDN integration."},{question:"What is an A record vs AAAA?",answer:"A maps to IPv4. AAAA maps to IPv6."},{question:"What is anycast DNS?",answer:"Multiple servers advertise same IP. Traffic routes to nearest server via BGP."},{question:"What is a DNS health check?",answer:"Periodic checks to verify server health before returning its IP."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">DNS Routing</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client Query</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">example.com?</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="255" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DNS Server</text><text x="255" y="54" text-anchor="middle" font-size="9" fill="#ddd">Route 53 / Cloudflare</text><line x1="320" y1="48" x2="350" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="60" x2="190" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="82" x2="190" y2="105" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="360" y="35" width="120" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="420" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">US Server</text><text x="420" y="54" text-anchor="middle" font-size="9" fill="#ddd">192.0.2.1</text><rect x="360" y="70" width="120" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="420" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">EU Server</text><text x="420" y="89" text-anchor="middle" font-size="9" fill="#ddd">203.0.113.1</text><rect x="360" y="105" width="120" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="420" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Asia Server</text><text x="420" y="124" text-anchor="middle" font-size="9" fill="#ddd">198.51.100.1</text><rect x="10" y="70" width="170" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="95" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">GeoDNS: US?US IP</text><text x="95" y="89" text-anchor="middle" font-size="9" fill="#ddd">Regional routing</text><rect x="10" y="105" width="170" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="95" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Failover: Remove bad IP</text><text x="95" y="124" text-anchor="middle" font-size="9" fill="#ddd">Health checks</text><text x="240" y="155" font-size="9" fill="#666" text-anchor="middle">DNS Routing: Direct traffic at DNS level using Geo</text><text x="240" y="167" font-size="9" fill="#666" text-anchor="middle">, latency, weight, and health policies.</text></svg>',codeExamples:[{title:"Route 53 GeoDNS",useCase:"Geographic DNS.",code:`resource "aws_route53_record" "app" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  geo_location { continent_code = "NA" }
  alias {
    name    = aws_lb.us-east-1.dns_name
    zone_id = aws_lb.us-east-1.zone_id
    evaluate_target_health = true
  }
  geo_location { continent_code = "EU" }
  alias {
    name    = aws_lb.eu-west-1.dns_name
    zone_id = aws_lb.eu-west-1.zone_id
  }
}`,description:"Route 53 GeoDNS routes NA to us-east-1, EU to eu-west-1."},{title:"Weighted DNS (Route 53)",useCase:"Gradual traffic shifting.",code:`resource "aws_route53_record" "v1" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  set_identifier = "v1"
  weight = 90
  ttl    = 60
  records = ["192.0.2.1"]
}
resource "aws_route53_record" "v2" {
  set_identifier = "v2"
  weight = 10
  records = ["203.0.113.1"]
}`,description:"Weighted DNS: 90% v1, 10% v2 with health checks."},{title:"DNS Failover with Cloudflare Workers",useCase:"Failover logic.",code:`async function handleRequest(request) {
  const primary = await fetch("http://primary.example.com",
    { signal: AbortSignal.timeout(5000) }
  ).catch(() => null);
  if (primary?.ok) return primary;
  const backup = await fetch("http://backup.example.com");
  if (backup?.ok) return backup;
  return new Response("Unavailable", { status: 503 });
}`,description:"Cloudflare Worker failover � try primary, fallback, then static."},{title:"Custom DNS Server (Node.js)",useCase:"Simple Geo DNS.",code:`const dns = require('dns').createServer();
const geoRoutes = { US: '192.0.2.1', EU: '203.0.113.1', ASIA: '198.51.100.1' };
dns.on('request', (req, res) => {
  if (req.questions[0].name === 'app.example.com') {
    const region = getGeoRegion(req.address.address);
    const ip = geoRoutes[region] || geoRoutes.US;
    res.answer.push({ name: req.questions[0].name, type: 'A', ttl: 60, data: ip });
  }
  res.send();
});
dns.listen(53);`,description:"Custom DNS server returning IP based on client geo-region."},{title:"Route 53 Failover with Health Check",useCase:"Auto-failover.",code:`resource "aws_route53_health_check" "primary" {
  fqdn = "primary.example.com"
  port = 443
  type = "HTTPS"
  resource_path = "/health"
  failure_threshold = 3
  request_interval = 30
}
resource "aws_route53_record" "failover" {
  failover_routing_policy = "PRIMARY"
  ttl = 30
  health_check_id = aws_route53_health_check.primary.id
}`,description:"Route 53 failover routing with health check."}],mcqQuestions:[{question:"What does DNS stand for?",options:["Domain Name Service","Domain Name System","Digital Network Service","Dynamic Name Server"],answer:1,explanation:"DNS = Domain Name System."},{question:"What does TTL determine?",options:["Server load","Cache duration","Encryption strength","Record count"],answer:1,explanation:"TTL determines cache duration for DNS responses."},{question:"What is GeoDNS used for?",options:["Load balancing","Regional content delivery","SSL termination","API routing"],answer:1,explanation:"GeoDNS returns different IPs based on client location."},{question:"What DNS routing enables A/B testing?",options:["GeoDNS","Weighted DNS","Latency DNS","Failover"],answer:1,explanation:"Weighted DNS distributes traffic by percentage."},{question:"What is the main DNS routing trade-off?",options:["High CPU","Propagation delay from caching","No SSL","SPOF"],answer:1,explanation:"DNS changes propagate slowly due to caching."},{question:"What DNS record is used for domain aliasing?",options:["A","AAAA","CNAME","MX"],answer:2,explanation:"CNAME aliases one domain to another."}]};export{e as tm_dns_routing};
