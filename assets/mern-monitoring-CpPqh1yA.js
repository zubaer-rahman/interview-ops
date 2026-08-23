const e={id:"mern-monitoring",title:"MERN Monitoring",difficulty:"intermediate",estimatedMinutes:15,tldr:["MERN monitoring covers application performance monitoring (APM), error tracking, logging, and infrastructure monitoring.","Backend: PM2 monitoring, Winston/Pino logging, Morgan HTTP logging, health check endpoints, Sentry error tracking.","Frontend: browser performance monitoring, error boundary + Sentry, React DevTools Profiler, Lighthouse audits.","Infrastructure: MongoDB Atlas monitoring, Docker stats, server metrics (CPU, memory, disk), uptime monitoring (Pingdom)."],laymanDefinition:"MERN monitoring is like having a car dashboard. The speedometer (response time), fuel gauge (server resources), check engine light (errors), GPS (request tracing), and maintenance alerts (logs). You cannot fix what you cannot see � monitoring gives you visibility into every part of your application.",deepDive:[{heading:"Application Logging",text:"Morgan: HTTP request logging (method, url, status, response time). Winston/Pino: structured application logging (levels: error, warn, info, debug). Log to files with rotation. Send logs to centralized services: Logstash, Datadog, Papertrail. Log format: JSON for machine parsing. Include correlation IDs for request tracing."},{heading:"Error Tracking with Sentry",text:"Sentry captures unhandled exceptions and performance issues. Backend: @sentry/node captures Express errors. Frontend: @sentry/react captures React errors and performance. Source maps for readable stack traces. Group similar errors. Set alerts for error spikes. Integrate with GitHub issues."},{heading:"Health Check Endpoints",text:"GET /api/health: returns status (ok), uptime, timestamp. GET /api/health/detailed: checks MongoDB connection, Redis connection, disk space, memory usage. Used by load balancers, Docker health checks, and uptime monitors. Response time monitoring: measure and log endpoint response times."},{heading:"MongoDB Monitoring",text:"MongoDB Atlas: built-in monitoring (op counters, connections, memory, disk). Slow query log: set slowMS threshold (100ms). Current operations: db.currentOp(). Index usage: $indexStats. Connection pooling: monitor mongoose connection pool size. Alerts: connections >80%, replication lag, disk usage >80%."},{heading:"Frontend Performance Monitoring",text:"Web Vitals: LCP (loading), FID (interactivity), CLS (layout shift). Lighthouse: performance, accessibility, SEO audits. React DevTools Profiler: component render times. Bundle analyzer: source-map-explorer for bundle composition. Real User Monitoring (RUM): track actual user experience metrics."}],interviewAnswer:"Monitoring is critical for production MERN apps. Implement structured logging (Winston), error tracking (Sentry), health check endpoints, MongoDB monitoring, and frontend performance tracking. Set up alerts for errors, high response times, and resource exhaustion. Log everything, monitor proactively, alert on anomalies.",interviewQuestions:[{question:"Why is monitoring important?",answer:"Provides visibility into application health, performance, and errors. Enables proactive issue detection and debugging."},{question:"What is Sentry?",answer:"An error tracking and performance monitoring platform that captures exceptions and provides context for debugging."},{question:"What is the difference between Morgan and Winston?",answer:"Morgan logs HTTP requests (method, URL, status). Winston is a general-purpose logger for application events with levels and transports."},{question:"What should a health check endpoint return?",answer:"Basic: status (ok/error), uptime, timestamp. Detailed: DB connection status, memory usage, disk space, response times."},{question:"How do you monitor MongoDB performance?",answer:"MongoDB Atlas monitoring, slow query log, db.currentOp(), $indexStats, connection pool monitoring."},{question:"What are Web Vitals?",answer:"LCP (Largest Contentful Paint � loading), FID (First Input Delay � interactivity), CLS (Cumulative Layout Shift � visual stability)."},{question:"What is Real User Monitoring?",answer:"Tracking actual user experiences: page load times, API call durations, error rates from real user sessions."},{question:"How do you set up alerts?",answer:"Error rate spikes, high response times (p95 > 500ms), low disk space, high CPU/memory usage, certificate expiry."},{question:"What is the React DevTools Profiler?",answer:"A tool for recording and analyzing React component render times to identify performance bottlenecks."},{question:"What is structured logging?",answer:"Logging in JSON format with consistent fields (timestamp, level, message, service, correlationId) for machine parsing and analysis."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Monitoring</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Logging</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Morgan + Winston</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Errors</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Sentry tracking</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Health</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Endpoint checks</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">Atlas monitoring</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Frontend</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">Web Vitals + RUM</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Monitoring</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Logging (Winston), Errors (Sentry), Healt</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">h checks, MongoDB metrics, Frontend Web V</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">itals. Alert on anomalies.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Monitoring: Log everything, track errors, measure </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">performance, set alerts. You cannot fix what you c</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">annot see.</text></svg>',codeExamples:[{title:"Winston Logger Setup",useCase:"Structured logging with levels and transports.",code:`const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'mern-api' },
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log', level: 'error', maxsize: 5242880, maxFiles: 5
    }),
    new winston.transports.File({
      filename: 'logs/combined.log', maxsize: 5242880, maxFiles: 10
    }),
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;

// Usage:
// logger.info('User logged in', { userId });
// logger.error('Database connection failed', { error: err.message });`,description:"Winston logger with JSON format, file transports with rotation, and console for development."},{title:"Sentry Error Tracking (Backend)",useCase:"Capture and track Express errors.",code:`const Sentry = require('@sentry/node');
const { ProfilingIntegration } = require('@sentry/profiling-node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.2,
  integrations: [new ProfilingIntegration()],
});

// Request handler (must be first middleware)
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// All your routes here

// Error handler (must be last middleware)
app.use(Sentry.Handlers.errorHandler());
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: err.message || 'Internal server error'
  });
});`,description:"Sentry integration for Express error tracking and performance monitoring."},{title:"Health Check Endpoint",useCase:"Comprehensive health monitoring.",code:`const mongoose = require('mongoose');

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

router.get('/health/detailed', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = {
    0: 'disconnected', 1: 'connected',
    2: 'connecting', 3: 'disconnecting'
  };

  const health = {
    status: dbState === 1 ? 'ok' : 'degraded',
    database: dbStatus[dbState],
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    cpu: process.cpuUsage(),
    version: process.version
  };

  const statusCode = health.status === 'ok' ? 200 : 503;
  res.status(statusCode).json(health);
});`,description:"Health check endpoints for Docker, load balancers, and uptime monitoring services."},{title:"Morgan HTTP Logging",useCase:"Request logging middleware.",code:`const morgan = require('morgan');
const logger = require('./logger');

// Stream morgan output to winston
const stream = {
  write: (message) => logger.info(message.trim())
};

// Custom log format
morgan.format("custom", ":method :url :status :res[content-length] - :response-time ms");

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream }));
} else {
  app.use(morgan('dev'));
}`,description:"Morgan HTTP logging piped through Winston for consistent structured logging."},{title:"Sentry Error Tracking (Frontend)",useCase:"Capture React errors.",code:`import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect, useLocation, useNavigationType,
        createRoutesFromChildren, matchRoutes
      )
    })
  ],
  tracesSampleRate: 0.2,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Wrap app with Sentry error boundary
function App() {
  return (
    <Sentry.ErrorBoundary fallback={<ErrorPage />}>
      <YourApp />
    </Sentry.ErrorBoundary>
  );
}`,description:"Sentry React integration with routing instrumentation, error boundaries, and session replays."}],mcqQuestions:[{question:"What is Sentry used for?",options:["Logging","Error tracking and performance monitoring","Deployment","Testing"],answer:1,explanation:"Sentry captures exceptions and provides context for debugging errors and performance issues."},{question:"What is the difference between Morgan and Winston?",options:["Both do the same thing","Morgan logs HTTP requests, Winston logs application events","Morgan is for frontend","Winston is deprecated"],answer:1,explanation:"Morgan logs HTTP request details. Winston is a general-purpose structured logger for application events."},{question:"What should a healthy API return?",options:['200 status with status: "ok"',"500 status","Redirect","Empty response"],answer:0,explanation:'A health check returns 200 with status: "ok" when the application and dependencies are healthy.'},{question:"How do you monitor MongoDB performance?",options:["console.log","Atlas monitoring and slow query log","npm audit","PM2"],answer:1,explanation:"MongoDB Atlas provides built-in monitoring, and slow query logs help identify performance issues."},{question:"What are Web Vitals?",options:["Database metrics","Frontend performance metrics","Server metrics","Network metrics"],answer:1,explanation:"Web Vitals (LCP, FID, CLS) measure real user experience for loading, interactivity, and visual stability."},{question:"What is structured logging?",options:["Logging with colors","JSON format with consistent fields","Logging to console only","Alphabetical logging"],answer:1,explanation:"Structured logging outputs JSON with consistent fields (timestamp, level, message) for machine parsing."},{question:"MERN Monitoring — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Monitoring — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Monitoring — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Monitoring — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_monitoring};
