export const dsa_topological_sort = {
  "id": "dsa-topological-sort",
  "title": "Topological Sort",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "Topological sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u->v, u comes before v.",
    "Only possible for DAGs (Directed Acyclic Graphs). If the graph has a cycle, topological sort does not exist.",
    "Two main algorithms: Kahn's algorithm (BFS using in-degree) and DFS-based (post-order traversal with stack).",
    "Time: O(V+E) for both approaches. Space: O(V) for the result and auxiliary structures."
  ],
  "laymanDefinition": "Topological sort is like planning a college course schedule. Prerequisite courses must be taken before advanced courses. You list courses in an order such that no course appears before its prerequisites. If there is a circular prerequisite chain, it is impossible.",
  "deepDive": [
    {
      "heading": "Kahn\\'s Algorithm (BFS)",
      "text": "Count in-degrees for each vertex. Add all vertices with in-degree 0 to queue. While queue: remove vertex, add to result, decrement in-degree of neighbors. If neighbor in-degree becomes 0, add to queue. If result size != V, graph has cycle."
    },
    {
      "heading": "DFS-Based Topological Sort",
      "text": "Perform DFS on graph. After visiting all neighbors of a vertex (post-order), push it onto a stack. Reverse the stack to get topological order. Detect cycle: if we encounter a vertex in current recursion stack, cycle exists."
    },
    {
      "heading": "Applications",
      "text": "Build systems (Make, Bazel) resolve dependency order. Package managers (npm, pip) install dependencies. Task scheduling with prerequisites. Course prerequisite planning. Instruction scheduling in compilers. Data pipeline orchestration."
    },
    {
      "heading": "Kahn\\'s vs DFS",
      "text": "Kahn\\'s: iterative, easier to understand, naturally detects cycles (result size != V). DFS: recursive, stack required for ordering, detects cycles via recursion stack. Both O(V+E). Kahn\\'s is generally preferred for its simplicity."
    }
  ],
  "interviewAnswer": "Topological sort orders DAG vertices respecting edge direction. Kahn's algorithm (in-degree based) is the most intuitive. DFS approach uses post-order stacking. Both O(V+E). Always check for cycles first - topological sort only exists for DAGs.",
  "interviewQuestions": [
    {
      "question": "What is topological sort?",
      "answer": "A linear ordering of DAG vertices where u comes before v for every edge u->v."
    },
    {
      "question": "What type of graph can be topologically sorted?",
      "answer": "Only Directed Acyclic Graphs (DAGs)."
    },
    {
      "question": "What are the two main algorithms?",
      "answer": "Kahn\\'s algorithm (BFS, in-degree) and DFS-based (post-order stack)."
    },
    {
      "question": "How does Kahn\\'s algorithm detect cycles?",
      "answer": "If result size != number of vertices, a cycle exists."
    },
    {
      "question": "What data structure does Kahn\\'s use?",
      "answer": "Queue for vertices with in-degree 0."
    },
    {
      "question": "What is the time complexity?",
      "answer": "O(V+E) for both Kahn\\'s and DFS-based approaches."
    },
    {
      "question": "What is a real-world application?",
      "answer": "Build systems, package managers, course scheduling."
    },
    {
      "question": "What does in-degree mean?",
      "answer": "Number of incoming edges to a vertex. In-degree 0 means no prerequisites."
    },
    {
      "question": "How does DFS topological sort work?",
      "answer": "DFS, push vertex to stack after visiting all neighbors (post-order), then reverse stack."
    },
    {
      "question": "What happens if graph has a cycle?",
      "answer": "Topological sort does not exist. Kahn\\'s will have result size < V."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Topological Sort</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">In-degree 0</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Queue them</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Process</text><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Add to result</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Decrement</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Neighbors in-degree</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">In-degree 0?</text><text x=\"210\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Add to queue</text><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Result Size</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">= V?</text><rect x=\"170\" y=\"105\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"235\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Yes -> Done</text><text x=\"235\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Topological order</text><rect x=\"10\" y=\"140\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"156\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">No -> Cycle</text><text x=\"65\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Invalid!</text><rect x=\"320\" y=\"35\" width=\"160\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"400\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Topological Sort</text><text x=\"400\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Order DAG: u before v for eve</text><text x=\"400\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ry edge. Kahn's or DFS. O(V+E</text><text x=\"400\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">). No cycles allowed.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Topological Sort: Linear ordering of DAG. Kahn's (</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">BFS in-degree) or DFS (post-order). O(V+E).</text></svg>",
  "codeExamples": [
    {
      "title": "Kahn\\'s Algorithm",
      "useCase": "BFS-based topological sort.",
      "code": "function topologicalSortKahn(n, edges) {\n  const graph = Array.from({length: n}, () => []);\n  const inDegree = new Array(n).fill(0);\n  for (const [u, v] of edges) { graph[u].push(v); inDegree[v]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (inDegree[i] === 0) q.push(i);\n  const result = [];\n  while (q.length) {\n    const u = q.shift(); result.push(u);\n    for (const v of graph[u]) if (--inDegree[v] === 0) q.push(v);\n  }\n  return result.length === n ? result : [];\n}",
      "description": "Kahn\\'s algorithm O(V+E). Returns empty if cycle."
    },
    {
      "title": "DFS Topological Sort",
      "useCase": "DFS-based approach.",
      "code": "function topologicalSortDFS(n, edges) {\n  const graph = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) graph[u].push(v);\n  const visited = new Set(), recStack = new Set(), result = [];\n  function dfs(u) {\n    visited.add(u); recStack.add(u);\n    for (const v of graph[u]) {\n      if (recStack.has(v)) return true;\n      if (!visited.has(v) && dfs(v)) return true;\n    }\n    recStack.delete(u); result.push(u); return false;\n  }\n  for (let i = 0; i < n; i++) if (!visited.has(i) && dfs(i)) return [];\n  return result.reverse();\n}",
      "description": "DFS topological sort with cycle detection O(V+E)."
    },
    {
      "title": "Course Schedule (LeetCode 207)",
      "useCase": "Detect if prerequisites possible.",
      "code": "function canFinish(numCourses, prerequisites) {\n  const graph = Array.from({length: numCourses}, () => []);\n  const inDegree = new Array(numCourses).fill(0);\n  for (const [course, prereq] of prerequisites) { graph[prereq].push(course); inDegree[course]++; }\n  const q = []; for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);\n  let count = 0;\n  while (q.length) { const u = q.shift(); count++; for (const v of graph[u]) if (--inDegree[v] === 0) q.push(v); }\n  return count === numCourses;\n}",
      "description": "Course schedule using Kahn\\'s algorithm."
    },
    {
      "title": "Course Schedule II",
      "useCase": "Return order if possible.",
      "code": "function findOrder(numCourses, prerequisites) {\n  const graph = Array.from({length: numCourses}, () => []);\n  const inDegree = new Array(numCourses).fill(0);\n  for (const [course, prereq] of prerequisites) { graph[prereq].push(course); inDegree[course]++; }\n  const q = []; for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);\n  const result = [];\n  while (q.length) { const u = q.shift(); result.push(u); for (const v of graph[u]) if (--inDegree[v] === 0) q.push(v); }\n  return result.length === numCourses ? result : [];\n}",
      "description": "Return topological order or empty if cycle."
    },
    {
      "title": "Alien Dictionary",
      "useCase": "Topological sort from word ordering.",
      "code": "function alienOrder(words) {\n  const graph = new Map(); const inDegree = new Map();\n  for (const w of words) { for (const c of w) { if (!graph.has(c)) graph.set(c, new Set()); if (!inDegree.has(c)) inDegree.set(c, 0); } }\n  for (let i = 0; i < words.length - 1; i++) {\n    const w1 = words[i], w2 = words[i+1];\n    for (let j = 0; j < Math.min(w1.length, w2.length); j++)\n      if (w1[j] !== w2[j]) { if (!graph.get(w1[j]).has(w2[j])) { graph.get(w1[j]).add(w2[j]); inDegree.set(w2[j], inDegree.get(w2[j]) + 1); } break; }\n  }\n  const q = []; for (const [c, d] of inDegree) if (d === 0) q.push(c);\n  const result = [];\n  while (q.length) { const c = q.shift(); result.push(c); for (const neighbor of graph.get(c) || []) { inDegree.set(neighbor, inDegree.get(neighbor) - 1); if (inDegree.get(neighbor) === 0) q.push(neighbor); } }\n  return result.length === inDegree.size ? result.join(\"\") : \"\";\n}",
      "description": "Alien dictionary using topological sort."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What graph can be topologically sorted?",
      "options": [
        "Any graph",
        "DAG only",
        "Undirected only",
        "Weighted only"
      ],
      "answer": 1,
      "explanation": "Only Directed Acyclic Graphs (DAGs)."
    },
    {
      "question": "What does Kahn\\'s algorithm use?",
      "options": [
        "Stack",
        "Queue",
        "Priority queue",
        "Hash set"
      ],
      "answer": 1,
      "explanation": "Queue for vertices with in-degree 0."
    },
    {
      "question": "Time complexity of topological sort?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V+E)",
        "O(V log V)"
      ],
      "answer": 2,
      "explanation": "O(V+E)."
    },
    {
      "question": "What indicates a cycle in Kahn\\'s?",
      "options": [
        "Queue becomes empty early",
        "Result size != V",
        "In-degree never 0",
        "Stack overflow"
      ],
      "answer": 1,
      "explanation": "If result.size !== V, there is a cycle."
    },
    {
      "question": "What does topological sort order?",
      "options": [
        "Vertices respecting edges",
        "Edges by weight",
        "Vertices by value",
        "Components"
      ],
      "answer": 0,
      "explanation": "Orders vertices respecting edge direction."
    },
    {
      "question": "What is a real-world use?",
      "options": [
        "Sorting numbers",
        "Course prerequisite planning",
        "Graph coloring",
        "Path finding"
      ],
      "answer": 1,
      "explanation": "Course scheduling / build systems."
    }
  ]
};
