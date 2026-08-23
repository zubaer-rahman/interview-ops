const e={id:"log-shipping",title:"Log Shipping",difficulty:"intermediate",estimatedMinutes:15,tldr:["Log shipping is the process of reliably transferring log data from source servers to a centralized log management platform.","Key requirements: reliability (no data loss during network failures), low latency (near real-time delivery), low resource usage (CPU/memory/network), encryption (TLS for in-transit security).","Popular shippers: Filebeat (Elastic), Fluentbit/Fluentd (CNCF), Vector (Datadog), Logstash (heavy), rsyslog (syslog), Promtail (Loki).","Shipping patterns: tail-based (follow log file), event-based (receive from application), sidecar (containerized environments), agentless (syslog/HTTP)."],laymanDefinition:"Log shipping is like a fleet of delivery trucks for a warehouse. Each truck (shipper) is stationed at a factory (server). When logs pile up (truck loads), the driver drives to the central warehouse (log platform). If the highway is blocked (network failure), the truck waits and tries again. The trucks are small and efficient — they don't slow down the factory.",deepDive:[{heading:"Filebeat (Lightweight Shipper)",text:"Elastic\\'s Go-based log shipper. Low memory footprint (~20MB). Reads log files, adds metadata (hostname, kubernetes fields), sends to Elasticsearch or Logstash. Features: multiline handling (stack traces), file rotation awareness, backpressure handling, TLS support. Best for: shipping to ELK stack. Under 15MB binary size."},{heading:"Fluentd vs Fluentbit",text:"Fluentd: Ruby/C, full-featured, ~60MB, extensive plugin ecosystem (500+), supports buffering. Fluentbit: C, ultra-lightweight (~450KB binary), designed for edge/IoT and containers. Fluentbit is the preferred choice for Kubernetes sidecars and resource-constrained environments. Fluentd for complex routing and transformation pipelines."},{heading:"Shipping Reliability Mechanisms",text:"Buffering: store logs on disk temporarily if destination unreachable. Retry with exponential backoff. Acknowledgements: wait for destination to confirm receipt before discarding from buffer. Resilience: shipper should not crash or lose data if destination is down for hours. Guaranteed delivery: at-least-once semantics (may duplicate, never lose)."},{heading:"TLS Encryption and Authentication",text:"Logs may contain sensitive data — always encrypt in transit. Shipper connects to destination over TLS. Mutual TLS (mTLS): both sides authenticate with certificates. API key authentication: simpler alternative, suitable for SaaS log platforms (Datadog, Logz.io). Network segmentation: shippers in private subnet, log platform in DMZ."},{heading:"Kubernetes Log Shipping",text:"DaemonSet: one Fluentbit pod per node, collects all pod logs from /var/log/containers. Sidecar: logging container alongside app container — good for apps that log to files instead of stdout. Multiple outputs: send to both Elasticsearch (operations) and S3 (archive). Metadata enrichment: add pod name, namespace, container name, Kubernetes labels."}],interviewAnswer:"Log shipping is the critical first mile of your logging pipeline. Choose a lightweight shipper (Filebeat, Fluentbit) for production. Always buffer logs locally to prevent data loss during network outages. Enable TLS encryption. In Kubernetes, use a DaemonSet shipper for node-level collection. Test for data loss scenarios: kill the shipper, restart it, verify no logs are lost.",interviewQuestions:[{question:"What is log shipping?",answer:"Reliably transferring log data from source servers to a centralized log management platform."},{question:"What is Filebeat?",answer:"A lightweight, Go-based log shipper from Elastic. Low memory, high performance, integrates with ELK."},{question:"What is the difference between Fluentd and Fluentbit?",answer:"Fluentd: full-featured, plugin-rich, larger (~60MB). Fluentbit: ultra-lightweight (~450KB), ideal for edge/Kubernetes."},{question:"How do shippers handle network failures?",answer:"Buffering: store logs on disk, retry with exponential backoff when the destination becomes available."},{question:"What is a DaemonSet in Kubernetes logging?",answer:"A DaemonSet runs one log shipper pod per node, collecting logs from all pods on that node."},{question:"Should logs be encrypted during shipping?",answer:"Yes. Always use TLS for log shipping — logs may contain sensitive data."},{question:"What is a sidecar log shipper?",answer:"A logging container alongside the app container in the same pod — intercepts log files or stdout."},{question:"What is Promtail?",answer:"The log shipper for Grafana Loki — designed for Kubernetes with service discovery and label metadata."},{question:"What is the data loss guarantee of most shippers?",answer:"At-least-once delivery — logs may be duplicated but will not be lost (with buffering configured)."},{question:"What metadata do shippers add?",answer:"Hostname, service name, Kubernetes pod/namespace/container, Docker container ID, file path."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Log Shipping</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Source</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Application logs</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shipper</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Filebeat/Fluentbit</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Buffer</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Disk buffer</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">TLS Encrypt</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Secure transport</text><line x1="160" y1="95" x2="160" y2="110" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Network</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Kafka/HTTP</text><line x1="120" y1="118" x2="150" y2="118" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="105" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="215" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Destination</text><text x="215" y="124" text-anchor="middle" font-size="9" fill="#ddd">Elasticsearch/Loki</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Log Shipping</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Reliable transfer: Buffer -> Encry</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">pt -> Transport -> Deliver. No dat</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">a loss. Real-time.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Log Shipping: Reliably transport logs from source </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">to centralized platform with buffering and encrypt</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ion.</text></svg>',codeExamples:[{title:"Filebeat Configuration (Elastic)",useCase:"Lightweight log shipping to Elasticsearch.",code:`# filebeat.yml
filebeat.inputs:
- type: filestream
  enabled: true
  paths:
    - /var/log/myapp/*.json
    - /var/log/nginx/access.log
  multiline:
    type: pattern
    pattern: '^\\['
    negate: true
    match: after

filebeat.config.modules:
  path: \${path.config}/modules.d/*.yml
  reload.enabled: true

output.elasticsearch:
  hosts: ["https://elasticsearch:9200"]
  username: "filebeat_writer"
  password: "\${ES_PASSWORD}"
  ssl.verification_mode: certificate

logging.level: warn`,description:"Filebeat configuration for shipping JSON and Nginx access logs to Elasticsearch with TLS."},{title:"Fluentbit Configuration (Kubernetes DaemonSet)",useCase:"Kubernetes-native log shipping.",code:`# fluentbit-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentbit-config
data:
  fluent-bit.conf: |
    [SERVICE]
        Flush 1
        Log_Level info
        Parsers_File parsers.conf

    [INPUT]
        Name tail
        Path /var/log/containers/*.log
        multiline.parser docker, cri
        Tag kube.*
        Mem_Buf_Limit 50MB
        Skip_Long_Lines On

    [FILTER]
        Name kubernetes
        Match kube.*
        Merge_Log On
        K8S-Logging.Parser On

    [OUTPUT]
        Name es
        Match kube.*
        Host elasticsearch
        Port 9200
        Logstash_Format On
        Retry_Limit 6
        tls On
        tls.verify Off`,description:"Fluentbit DaemonSet configuration for Kubernetes — collects all pod logs with metadata enrichment."},{title:"Vector (Datadog) Log Shipping",useCase:"Modern, high-performance shipper.",code:`# vector.toml
[sources.myapp_logs]
type = "file"
include = ["/var/log/myapp/*.json"]
read_from = "beginning"

[transforms.parse_json]
type = "json_parser"
inputs = ["myapp_logs"]
field = "message"
drop_invalid = true

[transforms.add_fields]
type = "remap"
inputs = ["parse_json"]
source = '''
  .environment = "production"
  .service = "myapp"
  .hostname = get_hostname!()
'''

[sinks.elasticsearch]
type = "elasticsearch"
inputs = ["add_fields"]
endpoints = ["https://elasticsearch:9200"]
auth.strategy = "basic"
auth.user = "vector"
auth.password = "\${ES_PASS}"
bulk.index = "myapp-%Y-%m-%d"
buffer.max_events = 5000
buffer.when_full = "block"`,description:"Vector provides a unified pipeline for log collection, transformation, and shipping with buffering."},{title:"Log Shipping with Buffer (Node.js + Bull Queue)",useCase:"Application-level reliable shipping.",code:`const Queue = require('bull');
const logQueue = new Queue('log-shipping', {
  redis: { host: 'redis' },
  defaultJobOptions: {
    attempts: 10,
    backoff: { type: 'exponential', delay: 2000 }
  }
});

// Producer: add log to queue
async function shipLog(entry) {
  await logQueue.add(entry);
}

// Consumer: send to log platform
logQueue.process(async (job) => {
  const response = await fetch(
    'https://logs.example.com/_bulk', {
    method: 'POST',
    body: JSON.stringify(job.data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${LOG_TOKEN}\`
    }
  });

  if (!response.ok) {
    throw new Error('Ship failed'); // retry
  }
});`,description:"Bull queue provides application-level log buffering with retries, backoff, and persistence."},{title:"Promtail for Grafana Loki",useCase:"Kubernetes log shipping to Loki.",code:`# promtail.yaml
server:
  http_listen_port: 3101

positions:
  filename: /var/log/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
- job_name: kubernetes-pods
  kubernetes_sd_configs:
  - role: pod
  pipeline_stages:
  - docker: {}
  - cri: {}
  - regex:
      expression: '^(?P<namespace>\\S+)
        (?P<pod_name>\\S+)
        (?P<container_name>\\S+)
        .*'
  - labels:
      namespace:
      pod_name:
      container_name:`,description:"Promtail auto-discovers Kubernetes pods and ships logs with label metadata to Grafana Loki."}],mcqQuestions:[{question:"What is a log shipper?",options:["A log database","An agent that reliably transfers logs to a central platform","A log visualizer","A log parser"],answer:1,explanation:"A log shipper is an agent that collects and reliably transfers logs from source to destination."},{question:"Which shipper is ultra-lightweight (~450KB)?",options:["Filebeat","Fluentbit","Logstash","Vector"],answer:1,explanation:"Fluentbit is written in C and designed for resource-constrained environments."},{question:"How do shippers handle network failures?",options:["Stop logging","Buffer logs and retry","Delete old logs","Switch to file storage"],answer:1,explanation:"Shippers buffer logs to disk and retry with exponential backoff when the destination is down."},{question:"What is a DaemonSet in Kubernetes logging?",options:["A pod per deployment","A pod per node collecting all node logs","A sidecar per pod","A standalone service"],answer:1,explanation:"DaemonSet runs one shipper per node to collect logs from all pods on that node."},{question:"What protocol should log shipping use?",options:["HTTP","TLS/HTTPS","FTP","SMTP"],answer:1,explanation:"Log shipping should use TLS encryption to protect sensitive data in transit."},{question:"What delivery guarantee do shippers provide?",options:["Exactly-once","At-least-once","At-most-once","Best-effort"],answer:1,explanation:"Most shippers provide at-least-once delivery — logs may duplicate but will not be lost."},{question:"Log Shipping — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Log Shipping — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Log Shipping — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Log Shipping — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as log_shipping};
