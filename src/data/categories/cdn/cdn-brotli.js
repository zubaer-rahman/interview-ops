export const cdn_brotli = {
  "id": "cdn-brotli",
  "title": "Brotli",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Brotli is a compression algorithm developed by Google that offers 20-30% better compression ratios than Gzip for web content.",
    "Brotli uses a pre-defined dictionary of common HTML/CSS/JS strings, making it especially effective for small web files.",
    "Compression levels: 0 (fastest) to 11 (slowest, best compression). Level 4-6 recommended for on-the-fly, level 11 for pre-compressed.",
    "Brotli is supported by all modern browsers (95%+ global coverage). All major CDNs support Brotli."
  ],
  "laymanDefinition": "Brotli is like a multilingual translator who also knows common phrases. Gzip compresses your sentence word-by-word. Brotli recognizes common phrases like \"margin: 0; padding: 0;\" and replaces them with shorthand codes. The more common phrases it knows, the shorter the message becomes.",
  "deepDive": [
    {
      "heading": "How Brotli Achieves Better Compression",
      "text": "Brotli uses a 120KB static dictionary of common substrings found in HTML, CSS, and JavaScript. It also employs context modeling and large sliding windows (up to 16MB). These make Brotli particularly effective for small web files where Gzip struggles with overhead."
    },
    {
      "heading": "Brotli Compression Levels",
      "text": "Levels 0-4: fast compression, suitable for on-the-fly. Levels 5-9: moderate speed. Levels 10-11: highest compression, CPU-intensive, best for pre-compressed static files. Level 11 achieves 5-15% better compression than level 6 but takes 10x longer to compress. Decompression is fast at all levels."
    },
    {
      "heading": "Brotli vs Gzip Comparison",
      "text": "Compression ratio: Brotli level 4 ~ Gzip level 6. Brotli level 11: 20-30% better than Gzip level 9. Compress speed: Gzip is faster. Decompress speed: Brotli is comparable or faster. File size example: 100KB JS — Gzip: ~30KB, Brotli: ~22KB."
    },
    {
      "heading": "Brotli at the CDN Edge",
      "text": "CDNs can compress on-the-fly with Brotli or serve pre-compressed .br files. CloudFront: automatic Brotli. Cloudflare: Brotli enabled by default. Fastly: Brotli via VCL. Set Content-Encoding: br and Vary: Accept-Encoding for cache separation."
    },
    {
      "heading": "Brotli for APIs",
      "text": "Brotli is excellent for JSON API responses. A 500KB JSON response compresses to ~50KB with Brotli (vs ~70KB with Gzip). Faster mobile API calls, reduced bandwidth costs. Always check Accept-Encoding and fallback to Gzip for older clients."
    }
  ],
  "interviewAnswer": "Brotli is Google's compression algorithm offering 20-30% better ratios than Gzip. It excels at compressing web content due to its built-in dictionary. Use level 11 for pre-compressed static assets, level 4-6 for on-the-fly. Supported by all modern browsers and major CDNs.",
  "interviewQuestions": [
    {
      "question": "What is Brotli?",
      "answer": "A compression algorithm developed by Google offering 20-30% better compression than Gzip for web content."
    },
    {
      "question": "What makes Brotli more effective than Gzip?",
      "answer": "A built-in dictionary of common HTML/CSS/JS strings and context modeling."
    },
    {
      "question": "What are Brotli compression levels?",
      "answer": "0 (fastest) to 11 (best compression). Level 4-6 for on-the-fly, level 11 for pre-compressed."
    },
    {
      "question": "What improvement does Brotli offer over Gzip?",
      "answer": "20-30% better compression ratios at equivalent quality levels."
    },
    {
      "question": "Is Brotli supported by all browsers?",
      "answer": "Yes, by all modern browsers — approximately 95%+ global coverage."
    },
    {
      "question": "What Content-Encoding value does Brotli use?",
      "answer": "Content-Encoding: br"
    },
    {
      "question": "What is the best Brotli level for pre-compressed static files?",
      "answer": "Level 11 — highest compression, done at build time."
    },
    {
      "question": "Does CloudFront support Brotli?",
      "answer": "Yes, CloudFront supports automatic Brotli compression when enabled."
    },
    {
      "question": "What header must be set for pre-compressed Brotli?",
      "answer": "Content-Encoding: br and Vary: Accept-Encoding"
    },
    {
      "question": "Can Brotli be used for API responses?",
      "answer": "Yes, it is excellent for JSON — typically 25-35% better than Gzip for API payloads."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Brotli</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Original</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">HTML 20KB</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Gzip</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Level 9: 5KB</text><line x1=\"270\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"35\" width=\"170\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"395\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Brotli</text><text x=\"395\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Level 11: 3.5KB</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dictionary</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">120KB common strings</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Context Model</text><text x=\"65\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Predictive compressi</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">on</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">16MB Window</text><text x=\"65\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Larger sliding windo</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">w</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"113\" x2=\"150\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"143\" x2=\"150\" y2=\"143\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"320\" height=\"100\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"320\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Brotli Compression</text><text x=\"320\" y=\"153\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">20-30% better than Gzip. Built-in dictionary. Level 11 for</text><text x=\"320\" y=\"164\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> pre-compress. CDN edge support.</text><text x=\"240\" y=\"200\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Brotli: Google's compression algorithm with 20-30%</text><text x=\"240\" y=\"212\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> better ratios than Gzip.</text></svg>",
  "codeExamples": [
    {
      "title": "Build Script: Brotli Pre-compression",
      "useCase": "Pre-compress all static assets with Brotli 11.",
      "code": "#!/bin/bash\nDIST=\"./dist\"\nfind \"$DIST\" -type f \\( -name \"*.html\" -o -name \"*.css\" -o -name \"*.js\"\n  -o -name \"*.json\" -o -name \"*.svg\" \\) -exec sh -c '\n  brotli -k -f -q 11 \"$1\"\n' _ {} \\;\necho \"Brotli pre-compression complete.\"",
      "description": "Build script pre-compressing all static text assets with Brotli level 11."
    },
    {
      "title": "Nginx Brotli Module Configuration",
      "useCase": "Serving Brotli pre-compressed files.",
      "code": "http {\n  server {\n    listen 80;\n    server_name cdn.example.com;\n    location /static/ {\n      root /var/www;\n      brotli_static on;\n      brotli on;\n      brotli_comp_level 6;\n      brotli_types text/css application/javascript application/json;\n    }\n    gzip on;\n    gzip_static on;\n    gzip_vary on;\n  }\n}",
      "description": "Nginx configuration serving pre-compressed Brotli files with Gzip fallback."
    },
    {
      "title": "Brotli vs Gzip Size Comparison Script",
      "useCase": "Compare compression ratios.",
      "code": "#!/usr/bin/env node\nconst zlib = require(\"zlib\");\nconst fs = require(\"fs\");\nconst file = process.argv[2];\nconst content = fs.readFileSync(file);\nconst gzipped = zlib.gzipSync(content, { level: 9 });\nconst brotlied = zlib.brotliCompressSync(content, {\n  params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 }\n});\nconst gzipRatio = ((1 - gzipped.length / content.length) * 100).toFixed(1);\nconst brRatio = ((1 - brotlied.length / content.length) * 100).toFixed(1);\nconst improvement = ((gzipped.length - brotlied.length) / gzipped.length * 100).toFixed(1);\nconsole.log(`Gzip: ${gzipRatio}%, Brotli: ${brRatio}%, Improvement: ${improvement}%`);",
      "description": "Node.js script comparing Brotli vs Gzip compression ratios."
    },
    {
      "title": "CDN Brotli Verification with Curl",
      "useCase": "Check if CDN is serving Brotli.",
      "code": "curl -s -I -H \"Accept-Encoding: br\" https://cdn.example.com/style.css\n# Expect: content-encoding: br\ncurl -s -I -H \"Accept-Encoding: gzip\" https://cdn.example.com/style.css\n# Expect: content-encoding: gzip\ncurl -s -o /dev/null -w \"Time: %{time_total}s, Size: %{size_download}B\\n\" -H \"Accept-Encoding: br\" https://cdn.example.com/bundle.js\ncurl -s -o /dev/null -w \"Time: %{time_total}s, Size: %{size_download}B\\n\" -H \"Accept-Encoding: identity\" https://cdn.example.com/bundle.js",
      "description": "Curl commands to verify Brotli compression headers from the CDN edge."
    },
    {
      "title": "CloudFront Brotli Configuration (AWS CLI)",
      "useCase": "Enabling Brotli on CloudFront.",
      "code": "aws cloudfront get-distribution-config --id E123456789ABCD --query \"DistributionConfig\" > config.json\n# Edit config.json: set \"Compress\": true in DefaultCacheBehavior\naws cloudfront update-distribution --id E123456789ABCD --if-match \"ETAG_VALUE\" --distribution-config file://config.json\n# CloudFront will now compress with Brotli when client sends Accept-Encoding: br",
      "description": "AWS CLI steps to enable Brotli compression on CloudFront."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is Brotli?",
      "options": [
        "A caching algorithm",
        "A compression algorithm by Google",
        "A CDN provider",
        "A JS framework"
      ],
      "answer": 1,
      "explanation": "Brotli is a compression algorithm developed by Google."
    },
    {
      "question": "How much better is Brotli than Gzip?",
      "options": [
        "5-10%",
        "20-30%",
        "50%",
        "Same"
      ],
      "answer": 1,
      "explanation": "Brotli offers 20-30% better compression ratios than Gzip."
    },
    {
      "question": "What is the highest Brotli compression level?",
      "options": [
        "5",
        "9",
        "10",
        "11"
      ],
      "answer": 3,
      "explanation": "Brotli level 11 provides the highest compression ratio."
    },
    {
      "question": "What Content-Encoding does Brotli use?",
      "options": [
        "gzip",
        "deflate",
        "br",
        "brotli"
      ],
      "answer": 2,
      "explanation": "Brotli uses Content-Encoding: br."
    },
    {
      "question": "What makes Brotli effective for web content?",
      "options": [
        "Larger windows only",
        "Built-in dictionary of common web strings",
        "Faster decompression only",
        "Hardware acceleration"
      ],
      "answer": 1,
      "explanation": "Brotli\\'s built-in dictionary of common web strings makes it effective."
    },
    {
      "question": "Is Brotli supported by major CDNs?",
      "options": [
        "No",
        "Only Cloudflare",
        "Yes, all major CDNs",
        "Only Fastly"
      ],
      "answer": 2,
      "explanation": "All major CDNs support Brotli compression."
    }
  ]
};
