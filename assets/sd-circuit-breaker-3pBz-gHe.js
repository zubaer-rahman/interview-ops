const e={id:"sd-circuit-breaker",title:"Circuit Breaker Pattern",difficulty:"advanced",estimatedMinutes:15,tldr:["Circuit Breaker is a design pattern that detects failures and prevents cascading failures by stopping calls to a failing service, allowing it to recover.",'Three states: CLOSED (normal — calls pass through), OPEN (calls fail immediately — circuit is "tripped"), HALF-OPEN (test state — limited calls pass to check recovery).',"Metrics: failure count/threshold, failure rate (e.g., 50% of last 100 calls), response time threshold, timeout duration.","Transition: CLOSED → OPEN when threshold exceeded. OPEN → HALF-OPEN after reset timeout. HALF-OPEN → CLOSED if test calls succeed. HALF-OPEN → OPEN if test calls fail again.","Implemented in: Hystrix (Java, Netflix), Resilience4j, Opossum (Node.js), Polly (.NET)."],laymanDefinition:"A circuit breaker is like an electrical circuit breaker in your home. When too much current flows (failures), the breaker trips (opens circuit), stopping all current. After a cooldown period, you try resetting it (half-open). If the short is fixed, it stays reset (closed). If still faulty, it trips again immediately.",deepDive:[{heading:"Circuit Breaker States",text:"CLOSED: normal operation, calls pass through, failure count tracking. OPEN: calls fail immediately with fallback/error, no network call made. HALF-OPEN: limited test calls allowed after timeout, if successful → CLOSED, if failed → OPEN. State transitions based on configurable thresholds (e.g., 5 failures in 10s window)."},{heading:"Configuration Parameters",text:"failureThreshold: number/consecutive failures to open. resetTimeout: time before transitioning to HALF-OPEN. successThreshold: successful calls in HALF-OPEN to close. rollingWindow: time window for failure counting. timeout: per-call timeout (separate but related). metricsSlidingWindow: how many calls to track."},{heading:"Fallback Strategies",text:'Return cached data (stale but better than error). Default response (empty, "service unavailable"). Queue request for retry later. Degraded functionality (read-only mode). Error response with clear message. Circuit breaker MUST provide fallback — the whole point is graceful degradation.'},{heading:"Bulkhead Pattern",text:"Related but separate — isolates resources into pools so a failure in one pool doesn\\'t take down the whole system. Example: separate connection pool for each downstream service. If service A pool is exhausted, service B calls unaffected. Used together with circuit breaker for robust fault isolation."}],interviewAnswer:"Essential for microservices — prevent cascading failures. Set appropriate thresholds based on normal failure rates. Always provide a fallback. Combine with bulkhead for resource isolation. Monitor circuit breaker state — alert on OPEN state. Test circuit breaker behavior in production (chaos engineering).",interviewQuestions:[{question:"What is a circuit breaker?",answer:"Pattern that prevents cascading failures by stopping calls to failing services."},{question:"What are the three states?",answer:"CLOSED (normal), OPEN (fail fast), HALF-OPEN (testing recovery)."},{question:"When does CLOSED → OPEN?",answer:"When failure threshold is exceeded (count or rate within time window)."},{question:"When does OPEN → HALF-OPEN?",answer:"After reset timeout expires — allows test calls."},{question:"What is a fallback?",answer:"Alternative response when circuit is OPEN — cached data, default value, error message."},{question:"What is bulkhead?",answer:"Resource isolation — separate pools per dependency to prevent cascading resource exhaustion."},{question:"Why not just use timeouts?",answer:"Timeouts still make the call (waste resources). Circuit breaker avoids the call entirely."},{question:"What is a rolling window?",answer:"Time window for tracking failures (e.g., last 100 calls, last 10 seconds)."},{question:"What is the Netflix implementation?",answer:"Hystrix (now in maintenance mode)."},{question:"What health check tests in HALF-OPEN?",answer:"Circuit passes limited test calls — if they succeed, it closes."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Circuit Breaker Pattern</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CLOSED</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Normal</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="40" y1="65" x2="40" y2="95" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Call service</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Pass through</text><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Failure > N</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Trip!</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OPEN</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Fail fast</text><line x1="55" y1="120" x2="55" y2="145" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="200" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fallback</text><text x="200" y="151" text-anchor="middle" font-size="9" fill="#ddd">Cache/default</text><rect x="10" y="160" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Timeout</text><text x="60" y="186" text-anchor="middle" font-size="9" fill="#ddd">Try test</text><rect x="150" y="160" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="200" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">HALF-OPEN</text><text x="200" y="186" text-anchor="middle" font-size="9" fill="#ddd">Test call</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Circuit Breaker</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">CLOSED→OPEN (failures) → HALF-OPEN (test) → CLOSED(ok)/OPEN(fail). Fallback, bulkhead</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Circuit Breaker: Prevent cascading failures. Three</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle"> states, fallback, bulkhead isolation.</text></svg>',codeExamples:[{title:"Circuit Breaker with Opossum",useCase:"Node.js implementation.",code:`const CircuitBreaker = require("opossum");
async function callPaymentService(amount) {
  const response = await fetch("http://payment-service:3000/charge", {
    method: "POST",
    body: JSON.stringify({ amount }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Payment failed: " + response.status);
  return response.json();
}
const breaker = new CircuitBreaker(callPaymentService, {
  timeout: 5000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000,
  rollingCountTimeout: 10000,
  name: "payment-service",
});
breaker.fallback(() => ({ status: "pending", message: "Payment queued — will retry" }));
breaker.on("open", () => console.log("Circuit OPEN — payment service DOWN"));
breaker.on("halfOpen", () => console.log("Testing payment service..."));
const result = await breaker.fire(99.99);`,description:"Opossum circuit breaker with fallback and event monitoring."},{title:"Bulkhead Pattern",useCase:"Resource isolation.",code:`class BulkheadPool {
  constructor(name, maxConcurrent, queueSize) {
    this.name = name;
    this.max = maxConcurrent;
    this.queue = [];
    this.active = 0;
    this.maxQueueSize = queueSize || maxConcurrent;
  }
  async exec(fn) {
    if (this.active >= this.max) {
      if (this.queue.length >= this.maxQueueSize) {
        throw new Error(this.name + " bulkhead full — rejecting");
      }
      await new Promise((resolve, reject) => {
        this.queue.push(resolve);
        setTimeout(() => reject(new Error("Queue timeout")), 5000);
      });
    }
    this.active+;
    try { return await fn(); }
    finally {
      this.active--;
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        next(); // release next queued request
      }
    }
  }
}`,description:"Bulkhead pattern — separate resource pools for each downstream service."},{title:"Spring Cloud Circuit Breaker (Java)",useCase:"Java implementation.",code:`@Service
public class PaymentService {
  @CircuitBreaker(name = "paymentService", fallbackMethod = "fallback")
  public PaymentResponse charge(PaymentRequest request) {
    return restTemplate.postForObject(
      "http://payment-service/charge", request, PaymentResponse.class);
  }
  public PaymentResponse fallback(PaymentRequest request, Throwable t) {
    return new PaymentResponse("pending", "Service unavailable, queued");
  }
}
// application.yml
resilience4j.circuitbreaker:
  instances:
    paymentService:
      slidingWindowSize: 100
      minimumNumberOfCalls: 10
      failureRateThreshold: 50
      waitDurationInOpenState: 30s
      permittedNumberOfCallsInHalfOpenState: 3
      automaticTransitionFromOpenToHalfOpenEnabled: true`,description:"Spring Cloud Circuit Breaker (Resilience4j) with configuration."},{title:"Manual Circuit Breaker Implementation",useCase:"Simple version.",code:`class SimpleCircuitBreaker {
  constructor(failureThreshold = 5, resetTimeout = 30000) {
    this.state = "CLOSED";
    this.failureCount = 0;
    this.failureThreshold = failureThreshold;
    this.resetTimeout = resetTimeout;
    this.lastFailureTime = null;
  }
  async call(fn, fallback) {
    if (this.state === "OPEN") {
      if (Date.now() - this.lastFailureTime >= this.resetTimeout) {
        this.state = "HALF_OPEN";
      } else {
        return fallback();
      }
    }
    try {
      const result = await fn();
      if (this.state === "HALF_OPEN") {
        this.state = "CLOSED";
        this.failureCount = 0;
      }
      return result;
    } catch (err) {
      this.failureCount+;
      this.lastFailureTime = Date.now();
      if (this.failureCount >= this.failureThreshold) {
        this.state = "OPEN";
      }
      return fallback(err);
    }
  }
}`,description:"Simple circuit breaker implementation illustrating the state machine."}],mcqQuestions:[{question:"Circuit breaker prevents?",options:["Slow responses","Cascading failures","Data loss","Network issues"],answer:1,explanation:"Prevents cascading failures across services."},{question:"OPEN state means?",options:["Normal operation","Calls fail immediately","Testing recovery","Slow mode"],answer:1,explanation:"OPEN: calls fail fast without reaching service."},{question:"HALF-OPEN allows?",options:["All calls","No calls","Limited test calls","Cached calls"],answer:2,explanation:"HALF-OPEN: limited test calls to check recovery."},{question:"What triggers CLOSED → OPEN?",options:["Success threshold","Failure threshold exceeded","Timeout","Manual action"],answer:1,explanation:"Failure count or rate exceeds threshold."},{question:"Bulkhead pattern isolates?",options:["Network","Resources per dependency","Code modules","Deployments"],answer:1,explanation:"Separate resource pools per downstream service."},{question:"What is a fallback?",options:["Primary response","Alternative response on failure","Error log","Retry queue"],answer:1,explanation:"Fallback provides degraded response when service is down."},{question:"Circuit Breaker Pattern — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Circuit Breaker Pattern — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Circuit Breaker Pattern — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Circuit Breaker Pattern — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_circuit_breaker};
