export const k8s_container_runtime = {
  "id": "k8s-container-runtime",
  "title": "Container Runtime",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-container-runtime.json",
  "interviewAnswer": "The container runtime is the software that actually runs your containers. While Kubernetes manages the orchestra, the container runtime plays the instruments. It pulls container images from registries, creates container filesystems from layered images, runs containers using cgroups and namespaces, and manages the container lifecycle. Kubernetes uses the Container Runtime Interface (CRI) to support multiple runtimes — like containerd and CRI-O — without needing to modify Kubernetes itself.",
  "tldr": [
    "The container runtime is the software responsible for pulling images, creating containers, and managing their lifecycle on each node",
    "Kubernetes uses CRI (Container Runtime Interface) as an abstraction layer, allowing any OCI-compliant runtime to be used interchangeably",
    "containerd is the most common CRI runtime (default since Kubernetes 1.24), with CRI-O as a lightweight alternative focused on Kubernetes",
    "The runtime handles image management (pulling, caching, garbage collection), container isolation (namespaces, cgroups), and filesystem (overlayfs)",
    "Runtimes can integrate with gVisor or Kata Containers for enhanced security isolation between containers on the same host"
  ],
  "deepDive": [
    {
      "heading": "Container Runtime Interface (CRI)",
      "text": "CRI defines a gRPC API with two services: RuntimeService (managing Pod sandboxes and containers) and ImageService (managing images). Kubelet acts as the client, the runtime (containerd, CRI-O) acts as the server. This abstraction means you can swap runtimes by changing the kubelet configuration without recompiling Kubernetes. The CRI shim (e.g., containerd's CRI plugin) translates CRI calls into runtime-specific operations."
    },
    {
      "heading": "containerd Architecture and Features",
      "text": "containerd is a graduated CNCF project that manages the complete container lifecycle. It handles image transfer (pull/push from registries), image storage (content-addressable storage, deduplication), container execution (runC), and network interfaces. It exposes both a gRPC API (CRI plugin for Kubernetes) and a CLI (ctr). containerd's architecture has core daemon (containerd), namespace management, snapshot drivers (overlayfs, devmapper), and metadata storage (boltdb)."
    },
    {
      "heading": "Advanced Runtime Security with gVisor and Kata",
      "text": "Standard runc containers share the host kernel, which can be a security concern for multi-tenant environments. gVisor provides an application kernel (Sentry) that intercepts syscalls between the container and host kernel, adding a security layer. Kata Containers run each container in a lightweight VM with its own kernel. Both provide stronger isolation at the cost of higher resource overhead and reduced compatibility."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is the container runtime in Kubernetes?",
      "answer": "The container runtime is the software that manages container execution — pulling images, creating containers, managing filesystem layers, and running containers using kernel features like cgroups and namespaces."
    },
    {
      "question": "What is CRI?",
      "answer": "CRI (Container Runtime Interface) is a plugin interface that allows kubelet to use different container runtimes without recompilation. It defines a gRPC API for container and image management."
    },
    {
      "question": "What is the default container runtime in Kubernetes 1.24+?",
      "answer": "containerd is the default and recommended runtime since Kubernetes 1.24, when Docker support was removed from kubelet."
    },
    {
      "question": "What is the difference between containerd and Docker?",
      "answer": "Docker is a complete container platform with CLI, API, and management tools. containerd is a focused container runtime that handles the core container lifecycle. containerd is lighter, has less overhead, and is designed specifically for integration with orchestrators like Kubernetes."
    },
    {
      "question": "What is CRI-O?",
      "answer": "CRI-O is a lightweight CRI implementation specifically built for Kubernetes. It uses runc (or any OCI runtime) and supports container image formats from any container registry. It is an alternative to containerd."
    },
    {
      "question": "How does the runtime handle container isolation?",
      "answer": "Containers use Linux namespaces (PID, Network, Mount, UTS, IPC, User, Cgroup) for process isolation and cgroups for resource limits (CPU, memory, I/O). The combined kernel features prevent containers from seeing or interfering with each other."
    },
    {
      "question": "What is an OCI runtime specification?",
      "answer": "The Open Container Initiative (OCI) defines standards for container runtimes and images. runC is the reference implementation. runtimes that comply with OCI can be used with any CRI-compliant system."
    },
    {
      "question": "What is gVisor?",
      "answer": "gVisor is a container runtime sandbox that provides an additional security layer by intercepting application syscalls and handling them in a user-space kernel (Sentry), preventing direct host kernel access from containers."
    },
    {
      "question": "How does image pulling work in the runtime?",
      "answer": "The runtime pulls images layer by layer from the registry. It uses content-addressable storage and caches layers locally. Layers are unpacked into the snapshotter (e.g., overlayfs). The runtime supports imagePullPolicy for caching behavior."
    },
    {
      "question": "What is the role of runC?",
      "answer": "runC is the OCI reference implementation of the container runtime spec. It creates and runs containers based on OCI bundles. Both containerd and CRI-O use runC (or alternatives like crun) as the low-level runtime."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the default container runtime for Kubernetes 1.24+?",
      "options": [
        "Docker",
        "containerd",
        "CRI-O",
        "rkt"
      ],
      "answer": 1,
      "explanation": "containerd is the default runtime since Kubernetes 1.24 deprecated and removed Docker support."
    },
    {
      "question": "What does the CRI acronym stand for?",
      "options": [
        "Container Run Integration",
        "Container Runtime Interface",
        "Custom Runtime Integration",
        "Container Registry Interface"
      ],
      "answer": 1,
      "explanation": "CRI stands for Container Runtime Interface — the gRPC API between kubelet and container runtimes."
    },
    {
      "question": "Which two services does the CRI gRPC API define?",
      "options": [
        "PodService and ContainerService",
        "RuntimeService and ImageService",
        "NetworkService and StorageService",
        "ExecService and LogService"
      ],
      "answer": 1,
      "explanation": "CRI defines RuntimeService (Pod sandboxes and containers) and ImageService (image management)."
    },
    {
      "question": "What provides additional security isolation for multi-tenant containers?",
      "options": [
        "Seccomp",
        "AppArmor",
        "gVisor or Kata Containers",
        "Pod security policy"
      ],
      "answer": 2,
      "explanation": "gVisor and Kata Containers provide strong security isolation by running containers in user-space kernels or lightweight VMs."
    },
    {
      "question": "Which command lists images in containerd?",
      "options": [
        "docker images",
        "ctr images list",
        "crictl images",
        "nerdctl images"
      ],
      "answer": 2,
      "explanation": "crictl is the CRI-compatible CLI for managing containers and images on a node. crictl images lists cached images."
    },
    {
      "question": "What is the low-level OCI runtime used by both containerd and CRI-O?",
      "options": [
        "Docker",
        "runC",
        "gVisor",
        "Kata"
      ],
      "answer": 1,
      "explanation": "runC is the reference OCI runtime implementation used by both containerd and CRI-O for actual container execution."
    },
    {
      "question": "Which filesystem technology does containerd use for image layers?",
      "options": [
        "ext4",
        "overlayfs",
        "btrfs",
        "ZFS"
      ],
      "answer": 1,
      "explanation": "containerd uses overlayfs (OverlayFS) as the default snapshot driver for efficient image layer management."
    },
    {
      "question": "What is the port for containerd's CRI gRPC socket?",
      "options": [
        "/var/run/docker.sock",
        "/var/run/containerd/containerd.sock",
        "/run/cri-o/crio.sock",
        "/var/run/cri.sock"
      ],
      "answer": 1,
      "explanation": "containerd listens on /var/run/containerd/containerd.sock for CRI gRPC requests from kubelet."
    },
    {
      "question": "What Linux kernel feature limits container CPU usage?",
      "options": [
        "namespaces",
        "cgroups",
        "seccomp",
        "capabilities"
      ],
      "answer": 1,
      "explanation": "cgroups (control groups) limit and account for resource usage including CPU, memory, and I/O."
    },
    {
      "question": "What is the purpose of the kubelet --container-runtime flag?",
      "options": [
        "Select the network plugin",
        "Select the container runtime endpoint",
        "Select the storage driver",
        "Select the proxy mode"
      ],
      "answer": 1,
      "explanation": "The --container-runtime flag specifies the CRI socket endpoint, e.g., remote for containerd or CRI-O."
    }
  ],
  "codeExamples": [
    {
      "title": "Check Container Runtime on a Node",
      "useCase": "Verify which runtime is installed",
      "code": "kubectl get nodes -o wide\nkubectl describe node <node-name> | findstr \"Container Runtime\"",
      "description": "Shows the container runtime version running on each node."
    },
    {
      "title": "List Images with crictl",
      "useCase": "View cached container images on a node",
      "code": "crictl images\ncrictl image fsusage",
      "description": "Lists all cached container images and their disk usage (run on the node)."
    },
    {
      "title": "Inspect a Running Container",
      "useCase": "Debug container state and configuration",
      "code": "crictl ps\ncrictl inspect <container-id>",
      "description": "Lists running containers and inspects a specific container's details."
    },
    {
      "title": "View containerd Logs",
      "useCase": "Troubleshoot image pull or runtime errors",
      "code": "sudo journalctl -u containerd --no-pager -n 100\ncrictl logs <container-id>",
      "description": "Shows containerd service logs for troubleshooting runtime issues."
    },
    {
      "title": "Run a Container with crictl",
      "useCase": "Test runtime directly without Kubernetes",
      "code": "cat <<EOF | crictl runp -\n{\n  \"metadata\": {\n    \"name\": \"test-sandbox\"\n  }\n}\nEOF\ncrictl pods",
      "description": "Creates a Pod sandbox using crictl directly to test the runtime independently."
    }
  ],
  "laymanDefinition": "The container runtime is the software that actually runs your containers. While Kubernetes manages the orchestra, the container runtime plays the instruments. It pulls container images from registries, creates container filesystems from layered images, runs containers using cgroups and namespaces, and manages the container lifecycle. Kubernetes uses the Container Runtime Interface (CRI) to support multiple runtimes — like containerd and CRI-O — without needing to modify Kubernetes itself.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Container Runtime</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Container Runtime</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">The container runtime is the software responsible </text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">for pulling images, creating containers, and manag</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ing their lifecycle on each node</text></svg>"
};
