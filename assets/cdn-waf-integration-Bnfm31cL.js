const e={id:"cdn-waf-integration",title:"WAF Integration",difficulty:"intermediate",estimatedMinutes:20,tldr:["A Web Application Firewall (WAF) integrated with a CDN inspects HTTP traffic at the edge, blocking malicious requests before they reach the origin.","WAF protects against: SQL injection, XSS (Cross-Site Scripting), path traversal, command injection, CSRF, file inclusion, and OWASP Top 10 threats.","CDN WAF integrates seamlessly with CDN caching and routing — malicious requests are blocked at the edge, while legitimate traffic is cached and served normally.","Modern CDN WAFs use managed rule sets (OWASP, vendor-specific), custom rules, rate limiting, and machine learning for anomaly detection."],laymanDefinition:"WAF integrated with a CDN is like having a security checkpoint at the entrance of a building, not just at each office door. The security guard checks for weapons, suspicious packages, and known threats before anyone enters. If someone looks suspicious, they are stopped at the entrance, never reaching the offices (origin).",deepDive:[{heading:"WAF at Edge vs Origin",text:"Edge WAF: inspects at CDN edge, blocks before origin. Zero origin load from blocked requests. Lower latency (no origin trip). Origin WAF: inspects at application server. More context-aware but consumes origin resources. CDN WAF is the industry standard."},{heading:"Managed Rule Sets",text:"Pre-built rule sets maintained by CDN vendor. OWASP Top 10 rules (CRS - Core Rule Set). Vendor-specific: Cloudflare Managed, AWS Managed, Fastly Signal Sciences. Regular rule updates from vendor. Customizable (paranoia levels, anomaly thresholds)."},{heading:"Custom WAF Rules",text:"User-defined rules for application-specific threats. Match on: URI, headers, body, cookies, IP, country, device. Actions: block, challenge, log, rate limit, bypass. Use regex or DSL (VCL, Lua). Priority ordering matters. Rule testing and dry-run modes available."},{heading:"WAF Logging and Analytics",text:"Comprehensive logging of blocked/allowed requests. Attack analytics dashboard. Top attack vectors, sources, and targets. Real-time alerts for spikes in blocked traffic. Logs stored for compliance (SIEM integration via log streaming)."},{heading:"WAF Performance Considerations",text:"Edge WAF adds minimal latency (microseconds to low milliseconds). Rule count and complexity affect performance. Heavy regex can slow processing. WAF bypass for static cached resources (images, CSS) reduces unnecessary inspection. Parallel vs sequential rule evaluation."}],interviewAnswer:"CDN WAF inspects HTTP traffic at the edge against managed and custom rules, blocking SQLi, XSS, and OWASP Top 10 threats before they reach origin. It offers managed rule sets, custom rules, rate limiting, ML-based detection, and comprehensive logging.",interviewQuestions:[{question:"What does WAF stand for?",answer:"Web Application Firewall."},{question:"What attacks does WAF protect against?",answer:"SQL injection, XSS, path traversal, command injection, OWASP Top 10."},{question:"Where is the WAF in a CDN architecture?",answer:"At the CDN edge, inspecting traffic before it reaches the origin."},{question:"What is a managed rule set?",answer:"Pre-built WAF rules maintained by the CDN vendor (e.g., OWASP CRS)."},{question:"What is a custom WAF rule?",answer:"User-defined rule for application-specific threats using match criteria and actions."},{question:"What is WAF paranoia level?",answer:"Configurable sensitivity level in OWASP CRS (1-4, higher = more strict)."},{question:"What is WAF bypass?",answer:"Skipping WAF inspection for certain paths or resource types for performance."},{question:"How does WAF impact latency?",answer:"Minimal (microseconds to low milliseconds) when processing at edge."},{question:"What is OWASP CRS?",answer:"Open Web Application Security Project Core Rule Set — standard WAF rules."},{question:"Can WAF block legitimate traffic?",answer:"Yes, false positives are possible. Tuning with log/traffic analysis is essential."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">WAF Integration</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Sends request</text><rect x="350" y="35" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="405" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Malicious User</text><text x="405" y="43" text-anchor="middle" font-size="9" fill="#ddd">SQL injection payloa</text><text x="405" y="54" text-anchor="middle" font-size="9" fill="#ddd">d</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="460" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="180" height="50" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="250" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN Edge WAF</text><text x="250" y="57" text-anchor="middle" font-size="9" fill="#ddd">Inspect: URI, headers, body, coo</text><text x="250" y="68" text-anchor="middle" font-size="9" fill="#ddd">kies. Check: managed rules, cust</text><text x="250" y="79" text-anchor="middle" font-size="9" fill="#ddd">om rules, rate limits.</text><line x1="340" y1="60" x2="400" y2="60" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="410" y="35" width="80" height="50" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="450" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">WAF Action</text><text x="450" y="68" text-anchor="middle" font-size="9" fill="#ddd">Allowed? Block</text><text x="450" y="79" text-anchor="middle" font-size="9" fill="#ddd">? Challenge?</text><line x1="490" y1="60" x2="510" y2="60" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="490" y1="60" x2="160" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="95" width="170" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="235" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin (Protected)</text><text x="235" y="114" text-anchor="middle" font-size="9" fill="#ddd">Legitimate traffic only</text><rect x="160" y="130" width="170" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="245" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blocked (at edge)</text><text x="245" y="149" text-anchor="middle" font-size="9" fill="#ddd">403 Forbidden</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">WAF Integration: Edge-based Web Application Firewa</text><text x="240" y="192" font-size="9" fill="#666" text-anchor="middle">ll blocks OWASP Top 10 threats before reaching ori</text><text x="240" y="204" font-size="9" fill="#666" text-anchor="middle">gin.</text></svg>',codeExamples:[{title:"Cloudflare WAF Managed Rules",useCase:"Enabling Cloudflare managed WAF rules.",code:`# Dashboard: Security -> WAF -> Managed Rules

# Enable OWASP CRS:
# - Paranoia Level: 1 (low) to 4 (high)
# - Anomaly Threshold: 5-100 (lower = strict)
# - Recommended: Level 2, threshold 10

# Enable Cloudflare Managed Ruleset:
# - Contains rules for common attacks
# - Updated automatically by Cloudflare
# - Log mode first to identify false positives

# Via API:
curl -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_request_firewall_custom" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"rules": [{"action": "block", "expression": "(http.request.uri.path contains \\"admin\\")"}]'`,description:"Cloudflare managed WAF rules including OWASP CRS with configurable paranoia levels."},{title:"AWS WAF with CloudFront",useCase:"Integrating AWS WAF with CloudFront.",code:`# Create Web ACL:
aws wafv2 create-web-acl --name "cdn-acl" --scope CLOUDFRONT \\
  --default-action "Allow={}" \\
  --rules '[
    {
      "Name": "AWS-AWSManagedRulesCommonRuleSet",
      "Priority": 0,
      "Statement": { "ManagedRuleGroupStatement": {
        "VendorName": "AWS", "Name": "AWSManagedRulesCommonRuleSet"
      }},
      "OverrideAction": { "None": {} }
    }
  ]'

# Associate with CloudFront:
aws cloudfront associate-web-acl --distribution-id E123456789ABCD \\
  --web-acl-id "arn:aws:wafv2:us-east-1:123456789:global/webacl/cdn-acl/abc123"

# AWS WAF managed rule groups:
# - CommonRuleSet (SQLi, XSS, LFI)
# - AdminProtection (admin area access)
# - KnownBadInputs (probe patterns)
# - AmazonIPReputationList (bot/spam IPs)`,description:"AWS WAF with CloudFront using managed rule groups for comprehensive protection."},{title:"Custom WAF Rule (Cloudflare)",useCase:"Creating custom WAF rules.",code:`# Custom rule: Block requests with suspicious query strings
expression: 
  (starts_with(lower(http.request.uri.query), "select") or 
   starts_with(lower(http.request.uri.query), "union") or 
   starts_with(lower(http.request.uri.query), "drop") or 
   starts_with(lower(http.request.uri.query), "delete"))
action: block

# Custom rule: Challenge login page from unknown IPs
expression: 
  (http.request.uri.path eq "/login") and 
  (not ip.src in {"203.0.113.0/24" "10.0.0.0/8"})
action: managed_challenge

# Test custom rules in Log mode first!
# Monitor Security Events before enabling Block`,description:"Custom WAF rules for SQL injection detection and login page protection."},{title:"Fastly Signal Sciences WAF",useCase:"Fastly WAF (Signal Sciences) integration.",code:`# Fastly WAF (Signal Sciences) features:
# - ML-based attack detection
# - Custom rules and signals
# - Agent-based or edge-based deployment
# - Covers OWASP Top 10 + API security

# VCL integration example:
sub vcl_recv {
  if (req.http.Fastly-SigSci-Attack) {
    error 403 "Blocked by WAF";
  }
}

# Custom signal:
# Dashboard -> WAF -> Custom Signals
# Signal: high_rate_login_attempts
# Condition: >20 POST to /login in 1 min
# Action: block for 5 minutes

# Signal Sciences agent-side:
# Installed on origin, sends telemetry to Fastly
# Edge blocks based on agent + edge signals`,description:"Fastly Signal Sciences WAF with ML detection and custom signals."},{title:"WAF Logging and Analysis",useCase:"Monitoring WAF events.",code:`# Cloudflare Security Events:
# Dashboard: Security -> Events
# Filter by action: block, challenge, log
# View top attack sources, paths, payloads

# Log streaming to SIEM:
# Dashboard: Analytics & Logs -> Logpush
# Destination: S3, Datadog, Splunk, Sumo Logic

# AWS WAF logging:
aws wafv2 put-logging-configuration \\
  --logging-configuration '{"ResourceArn": "arn:aws:wafv2:...", "LogDestinationConfigs": ["arn:aws:firehose:..."]}'

# Analyze logs:
curl -s "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/security/events" \\
  | jq ".result[] | select(.action == "blocked") | .ray_id, .source, .rule_id"

# Set up alerts for WAF blocks exceeding threshold`,description:"WAF logging and analysis with SIEM integration for monitoring blocked traffic."}],mcqQuestions:[{question:"What does a WAF protect against?",options:["Only DDoS","SQL injection, XSS, and OWASP Top 10","Only brute force","Only bot traffic"],answer:1,explanation:"WAF protects against SQLi, XSS, and other OWASP Top 10 threats."},{question:"Where is the WAF located in a CDN?",options:["At the origin server","At the CDN edge","At the client browser","At the DNS server"],answer:1,explanation:"CDN WAF is at the edge, inspecting traffic before origin."},{question:"What is OWASP CRS?",options:["Caching rule system","Core Rule Set for WAF","Content routing service","Certificate revocation system"],answer:1,explanation:"OWASP CRS is the Core Rule Set for WAF."},{question:"What is WAF paranoia level?",options:["Server location","Sensitivity level (1-4)","Cache level","Security level"],answer:1,explanation:"Paranoia level controls WAF sensitivity from 1 (low) to 4 (high)."},{question:"What should you do before enabling custom WAF rules?",options:["Enable immediately","Test in log mode first","Disable other rules","Contact support"],answer:1,explanation:"Always test custom rules in log mode before enabling blocking."},{question:"What is a WAF bypass?",options:["Skipping WAF for certain paths","Bypassing origin","Bypassing cache","Bypassing DNS"],answer:0,explanation:"WAF bypass skips inspection for specific paths or resource types."}]};export{e as cdn_waf_integration};
