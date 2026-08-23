const e={id:"log-structured",title:"Structured Logging",difficulty:"intermediate",estimatedMinutes:15,tldr:["Structured logging outputs log entries as structured data (JSON) instead of plain text, making them machine-parseable and queryable.","Each log entry has named fields: timestamp, level, message, service, correlationId, duration, userId. No regex parsing needed to extract values.","Benefits: automatic parsing by log platforms, rich filtering and aggregation, consistent schema across services, easy integration with alerting systems.","Standard fields: @timestamp (ISO 8601), level (error/warn/info/debug), logger (class/module name), message (human-readable), and custom context fields."],laymanDefinition:'Structured logging is like filling out a standardized form instead of writing a paragraph. A form has named fields: "Date:", "Customer:", "Issue:". You can instantly search all forms for "Customer: Alice". Unstructured logging is like a diary entry: "Today Alice came in with a problem, it happened around 3 PM." Harder to search and analyze.',deepDive:[{heading:"JSON Log Format",text:'{"@timestamp": "2024-06-15T10:30:00Z", "level": "error", "logger": "UserService", "message": "Failed to create user", "userId": 42, "error": {"code": "DUPLICATE_EMAIL", "stack": "..."}}. Benefits: parsers can index each field, dashboards can aggregate by level, alerts can trigger on specific conditions.'},{heading:"Log Levels in Structured Logging",text:"trace: detailed debugging (development only). debug: diagnostic info for troubleshooting. info: normal application events (request started, user created). warn: unexpected but handled issues (rate limit exceeded). error: failures requiring attention (DB connection lost). fatal: unrecoverable errors (process exit)."},{heading:"Contextual Logging (Child Loggers)",text:"Create child loggers pre-populated with context: const childLogger = logger.child({ service: \\'orders\\', requestId: req.id }). Every log from this child automatically includes service and requestId fields. Eliminates repetitive manual field injection. Patterns: per-request child logger in middleware, per-service child logger at startup."},{heading:"Structured Logging in Microservices",text:'Every service logs structured JSON to stdout. Log shippers (Filebeat, Fluentd) collect from all services. Centralized platform indexes by service name field. Search across all services: {service: "orders"} AND level: "error". Correlation IDs connect entries across services. Consistent schema across teams via shared logging library.'},{heading:"Performance Considerations",text:"Structured logging is slightly slower than plain text due to serialization overhead. Mitigations: async logging (worker thread), batching, sampling high-volume debug logs, choose fast JSON serializers (pino is faster than bunyan/winston). Pino claims ~5x faster than Winston due to minimal serialization overhead."}],interviewAnswer:"Structured logging is essential for any production system. Use JSON format with a consistent schema. Include correlation IDs, service names, and relevant context. Pino is the fastest Node.js logger. Send all logs to stdout and use a log shipper — never write to files directly in containerized environments. Structured logs are the foundation of observability.",interviewQuestions:[{question:"What is structured logging?",answer:"Outputting log entries as structured data (JSON) with named fields instead of unstructured plain text."},{question:"Why use structured logging?",answer:"Machine-parseable, queryable by field, consistent schema, no regex parsing, easier integration with log platforms."},{question:"What is a child logger?",answer:"A logger pre-populated with context fields. Every log from the child automatically includes those fields."},{question:"What are common structured log fields?",answer:"@timestamp, level, message, logger (module/class), service, correlationId, userId, duration, error."},{question:"What is the fastest Node.js logger?",answer:"Pino — ~5x faster than Winston due to minimal serialization overhead and async design."},{question:"What log levels exist?",answer:"trace, debug, info, warn, error, fatal. Use info for normal events, error for failures, trace/debug for development."},{question:"Should you log to files in Docker?",answer:"No. Log to stdout. Docker captures stdout/stderr. A log shipper collects from Docker\\'s log driver."},{question:"What is log level sampling?",answer:"Logging only a percentage of high-volume events (e.g., 1% of debug logs) to reduce volume while retaining signal."},{question:"How do you add context to logs?",answer:"Use child loggers, pass context object to each log call, or use AsyncLocalStorage for automatic context propagation."},{question:"What is the schema consistency problem?",answer:"Different services may log the same field with different names/types. Solve with a shared logging library/schema registry."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Structured Logging</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Plain Text</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">"User logged in"</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Parsing Hell</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">regex, grep, cut</text><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">JSON Format</text><text x="65" y="73" text-anchor="middle" font-size="9" fill="#ddd">{"level":"info","use</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">rId":42}</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="65" width="130" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="225" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auto-Parsed</text><text x="225" y="84" text-anchor="middle" font-size="9" fill="#ddd">Query by field</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Child Logger</text><text x="65" y="103" text-anchor="middle" font-size="9" fill="#ddd">Pre-populated contex</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">t</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pino Logger</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Fast serialization</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Correlation ID</text><text x="65" y="163" text-anchor="middle" font-size="9" fill="#ddd">Trace across service</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">s</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Structured Logging</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">JSON logs with named fields. Mac</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">hine-parseable, queryable, consi</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">stent across services.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Structured Logging: JSON-formatted logs with named</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> fields — no regex, instant querying, rich analysi</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">s.</text></svg>',codeExamples:[{title:"Pino Structured Logger (Node.js)",useCase:"Fast JSON logging.",code:`const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    bindings(bindings) {
      return { pid: bindings.pid, host: bindings.hostname };
    }
  },
  redact: {
    paths: ['req.headers.authorization', 'req.body.password'],
    censor: '[REDACTED]'
  }
});

logger.info({ userId: 42, action: 'create_order' }, 'Order created');
// {"level":30,"time":"2024-06-15T10:30:00Z",
//  "pid":1234,"host":"server1",
//  "userId":42,"action":"create_order",
//  "msg":"Order created"}`,description:"Pino outputs structured JSON with automatic timestamp, level, and custom context fields."},{title:"Winston Structured Logger (Node.js)",useCase:"Popular alternative with transports.",code:`const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'order-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log', level: 'error'
    })
  ]
});

logger.error('Database connection failed', {
  dbHost: process.env.DB_HOST,
  retryAttempt: 3
});`,description:"Winston provides flexible transports and formatting with structured JSON output."},{title:"Child Logger with Request Context",useCase:"Automatic context via middleware.",code:`// Middleware: create child logger per request
app.use((req, res, next) => {
  req.log = logger.child({
    requestId: uuidv4(),
    method: req.method,
    url: req.url,
    ip: req.ip
  });
  next();
});

// Route handler — no repetitive context injection
app.get('/api/users/:id', async (req, res) => {
  req.log.info({ userId: req.params.id }, 'Fetching user');
  try {
    const user = await db.findUser(req.params.id);
    req.log.info('User found');
    res.json(user);
  } catch (err) {
    req.log.error({ err }, 'Failed to fetch user');
    res.status(500).json({ error: 'Internal error' });
  }
});`,description:"Child loggers automatically include request context in every log entry without manual injection."},{title:"Structured Error Logging with Stack Traces",useCase:"Log full error details.",code:`const pino = require('pino');

const logger = pino({
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res
  }
});

try {
  throw new Error('Database timeout');
} catch (err) {
  // Automatically serializes: message, stack, type
  logger.error({ err, query: 'SELECT * FROM orders' },
    'Query failed');
  // {"level":50,"err":{"type":"Error",
  //  "message":"Database timeout",
  //  "stack":"Error: Database timeout\\n at ..."},
  //  "query":"SELECT * FROM orders"}
}`,description:"Error serializers capture full stack traces and error details in structured format."},{title:"AsyncLocalStorage for Automatic Context",useCase:"No need to pass logger through every function.",code:`const { AsyncLocalStorage } = require('async_hooks');
const asyncStore = new AsyncLocalStorage();

const baseLogger = require('pino')();

app.use((req, res, next) => {
  const store = {
    logger: baseLogger.child({
      requestId: uuidv4(),
      userId: req.user?.id
    })
  };
  asyncStore.run(store, () => next());
});

function getLogger() {
  return asyncStore.getStore()?.logger || baseLogger;
}

// In any service layer:
async function createOrder(data) {
  const log = getLogger();
  log.info({ data }, 'Creating order');
  // No need to pass req.log through calls
}`,description:"AsyncLocalStorage propagates the logger context automatically without passing it through parameters."}],mcqQuestions:[{question:"What format does structured logging use?",options:["CSV","JSON","XML","YAML"],answer:1,explanation:"Structured logging most commonly uses JSON format with named fields."},{question:"Which Node.js logger is fastest?",options:["Winston","Bunyan","Pino","Log4js"],answer:2,explanation:"Pino is significantly faster due to minimal serialization overhead."},{question:"What is a child logger?",options:["A logger for children","A logger with pre-populated context fields","A separate log file","A logger that filters by level"],answer:1,explanation:"Child loggers inherit parent configuration and add predefined context fields automatically."},{question:"What should be included in every log?",options:["@timestamp, level, message","IP address only","Server uptime","Memory usage"],answer:0,explanation:"Every structured log should include timestamp, level, and a descriptive message plus relevant context."},{question:"Why log to stdout in containers?",options:["Better performance","Docker captures stdout; shippers collect from Docker","It is the default","Files are not allowed"],answer:1,explanation:"Docker and Kubernetes capture stdout/stderr; using stdout is the container-native logging pattern."},{question:"What log level indicates failure?",options:["info","warn","error","debug"],answer:2,explanation:"Error level indicates a failure that needs investigation. Fatal indicates unrecoverable errors."},{question:"Structured Logging — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Structured Logging — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Structured Logging — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Structured Logging — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as log_structured};
