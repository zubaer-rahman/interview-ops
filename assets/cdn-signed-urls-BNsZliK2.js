const e={id:"cdn-signed-urls",title:"Signed URLs",difficulty:"intermediate",estimatedMinutes:15,tldr:["Signed URLs provide time-limited, authenticated access to private content. They are URLs with a cryptographic signature, expiration time, and optional IP/country restrictions.","A signed URL grants temporary access to a specific resource (or path prefix). The CDN validates the signature and expiration before serving the content.","Use cases: streaming paywalled video, private file downloads, software package distribution, pay-per-view content, and any time-limited access scenario.","Popular CDNs supporting signed URLs: CloudFront, Cloudflare, Fastly, Akamai. Google Cloud CDN, Azure CDN. Implementation varies slightly but the concept is universal."],laymanDefinition:"A signed URL is like a VIP ticket with an expiry time. The ticket includes a special stamp (signature) that proves it's authentic. When you show the ticket at the venue (CDN), the bouncer checks the stamp and the date. If it's valid and not expired, you're let in. Anyone who could forge the stamp is kept out.",deepDive:[{heading:"How Signed URLs Work",text:"1) Private key held by content provider. 2) Policy created (resource, expiration, optional conditions). 3) Policy signed with private key. 4) Signature appended to URL as query parameter. 5) CDN validates signature with public key. 6) Serves or denies content."},{heading:"Policy and Conditions",text:"Policy (JSON document) specifies: Resource URL or path prefix. Expiration time (absolute epoch). Optional: IP range allowed, date range, user agent pattern. Policy is base64-encoded and signed."},{heading:"Key Pair Management",text:"CloudFront: uses key pairs (public/private). Cloudflare: uses token keys. Fastly: platform-managed or custom keys. Key rotation: regularly rotate private keys. Secure storage: HSM or secrets manager. Multiple key pairs for different access levels."},{heading:"Signed URL vs Signed Cookie",text:"Signed URL: per-file, granular. Signed Cookie: session-based, covers paths. Signed URL: good for direct file links. Signed Cookie: good for HTML pages with embedded resources (downloading multiple files)."},{heading:"Security Best Practices",text:"Short expiration times (minutes to hours, not days). Lock to specific IP if possible (adds security for stolen URLs). Use HTTPS to prevent URL interception. Rotate keys regularly. Monitor access logs for abuse. Rate limit signed URL requests."}],interviewAnswer:"Signed URLs provide time-limited, authenticated access to private CDN content. A cryptographic signature is appended as a query parameter. The CDN validates the signature, expiration, and optional conditions before serving the content.",interviewQuestions:[{question:"What is a signed URL?",answer:"A time-limited URL with a cryptographic signature for authenticated content access."},{question:"What does a signed URL contain?",answer:"Resource URL, expiration time, cryptographic signature, optional conditions."},{question:"How does the CDN validate a signed URL?",answer:"It verifies the signature using the public key and checks expiration/conditions."},{question:"What is a policy in signed URLs?",answer:"A JSON document specifying the resource, expiration, and conditions for access."},{question:"What is the difference between signed URL and signed cookie?",answer:"Signed URL = per-file; Signed Cookie = session-based, covers paths."},{question:"What security best practices apply to signed URLs?",answer:"Short expiration, IP locking, HTTPS, key rotation, access monitoring."},{question:"Which CDNs support signed URLs?",answer:"CloudFront, Cloudflare, Fastly, Akamai, Google Cloud CDN, Azure CDN."},{question:"What is key pair management?",answer:"Managing public/private keys used to sign and validate signed URLs."},{question:"When should you use signed URLs?",answer:"For direct file downloads, streaming video, paywalled content, software packages."},{question:"What happens if a signed URL expires?",answer:"The CDN returns a 403 Forbidden response."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Signed URLs</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="65" y="43" text-anchor="middle" font-size="9" fill="#ddd">Gets signed URL from</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd"> app server</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App Server</text><text x="65" y="73" text-anchor="middle" font-size="9" fill="#ddd">Creates policy, sign</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">s with private key</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="65" y="103" text-anchor="middle" font-size="9" fill="#ddd">Requests content wit</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">h signed URL</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="160" height="75" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="240" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN Edge</text><text x="240" y="82" text-anchor="middle" font-size="9" fill="#ddd">Validates signature with publ</text><text x="240" y="93" text-anchor="middle" font-size="9" fill="#ddd">ic key. Checks expiration + c</text><text x="240" y="104" text-anchor="middle" font-size="9" fill="#ddd">onditions.</text><line x1="320" y1="70" x2="350" y2="55" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="320" y1="70" x2="350" y2="85" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="360" y="40" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="410" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">200 OK</text><text x="410" y="59" text-anchor="middle" font-size="9" fill="#ddd">Serves content</text><rect x="360" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="410" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">403</text><text x="410" y="89" text-anchor="middle" font-size="9" fill="#ddd">Denied</text><text x="240" y="200" font-size="9" fill="#666" text-anchor="middle">Signed URLs: Cryptographic time-limited access. Ap</text><text x="240" y="212" font-size="9" fill="#666" text-anchor="middle">p signs, CDN validates. 200 OK or 403.</text></svg>',codeExamples:[{title:"CloudFront Signed URL Generation (Node.js)",useCase:"Generating CloudFront signed URLs.",code:`const crypto = require("crypto");
const fs = require("fs");

const privateKey = fs.readFileSync("./pk-ABC123456789.pem", "utf8");
const keyPairId = "ABC123456789";
const resource = "https://d123.cloudfront.net/private/video.mp4";

// Create policy
const expiration = Math.floor(Date.now() / 1000) + 3600; // 1 hour
const policy = JSON.stringify({
  Statement: [{
    Resource: resource,
    Condition: { DateLessThan: { "AWS:EpochTime": expiration } }
  }]
});

// Sign policy
const signer = crypto.createSign("RSA-SHA1");
signer.update(policy);
const signature = signer.sign(privateKey, "base64");

// Build signed URL
const signedUrl = \`\${resource}?Expires=\${expiration}&Signature=\${encodeURIComponent(signature)}&Key-Pair-Id=\${keyPairId}\`;
console.log("Signed URL:", signedUrl);`,description:"CloudFront signed URL generation using RSA-SHA1 and a custom policy with expiration."},{title:"CloudFront Signed URL with IP Restriction",useCase:"Adding IP restriction to signed URLs.",code:`const clientIP = "203.0.113.50";
const expiration = Math.floor(Date.now() / 1000) + 3600;

// Policy with IP restriction
const policy = JSON.stringify({
  Statement: [{
    Resource: "https://d123.cloudfront.net/private/*",
    Condition: {
      DateLessThan: { "AWS:EpochTime": expiration },
      IpAddress: { "AWS:SourceIp": \`\${clientIP}/32\` }
    }
  }]
});

// Sign as before...
// The signed URL only works from 203.0.113.50
// If URL is intercepted, different IP = 403`,description:"CloudFront signed URL with IP restriction to prevent URL sharing."},{title:"Cloudflare Signed URL (Token Authentication)",useCase:"Cloudflare token-based signed URLs.",code:`# Dashboard: Speed -> Optimization ->
# Token Authentication -> Enable

# Generate token with token key:
# Use Cloudflare Worker or app server

# Example token generation (Node.js):
const crypto = require("crypto");
const tokenKey = "your_token_key";
const path = "/private/video.mp4";
const expires = Math.floor(Date.now() / 1000) + 3600;
const tokenBody = \`\${expires}\${path}\`;
const token = crypto.createHmac("sha256", tokenKey).update(tokenBody).digest("hex");

# URL format:
# /cdn-cgi/media/expires=\${expires}/token=\${token}/\${path}

# Validation:
# Cloudflare derives the same token and compares
# Rejects if expired or invalid token`,description:"Cloudflare token authentication for signed URLs using HMAC-SHA256."},{title:"Fastly Signed URL with VCL",useCase:"Fastly signed URL implementation.",code:`# Fastly has a "Signed Fetch" feature
# Surrogate key + base64 encoded policy

# VCL to validate signed fetch:
sub vcl_recv {
  if (req.url ~ "^/private/") {
    # Require signed fetch header
    if (!req.http.Fastly-Signed-Fetch) {
      error 403 "Signed fetch required";
    }
    # Optionally validate custom signature in query string
    if (!req.url.qs == "") {
      set req.http.X-Expires = querystring.get(req.url, "expires");
      if (std.time(now, 0) > std.time(req.http.X-Expires, 0)) {
        error 410 "Expired";
      }
    }
  }
}`,description:"Fastly signed URL with VCL validation and expiration checking."},{title:"CloudFront Signed URL Using AWS CLI",useCase:"Generating signed URLs with AWS CLI.",code:`# Requires CloudFront key pair configured
# Key pair ID: K123456789ABC
# Private key file: pk-K123456789ABC.pem

# Generate signed URL with cloudfront-signer (Python):
pip install cloudfront-signer

from cloudfront_signer import CloudFrontSigner
import rsa

with open("pk-K123456789ABC.pem", "rb") as f:
    private_key = rsa.PrivateKey.load_pkcs1(f.read())

signer = CloudFrontSigner("K123456789ABC", lambda m: rsa.sign(m, private_key, "SHA-1"))
url = signer.generate_signed_url(
    {"url": "https://d123.cloudfront.net/private/file.pdf", "date_less_than": "2025-12-31"})
print(f"Signed URL: {url}")`,description:"CloudFront signed URL generation using Python cloudfront-signer library."}],mcqQuestions:[{question:"What is a signed URL?",options:["A public URL","A time-limited authenticated URL","A cached URL","A compressed URL"],answer:1,explanation:"A signed URL is time-limited with cryptographic authentication."},{question:"What happens when a signed URL expires?",options:["Content is compressed","CDN returns 403","CDN returns 404","CDN redirects"],answer:1,explanation:"An expired signed URL returns a 403 Forbidden."},{question:"What algorithm does CloudFront use for signed URLs?",options:["HMAC-SHA256","RSA-SHA1","AES256","MD5"],answer:1,explanation:"CloudFront uses RSA-SHA1 for signing."},{question:"What is a signed URL policy?",options:["URL format","JSON doc with resource, expiration, conditions","Cache policy","Security policy"],answer:1,explanation:"A policy is a JSON document specifying resource, expiration, and conditions."},{question:"What is the difference between signed URL and signed cookie?",options:["Same thing","Signed URL = per-file; Signed Cookie = session-based","Cookie is faster","URL is more secure"],answer:1,explanation:"Signed URL is per-file, signed cookie is session-based covering paths."},{question:"What type of key does signed URL use?",options:["Symmetric key","Asymmetric key pair (public/private)","Session key","Temporary key"],answer:1,explanation:"Signed URLs use asymmetric key pairs for signing and validation."}]};export{e as cdn_signed_urls};
