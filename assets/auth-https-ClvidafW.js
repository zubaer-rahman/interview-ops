const e={id:"auth-https",title:"HTTPS (HTTP over TLS)",difficulty:"beginner",estimatedMinutes:20,tldr:["HTTPS is HTTP over TLS (Transport Layer Security) — encrypting all communication between client and server.","TLS ensures: confidentiality (encrypted — no eavesdropping), integrity (no tampering), authentication (server identity verified via certificates).","Without HTTPS: passwords, tokens, cookies, and data are sent in plaintext — anyone on the network can read them.","Implementation: TLS certificate (from CA), HTTPS server configuration, HSTS header to enforce HTTPS, automatic HTTP→HTTPS redirect."],laymanDefinition:"HTTPS is like a private conversation in a soundproof room. HTTP is like shouting across a crowded room — anyone can hear your credit card number, password, or private messages. TLS encrypts everything so only the two participants understand the conversation.",deepDive:[{heading:"TLS Handshake",text:"1. Client connects to server. 2. Server presents TLS certificate (public key). 3. Client verifies certificate against trusted CA. 4. Client generates session key, encrypts with server\\'s public key. 5. Server decrypts with private key. 6. Both use session key for symmetric encryption. Completes in ~1-2 round trips."},{heading:"TLS Certificates",text:"Issued by Certificate Authorities (CA): Let\\'s Encrypt (free), DigiCert, GlobalSign. Certificate contains: domain name, issuer, public key, validity period, subject. Chain of trust: root CA → intermediate CA → your certificate. Wildcard certificates: *.example.com covers all subdomains."},{heading:"HTTPS Configuration Best Practices",text:"Use TLS 1.3 (fastest, most secure). Disable TLS 1.0/1.1 (deprecated). Use strong cipher suites (ECDHE + AES-GCM). Set HSTS header to enforce HTTPS. Redirect HTTP to HTTPS with 301. Use modern tools: Certbot (Let\\'s Encrypt), Caddy (auto-HTTPS)."},{heading:"HSTS (HTTP Strict Transport Security)",text:"Tells browsers to always use HTTPS for your domain. max-age: duration (1 year recommended). includeSubDomains: apply to all subdomains. preload: submit to browser HSTS preload list. Once set, browser will never use HTTP — even if user types http://."},{heading:"Common HTTPS Pitfalls",text:"Mixed content: loading HTTP resources on HTTPS pages (browser blocks). Self-signed certificates: not trusted by browsers (use in dev only). Expired certificates: browser shows warning. Weak cipher suites: some still allow downgrade attacks. Missing intermediate certificate: chain incomplete."}],interviewAnswer:"HTTPS is non-negotiable for any production web application. Use Let's Encrypt for free certificates. Set HSTS with a long max-age. Redirect all HTTP traffic. Use TLS 1.3. Never mix HTTP and HTTPS content. Test with SSL Labs (ssllabs.com) for configuration rating.",interviewQuestions:[{question:"What is HTTPS?",answer:"HTTP over TLS — encrypting communication between client and server for confidentiality, integrity, and authentication."},{question:"What does TLS provide?",answer:"Confidentiality (encryption), Integrity (no tampering), Authentication (server identity via certificates)."},{question:"What is a TLS handshake?",answer:"The process where client and server negotiate encryption: certificate exchange, key agreement, session key establishment."},{question:"What is a Certificate Authority?",answer:"A trusted third party that issues TLS certificates, vouching for the server\\'s identity."},{question:"What is Let\\'s Encrypt?",answer:"A free, automated CA that provides TLS certificates. Uses ACME protocol for automated issuance and renewal."},{question:"What is HSTS?",answer:"HTTP Strict Transport Security — a header that tells browsers to always use HTTPS for the domain."},{question:"What is mixed content?",answer:"Loading HTTP resources (images, scripts) on an HTTPS page. Browsers block most mixed content."},{question:"What is the current TLS version?",answer:"TLS 1.3 — fastest and most secure. TLS 1.2 is still widely used. TLS 1.0/1.1 are deprecated."},{question:"What is a wildcard certificate?",answer:"A certificate covering a domain and all its subdomains: *.example.com covers www.example.com, api.example.com, etc."},{question:"What tool evaluates HTTPS configuration?",answer:"SSL Labs (ssllabs.com/ssltest) — provides a grade (A+ is best) and detailed analysis."}],diagramSvg:`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">HTTPS (HTTP over TLS)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">HTTP</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Plaintext</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Man-in-Middle</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Eavesdrop + tamper</text><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">TLS</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Encrypted tunnel</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="65" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="215" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Certificate</text><text x="215" y="84" text-anchor="middle" font-size="9" fill="#ddd">Verify identity</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">HSTS</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Force HTTPS</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">TLS 1.3</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Fast + secure</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Redirect</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">HTTP → HTTPS 301</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">HTTPS / TLS</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Encrypted HTTP: TLS handshake, cer</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">tificates, HSTS, secure configurat</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">ion. Always use HTTPS.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">HTTPS: Encrypt all traffic with TLS. Non-negotiabl</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">e for production. Use Let's Encrypt + HSTS.</text></svg>`,codeExamples:[{title:"HTTPS Server (Node.js)",useCase:"Create HTTPS server with TLS.",code:`const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem'),
  // Let's Encrypt: /etc/letsencrypt/live/domain/
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS server on port 443');
});

// HTTP → HTTPS redirect
app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect(301,
      \`https://\${req.headers.host}\${req.url}\`
    );
  }
  next();
});`,description:"HTTPS server setup with TLS certificate and HTTP-to-HTTPS redirect."},{title:"HSTS Header Configuration",useCase:"Enforce HTTPS via browser.",code:`// HSTS header (Express)
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  next();
});

// max-age=31536000 = 1 year
// includeSubDomains = apply to all subdomains
// preload = submitted to browser preload list

// WARNING: once set, cannot revert for max-age
// Start with a short max-age during testing:
// 'max-age=86400' (24 hours)

// Or use helmet for security headers:
const helmet = require('helmet');
app.use(helmet.hsts({
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true
}));`,description:"HSTS forces browsers to always use HTTPS. Start with short max-age, increase after verification."},{title:"Let\\'s Encrypt with Certbot",useCase:"Free TLS certificates.",code:`# Install Certbot and obtain certificate
# sudo apt install certbot python3-certbot-nginx

# Get certificate (standalone mode)
# sudo certbot certonly --standalone
#   -d example.com -d www.example.com

# Certificate location:
# /etc/letsencrypt/live/example.com/
# ├── cert.pem      (server certificate)
# ├── chain.pem     (intermediate CA)
# ├── fullchain.pem (cert + chain)
# └── privkey.pem   (private key, keep secret!)

# Auto-renewal (cron job)
# 0 3 * * * certbot renew --quiet

# Or use node-greenlock for Node.js
# npm install greenlock-express`,description:"Let\\'s Encrypt provides free automated certificates via Certbot."},{title:"TLS 1.3 Only Configuration",useCase:"Strongest TLS settings.",code:`const https = require('https');

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem'),

  // TLS 1.3 only (Node.js 12+)
  secureOptions: crypto.constants.SSL_OP_NO_TLSv1
    | crypto.constants.SSL_OP_NO_TLSv1_1
    | crypto.constants.SSL_OP_NO_TLSv1_2,

  // Strong cipher suites (TLS 1.3 default)
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256'
  ].join(':'),
};

https.createServer(options, app);`,description:"TLS 1.3 configuration with strong cipher suites for maximum security."},{title:"Test HTTPS Configuration",useCase:"Verify TLS setup.",code:`# Using OpenSSL to test TLS connection
# openssl s_client -connect example.com:443 -tls1_3

# Check certificate chain
# openssl s_client -connect example.com:443 -showcerts

# Scan with SSL Labs (API)
# curl https://api.ssllabs.com/api/v3/analyze?d=example.com

# Using nmap script
# nmap --script ssl-enum-ciphers -p 443 example.com

# Node.js test
const https = require('https');
https.get("https://example.com", (res) => {
  console.log("TLS version:", res.socket.getProtocol());
  // Should output: TLSv1.3
});`,description:"Test HTTPS configuration with OpenSSL, SSL Labs, and Node.js to ensure proper TLS setup."}],mcqQuestions:[{question:"What does HTTPS provide?",options:["Speed","Encryption + integrity + authentication","SEO improvement","Caching"],answer:1,explanation:"HTTPS (HTTP over TLS) provides confidentiality, integrity, and server authentication."},{question:"What protocol does HTTPS use for encryption?",options:["SSL","TLS","SSH","IPsec"],answer:1,explanation:"HTTPS uses TLS (Transport Layer Security). SSL is the deprecated predecessor."},{question:"What is Let\\'s Encrypt?",options:["A paid CA","A free automated CA","A TLS library","A cipher suite"],answer:1,explanation:"Let\\'s Encrypt provides free, automated TLS certificates."},{question:"What does HSTS do?",options:["Encrypts traffic","Forces browsers to use HTTPS","Optimizes performance","Validates certificates"],answer:1,explanation:"HSTS tells browsers to always use HTTPS for the domain, preventing HTTP downgrade."},{question:"What is mixed content?",options:["Multiple TLS versions","HTTP resources on HTTPS page","Mixed HTTP methods","Mixed origins"],answer:1,explanation:"Mixed content occurs when an HTTPS page loads HTTP resources — browsers block most of it."},{question:"What is the most secure TLS version?",options:["TLS 1.1","TLS 1.2","TLS 1.3","SSL 3.0"],answer:2,explanation:"TLS 1.3 is the most secure and fastest version. TLS 1.2 is acceptable but deprecated versions should be disabled."}]};export{e as auth_https};
