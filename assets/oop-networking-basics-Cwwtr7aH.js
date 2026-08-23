const e={id:"oop-networking-basics",title:"Networking Basics",difficulty:"intermediate",estimatedMinutes:15,tldr:["Computer networking connects devices to share data and resources. Networks range from small (LAN) to global (the Internet).","The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.","The TCP/IP model (practical) has 4 layers: Network Interface, Internet, Transport, Application.","Key protocols: HTTP/HTTPS (web), TCP (reliable connections), IP (routing), DNS (name resolution), DHCP (address assignment)."],laymanDefinition:"Networking is like a postal system. Each computer has a unique address (IP address — like your home address). Data is broken into packages (packets — like parcels). TCP is like registered mail with delivery confirmation (guaranteed delivery, in order). UDP is like a postcard (fast, but no confirmation). DNS is the phone book (domain name to IP address lookup).",deepDive:[{heading:"OSI 7-Layer Model",text:"1. Physical: cables, signals, bits. 2. Data Link: MAC addresses, Ethernet frames. 3. Network: IP routing, packets. 4. Transport: TCP/UDP, ports. 5. Session: connection management. 6. Presentation: data encoding, encryption. 7. Application: HTTP, SMTP, DNS. Practical implementations often skip layers 5-6."},{heading:"TCP vs UDP",text:"TCP: connection-oriented, reliable, ordered delivery, flow control, congestion control. Slower overhead. Used for: web (HTTP), email (SMTP), file transfer (FTP). UDP: connectionless, unreliable, no ordering, no flow control. Faster, lower latency. Used for: video streaming, VoIP, DNS queries, gaming."},{heading:"IP Addressing and Subnets",text:"IPv4: 32-bit address (4 octets), e.g., 192.168.1.1. ~4.3 billion addresses. Subnet mask: 255.255.255.0 (/24) defines network and host portions. IPv6: 128-bit address, e.g., 2001:db8::1. CIDR notation: 192.168.1.0/24. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."},{heading:"DNS (Domain Name System)",text:"Translates domain names (google.com) to IP addresses (142.250.190.78). Hierarchy: root servers -> TLD servers (.com, .org) -> authoritative name servers. Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (text), NS (nameserver). TTL controls caching duration."},{heading:"HTTP and HTTPS",text:"HTTP: application protocol for web communication. Methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS. Status codes: 1xx (info), 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error). HTTPS: HTTP over TLS (encrypted). SSL/TLS handshake. HSTS for forced HTTPS."}],interviewAnswer:"Networking fundamentals: OSI model (7 layers), TCP/IP stack, TCP vs UDP, IP addressing and subnets, DNS resolution, HTTP/HTTPS. TCP provides reliable, ordered delivery. UDP is faster but unreliable. DNS translates names to IPs. HTTP powers the web; HTTPS adds encryption.",interviewQuestions:[{question:"What are the 7 OSI layers?",answer:"Physical, Data Link, Network, Transport, Session, Presentation, Application."},{question:"What are the 4 TCP/IP layers?",answer:"Network Interface, Internet, Transport, Application."},{question:"What is the difference between TCP and UDP?",answer:"TCP: reliable, ordered, slower. UDP: fast, connectionless, unreliable."},{question:"What is an IP address?",answer:"A unique numeric identifier for a device on a network (IPv4: 32-bit, IPv6: 128-bit)."},{question:"What is DNS?",answer:"Domain Name System — translates human-readable domain names to IP addresses."},{question:"What is a subnet mask?",answer:"Defines which part of an IP address is the network portion and which is the host portion."},{question:"What is HTTP?",answer:"Hypertext Transfer Protocol — application protocol for web communication."},{question:"What is the difference between HTTP and HTTPS?",answer:"HTTPS adds TLS encryption for security, protecting data in transit."},{question:"What are common HTTP methods?",answer:"GET (retrieve), POST (create), PUT (update/replace), DELETE (remove), PATCH (partial update)."},{question:"What are HTTP status code categories?",answer:"1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Networking Basics</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Application</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">HTTP, DNS</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Transport</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">TCP, UDP</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Internet</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">IP, Routing</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Data Link</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">MAC, Frames</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Physical</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Cables, Bits</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Networking Basics</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">OSI model, TCP/IP, DNS, HTTP/HTTPS. TCP v</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">s UDP, IP addressing, subnets, ports. Net</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">work protocols.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Networking: OSI 7-layer model, TCP/IP, DNS, HTTP. </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">TCP vs UDP, IP addressing, and subnetting.</text></svg>',codeExamples:[{title:"HTTP Server (Node.js)",useCase:"Basic web server.",code:`const http = require("http");

const server = http.createServer((req, res) => {
  console.log(\`\${req.method} \${req.url}\`);
  
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    message: "Hello from Node.js!",
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  }));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,description:"Basic HTTP server in Node.js — handles requests and returns JSON responses."},{title:"DNS Lookup (Node.js)",useCase:"Resolve domain names.",code:`const dns = require("dns");

// Resolve domain to IP
dns.resolve4("google.com", (err, addresses) => {
  console.log("Google IPv4 addresses:", addresses);
});

// Resolve for IPv6
dns.resolve6("google.com", (err, addresses) => {
  console.log("Google IPv6 addresses:", addresses);
});

// Get mail exchange records
dns.resolveMx("gmail.com", (err, addresses) => {
  console.log("Gmail MX records:", addresses);
});

// Use promises
const { promises: dnsPromises } = require("dns");
const ips = await dnsPromises.resolve4("example.com");
console.log("Example.com IPs:", ips);`,description:"Node.js dns module performs DNS lookups — resolve domain names to IP addresses."},{title:"TCP Client-Server",useCase:"Reliable connection example.",code:`const net = require("net");

// TCP Server
const server = net.createServer((socket) => {
  console.log("Client connected");
  socket.write("Welcome to TCP server!
");
  socket.on("data", (data) => {
    console.log("Received:", data.toString());
    socket.write("Echo: " + data);
  });
  socket.on("end", () => console.log("Client disconnected"));
});
server.listen(8080, () => console.log("TCP server on port 8080"));

// TCP Client
const client = new net.Socket();
client.connect(8080, "localhost", () => {
  client.write("Hello server!");
});
client.on("data", (data) => {
  console.log("Server response:", data.toString());
  client.destroy();
});`,description:"TCP provides reliable, ordered, connection-oriented communication between client and server."},{title:"UDP Broadcast",useCase:"Connectionless communication.",code:`const dgram = require("dgram");

// UDP Server
const server = dgram.createSocket("udp4");
server.on("message", (msg, info) => {
  console.log(\`Received \${msg} from \${info.address}:\${info.port}\`);
  server.send("ACK", info.port, info.address);
});
server.bind(41234);

// UDP Client
const client = dgram.createSocket("udp4");
const message = Buffer.from("Hello UDP");
client.send(message, 41234, "localhost", (err) => {
  console.log("Message sent");
  client.close();
});`,description:"UDP is connectionless and faster than TCP but does not guarantee delivery or order."},{title:"Ping Implementation (ICMP)",useCase:"Network diagnostics.",code:`const ping = require("net-ping");

const session = ping.createSession();

session.pingHost("8.8.8.8", (error, target, sent, rcvd) => {
  const time = rcvd - sent;
  if (error) {
    console.log(\`\${target}: \${error.toString()}\`);
  } else {
    console.log(\`\${target}: \${time}ms\`);
  }
});

// Manual ping using HTTP request
const http = require("http");
const start = Date.now();
http.get("http://google.com", (res) => {
  const latency = Date.now() - start;
  console.log("HTTP latency:", latency, "ms");
});`,description:"Ping measures network round-trip time using ICMP or HTTP request timing."}],mcqQuestions:[{question:"What are the 7 OSI layers?",options:["Physical, Data Link, Network, Transport, Session, Presentation, Application","TCP, IP, HTTP, DNS, UDP, FTP, SSH","Hardware, Software, Network, Transport, Session, Data, App","Link, Internet, Transport, Application"],answer:0,explanation:"OSI model: Physical, Data Link, Network, Transport, Session, Presentation, Application."},{question:"Which protocol is connection-oriented and reliable?",options:["UDP","TCP","IP","DNS"],answer:1,explanation:"TCP is connection-oriented and guarantees reliable, ordered delivery."},{question:"What does DNS do?",options:["Encrypts data","Resolves domain names to IP addresses","Routes packets","Assigns IP addresses"],answer:1,explanation:"DNS translates human-readable domain names to machine-readable IP addresses."},{question:"What is the difference between HTTP and HTTPS?",options:["HTTPS is faster","HTTPS adds TLS encryption","HTTP is newer","No difference"],answer:1,explanation:"HTTPS adds TLS encryption for secure communication over HTTP."},{question:"What port does HTTP typically use?",options:["21","80","443","8080"],answer:1,explanation:"HTTP typically uses port 80. HTTPS uses port 443."},{question:"What is a subnet mask used for?",options:["Encrypting data","Defining network/host portions of an IP","Routing packets","Resolving DNS"],answer:1,explanation:"A subnet mask defines which part of an IP is the network ID and which is the host ID."}]};export{e as oop_networking_basics};
