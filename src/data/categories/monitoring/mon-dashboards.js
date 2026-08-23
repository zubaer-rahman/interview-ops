export const mon_dashboards = {
  "id": "mon-dashboards",
  "title": "Dashboards",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Dashboards provide visual representation of monitoring data — charts, graphs, and tables that show system health at a glance.",
    "Effective dashboards follow a hierarchy: overview (executive), service (team), and detail (debugging/troubleshooting) levels.",
    "Best practices: use meaningful time ranges, consistent color coding (red=bad, green=good), proper chart types for data, and logical layout.",
    "Tools: Grafana (most popular), Kibana (Elasticsearch), Datadog dashboards, CloudWatch dashboards, custom with D3.js/Chart.js."
  ],
  "laymanDefinition": "A dashboard is like the instrument panel in a cockpit. The pilot has a quick overview of altitude (latency), speed (throughput), fuel (capacity), and warning lights (alerts). They don't stare at one gauge — they scan all of them to understand the overall state of the flight.",
  "deepDive": [
    {
      "heading": "Dashboard Design Principles",
      "text": "Top-down: most important metrics at the top (executive view). Left to right: chronological flow of data. Use sparklines for historical context. Color consistently: red for errors/warnings, green for healthy, yellow for degraded. Limit charts per row (3-4 max). Include time range selector."
    },
    {
      "heading": "Chart Type Selection",
      "text": "Time series (line graph): trends over time — latency, request rate, CPU. Bar chart: comparisons — requests by endpoint, errors by service. Heatmap: distributions — latency heatmap over time. Stat/singlestat: current value — current error count. Gauge: target vs actual — capacity percentage."
    },
    {
      "heading": "Dashboard Hierarchy",
      "text": "Level 1 — Executive: uptime, overall error rate, p95 latency, business metrics (revenue, active users). Level 2 — Service: RED metrics for each service, dependency health. Level 3 — Debug: per-instance metrics, detailed latency distributions. Level 4 — Ad-hoc: temporary dashboards for incident investigation."
    },
    {
      "heading": "Common Dashboard Mistakes",
      "text": "Too many metrics (cluttered). No logical grouping. Inconsistent time ranges. Chart types that mislead (pie charts for time series). Missing units. Auto-refresh too fast or too slow. No alert annotations. Too many colors. Not labeling axes."
    }
  ],
  "interviewAnswer": "Design dashboards for specific audiences and use cases. Create a hierarchy: overview -> service -> debug. Choose the right chart type for your data. Keep it simple — the best dashboard answers questions at a glance. Use consistent layout and color conventions. Annotate deployments and incidents on time series.",
  "interviewQuestions": [
    {
      "question": "What is a monitoring dashboard?",
      "answer": "A visual display of monitoring data showing system health through charts, graphs, and tables."
    },
    {
      "question": "What are the three levels of dashboard hierarchy?",
      "answer": "Executive (overview), Service (team), Debug (troubleshooting)."
    },
    {
      "question": "What is the best chart type for trends over time?",
      "answer": "Time series / line chart — shows how metrics change over time."
    },
    {
      "question": "What is a good color convention for dashboards?",
      "answer": "Green = healthy, yellow = degraded, red = critical/error. Consistent across all dashboards."
    },
    {
      "question": "What is a heatmap used for?",
      "answer": "Showing distributions over time — commonly used for latency heatmaps (time vs bucket)."
    },
    {
      "question": "What is a stat/singlestat panel?",
      "answer": "Shows a single current value — current error count, active users, CPU percentage."
    },
    {
      "question": "What is the most popular open-source dashboard tool?",
      "answer": "Grafana — supports Prometheus, Elasticsearch, Loki, InfluxDB, and many other data sources."
    },
    {
      "question": "What is a dashboard annotation?",
      "answer": "A marker on a time series chart indicating an event — deployment, incident, config change."
    },
    {
      "question": "What is the recommended number of charts per dashboard row?",
      "answer": "3-4 charts per row. Too many makes the dashboard hard to read."
    },
    {
      "question": "What is ad-hoc dashboarding?",
      "answer": "Creating temporary dashboards during incident investigation to explore specific metrics."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Dashboards</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Executive</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Uptime, SLAs</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">RED metrics</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Debug</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Per-instance</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Time Series</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Line graphs</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Heatmap</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributions</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dashboards</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hierarchy: Executive -> Service -> Debug.</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Time series, heatmaps, stats. Grafana, K</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ibana.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Dashboards: Visual monitoring data. Three-tier hie</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">rarchy. Choose right chart types. Keep it simple.</text></svg>",
  "codeExamples": [
    {
      "title": "Grafana Dashboard JSON (Simplified)",
      "useCase": "Dashboard definition.",
      "code": "{\"title\":\"Payment Service Overview\",\"tags\":[\"payment\",\"production\"],\n\"panels\":[{\"title\":\"Request Rate\",\"type\":\"timeseries\",\n\"gridPos\":{\"h\":8,\"w\":8,\"x\":0,\"y\":0},\n\"targets\":[{\"expr\":\"sum(rate(http_requests_total{service=\\\"payment\\\"}[5m]))\",\n\"legendFormat\":\"requests/s\"}]}]}",
      "description": "Grafana dashboard JSON defining a panel with request rate query."
    },
    {
      "title": "Kibana Dashboard (Elasticsearch)",
      "useCase": "Visualize log data.",
      "code": "POST /api/saved_objects/visualization\n{\"attributes\":{\"title\":\"Error Count by Service\",\n\"visState\":\"{\\\"type\\\":\\\"histogram\\\",\n\\\"aggs\\\":[{\\\"id\\\":\\\"1\\\",\\\"type\\\":\\\"count\\\"},\n{\\\"id\\\":\\\"2\\\",\\\"type\\\":\\\"terms\\\",\n\\\"params\\\":{\\\"field\\\":\\\"service.keyword\\\"}}]}\"}}",
      "description": "Kibana visualization API for creating histograms from Elasticsearch log data."
    },
    {
      "title": "Embedded Dashboard (iframe)",
      "useCase": "Share dashboards externally.",
      "code": "<iframe src=\"https://grafana.example.com/d-solo/abc123/?orgId=1&refresh=30s&from=now-1h&to=now&panelId=2\"\n  width=\"600\" height=\"400\" frameborder=\"0\"></iframe>",
      "description": "Embed Grafana dashboard panels in external applications via iframe."
    },
    {
      "title": "CLI Dashboard Tool (prom2graph)",
      "useCase": "Dashboards from the terminal.",
      "code": "# prom2graph --host http://localhost:9090 --query 'rate(http_requests_total[5m])' --duration 1h --width 80\n# Output: ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁ 100 req/s",
      "description": "Command-line dashboard tools for quick terminal-based monitoring."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What are the three dashboard hierarchy levels?",
      "options": [
        "Dev, Staging, Prod",
        "Executive, Service, Debug",
        "Frontend, Backend, Database",
        "CPU, Memory, Disk"
      ],
      "answer": 1,
      "explanation": "Dashboard hierarchy: Executive (overview), Service (team), Debug (troubleshooting)."
    },
    {
      "question": "What chart type is best for trends over time?",
      "options": [
        "Pie chart",
        "Time series line chart",
        "Bar chart",
        "Table"
      ],
      "answer": 1,
      "explanation": "Time series/line charts are best for showing metric trends over time."
    },
    {
      "question": "What is the most popular open-source dashboard tool?",
      "options": [
        "Kibana",
        "Grafana",
        "Tableau",
        "PowerBI"
      ],
      "answer": 1,
      "explanation": "Grafana is the most popular open-source monitoring dashboard tool."
    },
    {
      "question": "What color convention is typical for dashboards?",
      "options": [
        "Red=healthy, Green=bad",
        "Green=healthy, Red=bad",
        "Blue=warning, Yellow=healthy",
        "Purple=error, Orange=info"
      ],
      "answer": 1,
      "explanation": "Standard convention: Green=healthy, Red=error/critical, Yellow=warning."
    },
    {
      "question": "What is a dashboard annotation?",
      "options": [
        "Note on chart for events",
        "Chart title",
        "Metric description",
        "Data source name"
      ],
      "answer": 0,
      "explanation": "Annotations mark events like deployments or incidents on time series charts."
    },
    {
      "question": "How many charts per dashboard row is recommended?",
      "options": [
        "1-2",
        "3-4",
        "5-6",
        "As many as fit"
      ],
      "answer": 1,
      "explanation": "3-4 charts per row is recommended for readability without clutter."
    }
  ]
};
