// Auto-generated index for practice

export const practice = {
    id: "practice",
    tag: "Practice",
    name: "Practice",
    icon: "🏋️",
    color: "#38a169",
    description: "All topics related to practice",
    topics: [
    {
      id: "practice-algorithms",
      title: "Top Algorithm Coding Problems",
      difficulty: "intermediate",
      estimatedMinutes: 45,
      content: () => import('./practice-algorithms.js').then(m => m.practice_algorithms)
    },
    {
      id: "practice-system-design",
      title: "System Design Interview Problems",
      difficulty: "advanced",
      estimatedMinutes: 45,
      content: () => import('./practice-system-design.js').then(m => m.practice_system_design)
    },
    {
      id: "practice-sql",
      title: "SQL Practice Problems",
      difficulty: "intermediate",
      estimatedMinutes: 35,
      content: () => import('./practice-sql.js').then(m => m.practice_sql)
    },
    {
      id: "practice-javascript",
      title: "JavaScript Coding Challenges",
      difficulty: "intermediate",
      estimatedMinutes: 35,
      content: () => import('./practice-javascript.js').then(m => m.practice_javascript)
    },
    {
      id: "practice-react",
      title: "React Coding Challenges",
      difficulty: "advanced",
      estimatedMinutes: 40,
      content: () => import('./practice-react.js').then(m => m.practice_react)
    },
    {
      id: "practice-behavioral",
      title: "Behavioral & Real-World Scenarios",
      difficulty: "intermediate",
      estimatedMinutes: 30,
      content: () => import('./practice-behavioral.js').then(m => m.practice_behavioral)
    }
    ]
};
