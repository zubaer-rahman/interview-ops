export const dsa_recursion = {
  "id": "dsa-recursion",
  "title": "Recursion",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Recursion is a technique where a function calls itself to solve smaller instances of the same problem.",
    "Every recursive function needs: base case (terminates recursion) and recursive case (calls itself with smaller input).",
    "Recursion uses the call stack — each call pushes a frame. Stack overflow if recursion is too deep.",
    "Recursion is elegant for problems with self-similar structure: trees, divide and conquer, backtracking."
  ],
  "laymanDefinition": "Recursion is like standing between two mirrors — you see infinite reflections of yourself. In programming, a function is recursive when it calls itself. The base case is like a mirror at the end of a hall that does not reflect — it stops the infinite loop.",
  "deepDive": [
    {
      "heading": "Base Case and Recursive Case",
      "text": "Base case: simplest input returning directly. Prevents infinite recursion. Recursive case: function calls itself with modified arguments converging toward base case."
    },
    {
      "heading": "Call Stack Mechanics",
      "text": "Each recursive call pushes a new stack frame. When base case is reached, frames are popped in reverse order (unwinding). Deep recursion can exhaust stack memory."
    },
    {
      "heading": "Recursion vs Iteration",
      "text": "Recursion: elegant, self-documenting. Higher memory (call stack). Risk of stack overflow. Iteration: efficient, lower memory, no stack risk. Choose recursion for trees, D&C, backtracking."
    },
    {
      "heading": "Common Recursion Patterns",
      "text": "Linear: single recursive call (factorial). Binary: two recursive calls (Fibonacci, trees). Divide and Conquer: split, recurse, combine. Tail recursion: last operation is recursive call."
    }
  ],
  "interviewAnswer": "Recursion is a fundamental problem-solving technique. Identify the base case first, then the recursive relation. Trace the call stack for small inputs. Recursion shines for tree traversal, divide and conquer, and backtracking. Be aware of stack limits.",
  "interviewQuestions": [
    {
      "question": "What is recursion?",
      "answer": "A function that calls itself to solve smaller instances of the same problem."
    },
    {
      "question": "What are the two essential parts of recursion?",
      "answer": "Base case (termination) and recursive case (self-call with smaller input)."
    },
    {
      "question": "What happens if there is no base case?",
      "answer": "Infinite recursion leading to stack overflow."
    },
    {
      "question": "What data structure does recursion use implicitly?",
      "answer": "The call stack."
    },
    {
      "question": "What is the difference between recursion and iteration?",
      "answer": "Recursion uses call stack (more memory) but is often more elegant. Iteration uses loops (less memory)."
    },
    {
      "question": "What is tail recursion?",
      "answer": "A recursive call that is the last operation in the function."
    },
    {
      "question": "What is the time complexity of recursive Fibonacci?",
      "answer": "O(2^n) without memoization, O(n) with memoization."
    },
    {
      "question": "What is divide and conquer?",
      "answer": "A recursive pattern: divide problem, recurse on each part, combine results."
    },
    {
      "question": "What is backtracking?",
      "answer": "A recursive technique to explore all possibilities, undoing choices that lead to dead ends."
    },
    {
      "question": "What is mutual recursion?",
      "answer": "Two or more functions calling each other recursively."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Recursion</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Function</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fib(n)</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Calls</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fib(n-1)</text><line x1=\"270\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"365\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Calls</text><text x=\"365\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">fib(n-2)</text><line x1=\"310\" y1=\"60\" x2=\"310\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Base Case</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n <= 1</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stack Frame</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Local vars</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unwind</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Return values</text><rect x=\"300\" y=\"100\" width=\"180\" height=\"85\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Recursion</text><text x=\"390\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Function calls itself. Base case</text><text x=\"390\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> + recursive case.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Recursion: Function calls itself. Base case termin</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ates. Stack-based. Elegant for trees, D&C.</text></svg>",
  "codeExamples": [
    {
      "title": "Factorial (Recursive)",
      "useCase": "Linear recursion.",
      "code": "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
      "description": "Linear recursion O(n) time, O(n) stack space."
    },
    {
      "title": "Fibonacci (Recursive)",
      "useCase": "Binary recursion.",
      "code": "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}",
      "description": "Binary recursion O(2^n) without memoization."
    },
    {
      "title": "Power (Exponentiation)",
      "useCase": "Recursive exponentiation.",
      "code": "function power(x, n) {\n  if (n === 0) return 1;\n  if (n % 2 === 0) { const half = power(x, n/2); return half * half; }\n  return x * power(x, n-1);\n}",
      "description": "Fast exponentiation O(log n)."
    },
    {
      "title": "Tower of Hanoi",
      "useCase": "Classic recursion problem.",
      "code": "function towerOfHanoi(n, from, to, aux) {\n  if (n === 1) { console.log(`Move disk 1 ${from} -> ${to}`); return; }\n  towerOfHanoi(n-1, from, aux, to);\n  console.log(`Move disk ${n} ${from} -> ${to}`);\n  towerOfHanoi(n-1, aux, to, from);\n}",
      "description": "Tower of Hanoi O(2^n)."
    },
    {
      "title": "Generate Subsets",
      "useCase": "Recursive subset generation.",
      "code": "function subsets(nums) {\n  const result = [];\n  function backtrack(start, curr) {\n    result.push([...curr]);\n    for (let i = start; i < nums.length; i++) {\n      curr.push(nums[i]);\n      backtrack(i + 1, curr);\n      curr.pop();\n    }\n  }\n  backtrack(0, []); return result;\n}",
      "description": "Generate all subsets O(n * 2^n)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is recursion?",
      "options": [
        "Function calling itself",
        "Function calling another",
        "Loop iteration",
        "Array mapping"
      ],
      "answer": 0,
      "explanation": "Recursion = function calls itself."
    },
    {
      "question": "What terminates recursion?",
      "options": [
        "Loop counter",
        "Base case",
        "Return statement",
        "Break keyword"
      ],
      "answer": 1,
      "explanation": "Base case terminates recursion."
    },
    {
      "question": "Data structure used by recursion?",
      "options": [
        "Queue",
        "Stack",
        "Heap",
        "Linked list"
      ],
      "answer": 1,
      "explanation": "Call stack."
    },
    {
      "question": "What is tail recursion?",
      "options": [
        "First operation is recursive call",
        "Last operation is recursive call",
        "Middle operation",
        "No recursion"
      ],
      "answer": 1,
      "explanation": "Tail recursion: recursive call is the last operation."
    },
    {
      "question": "Time of Fibonacci without memo?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(2^n)",
        "O(n^2)"
      ],
      "answer": 2,
      "explanation": "O(2^n) exponential."
    },
    {
      "question": "What is divide and conquer?",
      "options": [
        "Same as dynamic programming",
        "Divide, recurse, combine",
        "Iterative approach",
        "Greedy algorithm"
      ],
      "answer": 1,
      "explanation": "Divide and conquer: divide, recurse on parts, combine."
    }
  ]
};
