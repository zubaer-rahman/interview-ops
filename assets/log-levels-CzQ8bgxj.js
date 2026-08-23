const e={id:"log-levels",title:"Log Levels",difficulty:"beginner",estimatedMinutes:10,tldr:["Log levels categorize log entries by severity, allowing developers to filter noise from critical issues and control verbosity in different environments.","Standard hierarchy (most to least severe): fatal, error, warn, info, debug, trace. Each level includes all levels above it (info includes warn, error, fatal).","Environment recommendations: production = info (capture errors + normal events), staging = debug, development = trace. Never leave debug/trace on in production at high volume.","Log levels enable: alerting only on error/fatal, suppressing debug in production, gradually increasing verbosity for troubleshooting specific components."],laymanDefinition:"Log levels are like volume knobs on a radio. Fatal/Error is the emergency broadcast system — you stop everything to listen. Warn is the weather alert. Info is the regular news. Debug is the detailed sports commentary. Trace is the static between stations — useful to engineers, noise to everyone else. You turn the knob up (more verbose) when troubleshooting.",deepDive:[{heading:"Standard Log Levels (RFC 5424)",text:"Syslog severity levels (0-7): Emergency (0) — system unusable. Alert (1) — immediate action required. Critical (2) — critical condition. Error (3) — error condition. Warning (4) — warning condition. Notice (5) — normal but significant. Informational (6) — general info. Debug (7) — debug-level messages. Most apps use error/warn/info/debug."},{heading:"Choosing the Right Level",text:"Fatal: app cannot continue (cannot connect to DB on startup). Error: operation failed (payment declined, DB query failed). Warn: unexpected but handled (rate limit hit, retry succeeded, deprecated API used). Info: significant lifecycle events (server started, user registered, order placed). Debug: detailed diagnostic info (SQL queries, API response times). Trace: step-by-step execution flow (entering/exiting functions)."},{heading:"Environment-Based Level Configuration",text:"Production: info (or warn for high-volume apps). Covers error/warn/info. Filter debug/trace. Staging: debug for troubleshooting test failures. Development: trace for maximum verbosity. Configure via environment variable (LOG_LEVEL=info). Change log level at runtime for specific components without restart using dynamic configuration."},{heading:"Dynamic Log Level Changing",text:"Change log level at runtime without restarting the process. Useful for: temporarily enabling debug on a production service to diagnose an issue. Implementation: shared configuration store (Redis, config server), HTTP endpoint to change level (/loglevel), signal handling (SIGUSR2). Log level reverts to default on restart."},{heading:"Per-Component Log Levels",text:"Different log levels for different modules or packages. Example: set db module to debug, http module to warn, and everything else to info. Node.js: pino supports level per child logger. Winston: level per transport. Benefits: reduce noise from well-known components, increase detail on components being investigated."}],interviewAnswer:"Log levels are your first line of defense against log noise. Set the right level for each message: error for actual failures, warn for surprises that are handled, info for significant events, debug for diagnostics. Configure levels per environment and consider per-component levels. Implement dynamic log level changes for production debugging without restarting services.",interviewQuestions:[{question:"What are log levels?",answer:"Severity categories for log entries: fatal, error, warn, info, debug, trace. Higher levels include all lower levels."},{question:"What log level should production use?",answer:"Info (captures error/warn/info) or warn for high-volume apps. Never debug/trace in production."},{question:"What is the difference between error and fatal?",answer:"Error: operation failed but app can continue. Fatal: app cannot continue (exits or crashes)."},{question:"What is the difference between debug and trace?",answer:"Debug: detailed diagnostic info (SQL queries, response times). Trace: step-by-step flow (function entry/exit)."},{question:"What is dynamic log level changing?",answer:"Changing log levels at runtime without restarting — enables debugging production issues on demand."},{question:"What are per-component log levels?",answer:"Setting different log levels for different modules/services. E.g., debug for db module, warn for http module."},{question:"What happens if you set log level to warn?",answer:"Only warn, error, and fatal messages are logged. Info, debug, trace are suppressed."},{question:"Should you log passwords or credit cards?",answer:"Never log sensitive data regardless of level. Use redaction to mask sensitive fields."},{question:"What is a structured log level field?",answer:'The level is a named field in JSON logs (level: "error"). Enables filtering, alerting, and aggregation by severity.'},{question:"What is ansi-colorized log output?",answer:"Logs with color-coded levels for terminal readability (red=error, yellow=warn, green=info, gray=debug)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Log Levels</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#ff4444" stroke="#ff4444" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">FATAL</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">System down</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">ERROR</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Operation failed</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">WARN</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Handled issue</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">INFO</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Normal event</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#6c757d" stroke="#6c757d" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DEBUG</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Diagnostics</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Log Levels</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">Severity hierarchy: FATAL > ERROR > WARN </text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">> INFO > DEBUG > TRACE. Filter noise, con</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">trol verbosity.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Log Levels: Categorize logs by severity. Control v</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">erbosity per environment. Suppress noise, amplify </text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">signal.</text></svg>',codeExamples:[{title:"Setting Log Level in Pino (Node.js)",useCase:"Environment-based level configuration.",code:`const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  // In production: LOG_LEVEL=info
  // In debugging: LOG_LEVEL=debug
});

// Usage — only logs if level >= configured level
logger.fatal('Cannot connect to database');   // always
logger.error('Payment failed', { orderId });   // error+
logger.warn('Rate limit almost reached');      // warn+
logger.info('Server started on port 3000');     // info+
logger.debug('SQL query:', query);              // debug+
logger.trace('Entering function x');            // trace+

// Check if level is enabled
if (logger.isLevelEnabled('debug')) {
  logger.debug({ expensiveData }, 'details');
}`,description:"Pino log level configuration from environment variable with proper level hierarchy."},{title:"Dynamic Log Level Endpoint (Express)",useCase:"Change levels at runtime.",code:`// POST /admin/loglevel with { level: 'debug' }
app.post('/admin/loglevel', isAdmin, (req, res) => {
  const { level } = req.body;
  const valid = ['fatal','error','warn','info',
                 'debug','trace'];

  if (!valid.includes(level)) {
    return res.status(400).json({
      error: \`Invalid level. Valid: \${valid.join(', ')}\`
    });
  }

  logger.level = level;
  logger.warn({ level }, 'Log level changed dynamically');
  res.json({ message: \`Log level changed to \${level}\` });
});

// GET /admin/loglevel — view current level
app.get('/admin/loglevel', isAdmin, (req, res) => {
  res.json({ currentLevel: logger.level });
});`,description:"Dynamic log level endpoint enables production debugging without restarting the process."},{title:"Per-Component Log Levels with Child Loggers",useCase:"Different levels for different modules.",code:`const baseLogger = require('pino')({
  level: process.env.LOG_LEVEL || 'info'
});

// Database module — more verbose
const dbLogger = baseLogger.child({
  module: 'db'
}, { level: process.env.DB_LOG_LEVEL || 'debug' });

// HTTP module — less verbose
const httpLogger = baseLogger.child({
  module: 'http'
}, { level: 'warn' });

// Usage
dbLogger.debug('Executing query:', query); // logged
httpLogger.debug('Request headers:', headers); // suppressed
httpLogger.warn('Slow request:', duration); // logged

// Set environment:
// LOG_LEVEL=info DB_LOG_LEVEL=debug`,description:"Per-component log levels let you filter noise at the module level while keeping others quiet."},{title:"Log Level Filtering in Production",useCase:"Don\\'t log sensitive debug data.",code:`function logUserEvent(event, user, details) {
  const logData = {
    event,
    userId: user.id,
    role: user.role,
  };

  // NEVER log passwords, credit cards, tokens
  // Always use info for business events
  logger.info(logData, 'User event: ' + event);

  // Debug: add details (only in debug mode)
  if (logger.isLevelEnabled('debug')) {
    logger.debug({ ...logData, details },
      'User event with details');
  }
}

// Redact sensitive fields automatically
const logger = pino({
  redact: ['password', 'token', 'ssn',
           'creditCard', 'authorization'],
});`,description:"Use log level checks and pino redact to prevent sensitive data exposure in production logs."},{title:"Structured Log Level Field with Winston",useCase:"Level as searchable field.",code:`const winston = require('winston');

const logger = winston.createLogger({
  levels: {
    fatal: 0, error: 1, warn: 2, info: 3,
    debug: 4, trace: 5
  },
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/errors.log', level: 'error'
    })
  ]
});

// JSON output includes level as field
logger.warn('Disk space low', { freeSpace: '5GB' });
// {"level":"warn","msg":"Disk space low",
//  "freeSpace":"5GB","timestamp":"..."}`,description:"Log level becomes a searchable JSON field, enabling aggregation and filtering in log platforms."}],mcqQuestions:[{question:"What is the most severe log level?",options:["error","fatal","warn","info"],answer:1,explanation:"Fatal is the most severe — the application cannot continue and will exit."},{question:"What log level should production run at?",options:["debug","trace","info","fatal"],answer:2,explanation:"Production should run at info level — captures errors, warnings, and informational events."},{question:"If log level is set to warn, which levels are logged?",options:["warn only","warn, error, fatal","info, warn, error","all levels"],answer:1,explanation:"Setting level to warn includes warn, error, and fatal (levels at or above severity)."},{question:"What is the difference between debug and trace?",options:["Same thing","Debug is diagnostic, trace is step-by-step flow","Trace is for testing","Debug is for errors"],answer:1,explanation:"Debug logs detailed diagnostics; trace logs execution flow step-by-step."},{question:"What is dynamic log level changing?",options:["Changing levels in code at compile time","Changing levels at runtime without restart","Automatic level adjustment","Level changes per environment"],answer:1,explanation:"Dynamic level changing adjusts verbosity at runtime — no restart needed."},{question:"What should be redacted from logs?",options:["User IDs","Passwords and tokens","Error messages","Timestamps"],answer:1,explanation:"Sensitive data like passwords, tokens, and PII must be redacted from logs."},{question:"Log Levels — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Log Levels — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Log Levels — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Log Levels — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as log_levels};
