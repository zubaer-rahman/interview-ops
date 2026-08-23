const e={id:"cdn-static-content",title:"Static Content",difficulty:"beginner",estimatedMinutes:10,tldr:["Static content refers to files that do not change frequently and can be cached for long periods — images, CSS, JavaScript, fonts, PDFs, and videos.","Static content is the easiest to optimize with CDNs because it is identical for every user and rarely changes between requests.","Best practices: use versioned filenames (style.abc123.css) with immutable caching, long TTLs (1 year), and aggressive CDN caching with public Cache-Control.","Static assets typically account for 70-90% of a website's total page weight, making their optimization critical for overall performance."],laymanDefinition:"Static content is like pre-packaged snack bags in a vending machine. Everyone gets the same chips in the same packaging. The vending machine (CDN) can be stocked with thousands of bags, and they don't spoil for a long time. Once stocked, the machine serves them instantly without needing to call the factory. No customization, no expiration worries.",deepDive:[{heading:"Types of Static Content",text:"Images: JPEG, PNG, WebP, AVIF, SVG. Stylesheets: CSS (often versioned). Scripts: JavaScript (bundled, minified, versioned). Fonts: WOFF2, WOFF, TTF. Media: MP4, WebM, PDF documents. Archives: ZIP files, installers. API responses that are public and rarely changing (JSON/XML)."},{heading:"Optimal Caching for Static Content",text:"Set Cache-Control: public, max-age=31536000, immutable for versioned assets. For unversioned but rarely changed: public, max-age=2592000 (30 days). Use content hashes in filenames (Webpack, Vite, esbuild output). Serve from CDN with origin shield. Enable compression (Brotli > Gzip). Use HTTP/2 or HTTP/3 for multiplexing."},{heading:"Static Content Optimization Techniques",text:"Minification: remove whitespace, comments. Bundling: combine multiple files into fewer requests. Tree-shaking: remove unused code. Image optimization: WebP/AVIF, responsive images (srcset), lazy loading. Font subsetting: include only needed characters. Critical CSS inlining for above-the-fold content."},{heading:"Fingerprinting / Versioning",text:"Content hash in filename: style.4a5b6c7d.css. When content changes, the hash changes, creating a new URL. Old file remains cached but is never requested. No invalidation needed. Build tools: Webpack [contenthash], Vite [hash], esbuild [hash]."},{heading:"CDN Impact on Static Content",text:"Static content benefits most from CDN: 90%+ cache hit ratio achievable. Origin offload for static content can exceed 95%. Bandwidth savings are significant. Page load time improvements of 40-60% for first visits, 80%+ for repeat visits. Global users see consistent fast load times regardless of location."}],interviewAnswer:"Static content (images, CSS, JS, fonts) is ideal for CDN caching. Use versioned filenames with immutable, long TTL caching. Optimize with compression, minification, and responsive images. Static assets typically account for 70-90% of page weight, and CDN optimization can improve load times by 60% or more.",interviewQuestions:[{question:"What is static content?",answer:"Files that do not change frequently and are identical for every user — images, CSS, JS, fonts, PDFs."},{question:"What percentage of page weight is typically static content?",answer:"70-90% of total page weight."},{question:"What is the optimal Cache-Control for versioned static assets?",answer:"Cache-Control: public, max-age=31536000, immutable (1 year, never revalidate)."},{question:"What is content fingerprinting?",answer:"Adding a content hash to the filename (style.abc123.css) so the URL changes when content changes."},{question:"What is the benefit of versioned filenames?",answer:"Old cache is never requested again after update — eliminates need for cache invalidation."},{question:"What is the typical cache hit ratio for static content on a CDN?",answer:"90-95% or higher."},{question:"What compression should be used for static content?",answer:"Brotli (preferred) or Gzip. Enable at CDN level and serve pre-compressed files when possible."},{question:"How much can a CDN improve static content load times?",answer:"40-60% for first visits, 80%+ for repeat visits compared to direct origin access."},{question:"What is tree-shaking?",answer:"Removing unused code from JavaScript bundles to reduce file size."},{question:"What image formats are best for static content delivery?",answer:"WebP and AVIF offer superior compression compared to JPEG and PNG."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Static Content</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CSS files</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">style.abc123.css</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">JS files</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">bundle.xyz789.js</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Images</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">WebP/AVIF/JPEG</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fonts</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">WOFF2, variable</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Media</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">MP4, WebM</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="220" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="270" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Static Content CDN</text><text x="270" y="173" text-anchor="middle" font-size="9" fill="#ddd">Versioned filenames, immutable cache, lo</text><text x="270" y="184" text-anchor="middle" font-size="9" fill="#ddd">ng TTL (1 year), compression, 95%+ CHR.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Static Content: Images, CSS, JS, fonts — ideal for</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> CDN with versioned filenames, long TTL, and aggre</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ssive caching.</text></svg>',codeExamples:[{title:"HTML Template with Versioned Static Assets",useCase:"Loading versioned assets via CDN.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>

  <!-- Versioned CSS with long-term CDN caching -->
  <link rel="stylesheet"
    href="https://cdn.example.com/css/app.4a5b6c7d.css">
  <link rel="stylesheet"
    href="https://cdn.example.com/css/vendor.1a2b3c4d.css">

  <!-- Preconnect to CDN for faster asset loading -->
  <link rel="preconnect" href="https://cdn.example.com">
  <link rel="dns-prefetch" href="https://cdn.example.com">

  <!-- Preload critical assets -->
  <link rel="preload"
    href="https://cdn.example.com/fonts/inter.woff2"
    as="font" type="font/woff2" crossorigin>
</head>
<body>
  <!-- Responsive image with srcset -->
  <img
    src="https://cdn.example.com/img/hero-640.webp"
    srcset="
      https://cdn.example.com/img/hero-640.webp 640w,
      https://cdn.example.com/img/hero-1280.webp 1280w,
      https://cdn.example.com/img/hero-1920.webp 1920w"
    sizes="(max-width: 640px) 100vw, 50vw"
    loading="lazy"
    alt="Hero image">

  <!-- Versioned JavaScript -->
  <script
    src="https://cdn.example.com/js/bundle.xyz789.js"
    defer><\/script>
</body>
</html>`,description:"HTML template with versioned static assets loaded from CDN, preconnect hints, and responsive images."},{title:"Webpack Config for Content Hash Filenames",useCase:"Automatic versioned filenames.",code:`// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash:8].js",
    chunkFilename: "js/[id].[contenthash:8].chunk.js",
    assetModuleFilename: "assets/[hash:8][ext]",
    publicPath: "https://cdn.example.com/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\\.(png|jpg|webp|svg)$/,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        },
      },
    },],
  },
};`,description:"Webpack configuration generating content-hash-based filenames for automatic CDN cache busting."},{title:"Serving Pre-compressed Static Assets from CDN",useCase:"Brotli and Gzip compression.",code:`# CloudFront: Enable Brotli compression
# In CloudFront distribution settings:
#   Supported HTTP Versions: HTTP/2, HTTP/3
#   Compression: Automatically compress objects

# Nginx origin with pre-compressed files:
server {
  location /static/ {
    root /var/www;
    gzip_static on;
    gunzip on;
    add_header Content-Encoding br;
  }
}

# Pre-compress at build time:
#!/bin/bash
find dist -type f \\( -name "*.css" -o -name "*.js"
  -o -name "*.html" -o -name "*.svg" \\) | while read f; do
  gzip -k -f -9 "$f"
  brotli -k -f -q 11 "$f"
done`,description:"Pre-compressing static assets with Brotli and Gzip for efficient CDN delivery."},{title:"CDN Cache Configuration for Static Content (Nginx)",useCase:"Optimizing static content caching.",code:`server {
  listen 80;
  server_name cdn.example.com;

  location ~* \\.(css|js)$ {
    root /var/www/static;
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    gzip_static on;
    brotli_static on;
  }

  location ~* \\.(png|jpg|jpeg|gif|webp|avif|svg)$ {
    root /var/www/images;
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
  }

  location ~* \\.(woff2?|ttf|eot)$ {
    root /var/www/fonts;
    expires 1y;
    add_header Cache-Control "public, max-age=31536000";
    add_header Access-Control-Allow-Origin "*";
  }
}`,description:"Nginx CDN configuration optimized for static content with long TTLs and compression."},{title:"Lighthouse Performance Budget for Static Content",useCase:"Setting targets for static content optimization.",code:`module.exports = {
  ci: {
    collect: {
      url: ["https://example.com"],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "total-byte-weight": ["error", {
          maxNumericValue: 500 * 1024,
        }],
        "uses-optimized-images": "error",
        "uses-webp-images": "error",
        "offscreen-images": "error",
        "render-blocking-resources": ["error", {
          maxNumericValue: 0,
        }],
        "unminified-css": "error",
        "unminified-javascript": "error",
        "uses-responsive-images": "error",
      },
    },
  },
};`,description:"Lighthouse CI configuration enforcing performance budgets for static content optimization."}],mcqQuestions:[{question:"What types of content are considered static?",options:["API responses, user profiles","Images, CSS, JS, fonts (unchanging per user)","Live chat messages","Stock ticker data"],answer:1,explanation:"Static content includes images, CSS, JavaScript, fonts."},{question:"What percentage of page weight is static content?",options:["10-20%","30-40%","70-90%","100%"],answer:2,explanation:"Static content typically makes up 70-90% of a page\\'s total weight."},{question:"What is the optimal TTL for versioned static assets?",options:["1 hour","1 week","1 year with immutable","Never cache"],answer:2,explanation:"Versioned assets should use 1 year TTL with the immutable directive."},{question:"What is content fingerprinting?",options:["Adding user fingerprints","Adding content hash to filenames","Fingerprint authentication","Image optimization"],answer:1,explanation:"Content fingerprinting adds a hash of the file content to the filename for automatic cache busting."},{question:"What is the typical cache hit ratio for static content on CDN?",options:["50%","70%","90-95%","99%"],answer:2,explanation:"Static content typically achieves 90-95%+ cache hit ratios on CDNs."},{question:"What is the best compression for static text assets?",options:["Brotli","Gzip","Deflate","Zstandard"],answer:0,explanation:"Brotli offers better compression ratios than Gzip for text-based static assets."}]};export{e as cdn_static_content};
