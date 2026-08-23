const e={id:"cdn-geo-blocking",title:"Geo Blocking",difficulty:"intermediate",estimatedMinutes:15,tldr:["Geo blocking restricts content access based on the user's geographic location. Used for licensing compliance, regional content restrictions, and security.","CDNs implement geo blocking at the edge, rejecting requests from blocked regions before they reach the origin, reducing origin load and attack surface.","Implementation: GeoIP database lookup at the edge, comparison against allow/deny lists, and appropriate HTTP response (403, redirect, or custom block page).","Accuracy and limitations: GeoIP databases are ~99% accurate at country level but less precise for cities. VPNs/proxies can bypass geo blocking."],laymanDefinition:"Geo blocking is like a bouncer at a club that checks your ID to see if you're from a allowed region. If your ID shows a blocked country, you're turned away at the door before you even enter. The bouncer (CDN edge) doesn't even bother telling the DJ (origin) about you.",deepDive:[{heading:"GeoIP Database and Accuracy",text:"CDNs use GeoIP databases (MaxMind, IP2Location) to map IP addresses to countries. Country-level accuracy: ~99%. City-level: ~80-90%. Databases updated monthly. Some CDNs (Cloudflare) have their own proprietary GeoIP data. VPN/Proxy detection can identify evaders."},{heading:"Whitelist vs Blacklist Approach",text:"Whitelist: only allow traffic from specific countries (strictest, best for security). Blacklist: block specific countries while allowing all others (common for licensing). Global allow with country exceptions: most flexible but requires careful rule ordering."},{heading:"Edge Implementation",text:"Geo blocking happens at CDN edge before origin. No origin load from blocked requests. Low latency (checked locally at edge). HTTP response customization: 403 Forbidden, redirect to different page, custom block page, or captcha challenge."},{heading:"Use Cases",text:"Licensing compliance: media/streaming rights by region. Regulatory compliance: GDPR (EU data stay in EU), data sovereignty laws. Security: block high-threat regions. Content localization: serve different content per region. Pricing: region-specific pricing for digital goods."},{heading:"Bypass Techniques and Mitigations",text:"VPNs, proxies, and Tor can bypass geo blocking. CDNs detect known VPN/proxy IPs. Threat intelligence feeds flag suspicious proxies. Challenge unsupported IPs with captcha. Combine geo blocking with other security measures (rate limiting, WAF)."}],interviewAnswer:"Geo blocking restricts content access by geographic region at the CDN edge. It uses GeoIP databases, supports whitelist/blacklist, and can be bypassed by VPNs. CDNs can detect and block many proxies to improve effectiveness.",interviewQuestions:[{question:"What is geo blocking?",answer:"Restricting content access based on the user\\'s geographic location."},{question:"How does a CDN implement geo blocking?",answer:"GeoIP database lookup at edge, comparing against allow/deny lists."},{question:"What HTTP status does geo blocking typically return?",answer:"403 Forbidden (can be customized to redirect or block page)."},{question:"What is the difference between whitelist and blacklist?",answer:"Whitelist allows only listed countries; blacklist blocks listed countries."},{question:"How accurate is country-level GeoIP?",answer:"~99% accurate at country level."},{question:"What are common use cases for geo blocking?",answer:"Licensing, compliance, security, content localization, pricing."},{question:"Can VPNs bypass geo blocking?",answer:"Yes, but CDNs detect and can block known VPN/proxy IPs."},{question:"Where does geo blocking happen in the request flow?",answer:"At the CDN edge, before reaching the origin."},{question:"What is GDPR-related geo blocking?",answer:"Keeping EU user data within EU regions for compliance."},{question:"What databases do CDNs use for geo blocking?",answer:"MaxMind GeoIP, IP2Location, or proprietary (Cloudflare)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Geo Blocking</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Attempts access</text><rect x="160" y="35" width="160" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="240" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">GeoIP Database</text><text x="240" y="54" text-anchor="middle" font-size="9" fill="#ddd">Maps IP to country</text><rect x="160" y="65" width="160" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="240" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Decision</text><text x="240" y="84" text-anchor="middle" font-size="9" fill="#ddd">Allowed or blocked?</text><rect x="10" y="135" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Allowed</text><text x="65" y="143" text-anchor="middle" font-size="9" fill="#ddd">Pass through to orig</text><text x="65" y="154" text-anchor="middle" font-size="9" fill="#ddd">in</text><rect x="10" y="165" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="181" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blocked</text><text x="65" y="173" text-anchor="middle" font-size="9" fill="#ddd">403 / redirect / cap</text><text x="65" y="184" text-anchor="middle" font-size="9" fill="#ddd">tcha</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="320" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="320" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="148" x2="150" y2="148" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="178" x2="150" y2="178" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="100" width="160" height="50" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="240" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Geo Blocking Logic</text><text x="240" y="133" text-anchor="middle" font-size="9" fill="#ddd">Whitelist? Blacklist? VPN det</text><text x="240" y="144" text-anchor="middle" font-size="9" fill="#ddd">ected? Custom rules?</text><text x="240" y="215" font-size="9" fill="#666" text-anchor="middle">Geo Blocking: Restrict content by geography at edg</text><text x="240" y="227" font-size="9" fill="#666" text-anchor="middle">e. GeoIP + whitelist/blacklist + VPN detection.</text></svg>',codeExamples:[{title:"CloudFront Geo Restriction via Console",useCase:"Setting up geo blocking.",code:`# AWS Console:
# CloudFront -> Distribution -> Restrictions -> Geo Restriction

# Option 1: Whitelist (Allow List)
# Select countries to ALLOW traffic from
# All other countries get 403 Forbidden

# Option 2: Blacklist (Block List)
# Select countries to BLOCK traffic from
# All other countries are allowed

# Geo restriction is applied per distribution
# Uses MaxMind GeoIP database
# Cannot customize block response page natively`,description:"CloudFront console geo restriction setup with whitelist/blacklist options."},{title:"Cloudflare Geo Blocking via WAF",useCase:"Geo blocking with Cloudflare WAF.",code:`# Block traffic from specific countries:

# Dashboard: Security -> WAF -> Custom Rules
# Expression: (ip.geoip.country in {"XX" "YY" "ZZ"})
# Action: Block

# Or via API:
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/$RULESET_ID/rules" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"action": "block", "expression": "(ip.geoip.country in {\\"XX\\" \\"YY\\"})", "description": "Geo Block"}'

# Cloudflare uses its own GeoIP (more accurate)
# Can combine with IP reputation scoring`,description:"Cloudflare WAF geo blocking with country-specific rules."},{title:"Fastly Geo Blocking in VCL",useCase:"Geo blocking with Fastly VCL.",code:`sub vcl_recv {
  # Block high-threat regions
  if (req.http.Fastly-Geo-Country ~ "(XX|YY|ZZ)") {
    error 403 "Access denied from your region";
  }

  # Only allow US traffic for licensed content
  if (req.url ~ "^/licensed/" && req.http.Fastly-Geo-Country != "US") {
    error 403 "Content not available in your region";
  }

  # Custom block page (serve from Fastly)
  if (req.http.Fastly-Geo-Country == "XX") {
    set req.url = "/blocked.html";
    error 900 "Blocked";
  }
}
sub vcl_error {
  if (obj.status == 900) {
    set obj.status = 403;
    return (deliver);
  }
}`,description:"Fastly VCL geo blocking with custom block pages and selective blocking."},{title:"Akamai Geo Blocking via Property Manager",useCase:"Geo blocking with Akamai.",code:`# Akamai Property Manager:
# Add behavior -> Access Control ->
# "Deny Access Based on Country"

# Configuration:
# - Select Deny or Allow behavior
# - Country list (multi-select)
# - Response: 403 Forbidden or custom

# Match criteria:
# - Country code from GeoIP
# - Can combine with other criteria
#   (path, device, cookie)

# Also available via Akamai API (PAPI)
# Can use EdgeWorkers for complex logic`,description:"Akamai Property Manager geo blocking configuration."},{title:"VPN/Proxy Detection with Geo Blocking",useCase:"Detecting geo-block bypass attempts.",code:`# Cloudflare VPN/Proxy detection:
# Field: cf.edge.server_ip_type
# Values: "vpn", "proxy", "tor", "hosting"
# Available in WAF expressions

# WAF rule: Block VPN + blocked country
expression: 
  (ip.geoip.country eq "XX") or 
  (cf.edge.server_ip_type eq "vpn")

# Rate limiting proxy users:
# If IP type is proxy, apply stricter limits
# e.g., 5 req/min instead of 100 req/min

# Drawback: false positives for legitimate users
# traveling or using corporate VPNs`,description:"VPN and proxy detection to strengthen geo blocking effectiveness."}],mcqQuestions:[{question:"What is geo blocking?",options:["Blocking all traffic","Restricting content by geographic location","Blocking IP addresses","Blocking content types"],answer:1,explanation:"Geo blocking restricts content by the user\\'s geographic location."},{question:"Where does geo blocking happen?",options:["At the origin server","At the CDN edge","At the DNS server","At the client browser"],answer:1,explanation:"Geo blocking happens at the CDN edge before reaching the origin."},{question:"What is the accuracy of country-level GeoIP?",options:["~50%","~80%","~99%","~60%"],answer:2,explanation:"Country-level GeoIP is approximately 99% accurate."},{question:"What does a whitelist geo block do?",options:["Allows all countries","Allows only listed countries","Blocks only listed countries","Allows all traffic"],answer:1,explanation:"A whitelist only allows traffic from specified countries."},{question:"How can users bypass geo blocking?",options:["Using a different browser","Using VPNs/proxies","Clearing cookies","Disabling JavaScript"],answer:1,explanation:"Users commonly use VPNs or proxies to bypass geo blocking."},{question:"What is GDPR-related geo blocking?",options:["Blocking EU users","Keeping EU data within EU regions","Blocking all traffic","Allowing EU users"],answer:1,explanation:"GDPR-related geo blocking keeps EU user data within EU regions."}]};export{e as cdn_geo_blocking};
