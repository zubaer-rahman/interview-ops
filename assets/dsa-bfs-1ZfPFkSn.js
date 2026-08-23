const e={id:"dsa-bfs",title:"BFS (Breadth-First Search)",difficulty:"intermediate",estimatedMinutes:20,tldr:["BFS explores a graph level by level, visiting all neighbors of a node before moving to the next level.","BFS uses a queue data structure (FIFO) to track nodes to visit.","BFS finds the shortest path in unweighted graphs — first time a node is visited is via the shortest path.","Time: O(V+E). Space: O(V) for queue and visited set."],laymanDefinition:"BFS is like a search party spreading out from a starting point. Everyone takes one step outward, then another, then another. The first person to find the target took the shortest route. It is like ripples spreading from a stone dropped in water.",deepDive:[{heading:"BFS Algorithm",text:"Start at root. Add to queue. Mark visited. While queue not empty: dequeue, process, enqueue all unvisited neighbors. Guarantees shortest path in unweighted graphs because all edges have equal weight."},{heading:"BFS vs DFS",text:"BFS: queue, level-order, shortest path, O(V+E) space. DFS: stack, depth-first, not guaranteed shortest, O(V) space. BFS for shortest paths, DFS for topological sort and cycle detection."},{heading:"BFS Applications",text:"Shortest path in unweighted graph. Web crawling. Social network degrees of separation. GPS navigation. Connected components. Level-order tree traversal."},{heading:"BFS Variation: 0-1 BFS",text:"For edge weights 0 or 1, use deque. If weight is 0, push to front. If 1, push to back. Still O(V+E). Multi-source BFS: start from multiple nodes simultaneously."}],interviewAnswer:"BFS is the go-to for shortest path in unweighted graphs and level-order processing. Queue-based, O(V+E). Use when you need the minimum number of steps/edges. BFS on grids (2D arrays) is extremely common in coding interviews.",interviewQuestions:[{question:"What is BFS?",answer:"Breadth-First Search — explores a graph level by level using a queue."},{question:"What data structure does BFS use?",answer:"Queue (FIFO)."},{question:"Time complexity of BFS?",answer:"O(V+E) for graphs, O(n) for trees."},{question:"Space complexity of BFS?",answer:"O(V) — queue can hold up to all vertices at the widest level."},{question:"What does BFS guarantee for unweighted graphs?",answer:"Shortest path in terms of number of edges."},{question:"Difference between BFS and DFS?",answer:"BFS: queue, level-order, shortest path. DFS: stack, depth-first, topological sort."},{question:"What is multi-source BFS?",answer:"BFS starting from multiple initial nodes simultaneously."},{question:"What is 0-1 BFS?",answer:"Variant using deque for edge weights 0 or 1."},{question:"What is the BFS approach for grid shortest path?",answer:"Each cell is a node. Adjacent cells are neighbors. BFS finds minimum steps."},{question:"What problem does BFS solve in social networks?",answer:"Degrees of separation."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">BFS (Breadth-First Search)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Level 0</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Start</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Level 1</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">Neighbors</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Level 2</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Neighbors^2</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Level 3</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Neighbors^3</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="138" x2="150" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="140" height="130" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="230" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">BFS (Broad First)</text><text x="230" y="148" text-anchor="middle" font-size="9" fill="#ddd">Queue-based. Level by lev</text><text x="230" y="159" text-anchor="middle" font-size="9" fill="#ddd">el. Shortest path.</text><text x="240" y="210" font-size="9" fill="#666" text-anchor="middle">BFS: Breadth-First Search. Queue-based level-order</text><text x="240" y="222" font-size="9" fill="#666" text-anchor="middle"> traversal. Shortest path in unweighted graphs.</text></svg>',codeExamples:[{title:"BFS on Graph",useCase:"Iterative BFS using queue.",code:`function bfs(graph, start) {
  const visited = new Set([start]); const q = [start], result = [];
  while (q.length) {
    const v = q.shift(); result.push(v);
    for (const neighbor of graph.get(v) || [])
      if (!visited.has(neighbor)) { visited.add(neighbor); q.push(neighbor); }
  }
  return result;
}`,description:"Standard BFS O(V+E)."},{title:"Shortest Path in Binary Matrix",useCase:"BFS on grid.",code:`function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] === 1) return -1; const n = grid.length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
  const q = [[0,0,1]]; grid[0][0] = 1;
  while (q.length) {
    const [r, c, dist] = q.shift();
    if (r === n-1 && c === n-1) return dist;
    for (const [dr, dc] of dirs) { const nr = r+dr, nc = c+dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0) { grid[nr][nc] = 1; q.push([nr, nc, dist+1]); }
    }
  }
  return -1;
}`,description:"Shortest path in binary matrix BFS O(n^2)."},{title:"Word Ladder",useCase:"BFS transforming words.",code:`function ladderLength(beginWord, endWord, wordList) {
  const set = new Set(wordList); if (!set.has(endWord)) return 0;
  const q = [[beginWord, 1]];
  while (q.length) {
    const [word, level] = q.shift(); if (word === endWord) return level;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
        if (set.has(next)) { set.delete(next); q.push([next, level+1]); }
      }
    }
  }
  return 0;
}`,description:"Word ladder BFS O(n * l * 26)."},{title:"Rotting Oranges",useCase:"Multi-source BFS.",code:`function orangesRotting(grid) {
  const q = []; let fresh = 0, minutes = 0;
  const rows = grid.length, cols = grid[0].length;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    if (grid[r][c] === 1) fresh++; else if (grid[r][c] === 2) q.push([r,c,0]); }
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (q.length) {
    const [r, c, m] = q.shift(); minutes = Math.max(minutes, m);
    for (const [dr, dc] of dirs) { const nr = r+dr, nc = c+dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) { grid[nr][nc] = 2; fresh--; q.push([nr, nc, m+1]); }
    }
  }
  return fresh === 0 ? minutes : -1;
}`,description:"Rotting oranges — multi-source BFS."}],mcqQuestions:[{question:"What data structure does BFS use?",options:["Stack","Queue","Priority queue","Hash set"],answer:1,explanation:"BFS uses a queue."},{question:"BFS time complexity?",options:["O(V+E)","O(V)","O(E)","O(log V)"],answer:0,explanation:"BFS: O(V+E) for graphs."},{question:"What does BFS guarantee in unweighted graphs?",options:["Shortest path","Minimum spanning tree","Topological order","Maximum flow"],answer:0,explanation:"BFS guarantees shortest path."},{question:"BFS space complexity?",options:["O(1)","O(V)","O(log V)","O(V^2)"],answer:1,explanation:"BFS: O(V) for queue."},{question:"Difference between BFS and DFS?",options:["BFS stack, DFS queue","BFS queue, DFS stack","Same","Both queue"],answer:1,explanation:"BFS = queue, DFS = stack."},{question:"What is multi-source BFS?",options:["Multiple parents","Multiple starting points","Multiple graphs","Parallel BFS"],answer:1,explanation:"Multi-source BFS starts from multiple nodes."}]};export{e as dsa_bfs};
