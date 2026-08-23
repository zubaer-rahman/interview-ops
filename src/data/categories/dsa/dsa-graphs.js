export const dsa_graphs = {
  "id": "dsa-graphs",
  "title": "Graphs",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "A graph is a collection of vertices (nodes) connected by edges. G = (V, E).",
    "Directed vs undirected, weighted vs unweighted, cyclic vs acyclic.",
    "Representations: adjacency matrix (V^2 space), adjacency list (V+E space, preferred for sparse graphs).",
    "Graphs model real-world networks: social networks, maps, internet routing, dependency resolution."
  ],
  "laymanDefinition": "A graph is like a city map. Intersections are vertices (nodes). Roads are edges (connections). Some roads are one-way (directed). Some roads have tolls (weighted). You want to find the shortest route from your home to the airport.",
  "deepDive": [
    {
      "heading": "Graph Representations",
      "text": "Adjacency Matrix: V x V boolean matrix. O(V^2) space. O(1) edge lookup. Adjacency List: array of lists. O(V+E) space. Good for sparse graphs. Edge List: list of (u,v,w) tuples."
    },
    {
      "heading": "Directed vs Undirected",
      "text": "Undirected: edges have no direction (friend connections). Directed (digraph): edges have direction (Twitter follow). Undirected edges are bidirectional."
    },
    {
      "heading": "Graph Terminology",
      "text": "Degree: number of edges incident to a vertex. Path: sequence of vertices connected by edges. Cycle: path with same start/end. Connected: path exists between any two vertices."
    },
    {
      "heading": "Common Graph Algorithms",
      "text": "DFS/BFS: traversal, connectivity. Dijkstra: shortest path (non-negative). Bellman-Ford: shortest path (negative). Topological Sort: DAG ordering. Kruskal/Prim: MST."
    }
  ],
  "interviewAnswer": "Graphs model relationships. Choose representation based on density: adjacency list for sparse, matrix for dense. Master BFS (shortest path in unweighted) and DFS (connectivity, cycles). Dijkstra for weighted shortest path.",
  "interviewQuestions": [
    {
      "question": "What is a graph?",
      "answer": "A collection of vertices and edges connecting them. G = (V, E)."
    },
    {
      "question": "Difference between directed and undirected?",
      "answer": "Directed: edges have direction (u->v). Undirected: edges are bidirectional."
    },
    {
      "question": "What are the two main graph representations?",
      "answer": "Adjacency matrix (O(V^2)) and adjacency list (O(V+E))."
    },
    {
      "question": "Which representation for sparse graphs?",
      "answer": "Adjacency list — uses O(V+E) space vs O(V^2) for matrix."
    },
    {
      "question": "What is the degree of a vertex?",
      "answer": "Number of edges incident to the vertex."
    },
    {
      "question": "What is a cycle in a graph?",
      "answer": "A path that starts and ends at the same vertex."
    },
    {
      "question": "What is a connected graph?",
      "answer": "A path exists between every pair of vertices."
    },
    {
      "question": "What algorithm finds shortest path in unweighted graphs?",
      "answer": "BFS (Breadth-First Search) — O(V+E)."
    },
    {
      "question": "Difference between tree and graph?",
      "answer": "A tree is an acyclic connected graph with exactly V-1 edges."
    },
    {
      "question": "What is a DAG?",
      "answer": "Directed Acyclic Graph — used for topological sort and dependency resolution."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Graphs</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Vertex A</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node</text><rect x=\"200\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"250\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Vertex B</text><text x=\"250\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node</text><line x1=\"110\" y1=\"48\" x2=\"200\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Edge</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">A -> B</text><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Weight</text><text x=\"60\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cost</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Adj List</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Map<V, List<E>></text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Adj Matrix</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">V x V bool</text><rect x=\"330\" y=\"35\" width=\"150\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"405\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Graph</text><text x=\"405\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">G = (V, E). Directed/Undire</text><text x=\"405\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">cted. Weighted. Adj list pr</text><text x=\"405\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">eferred.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Graphs: Vertices connected by edges. BFS, DFS, Dij</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">kstra, Topological Sort.</text></svg>",
  "codeExamples": [
    {
      "title": "Adjacency List Graph",
      "useCase": "Graph implementation.",
      "code": "class Graph {\n  constructor() { this.adjList = new Map(); }\n  addVertex(v) { if (!this.adjList.has(v)) this.adjList.set(v, []); }\n  addEdge(u, v, weight = 1) { this.addVertex(u); this.addVertex(v); this.adjList.get(u).push({node:v, weight}); }\n  getNeighbors(v) { return this.adjList.get(v) || []; }\n}",
      "description": "Adjacency list graph representation O(V+E)."
    },
    {
      "title": "DFS Traversal (Graph)",
      "useCase": "Recursive DFS.",
      "code": "function dfs(graph, start) {\n  const visited = new Set(); const result = [];\n  function explore(v) { visited.add(v); result.push(v);\n    for (const {node} of graph.getNeighbors(v)) if (!visited.has(node)) explore(node); }\n  explore(start); return result;\n}",
      "description": "DFS traversal using recursion O(V+E)."
    },
    {
      "title": "BFS Traversal (Graph)",
      "useCase": "Queue-based BFS.",
      "code": "function bfs(graph, start) {\n  const visited = new Set([start]); const q = [start], result = [];\n  while (q.length) {\n    const v = q.shift(); result.push(v);\n    for (const {node} of graph.getNeighbors(v)) if (!visited.has(node)) { visited.add(node); q.push(node); }\n  }\n  return result;\n}",
      "description": "BFS traversal using queue O(V+E)."
    },
    {
      "title": "Detect Cycle (Directed)",
      "useCase": "DFS with recursion stack.",
      "code": "function hasCycle(graph) {\n  const visited = new Set(), recStack = new Set();\n  function dfs(v) { visited.add(v); recStack.add(v);\n    for (const {node} of graph.getNeighbors(v)) {\n      if (!visited.has(node)) { if (dfs(node)) return true; }\n      else if (recStack.has(node)) return true;\n    }\n    recStack.delete(v); return false;\n  }\n  for (const v of graph.adjList.keys()) if (!visited.has(v) && dfs(v)) return true;\n  return false;\n}",
      "description": "Cycle detection using DFS with recursion stack."
    },
    {
      "title": "Clone Graph",
      "useCase": "Deep copy of graph.",
      "code": "function cloneGraph(node, map = new Map()) {\n  if (!node) return null;\n  if (map.has(node.val)) return map.get(node.val);\n  const copy = new Node(node.val); map.set(node.val, copy);\n  for (const neighbor of node.neighbors) copy.neighbors.push(cloneGraph(neighbor, map));\n  return copy;\n}",
      "description": "DFS clone graph using hash map for visited tracking."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Space of adjacency matrix?",
      "options": [
        "O(V+E)",
        "O(V^2)",
        "O(E)",
        "O(V)"
      ],
      "answer": 1,
      "explanation": "Adjacency matrix: O(V^2)."
    },
    {
      "question": "What is degree of vertex?",
      "options": [
        "Number of edges",
        "Number of neighbors",
        "Number of paths",
        "Number of cycles"
      ],
      "answer": 0,
      "explanation": "Degree = edges incident to vertex."
    },
    {
      "question": "Which representation for sparse graph?",
      "options": [
        "Adjacency matrix",
        "Adjacency list",
        "Edge list",
        "Incidence matrix"
      ],
      "answer": 1,
      "explanation": "Adjacency list: O(V+E)."
    },
    {
      "question": "What finds shortest path in unweighted graph?",
      "options": [
        "DFS",
        "BFS",
        "Dijkstra",
        "Bellman-Ford"
      ],
      "answer": 1,
      "explanation": "BFS finds shortest path."
    },
    {
      "question": "What is a DAG?",
      "options": [
        "Directed Acyclic Graph",
        "Dynamic Algorithmic Graph",
        "Dense Aggregate Graph",
        "Direct Access Graph"
      ],
      "answer": 0,
      "explanation": "Directed Acyclic Graph."
    },
    {
      "question": "Which algorithm handles negative edges?",
      "options": [
        "Dijkstra",
        "Bellman-Ford",
        "BFS",
        "DFS"
      ],
      "answer": 1,
      "explanation": "Bellman-Ford handles negative edges."
    }
  ]
};
