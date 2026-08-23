const e={id:"mern-setup",title:"MERN Stack Setup",difficulty:"beginner",estimatedMinutes:15,tldr:["Setting up a MERN project requires Node.js, MongoDB (local or Atlas), and a code editor.","Backend: initialize with npm init, install express, mongoose, dotenv, cors, nodemon.","Frontend: create with create-react-app or Vite, install axios, react-router-dom.","Environment variables: store MongoDB URI, JWT secret, and port in .env file using dotenv."],laymanDefinition:"Setting up MERN is like preparing a kitchen for a new restaurant. First you need the stove (Node.js), the fridge (MongoDB), the prep station (Express), and the dining setup (React). Each needs to be installed, configured, and connected before you can start cooking (building the app).",deepDive:[{heading:"Prerequisites",text:"Node.js (v18+ LTS): runtime for backend. npm/yarn: package management. MongoDB: install locally or use MongoDB Atlas (cloud). Code editor: VS Code recommended. Git: version control. Postman/Insomnia: API testing tool."},{heading:"Backend Project Setup",text:'mkdir server && cd server && npm init -y. Install: npm i express mongoose dotenv cors bcrypt jsonwebtoken. Dev deps: npm i -D nodemon. Folder structure: /models, /routes, /controllers, /middleware, /config. Add start script: "nodemon server.js".'},{heading:"Frontend Project Setup",text:'Using Vite: npm create vite@latest client -- --template react. cd client && npm i axios react-router-dom. Folder structure: /components, /pages, /hooks, /context, /services. Proxy: add "proxy": "http://localhost:5000" to package.json for dev.'},{heading:"Environment Configuration",text:'.env file: MONGO_URI, JWT_SECRET, PORT, NODE_ENV. dotenv: require("dotenv").config() in server.js. Never commit .env to git � add to .gitignore. Use .env.example as a template file in the repo.'},{heading:"Running the Stack",text:"Terminal 1: cd server && npm run dev (Express on port 5000). Terminal 2: cd client && npm run dev (React/Vite on port 5173). Both running simultaneously. The proxy forwards /api requests from React to Express."}],interviewAnswer:"MERN setup involves initializing the backend with Express + Mongoose + dotenv, the frontend with React (Vite/Next.js), configuring environment variables, and connecting both via proxy or CORS. Always use .env for secrets and never commit them.",interviewQuestions:[{question:"What are the prerequisites for MERN?",answer:"Node.js (v18+), npm/yarn, MongoDB (local or Atlas), code editor, Git."},{question:"How do you initialize a backend project?",answer:"npm init -y, install express, mongoose, dotenv, cors, and devDependency nodemon."},{question:"How do you initialize a frontend project?",answer:"Using Vite: npm create vite@latest client -- --template react. Or create-react-app."},{question:"What is the purpose of dotenv?",answer:"To load environment variables from a .env file into process.env."},{question:"How do you connect Express to MongoDB?",answer:"Using mongoose.connect(MONGO_URI) with the connection string from MongoDB Atlas or local instance."},{question:"What is nodemon?",answer:"A dev tool that automatically restarts the Node.js server when file changes are detected."},{question:"How do you handle CORS in development?",answer:"Use cors middleware on Express: app.use(cors()). Or set up a proxy in the React dev server."},{question:"What port does Express typically run on?",answer:"Port 5000 by convention. React/Vite uses port 5173 (or 3000 for CRA)."},{question:"How do you structure a MERN backend?",answer:"/models � Mongoose schemas, /routes � API endpoints, /controllers � request handlers, /middleware � auth/validation, /config � database and env config."},{question:"What should be in .gitignore for MERN?",answer:"node_modules/, .env, dist/, build/, .DS_Store, *.log."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Stack Setup</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Node.js</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Runtime v18+</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Express</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">npm init -y</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Atlas / Local</text><rect x="10" y="125" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">React</text><text x="60" y="144" text-anchor="middle" font-size="9" fill="#ddd">Vite / CRA</text><rect x="10" y="155" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">.env</text><text x="60" y="174" text-anchor="middle" font-size="9" fill="#ddd">Config vars</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="138" x2="140" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="168" x2="140" y2="168" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="230" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="265" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Stack Setup</text><text x="265" y="162" text-anchor="middle" font-size="9" fill="#ddd">Node + Express + MongoDB + React. Install</text><text x="265" y="173" text-anchor="middle" font-size="9" fill="#ddd"> deps, configure env, connect via proxy/C</text><text x="265" y="184" text-anchor="middle" font-size="9" fill="#ddd">ORS, run both servers.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">MERN Setup: Initialize Node, Express, MongoDB, Rea</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">ct projects. Configure environment and dev workflo</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">w.</text></svg>',codeExamples:[{title:"Server Setup Script",useCase:"Complete backend initialization.",code:`mkdir server && cd server
npm init -y
npm i express mongoose dotenv cors bcrypt jsonwebtoken
npm i -D nodemon

echo 'PORT=5000' > .env
echo 'MONGO_URI=mongodb+srv://...' >> .env
echo 'JWT_SECRET=mysecret' >> .env

// package.json scripts:
// "start": "node server.js",
// "dev": "nodemon server.js"`,description:"Commands to initialize the Express backend with all dependencies."},{title:"Client Setup with Vite",useCase:"React frontend creation.",code:`npm create vite@latest client -- --template react
cd client
npm i axios react-router-dom

// Add to vite.config.js:
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:5000' }
  }
})`,description:"Create React app with Vite and configure proxy for API calls."},{title:"MongoDB Connection with Mongoose",useCase:"Database connection setup.",code:`const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(\`MongoDB connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;`,description:"Reusable MongoDB connection function with error handling."},{title:".env.example Template",useCase:"Environment template for team.",code:`# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/mydb

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Email (optional)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587`,description:"Template .env file that can be committed as .env.example for onboarding."},{title:"Folder Structure Script",useCase:"Create full project scaffold.",code:`mkdir -p server/{models,routes,controllers,middleware,config}
mkdir -p client/src/{components,pages,hooks,context,services,utils}

# Backend structure:
# server/
#   server.js          -- entry point
#   config/db.js       -- MongoDB connection
#   models/User.js     -- Mongoose schemas
#   routes/auth.js     -- Express routes
#   controllers/       -- Request handlers
#   middleware/auth.js -- JWT middleware
#
# Frontend structure:
# client/src/
#   App.jsx            -- Root component
#   pages/             -- Route pages
#   components/        -- Reusable UI
#   context/           -- React Context
#   services/api.js    -- Axios config`,description:"Recommended folder structure for clean separation of concerns."}],mcqQuestions:[{question:"What is the recommended port for Express?",options:["3000","5000","8080","5173"],answer:1,explanation:"Express typically runs on port 5000 by convention."},{question:"Which tool auto-restarts the server on changes?",options:["express","nodemon","dotenv","mongoose"],answer:1,explanation:"nodemon watches for file changes and restarts the server automatically."},{question:"What is the purpose of the proxy in Vite config?",options:["Encrypt data","Forward API calls to Express","Cache responses","Minify code"],answer:1,explanation:"The proxy forwards /api requests from the React dev server to Express during development."},{question:"How do you load .env variables?",options:["import env from .env",'require("dotenv").config()',"process.loadEnv()","import.meta.env"],answer:1,explanation:"dotenv.config() loads .env variables into process.env."},{question:"What should NOT be committed to git?",options:["server.js",".env","package.json","vite.config.js"],answer:1,explanation:".env contains secrets and should be in .gitignore."},{question:"Which dev dependency is used for auto-restart?",options:["express","nodemon","mongoose","cors"],answer:1,explanation:"nodemon is a dev dependency that auto-restarts the server on file changes."},{question:"MERN Stack Setup — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Stack Setup — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Stack Setup — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Stack Setup — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_setup};
