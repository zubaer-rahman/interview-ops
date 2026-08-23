export const ag_rate_limiting = {
  "id": "ag-rate-limiting",
  "title": "Rate Limiting",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Rate limiting controls how many requests a client can make within a time window. Prevents abuse, ensures fair usage, protects backends.",
    "Common algorithms: Token Bucket (bursts), Leaky Bucket (smoothes), Fixed Window (simple, edge bursts), Sliding Window Log (precise), Sliding Window Counter (efficient+precise).",
    "Applied per client (IP, API key, user ID): global, per-endpoint, or per-user tier. HTTP: 429 Too Many Requests with Retry-After.",
    "Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset."
  ],
  "laymanDefinition": "Rate limiting is like a club with capacity limit. The bouncer counts: \"10 per minute\". Enter too fast: \"Wait 6 seconds\" (Retry-After). VIP members get faster entry (higher limits). Token Bucket system: tokens added every second, spend one to enter.",
  "deepDive": [
    {
      "heading": "Token Bucket Algorithm",
      "text": "Bucket holds N tokens, filled at fixed rate (e.g., 10/sec). Each request consumes one token. Empty bucket = 429. Supports bursts: unused tokens accumulate up to capacity. Most popular — used by Kong, AWS, Stripe, GitHub. Parameters: capacity (burst) + refill rate."
    },
    {
      "heading": "Fixed vs Sliding Window",
      "text": "Fixed Window: count in wall-clock intervals. Simple but edge bursts at boundaries. Sliding Window Log: track timestamps. Precise but memory-intensive. Sliding Window Counter: sub-windows. Good balance of precision and memory."
    },
    {
      "heading": "Distributed Rate Limiting",
      "text": "Single server: in-memory (fast, lost on restart). Redis: atomic INCR+EXPIRE for distributed counting. Lua scripting for atomic token bucket. Consistent hashing: route same client to same server. Redis: ~10-50us per check."
    },
    {
      "heading": "Rate Limiting Strategies",
      "text": "Hard: strict limit, 429 immediately. Soft: allow bursts. Elastic: bursts with delay (queue). Tiered: Free (10 rpm), Pro (100 rpm), Enterprise (10k rpm). Concurrency limiting: max simultaneous requests."
    }
  ],
  "interviewAnswer": "Rate limiting is essential for API production. Use Redis-based sliding window for distributed systems. Set informative headers. Return 429 with Retry-After. Choose algorithm: Token Bucket for bursty traffic, Sliding Window for precise limits. Always fail open if limiter fails.",
  "interviewQuestions": [
    {
      "question": "What is rate limiting?",
      "answer": "Controlling requests per time window to prevent abuse and ensure fair usage."
    },
    {
      "question": "What HTTP status for rate limiting?",
      "answer": "429 Too Many Requests with Retry-After header."
    },
    {
      "question": "Common algorithms?",
      "answer": "Token Bucket, Leaky Bucket, Fixed Window, Sliding Window Log, Sliding Window Counter."
    },
    {
      "question": "What is Token Bucket?",
      "answer": "Bucket holds N tokens, filled at fixed rate. Each request consumes a token. Supports bursts."
    },
    {
      "question": "Fixed vs Sliding Window?",
      "answer": "Fixed: simple but edge bursts. Sliding: more precise at boundaries."
    },
    {
      "question": "Best distributed storage?",
      "answer": "Redis with atomic INCR/EXPIRE and Lua scripts."
    },
    {
      "question": "Rate limit headers?",
      "answer": "X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After."
    },
    {
      "question": "Concurrency vs rate limiting?",
      "answer": "Rate: requests per time. Concurrency: max simultaneous requests."
    },
    {
      "question": "What is a usage quota?",
      "answer": "Cumulative limit over longer period (e.g., 10k/month)."
    },
    {
      "question": "Fail open or closed?",
      "answer": "Fail open if the rate limiter is down."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Rate Limiting</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sends request</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rate Limiter</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check limit</text><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Allowed</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Process</text><rect x=\"160\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Denied</text><text x=\"210\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">429 Too Many</text><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Token Bucket</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Refill+capacity</text><rect x=\"10\" y=\"140\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Redis</text><text x=\"60\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributed</text><rect x=\"160\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"210\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Headers</text><text x=\"210\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Limit,Remaining,Re</text><text x=\"210\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">set</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rate Limiting</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Token Bucket/Sliding Window. Redis</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">-based. 429+Retry-After.</text></svg>",
  "codeExamples": "<text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Rate Limiting: Control request rates. Token Bucket</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">/Sliding Window. 429 with Retry-After.</text>",
  "mcqQuestions": [
    {
      "title": "Token Bucket (Node.js+Redis)",
      "useCase": "Distributed token bucket.",
      "code": "class TokenBucket{\n  constructor(redis,key,capacity,refillRate){\n    this.redis=redis;this.key=key;this.capacity=capacity;this.refillRate=refillRate;\n  }\n  async tryConsume(count){\n    const script=`local k=KEYS[1] local cap=tonumber(ARGV[1])\n      local rate=tonumber(ARGV[2]) local now=redis.call(\"TIME\")[1] local cost=tonumber(ARGV[3])\n      local b=redis.call(\"HMGET\",k,\"tokens\",\"lastRefill\")\n      local t=tonumber(b[1])or cap local lr=tonumber(b[2])or now\n      local elapsed=math.max(0,now-lr)\n      t=math.min(cap,t+elapsed*rate)\n      if t>=cost then\n        redis.call(\"HSET\",k,\"tokens\",t-cost,\"lastRefill\",now)\n        redis.call(\"EXPIRE\",k,math.ceil(cap/rate)+1)\n        return{1,t-cost}\n      else return{0,t} end`;\n    const r=await this.redis.eval(script,1,this.key,this.capacity,this.refillRate,count);\n    return{allowed:r[1],remaining:r[2]};\n  }\n}",
      "description": "Distributed Token Bucket with Redis Lua atomicity."
    },
    {
      "title": "Rate Limiting Middleware (Express)",
      "useCase": "Sliding window with Redis.",
      "code": "const rateLimit=require(\"express-rate-limit\");\nconst RedisStore=require(\"rate-limit-redis\");\nconst limiter=rateLimit({\n  windowMs:60*1000,max:100,\n  standardHeaders:true,\n  store:new RedisStore({sendCommand:(...a)=>redis.sendCommand(a)}),\n  handler:(req,res)=>{res.status(429).json({error:\"Too many requests\"})}\n});\napp.use(\"/api/\",limiter);",
      "description": "Express rate limiting with Redis store."
    },
    {
      "title": "In-Memory Token Bucket",
      "useCase": "Single-server implementation.",
      "code": "class MemoryTokenBucket{\n  constructor(capacity,refillRate){\n    this.capacity=capacity;this.refillRate=refillRate;this.buckets=new Map();\n  }\n  consume(key,count){\n    const now=Date.now();let b=this.buckets.get(key);\n    if(!b){b={tokens:this.capacity,lastRefill:now};this.buckets.set(key,b);}\n    const elapsed=(now-b.lastRefill)/1000;\n    b.tokens=Math.min(this.capacity,b.tokens+elapsed*this.refillRate);b.lastRefill=now;\n    if(b.tokens>=count){b.tokens-=count;return true;}\n    return false;\n  }\n}",
      "description": "In-memory token bucket for single-server."
    },
    {
      "title": "Rate Limit Headers and Response",
      "useCase": "Standard headers.",
      "code": "class RateLimiterResponse{\n  static addHeaders(res,limit,remaining,reset){\n    res.setHeader(\"X-RateLimit-Limit\",limit);\n    res.setHeader(\"X-RateLimit-Remaining\",remaining);\n    res.setHeader(\"X-RateLimit-Reset\",Math.ceil(reset/1000));\n  }\n  static onLimitExceeded(res,retryAfterMs){\n    res.setHeader(\"Retry-After\",Math.ceil(retryAfterMs/1000));\n    res.status(429).json({error:\"Rate limit exceeded\"});\n  }\n}\nasync function rateLimitMW(req,res,next){\n  const key=req.ip||req.headers[\"x-api-key\"];\n  const result=await limiter.consume(key);\n  RateLimiterResponse.addHeaders(res,100,result.remaining,result.reset);\n  if(!result.allowed) return RateLimiterResponse.onLimitExceeded(res,result.retryAfter);\n  next();\n}",
      "description": "Standard rate limit headers and 429 response."
    },
    {
      "title": "Tiered Rate Limiting",
      "useCase": "Per-tier limits.",
      "code": "const TIER_LIMITS={\n  free:{windowMs:60000,max:10},\n  basic:{windowMs:60000,max:100},\n  pro:{windowMs:60000,max:1000},\n  enterprise:{windowMs:60000,max:10000},\n};\nconst tieredLimiter=(req,res,next)=>{\n  const tier=req.user?.tier||\"free\";\n  const config=TIER_LIMITS[tier]||TIER_LIMITS.free;\n  const current=cache.get(key)||0;\n  if(current>=config.max) return res.status(429).json({error:\"Rate limit exceeded\",tier});\n  cache.set(key,current+1,config.windowMs/1000);next();\n};",
      "description": "Tiered rate limiting for free/basic/pro/enterprise."
    },
    {
      "question": "Rate Limiting — What helps team collaboration?",
      "options": [
        "Shared workflows and visibility",
        "Isolated work",
        "No documentation",
        "Siloed tools"
      ],
      "answer": 0,
      "explanation": "Shared workflows and visibility enable better collaboration."
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
