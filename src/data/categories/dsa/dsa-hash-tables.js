export const dsa_hash_tables = {
  "id": "dsa-hash-tables",
  "title": "Hash Tables",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Hash tables store key-value pairs with O(1) average-time insert, delete, and search.",
    "A hash function maps keys to array indices. Collisions are handled by chaining or open addressing.",
    "Load factor = n/m (entries/slots). When load factor exceeds threshold, resize and rehash all entries.",
    "Good hash functions distribute keys uniformly. Bad hash functions cause clustering and degrade to O(n)."
  ],
  "laymanDefinition": "A hash table is like a library with a magical filing system. Each book (value) has a unique ID (key). The librarian uses a formula (hash function) to instantly compute which shelf the book belongs on. If two books map to the same slot (collision), they are stacked together (chaining).",
  "deepDive": [
    {
      "heading": "Hash Function Requirements",
      "text": "Deterministic: same key always maps to same index. Uniform distribution: keys spread evenly across slots. Fast to compute. Examples: division method (key % m), multiplication method."
    },
    {
      "heading": "Collision: Chaining",
      "text": "Each slot points to a linked list. Insert: O(1) at head. Search: traverse chain O(1 + load factor). Delete: O(1 + load factor). Worst case: all keys hash to same slot, O(n)."
    },
    {
      "heading": "Collision: Open Addressing",
      "text": "All entries stored in array slots. Probing: linear (slot+1, slot+2...), quadratic (slot+1, slot+4...), double hashing. Deletion uses tombstones. Load factor must stay below 0.7."
    },
    {
      "heading": "Applications",
      "text": "Database indexing, caching (Redis, Memcached), symbol tables in compilers, object representation in dynamic languages, deduplication, frequency maps."
    }
  ],
  "interviewAnswer": "Hash tables offer the best average-case performance for dictionary operations. The hash function quality and load factor are critical. Choose chaining for simpler implementation, open addressing for better cache performance. Always handle collisions. Resize when load factor exceeds threshold.",
  "interviewQuestions": [
    {
      "question": "What is the average time complexity of hash table operations?",
      "answer": "O(1) average for insert, search, delete."
    },
    {
      "question": "What is a hash collision?",
      "answer": "Two different keys produce the same hash index."
    },
    {
      "question": "What are the two main collision resolution strategies?",
      "answer": "Chaining (linked list per slot) and Open addressing (probing)."
    },
    {
      "question": "What is load factor?",
      "answer": "n/m — number of entries divided by number of slots."
    },
    {
      "question": "When do hash tables degrade to O(n)?",
      "answer": "When load factor is too high or hash function causes many collisions."
    },
    {
      "question": "What is a good hash function property?",
      "answer": "Uniform distribution — keys spread evenly across all slots."
    },
    {
      "question": "What is rehashing?",
      "answer": "Resizing the table and recomputing hash indices for all entries."
    },
    {
      "question": "What is the typical resize factor?",
      "answer": "Double the table size (2x) when load factor exceeds threshold."
    },
    {
      "question": "What is a tombstone in open addressing?",
      "answer": "A marker for deleted slots to maintain probe sequence integrity."
    },
    {
      "question": "What data structures use hashing internally?",
      "answer": "JavaScript Maps, Python dicts, Java HashMap, Redis, database indexes."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Hash Tables</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Key \"name\"</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Hash function</text><line x1=\"140\" y1=\"48\" x2=\"170\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hash: 42</text><text x=\"230\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Index</text><line x1=\"280\" y1=\"48\" x2=\"310\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"320\" y=\"35\" width=\"120\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"380\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Slot 42</text><text x=\"380\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[\"name\" -> \"Alice\"]</text><rect x=\"10\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"75\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collision!</text><text x=\"75\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Chain entries</text><rect x=\"10\" y=\"100\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"75\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Load Factor</text><text x=\"75\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n/m threshold</text><rect x=\"10\" y=\"130\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"75\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Resize</text><text x=\"75\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Double + rehash</text><rect x=\"320\" y=\"70\" width=\"120\" height=\"115\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"380\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hash Table</text><text x=\"380\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(1) average. Chainin</text><text x=\"380\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">g or open addressing.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Hash Tables: O(1) average insert/search/delete. Co</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">llisions resolved via chaining or probing.</text></svg>",
  "codeExamples": [
    {
      "title": "Hash Table with Chaining",
      "useCase": "Separate chaining implementation.",
      "code": "class HashTable {\n  constructor(size = 53) { this.table = new Array(size); this.size = size; }\n  _hash(key) {\n    let hash = 0;\n    for (let i = 0; i < key.length; i++)\n      hash = (hash * 31 + key.charCodeAt(i)) % this.size;\n    return hash;\n  }\n  set(key, value) {\n    const idx = this._hash(key);\n    if (!this.table[idx]) this.table[idx] = [];\n    for (const pair of this.table[idx])\n      if (pair[0] === key) { pair[1] = value; return; }\n    this.table[idx].push([key, value]);\n  }\n  get(key) {\n    const idx = this._hash(key);\n    if (!this.table[idx]) return undefined;\n    for (const pair of this.table[idx])\n      if (pair[0] === key) return pair[1];\n    return undefined;\n  }\n}",
      "description": "Hash table with separate chaining for collision resolution."
    },
    {
      "title": "First Non-Repeating Character",
      "useCase": "Counting with hash map.",
      "code": "function firstNonRepeating(s) {\n  const freq = new Map();\n  for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);\n  for (let i = 0; i < s.length; i++)\n    if (freq.get(s[i]) === 1) return i;\n  return -1;\n}",
      "description": "Hash map for frequency counting O(n)."
    },
    {
      "title": "Group Anagrams",
      "useCase": "Hash map with sorted key.",
      "code": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}",
      "description": "Group anagrams O(n * k log k)."
    },
    {
      "title": "LRU Cache",
      "useCase": "Hash map + doubly linked list.",
      "code": "class LRUCache {\n  constructor(cap) { this.cap = cap; this.cache = new Map(); }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const val = this.cache.get(key);\n    this.cache.delete(key); this.cache.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    this.cache.set(key, value);\n    if (this.cache.size > this.cap)\n      this.cache.delete(this.cache.keys().next().value);\n  }\n}",
      "description": "LRU cache using Map (insertion order) for O(1) operations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Average time complexity of hash table search?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 0,
      "explanation": "O(1) average."
    },
    {
      "question": "What resolves collisions with linked lists?",
      "options": [
        "Chaining",
        "Open addressing",
        "Double hashing",
        "Linear probing"
      ],
      "answer": 0,
      "explanation": "Chaining uses linked lists at each slot."
    },
    {
      "question": "What is load factor?",
      "options": [
        "n/m entries per slot",
        "Hash function speed",
        "Table size",
        "Collision rate"
      ],
      "answer": 0,
      "explanation": "Load factor = n/m."
    },
    {
      "question": "When does hash table degrade to O(n)?",
      "options": [
        "Low load factor",
        "Many collisions",
        "Small table",
        "Good hash function"
      ],
      "answer": 1,
      "explanation": "Many collisions cause O(n) degradation."
    },
    {
      "question": "What is rehashing?",
      "options": [
        "Resizing and recomputing hashes",
        "Hashing again",
        "Double hashing",
        "Collision detection"
      ],
      "answer": 0,
      "explanation": "Rehash all entries after resize."
    },
    {
      "question": "What marks deleted slots in open addressing?",
      "options": [
        "Null",
        "Tombstone",
        "Empty marker",
        "Delete flag"
      ],
      "answer": 1,
      "explanation": "Tombstone marks deleted entries in open addressing."
    }
  ]
};
