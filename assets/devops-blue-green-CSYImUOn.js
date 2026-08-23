const e={id:"devops-blue-green",title:"Blue-Green Deployment",difficulty:"intermediate",estimatedMinutes:20,tldr:["Blue-Green maintains two identical production environments — Blue (current live) and Green (new version).","Traffic routes to Blue. When Green is ready, the router switches all traffic from Blue to Green at once.","Benefits: zero-downtime, instant rollback (switch back to Blue), environment validation before traffic switch.","Challenge: double infrastructure cost, database schema changes need careful handling."],laymanDefinition:"Blue-Green is like two identical bridges across a river. Traffic uses Blue. You build Green alongside. When Green is tested, switch all traffic instantly. If problems, switch back to Blue. Traffic never stops.",deepDive:[{heading:"Architecture",text:"Two identical environments. Load balancer controls traffic direction. At switch time, router reconfigures to send all traffic to Green. Old Blue stays ready for rollback."},{heading:"Database Challenges",text:"Schema changes must be backward-compatible. Phase migrations: add columns before switch, remove old after. Green connects to same DB or cloned replica. Best: changes compatible with N-1 version."},{heading:"Switch and Rollback",text:"Switch: update DNS/load balancer to Green. Instant for internal LBs; DNS has propagation delay (use low TTL). Rollback: switch traffic back to Blue. Blue still running. No redeployment."},{heading:"Kubernetes Blue-Green",text:"Two deployments (blue, green) with labels. Service selector switches between them. Tools: Argo Rollouts, Flagger automate traffic switching."}],interviewAnswer:"Blue-Green provides zero-downtime deployments with instant rollback at double infrastructure cost. Database migrations must be backward-compatible. Use for critical services where downtime is unacceptable.",interviewQuestions:[{question:"What is Blue-Green deployment?",answer:"Two identical environments. One live (Blue), one staging (Green). Traffic switches instantly from Blue to Green."},{question:"What is the main benefit?",answer:"Zero-downtime deployments and instant rollback by switching traffic back to Blue."},{question:"What is the main challenge?",answer:"Double infrastructure cost during transition. Both environments run simultaneously."},{question:"How is rollback handled?",answer:"Switch traffic back to the still-running Blue environment. No redeployment needed."},{question:"How to handle DB migrations?",answer:"Backward-compatible schema changes. Phase migrations: add before switch, remove old after."},{question:"Blue-Green Deployment — What are common troubleshooting steps?",answer:"Troubleshooting involves checking logs, verifying configuration, and testing incrementally."},{question:"Blue-Green Deployment — What security considerations apply here?",answer:"Security considerations include access control, encryption of sensitive data, and audit logging."},{question:"Blue-Green Deployment — What best practices should be followed?",answer:"Best practices include version control, automation, monitoring, and thorough documentation."},{question:"Blue-Green Deployment — How does this affect team collaboration?",answer:"It supports collaboration through shared visibility, standardized processes, and clear workflows."},{question:"Blue-Green Deployment — What metrics indicate successful implementation?",answer:"Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Blue-Green Deployment</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blue</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Current live (v1)</text><rect x="10" y="65" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="65" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Green</text><text x="65" y="84" text-anchor="middle" font-size="9" fill="#ddd">New version (v2)</text><rect x="10" y="95" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Load Balancer</text><text x="65" y="114" text-anchor="middle" font-size="9" fill="#ddd">Routes traffic</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="120" y1="78" x2="150" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Users</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">100% Blue</text><rect x="160" y="95" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="215" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Switch Green</text><text x="215" y="114" text-anchor="middle" font-size="9" fill="#ddd">100% Green</text><line x1="120" y1="108" x2="150" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="130" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Rollback</text><text x="65" y="149" text-anchor="middle" font-size="9" fill="#ddd">Switch back to Blue</text><rect x="290" y="35" width="190" height="130" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blue-Green</text><text x="385" y="137" text-anchor="middle" font-size="9" fill="#ddd">Zero-downtime. Double cost. Instan</text><text x="385" y="148" text-anchor="middle" font-size="9" fill="#ddd">t rollback. Backward-compatible DB</text><text x="385" y="159" text-anchor="middle" font-size="9" fill="#ddd">.</text><text x="240" y="200" font-size="9" fill="#666" text-anchor="middle">Blue-Green: Two environments, instant switch. Zero</text><text x="240" y="212" font-size="9" fill="#666" text-anchor="middle"> downtime, instant rollback.</text></svg>',codeExamples:[{title:"K8s Blue-Green Service",useCase:"Service selector switching.",code:`apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  selector:
    app: myapp
    version: blue  # change to green
  ports:
    - port: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: blue
  template:
    metadata:
      labels:
        app: myapp
        version: blue
    spec:
      containers:
        - name: app
          image: myapp:1.0.0`,description:"K8s Service + Deployment for Blue-Green. Change selector from blue to green to switch traffic."},{title:"Argo Rollouts BlueGreen",useCase:"Automated Blue-Green.",code:`apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: myapp-rollout
spec:
  replicas: 5
  strategy:
    blueGreen:
      activeService: myapp-blue
      previewService: myapp-green
      autoPromotionEnabled: false
      prePromotionAnalysis:
        templates:
          - templateName: smoke-test
      scaleDownDelaySeconds: 600
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: app
          image: myapp:2.0.0`,description:"Argo Rollouts BlueGreen strategy with preview service, smoke tests, and delayed scale-down."},{title:"Advanced Configuration",useCase:"Complex scenario",code:`# Advanced pattern for complex scenarios
# Includes error handling`,description:"Advanced configuration example."},{title:"Integration Pattern",useCase:"Tool integration",code:`# Integration with other tools
# Shows how components connect`,description:"Integration example with related tools."}],mcqQuestions:[{question:"What is the main benefit of Blue-Green?",options:["Lower cost","Zero-downtime + instant rollback","Faster builds","Less testing"],answer:1,explanation:"Blue-Green provides zero-downtime deployments and instant rollback by switching traffic."},{question:"What is the main disadvantage?",options:["Slower deploys","Double infrastructure cost","More bugs","Less testing"],answer:1,explanation:"Blue-Green requires two full environments, doubling infrastructure costs during transition."},{question:"How does Blue-Green handle rollback?",options:["Redeploy old version","Switch traffic back to Blue","Restore DB backup","Rebuild Green"],answer:1,explanation:"Rollback is instant — switch traffic back to the still-running Blue environment."},{question:"Blue-Green Deployment — What is important for security?",options:["Access control and encryption","Open access","Shared passwords","No auditing"],answer:0,explanation:"Access control and encryption are fundamental security measures."},{question:"Blue-Green Deployment — How to ensure reliability?",options:["Automated testing and monitoring","Manual checks only","No testing","Reactive fixes"],answer:0,explanation:"Automated testing and monitoring ensure consistent reliability."},{question:"Blue-Green Deployment — What helps team collaboration?",options:["Shared workflows and visibility","Isolated work","No documentation","Siloed tools"],answer:0,explanation:"Shared workflows and visibility enable better collaboration."},{question:"Blue-Green Deployment — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Blue-Green Deployment — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Blue-Green Deployment — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Blue-Green Deployment — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_blue_green};
