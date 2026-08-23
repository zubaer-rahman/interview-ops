const e={id:"sql-er-diagrams",title:"ER Diagrams & Database Design",difficulty:"intermediate",estimatedMinutes:25,tldr:["Entity-Relationship (ER) diagrams visually represent database structure: entities (tables), attributes (columns), and relationships (foreign keys).","Chen notation and Crow's Foot notation are the two most common ER diagram styles.","Relationships: one-to-one (1:1), one-to-many (1:N), many-to-many (M:N). Many-to-many requires a junction table.","Good database design considers normal forms, indexing strategy, naming conventions, and future scalability."],laymanDefinition:'An ER diagram is like a blueprint for a building. Before you start constructing tables, you draw how they connect. A Customer "has many" Orders (one-to-many). An Order "has many" Products through Order_Items (many-to-many). The blueprint ensures you build the right structure.',deepDive:[{heading:"Entities and Attributes",text:"Entity: a real-world object (Customer, Order, Product). Represented as a table. Attribute: a property of an entity (Customer.name, Order.date). Represented as columns. Key attribute: uniquely identifies an entity (primary key)."},{heading:"Relationships and Cardinality",text:"One-to-One (1:1): User has one Profile. One-to-Many (1:N): Customer has many Orders. Many-to-Many (M:N): Student takes many Courses, Course has many Students. M:N uses junction table: Student_Courses with composite PK."},{heading:"Crow\\'s Foot Notation",text:`|| — one (exactly one). >|— — one (zero or one). —< — many. ||—< — one to many. >|—< — many to many. Lines connect entities with crow\\'s foot symbols at the "many" end.`},{heading:"Design Process",text:"1. Identify entities. 2. Define relationships. 3. Add attributes. 4. Assign keys. 5. Normalize to 3NF. 6. Add indexes. 7. Document with naming conventions. 8. Review with stakeholders."},{heading:"Naming Conventions",text:"Tables: plural nouns (users, orders, products). Columns: snake_case lower_case (first_name, order_date). Primary keys: id or table_name_id. Foreign keys: referenced_table_id. Junction tables: table1_table2 (students_courses)."}],interviewAnswer:"ER diagrams and thoughtful database design are the foundation of any well-functioning application. Invest time in the design phase — it is much cheaper than migrating data from a poorly designed schema later.",interviewQuestions:[{question:"What is an ER diagram?",answer:"Entity-Relationship diagram — a visual representation of database entities, attributes, and relationships."},{question:"What is an entity?",answer:"A real-world object or concept that can be distinctly identified. Represented as a table in the database."},{question:"What is an attribute?",answer:"A property or characteristic of an entity. Represented as a column in a table."},{question:"What does one-to-many mean?",answer:"One record in table A relates to many records in table B. Example: one customer has many orders."},{question:"What is a many-to-many relationship?",answer:"Multiple records in table A relate to multiple records in table B. Requires a junction table."},{question:"What is a junction table?",answer:"A table that resolves many-to-many relationships. Contains foreign keys to both related tables."},{question:"What are the two common ER notation styles?",answer:"Chen notation (entities in rectangles, relationships in diamonds). Crow\\'s Foot notation (lines with symbols)."},{question:"What is Crow\\'s Foot notation?",answer:"A notation using lines with symbols (crow\\'s feet) to indicate relationship cardinality."},{question:"What naming convention is recommended for tables?",answer:"Plural snake_case: users, orders, products. Consistent naming improves readability and maintenance."},{question:"What is the first step in database design?",answer:"Identify the entities (nouns) in the system domain. Then define their relationships."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">ER Diagrams & Database Design</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Entities</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Tables</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Attributes</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Columns</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Relations</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">FK links</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cardinality</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">1:1, 1:N, M:N</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Normalize</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">3NF design</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">ER Diagrams & Design</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Visual database blueprint: entities, rela</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">tionships, cardinality, and normalization</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">ER Diagrams: Visual database design with entities,</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> relationships, and cardinality.</text></svg>',codeExamples:[{title:"Simple Schema Example",useCase:"E-commerce database design.",code:`-- E-commerce schema (3NF)

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL REFERENCES customers(id),
  order_date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(20) DEFAULT 'pending'
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

-- Junction table for M:N relationship
CREATE TABLE order_items (
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL DEFAULT 1,
  PRIMARY KEY (order_id, product_id)
);`,description:"Complete normalized e-commerce schema with 1:N and M:N relationships."},{title:"Implementing 1:1 Relationship",useCase:"User and profile.",code:`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE user_profiles (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL REFERENCES users(id),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  avatar_url TEXT,
  bio TEXT
);

-- UNIQUE on user_id enforces 1:1`,description:"One-to-one relationship enforced by UNIQUE constraint on the foreign key."},{title:"Resolving M:N with Junction Table",useCase:"Students and courses.",code:`CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  enrolled_date DATE
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  credits INT
);

-- Junction table with extra attribute (grade)
CREATE TABLE enrollments (
  student_id INT REFERENCES students(id),
  course_id INT REFERENCES courses(id),
  grade CHAR(1),
  enrolled_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, course_id)
);`,description:"Many-to-many relationship with a junction table containing additional attributes."},{title:"Self-Referential Relationship",useCase:"Category hierarchy.",code:`CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  parent_id INT REFERENCES categories(id),
  sort_order INT DEFAULT 0
);

-- Insert hierarchy
INSERT INTO categories (name, parent_id) VALUES
  ('Electronics', NULL),
  ('Computers', 1),
  ('Laptops', 2),
  ('Desktops', 2),
  ('Phones', 1);

-- Use recursive CTE to traverse`,description:"Self-referential foreign key enables parent-child hierarchies in a single table."},{title:"ER Diagram in Text",useCase:"Visualize relationships.",code:`┌──────────────┐       ┌────────────────┐
│  customers   │       │    orders      │
├──────────────┤       ├────────────────┤
│  id (PK)     │──1:N──│  id (PK)       │
│  name        │       │  customer_id   │
│  email       │       │  order_date    │
└──────────────┘       │  status        │
                       └───────┬────────┘
                               │
                      ┌────────┴────────┐
                      │   order_items   │
                      ├────────────────┤
                      │  order_id (PK)  │
                      │  product_id(PK) │
                      │  quantity       │
                      └───┬────┬────┬───┘
              M:N──────────┘    │    └──────────M:N
              ┌─────────────────┴─────────────────┐
              │             products              │
              ├──────────────────────────────────┤
              │  id (PK)                         │
              │  name                            │
              │  price                           │
              └──────────────────────────────────┘`,description:"Text-based ER diagram showing the relationships in the e-commerce schema."}],mcqQuestions:[{question:"What does an ER diagram represent?",options:["Query plans","Database structure visually","Index usage","Query performance"],answer:1,explanation:"ER diagrams show database entities and their relationships visually."},{question:"What is a many-to-many relationship?",options:["One to one","Multiple to multiple via junction","One to multiple","Multiple to one"],answer:1,explanation:"M:N requires a junction table with foreign keys to both related tables."},{question:"What enforces a one-to-one relationship?",options:["PRIMARY KEY","UNIQUE on FK","NOT NULL","CHECK constraint"],answer:1,explanation:"A UNIQUE constraint on the foreign key enforces one-to-one."},{question:"What is a junction table?",options:["Single table join","Resolves M:N relationships","Temporary table","Indexed view"],answer:1,explanation:"Junction tables bridge many-to-many relationships."},{question:"Which cardinality needs a junction table?",options:["1:1","1:N","M:N","All of the above"],answer:2,explanation:"Many-to-many (M:N) relationships require a junction table."},{question:"What is a self-referential FK?",options:["FK to different table","FK to the same table","Circular reference","Composite FK"],answer:1,explanation:"A self-referential foreign key references the same table (hierarchies)."}]};export{e as sql_er_diagrams};
