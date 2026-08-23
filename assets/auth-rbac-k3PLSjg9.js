const e={id:"auth-rbac",title:"RBAC (Role-Based Access Control)",difficulty:"intermediate",estimatedMinutes:25,tldr:["RBAC is an authorization model where permissions are assigned to roles, and users are assigned to roles.","Instead of assigning permissions directly to each user, you define roles (Admin, Manager, Employee) and grant permissions to those roles.","RBAC simplifies management at scale: changing a role's permissions updates all users with that role.","Key concepts: role hierarchy (senior roles inherit junior permissions), separation of duties, and least privilege."],laymanDefinition:`RBAC is like a company badge system. Instead of programming each employee's door access individually, you create badges for roles: "Employee" opens the front door, "Manager" also opens the supply closet, "Admin" opens every door. New hires get an "Employee" badge — you don't reprogram doors for each person.`,deepDive:[{heading:"Core RBAC Concepts",text:"Users: individual accounts. Roles: job functions (Admin, Editor, Viewer). Permissions: actions on resources (create:post, edit:post, delete:post). Assignments: user <-> role (many-to-many), role <-> permission (many-to-many). A user\\'s effective permissions = union of all their roles\\' permissions."},{heading:"Role Hierarchy",text:"Admin inherits all permissions from Manager. Manager inherits from Employee. Employee has base permissions. Hierarchy reduces duplication — common permissions at lower levels, additive at higher levels. Implement as parent_role_id self-reference in roles table."},{heading:"Static vs Dynamic Separation of Duties",text:"Static: a user cannot be assigned conflicting roles simultaneously (e.g., Procurement and Approver). Dynamic: a user can have both roles but cannot act as both in the same transaction. Prevents fraud by requiring two people for sensitive operations."},{heading:"RBAC Implementation Patterns",text:"Database schema: users, roles, permissions, user_roles, role_permissions tables. Enforcement: middleware checks roles on routes. Service layer checks permissions. Frontend: hide/show UI elements based on user roles."},{heading:"RBAC vs ABAC",text:"RBAC: simple, coarse-grained, role explosion at scale. ABAC: flexible, fine-grained, complex policy engine. RBAC is sufficient for most applications. Consider ABAC when you need attribute-based rules (time, location, resource properties)."}],interviewAnswer:"RBAC is the most practical authorization model for most applications. Define roles based on job functions. Use role hierarchy to reduce duplication. Enforce at both API and service layers. Avoid role explosion by designing roles thoughtfully — combine with ABAC if needed for complex rules.",interviewQuestions:[{question:"What is RBAC?",answer:"Role-Based Access Control — permissions are assigned to roles, and users are assigned to roles."},{question:"What are the core RBAC components?",answer:"Users, Roles, Permissions, and the many-to-many relationships between them (user_roles, role_permissions)."},{question:"What is role hierarchy?",answer:"Senior roles inherit permissions from junior roles. Admin inherits from Manager, Manager inherits from Employee."},{question:"What is separation of duties?",answer:"Preventing a single user from having conflicting roles (e.g., creating and approving purchase orders)."},{question:"What is the difference between RBAC and ABAC?",answer:"RBAC uses roles; ABAC uses attributes (user, resource, environment). RBAC is simpler; ABAC is more flexible."},{question:"What is role explosion?",answer:"Too many roles created to handle edge cases, making management complex. Avoid by using attributes or ABAC for exceptions."},{question:"How is RBAC enforced in web apps?",answer:"Middleware checks route access by role. Service layer validates permissions for business logic."},{question:"What is the principle of least privilege in RBAC?",answer:"Assign only the minimum roles necessary for a user to perform their job functions."},{question:"Can a user have multiple roles?",answer:"Yes. Effective permissions are the union of all assigned roles."},{question:"How do you handle temporary elevated access?",answer:"Time-bound role assignments (just-in-time access). Audit logs for elevation events."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">RBAC (Role-Based Access Control)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Users</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Individual accounts</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Roles</text><text x="225" y="43" text-anchor="middle" font-size="9" fill="#ddd">Admin, Manager, Employe</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">e</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Permissions</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">CRUD actions</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="130" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="225" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Role Hierarchy</text><text x="225" y="89" text-anchor="middle" font-size="9" fill="#ddd">Inherit permissions</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User_Roles</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Many-to-many</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Role_Perms</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">Many-to-many</text><rect x="300" y="35" width="180" height="135" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">RBAC</text><text x="390" y="142" text-anchor="middle" font-size="9" fill="#ddd">Role-Based Access Control: users</text><text x="390" y="153" text-anchor="middle" font-size="9" fill="#ddd"> <-> roles <-> permissions. Hier</text><text x="390" y="164" text-anchor="middle" font-size="9" fill="#ddd">archy, separation of duties.</text><text x="240" y="210" font-size="9" fill="#666" text-anchor="middle">RBAC: Users are assigned roles; roles have permiss</text><text x="240" y="222" font-size="9" fill="#666" text-anchor="middle">ions. Clean, scalable authorization model.</text></svg>',codeExamples:[{title:"RBAC Database Schema (PostgreSQL)",useCase:"Tables for RBAC.",code:`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  parent_role_id INT REFERENCES roles(id) -- hierarchy
);

CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  resource VARCHAR(50) NOT NULL,
  action VARCHAR(20) NOT NULL, -- create, read, update, delete
  UNIQUE(resource, action)
);

CREATE TABLE user_roles (
  user_id INT REFERENCES users(id),
  role_id INT REFERENCES roles(id),
  PRIMARY KEY (user_id, role_id)
);

CREATE TABLE role_permissions (
  role_id INT REFERENCES roles(id),
  permission_id INT REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);`,description:"Complete RBAC database schema with role hierarchy support."},{title:"RBAC Middleware (Express)",useCase:"Route protection by role.",code:`const requireRole = (...roles) => {
  return async (req, res, next) => {
    const userRoles = await db.query(
      "SELECT r.name FROM user_roles ur
       JOIN roles r ON r.id = ur.role_id
       WHERE ur.user_id = $1",
      [req.user.id]
    );

    const hasRole = userRoles.rows.some(
      r => roles.includes(r.name)
    );

    if (!hasRole) {
      return res.status(403).json({
        error: 'Insufficient role'
      });
    }

    next();
  };
};

app.delete('/api/posts/:id',
  authenticate, requireRole('admin'),
  postController.delete
);`,description:"RBAC middleware checks user roles against required roles for route access."},{title:"Permission Check with Hierarchy",useCase:"Resolve inherited permissions.",code:`async function getEffectivePermissions(userId) {
  // Recursive CTE to resolve role hierarchy
  const result = await db.query(
    \`WITH RECURSIVE role_tree AS (
      SELECT id, parent_role_id FROM roles
      WHERE id IN (
        SELECT role_id FROM user_roles WHERE user_id = $1
      )
      UNION ALL
      SELECT r.id, r.parent_role_id
      FROM roles r
      JOIN role_tree rt ON rt.parent_role_id = r.id
    )
    SELECT DISTINCT p.resource, p.action
    FROM role_permissions rp
    JOIN permissions p ON p.id = rp.permission_id
    WHERE rp.role_id IN (SELECT id FROM role_tree)\`
    , [userId]
  );
  return result.rows;
}`,description:"Recursive query resolves inherited permissions through role hierarchy."},{title:"Seed Roles and Permissions",useCase:"Initial RBAC setup.",code:`INSERT INTO roles (name, parent_role_id) VALUES
  ('admin', NULL),
  ('manager', 1),  -- admin is parent of manager
  ('employee', 2); -- manager is parent of employee

INSERT INTO permissions (resource, action) VALUES
  ('post', 'create'),
  ('post', 'read'),
  ('post', 'update'),
  ('post', 'delete'),
  ('user', 'read'),
  ('user', 'manage');

-- Employee: basic post access
INSERT INTO role_permissions (role_id, permission_id)
SELECT 3, id FROM permissions WHERE resource = 'post'
  AND action IN ('create', 'read');

-- Manager: can update posts, read users
INSERT INTO role_permissions (role_id, permission_id)
SELECT 2, id FROM permissions
  WHERE (resource = 'post' AND action = 'update')
     OR (resource = 'user' AND action = 'read');

-- Admin: full access (inherits all below + delete + manage)
INSERT INTO role_permissions (role_id, permission_id)
SELECT 1, id FROM permissions
  WHERE action IN ('delete', 'manage');`,description:"Seed data for roles, permissions, and role-permission assignments."},{title:"Frontend Role-Based UI",useCase:"Conditional rendering by role.",code:`// React example: Permission-based rendering
const PERMISSIONS = {
  'create:post': ['admin', 'manager', 'employee'],
  'update:post': ['admin', 'manager'],
  'delete:post': ['admin'],
  'manage:users': ['admin']
};

function can(permission, userRoles) {
  const allowedRoles = PERMISSIONS[permission];
  return allowedRoles?.some(
    r => userRoles.includes(r)
  ) ?? false;
}

function PostActions({ post, userRoles }) {
  return (
    <div>
      {can('update:post', userRoles) &&
        <button>Edit</button>
      }
      {can('delete:post', userRoles) &&
        <button>Delete</button>
      }
    </div>
  );
}`,description:"Frontend role checking for conditional UI rendering (always enforce on backend too)."}],mcqQuestions:[{question:"What does RBAC stand for?",options:["Resource-Based Access Control","Role-Based Access Control","Rule-Based Application Control","Role-Bound Access Control"],answer:1,explanation:"RBAC = Role-Based Access Control."},{question:"What is the benefit of RBAC over per-user permissions?",options:["Faster performance","Simplifies management at scale","More secure","Easier to debug"],answer:1,explanation:"RBAC simplifies permission management by assigning permissions to roles, not individual users."},{question:"What is role hierarchy?",options:["Roles with same permissions","Senior roles inherit junior permissions","Roles in alphabetical order","Temporary role elevation"],answer:1,explanation:"Role hierarchy allows senior roles to inherit permissions from junior roles."},{question:"What problem does separation of duties solve?",options:["Performance","Fraud prevention","Password security","Scalability"],answer:1,explanation:"Separation of duties prevents fraud by requiring multiple people for sensitive operations."},{question:"What is role explosion?",options:["Too many permissions","Too many roles making management hard","Too many users","Deleted roles"],answer:1,explanation:"Role explosion occurs when too many roles are created for edge cases."},{question:"When should you use ABAC instead of RBAC?",options:["Simple apps","When rules depend on attributes","Small teams","Static permissions"],answer:1,explanation:"Use ABAC when access decisions depend on dynamic attributes like time, location, or resource properties."}]};export{e as auth_rbac};
