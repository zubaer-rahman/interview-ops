const e={id:"mon-fluentd",title:"Fluentd",difficulty:"intermediate",estimatedMinutes:15,tldr:["Fluentd is an open-source data collector for unified logging layer, enabling you to collect, transform, and ship data to various destinations.","Architecture: Input -> Filter -> Buffer -> Output. Plugins for every step enable processing any data format to any destination.","Written in C/Ruby with a plugin-based architecture. Over 1000+ community plugins for inputs, filters, outputs, and parsers.","Key concept: tag-based routing. Each event has a tag, and configuration routes events by tag patterns to specific outputs."],laymanDefinition:"Fluentd is like a postal sorting facility for log data. Logs arrive in all shapes and sizes (JSON, plain text, CSV) from various sources (files, HTTP, syslog). Fluentd sorts them by tag (like ZIP codes), optionally processes them (filtering out junk mail, adding postage), and delivers them to the right destination (Elasticsearch, S3, Kafka).",deepDive:[{heading:"Fluentd Architecture and Data Flow",text:"Input plugins: tail (files), forward (network), http (HTTP POST), syslog, tcp/udp. Filter plugins: grep (filter by conditions), record_transformer (modify records), parser (parse unstructured data). Buffer plugins: file, memory. Output plugins: elasticsearch, s3, kafka, mongodb, forward (another Fluentd)."},{heading:"Tag-Based Routing",text:"Each event has a tag (e.g., myapp.access, myapp.error). Configuration uses <match> directives with glob patterns: <match myapp.*>, <match **>, <match myapp.access myapp.error>. Wildcards: * matches single segment, ** matches multiple segments. Events route to outputs based on tag matching."},{heading:"Fluentd HA and Reliability",text:"Buffer: in-memory or file-based. Retry: configurable retry with exponential backoff. Primary/failover: configure secondary output for failover. Fluentd can act as a forwarder (agent) or aggregator. Use Fluentd as an aggregator to batch and buffer before sending to Elasticsearch."},{heading:"Fluentd vs Fluent Bit",text:"Fluentd: full-featured, plugins for everything, written in C+Ruby, higher resource usage. Fluent Bit: lightweight, smaller footprint, written in C, fewer plugins, lower throughput. Common pattern: Fluent Bit on edge nodes (low resource), Fluentd as central aggregator (full processing)."}],interviewAnswer:"Fluentd is the most flexible log collector with the largest plugin ecosystem. Use its tag-based routing to send different data streams to different destinations. Configure buffering for reliability. Use filters to parse, transform, and enrich data before output. Fluentd is best as a central aggregator; Fluent Bit is better for edge collection.",interviewQuestions:[{question:"What is Fluentd?",answer:"An open-source data collector for unified logging layer — collect, transform, and ship data."},{question:"What is Fluentd\\'s architecture?",answer:"Input -> Filter -> Buffer -> Output. Each stage uses plugins for extensibility."},{question:"What is tag-based routing?",answer:"Events have tags; configuration routes events by tag patterns to specific output destinations."},{question:"What is Fluentd\\'s buffer?",answer:"A reliability layer — events are buffered in memory or file before being sent to output."},{question:"How many Fluentd plugins exist?",answer:"Over 1000+ community plugins for inputs, filters, outputs, parsers, and formatters."},{question:"What is the difference between Fluentd and Fluent Bit?",answer:"Fluentd: full-featured, more plugins, higher resources. Fluent Bit: lightweight, fewer plugins, lower resources."},{question:"What is the Fluentd <match> directive?",answer:"Routes events by tag pattern to a specific output plugin. Supports glob-style patterns."},{question:"What is the Fluentd <filter> directive?",answer:"Processes events between input and output — parse, transform, enrich, or drop events."},{question:"What is Fluentd record_transformer?",answer:"A filter plugin that modifies event records — add/rename/remove fields."},{question:"How does Fluentd handle backpressure?",answer:"Buffering with configurable retry and exponential backoff. Primary/failover output for HA."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Fluentd</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Input</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">File, HTTP, Syslog</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Filter</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Parse, transform</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Buffer</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">File, memory</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Output</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">ES, S3, Kafka</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tags</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Routing by pattern</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fluentd Pipeline</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Input -> Filter -> Buffer -> Output. Tag-</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">based routing. 1000+ plugins. Central agg</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">regator for unified logging.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Fluentd: Data collector with tag-based routing. In</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">put > Filter > Buffer > Output. 1000+ plugins.</text></svg>',codeExamples:[{title:"Fluentd Configuration (td-agent.conf)",useCase:"Collect logs, output to Elasticsearch.",code:`<source>
  @type tail
  path /var/log/myapp/*.log
  tag myapp.log
  <parse>
    @type json
  </parse>
</source>

<match myapp.log>
  @type elasticsearch
  host elasticsearch.example.com
  port 9200
  logstash_format true
  logstash_prefix myapp-logs
  <buffer>
    @type file
    path /var/log/fluentd/buffer
    flush_interval 5s
  </buffer>
</match>`,description:"Fluentd config: tail JSON logs, send to Elasticsearch with file-based buffering."},{title:"Fluentd Filter (Parse and Transform)",useCase:"Process log records.",code:`<filter myapp.log>
  @type record_transformer
  <record>
    hostname \${hostname}
    environment production
  </record>
</filter>

<filter myapp.log>
  @type grep
  <exclude>
    key level
    pattern ^DEBUG$
  </exclude>
</filter>`,description:"Filters add fields (record_transformer) and exclude debug-level logs (grep)."},{title:"Fluentd Multi-Output Routing",useCase:"Send different streams to different destinations.",code:`<source>
  @type forward
  port 24224
</source>

<match myapp.access>
  @type s3
  s3_bucket access-logs
  path logs/
  <buffer>
    @type file
    path /var/log/fluentd/s3
  </buffer>
</match>

<match myapp.error>
  @type elasticsearch
  host elasticsearch.example.com
  port 9200
</match>`,description:"Route access logs to S3 and error logs to Elasticsearch using tag-based routing."},{title:"Fluentd Parser (Unstructured to Structured)",useCase:"Parse Nginx access logs.",code:`<source>
  @type tail
  path /var/log/nginx/access.log
  tag nginx.access
  <parse>
    @type regexp
    expression /^(?<remote>[^ ]+) (?<host>[^ ]+) (?<user>[^ ]+) \\[(?<time>[^\\]]+)\\] "(?<method>\\S+)(?: +(?<path>[^ ]*) +\\S*)?" (?<code>[^ ]+) (?<size>[^ ]+)/
    time_format %d/%b/%Y:%H:%M:%S %z
  </parse>
</source>`,description:"Parse unstructured Nginx access logs into structured fields using regex parser."}],mcqQuestions:[{question:"What is Fluentd?",options:["A database","An open-source data collector","A visualization tool","A monitoring system"],answer:1,explanation:"Fluentd is an open-source data collector for unified logging layer."},{question:"What is Fluentd\\'s architecture?",options:["Store -> Query -> Display","Input -> Filter -> Buffer -> Output","Collect -> Analyze -> Act","Read -> Write -> Delete"],answer:1,explanation:"Fluentd pipeline: Input -> Filter -> Buffer -> Output."},{question:"What is tag-based routing?",options:["Routing by geometry","Routing events by tag patterns to outputs","Tagging system logs","Network routing"],answer:1,explanation:"Events have tags; configuration routes them by tag pattern matching to specific outputs."},{question:"What is the difference between Fluentd and Fluent Bit?",options:["Fluentd is paid, Fluent Bit is free","Fluentd: full-featured, Fluent Bit: lightweight","Fluentd is older, Fluent Bit is newer","No difference"],answer:1,explanation:"Fluentd is full-featured with more plugins; Fluent Bit is lightweight with lower resource usage."},{question:"What does the Fluentd buffer do?",options:["Accelerates queries","Provides reliability through retry","Encrypts data","Visualizes metrics"],answer:1,explanation:"The buffer provides reliability — events are buffered and retried with backoff if output fails."},{question:"How many plugins does Fluentd have?",options:["100","1000+","50","500"],answer:1,explanation:"Fluentd has over 1000 community plugins for various inputs, filters, outputs, and parsers."}]};export{e as mon_fluentd};
