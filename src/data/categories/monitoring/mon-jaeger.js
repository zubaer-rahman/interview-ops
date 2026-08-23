export const mon_jaeger = {
  "id": "mon-jaeger",
  "title": "Jaeger",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Jaeger is a distributed tracing system open-sourced by Uber Technologies, now a CNCF graduated project.",
    "Architecture: jaeger-agent (sidecar), jaeger-collector (ingest), jaeger-query (API + UI), jaeger-ingester (Kafka pipeline).",
    "Supports multiple storage backends: Elasticsearch (production), Cassandra, and Badger (local).",
    "Key features: root-cause analysis, distributed transaction monitoring, latency optimization, service dependency analysis, performance optimization."
  ],
  "laymanDefinition": "Jaeger is like an air traffic control radar for microservices. Each flight (request) gets a transponder code (trace ID). Radar screens (Jaeger UI) show every plane's path through the airspace, which airports (services) they visited, how long they waited on each runway (span duration), and if any crashed (errors).",
  "deepDive": [
    {
      "heading": "Jaeger Architecture Components",
      "text": "Agent: daemon that receives spans from applications via UDP, batches, and sends to collector. Collector: validates, indexes, and stores spans. Can ingest from Kafka for high throughput. Query: serves API and UI for searching/visualizing traces. Ingester: optional component to read from Kafka and write to storage."
    },
    {
      "heading": "Jaeger Storage Backends",
      "text": "Elasticsearch: production choice — scalable, supports full-text search, retention policies. Cassandra: alternative for high write throughput. Badger: embedded local storage — for development/small deployments. Kafka: intermediate buffer between agent/collector and storage for high-volume deployments."
    },
    {
      "heading": "Jaeger Sampling Strategies",
      "text": "Probabilistic: sample X% of all traces (e.g., 0.1 = 10%). Rate-limiting: max traces per second (e.g., 10 traces/sec). Remote: collector controls sampling centrally, adaptive sampling. Const: always sample (debug). Always use sampling in production — storing 100% of traces is too expensive."
    },
    {
      "heading": "Jaeger UI and Search",
      "text": "Service dropdown: select microservice. Operation: select specific operation (endpoint). Tags: filter by key=value (http.status_code=500). Lookback: time range. Min Duration / Max Duration: latency range. Limit: max results. Trace detail page: timeline view, span details, tags, logs, and span relationships."
    }
  ],
  "interviewAnswer": "Jaeger is the defacto open-source tracing solution alongside Zipkin. Deploy with Elasticsearch backend for production. Use agents as sidecars in Kubernetes. Configure sampling wisely — 100% of errors + 5% of success is a good starting point. The UI provides powerful root-cause analysis. Integrated with OpenTelemetry for instrumentation.",
  "interviewQuestions": [
    {
      "question": "What is Jaeger?",
      "answer": "A distributed tracing system open-sourced by Uber, CNCF graduated project."
    },
    {
      "question": "What are Jaeger\\'s main components?",
      "answer": "Agent (sidecar), Collector (ingest), Query (API + UI), Ingester (Kafka pipeline)."
    },
    {
      "question": "What is Jaeger\\'s recommended production storage?",
      "answer": "Elasticsearch — scalable with full-text search and retention policies."
    },
    {
      "question": "What is adaptive sampling in Jaeger?",
      "answer": "Collector controls sampling rates centrally, adjusting based on traffic patterns."
    },
    {
      "question": "How is Jaeger deployed in Kubernetes?",
      "answer": "Jaeger agent as a sidecar or DaemonSet, collector as Deployment, query as Deployment."
    },
    {
      "question": "What is Jaeger\\'s relationship with OpenTelemetry?",
      "answer": "Jaeger accepts OpenTelemetry protocol natively — OTel SDKs can send traces directly to Jaeger."
    },
    {
      "question": "What is a Jaeger agent?",
      "answer": "A daemon that receives spans via UDP, batches them, and sends to the collector."
    },
    {
      "question": "What is Jaeger\\'s dependency graph?",
      "answer": "A visual representation of service-to-service communication based on trace data."
    },
    {
      "question": "How do you filter traces in Jaeger UI?",
      "answer": "By service, operation, tags (key=value), time range, and latency duration."
    },
    {
      "question": "What is the difference between Jaeger and Zipkin?",
      "answer": "Both are tracing systems. Jaeger has more features (adaptive sampling, Kafka support). Zipkin is simpler, narrower scope."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Jaeger</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">App</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Instrumented</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Agent</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">UDP -> batch</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collector</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Validate + store</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Storage</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Elasticsearch</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Query UI</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Trace search</text><line x1=\"110\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"130\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"130\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"130\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"130\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"250\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Jaeger Architecture</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App -> Agent -> Collector -> Storage (ES) -> </text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query UI. Distributed tracing, adaptive sampl</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ing, dependency graphs.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Jaeger: Distributed tracing by Uber, CNCF graduate</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">d. Agent, Collector, Query, Elasticsearch backend.</text></svg>",
  "codeExamples": [
    {
      "title": "Jaeger All-in-One (Development)",
      "useCase": "Quick start with Jaeger.",
      "code": "# Run Jaeger all-in-one (includes agent, collector, query, UI)\ndocker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 5775:5775/udp -p 6831:6831/udp -p 6832:6832/udp \\\n  -p 5778:5778 -p 16686:16686 -p 14250:14250 \\\n  -p 14268:14268 -p 14269:14269 -p 9411:9411 \\\n  jaegertracing/all-in-one:latest\n\n# UI available at http://localhost:16686\n# Send traces to localhost:6831 (UDP) or localhost:14268 (HTTP)",
      "description": "Jaeger all-in-one Docker image for local development and testing."
    },
    {
      "title": "OpenTelemetry to Jaeger (Node.js)",
      "useCase": "Send OTel traces to Jaeger.",
      "code": "const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');\nconst { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');\n\nconst provider = new NodeTracerProvider();\nprovider.addSpanProcessor(\n  new BatchSpanProcessor(\n    new OTLPTraceExporter({\n      url: 'http://jaeger-collector:4317'\n    })\n  )\n);\nprovider.register();",
      "description": "OpenTelemetry Node.js SDK exports traces to Jaeger collector via OTLP protocol."
    },
    {
      "title": "Jaeger Sampling Configuration",
      "useCase": "Configure sampling strategies.",
      "code": "# File-based sampling strategy (sampling.json)\n{\"default_strategy\":\n  {\"type\":\"probabilistic\",\"param\":0.1},\n\"service_strategies\":[\n  {\"service\":\"payment\",\"type\":\"probabilistic\",\"param\":0.5},\n  {\"service\":\"health-check\",\"type\":\"const\",\"param\":0}\n]}\n\n# Pass to collector:\n# --sampling.strategies-file=/etc/jaeger/sampling.json",
      "description": "Jaeger sampling configuration: 10% default, 50% for payment, 0% for health checks."
    },
    {
      "title": "Jaeger Query API",
      "useCase": "Search traces programmatically.",
      "code": "# Get trace by ID\ncurl \"http://jaeger-query:16686/api/traces/abc123def456\"\n\n# Search traces by service\ncurl \"http://jaeger-query:16686/api/traces?service=payment&limit=10\"\n\n# Search with tag filter\ncurl \"http://jaeger-query:16686/api/traces?service=payment&tags=%7B%22error%22%3A%22true%22%7D\"\n\n# Get services list\ncurl \"http://jaeger-query:16686/api/services\"\n\n# Get operations for a service\ncurl \"http://jaeger-query:16686/api/operations?service=payment\"",
      "description": "Jaeger query API for programmatic access to traces, services, and operations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Who originally created Jaeger?",
      "options": [
        "Google",
        "Uber",
        "Netflix",
        "Twitter"
      ],
      "answer": 1,
      "explanation": "Jaeger was open-sourced by Uber Technologies."
    },
    {
      "question": "What is Jaeger\\'s status in CNCF?",
      "options": [
        "Sandbox",
        "Incubating",
        "Graduated",
        "Retired"
      ],
      "answer": 2,
      "explanation": "Jaeger is a CNCF graduated project."
    },
    {
      "question": "What is the recommended production storage for Jaeger?",
      "options": [
        "MySQL",
        "PostgreSQL",
        "Elasticsearch",
        "Redis"
      ],
      "answer": 2,
      "explanation": "Elasticsearch is the recommended production storage backend for Jaeger."
    },
    {
      "question": "What is Jaeger agent used for?",
      "options": [
        "Querying traces",
        "Receiving spans via UDP and batching",
        "Visualizing traces",
        "Storing traces"
      ],
      "answer": 1,
      "explanation": "The agent receives spans via UDP from applications, batches them, and sends to collector."
    },
    {
      "question": "What is adaptive sampling?",
      "options": [
        "Sampling everything",
        "Centrally controlled sampling rates",
        "No sampling",
        "Manual sampling"
      ],
      "answer": 1,
      "explanation": "Adaptive sampling lets the collector control sampling rates centrally."
    },
    {
      "question": "What OpenTelemetry protocol does Jaeger use?",
      "options": [
        "Zipkin",
        "OTLP",
        "OpenTracing",
        "Wavefront"
      ],
      "answer": 1,
      "explanation": "Jaeger natively accepts the OpenTelemetry Protocol (OTLP)."
    }
  ]
};
