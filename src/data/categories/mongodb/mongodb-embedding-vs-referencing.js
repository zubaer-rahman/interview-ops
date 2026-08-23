export const mongodb_embedding_vs_referencing = {
  "id": "mongodb-embedding-vs-referencing",
  "title": "Embedding vs Referencing",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Embedding stores related data directly within a document. Referencing stores the _id of related documents for lookup via $lookup or application code.",
    "Embedding: better read performance (single query), data locality, atomic updates. Referencing: better for large data, unbounded growth, independent updates.",
    "Choose embedding for one-to-few and tightly-coupled data. Choose referencing for one-to-many, many-to-many, and loosely-coupled data.",
    "The decision impacts query patterns, write performance, data consistency, and application complexity."
  ],
  "laymanDefinition": "Embedding is like keeping your passport and visa together in a single document wallet — everything you need is in one place. Referencing is like keeping files in different folders with cross-reference notes.",
  "deepDive": [
    {
      "heading": "Embedding Advantages",
      "text": "Single query retrieves all related data. No joins needed. Atomic updates on all embedded data. Better read performance for co-located data. No additional round trips. Simpler application logic for tightly-coupled data."
    },
    {
      "heading": "Embedding Disadvantages",
      "text": "Document size limit (16MB). Unbounded arrays cause growth. Cannot query embedded data independently. Duplicate data causes inconsistency risk. Writes to embedded arrays regenerate the entire document."
    },
    {
      "heading": "Referencing Advantages",
      "text": "No document size pressure. Independent queries and updates. Efficient for large sub-documents. Better for many-to-many relationships. Data stored once (no duplication)."
    },
    {
      "heading": "Referencing Disadvantages",
      "text": "Multiple queries needed (or $lookup). Eventual consistency across collections. More complex application code. Additional indexes needed on foreign keys. Read performance depends on lookup efficiency."
    },
    {
      "heading": "Decision Framework",
      "text": "One-to-one: embed (if small) or reference (if large). One-to-few: embed (addresses, tags). One-to-many: reference (posts, comments). Many-to-many: reference. Always-growing arrays: reference (comments, reviews). Frequently read together: embed. Independently queried: reference."
    }
  ],
  "interviewAnswer": "The embedding vs referencing decision is the most important schema design choice in MongoDB. It determines read/write performance, data consistency, and application complexity.",
  "interviewQuestions": [
    {
      "question": "What is embedding?",
      "answer": "Storing related data directly within a document as a nested sub-document or array."
    },
    {
      "question": "What is referencing?",
      "answer": "Storing the _id of related documents. Related data is retrieved via $lookup or application-level queries."
    },
    {
      "question": "When should you embed?",
      "answer": "One-to-few relationships, data always accessed together, small sub-documents, tightly-coupled data that changes together."
    },
    {
      "question": "When should you reference?",
      "answer": "Unbounded arrays, large sub-documents, many-to-many, data independently queried, loosely-coupled data."
    },
    {
      "question": "What is the 16MB limit concern?",
      "answer": "Embedded arrays can grow beyond 16MB. Reference instead for large or growing data sets."
    },
    {
      "question": "How does embedding affect write performance?",
      "answer": "Updates to embedded data rewrite the entire document. For arrays with many elements, this is less efficient than referencing."
    },
    {
      "question": "How does referencing affect read performance?",
      "answer": "Requires additional queries or $lookup. Can use indexes but still slower than a single document read."
    },
    {
      "question": "What is the consistency trade-off?",
      "answer": "Embedding: atomic updates on all embedded data. Referencing: eventual consistency across collections (unless using transactions)."
    },
    {
      "question": "How do you handle one-to-one relationships?",
      "answer": "Embed if the sub-document is small and always accessed. Reference if the sub-document is large or independently managed."
    },
    {
      "question": "How do you handle one-to-many with referencing?",
      "answer": "Store the child\\'s _id in the parent (postIds array) or store the parent\\'s _id in the child (userId field). The latter is more scalable for large sets."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Embedding vs Referencing</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Embedding</text><text x=\"80\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Nested in document</text><line x1=\"150\" y1=\"55\" x2=\"170\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"35\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Advantages</text><text x=\"250\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fast reads, atomic</text><line x1=\"180\" y1=\"70\" x2=\"180\" y2=\"90\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"95\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"250\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Disadvantages</text><text x=\"250\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">16MB limit, growth</text><line x1=\"150\" y1=\"120\" x2=\"170\" y2=\"120\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"130\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"80\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Referencing</text><text x=\"80\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">By _id</text><line x1=\"150\" y1=\"145\" x2=\"170\" y2=\"145\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"130\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Advantages</text><text x=\"250\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No size limit, flexible</text><line x1=\"180\" y1=\"165\" x2=\"180\" y2=\"185\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"190\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"250\" y=\"206\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Disadvantages</text><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Slower reads, complex</text><text x=\"240\" y=\"230\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Embedding vs Referencing: Trade-off between read p</text><text x=\"240\" y=\"242\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">erformance and flexibility.</text></svg>",
  "codeExamples": [
    {
      "title": "Embedding Example",
      "useCase": "Orders with line items.",
      "code": "{\n  _id: ObjectId(\"order1\"),\n  customerName: \"Alice\",\n  items: [\n    { product: \"Widget\", qty: 2, price: 9.99 },\n    { product: \"Gadget\", qty: 1, price: 24.99 }\n  ],\n  total: 44.97\n}",
      "description": "Line items embedded within order (one-to-few, always read together)."
    },
    {
      "title": "Referencing Example",
      "useCase": "Posts and comments.",
      "code": "// Post document\n{ _id: ObjectId(\"post1\"), title: \"My Post\", content: \"...\" }\n// Comment documents (reference post)\n{ _id: ObjectId(\"c1\"), postId: ObjectId(\"post1\"), text: \"Great!\", userId: ObjectId(\"u1\") }",
      "description": "Comments reference the post. Comments grow unboundedly — reference is correct."
    },
    {
      "title": "Hybrid: Summary Field",
      "useCase": "Comment count in post.",
      "code": "// Post document with denormalized count\n{ _id: ObjectId(\"post1\"), title: \"My Post\", commentCount: 5 }\n// Update count when comment added\nawait db.posts.updateOne({ _id: postId }, { $inc: { commentCount: 1 } });",
      "description": "Stores comment count in post (denormalized). Actual comments are referenced."
    },
    {
      "title": "One-to-Many with Parent Pointer",
      "useCase": "Orders reference user.",
      "code": "// Order stores userId (parent pointer)\n{ _id: ObjectId(\"o1\"), userId: ObjectId(\"u1\"), total: 44.97 }\n// Query user's orders:\ndb.orders.find({ userId: userId }).sort({ createdAt: -1 })",
      "description": "Order stores userId. Scalable for large order sets per user."
    },
    {
      "title": "Many-to-Many with References",
      "useCase": "Students and courses.",
      "code": "// Student stores enrolled course IDs\n{ _id: ObjectId(\"s1\"), name: \"Alice\", courseIds: [ObjectId(\"c1\"), ObjectId(\"c2\")] }\n// Course stores enrolled student IDs\n{ _id: ObjectId(\"c1\"), name: \"MongoDB\", studentIds: [ObjectId(\"s1\")] }\n// Query via $lookup or application code",
      "description": "Many-to-many: both sides store references to the other."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is embedding?",
      "options": [
        "Storing _id references",
        "Storing data in same document",
        "Indexing fields",
        "Sharding data"
      ],
      "answer": 1,
      "explanation": "Embedding stores related data within a document."
    },
    {
      "question": "When is referencing preferred?",
      "options": [
        "Tightly-coupled data",
        "Unbounded arrays",
        "Few sub-documents",
        "Atomic updates needed"
      ],
      "answer": 1,
      "explanation": "Reference for unbounded arrays and large sub-documents."
    },
    {
      "question": "What is a disadvantage of embedding?",
      "options": [
        "No atomic updates",
        "16MB document limit",
        "No indexes",
        "Slow writes"
      ],
      "answer": 1,
      "explanation": "Embedding has the 16MB document size constraint."
    },
    {
      "question": "What is a disadvantage of referencing?",
      "options": [
        "16MB limit",
        "Multiple queries needed",
        "No atomic writes",
        "Slow indexing"
      ],
      "answer": 1,
      "explanation": "Referencing requires additional queries for related data."
    },
    {
      "question": "How do you handle one-to-few?",
      "options": [
        "Always reference",
        "Embed (addresses, tags)",
        "Shard",
        "Index separately"
      ],
      "answer": 1,
      "explanation": "Embed for one-to-few relationships."
    },
    {
      "question": "What is a parent pointer?",
      "options": [
        "Embedding parent data",
        "Child stores parent _id",
        "Parent stores all child _ids",
        "Storing both ways"
      ],
      "answer": 1,
      "explanation": "Parent pointer: child document stores the parent\\'s _id."
    }
  ]
};
