const e={id:"log-centralized",title:"Centralized Logging",difficulty:"intermediate",estimatedMinutes:15,tldr:["Centralized Logging aggregates logs from multiple servers, services, and applications into a single, searchable platform for unified visibility.","Eliminates SSH'ing into individual servers to tail log files — all logs are collected, parsed, and indexed in real-time from every source.","Core components: log shippers (Filebeat, Fluentd), transport (Kafka, HTTP), processing (Logstash), storage (Elasticsearch, S3), and visualization (Kibana, Grafana).","Best practices: structured log format (JSON), include correlation IDs for distributed tracing, set retention policies, implement access controls on log data."],laymanDefinition:"Centralized Logging is like having a security camera control room for your entire city. Instead of running to each building to check their individual tape (SSH into servers), all cameras stream to one room where you can search, filter, and spot problems anywhere instantly.",deepDive:[{heading:"ELK Stack (Elasticsearch, Logstash, Kibana)",text:"The most popular open-source centralized logging stack. Elasticsearch: distributed search and analytics engine, stores and indexes log data. Logstash: server-side data processing pipeline, ingests from multiple sources, transforms, and sends to Elasticsearch. Kibana: visualization layer — dashboards, charts, log exploration."},{heading:"Log Shipper Architecture",text:"Lightweight agents installed on each server: Filebeat (Elastic), Fluentd (CNCF), vector (Datadog). Shippers tail log files, add metadata (hostname, service name), and forward to a central broker (Kafka, Redis) or directly to storage. Benefits: low resource usage, buffering for network failures, encryption in transit."},{heading:"Log Retention and Tiered Storage",text:"Hot tier: recent logs (7 days) on fast SSDs — Elasticsearch hot nodes. Warm tier: 30 days on standard HDDs. Cold tier: 90+ days on S3/Glacier — queryable but slower. Frozen tier: archive for compliance (years). Each tier trades query speed for cost. Data lifecycle management automates transitions."},{heading:"Distributed Tracing Correlation",text:"Correlation ID (trace ID) is generated at the entry point (API gateway) and propagated through all downstream services via headers. Every log line includes this ID. Centralized logging allows searching for a single request across all services — critical for debugging microservices latency and failures."},{heading:"Observability Beyond Logs",text:"Three pillars: logs (events), metrics (numbers), traces (request flow). Centralized logging is part of observability. Best practice: correlate logs with metrics (e.g., when error rate spikes, search logs for the failed requests). Tools: Datadog, Grafana Loki, New Relic, Honeycomb — all-in-one observability platforms."}],interviewAnswer:"Centralized Logging is the foundation of observability in distributed systems. It replaces ad-hoc SSH debugging with a searchable, real-time view of all system events. The ELK stack is the most common self-hosted solution; Datadog and Grafana Cloud are popular SaaS alternatives. Always use structured logs (JSON) with correlation IDs for maximum value.",interviewQuestions:[{question:"What is centralized logging?",answer:"Aggregating logs from all servers and services into a single platform for unified search, analysis, and visualization."},{question:"What is the ELK stack?",answer:"Elasticsearch (storage/search), Logstash (processing), Kibana (visualization) — the most popular open-source centralized logging stack."},{question:"What is a log shipper?",answer:"A lightweight agent installed on servers that tails log files and forwards them to a centralized logging platform (Filebeat, Fluentd, Vector)."},{question:"What is a correlation ID?",answer:"A unique ID generated at the entry point and propagated through all services — allows tracing a single request across distributed systems."},{question:"What are the three pillars of observability?",answer:"Logs (events), Metrics (numbers), Traces (request flow). Centralized logging covers the logs pillar."},{question:"What is log retention?",answer:"How long logs are kept. Hot tier (fast SSDs, 7d), warm (HDDs, 30d), cold (S3, 90d+), frozen (archive, years)."},{question:"What is Logstash?",answer:"A server-side data processing pipeline that ingests, transforms, and sends log data to Elasticsearch or other outputs."},{question:"What is Kibana?",answer:"The visualization layer for Elasticsearch — dashboards, log exploration, charts, and alerting."},{question:"What is Filebeat?",answer:"A lightweight log shipper from Elastic that tails files and forwards logs to Logstash/Elasticsearch/Kafka."},{question:"Why use structured logs?",answer:"Parsing is automatic and reliable. JSON logs can be queried by field, unlike unstructured text that requires regex parsing."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Centralized Logging</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App Servers</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Log sources</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Log Shippers</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Filebeat, Fluentd</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Transport</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Kafka, HTTP</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Processing</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Logstash</text><line x1="160" y1="95" x2="160" y2="110" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Storage</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Elasticsearch</text><line x1="120" y1="118" x2="150" y2="118" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="105" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="215" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Visualization</text><text x="215" y="124" text-anchor="middle" font-size="9" fill="#ddd">Kibana</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Centralized Logging</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Aggregate, search, and analyze log</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">s from all sources in one platform</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Centralized Logging: Ship, process, store, and vis</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ualize logs from every service and server.</text></svg>',codeExamples:[{title:"Centralized Logging with Filebeat + Logstash + Elasticsearch",useCase:"Shipping logs from a Node.js app.",code:`# filebeat.yml (installed on app server)
filebeat.inputs:
- type: filestream
  paths: /var/log/myapp/*.json
  json.keys_under_root: true

output.logstash:
  hosts: ["logstash:5044"]

# logstash.conf (central processing)
input { beats { port => 5044 } }
filter {
  json { source => "message" }
  mutate { remove_field => ["message"] }
}
output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "myapp-%{+YYYY.MM.dd}"
  }
}`,description:"Filebeat ships JSON logs to Logstash for processing, then Elasticsearch for storage and indexing."},{title:"Structured JSON Logging in Node.js",useCase:"Pino logger with correlation ID.",code:`const pino = require('pino');
const { v4: uuidv4 } = require('uuid');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level(label) { return { level: label }; }
  }
});

// Generate correlation ID per request
app.use((req, res, next) => {
  req.correlationId = uuidv4();
  res.setHeader('X-Correlation-Id', req.correlationId);
  next();
});

// Use logger with correlation ID
app.get('/api/orders', async (req, res) => {
  logger.info({
    correlationId: req.correlationId,
    path: req.path,
    method: req.method
  }, 'Handling order request');
  // Or use pino-http for automatic req logging
});`,description:"Pino produces structured JSON logs. Correlation IDs link log entries across services."},{title:"Docker Centralized Logging with Loki + Promtail + Grafana",useCase:"Lightweight alternative to ELK.",code:`# promtail.yml (log shipper for Docker)
scrape_configs:
- job_name: docker
  pipeline_stages:
  - docker: {}
  static_configs:
  - targets: [localhost]
    labels:
      job: 'myapp'
      __path__: /var/lib/docker/containers/**/*.log

# Loki (storage) runs as a single binary or Docker
# docker run --name=loki \\
#   -v ./loki-config.yaml:/etc/loki/loki.yaml \\
#   grafana/loki

# Grafana datasource: http://loki:3100
# Queries: {job="myapp"} |= "error"
# Labels help filter quickly without indexing full text`,description:"Grafana Loki is a cost-effective centralized logging system designed for Kubernetes and Docker."},{title:"Searching Logs with Elasticsearch Query DSL",useCase:"Finding specific events.",code:`GET /myapp-2024.06.15/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "level": "error" } },
        { "match": { "service": "order-service" } },
        { "range": {
          "@timestamp": {
            "gte": "now-1h",
            "lte": "now"
          }
        }}
      ]
    }
  },
  "aggs": {
    "errors_by_minute": {
      "date_histogram": {
        "field": "@timestamp",
        "interval": "1m"
      }
    }
  }
}`,description:"Elasticsearch query DSL enables powerful filtering, aggregation, and analysis of log data."},{title:"Fluentd Configuration for Centralized Logging",useCase:"Unified logging layer.",code:`# fluentd.conf
<source>
  @type tail
  path /var/log/myapp/*.log
  format json
  tag myapp
</source>

<filter myapp.**>
  @type record_transformer
  <record>
    hostname "#{Socket.gethostname}"
    environment "#{ENV['NODE_ENV']}"
  </record>
</filter>

<match myapp.**>
  @type elasticsearch
  host elasticsearch
  port 9200
  logstash_format true
  <buffer>
    @type file
    path /var/log/fluentd/buffer
    retry_max_times 5
  </buffer>
</match>`,description:"Fluentd provides a unified logging layer with buffering, filtering, and multiple output plugins."}],mcqQuestions:[{question:"What problem does centralized logging solve?",options:["SSD space management","Needing to SSH into servers to read logs","Network latency","Load balancing"],answer:1,explanation:"Centralized logging eliminates the need to manually access each server to check logs."},{question:"What does the E in ELK stack stand for?",options:["Elasticsearch","Express","EC2","Ember"],answer:0,explanation:"ELK = Elasticsearch, Logstash, Kibana."},{question:"What is a log shipper?",options:["A tool that visualizes logs","An agent that forwards logs from servers","A database for logs","A log parser"],answer:1,explanation:"Log shippers like Filebeat and Fluentd are lightweight agents that forward logs."},{question:"What is a correlation ID used for?",options:["Counting errors","Tracing a request across distributed services","Billing","Load balancing"],answer:1,explanation:"Correlation IDs link log entries from the same request across multiple services."},{question:"What is the hot tier in log storage?",options:["Nearline archive","Recent logs on fast storage","Compressed backup","S3 storage"],answer:1,explanation:"Hot tier stores recent logs on fast SSDs for quick querying; older data moves to cheaper storage."},{question:"What are the three pillars of observability?",options:["Dev, Staging, Prod","Logs, Metrics, Traces","CPU, Memory, Disk","Build, Test, Deploy"],answer:1,explanation:"Observability consists of logs (events), metrics (numbers), and traces (request flow)."},{question:"Centralized Logging — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Centralized Logging — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Centralized Logging — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Centralized Logging — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as log_centralized};
