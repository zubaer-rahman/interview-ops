const e={id:"express-validation",title:"Validation",difficulty:"intermediate",estimatedMinutes:25,tldr:["Validation ensures incoming data meets expected format, type, and constraints before processing, preventing bad data from reaching business logic and databases.","Express validation is commonly done with express-validator (declarative rules), Joi (schema-based), or Zod (TypeScript-first). Validation middleware runs before route handlers.","Input sanitization removes or escapes dangerous characters (XSS prevention). Validation checks data integrity. Both should be applied at the boundary (routes/middleware).","Validation errors should return 400 with detailed field-level messages. Custom validators can check business rules (unique email, valid date ranges, etc.)."],laymanDefinition:"Validation is like a security checkpoint at an airport. Every bag (request) is scanned against rules (validators). If something suspicious is found (invalid data), the passenger is stopped and told exactly what to fix before proceeding.",deepDive:[{heading:"express-validator Basics",text:"express-validator uses chainable validation methods on req.body, req.query, req.params, req.headers. Example: body(\\'email\\').isEmail().normalizeEmail(). Returns validation result with errors array. Errors contain field, location, message, and value. Use validationResult(req) to check results."},{heading:"Joi Schema Validation",text:"Joi defines schemas as objects: Joi.object({ email: Joi.string().email().required() }). Validation returns { error, value } where error has details array. Joi supports complex validation: cross-field, conditional, custom rules. Better for complex nested objects."},{heading:"Zod Validation (TypeScript)",text:"Zod provides TypeScript-first validation with inferred types: z.object({ email: z.string().email() }). Parsing returns typed object or throws ZodError. Integrates with express via middleware. Great for end-to-end type safety from request to database."},{heading:"Sanitization and Normalization",text:"Sanitization transforms input: trim(), escape(), normalizeEmail(), toLowerCase(). Prevents issues like leading/trailing whitespace, XSS via script injection. Chain after validation: body(\\'name\\').trim().escape().isLength({ min: 1 })."},{heading:"Custom Validators and Error Handling",text:"Custom validators: body(\\'email\\').custom(async (value) => { const exists = await User.findByEmail(value); if (exists) throw new Error(\\'Email taken\\'); }). Error formatting: return 400 with { errors: [{ field, message }] }. Consistent structure helps frontend display errors."}],interviewAnswer:"Validation is a critical security and data integrity layer. Use declarative libraries (express-validator, Joi, Zod) for maintainable rules. Validate at the boundary, sanitize to prevent injection, and return clear error messages for better UX.",interviewQuestions:[{question:"What is the purpose of validation in Express?",answer:"Validation ensures incoming request data meets expected format, types, and constraints before reaching business logic. It prevents invalid data from corrupting databases and provides clear feedback to API consumers."},{question:"How does express-validator work?",answer:"Use chainable methods on body, query, params: body(\\'email\\').isEmail().normalizeEmail(). In route handler, call validationResult(req). If errors exist, return 400 with formatted errors. Works as middleware chain."},{question:"What is the difference between validation and sanitization?",answer:"Validation checks if data meets criteria (rejects invalid). Sanitization transforms data (trims, escapes, normalizes) to make it safe/clean. Often chained: validate then sanitize."},{question:"How do you validate nested objects with Joi?",answer:"Use Joi.object() with nested keys: Joi.object({ user: Joi.object({ name: Joi.string().required() }) }). Supports array validation: Joi.array().items(Joi.object({ id: Joi.number() }))."},{question:"What is Zod and how does it differ?",answer:"Zod is TypeScript-first schema validation. Schemas infer TypeScript types: z.string().email() -> string. Use parse() for strict validation or safeParse() for typed result. Great for end-to-end type safety."},{question:"How do you return validation errors to the client?",answer:"Return 400 status with structured JSON: { success: false, errors: [{ field, message, value }] }. Use validationResult(req).array() to get formatted errors. Frontend can display field-specific messages."},{question:"What are common validation rules?",answer:"isEmail, isLength, isNumeric, isUUID, isISO8601, isIn, matches regex, custom async validators for DB uniqueness, conditional validation (if/else), cross-field validation (password/confirm)."},{question:"How do you validate query parameters?",answer:"Use query() instead of body(): query(\\'page\\').isInt({ min: 1 }).toInt(), query(\\'sort\\').isIn([\\'asc\\', \\'desc\\']). Validation runs on req.query object."},{question:"How do you create custom async validators?",answer:"Use .custom(async (value) => { const exists = await db.check(value); if (exists) throw new Error(\\'Already exists\\'); }). The custom function can be async and throw or return a promise."},{question:"Where should validation middleware be placed?",answer:"Before route handlers that need validated data. In chain: app.post(\\'/users\\', validateUser, createUser). Or as global middleware if all routes need it. Validation errors returned before handler executes."}],diagramSvg:'<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><rect x="0" y="0" width="500" height="200" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Validation</text><rect x="10" y="40" width="140" height="35" rx="4" fill="#68a063" stroke="#68a063" stroke-width="1"/><text x="80" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Request</text><text x="80" y="68" text-anchor="middle" font-size="9" fill="#ddd">Input</text><line x1="150" y1="58" x2="180" y2="58" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="40" width="140" height="35" rx="4" fill="#0070f3" stroke="#0070f3" stroke-width="1"/><text x="260" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Validator</text><text x="260" y="68" text-anchor="middle" font-size="9" fill="#ddd">express-validator</text><rect x="190" y="90" width="140" height="35" rx="4" fill="#28a745" stroke="#28a745" stroke-width="1"/><text x="260" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Sanitizer</text><text x="260" y="118" text-anchor="middle" font-size="9" fill="#ddd">trim/escape</text><line x1="330" y1="58" x2="360" y2="58" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="330" y1="108" x2="360" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="370" y="40" width="100" height="35" rx="4" fill="#ffc107" stroke="#ffc107" stroke-width="1"/><text x="420" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Valid</text><text x="420" y="68" text-anchor="middle" font-size="9" fill="#ddd">Data</text><line x1="370" y1="75" x2="370" y2="95" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="230" y="110" width="140" height="35" rx="4" fill="#17a2b8" stroke="#17a2b8" stroke-width="1"/><text x="300" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Errors</text><text x="300" y="138" text-anchor="middle" font-size="9" fill="#ddd">400 Response</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">Validation: Input -> Validate -> Sanitize -> Valid Data or 400 Error.</text></svg>',codeExamples:[{title:"express-validator Chain",useCase:"Email and password validation.",code:`const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 8 }).withMessage('Min 8 characters'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) throw new Error('Passwords must match');
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
]`,description:"Validates email format, password length, and password confirmation with custom validator."},{title:"Joi Schema Validation",useCase:"Complex nested object validation.",code:`const Joi = require('joi');

const schema = Joi.object({
  user: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(120)
  }).required(),
  tags: Joi.array().items(Joi.string()).max(5)
});

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });
    req.body = value; // Use sanitized value
    next();
  };
}`,description:"Joi schema for nested user object with required fields and array of tags."},{title:"Zod with TypeScript",useCase:"Type-safe validation.",code:`import { z } from 'zod';

const CreateUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  role: z.enum(['user', 'admin']).default('user')
});

app.post('/users', (req, res, next) => {
  const result = CreateUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten().fieldErrors });
  }
  req.validatedBody = result.data; // Fully typed
  next();
});`,description:"Zod schema infers TypeScript types. safeParse returns typed success/error. Validated data is fully typed."},{title:"Sanitization Chain",useCase:"Trim and escape user input.",code:`const { body } = require('express-validator');

body('comment')
  .trim()
  .escape()
  .isLength({ min: 1, max: 1000 })
  .withMessage('Comment must be 1-1000 characters')`,description:"Trim removes whitespace, escape prevents XSS, isLength enforces bounds. Order matters: trim first, then escape."},{title:"Custom Async Validator",useCase:"Check database uniqueness.",code:`body('email').custom(async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error('Email already registered');
  }
  return true;
}).normalizeEmail()`,description:"Async custom validator checks database for existing email. Throws error to fail validation. Normalizes after validation passes."}],mcqQuestions:[{question:"Which library is TypeScript-first for validation?",options:["Joi","express-validator","Zod","Yup"],answer:2,explanation:"Zod provides TypeScript type inference from validation schemas."},{question:"What method checks validation results in express-validator?",options:["validationResult(req)","req.validate()","checkErrors()","validate()"],answer:0,explanation:"validationResult(req) returns the validation result with isEmpty() and array() methods."},{question:"What does sanitization do?",options:["Rejects invalid data","Transforms/cleans data","Encrypts data","Logs data"],answer:1,explanation:"Sanitization transforms input (trim, escape, normalize) to make it safe."},{question:"How do you validate query params with express-validator?",options:["query()","params()","queryString()","req.query()"],answer:0,explanation:"Use query() chain: query(\\'page\\').isInt()."}]};export{e as express_validation};
