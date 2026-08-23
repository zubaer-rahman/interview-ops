const e={id:"ag-metrics",title:"Metrics",difficulty:"beginner",estimatedMinutes:14,tldr:["API Gateway metrics are quantitative measurements tracking traffic, latency, errors, and resource usage for monitoring and alerting.","Four golden signals: Latency (response time), Traffic (requests/sec), Errors (rate), Saturation (resource usage). RED method: Rate, Errors, Duration.","Common metrics: requests per second (RPS), P50/P95/P99 latency, error rate (5xx,4xx), active connections, upstream latency, cache hit rate, rate limit usage.","Collect via Prometheus + Grafana or Datadog. Export metrics endpoint (/metrics). Histograms for latency distribution, counters for cumulative, gauges for current."],laymanDefinition:"API Gateway metrics are like car dashboard gauges. Speed (RPS), RPM (latency), fuel (connections), check engine light (errors). Dashboard lets you drive faster without overheating.",deepDive:[{heading:"Four Golden Signals",text:'Latency: time to serve request (P50/P95/P99). Traffic: requests per second (RPS). Errors: rate of failed requests (5xx,4xx). Saturation: how "full" gateway is (connections, CPU).'},{heading:"RED Method",text:"Rate: requests per second. Errors: failed requests per second. Duration: distribution of response time. Simplifies monitoring: three metrics capture health."},{heading:"Prometheus Metrics Types",text:"Counter: cumulative count (total requests, errors). Gauge: current value (active connections). Histogram: bucketed latency (p50, p95, p99). Summary: quantiles."},{heading:"Upstream Metrics",text:"Track each backend service separately. Key: upstream_rps, upstream_latency, upstream_errors. Identify which service is slow. Circuit breaker data."},{heading:"Alerting Thresholds",text:"P99 latency > 500ms. Error rate > 1% (5xx). RPS drop > 50%. Active connections > 80% of max. Cache hit rate < 50%. Rate limit threshold breached."}],interviewAnswer:"Monitor four golden signals: Latency, Traffic, Errors, Saturation (USE) or Rate, Errors, Duration (RED). Use Prometheus histograms for latency. Alert on p99>500ms, error rate>1%. Upstream metrics for service-level visibility.",interviewQuestions:[{question:"Four golden signals?",answer:"Latency, Traffic, Errors, Saturation."},{question:"RED method components?",answer:"Rate (requests/sec), Errors (failed/sec), Duration (latency)."},{question:"P50 vs P99?",answer:"P50: median latency. P99: 99th percentile (worst 1%)."},{question:"Prometheus metric types?",answer:"Counter (cumulative), Gauge (current value), Histogram (bucketed), Summary (quantiles)."},{question:"What is RPS?",answer:"Requests per second � measure of traffic."},{question:"What to alert based on?",answer:"P99 latency, error rate, connection saturation, RPS anomalies."},{question:"Why track upstream metrics?",answer:"Identify slow/malfunctioning backend services."},{question:"Grafana vs Prometheus?",answer:"Prometheus: metrics storage. Grafana: dashboard visualization."},{question:"Metrics endpoint?",answer:"/metrics � Prometheus scrapes this. Usually port 9090."},{question:"What is saturation?",answer:'How "full" gateway is: connections, memory, CPU.'}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Metrics</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Gateway</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">App metrics</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Prometheus</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">Scrape</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="250" y1="48" x2="280" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Counters</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Totals</text><rect x="10" y="105" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Histograms</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">Latencies</text><rect x="10" y="140" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Gauges</text><text x="60" y="159" text-anchor="middle" font-size="9" fill="#ddd">Cur. state</text><rect x="160" y="70" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="210" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Grafana</text><text x="210" y="89" text-anchor="middle" font-size="9" fill="#ddd">Dashboard</text><rect x="160" y="105" width="100" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="210" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Alerts</text><text x="210" y="124" text-anchor="middle" font-size="9" fill="#ddd">Thresholds</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Metrics</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Four golden signals: Latency, Traf</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">fic, Errors, Saturation. Prometheu</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">s+Grafana. P50/P95/P99.</text></svg>',codeExamples:'<text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Metrics: Four golden signals (Latency, Traffic, Er</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">rors, Saturation). Prometheus + Grafana. P50/P95/P</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">99 latency. Alert on p99>500ms.</text>',mcqQuestions:[{title:"Prometheus Metrics Middleware",useCase:"Expose /metrics.",code:`const promClient=require("prom-client");
const register=new promClient.Registry();
promClient.collectDefaultMetrics({register});
const httpRequestDuration=new promClient.Histogram({
  name:"http_request_duration_seconds",help:"Duration of HTTP requests in seconds",
  labelNames:["method","path","status"],buckets:[0.01,0.05,0.1,0.25,0.5,1,2.5,5,10],
  registers:[register],
});
const httpRequestsTotal=new promClient.Counter({
  name:"http_requests_total",help:"Total number of HTTP requests",
  labelNames:["method","path","status"],registers:[register],
});
const activeConnections=new promClient.Gauge({
  name:"active_connections",help:"Number of active connections",registers:[register],
});
async function metricsMiddleware(req,res,next){
  if(req.path==="/metrics"){
    res.setHeader("Content-Type",register.contentType);
    res.end(await register.metrics());return;
  }
  activeConnections.inc();
  const endTimer=httpRequestDuration.startTimer();res.on("finish",()=>{
    endTimer({method:req.method,path:req.route||req.path,status:res.statusCode});
    httpRequestsTotal.inc({method:req.method,path:req.route||req.path,status:res.statusCode});
    activeConnections.dec();
  });next();
}`,description:"Prometheus metrics middleware with histogram, counter, gauge."},{title:"Latency Monitoring",useCase:"Track p50/p95/p99.",code:`const p50=await promClient.util.getHistogramQuantile(0.5,histogram);
const p95=await promClient.util.getHistogramQuantile(0.95,histogram);
const p99=await promClient.util.getHistogramQuantile(0.99,histogram);
// Or query Prometheus:
// histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))
// Alert rules:
// - alert: HighLatency
//   expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 0.5
//   for: 5m
//   labels: { severity: critical }
//   annotations: { summary: "P99 latency > 500ms" }`,description:"Latency monitoring with Prometheus quantile queries and alerting."},{title:"Upstream Health Metrics",useCase:"Track backend health.",code:`const upstreamLatency=new promClient.Histogram({
  name:"upstream_request_duration_seconds",
  help:"Upstream request duration in seconds",
  labelNames:["upstream","method","status"],buckets:[0.01,0.05,0.1,0.25,0.5,1,2.5,5,10],
  registers:[register],
});
const upstreamErrors=new promClient.Counter({
  name:"upstream_errors_total",help:"Total upstream errors",
  labelNames:["upstream","error_type"],registers:[register],
});
// Use in reverse proxy:
async function proxyToUpstream(req,res,target){
  const endTimer=upstreamLatency.startTimer();
  try{
    const response=await fetch(target);
    endTimer({upstream:target,method:req.method,status:response.status});
    if(!response.ok) upstreamErrors.inc({upstream:target,error_type:"http_"+response.status});
    res.status(response.status).send(await response.text());
  }catch(err){
    upstreamErrors.inc({upstream:target,error_type:"connection"});endTimer({upstream:target,method:req.method,status:0});
    res.status(502).send("Bad Gateway");
  }
}`,description:"Upstream health metrics tracking latency and errors per backend."},{title:"Grafana Dashboard JSON",useCase:"Example dashboard.",code:`// Grafana dashboard (JSON model)
{
  "title":"API Gateway Dashboard","panels":[
    {"title":"RPS","type":"graph","targets":[{"expr":"rate(http_requests_total[5m])","legendFormat":"{{method}} {{path}}"}]},
    {"title":"P99 Latency","type":"graph","targets":[{"expr":"histogram_quantile(0.99,rate(http_request_duration_seconds_bucket[5m]))","legendFormat":"P99"}]},
    {"title":"Error Rate","type":"graph","targets":[{"expr":"rate(http_requests_total{status=~"5.."}[5m])/rate(http_requests_total[5m])","legendFormat":"5xx %"}]},
    {"title":"Active Connections","type":"graph","targets":[{"expr":"active_connections","legendFormat":"connections"}]},
    {"title":"Upstream Health","type":"table","targets":[{"expr":"upstream_errors_total","legendFormat":"{{upstream}}"}]},
    {"title":"Rate Limit Usage","type":"graph","targets":[{"expr":"rate_limit_usage_ratio","legendFormat":"{{tier}}"}]}
  ],"refresh":"10s"}`,description:"Grafana dashboard JSON for API Gateway metrics."},{question:"Metrics — How to ensure reliability?",options:["Automated testing and monitoring","Manual checks only","No testing","Reactive fixes"],answer:0,explanation:"Automated testing and monitoring ensure consistent reliability."},{question:"Metrics — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Metrics — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Metrics — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Metrics — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Metrics — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as ag_metrics};
