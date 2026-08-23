const e={id:"dsa-union-find",title:"Union Find (Disjoint Set Union)",difficulty:"advanced",estimatedMinutes:20,tldr:["Union Find (DSU) tracks a partition of elements into disjoint (non-overlapping) sets.","Core operations: Find (determine which set an element belongs to) and Union (merge two sets).","Optimizations: Path compression (flatten tree during find) and Union by rank/size (attach smaller tree under larger).","With both optimizations, operations are nearly O(1) amortized \\u2014 inverse Ackermann function complexity."],laymanDefinition:'Union Find is like managing friend groups at a party. Each person starts alone. When two people become friends, their groups merge (union). To check if two people are in the same group, you ask "who is the group leader?" (find). Path compression means everyone remembers the leader directly.',deepDive:[{heading:"Data Structure",text:"Array of parents: parent[i] = j means i points to j. Root: parent[i] = i. Initially, each element is its own parent (singleton set). Find follows parent pointers until reaching the root."},{heading:"Path Compression",text:"During find, set parent of each visited node directly to the root. Flattens the tree. Makes subsequent finds O(1). Implemented recursively or iteratively. Critical for near-O(1) amortized performance."},{heading:"Union by Rank/Size",text:"Rank: depth of tree. Union attaches shallower tree under deeper tree. Size: number of elements. Union attaches smaller size under larger size. Prevents tall trees. Without this, union could create O(n) chains."},{heading:"Applications",text:"Connected components in graphs. Kruskal\\'s MST algorithm. Number of islands (dynamic). Percolation. Redundant connections. Detecting cycles in undirected graphs. Friend circles / social networks."}],interviewAnswer:"Union Find is the go-to structure for dynamic connectivity problems. Both optimizations (path compression + union by rank) are essential for near-O(1) performance. Master the implementation pattern: parent array with find() and union() methods.",interviewQuestions:[{question:"What is Union Find?",answer:"A data structure tracking disjoint sets, supporting find and union operations."},{question:"What does Find do?",answer:"Returns the representative (root) of the set containing an element."},{question:"What does Union do?",answer:"Merges two sets into one."},{question:"What is path compression?",answer:"During find, point all visited nodes directly to the root."},{question:"What is union by rank?",answer:"Attach the shallower tree under the deeper tree to maintain balance."},{question:"What is the amortized time complexity?",answer:"Inverse Ackermann \\u03b1(n) — effectively O(1) for all practical input sizes."},{question:"What algorithm uses Union Find?",answer:"Kruskal\\'s Minimum Spanning Tree algorithm."},{question:"How is Union Find initialized?",answer:"Each element is its own parent: parent[i] = i."},{question:"What is a use case for Union Find?",answer:"Dynamic connectivity \\u2014 number of connected components as edges are added."},{question:"Can Union Find detect cycles?",answer:"Yes \\u2014 if union finds two elements already in same set, adding edge creates cycle."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Union Find (Disjoint Set Union)</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Init</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Each own parent</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Find(3)</text><text x="65" y="73" text-anchor="middle" font-size="9" fill="#ddd">Follow parent -> roo</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">t</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Path Compress</text><text x="65" y="103" text-anchor="middle" font-size="9" fill="#ddd">Point 3 to root dire</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">ctly</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Union(1,2)</text><text x="65" y="144" text-anchor="middle" font-size="9" fill="#ddd">Merge sets</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">By Rank</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">Shallow under deep</text><rect x="150" y="35" width="140" height="150" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="220" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Union Find</text><text x="220" y="157" text-anchor="middle" font-size="9" fill="#ddd">Disjoint Set Union. Find </text><text x="220" y="168" text-anchor="middle" font-size="9" fill="#ddd">+ Union with optimization</text><text x="220" y="179" text-anchor="middle" font-size="9" fill="#ddd">s. Near O(1).</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Union Find: Disjoint sets. Find + Union. Path comp</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ression + union by rank = near O(1).</text></svg>',codeExamples:[{title:"Union Find Implementation",useCase:"Full DSU with optimizations.",code:`class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    return true;
  }
  connected(x, y) { return this.find(x) === this.find(y); }
}`,description:"Full DSU with path compression and union by rank."},{title:"Number of Connected Components",useCase:"Dynamic connectivity.",code:`function countComponents(n, edges) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) uf.union(u, v);
  const set = new Set();
  for (let i = 0; i < n; i++) set.add(uf.find(i));
  return set.size;
}`,description:"Count connected components O(E * alpha(n))."},{title:"Kruskal MST",useCase:"Minimum spanning tree with DSU.",code:`function kruskalMST(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  let mstWeight = 0, edgesUsed = 0;
  for (const [u, v, w] of edges) {
    if (uf.union(u, v)) { mstWeight += w; edgesUsed++; if (edgesUsed === n-1) break; }
  }
  return mstWeight;
}`,description:"Kruskal MST O(E log E)."},{title:"Redundant Connection",useCase:"Find edge creating cycle.",code:`function findRedundantConnection(edges) {
  const uf = new UnionFind(edges.length);
  for (const [u, v] of edges)
    if (!uf.union(u, v)) return [u, v];
  return [];
}`,description:"First edge connecting already-connected nodes is redundant."},{title:"Number of Islands II",useCase:"Dynamic island counting.",code:`function numIslands2(m, n, positions) {
  const grid = Array.from({length: m}, () => new Array(n).fill(0));
  const uf = new UnionFind(m * n);
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let count = 0, result = [];
  for (const [r, c] of positions) {
    if (grid[r][c] === 1) { result.push(count); continue; }
    grid[r][c] = 1; count++;
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1)
        if (uf.union(r*n + c, nr*n + nc)) count--;
    }
    result.push(count);
  }
  return result;
}`,description:"Dynamic number of islands using DSU."}],mcqQuestions:[{question:"What are the two Union Find operations?",options:["Push and Pop","Find and Union","Add and Remove","Insert and Delete"],answer:1,explanation:"Find and Union."},{question:"What does path compression do?",options:["Merge trees","Flatten tree during find","Increase rank","Sort elements"],answer:1,explanation:"Points all visited nodes to root."},{question:"What does union by rank do?",options:["Flatten tree","Attach shallow under deep","Compress path","Increase size"],answer:1,explanation:"Attaches shallower tree under deeper tree."},{question:"Amortized time complexity?",options:["O(1)","O(log n)","O(n)","\\u03b1(n) inverse Ackermann"],answer:3,explanation:"Inverse Ackermann \\u03b1(n) — effectively near O(1)."},{question:"What algorithm uses DSU?",options:["Dijkstra","Kruskal MST","BFS","DFS"],answer:1,explanation:"Kruskal\\'s algorithm uses DSU."},{question:"How to detect cycle using DSU?",options:["Union returns false","Find returns null","Union throws","Connected returns false"],answer:0,explanation:"If union returns false, elements already connected -> cycle."}]};export{e as dsa_union_find};
