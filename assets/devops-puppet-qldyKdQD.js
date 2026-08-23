const e={id:"devops-puppet",title:"Puppet",difficulty:"intermediate",estimatedMinutes:15,tldr:["Puppet is a configuration management tool that uses a declarative language to define system state, with a master-agent architecture for managing infrastructure at scale.","Puppet DSL (Domain Specific Language) defines resources including packages, services, files, users, groups, cron jobs, and custom types — all declared with desired state.","Architecture: Primary server (master) compiles and serves catalogs; Agents (clients) pull catalogs and enforce state. PuppetDB stores facts and reports. Console provides web UI.","Key concepts: manifests (.pp files), classes (grouped resources), modules (package of manifests + files + templates), facts (system information), catalog (compiled configuration for node), and reports (execution results)."],laymanDefinition:"Puppet is like a detailed homeowners association (HOA) rulebook for your servers. Each server (house) must adhere to the rules defined in the community charter (Puppet manifests). The HOA office (primary server) checks each house periodically: is the lawn mowed (service running)? Is the paint color right (package version)? If a house violates the rules, the HOA issues a fix (enforces desired state). The HOA office never changes the rules without an update — and every change is tracked.",deepDive:[{heading:"Puppet Resource Types",text:"Core resource types: package (install/remove software), service (start/stop/enable), file (manage files with content/source/owner/mode), user (manage accounts), group (manage groups), cron (schedule jobs), exec (run commands — use sparingly), notify (log messages). Each resource has a type, title, attributes, and ensure (present/absent/running/stopped). Puppet Forge provides thousands of community modules extending resource types."},{heading:"Puppet Language and Manifests",text:"Manifests (.pp files) declare resources. Relationships between resources: require (before), before (after), notify (refresh), subscribe (refresh reverse). Variables: $variable_name, data types (String, Integer, Boolean, Array, Hash). Conditional statements: if/elsif/else, case, selectors. Iteration: each, map, filter (future parser). Lambdas: $data.each |$item| { ... }. Facter: built-in system facts ($facts[\\'os\\'][\\'family\\'])."},{heading:"Puppet Modules and Classes",text:"Class: named collection of resources. Class parameters: customize behavior. Module: directory structure — manifests/, files/, templates/, lib/, tests/, spec/. Module naming: author-modulename. Init.pp: main class. App/component modules for different concerns. Data separation: params.pp pattern for OS-specific defaults. Hiera: hierarchical configuration data — separates code from configuration. Hiera hierarchy: node-specific → environment → common."},{heading:"Puppet Master-Agent Workflow",text:"Agent sends facts to primary server. Primary server compiles catalog using manifests, modules, Hiera data, and facts. Catalog is signed and sent to agent. Agent applies catalog locally, enforcing resource states. Agent reports results back to primary server. PuppetDB stores facts, catalogs, and reports — enables search and query. Default run interval: 30 minutes. Run manually: puppet agent --test. No-op mode: puppet agent --noop (preview without changes)."},{heading:"Puppet Best Practices",text:"Use roles and profiles pattern: profiles wrap component modules with organization-specific config; roles compose profiles for node types. Use Hiera for data separation. Use rspec-puppet for unit testing. Use puppet-lint for code quality. Version control all manifests and modules. Use environments for dev/staging/prod separation. Pin module versions in Puppetfile. Monitor Puppet run reports for failures. Use Code Manager for Git-driven deployment."}],interviewAnswer:"Puppet provides powerful declarative configuration management at scale. Use the roles and profiles pattern for organization. Separate code from data with Hiera. Use environments for change management. Test modules with rspec-puppet. Puppet excels at maintaining consistent system state across large server fleets, but requires more infrastructure (primary server, PuppetDB) than agentless tools like Ansible.",interviewQuestions:[{question:"What is Puppet?",answer:"Configuration management tool using declarative DSL to define and enforce system state at scale."},{question:"What is the Puppet architecture?",answer:"Primary server (master) compiles catalogs; agents pull and apply catalogs to maintain desired state."},{question:"What is a Puppet manifest?",answer:"A .pp file declaring resources with desired state using the Puppet DSL."},{question:"What is a Puppet module?",answer:"A self-contained package of manifests, files, templates, and tests organized by functionality."},{question:"What is Hiera?",answer:"Puppet\\'s hierarchical configuration data system — separates code from configuration data."},{question:"What are Puppet facts?",answer:"System information gathered by Facter — OS, IP, memory, CPU — available as $facts[\\'os\\'][\\'family\\']."},{question:"What is the roles and profiles pattern?",answer:"Roles compose profiles for node types. Profiles wrap component modules with org-specific configuration."},{question:"What is PuppetDB?",answer:"Database storing facts, catalogs, and reports — enables search and cross-node queries."},{question:"What is puppet-lint?",answer:"A tool for checking Puppet DSL code quality and style compliance."},{question:"What does the --noop flag do?",answer:"Runs Puppet in no-operation mode — shows what would change without actually making changes."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Puppet</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Manifests</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Declare state</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Modules</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Organized code</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Hiera</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Config data</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Puppet</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Config management</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Facts</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">System info</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Catalog</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Compiled config</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Puppet</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">Declarative config management: m</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">aster-agent, DSL, modules, Hiera</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">, facts, roles/profiles pattern.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Puppet: Declarative config management. Master-agen</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">t, DSL, modules, Hiera, roles/profiles, PuppetDB.</text></svg>',codeExamples:[{title:"Puppet Manifest Example",useCase:"Manage Nginx with Puppet.",code:`# manifests/site.pp — Nginx configuration

class nginx {
  package { "nginx":
    ensure  => installed,
  }

  service { "nginx":
    ensure    => running,
    enable    => true,
    subscribe => File["/etc/nginx/nginx.conf"],
  }

  file { "/etc/nginx/nginx.conf":
    ensure  => file,
    owner   => "root",
    group   => "root",
    mode    => "0644",
    content => template("nginx/nginx.conf.erb"),
  }

  file { "/var/www/html/index.html":
    ensure  => file,
    content => "<h1>Managed by Puppet</h1>",
    mode    => "0644",
  }
}

# Node classification
node "web-01.example.com" {
  include nginx
  include monitoring
}`,description:"Puppet manifest declaring nginx package, service (with config subscription), and HTML file resources."},{title:"Puppet Roles and Profiles",useCase:"Organizational pattern.",code:`# Profile: wraps nginx module with org config
# profiles/manifests/nginx.pp
class profiles::nginx {
  class { "nginx":
    worker_processes => 4,
    server_name      => "example.com",
  }

  file { "/etc/nginx/conf.d/security.conf":
    ensure => file,
    source => "puppet:///modules/profiles/security.conf",
    notify => Service["nginx"],
  }
}

# Role: composes profiles for a web server
# roles/manifests/webserver.pp
class roles::webserver {
  include profiles::nginx
  include profiles::php
  include profiles::monitoring
}

# Node classification
node "web-01" {
  include roles::webserver
}

# Node "db-01" {
  # include roles::database
# }`,description:"Puppet roles and profiles pattern for organizing configuration — profiles wrap modules, roles compose profiles for node types."},{title:"Puppet Hiera Configuration",useCase:"Data separation.",code:`# hiera.yaml — Hiera hierarchy configuration
---
version: 5
defaults:
  datadir: data
  data_hash: yaml_data

hierarchy:
  - name: "Node-specific data"
    path: "nodes/%{trusted.certname}.yaml"

  - name: "Environment data"
    path: "environment/%{server_facts.environment}.yaml"

  - name: "OS family data"
    path: "os/%{facts.os.family}.yaml"

  - name: "Common data"
    path: "common.yaml"

# data/common.yaml
---
nginx::worker_processes: 4
nginx::server_name: example.com
ntp::servers:
  - 0.pool.ntp.org
  - 1.pool.ntp.org

# data/nodes/web-01.example.com.yaml
---
nginx::server_name: web-01.example.com`,description:"Puppet Hiera configuration defining data hierarchy from most specific (node) to most general (common)."},{title:"Puppet Code Manager Setup",useCase:"Git-driven deployment.",code:`# Puppetfile — Module dependencies
forge "https://forge.puppet.com"

# Modules from Puppet Forge
mod "puppetlabs/stdlib", "9.0.0"
mod "puppetlabs/ntp", "9.1.0"
mod "puppetlabs/apt", "9.0.0"

# Custom modules from Git
mod "profiles",
  git: "https://github.com/company/puppet-profiles"
  ref: "main"

mod "roles",
  git: "https://github.com/company/puppet-roles"
  ref: "1.2.0"

# puppet-code_manager:
# Automatically deploys environments from Git branches
# Production branch → production environment
# Development branches → feature environments`,description:"Puppetfile defining module dependencies from Puppet Forge and custom Git repositories for Code Manager."},{title:"Puppet Testing with rspec-puppet",useCase:"Unit test manifests.",code:`# spec/classes/nginx_spec.rb
require 'spec_helper'

describe 'nginx' do
  on_supported_os.each do |os, facts|
    context "on #{os}" do
      let(:facts) { facts }

      it { is_expected.to compile }
      it { is_expected.to contain_package('nginx').with_ensure('installed') }
      it { is_expected.to contain_service('nginx').with_ensure('running') }
      it { is_expected.to contain_file('/etc/nginx/nginx.conf') }

      context 'with custom port' do
        let(:params) { { nginx_port: 9090 } }
        it 'uses custom port in config' do
          is_expected.to contain_file('/etc/nginx/nginx.conf')
            .with_content(/listen 9090/)
        end
      end
    end
  end
end`,description:"RSpec-puppet unit tests verifying class compilation, resources, and custom parameters across multiple OS platforms."}],mcqQuestions:[{question:"What is the Puppet architecture?",options:["Agentless SSH","Master-agent with catalog compilation","Client-server with REST API","Peer-to-peer"],answer:1,explanation:"Puppet uses master-agent architecture where the primary server compiles catalogs for agents."},{question:"What is the Puppet DSL?",options:["A scripting language","A declarative language for defining system state","A query language","A markup language"],answer:1,explanation:"Puppet DSL is declarative — you specify desired state, not the steps to achieve it."},{question:"What is Hiera used for in Puppet?",options:["Module testing","Hierarchical configuration data separation","Node classification","Report generation"],answer:1,explanation:"Hiera separates configuration data from Puppet code with a hierarchy of data sources."},{question:"What is the roles and profiles pattern?",options:["User management","Organizing Puppet code — profiles wrap modules, roles compose profiles","Module development","Data encryption"],answer:1,explanation:"Roles and profiles provide a clean separation of configuration layers."},{question:"What is PuppetDB?",options:["Configuration backup","Database storing facts, catalogs, and reports","Primary server database","Module repository"],answer:1,explanation:"PuppetDB stores facts, catalogs, and reports for query and analysis."},{question:"What does the --noop flag do in Puppet?",options:["Runs without logging","Previews changes without applying them","Disables Puppet permanently","Skips failed resources"],answer:1,explanation:"--noop performs a dry run showing what would change without actually applying changes."},{question:"Puppet — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Puppet — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Puppet — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Puppet — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_puppet};
