const e={id:"cdn-azure-cdn",title:"Azure CDN",difficulty:"beginner",estimatedMinutes:15,tldr:["Azure CDN is Microsoft's content delivery network service, integrated with Azure services. It offers multiple product tiers: Azure CDN Standard (Microsoft), Standard (Akamai), Standard/Premium (Verizon).","Key features: global edge network (Microsoft: 200+ PoPs, Akamai: 2500+, Verizon: 150+), integration with Azure services (Blob Storage, Web Apps, Media Services), custom rules engine, and DDoS protection.","Azure CDN supports dynamic site acceleration (DSA), media streaming optimization, large file optimization, and HTTPS custom domains with managed certificates.","Pricing is pay-as-you-use with regional tiering. Each tier has different features, performance characteristics, and pricing."],laymanDefinition:"Azure CDN is like Microsoft's answer to fast content delivery, offering a choice of delivery partners: Microsoft's own integrated network, Akamai's massive global network, or Verizon's reliable infrastructure. You choose your delivery fleet based on your needs and budget.",deepDive:[{heading:"Azure CDN Product Tiers",text:"Microsoft Standard: 200+ PoPs, integrated with Azure, rules engine. Akamai Standard: 2500+ PoPs, best for media streaming, DSA. Verizon Standard: 150+ PoPs, large file optimization. Verizon Premium: advanced rules engine, analytics, custom reporting."},{heading:"Rules Engine (Verizon Premium, Microsoft)",text:"URL redirects, rewrites, header modification, cache behavior overrides, compression controls, protocol restrictions. Order-based rule processing. Conditions: URL path, query string, request header, request method, device type, country code."},{heading:"Dynamic Site Acceleration (DSA)",text:"Route optimization for dynamic/noncacheable content. TCP optimizations, route prefetch, performance monitoring. Available on Akamai tier. Reduces latency for dynamic content by 10-30% via optimized routing."},{heading:"Azure Integration",text:"Azure Blob Storage origin: direct CDN integration. Azure Web Apps: CDN with custom domain, HTTPS. Azure Media Services: streaming endpoints. CDN endpoint management through Azure Portal, CLI, PowerShell, ARM templates."},{heading:"Security Features",text:"Geo-filtering: restrict by country. Token authentication: time-limited access. HTTPS: custom domains with Free TLS/SSL (Microsoft-managed or bring your own). DDoS protection: Azure DDoS Basic included. WAF: available with Azure Front Door (modern alternative)."}],interviewAnswer:"Azure CDN offers three tiers (Microsoft, Akamai, Verizon) integrated with Azure services. Features include rules engine, DSA, geo-filtering, token auth, and HTTPS custom domains. Choose tier based on feature needs, performance, and budget.",interviewQuestions:[{question:"What are the tiers of Azure CDN?",answer:"Microsoft Standard, Akamai Standard, Verizon Standard, Verizon Premium."},{question:"How many PoPs does Azure CDN Microsoft tier have?",answer:"200+ PoPs globally."},{question:"What is DSA in Azure CDN?",answer:"Dynamic Site Acceleration for optimizing non-cacheable dynamic content."},{question:"What is the Azure CDN rules engine?",answer:"Rules for URL redirect, header modification, cache override (Verizon Premium/Microsoft)."},{question:"What Azure services can be CDN origins?",answer:"Blob Storage, Web Apps, Media Services, Cloud Services."},{question:"How does geo-filtering work?",answer:"Allowing or blocking traffic based on country code at the CDN edge."},{question:"What is token authentication?",answer:"Time-limited access with cryptographic tokens (Verizon tier)."},{question:"Does Azure CDN support custom domain HTTPS?",answer:"Yes, with managed TLS/SSL certificates (free)."},{question:"What is Azure Front Door?",answer:"Modern global load balancer + CDN + WAF (successor to traditional CDN)."},{question:"What is the largest Azure CDN network?",answer:"Akamai tier with 2500+ PoPs globally."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Azure CDN</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tier: Microsoft</text><text x="65" y="43" text-anchor="middle" font-size="9" fill="#ddd">200+ PoPs, Rules eng</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">ine</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tier: Akamai</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">2500+ PoPs, DSA</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tier: Verizon</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">150+ PoPs, Premium</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="140" height="75" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="230" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Azure CDN</text><text x="230" y="82" text-anchor="middle" font-size="9" fill="#ddd">Rules engine, geo-filteri</text><text x="230" y="93" text-anchor="middle" font-size="9" fill="#ddd">ng, token auth, DSA, HTTP</text><text x="230" y="104" text-anchor="middle" font-size="9" fill="#ddd">S custom domains.</text><line x1="300" y1="70" x2="350" y2="50" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="300" y1="70" x2="350" y2="90" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="360" y="35" width="100" height="70" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="410" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Azure Origins</text><text x="410" y="77" text-anchor="middle" font-size="9" fill="#ddd">Blob Storage, Web </text><text x="410" y="88" text-anchor="middle" font-size="9" fill="#ddd">Apps, Media Servic</text><text x="410" y="99" text-anchor="middle" font-size="9" fill="#ddd">es</text><text x="240" y="195" font-size="9" fill="#666" text-anchor="middle">Azure CDN: Three tiers (Microsoft, Akamai, Verizon</text><text x="240" y="207" font-size="9" fill="#666" text-anchor="middle">) with rules engine, DSA, geo-filtering, token aut</text><text x="240" y="219" font-size="9" fill="#666" text-anchor="middle">h, Azure integration.</text></svg>',codeExamples:[{title:"Creating Azure CDN Endpoint (Portal)",useCase:"Azure CDN setup via Portal.",code:`# 1. Create CDN profile:
#    Azure Portal -> CDN profiles -> Create
#    Name: my-cdn-profile
#    Pricing tier: Standard Microsoft / Standard Akamai / Standard Verizon
#    Resource group: my-rg

# 2. Create endpoint:
#    CDN profile -> + Endpoint
#    Name: my-endpoint
#    Origin type: Storage / Web App / Custom origin
#    Origin hostname: myblob.blob.core.windows.net
#    Origin path: /static
#    Optimized for: General web delivery / Video on demand / Large file / Dynamic site acceleration

# 3. Endpoint URL: my-endpoint.azureedge.net
#    Custom domain: cdn.example.com
#    HTTPS: Enable (free managed TLS)`,description:"Azure CDN profile and endpoint creation through Azure Portal with origin configuration."},{title:"Azure CDN with Blob Storage (CLI)",useCase:"Azure CLI CDN setup.",code:`# Create storage account (origin)
az storage account create --name mystoragecdn --resource-group my-rg --sku Standard_LRS --allow-blob-public-access true

# Enable static website
az storage blob service-properties update --account-name mystoragecdn --static-website --404-document 404.html --index-document index.html

# Create CDN profile
az cdn profile create --name my-cdn-profile --resource-group my-rg --sku Standard_Microsoft

# Create CDN endpoint
az cdn endpoint create --name my-endpoint --profile-name my-cdn-profile --resource-group my-rg --origin mystoragecdn.blob.core.windows.net --origin-host-header mystoragecdn.blob.core.windows.net

# Enable custom domain HTTPS
az cdn custom-domain enable-https --endpoint-name my-endpoint --profile-name my-cdn-profile --resource-group my-rg --name www-example-com`,description:"Azure CLI commands for CDN with Blob Storage static website origin."},{title:"Azure CDN Rules Engine (Microsoft)",useCase:"Creating cache rules.",code:`# Rule: Cache all images for 30 days
# Via Azure Portal: CDN Endpoint -> Rules Engine -> Add Rule

# Rule name: "cache-images-long"
# Order: 1

# If: Url Path Extension
#   Value: .jpg
#   Operator: Contains

# Conditions (optional):
#   Country Code: Not "CN"

# Actions:
#   Cache expiration: Override
#   Set cache duration: 30 days
#   Set cache behavior: Override origin

# Save and the rule is processed at edge
# Multiple rules are evaluated in order (lowest number first)
# Rules engine is available on Microsoft and Verizon Premium tiers`,description:"Azure CDN Microsoft tier rules engine configuration for image caching."},{title:"Azure CDN Geo-Filtering",useCase:"Restricting content by country.",code:`# Geo-filtering via Azure Portal:
# CDN Endpoint -> Geo-filtering -> Add Rule

# Rule: Allow traffic only from US and Canada
# Action: Allow
# Country codes: US, CA
# Path: /protected/*

# Rule: Block all other countries
# Action: Block
# Country codes: *
# Path: /protected/*

# Via CLI:
az cdn endpoint update --name my-endpoint --profile-name my-cdn-profile --resource-group my-rg --set geoFilters='[{"relativePath":"/protected/*","action":"Allow","countryCodes":["US","CA"]}]'

# Geo-filtering is available on Verizon Premium
# and Microsoft Standard tiers`,description:"Azure CDN geo-filtering rules for allowing/blocking countries at edge."},{title:"Azure CDN Token Authentication",useCase:"Time-limited access with tokens.",code:`# Token authentication is available on Verizon Premium tier
# Steps:

# 1. Generate encryption key (32 chars)
# 2. Configure token auth in Azure Portal:
#    Endpoint -> Token Authentication -> Configure
#    Primary key: your-32-char-key
#    Algorithm: SHA256

# 3. Generate token URL:
#    Token format:
#    https://cdn.example.com/file.pdf?ec_expire=1712345678&ec_key=your-key&ec_hash=base64hash

# 4. Server generates token (C# example):
// string token = TokenAuth.GenerateToken(
//     "your-32-char-key",
//     "/file.pdf",
//     DateTime.UtcNow.AddHours(1));

# 5. CDN validates:
#    - Hash matches (tamper check)
#    - Expiration not passed
#    - Returns 403 if invalid`,description:"Azure CDN token authentication for time-limited content access on Verizon Premium."}],mcqQuestions:[{question:"What are the three Azure CDN tiers?",options:["Basic, Standard, Premium","Microsoft, Akamai, Verizon","Free, Pro, Enterprise","Lite, Standard, Pro"],answer:1,explanation:"Azure CDN tiers are Microsoft, Akamai, and Verizon."},{question:"Which tier has the most PoPs?",options:["Microsoft (200+)","Akamai (2500+)","Verizon (150+)","Equal"],answer:1,explanation:"Akamai tier has 2500+ PoPs globally."},{question:"What is DSA in Azure CDN?",options:["Data storage accelerator","Dynamic Site Acceleration","Direct server access","Data security appliance"],answer:1,explanation:"DSA is Dynamic Site Acceleration for non-cacheable content."},{question:"Which Azure service is commonly used with CDN?",options:["Azure Functions","Blob Storage","Azure DevOps","Azure AD"],answer:1,explanation:"Azure Blob Storage is commonly used as CDN origin."},{question:"What does geo-filtering do?",options:["Block by IP","Block by country","Block by user agent","Block by device"],answer:1,explanation:"Geo-filtering restricts content by country code."},{question:"What is Azure Front Door?",options:["Older CDN product","Modern CDN + WAF + global load balancer","DNS service","Firewall service"],answer:1,explanation:"Azure Front Door is the modern successor combining CDN, WAF, and global load balancing."}]};export{e as cdn_azure_cdn};
