const e={title:"JavaScript Destructuring",difficulty:"beginner",estimatedMinutes:20,tldr:["<strong>Destructuring</strong> is a JavaScript expression that <strong>unpacks</strong> values from arrays or properties from objects into distinct variables.","Array destructuring: <code>const [a, b] = [1, 2]</code> assigns <code>a=1, b=2</code>. Supports <strong>skipping</strong> (<code>[, , c]</code>), <strong>defaults</strong>, and <strong>rest</strong>.","Object destructuring: <code>const { name, age } = obj</code> assigns <code>name=obj.name, age=obj.age</code>. Supports <strong>renaming</strong> (<code>{ name: userName }</code>) and <strong>defaults</strong>.","Destructuring works in <strong>variable declarations</strong>, <strong>function parameters</strong>, <strong>assignments</strong>, and <strong>loops</strong>."],laymanDefinition:"Imagine you receive a gift box that says 'Mixed Fruits' on it. Inside are apples, bananas, and oranges. Instead of unpacking them one by one saying 'this is an apple, this is a banana,' destructuring lets you say 'I want the apple and the banana' and the JavaScript engine automatically extracts them for you. It's like having a machine that opens boxes and hands you exactly the items you asked for, in the order you specified.",deepDive:[{heading:"Array Destructuring — Positional Unpacking",text:"Array destructuring uses position to match variables to values: <code>const [a, b, c] = [1, 2, 3]</code>. You can skip elements with commas: <code>const [, , third] = arr</code>. Default values protect against undefined: <code>const [a = 5, b = 10] = [1]</code> gives a=1, b=10. Swapping variables: <code>[a, b] = [b, a]</code> is a classic use."},{heading:"Object Destructuring — Named Unpacking",text:"Object destructuring uses property names to match: <code>const { name, age } = person</code>. Rename with colon: <code>const { name: personName, age: personAge } = person</code>. Defaults with renaming: <code>const { name = 'Guest', role = 'user' } = person</code>. Nested destructuring: <code>const { address: { city } } = person</code>."},{heading:"Destructuring in Function Parameters",text:"Destructuring can extract specific properties from an object/array passed as an argument: <code>function greet({ name, age }) { ... }</code>. This makes function signatures self-documenting. Combine with defaults: <code>function connect({ host = 'localhost', port = 3000 } = {})</code>. This is the standard pattern for options objects."},{heading:"Nested Destructuring and Complex Patterns",text:"Destructuring works at any depth: <code>const { data: { user: { name } } } = response</code>. Mix array and object destructuring: <code>const { users: [first, ...rest] } = data</code>. Use with the rest operator: <code>const [head, ...tail] = arr</code> or <code>const { name, ...details } = obj</code>. These patterns are common in React hooks and API responses."},{heading:"Destructuring Use Cases and Best Practices",list:["<strong>API responses:</strong> Extract specific fields from JSON responses.","<strong>Function options:</strong> Cleanly extract configuration from an options object.","<strong>React hooks:</strong> <code>const [state, setState] = useState(initial)</code> and <code>const { data, loading } = useQuery()</code>.","<strong>Swapping variables:</strong> <code>[a, b] = [b, a]</code> — no temp variable needed.","<strong>Importing modules:</strong> <code>const { map, filter } = require('lodash')</code>."]}],interviewAnswer:"Destructuring is a JavaScript syntax that unpacks values from arrays (by position) or properties from objects (by name) into variables. Array destructuring uses square brackets: const [a, b] = [1, 2]. Supports skipping, defaults, and rest (...). Object destructuring uses curly braces: const { name, age } = obj. Supports renaming (colon), defaults, nested destructuring, and rest. Destructuring is commonly used in function parameters to extract options objects, in React for useState/useEffect, in imports, and for variable swapping. It makes code more readable by reducing repetitive property access.",interviewQuestions:[{question:"What is destructuring in JavaScript?",answer:"Destructuring is a syntax that unpacks values from arrays or objects into distinct variables. Array destructuring uses positions: const [a, b] = [1, 2]. Object destructuring uses property names: const { name } = { name: 'Alice' }."},{question:"How do you skip elements in array destructuring?",answer:"Use commas without variable names: const [, , third] = [1, 2, 3]. The first two elements are skipped, third gets 3."},{question:"How do you set default values in destructuring?",answer:"With = after the variable: const [a = 10] = [] gives a=10. const { name = 'Guest' } = {} gives name='Guest'. Defaults apply only when the value is undefined."},{question:"How do you rename a property in object destructuring?",answer:"Use colon: const { name: userName, age: userAge } = person. This extracts person.name into userName and person.age into userAge."},{question:"How do you swap two variables using destructuring?",answer:"[a, b] = [b, a]. This swaps the values of a and b without needing a temporary variable."},{question:"How does destructuring work in function parameters?",answer:"function display({ name, age }) { console.log(name, age); }. Called as display({ name: 'Alice', age: 30 }). The object is destructured in the parameter list."},{question:"What is nested destructuring?",answer:"Destructuring nested structures: const { address: { city, zip } } = person. This extracts person.address.city and person.address.zip into city and zip variables."},{question:"Can you mix array and object destructuring?",answer:"Yes: const { users: [first, ...rest] } = data. This extracts data.users, then destructures the array into first and rest."},{question:"What happens if the destructured value is null or undefined?",answer:"Destructuring null or undefined throws a TypeError. Always provide defaults or guard against null/undefined when destructuring potentially null values."},{question:"How is destructuring used in React?",answer:"const [count, setCount] = useState(0) — array destructuring for state hook. const { data, loading, error } = useQuery(...) — object destructuring for query results."}],diagramSvg:`<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="330" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Destructuring — Unpacking Arrays and Objects</text><rect x="40" y="70" width="280" height="55" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="180" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">const [a, b, ...rest] = [1, 2, 3, 4]</text><text x="180" y="112" text-anchor="middle" fill="#9aa0b0" font-size="10">a=1, b=2, rest=[3, 4]</text><rect x="40" y="145" width="280" height="55" rx="6" fill="#1a1d28" stroke="#fbbf24" stroke-width="1.5"/><text x="180" y="168" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">const { name, age } = person</text><text x="180" y="187" text-anchor="middle" fill="#9aa0b0" font-size="10">name = person.name, age = person.age</text><rect x="40" y="220" width="280" height="55" rx="6" fill="#1a1d28" stroke="#98c379" stroke-width="1.5"/><text x="180" y="243" text-anchor="middle" fill="#98c379" font-size="12" font-weight="bold">function greet({ name = 'Guest' })</text><text x="180" y="262" text-anchor="middle" fill="#9aa0b0" font-size="10">Destructuring in function params</text><text x="380" y="100" fill="#9aa0b0" font-size="11">Array → position-based</text><text x="380" y="170" fill="#9aa0b0" font-size="11">Object → name-based</text><text x="380" y="240" fill="#9aa0b0" font-size="11">Parameters → clean API</text></svg>`,codeExamples:[{title:"Array Destructuring Basics",useCase:"Extracting values by position",code:`const rgb = [255, 128, 64];

// Basic destructuring
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 128 64

// Skipping elements
const [, , last] = rgb;
console.log(last); // 64

// Default values
const [a = 1, b = 2, c = 3] = [10, 20];
console.log(a, b, c); // 10 20 3

// Variable swap
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10

// Rest with destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Ignoring return values
function getCoordinates() {
  return [10, 20, 30];
}
const [xCoord, , zCoord] = getCoordinates();
console.log(xCoord, zCoord); // 10 30`,description:"Array destructuring unpacks by position. Supports skipping with commas, defaults with =, rest with ..., and variable swapping."},{title:"Object Destructuring Basics",useCase:"Extracting properties by name",code:`const user = {
  id: 42,
  name: 'Alice',
  email: 'alice@example.com',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// Basic destructuring
const { name, email } = user;
console.log(name, email); // 'Alice' 'alice@example.com'

// Renaming
const { name: userName, email: userEmail } = user;
console.log(userName, userEmail); // 'Alice' 'alice@example.com'

// Default values
const { role = 'user', status = 'active' } = user;
console.log(role, status); // 'user' 'active'

// Renaming with default
const { name: displayName = 'Anonymous' } = user;
console.log(displayName); // 'Alice'

// Nested destructuring
const { address: { city, zip } } = user;
console.log(city, zip); // 'New York' '10001'

// Rest in object destructuring
const { id, password, ...safeUser } = {
  ...user,
  password: 'secret'
};
console.log(safeUser);
// { name: 'Alice', email: 'alice@example.com', address: {...} }`,description:"Object destructuring unpacks by property name. Supports renaming with :, defaults with =, nested destructuring, and rest with ..."},{title:"Destructuring in Function Parameters",useCase:"Options object pattern",code:`// Without destructuring — repetitive
function createUser(name, email, options) {
  const role = options.role || 'user';
  const active = options.active !== false;
  const theme = options.theme || 'light';
  // ...
}

// With destructuring — clean and clear
function createUser(name, email, { role = 'user', active = true, theme = 'dark' } = {}) {
  console.log('Creating:', name, email, role, active, theme);
  return { name, email, role, active, theme };
}

createUser('Alice', 'alice@test.com', { role: 'admin', theme: 'light' });
// Creating: Alice alice@test.com admin true light

createUser('Bob', 'bob@test.com');
// Creating: Bob bob@test.com user true dark (defaults work)

// Array destructuring in function params
function sumFirstTwo([a, b]) {
  return a + b;
}
console.log(sumFirstTwo([3, 7])); // 10

// Multiple params with destructuring
function display({ name, age }, { format }) {
  console.log(format === 'json' ? JSON.stringify({ name, age }) : name + ' is ' + age);
}
display({ name: 'Alice', age: 30 }, { format: 'text' });
// 'Alice is 30'`,description:"Parameter destructuring makes function signatures self-documenting. Default values protect against undefined options. The = {} default ensures destructuring works when no argument is passed."},{title:"Destructuring API Responses",useCase:"Extracting data from nested JSON",code:`// Simulated API response
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 1,
      profile: {
        name: 'Alice',
        avatar: 'https://example.com/avatar.png'
      },
      stats: {
        posts: 42,
        followers: 128
      }
    },
    meta: {
      page: 1,
      total: 100
    }
  }
};

// Deep nested destructuring
const {
  status,
  data: {
    user: {
      profile: { name, avatar },
      stats: { posts, followers }
    },
    meta: { page, total }
  }
} = apiResponse;

console.log(name, avatar);    // 'Alice' 'https://...'
console.log(posts, followers); // 42 128
console.log(page, total);      // 1 100

// Destructuring with renaming for clarity
const {
  data: {
    user: {
      profile: { name: userName },
      stats: { posts: postCount }
    }
  }
} = apiResponse;

console.log(userName, postCount); // 'Alice' 42`,description:"Nested destructuring cleanly extracts deeply nested data from API responses. Renaming clarifies variable names from API field names."},{title:"Practical Destructuring Patterns",useCase:"Everyday use cases",code:`// 1. Swapping variables (no temp needed)
let firstName = 'Alice', lastName = 'Smith';
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName); // 'Smith' 'Alice'

// 2. Returning multiple values from function
function getMinMax(values) {
  return [Math.min(...values), Math.max(...values)];
}
const [min, max] = getMinMax([3, 1, 4, 1, 5, 9]);
console.log(min, max); // 1 9

// 3. Iterating with destructuring (entries)
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);
for (const [key, value] of map) {
  console.log(key + ' = ' + value);
}
// a = 1, b = 2, c = 3

// 4. String destructuring
const [firstChar, ...restChars] = 'hello';
console.log(firstChar, restChars.join('')); // 'h' 'ello'

// 5. Computed property names with destructuring
const key = 'theme';
const settings = { theme: 'dark', lang: 'en' };
const { [key]: currentTheme, lang } = settings;
console.log(currentTheme, lang); // 'dark' 'en'`,description:"Everyday patterns: swapping, multiple return values, Map iteration, string extraction, and computed property destructuring."}],mcqQuestions:[{question:"What does const [a, b] = [1, 2, 3] assign?",options:["a=1, b=2","a=1, b=[2, 3]","a=[1, 2], b=3","Error"],answer:0,explanation:"Array destructuring assigns by position. a gets the first element (1), b gets the second (2). The third element is ignored."},{question:"What is the output of: const { x, y } = { x: 10, y: 20, z: 30 }; console.log(x, y);",options:["10 20","10 30","20 30","undefined undefined"],answer:0,explanation:"Object destructuring extracts by property name. x gets 10, y gets 20. z is ignored."},{question:"How do you set a default value in destructuring?",options:["const { name = 'Guest' } = obj","const { name: 'Guest' } = obj","const [name == 'Guest'] = obj","const { name || 'Guest' } = obj"],answer:0,explanation:"Use = after the variable name to set a default: const { name = 'Guest' } = obj. The default applies only if the value is undefined."},{question:"How do you rename a destructured property?",options:["const { name: userName } = obj","const { name -> userName } = obj","const { name = userName } = obj","const { name(userName) } = obj"],answer:0,explanation:"Use colon: const { name: userName } = obj extracts obj.name into the variable userName."},{question:"What does const [a, , c] = [1, 2, 3] assign?",options:["a=1, c=2","a=1, c=3","a=2, c=3","Error"],answer:1,explanation:"The comma skips the second element (2). a gets 1, c gets 3."},{question:"What happens when you destructure null? const { a } = null;",options:["a is null","a is undefined","TypeError","The code silently fails"],answer:2,explanation:"Destructuring null or undefined throws a TypeError because you cannot access properties of null/undefined."},{question:"What is the purpose of = {} in function({ a } = {})?",options:["It's a syntax error","It provides a default empty object so calling the function without args doesn't throw","It makes 'a' always undefined","It increases performance"],answer:1,explanation:"The = {} provides a default parameter value. If the function is called without arguments, it uses {} instead of undefined, preventing a TypeError."},{question:"What does the following log? const [x, ...y] = [1]; console.log(x, y);",options:["1 [1]","1 []","[1] []","1 undefined"],answer:1,explanation:"x gets 1 (the first element). y collects remaining elements via rest — there are none, so y is []."},{question:"How do you extract properties from a nested object?",options:["const { address: { city } } = obj","const { address.city } = obj","const { address->city } = obj","const { address[city] } = obj"],answer:0,explanation:"Nested destructuring uses colon + braces: const { address: { city } } = obj extracts obj.address.city into city."},{question:"Which pattern correctly swaps a and b?",options:["[a, b] = [b, a]","a = b; b = a;","swap(a, b)","[b, a] = [a, b]"],answer:0,explanation:"[a, b] = [b, a] correctly swaps a and b using array destructuring. Only Option A uses the destructuring pattern. Options B and C are incorrect because they don't achieve a swap."}]};export{e as destructuring};
