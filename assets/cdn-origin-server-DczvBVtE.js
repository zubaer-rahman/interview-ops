const e={id:"cdn-origin-server",title:"Origin Server",difficulty:"beginner",estimatedMinutes:15,tldr:["The origin server is the authoritative source of original content — the primary server where the website or application is hosted.","The CDN pulls content from the origin server when it is not cached at the edge. The origin is the fallback for cache misses.","Origin servers can be: web servers (Nginx, Apache), cloud storage (S3 bucket, Google Cloud Storage), or application servers.","Best practices: configure appropriate Cache-Control headers on the origin, implement health checks, use origin shielding, and ensure the origin can handle CDN fetch traffic."],laymanDefinition:"The origin server is the central kitchen in a restaurant chain. Local branches (edge servers) keep popular dishes ready to serve. But if someone orders something unusual, the branch calls the central kitchen to prepare it fresh. The central kitchen is the source of truth for all recipes and ingredients — without it, no branch can make anything new.",deepDive:[{heading:"Origin Server Responsibilities",text:"The origin hosts the authoritative version of all content. When a CDN edge misses the cache, it makes a request to the origin. The origin responds with the content and Cache-Control headers that tell the CDN how long to cache it. The origin must be available, fast, and correctly configured for CDN usage."},{heading:"Types of Origin Servers",text:"Web servers (Nginx, Apache, Caddy): serve dynamic and static content. Cloud storage (AWS S3, GCS, Azure Blob): serve static files directly. Application servers (Node.js, Python/WSGI, Ruby/Puma): generate dynamic responses. Load balancers (ELB, HAProxy): distribute traffic across multiple origin instances."},{heading:"Origin Health and Monitoring",text:"CDNs continuously monitor origin health through health checks (HTTP GET to a configured path). If the origin is unhealthy, the CDN serves stale content from cache (stale-while-revalidate) or routes to a backup origin. Configure origin timeout, connection attempts, and health check intervals."},{heading:"Origin Shielding",text:"A dedicated cache tier that sits between edge servers and the origin. All edge location misses go through the shield, which caches content and serves subsequent requests without hitting the origin. Prevents cache stampede (thundering herd) where many edges all miss simultaneously and overwhelm the origin."},{heading:"Origin Cache-Control Configuration",text:"The origin sets TTL via Cache-Control headers. public: any cache can store. private: only browser cache (not CDN). max-age: seconds to cache. s-maxage: CDN-specific TTL (overrides max-age). stale-while-revalidate: serve stale while fetching fresh. must-revalidate: must check origin after expiry. Correct configuration is critical for CDN performance."}],interviewAnswer:"The origin server is the authoritative source of content that the CDN pulls from. It must be properly configured with Cache-Control headers, health checks, and sufficient capacity to handle CDN fetch traffic. Origin shielding prevents cache stampedes and reduces origin load.",interviewQuestions:[{question:"What is an origin server?",answer:"The authoritative source server where original content is hosted — the CDN pulls content from it on cache misses."},{question:"What types of servers can be origins?",answer:"Web servers (Nginx, Apache), cloud storage (S3, GCS), application servers (Node.js), and load balancers."},{question:"What is origin shielding?",answer:"A dedicated cache tier between edge servers and the origin that aggregates requests to prevent cache stampedes."},{question:"What is a cache stampede (thundering herd)?",answer:"When many edge servers all miss cache simultaneously and overwhelm the origin with requests."},{question:"What headers control CDN caching from origin?",answer:"Cache-Control: max-age, s-maxage, public, private, stale-while-revalidate, must-revalidate."},{question:"What happens when the origin is unhealthy?",answer:"CDN serves stale cached content (stale-while-revalidate) or routes to a backup origin."},{question:"What is the purpose of CDN health checks?",answer:"To continuously monitor origin availability and route traffic away from unhealthy origins."},{question:"What is the difference between public and private Cache-Control?",answer:"public allows CDN caching; private restricts caching to the browser only."},{question:"How does s-maxage differ from max-age?",answer:"s-maxage overrides max-age for shared caches (CDNs) while max-age applies to browser caches."},{question:"Should an origin serve gzip-compressed content to CDNs?",answer:"Yes, it reduces transfer time between origin and edge servers, improving cache fill performance."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Origin Server</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User Browser</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Requests content</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN Edge</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">Cache check</text><line x1="290" y1="48" x2="320" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="170" y1="65" x2="170" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="300" y="35" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="355" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin Shield</text><text x="355" y="54" text-anchor="middle" font-size="9" fill="#ddd">Request aggregator</text><line x1="410" y1="48" x2="440" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="450" y="35" width="30" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="465" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin</text><text x="465" y="43" text-anchor="middle" font-size="9" fill="#ddd">Auth conte</text><text x="465" y="54" text-anchor="middle" font-size="9" fill="#ddd">nt</text><rect x="160" y="75" width="130" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="225" y="91" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache HIT</text><text x="225" y="94" text-anchor="middle" font-size="9" fill="#ddd">Serve from edge</text><rect x="160" y="105" width="130" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="225" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache MISS</text><text x="225" y="124" text-anchor="middle" font-size="9" fill="#ddd">Fetch from origin</text><text x="240" y="195" font-size="9" fill="#666" text-anchor="middle">Origin Server: The authoritative source of content</text><text x="240" y="207" font-size="9" fill="#666" text-anchor="middle">. CDN fetches from origin on cache misses.</text></svg>',codeExamples:[{title:"Nginx Origin CORS Configuration",useCase:"Setting up CORS headers for CDN origin.",code:`server {
  listen 8080;
  server_name origin.example.com;

  # Cache-Control for different content types
  location /static/ {
    root /var/www;
    add_header Cache-Control "public, max-age=31536000, immutable";
    expires 1y;
  }

  location /api/ {
    proxy_pass http://app-server:3000;
    # Dynamic content: short cache or no cache
    add_header Cache-Control "no-cache, private";
  }

  # CORS for CDN access
  location / {
    add_header Access-Control-Allow-Origin "*";
    add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS";
    add_header Access-Control-Max-Age 86400;
  }
}`,description:"Nginx origin configuration with Cache-Control and CORS headers for CDN delivery."},{title:"S3 Bucket as CDN Origin",useCase:"Configuring S3 as CloudFront origin.",code:`# Create S3 bucket with public read access policy
aws s3api create-bucket \\
  --bucket my-cdn-origin-bucket \\
  --region us-east-1

# Block public access (if using OAI)
aws s3api put-public-access-block \\
  --bucket my-cdn-origin-bucket \\
  --public-access-block-configuration
  "BlockPublicAcls=true,IgnorePublicAcls=true,
   BlockPublicPolicy=true,RestrictPublicBuckets=true"

# Create Origin Access Identity (OAI)
aws cloudfront get-cloud-front-origin-access-identity

# Bucket policy to allow CloudFront only
echo '{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E12345"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-cdn-origin-bucket/*"
  }]
}' > policy.json
aws s3api put-bucket-policy --bucket my-cdn-origin-bucket --policy file://policy.json`,description:"S3 bucket configured as a private origin for CloudFront using Origin Access Identity."},{title:"Origin Health Check Configuration",useCase:"Setting up CDN health checks.",code:`# CloudFront origin health check configuration
# Configured in origin settings:

# Origin Domain: origin.example.com
# Origin Path: /health
# Connection Attempts: 3
# Connection Timeout: 10 seconds
# Response Timeout: 30 seconds
# Keep Alive: 5 seconds

# Health check response (origin side):
# GET /health
# Response: 200 OK
# Body: {"status": "healthy"}

# If health check fails N times:
# CDN marks origin as unhealthy
# Serves stale content from cache
# Retries health check periodically

# Example Nginx health endpoint:
location /health {
  access_log off;
  return 200 "healthy\\n";
  add_header Content-Type text/plain;
}`,description:"CDN origin health check configuration with Nginx health endpoint example."},{title:"Origin Cache Stampede Prevention",useCase:"Using origin shielding to prevent overload.",code:`# Problem: Cache Stampede (Thundering Herd)
# When cache expires, many edge locations
# simultaneously request the same content from origin
# This overwhelms the origin server

# Solution 1: Origin Shielding (CloudFront)
# Regional edge cache aggregates requests
# Only one request goes to origin per region
# Automatically enabled in CloudFront

# Solution 2: stale-while-revalidate
# Serve stale content while async refresh happens
# Cache-Control: public, max-age=3600,
#   stale-while-revalidate=86400

# Solution 3: Request collapsing (Fastly)
# Fastly automatically collapses simultaneous
# requests for the same URL to a single origin request

# Solution 4: Use a CDN with shield tier
# CloudFront regional cache, Fastly shielding,
# Varnish shield nodes`,description:"Techniques to prevent cache stampedes from overwhelming the origin server."},{title:"Multiple Origin Setup (CloudFront)",useCase:"Configuring multiple origins for failover.",code:`# CloudFront origin group with failover
aws cloudfront create-origin-group \\
  --distribution-id E123456789ABCD \\
  --origin-group-config \\
    "FailoverCriteria={StatusCodes=[500,502,503,504]},
     Members={OriginItems=[
       {OriginId=primaryOrigin},
       {OriginId=secondaryOrigin}
     ]}"

# Primary origin: app-server-primary.example.com
# Secondary origin: app-server-secondary.example.com
# If primary returns 5xx, CloudFront automatically
# retries the request against the secondary origin

# This provides high availability
# even if one origin goes down`,description:"CloudFront origin groups provide automatic failover between multiple origins."}],mcqQuestions:[{question:"What is the origin server in a CDN?",options:["The CDN cache server","The authoritative source of original content","The DNS resolver","The load balancer"],answer:1,explanation:"The origin server is the authoritative source of original content."},{question:"What is origin shielding?",options:["Encrypting origin traffic","A cache tier that aggregates origin requests","Blocking certain origins","Origin server firewall"],answer:1,explanation:"Origin shielding aggregates edge requests to prevent cache stampedes."},{question:"What does s-maxage do?",options:["Overrides max-age for CDN caches","Sets browser cache time","Defines compression level","Controls SSL settings"],answer:0,explanation:"s-maxage overrides max-age specifically for shared caches (CDNs)."},{question:"What is a cache stampede?",options:["Fast cache hits","Many edges miss cache simultaneously and overload origin","Cache warming runs","Cache memory overflow"],answer:1,explanation:"A cache stampede occurs when many edge servers miss cache at the same time."},{question:"What happens if the origin is unhealthy?",options:["Site goes down","CDN serves stale cached content","CDN stops working","Users see error page"],answer:1,explanation:"CDNs can serve stale content when the origin is unhealthy (stale-while-revalidate)."},{question:"Which Cache-Control value restricts caching to the browser only?",options:["public","private","no-store","must-revalidate"],answer:1,explanation:"Cache-Control: private means only browser caches can store the content, not CDNs."}]};export{e as cdn_origin_server};
