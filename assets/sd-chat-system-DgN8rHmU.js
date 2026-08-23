const e={id:"sd-chat-system",title:"Design Chat System",difficulty:"advanced",estimatedMinutes:25,tldr:["Design a real-time chat system like WhatsApp, Messenger, or Slack supporting 1-on-1 messaging, group chats, and presence indicators.","Core features: send/receive messages (real-time), 1-on-1 chat, group chat, presence (online/offline/typing), message history, delivery/read receipts, media sharing.","Key metrics: 1B users, 100B messages/day (~1M msg/sec peak). Each message ~1KB. Storage: 100B × 1KB = 100TB/day. Two years: ~73PB.","Real-time: WebSocket (persistent connection) for instant delivery. HTTP long-polling fallback. Push notifications when user offline.","Architecture: Client → WebSocket LB → Chat Service → Message Queue → DB. Presence Service (Redis pub/sub). Notification Service (APNS/FCM).","Group chat: fan-out on write (for small groups) or fan-out on read (for large groups). WhatsApp: fan-out on write. Slack: fan-out on read for large channels."],laymanDefinition:"A chat system is like a postal service with instant messaging built in. Regular mail (HTTP) for history. A direct phone line (WebSocket) for real-time chat. Postman delivers to your home immediately if you're home (online), leaves a notification if you're out (push notification). Group chats = party line phone (small group) or announcement board (large channel).",deepDive:[{heading:"Real-Time Communication",text:"WebSocket: persistent TCP connection for bidirectional real-time messaging. Lower overhead than HTTP. Full-duplex. Connection management at scale: WebSocket LB (ELB, HAProxy), sticky sessions or external session store. Fallback: Server-Sent Events (SSE) or long-polling for clients without WebSocket."},{heading:"Message Flow (1-on-1)",text:"Sender → WebSocket LB → Chat Service: 1) Validate message. 2) Store in DB (timestamped). 3) Publish to receiver\\'s queue/channel. 4) If receiver online → push via WebSocket. 5) If offline → push notification via APNS/FCM. 6) Receiver sends ACK for delivery receipt. 7) Read receipt when message displayed."},{heading:"Group Chat Delivery",text:"Small groups (< 100): fan-out on write — write one copy per recipient, each recipient has their own inbox. Large groups (> 100): fan-out on read — write once to group timeline, each member reads their own cursor position. WhatsApp uses fan-out on write (encrypted per recipient). Slack uses fan-out on read for large channels."},{heading:"Presence and Typing Indicators",text:"Presence: WebSocket heartbeat (ping/pong every 30s). Last seen: stored in Redis with TTL. Online = active WebSocket connection. Typing indicator: user typing → broadcast to recipient/channel (debounced, e.g., every 2s). Disable after 5s of inactivity. Redis pub/sub to broadcast across chat service instances."},{heading:"Message Storage and History",text:"Messages stored in Cassandra/DynamoDB (write-optimized). Partition key: chat_id/recipient_id. Sort key: timestamp (or message_id). Time-series pattern. Retention: unlimited for personal chats, auto-delete for ephemeral. Full-text search: Elasticsearch for message search."}],interviewAnswer:"WebSocket for real-time, WebSocket LB for scale. Fan-out on write for small groups (WhatsApp model). Fan-out on read for large channels (Slack model). Cassandra for message storage (write-optimized). Redis for presence (pub/sub). Push notifications via FCM/APNS. End-to-end encryption (E2EE) for privacy.",interviewQuestions:[{question:"What protocol for real-time?",answer:"WebSocket — persistent, bidirectional, full-duplex TCP connection."},{question:"Fan-out on write vs read?",answer:"Write: copy to each recipient (small groups). Read: single copy, each reads (large groups)."},{question:"How to store messages?",answer:"Cassandra/DynamoDB. Partition: chat_id. Sort: timestamp. Write-optimized."},{question:"How to handle offline delivery?",answer:"Store messages in inbox. Push notification (APNS/FCM). Deliver when online."},{question:"How to implement presence?",answer:"WebSocket heartbeat. Redis TTL-based online status. Pub/sub for cross-instance."},{question:"How do delivery/read receipts work?",answer:"ACK on delivery. Read mark on message display. Both timestamped events."},{question:"How to handle typing indicators?",answer:"Debounced events (every 2s). WebSocket broadcast. Timeout after 5s idle."},{question:"What about media sharing?",answer:"Upload to S3, send message with media URL + thumbnail. Separate media service."},{question:"How to encrypt messages?",answer:"End-to-end: each client has key pair. Message encrypted with recipient\\'s public key."},{question:"How to scale WebSocket connections?",answer:"WebSocket LB (ELB with proxy protocol). Sticky sessions or external session store."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Design Chat System</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Client A</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">WebSocket</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">WS LB</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">HAProxy</text><line x1="200" y1="77" x2="200" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Chat Service</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Validate+Store</text><line x1="110" y1="101" x2="150" y2="101" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="60" y1="117" x2="60" y2="123" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="85" width="100" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="200" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Message Queue</text><text x="200" y="111" text-anchor="middle" font-size="9" fill="#ddd">Kafka/SQS</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Cassandra</text><rect x="150" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="200" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Push Notification</text><text x="200" y="151" text-anchor="middle" font-size="9" fill="#ddd">FCM/APNS</text><rect x="10" y="160" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Redis</text><text x="60" y="186" text-anchor="middle" font-size="9" fill="#ddd">Presence+Pub/Sub</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Chat System</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">WebSocket real-time. Fan-out on write (groups). Cassandra storage. Redis presence. Pu</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">sh notifications.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Chat System: WebSocket real-time messaging. Fan-ou</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">t: write (small groups) or read (large channels). </text><text x="240" y="279" font-size="9" fill="#666" text-anchor="middle">Presence, push, E2EE.</text></svg>',codeExamples:[{title:"WebSocket Chat Server",useCase:"Real-time messaging.",code:`const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });
// Connection map { userId: ws }
const connections = new Map();
server.on("connection", (ws, req) => {
  const userId = authenticateUser(req);
  connections.set(userId, ws);
  // Broadcast presence
  broadcastPresence(userId, "online");
  ws.on("message", async (data) => {
    const msg = JSON.parse(data);
    // Store message
    await messageStore.save({
      from: userId, to: msg.to,
      content: msg.content, timestamp: Date.now(),
      type: msg.type || "text",
    });
    // Deliver to recipient if online
    const recipientWs = connections.get(msg.to);
    if (recipientWs?.readyState === WebSocket.OPEN) {
      recipientWs.send(JSON.stringify({ from: userId, content: msg.content, timestamp: Date.now() }));
    } else {
      // Push notification
      sendPushNotification(msg.to, \`New message from \${userId}\`);
    }
  });
  ws.on("close", () => {
    connections.delete(userId);
    broadcastPresence(userId, "offline");
  });
});`,description:"WebSocket chat server with presence and push notification fallback."},{title:"Message Storage (Cassandra Schema)",useCase:"Write-optimized messages.",code:`CREATE TABLE messages_by_chat (
  chat_id TEXT,
  message_id TIMEUUID,
  sender_id TEXT,
  content TEXT,
  message_type TEXT,
  created_at TIMESTAMP,
  metadata MAP<TEXT, TEXT>,
  PRIMARY KEY (chat_id, message_id)
) WITH CLUSTERING ORDER BY (message_id DESC)
  AND default_time_to_live = 0;
-- For user inbox (fan-out on write):
CREATE TABLE user_inbox (
  user_id TEXT,
  message_id TIMEUUID,
  from_user TEXT,
  chat_id TEXT,
  content TEXT,
  is_read BOOLEAN,
  PRIMARY KEY (user_id, message_id)
) WITH CLUSTERING ORDER BY (message_id DESC);`,description:"Cassandra schema for chat messages and user inbox."},{title:"Redis Presence Service",useCase:"Online/offline tracking.",code:`class PresenceService {
  constructor(redis) {
    this.redis = redis;
    this.PRESENCE_TTL = 120; // 2 min without heartbeat = offline
  }
  async heartbeat(userId) {
    await this.redis.setex("presence:" + userId, this.PRESENCE_TTL, Date.now().toString());
    // Publish to cross-instance channel
    await this.redis.publish("presence", JSON.stringify({ userId, status: "online" }));
  }
  async isOnline(userId) {
    const last = await this.redis.get("presence:" + userId);
    return last !== null;
  }
  async getPresence(userId) {
    const last = await this.redis.get("presence:" + userId);
    if (!last) return { userId, status: "offline", lastSeen: null };
    return { userId, status: "online", lastSeen: parseInt(last) };
  }
  // Subscribe to presence events (all instances)
  subscribe(callback) {
    this.redis.subscribe("presence", (msg) => {
      callback(JSON.parse(msg));
    });
  }
}`,description:"Redis-based presence service with TTL and pub/sub."},{title:"End-to-End Encryption (Concept)",useCase:"Encrypted messaging.",code:`// E2EE key exchange (simplified)
// Each client generates RSA/Curve25519 key pair
const clientKeys = crypto.generateKeyPairSync("x25519");
// When Alice sends to Bob:
// 1. Alice gets Bob's public key from server
const bobPublicKey = await getPublicKey("bob");
// 2. Alice encrypts message with Bob's public key
const encrypted = crypto.publicEncrypt(bobPublicKey, Buffer.from("Hello Bob!"));
// 3. Server stores encrypted message — cannot read it
await messageStore.save({ from: "alice", to: "bob", content: encrypted.toString("base64"), encrypted: true });
// 4. Bob receives and decrypts with his private key
const decrypted = crypto.privateDecrypt(bobPrivateKey, Buffer.from(encrypted, "base64"));
// Perfect Forward Secrecy: use ephemeral keys (Signal protocol) for better security`,description:"End-to-end encryption — server cannot read message content."}],mcqQuestions:[{question:"WebSocket provides what?",options:["HTTP requests","Persistent bidirectional connection","One-way push","File transfer"],answer:1,explanation:"Persistent, bidirectional, full-duplex real-time communication."},{question:"Fan-out on write best for?",options:["Large groups","Small groups","1-on-1","Broadcast"],answer:1,explanation:"Small groups — single write per recipient."},{question:"Cassandra partition key for messages?",options:["Timestamp","chat_id","user_id","message_id"],answer:1,explanation:"Partition by chat_id for efficient retrieval."},{question:"How is presence tracked?",options:["DB query","Redis with TTL + heartbeat","WebSocket only","Polling"],answer:1,explanation:"Redis TTL-based presence with heartbeats."},{question:"What does push notification do?",options:["Open WebSocket","Alert when offline","Sync messages","Encrypt data"],answer:1,explanation:"Notifies offline users of new messages."},{question:"Delivery receipt requires?",options:["Server ACK","Client ACK on delivery","Auto-ACK","No ACK needed"],answer:1,explanation:"Client sends ACK after receiving message."},{question:"Design Chat System — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Design Chat System — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Design Chat System — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Design Chat System — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_chat_system};
