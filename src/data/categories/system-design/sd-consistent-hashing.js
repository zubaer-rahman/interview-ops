export const sd_consistent_hashing = {
  "id": "sd-consistent-hashing",
  "title": "Consistent Hashing",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Consistent hashing is a distributed hashing scheme that minimizes data movement when the number of nodes changes — each node handles a range of the hash space.",
    "Hash space (e.g., 0 to 2^32-1) arranged as a ring. Nodes are placed on the ring by hashing their identifier. Keys belong to the nearest node clockwise.",
    "When a node is added/removed, only keys in the affected range need to move — not all keys. Standard modulo hashing (hash % N) moves almost all keys when N changes.",
    "Virtual nodes: each physical node maps to multiple positions on the ring. Better load distribution — handles heterogeneous node capacities and reduces hot spots.",
    "Used in: Cassandra, DynamoDB, Riak, Discord, Akamai CDN, distributed caching (Memcached)."
  ],
  "laymanDefinition": "Consistent hashing is like a carousel at a restaurant with multiple chefs. Each chef (node) is responsible for a section of the carousel. When a chef leaves, only their section needs reassignment — neighbors cover it. With standard hashing, if a chef leaves, ALL the food would need to be reassigned to new positions.",
  "deepDive": [
    {
      "heading": "The Ring",
      "text": "Hash space: 0 to 2^32-1 (or large number) arranged in a ring. Node placement: hash(node_id) → position on ring. Key placement: hash(key) → position on ring → walk clockwise to first node. Each node responsible for range from previous node to itself. Consistent hashing with virtual nodes is the standard approach."
    },
    {
      "heading": "Adding/Removing Nodes",
      "text": "Add node: hash new node → place on ring. Keys from neighboring node in the counter-clockwise range get reassigned. Only that range moves. Remove node: keys reassigned to next node clockwise. Minimal disruption — only 1/N of keys move on average (vs all keys with modulo hashing)."
    },
    {
      "heading": "Virtual Nodes (VNodes)",
      "text": "Each physical node maps to V virtual positions on the ring (e.g., 100-200 per node). Benefits: better load distribution (each node covers many small ranges), handles heterogeneous capacity (powerful nodes get more vnodes), faster rebalancing (smaller units of movement). Cassandra uses 256 vnodes per node by default."
    },
    {
      "heading": "Applications",
      "text": "Cassandra: vnodes for data distribution, token ranges. DynamoDB: consistent hashing for partition distribution. CDNs: assign content to edge servers. Distributed caching: Memcached ring for cache key distribution. Discord: sharding with consistent hashing for guild data."
    }
  ],
  "interviewAnswer": "Use consistent hashing when you need to distribute data across nodes that may change over time. Always use virtual nodes for better distribution. Standard modulo hashing is fine for fixed clusters. Consistent hashing is essential for elastic scaling (auto-scaling, node failures).",
  "interviewQuestions": [
    {
      "question": "What is consistent hashing?",
      "answer": "Distributed hashing scheme where each node handles a range of hash space. Minimizes data movement on node changes."
    },
    {
      "question": "How does the ring work?",
      "answer": "Hash space as a ring (0→2^32-1). Nodes and keys placed by hash. Keys belong to nearest clockwise node."
    },
    {
      "question": "What happens when a node is removed?",
      "answer": "Only keys in that node\\'s range reassign to next node. 1/N of keys move (vs all with modulo)."
    },
    {
      "question": "What are virtual nodes?",
      "answer": "Each physical node maps to multiple positions on ring — better distribution, handles capacity differences."
    },
    {
      "question": "How is consistent hashing different from modulo?",
      "answer": "Modulo (hash % N): N changes → almost all keys remap. Consistent hashing: only 1/N remap."
    },
    {
      "question": "What systems use consistent hashing?",
      "answer": "Cassandra, DynamoDB, Riak, Discord, Akamai CDN, distributed caches."
    },
    {
      "question": "What is a hot spot in consistent hashing?",
      "answer": "Node responsible for popular data — receives disproportionate load. Fixed with virtual nodes."
    },
    {
      "question": "How many vnodes per Cassandra node?",
      "answer": "Default 256 vnodes per physical node."
    },
    {
      "question": "What hash function is typically used?",
      "answer": "MD5 or SHA-1 hashed to an integer in the ring space (0 to 2^127 or 2^160)."
    },
    {
      "question": "What is load balancing with consistent hashing?",
      "answer": "Same keys always go to same nodes → cache locality, query optimization."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Consistent Hashing</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node A</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hash(A)=100</text><rect x=\"120\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"170\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node B</text><text x=\"170\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hash(B)=300</text><rect x=\"230\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"280\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node C</text><text x=\"280\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hash(C)=500</text><line x1=\"100\" y1=\"61\" x2=\"120\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"200\" y1=\"61\" x2=\"230\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Key X</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hash(X)=200</text><line x1=\"55\" y1=\"83\" x2=\"55\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"120\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"170\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Key Y</text><text x=\"170\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hash(Y)=450</text><line x1=\"165\" y1=\"83\" x2=\"165\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ring</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">0 → 2^32-1</text><rect x=\"120\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">VNodes</text><text x=\"170\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Multiple per node</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Consistent Hashing</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Ring-based hashing. Only 1/N keys move on node change. VNodes for distribution. Used </text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">in Cassandra, DynamoDB, CDNs.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Consistent Hashing: Ring-based hashing minimizes d</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ata movement on node changes. VNodes for even dist</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ribution.</text></svg>",
  "codeExamples": [
    {
      "title": "Consistent Hashing Implementation",
      "useCase": "Ring with virtual nodes.",
      "code": "class ConsistentHashRing {\n  constructor(vnodes = 150) {\n    this.vnodes = vnodes;\n    this.ring = new Map(); // position -> nodeId\n    this.sortedPositions = [];\n  }\n  addNode(nodeId, weight = 1) {\n    const numVnodes = this.vnodes * weight;\n    for (let i = 0; i < numVnodes; i+) {\n      const pos = this._hash(nodeId + \":\" + i);\n      this.ring.set(pos, nodeId);\n      this.sortedPositions.push(pos);\n    }\n    this.sortedPositions.sort((a, b) => a - b);\n  }\n  removeNode(nodeId) {\n    for (let i = 0; i < this.vnodes; i+) {\n      const pos = this._hash(nodeId + \":\" + i);\n      this.ring.delete(pos);\n    }\n    this.sortedPositions = this.sortedPositions.filter(p => this.ring.has(p));\n  }\n  getNode(key) {\n    const hash = this._hash(key);\n    const pos = this.sortedPositions.find(p => p >= hash) || this.sortedPositions[0];\n    return this.ring.get(pos);\n  }\n  _hash(key) {\n    const h = crypto.createHash(\"md5\").update(key).digest();\n    return h.readUInt32BE(0);\n  }\n}",
      "description": "Consistent hashing ring with virtual nodes for distribution."
    },
    {
      "title": "Cassandra VNode Configuration",
      "useCase": "256 vnodes per node.",
      "code": "# cassandra.yaml — vnode configuration\n# Number of tokens (vnodes) per node\nnum_tokens: 256\n# Or manually specify token ranges:\ninitial_token: 0, 56713727820156410577229101238628035242, 113427455640312821154458202477256070484...\n# Each token represents a range on the ring\n# With 256 vnodes:\n# - Better load distribution\n# - Faster bootstrap (only 1/256 of data moves)\n# - Heterogeneous capacity: powerful nodes get more tokens\n# nodetool status shows token ownership",
      "description": "Cassandra virtual node (vnode) configuration."
    },
    {
      "title": "Distributed Cache with Consistent Hashing",
      "useCase": "Cache key distribution.",
      "code": "const ring = new ConsistentHashRing(100);\nring.addNode(\"cache1.example.com\");\nring.addNode(\"cache2.example.com\");\nring.addNode(\"cache3.example.com\");\nasync function cacheGet(key) {\n  const node = ring.getNode(key); // which cache server\n  const client = redisClients[node];\n  const value = await client.get(key);\n  return value;\n}\n// Benefits:\n// - Same key always goes to same cache node\n// - When cache1 fails, only its keys redistribute\n// - Other cache nodes keep working, cache hit ratio preserved for most keys",
      "description": "Distributed cache using consistent hashing for key placement."
    },
    {
      "title": "Load Distribution Comparison",
      "useCase": "Modulo vs Consistent Hashing.",
      "code": "// Modulo hashing: hash(key) % N\n// When N changes from 3 to 4:\n// Key A: hash=5, 5%3=2, 5%4=1 → MOVED\n// Key B: hash=7, 7%3=1, 7%4=3 → MOVED\n// Key C: hash=9, 9%3=0, 9%4=1 → MOVED\n// All 3 keys move! 100% redistribution\n// Consistent hashing:\n// Keys on ring, nodes on ring\n// When node added, only 1/4 of keys move (~25%)\n// Average: 1/N of keys redistribute (vs 100% for modulo)\n// With vnodes: rebalancing is smoother",
      "description": "Modulo hashing moves ALL keys on N change; consistent hashing moves only 1/N."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does consistent hashing minimize?",
      "options": [
        "Query time",
        "Data movement on node change",
        "Storage usage",
        "Network traffic"
      ],
      "answer": 1,
      "explanation": "Only 1/N of keys move when N changes."
    },
    {
      "question": "What happens when a node is removed?",
      "options": [
        "All keys fail",
        "Only its range reassigns",
        "All keys reassign",
        "System pauses"
      ],
      "answer": 1,
      "explanation": "Only keys in that range reassign to next node."
    },
    {
      "question": "Virtual nodes improve?",
      "options": [
        "Security",
        "Load distribution",
        "Latency",
        "Consistency"
      ],
      "answer": 1,
      "explanation": "VNodes distribute load evenly across physical nodes."
    },
    {
      "question": "Modulo hashing: when N changes?",
      "options": [
        "1/N keys move",
        "All keys move",
        "No keys move",
        "Half keys move"
      ],
      "answer": 1,
      "explanation": "Almost all keys move with modulo hashing."
    },
    {
      "question": "Where is consistent hashing used?",
      "options": [
        "PostgreSQL",
        "Cassandra and DynamoDB",
        "Redis single node",
        "MySQL"
      ],
      "answer": 1,
      "explanation": "Cassandra, DynamoDB, Riak use consistent hashing."
    },
    {
      "question": "What are vnodes?",
      "options": [
        "Virtual machines",
        "Virtual positions on ring for each node",
        "Voting nodes",
        "Vector nodes"
      ],
      "answer": 1,
      "explanation": "Each physical node maps to multiple positions on the ring."
    },
    {
      "question": "Consistent Hashing — What reduces errors most?",
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
      "question": "Consistent Hashing — What improves speed?",
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
      "question": "Consistent Hashing — What is key for monitoring?",
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
      "question": "Consistent Hashing — What ensures quality?",
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
