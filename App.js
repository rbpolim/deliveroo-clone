import { AppRegistry } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import { store } from "./src/app/store";

import { Routes } from "./src/routes";

import { API_URL } from "@env";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </Provider>
    </TailwindProvider>
  );
}

AppRegistry.registerComponent("deliveroo-clone", () => App);
