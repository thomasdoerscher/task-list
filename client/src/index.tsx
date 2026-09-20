import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { createRoot } from "react-dom/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000",
  }),
})

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      Hello world
    </ApolloProvider>
  </React.StrictMode>,
);
