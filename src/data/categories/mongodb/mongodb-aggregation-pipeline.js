export const mongodb_aggregation_pipeline = {
  "id": "mongodb-aggregation-pipeline",
  "title": "Aggregation Pipeline",
  "difficulty": "advanced",
  "estimatedMinutes": 35,
  "tldr": [
    "The aggregation pipeline is a framework for data processing and transformation, passing documents through a sequence of stages.",
    "Each stage transforms the documents as they pass through: $match (filter), $group (group by), $project (reshape), $sort (order), $limit/$skip (paginate).",
    "Stages can be combined in any order, forming a pipeline where the output of one stage becomes the input to the next.",
    "Aggregation supports complex operations: $lookup (joins), $unwind (deconstruct arrays), $bucket (histograms), $facet (multi-faceted search)."
  ],
  "laymanDefinition": "The aggregation pipeline is like an assembly line in a factory. Raw materials (documents) go through different stations (stages), each performing a specific transformation until the final product (result) comes out at the end.",
  "deepDive": [
    {
      "heading": "Pipeline Stages",
      "text": "Common stages: $match (filter documents), $group (group by key with accumulators), $project (reshape fields), $sort (order), $skip/$limit (paginate), $lookup (join collections), $unwind (deconstruct arrays), $bucket (categorize), $facet (multi-pipeline), $addFields (add computed fields), $count (count documents)."
    },
    {
      "heading": "Accumulators in $group",
      "text": "$sum (total), $avg (average), $min (minimum), $max (maximum), $first (first doc), $last (last doc), $push (collect to array), $addToSet (unique values), $stdDevPop (population std dev), $stdDevSamp (sample std dev)."
    },
    {
      "heading": "Pipeline Optimization",
      "text": "Place $match and $limit early in the pipeline to reduce documents flowing through. Use indexes on $match filter fields. $sort before $limit enables top-N optimization. Avoid $lookup on unindexed foreign fields."
    },
    {
      "heading": "Aggregation vs find()",
      "text": "Aggregation is more powerful but more complex. find() for simple queries with optional sorting/pagination. Aggregation for grouping, transformations, joins, computed fields, and multi-stage processing."
    },
    {
      "heading": "Memory and Performance",
      "text": "Stages have a 100MB memory limit by default. Use allowDiskUse: true for larger datasets. $group and $sort are memory-intensive. Indexes can help $match and $sort stages significantly."
    }
  ],
  "interviewAnswer": "The aggregation pipeline is MongoDB's most powerful data processing tool. Mastering pipeline stages, operators, and optimization techniques is essential for advanced MongoDB work.",
  "interviewQuestions": [
    {
      "question": "What is the aggregation pipeline?",
      "answer": "A framework for data aggregation where documents pass through a sequence of stages, each transforming the data. Like Unix pipes for MongoDB documents."
    },
    {
      "question": "What are common pipeline stages?",
      "answer": "$match (filter), $group (group), $project (reshape), $sort (order), $limit/$skip (paginate), $lookup (join), $unwind (deconstruct arrays), $addFields (compute fields)."
    },
    {
      "question": "How do you optimize an aggregation pipeline?",
      "answer": "Place $match and $limit early. Use indexes on $match fields. $sort before $limit for top-N. Use allowDiskUse for large datasets."
    },
    {
      "question": "What is the $lookup stage?",
      "answer": "Performs a left outer join with another collection. Matches documents from the source collection with documents from the foreign collection."
    },
    {
      "question": "What accumulators work with $group?",
      "answer": "$sum, $avg, $min, $max, $first, $last, $push, $addToSet, $stdDevPop, $stdDevSamp."
    },
    {
      "question": "How is aggregation different from find()?",
      "answer": "Aggregation supports grouping, transformations, joins, computed fields. find() is for simple queries with basic filtering/pagination."
    },
    {
      "question": "What is the memory limit for aggregation?",
      "answer": "100MB per stage by default. Use allowDiskUse: true to exceed this limit by writing temporary files to disk."
    },
    {
      "question": "What is $unwind used for?",
      "answer": "Deconstructs an array field, outputting one document per array element. Useful for grouping or filtering on array elements."
    },
    {
      "question": "What is $facet?",
      "answer": "Allows multiple aggregation pipelines to run on the same set of input documents, producing multiple result sets. Like a multi-faceted search."
    },
    {
      "question": "Can you use aggregation for updates?",
      "answer": "Yes, MongoDB 4.2+ supports aggregation pipelines in update operations: updateMany(filter, [{ $set: { field: expression } }])."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Aggregation Pipeline</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#47A248\" stroke=\"#47A248\" stroke-width=\"1.5\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$match</text><text x=\"70\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Filter</text><line x1=\"130\" y1=\"55\" x2=\"150\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"40\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"220\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$group</text><text x=\"220\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Group</text><line x1=\"280\" y1=\"55\" x2=\"300\" y2=\"55\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"40\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"370\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$project</text><text x=\"370\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Reshape</text><line x1=\"310\" y1=\"70\" x2=\"310\" y2=\"90\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"90\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"220\" y=\"106\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$sort</text><text x=\"220\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Order</text><line x1=\"160\" y1=\"105\" x2=\"180\" y2=\"105\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"180\" y1=\"105\" x2=\"210\" y2=\"125\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"220\" y=\"120\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"270\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">$lookup</text><text x=\"270\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Join</text><text x=\"240\" y=\"180\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Aggregation Pipeline: Sequence of stages transform</text><text x=\"240\" y=\"192\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ing documents.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Aggregation",
      "useCase": "Group by status, count orders.",
      "code": "const result = await db.collection('orders').aggregate([\n  { $group: { _id: \"$status\", count: { $sum: 1 }, totalAmount: { $sum: \"$amount\" } } }\n]).toArray();",
      "description": "Groups orders by status, counts and sums per group."
    },
    {
      "title": "Match + Group + Sort",
      "useCase": "Filter, group, order.",
      "code": "const result = await db.collection('sales').aggregate([\n  { $match: { date: { $gte: startDate, $lte: endDate } } },\n  { $group: { _id: \"$productId\", totalSales: { $sum: \"$amount\" } } },\n  { $sort: { totalSales: -1 } },\n  { $limit: 10 }\n]).toArray();",
      "description": "Top 10 products by sales in a date range."
    },
    {
      "title": "$lookup Join",
      "useCase": "Join orders with users.",
      "code": "const result = await db.collection('orders').aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } },\n  { $unwind: \"$user\" }\n]).toArray();",
      "description": "Left joins orders with users collection, unwinds the array."
    },
    {
      "title": "$addFields + $project",
      "useCase": "Add computed field.",
      "code": "const result = await db.collection('orders').aggregate([\n  { $addFields: { total: { $multiply: [\"$quantity\", \"$price\"] } } },\n  { $project: { item: 1, total: 1, _id: 0 } }\n]).toArray();",
      "description": "Adds computed total field and projects specific fields."
    },
    {
      "title": "$facet for Multi-Analysis",
      "useCase": "Multiple aggregations.",
      "code": "const result = await db.collection('products').aggregate([\n  { $facet: {\n    byCategory: [{ $group: { _id: \"$category\", count: { $sum: 1 } } }],\n    stats: [{ $group: { _id: null, avgPrice: { $avg: \"$price\" }, maxPrice: { $max: \"$price\" } } }]\n  }}\n]).toArray();",
      "description": "Runs two separate pipelines: category counts and price stats."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the aggregation pipeline?",
      "options": [
        "A query language",
        "A sequence of data processing stages",
        "An indexing method",
        "A backup tool"
      ],
      "answer": 1,
      "explanation": "Aggregation pipeline is a sequence of stages processing documents."
    },
    {
      "question": "Which stage filters documents?",
      "options": [
        "$group",
        "$match",
        "$project",
        "$sort"
      ],
      "answer": 1,
      "explanation": "$match filters documents early in the pipeline."
    },
    {
      "question": "Which accumulator sums values?",
      "options": [
        "$total",
        "$sum",
        "$add",
        "$count"
      ],
      "answer": 1,
      "explanation": "$sum calculates the sum of numeric values."
    },
    {
      "question": "What does $lookup do?",
      "options": [
        "Groups documents",
        "Joins collections",
        "Filters arrays",
        "Sorts results"
      ],
      "answer": 1,
      "explanation": "$lookup performs left outer join with another collection."
    },
    {
      "question": "What is the default memory limit per stage?",
      "options": [
        "50MB",
        "100MB",
        "200MB",
        "500MB"
      ],
      "answer": 1,
      "explanation": "Default memory limit is 100MB per stage."
    },
    {
      "question": "What does $unwind do?",
      "options": [
        "Merges documents",
        "Deconstructs arrays into multiple docs",
        "Removes duplicates",
        "Adds indexes"
      ],
      "answer": 1,
      "explanation": "$unwind deconstructs an array, outputting one doc per element."
    }
  ]
};
