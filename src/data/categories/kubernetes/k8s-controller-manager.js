export const k8s_controller_manager = {
  "id": "k8s-controller-manager",
  "title": "kube-controller-manager",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-controller-manager.json",
  "interviewAnswer": "The kube-controller-manager is the cluster's autopilot. It runs dozens of controller processes that constantly watch the current state of the cluster and make changes to match the desired state. If a Pod dies, the Replication Controller creates a replacement. If a Node goes down, the Node Controller marks it unreachable. Think of controllers as tireless workers who never sleep — they continuously compare \"what is\" with \"what should be\" and make corrections.",
  "tldr": [
    "The Controller Manager bundles multiple controllers into a single binary, each responsible for a specific aspect of cluster management",
    "Key controllers: Node Controller (node health), Replication Controller (Pod count), Endpoint Controller (Service endpoints), Service Account Controller (service account creation)",
    "Controllers use the informer pattern — they watch the API Server for changes and maintain a local cache for efficient reconciliation",
    "The Controller Manager runs with leader election in HA setups — only one instance is active, others stand by",
    "Custom controllers can be built using the controller-runtime library and Operator SDK to extend Kubernetes behavior"
  ],
  "deepDive": [
    {
      "heading": "Core Controllers and Their Functions",
      "text": "The Controller Manager includes: Node Controller (monitors node health via heartbeats, manages node status/eviction), Replication Controller (ensures correct number of Pod replicas for ReplicationController resources), ReplicaSet controller (same for ReplicaSet), Deployment controller (manages rollout and rollback of Deployments via ReplicaSets), StatefulSet controller (manages stateful application Pods with stable identities), DaemonSet controller (ensures one Pod per node), Job controller (runs batch Jobs to completion), CronJob controller (schedules Jobs on a cron timetable), EndpointSlice controller (manages EndpointSlice objects for Services), and ServiceAccount controller (creates default service accounts per namespace)."
    },
    {
      "heading": "Controller Pattern: Informers, Work Queues, and Reconcilers",
      "text": "Controllers follow a standard pattern. Informers watch the API Server for resource changes and update a local cache. Events are added to a work queue for processing. The reconciler function reads the desired state from the object spec, reads the current state from the local cache, and takes action to converge them. This pattern is implemented by the controller-runtime library and is the foundation for building custom operators."
    },
    {
      "heading": "Cloud Controller Manager Integration",
      "text": "Cloud-controller-manager runs controllers specific to cloud providers: Node Controller (manages node labeling, IP addresses, and instance termination), Route Controller (manages cloud network routes for Pod CIDR), and Service Controller (manages cloud Load Balancers for Services of type LoadBalancer). Cloud providers implement their own cloud-controller-manager binaries."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is the kube-controller-manager?",
      "answer": "It is a binary that runs Kubernetes control loops — processes that watch cluster state and make changes to move actual state toward desired state."
    },
    {
      "question": "How does the Deployment controller work?",
      "answer": "The Deployment controller watches Deployment objects and manages ReplicaSets. For a rollout, it creates a new ReplicaSet with the updated Pod template and gradually scales it up while scaling down the old ReplicaSet."
    },
    {
      "question": "What does the Node Controller do?",
      "answer": "The Node Controller monitors node health via periodic heartbeats (NodeStatus updates from kubelet). If a node stops reporting, it marks conditions Unknown, then after the eviction timeout, evicts Pods from the unreachable node."
    },
    {
      "question": "What is the difference between ReplicationController and ReplicaSet?",
      "answer": "ReplicaSet is the successor to ReplicationController with richer label selector support (matchLabels and matchExpressions). ReplicationController is deprecated."
    },
    {
      "question": "What controllers handle batch workloads?",
      "answer": "The Job controller runs Pods to completion and ensures success. The CronJob controller creates Job objects on a schedule defined by a cron expression."
    },
    {
      "question": "How does the Service controller work?",
      "answer": "For Services of type LoadBalancer, the Service controller (in cloud-controller-manager) provisions a cloud load balancer and updates the Service with the external IP. For type ClusterIP or NodePort, the EndpointSlice controller manages endpoint discovery."
    },
    {
      "question": "What happens when a controller crashes?",
      "answer": "If the controller-manager Pod crashes, the leader election system detects the heartbeat timeout and another instance takes over. Reconciliation loops resume within seconds."
    },
    {
      "question": "Can you write custom controllers?",
      "answer": "Yes. Custom controllers (operators) can be written using the controller-runtime library and client-go. They watch custom resources (CRDs) and reconcile desired state. Popular examples include Prometheus Operator, Cert-Manager, and Ingress Controllers."
    },
    {
      "question": "How does the DaemonSet controller work?",
      "answer": "The DaemonSet controller watches for Node additions and ensures a Pod is running on every node (or a subset via nodeSelector). When a node is removed, the DaemonSet Pod is also removed."
    },
    {
      "question": "What is the end-to-end reconcile loop?",
      "answer": "1) Informer detects a resource change (e.g., Deployment updated). 2) Event is added to work queue. 3) Reconciler reads desired state (3 replicas of nginx:1.20). 4) Checks current state (2 replicas running nginx:1.19). 5) Creates a new ReplicaSet and initiates a rolling update. 6) Updates resource status."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which controller ensures the correct number of Pod replicas?",
      "options": [
        "Deployment controller",
        "ReplicaSet controller",
        "Node controller",
        "Job controller"
      ],
      "answer": 1,
      "explanation": "The ReplicaSet controller ensures the specified number of Pod replicas are running at all times."
    },
    {
      "question": "What happens when a Node stops sending heartbeats?",
      "options": [
        "Nothing",
        "Node Controller marks it unhealthy and evicts Pods",
        "kube-scheduler restarts the node",
        "API Server deletes the node"
      ],
      "answer": 1,
      "explanation": "The Node Controller marks the node ConditionUnknown and eventually evicts Pods after the eviction timeout."
    },
    {
      "question": "Which controller manages rollout of new versions?",
      "options": [
        "ReplicaSet controller",
        "Deployment controller",
        "StatefulSet controller",
        "DaemonSet controller"
      ],
      "answer": 1,
      "explanation": "The Deployment controller manages rolling updates and rollbacks by coordinating ReplicaSets."
    },
    {
      "question": "How does leader election work in the Controller Manager?",
      "options": [
        "etcd lease",
        "Kubernetes Endpoints/Lease objects",
        "DNS voting",
        "Manual failover"
      ],
      "answer": 1,
      "explanation": "Controller Manager uses Lease or Endpoints objects in the kube-system namespace for leader election."
    },
    {
      "question": "Which controller creates default service accounts?",
      "options": [
        "Token controller",
        "ServiceAccount controller",
        "RBAC controller",
        "Namespace controller"
      ],
      "answer": 1,
      "explanation": "The ServiceAccount controller ensures each namespace has a default ServiceAccount."
    },
    {
      "question": "What is the cloud-controller-manager responsible for?",
      "options": [
        "Pod scheduling",
        "Cloud provider-specific controllers",
        "Container runtime",
        "Network policy"
      ],
      "answer": 1,
      "explanation": "Cloud controller manager handles cloud-specific resources like load balancers, routes, and node management."
    },
    {
      "question": "Which controller ensures one Pod per node for logging agents?",
      "options": [
        "Deployment",
        "StatefulSet",
        "DaemonSet",
        "Job"
      ],
      "answer": 2,
      "explanation": "DaemonSet ensures one Pod per node, ideal for logging agents, monitoring, and CNI plugins."
    },
    {
      "question": "What is an operator in Kubernetes?",
      "options": [
        "CLI tool",
        "Custom controller managing complex applications",
        "API Server plugin",
        "Scheduling plugin"
      ],
      "answer": 1,
      "explanation": "An operator is a custom controller that manages complex applications using Custom Resource Definitions."
    },
    {
      "question": "Which binary contains most built-in controllers?",
      "options": [
        "kube-apiserver",
        "kube-controller-manager",
        "kube-scheduler",
        "kubelet"
      ],
      "answer": 1,
      "explanation": "kube-controller-manager contains most built-in controllers including Node, ReplicaSet, Deployment, and others."
    },
    {
      "question": "What does the CronJob controller do?",
      "options": [
        "Runs Jobs continuously",
        "Runs Jobs on a schedule",
        "Runs one-time Jobs",
        "Monitors Job status"
      ],
      "answer": 1,
      "explanation": "CronJob creates Job objects on a cron-defined schedule, enabling periodic batch processing."
    }
  ],
  "codeExamples": [
    {
      "title": "List Running Controllers",
      "useCase": "See which controllers are active",
      "code": "kubectl get pods -n kube-system -l component=kube-controller-manager\nkubectl logs -n kube-system kube-controller-manager-<node> | head -50",
      "description": "Lists Controller Manager Pods and views recent controller activity logs."
    },
    {
      "title": "Check Controller Manager Metrics",
      "useCase": "Monitor controller performance",
      "code": "kubectl get --raw /metrics -n kube-system | findstr controller | findstr work_queue",
      "description": "Scrapes controller work queue metrics showing queue depth and processing latency."
    },
    {
      "title": "Scale a Deployment (triggers controller)",
      "useCase": "Watch Deployment controller respond",
      "code": "kubectl scale deployment nginx --replicas=5\nkubectl get pods -l app=nginx --watch",
      "description": "Scales a Deployment and watches the controller create new ReplicaSet Pods."
    },
    {
      "title": "Create a Custom Resource and Controller",
      "useCase": "Extend Kubernetes with custom logic",
      "code": "apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: myapps.example.com\nspec:\n  group: example.com\n  names:\n    kind: MyApp\n    plural: myapps\n  scope: Namespaced\n  versions:\n  - name: v1\n    served: true\n    storage: true\n    schema:\n      openAPIV3Schema:\n        type: object\n        properties:\n          spec:\n            type: object\n            properties:\n              replicas:\n                type: integer",
      "description": "Defines a custom resource for a custom controller to manage."
    },
    {
      "title": "Watch Controller Reconciliation",
      "useCase": "Observe the reconcile loop in action",
      "code": "kubectl delete pod <pod-name>\nkubectl get pods -w",
      "description": "Delete a Pod and watch the ReplicaSet controller immediately create a replacement."
    }
  ],
  "laymanDefinition": "The kube-controller-manager is the cluster's autopilot. It runs dozens of controller processes that constantly watch the current state of the cluster and make changes to match the desired state. If a Pod dies, the Replication Controller creates a replacement. If a Node goes down, the Node Controller marks it unreachable. Think of controllers as tireless workers who never sleep — they continuously compare \"what is\" with \"what should be\" and make corrections.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">kube-controller-manager</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">kube-controller-manager</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">The Controller Manager bundles multiple controller</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">s into a single binary, each responsible for a spe</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">cific aspect of cluster management</text></svg>"
};
