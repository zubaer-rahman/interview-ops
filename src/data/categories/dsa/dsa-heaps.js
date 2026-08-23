export const dsa_heaps = {
  "id": "dsa-heaps",
  "title": "Heaps",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "A heap is a complete binary tree with the heap property: parent is >= (max-heap) or <= (min-heap) children.",
    "Heaps are stored compactly in arrays: root at index 0, left child at 2i+1, right child at 2i+2.",
    "Insert: O(log n) — add at end, bubble up. Extract min/max: O(log n) — swap with last, bubble down.",
    "Heapify: building a heap from an array in O(n) time using bottom-up approach."
  ],
  "laymanDefinition": "A heap is like a pyramid of numbers. In a max-heap, the largest number sits at the top (root). Each parent is larger than its children. When you remove the top, the next largest bubbles up to replace it — always keeping the largest accessible in O(1).",
  "deepDive": [
    {
      "heading": "Max-Heap vs Min-Heap",
      "text": "Max-heap: root is maximum. Parent >= children. For priority queues wanting highest priority first. Min-heap: root is minimum. Parent <= children. For Dijkstra, Huffman coding."
    },
    {
      "heading": "Heap Operations",
      "text": "Insert: append to array, bubble up while parent < value (min-heap). Extract: swap root with last, remove last, bubble down. Peek: O(1) return root."
    },
    {
      "heading": "Heapify (Build Heap)",
      "text": "Start from last internal node (n/2 - 1) and bubble down each. O(n) because most nodes are near leaves with minimal work."
    },
    {
      "heading": "Applications",
      "text": "Priority queues (OS scheduling). Dijkstra. HeapSort: O(n log n). K-way merge. Median finding (two heaps). Sliding window maximum."
    }
  ],
  "interviewAnswer": "Heaps are the go-to for priority queue operations. Insert and extract in O(log n). Peek in O(1). Heapify in O(n). JavaScript does not have built-in heap — implement or use library. HeapSort is an in-place O(n log n) sort.",
  "interviewQuestions": [
    {
      "question": "What is a heap?",
      "answer": "A complete binary tree with heap property (parent >= or <= children)."
    },
    {
      "question": "What is the heap property for max-heap?",
      "answer": "Parent >= children. Root is the maximum element."
    },
    {
      "question": "How are heaps stored in memory?",
      "answer": "As an array: root at 0, left child at 2i+1, right at 2i+2."
    },
    {
      "question": "Time complexity of heap insert?",
      "answer": "O(log n) — add at end, bubble up."
    },
    {
      "question": "Time complexity of extract min/max?",
      "answer": "O(log n) — swap with last, bubble down."
    },
    {
      "question": "What is heapify time complexity?",
      "answer": "O(n) — building heap from array bottom-up."
    },
    {
      "question": "What is HeapSort complexity?",
      "answer": "O(n log n) time, O(1) extra space (in-place)."
    },
    {
      "question": "What data structure uses heap for priority queue?",
      "answer": "Min-heap or max-heap depending on priority order."
    },
    {
      "question": "How do you find median using heaps?",
      "answer": "Max-heap for lower half, min-heap for upper half."
    },
    {
      "question": "Index of parent for node i?",
      "answer": "Parent index = Math.floor((i-1)/2)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Heaps</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Root: 50</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Max</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"55\" x2=\"140\" y2=\"72\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"53\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Left: 30</text><rect x=\"150\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"200\" y=\"83\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Right: 20</text><line x1=\"200\" y1=\"48\" x2=\"200\" y2=\"65\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"200\" y1=\"78\" x2=\"200\" y2=\"100\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Left: 15</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Right: 10</text><rect x=\"150\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Left: 8</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"60\" y=\"178\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Array: [50,30,20,15,10,8]</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Heap (Max-Heap)</text><text x=\"385\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Complete tree. Parent >= children.</text><text x=\"385\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Array storage.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Heap: Complete binary tree with heap property. Pri</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ority queue. HeapSort O(n log n).</text></svg>",
  "codeExamples": [
    {
      "title": "Min-Heap Implementation",
      "useCase": "Array-based min-heap.",
      "code": "class MinHeap {\n  constructor() { this.heap = []; }\n  parent(i) { return Math.floor((i-1)/2); }\n  left(i) { return 2*i+1; } right(i) { return 2*i+2; }\n  push(val) { this.heap.push(val); this._bubbleUp(this.heap.length-1); }\n  _bubbleUp(i) {\n    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {\n      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];\n      i = this.parent(i);\n    }\n  }\n  pop() {\n    if (!this.heap.length) return null;\n    const min = this.heap[0]; const last = this.heap.pop();\n    if (this.heap.length) { this.heap[0] = last; this._bubbleDown(0); }\n    return min;\n  }\n  _bubbleDown(i) {\n    const l = this.left(i), r = this.right(i); let smallest = i;\n    if (l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l;\n    if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;\n    if (smallest !== i) {\n      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];\n      this._bubbleDown(smallest);\n    }\n  }\n}",
      "description": "Complete min-heap with push/pop O(log n)."
    },
    {
      "title": "Heapify (Build Heap)",
      "useCase": "O(n) bottom-up build.",
      "code": "function heapify(arr) {\n  const n = arr.length;\n  for (let i = Math.floor(n/2) - 1; i >= 0; i--) bubbleDown(arr, n, i);\n  return arr;\n}\nfunction bubbleDown(arr, n, i) {\n  let largest = i; const l = 2*i+1, r = 2*i+2;\n  if (l < n && arr[l] > arr[largest]) largest = l;\n  if (r < n && arr[r] > arr[largest]) largest = r;\n  if (largest !== i) { [arr[i], arr[largest]] = [arr[largest], arr[i]]; bubbleDown(arr, n, largest); }\n}",
      "description": "Heapify builds max-heap in O(n)."
    },
    {
      "title": "HeapSort",
      "useCase": "O(n log n) in-place sort.",
      "code": "function heapSort(arr) {\n  const n = arr.length;\n  for (let i = Math.floor(n/2) - 1; i >= 0; i--) bubbleDown(arr, n, i);\n  for (let i = n - 1; i > 0; i--) {\n    [arr[0], arr[i]] = [arr[i], arr[0]];\n    bubbleDown(arr, i, 0);\n  }\n  return arr;\n}",
      "description": "HeapSort: build heap + extract all O(n log n)."
    },
    {
      "title": "Kth Largest Element",
      "useCase": "Min-heap of size k.",
      "code": "function findKthLargest(nums, k) {\n  const heap = new MinHeap();\n  for (const n of nums) { heap.push(n); if (heap.heap.length > k) heap.pop(); }\n  return heap.pop();\n}",
      "description": "Kth largest using min-heap of size k O(n log k)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What data structure is a heap?",
      "options": [
        "Complete binary tree",
        "Linked list",
        "Hash table",
        "Balanced BST"
      ],
      "answer": 0,
      "explanation": "Heap is a complete binary tree stored in array."
    },
    {
      "question": "Time complexity of heap insert?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": 1,
      "explanation": "Insert: O(log n) bubble up."
    },
    {
      "question": "Time complexity of heapify?",
      "options": [
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(n^2)"
      ],
      "answer": 1,
      "explanation": "Heapify builds heap in O(n)."
    },
    {
      "question": "HeapSort time complexity?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": 1,
      "explanation": "HeapSort: O(n log n)."
    },
    {
      "question": "Index of left child in 0-indexed heap?",
      "options": [
        "2i",
        "2i+1",
        "i/2",
        "2i+2"
      ],
      "answer": 1,
      "explanation": "Left child = 2i+1."
    },
    {
      "question": "What is a max-heap property?",
      "options": [
        "Parent <= children",
        "Parent >= children",
        "Parent = children",
        "No ordering"
      ],
      "answer": 1,
      "explanation": "Max-heap: parent >= children."
    }
  ]
};
