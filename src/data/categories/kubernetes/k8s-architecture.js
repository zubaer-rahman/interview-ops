export const k8s_architecture = {
  "id": "k8s-architecture",
  "title": "Kubernetes Architecture",
  "difficulty": "beginner",
  "estimatedMinutes": 15,
  "file": "k8s-architecture.json",
  "interviewAnswer": "Kubernetes architecture is like the operating system for a cluster of computers. Just as an OS manages processes, memory, and devices on a single machine, Kubernetes manages containers across many machines. It has a brain called the Control Plane that makes decisions, and workers called Nodes that run the actual applications. The Control Plane components (API Server, Scheduler, Controller Manager, etcd) coordinate everything, while each Node runs a kubelet agent that follows the Control Plane instructions.",
  "tldr": [
    "Kubernetes follows a master-worker architecture with a Control Plane and Worker Nodes forming the cluster backbone",
    "The Control Plane runs global decisions — scheduling, scaling, responding to cluster events via controllers",
    "Worker Nodes host Pods and communicate with the Control Plane through the kubelet agent",
    "etcd stores the entire cluster state as a distributed key-value store, ensuring consistency and high availability",
    "The API Server is the single entry point for all cluster operations, exposing REST endpoints for users and components"
  ],
  "deepDive": [
    {
      "heading": "Control Plane Components",
      "text": "The Control Plane consists of several components: kube-apiserver exposes the Kubernetes API, kube-scheduler assigns Pods to Nodes, kube-controller-manager runs controllers that handle routine tasks (node health, replication, endpoint management), and etcd stores cluster state. These components can run on dedicated master nodes or be deployed for high availability across multiple machines."
    },
    {
      "heading": "Worker Node Architecture",
      "text": "Each Worker Node runs three essential components: kubelet (the primary node agent that registers the node with the cluster and manages Pods), kube-proxy (maintains network rules for Service connectivity), and a container runtime (like containerd or CRI-O) that pulls images and runs containers. Nodes report their status and resource usage back to the Control Plane periodically."
    },
    {
      "heading": "Declarative Model and Reconciliation",
      "text": "Kubernetes uses a declarative model — you specify the desired state (e.g., \"run 3 replicas of nginx\") in YAML or JSON, and controllers continuously reconcile actual state toward desired state. If a Pod crashes, the ReplicaSet controller detects the mismatch and creates a replacement. This self-healing mechanism is the core architectural pattern that makes Kubernetes resilient."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What are the main components of Kubernetes architecture?",
      "answer": "Kubernetes architecture has two main parts: Control Plane (API Server, Scheduler, Controller Manager, etcd) and Worker Nodes (kubelet, kube-proxy, container runtime). The Control Plane manages the cluster, while Nodes run the actual workloads."
    },
    {
      "question": "What is the role of kube-apiserver?",
      "answer": "The API Server is the front-end of the Control Plane. It validates and processes RESTful API requests, authenticates users, and persists cluster state to etcd. Every interaction with Kubernetes goes through the API Server."
    },
    {
      "question": "How does kube-scheduler work?",
      "answer": "The Scheduler watches for newly created Pods and assigns them to suitable Nodes based on resource requirements, constraints, affinity rules, and data locality. It considers factors like CPU/memory availability, taints/tolerations, and pod affinity."
    },
    {
      "question": "What is etcd and why is it important?",
      "answer": "etcd is a distributed, consistent key-value store that holds the entire cluster state. It uses the Raft consensus algorithm for reliability. If etcd goes down, the cluster cannot reconcile state changes, though existing workloads continue running."
    },
    {
      "question": "What does kubelet do on each node?",
      "answer": "Kubelet is the primary node agent that registers the node, watches for Pod assignments from the API Server, ensures containers are running and healthy, and reports node/Pod status back to the Control Plane."
    },
    {
      "question": "How does Kubernetes handle networking between Pods?",
      "answer": "Kubernetes requires a flat network where every Pod gets a unique IP and can communicate with any other Pod without NAT. kube-proxy on each node manages iptables/IPVS rules for Service traffic routing, and CNI plugins (Calico, Flannel) implement the actual network fabric."
    },
    {
      "question": "What is the role of kube-controller-manager?",
      "answer": "The Controller Manager runs various controllers that watch cluster state and make changes to drive actual state toward desired state. Key controllers include Node Controller, Replication Controller, Endpoint Controller, and Service Account Controller."
    },
    {
      "question": "How does Kubernetes achieve high availability?",
      "answer": "HA is achieved by running multiple Control Plane replicas (multiple API Servers, Scheduler, Controller Manager with leader election) and a multi-node etcd cluster. Worker Nodes can scale horizontally, and workloads use multiple replicas distributed across nodes."
    },
    {
      "question": "What is a container runtime in Kubernetes?",
      "answer": "The container runtime is the software that actually runs containers. Kubernetes uses the CRI (Container Runtime Interface) to support multiple runtimes. Common choices are containerd, CRI-O, and Docker (via cri-dockerd)."
    },
    {
      "question": "Explain the difference between kubectl and kubeadm.",
      "answer": "kubectl is the CLI tool for interacting with the Kubernetes API Server (used daily by developers and admins). kubeadm is a bootstrap tool for setting up and joining Kubernetes clusters (used during cluster initialization and node joining)."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the primary role of the Kubernetes Control Plane?",
      "options": [
        "Run application containers",
        "Manage cluster state and orchestration",
        "Store application data",
        "Provide load balancing"
      ],
      "answer": 1,
      "explanation": "The Control Plane manages the cluster state, makes global decisions, and orchestrates all activities within the cluster."
    },
    {
      "question": "Which component stores the cluster state in Kubernetes?",
      "options": [
        "kube-apiserver",
        "kube-scheduler",
        "etcd",
        "kube-controller-manager"
      ],
      "answer": 2,
      "explanation": "etcd is a distributed key-value store that stores the entire cluster configuration and state persistently."
    },
    {
      "question": "What is the function of kube-scheduler?",
      "options": [
        "Expose the Kubernetes API",
        "Assign Pods to Nodes",
        "Run controllers",
        "Store cluster state"
      ],
      "answer": 1,
      "explanation": "The scheduler watches for unscheduled pods and assigns them to appropriate nodes based on constraints and resources."
    },
    {
      "question": "Which component runs on every Worker Node?",
      "options": [
        "etcd",
        "kube-controller-manager",
        "kubelet",
        "kube-scheduler"
      ],
      "answer": 2,
      "explanation": "Kubelet runs on every node and is responsible for managing Pods and containers on that node."
    },
    {
      "question": "What does kube-proxy handle?",
      "options": [
        "Container runtime",
        "Network rules for Services",
        "Pod scheduling",
        "Cluster state storage"
      ],
      "answer": 1,
      "explanation": "kube-proxy maintains network rules on each node, implementing Service-to-Pod traffic routing using iptables or IPVS."
    },
    {
      "question": "Which protocol does Kubernetes use for container runtime communication?",
      "options": [
        "OCI",
        "CRI",
        "CNI",
        "CSI"
      ],
      "answer": 1,
      "explanation": "CRI (Container Runtime Interface) is the plugin interface that allows kubelet to use different container runtimes without recompilation."
    },
    {
      "question": "How does Kubernetes achieve self-healing?",
      "options": [
        "Manual restart",
        "Controllers reconcile desired vs actual state",
        "kube-proxy detects failures",
        "etcd triggers recovery"
      ],
      "answer": 1,
      "explanation": "Controllers continuously watch cluster state and make changes to match the desired state, automatically recovering from failures."
    },
    {
      "question": "What is the default container runtime for modern Kubernetes?",
      "options": [
        "Docker",
        "containerd",
        "rkt",
        "hyperkit"
      ],
      "answer": 1,
      "explanation": "containerd is the default CRI-compliant runtime for Kubernetes 1.24+, replacing Docker as the default."
    },
    {
      "question": "Which tool is used to bootstrap a Kubernetes cluster?",
      "options": [
        "kubectl",
        "kubeadm",
        "helm",
        "minikube"
      ],
      "answer": 1,
      "explanation": "kubeadm is the official tool for bootstrapping production-ready Kubernetes clusters."
    },
    {
      "question": "What happens if etcd becomes unavailable?",
      "options": [
        "Cluster stops completely",
        "Existing workloads continue but no state changes",
        "All Pods are terminated",
        "New Pods are created automatically"
      ],
      "answer": 1,
      "explanation": "Existing workloads continue running, but the cluster cannot reconcile state, schedule new Pods, or respond to changes until etcd recovers."
    }
  ],
  "codeExamples": [
    {
      "title": "Deploy a Pod with kubectl run",
      "useCase": "Quickly start a single Pod for testing",
      "code": "kubectl run nginx-pod --image=nginx --restart=Never",
      "description": "Creates a single Pod named nginx-pod running the nginx image."
    },
    {
      "title": "View Cluster Information",
      "useCase": "Check cluster health and component status",
      "code": "kubectl cluster-info\nkubectl get componentstatuses",
      "description": "Displays the cluster Control Plane endpoints and component health."
    },
    {
      "title": "Get Node Details",
      "useCase": "Inspect worker node resources and status",
      "code": "kubectl get nodes -o wide\nkubectl describe node <node-name>",
      "description": "Lists all nodes with their status, roles, and resource capacity."
    },
    {
      "title": "Watch API Server Events",
      "useCase": "Debug scheduling or resource issues",
      "code": "kubectl get events --all-namespaces --watch",
      "description": "Streams events from the API Server showing scheduling decisions and failures."
    },
    {
      "title": "Inspect Pod Logs from Control Plane",
      "useCase": "Debug Control Plane component issues",
      "code": "kubectl logs -n kube-system kube-apiserver-<node>\nkubectl describe pod -n kube-system etcd-<node>",
      "description": "View logs of Control Plane Pods in the kube-system namespace."
    }
  ],
  "laymanDefinition": "Kubernetes architecture is like the operating system for a cluster of computers. Just as an OS manages processes, memory, and devices on a single machine, Kubernetes manages containers across many machines. It has a brain called the Control Plane that makes decisions, and workers called Nodes that run the actual applications. The Control Plane components (API Server, Scheduler, Controller Manager, etcd) coordinate everything, while each Node runs a kubelet agent that follows the Control Plane instructions.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Kubernetes Architecture</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Kubernetes Architecture</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Kubernetes follows a master-worker architecture wi</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">th a Control Plane and Worker Nodes forming the cl</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">uster backbone</text></svg>"
};
