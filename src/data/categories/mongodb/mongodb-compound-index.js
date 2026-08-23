export const mongodb_compound_index = {
  "id": "mongodb-compound-index",
  "title": "Compound Index",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "A compound index indexes multiple fields. Field order determines which queries it supports.",
    "Supports queries on any prefix (ESR rule: Equality, Sort, Range).",
    "Covered queries when all needed fields are in the index.",
    "Use for multi-field queries and sorting without index intersection."
  ],
  "laymanDefinition": "A compound index is like a phone book sorted by last name then first name. You can look up by last name (prefix) but not by first name alone.",
  "deepDive": [
    {
      "heading": "ESR Rule",
      "text": "Equality fields first, Sort fields second, Range fields third. Maximizes index usage for common query patterns."
    },
    {
      "heading": "Prefix Principle",
      "text": "Index on {a,b,c} supports {a}, {a,b}, {a,b,c}. Does NOT support {b} or {c} alone."
    },
    {
      "heading": "Covered Queries",
      "text": "All query fields in the index. MongoDB reads only the index, no document access. Use projection."
    },
    {
      "heading": "Sort Support",
      "text": "Index supports sort if order matches index direction. { a: 1, b: -1 } supports sort({ a: 1, b: -1 })."
    },
    {
      "heading": "Index Cardinality",
      "text": "High-cardinality fields first for better selectivity. email before status."
    }
  ],
  "interviewAnswer": "Compound indexes are the most powerful index type. Mastering ESR and prefix principle is essential.",
  "interviewQuestions": [
    {
      "question": "What is a compound index?",
      "answer": "Index on multiple fields. Field order determines query support."
    },
    {
      "question": "What is ESR rule?",
      "answer": "Equality first, Sort second, Range third. Optimal field ordering."
    },
    {
      "question": "What is prefix principle?",
      "answer": "Index supports queries on leading prefixes. {a,b,c} supports {a}, {a,b}, not {b}."
    },
    {
      "question": "What is a covered query?",
      "answer": "All queried fields in the index. No document access needed."
    },
    {
      "question": "How do compound indexes support sort?",
      "answer": "Sort order matching index order returns sorted results without in-memory sort."
    },
    {
      "question": "Which field first?",
      "answer": "High-cardinality equality field for maximum selectivity."
    },
    {
      "question": "Can fields have different sort directions?",
      "answer": "Yes: { a: 1, b: -1 }. Sort must match exact direction."
    },
    {
      "question": "How to choose compound index fields?",
      "answer": "Analyze query patterns. Index for frequent queries."
    },
    {
      "question": "Max fields?",
      "answer": "32. Keep to 2-5 for maintainability."
    },
    {
      "question": "How does field order affect range?",
      "answer": "Range fields after equality and sort. Early range prevents efficient use of subsequent fields."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Compound Index</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compound Index</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{ status: 1, date: -1 }</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Query Prefix</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">status=active</text><line x1=\"330\" y1=\"58\" x2=\"370\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"380\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"430\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Uses Index</text><text x=\"430\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ESR Rule</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"103\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"105\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"260\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Result Sorted</text><text x=\"260\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">By date desc</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Compound Index: Multiple fields, prefix matching, </text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ESR rule.</text></svg>",
  "codeExamples": [
    {
      "title": "ESR Index",
      "useCase": "Equality, Sort, Range.",
      "code": "db.collection('orders').createIndex({ status: 1, createdAt: -1, amount: 1 });",
      "description": "ESR: status (eq), createdAt (sort desc), amount (range)."
    },
    {
      "title": "Covered Query",
      "useCase": "All fields in index.",
      "code": "db.collection('users').createIndex({ email: 1, name: 1 });\ndb.users.find({ email: \"a@b.com\" }, { name: 1, email: 1, _id: 0 });",
      "description": "Covered: reads only from index, no document access."
    },
    {
      "title": "Prefix Principle",
      "useCase": "Which queries use index?",
      "code": "// Index: { a: 1, b: 1, c: 1 }\n// Uses: find({a:1}), find({a:1,b:2}), find({a:1,b:2,c:3})\n// NOT: find({b:2}), find({c:3})",
      "description": "Only leading prefix queries use the index."
    },
    {
      "title": "Sort Support",
      "useCase": "Matches index direction.",
      "code": "db.collection('products').createIndex({ category: 1, price: -1 });\n// Uses index: find({ category: \"electronics\" }).sort({ price: -1 })",
      "description": "Compound index supports filter + sort."
    },
    {
      "title": "High Cardinality First",
      "useCase": "Better selectivity.",
      "code": "// Good: email high cardinality\ndb.collection.createIndex({ email: 1, status: 1 });",
      "description": "High cardinality first for better selectivity."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a compound index?",
      "options": [
        "One field",
        "Multiple fields",
        "Cross-collection",
        "Array index"
      ],
      "answer": 1,
      "explanation": "Compound index on multiple fields."
    },
    {
      "question": "ESR stands for?",
      "options": [
        "Equality, Sort, Range",
        "Exact, Sort, Rough",
        "Equal, Skip, Reduce",
        "Execute, Scan, Return"
      ],
      "answer": 0,
      "explanation": "Equality first, Sort second, Range third."
    },
    {
      "question": "Prefix principle?",
      "options": [
        "Any field first",
        "Supports leading prefixes",
        "All must match",
        "Only first works"
      ],
      "answer": 1,
      "explanation": "Supports queries on leading prefixes."
    },
    {
      "question": "When is a query covered?",
      "options": [
        "All fields in index",
        "Uses index scan",
        "No sort needed",
        "Single field"
      ],
      "answer": 0,
      "explanation": "All query fields in index, no doc access."
    },
    {
      "question": "Max fields in compound index?",
      "options": [
        "16",
        "32",
        "64",
        "No limit"
      ],
      "answer": 1,
      "explanation": "Maximum 32 fields."
    },
    {
      "question": "Optimal first field?",
      "options": [
        "Low cardinality",
        "High cardinality",
        "First in query",
        "String field"
      ],
      "answer": 1,
      "explanation": "High cardinality first for better selectivity."
    }
  ]
};
