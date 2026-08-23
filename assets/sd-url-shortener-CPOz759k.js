const e={id:"sd-url-shortener",title:"Design URL Shortener",difficulty:"advanced",estimatedMinutes:20,tldr:["Design a service like TinyURL or Bitly that converts long URLs to short aliases and redirects users when they visit the short URL.","Core operations: createShortUrl(longUrl) → short code, getLongUrl(shortCode) → redirect (301/302). Key metrics: 100M DAU, 10M new URLs/day, 1B redirects/day.","Encoding: Base62 (a-z, A-Z, 0-9 = 62 chars). 7 chars = 62^7 = 3.5 trillion combinations. MD5 hash + truncate, or distributed counter (Snowflake → Base62 encode).","Redirect: 301 (permanent — cached by browser, cheaper) vs 302 (temporary — not cached, allows analytics). Use 301 for most, 302 for analytics tracking.","Architecture: Write: App → Counter Service (generate ID) → Base62 encode → Store in DB + Cache. Read: Request → CDN (short URL not cacheable) → App → Cache → DB. If not found → 404."],laymanDefinition:"A URL shortener is like a phone directory. The short URL (short name) maps to the long URL (phone number). When you dial the short name, the operator (service) looks up the full number and connects you (redirect). The directory is much smaller than the full address book. Popular names (URLs) are memorized (cached).",deepDive:[{heading:"ID Generation for Short URLs",text:"Base62 encoding: 7 chars = 3.5T combinations. Approaches: 1) Distributed counter (Snowflake) → Base62 — sequential, sortable. 2) MD5(longUrl)[:7] — fixed length, collision handling needed (use hash + salt). 3) Pre-generated random keys — KGS (Key Generation Service) pre-generates and gives keys — fast. Prefer KGS or Snowflake for production."},{heading:"Redirect: 301 vs 302",text:"301 Moved Permanently: browser caches redirect — subsequent visits skip server. Cheaper (no server hit). 302 Found: browser doesn\\'t cache — every visit hits server. Use 301 for standard redirects. Use 302 for analytics tracking (count clicks), then return 301 after logging."},{heading:"Caching Strategy",text:"Hot URLs: cache recently created or frequently accessed URLs in Redis (LRU, 24h TTL). Write-through cache: cache on creation. Bloom filter: check before DB query to prevent cache penetration. CDN: not effective for short URL redirects (different per user). Custom analytics: async log to Kafka, batch write to analytics DB."},{heading:"Scale and Performance",text:"10M new URLs/day = 115 writes/sec. 1B redirects/day = 11,500 reads/sec (100:1 read/write). Storage: 10M × 500 bytes = 5GB/day → 1.8TB/year. Cache: Redis cluster, 80% hit rate = 9,200 read/sec from cache, 2,300 from DB. DB: Cassandra/DynamoDB for write scale. Cache TTL = 24h for hot URLs."}],interviewAnswer:"Key design decisions: ID generation (KGS or Snowflake + Base62), 301 vs 302 (use 301, 302 for analytics), caching strategy (Redis, Bloom filter for penetration), analytics pipeline (async Kafka → batch write). Don't over-engineer — start simple with cache + DB, add analytics later.",interviewQuestions:[{question:"How to generate short URL keys?",answer:"Base62 encode a unique ID from distributed counter (Snowflake), KGS, or MD5 hash."},{question:"301 vs 302 redirect?",answer:"301: permanent, cached by browser. 302: temporary, not cached, allows per-click analytics."},{question:"Database for URL shortener?",answer:"DynamoDB or Cassandra for write scale. Primary key: short_code. TTL for expiry."},{question:"What is KGS?",answer:"Key Generation Service — pre-generates unique random keys for fast allocation."},{question:"How to handle custom aliases?",answer:"Separate namespace. Check uniqueness at creation. Append random suffix if taken."},{question:"How to handle URL expiry?",answer:"Store expiration timestamp. TTL in DB. Periodic cleanup of expired entries."},{question:"How to cache short URLs?",answer:"Redis cache-aside. Bloom filter to prevent cache penetration for non-existent URLs."},{question:"How to track analytics?",answer:"Async pipeline: request → Kafka → batch processor → analytics DB (ClickHouse)."},{question:"What is Base62 encoding?",answer:"a-z (26) + A-Z (26) + 0-9 (10) = 62 characters. 7 chars = 62^7 = 3.5T combinations."},{question:"How to handle collisions?",answer:"For hash-based: linear probing (append salt). For counter: never collide (unique input)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Design URL Shortener</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">POST /shorten</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App Server</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Generate key</text><line x1="200" y1="77" x2="210" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">KGS</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Get unique key</text><rect x="160" y="85" width="100" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="210" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache</text><text x="210" y="111" text-anchor="middle" font-size="9" fill="#ddd">Redis store</text><line x1="60" y1="117" x2="60" y2="123" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">DynamoDB</text><rect x="160" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="210" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Redirect</text><text x="210" y="151" text-anchor="middle" font-size="9" fill="#ddd">301 to long URL</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">URL Shortener</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Base62 encode + KGS. 301 redirect, Redis cache, DynamoDB. Analytics via Kafka.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">URL Shortener: Base62 short codes, 301/302 redirec</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">t. Redis cache, DynamoDB. KGS for key generation.</text></svg>',codeExamples:[{title:"URL Shortener (Express)",useCase:"Core API endpoints.",code:`const express = require("express");
const app = express();
// Create short URL
app.post("/api/shorten", async (req, res) => {
  const { longUrl, customAlias, ttl } = req.body;
  // Get unique key from KGS or hash
  const shortCode = customAlias || await keyService.getKey();
  const entry = { shortCode, longUrl, createdAt: new Date(), ttl: ttl || 0 };
  await db.put({ TableName: "UrlMappings", Item: entry });
  await cache.set(shortCode, longUrl, ttl || 86400);
  res.json({ shortUrl: "https://short.ly/" + shortCode });
});
// Redirect
app.get("/:code", async (req, res) => {
  const code = req.params.code;
  // Check cache first
  let longUrl = await cache.get(code);
  if (!longUrl) {
    const item = await db.get({ TableName: "UrlMappings", Key: { shortCode: code } });
    if (!item.Item) return res.status(404).send("Not found");
    longUrl = item.Item.longUrl;
    await cache.set(code, longUrl, 3600);
  }
  // Log analytics async
  analyticsQueue.send({ code, timestamp: Date.now(), ip: req.ip, userAgent: req.headers["user-agent"] });
  res.redirect(301, longUrl);
});`,description:"URL shortener API — create and redirect with caching."},{title:"Base62 Encoding",useCase:"Encode numbers to short strings.",code:`const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const BASE = ALPHABET.length; // 62
function encode(num) {
  let encoded = "";
  while (num > 0) {
    encoded = ALPHABET[num % BASE] + encoded;
    num = Math.floor(num / BASE);
  }
  return encoded || "a";
}
function decode(str) {
  let num = 0;
  for (const char of str) {
    num = num * BASE + ALPHABET.indexOf(char);
  }
  return num;
}
// Snowflake ID 123456789 → Base62: "8m0Kx"
// 6 chars = 62^6 = 56.8B combinations`,description:"Base62 encoding/decoding for short URL codes."},{title:"KGS (Key Generation Service)",useCase:"Pre-generate keys.",code:`class KeyGenerationService {
  constructor() {
    this.batchSize = 10000;
    this.availableKeys = [];
  }
  async refillKeys() {
    const start = await db.getNextKeyRange(this.batchSize);
    for (let i = 0; i < this.batchSize; i+) {
      this.availableKeys.push(encode(start + i));
    }
  }
  async getKey() {
    if (this.availableKeys.length < 1000) {
      await this.refillKeys(); // async refill
    }
    return this.availableKeys.pop();
  }
  // Pre-generate: run as separate service
  // Fill pool with 1M+ keys on startup
  // Keys are used and marked as taken in DB
  // When low, generate more
  // Benefits: fast allocation, no DB write at request time`,description:"Key Generation Service — pre-generated key pool for fast allocation."},{title:"Analytics Pipeline",useCase:"Async analytics processing.",code:`// Log click event (fast, non-blocking)
async function logClick(code, req) {
  const event = {
    code, timestamp: Date.now(),
    ip: req.ip, userAgent: req.headers["user-agent"],
    referer: req.headers["referer"] || "",
    country: geoLookup(req.ip),
  };
  await kafka.send({ topic: "url-clicks", messages: [{ value: JSON.stringify(event) }] });
}
// Batch processor
const consumer = kafka.consumer({ groupId: "analytics-processor" });
await consumer.run({
  eachBatch: async ({ batch }) => {
    const events = batch.messages.map(m => JSON.parse(m.value.toString()));
    // Batch write to analytics DB
    const query = "INSERT INTO clicks (code, timestamp, ip, country, referer) VALUES ?";
    const values = events.map(e => [e.code, new Date(e.timestamp), e.ip, e.country, e.referer]);
    await analyticsDb.query(query, [values]);
  },
});`,description:"Async analytics pipeline — Kafka → batch write to analytics DB."}],mcqQuestions:[{question:"Base62 alphabet size?",options:["36","52","62","64"],answer:2,explanation:"a-z, A-Z, 0-9 = 62 characters."},{question:"301 redirect is?",options:["Temporary redirect","Permanent, cached by browser","Not cached","Error"],answer:1,explanation:"301 Moved Permanently — browser caches it."},{question:"What is KGS?",options:["Key Generation Service","Kubernetes Service","Key Gateway Service","Knowledge Graph"],answer:0,explanation:"Pre-generates keys for fast allocation."},{question:"Read/write ratio for URL shortener?",options:["1:1","10:1","100:1","1000:1"],answer:2,explanation:"~100:1 (1B reads vs 10M writes/day)."},{question:"Short URL 7 chars max?",options:["62^7 combinations","62^6","10^7","2^32"],answer:0,explanation:"62^7 = 3.5 trillion combinations."},{question:"What cache strategy?",options:["Write-through + LRU","Read-only","No cache","TTL only"],answer:0,explanation:"Cache-aside with LRU eviction and TTL."},{question:"Design URL Shortener — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Design URL Shortener — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Design URL Shortener — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Design URL Shortener — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_url_shortener};
