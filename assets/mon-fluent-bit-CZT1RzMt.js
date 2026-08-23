const e={id:"mon-fluent-bit",title:"Fluent Bit",difficulty:"intermediate",estimatedMinutes:15,tldr:["Fluent Bit is a lightweight, fast, and highly scalable log processor and forwarder — part of the Fluentd ecosystem, written in C.","Key features: low memory footprint (~450KB), high throughput, built-in metrics, Kubernetes integration (DaemonSet), multi-platform.","Common use: as a lightweight log agent on edge/container environments (Kubernetes, IoT, embedded Linux) shipping logs to Fluentd or directly to storage.","Pipeline: Input -> Parser -> Filter -> Buffer -> Output. Similar to Fluentd but simpler and faster."],laymanDefinition:`Fluent Bit is like a bicycle messenger compared to Fluentd's delivery truck. The bike messenger (Fluent Bit) is lightweight, zips through traffic, uses minimal fuel (CPU/memory), and is perfect for the "last mile" (edge devices, containers). The truck (Fluentd) carries more, processes heavier loads, but needs more resources.`,deepDive:[{heading:"Fluent Bit vs Fluentd Deep Dive",text:"Fluent Bit: C language, ~450KB memory, 100+ plugins, ~10K events/sec/core. Fluentd: C+Ruby, ~60MB memory, 1000+ plugins, ~2K events/sec/core. Fluent Bit is 10x more efficient. Fluentd has richer plugin ecosystem. Common architecture: Fluent Bit at edge -> Fluentd aggregator -> storage."},{heading:"Fluent Bit Plugins",text:"Input: tail (files), forward (network), http, syslog, kmsg (kernel), cpu/mem/disk/network (metrics), k8s (Kubernetes). Output: elasticsearch, kafka, s3, http, forward (Fluentd), influxdb, loki, prometheus, gcp, azure. Filter: grep, parser, kubernetes (enrich with pod metadata), modify, throttle, nest, rewrite_tag."},{heading:"Fluent Bit Kubernetes Integration",text:"Deployed as DaemonSet: one pod per Kubernetes node. Automatically collects container logs. Enriches logs with Kubernetes metadata (pod name, namespace, labels, container name). Uses tail input with multiline parser for stack traces. Can collect application and system logs. Supports Prometheus metrics."},{heading:"Fluent Bit Configuration and Performance",text:"Configuration syntax similar to Fluentd. Key settings: flush interval, buffer size, storage path for backpressure. Performance tuning: adjust flush interval (1-5s), use proper chunk size, enable storage for large buffers. Memory limit: mem_buf_limit prevents OOM. Multi-threading for CPU-bound parsing."}],interviewAnswer:"Fluent Bit is the best choice for edge log collection — Kubernetes, containers, IoT, and embedded devices. Its tiny footprint makes it ideal where resources are limited. For complex processing and routing, use Fluentd as a central aggregator. Fluent Bit + Fluentd is the standard CNCF log collection stack.",interviewQuestions:[{question:"What is Fluent Bit?",answer:"A lightweight, high-performance log processor and forwarder from the Fluentd ecosystem, written in C."},{question:"What is Fluent Bit\\'s memory footprint?",answer:"Approximately 450KB — extremely lightweight compared to Fluentd\\'s ~60MB."},{question:"What is Fluent Bit\\'s primary use case?",answer:"Edge log collection — Kubernetes DaemonSet, containers, IoT, embedded Linux."},{question:"How does Fluent Bit compare to Fluentd?",answer:"Fluent Bit: lightweight, fast, C-based, ~100 plugins. Fluentd: full-featured, Ruby-based, 1000+ plugins."},{question:"What is the recommended Fluent Bit + Fluentd architecture?",answer:"Fluent Bit on each node (edge) -> sends to Fluentd aggregator -> forwards to storage."},{question:"What output plugins does Fluent Bit support?",answer:"Elasticsearch, Kafka, S3, HTTP, Fluentd (forward), InfluxDB, Loki, Prometheus, GCP, Azure."},{question:"How is Fluent Bit deployed in Kubernetes?",answer:"As a DaemonSet — one pod per node, automatically collects container logs with K8s metadata."},{question:"What filter does Fluent Bit use for Kubernetes?",answer:"The kubernetes filter enriches logs with pod name, namespace, labels, container name, and annotations."},{question:"What is mem_buf_limit in Fluent Bit?",answer:"Memory buffer limit for each input — prevents out-of-memory by pausing input when limit is reached."},{question:"Is Fluent Bit a CNCF project?",answer:"Yes, Fluent Bit is a CNCF graduated project alongside Fluentd as part of the Fluentd ecosystem."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Fluent Bit</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fluent Bit</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Edge agent</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">K8s DaemonSet</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Per-node logs</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tail Input</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Container logs</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">K8s Filter</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">Add metadata</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Output</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">ES / Kafka / Loki</text><line x1="110" y1="48" x2="130" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="130" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="130" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="130" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="130" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="140" y="35" width="250" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fluent Bit Pipeline</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Edge: tail logs -> K8s metadata -> output to </text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">storage. 450KB memory, 100+ plugins, CNCF gra</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">duated.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Fluent Bit: Lightweight log processor. 450KB footp</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">rint. Ideal for Kubernetes and edge log collection</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">.</text></svg>',codeExamples:[{title:"Fluent Bit Configuration (fluent-bit.conf)",useCase:"Ship logs to Elasticsearch.",code:`[SERVICE]
    flush 1
    log_level info

[INPUT]
    name tail
    path /var/log/containers/*.log
    multiline.parser docker, cri
    tag kube.*
    mem_buf_limit 50MB

[FILTER]
    name kubernetes
    match kube.*
    merge_log on
    k8s_logging.parser on

[OUTPUT]
    name elasticsearch
    match kube.*
    host elasticsearch.example.com
    port 9200
    index fluentbit-\${HOSTNAME}`,description:"Fluent Bit configuration for Kubernetes: tail container logs, add K8s metadata, ship to Elasticsearch."},{title:"Fluent Bit to Fluentd (Forward)",useCase:"Edge to aggregator pipeline.",code:`# Fluent Bit (edge node): fluent-bit.conf
[INPUT]
    name tail
    path /var/log/myapp/*.log
    tag myapp.*

[OUTPUT]
    name forward
    match *
    host fluentd-aggregator.example.com
    port 24224

# Fluentd (aggregator): td-agent.conf
<source>
  @type forward
  port 24224
</source>

<match myapp.*>
  @type elasticsearch
  host elasticsearch.example.com
  port 9200
</match>`,description:"Fluent Bit sends to Fluentd aggregator via forward protocol for centralized processing."},{title:"Fluent Bit Metrics Output",useCase:"Monitor Fluent Bit itself via Prometheus.",code:`[INPUT]
    name cpu
    tag cpu_metrics

[INPUT]
    name mem
    tag mem_metrics

[OUTPUT]
    name prometheus_exporter
    match *_metrics
    host 0.0.0.0
    port 2021

# Scrape with Prometheus:
# - job_name: fluentbit
#   static_configs:
#     - targets: ["fluentbit:2021"]`,description:"Fluent Bit exposes internal metrics via Prometheus exporter for self-monitoring."},{title:"Fluent Bit Amazon S3 Output",useCase:"Ship logs directly to S3.",code:`[INPUT]
    name tail
    path /var/log/myapp/*.log
    tag myapp

[OUTPUT]
    name s3
    match *
    bucket myapp-logs
    region us-east-1
    total_file_size 50M
    upload_timeout 10m
    compression gzip
    json_date_key timestamp
    store_dir /tmp/fluentbit/s3`,description:"Fluent Bit can directly ship logs to S3 with compression and automatic file rotation."}],mcqQuestions:[{question:"What is Fluent Bit\\'s approximate memory footprint?",options:["450KB","60MB","10MB","2GB"],answer:0,explanation:"Fluent Bit has an extremely small memory footprint of approximately 450KB."},{question:"How is Fluent Bit primarily deployed in Kubernetes?",options:["Sidecar","DaemonSet","Deployment","StatefulSet"],answer:1,explanation:"Fluent Bit is deployed as a DaemonSet — one pod per node collecting all container logs."},{question:"What is the recommended architecture for Fluent Bit and Fluentd?",options:["Fluentd at edge, Fluent Bit as aggregator","Fluent Bit at edge, Fluentd as aggregator","Both at edge","Both as aggregator"],answer:1,explanation:"Fluent Bit at the edge (lightweight) sends to Fluentd aggregator (full processing)."},{question:"Which is more resource-efficient?",options:["Fluentd","Fluent Bit","Both equal","Depends on plugins"],answer:1,explanation:"Fluent Bit is significantly more resource-efficient (~450KB vs ~60MB)."},{question:"What Fluent Bit filter adds Kubernetes pod metadata?",options:["grep","kubernetes","modify","parser"],answer:1,explanation:"The kubernetes filter enriches log records with pod name, namespace, labels, and container name."},{question:"What CNCF projects are Fluentd and Fluent Bit?",options:["Incubating","Graduated","Sandbox","Retired"],answer:1,explanation:"Both Fluentd and Fluent Bit are CNCF graduated projects."}]};export{e as mon_fluent_bit};
