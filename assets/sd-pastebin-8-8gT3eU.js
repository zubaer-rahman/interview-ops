const e={id:"sd-pastebin",title:"Design Pastebin",difficulty:"advanced",estimatedMinutes:20,tldr:["Design a service like Pastebin where users can store text (code snippets, logs) and share via a unique URL.","Core operations: createPaste(content, options) → short URL, getPaste(id) → view content, list recent pastes. Options: expiry (burn-after-read, TTL), language (syntax highlighting), password protection.","Key metrics: 10M pastes/day. 100M reads/day. Average paste size: 10KB. Storage: 10M × 10KB = 100GB/day → 36TB/year. Need compression + object storage.","Architecture: Write: App → generate ID → compress content → S3/GCS (object storage) → metadata in DB. Read: App → DB (metadata) → S3 (content) → render (syntax highlighting). Cache for hot pastes.","Features: syntax highlighting (Prism/Highlight.js), raw text view, embed as iframe, burn-after-read (one-time view), password protection, expiration.","Differentiator: supports custom slugs, folder organization, API access, version history for paid tiers."],laymanDefinition:"Pastebin is like a public bulletin board. You pin your note (paste) with a unique tag (URL). People read it and it stays until someone removes it (expiry) or it's read once and torn down (burn-after-read). The board is searchable by recent posts, and some posts are protected (password). Large posters use compression (whiteboard that folds up).",deepDive:[{heading:"Storage Architecture",text:"Hot pastes (< 24h): SSD + Redis cache. Warm pastes (< 30 days): standard storage. Cold pastes (> 30 days): S3 Glacier/Deep Archive. Object storage (S3/GCS) for paste content. Key = paste_id. Metadata (title, expires_at, password_hash, views) in DynamoDB or PostgreSQL. S3 can store gzipped content."},{heading:"ID Generation",text:"Similar to URL shortener: Base62 encoded unique ID. Distributed counter or random key. 7-8 chars sufficient. Custom slugs: check uniqueness. Sequential IDs allowed (not security concern for paste content). Burn-after-read: ID used once, deleted after view."},{heading:"Syntax Highlighting",text:"Language detection: file extension, auto-detect (shebang, keywords), or user-specified. Rendering: server-side (highlight.js for SEO) + client-side for dynamic. Common languages: JS, Python, Go, SQL, HTML, CSS, JSON, YAML, Bash. Consider server-side rendering for faster page load."},{heading:"Expiry and Cleanup",text:"expires_at field in metadata. Background job: scans for expired pastes, deletes from storage + DB. TTL in DynamoDB (automatic deletion). Burn-after-read: delete after first view (mark as deleted before returning content). Rate-limited to prevent abuse."}],interviewAnswer:"Use object storage (S3) for paste content (saves DB storage costs). Compress before storing. Cache hot pastes in Redis. Background cleanup job for expired pastes. Syntax highlighting on server-side for SEO. Burn-after-read requires careful race condition handling.",interviewQuestions:[{question:"Where to store paste content?",answer:"Object storage (S3/GCS) — cheap, scalable. Metadata in DB."},{question:"How to handle burn-after-read?",answer:"Delete paste after first view. Must handle race conditions (mutex)."},{question:"How to expire pastes?",answer:"expires_at field. Background cleanup job or DB TTL."},{question:"How to do syntax highlighting?",answer:"Prism.js or Highlight.js. Server-side for SEO, client-side for dynamic."},{question:"What is the read/write ratio?",answer:"~10:1 (100M reads vs 10M writes/day)."},{question:"How to estimate storage?",answer:"10M pastes × 10KB average = 100GB/day. Compressed: ~30GB/day."},{question:"What content to compress?",answer:"Text content — gzip/brotli before S3 storage. Saves ~70% storage."},{question:"How to handle password protection?",answer:"Hash password (bcrypt). Store hash in metadata. Prompt before showing content."},{question:"What is raw text view?",answer:"Return content as text/plain for curl/wget downloads."},{question:"How to prevent abuse?",answer:"Rate limit creation per IP/user. CAPTCHA for anonymous. Max paste size limit."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Design Pastebin</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Create/View</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App Server</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">API</text><line x1="200" y1="77" x2="210" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Generate ID</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Base62</text><rect x="160" y="85" width="100" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="210" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">S3 Storage</text><text x="210" y="111" text-anchor="middle" font-size="9" fill="#ddd">Compressed</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB (Dynamo)</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Metadata</text><rect x="160" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="210" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache (Redis)</text><text x="210" y="151" text-anchor="middle" font-size="9" fill="#ddd">Hot pastes</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pastebin</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Object storage for content. Syntax highlighting, expiry, burn-after-read. Rate-limite</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">d creation.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Pastebin: Object storage for content, syntax highl</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">ighting, expiry, burn-after-read.</text></svg>',codeExamples:[{title:"Create and Get Paste",useCase:"Core API endpoints.",code:`app.post("/api/pastes", async (req, res) => {
  const { content, title, language, expiry, password, burnAfterRead } = req.body;
  if (content.length > MAX_SIZE) return res.status(413).json({ error: "Too large" });
  const id = await keyService.getKey();
  const compressed = zlib.gzipSync(content);
  await s3.putObject({ Bucket: "pastes", Key: id, Body: compressed, ContentEncoding: "gzip" }).promise();
  const paste = { id, title: title || "Untitled", language: language || "auto", expiresAt: calcExpiry(expiry), passwordHash: password ? bcrypt.hashSync(password, 10) : null, burnAfterRead, views: 0, createdAt: new Date() };
  await db.put({ TableName: "Pastes", Item: paste });
  res.json({ url: "https://paste.example.com/" + id });
});
app.get("/:id", async (req, res) => {
  let paste = await cache.get("paste:" + req.params.id);
  if (!paste) {
    paste = (await db.get({ TableName: "Pastes", Key: { id: req.params.id } })).Item;
    if (paste && Date.now() < new Date(paste.expiresAt).getTime()) {
      await cache.setex("paste:" + req.params.id, 3600, JSON.stringify(paste));
    }
  }
  if (!paste || (paste.expiresAt && Date.now() > new Date(paste.expiresAt).getTime())) {
    return res.status(404).send("Paste expired or not found");
  }
  const data = await s3.getObject({ Bucket: "pastes", Key: paste.id }).promise();
  const content = zlib.gunzipSync(data.Body).toString();
  if (paste.burnAfterRead) { await deletePaste(paste.id); }
  res.render("view", { paste, content, highlighted: highlight(content, paste.language) });
});`,description:"Pastebin create and view endpoints with S3 storage and caching."},{title:"Background Expiry Cleanup",useCase:"Expired paste removal.",code:`// Background job — runs every 5 minutes
async function cleanupExpired() {
  const expired = await db.scan({
    TableName: "Pastes",
    FilterExpression: "expiresAt < :now",
    ExpressionAttributeValues: { ":now": Math.floor(Date.now() / 1000) },
  }).promise();
  for (const paste of expired.Items) {
    console.log("Deleting expired paste:", paste.id);
    // Delete from S3
    await s3.deleteObject({ Bucket: "pastes", Key: paste.id }).promise();
    // Delete from DB
    await db.delete({ TableName: "Pastes", Key: { id: paste.id } }).promise();
    // Delete from cache
    await cache.del("paste:" + paste.id);
  }
  console.log("Cleaned up", expired.Items.length, "expired pastes");
}
// Run every 5 minutes
setInterval(cleanupExpired, 5 * 60 * 1000);`,description:"Background job for expired paste cleanup."},{title:"Syntax Highlighting (Server-side)",useCase:"Highlight on render.",code:`const hljs = require("highlight.js");
function detectLanguage(content, filename, specified) {
  if (specified && specified !== "auto") return specified;
  if (filename) {
    const ext = filename.split(".").pop();
    const langMap = { js: "javascript", py: "python", go: "go", sql: "sql", sh: "bash", yml: "yaml", json: "json", html: "xml", css: "css" };
    if (langMap[ext]) return langMap[ext];
  }
  const result = hljs.highlightAuto(content);
  return result.language || "plaintext";
}
function highlightCode(content, language) {
  try {
    if (language === "plaintext") return hljs.highlight(content, { language: "plaintext" }).value;
    return hljs.highlight(content, { language }).value;
  } catch {
    return hljs.highlightAuto(content).value;
  }
}`,description:"Server-side syntax highlighting with auto-detection."},{title:"Rate Limiting for Paste Creation",useCase:"Prevent spam.",code:`const rateLimit = require("express-rate-limit");
const pasteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50, // max 50 pastes per hour per IP
  message: { error: "Too many pastes. Try again later." },
});
app.post("/api/pastes", pasteLimiter, async (req, res) => {
  if (!req.isAuthenticated && req.body.content.length > 100000) {
    return res.status(413).json({ error: "Anonymous users limited to 100KB" });
  }
  // ... create paste
});`,description:"Rate limiting paste creation per IP to prevent abuse."}],mcqQuestions:[{question:"Where to store paste content?",options:["Database (text column)","Object storage (S3)","Local filesystem","Redis"],answer:1,explanation:"S3/GCS for cheap, scalable object storage."},{question:"Burn-after-read means?",options:["Expires after 1 hour","Deleted after first view","Requires password","Public view only"],answer:1,explanation:"Content deleted after being viewed once."},{question:"Average paste size estimate?",options:["1KB","10KB","100KB","1MB"],answer:1,explanation:"~10KB average paste size."},{question:"Storage for 10M pastes/day?",options:["1GB/day","100GB/day","1TB/day","10TB/day"],answer:1,explanation:"10M × 10KB = 100GB/day (compressed ~30GB)."},{question:"How to handle expiry?",options:["TTL in DB + background cleanup","Manual deletion","No expiry","Cache TTL only"],answer:0,explanation:"DB TTL + background job for cleanup."},{question:"What mitigates abuse?",options:["No limits","Rate limiting + CAPTCHA + size limits","Encryption","CDN"],answer:1,explanation:"Rate limiting, CAPTCHA, and size limits."},{question:"Design Pastebin — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Design Pastebin — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Design Pastebin — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Design Pastebin — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_pastebin};
