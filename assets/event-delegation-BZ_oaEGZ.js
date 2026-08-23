const e={title:"Event Delegation",difficulty:"intermediate",estimatedMinutes:20,tldr:["<strong>Event Delegation</strong> is a technique where you attach a single event listener to a <strong>parent</strong> element to handle events on its <strong>children</strong> — even children added dynamically.","It works because events <strong>bubble up</strong> from the target element through the DOM tree to the parent.","Benefits: <strong>memory efficiency</strong> (fewer listeners), <strong>dynamic handling</strong> (works on elements added later), and <strong>cleaner code</strong>.","The key is using <code>event.target</code> to determine which child triggered the event."],laymanDefinition:"Imagine you're a manager at a busy help desk with 100 employees. Instead of assigning a personal assistant to each employee (which would be expensive and impractical), you station ONE assistant at the front door. When any employee needs help, they walk to the front door and the assistant helps them. Event delegation is like that: instead of adding a listener to each child element, you add one to the parent and let events bubble up. The parent figures out which child triggered the event using event.target — like the assistant noting which employee came to the door.",deepDive:[{heading:"The Event Bubbling Mechanism",text:"When an event fires on a DOM element, it goes through three phases: <strong>capturing</strong> (window → target), <strong>target</strong> (at the element), and <strong>bubbling</strong> (target → window). Event delegation relies on the bubbling phase — events propagate from the target element up through its ancestors. By attaching a listener to a common ancestor, you catch events from all descendants."},{heading:"Using event.target and event.currentTarget",text:"<strong>event.target</strong> is the element that actually triggered the event (the deepest clicked element). <strong>event.currentTarget</strong> is the element where the listener is attached (the parent). In delegation, you check event.target to see if it matches the desired child: <code>if (event.target.matches('.item')) { ... }</code>. You can also use <code>event.target.closest('.item')</code> to find the nearest ancestor matching a selector."},{heading:"Pattern: Delegated List Click Handler",text:"A common pattern is handling clicks on list items through a single listener on the parent <code>&lt;ul&gt;</code>. The listener checks event.target to identify which <code>&lt;li&gt;</code> was clicked. This works even if new items are added dynamically via JavaScript — no need to attach new listeners. This is the most common interview example for event delegation."},{heading:"Event Delegation with Dynamic Content",text:"Single-page applications (React, Vue, etc.) frequently add and remove DOM elements. Without delegation, you'd need to attach and detach listeners on every update. With delegation, a single listener on a static parent handles all children, including dynamically created ones. This is also why delegating to document or document.body can be useful for handling events on elements that don't exist yet."},{heading:"Limitations of Event Delegation",list:["Some events <strong>do not bubble</strong>: <code>focus</code>, <code>blur</code>, <code>load</code>, <code>error</code>, <code>scroll</code>, <code>mouseenter</code>, <code>mouseleave</code>. Use the capture phase (<code>{ capture: true }</code>) or the <code>focusin</code>/<code>focusout</code> equivalents.","The delegation check (<code>event.target.matches</code>) runs on every click, adding minimal overhead.","Must call <code>event.stopPropagation()</code> carefully — stopping propagation breaks delegation for outer listeners.","Deeply nested targets may require <code>event.target.closest()</code> to find the right ancestor element."]}],interviewAnswer:"Event delegation is a pattern where a single event listener is attached to a parent element to handle events for all its children — including dynamically added ones — leveraging the event bubbling mechanism. Instead of attaching N listeners to N elements, you attach one listener to a common ancestor and use event.target to determine the actual source. This reduces memory usage, simplifies code, and automatically handles dynamically created elements. To implement it, you check if event.target matches a selector (e.g., via .matches() or .closest()) and then execute the appropriate handler. This pattern is widely used in vanilla JS and is the foundation of event handling in libraries like jQuery and React's synthetic events.",interviewQuestions:[{question:"What is event delegation and how does it work?",answer:"Event delegation is attaching a single event listener to a parent element to handle events for all its children. It works because most events bubble up from the target element through the DOM tree to the parent. The listener uses <code>event.target</code> to determine which child triggered the event."},{question:"What are the benefits of event delegation?",answer:"(1) <strong>Memory efficiency</strong> — one listener instead of many. (2) <strong>Dynamic content</strong> — works on elements added after the listener is attached. (3) <strong>Cleaner code</strong> — less listener management. (4) <strong>Performance</strong> — fewer event listeners means less memory usage and faster setup."},{question:"What is the difference between event.target and event.currentTarget?",answer:"<strong>event.target</strong> is the element that triggered the event (the deepest clicked element). <strong>event.currentTarget</strong> is the element where the event listener is attached (the parent in delegation). In delegation, you typically use event.target to identify the child and ignore event.currentTarget."},{question:"Which events do NOT bubble and cannot be used with delegation?",answer:"<code>focus</code>, <code>blur</code>, <code>load</code>, <code>unload</code>, <code>error</code>, <code>scroll</code>, <code>mouseenter</code>, <code>mouseleave</code>, <code>resize</code>, <code>abort</code>. Use the capture phase (<code>addEventListener(type, handler, { capture: true })</code>) or non-bubbling event equivalents like <code>focusin</code>/<code>focusout</code>."},{question:"How do you filter events in delegation to only handle specific children?",answer:"Use <code>event.target.matches('.selector')</code> or <code>event.target.closest('.selector')</code>. <code>matches</code> checks if the target itself matches. <code>closest</code> walks up the tree from target to find the nearest matching ancestor. Both accept any CSS selector."},{question:"What is the 'event bubbling' phase and why does delegation depend on it?",answer:"Bubbling is the third phase of event propagation where the event travels from the target element up through its ancestors to the document root. Delegation depends on bubbling because the parent's listener would never fire if events didn't travel upward from child elements."},{question:"How does React handle event delegation?",answer:"React uses a synthetic event system that delegates all events to the root DOM node (or document). Instead of attaching listeners to each JSX element, React attaches one listener per event type at the root. This improves performance and ensures consistent event behavior across browsers."},{question:"Does event delegation work with shadow DOM?",answer:"Partially. Events inside a shadow DOM retarget — event.target is scoped to the shadow root. The event still bubbles out of the shadow DOM but with a retargeted target. Delegation from a parent outside the shadow root works, but checking event.target requires understanding shadow DOM boundaries."},{question:"Can event delegation cause performance issues?",answer:"Generally, delegation is faster than individual listeners. However, if the parent has thousands of children and the delegation check (<code>event.target.matches</code>) is expensive, there can be overhead. In practice, this is negligible for most applications. The main concern is if you delegate to <code>document</code> or <code>document.body</code> for all events — every click on the page runs the check."},{question:"How do you handle event delegation with event.stopPropagation()?",answer:"If a child calls <code>event.stopPropagation()</code>, the event stops bubbling and the parent's delegated listener never fires. To stop propagation without breaking delegation for other listeners on the same element, use <code>event.stopImmediatePropagation()</code> only when absolutely necessary. Generally, avoid stopping propagation in delegated setups."}],diagramSvg:`<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="680" height="380" rx="10" fill="var(--bg-card)" stroke="var(--border)"/><text x="350" y="40" text-anchor="middle" fill="#e8eaed" font-size="15" font-weight="bold">Event Delegation — Bubbling Flow</text><rect x="80" y="70" width="240" height="55" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="200" y="93" text-anchor="middle" fill="#6c9fff" font-size="12" font-weight="bold">&lt;ul id="list"&gt; (Listener)</text><text x="200" y="112" text-anchor="middle" fill="#9aa0b0" font-size="10">event.currentTarget = &lt;ul&gt;</text><rect x="140" y="145" width="120" height="45" rx="4" fill="#1a1d28" stroke="#fbbf24" stroke-width="1"/><text x="200" y="165" text-anchor="middle" fill="#fbbf24" font-size="11">&lt;li&gt;Item 1&lt;/li&gt;</text><rect x="140" y="200" width="120" height="45" rx="4" fill="#1a1d28" stroke="#fbbf24" stroke-width="1"/><text x="200" y="220" text-anchor="middle" fill="#fbbf24" font-size="11">&lt;li&gt;Item 2&lt;/li&gt;</text><rect x="140" y="255" width="120" height="45" rx="4" fill="#1a1d28" stroke="#e5c07b" stroke-width="2"/><text x="200" y="275" text-anchor="middle" fill="#e5c07b" font-size="11">&lt;li class=&gt;Item 3&lt;/li&gt;</text><text x="200" y="290" text-anchor="middle" fill="#f87171" font-size="10">event.target (clicked)</text><line x1="200" y1="300" x2="200" y2="115" stroke="#98c379" stroke-width="1.5" stroke-dasharray="4" marker-end="none"/><text x="350" y="340" text-anchor="middle" fill="#98c379" font-size="11">↑ event bubbles from target → listener fires on &lt;ul&gt;</text><text x="350" y="362" text-anchor="middle" fill="#9aa0b0" font-size="11">listener checks: event.target.matches('.item')</text></svg>`,codeExamples:[{title:"Basic Event Delegation — List Items",useCase:"Single listener for all list items",code:`<!-- HTML -->
<ul id="todo-list">
  <li>Learn JavaScript</li>
  <li>Practice React</li>
  <li>Build a project</li>
</ul>

<script>
  const list = document.getElementById('todo-list');

  list.addEventListener('click', function(event) {
    const li = event.target.closest('li');
    if (!li) return; // Ignore clicks on the ul itself

    li.classList.toggle('completed');
    console.log('Toggled:', li.textContent);
  });

  // Dynamically add a new item — no new listener needed!
  const newItem = document.createElement('li');
  newItem.textContent = 'Write tests';
  list.appendChild(newItem);
<\/script>`,description:"One click listener handles all li elements including dynamically added ones. event.target.closest('li') ensures we only act on li clicks, ignoring clicks on the ul or whitespace."},{title:"Delegation with Data Attributes",useCase:"Action buttons in a list",code:`<!-- HTML -->
<div id="actions">
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="export">Export</button>
</div>

<script>
  document.getElementById('actions').addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const action = btn.dataset.action;
    switch (action) {
      case 'save':   console.log('Saving...'); break;
      case 'delete': console.log('Deleting...'); break;
      case 'export': console.log('Exporting...'); break;
      default:       console.log('Unknown action:', action);
    }
  });
<\/script>`,description:"Single listener handles multiple action buttons via data-action attributes. Adding a new button with a data-action automatically works without new code."},{title:"Delegation with Multiple Event Types",useCase:"Mouse enter/leave on cards",code:`<div id="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

<script>
  const grid = document.getElementById('card-grid');

  // mouseenter/mouseleave don't bubble — use mouseover/mouseout
  grid.addEventListener('mouseover', function(e) {
    const card = e.target.closest('.card');
    if (card) card.style.background = '#2a2f45';
  });

  grid.addEventListener('mouseout', function(e) {
    const card = e.target.closest('.card');
    if (card) card.style.background = '';
  });

  // Or use a single listener and check event.type:
  // grid.addEventListener('mouseover', handler);
  // grid.addEventListener('mouseout', handler);
  // function handler(e) { ... }
<\/script>`,description:"mouseover/mouseout bubble (unlike mouseenter/mouseleave). Using closest() ensures we only respond when the event target is inside a card."},{title:"Delegation for Form Validation",useCase:"Real-time input validation",code:`<form id="signup-form">
  <input name="email" type="email" placeholder="Email" />
  <input name="password" type="password" placeholder="Password" />
  <input name="age" type="number" placeholder="Age" />
</form>

<script>
  const form = document.getElementById('signup-form');

  form.addEventListener('input', function(e) {
    const input = e.target;
    if (input.tagName !== 'INPUT') return;

    const name = input.name;
    const value = input.value;
    let error = '';

    if (name === 'email' && value && !value.includes('@')) {
      error = 'Invalid email';
    } else if (name === 'password' && value.length < 6) {
      error = 'Min 6 characters';
    } else if (name === 'age' && (value < 1 || value > 120)) {
      error = 'Invalid age';
    }

    input.style.borderColor = error ? '#f87171' : '#34d399';
    // Display error message in a sibling element
    const errorEl = input.nextElementSibling;
    if (errorEl) errorEl.textContent = error;
  });
<\/script>`,description:"One input listener handles validation for all form fields. Each input's name attribute determines the validation rules, keeping the code DRY."},{title:"Document-Level Delegation for Dynamic Elements",useCase:"Handling events on elements not yet in DOM",code:`// Delegate at document level to catch events on elements
// added by third-party scripts or dynamic imports

document.addEventListener('click', function(e) {
  // Handle clicks on dynamically loaded modal close buttons
  const closeBtn = e.target.closest('.modal-close');
  if (closeBtn) {
    const modal = closeBtn.closest('.modal');
    if (modal) modal.style.display = 'none';
    return;
  }

  // Handle clicks on dynamic 'load more' buttons
  const loadMore = e.target.closest('.load-more');
  if (loadMore) {
    fetchMoreData();
    return;
  }
});

// Later, some dynamic content is added:
setTimeout(() => {
  const div = document.createElement('div');
  div.innerHTML = '<button class="load-more">Load More</button>';
  document.body.appendChild(div);
  // The button works automatically via delegation!
}, 2000);`,description:"Document-level delegation catches events even on elements not in the DOM when the page loaded. Useful for handling events from dynamic content or third-party widgets."}],mcqQuestions:[{question:"What is event delegation?",options:["Attaching events to every child element","Attaching one listener to a parent to handle events for all children","Removing all event listeners from a page","Creating custom events"],answer:1,explanation:"Event delegation places a single listener on a parent element and uses event bubbling to handle events from all children, including dynamically added ones."},{question:"Which property do you use in event delegation to identify the clicked child?",options:["event.currentTarget","event.target","event.srcElement","event.delegateTarget"],answer:1,explanation:"event.target is the element that triggered the event. In delegation, you check event.target to identify which child was interacted with."},{question:"Which event phase does event delegation rely on?",options:["Capturing phase","Target phase","Bubbling phase","None of the above"],answer:2,explanation:"Delegation relies on the bubbling phase — events travel from the target up through ancestors, allowing a parent listener to catch them."},{question:"Which of these events does NOT bubble?",options:["click","keydown","focus","submit"],answer:2,explanation:"focus and blur do not bubble. Use focusin/focusout as bubbling alternatives."},{question:"What does event.target.matches('.item') do?",options:["Checks if event.target has a class named 'item'","Checks if event.target matches the CSS selector '.item'","Finds the closest ancestor matching '.item'","Adds the class 'item' to event.target"],answer:1,explanation:"matches() checks if the element matches the given CSS selector. It returns true if the element has that class, id, tag, etc."},{question:"What is the difference between matches() and closest()?",options:["They are identical","matches() checks only the element; closest() walks up the DOM tree","closest() checks only the element; matches() walks up","Both walk up the DOM tree but closest() returns an array"],answer:1,explanation:"matches() checks only the element it's called on. closest() walks up from the element through ancestors to find a match."},{question:"What happens to event delegation if a child calls stopPropagation()?",options:["Nothing — delegation still works","The event stops bubbling and the parent listener never fires","The event is re-dispatched","The parent's listener fires but event.target is null"],answer:1,explanation:"stopPropagation() prevents the event from bubbling further up the DOM tree, so the delegated parent listener never receives it."},{question:"What is the memory benefit of event delegation?",options:["It uses less memory because the parent element is smaller","One listener uses less memory than many individual listeners","It prevents memory leaks automatically","There is no memory benefit"],answer:1,explanation:"Each event listener is a JavaScript function object held in memory. Delegation reduces the count from N listeners to 1, saving memory proportionally."},{question:"How would you handle clicks on dynamically added buttons using delegation?",options:["Add listeners after each dynamic addition","Attach a listener to a static parent and check event.target","Use setInterval to check for new buttons","Dynamically added buttons cannot have event listeners"],answer:1,explanation:"Attach one listener to a static parent element. The listener catches events from all children, including dynamically added ones, via bubbling."},{question:"When should you NOT use event delegation?",options:["For handling clicks on many similar elements","For events that don't bubble (focus, blur)","For dynamically generated content","For optimizing memory usage"],answer:1,explanation:"Events like focus and blur don't bubble, so delegation via bubbling won't work. Use capture phase or non-bubbling alternatives."}]};export{e as event_delegation};
