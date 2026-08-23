const e={id:"ag-logging",title:"Logging",difficulty:"beginner",estimatedMinutes:13,tldr:["API Gateway logging records all request/response metadata for debugging, monitoring, auditing, and security analysis.","Log at entry (request) and exit (response): method, path, status, latency, client IP, user ID, request ID, errors.","Structured JSON logging preferred: single-line, machine-parseable, with correlation IDs for distributed tracing.","Best practices: never log sensitive data (passwords, tokens, keys), add request ID per request, log level (debug/info/warn/error), sampling for high traffic."],laymanDefinition:"API Gateway logging is like an airport security camera. Records who (IP, user id) passed through which gate (path) at what time, how long they took (latency), and whether they had items confiscated (errors). Protects and debugs.",deepDive:[{heading:"Structured Logging in Gateways",text:"Single-line JSON per log event. Fields: timestamp, level, reqId, method, path, status, latency, user, clientIp, userAgent, error. Tools: ELK (Elasticsearch+Logstash+Kibana), Loki+Grafana, Datadog."},{heading:"Request Correlation",text:"Unique request ID (X-Request-Id, Trace-Id) generated at gateway, passed to all downstream services. Enables tracing across microservices. Propagated via headers."},{heading:"Log Levels and Sampling",text:"Level: debug (development), info (normal ops), warn (anomaly), error (failure). Sampling: log 100% errors, 10% warnings, 1% info. Adaptive sampling for high traffic to control volume."},{heading:"Sensitive Data Scrubbing",text:'Before logging: remove Authorization header, X-API-Key, passwords, credit cards, PII. Regex patterns or field allowlist. Mask: "Bearer ***", "sk_***". Audit logs compliance.'},{heading:"Audit Logging",text:"Tamper-proof log of admin operations: who changed what when. Append-only, hash-chained, stored separately. For SOC2, PCI-DSS, GDPR compliance."}],interviewAnswer:"Critical: structured JSON logs, request correlation IDs, never log sensitive data, sampling for volume control, distributed tracing with Gateway as root trace. Use ELK/Loki. Audit logs for compliance.",interviewQuestions:[{question:"Why structured logging?",answer:"JSON logs are machine-parseable, searchable by field, and work with log aggregators like ELK."},{question:"What is X-Request-Id?",answer:"Unique request identifier generated at gateway, propagated to all services for correlation."},{question:"What fields in gateway logs?",answer:"timestamp, method, path, status, latency, clientIp, user, reqId, userAgent, error."},{question:"What should NEVER be logged?",answer:"Passwords, tokens, API keys, credit cards, SSN, PII."},{question:"What is log sampling?",answer:"Logging a percentage of requests to control volume and cost."},{question:"Common log aggregators?",answer:"ELK (Elasticsearch/Logstash/Kibana), Loki+Grafana, Datadog, Splunk."},{question:"What is audit logging?",answer:"Tamper-proof log of admin operations for compliance (SOC2, PCI-DSS)."},{question:"How to propagate trace ID?",answer:"X-Request-Id or X-Trace-Id header passed from gateway to services."},{question:"Log format recommendation?",answer:"Single-line JSON per event, one log entry per request-response cycle."},{question:"What is log level?",answer:"debug/info/warn/error � severity indicator."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Logging</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Request</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Gateway</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">Log Entry</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="250" y1="48" x2="280" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Structured</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">JSON log</text><rect x="10" y="105" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Scrub</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd">PII/Secrets</text><rect x="10" y="140" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Correlate</text><text x="60" y="159" text-anchor="middle" font-size="9" fill="#ddd">Request-Id</text><rect x="160" y="70" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="210" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Aggregator</text><text x="210" y="89" text-anchor="middle" font-size="9" fill="#ddd">ELK/Loki</text><rect x="160" y="105" width="100" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="210" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Audit</text><text x="210" y="124" text-anchor="middle" font-size="9" fill="#ddd">Compliance</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Logging</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">Structured JSON. Correlation IDs. </text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">No secrets. Sampling. ELK/Loki.</text></svg>',codeExamples:'<text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Logging: Structured JSON logs with correlation IDs</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">, no secrets. ELK/Loki for aggregation. Essential </text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">for debugging and compliance.</text>',mcqQuestions:[{title:"Structured Logger Middleware",useCase:"Log request and response.",code:`function requestLogger(req,res,next){
  req.reqId=req.headers["x-request-id"]||crypto.randomUUID();
  res.setHeader("X-Request-Id",req.reqId);
  const start=Date.now();
  res.on("finish",()=>{
    const latency=Date.now()-start;
    const logEntry={
      timestamp:new Date().toISOString(),level:"info",reqId:req.reqId,
      method:req.method,path:req.path,status:res.statusCode,latency,
      clientIp:req.ip,user:req.user?.id||"anonymous",
      userAgent:req.headers["user-agent"],
      contentLength:res.getHeader("content-length"),
    };
    const samplingRate=res.statusCode>=500?1.0:res.statusCode>=400?0.1:0.01;
    if(Math.random()<samplingRate) console.log(JSON.stringify(logEntry));
  });
  next();
}`,description:"Structured JSON logger with sampling and correlation ID."},{title:"Sensitive Data Scrubbing",useCase:"Secrets removed from logs.",code:`const SENSITIVE_HEADERS=["authorization","x-api-key","cookie","set-cookie","x-session-id"];
const SENSITIVE_PATTERNS=[
  /\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})\\b/g, // credit cards
  /(?:password|secret|token|key)=?["']?[^&s"']+/gi,
  /Bearers+S+/gi,
];
function scrubSensitiveData(obj,path=""){
  if(typeof obj!=="object"||!obj) return obj;
  const scrubbed={};
  for(const [key,val] of Object.entries(obj)){
    const k=key.toLowerCase();
    if(SENSITIVE_HEADERS.includes(k)) scrubbed[key]="[REDACTED]";
    else if(typeof val==="object") scrubbed[key]=scrubSensitiveData(val,path+"."+key);
    else{
      let strVal=String(val);
      for(const pattern of SENSITIVE_PATTERNS) strVal=strVal.replace(pattern,"[REDACTED]");
      scrubbed[key]=strVal;
    }
  }
  return scrubbed;
}`,description:"Scrubbing sensitive data before logging."},{title:"Distributed Tracing with Correlation ID",useCase:"Trace across services.",code:`// Gateway � generate and propagate
async function tracingMiddleware(req,res,next){
  req.traceId=req.headers["x-trace-id"]||crypto.randomUUID();
  req.spanId=crypto.randomUUID().slice(0,8);
  res.setHeader("X-Trace-Id",req.traceId);
  const originalFetch=global.fetch;
  global.fetch=function(url,opts={}){
    opts.headers={...opts.headers,"X-Trace-Id":req.traceId,"X-Span-Id":req.spanId};
    return originalFetch.call(this,url,opts);
  };
  next();
}
// Downstream service � propagate
const traceId=req.headers["x-trace-id"]||crypto.randomUUID();
logger.info({msg:"Processing request",traceId,spanId:crypto.randomUUID().slice(0,8)});`,description:"Distributed tracing with Trace and Span IDs propagated via headers."},{title:"ELK Integration",useCase:"Ship logs to Elasticsearch.",code:`// Winston logger with Elasticsearch transport
const winston=require("winston");
require("winston-elasticsearch");
const logger=winston.createLogger({
  level:"info",format:winston.format.json(),
  transports:[
    new winston.transports.Console({format:winston.format.combine(winston.format.colorize(),winston.format.simple())}),
    new ElasticsearchTransport({
      level:"info",clientOpts:{node:"https://elasticsearch:9200",auth:{username:"elastic",password:process.env.ES_PWD}},
      index:"api-gateway-logs-"+new Date().toISOString().slice(0,7),
    })
  ],
});
logger.info({event:"request",method:req.method,path:req.path,status:200,latency:42});`,description:"Winston logger shipping to Elasticsearch for ELK stack."},{question:"Logging — How to ensure reliability?",options:["Automated testing and monitoring","Manual checks only","No testing","Reactive fixes"],answer:0,explanation:"Automated testing and monitoring ensure consistent reliability."},{question:"Logging — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Logging — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Logging — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Logging — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Logging — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as ag_logging};
