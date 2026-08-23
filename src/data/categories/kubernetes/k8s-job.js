export const k8s_job = {
  "id": "k8s-job",
  "title": "Job",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-job.json",
  "interviewAnswer": "A Job creates Pods that run a finite task to completion. Used for batch processing, migrations, backups, and workloads that terminate. Tracks completions with configurable retries, timeouts, and parallelism.",
  "tldr": [
    "Runs Pods to successful completion then stops",
    "completions (default 1) and parallelism (default 1) control execution",
    "backoffLimit (default 6) retries with exponential backoff",
    "activeDeadlineSeconds sets hard time limit"
  ],
  "deepDive": [
    {
      "heading": "Configuration",
      "text": "Non-parallel (completions=1, parallelism=1). Parallel fixed count (completions=N). Work queue pattern (completions=1, parallelism=N). restartPolicy must be OnFailure or Never."
    },
    {
      "heading": "Failure Handling",
      "text": "Failed Pods retried with exponential backoff up to backoffLimit. ttlSecondsAfterFinished auto-deletes completed Jobs. Without it, Jobs remain indefinitely."
    },
    {
      "heading": "Common Use Cases",
      "text": "Job applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a Job?",
      "answer": "Creates Pods running finite tasks to completion. For batch processing, migrations, backups."
    },
    {
      "question": "What is backoffLimit?",
      "answer": "Retries before failure (default 6). Exponential backoff starting at 10 seconds."
    },
    {
      "question": "What is activeDeadlineSeconds?",
      "answer": "Hard time limit — exceeded Jobs are marked Failed and Pods terminated."
    },
    {
      "question": "Completions vs parallelism?",
      "answer": "completions: total Pod completions needed. parallelism: max concurrent Pods."
    },
    {
      "question": "Job — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "Job — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "Job — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "Job — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "Job — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "Job — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Job completes when?",
      "options": [
        "All Pods running",
        "Specified completions exit 0",
        "First Pod exits 0"
      ],
      "answer": 1,
      "explanation": "Complete when specified Pods exit with code 0."
    },
    {
      "question": "Default backoffLimit?",
      "options": [
        "2",
        "4",
        "6",
        "10"
      ],
      "answer": 2,
      "explanation": "Default 6 retries."
    },
    {
      "question": "Adds scheduling to Jobs?",
      "options": [
        "Deployment",
        "DaemonSet",
        "CronJob",
        "StatefulSet"
      ],
      "answer": 2,
      "explanation": "CronJob adds cron scheduling."
    },
    {
      "question": "Job restart policies?",
      "options": [
        "Always",
        "OnFailure or Never",
        "UnlessStopped"
      ],
      "answer": 1,
      "explanation": "OnFailure and Never."
    },
    {
      "question": "Job — How to ensure reliability?",
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
      "question": "Job — What helps team collaboration?",
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
      "question": "Job — What reduces errors most?",
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
      "question": "Job — What improves speed?",
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
      "question": "Job — What is key for monitoring?",
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
      "question": "Job — What ensures quality?",
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
      "title": "Create Job",
      "useCase": "Run batch task",
      "code": "kubectl create job pi --image=perl:5.34 -- perl -Mbignum=bpi -wle \"print bpi(2000)\"",
      "description": "Calculates pi to 2000 digits."
    },
    {
      "title": "View Job Status",
      "useCase": "Check completion",
      "code": "kubectl get jobs\nkubectl logs job/pi",
      "description": "Shows Job status and logs."
    },
    {
      "title": "Create CronJob",
      "useCase": "Periodic task",
      "code": "kubectl create cronjob hello --image=busybox --schedule=\"*/1 * * * *\" -- sh -c \"date; echo Hello\"",
      "description": "Runs every minute."
    },
    {
      "title": "Integration Pattern",
      "useCase": "Tool integration",
      "code": "# Integration with other tools\n# Shows how components connect",
      "description": "Integration example with related tools."
    }
  ],
  "laymanDefinition": "A Job creates Pods that run a finite task to completion. Used for batch processing, migrations, backups, and workloads that terminate. Tracks completions with configurable retries, timeouts, and parallelism.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Job</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Job</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Runs Pods to successful completion then stops</text></svg>"
};
