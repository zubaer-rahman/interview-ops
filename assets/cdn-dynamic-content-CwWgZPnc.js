const e={id:"cdn-dynamic-content",title:"Dynamic Content",difficulty:"intermediate",estimatedMinutes:20,tldr:["Dynamic content is content that changes per user, session, or context — personalized pages, API responses, shopping carts, real-time data.","Dynamic content is harder to cache because it varies by user, authentication state, location, or time. Incorrect caching can leak user data between sessions.","CDNs accelerate dynamic content through: edge computing (workers), dynamic TTL (short), surrogate keys, connection optimization (TLS, keep-alive), and route optimization.","Techniques: edge-side includes (ESI), personalized edge caching (vary by cookie/header), streaming responses via chunked transfer encoding, and smart routing to nearest origin."],laymanDefinition:"Dynamic content is like a custom-made sandwich. Unlike pre-made sandwiches (static content) that you grab from the cooler, a custom sandwich is made fresh based on your specific order. The CDN can't pre-make your sandwich because it doesn't know what you'll order. However, the CDN can speed up the ordering process and the route from kitchen to you.",deepDive:[{heading:"Why Dynamic Content is Hard to Cache",text:"Dynamic content is user-specific (personalized dashboards), session-specific (shopping cart contents), time-sensitive (stock prices), or dependent on authentication state. Each variation would need a separate cache entry, making caching inefficient. Cache keys must include cookies, headers, or authentication tokens to isolate user data."},{heading:"Dynamic Content Acceleration Techniques",text:"TLS connection reuse: CDN maintains persistent connections to origin, reducing connection overhead. TCP optimization: optimized congestion control algorithms reduce latency. Route optimization: CDN uses real-time internet health data to find the best path to origin. Preconnect: CDN establishes early connections to speed up dynamic requests."},{heading:"Edge Computing for Dynamic Content",text:"Cloudflare Workers, Fastly Compute@Edge, and CloudFront Functions can generate dynamic responses at the edge without hitting the origin. Use cases: A/B testing (serve variant based on cookie), personalization (modify HTML based on geolocation), API aggregation (combine multiple API responses), authentication (validate JWT at edge)."},{heading:"Caching Dynamic Content (Selectively)",text:"Cache personalized content with Vary header (Vary: Cookie, Authorization). Use short TTLs (30-60 seconds) for semi-dynamic content. Cache fragments via Edge Side Includes (ESI). Use surrogate keys to invalidate groups. Cache API responses with user-specific cache keys. Only cache if the benefit outweighs the complexity."},{heading:"Dynamic vs Static Content Separation",text:"Best practice: separate dynamic and static content on different URL patterns. Static: /static/, /assets/, /images/. Dynamic: /api/, /app/, /dashboard/. This allows different CDN configurations (TTL, cache policies, origin groups) for each. Many CDNs support path-based behavior configuration."}],interviewAnswer:"Dynamic content is personalized or time-sensitive and harder to cache than static content. CDNs accelerate it through edge computing, connection optimization, and smart routing. Use selective caching with Vary headers and short TTLs for semi-dynamic content. Separate dynamic and static URL patterns for optimal CDN configuration.",interviewQuestions:[{question:"What is dynamic content in CDN context?",answer:"Content that changes per user, session, or context — personalized pages, API responses, real-time data."},{question:"Why is dynamic content hard to cache?",answer:"Because it varies by user, auth state, time, or location — each variation needs a separate cache entry."},{question:"How does edge computing help with dynamic content?",answer:"By running code (workers) at the edge to generate or modify dynamic responses without hitting the origin."},{question:"What is the Vary header used for?",answer:"To tell CDNs to cache different versions based on request headers like Cookie, Authorization, or Accept-Language."},{question:"What is dynamic TTL?",answer:"A TTL that varies based on content type, URL pattern, or response headers — short TTL for dynamic content."},{question:"What is ESI (Edge Side Includes)?",answer:"A technology that allows composing dynamic content from cached fragments at the edge."},{question:"How do CDNs accelerate uncacheable dynamic content?",answer:"Through TLS reuse, TCP optimization, route optimization, and preconnect to reduce latency."},{question:"Should dynamic and static content use the same CDN configuration?",answer:"No — separate URL patterns allow different caching rules, TTLs, and origin behaviors."},{question:"What is a common pattern for caching API responses?",answer:"Short TTL (30-60 seconds), Vary on Authentication header, cache key includes user/device ID."},{question:"How does Surrogate-Key help with dynamic content?",answer:"It allows selective invalidation of related dynamic content without purging everything."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Dynamic Content</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Static Content</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Cache long TTL</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Dynamic Content</text><text x="65" y="73" text-anchor="middle" font-size="9" fill="#ddd">Per-user, uncacheabl</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">e</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="70" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN Edge Acceleration</text><text x="275" y="88" text-anchor="middle" font-size="9" fill="#ddd">Edge workers, TLS reuse, route optimizati</text><text x="275" y="99" text-anchor="middle" font-size="9" fill="#ddd">on, selective caching with Vary header.</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Edge Workers</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">Generate at edge</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Selective Cache</text><text x="65" y="138" text-anchor="middle" font-size="9" fill="#ddd">Vary: Cookie, TTL=60</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">s</text><rect x="10" y="160" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Route Optimization</text><text x="65" y="179" text-anchor="middle" font-size="9" fill="#ddd">Smart path to origin</text><line x1="120" y1="113" x2="150" y2="113" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="143" x2="150" y2="143" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="173" x2="150" y2="173" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><text x="240" y="195" font-size="9" fill="#666" text-anchor="middle">Dynamic Content: Personalized, hard-to-cache conte</text><text x="240" y="207" font-size="9" fill="#666" text-anchor="middle">nt accelerated via edge compute, connection optimi</text><text x="240" y="219" font-size="9" fill="#666" text-anchor="middle">zation, and selective caching.</text></svg>',codeExamples:[{title:"Selective Caching with Vary Header",useCase:"Caching dynamic content safely.",code:`# Cache different versions based on Cookie
# Origin response header:
Vary: Cookie

# Or more specifically:
Vary: X-User-ID, X-Region

# Effect on CDN:
# Separate cache entries per cookie value
# Each unique cookie = separate cached response
# Use carefully — too many variations reduce CHR

# Better approach: extract only relevant cookie
# From origin (Python/Flask example):
from flask import request
region = request.cookies.get('region', 'default')
response.headers['Vary'] = 'Cookie'

# Warning: Vary: * means never cache
# Avoid using Vary with high-cardinality values`,description:"Using the Vary header to cache different versions of dynamic content based on cookies or headers."},{title:"CloudFront Function for A/B Testing",useCase:"Edge-based dynamic modification.",code:`// CloudFront Function — runs at edge
// Modifies response based on experiment cookie

function handler(event) {
  var request = event.request;
  var headers = request.headers;
  var cookie = headers.cookie;

  // Default origin path
  request.uri = "/v1/index.html";

  // Check experiment cookie
  if (cookie && cookie.value.includes("variant=B")) {
    request.uri = "/v2/index.html";
  }

  return request;
}

# This runs at every edge location
# Zero latency added — no origin call needed
# Dynamic routing based on user cookie`,description:"CloudFront Function at the edge for A/B testing — dynamically routes users without origin round trip."},{title:"Fastly VCL for Dynamic Request Routing",useCase:"Edge logic for dynamic content.",code:`# Fastly VCL: Route dynamic requests to nearest origin

# Define multiple backends (origins)
backend us_east { .host = "us-origin.example.com"; }
backend eu_west { .host = "eu-origin.example.com"; }
backend asia { .host = "asia-origin.example.com"; }

# Geo-based routing at edge
sub vcl_recv {
  # Dynamic API requests — route geographically
  if (req.url.path ~ "^/api/") {
    if (req.http.Fastly-Geo-Country ~ "(US|CA)") {
      set req.backend = us_east;
    } else if (req.http.Fastly-Geo-Country
               ~ "(GB|DE|FR|NL)") {
      set req.backend = eu_west;
    } else {
      set req.backend = asia;
    }

    # Don't cache API responses
    return (pass);
  }

  # Static content — cache at edge
  if (req.url.path ~ "^/static/") {
    return (lookup);
  }
}`,description:"Fastly VCL geo-routing dynamic requests to the nearest origin server while caching static content."},{title:"Edge Worker for API Aggregation",useCase:"Combining multiple API calls at edge.",code:`// Cloudflare Worker — aggregate APIs at edge
// Reduces multiple client requests to one edge call

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/dashboard") {
      // Fetch multiple APIs in parallel from edge
      const [user, orders, recommendations] =
        await Promise.all([
          fetch("https://api.example.com/user"),
          fetch("https://api.example.com/orders"),
          fetch("https://api.example.com/recommend")
        ]);

      // Combine at edge — single client response
      const dashboard = {
        user: await user.json(),
        orders: await orders.json(),
        recommendations: await recommendations.json()
      };

      return new Response(JSON.stringify(dashboard), {
        headers: {"Content-Type": "application/json"}
      });
    }

    return fetch(request); // pass through
  },
}`,description:"Edge worker aggregating multiple API calls into a single response, reducing client-side latency."},{title:"Private Cache for Dynamic Content",useCase:"Ensuring dynamic content is not cached by CDN.",code:`# Option 1: Set Cache-Control to private/no-store
# Cache-Control: private, no-store
# CDN will never cache this response
# Browser will not cache either

# Option 2: Set Cache-Control to no-cache
# Cache-Control: no-cache
# Browser may cache but must revalidate
# CDN should not cache (varies by provider)

# Option 3: Set s-maxage=0
# Cache-Control: public, max-age=3600, s-maxage=0
# Browser caches 1 hour,
# CDN does not cache at all (s-maxage=0)

# Option 4: Custom header to bypass CDN cache
# X-Accel-Expires: 0  (for Nginx-based CDNs)`,description:"Methods to ensure dynamic content is never cached by the CDN while allowing selective browser caching."}],mcqQuestions:[{question:"What is dynamic content in CDN context?",options:["Content that never changes","Content that varies by user/session/context","Only video content","Only HTML content"],answer:1,explanation:"Dynamic content varies by user, session, time, or context."},{question:"Why is caching dynamic content challenging?",options:["It is too large","It varies by user/context creating many cache entries","It is encrypted","It expires too fast"],answer:1,explanation:"Each variation of dynamic content needs a separate cache entry, making caching inefficient."},{question:"What does the Vary header do?",options:["Changes the content encoding","Tells CDN to cache different versions based on request headers","Varies the TTL dynamically","Changes the origin server"],answer:1,explanation:"Vary tells CDNs to cache different versions based on request headers like Cookie or Authorization."},{question:"What is an Edge Worker used for?",options:["Cleaning edge cache","Running code at edge for dynamic responses","Managing DNS records","Compressing images"],answer:1,explanation:"Edge Workers run custom code at CDN edge locations for dynamic content generation."},{question:"What is ESI?",options:["Edge Side Includes — dynamic content assembly from cached fragments","Extra Server Infrastructure","Elastic Server Integration","Edge Security Interface"],answer:0,explanation:"ESI allows composing dynamic content from cached fragments at the edge."},{question:"What CDN feature helps with selective dynamic content caching?",options:["Cache-Control: private","s-maxage with Vary header","Increasing TTL","Disabling cache entirely"],answer:1,explanation:"Using s-maxage with Vary header allows selective caching of dynamic content with user-specific variations."}]};export{e as cdn_dynamic_content};
