const e={id:"tm-blue-green-routing",title:"Blue Green Routing",difficulty:"advanced",estimatedMinutes:20,tldr:["Blue-green deployment runs two identical environments (Blue and Green) � only one serves live traffic at a time.","Deploy new version to inactive environment ? smoke tests ? switch traffic ? old becomes standby.","Instant switch via load balancer/router update. Rollback is immediate � just switch back.","Key difference from canary: instant full switch vs gradual. Blue-green is simpler but costs double infrastructure."],laymanDefinition:"Blue-green is like two identical bridges to an island. Bridge Blue is open while Bridge Green is under construction. When Green is ready, you switch the traffic lights: Green opens, Blue closes. If Green has problems, instantly switch back to Blue. Drivers never experience delays.",deepDive:[{heading:"Blue-Green Architecture",text:"Blue: current production, 100% traffic. Green: new environment, identical infra. Traffic switch: update DNS, LB, or router. Green becomes active, Blue becomes standby. Both fully provisioned."},{heading:"Database Considerations",text:"Schema changes must be backward compatible. Share single database. Or dual DB with sync. Best: separate schema changes before deployment."},{heading:"Blue-Green vs Canary",text:"Blue-green: instant full switch, two full environments (costly), simple rollback. Canary: gradual, subset of instances, more complex rollback, better for real-traffic testing."},{heading:"Deployment Steps",text:"1. Deploy to Green (inactive). 2. Smoke tests against Green. 3. Health check. 4. Switch router from Blue to Green. 5. Monitor. 6. If issues: switch back. 7. Keep Blue for rollback period."}],interviewAnswer:"Blue-green provides instant switch and immediate rollback. Best for stateless apps. Costly due to double infrastructure. Database changes need special care. Rollback is simple traffic flip.",interviewQuestions:[{question:"What is blue-green deployment?",answer:"Two identical environments with one serving live traffic � switch for zero-downtime deployment."},{question:"Main advantage?",answer:"Instant rollback � switch back to old environment immediately."},{question:"Main disadvantage?",answer:"Cost � two fully provisioned environments needed."},{question:"How is traffic switch performed?",answer:"Updating load balancer, DNS, or router to point to new environment."},{question:"How do database migrations work?",answer:"Schema changes must be backward compatible. Both environments share or work with same DB."},{question:"Blue-green vs canary difference?",answer:"Blue-green: instant full switch. Canary: gradual shift with subset of instances."},{question:"When avoid blue-green?",answer:"When schema changes aren\\'t backward compatible or double cost is prohibitive."},{question:"How long keep old environment?",answer:"Hours to days � long enough to verify stability, then decommission."},{question:"What is the router flip?",answer:"The moment traffic switches from Blue to Green � should take milliseconds."},{question:"What testing before switch?",answer:"Smoke tests against Green environment directly � health, functionality, integration."}],diagramSvg:`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Blue Green Routing</text><rect x="10" y="35" width="130" height="70" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blue (Active)</text><text x="75" y="99" text-anchor="middle" font-size="9" fill="#ddd">Serving 100%
v1</text><line x1="140" y1="70" x2="180" y2="70" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="150" height="70" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Router / LB</text><text x="265" y="99" text-anchor="middle" font-size="9" fill="#ddd">Switch point</text><line x1="340" y1="70" x2="380" y2="70" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="390" y="35" width="90" height="70" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="435" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Green (Standby)</text><text x="435" y="99" text-anchor="middle" font-size="9" fill="#ddd">v2 ready</text><rect x="10" y="120" width="130" height="55" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="75" y="136" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Switch ?</text><text x="75" y="169" text-anchor="middle" font-size="9" fill="#ddd">Flip to Green</text><rect x="150" y="120" width="130" height="55" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="215" y="136" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Blue becomes</text><text x="215" y="169" text-anchor="middle" font-size="9" fill="#ddd">Standby</text><text x="240" y="200" font-size="9" fill="#666" text-anchor="middle">Blue Green: Two identical environments. One active</text><text x="240" y="212" font-size="9" fill="#666" text-anchor="middle">, one standby. Switch for zero-downtime.</text></svg>`,codeExamples:[{title:"AWS ECS Blue-Green with CodeDeploy",useCase:"AWS blue-green.",code:`resource "aws_codedeploy_deployment_group" "bluegreen" {
  deployment_config_name = "CodeDeployDefault.ECSAllAtOnce"
  deployment_style {
    deployment_option = "WITH_TRAFFIC_CONTROL"
    deployment_type   = "BLUE_GREEN"
  }
  blue_green_deployment_config {
    deployment_ready_option { action_on_timeout = "CONTINUE_DEPLOYMENT" }
    terminate_blue_instances_on_deployment_success {
      action = "TERMINATE"
      termination_wait_time_in_minutes = 60
    }
  }
}`,description:"AWS CodeDeploy blue-green deployment with traffic control."},{title:"Kubernetes Blue-Green via Services",useCase:"K8s blue-green.",code:`# Blue service (active)
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  selector:
    app: myapp
    version: blue

# Deploy Green version
kubectl apply -f deployment-green.yaml
# Smoke test: kubectl exec ... curl green-service
# Switch: update service selector to green
kubectl patch service myapp -p '{"spec":{"selector":{"version":"green"}}}'`,description:"Kubernetes blue-green by updating service selector labels."},{title:"Nginx Blue-Green Switch",useCase:"Nginx routing.",code:`# Blue active, Green standby
upstream backend {
  server blue-server:3000; # active
  # server green-server:3000; # standby (commented)
}

# To switch: update upstream and reload
# sed -i 's/blue-server/green-server/' /etc/nginx/conf.d/app.conf
# nginx -s reload`,description:"Nginx blue-green switch by updating upstream and reloading."},{title:"Database Migration for Blue-Green",useCase:"Backward-compatible schema.",code:`# Step 1: Add new columns (nullable/default)
ALTER TABLE users ADD COLUMN display_name VARCHAR(100);
ALTER TABLE users ADD COLUMN preferences JSONB DEFAULT '{}';

# Step 2: Old code ignores new columns - works
# Step 3: Deploy new code (works with new columns)
# Step 4: Switch traffic to Green
# Step 5: Backfill data in new columns
# Step 6: (Later) Make columns NOT NULL if needed`,description:"Backward-compatible schema changes for safe blue-green deployments."},{title:"Terraform Blue-Green with ALB",useCase:"Infrastructure as code.",code:`resource "aws_lb_target_group" "blue" { name = "blue-tg" }
resource "aws_lb_target_group" "green" { name = "green-tg" }

resource "aws_lb_listener_rule" "main" {
  listener_arn = aws_lb_listener.front_end.arn
  action {
    type = "forward"
    target_group_arn = aws_lb_target_group.blue.arn
  }
  condition { path_pattern { values = ["/*"] } }
}
# Switch by updating listener rule to point to green`,description:"Terraform blue-green with ALB target group switching."}],mcqQuestions:[{question:"What is blue-green deployment?",options:["Gradual rollout","Two identical environments, switch traffic","Single environment","Rolling update"],answer:1,explanation:"Two environments with instant traffic switch."},{question:"Main blue-green advantage?",options:["Lower cost","Instant rollback","Better performance","Simpler code"],answer:1,explanation:"Instant rollback by switching back."},{question:"Main disadvantage?",options:["Slower deployments","Double infrastructure cost","Complex rollback","No testing"],answer:1,explanation:"Two fully provisioned environments needed."},{question:"How is traffic switched?",options:["Code change","Load balancer/router update","Database update","Client update"],answer:1,explanation:"Update load balancer, DNS, or router."},{question:"Blue-green vs canary?",options:["Same thing","Instant switch vs gradual","Canary is simpler","Blue-green is cheaper"],answer:1,explanation:"Blue-green: instant. Canary: gradual."},{question:"Database requirement?",options:["No changes","Backward compatible","New database","Read-only"],answer:1,explanation:"Schema must work with both versions."}]};export{e as tm_blue_green_routing};
