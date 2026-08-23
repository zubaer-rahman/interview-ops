export const ag_aws_api_gateway = {
  "id": "ag-aws-api-gateway",
  "title": "AWS API Gateway",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "AWS API Gateway is a fully managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs at any scale.",
    "Three types: REST API (full-featured, API keys, usage plans, VTL), HTTP API (simpler, cheaper, faster, ideal for Lambda), WebSocket API (real-time).",
    "Features: request throttling, API key management, usage plans, VTL mapping templates, caching, CORS, custom domains, CloudWatch logging.",
    "Integrates with Lambda (proxy), DynamoDB (direct), Kinesis, SQS, Step Functions, VPC via NLB/ALB (VPC Link)."
  ],
  "laymanDefinition": "AWS API Gateway is like a fully automated airport terminal managed by AWS. You tell them gates (endpoints), who can board (auth), and passenger limits (rate limiting). They handle building, security, maintenance. You focus on flights (backend). Everything scales automatically — pay per passenger.",
  "deepDive": [
    {
      "heading": "REST vs HTTP vs WebSocket API",
      "text": "REST API: feature-rich, API keys, usage plans, VTL mapping, WAF. HTTP API: simpler, ~70% cheaper, native OIDC/OAuth2, JWT authorizers, CORS auto-config. WebSocket: $connect/$disconnect/$default routes, callback URLs for push."
    },
    {
      "heading": "API Gateway Authorizers",
      "text": "Cognito User Pools: JWT from AWS Cognito. Lambda Authorizer: custom auth in Lambda. IAM Authorizer: AWS SigV4 signing. JWT Authorizer (HTTP API): validate from OIDC issuer. API Keys: simple key-based."
    },
    {
      "heading": "Throttling and Usage Plans",
      "text": "Account-level: default 10,000 rps. Usage Plan: per-API limits (rate + burst) tied to API keys. Per-client, per-method, global. 429 Too Many Requests with Retry-After."
    },
    {
      "heading": "Request/Response Transformation",
      "text": "VTL (Velocity Template Language) mapping templates transform payloads. Convert REST JSON to SOAP XML, filter fields, rename params. HTTP API: use Lambda for transformation."
    }
  ],
  "interviewAnswer": "AWS API Gateway is best for serverless on AWS. Use HTTP API for Lambda (cheaper, faster). Use REST for advanced features (API keys, usage plans, VTL). Use WebSocket for real-time. Enable caching for read-heavy endpoints. Combine with WAF for DDoS protection.",
  "interviewQuestions": [
    {
      "question": "What is AWS API Gateway?",
      "answer": "Managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs."
    },
    {
      "question": "Three API types?",
      "answer": "REST (full-featured), HTTP (simpler/cheaper), WebSocket (real-time)."
    },
    {
      "question": "What is a Lambda Authorizer?",
      "answer": "Custom auth Lambda that validates tokens and returns IAM policies."
    },
    {
      "question": "What is a Usage Plan?",
      "answer": "Throttling and quota limits for API consumers identified by API keys."
    },
    {
      "question": "How does API Gateway throttle?",
      "answer": "Account-level, Usage Plan, and method-level with rate/burst settings."
    },
    {
      "question": "What is VTL?",
      "answer": "Velocity Template Language for request/response mapping templates."
    },
    {
      "question": "Difference between REST and HTTP API?",
      "answer": "HTTP API is simpler, ~70% cheaper, OIDC/JWT native, no VTL."
    },
    {
      "question": "Can API Gateway integrate with VPC?",
      "answer": "Yes, via VPC Link — private integration with NLB/ALB in a VPC."
    },
    {
      "question": "How does WebSocket API work?",
      "answer": "$connect/$disconnect/$default routes with callback URLs."
    },
    {
      "question": "What caching does API Gateway support?",
      "answer": "Per-stage caching with configurable TTL (default 300s)."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">AWS API Gateway</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mobile/Web</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"200\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API Gateway</text><text x=\"200\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Managed endpoint</text><line x1=\"250\" y1=\"48\" x2=\"280\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"80\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Auth</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cognito/Lambda/IAM</text><line x1=\"110\" y1=\"83\" x2=\"140\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"200\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Throttle</text><text x=\"200\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Rate+burst limits</text><line x1=\"250\" y1=\"83\" x2=\"280\" y2=\"83\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"110\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Transform</text><text x=\"60\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">VTL mapping</text><line x1=\"110\" y1=\"118\" x2=\"140\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"105\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"200\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Lambda/HTTP</text><text x=\"200\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Backend</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AWS API Gateway</text><text x=\"385\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Managed: REST, HTTP, WebSocket. Co</text><text x=\"385\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">gnito/Lambda auth, throttling, usa</text><text x=\"385\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ge plans, VTL, caching.</text></svg>",
  "codeExamples": "<text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">AWS API Gateway: Managed REST, HTTP, WebSocket. Au</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">th, throttling, caching, VTL.</text>",
  "mcqQuestions": [
    {
      "title": "AWS SAM: REST API with Lambda",
      "useCase": "Serverless API.",
      "code": "AWSTemplateFormatVersion: \"2010-09-09\"\nTransform: AWS::Serverless-2016-10-31\nGlobals:\n  Function:\n    Runtime: nodejs18.x\n    Timeout: 10\nResources:\n  OrderApi:\n    Type: AWS::Serverless::Api\n    Properties:\n      StageName: prod\n      Auth:\n        DefaultAuthorizer: CognitoAuthorizer\n        Authorizers:\n          CognitoAuthorizer:\n            UserPoolArn: !GetAtt UserPool.Arn\n      Throttle:\n        BurstLimit: 200\n        RateLimit: 100\n  GetOrdersFunction:\n    Type: AWS::Serverless::Function\n    Properties:\n      CodeUri: ./src\n      Handler: orders.getOrders\n      Events:\n        ApiEvent:\n          Type: Api\n          Properties:\n            RestApiId: !Ref OrderApi\n            Path: /orders\n            Method: GET",
      "description": "SAM template for REST API with Cognito auth and throttling."
    },
    {
      "title": "AWS CLI: Create HTTP API",
      "useCase": "CLI API creation.",
      "code": "aws apigatewayv2 create-api \\\n  --name \"my-http-api\" --protocol-type HTTP \\\n  --target \"arn:aws:lambda:us-east-1:123456:function:my-function\"\naws apigatewayv2 create-stage --api-id abc123 --stage-name prod --auto-deploy\naws apigatewayv2 create-authorizer --api-id abc123 --authorizer-type JWT --name \"jwt-auth\" \\\n  --identity-source \"$request.header.Authorization\" \\\n  --jwt-configuration Audience=my-api,Issuer=\"https://cognito-idp.us-east-1.amazonaws.com/us-east-1_abc123\"\naws apigatewayv2 create-deployment --api-id abc123 --stage-name prod",
      "description": "AWS CLI commands for HTTP API with JWT authorizer."
    },
    {
      "title": "Lambda Authorizer",
      "useCase": "Custom auth.",
      "code": "exports.handler = async (event) => {\n  try {\n    const token = event.authorizationToken.replace(\"Bearer \", \"\");\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    return {\n      principalId: decoded.sub,\n      policyDocument: {\n        Version: \"2012-10-17\",\n        Statement: [{\n          Action: \"execute-api:Invoke\",\n          Effect: \"Allow\",\n          Resource: event.methodArn\n        }],\n      },\n      context: { userId: decoded.sub, role: decoded.role },\n    };\n  } catch { throw new Error(\"Unauthorized\"); }\n};",
      "description": "Lambda Authorizer validates JWT and returns IAM policy."
    },
    {
      "title": "VTL Mapping Template",
      "useCase": "Request transformation.",
      "code": "#set($inputRoot = $input.path(\"$\"))\n{\n  \"httpMethod\": \"$context.httpMethod\",\n  \"requestId\": \"$context.requestId\",\n  \"body\": $input.json(\"$\"),\n  \"params\": {\n    #foreach($param in $input.params().querystring.keySet())\n      \"$param\": \"$input.params().querystring.get($param)\"\n      #if($foreach.hasNext),#end\n    #end\n  }\n}",
      "description": "VTL mapping template transforms request before forwarding."
    },
    {
      "title": "CDK Infrastructure",
      "useCase": "Infra as code.",
      "code": "import * as apigw from \"aws-cdk-lib/aws-apigateway\";\nimport * as lambda from \"aws-cdk-lib/aws-lambda\";\nconst handler = new lambda.Function(this, \"Handler\", {\n  runtime: lambda.Runtime.NODEJS_18_X,\n  handler: \"index.handler\",\n  code: lambda.Code.fromAsset(\"./src\"),\n});\nconst api = new apigw.LambdaRestApi(this, \"OrdersApi\", { handler, proxy: false });\nconst orders = api.root.addResource(\"orders\");\norders.addMethod(\"GET\");\nconst plan = api.addUsagePlan(\"UsagePlan\", {\n  name: \"Basic\",\n  throttle: { rateLimit: 10, burstLimit: 20 },\n  quota: { limit: 10000, period: apigw.Period.MONTH },\n});\nconst key = api.addApiKey(\"ApiKey\");\nplan.addApiKey(key);",
      "description": "CDK for API Gateway with usage plan."
    },
    {
      "question": "AWS API Gateway — What helps team collaboration?",
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
      "question": "AWS API Gateway — What reduces errors most?",
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
      "question": "AWS API Gateway — What improves speed?",
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
      "question": "AWS API Gateway — What is key for monitoring?",
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
      "question": "AWS API Gateway — What ensures quality?",
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
