const e={id:"devops-ansible",title:"Ansible",difficulty:"intermediate",estimatedMinutes:20,tldr:["Ansible is an open-source automation tool by Red Hat for configuration management, application deployment, task automation, and orchestration.","Agentless architecture: Ansible connects via SSH (Linux) or WinRM (Windows) — no agent installation required on managed nodes. This simplifies adoption and reduces security surface.","YAML-based playbooks define automation workflows. Playbooks are human-readable, version-controllable, and idempotent — running the same playbook multiple times produces the same result.","Key concepts: Control Node (where Ansible runs), Inventory (list of managed hosts), Playbook (YAML automation file), Tasks (individual actions), Modules (discrete units of work), Roles (reusable playbook components)."],laymanDefinition:"Ansible is like having a remote control that can operate every device in your smart home at once. Instead of installing an app on each device (agent), the remote connects directly to each one via its built-in API (SSH/WinRM). You write a script (playbook): turn on the lights, set the thermostat, lock the doors. The remote follows your script exactly, ensuring every device ends up in the desired state. If you run the script again, devices already in the right state are skipped.",deepDive:[{heading:"Ansible Architecture",text:"Control node: machine with Ansible installed (Linux/Windows/WSL). Inventory: list of managed hosts in INI or YAML format — static or dynamic (from cloud provider). Facts: system information gathered from managed hosts (OS, IP, hardware). Play: maps a set of tasks to a group of hosts. Module: reusable, standalone script performed on the host (package, service, copy, template). Idempotency: modules check current state before making changes."},{heading:"Playbooks and Tasks",text:"Playbook structure: name, hosts (group target), become (privilege escalation), vars (variables), tasks (list of modules). Each task has a name and module. handlers: special tasks triggered by notifications (restart service when config changes). tags: filter which tasks to run. Pre/post tasks for setup and cleanup. Error handling: ignore_errors, failed_when, rescue/always blocks (Ansible 2.12+)."},{heading:"Ansible Modules",text:"Common modules: package (apt/yum/dnf — generic package manager), service (systemd/service management), copy (file transfer), template (Jinja2 template rendering), file (permissions, directories), command/shell (arbitrary commands), debug (print variables), assert (verify conditions), uri (HTTP requests), fetch (fetch files from remote). Cloud modules: ec2, s3, rds for AWS management. docker_*, kubernetes modules for container orchestration."},{heading:"Ansible Roles and Galaxy",text:"Roles: reusable, self-contained units of automation — package related tasks, handlers, variables, templates, and files. Role directory structure: tasks/main.yml, handlers/main.yml, templates/, files/, vars/main.yml, defaults/main.yml, meta/main.yml. Ansible Galaxy: community hub for sharing and downloading roles. Install: ansible-galaxy install geerlingguy.nginx. Best practice: organize playbooks by role for maintainability."},{heading:"Ansible Vault and Security",text:"Ansible Vault: encrypt sensitive data (passwords, keys, API tokens) within playbooks. Commands: ansible-vault create/encrypt/decrypt/rekey. Use vault IDs for multiple secrets. Include vaulted variables via vars_files. Run: ansible-playbook --ask-vault-pass or --vault-password-file. Best practices: never commit plaintext secrets; use vault for all sensitive data; restrict control node access; use SSH key-based authentication with strong passphrases."}],interviewAnswer:"Ansible is the simplest automation tool for configuration management. Its agentless architecture reduces adoption friction. Use roles for reusable automation. Use Ansible Vault for secrets. Leverage dynamic inventories for cloud environments. Test playbooks with ansible-lint and molecule. Ansible is ideal for configuration management, but for infrastructure provisioning, combine it with Terraform.",interviewQuestions:[{question:"What is Ansible?",answer:"Red Hat open-source automation tool for configuration management, deployment, and task automation using YAML playbooks."},{question:"Is Ansible agentless?",answer:"Yes — Ansible connects via SSH or WinRM without installing agents on managed nodes."},{question:"What is an Ansible playbook?",answer:"A YAML file defining automation workflows — hosts, tasks, variables, and handlers."},{question:"What is an Ansible module?",answer:"A reusable, idempotent unit of work (package, service, copy, template)."},{question:"What is an Ansible role?",answer:"A reusable package of related tasks, handlers, variables, templates, and files."},{question:"What is an Ansible inventory?",answer:"A list of managed hosts — static file or dynamic from cloud provider."},{question:"What is Ansible Galaxy?",answer:"A community hub for sharing and downloading Ansible roles."},{question:"What is Ansible Vault?",answer:"A feature for encrypting sensitive data (passwords, keys) within playbooks."},{question:"What is idempotency in Ansible?",answer:"Running a playbook multiple times produces the same result — modules check current state before making changes."},{question:"What is a handler in Ansible?",answer:"A task triggered by a notification (e.g., restart service when config file changes)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Ansible</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Control Node</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Ansible runs here</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">SSH/WinRM</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Agentless connect</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Inventory</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Host list</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Ansible</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Automation engine</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Playbooks</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">YAML workflows</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Roles</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Reusable modules</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Ansible</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Agentless automation: configurat</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">ion management, deployment, YAML</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd"> playbooks, SSH-based, idempoten</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">t modules, roles.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Ansible: Agentless automation. SSH-based, YAML pla</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ybooks, idempotent modules, roles, Ansible Galaxy,</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle"> Vault.</text></svg>',codeExamples:[{title:"Ansible Playbook for Web Server",useCase:"Install and configure Nginx.",code:`# playbooks/webserver.yml
---
- name: Configure web server
  hosts: webservers
  become: yes
  vars:
    nginx_port: 8080
    server_name: example.com

  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Copy Nginx config
      template:
        src: templates/nginx.conf.j2
        dest: /etc/nginx/sites-available/default
      notify: restart nginx

    - name: Enable site
      file:
        src: /etc/nginx/sites-available/default
        dest: /etc/nginx/sites-enabled/default
        state: link
      notify: restart nginx

    - name: Start Nginx
      service:
        name: nginx
        state: started
        enabled: yes

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted`,description:"Ansible playbook installing Nginx with a template config file and service management."},{title:"Ansible Role Directory Structure",useCase:"Reusable automation pattern.",code:`# Role directory structure: roles/nginx/

# roles/nginx/tasks/main.yml
---
- name: Install Nginx
  package:
    name: nginx
    state: present

- name: Configure Nginx
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx

- name: Start Nginx
  service:
    name: nginx
    state: started
    enabled: yes

# roles/nginx/handlers/main.yml
---
- name: restart nginx
  service:
    name: nginx
    state: restarted

# roles/nginx/vars/main.yml
---
nginx_port: 8080
worker_processes: 4

# roles/nginx/templates/nginx.conf.j2
# {{ ansible_managed }}
server {
    listen {{ nginx_port }};
    server_name {{ server_name }};
    root /var/www/html;
}`,description:"Ansible role directory structure with tasks, handlers, vars, and Jinja2 templates for Nginx."},{title:"Ansible Vault Usage",useCase:"Encrypt sensitive data.",code:`# Create an encrypted file
$ ansible-vault create secrets.yml
New Vault password:
Confirm Vault password:

# Encrypt an existing file
$ ansible-vault encrypt vars/passwords.yml

# View encrypted file content
$ ansible-vault view secrets.yml

# Edit encrypted file
$ ansible-vault edit secrets.yml

# Decrypt (for version control commit)
$ ansible-vault decrypt secrets.yml

# Use vault variables in playbook
# playbook.yml:
---
- hosts: all
  vars_files:
    - secrets.yml
  tasks:
    - debug:
        msg: "DB password is {{ db_password }}"

# Run with vault password
$ ansible-playbook playbook.yml --ask-vault-pass`,description:"Ansible Vault commands for encrypting, viewing, editing secrets and using them in playbooks."},{title:"Ansible Dynamic Inventory (AWS)",useCase:"Cloud inventory management.",code:`# inventory/aws_ec2.yml — Dynamic inventory plugin
---
plugin: amazon.aws.aws_ec2
regions:
  - us-east-1
  - us-west-2

filters:
  tag:Environment:
    - production
  instance-state-name: running

keyed_groups:
  - key: tags.Environment
    prefix: env
  - key: instance_type
    prefix: type

hostnames:
  - dns-name
  - private-dns-name

compose:
  ansible_host: public_ip_address

# Use in playbook:
# $ ansible-playbook -i inventory/aws_ec2.yml playbook.yml

# Or with explicit inventory file:
# $ ansible-playbook -i aws_ec2.yml playbook.yml`,description:"Ansible dynamic inventory plugin for AWS EC2 — automatically discovers running instances based on tags and regions."},{title:"Ansible Playbook with Error Handling",useCase:"Robust automation.",code:`# playbooks/deploy.yml — Error handling patterns
---
- name: Deploy application
  hosts: appservers
  become: yes
  gather_facts: yes

  pre_tasks:
    - name: Check required variables
      assert:
        that:
          - app_version is defined
          - db_url is defined
        fail_msg: "Required variables are missing"

  tasks:
    - name: Deploy application version
      block:
        - name: Pull Docker image
          docker_image:
            name: "myapp:{{ app_version }}"
            source: pull

        - name: Start container
          docker_container:
            name: myapp
            image: "myapp:{{ app_version }}"
            state: started
            restart: yes
      rescue:
        - name: Rollback to previous version
          docker_container:
            name: myapp
            image: "myapp:{{ previous_version }}"
            state: started
        - name: Notify failure
          debug:
            msg: "Deployment failed, rolled back"
      always:
        - name: Cleanup old images
          docker_prune:
            images: yes`,description:"Ansible playbook with assert pre-checks and block/rescue/always error handling for safe deployments."}],mcqQuestions:[{question:"How does Ansible connect to managed nodes?",options:["Via installed agent","Via SSH (Linux) or WinRM (Windows)","Via API calls","Via direct database connection"],answer:1,explanation:"Ansible is agentless — connects via SSH (Linux) or WinRM (Windows)."},{question:"What language are Ansible playbooks written in?",options:["JSON","XML","YAML","Python"],answer:2,explanation:"Ansible playbooks are written in YAML, making them human-readable and version-controllable."},{question:"What is an Ansible role?",options:["A single playbook","A reusable package of tasks, handlers, variables, and templates","A managed host","A module"],answer:1,explanation:"Roles organize related automation content into reusable, shareable units."},{question:"What is idempotency in Ansible?",options:["Running playbook once","Running playbook multiple times produces same result","Running playbook twice produces different results","Playbook fails on second run"],answer:1,explanation:"Idempotent modules check current state before making changes."},{question:"What is Ansible Vault used for?",options:["Version control","Encrypting sensitive data in playbooks","Inventory management","Module development"],answer:1,explanation:"Ansible Vault encrypts passwords, keys, and other sensitive data within playbooks."},{question:"What is the difference between a task and a handler?",options:["Tasks run always, handlers run only when notified","Tasks run once, handlers run always","Same thing","Handlers are for file operations"],answer:0,explanation:"Tasks execute normally. Handlers are special tasks that run only when notified (e.g., restart service on config change)."},{question:"Ansible — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Ansible — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Ansible — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Ansible — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_ansible};
