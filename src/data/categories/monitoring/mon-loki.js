export const mon_loki = {
  "id": "mon-loki",
  "title": "Loki",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus, by Grafana Labs.",
    "Key difference from Elasticsearch: Loki indexes only metadata (labels), not the full log content. This makes it cheaper and faster at ingestion.",
    "LogQL is Loki's query language, inspired by PromQL. Queries start with a log stream selector (label matching), then filter and process log lines.",
    "Loki integrates natively with Grafana and follows the same multi-tenancy model as Cortex (separate data per tenant)."
  ],
  "laymanDefinition": "Loki is like a library card catalog instead of the full books. Elasticsearch reads every word of every book (full-text indexing) — expensive. Loki just records the book title, author, and shelf location (labels), then goes to get the book when you ask. Much cheaper storage, slightly slower search.",
  "deepDive": [
    {
      "heading": "Loki Architecture",
      "text": "Distributor: receives logs, validates, and distributes to ingesters. Ingester: builds compressed chunks in memory, flushes to object storage. Querier: reads chunks and runs LogQL queries. Query frontend: splits and caches queries for parallel execution. Object storage: S3, GCS, Azure Blob, or local filesystem for long-term chunk storage."
    },
    {
      "heading": "LogQL (Loki Query Language)",
      "text": "Stream selector: {job=\"myapp\", environment=\"prod\"}. Line filter: |= \"error\" (contains), != \"debug\" (not contains), |~ \"regex\" (match). Parser: | logfmt (parse logfmt), | json (parse JSON). Label filter: | level = \"error\" (structured field). Aggregation: rate(), count_over_time()."
    },
    {
      "heading": "Loki vs Elasticsearch Comparison",
      "text": "Ingestion cost: Loki cheaper (no full-text index). Storage: Loki uses object storage (S3), ES uses local SSDs. Query speed: ES faster for complex full-text search — Loki faster for simple label-based queries. Scaling: Loki simpler to scale (no shard management). Retention: Loki cheaper for long retention."
    },
    {
      "heading": "Loki Configuration",
      "text": "Distributor: replication factor, ring configuration. Ingester: chunk size (1-2MB), target chunk size, flush interval. Querier: max concurrent queries, query timeout. Storage: schema config (v11, v12), object store backend. Limits: ingestion rate, max line size, max stream per tenant."
    }
  ],
  "interviewAnswer": "Loki is the most cost-effective log storage option for Prometheus+Grafana users. It trades full-text indexing for cheaper storage — fine if your primary use case is browsing recent logs and alerting on patterns. Use LogQL for querying. Configure chunk size and flush interval for your throughput.",
  "interviewQuestions": [
    {
      "question": "What is Loki?",
      "answer": "A horizontally-scalable, multi-tenant log aggregation system from Grafana Labs, inspired by Prometheus."
    },
    {
      "question": "How does Loki differ from Elasticsearch?",
      "answer": "Loki indexes only labels (metadata), not full text. Cheaper ingestion, different query model."
    },
    {
      "question": "What is LogQL?",
      "answer": "Loki\\'s query language, inspired by PromQL — uses stream selectors, line filters, and parsers."
    },
    {
      "question": "What are the main Loki components?",
      "answer": "Distributor (ingest), Ingester (buffer+chunk), Querier (search), Query Frontend (cache+split)."
    },
    {
      "question": "What storage does Loki use?",
      "answer": "Object storage: S3, GCS, Azure Blob, or MinIO for long-term. Local filesystem for single-binary mode."
    },
    {
      "question": "What is a Loki stream?",
      "answer": "A set of logs sharing the same label set (job, instance, container). Each stream has unique labels."
    },
    {
      "question": "What is a Loki chunk?",
      "answer": "A compressed block of log data for a single stream, typically 1-2MB, stored in object storage."
    },
    {
      "question": "What parsers does LogQL support?",
      "answer": "logfmt, json, regexp, pattern. Use these to extract structured fields from log lines."
    },
    {
      "question": "How does Loki handle multi-tenancy?",
      "answer": "Via X-Scope-OrgID header — each tenant has isolated data. Same model as Cortex."
    },
    {
      "question": "What is the Grafana Loki query pattern?",
      "answer": "Grafana Explore -> select Loki data source -> write LogQL query -> visualize as logs or metrics."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Loki</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Logs</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{app=\"myapp\"}</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Distributor</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Validate + route</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ingester</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Chunk + store</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Object Store</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">S3 / GCS</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Querier</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">LogQL search</text><line x1=\"110\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"130\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"130\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"130\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"130\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"250\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Loki Architecture</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logs -> Distributor -> Ingester (chunks) -> O</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">bject Storage -> Querier (LogQL). Label-index</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ed, cost-effective.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Loki: Prometheus-inspired log aggregation. Label i</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ndexing, LogQL, object storage, multi-tenant.</text></svg>",
  "codeExamples": [
    {
      "title": "Loki Configuration (loki.yaml)",
      "useCase": "Single-binary config.",
      "code": "auth_enabled: false\nserver:\n  http_listen_port: 3100\ncommon:\n  path_prefix: /tmp/loki\n  storage:\n    filesystem:\n      chunks_directory: /tmp/loki/chunks\n  replication_factor: 1\nschema_config:\n  configs:\n    - from: 2023-01-01\n      store: boltdb-shipper\n      object_store: filesystem\n      schema: v12\nlimits_config:\n  max_line_size: 256k\n  ingestion_rate_mb: 10",
      "description": "Loki single-binary configuration with filesystem storage, schema v12, and limits."
    },
    {
      "title": "LogQL Queries (Real Examples)",
      "useCase": "Common LogQL patterns.",
      "code": "# All logs: {service='payment'}\n# Filter errors: {service='payment'} |= 'error'\n# JSON parse: {service='payment'} | json | level = 'error'\n# Rate: sum(rate({service='payment'} |= 'error' [5m]))\n# Logfmt parse: {service='payment'} | logfmt | duration > 2000",
      "description": "LogQL queries from basic filtering to rate calculation."
    },
    {
      "title": "Promtail Configuration (Log Shipper)",
      "useCase": "Ship logs to Loki.",
      "code": "clients:\n  - url: http://loki:3100/loki/api/v1/push\nscrape_configs:\n  - job_name: application\n    static_configs:\n      - targets: [localhost]\n        labels:\n          job: myapp\n          __path__: /var/log/myapp/*.log",
      "description": "Promtail configuration shipping application logs to Loki."
    },
    {
      "title": "Structured Logging for LogQL",
      "useCase": "Write logs for easy LogQL parsing.",
      "code": "# GOOD: {\"level\":\"error\",\"service\":\"payment\",\"duration_ms\":150,\"trace_id\":\"abc123\"}\n# GOOD: level=error service=payment msg=\"Payment failed\" duration_ms=150\n# BAD: [2024-01-15] ERROR: Payment failed for order 123",
      "description": "Structured logging (JSON/logfmt) enables powerful LogQL parsing."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Loki index?",
      "options": [
        "Full log content",
        "Labels only (metadata)",
        "Timestamps only",
        "Everything"
      ],
      "answer": 1,
      "explanation": "Loki indexes only labels (metadata), not full text."
    },
    {
      "question": "What is LogQL?",
      "options": [
        "A SQL variant",
        "Loki's query language",
        "A log shipper",
        "An alert format"
      ],
      "answer": 1,
      "explanation": "LogQL is Loki\\'s PromQL-inspired query language."
    },
    {
      "question": "What component ingests logs into Loki?",
      "options": [
        "Querier",
        "Distributor",
        "Compactor",
        "Query Frontend"
      ],
      "answer": 1,
      "explanation": "The Distributor receives and validates incoming log data."
    },
    {
      "question": "What storage does Loki use for long-term chunks?",
      "options": [
        "Local SSDs",
        "Object storage (S3/GCS)",
        "MySQL",
        "Redis"
      ],
      "answer": 1,
      "explanation": "Loki uses object storage (S3, GCS, Azure Blob) for long-term chunk storage."
    },
    {
      "question": "What is a Loki stream?",
      "options": [
        "A single log line",
        "A set of logs with the same labels",
        "A query result",
        "An alert rule"
      ],
      "answer": 1,
      "explanation": "A stream is a set of logs sharing the same label set."
    },
    {
      "question": "What LogQL parser parses JSON logs?",
      "options": [
        "logfmt",
        "json",
        "regexp",
        "pattern"
      ],
      "answer": 1,
      "explanation": "The | json parser extracts fields from JSON-formatted log lines."
    }
  ]
};
