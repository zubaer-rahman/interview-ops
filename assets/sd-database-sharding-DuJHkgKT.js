const e={id:"sd-database-sharding",title:"Database Sharding",difficulty:"advanced",estimatedMinutes:25,tldr:["Sharding horizontally partitions data across multiple database instances (shards), each holding a subset of the data.","Shard key determines which shard stores which data. Critical choice: must distribute data evenly and match query patterns.","Strategies: Range-based (shard by ID range — simple but hot spots), Hash-based (hash key → shard — even distribution), Directory-based (lookup table maps key to shard).","Challenges: cross-shard queries (joins, aggregations), resharding (rebalancing when adding shards), distributed transactions, secondary indexes across shards."],laymanDefinition:`Sharding is like splitting a library's books across multiple buildings by first letter. A-D in Building 1, E-K in Building 2, etc. To find a book, you know which building (shard) based on the letter (shard key). But finding all books by "Smith" (cross-shard query) requires visiting every building. Adding Building 5 means reorganizing many books (resharding).`,deepDive:[{heading:"Choosing a Shard Key",text:"Goal: even data distribution, match access patterns. User ID: good for user-centric apps — each user\\'s data on one shard. Geographic: region-based — good for locality. Time-based: by date — good for time-series but hot spot on current data. Avoid: monotonically increasing keys (hot shard). High-cardinality, evenly distributed keys are best."},{heading:"Hash-Based Sharding",text:"shard = hash(shard_key) % N. Even distribution. Problem: adding/removing shards changes N → most data needs rehashing (resharding). Solution: Consistent Hashing — minimizes remapping when N changes. Each shard handles a range of hash space. Virtual nodes for better distribution."},{heading:"Range-Based Sharding",text:"shard = key falls in range. User IDs 1-10000 → Shard 1, 10001-20000 → Shard 2. Simple, supports range queries (BETWEEN). Problem: hot spots — new users get higher IDs, new shard gets most writes. Data skew if ranges poorly chosen. Good for time-series with time-based ranges."},{heading:"Resharding (Rebalancing)",text:"Adding shards requires moving data. Strategies: 1) Preshard: create more shards than needed initially (e.g., 1024 virtual shards mapped to fewer physical). 2) Double write: write to old + new shards during migration. 3) Offline migration: downtime. 4) Proxy-based: shard proxy handles routing, data migration in background."}],interviewAnswer:"Shard key choice is the most critical design decision. Hash-based for even distribution, consistent hashing for easy resharding. Avoid cross-shard queries — design schema to keep related data on same shard. Pre-shard to avoid resharding pain. Use read replicas for read-heavy shards. Consider ProxySQL or Vitess for query routing.",interviewQuestions:[{question:"What is database sharding?",answer:"Horizontal partitioning — splitting data across multiple database instances."},{question:"What is a shard key?",answer:"The key that determines which shard stores a row. Critical for performance and distribution."},{question:"Hash vs range sharding?",answer:"Hash: even distribution, no range queries, resharding expensive. Range: simple, supports range queries, risk of hot spots."},{question:"What is consistent hashing?",answer:"Hash each shard to a ring. Keys belong to nearest shard. Minimizes data movement on shard add/remove."},{question:"What is the main challenge?",answer:"Cross-shard queries — joins, aggregations, transactions across shards are expensive."},{question:"What is resharding?",answer:"Adding or removing shards — requires moving data between shards. Difficult to do live."},{question:"What is a hot spot?",answer:"One shard receives disproportionate traffic. Caused by poor shard key or popularity skew."},{question:"How to handle transactions across shards?",answer:"Distributed transactions (2PC) or Saga pattern. Better: design to avoid cross-shard."},{question:"What are virtual shards?",answer:"More virtual shards than physical shards. Flexible mapping — easier resharding."},{question:"What is ProxySQL?",answer:"Proxy that routes queries to appropriate shard based on shard key — transparent to app."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Database Sharding</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Request</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Proxy/Driver</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Route by shard key</text><line x1="200" y1="77" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="80" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="50" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shard 1</text><text x="50" y="111" text-anchor="middle" font-size="9" fill="#ddd">Users A-M</text><rect x="100" y="85" width="80" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="140" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shard 2</text><text x="140" y="111" text-anchor="middle" font-size="9" fill="#ddd">Users N-Z</text><rect x="190" y="85" width="80" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="230" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shard N</text><text x="230" y="111" text-anchor="middle" font-size="9" fill="#ddd">Range/Hash</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Config Map</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Shard key→Shard</text><rect x="150" y="125" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="200" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Shard Key</text><text x="200" y="151" text-anchor="middle" font-size="9" fill="#ddd">hash(id) % N</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Sharding</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Horizontal partitioning by shard key. Hash-based or range. Consistent hashing for res</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">harding. Avoid cross-shard.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Sharding: Partition data across DB instances by sh</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">ard key. Hash for distribution, consistent hashing</text><text x="240" y="279" font-size="9" fill="#666" text-anchor="middle"> for resharding.</text></svg>',codeExamples:[{title:"Hash-Based Sharding (Node.js)",useCase:"Determine shard from key.",code:`const SHARDS = [
  { host: "shard1.cluster.com", port: 5432 },
  { host: "shard2.cluster.com", port: 5432 },
  { host: "shard3.cluster.com", port: 5432 },
];
function getShard(userId) {
  const hash = crypto.createHash("md5").update(String(userId)).digest("hex");
  const shardNum = parseInt(hash.slice(0, 8), 16) % SHARDS.length;
  return SHARDS[shardNum];
}
async function getUser(userId) {
  const shard = getShard(userId);
  const pool = new Pool(shard);
  const result = await pool.query("SELECT * FROM users WHERE id=$1", [userId]);
  return result.rows[0];
}`,description:"Hash-based shard routing with MD5 hash modulo shard count."},{title:"Vitess Shard Configuration",useCase:"Sharding with Vitess.",code:`# Vitess keyspace with 4 shards
create keyspace user_ks with
  replication_factor: 3
  shards: [-40,40-80,80-c0,c0-]  # 4 shards in hex range
# Routing table
create table users (
  id bigint, name varchar(100), email varchar(200),
  primary key (id)
)
# VSchema: defines sharding key
alter vschema on user_ks.users add vindex hash(id) using hash;`,description:"Vitess shard configuration with hash-based vindex."},{title:"Consistent Hashing Implementation",useCase:"Minimal remapping on resharding.",code:`class ConsistentHashRing {
  constructor(virtualNodes = 100) {
    this.ring = {};
    this.sortedKeys = [];
    this.virtualNodes = virtualNodes;
  }
  addShard(shardId) {
    for (let i = 0; i < this.virtualNodes; i+) {
      const hash = this._hash(shardId + ":" + i);
      this.ring[hash] = shardId;
      this.sortedKeys.push(hash);
    }
    this.sortedKeys.sort((a, b) => a - b);
  }
  getShard(key) {
    const hash = this._hash(key);
    const pos = this.sortedKeys.findIndex(k => k >= hash);
    const targetHash = pos === -1 ? this.sortedKeys[0] : this.sortedKeys[pos];
    return this.ring[targetHash];
  }
  _hash(key) {
    return parseInt(crypto.createHash("md5").update(key).digest("hex").slice(0, 8), 16);
  }
}`,description:"Consistent hashing ring — minimizes data movement when adding/removing shards."},{title:"Cross-Shard Query with scatter-gather",useCase:"Query all shards, merge results.",code:`async function searchUsersByName(name) {
  const results = [];
  // Query ALL shards (scatter-gather)
  const promises = SHARDS.map(async (shard, i) => {
    const pool = new Pool(shard);
    const res = await pool.query(
      "SELECT * FROM users WHERE name ILIKE $1 LIMIT 100",
      ["%" + name + "%"]
    );
    return res.rows;
  });
  const shardResults = await Promise.all(promises);
  // Merge and sort results
  for (const rows of shardResults) results.push(...rows);
  return results.sort((a, b) => b.id - a.id).slice(0, 100);
}`,description:"Scatter-gather pattern for cross-shard queries — query all, merge results."}],mcqQuestions:[{question:"Shard key determines?",options:["Data format","Which shard stores data","Query speed","Index type"],answer:1,explanation:"Shard key → which shard a row belongs to."},{question:"Hash sharding gives?",options:["Range query support","Even distribution","Hot spots","Simple routing"],answer:1,explanation:"Hash distributes data evenly."},{question:"Consistent hashing minimizes?",options:["Query latency","Data movement on resharding","Storage","CPU usage"],answer:1,explanation:"Minimizes data movement when shards change."},{question:"What is a hot spot?",options:["Fast shard","Overloaded shard","Empty shard","Replica shard"],answer:1,explanation:"Shard receiving disproportionate traffic."},{question:"Cross-shard queries are?",options:["Easy","Expensive (scatter-gather)","Not possible","Automatic"],answer:1,explanation:"Cross-shard requires querying all shards."},{question:"Presharding creates?",options:["More shards than nodes","Fewer shards than nodes","Equal shards and nodes","Dynamic shards"],answer:0,explanation:"Create more virtual shards than physical nodes for flexibility."},{question:"Database Sharding — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Database Sharding — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Database Sharding — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Database Sharding — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_database_sharding};
