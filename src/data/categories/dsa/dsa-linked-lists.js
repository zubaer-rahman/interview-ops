export const dsa_linked_lists = {
  "id": "dsa-linked-lists",
  "title": "Linked Lists",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "A linked list is a linear data structure where elements (nodes) are connected via pointers, not stored contiguously.",
    "Singly linked: each node has data + next pointer. Doubly linked: each node has prev + next pointers.",
    "Insertion/deletion at head is O(1). No random access — must traverse from head to find an element (O(n)).",
    "Linked lists excel at frequent insertions/deletions but have poor cache locality due to scattered memory allocation."
  ],
  "laymanDefinition": "A linked list is like a treasure hunt. Each clue (node) tells you where to find the next clue. To find the 5th clue, you must follow clues 1, 2, 3, and 4. But adding a new clue between two existing ones is easy — just change where the previous clue points.",
  "deepDive": [
    {
      "heading": "Singly vs Doubly Linked",
      "text": "Singly linked: each node has data and next pointer. Traversal is one direction only (head to tail). Doubly linked: nodes have prev and next pointers. Traversal both directions. Doubly uses more memory (extra pointer per node) but enables O(1) deletion at tail and reverse traversal."
    },
    {
      "heading": "Time Complexity",
      "text": "Insert at head: O(1). Insert at tail (if tail pointer): O(1). Insert in middle: O(n) to find position + O(1) to link. Delete at head: O(1). Delete at tail (singly): O(n). Delete at tail (doubly): O(1). Search: O(n). Access by index: O(n)."
    },
    {
      "heading": "Memory Overhead",
      "text": "Each node stores data + 1 or 2 pointers. For integers, overhead can be 200-400%. Poor cache locality: nodes are heap-allocated, scattered across memory. Iteration is slower than array iteration due to pointer chasing and cache misses."
    },
    {
      "heading": "Applications",
      "text": "Implementation of stacks and queues. Undo functionality in editors (doubly linked list). LRU cache (doubly linked list + hash map). Polynomial arithmetic. Adjacency list representation of graphs. Memory allocators (free lists)."
    }
  ],
  "interviewAnswer": "Linked lists are ideal when you need frequent insertions/deletions and don't need random access. The trade-off: O(n) access vs arrays' O(1) access. In practice, arrays are often faster due to cache locality. Doubly linked lists are preferred for the ability to delete from tail and traverse backwards.",
  "interviewQuestions": [
    {
      "question": "What is the time complexity of inserting at the head of a linked list?",
      "answer": "O(1) — just update the head pointer."
    },
    {
      "question": "What is the time complexity of searching a linked list?",
      "answer": "O(n) — must traverse from head."
    },
    {
      "question": "What are the two types of linked lists?",
      "answer": "Singly linked (one direction) and doubly linked (both directions)."
    },
    {
      "question": "Why are linked lists not cache-friendly?",
      "answer": "Nodes are heap-allocated non-contiguously — pointer chasing causes cache misses."
    },
    {
      "question": "What data structure can be implemented with a linked list?",
      "answer": "Stack and Queue."
    },
    {
      "question": "What is Floyd\\'s cycle detection algorithm?",
      "answer": "Two pointers (slow and fast). If they meet, there is a cycle. O(n) time, O(1) space."
    },
    {
      "question": "How do you reverse a singly linked list?",
      "answer": "Iterate with prev, current, next pointers — O(n) time, O(1) space."
    },
    {
      "question": "What is the advantage of doubly linked over singly?",
      "answer": "O(1) deletion at tail, reverse traversal, easier node deletion given only the node reference."
    },
    {
      "question": "What is an LRU cache?",
      "answer": "Most recently used items are at head. Doubly linked list + hash map for O(1) operations."
    },
    {
      "question": "What is the memory overhead of a singly linked node?",
      "answer": "Data + next pointer. For integers, ~200% overhead."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Linked Lists</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Head</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data | next</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node A</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data | next</text><line x1=\"270\" y1=\"48\" x2=\"300\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"310\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"365\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Node B</text><text x=\"365\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data | next</text><line x1=\"310\" y1=\"60\" x2=\"310\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Tail</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data | null</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Insert Head</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(1)</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Delete Head</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(1)</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Search</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">O(n)</text><rect x=\"310\" y=\"70\" width=\"140\" height=\"115\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"380\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Linked List</text><text x=\"380\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Linear structure with poi</text><text x=\"380\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">nters. O(1) insert/delete</text><text x=\"380\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> at head. O(n) access.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Linked Lists: Nodes connected by pointers. Good fo</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">r frequent insert/delete, poor random access.</text></svg>",
  "codeExamples": [
    {
      "title": "Singly Linked List",
      "useCase": "Basic operations.",
      "code": "class ListNode { constructor(val) { this.val = val; this.next = null; } }\nclass LinkedList {\n  constructor() { this.head = null; }\n  prepend(val) { const n = new ListNode(val); n.next = this.head; this.head = n; }\n  delete(val) {\n    if (!this.head) return;\n    if (this.head.val === val) { this.head = this.head.next; return; }\n    let curr = this.head;\n    while (curr.next && curr.next.val !== val) curr = curr.next;\n    if (curr.next) curr.next = curr.next.next;\n  }\n}",
      "description": "Singly linked list with prepend (O(1)) and delete (O(n))."
    },
    {
      "title": "Reverse Linked List",
      "useCase": "Iterative reversal.",
      "code": "function reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next; curr.next = prev;\n    prev = curr; curr = next;\n  }\n  return prev;\n}",
      "description": "Reverse linked list in O(n) time, O(1) space."
    },
    {
      "title": "Detect Cycle (Floyd)",
      "useCase": "Cycle detection.",
      "code": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
      "description": "Floyd cycle detection O(n) time O(1) space."
    },
    {
      "title": "Find Middle",
      "useCase": "Fast/slow pointer.",
      "code": "function middleNode(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }\n  return slow;\n}",
      "description": "Find middle in one pass."
    },
    {
      "title": "Merge Two Sorted Lists",
      "useCase": "Iterative merge.",
      "code": "function mergeTwoLists(l1, l2) {\n  const dummy = new ListNode(0); let curr = dummy;\n  while (l1 && l2) {\n    if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }\n    else { curr.next = l2; l2 = l2.next; }\n    curr = curr.next;\n  }\n  curr.next = l1 || l2; return dummy.next;\n}",
      "description": "Merge sorted lists O(n+m)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is insert time at head of linked list?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": 0,
      "explanation": "O(1) — just update head pointer."
    },
    {
      "question": "What is search time in linked list?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 2,
      "explanation": "Search requires traversal O(n)."
    },
    {
      "question": "Why linked lists not cache-friendly?",
      "options": [
        "Too many nodes",
        "Non-contiguous memory",
        "Excessive memory",
        "Dynamic"
      ],
      "answer": 1,
      "explanation": "Non-contiguous heap-allocated nodes cause cache misses."
    },
    {
      "question": "Which algorithm detects cycle O(1) space?",
      "options": [
        "Binary search",
        "Floyd algorithm",
        "BFS",
        "DFS"
      ],
      "answer": 1,
      "explanation": "Floyd uses slow/fast pointers."
    },
    {
      "question": "Advantage of doubly linked?",
      "options": [
        "Less memory",
        "Reverse traversal + O(1) tail delete",
        "Faster search",
        "Cache-friendly"
      ],
      "answer": 1,
      "explanation": "Doubly linked enables reverse traversal and O(1) tail deletion."
    },
    {
      "question": "What uses linked list + hash map for O(1)?",
      "options": [
        "Stack",
        "Queue",
        "LRU cache",
        "Heap"
      ],
      "answer": 2,
      "explanation": "LRU cache uses doubly linked list + hash map."
    }
  ]
};
