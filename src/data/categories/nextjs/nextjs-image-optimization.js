export const nextjs_image_optimization = {
  "id": "nextjs-image-optimization",
  "title": "Image Optimization",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "Next.js Image Optimization via next/image auto-resizes, converts to modern formats (WebP/AVIF), lazy-loads, and generates responsive srcsets.",
    "The Image component extends HTML img with automatic optimization, requiring width/height (or fill) for layout stability (CLS prevention).",
    "Images are optimized on-demand at request time and cached, happening once per image regardless of page count.",
    "Remote images need remotePatterns config in next.config.js for security; local images auto-optimize during build."
  ],
  "laymanDefinition": "Next.js Image Optimization is like having a professional photo editor built in. Every image is auto-resized, converted to the best format, and only loaded when visible.",
  "deepDive": [
    {
      "heading": "The Image Component",
      "text": "Import Image from next/image. Key props: src, width/height (required for CLS prevention), alt (accessibility), priority (skip lazy loading for above-fold images), placeholder (blur|empty), quality (1-100), sizes (responsive breakpoints). The fill prop makes the image fill its positioned parent."
    },
    {
      "heading": "Auto-Optimization",
      "text": "Images are resized to rendered dimensions, converted to WebP/AVIF based on browser support, lazy-loaded by default, and quality-optimized. Optimization happens on first request and is cached."
    },
    {
      "heading": "Remote Images",
      "text": "Configure remotePatterns in next.config.js: { images: { remotePatterns: [{ protocol: \"https\", hostname: \"cdn.example.com\" }] } }. Remote images must specify width/height or use fill."
    },
    {
      "heading": "Responsive Images",
      "text": "The sizes prop generates appropriate srcset entries. Example: sizes=\"(max-width: 768px) 100vw, 50vw\". Users download only the size their viewport needs."
    },
    {
      "heading": "Performance Impact",
      "text": "Improves LCP via priority loading for hero images. Prevents CLS by requiring explicit dimensions. Lazy loading below-fold images saves bandwidth. Automatic format conversion reduces file size."
    }
  ],
  "interviewAnswer": "Image Optimization dramatically improves Core Web Vitals (LCP, CLS) and saves bandwidth. The Image component should replace all img tags for optimal performance.",
  "interviewQuestions": [
    {
      "question": "What is next/image?",
      "answer": "The built-in Image component that auto-optimizes images: resizing, format conversion, lazy loading, srcset generation, and blur placeholders. Imported from next/image."
    },
    {
      "question": "What props are required?",
      "answer": "src (path/URL), alt (accessibility), and either width+height or fill (with positioned parent)."
    },
    {
      "question": "How do you configure remote images?",
      "answer": "Add remotePatterns in next.config.js: images: { remotePatterns: [{ protocol: \"https\", hostname: \"example.com\" }] }"
    },
    {
      "question": "What formats does next/image convert to?",
      "answer": "WebP and AVIF, based on browser Accept headers. Falls back to original format if modern formats are unsupported."
    },
    {
      "question": "What does the priority prop do?",
      "answer": "Skips lazy loading for above-fold images critical for LCP. Use sparingly."
    },
    {
      "question": "How does the fill prop work?",
      "answer": "Makes image fill its parent container. Parent must have position: relative and defined dimensions."
    },
    {
      "question": "What is blurDataURL?",
      "answer": "A tiny base64-encoded preview shown as placeholder while the full image loads. Use placeholder=\"blur\". Auto-generated for local images."
    },
    {
      "question": "What does the sizes prop do?",
      "answer": "Defines rendered width at different viewports, generating corresponding srcset entries. Prevents downloading oversized images."
    },
    {
      "question": "How does next/image affect Core Web Vitals?",
      "answer": "Improves LCP (priority loading), prevents CLS (required dimensions), saves bandwidth (lazy loading, format conversion)."
    },
    {
      "question": "How do you set image quality?",
      "answer": "quality prop, 1-100. Default 75. Lower values (50-60) for thumbnails, higher (80-90) for product photos."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Image Optimization</text><rect x=\"10\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"70\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\"><Image></text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Component</text><line x1=\"130\" y1=\"58\" x2=\"160\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"230\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auto Resize</text><text x=\"230\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Responsive</text><line x1=\"290\" y1=\"58\" x2=\"320\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"390\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">WebP/AVIF</text><text x=\"390\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Convert</text><line x1=\"330\" y1=\"75\" x2=\"330\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"230\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"290\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lazy Load</text><text x=\"290\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">On Scroll</text><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cached</text><text x=\"70\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Optimized</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Image: Auto resizing, format conversion, lazy loading, and caching.</text></svg>",
  "codeExamples": [
    {
      "title": "Local Image",
      "useCase": "Displaying a local image.",
      "code": "import Image from \"next/image\";\nimport hero from \"../public/hero.jpg\";\nexport default function Hero() {\n  return <Image src={hero} alt=\"Hero\" priority />\n}",
      "description": "Local images auto-detect width/height and blurDataURL."
    },
    {
      "title": "Remote Image",
      "useCase": "External CMS image.",
      "code": "import Image from \"next/image\";\nexport default function Product({ p }) {\n  return <Image src={p.image} alt={p.name} width={600} height={400} />\n}",
      "description": "Remote images need explicit width/height and remotePatterns config."
    },
    {
      "title": "Fill Prop",
      "useCase": "Background cover image.",
      "code": "import Image from \"next/image\";\nexport default function Banner() {\n  return (\n    <div className=\"relative w-full h-[400px]\">\n      <Image src=\"/banner.jpg\" alt=\"Banner\" fill className=\"object-cover\" />\n    </div>\n  );\n}",
      "description": "fill prop requires positioned parent with dimensions."
    },
    {
      "title": "Sizes Prop",
      "useCase": "Responsive blog thumbnail.",
      "code": "<Image\n  src={post.thumbnail}\n  alt={post.title}\n  width={1200}\n  height={630}\n  sizes=\"(max-width: 768px) 100vw, 50vw\"\n/>",
      "description": "Generates srcset entries matching breakpoints."
    },
    {
      "title": "Blur Placeholder",
      "useCase": "Smooth loading.",
      "code": "<Image\n  src={image.url}\n  alt={image.alt}\n  width={800}\n  height={600}\n  placeholder=\"blur\"\n  blurDataURL=\"data:image/webp;base64,...\"\n/>",
      "description": "Blurred preview while loading. Auto-generated for local images."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which component provides image optimization?",
      "options": [
        "<img>",
        "<Image>",
        "<Picture>",
        "<OptImg>"
      ],
      "answer": 1,
      "explanation": "The Image component from next/image."
    },
    {
      "question": "What is required for remote images in production?",
      "options": [
        "Nothing",
        "remotePatterns config",
        "CDN setup",
        "Cloud account"
      ],
      "answer": 1,
      "explanation": "remotePatterns in next.config.js is required."
    },
    {
      "question": "What does the priority prop do?",
      "options": [
        "Reduces quality",
        "Skips lazy loading",
        "Converts format",
        "Adds border"
      ],
      "answer": 1,
      "explanation": "Priority skips lazy loading for above-fold images."
    },
    {
      "question": "What modern formats does next/image support?",
      "options": [
        "GIF/BMP",
        "WebP/AVIF",
        "TIFF/SVG",
        "ICO"
      ],
      "answer": 1,
      "explanation": "Converts to WebP and AVIF based on browser support."
    },
    {
      "question": "What does the fill prop do?",
      "options": [
        "Repeats image",
        "Fills parent container",
        "Fills with color",
        "Stretches"
      ],
      "answer": 1,
      "explanation": "fill makes the image fill its positioned parent."
    },
    {
      "question": "Purpose of blurDataURL?",
      "options": [
        "Blur effect",
        "Placeholder while loading",
        "Background blur",
        "Thumbnail"
      ],
      "answer": 1,
      "explanation": "blurDataURL shows a blurred preview while the full image loads."
    }
  ]
};
