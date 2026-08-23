export const mongodb_documents = {
  "id": "mongodb-documents",
  "title": "Documents",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "A MongoDB document is a JSON-like data structure (BSON) composed of field-value pairs, analogous to a row in relational databases.",
    "Documents are stored in collections and can have varying fields (schema-less), supporting nested objects, arrays, and a wide range of data types.",
    "Each document has a unique _id field (ObjectId by default) that serves as the primary key within a collection.",
    "Documents can contain embedded documents (sub-documents) and arrays, enabling rich data modeling without joins."
  ],
  "laymanDefinition": "A MongoDB document is like a passport: it contains various fields (name, photo, stamps) that can be different for each person, and some fields can have sub-information (like visa pages with multiple stamps).",
  "deepDive": [
    {
      "heading": "Document Structure",
      "text": "Documents are BSON objects structured as key-value pairs. Keys are strings, values can be various types: String, Number, Boolean, Date, ObjectId, Array, Embedded Document, Null, Binary, Regex, Code, etc. Maximum document size is 16MB (BSON limit)."
    },
    {
      "heading": "The _id Field",
      "text": "Every document requires a unique _id field as the primary key. By default, MongoDB generates an ObjectId (12-byte value: timestamp + machine + process + counter). You can provide custom _id values (UUIDs, integers, strings). The _id is immutable and indexed automatically."
    },
    {
      "heading": "Dynamic Schema",
      "text": "Documents in the same collection can have different fields. One document may have 10 fields while another has 15. This flexibility (schema-less design) enables rapid iteration and polymorphic data. Use schema validation for data consistency when needed."
    },
    {
      "heading": "BSON Data Types",
      "text": "MongoDB stores data as BSON (Binary JSON), extending JSON with additional types: ObjectId (12-byte unique identifier), Date (millisecond precision), BinData, Regex, Code (JavaScript), Timestamp. BSON enables efficient encoding/decoding and rich query operations."
    },
    {
      "heading": "Document Size and Structure",
      "text": "Max 16MB per document. For large data, use GridFS (splits files into chunks stored as separate documents). Nested documents count toward the 16MB limit. Use references for large or frequently accessed sub-documents."
    }
  ],
  "interviewAnswer": "MongoDB documents are the fundamental unit of data. Their flexible schema, rich data types, and embedded document support make MongoDB adaptable to diverse application needs.",
  "interviewQuestions": [
    {
      "question": "What is a MongoDB document?",
      "answer": "A document is a JSON-like data structure (BSON format) composed of field-value pairs. It is the basic unit of data in MongoDB, analogous to a row in relational databases."
    },
    {
      "question": "What is the _id field?",
      "answer": "The _id field is the primary key for a MongoDB document. It is automatically indexed and must be unique within a collection. Default _id values are ObjectIds (12-byte)."
    },
    {
      "question": "What is the maximum document size?",
      "answer": "16MB. For data exceeding 16MB, use GridFS which splits files into chunks and stores them across multiple documents."
    },
    {
      "question": "What is BSON?",
      "answer": "BSON (Binary JSON) is the binary serialization format MongoDB uses to store documents. It extends JSON with additional types."
    },
    {
      "question": "What is an embedded document?",
      "answer": "An embedded document is a document nested inside another document as a field value. MongoDB supports up to 100 levels of nesting."
    },
    {
      "question": "What data types does MongoDB support?",
      "answer": "String, Number (int, long, double, decimal), Boolean, Date, ObjectId, Array, Embedded Document, Null, Binary Data, Regular Expression, JavaScript Code, Timestamp, Min/Max keys."
    },
    {
      "question": "How is a document different from a JSON object?",
      "answer": "MongoDB documents are stored as BSON which supports more types than JSON (ObjectId, Date, Binary). BSON documents are binary-encoded for efficient parsing."
    },
    {
      "question": "What is document atomicity?",
      "answer": "Write operations are atomic at the document level. If you update multiple fields in a single document, either all changes apply or none."
    },
    {
      "question": "How do you reference another document?",
      "answer": "Store the referenced document\\'s _id as a field value. Use $lookup aggregation stage for joins similar to SQL JOIN."
    },
    {
      "question": "Can a document have no _id?",
      "answer": "No. Every MongoDB document must have an _id field. If not provided, MongoDB generates an ObjectId automatically."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Documents</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Document</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{ field: value }</text><rect x=\"10\" y=\"85\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">_id: ObjectId</text><text x=\"80\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Primary Key</text><rect x=\"10\" y=\"130\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"80\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Embedded Doc</text><text x=\"80\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nested</text><rect x=\"10\" y=\"175\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"80\" y=\"191\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Array Fields</text><text x=\"80\" y=\"204\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[...]</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"103\" x2=\"180\" y2=\"103\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"148\" x2=\"180\" y2=\"148\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"193\" x2=\"180\" y2=\"193\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"160\" height=\"175\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"270\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">BSON Document</text><text x=\"270\" y=\"198\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">16MB / Flexible schema / Rich</text><text x=\"270\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> types</text><text x=\"240\" y=\"230\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Documents: BSON objects with flexible schema, Obje</text><text x=\"240\" y=\"242\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ctId, embedded docs.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Document Structure",
      "useCase": "Simple user document.",
      "code": "{ _id: ObjectId(\"...\"), name: \"Alice\", email: \"alice@example.com\", age: 30, isActive: true }",
      "description": "Simple document with _id, string, number, and boolean fields."
    },
    {
      "title": "Document with Embedded Doc",
      "useCase": "Address nested in user.",
      "code": "{ _id: ObjectId(\"...\"), name: \"Bob\", address: { street: \"123 Main St\", city: \"NYC\", zip: \"10001\" } }",
      "description": "Address is an embedded sub-document within the user document."
    },
    {
      "title": "Document with Array",
      "useCase": "Tags and scores.",
      "code": "{ _id: ObjectId(\"...\"), name: \"Charlie\", tags: [\"developer\", \"nodejs\"], scores: [85, 92, 78] }",
      "description": "Arrays store multiple values. MongoDB supports array queries with $in, $all, $size."
    },
    {
      "title": "Custom _id Value",
      "useCase": "Using UUID as _id.",
      "code": "{ _id: UUID(\"3b241101-e2bb-4255-8caf-4136c566a962\"), name: \"Doc with UUID\", createdAt: new Date() }",
      "description": "Custom _id using UUID instead of default ObjectId. Must be unique."
    },
    {
      "title": "Nested Arrays and Documents",
      "useCase": "Order with items.",
      "code": "{ _id: ObjectId(\"...\"), order: { items: [{ product: \"Widget\", qty: 2, price: 9.99 }], total: 44.97 } }",
      "description": "Arrays can contain embedded documents. Supports queries on nested fields using dot notation."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the basic unit of data in MongoDB?",
      "options": [
        "Collection",
        "Document",
        "Field",
        "Object"
      ],
      "answer": 1,
      "explanation": "Document is the basic unit of data."
    },
    {
      "question": "What is the default _id type?",
      "options": [
        "UUID",
        "String",
        "ObjectId",
        "Integer"
      ],
      "answer": 2,
      "explanation": "Default _id is an ObjectId."
    },
    {
      "question": "What is the maximum document size?",
      "options": [
        "4MB",
        "8MB",
        "16MB",
        "64MB"
      ],
      "answer": 2,
      "explanation": "Maximum document size is 16MB."
    },
    {
      "question": "How does MongoDB store documents?",
      "options": [
        "JSON",
        "XML",
        "BSON",
        "CSV"
      ],
      "answer": 2,
      "explanation": "Documents are stored in BSON format."
    },
    {
      "question": "Are write operations atomic at the document level?",
      "options": [
        "Yes",
        "No",
        "Only for inserts",
        "Only for updates"
      ],
      "answer": 0,
      "explanation": "Write operations are atomic at the single document level."
    },
    {
      "question": "What is an ObjectId composed of?",
      "options": [
        "Random bytes",
        "Timestamp + machine + process + counter",
        "UUID v4",
        "Hash of fields"
      ],
      "answer": 1,
      "explanation": "ObjectId: 4 timestamp, 5 machine/process, 3 counter."
    }
  ]
};
