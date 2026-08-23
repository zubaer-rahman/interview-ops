export const mongodb_bson = {
  "id": "mongodb-bson",
  "title": "BSON",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "BSON (Binary JSON) is the binary serialization format MongoDB uses to store documents and communicate between clients and servers.",
    "BSON extends JSON with additional data types: ObjectId, Date, Int32, Int64, Double, Decimal128, Binary, Regex, JavaScript Code, Timestamp.",
    "BSON is designed for fast traversal, efficient encoding/decoding, and supports rich querying with type-specific operators.",
    "The Node.js BSON library provides serialization/deserialization for MongoDB drivers and can be used independently."
  ],
  "laymanDefinition": "BSON is like a special postal code for MongoDB. It converts readable data into a compact binary format that MongoDB can process very quickly, while supporting special types like dates and IDs that regular JSON cannot.",
  "deepDive": [
    {
      "heading": "BSON vs JSON",
      "text": "BSON is binary, JSON is text. BSON supports more types (ObjectId, Date, Binary). BSON encodes/decodes faster. BSON is slightly larger than JSON for simple data due to type metadata. BSON supports null bytes for efficient field skipping."
    },
    {
      "heading": "BSON Data Types",
      "text": "String (UTF-8), Double (64-bit), Int32, Int64, Decimal128, Boolean, Date (ms since epoch), ObjectId (12 bytes), Binary, Regex, JavaScript, Timestamp, Null, Min/Max keys, Array, Embedded Document."
    },
    {
      "heading": "ObjectId Structure",
      "text": "12 bytes: 4-byte timestamp (seconds since Unix epoch), 5-byte random value (machine + process), 3-byte incrementing counter. ObjectIds are generated client-side, enabling distributed ID generation without coordination."
    },
    {
      "heading": "Decimal128 for Financial Data",
      "text": "128-bit decimal floating-point representation. Provides exact precision for financial calculations. Avoids floating-point rounding errors (0.1 + 0.2 !== 0.3). Use for monetary values and tax calculations."
    },
    {
      "heading": "BSON Binary Subtypes",
      "text": "Generic (0), Function (1), Binary Old (2), UUID Old (3), UUID (4), MD5 (5), Encrypted (6), Column (7), Sensitive (8). Use UUID subtype 4 for standard UUID representation."
    }
  ],
  "interviewAnswer": "BSON is the foundation of MongoDB's performance and flexibility. Understanding BSON types is essential for efficient schema design and correct data handling.",
  "interviewQuestions": [
    {
      "question": "What is BSON?",
      "answer": "Binary JSON, the binary serialization format MongoDB uses. Extends JSON with additional types like ObjectId, Date, Decimal128."
    },
    {
      "question": "How is BSON different from JSON?",
      "answer": "BSON is binary (faster parse), supports more types, includes field length prefixes for fast traversal, and is slightly larger due to type metadata."
    },
    {
      "question": "What is an ObjectId?",
      "answer": "A 12-byte BSON type used as default _id. Composed of timestamp (4 bytes) + random (5 bytes) + counter (3 bytes). Generated client-side."
    },
    {
      "question": "When should you use Decimal128?",
      "answer": "For monetary values and financial calculations requiring exact decimal precision. Avoids floating-point rounding errors."
    },
    {
      "question": "What is the BSON size limit?",
      "answer": "16MB for documents. BSON objects have a 32-bit size field, limiting to ~4GB theoretically."
    },
    {
      "question": "What BSON type for UUIDs?",
      "answer": "UUID subtype 4 is the standard BSON binary subtype for UUIDs."
    },
    {
      "question": "How does BSON handle dates?",
      "answer": "BSON Date is a 64-bit integer representing milliseconds since Unix epoch. Stored in UTC."
    },
    {
      "question": "What are MinKey and MaxKey?",
      "answer": "Special BSON types that compare less than or greater than all other values. Used in sharding range boundaries."
    },
    {
      "question": "How to serialize BSON in Node.js?",
      "answer": "Use the mongodb driver BSON library: const { serialize, deserialize } = require(\\'bson\\');"
    },
    {
      "question": "What is the Timestamp BSON type?",
      "answer": "A 64-bit value used internally by MongoDB for replication oplog entries. Not recommended for application use."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">BSON</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">JSON Text</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{\"name\":\"Bob\"}</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">BSON Binary</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Binary Encode</text><line x1=\"330\" y1=\"58\" x2=\"360\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Types</text><text x=\"420\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">+ObjectId +Date</text><rect x=\"230\" y=\"105\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"300\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Faster Parsing</text><text x=\"300\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Traversable</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">BSON: Binary JSON with extended types, fast parsin</text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">g, compact storage.</text></svg>",
  "codeExamples": [
    {
      "title": "Creating ObjectId",
      "useCase": "Generate and use ObjectId.",
      "code": "const { ObjectId } = require('mongodb');\nconst id = new ObjectId();\nconsole.log(id.getTimestamp()); // Creation date",
      "description": "ObjectIds are generated client-side with embedded timestamp."
    },
    {
      "title": "Using Decimal128",
      "useCase": "Precise monetary value.",
      "code": "const { Decimal128 } = require('mongodb');\nconst price = Decimal128.fromString(\"19.99\");\ndb.products.insertOne({ name: \"Widget\", price });",
      "description": "Decimal128 provides exact precision for financial data."
    },
    {
      "title": "BSON Date",
      "useCase": "Working with dates.",
      "code": "db.events.insertOne({ event: \"Conference\", date: new Date(\"2025-01-15T10:30:00Z\"), timestamp: new Date() });",
      "description": "Dates stored as 64-bit integer (ms since epoch)."
    },
    {
      "title": "UUID Binary",
      "useCase": "Storing UUID as subtype 4.",
      "code": "const { UUID } = require('mongodb');\nconst uuid = UUID.createFromHexString(\"3b241101-e2bb-4255-8caf-4136c566a962\");\ndb.docs.insertOne({ _id: uuid, data: \"Content\" });",
      "description": "UUID subtype provides standard UUID storage."
    },
    {
      "title": "Manual BSON Serialization",
      "useCase": "Convert JS to BSON buffer.",
      "code": "const BSON = require('bson');\nconst doc = { name: \"Alice\", age: 30 };\nconst buf = BSON.serialize(doc);\nconst restored = BSON.deserialize(buf);",
      "description": "Serialize JS object to BSON binary and back."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does BSON stand for?",
      "options": [
        "Binary SQL Object Notation",
        "Binary JSON",
        "Basic Structured Object Notation",
        "Big Serialized Object Notation"
      ],
      "answer": 1,
      "explanation": "BSON stands for Binary JSON."
    },
    {
      "question": "How many bytes is an ObjectId?",
      "options": [
        "4",
        "8",
        "12",
        "16"
      ],
      "answer": 2,
      "explanation": "ObjectId is 12 bytes."
    },
    {
      "question": "Which BSON type provides exact decimal precision?",
      "options": [
        "Double",
        "Int64",
        "Decimal128",
        "NumberDecimal"
      ],
      "answer": 2,
      "explanation": "Decimal128 provides 128-bit decimal precision."
    },
    {
      "question": "What is the document size limit?",
      "options": [
        "4MB",
        "8MB",
        "16MB",
        "32MB"
      ],
      "answer": 2,
      "explanation": "MongoDB enforces 16MB document limit."
    },
    {
      "question": "How does BSON Date store values?",
      "options": [
        "String",
        "Milliseconds since epoch",
        "Seconds since epoch",
        "ObjectId"
      ],
      "answer": 1,
      "explanation": "BSON Date stores ms since Unix epoch."
    },
    {
      "question": "Which types compare as less/greater than all others?",
      "options": [
        "Null/Undefined",
        "MinKey/MaxKey",
        "Boolean/Number",
        "String/Object"
      ],
      "answer": 1,
      "explanation": "MinKey/MaxKey compare as less/greater than all types."
    }
  ]
};
