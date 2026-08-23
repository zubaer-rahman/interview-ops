export const mon_metrics = {
  "id": "mon-metrics",
  "title": "Metrics",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Metrics are numeric measurements collected over time about system behavior and performance — the foundation of observability.",
    "Types: counters (cumulative, only increase/reset), gauges (point-in-time values), histograms (observations bucketed by value), summaries (quantiles).",
    "Metrics are typically collected via pull (Prometheus scrapes endpoints) or push (StatsD, Graphite sends to aggregator) models.",
    "Key metric dimensions: name, labels/tags, timestamp, value. Label-based filtering enables flexible aggregation without exploding metric names."
  ],
  "laymanDefinition": "Metrics are like your car's instrument panel. The odometer (counter) shows cumulative miles, the fuel gauge (gauge) shows current fuel level, and the speedometer shows speed over time (histogram-like). They all give you numbers to make driving decisions.",
  "deepDive": [
    {
      "heading": "Counter Metrics",
      "text": "Monotonically increasing cumulative count. Resets only on restart. Use for: total requests, total errors, total bytes sent. Rate (requests/sec) is derived from counter using rate()/irate(). Never decrease — if you need up/down, use a gauge. Example: http_requests_total{method=\"GET\", status=\"200\"}."
    },
    {
      "heading": "Gauge Metrics",
      "text": "Point-in-time value that can go up or down. Use for: CPU usage, memory usage, queue depth, temperature, concurrent connections, active users. Gauge is the current value — averaging over time may lose spikes. Use min/max over time to see extremes."
    },
    {
      "heading": "Histogram and Summary Metrics",
      "text": "Histogram: samples are counted in configurable buckets. Enables calculating quantiles (p50, p95, p99) via histogram_quantile(). Summary: pre-calculated quantiles on the client side. Trade-off: histograms are server-side calculated (flexible) but require more storage. Summaries are client-side (fixed quantiles)."
    },
    {
      "heading": "Label-Based Dimensionality",
      "text": "Labels (tags) add dimensions to metrics. http_requests_total{method=\"POST\", route=\"/api/order\", status=\"201\"}. Cardinality: unique combinations of label values. High cardinality (user_id, request_id) can overwhelm TSDB. Keep label cardinality bounded (<10000 unique values per metric)."
    }
  ],
  "interviewAnswer": "Metrics provide the numeric backbone of observability. Use counters for cumulative totals, gauges for point-in-time values, histograms for distributions. Design labels carefully to avoid high cardinality explosions. Prefer Prometheus pull model for better control. Apply the RED method for services and USE method for resources.",
  "interviewQuestions": [
    {
      "question": "What are the four metric types in Prometheus?",
      "answer": "Counter (cumulative), Gauge (point value), Histogram (bucketed observations), Summary (pre-computed quantiles)."
    },
    {
      "question": "What is the difference between a counter and a gauge?",
      "answer": "Counter only increases (total requests). Gauge goes up and down (CPU usage). Use rate() on counters."
    },
    {
      "question": "What is metric cardinality?",
      "answer": "The number of unique label value combinations. High cardinality (user_id, email) can crash the time series database."
    },
    {
      "question": "What is the difference between histogram and summary?",
      "answer": "Histogram: server-side quantile calculation, configurable buckets. Summary: client-side pre-computed quantiles, fixed."
    },
    {
      "question": "What is the pull vs push model for metrics?",
      "answer": "Pull: Prometheus scrapes targets at intervals. Push: StatsD agents push to a central aggregator. Pull is better for service discovery."
    },
    {
      "question": "What is rate() in PromQL?",
      "answer": "Calculates per-second average rate of increase for a counter over a time range. rate(metric[5m])."
    },
    {
      "question": "What is irate() in PromQL?",
      "answer": "Calculates instantaneous rate based on the last two data points — more sensitive to spikes than rate()."
    },
    {
      "question": "What is a metric naming convention?",
      "answer": "snake_case, namespaced: http_requests_total, node_cpu_seconds_total. Unit suffix: _total (counter), _seconds, _bytes."
    },
    {
      "question": "What is an exemplar in metrics?",
      "answer": "A reference linking a metric event to a trace — enables \"metrics to traces\" workflow for debugging."
    },
    {
      "question": "What is histogram_quantile()?",
      "answer": "PromQL function that calculates quantiles (p50, p95, p99) from histogram bucket counters."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Metrics</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Counter</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cumulative total</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Gauge</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Point-in-time</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Histogram</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distribution</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Summary</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Quantiles</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Labels</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dimensions</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Metrics</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Numeric measurements: counters, gauges, h</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">istograms, summaries. Label-based dimensi</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ons.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Metrics: Numeric time-series data — counters, gaug</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">es, histograms, summaries with label dimensions.</text></svg>",
  "codeExamples": [
    {
      "title": "Prometheus Counter and Gauge",
      "useCase": "Instrumentation in Go (example pattern).",
      "code": "# HELP http_requests_total Total HTTP requests\n# TYPE http_requests_total counter\nhttp_requests_total{method=\"GET\",route=\"/api\",status=\"200\"} 1024\nhttp_requests_total{method=\"POST\",route=\"/api\",status=\"201\"} 512\n\n# HELP node_memory_usage_bytes Memory usage\n# TYPE node_memory_usage_bytes gauge\nnode_memory_usage_bytes{type=\"used\"} 8589934592\nnode_memory_usage_bytes{type=\"free\"} 4294967296\n\n# HELP request_duration_seconds Request latency distribution\n# TYPE request_duration_seconds histogram\nrequest_duration_seconds_bucket{le=\"0.01\"} 100\nrequest_duration_seconds_bucket{le=\"0.05\"} 500\nrequest_duration_seconds_bucket{le=\"0.1\"} 900\nrequest_duration_seconds_bucket{le=\"1\"} 990\nrequest_duration_seconds_bucket{le=\"+Inf\"} 1000\nrequest_duration_seconds_count 1000\nrequest_duration_seconds_sum 45.2",
      "description": "Prometheus exposition format showing counter, gauge, and histogram metric types."
    },
    {
      "title": "StatsD Metrics (Node.js)",
      "useCase": "Push-based metrics with StatsD.",
      "code": "const StatsD = require('hot-shots');\nconst client = new StatsD({ host: \"statsd-exporter\", port: 8125, prefix: \"myapp.\" });\nclient.increment('http.requests.get', 1);\nclient.gauge('memory.used', process.memoryUsage().heapUsed);\nclient.timing('http.request.duration', Date.now() - start);\nclient.set('active.users', userId);\nclient.histogram('response.size', response.length);",
      "description": "StatsD push-based metrics using hot-shots client."
    },
    {
      "title": "PromQL Queries for Analysis",
      "useCase": "Querying metrics.",
      "code": "# Error ratio: sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m])) * 100\n# p99 latency: histogram_quantile(0.99, sum(rate(request_duration_seconds_bucket[5m])) by (le, service))\n# CPU: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode='idle'}[5m])) * 100)\n# Memory: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100\n# Growth: sum(rate(http_requests_total[1h])) / sum(rate(http_requests_total[1h] offset 1w))",
      "description": "Common PromQL patterns for metrics analysis."
    },
    {
      "title": "Structured Logging to Metrics",
      "useCase": "Convert logs to metrics with mtail.",
      "code": "counter http_requests_total by \"method\", \"path\", \"status\"\n/^(?P<method>\\w+) (?P<path>\\S+) (?P<status>\\d+)/ {\n  http_requests_total[$method][$path][$status]++\n}\ngauge request_duration_milliseconds by \"path\"\n/^(?P<path>\\S+) duration=(?P<duration>\\d+)ms/ {\n  request_duration_milliseconds[$path] = $duration\n}",
      "description": "Convert log patterns into metrics using mtail."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What metric type only increases?",
      "options": [
        "Gauge",
        "Counter",
        "Histogram",
        "Summary"
      ],
      "answer": 1,
      "explanation": "Counters are monotonically increasing cumulative totals that reset only on restart."
    },
    {
      "question": "What metric type can go up and down?",
      "options": [
        "Counter",
        "Histogram",
        "Gauge",
        "Summary"
      ],
      "answer": 2,
      "explanation": "Gauges represent point-in-time values that can increase or decrease."
    },
    {
      "question": "What is metric cardinality?",
      "options": [
        "Number of metric names",
        "Unique label value combinations",
        "Total data points",
        "Storage size"
      ],
      "answer": 1,
      "explanation": "Cardinality = unique combinations of label values. High cardinality causes TSDB problems."
    },
    {
      "question": "What function derives rate from a counter?",
      "options": [
        "increase()",
        "rate()",
        "avg()",
        "sum()"
      ],
      "answer": 1,
      "explanation": "rate() calculates per-second average increase from a counter over a time range."
    },
    {
      "question": "What is the Prometheus metric type for latency distributions?",
      "options": [
        "Counter",
        "Gauge",
        "Histogram",
        "Summary"
      ],
      "answer": 2,
      "explanation": "Histograms bucket observations to enable quantile calculation like p99 latency."
    },
    {
      "question": "What is an exemplar?",
      "options": [
        "Sample metric value",
        "Link from metric to trace",
        "Alert threshold",
        "Dashboard panel"
      ],
      "answer": 1,
      "explanation": "Exemplars link metric events to specific traces for debugging workflows."
    }
  ]
};
