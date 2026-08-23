export const devops_chef = {
  "id": "devops-chef",
  "title": "Chef",
  "difficulty": "intermediate",
  "estimatedMinutes": 15,
  "tldr": [
    "Chef is a configuration management tool using Ruby DSL (Domain Specific Language) to define infrastructure as code, with a flexible architecture supporting multiple deployment models.",
    "Core concepts: Cookbooks (self-contained configuration packages), Recipes (Ruby DSL files with resources), Resources (packages, services, files), Attributes (configuration data), Templates (dynamic file generation via Embedded Ruby - ERB).",
    "Architecture: Chef Workstation (development), Chef Infra Server (cookbook repository + node data), Chef Infra Client (agents running on nodes). Chef Solo (standalone) and Chef Zero (local server) for simpler setups.",
    "Chef uses a pull-based model: nodes run chef-client on a schedule (typically every 30 minutes), fetching the latest cookbooks and applying the desired state defined by the cookbook's run list and attributes."
  ],
  "laymanDefinition": "Chef is like having an executive chef in a restaurant kitchen who writes detailed recipes (cookbooks) for every dish. Each line cook (managed node) follows the recipe book assigned to their station (run list). When a new recipe version is published (updated cookbook), the executive chef posts it on the recipe board (Chef Server), and each cook follows it during the next shift (chef-client run). If a cook adds too much salt, the recipe book gets updated, and the cook follows the corrected version next time.",
  "deepDive": [
    {
      "heading": "Chef Resources and Providers",
      "text": "Resources: package (install/remove packages), service (manage daemons), file (manage files with content/template/remote), user (manage accounts), group (manage groups), execute (run commands), cron (schedule jobs), directory (manage directories), template (ERB-based dynamic files). Providers: platform-specific implementations of resources (yum vs apt for package). Resource properties: action (install/remove/create/delete), guard (only_if/not_if conditional execution), notifies (trigger other resources)."
    },
    {
      "heading": "Chef Cookbooks and Recipes",
      "text": "Cookbook structure: recipes/default.rb (main recipe), attributes/default.rb (default values), templates/default/*.erb (dynamic templates), files/default/* (static files), metadata.rb (dependencies and version), Berksfile (dependency resolution). Recipes can include other recipes. Ruby DSL enables conditionals, loops, and data manipulation within recipes. Attribute precedence: default → force_default → normal → override → force_override → automatic (ohai data)."
    },
    {
      "heading": "Chef Infra Server and Client Architecture",
      "text": "Node registers with Chef Server using client key. Node uploads ohai data (system facts). Chef Server stores: cookbooks (versioned), roles (node function definition), environments (dev/staging/prod), data bags (generic JSON data), nodes (client + attributes). Chef Client run: authenticate → fetch cookbooks → compile node attributes → build resource collection → converge (apply resources) → update node object. Reporting: success/failure, resource changes, error details."
    },
    {
      "heading": "Chef Test Kitchen and Testing",
      "text": "Test Kitchen: local development and testing framework. Provisions VMs/containers, applies cookbooks, runs tests. Drivers: Vagrant, Docker, AWS, Azure. Provisioners: chef-solo, chef-zero. Inspec: compliance and integration testing — write human-readable tests for infrastructure state. ChefSpec: unit testing — compiles recipes and checks resources without converging. Foodcritic: linting — checks cookbook style and best practices."
    },
    {
      "heading": "Chef Best Practices",
      "text": "Use version pinning for cookbook dependencies. Use environments for promotion (dev → staging → prod). Use roles to define node function. Use data bags for secrets (with chef-vault for encryption). Use Test Kitchen + Inspec for cookbook testing. Use Berkshelf for dependency management. Keep cookbooks focused (single responsibility). Use templates for configuration files. Use Ohai plugins for custom node attributes. Automate cookbook deployment with CI/CD."
    }
  ],
  "interviewAnswer": "Chef provides powerful Ruby-based infrastructure automation. Use Test Kitchen and Inspec for testing. Use roles and environments for organization. Use data bags for secrets with chef-vault. Chef is well-suited for organizations with Ruby expertise and complex configuration requirements. Its pull-based model ensures consistent state across large fleets without requiring agents to accept inbound connections.",
  "interviewQuestions": [
    {
      "question": "What is Chef?",
      "answer": "Configuration management tool using Ruby DSL for infrastructure as code."
    },
    {
      "question": "What is a Chef cookbook?",
      "answer": "A self-contained package of recipes, attributes, templates, and files for configuring a system component."
    },
    {
      "question": "What is a Chef recipe?",
      "answer": "A Ruby DSL file defining resources (packages, services, files) and their desired state."
    },
    {
      "question": "What is a Chef resource?",
      "answer": "A declaration of desired state for a system component — package, service, file, user, etc."
    },
    {
      "question": "What is Ohai?",
      "answer": "Chef\\'s system data collection tool — provides node attributes like OS, IP, memory, and CPU."
    },
    {
      "question": "What is Chef Infra Server?",
      "answer": "The central repository for cookbooks, roles, environments, data bags, and node data."
    },
    {
      "question": "What is Test Kitchen?",
      "answer": "Chef\\'s integration testing framework — provisions VMs/containers and applies cookbooks for testing."
    },
    {
      "question": "What is Inspec?",
      "answer": "Chef\\'s compliance and integration testing framework for auditing infrastructure state."
    },
    {
      "question": "What is chef-vault?",
      "answer": "A tool for encrypting sensitive data in Chef data bags using public key encryption."
    },
    {
      "question": "What is the Chef run list?",
      "answer": "An ordered list of recipes and roles applied to a node during a chef-client run."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Chef</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cookbooks</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Configuration</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Recipes</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ruby DSL</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Resources</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Desired state</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Chef</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Config management</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Ohai</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node facts</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Inspec</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Compliance test</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Chef</text><text x=\"390\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Ruby-based config management: co</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">okbooks, recipes, resources, Oha</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">i, Chef Server, Test Kitchen, In</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">spec.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Chef: Ruby-based config management. Cookbooks, rec</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ipes, resources, Ohai, Chef Server, Test Kitchen, </text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Inspec.</text></svg>",
  "codeExamples": [
    {
      "title": "Chef Recipe for Web Server",
      "useCase": "Configure Nginx with Chef.",
      "code": "# cookbooks/nginx/recipes/default.rb\npackage \"nginx\" do\n  action :install\nend\n\nservice \"nginx\" do\n  action [:enable, :start]\n  subscribes :reload, \"template[/etc/nginx/nginx.conf]\"\nend\n\ntemplate \"/etc/nginx/nginx.conf\" do\n  source \"nginx.conf.erb\"\n  owner \"root\"\n  group \"root\"\n  mode \"0644\"\n  variables(server_name: node[\"nginx\"][\"server_name\"])\nend\n\ntemplate \"/var/www/html/index.html\" do\n  source \"index.html.erb\"\n  mode \"0644\"\n  variables(title: \"Managed by Chef\")\nend\n\n# cookbooks/nginx/attributes/default.rb\ndefault[\"nginx\"][\"server_name\"] = \"localhost\"\ndefault[\"nginx\"][\"worker_processes\"] = 4",
      "description": "Chef recipe for Nginx using package, service, and template resources with ERB template rendering."
    },
    {
      "title": "Chef Role and Environment",
      "useCase": "Node classification.",
      "code": "# roles/webserver.rb — Role definition\nname \"webserver\"\ndescription \"Web server role\"\nrun_list [\n  \"recipe[nginx]\",\n  \"recipe[firewall]\",\n  \"recipe[monitoring]\"\n]\ndefault_attributes(nginx: { server_name: \"example.com\" })\n\n# environments/production.rb\nname \"production\"\ndescription \"Production environment\"\ncookbook_versions(nginx: \">= 2.0.0\", firewall: \"~> 3.1.0\")\ndefault_attributes(nginx: { worker_processes: 8 })\noverride_attributes(monitoring: { alert_level: \"critical\" })\n\n# Apply role to node (in Chef Server or client.rb)\n# \"role[webserver]\" in the node run list\n# Node can have multiple roles and recipes in run list",
      "description": "Chef role and environment definitions for node classification and environment-specific configuration."
    },
    {
      "title": "Chef Data Bag with chef-vault",
      "useCase": "Secure secrets management.",
      "code": "# Create encrypted data bag item\n# $ knife vault create passwords db_password\n\n# Encrypted data bag item stored on Chef Server:\n# data_bags/passwords/db_password.json (encrypted)\n\n# Chef recipe accessing vault item\nrequire \"chef-vault\"\n\ndb_secret = ChefVault::Item.load(\"passwords\", \"db_password\")\ndb_password = db_secret[\"password\"]\ndb_host = db_secret[\"host\"]\n\ntemplate \"/etc/myapp/database.yml\" do\n  source \"database.yml.erb\"\n  variables(\n    host: db_host,\n    password: db_password\n  )\n  sensitive true  # Prevent password in logs\nend\n\n# Also supports multiple recipients:\n# $ knife vault create passwords db_password\n#   -S \"role:webserver\"  # Admins + webserver nodes as recipients",
      "description": "Chef vault encrypted data bag for secure database password management across authorized nodes."
    },
    {
      "title": "ChefSpec Unit Testing",
      "useCase": "Test recipes without converging.",
      "code": "# spec/unit/recipes/default_spec.rb\nrequire 'spec_helper'\n\ndescribe 'nginx::default' do\n  let(:chef_run) { ChefSpec::ServerRunner.new.converge(described_recipe) }\n\n  it 'installs nginx' do\n    expect(chef_run).to install_package('nginx')\n  end\n\n  it 'enables and starts nginx' do\n    expect(chef_run).to enable_service('nginx')\n    expect(chef_run).to start_service('nginx')\n  end\n\n  it 'creates nginx.conf from template' do\n    expect(chef_run).to create_template('/etc/nginx/nginx.conf')\n    expect(chef_run.template('/etc/nginx/nginx.conf')).to\n      notify('service[nginx]').to(:reload)\n  end\n\n  it 'uses node attribute for server_name' do\n    chef_run = ChefSpec::ServerRunner.new do |node|\n      node.normal['nginx']['server_name'] = 'example.com'\n    end.converge(described_recipe)\n    expect(chef_run).to render_file('/etc/nginx/nginx.conf')\n      .with_content(/server_name example.com/)\n  end\nend",
      "description": "ChefSpec unit tests verifying package installation, service management, template creation, and attribute usage."
    },
    {
      "title": "Inspec Compliance Tests",
      "useCase": "Verify infrastructure state.",
      "code": "# test/integration/default/nginx_test.rb\ncontrol 'nginx-01' do\n  impact 1.0\n  title 'Nginx should be installed and running'\n\n  describe package('nginx') do\n    it { should be_installed }\n  end\n\n  describe service('nginx') do\n    it { should be_enabled }\n    it { should be_running }\n  end\nend\n\ncontrol 'nginx-02' do\n  impact 0.7\n  title 'Nginx should listen on port 80'\n\n  describe port(80) do\n    it { should be_listening }\n    its('protocols') { should include 'tcp' }\n  end\n\n  describe http('http://localhost') do\n    its('status') { should eq 200 }\n    its('body') { should include 'Managed by Chef' }\n  end\nend",
      "description": "Inspec compliance tests verifying Nginx package, service, port, and HTTP response in Chef cookbook testing."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What language does Chef use for its DSL?",
      "options": [
        "Python",
        "Ruby",
        "YAML",
        "JSON"
      ],
      "answer": 1,
      "explanation": "Chef uses Ruby DSL for defining recipes and resources."
    },
    {
      "question": "What is a Chef cookbook?",
      "options": [
        "A recipe execution plan",
        "A package of recipes, attributes, templates, and files",
        "A Chef Server component",
        "A testing framework"
      ],
      "answer": 1,
      "explanation": "Cookbooks are self-contained packages of configuration content including recipes, templates, and files."
    },
    {
      "question": "What is Ohai in Chef?",
      "options": [
        "A testing tool",
        "A system data collection tool providing node attributes",
        "A cookbook manager",
        "A secret encryption tool"
      ],
      "answer": 1,
      "explanation": "Ohai collects system data at the start of every Chef run, providing attributes like OS, IP, and memory."
    },
    {
      "question": "What is the Chef run list?",
      "options": [
        "A list of Chef Server features",
        "An ordered list of recipes and roles applied to a node",
        "A cookbook dependency list",
        "A test case list"
      ],
      "answer": 1,
      "explanation": "The run list defines which recipes and roles are applied to a node during convergence."
    },
    {
      "question": "What is Inspec used for in Chef?",
      "options": [
        "Cookbook development",
        "Compliance and integration testing of infrastructure",
        "Secrets management",
        "Node registration"
      ],
      "answer": 1,
      "explanation": "Inspec is an auditing and testing framework for verifying infrastructure compliance and state."
    },
    {
      "question": "What is chef-vault?",
      "options": [
        "A storage system",
        "Encrypted data bag management using public key encryption",
        "A Chef Server component",
        "A testing library"
      ],
      "answer": 1,
      "explanation": "chef-vault encrypts data bag items with public key encryption for secure secret distribution."
    },
    {
      "question": "Chef — What reduces errors most?",
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
      "question": "Chef — What improves speed?",
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
      "question": "Chef — What is key for monitoring?",
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
      "question": "Chef — What ensures quality?",
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
