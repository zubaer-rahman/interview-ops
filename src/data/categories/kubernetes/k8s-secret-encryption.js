export const k8s_secret_encryption = {
  "id": "k8s-secret-encryption",
  "title": "Secret Encryption",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "file": "k8s-secret-encryption.json",
  "interviewAnswer": "Encrypts Secret data in etcd at rest. Without encryption, Secrets are base64-encoded but unencrypted. Providers: aescbc (recommended), aesgcm, secretbox, kms (external HSM/KMS). Configured via EncryptionConfiguration on kube-apiserver.",
  "tldr": [
    "Encrypts Secret data in etcd (at rest)",
    "Providers: aescbc (recommended), aesgcm, secretbox, kms",
    "Configured via --encryption-provider-config on apiserver",
    "KMS integrates with AWS KMS, Azure Key Vault, GCP KMS"
  ],
  "deepDive": [
    {
      "heading": "EncryptionConfiguration",
      "text": "Resources: [\"secrets\"]. Providers list: first encrypts new data. identity: {} (no encryption). aescbc: {keys: [{name: k1, secret: base64(32 bytes)}]}. kms: {apiVersion: v2, name: myKMS}. Migration requires apiserver restart."
    },
    {
      "heading": "Key Rotation",
      "text": "Add new key as first provider entry. New Secrets use new key. Old Secrets decrypted with old key. Rewrite: kubectl get secrets -o json | kubectl replace -f -. KMS handles rotation externally."
    },
    {
      "heading": "Common Use Cases",
      "text": "Secret Encryption applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Does Kubernetes encrypt Secrets by default?",
      "answer": "No. Base64-encoded only. EncryptionConfiguration required."
    },
    {
      "question": "Recommended provider?",
      "answer": "aescbc (AES-CBC with PKCS#7 padding)."
    },
    {
      "question": "KMS provider benefit?",
      "answer": "Integration with cloud HSM, automatic key rotation."
    },
    {
      "question": "Force re-encryption?",
      "answer": "kubectl get secrets --all-namespaces -o json | kubectl replace -f -"
    },
    {
      "question": "Secret Encryption — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Secret Encryption — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Secret Encryption — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Secret Encryption — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Secret Encryption — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Secret Encryption — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Encryption config flag?",
      "options": [
        "--encryption-config",
        "--encryption-provider-config",
        "--encrypt-secrets"
      ],
      "answer": 1
    },
    {
      "question": "Recommended provider?",
      "options": [
        "identity",
        "aescbc",
        "secretbox"
      ],
      "answer": 1
    },
    {
      "question": "What stays unencrypted?",
      "options": [
        "Secret data",
        "Secret metadata",
        "Both"
      ],
      "answer": 1
    },
    {
      "question": "KMS provider uses?",
      "options": [
        "gRPC",
        "HTTP",
        "Unix socket"
      ],
      "answer": 0
    },
    {
      "question": "Secret Encryption — How to ensure reliability?",
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
      "question": "Secret Encryption — What helps team collaboration?",
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
      "question": "Secret Encryption — What reduces errors most?",
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
      "question": "Secret Encryption — What improves speed?",
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
      "question": "Secret Encryption — What is key for monitoring?",
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
      "question": "Secret Encryption — What ensures quality?",
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
      "title": "Create Encryption Config",
      "useCase": "Enable at-rest encryption",
      "code": "kubectl apply -f encryption-config.yaml;\necho \"Add --encryption-provider-config to apiserver\"",
      "description": "Creates EncryptionConfiguration."
    },
    {
      "title": "Rewite Secrets",
      "useCase": "Re-encrypt after key rotation",
      "code": "kubectl get secrets --all-namespaces -o json | kubectl replace -f -",
      "description": "Forces re-encryption with first provider."
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
  "laymanDefinition": "Encrypts Secret data in etcd at rest. Without encryption, Secrets are base64-encoded but unencrypted. Providers: aescbc (recommended), aesgcm, secretbox, kms (external HSM/KMS). Configured via EncryptionConfiguration on kube-apiserver.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Secret Encryption</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Secret Encryption</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Encrypts Secret data in etcd (at rest)</text></svg>"
};
