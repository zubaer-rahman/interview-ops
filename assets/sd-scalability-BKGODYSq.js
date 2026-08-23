const e={id:"sd-scalability",title:"Scalability",difficulty:"advanced",estimatedMinutes:25,tldr:["Scalability is a system's ability to handle growing load by adding resources — measured in requests per second, users, or data volume.","Vertical scaling (scale up): add more power to existing machine (CPU, RAM, SSD). Easier but has hardware limits and no fault tolerance.","Horizontal scaling (scale out): add more machines. Requires load balancing, stateless design, distributed data — harder but provides near-limitless scale and fault tolerance.","Key scalability patterns: sharding, replication, caching, async processing, CDN, microservices, auto-scaling, connection pooling, database indexing."],laymanDefinition:"Scalability is like a restaurant kitchen. Vertical scaling = getting a bigger stove (still one chef). Horizontal scaling = adding more chefs with more stoves (but now you need recipes to coordinate, same as distributed systems need coordination). The second approach feeds more customers but is harder to manage.",deepDive:[{heading:"Vertical vs Horizontal",text:"Vertical: upgrade hardware — faster CPU, more RAM, SSD. Simple, no code changes. Limits: single machine max capacity, single point of failure. Cost grows exponentially at high end. Horizontal: add commodity servers. Virtually unlimited, fault-tolerant. Requires: load balancer, stateless app, distributed data, service discovery."},{heading:"Stateless Architecture",text:"Session data stored externally (Redis, DB), not in app server. Any request can go to any server — enables easy horizontal scaling and rolling deployments. Stateful: sticky sessions (session affinity) — complicates scaling, server failure loses session. Always prefer stateless for scalability."},{heading:"Database Scaling",text:"Read replicas: scale reads by adding replicas, LB reads across them. Writes still go to primary. Sharding: split data across multiple DBs by shard key. Distributes write load. Vertical: bigger DB server (hard limit). NoSQL: designed for horizontal scale (Cassandra, DynamoDB, MongoDB)."},{heading:"Auto-Scaling",text:"Scale out/in based on metrics: CPU > 70%, request queue depth, latency. Cloud: AWS ASG, K8s HPA. Warm pool: keep min instances ready. Cooldown: wait after scale event. Predictive: ML-based scaling for known traffic patterns. Step scaling: add instances in steps."}],interviewAnswer:"Scalability requires stateless design, horizontal scaling for apps, and a data strategy (sharding + replication + caching). Start monolithic, split only when needed. Measure before scaling — profile bottlenecks first. Auto-scale in cloud, use CDN for static, cache aggressively, async for slow operations.",interviewQuestions:[{question:"Vertical vs horizontal scaling?",answer:"Vertical: bigger machine. Horizontal: more machines. Horizontal is preferred for large scale."},{question:"Why stateless design matters?",answer:"Any server handles any request — enables horizontal scale, rolling deployments, fault tolerance."},{question:"How to scale a database?",answer:"Read replicas (read scale), sharding (write scale), caching (reduce load), vertical (simpler, limited)."},{question:"What is auto-scaling?",answer:"Automatically add/remove instances based on metrics (CPU, queue depth, latency)."},{question:"What is the CAP theorem relationship?",answer:"Scaling distributed systems forces CP or AP trade-off — cannot have both strong consistency and availability during partitions."},{question:"What is connection pooling?",answer:"Reuse DB connections instead of creating per request. Reduces overhead, prevents connection exhaustion."},{question:"How does caching help scalability?",answer:"Reduces DB load, lowers latency for hot data. Cache-aside, write-through, write-behind."},{question:"What is the bottleneck in most systems?",answer:"Database writes, followed by DB reads, then compute. Profiling reveals actual bottleneck."},{question:"What is the fallacies of distributed computing?",answer:"Network is reliable, latency is zero, bandwidth is infinite, network is secure, topology doesn\\'t change, one admin, transport cost is zero, network is homogeneous."},{question:"How to scale to millions of users?",answer:"CDN for static, cache for reads, async queues for writes, shard DB, microservices, auto-scaling, multi-region."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Scalability</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Users</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">1M DAU</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CDN</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Static cache</text><line x1="200" y1="77" x2="190" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Load Balancer</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Distribute</text><line x1="110" y1="101" x2="150" y2="101" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="85" width="80" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="190" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App</text><text x="190" y="111" text-anchor="middle" font-size="9" fill="#ddd">Server 1</text><rect x="240" y="85" width="80" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="280" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">App</text><text x="280" y="111" text-anchor="middle" font-size="9" fill="#ddd">Server N</text><line x1="200" y1="117" x2="200" y2="123" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cache</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Redis/Memc</text><line x1="110" y1="141" x2="150" y2="141" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="125" width="80" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="190" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB</text><text x="190" y="151" text-anchor="middle" font-size="9" fill="#ddd">Primary</text><rect x="240" y="125" width="80" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="280" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB</text><text x="280" y="151" text-anchor="middle" font-size="9" fill="#ddd">Replica</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Scalability</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Horizontal > Vertical. Stateless apps. Cache, CDN, sharding, replicas, auto-scaling.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Scalability: Ability to handle growing load. Horiz</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">ontal > Vertical. Stateless, cache, shard, auto-sc</text><text x="240" y="279" font-size="9" fill="#666" text-anchor="middle">ale.</text></svg>',codeExamples:[{title:"Auto-Scaling Group (AWS ASG)",useCase:"Scale based on CPU.",code:`AWSTemplateFormatVersion: "2010-09-09"
Resources:
  WebServerGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      MinSize: "2"
      MaxSize: "20"
      DesiredCapacity: "4"
      LaunchConfigurationName: !Ref WebLC
      TargetGroupARNs: [!Ref ALBTargetGroup]
  ScaleOutPolicy:
    Type: AWS::AutoScaling::ScalingPolicy
    Properties:
      AutoScalingGroupName: !Ref WebServerGroup
      ScalingAdjustment: "2"
      Cooldown: "300"
  CPUAlarmHigh:
    Type: AWS::CloudWatch::Alarm
    Properties:
      ComparisonOperator: GreaterThanThreshold
      Threshold: "70"
      EvaluationPeriods: "2"
      MetricName: CPUUtilization
      Namespace: AWS/EC2`,description:"Auto-scaling group with CPU-based scale-out policy."},{title:"Connection Pool (Node.js)",useCase:"Reuse connections.",code:`const { Pool } = require("pg");
const pool = new Pool({
  max: 20, // max connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
// Use same pool for all queries
async function queryUser(id) {
  const res = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return res.rows[0];
}
// No need to connect/disconnect per request
// Pool handles reuse, overflow queuing`,description:"Connection pooling for database scalability."},{title:"Horizontal Scaling with Docker Swarm",useCase:"Scale out containers.",code:`# docker-compose.yml
version: "3.8"
services:
  api:
    image: myapp/api:latest
    deploy:
      replicas: 5
      resources:
        limits:
          cpus: "0.5"
          memory: "512M"
      restart_policy:
        condition: on-failure
    environment:
      - REDIS_URL=redis://redis:6379
      - DB_URL=postgres://user:pass@db:5432/app
  redis:
    image: redis:7-alpine
  db:
    image: postgres:15
    deploy:
      replicas: 1`,description:"Horizontal scaling with Docker Swarm replicas."},{title:"Stateless Session Store",useCase:"Externalize session.",code:`const session = require("express-session");
const RedisStore = require("connect-redis")(session);
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));
// Now any app server can serve any user
// Session is in Redis — not in server memory
// Scale horizontally without sticky sessions`,description:"Stateless session store enables horizontal scaling."}],mcqQuestions:[{question:"Horizontal scaling adds?",options:["More CPU","More machines","More RAM","Faster disk"],answer:1,explanation:"Horizontal = more machines."},{question:"Stateless means?",options:["No DB","External session store","No cache","Single server"],answer:1,explanation:"Session stored externally, not in server."},{question:"Auto-scaling metric example?",options:["Code size","CPU utilization","Users logged in","File count"],answer:1,explanation:"CPU utilization > 70% typical."},{question:"Connection pooling benefit?",options:["Faster queries","Reuse connections","More secure","Less code"],answer:1,explanation:"Reuses connections, reduces overhead."},{question:"CAP trade-off in scaling?",options:["CP or AP","CA or CP","AP only","CA only"],answer:0,explanation:"Partition tolerance is required, so CP or AP."},{question:"Primary DB scaling bottleneck?",options:["Reads","Writes","Memory","Network"],answer:1,explanation:"Writes are usually the bottleneck (single primary)."},{question:"Scalability — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Scalability — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Scalability — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Scalability — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_scalability};
