const e={id:"auth-nosql-injection",title:"NoSQL Injection",difficulty:"intermediate",estimatedMinutes:20,tldr:["NoSQL injection is a security vulnerability where attackers inject malicious queries into NoSQL databases (MongoDB, Redis, Couchbase).","Unlike SQL injection, NoSQL injection exploits the query language syntax and operator injection rather than string concatenation.","MongoDB is most commonly targeted: attackers inject $ne (not equal), $gt (greater than), $regex operators through JSON input.","Prevention: input validation with type checking, use ORM/ODM methods, sanitize operator characters, avoid passing raw query objects."],laymanDefinition:`NoSQL injection is like a trickster at a library who asks the librarian "Find me books where the author is NOT the author you're thinking of" ($ne). The librarian's system interprets the logical operator, returning books the trickster shouldn't see.`,deepDive:[{heading:"MongoDB Operator Injection",text:'REST APIs parse JSON body into MongoDB query objects. If attacker sends {"$ne": ""} instead of a string, MongoDB interprets $ne as "not equal" operator. Login bypass: {"password": {"$ne": ""}} matches any password that is not empty.'},{heading:"Common MongoDB Injection Operators",text:"$ne (not equal) — bypass equality checks. $gt/$gte (greater than) — bypass range checks. $regex — pattern matching, can extract data character by character. $where — executes JavaScript (dangerous). $in — matches any in array. $exists — checks field existence."},{heading:"NoSQL Injection via JSON Body",text:'Vulnerable: const user = await User.findOne({ email: req.body.email, password: req.body.password }). Input: {"email": "admin@test.com", "password": {"$ne": ""}}. Query becomes: find user where email=admin and password != "". Always validate that values are strings, not objects.'},{heading:"NoSQL Injection in Express + Mongoose",text:"Mongoose\\'s find() methods accept raw query objects from req.body. If you pass req.body directly to find(), attackers can inject operators. Solution: validate input types (typeof === \\'string\\'), use schema validation, or convert inputs explicitly."},{heading:"Prevention Best Practices",text:"1. Validate that input values are strings, not objects. 2. Use Mongoose schema validation (type casting). 3. Sanitize input: strip $ and . characters from keys. 4. Use mongo-sanitize library. 5. Avoid passing req.body directly to queries. 6. Use parameter-style queries when possible."}],interviewAnswer:"NoSQL injection is less known but equally dangerous. The key defense: validate that all query values are the expected primitive types (string, number), not objects. Strip MongoDB operators ($, .) from input keys. Use Mongoose schemas for type coercion. Never pass user input directly as query objects.",interviewQuestions:[{question:"What is NoSQL injection?",answer:"Injecting malicious query operators into NoSQL database queries through unsanitized user input."},{question:"Why is NoSQL injection different from SQL injection?",answer:"NoSQL exploits query operators ($ne, $gt, $regex) rather than SQL syntax. Input is often JSON objects, not strings."},{question:"What is the $ne operator?",answer:'Not equal — can bypass authentication: {"password": {"$ne": ""}} matches any non-empty password.'},{question:"What is the $regex operator?",answer:"Pattern matching — can extract data character by character (like blind SQL injection)."},{question:"How does NoSQL injection happen in Express?",answer:"Express parses JSON body. If passed directly to MongoDB query, attackers can inject operators as nested objects."},{question:"What is the primary prevention?",answer:"Validate that input values are the expected primitive types (strings, numbers), not objects with operators."},{question:"What is mongo-sanitize?",answer:"An npm package that strips $ and . from MongoDB query keys to prevent operator injection."},{question:"Can Mongoose prevent NoSQL injection?",answer:"Partially — Mongoose schema type casting helps but does not prevent all injection if raw objects are passed."},{question:"What is the $where operator?",answer:"Executes JavaScript in MongoDB queries — extremely dangerous if user input reaches it."},{question:"What characters should be stripped from user input?",answer:"$ (dollar sign) and . (dot) — MongoDB uses these for operators and nested field access."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">NoSQL Injection</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User Input</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">{"$ne": ""}</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB Query</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">password: {$ne: ""}</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auth Bypass</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Match all users</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">$regex</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">Blind extraction</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">$where</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">JS execution</text><rect x="10" y="160" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Sanitize</text><text x="65" y="179" text-anchor="middle" font-size="9" fill="#ddd">Strip $ and .</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">NoSQL Injection</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Operator injection in MongoDB. Pre</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">vent by validating input types and</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd"> sanitizing operators.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">NoSQL Injection: MongoDB operator injection via JS</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ON input. Validate types, sanitize $ and .</text></svg>',codeExamples:[{title:"Vulnerable MongoDB Query",useCase:"Direct object injection.",code:`// VULNERABLE — attacker controls query object
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // If attacker sends:
  // {"email": "admin@test.com",
  //  "password": {"$ne": ""}}
  // Query becomes:
  // User.findOne({
  //   email: "admin@test.com",
  //   password: {$ne: ""}
  // })
  // → returns admin user!

  const user = await User.findOne({
    email,
    password, // attacker's object bypasses check
  });
});`,description:"Passing req.body directly allows operator injection — MongoDB interprets $ne, $gt, etc."},{title:"Safe MongoDB Query (Type Validation)",useCase:"Validate input types.",code:`app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate that values are strings
  if (typeof email !== 'string' ||
      typeof password !== 'string') {
    return res.status(400).json({
      error: 'Invalid input types'
    });
  }

  // Now injection is impossible
  // password value is always a string
  // {$ne: ""} would be a string, not an object
  const user = await User.findOne({ email, password });
});`,description:"Type validation prevents object injection — ensure all values are expected primitive types."},{title:"Sanitize Input with mongo-sanitize",useCase:"Strip MongoDB operators.",code:`const sanitize = require('mongo-sanitize');

app.post('/login', async (req, res) => {
  // Strips $ and . from keys/values
  const clean = sanitize(req.body);
  // Input:  {email: "a@b.com", password: {"$ne": ""}}
  // Output: {email: "a@b.com", password: {ne: ""}}
  //        $ removed from $ne — no longer an operator

  const user = await User.findOne({
    email: clean.email,
    password: clean.password,
  });
  // password: {ne: ""} won't match anything
});

// Also works on arrays and nested objects
const clean = sanitize({
  $gt: "",
  $regex: ".*",
  "a.b": "c"
});`,description:"mongo-sanitize strips MongoDB operators ($, .) from user input to prevent injection."},{title:"Mongoose Schema Protection",useCase:"Type casting defense.",code:`const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'] }
});

// Mongoose casts values to schema types
// Input: {email: "admin@test.com", password: {$ne: ""}}

// password: {$ne: ""} → Mongoose sees "String" type
// It may cast the object to string "[object Object]"
// or throw a CastError depending on strict mode

// However, find() with raw filter object:
User.find({ email: req.body.email })
// If req.body.email = {$gt: ""} — Mongoose skips
// type casting for query values sometimes!

// SAFER: validate explicitly
const email = String(req.body.email); // force string`,description:"Mongoose schemas provide partial protection but explicit validation is still needed."},{title:"Regex Injection via $regex",useCase:"Blind data extraction.",code:`// Attacker uses $regex to extract data char by char
// API: /api/users?search=admin

// VULNERABLE:
app.get('/api/users', async (req, res) => {
  const users = await User.find({
    email: {
      $regex: req.query.search
    }
  });
  res.json(users);
});

// Attacker sends:
// GET /api/users?search=^a.*@admin.com$
// → finds emails starting with "a"

// SAFE: restrict to simple string matching
app.get('/api/users', async (req, res) => {
  const search = String(req.query.search || '');
  const users = await User.find({
    email: {
      $regex: escapeRegex(search),
      $options: 'i'
    }
  });
  res.json(users);
});

function escapeRegex(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
}`,description:"$regex injection can extract data like blind SQL injection. Escape regex special characters."},{title:"Block Suspicious Operators (Middleware)",useCase:"Reject dangerous query patterns.",code:`// Middleware to block NoSQL injection attempts
app.use((req, res, next) => {
  const body = JSON.stringify(req.body);
  const dangerous = [
    /\\$ne/i, /\\$gt/i, /\\$regex/i,
    /\\$where/i, /\\$in/i, /\\$exists/i
  ];

  for (const pattern of dangerous) {
    if (pattern.test(body)) {
      return res.status(400).json({
        error: 'Suspicious input detected'
      });
    }
  }

  next();
});

// Or use a library like express-mongo-sanitize
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());
// Automatically strips $ and . from all inputs`,description:"Middleware to detect and block NoSQL injection operators before they reach the database."}],mcqQuestions:[{question:"What is the most common NoSQL injection target?",options:["Redis","MongoDB","Cassandra","DynamoDB"],answer:1,explanation:"MongoDB is the most common target due to its JSON query syntax and operator-rich API."},{question:"What does the $ne operator do?",options:["Not equal","Less than","Regex match","Exists"],answer:0,explanation:'$ne means "not equal" — can bypass equality checks in authentication.'},{question:"What is the primary NoSQL injection prevention?",options:["Parameterized queries","Input type validation","Output encoding","CSP"],answer:1,explanation:"Validate that query values are expected primitive types (strings), not operator objects."},{question:"What characters are stripped by mongo-sanitize?",options:["< >","$ .","/ \\","& |"],answer:1,explanation:"$ (dollar) and . (dot) are stripped to prevent MongoDB operator injection."},{question:"What does Mongoose\\'s schema type casting do?",options:["Prevents all injection","Casts values to defined types","Encrypts data","Validates passwords"],answer:1,explanation:"Mongoose attempts to cast values to schema-defined types, providing partial protection."},{question:"What is $regex injection used for?",options:["Performance optimization","Blind data extraction","Index creation","Data validation"],answer:1,explanation:"$regex can extract data character by character, similar to blind SQL injection."}]};export{e as auth_nosql_injection};
