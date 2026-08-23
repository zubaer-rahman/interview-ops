const e={id:"dsa-divide-conquer",title:"Divide and Conquer",difficulty:"intermediate",estimatedMinutes:20,tldr:["Divide and Conquer (D&C) recursively breaks a problem into independent subproblems, solves them, and combines results.","Three steps: Divide (split into subproblems), Conquer (solve subproblems recursively), Combine (merge results).","Unlike DP, D&C subproblems are independent (non-overlapping). Classic examples: MergeSort, QuickSort, Binary Search.","Time complexity: typically O(n log n) for divide-and-conquer algorithms like MergeSort and QuickSort."],laymanDefinition:"Divide and Conquer is like organizing a large group project. The manager divides the work into independent tasks, assigns each to a team (conquer), then combines the results into the final deliverable (combine). Each team works independently without needing to coordinate.",deepDive:[{heading:"D&C vs DP",text:"D&C: subproblems are independent (non-overlapping). No memoization needed. Examples: MergeSort, QuickSort, Binary Search. DP: subproblems overlap. Memoization or tabulation needed. Examples: Fibonacci, LCS, Knapsack."},{heading:"Master Theorem",text:"T(n) = aT(n/b) + f(n). a: number of subproblems. b: factor input shrinks. f(n): cost of divide+combine. Three cases compare f(n) to n^(log_b a). Used to analyze D&C recurrence relations."},{heading:"MergeSort Analysis",text:"Divide: O(1) find middle. Conquer: 2T(n/2) sort halves. Combine: O(n) merge. Recurrence: T(n) = 2T(n/2) + O(n). Master theorem case 2: O(n log n). Space: O(n) for merge."},{heading:"Applications",text:"MergeSort (sorting), QuickSort (sorting), Binary Search (search), Closest Pair (geometry), Strassen (matrix multiplication), Karatsuba (multiplication), FFT (polynomials)."}],interviewAnswer:"Divide and Conquer is a powerful problem-solving paradigm. The key insight: independent subproblems make it efficient and easy to parallelize. Use Master Theorem for complexity analysis. MergeSort guarantees O(n log n). QuickSort is faster in practice but has O(n^2) worst case.",interviewQuestions:[{question:"What is Divide and Conquer?",answer:"A paradigm that recursively breaks a problem into independent subproblems, solves them, and combines results."},{question:"What are the three steps?",answer:"Divide, Conquer, Combine."},{question:"What is the difference between D&C and DP?",answer:"D&C: independent (non-overlapping) subproblems. DP: overlapping subproblems."},{question:"What does the Master Theorem analyze?",answer:"Recurrence relations of the form T(n) = aT(n/b) + f(n)."},{question:"What is the recurrence for MergeSort?",answer:"T(n) = 2T(n/2) + O(n). Solved: O(n log n)."},{question:"What is QuickSort\\'s worst case?",answer:"O(n^2) when pivot is min or max (already sorted array)."},{question:"What is the space complexity of MergeSort?",answer:"O(n) for the auxiliary merge array."},{question:"What is Binary Search complexity?",answer:"O(log n) — T(n) = T(n/2) + O(1)."},{question:"What is Strassen\\'s algorithm?",answer:"Matrix multiplication using D&C — O(n^2.81) vs naive O(n^3)."},{question:"What is the Closest Pair problem?",answer:"Find closest pair of points using D&C in O(n log n)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Divide and Conquer</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Input</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Problem</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="210" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Divide</text><text x="210" y="54" text-anchor="middle" font-size="9" fill="#ddd">Split</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="160" y1="55" x2="190" y2="72" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Sub 1</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Solve</text><rect x="200" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="250" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Sub 2</text><text x="250" y="89" text-anchor="middle" font-size="9" fill="#ddd">Solve</text><line x1="60" y1="95" x2="60" y2="120" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="250" y1="95" x2="250" y2="120" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Result 1</text><rect x="200" y="130" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="250" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Result 2</text><line x1="60" y1="155" x2="155" y2="155" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="250" y1="155" x2="155" y2="155" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="165" y="145" width="110" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="220" y="161" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Combine</text><text x="220" y="164" text-anchor="middle" font-size="9" fill="#ddd">Merge results</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Divide and Conquer: Divide, Conquer (recurse), Com</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">bine. MergeSort O(n log n).</text></svg>',codeExamples:[{title:"MergeSort",useCase:"O(n log n) divide and conquer sort.",code:`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length)
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  return [...result, ...left, ...right];
}`,description:"MergeSort O(n log n) with O(n) space."},{title:"QuickSort (Lomuto)",useCase:"In-place divide and conquer sort.",code:`function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++)
    if (arr[j] < pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i + 1;
}`,description:"QuickSort O(n log n) average, O(n^2) worst, O(log n) space."},{title:"Binary Search",useCase:"O(log n) search in sorted array.",code:`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,description:"Binary search O(log n) iterative."},{title:"Closest Pair of Points",useCase:"D&C closest points.",code:`function closestPair(points) {
  points.sort((a, b) => a.x - b.x);
  function recurse(l, r) {
    if (r - l <= 3) return bruteForce(points, l, r);
    const mid = Math.floor((l + r) / 2);
    const dLeft = recurse(l, mid);
    const dRight = recurse(mid + 1, r);
    let d = Math.min(dLeft, dRight);
    const strip = [];
    for (let i = l; i <= r; i++)
      if (Math.abs(points[i].x - points[mid].x) < d) strip.push(points[i]);
    strip.sort((a, b) => a.y - b.y);
    for (let i = 0; i < strip.length; i++)
      for (let j = i + 1; j < strip.length && (strip[j].y - strip[i].y) < d; j++)
        d = Math.min(d, dist(strip[i], strip[j]));
    return d;
  }
  return recurse(0, points.length - 1);
}`,description:"Closest pair O(n log n) D&C."},{title:"Maximum Subarray (D&C)",useCase:"D&C approach for max subarray.",code:`function maxSubArray(nums) {
  function crossSum(l, m, r) {
    let leftSum = -Infinity, sum = 0;
    for (let i = m; i >= l; i--) { sum += nums[i]; leftSum = Math.max(leftSum, sum); }
    let rightSum = -Infinity; sum = 0;
    for (let i = m+1; i <= r; i++) { sum += nums[i]; rightSum = Math.max(rightSum, sum); }
    return leftSum + rightSum;
  }
  function divide(l, r) {
    if (l === r) return nums[l];
    const m = Math.floor((l+r)/2);
    return Math.max(divide(l,m), divide(m+1,r), crossSum(l,m,r));
  }
  return divide(0, nums.length-1);
}`,description:"Maximum subarray D&C O(n log n)."}],mcqQuestions:[{question:"What are the three D&C steps?",options:["Input, Process, Output","Divide, Conquer, Combine","Split, Sort, Merge","Start, Loop, End"],answer:1,explanation:"Divide, Conquer, Combine."},{question:"Difference between D&C and DP?",options:["D&C has overlapping subproblems","D&C has independent subproblems","Same","D&C uses memoization"],answer:1,explanation:"D&C subproblems are independent."},{question:"MergeSort recurrence?",options:["T(n) = 2T(n/2) + O(1)","T(n) = 2T(n/2) + O(n)","T(n) = T(n-1) + O(n)","T(n) = T(n/2) + O(1)"],answer:1,explanation:"T(n) = 2T(n/2) + O(n) -> O(n log n)."},{question:"QuickSort worst case?",options:["O(n log n)","O(n^2)","O(n)","O(log n)"],answer:1,explanation:"O(n^2) when pivot is extreme (sorted array)."},{question:"Binary Search recurrence?",options:["T(n) = 2T(n/2) + O(1)","T(n) = T(n/2) + O(1)","T(n) = T(n-1) + O(1)","T(n) = 2T(n/2) + O(n)"],answer:1,explanation:"T(n) = T(n/2) + O(1) -> O(log n)."},{question:"What analyzes D&C recurrences?",options:["Master Theorem","Greedy choice","Exchange argument","Induction"],answer:0,explanation:"Master Theorem analyzes D&C recurrences."}]};export{e as dsa_divide_conquer};
