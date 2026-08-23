const e={id:"mern-deployment",title:"MERN Deployment",difficulty:"advanced",estimatedMinutes:20,tldr:["MERN deployment involves building the React frontend and serving it from Express, or hosting separately (Netlify/Vercel + Render/Heroku).","Backend deployment: Node.js hosting on Render, Railway, DigitalOcean, AWS EC2, or Heroku. Environment variables for config.","Frontend deployment: Build with npm run build, serve static files from Express, or deploy to Vercel/Netlify/CDN.","Production considerations: CORS configuration, MongoDB Atlas, environment variables, HTTPS, process manager (PM2), logging."],laymanDefinition:"Deploying a MERN app is like moving a food truck from your home kitchen to an actual restaurant. You need to package everything properly (build the frontend), set up utilities (configure production environment), ensure the health inspector approves (security), and hire staff (process manager) to keep things running even when you are asleep.",deepDive:[{heading:"Backend Deployment (Render/Heroku)",text:'Push to GitHub, connect to Render/Heroku. Set build command, start command (node server.js). Environment variables: MONGO_URI, JWT_SECRET, NODE_ENV=production. Add Start script: "node server.js" (not nodemon). Ensure port binding: process.env.PORT || 5000.'},{heading:"Frontend Build and Serve from Express",text:'Build: cd client && npm run build ? produces build/ folder. In server.js: app.use(express.static("client/build")). Serve index.html for all non-API routes. One deployment for both frontend and backend. Simpler but less scalable.'},{heading:"Separate Frontend Deployment",text:"Deploy React to Vercel/Netlify: connect GitHub repo, set build command (npm run build), publish directory (build). Set environment variables (REACT_APP_API_URL). Configure redirects for client-side routing. CORS must be enabled on the backend for the frontend domain."},{heading:"Environment Variables and Config",text:"Never hardcode config. Use process.env variables. In development: .env file + dotenv. In production: set via hosting platform UI. Frontend env vars must be prefixed with REACT_APP_ (CRA) or VITE_ (Vite). Create a config file that reads from process.env with defaults."},{heading:"Production Readiness",text:"HTTPS: enable on hosting platform or use Let\\'s Encrypt. CORS: restrict to frontend domain. Logging: use morgan for HTTP logging, winston for app logs. Error handling: detailed in dev, generic in prod. Rate limiting: express-rate-limit. Security headers: helmet."}],interviewAnswer:"Deploy MERN by building React and serving from Express for simplicity, or host separately for scalability. Configure environment variables on the hosting platform. Enable HTTPS, restrict CORS, use a process manager (PM2), implement logging and monitoring. Always test the production build locally first.",interviewQuestions:[{question:"How do you deploy the MERN backend?",answer:"Host on Render, Railway, DigitalOcean, or AWS. Set environment variables, build command, start script, and connect to MongoDB Atlas."},{question:"How do you serve React from Express?",answer:'Build React (npm run build), serve static files with express.static("client/build"), add catch-all route for index.html.'},{question:"What is the advantage of separate frontend/backend hosting?",answer:"Scalability: frontend on CDN (Vercel/Netlify), backend on dedicated servers. Each can scale independently."},{question:"What is PM2?",answer:"A process manager for Node.js that keeps your app running, auto-restarts on crash, and manages logs."},{question:"How do you handle CORS in production?",answer:'Set cors() origin to the specific frontend domain (not *). Example: origin: "https://myapp.com".'},{question:"What environment variables are needed?",answer:"MONGO_URI (Atlas), JWT_SECRET, NODE_ENV=production, PORT, and any API keys."},{question:"How do you handle client-side routing in production?",answer:'Express catch-all route: app.get("*", (req, res) => res.sendFile("index.html")). This serves React for all non-API paths.'},{question:"What is the purpose of the build step?",answer:"Compiles React JSX, minifies code, optimizes assets, creates static files for production serving."},{question:"How do you enable HTTPS?",answer:"Hosting platforms (Render, Vercel) provide HTTPS automatically. For custom servers: Let\\'s Encrypt + Certbot."},{question:"What logging tools are recommended?",answer:"Morgan for HTTP request logging. Winston or Pino for application logging. Sentry for error tracking."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Deployment</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Build React</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">npm run build</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Express Serve</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Static + API</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB Atlas</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Cloud DB</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Env Config</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">process.env</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">PM2</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">Process manager</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Deployment</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Build ? Serve ? Cloud DB ? Config ? Proce</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd">ss Manager. Serve together or separately </text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">with CORS.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">MERN Deployment: Build React, serve from Express o</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">r CDN, MongoDB Atlas, PM2, HTTPS, env vars.</text></svg>',codeExamples:[{title:"Express Production Server",useCase:"Serve React build from Express.",code:`const express = require('express');
const path = require('path');

const app = express();

// API routes
app.use('/api', require('./routes/api'));

// Serve React build
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,description:"Express production configuration serving React build with catch-all route."},{title:"Deploy Script with PM2",useCase:"Process management for production.",code:`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'mern-app',
    script: 'server/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
};

// Commands:
// pm2 start ecosystem.config.js
// pm2 save
// pm2 startup
// pm2 logs mern-app
// pm2 monit`,description:"PM2 ecosystem configuration for cluster mode with max instances."},{title:"Environment Config Module",useCase:"Centralized environment config.",code:`// config/index.js
const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/myapp',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  cloudinary: {
    name: process.env.CLOUDINARY_NAME,
    key: process.env.CLOUDINARY_KEY,
    secret: process.env.CLOUDINARY_SECRET
  }
};

module.exports = config;`,description:"Centralized config module reading from environment variables with sensible defaults."},{title:"Production CORS Setup",useCase:"Restrict CORS in production.",code:`const cors = require('cors');
const config = require('./config');

const corsOptions = {
  origin: config.nodeEnv === 'production'
    ? config.corsOrigin
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));`,description:"Environment-aware CORS configuration � permissive in dev, restricted in production."},{title:"Dockerfile for MERN",useCase:"Containerized deployment.",code:`FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Build React
WORKDIR /app/client
RUN npm ci && npm run build

WORKDIR /app
EXPOSE 5000

CMD ["node", "server/server.js"]`,description:"Multi-stage Dockerfile for containerized MERN deployment."}],mcqQuestions:[{question:"How do you serve React from Express in production?",options:["proxy","express.static","res.send","app.render"],answer:1,explanation:'Express serves the built React files using express.static("client/build").'},{question:"What catch-all route is needed for React?",options:['app.get("/api")','app.get("*") serving index.html','app.get("/")','app.get("/build")'],answer:1,explanation:"A catch-all route serves index.html for all non-API paths to support client-side routing."},{question:"What process manager is recommended for Node.js?",options:["nodemon","PM2","forever","supervisor"],answer:1,explanation:"PM2 is the most popular production process manager for Node.js."},{question:"What should CORS origin be in production?",options:["*","The frontend domain","localhost","No CORS needed"],answer:1,explanation:"CORS origin should be the specific frontend domain for security."},{question:"What environment variable prefix does Vite use?",options:["REACT_APP_","VITE_","PUBLIC_","CLIENT_"],answer:1,explanation:"Vite uses VITE_ prefix for client-side environment variables."},{question:"What is the purpose of the build step?",options:["Run tests","Compile and optimize React for production","Install dependencies","Start the server"],answer:1,explanation:"npm run build compiles React into optimized static files for production."},{question:"MERN Deployment — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Deployment — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Deployment — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Deployment — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_deployment};
