export const k8s_kubelet = {
  "id": "k8s-kubelet",
  "title": "kubelet",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-kubelet.json",
  "interviewAnswer": "The kubelet is the node agent — it is the primary Kubernetes component running on every Worker Node. Think of it as the node's personal assistant that follows orders from the Control Plane. When the scheduler assigns a Pod to a node, kubelet is responsible for pulling the container image, starting the containers, running health checks, reporting status, and cleaning up when the Pod is deleted. Without kubelet, a node is just a server — kubelet makes it a Kubernetes node.",
  "tldr": [
    "Kubelet is the primary node agent that runs on every node and manages Pod lifecycle based on PodSpecs from the API Server",
    "It registers the node with the cluster, manages container lifecycle via CRI, runs probes (liveness, readiness, startup), and reports node/Pod status",
    "Kubelet integrates with the container runtime through the Container Runtime Interface (CRI), supporting containerd, CRI-O, and others",
    "It enforces resource limits via cgroups, manages volume mounts, handles Pod eviction under resource pressure, and collects node-level metrics",
    "Kubelet can also run static Pods from local manifest files, typically used for Control Plane components in kubeadm clusters"
  ],
  "deepDive": [
    {
      "heading": "Pod Lifecycle Management",
      "text": "When the API Server assigns a Pod to a node, kubelet creates the Pod sandbox (pause container for namespaces), pulls container images (via CRI), creates and starts containers, sets up networking (via CNI), mounts volumes, runs init containers sequentially, starts sidecar and main containers, and runs probes continuously. When a Pod needs to terminate, kubelet runs preStop hooks, sends SIGTERM, waits for grace period, then sends SIGKILL."
    },
    {
      "heading": "Node Status and Heartbeat",
      "text": "Kubelet periodically sends NodeStatus updates to the API Server containing node conditions (Ready, DiskPressure, MemoryPressure, PIDPressure), allocatable resources, running Pods list, and node addresses. The update frequency is controlled by --node-status-update-frequency (default 10s). Heartbeats are lightweight Lease objects that renew more frequently than full NodeStatus updates, reducing API Server load."
    },
    {
      "heading": "Resource Management and Pod Eviction",
      "text": "Kubelet manages node resources by reserving system-reserved and kube-reserved resources, then allocating the rest to Pods. It monitors disk pressure (eviction thresholds like 10% free on rootfs), memory pressure (eviction threshold), and PID pressure. When thresholds are exceeded, kubelet evicts Pods in priority order: BestEffort first, then Burstable, then Guaranteed. Key thresholds include memory.available, nodefs.available, nodefs.inodesFree, and imagefs.available."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is the kubelet?",
      "answer": "The kubelet is the primary node agent that runs on every Kubernetes node. It manages Pods, containers, and ensures they are running and healthy."
    },
    {
      "question": "How does kubelet communicate with the API Server?",
      "answer": "Kubelet communicates with the API Server using TLS client certificates. It watches for Pod assignments, reports node and Pod status, and responds to requests like exec, logs, and port-forward."
    },
    {
      "question": "What is the Container Runtime Interface (CRI)?",
      "answer": "CRI is a plugin interface that allows kubelet to use different container runtimes without recompilation. It defines gRPC APIs for kubelet to manage containers and images."
    },
    {
      "question": "What probes does kubelet support?",
      "answer": "Kubelet runs three types of probes: Liveness (restart container if fails), Readiness (remove from Service if fails), and Startup (delays liveness/readiness for slow-starting containers)."
    },
    {
      "question": "What happens when kubelet crashes?",
      "answer": "Existing containers continue running, but no new Pods are scheduled on the node, health checks stop, and the node eventually becomes NotReady. kubelet must be restarted (typically managed by systemd as a service)."
    },
    {
      "question": "How does kubelet pull container images?",
      "answer": "Kubelet delegates image pulling to the container runtime via CRI. It supports imagePullPolicy: Always (always pull), IfNotPresent (pull only if not cached), and Never (never pull)."
    },
    {
      "question": "What is a static Pod?",
      "answer": "A static Pod is a Pod managed directly by kubelet from a YAML/JSON manifest file in the kubelet manifest directory (default /etc/kubernetes/manifests/). kubelet watches this directory and creates/deletes Pods accordingly. API Server can see static Pods but cannot manage them."
    },
    {
      "question": "What is the --max-pods flag?",
      "answer": "It sets the maximum number of Pods this kubelet will run. Default is 110. Cloud providers may set lower limits based on network interface limits per instance."
    },
    {
      "question": "How does kubelet handle volume mounting?",
      "answer": "Kubelet mounts volumes defined in the PodSpec into containers. It supports many volume types: configMap, secret, emptyDir, hostPath, persistentVolumeClaim, projected, and many more. It uses CSI for external volume drivers."
    },
    {
      "question": "What is the Pod lifecycle hook?",
      "answer": "Containers can define postStart (runs after container starts) and preStop (runs before container terminates) hooks. These can be exec (run command inside container) or HTTP (make HTTP request) actions."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which component manages the container lifecycle on a node?",
      "options": [
        "kube-apiserver",
        "kube-scheduler",
        "kubelet",
        "kube-proxy"
      ],
      "answer": 2,
      "explanation": "Kubelet is the node agent responsible for managing Pods and containers on each node."
    },
    {
      "question": "What interface does kubelet use to communicate with container runtimes?",
      "options": [
        "OCI",
        "CRI",
        "CNI",
        "CSI"
      ],
      "answer": 1,
      "explanation": "CRI (Container Runtime Interface) defines the API between kubelet and container runtimes."
    },
    {
      "question": "What happens if a liveness probe fails?",
      "options": [
        "Pod is deleted",
        "Container is restarted",
        "Pod is rescheduled",
        "Node is marked unhealthy"
      ],
      "answer": 1,
      "explanation": "A failing liveness probe causes kubelet to restart the container. Exponential backoff is applied."
    },
    {
      "question": "Where does kubelet look for static Pod manifests?",
      "options": [
        "/etc/kubernetes/",
        "/etc/kubernetes/manifests/",
        "/var/lib/kubelet/",
        "/etc/default/"
      ],
      "answer": 1,
      "explanation": "The default static Pod manifest directory is /etc/kubernetes/manifests/."
    },
    {
      "question": "What is the default --max-pods value for kubelet?",
      "options": [
        "50",
        "110",
        "250",
        "Unlimited"
      ],
      "answer": 1,
      "explanation": "The default maximum number of Pods per node is 110."
    },
    {
      "question": "Which QoS class gets evicted first under memory pressure?",
      "options": [
        "Guaranteed",
        "Burstable",
        "BestEffort",
        "System"
      ],
      "answer": 2,
      "explanation": "BestEffort Pods (no resource requests or limits) are evicted first under resource pressure."
    },
    {
      "question": "What protocol does kubelet use to serve metrics?",
      "options": [
        "HTTP",
        "HTTPS",
        "gRPC",
        "Unix socket"
      ],
      "answer": 1,
      "explanation": "Kubelet serves metrics and the read-only API over HTTPS on port 10250 by default."
    },
    {
      "question": "What is the role of the pause container in a Pod?",
      "options": [
        "Run main application",
        "Hold network namespaces",
        "Monitor health",
        "Proxy traffic"
      ],
      "answer": 1,
      "explanation": "The pause container holds the network and PID namespace for the Pod, allowing other containers to share them."
    },
    {
      "question": "How does kubelet enforce CPU limits?",
      "options": [
        "cgroups",
        "nice values",
        "cpulimit",
        "task sets"
      ],
      "answer": 0,
      "explanation": "Kubelet uses cgroups (control groups) to enforce CPU and memory limits for containers."
    },
    {
      "question": "What is the NodeStatus update frequency default?",
      "options": [
        "5s",
        "10s",
        "30s",
        "60s"
      ],
      "answer": 1,
      "explanation": "The default --node-status-update-frequency is 10 seconds."
    }
  ],
  "codeExamples": [
    {
      "title": "Check Kubelet Logs",
      "useCase": "Troubleshoot node-level Pod issues",
      "code": "Get-Content /var/log/kubelet.log -Tail 100\nkubectl logs --tail=50 kubelet-<node> -n kube-system",
      "description": "View recent kubelet logs for debugging Pod scheduling and runtime issues."
    },
    {
      "title": "View Kubelet Configuration",
      "useCase": "Check kubelet flags and settings",
      "code": "kubectl describe node <node-name> | findstr -A10 \"Conditions\"\nkubectl get --raw /api/v1/nodes/<node-name>/proxy/configz",
      "description": "Shows the running kubelet configuration and node conditions."
    },
    {
      "title": "Check Node Resource Pressure",
      "useCase": "Identify resource pressure triggers",
      "code": "kubectl describe node <node-name> | findstr -A5 \"Conditions\"\nkubectl top node <node-name>",
      "description": "Checks node conditions for DiskPressure, MemoryPressure, or PIDPressure."
    },
    {
      "title": "Restart Kubelet",
      "useCase": "Apply kubelet config changes or recover from crash",
      "code": "sudo systemctl status kubelet\nsudo systemctl restart kubelet",
      "description": "Restarts the kubelet service (requires SSH access to the node)."
    },
    {
      "title": "Port Forward via Kubelet API",
      "useCase": "Debug Pod without kubectl port-forward",
      "code": "kubectl get --raw /api/v1/namespaces/default/pods/<pod>/proxy/port/8080\nkubectl exec <pod> -- env",
      "description": "Uses kubelet proxy to access Pod endpoints directly."
    }
  ],
  "laymanDefinition": "The kubelet is the node agent — it is the primary Kubernetes component running on every Worker Node. Think of it as the node's personal assistant that follows orders from the Control Plane. When the scheduler assigns a Pod to a node, kubelet is responsible for pulling the container image, starting the containers, running health checks, reporting status, and cleaning up when the Pod is deleted. Without kubelet, a node is just a server — kubelet makes it a Kubernetes node.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">kubelet</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">kubelet</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Kubelet is the primary node agent that runs on eve</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ry node and manages Pod lifecycle based on PodSpec</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">s from the API Server</text></svg>"
};
