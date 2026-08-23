const e={id:"auth-password-hashing",title:"Password Hashing",difficulty:"intermediate",estimatedMinutes:25,tldr:["Password hashing converts a plaintext password into an irreversible hash using a one-way cryptographic function.","Key properties: one-way (cannot reverse), deterministic (same input = same hash), slow (computationally expensive to resist brute force).","Salting: adding a unique random value to each password before hashing. Prevents rainbow table attacks and identical-password detection.","Modern algorithms: bcrypt, Argon2 (winner of 2015 Password Hashing Competition), scrypt, PBKDF2. Argon2id is the current gold standard."],laymanDefinition:"Password hashing is like a recipe that turns eggs into an omelet. You can make an omelet from eggs, but you cannot turn an omelet back into eggs. Salting is like adding a secret spice unique to each omelet — even if two people use the same eggs, their omelets taste different.",deepDive:[{heading:"What Makes a Good Hash Algorithm?",text:"Slow: tunable work factor (cost). Memory-hard: Argon2 uses significant memory, making GPU/ASIC attacks expensive. Salted: unique per password. Constant-time comparison: prevents timing attacks. Avoid: MD5, SHA-1, SHA-256 (too fast — billions of hashes per second on GPU)."},{heading:"Salting Explained",text:"Salt: cryptographically random string, at least 16 bytes. Stored alongside the hash (not secret). Unique per password. Purpose: two users with same password get different hashes. Prevents precomputed rainbow tables. Makes cracking one password no help for others."},{heading:"bcrypt",text:"Based on Blowfish cipher. Adaptive: cost factor (2^cost iterations) can be increased as hardware improves. Output: $2b$10$[22-char salt][31-char hash]. Cost 10-12 recommended. Built-in salt generation. Max password length: 72 bytes. Most widely used, well-audited."},{heading:"Argon2 (Modern Standard)",text:"Winner of the 2017 Password Hashing Competition. Argon2id: hybrid mode (side-channel + GPU resistant). Parameters: memory cost (64MB+), time cost (3+), parallelism (2+). Output: $argon2id$v=19$m=65536,t=3,p=2$[salt]$[hash]. Not yet as universally available as bcrypt."},{heading:"PBKDF2 and scrypt",text:"PBKDF2: older standard (NIST), used in many legacy systems. Configured with iteration count and hash function (SHA-256). Vulnerable to GPU/ASIC attacks. scrypt: memory-hard (like Argon2 predecessor). Consumes configurable memory to resist hardware attacks. Default in many crypto wallets."}],interviewAnswer:"Use Argon2id if available in your language/framework. Use bcrypt as a widely-supported fallback. Always use a unique salt per password. Set work factor high enough that each attempt takes ~100ms. Never implement your own hashing algorithm. Never use MD5, SHA-1, or unsalted SHA-256 for passwords.",interviewQuestions:[{question:"What is password hashing?",answer:"Converting a password into an irreversible hash using a one-way cryptographic function, protecting it even if the database is breached."},{question:"What is a salt?",answer:"A unique random value added to each password before hashing. Prevents rainbow table attacks and identical-password detection."},{question:"What are the three properties of a good hash algorithm?",answer:"Slow (tunable work factor), memory-hard (resist GPU/ASIC), and salted (unique per password)."},{question:"Why is SHA-256 bad for passwords?",answer:"It is designed to be fast — billions of hashes per second on GPUs. Attackers can brute force passwords quickly."},{question:"What is the current gold standard for password hashing?",answer:"Argon2id — winner of the 2015 Password Hashing Competition. Memory-hard, resistant to GPU and side-channel attacks."},{question:"What is bcrypt\\'s maximum password length?",answer:"72 bytes. Passwords longer than 72 bytes are truncated. Pre-hash very long passwords if needed."},{question:"What does the bcrypt cost factor do?",answer:"Controls the computational cost: 2^cost iterations. Each increment doubles the work. Cost 10-12 is standard."},{question:"What is a pepper?",answer:"A secret, application-wide value added to passwords before hashing (like a salt but kept secret). Adds an extra layer of security. Optional."},{question:"What is constant-time comparison?",answer:"Comparing hashes in a way that takes the same time regardless of how many characters match. Prevents timing attacks."},{question:'What does "one-way" mean?',answer:"Given the hash, it is computationally infeasible to determine the original password. The only way is guessing and checking."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Password Hashing</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Password</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">Plaintext input</text><line x1="140" y1="48" x2="170" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="180" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="235" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Salt</text><text x="235" y="54" text-anchor="middle" font-size="9" fill="#ddd">Unique random value</text><line x1="290" y1="48" x2="310" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="320" y="35" width="150" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="395" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Hash Function</text><text x="395" y="54" text-anchor="middle" font-size="9" fill="#ddd">bcrypt / Argon2id</text><line x1="320" y1="60" x2="320" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stored Hash</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">$2b$10$salt.hash</text><rect x="10" y="100" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Database</text><text x="65" y="119" text-anchor="middle" font-size="9" fill="#ddd">hash + salt</text><rect x="10" y="130" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Verify</text><text x="65" y="138" text-anchor="middle" font-size="9" fill="#ddd">hash(input+salt) == </text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">stored</text><rect x="10" y="160" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="65" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Attack</text><text x="65" y="179" text-anchor="middle" font-size="9" fill="#ddd">Cannot reverse hash</text><rect x="320" y="70" width="140" height="115" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Password Hashing</text><text x="390" y="157" text-anchor="middle" font-size="9" fill="#ddd">One-way, salted, slow. Ar</text><text x="390" y="168" text-anchor="middle" font-size="9" fill="#ddd">gon2id > bcrypt > PBKDF2.</text><text x="390" y="179" text-anchor="middle" font-size="9" fill="#ddd"> Never MD5/SHA.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Password Hashing: One-way transformation with salt</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">. Prevent reverse engineering of user passwords.</text></svg>',codeExamples:[{title:"Argon2id Hashing (Node.js)",useCase:"Modern password hashing.",code:`const argon2 = require('argon2');

// Hashing
async function hashPassword(password) {
  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 65536, // 64 MB
      timeCost: 3,       // 3 iterations
      parallelism: 2     // 2 threads
    });
    return hash;
    // Output: $argon2id$v=19$m=65536,t=3,p=2$...
  } catch (err) {
    throw new Error('Hashing failed');
  }
}

// Verification
async function verifyPassword(hash, password) {
  try {
    return await argon2.verify(hash, password);
  } catch (err) {
    return false;
  }
}`,description:"Argon2id password hashing — the current gold standard, memory-hard and resistant to GPU attacks."},{title:"Salting Explained with Code",useCase:"Why each password needs unique salt.",code:`const crypto = require('crypto');

// BAD: no salt (unsalted SHA-256)
function badHash(password) {
  return crypto.createHash('sha256')
    .update(password).digest('hex');
}
// badHash("password123") is always the same
// Rainbow table instantly reverses it

// GOOD: unique salt per password
function goodHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(
    password, salt, 100000, 32, 'sha256'
  ).toString('hex');
  return salt + ':' + hash; // store both
}
// Same password produces different hash
// Attacker must crack each hash individually`,description:"Salt ensures identical passwords produce different hashes, preventing rainbow table attacks."},{title:"PBKDF2 with High Iterations",useCase:"Legacy but widely compatible.",code:`const crypto = require('crypto');

function hashPasswordPBKDF2(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const iterations = 600000; // OWASP 2023 recommendation

  const hash = crypto.pbkdf2Sync(
    password, salt, iterations, 32, 'sha512'
  ).toString('hex');

  return \`\${iterations}:\${salt}:\${hash}\`;
}

function verifyPBKDF2(stored, password) {
  const [iterations, salt, hash] = stored.split(':');
  const verify = crypto.pbkdf2Sync(
    password, salt, parseInt(iterations), 32, 'sha512'
  ).toString('hex');
  return crypto.timingSafeEqual(
    Buffer.from(hash),
    Buffer.from(verify)
  );
}`,description:"PBKDF2 with high iteration count — use timing-safe comparison to prevent timing attacks."},{title:"Password Upgrade on Login",useCase:"Transition to stronger algorithm.",code:`async function loginAndUpgrade(email, password) {
  const user = await db.query(
    "SELECT * FROM users WHERE email = $1", [email]
  );
  if (!user.rows[0]) return null;

  const { password_hash, hash_algorithm } = user.rows[0];
  let valid = false;

  if (hash_algorithm === 'argon2id') {
    valid = await argon2.verify(password_hash, password);
  } else if (hash_algorithm === 'bcrypt') {
    valid = await bcrypt.compare(password, password_hash);
    if (valid) {
      // Upgrade to Argon2 on successful login
      const newHash = await argon2.hash(password);
      await db.query(
        "UPDATE users SET password_hash = $1,
         hash_algorithm = 'argon2id' WHERE id = $2",
        [newHash, user.id]
      );
    }
  }

  return valid ? user : null;
}`,description:"Upgrade password hashes on successful login — transition users to stronger algorithms transparently."},{title:"Password Strength Validation",useCase:"Enforce strong passwords.",code:`function validatePasswordStrength(password) {
  const errors = [];

  if (password.length < 12) {
    errors.push('At least 12 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('At least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('At least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('At least one number');
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('At least one special character');
  }
  // Check against common passwords
  const common = ['password', '123456', 'qwerty'];
  if (common.some(w => password.toLowerCase().includes(w))) {
    errors.push('Avoid common passwords');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}`,description:"Password strength validation before hashing — enforce minimum security requirements."}],mcqQuestions:[{question:"Why should passwords be hashed?",options:["Save storage space","Irreversible — protects if DB breached","Faster authentication","Compatibility"],answer:1,explanation:"Hashing makes passwords irreversible, protecting them even if the database is compromised."},{question:"What does a salt do?",options:["Encrypts the hash","Makes identical passwords produce different hashes","Compresses the output","Adds pepper"],answer:1,explanation:"Salt ensures unique hashes per password, preventing rainbow table and identical-password attacks."},{question:"Which algorithm is the current gold standard?",options:["bcrypt","Argon2id","PBKDF2","scrypt"],answer:1,explanation:"Argon2id is the current gold standard — winner of the 2017 Password Hashing Competition."},{question:"Why is SHA-256 unsuitable for passwords?",options:["It's broken","Too fast — billions of hashes per second on GPU","Output is too short","Requires a key"],answer:1,explanation:"SHA-256 is designed for speed, making brute-force attacks too efficient."},{question:"What is the recommended bcrypt cost factor?",options:["4-6","10-12","16-18","20+"],answer:1,explanation:"Cost 10-12 provides a good balance of security and performance (~100ms per hash)."},{question:"What is constant-time comparison?",options:["Faster comparison","Prevents timing attacks","Encrypted comparison","Multi-threaded comparison"],answer:1,explanation:"Constant-time comparison prevents attackers from determining hash values through timing measurements."}]};export{e as auth_password_hashing};
