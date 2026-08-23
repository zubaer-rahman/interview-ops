export const dsa_bit_manipulation = {
  "id": "dsa-bit-manipulation",
  "title": "Bit Manipulation",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Bit manipulation operates directly on the binary representation of numbers for fast, memory-efficient operations.",
    "Core operators: AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>).",
    "Bit operations are O(1) and extremely fast \\u2014 they operate at the hardware level.",
    "Common tricks: check if bit is set, set/clear/toggle bit, count set bits (Brian Kernighan algorithm), power of 2 check."
  ],
  "laymanDefinition": "Bit manipulation is like controlling individual light switches in a massive building. Each bit is a switch. Instead of turning lights on/off with a complex system, you use simple operations: AND checks if a light is on, OR turns lights on, XOR toggles, NOT flips all.",
  "deepDive": [
    {
      "heading": "Bit Operations",
      "text": "AND: both bits 1 -> 1. OR: one or both 1 -> 1. XOR: bits differ -> 1. NOT: flip all bits. Left shift (<< n): multiply by 2^n. Right shift (>> n): divide by 2^n (floor)."
    },
    {
      "heading": "Bit Tricks",
      "text": "Check if kth bit is set: (num >> k) & 1. Set kth bit: num | (1 << k). Clear kth bit: num & ~(1 << k). Toggle kth bit: num ^ (1 << k). Check power of 2: n > 0 && (n & (n-1)) === 0."
    },
    {
      "heading": "XOR Properties",
      "text": "a ^ a = 0 (self-inverse). a ^ 0 = a (identity). a ^ b ^ a = b (cancellation). XOR is commutative and associative. Used to find unique element, swap without temp, detect parity."
    },
    {
      "heading": "Applications",
      "text": "Find unique element (XOR all). Count bits (Brian Kernighan). Subsets (bitmask enumeration). Fast multiplication/division by powers of 2. Flags and permissions. Cryptography. Error detection (parity bits)."
    }
  ],
  "interviewAnswer": "Bit manipulation is essential for performance-critical code and low-level programming. Master the bit tricks: check/set/clear/toggle, XOR properties, and counting bits. Bit manipulation is also common in coding interviews for specific problem patterns.",
  "interviewQuestions": [
    {
      "question": "What is bit manipulation?",
      "answer": "Operating directly on binary representation of numbers at the bit level."
    },
    {
      "question": "What does AND (&) do?",
      "answer": "Both bits must be 1 for result to be 1."
    },
    {
      "question": "What does XOR (^) do?",
      "answer": "Bits must differ for result to be 1."
    },
    {
      "question": "What does left shift (<<) do?",
      "answer": "Shifts bits left, multiplies by 2^n."
    },
    {
      "question": "How to check if kth bit is set?",
      "answer": "(num >> k) & 1."
    },
    {
      "question": "How to set kth bit?",
      "answer": "num | (1 << k)."
    },
    {
      "question": "How to clear kth bit?",
      "answer": "num & ~(1 << k)."
    },
    {
      "question": "What is the XOR property?",
      "answer": "a ^ a = 0, a ^ 0 = a, a ^ b ^ a = b."
    },
    {
      "question": "How to check power of 2?",
      "answer": "n > 0 && (n & (n-1)) === 0."
    },
    {
      "question": "What is Brian Kernighan algorithm?",
      "answer": "Count set bits: while (n) { count++; n &= n - 1; } O(number of set bits)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Bit Manipulation</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Number 5</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">101 binary</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">5 & 3 = 1</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">101 & 011 = 001</text><rect x=\"150\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"200\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">5 | 3 = 7</text><text x=\"200\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">101 | 011 = 111</text><rect x=\"150\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">5 ^ 3 = 6</text><text x=\"200\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">101 ^ 011 = 110</text><rect x=\"150\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"200\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">5 << 1 = 10</text><text x=\"200\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">1010 binary</text><rect x=\"150\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">5 >> 1 = 2</text><text x=\"200\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">10 binary</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bit Manipulation</text><text x=\"385\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">AND, OR, XOR, shift. XOR tricks, p</text><text x=\"385\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ower of 2, count bits, bitmask.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Bit Manipulation: AND, OR, XOR, shifts. XOR a^a=0,</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> bit tricks, bitmask for subsets.</text></svg>",
  "codeExamples": [
    {
      "title": "Unique Number (XOR)",
      "useCase": "Find single non-duplicate.",
      "code": "function singleNumber(nums) {\n  return nums.reduce((a, b) => a ^ b, 0);\n}\n// [2,2,1] => 1",
      "description": "XOR all elements \\u2014 duplicates cancel."
    },
    {
      "title": "Count Set Bits",
      "useCase": "Brian Kernighan algorithm.",
      "code": "function countBits(n) {\n  let count = 0;\n  while (n) { n &= (n - 1); count++; }\n  return count;\n}",
      "description": "Brian Kernighan: O(number of set bits)."
    },
    {
      "title": "Power of Two",
      "useCase": "Check if power of 2.",
      "code": "function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}",
      "description": "Power of 2 check."
    },
    {
      "title": "Subsets (Bitmask)",
      "useCase": "Generate all subsets using bitmasks.",
      "code": "function subsets(nums) {\n  const result = [];\n  for (let mask = 0; mask < (1 << nums.length); mask++) {\n    const subset = [];\n    for (let i = 0; i < nums.length; i++)\n      if (mask & (1 << i)) subset.push(nums[i]);\n    result.push(subset);\n  }\n  return result;\n}",
      "description": "Bitmask enumeration for subsets O(n * 2^n)."
    },
    {
      "title": "Sum Without Arithmetic",
      "useCase": "Add using bit operations.",
      "code": "function getSum(a, b) {\n  while (b) { const carry = a & b; a = a ^ b; b = carry << 1; }\n  return a;\n}",
      "description": "Add two numbers using XOR and AND."
    },
    {
      "title": "Missing Number",
      "useCase": "Find missing in 0..n.",
      "code": "function missingNumber(nums) {\n  const n = nums.length;\n  let xor = 0;\n  for (let i = 1; i <= n; i++) xor ^= i;\n  for (const num of nums) xor ^= num;\n  return xor;\n}",
      "description": "Missing number using XOR O(n)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does XOR (^) do?",
      "options": [
        "Bits must differ -> 1",
        "Both bits 1 -> 1",
        "Flip all bits",
        "Shift left"
      ],
      "answer": 0,
      "explanation": "XOR: bits differ -> 1."
    },
    {
      "question": "XOR property a ^ a = ?",
      "options": [
        "0",
        "1",
        "a",
        "2a"
      ],
      "answer": 0,
      "explanation": "a ^ a = 0."
    },
    {
      "question": "How to check power of 2?",
      "options": [
        "n & (n-1) === 0",
        "n & n === 0",
        "n | n === 0",
        "n ^ n === 0"
      ],
      "answer": 0,
      "explanation": "n > 0 && (n & (n-1)) === 0."
    },
    {
      "question": "Left shift by 1 is?",
      "options": [
        "Divide by 2",
        "Multiply by 2",
        "Add 1",
        "Subtract 1"
      ],
      "answer": 1,
      "explanation": "Left shift (<< 1) multiply by 2."
    },
    {
      "question": "How to set kth bit?",
      "options": [
        "num & (1<<k)",
        "num | (1<<k)",
        "num ^ (1<<k)",
        "num ~ (1<<k)"
      ],
      "answer": 1,
      "explanation": "num | (1 << k) sets the kth bit."
    },
    {
      "question": "Brian Kernighan counts what?",
      "options": [
        "Total bits",
        "Set bits",
        "Unset bits",
        "Leading zeros"
      ],
      "answer": 1,
      "explanation": "Counts set (1) bits."
    }
  ]
};
