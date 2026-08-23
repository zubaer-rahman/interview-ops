export const mon_logging = {
  "id": "mon-logging",
  "title": "Logging",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Logging records discrete events from applications and infrastructure — timestamped, structured messages for debugging and analysis.",
    "Modern logging is structured (JSON format) not unstructured (plain text). Structured logs are parseable, searchable, and queryable.",
    "Log levels: DEBUG (detailed debug info), INFO (normal operations), WARN (potential issues), ERROR (failures), FATAL (critical failures).",
    "Centralized logging aggregates logs from all sources into a single platform (Elasticsearch, Loki, Splunk) for search, correlation, and alerting."
  ],
  "laymanDefinition": "Logging is like a plane's black box flight recorder. Every event, button press, alarm, and system change is recorded with timestamps. When something goes wrong, investigators replay the log to understand exactly what happened second by second before and during the incident.",
  "deepDive": [
    {
      "heading": "Structured Logging (JSON)",
      "text": "{\"timestamp\": \"2024-01-15T10:30:00Z\", \"level\": \"ERROR\", \"service\": \"payment\", \"message\": \"Payment failed\", \"error\": \"insufficient_funds\", \"user_id\": 42, \"request_id\": \"abc123\", \"duration_ms\": 150}. Machine-parseable, supports indexing, queryable by any field."
    },
    {
      "heading": "Log Levels and When to Use Them",
      "text": "FATAL: service cannot continue, crash imminent. ERROR: operation failed, needs immediate attention. WARN: potential issue, unexpected but handled. INFO: normal events — request started, user created. DEBUG: detailed diagnostic info for development. Never use DEBUG in production."
    },
    {
      "heading": "Centralized Logging Architecture",
      "text": "Agents (Filebeat, Fluentd) ship logs from each node. Buffer/message queue (Kafka, Redis) for reliability. Indexer/search (Elasticsearch, Loki) stores and indexes. Visualization (Kibana, Grafana) queries and displays. Alerting (ElastAlert, Grafana alerts) on log patterns."
    },
    {
      "heading": "Log Correlation and Context",
      "text": "Correlation ID (trace ID, request ID) links logs across microservices. Pass via headers in distributed systems. Add context: user_id, order_id, tenant_id, service_name, version, environment. Every log line should be self-describing."
    }
  ],
  "interviewAnswer": "Logging is essential for debugging and post-mortem analysis. Always use structured JSON logging. Add correlation IDs to trace requests across services. Use appropriate log levels. Centralize logs for search and correlation. Never log sensitive data (passwords, PII, credit cards).",
  "interviewQuestions": [
    {
      "question": "What is structured logging?",
      "answer": "Logging in a machine-parseable format (JSON) where each field is queryable."
    },
    {
      "question": "What are the common log levels?",
      "answer": "DEBUG, INFO, WARN, ERROR, FATAL. Use appropriately — DEBUG in dev, INFO/WARN/ERROR in production."
    },
    {
      "question": "What is a correlation ID?",
      "answer": "A unique ID (trace/request ID) passed across microservices to link all logs for a single request."
    },
    {
      "question": "What is centralized logging?",
      "answer": "Aggregating logs from all sources into a single platform for search, correlation, alerting, and analysis."
    },
    {
      "question": "What tools are used for centralized logging?",
      "answer": "Elasticsearch (storage/search), Logstash/Fluentd (shipping), Kibana/Grafana (visualization), Loki (log aggregation)."
    },
    {
      "question": "What should you never include in logs?",
      "answer": "Passwords, credit card numbers, PII, secrets, API keys, tokens. Mask or omit sensitive data."
    },
    {
      "question": "What is log rotation?",
      "answer": "Archiving and deleting old log files to manage disk space. Common: rotate daily or at N MB, keep 30 days."
    },
    {
      "question": "What is the difference between structured and unstructured logging?",
      "answer": "Structured: JSON fields, queryable by tool. Unstructured: plain text, grep-friendly but hard to query at scale."
    },
    {
      "question": "What is a log shipper?",
      "answer": "A lightweight agent (Filebeat, Fluent Bit, Vector) that reads log files and sends them to a central system."
    },
    {
      "question": "What is log retention?",
      "answer": "How long logs are kept. Short-term (7-30 days) for debug logs. Long-term (1 year+) for audit/compliance logs."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Logging</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">App Logs</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">JSON structured</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Log Shipper</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fluentd/Filebeat</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Buffer</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kafka/Redis</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Storage</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Elasticsearch/Loki</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Visualization</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Kibana/Grafana</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Centralized Logging</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">App -> Shipper -> Buffer -> Storage -> Vi</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sualize. Structured JSON with correlation</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> IDs.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Logging: Structured JSON events with correlation I</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Ds. Centralize for search, alerting, and debugging</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "Structured JSON Logging (Pino)",
      "useCase": "Structured logging in Node.js.",
      "code": "const pino = require('pino');\nconst logger = pino({ level: process.env.LOG_LEVEL || 'info', redact: { paths: ['password', 'creditCard', 'ssn'], censor: '[REDACTED]' } });\nlogger.info({ userId: 42, action: 'login' }, 'User logged in');\nlogger.error({ err, orderId: 123 }, \"Payment failed\");",
      "description": "Pino provides high-performance structured JSON logging with redaction support."
    },
    {
      "title": "Correlation ID Middleware",
      "useCase": "Trace requests across services.",
      "code": "const { v4: uuidv4 } = require('uuid');\napp.use((req, res, next) => {\n  const correlationId = req.headers['x-correlation-id'] || uuidv4();\n  req.correlationId = correlationId;\n  res.setHeader('x-correlation-id', correlationId);\n  next();\n});",
      "description": "Correlation ID middleware propagates a unique ID across requests for log correlation."
    },
    {
      "title": "Log Shipper Configuration (Fluentd)",
      "useCase": "Centralized log shipping.",
      "code": "<source>\n  @type tail\n  path /var/log/myapp/*.log\n  tag myapp.log\n  <parse>\n    @type json\n  </parse>\n</source>\n<match myapp.log>\n  @type elasticsearch\n  host elasticsearch.example.com\n  port 9200\n  logstash_format true\n  logstash_prefix myapp-logs\n</match>",
      "description": "Fluentd configuration to tail JSON logs and ship to Elasticsearch."
    },
    {
      "title": "Log-Based Alerting (ElastAlert)",
      "useCase": "Alert on log patterns.",
      "code": "name: High Error Rate\ntype: frequency\nindex: myapp-logs-*\nnum_events: 5\ntimeframe:\n  minutes: 5\nfilter:\n  - query:\n      query_string:\n        query: 'level:ERROR AND service:payment'\nalert:\n  - \"slack\"",
      "description": "ElastAlert fires alerts when matching log patterns exceed thresholds."
    },
    {
      "title": "Winston Logger Setup (Node.js)",
      "useCase": "Multi-transport logging.",
      "code": "const winston = require('winston');\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.json(),\n  defaultMeta: { service: 'payment-service' },\n  transports: [\n    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),\n    new winston.transports.File({ filename: 'logs/combined.log' })\n  ]\n});",
      "description": "Winston provides multi-transport logging with JSON format."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What format should modern logs use?",
      "options": [
        "Plain text",
        "JSON",
        "XML",
        "CSV"
      ],
      "answer": 1,
      "explanation": "JSON structured logging is machine-parseable and queryable by log platforms."
    },
    {
      "question": "What log level indicates a failure?",
      "options": [
        "INFO",
        "WARN",
        "ERROR",
        "DEBUG"
      ],
      "answer": 2,
      "explanation": "ERROR level indicates an operation failed and requires attention."
    },
    {
      "question": "What is a correlation ID?",
      "options": [
        "User ID",
        "Unique ID linking logs across services",
        "Server IP",
        "Error code"
      ],
      "answer": 1,
      "explanation": "Correlation ID traces a single request across multiple microservices."
    },
    {
      "question": "What is log rotation?",
      "options": [
        "Changing log format",
        "Archiving old logs to save space",
        "Encrypting log files",
        "Sending logs to cloud"
      ],
      "answer": 1,
      "explanation": "Log rotation archives/deletes old logs to prevent disk from filling up."
    },
    {
      "question": "Which tool ships logs to a central system?",
      "options": [
        "Prometheus",
        "Fluentd",
        "Grafana",
        "Jaeger"
      ],
      "answer": 1,
      "explanation": "Fluentd (and Filebeat, Fluent Bit) are log shippers that forward logs to centralized storage."
    },
    {
      "question": "What should never appear in logs?",
      "options": [
        "Error messages",
        "Passwords and secrets",
        "Timestamps",
        "Service names"
      ],
      "answer": 1,
      "explanation": "Sensitive data like passwords, credit card numbers, and PII must never be logged."
    }
  ]
};
