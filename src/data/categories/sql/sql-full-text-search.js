export const sql_full_text_search = {
  "id": "sql-full-text-search",
  "title": "Full-Text Search",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Full-text search enables natural language search across text columns, going beyond simple LIKE patterns.",
    "PostgreSQL uses tsvector (document) and tsquery (query) types with stemming, ranking, and stop word removal.",
    "LIKE is fine for small datasets. Full-text search is essential for large text collections, articles, and product descriptions.",
    "GIN indexes on tsvector columns enable fast full-text search queries."
  ],
  "laymanDefinition": "Full-text search is like having a smart index in the back of a book. LIKE '%running%' only finds \"running\". Full-text search finds \"run\", \"runs\", \"running\", \"ran\" — it understands word variations (stemming). It also ignores common words like \"the\" and \"and\" (stop words).",
  "deepDive": [
    {
      "heading": "tsvector and tsquery",
      "text": "tsvector: text search document — list of lexemes (stemmed words) with positions. to_tsvector(\\'english\\', text) — converts text to tsvector. tsquery: search query — lexemes combined with & (AND), | (OR), ! (NOT). to_tsquery(\\'english\\', \\'cat & dog\\') — creates query."
    },
    {
      "heading": "Match Operator @@",
      "text": "tsvector @@ tsquery — returns true if document matches query. SELECT * FROM articles WHERE to_tsvector(\\'english\\', body) @@ to_tsquery(\\'english\\', \\'database & performance\\'). Indexable operator."
    },
    {
      "heading": "Ranking Results",
      "text": "ts_rank(tsvector, tsquery) — computes relevance score based on term frequency, proximity, and document structure. ts_rank_cd — cover density ranking. ORDER BY ts_rank DESC for relevance-ordered results."
    },
    {
      "heading": "GIN Indexes for FTS",
      "text": "CREATE INDEX ON articles USING GIN (to_tsvector(\\'english\\', body)); — pre-computes and indexes tsvector. Makes @@ queries fast. GiST indexes work too but are slower for updates and larger."
    },
    {
      "heading": "Configuration and Customization",
      "text": "Language configuration: \\'english\\', \\'simple\\', \\'french\\', etc. Controls stemming rules and stop words. Custom dictionaries: add custom stop words, synonyms, thesaurus. Use ALTER TEXT SEARCH CONFIGURATION."
    }
  ],
  "interviewAnswer": "Full-text search is a game-changer for text-heavy applications. It handles word variations, ignores noise words, ranks by relevance, and performs well at scale with proper indexing. PostgreSQL's built-in FTS rivals dedicated search tools for many applications.",
  "interviewQuestions": [
    {
      "question": "What is full-text search?",
      "answer": "Natural language search with stemming, stop words, ranking, and phrase matching — beyond simple LIKE patterns."
    },
    {
      "question": "What is a tsvector?",
      "answer": "A text search document type containing lexemes (stemmed words) with positional information. Created with to_tsvector()."
    },
    {
      "question": "What is a tsquery?",
      "answer": "A text search query type with boolean operators. Created with to_tsquery() or plainto_tsquery()."
    },
    {
      "question": "What does the @@ operator do?",
      "answer": "Matches a tsvector against a tsquery. Returns true if the document satisfies the query."
    },
    {
      "question": "How do you rank full-text search results?",
      "answer": "ts_rank(tsvector, tsquery) returns a relevance score. Use ORDER BY ts_rank DESC for best matches first."
    },
    {
      "question": "What index supports fast full-text search?",
      "answer": "GIN index on the tsvector column. CREATE INDEX ON table USING GIN (to_tsvector(\\'english\\', column))."
    },
    {
      "question": "What is stemming?",
      "answer": "Reducing words to their root form: \"running\", \"runs\", \"ran\" all stem to \"run\". Handled automatically by the text search configuration."
    },
    {
      "question": "What are stop words?",
      "answer": "Common words like \"the\", \"and\", \"in\" that are ignored in full-text search. Controlled by the language configuration."
    },
    {
      "question": "What is the difference between to_tsquery and plainto_tsquery?",
      "answer": "to_tsquery uses operators (&, |, !). plainto_tsquery treats all words as AND and adds & between them."
    },
    {
      "question": "Can full-text search handle phrases?",
      "answer": "Yes. Use phraseto_tsquery() for exact phrase matching. Also use <-> (followed by) operator in tsquery for word proximity."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Full-Text Search</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LIKE</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Simple match</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">tsvector</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Document</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">tsquery</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Query</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">@@</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Match op</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">GIN</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Index</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Full-Text Search</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Natural language search with stemming, r</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">anking, and indexes — beyond LIKE.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Full-Text Search: Language-aware text search with </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">stemming, weighting, and ranking.</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Full-Text Search",
      "useCase": "Search articles by content.",
      "code": "SELECT id, title,\n  ts_rank(to_tsvector('english', body), to_tsquery('english', 'performance & tuning')) AS rank\nFROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('english', 'performance & tuning')\nORDER BY rank DESC\nLIMIT 10;",
      "description": "Searches for articles containing both \"performance\" and \"tuning\" with relevance ranking."
    },
    {
      "title": "Creating FTS Index",
      "useCase": "GiST index for speed.",
      "code": "-- Add a tsvector column\nALTER TABLE articles ADD COLUMN fts tsvector;\n\n-- Populate with trigger\nCREATE FUNCTION update_fts() RETURNS TRIGGER AS $$\nBEGIN\n  NEW.fts := to_tsvector('english', COALESCE(NEW.title, '') || ' ' || COALESCE(NEW.body, ''));\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_article_fts\nBEFORE INSERT OR UPDATE ON articles\nFOR EACH ROW EXECUTE FUNCTION update_fts();\n\n-- Create GIN index\nCREATE INDEX idx_articles_fts ON articles USING GIN (fts);",
      "description": "Sets up automatic tsvector maintenance with trigger and GIN index."
    },
    {
      "title": "Phrase Search",
      "useCase": "Exact phrase matching.",
      "code": "SELECT id, title\nFROM articles\nWHERE to_tsvector('english', body) @@ phraseto_tsquery('english', 'database performance tuning')\nORDER BY ts_rank(to_tsvector('english', body), phraseto_tsquery('english', 'database performance tuning')) DESC;",
      "description": "phraseto_tsquery matches the exact phrase with word order."
    },
    {
      "title": "Weighted Search",
      "useCase": "Title vs body weighting.",
      "code": "-- Assign weights: A=title (highest), B=body\nSELECT id, ts_rank(\n  setweight(to_tsvector('english', title), 'A') ||\n  setweight(to_tsvector('english', body), 'B'),\n  to_tsquery('english', 'database')\n) AS rank\nFROM articles\nWHERE setweight(to_tsvector('english', title), 'A') ||\n  setweight(to_tsvector('english', body), 'B')\n  @@ to_tsquery('english', 'database')\nORDER BY rank DESC;",
      "description": "Title matches get higher weight than body matches for better relevance ranking."
    },
    {
      "title": "Highlighting Results",
      "useCase": "Show matching snippets.",
      "code": "SELECT\n  id, title,\n  ts_headline('english', body, to_tsquery('english', 'performance'),\n    'StartSel = <mark>, StopSel = </mark>, MaxWords=30, MinWords=10') AS snippet\nFROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('english', 'performance')\nLIMIT 5;",
      "description": "ts_headline generates HTML snippets with search terms highlighted."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What type stores search documents?",
      "options": [
        "tsquery",
        "tsvector",
        "text",
        "jsonb"
      ],
      "answer": 1,
      "explanation": "tsvector stores parsed search documents with lexemes."
    },
    {
      "question": "What operator matches document to query?",
      "options": [
        "@@",
        "@>",
        "&&",
        "##"
      ],
      "answer": 0,
      "explanation": "@@ is the full-text search match operator."
    },
    {
      "question": "What is the default FTS configuration language?",
      "options": [
        "english",
        "simple",
        "default",
        "standard"
      ],
      "answer": 0,
      "explanation": "english is the default with stemming and stop words."
    },
    {
      "question": "What index is best for full-text search?",
      "options": [
        "B-tree",
        "Hash",
        "GIN",
        "BRIN"
      ],
      "answer": 2,
      "explanation": "GIN indexes are optimal for full-text search."
    },
    {
      "question": "What function ranks search results?",
      "options": [
        "ts_rank",
        "ts_headline",
        "tsvector",
        "to_tsquery"
      ],
      "answer": 0,
      "explanation": "ts_rank computes relevance scores for ordering results."
    },
    {
      "question": "What is stemming?",
      "options": [
        "Finding word roots",
        "Removing stop words",
        "Indexing phrases",
        "Ranking results"
      ],
      "answer": 0,
      "explanation": "Stemming reduces words to their root form for broader matching."
    }
  ]
};
