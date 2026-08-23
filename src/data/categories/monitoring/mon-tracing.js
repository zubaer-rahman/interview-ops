export const mon_tracing = {
  "id": "mon-tracing",
  "title": "Tracing",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Tracing tracks the path of a single request across distributed services, showing timing and dependencies for each step.",
    "A trace is a tree of spans. Each span represents a unit of work with a start time, end time, and metadata (service name, operation, tags).",
    "OpenTracing and OpenTelemetry provide vendor-neutral APIs for generating and collecting traces across different languages and frameworks.",
    "Tracing answers: Where is time spent? Which service is failing? What is the dependency graph? What is the critical path?"
  ],
  "laymanDefinition": "Tracing is like a package tracking system (UPS/FedEx) for your requests. When you order a package (make a request), you get a tracking number (trace ID). It shows every facility it passes through (services), how long it sat at each one (span duration), and which step failed (error span).",
  "deepDive": [
    {
      "heading": "Trace and Span Model",
      "text": "Trace: the complete path of a request through the system. Uniquely identified by trace_id. Span: a single unit of work within a trace. Has span_id, parent_span_id (for hierarchy), operation name, start/end timestamps, status, tags, and logs. Root span: the first span in a trace (no parent)."
    },
    {
      "heading": "Context Propagation",
      "text": "Trace context (trace_id, span_id) must be passed between services. In HTTP: via headers (traceparent, tracestate per W3C Trace Context). In messaging: via message metadata. Propagation happens automatically in instrumented frameworks. Must propagate across async boundaries (queues, events)."
    },
    {
      "heading": "Sampling Strategies",
      "text": "Head-based: decision made at the root span (e.g., sample 5% of requests). Consistent — either whole trace is sampled or none. Tail-based: store all spans, decide later which to keep. Common: sample 100% of errors + 5% of successful requests."
    },
    {
      "heading": "Distributed Tracing Challenges",
      "text": "Performance overhead: instrumentation adds latency. Storage: high-cardinality trace data is expensive. Sampling: must balance completeness vs cost. Clock skew: spans from different machines need synchronized clocks. Privacy: trace data may contain sensitive request parameters."
    }
  ],
  "interviewAnswer": "Tracing is the most powerful debugging tool for microservices. Start with automatic instrumentation (auto-instrumenting agents) and add manual spans for critical business logic. Sample based on error status. Use W3C Trace Context for propagation. Integrate traces with metrics (exemplars) and logs (trace_id in log lines) for full observability.",
  "interviewQuestions": [
    {
      "question": "What is distributed tracing?",
      "answer": "Tracking a single request\\'s path across multiple services, showing timing and dependencies."
    },
    {
      "question": "What is a span?",
      "answer": "A unit of work within a trace — has operation name, timing, status, tags, and hierarchical parent."
    },
    {
      "question": "What is a trace?",
      "answer": "A tree of spans representing the complete path of a request — identified by a trace_id."
    },
    {
      "question": "How is trace context propagated?",
      "answer": "Via W3C Trace Context headers (traceparent, tracestate) in HTTP requests. Also via message metadata."
    },
    {
      "question": "What is sampling in tracing?",
      "answer": "Collecting only a fraction of traces to manage storage cost while maintaining statistical significance."
    },
    {
      "question": "What is head-based vs tail-based sampling?",
      "answer": "Head-based: decision at root (consistent — whole trace or nothing). Tail-based: store all, decide later."
    },
    {
      "question": "What is the W3C Trace Context standard?",
      "answer": "A standard HTTP header format (traceparent, tracestate) for propagating trace context across services."
    },
    {
      "question": "What tools support tracing?",
      "answer": "Jaeger (open source), Zipkin (open source), Datadog APM, New Relic, AWS X-Ray, Honeycomb."
    },
    {
      "question": "What is OpenTelemetry tracing?",
      "answer": "A vendor-neutral API and SDK for generating, collecting, and exporting traces across languages."
    },
    {
      "question": "How do you correlate traces with logs?",
      "answer": "Include trace_id and span_id in every structured log line. Log platforms can query by trace_id."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Tracing</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Request</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTTP / gRPC</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service A</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Span 1: auth</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service B</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Span 2: payment</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service C</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Span 3: DB query</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Trace ID</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">abc-123-xyz</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Distributed Tracing</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Trace: tree of spans across services. Sho</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ws timing, errors, and dependency graph.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Tracing: Track requests across services — trace_id</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, spans, context propagation, sampling. Critical f</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">or microservices.</text></svg>",
  "codeExamples": [
    {
      "title": "OpenTelemetry Tracing (Node.js)",
      "useCase": "Manual span creation.",
      "code": "const { trace, context, SpanStatusCode } = require('@opentelemetry/api');\nasync function processOrder(orderId) {\n  const tracer = trace.getTracer('order-service');\n  return tracer.startActiveSpan('processOrder', async (span) => {\n    try {\n      span.setAttribute('order.id', orderId);\n      const validated = await tracer.startActiveSpan('validateOrder', async (childSpan) => {\n        const result = await validate(orderId);\n        childSpan.setStatus({ code: SpanStatusCode.OK });\n        childSpan.end();\n        return result;\n      });\n      span.setStatus({ code: SpanStatusCode.OK });\n      return validated;\n    } catch (error) {\n      span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });\n      span.recordException(error);\n      throw error;\n    } finally { span.end(); }\n  });\n}",
      "description": "Manual span creation with OpenTelemetry — parent-child relationships, attributes, error recording."
    },
    {
      "title": "Auto-Instrumentation (Express)",
      "useCase": "Zero-code tracing.",
      "code": "const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');\nconst { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');\nconst { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');\nconst { registerInstrumentations } = require('@opentelemetry/instrumentation');\nconst provider = new NodeTracerProvider();\nprovider.register();\nregisterInstrumentations({\n  instrumentations: [\n    new ExpressInstrumentation(),\n    new HttpInstrumentation(),\n  ],\n});",
      "description": "Auto-instrumentation adds tracing to Express and HTTP without modifying application code."
    },
    {
      "title": "Trace Context Propagation (HTTP Headers)",
      "useCase": "W3C Trace Context.",
      "code": "const { context, trace } = require('@opentelemetry/api');\nasync function callPaymentService(orderData) {\n  const headers = {};\n  const span = trace.getTracer('order-service').startSpan('callPaymentService');\n  trace.propagation.inject(context.active(), headers);\n  return fetch('http://payment/charge', { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify(orderData) });\n}",
      "description": "W3C Trace Context propagation injects traceparent/tracestate headers for distributed tracing."
    },
    {
      "title": "Jaeger Query (Trace Search)",
      "useCase": "Querying traces by tag.",
      "code": "# curl \"http://jaeger:16686/api/traces?service=payment-service&limit=10\"\n# curl \"http://jaeger:16686/api/traces/abc123def456\"",
      "description": "Jaeger API for searching traces by service, tag, or trace ID."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a trace?",
      "options": [
        "A single metric value",
        "The complete path of a request across services",
        "A log message",
        "A dashboard panel"
      ],
      "answer": 1,
      "explanation": "A trace represents the complete path of a request through the distributed system."
    },
    {
      "question": "What is a span?",
      "options": [
        "A single service instance",
        "A unit of work within a trace",
        "A metric counter",
        "A log level"
      ],
      "answer": 1,
      "explanation": "A span represents a single unit of work with timing and metadata."
    },
    {
      "question": "How is trace context propagated?",
      "options": [
        "Via database queries",
        "Via HTTP headers (traceparent)",
        "Via configuration files",
        "Via environment variables"
      ],
      "answer": 1,
      "explanation": "W3C Trace Context standard uses traceparent and tracestate HTTP headers."
    },
    {
      "question": "What is sampling in tracing?",
      "options": [
        "Storing all traces",
        "Collecting only a subset of traces",
        "Speeding up queries",
        "Encrypting trace data"
      ],
      "answer": 1,
      "explanation": "Sampling collects a fraction of traces to balance observability with storage costs."
    },
    {
      "question": "What is the W3C Trace Context?",
      "options": [
        "A database schema",
        "A standard for trace propagation headers",
        "A logging format",
        "A metric naming convention"
      ],
      "answer": 1,
      "explanation": "W3C Trace Context defines standard HTTP headers for propagating trace context."
    },
    {
      "question": "What is head-based sampling?",
      "options": [
        "Decision at root span",
        "Decision after data collection",
        "Random sampling with no rules",
        "Sampling only errors"
      ],
      "answer": 0,
      "explanation": "Head-based sampling decides at the root span, ensuring either the full trace or nothing is sampled."
    }
  ]
};
