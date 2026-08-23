export const nextjs_metadata_api = {
  "id": "nextjs-metadata-api",
  "title": "Metadata API",
  "difficulty": "intermediate",
  "estimatedMinutes": 25,
  "tldr": [
    "The Metadata API in Next.js allows defining HTML head metadata (title, description, Open Graph, Twitter cards, etc.) using exported objects or generateMetadata functions.",
    "Metadata can be defined statically via an exported metadata object or dynamically via an async generateMetadata function that receives route params and search params.",
    "Metadata is automatically deduplicated and merged following the hierarchy: parent layouts can define defaults with metadataBase and generateMetadata can override specific fields.",
    "Supports Open Graph, Twitter cards, robots.txt, alternate languages, icons/manifests, and other standard <head> meta tags."
  ],
  "laymanDefinition": "The Metadata API is like a dashboard where you fill in forms (title, description, social media preview) for each page, and Next.js automatically updates the browser tab name, search results, and social sharing cards.",
  "deepDive": [
    {
      "heading": "Static Metadata",
      "text": "Export a metadata object from any layout.js or page.js file. The object contains fields like title, description, openGraph, twitter, robots, alternates, and icons. Metadata defined in layout.js applies to all child pages and can be overridden by child metadata exports."
    },
    {
      "heading": "Dynamic Metadata with generateMetadata",
      "text": "Export an async generateMetadata function that receives { params, searchParams } and returns a metadata object. This enables dynamic metadata based on route parameters, fetched data, or request-time conditions. The function runs on every request for dynamic pages."
    },
    {
      "heading": "Metadata Field Types",
      "text": "Key fields include: title (string or template object with absolute and default), description, openGraph (url, title, description, images, siteName, locale), twitter (card, title, description, images), robots (index, follow), alternates (canonical, languages), icons, manifest, and other meta tags."
    },
    {
      "heading": "Metadata Inheritance and Merging",
      "text": "Metadata is inherited from parent layouts. A layout defines default metadata that applies to all child routes. Child pages can override specific fields. The metadataBase field sets the base URL for resolving relative paths in metadata. The title field supports template patterns like \"%s | Site Name\"."
    },
    {
      "heading": "File-Based Metadata",
      "text": "Next.js also supports file-based metadata through convention: favicon.ico, opengraph-image.png, twitter-image.png, robots.txt, sitemap.xml, and manifest.json can be placed in the app directory and are automatically served. These complement the Metadata API object approach."
    }
  ],
  "interviewAnswer": "The Metadata API simplifies SEO and social sharing configuration in Next.js applications. Its hierarchical merging system reduces duplication while allowing per-page customization. The generateMetadata function is particularly powerful for content-driven sites where metadata depends on fetched data.",
  "interviewQuestions": [
    {
      "question": "What is the Metadata API in Next.js?",
      "answer": "The Metadata API allows defining HTML head metadata by exporting metadata objects or generateMetadata functions from layout.js and page.js files. It supports title, description, Open Graph, Twitter cards, robots directives, canonical URLs, and more."
    },
    {
      "question": "How do you define static metadata?",
      "answer": "Export a metadata object from layout.js or page.js: export const metadata = { title: \"Page Title\", description: \"Page description\" }. This object can include nested openGraph, twitter, and other metadata groups."
    },
    {
      "question": "How do you define dynamic metadata?",
      "answer": "Export an async generateMetadata function that receives { params, searchParams }: export async function generateMetadata({ params }) { const post = await fetchPost(params.slug); return { title: post.title, description: post.excerpt } }."
    },
    {
      "question": "What is the title template feature?",
      "answer": "The title.template field in layout.js defines a template for child page titles. For example, { title: { template: \"%s | My Site\", default: \"My Site\" } } transforms child titles like \"About\" into \"About | My Site\"."
    },
    {
      "question": "How does metadata inheritance work?",
      "answer": "Metadata defined in a layout.js applies to all child routes. Child pages can override specific fields. If a child only defines title, the parent\\'s description is inherited. This hierarchical merging reduces duplication while allowing per-page customization."
    },
    {
      "question": "What is metadataBase used for?",
      "answer": "metadataBase sets the base URL for resolving relative paths in metadata fields. For example, metadataBase: new URL(\"https://example.com\") makes og:image: \"/og.png\" resolve to \"https://example.com/og.png\". It should match your production domain."
    },
    {
      "question": "How do you add Open Graph metadata?",
      "answer": "Include an openGraph field in the metadata object: { openGraph: { title: \"OG Title\", description: \"OG Description\", images: [{ url: \"/og.png\", width: 1200, height: 630 }] } }. Next.js generates the appropriate meta tags."
    },
    {
      "question": "What file-based metadata does Next.js support?",
      "answer": "Convention-based files: favicon.ico (root), opengraph-image.png (per-route), twitter-image.png (per-route), robots.txt (root), sitemap.xml (root), manifest.json (root). These files are automatically served and can supplement the Metadata API."
    },
    {
      "question": "How does metadata work with client-side navigation?",
      "answer": "When navigating between routes client-side, Next.js updates the document head using the new page\\'s metadata. The title and meta tags are updated dynamically without a full page reload."
    },
    {
      "question": "Can you use generateMetadata with ISR or SSG pages?",
      "answer": "Yes, generateMetadata runs during the build process for SSG pages and during revalidation for ISR pages. For dynamic metadata, it runs on the server during generation, not on the client."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><rect x=\"0\" y=\"0\" width=\"500\" height=\"200\" rx=\"8\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Metadata API</text><rect x=\"10\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1\"/><text x=\"80\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">layout.js metadata</text><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Defaults</text><line x1=\"150\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"180\" y=\"40\" width=\"140\" height=\"35\" rx=\"4\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1\"/><text x=\"250\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">page.js metadata</text><text x=\"250\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Overrides</text><line x1=\"320\" y1=\"58\" x2=\"340\" y2=\"58\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"350\" y=\"40\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1\"/><text x=\"410\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Head Tags</text><text x=\"410\" y=\"68\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Generated</text><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"95\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"260\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1\"/><text x=\"320\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Open Graph</text><text x=\"320\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Social Cards</text><rect x=\"10\" y=\"105\" width=\"120\" height=\"35\" rx=\"4\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1\"/><text x=\"70\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">generateMetadata</text><text x=\"70\" y=\"133\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dynamic</text><text x=\"250\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Metadata API: Hierarchical metadata with static and dynamic generation.</text></svg>",
  "codeExamples": [
    {
      "title": "Static Metadata Export",
      "useCase": "When a page has fixed SEO metadata.",
      "code": "export const metadata = {\n  title: \"About Us\",\n  description: \"Learn about our company mission and team.\",\n  openGraph: {\n    title: \"About Us | My Company\",\n    images: [\"/about-og.png\"]\n  }\n};",
      "description": "Defines static metadata that does not change between requests."
    },
    {
      "title": "Dynamic Metadata with generateMetadata",
      "useCase": "When metadata depends on fetched data.",
      "code": "export async function generateMetadata({ params }) {\n  const product = await fetch(`https://api.example.com/products/${params.id}`).then(r => r.json());\n  return {\n    title: product.name,\n    description: product.description,\n    openGraph: { images: [product.image] }\n  };\n}",
      "description": "Fetches product data and uses it to generate dynamic title, description, and OG image."
    },
    {
      "title": "Title Template in Layout",
      "useCase": "When all pages in a section should share a title suffix.",
      "code": "// app/layout.js\nexport const metadata = {\n  title: {\n    template: \"%s | My Store\",\n    default: \"My Store\"\n  }\n};\n\n// app/products/page.js — title becomes \"Products | My Store\"\nexport const metadata = { title: \"Products\" };",
      "description": "The title template automatically adds \" | My Store\" to every child page title."
    },
    {
      "title": "Open Graph and Twitter Cards",
      "useCase": "When social sharing previews are important.",
      "code": "export const metadata = {\n  openGraph: {\n    title: \"Blog Post\",\n    description: \"Read our latest blog post\",\n    type: \"article\",\n    publishedTime: \"2024-01-01\",\n    authors: [\"Author Name\"]\n  },\n  twitter: {\n    card: \"summary_large_image\",\n    title: \"Blog Post\",\n    images: [\"/blog-og.png\"]\n  }\n};",
      "description": "Configures both Open Graph and Twitter card metadata for rich social sharing previews."
    },
    {
      "title": "Using metadataBase",
      "useCase": "When you need absolute URLs in metadata.",
      "code": "export const metadata = {\n  metadataBase: new URL(\"https://example.com\"),\n  alternates: {\n    canonical: \"/products\",\n    languages: { \"en-US\": \"/en/products\", \"es\": \"/es/products\" }\n  },\n  robots: {\n    index: true,\n    follow: true\n  }\n};",
      "description": "Sets the base URL for resolving relative paths and defines canonical URL and language alternatives."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How do you define static metadata in Next.js?",
      "options": [
        "Export generateMetadata function",
        "Export metadata object",
        "Use next/head component",
        "Set document.title"
      ],
      "answer": 1,
      "explanation": "Export a metadata object from layout.js or page.js for static metadata."
    },
    {
      "question": "What does the title template pattern \"%s | Site Name\" do?",
      "options": [
        "Adds \"Site Name\" before the title",
        "Replaces \"Site Name\" with the page title",
        "Prepends page title with \" | Site Name\"",
        "Creates two title tags"
      ],
      "answer": 2,
      "explanation": "The %s placeholder is replaced with the page title, followed by \" | Site Name\"."
    },
    {
      "question": "Which function enables dynamic metadata generation?",
      "options": [
        "getMetadata",
        "generateMetadata",
        "createMetadata",
        "dynamicMetadata"
      ],
      "answer": 1,
      "explanation": "generateMetadata is an async function that receives params and returns a metadata object."
    },
    {
      "question": "What does metadataBase define?",
      "options": [
        "The HTML lang attribute",
        "The base URL for relative metadata URLs",
        "The database connection string",
        "The base font size"
      ],
      "answer": 1,
      "explanation": "metadataBase sets the base URL for resolving relative paths in metadata fields."
    },
    {
      "question": "Which file-based convention provides the Open Graph image for a route?",
      "options": [
        "favicon.ico",
        "opengraph-image.png",
        "twitter-image.jpg",
        "meta-image.png"
      ],
      "answer": 1,
      "explanation": "opengraph-image.png (or .jpg) placed in a route directory provides the OG image."
    },
    {
      "question": "How does metadata inheritance work between layout and page?",
      "options": [
        "Page replaces all layout metadata",
        "Page overrides only specified fields",
        "Layout overrides page",
        "No inheritance"
      ],
      "answer": 1,
      "explanation": "Child pages override only the fields they specify; parent layout fields are inherited for unspecified fields."
    }
  ]
};
