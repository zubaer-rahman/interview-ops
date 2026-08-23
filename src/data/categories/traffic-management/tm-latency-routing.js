export const tm_latency_routing = {
  "id": "tm-latency-routing",
  "title": "Latency Based Routing",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "Latency-based routing directs traffic to the server/region with the lowest measured latency for each client.",
    "AWS Route 53 latency routing: routes to region with lowest latency based on network measurements.",
    "Benefits: best performance for each user, global load distribution, fault tolerance.",
    "Requires: latency measurement infrastructure, multi-region deployment, global DNS."
  ],
  "laymanDefinition": "Latency-based routing is like Waze GPS navigation. When you ask for directions, Waze checks real-time traffic on all routes and picks the fastest one for you. Similarly, when a user connects, the system measures which server region responds fastest and routes them there.",
  "deepDive": [
    {
      "heading": "How Latency Routing Works (Route 53)",
      "text": "Route 53 maintains latency tables: measured latency between AWS regions and client ISPs. On DNS query, Route 53 evaluates latency to each region and returns the IP of the lowest-latency region. Latency is measured via internal AWS probes. DNS record has TTL (60-300s) to avoid excessive queries."
    },
    {
      "heading": "Proximity Routing (GCP)",
      "text": "Google Cloud Traffic Director uses proximity routing. Routes to the closest backend based on geographic distance. Supports load balancing weights. Can define custom distance functions."
    },
    {
      "heading": "Latency-Based vs Geo Routing",
      "text": "Geo: routes based on geographic region (client IP → continent/country). Simpler, static rules. Latency: routes based on actual measured performance. Adapts to network conditions. Geo is coarse, latency is accurate."
    },
    {
      "heading": "Implementation Requirements",
      "text": "Multi-region deployment of identical stacks. Global database replication (Aurora Global). Shared cache layer (Global Datastore for Redis). Health checks in all regions. DNS with low TTL. Monitor latency changes over time."
    }
  ],
  "interviewAnswer": "Latency-based routing optimizes for real user performance. Use Route 53 latency routing for global workloads. Combine with health checks for fault tolerance. Set appropriate TTL (60-300s). Monitor latency changes and adjust. For web apps, pair latency routing with global CDN.",
  "interviewQuestions": [
    {
      "question": "What is latency-based routing?",
      "answer": "Route traffic to the server with lowest measured latency for each client."
    },
    {
      "question": "How does Route 53 implement it?",
      "answer": "Maintains latency tables between AWS regions and client ISPs."
    },
    {
      "question": "Difference from geo routing?",
      "answer": "Geo: static region-based. Latency: dynamic, measured performance."
    },
    {
      "question": "What is proximity routing?",
      "answer": "GCP routing based on geographic distance to region."
    },
    {
      "question": "What TTL is appropriate?",
      "answer": "60-300 seconds — balances freshness vs DNS query volume."
    },
    {
      "question": "What infrastructure is needed?",
      "answer": "Multi-region deployment, global DB replication, shared cache."
    },
    {
      "question": "What is a latency table?",
      "answer": "Measured latency values between regions and client networks."
    },
    {
      "question": "How does latency routing handle failover?",
      "answer": "If lowest-latency region is unhealthy, Route 53 routes to next-best."
    },
    {
      "question": "Can latency routing combine with weights?",
      "answer": "Yes — weighted latency routing distributes with latency preference."
    },
    {
      "question": "What is a good use case?",
      "answer": "Global API endpoints, real-time apps, multi-region web apps."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Latency Based Routing</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client (US)</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">measuring latency</text><line x1=\"140\" y1=\"48\" x2=\"180\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"35\" width=\"160\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route 53</text><text x=\"270\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Latency table → US-East</text><line x1=\"350\" y1=\"48\" x2=\"390\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"400\" y=\"35\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"445\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">US-East</text><text x=\"445\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">10ms</text><rect x=\"400\" y=\"70\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"445\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EU-West</text><text x=\"445\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">100ms</text><rect x=\"10\" y=\"70\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"95\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client (EU)</text><text x=\"95\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">measuring latency</text><line x1=\"180\" y1=\"82\" x2=\"190\" y2=\"82\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"95\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Latency Table</text><text x=\"95\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">US: 10ms, EU: 100ms, Asia: 200</text><text x=\"95\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ms</text><text x=\"240\" y=\"140\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Latency Routing: Route 53 measures client latency </text><text x=\"240\" y=\"233\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">to each region and routes to fastest.</text></svg>",
  "codeExamples": [
    {
      "title": "Route 53 Latency Routing",
      "useCase": "AWS latency routing.",
      "code": "resource \"aws_route53_record\" \"app\" {\n  latency_routing_policy { region = \"us-east-1\" }\n  set_identifier = \"us-east\"\n  alias {\n    name = aws_lb.us-east.dns_name\n    zone_id = aws_lb.us-east.zone_id\n    evaluate_target_health = true\n  }\n}\n\nresource \"aws_route53_record\" \"app-eu\" {\n  latency_routing_policy { region = \"eu-west-1\" }\n  set_identifier = \"eu-west\"\n  alias {\n    name = aws_lb.eu-west.dns_name\n    zone_id = aws_lb.eu-west.zone_id\n  }\n}",
      "description": "Route 53 latency routing distributes to fastest region per client."
    },
    {
      "title": "GCP Traffic Director Proximity",
      "useCase": "GCP proximity.",
      "code": "apiVersion: networking.gke.io/v1\nkind: Service\nmetadata:\n  name: my-app\n  annotations:\n    cloud.google.com/l4-rbs: \"enabled\"\nspec:\n  type: LoadBalancer\n  externalTrafficPolicy: Local\n  # GCP routes to nearest healthy backend\n  # based on geographic proximity",
      "description": "GCP Traffic Director proximity routing to nearest backend."
    },
    {
      "title": "Global Accelerator with Latency",
      "useCase": "AWS Global Accelerator.",
      "code": "resource \"aws_global_accelerator\" \"app\" {\n  name = \"app-accelerator\"\n  attributes {\n    flow_logs_enabled = true\n  }\n}\n\n# GA uses anycast + AWS backbone\n# Automatically routes to nearest healthy endpoint\n# Lower latency: 60% improvement over public internet\n# Built-in health checks and failover",
      "description": "AWS Global Accelerator uses anycast and AWS backbone for optimal routing."
    },
    {
      "title": "Multi-Region with Latency Routing + CDN",
      "useCase": "Full global setup.",
      "code": "# Architecture:\n# 1. CloudFront CDN at edge (static + caching)\n# 2. Route 53 latency routing to regional ALBs\n# 3. Regional ECS/Fargate clusters\n# 4. Aurora Global Database (writer in one region)\n# 5. Global Datastore for Redis (cross-region replication)\n# 6. S3 cross-region replication for assets\n\n# Benefits:\n# - Edge caching (CDN) for static content\n# - Latency routing for dynamic API\n# - Regional isolation for fault tolerance",
      "description": "Global architecture combining CDN, latency routing, and multi-region compute/database."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does latency routing optimize?",
      "options": [
        "Cost",
        "Performance",
        "Security",
        "Compliance"
      ],
      "answer": 1,
      "explanation": "Latency routing optimizes for best user performance."
    },
    {
      "question": "How does Route 53 measure latency?",
      "options": [
        "DNS probes",
        "Internal latency tables",
        "User reports",
        "ICMP pings"
      ],
      "answer": 1,
      "explanation": "Route 53 maintains internal latency tables."
    },
    {
      "question": "Difference from geo routing?",
      "options": [
        "Geo is dynamic",
        "Geo is static region-based",
        "Same thing",
        "Geo is faster"
      ],
      "answer": 1,
      "explanation": "Geo routing uses static rules; latency uses measured performance."
    },
    {
      "question": "What TTL for latency routing?",
      "options": [
        "3600s",
        "60-300s",
        "1s",
        "86400s"
      ],
      "answer": 1,
      "explanation": "60-300s balances freshness and DNS query volume."
    },
    {
      "question": "What if fastest region is unhealthy?",
      "options": [
        "Route to next-best",
        "Return error",
        "Retry",
        "Fallback to geo"
      ],
      "answer": 0,
      "explanation": "Route 53 routes to next-lowest latency region."
    },
    {
      "question": "What AWS service uses anycast + AWS backbone?",
      "options": [
        "CloudFront",
        "Global Accelerator",
        "Route 53",
        "Direct Connect"
      ],
      "answer": 1,
      "explanation": "Global Accelerator uses anycast and AWS backbone for optimal routing."
    }
  ]
};
