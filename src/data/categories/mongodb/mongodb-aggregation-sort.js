export const mongodb_aggregation_sort = {
  "id": "mongodb-aggregation-sort",
  "title": "$sort",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "$sort orders documents by specified fields ascending (1) or descending (-1).",
    "Multi-field sort: { $sort: { category: 1, price: -1 } } sorts by category ascending, then price descending.",
    "$sort can use indexes when placed early. Without indexes, $sort is in-memory with 100MB limit.",
    "$sort before $limit enables top-N optimization tracking only top N documents."
  ],
  "laymanDefinition": "$sort is like arranging a deck of cards in a specific order — by suit first, then by rank within each suit.",
  "deepDive": [
    {
      "heading": "Sort Specification",
      "text": "{ field: 1 } ascending, { field: -1 } descending. Multiple fields: { field1: 1, field2: -1 }. Tiebreakers with subsequent fields."
    },
    {
      "heading": "Index Usage",
      "text": "$sort uses indexes when first stage or follows $match with index. Compound indexes must match sort order."
    },
    {
      "heading": "Top-N Optimization",
      "text": "$sort immediately followed by $limit only tracks top N documents. Dramatically reduces memory usage."
    },
    {
      "heading": "Memory Limit",
      "text": "100MB default. Use allowDiskUse: true for larger datasets. Without it, sort fails if exceeding 100MB."
    },
    {
      "heading": "Natural Order",
      "text": "Natural order is insertion order. $sort is always required for guaranteed ordering."
    }
  ],
  "interviewAnswer": "$sort is essential for ordered results. Combined with $limit, enables efficient top-N and pagination.",
  "interviewQuestions": [
    {
      "question": "What does $sort do?",
      "answer": "Orders documents by specified fields. 1 ascending, -1 descending."
    },
    {
      "question": "How to sort by multiple fields?",
      "answer": "{ $sort: { category: 1, price: -1 } }."
    },
    {
      "question": "Can $sort use indexes?",
      "answer": "Yes, when placed early. Index order must match sort order."
    },
    {
      "question": "What is top-N optimization?",
      "answer": "$sort + $limit: only sorts top N documents, saving memory."
    },
    {
      "question": "What is the memory limit for $sort?",
      "answer": "100MB by default. Use allowDiskUse: true for larger."
    },
    {
      "question": "Do I always need $sort?",
      "answer": "Yes for guaranteed order. Without it, order is undefined."
    },
    {
      "question": "How does $sort handle ties?",
      "answer": "Equal values use subsequent sort fields. Ties without tiebreakers = undefined."
    },
    {
      "question": "Can you sort on computed fields?",
      "answer": "Yes. Compute with $addFields/$project first, then $sort."
    },
    {
      "question": "What happens if $sort exceeds 100MB?",
      "answer": "Error unless allowDiskUse: true."
    },
    {
      "question": "How does $sort differ from cursor sort?",
      "answer": "$sort is pipeline stage. find().sort() is cursor method. Similar syntax."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">$sort</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Input Docs</text><text x=\"80\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[{price:5}, {price:1}]</text><line x1=\"150\" y1=\"58\" x2=\"180\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"40\" width=\"140\" height=\"35\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"260\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$sort</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">{price: 1}</text><line x1=\"330\" y1=\"58\" x2=\"370\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"380\" y=\"40\" width=\"100\" height=\"35\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"430\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sorted</text><text x=\"430\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[{price:1}, {price</text><text x=\"430\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">:5}]</text><text x=\"240\" y=\"120\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">$sort: Order documents ascending (1) or descending</text><text x=\"240\" y=\"132\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> (-1).</text></svg>",
  "codeExamples": [
    {
      "title": "Single Field Sort",
      "useCase": "Sort by price ascending.",
      "code": "await db.collection('products').aggregate([{ $sort: { price: 1 } }]).toArray();",
      "description": "Sorts products by price ascending."
    },
    {
      "title": "Multi-Field Sort",
      "useCase": "Category then price.",
      "code": "await db.collection('products').aggregate([{ $sort: { category: 1, price: -1 } }]).toArray();",
      "description": "Sorts by category ascending, price descending within category."
    },
    {
      "title": "Top-N with $limit",
      "useCase": "Top 5 most expensive.",
      "code": "await db.collection('products').aggregate([{ $sort: { price: -1 } }, { $limit: 5 }]).toArray();",
      "description": "Top 5 with top-N optimization."
    },
    {
      "title": "Sort After $group",
      "useCase": "Order aggregated results.",
      "code": "await db.collection('orders').aggregate([\n  { $group: { _id: \"$productId\", totalSales: { $sum: \"$amount\" } } },\n  { $sort: { totalSales: -1 } }\n]).toArray();",
      "description": "Groups by product, sorts by total sales descending."
    },
    {
      "title": "Sort with allowDiskUse",
      "useCase": "Large dataset.",
      "code": "await db.collection('events').aggregate([{ $sort: { timestamp: -1 } }], { allowDiskUse: true }).toArray();",
      "description": "Sorts using disk if memory limit exceeded."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What value indicates ascending?",
      "options": [
        "0",
        "1",
        "-1",
        "true"
      ],
      "answer": 1,
      "explanation": "1 ascending, -1 descending."
    },
    {
      "question": "Default memory limit for $sort?",
      "options": [
        "50MB",
        "100MB",
        "200MB",
        "500MB"
      ],
      "answer": 1,
      "explanation": "100MB default memory limit."
    },
    {
      "question": "What does $sort + $limit enable?",
      "options": [
        "Parallel sort",
        "Top-N optimization",
        "Index-only sort",
        "Disk sort"
      ],
      "answer": 1,
      "explanation": "Top-N tracks N documents."
    },
    {
      "question": "How to allow disk-based sort?",
      "options": [
        "useDisk",
        "allowDiskUse: true",
        "maxMemory: false",
        "memoryLimit: 0"
      ],
      "answer": 1,
      "explanation": "allowDiskUse: true enables disk sort."
    },
    {
      "question": "Can $sort use indexes?",
      "options": [
        "No",
        "Yes, early in pipeline",
        "Only after $limit",
        "Only with $match"
      ],
      "answer": 1,
      "explanation": "$sort uses indexes when early."
    },
    {
      "question": "What stage order must match for index sort?",
      "options": [
        "Sort direction must match index",
        "Any direction works",
        "Only ascending",
        "Only descending"
      ],
      "answer": 0,
      "explanation": "Sort direction must match index direction."
    }
  ]
};
