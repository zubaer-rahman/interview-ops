const e={id:"node-buffers",title:"Node.js Buffers",difficulty:"intermediate",estimatedMinutes:20,tldr:["Buffer is a Node.js global class for handling binary data directly - it represents fixed-size chunks of memory allocated outside the V8 heap.","Buffer objects store raw binary data as arrays of bytes (0-255). They are similar to typed arrays (Uint8Array) but with additional Node.js-specific methods.","Buffers are essential for working with streams, file I/O, network protocols, cryptography, and any scenario involving binary data.","Buffers are allocated outside V8's garbage-collected heap, managed by Node.js with Buffer.poolSize (8192 bytes) for small allocations."],laymanDefinition:"Buffers in Node.js are like a storage container for raw binary data. Think of it as a box of 256 tiny compartments (0-255), each compartment holding one byte of information. When you read a file, receive data over a network, or work with images, the data arrives as raw bytes. Buffers provide a way to store, read, and manipulate these bytes. Unlike JavaScript strings which are great for text, Buffers are designed for any kind of binary data - images, videos, compressed files, encrypted data, or custom binary protocols. They live outside JavaScript memory (V8 heap), so they do not slow down garbage collection.",deepDive:[{heading:"Buffer Allocation and Memory Management",text:"Buffers are allocated outside the V8 heap, managed by Node.js: (1) Buffer.alloc(size, fill) - allocates a zero-filled buffer of the given size (safe). (2) Buffer.allocUnsafe(size) - allocates without initialization (faster but may contain old data - must be filled manually). (3) Buffer.from(array/arrayBuffer/string) - creates a buffer from existing data. (4) Buffer.concat(list, totalLength) - concatenates multiple buffers. Memory pool: buffers smaller than Buffer.poolSize (8192 bytes) / 2 are allocated from an internal pool. Larger buffers are allocated directly with new Uint8Array(size). allocUnsafe is ~2x faster than alloc but the buffer may contain sensitive data (old memory). Always fill allocUnsafe buffers if you will write less than the allocated size. Use Buffer.alloc for new buffers unless performance is critical."},{heading:"Reading and Writing Buffer Data",text:"Buffers support reading/writing numeric types at specific offsets: (1) readUInt8(offset) / writeUInt8(value, offset) - unsigned 8-bit integer. (2) readInt16LE/BE(offset) / writeInt16LE/BE(value, offset) - 16-bit signed integer, little/big endian. (3) readUInt32LE/BE(offset) / writeUInt32LE/BE(value, offset) - 32-bit unsigned. (4) readFloatLE/BE(offset) / writeFloatLE/BE(value, offset) - 32-bit float. (5) readDoubleLE/BE(offset) / writeDoubleLE/BE(value, offset) - 64-bit double. (6) readBigInt64LE/BE(offset) / writeBigInt64LE/BE(value, offset) - 64-bit BigInt. Endianness matters: LE (little-endian) stores least significant byte first (x86), BE (big-endian) stores most significant byte first (network byte order). Binary protocols (TCP, file formats) often specify endianness. Invalid offset throws RangeError."},{heading:"Buffer and String Conversions",text:'Buffers convert to/from strings with various encodings: (1) "utf8" (default) - variable-width encoding, 1-4 bytes per character. (2) "ascii" - 7-bit ASCII, fast but drops high bits. (3) "latin1" (or "binary") - 8-bit Latin-1 encoding. (4) "hex" - each byte as two hex characters. (5) "base64" - binary to Base64 text. (6) "base64url" - URL-safe Base64 (Node 15+). (7) "utf16le" - 2 bytes per character. Conversion: buffer.toString("base64") - buffer to string, Buffer.from("hello", "utf8") - string to buffer. Important: not all byte sequences are valid UTF-8. Using wrong encoding corrupts data. Base64 is 33% larger than binary but safe for text-based protocols (JSON, HTML). Hex encoding doubles the size.'},{heading:"Buffer Slicing, Copying, and Manipulation",text:"Buffers provide array-like operations: (1) buffer[index] - access individual byte (0-255). Assigning values > 255 are masked to lower 8 bits. (2) buffer.length - number of bytes (NOT the same as string length). (3) buffer.slice(start, end) - creates a new Buffer referencing the same memory (no copy, like TypedArray subarray). Modifying slice modifies original! (4) buffer.subarray(start, end) - same as slice. (5) buffer.copy(target, targetStart, sourceStart, sourceEnd) - copies bytes to another buffer (actual copy). (6) buffer.equals(otherBuffer) - compares byte-by-byte. (7) buffer.compare(otherBuffer) - ordering comparison (for sorting). (8) buffer.indexOf(value, byteOffset) - search for byte/buffer/string. (9) buffer.fill(value, offset, end) - fill with a value. (10) buffer.includes(value, byteOffset) - boolean check. slice() is dangerous - mutations affect the original buffer. Use Buffer.from(buffer.slice()) to create a real copy."},{heading:"Buffer Pooling and Performance",text:"Node.js optimizes Buffer allocation: (1) Small buffers (< 4KB) use a pre-allocated pool (Buffer.poolSize = 8192). (2) Buffer.allocUnsafe is faster because it does not zero-fill. (3) For large allocations (>= Buffer.poolSize/2), Node.js bypasses the pool. (4) Frequent small allocations waste pool space - reuse buffers when possible. Performance tips: (1) Use Buffer.allocUnsafe + fill() instead of Buffer.alloc for performance-critical code. (2) Pre-allocate buffer pools for high-throughput scenarios. (3) Use buffer.copy() instead of string concatenation for binary data. (4) Avoid creating many tiny buffers - use a single buffer with offset tracking. (5) Use buf.writeInt32LE() instead of manual byte operations (faster and clearer). (6) For JSON serialization of binary data, use Base64 encoding. (7) The --zero-fill-buffers flag forces all buffers to be zero-filled (security, but slower)."}],interviewAnswer:"Buffer is a global Node.js class for handling raw binary data in fixed-size chunks allocated outside the V8 heap. Key creation methods: Buffer.alloc(size) (safe, zero-filled), Buffer.allocUnsafe(size) (fast, uninitialized), Buffer.from(data). Buffers are essential for file I/O, streams, cryptography, and network protocols. They support various encodings (utf8, base64, hex, latin1) for string conversion. Numeric read/write methods (readInt32LE, writeUInt16BE, etc.) handle binary protocols with endianness control. Buffer.slice() shares memory (no copy), Buffer.copy() creates a copy. Small buffers (<4KB) use an internal pool. Performance: allocUnsafe is 2x faster than alloc but requires manual fill. Always use Buffer.from() or Buffer.alloc() unless performance-critical.",interviewQuestions:[{question:"What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?",answer:"Buffer.alloc(size) allocates and zero-fills the buffer (safe, slower). Buffer.allocUnsafe(size) allocates without initialization (faster, ~2x). allocUnsafe may contain old/ensitive data - must be filled before reading. Use alloc unless performance-critical."},{question:"How does Buffer memory differ from V8 heap memory?",answer:"Buffer memory is allocated outside the V8 heap using Node.js's C++ layer. This means Buffer operations do not trigger V8 garbage collection. The memory is managed by libuv and freed using Buffer.from() pool or direct deallocation. This makes Buffer suitable for large binary data without impacting GC."},{question:"What is the Buffer.poolSize and how does it work?",answer:"Buffer.poolSize is 8192 bytes. Small Buffer allocations (< poolSize/2 = 4096 bytes) use a shared memory pool. Multiple small Buffers share the same underlying ArrayBuffer. This reduces memory allocation overhead. Large allocations bypass the pool and get their own memory."},{question:"What is the difference between Buffer.slice() and Buffer.copy()?",answer:"Buffer.slice() creates a new Buffer that references the same memory (no copy). Mutating the slice affects the original buffer. Buffer.copy() copies bytes to a destination buffer (separate memory). Use slice() for read-only operations. Use Buffer.from(buf.slice()) for a true copy."},{question:"What are the available string encodings for Buffer.toString()?",answer:'"utf8" (default), "ascii", "latin1" (aka "binary"), "hex", "base64", "base64url" (Node 15+), "utf16le". Each encoding handles bytes differently. Using wrong encoding corrupts binary data. Base64 is common for transmitting binary in text formats.'},{question:"How do you handle endianness in Buffers?",answer:"Use read/write methods with LE (little-endian) or BE (big-endian) suffix. x86 uses little-endian. Network protocols use big-endian. Examples: buf.readInt32LE(offset), buf.writeUInt16BE(value, offset). Choosing wrong endianness reads/writes bytes in reverse order."},{question:"What happens when you assign a value > 255 to a Buffer byte?",answer:"The value is masked to the lower 8 bits (value & 0xFF). For example: buf[0] = 300; // stores 44 (300 & 0xFF = 44). Values outside 0-255 are silently truncated without warning."},{question:"How does Buffer.concat() work?",answer:"Buffer.concat(list, totalLength) takes an array of Buffers and concatenates them into a single Buffer. If totalLength is not provided, it is calculated by iterating the list. Providing totalLength is faster. Useful for combining stream chunks."},{question:"What is the difference between buffer.length and string.length?",answer:'buffer.length returns the number of bytes. string.length returns the number of UTF-16 code units (characters). For multi-byte characters (emoji, CJK), buffer.length > string.length. "Hello".length === 5 but Buffer.from("Hello").length === 5. However, "é".length === 1 but Buffer.from("é").length === 2.'},{question:"How do you check if two Buffers have identical content?",answer:"Use buffer.equals(otherBuffer) for byte-by-byte comparison. The === operator checks reference equality (different instances with same content return false). Use buffer.compare(otherBuffer) for sorting (returns -1, 0, or 1)."}],diagramSvg:'<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="720" height="260" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Buffer Memory Layout</text><rect x="30" y="55" width="660" height="45" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="360" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Buffer: Array of Bytes (0-255)</text><text x="360" y="94" text-anchor="middle" font-size="9" fill="#ddd">Allocated outside V8 heap, fixed size, raw binary storage</text><rect x="40" y="115" width="40" height="30" rx="5" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="60" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">0x48</text><text x="60" y="139" text-anchor="middle" font-size="9" fill="#ddd">72</text><rect x="85" y="115" width="40" height="30" rx="5" fill="#1a1d28" stroke="#f59e0b" stroke-width="1.5"/><text x="105" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">0x65</text><text x="105" y="139" text-anchor="middle" font-size="9" fill="#ddd">101</text><rect x="130" y="115" width="40" height="30" rx="5" fill="#1a1d28" stroke="#34d399" stroke-width="1.5"/><text x="150" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">0x6C</text><text x="150" y="139" text-anchor="middle" font-size="9" fill="#ddd">108</text><rect x="175" y="115" width="40" height="30" rx="5" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="195" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">0x6C</text><text x="195" y="139" text-anchor="middle" font-size="9" fill="#ddd">108</text><rect x="220" y="115" width="40" height="30" rx="5" fill="#1a1d28" stroke="#f87171" stroke-width="1.5"/><text x="240" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">0x6F</text><text x="240" y="139" text-anchor="middle" font-size="9" fill="#ddd">111</text><rect x="270" y="115" width="80" height="30" rx="5" fill="#1a1d28" stroke="#9aa0b0" stroke-width="1.5"/><text x="310" y="131" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">...</text><text x="310" y="139" text-anchor="middle" font-size="9" fill="#ddd">more bytes</text><text x="360" y="78" font-size="10" fill="#9aa0b0" text-anchor="start">Typical usage: file reads, stream chunks, crypto, </text><text x="360" y="91" font-size="10" fill="#9aa0b0" text-anchor="start">network protocols</text><text x="360" y="165" font-size="10" fill="#9aa0b0" text-anchor="start">Bytes shown as hex (0x48 = "H") and decimal (72)</text><text x="360" y="210" font-size="10" fill="#f59e0b" text-anchor="start">Methods: alloc, from, concat, toString, slice, cop</text><text x="360" y="223" font-size="10" fill="#f59e0b" text-anchor="start">y, fill, indexOf, read/write ints</text></svg>',codeExamples:[{title:"Buffer Creation and Basic Operations",useCase:"Different ways to create and inspect Buffers",code:`// Safe allocation (zero-filled)
var buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Fast allocation (uninitialized)
var buf2 = Buffer.allocUnsafe(10).fill(0xFF);
console.log(buf2); // <Buffer ff ff ff ff ff ff ff ff ff ff>

// From string
var buf3 = Buffer.from("Hello", "utf8");
console.log(buf3); // <Buffer 48 65 6c 6c 6f>
console.log(buf3.toString()); // "Hello"
console.log(buf3.toString("hex")); // "48656c6c6f"
console.log(buf3.toString("base64")); // "SGVsbG8="

// From array
var buf4 = Buffer.from([0x48, 0x65, 0x6C, 0x4C, 0x6F]);
console.log(buf4.toString()); // "HeLLo"

// Buffer length vs string length
var emoji = Buffer.from("😀", "utf8");
console.log("Bytes:", emoji.length); // 4
console.log("Chars:", emoji.toString().length); // 2 (surrogate pair)`,description:"Buffer creation methods: alloc (safe/zero-filled), allocUnsafe (fast/dirty), from(string/array). Strings can encode to various formats. Multi-byte characters use more bytes than characters."},{title:"Reading and Writing Binary Data",useCase:"Parse and create binary protocol data",code:`// Simulate a binary file header format:
// [magic:4][version:2][flags:1][checksum:4][data...]
var header = Buffer.alloc(11);
var offset = 0;

// Write magic bytes ("NODE")
header.write("NODE", offset, "utf8"); offset += 4;

// Write version (uint16)
header.writeUInt16BE(1, offset); offset += 2;

// Write flags
header.writeUInt8(0xA5, offset); offset += 1;

// Write checksum (uint32)
header.writeUInt32LE(0xDEADBEEF, offset);

console.log("Header hex:", header.toString("hex"));

// Read back
offset = 0;
console.log("Magic:", header.toString("utf8", offset, 4)); offset += 4;
console.log("Version:", header.readUInt16BE(offset)); offset += 2;
console.log("Flags: 0x" + header.readUInt8(offset).toString(16)); offset += 1;
console.log("Checksum: 0x" + header.readUInt32LE(offset).toString(16));`,description:"Binary protocol parsing uses read/write methods with explicit offset and endianness. This is how Node.js handles custom binary formats, TCP protocols, and file format headers. Always track offset manually."},{title:"Buffer Slicing and Copying",useCase:"Understanding shared vs copied memory",code:`var original = Buffer.from("Hello World");

// slice() shares memory
var slice = original.slice(0, 5);
console.log("Slice:", slice.toString()); // "Hello"

// Modifying slice affects original!
slice[0] = 0x68; // "h" lowercase
console.log("Original after slice mod:", original.toString()); // "hello World"

// copy() creates separate memory
var dest = Buffer.alloc(5);
original.copy(dest, 0, 6, 11);
console.log("Copied:", dest.toString()); // "World"

// True copy from slice
var safeCopy = Buffer.from(original.slice(0, 5));
safeCopy[0] = 0x48; // "H" uppercase
console.log("Original:", original.toString()); // "hello World" (unchanged)

// indexOf and includes
console.log("Index of World:", original.indexOf("World")); // 6
console.log("Has World:", original.includes("World")); // true`,description:"slice() is zero-copy (shares memory) - mutations propagate. copy() creates independent memory. Buffer.from(slice) creates a true detached copy for safe mutation."},{title:"Buffer Concatenation and Pooling",useCase:"Combine and pool Buffers efficiently",code:`var chunks = [];

// Simulate receiving chunks
chunks.push(Buffer.from("First "));
chunks.push(Buffer.from("Second "));
chunks.push(Buffer.from("Third"));

// Concatenate (with totalLength optimization)
var totalLength = chunks.reduce(function(sum, buf) {
  return sum + buf.length;
}, 0);
var combined = Buffer.concat(chunks, totalLength);
console.log("Combined:", combined.toString()); // "First Second Third"

// Buffer pool for reuse
var pool = Buffer.allocUnsafe(1024);
var poolOffset = 0;

function allocFromPool(size) {
  if (poolOffset + size > pool.length) {
    pool = Buffer.allocUnsafe(1024);
    poolOffset = 0;
  }
  var buf = pool.slice(poolOffset, poolOffset + size);
  poolOffset += size;
  return buf;
}

var a = allocFromPool(10);
var b = allocFromPool(20);
console.log("Pool offset:", poolOffset); // 30`,description:"Buffer.concat() efficiently joins multiple buffers. Custom pooling reuses a pre-allocated buffer by slicing portions, reducing allocation overhead in high-throughput scenarios."},{title:"Buffer Comparison and Sorting",useCase:"Sort and compare binary data",code:`var list = [
  Buffer.from("banana"),
  Buffer.from("apple"),
  Buffer.from("cherry"),
  Buffer.from("Apple")  // uppercase A comes before lowercase
];

// equals() comparison
var a = Buffer.from("hello");
var b = Buffer.from("hello");
var c = Buffer.from("world");
console.log("a === b:", a === b); // false (different objects)
console.log("a.equals(b):", a.equals(b)); // true
console.log("a.equals(c):", a.equals(c)); // false

// Sorting with compare()
list.sort(function(a, b) { return a.compare(b); });
console.log("Sorted:", list.map(function(b) { return b.toString(); }));
// ["Apple", "apple", "banana", "cherry"]

// byte-level access
var buf = Buffer.from("ABC");
console.log("Byte 0:", buf[0], "char:", String.fromCharCode(buf[0])); // 65 A
console.log("Byte 1:", buf[1], "char:", String.fromCharCode(buf[1])); // 66 B

buf[1] = 90; // Z
console.log("Modified:", buf.toString()); // "AZC"`,description:"Buffer.equals() compares content, not references. Buffer.compare() enables sorting binary data. Direct byte access with bracket notation for mutation. UTF-8 bytes differ from ASCII for non-ASCII characters."}],mcqQuestions:[{question:"Which Buffer creation method is fastest but may contain old data?",options:["Buffer.alloc()","Buffer.allocUnsafe()","Buffer.from()","Buffer.concat()"],answer:1,explanation:"allocUnsafe is fastest because it skips zero-filling, but the buffer may contain sensitive data from previous allocations."},{question:"What is the default Buffer.poolSize in bytes?",options:["1024","4096","8192","16384"],answer:2,explanation:"Buffer.poolSize = 8192. Buffers smaller than poolSize/2 (4096) use the shared pool. Larger buffers bypass the pool."},{question:"Does Buffer.slice() create a copy of the data?",options:["Yes, it always creates a copy","No, it shares memory with the original","It depends on the buffer size","It creates a deep copy"],answer:1,explanation:"slice() returns a new Buffer that references the same memory. Mutations to the slice affect the original buffer."},{question:"What does buffer.length return?",options:["Number of characters","Number of bytes","Size in memory","String length"],answer:1,explanation:"buffer.length returns the number of bytes stored. For multi-byte characters, this differs from string length."},{question:"Which method compares two Buffers by content?",options:["=== operator","buffer.compare()","buffer.equals()","Both equals() and compare()"],answer:3,explanation:"equals() returns boolean for equality. compare() returns -1/0/1 for ordering. === checks reference equality."},{question:"What happens when you assign buf[0] = 300?",options:["Throws RangeError","Stores 300","Stores 44 (300 & 0xFF)","Converts to string"],answer:2,explanation:"Values outside 0-255 are masked to the lower 8 bits (value & 0xFF). 300 & 0xFF = 44."}]};export{e as node_buffers};
