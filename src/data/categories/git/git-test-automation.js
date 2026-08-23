export const git_test_automation = {
  "id": "git-test-automation",
  "title": "Test Automation",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Test automation is the practice of using software tools to execute pre-scripted tests on a codebase automatically rather than manually.",
    "Automated tests run on every push in CI/CD pipelines catching regressions early. Key types: unit tests (isolated functions) integration tests (component interaction) end-to-end tests (full user workflows).",
    "Key frameworks: Jest Mocha (JS) JUnit (Java) PyTest (Python) Selenium Cypress Playwright (browser). Tests should be fast deterministic and isolated from external services.",
    "Best practices: test pyramid (many unit few e2e) arrange-act-act pattern avoid test interdependence mock external services and aim for >80% coverage on critical paths."
  ],
  "laymanDefinition": "Test automation is like a robot quality inspector on an assembly line. Instead of a human checking every tenth widget the robot checks EVERY widget instantly. It never gets tired never misses a defect and works 24/7. The initial setup takes effort but once running it catches problems that would otherwise reach the customer.",
  "deepDive": [
    {
      "heading": "Test Pyramid",
      "text": "Unit tests (70%): test individual functions/classes. Fast (ms) run on every save. Integration tests (20%): test component interaction database file system. Slower but catch API contract issues. End-to-end tests (10%): test full user flows in browser. Slow (seconds) but catch real user-facing bugs."
    },
    {
      "heading": "Unit Testing Best Practices",
      "text": "Test one thing per test. Use descriptive names: test(\"should return user when valid id\"). Arrange-Act-Assert pattern. Mock external dependencies (HTTP DB). Test edge cases: empty input null undefined boundaries. Avoid testing implementation details test behavior. Use code coverage to find untested paths."
    },
    {
      "heading": "Integration Testing",
      "text": "Test real interactions between components: API endpoints database queries file I/O. Use test containers for databases. Run against a test environment not production. Integration tests catch: schema mismatches incorrect API contracts broken serialization. Slower than unit tests but higher confidence."
    },
    {
      "heading": "End-to-End Testing",
      "text": "Browser tests that simulate real user interactions. Tools: Cypress Playwright Selenium. Test critical user journeys: login signup checkout search. Run against staging environment. Flaky tests are the biggest challenge. Use retry mechanisms and independent test data."
    },
    {
      "heading": "CI/CD Test Integration",
      "text": "Unit tests: run on every push (fast). Integration tests: run on PR to main (medium). E2E tests: run on merge to main (slow). Parallel test execution across multiple CI runners. Test splitting: distribute tests by file/execution time. Fail fast: cancel CI if a critical test fails."
    }
  ],
  "interviewAnswer": "Test automation is non-negotiable for CI/CD. Start with unit tests they give the best speed-value ratio. Add integration tests for critical paths. Add a few E2E tests for key user journeys. Keep tests fast and reliable. A flaky test is worse than no test because it erodes trust in the pipeline.",
  "interviewQuestions": [
    {
      "question": "What is test automation?",
      "answer": "Using software tools to execute pre-scripted tests automatically on each code change."
    },
    {
      "question": "What are the three main test types?",
      "answer": "Unit (isolated functions) Integration (component interaction) E2E (full user workflows)."
    },
    {
      "question": "What is the test pyramid?",
      "answer": "Many unit tests (70%) some integration tests (20%) few E2E tests (10%)."
    },
    {
      "question": "What is the Arrange-Act-Assert pattern?",
      "answer": "AAA: set up test data (Arrange) execute the code (Act) verify the result (Assert)."
    },
    {
      "question": "Why mock external dependencies in tests?",
      "answer": "To make tests fast deterministic and isolated from network/database failures."
    },
    {
      "question": "What is a flaky test?",
      "answer": "A test that sometimes passes and sometimes fails without code changes. Undermines CI reliability."
    },
    {
      "question": "What is code coverage?",
      "answer": "A metric measuring what percentage of code is executed during tests. Not a quality guarantee."
    },
    {
      "question": "What is parallel test execution?",
      "answer": "Running multiple test files simultaneously across CI runners to reduce total test time."
    },
    {
      "question": "What is the difference between Cypress and Playwright?",
      "answer": "Both are E2E frameworks. Cypress is JS-only with better debugging. Playwright supports multiple languages and browsers."
    },
    {
      "question": "What is a test fixture?",
      "answer": "A fixed state of data used as a baseline for running tests ensuring test reproducibility."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Test Automation</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unit (70%)</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fast ms</text><line x1=\"110\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"140\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"190\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Integration (20%)</text><text x=\"190\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Medium s</text><line x1=\"240\" y1=\"48\" x2=\"260\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">E2E (10%)</text><text x=\"60\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Slow seconds</text><rect x=\"140\" y=\"70\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"190\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI Pipeline</text><text x=\"190\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated per push</text><rect x=\"140\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"190\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Parallel</text><text x=\"190\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Multiple runners</text><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Coverage</text><text x=\"60\" y=\"108\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">>80% critical path</text><text x=\"60\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">s</text><rect x=\"260\" y=\"35\" width=\"220\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"370\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Test Automation</text><text x=\"370\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automated testing in CI/CD: unit integra</text><text x=\"370\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">tion E2E. Fast reliable deterministic. P</text><text x=\"370\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">yramid principle.</text><text x=\"100\" y=\"210\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Test Automation: Automated tests in CI/CD. Unit In</text><text x=\"100\" y=\"222\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">tegration E2E pyramid. Fast deterministic isolated</text><text x=\"100\" y=\"234\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">.</text></svg>",
  "codeExamples": [
    {
      "title": "Unit Test Example (Jest)",
      "useCase": "Test a function in isolation.",
      "code": "// math.js\nfunction divide(a, b) {\n  if (b === 0) throw new Error('Cannot divide by zero');\n  return a / b;\n}\n\n// math.test.js\ndescribe('divide', () => {\n  test('divides positive numbers', () => {\n    expect(divide(10, 2)).toBe(5);\n  });\n\n  test('throws on zero divisor', () => {\n    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');\n  });\n\n  test('handles negative numbers', () => {\n    expect(divide(-10, 2)).toBe(-5);\n  });\n\n  test('handles decimal results', () => {\n    expect(divide(7, 3)).toBeCloseTo(2.333, 3);\n  });\n});",
      "description": "Unit test example with Jest covering normal edge case and error paths."
    },
    {
      "title": "Integration Test (Supertest)",
      "useCase": "Test an API endpoint.",
      "code": "const request = require('supertest');\nconst app = require('./app');\n\ndescribe('POST /api/users', () => {\n  test('creates a new user', async () => {\n    const res = await request(app)\n      .post('/api/users')\n      .send({ name: 'Alice', email: 'alice@test.com' });\n\n    expect(res.status).toBe(201);\n    expect(res.body).toHaveProperty('id');\n    expect(res.body.name).toBe('Alice');\n  });\n\n  test('rejects duplicate email', async () => {\n    const res = await request(app)\n      .post('/api/users')\n      .send({ name: 'Bob', email: 'alice@test.com' });\n\n    expect(res.status).toBe(409);\n    expect(res.body.error).toContain('exists');\n  });\n\n  test('validates required fields', async () => {\n    const res = await request(app)\n      .post('/api/users')\n      .send({});\n\n    expect(res.status).toBe(400);\n  });\n});",
      "description": "Integration test for a REST API endpoint covering success error and validation cases."
    },
    {
      "title": "CI Test Configuration (GitHub Actions)",
      "useCase": "Run tests in CI pipeline.",
      "code": "name: Test Suite\non: [push, pull_request]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node: [18, 20]\n\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test -- --coverage\n      - uses: codecov/codecov-action@v3\n      - run: npm run test:integration\n        if: github.ref == 'refs/heads/main'",
      "description": "CI pipeline running lint unit tests with coverage and integration tests on main."
    },
    {
      "title": "Mocking External Dependencies",
      "useCase": "Isolate tests from external services.",
      "code": "// user-service.test.js\njest.mock('./email-service');\nconst { sendWelcomeEmail } = require('./email-service');\nconst { createUser } = require('./user-service');\n\ntest('sends welcome email on user creation', async () => {\n  sendWelcomeEmail.mockResolvedValue(true);\n\n  const user = await createUser({ name: 'Alice', email: 'a@b.com' });\n\n  expect(sendWelcomeEmail).toHaveBeenCalledWith(user.email);\n  expect(sendWelcomeEmail).toHaveBeenCalledTimes(1);\n});\n\ntest('handles email failure gracefully', async () => {\n  sendWelcomeEmail.mockRejectedValue(new Error('SMTP down'));\n\n  const user = await createUser({ name: 'Bob', email: 'b@c.com' });\n\n  expect(user).toBeDefined();\n  expect(console.error).toHaveBeenCalled();\n});",
      "description": "Mock external services to make tests deterministic and fast."
    },
    {
      "title": "Parallel Test Execution (Jest)",
      "useCase": "Run tests faster in parallel.",
      "code": "// jest.config.js\nmodule.exports = {\n  maxWorkers: '50%',  // Use 50% of CPU cores\n  testMatch: ['**/*.test.js'],\n  testTimeout: 10000,\n  bail: 1,  // Stop after first failure in CI\n  verbose: true,\n\n  // Shard tests across CI runners\n  // --shard=1/4 on first of 4 runners\n};\n\n# Run in CI with sharding:\n# npx jest --shard=${{ matrix.shard }}/4\n#\n# Split by file:\n# npx jest --listTests | split -l 10\n#\n# Use jest --onlyChanged for local dev\n# jest --changedSince=main",
      "description": "Parallel test execution with Jest sharding distributes tests across CI runners for speed."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the test pyramid?",
      "options": [
        "All tests are equal",
        "Many unit some integration few E2E",
        "Only E2E tests",
        "Only unit tests"
      ],
      "answer": 1,
      "explanation": "Test pyramid: many unit tests (fast) some integration medium E2E (few slow)."
    },
    {
      "question": "What is the Arrange-Act-Assert pattern?",
      "options": [
        "Setup execute verify",
        "Act arrange assert",
        "Assert act arrange",
        "Random order"
      ],
      "answer": 0,
      "explanation": "AAA: Arrange (setup) Act (execute) Assert (verify)."
    },
    {
      "question": "Why mock external services?",
      "options": [
        "Make tests faster",
        "Tests become deterministic and fast",
        "Less code to write",
        "Better coverage"
      ],
      "answer": 1,
      "explanation": "Mocking makes tests deterministic by removing external dependencies and network calls."
    },
    {
      "question": "What is a flaky test?",
      "options": [
        "A consistently passing test",
        "A test that intermittently fails",
        "A very slow test",
        "A new test"
      ],
      "answer": 1,
      "explanation": "Flaky tests pass/fail unpredictably undermining CI reliability and developer trust."
    },
    {
      "question": "What is code coverage?",
      "options": [
        "Percentage of code executed by tests",
        "Number of test files",
        "Test execution time",
        "Number of assertions"
      ],
      "answer": 0,
      "explanation": "Code coverage measures how much of the codebase is executed during tests."
    },
    {
      "question": "What is the benefit of parallel test execution?",
      "options": [
        "Fewer tests needed",
        "Reduced total CI test time",
        "Better coverage",
        "Simpler tests"
      ],
      "answer": 1,
      "explanation": "Parallel execution dramatically reduces total CI pipeline time by running tests across multiple runners."
    },
    {
      "question": "Test Automation — What reduces errors most?",
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
      "question": "Test Automation — What improves speed?",
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
      "question": "Test Automation — What is key for monitoring?",
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
      "question": "Test Automation — What ensures quality?",
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
