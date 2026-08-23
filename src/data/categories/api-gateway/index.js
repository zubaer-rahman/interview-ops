// Auto-generated index for api-gateway

export const api_gateway = {
    id: "api-gateway",
    tag: "Api Gateway",
    name: "Api Gateway",
    icon: "🚪",
    color: "#805ad5",
    description: "All topics related to api-gateway",
    topics: [
    {
      id: "ag-kong",
      title: "Kong",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./ag-kong.js').then(m => m.ag_kong)
    },
    {
      id: "ag-nginx-gateway",
      title: "NGINX API Gateway",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./ag-nginx-gateway.js').then(m => m.ag_nginx_gateway)
    },
    {
      id: "ag-ambassador",
      title: "Ambassador",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./ag-ambassador.js').then(m => m.ag_ambassador)
    },
    {
      id: "ag-traefik",
      title: "Traefik",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./ag-traefik.js').then(m => m.ag_traefik)
    },
    {
      id: "ag-aws-api-gateway",
      title: "AWS API Gateway",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      content: () => import('./ag-aws-api-gateway.js').then(m => m.ag_aws_api_gateway)
    },
    {
      id: "ag-rate-limiting",
      title: "Rate Limiting",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./ag-rate-limiting.js').then(m => m.ag_rate_limiting)
    },
    {
      id: "ag-authentication",
      title: "Authentication",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./ag-authentication.js').then(m => m.ag_authentication)
    },
    {
      id: "ag-authorization",
      title: "Authorization",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./ag-authorization.js').then(m => m.ag_authorization)
    },
    {
      id: "ag-api-keys",
      title: "API Keys",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./ag-api-keys.js').then(m => m.ag_api_keys)
    },
    {
      id: "ag-jwt-validation",
      title: "JWT Validation",
      difficulty: "intermediate",
      estimatedMinutes: 18,
      content: () => import('./ag-jwt-validation.js').then(m => m.ag_jwt_validation)
    },
    {
      id: "ag-oauth",
      title: "OAuth",
      difficulty: "advanced",
      estimatedMinutes: 20,
      content: () => import('./ag-oauth.js').then(m => m.ag_oauth)
    },
    {
      id: "ag-logging",
      title: "Logging",
      difficulty: "beginner",
      estimatedMinutes: 13,
      content: () => import('./ag-logging.js').then(m => m.ag_logging)
    },
    {
      id: "ag-metrics",
      title: "Metrics",
      difficulty: "beginner",
      estimatedMinutes: 14,
      content: () => import('./ag-metrics.js').then(m => m.ag_metrics)
    }
    ]
};
