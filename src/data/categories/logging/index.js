// Auto-generated index for logging

export const logging = {
    id: "logging",
    tag: "Logging",
    name: "Logging",
    icon: "📝",
    color: "#d69e2e",
    description: "All topics related to logging",
    topics: [
    {
      id: "log-centralized",
      title: "Centralized Logging",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./log-centralized.js').then(m => m.log_centralized)
    },
    {
      id: "log-structured",
      title: "Structured Logging",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./log-structured.js').then(m => m.log_structured)
    },
    {
      id: "log-aggregation",
      title: "Log Aggregation",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./log-aggregation.js').then(m => m.log_aggregation)
    },
    {
      id: "log-rotation",
      title: "Log Rotation",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./log-rotation.js').then(m => m.log_rotation)
    },
    {
      id: "log-levels",
      title: "Log Levels",
      difficulty: "beginner",
      estimatedMinutes: 10,
      content: () => import('./log-levels.js').then(m => m.log_levels)
    },
    {
      id: "log-shipping",
      title: "Log Shipping",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      content: () => import('./log-shipping.js').then(m => m.log_shipping)
    }
    ]
};
