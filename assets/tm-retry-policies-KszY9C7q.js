const e={id:"tm-retry-policies",title:"Retry Policies",difficulty:"intermediate",estimatedMinutes:15,tldr:["Retry policies automatically re-attempt failed requests to improve reliability in distributed systems.","Strategies: immediate retry, fixed interval, incremental backoff, exponential backoff, jitter.","Must consider: idempotency (safe to retry?), retry budget, circuit breaker integration, max retries.","Exponential backoff with jitter is the most widely recommended strategy."],laymanDefinition:"Retry policies are like trying to call a friend who's in a tunnel. Instead of calling once and giving up, you wait a bit and try again. If the tunnel is long, you wait longer each time (exponential backoff). And you wait a random extra moment (jitter) so you don't all call at the same time.",deepDive:[{heading:"Immediate Retry",text:"Retry immediately on failure. Simplest strategy. Risks: overwhelming the server (retry storm). Only suitable for idempotent operations with transient errors. Use with low retry count (1-2)."},{heading:"Exponential Backoff",text:"Wait time doubles after each retry: 1s, 2s, 4s, 8s, 16s... Formula: min(MaxDelay, BaseDelay * 2^attempt). Prevents overwhelming the server. Gives the system time to recover."},{heading:"Jitter",text:"Random variation added to the backoff delay to prevent thundering herd problem. When many clients retry simultaneously, jitter spreads out the retries. Full jitter: random(0, baseDelay * 2^attempt). Equal jitter: baseDelay * 2^attempt / 2 + random(0, baseDelay * 2^attempt / 2)."},{heading:"Retry Budget",text:"Limit total retries across all requests. Prevents retry storms. Percentage of total requests allowed for retries (e.g., 20%). If budget exhausted, new requests fail immediately. Enforced by service mesh (Istio) or client-side."},{heading:"Idempotency and Safety",text:"Only retry idempotent operations (GET, PUT, DELETE are idempotent; POST is not). Use idempotency keys for non-idempotent operations. Check for retry-After headers from server (HTTP 429, 503 with Retry-After)."}],interviewAnswer:"Retry with exponential backoff + jitter is standard. Set max retries (3-5). Ensure idempotent operations. Integrate with circuit breaker — don't retry when circuit is open. Implement retry budget to prevent cascading failures. Use Retry-After header from server.",interviewQuestions:[{question:"What is a retry policy?",answer:"Automatic re-attempt of failed requests according to a strategy."},{question:"What is exponential backoff?",answer:"Delay doubles after each retry: 1s, 2s, 4s, 8s..."},{question:"What is jitter?",answer:"Random variation in retry delay to spread out retries from many clients."},{question:"What is retry storm?",answer:"Many clients retrying simultaneously — overwhelming the server."},{question:"What is retry budget?",answer:"Limit on total retry attempts as percentage of total requests."},{question:"What is idempotency?",answer:"Operation that can be repeated safely without side effects (GET, PUT, DELETE)."},{question:"How many retries recommended?",answer:"3-5 retries maximum."},{question:"What is a backoff algorithm?",answer:"Formula determining delay between retries (fixed, linear, exponential, etc.)."},{question:"What is the Retry-After header?",answer:"HTTP header indicating how long to wait before retrying (used with 429, 503)."},{question:"How do circuit breakers relate to retries?",answer:"Don\\'t retry when circuit is open — let it recover first."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Retry Policies</text><rect x="10" y="35" width="130" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="75" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client Request</text><text x="75" y="54" text-anchor="middle" font-size="9" fill="#ddd">GET /api/data</text><line x1="140" y1="48" x2="180" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="190" y="35" width="140" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="260" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Retry Handler</text><text x="260" y="54" text-anchor="middle" font-size="9" fill="#ddd">Exponential backoff</text><line x1="330" y1="48" x2="370" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="380" y="35" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="430" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Server</text><text x="430" y="54" text-anchor="middle" font-size="9" fill="#ddd">503 error</text><rect x="10" y="70" width="170" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="95" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">1st retry: wait 1s → 503</text><text x="95" y="89" text-anchor="middle" font-size="9" fill="#ddd">Backoff</text><rect x="10" y="105" width="170" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="95" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">2nd retry: wait 2s → 503</text><text x="95" y="124" text-anchor="middle" font-size="9" fill="#ddd">Backoff</text><rect x="10" y="140" width="170" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="95" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3rd retry: wait 4s → 200 OK</text><text x="95" y="159" text-anchor="middle" font-size="9" fill="#ddd">Success</text><text x="240" y="185" font-size="9" fill="#666" text-anchor="middle">Retry Policy: Exponential backoff with jitter — au</text><text x="240" y="278" font-size="9" fill="#666" text-anchor="middle">tomatically retry failed requests.</text></svg>',codeExamples:[{title:"AWS SDK Retry Config",useCase:"Client retry.",code:`const client = new S3Client({
  maxAttempts: 5,
  retryMode: "adaptive",
});

// Adaptive retry: exponential backoff + jitter
// Standard mode: max 3 attempts
// Legacy mode: max 4 attempts`,description:"AWS SDK v3 adaptive retry mode with exponential backoff and jitter."},{title:"Istio Retry Policy",useCase:"Service mesh retry.",code:`apiVersion: networking.istio.io/v1beta1
kind: VirtualService
spec:
  hosts: [my-service]
  http:
  - route:
    - destination:
        host: my-service
    retries:
      attempts: 3
      perTryTimeout: 2s
      retryOn: gateway-error,connect-failure,refused-stream`,description:"Istio VirtualService retry policy for HTTP errors."},{title:"Exponential Backoff in Node.js",useCase:"Custom backoff.",code:`async function retryWithBackoff(fn, maxRetries=3) {
  for (let i = 0; i < maxRetries; i++) {
    try { return await fn(); }
    catch (err) {
      if (i === maxRetries - 1) throw err;
      const delay = Math.min(1000 * Math.pow(2, i), 10000);
      const jitter = Math.random() * delay;
      await new Promise(r => setTimeout(r, delay + jitter));
    }
  }
}`,description:"Custom exponential backoff with jitter in Node.js."},{title:"Envoy Retry Policy",useCase:"Proxy-level retry.",code:`route_config:
  virtual_hosts:
  - name: backend
    routes:
    - match: { prefix: "/" }
      route:
        cluster: my-cluster
        retry_policy:
          num_retries: 3
          retry_on: "5xx,connect-failure"
          per_try_timeout: 2s`,description:"Envoy retry on 5xx and connection failures."},{title:"Spring Retry with Backoff",useCase:"Java retry.",code:`@Retryable(
  value = {ServiceException.class},
  maxAttempts = 5,
  backoff = @Backoff(
    delay = 1000,
    multiplier = 2,
    maxDelay = 10000
  )
)
public User getUser(String id) { ... }`,description:"Spring @Retryable with exponential backoff."}],mcqQuestions:[{question:"What is exponential backoff?",options:["Fixed delay","Doubling delay","Random delay","No delay"],answer:1,explanation:"Delay doubles after each retry attempt."},{question:"What problem does jitter solve?",options:["Slow requests","Thundering herd","Auth failures","DNS issues"],answer:1,explanation:"Jitter prevents thundering herd from simultaneous retries."},{question:"What is retry budget?",options:["Limit on total retry percentage","Monetary cost limit","Time budget","Server capacity"],answer:0,explanation:"Retry budget limits retries to a percentage of total requests."},{question:"Which operation is safe to retry?",options:["POST","GET","PATCH","Any"],answer:1,explanation:"GET is idempotent — safe to retry."},{question:"Recommended max retries?",options:["1-2","3-5","10-20","No limit"],answer:1,explanation:"3-5 retries is standard."},{question:"What header indicates retry delay?",options:["Cache-Control","Retry-After","X-Retry","Backoff"],answer:1,explanation:"Retry-After header tells client how long to wait."}]};export{e as tm_retry_policies};
