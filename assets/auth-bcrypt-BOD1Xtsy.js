const t={id:"auth-bcrypt",title:"bcrypt",difficulty:"beginner",estimatedMinutes:15,tldr:["bcrypt is a password hashing function based on the Blowfish cipher. It is the most widely used password hashing algorithm in web applications.","Key features: built-in salt generation, adaptive cost factor, well-audited and battle-tested since 1999.","Output format: $2b$10$[22-character salt][31-character hash] — the cost factor is embedded in the output.","bcrypt is slower than general-purpose hashes (SHA-256) by design — this is what makes it suitable for passwords."],laymanDefinition:"bcrypt is like a special safe that takes exactly 1 second to close (hash). When you set the password, it automatically uses a unique key (salt). If you try to crack it with a computer that tries millions of passwords per second, each attempt still takes 1 second. Good luck cracking many passwords that way.",deepDive:[{heading:"How bcrypt Works",text:"1. Generate 16-byte salt (128 bits). 2. Use Blowfish cipher with the salt and password. 3. Repeat for 2^cost iterations. 4. Format output: algorithm version ($2b$), cost factor, salt, hash. Cost factor is embedded — increasing it over time strengthens existing hashes on next login."},{heading:"Cost Factor (Rounds)",text:"Number of iterations = 2^cost. Cost 10 = 1024 iterations, ~80ms. Cost 12 = 4096 iterations, ~320ms. Each increment doubles the time. Choose highest acceptable for your UX (target ~100-250ms). Increase over time as hardware improves. Upgrade on user login."},{heading:"bcrypt Limitations",text:"Max password length: 72 bytes (passwords beyond are silently truncated). Not memory-hard — can be attacked with FPGAs/ASICs (though slower than SHA). No built-in pepper support. For very high-security: use Argon2id instead."},{heading:"Understanding bcrypt Output",text:"$2b$10$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234. Version: $2b$ (standard). Cost: 10 (2^10 rounds). Salt: first 22 chars of base64. Hash: remaining 31 chars. Total: 60 characters. The cost can be extracted and used for future upgrades."},{heading:"Timing Attack Resistance",text:"bcrypt compare function uses constant-time comparison internally. This means comparing a correct hash vs incorrect hash takes the same amount of time. Prevents attackers from measuring response times to guess characters. Always use the library\\'s compare function, never manual string comparison."}],interviewAnswer:"bcrypt is the most practical password hashing choice for most applications. Use cost factor 10-12. The built-in salt generation handles uniqueness. Upgrade cost factor over time by rehashing on user login. Be aware of the 72-byte limit — pre-hash with SHA-256 if you need longer passwords.",interviewQuestions:[{question:"What is bcrypt?",answer:"A password hashing function based on the Blowfish cipher. The most widely used password hashing algorithm."},{question:"What does the bcrypt output contain?",answer:"Version ($2b$), cost factor, 22-char base64 salt, 31-char base64 hash. Total: 60 characters."},{question:"What is the bcrypt cost factor?",answer:"Number of iterations = 2^cost. Cost 10 = 1024 iterations. Each increment doubles the work."},{question:"What is bcrypt\\'s maximum password length?",answer:"72 bytes. Longer passwords are silently truncated. Pre-hash with SHA-256 if needed."},{question:"Is bcrypt memory-hard?",answer:"No. Unlike Argon2, bcrypt is not memory-hard. It can be attacked with FPGAs (though much slower than SHA)."},{question:"Does bcrypt handle salting automatically?",answer:"Yes. bcrypt generates a cryptographically random salt internally — you do not need to provide one."},{question:"Can you increase bcrypt cost for existing hashes?",answer:"Yes. Rehash on next login with the higher cost factor. The old hash is replaced with the new one."},{question:"Why does bcrypt have a 72-byte limit?",answer:"It is inherent to the Blowfish cipher\\'s key schedule. Workaround: pre-hash with SHA-256, then bcrypt the hex digest."},{question:"How do you verify a bcrypt hash?",answer:"Use the library\\'s compare function: bcrypt.compare(password, hash). It extracts the salt from the stored hash."},{question:"What version prefix should bcrypt hashes use?",answer:"$2b$ (standard) or $2y$ (PHP compatibility). Avoid $2a$ (old, known implementation issues)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">bcrypt</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Password</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Plaintext</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Generate Salt</text><text x="225" y="54" text-anchor="middle" font-size="9" fill="#ddd">16 random bytes</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Hash</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Blowfish cipher</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="130" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="225" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">2^cost Iterations</text><text x="225" y="89" text-anchor="middle" font-size="9" fill="#ddd">Work factor</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Output</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">$2b$10$salt.hash</text><rect x="160" y="105" width="130" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="225" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Store in DB</text><text x="225" y="124" text-anchor="middle" font-size="9" fill="#ddd">60-char string</text><rect x="10" y="140" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Verify</text><text x="65" y="159" text-anchor="middle" font-size="9" fill="#ddd">bcrypt.compare()</text><rect x="300" y="35" width="180" height="130" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">bcrypt</text><text x="390" y="137" text-anchor="middle" font-size="9" fill="#ddd">Battle-tested password hashing. </text><text x="390" y="148" text-anchor="middle" font-size="9" fill="#ddd">Built-in salt, adaptive cost, co</text><text x="390" y="159" text-anchor="middle" font-size="9" fill="#ddd">nstant-time compare.</text><text x="240" y="210" font-size="9" fill="#666" text-anchor="middle">bcrypt: Adaptive password hashing with automatic s</text><text x="240" y="222" font-size="9" fill="#666" text-anchor="middle">alting. The industry standard for password storage</text><text x="240" y="234" font-size="9" fill="#666" text-anchor="middle">.</text></svg>',codeExamples:[{title:"Basic bcrypt Usage (Node.js)",useCase:"Hash and verify passwords.",code:`const bcrypt = require('bcrypt');

// Hash password
const saltRounds = 12;
const password = 'mySecureP@ss123';

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log(hash);
  // $2b$12$VXcVYK6vqB5IX8V5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5
});

// Or with async/await
async function hashPassword(pw) {
  const hash = await bcrypt.hash(pw, saltRounds);
  return hash;
}`,description:"Basic bcrypt hashing with async/await — cost factor 12."},{title:"bcrypt Verification",useCase:"Compare password with stored hash.",code:`async function verifyPassword(plaintext, storedHash) {
  try {
    const match = await bcrypt.compare(plaintext, storedHash);
    return match; // true or false
  } catch (err) {
    // Hash format invalid
    console.error('Verification error:', err.message);
    return false;
  }
}

// The compare function:
// 1. Extracts salt from storedHash (first 29 chars)
// 2. Hashes plaintext with that salt
// 3. Constant-time compares the result
// Note: You do NOT need to extract salt manually`,description:"bcrypt.compare handles salt extraction and constant-time comparison automatically."},{title:"Cost Factor Benchmarking",useCase:"Find optimal cost factor.",code:`const bcrypt = require('bcrypt');

async function benchmarkCosts() {
  const testPassword = 'testPassword123';

  for (let cost = 8; cost <= 14; cost++) {
    const start = Date.now();
    await bcrypt.hash(testPassword, cost);
    const duration = Date.now() - start;
    console.log(\`Cost \${cost}: \${duration}ms\`);
  }
}

// Typical results (varies by hardware):
// Cost 8:  ~40ms
// Cost 10: ~80ms  <-- recommended minimum
// Cost 12: ~320ms <-- recommended target
// Cost 14: ~1280ms <-- too slow for most UX`,description:"Benchmark bcrypt cost factors to find the optimal balance of security and user experience."},{title:"Handling Passwords > 72 Bytes",useCase:"Pre-hash long passwords.",code:`const crypto = require('crypto');
const bcrypt = require('bcrypt');

async function hashLongPassword(longPassword) {
  // Pre-hash with SHA-256 to get fixed 32 bytes
  const preHash = crypto.createHash('sha256')
    .update(longPassword).digest('hex');
  // 64 hex chars — well within 72-byte limit

  const hash = await bcrypt.hash(preHash, 12);
  return hash;
}

async function verifyLongPassword(longPassword, storedHash) {
  const preHash = crypto.createHash('sha256')
    .update(longPassword).digest('hex');
  return bcrypt.compare(preHash, storedHash);
}`,description:"Pre-hash passwords over 72 bytes with SHA-256 before bcrypt to avoid silent truncation."},{title:"Upgrade bcrypt Cost on Login",useCase:"Strengthen hashes over time.",code:`async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user) return res.status(401).send('Invalid credentials');

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).send('Invalid credentials');

  // Check if cost factor needs upgrade
  const currentCost = getCostFactor(user.passwordHash);
  if (currentCost < 12) {
    const newHash = await bcrypt.hash(password, 12);
    await User.updatePassword(user.id, newHash);
  }

  // Proceed with login...
}

function getCostFactor(hash) {
  // Extract cost from hash: $2b$XX$...
  return parseInt(hash.split('$')[2], 10);
}`,description:"Upgrade bcrypt cost factor on user login to gradually strengthen all stored hashes."}],mcqQuestions:[{question:"What does bcrypt\\'s cost factor control?",options:["Salt length","Number of hash iterations","Output length","Memory usage"],answer:1,explanation:"Cost factor controls iterations: 2^cost. Higher cost = slower hashing."},{question:"What is the bcrypt output format?",options:["$2b$cost$salt.hash","$argon2$...","salt:hash:iterations","base64(hash+salt)"],answer:0,explanation:"bcrypt output: $2b$10$22charSalt31charHash (60 characters)."},{question:"What is bcrypt\\'s max password length?",options:["128 bytes","72 bytes","256 bytes","No limit"],answer:1,explanation:"bcrypt silently truncates passwords over 72 bytes."},{question:"Does bcrypt require manual salt generation?",options:["Yes","No, salt is automatic","Depends on version","Only for $2a$"],answer:1,explanation:"bcrypt generates salt automatically — you only provide the password and cost."},{question:"Is bcrypt memory-hard like Argon2?",options:["Yes","No","Partially","Depends on cost"],answer:1,explanation:"bcrypt is not memory-hard. Argon2 is a better choice against hardware attacks."},{question:"How do you increase bcrypt cost for existing hashes?",options:["Rehash all at server startup","Rehash on user login","Not possible","Use migration script"],answer:1,explanation:"Rehash on successful login — transparently upgrades users over time."}]};export{t as auth_bcrypt};
