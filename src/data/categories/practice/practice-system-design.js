export const practice_system_design = {
  "id": "practice-system-design",
  "title": "System Design Interview Problems",
  "difficulty": "advanced",
  "estimatedMinutes": 45,
  "tldr": [
    "System design interviews test your ability to architect large-scale systems handling millions of users.",
    "Use the 4-step framework: Requirements → High-Level Design → Deep Dive → Wrap-Up.",
    "Always estimate scale first: DAU, QPS, storage, bandwidth to guide your design decisions.",
    "Key components: Load Balancer, API Gateway, Application Servers, Cache (Redis), Database (SQL/NoSQL), CDN, Message Queue.",
    "Discuss trade-offs: consistency vs availability, SQL vs NoSQL, synchronous vs async, sharding vs replication."
  ],
  "laymanDefinition": "System design is like being asked to design a city's transportation system. You start with requirements (population, traffic patterns, budget), sketch the major highways and train lines (high-level architecture), then dive into details like traffic light timing at a specific intersection (deep dive), and finally discuss how the system handles rush hour (scale) or a bridge closure (failure). The interviewer wants to see that you can think at multiple levels of abstraction and make reasonable engineering trade-offs.",
  "deepDive": [
    {
      "heading": "Step 1: Requirements Gathering",
      "text": "Start by clarifying functional requirements: what features does the system need? (e.g., URL shortener: create short URL, redirect to original, analytics). Then non-functional: scale (100M DAU?), latency (p99 < 200ms?), availability (99.99%?), durability. Estimate QPS: DAU × actions per user / 86400 seconds. Peak = 2-3x average. Storage: per-item size × items × retention period. Bandwidth: QPS × response size. These estimates guide your architecture decisions — no need to shard below 10K QPS."
    },
    {
      "heading": "Step 2: High-Level Design",
      "text": "Draw the main components and data flow as boxes and arrows. Typical flow: Client → CDN (static) → Load Balancer → API Gateway → App Servers (stateless) → Cache → Database. For write-heavy systems: add Message Queue + Workers + Database. For read-heavy systems: add Cache layer + Read Replicas + CDN for static. Show how a request flows end-to-end. Start simple (3-5 components), then add detail."
    },
    {
      "heading": "Step 3: Deep Dive — Database",
      "text": "SQL for structured data, ACID transactions, complex queries (financial systems, relational data). NoSQL for flexible schema, horizontal scaling, simple queries (Cassandra for time-series, DynamoDB for key-value, MongoDB for documents). Remember: SQL can scale too — with read replicas, sharding, connection pooling. Common choice: SQL + Read Replicas for most systems; NoSQL + Denormalization for social feeds, real-time analytics."
    },
    {
      "heading": "Step 3: Deep Dive — Caching",
      "text": "Cache-Aside pattern: check cache → miss → read DB → populate cache. Set TTL for stale data. Eviction policies: LRU (most common), LFU, FIFO. Cache types: Redis (advanced data structures, persistence), Memcached (simple, multi-threaded). Cache levels: L1 (in-memory, app server), L2 (distributed, Redis cluster). Cache hit ratio target: > 80%. Watch out for: cache stampede (thundering herd), cache penetration (requesting non-existent keys)."
    },
    {
      "heading": "Step 3: Deep Dive — Scaling",
      "text": "Horizontal scaling: add more servers behind load balancer. Stateless apps scale easily. Database scaling: Vertical (bigger machine, has limits) → Read Replicas (scale reads) → Sharding (scale writes). Sharding strategies: hash-based (consistent hashing for minimal rebalancing), range-based (for range queries), directory-based (lookup table). Consistent hashing adds virtual nodes for better distribution. Rebalancing data during resharding is the hardest problem."
    },
    {
      "heading": "Step 4: Wrap-Up",
      "text": "Summarize the design in 2-3 sentences. Discuss improvements: what would you add with more time? (Monitoring, alerting, disaster recovery, multi-region deployment, rate limiting, circuit breakers). Mention trade-offs: why SQL over NoSQL here? Why cache at this layer? Why async for this operation? Every decision should have a clear rationale tied to the requirements gathered in Step 1."
    }
  ],
  "interviewAnswer": "Use the 4-step framework: 1) Requirements — functional + non-functional with scale estimates. 2) High-level design — draw components and data flow (Client → LB → App Servers → Cache → DB). 3) Deep dive — focus on 1-2 components (database choice, caching strategy, sharding approach, consistency model). 4) Wrap-up — summarize, list improvements, discuss trade-offs. Always estimate QPS, storage, and bandwidth first. Every decision must tie back to requirements. Communicate trade-offs explicitly: \"I choose SQL for ACID compliance despite the scaling complexity because financial data requires consistency.\"",
  "interviewQuestions": [
    {
      "question": "Design a URL shortener like bit.ly.",
      "answer": "Generate unique short keys (Base62 encode auto-increment ID or use KGS — Key Generation Service). Store in DynamoDB/Cassandra for scale. Redirect with 301 (permanent, cached) for existing URLs. Estimate: 100M DAU, 1 shortening/day per user → ~1160 QPS for shorten, 10 redirects/day → ~11600 QPS for redirect. Cache popular redirects in Redis. Analytics via Kafka + batch processing."
    },
    {
      "question": "Design a chat system like WhatsApp or Messenger.",
      "answer": "WebSocket for real-time messaging. Store messages in Cassandra (write-optimized, time-ordered). Fan-out on write for small groups (write message once to sender's timeline + each recipient's inbox). Fan-out on read for large groups (write once to group timeline, recipients pull on read). For 1:1 chats: direct inbox delivery. For groups: hybrid approach based on group size. Handle online presence via Redis pub/sub. Media: upload to S3, send CDN URL."
    },
    {
      "question": "Design Twitter feed / News Feed.",
      "answer": "Pre-generate (fan-out on write) timeline for active users: when user tweets, write to all followers' timelines in Redis sorted sets. For celebrities with millions of followers: fan-out on read — celebrity tweets go to a separate timeline, fetched on read and merged with pre-generated feed. Hybrid approach: pre-generate for users with < 10K followers, fan-out on read for larger accounts. Timeline: Redis sorted set by timestamp. Cached for fast retrieval. Trending topics: Spark streaming + MapReduce."
    },
    {
      "question": "Design a video streaming platform like YouTube.",
      "answer": "Upload flow: upload to S3 → async encoding pipeline (transcode to multiple resolutions: 360p, 720p, 1080p, 4K) → store in CDN. Streaming: adaptive bitrate (ABR) — client requests segments based on network conditions. CDN caches popular content at edge. Metadata in SQL (PostgreSQL with read replicas). Search: Elasticsearch. Recommendations: Spark ML on view history. Comments: Cassandra. Watch history: time-series DB."
    },
    {
      "question": "Design a ride-sharing service like Uber.",
      "answer": "Key flows: rider requests ride → match with nearby driver → track trip → payment. Use Redis GEO for real-time driver locations (GEOADD, GEORADIUS). Match algorithm: find nearest available driver within radius, publish to driver's WebSocket. Trip state machine: REQUESTED → ACCEPTED → ARRIVED → IN_PROGRESS → COMPLETED. Handle failures: no driver found (expand radius, retry), driver cancels (re-match). Payments: async via Stripe webhook. Surge pricing: dynamic based on supply/demand ratio."
    },
    {
      "question": "Design a rate limiter (e.g., for an API gateway).",
      "answer": "Token Bucket: tokens added at fixed rate, each request consumes a token. Refill bucket periodically. Sliding Window Log: maintain timestamp log per user, count requests in window. Sliding Window Counter: Redis sorted set with timestamps, ZREMRANGEBYSCORE to remove old entries, ZCARD to count. For distributed rate limiting: Redis cluster, Lua scripts for atomicity. Return 429 + Retry-After header on limit exceeded. Fail open (allow through if Redis is down) vs fail closed."
    },
    {
      "question": "Design a web crawler.",
      "answer": "BFS from seed URLs. Frontier (queue) manages URLs to crawl. Deduplication: Bloom Filter for visited URLs (tolerates false positives, memory efficient). Prioritization: crawl high-quality/popular pages first (PriorityQueue based on PageRank, freshness). Politeness: delay between requests to same domain (robots.txt compliance). Store raw HTML in S3, processed content in Elasticsearch for indexing. Distributed: multiple workers, shared frontier via Redis or Kafka."
    },
    {
      "question": "Design a distributed key-value store (like DynamoDB).",
      "answer": "Partitioning: consistent hashing with virtual nodes. Replication: each key replicated to N nodes (e.g., N=3). Write: quorum consensus — W replicas must acknowledge. Read: R replicas must respond. Tune (R,W,N) for consistency vs availability: (R+W > N) = strong consistency; (R+W <= N) = eventual consistency. Hinted handoff for temporary failures. Merkle trees for anti-entropy (detect and resolve conflicts). Vector clocks for causal ordering."
    },
    {
      "question": "Design a notification system.",
      "answer": "Types: push (mobile), email, SMS, in-app. Architecture: Notification Service → Template Engine → Provider Router → Providers (FCM/APNs for push, SendGrid for email, Twilio for SMS). Rate limiting per user and per channel. Deduplication: idempotency keys. Priority queue: critical notifications bypass rate limit. User preferences: which channels and which notification types. Analytics: delivery rate, open rate, click rate."
    },
    {
      "question": "Design a real-time leaderboard (e.g., for a game).",
      "answer": "Redis Sorted Set is perfect: ZADD to update scores, ZREVRANGE to get top N, ZREVRANK to get user's rank. For millions of users: shard sorted sets by score range. Cache top 100 in memory. For tie-breaking: use score + timestamp (encode as float: score.timestamp). Alternative: skip list data structure. For live updates: WebSocket sends leaderboard deltas. Periodic full refresh for consistency."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 650 350\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:650px;\"><defs><marker id=\"sdArr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0,8 3,0 6\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"630\" height=\"330\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"325\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">System Design 4-Step Framework</text><rect x=\"30\" y=\"55\" width=\"130\" height=\"40\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"95\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">1. Requirements</text><line x1=\"160\" y1=\"75\" x2=\"190\" y2=\"75\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#sdArr)\"/><rect x=\"195\" y=\"55\" width=\"130\" height=\"40\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"260\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2. High-Level</text><line x1=\"325\" y1=\"75\" x2=\"355\" y2=\"75\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#sdArr)\"/><rect x=\"360\" y=\"55\" width=\"130\" height=\"40\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"425\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3. Deep Dive</text><line x1=\"490\" y1=\"75\" x2=\"520\" y2=\"75\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#sdArr)\"/><rect x=\"525\" y=\"55\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"575\" y=\"80\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4. Wrap</text><line x1=\"575\" y1=\"95\" x2=\"575\" y2=\"125\" stroke=\"#6c9fff\" stroke-width=\"2\" marker-end=\"url(#sdArr)\"/><rect x=\"420\" y=\"125\" width=\"200\" height=\"50\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"520\" y=\"150\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Common Architecture</text><text x=\"520\" y=\"165\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Client → CDN → LB → API GW → App → Cache → DB</text><rect x=\"30\" y=\"110\" width=\"200\" height=\"80\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"130\" y=\"132\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Estimate Scale First</text><text x=\"130\" y=\"148\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">DAU → QPS → Peak QPS</text><text x=\"130\" y=\"162\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Storage → Bandwidth</text><text x=\"130\" y=\"176\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">Cache Hit Ratio Target</text><rect x=\"30\" y=\"210\" width=\"590\" height=\"60\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#f87171\" stroke-width=\"1.5\"/><text x=\"325\" y=\"233\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Key Decisions &amp; Trade-offs</text><text x=\"325\" y=\"252\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">SQL vs NoSQL | Consistency vs Availability | Synchronous vs Async | Sharding vs Replication | Cache vs DB</text><rect x=\"120\" y=\"280\" width=\"400\" height=\"40\" rx=\"6\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"320\" y=\"306\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Always tie decisions to requirements from Step 1</text></svg>",
  "codeExamples": [
    {
      "title": "Consistent Hashing Implementation",
      "useCase": "Virtual nodes for even distribution",
      "code": "class ConsistentHash {\n  constructor(vnodes = 150) {\n    this.vnodes = vnodes;\n    this.ring = new Map(); // hash → node\n    this.sortedHashes = [];\n    this.nodes = new Set();\n  }\n  _hash(key) {\n    let h = 0;\n    for (let i = 0; i < key.length; i++) {\n      h = ((h << 5) - h) + key.charCodeAt(i);\n      h |= 0;\n    }\n    return h;\n  }\n  addNode(node) {\n    this.nodes.add(node);\n    for (let i = 0; i < this.vnodes; i++) {\n      const hash = this._hash(`${node}:vnode:${i}`);\n      if (!this.ring.has(hash)) {\n        this.ring.set(hash, node);\n        this.sortedHashes.push(hash);\n      }\n    }\n    this.sortedHashes.sort((a, b) => a - b);\n  }\n  getNode(key) {\n    if (this.sortedHashes.length === 0) return null;\n    const hash = this._hash(key);\n    let idx = this.lowerBound(hash);\n    if (idx === this.sortedHashes.length) idx = 0;\n    return this.ring.get(this.sortedHashes[idx]);\n  }\n  lowerBound(target) {\n    let lo = 0, hi = this.sortedHashes.length;\n    while (lo < hi) {\n      const mid = Math.floor((lo + hi) / 2);\n      if (this.sortedHashes[mid] < target) lo = mid + 1;\n      else hi = mid;\n    }\n    return lo;\n  }\n  removeNode(node) {\n    this.nodes.delete(node);\n    for (let i = 0; i < this.vnodes; i++) {\n      const hash = this._hash(`${node}:vnode:${i}`);\n      if (this.ring.has(hash)) {\n        this.ring.delete(hash);\n        const idx = this.sortedHashes.indexOf(hash);\n        if (idx > -1) this.sortedHashes.splice(idx, 1);\n      }\n    }\n  }\n}",
      "description": "Consistent hashing with virtual nodes ensures only 1/N keys move when a node joins or leaves."
    },
    {
      "title": "Redis Rate Limiter (Sliding Window)",
      "useCase": "Atomic Lua script for distributed rate limiting",
      "code": "const RATE_LIMIT_SCRIPT = `\nlocal key = KEYS[1]\nlocal limit = tonumber(ARGV[1])\nlocal window = tonumber(ARGV[2]) -- in seconds\nlocal now = tonumber(ARGV[3])\nlocal pre_win = now - window\n\n-- Remove expired entries\nredis.call(\"ZREMRANGEBYSCORE\", key, 0, pre_win)\n\n-- Count current window entries\nlocal count = redis.call(\"ZCARD\", key)\n\nif count < limit then\n  redis.call(\"ZADD\", key, now, now .. \":\" .. math.random())\n  redis.call(\"EXPIRE\", key, window)\n  return {1, limit - count - 1} -- allowed, remaining\nelse\n  return {0, 0} -- blocked\nend\n`;\n\nasync function checkRateLimit(userId, limit = 100, windowSec = 60) {\n  const now = Date.now() / 1000;\n  const key = `ratelimit:${userId}`;\n  const result = await redis.eval(RATE_LIMIT_SCRIPT, 1, key, limit, windowSec, now);\n  return { allowed: result[1] === 1, remaining: result[1] === 1 ? result[2] : 0 };\n}",
      "description": "Sliding window rate limiter using Redis sorted set. Atomic Lua script ensures race-condition-free counting."
    },
    {
      "title": "URL Shortener Key Generation",
      "useCase": "Base62 encoding with KGS",
      "code": "const BASE62 = \"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\";\n\nfunction base62Encode(num) {\n  if (num === 0) return BASE62[0];\n  let result = \"\";\n  while (num > 0) {\n    result = BASE62[num % 62] + result;\n    num = Math.floor(num / 62);\n  }\n  return result;\n}\n\n// KGS: pre-generate keys to avoid DB contention on ID generation\nclass KGS {\n  constructor() {\n    this.counter = Date.now() * 1000; // timestamp-based start\n    this.batch = [];\n    this.batchSize = 10000;\n  }\n  getNextKey() {\n    if (this.batch.length === 0) {\n      this.refillBatch();\n    }\n    return this.batch.pop();\n  }\n  refillBatch() {\n    for (let i = 0; i < this.batchSize; i++) {\n      this.batch.push(base62Encode(this.counter++));\n    }\n  }\n}\n\n// 7 chars of Base62 = 62^7 ≈ 3.5 trillion unique keys\n// Performance: nanoseconds per encoding, batch of 10K keys uses ~100KB memory",
      "description": "Base62 encoding generates short unique keys from numeric IDs. KGS pre-generates batches to avoid DB contention. 7 characters suffice for trillions of URLs."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the first step in a system design interview?",
      "options": [
        "Draw the database schema",
        "Estimate scale (DAU, QPS, storage)",
        "Choose the tech stack",
        "Discuss trade-offs"
      ],
      "answer": 1,
      "explanation": "Always start with requirements and scale estimates to guide all subsequent decisions."
    },
    {
      "question": "Which caching pattern checks the cache first, falls back to DB, then populates the cache?",
      "options": [
        "Write-Through",
        "Cache-Aside",
        "Write-Behind",
        "Read-Through"
      ],
      "answer": 1,
      "explanation": "Cache-Aside: check cache → miss → read DB → populate cache. Most common pattern."
    },
    {
      "question": "For a chat system with 1:1 messaging, which storage is best?",
      "options": [
        "MySQL",
        "MongoDB",
        "Cassandra (write-optimized, time-ordered)",
        "PostgreSQL"
      ],
      "answer": 2,
      "explanation": "Cassandra excels at write-heavy, time-ordered data with horizontal scaling."
    },
    {
      "question": "What does consistent hashing solve?",
      "options": [
        "Faster queries",
        "Minimal key redistribution when nodes change",
        "Data compression",
        "Authentication"
      ],
      "answer": 1,
      "explanation": "Consistent hashing ensures only 1/N of keys move when a node is added or removed."
    },
    {
      "question": "What is the purpose of a CDN?",
      "options": [
        "Store database backups",
        "Cache static content at edge servers close to users",
        "Run application code",
        "Manage user authentication"
      ],
      "answer": 1,
      "explanation": "CDNs cache static assets (images, CSS, JS, video) at geographically distributed edge servers."
    },
    {
      "question": "In the CAP theorem, what does the P stand for?",
      "options": [
        "Performance",
        "Partition Tolerance",
        "Persistence",
        "Parallelism"
      ],
      "answer": 1,
      "explanation": "Partition Tolerance means the system continues to function despite network partitions between nodes."
    }
  ]
};
