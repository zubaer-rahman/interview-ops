const e={id:"dsa-arrays",title:"Arrays",difficulty:"beginner",estimatedMinutes:20,tldr:["Arrays store elements in contiguous memory with O(1) random access by index.","Static arrays have fixed size; dynamic arrays (like JavaScript arrays, ArrayList) resize automatically.","Insertion/deletion at end is O(1) amortized; insertion/deletion at beginning or middle is O(n) due to shifting.","Key operations: access O(1), search O(n), insertion O(n), deletion O(n)."],laymanDefinition:"An array is like a row of lockers numbered 0, 1, 2, 3... Each locker holds one item. You open locker #3 instantly because you know its exact position. But if you want to add a new locker at the front, you must shift every locker's contents down one position.",deepDive:[{heading:"Static vs Dynamic Arrays",text:"Static arrays are allocated with a fixed size at creation (C, C++, Java). Dynamic arrays (ArrayList, vector, JavaScript/Python lists) start with a capacity and grow by doubling when full. Growth is O(n) but amortized over n insertions gives O(1) average. The growth factor is commonly 2x (Java) or 1.5x (C++)."},{heading:"Memory Layout",text:"Array elements are stored in contiguous memory addresses. Element at index i is at address: base + i * elementSize. This enables O(1) random access. Cache locality is excellent since adjacent elements are stored together — modern CPUs load cache lines (64 bytes) of sequential memory."},{heading:"Time Complexity Analysis",text:"Access by index: O(1). Search (unsorted): O(n). Search (sorted, binary search): O(log n). Insert at end: O(1) amortized. Insert at beginning/middle: O(n). Delete at end: O(1). Delete at beginning/middle: O(n). The O(n) operations make arrays poor for frequent insertions/deletions at arbitrary positions."},{heading:"Applications",text:"Storing ordered data (lists, sequences). Matrix computations (2D arrays). Implementation of other data structures (heaps use arrays for complete binary trees). Buffer/queue with circular array. Lookup tables. Dynamic programming tabulation. Sorting algorithms (quicksort, mergesort) operate on arrays."}],interviewAnswer:"Arrays are the most fundamental data structure. Master O(1) random access and understand the cost of insertions/deletions. Use arrays when you need fast access by index and mainly append operations. For frequent insertions in the middle, consider linked lists. For search-heavy workloads, sort and use binary search or use a hash table.",interviewQuestions:[{question:"What is the time complexity of array access by index?",answer:"O(1) — direct memory address calculation."},{question:"What is the time complexity of searching an unsorted array?",answer:"O(n) — linear search through all elements."},{question:"What is the growth factor of dynamic arrays?",answer:"Typically 2x (Java ArrayList) or 1.5x (C++ vector)."},{question:"Why are arrays cache-friendly?",answer:"Contiguous memory layout — adjacent elements are loaded together in CPU cache lines."},{question:"What is the amortized insertion cost at end of dynamic array?",answer:"O(1) — occasional O(n) resize is spread across n insertions."},{question:"What is worst-case insertion cost at beginning of array?",answer:"O(n) — all elements must shift right by one position."},{question:"What is the address formula for array element at index i?",answer:"baseAddress + i * elementSize."},{question:"What data structure uses arrays for complete binary trees?",answer:"Heaps (binary heaps use array indexing: left child at 2i+1, right at 2i+2)."},{question:"What is the time complexity of binary search on sorted array?",answer:"O(log n)."},{question:"When should you NOT use an array?",answer:"When you need frequent insertions/deletions in the middle — use a linked list instead."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Arrays</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Index 0</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Element A</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Index 1</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Element B</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Index 2</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Element C</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Index 3</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">Element D</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Index 4</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">Element E</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Array (Contiguous Memory)</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">O(1) access by index. Static: fixed size.</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd"> Dynamic: auto-resizing.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Arrays: Contiguous memory, O(1) index access, O(n)</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> insert/delete at arbitrary positions.</text></svg>',codeExamples:[{title:"Dynamic Array (JavaScript)",useCase:"Auto-resizing array implementation.",code:`class DynamicArray {
  constructor(capacity = 4) {
    this.capacity = capacity;
    this.length = 0;
    this.data = new Array(capacity);
  }

  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error("Index out of bounds");
    return this.data[index];
  }

  push(element) {
    if (this.length === this.capacity)
      this._resize(this.capacity * 2);
    this.data[this.length++] = element;
  }

  _resize(newCapacity) {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.length; i++)
      newData[i] = this.data[i];
    this.data = newData;
    this.capacity = newCapacity;
  }
}`,description:"Dynamic array with doubling resize strategy — amortized O(1) push."},{title:"Two Sum (Hash Map)",useCase:"Classic array problem using hash map.",code:`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement))
      return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}`,description:"Two Sum — O(n) using hash map for complement lookup."},{title:"Rotate Array (Reversal)",useCase:"Rotate array k steps to the right.",code:`function rotate(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++; end--;
  }
}`,description:"Rotate array in O(n) time and O(1) space using three reversals."},{title:"Maximum Subarray (Kadane)",useCase:"Find contiguous subarray with max sum.",code:`function maxSubArray(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`,description:"Kadane\\'s algorithm — O(n) time, O(1) space for maximum subarray sum."},{title:"Merge Sorted Arrays (Two Pointers)",useCase:"Merge two sorted arrays in O(m+n).",code:`function mergeSorted(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
  while (j >= 0) nums1[k--] = nums2[j--];
}`,description:"Merge two sorted arrays from the end using two pointers avoids overwriting."}],mcqQuestions:[{question:"What is the time complexity of accessing an array by index?",options:["O(1)","O(log n)","O(n)","O(n^2)"],answer:0,explanation:"Array access by index is O(1) — direct memory address calculation."},{question:"What is the amortized time complexity of push() on a dynamic array?",options:["O(1)","O(log n)","O(n)","O(n^2)"],answer:0,explanation:"Amortized O(1) — occasional O(n) resize is spread across n insertions."},{question:"What technique finds the max subarray sum in O(n)?",options:["Binary search","Kadane's algorithm","Divide and conquer","Two pointers"],answer:1,explanation:"Kadane\\'s algorithm finds the maximum subarray sum in O(n) time, O(1) space."},{question:"Why are arrays cache-friendly?",options:["They use less memory","Contiguous memory improves cache locality","They are dynamically sized","They support binary search"],answer:1,explanation:"Contiguous memory layout means adjacent elements are loaded together in CPU cache lines."},{question:"What is the formula for element address at index i?",options:["base + i * 8","base + i * elementSize","base * i + elementSize","base + elementSize^i"],answer:1,explanation:"Element address = baseAddress + i * elementSize."},{question:"What is the worst-case time for inserting at the beginning of an array?",options:["O(1)","O(log n)","O(n)","O(n^2)"],answer:2,explanation:"Inserting at the beginning requires shifting all existing elements — O(n)."}]};export{e as dsa_arrays};
