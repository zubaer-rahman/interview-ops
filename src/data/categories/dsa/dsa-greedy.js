export const dsa_greedy = {
  "id": "dsa-greedy",
  "title": "Greedy Algorithms",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Greedy algorithms make the locally optimal choice at each step, hoping to find the global optimum.",
    "Not all problems can be solved greedily — the problem must have the greedy choice property and optimal substructure.",
    "Greedy does not have overlapping subproblems (unlike DP). It makes one pass, never revisits decisions.",
    "Classic greedy problems: Fractional Knapsack, Activity Selection, Huffman Coding, Dijkstra's algorithm."
  ],
  "laymanDefinition": "A greedy algorithm is like a hiker who always takes the steepest path up the mountain. At each step, they choose what looks best right now without considering future consequences. Sometimes this reaches the peak (global optimum), sometimes it gets stuck on a smaller hill (local optimum).",
  "deepDive": [
    {
      "heading": "Greedy Choice Property",
      "text": "A globally optimal solution can be arrived at by making a locally optimal (greedy) choice. You never need to reconsider previous choices. Proof technique: exchange argument — show any optimal solution can be transformed to the greedy one without worsening."
    },
    {
      "heading": "Greedy vs DP",
      "text": "Greedy: one pass, no subproblem overlap, makes decision once, faster O(n log n) typically. DP: considers all options, overlapping subproblems, may revisit decisions, O(n^2) or more. If greedy works, it is almost always the better choice."
    },
    {
      "heading": "Interval Scheduling (Activity Selection)",
      "text": "Given start/end times, select maximum non-overlapping activities. Greedy: sort by end time, always pick the activity with earliest finish that doesn\\'t conflict. Optimal because picking earlier finish leaves more room for others."
    },
    {
      "heading": "Applications",
      "text": "Activity selection, Fractional knapsack, Huffman coding, Dijkstra, Prim\\'s MST, Kruskal\\'s MST, Coin change (canonical systems), Job sequencing with deadlines, Minimum spanning tree."
    }
  ],
  "interviewAnswer": "Greedy algorithms are simple and efficient when applicable. The key is proving the greedy choice property. Use greedy when making the locally best choice leads to the global optimum. Check exchange argument. When unsure, DP is safer but slower.",
  "interviewQuestions": [
    {
      "question": "What is a greedy algorithm?",
      "answer": "Makes the locally optimal choice at each step, hoping to find the global optimum."
    },
    {
      "question": "What is the greedy choice property?",
      "answer": "A global optimum can be reached by making locally optimal choices at each step."
    },
    {
      "question": "What is the difference between greedy and DP?",
      "answer": "Greedy: one pass, no reconsideration. DP: considers all options, revisits decisions."
    },
    {
      "question": "When does greedy fail?",
      "answer": "When a locally optimal choice does not lead to a globally optimal solution."
    },
    {
      "question": "What is the classic activity selection greedy?",
      "answer": "Sort by end time, pick non-conflicting activities with earliest finish."
    },
    {
      "question": "What is Fractional Knapsack?",
      "answer": "Items can be divided. Greedy: take highest value/weight ratio first. O(n log n)."
    },
    {
      "question": "What algorithm uses greedy for compression?",
      "answer": "Huffman coding — merges lowest frequency characters first."
    },
    {
      "question": "What is Dijkstra\\'s algorithm?",
      "answer": "Greedy shortest path — always visit the closest unvisited vertex."
    },
    {
      "question": "What is Prim\\'s algorithm?",
      "answer": "Greedy MST — adds the cheapest edge connecting visited to unvisited."
    },
    {
      "question": "What is an exchange argument?",
      "answer": "Proof technique showing any optimal solution can be transformed to the greedy one."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Greedy Algorithms</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Items</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Sorted by value</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Pick Best</text><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Local choice</text><line x1=\"260\" y1=\"48\" x2=\"290\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"300\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"350\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Next Best</text><text x=\"350\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Keep going</text><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">DP vs Greedy</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Greedy: one pass</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Exchange Arg</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Proof technique</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Optimal?</text><text x=\"65\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">If true, greedy work</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Fallback: DP</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">If greedy fails</text><rect x=\"300\" y=\"70\" width=\"140\" height=\"115\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"370\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Greedy Algorithm</text><text x=\"370\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Local optimum -> global o</text><text x=\"370\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ptimum. Fast O(n log n). </text><text x=\"370\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Exchange argument proof.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Greedy: Locally optimal choices. Activity selectio</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">n, Huffman, Dijkstra.</text></svg>",
  "codeExamples": [
    {
      "title": "Activity Selection",
      "useCase": "Maximum non-overlapping activities.",
      "code": "function activitySelection(activities) {\n  activities.sort((a, b) => a.end - b.end);\n  const selected = [activities[0]];\n  let lastEnd = activities[0].end;\n  for (let i = 1; i < activities.length; i++) {\n    if (activities[i].start >= lastEnd) { selected.push(activities[i]); lastEnd = activities[i].end; }\n  }\n  return selected;\n}",
      "description": "Activity selection O(n log n) greedy by end time."
    },
    {
      "title": "Fractional Knapsack",
      "useCase": "Take highest value/weight ratio.",
      "code": "function fractionalKnapsack(items, capacity) {\n  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));\n  let total = 0;\n  for (const item of items) {\n    if (capacity >= item.weight) { total += item.value; capacity -= item.weight; }\n    else { total += (capacity / item.weight) * item.value; break; }\n  }\n  return total;\n}",
      "description": "Fractional knapsack O(n log n)."
    },
    {
      "title": "Jump Game",
      "useCase": "Can you reach the end?",
      "code": "function canJump(nums) {\n  let maxReach = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n  }\n  return true;\n}",
      "description": "Jump game greedy O(n)."
    },
    {
      "title": "Minimum Coins (Canonical)",
      "useCase": "Greedy coin change.",
      "code": "function minCoins(coins, amount) {\n  coins.sort((a, b) => b - a);\n  let count = 0;\n  for (const coin of coins) {\n    if (amount >= coin) { count += Math.floor(amount / coin); amount %= coin; }\n  }\n  return amount === 0 ? count : -1;\n}",
      "description": "Greedy coin change for canonical systems (US coins)."
    },
    {
      "title": "Gas Station",
      "useCase": "Circular gas station tour.",
      "code": "function canCompleteCircuit(gas, cost) {\n  let total = 0, curr = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    total += gas[i] - cost[i]; curr += gas[i] - cost[i];\n    if (curr < 0) { start = i + 1; curr = 0; }\n  }\n  return total >= 0 ? start : -1;\n}",
      "description": "Gas station greedy O(n)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is a greedy algorithm?",
      "options": [
        "Local optimal choice",
        "Global search",
        "Random decision",
        "Brute force"
      ],
      "answer": 0,
      "explanation": "Local optimal choice at each step."
    },
    {
      "question": "Greedy vs DP?",
      "options": [
        "Greedy one pass, DP explores all",
        "Same",
        "Greedy slower",
        "DP one pass"
      ],
      "answer": 0,
      "explanation": "Greedy: one pass no reconsideration. DP: explores all."
    },
    {
      "question": "What sorts activities for greedy?",
      "options": [
        "Start time",
        "End time",
        "Duration",
        "Name"
      ],
      "answer": 1,
      "explanation": "Sort by end time for activity selection."
    },
    {
      "question": "What is Fractional Knapsack greedy?",
      "options": [
        "Highest weight first",
        "Highest value/weight ratio first",
        "Lowest weight first",
        "Random"
      ],
      "answer": 1,
      "explanation": "Highest value/weight ratio first."
    },
    {
      "question": "When does greedy fail?",
      "options": [
        "Always works",
        "When local -> global not guaranteed",
        "Only for small inputs",
        "Never fails"
      ],
      "answer": 1,
      "explanation": "Fails when local optimum does not lead to global optimum."
    },
    {
      "question": "Proof technique for greedy?",
      "options": [
        "Induction",
        "Exchange argument",
        "Contradiction",
        "Case analysis"
      ],
      "answer": 1,
      "explanation": "Exchange argument shows any optimal can be made greedy."
    }
  ]
};
