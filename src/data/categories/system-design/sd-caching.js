export const sd_caching = {
  "id": "sd-caching",
  "title": "Caching Strategies",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Caching stores frequently accessed data in a fast, temporary storage layer to reduce latency and database load.",
    "Key strategies: Cache-Aside (app manages cache — check cache first, miss → DB → populate cache), Read-Through (cache lib auto-populates), Write-Through (write to cache + DB synchronously), Write-Behind (write to cache, async write to DB).",
    "Eviction policies: LRU (least recently used), LFU (least frequently used), FIFO, TTL (time-to-live), Random. TTL is most common — prevents stale data.",
    "Cache levels: L1 (in-memory, app process — fastest, limited), L2 (distributed, Redis/Memcached — shared across instances), CDN (edge cache for static/geo-distributed)."
  ],
  "laymanDefinition": "Caching is like your kitchen pantry. You keep frequently used ingredients (hot data) in the pantry (cache) instead of going to the supermarket (database) every time you cook. When the pantry runs out (cache miss), you go to the store and restock. Some items expire (TTL) — stale milk is bad. A well-stocked pantry (high hit rate) makes cooking (serving requests) much faster.",
  "deepDive": [
    {
      "heading": "Cache-Aside (Lazy Loading)",
      "text": "Most common pattern. App checks cache first. Cache hit → return. Cache miss → query DB, store in cache, return. Benefits: only requested data is cached, resilient to cache failure. Drawback: cache miss penalty (3 trips). Use with TTL. Implement with redis.get() → if null, db.query() → redis.set()."
    },
    {
      "heading": "Write-Through vs Write-Behind",
      "text": "Write-Through: write to cache and DB in same transaction. Ensures cache-DB consistency. Higher write latency. Write-Behind: write to cache immediately, DB asynchronously (queue + batch). Faster writes. Risk: data loss if cache fails before DB write. Use Write-Through for critical data, Write-Behind for high-volume."
    },
    {
      "heading": "Cache Invalidation",
      "text": "The hardest problem in computer science. TTL: simplest — data expires after N seconds. Event-driven: invalidate cache when data changes (publish event → cache delete). Version-based: cache key includes version number. Stale-while-revalidate: serve stale data while refreshing in background."
    },
    {
      "heading": "Redis Cache Patterns",
      "text": "distributed locking: SETNX for critical sections. Rate limiting: INCR + EXPIRE. Session store: HSET/HGET user sessions. Pub/Sub for cache invalidation events. Sorted sets for leaderboards. HyperLogLog for unique counts (UV). Streams for message queuing. Bloom filter for cache penetration prevention."
    }
  ],
  "interviewAnswer": "Use cache-aside as default pattern. Set reasonable TTLs. Use Redis for distributed caching. Monitor hit rate — cache is only useful if hit rate > 80%. Cache at multiple levels (in-process + Redis + CDN). Invalidation is hard — prefer TTL + short cache durations. Never cache sensitive data (PII, tokens). Preload cache on deployment (cache warming).",
  "interviewQuestions": [
    {
      "question": "What is caching?",
      "answer": "Storing frequently accessed data in a fast temporary layer to reduce latency and database load."
    },
    {
      "question": "What is cache-aside?",
      "answer": "App checks cache first. On miss: query DB, store in cache, return. Most common pattern."
    },
    {
      "question": "Write-Through vs Write-Behind?",
      "answer": "WT: write to cache + DB synchronously (consistent, slower writes). WB: cache first, DB async (fast writes, risk of loss)."
    },
    {
      "question": "What is TTL?",
      "answer": "Time-to-live — how long data stays in cache before automatic eviction."
    },
    {
      "question": "What is cache invalidation?",
      "answer": "Removing or updating stale cache data. Hardest problem in computer science."
    },
    {
      "question": "What is cache hit ratio?",
      "answer": "Percentage of requests served from cache. Target: >80%."
    },
    {
      "question": "What keys for eviction?",
      "answer": "LRU, LFU, FIFO, TTL, Random. LRU is most common."
    },
    {
      "question": "What is cache stampede?",
      "answer": "Many requests simultaneously miss cache and hit DB. Prevent with mutex, early recalculation."
    },
    {
      "question": "What is Redis?",
      "answer": "In-memory data structure store — primary cache for distributed systems."
    },
    {
      "question": "What to avoid caching?",
      "answer": "PII, passwords, tokens, real-time data (stocks), rapidly changing data."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Caching Strategies</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Request</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache Check</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Key exists?</text><line x1=\"200\" y1=\"77\" x2=\"210\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache HIT</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return cached</text><rect x=\"160\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cache MISS</text><text x=\"210\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query DB</text><line x1=\"160\" y1=\"117\" x2=\"160\" y2=\"123\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"210\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Database</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Storage</text><line x1=\"210\" y1=\"157\" x2=\"210\" y2=\"163\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"160\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"210\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Populate</text><text x=\"210\" y=\"186\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cache + Return</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Caching</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Cache-Aside: check → miss → DB → populate. TTL, LRU. Redis. Target >80% hit rate.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Caching: Store hot data in fast layer. Cache-Aside</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> pattern. TTL, LRU, Redis. Target >80% hit rate.</text></svg>",
  "codeExamples": [
    {
      "title": "Cache-Aside with Redis",
      "useCase": "Standard caching pattern.",
      "code": "async function getUser(id) {\n  const cacheKey = \"user:\" + id;\n  // Check cache\n  const cached = await redis.get(cacheKey);\n  if (cached) return JSON.parse(cached); // HIT\n  // Cache MISS — query database\n  const user = await db.query(\"SELECT * FROM users WHERE id=$1\", [id]);\n  if (user) {\n    // Store in cache with TTL\n    await redis.setex(cacheKey, 3600, JSON.stringify(user));\n  }\n  return user;\n}",
      "description": "Cache-Aside pattern: check Redis first, miss → query DB → populate cache."
    },
    {
      "title": "Write-Through Cache",
      "useCase": "Synchronous write to cache + DB.",
      "code": "async function updateUser(id, data) {\n  const cacheKey = \"user:\" + id;\n  // Update database\n  const user = await db.query(\n    \"UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *\",\n    [data.name, data.email, id]\n  );\n  // Update cache synchronously\n  await redis.setex(cacheKey, 3600, JSON.stringify(user));\n  return user;\n}\n// Write-Behind (async DB write):\nasync function updateUserFast(id, data) {\n  const cacheKey = \"user:\" + id;\n  // Update cache immediately\n  await redis.setex(cacheKey, 3600, JSON.stringify(data));\n  // Queue DB write for async processing\n  await queue.send(\"user_update\", { id, data, timestamp: Date.now() });\n}",
      "description": "Write-Through (sync) vs Write-Behind (async queue)."
    },
    {
      "title": "Cache Stampede Prevention",
      "useCase": "Mutex lock for cache rebuild.",
      "code": "async function getExpensiveData(key, ttl, fetchFn) {\n  const cached = await redis.get(key);\n  if (cached) return JSON.parse(cached);\n  // Mutex: only one process rebuilds cache\n  const lockKey = \"lock:\" + key;\n  const lock = await redis.setnx(lockKey, \"1\", \"EX\", 10);\n  if (lock) {\n    try {\n      const data = await fetchFn();\n      await redis.setex(key, ttl, JSON.stringify(data));\n      return data;\n    } finally { await redis.del(lockKey); }\n  } else {\n    // Wait and retry\n    await new Promise(r => setTimeout(r, 100));\n    return getExpensiveData(key, ttl, fetchFn);\n  }\n}",
      "description": "Mutex-based cache stampede prevention."
    },
    {
      "title": "Multi-Level Caching",
      "useCase": "L1 + L2 cache.",
      "code": "class MultiLevelCache {\n  constructor(ttl) {\n    this.l1 = new Map(); // in-process (fast)\n    this.ttl = ttl || 60;\n  }\n  async get(key) {\n    // Level 1: in-process Map\n    const l1Hit = this.l1.get(key);\n    if (l1Hit && Date.now() - l1Hit.ts < this.ttl * 1000) return l1Hit.data;\n    // Level 2: Redis (distributed)\n    const l2Hit = await redis.get(key);\n    if (l2Hit) {\n      const data = JSON.parse(l2Hit);\n      this.l1.set(key, { data, ts: Date.now() }); // populate L1\n      return data;\n    }\n    return null; // miss\n  }\n  async set(key, data) {\n    this.l1.set(key, { data, ts: Date.now() });\n    await redis.setex(key, this.ttl, JSON.stringify(data));\n  }\n}",
      "description": "Multi-level cache: L1 (in-process) + L2 (distributed Redis)."
    },
    {
      "title": "Cache Invalidation via Events",
      "useCase": "Event-driven cache cleanup.",
      "code": "// When data changes, publish event\nasync function updateProduct(id, data) {\n  await db.query(\"UPDATE products SET ... WHERE id=$1\", [id]);\n  // Invalidate all related cache keys\n  await redis.del(\"product:\" + id);\n  await redis.del(\"products:list\");\n  await redis.publish(\"cache:invalidate\", JSON.stringify({ type: \"product\", id }));\n}\n// Subscribe to invalidation events (all instances)\nredis.subscribe(\"cache:invalidate\", (msg) => {\n  const { type, id } = JSON.parse(msg);\n  cache.l1.delete(type + \":\" + id); // clear local cache too\n});",
      "description": "Cache invalidation via Redis pub/sub — all instances notified."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Cache-Aside: what happens on miss?",
      "options": [
        "Return error",
        "Query DB, populate cache",
        "Query cache again",
        "Use default value"
      ],
      "answer": 1,
      "explanation": "On cache miss: query DB, populate cache, return."
    },
    {
      "question": "TTL stands for?",
      "options": [
        "Total Time Live",
        "Time-To-Live",
        "Transfer Time Limit",
        "Token Timeout"
      ],
      "answer": 1,
      "explanation": "Time-To-Live — automatic expiration."
    },
    {
      "question": "Write-Through ensures?",
      "options": [
        "Fast writes",
        "Cache-DB consistency",
        "Async writes",
        "No caching"
      ],
      "answer": 1,
      "explanation": "Write to cache and DB together for consistency."
    },
    {
      "question": "Good cache hit ratio target?",
      "options": [
        ">50%",
        ">80%",
        ">99%",
        ">30%"
      ],
      "answer": 1,
      "explanation": "Target >80% hit rate for effective caching."
    },
    {
      "question": "What is cache stampede?",
      "options": [
        "Cache too fast",
        "Multiple misses hit DB simultaneously",
        "Cache too large",
        "Wrong eviction policy"
      ],
      "answer": 1,
      "explanation": "Simultaneous cache misses overwhelming DB."
    },
    {
      "question": "Which is fastest cache level?",
      "options": [
        "Redis",
        "In-process Map",
        "CDN",
        "Database"
      ],
      "answer": 1,
      "explanation": "In-process (L1) is fastest — no network call."
    },
    {
      "question": "Caching Strategies — What reduces errors most?",
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
      "question": "Caching Strategies — What improves speed?",
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
      "question": "Caching Strategies — What is key for monitoring?",
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
      "question": "Caching Strategies — What ensures quality?",
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
