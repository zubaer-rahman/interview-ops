const e={id:"sql-data-types",title:"Data Types Deep Dive",difficulty:"intermediate",estimatedMinutes:25,tldr:["PostgreSQL has the richest set of data types including numeric, character, date/time, boolean, enumerated, geometric, network, bit string, text search, UUID, XML, JSON, array, range, and composite types.","Numeric types: SMALLINT, INTEGER, BIGINT, DECIMAL/NUMERIC (exact), REAL, DOUBLE PRECISION (floating).","Character types: CHAR(n), VARCHAR(n), TEXT (unlimited). TEXT and VARCHAR have same performance in PostgreSQL.","Special types: UUID, INET/CIDR (network), TSVECTOR/TSQUERY (text search), INT4RANGE/NUMRANGE (range)."],laymanDefinition:"Data types are like different containers in a kitchen. SMALLINT is a shot glass (small), INT is a regular glass, BIGINT is a pitcher. VARCHAR(50) is a labeled container that can hold up to 50 items, TEXT is a giant bin. Using the right container prevents spills and wasted space.",deepDive:[{heading:"Numeric Types",text:"SMALLINT (2 bytes, -32k to 32k). INTEGER/INT (4 bytes, -2B to 2B). BIGINT (8 bytes). DECIMAL(p,s)/NUMERIC(p,s) — exact precision, perfect for money. REAL (4 bytes float). DOUBLE (8 bytes float). SERIAL/BIGSERIAL — auto-increment integers."},{heading:"Character Types",text:"CHAR(n) — fixed-length, padded with spaces (wastes space). VARCHAR(n) — variable up to n. TEXT — unlimited. All have same performance in PostgreSQL (unlike other databases). No performance penalty for using TEXT over VARCHAR."},{heading:"Date/Time Types",text:"DATE — calendar date (no time). TIME — time of day. TIMESTAMP — date + time (no timezone). TIMESTAMPTZ — with timezone (stored as UTC). INTERVAL — duration. Always use TIMESTAMPTZ for application timestamps."},{heading:"Boolean and Enumerated",text:"BOOLEAN — true/false. Accepts TRUE, \\'t\\', \\'true\\', \\'1\\', \\'yes\\'. FALSE: FALSE, \\'f\\', \\'false\\', \\'0\\', \\'no\\'. CREATE TYPE mood AS ENUM (\\'sad\\', \\'ok\\', \\'happy\\') — enumerated type with ordered values. Cannot add/remove values without ALTER TYPE."},{heading:"Array, Range, and Composite",text:"INT[] — array type. INT4RANGE — range type with inclusive/exclusive bounds. CREATE TYPE composite AS (a INT, b TEXT) — composite type for table definitions and functions. Custom types extend PostgreSQL\\'s type system."}],interviewAnswer:"Mastering PostgreSQL data types is crucial for schema design. Choosing the right type impacts storage, performance, and data integrity. PostgreSQL's extensible type system supports custom types, domains, and enumerations.",interviewQuestions:[{question:"What are the numeric types in PostgreSQL?",answer:"SMALLINT, INTEGER, BIGINT, DECIMAL/NUMERIC, REAL, DOUBLE PRECISION. Plus serial variants."},{question:"What is the difference between VARCHAR and TEXT?",answer:"No performance difference in PostgreSQL. VARCHAR(n) has a length limit. TEXT is unlimited. Use VARCHAR when length constraint is needed."},{question:"What is the difference between TIMESTAMP and TIMESTAMPTZ?",answer:"TIMESTAMP stores date/time without timezone. TIMESTAMPTZ stores with timezone, normalized to UTC for storage, displayed in session timezone."},{question:"What is NUMERIC/DECIMAL used for?",answer:"Exact precision fixed-point numbers. Perfect for monetary values where floating-point rounding is unacceptable."},{question:"What is an enumerated type?",answer:"A custom type with a fixed set of values: CREATE TYPE status AS ENUM (\\'active\\', \\'inactive\\', \\'pending\\')."},{question:"What is a range type?",answer:"A type that represents a range of values: INT4RANGE (integer range), DATERANGE (date range), NUMRANGE."},{question:"What is a composite type?",answer:"A custom type with multiple fields: CREATE TYPE address AS (street TEXT, city TEXT, zip TEXT)."},{question:"What is UUID type?",answer:"Stores Universally Unique Identifiers. Good for distributed systems. Use gen_random_uuid() to generate."},{question:"What is INET type?",answer:"Stores IPv4 or IPv6 addresses. Supports subnet operations and sorting. Built-in validation."},{question:"What is BYTEA?",answer:"Binary data storage. Up to 1GB per value. Two formats: BYTEA (escape) and BYTEA (hex)."}],diagramSvg:`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Data Types Deep Dive</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Numeric</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">INT, DECIMAL</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Text</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">VARCHAR, TEXT</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Date/Time</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">TIMESTAMP</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Special</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">UUID, INET</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Custom</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">ENUM, COMPOSITE</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Data Types Deep Dive</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">PostgreSQL's rich type system: numeric, t</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">ext, temporal, network, custom types.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Data Types: PostgreSQL's extensive type system for</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> precise and efficient data storage.</text></svg>`,codeExamples:[{title:"Choosing the Right Numeric Type",useCase:"Match type to data.",code:`-- Age: SMALLINT (range: -32768 to 32767)
CREATE TABLE people (age SMALLINT);

-- Population: INTEGER (fits 2 billion)
CREATE TABLE cities (population INT);

-- Large counter: BIGINT
CREATE TABLE page_views (count BIGINT);

-- Monetary: DECIMAL (exact precision)
CREATE TABLE accounts (balance DECIMAL(12,2));

-- Scientific: DOUBLE PRECISION
CREATE TABLE measurements (value DOUBLE PRECISION);`,description:"Choosing the appropriate numeric type for different data ranges and precision needs."},{title:"UUID as Primary Key",useCase:"Distributed-friendly IDs.",code:`CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@x.com');
-- id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' (random)`,description:"UUID primary keys are ideal for distributed systems and avoiding sequential ID guessing."},{title:"Range Types Usage",useCase:"Date range for bookings.",code:`CREATE TABLE room_bookings (
  room_id INT,
  booking_period DATERANGE,
  EXCLUDE USING gist (room_id WITH =, booking_period WITH &&)
);

INSERT INTO room_bookings VALUES
  (101, '[2024-01-01, 2024-01-05)');

-- This will be rejected (overlap):
INSERT INTO room_bookings VALUES
  (101, '[2024-01-03, 2024-01-07)');
-- ERROR: conflicting key`,description:"Range types with exclusion constraints prevent overlapping bookings."},{title:"Enumerated Types",useCase:"Fixed status values.",code:`CREATE TYPE order_status AS ENUM (
  'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  status order_status DEFAULT 'pending'
);

INSERT INTO orders (id, status) VALUES (1, 'pending');
-- Order respects enum order: pending < confirmed < shipped < delivered`,description:"ENUM types enforce valid values and maintain sort order."},{title:"Network Types",useCase:"Store IP addresses.",code:`CREATE TABLE access_log (
  ip INET,
  mac MACADDR,
  accessed_at TIMESTAMPTZ
);

INSERT INTO access_log VALUES
  ('192.168.1.100', '08:00:2b:01:02:03', NOW());

-- Network queries:
SELECT * FROM access_log
WHERE ip <<= '192.168.1.0/24'; -- subnet containment`,description:"INET and MACADDR types provide built-in validation and network operations."}],mcqQuestions:[{question:"Which type is best for monetary values?",options:["FLOAT","DOUBLE","DECIMAL","INTEGER"],answer:2,explanation:"DECIMAL/NUMERIC provides exact precision for monetary values."},{question:"What is the difference between VARCHAR and TEXT in PostgreSQL?",options:["Performance","TEXT is unlimited","VARCHAR is faster","No real difference"],answer:3,explanation:"VARCHAR and TEXT have identical performance in PostgreSQL."},{question:"Which timestamp type stores timezone?",options:["TIMESTAMP","TIMESTAMPTZ","TIMESTAMP WITH LOCAL TZ","All of them"],answer:1,explanation:"TIMESTAMPTZ stores timezone-aware timestamps."},{question:"What is UUID ideal for?",options:["Sequential IDs","Distributed systems","Small tables","Foreign keys"],answer:1,explanation:"UUID is ideal for distributed systems where unique IDs must be generated independently."},{question:"What does ENUM provide?",options:["Unlimited values","Fixed valid values","Faster queries","Smaller storage"],answer:1,explanation:"ENUM restricts values to a predefined set."},{question:"What type stores IP addresses?",options:["TEXT","VARCHAR","INET","IP"],answer:2,explanation:"INET provides built-in IP address validation and operations."}]};export{e as sql_data_types};
