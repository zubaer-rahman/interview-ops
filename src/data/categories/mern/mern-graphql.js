export const mern_graphql = {
  "id": "mern-graphql",
  "title": "MERN + GraphQL",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "GraphQL is an alternative to REST API that lets clients request exactly the data they need, no more, no less.",
    "Apollo Server integrates with Express to provide a GraphQL endpoint. Apollo Client is the React client library.",
    "Schema defines types (typeDefs). Resolvers implement the data-fetching logic. Queries read data, Mutations write data.",
    "Benefits: no over-fetching/under-fetching, single endpoint, strong typing, introspection and auto-generated docs."
  ],
  "laymanDefinition": "GraphQL is like a custom sandwich shop vs a fixed-menu restaurant. With REST, you order the #3 combo and eat around the parts you do not want (over-fetching). With GraphQL, you build your own sandwich: \"I want turkey, cheese, lettuce � no tomato, no onion\" (exactly what you need). The chef (server) makes it fresh every time.",
  "deepDive": [
    {
      "heading": "GraphQL vs REST",
      "text": "REST: multiple endpoints (/api/users, /api/users/:id/posts), fixed response structure, over-fetching/under-fetching common. GraphQL: single endpoint (/graphql), client specifies exact fields in query, one request gets all needed data. GraphQL requires more server complexity but gives client flexibility."
    },
    {
      "heading": "Apollo Server Setup",
      "text": "Install apollo-server-express, graphql. Define typeDefs (schema) using gql tag. Define resolvers (functions that return data for each field). Create ApolloServer instance with typeDefs and resolvers. Apply middleware to Express app with server.applyMiddleware({ app })."
    },
    {
      "heading": "GraphQL Schema (typeDefs)",
      "text": "types: define object shapes (User, Post, Item). Query type: defines available queries (users, items(id)). Mutation type: defines data modifications (createUser, deleteItem). Input types: for mutation arguments. Enums: for fixed value sets. Custom scalars: for dates, URLs."
    },
    {
      "heading": "Resolvers",
      "text": "Functions that resolve each field in the schema. Signature: (parent, args, context, info). parent: parent resolver result (for nested types). args: query arguments. context: shared context (user, db, data loaders). info: query details. Resolvers can be async and fetch from databases or APIs."
    },
    {
      "heading": "Apollo Client (React)",
      "text": "Install @apollo/client, graphql. Create ApolloClient with uri and cache. Wrap app with ApolloProvider. Use useQuery hook for data fetching. Use useMutation for data modification. Cache: InMemoryCache normalizes and caches results. Optimistic updates for instant UI feedback."
    }
  ],
  "interviewAnswer": "GraphQL with MERN gives clients flexible data fetching. Apollo Server on Express, Apollo Client on React. Define schema with typeDefs, implement resolver functions. Use queries for reading, mutations for writing. Leverage the cache for performance. Add subscriptions for real-time via WebSocket.",
  "interviewQuestions": [
    {
      "question": "What is GraphQL?",
      "answer": "A query language for APIs that lets clients request exactly the data they need from a single endpoint."
    },
    {
      "question": "How is GraphQL different from REST?",
      "answer": "GraphQL: single endpoint, client specifies fields, no over-fetching. REST: multiple endpoints, fixed response structure."
    },
    {
      "question": "What is Apollo Server?",
      "answer": "A GraphQL server implementation that integrates with Express to handle GraphQL queries and mutations."
    },
    {
      "question": "What are typeDefs?",
      "answer": "GraphQL schema definitions written in the Schema Definition Language (SDL) using the gql template tag."
    },
    {
      "question": "What are resolvers?",
      "answer": "Functions that return data for each field in the schema. They fetch from databases, APIs, or compute values."
    },
    {
      "question": "What is the difference between Query and Mutation?",
      "answer": "Queries fetch data (read operations). Mutations modify data (create, update, delete) and can return the modified data."
    },
    {
      "question": "What is Apollo Client?",
      "answer": "A React GraphQL client that provides useQuery and useMutation hooks with built-in caching."
    },
    {
      "question": "What is the InMemoryCache?",
      "answer": "Apollo Client cache that normalizes and caches GraphQL query results for instant subsequent responses."
    },
    {
      "question": "What are GraphQL subscriptions?",
      "answer": "Real-time updates via WebSocket � clients subscribe to events and receive pushed data when mutations occur."
    },
    {
      "question": "What is a resolver\\'s context argument?",
      "answer": "An object shared across all resolvers containing things like the authenticated user, database connection, and data loaders."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">MERN + GraphQL</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Schema</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">typeDefs</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Query</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Read data</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Mutation</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Write data</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Resolver</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fetch logic</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Apollo Client</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">React hooks</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">MERN + GraphQL</text><text x=\"265\" y=\"162\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Apollo Server (Express) + Apollo Client (</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">React). Single endpoint, exact data, stro</text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ng typing, subscriptions.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">GraphQL: Client-specified queries, single endpoint</text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">, Apollo Server + Client, real-time subscriptions.</text></svg>",
  "codeExamples": [
    {
      "title": "Apollo Server Setup (Express)",
      "useCase": "GraphQL server integration.",
      "code": "const { ApolloServer, gql } = require('apollo-server-express');\nconst { typeDefs, resolvers } = require('./graphql');\n\nasync function startServer() {\n  const server = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context: ({ req }) => ({\n      user: req.user,\n      db: mongoose.connection\n    })\n  });\n\n  await server.start();\n  server.applyMiddleware({ app, path: '/graphql' });\n\n  app.listen(5000, () => {\n    console.log(`Server at http://localhost:5000${server.graphqlPath}`);\n  });\n}\n\nstartServer();",
      "description": "Apollo Server integration with Express and context passing."
    },
    {
      "title": "GraphQL Schema (typeDefs)",
      "useCase": "Type definitions for items and users.",
      "code": "const { gql } = require('apollo-server-express');\n\nconst typeDefs = gql`\n  type Item {\n    _id: ID!\n    name: String!\n    description: String\n    price: Float!\n    user: User!\n    createdAt: String\n  }\n\n  type User {\n    _id: ID!\n    name: String!\n    email: String!\n    items: [Item]\n  }\n\n  type Query {\n    items: [Item]\n    item(id: ID!): Item\n    users: [User]\n  }\n\n  type Mutation {\n    createItem(name: String!, price: Float!, description: String): Item\n    deleteItem(id: ID!): Boolean\n  }\n`;",
      "description": "GraphQL schema definition with types, queries, and mutations."
    },
    {
      "title": "Resolvers Implementation",
      "useCase": "Data fetching logic.",
      "code": "const Item = require('../models/Item');\nconst User = require('../models/User');\n\nconst resolvers = {\n  Query: {\n    items: async () => {\n      return await Item.find().populate('user').lean();\n    },\n    item: async (_, { id }) => {\n      return await Item.findById(id).populate('user').lean();\n    },\n    users: async () => {\n      return await User.find().lean();\n    }\n  },\n  Mutation: {\n    createItem: async (_, { name, price, description }, { user }) => {\n      const item = await Item.create({ name, price, description, user: user.id });\n      return item.toObject();\n    },\n    deleteItem: async (_, { id }, { user }) => {\n      await Item.deleteOne({ _id: id, user: user.id });\n      return true;\n    }\n  },\n  Item: {\n    user: async (item) => {\n      return await User.findById(item.user).lean();\n    }\n  }\n};",
      "description": "GraphQL resolvers with MongoDB integration and nested field resolution."
    },
    {
      "title": "Apollo Client (React)",
      "useCase": "GraphQL queries in React.",
      "code": "import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';\n\nconst client = new ApolloClient({\n  uri: '/graphql',\n  cache: new InMemoryCache(),\n  headers: {\n    authorization: `Bearer ${localStorage.getItem('token')}`\n  }\n});\n\nconst GET_ITEMS = gql`\n  query GetItems {\n    items {\n      _id\n      name\n      price\n      user { name }\n    }\n  }\n`;\n\nfunction ItemsList() {\n  const { loading, error, data } = useQuery(GET_ITEMS);\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n  return data.items.map(item => (\n    <div key={item._id}>{item.name} - ${item.price} by {item.user.name}</div>\n  ));\n}",
      "description": "Apollo Client setup with query hook and auth header."
    },
    {
      "title": "GraphQL Subscription (Real-Time)",
      "useCase": "Real-time updates with subscriptions.",
      "code": "// Schema\ntype Subscription {\n  itemCreated: Item\n}\n\n// Resolver\nconst { PubSub } = require('graphql-subscriptions');\nconst pubsub = new PubSub();\n\nconst resolvers = {\n  Mutation: {\n    createItem: async (_, args, { user }) => {\n      const item = await Item.create({ ...args, user: user.id });\n      pubsub.publish('ITEM_CREATED', { itemCreated: item });\n      return item;\n    }\n  },\n  Subscription: {\n    itemCreated: {\n      subscribe: () => pubsub.asyncIterator(['ITEM_CREATED'])\n    }\n  }\n};\n\n// Client\nconst ITEM_CREATED = gql`\n  subscription {\n    itemCreated { _id name price }\n  }\n`;\nfunction LiveItems() {\n  const { data } = useSubscription(ITEM_CREATED);\n  useEffect(() => {\n    if (data) addItem(data.itemCreated);\n  }, [data]);\n}",
      "description": "GraphQL subscriptions for real-time updates using PubSub system."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is the main advantage of GraphQL over REST?",
      "options": [
        "Faster requests",
        "Client specifies exact data needed",
        "Easier to implement",
        "More secure"
      ],
      "answer": 1,
      "explanation": "GraphQL clients request only the fields they need, eliminating over-fetching and under-fetching."
    },
    {
      "question": "What is Apollo Server?",
      "options": [
        "A React component",
        "A GraphQL server for Express",
        "A database",
        "A caching layer"
      ],
      "answer": 1,
      "explanation": "Apollo Server is a GraphQL server that integrates with Express middleware."
    },
    {
      "question": "What do resolvers do?",
      "options": [
        "Define schema types",
        "Return data for each field",
        "Cache responses",
        "Validate input"
      ],
      "answer": 1,
      "explanation": "Resolvers are functions that fetch and return data for each field in the GraphQL schema."
    },
    {
      "question": "What is the difference between Query and Mutation?",
      "options": [
        "No difference",
        "Query reads, Mutation writes",
        "Query writes, Mutation reads",
        "Query is faster"
      ],
      "answer": 1,
      "explanation": "Queries are for reading data. Mutations are for creating, updating, or deleting data."
    },
    {
      "question": "What is the Apollo Client InMemoryCache?",
      "options": [
        "A database",
        "A local cache of query results",
        "A network cache",
        "A file cache"
      ],
      "answer": 1,
      "explanation": "InMemoryCache normalizes and caches GraphQL results for instant responses."
    },
    {
      "question": "What do GraphQL subscriptions enable?",
      "options": [
        "Faster queries",
        "Real-time updates via WebSocket",
        "Caching",
        "Authentication"
      ],
      "answer": 1,
      "explanation": "Subscriptions push real-time updates to clients when mutations occur."
    },
    {
      "question": "MERN + GraphQL — What reduces errors most?",
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
      "question": "MERN + GraphQL — What improves speed?",
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
      "question": "MERN + GraphQL — What is key for monitoring?",
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
      "question": "MERN + GraphQL — What ensures quality?",
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
