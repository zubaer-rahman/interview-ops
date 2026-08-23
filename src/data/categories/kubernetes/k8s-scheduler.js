export const k8s_scheduler = {
  "id": "k8s-scheduler",
  "title": "kube-scheduler",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-scheduler.json",
  "interviewAnswer": "The kube-scheduler decides which Node should run each new Pod. It is like a hotel manager deciding which room to assign to each guest based on their requirements and room availability. The scheduler looks at every unscheduled Pod, checks which Nodes meet its requirements (enough CPU/memory, right labels, no conflicting taints), then picks the best Node using a scoring system. Modern Kubernetes uses scheduling profiles and plugins to make this process customizable.",
  "tldr": [
    "The scheduler watches the API Server for newly created Pods with an empty nodeName field and assigns them to optimal Nodes",
    "Scheduling is a two-phase process: Filtering (predicates — which Nodes can run the Pod) and Scoring (priorities — which Node is the best fit)",
    "The scheduler respects constraints: resource requests/limits, nodeSelector, affinity/anti-affinity, taints/tolerations, and topology spread constraints",
    "Each Pod can define its own scheduling constraints via nodeSelector, node affinity, pod affinity/anti-affinity, and tolerations",
    "Kubernetes supports multiple scheduling profiles, custom schedulers, and the scheduler extender mechanism for specialized scheduling needs"
  ],
  "deepDive": [
    {
      "heading": "Scheduling Cycle: Filtering and Scoring",
      "text": "The scheduling cycle has two stages. Filtering: the scheduler evaluates predicates like PodFitsResources (CPU/memory), PodFitsHost (nodeSelector), PodToleratesNodeTaints (tolerations), PodFitsHostPorts (port conflicts), and CheckNodeCondition (node ready). Scoring: the remaining nodes are scored on priorities like LeastRequestedPriority (spread load), BalancedResourceAllocation (balance CPU/memory), and SelectorSpreadPriority (zone spreading). The node with the highest score wins."
    },
    {
      "heading": "Scheduling Profiles and Plugins",
      "text": "Kubernetes 1.19+ introduced the scheduler framework with pluggable scheduling profiles. You can configure multiple profiles (e.g., default-profile, gpu-profile) with different plugin sets. Plugins implement extension points: QueueSort (queue ordering), PreFilter/Filter (predicates), PreScore/Score (priorities), Reserve (resource reservation), Permit (wait for approval), and Bind (assign node). This allows custom scheduling logic without writing a standalone scheduler."
    },
    {
      "heading": "Pod Priorities and Preemption",
      "text": "Pods can have priority classes (PriorityClass resources). Higher-priority Pods are scheduled first. If a high-priority Pod cannot be scheduled, the scheduler can preempt (evict) lower-priority Pods to free resources. Preemption follows rules: never preempt Pods in the same priority class, respect PodDisruptionBudgets, and minimize disruption by preempting the fewest/lowest-priority Pods needed."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is the kube-scheduler responsible for?",
      "answer": "The scheduler is responsible for assigning newly created Pods to appropriate Worker Nodes based on resource requirements, constraints, and policies."
    },
    {
      "question": "What happens if no scheduler is running?",
      "answer": "Pods remain in Pending state indefinitely because their nodeName is never set. The cluster cannot assign Pods to Nodes without a scheduler."
    },
    {
      "question": "How does the scheduler handle resource requirements?",
      "answer": "It checks that the Node has enough allocatable resources (CPU, memory, extended resources) to satisfy the Pod container requests. If requests are not set, the Pod can still be scheduled but may be evicted under pressure."
    },
    {
      "question": "What is the difference between nodeSelector and node affinity?",
      "answer": "nodeSelector is a simple label match (must match all labels). Node affinity supports more flexible expressions: requiredDuringSchedulingIgnoredDuringExecution (hard requirement) and preferredDuringSchedulingIgnoredDuringExecution (soft preference with weight)."
    },
    {
      "question": "How does the scheduler handle Pod affinity?",
      "answer": "Pod affinity attracts Pods to Nodes that already run certain Pods (e.g., co-locate frontend with backend). Pod anti-affinity spreads Pods across Nodes (e.g., anti-affinity for availability zone). Both support required and preferred constraints."
    },
    {
      "question": "What is pod preemption?",
      "answer": "When a high-priority Pod cannot be scheduled, the scheduler can evict (preempt) lower-priority Pods from Nodes to free resources for the high-priority Pod. The preempted Pods are gracefully terminated."
    },
    {
      "question": "Can you run multiple schedulers in a cluster?",
      "answer": "Yes. You can deploy a custom scheduler alongside the default scheduler. Pods specify which scheduler to use via the schedulerName field. Different schedulers can use different policies and algorithms."
    },
    {
      "question": "How does the scheduler handle topology spread?",
      "answer": "TopologySpreadConstraints spread Pods across topology domains (zones, nodes) to achieve high availability. You specify maxSkew (maximum difference in Pod count between domains), topologyKey (domain label), and whenUnsatisfiable (ScheduleAnyway or DoNotSchedule)."
    },
    {
      "question": "What scheduling plugins are available by default?",
      "answer": "Default plugins include NodeResourcesFit, NodeName, NodeUnschedulable, NodeAffinity, TaintToleration, PodTopologySpread, InterPodAffinity, VolumeBinding, and ImageLocality. Each plugin implements one or more extension points."
    },
    {
      "question": "How does the scheduler handle volumes?",
      "answer": "The VolumeBinding plugin handles Pods that use PVCs. For immediate binding, it waits for PV availability. For WaitForFirstConsumer binding, it first considers the Pod constraints and then schedules to make the volume available on that node."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which phase filters out Nodes that cannot run a Pod?",
      "options": [
        "Scoring",
        "Binding",
        "Filtering",
        "Reserving"
      ],
      "answer": 2,
      "explanation": "The filtering (predicate) phase eliminates nodes that cannot satisfy the Pod requirements."
    },
    {
      "question": "What happens to Pods when no scheduler is running?",
      "options": [
        "They run on random nodes",
        "They stay Pending",
        "They get deleted",
        "They are queued"
      ],
      "answer": 1,
      "explanation": "Without a scheduler, Pods remain in Pending state because no node assignment is made."
    },
    {
      "question": "Which field specifies a custom scheduler for a Pod?",
      "options": [
        "nodeSelector",
        "schedulerName",
        "nodeName",
        "affinity"
      ],
      "answer": 1,
      "explanation": "The schedulerName field in a Pod spec specifies which scheduler should handle that Pod."
    },
    {
      "question": "What is the purpose of Pod priority preemption?",
      "options": [
        "Spread load evenly",
        "Evict lower-priority Pods to schedule higher-priority ones",
        "Balance resource usage",
        "Optimize network latency"
      ],
      "answer": 1,
      "explanation": "Preemption evicts lower-priority Pods to make resources available for higher-priority Pods."
    },
    {
      "question": "Which scoring strategy spreads Pods across nodes to balance load?",
      "options": [
        "MostRequestedPriority",
        "LeastRequestedPriority",
        "BalancedResourceAllocation",
        "ImageLocality"
      ],
      "answer": 1,
      "explanation": "LeastRequestedPriority favors nodes with more available resources, spreading Pods across the cluster."
    },
    {
      "question": "What does PodTopologySpread constraint do?",
      "options": [
        "Spread Pods across cloud regions",
        "Spread Pods evenly across topology domains",
        "Co-locate Pods on same node",
        "Spread Pods across namespaces"
      ],
      "answer": 1,
      "explanation": "PodTopologySpreadConstraints ensure Pods are spread evenly across topology domains like zones or nodes."
    },
    {
      "question": "What is the role of the scheduler QueueSort plugin?",
      "options": [
        "Sort Pods by priority in the scheduling queue",
        "Score nodes",
        "Filter nodes",
        "Bind Pods to nodes"
      ],
      "answer": 0,
      "explanation": "The QueueSort plugin determines the ordering of Pods in the scheduling queue, typically by priority."
    },
    {
      "question": "Which extension point can approve or reject a scheduling decision?",
      "options": [
        "Filter",
        "Score",
        "Permit",
        "Bind"
      ],
      "answer": 2,
      "explanation": "The Permit extension point can approve, deny, or wait (with a timeout) for a scheduling decision."
    },
    {
      "question": "How does the scheduler handle volume topology constraints?",
      "options": [
        "Ignores them",
        "Gets volume from API Server",
        "Uses VolumeBinding plugin scheduling",
        "Binds volume to any node"
      ],
      "answer": 2,
      "explanation": "The VolumeBinding plugin considers volume topology constraints and schedules Pods to nodes where the volume is accessible."
    },
    {
      "question": "What happens if a Node has a NoExecute taint?",
      "options": [
        "Pods cannot be scheduled",
        "Existing Pods without toleration are evicted",
        "Pods can be scheduled with toleration",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "NoExecute taint prevents new Pods without toleration and evicts existing Pods without toleration."
    }
  ],
  "codeExamples": [
    {
      "title": "View Scheduler Logs",
      "useCase": "Debug scheduling failures",
      "code": "kubectl logs -n kube-system kube-scheduler-<node>\nkubectl describe pod -n kube-system kube-scheduler-<node>",
      "description": "View scheduler logs and Pod details to troubleshoot scheduling issues."
    },
    {
      "title": "Check Pending Pods",
      "useCase": "Identify Pods waiting for scheduling",
      "code": "kubectl get pods --all-namespaces --field-selector status.phase=Pending\nkubectl describe pod <pending-pod> | findstr Events",
      "description": "Lists all pending Pods and describes events showing why a Pod is unschedulable."
    },
    {
      "title": "Set Node Affinity",
      "useCase": "Ensure Pod runs on specific nodes",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: disktype\n            operator: In\n            values:\n            - ssd\n  containers:\n  - name: nginx\n    image: nginx",
      "description": "YAML specifying a required node affinity for ssd-labeled nodes."
    },
    {
      "title": "Create a Custom PriorityClass",
      "useCase": "Assign priorities for preemption",
      "code": "apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: high-priority\nvalue: 1000000\nglobalDefault: false\ndescription: \"High priority Pods\"",
      "description": "Creates a PriorityClass with value 1,000,000 for critical workloads."
    },
    {
      "title": "Configure Pod Topology Spread",
      "useCase": "Spread Pods across zones for HA",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 9\n  template:\n    spec:\n      topologySpreadConstraints:\n      - maxSkew: 1\n        topologyKey: topology.kubernetes.io/zone\n        whenUnsatisfiable: DoNotSchedule\n        labelSelector:\n          matchLabels:\n            app: web",
      "description": "Deployment with topology spread constraints to distribute Pods evenly across availability zones."
    }
  ],
  "laymanDefinition": "The kube-scheduler decides which Node should run each new Pod. It is like a hotel manager deciding which room to assign to each guest based on their requirements and room availability. The scheduler looks at every unscheduled Pod, checks which Nodes meet its requirements (enough CPU/memory, right labels, no conflicting taints), then picks the best Node using a scoring system. Modern Kubernetes uses scheduling profiles and plugins to make this process customizable.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">kube-scheduler</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">kube-scheduler</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">The scheduler watches the API Server for newly cre</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">ated Pods with an empty nodeName field and assigns</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\"> them to optimal Nodes</text></svg>"
};
