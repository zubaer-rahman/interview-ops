const e={id:"devops-cloudformation",title:"CloudFormation",difficulty:"intermediate",estimatedMinutes:20,tldr:["AWS CloudFormation is a native AWS service for modeling and provisioning infrastructure using JSON or YAML templates.","Key concepts: templates (infrastructure definitions), stacks (running instances of templates), resources (AWS components), parameters (inputs), outputs (exposed values), and change sets (preview updates).","Template structure: AWSTemplateFormatVersion, Description, Parameters, Mappings, Conditions, Resources (required), Outputs. Resources section defines all AWS components to create.","Intrinsic functions: Ref (reference resource/parameter), Fn::Join (concatenation), Fn::Sub (string substitution), Fn::GetAtt (get resource attribute), Fn::Select (select from list), Conditions (IF/AND/OR/NOT)."],laymanDefinition:"CloudFormation is like a pre-approved building permit and construction crew all in one for AWS. You submit a detailed plan (template) describing exactly what you want: a server here, a database there, security rules. AWS reviews the plan (change set), then builds everything in the right order, ensuring dependencies are satisfied. If you want to demolish everything, one command tears it all down without leaving any trash behind.",deepDive:[{heading:"Template Structure and Sections",text:"AWSTemplateFormatVersion: template version (2010-09-09). Description: text description. Parameters: inputs that customize the template at stack creation (instance type, environment, etc.). Mappings: static lookup tables (region-to-AMI mappings). Conditions: conditional resource creation (create prod resources only if environment=production). Resources: AWS resources to create — heart of the template. Outputs: values exposed after stack creation (URL, IP, resource IDs)."},{heading:"Resources and Dependencies",text:"Resources are AWS components, each with a type (AWS::EC2::Instance, AWS::S3::Bucket) and properties. DependsOn: explicit dependency ordering between resources. CloudFormation automatically determines dependencies via Ref and Fn::GetAtt intrinsic functions. CreationPolicy: wait for signal from resource before considering it created. UpdatePolicy: how to handle rolling updates (AutoScalingRollingUpdate). DeletionPolicy: preserve/backup resource on stack deletion."},{heading:"Change Sets and Stack Updates",text:"Change sets show what changes will be made when updating a stack — similar to terraform plan. Types of updates: Update with No Interruption (e.g., tag changes), Update with Some Interruption (e.g., modify security group), Replacement (e.g., change AMI — instance replaced). Execute change set to apply. If update fails, CloudFormation rolls back to previous state. Stack policy: JSON document protecting critical resources from updates."},{heading:"Nested Stacks and Cross-Stack References",text:"Nested stacks: compose complex architectures from reusable sub-templates. Useful for multi-tier applications (network, compute, database). StackSets: deploy stacks across multiple accounts and regions from a single template. Cross-stack references: use Fn::ImportValue to export outputs from one stack and import in another. Best practice: separate concerns into multiple stacks — network stack, security stack, application stack."},{heading:"CloudFormation Best Practices",text:"Use parameters for environment-specific values. Use mappings for region-specific values (AMIs). Use conditions for feature flags. Implement change sets for production updates. Use nested stacks for modularity. Enable termination protection on production stacks. Use stack policies to protect critical resources. Use drift detection to identify manual changes. Use CloudFormation Guard for policy-as-code validation."}],interviewAnswer:"CloudFormation is AWS-native IaC with tight integration. Use parameters, mappings, and conditions for flexible templates. Change sets provide safe update previews. Nested stacks enable reusable infrastructure components. Drift detection identifies manual changes. Termination protection prevents accidental production stack deletion. For multi-account/region deployments, use StackSets.",interviewQuestions:[{question:"What is AWS CloudFormation?",answer:"AWS-native IaC service using JSON/YAML templates to provision infrastructure."},{question:"What is a CloudFormation stack?",answer:"A running instance of a CloudFormation template with associated resources."},{question:"What is a change set?",answer:"A preview of changes that will be made when updating a stack."},{question:"What is the required section in a CloudFormation template?",answer:"Resources — all other sections are optional."},{question:"What does Ref do in CloudFormation?",answer:"Returns the physical ID of a resource or value of a parameter."},{question:"What does Fn::GetAtt do?",answer:"Returns an attribute value from a resource (e.g., PublicIp from EC2 instance)."},{question:"What are nested stacks?",answer:"Sub-templates called from a parent template to compose modular architectures."},{question:"What is CloudFormation StackSets?",answer:"Deploy stacks across multiple accounts and regions from a single template."},{question:"What is drift detection?",answer:"Identifying when stack resources have been manually modified outside CloudFormation."},{question:"What is termination protection?",answer:"A stack setting that prevents accidental deletion of production stacks."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">CloudFormation</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Template</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Define infra</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Stack</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Running instance</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Change Set</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Preview updates</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CloudFormation</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">AWS-native IaC</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Nested</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Reusable stacks</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">StackSets</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Multi-region</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CloudFormation</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">AWS-native IaC: YAML/JSON templa</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">tes, stacks, change sets, nested</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd"> stacks, drift detection.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">CloudFormation: AWS-native IaC. Templates, stacks,</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> change sets, nested stacks, StackSets, drift dete</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ction.</text></svg>',codeExamples:[{title:"Basic CloudFormation Template",useCase:"VPC with EC2 instance.",code:`AWSTemplateFormatVersion: "2010-09-09"
Description: "Simple VPC with EC2 instance"

Parameters:
  Environment:
    Type: String
    Default: production
    AllowedValues: [dev, staging, production]

  InstanceType:
    Type: String
    Default: t3.micro
    AllowedValues: [t3.micro, t3.small, t3.medium]

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      Tags:
        - Key: Name
          Value: !Sub "\${AWS::StackName}-vpc"

  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c55b159cbfafe1f0
      InstanceType: !Ref InstanceType
      Tags:
        - Key: Name
          Value: !Sub "\${AWS::StackName}-web"

Outputs:
  PublicIP:
    Description: Public IP of web server
    Value: !GetAtt WebServer.PublicIp`,description:"CloudFormation template creating a VPC and EC2 instance with parameters and outputs."},{title:"CloudFormation Nested Stack",useCase:"Modular infrastructure.",code:`# Parent template — master.yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: "Multi-tier application with nested stacks"

Parameters:
  Environment: { Type: String }

Resources:
  NetworkStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/templates/network.yaml
      Parameters:
        Environment: !Ref Environment
        VPCCIDR: 10.0.0.0/16

  SecurityStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/templates/security.yaml
      Parameters:
        VPCID: !GetAtt NetworkStack.Outputs.VPCID

  ApplicationStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/templates/app.yaml
      Parameters:
        VPCID: !GetAtt NetworkStack.Outputs.VPCID
        SubnetIDs: !GetAtt NetworkStack.Outputs.PublicSubnetIDs
        SecurityGroupID: !GetAtt SecurityStack.Outputs.WebSGID`,description:"Parent CloudFormation template composing nested stacks for network, security, and application tiers."},{title:"CloudFormation Custom Resource",useCase:"Extend CloudFormation with Lambda.",code:`# Lambda-backed custom resource
Resources:
  MyCustomResource:
    Type: Custom::MyCustomLogic
    Properties:
      ServiceToken: !GetAtt CustomResourceLambda.Arn
      InputData:
        BucketName: my-external-system-bucket
        ApiEndpoint: https://api.example.com/status

  CustomResourceLambda:
    Type: AWS::Lambda::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs18.x
      Role: !GetAtt LambdaExecutionRole.Arn
      Code:
        ZipFile: |
          const response = require('cfn-response');
          exports.handler = (event, ctx) => {
            const status = event.RequestType === 'Delete'
              ? response.SUCCESS
              : response.SUCCESS;
            response.send(event, ctx, status, {Result: 'OK'});
          };
      Timeout: 60`,description:"Custom CloudFormation resource backed by a Lambda function for extending IaC with custom provisioning logic."},{title:"CloudFormation Drift Detection",useCase:"Find manual changes.",code:`# CLI: Detect drift on a stack

# Start drift detection
aws cloudformation detect-stack-drift \\
  --stack-name production-web

# Check drift status
aws cloudformation describe-stack-drift-detection-status \\
  --stack-drift-detection-id abc-123

# Get detailed drift results
aws cloudformation describe-stack-resource-drifts \\
  --stack-name production-web \\
  --stack-resource-drift-status-filters MODIFIED DELETED

# Output shows which resources drifted
# and the difference between expected and actual configuration

# To fix drift: update the stack or revert manual changes`,description:"CloudFormation drift detection commands to identify and investigate manual infrastructure modifications."},{title:"CloudFormation Guard Policy",useCase:"Policy-as-code for templates.",code:`# rules.guard — CloudFormation Guard rules

# Require encryption on S3 buckets
let require_encryption = %resource.Type == "AWS::S3::Bucket" =>
  %resource.Properties.BucketEncryption exists

# Require termination protection on production stacks
let require_protection = %resource.Type == "AWS::CloudFormation::Stack" =>
  %resource.Properties.TerminationProtection == true

# Restrict EC2 instance types
let allowed_types = ["t3.micro", "t3.small", "m5.large"]
let restrict_types = %resource.Type == "AWS::EC2::Instance" =>
  %resource.Properties.InstanceType in allowed_types

# Run validation (CLI)
# cfn-guard validate -r rules.guard -t template.yaml`,description:"CloudFormation Guard policy rules enforcing encryption, termination protection, and instance type restrictions."}],mcqQuestions:[{question:"What is a CloudFormation stack?",options:["A single AWS resource","A running instance of a template","A JSON/YAML file","A deployment pipeline"],answer:1,explanation:"A stack is a running instance of a CloudFormation template with created resources."},{question:"What is the required section in a CloudFormation template?",options:["Parameters","Resources","Outputs","Conditions"],answer:1,explanation:"Only the Resources section is required in a CloudFormation template."},{question:"What does a change set show?",options:["Current stack resources","Preview of changes before applying","Resource costs","Template syntax errors"],answer:1,explanation:"Change sets preview what changes will be made when updating a stack."},{question:"What is the purpose of nested stacks?",options:["Run Lambda functions","Create modular, reusable infrastructure components","Access AWS APIs","Define parameters"],answer:1,explanation:"Nested stacks enable modular, reusable infrastructure composition from sub-templates."},{question:"What does drift detection identify?",options:["Template syntax errors","Manual changes to stack resources outside CloudFormation","Resource costs","Deployment failures"],answer:1,explanation:"Drift detection finds resources modified manually outside of CloudFormation."},{question:"What is StackSets used for?",options:["Creating nested stacks","Deploying stacks across multiple accounts/regions","Defining stack outputs","Setting stack policies"],answer:1,explanation:"StackSets deploy CloudFormation stacks across multiple accounts and regions simultaneously."},{question:"CloudFormation — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"CloudFormation — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"CloudFormation — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"CloudFormation — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_cloudformation};
