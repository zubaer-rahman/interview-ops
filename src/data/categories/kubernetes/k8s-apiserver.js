export const k8s_apiserver = {
  "id": "k8s-apiserver",
  "title": "kube-apiserver",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-apiserver.json",
  "interviewAnswer": "The kube-apiserver is the front door to the entire Kubernetes cluster. Every single operation — whether from kubectl, the dashboard, CI/CD pipelines, or other components — goes through the API Server. It validates requests, authenticates users, checks permissions, applies admission control policies, and persists the final state to etcd. Think of it as the customer service desk of a large organization: it routes every request to the right place and records everything.",
  "tldr": [
    "The API Server is the only component that directly interacts with etcd — all other components communicate through it",
    "It handles authentication (who you are), authorization (what you can do), and admission control (what policies apply)",
    "The API Server exposes a RESTful API that supports CRUD operations on all Kubernetes resources (Pods, Services, Deployments, etc.)",
    "It implements watch semantics — clients can subscribe to changes and receive real-time updates without polling",
    "The API Server is horizontally scalable: multiple instances can run behind a load balancer for high availability"
  ],
  "deepDive": [
    {
      "heading": "Request Flow Through the API Server",
      "text": "When a request arrives, the API Server goes through a pipeline: 1) Authentication — verifies identity via TLS client certificates, bearer tokens, or OIDC. 2) Authorization — checks RBAC rules to determine if the user can perform the action. 3) Admission — runs a chain of admission controllers that can validate or mutate the request. 4) Validation — validates the object schema and business rules. 5) Persistence — stores the object in etcd and returns the response."
    },
    {
      "heading": "API Groups and Versioning",
      "text": "Kubernetes API is organized into API groups (e.g., apps, networking.k8s.io, batch). Each group has versions (v1, v1beta1, v1beta2) following a lifecycle: alpha (disabled by default, may be removed), beta (enabled by default, well-tested), stable (GA, long-term support). The API Server handles conversion between versions transparently, allowing you to use any supported version in your manifests."
    },
    {
      "heading": "Watch Mechanism and Event-Driven Architecture",
      "text": "The API Server implements a watch mechanism based on etcd watches. Clients (like controllers, kubelet, kube-proxy) can establish a long-lived HTTP connection to watch for changes on specific resources. When a resource changes, the API Server streams the event (ADDED, MODIFIED, DELETED) to all watchers. This enables the event-driven, reactive behavior that powers Kubernetes controllers without polling."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is the primary function of kube-apiserver?",
      "answer": "The API Server is the central hub that exposes the Kubernetes API, validates and processes all requests, enforces authentication/authorization/admission, and persists cluster state to etcd."
    },
    {
      "question": "How does the API Server authenticate requests?",
      "answer": "It supports multiple authentication methods: TLS client certificates (X.509), bearer tokens (static, service account, bootstrap), OpenID Connect (OIDC integration with providers like Google, Azure AD), and webhook token authentication."
    },
    {
      "question": "What is an API group in Kubernetes?",
      "answer": "API groups organize related resources. Core group (no path, e.g., /api/v1), named groups (e.g., /apis/apps/v1 for Deployments). Groups help with API evolution and clean resource organization."
    },
    {
      "question": "How does the API Server handle versioning?",
      "answer": "Different versions (v1, v1beta1, v1beta2) coexist. The API Server converts between versions automatically. Users can submit any supported version, and storage is in the preferred version."
    },
    {
      "question": "What happens when the API Server is overloaded?",
      "answer": "It throttles requests based on --max-requests-inflight and --max-mutating-requests-inflight. Priority and fairness (API Priority and Fairness) ensure critical requests (like kubelet heartbeats) are not starved by less important requests."
    },
    {
      "question": "How does the API Server ensure data consistency?",
      "answer": "It uses optimistic concurrency — every resource has a resourceVersion field (etcd modification index). When updating, the API Server checks the version matches; if not, it returns a 409 Conflict error, and the client must re-fetch and retry."
    },
    {
      "question": "What is an admission webhook?",
      "answer": "An admission webhook is an HTTP callback that receives admission requests and returns admission responses. MutatingWebhookConfiguration can modify objects, ValidatingWebhookConfiguration can reject them. Used for policy enforcement (OPA, Kyverno) and default value injection."
    },
    {
      "question": "How does the API Server integrate with RBAC?",
      "answer": "The API Server checks authorization for every request using SubjectAccessReview. RBAC is defined by Roles (permissions within a namespace) and ClusterRoles (cluster-wide), bound to users/groups/ServiceAccounts via RoleBinding and ClusterRoleBinding."
    },
    {
      "question": "What is an APIService resource?",
      "answer": "APIService is a resource for registering API extensions. It allows custom API servers (like metrics-server, service-catalog) to be aggregated into the main API Server, making their resources available through kubectl and the usual API."
    },
    {
      "question": "How does the API Server handle DELETE operations?",
      "answer": "DELETE can be immediate (force delete) or graceful with a grace period. For graceful deletion, the object gets a deletionTimestamp, and finalizers can block deletion until cleanup completes. After finalizers finish, the object is removed."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which component directly writes to etcd?",
      "options": [
        "kube-scheduler",
        "kube-apiserver",
        "kube-controller-manager",
        "kubelet"
      ],
      "answer": 1,
      "explanation": "Only the API Server interacts directly with etcd. All other components go through the API Server."
    },
    {
      "question": "What authentication method does kube-apiserver NOT support?",
      "options": [
        "X.509 client certificates",
        "Bearer tokens",
        "LDAP passwords",
        "OIDC tokens"
      ],
      "answer": 2,
      "explanation": "The API Server does not support LDAP password authentication directly. It supports OIDC which can integrate with LDAP directories."
    },
    {
      "question": "What API version suffix indicates alpha features?",
      "options": [
        "v1",
        "v1beta1",
        "v1alpha1",
        "v1rc1"
      ],
      "answer": 2,
      "explanation": "Alpha versions (v1alpha1, v1alpha2) have the alpha suffix and may be disabled by default or removed."
    },
    {
      "question": "What HTTP status code indicates a conflict due to stale resourceVersion?",
      "options": [
        "400",
        "401",
        "409",
        "412"
      ],
      "answer": 2,
      "explanation": "A 409 Conflict is returned when the resourceVersion in the update does not match the current version."
    },
    {
      "question": "Which mechanism allows clients to get real-time updates from the API Server?",
      "options": [
        "Polling",
        "WebSocket",
        "Watch",
        "Pub/Sub"
      ],
      "answer": 2,
      "explanation": "The Watch mechanism streams ADDED, MODIFIED, DELETED events to clients via long-lived HTTP connections."
    },
    {
      "question": "What is a MutatingWebhookConfiguration used for?",
      "options": [
        "Block requests",
        "Modify requests before storage",
        "Authenticate users",
        "Log requests"
      ],
      "answer": 1,
      "explanation": "Mutating admission webhooks can modify incoming API objects before they are persisted."
    },
    {
      "question": "How does API Priority and Fairness help?",
      "options": [
        "Increases API Server speed",
        "Prevents lower-priority requests from starving critical ones",
        "Caches responses",
        "Load balances requests"
      ],
      "answer": 1,
      "explanation": "Priority and Fairness ensures critical system requests (like kubelet heartbeats) are handled even under load."
    },
    {
      "question": "What resource registers an aggregated API server?",
      "options": [
        "APIService",
        "CustomResourceDefinition",
        "AggregatedAPI",
        "APIExtension"
      ],
      "answer": 0,
      "explanation": "APIService registers external API servers that extend the Kubernetes API."
    },
    {
      "question": "What blocks object deletion until cleanup is done?",
      "options": [
        "Admission controllers",
        "Finalizers",
        "Resource versions",
        "Owner references"
      ],
      "answer": 1,
      "explanation": "Finalizers specify pre-delete cleanup tasks. The object is not deleted until all finalizers are removed."
    },
    {
      "question": "Which API Server flag limits concurrent non-mutating requests?",
      "options": [
        "--max-mutating-requests-inflight",
        "--max-requests-inflight",
        "--max-concurrent-requests",
        "--api-rate-limit"
      ],
      "answer": 1,
      "explanation": "--max-requests-inflight limits the number of concurrent non-mutating requests to the API Server."
    }
  ],
  "codeExamples": [
    {
      "title": "Call the API Server Directly",
      "useCase": "Test API access and troubleshoot authentication",
      "code": "kubectl get --raw=/api/v1/namespaces/default/pods\nkubectl get --raw=/openapi/v2 | findstr \"info\"",
      "description": "Direct REST call to the API Server listing Pods, and inspecting the OpenAPI spec."
    },
    {
      "title": "Test API Server Auth with curl",
      "useCase": "Verify API Server authentication from outside",
      "code": "curl -k --cert client.crt --key client.key https://<API-SERVER>:6443/api/v1/namespaces/default/pods",
      "description": "Uses client certificate authentication to directly query the API Server."
    },
    {
      "title": "Enable API Server Audit Logging",
      "useCase": "Track all API requests for security auditing",
      "code": "kubectl logs -n kube-system kube-apiserver-<node> | Out-File apiserver.log",
      "description": "View API Server logs including audit events showing who did what."
    },
    {
      "title": "Check API Server Health Endpoints",
      "useCase": "Troubleshoot API Server responsiveness",
      "code": "kubectl get --raw=/healthz\nkubectl get --raw=/readyz\nkubectl get --raw=/livez",
      "description": "Multiple health check endpoints providing detailed component status."
    },
    {
      "title": "Explore API Resources",
      "useCase": "List available API versions and resources",
      "code": "kubectl api-versions\nkubectl api-resources --namespaced=true\nkubectl explain pod",
      "description": "Lists all API versions and available resources in the cluster."
    }
  ],
  "laymanDefinition": "The kube-apiserver is the front door to the entire Kubernetes cluster. Every single operation — whether from kubectl, the dashboard, CI/CD pipelines, or other components — goes through the API Server. It validates requests, authenticates users, checks permissions, applies admission control policies, and persists the final state to etcd. Think of it as the customer service desk of a large organization: it routes every request to the right place and records everything.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">kube-apiserver</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">kube-apiserver</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">The API Server is the only component that directly</text><text x=\"250\" y=\"168\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\"> interacts with etcd — all other components commun</text><text x=\"250\" y=\"181\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">icate through it</text></svg>"
};
