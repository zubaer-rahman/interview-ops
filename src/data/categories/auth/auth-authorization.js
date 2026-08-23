export const auth_authorization = {
  "id": "auth-authorization",
  "title": "Authorization",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Authorization (AuthZ) determines what an authenticated user is allowed to do — their permissions and access rights.",
    "Authorization happens AFTER authentication. First the system verifies who you are, then checks what you can access.",
    "Common models: RBAC (Role-Based), ABAC (Attribute-Based), PBAC (Policy-Based), ACL (Access Control Lists).",
    "Authorization is enforced at multiple layers: API routes, service layer, database queries (RLS)."
  ],
  "laymanDefinition": "Authorization is the bouncer at a VIP section. Authentication was the ID check at the front door. Now that you are inside, the bouncer checks your wristband (role) to see if you can enter the VIP area. Even if authenticated, you may not be authorized for everything.",
  "deepDive": [
    {
      "heading": "RBAC (Role-Based Access Control)",
      "text": "Users assigned to roles, roles have permissions. Simple to manage at scale. Example: Admin, Manager, Employee roles. Role hierarchy: Admin inherits Manager permissions. Most common authorization model in web applications."
    },
    {
      "heading": "ABAC (Attribute-Based Access Control)",
      "text": "Access decisions based on user attributes, resource attributes, and environment context. Example: \"Managers from department X can edit documents created in the last 30 days.\" More flexible but complex: policy engine needed."
    },
    {
      "heading": "Authorization Levels",
      "text": "Route-level: middleware checks roles before allowing access. Service-level: business logic checks permissions. Data-level: Row-Level Security (RLS) in database, field-level visibility. Defense in depth: enforce at multiple levels."
    },
    {
      "heading": "JWT Authorization",
      "text": "Tokens contain claims (user role, permissions). Server validates signature and checks claims on each request. No session lookup needed (stateless). Trade-off: claims are fixed until token expires — role changes require token reissue."
    },
    {
      "heading": "API Key Authorization",
      "text": "Long-lived keys for machine-to-machine communication. No user context. Simple but less secure. Must rotate periodically. Used for third-party API access, service accounts, CI/CD pipelines."
    }
  ],
  "interviewAnswer": "Authorization controls access after authentication. RBAC is the most practical starting point. Enforce authorization at multiple layers (API, service, database). Never trust client-side authorization checks — always validate on the server.",
  "interviewQuestions": [
    {
      "question": "What is authorization?",
      "answer": "The process of determining what an authenticated user is allowed to access or do."
    },
    {
      "question": "What is the difference between authentication and authorization?",
      "answer": "Authentication = who you are. Authorization = what you can do. AuthN comes first."
    },
    {
      "question": "What is RBAC?",
      "answer": "Role-Based Access Control — users have roles, roles have permissions. Simple and scalable."
    },
    {
      "question": "What is ABAC?",
      "answer": "Attribute-Based Access Control — access decisions based on user/resource/environment attributes. More flexible but complex."
    },
    {
      "question": "How is authorization enforced in web apps?",
      "answer": "Route middleware, service layer validation, database-level RLS. Multiple layers for defense in depth."
    },
    {
      "question": "What is Row-Level Security?",
      "answer": "Database-level authorization — policies control which rows a user can see/modify based on their attributes."
    },
    {
      "question": "How does JWT handle authorization?",
      "answer": "JWT contains claims like role and permissions. The server validates the signature and checks claims on each request."
    },
    {
      "question": "What is an ACL?",
      "answer": "Access Control List — a list of permissions attached to an object specifying which users/roles can access it."
    },
    {
      "question": "What is the principle of least privilege?",
      "answer": "Users should have the minimum permissions necessary to do their job. No more."
    },
    {
      "question": "What is defense in depth?",
      "answer": "Enforcing authorization at multiple layers: network, API, service, and data layer."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Authorization</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AuthN</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Who are you?</text><line x1=\"120\" y1=\"48\" x2=\"160\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"170\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"225\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AuthZ</text><text x=\"225\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">What can you do?</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RBAC</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Roles</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">ABAC</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Attributes</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">RLS</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data level</text><rect x=\"170\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"225\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">JWT Claims</text><text x=\"225\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stateless</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"160\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Authorization</text><text x=\"385\" y=\"167\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Controlling access: RBAC, ABAC, JW</text><text x=\"385\" y=\"178\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">T claims, and multi-layer enforcem</text><text x=\"385\" y=\"189\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ent.</text><text x=\"240\" y=\"225\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Authorization: Controlling what authenticated user</text><text x=\"240\" y=\"237\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">s can access. AuthN -> AuthZ.</text></svg>",
  "codeExamples": [
    {
      "title": "RBAC Middleware (Express)",
      "useCase": "Route-level authorization.",
      "code": "function authorize(...allowedRoles) {\n  return (req, res, next) => {\n    const userRole = req.user.role;\n    if (!allowedRoles.includes(userRole)) {\n      return res.status(403).json({\n        error: 'Insufficient permissions'\n      });\n    }\n    next();\n  };\n}\n\napp.delete('/api/users/:id',\n  authenticate,\n  authorize('admin'),\n  async (req, res) => {\n    // Only admin can delete users\n  }\n);",
      "description": "Route-level authorization middleware checking user roles."
    },
    {
      "title": "ABAC Policy (Casl)",
      "useCase": "Attribute-based authorization.",
      "code": "const { AbilityBuilder, Ability } = require('@casl/ability');\n\nfunction defineAbilityFor(user) {\n  const { can, cannot, build } = new AbilityBuilder(Ability);\n\n  can('read', 'Article', { published: true });\n\n  if (user.role === 'admin') {\n    can('manage', 'all');\n  } else {\n    can('update', 'Article', { authorId: user.id });\n    cannot('delete', 'Article');\n  }\n\n  if (user.isPremium) {\n    can('read', 'PremiumArticle');\n  }\n\n  return build();\n}\n\n// Usage: ability.can('update', article)\n// Returns true/false",
      "description": "ABAC with CASL — flexible permission rules based on user attributes and resource conditions."
    },
    {
      "title": "Database-Level RLS (PostgreSQL)",
      "useCase": "Data-level authorization.",
      "code": "-- Enable RLS on table\nALTER TABLE documents ENABLE ROW LEVEL SECURITY;\n\n-- Policy: users see only their own documents\nCREATE POLICY user_documents ON documents\nUSING (user_id = current_setting('app.user_id')::INT);\n\n-- Policy: managers can see department documents\nCREATE POLICY manager_documents ON documents\nFOR SELECT USING (department_id IN (\n  SELECT dept_id FROM user_depts\n  WHERE user_id = current_setting('app.user_id')::INT\n  AND role = 'manager'\n));",
      "description": "RLS enforces data-level authorization directly in the database."
    },
    {
      "title": "Permission Check Service",
      "useCase": "Service-layer authorization.",
      "code": "class DocumentService {\n  async updateDocument(docId, userId, updates) {\n    const doc = await Document.findByPk(docId);\n    \n    // Authorization check\n    if (doc.userId !== userId &&\n        !(await this.isAdmin(userId))) {\n      throw new ForbiddenError();\n    }\n\n    // Business logic\n    return doc.update(updates);\n  }\n}",
      "description": "Service-layer authorization ensures business logic checks permissions."
    },
    {
      "title": "API Key Auth for Services",
      "useCase": "Machine-to-machine auth.",
      "code": "// Generate API key (hashed in DB)\nconst crypto = require('crypto');\nconst apiKey = crypto.randomBytes(32).toString('hex');\nconst hash = crypto.createHash('sha256').update(apiKey).digest('hex');\n\n// Middleware\napp.use('/api/v1', async (req, res, next) => {\n  const key = req.headers['x-api-key'];\n  if (!key) return res.status(401).json({ error: 'API key required' });\n  const hash = crypto.createHash('sha256').update(key).digest('hex');\n  const service = await db.query(\n    \"SELECT * FROM api_keys WHERE key_hash = $1\", [hash]\n  );\n  if (!service.rows[0]) return res.status(403).json({ error: 'Invalid key' });\n  req.service = service.rows[0];\n  next();\n});",
      "description": "API key authentication for service-to-service communication."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What comes first: authentication or authorization?",
      "options": [
        "Authorization",
        "Authentication",
        "Both at once",
        "Depends on system"
      ],
      "answer": 1,
      "explanation": "Authentication (who you are) comes before authorization (what you can do)."
    },
    {
      "question": "What does RBAC stand for?",
      "options": [
        "Role-Based Access Control",
        "Rule-Based Access Control",
        "Resource-Based Auth Control",
        "Role-Bound Application Control"
      ],
      "answer": 0,
      "explanation": "RBAC = Role-Based Access Control."
    },
    {
      "question": "What authorization model uses attributes?",
      "options": [
        "RBAC",
        "ABAC",
        "PBAC",
        "DAC"
      ],
      "answer": 1,
      "explanation": "ABAC uses user, resource, and environment attributes for decisions."
    },
    {
      "question": "Where should authorization be enforced?",
      "options": [
        "Frontend only",
        "Backend only",
        "Multiple layers",
        "Database only"
      ],
      "answer": 2,
      "explanation": "Authorization should be enforced at API, service, and data layers (defense in depth)."
    },
    {
      "question": "What is the principle of least privilege?",
      "options": [
        "Maximum permissions",
        "Minimum necessary permissions",
        "No permissions",
        "Admin for all"
      ],
      "answer": 1,
      "explanation": "Least privilege means the minimum permissions needed to perform a task."
    },
    {
      "question": "What does RLS enforce?",
      "options": [
        "Route access",
        "Row-level access",
        "Schema access",
        "Table access"
      ],
      "answer": 1,
      "explanation": "Row-Level Security enforces data-level access policies in the database."
    }
  ]
};
