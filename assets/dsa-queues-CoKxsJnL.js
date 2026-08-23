const e={id:"dsa-queues",title:"Queues",difficulty:"beginner",estimatedMinutes:15,tldr:["A queue follows FIFO (First In, First Out) principle.","Enqueue (add to rear), Dequeue (remove from front), Peek. O(1).","Array-based (circular buffer) or linked-list-based.","JavaScript array.shift() is O(n) — use a proper queue implementation."],laymanDefinition:"A queue is like a line at a coffee shop. People join at the back (enqueue). The person at the front gets served and leaves (dequeue). First come, first served — FIFO.",deepDive:[{heading:"FIFO Principle",text:"First In, First Out. Add at rear, remove from front. Opposite of stack (LIFO)."},{heading:"Circular Buffer",text:"Fixed-size array with front/rear pointers. Wraps around using modulo. O(1) but fixed capacity."},{heading:"Linked List Queue",text:"Head = front, Tail = rear. O(1) enqueue/dequeue. No capacity limit. More memory overhead."},{heading:"Applications",text:"BFS, task scheduling, request queuing, message queues, I/O buffering, printer spooling."}],interviewAnswer:"Queues are fundamental for FIFO processing. Use circular buffer for bounded queues. Linked-list for unbounded. BFS requires a queue. Deque (double-ended queue) allows O(1) at both ends.",interviewQuestions:[{question:"What does FIFO stand for?",answer:"First In, First Out."},{question:"What are the two primary queue operations?",answer:"Enqueue (rear) and Dequeue (front). O(1)."},{question:"Why not use array.shift() for dequeue?",answer:"shift() is O(n) — all elements shift left."},{question:"What is a circular buffer?",answer:"Fixed-size array with modulo wrapping front/rear pointers."},{question:"What algorithm uses a queue?",answer:"BFS (Breadth-First Search)."},{question:"What is a deque?",answer:"Double-ended queue — O(1) operations at both ends."},{question:"Time complexity of enqueue/dequeue?",answer:"O(1)."},{question:"What is a priority queue?",answer:"Elements have priority; typically heap-based."},{question:"How are queues used in OS?",answer:"Process scheduling, I/O buffering, message passing."},{question:"Linked list queue pointers?",answer:"Head = front (dequeue), Tail = rear (enqueue)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Queues</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Front</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">dequeue()</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="83" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Item A</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="113" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Item B</text><rect x="10" y="125" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="65" y="143" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Item C</text><rect x="10" y="155" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Rear</text><text x="65" y="174" text-anchor="middle" font-size="9" fill="#ddd">enqueue()</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="130" height="150" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="225" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Queue (FIFO)</text><text x="225" y="168" text-anchor="middle" font-size="9" fill="#ddd">Enqueue rear, Dequeue f</text><text x="225" y="179" text-anchor="middle" font-size="9" fill="#ddd">ront</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Queue: FIFO. O(1) enqueue/dequeue. BFS.</text></svg>',codeExamples:[{title:"Linked List Queue",useCase:"O(1) enqueue/dequeue.",code:`class Queue {
  constructor() { this.front = null; this.rear = null; }
  enqueue(val) {
    const n = {val, next: null};
    if (!this.front) this.front = n; else this.rear.next = n;
    this.rear = n;
  }
  dequeue() {
    if (!this.front) return null;
    const v = this.front.val;
    this.front = this.front.next;
    if (!this.front) this.rear = null; return v;
  }
}`,description:"Linked list queue with front/rear O(1)."},{title:"Circular Array Queue",useCase:"Fixed capacity O(1).",code:`class CircularQueue {
  constructor(cap) { this.data = new Array(cap); this.cap = cap; this.front = 0; this.size = 0; }
  enqueue(val) {
    if (this.size === this.cap) return false;
    this.data[(this.front + this.size) % this.cap] = val;
    this.size++; return true;
  }
  dequeue() {
    if (!this.size) return null;
    const v = this.data[this.front];
    this.front = (this.front+1) % this.cap; this.size--; return v;
  }
}`,description:"O(1) with modulo wrapping."},{title:"BFS Level Order",useCase:"Queue-based tree traversal.",code:`function levelOrder(root) {
  if (!root) return [];
  const q = [root], res = [];
  while (q.length) {
    const len = q.length, lvl = [];
    for (let i = 0; i < len; i++) {
      const n = q.shift(); lvl.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(lvl);
  }
  return res;
}`,description:"O(n) BFS using queue."},{title:"Deque (Double-Ended Queue)",useCase:"O(1) both ends.",code:`class Deque {
  constructor() { this.items = {}; this.front = 0; this.rear = 0; }
  addFront(val) { this.items[--this.front] = val; }
  addRear(val) { this.items[this.rear++] = val; }
  removeFront() {
    if (this.front === this.rear) return null;
    const v = this.items[this.front]; delete this.items[this.front++]; return v;
  }
  removeRear() {
    if (this.front === this.rear) return null;
    const v = this.items[--this.rear]; delete this.items[this.rear]; return v;
  }
}`,description:"Deque O(1) operations both ends."}],mcqQuestions:[{question:"What does FIFO mean?",options:["First In, First Out","Last In, First Out","First In, Last Out","Fast Input Output"],answer:0,explanation:"FIFO."},{question:"Time of enqueue/dequeue?",options:["O(n)","O(log n)","O(1)","O(n^2)"],answer:2,explanation:"O(1)."},{question:"Algorithm using queue?",options:["DFS","BFS","Binary search","Quick sort"],answer:1,explanation:"BFS uses queue."},{question:"Why not array.shift() for queue?",options:["O(n) shifts all elements","O(1) but slow","Cannot use","Mutates array"],answer:0,explanation:"O(n) because all elements shift."},{question:"Circular buffer used for?",options:["Resizing arrays","O(1) fixed-capacity queue","Tree traversal","Sorting"],answer:1,explanation:"O(1) fixed-capacity queue."},{question:"What is deque?",options:["Single-ended queue","Double-ended queue","Priority queue","Blocking queue"],answer:1,explanation:"Double-ended queue."}]};export{e as dsa_queues};
