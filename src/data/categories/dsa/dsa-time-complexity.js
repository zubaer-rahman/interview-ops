export const dsa_time_complexity = {
  "id": "dsa-time-complexity",
  "title": "Time Complexity",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tldr": [
    "Time complexity describes how the runtime of an algorithm grows as input size increases, using Big-O notation.",
    "Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n^2) quadratic, O(2^n) exponential.",
    "Big-O is upper bound (worst-case). Big-Theta is tight bound. Big-Omega is lower bound (best-case).",
    "Space complexity measures how much extra memory an algorithm needs, also in terms of input size."
  ],
  "laymanDefinition": "Time complexity is like estimating how long a recipe takes as you scale up ingredients. Chopping one onion takes constant time. Peeling a bag of potatoes takes linear time (each potato). Comparing every pair of ingredients takes quadratic time. It helps predict if your algorithm will be fast enough for large inputs.",
  "deepDive": [
    {
      "heading": "Big-O Notation",
      "text": "O(g(n)) = { f(n): there exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0 }. Upper bound. Dropping constants and lower-order terms. O(n^2 + n + 1) = O(n^2)."
    },
    {
      "heading": "Common Complexity Classes",
      "text": "O(1): array access. O(log n): binary search. O(n): linear search. O(n log n): merge sort. O(n^2): bubble sort. O(2^n): subsets. O(n!): permutations. Each order of magnitude slower for large n."
    },
    {
      "heading": "How to Analyze",
      "text": "Count operations as function of input size. Nested loops multiply. Sequential loops add. Recursion: solve recurrence T(n) = a*T(n/b) + f(n) using Master Theorem: T(n) = a*T(n/b) + O(n^d). If d > log_b(a), O(n^d). If d = log_b(a), O(n^d log n). If d < log_b(a), O(n^(log_b(a)))."
    },
    {
      "heading": "Space Complexity",
      "text": "In-place algorithms: O(1) extra space. Recursive algorithms: O(depth) for call stack. DP tables: O(n*m). Auxiliary data structures: O(n). Always consider whether input size is counted or not."
    }
  ],
  "interviewAnswer": "Time complexity quantifies algorithm efficiency using Big-O. Analyze loops (nested = multiply, sequential = add). Recursion via Master Theorem. Always consider both time and space. Dropping constants is standard. O(n log n) is generally the best achievable for comparison-based sorting.",
  "interviewQuestions": [
    {
      "question": "What is time complexity?",
      "answer": "A measure of how algorithm runtime grows with input size."
    },
    {
      "question": "What is Big-O notation?",
      "answer": "Upper bound on growth rate. O(g(n)) means runtime grows no faster than g(n)."
    },
    {
      "question": "What is O(1)?",
      "answer": "Constant time — does not depend on input size."
    },
    {
      "question": "What is O(log n)?",
      "answer": "Logarithmic — divides problem in half each step (binary search)."
    },
    {
      "question": "What is O(n)?",
      "answer": "Linear — proportional to input size."
    },
    {
      "question": "What is O(n^2)?",
      "answer": "Quadratic — nested loops over input."
    },
    {
      "question": "What is the difference between Big-O and Big-Theta?",
      "answer": "Big-O is upper bound. Big-Theta is tight bound (both upper and lower)."
    },
    {
      "question": "What is space complexity?",
      "answer": "Measure of extra memory needed by an algorithm."
    },
    {
      "question": "How to analyze nested loops?",
      "answer": "Multiply complexities of each loop."
    },
    {
      "question": "What is the best sorting complexity?",
      "answer": "O(n log n) for comparison-based sorting."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Time Complexity</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(1)</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Constant</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(log n)</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Logarithmic</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(n)</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linear</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(n log n)</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linearithmic</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(n^2)</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Quadratic</text><rect x=\"10\" y=\"185\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"201\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">O(2^n)</text><text x=\"65\" y=\"204\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Exponential</text><rect x=\"250\" y=\"35\" width=\"200\" height=\"170\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"350\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Big-O Complexity</text><text x=\"350\" y=\"177\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Upper bound. Drop constants and lowe</text><text x=\"350\" y=\"188\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r terms. n^2 + n + 1 = O(n^2). Analy</text><text x=\"350\" y=\"199\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ze loops and recursion.</text><text x=\"240\" y=\"235\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Time Complexity: Big-O measures growth rate. O(1) </text><text x=\"240\" y=\"247\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">< O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n). </text><text x=\"240\" y=\"259\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Master Theorem for recursion.</text></svg>",
  "codeExamples": [
    {
      "title": "Analyzing Loops",
      "useCase": "Count operations from nested loops.",
      "code": "function exampleOofN2(n) {\n  let count = 0;\n  // O(n) * O(n) = O(n^2)\n  for (let i = 0; i < n; i++)\n    for (let j = 0; j < n; j++)\n      count++;\n  return count; // n^2 operations\n}\nfunction exampleOofN(n) {\n  let count = 0;\n  for (let i = 0; i < n; i += 2)\n    count++; // n/2 = O(n)\n  for (let i = 1; i < n; i *= 2)\n    count++; // log n = O(log n)\n  return count; // O(n) total\n}",
      "description": "Nested loops multiply, sequential loops add."
    },
    {
      "title": "Recursion Analysis",
      "useCase": "Using recurrence relations.",
      "code": "// Merge Sort: T(n) = 2*T(n/2) + O(n)\n// Master Theorem: a=2, b=2, d=1 => O(n log n)\n\n// Binary Search: T(n) = T(n/2) + O(1)\n// Master Theorem: a=1, b=2, d=0 => O(log n)\n\n// Fibonacci (naive): T(n) = T(n-1) + T(n-2) + O(1)\n// Fibonacci: O(2^n) exponential!\n\n// Fibonacci (DP): O(n) linear with memoization",
      "description": "Recurrence analysis using Master Theorem."
    },
    {
      "title": "Space Complexity Examples",
      "useCase": "Different space usage patterns.",
      "code": "// O(1) - in-place\nfunction sum(arr) { let s = 0; for (const x of arr) s += x; return s; }\n\n// O(n) - extra array\nfunction copy(arr) { return [...arr]; }\n\n// O(n^2) - matrix\nfunction matrix(n) { return Array.from({length: n}, () => new Array(n).fill(0)); }\n\n// O(log n) - recursion depth (binary search)\nfunction binarySearch(arr, x, lo, hi) {\n  if (lo > hi) return -1;\n  const mid = Math.floor((lo + hi) / 2);\n  if (arr[mid] === x) return mid;\n  return arr[mid] > x ? binarySearch(arr, x, lo, mid - 1) : binarySearch(arr, x, mid + 1, hi);\n}",
      "description": "Space complexity: O(1), O(n), O(n^2), O(log n)."
    },
    {
      "title": "Big-O Ranking",
      "useCase": "Visual growth comparison.",
      "code": "// n = 10, 100, 1000, 10000\n// O(1):    1, 1, 1, 1\n// O(log n): 1, 2, 3, 4\n// O(n):    10, 100, 1000, 10000\n// O(n log n): 10, 200, 3000, 40000\n// O(n^2):  100, 10000, 1M, 100M\n// O(2^n):  1024, 1.27e30, huge, huge\n// Choose wisely! n log n vs n^2 matters.\n// For n=100k: n log n ~ 1.7M, n^2 ~ 10B.",
      "description": "Growth comparison shows why complexity matters."
    },
    {
      "title": "Master Theorem",
      "useCase": "Solving recurrence relations.",
      "code": "// T(n) = a*T(n/b) + O(n^d)\n// Case 1: d > log_b(a) => O(n^d)\n// Case 2: d = log_b(a) => O(n^d * log n)\n// Case 3: d < log_b(a) => O(n^(log_b(a)))\n\n// Examples:\n// Merge Sort: a=2, b=2, d=1 => log_2(2)=1 => d=1 => O(n log n)\n// Binary Search: a=1, b=2, d=0 => log_2(1)=0 => d=0 => O(log n)\n// Strassen: a=7, b=2, d=2 => log_2(7)~2.81 > 2 => O(n^2.81)",
      "description": "Master Theorem for divide-and-conquer recurrences."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does Big-O represent?",
      "options": [
        "Average case",
        "Upper bound",
        "Lower bound",
        "Tight bound"
      ],
      "answer": 1,
      "explanation": "Upper bound (worst-case)."
    },
    {
      "question": "What is O(log n)?",
      "options": [
        "Constant",
        "Linear",
        "Logarithmic",
        "Quadratic"
      ],
      "answer": 2,
      "explanation": "Logarithmic — binary search."
    },
    {
      "question": "What is the complexity of merge sort?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(n log n)",
        "O(log n)"
      ],
      "answer": 2,
      "explanation": "O(n log n)."
    },
    {
      "question": "How to analyze nested loops?",
      "options": [
        "Add",
        "Subtract",
        "Multiply",
        "Divide"
      ],
      "answer": 2,
      "explanation": "Multiply the complexities."
    },
    {
      "question": "What is the best sorting complexity?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": 1,
      "explanation": "O(n log n) for comparison-based."
    },
    {
      "question": "What does Master Theorem solve?",
      "options": [
        "Graph problems",
        "Recurrence relations",
        "Sorting networks",
        "Hash collisions"
      ],
      "answer": 1,
      "explanation": "Recurrence relations T(n) = a*T(n/b) + f(n)."
    }
  ]
};
