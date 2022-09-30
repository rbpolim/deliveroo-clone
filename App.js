import React from "react";
import { AppRegistry } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6hydf8v4l6001uk27lwg9lv/master",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <ApolloProvider client={client}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </ApolloProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("deliveroo-clone", () => App);
