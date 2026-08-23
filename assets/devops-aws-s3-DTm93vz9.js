const e={id:"devops-aws-s3",title:"AWS S3",difficulty:"intermediate",estimatedMinutes:20,tldr:["Amazon S3 (Simple Storage Service) is a highly durable, scalable, and secure object storage service for any type of data.","Key concepts: buckets (containers), objects (files + metadata), keys (unique identifiers), prefixes (folder-like organization), and versioning (multiple versions of same object).","Storage classes: Standard (frequent access), Intelligent-Tiering (auto cost optimization), Standard-IA (infrequent access), One Zone-IA (lower cost, single AZ), Glacier (archive, minutes to retrieve), Glacier Deep Archive (lowest cost, hours to retrieve).","Security: bucket policies (resource-based), IAM policies (user-based), ACLs (legacy), block public access settings, encryption (SSE-S3, SSE-KMS, SSE-C), and Object Lock (WORM compliance)."],laymanDefinition:"S3 is like a massive, infinitely expandable digital warehouse where you can store anything from a single photo to petabytes of data. Each item (object) is stored in a bin (bucket) with a label (key). The warehouse never floods, never catches fire (99.9999999999% durability), and you can retrieve items instantly (Standard) or wait a bit for discounted storage (Glacier). It is like having a warehouse with a money-back guarantee on every item.",deepDive:[{heading:"S3 Storage Classes",text:"S3 Standard: 99.99% availability, for frequently accessed data. S3 Intelligent-Tiering: auto-moves objects between tiers based on access patterns, monitoring fee applies. S3 Standard-IA: for infrequent access, retrieval fee. S3 One Zone-IA: lower cost, single AZ, no AZ resilience. S3 Glacier: for archives, retrieval minutes to hours. S3 Glacier Deep Archive: lowest cost, retrieval within 12 hours. Lifecycle policies automate transitions between classes."},{heading:"Data Consistency Model",text:"S3 provides strong read-after-write consistency for PUTs of new objects (since Dec 2020). Previously eventual consistency for overwrite PUTs and DELETEs is now also strong consistency. This means any read after a write, overwrite, or delete will return the latest version. No more waiting for propagation. This simplifies application logic significantly."},{heading:"S3 Security and Access Control",text:"Bucket policies: JSON-based resource policies granting cross-account access. IAM policies: control which users/roles can access S3. Block Public Access: four settings at account and bucket level to prevent any public access. Encryption: SSE-S3 (AES-256, Amazon-managed keys), SSE-KMS (AWS KMS, separate permissions), SSE-C (customer-provided keys). S3 Object Lock: write-once-read-many (WORM) for compliance, legal holds, retention periods."},{heading:"Versioning and Lifecycle Management",text:"Versioning: keeps multiple versions of an object, protects against accidental deletes and overwrites. Once enabled, cannot be disabled — only suspended. Lifecycle rules: transition objects to cheaper storage classes (Standard → IA → Glacier → Deep Archive) and expire (delete) objects after specified days. Filter by prefix or tags. Version-specific transitions for noncurrent versions."},{heading:"S3 Performance Optimization",text:"S3 automatically scales to high request rates. No need to pre-warm. Best practices: use prefixes for parallel performance (e.g., /YYYY/MM/DD/HH/), use S3 Transfer Acceleration for long-distance uploads (edge locations), use multipart upload for large objects (>100MB), use S3 Select/Athena for server-side filtering (reduce data transfer), enable S3 Inventory for managing billions of objects."}],interviewAnswer:"S3 is the backbone of AWS storage. Choose the right storage class based on access patterns. Enable versioning for data protection. Use lifecycle policies to optimize costs. Implement security at multiple levels: bucket policies, IAM, encryption, and block public access. For performance, distribute objects across prefixes and use multipart uploads for large files.",interviewQuestions:[{question:"What is Amazon S3?",answer:"Simple Storage Service — highly durable, scalable object storage for any type of data."},{question:"What is S3\\'s durability?",answer:"99.9999999999% (11 nines) — objects are replicated across multiple facilities."},{question:"What are the S3 storage classes?",answer:"Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive."},{question:"What is the difference between S3 Standard and Glacier?",answer:"Standard: immediate access, higher cost. Glacier: archive storage, minutes to hours retrieval, much lower cost."},{question:"What is S3 versioning?",answer:"Keeping multiple versions of objects to protect against accidental deletes and overwrites."},{question:"What is an S3 lifecycle policy?",answer:"Rules that automatically transition objects between storage classes and expire them after specified time."},{question:"What is the S3 consistency model?",answer:"Strong read-after-write consistency for all operations — you always read the latest version."},{question:"What encryption options does S3 offer?",answer:"SSE-S3 (AES-256), SSE-KMS (KMS keys), SSE-C (customer keys), and client-side encryption."},{question:"What is S3 Object Lock?",answer:"A feature that prevents objects from being deleted or overwritten for a fixed time or indefinitely (WORM)."},{question:"What is S3 Transfer Acceleration?",answer:"Fast uploads using AWS edge locations — good for long-distance or跨国 transfers."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">AWS S3</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">S3 Bucket</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Container</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">S3 Object</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">File + metadata</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Versioning</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Multiple versions</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">S3</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Simple Storage Service</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Policies</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Bucket + IAM</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Encryption</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">SSE-S3/KMS/C</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">AWS S3</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Object storage: buckets, version</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">ing, lifecycle policies, securit</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">y, encryption, 11 nines durabili</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">ty.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">AWS S3: Scalable object storage. Buckets, versioni</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ng, lifecycle, security, encryption, storage class</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">es.</text></svg>',codeExamples:[{title:"S3 Bucket Creation with Encryption",useCase:"Create a secure bucket.",code:`# Create bucket with default encryption
aws s3api create-bucket \\
  --bucket my-secure-bucket-123 \\
  --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \\
  --bucket my-secure-bucket-123 \\
  --versioning-configuration Status=Enabled

# Enable default encryption (SSE-S3)
aws s3api put-bucket-encryption \\
  --bucket my-secure-bucket-123 \\
  --server-side-encryption-configuration
  "{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}"

# Block all public access
aws s3api put-public-access-block \\
  --bucket my-secure-bucket-123 \\
  --public-access-block-configuration
  "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"`,description:"Creating a secure S3 bucket with versioning, encryption, and public access blocked."},{title:"Lifecycle Policy for Cost Optimization",useCase:"Automate storage tier transitions.",code:`# Lifecycle policy JSON
aws s3api put-bucket-lifecycle-configuration \\
  --bucket my-bucket \\
  --lifecycle-configuration '{
    "Rules": [{
      "Id": "ArchiveOldData",
      "Status": "Enabled",
      "Prefix": "logs/",
      "Transitions": [
        {"Days": 30, "StorageClass": "STANDARD_IA"},
        {"Days": 90, "StorageClass": "GLACIER"},
        {"Days": 365, "StorageClass": "DEEP_ARCHIVE"}
      ],
      "Expiration": {"Days": 730}
    }]
  }'`,description:"Lifecycle policy that transitions objects from Standard to IA to Glacier to Deep Archive and expires after 2 years."},{title:"S3 Static Website Hosting",useCase:"Host a static site on S3.",code:`# Enable static website hosting
aws s3api put-bucket-website \\
  --bucket my-static-site \\
  --website-configuration '{
    "IndexDocument": {"Suffix": "index.html"},
    "ErrorDocument": {"Key": "error.html"}
  }'

# Sync local files to bucket
aws s3 sync ./dist s3://my-static-site/ \\
  --delete

# Access at endpoint:
# http://my-static-site.s3-website-us-east-1.amazonaws.com

# Or use CloudFront for custom domain + HTTPS
aws cloudfront create-distribution \\
  --origin-domain-name my-static-site.s3.amazonaws.com \\
  --default-root-object index.html`,description:"Setting up S3 static website hosting with sync command and CloudFront CDN."},{title:"S3 Select for Server-Side Filtering",useCase:"Reduce data transfer.",code:`# Query a CSV file in S3 without downloading it
aws s3api select-object-content \\
  --bucket my-data-bucket \\
  --key sales-2024.csv \\
  --expression "SELECT SUM(amount) FROM s3object WHERE region = 'US'" \\
  --expression-type SQL \\
  --input-serialization '{"CSV": {"FileHeaderInfo": "USE"}}' \\
  --output-serialization '{"CSV": {}}' \\
  result.csv

# Use S3 Select with AWS SDK
# const params = {
#   Bucket: 'my-data-bucket',
#   Key: "sales-2024.csv",
#   Expression: "SELECT * FROM s3object s WHERE s.amount > 1000",
#   ExpressionType: "SQL",
#   InputSerialization: { CSV: { FileHeaderInfo: "USE" } },
#   OutputSerialization: { CSV: {} }
# };`,description:"S3 Select queries data server-side, returning only matching rows to reduce data transfer costs."},{title:"Cross-Region Replication",useCase:"Replicate buckets across regions.",code:`# Enable CRR between two buckets
# Source bucket: my-bucket-us (us-east-1)
# Destination bucket: my-bucket-eu (eu-west-1)

# Step 1: Create IAM role for S3 replication
aws iam create-role \\
  --role-name s3-crr-role \\
  --assume-role-policy-document file://trust-policy.json

# Step 2: Add replication configuration
aws s3api put-bucket-replication \\
  --bucket my-bucket-us \\
  --replication-configuration '{
    "Role": "arn:aws:iam::123456:role/s3-crr-role",
    "Rules": [{
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {"Prefix": ""},
      "Destination": {
        "Bucket": "arn:aws:s3:::my-bucket-eu",
        "StorageClass": "STANDARD_IA"
      }
    }]
  }'`,description:"Cross-region replication setup for S3 buckets with IAM role and destination storage class configuration."}],mcqQuestions:[{question:"What is S3 durability?",options:["99.99%","99.9999999999%","99.9999%","99.9%"],answer:1,explanation:"S3 offers 99.9999999999% (11 nines) durability across multiple facilities."},{question:"Which S3 storage class is best for archival data accessed once a year?",options:["Standard","Intelligent-Tiering","Glacier Deep Archive","Standard-IA"],answer:2,explanation:"Glacier Deep Archive is the lowest-cost storage class, designed for long-term archival."},{question:"What is the S3 consistency model after Dec 2020?",options:["Eventual consistency","Strong read-after-write","Read-only","Write-only"],answer:1,explanation:"S3 now provides strong consistency for all operations since December 2020."},{question:"What does SSE-KMS provide beyond SSE-S3?",options:["Better performance","Separate key management and audit trail","Lower cost","Automatic replication"],answer:1,explanation:"SSE-KMS uses AWS KMS for separate key management, audit logging, and granular permissions."},{question:"What is the purpose of S3 Object Lock?",options:["Improve performance","Prevent object deletion/modification (WORM)","Reduce storage costs","Enable versioning"],answer:1,explanation:"Object Lock provides WORM protection for compliance and legal hold requirements."},{question:"What is the difference between S3 bucket policy and IAM policy?",options:["They are the same","Bucket policy is resource-based, IAM policy is identity-based","Bucket policy is for users only","IAM policy is for buckets only"],answer:1,explanation:"Bucket policies are attached to resources, IAM policies are attached to users/roles."},{question:"AWS S3 — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"AWS S3 — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"AWS S3 — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"AWS S3 — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_aws_s3};
