const e={id:"devops-orchestration",title:"Orchestration",difficulty:"advanced",estimatedMinutes:20,tldr:["Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and management of containerized applications. It orchestrates containers across clusters of machines.","Key concepts: Pods (smallest deployable unit — one or more containers), Services (stable network endpoint), Deployments (declarative updates), ConfigMaps/Secrets (configuration), Namespaces (logical isolation).","Architecture: Control plane (API server, etcd, scheduler, controller manager) manages the cluster. Worker nodes (kubelet, kube-proxy, container runtime) run application pods.","Kubernetes provides self-healing (restart failed containers), auto-scaling (horizontal pod autoscaler), rolling updates (zero-downtime deployments), service discovery (DNS), and load balancing."],laymanDefinition:"Kubernetes is like an automated air traffic control system for a city of containers. Each container is a plane, and the cluster is the airport system spanning multiple terminals (nodes). The control tower (API server) tells planes where to park (scheduling), monitors their status (health checks), reroutes them if a terminal closes (node failure), and adds more planes during rush hour (auto-scaling). Planes can find each other via a phonebook (service discovery) and talk securely. The entire system runs with minimal human intervention.",deepDive:[{heading:"Kubernetes Architecture",text:"Control plane: API server (kube-apiserver — all cluster operations go through it), etcd (distributed key-value store — cluster state), scheduler (kube-scheduler — assigns pods to nodes), controller manager (kube-controller-manager — runs controllers: node, replication, endpoints, service account). Worker nodes: kubelet (node agent — manages pods), kube-proxy (network proxy — load balancing), container runtime (Docker, containerd, CRI-O). Kubectl: CLI for interacting with API server."},{heading:"Pods and Containers",text:"Pod: smallest deployable unit — one or more containers sharing network namespace (IP, port space), storage volumes, and lifecycle. Sidecar pattern: helper container (logging, proxy, config sync) alongside main container in same pod. Init containers: run to completion before app containers start (setup tasks). Static pods: managed directly by kubelet without API server. Pod lifecycle: Pending → Running → Succeeded/Failed. Readiness probe: when is pod ready to serve traffic. Liveness probe: when should pod be restarted."},{heading:"Deployments and ReplicaSets",text:"Deployment: declarative update for pods and ReplicaSets. Strategies: RollingUpdate (gradual replacement — default), Recreate (kill all then create — downtime). Rollback: revert to previous revision (kubectl rollout undo). ReplicaSet: ensures desired number of pod replicas. Typically managed by Deployment, not created directly. Horizontal Pod Autoscaler (HPA): automatically scales replicas based on CPU/memory/custom metrics. Vertical Pod Autoscaler (VPA): adjusts resource requests/limits."},{heading:"Services and Networking",text:"Service: stable network endpoint for a set of pods. Types: ClusterIP (internal-only — default), NodePort (port on each node), LoadBalancer (cloud load balancer), ExternalName (DNS alias). Ingress: HTTP/HTTPS routing — path-based, host-based routing, TLS termination, rate limiting. Network policies: firewall rules between pods (allow/deny traffic based on labels). Service mesh (Istio, Linkerd): advanced traffic management, mTLS, observability beyond basic K8s networking."},{heading:"Kubernetes Storage and Configuration",text:"Volumes: storage that outlives pod restarts. Types: emptyDir (ephemeral), hostPath (node storage), PersistentVolume (PV — cluster storage), PersistentVolumeClaim (PVC — storage request). StorageClass: dynamic provisioning. ConfigMap: inject configuration as env vars or files. Secrets: similar to ConfigMap but base64-encoded and more secure. Use Sealed Secrets or External Secrets Operator for GitOps. CSI (Container Storage Interface): pluggable storage drivers (EBS, EFS, GCE PD, Azure Disk)."}],interviewAnswer:"Kubernetes is the standard platform for container orchestration. Use Deployments for stateless apps, StatefulSets for stateful apps. Use Services for stable networking and Ingress for HTTP routing. Implement health probes (readiness, liveness). Use HPA for auto-scaling. Use Namespaces for environment isolation. Follow security best practices: network policies, RBAC, pod security admission. For GitOps, use ArgoCD or Flux.",interviewQuestions:[{question:"What is Kubernetes?",answer:"Open-source platform for automating deployment, scaling, and management of containerized applications."},{question:"What is a Pod?",answer:"The smallest deployable unit in Kubernetes — one or more containers sharing network and storage."},{question:"What is a Deployment?",answer:"A Kubernetes resource for declarative updates to pods and ReplicaSets with rollback support."},{question:"What is a Service?",answer:"A stable network endpoint for accessing a set of pods with load balancing and service discovery."},{question:"What is an Ingress?",answer:"A resource for HTTP/HTTPS routing — path/host-based routing, TLS termination, rate limiting."},{question:"What is etcd in Kubernetes?",answer:"A distributed key-value store that stores all cluster state and configuration data."},{question:"What is the difference between a readiness and liveness probe?",answer:"Readiness: when pod is ready to serve traffic. Liveness: when pod should be restarted."},{question:"What is a ConfigMap?",answer:"A Kubernetes resource for injecting configuration data as environment variables or files."},{question:"What is the Horizontal Pod Autoscaler?",answer:"Automatically scales the number of pod replicas based on CPU, memory, or custom metrics."},{question:"What is RBAC in Kubernetes?",answer:"Role-Based Access Control — defines who can perform what operations on which resources."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Orchestration</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Master</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Control plane</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Worker</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Runs pods</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Pod</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Container group</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Kubernetes</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Container orchestration</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Service</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Network endpoint</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Ingress</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">HTTP routing</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">K8s Orchestration</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Automated container deployment, </text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">scaling, management. Self-healin</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">g, rolling updates, service disc</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">overy, load balancing.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Kubernetes: Container orchestration. Pods, deploym</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ents, services, ingress, auto-scaling, self-healin</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">g, config management.</text></svg>',codeExamples:[{title:"Kubernetes Deployment with Rolling Update",useCase:"Zero-downtime deploy.",code:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0  # Zero downtime
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: app
          image: myapp:v2
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /healthz
              port: 8080
            initialDelaySeconds: 15
            periodSeconds: 20
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "500m"
              memory: "256Mi"`,description:"Kubernetes Deployment with rolling update strategy, zero-downtime, health probes, and resource limits."},{title:"Kubernetes Service and Ingress",useCase:"Expose application externally.",code:`apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-service
                port:
                  number: 80
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls`,description:"Kubernetes Service (ClusterIP) and Ingress with TLS termination and path-based routing to the service."},{title:"Kubernetes ConfigMap and Secrets",useCase:"Configuration management.",code:`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: production
  API_URL: https://api.example.com
  app.yaml: |
    database:
      host: db-service
      port: 5432

---
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  DB_PASSWORD: s3cret!pass
  API_KEY: sk-abc123

---
# Using ConfigMap and Secret in a Pod
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app
      envFrom:
        - configMapRef:
            name: app-config
        - secretRef:
            name: app-secrets
      volumeMounts:
        - name: config
          mountPath: /etc/config
          readOnly: true
  volumes:
    - name: config
      configMap:
        name: app-config`,description:"Kubernetes ConfigMap and Secret with Pod injection via environment variables and volume mounts."},{title:"Kubernetes HPA and Cluster Autoscaler",useCase:"Auto-scaling configuration.",code:`# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80

# Cluster Autoscaler (cloud-specific)
# Automatically adds/removes worker nodes
# Requires cloud provider integration
# AWS: https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler`,description:"Kubernetes HPA scaling based on CPU and memory utilization targets with min/max replica limits."},{title:"Kubernetes RBAC",useCase:"Access control configuration.",code:`# ServiceAccount, Role, RoleBinding
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-sa
  namespace: production

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: app-role
rules:
  - apiGroups: [""]
    resources: ["pods", "services"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "watch", "create", "update"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: app-role-binding
  namespace: production
subjects:
  - kind: ServiceAccount
    name: app-sa
    namespace: production
roleRef:
  kind: Role
  name: app-role
  apiGroup: rbac.authorization.k8s.io`,description:"Kubernetes RBAC with ServiceAccount, Role (pods/services read, deployments write), and RoleBinding."}],mcqQuestions:[{question:"What is the smallest deployable unit in Kubernetes?",options:["Container","Pod","Service","Deployment"],answer:1,explanation:"A Pod is the smallest deployable unit — one or more containers sharing resources."},{question:"What is the purpose of a Kubernetes Service?",options:["Run containers","Provide stable network endpoint for pods","Store configuration","Manage secrets"],answer:1,explanation:"Services provide stable network endpoints and load balancing for pod groups."},{question:"What is the difference between readiness and liveness probes?",options:["Same thing","Readiness checks if pod can serve traffic, liveness checks if pod should be restarted","Liveness is for startup only","Readiness is for shutdown only"],answer:1,explanation:"Readiness determines traffic routing. Liveness determines restart necessity."},{question:"What does etcd store in Kubernetes?",options:["Application data","Cluster state and configuration","Container images","User credentials"],answer:1,explanation:"etcd is the cluster database storing all state and configuration."},{question:"What is the Horizontal Pod Autoscaler?",options:["Scales nodes","Scales pod replicas based on metrics","Scales storage","Manages network traffic"],answer:1,explanation:"HPA automatically adjusts the number of pod replicas based on resource utilization or custom metrics."},{question:"What is an Ingress in Kubernetes?",options:["Internal service","HTTP/HTTPS routing with host/path-based rules","Pod networking","Storage volume"],answer:1,explanation:"Ingress routes external HTTP/HTTPS traffic to internal services with rules for path, host, and TLS."},{question:"Orchestration — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Orchestration — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Orchestration — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Orchestration — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_orchestration};
