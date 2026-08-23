export const auth_multi_tenant = {
  "id": "auth-multi-tenant",
  "title": "Multi Tenant Security",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Multi-tenant architecture serves multiple customers (tenants) from a single application instance, with strict data isolation.",
    "Security challenges: tenant A must never access tenant B's data. Isolation failures are catastrophic data breaches.",
    "Three isolation models: separate DB per tenant (strongest), separate schema per tenant, shared DB with tenant_id column (most common).",
    "Key mechanisms: tenant identification middleware, row-level security (RLS), tenant-scoped queries, cross-tenant attack prevention."
  ],
  "laymanDefinition": "Multi-tenant is like an apartment building. Each tenant (company) has their own locked unit (data). The building manager (app) must ensure Tenant A cannot enter Tenant B's apartment. Some buildings give each tenant a separate house (separate DB), others just lock the doors (tenant_id column).",
  "deepDive": [
    {
      "heading": "Isolation Models",
      "text": "Separate Database: each tenant gets their own DB. Strongest isolation, easiest to backup/restore per tenant. Most expensive. Separate Schema: each tenant gets their own schema in shared DB. Moderate isolation. Shared Table: all tenants share tables with tenant_id column. Most cost-effective, requires careful query scoping."
    },
    {
      "heading": "Tenant Identification",
      "text": "Middleware extracts tenant from: subdomain (tenant1.myapp.com), custom domain (tenant1.com), header (X-Tenant-ID), JWT claim, or path prefix. Must be determined before any database operation. Store tenant context in request scope (AsyncLocalStorage)."
    },
    {
      "heading": "Row-Level Security (RLS)",
      "text": "PostgreSQL RLS automatically filters rows based on tenant_id. Enable RLS on shared tables. Create policy: USING (tenant_id = current_setting(\\'app.tenant_id\\')). RLS acts as a safety net — even if a query forgets the tenant filter, RLS enforces it."
    },
    {
      "heading": "Cross-Tenant Attack Vectors",
      "text": "IDOR (Insecure Direct Object Reference): changing tenant_id in request. SQL injection to modify WHERE clauses. API enumeration: iterating tenant IDs. Data leakage in shared caches. Prevention: always scope queries, never trust client-provided tenant IDs, use RLS as defense in depth."
    },
    {
      "heading": "Tenant Data Migration and Backup",
      "text": "Separate DB: standard backup/restore per DB. Shared DB: backup includes all tenants — restoration requires careful scoping. Migrations: run per tenant (separate schema) or once (shared table). Compliance: some regulations require physical data separation (separate DB)."
    }
  ],
  "interviewAnswer": "Multi-tenant security is about data isolation. Choose the isolation model based on compliance needs and cost. Always use tenant-scoped queries. Implement RLS as a safety net. Never trust client-provided tenant IDs — derive from authentication context. Test cross-tenant access scenarios thoroughly.",
  "interviewQuestions": [
    {
      "question": "What is multi-tenancy?",
      "answer": "A single application instance serving multiple customers (tenants) with data isolation."
    },
    {
      "question": "What are the three isolation models?",
      "answer": "Separate DB (strongest), separate schema (moderate), shared table with tenant_id (most common)."
    },
    {
      "question": "What is the most common multi-tenant approach?",
      "answer": "Shared database with tenant_id column in every table — cost-effective with good isolation."
    },
    {
      "question": "What is Row-Level Security (RLS)?",
      "answer": "PostgreSQL feature that automatically filters rows based on a policy — acts as a safety net for tenant isolation."
    },
    {
      "question": "What is IDOR in multi-tenant context?",
      "answer": "Insecure Direct Object Reference — attacker changes tenant_id in request to access another tenant\\'s data."
    },
    {
      "question": "How do you identify the tenant?",
      "answer": "Via subdomain, custom domain, header, JWT claim, or path prefix. Extract in middleware before DB operations."
    },
    {
      "question": "Why never trust client-provided tenant ID?",
      "answer": "Attackers can modify it to access other tenants. Derive tenant ID from the authenticated user\\'s session/token."
    },
    {
      "question": "What is AsyncLocalStorage used for?",
      "answer": "To propagate tenant context across async operations without passing it explicitly through every function call."
    },
    {
      "question": "Which isolation model is best for compliance?",
      "answer": "Separate database per tenant — provides physical data separation required by some regulations."
    },
    {
      "question": "How do you test multi-tenant security?",
      "answer": "Write integration tests that verify Tenant A cannot access Tenant B\\'s data through any API endpoint."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Multi Tenant Security</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Tenant A</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Company ABC</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Tenant B</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Company XYZ</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Isolation</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tenant_id RLS</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Attack</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">IDOR, injection</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"140\" height=\"130\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"230\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Shared App</text><text x=\"230\" y=\"137\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Tenant-scoped queries, RL</text><text x=\"230\" y=\"148\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">S, separate DB optional, </text><text x=\"230\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">cross-tenant prevention.</text><text x=\"240\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Multi Tenant Security: Isolate tenant data via ten</text><text x=\"240\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ant_id, RLS, and defense in depth.</text></svg>",
  "codeExamples": [
    {
      "title": "Tenant Identification Middleware",
      "useCase": "Extract tenant from request.",
      "code": "// Extract tenant from subdomain or header\napp.use((req, res, next) => {\n  // Option 1: subdomain (tenant1.myapp.com)\n  const host = req.headers.host;\n  const parts = host.split('.');\n  req.tenantId = parts[0] !== 'www'\n    ? parts[0]\n    : parts[1];\n\n  // Option 2: custom header\n  // req.tenantId = req.headers['x-tenant-id'];\n\n  // Option 3: from JWT claim\n  // req.tenantId = req.user.tenantId;\n\n  if (!req.tenantId) {\n    return res.status(400).json({\n      error: 'Tenant not identified'\n    });\n  }\n\n  // Set for RLS\n  await db.query(\n    `SET app.tenant_id = '${req.tenantId}'`\n  );\n\n  next();\n});",
      "description": "Middleware extracts tenant ID from request context and sets it for RLS."
    },
    {
      "title": "RLS Policies for Multi-Tenant (PostgreSQL)",
      "useCase": "Automatic tenant isolation.",
      "code": "-- Enable RLS on shared tables\nALTER TABLE orders ENABLE ROW LEVEL SECURITY;\nALTER TABLE products ENABLE ROW LEVEL SECURITY;\nALTER TABLE customers ENABLE ROW LEVEL SECURITY;\n\n-- Policy: restrict access to current tenant\nCREATE POLICY tenant_isolation ON orders\nUSING (tenant_id = current_setting('app.tenant_id')::INT);\n\nCREATE POLICY tenant_isolation ON products\nUSING (tenant_id = current_setting('app.tenant_id')::INT);\n\n-- For INSERT: enforce tenant_id\nCREATE POLICY tenant_insert ON orders\nFOR INSERT WITH CHECK (tenant_id = current_setting('app.tenant_id')::INT);\n\n-- Test: even without WHERE clause, RLS filters\nSELECT * FROM orders; -- only current tenant rows",
      "description": "Row-Level Security policies enforce tenant isolation at the database level."
    },
    {
      "title": "Tenant-Scoped Queries",
      "useCase": "Always filter by tenant.",
      "code": "class TenantService {\n  async getOrders(tenantId) {\n    // Always filter by tenant_id\n    // Even with RLS, scope explicitly\n    return await db.query(\n      \"SELECT * FROM orders WHERE tenant_id = $1\n       ORDER BY created_at DESC\",\n      [tenantId]\n    );\n  }\n\n  async createOrder(tenantId, data) {\n    return await db.query(\n      \"INSERT INTO orders (tenant_id, ...)\n       VALUES ($1, ...) RETURNING *\",\n      [tenantId, ...]\n    );\n  }\n}",
      "description": "Service layer always scopes queries by tenant_id — defense in depth with RLS."
    },
    {
      "title": "Separate Schema per Tenant",
      "useCase": "Schema-based isolation.",
      "code": "-- Create schema for each tenant\nCREATE SCHEMA IF NOT EXISTS tenant_123;\n\n-- Create tables in tenant schema\nCREATE TABLE tenant_123.orders (\n  id SERIAL PRIMARY KEY,\n  ... -- no tenant_id needed\n);\n\n-- Set search_path for tenant\nSET search_path TO tenant_123, public;\n\n-- Now queries automatically use tenant schema\nSELECT * FROM orders; -- tenant_123.orders\n\n// Node.js: switch schema per request\nawait db.query(`SET search_path TO tenant_${tenantId}, public`);",
      "description": "Schema-per-tenant isolation with PostgreSQL schemas and search_path."
    },
    {
      "title": "Cross-Tenant Attack Prevention (IDOR)",
      "useCase": "Validate ownership.",
      "code": "app.get('/api/orders/:id', authenticate, async (req, res) => {\n  const order = await db.query(\n    \"SELECT * FROM orders WHERE id = $1 AND tenant_id = $2\",\n    [req.params.id, req.tenantId]\n  );\n\n  if (!order.rows[0]) {\n    // Return 404, not 403 — don't reveal existence\n    return res.status(404).json({\n      error: 'Order not found'\n    });\n  }\n\n  res.json(order.rows[0]);\n});",
      "description": "Always validate tenant ownership in queries — never trust client-provided resource IDs."
    },
    {
      "title": "AsyncLocalStorage for Tenant Context",
      "useCase": "Propagate tenant across async operations.",
      "code": "const { AsyncLocalStorage } = require('async_hooks');\nconst tenantStorage = new AsyncLocalStorage();\n\n// Middleware: create async context\napp.use((req, res, next) => {\n  tenantStorage.run({ tenantId: req.tenantId }, () => {\n    next();\n  });\n});\n\n// Anywhere in the code:\nfunction getCurrentTenant() {\n  const store = tenantStorage.getStore();\n  return store?.tenantId;\n}\n\n// Service layer (no req parameter needed)\nasync function getOrders() {\n  const tenantId = getCurrentTenant();\n  return db.query(\n    \"SELECT * FROM orders WHERE tenant_id = $1\",\n    [tenantId]\n  );\n}",
      "description": "AsyncLocalStorage propagates tenant context without passing req through every call."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the strongest multi-tenant isolation model?",
      "options": [
        "Shared table",
        "Separate schema",
        "Separate database",
        "Encrypted columns"
      ],
      "answer": 2,
      "explanation": "Separate database per tenant provides the strongest isolation with physical data separation."
    },
    {
      "question": "What is Row-Level Security (RLS)?",
      "options": [
        "Column encryption",
        "Automatic row filtering by policy",
        "Row-level backups",
        "Index optimization"
      ],
      "answer": 1,
      "explanation": "RLS automatically restricts row access based on a policy — ideal for tenant isolation."
    },
    {
      "question": "How should you identify the tenant?",
      "options": [
        "From user input",
        "From authentication context",
        "From URL params",
        "From request body"
      ],
      "answer": 1,
      "explanation": "Tenant should be derived from the authenticated user/session context, never from user input."
    },
    {
      "question": "What is an IDOR vulnerability?",
      "options": [
        "SQL injection",
        "Insecure Direct Object Reference",
        "Cross-site scripting",
        "Denial of service"
      ],
      "answer": 1,
      "explanation": "IDOR occurs when an attacker can access resources by changing IDs in requests."
    },
    {
      "question": "Why should you return 404 instead of 403 for cross-tenant access?",
      "options": [
        "Faster response",
        "Don't reveal resource existence",
        "Easier to implement",
        "Better for SEO"
      ],
      "answer": 1,
      "explanation": "Returning 404 prevents attackers from discovering valid resource IDs."
    },
    {
      "question": "What tool propagates tenant context in Node.js?",
      "options": [
        "Global variables",
        "AsyncLocalStorage",
        "process.env",
        "Session"
      ],
      "answer": 1,
      "explanation": "AsyncLocalStorage (async_hooks) propagates context across async operations without passing parameters."
    }
  ]
};
