const e={id:"sql-users-permissions",title:"Users, Roles & Permissions",difficulty:"intermediate",estimatedMinutes:25,tldr:["PostgreSQL manages access through roles (which can act as users or groups). Permissions are granted at database, schema, table, and column levels.","CREATE ROLE creates a role. LOGIN attribute allows login. CREATE USER is equivalent to CREATE ROLE WITH LOGIN.","GRANT assigns privileges. REVOKE removes privileges. Privileges: SELECT, INSERT, UPDATE, DELETE, ALL, and more.","Row-Level Security (RLS) enables fine-grained per-row access control based on policy expressions."],laymanDefinition:"Roles and permissions are like building security. CREATE ROLE is getting a master key. GRANT is deciding which doors each person can open. RLS is like a security guard who checks if a person is allowed to see specific files, not just enter the room.",deepDive:[{heading:"Roles as Users and Groups",text:"CREATE ROLE alice LOGIN PASSWORD \\'secure\\'; — user-level role. CREATE ROLE developers; GRANT developers TO alice; — group-level role. Roles can be nested (role groups containing other roles). Roles own database objects."},{heading:"Database-Level Privileges",text:"GRANT CONNECT, CREATE ON DATABASE dbname TO role; — connect and create schema permissions. GRANT ALL ON DATABASE — all permissions. Default: public schema grants CREATE to PUBLIC (usually revoked in production)."},{heading:"Schema and Table Permissions",text:"GRANT USAGE ON SCHEMA public TO role; — schema access. GRANT SELECT, INSERT, UPDATE ON table TO role; — table operations. GRANT ALL ON ALL TABLES IN SCHEMA public TO role; — all tables in schema."},{heading:"Column-Level Permissions",text:"GRANT SELECT (name, email) ON users TO role; — only specific columns visible. GRANT UPDATE (status) ON orders TO role; — can only update specific columns. Useful for hiding sensitive data (salary columns)."},{heading:"Row-Level Security (RLS)",text:"ALTER TABLE employees ENABLE ROW LEVEL SECURITY; CREATE POLICY emp_policy ON employees USING (department = current_setting(\\'app.dept\\')); — users only see rows matching their department. Requires superuser or table owner."}],interviewAnswer:"Proper permission management is essential for security and compliance. Use roles for access groups, grant minimal privileges, and consider RLS for multi-tenant applications. Regularly audit permissions with \\dp or information_schema.",interviewQuestions:[{question:"What is a role in PostgreSQL?",answer:"An entity that can own objects and hold privileges. Can act as a user (with LOGIN) or a group (membership)."},{question:"What is the difference between CREATE ROLE and CREATE USER?",answer:"CREATE USER is equivalent to CREATE ROLE WITH LOGIN. CREATE ROLE does not include LOGIN by default."},{question:"How do you grant privileges?",answer:"GRANT privilege ON object TO role; Example: GRANT SELECT ON employees TO app_user;"},{question:"How do you remove privileges?",answer:"REVOKE privilege ON object FROM role; Example: REVOKE DELETE ON employees FROM app_user;"},{question:"What are the main privilege types?",answer:"SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER, CREATE, CONNECT, TEMPORARY, EXECUTE, USAGE, ALL."},{question:"What is Row-Level Security?",answer:"RLS limits which rows a user can see or modify based on a policy expression. Enables per-row access control."},{question:"How do you enable RLS?",answer:"ALTER TABLE table_name ENABLE ROW LEVEL SECURITY; Then CREATE POLICY ... USING (condition)."},{question:"What is the PUBLIC role?",answer:"A special role that represents all database users. Default privileges often grant access to PUBLIC."},{question:"What does GRANT USAGE ON SCHEMA do?",answer:"Allows accessing objects within the schema. Required before granting table-level permissions."},{question:"How do you view privileges?",answer:"\\dp table_name (psql), \\du for roles, information_schema.table_privileges for programmatic access."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Users, Roles & Permissions</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CREATE ROLE</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">User/group</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">GRANT</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Add perms</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">REVOKE</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Remove perms</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">RLS</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">Row security</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="130" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Users & Permissions</text><text x="265" y="148" text-anchor="middle" font-size="9" fill="#ddd">Roles, privileges, schemas, columns, and </text><text x="265" y="159" text-anchor="middle" font-size="9" fill="#ddd">row-level security for access control.</text><text x="240" y="195" font-size="9" fill="#666" text-anchor="middle">Users & Permissions: Role-based access control fro</text><text x="240" y="207" font-size="9" fill="#666" text-anchor="middle">m database level to row level.</text></svg>',codeExamples:[{title:"Creating Roles and Groups",useCase:"User and group management.",code:`-- Create group role
CREATE ROLE engineers NOLOGIN;

-- Create user roles
CREATE ROLE alice LOGIN PASSWORD 'secure123' IN ROLE engineers;
CREATE ROLE bob LOGIN PASSWORD 'pass456' IN ROLE engineers;

-- Grant permissions to group
GRANT SELECT, INSERT ON employees TO engineers;`,description:"Group roles simplify permission management — add users to groups rather than granting individually."},{title:"Schema and Table Grants",useCase:"Controlled access patterns.",code:`-- Application user needs minimal access
CREATE ROLE app_user LOGIN PASSWORD 'app_pass';

-- Schema access
GRANT USAGE ON SCHEMA public TO app_user;

-- Table permissions (not all tables)
GRANT SELECT, INSERT, UPDATE ON orders TO app_user;
GRANT SELECT ON products TO app_user;
-- No access to salaries, audit logs, etc.

-- Default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT ON TABLES TO app_user;`,description:"Minimal permissions for application user — only what is needed."},{title:"Column-Level Security",useCase:"Hide sensitive columns.",code:`-- Managers can see salaries:
CREATE ROLE managers LOGIN PASSWORD 'mgmt_pass';
GRANT SELECT ON employees TO managers;

-- HR staff see only non-sensitive columns:
CREATE ROLE hr_staff LOGIN PASSWORD 'hr_pass';
GRANT SELECT (id, name, email, department, hire_date)
  ON employees TO hr_staff;

-- hr_staff query:
SELECT id, name, email FROM employees; -- works
SELECT salary FROM employees; -- ERROR: permission denied`,description:"Column-level GRANT restricts access to specific columns."},{title:"Row-Level Security Setup",useCase:"Multi-tenant isolation.",code:`-- Enable RLS on orders table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy: users only see their own orders
CREATE POLICY user_orders ON orders
USING (customer_id = current_setting('app.user_id')::INT);

-- Bypass RLS for admins
CREATE POLICY admin_all ON orders
FOR ALL USING (current_setting('app.role') = 'admin');`,description:"RLS ensures users can only access rows belonging to their organization or themselves."},{title:"Revoking Dangerous Privileges",useCase:"Secure production setup.",code:`-- Remove public create privilege
REVOKE CREATE ON SCHEMA public FROM PUBLIC;

-- App user should not modify schema
REVOKE CREATE ON SCHEMA public FROM app_user;

-- App user should not delete
REVOKE DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public FROM app_user;

-- Review privileges
SELECT grantee, privilege_type
FROM information_schema.table_privileges
WHERE table_name = 'employees';`,description:"Production hardening — remove dangerous privileges from application users."}],mcqQuestions:[{question:"What creates a login-capable role?",options:["CREATE ROLE name LOGIN","CREATE USER name","CREATE GROUP name","Both A and B"],answer:3,explanation:"CREATE USER and CREATE ROLE WITH LOGIN both create login-capable roles."},{question:"What does GRANT do?",options:["Removes permissions","Adds permissions","Creates users","Drops roles"],answer:1,explanation:"GRANT assigns privileges to roles."},{question:"What does RLS stand for?",options:["Row-Level Security","Role-Level Security","Remote Login Service","Relational Lock System"],answer:0,explanation:"RLS is Row-Level Security — per-row access control."},{question:"What privilege allows schema access?",options:["SELECT","USAGE","CREATE","ALL"],answer:1,explanation:"USAGE ON SCHEMA allows accessing objects within the schema."},{question:"What is the special PUBLIC role?",options:["A superuser","All database users","Application users","Database owner"],answer:1,explanation:"PUBLIC represents all current and future database users."},{question:"How do you bypass RLS?",options:["WITH ADMIN OPTION","BYPASSRLS attribute","SUPERUSER","Both B and C"],answer:3,explanation:"BYPASSRLS role attribute or superuser status bypasses RLS."}]};export{e as sql_users_permissions};
