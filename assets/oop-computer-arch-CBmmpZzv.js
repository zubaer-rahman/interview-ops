const e={id:"oop-computer-arch",title:"Computer Architecture",difficulty:"beginner",estimatedMinutes:15,tldr:["Computer architecture is the conceptual design and fundamental operational structure of a computer system.","Key components: CPU (Central Processing Unit), memory (RAM), storage (hard drive/SSD), input/output devices, and buses connecting them.","The CPU follows the fetch-decode-execute cycle: fetch instruction from memory, decode it, execute it, store result.","Von Neumann architecture (shared memory for data and instructions) is the most common, while Harvard architecture separates them."],laymanDefinition:"Computer architecture is like a restaurant kitchen. The CPU is the chef (does all the work). RAM is the countertop (immediate workspace — fast but limited). Hard drive is the pantry/storage (holds everything but slow to access). The system bus is the kitchen counter (ingredients move on it). Input devices (orders from waiters) and output devices (plated dishes) complete the system.",deepDive:[{heading:"CPU Components",text:"ALU (Arithmetic Logic Unit): performs calculations and logical operations. Control Unit: directs operation of the processor, decodes instructions. Registers: small, ultra-fast storage inside CPU (program counter, accumulator, instruction register). Cache: small, fast memory between CPU and RAM (L1, L2, L3)."},{heading:"Memory Hierarchy",text:"Registers: ~1 cycle, few bytes. L1 Cache: ~3 cycles, ~32KB. L2 Cache: ~10 cycles, ~256KB. L3 Cache: ~40 cycles, ~8MB. RAM: ~200 cycles, GBs. SSD: ~100,000 cycles, TBs. HDD: ~10,000,000 cycles, TBs. Each level is larger but slower. Optimizing cache usage is critical for performance."},{heading:"Fetch-Decode-Execute Cycle",text:"1. Fetch: CPU reads instruction from memory address in Program Counter (PC). 2. Decode: Control Unit interprets the instruction. 3. Execute: ALU performs operation or data is loaded/stored. 4. Writeback: results written to register/memory. PC increments to next instruction. Pipelining: overlap stages for multiple instructions."},{heading:"Pipelining and Parallelism",text:"Pipelining: overlapping fetch, decode, execute stages for different instructions (like an assembly line). Superscalar: multiple execution units for parallel instruction execution. SIMD: Single Instruction Multiple Data (vector processing). Multi-core: multiple CPUs on one chip sharing resources."},{heading:"Endianness and Word Size",text:"Endianness: byte order in memory. Big-endian: most significant byte first. Little-endian: least significant byte first (x86 uses this). Word size: native data size CPU handles (32-bit, 64-bit). Determines max memory addressable (4GB for 32-bit, 16 exabytes for 64-bit)."}],interviewAnswer:"Computer architecture is the design of computer systems: CPU (fetch-decode-execute cycle), memory hierarchy (registers, cache, RAM, storage), and I/O. Understanding pipelining, caching, and parallelism helps write performant code. Memory locality and cache-friendly algorithms matter at scale.",interviewQuestions:[{question:"What are the main computer components?",answer:"CPU, memory (RAM), storage, input/output devices, and the system bus connecting them."},{question:"What is the fetch-decode-execute cycle?",answer:"CPU fetches instruction from memory, decodes it, executes the operation, and stores the result."},{question:"What is the memory hierarchy?",answer:"Registers -> L1/L2/L3 Cache -> RAM -> SSD -> HDD. Faster, smaller, more expensive at the top."},{question:"What is pipelining?",answer:"Overlapping fetch, decode, execute stages for different instructions simultaneously."},{question:"What is Von Neumann architecture?",answer:"Shared memory for both data and instructions. Most common architecture."},{question:"What is Harvard architecture?",answer:"Separate memory for data and instructions. Used in microcontrollers, DSPs."},{question:"What is a register?",answer:"Ultra-fast storage inside the CPU (few bytes each). Examples: PC (program counter), accumulator."},{question:"What is endianness?",answer:"Byte order in memory: big-endian (MSB first) vs little-endian (LSB first, x86)."},{question:"What is word size?",answer:"The native data size a CPU handles (32-bit or 64-bit). Affects max memory and performance."},{question:"What is SIMD?",answer:"Single Instruction Multiple Data — one instruction operates on multiple data elements in parallel."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Computer Architecture</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CPU</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Brain</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">RAM</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Workspace</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Fast buffer</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Storage</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Long-term</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Bus</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Connects all</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="168" x2="150" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="275" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Computer Architecture</text><text x="275" y="162" text-anchor="middle" font-size="9" fill="#ddd">CPU, RAM, Cache, Storage, Bus. Fetch-deco</text><text x="275" y="173" text-anchor="middle" font-size="9" fill="#ddd">de-execute cycle. Memory hierarchy. Pipel</text><text x="275" y="184" text-anchor="middle" font-size="9" fill="#ddd">ining. Von Neumann.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Computer Architecture: CPU, memory, storage, bus. </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">Fetch-decode-execute cycle and memory hierarchy.</text></svg>',codeExamples:[{title:"Cache-Friendly Code",useCase:"Optimizing memory access.",code:`// BAD: Column-major access (cache misses)
const matrix = Array(1000).fill().map(() => Array(1000).fill(0));
let sum = 0;
for (let col = 0; col < 1000; col++) {
  for (let row = 0; row < 1000; row++) {
    sum += matrix[row][col]; // jumping rows — cache miss!
  }
}

// GOOD: Row-major access (cache friendly)
for (let row = 0; row < 1000; row++) {
  for (let col = 0; col < 1000; col++) {
    sum += matrix[row][col]; // sequential — cache hit!
  }
}`,description:"Cache-friendly code accesses memory sequentially (spatial locality). Row-major is faster than column-major."},{title:"Memory Layout Visualization",useCase:"How arrays are stored.",code:`// Array in memory (row-major order)
const arr = [
  [1, 2, 3],  // row 0
  [4, 5, 6],  // row 1
  [7, 8, 9]   // row 2
];
// Memory layout: [1,2,3,4,5,6,7,8,9]
// arr[0][0] is at address X
// arr[0][1] is at address X+1 (sequential)
// arr[1][0] is at address X+3 (gap of row)

// Node.js Buffer shows raw memory
const buf = Buffer.alloc(8);
buf.writeInt32LE(42, 0); // write 42 at offset 0
buf.writeInt32LE(100, 4); // write 100 at offset 4
console.log(buf); // <Buffer 2a 00 00 00 64 00 00 00>`,description:"Understanding memory layout helps write cache-friendly code. Sequential access is fastest."},{title:"Bit Manipulation",useCase:"Low-level CPU operations.",code:`// AND: mask bits
const FLAG_READ = 1;    // 001
const FLAG_WRITE = 2;   // 010
const FLAG_EXEC = 4;    // 100
const permissions = FLAG_READ | FLAG_WRITE; // 011
console.log(permissions & FLAG_READ);  // 1 (true)
console.log(permissions & FLAG_EXEC);  // 0 (false)

// Shift operations (fast multiply/divide)
console.log(5 << 1); // 10 (multiply by 2)
console.log(20 >> 2); // 5 (divide by 4)

// XOR swap (no temporary variable)
let a = 5, b = 3;
a ^= b; b ^= a; a ^= b;
console.log(a, b); // 3, 5`,description:"Bit manipulation is fundamental to CPU operations — AND, OR, XOR, shift for fast arithmetic and flags."},{title:"Endianness Example",useCase:"Byte order in memory.",code:`const { Buffer } = require("buffer");

const value = 0x12345678;
const buf = Buffer.alloc(4);

// Write in different endianness
buf.writeUInt32LE(value, 0); // little-endian
console.log(buf); // 78 56 34 12 (LSB first)

buf.writeUInt32BE(value, 0); // big-endian
console.log(buf); // 12 34 56 78 (MSB first)

// x86/x64 uses little-endian
// Network protocols use big-endian
// Must convert when reading network data on x86`,description:"Endianness affects how multi-byte values are stored in memory. x86 is little-endian; network is big-endian."},{title:"Cache Locality Example",useCase:"Measuring performance difference.",code:`// Measure cache-friendly vs cache-unfriendly
function measureAccess(pattern) {
  const size = 10000;
  const data = new Array(size).fill(0).map(() => Math.random());
  const indices = pattern === "sequential"
    ? Array.from({length: size}, (_, i) => i)
    : Array.from({length: size}, () => Math.floor(Math.random() * size));
  
  const start = Date.now();
  let sum = 0;
  for (let i = 0; i < indices.length; i++) {
    sum += data[indices[i]];
  }
  return { sum, timeMs: Date.now() - start };
}

console.log("Sequential:", measureAccess("sequential"));
console.log("Random:", measureAccess("random"));`,description:"Sequential memory access (cache-friendly) can be 10-100x faster than random access (cache misses)."}],mcqQuestions:[{question:"What is the CPU\\'s main function?",options:["Store data","Execute instructions (fetch-decode-execute)","Display graphics","Manage files"],answer:1,explanation:"The CPU fetches, decodes, and executes instructions in a cycle."},{question:"What is the fastest memory type?",options:["HDD","RAM","CPU Registers","SSD"],answer:2,explanation:"CPU registers are the fastest (1 cycle), followed by cache, RAM, and storage."},{question:"What is pipelining?",options:["A type of memory","Overlapping instruction stages for parallelism","A storage device","A network protocol"],answer:1,explanation:"Pipelining overlaps fetch, decode, execute stages for different instructions."},{question:"What is the difference between Von Neumann and Harvard?",options:["Von Neumann shares memory for data/instructions; Harvard separates them","Harvard is faster","Von Neumann is obsolete","They are the same"],answer:0,explanation:"Von Neumann: shared memory. Harvard: separate data and instruction memory."},{question:"What is a cache?",options:["A storage device","Small, fast memory between CPU and RAM","A type of CPU","A network device"],answer:1,explanation:"Cache is small, fast memory that stores frequently accessed data for the CPU."},{question:"What is little-endian?",options:["MSB stored first","LSB stored first","Random byte order","No byte order"],answer:1,explanation:"Little-endian stores the least significant byte first (x86 architecture)."}]};export{e as oop_computer_arch};
