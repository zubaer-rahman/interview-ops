export const mern_testing = {
  "id": "mern-testing",
  "title": "MERN Testing",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "MERN testing covers unit tests (Jest), integration tests (Supertest), API tests, and end-to-end tests (Cypress/Playwright).",
    "Backend testing: Jest + Supertest for API endpoint testing. MongoDB Memory Server for test database isolation.",
    "Frontend testing: Jest + React Testing Library for component tests. Vitest as alternative for Vite projects.",
    "E2E testing: Cypress or Playwright simulate real user interactions across the full MERN stack."
  ],
  "laymanDefinition": "Testing a MERN app is like test-driving a car before selling it. Unit tests check each part individually (does the brake light work?). Integration tests check that parts work together (does pressing the brake activate the light?). E2E tests simulate a real test drive (start car, drive, park). Each level catches different types of bugs.",
  "deepDive": [
    {
      "heading": "Testing Pyramid for MERN",
      "text": "Unit tests (many): test individual functions, components, and utilities. Integration tests (some): test API endpoints with database, component interactions. E2E tests (few): test complete user workflows across frontend and backend. Focus on integration tests for the most value."
    },
    {
      "heading": "Backend Unit/Integration Tests",
      "text": "Jest test runner. Supertest for HTTP assertions. MongoDB Memory Server (mongodb-memory-server) for isolated test DB. Factory functions to create test data. Before/after hooks: connect to test DB, seed data, clean up. Test each CRUD endpoint with valid and invalid inputs."
    },
    {
      "heading": "Frontend Component Tests",
      "text": "React Testing Library: render components, query DOM, simulate user events. Test: rendering states (loading, empty, error, populated), user interactions (clicks, form input), conditional rendering. Avoid testing implementation details � test behavior that the user sees."
    },
    {
      "heading": "API Integration Tests",
      "text": "Test the full request/response cycle. Supertest: request(app).get(\"/api/items\").expect(200). Test: status codes, response body structure, error handling, authentication (with and without token). Use beforeAll to set up test data, afterAll to clean up."
    },
    {
      "heading": "End-to-End Testing",
      "text": "Cypress: runs in real browser, tests full user flows. Examples: register user ? login ? create item ? logout. Playwright: cross-browser testing. E2E tests are slower but catch real integration issues. Run in CI/CD pipeline on pull requests."
    }
  ],
  "interviewAnswer": "Test the MERN stack at multiple levels. Write unit tests for utilities and components. Write integration tests for API endpoints with a test MongoDB. Write E2E tests for critical user flows. Use MongoDB Memory Server for test isolation. Aim for good coverage but prioritize testing business logic over boilerplate.",
  "interviewQuestions": [
    {
      "question": "What tools are used for MERN testing?",
      "answer": "Jest, React Testing Library, Supertest, Cypress/Playwright, MongoDB Memory Server."
    },
    {
      "question": "What is the testing pyramid?",
      "answer": "Unit tests (base, many), Integration tests (middle, some), E2E tests (top, few). Focus on integration tests."
    },
    {
      "question": "What is Supertest?",
      "answer": "An HTTP assertion library for testing Express API endpoints without running the actual server."
    },
    {
      "question": "What is MongoDB Memory Server?",
      "answer": "An in-memory MongoDB instance for testing. No actual MongoDB installation needed. Isolated per test run."
    },
    {
      "question": "What does React Testing Library test?",
      "answer": "Component rendering, user interactions, and DOM output. Tests behavior, not implementation."
    },
    {
      "question": "What is the purpose of E2E tests?",
      "answer": "Test complete user workflows across the full stack � from browser UI to database."
    },
    {
      "question": "How do you test authenticated routes?",
      "answer": "Create a test JWT token with a test user payload and send it in the Authorization header."
    },
    {
      "question": "What is a factory function in testing?",
      "answer": "A helper that creates test data (Mongoose documents) with sensible defaults for use in multiple tests."
    },
    {
      "question": "What is the purpose of beforeAll/afterAll hooks?",
      "answer": "Set up and tear down test environment: connect to test DB, seed data, clean up after tests complete."
    },
    {
      "question": "What is Cypress?",
      "answer": "An end-to-end testing framework that runs in the browser and provides time-travel debugging and real-time reloads."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">MERN Testing</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Unit Tests</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Jest + RTL</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">API Tests</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Supertest</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Integration</text><text x=\"60\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mongo Memory Serve</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">r</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">E2E Tests</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Cypress/Playwright</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">CI/CD</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">npm test on push</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MERN Testing Pyramid</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Unit (Jest+RTL) ? API (Supertest) ? Integ</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ration (Mongo Mem) ? E2E (Cypress). Test </text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">data factories. CI/CD integration.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">MERN Testing: Jest, Supertest, React Testing Libra</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ry, MongoDB Memory Server, Cypress. Multi-layer te</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">sting strategy.</text></svg>",
  "codeExamples": [
    {
      "title": "Backend Test Setup",
      "useCase": "Jest + Supertest + MongoDB Memory Server.",
      "code": "const request = require('supertest');\nconst mongoose = require('mongoose');\nconst { MongoMemoryServer } = require('mongodb-memory-server');\nconst app = require('../app');\n\nlet mongoServer;\n\nbeforeAll(async () => {\n  mongoServer = await MongoMemoryServer.create();\n  await mongoose.connect(mongoServer.getUri());\n});\n\nafterAll(async () => {\n  await mongoose.disconnect();\n  await mongoServer.stop();\n});\n\nafterEach(async () => {\n  const collections = mongoose.connection.collections;\n  for (const key in collections) {\n    await collections[key].deleteMany();\n  }\n});",
      "description": "Test setup with MongoDB Memory Server for isolated database testing."
    },
    {
      "title": "API Integration Tests",
      "useCase": "Test Express endpoints with Supertest.",
      "code": "const request = require('supertest');\nconst app = require('../app');\nconst User = require('../models/User');\n\ndescribe('POST /api/auth/login', () => {\n  const userData = { email: 'test@test.com', password: 'password123', name: 'Test' };\n\n  beforeEach(async () => {\n    await request(app).post('/api/auth/register').send(userData);\n  });\n\n  it('should login with valid credentials', async () => {\n    const res = await request(app)\n      .post('/api/auth/login')\n      .send({ email: userData.email, password: userData.password });\n    expect(res.status).toBe(200);\n    expect(res.body).toHaveProperty('token');\n    expect(res.body.user).toHaveProperty('email', userData.email);\n  });\n\n  it('should reject invalid password', async () => {\n    const res = await request(app)\n      .post('/api/auth/login')\n      .send({ email: userData.email, password: 'wrongpassword' });\n    expect(res.status).toBe(401);\n  });\n});",
      "description": "API integration tests for login endpoint with valid and invalid credentials."
    },
    {
      "title": "React Component Test",
      "useCase": "Component testing with Jest + RTL.",
      "code": "import { render, screen, fireEvent } from '@testing-library/react';\nimport { BrowserRouter } from 'react-router-dom';\nimport ItemCard from './ItemCard';\n\nconst mockItem = {\n  _id: '1',\n  name: 'Test Item',\n  price: 29.99,\n  description: 'A test item'\n};\n\ndescribe('ItemCard', () => {\n  it('renders item name and price', () => {\n    render(<BrowserRouter><ItemCard item={mockItem} /></BrowserRouter>);\n    expect(screen.getByText('Test Item')).toBeInTheDocument();\n    expect(screen.getByText('$29.99')).toBeInTheDocument();\n  });\n\n  it('calls onAddToCart when button clicked', () => {\n    const onAddToCart = jest.fn();\n    render(\n      <BrowserRouter><ItemCard item={mockItem} onAddToCart={onAddToCart} /></BrowserRouter>\n    );\n    fireEvent.click(screen.getByText('Add to Cart'));\n    expect(onAddToCart).toHaveBeenCalledWith('1');\n  });\n});",
      "description": "React component test with rendering assertion and click interaction."
    },
    {
      "title": "E2E Test with Cypress",
      "useCase": "Full user flow end-to-end.",
      "code": "describe('Item Management', () => {\n  beforeEach(() => {\n    cy.visit('/login');\n    cy.get('[data-testid=email]').type('user@test.com');\n    cy.get('[data-testid=password]').type('password123');\n    cy.get('[data-testid=login-btn]').click();\n  });\n\n  it('creates and displays a new item', () => {\n    cy.visit('/items/new');\n    cy.get('[data-testid=name]').type('New Item');\n    cy.get('[data-testid=price]').type('19.99');\n    cy.get('[data-testid=submit]').click();\n    cy.url().should('include', '/items');\n    cy.contains('New Item').should('be.visible');\n    cy.contains('$19.99').should('be.visible');\n  });\n\n  it('deletes an item', () => {\n    cy.visit('/items');\n    cy.get('[data-testid=delete-1]').click();\n    cy.contains('Deleted successfully').should('be.visible');\n  });\n});",
      "description": "Cypress E2E test covering login, item creation, and deletion workflows."
    },
    {
      "title": "Jest Configuration",
      "useCase": "Jest config for MERN project.",
      "code": "// jest.config.js\nmodule.exports = {\n  testEnvironment: 'node',\n  setupFilesAfterSetup: ['./tests/setup.js'],\n  testTimeout: 30000,\n  verbose: true,\n  collectCoverageFrom: [\n    'server/**/*.js',\n    '!server/node_modules/**'\n  ]\n};\n\n// package.json scripts:\n// \"test\": \"jest --watchAll --detectOpenHandles\",\n// \"test:ci\": \"jest --ci --coverage\",\n// \"test:e2e\": \"cypress run\"",
      "description": "Jest configuration for Node.js backend testing with coverage collection."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What library is used for Express API testing?",
      "options": [
        "Jest",
        "Supertest",
        "React Testing Library",
        "Cypress"
      ],
      "answer": 1,
      "explanation": "Supertest is used for testing Express HTTP endpoints."
    },
    {
      "question": "What provides an isolated MongoDB for tests?",
      "options": [
        "MongoDB Atlas",
        "MongoDB Memory Server",
        "Local MongoDB",
        "Mongoose"
      ],
      "answer": 1,
      "explanation": "MongoDB Memory Server creates an in-memory MongoDB instance for test isolation."
    },
    {
      "question": "What does React Testing Library test?",
      "options": [
        "Component behavior and output",
        "Implementation details",
        "Database queries",
        "API responses"
      ],
      "answer": 0,
      "explanation": "React Testing Library tests component behavior and DOM output, not implementation."
    },
    {
      "question": "What is the top of the testing pyramid?",
      "options": [
        "Unit tests",
        "Integration tests",
        "E2E tests",
        "Static analysis"
      ],
      "answer": 2,
      "explanation": "E2E tests are at the top (fewer in number, broader in scope)."
    },
    {
      "question": "How do you test authenticated endpoints?",
      "options": [
        "Skip auth for tests",
        "Generate test JWT token",
        "Disable middleware",
        "Use admin account"
      ],
      "answer": 1,
      "explanation": "Generate a test JWT token with the required payload and send it in the Authorization header."
    },
    {
      "question": "What is Cypress used for?",
      "options": [
        "Unit testing",
        "API testing",
        "End-to-end testing",
        "Static analysis"
      ],
      "answer": 2,
      "explanation": "Cypress is an end-to-end testing framework that runs in the browser."
    },
    {
      "question": "MERN Testing — What reduces errors most?",
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
      "question": "MERN Testing — What improves speed?",
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
      "question": "MERN Testing — What is key for monitoring?",
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
      "question": "MERN Testing — What ensures quality?",
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
