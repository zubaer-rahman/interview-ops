export const devops_aws_lambda = {
  "id": "devops-aws-lambda",
  "title": "AWS Lambda",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "Supported runtimes: Node.js, Python, Java, Go, Ruby, .NET, and custom runtimes via Lambda Layers / container images.",
    "Event sources: API Gateway (HTTP requests), S3 (object create/delete), DynamoDB Streams, SQS/SNS, Kinesis, CloudWatch Events, and custom applications via SDK.",
    "Key limits: 15 minute timeout, 10GB memory (max), 250MB deployment package (zip), 512MB /tmp storage, 1000 concurrent executions (soft limit, can be increased)."
  ],
  "laymanDefinition": "Lambda is like a vending machine for code. You load it with your code (sandwich ingredients), and when someone presses the right button (event trigger), it makes exactly what was requested. Each press runs fresh — no old sandwich leftovers (stateless). You never pay for the machine itself, just for each sandwich made (per-invocation billing). If nobody orders, the machine sits idle costing nothing.",
  "deepDive": [
    {
      "heading": "Lambda Execution Model",
      "text": "Lambda runs code in isolated containers. Cold start: first invocation after idle — Lambda downloads code, initializes runtime, runs initialization code (outside handler). Warm start: container reused, only handler code executes. Provisioned Concurrency: keep N containers warm to eliminate cold starts. SnapStart (Java): faster cold starts using VM snapshots. Execution environment lifecycle: Init (create container, load code) → Invoke (run handler) → Shutdown (freeze/terminate)."
    },
    {
      "heading": "Event-Driven Architecture",
      "text": "Lambda integrates natively with AWS services. Synchronous invocations: API Gateway, Cognito, Step Functions — caller waits for response. Asynchronous invocations: S3, SNS, CloudWatch Events — Lambda retries twice, DLQ on failure. Stream-based: DynamoDB Streams, Kinesis — Lambda polls the stream, processes batches. Event Filtering: filter which events trigger Lambda (e.g., only S3 PUT events with specific prefix)."
    },
    {
      "heading": "Lambda Best Practices",
      "text": "Keep functions stateless — use external storage (DynamoDB, S3) for state. Minimize deployment package size — only include necessary dependencies. Use environment variables for configuration. Implement proper error handling and DLQ for async invocations. Use AWS X-Ray for tracing. Set reserved concurrency to prevent one function from consuming all concurrency. Use Lambda Layers for shared dependencies across functions."
    },
    {
      "heading": "Lambda Security and Permissions",
      "text": "Execution role (IAM): defines what Lambda can access (DynamoDB, S3, etc.). Resource-based policies: defines who/what can invoke the function. VPC configuration: Lambda runs in a VPC with an ENI (Elastic Network Interface) — adds cold start latency. Secrets: use AWS Secrets Manager or Parameter Store, never hardcode secrets. Lambda@Edge: run Lambda at CloudFront edge locations for low-latency global processing."
    },
    {
      "heading": "Lambda Cost Optimization",
      "text": "Billing: per request + duration (rounded to nearest 1ms). Free tier: 1M requests/month, 400,000 GB-seconds. Cost factors: memory allocation (more memory = faster execution = less duration, but higher cost per GB-second), invocation frequency, and duration. Right-size memory: test different allocations — increasing memory often reduces duration. Use Graviton2 (ARM) for up to 20% better price-performance."
    }
  ],
  "interviewAnswer": "Lambda is the core of AWS serverless computing. Design functions to be stateless and single-purpose. Use environment variables for config. Implement proper error handling with DLQs. Monitor with CloudWatch and X-Ray. Right-size memory for cost optimization. Use Provisioned Concurrency for latency-sensitive applications. Lambda is best for event-driven, intermittent, and variable-load workloads.",
  "interviewQuestions": [
    {
      "question": "What is AWS Lambda?",
      "answer": "A serverless compute service that runs code in response to events, automatically managing infrastructure."
    },
    {
      "question": "What is a cold start?",
      "answer": "The delay when Lambda initializes a new container — loads code, initializes runtime, runs init code."
    },
    {
      "question": "What is Provisioned Concurrency?",
      "answer": "Pre-warmed Lambda containers to eliminate cold starts for latency-sensitive applications."
    },
    {
      "question": "What is the Lambda timeout limit?",
      "answer": "15 minutes (900 seconds) maximum execution time per invocation."
    },
    {
      "question": "What is the difference between synchronous and asynchronous invocation?",
      "answer": "Synchronous: caller waits for response. Asynchronous: Lambda queues the event, caller gets immediate acknowledgment."
    },
    {
      "question": "What is an event source mapping?",
      "answer": "Configuration that connects a stream-based source (DynamoDB Streams, Kinesis) to a Lambda function."
    },
    {
      "question": "What is a DLQ in Lambda?",
      "answer": "Dead Letter Queue — failed async invocations are sent to SQS or SNS for later processing."
    },
    {
      "question": "How is Lambda billed?",
      "answer": "Per request + duration (rounded to nearest millisecond) — no charge when code is not running."
    },
    {
      "question": "What is SnapStart?",
      "answer": "Lambda feature for Java that reduces cold start latency by caching VM snapshots."
    },
    {
      "question": "What is Lambda@Edge?",
      "answer": "Running Lambda functions at CloudFront edge locations for low-latency global request processing."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">AWS Lambda</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Function</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Your code</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Trigger</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Event source</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Execution</text><text x=\"60\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Stateless containe</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"130\" height=\"80\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lambda</text><text x=\"215\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Serverless compute</text><rect x=\"10\" y=\"130\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cold Start</text><text x=\"60\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Init delay</text><rect x=\"10\" y=\"160\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"176\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Concurrency</text><text x=\"60\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Scale limit</text><rect x=\"300\" y=\"35\" width=\"180\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"390\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AWS Lambda</text><text x=\"390\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Serverless functions. Event-driv</text><text x=\"390\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">en, auto-scaling, pay-per-execut</text><text x=\"390\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ion, stateless, 15-min timeout.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">AWS Lambda: Serverless compute. Event-driven, auto</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">-scaling, stateless functions. Pay per invocation.</text></svg>",
  "codeExamples": [
    {
      "title": "Lambda Function with API Gateway",
      "useCase": "REST API with Lambda.",
      "code": "// index.js — Lambda handler for API Gateway\nexports.handler = async (event) => {\n  const body = JSON.parse(event.body || '{}');\n  const name = body.name || 'World';\n\n  return {\n    statusCode: 200,\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Access-Control-Allow-Origin\": \"*\"\n    },\n    body: JSON.stringify({\n      message: `Hello, ${name}!`,\n      timestamp: new Date().toISOString()\n    })\n  };\n};\n\n# Lambda function handler: receives API Gateway event, returns HTTP response",
      "description": "Lambda function integrated with API Gateway returning a JSON response with CORS headers."
    },
    {
      "title": "S3 Event Trigger Configuration",
      "useCase": "Process S3 uploads.",
      "code": "# S3 bucket notification to Lambda\naws s3api put-bucket-notification-configuration \\\n  --bucket my-upload-bucket \\\n  --notification-configuration '{\n    \"LambdaFunctionConfigurations\": [{\n      \"LambdaFunctionArn\": \"arn:aws:lambda:us-east-1:123456:function:process-image\",\n      \"Events\": [\"s3:ObjectCreated:*\"],\n      \"Filter\": {\n        \"Key\": {\n          \"FilterRules\": [{\"Name\": \"suffix\", \"Value\": \".jpg\"}]\n        }\n      }\n    }]\n  }'",
      "description": "S3 bucket notification that triggers Lambda when a .jpg file is uploaded to the bucket."
    },
    {
      "title": "Lambda with DynamoDB Streams",
      "useCase": "Process database changes.",
      "code": "// index.js — process DynamoDB Stream events\nexports.handler = async (event) => {\n  for (const record of event.Records) {\n    if (record.eventName === \"INSERT\") {\n      const newImage = record.dynamodb.NewImage;\n      const userId = newImage.userId.S;\n      const email = newImage.email.S;\n\n      // Send welcome email\n      await sendWelcomeEmail(userId, email);\n    }\n  }\n};\n\n# Stream records contain: eventName, dynamodb.NewImage, dynamodb.OldImage, dynamodb.SequenceNumber",
      "description": "Lambda function that processes DynamoDB Stream events and sends welcome emails on new user creation."
    },
    {
      "title": "Lambda Environment Variables and Secrets",
      "useCase": "Secure configuration.",
      "code": "// Using environment variables and Secrets Manager\nconst { SecretsManager } = require('aws-sdk');\nconst secretsManager = new SecretsManager();\n\nlet dbCredentials = null;\n\n// Cache secrets outside handler for reuse across warm starts\nasync function getCredentials() {\n  if (dbCredentials) return dbCredentials;\n  const secret = await secretsManager\n    .getSecretValue({ SecretId: process.env.DB_SECRET_ARN })\n    .promise();\n  dbCredentials = JSON.parse(secret.SecretString);\n  return dbCredentials;\n}\n\nexports.handler = async (event) => {\n  const creds = await getCredentials();\n  // Use creds.username, creds.password to connect to DB\n  console.log(\"Environment:\", process.env.NODE_ENV);\n};",
      "description": "Lambda using Secrets Manager for database credentials with caching across warm starts."
    },
    {
      "title": "Lambda Reserved Concurrency",
      "useCase": "Control function scaling.",
      "code": "# Set reserved concurrency for a function\naws lambda put-function-concurrency \\\n  --function-name payment-processor \\\n  --reserved-concurrent-executions 10\n\n# This limits payment-processor to max 10 concurrent executions\n# Other functions can still use the remaining account concurrency\n\n# To use provisioned concurrency:\naws lambda put-provisioned-concurrency-config \\\n  --function-name payment-processor \\\n  --qualifier \"prod\" \\\n  --provisioned-concurrent-executions 5\n\n# Provisioned keeps 5 instances warm — no cold starts for prod alias",
      "description": "Lambda reserved and provisioned concurrency configuration for controlling function scaling and eliminating cold starts."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the maximum Lambda execution timeout?",
      "options": [
        "5 minutes",
        "10 minutes",
        "15 minutes",
        "30 minutes"
      ],
      "answer": 2,
      "explanation": "Lambda functions can run for a maximum of 15 minutes (900 seconds)."
    },
    {
      "question": "What is a Lambda cold start?",
      "options": [
        "Function running slowly",
        "Delay in initializing a new Lambda container",
        "Function timing out",
        "Function not responding"
      ],
      "answer": 1,
      "explanation": "Cold start occurs when Lambda creates a new execution environment — initializing runtime and loading code."
    },
    {
      "question": "How does Lambda billing work?",
      "options": [
        "Per hour",
        "Per request + duration",
        "Per month flat rate",
        "Per GB of storage"
      ],
      "answer": 1,
      "explanation": "Lambda charges per request and per duration (rounded to nearest millisecond)."
    },
    {
      "question": "What is the purpose of a DLQ in Lambda?",
      "options": [
        "Store successful results",
        "Queue failed async invocations for later processing",
        "Increase concurrency",
        "Reduce cold starts"
      ],
      "answer": 1,
      "explanation": "Dead Letter Queue stores failed asynchronous invocations for later analysis or retry."
    },
    {
      "question": "What does Provisioned Concurrency do?",
      "options": [
        "Limits concurrent executions",
        "Keeps containers warm to eliminate cold starts",
        "Increases function timeout",
        "Reduces memory allocation"
      ],
      "answer": 1,
      "explanation": "Provisioned Concurrency pre-warms Lambda containers to eliminate cold starts."
    },
    {
      "question": "Which Lambda invocation type is best for processing S3 events?",
      "options": [
        "Synchronous",
        "Asynchronous",
        "Stream-based",
        "Poll-based"
      ],
      "answer": 2,
      "explanation": "S3 events use asynchronous invocation — Lambda receives the event and processes it independently."
    },
    {
      "question": "AWS Lambda — What reduces errors most?",
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
      "question": "AWS Lambda — What improves speed?",
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
      "question": "AWS Lambda — What is key for monitoring?",
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
      "question": "AWS Lambda — What ensures quality?",
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
