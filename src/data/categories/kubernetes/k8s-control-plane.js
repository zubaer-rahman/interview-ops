export const k8s_control_plane = {
  "id": "k8s-control-plane",
  "title": "Control Plane",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-control-plane.json",
  "interviewAnswer": "The Control Plane is the brain of the Kubernetes cluster. It makes all global decisions — what to run, where to run it, and how to keep everything healthy. You can think of it like an air traffic control tower: it sees all the planes (Pods), knows where they should go, and coordinates their movements. The Control Plane includes the API Server (the communication hub), Scheduler (who goes where), Controller Manager (watching and fixing), and etcd (remembering everything).",
  "tldr": [
    "The Control Plane manages the cluster by making global decisions about scheduling, scaling, and responding to failures",
    "Core components: kube-apiserver (REST API gateway), kube-scheduler (Pod placement), kube-controller-manager (reconciliation loops), and etcd (state storage)",
    "Control Plane components are typically run on dedicated master nodes to isolate them from application workloads",
    "Production deployments run multiple Control Plane replicas with leader election for high availability",
    "Cloud-managed Kubernetes (EKS, AKS, GKE) abstracts the Control Plane, letting users focus on application workloads"
  ],
  "deepDive": [
    {
      "heading": "Control Plane Components in Detail",
      "text": "The API Server (kube-apiserver) is the front door — every CLI, dashboard, and automation tool talks to it. The Scheduler (kube-scheduler) watches for unscheduled Pods and picks the best Node using filtering (predicates) and scoring (priorities). The Controller Manager runs separate controller processes (Node Controller, Replication Controller, Endpoint Controller, etc.) in a single binary. etcd stores all configuration, state, and metadata as key-value pairs with watch support."
    },
    {
      "heading": "High Availability Control Plane",
      "text": "For production, run 3 or 5 Control Plane nodes. API Servers sit behind a load balancer. Scheduler and Controller Manager use leader election — only one instance is active at a time. etcd runs as a Raft cluster requiring majority (N/2+1) nodes for writes. This setup survives individual node failures without cluster downtime."
    },
    {
      "heading": "Securing the Control Plane",
      "text": "Control Plane access is secured through TLS certificates (mutual TLS between components), RBAC policies (who can do what), Service Accounts (Pod identity), and admission controllers (enforce policies before object creation). The API Server can integrate with external identity providers (OIDC, LDAP) for authentication."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What components make up the Control Plane?",
      "answer": "The Control Plane consists of kube-apiserver, kube-scheduler, kube-controller-manager, and etcd. Together they manage cluster state, scheduling, and orchestration."
    },
    {
      "question": "Can the Control Plane run on Worker Nodes?",
      "answer": "Yes, in small clusters (e.g., kubeadm) the Control Plane can run on the same nodes as workloads. For production, dedicated master nodes are recommended to avoid resource contention."
    },
    {
      "question": "What happens if the Control Plane goes down?",
      "answer": "Existing workloads continue running on Worker Nodes, but you cannot deploy new Pods, scale, update, or respond to failures. The cluster becomes frozen until the Control Plane recovers."
    },
    {
      "question": "How does the Control Plane scale?",
      "answer": "Control Plane components scale vertically (more resources per instance) rather than horizontally. However, you run multiple copies for HA with the active instance handling requests."
    },
    {
      "question": "What is the difference between kube-controller-manager and cloud-controller-manager?",
      "answer": "kube-controller-manager runs controllers that are Kubernetes-core (Node, Replication, Endpoint). cloud-controller-manager runs cloud-specific controllers (Load Balancers, Routes, Volumes) integrating with providers like AWS, Azure, GCP."
    },
    {
      "question": "How does the Control Plane handle authentication?",
      "answer": "The API Server authenticates all requests using client certificates, bearer tokens, or OIDC integration. It then authorizes via RBAC or ABAC, and applies admission controllers before persisting objects."
    },
    {
      "question": "What ports does the Control Plane use?",
      "answer": "Key ports: 6443 (API Server HTTPS), 2379-2380 (etcd client/peer), 10251 (Scheduler), 10252 (Controller Manager), 10257-10259 (secure ports for Scheduler and Controller Manager in newer versions)."
    },
    {
      "question": "How do you upgrade the Control Plane?",
      "answer": "Upgrade one node at a time: drain the node, upgrade kubeadm/kubelet, upgrade kubectl, uncordon. For HA clusters, upgrade nodes sequentially to maintain quorum. kubeadm upgrade plan shows upgrade path."
    },
    {
      "question": "What is an admission controller?",
      "answer": "Admission controllers intercept requests to the API Server after authentication/authorization but before object persistence. They can validate (e.g., PodSecurity admission) or mutate (e.g., DefaultStorageClass admission) objects."
    },
    {
      "question": "How does leader election work in the Control Plane?",
      "answer": "Scheduler and Controller Manager use leader election via Kubernetes Endpoints or ConfigMaps with leases. Only the elected leader performs active work. If the leader fails, another instance takes over within seconds."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which Control Plane component is the single entry point for all API requests?",
      "options": [
        "etcd",
        "kube-scheduler",
        "kube-apiserver",
        "kube-controller-manager"
      ],
      "answer": 2,
      "explanation": "The API Server is the front-end that validates and processes all API requests to the cluster."
    },
    {
      "question": "How many Control Plane nodes are recommended for production HA?",
      "options": [
        "1",
        "2",
        "3 or 5",
        "10"
      ],
      "answer": 2,
      "explanation": "3 or 5 Control Plane nodes provide etcd quorum and fault tolerance at reasonable operational cost."
    },
    {
      "question": "What port does the API Server listen on by default?",
      "options": [
        "8080",
        "6443",
        "443",
        "8443"
      ],
      "answer": 1,
      "explanation": "The API Server listens on port 6443 for HTTPS traffic by default."
    },
    {
      "question": "Which component performs leader election in the Control Plane?",
      "options": [
        "kube-apiserver only",
        "kube-scheduler and kube-controller-manager",
        "etcd",
        "All components"
      ],
      "answer": 1,
      "explanation": "Scheduler and Controller Manager use leader election to ensure only one active instance performs work."
    },
    {
      "question": "What is the role of an admission controller?",
      "options": [
        "Authenticate users",
        "Intercept and validate/mutate API requests",
        "Schedule Pods",
        "Store cluster state"
      ],
      "answer": 1,
      "explanation": "Admission controllers intercept API requests after authentication to validate or mutate them before persistence."
    },
    {
      "question": "Which Control Plane component stores cluster state?",
      "options": [
        "kube-apiserver",
        "kube-scheduler",
        "etcd",
        "kube-controller-manager"
      ],
      "answer": 2,
      "explanation": "etcd is the distributed key-value store that persists all cluster state and configuration."
    },
    {
      "question": "What happens to existing workloads if the Control Plane fails?",
      "options": [
        "Workloads stop immediately",
        "Workloads continue running",
        "Workloads are migrated",
        "Workloads restart"
      ],
      "answer": 1,
      "explanation": "Existing workloads continue running on Worker Nodes, but no new changes can be made until the Control Plane recovers."
    },
    {
      "question": "What is the function of cloud-controller-manager?",
      "options": [
        "Manage cloud-specific controllers",
        "Schedule Pods",
        "Store cluster state",
        "Run container runtime"
      ],
      "answer": 0,
      "explanation": "cloud-controller-manager runs cloud provider-specific controllers for load balancers, storage, and routing."
    },
    {
      "question": "Which component selects the best Node for a Pod?",
      "options": [
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager",
        "kubelet"
      ],
      "answer": 1,
      "explanation": "The scheduler watches for unscheduled Pods and selects the optimal node for each Pod."
    },
    {
      "question": "What is the default etcd port for peer communication?",
      "options": [
        "2379",
        "2380",
        "6443",
        "10250"
      ],
      "answer": 1,
      "explanation": "etcd uses port 2380 for peer-to-peer communication between etcd cluster members."
    }
  ],
  "codeExamples": [
    {
      "title": "Check Control Plane Status",
      "useCase": "Verify all Control Plane components are healthy",
      "code": "kubectl get componentstatuses\nkubectl get pods -n kube-system",
      "description": "Shows health of etcd, scheduler, and controller-manager."
    },
    {
      "title": "View Control Plane Pods",
      "useCase": "Inspect Control Plane component logs and status",
      "code": "kubectl get pods -n kube-system | select-string -pattern \"apiserver|etcd|scheduler|controller\"",
      "description": "Lists Control Plane Pods in the kube-system namespace."
    },
    {
      "title": "Check API Server Health",
      "useCase": "Quick health check of the API Server",
      "code": "kubectl get --raw=/healthz\nkubectl get --raw=/livez",
      "description": "Returns health and liveness probe results from the API Server."
    },
    {
      "title": "View Scheduler Configuration",
      "useCase": "Check scheduler policies and profiles",
      "code": "kubectl describe configmap -n kube-system kube-scheduler\nkubectl get pods -n kube-system -l component=kube-scheduler -o yaml",
      "description": "Displays scheduler configuration and the running scheduler Pod spec."
    },
    {
      "title": "Check etcd Cluster Health",
      "useCase": "Verify etcd cluster quorum and health",
      "code": "kubectl exec -n kube-system etcd-<node> -- etcdctl endpoint health --cluster\nkubectl exec -n kube-system etcd-<node> -- etcdctl member list",
      "description": "Executes etcdctl inside an etcd Pod to check cluster health and member list."
    }
  ],
  "laymanDefinition": "The Control Plane is the brain of the Kubernetes cluster. It makes all global decisions — what to run, where to run it, and how to keep everything healthy. You can think of it like an air traffic control tower: it sees all the planes (Pods), knows where they should go, and coordinates their movements. The Control Plane includes the API Server (the communication hub), Scheduler (who goes where), Controller Manager (watching and fixing), and etcd (remembering everything).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Control Plane</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Control Plane</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">The Control Plane manages the cluster by making gl</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">obal decisions about scheduling, scaling, and resp</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">onding to failures</text></svg>"
};
