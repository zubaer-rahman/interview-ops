export const dsa_backtracking = {
  "id": "dsa-backtracking",
  "title": "Backtracking",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "Backtracking is a recursive technique for solving problems by trying all possible candidates and abandoning (backtracking) those that fail.",
    "Key components: choice (decisions at each step), constraints (rules limiting choices), goal (condition to stop).",
    "Backtracking explores a state space tree. Pruning (branch and bound) cuts branches that cannot lead to a solution.",
    "Time complexity is often exponential (O(2^n), O(n!)) — pruning is essential for performance."
  ],
  "laymanDefinition": "Backtracking is like solving a maze with a piece of string. At each intersection (decision point), you pick a path (choice). If you hit a dead end, you retrace your steps (backtrack) and try the next path. The string ensures you never try the same path twice.",
  "deepDive": [
    {
      "heading": "Backtracking Algorithm Template",
      "text": "1. If goal reached, record solution. 2. For each valid choice: make the choice, recursively explore, undo the choice (backtrack). This is known as \"choose, explore, unchoose\" pattern."
    },
    {
      "heading": "Pruning (Branch and Bound)",
      "text": "Eliminate branches that cannot lead to a valid solution. Use constraints to cut early. Example: in N-Queens, don\\'t place queens on attacked squares. Pruning transforms exponential into feasible."
    },
    {
      "heading": "Backtracking vs Brute Force",
      "text": "Brute force generates all possibilities then checks constraints. Backtracking checks constraints DURING construction — pruning invalid branches early. Both exponential worst case, but backtracking is much faster in practice."
    },
    {
      "heading": "Applications",
      "text": "N-Queens, Sudoku solver, Permutations/Combinations, Subset sum, Graph coloring, Hamiltonian path, Crossword puzzles, Constraint satisfaction problems."
    }
  ],
  "interviewAnswer": "Backtracking systematically searches for solutions by building candidates incrementally. The \"choose, explore, unchoose\" pattern is the foundation. Pruning is critical — cut branches as early as possible. Master backtracking for permutation, combination, and constraint satisfaction problems.",
  "interviewQuestions": [
    {
      "question": "What is backtracking?",
      "answer": "A recursive technique that explores all candidates by making choices and undoing (backtracking) those that fail."
    },
    {
      "question": "What are the three key components?",
      "answer": "Choice (decisions), Constraints (rules), Goal (condition to stop)."
    },
    {
      "question": "What is the \"choose, explore, unchoose\" pattern?",
      "answer": "Make a choice, recursively explore, undo the choice to try alternatives."
    },
    {
      "question": "What is pruning in backtracking?",
      "answer": "Cutting branches that cannot lead to a valid solution — improves performance."
    },
    {
      "question": "What is the time complexity of backtracking?",
      "answer": "Often exponential (O(2^n), O(n!)) — pruning reduces practical runtime."
    },
    {
      "question": "What is the difference between backtracking and brute force?",
      "answer": "Backtracking prunes invalid branches during construction. Brute force generates all then checks."
    },
    {
      "question": "What is N-Queens problem?",
      "answer": "Place N queens on NxN board so no two attack each other."
    },
    {
      "question": "What is Sudoku solved with?",
      "answer": "Backtracking with constraint propagation."
    },
    {
      "question": "What data structure is commonly used?",
      "answer": "Recursion (call stack) for state tracking."
    },
    {
      "question": "What is a state space tree?",
      "answer": "Tree representing all possible states/choices in the search space."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Backtracking</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Choose</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Make decision</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Explore</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Recurse deeper</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Validate</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Check constraints</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dead End?</text><text x=\"215\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backtrack!</text><line x1=\"270\" y1=\"83\" x2=\"300\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"365\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unchoose</text><text x=\"365\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Undo decision</text><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Prune</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cut bad branches</text><rect x=\"10\" y=\"140\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Solution</text><text x=\"65\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Goal reached</text><rect x=\"300\" y=\"100\" width=\"180\" height=\"85\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backtracking</text><text x=\"390\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Choose, Explore, Unchoose. Pruni</text><text x=\"390\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ng is essential for performance.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Backtracking: Recursive search with pruning. N-Que</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ens, Sudoku, permutations.</text></svg>",
  "codeExamples": [
    {
      "title": "Generate Permutations",
      "useCase": "Backtracking permutations.",
      "code": "function permute(nums) {\n  const result = [];\n  function backtrack(path, used) {\n    if (path.length === nums.length) { result.push([...path]); return; }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      used[i] = true; path.push(nums[i]);\n      backtrack(path, used);\n      path.pop(); used[i] = false;\n    }\n  }\n  backtrack([], []); return result;\n}",
      "description": "Generate all permutations O(n * n!)."
    },
    {
      "title": "N-Queens",
      "useCase": "Place N queens on NxN board.",
      "code": "function solveNQueens(n) {\n  const result = [];\n  function backtrack(board, row) {\n    if (row === n) { result.push(board.map(r => r.join(\"\"))); return; }\n    for (let col = 0; col < n; col++) {\n      if (isSafe(board, row, col)) {\n        board[row][col] = \"Q\";\n        backtrack(board, row + 1);\n        board[row][col] = \".\";\n      }\n    }\n  }\n  function isSafe(board, row, col) {\n    for (let i = 0; i < row; i++) {\n      if (board[i][col] === \"Q\") return false;\n      if (col - (row - i) >= 0 && board[i][col - (row - i)] === \"Q\") return false;\n      if (col + (row - i) < n && board[i][col + (row - i)] === \"Q\") return false;\n    }\n    return true;\n  }\n  const board = Array.from({length: n}, () => new Array(n).fill(\".\"));\n  backtrack(board, 0); return result;\n}",
      "description": "N-Queens backtracking with constraint checks."
    },
    {
      "title": "Subset Sum",
      "useCase": "Find subset with target sum.",
      "code": "function subsetSum(nums, target) {\n  const result = [];\n  function backtrack(start, curr, sum) {\n    if (sum === target) { result.push([...curr]); return; }\n    if (sum > target || start >= nums.length) return;\n    for (let i = start; i < nums.length; i++) {\n      curr.push(nums[i]);\n      backtrack(i + 1, curr, sum + nums[i]);\n      curr.pop();\n    }\n  }\n  backtrack(0, [], 0); return result;\n}",
      "description": "Subset sum with pruning (sum > target)."
    },
    {
      "title": "Combination Sum",
      "useCase": "Unlimited candidates.",
      "code": "function combinationSum(candidates, target) {\n  const result = [];\n  function backtrack(start, curr, sum) {\n    if (sum === target) { result.push([...curr]); return; }\n    if (sum > target) return;\n    for (let i = start; i < candidates.length; i++) {\n      curr.push(candidates[i]);\n      backtrack(i, curr, sum + candidates[i]);\n      curr.pop();\n    }\n  }\n  backtrack(0, [], 0); return result;\n}",
      "description": "Combination sum with unlimited use of candidates."
    },
    {
      "title": "Sudoku Solver",
      "useCase": "Backtracking for Sudoku.",
      "code": "function solveSudoku(board) {\n  function isValid(board, row, col, num) {\n    for (let i = 0; i < 9; i++) {\n      if (board[row][i] === num) return false;\n      if (board[i][col] === num) return false;\n      const br = 3 * Math.floor(row/3) + Math.floor(i/3);\n      const bc = 3 * Math.floor(col/3) + i % 3;\n      if (board[br][bc] === num) return false;\n    }\n    return true;\n  }\n  function solve() {\n    for (let r = 0; r < 9; r++)\n      for (let c = 0; c < 9; c++)\n        if (board[r][c] === \".\") {\n          for (let num = 1; num <= 9; num++) {\n            if (isValid(board, r, c, num.toString())) {\n              board[r][c] = num.toString();\n              if (solve()) return true;\n              board[r][c] = \".\";\n            }\n          }\n          return false;\n        }\n    return true;\n  }\n  solve(); return board;\n}",
      "description": "Sudoku solver using backtracking with constraint propagation."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is backtracking?",
      "options": [
        "Brute force all",
        "Recursive search with pruning",
        "Iterative loop",
        "Greedy choice"
      ],
      "answer": 1,
      "explanation": "Recursive search exploring candidates with pruning."
    },
    {
      "question": "What is the core pattern?",
      "options": [
        "Choose, explore, unchoose",
        "Divide and conquer",
        "BFS traversal",
        "Dynamic programming"
      ],
      "answer": 0,
      "explanation": "Choose, explore, unchoose."
    },
    {
      "question": "What is pruning?",
      "options": [
        "Cutting invalid branches",
        "Sorting data",
        "Memoization",
        "Randomization"
      ],
      "answer": 0,
      "explanation": "Pruning cuts branches that cannot lead to solution."
    },
    {
      "question": "Time complexity of backtracking?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n!)",
        "O(1)"
      ],
      "answer": 2,
      "explanation": "Often exponential (O(n!), O(2^n))."
    },
    {
      "question": "What problem places N queens?",
      "options": [
        "N-Queens",
        "Sudoku",
        "Hamiltonian path",
        "Graph coloring"
      ],
      "answer": 0,
      "explanation": "N-Queens problem."
    },
    {
      "question": "What does \"unchoose\" mean?",
      "options": [
        "Undo the last choice",
        "Make new choice",
        "Skip choice",
        "Finalize choice"
      ],
      "answer": 0,
      "explanation": "Undo the last decision to try alternatives."
    }
  ]
};
