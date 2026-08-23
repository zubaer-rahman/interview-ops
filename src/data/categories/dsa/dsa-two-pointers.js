export const dsa_two_pointers = {
  "id": "dsa-two-pointers",
  "title": "Two Pointers",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Two Pointers is a technique using two pointers to traverse data (usually sorted array) in a single pass.",
    "Common patterns: opposite ends (toward each other), same direction (one fast, one slow), sliding window.",
    "Typically reduces O(n^2) brute force to O(n) time and O(1) space.",
    "Key applications: two-sum in sorted array, palindrome checking, removing duplicates, trapping rain water."
  ],
  "laymanDefinition": "Two Pointers is like two bookmarks in a book. One bookmark starts at the beginning, one at the end. You move them toward each other based on what you are looking for. This is much faster than checking every pair of pages (brute force).",
  "deepDive": [
    {
      "heading": "Opposite Ends (Colliding)",
      "text": "Left pointer at start, right pointer at end. Move toward each other. Use when you need pairs from a sorted array. Classic: two-sum sorted, container with most water, trapping rain water, palindrome check."
    },
    {
      "heading": "Same Direction (Fast/Slow)",
      "text": "Both start at beginning. One moves faster than the other. Use for: removing duplicates, linked list cycle detection, find middle, partition arrays. Fast pointer explores ahead, slow pointer marks position."
    },
    {
      "heading": "Two Pointers vs Hash Map",
      "text": "Two pointers: O(1) space, requires sorted array. Hash map: O(n) space, works on unsorted. Two pointers is better when space is constrained and sorting is acceptable."
    },
    {
      "heading": "Applications",
      "text": "Two sum (sorted), 3Sum, 4Sum, container with most water, trapping rain water, remove duplicates, sort colors (Dutch flag), palindrome checking, merge sorted arrays."
    }
  ],
  "interviewAnswer": "Two Pointers is a powerful O(n) technique for sorted arrays. Opposite ends for pair problems, same direction for partitioning/removal. Always consider if the problem can be solved by moving pointers based on some comparison.",
  "interviewQuestions": [
    {
      "question": "What is the Two Pointers technique?",
      "answer": "Using two pointers to traverse data efficiently, often reducing O(n^2) to O(n)."
    },
    {
      "question": "What are the two common patterns?",
      "answer": "Opposite ends (colliding) and same direction (fast/slow)."
    },
    {
      "question": "What is the space complexity of two pointers?",
      "answer": "O(1) — no extra data structures needed."
    },
    {
      "question": "What requirement does two pointers often need?",
      "answer": "Sorted array."
    },
    {
      "question": "What is the 3Sum problem?",
      "answer": "Find all triplets summing to zero. Two pointers reduces O(n^3) to O(n^2)."
    },
    {
      "question": "What problem uses fast and slow pointers?",
      "answer": "Cycle detection in linked lists."
    },
    {
      "question": "What is the Dutch National Flag problem?",
      "answer": "Sort three values using three pointers (0s, 1s, 2s)."
    },
    {
      "question": "What is Container With Most Water?",
      "answer": "Two pointers from ends, move the shorter line inward. O(n)."
    },
    {
      "question": "How does two pointers solve two-sum sorted?",
      "answer": "Left + right pointers. If sum < target, left++. If sum > target, right--."
    },
    {
      "question": "What is a common mistake with two pointers?",
      "answer": "Not checking array bounds or off-by-one errors."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Two Pointers</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Left</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Index 0</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sorted Array</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[1,2,3,4,5,6]</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Right</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Index n-1</text><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sum < target?</text><text x=\"60\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Move right</text><rect x=\"150\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"200\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sum > target?</text><text x=\"200\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Move left</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sum = target?</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Found!</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Two Pointers</text><text x=\"385\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Opposite ends: pair problems. Same</text><text x=\"385\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> direction: removal/partition. O(n</text><text x=\"385\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">) time, O(1) space.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Two Pointers: O(n) time, O(1) space. Pairs, remova</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">l, cycle detection.</text></svg>",
  "codeExamples": [
    {
      "title": "Two Sum (Sorted)",
      "useCase": "Opposite ends colliding.",
      "code": "function twoSumSorted(nums, target) {\n  let left = 0, right = nums.length - 1;\n  while (left < right) {\n    const sum = nums[left] + nums[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++; else right--;\n  }\n  return [];\n}",
      "description": "Two sum sorted O(n) O(1)."
    },
    {
      "title": "Remove Duplicates",
      "useCase": "Fast/slow pointers.",
      "code": "function removeDuplicates(nums) {\n  if (!nums.length) return 0;\n  let slow = 0;\n  for (let fast = 1; fast < nums.length; fast++)\n    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast];\n  return slow + 1;\n}",
      "description": "Remove duplicates O(n) O(1)."
    },
    {
      "title": "3Sum",
      "useCase": "Find triplets summing to zero.",
      "code": "function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const result = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let left = i + 1, right = nums.length - 1;\n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      if (sum === 0) { result.push([nums[i], nums[left], nums[right]]); while (left < right && nums[left] === nums[left+1]) left++; while (left < right && nums[right] === nums[right-1]) right--; left++; right--; }\n      else if (sum < 0) left++;\n      else right--;\n    }\n  }\n  return result;\n}",
      "description": "3Sum O(n^2) with two pointers."
    },
    {
      "title": "Container With Most Water",
      "useCase": "Opposite ends.",
      "code": "function maxArea(height) {\n  let left = 0, right = height.length - 1, max = 0;\n  while (left < right) {\n    const area = Math.min(height[left], height[right]) * (right - left);\n    max = Math.max(max, area);\n    if (height[left] < height[right]) left++; else right--;\n  }\n  return max;\n}",
      "description": "Container with most water O(n) O(1)."
    },
    {
      "title": "Sort Colors (Dutch Flag)",
      "useCase": "Three pointer sort.",
      "code": "function sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) { [nums[low], nums[mid]] = [nums[mid], nums[low]]; low++; mid++; }\n    else if (nums[mid] === 1) mid++;\n    else { [nums[mid], nums[high]] = [nums[high], nums[mid]]; high--; }\n  }\n}",
      "description": "Dutch flag sort O(n) O(1) with three pointers."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Two pointers reduces O(n^2) to?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 2,
      "explanation": "O(n) typical."
    },
    {
      "question": "Space complexity of two pointers?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": 0,
      "explanation": "O(1) — no extra structures."
    },
    {
      "question": "What does two pointers often require?",
      "options": [
        "Sorted array",
        "Unsorted array",
        "Hash set",
        "Binary tree"
      ],
      "answer": 0,
      "explanation": "Sorted array typically needed."
    },
    {
      "question": "How to move pointers for two sum?",
      "options": [
        "Both left++",
        "Both right--",
        "Sum < target: left++",
        "Random"
      ],
      "answer": 2,
      "explanation": "If sum < target: left++. If sum > target: right--."
    },
    {
      "question": "What detects linked list cycles?",
      "options": [
        "Opposite ends",
        "Fast/slow pointers",
        "Binary search",
        "Two stacks"
      ],
      "answer": 1,
      "explanation": "Fast/slow (Floyd) pointer technique."
    },
    {
      "question": "Dutch flag sorts how many values?",
      "options": [
        "2",
        "3",
        "4",
        "n"
      ],
      "answer": 1,
      "explanation": "Three values (0, 1, 2) using three pointers."
    }
  ]
};
