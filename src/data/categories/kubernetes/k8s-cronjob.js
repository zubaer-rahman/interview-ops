export const k8s_cronjob = {
  "id": "k8s-cronjob",
  "title": "CronJob",
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "file": "k8s-cronjob.json",
  "interviewAnswer": "A CronJob runs Jobs on a schedule using cron expressions. Supports concurrency policies (Allow, Forbid, Replace), starting deadlines, and history limits. Creates a Job object for each scheduled execution.",
  "tldr": [
    "Runs Jobs on recurring schedule (cron expression)",
    "concurrencyPolicy: Allow (default), Forbid, Replace",
    "startingDeadlineSeconds: grace for missed schedules",
    "successfulJobsHistoryLimit (3) and failedJobsHistoryLimit (1)"
  ],
  "deepDive": [
    {
      "heading": "Schedule Format",
      "text": "Standard 5-field cron: minute hour day month weekday. Extended with timeZone field. Special entries: @yearly, @monthly, @weekly, @daily, @hourly."
    },
    {
      "heading": "Job Tracking",
      "text": "Each execution creates a Job object. suspended: true pauses scheduling. If CronJob misses schedule by startingDeadlineSeconds, Job is skipped."
    },
    {
      "heading": "Common Use Cases",
      "text": "CronJob applies to build automation, continuous integration, test execution, deployment orchestration, and infrastructure management. Each scenario leverages specific features and configuration patterns for optimal results."
    }
  ],
  "interviewQuestions": [
    {
      "question": "What is a CronJob?",
      "answer": "Runs Jobs on schedule using cron expressions."
    },
    {
      "question": "Forbid concurrency policy?",
      "answer": "Skips new run if previous Job is still running."
    },
    {
      "question": "startingDeadlineSeconds?",
      "answer": "Grace period for missed schedules."
    },
    {
      "question": "How are executions tracked?",
      "answer": "Each execution creates a Job object."
    },
    {
      "question": "CronJob — What tools integrate well with this?",
      "answer": "Integration is possible through APIs, plugins, webhooks, and configuration files."
    },
    {
      "question": "CronJob — What are common troubleshooting steps?",
      "answer": "Troubleshooting involves checking logs, verifying configuration, and testing incrementally."
    },
    {
      "question": "CronJob — What security considerations apply here?",
      "answer": "Security considerations include access control, encryption of sensitive data, and audit logging."
    },
    {
      "question": "CronJob — What best practices should be followed?",
      "answer": "Best practices include version control, automation, monitoring, and thorough documentation."
    },
    {
      "question": "CronJob — How does this affect team collaboration?",
      "answer": "It supports collaboration through shared visibility, standardized processes, and clear workflows."
    },
    {
      "question": "CronJob — What metrics indicate successful implementation?",
      "answer": "Key metrics include adoption rate, error reduction, build times, and team satisfaction scores."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Forbid concurrency?",
      "options": [
        "Allow",
        "Forbid",
        "Replace"
      ],
      "answer": 1
    },
    {
      "question": "Default successfulJobsHistoryLimit?",
      "options": [
        "1",
        "3",
        "5",
        "10"
      ],
      "answer": 1
    },
    {
      "question": "CronJob creates?",
      "options": [
        "Pods",
        "Jobs",
        "Deployments"
      ],
      "answer": 1
    },
    {
      "question": "Suspend scheduling?",
      "options": [
        "suspended: true",
        "paused: true",
        "disabled: true"
      ],
      "answer": 0
    },
    {
      "question": "CronJob — How to ensure reliability?",
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
      "question": "CronJob — What helps team collaboration?",
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
      "question": "CronJob — What reduces errors most?",
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
      "question": "CronJob — What improves speed?",
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
      "question": "CronJob — What is key for monitoring?",
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
      "question": "CronJob — What ensures quality?",
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
      "title": "Create CronJob",
      "useCase": "Schedule a task",
      "code": "kubectl create cronjob hello --image=busybox --schedule=\"*/5 * * * *\" -- sh -c \"date\"",
      "description": "Runs every 5 minutes."
    },
    {
      "title": "Suspend CronJob",
      "useCase": "Pause executions",
      "code": "kubectl patch cronjob hello -p '{\"spec\":{\"suspend\":true}}'",
      "description": "Suspends future runs."
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
  "laymanDefinition": "A CronJob runs Jobs on a schedule using cron expressions. Supports concurrency policies (Allow, Forbid, Replace), starting deadlines, and history limits. Creates a Job object for each scheduled execution.",
  "diagramSvg": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">CronJob</text><rect x=\"20\" y=\"45\" width=\"460\" height=\"60\" rx=\"5\" fill=\"#e8f4f8\" stroke=\"#ccc\" stroke-width=\"1.5\"/><text x=\"250\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CronJob</text><text x=\"250\" y=\"155\" font-size=\"10\" fill=\"#555\" text-anchor=\"middle\">Runs Jobs on recurring schedule (cron expression)</text></svg>"
};
