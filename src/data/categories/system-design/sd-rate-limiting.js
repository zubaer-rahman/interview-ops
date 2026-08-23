export const sd_rate_limiting = {
  "id": "sd-rate-limiting",
  "title": "Rate Limiting",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Rate limiting controls request frequency from clients — prevents abuse, ensures fair usage, and protects backend services.",
    "Common algorithms: Token Bucket (supports bursts), Leaky Bucket (smooths traffic), Fixed Window (simple, boundary spikes), Sliding Window Log (precise), Sliding Window Counter (efficient + precise).",
    "Applied at: API Gateway (global), per-endpoint, per-user, per-IP. HTTP 429 Too Many Requests with Retry-After header.",
    "Distributed: Redis INCR + EXPIRE (fixed window), Redis Sorted Sets (sliding window), Lua script (token bucket atomicity). Best: Redis + Lua for atomic operations.",
    "Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After."
  ],
  "laymanDefinition": "Rate limiting is like a highway toll booth with limited capacity. 10 cars per minute can pass through (limit). If you arrive too fast, the gate stays down — \"429 — try again in 6 seconds\" (Retry-After). VIP lane (higher tier) allows 100 cars. If the toll computer goes down, gates open (fail open) to not block all traffic.",
  "deepDive": [
    {
      "heading": "Token Bucket Algorithm",
      "text": "Bucket capacity = burst limit. Refill rate = sustained rate. Each request consumes 1 token. Empty bucket = 429. Burst: unused tokens accumulate (up to capacity). Most common — used in Kong, AWS, GitHub. Parameters: capacity (max burst), refill rate (per second). Redis Lua for atomic implementation."
    },
    {
      "heading": "Fixed Window vs Sliding Window",
      "text": "Fixed Window: count per clock minute. Simple, memory-efficient (1 counter per client). Problem: edge bursts — at boundary, 2x traffic can pass in quick succession. Sliding Window: bounded by time window precision. Sliding Window Counter: sub-windows (1s granularity) — good balance."
    },
    {
      "heading": "Distributed Rate Limiting",
      "text": "Single server: in-memory counter (fastest, lost on restart). Multi-server: Redis needed for atomic shared counter. Redis INCR + EXPIRE for fixed window. Redis Sorted Sets for sliding window (ZREMRANGEBYSCORE + ZCARD). Lua scripting for token bucket. Consistent hashing to route same client to same server (optional)."
    },
    {
      "heading": "Rate Limiting Strategies",
      "text": "Hard: strict limit, 429 immediately. Soft: allow burst, warn. Elastic: bursts with delay (queue). Tiered: Free (10/min), Pro (100/min), Enterprise (10K/min). Adaptive: adjust limits based on system load. Concurrency limiting: max concurrent requests (not rate)."
    }
  ],
  "interviewAnswer": "Rate limiting is essential for any production API. Use Redis + Lua for distributed token bucket. Set appropriate limits per tier. Always return 429 with Retry-After. Design for fail-open (if rate limiter fails, allow traffic). Monitor rate limit usage to tune limits. Use sliding window for more precise limits.",
  "interviewQuestions": [
    {
      "question": "What is rate limiting?",
      "answer": "Controlling request frequency to prevent abuse and ensure fair usage."
    },
    {
      "question": "What is the Token Bucket algorithm?",
      "answer": "Bucket fills at fixed rate (capacity = burst). Each request consumes a token. Supports bursts."
    },
    {
      "question": "HTTP status for rate limiting?",
      "answer": "429 Too Many Requests with Retry-After header."
    },
    {
      "question": "Fixed vs Sliding Window?",
      "answer": "Fixed: simple, edge bursts. Sliding: precise, higher memory."
    },
    {
      "question": "What Redis commands for rate limiting?",
      "answer": "INCR + EXPIRE (fixed window). Sorted Sets ZREMRANGEBYSCORE + ZCARD (sliding)."
    },
    {
      "question": "What are rate limit headers?",
      "answer": "X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After."
    },
    {
      "question": "Fail open or closed?",
      "answer": "Fail open — if rate limiter fails, allow traffic rather than block everything."
    },
    {
      "question": "What is concurrency limiting?",
      "answer": "Limiting max simultaneous requests (vs rate = requests per time)."
    },
    {
      "question": "What is tiered rate limiting?",
      "answer": "Different limits per customer tier (free, pro, enterprise)."
    },
    {
      "question": "What is burst capacity?",
      "answer": "Maximum accumulated tokens — allows short traffic spikes above sustained rate."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Rate Limiting</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Request</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rate Limiter</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Token Bucket</text><line x1=\"200\" y1=\"77\" x2=\"210\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Has Token?</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Allow</text><rect x=\"160\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">No Token</text><text x=\"210\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">429 Retry-After</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redis</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Atomic Lua</text><rect x=\"160\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"210\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backend</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Protected</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rate Limiting</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Token Bucket/Sliding Window. Redis+Lua. 429+Retry-After. Fail open. Tiered limits.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Rate Limiting: Control request frequency. Token Bu</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">cket algorithm. Redis atomic. 429 with Retry-After</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "Token Bucket with Redis Lua",
      "useCase": "Atomic rate limiter.",
      "code": "const luaScript = `\nlocal key = KEYS[1]\nlocal capacity = tonumber(ARGV[1])\nlocal refillRate = tonumber(ARGV[2])  -- per second\nlocal now = redis.call(\"TIME\")[1]\nlocal bucket = redis.call(\"HMGET\", key, \"tokens\", \"lastRefill\")\nlocal tokens = tonumber(bucket[1]) or capacity\nlocal lastRefill = tonumber(bucket[2]) or now\nlocal elapsed = math.max(0, now - lastRefill)\ntokens = math.min(capacity, tokens + elapsed * refillRate)\nif tokens >= 1 then\n  redis.call(\"HSET\", key, \"tokens\", tokens - 1, \"lastRefill\", now)\n  redis.call(\"EXPIRE\", key, math.ceil(capacity / refillRate) + 1)\n  return {1, tokens - 1}\nelse\n  return {0, tokens}\nend`;\nasync function checkRateLimit(clientId) {\n  const result = await redis.eval(luaScript, 1, \"ratelimit:\" + clientId, 10, 2);\n  return { allowed: result[1] === 1, remaining: result[2] };\n}",
      "description": "Atomic token bucket with Redis Lua script for distributed rate limiting."
    },
    {
      "title": "Express Rate Limiting Middleware",
      "useCase": "Sliding window middleware.",
      "code": "const rateLimit = require(\"express-rate-limit\");\nconst RedisStore = require(\"rate-limit-redis\");\n// Per-endpoint rate limit\nconst apiLimiter = rateLimit({\n  windowMs: 60 * 1000, // 1 minute window\n  max: 100, // 100 requests per minute\n  standardHeaders: true,\n  legacyHeaders: false,\n  store: new RedisStore({\n    sendCommand: (...args) => redis.call(...args),\n  }),\n  handler: (req, res) => {\n    res.status(429).json({\n      error: \"Too many requests\",\n      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),\n    });\n  },\n});\napp.use(\"/api/\", apiLimiter);",
      "description": "Express rate limiting middleware with Redis store."
    },
    {
      "title": "Tiered Rate Limiting",
      "useCase": "Per-tier limits.",
      "code": "const TIER_LIMITS = {\n  free: { rps: 1, burst: 5 },\n  basic: { rps: 10, burst: 50 },\n  pro: { rps: 100, burst: 500 },\n  enterprise: { rps: 1000, burst: 5000 },\n};\nasync function tieredRateLimit(req, res, next) {\n  const apiKey = req.headers[\"x-api-key\"];\n  const client = await getClientByApiKey(apiKey);\n  const limits = TIER_LIMITS[client.tier] || TIER_LIMITS.free;\n  const result = await checkLimit(client.id, limits.rps, limits.burst);\n  res.set({\n    \"X-RateLimit-Limit\": limits.rps,\n    \"X-RateLimit-Remaining\": result.remaining,\n  });\n  if (!result.allowed) {\n    return res.status(429).json({ error: \"Rate limit exceeded\", tier: client.tier, retryAfter: result.retryAfter });\n  }\n  next();\n}",
      "description": "Tiered rate limiting with different limits per customer tier."
    },
    {
      "title": "Concurrency Limiting",
      "useCase": "Max concurrent requests.",
      "code": "class ConcurrencyLimiter {\n  constructor(maxConcurrent) {\n    this.max = maxConcurrent;\n    this.active = new Set();\n  }\n  async acquire(id) {\n    if (this.active.size >= this.max) {\n      throw new Error(\"Too many concurrent requests\");\n    }\n    this.active.add(id);\n  }\n  release(id) { this.active.delete(id); }\n  wrap(fn) {\n    return async (...args) => {\n      const id = Symbol();\n      await this.acquire(id);\n      try { return await fn(...args); }\n      finally { this.release(id); }\n    };\n  }\n}\nconst limiter = new ConcurrencyLimiter(50); // max 50 concurrent",
      "description": "Concurrency limiting — limits parallel requests, different from rate limiting."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Token Bucket supports?",
      "options": [
        "Rate smoothing",
        "Bursts",
        "Precision",
        "Simplicity"
      ],
      "answer": 1,
      "explanation": "Token bucket supports bursts with capacity."
    },
    {
      "question": "HTTP status for rate limit?",
      "options": [
        "400",
        "429",
        "503",
        "403"
      ],
      "answer": 1,
      "explanation": "429 Too Many Requests."
    },
    {
      "question": "Best distributed storage?",
      "options": [
        "PostgreSQL",
        "Redis",
        "Local memory",
        "Filesystem"
      ],
      "answer": 1,
      "explanation": "Redis with Lua for atomic distributed counting."
    },
    {
      "question": "What does Retry-After indicate?",
      "options": [
        "Request limit",
        "When to retry",
        "Error reason",
        "Server load"
      ],
      "answer": 1,
      "explanation": "Time to wait before retrying."
    },
    {
      "question": "Fail open means?",
      "options": [
        "Block traffic if limiter fails",
        "Allow traffic if limiter fails",
        "Log errors",
        "Retry later"
      ],
      "answer": 1,
      "explanation": "Allow traffic if rate limiter is unavailable."
    },
    {
      "question": "Tiered limits apply?",
      "options": [
        "Per endpoint",
        "Per customer tier",
        "Per server",
        "Per region"
      ],
      "answer": 1,
      "explanation": "Different limits per customer plan (free/pro/enterprise)."
    },
    {
      "question": "Rate Limiting — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "Rate Limiting — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "Rate Limiting — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "Rate Limiting — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
