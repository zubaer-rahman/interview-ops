export const dsa_trie = {
  "id": "dsa-trie",
  "title": "Trie (Prefix Tree)",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "A Trie is a tree-like data structure for storing strings, where each node represents a character prefix.",
    "Root is empty. Each path from root to a node spells out a string. Nodes mark if they represent the end of a word.",
    "Insert: O(L). Search: O(L). StartsWith (prefix search): O(L). Where L is the length of the word.",
    "Space: O(total characters stored) \\u2014 shared prefixes save significant space for related strings."
  ],
  "laymanDefinition": "A Trie is like a phone directory where names are organized by letter sequences. To find \"Bob\", you go to the B shelf, then BO, then BOB. All names starting with BO are in one place. This is much faster than scanning every name for finding prefixes.",
  "deepDive": [
    {
      "heading": "Trie Node Structure",
      "text": "Each node has: children (map of char -> node), isEndOfWord flag. Usually contains 26 or 256 child pointers (for lowercase or ASCII). Space optimized with hash map for sparse character sets."
    },
    {
      "heading": "Operations",
      "text": "Insert: traverse/create nodes for each character, mark last node as end. Search: traverse nodes for each character, check isEndOfWord at last node. StartsWith: traverse, return true if path exists (end flag not needed)."
    },
    {
      "heading": "Trie Variations",
      "text": "Compressed Trie (Radix Tree): merges single-child nodes. Suffix Tree: stores all suffixes. Ternary Search Tree: three-way branching (less memory). Bitwise Trie (for IP routing). Patricia Trie: compact prefix tree."
    },
    {
      "heading": "Applications",
      "text": "Autocomplete/search suggestions. Spell checker. IP routing (longest prefix match). Word games (Boggle solver). Prefix-based search. Dictionary implementation. T9 predictive text."
    }
  ],
  "interviewAnswer": "Trie is the optimal structure for prefix-based string operations. All operations are O(L) \\u2014 independent of the number of stored words. Use for autocomplete, spell check, and any problem involving string prefixes. The space cost is significant for large alphabets.",
  "interviewQuestions": [
    {
      "question": "What is a Trie?",
      "answer": "A tree data structure for storing strings where nodes represent character prefixes."
    },
    {
      "question": "What are the time complexities?",
      "answer": "Insert: O(L), Search: O(L), StartsWith: O(L) \\u2014 L = word length."
    },
    {
      "question": "What is stored in each node?",
      "answer": "Children map/array and a boolean flag (isEndOfWord)."
    },
    {
      "question": "What is the space complexity?",
      "answer": "O(total characters stored) \\u2014 shared prefixes save space."
    },
    {
      "question": "What is Trie vs Hash Set?",
      "answer": "Trie: prefix search, O(L), more memory. Hash Set: O(1) exact match, no prefix search."
    },
    {
      "question": "What is a compressed Trie?",
      "answer": "Radix tree \\u2014 merges nodes with single child for memory efficiency."
    },
    {
      "question": "What is a suffix tree?",
      "answer": "A Trie storing all suffixes of a string \\u2014 powerful for substring search."
    },
    {
      "question": "What problem does autocomplete solve?",
      "answer": "Prefix search (StartsWith) + DFS to find all words with a prefix."
    },
    {
      "question": "What a Trie node typically contains?",
      "answer": "An array of 26 (for lowercase letters) or a hash map for children."
    },
    {
      "question": "What is a Ternary Search Tree?",
      "answer": "Three-way branching Trie variant using less memory than 26-way array."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Trie (Prefix Tree)</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Root</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Empty</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"55\" x2=\"140\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"70\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"195\" y=\"53\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">c</text><rect x=\"235\" y=\"35\" width=\"70\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"270\" y=\"53\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">a</text><line x1=\"230\" y1=\"48\" x2=\"235\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"230\" y1=\"55\" x2=\"250\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"65\" width=\"70\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"195\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">a</text><text x=\"195\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">end</text><rect x=\"235\" y=\"65\" width=\"70\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"270\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">t</text><text x=\"270\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">end</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Insert \"cat\"</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">c->a->t</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Search \"cat\"</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">c->a->t found</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Prefix \"ca\"</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">c->a found</text><rect x=\"330\" y=\"35\" width=\"155\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"407.5\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Trie (Prefix Tree)</text><text x=\"407.5\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(L) insert/search/prefix. S</text><text x=\"407.5\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">hared prefixes save space. A</text><text x=\"407.5\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">utocomplete, spell check.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Trie: Prefix tree. O(L) operations. Autocomplete, </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">spell check, prefix search.</text></svg>",
  "codeExamples": [
    {
      "title": "Trie Implementation",
      "useCase": "Basic trie with hash map children.",
      "code": "class TrieNode { constructor() { this.children = new Map(); this.isEnd = false; } }\nclass Trie {\n  constructor() { this.root = new TrieNode(); }\n  insert(word) {\n    let node = this.root;\n    for (const c of word) { if (!node.children.has(c)) node.children.set(c, new TrieNode()); node = node.children.get(c); }\n    node.isEnd = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const c of word) { if (!node.children.has(c)) return false; node = node.children.get(c); }\n    return node.isEnd;\n  }\n  startsWith(prefix) {\n    let node = this.root;\n    for (const c of prefix) { if (!node.children.has(c)) return false; node = node.children.get(c); }\n    return true;\n  }\n}",
      "description": "Full Trie with insert, search, startsWith."
    },
    {
      "title": "Word Search II (Trie + DFS)",
      "useCase": "Find words on a board.",
      "code": "function findWords(board, words) {\n  const trie = new Trie(); for (const w of words) trie.insert(w);\n  const result = new Set(), rows = board.length, cols = board[0].length;\n  function dfs(r, c, node, path) {\n    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === \"#\") return;\n    const ch = board[r][c];\n    if (!node.children.has(ch)) return;\n    node = node.children.get(ch); path += ch;\n    if (node.isEnd) result.add(path);\n    board[r][c] = \"#\";\n    dfs(r+1,c,node,path); dfs(r-1,c,node,path); dfs(r,c+1,node,path); dfs(r,c-1,node,path);\n    board[r][c] = ch;\n  }\n  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dfs(r, c, trie.root, \"\");\n  return Array.from(result);\n}",
      "description": "Word search using Trie for efficient prefix checking."
    },
    {
      "title": "Prefix Matching (Autocomplete)",
      "useCase": "Find words with prefix.",
      "code": "function autocomplete(trie, prefix) {\n  let node = trie.root;\n  for (const c of prefix) { if (!node.children.has(c)) return []; node = node.children.get(c); }\n  const results = [];\n  function dfs(n, path) {\n    if (n.isEnd) results.push(path);\n    for (const [ch, child] of n.children) dfs(child, path + ch);\n  }\n  dfs(node, prefix); return results;\n}",
      "description": "DFS from prefix node to collect all words."
    },
    {
      "title": "Longest Common Prefix",
      "useCase": "Using Trie for LCP.",
      "code": "function longestCommonPrefix(strs) {\n  if (!strs.length) return \"\";\n  const trie = new Trie();\n  for (const s of strs) trie.insert(s);\n  let node = trie.root, prefix = \"\";\n  while (node.children.size === 1 && !node.isEnd) {\n    const [ch] = node.children.keys(); prefix += ch;\n    node = node.children.get(ch);\n  }\n  return prefix;\n}",
      "description": "Longest common prefix using Trie walk."
    },
    {
      "title": "Array-Based Trie (26 slots)",
      "useCase": "Faster array-based Trie.",
      "code": "class ArrayTrieNode { constructor() { this.children = new Array(26).fill(null); this.isEnd = false; } }\nclass ArrayTrie {\n  constructor() { this.root = new ArrayTrieNode(); }\n  _idx(c) { return c.charCodeAt(0) - 97; }\n  insert(word) {\n    let node = this.root;\n    for (const c of word) { const i = this._idx(c); if (!node.children[i]) node.children[i] = new ArrayTrieNode(); node = node.children[i]; }\n    node.isEnd = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const c of word) { const i = this._idx(c); if (!node.children[i]) return false; node = node.children[i]; }\n    return node.isEnd;\n  }\n}",
      "description": "Array-based Trie for lowercase letters (faster than Map)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a Trie?",
      "options": [
        "Prefix tree for strings",
        "Binary search tree",
        "Hash table",
        "Balanced tree"
      ],
      "answer": 0,
      "explanation": "Prefix tree for strings."
    },
    {
      "question": "Time complexity of Trie search?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(L) word length",
        "O(n)"
      ],
      "answer": 2,
      "explanation": "O(L) where L is word length."
    },
    {
      "question": "What does each Trie node contain?",
      "options": [
        "Children + isEnd flag",
        "Value + next",
        "Key + hash",
        "Parent + sibling"
      ],
      "answer": 0,
      "explanation": "Children map/array and isEnd flag."
    },
    {
      "question": "What does isEnd flag indicate?",
      "options": [
        "End of string",
        "Start of string",
        "Leaf node",
        "Root node"
      ],
      "answer": 0,
      "explanation": "End of a valid word."
    },
    {
      "question": "What is Trie vs Hash Set?",
      "options": [
        "Trie supports prefix search",
        "Same",
        "Hash set supports prefix",
        "Trie faster exact match"
      ],
      "answer": 0,
      "explanation": "Trie supports prefix search, hash set does not."
    },
    {
      "question": "What is a compressed Trie called?",
      "options": [
        "Suffix tree",
        "Radix tree",
        "AVL tree",
        "Red-black tree"
      ],
      "answer": 1,
      "explanation": "Radix tree / compressed Trie."
    }
  ]
};
