const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions")
const SpeakerAPI = require("./datasources/speaker.js");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI()
});
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`GrapQL running at ${url}`);
});
