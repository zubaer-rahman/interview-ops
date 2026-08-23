const e={id:"tm-canary-routing",title:"Canary Routing",difficulty:"advanced",estimatedMinutes:20,tldr:["Canary routing gradually exposes a new service version to a small subset of users before full rollout.",'Named after "canary in a coal mine" � if canary shows problems, rollout is stopped or rolled back.',"Key components: traffic splitting, monitoring/observability, automated analysis, automatic rollback.","Platforms: Kubernetes (Flagger, Argo Rollouts), service mesh (Istio, Linkerd), cloud (AWS CodeDeploy)."],laymanDefinition:"Canary routing is like testing a new restaurant recipe on a few customers first. You serve the new dish to 5% of tables. If they love it and no one gets sick (no errors), you increase to 25%, then 50%, then the full menu. If someone complains, you immediately stop and switch back.",deepDive:[{heading:"Canary Analysis Metrics",text:"Error rate: 5xx should not increase. Latency: p50, p95, p99 should not degrade. CPU/Memory: no spikes. Business metrics: conversion rate, revenue. Compare canary vs baseline. Statistical significance needed."},{heading:"Progressive Delivery Pipeline",text:"Build ? Deploy canary (1%) ? Smoke tests ? Analyze ? Auto-promote if healthy ? 25% ? Analyze ? 50% ? 100%. Each stage has gates. Auto-rollback if any gate fails."},{heading:"A/B Testing vs Canary",text:"A/B: compare business metrics (conversion). Usually 50/50. Runs days/weeks. Canary: progressive rollout for safety. Starts small (1%). Primary metric is system health. Minutes to hours."},{heading:"Canary Challenges",text:"Stateful services: backward-compatible DB schema. Enough traffic for statistical significance. Real-time monitoring. Coordinating across microservices. Session affinity for consistent user experience."}],interviewAnswer:"Canary routing is the safest deployment strategy. Start at 1%, monitor metrics, auto-promote or rollback. Requires traffic splitting, real-time metrics, automated analysis, and rollback. Combine with feature flags. Ensure backward-compatible DB changes.",interviewQuestions:[{question:"What is canary routing?",answer:"Gradually exposing a new version to a small subset of users for validation."},{question:"Why called canary?",answer:"From \\'canary in a coal mine\\' � early warning system for problems."},{question:"Typical canary starting percentage?",answer:"1-5% of traffic."},{question:"What metrics are monitored?",answer:"Error rate, latency (p50/p95/p99), CPU/memory, business metrics."},{question:"What triggers auto-rollback?",answer:"Error rate above threshold, latency degradation, resource spikes."},{question:"What is progressive delivery?",answer:"Automated staged rollout with analysis gates at each step."},{question:"Canary vs A/B testing difference?",answer:"Canary: safety-focused, small start. A/B: business-focused, often 50/50."},{question:"What is Flagger?",answer:"Kubernetes operator automating canary with Istio/Linkerd."},{question:"What is Argo Rollouts?",answer:"Kubernetes controller providing canary and blue-green strategies."},{question:"Why must DB changes be backward compatible?",answer:"Old and new versions run simultaneously � both must work with schema."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Canary Routing</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">All Traffic</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">100%</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="140" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="260" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Canary Controller</text><text x="260" y="54" text-anchor="middle" font-size="9" fill="#ddd">Flagger / Argo</text><line x1="330" y1="48" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="60" x2="190" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="190" y1="82" x2="190" y2="105" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stable v1</text><text x="430" y="54" text-anchor="middle" font-size="9" fill="#ddd">90%</text><rect x="380" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="430" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Canary v2</text><text x="430" y="89" text-anchor="middle" font-size="9" fill="#ddd">10%</text><rect x="10" y="70" width="170" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="95" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Metrics: errors<1%, latency<500ms</text><text x="95" y="89" text-anchor="middle" font-size="9" fill="#ddd">Analysis</text><rect x="10" y="105" width="170" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="95" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auto-promote: 10%?25%?50%?100%</text><text x="95" y="124" text-anchor="middle" font-size="9" fill="#ddd">Progressive</text><rect x="10" y="140" width="170" height="25" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="95" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Auto-rollback: revert to 0% canary</text><text x="95" y="159" text-anchor="middle" font-size="9" fill="#ddd">Safety</text><text x="240" y="180" font-size="9" fill="#666" text-anchor="middle">Canary Routing: Gradually shift traffic to new ver</text><text x="240" y="192" font-size="9" fill="#666" text-anchor="middle">sion � monitor, auto-rollback on failure.</text></svg>',codeExamples:[{title:"Flagger Canary (Kubernetes)",useCase:"Automated with Istio.",code:`apiVersion: flagger.app/v1beta1
kind: Canary
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: frontend
  service:
    port: 80
    hosts: [app.example.com]
  analysis:
    interval: 30s
    threshold: 5
    maxWeight: 50
    stepWeight: 5
    metrics:
    - name: request-success-rate
      thresholdRange:
        min: 99`,description:"Flagger canary with metrics-based auto-promotion or rollback."},{title:"Argo Rollouts Canary",useCase:"Analysis template.",code:`apiVersion: argoproj.io/v1alpha1
kind: Rollout
spec:
  strategy:
    canary:
      steps:
      - setWeight: 10
      - pause: { duration: 5m }
      - setWeight: 25
      - pause: { duration: 5m }
      - setWeight: 50
      - pause: { duration: 5m }
      - setWeight: 100`,description:"Argo Rollouts with step-based canary and pauses for metrics."},{title:"Canary Analysis Template (Argo)",useCase:"Prometheus metrics.",code:`apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
spec:
  metrics:
  - name: success-rate
    interval: 30s
    count: 10
    failureLimit: 3
    provider:
      prometheus:
        query: >
          sum(rate(http_requests_total{
            service="{{args.service-name}}",
            status!~"5.*"
          }[1m]))
          /
          sum(rate(http_requests_total{
            service="{{args.service-name}}"
          }[1m]))`,description:"Argo AnalysisTemplate queries Prometheus for success rate."},{title:"K8s Canary with Labels",useCase:"Service mesh canary.",code:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-v2
  labels:
    app: frontend
    version: v2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: frontend
      version: v2
  template:
    metadata:
      labels:
        app: frontend
        version: v2`,description:"Canary deployment with label-based versioning for service mesh routing."},{title:"Canary Rollback Script",useCase:"Manual rollback.",code:`#!/bin/bash
# 1. Stop canary traffic
kubectl patch virtualservice myapp -p '{"spec":...}'
# 2. Scale down canary
kubectl scale deploy frontend-v2 --replicas=0
# 3. Restore stable version
kubectl set image deploy/frontend app=myapp:stable
echo 'Canary reverted'`,description:"Manual canary rollback script � redirects traffic and scales down."}],mcqQuestions:[{question:"Primary purpose of canary routing?",options:["Improving performance","Safe deployment validation","Reducing server count","Cost savings"],answer:1,explanation:"Validates new versions safely by gradual exposure."},{question:"Typical canary starting percentage?",options:["50%","1-5%","100%","25%"],answer:1,explanation:"Starts at 1-5% to minimize impact."},{question:"Critical canary metric?",options:["Server count","Error rate","Database size","User count"],answer:1,explanation:"Error rate is primary canary health metric."},{question:"Automates canary on Kubernetes?",options:["Docker Compose","Flagger / Argo Rollouts","Helm","kubectl"],answer:1,explanation:"Flagger and Argo Rollouts automate canary deployments."},{question:"What happens when canary fails?",options:["Deployment continues","Auto-rollback to stable","Error is ignored","System restarts"],answer:1,explanation:"Auto-rollback redirects traffic back to stable."},{question:"Requirement for DB during canaries?",options:["No changes","Backward compatible","Must be rolled back","Only additions"],answer:1,explanation:"Schema must work with both old and new versions."}]};export{e as tm_canary_routing};
