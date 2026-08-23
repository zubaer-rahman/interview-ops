export const mongodb_atlas = {
  "id": "mongodb-atlas",
  "title": "MongoDB Atlas",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "MongoDB Atlas is a fully managed cloud database service for MongoDB, available on AWS, Azure, and GCP.",
    "Features include automated backups, monitoring, scaling, security (encryption at rest, network isolation), and global cluster deployment.",
    "Atlas Free Tier (M0) provides 512MB storage for learning and prototyping. Paid tiers offer sharded clusters, serverless, and dedicated instances.",
    "Atlas Data Services include Atlas Search (Lucene-based), Atlas Data Lake (query across cloud storage), and Atlas Charts (visualization)."
  ],
  "laymanDefinition": "MongoDB Atlas is like having a team of expert database administrators working for you 24/7. They handle backups, updates, scaling, and security so you can focus on building your application.",
  "deepDive": [
    {
      "heading": "Deployment Options",
      "text": "Shared clusters (M0 free, M2, M5) for low-cost development. Dedicated clusters for production with configurable RAM, storage, and vCPU. Serverless instances auto-scale based on demand. Multi-cloud and multi-region for high availability."
    },
    {
      "heading": "Security Features",
      "text": "Network isolation via VPC peering and IP whitelisting. Encryption at rest with cloud provider KMS. Encryption in transit with TLS. Database auditing. Private endpoints for direct cloud network connections."
    },
    {
      "heading": "Automated Backups",
      "text": "Continuous backups with point-in-time recovery (PITR) to a specific second within the last 24 hours. Snapshot backups for longer retention. Restore to any cluster. Backup data is compressed and encrypted."
    },
    {
      "heading": "Performance Monitoring",
      "text": "Atlas provides real-time performance metrics: operations/second, latency, connections, memory/CPU/disk usage. The Performance Advisor suggests index improvements based on query patterns. Query Profiler shows slow queries with execution stats."
    },
    {
      "heading": "Global Clusters",
      "text": "Distribute data across geographic regions for low-latency reads and writes. Zone-aware sharding aligns data with regional compliance requirements. Cross-region replication for disaster recovery. Global writes with multi-region sharding."
    }
  ],
  "interviewAnswer": "MongoDB Atlas simplifies database management significantly. The free tier is excellent for learning, while production features like automated backups, performance advisor, and global clusters make it suitable for enterprise applications.",
  "interviewQuestions": [
    {
      "question": "What is MongoDB Atlas?",
      "answer": "A fully managed cloud database service for MongoDB. Handles deployments, backups, scaling, monitoring, and security automatically."
    },
    {
      "question": "What cloud providers does Atlas support?",
      "answer": "AWS, Azure, and GCP. You can choose your provider and region, or use multi-cloud configurations."
    },
    {
      "question": "What is the Atlas Free Tier?",
      "answer": "M0 cluster with 512MB storage, shared RAM, and limited IOPS. Suitable for learning, prototyping, and low-traffic applications."
    },
    {
      "question": "What is Atlas Search?",
      "answer": "Full-text search powered by Apache Lucene. Supports faceted search, autocomplete, synonyms, and custom scoring. Indexes are built and managed within Atlas."
    },
    {
      "question": "How does Atlas handle backups?",
      "answer": "Continuous backups with point-in-time recovery (PITR) for dedicated clusters. Snapshot backups with configurable retention. Automated, encrypted, and compressed."
    },
    {
      "question": "What is the Performance Advisor?",
      "answer": "An Atlas feature that analyzes query patterns and suggests index improvements to optimize database performance."
    },
    {
      "question": "What is a global cluster?",
      "answer": "An Atlas cluster deployed across multiple geographic regions for low-latency global access and disaster recovery."
    },
    {
      "question": "How does Atlas ensure security?",
      "answer": "IP whitelisting, VPC peering, encryption at rest and in transit, database auditing, private endpoints, and role-based access control."
    },
    {
      "question": "What are Atlas serverless instances?",
      "answer": "On-demand auto-scaling instances that charge based on usage. No capacity planning needed. Ideal for variable or unpredictable workloads."
    },
    {
      "question": "What is Atlas Data Lake?",
      "answer": "A service that enables querying data stored in cloud object storage (S3, Azure Blob) using the MongoDB query language and aggregation pipeline."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">MongoDB Atlas</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Your App</text><text x=\"70\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Application</text><line x1=\"130\" y1=\"55\" x2=\"160\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"35\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"235\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Atlas API</text><text x=\"235\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Managed API</text><line x1=\"300\" y1=\"53\" x2=\"330\" y2=\"53\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"340\" y=\"35\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"410\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cloud Provider</text><text x=\"410\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">AWS/Azure/GCP</text><rect x=\"170\" y=\"80\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"235\" y=\"96\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backups</text><text x=\"235\" y=\"99\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated</text><rect x=\"170\" y=\"115\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"235\" y=\"131\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Monitoring</text><text x=\"235\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Real-time</text><rect x=\"170\" y=\"150\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"235\" y=\"166\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Security</text><text x=\"235\" y=\"169\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Encryption</text><text x=\"240\" y=\"195\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">MongoDB Atlas: Fully managed cloud MongoDB with ba</text><text x=\"240\" y=\"207\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ckups, monitoring, security.</text></svg>",
  "codeExamples": [
    {
      "title": "Connect to Atlas",
      "useCase": "Connection string format.",
      "code": "const { MongoClient } = require('mongodb');\nconst uri = \"mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/myDB?retryWrites=true&w=majority\";\nconst client = new MongoClient(uri);\nawait client.connect();",
      "description": "Connection URI format for Atlas with srv protocol and TLS."
    },
    {
      "title": "Create Atlas Index",
      "useCase": "Using Atlas Search.",
      "code": "// In Atlas UI or via API:\n// Create search index on \"articles\" collection\n{\n  \"mappings\": {\n    \"dynamic\": true\n  }\n}",
      "description": "Creates an Atlas Search index with dynamic field mapping."
    },
    {
      "title": "Atlas Search Query",
      "useCase": "Using $search stage.",
      "code": "await db.collection('articles').aggregate([\n  { $search: {\n    text: { query: \"mongodb\", path: \"title\" }\n  }},\n  { $limit: 10 }\n]).toArray();",
      "description": "Atlas Search $search aggregation stage for full-text search."
    },
    {
      "title": "PITR Restore",
      "useCase": "Point-in-time recovery.",
      "code": "// Atlas UI > Clusters > Restore\n// Select timestamp to restore to\n// Choose: restore to same cluster or new cluster\n// Atlas replays oplog to reach exact point in time",
      "description": "Atlas PITR restores data to any second within the backup window."
    },
    {
      "title": "Atlas Trigger",
      "useCase": "React to database changes.",
      "code": "// Atlas UI > Triggers > Add Trigger\n// Select collection, operation type (insert, update, delete)\n// Link to Atlas Function (serverless JS)\nexports = function(changeEvent) {\n  console.log(changeEvent.fullDocument);\n};",
      "description": "Atlas Triggers automatically run serverless functions on database events."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is MongoDB Atlas?",
      "options": [
        "A MongoDB GUI",
        "A managed cloud DB service",
        "An ORM tool",
        "A testing framework"
      ],
      "answer": 1,
      "explanation": "Atlas is a managed cloud database service."
    },
    {
      "question": "What cloud providers does Atlas support?",
      "options": [
        "AWS only",
        "AWS, Azure, GCP",
        "Azure only",
        "GCP only"
      ],
      "answer": 1,
      "explanation": "Atlas supports AWS, Azure, and GCP."
    },
    {
      "question": "What is Atlas Free Tier storage?",
      "options": [
        "128MB",
        "512MB",
        "1GB",
        "5GB"
      ],
      "answer": 1,
      "explanation": "M0 Free Tier provides 512MB storage."
    },
    {
      "question": "What search engine powers Atlas Search?",
      "options": [
        "Elasticsearch",
        "Apache Lucene",
        "Solr",
        "Algolia"
      ],
      "answer": 1,
      "explanation": "Atlas Search is powered by Apache Lucene."
    },
    {
      "question": "What suggests index improvements?",
      "options": [
        "Query Profiler",
        "Performance Advisor",
        "Index Analyzer",
        "Explain Plan"
      ],
      "answer": 1,
      "explanation": "Atlas Performance Advisor suggests index improvements."
    },
    {
      "question": "What does PITR stand for?",
      "options": [
        "Point-in-Time Recovery",
        "Primary Index Table Rebuild",
        "Performance Integration Test Report",
        "Process Instruction Trace Route"
      ],
      "answer": 0,
      "explanation": "PITR is Point-in-Time Recovery for precise data restoration."
    }
  ]
};
