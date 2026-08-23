const e={id:"tm-forward-proxy",title:"Forward Proxy",difficulty:"intermediate",estimatedMinutes:15,tldr:["A forward proxy sits between client devices and the internet, forwarding client requests to destination servers.","Clients configure their browser/application to use the forward proxy. The destination server sees the proxy's IP, not the client's.","Common uses: bypassing geo-restrictions, content filtering (schools/offices), anonymity, caching frequently accessed content.","Forward proxies can be transparent (no client config) or explicit (client must configure proxy settings)."],laymanDefinition:`A forward proxy is like a personal assistant who makes phone calls for you. When you want to call a business, your assistant dials and says "I'm calling on behalf of [your name]" � the business knows the assistant's number, not yours. The assistant can also screen calls (filter content) and take notes (cache).`,deepDive:[{heading:"Forward vs Reverse Proxy",text:"Forward proxy: acts on behalf of the client, hides client identity from the destination server. Reverse proxy: acts on behalf of the server, hides server topology from the client. Forward proxy is client-configured; reverse proxy is server-configured."},{heading:"Transparent vs Explicit Proxy",text:"Transparent proxy: intercepts traffic without client configuration (often at network gateway). Client is unaware. Used for content filtering in organizations. Explicit proxy: client must configure proxy IP and port in browser or OS settings. Used for anonymity and bypassing restrictions."},{heading:"Use Cases",text:"Bypass geo-restrictions: access content blocked in certain countries. Content filtering: block malicious or inappropriate websites (schools, corporate networks). Anonymity: hide client IP (combined with VPN). Bandwidth savings: cache frequently accessed content. Access control: restrict internet access to authorized users."},{heading:"Security Considerations",text:"Forward proxies see all traffic (decrypted if using MITM TLS). Must be secured to prevent abuse (open proxy = anyone can use it). Authentication required for corporate proxies. Logging and monitoring of all traffic. Certificate authority installation needed for TLS interception."}],interviewAnswer:"Forward proxies act on behalf of clients. They provide anonymity, content filtering, and caching. Unlike reverse proxies (server-side), forward proxies are client-side tools. Configure forward proxies at the network gateway for transparent filtering or in browser settings for explicit use.",interviewQuestions:[{question:"What is a forward proxy?",answer:"A server that sits between client devices and the internet, forwarding client requests on their behalf."},{question:"What is the difference between forward and reverse proxy?",answer:"Forward proxy represents the client (hides client). Reverse proxy represents the server (hides server)."},{question:"What is a transparent proxy?",answer:"A proxy that intercepts traffic without client configuration � often used at network gateways."},{question:"What is an explicit proxy?",answer:"A proxy that requires client configuration (browser/OS settings)."},{question:"What is an open proxy?",answer:"A forward proxy accessible to anyone without authentication � a security risk."},{question:"How does a forward proxy provide anonymity?",answer:"The destination server sees the proxy\\'s IP address, not the client\\'s original IP."},{question:"What is proxy chaining?",answer:"Using multiple proxies in sequence for increased anonymity. Each proxy only knows the previous and next hop."},{question:"What is SOCKS proxy?",answer:"A protocol that proxies any TCP/UDP traffic at a lower level than HTTP proxies. Used for torrents, SSH tunneling."},{question:"How do organizations filter content with proxies?",answer:"Configure transparent proxy at network gateway. Proxy checks URLs against blocklists and blocks malicious sites."},{question:"What is MITM TLS proxy?",answer:"Forward proxy that decrypts TLS traffic by acting as a certificate authority � requires client trust."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Forward Proxy</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Browser</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="160" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="230" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Forward Proxy</text><text x="230" y="54" text-anchor="middle" font-size="9" fill="#ddd">Squid / SOCKS / VPN</text><line x1="310" y1="48" x2="340" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="350" y="35" width="130" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="415" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Internet</text><text x="415" y="54" text-anchor="middle" font-size="9" fill="#ddd">Destination Servers</text><rect x="10" y="70" width="130" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="75" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Anonymity</text><text x="75" y="89" text-anchor="middle" font-size="9" fill="#ddd">Hide client IP</text><rect x="10" y="105" width="130" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="75" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Filtering</text><text x="75" y="124" text-anchor="middle" font-size="9" fill="#ddd">Block malicious sites</text><rect x="10" y="140" width="130" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="75" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Caching</text><text x="75" y="159" text-anchor="middle" font-size="9" fill="#ddd">Faster repeat access</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">Forward Proxy: Client-side proxy that forwards req</text><text x="240" y="192" font-size="9" fill="#666" text-anchor="middle">uests to the internet � anonymity, filtering, cach</text><text x="240" y="204" font-size="9" fill="#666" text-anchor="middle">ing.</text></svg>',codeExamples:[{title:"Squid Forward Proxy Config",useCase:"Traditional forward proxy.",code:`# /etc/squid/squid.conf
http_port 3128

# Allow access from local network
acl localnet src 10.0.0.0/8
acl localnet src 192.168.0.0/16
http_access allow localnet
http_access deny all

# Caching settings
cache_dir ufs /var/spool/squid 100 16 256
cache_mem 256 MB
maximum_object_size 4 MB

# Block specific sites
acl blocked_sites dstdomain facebook.com twitter.com
http_access deny blocked_sites`,description:"Squid forward proxy configuration for local network with caching and site blocking."},{title:"PAC File for Proxy Configuration",useCase:"Automatic proxy configuration.",code:`// proxy.pac � Proxy Auto-Config file
function FindProxyForURL(url, host) {
  // Direct for local network
  if (isPlainHostName(host) ||
      dnsDomainIs(host, ".local")) {
    return "DIRECT";
  }

  // Use proxy for external sites
  if (shExpMatch(host, "*.example.com")) {
    return "PROXY proxy.example.com:8080";
  }

  // Bypass proxy for streaming
  if (shExpMatch(url, "*netflix*")) {
    return "DIRECT";
  }

  // Default: use proxy
  return "PROXY 10.0.0.1:3128";
}`,description:"PAC file for automatic forward proxy configuration based on URL patterns."},{title:"SOCKS5 Proxy via SSH",useCase:"Simple SOCKS5 proxy tunnel.",code:`# Create SOCKS5 proxy tunnel via SSH
ssh -D 1080 -C -N user@remote-server.com

# -D 1080: SOCKS5 dynamic port forwarding
# -C: compression
# -N: no remote commands (tunnel only)

# Configure browser:
# Settings > Network > Proxy > SOCKS5
# Host: localhost, Port: 1080

# For all traffic (HTTP + DNS via SOCKS5):
# In Firefox: network.proxy.socks_remote_dns = true`,description:"SSH SOCKS5 tunnel provides a quick encrypted forward proxy for browsing."},{title:"Forward Proxy with Auth (Squid)",useCase:"Authenticated proxy access.",code:`# Squid with basic authentication
auth_param basic program /usr/lib/squid/basic_ncsa_auth
auth_param basic children 5
auth_param basic realm Squid Proxy
auth_param basic credentialsttl 2 hours

acl authenticated proxy_auth REQUIRED
http_access allow authenticated
http_access deny all

# Create user credentials
# htpasswd -c /etc/squid/passwords alice

# Rate limit per user
delay_pools 1
delay_class 1 individual
delay_access 1 allow authenticated
delay_parameters 1 8000/8000`,description:"Squid forward proxy with basic authentication and per-user rate limiting."},{title:"Transparent Proxy with iptables",useCase:"Intercept traffic without client config.",code:`# Redirect HTTP traffic to Squid transparent proxy
iptables -t nat -A PREROUTING -i eth0 -p tcp
  --dport 80 -j REDIRECT --to-port 3128

# Redirect HTTPS (needs SSL bump in Squid)
iptables -t nat -A PREROUTING -i eth0 -p tcp
  --dport 443 -j REDIRECT --to-port 3129

# Enable IP forwarding
sysctl -w net.ipv4.ip_forward=1

# Squid config for transparent mode
# http_port 3128 intercept
# http_port 3129 intercept ssl-bump`,description:"Transparent proxy intercepts traffic at network level without browser configuration."}],mcqQuestions:[{question:"What does a forward proxy hide?",options:["Server identity","Client identity","Both","Neither"],answer:1,explanation:"A forward proxy hides the client\\'s identity from the destination server."},{question:"What is the difference between forward and reverse proxy?",options:["Forward hides client, reverse hides server","Forward hides server, reverse hides client","They are the same","Depends on configuration"],answer:0,explanation:"Forward proxy represents the client; reverse proxy represents the server."},{question:"What is a transparent proxy?",options:["Proxy requiring config","Proxy that intercepts without client config","Proxy that encrypts traffic","Proxy that caches only"],answer:1,explanation:"Transparent proxy intercepts traffic at the network level without client configuration."},{question:"What is Squid?",options:["A reverse proxy","A forward proxy/caching proxy","A load balancer","An API gateway"],answer:1,explanation:"Squid is a forward proxy and caching proxy commonly used in corporate networks."},{question:"What port does SOCKS5 use by convention?",options:["3128","1080","8080","443"],answer:1,explanation:"SOCKS5 traditionally uses port 1080."},{question:"What is an open proxy?",options:["Free proxy","Proxy without authentication","Transparent proxy","Reverse proxy"],answer:1,explanation:"An open proxy allows anyone to use it without authentication � a significant security risk."}]};export{e as tm_forward_proxy};
