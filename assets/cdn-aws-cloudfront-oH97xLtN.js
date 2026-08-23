const e={id:"cdn-aws-cloudfront",title:"AWS CloudFront",difficulty:"beginner",estimatedMinutes:15,tldr:["Amazon CloudFront is a fast content delivery network (CDN) service by AWS. It integrates deeply with other AWS services (S3, EC2, ALB, Lambda@Edge, AWS WAF, Shield).","Key features: 450+ edge PoPs, regional edge caches, Lambda@Edge for compute at edge, origin shield, real-time logs, field-level encryption, and continuous deployment support.","CloudFront is pay-as-you-go with no upfront fees. Pricing varies by region (tiered pricing). Data transfer out to internet is the primary cost driver.","CloudFront is deeply integrated with the AWS ecosystem, making it the preferred CDN for workloads already running on AWS."],laymanDefinition:"AWS CloudFront is like Amazon's global delivery network, deeply linked with the entire Amazon ecosystem (S3, EC2, Lambda). If your website is on AWS, CloudFront is the delivery truck that takes your warehouse goods (S3) and drives them to local depots (edge locations) near your customers.",deepDive:[{heading:"Global Infrastructure",text:"450+ edge locations (PoPs) in 90+ cities. Regional edge caches (larger capacity, lower egress costs in some regions). Origin shield: additional caching layer to reduce origin load. 13 regional edge cache locations worldwide."},{heading:"Lambda@Edge",text:"Serverless compute at CloudFront edge. Node.js and Python. Triggers: viewer-request, viewer-response, origin-request, origin-response. Use cases: A/B testing, URL rewrites, header modification, authentication, image transformation. Max 5-second execution. 128-3008 MB memory."},{heading:"Security Integration",text:"AWS WAF: managed rules, custom rules, rate limiting, bot control. AWS Shield: Standard (free), Advanced ($3k/mo, enhanced protection). Field-level encryption: encrypt sensitive data at edge. Signed URLs and cookies: time-limited access. Origin access control (OAC): secure S3 origins."},{heading:"Origin Options",text:"S3 bucket (static content, OAC ensures private access). EC2/ALB (dynamic content, custom apps). HTTP/HTTPS origin (external servers). Media Services (MediaPackage, MediaStore for video). Multi-origin with path pattern routing. Origin groups for failover."},{heading:"Pricing and Cost Optimization",text:"Regional tiered pricing: US/Europe (cheapest), South America/Australia (most expensive). Free tier: 1TB/month for 12 months. Cost factors: data transfer out, request count (HTTP/HTTPS), regional edge cache. Savings: use reserved capacity pricing for predictable traffic."}],interviewAnswer:"AWS CloudFront is a global CDN with deep AWS integration. Features include Lambda@Edge, AWS WAF/Shield, 450+ edge PoPs, origin shield, signed URLs, and flexible origin options. Pricing is pay-as-you-go with regional tiering.",interviewQuestions:[{question:"What is AWS CloudFront?",answer:"AWS\\'s global content delivery network (CDN) service."},{question:"How many edge locations does CloudFront have?",answer:"450+ edge locations in 90+ cities globally."},{question:"What is Lambda@Edge?",answer:"Serverless compute at CloudFront edge locations for request/response modification."},{question:"How does CloudFront integrate with S3?",answer:"S3 as origin with Origin Access Control (OAC) for secure private access."},{question:"What is Origin Shield?",answer:"Additional caching layer that reduces load on the origin server."},{question:"What is AWS Shield?",answer:"DDoS protection service — Standard (free) or Advanced ($3k/month)."},{question:"How does CloudFront pricing work?",answer:"Pay-as-you-go with regional tiered pricing. Free tier: 1TB/month."},{question:"What is field-level encryption?",answer:"Encrypting sensitive data fields at the CloudFront edge."},{question:"What are CloudFront origin groups?",answer:"Group of origins for failover — primary + secondary origin."},{question:"What is CloudFront OAC?",answer:"Origin Access Control — restricts S3 access to only CloudFront."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">AWS CloudFront</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Browser</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge PoP</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">450+ locations</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Regional Cache</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">13 globally</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="160" height="50" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="240" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Lambda@Edge</text><text x="240" y="68" text-anchor="middle" font-size="9" fill="#ddd">Compute at edge: Node.js, Pyt</text><text x="240" y="79" text-anchor="middle" font-size="9" fill="#ddd">hon</text><rect x="160" y="95" width="160" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="240" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Origin Shield</text><text x="240" y="114" text-anchor="middle" font-size="9" fill="#ddd">Cache layer</text><line x1="320" y1="60" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="320" y1="60" x2="370" y2="72" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="320" y1="108" x2="370" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">AWS WAF</text><text x="430" y="109" text-anchor="middle" font-size="9" fill="#ddd">+ Shield</text><rect x="380" y="130" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="430" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">S3/EC2/ALB</text><text x="430" y="149" text-anchor="middle" font-size="9" fill="#ddd">Origin</text><text x="240" y="200" font-size="9" fill="#666" text-anchor="middle">CloudFront: AWS CDN with Lambda@Edge, WAF/Shield, </text><text x="240" y="212" font-size="9" fill="#666" text-anchor="middle">450+ PoPs, S3/EC2/ALB origins, OAC.</text></svg>',codeExamples:[{title:"Creating a CloudFront Distribution",useCase:"AWS CLI creation of CloudFront distribution.",code:`# Create CloudFront distribution for S3 origin:
aws cloudfront create-distribution \\
  --distribution-config '{
    "CallerReference": "my-distribution-1",
    "Origins": {
      "Quantity": 1,
      "Items": [{
        "Id": "myS3Origin",
        "DomainName": "my-bucket.s3.amazonaws.com",
        "S3OriginConfig": { "OriginAccessIdentity": "" }
      }]
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "myS3Origin",
      "ViewerProtocolPolicy": "redirect-to-https",
      "AllowedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100"
  }'

# PriceClass: PriceClass_100 (US/Europe only, cheapest)
#            PriceClass_200 (most regions)
#            PriceClass_All (all edge locations)`,description:"AWS CLI command to create a CloudFront distribution for an S3 origin."},{title:"Lambda@Edge for URL Rewrites",useCase:"Adding Lambda@Edge to CloudFront.",code:`// lambda-edge-url-rewrite.js
exports.handler = async (event) => {
  const request = event.Records[0].cf.request;
  const uri = request.uri;

  // Rewrite /articles/123 to /index.html?article=123
  const match = uri.match(/^\\/articles\\/(\\d+)$/);
  if (match) {
    request.uri = "/index.html";
    request.querystring = \`article=\${match[1]}\`;
  }

  // Add security headers
  request.headers["x-forwarded-for"] = [{
    key: "X-Forwarded-For",
    value: request.clientIp
  }];

  return request;
};

# Deploy to us-east-1 (required) and associate with CloudFront
aws lambda create-function --function-name url-rewrite --runtime nodejs18.x --handler index.handler --zip-file fileb://function.zip`,description:"Lambda@Edge function for URL rewriting and header modification at CloudFront edge."},{title:"CloudFront with S3 Origin (Static Site)",useCase:"Static site hosting with CloudFront.",code:`# 1. Create S3 bucket (must match domain name)
aws s3 mb s3://www.example.com --region us-east-1

# 2. Upload static files
aws s3 sync ./build/ s3://www.example.com/

# 3. Create CloudFront OAC
aws cloudfront create-origin-access-control \\
  --origin-access-control-config '{"Name":"my-oac","Description":"","SigningProtocol":"sigv4","SigningBehavior":"always","OriginAccessControlOriginType":"s3"}'

# 4. Create distribution (enable OAC)
# 5. Update S3 bucket policy to allow CloudFront
aws s3api put-bucket-policy --bucket www.example.com --policy '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"cloudfront.amazonaws.com"},"Action":"s3:GetObject","Resource":"arn:aws:s3:::www.example.com/*","Condition":{"StringEquals":{"AWS:SourceArn":"arn:aws:cloudfront::123456789:distribution/E123456789ABCD"}}}]}'

# 6. Set Route53 alias to CloudFront domain`,description:"Complete setup of static site with S3 + CloudFront + OAC."},{title:"CloudFront Origin Failover",useCase:"Configuring origin groups for failover.",code:`# Create origin group with primary + secondary:
aws cloudfront update-distribution \\
  --id E123456789ABCD \\
  --distribution-config '{
    "OriginGroups": {
      "Quantity": 1,
      "Items": [{
        "Id": "my-origin-group",
        "FailoverCriteria": { "StatusCodes": { "Quantity": 4, "Items": [500,502,503,504] } },
        "Members": {
          "Quantity": 2,
          "Items": [
            { "OriginId": "primary-us-east-1" },
            { "OriginId": "secondary-eu-west-1" }
          ]
        }
      }]
    }
  }'

# When primary returns 5xx, CloudFront automatically
# fails over to the secondary origin.
# Seamless for end users.`,description:"CloudFront origin group for automatic failover with status code monitoring."},{title:"CloudFront Real-Time Logs",useCase:"Setting up real-time log streaming.",code:`# Enable real-time log configuration:
aws cloudfront create-realtime-log-config \\
  --name "cdn-logs" \\
  --sampling-rate 100 \\
  --end-point '{
    "StreamType": "Kinesis",
    "KinesisStreamConfig": {
      "RoleArn": "arn:aws:iam::123456789:role/cloudfront-logs",
      "StreamArn": "arn:aws:kinesis:us-east-1:123456789:stream/cdn-logs"
    }
  }' \\
  --fields "timestamp, c-ip, sc-status, cs-uri-stem, cs-user-agent, x-edge-location, cs-referer, sc-content-type, sc-content-len"

# Attach to distribution behavior:
aws cloudfront update-distribution \\
  --id E123456789ABCD \\
  --default-cache-behavior "RealtimeLogConfigArn=arn:aws:cloudfront::123456789:realtime-log-config/cdn-logs"`,description:"CloudFront real-time log configuration with Kinesis stream for monitoring."}],mcqQuestions:[{question:"What is AWS CloudFront?",options:["AWS DNS service","AWS CDN service","AWS compute service","AWS storage service"],answer:1,explanation:"CloudFront is AWS\\'s content delivery network service."},{question:"How many edge locations does CloudFront have?",options:["100","250","450+","1000+"],answer:2,explanation:"CloudFront has 450+ edge locations in 90+ cities."},{question:"What is Lambda@Edge?",options:["AWS Lambda for edge compute","AWS Lambda for serverless","Edge caching","Edge DNS"],answer:0,explanation:"Lambda@Edge runs serverless functions at CloudFront edge locations."},{question:"What is CloudFront OAC?",options:["Origin Access Control for S3","Origin authentication","Access control list","Origin audit"],answer:0,explanation:"OAC restricts S3 access to CloudFront only."},{question:"What is Origin Shield?",options:["DDoS protection","Additional caching layer","WAF service","DNS service"],answer:1,explanation:"Origin Shield is an additional caching layer."},{question:"What does PriceClass_100 mean?",options:["100 edge locations","US and Europe only (cheapest)","All locations","100 cheapest locations"],answer:1,explanation:"PriceClass_100 uses only US/Europe edge locations."}]};export{e as cdn_aws_cloudfront};
