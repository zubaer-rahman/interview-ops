export const mongodb_aggregation_skip = {
  "id": "mongodb-aggregation-skip",
  "title": "$skip",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "$skip skips N documents before passing remaining documents to the next stage.",
    "Commonly used with $sort and $limit for pagination: $sort, $skip, $limit.",
    "Inefficient for large offsets because MongoDB iterates through skipped documents.",
    "Use range-based pagination with indexed fields for large datasets."
  ],
  "laymanDefinition": "$skip is like flipping past a certain number of pages before you start reading.",
  "deepDive": [
    {
      "heading": "Syntax",
      "text": "{ $skip: <positive integer> }. Skips N documents from the beginning of the sorted/filtered set. Order from previous stage determines what is skipped."
    },
    {
      "heading": "Pagination Pattern",
      "text": "$sort → $skip (page * pageSize) → $limit (pageSize). Page 1: skip 0, limit 10. Page 2: skip 10, limit 10."
    },
    {
      "heading": "Performance Issues",
      "text": "$skip iterates over all skipped documents. Page 1000 still processes 10,000 docs. Use range-based pagination for large offsets."
    },
    {
      "heading": "Range-Based Pagination",
      "text": "Use { $match: { _id: { $gt: lastSeenId } } } with { $limit: 10 }. Uses index, no skipped document processing."
    },
    {
      "heading": "$skip vs $limit Order",
      "text": "$skip before $limit skips then limits. $limit before $skip limits then skips. Standard: $sort → $skip → $limit."
    }
  ],
  "interviewAnswer": "$skip is simple but has performance implications for large offsets. Prefer range-based pagination.",
  "interviewQuestions": [
    {
      "question": "What does $skip do?",
      "answer": "Skips N documents from beginning of input, passes rest to next stage."
    },
    {
      "question": "How is $skip used for pagination?",
      "answer": "$sort → $skip (page * size) → $limit (size)."
    },
    {
      "question": "Performance concern with large $skip?",
      "answer": "Must iterate over skipped documents. Range-based pagination avoids this."
    },
    {
      "question": "What is range-based pagination?",
      "answer": "$match with $gt on indexed field instead of $skip. Only processes after last seen ID."
    },
    {
      "question": "What syntax?",
      "answer": "{ $skip: <positive integer> }. Must be >= 0."
    },
    {
      "question": "Does $skip guarantee order?",
      "answer": "No. Requires $sort before for predictable results."
    },
    {
      "question": "Can $skip be used multiple times?",
      "answer": "Yes, but inefficient. Compounds the performance issue."
    },
    {
      "question": "$skip vs $limit?",
      "answer": "$skip removes from start. $limit keeps from start. Complementary for pagination."
    },
    {
      "question": "Does $skip use indexes?",
      "answer": "No. Preceding $match/$sort can use indexes, but $skip still iterates."
    },
    {
      "question": "Recommended pagination for large datasets?",
      "answer": "Range-based: { $match: { createdAt: { $gt: lastTs } } }, { $sort: { createdAt: 1 } }, { $limit: size }."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">$skip</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Input Docs</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[d1,d2,d3,d4,d5]</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$skip: 2</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Skips d1, d2</text><line x1=\"330\" y1=\"58\" x2=\"370\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"380\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"430\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Output</text><text x=\"430\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[d3,d4,d5]</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">$skip: Skip N documents, pass rest to next stage.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Pagination",
      "useCase": "Page 2 of products.",
      "code": "await db.collection('products').aggregate([{ $sort: { name: 1 } }, { $skip: 10 }, { $limit: 10 }]).toArray();",
      "description": "Page 2 of products sorted by name."
    },
    {
      "title": "Range-Based Pagination",
      "useCase": "Efficient with index.",
      "code": "await db.collection('products').aggregate([{ $match: { _id: { $gt: lastSeenId } } }, { $sort: { _id: 1 } }, { $limit: 10 }]).toArray();",
      "description": "Efficient pagination using indexed _id."
    },
    {
      "title": "$skip in Nested Context",
      "useCase": "After $unwind.",
      "code": "await db.collection('users').aggregate([\n  { $unwind: \"$orders\" },\n  { $sort: { \"orders.date\": -1 } },\n  { $skip: 5 }, { $limit: 5 }\n]).toArray();",
      "description": "Pagination on unwound orders."
    },
    {
      "title": "$skip with $facet",
      "useCase": "Multiple pages at once.",
      "code": "await db.collection('products').aggregate([{ $facet: { page1: [{ $sort: { name: 1 } }, { $limit: 10 }], page2: [{ $sort: { name: 1 } }, { $skip: 10 }, { $limit: 10 }] }}]).toArray();",
      "description": "Returns both page 1 and page 2 in one aggregation."
    },
    {
      "title": "Invalid Negative Skip",
      "useCase": "Causes error.",
      "code": "{ $skip: 0 } // Valid, skips nothing",
      "description": "$skip requires non-negative integer."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does $skip do?",
      "options": [
        "Limits results",
        "Skips N documents",
        "Sorts documents",
        "Groups documents"
      ],
      "answer": 1,
      "explanation": "$skip removes N from beginning."
    },
    {
      "question": "Performance issue with $skip?",
      "options": [
        "Always fast",
        "Iterates over skipped docs",
        "No memory use",
        "Cannot use indexes"
      ],
      "answer": 1,
      "explanation": "$skip still processes skipped documents."
    },
    {
      "question": "Correct pagination order?",
      "options": [
        "$limit, $skip, $sort",
        "$sort, $skip, $limit",
        "$skip, $sort, $limit",
        "$sort, $limit, $skip"
      ],
      "answer": 1,
      "explanation": "Correct order: $sort → $skip → $limit."
    },
    {
      "question": "Better than $skip for large offsets?",
      "options": [
        "$limit",
        "Range-based $gt",
        "More $skip stages",
        "Natural order"
      ],
      "answer": 1,
      "explanation": "Range-based pagination with $gt."
    },
    {
      "question": "What value does $skip accept?",
      "options": [
        "Any integer",
        "Non-negative integer",
        "Boolean",
        "String"
      ],
      "answer": 1,
      "explanation": "Non-negative integer."
    },
    {
      "question": "Can $skip guarantee order?",
      "options": [
        "Yes",
        "No, needs $sort before",
        "Only with $limit",
        "Only after $match"
      ],
      "answer": 1,
      "explanation": "Requires $sort before for order."
    }
  ]
};
