export const cdn_gzip = {
  "id": "cdn-gzip",
  "title": "Gzip",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Gzip is a file compression algorithm widely used for HTTP content compression, reducing file sizes by 70-80% for text-based content.",
    "Based on the DEFLATE algorithm, Gzip has been the standard HTTP compression method since HTTP/1.1.",
    "Gzip compression levels: 1 (fastest, least compression) to 9 (slowest, best compression). Level 6 is the default and recommended balance.",
    "While Brotli is superior, Gzip has universal support — every browser, server, and HTTP client supports Gzip."
  ],
  "laymanDefinition": "Gzip is like the original vacuum-seal bag. It's been around forever, works everywhere, and everyone knows how to use it. It reduces your files to about 25% of their original size. A newer bag (Brotli) might be slightly better, but Gzip works in every suitcase (browser) ever made.",
  "deepDive": [
    {
      "heading": "How Gzip Compression Works",
      "text": "Gzip uses DEFLATE combining LZ77 (finds repeated sequences) and Huffman coding (shorter codes for frequent bytes). Decompression reconstructs original data exactly (lossless). Content is compressed before sending and decompressed by the browser automatically."
    },
    {
      "heading": "Gzip Compression Levels",
      "text": "Level 1: fastest, ~50% reduction. Level 6: default, ~70-75% reduction (good balance). Level 9: slowest, ~75-80% reduction. Beyond level 6, diminishing returns — level 9 is only ~2% better but takes 3-4x longer to compress."
    },
    {
      "heading": "Gzip in CDN Context",
      "text": "CDNs compress on-the-fly or serve pre-compressed .gz files. Static pre-compression at build time is more efficient. CDNs cache compressed versions separately (Vary: Accept-Encoding). Most CDNs prioritize Brotli when supported, falling back to Gzip."
    },
    {
      "heading": "Gzip Limitations",
      "text": "Less efficient than Brotli for small files. Not effective on already-compressed data. Single-threaded compression. 32KB sliding window limits long-range duplicate detection."
    },
    {
      "heading": "Gzip vs Brotli Trade-offs",
      "text": "Gzip: universal support, faster compression, good enough (70-80% reduction). Brotli: 20-30% better ratio, slower compression, 95%+ browser support. Serve Brotli to modern browsers, Gzip as fallback."
    }
  ],
  "interviewAnswer": "Gzip is the universal standard for HTTP compression, supported by every browser and server. While Brotli offers better ratios, Gzip remains essential as a fallback. Compression levels 6-9 provide 70-80% size reduction. Pre-compress .gz files at build time for optimal CDN performance.",
  "interviewQuestions": [
    {
      "question": "What is Gzip?",
      "answer": "A compression algorithm for HTTP content, reducing text file sizes by 70-80%."
    },
    {
      "question": "What algorithm does Gzip use?",
      "answer": "DEFLATE — combining LZ77 and Huffman coding."
    },
    {
      "question": "What are Gzip compression levels?",
      "answer": "1 (fastest) to 9 (best compression). Level 6 is the default."
    },
    {
      "question": "What is the typical compression ratio for text?",
      "answer": "70-80% reduction for HTML, CSS, JS, JSON."
    },
    {
      "question": "Does every browser support Gzip?",
      "answer": "Yes, universal support across every browser and HTTP client."
    },
    {
      "question": "What Content-Encoding does Gzip use?",
      "answer": "Content-Encoding: gzip"
    },
    {
      "question": "What is gzip_static in Nginx?",
      "answer": "A module that serves pre-compressed .gz files without re-compressing."
    },
    {
      "question": "What should NOT be Gzip compressed?",
      "answer": "Already compressed formats: JPEG, PNG, MP4, ZIP, PDF."
    },
    {
      "question": "What header ensures proper cache separation for compressed content?",
      "answer": "Vary: Accept-Encoding"
    },
    {
      "question": "What is the default Gzip level in most servers?",
      "answer": "Level 6 — good balance of speed and compression."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Gzip</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Browser</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Accept-Encoding</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Edge</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check header</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"400\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Gzip</text><text x=\"400\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Content-Encoding: gzip</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pre-compressed</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">.gz at build</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">On-the-fly</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic content</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fallback</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Brotli unsupported</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"113\" x2=\"150\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"143\" x2=\"150\" y2=\"143\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"150\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"235\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Gzip Compression</text><text x=\"235\" y=\"142\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Universal support. 70-80% r</text><text x=\"235\" y=\"153\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">eduction. Level 6 default. </text><text x=\"235\" y=\"164\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pre-compress or CDN edge.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Gzip: Universal HTTP compression standard. Support</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ed by every browser and CDN.</text></svg>",
  "codeExamples": [
    {
      "title": "Enabling Gzip in Nginx",
      "useCase": "Server-side Gzip configuration.",
      "code": "http {\n  gzip on;\n  gzip_comp_level 6;\n  gzip_min_length 256;\n  gzip_proxied any;\n  gzip_vary on;\n  gzip_static on;\n  gzip_types text/plain text/css text/xml text/javascript application/javascript application/json image/svg+xml;\n  gzip_disable \"msie6\";\n}",
      "description": "Nginx Gzip configuration with pre-compressed file support."
    },
    {
      "title": "Pre-compressing with Gzip",
      "useCase": "Build-time pre-compression.",
      "code": "gzip -k -9 style.css\n# Creates style.css.gz alongside style.css\n\nfind ./dist -type f \\( -name \"*.html\" -o -name \"*.css\" -o -name \"*.js\" -o -name \"*.json\" -o -name \"*.svg\" \\) -exec gzip -k -9 {} \\;\n\n# Check savings:\nfor f in $(find ./dist -name \"*.html\" | head -5); do\n  orig=$(stat -c%s \"$f\")\n  gz=$(stat -c%s \"${f}.gz\" 2>/dev/null)\n  echo \"$(basename $f): $(( (orig-gz)*100/orig ))% reduction\"\ndone",
      "description": "Pre-compressing static files with Gzip level 9 at build time."
    },
    {
      "title": "Express.js Gzip Middleware",
      "useCase": "Server-side compression for dynamic responses.",
      "code": "const express = require(\"express\");\nconst compression = require(\"compression\");\nconst app = express();\napp.use(compression({\n  level: 6,\n  threshold: 256,\n  filter: (req, res) => {\n    const type = res.getHeader(\"Content-Type\");\n    if (type && !type.match(/text|json|javascript|xml/)) return false;\n    return compression.filter(req, res);\n  },\n}));\napp.get(\"/api/data\", (req, res) => {\n  res.json({ message: \"This will be Gzip compressed\", data: \"x\".repeat(10000) });\n});\napp.listen(3000);",
      "description": "Express.js compression middleware for Gzip compression of dynamic responses."
    },
    {
      "title": "Apache Gzip Configuration (mod_deflate)",
      "useCase": "Apache compression setup.",
      "code": "<IfModule mod_deflate.c>\n  SetOutputFilter DEFLATE\n  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml\n  SetEnvIfNoCase Request_URI \\.(?:gif|jpe?g|png|webp|mp4|zip|gz)$ no-gzip dont-vary\n  Header append Vary Accept-Encoding env=!dont-vary\n</IfModule>",
      "description": "Apache mod_deflate configuration for Gzip compression."
    },
    {
      "title": "Curl Test for Gzip",
      "useCase": "Verify Gzip compression.",
      "code": "# Check if Gzip is enabled\ncurl -I -H \"Accept-Encoding: gzip\" https://cdn.example.com/style.css\n# Look for: Content-Encoding: gzip\n\n# Compare sizes\ncurl -s -o /dev/null -w \"Uncompressed: %{size_download} bytes\\n\" -H \"Accept-Encoding: identity\" https://cdn.example.com/page.html\ncurl -s -o /dev/null -w \"Gzip: %{size_download} bytes\\n\" -H \"Accept-Encoding: gzip\" https://cdn.example.com/page.html",
      "description": "Curl commands to test Gzip compression and compare sizes."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is Gzip?",
      "options": [
        "Image format",
        "Compression algorithm based on DEFLATE",
        "CDN provider",
        "JavaScript library"
      ],
      "answer": 1,
      "explanation": "Gzip is a compression algorithm based on DEFLATE."
    },
    {
      "question": "What is the default Gzip level?",
      "options": [
        "1",
        "6",
        "9",
        "11"
      ],
      "answer": 1,
      "explanation": "Gzip default is level 6 — good balance of speed and ratio."
    },
    {
      "question": "What Content-Encoding does Gzip use?",
      "options": [
        "br",
        "deflate",
        "gzip",
        "compress"
      ],
      "answer": 2,
      "explanation": "Gzip uses Content-Encoding: gzip."
    },
    {
      "question": "What is gzip_static?",
      "options": [
        "Dynamic compression",
        "Serves pre-compressed .gz files",
        "Enables Brotli",
        "Caches compressed files"
      ],
      "answer": 1,
      "explanation": "gzip_static serves pre-compressed .gz files directly."
    },
    {
      "question": "Does every browser support Gzip?",
      "options": [
        "Yes, universal",
        "Only modern",
        "Only Chrome",
        "Only mobile"
      ],
      "answer": 0,
      "explanation": "Gzip has universal support across all browsers."
    },
    {
      "question": "What should you NOT Gzip?",
      "options": [
        "HTML",
        "CSS",
        "JPEG",
        "JSON"
      ],
      "answer": 2,
      "explanation": "Already-compressed formats like JPEG should not be Gzipped."
    }
  ]
};
