export const dsa_stacks = {
  "id": "dsa-stacks",
  "title": "Stacks",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "tldr": [
    "A stack is a linear data structure following LIFO (Last In, First Out) principle.",
    "Primary operations: push, pop, peek. All O(1).",
    "Can be implemented with arrays (cache-friendly) or linked lists (dynamic size).",
    "Underflow: popping from empty stack. Overflow: pushing beyond capacity (array-based)."
  ],
  "laymanDefinition": "A stack is like a stack of plates. You add a clean plate on top (push). You take a plate from the top (pop). You can look at the top plate without removing it (peek). The first plate placed at the bottom is the last one you use — LIFO.",
  "deepDive": [
    {
      "heading": "Stack Operations",
      "text": "push(item): add to top. pop(): remove and return top. peek(): view top without removing. isEmpty(): check if empty. All O(1)."
    },
    {
      "heading": "Array vs Linked List",
      "text": "Array-based: contiguous memory, cache-friendly, fixed capacity. Linked-list-based: each push creates a new node, no capacity limit, more memory overhead."
    },
    {
      "heading": "Applications",
      "text": "Function call stack (recursion). Expression evaluation (postfix). Syntax parsing (brackets). Undo/Redo. Back/Forward in browser. DFS algorithm."
    },
    {
      "heading": "Call Stack and Recursion",
      "text": "Every function call pushes a stack frame. Recursion creates multiple frames. Stack overflow when recursion depth exceeds available memory."
    }
  ],
  "interviewAnswer": "Stacks are simple but powerful. LIFO makes them ideal for nested structures and reverse operations. Array-based stacks are more efficient. Use stacks for expression parsing, undo functionality, and DFS traversal.",
  "interviewQuestions": [
    {
      "question": "What does LIFO stand for?",
      "answer": "Last In, First Out."
    },
    {
      "question": "What are the three primary stack operations?",
      "answer": "Push, Pop, Peek. All O(1)."
    },
    {
      "question": "How can stacks be implemented?",
      "answer": "Array-based or linked-list-based."
    },
    {
      "question": "What is stack underflow?",
      "answer": "Attempting to pop from an empty stack."
    },
    {
      "question": "What is a classic stack application?",
      "answer": "Matching parentheses / validating brackets."
    },
    {
      "question": "What is a call stack?",
      "answer": "Stack of function call frames managed by the runtime."
    },
    {
      "question": "What causes stack overflow?",
      "answer": "Excessive recursion depth or infinite recursion."
    },
    {
      "question": "How to convert infix to postfix?",
      "answer": "Shunting Yard algorithm using a stack."
    },
    {
      "question": "What does undo feature use?",
      "answer": "Two stacks: undo and redo stacks."
    },
    {
      "question": "What is the space complexity of a stack with n elements?",
      "answer": "O(n)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Stacks</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Top</text><text x=\"60\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">peek()</text><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Item 3</text><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Item 2</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Item 1</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"178\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Bottom</text><line x1=\"110\" y1=\"50\" x2=\"140\" y2=\"50\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"120\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Stack (LIFO)</text><text x=\"210\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Push/Pop/Peek O(1)</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Stack: LIFO. O(1) push/pop/peek. Recursion, parsin</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">g, DFS.</text></svg>",
  "codeExamples": [
    {
      "title": "Array-Based Stack",
      "useCase": "Simple stack implementation.",
      "code": "class Stack {\n  constructor() { this.items = []; }\n  push(item) { this.items.push(item); }\n  pop() { return this.items.length ? this.items.pop() : null; }\n  peek() { return this.items.length ? this.items[this.items.length - 1] : null; }\n  isEmpty() { return this.items.length === 0; }\n}",
      "description": "Array-based stack O(1) amortized."
    },
    {
      "title": "Valid Parentheses",
      "useCase": "Balanced brackets using stack.",
      "code": "function isValid(s) {\n  const stack = [];\n  const map = {')':'(', '}':'{', ']':'['};\n  for (const c of s) {\n    if ('({['.includes(c)) stack.push(c);\n    else if (stack.pop() !== map[c]) return false;\n  }\n  return stack.length === 0;\n}",
      "description": "O(n) time using stack for bracket matching."
    },
    {
      "title": "Min Stack",
      "useCase": "Get minimum in O(1).",
      "code": "class MinStack {\n  constructor() { this.stack = []; this.minStack = []; }\n  push(val) {\n    this.stack.push(val);\n    if (!this.minStack.length || val <= this.minStack[this.minStack.length-1])\n      this.minStack.push(val);\n  }\n  pop() {\n    const v = this.stack.pop();\n    if (v === this.minStack[this.minStack.length-1]) this.minStack.pop();\n    return v;\n  }\n  getMin() { return this.minStack[this.minStack.length-1]; }\n}",
      "description": "Auxiliary min stack for O(1) min retrieval."
    },
    {
      "title": "Daily Temperatures",
      "useCase": "Monotonic stack.",
      "code": "function dailyTemperatures(t) {\n  const n = t.length, res = new Array(n).fill(0), stack = [];\n  for (let i = 0; i < n; i++) {\n    while (stack.length && t[i] > t[stack[stack.length-1]]) {\n      const j = stack.pop(); res[j] = i - j;\n    }\n    stack.push(i);\n  }\n  return res;\n}",
      "description": "Monotonic stack O(n) for next greater element."
    },
    {
      "title": "Evaluate Postfix",
      "useCase": "Postfix expression evaluation.",
      "code": "function evalPostfix(expr) {\n  const stack = [];\n  for (const token of expr.split(\" \")) {\n    if (!isNaN(token)) { stack.push(Number(token)); }\n    else {\n      const b = stack.pop(), a = stack.pop();\n      if (token === \"+\") stack.push(a + b);\n      else if (token === \"-\") stack.push(a - b);\n      else if (token === \"*\") stack.push(a * b);\n      else if (token === \"/\") stack.push(a / b);\n    }\n  }\n  return stack.pop();\n}",
      "description": "Postfix evaluation using stack O(n)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What does LIFO stand for?",
      "options": [
        "Last In, First Out",
        "First In, First Out",
        "Last In, Last Out",
        "First In, Last Out"
      ],
      "answer": 0,
      "explanation": "LIFO = Last In, First Out."
    },
    {
      "question": "Time complexity of stack push/pop?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 0,
      "explanation": "Both O(1)."
    },
    {
      "question": "Data structure used for recursion?",
      "options": [
        "Queue",
        "Stack",
        "Tree",
        "Heap"
      ],
      "answer": 1,
      "explanation": "Call stack manages recursion."
    },
    {
      "question": "MinStack uses what auxiliary structure?",
      "options": [
        "Max stack",
        "Min stack",
        "Sorted stack",
        "Hash stack"
      ],
      "answer": 1,
      "explanation": "Auxiliary min stack tracks minimums."
    },
    {
      "question": "Pop from empty stack causes?",
      "options": [
        "Null return",
        "Stack overflow",
        "Stack underflow",
        "Undefined"
      ],
      "answer": 2,
      "explanation": "Stack underflow."
    },
    {
      "question": "Monotonic stack primarily solves?",
      "options": [
        "Next greater element",
        "Sorting",
        "Searching",
        "Path finding"
      ],
      "answer": 0,
      "explanation": "Next greater/smaller element problems."
    }
  ]
};
