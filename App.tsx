import React from "react";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import theme from "./theme";
import AppNavigator from "./navigators/AppNavigator";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://api.githunt.com/graphql",
});

const App = (): React.ReactNode => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider style={{ overflow: "hidden" }}>
        <StatusBar style="auto" />
        <IconRegistry icons={EvaIconsPack} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <ApplicationProvider {...eva} theme={theme}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaProvider>
      \
    </ApolloProvider>
  );
};

export default App;
