export const sd_bloom_filters = {
  "id": "sd-bloom-filters",
  "title": "Bloom Filters",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "A Bloom filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set. Can have false positives but never false negatives.",
    "Works by: element is hashed by K hash functions, each setting a bit in a bit array of size M. Query: if any bit is 0, element is definitely NOT in set. If all bits are 1, element MAY be in set (false positive possible).",
    "Parameters: M (bit array size), K (number of hash functions), N (expected elements). False positive rate = (1 - e^(-KN/M))^K. More bits = lower rate. Optimal K = (M/N) * ln(2).",
    "Cannot delete elements (would clear bits used by other elements). Counting Bloom Filters add counters (not bits) to support deletion.",
    "Used for: cache penetration prevention, spell checkers, URL deduplication (web crawlers), blockchain nodes (SPV), weak password detection, database query filtering."
  ],
  "laymanDefinition": "A Bloom filter is like a hotel's \"wanted list\" clipboard at the front desk. If a name is on the list, the person might be wanted (false positive possible — someone with similar name). If a name is NOT on the list, the person is definitely not wanted (no false negatives). The list is much smaller than a full police database and very fast to check.",
  "deepDive": [
    {
      "heading": "How Bloom Filters Work",
      "text": "Initialize M-bit array to 0. Add element: hash with K hash functions, set bits at hash positions to 1. Query: hash with same K functions, check bits. All 1 → maybe present (FP). Any 0 → definitely absent. False positive rate: ~1% with M = 10*N, K = 7. Cannot remove."
    },
    {
      "heading": "Bloom Filter Parameters",
      "text": "M = bit array size (bigger = lower FP rate). N = expected number of elements. K = number of hash functions (optimal = ln(2) * M/N). FP rate = (1 - e^(-KN/M))^K. For 1% FP rate: M/N ≈ 10 bits per element, K ≈ 7. For 0.1%: M/N ≈ 14, K ≈ 10."
    },
    {
      "heading": "Use Case: Cache Penetration Prevention",
      "text": "Problem: malicious requests for non-existent keys hit DB every time (cache never populated). Solution: Bloom filter before cache check. If key not in Bloom filter → return immediately (definitely not in DB). If key in Bloom filter → check cache/DB normally (might be there). Reduces DB load from cache misses."
    },
    {
      "heading": "Scalable Bloom Filters",
      "text": "Standard Bloom filter requires knowing N upfront. Scalable Bloom Filters: start with small filter. When FP rate approaches threshold, add a new, larger filter. Query checks all filters. New elements go into newest filter. Trade-off: more memory, slower queries (check all filters)."
    }
  ],
  "interviewAnswer": "Use Bloom filters when: space efficiency is critical, false positives are acceptable (but false negatives are not), and you know the approximate N. Common for cache protection, deduplication, and filtering. For 1% FP rate, allocate ~10 bits per element. Use counting variant if deletion needed.",
  "interviewQuestions": [
    {
      "question": "What is a Bloom filter?",
      "answer": "Space-efficient probabilistic data structure for set membership. False positives possible, no false negatives."
    },
    {
      "question": "What does a Bloom filter guarantee?",
      "answer": "If it says NO — element is definitely not in set. If it says YES — element may be in set (false positive possible)."
    },
    {
      "question": "What are the key parameters?",
      "answer": "M (bit array size), K (hash functions), N (expected elements)."
    },
    {
      "question": "What is false positive rate?",
      "answer": "Probability of reporting element in set when it\\'s not. Controlled by M/N ratio."
    },
    {
      "question": "Can you delete from a Bloom filter?",
      "answer": "Standard Bloom: no. Counting Bloom: yes, with counters instead of bits."
    },
    {
      "question": "What is cache penetration?",
      "answer": "Requests for non-existent keys hitting DB. Bloom filter prevents this."
    },
    {
      "question": "What is the optimal K?",
      "answer": "K = ln(2) * M/N ≈ 0.7 * (bits per element)."
    },
    {
      "question": "What are common uses?",
      "answer": "Cache protection, URL deduplication, spell checkers, weak password check, blockchain SPV."
    },
    {
      "question": "What is a Scalable Bloom Filter?",
      "answer": "Grows as elements are added — new filter created when FP rate exceeds threshold."
    },
    {
      "question": "How many bits per element for 1% FP?",
      "answer": "~10 bits per element gives ~1% false positive rate."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Bloom Filters</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Element x</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Test</text><line x1=\"110\" y1=\"61\" x2=\"150\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bloom Filter</text><text x=\"200\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">M bits, K hashes</text><line x1=\"200\" y1=\"77\" x2=\"210\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">All bits 1?</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Maybe present</text><rect x=\"160\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Any bit 0?</text><text x=\"210\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Definitely NOT</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hash 1</text><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">pos=42</text><rect x=\"10\" y=\"150\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"166\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hash K</text><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">pos=17</text><rect x=\"160\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"210\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Return quickly</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No DB hit</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bloom Filter</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Probabilistic membership. No false negatives, FP possible. M bits, K hashes. Cache pe</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">netration prevention.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Bloom Filter: Space-efficient membership test. No </text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">false negatives, FP possible. Cache penetration pr</text><text x=\"240\" y=\"279\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">evention.</text></svg>",
  "codeExamples": [
    {
      "title": "Bloom Filter Implementation",
      "useCase": "Simple Bloom filter in Node.js.",
      "code": "class BloomFilter {\n  constructor(size, hashCount) {\n    this.size = size;\n    this.hashCount = hashCount;\n    this.bits = new BitSet(size);\n  }\n  _hash(item, seed) {\n    const h = crypto.createHash(\"md5\").update(item + seed).digest(\"hex\");\n    return parseInt(h.slice(0, 8), 16) % this.size;\n  }\n  add(item) {\n    for (let i = 0; i < this.hashCount; i+) {\n      this.bits.set(this._hash(item, i), 1);\n    }\n  }\n  test(item) {\n    for (let i = 0; i < this.hashCount; i+) {\n      if (!this.bits.get(this._hash(item, i))) return false;\n    }\n    return true; // maybe present\n  }\n  // False positive rate: (1 - e^(-hashCount * count / size))^hashCount\n}",
      "description": "Simple Bloom filter implementation with MD5-based hash."
    },
    {
      "title": "Cache Penetration Prevention",
      "useCase": "Protect DB from cache misses.",
      "code": "class CacheProtection {\n  constructor(bloomSize, expectedElements) {\n    const optimalK = Math.round((bloomSize / expectedElements) * Math.LN2);\n    this.bloom = new BloomFilter(bloomSize, optimalK);\n    this.cache = new Map();\n    this.db = new Database();\n  }\n  preloadBloom(keys) { keys.forEach(k => this.bloom.add(k)); }\n  async get(key) {\n    // Step 1: Bloom filter check\n    if (!this.bloom.test(key)) return null; // definitely not in DB\n    // Step 2: Check cache\n    if (this.cache.has(key)) return this.cache.get(key);\n    // Step 3: Query DB\n    const value = await this.db.query(key);\n    if (value) this.cache.set(key, value);\n    return value;\n  }\n}",
      "description": "Bloom filter prevents cache penetration — blocks non-existent key lookups before they hit DB."
    },
    {
      "title": "Counting Bloom Filter for Deletion",
      "useCase": "With counter support.",
      "code": "class CountingBloomFilter {\n  constructor(size, hashCount) {\n    this.size = size;\n    this.hashCount = hashCount;\n    this.counters = new Uint8Array(size);\n  }\n  add(item) {\n    for (let i = 0; i < this.hashCount; i+) {\n      const pos = this._hash(item, i);\n      if (this.counters[pos] < 255) this.counters[pos]+;\n    }\n  }\n  remove(item) {\n    for (let i = 0; i < this.hashCount; i+) {\n      const pos = this._hash(item, i);\n      if (this.counters[pos] > 0) this.counters[pos]--;\n    }\n  }\n  test(item) {\n    for (let i = 0; i < this.hashCount; i+) {\n      if (this.counters[this._hash(item, i)] === 0) return false;\n    }\n    return true;\n  }\n}",
      "description": "Counting Bloom filter with counters supporting deletion."
    },
    {
      "title": "Scalable Bloom Filter",
      "useCase": "Grow as needed.",
      "code": "class ScalableBloomFilter {\n  constructor(initialSize, scaleFactor = 2, fpRate = 0.01) {\n    this.filters = [new BloomFilter(initialSize, optimalK(initialSize, initialSize))];\n    this.scaleFactor = scaleFactor;\n    this.fpRate = fpRate;\n    this.count = 0;\n  }\n  add(item) {\n    const current = this.filters[this.filters.length - 1];\n    current.add(item); this.count+;\n    // Check if FP rate would exceed threshold\n    const fp = Math.pow(1 - Math.exp(-current.hashCount * this.count / current.size), current.hashCount);\n    if (fp > this.fpRate) {\n      // Add new larger filter\n      const newSize = current.size * this.scaleFactor;\n      this.filters.push(new BloomFilter(newSize, optimalK(newSize, newSize)));\n      this.count = 0;\n    }\n  }\n  test(item) {\n    return this.filters.some(f => f.test(item));\n  }\n}",
      "description": "Scalable Bloom filter that grows as elements are added."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Bloom filter false positive?",
      "options": [
        "Possible",
        "Impossible",
        "Always",
        "Depends"
      ],
      "answer": 0,
      "explanation": "False positives are possible, false negatives are not."
    },
    {
      "question": "False negative in Bloom filter?",
      "options": [
        "Possible",
        "Impossible",
        "Common",
        "Depends on size"
      ],
      "answer": 1,
      "explanation": "No false negatives — if filter says NO, element is definitely absent."
    },
    {
      "question": "What does K represent?",
      "options": [
        "Bits per element",
        "Number of hash functions",
        "Filter size",
        "Element count"
      ],
      "answer": 1,
      "explanation": "K = number of hash functions."
    },
    {
      "question": "Optimal K formula?",
      "options": [
        "K = M/N",
        "K = ln(2) * M/N",
        "K = N/M",
        "K = M * N"
      ],
      "answer": 1,
      "explanation": "Optimal K ≈ 0.7 * (bits per element)."
    },
    {
      "question": "What is counting Bloom filter for?",
      "options": [
        "Faster queries",
        "Deletion support",
        "Smaller size",
        "Better hashing"
      ],
      "answer": 1,
      "explanation": "Counters enable element deletion."
    },
    {
      "question": "How many bits for 1% FP?",
      "options": [
        "~5 bits/element",
        "~10 bits/element",
        "~20 bits/element",
        "~50 bits/element"
      ],
      "answer": 1,
      "explanation": "~10 bits per element for ~1% false positive rate."
    },
    {
      "question": "Bloom Filters — What reduces errors most?",
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
      "question": "Bloom Filters — What improves speed?",
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
      "question": "Bloom Filters — What is key for monitoring?",
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
      "question": "Bloom Filters — What ensures quality?",
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
