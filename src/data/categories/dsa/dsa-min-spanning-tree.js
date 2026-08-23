export const dsa_min_spanning_tree = {
  "id": "dsa-min-spanning-tree",
  "title": "Minimum Spanning Tree",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "A Minimum Spanning Tree (MST) connects all vertices in a weighted undirected graph with minimum total edge weight.",
    "MST has exactly V-1 edges for V vertices. No cycles. Minimum possible total weight.",
    "Two main algorithms: Kruskal's (sort edges, use DSU) and Prim's (greedy, start from any vertex).",
    "Both Kruskal and Prim run in O(E log E) or O(E log V) time depending on implementation."
  ],
  "laymanDefinition": "MST is like planning the cheapest road network to connect all cities. You want to build roads such that every city is connected, no redundant roads (no cycles), and the total construction cost is minimized. You can skip expensive roads if cheaper alternatives connect the same cities.",
  "deepDive": [
    {
      "heading": "Kruskal\\'s Algorithm",
      "text": "Sort all edges by weight. Process edges in increasing order. If adding edge does not create a cycle (using DSU Union-Find), include it in MST. Stop when V-1 edges added. Time: O(E log E) for sorting + O(E * alpha(V)) for DSU operations."
    },
    {
      "heading": "Prim\\'s Algorithm",
      "text": "Start from any vertex. Use min-priority queue of edges. While queue not empty: pop minimum weight edge. If it connects visited to unvisited vertex, add to MST, add all edges from newly visited vertex to queue. O(E log V) with binary heap."
    },
    {
      "heading": "MST Properties",
      "text": "Cut property: minimum weight edge crossing any cut belongs to some MST. Cycle property: maximum weight edge in any cycle is not in any MST. Unique: if all edge weights are distinct, MST is unique."
    },
    {
      "heading": "Applications",
      "text": "Network design (wiring, fiber, pipelines). Approximation algorithms (TSP). Cluster analysis (find clusters by removing heavy edges). Image segmentation. Circuit design."
    }
  ],
  "interviewAnswer": "MST connects all vertices with minimum total weight. Kruskal: sort edges, use DSU to avoid cycles. Prim: grow tree from start vertex using min-priority queue. Choose Kruskal for sparse graphs. Choose Prim for dense graphs. Both O(E log E).",
  "interviewQuestions": [
    {
      "question": "What is MST?",
      "answer": "A tree connecting all vertices with minimum total edge weight."
    },
    {
      "question": "How many edges does MST have?",
      "answer": "V-1 edges for V vertices."
    },
    {
      "question": "What are the two main MST algorithms?",
      "answer": "Kruskal\\'s (edges sorted, DSU) and Prim\\'s (priority queue, greedy)."
    },
    {
      "question": "What data structure does Kruskal use?",
      "answer": "Disjoint Set Union (Union-Find) for cycle detection."
    },
    {
      "question": "What data structure does Prim use?",
      "answer": "Min-priority queue (min-heap)."
    },
    {
      "question": "Time complexity of Kruskal?",
      "answer": "O(E log E) for sorting + O(E * alpha(V)) for DSU."
    },
    {
      "question": "Time complexity of Prim with binary heap?",
      "answer": "O(E log V)."
    },
    {
      "question": "What is the cut property of MST?",
      "answer": "Minimum weight edge crossing any cut belongs to some MST."
    },
    {
      "question": "What is the cycle property of MST?",
      "answer": "Maximum weight edge in any cycle is not in any MST."
    },
    {
      "question": "When is MST unique?",
      "answer": "When all edge weights are distinct."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Minimum Spanning Tree</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">All vertices</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Disconnected</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Sort Edges</text><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">By weight</text><line x1=\"260\" y1=\"48\" x2=\"290\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"300\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"350\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Add if no cycle</text><text x=\"350\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">DSU Union</text><line x1=\"350\" y1=\"60\" x2=\"350\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">V-1 edges?</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Done!</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kruskal</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sort + DSU</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Prim</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Start + PQ</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cut Property</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Min edge in cut</text><rect x=\"300\" y=\"70\" width=\"130\" height=\"115\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"365\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Minimum Spanning Tree</text><text x=\"365\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Connects all V vertices</text><text x=\"365\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> with V-1 edges. Minimu</text><text x=\"365\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">m total weight.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">MST: Minimum Spanning Tree. Kruskal (DSU) or Prim </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">(PQ). V-1 edges, min weight, no cycles.</text></svg>",
  "codeExamples": [
    {
      "title": "Kruskal\\'s Algorithm",
      "useCase": "DSU-based MST.",
      "code": "function kruskal(vertices, edges) {\n  edges.sort((a, b) => a[2] - b[2]);\n  const uf = new UnionFind(vertices);\n  const mst = []; let cost = 0;\n  for (const [u, v, w] of edges) {\n    if (uf.union(u, v)) { mst.push([u, v, w]); cost += w; if (mst.length === vertices - 1) break; }\n  }\n  return { mst, cost };\n}",
      "description": "Kruskal O(E log E) using DSU."
    },
    {
      "title": "Prim\\'s Algorithm",
      "useCase": "Priority queue based MST.",
      "code": "function prim(graph, start = 0) {\n  const visited = new Set([start]);\n  const pq = new MinHeap();\n  for (const [v, w] of graph[start]) pq.push(w, start, v);\n  const mst = []; let cost = 0;\n  while (pq.heap.length && mst.length < graph.length - 1) {\n    const [w, u, v] = pq.pop(); if (visited.has(v)) continue;\n    visited.add(v); mst.push([u, v, w]); cost += w;\n    for (const [neighbor, nw] of graph[v]) if (!visited.has(neighbor)) pq.push(nw, v, neighbor);\n  }\n  return { mst, cost };\n}",
      "description": "Prim O(E log V) using min-heap."
    },
    {
      "title": "Connecting Cities (LeetCode)",
      "useCase": "MST to connect all points.",
      "code": "function minimumCost(n, connections) {\n  const uf = new UnionFind(n + 1);\n  connections.sort((a, b) => a[2] - b[2]);\n  let cost = 0, edges = 0;\n  for (const [u, v, w] of connections) {\n    if (uf.union(u, v)) { cost += w; edges++; if (edges === n - 1) return cost; }\n  }\n  return -1;\n}",
      "description": "Connect cities with minimum cost using Kruskal."
    },
    {
      "title": "Min Cost to Connect Points (Prim)",
      "useCase": "MST on 2D points.",
      "code": "function minCostConnectPoints(points) {\n  const n = points.length;\n  const visited = new Array(n).fill(false);\n  const minDist = new Array(n).fill(Infinity); minDist[0] = 0;\n  let cost = 0, edges = 0;\n  while (edges < n) {\n    let u = -1;\n    for (let i = 0; i < n; i++) if (!visited[i] && (u === -1 || minDist[i] < minDist[u])) u = i;\n    visited[u] = true; cost += minDist[u]; edges++;\n    for (let v = 0; v < n; v++) if (!visited[v]) { const d = Math.abs(points[u][0]-points[v][0]) + Math.abs(points[u][1]-points[v][1]); if (d < minDist[v]) minDist[v] = d; }\n  }\n  return cost;\n}",
      "description": "MST on points using Prim O(V^2)."
    },
    {
      "title": "Critical Connections (Tarjan)",
      "useCase": "Find bridges in graph.",
      "code": "function criticalConnections(n, connections) {\n  const graph = Array.from({length: n}, () => []);\n  for (const [u, v] of connections) { graph[u].push(v); graph[v].push(u); }\n  const visited = new Array(n).fill(false);\n  const disc = new Array(n).fill(0);\n  const low = new Array(n).fill(0);\n  const result = []; let time = 0;\n  function dfs(u, parent) { visited[u] = true; disc[u] = low[u] = ++time;\n    for (const v of graph[u]) {\n      if (v === parent) continue;\n      if (!visited[v]) { dfs(v, u); low[u] = Math.min(low[u], low[v]); if (low[v] > disc[u]) result.push([u, v]); }\n      else low[u] = Math.min(low[u], disc[v]);\n    }\n  }\n  for (let i = 0; i < n; i++) if (!visited[i]) dfs(i, -1);\n  return result;\n}",
      "description": "Find bridges (Tarjan algorithm) O(V+E)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "How many edges in MST?",
      "options": [
        "V",
        "V-1",
        "V+1",
        "E"
      ],
      "answer": 1,
      "explanation": "V-1 edges."
    },
    {
      "question": "What data structure for Kruskal?",
      "options": [
        "Queue",
        "Stack",
        "DSU (Union-Find)",
        "Hash set"
      ],
      "answer": 2,
      "explanation": "DSU for cycle detection."
    },
    {
      "question": "Kruskal time complexity?",
      "options": [
        "O(V+E)",
        "O(E log E)",
        "O(V^2)",
        "O(E*V)"
      ],
      "answer": 1,
      "explanation": "O(E log E) for sorting."
    },
    {
      "question": "Prim time complexity with heap?",
      "options": [
        "O(V+E)",
        "O(E log V)",
        "O(V^2)",
        "O(E log E)"
      ],
      "answer": 1,
      "explanation": "O(E log V) with binary heap."
    },
    {
      "question": "What property says min edge in cut is in MST?",
      "options": [
        "Cycle property",
        "Cut property",
        "Path property",
        "Edge property"
      ],
      "answer": 1,
      "explanation": "Cut property."
    },
    {
      "question": "When is MST unique?",
      "options": [
        "Always unique",
        "When weights are distinct",
        "Never unique",
        "For complete graphs"
      ],
      "answer": 1,
      "explanation": "Unique when all edge weights are distinct."
    }
  ]
};
