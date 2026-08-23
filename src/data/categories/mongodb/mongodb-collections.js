export const mongodb_collections = {
  "id": "mongodb-collections",
  "title": "Collections",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "Collections are groupings of MongoDB documents, analogous to tables in relational databases but without a fixed schema.",
    "Collections are created implicitly when the first document is inserted, or explicitly using db.createCollection() with options.",
    "Unlike SQL tables, collections do not enforce a schema; documents within a collection can have different fields and structures.",
    "Collections support options: capped (fixed-size, FIFO), collation (language-specific sorting), validation, and TTL indexes."
  ],
  "laymanDefinition": "A collection is like a folder on your computer. You can put different types of files (documents) in the same folder, each with different content and structure.",
  "deepDive": [
    {
      "heading": "Implicit vs Explicit Creation",
      "text": "Collections are created automatically when you insert a document into a non-existent collection. For custom options, use db.createCollection(\\'name\\', { options }). Options must be set at creation time. Dropping and recreating is the only way to change options."
    },
    {
      "heading": "Capped Collections",
      "text": "Fixed-size collections that maintain insertion order and automatically remove oldest documents when size limit is reached. Useful for logging, cache data, and real-time analytics. Operations on capped collections are generally faster. Cannot be sharded."
    },
    {
      "heading": "Collection Options",
      "text": "capped (boolean + size + max documents), collation (locale, strength for sorting), validation (validator expression, validationLevel, validationAction), viewOn (create as view), pipeline (aggregation for views). Options are set at creation and cannot be modified."
    },
    {
      "heading": "Schema Validation",
      "text": "MongoDB 3.2+ supports schema validation using JSON Schema or query operators. Options: validator (validation rules), validationLevel (strict, moderate, off), validationAction (error, warn). Apply validation to enforce data quality while maintaining schema flexibility."
    },
    {
      "heading": "Collections vs SQL Tables",
      "text": "Collections do not require schema definition. Documents can have different fields. No foreign key constraints. No JOIN support natively (use $lookup). Collections are more flexible but require application-level integrity."
    }
  ],
  "interviewAnswer": "Collections are containers for MongoDB documents. While they offer schema flexibility, adding schema validation provides structure when needed.",
  "interviewQuestions": [
    {
      "question": "What is a MongoDB collection?",
      "answer": "A collection is a group of MongoDB documents, similar to a table in relational databases. Collections do not enforce a schema."
    },
    {
      "question": "How are collections created?",
      "answer": "Implicitly on first insert, or explicitly using db.createCollection(\\'name\\', { options }). Explicit creation is needed for capped collections and validation rules."
    },
    {
      "question": "What is a capped collection?",
      "answer": "A fixed-size collection that maintains insertion order. When full, oldest documents are automatically removed. Ideal for logs and cache."
    },
    {
      "question": "What is schema validation?",
      "answer": "Defining rules for document structure using JSON Schema or query operators. Set at collection creation using $jsonSchema."
    },
    {
      "question": "What is the difference between a collection and a SQL table?",
      "answer": "Collections have no fixed schema, no foreign keys, no native JOINs, and support nested/array data natively."
    },
    {
      "question": "Can you change collection options after creation?",
      "answer": "Most options cannot be modified after creation. Drop and recreate to change. Validation rules can be modified with collMod."
    },
    {
      "question": "What is collation?",
      "answer": "Language-specific rules for string comparison. Options include locale, strength (accent/case sensitivity). Set at collection or operation level."
    },
    {
      "question": "How do you list all collections?",
      "answer": "Use db.getCollectionNames() or show collections in the shell. For Node.js: db.listCollections().toArray()."
    },
    {
      "question": "What is a TTL index?",
      "answer": "An index on a Date field that automatically removes documents after a specified number of seconds. Useful for session data."
    },
    {
      "question": "How do you rename a collection?",
      "answer": "Use db.collection.renameCollection(\\'newName\\'). Cannot rename across databases."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Collections</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collection</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Documents Group</text><rect x=\"10\" y=\"85\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Implicit</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto-created</text><rect x=\"10\" y=\"130\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Explicit</text><text x=\"80\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">db.createCollection()</text><rect x=\"10\" y=\"175\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Options</text><text x=\"80\" y=\"204\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Capped/Validation</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"103\" x2=\"180\" y2=\"103\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"148\" x2=\"180\" y2=\"148\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"193\" x2=\"180\" y2=\"193\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"200\" height=\"175\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"290\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Collection Features</text><text x=\"290\" y=\"198\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Schema-less / Capped / Validation / </text><text x=\"290\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">TTL / Collation</text><text x=\"240\" y=\"230\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Collections: Group documents, create implicitly/wi</text><text x=\"240\" y=\"242\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">th options, schema validation.</text></svg>",
  "codeExamples": [
    {
      "title": "Implicit Creation",
      "useCase": "Insert into non-existent collection.",
      "code": "db.users.insertOne({ name: \"Alice\" }); // Creates \"users\" collection",
      "description": "Collection created automatically on first insert."
    },
    {
      "title": "Explicit Capped Collection",
      "useCase": "1MB max, 5000 docs max.",
      "code": "db.createCollection(\"logs\", { capped: true, size: 1048576, max: 5000 });",
      "description": "Creates capped collection limited to 1MB and 5000 documents."
    },
    {
      "title": "Schema Validation",
      "useCase": "Enforcing structure with $jsonSchema.",
      "code": "db.createCollection(\"users\", { validator: { $jsonSchema: { bsonType: \"object\", required: [\"name\", \"email\"], properties: { name: { bsonType: \"string\" }, email: { bsonType: \"string\" } } } } });",
      "description": "Enforces required fields using JSON Schema validation."
    },
    {
      "title": "TTL Index",
      "useCase": "Auto-expire after 24 hours.",
      "code": "db.session.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 });",
      "description": "Documents auto-removed 24 hours after createdAt."
    },
    {
      "title": "Collation",
      "useCase": "Case-insensitive sorting.",
      "code": "db.createCollection(\"articles\", { collation: { locale: \"en\", strength: 2 } });",
      "description": "Collation enables case-insensitive string comparison."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How are collections created by default?",
      "options": [
        "Explicitly by user",
        "Implicitly on first insert",
        "Only via createCollection",
        "On database creation"
      ],
      "answer": 1,
      "explanation": "Collections are created implicitly on first insert."
    },
    {
      "question": "What is a capped collection?",
      "options": [
        "Unlimited size",
        "Fixed-size, auto-removes oldest",
        "Encrypted",
        "Temporary"
      ],
      "answer": 1,
      "explanation": "Capped collections auto-remove oldest documents when full."
    },
    {
      "question": "What does schema validation do?",
      "options": [
        "Creates indexes",
        "Validates document structure",
        "Speeds up queries",
        "Replicates data"
      ],
      "answer": 1,
      "explanation": "Schema validation enforces document structure rules."
    },
    {
      "question": "When is explicit creation required?",
      "options": [
        "Always",
        "For capped/validation",
        "For simple collections",
        "Never"
      ],
      "answer": 1,
      "explanation": "Explicit creation needed for capped, validation, collation."
    },
    {
      "question": "What does collation define?",
      "options": [
        "Document relationships",
        "Sorting rules",
        "Index types",
        "Replication"
      ],
      "answer": 1,
      "explanation": "Collation defines language-specific sorting rules."
    },
    {
      "question": "Which is NOT a collection type?",
      "options": [
        "Capped",
        "Regular",
        "Sharded",
        "Encrypted"
      ],
      "answer": 3,
      "explanation": "Encrypted is not a collection type. Sharded collections exist."
    }
  ]
};
