export const practice_algorithms = {
  "id": "practice-algorithms",
  "title": "Top Algorithm Coding Problems",
  "difficulty": "intermediate",
  "estimatedMinutes": 45,
  "tldr": [
    "Must-practice patterns: Two Pointers, Sliding Window, Binary Search, BFS/DFS, Dynamic Programming, Backtracking.",
    "Two Sum and its variations (sorted input, multiple pairs, 3Sum, 4Sum) appear in 80% of FAANG interviews.",
    "Master the sliding window pattern for substring/ subarray problems — O(n) time, O(1) space.",
    "Tree traversals (inorder, preorder, postorder, level-order) are foundational for 90% of tree problems.",
    "Dynamic Programming: start with Fibonacci (top-down memoization), then 0/1 Knapsack, LCS, and grid paths."
  ],
  "laymanDefinition": "Algorithm problems are like solving puzzles with code. The interviewer gives you a puzzle (like \"find the missing number in an array\"), and you need to write an efficient solution. The key is recognizing patterns: if the problem says \"contiguous subarray\", think sliding window. If it says \"sorted array\", think binary search or two pointers. Like learning chess openings, mastering these patterns helps you recognize the right approach within seconds of reading the problem.",
  "deepDive": [
    {
      "heading": "Two Pointers Pattern",
      "text": "Used for sorted arrays and linked lists. Classic problems: Two Sum (sorted), Remove Duplicates, Container With Most Water, Trapping Rain Water. The pattern: place left at start, right at end, move based on sum comparison. Time: O(n), Space: O(1). For Three Sum: fix one element, run two pointers on the rest. For Linked Lists: Fast/Slow pointer pattern for cycle detection, middle of list, or finding intersection point."
    },
    {
      "heading": "Sliding Window Pattern",
      "text": "For subarray/substring problems: Maximum Sum Subarray of Size K, Longest Substring Without Repeating Characters, Minimum Window Substring. Fixed window: maintain window sum, slide right one step at a time. Variable window: expand right pointer, shrink left when condition breaks. The key insight: once you find a valid window, you can compute all subarrays ending at right that satisfy the condition in O(1) using the left pointer position."
    },
    {
      "heading": "Binary Search Pattern",
      "text": "Beyond basic search: Find First/Last Position of Element, Search in Rotated Sorted Array, Find Peak Element, Sqrt(x). Template: while (left < right) { mid = left + (right - left) / 2; if (condition(mid)) right = mid; else left = mid + 1; } return left; This template works for \"find first\" problems. For \"find last\", swap the logic. Binary search also applies to non-array problems: find the minimum capacity to ship packages within D days, split array largest sum."
    },
    {
      "heading": "Tree Traversals & DFS/BFS",
      "text": "Preorder: root → left → right (clone a tree). Inorder: left → root → right (BST gives sorted order). Postorder: left → right → root (delete tree, evaluate expression). Level-order: BFS using queue. Key problems: Validate BST (inorder must be sorted), Lowest Common Ancestor, Maximum Depth, Diameter of Tree, Serialize/Deserialize. Use recursion for DFS (implicit stack), iterative BFS for shortest path in graphs with unweighted edges."
    },
    {
      "heading": "Dynamic Programming Patterns",
      "text": "1D DP: Fibonacci, Climbing Stairs, House Robber — dp[i] depends on dp[i-1] and dp[i-2]. 2D DP: Grid paths, Edit Distance — dp[i][j] depends on dp[i-1][j], dp[i][j-1], dp[i-1][j-1]. Knapsack: 0/1 (each item once) vs Unbounded (unlimited use). For 0/1 Knapsack: dp[i][w] = max(dp[i-1][w], dp[i-1][w-wi] + vi). State compression: reduce 2D to 1D by iterating backwards. LCS: if chars match, dp[i][j] = 1 + dp[i-1][j-1]; else dp[i][j] = max(dp[i-1][j], dp[i][j-1])."
    },
    {
      "heading": "Backtracking Pattern",
      "text": "Used for generating all permutations, combinations, subsets. Template: function backtrack(start, path) { if goal met, push path; for each option: push, recurse, pop }. Key problems: N-Queens, Sudoku Solver, Letter Combinations of a Phone Number, Palindrome Partitioning. Optimization: prune invalid paths early (branch and bound). For permutations, use a used[] boolean array. For combinations, pass start index to avoid duplicates."
    }
  ],
  "interviewAnswer": "For algorithm interviews, master these patterns: 1) Two Pointers — sorted arrays, linked lists; 2) Sliding Window — subarray/substring optimization; 3) Binary Search — search space reduction; 4) BFS/DFS — trees, graphs, shortest paths; 5) Dynamic Programming — optimal substructure with overlapping subproblems; 6) Backtracking — exhaustive search with pruning. Always start with a brute force solution, then optimize. Communicate your thought process clearly. Test with edge cases: empty input, single element, duplicates, negative numbers, overflow.",
  "interviewQuestions": [
    {
      "question": "Given an array of integers, return indices of two numbers that add up to target.",
      "answer": "Use a hash map: iterate array, for each num, check if target - num exists in map. O(n) time, O(n) space. Edge cases: duplicates, no solution, multiple solutions (return first)."
    },
    {
      "question": "Find the longest substring without repeating characters.",
      "answer": "Sliding window with hash set. Expand right pointer, if char exists in set, shrink left pointer until char is removed. Track max window size. O(n) time, O(min(m, n)) space where m is charset size."
    },
    {
      "question": "Given a binary tree, validate if it is a BST.",
      "answer": "Inorder traversal must yield sorted values. Recursive: pass min/max range to each node. Iterative: inorder with stack, track previous value. Left subtree values < root < right subtree values. Watch for integer bounds — use null or Long.MIN_VALUE."
    },
    {
      "question": "Find the maximum subarray sum (Kadane's Algorithm).",
      "answer": "Initialize maxSoFar = nums[0], maxEndingHere = nums[0]. For each element: maxEndingHere = max(num, maxEndingHere + num); maxSoFar = max(maxSoFar, maxEndingHere). O(n) time, O(1) space. Works for both positive and negative numbers."
    },
    {
      "question": "Reverse a linked list iteratively and recursively.",
      "answer": "Iterative: prev = null, current = head; while current, store next = current.next, current.next = prev, prev = current, current = next; return prev. Recursive: if (!head || !head.next) return head; newHead = reverseList(head.next); head.next.next = head; head.next = null; return newHead."
    },
    {
      "question": "Find the lowest common ancestor of two nodes in a binary tree.",
      "answer": "Recursive: if root is null or matches either p or q, return root. Search left and right. If both return non-null, root is LCA. If only one returns non-null, that's the LCA. O(n) time, O(h) space for recursion stack."
    },
    {
      "question": "Implement a function to check if a string is a valid palindrome (alphanumeric only, ignore case).",
      "answer": "Two pointers: left = 0, right = len-1. While left < right: skip non-alphanumeric chars, compare char.toLowerCase(). If mismatch, return false. O(n) time, O(1) space. Edge: empty string is valid palindrome."
    },
    {
      "question": "Design a LRU (Least Recently Used) Cache.",
      "answer": "HashMap + Doubly Linked List. Map stores key → node. On get: move node to head, return value. On put: if exists, update value and move to head; if new, create node at head. If over capacity, remove tail node and map entry. All operations O(1)."
    },
    {
      "question": "Find the merge point of two linked lists.",
      "answer": "Method 1: calculate lengths, advance longer list by difference, then move both until they meet. Method 2: two pointers, when one reaches end, redirect to other list's head — they meet at intersection after at most 2 passes. O(n + m) time, O(1) space."
    },
    {
      "question": "Given a matrix of 0s and 1s, find the size of the largest square submatrix of 1s.",
      "answer": "DP: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) if matrix[i][j] == 1. Track max side length. Area = side^2. O(mn) time, O(mn) space, can be optimized to O(n) space using only previous row."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:600px;\"><defs><marker id=\"alArr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0,8 3,0 6\" fill=\"#6c9fff\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"580\" height=\"280\" rx=\"10\" fill=\"var(--bg-card)\" stroke=\"var(--border)\" stroke-width=\"1\"/><text x=\"300\" y=\"38\" fill=\"#e8eaed\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Algorithm Patterns Decision Tree</text><rect x=\"40\" y=\"55\" width=\"140\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"78\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sorted Array?</text><text x=\"280\" y=\"78\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">→ Yes → Two Pointers / Binary Search</text><rect x=\"40\" y=\"100\" width=\"140\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"123\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Subarray/Substring?</text><text x=\"280\" y=\"123\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">→ Sliding Window O(n)</text><rect x=\"40\" y=\"145\" width=\"140\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"168\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Optimal Substructure?</text><text x=\"280\" y=\"168\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">→ Dynamic Programming</text><rect x=\"40\" y=\"190\" width=\"140\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"213\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">All Combos/Perms?</text><text x=\"280\" y=\"213\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">→ Backtracking + Pruning</text><rect x=\"40\" y=\"235\" width=\"140\" height=\"36\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"258\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tree/Graph?</text><text x=\"280\" y=\"258\" fill=\"#9aa0b0\" font-size=\"9\" text-anchor=\"middle\">→ BFS (shortest) / DFS (all paths)</text></svg>",
  "codeExamples": [
    {
      "title": "Sliding Window: Longest Substring Without Repeating",
      "useCase": "O(n) solution for classic substring problem",
      "code": "function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let left = 0, maxLen = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) {\n      set.delete(s[left]);\n      left++;\n    }\n    set.add(s[right]);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}\n// Edge cases: \"abcabcbb\" → 3, \"bbbbb\" → 1, \"\" → 0\n// Time: O(n), Space: O(min(m,n)) where m = charset size",
      "description": "Sliding window with Set: expand right pointer, shrink left when duplicate found. Track max window size."
    },
    {
      "title": "DP: 0/1 Knapsack",
      "useCase": "Classic DP with space optimization",
      "code": "function knapsack(weights, values, capacity) {\n  const n = weights.length;\n  const dp = new Array(capacity + 1).fill(0);\n  for (let i = 0; i < n; i++) {\n    for (let w = capacity; w >= weights[i]; w--) {\n      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);\n    }\n  }\n  return dp[capacity];\n}\n// Items: weight[2,3,4,5], value[3,4,5,6], capacity=5 → 7\n// Time: O(n*C), Space: O(C) with 1D optimization",
      "description": "1D DP array: iterate items outer loop, capacity backward inner loop. This ensures each item is used at most once."
    },
    {
      "title": "Backtracking: Generate All Subsets",
      "useCase": "Classic combination pattern",
      "code": "function subsets(nums) {\n  const result = [];\n  function backtrack(start, path) {\n    result.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return result;\n}\n// nums = [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n// Time: O(2^n), Space: O(n) for recursion stack",
      "description": "Backtracking template: push choice → recurse → pop choice. The start index prevents duplicate combinations."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the time complexity of Kadane's algorithm for maximum subarray sum?",
      "options": [
        "O(n²)",
        "O(n log n)",
        "O(n)",
        "O(1)"
      ],
      "answer": 2,
      "explanation": "Kadane's runs in O(n) time with O(1) space."
    },
    {
      "question": "Which data structure is best for an LRU Cache?",
      "options": [
        "Array",
        "HashMap + Doubly Linked List",
        "Binary Search Tree",
        "Heap"
      ],
      "answer": 1,
      "explanation": "HashMap provides O(1) lookup; Doubly Linked List maintains order with O(1) removal/insertion."
    },
    {
      "question": "For the \"Longest Substring Without Repeating Characters\", which pattern is optimal?",
      "options": [
        "Brute force O(n³)",
        "Two pointers O(n²)",
        "Sliding window O(n)",
        "Binary search O(n log n)"
      ],
      "answer": 2,
      "explanation": "Sliding window with hash set gives O(n) time, O(1) space."
    },
    {
      "question": "What does the recursive reverse linked list function return?",
      "options": [
        "void",
        "The last node (original tail)",
        "The first node (original head)",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "The recursive function returns the new head, which is the original tail of the list."
    },
    {
      "question": "In 0/1 Knapsack DP, why do we iterate capacity backward?",
      "options": [
        "Faster execution",
        "Prevents reusing the same item multiple times",
        "Less memory usage",
        "Easier to understand"
      ],
      "answer": 1,
      "explanation": "Backward iteration ensures each item is counted at most once (0/1 property)."
    },
    {
      "question": "Which tree traversal produces sorted order for a BST?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level-order"
      ],
      "answer": 1,
      "explanation": "Inorder traversal of a BST visits nodes in ascending sorted order."
    }
  ]
};
