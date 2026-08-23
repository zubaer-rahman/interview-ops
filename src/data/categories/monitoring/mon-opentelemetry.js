export const mon_opentelemetry = {
  "id": "mon-opentelemetry",
  "title": "OpenTelemetry",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "OpenTelemetry (OTel) is a vendor-neutral, CNCF graduated observability framework for generating, collecting, and exporting telemetry data (traces, metrics, logs).",
    "Result of merging OpenTracing and OpenCensus in 2019. Provides a single set of APIs, SDKs, and collectors for instrumenting applications.",
    "Components: API (interfaces), SDK (implementation), Collector (receives/processes/exports telemetry), Instrumentation libraries (auto-instrumentation for frameworks).",
    "Exporters send data to any backend: Jaeger, Zipkin, Prometheus, Grafana, Datadog, New Relic, AWS X-Ray, Azure Monitor, GCP, and more."
  ],
  "laymanDefinition": "OpenTelemetry is like a universal adapter for observability. Imagine every country (observability tool) has a different power outlet shape (data format). OpenTelemetry is a universal power strip — you plug your appliance (app) into it, and it has adapters for every country. If you switch countries (backend tools), you just change the adapter, not the appliance.",
  "deepDive": [
    {
      "heading": "OpenTelemetry Architecture",
      "text": "API: language-specific interfaces for creating traces, metrics, and logs (no dependencies). SDK: implementation of the API with processing pipelines, sampling, and batching. Collector: vendor-agnostic server that receives, processes, and exports telemetry data. Instrumentation: libraries that automatically generate telemetry from popular frameworks (Express, gRPC, HTTP, Redis, MySQL)."
    },
    {
      "heading": "OpenTelemetry Signals",
      "text": "Traces: distributed tracing with spans, context propagation (W3C Trace Context). Metrics: counters, gauges, histograms, with exemplar support. Logs: structured log records with trace context correlation. Future: baggage (context propagation for arbitrary key-value pairs). All three signals can be correlated via trace_id and span_id."
    },
    {
      "heading": "OTLP (OpenTelemetry Protocol)",
      "text": "Standard protocol for transmitting telemetry data between clients and collector. Supports gRPC and HTTP/protobuf. Specification defines data model, wire format, and communication protocol. Collector can receive OTLP and export to any backend. Enables vendor-neutral instrumentation — write once, export anywhere."
    },
    {
      "heading": "OpenTelemetry Collector",
      "text": "Receiver: accepts data via OTLP, Jaeger, Zipkin, Prometheus, Kafka. Processor: batch, filter, transform, sample, add metadata, redact sensitive data. Exporter: sends to Jaeger, Zipkin, Prometheus, Elasticsearch, Loki, Datadog, New Relic, AWS X-Ray, GCP, Azure. Pipeline: Receiver -> Processor -> Exporter. Can be deployed as agent (per-node) or gateway (central)."
    },
    {
      "heading": "Semantic Conventions",
      "text": "Standardized attribute names for common concepts across languages and signals. HTTP: http.method, http.url, http.status_code. Database: db.system, db.name, db.statement. Messaging: messaging.system, messaging.destination. RPC: rpc.system, rpc.service. General: service.name, deployment.environment, cloud.provider. Using conventions ensures consistent data across the organization."
    }
  ],
  "interviewAnswer": "OpenTelemetry is the future of observability instrumentation. Instrument once with OTel, export to any backend. Use auto-instrumentation to get started quickly, add manual spans for critical business logic. Deploy the Collector for vendor-neutral data routing. Follow semantic conventions for consistent data. OTel eliminates vendor lock-in for observability.",
  "interviewQuestions": [
    {
      "question": "What is OpenTelemetry?",
      "answer": "A vendor-neutral, CNCF graduated observability framework for generating, collecting, and exporting telemetry data."
    },
    {
      "question": "What signals does OpenTelemetry support?",
      "answer": "Traces (distributed tracing), Metrics (counters, gauges, histograms), Logs (structured log records)."
    },
    {
      "question": "What is OTLP?",
      "answer": "OpenTelemetry Protocol — a standard protocol for transmitting telemetry data between clients and collector."
    },
    {
      "question": "What is the OpenTelemetry Collector?",
      "answer": "A vendor-agnostic server that receives, processes, and exports telemetry data to any backend."
    },
    {
      "question": "What are semantic conventions?",
      "answer": "Standardized attribute names (http.method, db.system) for consistency across languages and signals."
    },
    {
      "question": "What is auto-instrumentation?",
      "answer": "Libraries that automatically generate telemetry from popular frameworks without code changes."
    },
    {
      "question": "What is the relationship between OTel and Jaeger/Zipkin?",
      "answer": "OTel instruments and exports; Jaeger/Zipkin store and visualize. OTel can export to both."
    },
    {
      "question": "What is the OpenTelemetry API vs SDK?",
      "answer": "API: interfaces for creating telemetry (no dependencies). SDK: implementation with processors, samplers, exporters."
    },
    {
      "question": "How do you correlate traces and logs in OTel?",
      "answer": "Logs include trace_id and span_id fields. OTel logging SDKs automatically inject trace context."
    },
    {
      "question": "What companies support OpenTelemetry?",
      "answer": "Most major observability vendors: Datadog, New Relic, AWS, Azure, GCP, Grafana, Splunk, Elastic, Honeycomb."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">OpenTelemetry</text><rect x=\"10\" y=\"35\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"62.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API</text><text x=\"62.5\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Interfaces</text><rect x=\"115\" y=\"35\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"167.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">SDK</text><text x=\"167.5\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Implementation</text><rect x=\"220\" y=\"35\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collector</text><text x=\"272.5\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Agnostic router</text><rect x=\"10\" y=\"65\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"62.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Traces</text><text x=\"62.5\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributed</text><rect x=\"115\" y=\"65\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"167.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Metrics</text><text x=\"167.5\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Counters/gauges</text><rect x=\"220\" y=\"65\" width=\"105\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Logs</text><text x=\"272.5\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Structured</text><rect x=\"10\" y=\"95\" width=\"315\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"167.5\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OTLP Protocol</text><text x=\"167.5\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Vendor-neutral: OTLP -> Collector -> Any backend</text><rect x=\"10\" y=\"130\" width=\"315\" height=\"30\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"167.5\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OpenTelemetry Ecosystem</text><text x=\"167.5\" y=\"143\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Single instrumentation. Export anywhere. Auto-instrumenta</text><text x=\"167.5\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tion, semantic conventions, Collector. CNCF graduated.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">OpenTelemetry: Vendor-neutral observability. One i</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nstrumentation for traces, metrics, and logs. CNCF</text><text x=\"240\" y=\"224\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> graduated.</text></svg>",
  "codeExamples": [
    {
      "title": "OpenTelemetry Auto-Instrumentation (Node.js)",
      "useCase": "Zero-code tracing.",
      "code": "# Start your app with auto-instrumentation\n# node --require @opentelemetry/auto-instrumentations-node/register app.js\n\n# Or programmatically:\nconst { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\nconst { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');\nconst { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');\n\nconst provider = new NodeTracerProvider();\nprovider.addSpanProcessor(new BatchSpanProcessor(\n  new OTLPTraceExporter({ url: 'http://otel-collector:4318/v1/traces' })\n));\nprovider.register();\nprovider.registerInstrumentations({\n  instrumentations: [getNodeAutoInstrumentations()],\n});",
      "description": "OpenTelemetry auto-instrumentation adds tracing to Express, HTTP, gRPC, Redis, and more without code changes."
    },
    {
      "title": "OpenTelemetry Collector Configuration",
      "useCase": "Receive OTLP and export to multiple backends.",
      "code": "receivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: 0.0.0.0:4317\n      http:\n        endpoint: 0.0.0.0:4318\n\nprocessors:\n  batch:\n    timeout: 1s\n    send_batch_size: 1024\n\nexporters:\n  jaeger:\n    endpoint: jaeger:14250\n  prometheus:\n    endpoint: 0.0.0.0:8889\n  otlp:\n    endpoint: another-collector:4317\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [jaeger, otlp]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [prometheus]",
      "description": "OTel Collector config: receive OTLP traces+metrics, batch, export to Jaeger + Prometheus + another collector."
    },
    {
      "title": "OpenTelemetry Metrics (Python)",
      "useCase": "Create and export metrics.",
      "code": "from opentelemetry import metrics\nfrom opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter\nfrom opentelemetry.sdk.metrics import MeterProvider\nfrom opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader\n\nexporter = OTLPMetricExporter(endpoint=\"http://otel-collector:4317\", insecure=True)\nreader = PeriodicExportingMetricReader(exporter, export_interval_millis=5000)\nprovider = MeterProvider(metric_readers=[reader])\nmetrics.set_meter_provider(provider)\n\nmeter = metrics.get_meter(\"myapp\", \"1.0.0\")\n\n# Counter\nrequest_counter = meter.create_counter(\"http.requests\", description=\"Total requests\")\nrequest_counter.add(1, {\"method\": \"GET\", \"status\": \"200\"})\n\n# Histogram\nlatency = meter.create_histogram(\"http.latency\", unit=\"ms\", description=\"Request latency\")\nlatency.record(150, {\"method\": \"GET\"})\n\n# Gauge (ObservableGauge)\ncpu_usage = meter.create_observable_gauge(\"cpu.usage\", callbacks=[get_cpu_usage])",
      "description": "OpenTelemetry Python SDK creating counter, histogram, and gauge metrics exported via OTLP."
    },
    {
      "title": "OpenTelemetry Trace Context in Logs",
      "useCase": "Correlate logs with traces.",
      "code": "// Automatically include trace context in logs\n// With OpenTelemetry logging SDK\n\nconst { trace } = require('@opentelemetry/api');\n\n// Log with OTel logger (auto-includes trace context)\nlogger.warn(\"Payment processing delayed\", {\n  orderId: 12345,\n  delay_ms: 1500,\n  // trace_id and span_id automatically injected\n});\n\n// JSON log output:\n{\n  \"level\": \"warn\",\n  \"message\": \"Payment processing delayed\",\n  \"orderId\": 12345,\n  \"delay_ms\": 1500,\n  \"trace_id\": \"4bf92f3577b34da6a3ce929d0e0e4736\",\n  \"span_id\": \"00f067aa0ba902b7\"\n}\n\n// In Kibana/Elasticsearch:\n// Search by trace_id to see all logs for a request",
      "description": "OpenTelemetry automatically injects trace_id and span_id into log records for full correlation."
    },
    {
      "title": "Semantic Conventions Example",
      "useCase": "Standard attribute naming.",
      "code": "# HTTP semantic conventions\nhttp.method: GET\nhttp.url: https://api.example.com/orders\nhttp.status_code: 200\nhttp.request_content_length: 1024\n\n# Database semantic conventions\ndb.system: postgresql\ndb.name: orders_db\ndb.statement: SELECT * FROM orders WHERE id = ?\n\n# Messaging semantic conventions\nmessaging.system: kafka\nmessaging.destination: orders-topic\nmessaging.message_id: abc-123\n\n# General resource conventions\nservice.name: payment-service\nservice.version: 1.2.3\ndeployment.environment: production\ncloud.provider: aws\ncloud.region: us-east-1",
      "description": "OpenTelemetry semantic conventions standardize attribute names across all languages and signals."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is OpenTelemetry?",
      "options": [
        "A specific tracing tool",
        "A vendor-neutral observability framework",
        "A metrics database",
        "A log shipper"
      ],
      "answer": 1,
      "explanation": "OpenTelemetry is a vendor-neutral, CNCF graduated observability framework."
    },
    {
      "question": "What are the three OTel signals?",
      "options": [
        "CPU, Memory, Disk",
        "Traces, Metrics, Logs",
        "Errors, Warnings, Info",
        "JSON, XML, CSV"
      ],
      "answer": 1,
      "explanation": "OpenTelemetry supports Traces, Metrics, and Logs as its three signals."
    },
    {
      "question": "What is OTLP?",
      "options": [
        "OpenTelemetry Protocol",
        "Open Tracing Library Protocol",
        "Observability Tool Link Protocol",
        "Open Telemetry Log Processor"
      ],
      "answer": 0,
      "explanation": "OTLP is the OpenTelemetry Protocol for transmitting telemetry data."
    },
    {
      "question": "What is the OpenTelemetry Collector?",
      "options": [
        "A storage backend",
        "A vendor-agnostic telemetry processor/exporter",
        "A visualization tool",
        "An alert manager"
      ],
      "answer": 1,
      "explanation": "The Collector receives, processes, and exports telemetry data to any backend."
    },
    {
      "question": "What are semantic conventions?",
      "options": [
        "Community rules",
        "Standardized attribute names for consistency",
        "Company policies",
        "Legal agreements"
      ],
      "answer": 1,
      "explanation": "Semantic conventions standardize attribute names like http.method, db.system across all signals."
    },
    {
      "question": "What does auto-instrumentation mean?",
      "options": [
        "Manual code changes",
        "Automatic telemetry generation from frameworks",
        "Automatic deployment",
        "Self-hosted instrumentation"
      ],
      "answer": 1,
      "explanation": "Auto-instrumentation libraries automatically generate telemetry from popular frameworks without code changes."
    }
  ]
};
