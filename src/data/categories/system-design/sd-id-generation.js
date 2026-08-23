export const sd_id_generation = {
  "id": "sd-id-generation",
  "title": "ID Generation",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "ID generation strategies for distributed systems must produce unique, scalable, and often sortable identifiers across multiple nodes.",
    "Requirements: uniqueness (no collisions), scalability (no single bottleneck), monotonicity (increasing for DB index performance), size efficiency, decentralization.",
    "Common strategies: UUID v4 (random, 128-bit), UUID v7 (time-ordered, 128-bit), Snowflake (Twitter, 64-bit), ULID (sortable, 128-bit), NanoID (short, URL-safe), DB sequences (auto-increment — single point of failure).",
    "Trade-offs: longer IDs are more unique but use more storage. Sortable IDs improve DB index performance. Decentralized generation avoids single bottleneck."
  ],
  "laymanDefinition": "ID generation is like naming items in a warehouse. Auto-increment = sequential shelf numbers — simple but you need a central manager. UUID = random serial numbers — anyone can generate but longer. Snowflake = warehouse + section + timestamp — fast, sortable, decentralized. For global warehouses, you need IDs that won't collide.",
  "deepDive": [
    {
      "heading": "UUID v4 vs v7",
      "text": "UUID v4: 128 bits (36 chars), random. 122 random bits. 5.3 × 10^36 possible values. No ordering — bad for DB index (B-tree fragmentation). UUID v7: time-ordered prefix, random suffix. Sortable, good for DB indexes. Prefer v7 over v4 for database keys. Both are 128-bit, no central coordination."
    },
    {
      "heading": "Snowflake ID (Twitter)",
      "text": "64-bit ID: 1 bit sign (0) + 41 bits timestamp (ms, 69-year range) + 10 bits worker ID (1024 nodes) + 12 bits sequence (4096/ms). Fits in 64-bit integer (BIGINT). Time-sortable. Decentralized (each worker generates independently). Requires worker ID assignment and clock synchronization (NTP)."
    },
    {
      "heading": "ULID (Universally Unique Lexicographically Sortable Identifier)",
      "text": "128-bit: 48-bit timestamp (ms) + 80-bit random. Crockford Base32 encoding (26 chars). Case-insensitive, URL-safe, no special chars. Sortable by timestamp. 1.21 × 10^24 ids/sec per generator. Good alternative to UUID — sortable and URL-safe."
    },
    {
      "heading": "NanoID",
      "text": "Compact, URL-safe, customizable length. Default: 21 chars (64-bit entropy). 2.5 × 10^14 years needed to have 1% collision at 1000 IDs/hour. Faster than UUID (no random bytes, uses crypto). Used in: React Router, Next.js, tRPC, Prisma. Good for short URLs, public IDs."
    },
    {
      "heading": "DB Sequence Auto-Increment",
      "text": "PostgreSQL SERIAL/BIGSERIAL, MySQL AUTO_INCREMENT. Simple, short, sequential. Problem: single point of failure (sequence generator), cannot generate offline, sequential reveals data volume. For distributed: use sequence ranges (reserve 1-1000 on node A, 1001-2000 on node B)."
    }
  ],
  "interviewAnswer": "Use UUID v7 (time-ordered) for most distributed systems — good balance of uniqueness, sortability, and decentralization. Use Snowflake if 64-bit integer key is required (legacy systems, index performance). Use NanoID for short public IDs. Never use sequential IDs in URLs (security through obscurity is not security, but it helps prevent enumeration attacks).",
  "interviewQuestions": [
    {
      "question": "What requirements for distributed IDs?",
      "answer": "Unique, scalable, monotonic (sortable), decentralized, size-efficient."
    },
    {
      "question": "UUID v4 vs v7?",
      "answer": "v4: random, not sortable. v7: time-ordered prefix, sortable, db-friendly."
    },
    {
      "question": "What is a Snowflake ID?",
      "answer": "64-bit: timestamp + worker ID + sequence. Twitter\\'s distributed ID generator."
    },
    {
      "question": "Why sortable IDs matter?",
      "answer": "Better DB index performance — B-tree inserts are sequential, less page splits."
    },
    {
      "question": "What is ULID?",
      "answer": "128-bit: timestamp + random, Crockford Base32, sortable, URL-safe."
    },
    {
      "question": "What is NanoID?",
      "answer": "Compact, URL-safe ID with customizable length. 21 chars default."
    },
    {
      "question": "What is the collision probability for UUID?",
      "answer": "Extremely low — 122 random bits. Billions of IDs for billions of years."
    },
    {
      "question": "What problem with DB auto-increment?",
      "answer": "Single point of failure, sequential reveals data volume, can\\'t generate offline."
    },
    {
      "question": "What is the worker ID in Snowflake?",
      "answer": "Identifies the node generating the ID — must be unique per node."
    },
    {
      "question": "What is a KSUID?",
      "answer": "K-Sortable Unique IDentifier — similar to ULID, 27 chars, timestamp + random payload."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">ID Generation</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unique</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No duplicates</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sortable</text><text x=\"60\" y=\"91\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">DB-friendly</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Decentralized</text><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No bottleneck</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compact</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Storage efficient</text><rect x=\"160\" y=\"45\" width=\"60\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"190\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">UUID</text><text x=\"190\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">128-bit</text><rect x=\"230\" y=\"45\" width=\"60\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"260\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Snowflake</text><text x=\"260\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">64-bit</text><rect x=\"160\" y=\"65\" width=\"60\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"190\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ULID</text><text x=\"190\" y=\"80\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">128-bit so</text><text x=\"190\" y=\"91\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">rt</text><rect x=\"230\" y=\"65\" width=\"60\" height=\"32\" rx=\"5\" fill=\"#6f42c1\" stroke=\"#6f42c1\" stroke-width=\"1.5\"/><text x=\"260\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NanoID</text><text x=\"260\" y=\"80\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Short cryp</text><text x=\"260\" y=\"91\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">to</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ID Generation</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">UUID v7 (sortable), Snowflake (64-bit), ULID, NanoID. Choose by requirements: sortabi</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">lity, size, decentralization.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ID Generation: UUID v7, Snowflake, ULID, NanoID. S</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ortable IDs improve DB index performance.</text></svg>",
  "codeExamples": [
    {
      "title": "Snowflake ID Generator",
      "useCase": "64-bit distributed ID.",
      "code": "class SnowflakeGenerator {\n  constructor(workerId, epoch = 1700000000000) {\n    this.workerId = workerId;\n    this.epoch = epoch;\n    this.sequence = 0;\n    this.lastTimestamp = -1;\n    this.workerIdBits = 10;\n    this.sequenceBits = 12;\n    this.maxWorkerId = (1 << this.workerIdBits) - 1;\n    this.sequenceMask = (1 << this.sequenceBits) - 1;\n    this.workerIdShift = this.sequenceBits;\n    this.timestampShift = this.sequenceBits + this.workerIdBits;\n  }\n  nextId() {\n    let timestamp = Date.now();\n    if (timestamp < this.lastTimestamp) throw new Error(\"Clock moved backwards\");\n    if (timestamp === this.lastTimestamp) {\n      this.sequence = (this.sequence + 1) & this.sequenceMask;\n      if (this.sequence === 0) timestamp = this.waitNextMs();\n    } else { this.sequence = 0; }\n    this.lastTimestamp = timestamp;\n    return ((BigInt(timestamp - this.epoch) << BigInt(this.timestampShift)) |\n      (BigInt(this.workerId) << BigInt(this.workerIdShift)) |\n      BigInt(this.sequence)).toString();\n  }\n  waitNextMs() {\n    let ts = Date.now();\n    while (ts <= this.lastTimestamp) ts = Date.now();\n    return ts;\n  }\n}",
      "description": "Snowflake ID generator — timestamp + worker + sequence, 64-bit."
    },
    {
      "title": "UUID v7 Generation",
      "useCase": "Time-ordered UUID.",
      "code": "// Node.js — generate UUID v7 (time-ordered)\nconst { v7: uuidv7 } = require(\"uuid\");\nconst id = uuidv7(); // \"018f8a1e-8b3c-7a1e-b1e1-123456789abc\"\n// Structure:\n// timestamp (48 bits) + version (4 bits) + variant (2 bits) + random (74 bits)\n// Sortable: prefix is Unix timestamp in ms\n// Unlike UUID v4, v7 IDs sort chronologically\n// Database index performance: much better than v4\n// Collision probability: same as v4 (extremely low)",
      "description": "UUID v7 — time-ordered prefix for DB-friendly sorting."
    },
    {
      "title": "NanoID Generation",
      "useCase": "Short crypto ID.",
      "code": "const { nanoid } = require(\"nanoid\");\n// Default: 21 chars, 64-bit entropy\nconst id = nanoid(); // \"V1StGXR8_Z5jdHi6B-myT\"\n// Custom length (e.g., 8 chars for short URL):\nconst shortId = nanoid(8); // \"kL7x9qP2\"\n// Custom alphabet (URL-safe):\nconst customId = nanoid.customAlphabet(\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_\", 12);\n// Collision:\n// 21 chars: ~2.5e14 years for 1% collision at 1000 ids/hour\n// 8 chars: ~5 months for 1% collision at 1000 ids/hour\n// NanoID is NOT sortable (random)\n// It is the shortest URL-safe ID",
      "description": "NanoID — compact crypto-random IDs, customizable length."
    },
    {
      "title": "DB Sequence Ranges for Distributed",
      "useCase": "Offline ID generation.",
      "code": "-- Allocate ID ranges to each node\nCREATE TABLE id_allocator (\n  node_id INT PRIMARY KEY,\n  range_start BIGINT,\n  range_end BIGINT\n);\n-- Node A allocates range (PostgreSQL)\nBEGIN;\nUPDATE id_allocator SET range_start = range_end + 1, range_end = range_end + 1000\nWHERE node_id = 1\nRETURNING range_start, range_end;\nCOMMIT;\n-- Node A can now generate IDs offline: 1001-2000\n-- When exhausted, allocate next range\n-- Benefit: no single bottleneck, nodes work offline\n-- Disadvantage: ID gaps, need to track allocation",
      "description": "DB sequence ranges — each node gets a batch of IDs to use offline."
    }
  ],
  "mcqQuestions": [
    {
      "question": "UUID v7 advantage over v4?",
      "options": [
        "Shorter",
        "Time-sortable",
        "More unique",
        "Faster generation"
      ],
      "answer": 1,
      "explanation": "UUID v7 is time-ordered — better for DB indexes."
    },
    {
      "question": "Snowflake ID size?",
      "options": [
        "32-bit",
        "64-bit",
        "128-bit",
        "256-bit"
      ],
      "answer": 1,
      "explanation": "64-bit integer — fits in BIGINT."
    },
    {
      "question": "Snowflake ID components?",
      "options": [
        "Timestamp + worker + sequence",
        "Random only",
        "MAC address + time",
        "Counter + server"
      ],
      "answer": 0,
      "explanation": "41-bit timestamp + 10-bit worker + 12-bit sequence."
    },
    {
      "question": "NanoID default length?",
      "options": [
        "8 chars",
        "16 chars",
        "21 chars",
        "36 chars"
      ],
      "answer": 2,
      "explanation": "Default 21 characters (64-bit entropy)."
    },
    {
      "question": "Auto-increment problem?",
      "options": [
        "Too long",
        "Single point of failure",
        "Not unique",
        "Slow"
      ],
      "answer": 1,
      "explanation": "Single bottleneck, reveals data volume."
    },
    {
      "question": "Which ID is URL-safe?",
      "options": [
        "UUID",
        "NanoID",
        "Snowflake",
        "All"
      ],
      "answer": 1,
      "explanation": "NanoID uses URL-safe alphabet by default."
    },
    {
      "question": "ID Generation — What reduces errors most?",
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
      "question": "ID Generation — What improves speed?",
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
      "question": "ID Generation — What is key for monitoring?",
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
      "question": "ID Generation — What ensures quality?",
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
