export const mon_grafana = {
  "id": "mon-grafana",
  "title": "Grafana",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Grafana is an open-source observability and data visualization platform that supports Prometheus, Elasticsearch, Loki, InfluxDB, and 50+ data sources.",
    "Core features: rich dashboarding with customizable panels, alerting (unified), explore mode for ad-hoc querying, annotations, and teams/organizations.",
    "Panel types: time series, bar chart, heatmap, gauge, stat, table, logs, pie chart, flame graph, and many community panels.",
    "Grafana uses a plugin system for data sources, panels, and apps — extensive ecosystem of community and enterprise plugins."
  ],
  "laymanDefinition": "Grafana is like a universal remote control for your monitoring. Instead of having separate screens for your TV (Prometheus), sound system (Elasticsearch), and streaming box (Loki), Grafana puts all their data on one unified dashboard. You can mix data from different sources on the same screen.",
  "deepDive": [
    {
      "heading": "Grafana Data Sources",
      "text": "Prometheus: time series metrics. Elasticsearch: log analytics. Loki: log aggregation. InfluxDB: time series. Graphite: legacy metrics. CloudWatch: AWS metrics. Azure Monitor: Azure metrics. Google Cloud Monitoring: GCP metrics. Tempo: tracing. Jaeger: tracing."
    },
    {
      "heading": "Grafana Panels and Visualizations",
      "text": "Time series: most common — line, bar, area charts. Stat: single value with sparkline. Gauge: radial meter with threshold coloring. Table: tabular data with sorting. Heatmap: 2D distribution (time vs bucket). Logs: real-time log viewer. Flame graph: profiling visualization."
    },
    {
      "heading": "Grafana Alerting (Unified)",
      "text": "Combines Prometheus-style and Grafana-native alerting. Create alert rules from any data source. Multiple evaluators: Grafana-managed, Prometheus-compatible. Alert routing to Slack, PagerDuty, Opsgenie, webhooks. Silences, mute timings, and alert grouping."
    },
    {
      "heading": "Grafana Provisioning and Automation",
      "text": "Dashboards defined as JSON/YAML files in provisioning directory. Data sources configured via YAML. Alert rules provisioned via API. Teams and folders managed programmatically. Playlists: auto-rotating dashboards on big screens. Reporting: scheduled PDF reports."
    },
    {
      "heading": "Grafana Enterprise Features",
      "text": "Role-Based Access Control (RBAC). Data source permissions. Report scheduling and delivery. White-labeling. Enterprise plugins (Oracle, SAP HANA, ServiceNow). 24/7 support. Usage insights and analytics."
    }
  ],
  "interviewAnswer": "Grafana is the de-facto visualization layer for the Prometheus ecosystem. Create dashboards that combine metrics, logs, and traces in one view. Use explore mode for ad-hoc troubleshooting. Provision dashboards as code for version control. Set up alerting from any data source.",
  "interviewQuestions": [
    {
      "question": "What is Grafana?",
      "answer": "An open-source observability and data visualization platform supporting 50+ data sources."
    },
    {
      "question": "What data sources does Grafana support?",
      "answer": "Prometheus, Elasticsearch, Loki, InfluxDB, Graphite, CloudWatch, Azure Monitor, Tempo, Jaeger, and 50+ more via plugins."
    },
    {
      "question": "What is Grafana Explore?",
      "answer": "An ad-hoc query interface for exploring data without creating a dashboard. Supports split view for comparing queries."
    },
    {
      "question": "What is Grafana unified alerting?",
      "answer": "Grafana\\'s alerting system that works across all data sources, with routing to Slack, PagerDuty, webhooks, etc."
    },
    {
      "question": "What is dashboard provisioning in Grafana?",
      "answer": "Defining dashboards as JSON/YAML files that are automatically loaded into Grafana — enables version control."
    },
    {
      "question": "What panel type shows a single metric value?",
      "answer": "Stat panel — shows a current value with optional sparkline for trend context."
    },
    {
      "question": "What is a Grafana annotation?",
      "answer": "An event marker on a panel — used to mark deployments, incidents, or configuration changes on time series."
    },
    {
      "question": "What is Loki in the Grafana ecosystem?",
      "answer": "Grafana\\'s log aggregation system, designed to be cost-effective and tightly integrated with Grafana."
    },
    {
      "question": "What is Tempo in the Grafana ecosystem?",
      "answer": "Grafana\\'s distributed tracing backend, designed for high-scale and cost-effective trace storage."
    },
    {
      "question": "What is Grafana\\'s plugin ecosystem?",
      "answer": "A marketplace of community and enterprise plugins for data sources, panels, and apps extending Grafana functionality."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Grafana</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Data Sources</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Prom, ES, Loki</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dashboards</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Time series, logs</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Alerting</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unified alerts</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Explore</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ad-hoc query</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Provisioning</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dashboards as code</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Grafana</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Multi-source observability platform. Dash</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">boards, alerting, explore, provisioning, </text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">plugins.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Grafana: Visualize metrics, logs, and traces from </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">50+ data sources. Unified alerting, ad-hoc explore</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, dashboards as code.</text></svg>",
  "codeExamples": [
    {
      "title": "Grafana Configuration (grafana.ini)",
      "useCase": "Key configuration settings.",
      "code": "[server]\nhttp_port = 3000\ndomain = grafana.example.com\n[security]\nadmin_user = admin\nadmin_password = ${GRAFANA_PASSWORD}\n[auth.github]\nenabled = true\nclient_id = ${GITHUB_CLIENT_ID}\n[unified_alerting]\nenabled = true",
      "description": "Grafana server configuration with GitHub OAuth and unified alerting."
    },
    {
      "title": "Provisioning Data Sources (YAML)",
      "useCase": "Automated data source setup.",
      "code": "apiVersion: 1\ndatasources:\n  - name: Prometheus\n    type: prometheus\n    url: http://prometheus:9090\n    isDefault: true\n  - name: Loki\n    type: loki\n    url: http://loki:3100\n  - name: Elasticsearch\n    type: elasticsearch\n    url: http://elasticsearch:9200",
      "description": "Provision data sources in Grafana via YAML."
    },
    {
      "title": "Grafana API (Create Dashboard)",
      "useCase": "Programmatic dashboard management.",
      "code": "curl -X POST \"http://admin:password@grafana:3000/api/dashboards/db\"\n  -H \"Content-Type: application/json\"\n  -d '{\"dashboard\":{\"title\":\"API Overview\",\"timezone\":\"browser\",\n\"panels\":[{\"title\":\"Requests/s\",\"type\":\"timeseries\",\n\"targets\":[{\"expr\":\"sum(rate(http_requests_total[5m]))\"}]}],\n\"time\":{\"from\":\"now-1h\",\"to\":\"now\"}},\"overwrite\":true}'",
      "description": "Grafana REST API for creating dashboards programmatically."
    },
    {
      "title": "Alert Rule via Grafana API",
      "useCase": "Provision alerts programmatically.",
      "code": "POST /api/v1/provisioning/alert-rules\n{\"title\":\"Payment Error Rate\",\"condition\":\"A\",\n\"data\":[{\"refId\":\"A\",\"relativeTimeRange\":{\"from\":300,\"to\":0},\n\"datasourceUid\":\"prometheus\",\n\"model\":{\"expr\":\"sum(rate(http_requests_total{service=\\\"payment\\\",status=~\\\"5..\\\"}[5m])) / sum(rate(http_requests_total{service=\\\"payment\\\"}[5m])) > 0.1\"}}],\n\"labels\":{\"severity\":\"critical\",\"team\":\"platform\"},\n\"annotations\":{\"summary\":\"Payment service error rate > 10%\"}}",
      "description": "Provision Grafana alert rules programmatically using the alerting provisioning API."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is Grafana?",
      "options": [
        "A log shipper",
        "An observability visualization platform",
        "A metrics database",
        "An alert manager"
      ],
      "answer": 1,
      "explanation": "Grafana is a multi-source observability and data visualization platform."
    },
    {
      "question": "How many data sources does Grafana support?",
      "options": [
        "10",
        "50+",
        "100+",
        "5"
      ],
      "answer": 1,
      "explanation": "Grafana supports 50+ data sources through its plugin ecosystem."
    },
    {
      "question": "What is Grafana Explore?",
      "options": [
        "Dashboard editor",
        "Ad-hoc query interface",
        "User management",
        "Plugin manager"
      ],
      "answer": 1,
      "explanation": "Explore is Grafana\\'s ad-hoc query interface for data exploration without dashboards."
    },
    {
      "question": "What is Grafana provisioning?",
      "options": [
        "User onboarding",
        "Automated config via YAML/JSON",
        "Server setup",
        "Plugin installation"
      ],
      "answer": 1,
      "explanation": "Provisioning automates data source and dashboard setup via YAML/JSON files."
    },
    {
      "question": "What Grafana component handles log aggregation?",
      "options": [
        "Tempo",
        "Loki",
        "Prometheus",
        "Elasticsearch"
      ],
      "answer": 1,
      "explanation": "Loki is Grafana\\'s log aggregation system, tightly integrated with Grafana."
    },
    {
      "question": "What Grafana component handles tracing?",
      "options": [
        "Loki",
        "Tempo",
        "Prometheus",
        "Graphite"
      ],
      "answer": 1,
      "explanation": "Tempo is Grafana\\'s distributed tracing backend."
    }
  ]
};
