export const dsa_dfs = {
  "id": "dsa-dfs",
  "title": "DFS (Depth-First Search)",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "DFS explores a graph/tree by going as deep as possible along each branch before backtracking.",
    "DFS can be implemented recursively (implicit stack via call stack) or iteratively (explicit stack).",
    "Applications: topological sort, connected components, cycle detection, maze solving, backtracking.",
    "Time: O(V+E). Space: O(V) worst-case for recursion stack."
  ],
  "laymanDefinition": "DFS is like exploring a cave maze. You pick a tunnel and walk until you hit a dead end. Then you backtrack to the last intersection and try the next tunnel. You mark tunnels you've already explored so you don't go in circles.",
  "deepDive": [
    {
      "heading": "DFS Algorithm",
      "text": "Start at root. Mark as visited. For each unvisited neighbor, recursively call DFS. Backtrack when no unvisited neighbors remain. Uses stack (implicit via recursion or explicit)."
    },
    {
      "heading": "Recursive vs Iterative",
      "text": "Recursive: elegant, uses call stack. Stack overflow for deep graphs. Iterative: uses explicit Stack. Same O(V+E). Recursive simpler for trees; iterative preferred for deep graphs."
    },
    {
      "heading": "DFS on Trees vs Graphs",
      "text": "Trees: no cycles, no visited set needed. Three traversals: preorder, inorder, postorder. Graphs: cycles possible, MUST use visited set to avoid infinite loops."
    },
    {
      "heading": "DFS Applications",
      "text": "Topological sort (post-order). Connected components. Cycle detection (back edges). Path finding in mazes. Solving puzzles (Sudoku, N-Queens)."
    }
  ],
  "interviewAnswer": "DFS is essential for exploring hierarchical and connected structures. Use recursion for simplicity, iteration for depth safety. Always track visited nodes in graphs (cycles). Post-order DFS gives topological sort.",
  "interviewQuestions": [
    {
      "question": "What is DFS?",
      "answer": "Depth-First Search — explores as deep as possible along each branch before backtracking."
    },
    {
      "question": "What data structure does DFS use?",
      "answer": "Stack — implicit (recursion call stack) or explicit."
    },
    {
      "question": "What is the time complexity of DFS?",
      "answer": "O(V+E) for graphs, O(n) for trees."
    },
    {
      "question": "What is the space complexity of DFS?",
      "answer": "O(V) worst case for recursion/explicit stack."
    },
    {
      "question": "Difference between DFS on trees and graphs?",
      "answer": "Trees: no visited set needed. Graphs: need visited set to avoid cycles."
    },
    {
      "question": "What traversal does Topological Sort use?",
      "answer": "Post-order DFS (process after children)."
    },
    {
      "question": "How does DFS detect cycles in directed graphs?",
      "answer": "Track recursion stack — back edge indicates cycle."
    },
    {
      "question": "What is pre-order traversal?",
      "answer": "Process node before its children (root, left, right)."
    },
    {
      "question": "What is post-order traversal?",
      "answer": "Process node after its children (left, right, root)."
    },
    {
      "question": "What problem does DFS solve in mazes?",
      "answer": "Path finding — explores one path fully before alternatives."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">DFS (Depth-First Search)</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Start: A</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Visit</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DFS: B</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Go deep</text><line x1=\"270\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"365\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DFS: D</text><text x=\"365\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Deepest</text><line x1=\"310\" y1=\"60\" x2=\"310\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Backtrack</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">To B</text><line x1=\"120\" y1=\"113\" x2=\"150\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DFS: C</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Next branch</text><line x1=\"120\" y1=\"143\" x2=\"150\" y2=\"143\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DFS: E</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Explore</text><rect x=\"300\" y=\"100\" width=\"180\" height=\"85\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DFS (Deep First)</text><text x=\"390\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stack-based. Go deep, backtrack,</text><text x=\"390\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> continue.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">DFS: Depth-First Search. Stack-based traversal. To</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">pological sort, cycle detection.</text></svg>",
  "codeExamples": [
    {
      "title": "DFS on Graph (Recursive)",
      "useCase": "Recursive DFS traversal.",
      "code": "function dfsRecursive(graph, start) {\n  const visited = new Set(); const result = [];\n  function explore(v) { visited.add(v); result.push(v);\n    for (const neighbor of graph.get(v) || []) if (!visited.has(neighbor)) explore(neighbor); }\n  explore(start); return result;\n}",
      "description": "Recursive DFS O(V+E)."
    },
    {
      "title": "DFS on Graph (Iterative)",
      "useCase": "Iterative DFS using stack.",
      "code": "function dfsIterative(graph, start) {\n  const visited = new Set(); const stack = [start]; const result = [];\n  while (stack.length) {\n    const v = stack.pop(); if (visited.has(v)) continue;\n    visited.add(v); result.push(v);\n    for (const neighbor of graph.get(v) || []) if (!visited.has(neighbor)) stack.push(neighbor);\n  }\n  return result;\n}",
      "description": "Iterative DFS using explicit stack O(V+E)."
    },
    {
      "title": "Topological Sort (DFS)",
      "useCase": "Ordering DAG vertices.",
      "code": "function topologicalSort(graph) {\n  const visited = new Set(); const stack = [];\n  function dfs(v) { visited.add(v);\n    for (const neighbor of graph.get(v) || []) if (!visited.has(neighbor)) dfs(neighbor);\n    stack.push(v);\n  }\n  for (const v of graph.keys()) if (!visited.has(v)) dfs(v);\n  return stack.reverse();\n}",
      "description": "Topological sort using post-order DFS O(V+E)."
    },
    {
      "title": "Number of Islands",
      "useCase": "DFS for connected components.",
      "code": "function numIslands(grid) {\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === \"0\") return;\n    grid[r][c] = \"0\"; dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < grid.length; r++)\n    for (let c = 0; c < grid[0].length; c++)\n      if (grid[r][c] === \"1\") { count++; dfs(r,c); }\n  return count;\n}",
      "description": "Number of islands using DFS O(V)."
    },
    {
      "title": "Path Exists (Graph)",
      "useCase": "DFS path finding.",
      "code": "function validPath(n, edges, start, end) {\n  const graph = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) { graph[u].push(v); graph[v].push(u); }\n  const visited = new Set();\n  function dfs(v) { if (v === end) return true; visited.add(v);\n    for (const n of graph[v]) if (!visited.has(n) && dfs(n)) return true; return false; }\n  return dfs(start);\n}",
      "description": "DFS path existence check O(V+E)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What data structure does DFS use?",
      "options": [
        "Queue",
        "Stack",
        "Priority queue",
        "Hash table"
      ],
      "answer": 1,
      "explanation": "DFS uses a stack."
    },
    {
      "question": "DFS time complexity?",
      "options": [
        "O(V+E)",
        "O(V)",
        "O(E)",
        "O(n log n)"
      ],
      "answer": 0,
      "explanation": "DFS: O(V+E) for graphs."
    },
    {
      "question": "What traversal gives topological sort?",
      "options": [
        "Pre-order",
        "In-order",
        "Post-order",
        "Level-order"
      ],
      "answer": 2,
      "explanation": "Post-order DFS gives topological sort."
    },
    {
      "question": "What does DFS need that tree traversal does not?",
      "options": [
        "Stack",
        "Visited set",
        "Queue",
        "Parent pointer"
      ],
      "answer": 1,
      "explanation": "Graphs need visited set to avoid cycles."
    },
    {
      "question": "How does DFS detect cycle in directed graph?",
      "options": [
        "Visited set",
        "Parent check",
        "Recursion stack tracking",
        "Color marking"
      ],
      "answer": 2,
      "explanation": "Recursion stack tracks back edges."
    },
    {
      "question": "Maximum recursion depth risk in DFS?",
      "options": [
        "Stack overflow",
        "Queue overflow",
        "Cycle detection",
        "Memory leak"
      ],
      "answer": 0,
      "explanation": "Deep recursion can cause stack overflow."
    }
  ]
};
