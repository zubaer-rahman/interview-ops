export const cdn_edge_locations = {
  "id": "cdn-edge-locations",
  "title": "Edge Locations",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Edge locations are the physical data center sites where CDN edge servers are deployed — the geographic Points of Presence (PoPs).",
    "Major CDNs have hundreds to thousands of edge locations worldwide. Cloudflare has 330+ cities, AWS CloudFront has 600+ PoPs, Akamai has 4100+ locations.",
    "More edge locations means shorter distances between users and content, resulting in lower latency and faster load times.",
    "Edge locations are strategically placed in major internet hubs with direct peering to ISPs and internet exchanges for optimal connectivity."
  ],
  "laymanDefinition": "Edge locations are like Amazon fulfillment centers. Amazon doesn't ship every package from one central warehouse — they have fulfillment centers near major cities. If you live in Chicago, your package comes from a nearby warehouse, not from across the country. More fulfillment centers means faster delivery for everyone.",
  "deepDive": [
    {
      "heading": "Strategic Placement",
      "text": "Edge locations are placed in major metropolitan areas with high population density, near internet exchange points (IXPs), and in carrier-neutral data centers. Providers peer directly with major ISPs to minimize network hops. Locations are chosen based on traffic patterns, latency measurements, and population distribution."
    },
    {
      "heading": "Coverage Maps",
      "text": "CDNs publish their edge location maps. Cloudflare: 330+ cities across 120+ countries. AWS CloudFront: 600+ PoPs across 90+ cities. Fastly: 60+ PoPs. Smaller CDNs may have 20-50 PoPs. Global coverage is not uniform — North America, Europe, and Asia have dense coverage; Africa and South America have fewer locations."
    },
    {
      "heading": "How Locations Impact Performance",
      "text": "Each additional edge location reduces the average distance between users and content. Metric: 95th percentile latency. Adding a PoP in a region can reduce latency from 200ms to 20ms for users in that region. CDNs use real-time monitoring to optimize traffic routing across edge locations."
    },
    {
      "heading": "Edge Location Selection",
      "text": "When a user requests content, the CDN selects the best edge location based on: geographic proximity (lowest latency), current server load, cache availability, and origin health. If the nearest edge location is overloaded, traffic is routed to the next closest. This dynamic routing improves reliability."
    },
    {
      "heading": "Regional Coverage Differences",
      "text": "North America: dense coverage with PoPs in every major city. Europe: excellent coverage across all countries. Asia Pacific: good coverage in developed countries, expanding in developing markets. Middle East and Africa: limited coverage, often served from European PoPs. South America: coverage in major cities, expanding."
    }
  ],
  "interviewAnswer": "Edge locations are the physical data center sites (PoPs) where CDN edge servers are deployed. More locations mean lower latency for users worldwide. CDNs strategically place them near internet exchanges and major population centers for optimal performance.",
  "interviewQuestions": [
    {
      "question": "What are edge locations?",
      "answer": "Physical data center sites where CDN edge servers are deployed — also called Points of Presence (PoPs)."
    },
    {
      "question": "How many edge locations does a typical CDN have?",
      "answer": "Varies widely: Cloudflare 330+, CloudFront 600+, Akamai 4100+. Smaller CDNs may have 20-50."
    },
    {
      "question": "Why do more edge locations improve performance?",
      "answer": "More locations mean shorter distances between users and content, reducing latency."
    },
    {
      "question": "Where are edge locations typically placed?",
      "answer": "In major metropolitan areas near internet exchange points and carrier-neutral data centers."
    },
    {
      "question": "How does a CDN select which edge location to use?",
      "answer": "Based on geographic proximity, current server load, cache availability, and origin health."
    },
    {
      "question": "What is an internet exchange point (IXP)?",
      "answer": "A physical infrastructure where ISPs and CDNs connect to exchange traffic directly."
    },
    {
      "question": "Which continent has the most CDN edge locations?",
      "answer": "North America and Europe have the densest coverage; Africa and South America have fewer."
    },
    {
      "question": "What happens if the nearest edge location is overloaded?",
      "answer": "Traffic is automatically routed to the next closest available edge location."
    },
    {
      "question": "What metric measures CDN performance improvement?",
      "answer": "95th percentile latency reduction — adding a local PoP can reduce latency from 200ms to 20ms."
    },
    {
      "question": "Do all CDNs have the same number of edge locations?",
      "answer": "No — it varies greatly. More locations generally means better performance but higher cost."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Edge Locations</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User in NY</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Requests content</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NY Edge PoP</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nearest location</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"405\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">User in Sydney</text><text x=\"405\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Far from NY PoP</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sydney User</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">High latency >200ms</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"225\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">No Sydney PoP</text><text x=\"225\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Served from Singapore o</text><text x=\"225\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r LA</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ideal: Sydney PoP</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Latency <20ms</text><rect x=\"160\" y=\"100\" width=\"310\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"315\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">More Edge Locations = Lower Latency</text><text x=\"315\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Strategically placed near users for optimal delivery.</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Edge Locations: Physical PoPs worldwide where CDN </text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">servers live — more locations = faster content del</text><text x=\"240\" y=\"219\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ivery.</text></svg>",
  "codeExamples": [
    {
      "title": "Listing CloudFront Edge Locations",
      "useCase": "Programmatic access to edge locations.",
      "code": "# AWS CloudFront global edge locations (partial list)\n# North America:\n#   Ashburn, VA (x1-e) | Atlanta, GA (x1-f)\n#   Chicago, IL (x1-g) | Dallas, TX (x1-h)\n#   Los Angeles, CA (x1-l) | Miami, FL (x1-m)\n#   New York, NY (x1-n) | Seattle, WA (x1-s)\n#   San Jose, CA (x1-r) | Toronto, CA (x1-c)\n\n# Europe:\n#   Amsterdam, NL (x2-a) | Berlin, DE (x2-b)\n#   Frankfurt, DE (x2-f) | London, GB (x2-l)\n#   Madrid, ES (x2-m) | Milan, IT (x2-i)\n#   Paris, FR (x2-p) | Stockholm, SE (x2-s)\n\n# Asia Pacific:\n#   Hong Kong (x3-h) | Mumbai, IN (x3-m)\n#   Osaka, JP (x3-o) | Seoul, KR (x3-s)\n#   Singapore (x3-g) | Sydney, AU (x3-y)\n#   Tokyo, JP (x3-t)",
      "description": "Partial list of AWS CloudFront edge locations showing global distribution."
    },
    {
      "title": "Checking Edge Location from Response Headers",
      "useCase": "Identifying which PoP served the request.",
      "code": "# Check which edge location served your request\ncurl -I https://d123.cloudfront.net/image.jpg\n\n# Look for the x-amz-cf-pop header:\n# x-amz-cf-pop: JFK50-P1\n#   JFK = New York (airport code)\n#   50 = specific edge location ID\n#   P1 = point of presence identifier\n\n# Cloudflare shows:\n# CF-Ray: 4a5b6c7d8e9f-JFK\n#   The last 3 letters = edge location code\n\n# Fastly shows:\n# x-served-by: cache-jfk1234-JFK",
      "description": "Response headers reveal which specific edge location handled the request."
    },
    {
      "title": "Latency Test to Different CDNs",
      "useCase": "Compare edge location performance.",
      "code": "# Compare latency to different CDN edge locations\n# using mtr or ping from different regions\n\n# Test from US East\nping -c 5 d1g1p1e8n0a1.cloudfront.net\n\n# Test from Europe (use a tool or VPS)\n# ping cloudflare.com - routes to nearest edge\n\n# Use curl to measure TTFB\ncurl -s -o /dev/null -w \"TTFB: %{time_starttransfer}s \\n\" \\\n  -H \"Cache-Control: no-cache\" \\\n  https://cdn.example.com/\n\n# Key metric: time_starttransfer = Time To First Byte\n# Lower TTFB = closer edge location",
      "description": "Commands to measure latency and identify which edge location serves your requests."
    },
    {
      "title": "CloudFront Origin Request Policy",
      "useCase": "Forwarding client location to origin.",
      "code": "# CloudFront adds headers that reveal edge location\n# These headers are automatically added:\n\n# CloudFront-Viewer-Country: US\n# CloudFront-Viewer-City: New York\n# CloudFront-Viewer-ASN: 14618\n# CloudFront-Viewer-Latitude: 40.7128\n# CloudFront-Viewer-Longitude: -74.0060\n\n# Configure in CloudFront behavior settings:\n# Forward these headers to origin\n# Origin reads them for geo-personalization\n\n# The x-amz-cf-pop header in response\n# shows which edge location served:\n# x-amz-cf-pop: JFK50-P1",
      "description": "CloudFront forwards viewer location headers from the edge location to the origin server."
    },
    {
      "title": "CDN PoP Coverage Map File",
      "useCase": "JSON-based coverage configuration.",
      "code": "// CDN edge location data structure\nconst edgeLocations = {\n  \"north-america\": {\n    \"us-east\": [\"IAD\", \"JFK\", \"ATL\", \"MIA\"],\n    \"us-west\": [\"LAX\", \"SFO\", \"SEA\", \"PHX\"],\n    \"us-central\": [\"ORD\", \"DFW\", \"DEN\"],\n    \"canada\": [\"YYZ\", \"YVR\"]\n  },\n  \"europe\": {\n    \"western\": [\"LHR\", \"AMS\", \"CDG\", \"FRA\"],\n    \"nordic\": [\"ARN\", \"CPH\", \"OSL\"],\n    \"southern\": [\"MAD\", \"MIL\", \"FCO\"]\n  },\n  \"asia-pacific\": {\n    \"east-asia\": [\"NRT\", \"ICN\", \"HKG\", \"TPE\"],\n    \"southeast\": [\"SIN\", \"KUL\", \"BKK\"],\n    \"oceania\": [\"SYD\", \"AKL\"]\n  }\n};\n\n// Each code represents a physical PoP\n// IAD = Ashburn, VA; LHR = London; NRT = Tokyo",
      "description": "JSON structure showing CDN edge location distribution by region."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is an edge location?",
      "options": [
        "A database server location",
        "A physical PoP where CDN servers are deployed",
        "A user device",
        "A DNS server"
      ],
      "answer": 1,
      "explanation": "Edge locations are physical data centers where CDN edge servers live."
    },
    {
      "question": "What determines the best edge location for a user?",
      "options": [
        "Random selection",
        "Geographic proximity and server load",
        "Alphabetical order",
        "User preference"
      ],
      "answer": 1,
      "explanation": "The closest edge location with available capacity handles the request."
    },
    {
      "question": "Which CDN has the most edge locations?",
      "options": [
        "Cloudflare",
        "Fastly",
        "Akamai",
        "Azure CDN"
      ],
      "answer": 2,
      "explanation": "Akamai has 4100+ locations, the most of any CDN."
    },
    {
      "question": "What is an IXP?",
      "options": [
        "Internet exchange point for direct ISP peering",
        "Internal XML processor",
        "Indexed data format",
        "Input eXchange Protocol"
      ],
      "answer": 0,
      "explanation": "Internet exchange points allow ISPs and CDNs to exchange traffic directly."
    },
    {
      "question": "What header shows which edge location served the request?",
      "options": [
        "Cache-Control",
        "x-amz-cf-pop",
        "Content-Type",
        "Accept-Encoding"
      ],
      "answer": 1,
      "explanation": "Headers like x-amz-cf-pop show which specific edge location handled the request."
    }
  ]
};
