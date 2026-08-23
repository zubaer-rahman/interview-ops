export const dsa_string_matching = {
  "id": "dsa-string-matching",
  "title": "String Matching",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "String matching algorithms find occurrences of a pattern string within a text string efficiently.",
    "Naive: O(n*m) — simple but slow for large inputs. KMP: O(n+m) — uses prefix function to avoid re-scanning.",
    "Rabin-Karp: O(n+m) average, O(n*m) worst — uses rolling hash for efficient comparison.",
    "Boyer-Moore: O(n*m) worst, sublinear average — skips sections using bad character and good suffix rules."
  ],
  "laymanDefinition": "String matching is like searching for a word in a book. You want to find every page where a specific word appears. Naive approach checks every word position. KMP is smarter: when a mismatch occurs, it uses knowledge of the pattern to skip ahead, like knowing that \"ab\" in \"abc\" means you don't need to re-check \"ab\".",
  "deepDive": [
    {
      "heading": "KMP (Knuth-Morris-Pratt)",
      "text": "Preprocess pattern to create LPS (Longest Prefix Suffix) array. LPS[i] = length of longest proper prefix matching suffix for pattern[0..i]. When mismatch occurs, shift pattern by i - LPS[i-1] characters. Never backtrack text pointer. O(n+m) guaranteed."
    },
    {
      "heading": "Rabin-Karp",
      "text": "Compute hash of pattern and hash of each window of text. If hashes match, verify character by character. Rolling hash: subtract leftmost char, add rightmost char in O(1). Good for multiple pattern search. Worst-case O(n*m) when many hash collisions."
    },
    {
      "heading": "Boyer-Moore",
      "text": "Compare pattern from rightmost character. Bad character rule: shift right until mismatch aligns with same char in pattern. Good suffix rule: shift right until matched suffix appears again. Sublinear average case. Used in GNU grep."
    },
    {
      "heading": "Applications",
      "text": "Text editors (Ctrl+F). DNA sequence matching. Plagiarism detection. Intrusion detection systems. Web search. diff/patch tools. Version control (git diff)."
    }
  ],
  "interviewAnswer": "String matching finds pattern occurrences in text. Naive O(n*m). KMP O(n+m) with LPS array. Rabin-Karp uses rolling hash. Boyer-Moore sublinear average. KMP is the most interview-relevant. Know how LPS array is computed and used.",
  "interviewQuestions": [
    {
      "question": "What is string matching?",
      "answer": "Finding occurrences of a pattern string within a text string."
    },
    {
      "question": "What is naive string matching complexity?",
      "answer": "O(n*m) where n is text length, m is pattern length."
    },
    {
      "question": "What is KMP complexity?",
      "answer": "O(n+m) — linear in both text and pattern length."
    },
    {
      "question": "What does LPS array store?",
      "answer": "Length of longest proper prefix of pattern[0..i] that is also a suffix."
    },
    {
      "question": "What is the key insight of KMP?",
      "answer": "Use matching information from previous comparisons to skip ahead."
    },
    {
      "question": "What does Rabin-Karp use?",
      "answer": "Rolling hash for efficient O(1) sliding window comparison."
    },
    {
      "question": "What is the worst-case of Rabin-Karp?",
      "answer": "O(n*m) when many hash collisions occur."
    },
    {
      "question": "What is the average case of Rabin-Karp?",
      "answer": "O(n+m)."
    },
    {
      "question": "Which algorithm is best in practice?",
      "answer": "Boyer-Moore has sublinear average case. Used in GNU grep."
    },
    {
      "question": "What is rolling hash?",
      "answer": "Hash that can be computed from previous hash in O(1) by removing left char and adding right char."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">String Matching</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pattern</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">abcab</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">LPS Array</text><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">[0,0,0,1,2]</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Text</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">abcabcab</text><line x1=\"120\" y1=\"83\" x2=\"150\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"210\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Match?</text><text x=\"210\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Yes/No</text><rect x=\"10\" y=\"105\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mismatch</text><text x=\"65\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Shift by LPS</text><rect x=\"10\" y=\"135\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">KMP</text><text x=\"65\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(n+m)</text><rect x=\"130\" y=\"135\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"185\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rabin-Karp</text><text x=\"185\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rolling Hash</text><rect x=\"280\" y=\"35\" width=\"160\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"360\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">String Matching</text><text x=\"360\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">KMP (LPS), Rabin-Karp (hash),</text><text x=\"360\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Boyer-Moore (skip rules). O(</text><text x=\"360\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n+m).</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">String Matching: KMP O(n+m) with LPS array. Rabin-</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Karp with rolling hash. Boyer-Moore sublinear.</text></svg>",
  "codeExamples": [
    {
      "title": "Naive String Matching",
      "useCase": "Brute force approach.",
      "code": "function naiveSearch(text, pattern) {\n  const result = [];\n  for (let i = 0; i <= text.length - pattern.length; i++) {\n    let match = true;\n    for (let j = 0; j < pattern.length; j++)\n      if (text[i + j] !== pattern[j]) { match = false; break; }\n    if (match) result.push(i);\n  }\n  return result;\n}",
      "description": "Naive O(n*m)."
    },
    {
      "title": "KMP Algorithm",
      "useCase": "Linear time string matching.",
      "code": "function kmp(text, pattern) {\n  function buildLPS(p) {\n    const lps = new Array(p.length).fill(0);\n    let len = 0, i = 1;\n    while (i < p.length) {\n      if (p[i] === p[len]) { len++; lps[i] = len; i++; }\n      else if (len > 0) len = lps[len - 1];\n      else { lps[i] = 0; i++; }\n    }\n    return lps;\n  }\n  const lps = buildLPS(pattern);\n  const result = [];\n  let i = 0, j = 0;\n  while (i < text.length) {\n    if (text[i] === pattern[j]) { i++; j++; }\n    if (j === pattern.length) { result.push(i - j); j = lps[j - 1]; }\n    else if (i < text.length && text[i] !== pattern[j]) {\n      if (j !== 0) j = lps[j - 1]; else i++;\n    }\n  }\n  return result;\n}",
      "description": "KMP O(n+m)."
    },
    {
      "title": "Rabin-Karp",
      "useCase": "Rolling hash string matching.",
      "code": "function rabinKarp(text, pattern) {\n  const base = 256, mod = 101;\n  const n = text.length, m = pattern.length;\n  let pHash = 0, tHash = 0, h = 1;\n  for (let i = 0; i < m - 1; i++) h = (h * base) % mod;\n  for (let i = 0; i < m; i++) { pHash = (pHash * base + pattern.charCodeAt(i)) % mod; tHash = (tHash * base + text.charCodeAt(i)) % mod; }\n  const result = [];\n  for (let i = 0; i <= n - m; i++) {\n    if (pHash === tHash && text.slice(i, i + m) === pattern) result.push(i);\n    if (i < n - m) { tHash = (base * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % mod; if (tHash < 0) tHash += mod; }\n  }\n  return result;\n}",
      "description": "Rabin-Karp O(n+m) average, O(n*m) worst."
    },
    {
      "title": "Longest Palindromic Substring",
      "useCase": "Expand around center.",
      "code": "function longestPalindrome(s) {\n  if (!s || s.length < 2) return s;\n  let start = 0, maxLen = 1;\n  function expand(l, r) { while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; } return [l + 1, r - l - 1]; }\n  for (let i = 0; i < s.length; i++) {\n    const [l1, len1] = expand(i, i); const [l2, len2] = expand(i, i + 1);\n    if (len1 > maxLen) { start = l1; maxLen = len1; }\n    if (len2 > maxLen) { start = l2; maxLen = len2; }\n  }\n  return s.slice(start, start + maxLen);\n}",
      "description": "Expand around center O(n^2)."
    },
    {
      "title": "Word Break (DP)",
      "useCase": "Check if string can be segmented.",
      "code": "function wordBreak(s, wordDict) {\n  const set = new Set(wordDict);\n  const dp = new Array(s.length + 1).fill(false); dp[0] = true;\n  for (let i = 1; i <= s.length; i++)\n    for (let j = 0; j < i; j++)\n      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }\n  return dp[s.length];\n}",
      "description": "Word break DP O(n^2)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "KMP time complexity?",
      "options": [
        "O(n*m)",
        "O(n+m)",
        "O(n log m)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "O(n+m) linear."
    },
    {
      "question": "What does LPS stand for?",
      "options": [
        "Longest Pattern String",
        "Longest Prefix Suffix",
        "Linear Pattern Search",
        "Lowest Possible Shift"
      ],
      "answer": 1,
      "explanation": "Longest Prefix Suffix."
    },
    {
      "question": "Rabin-Karp uses what technique?",
      "options": [
        "Prefix sums",
        "Rolling hash",
        "Binary search",
        "Dynamic programming"
      ],
      "answer": 1,
      "explanation": "Rolling hash for O(1) window update."
    },
    {
      "question": "Boyer-Moore compares from which side?",
      "options": [
        "Left",
        "Right",
        "Middle",
        "Random"
      ],
      "answer": 1,
      "explanation": "Compares from rightmost character."
    },
    {
      "question": "What is the worst case for Rabin-Karp?",
      "options": [
        "O(n+m)",
        "O(n*m)",
        "O(n^2)",
        "O(m log n)"
      ],
      "answer": 1,
      "explanation": "O(n*m) with many hash collisions."
    },
    {
      "question": "What is the best average case algorithm?",
      "options": [
        "Naive",
        "KMP",
        "Boyer-Moore",
        "Rabin-Karp"
      ],
      "answer": 2,
      "explanation": "Boyer-Moore has sublinear average case."
    }
  ]
};
