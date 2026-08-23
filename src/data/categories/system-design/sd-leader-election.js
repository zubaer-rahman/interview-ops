export const sd_leader_election = {
  "id": "sd-leader-election",
  "title": "Leader Election",
  "difficulty": "advanced",
  "estimatedMinutes": 15,
  "tldr": [
    "Leader election is a distributed algorithm that ensures one node is designated as the leader (coordinator) while others act as followers — critical for consensus and coordination.",
    "Common algorithms: Bully Algorithm (highest ID node wins), Raft (term-based election with randomized timeouts), Zab (Zookeeper's Atomic Broadcast — similar to Paxos).",
    "Leader handles: write coordination, lock management, task assignment, state replication. Followers: standby, read-only, replicate leader state, vote in elections.",
    "Failure detection: heartbeats (leader sends periodic heartbeats to followers). If followers don't receive heartbeat within timeout, they trigger new election. Randomized timeouts prevent split votes.",
    "Used in: Zookeeper, etcd, Kafka (controller), MongoDB (primary), Redis Sentinel, Kubernetes controller manager."
  ],
  "laymanDefinition": "Leader election is like a group project where one person is the coordinator. Everyone knows who the coordinator is. If the coordinator stops responding (phone dead), someone else volunteers after a random delay — first one to volunteer declares themselves the new coordinator. Random delay prevents everyone talking at once.",
  "deepDive": [
    {
      "heading": "Raft Leader Election",
      "text": "Terms: time divided into terms, each term starts with an election. State: Follower (default), Candidate (election triggered), Leader (elected). Steps: follower times out → becomes candidate → requests votes → gets majority → becomes leader. Receives heartbeat from leader → stays follower. Randomized election timeout (150-300ms) prevents split votes."
    },
    {
      "heading": "Bully Algorithm",
      "text": "When any process detects leader failure: sends ELECTION message to all higher-ID processes. If no response → declares itself leader. If higher-ID responds → election stops, higher-ID takes over. Highest ID wins — simple but O(N^2) messages. Not as robust as Raft."
    },
    {
      "heading": "Split-Brain Problem",
      "text": "Two nodes both believe they are leader (network partition separates them). Both accept writes — data diverges. Prevention: quorum (majority needed), STONITH (shoot other node), fencing (revoke access to shared resources), lease-based leadership (TTL on leadership)."
    },
    {
      "heading": "Lease-Based Leadership",
      "text": "Leader holds a lease (TTL-based lock) that expires. Leader must renew lease before expiry. If leader fails, lease expires, another node acquires lease. Zookeeper: ephemeral sequential znode. etcd: lease with TTL. Prevents split-brain — only one node can hold the lease at a time."
    }
  ],
  "interviewAnswer": "Use Raft-based consensus (etcd, Zookeeper) for leader election in production. They handle failure detection, split-brain prevention, and consistency. Implement leader election yourself only if you can't use these systems — it's notoriously tricky (many edge cases).",
  "interviewQuestions": [
    {
      "question": "What is leader election?",
      "answer": "Process of designating one node as coordinator in a distributed system."
    },
    {
      "question": "What is Raft?",
      "answer": "Consensus algorithm with term-based leader election, randomized timeouts, log replication."
    },
    {
      "question": "What causes a new election?",
      "answer": "Follower doesn\\'t receive heartbeat within election timeout."
    },
    {
      "question": "What is split-brain?",
      "answer": "Two nodes both believe they are leader — dangerous, must be prevented with quorum."
    },
    {
      "question": "What is STONITH?",
      "answer": "Shoot The Other Node In The Head — forcefully ensure old leader is dead."
    },
    {
      "question": "What is a lease?",
      "answer": "Time-bound leadership — leader must renew before expiry."
    },
    {
      "question": "How does Zookeeper handle leader election?",
      "answer": "Ephemeral sequential znodes — first to create becomes leader."
    },
    {
      "question": "What is the Bully Algorithm?",
      "answer": "Highest ID process becomes leader. Simple but O(N^2) messages."
    },
    {
      "question": "What is fencing?",
      "answer": "Preventing old leader from accessing shared resources (revoke permissions, block network)."
    },
    {
      "question": "Why randomized timeouts?",
      "answer": "Prevent simultaneous election triggers — reduces split votes."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Leader Election</text><rect x=\"10\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Follower</text><text x=\"60\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node 1</text><rect x=\"120\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"170\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Follower</text><text x=\"170\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node 2</text><rect x=\"230\" y=\"45\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"280\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Leader</text><text x=\"280\" y=\"71\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Node 3</text><line x1=\"200\" y1=\"61\" x2=\"230\" y2=\"61\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"10\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Heartbeat</text><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Leader→All</text><rect x=\"120\" y=\"85\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"170\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Timeout!</text><text x=\"170\" y=\"111\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">No heartbeat</text><line x1=\"120\" y1=\"117\" x2=\"120\" y2=\"123\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"120\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"170\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Election</text><text x=\"170\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Vote request</text><rect x=\"230\" y=\"125\" width=\"100\" height=\"32\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"280\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">New Leader</text><text x=\"280\" y=\"151\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Majority wins</text><rect x=\"10\" y=\"178\" width=\"480\" height=\"52\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"209\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Leader Election</text><text x=\"250\" y=\"203\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Raft: terms, randomized elections, heartbeats. Prevent split-brain with quorum and fe</text><text x=\"250\" y=\"215\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">ncing.</text><text x=\"240\" y=\"255\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Leader Election: Designate one coordinator. Raft c</text><text x=\"240\" y=\"267\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">onsensus, heartbeats, split-brain prevention.</text></svg>",
  "codeExamples": [
    {
      "title": "Zookeeper Leader Election",
      "useCase": "Ephemeral sequential znodes.",
      "code": "// Zookeeper leader election\nconst zk = new ZooKeeper(\"localhost:2181\");\nconst electionPath = \"/election/node-\";\n// Create ephemeral sequential znode\nconst createdPath = await zk.create(electionPath, \"worker-1-data\",\n  ZooKeeper.EPHEMERAL | ZooKeeper.SEQUENCE);\n// Get all election nodes\nconst children = await zk.getChildren(\"/election\", false);\nchildren.sort(); // sort by sequence number\nconst mySeq = createdPath.replace(electionPath, \"\");\n// If I am the smallest sequence = leader\nconst amLeader = children[0] === \"node-\" + mySeq;\nif (amLeader) {\n  console.log(\"I am the leader!\");\n} else {\n  // Watch the node before me\n  const prevNode = \"/election/\" + children[children.indexOf(\"node-\" + mySeq) - 1];\n  const watcher = new Watcher();\n  watcher.on(\"delete\", () => {\n    console.log(\"Previous leader gone — re-electing...\");\n    checkLeader();\n  });\n  await zk.wget(prevNode, watcher);\n}",
      "description": "Zookeeper leader election with ephemeral sequential znodes."
    },
    {
      "title": "etcd Leadership Lease",
      "useCase": "TTL-based leadership.",
      "code": "// etcd leader election with lease\nconst { Etcd3 } = require(\"etcd3\");\nconst client = new Etcd3({ hosts: \"localhost:2379\" });\n// Create lease with 10s TTL\nconst lease = await client.lease().grant(10);\nlease.on(\"lost\", () => {\n  console.log(\"Lost leadership — lease expired!\");\n  elect();\n});\n// Put key with lease — leader holds this key\nconst leaderKey = \"/leader/service-a\";\ntry {\n  await client.put(leaderKey).value(\"node-1\").lease(lease).exec();\n  // If successful, I am the leader\n  console.log(\"Leader elected, holding lease\");\n  // Keep renewing lease\n  setInterval(async () => {\n    await lease.keepalive();\n  }, 5000);\n} catch (err) {\n  // Key already exists — someone else is leader\n  // Watch for leader deletion\n  const watcher = await client.watch().key(leaderKey).create();\n  watcher.on(\"delete\", () => elect());\n}",
      "description": "etcd lease-based leader election with TTL."
    },
    {
      "title": "Raft Election (Simple Simulation)",
      "useCase": "Raft-like election.",
      "code": "class RaftNode {\n  constructor(id, peers) {\n    this.id = id; this.state = \"FOLLOWER\"; this.term = 0;\n    this.votedFor = null; this.votes = 0;\n    this.peers = peers; this.leader = null;\n    this.electionTimeout = 150 + Math.random() * 150;\n  }\n  start() {\n    this.resetElectionTimer();\n  }\n  resetElectionTimer() {\n    clearTimeout(this.timer);\n    this.timer = setTimeout(() => this.startElection(), this.electionTimeout);\n  }\n  async startElection() {\n    this.state = \"CANDIDATE\";\n    this.term+; this.votedFor = this.id; this.votes = 1;\n    // Request votes from peers (simplified)\n    for (const peer of this.peers) {\n      const granted = await peer.requestVote(this.term, this.id);\n      if (granted) this.votes+;\n    }\n    if (this.votes > this.peers.length / 2) {\n      this.state = \"LEADER\"; this.leader = this.id;\n      this.sendHeartbeat();\n    } else { this.state = \"FOLLOWER\"; }\n  }\n  receiveHeartbeat(leaderId, term) {\n    if (term >= this.term) {\n      this.term = term; this.state = \"FOLLOWER\";\n      this.leader = leaderId; this.resetElectionTimer();\n    }\n  }\n}",
      "description": "Simplified Raft election algorithm — terms, timeouts, vote requests."
    },
    {
      "title": "Kafka Controller Election",
      "useCase": "Kafka-specific leader.",
      "code": "# Kafka controller — one broker acts as controller\n# Manages partition leaders, ISR changes, topic creation\n# Election via Zookeeper: first broker to create /controller znode\n# Config:\n# Controller handles:\n# - Partition leader election\n# - Topic creation/deletion\n# - Broker failure detection\n# - Replica reassignment\n# If controller fails (ZNode disappears):\n# - Remaining brokers compete to create /controller\n# - First to create becomes new controller\n# - New controller reads state from ZK and memory",
      "description": "Kafka controller election via Zookeeper."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Leader election designates?",
      "options": [
        "Multiple coordinators",
        "One coordinator",
        "No coordinator",
        "Random node"
      ],
      "answer": 1,
      "explanation": "One node acts as coordinator/leader."
    },
    {
      "question": "Raft uses what to trigger election?",
      "options": [
        "Timer expiry",
        "Manual trigger",
        "Network failure",
        "High load"
      ],
      "answer": 0,
      "explanation": "Election timeout triggers election when no heartbeat received."
    },
    {
      "question": "Randomized timeouts prevent?",
      "options": [
        "Fast election",
        "Split votes",
        "Data loss",
        "Network traffic"
      ],
      "answer": 1,
      "explanation": "Reduces simultaneous election starts."
    },
    {
      "question": "Split-brain means?",
      "options": [
        "Network split",
        "Two leaders",
        "Data conflict",
        "Node failure"
      ],
      "answer": 1,
      "explanation": "Two nodes both believe they are leader."
    },
    {
      "question": "Quorum prevents?",
      "options": [
        "Slow election",
        "Split-brain",
        "Data loss",
        "Network issues"
      ],
      "answer": 1,
      "explanation": "Quorum (majority) ensures single leader."
    },
    {
      "question": "Fencing prevents?",
      "options": [
        "Old leader accessing resources",
        "New leader election",
        "Heartbeat failures",
        "Data replication"
      ],
      "answer": 0,
      "explanation": "Revokes old leader\\'s access to shared resources."
    },
    {
      "question": "Leader Election — What reduces errors most?",
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
      "question": "Leader Election — What improves speed?",
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
      "question": "Leader Election — What is key for monitoring?",
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
      "question": "Leader Election — What ensures quality?",
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
