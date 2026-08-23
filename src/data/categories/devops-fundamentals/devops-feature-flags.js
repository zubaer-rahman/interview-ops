export const devops_feature_flags = {
  "id": "devops-feature-flags",
  "title": "Feature Flags",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Feature flags (feature toggles) are a technique that turns functionality on/off without deploying new code.",
    "They decouple deployment from release — you can deploy code that is \"dark\" (inactive) and release it later by flipping a flag.",
    "Types: release flags, experiment flags, ops flags, permission flags. Each serves a different purpose.",
    "Tools: LaunchDarkly, Split.io, Unleash, Flagsmith, custom implementation with config files or env vars."
  ],
  "laymanDefinition": "Feature flags are like light switches for your application features. You install the light fixture (deploy code) but keep the switch off. Later, flip the switch (enable flag) to turn on the light without any electrical work. You can also dim (gradually roll out) or turn off instantly if something goes wrong.",
  "deepDive": [
    {
      "heading": "Types of Feature Flags",
      "text": "Release flags: toggle incomplete features (trunk-based dev). Experiment flags: A/B testing, canary, percentage rollouts. Ops flags: kill switches, maintenance mode, degrade functionality. Permission flags: control feature access by user tier/role (premium features)."
    },
    {
      "heading": "Feature Flag Best Practices",
      "text": "Use short-lived flags for releases (remove after feature stabilizes). Use long-lived flags for ops (kill switches). Name flags clearly and consistently. Log flag evaluations for debugging. Monitor flag flips (who changed what). Avoid flag-induced tech debt — clean up old flags."
    },
    {
      "heading": "Feature Flags vs Branching",
      "text": "Feature flags enable trunk-based development — no long-lived branches. Instead of \"merge when ready\", you deploy continuously and release with flags. Benefits: fewer merge conflicts, continuous integration, instant rollback (flip flag off). Flags are superior to feature branches for most cases."
    },
    {
      "heading": "Canary Releases with Flags",
      "text": "Flags can enable gradual rollouts: enable for 1% of users, monitor, increase to 10%, 50%, 100%. User targeting: enable for internal users first, then beta, then all. Rollback: disable the flag — instant, no redeployment needed. Combine with deployment strategies for maximum safety."
    }
  ],
  "interviewAnswer": "Feature flags decouple deployment from release. Deploy continuously, release when ready. Trunk-based development. Instant rollback by flipping a flag. Use short-lived flags for features, long-lived flags for ops. Clean up old flags to avoid tech debt.",
  "interviewQuestions": [
    {
      "question": "What are feature flags?",
      "answer": "Technique to turn functionality on/off without deploying new code, decoupling deployment from release."
    },
    {
      "question": "What are the types of feature flags?",
      "answer": "Release flags, experiment flags, ops flags, permission flags."
    },
    {
      "question": "How do feature flags enable trunk-based development?",
      "answer": "No long-lived branches. Deploy incomplete features behind flags, enable when ready."
    },
    {
      "question": "What is a kill switch?",
      "answer": "An ops flag that disables a feature instantly if it causes problems in production (instant rollback)."
    },
    {
      "question": "What is a best practice for release flags?",
      "answer": "Short-lived — remove after the feature is fully rolled out and stable."
    },
    {
      "question": "What is LaunchDarkly?",
      "answer": "A commercial feature flag platform with targeting, percentage rollouts, and A/B testing capabilities."
    },
    {
      "question": "Feature Flags — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Feature Flags — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Feature Flags — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Feature Flags — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Feature Flags</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Code Deployed</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Behind flag = OFF</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Flag System</text><text x=\"215\" y=\"43\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">LaunchDarkly / Unlea</text><text x=\"215\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sh</text><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Flag ON →</text><text x=\"65\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Feature active for u</text><text x=\"65\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">sers</text><rect x=\"10\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Flag OFF →</text><text x=\"65\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Feature hidden/deact</text><text x=\"65\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ivated</text><rect x=\"10\" y=\"130\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rollback</text><text x=\"65\" y=\"138\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Disable flag = insta</text><text x=\"65\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">nt</text><rect x=\"10\" y=\"160\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"65\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Clean Up</text><text x=\"65\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Remove flag after st</text><text x=\"65\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">able</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Feature Flags</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Decouple deploy from release. Depl</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">oy dark, release with flag. Instan</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">t rollback. Trunk-based dev.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Feature Flags: Toggle features without redeploying</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">. Deploy continuously, release when ready.</text></svg>",
  "codeExamples": [
    {
      "title": "Feature Flag in Code (LaunchDarkly)",
      "useCase": "Simple flag check.",
      "code": "const launchdarkly = require('@launchdarkly/node-server-sdk');\n\nconst client = launchdarkly.init(process.env.LD_SDK_KEY);\n\napp.get('/api/checkout', async (req, res) => {\n  const user = { key: req.userId };\n\n  // Check if new checkout is enabled for user\n  const useNewCheckout = await client.variation(\n    'new-checkout-flow', user, false\n  );\n\n  if (useNewCheckout) {\n    return handleNewCheckout(req, res);\n  }\n\n  return handleOldCheckout(req, res);\n});",
      "description": "LaunchDarkly feature flag check — routes to new or old checkout flow based on flag."
    },
    {
      "title": "Custom Feature Flag with Config",
      "useCase": "Simple file-based flags.",
      "code": "// flags.json — feature flag configuration\n{\n  \"new-checkout-flow\": {\n    \"enabled\": false,\n    \"users\": [\"preview_user_1\", \"preview_user_2\"],\n    \"percentage\": 0\n  },\n  \"dark-mode\": {\n    \"enabled\": true,\n    \"users\": [],\n    \"percentage\": 100\n  },\n  \"maintenance-mode\": {\n    \"enabled\": false  // kill switch\n  }\n}\n\n// Check flag in code\nfunction isEnabled(flagName, userId) {\n  const flag = flags[flagName];\n  if (!flag) return false;\n  if (flag.users?.includes(userId)) return true;\n  if (flag.enabled) return true;\n  return false;\n}",
      "description": "Simple JSON-based feature flag implementation with user targeting and percentage rollout support."
    },
    {
      "title": "Advanced Configuration",
      "useCase": "Complex scenario",
      "code": "# Advanced pattern for complex scenarios\n# Includes error handling",
      "description": "Advanced configuration example."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What do feature flags decouple?",
      "options": [
        "Frontend from backend",
        "Deployment from release",
        "Testing from building",
        "Monitoring from alerting"
      ],
      "answer": 1,
      "explanation": "Feature flags decouple deployment (deploy code) from release (enable for users)."
    },
    {
      "question": "What is a kill switch flag?",
      "options": [
        "A flag that deletes code",
        "An ops flag that instantly disables problematic features",
        "A flag that kills processes",
        "A security flag"
      ],
      "answer": 1,
      "explanation": "A kill switch is an ops flag that instantly disables a feature if it causes problems."
    },
    {
      "question": "What happens to release flags after stabilization?",
      "options": [
        "Keep forever",
        "Remove/clean up",
        "Convert to ops flag",
        "Ignore"
      ],
      "answer": 1,
      "explanation": "Release flags should be short-lived and removed after the feature is fully rolled out and stable."
    },
    {
      "question": "Feature Flags — What is important for security?",
      "options": [
        "Access control and encryption",
        "Open access",
        "Shared passwords",
        "No auditing"
      ],
      "answer": 0,
      "explanation": "Access control and encryption are fundamental security measures."
    },
    {
      "question": "Feature Flags — How to ensure reliability?",
      "options": [
        "Automated testing and monitoring",
        "Manual checks only",
        "No testing",
        "Reactive fixes"
      ],
      "answer": 0,
      "explanation": "Automated testing and monitoring ensure consistent reliability."
    },
    {
      "question": "Feature Flags — What helps team collaboration?",
      "options": [
        "Shared workflows and visibility",
        "Isolated work",
        "No documentation",
        "Siloed tools"
      ],
      "answer": 0,
      "explanation": "Shared workflows and visibility enable better collaboration."
    },
    {
      "question": "Feature Flags — What reduces errors most?",
      "options": [
        "Automation",
        "Manual processes",
        "Rushing",
        "Bypassing reviews"
      ],
      "answer": 0,
      "explanation": "Automation consistently eliminates human errors."
    },
    {
      "question": "Feature Flags — What improves speed?",
      "options": [
        "Parallel execution and caching",
        "Serial execution",
        "No optimization",
        "Manual steps"
      ],
      "answer": 0,
      "explanation": "Parallel execution and caching significantly improve speed."
    },
    {
      "question": "Feature Flags — What is key for monitoring?",
      "options": [
        "Metrics dashboards and alerts",
        "No monitoring",
        "Only error logs",
        "Manual checks"
      ],
      "answer": 0,
      "explanation": "Metrics dashboards and alerts provide actionable insights."
    },
    {
      "question": "Feature Flags — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ]
};
