import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "@radix-ui/themes/styles.css";

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
      <Theme accentColor="bronze" grayColor="mauve">
        <App />
      </Theme>
    </ApolloProvider>
  </React.StrictMode>,
);
