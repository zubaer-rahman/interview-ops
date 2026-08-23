const e={id:"sql-pagination",title:"Pagination Strategies",difficulty:"intermediate",estimatedMinutes:20,tldr:["Pagination splits large result sets into pages for UI display. Two main strategies: offset-based and keyset-based (cursor).","OFFSET/LIMIT pagination: simple, but slow for large offsets because the database scans and discards rows.","Keyset pagination (cursor-based): uses WHERE conditions on sorted columns. Fast for any page depth but requires unique sort order.","For large datasets (millions of rows), keyset pagination is dramatically faster than offset pagination."],laymanDefinition:"OFFSET pagination is like reading a book by counting pages from the start each time — to get to page 1000, you still count 1-1000. Keyset pagination is like using a bookmark — you remember the last item and start from there. Much faster for deep pages.",deepDive:[{heading:"OFFSET/LIMIT Pagination",text:"LIMIT 20 OFFSET 0 — page 1. LIMIT 20 OFFSET 40 — page 3. Simple to implement. Database must scan and discard OFFSET rows (sequential scan or index scan + skip). Performance degrades significantly at large offsets."},{heading:"Keyset (Cursor) Pagination",text:"SELECT * FROM table WHERE id > last_seen_id ORDER BY id LIMIT 20. Uses index to jump directly to the starting point. No rows are scanned and discarded. Constant performance regardless of page depth."},{heading:"Keyset with Multiple Columns",text:"WHERE (created_at, id) > (last_created_at, last_id) ORDER BY created_at, id — composite tuple comparison for tie-breaking. Requires composite unique index on the sort columns."},{heading:"Comparison",text:"OFFSET: simple, URL-friendly (?page=3), allows jumping to any page, stable page numbers. Keyset: fast at scale, no page number jumping, sort order must be stable, requires unique sort column."},{heading:"Hybrid Approach",text:"Use OFFSET for first few pages (users rarely go deep). Use keyset for deeper pages or infinite scroll. Many APIs use keyset (cursor) pagination exclusively: Twitter API, GitHub API, Stripe API."}],interviewAnswer:"Choose offset pagination for small datasets and admin tables (where page jumping is needed). Choose keyset/cursor pagination for large datasets, APIs, and infinite scroll. The performance difference at scale is enormous — keyset is O(log n), offset is O(n).",interviewQuestions:[{question:"What is offset pagination?",answer:"LIMIT n OFFSET m — skips m rows and returns n. Simple but slow for large offsets."},{question:"What is keyset pagination?",answer:"WHERE sort_column > last_value ORDER BY sort_column LIMIT n — uses index to fast-forward."},{question:"Why is OFFSET slow for large offsets?",answer:"The database must scan and discard all OFFSET rows. Scanning 100,000 rows to show page 500 is expensive."},{question:"Is keyset always faster than OFFSET?",answer:"For deep pagination, yes. For the first few pages, the difference is negligible."},{question:"What is required for keyset pagination?",answer:"A unique sort column (or unique combination). A stable sort order. An index on the sort column."},{question:"Can keyset pagination jump to a specific page?",answer:"No. Keyset pagination cannot jump to page N arbitrarily — it requires knowing the last item of the previous page."},{question:"What is tuple comparison for keyset?",answer:"WHERE (created_at, id) > (\\'2024-01-15\\', 100) — compares both columns for tie-breaking. Requires composite index."},{question:"What APIs use cursor pagination?",answer:"Twitter, GitHub, Stripe, Slack — most modern APIs use cursor (keyset) pagination for their main endpoints."},{question:"What is the hybrid approach?",answer:"Use OFFSET for first few pages (users rarely go deep). Use keyset for deeper pages or infinite scrolling."},{question:"What is the SQL for keyset with descending order?",answer:"WHERE created_at < last_created_at OR (created_at = last_created_at AND id < last_id) ORDER BY created_at DESC, id DESC LIMIT n."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Pagination Strategies</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OFFSET</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Skip rows</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">LIMIT</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">Page size</text><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Keyset</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">WHERE > last</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tuple</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Multi-col</text><rect x="280" y="35" width="200" height="100" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="380" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pagination</text><text x="380" y="118" text-anchor="middle" font-size="9" fill="#ddd">OFFSET vs Keyset. Keyset is O(log n)</text><text x="380" y="129" text-anchor="middle" font-size="9" fill="#ddd">. OFFSET is O(n). Choose wisely.</text><text x="240" y="175" font-size="9" fill="#666" text-anchor="middle">Pagination: OFFSET/LIMIT vs Keyset/Cursor — perfor</text><text x="240" y="187" font-size="9" fill="#666" text-anchor="middle">mance implications at scale.</text></svg>',codeExamples:[{title:"OFFSET Pagination",useCase:"Simple but slow at depth.",code:`-- Page 1 (rows 1-20)
SELECT id, name, created_at
FROM employees
ORDER BY id
LIMIT 20 OFFSET 0;

-- Page 50 (rows 981-1000)
SELECT id, name, created_at
FROM employees
ORDER BY id
LIMIT 20 OFFSET 980;
-- Database scans 1000 rows, returns 20!`,description:"OFFSET pagination — simple but inefficient for deep pages."},{title:"Keyset Pagination",useCase:"Fast at any depth.",code:`-- Initial query (no cursor)
SELECT id, name, created_at
FROM employees
ORDER BY id
LIMIT 20;
-- Last item: id = 20

-- Next page (using cursor)
SELECT id, name, created_at
FROM employees
WHERE id > 20
ORDER BY id
LIMIT 20;
-- Direct index lookup — no scan!`,description:"Keyset pagination uses the id > last_seen pattern for O(log n) performance."},{title:"Keyset with Multiple Columns",useCase:"Tie-breaking pagination.",code:`-- Initial query
SELECT id, name, created_at
FROM employees
ORDER BY created_at DESC, id DESC
LIMIT 20;
-- Last item: created_at = '2024-06-15', id = 500

-- Next page with tuple comparison
SELECT id, name, created_at
FROM employees
WHERE (created_at, id) < ('2024-06-15', 500)
ORDER BY created_at DESC, id DESC
LIMIT 20;

-- Needs composite index on (created_at DESC, id DESC)`,description:"Tuple comparison handles ties when multiple rows share the same sort value."},{title:"Keyset for Forward/Backward",useCase:"Bi-directional pagination.",code:`-- Forward (next page)
SELECT * FROM employees
WHERE created_at < '2024-06-15'
ORDER BY created_at DESC
LIMIT 20;

-- Backward (previous page)
SELECT * FROM employees
WHERE created_at > '2024-06-01'
ORDER BY created_at ASC
LIMIT 20;

-- Reverse results on client side for display`,description:"Bi-directional keyset pagination for both next and previous page support."},{title:"Seek Method (Alternative)",useCase:"WHERE on unique column.",code:`-- Seek method (alternative to keyset)
SELECT * FROM employees
ORDER BY salary DESC, id ASC
LIMIT 20;
-- Cursor: salary=85000, id=42

-- Next page:
SELECT * FROM employees
WHERE salary < 85000
   OR (salary = 85000 AND id > 42)
ORDER BY salary DESC, id ASC
LIMIT 20;

-- Requires composite index on (salary DESC, id ASC)`,description:"Seek method handles complex ORDER BY with multiple columns and directions."}],mcqQuestions:[{question:"Why is OFFSET slow at deep pages?",options:["Network latency","Database scans discarded rows","Index lookup","Query parsing"],answer:1,explanation:"The database must scan and discard all rows up to the OFFSET value."},{question:"What drives keyset pagination?",options:["LIMIT only","WHERE > last_value","OFFSET","RANDOM"],answer:1,explanation:"Keyset pagination uses WHERE condition on the sort column to fast-forward."},{question:"What is required for keyset pagination?",options:["Unique sort column","Table index","Sequential IDs","Both A and B"],answer:3,explanation:"A unique sort column with an index is needed for reliable keyset pagination."},{question:"Can keyset pagination jump to page N?",options:["Yes","No","Only with OFFSET","Only with cursors"],answer:1,explanation:"Keyset pagination cannot arbitrarily jump to a specific page number."},{question:"What APIs commonly use cursor pagination?",options:["GitHub","Twitter","Stripe","All of the above"],answer:3,explanation:"Modern APIs use cursor (keyset) pagination for performance."},{question:"What comparison handles multi-column keyset?",options:["AND","Tuple comparison","OR comparison","Subquery"],answer:1,explanation:"Tuple comparison (col1, col2) > (val1, val2) handles multi-column keyset."}]};export{e as sql_pagination};
