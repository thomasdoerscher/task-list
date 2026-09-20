import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import gql from "graphql-tag";
import path from "path";


const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  }),
);

const resolvers = {
  Query: {
    tasks: () => [],
  },
};


async function startApolloServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  const { url } = await startStandaloneServer(server);

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
