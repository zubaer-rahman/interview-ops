export const k8s_configmap_volume = {
  "id": "k8s-configmap-volume",
  "title": "Mount as Volume",
  "difficulty": "intermediate",
  "estimatedMinutes": 10,
  "file": "k8s-configmap-volume.json",
  "interviewAnswer": "ConfigMap data can be mounted as files in Pods. Each key becomes a filename, value becomes content. Preferred for config files (nginx.conf, app.properties). Unlike env vars, volume mounts auto-update with kubelet sync (~1 min).",
  "tldr": [
    "Mount ConfigMap keys as files in Pod containers",
    "Items field: select specific keys with custom paths",
    "subPath: mounts individual file (does NOT auto-update)",
    "Volume mounts auto-update (kubelet sync ~1 min delay)"
  ],
  "deepDive": [
    {
      "heading": "Mount Options",
      "text": "Full mount: all keys become files. Items: select specific keys, custom paths, file mode. subPath: mount single file (avoids directory overlay). defaultMode: permissions (default 0644)."
    },
    {
      "heading": "Update Behavior",
      "text": "Volume mounts auto-update via symlink swap. kubelet checks ConfigMap periodically (~1 min). Symlink points to updated files atomically. Applications may need SIGHUP or reload. subPath mounts do NOT auto-update."
    },
    {
      "heading": "Common Use Cases",
      "text": "Mount as Volume applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "How to mount ConfigMap as volume?",
      "answer": "volumes[].configMap with volumeMounts in container spec."
    },
    {
      "question": "Auto-update?",
      "answer": "Full mounts yes (kubelet sync). subPath does NOT."
    },
    {
      "question": "Items field?",
      "answer": "Select specific keys, set custom paths and permissions."
    },
    {
      "question": "Permission default?",
      "answer": "0644. Changed with defaultMode field."
    },
    {
      "question": "Mount as Volume — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Mount as Volume — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Mount as Volume — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Mount as Volume — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Mount as Volume — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Mount as Volume — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Auto-update mount method?",
      "options": [
        "Full volume mount",
        "subPath mount",
        "Env var"
      ],
      "answer": 0
    },
    {
      "question": "Items field selects?",
      "options": [
        "All keys",
        "Specific keys",
        "All keys with paths"
      ],
      "answer": 1
    },
    {
      "question": "Does NOT auto-update?",
      "options": [
        "Full mount",
        "subPath",
        "Symlink mount"
      ],
      "answer": 1
    },
    {
      "question": "Default mode?",
      "options": [
        "0444",
        "0644",
        "0755"
      ],
      "answer": 1
    },
    {
      "question": "Mount as Volume — How to ensure reliability?",
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
      "question": "Mount as Volume — What helps team collaboration?",
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
      "question": "Mount as Volume — What reduces errors most?",
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
      "question": "Mount as Volume — What improves speed?",
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
      "question": "Mount as Volume — What is key for monitoring?",
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
      "question": "Mount as Volume — What ensures quality?",
      "options": [
        "Automated testing in pipeline",
        "No testing",
        "Only manual QA",
        "Skipping code review"
      ],
      "answer": 0,
      "explanation": "Automated testing integrated into the pipeline ensures consistent quality."
    }
  ],
  "codeExamples": [
    {
      "title": "Mount ConfigMap Volume",
      "useCase": "Mount as config directory",
      "code": "kubectl set volume deployment/web --add --name=config --mount-path=/etc/config --configmap=app-config",
      "description": "Mounts all keys to /etc/config."
    },
    {
      "title": "Mount with Items",
      "useCase": "Select specific keys",
      "code": "kubectl apply -f cm-volume-items.yaml",
      "description": "Mounts specific keys with custom names."
    },
    {
      "title": "subPath Mount",
      "useCase": "Single file mount",
      "code": "kubectl apply -f cm-subpath.yaml",
      "description": "Mounts single file without directory overlay."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "ConfigMap data can be mounted as files in Pods. Each key becomes a filename, value becomes content. Preferred for config files (nginx.conf, app.properties). Unlike env vars, volume mounts auto-update with kubelet sync (~1 min).",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Mount as Volume</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mount as Volume</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Mount ConfigMap keys as files in Pod containers</text></svg>"
};
