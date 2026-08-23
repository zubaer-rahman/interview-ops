// Auto-generated index for kubernetes

export const kubernetes = {
    id: "kubernetes",
    tag: "Kubernetes",
    name: "Kubernetes",
    icon: "☸️",
    color: "#3182ce",
    description: "All topics related to kubernetes",
    topics: [
    {
      id: "k8s-architecture",
      title: "Kubernetes Architecture",
      difficulty: "beginner",
      estimatedMinutes: 15,
      content: () => import('./k8s-architecture.js').then(m => m.k8s_architecture)
    },
    {
      id: "k8s-cluster",
      title: "Cluster",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-cluster.js').then(m => m.k8s_cluster)
    },
    {
      id: "k8s-control-plane",
      title: "Control Plane",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-control-plane.js').then(m => m.k8s_control_plane)
    },
    {
      id: "k8s-worker-node",
      title: "Worker Node",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-worker-node.js').then(m => m.k8s_worker_node)
    },
    {
      id: "k8s-apiserver",
      title: "kube-apiserver",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-apiserver.js').then(m => m.k8s_apiserver)
    },
    {
      id: "k8s-scheduler",
      title: "kube-scheduler",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-scheduler.js').then(m => m.k8s_scheduler)
    },
    {
      id: "k8s-controller-manager",
      title: "kube-controller-manager",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-controller-manager.js').then(m => m.k8s_controller_manager)
    },
    {
      id: "k8s-etcd",
      title: "etcd",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-etcd.js').then(m => m.k8s_etcd)
    },
    {
      id: "k8s-kubelet",
      title: "kubelet",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-kubelet.js').then(m => m.k8s_kubelet)
    },
    {
      id: "k8s-kube-proxy",
      title: "kube-proxy",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-kube-proxy.js').then(m => m.k8s_kube_proxy)
    },
    {
      id: "k8s-container-runtime",
      title: "Container Runtime",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-container-runtime.js').then(m => m.k8s_container_runtime)
    },
    {
      id: "k8s-pod",
      title: "Pod",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-pod.js').then(m => m.k8s_pod)
    },
    {
      id: "k8s-job",
      title: "Job",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-job.js').then(m => m.k8s_job)
    },
    {
      id: "k8s-namespace",
      title: "Namespace",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-namespace.js').then(m => m.k8s_namespace)
    },
    {
      id: "k8s-service",
      title: "Service",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-service.js').then(m => m.k8s_service)
    },
    {
      id: "k8s-configmap",
      title: "ConfigMap",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-configmap.js').then(m => m.k8s_configmap)
    },
    {
      id: "k8s-secret",
      title: "Secret",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-secret.js').then(m => m.k8s_secret)
    },
    {
      id: "k8s-persistent-volume",
      title: "Persistent Volume",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-persistent-volume.js').then(m => m.k8s_persistent_volume)
    },
    {
      id: "k8s-persistent-volume-claim",
      title: "Persistent Volume Claim",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-persistent-volume-claim.js').then(m => m.k8s_persistent_volume_claim)
    },
    {
      id: "k8s-storage-class",
      title: "Storage Class",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-storage-class.js').then(m => m.k8s_storage_class)
    },
    {
      id: "k8s-replicaset",
      title: "ReplicaSet",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-replicaset.js').then(m => m.k8s_replicaset)
    },
    {
      id: "k8s-deployment",
      title: "Deployment",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-deployment.js').then(m => m.k8s_deployment)
    },
    {
      id: "k8s-statefulset",
      title: "StatefulSet",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-statefulset.js').then(m => m.k8s_statefulset)
    },
    {
      id: "k8s-daemonset",
      title: "DaemonSet",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-daemonset.js').then(m => m.k8s_daemonset)
    },
    {
      id: "k8s-cronjob",
      title: "CronJob",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-cronjob.js').then(m => m.k8s_cronjob)
    },
    {
      id: "k8s-ingress",
      title: "Ingress",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-ingress.js').then(m => m.k8s_ingress)
    },
    {
      id: "k8s-network-policy",
      title: "Network Policy",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-network-policy.js').then(m => m.k8s_network_policy)
    },
    {
      id: "k8s-service-account",
      title: "Service Account",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-service-account.js').then(m => m.k8s_service_account)
    },
    {
      id: "k8s-resource-quota",
      title: "ResourceQuota",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-resource-quota.js').then(m => m.k8s_resource_quota)
    },
    {
      id: "k8s-limit-range",
      title: "LimitRange",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-limit-range.js').then(m => m.k8s_limit_range)
    },
    {
      id: "k8s-pod-lifecycle",
      title: "Pod Lifecycle",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-pod-lifecycle.js').then(m => m.k8s_pod_lifecycle)
    },
    {
      id: "k8s-init-containers",
      title: "Init Containers",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-init-containers.js').then(m => m.k8s_init_containers)
    },
    {
      id: "k8s-sidecar-containers",
      title: "Sidecar Containers",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-sidecar-containers.js').then(m => m.k8s_sidecar_containers)
    },
    {
      id: "k8s-multi-container-pods",
      title: "Multi-container Pods",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-multi-container-pods.js').then(m => m.k8s_multi_container_pods)
    },
    {
      id: "k8s-pod-scheduling",
      title: "Pod Scheduling",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-pod-scheduling.js').then(m => m.k8s_pod_scheduling)
    },
    {
      id: "k8s-pod-affinity",
      title: "Pod Affinity",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-pod-affinity.js').then(m => m.k8s_pod_affinity)
    },
    {
      id: "k8s-anti-affinity",
      title: "Anti-Affinity",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-anti-affinity.js').then(m => m.k8s_anti_affinity)
    },
    {
      id: "k8s-taints",
      title: "Taints",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-taints.js').then(m => m.k8s_taints)
    },
    {
      id: "k8s-tolerations",
      title: "Tolerations",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-tolerations.js').then(m => m.k8s_tolerations)
    },
    {
      id: "k8s-pod-priority",
      title: "Pod Priority",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-pod-priority.js').then(m => m.k8s_pod_priority)
    },
    {
      id: "k8s-pdb",
      title: "Pod Disruption Budget",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-pdb.js').then(m => m.k8s_pdb)
    },
    {
      id: "k8s-rolling-updates",
      title: "Rolling Updates",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-rolling-updates.js').then(m => m.k8s_rolling_updates)
    },
    {
      id: "k8s-rollback",
      title: "Rollback",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-rollback.js').then(m => m.k8s_rollback)
    },
    {
      id: "k8s-replica-management",
      title: "Replica Management",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-replica-management.js').then(m => m.k8s_replica_management)
    },
    {
      id: "k8s-deployment-strategy",
      title: "Deployment Strategy",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-deployment-strategy.js').then(m => m.k8s_deployment_strategy)
    },
    {
      id: "k8s-canary-deployment",
      title: "Canary Deployment",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-canary-deployment.js').then(m => m.k8s_canary_deployment)
    },
    {
      id: "k8s-blue-green-deployment",
      title: "Blue Green Deployment",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-blue-green-deployment.js').then(m => m.k8s_blue_green_deployment)
    },
    {
      id: "k8s-clusterip",
      title: "ClusterIP",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-clusterip.js').then(m => m.k8s_clusterip)
    },
    {
      id: "k8s-nodeport",
      title: "NodePort",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-nodeport.js').then(m => m.k8s_nodeport)
    },
    {
      id: "k8s-loadbalancer",
      title: "LoadBalancer",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-loadbalancer.js').then(m => m.k8s_loadbalancer)
    },
    {
      id: "k8s-externalname",
      title: "ExternalName",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-externalname.js').then(m => m.k8s_externalname)
    },
    {
      id: "k8s-headless-service",
      title: "Headless Service",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-headless-service.js').then(m => m.k8s_headless_service)
    },
    {
      id: "k8s-service-discovery",
      title: "Service Discovery",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-service-discovery.js').then(m => m.k8s_service_discovery)
    },
    {
      id: "k8s-configmap-create",
      title: "Create ConfigMap",
      difficulty: "beginner",
      estimatedMinutes: 5,
      content: () => import('./k8s-configmap-create.js').then(m => m.k8s_configmap_create)
    },
    {
      id: "k8s-configmap-env",
      title: "Environment Variables",
      difficulty: "beginner",
      estimatedMinutes: 5,
      content: () => import('./k8s-configmap-env.js').then(m => m.k8s_configmap_env)
    },
    {
      id: "k8s-configmap-volume",
      title: "Mount as Volume",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-configmap-volume.js').then(m => m.k8s_configmap_volume)
    },
    {
      id: "k8s-configmap-update",
      title: "Update ConfigMap",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-configmap-update.js').then(m => m.k8s_configmap_update)
    },
    {
      id: "k8s-secret-opaque",
      title: "Opaque Secret",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-secret-opaque.js').then(m => m.k8s_secret_opaque)
    },
    {
      id: "k8s-secret-tls",
      title: "TLS Secret",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-secret-tls.js').then(m => m.k8s_secret_tls)
    },
    {
      id: "k8s-secret-regcred",
      title: "Docker Registry Secret",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-secret-regcred.js').then(m => m.k8s_secret_regcred)
    },
    {
      id: "k8s-secret-encryption",
      title: "Secret Encryption",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-secret-encryption.js').then(m => m.k8s_secret_encryption)
    },
    {
      id: "k8s-secret-management",
      title: "Secret Management",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-secret-management.js').then(m => m.k8s_secret_management)
    },
    {
      id: "k8s-storage-pv",
      title: "Persistent Volumes",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-storage-pv.js').then(m => m.k8s_storage_pv)
    },
    {
      id: "k8s-storage-pvc",
      title: "Persistent Volume Claims",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-storage-pvc.js').then(m => m.k8s_storage_pvc)
    },
    {
      id: "k8s-dynamic-provisioning",
      title: "Dynamic Provisioning",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-dynamic-provisioning.js').then(m => m.k8s_dynamic_provisioning)
    },
    {
      id: "k8s-csi-drivers",
      title: "CSI Drivers",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-csi-drivers.js').then(m => m.k8s_csi_drivers)
    },
    {
      id: "k8s-storage-local",
      title: "Local Storage",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-storage-local.js').then(m => m.k8s_storage_local)
    },
    {
      id: "k8s-storage-cloud",
      title: "Cloud Storage",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-storage-cloud.js').then(m => m.k8s_storage_cloud)
    },
    {
      id: "k8s-ingress-controller",
      title: "Ingress Controller",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-ingress-controller.js').then(m => m.k8s_ingress_controller)
    },
    {
      id: "k8s-nginx-ingress",
      title: "NGINX Ingress",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-nginx-ingress.js').then(m => m.k8s_nginx_ingress)
    },
    {
      id: "k8s-traefik",
      title: "Traefik",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-traefik.js').then(m => m.k8s_traefik)
    },
    {
      id: "k8s-haproxy",
      title: "HAProxy",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-haproxy.js').then(m => m.k8s_haproxy)
    },
    {
      id: "k8s-ingress-tls",
      title: "TLS",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-ingress-tls.js').then(m => m.k8s_ingress_tls)
    },
    {
      id: "k8s-ssl-certificates",
      title: "SSL Certificates",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-ssl-certificates.js').then(m => m.k8s_ssl_certificates)
    },
    {
      id: "k8s-host-routing",
      title: "Host Routing",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-host-routing.js').then(m => m.k8s_host_routing)
    },
    {
      id: "k8s-path-routing",
      title: "Path Routing",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-path-routing.js').then(m => m.k8s_path_routing)
    },
    {
      id: "k8s-hpa",
      title: "Horizontal Pod Autoscaler (HPA)",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-hpa.js').then(m => m.k8s_hpa)
    },
    {
      id: "k8s-vpa",
      title: "Vertical Pod Autoscaler (VPA)",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-vpa.js').then(m => m.k8s_vpa)
    },
    {
      id: "k8s-cluster-autoscaler",
      title: "Cluster Autoscaler",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-cluster-autoscaler.js').then(m => m.k8s_cluster_autoscaler)
    },
    {
      id: "k8s-scaling-manual",
      title: "Manual Scaling",
      difficulty: "beginner",
      estimatedMinutes: 5,
      content: () => import('./k8s-scaling-manual.js').then(m => m.k8s_scaling_manual)
    },
    {
      id: "k8s-auto-scaling",
      title: "Auto Scaling",
      difficulty: "advanced",
      estimatedMinutes: 15,
      content: () => import('./k8s-auto-scaling.js').then(m => m.k8s_auto_scaling)
    },
    {
      id: "k8s-cluster-networking",
      title: "Cluster Networking",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-cluster-networking.js').then(m => m.k8s_cluster_networking)
    },
    {
      id: "k8s-dns",
      title: "DNS",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-dns.js').then(m => m.k8s_dns)
    },
    {
      id: "k8s-coredns",
      title: "CoreDNS",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-coredns.js').then(m => m.k8s_coredns)
    },
    {
      id: "k8s-cni",
      title: "CNI",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-cni.js').then(m => m.k8s_cni)
    },
    {
      id: "k8s-calico",
      title: "Calico",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-calico.js').then(m => m.k8s_calico)
    },
    {
      id: "k8s-flannel",
      title: "Flannel",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-flannel.js').then(m => m.k8s_flannel)
    },
    {
      id: "k8s-weave",
      title: "Weave",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-weave.js').then(m => m.k8s_weave)
    },
    {
      id: "k8s-istio",
      title: "Istio",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-istio.js').then(m => m.k8s_istio)
    },
    {
      id: "k8s-linkerd",
      title: "Linkerd",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-linkerd.js').then(m => m.k8s_linkerd)
    },
    {
      id: "k8s-service-mesh",
      title: "Service Mesh",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-service-mesh.js').then(m => m.k8s_service_mesh)
    },
    {
      id: "k8s-lb-internal",
      title: "Internal Load Balancer",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-internal.js').then(m => m.k8s_lb_internal)
    },
    {
      id: "k8s-lb-external",
      title: "External Load Balancer",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-external.js').then(m => m.k8s_lb_external)
    },
    {
      id: "k8s-lb-layer4",
      title: "Layer 4 Load Balancer",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-layer4.js').then(m => m.k8s_lb_layer4)
    },
    {
      id: "k8s-lb-layer7",
      title: "Layer 7 Load Balancer",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-layer7.js').then(m => m.k8s_lb_layer7)
    },
    {
      id: "k8s-lb-round-robin",
      title: "Round Robin",
      difficulty: "beginner",
      estimatedMinutes: 5,
      content: () => import('./k8s-lb-round-robin.js').then(m => m.k8s_lb_round_robin)
    },
    {
      id: "k8s-lb-least-connections",
      title: "Least Connections",
      difficulty: "intermediate",
      estimatedMinutes: 5,
      content: () => import('./k8s-lb-least-connections.js').then(m => m.k8s_lb_least_connections)
    },
    {
      id: "k8s-lb-sticky-sessions",
      title: "Sticky Sessions",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-sticky-sessions.js').then(m => m.k8s_lb_sticky_sessions)
    },
    {
      id: "k8s-lb-health-checks",
      title: "Health Checks",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-lb-health-checks.js').then(m => m.k8s_lb_health_checks)
    },
    {
      id: "k8s-nginx-basics",
      title: "NGINX Basics",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-basics.js').then(m => m.k8s_nginx_basics)
    },
    {
      id: "k8s-nginx-reverse-proxy",
      title: "Reverse Proxy",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-nginx-reverse-proxy.js').then(m => m.k8s_nginx_reverse_proxy)
    },
    {
      id: "k8s-nginx-load-balancer",
      title: "Load Balancer",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-nginx-load-balancer.js').then(m => m.k8s_nginx_load_balancer)
    },
    {
      id: "k8s-nginx-ssl",
      title: "SSL/TLS",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-nginx-ssl.js').then(m => m.k8s_nginx_ssl)
    },
    {
      id: "k8s-nginx-https",
      title: "HTTPS",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-https.js').then(m => m.k8s_nginx_https)
    },
    {
      id: "k8s-nginx-url-rewrite",
      title: "URL Rewrite",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-url-rewrite.js').then(m => m.k8s_nginx_url_rewrite)
    },
    {
      id: "k8s-nginx-compression",
      title: "Compression",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-compression.js').then(m => m.k8s_nginx_compression)
    },
    {
      id: "k8s-nginx-caching",
      title: "Caching",
      difficulty: "intermediate",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-caching.js').then(m => m.k8s_nginx_caching)
    },
    {
      id: "k8s-nginx-rate-limiting",
      title: "Rate Limiting",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./k8s-nginx-rate-limiting.js').then(m => m.k8s_nginx_rate_limiting)
    },
    {
      id: "k8s-nginx-static-files",
      title: "Static File Hosting",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./k8s-nginx-static-files.js').then(m => m.k8s_nginx_static_files)
    },
    {
      id: "k8s-nginx-ingress-controller",
      title: "NGINX Ingress Controller",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./k8s-nginx-ingress-controller.js').then(m => m.k8s_nginx_ingress_controller)
    },
    {
      id: "k8s-ci-cd-pipeline",
      title: "Kubernetes CI/CD Pipeline",
      difficulty: "advanced",
      estimatedMinutes: 30,
      content: () => import('./k8s-ci-cd-pipeline.js').then(m => m.k8s_ci_cd_pipeline)
    }
    ]
};
