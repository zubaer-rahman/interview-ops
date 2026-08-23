export const k8s_weave = {
  "id": "k8s-weave",
  "title": "Weave",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "file": "k8s-weave.json",
  "interviewAnswer": "Weave Net creates a resilient mesh network connecting Pods across nodes. Uses fast data path (based on Linux kernel OVS/DPDK) and provides automatic encryption, DNS-based service discovery, and NetworkPolicy support.",
  "tldr": [
    "Mesh network with automatic topology discovery",
    "Encrypted traffic (NaCl cryptography)",
    "Built-in DNS-based service discovery (WeaveDNS)",
    "NetworkPolicy support via weave-npc"
  ],
  "deepDive": [
    {
      "heading": "Weave Architecture",
      "text": "Weave router on each node creates mesh connections. Fast data path: uses Linux OVS with optional DPDK for acceleration. Packets encapsulated with Weave header. Automatic peer discovery via gossip protocol. No configuration needed for new nodes."
    },
    {
      "heading": "Features",
      "text": "Encryption: NaCl cryptography with automatic key exchange. Service discovery: WeaveDNS resolves container names. Network policy: weave-npc implements Kubernetes NetworkPolicy. Multi-cloud: works across cloud providers and on-prem."
    },
    {
      "heading": "Common Use Cases",
      "text": "Weave applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is Weave Net?",
      "answer": "Mesh CNI with automatic discovery, encryption, and network policy."
    },
    {
      "question": "Encryption method?",
      "answer": "NaCl (Networking and Cryptography library) with automatic key exchange."
    },
    {
      "question": "Peer discovery?",
      "answer": "Gossip protocol — no configuration needed for new nodes."
    },
    {
      "question": "Fast data path?",
      "answer": "Linux OVS with optional DPDK acceleration."
    },
    {
      "question": "Weave — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Weave — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Weave — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Weave — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Weave — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Weave — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Weave encryption?",
      "options": [
        "None",
        "NaCl",
        "IPSec"
      ],
      "answer": 1
    },
    {
      "question": "Peer discovery via?",
      "options": [
        "BGP",
        "Gossip",
        "DNS"
      ],
      "answer": 1
    },
    {
      "question": "WeaveDNS?",
      "options": [
        "Built-in",
        "Requires CoreDNS",
        "Replaces CoreDNS"
      ],
      "answer": 0
    },
    {
      "question": "weave-npc implements?",
      "options": [
        "Routing",
        "NetworkPolicy",
        "DNS"
      ],
      "answer": 1
    },
    {
      "question": "Weave — How to ensure reliability?",
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
      "question": "Weave — What helps team collaboration?",
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
      "question": "Weave — What reduces errors most?",
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
      "question": "Weave — What improves speed?",
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
      "question": "Weave — What is key for monitoring?",
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
      "question": "Weave — What ensures quality?",
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
      "title": "Install Weave",
      "useCase": "Deploy Weave Net",
      "code": "kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml",
      "description": "Installs Weave Net."
    },
    {
      "title": "Check Weave Status",
      "useCase": "View mesh connections",
      "code": "kubectl exec -n kube-system daemonset/weave-net -- weave status",
      "description": "Shows Weave peers and connections."
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
  "laymanDefinition": "Weave Net creates a resilient mesh network connecting Pods across nodes. Uses fast data path (based on Linux kernel OVS/DPDK) and provides automatic encryption, DNS-based service discovery, and NetworkPolicy support.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Weave</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Weave</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Mesh network with automatic topology discovery</text></svg>"
};
