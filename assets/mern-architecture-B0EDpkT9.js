const e={id:"mern-architecture",title:"MERN Architecture",difficulty:"intermediate",estimatedMinutes:20,tldr:["MERN is a full-stack JavaScript framework: MongoDB (database), Express.js (backend), React (frontend), Node.js (runtime).","Architecture follows a three-tier pattern: frontend (React), backend (Express/Node), database (MongoDB).","React handles UI rendering in the browser, Express serves RESTful APIs, Node provides runtime, MongoDB stores data as documents.","MERN enables full-stack JavaScript development � one language (JavaScript/TypeScript) across the entire stack."],laymanDefinition:"MERN is like a restaurant. MongoDB is the pantry/storage (where ingredients/data are kept). Express is the kitchen workflow (prep and serve). React is the dining area (where customers see the meal). Node.js is the chef's tools (the runtime that makes everything work).",deepDive:[{heading:"Three-Tier Architecture",text:"Frontend tier: React SPA handles UI, routing, state management. Backend tier: Express.js provides REST/GraphQL API, middleware, business logic. Database tier: MongoDB stores data in flexible, JSON-like documents. Communication: React ? HTTP fetch ? Express ? Mongoose ? MongoDB."},{heading:"Data Flow",text:"Client sends HTTP request ? Express routes handle it ? Mongoose models interact with MongoDB ? Response sent back as JSON ? React receives and updates state ? UI re-renders. Unidirectional data flow: Action ? Reducer ? Store ? View. Real-time: Socket.io for bidirectional events."},{heading:"Component Architecture (React)",text:"Component tree: App ? Layout ? Pages ? Features ? Shared UI. State management: Context API for global state, useState/useReducer for local state. Routing: React Router for client-side navigation. Data fetching: useEffect + fetch/axios with loading/error/data states."},{heading:"Express Backend Structure",text:"Layered architecture: Routes (define endpoints) ? Controllers (handle requests/responses) ? Services (business logic) ? Models (Mongoose schemas). Middleware: auth, logging, error handling, validation. Express app connects routes, middleware, and error handlers in a pipeline."},{heading:"MongoDB Document Model",text:"Documents stored as BSON (binary JSON). Collections group related documents. Schema-less but Mongoose provides schemas and validation. Relationships: embedding (denormalization) for read-heavy, references (normalization) for write-heavy. Aggregation pipeline for complex queries."}],interviewAnswer:"MERN architecture separates concerns into three tiers while using a single language. React handles the view layer, Express provides the API, MongoDB stores data, and Node.js ties the backend together. Understanding the data flow between these layers is crucial for building scalable applications.",interviewQuestions:[{question:"What does MERN stand for?",answer:"MongoDB, Express.js, React, Node.js � a full-stack JavaScript framework."},{question:"What are the three tiers of MERN architecture?",answer:"Frontend (React), Backend (Express/Node), Database (MongoDB)."},{question:"How does data flow in a MERN application?",answer:"React ? HTTP request ? Express API ? Mongoose ? MongoDB ? JSON response ? React updates state and re-renders."},{question:"What is the role of Express in MERN?",answer:"Backend framework: handles routing, middleware, API endpoints, authentication, and serves as the bridge between React and MongoDB."},{question:"What is the role of Mongoose?",answer:"Mongoose is an ODM (Object Document Mapper) for MongoDB � provides schema validation, query building, and model definitions."},{question:"How does React communicate with Express?",answer:"Via HTTP requests using fetch or axios. The frontend sends requests to Express API endpoints and receives JSON responses."},{question:"What is the separation of concerns in MERN?",answer:"React = UI/View. Express/Node = API/Business Logic. MongoDB = Data Storage. Each layer is independent and communicates through defined interfaces."},{question:"What is client-side routing in MERN?",answer:"React Router handles navigation without page refresh. Express serves the initial HTML, React manages subsequent route changes."},{question:"What are the benefits of using JavaScript across the stack?",answer:"Code reuse between frontend and backend, shared types (TypeScript), easier context switching, one ecosystem of tools and libraries."},{question:"What is server-side rendering in MERN?",answer:"Using Next.js or Express to render React components on the server for improved SEO and initial load performance."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">MERN Architecture</text><rect x="10" y="35" width="90" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="55" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">React</text><text x="55" y="54" text-anchor="middle" font-size="9" fill="#ddd">Frontend</text><rect x="10" y="65" width="90" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="55" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Express</text><text x="55" y="84" text-anchor="middle" font-size="9" fill="#ddd">API Layer</text><rect x="10" y="95" width="90" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="55" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Node.js</text><text x="55" y="114" text-anchor="middle" font-size="9" fill="#ddd">Runtime</text><rect x="10" y="125" width="90" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="55" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MongoDB</text><text x="55" y="144" text-anchor="middle" font-size="9" fill="#ddd">Database</text><line x1="100" y1="48" x2="130" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="100" y1="78" x2="130" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="100" y1="108" x2="130" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="100" y1="138" x2="130" y2="138" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="140" y="35" width="240" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="260" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">MERN Architecture</text><text x="260" y="151" text-anchor="middle" font-size="9" fill="#ddd">Full-stack JavaScript: React SPA ? Express </text><text x="260" y="162" text-anchor="middle" font-size="9" fill="#ddd">REST API ? Mongoose ODM ? MongoDB. Three-ti</text><text x="260" y="173" text-anchor="middle" font-size="9" fill="#ddd">er architecture with unidirectional data fl</text><text x="260" y="184" text-anchor="middle" font-size="9" fill="#ddd">ow.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">MERN: MongoDB + Express + React + Node.js � one la</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">nguage across the full stack.</text></svg>',codeExamples:[{title:"Express Server Setup",useCase:"Basic Express API server.",code:`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});`,description:"Basic Express server with MongoDB connection and health endpoint."},{title:"React Frontend Fetch",useCase:"React calling Express API.",code:`import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}`,description:"React component fetching data from Express API with loading state."},{title:"Mongoose Model + Route",useCase:"Complete CRUD pattern.",code:`const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);

// Route:
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,description:"Mongoose model definition and Express route for fetching items."},{title:"React Router Setup",useCase:"Client-side routing.",code:`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href='/'>Home</a> |
        <a href='/about'>About</a> |
        <a href='/items'>Items</a>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}`,description:"React Router setup for client-side navigation between pages."}],mcqQuestions:[{question:"What does MERN stand for?",options:["Mongo, Express, React, Node","MySQL, Express, Redux, Node","Mongo, Ember, React, Next","Mongoose, Express, Redux, Nest"],answer:0,explanation:"MERN = MongoDB, Express.js, React, Node.js."},{question:"Which layer handles UI rendering?",options:["MongoDB","Express","React","Node.js"],answer:2,explanation:"React handles the UI/view layer in the browser."},{question:"What connects React to MongoDB?",options:["Direct connection","Express API layer","Node.js only","WebSockets"],answer:1,explanation:"Express serves as the API middleware between React and MongoDB."},{question:"What is Mongoose?",options:["Database","ODM for MongoDB","React component","Testing framework"],answer:1,explanation:"Mongoose is an ODM providing schema validation and query building for MongoDB."},{question:"What architecture pattern does MERN follow?",options:["Monolithic","Three-tier","Microservices","Peer-to-peer"],answer:1,explanation:"MERN follows a three-tier architecture: frontend, backend, database."},{question:"How does React get data from Express?",options:["Direct imports","HTTP fetch/axios","File system","WebSocket only"],answer:1,explanation:"React uses HTTP requests (fetch/axios) to communicate with the Express API."},{question:"MERN Architecture — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"MERN Architecture — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"MERN Architecture — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"MERN Architecture — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_architecture};
