const e={id:"mern-performance",title:"MERN Performance",difficulty:"advanced",estimatedMinutes:15,tldr:["MERN performance optimization covers frontend (bundle size, rendering), backend (query optimization, caching), and database (indexing, aggregation).","Frontend: lazy loading, code splitting, React.memo, useMemo/useCallback, virtual lists, image optimization.","Backend: MongoDB indexing, lean queries, pagination, compression (gzip), response caching, database connection pooling.","Database: proper indexes, aggregation pipeline vs multiple queries, denormalization for reads, TTL indexes for expiry."],laymanDefinition:"Performance optimization in MERN is like tuning a race car. You check the engine (database queries), reduce weight (bundle size), improve aerodynamics (caching), and ensure smooth gear shifts (React rendering). Every millisecond counts, and small improvements compound into a much faster experience.",deepDive:[{heading:"Frontend Performance",text:'Code splitting with React.lazy + Suspense. useMemo for expensive calculations. useCallback to prevent unnecessary re-renders. React.memo for pure components. Virtual scrolling (react-window) for long lists. Image lazy loading with loading="lazy". Bundle analysis with source-map-explorer.'},{heading:"Backend Response Optimization",text:"Mongoose lean() returns plain JS objects (faster, no model overhead). select() to return only needed fields. Pagination with skip/limit. Compression with compression middleware (gzip). HTTP caching headers (Cache-Control, ETag). Response time < 200ms target."},{heading:"MongoDB Indexing Strategy",text:"Index fields used in queries, sort, and lookups. Compound indexes for multi-field queries. Explain() to analyze query performance. Covered queries when index contains all needed fields. TTL indexes for automatic document expiry. Text indexes for full-text search."},{heading:"Caching Strategies",text:"Browser caching: Cache-Control headers for static assets. CDN caching for images and builds. Server caching: Redis for API responses and database queries. React Query: staleTime to reduce API calls. Memory cache: memory-cache for in-process caching."},{heading:"Network Optimization",text:"Gzip/Brotli compression. Reduce API payload size (select only needed fields). HTTP/2 for multiplexing. Bundle size: tree shaking, code splitting, dynamic imports. Image optimization: WebP format, responsive images, CDN with transformations. Minimize API calls by batching."}],interviewAnswer:"MERN performance requires holistic optimization across all layers. Start by measuring (Lighthouse, React DevTools, MongoDB explain()). Optimize what matters most: database queries and React re-renders. Cache aggressively. Compress responses. Lazy load non-critical resources. Profile before and after each optimization.",interviewQuestions:[{question:"How do you optimize React rendering?",answer:"React.memo, useMemo, useCallback, code splitting, lazy loading, virtual lists, and avoiding unnecessary state updates."},{question:"What does Mongoose lean() do?",answer:"Returns plain JavaScript objects instead of Mongoose documents. Faster queries and less memory usage."},{question:"What is the most important MongoDB performance feature?",answer:"Indexes � they dramatically speed up query execution by allowing the database to find documents without scanning the entire collection."},{question:"How do you reduce bundle size?",answer:"Code splitting with React.lazy, tree shaking, dynamic imports, removing unused dependencies, using smaller libraries."},{question:"What is gzip compression?",answer:"A middleware that compresses HTTP responses before sending, reducing transfer size by ~70%."},{question:"What is React.memo for?",answer:"Prevents re-rendering of a component when its props have not changed. Useful for pure components."},{question:"What is the difference between useMemo and useCallback?",answer:"useMemo caches a computed value. useCallback caches a function reference. Both prevent unnecessary re-renders."},{question:"What is a covered query in MongoDB?",answer:"A query where all required fields are in the index, so MongoDB reads directly from the index without touching documents."},{question:"How do you analyze MongoDB query performance?",answer:'Use .explain("executionStats") to see query execution time, index usage, and number of documents examined.'},{question:"What is the purpose of Cache-Control headers?",answer:"Tell the browser and CDN how long to cache responses, reducing repeat requests for the same resource."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Performance</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">React</text><text x="60" y="43" text-anchor="middle" font-size="9" fill="#ddd">memo + lazy + code</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd"> split</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Express</text><text x="60" y="73" text-anchor="middle" font-size="9" fill="#ddd">lean + compress + </text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">cache</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB</text><text x="60" y="103" text-anchor="middle" font-size="9" fill="#ddd">Indexes + aggregat</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">ion</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Network</text><text x="60" y="133" text-anchor="middle" font-size="9" fill="#ddd">Gzip + HTTP/2 + CD</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">N</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Measure</text><text x="60" y="163" text-anchor="middle" font-size="9" fill="#ddd">Lighthouse + expla</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">in()</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Performance</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Optimize React rendering, Express respons</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">es, MongoDB queries, network transfer. Me</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">asure first, optimize where it matters.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Performance: Measure, optimize queries, cache aggr</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">essively, lazy load, compress. Profiling > guessin</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">g.</text></svg>',codeExamples:[{title:"React Performance Hooks",useCase:"Prevent unnecessary re-renders.",code:`import { useState, useMemo, useCallback, memo } from 'react';

const ExpensiveList = memo(({ items, onToggle }) => {
  console.log('ExpensiveList rendered');
  return items.map(item => (
    <div key={item.id} onClick={() => onToggle(item.id)}>
      {item.name}
    </div>
  ));
});

function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([...]);

  const total = useMemo(() =>
    items.reduce((sum, i) => sum + i.price, 0),
    [items]
  );

  const handleToggle = useCallback((id) => {
    setItems(prev => prev.map(i =>
      i.id === id ? { ...i, toggled: !i.toggled } : i
    ));
  }, []);

  return (
    <div>
      <div>Count: {count} <button onClick={() => setCount(c => c + 1)}>+</button></div>
      <div>Total: \${total}</div>
      <ExpensiveList items={items} onToggle={handleToggle} />
    </div>
  );
}`,description:"React.memo, useMemo, and useCallback to prevent unnecessary child re-renders."},{title:"Mongoose Performance Queries",useCase:"Lean queries and field selection.",code:`// FAST: lean() returns plain JS objects
const items = await Item.find({ active: true })
  .lean()
  .select('name price')
  .sort({ createdAt: -1 })
  .limit(20);

// SLOW: returns Mongoose documents with all fields
const items = await Item.find({ active: true });

// Population with lean
const orders = await Order.find()
  .populate({ path: 'user', select: 'name email' })
  .lean();

// Bulk write for performance
await Item.bulkWrite([
  { updateOne: { filter: { _id: id1 }, update: { price: 10 } } },
  { updateOne: { filter: { _id: id2 }, update: { price: 20 } } }
]);`,description:"Mongoose lean queries for faster reads and bulk operations for efficient writes."},{title:"MongoDB Index Creation",useCase:"Performance indexes for common queries.",code:`// Single field index
await Item.createIndex({ name: 1 });

// Compound index (query + sort)
await Item.createIndex({ category: 1, price: -1 });

// Text index for search
await Item.createIndex({ name: 'text', description: 'text' });

// TTL index (auto-expire after 7 days)
await Session.createIndex({ createdAt: 1 }, { expireAfterSeconds: 604800 });

// Partial index (only active items)
await Item.createIndex({ price: 1 }, { partialFilterExpression: { active: true } });`,description:"MongoDB index types for different query patterns."},{title:"Compression and Caching Middleware",useCase:"Express response optimization.",code:`const compression = require('compression');
const mcache = require('memory-cache');

// Gzip compression
app.use(compression());

// In-memory cache middleware
const cache = (duration) => {
  return (req, res, next) => {
    const key = \`__express__\${req.originalUrl}\`;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      return res.json(JSON.parse(cachedBody));
    }
    const originalJson = res.json.bind(res);
    res.json = (body) => {
      mcache.put(key, JSON.stringify(body), duration * 1000);
      originalJson(body);
    };
    next();
  };
};

router.get('/items', cache(300), getItems);`,description:"Gzip compression and in-memory response caching middleware for Express."},{title:"Code Splitting in React",useCase:"Lazy load components.",code:`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}`,description:"React code splitting with lazy and Suspense to reduce initial bundle size."}],mcqQuestions:[{question:"What does Mongoose lean() do?",options:["Adds loading states","Returns plain JS objects","Enables validation","Creates indexes"],answer:1,explanation:"lean() returns plain JavaScript objects instead of full Mongoose documents for better performance."},{question:"What React API prevents unnecessary re-renders?",options:["useEffect","React.memo","useRef","createContext"],answer:1,explanation:"React.memo prevents re-rendering when props have not changed."},{question:"What is the fastest MongoDB query?",options:["Collection scan","Index scan","Covered query","Aggregation pipeline"],answer:2,explanation:"A covered query reads all required data from the index without touching documents."},{question:"What middleware compresses Express responses?",options:["cors","compression","helmet","morgan"],answer:1,explanation:"compression middleware applies gzip/brotli compression to HTTP responses."},{question:"What is the purpose of useCallback?",options:["Cache computed values","Cache function references","Manage side effects","Handle form state"],answer:1,explanation:"useCallback caches function references to prevent unnecessary re-renders of child components."},{question:"How do you analyze MongoDB query performance?",options:["console.log","explain()","aggregate()","find().pretty()"],answer:1,explanation:'.explain("executionStats") provides detailed query performance analysis.'},{question:"MERN Performance — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Performance — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Performance — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Performance — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_performance};
