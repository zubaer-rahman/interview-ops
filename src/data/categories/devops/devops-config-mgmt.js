export const devops_config_mgmt = {
  "id": "devops-config-mgmt",
  "title": "Configuration Management",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Configuration Management (CM) is the practice of systematically managing and maintaining the desired state of system configurations — including software, services, files, and user accounts.",
    "CM ensures consistency across environments, prevents configuration drift, enables repeatable deployments, and provides audit trails of all configuration changes.",
    "Key principles: idempotency (same result regardless of how many times run), desired state declaration (specify what, not how), automation, and version control of all configuration.",
    "CM falls into two categories: provisioning tools (Terraform, CloudFormation — create infrastructure) and configuration management tools (Ansible, Puppet, Chef — configure software on existing infrastructure)."
  ],
  "laymanDefinition": "Configuration management is like having a dedicated facilities team for a hotel. Each room must have fresh towels, working lights, and the correct furniture arrangement (desired state). If a guest moves a chair (configuration drift), the facilities team notices during inspection and restores it (convergence). The team has a master checklist (playbook/manifest) detailing exactly how each room type should look. When the hotel upgrades its furniture (software update), every room gets the new furniture within hours.",
  "deepDive": [
    {
      "heading": "Idempotency and Desired State",
      "text": "Idempotency: applying the same configuration multiple times produces the same result. No unintended side effects from repeated runs. Desired state declaration: you declare that nginx should be installed and running — the tool figures out whether to install, start, or do nothing. This contrasts with procedural scripts that might fail if a package is already installed. Idempotency enables safe, automated, repeated execution essential for CI/CD and self-healing."
    },
    {
      "heading": "Configuration Drift and Remediation",
      "text": "Drift occurs when actual system state differs from the desired configuration. Causes: manual changes, emergency fixes, failed deployments, inconsistent patching. Detection: periodic CM runs (every 30 min), drift detection tools (CloudFormation, Terraform plan), compliance scanning (Inspec). Remediation: automated convergence (CM tool reapplies desired state), alerts on persistent drift, blameless postmortems to identify systemic causes."
    },
    {
      "heading": "Configuration Management Tools Comparison",
      "text": "Ansible: agentless (SSH), YAML playbooks, easiest to start, good for ad-hoc and config management. Puppet: master-agent, declarative DSL, best for large-scale Linux fleets, roles/profiles pattern. Chef: master-agent, Ruby DSL, strong testing culture (Test Kitchen, Inspec, ChefSpec). SaltStack: fast remote execution, event-driven, Python-based. Choose based on team skills, scale, and architectural preferences."
    },
    {
      "heading": "CM Best Practices",
      "text": "Version control all configuration code. Use a single source of truth for node definitions (CMDB, inventory). Implement code review for configuration changes. Test changes in non-production environments. Use CI/CD for configuration deployment. Monitor CM run success/failure rates. Use graduated rollouts for configuration changes (canary nodes first). Document configuration standards. Separate configuration from code (Hiera, data bags, external data sources)."
    },
    {
      "heading": "Configuration Management Lifecycle",
      "text": "Define: write configuration code (playbooks, manifests, recipes). Test: validate in development with Test Kitchen or containers. Deploy: promote through dev → staging → production. Monitor: track run status, drift detection, compliance reports. Audit: review configuration history and changes. Improve: incorporate feedback and requirements. The CM lifecycle mirrors the application development lifecycle — configuration is treated as software."
    }
  ],
  "interviewAnswer": "Configuration management is essential for maintaining consistent, reliable systems at scale. Choose the right tool based on your team's skills and infrastructure complexity. Ansible is simplest for agentless setup. Puppet excels at large-scale Linux management. Chef offers strong testing practices. Regardless of tool, version control everything, implement CI/CD, and monitor for drift and failures.",
  "interviewQuestions": [
    {
      "question": "What is configuration management?",
      "answer": "The practice of systematically managing and maintaining desired system configuration state."
    },
    {
      "question": "What is idempotency in configuration management?",
      "answer": "Running the same configuration multiple times produces the same result — no unintended side effects."
    },
    {
      "question": "What is configuration drift?",
      "answer": "When actual system state differs from the desired configuration due to manual changes or failures."
    },
    {
      "question": "What is the difference between provisioning and configuration management?",
      "answer": "Provisioning creates infrastructure (Terraform). Configuration management configures software on existing infrastructure (Ansible)."
    },
    {
      "question": "Is Ansible agentless?",
      "answer": "Yes — Ansible connects via SSH without installing agents on managed nodes."
    },
    {
      "question": "What is an Ansible playbook?",
      "answer": "A YAML file defining configuration workflows — hosts, tasks, variables, and handlers."
    },
    {
      "question": "What is a Puppet manifest?",
      "answer": "A .pp file using declarative DSL to define system resources and their desired state."
    },
    {
      "question": "What is a Chef cookbook?",
      "answer": "A package of recipes, attributes, templates, and files for configuring a system component."
    },
    {
      "question": "What is convergence in CM?",
      "answer": "The process of applying configuration to bring a system from its current state to the desired state."
    },
    {
      "question": "Why should configuration be in version control?",
      "answer": "For audit trail, change tracking, collaboration, rollback capability, and CI/CD integration."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Configuration Management</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Define</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Write config code</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Apply</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Converge state</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Verify</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Test compliance</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CM</text><text x=\"215\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Configuration Managemen</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">t</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Idempotent</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Safe re-runs</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Drift</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Auto-remediation</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CM Tools</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ansible, Puppet, Chef, SaltStack</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">. Agentless or agent-based. Idem</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">potent, declarative, version-con</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">trolled.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Configuration Management: Idempotent, declarative </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">system state management. Ansible, Puppet, Chef, Sa</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ltStack.</text></svg>",
  "codeExamples": [
    {
      "title": "CM Drift Detection with Ansible",
      "useCase": "Check for configuration drift.",
      "code": "# drift-check.yml — Detect configuration drift\n---\n- name: Check system state for drift\n  hosts: all\n  gather_facts: yes\n\n  tasks:\n    - name: Verify package state\n      package:\n        name: nginx\n        state: present\n      check_mode: yes  # Dry-run mode\n      register: package_check\n\n    - name: Verify service state\n      service:\n        name: nginx\n        state: running\n        enabled: yes\n      check_mode: yes\n      register: service_check\n\n    - name: Report drift\n      debug:\n        msg: \"DRIFT: {{ inventory_hostname }} has configuration drift\"\n      when: package_check.changed or service_check.changed",
      "description": "Ansible drift detection playbook using check_mode to verify system state without making changes."
    },
    {
      "title": "Multi-Tool CM Strategy",
      "useCase": "Terraform + Ansible workflow.",
      "code": "# Infrastructure Pipeline\n\n# Step 1: Provision infrastructure with Terraform\n$ terraform init\n$ terraform plan -out=tfplan\n$ terraform apply tfplan\n\n# Step 2: Generate Ansible inventory from Terraform output\n$ terraform output -json > /tmp/tf_output.json\n$ cat /tmp/tf_output.json | jq -r '\n  .instance_ips.value[] | select(.role == \"web\") | .private_ip\n' > inventory/webservers.ini\n\n# Step 3: Run Ansible for configuration\n$ ansible-playbook -i inventory/webservers.ini \\\n  site.yml --limit webservers\n\n# Step 4: Run Inspec compliance tests\n$ inspec exec compliance_tests/ -t ssh://ubuntu@ip\n\n# Step 5: Monitor ongoing CM runs\n# Ansible Tower/AWX schedules periodic playbooks\n# Puppet/Chef agents run every 30 minutes",
      "description": "Combined Terraform (provisioning) and Ansible (configuration) workflow for infrastructure automation."
    },
    {
      "title": "CM Lifecycle in CI/CD",
      "useCase": "Automated configuration deployment.",
      "code": "# .github/workflows/config-management.yml\nname: Configuration Management\non:\n  push:\n    paths: [\"infra/**\", \"playbooks/**\"]\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Lint Ansible playbooks\n        run: ansible-lint playbooks/\n      - name: Lint Terraform code\n        run: terraform fmt -check infra/\n\n  test:\n    needs: lint\n    runs-on: ubuntu-latest\n    steps:\n      - name: Test playbooks (check mode)\n        run: ansible-playbook playbooks/site.yml --check\n      - name: Test Terraform plan\n        run: terraform plan infra/\n\n  deploy-canary:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - name: Apply to canary\n        run: ansible-playbook playbooks/site.yml -l canary\n\n  deploy-production:\n    needs: deploy-canary\n    runs-on: ubuntu-latest\n    steps:\n      - name: Apply to production\n        run: ansible-playbook playbooks/site.yml -l production",
      "description": "CI/CD pipeline for configuration management with linting, testing, canary, and production deployment stages."
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
      "question": "What is idempotency?",
      "options": [
        "Running once produces result",
        "Running multiple times produces same result",
        "Running fails on second attempt",
        "Requires manual approval"
      ],
      "answer": 1,
      "explanation": "Idempotency means repeated application produces the same result without side effects."
    },
    {
      "question": "What is configuration drift?",
      "options": [
        "Intentionally changing configuration",
        "When actual state differs from desired configuration",
        "Configuration that works correctly",
        "Automated configuration updates"
      ],
      "answer": 1,
      "explanation": "Drift occurs when manual changes cause actual state to differ from desired state."
    },
    {
      "question": "Which CM tool is agentless?",
      "options": [
        "Puppet",
        "Chef",
        "Ansible",
        "SaltStack"
      ],
      "answer": 2,
      "explanation": "Ansible connects via SSH without requiring agents on managed nodes."
    },
    {
      "question": "What is convergence in CM?",
      "options": [
        "Network topology",
        "Applying configuration to reach desired state",
        "Database synchronization",
        "Code compilation"
      ],
      "answer": 1,
      "explanation": "Convergence is the process of applying configuration changes to reach desired state."
    },
    {
      "question": "What is the difference between provisioning and CM?",
      "options": [
        "Same thing",
        "Provisioning creates infra, CM configures software",
        "CM creates infra, provisioning configures software",
        "Both configure software"
      ],
      "answer": 1,
      "explanation": "Terraform provisions, Ansible configures — they are complementary."
    },
    {
      "question": "Why is version control important for CM?",
      "options": [
        "Larger storage",
        "Audit trail, rollback, collaboration, CI/CD",
        "Faster execution",
        "Better performance"
      ],
      "answer": 1,
      "explanation": "Version control enables change tracking, review, rollback, and automated deployment of configuration."
    },
    {
      "question": "Configuration Management — What reduces errors most?",
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
      "question": "Configuration Management — What improves speed?",
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
      "question": "Configuration Management — What is key for monitoring?",
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
      "question": "Configuration Management — What ensures quality?",
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
