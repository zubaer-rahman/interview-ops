export const tm_circuit_breaker = {
  "id": "tm-circuit-breaker",
  "title": "Circuit Breaker",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Circuit breaker prevents cascading failures by detecting when a downstream service is failing and stopping requests to it.",
    "Three states: CLOSED (normal), OPEN (failing — requests blocked), HALF-OPEN (testing if service recovered).",
    "After failures exceed a threshold, circuit opens. After a timeout, it goes half-open. If test request succeeds, it closes; if it fails, it stays open.",
    "Libraries: Hystrix (Netflix), resilience4j (Java), Polly (.NET), Opossum (Node.js), Istio circuit breaker."
  ],
  "laymanDefinition": "A circuit breaker is like an electrical circuit breaker in your home. When there's a short circuit (too many failures), the breaker 'trips' (opens) and stops the flow. After a while, you try flipping it back on (half-open). If the short is fixed, everything works. If not, it trips again immediately.",
  "deepDive": [
    {
      "heading": "CLOSED State",
      "text": "Normal operation. All requests pass through to the downstream service. Failure count is tracked. If failures exceed a threshold (e.g., 5 failures in 10 seconds), the circuit trips to OPEN. Successes reset the failure count."
    },
    {
      "heading": "OPEN State",
      "text": "Requests fail immediately without calling the downstream service (fail-fast). A fallback response may be returned. After a timeout (e.g., 30 seconds), transitions to HALF-OPEN to test recovery. This protects the downstream from being overwhelmed."
    },
    {
      "heading": "HALF-OPEN State",
      "text": "Limited number of test requests are allowed through. If test requests succeed, circuit transitions to CLOSED. If any fail, circuit goes back to OPEN. The timeout resets, extending the recovery period."
    },
    {
      "heading": "Bulkhead Pattern",
      "text": "Isolates resources per service or component. Each service gets a limited thread pool or connection pool. If one service runs out of threads, it doesn\\'t affect others. Prevents one failing service from exhausting all resources."
    },
    {
      "heading": "Fallback Strategies",
      "text": "Return cached response. Return default value. Return error to caller. Graceful degradation (disable non-critical features). Queuing requests for later retry. Stale data from last successful response."
    }
  ],
  "interviewAnswer": "Circuit breakers are essential for resilient microservices. Set failure threshold based on normal error rates. Configure timeout for recovery testing. Implement meaningful fallbacks. Combine with retries (with backoff) and bulkheads. Monitor circuit state and alert on OPEN circuits.",
  "interviewQuestions": [
    {
      "question": "What is circuit breaker?",
      "answer": "Pattern that stops requests to a failing service to prevent cascading failures."
    },
    {
      "question": "Three states?",
      "answer": "CLOSED (normal), OPEN (failing), HALF-OPEN (testing)."
    },
    {
      "question": "When does circuit open?",
      "answer": "When failures exceed a configured threshold within a time window."
    },
    {
      "question": "What is fallback?",
      "answer": "Response returned when circuit is OPEN — cached data, default value, or error."
    },
    {
      "question": "What is bulkhead?",
      "answer": "Isolates resources per service — prevents one failing service from exhausting all threads."
    },
    {
      "question": "What happens in HALF-OPEN?",
      "answer": "Limited test requests probe if the service has recovered."
    },
    {
      "question": "What is Hystrix?",
      "answer": "Netflix\\'s circuit breaker library (now in maintenance mode)."
    },
    {
      "question": "What is Opossum?",
      "answer": "Node.js circuit breaker library."
    },
    {
      "question": "How to prevent thundering herd?",
      "answer": "Use exponential backoff for retries after circuit opens."
    },
    {
      "question": "Can circuit breaker be used at network level?",
      "answer": "Yes — Envoy, Istio, and Linkerd have circuit breaker configurations."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Circuit Breaker</text><rect x=\"10\" y=\"35\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"50\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CLOSED</text><text x=\"50\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Normal</text><line x1=\"90\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"210\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Circuit Breaker</text><text x=\"210\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Track failures</text><line x1=\"280\" y1=\"48\" x2=\"320\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"330\" y=\"35\" width=\"90\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"375\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Service</text><text x=\"375\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">5 failures</text><rect x=\"10\" y=\"70\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"50\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OPEN</text><text x=\"50\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fail fast</text><line x1=\"90\" y1=\"82\" x2=\"130\" y2=\"82\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"70\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"210\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Trip: 30s timeout</text><text x=\"210\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Block requests</text><rect x=\"10\" y=\"105\" width=\"80\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"50\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">HALF-OPEN</text><text x=\"50\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Test</text><line x1=\"90\" y1=\"118\" x2=\"130\" y2=\"118\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"105\" width=\"140\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"210\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Test request → OK?</text><text x=\"210\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Close or stay open</text><text x=\"240\" y=\"155\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Circuit Breaker: CLOSED → OPEN (failure threshold)</text><text x=\"240\" y=\"248\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> → HALF-OPEN (timeout, test) → CLOSED or OPEN.</text></svg>",
  "codeExamples": [
    {
      "title": "Opossum (Node.js)",
      "useCase": "Node circuit breaker.",
      "code": "const CircuitBreaker = require(\"opossum\");\n\nfunction callService() {\n  return axios.get(\"http://api/users\");\n}\n\nconst breaker = new CircuitBreaker(callService, {\n  errorThresholdPercentage: 50,\n  resetTimeout: 30000,\n  volumeThreshold: 10\n});\n\nbreaker.fallback(() => ({ cached: true, users: [] }));\nbreaker.on(\"open\", () => console.log(\"Circuit opened!\"));",
      "description": "Opossum circuit breaker configuration."
    },
    {
      "title": "Istio Circuit Breaker",
      "useCase": "Service mesh level.",
      "code": "apiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nspec:\n  host: my-service\n  trafficPolicy:\n    connectionPool:\n      tcp:\n        maxConnections: 100\n      http:\n        http1MaxPendingRequests: 10\n        maxRequestsPerConnection: 10\n    outlierDetection:\n      consecutive5xxErrors: 5\n      interval: 30s\n      baseEjectionTime: 30s",
      "description": "Istio circuit breaker via outlier detection and connection pool limits."
    },
    {
      "title": "Hystrix-Like Config (resilience4j)",
      "useCase": "Java circuit breaker.",
      "code": "CircuitBreakerConfig config = CircuitBreakerConfig.custom()\n  .failureRateThreshold(50)\n  .waitDurationInOpenState(Duration.ofSeconds(30))\n  .slidingWindowSize(10)\n  .build();\n\nCircuitBreaker cb = CircuitBreaker.of(\"myService\", config);\n\nSupplier<String> decorated = Decorators.ofSupplier(supplier)\n  .withCircuitBreaker(cb)\n  .withFallback(e -> \"fallback\")\n  .decorate();",
      "description": "resilience4j circuit breaker with fallback."
    },
    {
      "title": "Envoy Circuit Breaker",
      "useCase": "Proxy-level.",
      "code": "circuit_breakers:\n  thresholds:\n  - priority: DEFAULT\n    max_connections: 100\n    max_pending_requests: 10\n    max_requests: 100\n    max_retries: 3\n  - priority: HIGH\n    max_connections: 200",
      "description": "Envoy circuit breaker thresholds per priority level."
    },
    {
      "title": "Python Circuit Breaker (pybreaker)",
      "useCase": "Python library.",
      "code": "import pybreaker\n\nbreaker = pybreaker.CircuitBreaker(\n  fail_max=5, reset_timeout=30\n)\n\n@breaker\ndef call_api():\n  return requests.get(\"http://api/users\")\n\n# fallback\ndef fallback(): return []\nresult = breaker.call(call_api, fallback)",
      "description": "Python pybreaker circuit breaker decorator."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What state is normal operation?",
      "options": [
        "OPEN",
        "CLOSED",
        "HALF-OPEN",
        "BROKEN"
      ],
      "answer": 1,
      "explanation": "CLOSED is normal operation."
    },
    {
      "question": "What triggers OPEN state?",
      "options": [
        "Success threshold",
        "Failure threshold exceeded",
        "Timeout expired",
        "Manual reset"
      ],
      "answer": 1,
      "explanation": "Failure threshold exceeded triggers OPEN."
    },
    {
      "question": "What is bulkhead?",
      "options": [
        "Resource isolation per service",
        "Circuit state",
        "Fallback data",
        "Retry counter"
      ],
      "answer": 0,
      "explanation": "Bulkhead isolates resources-per-service."
    },
    {
      "question": "What Node.js circuit breaker library?",
      "options": [
        "Hystrix",
        "Opossum",
        "Polly",
        "Failsafe"
      ],
      "answer": 1,
      "explanation": "Opossum is the Node.js circuit breaker."
    },
    {
      "question": "When does circuit go HALF-OPEN?",
      "options": [
        "After failures",
        "After reset timeout",
        "Immediately",
        "On manual trigger"
      ],
      "answer": 1,
      "explanation": "After reset timeout, circuit transitions to HALF-OPEN."
    },
    {
      "question": "What is the main goal of circuit breaker?",
      "options": [
        "Faster requests",
        "Prevent cascading failures",
        "Lower cost",
        "Better UX"
      ],
      "answer": 1,
      "explanation": "Prevents cascading failures across services."
    }
  ]
};
