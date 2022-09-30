import { AppRegistry } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Routes } from "./src/routes";

import { API_URL } from "@env";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <TailwindProvider>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </TailwindProvider>
  );
}

AppRegistry.registerComponent("deliveroo-clone", () => App);
