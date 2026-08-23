const e={id:"mon-fundamentals",title:"Monitoring Fundamentals",difficulty:"beginner",estimatedMinutes:15,tldr:["Monitoring is the practice of collecting, analyzing, and acting on system data to ensure reliability, performance, and availability.","Four golden signals: Latency (time to respond), Traffic (demand on system), Errors (failure rate), Saturation (how full the system is).","USE method: Utilization (percentage busy), Saturation (queue length), Errors (failure count) — for every resource.","RED method: Rate (requests per second), Errors (failed requests), Duration (response time distribution) — for services.","Monitoring types: white-box (internal metrics from app code) and black-box (external behavior from user perspective)."],laymanDefinition:"Monitoring is like the dashboard and warning lights in your car. The speedometer (latency) shows how fast you go, the fuel gauge (saturation) shows how much capacity remains, and the check engine light (alerting) tells you something is wrong before the car breaks down.",deepDive:[{heading:"The Four Golden Signals",text:'Latency: time to service a request (distinguish success vs error latency). Traffic: how much demand is placed on the system (requests/sec, active users). Errors: rate of failed requests (explicit 5xx, implicit wrong content). Saturation: how "full" the service is (CPU, memory, queue depth). Most overload signals precede errors.'},{heading:"USE Method (Resources)",text:"For every resource (CPU, disk, network, memory): check Utilization (average time resource was busy), Saturation (degree to which resource has extra work queued), Errors (count of error events). CPU utilization >80% with high load average indicates saturation. Disk I/O wait time >20ms suggests disk saturation."},{heading:"RED Method (Services)",text:"For every microservice: Rate (requests per second — throughput), Errors (failed requests as count or percentage), Duration (latency distributions — p50, p95, p99). Track these for every service endpoint. Dashboard shows service health at a glance. Combines with USE for full-stack observability."},{heading:"White-box vs Black-box Monitoring",text:"White-box: metrics from inside the system — application metrics (request count, error rate, garbage collection), database query performance, cache hit rates. Black-box: external probes — synthetic transactions, external availability checks, certificate expiry monitoring. Use both: white-box for debugging, black-box for user experience."}],interviewAnswer:"Monitoring fundamentals are the foundation of observability. Learn the four golden signals, USE method for resources, and RED method for services. Combine white-box and black-box approaches. Monitor everything, but alert on the important signals with proper thresholds. Start simple: CPU, memory, disk, request rate, error rate, and latency.",interviewQuestions:[{question:"What are the four golden signals of monitoring?",answer:"Latency, Traffic, Errors, Saturation — the four key metrics defined by Google SRE."},{question:"What is the USE method?",answer:"For every resource: check Utilization (percent busy), Saturation (queue depth), Errors (failure count)."},{question:"What is the RED method?",answer:"For every service: Rate (requests/sec), Errors (failures), Duration (latency distributions)."},{question:"What is the difference between white-box and black-box monitoring?",answer:"White-box: internal metrics from app code (request count, GC). Black-box: external behavior (synthetic checks, availability probes)."},{question:"What is latency in monitoring?",answer:"The time it takes to service a request. Track success latency separately from error latency."},{question:"What is saturation?",answer:'How "full" a resource is. CPU load average, memory usage, queue depth. Saturation often precedes errors.'},{question:"What is the difference between monitoring and observability?",answer:"Monitoring is collecting and alerting on known signals. Observability allows understanding unknown unknowns through exploratory data analysis."},{question:"What is a Service Level Indicator (SLI)?",answer:"A quantified measure of a service attribute — request latency, error rate, throughput. The raw metric you measure."},{question:"What is a Service Level Objective (SLO)?",answer:"The target value for an SLI over a time window — e.g., 99.9% of requests complete in <200ms over 30 days."},{question:"What is a Service Level Agreement (SLA)?",answer:"A contractual commitment to meet SLOs, typically with consequences (credits, penalties) for violations."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Monitoring Fundamentals</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Golden Signals</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">4 key metrics</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">USE Method</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Resources</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">RED Method</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Services</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">White-box</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Internal metrics</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Black-box</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">External probes</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Monitoring Fundamentals</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">Four golden signals, USE/RED methods, whi</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">te/black-box, SLOs and SLAs.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Monitoring: Collect, analyze, and act on system da</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ta. Four golden signals: latency, traffic, errors,</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle"> saturation.</text></svg>',codeExamples:[{title:"Exposing Prometheus Metrics (Node.js)",useCase:"Instrumenting an HTTP server.",code:`const promClient = require('prom-client');
const express = require('express');
const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request latency in seconds',
  labelNames: ['method', 'route'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5]
});
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    httpRequestsTotal.inc({ method: req.method, route: req.route?.path || "unknown", status: res.statusCode });
    end({ method: req.method, route: req.route?.path });
  });
  next();
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});`,description:"Core monitoring instrumentation: counter for request count, histogram for latency distribution."},{title:"Synthetic Health Check (Black-box)",useCase:"External availability monitoring.",code:`const https = require('https');
async function healthCheck(url) {
  const start = Date.now();
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 5000 }, (res) => {
      const duration = Date.now() - start;
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, duration, bodyLength: data.length, timestamp: new Date().toISOString() });
      });
    });
    req.on('error', (err) => { resolve({ status: 0, duration: -1, error: err.message }); });
    req.end();
  });
}
setInterval(async () => {
  const result = await healthCheck('https://myapp.com/health');
  if (result.status !== 200) console.error("Health check failed:", result);
}, 60000);`,description:"Black-box monitoring from an external perspective — synthetic health checks."},{title:"Prometheus Alert Rule (CPU)",useCase:"Alerting on saturation.",code:`groups:
  - name: node_alerts
    rules:
      - alert: HighCpuUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode='idle'}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: 'CPU usage is above 80%'
      - alert: CriticalCpuUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode='idle'}[5m])) * 100) > 95
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: 'CPU usage critically high'`,description:"Alerting rules fire when CPU saturation exceeds thresholds for a duration."},{title:"Service Level Indicator (SLI) Calculation",useCase:"Monthly SLO tracking.",code:`async function calculateSLI() {
  const result = await db.query(\`
    SELECT COUNT(*) as total_requests,
      COUNT(*) FILTER (WHERE duration_ms < 500) as good_requests
    FROM request_log
    WHERE timestamp > NOW() - INTERVAL '30 days'
  \`);
  const { total_requests, good_requests } = result.rows[0];
  const sli = (good_requests / total_requests) * 100;
  return { sli: Math.round(sli * 100) / 100, total: parseInt(total_requests), good: parseInt(good_requests), budget: 100 - sli, meets_slo: sli >= 99.9 };
}`,description:"Calculate SLI from raw request data and compare against SLO target."},{title:"RED Method Dashboard Query",useCase:"PromQL for RED dashboard.",code:`# Rate: sum(rate(http_requests_total[5m])) by (service)
# Errors: sum(rate(http_requests_total{status=~"5.."}[5m])) by (service)
# Duration: histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service))
# Error ratio: sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) * 100`,description:"RED method queries for Prometheus — rate, errors, and duration for every service."}],mcqQuestions:[{question:"What are the four golden signals?",options:["CPU, Memory, Disk, Network","Latency, Traffic, Errors, Saturation","Rate, Errors, Duration, Utilization","Availability, Reliability, Performance, Security"],answer:1,explanation:"The four golden signals from Google SRE: Latency, Traffic, Errors, Saturation."},{question:"What does the USE method analyze?",options:["Services","Resources","Applications","Networks"],answer:1,explanation:"USE (Utilization, Saturation, Errors) analyzes resources like CPU, memory, and disk."},{question:"What does the RED method analyze?",options:["CPU, Memory, Disk","Rate, Errors, Duration","Latency, Traffic, Throughput","Availability, Reliability, Capacity"],answer:1,explanation:"RED (Rate, Errors, Duration) analyzes service-level metrics."},{question:"What is the difference between white-box and black-box monitoring?",options:["Internal vs external metrics","Free vs paid tools","Cloud vs on-premise","Real-time vs batch"],answer:0,explanation:"White-box uses internal app metrics; black-box uses external behavior probes."},{question:"What is an SLO?",options:["Service Level Objective — target for reliability","Service Level Agreement — legal contract","Service Level Indicator — measured metric","Service License Order — procurement"],answer:0,explanation:"SLO is the target value for an SLI over a defined time window."},{question:"What does saturation indicate?",options:["How full a resource is","How fast a request completes","How many errors occurred","How much traffic is served"],answer:0,explanation:'Saturation measures how "full" a resource is — often a leading indicator of problems.'}]};export{e as mon_fundamentals};
