export const express_morgan = {
  "id": "express-morgan",
  "title": "Morgan",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Morgan is an HTTP request logger middleware for Express that automatically logs incoming requests with configurable formats and output streams.",
    "Built-in formats: combined (Apache standard), common (Apache common), dev (colorful for development), short, tiny.",
    "Morgan can log to console, file streams, or custom transports, making it useful for both development debugging and production logging with log rotation.",
    "Custom tokens can be defined to log additional data like response time, user ID, or custom headers."
  ],
  "laymanDefinition": "Morgan is like a security camera that records every visitor to your website. It automatically logs who came (IP), what they wanted (URL), how it was handled (status code), and how long they stayed (response time).",
  "deepDive": [
    {
      "heading": "Built-in Log Formats",
      "text": "combined: :remote-addr - :remote-user [:date] \":method :url HTTP/:http-version\" :status :res[content-length] \":referrer\" \":user-agent\". dev: :method :url :status :response-time ms - colored by status. short: :remote-addr :method :url HTTP/:http-version :status :res[content-length] - :response-time ms. tiny: :method :url :status :res[content-length] - :response-time ms."
    },
    {
      "heading": "Stream Configuration",
      "text": "Morgan writes to stdout by default. Write to a file: app.use(morgan(\\'combined\\', { stream: fs.createWriteStream(\\'access.log\\', { flags: \\'a\\' }) })). Use rotating-file-stream for log rotation. Combine with winston for structured logging to multiple transports."
    },
    {
      "heading": "Custom Tokens",
      "text": "Define custom tokens: morgan.token(\\'user\\', (req, res) => req.user?.id || \\'anonymous\\'). Use in format string: \\':method :url :user\\'. Useful for logging authenticated user IDs, custom headers, or response data."
    },
    {
      "heading": "Conditional Logging",
      "text": "Skip logging for specific routes: morgan(\\'combined\\', { skip: (req, res) => req.url.startsWith(\\'/health\\') || res.statusCode < 400 }). Skip function receives req and res. Log all requests in dev, skip health checks in production."
    },
    {
      "heading": "Advanced Logging Patterns",
      "text": "Use multiple morgan instances: one for dev console (tiny format), one for combined file logs. Use different formats per environment. Combine with winston for production logging with log levels, JSON format, and log rotation. Log slow requests separately for performance monitoring."
    }
  ],
  "interviewAnswer": "Morgan provides simple, effective HTTP logging for Express applications. Its built-in formats cover common needs, while custom tokens and streams enable advanced logging tailored to specific requirements.",
  "interviewQuestions": [
    {
      "question": "What is Morgan?",
      "answer": "Morgan is HTTP request logger middleware for Express. It automatically logs details about incoming requests including method, URL, status code, response time, and other metadata using configurable format strings."
    },
    {
      "question": "What are the built-in Morgan formats?",
      "answer": "combined (Apache combined log), common (Apache common), dev (color-coded for development), short, and tiny. Each format provides different levels of detail. combined is most verbose; tiny is most concise."
    },
    {
      "question": "How do you log to a file with Morgan?",
      "answer": "Use the stream option: app.use(morgan(\\'combined\\', { stream: fs.createWriteStream(\\'access.log\\', { flags: \\'a\\' }) })). Use rotating-file-stream package for automatic log rotation based on date or size."
    },
    {
      "question": "How do you create custom Morgan tokens?",
      "answer": "morgan.token(\\'customName\\', (req, res) => req.customData). Then use \\':customName\\' in the format string. Useful for logging user IDs, custom headers, session data, or business-specific information."
    },
    {
      "question": "How do you skip logging for specific routes?",
      "answer": "Use the skip option: morgan(\\'tiny\\', { skip: (req, res) => req.path.startsWith(\\'/health\\') }). Skip function returns true to skip logging. Commonly used for health checks, static files, and successful responses."
    },
    {
      "question": "What is the difference between combined and dev formats?",
      "answer": "combined is the Apache standard with full details: IP, user, date, method, URL, status, size, referrer, user-agent. dev is compact with color coding: method (colored), URL, status (colored by range), response time. dev is for development, combined for production."
    },
    {
      "question": "How do you use Morgan with Winston for structured logging?",
      "answer": "Create a writable stream that writes to Winston: const stream = { write: (msg) => logger.info(msg.trim()) }; app.use(morgan(\\'combined\\', { stream })). Morgan provides the raw log string, Winston provides structured logging with levels and transports."
    },
    {
      "question": "How do you log response time in milliseconds?",
      "answer": "The :response-time token logs the time between request and response in ms. It is included in tiny and dev formats. Custom formats: \\':method :url :status :response-time ms\\'."
    },
    {
      "question": "How do you use multiple Morgan instances?",
      "answer": "app.use(morgan(\\'dev\\')); app.use(morgan(\\'combined\\', { stream: writeStream })); The first logs to console in dev format, the second logs to file in combined format. Multiple instances run independently."
    },
    {
      "question": "How do you customize the date format in Morgan?",
      "answer": "Use :date[format] token: :date[web] (Web format), :date[clf] (Apache common log format), :date[iso] (ISO8601). Custom format: morgan.token(\\'date\\', () => new Date().toISOString())."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Morgan</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#68a063\" stroke=\"#68a063\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Incoming</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Request</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Morgan</text><text x=\"260\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logger</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"93\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"95\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"75\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Console</text><text x=\"75\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">:dev format</text><rect x=\"170\" y=\"95\" width=\"130\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"235\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Log File</text><text x=\"235\" y=\"123\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">:combined format</text><rect x=\"350\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Route</text><text x=\"410\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Handler</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Morgan: HTTP request logger with configurable formats and output streams.</text></svg>",
  "codeExamples": [
    {
      "title": "Development Logging",
      "useCase": "Color-coded logs for development.",
      "code": "const morgan = require('morgan');\nif (process.env.NODE_ENV === 'development') {\n  app.use(morgan('dev'));\n}",
      "description": "Enables color-coded concise logging only in development environment."
    },
    {
      "title": "Production File Logging",
      "useCase": "Apache combined format to file.",
      "code": "const fs = require('fs');\nconst path = require('path');\n\nconst accessStream = fs.createWriteStream(\n  path.join(__dirname, 'access.log'),\n  { flags: 'a' }\n);\napp.use(morgan('combined', { stream: accessStream }));",
      "description": "Logs in Apache combined format to a log file. Flag \\'a\\' appends to existing file."
    },
    {
      "title": "Custom Token for User ID",
      "useCase": "Log authenticated user info.",
      "code": "morgan.token('user', (req, res) => req.user?.id || 'anonymous');\nmorgan.token('role', (req, res) => req.user?.role || 'public');\n\napp.use(morgan(':method :url :status :user[role] - :response-time ms'));",
      "description": "Custom tokens log user ID and role from request. Falls back to anonymous/public for unauthenticated."
    },
    {
      "title": "Skip Health Checks",
      "useCase": "Exclude monitoring traffic.",
      "code": "app.use(morgan('combined', {\n  skip: (req, res) => {\n    return req.url === '/health' || req.url === '/ready';\n  }\n}));",
      "description": "Skips logging for health check and readiness probe endpoints."
    },
    {
      "title": "Multiple Log Streams",
      "useCase": "Console + file + error log.",
      "code": "const accessLog = fs.createWriteStream('access.log', { flags: 'a' });\nconst errorLog = fs.createWriteStream('error.log', { flags: 'a' });\n\napp.use(morgan('tiny', {\n  stream: {\n    write: (msg) => {\n      accessLog.write(msg);\n      if (msg.includes(' 4') || msg.includes(' 5')) errorLog.write(msg);\n    }\n  }\n}));",
      "description": "Custom stream writes all logs to access.log and error responses (4xx, 5xx) also to error.log."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What format provides color-coded development logs?",
      "options": [
        "combined",
        "common",
        "dev",
        "tiny"
      ],
      "answer": 2,
      "explanation": "The dev format provides color-coded output suitable for development."
    },
    {
      "question": "How do you log response time with Morgan?",
      "options": [
        ":response-time",
        ":duration",
        ":latency",
        ":elapsed"
      ],
      "answer": 0,
      "explanation": ":response-time logs the response time in milliseconds."
    },
    {
      "question": "What option controls where Morgan writes logs?",
      "options": [
        "output",
        "stream",
        "file",
        "target"
      ],
      "answer": 1,
      "explanation": "The stream option controls where Morgan writes its log output."
    },
    {
      "question": "What is the most verbose Morgan format?",
      "options": [
        "tiny",
        "short",
        "combined",
        "dev"
      ],
      "answer": 2,
      "explanation": "The combined format is the most verbose, following the Apache combined log format."
    },
    {
      "question": "How do you define a custom Morgan token?",
      "options": [
        "morgan.add()",
        "morgan.token()",
        "morgan.format()",
        "morgan.define()"
      ],
      "answer": 1,
      "explanation": "morgan.token() defines a custom token that can be used in format strings."
    },
    {
      "question": "What does the skip option accept?",
      "options": [
        "Boolean",
        "Function returning boolean",
        "String",
        "Array"
      ],
      "answer": 1,
      "explanation": "The skip option is a function (req, res) that returns true to skip logging."
    }
  ]
};
