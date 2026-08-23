export const mern_real_time = {
  "id": "mern-real-time",
  "title": "Real-Time with Socket.io",
  "difficulty": "intermediate",
  "estimatedMinutes": 20,
  "tldr": [
    "Socket.io enables real-time, bidirectional communication between React frontend and Express backend via WebSocket connections.",
    "Unlike HTTP (request-response), WebSocket maintains a persistent connection for instant data push from server to client.",
    "Socket.io provides: rooms (group clients), events (custom named messages), broadcasting, fallback to HTTP long-polling.",
    "Common use cases: chat apps, live notifications, collaborative editing, real-time dashboards, online gaming."
  ],
  "laymanDefinition": "Socket.io is like a walkie-talkie vs a telephone. HTTP is a telephone � you call (request), someone answers (response), then hang up. Socket.io is a walkie-talkie � once you turn it on (connect), you and the other person can talk anytime without redialing. You can also broadcast to everyone on the channel (room).",
  "deepDive": [
    {
      "heading": "WebSocket vs HTTP",
      "text": "HTTP: request-response, stateless, headers on each request, unidirectional (client requests). WebSocket: persistent connection, full-duplex (both directions), low overhead after initial handshake, server push. Socket.io: adds rooms, namespaces, auto-reconnection, fallback transport."
    },
    {
      "heading": "Server Setup (Express + Socket.io)",
      "text": "Create HTTP server with http.createServer(app). Pass to new Server(httpServer). Listen with httpServer.listen(), not app.listen(). Handle connection event: io.on(\"connection\", (socket) => {...}). socket object represents one client."
    },
    {
      "heading": "Client Setup (React)",
      "text": "Install socket.io-client. Create connection: const socket = io(\"http://localhost:5000\"). Listen for events: socket.on(\"eventName\", callback). Emit events: socket.emit(\"eventName\", data). Clean up on unmount: useEffect return () => socket.disconnect()."
    },
    {
      "heading": "Rooms and Broadcasting",
      "text": "Socket.join(\"roomName\"): add client to room. io.to(\"roomName\").emit(\"event\", data): send to all in room. socket.broadcast.emit(\"event\", data): send to all EXCEPT sender. io.emit(\"event\", data): send to ALL connected clients. Rooms are ideal for chat rooms, document collaboration."
    },
    {
      "heading": "Event Patterns",
      "text": "connection/disconnect: built-in lifecycle events. Custom events: emit any named event with data. Acknowledge: callback function as last emit argument for confirmation. Error handling: socket.on(\"error\"), socket.on(\"connect_error\"). Typed events with TypeScript for type safety."
    }
  ],
  "interviewAnswer": "Socket.io adds real-time capabilities to MERN. Server emits events pushed instantly to connected clients. Use rooms for group communication. Handle connection/disconnect lifecycle. Implement reconnection logic. Use namespaces for logical separation. Combine with Express routes for REST + real-time hybrid.",
  "interviewQuestions": [
    {
      "question": "What is Socket.io?",
      "answer": "A library enabling real-time, bidirectional communication between browser and server using WebSocket with fallback options."
    },
    {
      "question": "How is WebSocket different from HTTP?",
      "answer": "WebSocket maintains a persistent connection for full-duplex communication. HTTP is request-response, stateless, unidirectional."
    },
    {
      "question": "How do you set up Socket.io on the server?",
      "answer": "Create HTTP server with http.createServer(app), pass to new Server(httpServer), listen on httpServer, handle io.on(\"connection\")."
    },
    {
      "question": "How do you connect from React?",
      "answer": "Install socket.io-client, call io(serverUrl), listen with socket.on(), emit with socket.emit()."
    },
    {
      "question": "What are Socket.io rooms?",
      "answer": "Logical groups of sockets. Clients join rooms with socket.join(\"roomId\"). Emit to room with io.to(\"roomId\").emit()."
    },
    {
      "question": "What is broadcasting?",
      "answer": "Sending an event to all connected clients except the sender. socket.broadcast.emit(\"event\", data)."
    },
    {
      "question": "How do you handle disconnection?",
      "answer": "socket.on(\"disconnect\", reason => {...}). Clean up: leave rooms, update user status, notify others."
    },
    {
      "question": "What is auto-reconnection?",
      "answer": "Socket.io client automatically attempts to reconnect when the connection drops. Configurable with reconnectionDelay and maxAttempts."
    },
    {
      "question": "What are namespaces?",
      "answer": "Logical channels within Socket.io (io.of(\"/chat\"), io.of(\"/admin\")). Separate concerns without separate servers."
    },
    {
      "question": "How do you authenticate Socket.io connections?",
      "answer": "Pass token in auth option during connection. Server middleware: io.use((socket, next) => { verify token; next(); })."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Real-Time with Socket.io</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Client</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">React App</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Connect</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">socket.io-client</text><line x1=\"110\" y1=\"48\" x2=\"150\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"150\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"35\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"215\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Socket.io Server</text><text x=\"215\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Persistent connectio</text><text x=\"215\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">n</text><rect x=\"10\" y=\"100\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Events</text><text x=\"60\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">emit + on</text><line x1=\"110\" y1=\"113\" x2=\"150\" y2=\"113\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"160\" y=\"100\" width=\"110\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"215\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Rooms</text><text x=\"215\" y=\"119\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Group communication</text><rect x=\"10\" y=\"135\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"60\" y=\"151\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Broadcast</text><text x=\"60\" y=\"154\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">All but sender</text><rect x=\"290\" y=\"35\" width=\"190\" height=\"150\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"385\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Socket.io Flow</text><text x=\"385\" y=\"146\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">React ? socket.io-client ? Socket.</text><text x=\"385\" y=\"157\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">io Server ? Express. Persistent re</text><text x=\"385\" y=\"168\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">al-time communication with rooms a</text><text x=\"385\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">nd events.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Socket.io: Real-time bidirectional communication. </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">WebSocket with rooms, broadcasting, and auto-recon</text><text x=\"240\" y=\"244\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">nection.</text></svg>",
  "codeExamples": [
    {
      "title": "Socket.io Server Setup",
      "useCase": "Express + Socket.io integration.",
      "code": "const express = require('express');\nconst http = require('http');\nconst { Server } = require('socket.io');\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = new Server(server, {\n  cors: {\n    origin: process.env.CLIENT_URL || 'http://localhost:5173',\n    methods: ['GET', 'POST']\n  }\n});\n\nio.use((socket, next) => {\n  const token = socket.handshake.auth.token;\n  if (!token) return next(new Error('Authentication required'));\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    socket.userId = decoded.id;\n    next();\n  } catch (err) { next(new Error('Invalid token')); }\n});\n\nio.on('connection', (socket) => {\n  console.log(`User ${socket.userId} connected`);\n  socket.on('disconnect', () => {\n    console.log(`User ${socket.userId} disconnected`);\n  });\n});\n\nserver.listen(5000, () => console.log('Server with Socket.io on 5000'));",
      "description": "Express + Socket.io server with authentication middleware and connection handling."
    },
    {
      "title": "React Socket.io Client",
      "useCase": "Client connection and event handling.",
      "code": "import { useEffect, useState } from 'react';\nimport { io } from 'socket.io-client';\n\nfunction ChatRoom({ roomId }) {\n  const [messages, setMessages] = useState([]);\n  const [socket, setSocket] = useState(null);\n\n  useEffect(() => {\n    const token = localStorage.getItem('token');\n    const newSocket = io('http://localhost:5000', {\n      auth: { token },\n      reconnection: true,\n      reconnectionAttempts: 5,\n      reconnectionDelay: 1000\n    });\n\n    newSocket.on('connect', () => {\n      newSocket.emit('join-room', roomId);\n    });\n\n    newSocket.on('new-message', (message) => {\n      setMessages(prev => [...prev, message]);\n    });\n\n    setSocket(newSocket);\n    return () => newSocket.disconnect();\n  }, [roomId]);\n\n  const sendMessage = (text) => {\n    socket?.emit('send-message', { roomId, text });\n  };\n\n  return (\n    <div>\n      {messages.map((msg, i) => <div key={i}>{msg.text}</div>)}\n      <input onKeyDown={(e) => e.key === 'Enter' && sendMessage(e.target.value)} />\n    </div>\n  );\n}",
      "description": "React component with Socket.io connection, room joining, and message handling."
    },
    {
      "title": "Real-Time Notifications",
      "useCase": "Broadcast notifications to users.",
      "code": "const userSockets = {};\n\nio.on('connection', (socket) => {\n  userSockets[socket.userId] = socket.id;\n  socket.on('disconnect', () => {\n    delete userSockets[socket.userId];\n  });\n});\n\nfunction notifyUser(userId, notification) {\n  const socketId = userSockets[userId];\n  if (socketId) {\n    io.to(socketId).emit('notification', notification);\n  }\n}\n\nrouter.post('/orders', async (req, res) => {\n  const order = await Order.create(req.body);\n  notifyUser(order.userId, {\n    type: 'order_placed',\n    message: `Order #${order._id} confirmed`,\n    orderId: order._id\n  });\n  res.status(201).json(order);\n});",
      "description": "Real-time notification system using Socket.io to notify specific users."
    },
    {
      "title": "Typing Indicator",
      "useCase": "Show when user is typing.",
      "code": "const [typing, setTyping] = useState(false);\nlet typingTimeout;\n\nconst handleTyping = () => {\n  socket.emit('typing', { roomId, userId: user.id });\n  clearTimeout(typingTimeout);\n  typingTimeout = setTimeout(() => {\n    socket.emit('stop-typing', { roomId, userId: user.id });\n  }, 1000);\n};\n\nsocket.on('typing', (data) => {\n  socket.to(data.roomId).emit('user-typing', data.userId);\n});\n\nsocket.on('stop-typing', (data) => {\n  socket.to(data.roomId).emit('user-stopped-typing', data.userId);\n});\n\nsocket.on('user-typing', (userId) => {\n  setTypingUsers(prev => [...new Set([...prev, userId])]);\n});",
      "description": "Real-time typing indicator with debounced events."
    },
    {
      "title": "Online User Tracking",
      "useCase": "Track connected users.",
      "code": "const onlineUsers = new Map();\n\nio.on('connection', (socket) => {\n  onlineUsers.set(socket.userId, socket.id);\n  io.emit('online-users', Array.from(onlineUsers.keys()));\n  socket.on('disconnect', () => {\n    onlineUsers.delete(socket.userId);\n    io.emit('online-users', Array.from(onlineUsers.keys()));\n  });\n});\n\nconst [onlineUsers, setOnlineUsers] = useState([]);\nuseEffect(() => {\n  socket.on('online-users', (users) => setOnlineUsers(users));\n  return () => socket.off('online-users');\n}, []);",
      "description": "Online user tracking with real-time updates when users connect/disconnect."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What type of communication does Socket.io provide?",
      "options": [
        "Request-response",
        "Bidirectional real-time",
        "One-way push only",
        "Batch processing"
      ],
      "answer": 1,
      "explanation": "Socket.io provides bidirectional real-time communication between client and server."
    },
    {
      "question": "What is a Socket.io room?",
      "options": [
        "A physical server",
        "A logical group of sockets",
        "A database",
        "A React component"
      ],
      "answer": 1,
      "explanation": "Rooms are logical groups that allow emitting events to specific subsets of connected clients."
    },
    {
      "question": "How do you authenticate Socket.io?",
      "options": [
        "HTTP headers",
        "Auth token in connection handshake",
        "URL parameters",
        "No auth needed"
      ],
      "answer": 1,
      "explanation": "Authentication is done by passing a token in the auth option during the initial connection handshake."
    },
    {
      "question": "What does socket.broadcast.emit do?",
      "options": [
        "Sends to all including sender",
        "Sends to all except sender",
        "Sends to one client",
        "Sends to server only"
      ],
      "answer": 1,
      "explanation": "broadcast.emit sends the event to all connected clients except the sender."
    },
    {
      "question": "What is the difference between io.emit and socket.emit?",
      "options": [
        "No difference",
        "io.emit sends to all, socket.emit sends to the socket only",
        "socket.emit is faster",
        "io.emit is deprecated"
      ],
      "answer": 1,
      "explanation": "io.emit sends to all connected clients. socket.emit sends only to that specific client."
    },
    {
      "question": "What is the fallback transport for Socket.io?",
      "options": [
        "HTTP long-polling",
        "FTP",
        "Server-Sent Events",
        "gRPC"
      ],
      "answer": 0,
      "explanation": "Socket.io falls back to HTTP long-polling when WebSocket connections are not supported."
    },
    {
      "question": "Real-Time with Socket.io — What reduces errors most?",
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
      "question": "Real-Time with Socket.io — What improves speed?",
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
      "question": "Real-Time with Socket.io — What is key for monitoring?",
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
      "question": "Real-Time with Socket.io — What ensures quality?",
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
