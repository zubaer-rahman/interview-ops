export const mon_zipkin = {
  "id": "mon-zipkin",
  "title": "Zipkin",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Zipkin is a distributed tracing system originally built at Twitter, designed to troubleshoot latency issues in microservice architectures.",
    "Architecture: Reporter (in-app), Transport (HTTP/Kafka), Collector (ingest), Storage (Cassandra/Elasticsearch/MySQL), API (query), UI (visualization).",
    "Zipkin uses the Zipkin data model: traces composed of spans with annotations (timestamps) and binary annotations (key-value metadata).",
    "Widely compatible: B3 propagation headers (Zipkin's trace context standard), supported by many libraries and frameworks natively."
  ],
  "laymanDefinition": "Zipkin is like the black box flight recorder for microservices originally designed by Twitter. When a request travels through multiple services, Zipkin captures every hop with timestamps. Imagine shipping a package across the country — Zipkin tells you it spent 2 hours at the Chicago sorting facility and 30 minutes at the Denver one.",
  "deepDive": [
    {
      "heading": "Zipkin Data Model",
      "text": "Trace: a tree of spans representing a single request. Span: a unit of work with span ID, parent span ID, trace ID, operation name, timestamps, annotations. Annotation: a timestamped event (cs = client send, cr = client receive, ss = server send, sr = server receive). Binary annotation: key-value metadata (HTTP method, status code, path)."
    },
    {
      "heading": "B3 Propagation",
      "text": "Zipkin\\'s trace context propagation format. Headers: x-b3-traceid (trace ID), x-b3-spanid (span ID), x-b3-parentspanid (parent span), x-b3-sampled (sampling decision), x-b3-flags (debug flag). Single header alternative: b3: {trace_id}-{span_id}-{sampled}. Widely adopted beyond Zipkin — many frameworks support B3 natively."
    },
    {
      "heading": "Zipkin Storage Options",
      "text": "Cassandra: best for high-throughput write workloads (Twitter\\'s original choice). Elasticsearch: best for log+trace correlation, full-text search. MySQL: simple, good for development and low-volume. In-memory: development only. Scribe: legacy Facebook log transport. Kafka: intermediate transport for high-availability decoupling."
    },
    {
      "heading": "Zipkin vs Jaeger Comparison",
      "text": "Zipkin: simpler data model, B3 propagation, narrower scope (pure tracing). Jaeger: richer features (adaptive sampling, Kafka pipeline, service graph), OpenTelemetry support, larger ecosystem. Both are CNCF projects. Zipkin has wider library support for B3 propagation. Jaeger has more active development."
    }
  ],
  "interviewAnswer": "Zipkin pioneered distributed tracing in production at Twitter. Its B3 propagation format is widely adopted. For simple tracing needs with broad library compatibility, Zipkin excels. For advanced features (adaptive sampling, Kafka pipeline, service graphs), Jaeger offers more. Both integrate with OpenTelemetry.",
  "interviewQuestions": [
    {
      "question": "What is Zipkin?",
      "answer": "A distributed tracing system originally built at Twitter for troubleshooting latency issues."
    },
    {
      "question": "What is the Zipkin data model?",
      "answer": "Traces composed of spans with annotations (timestamps) and binary annotations (key-value metadata)."
    },
    {
      "question": "What is B3 propagation?",
      "answer": "Zipkin\\'s trace context format using x-b3-* HTTP headers (traceid, spanid, parentspanid, sampled, flags)."
    },
    {
      "question": "What are Zipkin annotations?",
      "answer": "Timestamped events: cs (client send), cr (client receive), ss (server send), sr (server receive)."
    },
    {
      "question": "What storage backends does Zipkin support?",
      "answer": "Cassandra (high throughput), Elasticsearch (full-text search), MySQL (development), in-memory."
    },
    {
      "question": "What is the difference between Zipkin and Jaeger?",
      "answer": "Zipkin: simpler, B3 propagation, narrower scope. Jaeger: richer features, adaptive sampling, larger ecosystem."
    },
    {
      "question": "How does Zipkin propagate trace context?",
      "answer": "Via B3 HTTP headers: x-b3-traceid, x-b3-spanid, x-b3-parentspanid, x-b3-sampled."
    },
    {
      "question": "What is Zipkin\\'s status in CNCF?",
      "answer": "Zipkin is a CNCF graduated project."
    },
    {
      "question": "What is the Zipkin UI?",
      "answer": "A web interface for searching and visualizing traces with timeline view and dependency graphs."
    },
    {
      "question": "How do you instrument Zipkin?",
      "answer": "Using Brave (Java), Zipkin libraries for Go/Python/Node.js, or OpenTelemetry with Zipkin exporter."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Zipkin</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">App</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Brave SDK</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Reporter</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">In-app spans</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Transport</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP / Kafka</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collector</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ingest + store</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Storage</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cassandra / ES</text><line x1=\"110\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"130\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"130\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"130\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"130\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"250\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Zipkin Architecture</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App -> Reporter -> Transport -> Collector -> </text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Storage -> API -> UI. B3 propagation headers.</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> CNCF graduated.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Zipkin: Distributed tracing by Twitter. B3 propaga</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tion, annotations, Cassandra/ES storage. CNCF grad</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">uated.</text></svg>",
  "codeExamples": [
    {
      "title": "Zipkin Quick Start (Docker)",
      "useCase": "Run Zipkin with Elasticsearch.",
      "code": "# Zipkin with Elasticsearch backend\ndocker run -d --name zipkin \\\n  -e STORAGE_TYPE=elasticsearch \\\n  -e ES_HOSTS=http://elasticsearch:9200 \\\n  -p 9411:9411 \\\n  openzipkin/zipkin:latest\n\n# UI: http://localhost:9411/zipkin\n# API: http://localhost:9411/api/v2/\n# Accepts spans at /api/v2/spans",
      "description": "Run Zipkin with Elasticsearch storage backend via Docker."
    },
    {
      "title": "B3 Propagation Headers",
      "useCase": "Trace context in HTTP headers.",
      "code": "# B3 Single Header format\nb3: 4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-1\n\n# B3 Multi-Header format\nx-b3-traceid: 4bf92f3577b34da6a3ce929d0e0e4736\nx-b3-spanid: 00f067aa0ba902b7\nx-b3-parentspanid: 0e7f8f1b6b9a2d3c\nx-b3-sampled: 1\n\n# In HTTP request:\nGET /api/orders HTTP/1.1\nHost: payment-service\nx-b3-traceid: 4bf92f3577b34da6a3ce929d0e0e4736\nx-b3-spanid: 00f067aa0ba902b7\nx-b3-sampled: 1",
      "description": "B3 propagation headers in single and multi-header formats for trace context propagation."
    },
    {
      "title": "Zipkin API (Send Spans)",
      "useCase": "Post spans to Zipkin collector.",
      "code": "POST /api/v2/spans\nContent-Type: application/json\n\n[{\n  \"id\": \"00f067aa0ba902b7\",\n  \"traceId\": \"4bf92f3577b34da6a3ce929d0e0e4736\",\n  \"parentId\": \"0e7f8f1b6b9a2d3c\",\n  \"name\": \"get /api/orders\",\n  \"timestamp\": 1705314600000000,\n  \"duration\": 150000,\n  \"localEndpoint\": {\n    \"serviceName\": \"order-service\"\n  },\n  \"tags\": {\n    \"http.method\": \"GET\",\n    \"http.path\": \"/api/orders\",\n    \"http.status_code\": \"200\"\n  }\n}]",
      "description": "Zipkin API v2 span format for sending trace data to the collector."
    },
    {
      "title": "Brave (Java Zipkin Client)",
      "useCase": "Instrument Java applications.",
      "code": "// Brave is the Java instrumentation library for Zipkin\nimport brave.Tracing;\nimport brave.Span;\n\nTracing tracing = Tracing.newBuilder()\n  .localServiceName(\"order-service\")\n  .spanReporter(AsyncReporter.create(URLConnectionSender.create(\"http://zipkin:9411/api/v2/spans\")))\n  .build();\n\nSpan span = tracing.tracer().newTrace()\n  .name(\"process-order\")\n  .tag(\"order.id\", \"12345\")\n  .start();\n\ntry {\n  // business logic\n  span.tag(\"result\", \"success\");\n} catch (Exception e) {\n  span.tag(\"error\", e.getMessage());\n  span.error(e);\n} finally {\n  span.finish();\n}",
      "description": "Brave Java client for Zipkin — create spans, add tags, record errors, and send to Zipkin."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What company originally created Zipkin?",
      "options": [
        "Google",
        "Twitter",
        "Uber",
        "Facebook"
      ],
      "answer": 1,
      "explanation": "Zipkin was originally built at Twitter for distributed tracing."
    },
    {
      "question": "What is B3 in Zipkin context?",
      "options": [
        "A storage format",
        "Zipkin's trace propagation headers",
        "A data model",
        "A UI theme"
      ],
      "answer": 1,
      "explanation": "B3 is Zipkin\\'s trace context propagation format using x-b3-* HTTP headers."
    },
    {
      "question": "What are Zipkin annotations?",
      "options": [
        "Code comments",
        "Timestamped events (cs, cr, ss, sr)",
        "Field tags",
        "Span IDs"
      ],
      "answer": 1,
      "explanation": "Annotations are standard timestamped events marking client/server send/receive."
    },
    {
      "question": "What is Zipkin\\'s CNCF status?",
      "options": [
        "Incubating",
        "Graduated",
        "Sandbox",
        "Not a CNCF project"
      ],
      "answer": 1,
      "explanation": "Zipkin is a CNCF graduated project."
    },
    {
      "question": "What is the recommended Zipkin storage for high-throughput production?",
      "options": [
        "MySQL",
        "Cassandra",
        "PostgreSQL",
        "SQLite"
      ],
      "answer": 1,
      "explanation": "Cassandra is the original high-throughput storage for Zipkin at Twitter scale."
    },
    {
      "question": "What Java library is used for Zipkin instrumentation?",
      "options": [
        "Brave",
        "Jaeger",
        "OpenTracing",
        "OpenTelemetry"
      ],
      "answer": 0,
      "explanation": "Brave is the standard Java instrumentation library for Zipkin."
    }
  ]
};
