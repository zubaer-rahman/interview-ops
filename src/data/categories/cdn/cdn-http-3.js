export const cdn_http_3 = {
  "id": "cdn-http-3",
  "title": "HTTP/3",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "HTTP/3 is the latest HTTP protocol version, built on QUIC (Quick UDP Internet Connections) instead of TCP, offering significant performance improvements.",
    "Key improvements: zero-RTT connection establishment, no head-of-line blocking at transport layer, built-in encryption, connection migration, and improved loss recovery.",
    "Unlike HTTP/2 (TCP-based), HTTP/3 runs over QUIC (UDP-based), eliminating TCP head-of-line blocking where a lost packet blocks ALL streams.",
    "HTTP/3 is particularly beneficial for mobile users (connection migration) and high-latency or lossy connections."
  ],
  "laymanDefinition": "HTTP/3 is like upgrading from a train (TCP) to independent drones (QUIC/UDP). With the train, if one track is blocked (lost packet), the entire train stops. With drones, each package flies independently. If one drone is delayed, the others keep going. Drones already know your address (0-RTT) and can switch bases if you move (connection migration).",
  "deepDive": [
    {
      "heading": "QUIC Protocol (Foundation)",
      "text": "QUIC is a transport protocol on UDP. It integrates TLS 1.3 directly, provides stream multiplexing without HOL blocking, includes forward error correction, and has built-in connection migration. Standardized as RFC 9000."
    },
    {
      "heading": "0-RTT Connection Establishment",
      "text": "HTTP/3 can send data on the first packet (0-RTT) for returning clients. Client remembers previous connection parameters. Reconnects without a handshake. HTTP/1.1: 3 round trips. HTTP/3: 0 for returning visitors."
    },
    {
      "heading": "No Transport-Level HOL Blocking",
      "text": "HTTP/2 solved HTTP-level HOL blocking but has TCP-level HOL blocking. A lost TCP packet blocks ALL HTTP/2 streams. QUIC isolates streams — a lost packet only affects its stream. For 2-5% packet loss, HTTP/3 can be 15-30% faster."
    },
    {
      "heading": "Connection Migration",
      "text": "When a mobile user switches from WiFi to cellular, TCP connections must be re-established. QUIC uses a Connection ID — when IP changes, the connection survives. Transformative for mobile users."
    },
    {
      "heading": "HTTP/3 Adoption and CDN Support",
      "text": "All major CDNs support HTTP/3: CloudFront, Cloudflare (enabled by default), Fastly, Akamai. All modern browsers support HTTP/3. ~30-40% of web traffic uses HTTP/3 as of 2025."
    }
  ],
  "interviewAnswer": "HTTP/3 (QUIC over UDP) eliminates transport-layer HOL blocking, enables 0-RTT connection reuse, and supports connection migration. It is a significant evolution over HTTP/2, especially for lossy networks and mobile connections.",
  "interviewQuestions": [
    {
      "question": "What is HTTP/3?",
      "answer": "The latest HTTP protocol built on QUIC (UDP) instead of TCP, with 0-RTT, no HOL blocking, and connection migration."
    },
    {
      "question": "What is QUIC?",
      "answer": "Quick UDP Internet Connections — a transport protocol standardized as RFC 9000."
    },
    {
      "question": "What is 0-RTT?",
      "answer": "Zero Round Trip Time — returning clients send data immediately without a handshake."
    },
    {
      "question": "How does HTTP/3 eliminate HOL blocking?",
      "answer": "QUIC isolates streams so a lost packet only affects one stream, not all."
    },
    {
      "question": "What is connection migration?",
      "answer": "QUIC connections survive IP changes (WiFi to cellular) using a Connection ID."
    },
    {
      "question": "What protocol does QUIC use instead of TCP?",
      "answer": "UDP (User Datagram Protocol)."
    },
    {
      "question": "Is encryption mandatory in HTTP/3?",
      "answer": "Yes, TLS 1.3 is integrated into QUIC, making encryption mandatory."
    },
    {
      "question": "What makes HTTP/3 better for mobile?",
      "answer": "Connection migration allows seamless WiFi to cellular switching."
    },
    {
      "question": "Which major CDNs support HTTP/3?",
      "answer": "CloudFront, Cloudflare, Fastly, Akamai all support HTTP/3."
    },
    {
      "question": "What header advertises HTTP/3 support?",
      "answer": "Alt-Svc: h3=\":443\"; ma=86400"
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">HTTP/3</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTTP/1.1</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">TCP, 3 RTT</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTTP/2</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">TCP, 2 RTT</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTTP/3</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">QUIC/UDP, 0-1 RTT</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"320\" height=\"95\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"320\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HTTP/3 Evolution</text><text x=\"320\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">TCP -> QUIC/UDP. 0-RTT, no HOL blocking, connection migrat</text><text x=\"320\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ion, built-in TLS 1.3.</text><rect x=\"160\" y=\"140\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"230\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mobile</text><text x=\"230\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Seamless network switch</text><rect x=\"160\" y=\"165\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"230\" y=\"181\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lossy Networks</text><text x=\"230\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">30% faster with loss</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">HTTP/3: QUIC/UDP. 0-RTT, no HOL blocking, connecti</text><text x=\"240\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">on migration, mandatory encryption.</text></svg>",
  "codeExamples": [
    {
      "title": "Enabling HTTP/3 on CloudFront",
      "useCase": "CloudFront HTTP/3 configuration.",
      "code": "# Via AWS Management Console:\n# Distribution -> Edit -> Supported HTTP Versions\n# Select \"HTTP/2 and HTTP/3\"\n\n# Via AWS CLI:\naws cloudfront update-distribution \\\n  --id E123456789ABCD \\\n  --http-version http2and3 \\\n  --if-match \"ETAG_VALUE\"\n\n# Requirements:\n# - HTTPS only (viewer protocol)\n# - TLSv1.2 or TLSv1.3\n\n# Verify with curl:\ncurl -s -I --http3 https://d123.cloudfront.net/",
      "description": "AWS CLI and console configuration for enabling HTTP/3 on CloudFront."
    },
    {
      "title": "Cloudflare HTTP/3 Enablement",
      "useCase": "HTTP/3 is enabled by default.",
      "code": "# Cloudflare HTTP/3 is enabled by default for all plans\n\n# Verify via Dashboard:\n# Network tab -> HTTP/3 (with QUIC) -> On\n\n# Verify via API:\ncurl -X GET \"https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/http3\" \\\n  -H \"Authorization: Bearer $TOKEN\"\n\n# Response should show \"value\": \"on\"",
      "description": "Cloudflare HTTP/3 configuration — enabled by default."
    },
    {
      "title": "Nginx HTTP/3 Configuration",
      "useCase": "Enabling HTTP/3 on Nginx.",
      "code": "server {\n  listen 443 quic reuseport;\n  listen 443 ssl http2;\n  server_name cdn.example.com;\n  ssl_certificate /etc/ssl/certs/example.pem;\n  ssl_certificate_key /etc/ssl/private/example.key;\n  ssl_protocols TLSv1.2 TLSv1.3;\n  ssl_early_data on;\n  add_header Alt-Svc 'h3=\":443\"; ma=86400';\n  quic_retry on;\n  location / { root /var/www/static; }\n}",
      "description": "Nginx HTTP/3 (QUIC) configuration with HTTP/2 fallback."
    },
    {
      "title": "Verify HTTP/3 with Curl",
      "useCase": "Testing HTTP/3 support.",
      "code": "# Requires curl built with quiche/HTTP/3 support\ncurl -s -I --http3 https://cdn.example.com/\n# Response: HTTP/3 200\n\necho \"=== HTTP/3 ===\"\ncurl -w \"\\nConnect: %{time_connect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n\" -o /dev/null -s --http3 https://cdn.example.com/\necho \"=== HTTP/2 ===\"\ncurl -w \"\\nConnect: %{time_connect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n\" -o /dev/null -s --http2 https://cdn.example.com/",
      "description": "Curl commands with HTTP/3 to compare connection times."
    },
    {
      "title": "HTTP/3 Alt-Svc Header",
      "useCase": "How servers advertise HTTP/3.",
      "code": "# Server sends Alt-Svc header to advertise HTTP/3:\nAlt-Svc: h3=\":443\"; ma=86400\n\n# h3 = HTTP/3 over QUIC\n# :443 = UDP port 443\n# ma=86400 = cache for 24 hours\n\n# Browser then attempts QUIC connection\n# Falls back to TCP if QUIC fails\n# Future requests use HTTP/3 directly",
      "description": "The Alt-Svc header mechanism for HTTP/3 discovery and upgrade."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What transport does HTTP/3 use?",
      "options": [
        "TCP",
        "UDP (via QUIC)",
        "SCTP",
        "WebSocket"
      ],
      "answer": 1,
      "explanation": "HTTP/3 uses QUIC over UDP."
    },
    {
      "question": "What is 0-RTT?",
      "options": [
        "Zero data",
        "Faster setup",
        "Zero round trips for returning clients",
        "No encryption"
      ],
      "answer": 2,
      "explanation": "0-RTT allows returning clients to send data immediately."
    },
    {
      "question": "What does HTTP/3 fix that HTTP/2 still has?",
      "options": [
        "Slow responses",
        "TCP HOL blocking",
        "Large headers",
        "No encryption"
      ],
      "answer": 1,
      "explanation": "HTTP/2 has TCP-level HOL blocking; HTTP/3 eliminates it."
    },
    {
      "question": "What is connection migration?",
      "options": [
        "Server migration",
        "Connection survives IP changes",
        "Content migration",
        "User migration"
      ],
      "answer": 1,
      "explanation": "QUIC connections survive IP changes via Connection ID."
    },
    {
      "question": "Is encryption mandatory in HTTP/3?",
      "options": [
        "No",
        "Yes, TLS 1.3 built-in",
        "Only for POST",
        "Optional"
      ],
      "answer": 1,
      "explanation": "TLS 1.3 is integrated into QUIC."
    },
    {
      "question": "What header advertises HTTP/3?",
      "options": [
        "Cache-Control",
        "Alt-Svc",
        "Content-Type",
        "Accept-Encoding"
      ],
      "answer": 1,
      "explanation": "Alt-Svc: h3=\":443\"; ma=86400 advertises HTTP/3."
    }
  ]
};
