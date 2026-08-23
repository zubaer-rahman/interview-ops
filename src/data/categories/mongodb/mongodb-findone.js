export const mongodb_findone = {
  "id": "mongodb-findone",
  "title": "findOne()",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "findOne() returns the first document matching a filter, or null if no match is found.",
    "It is a convenience method that internally calls find(filter).limit(1) and returns the first document or null.",
    "Useful for single-document lookups by _id, unique fields (email, username), or when expecting at most one result.",
    "Unlike find(), findOne() returns a document directly, not a cursor, and supports projection and sort options."
  ],
  "laymanDefinition": "findOne() is like looking up a single person in a directory by their exact name. You get that person's details or a \"not found\" message.",
  "deepDive": [
    {
      "heading": "Return Value",
      "text": "Returns the matched document as an object or null if not found. No cursor iteration needed. The document includes all fields unless projection is specified."
    },
    {
      "heading": "Options Parameter",
      "text": "Second parameter accepts options: projection (field selection), sort (order for first match), collation (language rules), hint (index hint), maxTimeMS (timeout), readConcern, comment."
    },
    {
      "heading": "Typical Use Cases",
      "text": "User lookup by _id or email: findOne({ _id: userId }). Session validation: findOne({ sessionToken }). Configuration retrieval: findOne({ key: \\'config\\' }). Existence check."
    },
    {
      "heading": "Performance",
      "text": "Fast for single document lookups, especially with a unique index on the filter field. Automatically limits to 1 document. Use with projection to minimize data transfer."
    },
    {
      "heading": "Error Handling",
      "text": "Returns null when no document matches. Always check for null before accessing document properties. Throws on invalid ObjectId strings or network errors."
    }
  ],
  "interviewAnswer": "findOne() is the go-to method for retrieving a single document. Its simplicity and direct return value make it perfect for lookups by unique identifiers.",
  "interviewQuestions": [
    {
      "question": "What does findOne() return?",
      "answer": "The first matching document as an object, or null if no document matches the filter."
    },
    {
      "question": "How is findOne() implemented internally?",
      "answer": "It is equivalent to find(filter).limit(1) with the cursor immediately returning the first document or null."
    },
    {
      "question": "When should you use findOne vs find?",
      "answer": "Use findOne when expecting at most one result (by _id, email). Use find when expecting multiple results (all active users)."
    },
    {
      "question": "What options does findOne accept?",
      "answer": "projection, sort, collation, hint, maxTimeMS, readConcern, comment."
    },
    {
      "question": "Does findOne work with compound filters?",
      "answer": "Yes, pass any valid filter object: findOne({ status: \"active\", role: \"admin\" })."
    },
    {
      "question": "What happens if no document matches?",
      "answer": "Returns null. Always check for null: if (!doc) { /* not found */ }."
    },
    {
      "question": "Can you sort with findOne?",
      "answer": "Yes. The sort option determines which document is returned when multiple match: findOne(filter, { sort: { createdAt: -1 } })."
    },
    {
      "question": "How do you exclude fields?",
      "answer": "Use projection with 0: findOne({ _id: id }, { projection: { password: 0, token: 0 } })."
    },
    {
      "question": "Is findOne() atomic?",
      "answer": "No, it is a read operation. For atomic read-and-modify, use findOneAndUpdate() or findOneAndDelete()."
    },
    {
      "question": "What is findOneAndUpdate?",
      "answer": "A method that finds a document, updates it atomically, and returns the original or updated document based on options."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">findOne()</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">findOne(filter)</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"130\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"255\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Match?</text><text x=\"255\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check exists</text><line x1=\"320\" y1=\"58\" x2=\"350\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"90\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Yes -> Doc</text><text x=\"60\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return Object</text><rect x=\"120\" y=\"90\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"170\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">No -> null</text><text x=\"170\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return null</text><text x=\"240\" y=\"160\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">findOne(): Returns document or null. Simple, direc</text><text x=\"240\" y=\"172\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">t single-document lookup.</text></svg>",
  "codeExamples": [
    {
      "title": "Lookup by ID",
      "useCase": "Find user by _id.",
      "code": "const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });\nif (!user) return res.status(404).json({ error: 'User not found' });",
      "description": "Looks up user by ObjectId, handles not found case."
    },
    {
      "title": "With Projection",
      "useCase": "Exclude sensitive fields.",
      "code": "const user = await db.collection('users').findOne(\n  { email: \"alice@example.com\" },\n  { projection: { password: 0, token: 0 } }\n);",
      "description": "Returns user without password and token fields."
    },
    {
      "title": "Find Latest Document",
      "useCase": "Using sort option.",
      "code": "const latest = await db.collection('orders').findOne(\n  { status: \"completed\" },\n  { sort: { completedAt: -1 } }\n);",
      "description": "Returns the most recently completed order."
    },
    {
      "title": "Existence Check",
      "useCase": "Verify if document exists.",
      "code": "const exists = await db.collection('products').findOne({ sku: \"WIDGET-001\" }, { projection: { _id: 1 } });\nif (exists) { /* product exists */ }",
      "description": "Efficient existence check with minimal projection."
    },
    {
      "title": "findOneAndUpdate",
      "useCase": "Atomic read-modify-write.",
      "code": "const doc = await db.collection('counters').findOneAndUpdate(\n  { _id: \"orderNumber\" },\n  { $inc: { seq: 1 } },\n  { returnDocument: 'after' }\n);\nconsole.log(doc.seq); // Incremented value",
      "description": "Atomically increments a counter and returns the new value."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does findOne() return when no match?",
      "options": [
        "{}",
        "undefined",
        "null",
        "false"
      ],
      "answer": 2,
      "explanation": "Returns null when no document matches."
    },
    {
      "question": "How does findOne() differ from find()?",
      "options": [
        "Returns cursor",
        "Returns document or null",
        "Returns array",
        "Returns boolean"
      ],
      "answer": 1,
      "explanation": "findOne() returns document or null, find() returns cursor."
    },
    {
      "question": "Which option controls field selection?",
      "options": [
        "sort",
        "projection",
        "collation",
        "hint"
      ],
      "answer": 1,
      "explanation": "projection controls which fields are returned."
    },
    {
      "question": "What method provides atomic read-and-modify?",
      "options": [
        "findOne",
        "findOneAndUpdate",
        "findAndModify",
        "updateOne"
      ],
      "answer": 1,
      "explanation": "findOneAndUpdate provides atomic read-and-modify."
    },
    {
      "question": "How do you exclude a field?",
      "options": [
        "field: 0",
        "field: -1",
        "field: false",
        "exclude: true"
      ],
      "answer": 0,
      "explanation": "Set field to 0 in projection to exclude."
    },
    {
      "question": "Can findOne accept sort?",
      "options": [
        "Yes",
        "No",
        "Only with index",
        "Only for ObjectId"
      ],
      "answer": 0,
      "explanation": "Yes, sort determines which doc returns when multiple match."
    }
  ]
};
