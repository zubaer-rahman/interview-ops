// Auto-generated index for monitoring

export const monitoring = {
    id: "monitoring",
    tag: "Monitoring",
    name: "Monitoring",
    icon: "📊",
    color: "#dd6b20",
    description: "All topics related to monitoring",
    topics: [
    {
      id: "mon-fundamentals",
      title: "Monitoring Fundamentals",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./mon-fundamentals.js').then(m => m.mon_fundamentals)
    },
    {
      id: "mon-metrics",
      title: "Metrics",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./mon-metrics.js').then(m => m.mon_metrics)
    },
    {
      id: "mon-logging",
      title: "Logging",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./mon-logging.js').then(m => m.mon_logging)
    },
    {
      id: "mon-tracing",
      title: "Tracing",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./mon-tracing.js').then(m => m.mon_tracing)
    },
    {
      id: "mon-alerting",
      title: "Alerting",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./mon-alerting.js').then(m => m.mon_alerting)
    },
    {
      id: "mon-dashboards",
      title: "Dashboards",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./mon-dashboards.js').then(m => m.mon_dashboards)
    },
    {
      id: "mon-prometheus",
      title: "Prometheus",
      difficulty: "intermediate",
      estimatedMinutes: 25,
      content: () => import('./mon-prometheus.js').then(m => m.mon_prometheus)
    },
    {
      id: "mon-grafana",
      title: "Grafana",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./mon-grafana.js').then(m => m.mon_grafana)
    },
    {
      id: "mon-loki",
      title: "Loki",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./mon-loki.js').then(m => m.mon_loki)
    },
    {
      id: "mon-elasticsearch",
      title: "Elasticsearch",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./mon-elasticsearch.js').then(m => m.mon_elasticsearch)
    },
    {
      id: "mon-kibana",
      title: "Kibana",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./mon-kibana.js').then(m => m.mon_kibana)
    },
    {
      id: "mon-fluentd",
      title: "Fluentd",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./mon-fluentd.js').then(m => m.mon_fluentd)
    },
    {
      id: "mon-fluent-bit",
      title: "Fluent Bit",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./mon-fluent-bit.js').then(m => m.mon_fluent_bit)
    },
    {
      id: "mon-jaeger",
      title: "Jaeger",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./mon-jaeger.js').then(m => m.mon_jaeger)
    },
    {
      id: "mon-zipkin",
      title: "Zipkin",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./mon-zipkin.js').then(m => m.mon_zipkin)
    },
    {
      id: "mon-opentelemetry",
      title: "OpenTelemetry",
      difficulty: "advanced",
      estimatedMinutes: 25,
      content: () => import('./mon-opentelemetry.js').then(m => m.mon_opentelemetry)
    }
    ]
};
