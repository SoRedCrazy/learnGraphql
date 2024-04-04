const { ApolloServer } = require("@apollo/server");
const { applyMiddleware } = require('graphql-middleware');
const permissions = require('./guards/index.js');
const { startStandaloneServer } = require("@apollo/server/standalone");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

const server = new ApolloServer({ typeDefs, resolvers ,context: {models}});

dotenv.config();
connectDB();

//const serverWithMiddleware = applyMiddleware(server, permissions);

startStandaloneServer(serverWithMiddleware, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});