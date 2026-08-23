export const mern_docker = {
  "id": "mern-docker",
  "title": "MERN with Docker",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Docker containerizes the MERN stack: separate containers for MongoDB, Express backend, and optionally the React frontend.",
    "Docker Compose orchestrates multi-container setups: defines services (mongo, server, client), networks, and volumes.",
    "Benefits: consistent environments across dev/staging/prod, easy onboarding, isolated dependencies, reproducible builds.",
    "Best practices: multi-stage builds, .dockerignore, environment variables for config, health checks, non-root users."
  ],
  "laymanDefinition": "Docker for MERN is like apartment living vs house living. Without Docker, every developer needs to build their own house (install MongoDB, Node.js, configure everything). With Docker, everyone moves into pre-furnished apartments (containers) � same furniture, same layout, same everything. Docker Compose is the apartment complex manager that makes sure all apartments work together.",
  "deepDive": [
    {
      "heading": "Docker Basics for MERN",
      "text": "Image: blueprint for a container (node:20-alpine, mongo:7). Container: running instance of an image. Dockerfile: instructions to build an image. Layers: each Dockerfile command creates a cacheable layer. Volumes: persist data across container restarts. Port mapping: container port maps to host port (5000:5000)."
    },
    {
      "heading": "Backend Dockerfile",
      "text": "FROM node:20-alpine (small base image). WORKDIR /app. COPY package*.json ./. RUN npm ci --only=production. COPY . . EXPOSE 5000. CMD [\"node\", \"server.js\"]. .dockerignore: node_modules, .env, .git, build. Multi-stage: build stage compiles TypeScript, run stage has only production deps."
    },
    {
      "heading": "Docker Compose Services",
      "text": "mongo: image mongo:7, volumes for data persistence, ports 27017:27017. server: build from ./server, depends_on mongo, env vars, ports 5000:5000. client (optional): build from ./client, ports 5173:5173, depends_on server. Networks: default bridge connects all services."
    },
    {
      "heading": "Environment Variables in Docker",
      "text": "Pass via docker-compose.yml environment section or .env file. MONGO_URI: mongodb://mongo:27017/myapp (service name as hostname). NODE_ENV: production. JWT_SECRET, etc. Never hardcode secrets. Use Docker secrets for production. Keep .env in .dockerignore."
    },
    {
      "heading": "Production Docker Setup",
      "text": "Multi-stage build: stage 1 builds React (node image), stage 2 serves from Nginx (smaller). Health checks: curl http://localhost:5000/api/health. Resource limits: mem_limit, cpus. Restart policy: unless-stopped. Logging: json-file driver with rotation. Non-root user: USER node."
    }
  ],
  "interviewAnswer": "Docker standardizes the MERN development and deployment environment. Use Docker Compose for local development with hot-reload. Use multi-stage builds for production optimization. Volumes for MongoDB data persistence. Environment variables for configuration. Health checks for reliability. Always use .dockerignore.",
  "interviewQuestions": [
    {
      "question": "What is Docker?",
      "answer": "A containerization platform that packages applications with their dependencies into isolated containers."
    },
    {
      "question": "What is Docker Compose?",
      "answer": "A tool for defining and running multi-container Docker applications using a YAML configuration file."
    },
    {
      "question": "What is the difference between an image and a container?",
      "answer": "Image: read-only blueprint/template. Container: running instance of an image."
    },
    {
      "question": "What is a Dockerfile?",
      "answer": "A text file with instructions to build a Docker image (FROM, COPY, RUN, CMD, EXPOSE)."
    },
    {
      "question": "What base image is recommended for Node.js?",
      "answer": "node:20-alpine � small size (~120MB), security-focused, includes npm."
    },
    {
      "question": "How do containers communicate in Docker Compose?",
      "answer": "By service name defined in docker-compose.yml. MongoDB is accessible at mongodb://mongo:27017."
    },
    {
      "question": "What is a multi-stage build?",
      "answer": "A Dockerfile with multiple FROM statements � one stage for building, another for running the built artifacts."
    },
    {
      "question": "What is a volume in Docker?",
      "answer": "Persistent storage that survives container restarts. Used for MongoDB data, uploads, and logs."
    },
    {
      "question": "What should be in .dockerignore?",
      "answer": "node_modules, .env, .git, .gitignore, Dockerfile, README.md, and other non-essential files."
    },
    {
      "question": "What is the purpose of health checks?",
      "answer": "Docker checks if the application is running correctly and restarts if unhealthy. Configured with HEALTHCHECK instruction."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">MERN with Docker</text><rect x=\"10\" y=\"35\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"65\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Dockerfile</text><text x=\"65\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Image blueprint</text><rect x=\"10\" y=\"65\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"65\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Compose</text><text x=\"65\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Multi-container</text><rect x=\"10\" y=\"95\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"65\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Containers</text><text x=\"65\" y=\"103\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Mongo + Express + Re</text><text x=\"65\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">act</text><rect x=\"10\" y=\"125\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"65\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Volumes</text><text x=\"65\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data persistence</text><rect x=\"10\" y=\"155\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"65\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Multi-stage</text><text x=\"65\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Optimized builds</text><line x1=\"120\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"108\" x2=\"150\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"138\" x2=\"150\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"220\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"270\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MERN with Docker</text><text x=\"270\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Dockerfile + Docker Compose. Containeriz</text><text x=\"270\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ed MongoDB, Express, React. Consistent e</text><text x=\"270\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">nvironments, reproducible builds.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Docker: Containerize MERN with Dockerfiles and Doc</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ker Compose. Consistent dev, CI/CD, and production</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\"> environments.</text></svg>",
  "codeExamples": [
    {
      "title": "Backend Dockerfile",
      "useCase": "Multi-stage Dockerfile for Express API.",
      "code": "# Multi-stage build\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY . .\nEXPOSE 5000\nUSER node\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3\n  CMD curl -f http://localhost:5000/api/health || exit 1\nCMD [\"node\", \"server.js\"]",
      "description": "Multi-stage backend Dockerfile with health check and non-root user."
    },
    {
      "title": "Docker Compose for MERN",
      "useCase": "Full stack orchestration.",
      "code": "version: '3.8'\nservices:\n  mongo:\n    image: mongo:7\n    container_name: mern-mongo\n    volumes:\n      - mongo-data:/data/db\n    networks:\n      - mern-network\n\n  server:\n    build: ./server\n    container_name: mern-server\n    ports:\n      - '5000:5000'\n    environment:\n      - MONGO_URI=mongodb://mongo:27017/mern-app\n      - JWT_SECRET=${JWT_SECRET}\n      - NODE_ENV=production\n    depends_on:\n      - mongo\n    networks:\n      - mern-network\n\n  client:\n    build: ./client\n    container_name: mern-client\n    ports:\n      - '80:80'\n    depends_on:\n      - server\n    networks:\n      - mern-network\n\nvolumes:\n  mongo-data:\n\nnetworks:\n  mern-network:",
      "description": "Docker Compose configuration for MongoDB, Express, and React services."
    },
    {
      "title": "Docker Development with Hot Reload",
      "useCase": "Dev setup with nodemon.",
      "code": "version: '3.8'\nservices:\n  server:\n    build:\n      context: ./server\n      dockerfile: Dockerfile.dev\n    volumes:\n      - ./server:/app\n      - /app/node_modules\n    ports:\n      - '5000:5000'\n    environment:\n      - MONGO_URI=mongodb://mongo:27017/mern-app\n    command: npx nodemon server.js\n\n  mongo:\n    image: mongo:7\n    ports:\n      - '27017:27017'\n    volumes:\n      - mongo-data:/data/db\n\nvolumes:\n  mongo-data:",
      "description": "Development Docker Compose with volume mounts for hot reload."
    },
    {
      "title": ".dockerignore",
      "useCase": "Optimize Docker context.",
      "code": "node_modules\nnpm-debug.log\n.env\n.git\n.gitignore\nREADME.md\nDockerfile\n.dockerignore\nclient/build\ndist\ncoverage\n.nyc_output\n*.md",
      "description": "Essential .dockerignore to keep Docker build context small and fast."
    },
    {
      "title": "Nginx for React in Production",
      "useCase": "Serve React via Nginx.",
      "code": "# Client Dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/build /usr/share/nginx/html\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# nginx.conf\nserver {\n  listen 80;\n  location / {\n    root /usr/share/nginx/html;\n    index index.html;\n    try_files $uri $uri/ /index.html;\n  }\n  location /api {\n    proxy_pass http://server:5000;\n  }\n}",
      "description": "Nginx serves React build and proxies API requests to the backend service."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the recommended Node.js base image?",
      "options": [
        "ubuntu",
        "node:20-alpine",
        "debian",
        "centos"
      ],
      "answer": 1,
      "explanation": "node:20-alpine is the smallest and most secure Node.js base image (~120MB)."
    },
    {
      "question": "What tool orchestrates multi-container Docker setups?",
      "options": [
        "Dockerfile",
        "Docker Compose",
        "Kubernetes",
        "Docker Swarm"
      ],
      "answer": 1,
      "explanation": "Docker Compose defines and runs multi-container applications with a YAML config file."
    },
    {
      "question": "How do services communicate in Docker Compose?",
      "options": [
        "By IP address",
        "By service name",
        "By domain name",
        "By container ID"
      ],
      "answer": 1,
      "explanation": "Services communicate using their service name as the hostname defined in docker-compose.yml."
    },
    {
      "question": "What is the purpose of a multi-stage build?",
      "options": [
        "Faster builds",
        "Smaller production images",
        "Easier debugging",
        "Better caching"
      ],
      "answer": 1,
      "explanation": "Multi-stage builds produce smaller production images by separating build tools from runtime."
    },
    {
      "question": "What should be in .dockerignore?",
      "options": [
        "Dockerfile only",
        "node_modules and .env",
        "Source code",
        "Package.json"
      ],
      "answer": 1,
      "explanation": ".dockerignore excludes node_modules, .env, and other non-essential files to keep the build context small."
    },
    {
      "question": "What is the purpose of Docker volumes?",
      "options": [
        "Move containers",
        "Persist data across restarts",
        "Speed up builds",
        "Isolate networks"
      ],
      "answer": 1,
      "explanation": "Volumes persist data (like MongoDB data) even when containers are stopped or recreated."
    },
    {
      "question": "MERN with Docker — What reduces errors most?",
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
      "question": "MERN with Docker — What improves speed?",
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
      "question": "MERN with Docker — What is key for monitoring?",
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
      "question": "MERN with Docker — What ensures quality?",
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
