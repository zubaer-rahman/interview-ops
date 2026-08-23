export const dsa_searching = {
  "id": "dsa-searching",
  "title": "Searching Algorithms",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Searching finds the position of a target value within a collection of data.",
    "Linear Search: O(n) — checks each element sequentially. Works on unsorted data.",
    "Binary Search: O(log n) — repeatedly divides sorted array in half. Requires sorted input.",
    "Other search methods: Jump Search, Interpolation Search, Exponential Search, Ternary Search, Fibonacci Search."
  ],
  "laymanDefinition": "Searching is like finding a name in a list. Linear search is reading the list from top to bottom. Binary search is opening the phone book in the middle and deciding which half to check based on alphabet. Binary search is much faster but requires the list to be sorted.",
  "deepDive": [
    {
      "heading": "Linear Search",
      "text": "Sequential check of each element. O(n) time. Works on any data (unsorted or sorted). Simple to implement. Best for small arrays or unsorted data. Early exit if target found. One pass through data."
    },
    {
      "heading": "Binary Search",
      "text": "Divide: find middle element. Compare: if target equals middle, return. If target < middle, search left half. If target > middle, search right half. O(log n). Requires sorted array. Can be iterative or recursive."
    },
    {
      "heading": "Search Algorithms Comparison",
      "text": "Linear: O(n). Binary: O(log n). Jump: O(sqrt(n)). Interpolation: O(log log n) average, O(n) worst. Exponential: O(log n). Ternary: O(log_3 n) but more comparisons. Fibonacci: O(log n). Binary is the most practical for sorted arrays."
    },
    {
      "heading": "Binary Search Variants",
      "text": "Find first/last occurrence (duplicates). Find closest element. Find insertion point. Search in rotated sorted array. Search in 2D matrix. Binary search on answer space (predicate-based)."
    }
  ],
  "interviewAnswer": "Binary search is the most important search algorithm for sorted data. Know the standard implementation and its variants (first/last occurrence, rotated array). Linear search is fine for unsorted data. Many problems reduce to binary search on the answer space.",
  "interviewQuestions": [
    {
      "question": "What is Linear Search?",
      "answer": "Sequential check of each element. O(n) time complexity."
    },
    {
      "question": "What is Binary Search?",
      "answer": "Divide-and-conquer search on sorted array. O(log n) time complexity."
    },
    {
      "question": "What is the prerequisite for Binary Search?",
      "answer": "The array must be sorted."
    },
    {
      "question": "What is the recurrence for Binary Search?",
      "answer": "T(n) = T(n/2) + O(1) — O(log n)."
    },
    {
      "question": "What is Jump Search?",
      "answer": "Jump by sqrt(n) blocks, then linear search within block. O(sqrt(n))."
    },
    {
      "question": "What is Interpolation Search?",
      "answer": "Probe based on value distribution. O(log log n) average, O(n) worst."
    },
    {
      "question": "How do you find first occurrence in binary search?",
      "answer": "Modify binary search: when found, continue searching left half."
    },
    {
      "question": "What is binary search on answer space?",
      "answer": "Binary search on the range of possible answers rather than array indices."
    },
    {
      "question": "What is Exponential Search?",
      "answer": "Find range by doubling, then binary search. O(log n)."
    },
    {
      "question": "What is Ternary Search?",
      "answer": "Divide into three parts. O(log_3 n) but more comparisons than binary."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Searching Algorithms</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unsorted</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linear Search O(n)</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sorted? Yes</text><text x=\"215\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Binary Search O(log </text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n)</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mid Element</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compare</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Left Half</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">< mid</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Right Half</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">> mid</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Found!</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return index</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Searching</text><text x=\"385\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linear: O(n) unsorted. Binary: O(l</text><text x=\"385\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">og n) sorted. Variants: first/last</text><text x=\"385\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">, rotated.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Searching: Linear (O(n)) vs Binary (O(log n)). Bin</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ary requires sorted array. Know variants.</text></svg>",
  "codeExamples": [
    {
      "title": "Linear Search",
      "useCase": "Sequential search.",
      "code": "function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++)\n    if (arr[i] === target) return i;\n  return -1;\n}",
      "description": "Linear search O(n)."
    },
    {
      "title": "Binary Search (Iterative)",
      "useCase": "Standard binary search.",
      "code": "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
      "description": "Binary search O(log n) iterative."
    },
    {
      "title": "First/Last Occurrence",
      "useCase": "Binary search with duplicates.",
      "code": "function firstOccurrence(arr, target) {\n  let left = 0, right = arr.length - 1, result = -1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) { result = mid; right = mid - 1; }\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return result;\n}",
      "description": "Find first occurrence using binary search."
    },
    {
      "title": "Search in Rotated Sorted Array",
      "useCase": "Binary search variant.",
      "code": "function searchRotated(nums, target) {\n  let left = 0, right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[left] <= nums[mid]) {\n      if (target >= nums[left] && target < nums[mid]) right = mid - 1;\n      else left = mid + 1;\n    } else {\n      if (target > nums[mid] && target <= nums[right]) left = mid + 1;\n      else right = mid - 1;\n    }\n  }\n  return -1;\n}",
      "description": "Search in rotated sorted array O(log n)."
    },
    {
      "title": "Binary Search on Answer",
      "useCase": "Predicate-based search.",
      "code": "function sqrt(x) {\n  let left = 0, right = x;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    const sq = mid * mid;\n    if (sq === x) return mid;\n    if (sq < x) { left = mid + 1; }\n    else { right = mid - 1; }\n  }\n  return right;\n}",
      "description": "Binary search on answer space for sqrt."
    },
    {
      "title": "Jump Search",
      "useCase": "Jump by sqrt(n).",
      "code": "function jumpSearch(arr, target) {\n  const n = arr.length, step = Math.floor(Math.sqrt(n));\n  let prev = 0;\n  while (arr[Math.min(step, n) - 1] < target) { prev = step; step += Math.floor(Math.sqrt(n)); if (prev >= n) return -1; }\n  while (arr[prev] < target) { prev++; if (prev === Math.min(step, n)) return -1; }\n  return arr[prev] === target ? prev : -1;\n}",
      "description": "Jump search O(sqrt(n))."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Linear Search time?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 2,
      "explanation": "O(n)."
    },
    {
      "question": "Binary Search time?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "O(log n)."
    },
    {
      "question": "Prerequisite for binary search?",
      "options": [
        "Sorted array",
        "Unsorted array",
        "Unique values",
        "Integers only"
      ],
      "answer": 0,
      "explanation": "Array must be sorted."
    },
    {
      "question": "Binary search recurrence?",
      "options": [
        "T(n) = T(n/2) + O(1)",
        "T(n) = 2T(n/2) + O(1)",
        "T(n) = T(n-1) + O(1)",
        "T(n) = 2T(n/2) + O(n)"
      ],
      "answer": 0,
      "explanation": "T(n) = T(n/2) + O(1) -> O(log n)."
    },
    {
      "question": "What search finds first occurrence?",
      "options": [
        "Binary search with left bias",
        "Linear search",
        "Jump search",
        "Interpolation"
      ],
      "answer": 0,
      "explanation": "Modified binary search continuing left after match."
    },
    {
      "question": "Jump Search complexity?",
      "options": [
        "O(log n)",
        "O(sqrt(n))",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "O(sqrt(n))."
    }
  ]
};
