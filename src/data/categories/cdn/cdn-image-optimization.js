export const cdn_image_optimization = {
  "id": "cdn-image-optimization",
  "title": "Image Optimization",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Image optimization reduces file sizes while maintaining visual quality, improving page load times and reducing bandwidth costs.",
    "Modern formats (WebP, AVIF) offer 25-50% better compression than JPEG/PNG with similar quality. Serve the best format based on browser support.",
    "CDN image optimization features: on-the-fly resizing, format conversion, quality adjustment, cropping, compression, and responsive image generation.",
    "Images account for ~50% of a typical webpage's total weight. Optimization is the single highest-impact performance improvement you can make."
  ],
  "laymanDefinition": "Image optimization is like packing a suitcase. A JPEG is a bulky suitcase that fits everything but weighs a ton. WebP is a modern vacuum-compression bag that fits the same clothes in half the space. AVIF is like using a vacuum sealer — even smaller. The CDN image optimizer is your packing assistant that chooses the right bag and squishes everything perfectly.",
  "deepDive": [
    {
      "heading": "Image Formats Compared",
      "text": "JPEG: lossy, 8-bit, good for photos, no transparency. PNG: lossless, up to 48-bit, transparency, good for graphics. GIF: 256 colors, animation. WebP: lossy/lossless, 24-bit, transparency, animation, 25-35% smaller than JPEG. AVIF: lossy/lossless, HDR, 12-bit, transparency, 50% smaller than JPEG. SVG: vector, resolution-independent, code-based."
    },
    {
      "heading": "CDN Image Processing Features",
      "text": "Resize: generate exact dimensions needed. Format conversion: auto-serve WebP/AVIF based on Accept header. Quality: adjust compression level (q=50-85). Crop: smart cropping with focal point detection. Compress: remove metadata. Strip EXIF: remove camera data. Blur: for placeholders. Watermark: overlay branding. All at the edge cache."
    },
    {
      "heading": "Responsive Images with srcset",
      "text": "Use HTML srcset and sizes attributes to serve different image sizes based on viewport. CDN generates 3-5 variants at different widths. Browser selects the best size. Combined with CDN: single upload, multiple cached variants. Example sizes: 480w, 768w, 1024w, 1920w."
    },
    {
      "heading": "Image CDNs vs General CDNs",
      "text": "Specialized image CDNs (Imgix, Cloudinary, ImageKit): extensive transformation APIs, real-time processing, AI-based compression. General CDNs (CloudFront, Cloudflare, Fastly): basic resizing/format conversion via Workers or Lambda@Edge. Choose based on needs."
    },
    {
      "heading": "Lazy Loading and Preloading",
      "text": "Native lazy loading: loading=lazy attribute defers off-screen images. Intersection Observer: custom lazy loading with fade-in effects. Critical images: preload above-the-fold images with <link rel=preload>. Blur-up placeholders: tiny blurred version shown while full image loads."
    }
  ],
  "interviewAnswer": "Image optimization reduces file size 25-80% through modern formats (WebP, AVIF), CDN-based resizing, quality adjustment, and responsive image techniques. Images are ~50% of page weight, making this the highest-impact optimization.",
  "interviewQuestions": [
    {
      "question": "What percentage of page weight do images account for?",
      "answer": "Approximately 50% of a typical webpage\\'s total weight."
    },
    {
      "question": "What are the best modern image formats?",
      "answer": "WebP (25-35% smaller than JPEG) and AVIF (50% smaller than JPEG)."
    },
    {
      "question": "How does a CDN optimize images?",
      "answer": "Through on-the-fly resizing, format conversion (WebP/AVIF), quality adjustment, compression, and cropping at the edge."
    },
    {
      "question": "What is the srcset attribute used for?",
      "answer": "To serve different image sizes based on viewport width, combined with CDN-generated variants."
    },
    {
      "question": "What is the difference between WebP and AVIF?",
      "answer": "AVIF offers ~50% better compression than JPEG; WebP offers 25-35%. AVIF supports HDR and 12-bit color."
    },
    {
      "question": "What is lazy loading?",
      "answer": "Deferring off-screen image loading until the user scrolls near them. Native with loading=lazy."
    },
    {
      "question": "What EXIF data should be stripped from images?",
      "answer": "Camera model, GPS location, date/time, and device information to improve privacy and reduce file size."
    },
    {
      "question": "How does format conversion work at the CDN?",
      "answer": "CDN checks the Accept header for image/webp or image/avif support and converts accordingly."
    },
    {
      "question": "What is an image CDN?",
      "answer": "A specialized CDN focused on image transformation — Imgix, Cloudinary, ImageKit."
    },
    {
      "question": "What is blur-up image loading?",
      "answer": "Showing a tiny blurred placeholder image while the full-resolution image loads from CDN."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Image Optimization</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Original Image</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">PNG 500KB</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CDN Optimizer</text><text x=\"225\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Resize, convert, compre</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ss</text><line x1=\"290\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"170\" y1=\"65\" x2=\"170\" y2=\"85\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"400\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WebP</text><text x=\"400\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">200KB (60% smaller)</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AVIF</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">125KB (75% smaller)</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Responsive</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">srcset variants</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lazy Loading</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">loading=lazy</text><rect x=\"160\" y=\"70\" width=\"310\" height=\"130\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"315\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Image Optimization at CDN</text><text x=\"315\" y=\"183\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Format conversion (WebP/AVIF), resizing, compression, re</text><text x=\"315\" y=\"194\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sponsive images — all at the edge.</text><text x=\"240\" y=\"225\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Image Optimization: Modern formats (WebP, AVIF), C</text><text x=\"240\" y=\"237\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DN processing, responsive images, and lazy loading</text><text x=\"240\" y=\"249\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "CloudFront Image Optimization with Lambda@Edge",
      "useCase": "On-the-fly image transformation.",
      "code": "const sharp = require(\"sharp\");\n\nexports.handler = async (event) => {\n  const request = event.Records[0].cf.request;\n  const headers = request.headers;\n  if (!request.uri.match(/\\.(jpg|jpeg|png)$/)) {\n    return request;\n  }\n  const accept = headers[\"accept\"];\n  if (accept && accept[0].value.includes(\"webp\")) {\n    request.uri = request.uri.replace(/\\.(jpg|jpeg|png)$/, \".webp\");\n  }\n  return request;\n};",
      "description": "Lambda@Edge function that converts images to WebP format at the CDN edge based on browser support."
    },
    {
      "title": "Cloudflare Image Resizing via Workers",
      "useCase": "CDN image transformations.",
      "code": "export default {\n  async fetch(request) {\n    const url = new URL(request.url);\n    if (url.pathname.match(/\\.(jpg|png)$/)) {\n      const width = url.searchParams.get(\"w\") || 800;\n      const quality = url.searchParams.get(\"q\") || 80;\n      const format = url.searchParams.get(\"fmt\") || \"webp\";\n      const resizingUrl =\n        `/cdn-cgi/image/width=${width},quality=${quality},format=${format}`\n        + url.pathname;\n      return fetch(new URL(resizingUrl, request.url));\n    }\n    return fetch(request);\n  },\n}",
      "description": "Cloudflare Worker leveraging Image Resizing for on-the-fly format conversion."
    },
    {
      "title": "Nginx Image Filter Module",
      "useCase": "Server-side image optimization.",
      "code": "server {\n  listen 80;\n  server_name images.example.com;\n  location /uploads/ {\n    root /var/www;\n    image_filter resize 800 600;\n    image_filter_jpeg_quality 85;\n    image_filter_webp_quality 80;\n    image_filter_buffer 20M;\n    proxy_cache mycache;\n    proxy_cache_valid 200 24h;\n  }\n}",
      "description": "Nginx image_filter module for server-side image resizing and quality adjustment."
    },
    {
      "title": "Responsive Images with Srcset (HTML)",
      "useCase": "Serving multiple image sizes via CDN.",
      "code": "<img\n  src=\"https://cdn.example.com/img/photo-800.webp\"\n  srcset=\"\n    https://cdn.example.com/img/photo-400.webp 400w,\n    https://cdn.example.com/img/photo-800.webp 800w,\n    https://cdn.example.com/img/photo-1200.webp 1200w,\n    https://cdn.example.com/img/photo-1920.webp 1920w\"\n  sizes=\"(max-width: 400px) 100vw, (max-width: 800px) 80vw, 50vw\"\n  loading=\"lazy\" decoding=\"async\"\n  alt=\"Optimized photo\">\n<picture>\n  <source srcset=\"https://cdn.example.com/img/photo.avif 1x\" type=\"image/avif\">\n  <source srcset=\"https://cdn.example.com/img/photo.webp 1x\" type=\"image/webp\">\n  <img src=\"https://cdn.example.com/img/photo.jpg\" alt=\"Fallback\" loading=\"lazy\">\n</picture>",
      "description": "Responsive images with srcset and picture element for optimal CDN-served formats."
    },
    {
      "title": "Image Compression Benchmark Script",
      "useCase": "Comparing format effectiveness.",
      "code": "#!/usr/bin/env node\nconst sharp = require(\"sharp\");\nconst fs = require(\"fs\");\nasync function benchmark(inputPath) {\n  const formats = [\n    { name: \"JPEG (q80)\", ext: \"jpg\", opts: { quality: 80 } },\n    { name: \"WebP (q80)\", ext: \"webp\", opts: { quality: 80 } },\n    { name: \"AVIF (q50)\", ext: \"avif\", opts: { quality: 50 } },\n    { name: \"PNG\", ext: \"png\", opts: {} },\n  ];\n  const original = fs.statSync(inputPath).size;\n  console.log(`Original: ${(original / 1024).toFixed(1)}KB\\n`);\n  for (const fmt of formats) {\n    const output = inputPath.replace(/\\.\\w+$/, `.${fmt.ext}`);\n    await sharp(inputPath).toFormat(fmt.ext.replace(\"jpg\", \"jpeg\"), fmt.opts).toFile(output);\n    const size = fs.statSync(output).size;\n    const savings = ((original - size) / original * 100).toFixed(1);\n    console.log(`${fmt.name}: ${(size / 1024).toFixed(1)}KB (${savings}% smaller)`);\n  }\n}\nbenchmark(process.argv[2]);",
      "description": "Node.js script to benchmark image format sizes and compression effectiveness."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What percentage of page weight is images?",
      "options": [
        "10%",
        "25%",
        "50%",
        "75%"
      ],
      "answer": 2,
      "explanation": "Images account for approximately 50% of a typical webpage\\'s total weight."
    },
    {
      "question": "Which modern format offers the best compression?",
      "options": [
        "JPEG",
        "PNG",
        "WebP",
        "AVIF"
      ],
      "answer": 3,
      "explanation": "AVIF offers approximately 50% better compression than JPEG."
    },
    {
      "question": "What does the srcset attribute do?",
      "options": [
        "Sets multiple sources for script loading",
        "Serves different image sizes based on viewport",
        "Sets image source fallback order",
        "Configures CDN image optimization"
      ],
      "answer": 1,
      "explanation": "srcset tells the browser which image sizes are available for different viewport widths."
    },
    {
      "question": "What CDN feature converts images to WebP?",
      "options": [
        "DDoS protection",
        "Format conversion based on Accept header",
        "Cache invalidation",
        "Load balancing"
      ],
      "answer": 1,
      "explanation": "CDNs convert images based on the Accept header from the browser indicating WebP/AVIF support."
    },
    {
      "question": "What is an image CDN example?",
      "options": [
        "CloudFront",
        "Imgix",
        "Fastly",
        "Akamai"
      ],
      "answer": 1,
      "explanation": "Imgix is a specialized image CDN focused on real-time image transformation."
    },
    {
      "question": "What does loading=lazy do?",
      "options": [
        "Loads image immediately",
        "Defers off-screen image loading",
        "Applies image filter",
        "Converts image format"
      ],
      "answer": 1,
      "explanation": "loading=lazy defers loading of off-screen images until the user scrolls near them."
    }
  ]
};
