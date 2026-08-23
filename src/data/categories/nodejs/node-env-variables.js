export const node_env_variables = {
  "id": "node-env-variables",
  "title": "Node.js Environment Variables",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Environment variables are key-value pairs available to a process via process.env, inherited from the parent process and set at the system or shell level.",
    "Common conventions: NODE_ENV (development/production), PORT (HTTP port), DATABASE_URL (connection string), DEBUG (debug namespaces).",
    "Use .env files with dotenv package for local development to set environment variables without modifying system configuration.",
    "Environment variables are strings by default. Numbers and booleans must be explicitly parsed. Never store secrets in source code or .env files committed to version control."
  ],
  "laymanDefinition": "Environment variables are like settings that the operating system passes to every program when they start. Think of them as a bulletin board outside your application that contains important information: \"Your port is 3000\", \"Database is at db.example.com\", \"You are in development mode\". Any program can read these settings by looking at the board. They are useful because you can change the board without changing the program's code - the same code runs differently on your laptop (development) versus a server (production) just by changing the bulletin board contents.",
  "deepDive": [
    {
      "heading": "Accessing Environment Variables in Node.js",
      "text": "process.env is a plain JavaScript object where each key-value pair is a string. Access: process.env.NODE_ENV, process.env.PORT. If a variable is not set, it returns undefined. Set in code: process.env.MY_VAR = \"value\" - affects the current process and child processes. Delete: delete process.env.MY_VAR. All values are strings - must parse: parseInt(process.env.PORT, 10), process.env.DEBUG === \"true\". Platform-specific case sensitivity: Windows environment variable names are case-insensitive (Node.js normalizes to lowercase on Windows). Linux/Mac are case-sensitive. Use process.env.PATH or process.env.Path depending on platform (though PATH is universal in practice). process.env.NODE_ENV is a de facto standard but not built into Node.js itself. Express and many libraries check it."
    },
    {
      "heading": "Setting Environment Variables",
      "text": "(1) Shell: NODE_ENV=production node app.js (POSIX), set NODE_ENV=production && node app.js (Windows cmd), $env:NODE_ENV=\"production\"; node app.js (PowerShell). (2) .env files: create a .env file with KEY=VALUE format, load with require(\"dotenv\").config(). (3) package.json scripts: \"start\": \"NODE_ENV=production node server.js\" (POSIX), use cross-env for cross-platform: \"start\": \"cross-env NODE_ENV=production node server.js\". (4) Docker: ENV NODE_ENV=production in Dockerfile, or -e NODE_ENV=production in docker run. (5) CI/CD platforms: set via UI or YAML config (GitHub Actions env, GitLab CI variables). (6) .env vs .env.local vs .env.production - dotenv supports multiple files for different environments. (7) Windows system settings: System Properties > Advanced > Environment Variables."
    },
    {
      "heading": "The dotenv Package and .env Files",
      "text": "dotenv is the standard package for loading .env files. Basic usage: require(\"dotenv\").config() loads .env into process.env. options: path (custom file path), override (overwrite existing env vars, default false), debug (logging). Multi-file support: dotenv.config({ path: \".env.local\" }), dotenv.config({ path: \".env.production\" }). Order matters - later calls do NOT override existing variables by default. Best practices: (1) Add .env to .gitignore. (2) Create .env.example with placeholder values committed to repo. (3) Use .env.development, .env.production, .env.test for different environments. (4) .env file rules: no spaces around =, quotes are part of the value, # for comments, multiline values with \\n or double quotes. (5) The dotenv-expand package enables variable expansion: KEY=\"${OTHER_KEY}/subdir\"."
    },
    {
      "heading": "Security Considerations for Environment Variables",
      "text": "(1) Never commit .env files to version control. Use .env.example with placeholder values. (2) Secrets: API keys, database passwords, JWT secrets, encryption keys. Leaked secrets can compromise systems. (3) Process isolation: env vars are accessible to child processes - a compromised child process can read parent's secrets. (4) Memory exposure: env vars in process.env can be accessed via /proc/self/environ on Linux or process dump. (5) Logging: avoid logging process.env or printing secrets to console. (6) Injection: user-controlled env var names can override sensitive variables - sanitize var names. (7) Alternative for production: use secret managers (AWS Secrets Manager, HashiCorp Vault, Docker secrets, Kubernetes secrets) instead of env vars for sensitive data. (8) Validation: validate that required env vars exist at startup using libraries like envalid or joi."
    },
    {
      "heading": "Best Practices for Environment Configuration",
      "text": "(1) Use a config module to centralize env var access: module.exports = { port: parseInt(process.env.PORT, 10) || 3000 }. (2) Validate required variables early in the application lifecycle. (3) Provide sensible defaults for optional variables. (4) Use NODE_ENV consistently: \"development\", \"production\", \"test\". (5) Prefix app-specific vars with APP_: APP_DB_HOST, APP_SECRET. (6) Use TypeScript/envalid for typed env vars with validation. (7) Document all env vars in README or .env.example. (8) For 12-factor apps: store config in environment variables. (9) Use different .env files per environment but keep the schema consistent. (10) Avoid environment variable sprawl - consolidate related settings into structured config objects."
    }
  ],
  "interviewAnswer": "Environment variables are accessed via process.env in Node.js. All values are strings - parse numbers and booleans explicitly. Set via shell, .env files (dotenv package), or container orchestration. NODE_ENV is the de facto standard for environment detection. Best practices: centralize config access in a module, validate required vars at startup, provide defaults, never commit .env files (use .env.example). Security: avoid logging secrets, use secret managers in production, be aware child processes inherit env vars. For production, consider Docker secrets, Vault, or cloud secret managers instead of raw env vars for sensitive data.",
  "interviewQuestions": [
    {
      "question": "How do you access environment variables in Node.js?",
      "answer": "process.env.VAR_NAME or process.env[\"VAR_NAME\"]. All values are strings. Returns undefined if the variable is not set. Set: process.env.MY_VAR = \"value\". Delete: delete process.env.MY_VAR."
    },
    {
      "question": "What is NODE_ENV and why is it important?",
      "answer": "NODE_ENV is a convention to indicate the application environment: \"development\", \"production\", or \"test\". Frameworks like Express use it to enable/disable features (stack traces in dev, caching in prod). It is NOT built into Node.js - you must set it explicitly."
    },
    {
      "question": "How do you handle cross-platform env var setting in npm scripts?",
      "answer": "Use the cross-env package: \"start\": \"cross-env NODE_ENV=production node app.js\". Without cross-env, POSIX uses NODE_ENV=production node app.js, but this fails on Windows. cross-env normalizes the syntax."
    },
    {
      "question": "What is the dotenv package and how do you use it?",
      "answer": "dotenv loads .env file contents into process.env. Usage: require(\"dotenv\").config(). Supports custom paths: dotenv.config({ path: \".env.production\" }). The .env file should be in .gitignore. Use .env.example as a template."
    },
    {
      "question": "How do you validate that required environment variables are set?",
      "answer": "Check at startup: if (!process.env.DATABASE_URL) throw new Error(\"DATABASE_URL required\"). Use libraries like envalid or joi for typed validation with defaults. Validate early so the app fails fast with a clear message."
    },
    {
      "question": "What are the security risks of environment variables?",
      "answer": "(1) Leaking secrets if .env is committed. (2) Accessible to child processes. (3) Visible in process listings (ps aux). (4) Logged by accident. (5) Injected via user-controlled names. Mitigations: use .gitignore, use secret managers in production, validate required vars, never log process.env."
    },
    {
      "question": "How do environment variables work on different platforms?",
      "answer": "POSIX: export VAR=value (bash), set VAR=value (sh). Windows CMD: set VAR=value. PowerShell: $env:VAR=\"value\". Node.js normalizes Windows env var names to lowercase. Variable names are case-sensitive on POSIX, case-insensitive on Windows."
    },
    {
      "question": "What is the difference between .env, .env.local, and .env.production?",
      "answer": "dotenv conventions: .env (default, loaded first), .env.local (local overrides, gitignored), .env.development/.env.production/.env.test (environment-specific). Later files do not override existing vars. Order: .env → .env.development → .env.local."
    },
    {
      "question": "How do you structure environment variables for a 12-factor app?",
      "answer": "(1) Store config in environment variables. (2) One config per deployment (dev, staging, prod). (3) Never hardcode config in code. (4) Group related vars with prefixes (DB_HOST, DB_PORT, DB_NAME). (5) Use a config module that reads from process.env with validation."
    },
    {
      "question": "How do you handle boolean environment variables?",
      "answer": "Environment variables are strings. process.env.DEBUG === \"true\", not truthy check: if (process.env.DEBUG) // \"false\" would be truthy!. Proper check: process.env.DEBUG === \"true\" || process.env.DEBUG === \"1\". Use a helper: const toBool = (v) => v === \"true\" || v === \"1\"."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"260\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Environment Variables in Node.js</text><rect x=\"30\" y=\"55\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"130\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">process.env</text><text x=\"130\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Access all env vars as strings</text><rect x=\"30\" y=\"115\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">dotenv .env</text><text x=\"130\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Load from file</text><rect x=\"30\" y=\"175\" width=\"200\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"130\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shell / OS</text><text x=\"130\" y=\"214\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Export or set command</text></svg>",
  "codeExamples": [
    {
      "title": "Centralized Configuration Module",
      "useCase": "Access and validate env vars from a single module",
      "code": "// config.js\nfunction required(name) {\n  var value = process.env[name];\n  if (!value) {\n    throw new Error(\"Missing required env var: \" + name);\n  }\n  return value;\n}\n\nfunction optional(name, defaultValue) {\n  var value = process.env[name];\n  return value !== undefined ? value : defaultValue;\n}\n\nvar config = {\n  env: process.env.NODE_ENV || \"development\",\n  isDev: process.env.NODE_ENV === \"development\",\n  isProd: process.env.NODE_ENV === \"production\",\n  port: parseInt(optional(\"PORT\", \"3000\"), 10),\n  db: {\n    host: optional(\"DB_HOST\", \"localhost\"),\n    port: parseInt(optional(\"DB_PORT\", \"5432\"), 10),\n    name: required(\"DB_NAME\"),\n    user: required(\"DB_USER\"),\n    password: required(\"DB_PASSWORD\")\n  },\n  redis: {\n    url: optional(\"REDIS_URL\", \"redis://localhost:6379\")\n  },\n  debug: process.env.DEBUG === \"true\",\n  logLevel: optional(\"LOG_LEVEL\", \"info\")\n};\n\nmodule.exports = config;",
      "description": "Centralize all process.env access in a config module. Use required() for mandatory vars (fail fast at startup), optional() for optional ones (with sensible defaults). Parse types (parseInt, boolean check) in one place."
    },
    {
      "title": "Using dotenv for Different Environments",
      "useCase": "Load environment-specific .env files",
      "code": "// Load dotenv at the very start of your app\nrequire(\"dotenv\").config();\n\n// .env file:\n// PORT=3000\n// DB_HOST=localhost\n// # This is a comment\n// MULTI_LINE=\"line1\\nline2\"\n\n// For specific environment files:\nvar envFile = \".env.\" + (process.env.NODE_ENV || \"development\");\nrequire(\"dotenv\").config({ path: envFile });\n\n// .env.development:\n// NODE_ENV=development\n// DEBUG=true\n// LOG_LEVEL=debug\n\n// .env.production:\n// NODE_ENV=production\n// DEBUG=false\n// LOG_LEVEL=error\n\n// .env.example (committed to git, .env is in .gitignore):\n// PORT=3000\n// DB_HOST=localhost\n// DB_NAME=myapp\n// # Fill in your credentials:\n// DB_USER=\n// DB_PASSWORD=\n\nconsole.log(\"Environment:\", process.env.NODE_ENV);\nconsole.log(\"Port:\", process.env.PORT);\nconsole.log(\"Debug:\", process.env.DEBUG);",
      "description": "dotenv loads .env files into process.env. Use environment-specific files (.env.development, .env.production). Commit .env.example (with placeholder values) but not .env (with real secrets). Load dotenv as early as possible, before any other module reads process.env."
    },
    {
      "title": "Setting and Reading Environment Variables at Runtime",
      "useCase": "Work with env vars programmatically",
      "code": "// Read environment variables\nconsole.log(\"PATH:\", process.env.PATH);\nconsole.log(\"HOME:\", process.env.HOME || process.env.USERPROFILE);\nconsole.log(\"OS:\", process.env.OS);\n\n// Set environment variables (affects current process and children)\nprocess.env.MY_CUSTOM_VAR = \"custom-value\";\nprocess.env.NODE_ENV = \"production\";\n\n// Child processes inherit current env\nvar spawn = require(\"child_process\").spawn;\nvar child = spawn(\"node\", [\"-e\", \"console.log(process.env.MY_CUSTOM_VAR)\"]);\nchild.stdout.on(\"data\", function(data) {\n  console.log(\"Child received:\", data.toString().trim());\n});\n\n// Delete environment variable\ndelete process.env.MY_CUSTOM_VAR;\nconsole.log(\"After delete:\", process.env.MY_CUSTOM_VAR); // undefined\n\n// List all environment variables (sorted)\nObject.keys(process.env).sort().forEach(function(key) {\n  // Avoid logging sensitive values in production\n  if (key.includes(\"SECRET\") || key.includes(\"PASSWORD\")) {\n    console.log(key + \"=***\");\n  } else {\n    console.log(key + \"=\" + process.env[key]);\n  }\n});",
      "description": "Environment variables can be read, set, and deleted at runtime. Changes affect the current process and child processes created after the change. Be careful not to log sensitive values. Use prefixes like SECRET to identify sensitive vars."
    },
    {
      "title": "Validation with Envalid Library",
      "useCase": "Use envalid for typed env var validation",
      "code": "// npm install envalid\nvar envalid = require(\"envalid\");\nvar { str, num, bool, url, email, json } = envalid;\n\nvar env = envalid.cleanEnv(process.env, {\n  NODE_ENV: str({ choices: [\"development\", \"production\", \"test\"] }),\n  PORT: num({ default: 3000, devDefault: 3000 }),\n  API_KEY: str({ desc: \"API key for external service\" }),\n  DEBUG: bool({ default: false }),\n  DB_URL: url({ desc: \"Database connection URL\" }),\n  ADMIN_EMAIL: email({ default: \"admin@example.com\" }),\n  REDIS_CONFIG: json({ desc: \"Redis config as JSON string\" })\n}, {\n  strict: true,  // Throw on unknown env vars\n  dotEnvPath: \".env\",  // Auto-load .env file\n});\n\n// env is a frozen object with typed values\nconsole.log(\"Port:\", env.PORT);  // number\nconsole.log(\"Debug:\", env.DEBUG);  // boolean\nconsole.log(\"Node env:\", env.NODE_ENV);  // string, validated\n\n// envalid provides:\n// - Type coercion (string → number/bool/url)\n// - Validation (choices, format)\n// - Defaults\n// - Clear error messages on failure\n// - .env auto-loading\n// - Strict mode catches typos",
      "description": "envalid provides typed environment variable validation with clear error messages. It supports str, num, bool, url, email, json types. Defaults, choices validation, and strict mode prevent misconfiguration. The returned object is frozen with validated values."
    },
    {
      "title": "Debugging with DEBUG Environment Variable",
      "useCase": "Use DEBUG namespace convention for selective logging",
      "code": "// Run: DEBUG=app:*,app:db* node app.js\n// Or use comma-separated: DEBUG=app:server,app:db node app.js\n\nvar debug = require(\"debug\");\n\nvar logServer = debug(\"app:server\");\nvar logDb = debug(\"app:db\");\nvar logAuth = debug(\"app:auth\");\n\nfunction startServer() {\n  logServer(\"Starting server on port %d\", 3000);\n  logServer(\"Server started in %s mode\", process.env.NODE_ENV);\n}\n\nfunction connectDatabase() {\n  logDb(\"Connecting to database at %s\", process.env.DB_HOST);\n  logDb(\"Connection pool size: %d\", 10);\n}\n\nfunction authenticateUser(user) {\n  logAuth(\"Authenticating user: %s\", user);\n}\n\nstartServer();\nconnectDatabase();\nauthenticateUser(\"alice\");\n\n// With DEBUG=app:server,app:db:\n// Starting server on port 3000\n// Server started in development mode\n// Connecting to database at localhost\n// Connection pool size: 10\n\n// With DEBUG=app:*:\n// All three namespaces are enabled\n\n// With DEBUG=app:*,-app:auth:\n// All app namespaces EXCEPT auth\n\n// The DEBUG env var controls the \"debug\" package:\n// - Namespaces with * wildcard\n// - Comma-separated namespaces\n// - Exclude with -namespace\n// - Colon-separated hierarchy (app:server:startup)",
      "description": "The DEBUG env var (used by the debug package) enables selective logging via namespaces. pattern: namespace:subnamespace. Supports wildcards (*), exclusions (-), and hierarchy. This is a widely used convention in the Node.js ecosystem for runtime-debuggable logging."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What type are all environment variable values in process.env?",
      "options": [
        "Number",
        "String",
        "Boolean",
        "Buffer"
      ],
      "answer": 1,
      "explanation": "All env var values are strings. Numbers and booleans must be explicitly parsed: parseInt(process.env.PORT, 10), process.env.DEBUG === \"true\"."
    },
    {
      "question": "What is the standard package for loading .env files?",
      "options": [
        "env-loader",
        "dotenv",
        "dotenv-expand",
        "config"
      ],
      "answer": 1,
      "explanation": "dotenv is the standard package. It loads .env file contents into process.env. Install: npm install dotenv. Use: require(\"dotenv\").config()."
    },
    {
      "question": "Which NODE_ENV value indicates production?",
      "options": [
        "\"prod\"",
        "\"production\"",
        "\"release\"",
        "\"live\""
      ],
      "answer": 1,
      "explanation": "The standard value is \"production\". Express and other frameworks check NODE_ENV === \"production\" to enable optimizations and disable debug output."
    },
    {
      "question": "How do you safely check a boolean environment variable?",
      "options": [
        "if (process.env.DEBUG)",
        "process.env.DEBUG === \"true\"",
        "Boolean(process.env.DEBUG)",
        "process.env.DEBUG == true"
      ],
      "answer": 1,
      "explanation": "env vars are strings. process.env.DEBUG === \"true\" is the correct check. Using truthy checks fails because \"false\" is truthy."
    },
    {
      "question": "What should you do with .env files in version control?",
      "options": [
        "Commit them with real values",
        "Add .env to .gitignore, commit .env.example",
        "Commit only .env.production",
        "Never use .env files"
      ],
      "answer": 1,
      "explanation": "Add .env to .gitignore to avoid leaking secrets. Commit .env.example with placeholder values to document required variables."
    },
    {
      "question": "How do you handle cross-platform env var setting in npm scripts?",
      "options": [
        "Use && on all platforms",
        "Use the cross-env package",
        "Use export command",
        "Set in the OS settings"
      ],
      "answer": 1,
      "explanation": "cross-env normalizes env var setting across platforms: \"cross-env NODE_ENV=production node app.js\". POSIX and Windows have different syntax for setting env vars."
    }
  ]
};
