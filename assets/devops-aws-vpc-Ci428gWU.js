const e={id:"devops-aws-vpc",title:"AWS VPC",difficulty:"intermediate",estimatedMinutes:20,tldr:["Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS cloud where you can launch resources in a virtual network you define.","Key components: subnets (public/private), route tables, internet gateway (IGW), NAT gateway, security groups, network ACLs, VPC peering, and VPN connections.","Subnet types: public subnets have route to IGW (web servers, load balancers), private subnets have no direct internet access (databases, app servers), isolated subnets have no route to anything outside VPC.","CIDR notation: VPC size is defined by CIDR block (e.g., 10.0.0.0/16 = 65,536 IPs). Subnets carve chunks from the VPC CIDR. Choose CIDR to avoid overlap with other networks (on-premises, peered VPCs)."],laymanDefinition:"VPC is like having your own gated community within the city (AWS cloud). You control the gates (internet gateway), street signs (route tables), house addresses (IP addresses), neighborhood boundaries (subnets), security guards at the entrance (NACLs), and door locks on each house (security groups). You can connect your community to another community (VPC peering) or to a distant town (VPN to on-premises).",deepDive:[{heading:"Subnets and Route Tables",text:"Public subnet: route table has 0.0.0.0/0 → IGW. Resources get public IPs. Private subnet: route table has 0.0.0.0/0 → NAT Gateway. Resources can initiate outbound internet (updates) but cannot be reached from internet. Route tables are associated with subnets. Each subnet must have exactly one route table. Main route table: default for subnets without explicit association. Custom route tables for specific subnet needs."},{heading:"Security Groups vs Network ACLs",text:"Security groups: stateful (return traffic auto-allowed), allow-only rules, evaluated as a whole, support allow rules only, operate at instance level (ENI). Network ACLs: stateless (return traffic must be explicitly allowed), allow and deny rules, evaluated in order (lowest number first), operate at subnet level, support allow and deny rules. Use security groups for instance-level security and NACLs for subnet-level defense in depth."},{heading:"NAT Gateway and Internet Gateway",text:"Internet Gateway (IGW): horizontally scaled, redundant VPC component allowing communication between VPC and internet. One IGW per VPC. NAT Gateway: managed service that enables instances in private subnets to connect to the internet (for updates) but prevents internet from connecting to them. NAT Gateway is deployed in a public subnet with an Elastic IP. Costs: per hour + data processing. NAT Instance (EC2-based) is legacy and not recommended."},{heading:"VPC Peering and Transit Gateway",text:"VPC Peering: direct network connection between two VPCs (same or different account/region). No transitive peering — VPC A connected to VPC B and VPC C does not mean B can reach C. Transit Gateway: hub-and-spoke topology connecting multiple VPCs and on-premises networks. Acts as a cloud router. Supports transitive routing, VPN attachments, and Direct Connect. Preferred for complex multi-VPC architectures."},{heading:"VPC Endpoints and PrivateLink",text:"Gateway endpoints: connect to S3 and DynamoDB without internet access — free, uses route table. Interface endpoints (AWS PrivateLink): connect to other AWS services (API Gateway, CloudWatch, SNS) via private IPs — charged per hour + data. Endpoints keep traffic within AWS network, never traversing the internet. Best for compliance and security-sensitive workloads requiring private connectivity."}],interviewAnswer:"VPC is the networking foundation for AWS. Design CIDR blocks carefully to avoid conflicts. Use public/private subnet separation for security. Use security groups for instance-level access control and NACLs for subnet-level defense. NAT Gateways enable private subnet outbound connectivity. Use VPC endpoints to keep traffic within AWS. For multi-VPC architectures, Transit Gateway simplifies connectivity.",interviewQuestions:[{question:"What is Amazon VPC?",answer:"Virtual Private Cloud — a logically isolated section of AWS where you define your virtual network."},{question:"What is the difference between public and private subnets?",answer:"Public subnets have route to IGW (internet accessible). Private subnets have no direct internet access."},{question:"What is the difference between security groups and NACLs?",answer:"Security groups: stateful, allow-only, instance-level. NACLs: stateless, allow+deny, subnet-level."},{question:"What does IGW stand for?",answer:"Internet Gateway — allows VPC resources to communicate with the internet."},{question:"What is a NAT Gateway?",answer:"Allows private subnet instances to initiate outbound internet traffic but prevents inbound internet access."},{question:"What is VPC peering?",answer:"A direct network connection between two VPCs enabling private IP communication."},{question:"What is AWS Transit Gateway?",answer:"A hub-and-spoke router connecting multiple VPCs and on-premises networks with transitive routing."},{question:"What is a VPC endpoint?",answer:"A private connection to AWS services (S3, DynamoDB) that does not traverse the internet."},{question:"What is PrivateLink?",answer:"AWS PrivateLink provides private connectivity between VPCs and AWS services using interface endpoints."},{question:"What is the difference between gateway endpoint and interface endpoint?",answer:"Gateway endpoints (S3/DynamoDB): free, uses route table. Interface endpoints (other services): paid, uses ENI with private IP."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">AWS VPC</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">VPC</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Virtual network</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Subnets</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Public/Private</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Route Tables</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Traffic rules</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">VPC</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Isolated cloud network</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">IGW</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Internet gateway</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">NAT</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Private outbound</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">AWS VPC</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Virtual Private Cloud: subnets, </text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">route tables, IGW, NAT, security</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd"> groups, NACLs, peering, endpoin</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">ts.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">AWS VPC: Isolated virtual network. Subnets, route </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">tables, IGW, NAT, security groups, NACLs, VPC peer</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ing.</text></svg>',codeExamples:[{title:"VPC with Public and Private Subnets",useCase:"Standard VPC setup.",code:`# Create VPC with CIDR 10.0.0.0/16
aws ec2 create-vpc --cidr-block 10.0.0.0/16 --region us-east-1
VPC_ID=vpc-12345678

# Create subnets
# Public subnet (AZ a): 10.0.1.0/24
aws ec2 create-subnet --vpc-id $VPC_ID --cidr-block 10.0.1.0/24 --availability-zone us-east-1a
# Private subnet (AZ a): 10.0.2.0/24
aws ec2 create-subnet --vpc-id $VPC_ID --cidr-block 10.0.2.0/24 --availability-zone us-east-1a

# Create and attach Internet Gateway
IGW_ID=$(aws ec2 create-internet-gateway --query InternetGateway.InternetGatewayId --output text)
aws ec2 attach-internet-gateway --vpc-id $VPC_ID --internet-gateway-id $IGW_ID

# Create public route table with IGW route
RTB_ID=$(aws ec2 create-route-table --vpc-id $VPC_ID --query RouteTable.RouteTableId --output text)
aws ec2 create-route --route-table-id $RTB_ID --destination-cidr-block 0.0.0.0/0 --gateway-id $IGW_ID
aws ec2 associate-route-table --route-table-id $RTB_ID --subnet-id subnet-public`,description:"Creating a VPC with public and private subnets, Internet Gateway, and routing configuration."},{title:"Security Group Rules",useCase:"Instance-level firewall rules.",code:`# Create security group for web server
aws ec2 create-security-group \\
  --group-name web-sg \\
  --description "Security group for web servers" \\
  --vpc-id vpc-12345678

# Allow HTTP from anywhere
aws ec2 authorize-security-group-ingress \\
  --group-id sg-12345678 \\
  --protocol tcp --port 80 --cidr 0.0.0.0/0

# Allow HTTPS from anywhere
aws ec2 authorize-security-group-ingress \\
  --group-id sg-12345678 \\
  --protocol tcp --port 443 --cidr 0.0.0.0/0

# Allow SSH only from office IP
aws ec2 authorize-security-group-ingress \\
  --group-id sg-12345678 \\
  --protocol tcp --port 22 --cidr 203.0.113.0/24

# Create DB security group — allow MySQL only from web SG
aws ec2 authorize-security-group-ingress \\
  --group-id sg-db-87654321 \\
  --protocol tcp --port 3306 --source-group sg-12345678`,description:"Security group rules for web server (HTTP/HTTPS/SSH) and database (MySQL only from web SG)."},{title:"VPC Flow Logs",useCase:"Monitor network traffic.",code:`# Create VPC Flow Logs to CloudWatch
# Step 1: Create log group
aws logs create-log-group --log-group-name vpc-flow-logs

# Step 2: Create IAM role for flow logs
# trust-policy.json: allows vpc-flow-logs to assume role
aws iam create-role \\
  --role-name vpc-flow-logs-role \\
  --assume-role-policy-document file://trust-policy.json

# Step 3: Create flow log
aws ec2 create-flow-logs \\
  --resource-type VPC \\
  --resource-ids vpc-12345678 \\
  --log-group-name vpc-flow-logs \\
  --traffic-type ALL \\
  --log-destination-type cloud-watch-logs \\
  --deliver-logs-permission-arn arn:aws:iam::123456:role/vpc-flow-logs-role`,description:"VPC Flow Logs setup to capture all network traffic metadata for analysis and troubleshooting."},{title:"NAT Gateway for Private Subnet",useCase:"Outbound internet for private instances.",code:`# Create NAT Gateway (deploy in public subnet)
# Step 1: Allocate Elastic IP
EIP_ALLOC=$(aws ec2 allocate-address --domain vpc --query AllocationId --output text)

# Step 2: Create NAT Gateway
NAT_GW_ID=$(aws ec2 create-nat-gateway \\
  --subnet-id subnet-public \\
  --allocation-id $EIP_ALLOC \\
  --query NatGateway.NatGatewayId --output text)

# Step 3: Add route in private subnet route table
# Create route table for private subnet
PRIV_RTB=$(aws ec2 create-route-table --vpc-id vpc-12345678 --query RouteTable.RouteTableId --output text)
aws ec2 create-route --route-table-id $PRIV_RTB \\
  --destination-cidr-block 0.0.0.0/0 --nat-gateway-id $NAT_GW_ID
aws ec2 associate-route-table --route-table-id $PRIV_RTB --subnet-id subnet-private`,description:"Setting up a NAT Gateway in a public subnet so private subnet instances can access the internet for updates."},{title:"VPC Peering Connection",useCase:"Connect two VPCs.",code:`# Peer VPC A (us-east-1) with VPC B (us-west-2)
# Request from VPC A
PEER_ID=$(aws ec2 create-vpc-peering-connection \\
  --vpc-id vpc-a-12345678 \\
  --peer-vpc-id vpc-b-87654321 \\
  --peer-region us-west-2 \\
  --query VpcPeeringConnection.VpcPeeringConnectionId --output text)

# Accept from VPC B (in us-west-2 region)
aws ec2 accept-vpc-peering-connection \\
  --vpc-peering-connection-id $PEER_ID --region us-west-2

# Add routes in both VPCs
# VPC A route table: VPC B CIDR → peering connection
aws ec2 create-route --route-table-id rtb-a \\
  --destination-cidr-block 10.1.0.0/16 --vpc-peering-connection-id $PEER_ID

# VPC B route table: VPC A CIDR → peering connection
aws ec2 create-route --route-table-id rtb-b --region us-west-2 \\
  --destination-cidr-block 10.0.0.0/16 --vpc-peering-connection-id $PEER_ID`,description:"Cross-region VPC peering connection setup with routes in both VPCs for bidirectional communication."}],mcqQuestions:[{question:"What is the purpose of a NAT Gateway?",options:["Allow public internet to access private instances","Allow private instances to access the internet","Connect VPCs together","Filter traffic at instance level"],answer:1,explanation:"NAT Gateway allows private subnet instances to initiate outbound internet access."},{question:"How is a security group different from a NACL?",options:["Security group is stateless, NACL is stateful","Security group is stateful, NACL is stateless","Both are stateful","Both are stateless"],answer:1,explanation:"Security groups are stateful (return traffic auto-allowed). NACLs are stateless (return traffic must be explicitly allowed)."},{question:"What is the purpose of VPC Flow Logs?",options:["Track EC2 instance performance","Capture network traffic metadata","Monitor CPU utilization","Log application errors"],answer:1,explanation:"VPC Flow Logs capture metadata about IP traffic going through network interfaces."},{question:"What is a VPC endpoint?",options:["VPN connection to on-premises","Private connection to AWS services without internet","Internet connection for VPC","NAT Gateway alternative"],answer:1,explanation:"VPC endpoints provide private connectivity to AWS services without internet traversal."},{question:"What is the difference between Transit Gateway and VPC Peering?",options:["Same thing","Transit Gateway supports transitive routing, VPC Peering does not","VPC Peering is more expensive","Transit Gateway is only for on-premises"],answer:1,explanation:"Transit Gateway acts as a hub with transitive routing. VPC Peering is point-to-point without transitivity."},{question:"What does CIDR 10.0.0.0/16 represent?",options:["256 IP addresses","65,536 IP addresses","16 IP addresses","1 IP address"],answer:1,explanation:"/16 provides 2^(32-16) = 65,536 IP addresses."},{question:"AWS VPC — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"AWS VPC — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"AWS VPC — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"AWS VPC — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_aws_vpc};
