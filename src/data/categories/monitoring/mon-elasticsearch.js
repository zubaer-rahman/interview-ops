export const mon_elasticsearch = {
  "id": "mon-elasticsearch",
  "title": "Elasticsearch",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases — central to the ELK stack.",
    "Core concepts: index (like a database), document (JSON record), shard (horizontal partition), replica (high availability), inverted index (fast full-text search).",
    "Elasticsearch indexes all fields by default, enabling fast search and aggregation on any field. Built on Apache Lucene.",
    "Common use cases: centralized logging (ELK stack), full-text search, application performance monitoring, security analytics, and business analytics."
  ],
  "laymanDefinition": "Elasticsearch is like a massive, super-organized library where every book is immediately sorted, cross-referenced, and a librarian can instantly find any phrase or fact across all books. Unlike a normal library, this one copies popular sections (replicas) so many people can read simultaneously.",
  "deepDive": [
    {
      "heading": "Elasticsearch Architecture",
      "text": "Cluster: collection of nodes working together. Node: single server that stores data and participates in indexing/search. Index: collection of documents with similar characteristics. Shard: a Lucene index — the unit of scale. Primary shard: original data. Replica shard: copy for HA and search throughput."
    },
    {
      "heading": "Inverted Index",
      "text": "Elasticsearch\\'s secret sauce. Instead of storing documents and scanning them for terms, it stores a mapping of EVERY unique term to the list of documents containing it. {\"elasticsearch\": [doc1, doc3, doc5], \"search\": [doc1, doc2, doc4]}. Search for \"elasticsearch search\" — intersect lists -> doc1."
    },
    {
      "heading": "Elasticsearch for Logging (ELK)",
      "text": "Logstash or Filebeat ships logs -> Elasticsearch indexes them -> Kibana visualizes. Index per day pattern: myapp-logs-2024.01.15. Mappings: define field types. ILM (Index Lifecycle Management): hot (SSD, indexing) -> warm (HDD, search) -> cold (frozen, rare queries) -> delete."
    },
    {
      "heading": "Query DSL",
      "text": "Full JSON query language. Types: match (full-text), term (exact value), range (numeric/date), bool (compound — must, should, filter, must_not). Aggregations: terms (group by), date_histogram (time buckets), avg/sum/min/max, cardinality (unique count)."
    },
    {
      "heading": "Elasticsearch Operations",
      "text": "Cluster health: green (all shards allocated), yellow (replicas unallocated), red (shards missing). Monitoring: _cluster/health, _nodes/stats, _cat/indices. Scaling: add nodes, rebalance shards. Snapshots: backup to S3. ILM policies automate index management."
    }
  ],
  "interviewAnswer": "Elasticsearch is the most powerful search and analytics engine available. Its inverted index makes full-text search near-instant at any scale. For logging, use daily indices with ILM policies. Understand the difference between query and filter context. Design mappings carefully.",
  "interviewQuestions": [
    {
      "question": "What is Elasticsearch?",
      "answer": "A distributed, RESTful search and analytics engine built on Apache Lucene, central to the ELK stack."
    },
    {
      "question": "What is an inverted index?",
      "answer": "A data structure mapping every unique term to documents containing it — enables instant full-text search."
    },
    {
      "question": "What is a shard?",
      "answer": "A horizontal partition of an index. Each shard is a full Lucene index. Primary for data, replica for HA."
    },
    {
      "question": "What is the ELK stack?",
      "answer": "Elasticsearch (storage/search), Logstash (data processing), Kibana (visualization). Often includes Filebeat."
    },
    {
      "question": "What is an Elasticsearch index?",
      "answer": "A collection of JSON documents with similar characteristics — like a database in relational terms."
    },
    {
      "question": "What is ILM?",
      "answer": "Index Lifecycle Management — automates index transitions: hot -> warm -> cold -> delete based on age/size."
    },
    {
      "question": "What is the difference between query and filter context?",
      "answer": "Query: relevance scoring, slower. Filter: exact match, cached, faster. Use filter for structured data."
    },
    {
      "question": "What is the difference between text and keyword?",
      "answer": "text: full-text, analyzed (tokenized, lowercased). keyword: exact value, not analyzed (for aggregations, sorting)."
    },
    {
      "question": "What does cluster health green mean?",
      "answer": "All primary and replica shards are allocated. Yellow: replicas not allocated. Red: shards missing."
    },
    {
      "question": "What is Logstash?",
      "answer": "A data processing pipeline that ingests, transforms, and sends data to Elasticsearch (or other outputs)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Elasticsearch</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Index</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Collection of docs</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shard</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Lucene partition</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Replica</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HA + search perf</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Inverted Index</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Term to docs map</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ELK Stack</text><text x=\"65\" y=\"163\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ES + Logstash + Kiba</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">na</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"275\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Elasticsearch</text><text x=\"275\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Distributed search + analytics engine. In</text><text x=\"275\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">dexes, shards, inverted index. RESTful JS</text><text x=\"275\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ON API. Central to ELK.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Elasticsearch: Distributed search and analytics. I</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nverted index for instant full-text search. ELK st</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ack for logging.</text></svg>",
  "codeExamples": [
    {
      "title": "Elasticsearch Index Management",
      "useCase": "Create index with mapping.",
      "code": "PUT /myapp-logs\n{\"settings\":{\"number_of_shards\":3,\"number_of_replicas\":1},\n\"mappings\":{\"properties\":{\n\"@timestamp\":{\"type\":\"date\"},\n\"level\":{\"type\":\"keyword\"},\n\"message\":{\"type\":\"text\"},\n\"duration_ms\":{\"type\":\"integer\"}}}\n}",
      "description": "Create Elasticsearch index with explicit mapping defining field types."
    },
    {
      "title": "Elasticsearch Query Examples",
      "useCase": "Search and aggregation queries.",
      "code": "GET /myapp-logs-2024.01.15/_search\n{\"query\":{\"bool\":{\"filter\":[\n{\"term\":{\"level\":\"error\"}},\n{\"range\":{\"@timestamp\":{\"gte\":\"now-1h\"}}}\n]}}}",
      "description": "Elasticsearch query: filter context for exact matches and date ranges."
    },
    {
      "title": "Bulk Indexing Logs (Node.js)",
      "useCase": "Indexing log data into Elasticsearch.",
      "code": "const { Client } = require('@elastic/elasticsearch');\nconst client = new Client({ node: \"http://elasticsearch:9200\" });\nasync function bulkIndexLogs(logs) {\n  const body = logs.flatMap(doc => [{ index: { _index: `logs-${new Date().toISOString().slice(0,10)}` }}, doc]);\n  return client.bulk({ refresh: \"wait_for\", body });\n}",
      "description": "Bulk indexing logs into date-based Elasticsearch indices."
    },
    {
      "title": "ILM Policy for Log Indexes",
      "useCase": "Automate index lifecycle.",
      "code": "PUT /_ilm/policy/logs_policy\n{\"policy\":{\"phases\":{\n\"hot\":{\"min_age\":\"0ms\",\"actions\":{\"rollover\":{\"max_size\":\"50GB\",\"max_age\":\"1d\"}}},\n\"warm\":{\"min_age\":\"7d\",\"actions\":{\"forcemerge\":{\"max_num_segments\":1}}},\n\"cold\":{\"min_age\":\"30d\",\"actions\":{\"freeze\":{}}},\n\"delete\":{\"min_age\":\"90d\",\"actions\":{\"delete\":{}}}\n}}}",
      "description": "ILM policy automates index lifecycle: hot -> warm -> cold -> delete."
    },
    {
      "title": "Filebeat Configuration",
      "useCase": "Ship logs to Elasticsearch.",
      "code": "filebeat.inputs:\n  - type: log\n    paths:\n      - /var/log/myapp/*.log\n    json.keys_under_root: true\noutput.elasticsearch:\n  hosts: [\"http://elasticsearch:9200\"]\n  index: \"filebeat-%{+yyyy.MM.dd}\"",
      "description": "Filebeat configuration for shipping JSON logs to Elasticsearch."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the core data structure in Elasticsearch for fast search?",
      "options": [
        "B-tree",
        "Inverted index",
        "Hash table",
        "Binary search"
      ],
      "answer": 1,
      "explanation": "The inverted index maps every unique term to the documents containing it."
    },
    {
      "question": "What is a shard in Elasticsearch?",
      "options": [
        "A search query",
        "A horizontal partition of an index",
        "A server node",
        "A JSON document"
      ],
      "answer": 1,
      "explanation": "A shard is a horizontal partition — each shard is a self-contained Lucene index."
    },
    {
      "question": "What does the ELK stack stand for?",
      "options": [
        "Elasticsearch, Logstash, Kibana",
        "Elastic, Logstash, Kafka",
        "Elasticsearch, Logstash, Kafka",
        "ELK, Linux, Kubernetes"
      ],
      "answer": 0,
      "explanation": "ELK = Elasticsearch (storage), Logstash (processing), Kibana (visualization)."
    },
    {
      "question": "What is ILM in Elasticsearch?",
      "options": [
        "Index Lifecycle Management",
        "Integrated Log Monitoring",
        "Index Label Mapping",
        "Internal Load Manager"
      ],
      "answer": 0,
      "explanation": "ILM automates index transitions through hot -> warm -> cold -> delete phases."
    },
    {
      "question": "What is the difference between text and keyword field types?",
      "options": [
        "text is not indexed",
        "text is analyzed (full-text), keyword is exact",
        "keyword is faster",
        "No difference"
      ],
      "answer": 1,
      "explanation": "text fields are analyzed for full-text search; keyword fields are exact values for aggregations."
    },
    {
      "question": "What does cluster health yellow mean?",
      "options": [
        "All shards healthy",
        "Replica shards not allocated",
        "Primary shards missing",
        "Cluster offline"
      ],
      "answer": 1,
      "explanation": "Yellow means primary shards are allocated but replicas are not."
    }
  ]
};
