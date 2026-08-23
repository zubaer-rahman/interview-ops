const e={id:"react-portal",title:"React Portal",difficulty:"intermediate",estimatedMinutes:20,tldr:["Portals render a component into a different DOM node outside the parent components DOM hierarchy.","ReactDOM.createPortal(children, domNode) is the API - children render at domNode while maintaining React context and event bubbling.","Portals are commonly used for modals, tooltips, dropdowns, and toast notifications that need to break out of overflow: hidden or z-index stacking contexts.","Event propagation works through the React tree, not the DOM tree - events from portal content bubble to the portal parents React ancestors."],laymanDefinition:"Portals are like having a secret tunnel that lets a component escape its parent container and appear anywhere in the HTML document. Even though the portal content renders somewhere else in the DOM (like inside <body> for a modal overlay), from React's perspective it is still a child of the component that created the portal. This means: (1) The portal content can break out of CSS constraints like overflow: hidden, z-index stacking, or clipped parent containers. (2) Context providers (theme, auth) still work because the portal lives in the React tree as a child. (3) Events bubble up through the React component hierarchy, not the DOM hierarchy.",deepDive:[{heading:"Portal DOM Architecture",text:"ReactDOM.createPortal accepts two arguments: children (renderable React node) and domNode (a DOM element, typically document.body). The portal renders children inside domNode, bypassing the parent DOM hierarchy. This means: (1) The portaled content is not a child of the parent DOM element. (2) CSS styles that affect the parent (overflow: hidden, opacity, transform, z-index) do not affect the portal. (3) The portal is appended to domNode as a sibling to the root React mount. (4) Multiple portals can render into the same domNode - they are ordered by render order. (5) The portal is removed from the DOM when the parent component unmounts. React manages the portal lifecycle: mount the component -> portal created in DOM; unmount -> portal removed."},{heading:"Event Bubbling Through Portal Boundaries",text:'This is the most important and often misunderstood portal behavior. Events from portal content bubble up through the React component tree, NOT the DOM tree. Example: A modal (rendered via portal to document.body) contains a button that triggers an onClick on the parent component. Even though the button is a DOM child of <body> and the parent is nested deep in <div id="root">, the onClick from the portal button bubbles up through the React component hierarchy and triggers the parents handler normally. This is because React uses its own synthetic event system that follows React component hierarchy, not DOM hierarchy. This behavior is crucial for event delegation, context providers, and redux connect() to work correctly across portal boundaries.'},{heading:"Portal Use Cases and Patterns",text:"(1) Modals/Dialogs - overlay needs to break out of parent z-index and overflow contexts. Render portal to document.body, position fixed, backdrop behind. (2) Tooltips - positioned relative to trigger element but must not be clipped by overflow: hidden ancestors. Use portal + absolute/fixed positioning calculated from trigger rect. (3) Dropdown menus - same as tooltips, must break out of overflow constraints and stacking contexts. (4) Toast notifications - render all toasts into a single portal container for consistent positioning and stacking. (5) Floating elements (context menus, date pickers) - need to escape parent boundaries for proper display. (6) Full-screen elements (lightboxes, onboarding overlays) - must cover the entire viewport regardless of parent constraints."},{heading:"Portal Accessibility Considerations",text:'(1) Focus management - when a modal opens via portal, focus must be trapped inside the modal (use focus-trap-react or manual focus management). (2) ARIA attributes - modals should have role="dialog", aria-modal="true", aria-labelledby pointing to the title. (3) Keyboard navigation - Escape key should close the modal; Tab should cycle through focusable elements within the modal. (4) Screen reader announcements - use aria-live regions for dynamic content changes. (5) Ensure the portal container element is accessible (not hidden from screen readers). (6) For tooltips/dropdowns, ensure proper aria-describedby relationships between the trigger and the portal content. (7) Test with keyboard navigation and screen readers.'},{heading:"Portal Performance and Edge Cases",text:"(1) Rendering a portal causes work in two separate parts of the DOM - React handles this efficiently but be mindful of layout thrashing. (2) Avoid creating portal containers dynamically on every render - create the container element once (e.g., outside the component or with useRef + useEffect). (3) Multiple siblings rendering portals into the same container can cause ordering issues - use explicit ordering or unique containers. (4) Hydration - portals work during hydration but the server-rendered HTML must include the portal container element. (5) Testing - portal content renders outside the normal DOM tree. In React Testing Library, portal content is still queryable because RTL queries the entire document. (6) Error boundaries wrap the portal-creating component, not the portal content DOM location."}],interviewAnswer:'ReactDOM.createPortal renders children into a different DOM node while maintaining React context and event bubbling. It is essential for modals, tooltips, and dropdowns that must escape CSS constraints like overflow: hidden or z-index contexts. Events from portal content bubble through the React component tree (not DOM tree), so context providers and event handlers in the parent still work. Portals support all React features including context, refs, and hydration. For accessibility, implement focus trapping and ARIA attributes (role="dialog", aria-modal) in modal portals. Create portal containers statically to avoid unnecessary DOM operations.',interviewQuestions:[{question:"What problem do portals solve?",answer:"They allow components to render outside their parents DOM hierarchy while maintaining React context and event propagation. This is essential for elements that must break out of CSS constraints like overflow: hidden or limited z-index stacking contexts."},{question:"How does event bubbling work with portals?",answer:"Events bubble through the React component tree, not the DOM tree. A click on portal content will bubble up to the portal-creating components ancestors in the React tree, even though the portal content is a DOM child of a different node."},{question:"What is the syntax for creating a portal?",answer:'ReactDOM.createPortal(children, domNode). children is the React node(s) to render and domNode is the target DOM element (e.g., document.getElementById("modal-root") or document.body).'},{question:"Do context providers work through portals?",answer:"Yes. Portals maintain React tree hierarchy for context. A context.Provider wrapping the portal-creating component will provide values to the portal content, even though the portal renders in a different part of the DOM."},{question:"What are the common accessibility requirements for portal modals?",answer:'Focus trapping (Tab cycles within modal), role="dialog" and aria-modal="true", Escape key to close, aria-labelledby pointing to the modal title, and proper focus restoration when the modal closes.'},{question:"How do you test components that use portals?",answer:'React Testing Library queries the entire document, so portal content is findable. Use screen.getByRole("dialog") for modals. For positions, assert on computed styles or use data-testid. For event bubbling, simulate events on portal content and assert parent handlers fire.'},{question:"Can portals be used with server-side rendering?",answer:'Yes, but the portal container DOM node must exist in the server-rendered HTML. Create the container element in the HTML template (e.g., <div id="modal-root"></div>) so hydration can attach the portal correctly.'},{question:"What happens to portal content when the portal-creating component unmounts?",answer:"React automatically removes the portal content from the DOM. The lifecycle of the portal is tied to the creating component. Cleanup happens during the commit phase when the parent unmounts."},{question:"How do you handle multiple modals with portals?",answer:"Stack them with z-index ordering. Each modal renders its own portal. The most recently opened modal has the highest z-index. For multiple modals, manage z-index explicitly (e.g., baseZIndex + index * 100) or use a modal manager that tracks the stack."},{question:"Can you pass refs through portals?",answer:"Yes. React refs work normally with portals. If you pass a ref to an element inside portal content, the ref will point to the actual DOM node (which lives in the portal container, not the parent DOM tree)."}],diagramSvg:'<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="max-width:720px;"><defs><marker id="a" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="#6c9fff"/></marker></defs><rect x="10" y="10" width="700" height="280" rx="10" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><text x="360" y="38" fill="#e8eaed" font-size="14" font-weight="bold" text-anchor="middle">Portal DOM vs React Tree</text><rect x="30" y="55" width="200" height="35" rx="6" fill="#1a1d28" stroke="#6c9fff" stroke-width="1.5"/><text x="130" y="67.5" fill="#e8eaed" font-size="11" font-weight="bold" text-anchor="middle">React Tree</text><text x="130" y="84.5" fill="#9aa0b0" font-size="10" text-anchor="middle"><App></text><text x="30" y="110" fill="#f59e0b" font-size="11" text-anchor="start"><ModalButton></text><text x="30" y="130" fill="#9aa0b0" font-size="10" text-anchor="start">  <Modal> -> createPortal</text><text x="30" y="150" fill="#9aa0b0" font-size="10" text-anchor="start">  </Modal></text><text x="30" y="170" fill="#f59e0b" font-size="11" text-anchor="start"></ModalButton></text><text x="350" y="78" fill="start" font-size="#6c9fff" text-anchor="middle">DOM Tree:</text><text x="350" y="110" fill="#9aa0b0" font-size="11" text-anchor="start"><div id="root"></text><text x="350" y="130" fill="#9aa0b0" font-size="10" text-anchor="start">  <ModalButton>...</ModalButton></text><text x="350" y="150" fill="#9aa0b0" font-size="10" text-anchor="start"></div></text><text x="350" y="170" fill="#9aa0b0" font-size="11" text-anchor="start"><div id="modal-root"></text><text x="350" y="190" fill="#f59e0b" font-size="10" text-anchor="start">  <Modal>...</Modal>  <-- Portal renders here</text><text x="350" y="210" fill="#9aa0b0" font-size="10" text-anchor="start"></div></text><text x="30" y="230" fill="#34d399" font-size="10" text-anchor="start">React context flows through React tree</text><text x="30" y="250" fill="#34d399" font-size="10" text-anchor="start">Events bubble through React hierarchy</text></svg>',codeExamples:[{title:"Modal Component with Portal",useCase:"Full-screen modal with backdrop, focus trap, and keyboard handling",code:`function Modal({ isOpen, onClose, title, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.5)"
      }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 400 }}>
        <h2 id="modal-title">{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Example">
        <p>This content is rendered via portal.</p>
      </Modal>
      <div id="modal-root" />
    </div>
  );
}`,description:"The modal renders into #modal-root which is outside the main app DOM hierarchy. Clicking the backdrop closes the modal. Escape key closes the modal. ARIA attributes provide accessibility. The portal container div is defined in JSX but could also be in the HTML template."},{title:"Tooltip Using Portal",useCase:"Position tooltip relative to trigger without overflow clipping",code:`function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const show = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 });
    }
    setVisible(true);
  };

  return (
    <>
      <span ref={triggerRef} onMouseEnter={show} onMouseLeave={() => setVisible(false)}>
        {children}
      </span>
      {visible && ReactDOM.createPortal(
        <div
          role="tooltip"
          style={{
            position: "fixed", top: pos.top, left: pos.left,
            transform: "translateX(-50%)",
            padding: "6px 12px", background: "#333", color: "#fff",
            borderRadius: 4, fontSize: 13, zIndex: 9999,
            whiteSpace: "nowrap"
          }}
        >
          {text}
        </div>,
        document.body
      )}
    </>
  );
}

// Usage - tooltip wont be clipped by parent containers:
<div style={{ overflow: "hidden", height: 50 }}>
  <Tooltip text="Detailed explanation here">
    <span>Hover me</span>
  </Tooltip>
</div>`,description:"Even though the trigger is inside an overflow: hidden container, the tooltip renders via portal into document.body and is fully visible. The position is calculated from the trigger elements bounding rect on hover."}],mcqQuestions:[{question:"What does ReactDOM.createPortal do?",options:["Creates a new React root component","Renders children into a different DOM node while preserving React context and event bubbling","Creates a new Redux store","Duplicates a component in the DOM"],answer:1,explanation:"createPortal renders React children into a specified DOM node outside the parent hierarchy while maintaining React tree semantics."},{question:"How do events bubble from portal content?",options:["Through the DOM tree only","Through the React component tree, not the DOM tree","Events do not bubble from portals","Through both DOM and React trees simultaneously"],answer:1,explanation:"Events from portal content bubble through the React hierarchy. A click on portal content triggers event handlers on React ancestors of the portal-creating component."},{question:"Which CSS constraints do portals help escape?",options:["Font-family rules","overflow: hidden, z-index stacking contexts, transform, and opacity","Color inheritance","Margin collapsing"],answer:1,explanation:"Portals render outside the parent DOM element, escaping CSS constraints that clip or transform the parent container."},{question:"Do React context providers work through portals?",options:["No, context stops at portal boundaries","Yes, context flows through React tree, not DOM tree","Only if the portal container is inside the provider","Only with useContext, not Context.Consumer"],answer:1,explanation:"Context is propagated through the React component hierarchy, which is maintained across portal boundaries."},{question:"What happens to a portal when its parent unmounts?",options:["The portal remains in the DOM forever","React automatically removes the portal content from the DOM","The portal moves to the document root","The portal throws an error"],answer:1,explanation:"The portal lifecycle is tied to the creating component. When the component unmounts, React unmounts the portal content and removes it from the DOM."},{question:"What is the recommended DOM node for modal portals?",options:["Inside the parent component",'document.body or a dedicated <div id="modal-root">',"The window object","The document head"],answer:1,explanation:'A dedicated container element (e.g., <div id="modal-root">) or document.body is recommended. The container should be outside the main app root for proper z-index and overflow stacking.'}]};export{e as react_portal};
