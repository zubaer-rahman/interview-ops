export const k8s_kube_proxy = {
  "id": "k8s-kube-proxy",
  "title": "kube-proxy",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-kube-proxy.json",
  "interviewAnswer": "kube-proxy is the network traffic director on each node. Its job is to make Services work — it translates virtual Service IP addresses into actual Pod IP addresses. When you create a Service, kube-proxy on every node programs the local firewall rules (iptables or IPVS) so that traffic to the Service's ClusterIP is load-balanced to healthy Pods. Think of it as a postal sorting facility — it reads the destination address (Service IP) and forwards the package to the right mailbox (Pod IP).",
  "tldr": [
    "kube-proxy is a network proxy that runs on every node, implementing Service-to-Pod traffic routing via iptables, IPVS, or userspace mode",
    "It watches the API Server for Service and EndpointSlice changes and updates local networking rules to reflect the current state",
    "iptables mode uses Linux netfilter rules for each Service — simple but can cause performance issues in large clusters (thousands of Services)",
    "IPVS mode uses the Linux kernel IP Virtual Server module for better scalability and performance with large numbers of Services",
    "kube-proxy also handles ClusterIP, NodePort, and LoadBalancer Service types, and manages external traffic policies (local vs cluster)"
  ],
  "deepDive": [
    {
      "heading": "kube-proxy Modes: iptables vs IPVS",
      "text": "iptables mode (default) creates an iptables rule for each Service and each backend Pod. For a cluster with 10,000 Services, iptables rules can take hours to update due to O(n) complexity. IPVS mode uses the kernel IPVS table, which has O(1) complexity for lookups and uses hash tables for efficient matching. IPVS supports more scheduling algorithms (rr, wrr, lc, dh, sh, sed, nq) compared to iptables' random selection. Most production clusters should use IPVS mode for better scalability."
    },
    {
      "heading": "Service Traffic Flow and External Traffic Policy",
      "text": "When a Service receives traffic, kube-proxy must decide which Pod receives it. With externalTrafficPolicy: Cluster (default), traffic can go to any Pod on any node, requiring SNAT (source network address translation) if the Pod is on a different node — preserving the client IP is problematic. With externalTrafficPolicy: Local, traffic is only forwarded to Pods on the same node, preserving the original client IP but potentially causing uneven load distribution."
    },
    {
      "heading": "kube-proxy and Network Policy Interaction",
      "text": "kube-proxy handles Service traffic routing, but it does NOT implement NetworkPolicy. Network policies are implemented by the CNI plugin (Calico, Cilium, Weave). kube-proxy operates at layer 4 (transport) — TCP, UDP, SCTP — and does not understand layer 7 protocols. For layer 7 routing and policy, an Ingress controller or service mesh (Istio, Linkerd) is needed."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is kube-proxy responsible for?",
      "answer": "kube-proxy maintains network rules on each node to implement the Kubernetes Service abstraction — routing traffic from Service ClusterIPs to backend Pod IPs."
    },
    {
      "question": "What are the different kube-proxy modes?",
      "answer": "Three modes: userspace (deprecated, old user-mode proxy), iptables (default, uses netfilter rules), and IPVS (recommended for large clusters, uses kernel IPVS tables)."
    },
    {
      "question": "Does kube-proxy support load balancing?",
      "answer": "Yes. kube-proxy load-balances traffic across Pod backends for a Service. In iptables mode, selection is random. In IPVS mode, multiple scheduling algorithms are available (round-robin, least connections, etc.)."
    },
    {
      "question": "How does kube-proxy know which Pods back a Service?",
      "answer": "kube-proxy watches EndpointSlice (or Endpoints) objects from the API Server. These objects list the Pod IPs and ports that match the Service selector. When Pods change, EndpointSlices are updated and kube-proxy recalculates rules."
    },
    {
      "question": "What is the difference between ClusterIP and NodePort?",
      "answer": "ClusterIP is a virtual IP reachable only within the cluster. NodePort exposes the Service on a static port on every node's IP address, making it accessible from outside the cluster."
    },
    {
      "question": "How does IPVS mode improve over iptables?",
      "answer": "IPVS uses hash tables with O(1) lookup complexity, supports more scheduling algorithms, and handles large numbers of Services (10,000+) without performance degradation."
    },
    {
      "question": "What is the externalTrafficPolicy?",
      "answer": "Cluster: traffic can be forwarded to any Pod in the cluster, may SNAT the source IP. Local: traffic only forwarded to Pods on the same node, preserving source IP but potentially uneven load distribution."
    },
    {
      "question": "Can kube-proxy be used without Services?",
      "answer": "kube-proxy's sole purpose is Service traffic routing. Without Services, kube-proxy has no rules to configure. Pod-to-Pod direct communication is handled by the CNI plugin, not kube-proxy."
    },
    {
      "question": "What ports does kube-proxy use?",
      "answer": "kube-proxy uses port 10249 for metrics (health check) and port 10256 for the readiness probe. It does not listen on application ports — it programs iptables/IPVS rules, not a listening socket."
    },
    {
      "question": "How to check if kube-proxy is working?",
      "answer": "Check kube-proxy Pod logs, verify iptables rules exist for Services (iptables -L -t nat), or test Service connectivity from a Pod using the Service DNS name."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the default kube-proxy mode?",
      "options": [
        "userspace",
        "iptables",
        "IPVS",
        "nftables"
      ],
      "answer": 1,
      "explanation": "The default proxy mode is iptables, using Linux netfilter rules for Service traffic routing."
    },
    {
      "question": "Which mode is recommended for large clusters with many Services?",
      "options": [
        "userspace",
        "iptables",
        "IPVS",
        "nftables"
      ],
      "answer": 2,
      "explanation": "IPVS mode is recommended for large clusters because it scales better using kernel hash tables with O(1) lookup."
    },
    {
      "question": "What does externalTrafficPolicy: Local preserve?",
      "options": [
        "Bandwidth",
        "Source IP address",
        "Service IP",
        "Pod priority"
      ],
      "answer": 1,
      "explanation": "Local policy preserves the original client IP address because traffic is not SNAT-ed when forwarded to a local Pod."
    },
    {
      "question": "Which API resource does kube-proxy watch for Pod backends?",
      "options": [
        "Pods",
        "Endpoints or EndpointSlice",
        "Services",
        "ConfigMaps"
      ],
      "answer": 1,
      "explanation": "kube-proxy watches EndpointSlice (or Endpoints) to discover which Pod IPs belong to each Service."
    },
    {
      "question": "What happens if kube-proxy is not running?",
      "options": [
        "Pods cannot communicate",
        "Services stop working for cluster-internal traffic",
        "The node is deleted",
        "Everything works normally"
      ],
      "answer": 1,
      "explanation": "Without kube-proxy, Service ClusterIPs and NodePorts stop working because the iptables/IPVS rules are not maintained."
    },
    {
      "question": "Which network layer does kube-proxy operate at?",
      "options": [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 7 (Application)"
      ],
      "answer": 2,
      "explanation": "kube-proxy handles TCP, UDP, and SCTP traffic — operating at Layer 4 of the OSI model."
    },
    {
      "question": "How does iptables mode handle conntrack?",
      "options": [
        "Ignores conntrack",
        "Uses conntrack for NAT",
        "Disables conntrack",
        "Stateless routing"
      ],
      "answer": 1,
      "explanation": "iptables mode uses connection tracking (conntrack) for NAT to route traffic between Services and Pods."
    },
    {
      "question": "What IPVS scheduling algorithm distributes connections evenly?",
      "options": [
        "lc (least connection)",
        "rr (round-robin)",
        "sh (source hashing)",
        "sed (shortest expected delay)"
      ],
      "answer": 1,
      "explanation": "Round-robin (rr) distributes new connections sequentially across available backend Pods."
    },
    {
      "question": "What is the kube-proxy metrics port?",
      "options": [
        "6443",
        "10249",
        "10250",
        "10256"
      ],
      "answer": 1,
      "explanation": "kube-proxy exposes metrics on port 10249 and readiness check on port 10256."
    },
    {
      "question": "Which component implements NetworkPolicy?",
      "options": [
        "kube-proxy",
        "CNI plugin",
        "kubelet",
        "API Server"
      ],
      "answer": 1,
      "explanation": "NetworkPolicy is implemented by the CNI plugin (Calico, Cilium, etc.), not by kube-proxy."
    }
  ],
  "codeExamples": [
    {
      "title": "Check kube-proxy Mode",
      "useCase": "Determine which proxy mode is active",
      "code": "kubectl logs -n kube-system kube-proxy-<node> | findstr \"Using\"",
      "description": "View kube-proxy startup logs to see which proxy mode is configured."
    },
    {
      "title": "View iptables Rules for a Service",
      "useCase": "Inspect Service traffic routing rules",
      "code": "kubectl get svc kubernetes\nkubectl exec -n kube-system kube-proxy-<node> -- iptables -t nat -L -n | findstr <CLUSTER-IP>",
      "description": "Inspects iptables NAT rules for the kubernetes Service."
    },
    {
      "title": "Test Service Connectivity from a Pod",
      "useCase": "Verify Service DNS and routing works",
      "code": "kubectl run test-pod --image=busybox --rm -it --restart=Never -- wget -O- http://<service-name>.<namespace>.svc.cluster.local:80",
      "description": "Creates a temporary Pod to test Service connectivity via DNS name."
    },
    {
      "title": "Check kube-proxy Configuration",
      "useCase": "View current kube-proxy configuration",
      "code": "kubectl get configmap -n kube-system kube-proxy -o yaml\nkubectl describe daemonset -n kube-system kube-proxy",
      "description": "Shows the kube-proxy ConfigMap and DaemonSet configuration."
    },
    {
      "title": "Verify EndpointSlices for a Service",
      "useCase": "Confirm Pods are discovered as Service backends",
      "code": "kubectl get endpointslices -l kubernetes.io/service-name=<service-name>\nkubectl describe service <service-name>",
      "description": "Lists EndpointSlices and their ready/unready addresses for a Service."
    }
  ],
  "laymanDefinition": "kube-proxy is the network traffic director on each node. Its job is to make Services work — it translates virtual Service IP addresses into actual Pod IP addresses. When you create a Service, kube-proxy on every node programs the local firewall rules (iptables or IPVS) so that traffic to the Service's ClusterIP is load-balanced to healthy Pods. Think of it as a postal sorting facility — it reads the destination address (Service IP) and forwards the package to the right mailbox (Pod IP).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">kube-proxy</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">kube-proxy</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">kube-proxy is a network proxy that runs on every n</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ode, implementing Service-to-Pod traffic routing v</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ia iptables, IPVS, or userspace mode</text></svg>"
};
