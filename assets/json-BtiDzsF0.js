const e={title:"JSON",difficulty:"beginner",estimatedMinutes:20,tldr:["<strong>JSON</strong> (JavaScript Object Notation) is a lightweight, language-independent data interchange format that is <strong>easy for humans to read</strong> and <strong>easy for machines to parse</strong>.","JSON supports: <strong>objects</strong> ({}), <strong>arrays</strong> ([]), <strong>strings</strong> (in double quotes), <strong>numbers</strong>, <strong>booleans</strong>, and <strong>null</strong>.","Key methods: <code>JSON.stringify(value, replacer, space)</code> converts JS → JSON string. <code>JSON.parse(text, reviver)</code> converts JSON string → JS.","JSON is <strong>not</strong> the same as a JavaScript object — JSON requires double-quoted keys, no trailing commas, and no functions/undefined/symbols."],laymanDefinition:"JSON is a universal language for data exchange — like a standardized shipping container. No matter what country (programming language) the package comes from, the container looks the same. You pack your JavaScript data into a JSON string (like putting items in a container), ship it to a server (or receive it), and unpack it back into data. It's the most common format for web APIs. The name comes from 'JavaScript Object Notation' because it looks like JavaScript object literals, but it's actually a strict text format that many languages can use.",deepDive:[{heading:"JSON Syntax and Data Types",text:'JSON supports six data types: <strong>string</strong> (double quotes only: "hello"), <strong>number</strong> (integers and decimals: 42, 3.14), <strong>boolean</strong> (true/false), <strong>null</strong>, <strong>object</strong> (key-value pairs in {}), and <strong>array</strong> (ordered lists in []). Keys must be double-quoted strings. No trailing commas, no comments, no single quotes, no undefined, no functions.'},{heading:"JSON.stringify() — Serialization",text:"JSON.stringify(value) converts a JavaScript value to a JSON string. The optional replacer parameter can be an array of keys to include or a function that transforms values. The space parameter adds indentation for readability. Non-serializable values (undefined, functions, symbols) are omitted from objects or converted to null in arrays. Circular references throw an error."},{heading:"JSON.parse() — Deserialization",text:"JSON.parse(text) parses a JSON string and returns the corresponding JavaScript value. The optional reviver function transforms the parsed value before returning, allowing date parsing or custom transformations. Invalid JSON throws a SyntaxError — always wrap JSON.parse in try/catch."},{heading:"What JSON.stringify Does NOT Support",text:"JSON.stringify silently drops: <strong>undefined</strong> (in objects, becomes null in arrays), <strong>functions</strong>, <strong>Symbols</strong>, <strong>Map/Set</strong> (become {}), <strong>Date</strong> (becomes ISO string but doesn't parse back automatically), <strong>BigInt</strong> (throws TypeError), <strong>circular references</strong> (throws TypeError). Use a replacer function to handle special types."},{heading:"JSON Security Considerations",list:["Never <strong>eval()</strong> JSON — use JSON.parse(). eval executes arbitrary code.","Be careful with <strong>__proto__</strong> keys — they can pollute object prototypes during parsing.","JSON.parse handles <strong>\u2028</strong> and <strong>\u2029</strong> correctly (JavaScript strings don't).","JSON is <strong>not</strong> for secrets — it's plain text with no encryption. Use HTTPS.","Large JSON can cause <strong>memory issues</strong> — parse in chunks or stream for very large data."]}],interviewAnswer:"JSON is a lightweight, language-independent data format based on JavaScript object syntax but with stricter rules. JSON.stringify converts JavaScript values to JSON strings, handling objects, arrays, strings, numbers, booleans, and null. Functions, undefined, and symbols are omitted. JSON.parse converts JSON strings back to JavaScript values — always wrapped in try/catch as invalid JSON throws SyntaxError. JSON requires double-quoted keys, no trailing commas, and no comments. For dates, use ISO strings and a reviver function to parse them back. JSON is the standard data format for web APIs, configuration files, and data storage.",interviewQuestions:[{question:"What is JSON and what is it used for?",answer:"JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It's used for data exchange between servers and clients (REST APIs), configuration files, and data storage. It's language-independent but derived from JavaScript object syntax."},{question:"What data types does JSON support?",answer:"JSON supports: string (double-quoted), number (integer or decimal), boolean (true/false), null, object (key-value pairs), and array (ordered list). JSON does NOT support undefined, functions, symbols, dates, or special number values like NaN or Infinity."},{question:"What is the difference between JSON and a JavaScript object literal?",answer:"JSON requires: double-quoted keys (no unquoted or single-quoted), double-quoted strings (no single quotes), no trailing commas, no comments, no functions, no undefined values, no circular references. JavaScript object literals are more flexible."},{question:"What happens when you JSON.stringify a function?",answer:"Functions are silently omitted from objects (the key disappears) or converted to null in arrays. JSON.stringify does not include functions because JSON is a data format, not a code format. Use a replacer function to handle functions if needed."},{question:"How do you handle dates with JSON?",answer:"JSON.stringify converts Date objects to ISO strings (e.g., '2024-01-15T10:30:00.000Z'). JSON.parse does NOT automatically convert ISO strings back to Date objects — they remain strings. Use a reviver function: JSON.parse(text, (key, value) => { if (typeof value === 'string' && /^\\d{4}-/.test(value)) return new Date(value); return value; });"},{question:"What is the replacer parameter in JSON.stringify?",answer:"The replacer can be: (1) an array of key names to include — only those keys are serialized, (2) a function(key, value) that transforms values — return undefined to omit a key. Useful for redacting sensitive data or transforming values during serialization."},{question:"What is the reviver parameter in JSON.parse?",answer:"The reviver is a function(key, value) called for each key-value pair in the parsed object. It allows transforming the parsed data — for example, converting ISO date strings back to Date objects, or reviving custom types. Return the value as-is to leave it unchanged."},{question:"What error does JSON.parse throw on invalid input?",answer:"JSON.parse throws SyntaxError if the input string is not valid JSON. Always wrap JSON.parse in try/catch: <code>try { const data = JSON.parse(input); } catch (e) { if (e instanceof SyntaxError) { /* handle invalid JSON */ } }</code>"},{question:"How do you pretty-print JSON?",answer:"Use the space parameter: JSON.stringify(obj, null, 2) — indents with 2 spaces. You can also use a string: JSON.stringify(obj, null, '\\t') for tab indentation. This is useful for logging or displaying data."},{question:"Why is eval() dangerous for parsing JSON?",answer:"eval() executes arbitrary JavaScript code. If the JSON string contains malicious code (e.g., from an untrusted API), eval() will run it. JSON.parse() only parses data and is completely safe. Never use eval() or new Function() for parsing JSON."}],diagramSvg:`<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">JSON Data Flow</text><rect x="50" y="70" width="240" height="80" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="170" y="95" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">JavaScript Object</text><text x="170" y="115" text-anchor="middle" fill="#9aa0b0" font-size="10" font-family="monospace">{ name: "Alice", age: 30 }</text><text x="170" y="135" text-anchor="middle" fill="#9aa0b0" font-size="10">(functions, Date, undefined OK)</text><line x1="290" y1="110" x2="350" y2="110" stroke="#fbbf24" stroke-width="2"/><rect x="350" y="65" width="140" height="35" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="420" y="88" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">stringify</text><line x1="490" y1="90" x2="540" y2="90" stroke="#98c379" stroke-width="2"/><rect x="540" y="70" width="140" height="80" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="610" y="95" text-anchor="middle" fill="#98c379" font-size="13" font-weight="bold">JSON String</text><text x="610" y="115" text-anchor="middle" fill="#9aa0b0" font-size="10" font-family="monospace">'{"name":"Alice","age":30}'</text><text x="610" y="135" text-anchor="middle" fill="#9aa0b0" font-size="10">(no functions/undefined)</text><line x1="610" y1="150" x2="610" y2="190" stroke="#98c379" stroke-width="2" marker-end="url(#arrow)"/><rect x="350" y="190" width="300" height="50" rx="6" fill="#1a1d28" stroke="#e5c07b" stroke-width="1.5"/><text x="500" y="213" text-anchor="middle" fill="#e5c07b" font-size="12" font-weight="bold">Transmit / Store</text><text x="500" y="230" text-anchor="middle" fill="#9aa0b0" font-size="10">HTTP response, file, localStorage</text><line x1="500" y1="240" x2="500" y2="280" stroke="#fbbf24" stroke-width="2"/><rect x="500" y="280" width="140" height="35" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="570" y="303" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">parse</text><line x1="500" y1="297" x2="420" y2="297" stroke="#98c379" stroke-width="2"/><rect x="260" y="290" width="160" height="65" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="340" y="315" text-anchor="middle" fill="#6c9fff" font-size="13" font-weight="bold">JavaScript Object</text><text x="340" y="338" text-anchor="middle" fill="#9aa0b0" font-size="10">(back to working data)</text></svg>`,codeExamples:[{title:"JSON.stringify Basic Usage",useCase:"Converting objects to JSON strings",code:`const user = {
  name: 'Alice',
  age: 30,
  isAdmin: false,
  roles: ['user', 'editor'],
  address: null,
  preferences: { theme: 'dark' },
  login: undefined,     // omitted
  greet: function() {},  // omitted
  createdAt: new Date('2024-01-15')
};

// Basic serialization
const json = JSON.stringify(user);
console.log(json);
// {"name":"Alice","age":30,"isAdmin":false,"roles":["user","editor"],"address":null,"preferences":{"theme":"dark"},"createdAt":"2024-01-15T00:00:00.000Z"}
// Note: undefined and function are missing

// Pretty-print (indentation)
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "Alice",
//   "age": 30,
//   ...
// }`,description:"JSON.stringify converts JS objects to JSON strings. Functions, undefined, and symbols are stripped. Dates become ISO strings. Use the space parameter for readable output."},{title:"JSON.parse Basic Usage",useCase:"Converting JSON strings back to objects",code:`const jsonString = '{"name":"Alice","age":30,"isAdmin":false}';

// Parse safely
try {
  const user = JSON.parse(jsonString);
  console.log(user.name);    // 'Alice'
  console.log(user.age);     // 30
  console.log(user.isAdmin); // false
} catch (err) {
  console.error('Invalid JSON:', err.message);
}

// Parsing with date revival (reviver function)
const dataWithDate = '{"event":"Meeting","date":"2024-01-15T10:00:00.000Z"}';
const parsed = JSON.parse(dataWithDate, function(key, value) {
  if (typeof value === 'string' && /^\\d{4}-\\d{2}-\\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
});

console.log(parsed.date instanceof Date); // true
console.log(parsed.date.getFullYear());   // 2024`,description:"Always wrap JSON.parse in try/catch. The reviver function transforms values during parsing — useful for reviving dates, custom types, or filtering data."},{title:"Using Replacer to Filter/Sanitize Output",useCase:"Removing sensitive data before serialization",code:`const user = {
  id: 42,
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secret123',
  ssn: '123-45-6789',
  roles: ['admin']
};

// Replacer as an array — whitelist keys
const safe = JSON.stringify(user, ['id', 'name', 'email', 'roles']);
console.log(safe);
// {"id":42,"name":"Alice","email":"alice@example.com","roles":["admin"]}

// Replacer as a function — blacklist sensitive keys
const sanitized = JSON.stringify(user, function(key, value) {
  if (['password', 'ssn', 'secret'].includes(key)) {
    return undefined;  // Omit this key
  }
  return value;
});
console.log(sanitized);
// {"id":42,"name":"Alice","email":"alice@example.com","roles":["admin"]}

// Replacer with transformation
const masked = JSON.stringify(user, function(key, value) {
  if (key === 'ssn') return '***-**-****';
  if (key === 'password') return undefined;
  return value;
}, 2);
console.log(masked);
// Shows masked SSN, no password`,description:"The replacer parameter controls what gets serialized. Use an array to whitelist specific keys or a function to transform/omit values dynamically."},{title:"JSON deepClone using stringify/parse",useCase:"Creating a deep copy of an object",code:`function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: 'Original',
  nested: { count: 1, items: ['a', 'b'] },
  date: new Date('2024-01-15')
};

const clone = deepClone(original);

// Verify it's a true deep copy
clone.name = 'Modified';
clone.nested.count = 99;
clone.nested.items.push('c');

console.log(original.name);         // 'Original' (unchanged)
console.log(original.nested.count);  // 1 (unchanged)
console.log(original.nested.items);  // ['a', 'b'] (unchanged)
console.log(clone.date instanceof Date); // false! (string, not Date)

// Limitations:
// - Functions, undefined, symbols are LOST
// - Date becomes string (not revived)
// - Circular references throw
// - Map/Set become empty objects
// For robust cloning, use structuredClone() or lodash.cloneDeep`,description:"JSON.parse(JSON.stringify(obj)) is a quick deep clone trick but has limitations. It only works for serializable data (no functions, dates, circular refs). For production, use structuredClone() or a library."},{title:"Custom toJSON for Serialization Control",useCase:"Controlling how objects are serialized",code:`class Product {
  constructor(id, name, price, discount) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;  // 0-1
  }

  // Custom JSON serialization
  toJSON() {
    return {
      productId: this.id,
      displayName: this.name.toUpperCase(),
      finalPrice: this.price * (1 - this.discount),
      currency: 'USD'
    };
  }
}

const product = new Product(1, 'Widget', 100, 0.2);

console.log(JSON.stringify(product));
// {"productId":1,"displayName":"WIDGET","finalPrice":80,"currency":"USD"}

// Without toJSON, it would serialize as:
// {"id":1,"name":"Widget","price":100,"discount":0.2}

// toJSON also works inline:
const user = {
  name: 'Alice',
  password: 'secret',
  toJSON() {
    return { name: this.name };
  }
};
console.log(JSON.stringify(user)); // {"name":"Alice"}`,description:"Objects with a toJSON() method control their own serialization. This is useful for transforming sensitive data, computing derived fields, or normalizing output formats."}],mcqQuestions:[{question:"What does JSON.stringify({ a: 1, b: undefined }) return?",options:['{"a":1,"b":undefined}','{"a":1}','{"a":1,"b":null}',"Error"],answer:1,explanation:`JSON.stringify omits keys with undefined values. The output is '{"a":1}'.`},{question:`What does JSON.parse('{"a":1,}') do?`,options:["Returns { a: 1 }","Throws SyntaxError (trailing comma)","Returns { a: 1, undefined: undefined }","Returns {}"],answer:1,explanation:"JSON does not allow trailing commas. JSON.parse throws SyntaxError for invalid JSON."},{question:"Can JSON.stringify handle circular references?",options:["Yes, it breaks the cycle automatically","No, it throws TypeError","Yes, it converts them to null","Yes, it omits them"],answer:1,explanation:"JSON.stringify throws a TypeError if it encounters a circular reference. Use a replacer function that tracks visited objects to handle this."},{question:"What is the correct way to parse JSON?",options:["eval(jsonString)","JSON.parse(jsonString)","new Function(jsonString)()","jsonString.parseJSON()"],answer:1,explanation:"JSON.parse is the safe and correct way. eval() executes arbitrary code and is dangerous. JSON.parse only parses data."},{question:"Which of these is NOT valid JSON?",options:['{"key": "value"}','{"key": 42}',"{key: 'value'}",'{"key": null}'],answer:2,explanation:"JSON requires double-quoted keys and double-quoted strings. {key: 'value'} has an unquoted key and single-quoted string — both invalid."},{question:"What happens to Date objects when passed to JSON.stringify?",options:["They throw an error","They become ISO strings","They become timestamps","They are omitted"],answer:1,explanation:"Date objects have a toJSON() method that returns an ISO 8601 string. JSON.stringify calls toJSON() automatically."},{question:"What does the replacer parameter in JSON.stringify do?",options:["Formats the output","Filters or transforms values during serialization","Validates the JSON","Replaces empty strings"],answer:1,explanation:"The replacer can be an array (whitelist of keys) or a function that transforms values. Return undefined from the function to omit a key."},{question:"What does JSON.stringify([function(){}]) return?",options:["[null]","[]","[undefined]",'["function(){}"]'],answer:0,explanation:"In arrays, functions are converted to null. In objects, function-valued keys are omitted entirely."},{question:"How do you add indentation to JSON.stringify output?",options:["JSON.stringify(obj, null, 2)","JSON.prettyPrint(obj)","JSON.stringify(obj, { indent: 2 })","JSON.stringify(obj, 2)"],answer:0,explanation:"The third parameter to JSON.stringify is 'space' — a number (spaces) or string (e.g., '\\t') for indentation."},{question:"What is a common limitation of JSON.parse(JSON.stringify(obj)) for deep cloning?",options:["It's too slow","It loses functions, undefined, and special types","It creates shallow copies","It modifies the original object"],answer:1,explanation:"This pattern only works for JSON-serializable data. Functions, undefined, symbols, dates, Maps, Sets, and circular references are not preserved."}]};export{e as json};
