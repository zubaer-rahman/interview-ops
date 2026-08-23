export const mongodb_aggregation_match = {
  "id": "mongodb-aggregation-match",
  "title": "$match",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "$match filters documents in the aggregation pipeline, similar to find() queries, passing only matching documents to the next stage.",
    "Place $match as early as possible to reduce the number of documents flowing through subsequent stages, improving pipeline performance.",
    "$match supports the same query operators as find(): $eq, $gt, $lt, $in, $regex, $exists, $and, $or, $nor.",
    "$match can use indexes if placed early in the pipeline, just like find() queries."
  ],
  "laymanDefinition": "$match is like a security checkpoint at the entrance of a building. It lets only the right people (matching documents) through, so everyone downstream has less work to do.",
  "deepDive": [
    {
      "heading": "Early Filtering",
      "text": "Always place $match as the first stage when possible to minimize documents processed by later stages. MongoDB can use indexes for $match stages at the start of the pipeline, dramatically improving performance."
    },
    {
      "heading": "Supported Operators",
      "text": "All query operators work in $match: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $and, $or, $nor, $not, $exists, $type, $regex, $expr, $mod, $geoWithin, $nearSphere, $all, $elemMatch, $size, $bitsAllClear, $bitsAllSet."
    },
    {
      "heading": "Index Usage",
      "text": "$match can use indexes when it is the first stage. MongoDB optimizes the pipeline by moving $match stages earlier when possible. Use explain() to verify index usage. Index intersection can also benefit $match."
    },
    {
      "heading": "Text Search in $match",
      "text": "Use $match with $text operator for full-text search in aggregation: { $match: { $text: { $search: \"mongodb\" } } }. Requires a text index on the searched fields."
    },
    {
      "heading": "$match vs $project Filtering",
      "text": "$match removes entire documents (row filter). $project with conditional expressions can include/exclude fields but does not remove documents. Use $match for document pruning, $project for field pruning."
    }
  ],
  "interviewAnswer": "$match is the primary filtering stage in aggregation. Early placement and index support make it critical for pipeline performance.",
  "interviewQuestions": [
    {
      "question": "What does $match do?",
      "answer": "Filters documents in the aggregation pipeline, passing only those matching the condition to the next stage. Similar to find() filter."
    },
    {
      "question": "Where should $match be placed?",
      "answer": "As early as possible, preferably as the first stage, to reduce documents flowing through the pipeline and leverage indexes."
    },
    {
      "question": "What query operators work in $match?",
      "answer": "All standard query operators: $eq, $ne, $gt, $lt, $in, $regex, $exists, $and, $or, $nor, $expr, $elemMatch, etc."
    },
    {
      "question": "Can $match use indexes?",
      "answer": "Yes, when $match is the first stage in the pipeline. MongoDB can optimize some pipelines by moving $match earlier."
    },
    {
      "question": "What is the difference between $match and $project?",
      "answer": "$match removes documents (row filter). $project reshapes fields (column filter). $match reduces document count, $project reduces field count."
    },
    {
      "question": "How do you use $text in $match?",
      "answer": "{$match: {$text: {$search: \"keywords\"}}}. Requires a text index on the collection fields being searched."
    },
    {
      "question": "Can $match use $expr for field comparison?",
      "answer": "Yes. {$match: {$expr: {$gt: [\"$field1\", \"$field2\"]}}} compares fields within the same document."
    },
    {
      "question": "Does $match order matter?",
      "answer": "Yes. Place the most selective filters first to reduce the result set early. Multiple $match stages can be combined into one."
    },
    {
      "question": "How do you explain $match performance?",
      "answer": "Use .explain(\\'executionStats\\') on the aggregation cursor. Check index usage, docs examined vs docs returned."
    },
    {
      "question": "Can you use $or in $match?",
      "answer": "Yes. {$match: {$or: [{field1: value1}, {field2: value2}]}}. Be aware that $or may have different index behavior than $and."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">$match</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$match Filter</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{ status: \"active\" }</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Index Scan</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fast Filter</text><line x1=\"330\" y1=\"58\" x2=\"360\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"370\" y=\"40\" width=\"110\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"425\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Next Stage</text><text x=\"425\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reduced Docs</text><line x1=\"190\" y1=\"75\" x2=\"190\" y2=\"103\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"105\" width=\"140\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"260\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">No Match Excluded</text><text x=\"260\" y=\"129\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Removed</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">$match: Filter documents early, use indexes, reduc</text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">e pipeline data.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic $match",
      "useCase": "Filter active users.",
      "code": "await db.collection('users').aggregate([\n  { $match: { isActive: true } },\n  { $count: \"activeUsers\" }\n]).toArray();",
      "description": "Filters active users and counts them."
    },
    {
      "title": "$match with Date Range",
      "useCase": "Sales in period.",
      "code": "await db.collection('orders').aggregate([\n  { $match: { createdAt: { $gte: startDate, $lt: endDate } } },\n  { $group: { _id: null, total: { $sum: \"$amount\" } } }\n]).toArray();",
      "description": "Filters orders in a date range before grouping."
    },
    {
      "title": "$match with $or",
      "useCase": "Multiple conditions.",
      "code": "await db.collection('products').aggregate([\n  { $match: { $or: [{ price: { $lt: 10 } }, { category: \"sale\" }] } }\n]).toArray();",
      "description": "Filters products that are cheap OR on sale."
    },
    {
      "title": "$match with $expr",
      "useCase": "Field comparison.",
      "code": "await db.collection('orders').aggregate([\n  { $match: { $expr: { $gt: [\"$total\", \"$maxAllowed\"] } } }\n]).toArray();",
      "description": "Finds orders where total exceeds maxAllowed field."
    },
    {
      "title": "$match with Regex",
      "useCase": "Pattern filter.",
      "code": "await db.collection('articles').aggregate([\n  { $match: { title: { $regex: /^How to/i } } },\n  { $project: { title: 1, url: 1 } }\n]).toArray();",
      "description": "Finds articles whose title starts with \"How to\"."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does $match do?",
      "options": [
        "Groups documents",
        "Filters documents",
        "Sorts documents",
        "Projects fields"
      ],
      "answer": 1,
      "explanation": "$match filters documents in the pipeline."
    },
    {
      "question": "Where should $match ideally be placed?",
      "options": [
        "Last stage",
        "First or early",
        "After $group",
        "Before $project only"
      ],
      "answer": 1,
      "explanation": "$match should be early to reduce pipeline data."
    },
    {
      "question": "Can $match use indexes?",
      "options": [
        "No",
        "Yes, when first stage",
        "Only after $sort",
        "Only with $lookup"
      ],
      "answer": 1,
      "explanation": "$match uses indexes when it is the first pipeline stage."
    },
    {
      "question": "Which operator compares fields within a document?",
      "options": [
        "$eq",
        "$expr",
        "$compare",
        "$fields"
      ],
      "answer": 1,
      "explanation": "$expr enables field-to-field comparisons."
    },
    {
      "question": "What is the difference between $match and $project?",
      "options": [
        "$match removes docs, $project reshapes fields",
        "Same operation",
        "$project removes docs",
        "$match reshapes fields"
      ],
      "answer": 0,
      "explanation": "$match filters documents, $project reshapes fields."
    },
    {
      "question": "Does $match support $text?",
      "options": [
        "Yes",
        "No",
        "Only in find()",
        "Only with $search stage"
      ],
      "answer": 0,
      "explanation": "$match supports $text with a text index."
    }
  ]
};
